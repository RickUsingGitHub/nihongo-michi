// Speech reading check: node tools/tts-check.js [--speak] [--write] [--diag] [--limit N] [--procs N] [--voice name]
//
// Collects every piece of Japanese the app can speak and checks the SSML built for it.
//
// --speak asks the Windows Japanese voice to say every kanji word on its own (audio is only
// synthesized to memory, nothing is played) and works out which words it reads differently
// from the course furigana — e.g. 音 as "on" instead of "oto", 見える as "mamieru". For each word
// it compares the voice's audio for the kanji with its audio for the course reading and for the
// kanji's other readings (MFCC + DTW distance, see acoustic.js).
// --write saves those words to src/data/tts-fix.js; the app then gives the voice the course reading
// for just those words. Other words keep the kanji, because a kana reading loses the word's identity
// and can change its pitch accent (雨 "rain" given as あめ comes out with the accent of 飴 "candy").
const vm = require('vm');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const ac = require('./acoustic');
const SRC = path.join(__dirname, '..', 'src');

const win = { console, addEventListener() {}, matchMedia: () => ({ matches: false, addEventListener() {} }) };
win.window = win;
vm.createContext(win);
const html = fs.readFileSync(path.join(SRC, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]).filter(s => !s.startsWith('app/') || s === 'app/registry.js');
for (const s of scripts) if (fs.existsSync(path.join(SRC, s))) vm.runInContext(fs.readFileSync(path.join(SRC, s), 'utf8'), win, { filename: s });
const JT = win.JT;
JT.state = { settings: {}, srs: {} };
JT.R.build();
const { R, T, Kana } = JT;

const arg = k => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null; };
const has = k => process.argv.includes(k);
const LIMIT = Number(arg('--limit')) || Infinity;
const PROCS = Number(arg('--procs')) || 3;

// ---- everything the app speaks ----
const markups = new Set();
const add = m => { if (typeof m === 'string' && /[぀-ヿ一-鿿]/.test(m)) markups.add(m); };
for (const L of R.lessons) {
  for (const w of L.words) add(w.m);
  for (const g of L.grammar || []) for (const e of g.e || []) add(e[0]);
  if (L.dialog) for (const l of L.dialog.lines) add(l[1]);
  if (L.reading) for (const p of L.reading.text) add(p);
  for (const x of L.ex || []) for (const k of ['build', 'say', 'resp', 'mean', 'a']) add(x[k]);
  for (const x of L.ex || []) for (const o of x.o || []) if (!x.fill) add(o);
  for (const x of L.ex || []) if (x.fill) add(x.fill.replace('＿', x.a));   // the filled-in sentence is what gets spoken
}
for (const c of JT.CONVOS) for (const st of c.script) {
  if (st[0] === 'n' || st[0] === 'end') add(st[1]);
  if (st[0] === 'u') for (const o of st[1]) { add(o[0]); if (o[4]) add(o[4].split('|')[0]); }
}
for (const cat of JT.PHRASEBOOK || []) for (const it of cat.items) add(it[0]);
for (const lvl of [5, 4, 3, 2, 1]) for (const [m] of JT.VOCAB[lvl] || []) add(m);

// ---- SSML sanity ----
const problems = [];
const words = new Map();   // "surface|reading" -> token, for every token that has furigana
for (const m of markups) {
  const ssml = T.ttsSsml(m, true);
  if (ssml && (!ssml.startsWith('<speak') || ssml.length > 8000)) problems.push('bad ssml: ' + m);
  if ((ssml.match(/<sub /g) || []).length !== (ssml.match(/<\/sub>/g) || []).length) problems.push('unbalanced sub: ' + m);
  for (const [, r] of ssml.matchAll(/alias="([^"]*)"/g)) {
    if (!r) problems.push('empty reading: ' + m);
    else if (/[^぀-ゟ゠-ヿー・]/.test(r)) problems.push(`reading with non-kana "${r}": ${m}`);
  }
  if (/[一-鿿]/.test(T.ttsReading(m))) problems.push('kanji left in reading text: ' + m);
  for (const segs of T.parse(m)) {
    if (!segs.some(s => s.r != null)) continue;
    const tok = T.ttsToken(segs);
    if (tok && !words.has(tok.key)) words.set(tok.key, { ...tok, segs });
  }
}
console.log(`${markups.size} spoken texts, ${words.size} distinct kanji words, ${JT.TTS_FIX ? JT.TTS_FIX.size : 0} in tts-fix.js`);
console.log(problems.length ? problems.length + ' SSML problems:\n  ' + problems.slice(0, 40).join('\n  ') : 'SSML OK for all texts');
if (!has('--speak')) process.exit(problems.length ? 1 : 0);

