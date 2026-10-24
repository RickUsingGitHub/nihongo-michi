// Evaluate an expression in a running app's main process (Node inspector on port 9229).
//   node -e "process._debugProcess(<pid>)"   then   node tools/inspect-main.js "<expression>"
const expr = process.argv[2];
(async () => {
  const [t] = await (await fetch('http://127.0.0.1:9229/json')).json();
  const ws = new WebSocket(t.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  ws.onmessage = m => {
    const msg = JSON.parse(m.data);
    if (msg.id !== 1) return;
    const r = msg.result;
    console.log(r.exceptionDetails ? 'EXCEPTION ' + JSON.stringify(r.exceptionDetails).slice(0, 600) : r.result.value);
    ws.close();
  };
  ws.send(JSON.stringify({ id: 1, method: 'Runtime.evaluate', params: { expression: expr, awaitPromise: true, returnByValue: true, includeCommandLineAPI: true } }));
})().catch(e => { console.error(e.message); process.exit(1); });
