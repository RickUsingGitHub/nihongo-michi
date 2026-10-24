// Small acoustic toolkit for tools/tts-check.js: MFCC + DTW distance between two recordings
// (how different the sounds are) and an optional pitch track (for looking at pitch accent).
const SR = 16000, HOP = 160, WIN = 512;

function fft(re, im) {
  const n = re.length;
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) { [re[i], re[j]] = [re[j], re[i]]; [im[i], im[j]] = [im[j], im[i]]; }
  }
  for (let len = 2; len <= n; len <<= 1) {
    const ang = -2 * Math.PI / len, wr = Math.cos(ang), wi = Math.sin(ang);
    for (let i = 0; i < n; i += len) {
      let cr = 1, ci = 0;
      for (let k = 0; k < len / 2; k++) {
        const ar = re[i + k], ai = im[i + k];
        const br = re[i + k + len / 2] * cr - im[i + k + len / 2] * ci;
        const bi = re[i + k + len / 2] * ci + im[i + k + len / 2] * cr;
        re[i + k] = ar + br; im[i + k] = ai + bi;
        re[i + k + len / 2] = ar - br; im[i + k + len / 2] = ai - bi;
        const t = cr * wr - ci * wi; ci = cr * wi + ci * wr; cr = t;
      }
    }
  }
}

const mel = f => 2595 * Math.log10(1 + f / 700);
const NB = 26, NC = 13;
const fbank = (() => {
  const lo = mel(60), hi = mel(7600);
  const pts = Array.from({ length: NB + 2 }, (_, i) => 700 * (10 ** ((lo + (hi - lo) * i / (NB + 1)) / 2595) - 1));
  const bins = pts.map(f => Math.floor((WIN + 1) * f / SR));
  return Array.from({ length: NB }, (_, m) => {
    const w = new Float64Array(WIN / 2 + 1);
    for (let k = bins[m]; k < bins[m + 1]; k++) w[k] = (k - bins[m]) / Math.max(1, bins[m + 1] - bins[m]);
    for (let k = bins[m + 1]; k < bins[m + 2]; k++) w[k] = (bins[m + 2] - k) / Math.max(1, bins[m + 2] - bins[m + 1]);
    return w;
  });
})();

function samples(buf) {
  const d = buf.subarray(buf.indexOf('data') + 8);
  const x = new Float64Array(d.length >> 1);
  for (let i = 0; i < x.length; i++) x[i] = d.readInt16LE(i * 2) / 32768;
  return x;
}

// trims leading/trailing silence
function trim(x) {
  const thr = 0.01;
  let a = 0, b = x.length - 1;
  while (a < b && Math.abs(x[a]) < thr) a++;
  while (b > a && Math.abs(x[b]) < thr) b--;
  return x.subarray(Math.max(0, a - 160), Math.min(x.length, b + 160));
}

function frames(x, withPitch) {
  const out = [];
  const hann = Array.from({ length: WIN }, (_, i) => 0.5 - 0.5 * Math.cos(2 * Math.PI * i / WIN));
  for (let s = 0; s + WIN <= x.length; s += HOP) {
    const re = new Float64Array(WIN), im = new Float64Array(WIN);
    let e = 0;
    for (let i = 0; i < WIN; i++) { re[i] = x[s + i] * hann[i]; e += x[s + i] * x[s + i]; }
    fft(re, im);
    const pw = new Float64Array(WIN / 2 + 1);
    for (let k = 0; k <= WIN / 2; k++) pw[k] = re[k] * re[k] + im[k] * im[k];
    const lm = fbank.map(w => { let t = 1e-10; for (let k = 0; k < w.length; k++) t += w[k] * pw[k]; return Math.log(t); });
    const c = [];
    for (let n = 1; n <= NC; n++) { let t = 0; for (let m = 0; m < NB; m++) t += lm[m] * Math.cos(Math.PI * n * (m + 0.5) / NB); c.push(t); }
    out.push({ c, e: Math.log(e / WIN + 1e-10), f0: withPitch ? pitch(x, s) : 0 });
  }
  return out;
}

