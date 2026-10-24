// Sync checks: node tools/test-sync.js
// Simulates two devices (a PC and a phone), each with its own storage, sharing a fake Google Drive,
// and checks that progress is restored, merged without double counting, and that renames and resets carry over.
const vm = require('vm');
const fs = require('fs');
const path = require('path');
const SRC = path.join(__dirname, '..', 'src');

// ---------- a fake Google Drive (only the calls the app makes) ----------
const drive = { files: new Map(), next: 1, calls: 0 };
function respond(status, body) {
  return { ok: status < 400, status, json: async () => JSON.parse(body), text: async () => body };
}
async function fakeFetch(url, opts = {}) {
  drive.calls++;
  const auth = (opts.headers || {}).Authorization || '';
  if (!/^Bearer tok-/.test(auth)) return respond(401, '{"error":"unauthorized"}');
  const u = new URL(url);
  const m = u.pathname.match(/\/files\/([^/]+)$/);
  if (u.pathname === '/drive/v3/files' && (opts.method || 'GET') === 'GET') {
    if (u.searchParams.get('spaces') !== 'appDataFolder') return respond(400, 'only appDataFolder');
    const files = [...drive.files.entries()].map(([id, f]) => ({ id, name: f.name, modifiedTime: new Date(f.at).toISOString() }));
    return respond(200, JSON.stringify({ files }));
  }
  if (m && u.pathname.startsWith('/drive/v3/files/') && u.searchParams.get('alt') === 'media') {
    const f = drive.files.get(m[1]);
    return f ? respond(200, f.body) : respond(404, 'not found');
  }
  if (u.pathname === '/upload/drive/v3/files' && opts.method === 'POST') {
    const boundary = opts.headers['Content-Type'].split('boundary=')[1];
    const parts = opts.body.split('--' + boundary).slice(1, -1).map(p => p.split('\r\n\r\n').slice(1).join('\r\n\r\n').replace(/\r\n$/, ''));
    const meta = JSON.parse(parts[0]);
    if (!meta.parents || meta.parents[0] !== 'appDataFolder') return respond(400, 'must be in appDataFolder');
    JSON.parse(parts[1]);
    const id = 'f' + drive.next++;
    drive.files.set(id, { name: meta.name, body: parts[1], at: Date.now() });
    return respond(200, JSON.stringify({ id }));
  }
  if (m && u.pathname.startsWith('/upload/drive/v3/files/') && opts.method === 'PATCH') {
    const f = drive.files.get(m[1]);
    if (!f) return respond(404, 'not found');
    JSON.parse(opts.body);
    f.body = opts.body; f.at = Date.now();
    return respond(200, '{}');
  }
  return respond(400, 'unexpected call ' + (opts.method || 'GET') + ' ' + url);
}

// ---------- a device: the app's libraries in their own sandbox ----------
function device(label) {
  const store = new Map();
  const listeners = {};
  const win = {
    console, setTimeout, clearTimeout, URL, URLSearchParams, JSON, Math, Date,
    localStorage: { getItem: k => (store.has(k) ? store.get(k) : null), setItem: (k, v) => store.set(k, String(v)), removeItem: k => store.delete(k) },
    navigator: { userAgent: 'test', platform: 'test', maxTouchPoints: 0 },
    matchMedia: () => ({ matches: false, addEventListener() {} }),
    addEventListener() {},
    document: { visibilityState: 'visible', addEventListener: (e, fn) => { (listeners[e] = listeners[e] || []).push(fn); } },
    location: { protocol: 'https:', origin: 'https://example.test', pathname: '/', hash: '', search: '' },
    history: { replaceState() {} },
    fetch: fakeFetch
  };
  win.window = win;
  vm.createContext(win);
  for (const f of ['config.js', 'lib/platform.js', 'lib/store.js', 'lib/srs.js', 'lib/google.js', 'lib/sync.js']) {
    vm.runInContext(fs.readFileSync(path.join(SRC, f), 'utf8'), win, { filename: f });
  }
  const JT = win.JT;
  JT.enterProfile = async id => { await JT.Store.openProfile(id); await JT.Google.load(id); await JT.Sync.now(); };
  JT.R = { nextLesson: () => null };
  const signIn = id => { win.localStorage.setItem('jt-google-' + id, JSON.stringify({ token: 'tok-' + label, exp: Date.now() + 3600e3, email: 'learner@example.com' })); };
  return { JT, win, label, signIn };
}

