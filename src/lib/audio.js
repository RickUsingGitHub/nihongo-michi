/* Japanese speech (Windows OneCore voices through the Electron helper, or the Web Speech API),
 * sound effects and microphone recording for shadowing practice. */
(function () {
  const JT = (window.JT = window.JT || {});
  const cache = new Map();
  let current = null;       // currently playing HTMLAudioElement
  let currentBtn = null;
  let seq = 0;              // bumped by every speak/stop; a request that is no longer the latest stays silent
  let warned = false;
  let actx = null;

  const A = {
    available: false,
    mode: null,
    voices: [],
    jaVoices: [],
    webVoices: [],

    async init() {
      this.available = false;
      this.mode = null;
      if (window.api && window.api.ttsVoices) {
        try {
          this.voices = (await window.api.ttsVoices()) || [];
          this.jaVoices = this.voices.filter(v => /^ja/i.test(v.lang));
          if (this.jaVoices.length) { this.mode = 'native'; this.available = true; }
        } catch (e) { console.warn('tts voices failed', e); }
      }
      if (!this.available && 'speechSynthesis' in window) {
        const vs = await webVoices();
        this.webVoices = vs.filter(v => /^ja/i.test(v.lang));
        if (this.webVoices.length) {
          this.mode = 'web';
          this.available = true;
          // iPhones only let a page speak after speech has started from a tap; a silent utterance on the
          // first tap allows the automatic prompts later on
          const unlock = () => {
            const u = new SpeechSynthesisUtterance(' ');
            u.volume = 0;
            speechSynthesis.speak(u);
            document.removeEventListener('pointerdown', unlock, true);
          };
          document.addEventListener('pointerdown', unlock, true);
          this.jaVoices = this.webVoices.map(v => ({ id: v.voiceURI, name: v.name, lang: v.lang }));
        }
      }
      JT.emit('audio-ready', this.available);
      return this.available;
    },

    // How to add a Japanese voice on this kind of device.
    voiceHelp() {
      const P = JT.platform || {};
      if (P.desktop) return {
        where: 'this PC', short: 'Windows needs its Japanese voice installed: Settings → Time & language → Speech → Add voices → Japanese. Then restart this app.',
        steps: ['Open Windows Settings → Time & language → Speech.', 'Under "Manage voices", click Add voices.',
          'Search for Japanese, tick "Japanese (Japan)" and click Add.', 'Once it has installed, click "Check again" below (or restart the app).']
      };
      if (P.ios) return {
        where: 'this iPhone', short: 'Add a Japanese voice: Settings → Accessibility → Spoken Content → Voices → Japanese. Then reopen this app.',
        steps: ['Open the Settings app → Accessibility → Spoken Content → Voices.', 'Tap Japanese and download a voice (for example Kyoko).',
          'Come back here and tap "Check again" (or close and reopen the app).']
      };
      if (P.android) return {
        where: 'this phone', short: 'Add Japanese to your phone\'s text-to-speech: Settings → Languages & input → Text-to-speech → Install voice data → Japanese.',
        steps: ['Open Settings → System → Languages & input → Text-to-speech output.', 'Tap the gear next to the speech engine → Install voice data → Japanese.',
          'Come back here and tap "Check again" (or close and reopen the app).']
      };
      return {
        where: 'this browser', short: 'This browser has no Japanese voice. Chrome or Edge usually include one, or add a Japanese voice in your system\'s speech settings.',
        steps: ['Try the app in Chrome or Edge, which usually include a Japanese voice.', 'Or add a Japanese voice in your computer\'s speech settings, then reload.']
      };
    },

    stop() {
      seq++;
      if (current) { try { current.pause(); } catch (e) { /* ignore */ } current = null; }
      if ('speechSynthesis' in window) speechSynthesis.cancel();
      if (currentBtn) { currentBtn.classList.remove('playing'); currentBtn = null; }
    },

    // Speaks course markup (or plain Japanese). Resolves when playback ends.
    async speak(markup, opts = {}) {
      const text = JT.T ? JT.T.ttsText(markup) : String(markup);
      if (!text) return;
      if (!this.available) {
        if (!warned && !opts.silent) {
          warned = true;
          JT.ui && JT.ui.toast(`No Japanese voice on ${this.voiceHelp().where} yet — see Settings → Audio to add one (free).`);
        }
        return;
      }
      this.stop();
      const my = seq;
      const set = JT.state.settings;
      // Slow mode = slower synthesis plus a pitch-preserving time-stretch on playback. The engine
      // alone barely lengthens a single syllable (あ goes from 0.11 s to 0.18 s), which sounds the same.
      const rate = Math.max(0.5, (opts.slow ? 0.55 : opts.rate || 1) * (set.rate || 1));
      const playback = opts.slow ? 0.7 : 1;
      if (opts.btn) { currentBtn = opts.btn; opts.btn.classList.add('playing'); }
      try {
        if (this.mode === 'native') {
          const voice = set.voice || (this.jaVoices[0] && this.jaVoices[0].id);
          // SSML pins each kanji word to the course reading; the plain text is the fallback
          const ssml = JT.T ? JT.T.ttsSsml(markup) : '';
          const key = voice + '|' + rate.toFixed(2) + '|' + (ssml || text);
          let url = cache.get(key);
          if (!url) {
            const b64 = await window.api.ttsSpeak(text, rate, voice, ssml);
            const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
            url = URL.createObjectURL(new Blob([bytes], { type: 'audio/wav' }));
            if (cache.size > 400) { const first = cache.keys().next().value; URL.revokeObjectURL(cache.get(first)); cache.delete(first); }
            cache.set(key, url);
          }
          // something else was spoken (or speech stopped) while this was being prepared
          if (my !== seq) return;
          await new Promise(resolve => {
            const a = new Audio(url);
            a.preservesPitch = true;
            a.playbackRate = playback;
            current = a;
            a.onended = a.onerror = () => resolve();
            a.play().catch(() => resolve());
          });
        } else {
          await new Promise(resolve => {
            // browser voices don't take reading hints, so speak the readings themselves
            const u = new SpeechSynthesisUtterance((JT.T && JT.T.ttsReading(markup)) || text);
            u.lang = 'ja-JP';
            u.rate = rate * playback;
            const v = this.webVoices.find(x => x.voiceURI === set.voice) || this.webVoices[0];
            if (v) u.voice = v;
            u.onend = u.onerror = () => resolve();
            speechSynthesis.speak(u);
          });
        }
      } catch (e) {
        console.warn('speak failed', e);
      } finally {
        if (opts.btn) opts.btn.classList.remove('playing');
      }
    },

    sfx(kind) {
      if (!JT.state.settings.sfx) return;
      try {
        actx = actx || new (window.AudioContext || window.webkitAudioContext)();
        const t = actx.currentTime;
        const tone = (f, start, dur, type = 'sine', vol = 0.12) => {
          const o = actx.createOscillator(), g = actx.createGain();
          o.type = type; o.frequency.value = f;
          g.gain.setValueAtTime(0, t + start);
          g.gain.linearRampToValueAtTime(vol, t + start + 0.01);
          g.gain.exponentialRampToValueAtTime(0.0001, t + start + dur);
          o.connect(g); g.connect(actx.destination);
          o.start(t + start); o.stop(t + start + dur + 0.02);
        };
        if (kind === 'good') { tone(784, 0, 0.12); tone(1175, 0.09, 0.22); }
        else if (kind === 'bad') { tone(196, 0, 0.18, 'triangle', 0.16); tone(165, 0.12, 0.25, 'triangle', 0.14); }
        else if (kind === 'done') { [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.1, 0.3)); }
        else if (kind === 'tap') { tone(1400, 0, 0.04, 'sine', 0.05); }
      } catch (e) { /* audio context unavailable */ }
    }
  };

  function webVoices() {
    return new Promise(resolve => {
      let vs = speechSynthesis.getVoices();
      if (vs.length) return resolve(vs);
      const done = () => resolve(speechSynthesis.getVoices());
      speechSynthesis.onvoiceschanged = done;
      setTimeout(done, 1200);
    });
  }

  // Microphone recording for "record yourself and compare" (shadowing).
  const Rec = {
    rec: null, chunks: [], stream: null,
    async start() {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.chunks = [];
      this.rec = new MediaRecorder(this.stream);
      this.rec.ondataavailable = e => this.chunks.push(e.data);
      this.rec.start();
    },
    stop() {
      return new Promise(resolve => {
        if (!this.rec) return resolve(null);
        this.rec.onstop = () => {
          const blob = new Blob(this.chunks, { type: this.rec.mimeType || 'audio/webm' });
          this.stream.getTracks().forEach(t => t.stop());
          this.rec = null;
          resolve(URL.createObjectURL(blob));
        };
        this.rec.stop();
      });
    },
    get active() { return !!this.rec; }
  };

  JT.Audio = A;
  JT.Rec = Rec;
})();
