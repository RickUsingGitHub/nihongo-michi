// Nihongo Michi - Electron main process.
const { app, BrowserWindow, ipcMain, shell, session, Menu } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

let win = null;

// Testing hook: run against a separate data folder without touching the real progress file.
if (process.env.NM_USER_DATA) app.setPath('userData', process.env.NM_USER_DATA);

// One window only — two copies of the app would overwrite each other's saved progress.
if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (!win) return;
    if (win.isMinimized()) win.restore();
    win.focus();
  });
}

// ---------- learner profiles ----------
// Each learner's progress lives in profiles/<id>.json; profiles/index.json lists the learners.
const profilesDir = () => path.join(app.getPath('userData'), 'profiles');
const indexFile = () => path.join(profilesDir(), 'index.json');
const profileFile = id => path.join(profilesDir(), id + '.json');
const legacyFile = () => path.join(app.getPath('userData'), 'progress.json');
const validId = id => typeof id === 'string' && /^[a-z0-9]{8,24}$/.test(id);
const cleanName = n => String(n || '').replace(/[\u0000-\u001f]/g, '').trim().slice(0, 30);
const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

function writeAtomic(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = file + '.tmp';
  fs.writeFileSync(tmp, text, 'utf8');
  fs.renameSync(tmp, file);
}

function readIndex() {
  try {
    const ix = JSON.parse(fs.readFileSync(indexFile(), 'utf8'));
    if (ix && Array.isArray(ix.profiles)) return ix;
  } catch { /* no index yet */ }
  return { profiles: [], last: null };
}
const writeIndex = ix => writeAtomic(indexFile(), JSON.stringify(ix, null, 1));

// Older versions kept a single progress.json — turn it into the first learner's profile.
function migrateLegacy() {
  if (fs.existsSync(indexFile()) || !fs.existsSync(legacyFile())) return;
  try {
    const raw = fs.readFileSync(legacyFile(), 'utf8');
    let name = 'Learner', summary;
    try {
      const st = JSON.parse(raw);
      name = cleanName(st.name) || 'Learner';
      summary = { xp: Number(st.xp) || 0, level: '', streak: 0 };
    } catch { /* keep defaults */ }
    const id = newId();
    writeAtomic(profileFile(id), raw);
    writeIndex({ profiles: [{ id, name, created: Date.now(), lastUsed: Date.now(), summary }], last: id });
    fs.renameSync(legacyFile(), legacyFile() + '.migrated');
  } catch (err) { console.error('migration failed', err); }
}

function saveProfile(id, json, summary) {
  if (!validId(id) || typeof json !== 'string' || json.length < 2) return false;
  try {
    writeAtomic(profileFile(id), json);
    if (summary && typeof summary === 'object') {
      const ix = readIndex();
      const p = ix.profiles.find(x => x.id === id);
      if (p) {
        p.summary = { xp: Number(summary.xp) || 0, level: String(summary.level || '').slice(0, 40), streak: Number(summary.streak) || 0 };
        p.lastUsed = Date.now();
        writeIndex(ix);
      }
    }
    return true;
  } catch (err) { console.error('save failed', err); return false; }
}

ipcMain.handle('profiles:list', () => { migrateLegacy(); return readIndex(); });
ipcMain.handle('profiles:create', (_e, name) => {
  const n = cleanName(name);
  if (!n) return null;
  const ix = readIndex();
  const id = newId();
  ix.profiles.push({ id, name: n, created: Date.now(), lastUsed: Date.now() });
  ix.last = id;
  writeIndex(ix);
  return id;
});
ipcMain.handle('profiles:rename', (_e, id, name) => {
  const n = cleanName(name);
  const ix = readIndex();
  const p = ix.profiles.find(x => x.id === id);
  if (!p || !n) return false;
  p.name = n;
  writeIndex(ix);
  return true;
});
ipcMain.handle('profiles:delete', (_e, id) => {
  if (!validId(id)) return false;
  const ix = readIndex();
  ix.profiles = ix.profiles.filter(x => x.id !== id);
  if (ix.last === id) ix.last = null;
  writeIndex(ix);
  // keep the data as a recoverable file rather than erasing it outright
  try { fs.renameSync(profileFile(id), profileFile(id) + '.deleted'); } catch { /* already gone */ }
  return true;
});
ipcMain.handle('profiles:touch', (_e, id) => {
  const ix = readIndex();
  const p = ix.profiles.find(x => x.id === id);
  if (!p) return false;
  p.lastUsed = Date.now();
  ix.last = id;
  writeIndex(ix);
  return true;
});
ipcMain.handle('profile:load', (_e, id) => {
  if (!validId(id)) return null;
  try { return fs.readFileSync(profileFile(id), 'utf8'); } catch { return null; }
});
ipcMain.on('profile:save', (_e, id, json, summary) => { saveProfile(id, json, summary); });
// used while the window is closing, so the final save is finished before the app quits
ipcMain.on('profile:save-sync', (e, id, json, summary) => { e.returnValue = saveProfile(id, json, summary); });