// ---- other readings of a word, from the kanji database ----
function kanjiReadings(c) {
  const k = R.kanji.get(c);
  if (!k) return [];
  const out = new Set();
  const clean = r => r.replace(/[-～〜()（）]/g, '');
  for (const r of k.on.split('、')) if (r) out.add(Kana.kataToHira(clean(r)));
  for (const r of k.kun.split('、')) if (r) out.add(clean(r.split('.')[0]));
  return [...out].filter(Boolean);
}
// every reading the course and the word lists give each spelling (日本: にほん / にっぽん)
const readingsOf = new Map();
for (const w of words.values()) { if (!readingsOf.has(w.surf)) readingsOf.set(w.surf, new Set()); readingsOf.get(w.surf).add(w.read); }
function alternatives(w) {
  const out = new Set([...readingsOf.get(w.surf)].filter(r => r !== w.read));
  w.segs.forEach((s, i) => {
    // digits stay digits in a variant ("10じ"), which is just the course reading again — skip those
    if (s.r == null || ![...s.b].every(c => Kana.isKanji(c) || c === '々')) return;
    const chars = [...s.b];
    let combos = [''];
    for (const [j, c] of chars.entries()) {
      let rs = Kana.isKanji(c) ? kanjiReadings(c) : c === '々' && j ? kanjiReadings(chars[j - 1]) : [c];
      if (!rs.length) return;
      combos = combos.flatMap(p => rs.map(r => p + r)).slice(0, 40);
    }
    for (const alt of combos) {
      const read = w.segs.map((x, k) => (k === i ? alt : x.r != null ? x.r : x.b)).join('');
      if (read !== w.read) out.add(read);
    }
  });
  return [...out].slice(0, 16);
}

