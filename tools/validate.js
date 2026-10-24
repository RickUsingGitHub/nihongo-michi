// Content validator: node tools/validate.js
// Loads the app's data the same way the browser does and reports likely authoring mistakes.
const vm = require('vm');
const fs = require('fs');
const path = require('path');
const SRC = path.join(__dirname, '..', 'src');

const win = { console, addEventListener() {}, matchMedia: () => ({ matches: false, addEventListener() {} }) };
win.window = win;
vm.createContext(win);
const html = fs.readFileSync(path.join(SRC, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]).filter(s => !s.startsWith('app/') || s === 'app/registry.js');
for (const s of scripts) {
  const file = path.join(SRC, s);
  if (!fs.existsSync(file)) { console.log('MISSING', s); continue; }
  try { vm.runInContext(fs.readFileSync(file, 'utf8'), win, { filename: s }); }
  catch (e) { console.log('ERROR in', s, e.message); }
}
const JT = win.JT;
JT.state = { settings: {}, srs: {} };
JT.R.build();
const { R, T, Kana } = JT;
const warn = [];
const W = (where, msg) => warn.push(where + ': ' + msg);

// ---- references ----
const convoIds = new Set();
for (const c of JT.CONVOS) {
  if (convoIds.has(c.id)) W('convo ' + c.id, 'duplicate id');
  convoIds.add(c.id);
  for (const st of c.script) {
    if (st[0] === 'u') for (const o of st[1]) {
      if (o.length < 3) W('convo ' + c.id, 'short option ' + o[0]);
      if (o[5] && !c.script.some(x => x[0] === 'label' && x[1] === o[5])) W('convo ' + c.id, 'missing label ' + o[5]);
      if (o[4] && !o[4].includes('|')) W('convo ' + c.id, 'reply without | ' + o[4]);
    }
  }
  if (!c.script.some(s => s[0] === 'end')) W('convo ' + c.id, 'no end');
}
const lessonIds = new Set();
for (const L of R.lessons) {
  if (lessonIds.has(L.id)) W(L.id, 'duplicate lesson id');
  lessonIds.add(L.id);
  if (L.convo && !convoIds.has(L.convo)) W(L.id, 'missing convo ' + L.convo);
  for (const c of L.kanjiList) if (!R.kanji.has(c)) W(L.id, 'kanji not in database ' + c);
  for (const c of L.kanaList) if (!R.kana.has(c)) W(L.id, 'kana not known ' + c);
  for (const x of L.ex || []) {
    if (x.fill && (x.fill.match(/＿/g) || []).length !== 1) W(L.id, 'fill needs exactly one ＿: ' + x.fill);
    const opts = x.o || [];
    if ((x.fill || x.mc || x.mean || x.resp) && opts.includes(x.a)) W(L.id, 'answer repeated in options: ' + x.a);
    if ((x.fill || x.mc || x.mean || x.resp) && opts.length < 2) W(L.id, 'too few options: ' + JSON.stringify(x).slice(0, 80));
  }
  for (const g of L.grammar || []) if (!g.e || !g.e.length) W(L.id, 'grammar without examples: ' + g.t);
  if (L.reading) for (const q of L.reading.q || []) if (q.length < 5) W(L.id, 'reading question needs 3 distractors: ' + q[0]);
}
for (const n of Object.keys(JT.PLACEMENT || {})) {
  for (const q of JT.PLACEMENT[n]) if (q.length < 5) W('placement ' + n, 'question needs 3 distractors: ' + q[0]);
}

// ---- markup ----
const markups = [];
const add = (where, m) => { if (m && /[぀-ヿ一-鿿]/.test(m)) markups.push([where, m]); };
for (const L of R.lessons) {
  for (const w of L.words) add(L.id + ' word', w.m);
  for (const g of L.grammar || []) { add(L.id + ' gram', g.t); for (const e of g.e || []) add(L.id + ' ex', e[0]); }
  if (L.dialog) for (const l of L.dialog.lines) add(L.id + ' dialog', l[1]);
  if (L.reading) for (const p of L.reading.text) add(L.id + ' reading', p);
  for (const x of L.ex || []) for (const k of ['fill', 'build', 'say', 'resp', 'mean', 'a']) if (typeof x[k] === 'string') add(L.id + ' exercise', x[k]);
}
for (const c of JT.CONVOS) for (const st of c.script) {
  if (st[0] === 'n' || st[0] === 'end') add('convo ' + c.id, st[1]);
  if (st[0] === 'u') for (const o of st[1]) { add('convo ' + c.id, o[0]); if (o[4]) add('convo ' + c.id, o[4].split('|')[0]); }
}
for (const cat of JT.PHRASEBOOK || []) for (const it of cat.items) add('phrase ' + cat.cat, it[0]);

