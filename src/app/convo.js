/* Conversation role-plays: a chat with an NPC where you choose (or type) your replies.
 *
 * Script steps:
 *   ['n', jp, en]              NPC says a line
 *   ['u', [options]]           your turn; option = [jp, en, score 0|1|2, feedback, npcReply 'jp|en', goto]
 *   ['label', name]            branch target
 *   ['go', name]               jump
 *   ['end', jp, en]            final NPC line
 * Score 2 = natural, 1 = understandable but not ideal (continues with a tip), 0 = wrong (try again).
 */
(function () {
  const JT = (window.JT = window.JT || {});
  const { h, icon, shuffle } = JT.ui;
  const { T, R, Kana } = JT;

  function start(c) {
    const main = document.getElementById('main');
    JT.ui.clear(main);
    const level = c.level != null ? c.level : 0;
    const set = { romaji: JT.ui.showRomaji(level), en: level <= 2, mode: 'choose' };
    let pc = 0, turns = 0, points = 0, maxPoints = 0;
    const used = [];
    let attemptsThisTurn = 0;
    let alive = true;

    const chatInner = h('div.inner');
    const chat = h('div.chat', chatInner);
    const optsInner = h('div.inner');
    const optsBox = h('div.convo-opts', optsInner);
    const tog = (label, key) => {
      const b = h('button.btn.sm' + (set[key] ? '.blue' : ''), { type: 'button' }, label);
      b.onclick = () => { set[key] = !set[key]; b.classList.toggle('blue', set[key]); chat.querySelectorAll('.romaji').forEach(e => e.classList.toggle('hidden', !set.romaji)); chat.querySelectorAll('.bubble .en').forEach(e => e.classList.toggle('hidden', !set.en)); };
      return b;
    };
    const modeSeg = h('div.seg',
      ...[['choose', 'Choose'], ['type', 'Type'], ['listen', 'Listen']].map(([m, label]) => {
        const b = h('button' + (set.mode === m ? '.on' : ''), { type: 'button', title: { choose: 'Pick your reply from options', type: 'Type your reply in romaji', listen: 'Hide the NPC text — understand by ear' }[m] }, label);
        b.onclick = () => {
          if (m === 'listen' && !JT.Audio.available) { JT.ui.toast('Listening mode needs a Japanese voice — see Settings → Audio.'); return; }
          set.mode = m; modeSeg.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
          if (pendingOptions) renderOptions(pendingOptions);
        };
        return b;
      }));
    const exit = h('button.btn.icon.ghost', { type: 'button', title: 'Exit' }, icon('close'));
    exit.onclick = () => { alive = false; JT.Audio.stop(); JT.go('talk'); };
    const head = h('div.convo-head', exit,
      h('div.scene-emoji', { style: { width: '44px', height: '44px', fontSize: '24px' } }, c.icon || '💬'),
      h('div.grow', h('div', { style: { fontWeight: 750 } }, c.title), h('div.convo-scene', c.scene)),
      modeSeg, tog('Romaji', 'romaji'), tog('English', 'en'));
    const wrap = h('div.convo', { style: { height: '100%' } }, head, chat, optsBox);
    main.appendChild(wrap);
    main.scrollTop = 0;

    const scrollDown = () => setTimeout(() => { chat.scrollTop = chat.scrollHeight; }, 30);
    const sys = (text, cls = 'sys') => { chatInner.appendChild(h('div.' + cls, text)); scrollDown(); };

    function bubble(who, m, en, me) {
      const b = h('div.bubble', h('div.who', me ? 'You' : who),
        T.el(m, { level }),
        h('div.romaji' + (set.romaji ? '' : '.hidden'), T.romaji(m)),
        en ? h('div.en.small' + (set.en ? '' : '.hidden'), en) : null);
      if (!me && set.mode === 'listen') {
        b.classList.add('reveal');
        b.title = 'Click to reveal';
        b.onclick = () => { b.classList.add('shown'); };
      } else {
        b.style.cursor = 'pointer';
        b.onclick = () => JT.Audio.speak(m);
      }
      const row = h('div.dline' + (me ? '.me' : ''), h('div.avatar', me ? '🙂' : c.avatar || JT.Cards.avatarFor(c.npc)), b);
      chatInner.appendChild(row);
      scrollDown();
      return row;
    }

    async function npcSay(m, en) {
      const typing = h('div.dline', h('div.avatar', c.avatar || JT.Cards.avatarFor(c.npc)), h('div.bubble', h('span.typing', h('i'), h('i'), h('i'))));
      chatInner.appendChild(typing);
      scrollDown();
      await new Promise(r => setTimeout(r, JT.fastConvo ? 0 : 450 + Math.min(900, T.surface(m).length * 25)));
      typing.remove();
      if (!alive) return;
      bubble(c.npc, m, en, false);
      await JT.Audio.speak(m, { silent: true });
    }

    function findLabel(name) {
      return c.script.findIndex(s => s[0] === 'label' && s[1] === name);
    }

    let pendingOptions = null;
    async function run() {
      while (alive && pc < c.script.length) {
        const st = c.script[pc];
        if (st[0] === 'n') { await npcSay(st[1], st[2]); pc++; continue; }
        if (st[0] === 'label') { pc++; continue; }
        if (st[0] === 'go') { pc = findLabel(st[1]) + 1; continue; }
        if (st[0] === 'end') { if (st[1]) await npcSay(st[1], st[2]); finish(); return; }
        if (st[0] === 'u') {
          pendingOptions = st[1];
          attemptsThisTurn = 0;
          renderOptions(st[1]);
          return;   // resumes in choose()
        }
        pc++;
      }
      if (alive) finish();
    }

    function renderOptions(options) {
      JT.ui.clear(optsInner);
      if (set.mode === 'type') {
        const inp = h('input.type-input', { type: 'text', placeholder: 'Type your reply in romaji…', autocomplete: 'off', spellcheck: 'false' });
        inp.addEventListener('input', e => { if (!e.isComposing) { const v = Kana.romajiToKana(inp.value); if (v !== inp.value) inp.value = v; } });
        const go = () => {
          const val = Kana.romajiToKana(inp.value, { final: true });
          if (!val.trim()) return;
          let best = null, bestSim = 0;
          for (const o of options) {
            const s = Kana.similarity(val, T.reading(o[0]));
            if (s > bestSim) { bestSim = s; best = o; }
          }
          if (best && bestSim >= 0.72) choose(best, val);
          else {
            sys('Hmm, I couldn\'t match that to a natural reply. Try again, or switch to Choose.', 'fbmsg.ok');
            hintRow.classList.remove('hidden');
          }
        };
        inp.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
        const hintRow = h('div.small.muted.hidden', { style: { marginTop: '8px' } }, 'Ideas: ', options.filter(o => o[2] > 0).map(o => h('span.chip', { title: T.romaji(o[0]) }, o[1])));
        optsInner.append(h('div.small.muted', { style: { marginBottom: '8px' } }, 'Say it in Japanese — what do you want to reply?'),
          h('div.row', { style: { flexWrap: 'nowrap' } }, inp, h('button.btn.primary', { type: 'button', onclick: go }, 'Send')),
          h('div.row', { style: { marginTop: '8px' } }, h('button.btn.sm.ghost', { type: 'button', onclick: () => hintRow.classList.toggle('hidden') }, 'Show ideas (English)')), hintRow);
        setTimeout(() => inp.focus(), 50);
        return;
      }
      optsInner.appendChild(h('div.small.muted', { style: { marginBottom: '8px' } }, 'Your turn — choose a reply:'));
      for (const o of shuffle(options)) {
        const b = h('button.convo-opt', { type: 'button' },
          JT.ui.sayBtn(o[0]),
          h('div.grow', T.el(o[0], { level }), set.romaji ? h('div.romaji', T.romaji(o[0])) : null, set.en ? h('div.en.small', o[1]) : null));
        b.onclick = () => choose(o);
        optsInner.appendChild(b);
      }
    }

    async function choose(o, typed) {
      const [m, en, score, fb, reply, go] = o;
      JT.ui.clear(optsInner);
      bubble('You', typed && JT.Kana.phonetic(typed) !== JT.Kana.phonetic(T.reading(m)) ? m : m, en, true);
      if (attemptsThisTurn === 0) { turns++; maxPoints += 2; }
      attemptsThisTurn++;
      if (score === 0) {
        JT.Audio.sfx('bad');
        if (reply) { const [rj, re] = reply.split('|'); await npcSay(rj, re); }
        sys('✗ ' + (fb || 'That doesn\'t fit here. Try another reply.'), 'fbmsg.bad');
        renderOptions(pendingOptions);
        return;
      }
      if (attemptsThisTurn === 1) points += score;
      used.push(m);
      JT.Audio.sfx(score === 2 ? 'good' : 'tap');
      if (score === 2 && fb) sys('✓ ' + fb, 'fbmsg.good');
      if (score === 1) sys('△ ' + (fb || 'Understandable, but not the most natural choice.'), 'fbmsg.ok');
      if (reply) { const [rj, re] = reply.split('|'); await npcSay(rj, re); }
      pendingOptions = null;
      pc = go ? findLabel(go) + 1 : pc + 1;
      run();
    }

    function finish() {
      JT.ui.clear(optsInner);
      const score = maxPoints ? points / maxPoints : 1;
      const stars = score >= 0.9 ? 3 : score >= 0.65 ? 2 : 1;
      const prev = JT.state.convos[c.id] || {};
      JT.state.convos[c.id] = { best: Math.max(prev.best || 0, stars), plays: (prev.plays || 0) + 1, at: Date.now() };
      JT.Store.addXP(10 + stars * 5);
      JT.Audio.sfx('done');
      if (stars === 3) JT.ui.confetti(40);
      sys('— Conversation complete —');
      optsInner.appendChild(h('div.row.between',
        h('div', h('div', { style: { fontSize: '18px', fontWeight: 750 } }, 'Well done! ', JT.ui.stars(stars)),
          h('div.small.muted', `${Math.round(score * 100)}% natural replies on the first try · +${10 + stars * 5} XP`)),
        h('div.row',
          h('button.btn', { type: 'button', onclick: () => addPhrases() }, icon('plus'), 'Add my lines to reviews'),
          h('button.btn', { type: 'button', onclick: () => start(c) }, icon('undo'), 'Play again'),
          h('button.btn.primary', { type: 'button', onclick: () => JT.go('talk') }, 'More conversations'))));
    }

    function addPhrases() {
      let n = 0;
      for (const m of used) {
        const key = R.wordKeyOf(m);
        if (!R.words.has(key)) {
          const o = c.script.filter(s => s[0] === 'u').flatMap(s => s[1]).find(x => x[0] === m);
          R.words.set(key, { key, m, en: o ? o[1] : '', level, convo: c.id });
        }
        if (JT.SRS.add(key)) n++;
      }
      (JT.state.extraWords = JT.state.extraWords || {});
      for (const m of used) {
        const key = R.wordKeyOf(m);
        const w = R.words.get(key);
        if (w && w.convo) JT.state.extraWords[key] = { m: w.m, en: w.en, level };
      }
      JT.Store.save();
      JT.ui.toast(n ? `Added ${n} phrase${n > 1 ? 's' : ''} to your reviews.` : 'These phrases are already in your reviews.');
    }

    sys(c.goal ? '🎯 Goal: ' + c.goal : 'Role-play with ' + c.npc);
    run();
  }

  // ---------- hub page ----------
  function page() {
    const pg = h('div.page');
    pg.appendChild(h('div.page-head', h('div', h('h1', 'Conversations'), h('div.sub', 'Role-play real situations. Choose replies, type them, or train your ear in Listen mode.'))));
    const levels = JT.LEVELS.map(l => l.n);
    for (const n of levels) {
      const list = JT.CONVOS.filter(c => c.level === n);
      if (!list.length) continue;
      const lv = R.levelByN.get(n);
      const unlocked = R.levelUnlocked(n);
      pg.appendChild(h('h2', `${lv.title} `, h('span.pill.blue', lv.tag || '')));
      const grid = h('div.grid.gauto');
      for (const c of list) {
        const best = (JT.state.convos[c.id] || {}).best || 0;
        const card = h('div.card.click', h('div.scene-card', h('div.scene-emoji', c.icon || '💬'),
          h('div.grow', h('div', { style: { fontWeight: 700 } }, c.title), h('div.small.muted', c.scene),
            h('div', { style: { marginTop: '6px' } }, best ? JT.ui.stars(best) : h('span.tiny.muted', unlocked ? 'Not played yet' : '🔒 Recommended after earlier lessons')))));
        card.onclick = async () => {
          if (!unlocked && !(await JT.ui.confirmBox('This one is ahead of you', 'It uses Japanese from a later level. Try it anyway?', 'Try it'))) return;
          start(c);
        };
        grid.appendChild(card);
      }
      pg.appendChild(grid);
    }
    return pg;
  }

  JT.Convo = { start, page };
})();
