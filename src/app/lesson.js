/* Session player (lessons, reviews, tests) and the lesson builder. */
(function () {
  const JT = (window.JT = window.JT || {});
  const { h, icon, shuffle, sample, pick } = JT.ui;
  const { T, R, Kana } = JT;

  // ---------------- generic player ----------------
  // steps: [{ card: Node | () => Node } | { ex: spec | () => spec, key?, retry? }]
  function Player(opts) {
    const main = document.getElementById('main');
    JT.ui.clear(main);
    main.scrollTop = 0;
    const steps = opts.steps.slice();
    const total0 = steps.length;
    let idx = 0, answered = 0, correct = 0;
    const results = [];
    const requeued = new Set();
    let onKey = null;
    let finished = false;

    const bar = h('div.bar', h('i', { style: { width: '0%' } }));
    const counter = h('span.small.muted');
    const exit = h('button.btn.icon.ghost', { type: 'button', title: 'Exit' }, icon('close'));
    exit.onclick = async () => {
      if (answered > 0 && !opts.noExitConfirm && !finished) {
        const ok = await JT.ui.confirmBox('Leave this session?', opts.exitMsg || 'Your progress in this session will be lost.', 'Leave', 'Keep going');
        if (!ok) return;
      }
      cleanup();
      JT.Audio.stop();
      opts.onExit ? opts.onExit() : JT.go('home');
    };
    const top = h('div.player-top', exit, h('div.small', { style: { fontWeight: 650, minWidth: '120px' } }, opts.title || ''), bar, counter);
    const stage = h('div.stage');
    const body = h('div.player-body', stage);
    const footInner = h('div.inner');
    const foot = h('div.player-foot', footInner);
    const wrap = h('div.player', top, body, foot);
    main.appendChild(wrap);

    function cleanup() {
      if (onKey) document.removeEventListener('keydown', onKey);
      onKey = null;
    }

    function progress() {
      const pct = Math.min(1, idx / Math.max(steps.length, 1));
      bar.firstChild.style.width = pct * 100 + '%';
      counter.textContent = `${Math.min(idx + 1, steps.length)} / ${steps.length}`;
    }

    function setFoot(nodes, cls = '') {
      foot.className = 'player-foot' + (cls ? ' ' + cls : '');
      JT.ui.clear(footInner);
      JT.ui.append(footInner, nodes);
    }

    let primary = null;   // function bound to Enter
    let ctrl = null;

    function next() {
      JT.Audio.stop();
      idx++;
      if (idx >= steps.length) return finish();
      show();
    }

    function show() {
      progress();
      ctrl = null;
      main.scrollTop = 0;
      const st = steps[idx];
      JT.ui.clear(stage);
      if (st.card) {
        const node = typeof st.card === 'function' ? st.card() : st.card;
        stage.appendChild(node);
        const btn = h('button.btn.primary.lg', { type: 'button' }, st.cta || 'Continue', icon('arrow'));
        btn.onclick = next;
        primary = next;
        setFoot([h('div.grow', h('span.tiny.muted', 'Press ', h('span.kbd', 'Enter'), ' to continue')), btn]);
        return;
      }
      let spec = typeof st.ex === 'function' ? st.ex() : st.ex;
      if (!spec) { next(); return; }
      st.spec = spec;
      const checkBtn = h('button.btn.primary.lg', { type: 'button', disabled: true }, 'Check');
      const skipBtn = h('button.btn.ghost', { type: 'button' }, spec.kind === 'type' ? "Can't type now" : 'Skip');
      ctrl = JT.Ex.render(spec, stage, res => onAnswer(st, spec, res));
      JT.debugStep = { spec, ctrl };
      if (ctrl && ctrl.check) {
        checkBtn.onclick = () => ctrl.check();
        ctrl.onReady && ctrl.onReady(v => { checkBtn.disabled = !v; });
        primary = () => { if (!checkBtn.disabled) ctrl.check(); };
        skipBtn.onclick = () => onAnswer(st, spec, { correct: false, skipped: true });
        setFoot([skipBtn, h('div.grow'), checkBtn]);
      } else {
        primary = null;
        skipBtn.onclick = () => onAnswer(st, spec, { correct: false, skipped: true });
        setFoot([skipBtn, h('div.grow'), h('span.tiny.muted', spec.kind === 'choice' ? 'Press 1–4 to answer' : '')]);
      }
    }

    function revealNode(spec) {
      const r = spec.reveal;
      if (!r) return null;
      const d = h('div.fb-detail');
      if (r.jp) {
        d.appendChild(T.el(r.jp, { level: spec.level, noTargets: false }));
        if (JT.ui.showRomaji(spec.level) || spec.kind === 'type') d.appendChild(h('span.romaji', '  ' + T.romaji(r.jp)));
      }
      if (r.en) d.appendChild(h('div', r.en));
      return d;
    }

    function onAnswer(st, spec, res) {
      if (st.done) return;
      st.done = true;
      const first = !st.retry;
      if (first) {
        answered++;
        if (res.correct) correct++;
        results.push({ key: spec.key || st.key, correct: res.correct, spec });
        if (opts.grade && (spec.key || st.key)) opts.grade(spec.key || st.key, res.correct);
        JT.Store.recordAnswer(res.correct);
      }
      if (res.correct) {
        JT.Audio.sfx('good');
        if (first && opts.xpPerCorrect) JT.Store.addXP(opts.xpPerCorrect);
      } else {
        JT.Audio.sfx('bad');
        if (opts.requeueWrong !== false && !requeued.has(st)) {
          requeued.add(st);
          const again = { ex: st.ex, key: st.key, retry: true };
          const at = Math.min(steps.length, idx + 3 + Math.floor(Math.random() * 3));
          steps.splice(at, 0, again);
        }
      }
      if (opts.feedback === false) { setTimeout(next, 250); return; }
      const title = res.correct ? (res.close ? 'Almost perfect!' : pick(['Correct!', 'Nice!', 'Great job!', 'そうです！', 'Excellent!'])) : res.skipped ? 'Skipped' : 'Not quite';
      const detail = h('div');
      if (!res.correct || res.close || spec.kind === 'type') {
        const rv = revealNode(spec);
        if (rv) detail.appendChild(h('div', h('span.small.muted', res.correct ? 'Answer: ' : 'Correct answer: '), rv));
      }
      if (spec.why) detail.appendChild(h('div.fb-detail', '💡 ' + spec.why));
      const sayBtn = spec.reveal && spec.reveal.jp ? JT.ui.sayBtn(spec.reveal.jp) : null;
      const btn = h('button.btn.lg' + (res.correct ? '.good' : '.primary'), { type: 'button' }, 'Continue', icon('arrow'));
      btn.onclick = next;
      primary = next;
      setFoot([h('div.fb-icon', res.correct ? '✓' : '✗'), h('div.grow', h('div.fb-title', title), detail), sayBtn, btn], res.correct ? 'good' : 'bad');
      if (!res.correct && spec.reveal && spec.reveal.jp && JT.state.settings.autoplay) JT.Audio.speak(spec.reveal.jp, { silent: true });
    }

    function finish() {
      finished = true;
      cleanup();
      bar.firstChild.style.width = '100%';
      counter.textContent = '';
      setFoot([], '');
      foot.classList.add('hidden');
      const res = { correct, answered, score: answered ? correct / answered : 1, results };
      opts.onFinish && opts.onFinish(res, stage, { setFoot, foot });
    }

    onKey = e => {
      if (!document.body.contains(wrap)) { cleanup(); return; }
      if (document.querySelector('.modal-back')) return;
      const inInput = e.target && e.target.tagName === 'INPUT';
      if (e.key === 'Enter') {
        if (inInput && ctrl && ctrl.check && !steps[idx].done) { e.preventDefault(); ctrl.check(); return; }
        if (primary) { e.preventDefault(); primary(); }
        return;
      }
      if (!inInput && ctrl && ctrl.pick && /^[1-9]$/.test(e.key)) { ctrl.pick(+e.key - 1); }
    };
    document.addEventListener('keydown', onKey);
    show();
    return { stop: cleanup, total: total0 };
  }

  // ---------------- lesson builder ----------------
  function lessonSteps(L) {
    const steps = [];
    const level = L.level;
    const card = c => steps.push({ card: c });
    const ex = (fn, key) => steps.push({ ex: fn, key });
    card(() => JT.Cards.intro(L));

    // kana
    const kana = L.kanaList;
    if (kana.length) {
      if (kana.length <= 6) {
        kana.forEach(c => card(() => JT.Cards.kana(c)));
      } else {
        for (let i = 0; i < kana.length; i += 5) {
          const grp = kana.slice(i, i + 5);
          card(() => JT.Cards.kanaRow(grp, R.kana.get(grp[0]) && R.kana.get(grp[0]).script === 'kata' ? 'Katakana' : 'Hiragana'));
        }
      }
      const quiz = kana.length <= 10 ? kana.slice() : sample(kana, 10);
      shuffle(quiz).forEach(c => ex(() => JT.Ex.G.kana(c, 'k2r', kana), 'k:' + c));
      sample(kana, Math.min(3, kana.length)).forEach(c => ex(() => JT.Ex.G.kana(c, 'r2k', kana), 'k:' + c));
      if (JT.Audio.available) sample(kana, Math.min(2, kana.length)).forEach(c => ex(() => JT.Ex.G.kana(c, 'listen', kana), 'k:' + c));
    }

    // words
    const words = L.words;
    const pool = L.wordKeys.concat(R.pool('w', level));
    if (words.length) {
      if (level >= 6) {
        card(() => vocabListCard(L));
        for (let i = 0; i < words.length; i += 5) {
          const keys = L.wordKeys.slice(i, i + 5);
          if (keys.length >= 3) ex(() => JT.Ex.G.match(keys, level));
        }
      } else {
        for (let i = 0; i < words.length; i += 4) {
          const chunk = words.slice(i, i + 4);
          chunk.forEach(w => card(() => JT.Cards.word(R.words.get(w.key) || w, level)));
          if (chunk.length >= 3) ex(() => JT.Ex.G.match(chunk.map(w => w.key), level));
          const w = pick(chunk);
          ex(() => JT.Ex.G.word(w.key, pick(['en2jp', 'jp2en', 'listen']), pool), w.key);
        }
      }
    }

    // kanji
    if (L.kanjiList.length) {
      const ks = L.kanjiList.filter(c => R.kanji.has(c));
      ks.forEach(c => card(() => JT.Cards.kanji(c)));
      const kpool = ks.map(c => 'j:' + c).concat(R.pool('j').filter(k => { const x = R.kanji.get(k.slice(2)); return x && x.jlpt >= 4; }));
      shuffle(ks).forEach(c => ex(() => JT.Ex.G.kanji(c, 'meaning', kpool), 'j:' + c));
      sample(ks, Math.min(3, ks.length)).forEach(c => ex(() => JT.Ex.G.kanji(c, pick(['kanji', 'reading']), kpool), 'j:' + c));
    }

    // grammar
    const gids = (L.grammar || []).map(g => g.id);
    for (const g of L.grammar || []) {
      card(() => JT.Cards.grammar(g, level));
      const n = level >= 6 ? 2 : 1;
      for (let i = 0; i < n; i++) ex(() => JT.Ex.G.grammar(g.id, i === 0 ? 'fill' : pick(['build', 'mean']), gids), 'g:' + g.id);
    }

    if (L.dialog) card(() => JT.Cards.dialog(L.dialog, level));
    if (L.reading) {
      card(() => JT.Cards.reading(L.reading, level));
      for (const q of L.reading.q || []) {
        ex(() => {
          const [question, a, ...ds] = q;
          const o = x => (Kana.hasJapanese(x) ? { jp: x } : { text: x });
          const opts = shuffle([a, ...ds]);
          return { kind: 'choice', label: 'Reading comprehension', prompt: { text: question }, opts: opts.map(o), ans: opts.indexOf(a), level, reveal: Kana.hasJapanese(a) ? { jp: a } : { en: a } };
        });
      }
    }
    if (L.note) card(() => JT.Cards.note(L.note));

    // practice
    const practice = [];
    for (const x of L.ex || []) practice.push({ ex: () => JT.Ex.G.authored(x, L) });
    const wk = L.wordKeys;
    if (wk.length) {
      sample(wk, Math.min(level >= 6 ? 3 : 4, wk.length)).forEach(k => practice.push({ ex: () => JT.Ex.G.word(k, pick(level <= 1 ? ['jp2en', 'listen', 'en2jp'] : ['type', 'listen', 'en2jp', 'reading']), pool), key: k }));
    }
    if (level >= 6) gids.forEach(id => practice.push({ ex: () => JT.Ex.G.grammar(id, pick(['fill', 'build', 'mean']), gids), key: 'g:' + id }));
    shuffle(practice).forEach(p => steps.push(p));
    return steps;
  }

  function vocabListCard(L) {
    const list = h('div.card.flat', { style: { padding: '4px 0' } });
    for (const w of L.words) {
      list.appendChild(h('div.list-row', JT.ui.sayBtn(w.m), h('div.grow', T.el(w.m, { furigana: 'always' })), h('div.en', { style: { maxWidth: '50%', textAlign: 'right' } }, w.en)));
    }
    return h('div', h('div.step-label', 'Key vocabulary'), h('p.muted.small', 'Listen to each word and say it out loud. These words appear in this unit and go into your review deck.'), list);
  }

  function start(L) {
    JT.currentLesson = L;
    Player({
      title: L.title,
      steps: lessonSteps(L),
      xpPerCorrect: 2,
      exitMsg: 'Leave this lesson? You can restart it any time.',
      onExit: () => JT.go('course', { level: L.level }),
      onFinish: (res, stage) => finishLesson(L, res, stage)
    });
  }

  function finishLesson(L, res, stage) {
    const wasDone = R.lessonDone(L.id);
    const before = Object.keys(JT.state.srs).length;
    const stars = R.completeLesson(L, res.score);
    const added = Object.keys(JT.state.srs).length - before;
    const bonus = wasDone ? 5 : 20 + (stars === 3 ? 10 : 0);
    JT.Store.addXP(bonus);
    JT.Audio.sfx('done');
    if (stars === 3) JT.ui.confetti();
    const next = R.nextLesson();
    const convo = L.convo && R.convoById.get(L.convo);
    const pct = Math.round(res.score * 100);
    JT.ui.clear(stage);
    stage.appendChild(h('div.done-wrap',
      h('div.big-emoji', stars === 3 ? '🎉' : stars === 2 ? '😊' : '💪'),
      h('h1', { style: { margin: '10px 0 4px' } }, 'Lesson complete!'),
      h('div.muted', L.title),
      h('div', { style: { fontSize: '30px', marginTop: '8px' } }, JT.ui.stars(stars)),
      h('div.done-stats',
        h('div.stat', h('b', pct + '%'), h('span', 'accuracy')),
        h('div.stat', h('b', '+' + (res.correct * 2 + bonus)), h('span', 'XP earned')),
        h('div.stat', h('b', added), h('span', 'items added to reviews'))),
      convo ? h('div.card', { style: { textAlign: 'left', maxWidth: '560px', margin: '0 auto 18px' } },
        h('div.scene-card', h('div.scene-emoji', convo.icon || '💬'),
          h('div.grow', h('div.step-label', { style: { marginBottom: '2px' } }, 'Put it to use'), h('div', { style: { fontWeight: 700, fontSize: '17px' } }, 'Role-play: ' + convo.title),
            h('div.small.muted', convo.scene)),
          h('button.btn.blue', { type: 'button', onclick: () => JT.Convo.start(convo) }, 'Start'))) : null,
      h('div.row', { style: { justifyContent: 'center' } },
        h('button.btn', { type: 'button', onclick: () => start(L) }, icon('undo'), 'Retry'),
        h('button.btn', { type: 'button', onclick: () => JT.go('course', { level: L.level }) }, 'Course map'),
        next ? h('button.btn.primary', { type: 'button', onclick: () => start(next) }, 'Next: ' + next.title, icon('arrow')) : null)));
    JT.refreshNav && JT.refreshNav();
  }

  JT.Player = Player;
  JT.Lesson = { start, lessonSteps };
})();
