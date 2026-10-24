// Browser self-test: paste into the page console (or run via the preview tool) while a lesson,
// review or test is open. It answers every step (correctly, or wrongly every Nth step) and reports
// problems such as exercises that fail to render.
window.autoplay = async function (opts = {}) {
  const { maxSteps = 400, wrongEvery = 0, delay = 60 } = opts;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const T = JT.T;
  const issues = [];
  const kinds = {};
  let n = 0;
  let lastSpec = null;
  // keep test runs silent: no sound effects, no speech
  JT.state.settings.sfx = false;
  JT.state.settings.autoplay = false;
  JT.Audio.stop();
  for (let i = 0; i < maxSteps; i++) {
    await sleep(delay);
    const foot = document.querySelector('.player-foot');
    if (!foot || foot.classList.contains('hidden')) break;
    const primary = foot.querySelector('.btn.lg');
    if (foot.classList.contains('good') || foot.classList.contains('bad')) { primary.click(); continue; }
    const stage = document.querySelector('.stage');
    const isEx = stage.querySelector('.choices, .type-input, .answer-line, .match-grid');
    if (!isEx) {
      if (primary && /Continue/.test(primary.textContent)) { primary.click(); continue; }
      issues.push('stuck: no exercise and no continue at step ' + i);
      break;
    }
    const { spec, ctrl } = JT.debugStep;
    if (spec === lastSpec) continue;   // already answered; waiting for the player to move on
    lastSpec = spec;
    kinds[spec.kind] = (kinds[spec.kind] || 0) + 1;
    n++;
    const wrong = wrongEvery && n % wrongEvery === 0;
    try {
      if (spec.kind === 'choice') {
        if (!(spec.opts.length >= 2) || spec.ans < 0) issues.push('bad choice spec: ' + JSON.stringify(spec.prompt));
        ctrl.pick(wrong ? (spec.ans + 1) % spec.opts.length : spec.ans);
      } else if (spec.kind === 'type') {
        const inp = stage.querySelector('.type-input');
        inp.value = wrong ? 'zzz' : (spec.kana ? T.reading(spec.answers[0]) : spec.answers[0]);
        inp.dispatchEvent(new Event('input'));
        ctrl.check();
      } else if (spec.kind === 'build') {
        const want = spec.tokens.map(t => T.surface(T.stripTargets(t).replace(/[。、？！?!,.]+$/, ''))).filter(Boolean);
        const tiles = [...stage.querySelectorAll('.tiles:not(.answer-line) .tile')];
        const order = wrong ? want.slice().reverse() : want;
        for (const w of order) {
          const t = tiles.find(x => !x.classList.contains('used') && stripRuby(x) === w);
          if (!t) { issues.push('build tile missing: ' + w + ' in ' + spec.tokens.join(' ')); break; }
          t.click();
        }
        ctrl.check();
        if (!foot.classList.contains('good') && !foot.classList.contains('bad')) { foot.querySelector('.btn.ghost').click(); }
      } else if (spec.kind === 'match') {
        const L = [...stage.querySelectorAll('.match-col')[0].children], R = [...stage.querySelectorAll('.match-col')[1].children];
        for (const a of L) { const b = R.find(x => x.dataset.i === a.dataset.i); a.click(); b.click(); }
      }
    } catch (e) {
      issues.push('error on ' + spec.kind + ': ' + e.message);
      const skip = foot.querySelector('.btn.ghost');
      if (skip) skip.click();
    }
  }
  return { steps: n, kinds, issues };
};
function stripRuby(el) {
  const c = el.cloneNode(true);
  c.querySelectorAll('rt').forEach(r => r.remove());
  return c.textContent;
}
