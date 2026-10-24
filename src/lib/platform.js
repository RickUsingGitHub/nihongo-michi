/* Where the app is running: the Windows desktop app, or the web app in a phone or desktop browser. */
(function () {
  const JT = (window.JT = window.JT || {});
  const ua = navigator.userAgent;
  const P = {
    desktop: !!window.api,
    ios: /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1),
    android: /Android/.test(ua),
    touch: window.matchMedia('(hover: none)').matches,
    standalone: window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true
  };
  P.web = !P.desktop;
  // for wording such as "progress on this phone"
  P.device = P.desktop ? 'computer' : P.ios || P.android ? 'phone' : 'browser';
  JT.platform = P;
})();
