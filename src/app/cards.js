/* Presentation cards used by lessons and the library (kana, words, kanji, grammar, dialogues, readings). */
(function () {
  const JT = (window.JT = window.JT || {});
  const { h, icon, sayBtn, recBtn, jpBlock, strokeBox, showRomaji } = JT.ui;
  const { T, R, Kana } = JT;

  const AVATARS = {
    you: '🙂', me: '🙂', tanaka: '👨‍💼', yui: '👩', ken: '👦', emma: '👱‍♀️', sato: '🧑‍💼', kim: '🧑', haruto: '🧑‍🎓',
    clerk: '🧑‍💼', staff: '🧑‍💼', waiter: '🧑‍🍳', doctor: '🧑‍⚕️', host: '👩‍🦳', 'mom (host)': '👩‍🦳', neighbor: '👵', man: '👨', woman: '👩',
    monk: '🧘', agent: '🧑‍💼', boss: '👔', teacher: '👩‍🏫', driver: '🚕', officer: '👮', friend: '🧑', yamada: '👨', suzuki: '👩‍💼',
    interviewer: '👔', manager: '👔', receptionist: '💁', pharmacist: '🧑‍⚕️', mika: '👧', 'mr. kato': '👴', kato: '👴', mori: '👨‍🏫'
  };
  const FALLBACK = ['🧑', '👩', '👨', '🧑‍🦱', '👩‍🦰', '🧔'];
  function avatarFor(name) {
    const k = String(name || '').toLowerCase();
    if (AVATARS[k]) return AVATARS[k];
    let s = 0;
    for (const c of k) s += c.charCodeAt(0);
    return FALLBACK[s % FALLBACK.length];
  }
  const isMe = (name, me) => /^(you|me)$/i.test(name) || (me && name === me);

  const C = {};

  C.intro = function (L) {
    const lv = L.lv;
    const card = h('div.card.learn-card', { style: { textAlign: 'left' } },
      h('div.row', { style: { gap: '16px', alignItems: 'center' } },
        h('div.lesson-ico', { style: { width: '64px', height: '64px', fontSize: '34px' } }, L.icon || '📘'),
        h('div', h('div.muted.small', `${lv.title} · Lesson ${L.index + 1}`), h('div', { style: { fontSize: '26px', fontWeight: 750 } }, L.title),
          L.sub ? h('div.muted', L.sub) : null)),
      h('h3', { style: { marginTop: '22px' } }, 'By the end of this lesson you can:'),
      h('ul.goal-list', (L.goals || []).map(g => h('li', g))));
    const bits = [];
    if (L.kanaList.length) bits.push(`${L.kanaList.length} kana`);
    if (L.words.length) bits.push(`${L.words.length} words & phrases`);
    if (L.kanjiList.length) bits.push(`${L.kanjiList.length} kanji`);
    if ((L.grammar || []).length) bits.push(`${L.grammar.length} grammar point${L.grammar.length > 1 ? 's' : ''}`);
    if (L.dialog) bits.push('a dialogue');
    if (L.reading) bits.push('a reading');
    card.appendChild(h('div.row', { style: { marginTop: '16px', gap: '6px' } }, bits.map(b => h('span.pill', b))));
    return card;
  };

  C.kana = function (c) {
    const k = R.kana.get(c) || { c, r: Kana.toRomaji(c) };
    const left = h('div.stack', { style: { alignItems: 'center' } },
      h('div.huge-char', { html: T.kanaHtml(c) }),
      h('div', { style: { fontSize: '30px', fontWeight: 800, color: 'var(--accent)' } }, k.r),
      h('div.row', { style: { justifyContent: 'center' } }, sayBtn(c), sayBtn(c, { slow: true })));
    const right = h('div.stack', { style: { flex: 1, minWidth: '240px' } });
    if (k.mn) right.appendChild(h('div.mnemonic', h('b', 'Memory hook: '), k.mn));
    if (k.ex) {
      const [m, en, emo] = k.ex.split('|');
      right.appendChild(h('div.card.flat', { style: { padding: '12px 16px' } },
        h('div.muted.tiny', 'Example word'),
        h('div.row', h('span', { style: { fontSize: '34px' } }, emo || ''), jpBlock(m, { en, level: 0, romaji: true }))));
    }
    right.appendChild(strokeBox(c, { size: 190 }));
    return h('div.card', { style: { padding: '24px' } },
      h('div.step-label', k.script === 'kata' ? 'New katakana' : 'New hiragana'),
      h('div.row', { style: { gap: '30px', alignItems: 'flex-start' } }, left, right));
  };

  C.kanaRow = function (chars, title) {
    const row = h('div.kana-row');
    for (const c of chars) {
      const k = R.kana.get(c) || { c, r: Kana.toRomaji(c) };
      const t = h('div.kana-tile', h('div.k', { html: T.kanaHtml(c) }), h('div.r', k.r), k.mn ? h('div.m', k.mn) : null);
      t.onclick = () => { JT.Audio.speak(c); };
      t.ondblclick = () => JT.ui.modal(C.kanaDetail(c), { wide: true });
      row.appendChild(t);
    }
    return h('div.card', h('div.step-label', title || 'New kana'),
      h('p.muted.small', 'Click a kana to hear it, double-click for stroke order. Say each one out loud!'), row);
  };

  C.kanaDetail = function (c) {
    const node = C.kana(c);
    node.classList.remove('card');
    return node;
  };

  C.word = function (w, level, label) {
    const isPhrase = T.parse(w.m).length > 1 || /[。？！]/.test(w.m);
    const big = h('div.big-jp', T.el(w.m, { furigana: 'always', level }));
    const card = h('div.card.learn-card',
      h('div.step-label', label || (isPhrase ? 'New phrase' : 'New word')),
      h('div.row', { style: { justifyContent: 'center', gap: '14px' } }, sayBtn(w.m), big, sayBtn(w.m, { slow: true })));
    if (showRomaji(level) || level <= 2) card.appendChild(h('div.romaji', T.romaji(w.m)));
    card.appendChild(h('div.en', w.en));
    if (w.note) card.appendChild(h('div.note', '💡 ' + w.note));
    const ks = [...new Set([...T.surface(w.m)].filter(c => R.kanji.has(c)))];
    if (ks.length) {
      const chips = h('div.row', { style: { justifyContent: 'center', marginTop: '14px', gap: '6px' } },
        ks.map(c => {
          const k = R.kanji.get(c);
          return h('button.chip', { type: 'button', onclick: () => JT.ui.modal(C.kanjiDetail(c), { wide: true }) },
            h('span.jp', { style: { fontSize: '16px', marginRight: '6px' } }, c), k.meaning.split(', ')[0]);
        }));
      card.appendChild(chips);
    }
    card.appendChild(h('div.learn-actions', recBtn(w.m)));
    return card;
  };

  C.kanji = function (c, label) {
    const k = R.kanji.get(c);
    if (!k) return h('div.card', 'Unknown kanji ' + c);
    const info = h('div.stack', { style: { flex: 1, minWidth: '260px', gap: '10px' } },
      h('div', { style: { fontSize: '24px', fontWeight: 750 } }, k.meaning),
      h('dl.kv',
        h('dt', 'On reading'), h('dd.jp', k.on || '—'),
        h('dt', 'Kun reading'), h('dd.jp', k.kun || '—'),
        h('dt', 'Strokes'), h('dd', k.strokes),
        h('dt', 'Level'), h('dd', h('span.pill.blue', 'JLPT N' + k.jlpt))));
    if (k.note) info.appendChild(h('div.mnemonic', h('b', 'Memory hook: '), k.note));
    if (k.ex.length) {
      const exs = h('div.stack', { style: { gap: '6px' } }, h('div.muted.tiny', 'Words using this kanji'));
      for (const [m, en] of k.ex) exs.appendChild(jpBlock(m, { en, level: 5, romaji: false, size: 18 }));
      info.appendChild(exs);
    }
    return h('div.card', { style: { padding: '24px' } },
      h('div.step-label', label || 'New kanji'),
      h('div.row', { style: { gap: '28px', alignItems: 'flex-start' } }, strokeBox(c, { size: 210 }), info));
  };

  C.kanjiDetail = function (c) {
    const n = C.kanji(c, 'Kanji');
    n.classList.remove('card');
    return n;
  };

  C.grammar = function (g, level) {
    const card = h('div.card.grammar-card', { style: { padding: '24px 26px' } },
      h('div.step-label', 'Grammar'),
      h('div.pattern', T.el(g.t, { furigana: 'always', keepSpaces: true })));
    if (g.m) card.appendChild(h('div', { style: { fontSize: '18px', fontWeight: 650, marginBottom: '8px' } }, g.m));
    if (g.f) card.appendChild(h('div.small', { style: { marginBottom: '10px' } }, h('span.muted', 'Form: '), h('span.jp', g.f)));
    if (g.x) card.appendChild(h('div.explain', { html: g.x }));
    const ex = h('div.examples');
    for (const [m, en] of g.e || []) ex.appendChild(h('div.example', jpBlock(m, { en, level, size: 19 })));
    card.appendChild(ex);
    return card;
  };

  C.dialog = function (d, level) {
    const opts = { en: true, romaji: showRomaji(level) };
    const linesBox = h('div.dialog-lines');
    const lineEls = [];
    const draw = () => {
      JT.ui.clear(linesBox);
      lineEls.length = 0;
      for (const [who, m, en] of d.lines) {
        const me = isMe(who, d.me);
        const bubble = h('div.bubble', h('div.who', who === 'You' ? 'You' : who),
          T.el(m, { level }),
          opts.romaji ? h('div.romaji', T.romaji(m)) : null,
          opts.en ? h('div.en.small', en) : null);
        bubble.style.cursor = 'pointer';
        bubble.title = 'Click to hear this line';
        bubble.onclick = () => JT.Audio.speak(m);
        const el = h('div.dline' + (me ? '.me' : ''), h('div.avatar', avatarFor(who)), bubble);
        lineEls.push(el);
        linesBox.appendChild(el);
      }
    };
    draw();
    let playing = false;
    const playBtn = h('button.btn.blue', { type: 'button' }, icon('play'), 'Play dialogue');
    playBtn.onclick = async () => {
      if (playing) { playing = false; JT.Audio.stop(); return; }
      if (!JT.Audio.available) { JT.ui.toast('Install a Japanese voice to hear dialogues — see Settings → Audio.'); return; }
      playing = true;
      playBtn.lastChild.textContent = 'Stop';
      for (let i = 0; i < d.lines.length && playing; i++) {
        lineEls.forEach(e => e.classList.remove('active'));
        lineEls[i].classList.add('active');
        // centre the line being spoken — 'nearest' left it hidden behind the fixed footer bar
        lineEls[i].scrollIntoView({ block: 'center', behavior: 'smooth' });
        await JT.Audio.speak(d.lines[i][1]);
        await new Promise(r => setTimeout(r, 350));
      }
      lineEls.forEach(e => e.classList.remove('active'));
      playing = false;
      playBtn.lastChild.textContent = 'Play dialogue';
    };
    const tog = (label, key) => {
      const b = h('button.btn.sm' + (opts[key] ? '.blue' : ''), { type: 'button' }, label);
      b.onclick = () => { opts[key] = !opts[key]; b.classList.toggle('blue', opts[key]); draw(); };
      return b;
    };
    return h('div.card', { style: { padding: '22px 24px' } },
      h('div.step-label', 'Dialogue'),
      h('div.row.between', { style: { marginBottom: '16px' } },
        h('div', { style: { fontSize: '20px', fontWeight: 700 } }, d.title || 'Conversation'),
        h('div.row', { style: { gap: '6px' } }, playBtn, tog('English', 'en'), tog('Romaji', 'romaji'))),
      linesBox,
      h('p.tiny.muted', { style: { marginTop: '14px' } }, 'Tip: shadow it — play a line, pause, and repeat it out loud with the same rhythm.'));
  };

  C.reading = function (rd, level) {
    const showEn = { on: false };
    const body = h('div.stack', { style: { gap: '14px' } });
    const draw = () => {
      JT.ui.clear(body);
      rd.text.forEach((p, i) => {
        const para = h('div.jpline', sayBtn(p), h('div.body', T.el(p, { level, cls: 'passage-p' }),
          showEn.on && rd.en && rd.en[i] ? h('div.en.small', { style: { marginTop: '4px' } }, rd.en[i]) : null));
        para.querySelector('.jpt').style.fontSize = 'calc(19px * var(--ts))';
        body.appendChild(para);
      });
    };
    draw();
    const enBtn = rd.en ? h('button.btn.sm', { type: 'button', onclick: () => { showEn.on = !showEn.on; enBtn.classList.toggle('blue', showEn.on); draw(); } }, 'Translation') : null;
    return h('div.card', { style: { padding: '24px 28px' } },
      h('div.step-label', 'Reading'),
      h('div.row.between', { style: { marginBottom: '14px' } }, h('div', { style: { fontSize: '20px', fontWeight: 700 } }, rd.title), enBtn),
      body,
      h('p.tiny.muted', { style: { marginTop: '14px' } }, 'Read it once for the gist, then again slowly. Hover over kanji to see readings you have hidden.'));
  };

  C.note = function (n) {
    return h('div.card.culture', { style: { padding: '22px 26px' } },
      h('div.step-label', '🗾 Real-world Japan'),
      h('div', { style: { fontSize: '20px', fontWeight: 700, marginBottom: '10px' } }, n.t),
      h('div.explain', { style: { fontSize: '15.5px', lineHeight: 1.7 }, html: n.x }));
  };

  C.avatarFor = avatarFor;
  C.isMe = isMe;
  JT.Cards = C;
})();
