/* Progress storage per learner profile (Electron data folder, or localStorage in a plain browser)
 * and a tiny event bus. */
(function () {
  const JT = (window.JT = window.JT || {});

  const listeners = {};
  JT.on = (evt, fn) => { (listeners[evt] = listeners[evt] || []).push(fn); };
  JT.off = (evt, fn) => { listeners[evt] = (listeners[evt] || []).filter(f => f !== fn); };
  JT.emit = (evt, data) => { for (const fn of listeners[evt] || []) { try { fn(data); } catch (e) { console.error(e); } } };

  const DEFAULT_SETTINGS = {
    romaji: 'auto',      // auto | always | never
    furigana: 'smart',   // always | smart | never
    spacing: 'auto',     // auto | on | off
    voice: '',
    rate: 1.0,
    sfx: true,
    autoplay: true,
    dailyGoal: 50,
    theme: 'system',     // system | light | dark
    reviewBatch: 20,
    newWords: 10,
    newKanji: 5
  };

  function fresh() {
    return {
      v: 1, created: Date.now(), name: '', onboarded: false, placement: null,
      lessons: {}, srs: {}, xp: 0, days: {}, streak: { n: 0, last: null },
      convos: {}, tests: {}, settings: { ...DEFAULT_SETTINGS },
      stats: { answered: 0, correct: 0 }
    };
  }

  const dayKey = (d = new Date()) =>
    d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');

  // Each install has its own id. XP, daily activity and answer counts are kept per device (state.contrib)
  // so that syncing the computer and the phone adds them up instead of counting anything twice.
  let devId = null;
  function deviceId() {
    if (devId) return devId;
    try { devId = localStorage.getItem('jt-device'); } catch (e) { /* storage blocked */ }
    if (!devId) {
      devId = 'd' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
      try { localStorage.setItem('jt-device', devId); } catch (e) { /* storage blocked */ }
    }
    return devId;
  }
  const mine = s => {
    s.contrib = s.contrib || {};
    return (s.contrib[deviceId()] = s.contrib[deviceId()] || { xp: 0, answered: 0, correct: 0, days: {} });
  };

  // Fills in defaults; progress from before syncing existed is credited to this device.
  function normalize(st) {
    const s = Object.assign(fresh(), st || {});
    s.settings = Object.assign({}, DEFAULT_SETTINGS, s.settings || {});
    if (!s.contrib) s.contrib = { [deviceId()]: { xp: s.xp || 0, answered: s.stats.answered || 0, correct: s.stats.correct || 0, days: Object.assign({}, s.days) } };
    return s;
  }

  // ---------- browser fallback (localStorage) mirroring the desktop profile API ----------
  const local = {
    index() {
      let ix = null;
      try { ix = JSON.parse(localStorage.getItem('jt-profiles') || 'null'); } catch (e) { ix = null; }
      if (!ix) {
        ix = { profiles: [], last: null };
        const old = localStorage.getItem('jt-progress');
        if (old) {
          let name = 'Learner', summary;
          try { const st = JSON.parse(old); name = st.name || 'Learner'; summary = { xp: st.xp || 0, level: '', streak: 0 }; } catch (e) { /* keep defaults */ }
          const id = 'p' + Date.now().toString(36);
          localStorage.setItem('jt-profile-' + id, old);
          localStorage.removeItem('jt-progress');
          ix = { profiles: [{ id, name, created: Date.now(), lastUsed: Date.now(), summary }], last: id };
          localStorage.setItem('jt-profiles', JSON.stringify(ix));
        }
      }
      return ix;
    },
    write(ix) { localStorage.setItem('jt-profiles', JSON.stringify(ix)); },
    create(name, wantId) {
      const ix = local.index();
      const id = /^[a-z0-9]{8,24}$/.test(wantId || '') && !ix.profiles.some(p => p.id === wantId) ? wantId : 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      ix.profiles.push({ id, name, created: Date.now(), lastUsed: Date.now() });
      ix.last = id;
      local.write(ix);
      return id;
    },
    rename(id, name) { const ix = local.index(); const p = ix.profiles.find(x => x.id === id); if (p) { p.name = name; local.write(ix); } return !!p; },
    remove(id) { const ix = local.index(); ix.profiles = ix.profiles.filter(x => x.id !== id); if (ix.last === id) ix.last = null; local.write(ix); localStorage.removeItem('jt-profile-' + id); return true; },
    touch(id) { const ix = local.index(); const p = ix.profiles.find(x => x.id === id); if (p) { p.lastUsed = Date.now(); ix.last = id; local.write(ix); } return !!p; },
    load(id) { return localStorage.getItem('jt-profile-' + id); },
    save(id, json, summary) {
      localStorage.setItem('jt-profile-' + id, json);
      const ix = local.index(); const p = ix.profiles.find(x => x.id === id);
      if (p) { p.summary = summary; p.lastUsed = Date.now(); local.write(ix); }
    }
  };
  const api = () => window.api;

  let current = null;   // id of the open learner profile

  async function listProfiles() {
    const ix = api() ? await api().profilesList() : local.index();
    return ix || { profiles: [], last: null };
  }

  function useState(raw) {
    let st = null;
    try { st = raw ? JSON.parse(raw) : null; } catch (e) { st = null; }
    JT.state = normalize(st);
  }

  // Start-up: an empty placeholder state until a learner is chosen.
  async function init() {
    useState(null);
    current = null;
  }

  async function openProfile(id) {
    const ix = await listProfiles();
    const p = ix.profiles.find(x => x.id === id);
    if (!p) throw new Error('Learner not found');
    const raw = api() ? await api().profileLoad(id) : local.load(id);
    useState(raw);
    JT.state.name = p.name;
    current = id;
    if (api()) await api().profilesTouch(id); else local.touch(id);
    JT.emit('profile', p);
    return p;
  }

  // opts.id and opts.state: recreate a learner restored from Google Drive under the same id
  async function createProfile(name, opts = {}) {
    const n = String(name || '').trim().slice(0, 30);
    if (!n) throw new Error('Please enter a name');
    const id = api() ? await api().profilesCreate(n, opts.id) : local.create(n, opts.id);
    if (!id) throw new Error('Could not create the learner');
    JT.state = normalize(opts.state || null);
    JT.state.name = n;
    current = id;
    save(true);
    return id;
  }

  // fromSync: the new name came from another device, so it doesn't count as a fresh rename
  async function renameProfile(id, name, fromSync) {
    const n = String(name || '').trim().slice(0, 30);
    if (!n) return false;
    const ok = api() ? await api().profilesRename(id, n) : local.rename(id, n);
    if (ok && id === current) {
      JT.state.name = n;
      if (!fromSync) JT.state.nameAt = Date.now();
      save();
    }
    return ok;
  }

  async function deleteProfile(id) {
    if (api()) await api().profilesDelete(id); else local.remove(id);
    if (id === current) { current = null; useState(null); }
  }

  function summary() {
    const s = JT.state;
    let level = '';
    try {
      const L = JT.R && JT.R.nextLesson && JT.R.nextLesson();
      level = !L ? 'Course complete' : L.lv.title.startsWith(L.lv.tag) ? L.lv.title : L.lv.tag + ' · ' + L.lv.title;
    } catch (e) { /* registry not ready */ }
    return { xp: s.xp, level, streak: currentStreak() };
  }

  let timer = null;
  function writeNow(sync) {
    if (!current || !JT.state) return;
    const json = JSON.stringify(JT.state);
    const sum = summary();
    try {
      if (api()) { if (sync) api().profileSaveSync(current, json, sum); else api().profileSave(current, json, sum); }
      else local.save(current, json, sum);
    } catch (e) { console.error('save failed', e); }
    if (!sync) JT.emit('saved', current);
  }
  function save(now) {
    clearTimeout(timer);
    if (now) writeNow(false); else timer = setTimeout(() => writeNow(false), 500);
  }
  // finish the last save before the window closes
  window.addEventListener('beforeunload', () => { clearTimeout(timer); writeNow(true); });

  // Save the current learner and close their session (used when switching learners).
  function closeProfile() {
    clearTimeout(timer);
    writeNow(true);
    current = null;
    useState(null);
  }

  function touchStreak() {
    const s = JT.state;
    const today = dayKey();
    if (s.streak.last === today) return;
    const y = new Date(); y.setDate(y.getDate() - 1);
    s.streak.n = s.streak.last === dayKey(y) ? s.streak.n + 1 : 1;
    s.streak.last = today;
  }

  function addXP(n) {
    const s = JT.state;
    s.xp += n;
    const d = dayKey();
    s.days[d] = (s.days[d] || 0) + n;
    const c = mine(s);
    c.xp += n;
    c.days[d] = (c.days[d] || 0) + n;
    touchStreak();
    save();
    JT.emit('xp', n);
  }

  function currentStreak() {
    const s = JT.state;
    if (!s.streak.last) return 0;
    const y = new Date(); y.setDate(y.getDate() - 1);
    return s.streak.last === dayKey() || s.streak.last === dayKey(y) ? s.streak.n : 0;
  }

  function recordAnswer(ok) {
    const c = mine(JT.state);
    JT.state.stats.answered++;
    c.answered++;
    if (ok) { JT.state.stats.correct++; c.correct++; }
  }

  // A reset or an imported file starts a new history (resetAt), which syncing passes on to other devices.
  function reset() {
    const keepSettings = JT.state.settings, keepName = JT.state.name, keepNameAt = JT.state.nameAt;
    JT.state = fresh();
    JT.state.settings = keepSettings;
    JT.state.name = keepName;
    if (keepNameAt) JT.state.nameAt = keepNameAt;
    JT.state.contrib = {};
    JT.state.resetAt = Date.now();
    save(true);
  }

  function importJson(text) {
    const data = JSON.parse(text);
    if (!data || typeof data !== 'object' || !data.srs || !data.settings) throw new Error('Not a Nihongo Michi progress file');
    const keepName = JT.state.name;
    JT.state = normalize(data);
    JT.state.name = keepName;
    JT.state.resetAt = Date.now();
    save(true);
  }

  JT.Store = {
    init, listProfiles, openProfile, createProfile, renameProfile, deleteProfile, closeProfile,
    currentProfile: () => current,
    save, addXP, dayKey, currentStreak, recordAnswer, reset, importJson, summary, deviceId, normalize, DEFAULT_SETTINGS
  };
})();
