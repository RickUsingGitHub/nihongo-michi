/* Google sign-in for Drive sync, one account per learner.
 *  - Desktop app: main.js signs in through the system browser and keeps a refresh token on this PC,
 *    so the learner stays connected.
 *  - Web app (phones): Google's browser sign-in. It leaves the page and comes back with a one-hour token
 *    in the address (#access_token=…). When that expires the app quietly passes through Google again
 *    the next time the learner is opened; Google returns straight away while the learner is still signed in. */
(function () {
  const JT = (window.JT = window.JT || {});
  const DRIVE = 'https://www.googleapis.com/auth/drive.appdata';
  const SCOPE = DRIVE + ' openid email';
  const api = () => window.api;
  const linked = {};            // learner id -> Google account email
  let desktopReady = false;

  // ---------- web: tokens in localStorage, one per learner ----------
  const KEY = id => 'jt-google-' + id;
  const webGet = id => { try { return JSON.parse(localStorage.getItem(KEY(id)) || 'null'); } catch (e) { return null; } };
  const webSet = (id, v) => { try { localStorage.setItem(KEY(id), JSON.stringify(v)); } catch (e) { /* storage blocked */ } };
  const clientId = () => (JT.CONFIG && JT.CONFIG.googleWebClientId) || '';
  const redirectUri = () => location.origin + location.pathname.replace(/index\.html$/, '');

  function webRedirect(id, then, silent, hint) {
    const state = Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('jt-google-auth', JSON.stringify({ state, id, then, silent, at: Date.now() }));
    const p = new URLSearchParams({ client_id: clientId(), redirect_uri: redirectUri(), response_type: 'token', scope: SCOPE, state, include_granted_scopes: 'true' });
    p.set('prompt', silent ? 'none' : 'select_account');
    if (hint) p.set('login_hint', hint);
    location.assign('https://accounts.google.com/o/oauth2/v2/auth?' + p);
  }

  // A quiet re-sign-in at most every 10 minutes, so a failing one can't loop.
  function maySilent(id) {
    const k = 'jt-google-silent-' + id, last = +localStorage.getItem(k) || 0;
    if (Date.now() - last < 600000) return false;
    localStorage.setItem(k, String(Date.now()));
    return true;
  }

  const G = {
    // Is Google sync possible in this copy of the app?
    available() {
      if (api()) return desktopReady;
      return !!clientId() && /^https?:$/.test(location.protocol);
    },
    email: id => linked[id] || null,

    async init() {
      if (api() && api().googleAvailable) desktopReady = !!(await api().googleAvailable().catch(() => false));
    },
    // Loads whether a learner is connected (call when a learner is opened).
    async load(id) {
      if (api()) {
        const s = desktopReady ? await api().googleStatus(id).catch(() => null) : null;
        if (s && s.email) linked[id] = s.email; else delete linked[id];
      } else {
        const s = webGet(id);
        if (s && s.email) linked[id] = s.email; else delete linked[id];
      }
      return linked[id] || null;
    },
    // Connects learner `id` (or 'pending' before a learner exists). The web app leaves the page here and
    // carries on in handleRedirect() once Google sends the learner back.
    async signIn(id, then = 'sync') {
      if (api()) {
        const r = await api().googleSignIn(id);
        linked[id] = r.email;
        return r;
      }
      webRedirect(id, then, false);
      return new Promise(() => {});
    },
    // A current access token, or null when the learner needs to sign in again.
    async token(id, opts = {}) {
      if (api()) {
        try {
          const r = await api().googleToken(id);
          if (r && r.email) linked[id] = r.email;
          return r || null;
        } catch (e) { console.warn('google token', e); return null; }
      }
      const s = webGet(id);
      if (s && s.token && s.exp > Date.now() + 60000) return { token: s.token, email: s.email };
      if (s && opts.renew && clientId() && maySilent(id)) webRedirect(id, 'sync', true, s.email);
      return null;
    },
    async signOut(id) {
      if (api()) await api().googleSignOut(id).catch(() => {});
      else {
        const s = webGet(id);
        if (s && s.token) fetch('https://oauth2.googleapis.com/revoke?token=' + encodeURIComponent(s.token), { method: 'POST', mode: 'no-cors' }).catch(() => {});
        try { localStorage.removeItem(KEY(id)); } catch (e) { /* storage blocked */ }
      }
      delete linked[id];
    },
    // Moves a sign-in to another learner id ('pending' -> the learner restored from Drive).
    async rekey(from, to) {
      if (from === to) return;
      if (api()) await api().googleRekey(from, to);
      else {
        const v = localStorage.getItem(KEY(from));
        if (v) { localStorage.setItem(KEY(to), v); localStorage.removeItem(KEY(from)); }
      }
      if (linked[from]) linked[to] = linked[from];
      delete linked[from];
    },
    // Web: finishes a sign-in when Google sends the learner back. Returns { id, then, error? } or null.
    async handleRedirect() {
      if (api()) return null;
      const hash = location.hash.slice(1);
      if (!/(^|&)(access_token|error)=/.test(hash)) return null;
      const p = new URLSearchParams(hash);
      let pending = null;
      try { pending = JSON.parse(localStorage.getItem('jt-google-auth') || 'null'); } catch (e) { pending = null; }
      history.replaceState(null, '', location.pathname + location.search);
      localStorage.removeItem('jt-google-auth');
      if (!pending || pending.state !== p.get('state')) return null;
      const out = { id: pending.id, then: pending.then, silent: !!pending.silent };
      if (p.get('error')) return Object.assign(out, { error: p.get('error') });
      if (!(p.get('scope') || '').split(' ').includes(DRIVE)) return Object.assign(out, { error: 'no-drive' });
      const token = p.get('access_token');
      const info = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', { headers: { Authorization: 'Bearer ' + token } })
        .then(r => (r.ok ? r.json() : {})).catch(() => ({}));
      const prev = webGet(pending.id) || {};
      const email = info.email || prev.email || 'Google account';
      webSet(pending.id, { token, exp: Date.now() + (+p.get('expires_in') || 3600) * 1000, email });
      linked[pending.id] = email;
      return out;
    }
  };

  JT.Google = G;
})();
