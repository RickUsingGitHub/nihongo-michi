/* Reference pages: kana chart & drills, kanji browser, phrasebook, dictionary, grammar reference. */
(function () {
  const JT = (window.JT = window.JT || {});
  const { h, icon, shuffle, sample } = JT.ui;
  const { T, R, Kana } = JT;
  const V = JT.Views;

  const stageDot = key => {
    const b = JT.SRS.box(key);
    if (!b) return null;
    const s = JT.SRS.stageOf(b);
    return h('span.dot.' + s.id, { title: s.name });
  };

  // ---------------- kana ----------------
  const GOJUON = [
    'あいうえお', 'かきくけこ', 'さしすせそ', 'たちつてと', 'なにぬねの', 'はひふへほ', 'まみむめも', 'や ゆ よ', 'らりるれろ', 'わ   を', 'ん    '
  ];
  const DAKU = ['がぎぐげご', 'ざじずぜぞ', 'だぢづでど', 'ばびぶべぼ', 'ぱぴぷぺぽ'];
  const YOON = ['きゃきゅきょ', 'しゃしゅしょ', 'ちゃちゅちょ', 'にゃにゅにょ', 'ひゃひゅひょ', 'みゃみゅみょ', 'りゃりゅりょ', 'ぎゃぎゅぎょ', 'じゃじゅじょ', 'びゃびゅびょ', 'ぴゃぴゅぴょ'];
  let kanaScript = 'hira';

  V.kana = function () {
    const conv = s => (kanaScript === 'kata' ? Kana.hiraToKata(s) : s);
    const pg = h('div.page');
    const seg = h('div.seg', ...[['hira', 'Hiragana ひらがな'], ['kata', 'Katakana カタカナ']].map(([v, l]) => {
      const b = h('button' + (kanaScript === v ? '.on' : ''), { type: 'button' }, l);
      b.onclick = () => { kanaScript = v; JT.go('kana'); };
      return b;
    }));
    pg.appendChild(h('div.page-head', h('div', h('h1', 'Kana'), h('div.sub', 'The two Japanese alphabets. ' + (JT.platform.touch ? 'Tap' : 'Click') + ' any character for its memory hook and stroke order.')), seg));

    const cell = c => {
      if (!c || c === ' ') return h('div.kcell.empty');
      const k = R.kana.get(c) || { r: Kana.toRomaji(c) };
      const el = h('div.kcell', h('div.k', c), h('div.r', k.r), stageDot('k:' + c));
      el.onclick = () => { JT.Audio.speak(c); JT.ui.modal(JT.Cards.kanaDetail(c), { wide: true }); };
      return el;
    };
    const chart = rows => {
      const g = h('div.kana-grid');
      for (const r of rows) for (const c of [...r.padEnd(5, ' ')].slice(0, 5)) g.appendChild(cell(c === ' ' ? null : conv(c)));
      return g;
    };
    const yoonChart = () => {
      const g = h('div.kana-grid.wide', { style: { gridTemplateColumns: 'repeat(3, minmax(0, 90px))' } });
      for (const r of YOON) for (let i = 0; i < 6; i += 2) g.appendChild(cell(conv(r.slice(i, i + 2))));
      return g;
    };
    const basic = GOJUON.join('').replace(/\s/g, '');
    const daku = DAKU.join('');
    const yoon = YOON.flatMap(r => [r.slice(0, 2), r.slice(2, 4), r.slice(4, 6)]);
    const drills = h('div.card', { style: { marginBottom: '18px' } },
      h('div.row.between', h('div', h('b', 'Kana drills'), h('div.small.muted', 'Short focused practice. Speed Run: how many can you read in 60 seconds?')),
        h('div.row',
          h('button.btn.sm', { type: 'button', onclick: () => drill([...basic].map(conv), 'Basic ' + (kanaScript === 'kata' ? 'katakana' : 'hiragana')) }, 'Drill basic'),
          h('button.btn.sm', { type: 'button', onclick: () => drill([...basic, ...daku].map(conv).concat(yoon.map(conv)), 'All ' + (kanaScript === 'kata' ? 'katakana' : 'hiragana')) }, 'Drill all'),
          h('button.btn.sm.primary', { type: 'button', onclick: () => speedRun([...basic, ...daku].map(conv)) }, icon('bolt'), 'Speed run'))));
    pg.appendChild(drills);
    pg.appendChild(h('div.row', { style: { alignItems: 'flex-start', gap: '36px' } },
      h('div', h('h3', 'Basic (gojūon)'), chart(GOJUON)),
      h('div', h('h3', 'Voiced (dakuten ゛ handakuten ゜)'), chart(DAKU), h('h3', 'Combinations (yōon)'), yoonChart())));
    if (kanaScript === 'kata') {
      const ext = ['ティ', 'ディ', 'ファ', 'フィ', 'フェ', 'フォ', 'ウィ', 'ウェ', 'ウォ', 'シェ', 'チェ', 'ジェ', 'ヴァ', 'ヴィ', 'ヴ', 'ヴェ', 'ヴォ', 'デュ'];
      const g = h('div.kana-grid.wide', { style: { gridTemplateColumns: 'repeat(6, minmax(0, 90px))' } }, ext.map(c => cell(c)));
      pg.appendChild(h('div', h('h3', 'Extended katakana for foreign sounds'), g));
    }
    return pg;
  };

  function drill(chars, title) {
    const items = sample(chars.filter(c => R.kana.get(c)), 20);
    JT.Player({
      title,
      steps: items.map((c, i) => ({ ex: () => JT.Ex.G.kana(c, ['k2r', 'k2r', 'r2k', 'listen', 'type'][i % 5], chars), key: 'k:' + c })),
      xpPerCorrect: 1,
      onExit: () => JT.go('kana'),
      onFinish: (res, stage) => {
        JT.ui.clear(stage);
        stage.appendChild(h('div.done-wrap', h('div.big-emoji', res.score >= 0.9 ? '🎯' : '✍️'), h('h1', Math.round(res.score * 100) + '% correct'),
          h('div', { style: { maxWidth: '600px', margin: '0 auto 18px' } }, res.results.filter(r => !r.correct).map(r => r.key && JT.Review.itemChip(r.key))),
          h('div.row', { style: { justifyContent: 'center' } }, h('button.btn', { type: 'button', onclick: () => JT.go('kana') }, 'Back'),
            h('button.btn.primary', { type: 'button', onclick: () => drill(chars, title) }, 'Again'))));
      }
    });
  }

  function speedRun(chars) {
    const main = document.getElementById('main');
    JT.ui.clear(main);
    let score = 0, misses = 0, left = 60, cur = null;
    const big = h('div.huge-char', { style: { fontSize: '130px' } });
    const inp = h('input.type-input', { type: 'text', placeholder: 'type romaji', autocomplete: 'off', style: { maxWidth: '300px', margin: '0 auto', display: 'block' } });
    const timer = h('div', { style: { fontSize: '22px', fontWeight: 800 } });
    const sc = h('div', { style: { fontSize: '22px', fontWeight: 800, color: 'var(--good)' } });
    const nextChar = () => { cur = chars[Math.floor(Math.random() * chars.length)]; big.textContent = cur; inp.value = ''; };
    const upd = () => { timer.textContent = '⏱ ' + left + 's'; sc.textContent = '✓ ' + score; };
    inp.addEventListener('input', () => {
      const v = inp.value.trim().toLowerCase();
      if (!v) return;
      const want = R.kana.get(cur).r;
      if (Kana.phonetic(v) === Kana.phonetic(want)) { score++; JT.Audio.sfx('tap'); nextChar(); upd(); }
    });
    inp.addEventListener('keydown', e => { if (e.key === 'Enter' && inp.value) { misses++; JT.Audio.sfx('bad'); big.title = R.kana.get(cur).r; JT.ui.toast(cur + ' = ' + R.kana.get(cur).r, 1500); nextChar(); } });
    const iv = setInterval(() => {
      if (!document.body.contains(big)) { clearInterval(iv); return; }
      left--; upd();
      if (left <= 0) {
        clearInterval(iv);
        const best = Math.max(JT.state.tests.kanaSpeed || 0, score);
        JT.state.tests.kanaSpeed = best;
        JT.Store.addXP(Math.min(30, score));
        JT.ui.clear(main);
        main.appendChild(h('div.page.page-narrow.center', { style: { paddingTop: '90px' } }, h('div', { style: { fontSize: '60px' } }, '⚡'), h('h1', score + ' kana in 60 seconds'),
          h('p.muted', `Personal best: ${best} · skipped ${misses}`), h('div.row', { style: { justifyContent: 'center' } },
            h('button.btn', { type: 'button', onclick: () => JT.go('kana') }, 'Back'), h('button.btn.primary', { type: 'button', onclick: () => speedRun(chars) }, 'Again'))));
      }
    }, 1000);
    main.appendChild(h('div.page.page-narrow', { style: { paddingTop: '50px', textAlign: 'center' } },
      h('div.row.between', h('button.btn.sm', { type: 'button', onclick: () => { clearInterval(iv); JT.go('kana'); } }, icon('close'), 'Stop'), timer, sc),
      h('p.muted', 'Type the romaji — the next kana appears as soon as you are right. Press Enter to skip.'), big, inp));
    nextChar(); upd();
    setTimeout(() => inp.focus(), 50);
  }

  // ---------------- kanji ----------------
  let kanjiFilter = 5, kanjiQuery = '';
  V.kanji = function () {
    const pg = h('div.page');
    const total = R.kanji.size;
    const known = [...R.kanji.keys()].filter(c => JT.SRS.has('j:' + c)).length;
    pg.appendChild(h('div.page-head', h('div', h('h1', 'Kanji'), h('div.sub', `${total.toLocaleString()} JLPT kanji · ${known} in your reviews. ${JT.platform.touch ? 'Tap' : 'Click'} any kanji for stroke order, readings and words.`))));
    const chips = h('div', [5, 4, 3, 2, 1].map(j => {
      const n = [...R.kanji.values()].filter(k => k.jlpt === j).length;
      const c = h('button.chip' + (kanjiFilter === j ? '.on' : ''), { type: 'button' }, `N${j} · ${n}`);
      c.onclick = () => { kanjiFilter = j; JT.go('kanji'); };
      return c;
    }));
    const search = h('input', { type: 'search', placeholder: 'Search meaning or reading (e.g. "water", "すい", "みず")', value: kanjiQuery, style: { maxWidth: '420px' } });
    const grid = h('div.kanji-grid');
    const draw = () => {
      JT.ui.clear(grid);
      const q = search.value.trim().toLowerCase();
      kanjiQuery = search.value;
      let list = [...R.kanji.values()];
      if (q) {
        const qk = Kana.romajiToKana(q, { final: true });
        list = list.filter(k => k.c === q || k.meaning.toLowerCase().includes(q) || Kana.kataToHira(k.on).includes(qk) || k.kun.includes(qk)).slice(0, 300);
      } else list = list.filter(k => k.jlpt === kanjiFilter);
      for (const k of list) {
        const t = h('div.ktile' + (JT.SRS.has('j:' + k.c) ? '.learned' : ''), { title: k.meaning }, k.c, stageDot('j:' + k.c));
        t.onclick = () => JT.ui.modal(JT.Cards.kanjiDetail(k.c), { wide: true });
        grid.appendChild(t);
      }
      if (!list.length) grid.appendChild(h('p.muted', 'No kanji found.'));
    };
    search.oninput = draw;
    const deck = R.deckProgress('j', kanjiFilter);
    pg.appendChild(h('div.row.between', { style: { marginBottom: '14px' } }, chips, search));
    pg.appendChild(h('div.row', { style: { marginBottom: '14px' } },
      h('button.btn.sm.blue', { type: 'button', disabled: !deck.next.length, onclick: () => JT.Review.learnNew('j', kanjiFilter, JT.state.settings.newKanji || 5) }, `Learn new N${kanjiFilter} kanji`),
      h('button.btn.sm', { type: 'button', onclick: () => JT.Review.practiceWeak('j:') }, 'Practice my kanji'),
      h('span.small.muted', `${deck.learned} / ${deck.total} N${kanjiFilter} kanji learned`)));
    pg.appendChild(grid);
    draw();
    return pg;
  };

  // ---------------- phrasebook ----------------
  let phraseCat = null, phraseQ = '';
  V.phrases = function () {
    const pg = h('div.page');
    pg.appendChild(h('div.page-head', h('div', h('h1', 'Phrasebook'), h('div.sub', 'Ready-to-use Japanese for real situations. Click ＋ to add a phrase to your reviews.'))));
    const cats = JT.PHRASEBOOK || [];
    if (!phraseCat && cats.length) phraseCat = cats[0].cat;
    const search = h('input', { type: 'search', placeholder: 'Search phrases in English or Japanese…', value: phraseQ, style: { maxWidth: '380px' } });
    const chips = h('div', cats.map(c => {
      const b = h('button.chip' + (phraseCat === c.cat ? '.on' : ''), { type: 'button' }, c.icon + ' ' + c.cat);
      b.onclick = () => { phraseCat = c.cat; search.value = ''; phraseQ = ''; JT.go('phrases'); };
      return b;
    }));
    const list = h('div.card.flat', { style: { padding: 0 } });
    const draw = () => {
      JT.ui.clear(list);
      phraseQ = search.value;
      const q = search.value.trim().toLowerCase();
      let items = [];
      for (const c of cats) for (const it of c.items) if (q ? (it[1].toLowerCase().includes(q) || T.surface(it[0]).includes(q) || T.reading(it[0]).includes(Kana.romajiToKana(q, { final: true })) || T.romaji(it[0]).toLowerCase().includes(q)) : c.cat === phraseCat) items.push(it);
      for (const [m, en, note] of items) {
        const key = R.wordKeyOf(m);
        const add = h('button.btn.icon.sm' + (JT.SRS.has(key) ? '.good' : ''), { type: 'button', title: 'Add to reviews' }, icon(JT.SRS.has(key) ? 'check' : 'plus'));
        add.onclick = () => {
          if (!R.words.has(key)) R.words.set(key, { key, m, en, level: 2 });
          (JT.state.extraWords = JT.state.extraWords || {})[key] = { m, en, level: 2 };
          if (JT.SRS.add(key)) { JT.Store.save(); add.classList.add('good'); add.innerHTML = JT.ui.ICONS.check; JT.ui.toast('Added to reviews'); JT.refreshNav(); }
        };
        list.appendChild(h('div.list-row', JT.ui.sayBtn(m), h('div.grow', T.el(m, { furigana: 'always' }), h('div.romaji', T.romaji(m)), note ? h('div.tiny.muted', note) : null),
          h('div.en', { style: { maxWidth: '40%', textAlign: 'right' } }, en), add));
      }
      if (!items.length) list.appendChild(h('div.list-row.muted', 'No phrases found.'));
    };
    search.oninput = draw;
    pg.append(h('div.row', { style: { marginBottom: '10px' } }, search), chips, list);
    draw();
    return pg;
  };

  // ---------------- dictionary ----------------
  let dictQ = '';
  V.dict = function () {
    const pg = h('div.page');
    pg.appendChild(h('div.page-head', h('div', h('h1', 'Dictionary'), h('div.sub', `${R.words.size.toLocaleString()} words and phrases from the course and the JLPT N5–N1 lists. Search in English, romaji, kana or kanji.`))));
    const search = h('input', { type: 'search', placeholder: 'e.g. "eat", "taberu", "たべる", "食"', value: dictQ });
    const out = h('div');
    const draw = () => {
      dictQ = search.value;
      JT.ui.clear(out);
      const q = search.value.trim();
      if (!q) { out.appendChild(h('p.muted', 'Start typing to search.')); return; }
      const ql = q.toLowerCase();
      const qk = Kana.kataToHira(Kana.romajiToKana(ql, { final: true }));
      const isAscii = /^[a-z\s'-]+$/i.test(q);
      const scored = [];
      for (const w of R.words.values()) {
        const surf = T.surface(w.m), read = Kana.kataToHira(T.reading(w.m));
        let s = 0;
        if (surf === q || read === qk) s = 100;
        else if (surf.startsWith(q) || (qk && read.startsWith(qk) && !/[a-z]/.test(qk))) s = 60;
        else if (surf.includes(q)) s = 40;
        const en = w.en.toLowerCase();
        if (isAscii) {
          if (new RegExp('(^|[^a-z])' + ql.replace(/[^a-z\s'-]/g, '') + '([^a-z]|$)').test(en)) s = Math.max(s, en.startsWith(ql) || en.startsWith('to ' + ql) ? 90 : 70);
          else if (en.includes(ql)) s = Math.max(s, 30);
        }
        if (s) scored.push([s - (w.deck ? 1 : 0) - surf.length * 0.1, w]);
      }
      scored.sort((a, b) => b[0] - a[0]);
      const kj = [...q].filter(c => R.kanji.has(c));
      if (kj.length) {
        out.appendChild(h('div.row', { style: { marginBottom: '12px' } }, kj.map(c => h('button.chip', { type: 'button', onclick: () => JT.ui.modal(JT.Cards.kanjiDetail(c), { wide: true }) },
          h('span.jp', { style: { fontSize: '18px' } }, c), ' ' + R.kanji.get(c).meaning))));
      }
      const list = h('div.card.flat', { style: { padding: 0 } });
      for (const [, w] of scored.slice(0, 80)) {
        const add = h('button.btn.icon.sm' + (JT.SRS.has(w.key) ? '.good' : ''), { type: 'button', title: JT.SRS.has(w.key) ? 'In your reviews' : 'Add to reviews' }, icon(JT.SRS.has(w.key) ? 'check' : 'plus'));
        add.onclick = () => { if (JT.SRS.add(w.key)) { JT.Store.save(); add.classList.add('good'); add.innerHTML = JT.ui.ICONS.check; JT.refreshNav(); } };
        const L = w.lesson && R.lessonById.get(w.lesson);
        list.appendChild(h('div.list-row', JT.ui.sayBtn(w.m),
          h('div', { style: { minWidth: '180px' } }, T.el(w.m, { furigana: 'always' }), h('div.romaji', T.romaji(w.m))),
          h('div.grow.en', w.en, w.note ? h('div.tiny.muted', w.note) : null),
          w.jlpt ? h('span.pill.blue', 'N' + w.jlpt) : null,
          L ? h('span.pill', { title: L.title, style: { cursor: 'pointer' }, onclick: () => JT.Lesson.start(L) }, 'Lesson ' + L.lv.tag + '·' + (L.index + 1)) : null,
          add));
      }
      if (!scored.length) list.appendChild(h('div.list-row.muted', 'No matches.'));
      out.appendChild(list);
    };
    search.oninput = draw;
    pg.append(search, h('div', { style: { height: '14px' } }), out);
    draw();
    setTimeout(() => search.focus(), 50);
    return pg;
  };

  // ---------------- grammar ----------------
  let gramQ = '';
  V.grammar = function () {
    const pg = h('div.page');
    pg.appendChild(h('div.page-head', h('div', h('h1', 'Grammar'), h('div.sub', `${R.grammar.size} grammar points from survival Japanese to N1. Click one to study it.`))));
    const search = h('input', { type: 'search', placeholder: 'Search grammar (e.g. "te-form", "ように", "because")', value: gramQ, style: { maxWidth: '420px' } });
    const out = h('div');
    const draw = () => {
      gramQ = search.value;
      JT.ui.clear(out);
      const q = search.value.trim().toLowerCase();
      const qk = Kana.romajiToKana(q, { final: true });
      for (const lv of JT.LEVELS) {
        const items = [];
        for (const L of lv.lessons) for (const g of L.grammar || []) {
          const text = (g.t + ' ' + (g.m || '') + ' ' + (g.x || '').replace(/<[^>]+>/g, '')).toLowerCase();
          if (!q || text.includes(q) || T.surface(g.t).includes(qk)) items.push([L, g]);
        }
        if (!items.length) continue;
        out.appendChild(h('h2', lv.title + ' ', h('span.pill.blue', lv.tag)));
        const list = h('div.card.flat', { style: { padding: 0 } });
        for (const [L, g] of items) {
          const row = h('div.list-row', { style: { cursor: 'pointer' } },
            h('div', { style: { minWidth: '260px', maxWidth: '380px' } }, T.el(g.t, { furigana: 'always', keepSpaces: true })),
            h('div.grow.small.muted', g.m || (g.x || '').replace(/<[^>]+>/g, '').slice(0, 90) + '…'),
            stageDot('g:' + g.id),
            h('span.tiny.muted', L.title));
          row.onclick = () => JT.ui.modal(JT.Cards.grammar(g, L.level), { wide: true });
          list.appendChild(row);
        }
        out.appendChild(list);
      }
    };
    search.oninput = draw;
    pg.append(search, out);
    draw();
    return pg;
  };
})();
