/* Level 1 — Everyday Basics: katakana, です/の/も, numbers in kanji, time and dates. */
JT.addLevel({
  n: 1, jlpt: 5, tag: 'N5·1', icon: '🏮', color: '#2e4a7d',
  title: 'Everyday Basics', jp: '毎日の基本',
  desc: 'Read katakana, talk about people and things, ask what, who and whose, and handle numbers, time and dates — with your first kanji.',
  cando: ['Read katakana loanwords on menus and signs', 'Talk about jobs, nationality and family', 'Ask what, who, whose and which', 'Read kanji numbers, prices, days and times', 'React naturally in conversation with ね, よ and aizuchi'],
  lessons: [
    {
      id: 'L1-1', icon: '💼', title: 'Katakana I & Jobs', sub: 'A is (not) B · アイウエオ〜ソ',
      goals: ['Say what you do and where you\'re from', 'Make negative sentences with じゃありません', 'Ask what and who', 'Read katakana ア〜ソ'],
      kana: 'アイウエオカキクケコサシスセソ',
      words: [
        '学生[がくせい]|student',
        '先生[せんせい]|teacher (also used for doctors)',
        '会社員[かいしゃいん]|company employee, office worker',
        '医者[いしゃ]|doctor',
        'エンジニア|engineer',
        '仕事[しごと]|job, work',
        '大学[だいがく]|university',
        '～ じゃ ありません|is not (polite)',
        'だれ|who',
        'あの 人[ひと]|that person',
        '友[とも]だち|friend',
        'アルバイト|part-time job'
      ],
      grammar: [
        { t: 'A は B じゃありません — A is not B', x: 'To negate です, use <b>じゃありません</b> in speech or <b>ではありません</b> in writing. A softer, very common version is <b>じゃないです</b>.', e: [['わたし は 学生[がくせい] じゃ ありません。', 'I am not a student.'], ['田中[たなか] さん は 先生[せんせい] じゃ ありません。', 'Mr. Tanaka is not a teacher.'], ['医者[いしゃ] じゃ ない です。', 'I\'m not a doctor. (softer)']] },
        { t: 'Question words: 何[なに]・だれ', x: 'Put the question word where the answer would go — no change in word order.', e: [['お仕事[しごと] は 何[なん] です か。', 'What do you do (for work)?'], ['あの 人[ひと] は だれ です か。', 'Who is that person?'], ['エンジニア です。', 'I\'m an engineer.']] },
        { t: 'Katakana: the loanword alphabet', x: 'Katakana writes foreign words, foreign names and emphasis. The sounds are the same as hiragana but the shapes are sharper and straighter — many come from parts of kanji.', e: [['アイス', 'ice cream / ice'], ['ケーキ', 'cake'], ['スキー', 'skiing']] }
      ],
      dialog: {
        title: 'At an izakaya with coworkers', lines: [
          ['Sato', 'あの 人[ひと] は だれ です か。', 'Who is that person?'],
          ['You', 'キム さん です。 わたし の 友[とも]だち です。', 'That\'s Kim. My friend.'],
          ['Sato', 'キム さん は 学生[がくせい] です か。', 'Is Kim a student?'],
          ['You', 'いいえ、 学生[がくせい] じゃ ありません。 エンジニア です。', 'No, not a student. An engineer.'],
          ['Sato', 'そう です か。 お仕事[しごと] は？', 'I see. And what do you do?'],
          ['You', '英語[えいご] の 先生[せんせい] です。', 'I\'m an English teacher.']
        ]
      },
      note: { t: 'Avoid あなた', x: 'Textbooks teach <b>あなた</b> as "you", but in real life it can sound distant or even rude (it\'s also what wives traditionally call husbands!). Use the person\'s name + さん instead: 田中さんは学生ですか。 Also, "what do you do?" is often answered with the company name: <b>ソニーです</b>.' },
      ex: [
        { fill: 'わたし は 医者[いしゃ] ＿。', a: 'じゃ ありません', o: ['です か', 'を ください'], en: 'I am not a doctor.' },
        { build: 'あの 人[ひと] は だれ です か。', en: 'Who is that person?' },
        { mean: 'わたし は 会社員[かいしゃいん] です。', a: 'I am a company employee.', o: ['I am a student.', 'My friend is an engineer.', 'I am not a doctor.'] },
        { resp: 'お仕事[しごと] は 何[なん] です か。', npcEn: 'What do you do?', a: 'エンジニア です。', o: ['はい、 そう です。', 'いいえ、 だれ です か。'] },
        { mc: '"She is not a teacher."', a: '先生[せんせい] じゃ ありません。', o: ['先生[せんせい] です。', '先生[せんせい] じゃ ありません か。', '先生[せんせい] は だれ です か。'] },
        { say: '学生[がくせい] じゃ ありません。', en: 'I\'m not a student.' }
      ],
      convo: 'party-jobs'
    },
    {
      id: 'L1-2', icon: '👜', title: 'Whose Is It?', sub: 'の · この/その/あの · タ〜ホ',
      goals: ['Say whose something is with の', 'Use この / その / あの + noun', 'Read katakana タ〜ホ'],
      kana: 'タチツテトナニヌネノハヒフヘホ',
      words: [
        'かばん|bag',
        '傘[かさ]|umbrella',
        '財布[さいふ]|wallet',
        '鍵[かぎ]|key',
        'スマホ|smartphone',
        '時計[とけい]|watch, clock',
        '靴[くつ]|shoes',
        'ペン|pen',
        'ノート|notebook',
        'パソコン|computer (PC)',
        'この|this ~ (+ noun)',
        'その|that ~ (+ noun)',
        'あの|that ~ over there (+ noun)',
        'だれ の|whose'
      ],
      grammar: [
        { t: 'の — possession and connection', x: '<b>A の B</b> = "A\'s B" or "B of A". It links two nouns. <b>わたしの</b> alone means "mine".', e: [['わたし の かばん', 'my bag'], ['田中[たなか] さん の 傘[かさ]', 'Tanaka\'s umbrella'], ['日本[にほん] の 車[くるま]', 'a Japanese car'], ['だれ の スマホ です か。', 'Whose smartphone is it?']] },
        { t: 'この・その・あの + noun', x: 'これ / それ / あれ stand alone. When you add a noun, switch to <b>この</b> / <b>その</b> / <b>あの</b>.', e: [['これ は わたし の です。', 'This is mine.'], ['この 傘[かさ] は わたし の です。', 'This umbrella is mine.'], ['あの 時計[とけい] は いくら です か。', 'How much is that clock over there?']] }
      ],
      dialog: {
        title: 'Lost and found', lines: [
          ['Staff', 'すみません、 この 傘[かさ] は だれ の です か。', 'Excuse me, whose umbrella is this?'],
          ['You', 'あ、 わたし の です！', 'Oh, it\'s mine!'],
          ['Staff', 'この 財布[さいふ] も です か。', 'This wallet too?'],
          ['You', 'いいえ、 それ は わたし の じゃ ありません。', 'No, that\'s not mine.'],
          ['Staff', 'そう です か。 じゃあ、 どうぞ。', 'I see. Well, here you go.'],
          ['You', 'ありがとう ございます！', 'Thank you!']
        ]
      },
      note: { t: 'Japan returns lost things', x: 'Japan is famous for returning lost property — wallets often come back with every yen inside. If you lose something, ask at the station\'s <b>忘れ物</b> (lost & found) counter or a <b>交番</b> (police box).' },
      ex: [
        { fill: 'これ は わたし ＿ かばん です。', a: 'の', o: ['は', 'を'], en: 'This is my bag.' },
        { fill: '＿ 時計[とけい] は いくら です か。', a: 'あの', o: ['あれ', 'あそこ'], en: 'How much is that clock over there?', why: 'Before a noun, use あの (not あれ).' },
        { build: 'この 傘[かさ] は だれ の です か。', en: 'Whose umbrella is this?' },
        { mean: 'それ は 先生[せんせい] の ペン です。', a: 'That is the teacher\'s pen.', o: ['This is my pen.', 'Is that the teacher\'s pen?', 'The teacher has a pen.'] },
        { resp: 'この スマホ は だれ の です か。', npcEn: 'Whose smartphone is this?', a: 'あ、 わたし の です。', o: ['はい、 スマホ です。', 'どこ です か。'] },
        { say: 'わたし の です。', en: 'It\'s mine.' }
      ],
      convo: 'lost-found'
    },
    {
      id: 'L1-3', icon: '👨‍👩‍👧', title: 'Family & も', sub: 'Family words · マ〜ン',
      goals: ['Talk about your family — and ask about someone else\'s', 'Say "also" with も', 'Read katakana マ〜ン'],
      kana: 'マミムメモヤユヨラリルレロワヲン',
      words: [
        '家族[かぞく]|family',
        '父[ちち]|(my) father',
        '母[はは]|(my) mother',
        'お父[とう]さん|(someone\'s) father / Dad',
        'お母[かあ]さん|(someone\'s) mother / Mom',
        '兄[あに]|(my) older brother',
        '姉[あね]|(my) older sister',
        'お兄[にい]さん|(someone\'s) older brother',
        'お姉[ねえ]さん|(someone\'s) older sister',
        '弟[おとうと]|younger brother',
        '妹[いもうと]|younger sister',
        '兄弟[きょうだい]|siblings',
        '子[こ]ども|child',
        '～ も|too, also'
      ],
      grammar: [
        { t: 'My family vs. your family', x: 'Use humble words for <i>your own</i> family when talking to others (<b>父</b>, <b>母</b>, <b>兄</b>) and polite words for <i>other people\'s</i> family (<b>お父さん</b>, <b>お母さん</b>, <b>お兄さん</b>). At home, you call your own parents お父さん / お母さん directly.', e: [['父[ちち] は 会社員[かいしゃいん] です。', 'My father is an office worker.'], ['お母[かあ]さん は 先生[せんせい] です か。', 'Is your mother a teacher?']] },
        { t: 'も — also, too', x: 'Replace <b>は</b> (or が / を) with <b>も</b> to say "also".', e: [['わたし は 学生[がくせい] です。 キム さん も 学生[がくせい] です。', 'I\'m a student. Kim is a student too.'], ['わたし も！', 'Me too!']] }
      ],
      dialog: {
        title: 'A family photo', lines: [
          ['Yui', 'これ は エマ さん の 家族[かぞく] です か。', 'Is this your family, Emma?'],
          ['Emma', 'はい。 父[ちち] と 母[はは] と 弟[おとうと] です。', 'Yes. My father, mother and younger brother.'],
          ['Yui', 'お父[とう]さん の お仕事[しごと] は？', 'What does your father do?'],
          ['Emma', '父[ちち] は 医者[いしゃ] です。 母[はは] も 医者[いしゃ] です。', 'My father is a doctor. My mother is a doctor too.'],
          ['Yui', 'すごい です ね！', 'That\'s amazing!'],
          ['Emma', 'ゆい さん は 兄弟[きょうだい] が います か。', 'Yui, do you have any siblings?'],
          ['Yui', 'いいえ、 一人[ひとり]っ子[こ] です。', 'No, I\'m an only child.']
        ], me: 'Emma'
      },
      note: { t: 'Calling strangers "big sister"', x: 'Age matters in Japanese, so there are separate words for older and younger siblings. Family words are also used for strangers: shop staff may call a young man <b>お兄さん</b> and a young woman <b>お姉さん</b>, and children call adults おじさん / おばさん.' },
      ex: [
        { fill: '母[はは] は 先生[せんせい] です。 父[ちち] ＿ 先生[せんせい] です。', a: 'も', o: ['は', 'の'], en: 'My mother is a teacher. My father is also a teacher.' },
        { mc: 'Talking about YOUR OWN mother to a coworker:', a: '母[はは]', o: ['お母[かあ]さん', 'お姉[ねえ]さん', '母[はは] さん'] },
        { mc: 'Asking about a friend\'s older brother:', a: 'お兄[にい]さん', o: ['兄[あに]', '弟[おとうと]', '兄[あに] さん'] },
        { build: 'わたし も 学生[がくせい] です。', en: 'I am a student too.' },
        { mean: '妹[いもうと] は 大学[だいがく] の 学生[がくせい] です。', a: 'My younger sister is a university student.', o: ['My older sister is a teacher.', 'Is your sister a student?', 'My little brother is at university.'] },
        { say: 'わたし も！', en: 'Me too!' }
      ],
      convo: 'family-photo'
    },
    {
      id: 'L1-4', icon: '🍔', title: 'Katakana Power: Loanwords', sub: 'ガ〜ポ · ティ ファ · fast food',
      goals: ['Read voiced katakana and special combos like ティ and ファ', 'Decode English loanwords', 'Order at a fast-food counter'],
      kana: 'ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポティディファフィフェフォウィウェシェチェジェ',
      words: [
        'ホテル|hotel',
        'レストラン|restaurant',
        'スーパー|supermarket',
        'デパート|department store',
        'タクシー|taxi',
        'バス|bus',
        'テレビ|TV',
        'エアコン|air conditioner',
        'パン|bread',
        'ジュース|juice',
        'ハンバーガー|hamburger',
        'ポテト|fries',
        'セット|set meal, combo',
        'ワイファイ|Wi-Fi',
        'パスワード|password'
      ],
      grammar: [
        { t: 'Cracking loanwords', x: 'Katakana words are foreign words squeezed into Japanese sounds — say them out loud! Tips: <b>ー</b> = long vowel; final consonants get a vowel (bus → バス <i>basu</i>); "-er" endings become ー (computer → コンピューター); long words get shortened (smartphone → スマホ, air conditioner → エアコン).', e: [['コンビニ', 'convenience store'], ['パソコン', 'personal computer'], ['リモコン', 'remote control']] },
        { t: 'Combos for foreign sounds', x: 'Small vowels create sounds Japanese didn\'t have: <b>ティ</b> (ti), <b>ディ</b> (di), <b>ファ</b> (fa), <b>フィ</b> (fi), <b>フェ</b> (fe), <b>フォ</b> (fo), <b>ウィ</b> (wi), <b>シェ</b> (she), <b>チェ</b> (che), <b>ジェ</b> (je).', e: [['パーティー', 'party'], ['カフェ', 'café'], ['フォーク', 'fork']] }
      ],
      dialog: {
        title: 'At a fast-food counter', lines: [
          ['Staff', 'いらっしゃいませ。 店内[てんない] で お召[め]し上[あ]がり です か。', 'Welcome. Is this for here?'],
          ['You', 'はい。 ハンバーガー の セット を ひとつ おねがいします。', 'Yes. One hamburger combo, please.'],
          ['Staff', 'お飲[の]み物[もの] は？', 'And your drink?'],
          ['You', 'コーラ で おねがいします。', 'Cola, please.'],
          ['Staff', 'ポテト の サイズ は？', 'What size fries?'],
          ['You', 'エム で。', 'Medium.'],
          ['Staff', 'かしこまりました。 ワイファイ の パスワード は レシート に あります。', 'Certainly. The Wi-Fi password is on the receipt.']
        ]
      },
      note: { t: 'For here or to go?', x: 'Staff ask <b>店内でお召し上がりですか</b> ("eating in?") or <b>お持ち帰りですか</b> ("taking out?"). Answer with <b>店内で</b> (here) or <b>持ち帰りで</b> / <b>テイクアウトで</b> (to go). Konbini ask the same about bentos.' },
      ex: [
        { mc: '"Coffee" in katakana:', a: 'コーヒー', o: ['コヒー', 'コーヒ', 'ユーヒー'] },
        { mc: '"Party" in katakana:', a: 'パーティー', o: ['パテー', 'パーチー', 'バーティー'] },
        { mc: '"Café" in katakana:', a: 'カフェ', o: ['カフエ', 'カヘ', 'ガフェ'] },
        { resp: 'お飲[の]み物[もの] は？', npcEn: 'And to drink?', a: 'ジュース で おねがいします。', o: ['ハンバーガー です。', 'ホテル です。'] },
        { build: 'ハンバーガー を ひとつ おねがいします。', en: 'One hamburger, please.' },
        { say: 'ワイファイ の パスワード は 何[なん] です か。', en: 'What is the Wi-Fi password?' }
      ],
      convo: 'fast-food'
    },
    {
      id: 'L1-5', icon: '🔟', title: 'Kanji Numbers & Counting', sub: '一 二 三 … 万 円 · ひとつ ふたつ',
      goals: ['Read numbers and prices written in kanji', 'Count things with ひとつ, ふたつ, みっつ…', 'Order several items at a shop'],
      kanji: '一二三四五六七八九十百千万円',
      words: [
        'みっつ|three (things)',
        'よっつ|four (things)',
        'いつつ|five (things)',
        'むっつ|six (things)',
        'ななつ|seven (things)',
        'やっつ|eight (things)',
        'ここのつ|nine (things)',
        'とお|ten (things)',
        'いくつ|how many (things)',
        '全部[ぜんぶ] で|in total',
        '～ だけ|only, just',
        'ケーキ|cake'
      ],
      grammar: [
        { t: 'Kanji numbers', x: 'Kanji numbers appear on menus, price tags and signs. 一 二 三 are just lines. Big numbers stack: 三千五百円 = 3,500 yen. And remember <b>万</b> = 10,000 — the famous 一万円 note.', e: [['三百円[さんびゃくえん]', '300 yen'], ['五千円[ごせんえん]', '5,000 yen'], ['一万円[いちまんえん]', '10,000 yen']] },
        { t: 'Counting things: ひとつ, ふたつ…', x: 'For general things — and ordering food! — use native Japanese counting: ひとつ, ふたつ, みっつ, よっつ, いつつ, むっつ, ななつ, やっつ, ここのつ, とお. Put the number <b>after</b> the thing and its particle.', e: [['りんご を みっつ ください。', 'Three apples, please.'], ['コーヒー を ふたつ おねがいします。', 'Two coffees, please.'], ['いくつ です か。', 'How many?']] }
      ],
      dialog: {
        title: 'At a bakery', lines: [
          ['Clerk', 'いらっしゃいませ。', 'Welcome.'],
          ['You', 'すみません、 この パン を ふたつ と、 あの ケーキ を ひとつ ください。', 'Excuse me, two of these breads and one of those cakes, please.'],
          ['Clerk', 'はい。 全部[ぜんぶ] で 九百八十円[きゅうひゃくはちじゅうえん] です。', 'Sure. That\'s 980 yen in total.'],
          ['You', 'じゃあ、 千円[せんえん] で。', 'Here\'s 1,000 yen, then.'],
          ['Clerk', '二十円[にじゅうえん] の おつり です。 ありがとう ございました。', 'Here\'s 20 yen change. Thank you very much.']
        ]
      },
      note: { t: 'Japanese money', x: 'Coins: 1, 5, 10, 50, 100 and 500 円. Notes: 1,000, 5,000 and 10,000 円. The 5円 coin (<b>ごえん</b>) is considered lucky because it sounds like <b>ご縁</b> ("a bond, fate") — people toss it into shrine offering boxes.' },
      ex: [
        { mean: '三千円[さんぜんえん]', a: '3,000 yen', o: ['300 yen', '30,000 yen', '3 yen'] },
        { mean: '七百円[ななひゃくえん]', a: '700 yen', o: ['7,000 yen', '70 yen', '170 yen'] },
        { mc: '"Two (things)"', a: 'ふたつ', o: ['ふつか', 'ふたり', 'にこ'] },
        { fill: 'りんご を ＿ ください。', a: 'みっつ', o: ['さん', 'みっか'], en: 'Three apples, please.' },
        { resp: '全部[ぜんぶ] で 千二百円[せんにひゃくえん] です。', npcEn: 'That\'s ¥1,200 in total.', a: 'カード で おねがいします。', o: ['いくつ です か。', 'はじめまして。'] },
        { build: 'コーヒー を ふたつ ください。', en: 'Two coffees, please.' }
      ],
      convo: 'bakery'
    },
    {
      id: 'L1-6', icon: '⏰', title: 'Opening Hours & Schedules', sub: 'から・まで · 時 分 半 午 今',
      goals: ['Ask when places open and close', 'Say "from … until …"', 'Read times written in kanji'],
      kanji: '時分半午今',
      words: [
        '朝[あさ]|morning',
        '昼[ひる]|noon, daytime',
        '夜[よる]|night',
        '毎日[まいにち]|every day',
        '～ から|from ~',
        '～ まで|until ~, to ~',
        '休[やす]み|day off, holiday, closed',
        '銀行[ぎんこう]|bank',
        '郵便局[ゆうびんきょく]|post office',
        '図書館[としょかん]|library',
        '会議[かいぎ]|meeting',
        '昼休[ひるやす]み|lunch break'
      ],
      grammar: [
        { t: '～から ～まで — from ~ until ~', x: 'Works with times and places.', e: [['銀行[ぎんこう] は 9時[くじ] から 3時[さんじ] まで です。', 'The bank is open from 9 to 3.'], ['会議[かいぎ] は 何時[なんじ] から です か。', 'What time does the meeting start?'], ['昼休[ひるやす]み は 12時[じゅうにじ] から 1時[いちじ] まで です。', 'Lunch break is from 12 to 1.']] },
        { t: 'Reading time in kanji', x: '<b>時</b> = o\'clock, <b>分</b> = minute, <b>半</b> = half past, <b>午前 / 午後</b> = a.m. / p.m., <b>今</b> = now. Shop doors show <b>営業時間</b> (business hours) and <b>定休日</b> (regular closing day).', e: [['午前[ごぜん] 10時[じゅうじ] 〜 午後[ごご] 8時[はちじ]', '10 a.m. – 8 p.m.'], ['今[いま] 何時[なんじ] です か。', 'What time is it now?']] }
      ],
      dialog: {
        title: 'Asking about opening hours', lines: [
          ['You', 'すみません、 郵便局[ゆうびんきょく] は 何時[なんじ] から です か。', 'Excuse me, what time does the post office open?'],
          ['Staff', '9時[くじ] から です。', 'From 9.'],
          ['You', '何時[なんじ] まで です か。', 'Until what time?'],
          ['Staff', '午後[ごご] 5時[ごじ] まで です。 土曜日[どようび] と 日曜日[にちようび] は 休[やす]み です。', 'Until 5 p.m. It\'s closed on Saturdays and Sundays.'],
          ['You', 'わかりました。 ありがとう ございます。', 'I see. Thank you.']
        ]
      },
      note: { t: 'Business hours in Japan', x: 'Department stores open around 10:00 and close around 20:00; konbini are open 24時間. Banks close at <b>15:00</b>! Post-office and 7-Eleven ATMs accept foreign cards — handy for cash.' },
      ex: [
        { mean: '図書館[としょかん] は 午前[ごぜん] 9時[くじ] から 午後[ごご] 7時[しちじ] まで です。', a: 'The library is open from 9 a.m. to 7 p.m.', o: ['The library opens at 7 a.m.', 'The library is closed from 9 to 7.', 'The library is open until 9 p.m.'] },
        { fill: '銀行[ぎんこう] は 3時[さんじ] ＿ です。', a: 'まで', o: ['から', 'の'], en: 'The bank is open until 3.' },
        { mc: 'What does 半 mean in 4時半?', a: 'half past', o: ['minutes', 'p.m.', 'exactly'] },
        { resp: '会議[かいぎ] は 何時[なんじ] から です か。', npcEn: 'What time does the meeting start?', a: '10時[じゅうじ] から です。', o: ['10時[じゅうじ] です か。', '10円[じゅうえん] です。'] },
        { build: '銀行[ぎんこう] は 何時[なんじ] まで です か。', en: 'Until what time is the bank open?' },
        { say: '何時[なんじ] から です か。', en: 'From what time?' }
      ],
      convo: 'opening-hours'
    },
    {
      id: 'L1-7', icon: '📅', title: 'Days, Weeks & Dates', sub: '月 火 水 木 金 土 日 · birthdays',
      goals: ['Say the days of the week', 'Talk about dates and birthdays', 'Use this week / next week / last week'],
      kanji: '日月火水木金土曜',
      words: [
        '月曜日[げつようび]|Monday',
        '火曜日[かようび]|Tuesday',
        '水曜日[すいようび]|Wednesday',
        '木曜日[もくようび]|Thursday',
        '金曜日[きんようび]|Friday',
        '土曜日[どようび]|Saturday',
        '日曜日[にちようび]|Sunday',
        '何曜日[なんようび]|what day of the week',
        '週末[しゅうまつ]|weekend',
        '今週[こんしゅう]|this week',
        '来週[らいしゅう]|next week',
        '先週[せんしゅう]|last week',
        '誕生日[たんじょうび]|birthday',
        'いつ|when'
      ],
      grammar: [
        { t: 'Days of the week', x: 'Each day is named after a natural element: <b>月</b> moon, <b>火</b> fire, <b>水</b> water, <b>木</b> tree, <b>金</b> gold/money, <b>土</b> earth, <b>日</b> sun. Add <b>曜日</b>.', e: [['今日[きょう] は 何曜日[なんようび] です か。', 'What day is it today?'], ['金曜日[きんようび] です。', 'It\'s Friday.']] },
        { t: 'Months and dates', x: 'Months: number + <b>月[がつ]</b> (4月 = <b>しがつ</b>, 7月 = <b>しちがつ</b>, 9月 = <b>くがつ</b>). Days 1–10 are irregular: <b>ついたち</b>, ふつか, みっか, よっか, いつか, むいか, なのか, ようか, ここのか, とおか. Also 14日 じゅうよっか, 20日 <b>はつか</b>, 24日 にじゅうよっか. Others are number + にち.', e: [['誕生日[たんじょうび] は いつ です か。', 'When is your birthday?'], ['3月[さんがつ] 3日[みっか] です。', 'It\'s March 3rd.'], ['5月[ごがつ] 1日[ついたち]', 'May 1st']] }
      ],
      dialog: {
        title: 'Birthday talk', lines: [
          ['Ken', 'エマ さん の 誕生日[たんじょうび] は いつ です か。', 'Emma, when is your birthday?'],
          ['Emma', '7月[しちがつ] 20日[はつか] です。', 'It\'s July 20th.'],
          ['Ken', 'え、 来週[らいしゅう] です ね！', 'Oh, that\'s next week!'],
          ['Emma', 'はい。 ケン さん は？', 'Yes. How about you, Ken?'],
          ['Ken', 'ぼく は 12月[じゅうにがつ] 25日[にじゅうごにち] です。', 'Mine is December 25th.'],
          ['Emma', 'クリスマス です ね！', 'Christmas!']
        ], me: 'Emma'
      },
      note: { t: 'Big to small', x: 'Japanese dates go from big to small: <b>2026年10月24日</b> (year, month, day). Golden Week (late April – early May), Obon (mid-August) and New Year are the busiest travel times — book early!' },
      ex: [
        { mean: '今日[きょう] は 水曜日[すいようび] です。', a: 'Today is Wednesday.', o: ['Today is Thursday.', 'Tomorrow is Wednesday.', 'What day is it today?'] },
        { mc: 'Which day is 金曜日?', a: 'Friday', o: ['Monday', 'Tuesday', 'Saturday'] },
        { mc: 'The 1st day of the month:', a: 'ついたち', o: ['いちにち', 'ひとつ', 'いちび'] },
        { mc: 'The 20th day of the month:', a: 'はつか', o: ['にじゅうにち', 'ふつか', 'はたち'] },
        { fill: '誕生日[たんじょうび] は ＿ です か。', a: 'いつ', o: ['どこ', 'だれ'], en: 'When is your birthday?' },
        { resp: '今日[きょう] は 何曜日[なんようび] です か。', npcEn: 'What day is it today?', a: '土曜日[どようび] です。', o: ['3時[さんじ] です。', '来週[らいしゅう] です。'] },
        { build: '誕生日[たんじょうび] は 4月[しがつ] 8日[ようか] です。', en: 'My birthday is April 8th.' }
      ],
      convo: 'birthday'
    },
    {
      id: 'L1-8', icon: '🏬', title: 'In Stores & Stations', sub: 'こちら/どちら · floors · 入口 出口',
      goals: ['Find sections and floors in a store', 'Use the polite こちら / そちら / あちら / どちら', 'Read entrance, exit, up, down and inside'],
      kanji: '口入出上下中',
      words: [
        '入口[いりぐち]|entrance',
        '出口[でぐち]|exit',
        '～階[かい]|… floor|1階 いっかい, 3階 さんがい',
        '何階[なんがい]|which floor',
        '上[うえ]|up, above, on top',
        '下[した]|down, below, under',
        '中[なか]|inside',
        'エレベーター|elevator',
        'エスカレーター|escalator',
        '売[う]り場[ば]|section (of a store)',
        'こちら|this way / here (polite)',
        'あちら|over there (polite)',
        'どちら|where / which way (polite)',
        '地下[ちか]|basement, underground'
      ],
      grammar: [
        { t: 'こちら・そちら・あちら・どちら', x: 'Polite versions of ここ / そこ / あそこ / どこ. Staff in shops and hotels use them constantly — you\'ll hear <b>こちらへどうぞ</b> ("this way, please") everywhere.', e: [['トイレ は どちら です か。', 'Where is the restroom? (polite)'], ['あちら です。', 'It\'s over there.'], ['こちら へ どうぞ。', 'This way, please.']] },
        { t: 'Floors: ～階[かい]', x: '1階 <b>いっかい</b>, 2階 にかい, 3階 <b>さんがい</b>, 4階 よんかい, 5階 ごかい, 6階 <b>ろっかい</b>, 8階 <b>はっかい</b>, 10階 <b>じゅっかい</b>. Basement floors: <b>地下1階</b> (B1) — department-store food halls there are called <b>デパ地下</b>!', e: [['靴[くつ] 売[う]り場[ば] は 何階[なんがい] です か。', 'Which floor is the shoe section on?'], ['3階[さんがい] です。', 'It\'s on the 3rd floor.']] }
      ],
      dialog: {
        title: 'In a department store', lines: [
          ['You', 'すみません、 靴[くつ] 売[う]り場[ば] は どちら です か。', 'Excuse me, where is the shoe section?'],
          ['Staff', '靴[くつ] 売[う]り場[ば] は 4階[よんかい] で ございます。', 'The shoe section is on the 4th floor.'],
          ['You', 'エレベーター は どこ です か。', 'Where is the elevator?'],
          ['Staff', 'あちら です。 入口[いりぐち] の 右[みぎ] です。', 'Over there, to the right of the entrance.'],
          ['You', 'あと、 デパ地下[ちか] は…', 'Also, the basement food hall…'],
          ['Staff', '地下[ちか] 1階[いっかい] です。 下[した] の エスカレーター で どうぞ。', 'It\'s B1. Please take the down escalator.']
        ]
      },
      note: { t: 'Picking the right exit', x: '<b>入</b> (enter) and <b>出</b> (exit) are everywhere. Big stations have dozens of exits: 出口A2, <b>北口</b> (north exit), <b>南口</b> (south exit). Choosing the right one can save a 10-minute walk — check the yellow signs.' },
      ex: [
        { mc: 'Which sign means EXIT?', a: '出口[でぐち]', o: ['入口[いりぐち]', '上口[うえぐち]', '中口[なかぐち]'] },
        { mc: 'How do you read 3階?', a: 'さんがい', o: ['さんかい', 'みっかい', 'さんばい'] },
        { mean: 'エレベーター は あちら です。', a: 'The elevator is over there.', o: ['The elevator is here.', 'Where is the elevator?', 'The escalator is downstairs.'] },
        { fill: 'トイレ は ＿ です か。', a: 'どちら', o: ['こちら', 'だれ'], en: 'Where is the restroom? (polite)' },
        { resp: 'いらっしゃいませ。', npcEn: '(in a department store)', a: 'すみません、 靴[くつ] 売[う]り場[ば] は 何階[なんがい] です か。', o: ['いらっしゃいませ。', 'はじめまして。'] },
        { build: '靴[くつ] 売[う]り場[ば] は 何階[なんがい] です か。', en: 'Which floor is the shoe section on?' }
      ],
      convo: 'department-store'
    },
    {
      id: 'L1-9', icon: '💬', title: 'Natural Reactions', sub: 'ね・よ · aizuchi · 人 本',
      goals: ['Invite agreement with ね', 'Share new information with よ', 'React like a native with aizuchi (へえ, なるほど…)'],
      kanji: '人本',
      words: [
        'そう です ね|that\'s right / let me see',
        'そう です か|I see / is that so?',
        'へえ|oh? / wow (interested)',
        'なるほど|I see (that makes sense)',
        '本当[ほんとう] に？|really?',
        'すごい|amazing',
        'えっと|um, let me see',
        'あの|um, excuse me (to start talking)',
        'ええ|yes (softer than はい)',
        'うん|yeah (casual)',
        '本[ほん]|book',
        '日本人[にほんじん]|Japanese person',
        'おもしろい|interesting, funny'
      ],
      grammar: [
        { t: 'ね — seeking agreement', x: '<b>ね</b> at the end is like "…isn\'t it?" / "…right?" It invites agreement and makes you sound warm.', e: [['いい 天気[てんき] です ね。', 'Nice weather, isn\'t it?'], ['そう です ね。', 'It sure is.'], ['おいしい です ね！', 'This is delicious, isn\'t it!']] },
        { t: 'よ — telling something new', x: '<b>よ</b> marks information the listener doesn\'t know yet: "…you know!" Use it gently — too much よ can sound pushy.', e: [['この ラーメン、 おいしい です よ。', 'This ramen is good, you know.'], ['明日[あした] は 休[やす]み です よ。', 'Tomorrow is a day off, you know.']] },
        { t: 'Aizuchi — active listening', x: 'Japanese listeners react constantly while someone talks: <b>はい</b>, <b>ええ</b>, <b>へえ</b>, <b>そうですか</b>, <b>なるほど</b>. Silence can feel like you aren\'t listening! These little words instantly make your Japanese sound more natural.', e: [['へえ、 そう です か！', 'Oh really? I see!'], ['なるほど。', 'That makes sense.']] }
      ],
      dialog: {
        title: 'Small talk at work', lines: [
          ['Sato', 'この 本[ほん]、 おもしろい です よ。', 'This book is interesting, you know.'],
          ['You', 'へえ、 何[なん] の 本[ほん] です か。', 'Oh? What\'s it about?'],
          ['Sato', '日本[にほん] の 歴史[れきし] の 本[ほん] です。', 'It\'s a book on Japanese history.'],
          ['You', 'なるほど。 写真[しゃしん] も たくさん あります ね。', 'I see. It has lots of photos too.'],
          ['Sato', 'そう です ね。 よかったら どうぞ。', 'It does. Borrow it if you like.'],
          ['You', '本当[ほんとう] に？ ありがとう ございます！', 'Really? Thank you!']
        ]
      },
      note: { t: 'Fillers are your friends', x: 'Real conversations are full of fillers like <b>えっと</b>, <b>あの</b> and <b>まあ</b>. Using them while you search for a word sounds natural and buys you time — much better than an English "um"!' },
      ex: [
        { resp: '明日[あした] は 休[やす]み です よ。', npcEn: 'Tomorrow is a day off, you know.', a: 'へえ、 そう です か！', o: ['はじめまして。', 'ごちそうさま でした。'] },
        { resp: 'いい 天気[てんき] です ね。', npcEn: 'Nice weather, isn\'t it?', a: 'そう です ね。', o: ['そう です か。', 'わかりません。'], why: 'Agree with そうですね when someone seeks agreement with ね.' },
        { fill: 'この ケーキ、 おいしい です ＿！', a: 'よ', o: ['か', 'の'], en: '(telling a friend who hasn\'t tried it) This cake is good, you know!' },
        { mc: 'Which ending invites agreement ("…isn\'t it?")', a: 'ね', o: ['よ', 'か', 'を'] },
        { mean: 'なるほど。', a: 'I see. / That makes sense.', o: ['Really?', 'Me too.', 'Excuse me.'] },
        { say: 'へえ、 そう です か。', en: 'Oh, is that so?' }
      ],
      convo: 'small-talk'
    },
    {
      id: 'L1-10', icon: '🏘️', title: 'Review: Meeting the Neighbors', sub: 'Putting Level 1 together',
      goals: ['Introduce yourself to new neighbors', 'Give a small gift politely', 'Understand practical info like garbage days'],
      words: [
        '近所[きんじょ]|neighborhood',
        '隣[となり]|next door',
        'ごみ|garbage',
        'これから|from now on',
        'つまらない もの です が|it\'s just a small thing, but… (giving a gift)',
        'わざわざ|going out of your way',
        'お世話[せわ] に なります|thank you for your help (in advance)',
        '引[ひ]っ越[こ]し|moving (house)'
      ],
      grammar: [
        { t: 'Review: your Level 1 toolkit', x: 'You can now use <b>A は B です / じゃありません</b>, questions with <b>か</b>, <b>の</b>, <b>も</b>, the こ・そ・あ・ど words, numbers, time and dates, and <b>ね / よ</b>. That\'s enough for introductions, shopping and real small talk!', e: [['わたし は イギリス人[じん] の エマ です。', 'I\'m Emma, from the UK.'], ['ごみ は 月曜日[げつようび] と 木曜日[もくようび] です よ。', 'Garbage day is Monday and Thursday, you know.']] }
      ],
      dialog: {
        title: 'Greeting the new neighbors', lines: [
          ['You', 'はじめまして。 隣[となり] の 202[にーまるに] の エマ です。', 'Nice to meet you. I\'m Emma from next door, number 202.'],
          ['Neighbor', 'あ、 はじめまして。 山田[やまだ] です。', 'Oh, nice to meet you. I\'m Yamada.'],
          ['You', 'これ、 つまらない もの です が…', 'This is just a small thing, but…'],
          ['Neighbor', 'わあ、 わざわざ すみません。 ありがとう ございます。', 'Oh, you shouldn\'t have. Thank you.'],
          ['Neighbor', 'あ、 ごみ は 月曜日[げつようび] と 木曜日[もくようび] の 朝[あさ] です よ。', 'Oh, garbage is collected Monday and Thursday mornings.'],
          ['You', '月曜日[げつようび] と 木曜日[もくようび] です ね。 これから よろしく おねがいします。', 'Monday and Thursday. I look forward to being your neighbor.']
        ]
      },
      note: { t: 'Moving-in etiquette', x: 'When moving into a new home, people visit the neighbors with a small gift (towels or sweets) — <b>引っ越しの挨拶</b>. Garbage sorting rules are strict and vary by city: burnable, non-burnable, plastics, cans, bottles, PET… Your city office gives you a chart.' },
      ex: [
        { resp: 'はじめまして。 山田[やまだ] です。', npcEn: 'Nice to meet you. I\'m Yamada.', a: 'はじめまして。 エマ です。 よろしく おねがいします。', o: ['山田[やまだ] さん です か。 わかりません。', 'おやすみなさい。'] },
        { fill: 'ごみ は 月曜日[げつようび] ＿ 木曜日[もくようび] です。', a: 'と', o: ['の', 'も'], en: 'Garbage day is Monday and Thursday.' },
        { mc: 'Handing over a small gift, you say:', a: 'つまらない もの です が…', o: ['いただきます。', 'お会計[かいけい] おねがいします。', 'わかりません。'] },
        { build: 'これから よろしく おねがいします。', en: 'I look forward to our relationship from now on.' },
        { mean: '隣[となり] の 人[ひと] は 先生[せんせい] です。', a: 'The person next door is a teacher.', o: ['My neighbor is a doctor.', 'The teacher lives next door to the station.', 'Is the person next door a teacher?'] },
        { mean: '駅[えき] の 出口[でぐち] は 何時[なんじ] まで です か。', a: 'Until what time is the station exit open?', o: ['Where is the station exit?', 'What time does the station open?', 'Is the station exit upstairs?'] }
      ],
      convo: 'new-neighbor'
    }
  ]
});
