/* Reviews (spaced repetition), learning new items from the JLPT decks, and extra practice. */
(function () {
  const JT = (window.JT = window.JT || {});
  const { h, icon, shuffle, pick } = JT.ui;
  const { R, T } = JT;

  const TYPE_NAMES = { k: 'Kana', w: 'Words', j: 'Kanji', g: 'Grammar' };

  function startReview(keys, title = 'Review') {
    keys = keys.filter(k => R.item(k));
    if (!keys.length) { JT.ui.toast('Nothing to review right now.'); return; }
    const before = {};
    for (const k of keys) before[k] = JT.SRS.box(k);
    JT.Player({
      title,
      steps: shuffle(keys).map(k => ({ ex: () => JT.Ex.G.forItem(k), key: k })),
      xpPerCorrect: 1,
      grade: (k, ok) => { JT.SRS.grade(k, ok); JT.Store.save(); },
      onExit: () => { JT.refreshNav(); JT.go('review'); },
      onFinish: (res, stage) => {
        JT.Store.addXP(5);
        JT.Audio.sfx('done');
        JT.refreshNav();
        const wrong = res.results.filter(r => !r.correct).map(r => r.key).filter(Boolean);
        const up = res.results.filter(r => r.correct).length;
        JT.ui.clear(stage);
        stage.appendChild(h('div.done-wrap',
          JT.ui.mascot({ size: 120, say: res.score >= 0.9 ? ['かんぺき！', 'Perfect memory!'] : res.score >= 0.7 ? ['おつかれさま！', 'Nice work — see you next review.'] : ['だいじょうぶ！', 'No worries — the tricky ones come back sooner.'] }),
          h('h1', 'Review done!'),
          h('div.done-stats',
            h('div.stat', h('b', Math.round(res.score * 100) + '%'), h('span', 'accuracy')),
            h('div.stat', h('b', up), h('span', 'moved up a stage')),
            h('div.stat', h('b', wrong.length), h('span', 'to see again soon'))),
          wrong.length ? h('div.card', { style: { maxWidth: '620px', margin: '0 auto 18px', textAlign: 'left' } },
            h('div.step-label', 'Items to focus on'),
            h('div', [...new Set(wrong)].slice(0, 16).map(k => itemChip(k)))) : null,
          h('div.row', { style: { justifyContent: 'center' } },
            h('button.btn', { type: 'button', onclick: () => JT.go('review') }, 'Back to reviews'),
            JT.SRS.due().length ? h('button.btn.primary', { type: 'button', onclick: () => startDue() }, 'Keep reviewing (' + JT.SRS.due().length + ')') : null)));
      }
    });
  }

  function itemChip(k) {
    const it = R.item(k);
    if (!it) return null;
    let label = R.label(k), sub = '';
    if (k[0] === 'w') sub = it.en;
    else if (k[0] === 'j') sub = it.meaning.split(', ')[0];
    else if (k[0] === 'k') sub = it.r;
    return h('span.chip', { title: sub }, h('span.jp', label), sub ? h('span.muted', ' · ' + sub.slice(0, 28)) : null);
  }

  function startDue() {
    const n = JT.state.settings.reviewBatch || 20;
    startReview(JT.SRS.due().slice(0, n), 'Daily review');
  }

  // Learn new deck items: cards in groups of 5, each group followed by quick checks.
  function learnNew(type, jlpt, n) {
    const items = R.deckProgress(type, jlpt).next.slice(0, n);
    if (!items.length) { JT.ui.toast('You have learned every item in this deck. すごい！'); return; }
    const steps = [];
    const level = R.JLPT_LEVEL[jlpt];
    const pool = R.deckItems(type, jlpt);
    for (let i = 0; i < items.length; i += 5) {
      const grp = items.slice(i, i + 5);
      for (const k of grp) {
        if (type === 'w') steps.push({ card: () => JT.Cards.word(R.item(k), level, 'New word · N' + jlpt) });
        else steps.push({ card: () => JT.Cards.kanji(k.slice(2), 'New kanji · N' + jlpt) });
      }
      if (type === 'w') {
        if (grp.length >= 3) steps.push({ ex: () => JT.Ex.G.match(grp, level) });
        for (const k of shuffle(grp)) steps.push({ ex: () => JT.Ex.G.word(k, pick(['jp2en', 'en2jp', 'reading']), pool), key: k });
      } else {
        for (const k of shuffle(grp)) steps.push({ ex: () => JT.Ex.G.kanji(k.slice(2), 'meaning', pool), key: k });
        for (const k of shuffle(grp).slice(0, 2)) steps.push({ ex: () => JT.Ex.G.kanji(k.slice(2), 'reading', pool), key: k });
      }
    }
    JT.Player({
      title: `New ${type === 'w' ? 'words' : 'kanji'} · N${jlpt}`,
      steps,
      xpPerCorrect: 2,
      onExit: () => JT.go('review'),
      onFinish: (res, stage) => {
        items.forEach(k => JT.SRS.add(k));
        JT.Store.addXP(10);
        JT.Store.save();
        JT.Audio.sfx('done');
        JT.refreshNav();
        JT.ui.clear(stage);
        stage.appendChild(h('div.done-wrap',
          h('div.big-emoji', '🌱'),
          h('h1', `${items.length} new ${type === 'w' ? 'words' : 'kanji'} learned`),
          h('p.muted', 'They are now in your review deck — you will see them again tomorrow, then at growing intervals.'),
          h('div', { style: { maxWidth: '640px', margin: '10px auto 20px' } }, items.map(itemChip)),
          h('div.row', { style: { justifyContent: 'center' } },
            h('button.btn', { type: 'button', onclick: () => JT.go('review') }, 'Back'),
            h('button.btn.primary', { type: 'button', onclick: () => learnNew(type, jlpt, n) }, 'Learn ' + n + ' more'))));
      }
    });
  }

  function practiceWeak(prefix) {
    const keys = JT.SRS.weakest(15, k => !prefix || k.startsWith(prefix));
    if (!keys.length) { JT.ui.toast('Complete a lesson first — then you can practice here.'); return; }
    JT.Player({
      title: 'Extra practice',
      steps: shuffle(keys).map(k => ({ ex: () => JT.Ex.G.forItem(k), key: k })),
      xpPerCorrect: 1,
      onExit: () => JT.go('review'),
      onFinish: (res, stage) => {
        JT.ui.clear(stage);
        stage.appendChild(h('div.done-wrap', h('div.big-emoji', '💪'), h('h1', 'Practice complete'),
          h('p.muted', Math.round(res.score * 100) + '% correct. Extra practice doesn\'t change your review schedule.'),
          h('button.btn.primary', { type: 'button', onclick: () => JT.go('review') }, 'Back')));
      }
    });
  }

  // ---------- page ----------
  function page() {
    const due = JT.SRS.due();
    const byType = {};
    for (const k of due) byType[k[0]] = (byType[k[0]] || 0) + 1;
    const counts = JT.SRS.counts();
    const pg = h('div.page');
    pg.appendChild(h('div.page-head', h('div', h('h1', 'Review & Learn'), h('div.sub', 'Spaced repetition shows each item just before you would forget it.'))));

    const nextT = JT.SRS.nextDue();
    const hero = h('div.card.review-hero', { style: { display: 'flex', gap: '24px', alignItems: 'center', padding: '22px 26px' } },
      JT.ui.ring(due.length ? 1 : 0, 104, `<b style="font-size:28px">${due.length}</b><br><span class="tiny muted">due</span>`, 'var(--accent)'),
      h('div.grow',
        h('div', { style: { fontSize: '20px', fontWeight: 750 } }, due.length ? `${due.length} item${due.length > 1 ? 's' : ''} ready for review` : 'All caught up! 🎉'),
        h('div.muted.small', due.length ? Object.entries(byType).map(([t, n]) => `${n} ${TYPE_NAMES[t]}`).join(' · ') :
          isFinite(nextT) ? 'Next review ' + JT.ui.timeUntil(nextT) + '. Learn something new below!' : 'Finish a lesson or learn new words to start your deck.')),
      due.length ? h('button.btn.primary.lg', { type: 'button', onclick: startDue }, icon('review'), 'Start review') :
        h('button.btn.lg', { type: 'button', onclick: () => practiceWeak() }, 'Extra practice'));
    pg.appendChild(hero);

    // stage distribution
    if (counts.total) {
      const dist = h('div.card', { style: { marginTop: '14px' } },
        h('div.row.between', h('b', `${counts.total} items in your deck`), h('span.small.muted', 'Learning → Familiar → Strong → Mastered')));
      const barRow = h('div', { style: { display: 'flex', height: '12px', borderRadius: '99px', overflow: 'hidden', marginTop: '10px', background: 'var(--surface2)' } });
      for (const s of JT.SRS.STAGES) if (counts[s.id]) barRow.appendChild(h('div', { style: { width: (counts[s.id] / counts.total * 100) + '%', background: s.color }, title: s.name + ': ' + counts[s.id] }));
      dist.appendChild(barRow);
      dist.appendChild(h('div.row', { style: { marginTop: '10px', gap: '16px' } }, JT.SRS.STAGES.map(s => h('span.small', h('span', { style: { color: s.color } }, '● '), `${s.name} ${counts[s.id]}`))));
      pg.appendChild(dist);
    }

    pg.appendChild(h('h2', 'Learn new vocabulary & kanji'));
    pg.appendChild(h('p.muted.small', { style: { marginTop: '-6px' } }, 'Complete JLPT decks — about 8,000 words and 2,200 kanji from N5 to N1. Words you meet in lessons count automatically. Tip: learn a small batch every day rather than a big pile once a week.'));
    const grid = h('div.grid.g2');
    for (const jlpt of [5, 4, 3, 2, 1]) {
      const wv = R.deckProgress('w', jlpt), kv = R.deckProgress('j', jlpt);
      const unlocked = R.levelUnlocked(Math.max(0, R.JLPT_LEVEL[jlpt] - (jlpt === 5 ? 4 : 0)));
      const deckRow = (label, p, type, n) => h('div', { style: { marginTop: '12px' } },
        h('div.row.between', h('span.small', h('b', label), ` ${p.learned} / ${p.total}`),
          h('button.btn.sm' + (unlocked ? '.blue' : ''), { type: 'button', disabled: !p.next.length, onclick: () => learnNew(type, jlpt, n) }, p.next.length ? `Learn ${Math.min(n, p.next.length)} new` : 'Complete ✓')),
        h('div.bar.blue', { style: { marginTop: '6px' } }, h('i', { style: { width: (p.total ? p.learned / p.total * 100 : 0) + '%' } })));
      grid.appendChild(h('div.card',
        h('div.row.between', h('div', h('span.pill.' + (jlpt >= 4 ? 'green' : jlpt === 3 ? 'blue' : 'red'), 'JLPT N' + jlpt), ' ',
          h('span.small.muted', { 'data-x': 1 }, { 5: 'Beginner', 4: 'Elementary', 3: 'Intermediate', 2: 'Upper-intermediate', 1: 'Advanced' }[jlpt])),
          unlocked ? null : h('span.tiny.muted', 'Recommended later')),
        deckRow('Words', wv, 'w', JT.state.settings.newWords || 10),
        deckRow('Kanji', kv, 'j', JT.state.settings.newKanji || 5)));
    }
    pg.appendChild(grid);

    pg.appendChild(h('h2', 'Practice by type'));
    pg.appendChild(h('div.row', ['k', 'w', 'j', 'g'].map(t => h('button.btn', { type: 'button', onclick: () => practiceWeak(t + ':') }, 'Weakest ' + TYPE_NAMES[t].toLowerCase()))));
    return pg;
  }

  JT.Review = { startReview, startDue, learnNew, practiceWeak, page, itemChip };
})();
