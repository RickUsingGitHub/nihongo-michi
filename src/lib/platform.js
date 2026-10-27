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

  // Text size for this device (Settings → Display): a multiplier on every font size via the --ts CSS variable.
  // Phones start a little larger.
  const TS_KEY = 'jt-text-size';
  P.defaultTextSize = P.device === 'phone' ? 1.1 : 1;
  P.textSize = () => {
    let v = NaN;
    try { v = parseFloat(localStorage.getItem(TS_KEY)); } catch (e) { /* storage blocked */ }
    return v >= 0.8 && v <= 1.6 ? v : P.defaultTextSize;
  };
  P.setTextSize = (v, save) => {
    if (document.documentElement) document.documentElement.style.setProperty('--ts', String(v));
    if (save) try { localStorage.setItem(TS_KEY, String(v)); } catch (e) { /* storage blocked */ }
  };
  P.setTextSize(P.textSize());
  JT.platform = P;
})();