const kanjiReadings = c => {
  const k = R.kanji.get(c);
  if (!k) return null;
  const out = [];
  for (const r of k.on.split('、')) if (r) out.push(Kana.kataToHira(r));
  for (const r of k.kun.split('、')) if (r) out.push(r.replace(/^-|-$/g, '').split('.')[0]);
  return out.filter(Boolean);
};
const voiced = { か: 'が', き: 'ぎ', く: 'ぐ', け: 'げ', こ: 'ご', さ: 'ざ', し: 'じ', す: 'ず', せ: 'ぜ', そ: 'ぞ', た: 'だ', ち: 'ぢ', つ: 'づ', て: 'で', と: 'ど', は: 'ば', ひ: 'び', ふ: 'ぶ', へ: 'べ', ほ: 'ぼ' };
const semi = { は: 'ぱ', ひ: 'ぴ', ふ: 'ぷ', へ: 'ぺ', ほ: 'ぽ' };
function readingOk(c, r) {
  const rs = kanjiReadings(c);
  if (!rs) return true;
  for (const base of rs) {
    const variants = [base, (voiced[base[0]] || '') + base.slice(1), (semi[base[0]] || '') + base.slice(1)];
    if (/[つくきち]$/.test(base)) variants.push(base.slice(0, -1) + 'っ');
    if (base === 'じ') variants.push('ぢ');
    for (const v of variants) if (v && v[0] !== base.slice(1)[0] && (r === v || (r.startsWith(v) && v.length >= 2))) return true;
    if (r === base) return true;
  }
  return false;
}
const seenBad = new Set();
for (const [where, m] of markups) {
  if ((m.match(/\[/g) || []).length !== (m.match(/\]/g) || []).length) W(where, 'unbalanced brackets: ' + m);
  if ((m.match(/\*/g) || []).length % 2) W(where, 'unbalanced * markers: ' + m);
  for (const tok of T.parse(m)) for (const s of tok) {
    if (s.r == null) {
      if ([...s.b].some(Kana.isKanji)) W(where, 'kanji without reading "' + s.b + '" in ' + m);
      continue;
    }
    if (/[぀-ヿ]/.test(s.b)) W(where, 'kana inside ruby base "' + s.b + '" in ' + m);
    const ks = [...s.b].filter(Kana.isKanji);
    if (ks.length === 1 && s.b.length === 1 && !readingOk(ks[0], Kana.kataToHira(s.r))) {
      const key = s.b + '[' + s.r + ']';
      if (!seenBad.has(key)) { seenBad.add(key); W(where, 'unusual reading ' + key + ' (known: ' + kanjiReadings(ks[0]).join(' ') + ')'); }
    }
  }
}

// ---- vocabulary cross-check with the JLPT lists ----
const deckReading = new Map();
for (const lvl of [5, 4, 3, 2, 1]) for (const [m] of JT.VOCAB[lvl]) { const s = T.surface(m); if (!deckReading.has(s)) deckReading.set(s, new Set()); deckReading.get(s).add(T.reading(m)); }
for (const L of R.lessons) for (const w of L.words) {
  const s = T.surface(w.m), r = T.reading(w.m);
  if (deckReading.has(s) && !deckReading.get(s).has(r) && !/\s/.test(w.m)) W(L.id, `word ${s}[${r}] — JLPT list reads it ${[...deckReading.get(s)].join('/')}`);
}

// ---- coverage ----
const taught = new Set(R.lessons.flatMap(L => L.kanjiList));
const n5 = [...R.kanji.values()].filter(k => k.jlpt === 5).map(k => k.c);
const missingN5 = n5.filter(c => !taught.has(c));
console.log('N5 kanji not taught in lessons:', missingN5.join(' ') || 'none');
console.log('lesson kanji by JLPT level:', JSON.stringify([5, 4, 3, 2, 1].map(j => [j, [...taught].filter(c => R.kanji.get(c) && R.kanji.get(c).jlpt === j).length])));
console.log(`levels ${JT.LEVELS.length}, lessons ${R.lessons.length}, words ${R.words.size}, grammar ${R.grammar.size}, convos ${JT.CONVOS.length}`);
console.log(warn.length + ' warnings');
for (const w of warn) console.log('  ' + w);
