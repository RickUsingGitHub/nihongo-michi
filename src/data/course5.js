/* Level 5 — N5 Mastery: experiences, reasons, opinions, plans, and real-world challenges. */
JT.addLevel({
  n: 5, jlpt: 5, tag: 'N5·5', icon: '🎓', color: '#c8402f',
  title: 'N5 Mastery', jp: 'N5の仕上げ',
  desc: 'Complete the N5 toolkit — abilities, experiences, reasons, changes, opinions and plans — then take on phone calls, reservations, signs and menus.',
  cando: ['Talk about what you can do and what you have done', 'Give reasons and say "when…"', 'Describe changes and give opinions', 'Make a restaurant reservation by phone', 'Read essential signs and menus', 'Sit the JLPT N5 with confidence'],
  lessons: [
    {
      id: 'L5-1', icon: '🎸', title: 'Can Do', sub: 'ことができます · 趣味は～ことです',
      goals: ['Say what you can do with ～ことができます', 'Turn verbs into nouns with こと and の', 'Talk about hobbies in more detail'],
      words: [
        '～ こと が できます|can ~',
        'できます|can do, be able to',
        'ピアノ|piano',
        'ギター|guitar',
        '弾[ひ]きます|play (an instrument)',
        '運転[うんてん] します|drive',
        'スキー|skiing',
        '漢字[かんじ]|kanji',
        'ひらがな|hiragana',
        'カタカナ|katakana',
        '集[あつ]めます|collect',
        'まだ|still; not yet',
        '練習[れんしゅう] します|practice',
        '言語[げんご] 交換[こうかん]|language exchange'
      ],
      grammar: [
        { t: 'Dictionary form + ことができます', x: '"Can do": dictionary form + <b>ことができます</b>. With nouns: <b>N が できます</b>.', e: [['漢字[かんじ] を 読[よ]む *こと が できます*。', 'I can read kanji.'], ['ピアノ を 弾[ひ]く *こと が できます* か。', 'Can you play the piano?'], ['日本語[にほんご] が 少[すこ]し *できます*。', 'I can do a little Japanese.'], ['ここ で カード を 使[つか]う *こと が できます*。', 'You can use a card here.']] },
        { t: '趣味[しゅみ]は～ことです & ～のが好[す]き', x: 'Turn a verb into a noun with <b>こと</b> or <b>の</b>.', e: [['趣味[しゅみ] は 写真[しゃしん] を 撮[と]る *こと* です。', 'My hobby is taking photos.'], ['料理[りょうり] を する *の* が 好[す]き です。', 'I like cooking.']] }
      ],
      dialog: {
        title: 'Language exchange', lines: [
          ['Haruto', 'エマ さん は 漢字[かんじ] を 読[よ]む こと が できます か。', 'Emma, can you read kanji?'],
          ['Emma', '少[すこ]し できます。 百[ひゃく] ぐらい 読[よ]む こと が できます。', 'A little. I can read about a hundred.'],
          ['Haruto', 'すごい！ 書[か]く こと も できます か。', 'Amazing! Can you write them too?'],
          ['Emma', '書[か]く の は まだ 難[むずか]しい です。 はると さん は 英語[えいご] が できます か。', 'Writing is still hard. Haruto, can you speak English?'],
          ['Haruto', '読[よ]む こと は できます が、 話[はな]す の が 苦手[にがて] です。', 'I can read it, but I\'m not good at speaking.'],
          ['Emma', 'じゃあ、 毎週[まいしゅう] 練習[れんしゅう] しましょう！', 'Then let\'s practice every week!']
        ], me: 'Emma'
      },
      note: { t: 'Language exchanges', x: 'Language-exchange meetups (<b>言語交換</b>) pair Japanese people learning English with foreigners learning Japanese — you teach each other over coffee. It\'s one of the fastest ways to build real conversation skills and make friends.' },
      ex: [
        { mc: '"I can drive a car."', a: '車[くるま] を 運転[うんてん] する こと が できます。', o: ['車[くるま] を 運転[うんてん] します こと が できます。', '車[くるま] を 運転[うんてん] する が できます。', '車[くるま] を 運転[うんてん] こと が します。'] },
        { fill: 'ギター を 弾[ひ]く ＿ が できます。', a: 'こと', o: ['もの', 'の で'], en: 'I can play the guitar.' },
        { mean: '趣味[しゅみ] は 本[ほん] を 読[よ]む こと です。', a: 'My hobby is reading books.', o: ['I can read books.', 'I want to read a book.', 'I read books every day.'] },
        { build: '日本語[にほんご] を 話[はな]す こと が できます。', en: 'I can speak Japanese.' },
        { resp: 'すみません、 現金[げんきん] だけ です。', npcEn: 'Sorry, cash only.', a: 'わかりました。 じゃあ、 現金[げんきん] で 払[はら]います。', o: ['わかりました。 カード を 使[つか]う こと が できます。', '現金[げんきん] です か。 はい、 そう です。'] },
        { say: '漢字[かんじ] を 読[よ]む こと が できます。', en: 'I can read kanji.' }
      ],
      convo: 'language-exchange'
    },
    {
      id: 'L5-2', icon: '🌸', title: 'Have You Ever…?', sub: 'た-form · ～たことがあります · 花',
      goals: ['Make the た-form (casual past)', 'Talk about experiences with ～たことがあります', 'Say "never" with 一度も'],
      kanji: '花',
      words: [
        '～ た こと が あります|have done ~ (ever)',
        '一度[いちど]|once',
        '一度[いちど] も ～ません|never, not even once',
        '何回[なんかい] も|many times',
        '花見[はなみ]|cherry-blossom viewing',
        '桜[さくら]|cherry blossom',
        '着物[きもの]|kimono',
        '着[き]ます|put on, wear (tops)',
        '刺身[さしみ]|sashimi',
        '納豆[なっとう]|natto (fermented soybeans)',
        '経験[けいけん]|experience',
        '借[か]ります|borrow, rent'
      ],
      grammar: [
        { t: 'The た-form (casual past)', x: 'Make it exactly like the て-form, but with <b>た / だ</b>: 食べて → <b>食べた</b>, 飲んで → <b>飲んだ</b>, 行って → <b>行った</b>, して → <b>した</b>. It\'s also the casual past: 昨日、映画を見た = "I saw a movie yesterday."', e: [['食[た]べて → *食[た]べた*', 'ate'], ['飲[の]んで → *飲[の]んだ*', 'drank'], ['行[い]って → *行[い]った*', 'went']] },
        { t: '～たことがあります — experience', x: 'た-form + <b>ことがあります</b> = "have done (at some point in my life)". Negative: <b>ことがありません</b>.', e: [['富士山[ふじさん] に *登[のぼ]った こと が あります* か。', 'Have you ever climbed Mt. Fuji?'], ['いいえ、 *一度[いちど] も ありません*。', 'No, never.'], ['納豆[なっとう] を *食[た]べた こと が あります*。', 'I\'ve eaten natto.']] }
      ],
      dialog: {
        title: 'Hanami plans', lines: [
          ['Yui', 'エマ さん、 花見[はなみ] を した こと が あります か。', 'Emma, have you ever done hanami?'],
          ['Emma', 'いいえ、 まだ ありません。 桜[さくら] を 見[み]た こと は あります が…', 'No, not yet. I\'ve seen cherry blossoms, but…'],
          ['Yui', 'じゃあ、 来週[らいしゅう] いっしょ に 行[い]きましょう！ 公園[こうえん] で お弁当[べんとう] を 食[た]べます。', 'Then let\'s go together next week! We\'ll eat bentos in the park.'],
          ['Emma', '楽[たの]しみ です！ あ、 着物[きもの] を 着[き]た こと も ない です。', 'Can\'t wait! Oh, I\'ve never worn a kimono either.'],
          ['Yui', '京都[きょうと] で 着物[きもの] を 借[か]りる こと が できます よ。', 'You can rent kimonos in Kyoto.'],
          ['Emma', 'ぜひ 着[き]て みたい です！', 'I\'d love to try wearing one!']
        ], me: 'Emma'
      },
      note: { t: 'Hanami', x: 'In late March and early April, people picnic under the cherry trees with food and drinks — <b>花見</b>. Popular spots get so crowded that companies send junior staff early in the morning to hold a spot with a blue tarp!' },
      ex: [
        { mc: 'た-form of 見ます:', a: '見[み]た', o: ['見[み]った', '見[み]いた', '見[み]んだ'] },
        { mc: 'た-form of 飲みます:', a: '飲[の]んだ', o: ['飲[の]みた', '飲[の]った', '飲[の]いた'] },
        { mc: '"I\'ve been to Kyoto."', a: '京都[きょうと] に 行[い]った こと が あります。', o: ['京都[きょうと] に 行[い]く こと が あります。', '京都[きょうと] に 行[い]きました こと が あります。', '京都[きょうと] に 行[い]った が あります。'] },
        { resp: '刺身[さしみ] を 食[た]べた こと が あります か。', npcEn: 'Have you ever eaten sashimi?', a: 'はい、 何回[なんかい] も あります。', o: ['はい、 食[た]べた こと です。', 'いいえ、 食[た]べた こと が います。'] },
        { build: '着物[きもの] を 着[き]た こと が ありません。', en: 'I have never worn a kimono.' },
        { mean: '一度[いちど] も 日本[にほん] に 行[い]った こと が ありません。', a: 'I\'ve never been to Japan, not even once.', o: ['I went to Japan once.', 'I have been to Japan many times.', 'I want to go to Japan once.'] }
      ],
      convo: 'hanami-plan'
    },
    {
      id: 'L5-3', icon: '🏖️', title: 'This and That: ～たり～たり', sub: 'Listing activities · 空',
      goals: ['List example activities with ～たり～たりします', 'Talk about vacations and days off'],
      kanji: '空',
      words: [
        '～ たり ～ たり します|do things like ~ and ~',
        '海[うみ]|sea, beach',
        '釣[つ]り|fishing',
        'のんびり|relaxed, leisurely',
        '空[そら]|sky',
        '星[ほし]|star',
        'キャンプ|camping',
        'バーベキュー|barbecue',
        'ドライブ|drive (for fun)',
        '島[しま]|island',
        '夏休[なつやす]み|summer vacation',
        '過[す]ごします|spend (time)',
        'いろいろ|various',
        '買[か]い物[もの]|shopping'
      ],
      grammar: [
        { t: '～たり～たりします', x: 'Give a few <i>examples</i> of activities (not a complete list): た-form + <b>り</b>, finishing with <b>します</b>.', e: [['週末[しゅうまつ] は 映画[えいが] を *見[み]たり*、 買[か]い物[もの] を *したり* します。', 'On weekends I do things like watch movies and go shopping.'], ['夏休[なつやす]み は 海[うみ] で *泳[およ]いだり*、 釣[つ]り を *したり* しました。', 'Over summer vacation I swam, went fishing and so on.']] }
      ],
      dialog: {
        title: 'Summer vacation plans', lines: [
          ['Ken', '夏休[なつやす]み は どう 過[す]ごします か。', 'How will you spend summer vacation?'],
          ['You', '沖縄[おきなわ] に 行[い]きます！ 海[うみ] で 泳[およ]いだり、 島[しま] を ドライブ したり したい です。', 'I\'m going to Okinawa! I want to swim, drive around the islands and so on.'],
          ['Ken', 'いい です ね。 沖縄[おきなわ] の 空[そら] は 本当[ほんとう] に 青[あお]い です よ。', 'Nice. The sky in Okinawa is really blue.'],
          ['You', 'ケン さん は？', 'And you, Ken?'],
          ['Ken', 'ぼく は 山[やま] で キャンプ したり、 星[ほし] を 見[み]たり します。', 'I\'ll go camping in the mountains, look at the stars, that kind of thing.'],
          ['You', 'のんびり できます ね。', 'Sounds relaxing.']
        ]
      },
      note: { t: 'Japanese summer', x: 'Summer means festivals (<b>祭り</b>) with yukata and food stalls, fireworks shows (<b>花火大会</b>), and <b>お盆</b> in mid-August, when families return to their hometowns to honor their ancestors — expect packed trains and highways.' },
      ex: [
        { mc: '"I read books, watch TV and so on."', a: '本[ほん] を 読[よ]んだり、 テレビ を 見[み]たり します。', o: ['本[ほん] を 読[よ]みたり、 テレビ を 見[み]たり します。', '本[ほん] を 読[よ]んで、 テレビ を 見[み]たり です。', '本[ほん] を 読[よ]んだり、 テレビ を 見[み]ます。'] },
        { fill: '週末[しゅうまつ] は 掃除[そうじ] を し＿、 洗濯[せんたく] を したり します。', a: 'たり', o: ['て', 'たら'], en: 'On weekends I clean, do laundry and so on.' },
        { mean: '休[やす]み の 日[ひ] は 寝[ね]たり、 ゲーム を したり します。', a: 'On days off I do things like sleep and play games.', o: ['I slept and played games yesterday.', 'I don\'t play games on days off.', 'I want to sleep on my day off.'] },
        { build: '休[やす]み は 料理[りょうり] を したり、 散歩[さんぽ] を したり します。', en: 'On days off I cook, take walks and so on.' },
        { resp: '週末[しゅうまつ] は 何[なに] を します か。', npcEn: 'What do you do on weekends?', a: '買[か]い物[もの] を したり、 友[とも]だち に 会[あ]ったり します。', o: ['買[か]い物[もの] を したり です。', '買[か]い物[もの] を します たり。'] },
        { say: '海[うみ] で 泳[およ]いだり します。', en: 'I do things like swim in the sea.' }
      ],
      convo: 'vacation-chat'
    },
    {
      id: 'L5-4', icon: '⏳', title: 'Before & After', sub: '前に · 後で · ～前 (ago) · 前 後',
      goals: ['Say "before doing" and "after doing"', 'Say how long ago something happened', 'Plan the order of things'],
      kanji: '前後',
      words: [
        '～ 前[まえ] に|before ~',
        '～ た 後[あと] で|after doing ~',
        '後[あと] で|later',
        '歯[は] を 磨[みが]きます|brush your teeth',
        '手[て] を 洗[あら]います|wash your hands',
        '食事[しょくじ]|meal',
        '寝[ね]る 前[まえ]|before bed',
        '出発[しゅっぱつ]|departure',
        '確認[かくにん] します|check, confirm',
        '連絡[れんらく] します|contact, get in touch',
        'さっき|a moment ago',
        '～年[ねん] 前[まえ]|~ years ago'
      ],
      grammar: [
        { t: 'Dictionary form + 前[まえ]に — before doing', x: '<b>V (dictionary) + 前に</b> = before doing V. With nouns: <b>N の 前に</b>. The verb before 前に stays in the dictionary form, even for past events!', e: [['*寝[ね]る 前[まえ] に* 歯[は] を 磨[みが]きます。', 'I brush my teeth before going to bed.'], ['*食事[しょくじ] の 前[まえ] に* 手[て] を 洗[あら]って ください。', 'Please wash your hands before meals.'], ['日本[にほん] に *来[く]る 前[まえ] に*、 ひらがな を 勉強[べんきょう] しました。', 'Before coming to Japan, I studied hiragana.']] },
        { t: 'た-form + 後[あと]で — after doing', x: '<b>V (た) + 後で</b> = after doing V. With nouns: <b>N の 後で</b>. <b>後で</b> alone = later.', e: [['*仕事[しごと] の 後[あと] で* 飲[の]み に 行[い]きましょう。', 'Let\'s go for drinks after work.'], ['映画[えいが] を *見[み]た 後[あと] で*、 食事[しょくじ] を しました。', 'After watching the movie, we had dinner.'], ['じゃあ、 *後[あと] で*！', 'Later, then!']] },
        { t: 'Time + 前[まえ] — ago', x: 'A length of time + <b>前</b> = "~ ago".', e: [['*三年[さんねん] 前[まえ]* に 日本[にほん] に 来[き]ました。', 'I came to Japan three years ago.'], ['*10分[じゅっぷん] 前[まえ]*', '10 minutes ago']] }
      ],
      dialog: {
        title: 'The morning before a trip', lines: [
          ['Host', '出発[しゅっぱつ] は 何時[なんじ] です か。', 'What time do you leave?'],
          ['You', '9時[くじ] です。 出[で]かける 前[まえ] に 朝[あさ]ごはん を 食[た]べます。', 'At 9. I\'ll have breakfast before I go.'],
          ['Host', 'パスポート は？ 寝[ね]る 前[まえ] に 確認[かくにん] して ね。', 'Your passport? Check it before you go to bed.'],
          ['You', '大丈夫[だいじょうぶ] です。 さっき 確認[かくにん] しました。', 'It\'s fine. I checked it a moment ago.'],
          ['Host', '着[つ]いた 後[あと] で 連絡[れんらく] して ね。', 'Let me know after you arrive.'],
          ['You', 'はい、 空港[くうこう] に 着[つ]いた 後[あと] で、 すぐ メール します。', 'Yes, I\'ll message you right after I get to the airport.']
        ]
      },
      note: { t: 'Oshibori', x: 'Restaurants hand you an <b>おしぼり</b> (a wet towel) to clean your hands before eating. Use it for your hands only — not your face (though some older men do!) — then fold it neatly beside your plate.' },
      ex: [
        { mc: '"Before eating"', a: '食[た]べる 前[まえ] に', o: ['食[た]べた 前[まえ] に', '食[た]べます 前[まえ] に', '食[た]べて 前[まえ] に'] },
        { mc: '"After eating"', a: '食[た]べた 後[あと] で', o: ['食[た]べる 後[あと] で', '食[た]べて 後[あと] で', '食[た]べない 後[あと] で'] },
        { fill: '仕事[しごと] ＿ 後[あと] で ジム に 行[い]きます。', a: 'の', o: ['を', 'が'], en: 'I go to the gym after work.' },
        { mean: '五年[ごねん] 前[まえ] に 結婚[けっこん] しました。', a: 'I got married five years ago.', o: ['I will get married in five years.', 'I\'ve been married for five years.', 'Five people got married.'] },
        { build: '寝[ね]る 前[まえ] に 歯[は] を 磨[みが]きます。', en: 'I brush my teeth before bed.' },
        { resp: 'じゃあ、 後[あと] で 電話[でんわ] します ね。', npcEn: 'I\'ll call you later then.', a: 'はい、 待[ま]って います。', o: ['はい、 後[あと] で 前[まえ] に。', 'いいえ、 電話[でんわ] しました。'] }
      ],
      convo: 'host-family-morning'
    },
    {
      id: 'L5-5', icon: '💭', title: 'When & Because', sub: '～とき · から / ので · 間',
      goals: ['Give reasons with から and ので', 'Say "when…" with とき', 'Apologize and explain at work'],
      kanji: '間',
      words: [
        '～ とき|when ~',
        '～ から|because ~',
        '～ ので|because ~ (softer)',
        'どうして|why',
        'なぜ|why (formal)',
        '間[ま]に 合[あ]います|be in time',
        '遅刻[ちこく]|being late',
        '子[こ]ども の とき|as a child',
        '寂[さび]しい|lonely',
        '困[こま]ります|be in trouble, be troubled',
        '用事[ようじ]|errand, something to do',
        '時間[じかん]|time',
        '申[もう]し訳[わけ] ありません|I\'m very sorry (formal)',
        '気[き] を つけます|be careful'
      ],
      grammar: [
        { t: '～から / ～ので — because', x: 'Reason <b>first</b>, then から/ので, then the result. <b>から</b> is direct (fine with friends and for opinions); <b>ので</b> sounds softer and more polite — ideal for excuses. Before ので, nouns and な-adjectives take <b>な</b>: 雨なので.', e: [['時間[じかん] が ない *から*、 タクシー で 行[い]きましょう。', 'There\'s no time, so let\'s take a taxi.'], ['用事[ようじ] が ある *ので*、 お先[さき] に 失礼[しつれい] します。', 'I have something to do, so I\'ll leave first.'], ['雨[あめ] *な ので*、 うち に います。', 'It\'s raining, so I\'ll stay home.'], ['*どうして* 遅[おく]れました か。', 'Why were you late?']] },
        { t: '～とき — when', x: '<b>Verb / adjective + とき</b>, <b>N の とき</b> = "when ~ / at the time of ~".', e: [['子[こ]ども *の とき*、 よく 海[うみ] で 遊[あそ]びました。', 'When I was a child, I often played at the beach.'], ['寂[さび]しい *とき*、 家族[かぞく] に 電話[でんわ] します。', 'When I\'m lonely, I call my family.'], ['困[こま]った *とき* は、 交番[こうばん] に 行[い]って ください。', 'When you\'re in trouble, go to a police box.']] }
      ],
      dialog: {
        title: 'Late for work', lines: [
          ['Boss', 'おはよう。 今日[きょう] は どうして 遅[おく]れました か。', 'Morning. Why were you late today?'],
          ['You', '申[もう]し訳[わけ] ありません。 電車[でんしゃ] が 止[と]まった ので、 間[ま]に 合[あ]いません でした。', 'I\'m very sorry. The train stopped, so I didn\'t make it in time.'],
          ['Boss', 'そう です か。 遅[おく]れる とき は、 電話[でんわ] して ください ね。', 'I see. When you\'re going to be late, please call.'],
          ['You', 'はい、 すみません でした。 次[つぎ] から 気[き] を つけます。', 'Yes, I\'m sorry. I\'ll be careful from now on.'],
          ['Boss', '大丈夫[だいじょうぶ]。 電車[でんしゃ] の 遅延[ちえん] は しかたない から。', 'It\'s OK. Train delays can\'t be helped.']
        ]
      },
      note: { t: 'Apologies at work', x: '<b>申し訳ありません</b> is a deeper, more formal apology than すみません. Japanese apologize readily — it smooths things over rather than admitting legal fault. Bowing deeper shows a bigger apology.' },
      ex: [
        { fill: '雨[あめ] ＿ ので、 タクシー で 帰[かえ]ります。', a: 'な', o: ['だ', 'の'], en: 'It\'s raining, so I\'ll go home by taxi.' },
        { mc: 'The most polite way to excuse yourself:', a: '用事[ようじ] が ある ので、 失礼[しつれい] します。', o: ['用事[ようじ] が ある から、 帰[かえ]る。', '用事[ようじ] が あります。 だから、 帰[かえ]ります よ。', '用事[ようじ] から、 失礼[しつれい] します。'] },
        { mean: '子[こ]ども の とき、 野菜[やさい] が 嫌[きら]い でした。', a: 'When I was a child, I hated vegetables.', o: ['Children hate vegetables.', 'I don\'t like vegetables now.', 'When I have children, I\'ll give them vegetables.'] },
        { resp: 'どうして 日本語[にほんご] を 勉強[べんきょう] して います か。', npcEn: 'Why are you studying Japanese?', a: 'アニメ が 好[す]き だ から です。', o: ['アニメ が 好[す]き から です。', 'アニメ の とき です。'] },
        { build: '時間[じかん] が ない から、 急[いそ]ぎましょう。', en: 'There\'s no time, so let\'s hurry.' },
        { say: '申[もう]し訳[わけ] ありません。', en: 'I\'m very sorry. (formal)' }
      ],
      convo: 'late-to-work'
    },
    {
      id: 'L5-6', icon: '🍁', title: 'Changes: ～なります', sub: '～くなる · ～になる',
      goals: ['Describe changes: it got cold, I got better', 'Say what you want to become', 'Talk about the seasons changing'],
      words: [
        'なります|become',
        '暗[くら]い|dark',
        '明[あか]るい|bright',
        '上手[じょうず] に なります|get good at',
        '夢[ゆめ]|dream',
        '紅葉[こうよう]|autumn leaves',
        '最近[さいきん]|recently',
        'だんだん|gradually',
        'もう すぐ|soon',
        '葉[は]|leaf',
        'ライトアップ|illumination (light-up)'
      ],
      grammar: [
        { t: '～くなる / ～になる — become', x: 'い-adjectives: drop い + <b>くなります</b> (寒い → 寒くなります). な-adjectives and nouns: <b>になります</b> (きれい → きれいになります, 医者 → 医者になります).', e: [['だんだん *寒[さむ]く なりました* ね。', 'It\'s gradually gotten cold, hasn\'t it?'], ['日本語[にほんご] が *上手[じょうず] に なりました* ね！', 'Your Japanese has gotten good!'], ['将来[しょうらい]、 *先生[せんせい] に なりたい* です。', 'In the future, I want to become a teacher.'], ['もう すぐ *6時[ろくじ] に なります*。', 'It\'ll be 6 o\'clock soon.']] }
      ],
      dialog: {
        title: 'Autumn in Kyoto', lines: [
          ['Yui', '最近[さいきん]、 涼[すず]しく なりました ね。', 'It\'s gotten cooler lately, hasn\'t it?'],
          ['You', 'そう です ね。 木[き] の 葉[は] も 赤[あか]く なりました。', 'It has. The leaves have turned red too.'],
          ['Yui', '京都[きょうと] の 紅葉[こうよう] は 今[いま] が 一番[いちばん] きれい です よ。', 'Kyoto\'s autumn leaves are at their best right now.'],
          ['You', '行[い]きたい です！ 夜[よる] は ライトアップ も あります よ ね。', 'I want to go! There are evening illuminations too, right?'],
          ['Yui', 'はい。 暗[くら]く なって から が 最高[さいこう] です。 それにしても、 日本語[にほんご]、 本当[ほんとう] に 上手[じょうず] に なりました ね。', 'Yes. It\'s best after dark. By the way, your Japanese has really gotten good.'],
          ['You', 'いえいえ、 まだまだ です。 でも、 ありがとう ございます！', 'No, no, still a long way to go. But thank you!']
        ]
      },
      note: { t: 'Kōyō season', x: 'Autumn leaves (<b>紅葉</b>) sweep south from Hokkaido in late September to Kyoto in late November. Temples hold special night illuminations — magical, but crowded. Weather reports even show a "koyo front" map.' },
      ex: [
        { mc: '"It became cold."', a: '寒[さむ]く なりました。', o: ['寒[さむ]い に なりました。', '寒[さむ]い なりました。', '寒[さむ]く に なりました。'] },
        { mc: '"The room became clean."', a: '部屋[へや] が きれい に なりました。', o: ['部屋[へや] が きれく なりました。', '部屋[へや] が きれい なりました。', '部屋[へや] が きれいく なりました。'] },
        { fill: '医者[いしゃ] ＿ なりたい です。', a: 'に', o: ['く', 'が'], en: 'I want to become a doctor.' },
        { mean: 'だんだん 暗[くら]く なりました。', a: 'It gradually got dark.', o: ['It suddenly got bright.', 'It is dark now.', 'It will get dark soon.'] },
        { build: '日本語[にほんご] が 上手[じょうず] に なりたい です。', en: 'I want to get good at Japanese.' },
        { resp: '日本語[にほんご]、 上手[じょうず] に なりました ね。', npcEn: 'Your Japanese has really improved!', a: 'いえいえ、 まだまだ です。', o: ['はい、 上手[じょうず] に なりました。', '上手[じょうず] く なりました。'] }
      ],
      convo: 'reunion'
    },
    {
      id: 'L5-7', icon: '🗣️', title: 'Opinions & Plans', sub: '～と思います · ～つもりです · 予定',
      goals: ['Give your opinion with ～と思います', 'Talk about plans with つもり and 予定', 'Discuss the future'],
      words: [
        '～ と 思[おも]います|I think ~',
        '～ つもり です|intend to ~',
        '～ 予定[よてい] です|be scheduled to ~',
        'たぶん|probably',
        'きっと|surely',
        '意見[いけん]|opinion',
        '賛成[さんせい]|agreement, in favor',
        '反対[はんたい]|opposition, against',
        '引[ひ]っ越[こ]します|move (house)',
        '辞[や]めます|quit',
        '受[う]けます|take (an exam)',
        '合格[ごうかく] します|pass (an exam)',
        'アイデア|idea'
      ],
      grammar: [
        { t: 'Plain form + と思[おも]います — I think', x: 'Plain (casual) form + <b>と思います</b>. After nouns and な-adjectives add <b>だ</b>. For negative opinions, make the inside negative: <b>～ないと思います</b>.', e: [['明日[あした] は 雨[あめ] が *降[ふ]る と 思[おも]います*。', 'I think it\'ll rain tomorrow.'], ['この 映画[えいが] は *おもしろい と 思[おも]います*。', 'I think this movie is interesting.'], ['田中[たなか] さん は *来[こ]ない と 思[おも]います*。', 'I don\'t think Tanaka will come.'], ['それ は いい *アイデア だ と 思[おも]います*。', 'I think that\'s a good idea.']] },
        { t: '～つもりです — intend to', x: 'Dictionary form + <b>つもりです</b> = "I intend to / plan to". Negative: <b>～ないつもりです</b>. For fixed schedules: <b>予定です</b>.', e: [['来年[らいねん]、 日本[にほん] に *引[ひ]っ越[こ]す つもり です*。', 'I plan to move to Japan next year.'], ['今年[ことし] は 国[くに] に *帰[かえ]らない つもり です*。', 'I don\'t plan to go home this year.'], ['会議[かいぎ] は 3時[さんじ] に *始[はじ]まる 予定[よてい] です*。', 'The meeting is scheduled to start at 3.']] }
      ],
      dialog: {
        title: 'The JLPT', lines: [
          ['Sato', 'JLPT[ジェイエルピーティー] は 受[う]けます か。', 'Are you taking the JLPT?'],
          ['You', 'はい、 12月[じゅうにがつ] に N5[エヌご] を 受[う]ける つもり です。', 'Yes, I plan to take N5 in December.'],
          ['Sato', 'きっと 合格[ごうかく] する と 思[おも]います よ。', 'I\'m sure you\'ll pass.'],
          ['You', 'ありがとう ございます。 でも、 聴解[ちょうかい] は 難[むずか]しい と 思[おも]います。', 'Thank you. But I think the listening section is hard.'],
          ['Sato', '毎日[まいにち] 日本語[にほんご] の ポッドキャスト を 聞[き]く の は どう です か。', 'How about listening to a Japanese podcast every day?'],
          ['You', 'いい アイデア だ と 思[おも]います！ やって みます。', 'I think that\'s a good idea! I\'ll try it.']
        ]
      },
      note: { t: 'About the JLPT', x: 'The Japanese-Language Proficiency Test runs in July and December worldwide. N5 covers roughly 800 words, 100 kanji and the grammar in this course. Then come N4, N3, N2 and finally N1 — the path continues in this app!' },
      ex: [
        { mc: '"I think it\'s expensive."', a: '高[たか]い と 思[おも]います。', o: ['高[たか]い だ と 思[おも]います。', '高[たか]い です と 思[おも]います。', '高[たか]く と 思[おも]います。'] },
        { mc: '"I think he\'s a student."', a: '学生[がくせい] だ と 思[おも]います。', o: ['学生[がくせい] と 思[おも]います。', '学生[がくせい] です と 思[おも]います。', '学生[がくせい] の と 思[おも]います。'] },
        { fill: '来年[らいねん] 結婚[けっこん] する ＿ です。', a: 'つもり', o: ['と 思[おも]い', 'こと'], en: 'I plan to get married next year.' },
        { mean: '今日[きょう] は 飲[の]まない つもり です。', a: 'I don\'t intend to drink today.', o: ['I didn\'t drink today.', 'I want to drink today.', 'I think I won\'t drink.'] },
        { resp: 'この プラン、 どう 思[おも]います か。', npcEn: 'What do you think of this plan?', a: 'いい と 思[おも]います。', o: ['いい と 思[おも]いません か。', 'いい つもり です。'] },
        { build: '明日[あした] は 雨[あめ] が 降[ふ]る と 思[おも]います。', en: 'I think it will rain tomorrow.' }
      ],
      convo: 'career-chat'
    },
    {
      id: 'L5-8', icon: '📞', title: 'Phone Calls & Reservations', sub: 'Booking a table · diet · 魚 肉 茶',
      goals: ['Book a restaurant by phone', 'Explain dietary needs', 'Read 魚, 肉 and 茶 on menus'],
      kanji: '魚肉茶',
      words: [
        '予約[よやく] します|make a reservation',
        '～名[めい]|~ people (polite)',
        '空[あ]いて います|be available (seats)',
        '満席[まんせき]|fully booked',
        '席[せき]|seat',
        'カウンター 席[せき]|counter seat',
        '個室[こしつ]|private room',
        'キャンセル|cancellation',
        '肉[にく]|meat',
        '魚[さかな]|fish',
        '豚肉[ぶたにく]|pork',
        '牛肉[ぎゅうにく]|beef',
        '鶏肉[とりにく]|chicken',
        '食[た]べられません|can\'t eat',
        'ベジタリアン|vegetarian'
      ],
      grammar: [
        { t: 'Making a reservation', x: 'Key phrases for booking by phone:', e: [['予約[よやく] を *したい ん です が*…', 'I\'d like to make a reservation…'], ['土曜日[どようび] の 7時[しちじ] に *4名[よんめい] で* おねがいします。', 'For four people at 7 on Saturday, please.'], ['スミス *の 名前[なまえ] で* おねがいします。', 'Under the name Smith, please.'], ['席[せき] は *空[あ]いて います か*。', 'Are there seats available?']] },
        { t: 'Dietary needs', x: 'Explain politely with <b>～が食べられません</b> (I can\'t eat ~) or <b>～アレルギーがあります</b>.', e: [['豚肉[ぶたにく] が *食[た]べられません*。', 'I can\'t eat pork.'], ['ベジタリアン です。 肉[にく] と 魚[さかな] は 食[た]べません。', 'I\'m vegetarian. I don\'t eat meat or fish.'], ['えび の *アレルギー が あります*。', 'I\'m allergic to shrimp.']] }
      ],
      dialog: {
        title: 'Booking a restaurant', lines: [
          ['Staff', 'お電話[でんわ] ありがとう ございます。 和食[わしょく] の 「はな」 で ございます。', 'Thank you for calling. This is Hana Japanese restaurant.'],
          ['You', 'もしもし、 予約[よやく] を したい ん です が。', 'Hello, I\'d like to make a reservation.'],
          ['Staff', 'ありがとう ございます。 いつ が よろしい です か。', 'Thank you. When would you like?'],
          ['You', '今週[こんしゅう] の 金曜日[きんようび]、 7時[しちじ] に 3名[さんめい] で おねがいします。', 'This Friday at 7, for three people.'],
          ['Staff', '金曜日[きんようび] 7時[しちじ]、 3名[さんめい] 様[さま] です ね。 空[あ]いて おります。 お名前[なまえ] は？', 'Friday at 7 for three. We have space. Your name?'],
          ['You', 'スミス です。 あの、 一人[ひとり] は 肉[にく] が 食[た]べられません。 魚[さかな] は 大丈夫[だいじょうぶ] です。', 'Smith. Um, one person can\'t eat meat. Fish is OK.'],
          ['Staff', 'かしこまりました。 シェフ に 伝[つた]えて おきます。', 'Certainly. I\'ll let the chef know.']
        ]
      },
      note: { t: 'Phone Japanese', x: '<b>もしもし</b> is only for phones (and businesses answer with their own name instead). Many restaurants now take bookings online (食べログ, Hot Pepper), but popular places still prefer a call. Repeat key details back — <b>金曜日の7時ですね</b> — to avoid mistakes.' },
      ex: [
        { resp: 'お名前[なまえ] を おねがいします。', npcEn: 'Your name, please.', a: 'スミス です。', o: ['スミス さん です。', 'スミス 様[さま] です。'], why: 'Never honor yourself with さん / 様!' },
        { mc: '"For two people, please."', a: '2名[にめい] で おねがいします。', o: ['2つ で おねがいします。', '2人[ふたり] を ください。', '2名[にめい] が あります。'] },
        { mean: '牛肉[ぎゅうにく] が 食[た]べられません。', a: 'I can\'t eat beef.', o: ['I don\'t like chicken.', 'I want to eat beef.', 'Beef is sold out.'] },
        { fill: '予約[よやく] を し＿ ん です が…', a: 'たい', o: ['ます', 'て'], en: 'I\'d like to make a reservation…' },
        { mc: 'Which kanji means "fish"?', a: '魚[さかな]', o: ['肉[にく]', '茶[ちゃ]', '花[はな]'] },
        { build: '席[せき] は 空[あ]いて います か。', en: 'Are there seats available?' }
      ],
      convo: 'restaurant-booking'
    },
    {
      id: 'L5-9', icon: '🪧', title: 'Real-World Reading', sub: 'Signs, doors and menus · 押 引 止',
      goals: ['Read essential signs: push, pull, open, closed, no entry', 'Read menu basics: sizes, tax, sold out', 'Recognize kanji you will see every day'],
      kanji: '押引止',
      words: [
        '押[お]す|push',
        '引[ひ]く|pull',
        '止[と]まれ|stop (road sign)',
        '営業中[えいぎょうちゅう]|open (for business)',
        '準備中[じゅんびちゅう]|preparing (not open yet)',
        '定休日[ていきゅうび]|regular closing day',
        '非常口[ひじょうぐち]|emergency exit',
        '立入禁止[たちいりきんし]|no entry',
        '男湯[おとこゆ]|men\'s bath',
        '女湯[おんなゆ]|women\'s bath',
        '無料[むりょう]|free of charge',
        '税込[ぜいこみ]|tax included',
        '割引[わりびき]|discount',
        '大盛[おおも]り|large portion',
        '品切[しなぎ]れ|sold out',
        '本日[ほんじつ]|today (formal)'
      ],
      grammar: [
        { t: 'Sign-kanji survival kit', x: 'You don\'t need to read everything — just recognize key shapes. Doors: <b>押</b> (push) / <b>引</b> (pull). Shops: <b>営業中</b> (open), <b>準備中</b> (not open yet), <b>定休日</b> (closed day). Safety: <b>止まれ</b> (stop), <b>立入禁止</b> (no entry), <b>非常口</b> (emergency exit).', e: [['*営業中[えいぎょうちゅう]*', 'OPEN'], ['本日[ほんじつ] *定休日[ていきゅうび]*', 'Closed today'], ['*押[お]す*', 'PUSH']] },
        { t: 'Menu reading', x: 'Prices may be <b>税込</b> (tax included) or <b>税抜</b> (tax excluded). Size choices: <b>並</b> (regular), <b>大盛り</b> (large) — sometimes free! <b>品切れ</b> = sold out.', e: [['牛丼[ぎゅうどん] 並[なみ] 400円[よんひゃくえん] *税込[ぜいこみ]*', 'Beef bowl, regular, ¥400 incl. tax'], ['*大盛[おおも]り* *無料[むりょう]*', 'Large portion free']] }
      ],
      dialog: {
        title: 'Reading signs with a friend', lines: [
          ['Ken', 'あ、 この 店[みせ]、 「準備中[じゅんびちゅう]」 って 書[か]いて ある。', 'Oh, this place says "preparing".'],
          ['You', '開[あ]いて いない ん です か。', 'It\'s not open?'],
          ['Ken', 'うん。 5時[ごじ] から だって。 隣[となり] の 店[みせ] は 「営業中[えいぎょうちゅう]」 だよ。', 'Yeah. From 5, apparently. The place next door says "open".'],
          ['You', 'じゃあ、 そこ に しましょう。 … あれ、 ドア が 開[あ]きません。', 'Let\'s go there then. … Huh, the door won\'t open.'],
          ['Ken', '「引[ひ]く」 って 書[か]いて ある よ。 押[お]す じゃ なくて、 引[ひ]いて！', 'It says "pull". Don\'t push — pull!'],
          ['You', 'あ、 本当[ほんとう] だ。 はずかしい…', 'Oh, you\'re right. How embarrassing…']
        ]
      },
      note: { t: 'Kanji in the wild', x: 'Look out for <b>駅</b> (station), <b>出口</b> / <b>入口</b> (exit / entrance), <b>男</b> / <b>女</b> (men / women), <b>円</b> (yen) and <b>営業中</b> (open). Recognizing just these makes daily life in Japan so much easier — and you know them all now!' },
      ex: [
        { mc: 'The door sign says 押. You should…', a: 'push', o: ['pull', 'stop', 'wait'] },
        { mc: 'A shop sign says 営業中. It means…', a: 'Open for business', o: ['Closed today', 'Preparing', 'Sold out'] },
        { mean: '本日[ほんじつ] 定休日[ていきゅうび]', a: 'Closed today (regular holiday)', o: ['Open today', 'Today\'s special', 'Free today'] },
        { mc: 'Which sign means "sold out"?', a: '品切[しなぎ]れ', o: ['無料[むりょう]', '大盛[おおも]り', '割引[わりびき]'] },
        { mc: 'There\'s a fire. Which sign do you look for?', a: '非常口[ひじょうぐち]', o: ['立入禁止[たちいりきんし]', '準備中[じゅんびちゅう]', '定休日[ていきゅうび]'] },
        { mc: 'At a hot spring, a man should enter…', a: '男湯[おとこゆ]', o: ['女湯[おんなゆ]', '立入禁止[たちいりきんし]', '非常口[ひじょうぐち]'] }
      ],
      convo: 'gyudon-order'
    },
    {
      id: 'L5-10', icon: '🏆', title: 'N5 Final Review', sub: 'You\'re ready for JLPT N5',
      goals: ['Review the whole N5 toolkit', 'Encourage others and yourself with がんばって', 'Take the N5 mock exam'],
      words: [
        '試験[しけん]|exam',
        '頑張[がんば]ります|do one\'s best',
        '頑張[がんば]って|good luck! / hang in there!',
        '復習[ふくしゅう]|review',
        '問題[もんだい]|question, problem',
        '答[こた]え|answer',
        '終[お]わります|end, finish',
        '始[はじ]まります|begin',
        '緊張[きんちょう] します|be nervous',
        'いよいよ|at last, finally'
      ],
      grammar: [
        { t: 'You\'ve covered N5!', x: 'Congratulations — you\'ve met all the core grammar for JLPT N5: です/ます, particles, adjectives, verb forms (ます, て, ない, た, dictionary), experiences, wants, comparisons, reasons, changes and plans. Keep your daily reviews going, try the <b>N5 mock exam</b> on the Progress page, and continue to N4!', e: [['*頑張[がんば]って* ください！', 'Good luck! / Do your best!'], ['毎日[まいにち] 復習[ふくしゅう] する こと が *大切[たいせつ]* です。', 'Reviewing every day is important.']] }
      ],
      dialog: {
        title: 'The night before the exam', lines: [
          ['Yui', 'いよいよ 明日[あした] は 試験[しけん] です ね。', 'The exam is finally tomorrow.'],
          ['You', 'はい。 ちょっと 緊張[きんちょう] して います。', 'Yes. I\'m a little nervous.'],
          ['Yui', '毎日[まいにち] 練習[れんしゅう] した から、 大丈夫[だいじょうぶ] だ と 思[おも]います よ。', 'You practiced every day, so I think you\'ll be fine.'],
          ['You', 'ありがとう ございます。 今晩[こんばん] は 早[はや]く 寝[ね]る つもり です。', 'Thank you. I plan to go to bed early tonight.'],
          ['Yui', '頑張[がんば]って ください！ 終[お]わった 後[あと] で、 お祝[いわ]い に 行[い]きましょう！', 'Good luck! After it\'s over, let\'s go celebrate!'],
          ['You', 'はい！ 頑張[がんば]ります！', 'Yes! I\'ll do my best!']
        ]
      },
      note: { t: 'がんばって!', x: '<b>がんばって</b> / <b>がんばります</b> is one of the most-used phrases in Japan — encouragement before exams, matches, interviews and hard days at work. Afterward, everyone says <b>おつかれさま</b> to each other.' },
      ex: [
        { resp: '明日[あした] は 試験[しけん] です。', npcEn: 'My exam is tomorrow.', a: '頑張[がんば]って ください！', o: ['頑張[がんば]ります！', 'おめでとう ございます！'], why: 'がんばってください encourages someone else; がんばります is about yourself.' },
        { fill: '試験[しけん] が 終[お]わった ＿ で、 遊[あそ]び に 行[い]きます。', a: '後[あと]', o: ['前[まえ]', 'とき'], en: 'After the exam is over, I\'ll go out and have fun.' },
        { mc: '"I have never been to Hokkaido."', a: '北海道[ほっかいどう] に 行[い]った こと が ありません。', o: ['北海道[ほっかいどう] に 行[い]く こと が ありません。', '北海道[ほっかいどう] に 行[い]きたく ありません。', '北海道[ほっかいどう] に 行[い]った こと が あります。'] },
        { mc: '"Because it\'s cold, I\'ll wear a coat." (polite excuse style)', a: '寒[さむ]い ので、 コート を 着[き]ます。', o: ['寒[さむ]い な ので、 コート を 着[き]ます。', '寒[さむ]く ので、 コート を 着[き]ます。', '寒[さむ]い だ から、 コート を 着[き]ます。'] },
        { mean: '日本語[にほんご] が だんだん 上手[じょうず] に なって います。', a: 'My Japanese is gradually getting better.', o: ['My Japanese was good before.', 'I want to be good at Japanese.', 'Japanese is gradually getting harder.'] },
        { build: '今晩[こんばん] は 早[はや]く 寝[ね]る つもり です。', en: 'I plan to go to bed early tonight.' },
        { say: '頑張[がんば]ります！', en: 'I\'ll do my best!' }
      ],
      convo: 'graduation-party'
    }
  ]
});
