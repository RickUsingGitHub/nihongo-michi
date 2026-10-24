/* Main pages: home, course map, progress, settings, onboarding. */
(function () {
  const JT = (window.JT = window.JT || {});
  const { h, icon, pick } = JT.ui;
  const { T, R } = JT;
  const V = (JT.Views = {});

  function greeting() {
    const hr = new Date().getHours();
    if (hr < 11) return ['おはようございます', 'Good morning'];
    if (hr < 18) return ['こんにちは', 'Hello'];
    return ['こんばんは', 'Good evening'];
  }

  function phraseOfDay() {
    const all = (JT.PHRASEBOOK || []).flatMap(c => c.items.map(i => ({ m: i[0], en: i[1], cat: c.cat })));
    if (!all.length) return null;
    const d = new Date();
    const seed = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate();
    return all[seed % all.length];
  }

  function audioBanner() {
    if (JT.Audio.available) return null;
    return h('div.banner', { style: { marginTop: '14px' } },
      h('div.big', '🔈'),
      h('div.grow', h('b', 'Turn on Japanese audio (free, 2 minutes)'),
        h('div.small', 'Windows needs its Japanese voice installed: Settings → Time & language → Speech → Add voices → Japanese. Then restart this app.')),
      window.api ? h('button.btn', { type: 'button', onclick: () => window.api.openSpeechSettings() }, 'Open Speech settings') : null,
      h('button.btn.ghost', { type: 'button', onclick: () => JT.go('settings') }, 'Details'));
  }

  // ---------------- home ----------------
  V.home = function () {
    const st = JT.state;
    const [jp, en] = greeting();
    const next = R.nextLesson();
    const due = JT.SRS.due().length;
    const today = st.days[JT.Store.dayKey()] || 0;
    const goal = st.settings.dailyGoal || 50;
    const pg = h('div.page');
    const lvl = next ? next.lv : JT.LEVELS[JT.LEVELS.length - 1];
    const hero = h('div.hero',
      h('div.hero-jp', jp + (st.name ? '、' + st.name + 'さん' : '') + '！'),
      h('h1', next ? (Object.keys(st.lessons).length ? 'Ready for your next step?' : 'Your journey to fluent Japanese starts here') : 'You have completed the whole course! 🏆'),
      h('div', { style: { opacity: 0.85 } }, next ? `${lvl.title} · ${lvl.tag} — Lesson ${next.index + 1}: ${next.title}` : 'Keep your reviews going and try the JLPT mock exams.'),
      next ? h('button.btn.primary.lg', { type: 'button', onclick: () => JT.Lesson.start(next) }, icon('play'), Object.keys(st.lessons).length ? 'Continue learning' : 'Start lesson 1') : null);
    pg.appendChild(hero);
    const ab = audioBanner();
    if (ab) pg.appendChild(ab);
    if (!st.placement && !Object.keys(st.lessons).length) {
      pg.appendChild(h('div.banner.blue', { style: { marginTop: '14px' } }, h('div.big', '🧭'),
        h('div.grow', h('b', 'Studied Japanese before?'), h('div.small', 'Take the adaptive placement test (5–15 minutes) to jump straight to your level.')),
        h('button.btn.blue', { type: 'button', onclick: () => JT.Tests.placement() }, 'Take placement test')));
    }

    const counts = JT.SRS.counts();
    pg.appendChild(h('div.stat-tiles', { style: { marginTop: '18px' } },
      h('div.stat', h('b', '🔥 ' + JT.Store.currentStreak()), h('span', 'day streak')),
      h('div.stat', h('b', `${today} / ${goal}`), h('span', 'XP today'), h('div.bar', { style: { marginTop: '6px' } }, h('i', { style: { width: Math.min(100, today / goal * 100) + '%' } }))),
      h('div.stat', h('b', counts.total), h('span', 'items learned')),
      h('div.stat', h('b', st.xp), h('span', 'total XP'))));

    const grid = h('div.grid.g3', { style: { marginTop: '14px' } });
    grid.appendChild(h('div.card', h('div.row.between', h('h3', { style: { margin: 0 } }, '🔁 Reviews'), due ? h('span.pill.red', due + ' due') : h('span.pill.green', 'Done')),
      h('p.small.muted', due ? 'A few minutes of review keeps everything fresh.' : 'Nothing due — ' + (isFinite(JT.SRS.nextDue()) ? 'next one ' + JT.ui.timeUntil(JT.SRS.nextDue()) : 'learn something new!')),
      h('button.btn' + (due ? '.primary' : ''), { type: 'button', onclick: () => (due ? JT.Review.startDue() : JT.go('review')) }, due ? 'Review now' : 'Open reviews')));
    const convo = (next && next.convo && R.convoById.get(next.convo)) || pick(JT.CONVOS.filter(c => R.levelUnlocked(c.level))) || JT.CONVOS[0];
    if (convo) {
      grid.appendChild(h('div.card', h('h3', { style: { margin: 0 } }, '💬 Role-play'),
        h('div.scene-card', { style: { margin: '10px 0' } }, h('div.scene-emoji', convo.icon), h('div', h('b', convo.title), h('div.small.muted', convo.scene))),
        h('button.btn', { type: 'button', onclick: () => JT.Convo.start(convo) }, 'Start conversation')));
    }
    const jl = lvl ? lvl.jlpt : 5;
    const dp = R.deckProgress('w', jl);
    grid.appendChild(h('div.card', h('h3', { style: { margin: 0 } }, `🌱 JLPT N${jl} words`),
      h('p.small.muted', `${dp.learned} of ${dp.total} learned. Add a small batch every day.`),
      h('div.bar.blue', { style: { marginBottom: '12px' } }, h('i', { style: { width: (dp.total ? dp.learned / dp.total * 100 : 0) + '%' } })),
      h('button.btn', { type: 'button', disabled: !dp.next.length, onclick: () => JT.Review.learnNew('w', jl, st.settings.newWords || 10) }, 'Learn new words')));
    pg.appendChild(grid);

    const p = phraseOfDay();
    if (p) {
      pg.appendChild(h('div.card', { style: { marginTop: '14px' } },
        h('div.step-label', 'Phrase of the day · ' + p.cat),
        JT.ui.jpBlock(p.m, { en: p.en, size: 24, romaji: true, slow: true })));
    }

    pg.appendChild(h('h2', 'Your path to N1'));
    const path = h('div.card');
    for (const L of JT.LEVELS) {
      const done = R.levelLessonsDone(L.n), tot = L.lessons.length;
      path.appendChild(h('div.row', { style: { padding: '6px 0', cursor: 'pointer' }, onclick: () => JT.go('course', { level: L.n }) },
        h('span.pill' + (done === tot ? '.green' : R.levelUnlocked(L.n) ? '.blue' : ''), { style: { minWidth: '62px', justifyContent: 'center' } }, L.tag),
        h('div', { style: { width: '220px' } }, L.title),
        h('div.bar.grow' + (done === tot ? '.green' : ''), h('i', { style: { width: (tot ? done / tot * 100 : 0) + '%' } })),
        h('span.small.muted', { style: { width: '60px', textAlign: 'right' } }, `${done}/${tot}`)));
    }
    pg.appendChild(path);
    return pg;
  };

  // ---------------- course ----------------
  V.course = function (params = {}) {
    const pg = h('div.page');
    const nextL = R.nextLesson();
    pg.appendChild(h('div.page-head',
      h('div', h('h1', 'Course'), h('div.sub', 'From your first こんにちは to JLPT N1 — conversation first, with kana, kanji and grammar built in.')),
      h('div.row', h('button.btn', { type: 'button', onclick: () => JT.Tests.placement() }, '🧭 Placement test'))));
    let scrollTo = null;
    for (const lv of JT.LEVELS) {
      const unlocked = R.levelUnlocked(lv.n);
      const done = R.levelLessonsDone(lv.n);
      const test = JT.state.tests['level' + lv.n];
      const sec = h('div.level' + (unlocked ? '' : '.locked'), { id: 'level-' + lv.n });
      sec.appendChild(h('div.level-head',
        h('div.level-badge', { style: { background: unlocked ? lv.color || 'var(--indigo)' : null, fontSize: lv.tag.length > 3 ? '14px' : '19px' } }, lv.tag),
        h('div.grow', h('h2', lv.icon + ' ' + lv.title + ' ', h('span.jp.muted', { style: { fontWeight: 400, fontSize: '15px' } }, lv.jp || '')),
          h('div.small.muted', lv.desc)),
        h('div.stack', { style: { alignItems: 'flex-end', gap: '6px' } },
          h('span.small.muted', `${done} / ${lv.lessons.length} lessons`),
          h('button.btn.sm' + (test && test.passed ? '.good' : ''), { type: 'button', onclick: () => JT.Tests.levelTest(lv.n) },
            test && test.passed ? '✓ Level test passed' : unlocked ? 'Level test' : 'Test out of earlier level'))));
      if (lv.cando) {
        sec.appendChild(h('details', { style: { margin: '-4px 0 12px 70px' } }, h('summary.small', { style: { cursor: 'pointer', color: 'var(--muted)' } }, 'What you will be able to do'),
          h('ul.goal-list.small', lv.cando.map(c => h('li', c)))));
      }
      const grid = h('div.lessons');
      for (const L of lv.lessons) {
        const rec = JT.state.lessons[L.id];
        const isNext = nextL && nextL.id === L.id;
        if (isNext) scrollTo = scrollTo || sec;
        const card = h('div.card.click.lesson-card' + (rec && rec.done ? '.done' : '') + (isNext ? '.next' : '') + (!unlocked ? '.locked' : ''),
          h('div.lesson-ico', rec && rec.done ? '✅' : L.icon || '📘'),
          h('div.grow', h('div.lesson-title', `${L.index + 1}. ${L.title}`), h('div.lesson-sub', L.sub || ''),
            rec && rec.done ? (rec.tested ? h('span.tiny.muted', 'tested out') : JT.ui.stars(rec.stars)) : isNext ? h('span.pill.red', { style: { marginTop: '4px' } }, 'Up next') : null));
        card.onclick = async () => {
          if (!unlocked && !(await JT.ui.confirmBox('This lesson is ahead of you', 'Finish the earlier levels (or pass their level test) to unlock it. Open it anyway?', 'Open anyway'))) return;
          JT.Lesson.start(L);
        };
        grid.appendChild(card);
      }
      sec.appendChild(grid);
      pg.appendChild(sec);
      if (params.level === lv.n) scrollTo = sec;
    }
    if (scrollTo) setTimeout(() => scrollTo.scrollIntoView({ block: 'start' }), 30);
    return pg;
  };

  // ---------------- progress ----------------
  V.progress = function () {
    const st = JT.state;
    const pg = h('div.page');
    pg.appendChild(h('div.page-head', h('div', h('h1', 'Progress'), h('div.sub', 'Every review and lesson counts. 継続は力なり — persistence is power.'))));
    const c = (p) => JT.SRS.counts(p).total;
    const lessonsDone = R.lessons.filter(L => R.lessonDone(L.id)).length;
    const acc = st.stats.answered ? Math.round(st.stats.correct / st.stats.answered * 100) : 0;
    pg.appendChild(h('div.stat-tiles',
      h('div.stat', h('b', `${lessonsDone} / ${R.lessons.length}`), h('span', 'lessons completed')),
      h('div.stat', h('b', c('w:')), h('span', 'words & phrases')),
      h('div.stat', h('b', c('j:')), h('span', 'kanji')),
      h('div.stat', h('b', c('k:')), h('span', 'kana'))));
    pg.appendChild(h('div.stat-tiles', { style: { marginTop: '14px' } },
      h('div.stat', h('b', c('g:')), h('span', 'grammar points')),
      h('div.stat', h('b', '🔥 ' + JT.Store.currentStreak()), h('span', 'day streak')),
      h('div.stat', h('b', st.xp), h('span', 'total XP')),
      h('div.stat', h('b', acc + '%'), h('span', 'answer accuracy'))));

    // heatmap
    pg.appendChild(h('h2', 'Study activity'));
    const heat = h('div.heat');
    const start = new Date();
    start.setDate(start.getDate() - 7 * 20 + 1 - start.getDay());
    for (let i = 0; i < 7 * 20; i++) {
      const d = new Date(start); d.setDate(start.getDate() + i);
      const xp = st.days[JT.Store.dayKey(d)] || 0;
      const lvl = xp === 0 ? '' : xp < 20 ? 'l1' : xp < 50 ? 'l2' : xp < 120 ? 'l3' : 'l4';
      heat.appendChild(h('i' + (lvl ? '.' + lvl : ''), { title: `${JT.Store.dayKey(d)}: ${xp} XP` }));
    }
    pg.appendChild(h('div.card', heat, h('div.tiny.muted', { style: { marginTop: '8px' } }, 'Last 20 weeks · darker = more XP')));

    // JLPT readiness
    pg.appendChild(h('h2', 'JLPT readiness'));
    const grid = h('div.grid.g2');
    for (const j of [5, 4, 3, 2, 1]) {
      const wv = R.deckProgress('w', j), kv = R.deckProgress('j', j);
      const lessons = R.lessons.filter(L => L.lv.jlpt === j);
      const ld = lessons.filter(L => R.lessonDone(L.id)).length;
      const ready = 0.4 * (wv.total ? wv.learned / wv.total : 0) + 0.25 * (kv.total ? kv.learned / kv.total : 0) + 0.35 * (lessons.length ? ld / lessons.length : 0);
      const t = st.tests['jlpt' + j];
      grid.appendChild(h('div.card', h('div.row', JT.ui.ring(ready, 78, `<b>${Math.round(ready * 100)}%</b>`, j >= 4 ? 'var(--good)' : j === 3 ? 'var(--indigo)' : 'var(--accent)', 8),
        h('div.grow', h('b', 'JLPT N' + j), h('div.small.muted', `Grammar lessons ${ld}/${lessons.length} · words ${wv.learned}/${wv.total} · kanji ${kv.learned}/${kv.total}`),
          t ? h('div.small', 'Best mock exam: ' + Math.round(t.best * 100) + '%' + (t.passed ? ' ✓' : '')) : null),
        h('button.btn.sm', { type: 'button', onclick: () => JT.Tests.mockExam(j) }, 'Mock exam'))));
    }
    pg.appendChild(grid);

    pg.appendChild(h('h2', 'Conversations'));
    const played = Object.keys(st.convos).length;
    pg.appendChild(h('div.card', h('div.row.between', h('span', `${played} of ${JT.CONVOS.length} role-plays completed`),
      h('span', `${Object.values(st.convos).filter(x => x.best === 3).length} with 3 stars`)),
      h('div.bar.green', { style: { marginTop: '8px' } }, h('i', { style: { width: (played / Math.max(1, JT.CONVOS.length) * 100) + '%' } }))));
    return pg;
  };

  // ---------------- settings ----------------
  V.settings = function () {
    const st = JT.state, s = st.settings;
    const pg = h('div.page.page-narrow');
    pg.appendChild(h('div.page-head', h('div', h('h1', 'Settings'))));
    const save = () => { JT.Store.save(); };
    const row = (label, hint, control) => h('div.list-row', h('div.grow', h('div', { style: { fontWeight: 600 } }, label), hint ? h('div.small.muted', hint) : null), control);
    const seg = (key, options, after) => {
      const el = h('div.seg');
      for (const [v, label] of options) {
        const b = h('button' + (s[key] === v ? '.on' : ''), { type: 'button' }, label);
        b.onclick = () => { s[key] = v; el.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); save(); after && after(); };
        el.appendChild(b);
      }
      return el;
    };
    const sw = (key, after) => {
      const inp = h('input', { type: 'checkbox', checked: !!s[key] });
      inp.onchange = () => { s[key] = inp.checked; save(); after && after(); };
      return h('label.switch', inp, h('span'));
    };
    const num = (key, min, max, step) => {
      const inp = h('input', { type: 'number', min, max, step, value: s[key], style: { width: '90px' } });
      inp.style.padding = '8px 10px'; inp.style.borderRadius = '9px'; inp.style.border = '1.5px solid var(--line)'; inp.style.background = 'var(--surface)';
      inp.onchange = () => { s[key] = Math.max(min, Math.min(max, +inp.value || min)); inp.value = s[key]; save(); };
      return inp;
    };

    const nameInp = h('input', { type: 'text', value: st.name, placeholder: 'Your name', maxlength: 30, style: { width: '220px' } });
    nameInp.onchange = async () => {
      const n = nameInp.value.trim();
      if (!n) { nameInp.value = st.name; JT.ui.toast('A learner needs a name.'); return; }
      await JT.Store.renameProfile(JT.Store.currentProfile(), n);
      JT.refreshNav();
      JT.ui.toast('Renamed to ' + n);
    };
    pg.appendChild(h('h2', { style: { marginTop: 0 } }, 'Learner'));
    pg.appendChild(h('div.card.flat', { style: { padding: 0 } },
      row('Name', 'Each learner on this computer has their own progress. Japanese will call you ' + (st.name || '…') + 'さん.', nameInp),
      row('Switch learner', 'Go back to "Who\'s learning today?"', h('button.btn.sm', { type: 'button', onclick: () => JT.showProfiles() }, 'Switch')),
      row('Remove this learner', 'Deletes ' + (st.name || 'this learner') + '\'s progress from this computer.', h('button.btn.sm', {
        type: 'button', style: { color: 'var(--bad)' }, onclick: async () => {
          if (!(await JT.ui.confirmBox('Remove ' + st.name + '?', 'All of ' + st.name + '\'s lessons, reviews, XP and streak will be removed from this computer.', 'Remove'))) return;
          await JT.Store.deleteProfile(JT.Store.currentProfile());
          JT.showProfiles();
        }
      }, 'Remove'))));

    pg.appendChild(h('h2', 'Display'));
    pg.appendChild(h('div.card.flat', { style: { padding: 0 } },
      row('Theme', null, seg('theme', [['system', 'System'], ['light', 'Light'], ['dark', 'Dark']], () => JT.applyTheme()))));

    pg.appendChild(h('h2', 'Japanese text'));
    pg.appendChild(h('div.card.flat', { style: { padding: 0 } },
      row('Romaji (Latin letters)', 'Auto shows romaji only in the first levels, so you learn to read kana quickly.', seg('romaji', [['auto', 'Auto'], ['always', 'Always'], ['never', 'Never']])),
      row('Furigana (reading aids over kanji)', 'Smart hides furigana for kanji you know well — hover to peek.', seg('furigana', [['smart', 'Smart'], ['always', 'Always'], ['never', 'Never']])),
      row('Spaces between words', 'Beginner-friendly spacing in the first levels.', seg('spacing', [['auto', 'Auto'], ['on', 'On'], ['off', 'Off']]))));

    pg.appendChild(h('h2', 'Audio'));
    const audioCard = h('div.card.flat', { style: { padding: 0 } });
    if (JT.Audio.available) {
      const sel = h('select', { style: { width: '260px' } }, JT.Audio.jaVoices.map(v => h('option', { value: v.id, selected: v.id === s.voice }, v.name)));
      sel.onchange = () => { s.voice = sel.value; save(); JT.Audio.speak('こんにちは。日本語の勉強、がんばりましょう！'); };
      const rate = h('input', { type: 'range', min: 0.6, max: 1.4, step: 0.05, value: s.rate, style: { width: '180px' } });
      const rateLabel = h('span.small', { style: { minWidth: '48px', textAlign: 'right', fontWeight: 650 } }, (+s.rate).toFixed(2) + '×');
      rate.oninput = () => { rateLabel.textContent = (+rate.value).toFixed(2) + '×'; };
      rate.onchange = () => { s.rate = +rate.value; save(); JT.Audio.speak('ゆっくり話してください。'); };
      audioCard.append(
        row('Voice', `${JT.Audio.jaVoices.length} Japanese voice(s) found`, sel),
        row('Speaking speed', 'Speed of all normal audio. The 🐢 button always plays about half as fast.', h('div.row', { style: { flexWrap: 'nowrap', gap: '8px' } }, rate, rateLabel)),
        row('Test', null, h('button.btn.sm', { type: 'button', onclick: () => JT.Audio.speak('はじめまして。どうぞよろしくお願いします。') }, icon('speaker'), 'Play sample')));
    } else {
      audioCard.appendChild(h('div', { style: { padding: '16px 18px' } },
        h('div', { style: { fontWeight: 700, marginBottom: '6px' } }, '🔈 No Japanese voice found on this PC'),
        h('ol.small', { style: { lineHeight: 1.8, margin: '6px 0 12px' } },
          h('li', 'Open Windows Settings → Time & language → Speech.'),
          h('li', 'Under "Manage voices", click Add voices.'),
          h('li', 'Search for Japanese, tick "Japanese (Japan)" and click Add.'),
          h('li', 'Once it has installed, click "Check again" below (or restart the app).')),
        h('div.row', window.api ? h('button.btn.blue', { type: 'button', onclick: () => window.api.openSpeechSettings() }, 'Open Speech settings') : null,
          h('button.btn', { type: 'button', onclick: async () => { const ok = await JT.Audio.init(); JT.ui.toast(ok ? 'Japanese voice found! 🎉' : 'Still no Japanese voice — it can take a few minutes to install.'); JT.go('settings'); } }, 'Check again'))));
    }
    audioCard.append(
      row('Autoplay audio', 'Play words and prompts automatically', sw('autoplay')),
      row('Sound effects', null, sw('sfx')));
    pg.appendChild(audioCard);

    pg.appendChild(h('h2', 'Study'));
    pg.appendChild(h('div.card.flat', { style: { padding: 0 } },
      row('Daily XP goal', null, num('dailyGoal', 10, 500, 10)),
      row('Reviews per session', null, num('reviewBatch', 5, 100, 5)),
      row('New words per batch', null, num('newWords', 5, 30, 1)),
      row('New kanji per batch', null, num('newKanji', 3, 20, 1))));

    pg.appendChild(h('h2', 'Your data'));
    const file = h('input', { type: 'file', accept: '.json,application/json', style: { display: 'none' } });
    file.onchange = async () => {
      const f = file.files[0];
      if (!f) return;
      try { JT.Store.importJson(await f.text()); JT.ui.toast('Progress imported.'); JT.go('home'); }
      catch (e) { JT.ui.toast('Import failed: ' + e.message); }
    };
    pg.appendChild(h('div.card.flat', { style: { padding: 0 } },
      row('Export progress', 'Save a backup file of all your progress', h('button.btn.sm', { type: 'button', onclick: exportProgress }, 'Export')),
      row('Import progress', 'Restore from a backup file', h('button.btn.sm', { type: 'button', onclick: () => file.click() }, 'Import'), file),
      row('Placement test', 'Re-test your level — lessons you test out of are marked complete', h('button.btn.sm', { type: 'button', onclick: () => JT.Tests.placement() }, 'Start')),
      row('Reset all progress', 'Start over from zero. This cannot be undone.', h('button.btn.sm', {
        type: 'button', style: { color: 'var(--bad)' }, onclick: async () => {
          if (await JT.ui.confirmBox('Reset everything?', 'All lessons, reviews, XP and streaks will be erased.', 'Reset')) { JT.Store.reset(); JT.refreshNav(); JT.go('home'); }
        }
      }, 'Reset'))));

    pg.appendChild(h('h2', 'About & credits'));
    pg.appendChild(h('div.card.small', { style: { lineHeight: 1.7 } },
      h('p', { style: { marginTop: 0 } }, h('b', 'Nihongo Michi'), ' — lessons, dialogues, role-plays, grammar explanations and placement questions were written for this app.'),
      h('ul', { style: { paddingLeft: '18px' } },
        h('li', 'JLPT vocabulary lists: Jonathan Waller (tanos.co.uk), CC BY, via open-anki-jlpt-decks; English glosses from JMdict (EDRDG), CC BY-SA 4.0.'),
        h('li', 'Kanji meanings and readings: KANJIDIC (EDRDG), CC BY-SA 4.0, via the kanji-data project (MIT); everyday keywords for some beginner kanji written for this app.'),
        h('li', 'Stroke order: KanjiVG © Ulrich Apel, CC BY-SA 3.0 — kanjivg.tagaini.net'),
        h('li', 'JLPT level assignments are unofficial: the JLPT has not published official lists since 2010.'))));
    return pg;
  };

  function exportProgress() {
    const blob = new Blob([JSON.stringify(JT.state, null, 1)], { type: 'application/json' });
    const a = h('a', { href: URL.createObjectURL(blob), download: `nihongo-michi-progress-${JT.Store.dayKey()}.json` });
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  // ---------------- learner picker ----------------
  function lastUsedText(t) {
    if (!t) return '';
    const days = Math.floor((Date.now() - t) / JT.SRS.DAY);
    return days <= 0 ? 'Studied today' : days === 1 ? 'Studied yesterday' : `Last studied ${days} days ago`;
  }

  V.profiles = async function () {
    const ix = await JT.Store.listProfiles();
    const profiles = ix.profiles.slice().sort((a, b) => (b.lastUsed || 0) - (a.lastUsed || 0));
    const pg = h('div.profile-screen');
    pg.append(
      h('div.logo', { style: { margin: '0 auto 14px', width: '68px', height: '68px', fontSize: '38px' } }, '道'),
      h('div.jp.muted', profiles.length ? '今日は誰が勉強しますか？' : 'ようこそ！'),
      h('h1', profiles.length ? 'Who\'s learning today?' : 'Welcome to Nihongo Michi'),
      h('p.muted', profiles.length ? 'Each learner keeps their own lessons, reviews and streak.' : 'Real-world Japanese from zero to JLPT N1. First, tell us your name — everyone who uses this computer gets their own progress.'));

    const grid = h('div.profile-grid');
    for (const p of profiles) {
      const s = p.summary;
      const card = h('button.card.click.profile-card' + (p.id === ix.last ? '.last' : ''), { type: 'button', title: 'Continue as ' + p.name },
        JT.ui.avatar(p.name, 64),
        h('div.pname', p.name),
        h('div.pmeta', s ? `${s.level || ''}${s.level ? ' · ' : ''}${s.xp} XP${s.streak ? ' · 🔥 ' + s.streak : ''}` : 'Ready to start', h('br'), lastUsedText(p.lastUsed)));
      card.onclick = async () => {
        card.disabled = true;
        try { await JT.enterProfile(p.id); }
        catch (e) { card.disabled = false; JT.ui.toast('Could not open ' + p.name + ': ' + e.message); }
      };
      grid.appendChild(card);
    }

    // add a learner (a name is required)
    const nameInp = h('input', { type: 'text', placeholder: 'Your name', maxlength: 30, style: { textAlign: 'center' } });
    const err = h('div.tiny', { style: { color: 'var(--bad)', minHeight: '16px' } });
    const go = h('button.btn.primary', { type: 'button' }, 'Start learning', icon('arrow'));
    const create = async () => {
      const n = nameInp.value.trim();
      if (!n) { err.textContent = 'Please enter a name.'; nameInp.focus(); return; }
      if (profiles.some(p => p.name.toLowerCase() === n.toLowerCase())) { err.textContent = 'There\'s already a learner called ' + n + '. Pick them above, or use another name.'; return; }
      go.disabled = true;
      try { await JT.Store.createProfile(n); JT.afterProfileOpen(); }
      catch (e) { go.disabled = false; err.textContent = e.message; }
    };
    go.onclick = create;
    nameInp.addEventListener('keydown', e => { if (e.key === 'Enter') create(); });
    const form = h('div.stack', { style: { width: '100%', gap: '8px', alignItems: 'center' } }, nameInp, go, err);
    const addCard = h('div.card.profile-card.add');
    const showForm = () => {
      JT.ui.clear(addCard);
      addCard.classList.remove('click');
      addCard.style.cursor = 'default';
      addCard.append(h('div.pname', 'New learner'), form);
      setTimeout(() => nameInp.focus(), 30);
    };
    if (profiles.length) {
      addCard.classList.add('click');
      addCard.append(h('div.plus', '+'), h('div.pname', 'Add a learner'), h('div.pmeta', 'Someone else using this computer?'));
      addCard.onclick = () => { if (!addCard.contains(nameInp)) showForm(); };
    } else showForm();
    grid.appendChild(addCard);
    if (!profiles.length) { grid.style.gridTemplateColumns = 'minmax(260px, 340px)'; grid.style.justifyContent = 'center'; }
    pg.appendChild(grid);
    return pg;
  };

  // ---------------- onboarding ----------------
  V.onboarding = function () {
    let m;
    const finish = (path) => {
      JT.state.onboarded = true;
      JT.Store.save(true);
      m.close();
      if (path === 'test') JT.Tests.placement();
      else if (path === 'start') JT.Lesson.start(R.lessons[0]);
      else JT.go('home');
    };
    m = JT.ui.modal([
      h('div.center', h('div.logo', { style: { margin: '0 auto 12px', width: '64px', height: '64px', fontSize: '36px' } }, '道'),
        h('div.jp.muted', 'ようこそ、' + JT.state.name + 'さん！'), h('h2', { style: { margin: '4px 0 6px' } }, 'Welcome to Nihongo Michi, ' + JT.state.name)),
      h('p.muted', { style: { textAlign: 'center', marginTop: 0 } }, 'Real-world Japanese from zero to JLPT N1.'),
      h('ul.goal-list.small',
        h('li', h('b', 'Speak from day one'), ' — useful phrases and role-play conversations right from lesson 1.'),
        h('li', h('b', 'Read in a week'), ' — hiragana woven into your first lessons with memory hooks and stroke order.'),
        h('li', h('b', 'Never forget'), ' — spaced repetition schedules every word, kanji and grammar point for you.'),
        h('li', h('b', 'All the way to N1'), ' — 8,000 words, 2,200 kanji and grammar for every JLPT level.')),
      h('div.grid.g2', { style: { marginTop: '18px' } },
        h('button.card.click', { type: 'button', style: { textAlign: 'left', cursor: 'pointer' }, onclick: () => finish('start') },
          h('div', { style: { fontSize: '28px' } }, '🌱'), h('b', "I'm brand new"), h('div.small.muted', 'Start with lesson 1: greetings and your first hiragana.')),
        h('button.card.click', { type: 'button', style: { textAlign: 'left', cursor: 'pointer' }, onclick: () => finish('test') },
          h('div', { style: { fontSize: '28px' } }, '🧭'), h('b', 'I know some Japanese'), h('div.small.muted', 'Take the adaptive placement test and jump to your level.'))),
      h('div.center', { style: { marginTop: '12px' } }, h('button.btn.ghost.sm', { type: 'button', onclick: () => finish('home') }, 'Just look around first'))
    ], { sticky: true });
  };
})();