// autocorrelation pitch over a 40 ms window; 0 = unvoiced
function pitch(x, s) {
  const N = 640, minL = Math.floor(SR / 400), maxL = Math.floor(SR / 70);
  if (s + N + maxL > x.length) return 0;
  let e0 = 0;
  for (let i = 0; i < N; i++) e0 += x[s + i] * x[s + i];
  if (e0 / N < 1e-4) return 0;
  let best = 0, bl = 0;
  for (let L = minL; L <= maxL; L++) {
    let r = 0, e1 = 0;
    for (let i = 0; i < N; i++) { r += x[s + i] * x[s + i + L]; e1 += x[s + i + L] * x[s + i + L]; }
    const v = r / Math.sqrt(e0 * e1 + 1e-12);
    if (v > best) { best = v; bl = L; }
  }
  return best > 0.6 ? SR / bl : 0;
}

// DTW over MFCCs; returns the mean frame distance along the path, its 90th percentile and the path
function dtw(A, B) {
  const n = A.length, m = B.length;
  const d = (i, j) => { let t = 0; for (let k = 0; k < NC; k++) { const q = A[i].c[k] - B[j].c[k]; t += q * q; } return Math.sqrt(t); };
  const D = Array.from({ length: n + 1 }, () => new Float64Array(m + 1).fill(Infinity));
  const L = Array.from({ length: n + 1 }, () => new Int32Array(m + 1));
  D[0][0] = 0;
  for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) {
    const c = d(i - 1, j - 1);
    let best = D[i - 1][j - 1], bl = L[i - 1][j - 1];
    if (D[i - 1][j] < best) { best = D[i - 1][j]; bl = L[i - 1][j]; }
    if (D[i][j - 1] < best) { best = D[i][j - 1]; bl = L[i][j - 1]; }
    D[i][j] = best + c; L[i][j] = bl + 1;
  }
  // backtrack
  const path = [];
  let i = n, j = m;
  while (i > 0 && j > 0) {
    path.push([i - 1, j - 1]);
    const a = D[i - 1][j - 1], b = D[i - 1][j], c = D[i][j - 1];
    if (a <= b && a <= c) { i--; j--; } else if (b <= c) i--; else j--;
  }
  path.reverse();
  const costs = path.map(([a, b]) => d(a, b)).sort((x, y) => x - y);
  return { dist: D[n][m] / L[n][m], p90: costs[Math.floor(costs.length * 0.9)] || 0, path };
}

const st = f => 12 * Math.log2(f / 100);
// pitch difference in semitones along the aligned path (only where both are voiced), with the
// speaker's average removed so only the shape (the accent pattern) counts
function pitchDiff(A, B, path) {
  const pairs = path.filter(([i, j]) => A[i].f0 && B[j].f0).map(([i, j]) => [st(A[i].f0), st(B[j].f0)]);
  if (pairs.length < 5) return null;
  const ma = pairs.reduce((s, p) => s + p[0], 0) / pairs.length, mb = pairs.reduce((s, p) => s + p[1], 0) / pairs.length;
  return pairs.reduce((s, p) => s + Math.abs((p[0] - ma) - (p[1] - mb)), 0) / pairs.length;
}

// coarse contour: mean semitone pitch in N equal slices of the voiced frames
function contour(F, n = 6) {
  const v = F.filter(f => f.f0).map(f => st(f.f0));
  if (v.length < n) return v.map(x => x.toFixed(1)).join(' ');
  const out = [];
  for (let k = 0; k < n; k++) {
    const sl = v.slice(Math.floor(k * v.length / n), Math.floor((k + 1) * v.length / n));
    out.push(sl.reduce((a, b) => a + b, 0) / sl.length);
  }
  const m = out.reduce((a, b) => a + b, 0) / n;
  return out.map(x => (x - m >= 0 ? '+' : '') + (x - m).toFixed(1)).join(' ');
}

function analyse(buf, withPitch) { return frames(trim(samples(buf)), withPitch); }
// a and b are WAV buffers or analysed frames
function compare(a, b, withPitch) {
  const A = Array.isArray(a) ? a : analyse(a, withPitch), B = Array.isArray(b) ? b : analyse(b, withPitch);
  const { dist, p90, path } = dtw(A, B);
  return { dist, p90, pitch: withPitch ? pitchDiff(A, B, path) : null, lenA: A.length, lenB: B.length };
}

module.exports = { analyse, compare, dtw, pitchDiff, contour };
