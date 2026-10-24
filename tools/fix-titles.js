// One-off: add furigana to grammar titles in the N5 course files.
const fs = require('fs');
const path = require('path');
const D = path.join(__dirname, '..', 'src', 'data');
const fixes = [
  ['course0.js', "'＿ が 話せますか — Can you speak ＿?'", "'＿ が 話[はな]せます か — Can you speak ＿?'"],
  ['course1.js', "'Question words: 何・だれ'", "'Question words: 何[なに]・だれ'"],
  ['course1.js', "'Floors: ～階'", "'Floors: ～階[かい]'"],
  ['course2.js', "'何か / 何も'", "'何[なに]か / 何[なに]も'"],
  ['course2.js', "'How many times: ～に～回'", "'How many times: ～に～回[かい]'"],
  ['course2.js', "'に 乗ります / を 降ります'", "'に 乗[の]ります / を 降[お]ります'"],
  ['course2.js', "'お疲れ様です — the work greeting'", "'お疲[つか]れ様[さま]です — the work greeting'"],
  ['course3.js', "'N が 好きです'", "'N が 好[す]きです'"],
  ['course3.js', "'上手 vs 得意 — be humble'", "'上手[じょうず] vs 得意[とくい] — be humble'"],
  ['course3.js', "'どんな N が好きですか'", "'どんな N が好[す]きですか'"],
  ['course3.js', "'Age: ～歳'", "'Age: ～歳[さい]'"],
  ['course3.js', "'～の中で ～が一番'", "'～の中[なか]で ～が一番[いちばん]'"],
  ['course4.js', "'知っています vs 知りません'", "'知[し]っています vs 知[し]りません'"],
  ['course4.js', "'～が痛いです'", "'～が痛[いた]いです'"],
  ['course5.js', "'趣味は～ことです & ～のが好き'", "'趣味[しゅみ]は～ことです & ～のが好[す]き'"],
  ['course5.js', "'Dictionary form + 前に — before doing'", "'Dictionary form + 前[まえ]に — before doing'"],
  ['course5.js', "'た-form + 後で — after doing'", "'た-form + 後[あと]で — after doing'"],
  ['course5.js', "'Time + 前 — ago'", "'Time + 前[まえ] — ago'"],
  ['course5.js', "'Plain form + と思います — I think'", "'Plain form + と思[おも]います — I think'"]
];
for (const [f, a, b] of fixes) {
  const p = path.join(D, f);
  const s = fs.readFileSync(p, 'utf8');
  if (!s.includes(a)) { console.log('NOT FOUND', f, a); continue; }
  fs.writeFileSync(p, s.replace(a, b));
}
console.log('done');
