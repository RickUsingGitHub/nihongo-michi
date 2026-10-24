/* Spaced repetition (Leitner boxes 1-8 with growing intervals). Item keys:
 *   k:<kana>   w:<surface>|<reading>   j:<kanji>   g:<grammar id>
 */
(function () {
  const JT = (window.JT = window.JT || {});
  const DAY = 86400000;
  const HOUR = 3600000;
  const INTERVALS = [0, 1, 3, 7, 14, 30, 60, 120, 240];
  const STAGES = [
    { id: 's1', name: 'Learning', boxes: [1, 2], color: '#e7a13c' },
    { id: 's2', name: 'Familiar', boxes: [3, 4], color: '#64a7d6' },
    { id: 's3', name: 'Strong', boxes: [5, 6], color: '#3fb27f' },
    { id: 's4', name: 'Mastered', boxes: [7, 8], color: '#8a5cc7' }
  ];

  const db = () => JT.state.srs;
  const now = () => Date.now();
  const dueAfter = box => now() + Math.max(INTERVALS[box] * DAY - 4 * HOUR, 10 * 60000);

  function add(key, opts = {}) {
    const s = db();
    if (s[key]) return false;
    const box = opts.box || 1;
    s[key] = { b: box, d: opts.due != null ? opts.due : dueAfter(box), n: 0, c: 0, a: now() };
    return true;
  }

  function grade(key, ok) {
    const r = db()[key];
    if (!r) return;
    r.n++;
    if (ok) {
      r.c++;
      r.b = Math.min(8, r.b + 1);
      r.d = dueAfter(r.b);
    } else {
      r.l = (r.l || 0) + 1;
      r.b = Math.max(1, r.b - 2);
      r.d = now() + 10 * 60000;
    }
  }

  const has = key => !!db()[key];
  const box = key => (db()[key] ? db()[key].b : 0);
  const stageOf = b => STAGES.find(s => s.boxes.includes(b)) || null;

  function due(filter) {
    const t = now();
    return Object.entries(db())
      .filter(([k, r]) => r.d <= t && (!filter || filter(k)))
      .sort((a, b) => a[1].d - b[1].d)
      .map(([k]) => k);
  }

  function counts(prefix) {
    const out = { total: 0, s1: 0, s2: 0, s3: 0, s4: 0 };
    for (const [k, r] of Object.entries(db())) {
      if (prefix && !k.startsWith(prefix)) continue;
      out.total++;
      const st = stageOf(r.b);
      if (st) out[st.id]++;
    }
    return out;
  }

  function nextDue() {
    let min = Infinity;
    for (const r of Object.values(db())) if (r.d < min) min = r.d;
    return min;
  }

  function weakest(n, filter) {
    return Object.entries(db())
      .filter(([k]) => !filter || filter(k))
      .sort((a, b) => a[1].b - b[1].b || (b[1].l || 0) - (a[1].l || 0))
      .slice(0, n)
      .map(([k]) => k);
  }

  JT.SRS = { add, grade, has, box, due, counts, nextDue, weakest, stageOf, STAGES, INTERVALS, DAY };
})();