let fails = 0;
const eq = (got, want, label) => {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g !== w) { fails++; console.log('FAIL', label, g, '!=', w); }
};

(async () => {
  const pc = device('pc'), phone = device('phone');

  // 1. the PC has a learner with some progress and connects Google Drive
  let J = pc.JT;
  const id = await J.Store.createProfile('Alex');
  J.Store.addXP(30);
  J.SRS.add('k:あ'); J.SRS.grade('k:あ', true);
  J.SRS.add('k:い');
  J.state.lessons.L1 = { done: true, stars: 2, score: 0.8, at: 1000 };
  J.state.convos.c1 = { best: 2, plays: 1, at: 1000 };
  J.state.tests.kanaSpeed = 12;
  J.state.onboarded = true;
  J.Store.recordAnswer(true); J.Store.recordAnswer(false);
  pc.signIn(id);
  await J.Google.load(id);
  let r = await J.Sync.now();
  eq(r.ok, true, 'pc first sync');
  eq(drive.files.size, 1, 'one file in Drive');
  eq([...drive.files.values()][0].name, 'nihongo-michi-' + id + '.json', 'file name');

  // 2. the phone signs in and restores the learner
  J = phone.JT;
  phone.signIn('pending');
  await J.Google.load('pending');
  const remote = await J.Sync.remoteLearners('pending');
  eq(remote.map(d => d.name), ['Alex'], 'phone sees the learner');
  await J.Sync.restore('pending', remote[0]);
  eq(J.Store.currentProfile(), id, 'restored with the same id');
  eq([J.state.name, J.state.xp, J.state.lessons.L1.stars, J.state.srs['k:あ'].b, J.state.tests.kanaSpeed, J.state.onboarded], ['Alex', 30, 2, 2, 12, true], 'phone has the progress');
  eq(J.Google.email(id), 'learner@example.com', 'phone linked');
  eq(phone.win.localStorage.getItem('jt-google-pending'), null, 'pending sign-in moved to the learner');

  // 3. both devices study before syncing again
  const pcJ = pc.JT, phJ = phone.JT;
  pcJ.Store.addXP(10);
  pcJ.state.lessons.L2 = { done: true, stars: 3, score: 1, at: 2000 };
  pcJ.state.convos.c1 = { best: 3, plays: 2, at: 2000 };
  phJ.Store.addXP(20);
  phJ.state.lessons.L1 = { done: true, stars: 3, score: 0.95, at: 3000 };
  phJ.state.lessons.L3 = { done: true, stars: 1, score: 0.6, at: 3000 };
  phJ.Store.recordAnswer(true);
  pcJ.SRS.grade('k:い', true);                       // reviewed on the PC first…
  pcJ.SRS.grade('k:あ', false);
  await new Promise(res => setTimeout(res, 5));
  phJ.SRS.grade('k:い', false);                      // …then forgotten on the phone, later
  phJ.SRS.grade('k:あ', true); phJ.SRS.grade('k:あ', true);   // and remembered on the phone, later
  r = await pcJ.Sync.now(); eq(r.ok, true, 'pc sync 2');
  r = await phJ.Sync.now(); eq(r.ok, true, 'phone sync 2');
  r = await pcJ.Sync.now(); eq(r.ok, true, 'pc sync 3');
  for (const [name, X] of [['pc', pcJ], ['phone', phJ]]) {
    eq(X.state.xp, 60, name + ' xp adds up (30 + 10 + 20)');
    eq(Object.keys(X.state.lessons).sort(), ['L1', 'L2', 'L3'], name + ' lessons from both');
    eq(X.state.lessons.L1.stars, 3, name + ' best stars kept');
    eq(X.state.convos.c1.best, 3, name + ' best role-play');
    eq(X.state.srs['k:い'].b, 1, name + ' most recent review wins (forgotten)');
    eq([X.state.srs['k:あ'].b, X.state.srs['k:あ'].n], [4, 3], name + ' most recent review wins (remembered), review count kept');
    eq(X.state.stats, { answered: 3, correct: 2 }, name + ' answers add up');
    eq(Object.keys(X.state.contrib).length, 2, name + ' two devices');
    eq(X.state.days[X.Store.dayKey()], 60, name + ' today\'s XP');
    eq(X.state.streak.n, 1, name + ' streak');
  }

  // 4. syncing again changes nothing (no double counting)
  await phJ.Sync.now(); await pcJ.Sync.now(); await phJ.Sync.now();
  eq([pcJ.state.xp, phJ.state.xp], [60, 60], 'repeat syncs keep xp');

  // 5. a rename on the phone reaches the PC; the PC's settings stay its own
  await phJ.Store.renameProfile(id, 'Alexandra');
  phJ.state.settings.voice = 'phone-voice';
  pcJ.state.settings.voice = 'pc-voice';
  await phJ.Sync.now(); await pcJ.Sync.now();
  eq(pcJ.state.name, 'Alexandra', 'rename carried over');
  eq((await pcJ.Store.listProfiles()).profiles[0].name, 'Alexandra', 'learner list renamed on the pc');
  eq([pcJ.state.settings.voice, phJ.state.settings.voice], ['pc-voice', 'phone-voice'], 'settings stay per device');

  // 6. a reset on the PC replaces the history on the phone too
  pcJ.Store.reset();
  pcJ.Store.addXP(5);
  await pcJ.Sync.now(); await phJ.Sync.now();
  eq([phJ.state.xp, Object.keys(phJ.state.lessons).length, phJ.state.name], [5, 0, 'Alexandra'], 'reset carried over');

  // 7. an expired phone sign-in pauses syncing instead of failing
  phone.win.localStorage.setItem('jt-google-' + id, JSON.stringify({ token: 'tok-phone', exp: Date.now() - 1000, email: 'learner@example.com' }));
  r = await phJ.Sync.now();
  eq([r.ok, r.reason, phJ.Sync.status[id].state], [false, 'signin', 'signin'], 'expired sign-in pauses sync');

  // 8. merge details
  const M = pcJ.Sync.merge;
  const base = { settings: {}, lessons: {}, srs: {}, convos: {}, tests: {}, contrib: {} };
  const a = Object.assign({}, base, { lessons: { X: { done: true, stars: 1, score: 0.5, at: 1, tested: true } } });
  const b = Object.assign({}, base, { lessons: { X: { done: true, stars: 0, score: 1, at: 2, tested: false } } });
  eq(M(a, b).lessons.X, { done: true, stars: 1, score: 1, at: 2, tested: false }, 'lesson finished for real beats placement skip');
  eq(M(Object.assign({}, base, { tests: { level1: { passed: false, best: 50, at: 1 } } }), Object.assign({}, base, { tests: { level1: { passed: true, best: 40, at: 2 } } })).tests.level1,
    { passed: true, best: 50, at: 2 }, 'tests keep the best');
  eq(pcJ.Sync.streakFrom({ '2026-01-01': 5, '2026-01-02': 3, '2026-01-04': 1, '2026-01-05': 2 }), { n: 2, last: '2026-01-05' }, 'streak counts back from the last day');

  console.log(fails ? fails + ' failed' : 'all passed', `(${drive.calls} Drive calls)`);
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
