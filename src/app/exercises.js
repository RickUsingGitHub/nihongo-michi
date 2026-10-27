/* Exercise engine: generators that turn course items into exercises, and renderers for each kind.
 *
 * Exercise kinds:
 *   choice  - pick one option (auto-checks on click)
 *   type    - type an answer; romaji is converted to kana as you type
 *   build   - put word tiles in order
 *   match   - match pairs
 */
(function () {
  const JT = (window.JT = window.JT || {});
  const { h, shuffle, pick, icon } = JT.ui;
  const { T, Kana, R } = JT;

  const PUNCT_END = /[。、？！?!,.]+$/;
  const normEn = s => String(s).toLowerCase().split(/[;,(]/)[0].replace(/^to /, '').trim();

  // ---------------- rendering ----------------
  function optNode(o, spec) {
    if (o.jp != null) {
      const n = h('div', T.el(o.jp, { level: spec.level, furigana: spec.optFurigana }));
      const roma = spec.optRomaji != null ? spec.optRomaji : JT.ui.showRomaji(spec.level);
      if (roma) n.appendChild(h('div.romaji', T.romaji(o.jp)));
      return n;
    }
    return h('div', o.text);
  }

  function promptNode(spec) {
    const p = spec.prompt || {};
    const box = h('div.prompt-box');
    if (p.npc) {
      box.appendChild(h('div.dline', { style: { textAlign: 'left', justifyContent: 'center' } },
        h('div.avatar', p.npc.avatar || '🧑'),
        h('div.bubble', h('div.who', p.npc.who || ''),
          JT.ui.jpBlock(p.npc.jp, { level: spec.level, en: p.npc.en, size: 19 }))));
      return box;
    }
    if (p.audio && p.hide) {
      const b = h('button.btn.blue.lg', { type: 'button' }, icon('speaker'), 'Play again');
      b.onclick = () => JT.Audio.speak(p.audio, { btn: b });
      const slow = h('button.btn.lg', { type: 'button' }, '🐢 Slow');
      slow.onclick = () => JT.Audio.speak(p.audio, { slow: true });
      box.appendChild(h('div.row', { style: { justifyContent: 'center' } }, b, slow));
    } else if (p.fill) {
      const s = h('div.fill-sentence.jpt');
      s.innerHTML = T.html(p.fill.before, { level: spec.level, noTargets: true }) + '<span class="blank">？</span>' + T.html(p.fill.after, { level: spec.level, noTargets: true });
      box.appendChild(s);
    } else if (p.jp) {
      const big = h('div.big-jp');
      big.appendChild(T.el(p.jp, { level: spec.level, furigana: p.furigana, noTargets: true }));
      if (p.big) big.style.fontSize = 'calc(84px * var(--ts))';
      const row = h('div.row', { style: { justifyContent: 'center', gap: '14px' } });
      if (p.audio) row.appendChild(JT.ui.sayBtn(p.audio));
      row.appendChild(big);
      box.appendChild(row);
      if (!p.noRomaji && JT.ui.showRomaji(spec.level)) box.appendChild(h('div.romaji', T.romaji(p.jp)));
    }
    if (p.text) box.appendChild(h('div', { style: { fontSize: p.big ? '52px' : '22px', fontWeight: 650, lineHeight: 1.3 } }, p.text));
    if (p.en) box.appendChild(h('div.en', { style: { fontSize: '18px', marginTop: '6px' } }, p.en));
    return box;
  }

  function render(spec, host, done) {
    JT.ui.clear(host);
    if (spec.label) host.appendChild(h('div.step-label', spec.label));
    if (spec.title) host.appendChild(h('div.step-title', spec.title));
    const p = spec.prompt || {};
    if (p.audio && JT.state.settings.autoplay) setTimeout(() => JT.Audio.speak(p.audio, { silent: !p.hide }), 250);
    if (spec.kind === 'choice') return renderChoice(spec, host, done);
    if (spec.kind === 'type') return renderType(spec, host, done);
    if (spec.kind === 'build') return renderBuild(spec, host, done);
    if (spec.kind === 'match') return renderMatch(spec, host, done);
    return {};
  }

  function renderChoice(spec, host, done) {
    host.appendChild(promptNode(spec));
    const long = spec.opts.some(o => (o.text || '').length > 38 || (o.jp && T.surface(o.jp).length > 13));
    const grid = h('div.choices' + (long ? '.one' : ''));
    let answered = false;
    const btns = spec.opts.map((o, i) => {
      const b = h('button.choice' + (spec.bigOpts ? '.big' : ''), { type: 'button' }, h('span.key', i + 1), optNode(o, spec));
      b.onclick = () => pickIdx(i);
      grid.appendChild(b);
      return b;
    });
    host.appendChild(grid);
    function pickIdx(i) {
      if (answered || i >= btns.length) return;
      answered = true;
      const ok = i === spec.ans;
      btns.forEach((b, j) => {
        b.disabled = true;
        if (j === spec.ans) b.classList.add('right');
        else if (j === i) b.classList.add('wrong');
      });
      const o = spec.opts[i];
      // a wrong pick stays silent — the feedback bar then says the correct answer
      if (ok && o.jp && spec.speakChoice !== false) JT.Audio.speak(o.jp, { silent: true });
      done({ correct: ok });
    }
    return { pick: pickIdx };
  }

  function renderType(spec, host, done) {
    host.appendChild(promptNode(spec));
    const wrap = h('div.type-wrap');
    const inp = h('input.type-input', { type: 'text', autocomplete: 'off', spellcheck: 'false', placeholder: spec.kana ? 'Type in romaji — it turns into kana' : 'Type your answer' });
    wrap.appendChild(inp);
    const hintBox = h('div.center.muted.small', { style: { marginTop: '10px', minHeight: '22px' } });
    let hints = 0;
    const hintBtn = h('button.btn.sm.ghost', { type: 'button' }, 'Hint');
    hintBtn.onclick = () => {
      hints++;
      const ans = spec.answers[0];
      const full = spec.kana ? T.romaji(ans) : String(ans);
      hintBox.textContent = hints === 1 ? full.slice(0, Math.max(2, Math.ceil(full.length / 3))) + '…' : full;
      inp.focus();
    };
    const tips = spec.kana ? h('div.tiny.muted.center', { style: { marginTop: '8px' } }, 'Tips: "nn" = ん · double consonant = っ (kitte) · "-" = ー · "wa" for particle は is fine') : null;
    wrap.append(h('div.row', { style: { justifyContent: 'center', marginTop: '10px' } }, hintBtn), hintBox, tips);
    host.appendChild(wrap);
    let ready = null;
    inp.addEventListener('input', e => {
      if (spec.kana && !e.isComposing) {
        const v = inp.value;
        const c = Kana.romajiToKana(v, { katakana: spec.katakana });
        if (c !== v) inp.value = c;
      }
      ready && ready(inp.value.trim().length > 0);
    });
    setTimeout(() => inp.focus(), 60);
    let answered = false;
    function check() {
      if (answered) return;
      let val = inp.value;
      if (spec.kana) { val = Kana.romajiToKana(val, { final: true, katakana: spec.katakana }); inp.value = val; }
      if (!val.trim()) return;
      answered = true;
      inp.disabled = true;
      let best = 0, exact = false;
      for (const a of spec.answers) {
        const target = spec.kana ? T.reading(a) : String(a);
        if (Kana.phonetic(val) === Kana.phonetic(target) || val.trim() === T.surface(a)) { exact = true; best = 1; break; }
        best = Math.max(best, Kana.similarity(val, target));
      }
      const close = !exact && best >= 0.85 && Kana.phonetic(val).length >= 5;
      inp.classList.add(exact || close ? 'right' : 'wrong');
      done({ correct: exact || close, close, hinted: hints > 0 });
    }
    return { check, onReady: fn => { ready = fn; }, focus: () => inp.focus(), input: inp };
  }

  function renderBuild(spec, host, done) {
    if (spec.en) host.appendChild(h('div.prompt-box', h('div', { style: { fontSize: '21px', fontWeight: 600 } }, spec.en)));
    const clean = t => T.stripTargets(t).replace(PUNCT_END, '');
    const target = spec.tokens.map(clean).filter(Boolean);
    const tiles = shuffle([...target, ...(spec.extra || []).map(clean)]).map((m, i) => ({ m, i }));
    const line = h('div.tiles.answer-line');
    const bank = h('div.tiles');
    const chosen = [];
    let ready = null;
    const tileEls = tiles.map(t => {
      const el = h('button.tile', { type: 'button' }, T.el(t.m, { level: spec.level, noTargets: true }));
      el.onclick = () => {
        if (answered) return;
        JT.Audio.sfx('tap');
        chosen.push(t);
        el.classList.add('used');
        const back = h('button.tile', { type: 'button' }, T.el(t.m, { level: spec.level, noTargets: true }));
        back.onclick = () => {
          if (answered) return;
          chosen.splice(chosen.indexOf(t), 1);
          back.remove();
          el.classList.remove('used');
          ready && ready(chosen.length > 0);
        };
        line.appendChild(back);
        ready && ready(true);
      };
      bank.appendChild(el);
      return el;
    });
    host.append(line, bank);
    let answered = false;
    function check() {
      if (answered || !chosen.length) return;
      answered = true;
      const got = chosen.map(t => T.surface(t.m)).join('');
      const want = target.map(m => T.surface(m)).join('');
      done({ correct: got === want });
    }
    return { check, onReady: fn => { ready = fn; }, tiles: tileEls };
  }

  function renderMatch(spec, host, done) {
    host.appendChild(h('div.prompt-box', h('div.muted', 'Tap a pair to match them. Japanese items play their sound.')));
    const pairs = spec.pairs.map((p, i) => ({ p, i }));
    const left = shuffle(pairs), right = shuffle(pairs);
    const grid = h('div.match-grid');
    const colL = h('div.match-col'), colR = h('div.match-col');
    let sel = null, mistakes = 0, matched = 0;
    const mkItem = (side, it) => {
      const spec2 = it.p[side];
      const el = h('button.match-item', { type: 'button', 'data-i': it.i }, spec2.jp != null ? T.el(spec2.jp, { level: spec.level }) : h('span', spec2.text));
      el.onclick = () => {
        if (el.classList.contains('ok')) return;
        if (spec2.jp != null) JT.Audio.speak(spec2.jp, { silent: true });
        if (!sel || sel.side === side) {
          if (sel) sel.el.classList.remove('sel');
          sel = { side, it, el };
          el.classList.add('sel');
          return;
        }
        if (sel.it.i === it.i) {
          sel.el.classList.remove('sel');
          sel.el.classList.add('ok'); el.classList.add('ok');
          JT.Audio.sfx('tap');
          matched++;
          sel = null;
          if (matched === pairs.length) done({ correct: mistakes <= 1, mistakes });
        } else {
          mistakes++;
          JT.Audio.sfx('bad');
          const a = sel.el;
          a.classList.remove('sel'); a.classList.add('no'); el.classList.add('no');
          setTimeout(() => { a.classList.remove('no'); el.classList.remove('no'); }, 400);
          sel = null;
        }
      };
      return el;
    };
    left.forEach(it => colL.appendChild(mkItem(0, it)));
    right.forEach(it => colR.appendChild(mkItem(1, it)));
    grid.append(colL, colR);
    host.appendChild(grid);
    return {};
  }

  // ---------------- generators ----------------
  function choice(label, prompt, answer, distractors, extra = {}) {
    const opts = shuffle([answer, ...distractors]);
    return Object.assign({ kind: 'choice', label, prompt, opts, ans: opts.indexOf(answer) }, extra);
  }

  function pickDistinct(cands, valueOf, answerValue, n = 3) {
    const seen = new Set([String(answerValue).toLowerCase()]);
    const out = [];
    for (const c of cands) {
      const v = valueOf(c);
      if (!v) continue;
      const k = String(v).toLowerCase();
      if (seen.has(k)) continue;
      seen.add(k);
      out.push(c);
      if (out.length === n) break;
    }
    return out;
  }

  function wordPool(w, poolKeys) {
    const keys = poolKeys && poolKeys.length > 6 ? poolKeys : R.pool('w', w.level != null ? w.level : 5);
    let items = shuffle(keys.filter(k => k !== w.key)).map(k => R.item(k)).filter(Boolean);
    const verb = /^to /.test(w.en);
    items.sort((a, b) => (/^to /.test(b.en) === verb ? 1 : 0) - (/^to /.test(a.en) === verb ? 1 : 0));
    return items;
  }

  const G = {};

  G.word = function (key, mode, poolKeys) {
    const w = R.item(key);
    if (!w) return null;
    const level = w.level != null ? w.level : 5;
    const pool = wordPool(w, poolKeys);
    const reveal = { jp: w.m, en: w.en };
    const surf = T.surface(w.m), read = T.reading(w.m);
    if (mode === 'listen' && !JT.Audio.available) mode = 'jp2en';
    if (mode === 'reading' && !Kana.hasKanji(surf)) mode = 'jp2en';
    if (mode === 'type' && read.replace(/\s/g, '').length > 14) mode = 'en2jp';
    if (mode === 'jp2en' || mode === 'listen') {
      const ds = pickDistinct(pool, x => normEn(x.en), normEn(w.en));
      return choice(mode === 'listen' ? 'Listen — what does it mean?' : 'What does this mean?',
        mode === 'listen' ? { audio: w.m, hide: true } : { jp: w.m, audio: w.m },
        { text: w.en }, ds.map(x => ({ text: x.en })), { level, reveal, key, speakChoice: false });
    }
    if (mode === 'en2jp') {
      const ds = pickDistinct(pool, x => T.surface(x.m), surf);
      return choice('Choose the Japanese', { en: w.en }, { jp: w.m }, ds.map(x => ({ jp: x.m })), { level, reveal, key });
    }
    if (mode === 'reading') {
      const near = pool.filter(x => Math.abs(T.reading(x.m).length - read.length) <= 1 && Kana.hasKanji(T.surface(x.m)));
      const ds = pickDistinct(near.length >= 3 ? near : pool, x => T.reading(x.m), read);
      return choice('How is this word read?', { jp: surf, noRomaji: true }, { text: read }, ds.map(x => ({ text: T.reading(x.m) })),
        { level, reveal, key });
    }
    // type
    return {
      kind: 'type', label: 'Type it in Japanese', prompt: { en: w.en }, answers: [w.m], kana: true,
      katakana: Kana.mostlyKatakana(read), level, reveal, key
    };
  };

  G.kana = function (c, mode, poolChars) {
    const k = R.kana.get(c);
    if (!k) return null;
    const same = [...R.kana.values()].filter(x => x.script === k.script && x.c !== c && x.c.length === c.length);
    const pref = poolChars && poolChars.length >= 4 ? poolChars.map(x => R.kana.get(x)).filter(Boolean).filter(x => x.c !== c) : [];
    const cands = [...shuffle(pref), ...shuffle(same)];
    const reveal = { jp: c, en: k.r };
    if (mode === 'listen' && !JT.Audio.available) mode = 'k2r';
    if (mode === 'k2r') {
      const ds = pickDistinct(cands, x => x.r, k.r);
      return choice('Which sound is this?', { jp: c, big: true, noRomaji: true, audio: c }, { text: k.r }, ds.map(x => ({ text: x.r })), { level: 0, reveal, key: 'k:' + c, speakChoice: false });
    }
    if (mode === 'r2k' || mode === 'listen') {
      const ds = pickDistinct(cands, x => x.c, c);
      return choice(mode === 'listen' ? 'Which kana do you hear?' : 'Which kana is this?',
        mode === 'listen' ? { audio: c, hide: true } : { text: k.r, big: true },
        { jp: c }, ds.map(x => ({ jp: x.c })), { level: 0, reveal, key: 'k:' + c, bigOpts: true, optRomaji: false });
    }
    return { kind: 'type', label: 'Type the romaji for this kana', prompt: { jp: c, big: true, noRomaji: true }, answers: [k.r], kana: false, level: 0, reveal, key: 'k:' + c };
  };

  const firstMeanings = m => String(m).split(', ').slice(0, 2).join(', ');

  G.kanji = function (c, mode, poolKeys) {
    const k = R.kanji.get(c);
    if (!k) return null;
    const level = R.itemLevel('j:' + c);
    const pk = poolKeys && poolKeys.length > 6 ? poolKeys.map(x => x.slice(2)) : [...R.kanji.keys()].filter(x => Math.abs(R.kanji.get(x).jlpt - k.jlpt) <= 1);
    const cands = shuffle(pk.filter(x => x !== c)).map(x => R.kanji.get(x)).filter(Boolean);
    const reveal = { jp: c, en: firstMeanings(k.meaning) + (k.on ? ' · ' + k.on : '') + (k.kun ? ' · ' + k.kun : '') };
    const examples = k.ex.filter(e => T.surface(e[0]).includes(c) && T.surface(e[0]).length > 1);
    if (mode === 'reading' && !examples.length) mode = 'meaning';
    if (mode === 'meaning') {
      const ds = pickDistinct(cands, x => firstMeanings(x.meaning), firstMeanings(k.meaning));
      return choice('What does this kanji mean?', { jp: c, big: true, noRomaji: true }, { text: firstMeanings(k.meaning) }, ds.map(x => ({ text: firstMeanings(x.meaning) })), { level, reveal, key: 'j:' + c });
    }
    if (mode === 'kanji') {
      const ds = pickDistinct(cands, x => x.c, c);
      return choice('Which kanji means…', { text: firstMeanings(k.meaning) }, { jp: c }, ds.map(x => ({ jp: x.c })), { level, reveal, key: 'j:' + c, bigOpts: true, optRomaji: false });
    }
    const ex = pick(examples);
    const read = T.reading(ex[0]);
    const others = [];
    for (const x of cands.slice(0, 40)) for (const e of x.ex) others.push(T.reading(e[0]));
    const near = shuffle(others.filter(r => Math.abs(r.length - read.length) <= 1));
    // similar-length readings first, topped up from the rest when they repeat
    const ds = pickDistinct(near.concat(shuffle(others)), x => x, read);
    return choice('How do you read this word?', { jp: T.surface(ex[0]), big: false, noRomaji: true, en: ex[1] }, { text: read }, ds.map(x => ({ text: x })),
      { level, reveal: { jp: ex[0], en: ex[1] }, key: 'j:' + c });
  };

  G.grammar = function (id, mode, poolIds) {
    const g = R.grammar.get(id);
    if (!g || !g.e || !g.e.length) return null;
    const level = g.level;
    const withT = g.e.filter(e => e[0].includes('*'));
    if (mode === 'fill' && !withT.length) mode = pick(['build', 'mean']);
    const siblings = (poolIds && poolIds.length ? poolIds : [...R.grammar.keys()].filter(x => R.grammar.get(x).level === level))
      .filter(x => x !== id).map(x => R.grammar.get(x)).filter(Boolean);
    const ex = mode === 'fill' ? pick(withT) : pick(g.e);
    const reveal = { jp: ex[0], en: ex[1] };
    const why = T.plain(g.t) + (g.m ? ' — ' + g.m : '');
    if (mode === 'fill') {
      const sp = T.splitTarget(ex[0]);
      const targets = [];
      for (const s of shuffle(siblings)) for (const e of s.e) { const x = T.splitTarget(e[0]); if (x) targets.push(x.target); }
      const ds = pickDistinct(shuffle(targets), x => T.surface(x), T.surface(sp.target));
      if (ds.length >= 2) {
        return choice('Complete the sentence', { fill: { before: sp.before, after: sp.after }, en: ex[1] }, { jp: sp.target }, ds.map(x => ({ jp: x })), { level, reveal, why, key: 'g:' + id });
      }
      mode = 'build';
    }
    if (mode === 'build') {
      // only real sentences make good word-order drills (not "A → B" conjugation examples)
      const buildable = g.e.filter(e => !/[→・]/.test(e[0]) && T.rawTokens(e[0]).length >= 3 && T.rawTokens(e[0]).length <= 10);
      if (buildable.length) {
        const be = buildable.includes(ex) ? ex : pick(buildable);
        return { kind: 'build', label: 'Put the words in order', en: be[1], tokens: T.rawTokens(be[0]), level, reveal: { jp: be[0], en: be[1] }, why, key: 'g:' + id };
      }
    }
    const others = [];
    for (const s of siblings) for (const e of s.e) others.push(e[1]);
    for (const e of g.e) if (e !== ex) others.push(e[1]);
    const ds = pickDistinct(shuffle(others), x => x, ex[1]);
    return choice('What does this mean?', { jp: ex[0], audio: ex[0] }, { text: ex[1] }, ds.map(x => ({ text: x })), { level, reveal, why, key: 'g:' + id, speakChoice: false });
  };

  // Authored exercise from course content.
  G.authored = function (x, L) {
    const level = L ? L.level : 5;
    const optsOf = arr => arr.map(o => (Kana.hasJapanese(o) ? { jp: o } : { text: o }));
    if (x.fill) {
      const parts = x.fill.split('＿');
      const [a, ...ds] = optsOf([x.a, ...x.o]);
      return choice('Fill in the blank', { fill: { before: parts[0] || '', after: parts.slice(1).join('＿') }, en: x.en }, a, ds,
        { level, why: x.why, reveal: { jp: x.fill.replace('＿', x.a), en: x.en } });
    }
    if (x.build) return { kind: 'build', label: 'Put the words in order', en: x.en, tokens: T.rawTokens(x.build), extra: x.extra || [], level, reveal: { jp: x.build, en: x.en }, why: x.why };
    if (x.say) {
      return { kind: 'type', label: 'Say it in Japanese (type in romaji)', prompt: { en: x.en }, answers: [x.say, ...(x.alt || [])], kana: true, level,
        reveal: { jp: x.say, en: x.en }, why: x.why, katakana: Kana.mostlyKatakana(T.reading(x.say)) };
    }
    if (x.resp) {
      const [a, ...ds] = optsOf([x.a, ...x.o]);
      return choice("What's the best reply?", { npc: { jp: x.resp, en: x.npcEn, avatar: x.av || '🧑' } }, a, ds, { level, why: x.why, reveal: { jp: x.a } });
    }
    if (x.mean) {
      const [a, ...ds] = optsOf([x.a, ...x.o]);
      return choice('What does this mean?', { jp: x.mean, audio: x.mean }, a, ds, { level, why: x.why, reveal: { jp: x.mean, en: x.a }, speakChoice: false });
    }
    if (x.mc) {
      const [a, ...ds] = optsOf([x.a, ...x.o]);
      // "Which kanji means…?" — the options carry readings for the voice, but showing them would give the answer away
      const kanjiOnly = [x.a, ...x.o].every(o => [...T.surface(o)].length === 1 && Kana.isKanji(T.surface(o)));
      return choice('Choose the best answer', { text: x.mc }, a, ds, { level, why: x.why, reveal: a.jp ? { jp: x.a } : { en: x.a },
        ...(kanjiOnly ? { optFurigana: 'never', optRomaji: false } : {}) });
    }
    return null;
  };

  G.match = function (keys, level) {
    const ws = keys.map(k => R.item(k)).filter(Boolean);
    const uniq = JT.ui.uniqBy(ws, w => normEn(w.en)).slice(0, 5);
    if (uniq.length < 3) return null;
    return { kind: 'match', label: 'Match the pairs', pairs: uniq.map(w => [{ jp: w.m }, { text: w.en }]), level: level != null ? level : uniq[0].level };
  };

  // Picks a sensible exercise for an item based on how well it is known.
  G.forItem = function (key, opts = {}) {
    const b = opts.box != null ? opts.box : JT.SRS.box(key) || 1;
    const t = key[0], id = key.slice(2);
    const r = Math.random();
    if (t === 'k') return G.kana(id, b <= 1 ? 'k2r' : b <= 3 ? pick(['k2r', 'listen', 'r2k']) : pick(['type', 'r2k', 'listen']), opts.pool);
    if (t === 'j') return G.kanji(id, b <= 1 ? 'meaning' : b <= 3 ? pick(['meaning', 'kanji', 'reading']) : pick(['reading', 'reading', 'kanji']), opts.pool);
    if (t === 'g') return G.grammar(id, b <= 2 ? pick(['fill', 'mean']) : pick(['fill', 'build', 'fill']), opts.pool);
    if (t === 'w') {
      const w = R.item(key);
      if (!w) return null;
      const hasK = Kana.hasKanji(T.surface(w.m));
      let mode;
      if (b <= 1) mode = r < 0.75 ? 'jp2en' : 'listen';
      else if (b <= 3) mode = r < 0.4 ? 'en2jp' : r < 0.65 ? 'listen' : hasK ? 'reading' : 'jp2en';
      else mode = r < 0.35 ? 'type' : r < 0.6 && hasK ? 'reading' : r < 0.8 ? 'en2jp' : 'listen';
      return G.word(key, mode, opts.pool);
    }
    return null;
  };

  JT.Ex = { render, G, promptNode };
})();
