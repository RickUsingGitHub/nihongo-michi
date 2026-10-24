/* Kana utilities: script conversion, kana -> romaji (display) and romaji -> kana (typing). */
(function () {
  const JT = (window.JT = window.JT || {});

  const BASE = ('あa いi うu えe おo かka きki くku けke こko さsa しshi すsu せse そso たta ちchi つtsu てte とto ' +
    'なna にni ぬnu ねne のno はha ひhi ふfu へhe ほho まma みmi むmu めme もmo やya ゆyu よyo ' +
    'らra りri るru れre ろro わwa をwo んn がga ぎgi ぐgu げge ごgo ざza じji ずzu ぜze ぞzo ' +
    'だda ぢji づzu でde どdo ばba びbi ぶbu べbe ぼbo ぱpa ぴpi ぷpu ぺpe ぽpo ゔvu ' +
    'ぁa ぃi ぅu ぇe ぉo ゃya ゅyu ょyo ゎwa ゐwi ゑwe').split(' ');

  const K2R = {};
  for (const e of BASE) K2R[e[0]] = e.slice(1);
  const YOON = { き: 'ky', ぎ: 'gy', し: 'sh', じ: 'j', ち: 'ch', ぢ: 'j', に: 'ny', ひ: 'hy', び: 'by', ぴ: 'py', み: 'my', り: 'ry' };
  for (const [k, c] of Object.entries(YOON)) {
    K2R[k + 'ゃ'] = c + 'a'; K2R[k + 'ゅ'] = c + 'u'; K2R[k + 'ょ'] = c + 'o';
  }
  Object.assign(K2R, {
    ふぁ: 'fa', ふぃ: 'fi', ふぇ: 'fe', ふぉ: 'fo', ふゅ: 'fyu', てぃ: 'ti', でぃ: 'di', とぅ: 'tu', どぅ: 'du', でゅ: 'dyu',
    しぇ: 'she', ちぇ: 'che', じぇ: 'je', うぃ: 'wi', うぇ: 'we', うぉ: 'wo', ゔぁ: 'va', ゔぃ: 'vi', ゔぇ: 've', ゔぉ: 'vo',
    つぁ: 'tsa', いぇ: 'ye', くぁ: 'kwa', ぐぁ: 'gwa'
  });

  const PUNCT = { '。': '.', '、': ',', '？': '?', '！': '!', '「': '"', '」': '"', '『': '"', '』': '"', '・': ' ', '　': ' ', '～': '~', '〜': '~', '（': '(', '）': ')', '：': ':', '…': '...' };

  const R2K = {};
  for (const [k, r] of Object.entries(K2R)) {
    if (k.length === 1 && 'ぁぃぅぇぉゃゅょゎゐゑ'.includes(k)) continue;
    if (k === 'ぢ' || k === 'づ' || k === 'ん') continue;
    if (!R2K[r]) R2K[r] = k;
  }
  Object.assign(R2K, {
    si: 'し', ti: 'ち', tu: 'つ', hu: 'ふ', zi: 'じ', di: 'ぢ', du: 'づ', ca: 'か', cu: 'く', co: 'こ', ce: 'せ', ci: 'し',
    sya: 'しゃ', syu: 'しゅ', syo: 'しょ', sye: 'しぇ', tya: 'ちゃ', tyu: 'ちゅ', tyo: 'ちょ', tye: 'ちぇ', cya: 'ちゃ', cyu: 'ちゅ', cyo: 'ちょ',
    jya: 'じゃ', jyu: 'じゅ', jyo: 'じょ', jye: 'じぇ', zya: 'じゃ', zyu: 'じゅ', zyo: 'じょ', zye: 'じぇ', dya: 'ぢゃ', dyu: 'ぢゅ', dyo: 'ぢょ',
    thi: 'てぃ', dhi: 'でぃ', twu: 'とぅ', dwu: 'どぅ', whi: 'うぃ', whe: 'うぇ', who: 'うぉ', wi: 'うぃ', we: 'うぇ',
    xa: 'ぁ', xi: 'ぃ', xu: 'ぅ', xe: 'ぇ', xo: 'ぉ', la: 'ぁ', li: 'ぃ', lu: 'ぅ', le: 'ぇ', lo: 'ぉ',
    xya: 'ゃ', xyu: 'ゅ', xyo: 'ょ', lya: 'ゃ', lyu: 'ゅ', lyo: 'ょ', xtu: 'っ', ltu: 'っ', xtsu: 'っ', ltsu: 'っ', xwa: 'ゎ', lwa: 'ゎ',
    xn: 'ん', '-': 'ー', '.': '。', ',': '、', '?': '？', '!': '！', '~': '～', '[': '「', ']': '」'
  });
  const PREFIXES = new Set();
  for (const r of Object.keys(R2K)) for (let i = 1; i < r.length; i++) PREFIXES.add(r.slice(0, i));
  PREFIXES.add('n');

  const kataToHira = s => String(s).replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
  const hiraToKata = s => String(s).replace(/[ぁ-ゖ]/g, c => String.fromCharCode(c.charCodeAt(0) + 0x60));
  const isKanji = c => /[㐀-䶿一-鿿豈-﫿々〆ヶ]/.test(c);
  const hasKanji = s => /[㐀-䶿一-鿿豈-﫿々]/.test(s);
  const isHira = c => /[ぁ-ゟ]/.test(c);
  const isKata = c => /[゠-ヿ]/.test(c);
  const hasJapanese = s => /[぀-ヿ㐀-鿿々ー]/.test(s);
  const mostlyKatakana = s => {
    const k = [...String(s)].filter(isKata).length, h = [...String(s)].filter(isHira).length;
    return k > 0 && k >= h;
  };

  function toRomaji(text) {
    const s = kataToHira(String(text));
    let out = '';
    let gem = false;
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === 'っ') { gem = true; continue; }
      let r = null, len = 1;
      const two = s.substr(i, 2);
      if (two.length === 2 && K2R[two]) { r = K2R[two]; len = 2; }
      else if (K2R[c] !== undefined) r = K2R[c];
      if (r !== null) {
        if (c === 'ん') {
          const nr = K2R[s.substr(i + 1, 2)] || K2R[s[i + 1]];
          if (nr && /^[aiueoy]/.test(nr)) r = "n'";
        }
        if (gem) { r = (r.startsWith('ch') ? 't' : r[0]) + r; gem = false; }
        out += r;
        i += len - 1;
        continue;
      }
      gem = false;
      if (c === 'ー') { const last = out.slice(-1); out += 'aiueo'.includes(last) ? last : '-'; continue; }
      if (PUNCT[c] !== undefined) { out += PUNCT[c]; continue; }
      const code = c.charCodeAt(0);
      if (code >= 0xFF01 && code <= 0xFF5E) { out += String.fromCharCode(code - 0xFEE0); continue; }
      out += c;
    }
    return out;
  }

  // Converts typed romaji into kana. Non-ASCII text passes through untouched, so it is safe to
  // re-run on a value that is partly converted already. With final=false a trailing incomplete
  // sequence (like "k" or "ky" or "n") is kept as typed so the user can finish it.
  function romajiToKana(input, opts = {}) {
    const final = !!opts.final;
    const s = String(input);
    let out = '';
    let i = 0;
    while (i < s.length) {
      const ch = s[i];
      const lc = ch.toLowerCase();
      if (!/[a-z'\-.,?!~\[\]]/.test(lc)) { out += ch; i++; continue; }
      const rest = s.slice(i).toLowerCase();
      if (/^([bcdfghjkmpqrstvwxyz])\1/.test(rest)) { out += 'っ'; i++; continue; }
      if (rest.startsWith('tch')) { out += 'っ'; i++; continue; }
      if (lc === 'n') {
        const n1 = rest[1], n2 = rest[2];
        if (n1 === undefined) {
          if (final) { out += 'ん'; i++; continue; }
          out += s.slice(i); break;
        }
        if (n1 === "'") { out += 'ん'; i += 2; continue; }
        if (n1 === 'n') {
          if (n2 === undefined && !final) { out += s.slice(i); break; }
          if (n2 && /[aiueo]/.test(n2)) { out += 'ん'; i += 1; continue; }
          out += 'ん'; i += 2; continue;
        }
        if (!/[aiueoy]/.test(n1)) { out += 'ん'; i++; continue; }
      }
      let matched = false;
      for (let L = Math.min(4, rest.length); L > 0; L--) {
        const seg = rest.slice(0, L);
        if (R2K[seg]) { out += R2K[seg]; i += L; matched = true; break; }
      }
      if (matched) continue;
      if (!final && PREFIXES.has(rest)) { out += s.slice(i); break; }
      out += ch;
      i++;
    }
    return opts.katakana ? hiraToKata(out).replace(/ー/g, 'ー') : out;
  }

  // Loose phonetic key used to compare a typed answer with the expected one: script, spacing,
  // punctuation, particle spellings (は/わ, を/お, へ/え) and long-vowel spellings are all ignored.
  function phonetic(s) {
    let h = kataToHira(romajiToKana(String(s).toLowerCase(), { final: true }));
    h = h.replace(/[\s。、，．,.!?！？「」『』・～~…"'()（）]/g, '');
    h = h.replace(/を/g, 'お').replace(/は/g, 'わ').replace(/へ/g, 'え').replace(/づ/g, 'ず').replace(/ぢ/g, 'じ');
    let r = toRomaji(h).replace(/'/g, '');
    r = r.replace(/ou/g, 'oo').replace(/ei/g, 'ee').replace(/-/g, '');
    return r;
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  const similarity = (a, b) => {
    const pa = phonetic(a), pb = phonetic(b);
    const L = Math.max(pa.length, pb.length) || 1;
    return 1 - levenshtein(pa, pb) / L;
  };

  JT.Kana = { K2R, toRomaji, romajiToKana, kataToHira, hiraToKata, isKanji, hasKanji, isHira, isKata, hasJapanese, mostlyKatakana, phonetic, similarity, levenshtein };
})();
