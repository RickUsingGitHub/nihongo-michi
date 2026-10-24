// Nihongo Michi - Electron main process.
const { app, BrowserWindow, ipcMain, shell, session, Menu, safeStorage } = require('electron');
const path = require('path');
const fs = require('fs');
const http = require('http');
const crypto = require('crypto');
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
// wantId: a learner restored from Google Drive keeps the id it has on the other device
ipcMain.handle('profiles:create', (_e, name, wantId) => {
  const n = cleanName(name);
  if (!n) return null;
  const ix = readIndex();
  const id = validId(wantId) && !ix.profiles.some(p => p.id === wantId) ? wantId : newId();
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
  googleForget(id);
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

// ---------- Google sign-in for Drive sync ----------
// Uses the "Desktop app" OAuth client from google-oauth.local.json ({ "clientId", "clientSecret" }), which
// is kept out of the public repository and packaged into the .exe. Sign-in runs in the system browser and
// returns to a one-off local address (http://127.0.0.1:<port>) with PKCE. The refresh token is stored per
// learner in profiles/<id>.google, encrypted with Windows' data protection (safeStorage).
const GOOGLE_SCOPE = 'https://www.googleapis.com/auth/drive.appdata openid email';
const googleKey = k => k === 'pending' || validId(k);
const googleFile = k => path.join(profilesDir(), k + '.google');
const googleTokens = new Map();   // learner id -> { token, exp, email }
let googleCfg;
function googleConfig() {
  if (googleCfg === undefined) {
    try {
      const c = JSON.parse(fs.readFileSync(path.join(__dirname, 'google-oauth.local.json'), 'utf8'));
      googleCfg = c.clientId && c.clientSecret ? c : null;
    } catch { googleCfg = null; }
  }
  return googleCfg;
}
const b64url = buf => buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const jwtEmail = jwt => { try { return JSON.parse(Buffer.from(jwt.split('.')[1], 'base64').toString('utf8')).email || ''; } catch { return ''; } };

function googleSave(key, data) {
  const text = JSON.stringify(data);
  const body = safeStorage.isEncryptionAvailable() ? { enc: safeStorage.encryptString(text).toString('base64') } : { plain: data };
  writeAtomic(googleFile(key), JSON.stringify(body));
}
function googleLoad(key) {
  try {
    const body = JSON.parse(fs.readFileSync(googleFile(key), 'utf8'));
    return body.enc ? JSON.parse(safeStorage.decryptString(Buffer.from(body.enc, 'base64'))) : body.plain;
  } catch { return null; }
}
function googleForget(key) {
  googleTokens.delete(key);
  try { fs.unlinkSync(googleFile(key)); } catch { /* not connected */ }
}

const googlePage = (title, msg) => `<!doctype html><meta charset="utf-8"><title>${title}</title>
<body style="font-family:Segoe UI,sans-serif;background:#f6f1e7;color:#24201b;display:grid;place-items:center;height:90vh;margin:0">
<div style="text-align:center"><div style="font-size:54px">道</div><h2>${title}</h2><p>${msg}</p></div>`;

async function googleSignIn(key) {
  const cfg = googleConfig();
  if (!cfg) throw new Error('Google sync is not set up in this copy of the app.');
  const verifier = b64url(crypto.randomBytes(32));
  const challenge = b64url(crypto.createHash('sha256').update(verifier).digest());
  const state = b64url(crypto.randomBytes(16));
  const server = http.createServer();
  await new Promise((res, rej) => { server.once('error', rej); server.listen(0, '127.0.0.1', res); });
  const redirect = `http://127.0.0.1:${server.address().port}`;
  try {
    const code = await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Sign-in timed out')), 5 * 60000);
      server.on('request', (req, res) => {
        const u = new URL(req.url, redirect);
        if (u.pathname !== '/') { res.writeHead(404); res.end(); return; }
        const ok = u.searchParams.get('code') && u.searchParams.get('state') === state;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(ok ? googlePage('Signed in', 'You can close this tab and go back to Nihongo Michi.')
          : googlePage('Sign-in cancelled', 'Nothing was changed. You can close this tab.'));
        clearTimeout(timer);
        if (ok) resolve(u.searchParams.get('code'));
        else reject(new Error(u.searchParams.get('error') === 'access_denied' ? 'Sign-in was cancelled' : 'Sign-in failed'));
      });
      shell.openExternal('https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
        client_id: cfg.clientId, redirect_uri: redirect, response_type: 'code', scope: GOOGLE_SCOPE, state,
        code_challenge: challenge, code_challenge_method: 'S256', access_type: 'offline', prompt: 'consent select_account'
      }));
    });
    const r = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      body: new URLSearchParams({ code, client_id: cfg.clientId, client_secret: cfg.clientSecret, redirect_uri: redirect, grant_type: 'authorization_code', code_verifier: verifier })
    });
    const tok = await r.json();
    if (!r.ok || !tok.refresh_token) throw new Error('Google did not finish the sign-in (' + (tok.error_description || tok.error || r.status) + ')');
    if (!String(tok.scope || '').includes('drive.appdata')) throw new Error('Please allow access to the app\'s Google Drive storage to sync.');
    const email = jwtEmail(tok.id_token || '');
    googleSave(key, { refresh: tok.refresh_token, email });
    googleTokens.set(key, { token: tok.access_token, exp: Date.now() + (tok.expires_in - 60) * 1000, email });
    if (win) { if (win.isMinimized()) win.restore(); win.focus(); }
    return { email };
  } finally { server.close(); }
}

async function googleToken(key) {
  const cached = googleTokens.get(key);
  if (cached && cached.exp > Date.now()) return { token: cached.token, email: cached.email };
  const saved = googleLoad(key), cfg = googleConfig();
  if (!saved || !cfg) return null;
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    body: new URLSearchParams({ client_id: cfg.clientId, client_secret: cfg.clientSecret, refresh_token: saved.refresh, grant_type: 'refresh_token' })
  });
  const tok = await r.json().catch(() => ({}));
  if (!r.ok) {
    if (tok.error === 'invalid_grant') googleForget(key);   // access was removed in the Google account
    return null;
  }
  googleTokens.set(key, { token: tok.access_token, exp: Date.now() + (tok.expires_in - 60) * 1000, email: saved.email });
  return { token: tok.access_token, email: saved.email };
}

ipcMain.handle('google:available', () => !!googleConfig());
ipcMain.handle('google:status', (_e, key) => {
  if (!googleKey(key)) return null;
  const s = googleLoad(key);
  return s ? { email: s.email } : null;
});
ipcMain.handle('google:signin', (_e, key) => {
  if (!googleKey(key)) throw new Error('bad learner');
  return googleSignIn(key);
});
ipcMain.handle('google:token', (_e, key) => (googleKey(key) ? googleToken(key) : null));
ipcMain.handle('google:signout', async (_e, key) => {
  if (!googleKey(key)) return false;
  const s = googleLoad(key);
  if (s && s.refresh) await fetch('https://oauth2.googleapis.com/revoke?token=' + encodeURIComponent(s.refresh), { method: 'POST' }).catch(() => {});
  googleForget(key);
  return true;
});
ipcMain.handle('google:rekey', (_e, from, to) => {
  if (!googleKey(from) || !validId(to) || from === to) return false;
  const s = googleLoad(from);
  if (!s) return false;
  googleSave(to, s);
  if (googleTokens.has(from)) googleTokens.set(to, googleTokens.get(from));
  googleForget(from);
  return true;
});

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
