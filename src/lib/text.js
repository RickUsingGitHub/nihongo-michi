/* Japanese text markup used throughout the course content.
 *
 *   私[わたし] は 学生[がくせい] です。
 *
 * - Spaces separate words (they guide romaji, word tiles and optional beginner spacing; they are
 *   not shown in normal Japanese display).
 * - X[reading] puts furigana over the run of kanji/digits/latin letters right before the bracket.
 * - {base|reading} puts furigana over an explicit base (used when the reading can't be split).
 * - *...* marks the target grammar inside an example sentence (highlighted, and blanked in drills).
 */
(function () {
  const JT = (window.JT = window.JT || {});
  const K = JT.Kana;
  const BASECH = /[㐀-䶿一-鿿豈-﫿々〆ヶ0-9０-９A-Za-zＡ-Ｚａ-ｚ]/;
  const cache = new Map();

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function parse(markup) {
    markup = String(markup ?? '');
    if (cache.has(markup)) return cache.get(markup);
    const state = { tgt: false };
    const toks = markup.trim().split(/\s+/).filter(Boolean).map(t => parseToken(t, state)).filter(t => t.length);
    if (cache.size > 6000) cache.clear();
    cache.set(markup, toks);
    return toks;
  }

  function parseToken(tok, state) {
    const segs = [];
    let buf = '';
    const flush = () => { if (buf) segs.push({ b: buf, t: state.tgt }); buf = ''; };
    for (let i = 0; i < tok.length; i++) {
      const c = tok[i];
      if (c === '*') { flush(); state.tgt = !state.tgt; continue; }
      if (c === '{') {
        const bar = tok.indexOf('|', i), end = tok.indexOf('}', i);
        if (bar > i && end > bar) {
          flush();
          segs.push({ b: tok.slice(i + 1, bar), r: tok.slice(bar + 1, end), t: state.tgt });
          i = end;
          continue;
        }
      }
      if (c === '[') {
        const end = tok.indexOf(']', i);
        if (end > i && buf) {
          const r = tok.slice(i + 1, end);
          let k = buf.length;
          while (k > 0 && BASECH.test(buf[k - 1])) k--;
          if (k === buf.length) k = 0;
          if (k > 0) segs.push({ b: buf.slice(0, k), t: state.tgt });
          segs.push({ b: buf.slice(k), r, t: state.tgt });
          buf = '';
          i = end;
          continue;
        }
      }
      buf += c;
    }
    flush();
    return segs;
  }

  const segSurface = segs => segs.map(s => s.b).join('');
  const segReading = segs => segs.map(s => (s.r != null ? s.r : s.b)).join('');

  const surface = m => parse(m).map(segSurface).join('');
  const reading = (m, sep = '') => parse(m).map(segReading).join(sep);
  const words = m => parse(m).map(segSurface);
  const stripTargets = m => String(m).replace(/\*/g, '');

  const PARTICLE_END = /(では|には|とは|からは|までは|こんにちは|こんばんは|それでは|では|ちは)$/;
  function tokenRomaji(kana) {
    const mm = kana.match(/^(.*?)([。、？！?!.,「」『』…]*)$/);
    const core = mm[1], punct = mm[2];
    let r;
    if (core === 'は') r = 'wa';
    else if (core === 'へ') r = 'e';
    else if (core === 'を') r = 'o';
    else {
      r = K.toRomaji(core);
      if (PARTICLE_END.test(core)) r = r.replace(/ha$/, 'wa');
      r = r.replace(/wo/g, 'o');
    }
    return r + K.toRomaji(punct);
  }

  function romaji(m) {
    const toks = parse(m).map(segs => tokenRomaji(segReading(segs)));
    let r = toks.join(' ').replace(/\s+([.,?!~])/g, '$1').replace(/"\s+/g, '"');
    if (/[。？！?!]\s*$/.test(String(m))) r = r.replace(/^([^a-z]*)([a-z])/, (x, a, b) => a + b.toUpperCase());
    return r;
  }

  const cleanTts = s => s.replace(/[～〜*]/g, '').replace(/→/g, '、').replace(/[()（）/／]/g, ' ');

  function ttsText(m) {
    return cleanTts(surface(m)).trim();
  }

  // Kana-only version (each kanji word replaced by its course reading) — for engines without SSML.
  function ttsReading(m) {
    return cleanTts(reading(m)).trim();
  }

  // One word of markup split into its punctuation and the word itself; key is "surface|reading".
  const LEAD = /^[～〜。、？！?!.,「」『』…・()（）/／→]*/, TRAIL = /[～〜。、？！?!.,「」『』…・()（）/／→]*$/;
  function ttsToken(segs) {
    const surf = segSurface(segs), read = segReading(segs);
    const lead = surf.match(LEAD)[0], trail = surf.slice(lead.length).match(TRAIL)[0];
    const core = surf.slice(lead.length, surf.length - trail.length);
    if (!core) return null;
    const r = read.slice(lead.length, read.length - trail.length);
    return { key: core + '|' + r, surf: core, read: r, lead, trail };
  }

  // SSML that gives the voice the course reading of the words it would otherwise misread
  // (JT.TTS_FIX, from tools/tts-check.js): 音 on its own comes out as "on" instead of "oto".
  // Other words keep their kanji, which keeps their natural pitch accent. '' = plain text is fine.
  // all = give the reading for every word (used by the checks).
  function ttsSsml(m, all) {
    const fix = JT.TTS_FIX;
    if (!all && !(fix && fix.size)) return '';
    const xml = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]));
    let body = '', subs = 0;
    for (const segs of parse(m)) {
      const t = segs.some(s => s.r != null) && ttsToken(segs);
      if (t && (all || fix.has(t.key))) {
        body += xml(cleanTts(t.lead)) + `<sub alias="${xml(t.read)}">${xml(t.surf)}</sub>` + xml(cleanTts(t.trail));
        subs++;
      } else body += xml(cleanTts(segSurface(segs)));
    }
    body = body.trim();
    if (!subs || !body) return '';
    return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="ja-JP">${body}</speak>`;
  }

  function knownBase(b) {
    const ks = [...b].filter(K.isKanji);
    if (!ks.length) return false;
    return ks.every(c => JT.isKnownKanji && JT.isKnownKanji(c));
  }

  // opts: furigana ('always' | 'smart' | 'never'), spacing (bool), level (content level), noTargets
  function html(m, opts = {}) {
    const set = (JT.state && JT.state.settings) || {};
    const fur = opts.furigana || set.furigana || 'smart';
    let spacing = opts.spacing;
    if (spacing === undefined) {
      const sp = set.spacing || 'auto';
      spacing = sp === 'on' || (sp === 'auto' && opts.level != null && opts.level <= 1);
    }
    const toks = parse(m);
    const parts = toks.map(segs => {
      let inner = '';
      let open = false;
      for (const s of segs) {
        const want = s.t && !opts.noTargets;
        if (want && !open) { inner += '<span class="tgt">'; open = true; }
        if (!want && open) { inner += '</span>'; open = false; }
        if (s.r == null) inner += esc(s.b);
        else {
          const hide = fur === 'never' || (fur === 'smart' && knownBase(s.b));
          inner += `<ruby${hide ? ' class="nf"' : ''}>${esc(s.b)}<rt>${esc(s.r)}</rt></ruby>`;
        }
      }
      if (open) inner += '</span>';
      return inner;
    });
    return parts.join(opts.keepSpaces ? ' ' : spacing ? '<span class="gap"></span>' : '');
  }

  // Readable plain text with the original spaces (for mixed English/Japanese titles).
  const plain = m => parse(m).map(segSurface).join(' ');

  function el(m, opts = {}) {
    const span = document.createElement(opts.tag || 'span');
    span.className = 'jpt' + (opts.cls ? ' ' + opts.cls : '');
    span.innerHTML = html(m, opts);
    if (opts.size) span.style.fontSize = opts.size + 'px';
    return span;
  }

  // Splits an example marked with *target* into the parts around the target.
  function splitTarget(m) {
    const a = m.indexOf('*'), b = m.indexOf('*', a + 1);
    if (a < 0 || b < 0) return null;
    return { before: m.slice(0, a), target: m.slice(a + 1, b), after: m.slice(b + 1) };
  }

  // Raw markup tokens with target markers removed (keeps furigana brackets for display in tiles).
  function rawTokens(m) {
    return stripTargets(m).trim().split(/\s+/).filter(Boolean);
  }

  JT.T = { parse, surface, reading, words, romaji, ttsText, ttsReading, ttsSsml, ttsToken, html, el, esc, splitTarget, rawTokens, stripTargets, plain };
})();
