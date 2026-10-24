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
  };

  async function boot() {
    await JT.Store.init();
    JT.applyTheme();
    R.build();
    JT.Audio.init().then(ok => { if (ok && JT.Store.currentProfile() && currentView === 'home') JT.go('home'); });
    await JT.showProfiles();
  }

  window.addEventListener('error', e => console.error('Uncaught', e.error || e.message));
  boot();
})();
