/* App boot, navigation and theming. */
(function () {
  const JT = (window.JT = window.JT || {});
  const { h, icon } = JT.ui;
  const { R } = JT;

  const NAV = [
    { sec: 'Learn' },
    { id: 'home', label: 'Home', ico: 'home' },
    { id: 'course', label: 'Course', ico: 'course' },
    { id: 'review', label: 'Review & Learn', ico: 'review', badge: () => JT.SRS.due().length },
    { id: 'talk', label: 'Conversations', ico: 'chat' },
    { sec: 'Library' },
    { id: 'kana', label: 'Kana', glyph: 'あ' },
    { id: 'kanji', label: 'Kanji', glyph: '字' },
    { id: 'phrases', label: 'Phrasebook', ico: 'book' },
    { id: 'dict', label: 'Dictionary', ico: 'search' },
    { id: 'grammar', label: 'Grammar', ico: 'layers' },
    { sec: 'You' },
    { id: 'progress', label: 'Progress', ico: 'chart' },
    { id: 'settings', label: 'Settings', ico: 'gear' }
  ];

  let currentView = 'home';

  function renderNav() {
    const nav = document.getElementById('nav');
    JT.ui.clear(nav);
    for (const n of NAV) {
      if (n.sec) { nav.appendChild(h('div.nav-sec', n.sec)); continue; }
      const badge = n.badge ? n.badge() : 0;
      const b = h('button.nav-item' + (currentView === n.id ? '.active' : ''), { type: 'button' },
        h('span.nav-ico', n.glyph ? n.glyph : { html: JT.ui.ICONS[n.ico] }),
        n.label,
        badge ? h('span.nav-badge', badge > 99 ? '99+' : badge) : null);
      b.onclick = () => JT.go(n.id);
      nav.appendChild(b);
    }
    renderTabbar();
    const foot = document.getElementById('side-foot');
    JT.ui.clear(foot);
    if (!JT.Store.currentProfile()) return;
    foot.append(
      h('button.profile-chip', { type: 'button', title: 'Switch learner', onclick: () => JT.showProfiles() },
        JT.ui.avatar(JT.state.name, 34),
        h('div.grow', h('b', JT.state.name), h('span', 'Switch learner')),
        h('span', { html: JT.ui.ICONS.review, style: { width: '16px', height: '16px', display: 'inline-flex', opacity: 0.6 } })),
      h('div.row', { style: { gap: '8px', flexWrap: 'nowrap' } },
        h('div.side-stat', h('b', '🔥 ' + JT.Store.currentStreak()), h('span', 'streak')),
        h('div.side-stat', h('b', JT.state.xp), h('span', 'XP'))));
  }
  JT.refreshNav = renderNav;

  // Phones: a bottom tab bar with the main sections; everything else sits under "More".
  const TABS = ['home', 'course', 'review', 'talk'];
  const navIco = n => h('span.nav-ico', n.glyph ? n.glyph : { html: JT.ui.ICONS[n.ico] });
  function renderTabbar() {
    const bar = document.getElementById('tabbar');
    JT.ui.clear(bar);
    for (const id of TABS) {
      const n = NAV.find(x => x.id === id);
      const badge = n.badge ? n.badge() : 0;
      bar.appendChild(h('button.tab' + (currentView === id ? '.active' : ''), { type: 'button', onclick: () => JT.go(id) },
        navIco(n), id === 'review' ? 'Review' : id === 'talk' ? 'Talk' : n.label,
        badge ? h('span.nav-badge', badge > 99 ? '99+' : badge) : null));
    }
    const inMore = !TABS.includes(currentView);
    bar.appendChild(h('button.tab' + (inMore ? '.active' : ''), { type: 'button', onclick: showMore },
      h('span.nav-ico', { html: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>' }), 'More'));
  }
  function showMore() {
    let m;
    const item = n => h('button.more-item', { type: 'button', onclick: () => { m.close(); JT.go(n.id); } }, navIco(n), n.label);
    const items = NAV.filter(n => n.id && !TABS.includes(n.id));
    m = JT.ui.modal([
      h('div.more-list', items.map(item)),
      h('button.profile-chip', { type: 'button', style: { marginTop: '14px', background: 'var(--surface2)', color: 'var(--ink)' }, onclick: () => { m.close(); JT.showProfiles(); } },
        JT.ui.avatar(JT.state.name, 34),
        h('div.grow', h('b', { style: { color: 'var(--ink)' } }, JT.state.name), h('span', { style: { color: 'var(--muted)' } }, 'Switch learner')),
        h('span.small.muted', '🔥 ' + JT.Store.currentStreak() + ' · ' + JT.state.xp + ' XP'))
    ]);
  }

  // On touch screens a tap shows hidden furigana (desktop shows it on hover).
  if (JT.platform.touch) {
    document.addEventListener('click', e => {
      const r = e.target.closest && e.target.closest('ruby.nf');
      if (r) r.classList.toggle('peek');
    });
  }

  const VIEWS = {
    home: () => JT.Views.home(),
    course: p => JT.Views.course(p),
    review: () => JT.Review.page(),
    talk: () => JT.Convo.page(),
    kana: () => JT.Views.kana(),
    kanji: () => JT.Views.kanji(),
    phrases: () => JT.Views.phrases(),
    dict: () => JT.Views.dict(),
    grammar: () => JT.Views.grammar(),
    progress: () => JT.Views.progress(),
    settings: () => JT.Views.settings()
  };

  JT.go = function (view, params = {}) {
    JT.Audio.stop();
    if (JT.Rec.active) JT.Rec.stop();
    currentView = VIEWS[view] ? view : 'home';
    const main = document.getElementById('main');
    JT.ui.clear(main);
    main.scrollTop = 0;
    try {
      main.appendChild(VIEWS[currentView](params));
    } catch (e) {
      console.error(e);
      main.appendChild(h('div.page', h('h1', 'Something went wrong'), h('pre.small', String(e && e.stack || e))));
    }
    renderNav();
  };

  JT.applyTheme = function () {
    const t = JT.state.settings.theme;
    const dark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  };
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => JT.applyTheme());

  JT.on('xp', () => renderNav());

  // ---------- learner profiles ----------
  // Shows "Who's learning today?" — the app opens only once a learner is chosen or created.
  JT.showProfiles = async function () {
    JT.Audio.stop();
    if (JT.Store.currentProfile()) JT.Store.closeProfile();
    document.querySelectorAll('.modal-back').forEach(m => m.remove());
    document.getElementById('app').classList.add('picking');
    JT.applyTheme();
    const main = document.getElementById('main');
    JT.ui.clear(main);
    main.scrollTop = 0;
    main.appendChild(await JT.Views.profiles());
  };

  JT.afterProfileOpen = function () {
    JT.applyTheme();
    for (const [key, w] of Object.entries(JT.state.extraWords || {})) if (!R.words.has(key)) R.words.set(key, Object.assign({ key }, w));
    document.getElementById('app').classList.remove('picking');
    renderNav();
    JT.go('home');
    if (!JT.state.onboarded) JT.Views.onboarding();
  };

  JT.enterProfile = async function (id) {
    await JT.Store.openProfile(id);
    JT.afterProfileOpen();
    // bring in progress from the learner's other devices (the web app may pass through Google first)
    if (await JT.Google.load(id)) JT.Sync.now({ renew: true });
  };

  // after a sync brought in progress from another device, redraw what is on screen (unless a lesson is running)
  JT.on('synced', () => {
    renderNav();
    if (!document.querySelector('#main .player, #main .convo')) JT.go(currentView);
  });

  // Web app: finish a Google sign-in when Google sends the learner back to the app.
  async function afterGoogle(back) {
    if (back.then === 'restore') {
      if (back.error) { await JT.showProfiles(); JT.ui.toast(googleError(back.error)); return; }
      await JT.showProfiles();
      JT.Views.restoreFromGoogle('pending');
      return;
    }
    const ix = await JT.Store.listProfiles();
    if (!ix.profiles.some(p => p.id === back.id)) { await JT.showProfiles(); return; }
    await JT.Store.openProfile(back.id);
    JT.afterProfileOpen();
    if (back.error) {
      JT.Sync.status[back.id] = { state: 'signin' };
      if (!back.silent) JT.ui.toast(googleError(back.error));
      return;
    }
    const r = await JT.Sync.now();
    if (!back.silent) JT.ui.toast(r.ok ? '✓ Connected to Google Drive — progress synced' : 'Connected, but syncing failed: ' + (r.error ? r.error.message : r.reason));
  }
  const googleError = e => e === 'access_denied' ? 'Google sign-in was cancelled.'
    : e === 'no-drive' ? 'Sync needs permission to use the app\'s storage in your Google Drive — please tick it when you sign in.'
      : 'Google sign-in didn\'t work (' + e + ').';

  // Web app: work offline and install to the home screen.
  function registerServiceWorker() {
    if (!('serviceWorker' in navigator) || !/^https?:$/.test(location.protocol) || location.hostname === '127.0.0.1') return;
    navigator.serviceWorker.register('sw.js').catch(e => console.warn('offline cache unavailable', e));
  }
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); JT.installPrompt = e; JT.emit('installable'); });

  async function boot() {
    await JT.Store.init();
    JT.applyTheme();
    R.build();
    registerServiceWorker();
    JT.Audio.init().then(ok => { if (ok && JT.Store.currentProfile() && currentView === 'home') JT.go('home'); });
    await JT.Google.init();
    const back = await JT.Google.handleRedirect();
    if (back) await afterGoogle(back);
    else await JT.showProfiles();
  }

  window.addEventListener('error', e => console.error('Uncaught', e.error || e.message));
  boot();
})();
