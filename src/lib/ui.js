/* DOM helpers and shared UI components. */
(function () {
  const JT = (window.JT = window.JT || {});

  function h(sel, attrs, ...kids) {
    const m = sel.match(/^([a-z0-9]+)?((?:[.#][\w-]+)*)$/i);
    const el = document.createElement((m && m[1]) || 'div');
    for (const part of ((m && m[2]) || '').match(/[.#][\w-]+/g) || []) {
      if (part[0] === '.') el.classList.add(part.slice(1)); else el.id = part.slice(1);
    }
    if (attrs != null && (typeof attrs !== 'object' || attrs instanceof Node || Array.isArray(attrs))) { kids.unshift(attrs); attrs = null; }
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v == null || v === false) continue;
        if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
        else if (k === 'html') el.innerHTML = v;
        else if (k === 'class') el.className = (el.className + ' ' + v).trim();
        else if (k === 'style' && typeof v === 'object') {
          Object.assign(el.style, v);
          // pixel font sizes follow the Text size setting, like the stylesheet's
          if (typeof v.fontSize === 'string' && /^\d+(\.\d+)?px$/.test(v.fontSize)) el.style.fontSize = 'calc(' + v.fontSize + ' * var(--ts))';
        }
        else if (k === 'value' || k === 'checked' || k === 'disabled' || k === 'selected') el[k] = v;
        else el.setAttribute(k, v === true ? '' : v);
      }
    }
    append(el, kids);
    return el;
  }
  function append(el, kids) {
    for (const k of kids) {
      if (k == null || k === false) continue;
      if (Array.isArray(k)) append(el, k);
      else if (k instanceof Node) el.appendChild(k);
      else el.appendChild(document.createTextNode(String(k)));
    }
    return el;
  }
  const clear = el => { while (el.firstChild) el.removeChild(el.firstChild); return el; };

  const svg = (body, fill) =>
    `<svg viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="${fill ? 'none' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
  const ICONS = {
    home: svg('<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>'),
    course: svg('<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/>'),
    review: svg('<path d="M4 4v6h6M20 20v-6h-6"/><path d="M5.6 15a7 7 0 0 0 12.3 2.3M18.4 9A7 7 0 0 0 6.1 6.7"/>'),
    chat: svg('<path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.4A8 8 0 1 1 21 12z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/>'),
    book: svg('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 21V5"/><path d="M9 7h6"/>'),
    search: svg('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'),
    layers: svg('<path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5"/>'),
    chart: svg('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    gear: svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'),
    speaker: svg('<path d="M11 5L6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>'),
    mic: svg('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>'),
    close: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
    play: svg('<path d="M7 5l12 7-12 7z"/>', true),
    check: svg('<path d="M5 12l5 5 9-10"/>'),
    lock: svg('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
    pencil: svg('<path d="M4 20h4L19 9l-4-4L4 16z"/>'),
    undo: svg('<path d="M9 14L4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>'),
    star: svg('<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>', true),
    flag: svg('<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>'),
    arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    eye: svg('<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
    plus: svg('<path d="M12 5v14M5 12h14"/>'),
    bolt: svg('<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>', true),
    fire: svg('<path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-4 5-4 7-1-1-2-2-2-4-2 2-3 5-3 9 0 4 3 7 7 7z"/>', true),
    read: svg('<path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2zM22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z"/>'),
    coffee: svg('<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><path d="M6 1v3M10 1v3M14 1v3"/>')
  };
  const icon = (name, cls) => { const s = h('span' + (cls ? '.' + cls : ''), { html: ICONS[name] || '' }); s.style.display = 'inline-flex'; return s; };

  // ---------- misc helpers ----------
  const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sample = (arr, n) => shuffle(arr).slice(0, n);
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const uniqBy = (arr, f) => { const s = new Set(); return arr.filter(x => { const k = f(x); if (s.has(k)) return false; s.add(k); return true; }); };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  function timeUntil(t) {
    const d = t - Date.now();
    if (d <= 0) return 'now';
    const m = Math.round(d / 60000);
    if (m < 60) return `in ${m} min`;
    const hrs = Math.round(m / 60);
    if (hrs < 36) return `in ${hrs} h`;
    return `in ${Math.round(hrs / 24)} days`;
  }

  function showRomaji(level) {
    const r = JT.state.settings.romaji;
    if (r === 'always') return true;
    if (r === 'never') return false;
    return level != null && level <= 1;
  }

  // Round initial-letter avatar with a stable color per name.
  const AVATAR_COLORS = ['#c8402f', '#2e4a7d', '#2c8a57', '#8a5cc7', '#c58b1a', '#3c6e9f', '#a0522d', '#1f7a7a'];
  function avatar(name, size = 40) {
    const n = String(name || '?').trim();
    let hsh = 0;
    for (const c of n) hsh = (hsh * 31 + c.codePointAt(0)) >>> 0;
    const letter = [...n][0] ? [...n][0].toUpperCase() : '?';
    return h('span.avatar-letter', {
      style: { width: size + 'px', height: size + 'px', fontSize: Math.round(size * 0.45) + 'px', background: AVATAR_COLORS[hsh % AVATAR_COLORS.length] }
    }, letter);
  }

  // ---------- audio buttons ----------
  function sayBtn(markup, opts = {}) {
    const b = h('button.say', { title: opts.slow ? 'Play slowly' : 'Play audio', type: 'button', html: opts.slow ? '🐢' : ICONS.speaker });
    if (opts.slow) b.classList.add('slow');
    if (!JT.Audio.available) b.classList.add('nv');
    b.addEventListener('click', e => { e.stopPropagation(); JT.Audio.speak(markup, { btn: b, slow: !!opts.slow }); });
    return b;
  }

  function recBtn(markup) {
    const b = h('button.btn.sm.rec', { type: 'button', title: 'Record yourself, then compare with the model' }, icon('mic'), 'Record & compare');
    b.addEventListener('click', async e => {
      e.stopPropagation();
      if (!JT.Rec.active) {
        try { await JT.Rec.start(); b.classList.add('on'); b.lastChild.textContent = 'Stop'; }
        catch (err) { toast('Microphone not available: ' + err.message); }
      } else {
        const url = await JT.Rec.stop();
        b.classList.remove('on');
        b.lastChild.textContent = 'Record & compare';
        if (url) {
          toast('Playing your recording…');
          await new Promise(r => { const a = new Audio(url); a.onended = a.onerror = r; a.play().catch(r); });
          await JT.Audio.speak(markup, { silent: true });
        }
      }
    });
    return b;
  }

  // A Japanese line: audio button + furigana text + optional romaji + English.
  function jpBlock(markup, opts = {}) {
    const body = h('div.body');
    const jp = JT.T.el(markup, { level: opts.level, size: opts.size, furigana: opts.furigana });
    body.appendChild(h('div', jp));
    const roma = opts.romaji === undefined ? showRomaji(opts.level) : opts.romaji;
    if (roma) body.appendChild(h('div.romaji', JT.T.romaji(markup)));
    if (opts.en) {
      const en = h('div.en', opts.en);
      if (opts.hideEn) { en.classList.add('reveal'); en.title = 'Click to reveal'; en.onclick = () => en.classList.add('shown'); }
      body.appendChild(en);
    }
    const line = h('div.jpline' + (opts.cls ? '.' + opts.cls : ''));
    if (opts.audio !== false) {
      const col = h('div.stack', { style: { gap: '6px' } }, sayBtn(markup));
      if (opts.slow) col.appendChild(sayBtn(markup, { slow: true }));
      line.appendChild(col);
    }
    line.appendChild(body);
    return line;
  }

  // ---------- feedback widgets ----------
  function toast(msg, ms = 3800) {
    const t = h('div.toast', msg);
    document.getElementById('toast-root').appendChild(t);
    setTimeout(() => t.remove(), ms);
  }

  function modal(content, opts = {}) {
    const root = document.getElementById('modal-root');
    const box = h('div.modal' + (opts.wide ? '.wide' : ''), content);
    const back = h('div.modal-back', box);
    const close = () => { back.remove(); document.removeEventListener('keydown', onKey); opts.onClose && opts.onClose(); };
    const onKey = e => { if (e.key === 'Escape' && !opts.sticky) close(); };
    back.addEventListener('mousedown', e => { if (e.target === back && !opts.sticky) close(); });
    document.addEventListener('keydown', onKey);
    root.appendChild(back);
    return { close, el: box };
  }

  // Tabi (旅, "journey") the tanuki, the learner's travel companion on the road to Japanese.
  // opts.size: height in px; opts.say: [Japanese markup (or an array of lines), English] shown in a speech bubble.
  function mascot(opts = {}) {
    const img = h('img.mascot', { src: 'img/tabi.webp', alt: 'Tabi the tanuki', draggable: 'false', style: { height: (opts.size || 140) + 'px' } });
    if (!opts.say) return img;
    const [jp, en] = opts.say;
    const lines = (Array.isArray(jp) ? jp : [jp]).map(l => JT.T.el(l, { furigana: 'always', tag: 'div' }));
    return h('div.mascot-say', img, h('div.say-bubble', lines, en ? h('div.small.muted', en) : null));
  }

  function confirmBox(title, msg, okLabel = 'OK', cancelLabel = 'Cancel') {
    return new Promise(resolve => {
      let m;
      // answer first: closing the dialog counts as "cancel", which must not win over the button pressed
      const done = v => { resolve(v); m.close(); };
      m = modal([
        h('h2', title), h('p.muted', msg),
        h('div.row', { style: { justifyContent: 'flex-end', marginTop: '18px' } },
          h('button.btn', { onclick: () => done(false) }, cancelLabel),
          h('button.btn.primary', { onclick: () => done(true) }, okLabel))
      ], { onClose: () => resolve(false) });
    });
  }

  function ring(pct, size = 110, label = '', color = 'var(--accent)', width = 10) {
    const r = (size - width) / 2, c = 2 * Math.PI * r;
    const el = h('div.ring', { style: { width: size + 'px', height: size + 'px' } });
    el.innerHTML = `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--surface2)" stroke-width="${width}"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round"
      stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - clamp(pct, 0, 1))}" style="transition: stroke-dashoffset .6s"/></svg>`;
    el.appendChild(h('div.ring-label', { html: label }));
    return el;
  }

  function stars(n, of = 3) {
    const s = h('span.stars');
    for (let i = 0; i < of; i++) s.appendChild(h('span' + (i < n ? '' : '.off'), '★'));
    return s;
  }

  function confetti(n = 70) {
    const colors = ['#c8402f', '#2e4a7d', '#c58b1a', '#2c8a57', '#e48b78', '#7f9ee0'];
    for (let i = 0; i < n; i++) {
      const c = h('div.confetti');
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = pick(colors);
      c.style.animationDuration = 1.6 + Math.random() * 1.6 + 's';
      c.style.animationDelay = Math.random() * 0.4 + 's';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4000);
    }
  }

  function xpPop(n, anchor) {
    const r = anchor ? anchor.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0 };
    const p = h('div.xp-pop', `+${n} XP`);
    p.style.left = r.left + r.width / 2 - 30 + 'px';
    p.style.top = r.top - 10 + 'px';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1000);
  }

  // ---------- stroke order + tracing ----------
  function strokeBox(ch, opts = {}) {
    const size = opts.size || 220;
    const paths = (JT.STROKES && JT.STROKES[ch]) || null;
    const wrap = h('div.trace');
    const box = h('div.trace-box', { style: { width: size + 'px', height: size + 'px' } });
    const NS = 'http://www.w3.org/2000/svg';
    const mk = (cls) => { const s = document.createElementNS(NS, 'svg'); s.setAttribute('viewBox', '0 0 109 109'); s.setAttribute('width', size); s.setAttribute('height', size); s.setAttribute('class', cls); return s; };
    const guide = mk('guide');
    guide.innerHTML = '<line x1="54.5" y1="0" x2="54.5" y2="109"/><line x1="0" y1="54.5" x2="109" y2="54.5"/>';
    box.appendChild(guide);
    const ghost = mk('ghost'), anim = mk('anim'), nums = mk('nums');
    if (paths) {
      for (const d of paths) {
        const g = document.createElementNS(NS, 'path'); g.setAttribute('d', d); g.setAttribute('stroke-width', '3.2'); ghost.appendChild(g);
        const a = document.createElementNS(NS, 'path'); a.setAttribute('d', d); a.setAttribute('stroke-width', '3.6'); a.style.opacity = '0'; anim.appendChild(a);
      }
      paths.forEach((d, i) => {
        const m = d.match(/^M\s*([\d.]+)[ ,]+([\d.]+)/);
        if (!m) return;
        const t = document.createElementNS(NS, 'text');
        t.setAttribute('x', Math.max(2, +m[1] - 5)); t.setAttribute('y', Math.max(8, +m[2] - 2)); t.textContent = i + 1;
        nums.appendChild(t);
      });
    } else {
      ghost.innerHTML = `<text x="54.5" y="88" text-anchor="middle" font-size="86" font-family="Yu Gothic, Meiryo, sans-serif" fill="var(--surface3)">${JT.T.esc(ch)}</text>`;
    }
    box.append(ghost, anim, nums);
    const canvas = h('canvas');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr; canvas.height = size * dpr;
    canvas.style.width = size + 'px'; canvas.style.height = size + 'px';
    box.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.lineWidth = Math.max(5, size / 26);
    let drawing = false, last = null;
    const pos = e => { const r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    canvas.addEventListener('pointerdown', e => {
      drawing = true; last = pos(e); canvas.setPointerCapture(e.pointerId);
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#222';
      ctx.beginPath(); ctx.arc(last[0], last[1], ctx.lineWidth / 2.2, 0, Math.PI * 2); ctx.fillStyle = ctx.strokeStyle; ctx.fill();
    });
    canvas.addEventListener('pointermove', e => {
      if (!drawing) return;
      const p = pos(e);
      ctx.beginPath(); ctx.moveTo(last[0], last[1]); ctx.lineTo(p[0], p[1]); ctx.stroke();
      last = p;
    });
    const end = () => { drawing = false; };
    canvas.addEventListener('pointerup', end);
    canvas.addEventListener('pointercancel', end);

    let timers = [];
    function play() {
      timers.forEach(clearTimeout); timers = [];
      const ps = [...anim.querySelectorAll('path')];
      let delay = 0;
      for (const p of ps) {
        const len = p.getTotalLength ? p.getTotalLength() : 100;
        p.style.transition = 'none';
        p.style.strokeDasharray = len;
        p.style.strokeDashoffset = len;
        p.style.opacity = '1';
        const dur = Math.max(0.25, len / 110);
        timers.push(setTimeout(() => { p.style.transition = `stroke-dashoffset ${dur}s linear`; p.style.strokeDashoffset = 0; }, delay * 1000 + 30));
        delay += dur + 0.12;
      }
    }
    const clearInk = () => ctx.clearRect(0, 0, size, size);
    const controls = h('div.row', { style: { justifyContent: 'center', gap: '6px' } });
    if (paths) controls.appendChild(h('button.btn.sm', { type: 'button', onclick: play }, icon('play'), 'Strokes'));
    const ghostBtn = h('button.btn.sm', { type: 'button', onclick: () => { const hidden = ghost.style.opacity === '0'; ghost.style.opacity = hidden ? '1' : '0'; nums.style.opacity = hidden ? '1' : '0'; ghostBtn.lastChild.textContent = hidden ? 'Hide guide' : 'Show guide'; } }, icon('eye'), 'Hide guide');
    controls.append(ghostBtn, h('button.btn.sm', { type: 'button', onclick: clearInk }, icon('undo'), 'Clear'));
    wrap.append(box, controls);
    if (paths) wrap.appendChild(h('div.tiny.muted', `${paths.length} stroke${paths.length > 1 ? 's' : ''} · trace with your ${JT.platform && JT.platform.touch ? 'finger' : 'mouse or pen'}`));
    if (opts.autoplay !== false && paths) setTimeout(play, 300);
    return wrap;
  }

  JT.ui = {
    h, append, clear, icon, ICONS, shuffle, sample, pick, uniqBy, clamp, timeUntil, showRomaji, avatar,
    sayBtn, recBtn, jpBlock, toast, modal, confirmBox, ring, stars, confetti, xpPop, strokeBox, mascot
  };
})();