// ---- ask the voice ----
function helper() {
  const p = spawn('powershell.exe', ['-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', '-File', path.join(__dirname, '..', 'tts', 'tts.ps1')], { windowsHide: true });
  let buf = '', id = 0;
  const pending = new Map();
  p.stdout.setEncoding('utf8');
  p.stdout.on('data', d => {
    buf += d;
    let i;
    while ((i = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
      if (!line) continue;
      const o = JSON.parse(line);
      pending.get(o.id)(o); pending.delete(o.id);
    }
  });
  const enc = o => JSON.stringify(o).replace(/[\u007f-￿]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
  const req = o => new Promise(r => { o.id = ++id; pending.set(o.id, r); p.stdin.write(enc(o) + '\n'); });
  return {
    req,
    async say(o) { const r = await req({ cmd: 'speak', rate: 1, ...o }); if (r.error) throw new Error(r.error); return Buffer.from(r.wav, 'base64'); },
    end() { p.stdin.end(); }
  };
}
const pcmEq = (a, b) => a.subarray(a.indexOf('data') + 8).equals(b.subarray(b.indexOf('data') + 8));

// The voice misreads a word when one of the other readings is clearly closer to its audio than
// the course reading is, or when its audio is far from the course reading in any case
// (an unusual reading that is not in the kanji database), or when it sounds different AND is
// much longer or shorter (extra or missing syllables: 見える said as "mamieru" is 36% longer).
// A different pitch accent alone gives distances up to about 18 (橋 / はし).
const CLOSER = 0.75, FAR = 24, DIFF = 14, LONGER = 1.2, SHORTER = 0.8;

(async () => {
  const hs = Array.from({ length: PROCS }, helper);
  const { voices } = await hs[0].req({ cmd: 'voices' });
  const want = arg('--voice');
  const v = voices.find(x => /^ja/i.test(x.lang) && (!want || x.name.toLowerCase().includes(want.toLowerCase())));
  if (!v) { console.log('No matching Japanese voice installed'); process.exit(1); }
  console.log('voice:', v.name);
  const only = arg('--words');   // comma-separated surfaces, for spot checks
  let list = [...words.values()];
  if (only) list = list.filter(w => only.split(',').includes(w.surf));
  list = list.slice(0, LIMIT);
  const rows = [];
  let next = 0, done = 0, failed = 0;
  const t0 = Date.now();
  await Promise.all(hs.map(async h => {
    while (next < list.length) {
      const w = list[next++];
      try {
        const K = await h.say({ voice: v.id, text: w.surf });
        const Rr = await h.say({ voice: v.id, text: w.read });
        if (pcmEq(K, Rr)) { rows.push({ w, dR: 0 }); continue; }
        const KF = ac.analyse(K);
        const dR = ac.compare(KF, Rr).dist;
        let best = null, dA = Infinity;
        for (const alt of alternatives(w)) {
          const d = ac.compare(KF, await h.say({ voice: v.id, text: alt })).dist;
          if (d < dA) { dA = d; best = alt; }
        }
        rows.push({ w, dR, best, dA, ratio: KF.length / ac.analyse(Rr).length });
      } catch (e) { failed++; }
      if (++done % 500 === 0) console.log(`  ${done}/${list.length} (${((Date.now() - t0) / 1000).toFixed(0)} s)`);
    }
  }));
  hs.forEach(h => h.end());
  for (const r of rows) {
    r.bad = r.dR > 0 && ((r.best && r.dA < r.dR * CLOSER) || r.dR > FAR || (r.dR > DIFF && (r.ratio > LONGER || r.ratio < SHORTER)));
  }
  const bad = rows.filter(r => r.bad);
  console.log(`checked ${rows.length} words in ${((Date.now() - t0) / 1000).toFixed(0)} s: the voice misreads ${bad.length}; ${failed} errors`);
  const fmt = r => `${r.w.surf}\t${r.w.read}\tdist ${r.dR.toFixed(1)}\tlen ${(r.ratio || 1).toFixed(2)}\t${r.best ? `closest other: ${r.best} ${r.dA.toFixed(1)}` : ''}`;
  if (has('--diag')) {
    console.log('--- misread ---\n' + bad.sort((a, b) => b.dR - a.dR).map(fmt).join('\n'));
    const near = rows.filter(r => !r.bad).sort((a, b) => b.dR - a.dR).slice(0, 40);
    console.log('--- read as written, but least similar ---\n' + near.map(fmt).join('\n'));
  }
  const out = arg('--out');
  if (out) fs.writeFileSync(out, bad.map(fmt).join('\n'), 'utf8');
  if (has('--write')) {
    const prev = has('--merge') && JT.TTS_FIX ? [...JT.TTS_FIX] : [];
    const keys = [...new Set([...prev, ...bad.map(r => r.w.key)])].sort();
    const file = path.join(SRC, 'data', 'tts-fix.js');
    fs.writeFileSync(file,
      '/* Words the Windows Japanese voices read differently from the course furigana when given the kanji\n' +
      ' * (e.g. 音 as "on", 見える as "mamieru"). For these the app gives the voice the course reading instead.\n' +
      ' * Generated by tools/tts-check.js --speak --write — do not edit by hand. */\n' +
      '(function () {\n  const JT = (window.JT = window.JT || {});\n  JT.TTS_FIX = new Set(' + JSON.stringify(keys).replace(/","/g, '",\n    "').replace('["', '[\n    "').replace(/"\]$/, '"\n  ]') + ');\n})();\n', 'utf8');
    console.log(`wrote ${keys.length} words to ${path.relative(process.cwd(), file)}`);
  }
})();
