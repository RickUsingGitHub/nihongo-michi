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
    create(name) {
      const ix = local.index();
      const id = 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
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
    JT.state = Object.assign(fresh(), st || {});
    JT.state.settings = Object.assign({}, DEFAULT_SETTINGS, JT.state.settings || {});
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

  async function createProfile(name) {
    const n = String(name || '').trim().slice(0, 30);
    if (!n) throw new Error('Please enter a name');
    const id = api() ? await api().profilesCreate(n) : local.create(n);
    if (!id) throw new Error('Could not create the learner');
    useState(null);
    JT.state.name = n;
    current = id;
    save(true);
    return id;
  }

  async function renameProfile(id, name) {
    const n = String(name || '').trim().slice(0, 30);
    if (!n) return false;
    const ok = api() ? await api().profilesRename(id, n) : local.rename(id, n);
    if (ok && id === current) { JT.state.name = n; save(); }
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
    JT.state.stats.answered++;
    if (ok) JT.state.stats.correct++;
  }

  function reset() {
    const keepSettings = JT.state.settings, keepName = JT.state.name;
    JT.state = fresh();
    JT.state.settings = keepSettings;
    JT.state.name = keepName;
    save(true);
  }

  function importJson(text) {
    const data = JSON.parse(text);
    if (!data || typeof data !== 'object' || !data.srs || !data.settings) throw new Error('Not a Nihongo Michi progress file');
    const keepName = JT.state.name;
    JT.state = Object.assign(fresh(), data);
    JT.state.settings = Object.assign({}, DEFAULT_SETTINGS, data.settings);
    JT.state.name = keepName;
    save(true);
  }

  JT.Store = {
    init, listProfiles, openProfile, createProfile, renameProfile, deleteProfile, closeProfile,
    currentProfile: () => current,
    save, addXP, dayKey, currentStreak, recordAnswer, reset, importJson, DEFAULT_SETTINGS
  };
})();
