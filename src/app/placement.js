/* Placement test (adaptive, jump-start for returning learners), level tests and JLPT mock exams. */
(function () {
  const JT = (window.JT = window.JT || {});
  const { h, icon, shuffle, sample, pick } = JT.ui;
  const { T, R, Kana } = JT;

  const optOf = x => (Kana.hasJapanese(x) ? { jp: x } : { text: x });

  function fromPool(q, level, sec) {
    const [prompt, jp, a, ...ds] = q;
    const opts = shuffle([a, ...ds]);
    return {
      kind: 'choice', label: sec || 'Question', prompt: { text: prompt, jp: jp || undefined, noRomaji: true },
      opts: opts.map(optOf), ans: opts.indexOf(a), level: Math.max(level, 2), reveal: Kana.hasJapanese(a) ? { jp: a } : { en: a }, sec
    };
  }

  function withDontKnow(spec) {
    spec.opts = spec.opts.concat([{ text: "I don't know" }]);
    return spec;
  }

  // ---------- placement ----------
  const STAGE_INFO = {
    0: 'Hiragana & survival phrases', 1: 'Katakana, です/の, numbers & time', 2: 'Verbs (ます), particles, invitations',
    3: 'Adjectives, likes, wants, counters', 4: 'て-form, casual speech', 5: 'N5 completion: experiences, reasons, plans',
    6: 'JLPT N4', 7: 'JLPT N3', 8: 'JLPT N2', 9: 'JLPT N1'
  };

  function placement() {
    const main = document.getElementById('main');
    const stagesAll = JT.LEVELS.map(l => l.n).filter(n => (JT.PLACEMENT[n] || []).length);
    const results = [];
    let si = 0;

    function runStage() {
      const n = stagesAll[si];
      const pool = JT.PLACEMENT[n];
      const count = n <= 5 ? 6 : 8;
      const qs = sample(pool, Math.min(count, pool.length));
      const lv = R.levelByN.get(n);
      JT.Player({
        title: `Placement · ${lv ? lv.tag : ''} ${si + 1}/${stagesAll.length}`,
        steps: qs.map(q => ({ ex: () => withDontKnow(fromPool(q, n, STAGE_INFO[n])) })),
        feedback: false,
        requeueWrong: false,
        noExitConfirm: false,
        exitMsg: 'Stop the placement test? You can take it again from Settings.',
        onExit: () => JT.go('home'),
        onFinish: res => {
          const pass = n <= 5 ? 4 : 6;
          results.push({ n, correct: res.correct, total: res.answered, passed: res.correct >= Math.min(pass, res.answered) });
          if (results[results.length - 1].passed && si < stagesAll.length - 1) {
            si++;
            interstitial(n, res, runStage);
          } else showResult();
        }
      });
    }

    function interstitial(n, res, cont) {
      JT.ui.clear(main);
      const nxt = stagesAll[si];
      main.appendChild(h('div.page.page-narrow', { style: { textAlign: 'center', paddingTop: '80px' } },
        h('div', { style: { fontSize: '54px' } }, '✅'),
        h('h1', `${R.levelByN.get(n).title}: passed`),
        h('p.muted', `${res.correct} / ${res.answered} correct. Next up: ${STAGE_INFO[nxt]}.`),
        h('div.row', { style: { justifyContent: 'center', marginTop: '20px' } },
          h('button.btn', { type: 'button', onclick: () => showResult() }, 'Stop here'),
          h('button.btn.primary.lg', { type: 'button', onclick: cont }, 'Continue', icon('arrow')))));
    }

    function showResult() {
      const failed = results.find(r => !r.passed);
      const placed = failed ? failed.n : (results.length ? results[results.length - 1].n + 1 : 0);
      // save the result right away — closing the app on this screen must not lose it
      apply(placed, false);
      JT.Store.addXP(20);
      JT.ui.clear(main);
      const lastN = JT.LEVELS[JT.LEVELS.length - 1].n;
      const lv = R.levelByN.get(Math.min(placed, lastN));
      const all = placed > lastN;
      const pg = h('div.page.page-narrow', { style: { paddingTop: '40px' } },
        h('div.center', h('div', { style: { fontSize: '56px' } }, placed === 0 ? '🌱' : all ? '🏆' : placed >= 6 ? '🏯' : '🎌'),
          h('h1', placed === 0 ? 'Start from the beginning' : all ? 'You tested out of the whole course!' : `Start at ${lv.title}`),
          h('p.muted', placed === 0 ? 'Great — we will build you up from the very first sounds. You will be chatting in no time!' :
            all ? 'Impressive! Every lesson is marked complete. Keep sharp with reviews, the role-plays and the JLPT mock exams.' :
            `You tested out of ${placed} level${placed > 1 ? 's' : ''}. Earlier lessons are marked complete and their content goes into your reviews so nothing slips.`)),
        h('div.card', { style: { margin: '20px 0' } },
          h('table.tbl', h('tbody', results.map(r => h('tr',
            h('td', R.levelByN.get(r.n).title), h('td.muted.small', STAGE_INFO[r.n]),
            h('td', `${r.correct}/${r.total}`), h('td', r.passed ? h('span.pill.green', 'Passed') : h('span.pill.red', 'Start here'))))))));
      const chk = h('input', { type: 'checkbox', checked: true });
      if (placed >= 6) pg.appendChild(h('label.row.small', { style: { margin: '0 0 16px' } }, chk, 'Also add the JLPT vocabulary & kanji of the levels I passed to my reviews (spread out over the coming weeks)'));
      pg.append(h('div.row', { style: { justifyContent: 'center' } },
        h('button.btn.primary.lg', { type: 'button', onclick: () => { if (placed >= 6 && chk.checked) apply(placed, true); JT.go('course'); } }, placed === 0 ? 'Start lesson 1' : 'Go to my course', icon('arrow'))),
        h('p.center.tiny.muted', { style: { marginTop: '12px' } }, '✓ Your result is saved.'));
      main.appendChild(pg);
    }

    runStage();
  }

  function apply(placed, decks) {
    const st = JT.state;
    st.placement = { level: placed, at: Date.now() };
    const day = JT.SRS.DAY;
    for (const L of R.lessons) {
      if (L.level >= placed || R.lessonDone(L.id)) continue;
      R.completeLesson(L, 1, { tested: true, srs: () => ({ box: 3, due: Date.now() + (1 + Math.random() * 20) * day }) });
    }
    if (decks) {
      for (const [j, lvl] of Object.entries(R.JLPT_LEVEL)) {
        if (lvl >= placed) continue;
        for (const k of [...R.deckItems('w', +j), ...R.deckItems('j', +j)]) JT.SRS.add(k, { box: 5, due: Date.now() + (7 + Math.random() * 110) * day });
      }
    }
    JT.Store.save(true);
    JT.refreshNav();
  }

  // ---------- generated questions for tests ----------
  function spellingQ(key, pool) {
    const w = R.item(key);
    const surf = T.surface(w.m), read = T.reading(w.m);
    const cands = shuffle(pool).map(k => R.item(k)).filter(x => x && x.key !== key && Kana.hasKanji(T.surface(x.m)) && T.surface(x.m).length === surf.length);
    const shareK = cands.filter(x => [...T.surface(x.m)].some(c => surf.includes(c) && Kana.isKanji(c)));
    const ds = [];
    const seen = new Set([surf]);
    for (const x of [...shareK, ...cands]) { const s = T.surface(x.m); if (!seen.has(s)) { seen.add(s); ds.push(s); } if (ds.length === 3) break; }
    if (ds.length < 3) return null;
    const opts = shuffle([surf, ...ds]);
    return { kind: 'choice', label: '表記 · Which kanji spelling is correct?', prompt: { text: read, big: false, en: w.en }, opts: opts.map(x => ({ jp: x })), ans: opts.indexOf(surf), level: 6, reveal: { jp: w.m, en: w.en }, optRomaji: false };
  }

  function levelQuestions(n, count) {
    const lessons = R.levelByN.get(n).lessons;
    const words = lessons.flatMap(L => L.wordKeys);
    const kanji = lessons.flatMap(L => L.kanjiList.map(c => 'j:' + c)).filter(k => R.item(k));
    const gram = lessons.flatMap(L => (L.grammar || []).map(g => g.id));
    const kana = lessons.flatMap(L => L.kanaList);
    const specs = [];
    const add = s => { if (s) specs.push(s); };
    sample(JT.PLACEMENT[n] || [], 8).forEach(q => add(fromPool(q, n, 'Level question')));
    sample(words, 6).forEach(k => add(JT.Ex.G.word(k, pick(['jp2en', 'en2jp', n >= 2 ? 'reading' : 'listen']), words)));
    sample(kanji, 3).forEach(k => add(JT.Ex.G.kanji(k.slice(2), pick(['meaning', 'reading']), kanji)));
    sample(gram, 4).forEach(id => add(JT.Ex.G.grammar(id, 'fill', gram)));
    sample(kana, 3).forEach(c => add(JT.Ex.G.kana(c, 'k2r', kana)));
    return shuffle(specs).slice(0, count);
  }

  function runExam(o) {
    JT.Player({
      title: o.title,
      steps: o.steps || o.specs.map(s => ({ ex: s })),
      feedback: false,
      requeueWrong: false,
      exitMsg: 'Leave the test? Your answers will not be scored.',
      onExit: o.onExit,
      onFinish: (res, stage) => {
        const pct = res.score;
        const passed = pct >= o.passMark;
        o.save && o.save(pct, passed);
        JT.Audio.sfx(passed ? 'done' : 'tap');
        if (passed) JT.ui.confetti();
        JT.Store.addXP(passed ? 50 : 15);
        JT.refreshNav();
        JT.ui.clear(stage);
        const secs = {};
        for (const r of res.results) {
          const s = r.spec.sec || r.spec.label || 'Questions';
          secs[s] = secs[s] || { c: 0, t: 0 };
          secs[s].t++;
          if (r.correct) secs[s].c++;
        }
        const wrong = res.results.filter(r => !r.correct);
        stage.appendChild(h('div.done-wrap',
          h('div.big-emoji', passed ? '🏆' : '📖'),
          h('h1', passed ? 'Passed!' : 'Not yet — keep going'),
          h('p.muted', `${Math.round(pct * 100)}% — pass mark ${Math.round(o.passMark * 100)}%`),
          h('div.card', { style: { maxWidth: '560px', margin: '16px auto', textAlign: 'left' } },
            h('table.tbl', h('tbody', Object.entries(secs).map(([s, v]) => h('tr', h('td', s), h('td', `${v.c} / ${v.t}`),
              h('td', { style: { width: '40%' } }, h('div.bar.green', h('i', { style: { width: (v.c / v.t * 100) + '%' } })))))))),
          wrong.length ? h('details.card', { style: { maxWidth: '680px', margin: '0 auto 18px', textAlign: 'left' } },
            h('summary', { style: { cursor: 'pointer', fontWeight: 650 } }, `Review ${wrong.length} missed question${wrong.length > 1 ? 's' : ''}`),
            wrong.map(r => {
              const s = r.spec, a = s.opts ? s.opts[s.ans] : null;
              return h('div.list-row', h('div.grow',
                h('div.small.muted', s.prompt && (s.prompt.text || (s.prompt.jp && T.surface(s.prompt.jp))) || s.en || ''),
                s.prompt && s.prompt.fill ? h('div', T.el(s.prompt.fill.before + ' ＿ ' + s.prompt.fill.after)) : null,
                h('div', '→ ', a ? (a.jp ? T.el(a.jp) : a.text) : s.reveal && s.reveal.jp ? T.el(s.reveal.jp) : '')));
            })) : null,
          h('div.row', { style: { justifyContent: 'center' } },
            h('button.btn', { type: 'button', onclick: o.onExit }, 'Back'),
            h('button.btn.primary', { type: 'button', onclick: () => o.retry() }, icon('undo'), 'Try another test'))));
      }
    });
  }

  function levelTest(n) {
    const lv = R.levelByN.get(n);
    runExam({
      title: `${lv.title} — level test`,
      specs: levelQuestions(n, 20),
      passMark: 0.8,
      save: (pct, passed) => {
        const prev = JT.state.tests['level' + n] || {};
        JT.state.tests['level' + n] = { passed: passed || !!prev.passed, best: Math.max(prev.best || 0, pct), at: Date.now() };
        JT.Store.save();
      },
      onExit: () => JT.go('course', { level: n }),
      retry: () => levelTest(n)
    });
  }

  // JLPT-style mock exam built from the decks, grammar and readings of that JLPT level.
  function mockExam(jlpt) {
    const levels = JT.LEVELS.filter(l => l.jlpt === jlpt).map(l => l.n);
    const words = R.deckItems('w', jlpt);
    const kanjiWords = words.filter(k => Kana.hasKanji(T.surface(R.item(k).m)));
    const gram = R.lessons.filter(L => levels.includes(L.level)).flatMap(L => (L.grammar || []).map(g => g.id)).filter(id => (R.grammar.get(id).e || []).some(e => e[0].includes('*')));
    const readings = R.lessons.filter(L => levels.includes(L.level) && L.reading && L.reading.q);
    const specs = [];
    const tag = (s, sec) => { if (s) { s.sec = sec; s.label = sec; specs.push(s); } };
    sample(kanjiWords, 7).forEach(k => tag(JT.Ex.G.word(k, 'reading', words), '文字 · Kanji reading'));
    sample(kanjiWords, 4).forEach(k => tag(spellingQ(k, kanjiWords), '表記 · Writing'));
    sample(words, 6).forEach(k => tag(JT.Ex.G.word(k, 'jp2en', words), '語彙 · Vocabulary'));
    sample(gram, 9).forEach(id => tag(JT.Ex.G.grammar(id, 'fill', gram), '文法 · Grammar'));
    if (!specs.length) { JT.ui.toast('Not enough material for this exam yet.'); return; }
    const bySec = p => shuffle(specs.filter(s => s.sec.startsWith(p))).map(s => ({ ex: s }));
    const steps = [...bySec('文字'), ...bySec('表記'), ...bySec('語彙'), ...bySec('文法')];
    // reading comprehension: show the passage, then its questions
    for (const L of sample(readings, 2)) {
      steps.push({ card: () => JT.Cards.reading(L.reading, L.level) });
      for (const q of L.reading.q) {
        const [question, a, ...ds] = q;
        const opts = shuffle([a, ...ds]);
        steps.push({ ex: { kind: 'choice', sec: '読解 · Reading', label: '読解 · ' + L.reading.title, prompt: { text: question }, opts: opts.map(optOf), ans: opts.indexOf(a), level: L.level, reveal: Kana.hasJapanese(a) ? { jp: a } : { en: a } } });
      }
    }
    runExam({
      title: `JLPT N${jlpt} mock exam`,
      steps,
      passMark: 0.6,
      save: (pct, passed) => {
        const prev = JT.state.tests['jlpt' + jlpt] || {};
        JT.state.tests['jlpt' + jlpt] = { passed: passed || !!prev.passed, best: Math.max(prev.best || 0, pct), at: Date.now() };
        JT.Store.save();
      },
      onExit: () => JT.go('progress'),
      retry: () => mockExam(jlpt)
    });
  }

  JT.Tests = { placement, levelTest, mockExam, apply };
})();