// ---------- text-to-speech helper (Windows OneCore voices via PowerShell + WinRT) ----------
class Speech {
  constructor() { this.proc = null; this.buf = ''; this.pending = new Map(); this.nextId = 1; }
  start() {
    if (this.proc) return;
    // In the packaged app the script sits inside app.asar, which PowerShell cannot read —
    // copy it out to the data folder (Electron's fs can read inside the archive).
    const script = path.join(app.getPath('userData'), 'tts-helper.ps1');
    try {
      fs.mkdirSync(app.getPath('userData'), { recursive: true });
      fs.writeFileSync(script, fs.readFileSync(path.join(__dirname, 'tts', 'tts.ps1')));
    } catch (err) { console.error('could not prepare speech helper', err); }
    this.proc = spawn('powershell.exe', ['-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', '-File', script], { windowsHide: true });
    this.proc.stdout.setEncoding('utf8');
    this.proc.stdout.on('data', d => {
      this.buf += d;
      let i;
      while ((i = this.buf.indexOf('\n')) >= 0) {
        const line = this.buf.slice(0, i).trim();
        this.buf = this.buf.slice(i + 1);
        if (!line) continue;
        let msg;
        try { msg = JSON.parse(line); } catch { continue; }
        const p = this.pending.get(msg.id);
        if (p) { this.pending.delete(msg.id); msg.error ? p.reject(new Error(msg.error)) : p.resolve(msg); }
      }
    });
    this.proc.stderr.on('data', d => console.error('[tts]', String(d)));
    this.proc.on('exit', () => {
      this.proc = null;
      for (const p of this.pending.values()) p.reject(new Error('speech helper stopped'));
      this.pending.clear();
    });
  }
  request(obj, timeoutMs = 20000) {
    this.start();
    const id = this.nextId++;
    // ASCII-only JSON so the PowerShell side never has to guess the input encoding
    const line = JSON.stringify({ ...obj, id }).replace(/[\u007f-￿]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
    return new Promise((resolve, reject) => {
      const t = setTimeout(() => { this.pending.delete(id); reject(new Error('speech timeout')); }, timeoutMs);
      this.pending.set(id, { resolve: v => { clearTimeout(t); resolve(v); }, reject: e => { clearTimeout(t); reject(e); } });
      this.proc.stdin.write(line + '\n');
    });
  }
  stop() { if (this.proc) { try { this.proc.stdin.end(); this.proc.kill(); } catch { /* ignore */ } } }
}
const speech = new Speech();

ipcMain.handle('tts:voices', async () => {
  try { return (await speech.request({ cmd: 'voices' })).voices || []; } catch (e) { console.error(e); return []; }
});
ipcMain.handle('tts:speak', async (_e, text, rate, voice, ssml) => {
  const req = { cmd: 'speak', text: String(text).slice(0, 2000), rate: Number(rate) || 1, voice: voice || '' };
  // SSML carries the course reading of each kanji word; fall back to plain text if the engine rejects it
  if (typeof ssml === 'string' && ssml.startsWith('<speak') && ssml.length <= 8000) {
    try { return (await speech.request({ ...req, ssml })).wav; } catch (err) { console.error('ssml speech failed', err.message); }
  }
  return (await speech.request(req)).wav;
});
ipcMain.handle('open:speech-settings', () => shell.openExternal('ms-settings:speech'));

// ---------- window ----------
function createWindow() {
  win = new BrowserWindow({
    width: 1320,
    height: 860,
    minWidth: 1020,
    minHeight: 680,
    backgroundColor: '#f6f1e7',
    title: 'Nihongo Michi',
    icon: path.join(__dirname, 'assets', 'icon.png'),
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: false
    }
  });
  win.loadFile(path.join(__dirname, 'src', 'index.html'));
  // keep navigation inside the app; open nothing external except Windows speech settings
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('will-navigate', e => e.preventDefault());
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  // microphone for "record & compare"
  session.defaultSession.setPermissionRequestHandler((_wc, permission, cb) => cb(permission === 'media'));
  session.defaultSession.setPermissionCheckHandler((_wc, permission) => permission === 'media');
  speech.start();
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on('window-all-closed', () => { speech.stop(); app.quit(); });
