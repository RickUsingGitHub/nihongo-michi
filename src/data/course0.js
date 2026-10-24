/* Level 0 — Survival Starter: real phrases from day one + all of hiragana. */
JT.addLevel({
  n: 0, jlpt: 5, tag: 'Start', icon: '🌱', color: '#2c8a57',
  title: 'Survival Starter', jp: 'サバイバル日本語',
  desc: 'Real phrases from day one: greet, introduce yourself, shop, order food and ask the way — while learning all of hiragana.',
  cando: ['Greet people and say thank you and sorry naturally', 'Introduce yourself', 'Say you don\'t understand and ask people to repeat', 'Use numbers, prices and time', 'Order food and drinks, and ask where things are', 'Read every hiragana character'],
  lessons: [
    {
      id: 'L0-1', icon: '👋', title: 'Hello & Thank You', sub: 'Greetings · あいうえお',
      goals: ['Greet people in the morning, afternoon and evening', 'Say thank you and excuse me like a local', 'Read あ い う え お'],
      kana: 'あいうえお',
      words: [
        'こんにちは|hello / good afternoon|Used from late morning until evening. The final は is read "wa".',
        'おはよう ございます|good morning (polite)|With friends just say おはよう.',
        'こんばんは|good evening',
        'ありがとう ございます|thank you (polite)|With friends: ありがとう.',
        'すみません|excuse me / sorry / thanks for the trouble|The most useful word in Japan!',
        'どうぞ|here you go / please, go ahead',
        'はい|yes',
        'いいえ|no / not at all',
        'じゃあ、 また|see you (casual)',
        'さようなら|goodbye|Sounds quite final — people often use じゃあ、また instead.',
        'おやすみなさい|good night'
      ],
      grammar: [
        { t: 'Polite vs. casual', x: 'Japanese changes depending on who you talk to. <b>ございます</b> makes a greeting polite. Use polite forms with strangers, shop staff, teachers and anyone older; short forms with friends and family.', e: [['おはよう ございます。', 'Good morning. (polite)'], ['おはよう！', 'Morning! (casual)'], ['ありがとう ございます。', 'Thank you. (polite)'], ['ありがとう！', 'Thanks! (casual)']] },
        { t: 'すみません — the Swiss-army word', x: '<b>すみません</b> means "excuse me" (to get attention), "sorry" (a small apology) and even "thank you" when someone has gone to some trouble for you. When in doubt, it is almost always appropriate.', e: [['すみません！', 'Excuse me! (calling a waiter)'], ['あ、 すみません。', 'Oh, sorry. (bumping into someone)']] }
      ],
      dialog: {
        title: 'Morning at the apartment', lines: [
          ['Tanaka', 'おはよう ございます。', 'Good morning.'],
          ['You', 'あ、 おはよう ございます。', 'Oh, good morning.'],
          ['Tanaka', 'はい、 どうぞ。', '(handing you a letter that fell) Here you go.'],
          ['You', 'あ、 すみません。 ありがとう ございます。', 'Oh, sorry. Thank you very much.'],
          ['Tanaka', 'いいえ。', 'Not at all.'],
          ['You', 'じゃあ、 また。', 'See you.']
        ]
      },
      note: { t: 'Bowing and いらっしゃいませ', x: 'A small nod of the head goes with greetings. In shops you will hear staff call out <b>いらっしゃいませ</b> ("welcome!"). Customers don\'t reply to it — a small nod is plenty.' },
      ex: [
        { resp: 'おはよう ございます！', npcEn: '(8 a.m., your neighbor)', a: 'おはよう ございます。', o: ['こんばんは。', 'おやすみなさい。'], why: 'Mirror the greeting — it\'s morning.' },
        { mc: 'It\'s 7 p.m. and you meet a colleague. What do you say?', a: 'こんばんは。', o: ['おはよう ございます。', 'さようなら。', 'おやすみなさい。'], why: 'こんばんは is "good evening".' },
        { mc: 'Someone holds a door open for you. A natural response is…', a: 'すみません。', o: ['いいえ。', 'さようなら。', 'こんばんは。'], why: 'すみません works as a grateful "sorry for the trouble".' },
        { mean: 'ありがとう ございます。', a: 'Thank you very much.', o: ['Excuse me.', 'Good night.', 'See you later.'] },
        { resp: 'はい、 どうぞ。', npcEn: 'Here you go. (handing you a pen)', a: 'ありがとう ございます。', o: ['おはよう ございます。', 'こんばんは。'], why: 'Say thank you when you receive something.' },
        { say: 'ありがとう ございます。', en: 'Thank you (polite).' },
        { say: 'すみません。', en: 'Excuse me.' }
      ],
      convo: 'morning-neighbor'
    },
    {
      id: 'L0-2', icon: '🤝', title: 'Nice to Meet You', sub: 'Self-introductions · かきくけこ',
      goals: ['Introduce yourself with your name and country', 'Ask someone\'s name politely', 'Ask yes/no questions with か', 'Read か き く け こ'],
      kana: 'かきくけこ',
      words: [
        'はじめまして|nice to meet you|Only for the very first meeting.',
        'わたし|I, me',
        '～ です|am / is / are (polite)|Sounds like "dess" — the u is almost silent.',
        'よろしく おねがいします|pleased to meet you / please treat me well|Said at the end of a self-introduction.',
        'お名前[なまえ] は？|what\'s your name?|お shows respect for the other person.',
        '～ さん|Mr. / Ms. (after a name)|Never use it with your own name!',
        'そう です|that\'s right',
        '日本[にほん]|Japan',
        '～人[じん]|person from ~ (nationality)|アメリカ人 = an American',
        'アメリカ|USA',
        'イギリス|UK',
        'オーストラリア|Australia',
        'カナダ|Canada',
        'こちら こそ|likewise / the pleasure is mine'
      ],
      grammar: [
        { t: 'わたし は ＿ です — I am ＿', x: '<b>は</b> (read <b>wa</b> here!) marks the topic: "as for me…". <b>です</b> is like "am / is / are". Japanese drops "I" when it\'s obvious, so <b>＿ です</b> alone is very natural.', e: [['わたし は エマ です。', 'I am Emma.'], ['エマ です。', 'I\'m Emma. (more natural!)'], ['アメリカ人[じん] です。', 'I\'m American.']] },
        { t: 'Questions with か', x: 'Add <b>か</b> to the end of a sentence to make it a question — no change in word order. Raise your voice a little at the end.', e: [['アメリカ人[じん] です か。', 'Are you American?'], ['はい、 そう です。', 'Yes, that\'s right.'], ['いいえ、 カナダ人[じん] です。', 'No, I\'m Canadian.']] },
        { t: 'Names and さん', x: 'Japanese put the family name first. Add <b>さん</b> to <i>other</i> people\'s names (family or first name) — never to your own.', e: [['田中[たなか] さん', 'Mr./Ms. Tanaka'], ['スミス です。', 'I\'m Smith. (no さん!)']] }
      ],
      dialog: {
        title: 'At a welcome party', lines: [
          ['Tanaka', 'はじめまして。 田中[たなか] です。', 'Nice to meet you. I\'m Tanaka.'],
          ['Emma', 'はじめまして。 エマ です。', 'Nice to meet you. I\'m Emma.'],
          ['Tanaka', 'エマ さん は アメリカ人[じん] です か。', 'Emma, are you American?'],
          ['Emma', 'いいえ、 イギリス人[じん] です。 よろしく おねがいします。', 'No, I\'m British. Pleased to meet you.'],
          ['Tanaka', 'こちら こそ、 よろしく おねがいします。', 'Likewise, pleased to meet you.']
        ], me: 'Emma'
      },
      note: { t: 'The self-introduction formula', x: 'Japanese self-introductions (<b>自己紹介</b>, jikoshōkai) follow a set pattern: <b>はじめまして</b> → your name → (where you\'re from / what you do) → <b>よろしくおねがいします</b>. Add a small bow at the end. In business, cards are exchanged with both hands.' },
      ex: [
        { fill: 'わたし ＿ エマ です。', a: 'は', o: ['か', 'さん'], en: 'I am Emma.', why: 'は marks the topic "I".' },
        { build: 'はじめまして。 スミス です。', en: 'Nice to meet you. I\'m Smith.' },
        { resp: 'お名前[なまえ] は？', npcEn: 'What\'s your name?', a: 'エマ です。', o: ['エマ さん です。', 'はい、 そう です。'], why: 'Never add さん to your own name.' },
        { mc: 'You finish introducing yourself. What do you add?', a: 'よろしく おねがいします。', o: ['おやすみなさい。', 'すみません。', 'さようなら。'] },
        { mean: 'カナダ人[じん] です か。', a: 'Are you Canadian?', o: ['I am Canadian.', 'Is this Canada?', 'Where is Canada?'] },
        { resp: 'オーストラリア人[じん] です か。', npcEn: 'Are you Australian?', a: 'はい、 そう です。', o: ['はい、 そう です か。', 'こちら こそ。'] },
        { say: 'はじめまして。', en: 'Nice to meet you.' },
        { say: 'よろしく おねがいします。', en: 'Pleased to meet you.' }
      ],
      convo: 'self-intro'
    },
    {
      id: 'L0-3', icon: '🆘', title: 'Help! Survival Phrases', sub: 'When you don\'t understand · さしすせそ',
      goals: ['Say you don\'t understand', 'Ask people to repeat or slow down', 'Ask if someone speaks English', 'Read さ し す せ そ'],
      kana: 'さしすせそ',
      words: [
        'わかりません|I don\'t understand / I don\'t know',
        'わかりました|I understand / got it / OK',
        'もう いちど|once more',
        'おねがいします|please (when asking for something)',
        'ゆっくり|slowly',
        '英語[えいご]|English (language)',
        '日本語[にほんご]|Japanese (language)',
        'ちょっと|a little / a moment',
        '待[ま]って ください|please wait',
        '大丈夫[だいじょうぶ] です|it\'s OK / I\'m fine / no thanks',
        '少[すこ]し|a little (bit)',
        '話[はな]せます か|can (you) speak…?'
      ],
      grammar: [
        { t: '＿ おねがいします — please (do) ＿', x: 'Put what you want before <b>おねがいします</b> to make a polite request. It works for things AND actions.', e: [['もう いちど おねがいします。', 'Once more, please.'], ['ゆっくり おねがいします。', 'Slowly, please.'], ['英語[えいご] おねがいします。', 'In English, please. (e.g. an English menu)']] },
        { t: '＿ が 話[はな]せます か — Can you speak ＿?', x: '<b>話せますか</b> means "can (you) speak?". Put the language before it with <b>が</b> — or leave the が out in casual speech.', e: [['英語[えいご]、 話[はな]せます か。', 'Can you speak English?'], ['日本語[にほんご] が 少[すこ]し 話[はな]せます。', 'I can speak a little Japanese.']] }
      ],
      dialog: {
        title: 'The point-card question', lines: [
          ['Clerk', 'ポイント カード は お持[も]ち です か。', 'Do you have a point card?'],
          ['You', 'すみません、 わかりません。', 'Sorry, I don\'t understand.'],
          ['Clerk', 'ポイント カード…', 'Point card…'],
          ['You', 'もう いちど、 ゆっくり おねがいします。', 'Once more, slowly please.'],
          ['Clerk', 'ポ・イ・ン・ト カード、 あります か。', 'Do you have a po-int card?'],
          ['You', 'あ、 わかりました！ いいえ、 大丈夫[だいじょうぶ] です。', 'Ah, got it! No, I\'m fine.']
        ]
      },
      note: { t: 'ちょっと… — the polite "no"', x: 'Japanese often avoid a blunt "no". Trailing off with <b>ちょっと…</b> ("it\'s a bit…") is a soft refusal everyone understands. Likewise <b>大丈夫です</b> ("I\'m fine") is the standard way to decline a plastic bag, a point card or a receipt.' },
      ex: [
        { resp: 'ポイント カード は お持[も]ち です か。', npcEn: '(spoken very fast) Do you have a point card?', a: 'すみません、 もう いちど おねがいします。', o: ['はじめまして。', 'おやすみなさい。'], why: 'Ask them to repeat.' },
        { mc: 'How do you ask someone to speak slowly?', a: 'ゆっくり おねがいします。', o: ['ちょっと 待[ま]って ください。', 'わかりました。', 'どうぞ。'] },
        { mc: 'The cashier offers a plastic bag but you don\'t need one.', a: '大丈夫[だいじょうぶ] です。', o: ['わかりません。', 'おねがいします。', 'はじめまして。'], why: '大丈夫です politely declines.' },
        { mean: '日本語[にほんご] が 少[すこ]し 話[はな]せます。', a: 'I can speak a little Japanese.', o: ['I can\'t speak Japanese.', 'Do you speak Japanese?', 'Japanese is difficult.'] },
        { build: '英語[えいご] が 話[はな]せます か。', en: 'Can you speak English?' },
        { say: 'わかりません。', en: 'I don\'t understand.' },
        { say: 'もう いちど おねがいします。', en: 'Once more, please.' }
      ],
      convo: 'dont-understand'
    },
    {
      id: 'L0-4', icon: '👉', title: 'This, That & What?', sub: 'Pointing and asking · たちつてと',
      goals: ['Point at things: this, that, that over there', 'Ask "What is this?"', 'Ask for things with ください', 'Read た ち つ て と'],
      kana: 'たちつてと',
      words: [
        'これ|this (near me)',
        'それ|that (near you)',
        'あれ|that (over there)',
        'どれ|which one?',
        '何[なん]|what|Read なん before です, なに in most other places.',
        'ください|please give me',
        'ちがいます|that\'s not right / no',
        'いい です ね|that\'s nice / sounds good',
        'いい です|it\'s fine / no thanks (with a hand wave!)',
        'お土産[みやげ]|souvenir',
        '食[た]べ物[もの]|food',
        '飲[の]み物[もの]|drink'
      ],
      grammar: [
        { t: 'これ・それ・あれ・どれ', x: 'Japanese has three distances: <b>これ</b> (near me), <b>それ</b> (near you), <b>あれ</b> (far from both of us). <b>どれ</b> asks "which one?"', e: [['これ は 何[なん] です か。', 'What is this?'], ['それ は お土産[みやげ] です。', 'That is a souvenir.'], ['あれ は 何[なん] です か。', 'What is that (over there)?']] },
        { t: '＿ を ください — Please give me ＿', x: '<b>を</b> (said "o") marks the thing you want; <b>ください</b> = "please give me". In shops you can simply point and say <b>これ を ください</b>.', e: [['これ を ください。', 'This one, please.'], ['あれ を ください。', 'That one over there, please.']] }
      ],
      dialog: {
        title: 'At a souvenir shop', lines: [
          ['You', 'すみません、 これ は 何[なん] です か。', 'Excuse me, what is this?'],
          ['Clerk', 'それ は おまんじゅう です。 お土産[みやげ] です よ。', 'That\'s manjū (a sweet bun). It\'s a popular souvenir.'],
          ['You', '食[た]べ物[もの] です か。', 'Is it food?'],
          ['Clerk', 'はい、 そう です。 あまい です よ。', 'Yes, it is. It\'s sweet.'],
          ['You', 'いい です ね！ これ を ください。', 'Nice! This one, please.'],
          ['Clerk', 'ありがとう ございます。', 'Thank you very much.']
        ]
      },
      note: { t: 'Omiyage culture', x: 'Japanese bring <b>お土産</b> (omiyage — usually boxed local sweets) back from trips for coworkers and friends. Every station and tourist spot sells beautifully wrapped boxes made for sharing, each piece individually wrapped.' },
      ex: [
        { fill: 'これ ＿ 何[なん] です か。', a: 'は', o: ['を', 'か'], en: 'What is this?' },
        { fill: 'これ ＿ ください。', a: 'を', o: ['は', 'か'], en: 'This one, please.' },
        { mc: 'The item is near the shop clerk, not you. "What is that?"', a: 'それ は 何[なん] です か。', o: ['これ は 何[なん] です か。', 'あれ は 何[なん] です か。', 'どれ です か。'] },
        { build: 'あれ は 何[なん] です か。', en: 'What is that over there?' },
        { resp: 'これ です か。', npcEn: '(pointing at the wrong box) This one?', a: 'いいえ、 ちがいます。 それ です。', o: ['はい、 ちがいます。', 'どうぞ。'], why: 'ちがいます = "that\'s not it".' },
        { say: 'これ を ください。', en: 'This one, please.' }
      ],
      convo: 'souvenir-shop'
    },
    {
      id: 'L0-5', icon: '🔢', title: 'Numbers & Phone Numbers', sub: '0–10 · なにぬねの',
      goals: ['Count from 0 to 10', 'Say and understand phone numbers', 'Read な に ぬ ね の'],
      kana: 'なにぬねの',
      words: [
        'ゼロ|zero|Also れい.',
        'いち|one',
        'に|two',
        'さん|three',
        'よん|four|Also し — but し sounds like "death", so よん is safer.',
        'ご|five',
        'ろく|six',
        'なな|seven|Also しち.',
        'はち|eight',
        'きゅう|nine|Also く.',
        'じゅう|ten',
        '電話[でんわ] 番号[ばんごう]|phone number',
        'LINE[ライン]|LINE (Japan\'s main messaging app)'
      ],
      grammar: [
        { t: 'Reading phone numbers', x: 'Read each digit separately and say <b>の</b> for the dash. Mobile numbers start with 0 (ゼロ).', e: [['ゼロ きゅう ゼロ の いち に さん よん の ご ろく なな はち', '090-1234-5678'], ['電話[でんわ] 番号[ばんごう] は 何[なん] です か。', 'What\'s your phone number?']] },
        { t: 'Two ways to say 4, 7 and 9', x: '4 = <b>よん</b> or し, 7 = <b>なな</b> or しち, 9 = <b>きゅう</b> or く. Use よん, なな and きゅう when counting or reading numbers — し sounds like 死 (death) and く like 苦 (suffering)! You\'ll meet the other forms in times and dates.', e: [['いち、 に、 さん、 よん、 ご', '1, 2, 3, 4, 5'], ['ろく、 なな、 はち、 きゅう、 じゅう', '6, 7, 8, 9, 10']] }
      ],
      dialog: {
        title: 'Exchanging numbers', lines: [
          ['Ken', '電話[でんわ] 番号[ばんごう] は 何[なん] です か。', 'What\'s your phone number?'],
          ['You', 'ゼロ はち ゼロ の さん ご きゅう に の なな いち よん ろく です。', 'It\'s 080-3592-7146.'],
          ['Ken', 'ゼロ はち ゼロ の… すみません、 もう いちど おねがいします。', '080-… Sorry, once more please.'],
          ['You', 'ゼロ はち ゼロ の さん ご きゅう に の なな いち よん ろく。', '080-3592-7146.'],
          ['Ken', 'わかりました。 ありがとう！ LINE[ライン] も おねがいします。', 'Got it. Thanks! And your LINE too, please.']
        ]
      },
      note: { t: 'LINE, not phone numbers', x: 'Most people in Japan message on <b>LINE</b>. Instead of swapping numbers, friends say <b>LINE、交換しませんか</b> ("shall we exchange LINE?") and scan each other\'s QR codes.' },
      ex: [
        { mean: 'ゼロ きゅう ゼロ の よん よん さん に の なな ご いち はち', a: '090-4432-7518', o: ['090-7718-4432', '080-4432-7518', '090-4432-1518'] },
        { mc: 'The safest way to say "4" when reading a number aloud:', a: 'よん', o: ['し', 'ろく', 'く'] },
        { mc: 'How do you say 7?', a: 'なな', o: ['はち', 'きゅう', 'ろく'] },
        { mc: 'How do you say 9?', a: 'きゅう', o: ['じゅう', 'ご', 'いち'] },
        { build: '電話[でんわ] 番号[ばんごう] は 何[なん] です か。', en: 'What is your phone number?' },
        { say: '電話[でんわ] 番号[ばんごう] は 何[なん] です か。', en: 'What is your phone number?' }
      ],
      convo: 'exchange-numbers'
    },
    {
      id: 'L0-6', icon: '💴', title: 'Prices & Paying', sub: 'How much? · はひふへほ',
      goals: ['Ask how much something costs', 'Understand prices up to 99,999 yen', 'Pay by card or cash', 'Read は ひ ふ へ ほ'],
      kana: 'はひふへほ',
      words: [
        'ひゃく|hundred',
        'せん|thousand',
        'まん|ten thousand|Japanese counts big numbers in units of 10,000!',
        '～円[えん]|yen|Pronounced "en", not "yen".',
        'いくら|how much',
        '高[たか]い|expensive',
        '安[やす]い|cheap',
        'カード|card',
        '現金[げんきん]|cash',
        'レシート|receipt',
        '袋[ふくろ]|bag',
        'おつり|change (money back)'
      ],
      grammar: [
        { t: 'Building numbers 11–99,999', x: 'Combine like Lego: じゅう<b>いち</b> (10+1 = 11), <b>に</b>じゅう (2×10 = 20), にじゅう<b>ご</b> (25). Hundreds and thousands work the same way, but watch the sound changes: <b>さんびゃく</b> (300), <b>ろっぴゃく</b> (600), <b>はっぴゃく</b> (800), <b>さんぜん</b> (3,000), <b>はっせん</b> (8,000). 10,000 is <b>いちまん</b>.', e: [['にじゅうご', '25'], ['ひゃく ごじゅう 円[えん]', '150 yen'], ['さんびゃく 円[えん]', '300 yen'], ['せん はっぴゃく 円[えん]', '1,800 yen'], ['いちまん 円[えん]', '10,000 yen']] },
        { t: 'いくら です か — How much is it?', x: 'Point and ask <b>これ は いくら です か</b>. The answer is a number + <b>円</b>.', e: [['これ は いくら です か。', 'How much is this?'], ['ななひゃく 円[えん] です。', 'It\'s 700 yen.']] }
      ],
      dialog: {
        title: 'At a market stall', lines: [
          ['You', 'すみません、 これ は いくら です か。', 'Excuse me, how much is this?'],
          ['Clerk', 'それ は さんびゃく ごじゅう 円[えん] です。', 'That\'s 350 yen.'],
          ['You', 'じゃあ、 これ を ください。 カード で いい です か。', 'Then this one, please. Is a card OK?'],
          ['Clerk', 'すみません、 現金[げんきん] だけ です。', 'Sorry, cash only.'],
          ['You', 'わかりました。 はい、 せん 円[えん] です。', 'OK. Here\'s 1,000 yen.'],
          ['Clerk', 'ろっぴゃく ごじゅう 円[えん] の おつり です。', 'Here\'s your 650 yen change.']
        ]
      },
      note: { t: 'The money tray', x: 'At the register, put your money on the small tray (<b>カルトン</b>) instead of handing it over. Card and IC-card payments are everywhere in cities, but small restaurants and market stalls may be <b>現金だけ</b> (cash only).' },
      ex: [
        { mean: 'さんびゃく 円[えん] です。', a: 'It\'s 300 yen.', o: ['It\'s 3,000 yen.', 'It\'s 30 yen.', 'It\'s 600 yen.'] },
        { mean: 'はっせん 円[えん]', a: '8,000 yen', o: ['800 yen', '80 yen', '80,000 yen'] },
        { mc: 'How do you say 600?', a: 'ろっぴゃく', o: ['ろくひゃく', 'ろっせん', 'ろくまん'] },
        { mean: 'いちまん ごせん 円[えん]', a: '15,000 yen', o: ['1,500 yen', '150,000 yen', '10,500 yen'] },
        { resp: 'せん にひゃく 円[えん] です。', npcEn: 'That\'ll be 1,200 yen.', a: 'カード で いい です か。', o: ['いくら です か。', 'はじめまして。'], why: 'You already know the price — now ask about paying by card.' },
        { build: 'これ は いくら です か。', en: 'How much is this?' },
        { say: 'いくら です か。', en: 'How much is it?' }
      ],
      convo: 'konbini'
    },
    {
      id: 'L0-7', icon: '🗺️', title: 'Where Is…?', sub: 'Finding places · まみむめも',
      goals: ['Ask where places are', 'Understand here / there / over there', 'Follow simple directions: left, right, straight', 'Read ま み む め も'],
      kana: 'まみむめも',
      words: [
        'どこ|where',
        'ここ|here',
        'そこ|there (near you)',
        'あそこ|over there',
        'トイレ|toilet / restroom',
        'お手洗[てあら]い|restroom (polite)',
        '駅[えき]|station',
        '右[みぎ]|right',
        '左[ひだり]|left',
        'まっすぐ|straight ahead',
        'コンビニ|convenience store',
        '近[ちか]く|nearby'
      ],
      grammar: [
        { t: '＿ は どこ です か — Where is ＿?', x: 'The most useful travel question. Start with すみません to get attention.', e: [['すみません、 トイレ は どこ です か。', 'Excuse me, where is the restroom?'], ['駅[えき] は どこ です か。', 'Where is the station?'], ['あそこ です。', 'It\'s over there.']] },
        { t: 'ここ・そこ・あそこ・どこ', x: 'The same pattern as これ・それ・あれ, but for places: <b>ここ</b> here, <b>そこ</b> there (near you), <b>あそこ</b> over there, <b>どこ</b> where?', e: [['トイレ は ここ です。', 'The restroom is here.'], ['右[みぎ] です。', 'It\'s on the right.'], ['まっすぐ です。', 'It\'s straight ahead.']] }
      ],
      dialog: {
        title: 'Looking for the restroom', lines: [
          ['You', 'すみません、 トイレ は どこ です か。', 'Excuse me, where is the restroom?'],
          ['Staff', 'トイレ です か。 あそこ です。', 'The restroom? It\'s over there.'],
          ['You', 'あそこ… 右[みぎ] です か。', 'Over there… on the right?'],
          ['Staff', 'いいえ、 左[ひだり] です。 まっすぐ、 左[ひだり] です。', 'No, on the left. Straight ahead, then left.'],
          ['You', 'わかりました。 ありがとう ございます。', 'Got it. Thank you.']
        ]
      },
      note: { t: 'Restrooms in Japan', x: 'Free, clean restrooms are in every station, park and convenience store (just ask: <b>トイレ、借りてもいいですか</b>). Signs say トイレ or お手洗い. On high-tech toilets look for <b>流す</b> (flush) and <b>止</b> (stop)! Men\'s rooms are marked <b>男</b>, women\'s <b>女</b> — kanji you\'ll learn soon.' },
      ex: [
        { fill: 'トイレ ＿ どこ です か。', a: 'は', o: ['を', 'か'], en: 'Where is the restroom?' },
        { mc: 'How do you say "over there"?', a: 'あそこ', o: ['ここ', 'そこ', 'どこ'] },
        { mean: '駅[えき] は まっすぐ です。', a: 'The station is straight ahead.', o: ['The station is on the left.', 'Where is the station?', 'The station is over there.'] },
        { resp: 'お手洗[てあら]い は あそこ です。', npcEn: 'The restroom is over there.', a: 'ありがとう ございます。', o: ['どこ です か。', 'いくら です か。'] },
        { build: 'すみません、 駅[えき] は どこ です か。', en: 'Excuse me, where is the station?' },
        { say: 'トイレ は どこ です か。', en: 'Where is the toilet?' }
      ],
      convo: 'where-toilet'
    },
    {
      id: 'L0-8', icon: '🍜', title: 'Food & Drink', sub: 'Ordering · やゆよ らりるれろ わをん',
      goals: ['Order food and drinks politely', 'Say the magic words before and after eating', 'Ask for the bill', 'Read the rest of basic hiragana'],
      kana: 'やゆよらりるれろわをん',
      words: [
        '水[みず]|water',
        'お茶[ちゃ]|(green) tea',
        'コーヒー|coffee',
        'ビール|beer',
        'ごはん|cooked rice / meal',
        'ラーメン|ramen',
        'すし|sushi',
        'メニュー|menu',
        'おいしい|delicious',
        'いただきます|"I humbly receive" (said before eating)',
        'ごちそうさま でした|"thank you for the meal" (said after eating)',
        'お会計[かいけい]|the bill, the check',
        'ひとつ|one (thing)',
        'ふたつ|two (things)'
      ],
      grammar: [
        { t: '＿ を おねがいします — ordering', x: 'In restaurants, <b>＿ を おねがいします</b> is the polite way to order. Add a number with <b>ひとつ</b> (one) or <b>ふたつ</b> (two) after the particle.', e: [['ラーメン を おねがいします。', 'Ramen, please.'], ['ビール を ふたつ おねがいします。', 'Two beers, please.'], ['お会計[かいけい] おねがいします。', 'The check, please.']] },
        { t: '＿ と ＿ — A and B', x: '<b>と</b> joins nouns: "A and B". (It doesn\'t join sentences.)', e: [['すし と お茶[ちゃ] を おねがいします。', 'Sushi and tea, please.'], ['コーヒー と 水[みず]', 'coffee and water']] }
      ],
      dialog: {
        title: 'At a ramen shop', lines: [
          ['Staff', 'いらっしゃいませ！ 何名[なんめい] 様[さま] です か。', 'Welcome! How many people?'],
          ['You', 'ひとり です。', 'Just one.'],
          ['Staff', 'こちら へ どうぞ。', 'This way, please.'],
          ['You', 'すみません、 ラーメン と ビール を おねがいします。', 'Excuse me, ramen and a beer, please.'],
          ['Staff', 'はい、 かしこまりました。', 'Certainly.'],
          ['You', 'いただきます！ … おいしい！', 'Let\'s eat! … Delicious!'],
          ['You', 'ごちそうさま でした。 お会計[かいけい] おねがいします。', 'Thank you for the meal. The check, please.']
        ]
      },
      note: { t: 'Ticket machines & no tipping', x: 'Many ramen and gyūdon shops have a ticket machine (<b>券売機</b>) at the door: pay, take your ticket and hand it to the staff. Saying <b>ごちそうさまでした</b> as you leave makes the staff happy. Tipping is not done in Japan — it can even cause confusion.' },
      ex: [
        { fill: 'ビール ＿ おねがいします。', a: 'を', o: ['と', 'は'], en: 'A beer, please.' },
        { fill: 'すし ＿ お茶[ちゃ]', a: 'と', o: ['を', 'は'], en: 'sushi and tea' },
        { mc: 'What do you say right before you start eating?', a: 'いただきます。', o: ['ごちそうさま でした。', 'おねがいします。', 'すみません。'] },
        { mc: 'What do you say after the meal?', a: 'ごちそうさま でした。', o: ['いただきます。', 'いらっしゃいませ。', 'はじめまして。'] },
        { resp: 'ご注文[ちゅうもん] は？', npcEn: 'Your order?', a: 'ラーメン を ひとつ おねがいします。', o: ['ごちそうさま でした。', 'ラーメン は どこ です か。'] },
        { build: 'コーヒー を ふたつ おねがいします。', en: 'Two coffees, please.' },
        { say: 'お会計[かいけい] おねがいします。', en: 'The check, please.' }
      ],
      convo: 'ramen-shop'
    },
    {
      id: 'L0-9', icon: '🕒', title: 'Voiced Sounds & Time', sub: 'が ざ だ ば ぱ · telling the time',
      goals: ['Read voiced kana: が ざ だ ば ぱ rows', 'Ask and tell the time', 'Talk about today, tomorrow and yesterday'],
      kana: 'がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ',
      words: [
        '今[いま]|now',
        '～時[じ]|… o\'clock',
        '～分[ふん]|… minutes|ふん or ぷん depending on the number',
        '半[はん]|half (past)',
        '何時[なんじ]|what time',
        '午前[ごぜん]|a.m.',
        '午後[ごご]|p.m.',
        '今日[きょう]|today',
        '明日[あした]|tomorrow',
        '昨日[きのう]|yesterday',
        '～ごろ|about (a time)',
        '時間[じかん]|time / hours'
      ],
      grammar: [
        { t: 'Dakuten ゛ and handakuten ゜', x: 'Two little dashes (<b>゛</b>) make a sound "voiced": か→<b>が</b>, さ→<b>ざ</b>, た→<b>だ</b>, は→<b>ば</b>. A small circle (<b>゜</b>) turns the は row into <b>ぱ</b>. じ/ぢ both sound "ji" and ず/づ both sound "zu" — ぢ and づ are rare.', e: [['かき → かぎ', 'kaki (persimmon) → kagi (key)'], ['はん → ばん → ぱん', 'han → ban → pan']] },
        { t: 'Telling the time', x: 'Number + <b>時</b> = o\'clock. Watch out: 4時 = <b>よじ</b>, 7時 = <b>しちじ</b>, 9時 = <b>くじ</b>. Add <b>半</b> for "half past".', e: [['今[いま]、 何時[なんじ] です か。', 'What time is it now?'], ['4時[よじ] です。', 'It\'s 4 o\'clock.'], ['7時[しちじ] 半[はん] です。', 'It\'s 7:30.'], ['午後[ごご] 9時[くじ] です。', 'It\'s 9 p.m.']] },
        { t: 'Minutes: ふん or ぷん', x: '1 <b>いっぷん</b>, 2 にふん, 3 <b>さんぷん</b>, 4 <b>よんぷん</b>, 5 ごふん, 6 <b>ろっぷん</b>, 7 ななふん, 8 <b>はっぷん</b>, 9 きゅうふん, 10 <b>じゅっぷん</b>. Don\'t panic — people will understand you either way!', e: [['10時[じゅうじ] 15分[じゅうごふん]', '10:15'], ['2時[にじ] 20分[にじゅっぷん]', '2:20']] }
      ],
      dialog: {
        title: 'Before the movie', lines: [
          ['Ken', '今[いま]、 何時[なんじ] です か。', 'What time is it now?'],
          ['You', 'えっと… 2時[にじ] 45分[よんじゅうごふん] です。', 'Um… it\'s 2:45.'],
          ['Ken', 'え！ 映画[えいが] は 3時[さんじ] です よ！', 'What! The movie is at 3!'],
          ['You', '大丈夫[だいじょうぶ] です。 まだ 15分[じゅうごふん] あります。', 'It\'s fine. We still have 15 minutes.'],
          ['Ken', 'じゃあ、 行[い]きましょう！', 'Then let\'s go!']
        ]
      },
      note: { t: 'Trains on time — to the minute', x: 'Japanese trains leave on the exact minute shown. Timetables use the 24-hour clock: 15:30 = 午後3時半. Being 5 minutes early is "on time" for meetings.' },
      ex: [
        { mean: '4時[よじ] 半[はん] です。', a: 'It\'s 4:30.', o: ['It\'s 4:00.', 'It\'s 7:30.', 'It\'s 14:00.'] },
        { mc: 'How do you say 9 o\'clock?', a: 'くじ', o: ['きゅうじ', 'くうじ', 'きゅじ'] },
        { mc: 'How do you say 7 o\'clock?', a: 'しちじ', o: ['ななじ', 'なのじ', 'しじ'] },
        { fill: '今[いま]、 ＿ です か。', a: '何時[なんじ]', o: ['どこ', 'いくら'], en: 'What time is it now?' },
        { resp: '今[いま]、 何時[なんじ] です か。', npcEn: 'What time is it now?', a: '3時[さんじ] 半[はん] です。', o: ['3円[さんえん] です。', 'あそこ です。'] },
        { build: '午後[ごご] 2時[にじ] 半[はん] です。', en: 'It\'s 2:30 p.m.' },
        { say: '今[いま]、 何時[なんじ] です か。', en: 'What time is it now?' }
      ],
      convo: 'what-time'
    },
    {
      id: 'L0-10', icon: '✨', title: 'Combos, Small っ & Long Vowels', sub: 'きゃ しゅ ちょ · the last hiragana rules',
      goals: ['Read combination sounds like きゃ, しゅ, ちょ', 'Hear and read small っ and long vowels', 'Tell apart words like びょういん and びよういん'],
      kana: 'きゃきゅきょしゃしゅしょちゃちゅちょにゃにゅにょひゃひゅひょみゃみゅみょりゃりゅりょぎゃぎゅぎょじゃじゅじょびゃびゅびょぴゃぴゅぴょ',
      words: [
        '切手[きって]|(postage) stamp',
        '学校[がっこう]|school',
        '旅行[りょこう]|trip, travel',
        '写真[しゃしん]|photo',
        '病院[びょういん]|hospital',
        '美容院[びよういん]|hair salon|Compare 病院 — long vowels and small ょ change the meaning!',
        'おばあさん|grandmother / elderly woman',
        'おばさん|aunt / middle-aged woman',
        '東京[とうきょう]|Tokyo',
        '京都[きょうと]|Kyoto',
        '一緒[いっしょ] に|together',
        'ちょうど|exactly, just'
      ],
      grammar: [
        { t: 'Combination sounds: きゃ きゅ きょ', x: 'An い-column kana + a <b>small</b> ゃ ゅ ょ blends into one sound: き + ゃ = <b>きゃ</b> (kya). Size matters: きや (ki-ya) is two beats, きゃ (kya) is one.', e: [['しゃしん', 'photo (sha-shin)'], ['とうきょう', 'Tokyo (to-u-kyo-u)']] },
        { t: 'Small っ — the pause', x: 'A small <b>っ</b> doubles the next consonant: freeze your mouth for one beat before it. <b>きて</b> (kite, "come") vs <b>きって</b> (kitte, "stamp").', e: [['きって', 'stamp'], ['がっこう', 'school'], ['いっしょ に', 'together']] },
        { t: 'Long vowels', x: 'Holding a vowel for 2 beats changes the meaning! In hiragana: あ-row + あ, い-row + い, う-row + う, え-row + い (usually), お-row + う (usually). Katakana uses a bar: <b>ー</b>.', e: [['おばさん → おばあさん', 'aunt → grandmother'], ['びよういん → びょういん', 'hair salon → hospital'], ['コーヒー', 'coffee (ko-o-hi-i)']] }
      ],
      dialog: {
        title: 'Weekend plans', lines: [
          ['Yui', '旅行[りょこう] は どこ です か。', 'Where is your trip to?'],
          ['You', '京都[きょうと] です。 明日[あした] です。', 'Kyoto. It\'s tomorrow.'],
          ['Yui', 'いい です ね！ 写真[しゃしん]、 おねがいします ね。', 'How nice! Send me photos, OK?'],
          ['You', 'はい！ 一緒[いっしょ] に どう です か。', 'Sure! How about coming along?'],
          ['Yui', '明日[あした] は ちょっと…', 'Tomorrow is a bit…'],
          ['You', 'そう です か。 じゃあ、 また！', 'I see. Well, see you!']
        ]
      },
      note: { t: 'Japanese rhythm: count the beats', x: 'Every kana is one beat (a <i>mora</i>). とうきょう is 4 beats: to-u-kyo-u. Small っ and long vowels each take a full beat. Clapping the beats while you speak is a great way to get them right — and to sound much more natural.' },
      ex: [
        { mc: 'Which word means "hospital"?', a: 'びょういん', o: ['びよういん', 'びょいん', 'びよいん'] },
        { mc: 'How do you write "gakkō" (school)?', a: 'がっこう', o: ['がこう', 'がつこう', 'がっこ'] },
        { mean: 'おばあさん', a: 'grandmother / elderly woman', o: ['aunt', 'mother', 'older sister'] },
        { mc: '"Tokyo" in hiragana is…', a: 'とうきょう', o: ['ときょう', 'とうきよう', 'とおきょお'] },
        { mc: '"Kyoto" in hiragana is…', a: 'きょうと', o: ['きようと', 'きょと', 'きょうとう'] },
        { say: '一緒[いっしょ] に どう です か。', en: 'How about (doing it) together?' }
      ],
      convo: 'taxi-ride'
    }
  ]
});
