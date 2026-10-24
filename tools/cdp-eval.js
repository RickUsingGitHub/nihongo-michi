// Evaluate JavaScript inside the running desktop app (started with --remote-debugging-port=9333).
//   node tools/cdp-eval.js "JSON.stringify(JT.state.placement)"
//   node tools/cdp-eval.js --file tools/autoplay.js        (evaluate a whole script file)
const expr = process.argv[2] === '--file' ? require('fs').readFileSync(process.argv[3], 'utf8') : process.argv[2];
(async () => {
  const targets = await (await fetch('http://127.0.0.1:9333/json')).json();
  const page = targets.find(t => t.type === 'page');
  if (!page) throw new Error('no page target');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  ws.onmessage = m => {
    const msg = JSON.parse(m.data);
    if (msg.id !== 1) return;
    const r = msg.result;
    if (r.exceptionDetails) console.log('EXCEPTION', JSON.stringify(r.exceptionDetails).slice(0, 800));
    else console.log(typeof r.result.value === 'string' ? r.result.value : JSON.stringify(r.result.value));
    ws.close();
  };
  ws.send(JSON.stringify({ id: 1, method: 'Runtime.evaluate', params: { expression: expr, awaitPromise: true, returnByValue: true } }));
})().catch(e => { console.error(e.message); process.exit(1); });
