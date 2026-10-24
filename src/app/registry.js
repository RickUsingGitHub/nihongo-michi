/* Course registry: collects levels, lessons, words, kana, kanji, grammar and conversations into
 * lookup tables, and answers progress questions (what's unlocked, what's next). */
(function () {
  const JT = (window.JT = window.JT || {});
  const { T, Kana } = JT;

  JT.LEVELS = [];
  JT.CONVOS = [];
  JT.addLevel = lv => { JT.LEVELS.push(lv); };
  JT.addConvos = list => { JT.CONVOS.push(...list); };

  const R = (JT.R = {
    lessons: [], lessonById: new Map(), words: new Map(), kana: new Map(), kanji: new Map(),
    grammar: new Map(), convoById: new Map(), levelByN: new Map()
  });

  // JLPT tag -> level number used for romaji/difficulty defaults
  const JLPT_LEVEL = { 5: 5, 4: 6, 3: 7, 2: 8, 1: 9 };
  R.JLPT_LEVEL = JLPT_LEVEL;

  function wordKeyOf(m) { return 'w:' + T.surface(m).replace(/[*～〜]/g, '') + '|' + T.reading(m).replace(/[*～〜]/g, ''); }
  R.wordKeyOf = wordKeyOf;

  function parseWord(str) {
    const [m, en, note] = str.split('|');
    return { m: m.trim(), en: (en || '').trim(), note: (note || '').trim() };
  }

  R.build = function () {
    JT.LEVELS.sort((a, b) => a.n - b.n);
    // ---- kana ----
    const addKana = (rows, script) => {
      for (const [c, r, mn, ex] of rows) R.kana.set(c, { c, r, script, mn, ex, basic: true });
    };
    if (JT.KANA) { addKana(JT.KANA.hira, 'hira'); addKana(JT.KANA.kata, 'kata'); }
    for (const [k, r] of Object.entries(Kana.K2R)) {
      if ('ぁぃぅぇぉゃゅょゎゐゑゔ'.includes(k) || R.kana.has(k)) continue;
      R.kana.set(k, { c: k, r, script: 'hira' });
      const kk = Kana.hiraToKata(k);
      if (!R.kana.has(kk)) R.kana.set(kk, { c: kk, r, script: 'kata' });
    }
    for (const [k] of Object.entries(Kana.K2R)) {
      const kk = Kana.hiraToKata(k);
      if (!R.kana.has(kk) && !'ァィゥェォャュョヮヰヱ'.includes(kk)) R.kana.set(kk, { c: kk, r: Kana.K2R[k], script: 'kata' });
    }

    // ---- kanji ----
    const notes = JT.KANJI_NOTES || {};
    for (const [c, jlpt, strokes, meaning, on, kun, freq, ex] of JT.KANJIDB || []) {
      R.kanji.set(c, {
        c, jlpt, strokes, meaning, on, kun, freq, note: notes[c] || '',
        ex: (ex || '').split(';').filter(Boolean).map(s => { const i = s.indexOf('='); return [s.slice(0, i), s.slice(i + 1)]; })
      });
    }

    // ---- lessons ----
    for (const lv of JT.LEVELS) {
      R.levelByN.set(lv.n, lv);
      lv.lessons.forEach((L, i) => {
        L.level = lv.n;
        L.index = i;
        L.lv = lv;
        L.words = (L.words || []).map(w => (typeof w === 'string' ? parseWord(w) : w));
        L.wordKeys = [];
        for (const w of L.words) {
          const key = wordKeyOf(w.m);
          w.key = key;
          L.wordKeys.push(key);
          if (!R.words.has(key)) R.words.set(key, { key, m: w.m, en: w.en, note: w.note, lesson: L.id, level: lv.n, jlpt: null });
        }
        L.kanaList = [];
        for (const ch of (L.kana || '').replace(/\s/g, '')) {
          if ('ゃゅょャュョァィゥェォぁぃぅぇぉ'.includes(ch) && L.kanaList.length) L.kanaList[L.kanaList.length - 1] += ch;
          else L.kanaList.push(ch);
        }
        L.kanjiList = [...(L.kanji || '')].filter(c => c.trim());
        for (const c of L.kanjiList) {
          const k = R.kanji.get(c);
          if (k && !k.lesson) k.lesson = L.id;
        }
        (L.grammar || []).forEach((g, gi) => {
          g.id = L.id + '.' + gi;
          g.lesson = L.id;
          g.level = lv.n;
          R.grammar.set(g.id, g);
        });
        R.lessons.push(L);
        R.lessonById.set(L.id, L);
      });
    }

    // ---- JLPT vocabulary decks ----
    const kfreq = c => (R.kanji.get(c) ? R.kanji.get(c).freq : 2500);
    for (const lvl of [5, 4, 3, 2, 1]) {
      for (const [m, en] of (JT.VOCAB && JT.VOCAB[lvl]) || []) {
        const key = wordKeyOf(m);
        const ex = R.words.get(key);
        if (ex) { if (!ex.jlpt) ex.jlpt = lvl; continue; }
        const ks = [...T.surface(m)].filter(Kana.isKanji);
        const score = ks.length ? Math.max(...ks.map(kfreq)) : 400;
        R.words.set(key, { key, m, en, jlpt: lvl, level: JLPT_LEVEL[lvl], deck: true, score });
      }
    }

    // ---- conversations ----
    for (const c of JT.CONVOS) R.convoById.set(c.id, c);
  };

  // ---------- item helpers ----------
  R.item = function (key) {
    const t = key[0], id = key.slice(2);
    if (t === 'w') return R.words.get(key) || null;
    if (t === 'k') return R.kana.get(id) || null;
    if (t === 'j') return R.kanji.get(id) || null;
    if (t === 'g') return R.grammar.get(id) || null;
    return null;
  };
  R.itemLevel = function (key) {
    const it = R.item(key);
    if (!it) return 5;
    if (key[0] === 'k') return 0;
    if (key[0] === 'j') return it.lesson ? R.lessonById.get(it.lesson).level : JLPT_LEVEL[it.jlpt] || 5;
    if (it.level != null) return it.level;
    return 5;
  };
  R.label = function (key) {
    const it = R.item(key);
    if (!it) return key;
    if (key[0] === 'w') return T.surface(it.m);
    if (key[0] === 'k' || key[0] === 'j') return it.c;
    if (key[0] === 'g') return T.plain(it.t);
    return key;
  };

  JT.isKnownKanji = c => JT.SRS && JT.SRS.box('j:' + c) >= 3;

  // ---------- progress ----------
  R.lessonDone = id => !!(JT.state.lessons[id] && JT.state.lessons[id].done);
  R.levelLessonsDone = n => {
    const lv = R.levelByN.get(n);
    return lv ? lv.lessons.filter(L => R.lessonDone(L.id)).length : 0;
  };
  R.levelComplete = n => {
    const lv = R.levelByN.get(n);
    return !!lv && R.levelLessonsDone(n) === lv.lessons.length;
  };
  R.levelUnlocked = n => {
    if (n === 0) return true;
    const st = JT.state;
    if (st.placement && st.placement.level >= n) return true;
    if (st.tests['level' + (n - 1)] && st.tests['level' + (n - 1)].passed) return true;
    if (R.levelComplete(n - 1)) return true;
    return R.levelLessonsDone(n) > 0;
  };
  R.nextLesson = () => {
    for (const L of R.lessons) if (!R.lessonDone(L.id) && R.levelUnlocked(L.level)) return L;
    return null;
  };
  R.currentLevel = () => {
    const L = R.nextLesson();
    return L ? L.level : JT.LEVELS.length ? JT.LEVELS[JT.LEVELS.length - 1].n : 0;
  };

  // Marks a lesson complete and schedules its contents for spaced repetition.
  R.completeLesson = function (L, score, opts = {}) {
    const st = JT.state;
    const prev = st.lessons[L.id] || {};
    const stars = score >= 0.9 ? 3 : score >= 0.7 ? 2 : 1;
    st.lessons[L.id] = { done: true, stars: Math.max(prev.stars || 0, opts.tested ? 0 : stars), score: Math.max(prev.score || 0, score), at: Date.now(), tested: opts.tested && !prev.done };
    const srsOpts = opts.srs || {};
    const keys = R.lessonItemKeys(L);
    keys.forEach((k, i) => {
      const o = typeof srsOpts === 'function' ? srsOpts(k, i) : srsOpts;
      JT.SRS.add(k, o);
    });
    JT.Store.save();
    return stars;
  };
  R.lessonItemKeys = L => [
    ...L.kanaList.map(c => 'k:' + c),
    ...L.wordKeys,
    ...L.kanjiList.filter(c => R.kanji.has(c)).map(c => 'j:' + c),
    ...(L.grammar || []).map(g => 'g:' + g.id)
  ];

  // Next unlearned items of a JLPT vocabulary or kanji deck.
  R.deckItems = function (type, jlpt) {
    if (type === 'w') {
      return [...R.words.values()]
        .filter(w => w.jlpt === jlpt)
        .sort((a, b) => (a.deck ? 1 : 0) - (b.deck ? 1 : 0) || (a.score || 0) - (b.score || 0))
        .map(w => w.key);
    }
    return [...R.kanji.values()].filter(k => k.jlpt === jlpt).sort((a, b) => a.freq - b.freq).map(k => 'j:' + k.c);
  };
  R.deckProgress = function (type, jlpt) {
    const all = R.deckItems(type, jlpt);
    const learned = all.filter(k => JT.SRS.has(k)).length;
    return { total: all.length, learned, next: all.filter(k => !JT.SRS.has(k)) };
  };

  // Pools for distractors
  R.pool = function (type, around) {
    if (type === 'w') {
      const lvl = around != null ? around : 5;
      return [...R.words.values()].filter(w => Math.abs((w.level != null ? w.level : 5) - lvl) <= 1).map(w => w.key);
    }
    if (type === 'k') return [...R.kana.keys()].map(c => 'k:' + c);
    if (type === 'j') return [...R.kanji.keys()].map(c => 'j:' + c);
    if (type === 'g') return [...R.grammar.keys()].map(id => 'g:' + id);
    return [];
  };
})();
