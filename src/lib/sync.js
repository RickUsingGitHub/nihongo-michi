/* Progress sync through the learner's own Google Drive, in the hidden app-data folder that only this
 * app can see. Each learner is one file, nihongo-michi-<id>.json. Syncing downloads it, merges it with
 * the progress on this device and uploads the result, so study on the computer and on the phone adds up:
 *   - lessons, role-plays and tests keep the best result from either device
 *   - each review item keeps its most recent review
 *   - XP, daily activity and answer counts are kept per device and summed (state.contrib)
 *   - a reset or an imported file (state.resetAt) replaces the older history on every device */
(function () {
  const JT = (window.JT = window.JT || {});
  const FILES = 'https://www.googleapis.com/drive/v3/files';
  const UPLOAD = 'https://www.googleapis.com/upload/drive/v3/files';
  const PREFIX = 'nihongo-michi-';
  const fileName = id => PREFIX + id + '.json';

  // ---------- Google Drive ----------
  async function call(token, url, opts = {}) {
    const res = await fetch(url, Object.assign({}, opts, { headers: Object.assign({ Authorization: 'Bearer ' + token }, opts.headers || {}) }));
    if (res.status === 401) { const e = new Error('Google sign-in has expired'); e.code = 401; throw e; }
    if (!res.ok) throw new Error('Google Drive error ' + res.status + ': ' + (await res.text()).slice(0, 160));
    return res;
  }
  const Drive = {
    async list(token) {
      const q = encodeURIComponent(`name contains '${PREFIX}' and trashed = false`);
      const r = await call(token, `${FILES}?spaces=appDataFolder&q=${q}&fields=files(id,name,modifiedTime)&pageSize=100`);
      return ((await r.json()).files || []).filter(f => f.name.startsWith(PREFIX) && f.name.endsWith('.json'));
    },
    async read(token, fileId) {
      return (await call(token, `${FILES}/${fileId}?alt=media`)).json();
    },
    async create(token, name, data) {
      const b = 'jt' + Math.random().toString(36).slice(2);
      const body = `--${b}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify({ name, parents: ['appDataFolder'] })}\r\n` +
        `--${b}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(data)}\r\n--${b}--`;
      const r = await call(token, `${UPLOAD}?uploadType=multipart&fields=id`, { method: 'POST', headers: { 'Content-Type': 'multipart/related; boundary=' + b }, body });
      return (await r.json()).id;
    },
    async update(token, fileId, data) {
      await call(token, `${UPLOAD}/${fileId}?uploadType=media`, { method: 'PATCH', headers: { 'Content-Type': 'application/json; charset=UTF-8' }, body: JSON.stringify(data) });
    }
  };

  // ---------- merging two copies of a learner's progress ----------
  const clone = o => JSON.parse(JSON.stringify(o));
  const max = (a, b) => Math.max(a || 0, b || 0);
  function both(A, B, fn) {
    const out = {};
    for (const k of new Set([...Object.keys(A || {}), ...Object.keys(B || {})])) {
      const a = A ? A[k] : undefined, b = B ? B[k] : undefined;
      out[k] = a == null ? b : b == null ? a : fn(a, b);
    }
    return out;
  }
  const parseDay = k => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
  function streakFrom(days) {
    const active = Object.keys(days).filter(d => days[d] > 0).sort();
    if (!active.length) return { n: 0, last: null };
    const last = active[active.length - 1];
    let n = 0;
    for (const d = parseDay(last); days[JT.Store.dayKey(d)] > 0; d.setDate(d.getDate() - 1)) n++;
    return { n, last };
  }
  // XP, days, answer counts and streak are the sum of every device's contribution
  function totals(s) {
    s.xp = 0; s.days = {}; s.stats = { answered: 0, correct: 0 };
    for (const c of Object.values(s.contrib || {})) {
      s.xp += c.xp || 0;
      s.stats.answered += c.answered || 0;
      s.stats.correct += c.correct || 0;
      for (const [d, n] of Object.entries(c.days || {})) s.days[d] = (s.days[d] || 0) + n;
    }
    s.streak = streakFrom(s.days);
    return s;
  }

  // a = this device's state, b = the copy from Drive. Settings always stay as they are on this device.
  function merge(a, b) {
    if ((a.resetAt || 0) !== (b.resetAt || 0)) {
      const newer = (a.resetAt || 0) > (b.resetAt || 0) ? a : b;
      return Object.assign(clone(newer), { settings: clone(a.settings) });
    }
    const out = Object.assign(clone(b), clone(a));
    out.created = Math.min(a.created || Date.now(), b.created || Date.now());
    if ((b.nameAt || 0) > (a.nameAt || 0)) { out.name = b.name; out.nameAt = b.nameAt; }
    out.onboarded = !!(a.onboarded || b.onboarded);
    out.placement = !a.placement ? b.placement || null : !b.placement ? a.placement
      : (b.placement.at || 0) > (a.placement.at || 0) ? clone(b.placement) : clone(a.placement);
    out.lessons = both(a.lessons, b.lessons, (x, y) => Object.assign({}, x, y, {
      done: !!(x.done || y.done), stars: max(x.stars, y.stars), score: max(x.score, y.score), at: max(x.at, y.at),
      tested: !!(x.tested && y.tested)   // finished for real on either device beats "skipped by the placement test"
    }));
    out.srs = both(a.srs, b.srs, (x, y) => {
      const newer = (x.t || 0) !== (y.t || 0) ? ((x.t || 0) > (y.t || 0) ? x : y)
        : (x.n || 0) !== (y.n || 0) ? ((x.n || 0) > (y.n || 0) ? x : y) : (x.d || 0) >= (y.d || 0) ? x : y;
      const r = Object.assign({}, newer, { n: max(x.n, y.n), c: max(x.c, y.c) });
      if (x.a || y.a) r.a = Math.min(x.a || Infinity, y.a || Infinity);
      if (x.l || y.l) r.l = max(x.l, y.l);
      return r;
    });
    out.convos = both(a.convos, b.convos, (x, y) => Object.assign({}, x, y, { best: max(x.best, y.best), plays: max(x.plays, y.plays), at: max(x.at, y.at) }));
    out.tests = both(a.tests, b.tests, (x, y) => typeof x !== 'object' || typeof y !== 'object' ? max(+x, +y)
      : Object.assign({}, x, y, { passed: !!(x.passed || y.passed), best: max(x.best, y.best), at: max(x.at, y.at) }));
    out.extraWords = Object.assign({}, b.extraWords, a.extraWords);
    out.contrib = both(a.contrib, b.contrib, (x, y) => ({
      xp: max(x.xp, y.xp), answered: max(x.answered, y.answered), correct: max(x.correct, y.correct),
      days: both(x.days, y.days, (p, q) => Math.max(p, q))
    }));
    out.settings = clone(a.settings);
    return totals(out);
  }

  // ---------- syncing ----------
  const status = {};          // learner id -> { state: 'off' | 'syncing' | 'ok' | 'error' | 'signin', at, email, msg }
  let running = null, again = false, applying = false;
  let savedSeq = 0, syncedSeq = 0, timer = null;

  function setStatus(id, state, extra = {}) {
    status[id] = Object.assign({}, status[id], { state }, extra);
    JT.emit('sync-status', { id, status: status[id] });
  }

  const payload = id => ({
    app: 'nihongo-michi', format: 1, id, name: JT.state.name, savedAt: Date.now(),
    device: JT.platform ? JT.platform.device : '', summary: JT.Store.summary(), state: JT.state
  });

  // Replaces this device's progress with the merged copy (kept as the same object, which the app holds on to).
  async function apply(id, merged) {
    const oldName = JT.state.name;
    for (const k of Object.keys(JT.state)) if (!(k in merged)) delete JT.state[k];
    Object.assign(JT.state, merged);
    applying = true;
    try { JT.Store.save(true); } finally { applying = false; }
    if (merged.name && merged.name !== oldName) await JT.Store.renameProfile(id, merged.name, true);
    JT.emit('synced', id);
  }

  async function syncOnce(opts) {
    const id = JT.Store.currentProfile();
    if (!id || !JT.Google.email(id)) return { ok: false, reason: 'off' };
    const auth = await JT.Google.token(id, { renew: !!opts.renew });
    if (!auth) { setStatus(id, 'signin'); return { ok: false, reason: 'signin' }; }
    setStatus(id, 'syncing', { email: auth.email });
    try {
      const files = await Drive.list(auth.token);
      const f = files.find(x => x.name === fileName(id));
      if (f) {
        const remote = await Drive.read(auth.token, f.id);
        if (JT.Store.currentProfile() !== id) return { ok: false, reason: 'switched' };
        if (remote && remote.state) await apply(id, merge(JT.state, remote.state));
      }
      const seq = savedSeq;
      const data = payload(id);
      if (f) await Drive.update(auth.token, f.id, data); else await Drive.create(auth.token, fileName(id), data);
      syncedSeq = seq;
      setStatus(id, 'ok', { at: Date.now(), msg: '' });
      return { ok: true };
    } catch (e) {
      console.warn('sync failed', e);
      setStatus(id, e.code === 401 ? 'signin' : 'error', { msg: e.message });
      return { ok: false, reason: e.code === 401 ? 'signin' : 'error', error: e };
    }
  }

  const S = {
    Drive, merge, totals, streakFrom, fileName, status,
    linked: id => !!JT.Google.email(id || JT.Store.currentProfile()),
    // Sync the open learner now. opts.renew lets the web app refresh an expired sign-in (it reloads the page).
    async now(opts = {}) {
      if (running) { again = true; return running; }
      running = syncOnce(opts);
      try { return await running; } finally {
        running = null;
        if (again) { again = false; S.now(); }
      }
    },
    // Learners saved in this Google account's Drive (for "Continue with Google" on another device).
    async remoteLearners(key) {
      const auth = await JT.Google.token(key);
      if (!auth) throw new Error('Not signed in to Google');
      const out = [];
      for (const f of await Drive.list(auth.token)) {
        try {
          const d = await Drive.read(auth.token, f.id);
          if (d && d.app === 'nihongo-michi' && d.id && d.state) out.push(d);
        } catch (e) { console.warn('could not read', f.name, e); }
      }
      return out.sort((x, y) => (y.savedAt || 0) - (x.savedAt || 0));
    },
    // Recreate a learner from Drive on this device (or link the one that is already here), then open and sync it.
    async restore(key, data) {
      const ix = await JT.Store.listProfiles();
      if (ix.profiles.some(p => p.id === data.id)) {
        await JT.Google.rekey(key, data.id);
        await JT.enterProfile(data.id);
      } else {
        await JT.Google.rekey(key, data.id);
        const id = await JT.Store.createProfile(data.name, { id: data.id, state: data.state });
        if (id !== data.id) throw new Error('Could not restore this learner');
        JT.Store.closeProfile();
        await JT.enterProfile(id);
      }
    }
  };

  // Sync a little while after progress is saved, straight away when the app goes to the background,
  // and whenever a learner is opened.
  JT.on('saved', id => {
    if (applying || !id || !JT.Google || !JT.Google.email(id)) return;
    savedSeq++;
    clearTimeout(timer);
    timer = setTimeout(() => S.now(), 20000);
  });
  document.addEventListener('visibilitychange', () => {
    const id = JT.Store.currentProfile();
    if (document.visibilityState === 'hidden' && id && JT.Google.email(id) && savedSeq !== syncedSeq) { clearTimeout(timer); S.now(); }
  });

  JT.Sync = S;
})();
