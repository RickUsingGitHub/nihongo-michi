/* Level 2 — Doing Things: ます-verbs, particles, past tense, invitations, trains. */
JT.addLevel({
  n: 2, jlpt: 5, tag: 'N5·2', icon: '🚃', color: '#3c6e9f',
  title: 'Doing Things', jp: '動詞で話そう',
  desc: 'Verbs unlock real conversation: talk about your day, where you go, what you did, invite people out and ride the trains.',
  cando: ['Describe your daily routine', 'Say where you go and how you get there', 'Talk about yesterday, last week and last year', 'Invite friends — and turn down invitations politely', 'Say what is where with あります / います', 'Buy tickets and find the right train'],
  lessons: [
    {
      id: 'L2-1', icon: '☀️', title: 'Daily Routine', sub: 'ます / ません · を · に (time) · 食 飲 見',
      goals: ['Describe your day with ます-verbs', 'Say what you eat, drink and watch with を', 'Say what time you do things with に'],
      kanji: '食飲見',
      words: [
        '起[お]きます|get up, wake up',
        '寝[ね]ます|go to bed, sleep',
        '食[た]べます|eat',
        '飲[の]みます|drink',
        '見[み]ます|watch, see, look',
        '働[はたら]きます|work',
        '勉強[べんきょう] します|study',
        'します|do',
        '朝[あさ]ごはん|breakfast',
        '昼[ひる]ごはん|lunch',
        '晩[ばん]ごはん|dinner',
        'シャワー を 浴[あ]びます|take a shower',
        '毎朝[まいあさ]|every morning',
        'いつも|always',
        'それから|after that, and then'
      ],
      grammar: [
        { t: 'Verbs: ～ます / ～ません', x: 'Polite verbs end in <b>ます</b> (do / will do) and <b>ません</b> (don\'t / won\'t). There is no separate future tense: 食べます = "I eat" or "I will eat". The verb always comes <b>last</b>.', e: [['毎朝[まいあさ] 6時[ろくじ] に *起[お]きます*。', 'I get up at 6 every morning.'], ['朝[あさ]ごはん を *食[た]べません*。', 'I don\'t eat breakfast.'], ['今晩[こんばん] テレビ を *見[み]ます*。', 'I\'ll watch TV tonight.']] },
        { t: 'を — the object marker', x: '<b>を</b> (said "o") marks what the action is done to. Typical order: (time) + object を + verb.', e: [['コーヒー *を* 飲[の]みます。', 'I drink coffee.'], ['日本語[にほんご] *を* 勉強[べんきょう] します。', 'I study Japanese.']] },
        { t: 'に — at (a time)', x: 'Use <b>に</b> after clock times and dates — but NOT after relative time words like 毎日, 今日, 明日, 毎朝.', e: [['11時[じゅういちじ] *に* 寝[ね]ます。', 'I go to bed at 11.'], ['毎日[まいにち] 働[はたら]きます。', 'I work every day. (no に)']] }
      ],
      dialog: {
        title: 'What\'s your routine?', lines: [
          ['Yui', 'ケン さん は 毎朝[まいあさ] 何時[なんじ] に 起[お]きます か。', 'Ken, what time do you get up every morning?'],
          ['Ken', '6時[ろくじ] に 起[お]きます。 それから シャワー を 浴[あ]びます。', 'At 6. Then I take a shower.'],
          ['Yui', '朝[あさ]ごはん は？', 'And breakfast?'],
          ['Ken', 'パン を 食[た]べます。 コーヒー も 飲[の]みます。 ゆい さん は？', 'I eat bread. I also drink coffee. How about you?'],
          ['Yui', 'わたし は 朝[あさ]ごはん を 食[た]べません。 いつも 8時[はちじ] まで 寝[ね]ます！', 'I don\'t eat breakfast. I always sleep until 8!']
        ]
      },
      note: { t: 'Breakfast, Japanese style', x: 'A traditional Japanese breakfast (<b>和食の朝ごはん</b>) is rice, miso soup, grilled fish and pickles. Busy commuters just grab an onigiri and a bottle of tea from the konbini on the way to the station.' },
      ex: [
        { fill: 'コーヒー ＿ 飲[の]みます。', a: 'を', o: ['に', 'は'], en: 'I drink coffee.' },
        { fill: '7時[しちじ] ＿ 起[お]きます。', a: 'に', o: ['を', 'の'], en: 'I get up at 7.' },
        { mc: '"I don\'t watch TV."', a: 'テレビ を 見[み]ません。', o: ['テレビ を 見[み]ます。', 'テレビ は 見[み]ます か。', 'テレビ を 見[み]ました。'] },
        { build: '毎朝[まいあさ] 7時[しちじ] に 起[お]きます。', en: 'I get up at 7 every morning.' },
        { mean: '晩[ばん]ごはん を 食[た]べません。', a: 'I don\'t eat dinner.', o: ['I eat dinner.', 'I don\'t eat breakfast.', 'Let\'s eat dinner.'] },
        { resp: '毎日[まいにち] 日本語[にほんご] を 勉強[べんきょう] します か。', npcEn: 'Do you study Japanese every day?', a: 'はい、 毎日[まいにち] 勉強[べんきょう] します。', o: ['はい、 勉強[べんきょう] です か。', 'いいえ、 毎日[まいにち] です。'] },
        { say: '何時[なんじ] に 起[お]きます か。', en: 'What time do you get up?' }
      ],
      convo: 'routine-chat'
    },
    {
      id: 'L2-2', icon: '🚲', title: 'Going Places', sub: 'へ / に · で (by) · 行 来 帰 電 車',
      goals: ['Say where you go, come and return', 'Say how you travel: by train, bus, on foot', 'Read the kanji for go, come, return, electricity and car'],
      kanji: '行来帰電車',
      words: [
        '行[い]きます|go',
        '来[き]ます|come',
        '帰[かえ]ります|go home, return',
        '電車[でんしゃ]|train',
        '地下鉄[ちかてつ]|subway',
        '車[くるま]|car',
        '自転車[じてんしゃ]|bicycle',
        '飛行機[ひこうき]|airplane',
        '新幹線[しんかんせん]|bullet train',
        '歩[ある]いて|on foot',
        '会社[かいしゃ]|company, office',
        'うち|home, my house',
        '空港[くうこう]|airport',
        '何[なに] で|by what (means)'
      ],
      grammar: [
        { t: 'へ / に — direction', x: '<b>へ</b> (said "e") or <b>に</b> marks where you\'re going. Both work with 行きます, 来ます and 帰ります.', e: [['会社[かいしゃ] *に* 行[い]きます。', 'I go to the office.'], ['日本[にほん] *へ* 来[き]ました。', 'I came to Japan.'], ['7時[しちじ] に うち *に* 帰[かえ]ります。', 'I go home at 7.']] },
        { t: 'で — by (means)', x: '<b>で</b> marks how you do something: transport, tools, language. But "on foot" is just <b>歩いて</b> (no で).', e: [['電車[でんしゃ] *で* 会社[かいしゃ] に 行[い]きます。', 'I go to work by train.'], ['何[なに] *で* 来[き]ます か。', 'How will you come?'], ['歩[ある]いて 帰[かえ]ります。', 'I walk home.']] }
      ],
      dialog: {
        title: 'Commuting', lines: [
          ['Sato', 'エマ さん は 何[なに] で 会社[かいしゃ] に 来[き]ます か。', 'Emma, how do you get to the office?'],
          ['Emma', '地下鉄[ちかてつ] で 来[き]ます。 佐藤[さとう] さん は？', 'By subway. And you, Sato?'],
          ['Sato', 'わたし は 自転車[じてんしゃ] です。 20分[にじゅっぷん] ぐらい です。', 'I come by bike. About 20 minutes.'],
          ['Emma', 'いい です ね。 週末[しゅうまつ] は どこ か へ 行[い]きます か。', 'Nice. Are you going anywhere this weekend?'],
          ['Sato', '新幹線[しんかんせん] で 大阪[おおさか] へ 行[い]きます。', 'I\'m going to Osaka by shinkansen.'],
          ['Emma', 'へえ、 いい です ね！', 'Wow, nice!']
        ], me: 'Emma'
      },
      note: { t: 'Get an IC card', x: 'Japan\'s trains are the best way to travel. Get an IC card (<b>Suica</b>, <b>PASMO</b>, <b>ICOCA</b>) or add one to your phone: tap in and out of trains and buses and even pay at konbini. Tokyo → Osaka by shinkansen takes about 2.5 hours.' },
      ex: [
        { fill: '電車[でんしゃ] ＿ 行[い]きます。', a: 'で', o: ['を', 'は'], en: 'I go by train.' },
        { fill: '空港[くうこう] ＿ 行[い]きます。', a: 'へ', o: ['を', 'で'], en: 'I go to the airport.' },
        { mc: '"I walk to school."', a: '歩[ある]いて 学校[がっこう] に 行[い]きます。', o: ['歩[ある]いて で 学校[がっこう] に 行[い]きます。', '学校[がっこう] を 歩[ある]いて 来[き]ます。', '学校[がっこう] で 歩[ある]いて 行[い]きます。'] },
        { build: 'バス で うち に 帰[かえ]ります。', en: 'I go home by bus.' },
        { resp: '何[なに] で 来[き]ました か。', npcEn: 'How did you get here?', a: 'タクシー で 来[き]ました。', o: ['タクシー を 来[き]ました。', 'タクシー です か。'] },
        { mean: '飛行機[ひこうき] で 日本[にほん] に 来[き]ます。', a: 'I will come to Japan by plane.', o: ['I went home by plane.', 'The plane comes from Japan.', 'I will go to the airport by train.'] }
      ],
      convo: 'commute'
    },
    {
      id: 'L2-3', icon: '⏪', title: 'Yesterday & Last Week', sub: 'ました / ませんでした · でした · 年 先 週 毎',
      goals: ['Talk about the past with ました', 'Say what you didn\'t do', 'Use last week / last year / every week'],
      kanji: '年先週毎',
      words: [
        '去年[きょねん]|last year',
        '今年[ことし]|this year',
        '来年[らいねん]|next year',
        '先月[せんげつ]|last month',
        '毎週[まいしゅう]|every week',
        '毎晩[まいばん]|every night',
        'ゆうべ|last night',
        '休[やす]みます|rest, take a day off',
        '会[あ]います|meet (someone: に会います)',
        'カラオケ|karaoke',
        '映画[えいが]|movie',
        'どこ も|nowhere (with a negative)'
      ],
      grammar: [
        { t: 'Past: ～ました / ～ませんでした', x: 'Change <b>ます → ました</b> for the past and <b>ません → ませんでした</b> for the negative past.', e: [['昨日[きのう] 映画[えいが] を *見[み]ました*。', 'I watched a movie yesterday.'], ['先週[せんしゅう] は *働[はたら]きません でした*。', 'I didn\'t work last week.'], ['何[なに] を *食[た]べました* か。', 'What did you eat?']] },
        { t: 'Past of です: でした', x: '<b>です → でした</b> (was), <b>じゃありません → じゃありませんでした</b> (wasn\'t).', e: [['昨日[きのう] は 休[やす]み *でした*。', 'Yesterday was a day off.'], ['パーティー は 金曜日[きんようび] *でした*。', 'The party was on Friday.']] }
      ],
      dialog: {
        title: 'Monday morning', lines: [
          ['Sato', '週末[しゅうまつ] は 何[なに] を しました か。', 'What did you do on the weekend?'],
          ['You', '土曜日[どようび] は 友[とも]だち に 会[あ]いました。 カラオケ に 行[い]きました。', 'On Saturday I met friends. We went to karaoke.'],
          ['Sato', 'いい です ね！ 日曜日[にちようび] は？', 'Nice! And Sunday?'],
          ['You', '日曜日[にちようび] は どこ も 行[い]きません でした。 うち で 休[やす]みました。', 'On Sunday I didn\'t go anywhere. I rested at home.'],
          ['Sato', 'わたし も です。 ゆうべ は 10時[じゅうじ] に 寝[ね]ました。', 'Same here. I went to bed at 10 last night.']
        ]
      },
      note: { t: 'Karaoke, Japanese style', x: 'In Japan you rent a private room (<b>カラオケボックス</b>) with friends by the hour — no strangers watching. Many places have all-you-can-drink plans. "How was your weekend?" is the classic Monday question at work.' },
      ex: [
        { mc: '"I didn\'t eat breakfast."', a: '朝[あさ]ごはん を 食[た]べません でした。', o: ['朝[あさ]ごはん を 食[た]べました。', '朝[あさ]ごはん を 食[た]べません。', '朝[あさ]ごはん を 食[た]べます。'] },
        { fill: '昨日[きのう] は 休[やす]み ＿。', a: 'でした', o: ['ました', 'です か'], en: 'Yesterday was a day off.' },
        { build: '先週[せんしゅう] 京都[きょうと] に 行[い]きました。', en: 'I went to Kyoto last week.' },
        { resp: '週末[しゅうまつ] は 何[なに] を しました か。', npcEn: 'What did you do on the weekend?', a: '映画[えいが] を 見[み]ました。', o: ['映画[えいが] を 見[み]ます か。', '映画[えいが] でした。'] },
        { mean: '去年[きょねん] 日本[にほん] に 来[き]ました。', a: 'I came to Japan last year.', o: ['I will come to Japan next year.', 'I came to Japan last month.', 'I come to Japan every year.'] },
        { say: '週末[しゅうまつ] は 何[なに] を しました か。', en: 'What did you do on the weekend?' }
      ],
      convo: 'weekend-report'
    },
    {
      id: 'L2-4', icon: '📚', title: 'Where You Do Things', sub: 'で (place) · 何か / 何も · 読 書 聞 買',
      goals: ['Say where you do things with で', 'Use "something" and "nothing"', 'Read the kanji for read, write, listen and buy'],
      kanji: '読書聞買',
      words: [
        '読[よ]みます|read',
        '書[か]きます|write',
        '聞[き]きます|listen; ask',
        '買[か]います|buy',
        '撮[と]ります|take (a photo)',
        '新聞[しんぶん]|newspaper',
        '手紙[てがみ]|letter',
        '音楽[おんがく]|music',
        '雑誌[ざっし]|magazine',
        '公園[こうえん]|park',
        '本屋[ほんや]|bookstore',
        '何[なに] か|something',
        '何[なに] も ～ません|nothing, not anything'
      ],
      grammar: [
        { t: 'で — place of action', x: '<b>で</b> marks where an action happens. Compare: <b>に / へ</b> for where you go, <b>で</b> for where you do something.', e: [['カフェ *で* 本[ほん] を 読[よ]みます。', 'I read books at a café.'], ['コンビニ *で* お弁当[べんとう] を 買[か]いました。', 'I bought a bento at the konbini.'], ['公園[こうえん] *で* 写真[しゃしん] を 撮[と]りました。', 'I took photos in the park.']] },
        { t: '何[なに]か / 何[なに]も', x: '<b>何か</b> = something (questions and positives). <b>何も</b> + negative = nothing.', e: [['*何[なに] か* 買[か]いました か。', 'Did you buy something?'], ['いいえ、 *何[なに] も* 買[か]いません でした。', 'No, I didn\'t buy anything.']] }
      ],
      dialog: {
        title: 'A day in Shibuya', lines: [
          ['Yui', '昨日[きのう] は 渋谷[しぶや] で 何[なに] を しました か。', 'What did you do in Shibuya yesterday?'],
          ['You', '本屋[ほんや] で 日本語[にほんご] の 本[ほん] を 買[か]いました。', 'I bought a Japanese book at a bookstore.'],
          ['Yui', 'へえ！ ほか に 何[なに] か 買[か]いました か。', 'Wow! Did you buy anything else?'],
          ['You', 'いいえ、 何[なに] も 買[か]いません でした。 でも、 カフェ で 音楽[おんがく] を 聞[き]きました。', 'No, nothing else. But I listened to music at a café.'],
          ['Yui', 'いい です ね。 写真[しゃしん] は？', 'Nice. Any photos?'],
          ['You', 'はい、 スクランブル交差点[こうさてん] で たくさん 撮[と]りました！', 'Yes, I took lots at the scramble crossing!']
        ]
      },
      note: { t: '聞く = listen AND ask', x: '<b>聞きます</b> means both "listen" and "ask": 音楽を聞きます = listen to music; 道を聞きます = ask the way. Context makes it clear.' },
      ex: [
        { fill: '図書館[としょかん] ＿ 本[ほん] を 読[よ]みます。', a: 'で', o: ['に', 'を'], en: 'I read books at the library.' },
        { fill: 'デパート ＿ 行[い]きます。', a: 'に', o: ['で', 'を'], en: 'I\'m going to the department store.', why: 'Destination → に (or へ).' },
        { mc: '"I didn\'t buy anything."', a: '何[なに] も 買[か]いません でした。', o: ['何[なに] か 買[か]いました。', '何[なに] を 買[か]いました か。', '何[なに] も 買[か]いました。'] },
        { build: '公園[こうえん] で 写真[しゃしん] を 撮[と]りました。', en: 'I took photos in the park.' },
        { resp: '何[なに] か 飲[の]みます か。', npcEn: 'Will you have something to drink?', a: 'じゃあ、 お茶[ちゃ] を おねがいします。', o: ['いいえ、 何[なに] か 飲[の]みません。', 'お茶[ちゃ] で 飲[の]みます。'] },
        { mean: '毎朝[まいあさ] 電車[でんしゃ] で 新聞[しんぶん] を 読[よ]みます。', a: 'I read the newspaper on the train every morning.', o: ['I buy a newspaper at the station every morning.', 'I read a book on the bus every night.', 'I write letters on the train.'] }
      ],
      convo: 'bookstore'
    },
    {
      id: 'L2-5', icon: '🎬', title: 'Let\'s Go! Invitations', sub: 'ませんか · ましょう · 会 友',
      goals: ['Invite someone with ～ませんか', 'Suggest and accept with ～ましょう', 'Turn down invitations the Japanese way'],
      kanji: '会友',
      words: [
        '～ ません か|won\'t you ~? (invitation)',
        '～ ましょう|let\'s ~',
        '～ ましょう か|shall we ~? / shall I ~?',
        '遊[あそ]びます|hang out, play',
        '散歩[さんぽ] します|take a walk',
        '飲[の]み会[かい]|drinking party',
        'コンサート|concert',
        '花火[はなび]|fireworks',
        '約束[やくそく]|promise, plans, appointment',
        '残念[ざんねん] です が|unfortunately…',
        'また 今度[こんど]|maybe next time',
        'ぜひ|definitely, I\'d love to',
        'いっしょ に|together'
      ],
      grammar: [
        { t: '～ませんか — Won\'t you…?', x: 'The polite way to invite: make the verb negative and add か. It\'s softer than asking "do you want to…?"', e: [['いっしょ に 映画[えいが] を *見[み]ません か*。', 'Would you like to watch a movie together?'], ['土曜日[どようび] に 飲[の]み に *行[い]きません か*。', 'Want to go for drinks on Saturday?']] },
        { t: '～ましょう — Let\'s…', x: 'Accept or suggest with <b>ましょう</b>. <b>ましょうか</b> asks "shall we…?" — or offers help: "shall I…?"', e: [['ええ、 *行[い]きましょう*！', 'Yes, let\'s go!'], ['何時[なんじ] に *会[あ]いましょう か*。', 'What time shall we meet?'], ['荷物[にもつ]、 *持[も]ちましょう か*。', 'Shall I carry your bag?']] },
        { t: 'Saying no — the Japanese way', x: 'Refuse softly: apologize + a vague reason with <b>ちょっと…</b> + <b>また今度</b>. A direct いいえ sounds harsh.', e: [['すみません、 土曜日[どようび] は *ちょっと*…', 'Sorry, Saturday is a bit…'], ['残念[ざんねん] です が、 *また 今度[こんど]* おねがいします。', 'Unfortunately I can\'t, but please ask me again.']] }
      ],
      dialog: {
        title: 'Inviting a friend', lines: [
          ['You', 'ゆい さん、 今週[こんしゅう] の 土曜日[どようび]、 いっしょ に 映画[えいが] を 見[み]ません か。', 'Yui, would you like to see a movie together this Saturday?'],
          ['Yui', '土曜日[どようび] は ちょっと… すみません。', 'Saturday is a bit… sorry.'],
          ['You', 'そう です か。 じゃあ、 日曜日[にちようび] は？', 'I see. Then how about Sunday?'],
          ['Yui', '日曜日[にちようび] は 大丈夫[だいじょうぶ] です。 ぜひ！', 'Sunday is fine. I\'d love to!'],
          ['You', 'じゃあ、 何時[なんじ] に 会[あ]いましょう か。', 'Then what time shall we meet?'],
          ['Yui', '2時[にじ] に 駅[えき] の 前[まえ] で 会[あ]いましょう。', 'Let\'s meet in front of the station at 2.']
        ]
      },
      note: { t: 'Meeting spots & punctuality', x: 'Friends meet at landmarks — like the Hachikō statue in Shibuya. Being 5 minutes early counts as "on time". If you\'re late, message ahead: <b>すみません、5分遅れます</b> ("sorry, I\'ll be 5 minutes late").' },
      ex: [
        { mc: 'Invite someone to eat together:', a: 'いっしょ に 食[た]べません か。', o: ['いっしょ に 食[た]べません。', 'いっしょ に 食[た]べました か。', 'いっしょ に 食[た]べます。'] },
        { resp: '明日[あした]、 いっしょ に 散歩[さんぽ] しません か。', npcEn: 'Want to take a walk together tomorrow?', a: 'いい です ね。 行[い]きましょう！', o: ['いいえ、 しません。', '散歩[さんぽ] でした。'], why: 'いいえ、しません is grammatical but very blunt!' },
        { resp: '金曜日[きんようび]、 飲[の]み会[かい] に 来[き]ません か。', npcEn: 'Want to come to the drinking party on Friday?', a: 'すみません、 金曜日[きんようび] は ちょっと…', o: ['いいえ。', '来[き]ません か。'], why: 'A polite, indirect refusal.' },
        { fill: '何時[なんじ] に 会[あ]い＿ か。', a: 'ましょう', o: ['ません', 'ました'], en: 'What time shall we meet?' },
        { build: 'いっしょ に コンサート に 行[い]きません か。', en: 'Would you like to go to a concert together?' },
        { say: '行[い]きましょう！', en: 'Let\'s go!' }
      ],
      convo: 'invite-friend'
    },
    {
      id: 'L2-6', icon: '🏠', title: 'There Is, There Are', sub: 'あります / います · positions · 何',
      goals: ['Say what is where with あります and います', 'Use position words: on, under, in front, behind, next to', 'Ask where things are'],
      kanji: '何',
      words: [
        'あります|there is, to have (things)',
        'います|there is, to have (people, animals)',
        '部屋[へや]|room',
        '机[つくえ]|desk',
        'いす|chair',
        'ベッド|bed',
        '冷蔵庫[れいぞうこ]|refrigerator',
        '猫[ねこ]|cat',
        '犬[いぬ]|dog',
        '前[まえ]|in front of',
        '後[うし]ろ|behind',
        '横[よこ]|beside, next to',
        '間[あいだ]|between',
        'だれ か|someone',
        'タオル|towel'
      ],
      grammar: [
        { t: 'あります vs います', x: 'Both mean "there is" or "to have". Use <b>います</b> for living things that move (people, animals) and <b>あります</b> for everything else (objects, plants, events).', e: [['コンビニ が *あります*。', 'There is a convenience store.'], ['猫[ねこ] が *います*。', 'There is a cat.'], ['明日[あした] テスト が *あります*。', 'I have a test tomorrow.']] },
        { t: 'Place に N が あります', x: '"In/at a place there is N": <b>Place に N が あります / います</b>. To ask where something is: <b>N は どこ に ありますか</b>.', e: [['部屋[へや] に テレビ が あります。', 'There\'s a TV in the room.'], ['駅[えき] の 前[まえ] に 銀行[ぎんこう] が あります。', 'There\'s a bank in front of the station.'], ['鍵[かぎ] は どこ に あります か。', 'Where are the keys?'], ['机[つくえ] の 上[うえ] に あります。', 'They\'re on the desk.']] }
      ],
      dialog: {
        title: 'Homestay room tour', lines: [
          ['Host', 'ここ が エマ さん の 部屋[へや] です。', 'This is your room, Emma.'],
          ['Emma', 'わあ、 広[ひろ]い です ね！ ベッド と 机[つくえ] が あります ね。', 'Wow, it\'s spacious! There\'s a bed and a desk.'],
          ['Host', 'タオル は ベッド の 上[うえ] に あります。', 'The towels are on the bed.'],
          ['Emma', 'ありがとう ございます。 あの… トイレ は どこ に あります か。', 'Thank you. Um… where is the toilet?'],
          ['Host', '部屋[へや] の 前[まえ] です。 あ、 うち に は 猫[ねこ] が います よ。 名前[なまえ] は タマ です。', 'Right in front of your room. Oh, we have a cat. Her name is Tama.'],
          ['Emma', 'かわいい！', 'So cute!']
        ], me: 'Emma'
      },
      note: { t: 'Homestay etiquette', x: 'Take your shoes off at the <b>玄関</b> (entrance). There are separate slippers just for the toilet room! Bath water is shared by the whole family, so wash and rinse <i>before</i> getting into the tub, and never drain it.' },
      ex: [
        { fill: '公園[こうえん] に 犬[いぬ] が ＿。', a: 'います', o: ['あります', 'です'], en: 'There\'s a dog in the park.' },
        { fill: '駅[えき] の 前[まえ] に 銀行[ぎんこう] が ＿。', a: 'あります', o: ['います', 'でした'], en: 'There\'s a bank in front of the station.' },
        { mc: '"Where is my wallet?"', a: 'わたし の 財布[さいふ] は どこ に あります か。', o: ['わたし の 財布[さいふ] は どこ に います か。', 'わたし の 財布[さいふ] が あります か。', 'わたし の 財布[さいふ] は だれ です か。'] },
        { build: '机[つくえ] の 上[うえ] に パソコン が あります。', en: 'There\'s a computer on the desk.' },
        { mean: '部屋[へや] に だれ か います か。', a: 'Is there someone in the room?', o: ['Who is in the room?', 'There is nobody in the room.', 'Is there a cat in the room?'] },
        { resp: 'この 近[ちか]く に コンビニ が あります か。', npcEn: 'Is there a konbini nearby?', a: 'はい、 駅[えき] の 前[まえ] に あります よ。', o: ['はい、 駅[えき] の 前[まえ] に います よ。', 'いいえ、 コンビニ です。'] }
      ],
      convo: 'homestay-room'
    },
    {
      id: 'L2-7', icon: '🔁', title: 'How Often?', sub: 'よく · ときどき · あまり～ない · 学 校 生',
      goals: ['Say how often you do things', 'Use あまり / ぜんぜん with negatives', 'Talk about your lifestyle'],
      kanji: '学校生',
      words: [
        'よく|often, a lot',
        'ときどき|sometimes',
        'たまに|occasionally',
        'あまり ～ません|not much, not often',
        '全然[ぜんぜん] ～ません|never, not at all',
        '～回[かい]|~ times',
        '料理[りょうり] します|cook',
        '掃除[そうじ] します|clean',
        '洗濯[せんたく] します|do laundry',
        '運動[うんどう] します|exercise',
        'ジム|gym',
        'お酒[さけ]|alcohol, sake',
        '生活[せいかつ]|daily life'
      ],
      grammar: [
        { t: 'Frequency words', x: 'From most to least: <b>いつも</b> (always) → <b>よく</b> (often) → <b>ときどき</b> (sometimes) → <b>たまに</b> (occasionally) → <b>あまり～ません</b> (not much) → <b>全然～ません</b> (never). The last two need a <b>negative</b> verb!', e: [['*よく* 料理[りょうり] します。', 'I often cook.'], ['*ときどき* ジム に 行[い]きます。', 'I sometimes go to the gym.'], ['*あまり* テレビ を 見[み]ません。', 'I don\'t watch TV much.'], ['お酒[さけ] は *全然[ぜんぜん]* 飲[の]みません。', 'I never drink alcohol.']] },
        { t: 'How many times: ～に～回[かい]', x: '<b>Period に Number 回</b> = "N times per period".', e: [['週[しゅう] に *二回[にかい]* 運動[うんどう] します。', 'I exercise twice a week.'], ['一日[いちにち] に *三回[さんかい]* 食[た]べます。', 'I eat three times a day.']] }
      ],
      dialog: {
        title: 'Health check', lines: [
          ['Doctor', 'よく 運動[うんどう] します か。', 'Do you exercise often?'],
          ['You', 'うーん、 あまり しません。 週[しゅう] に 一回[いっかい] ぐらい です。', 'Hmm, not much. About once a week.'],
          ['Doctor', 'お酒[さけ] は？', 'What about alcohol?'],
          ['You', 'ときどき 飲[の]みます。 たばこ は 全然[ぜんぜん] 吸[す]いません。', 'I drink sometimes. I never smoke.'],
          ['Doctor', 'いい です ね。 料理[りょうり] は します か。', 'Good. Do you cook?'],
          ['You', 'はい、 毎日[まいにち] します。', 'Yes, every day.']
        ]
      },
      note: { t: 'Student life', x: '<b>学生</b> (student), <b>学校</b> (school), <b>先生</b> (teacher) — 生 means "life / birth" and appears in tons of words. Japanese high schoolers often join a club (<b>部活</b>) that meets almost every day, even in holidays!' },
      ex: [
        { fill: 'あまり テレビ を ＿。', a: '見[み]ません', o: ['見[み]ます', '見[み]ました'], en: 'I don\'t watch TV much.', why: 'あまり needs a negative verb.' },
        { mc: '"I sometimes cook."', a: 'ときどき 料理[りょうり] します。', o: ['全然[ぜんぜん] 料理[りょうり] します。', 'ときどき 料理[りょうり] しません。', 'よく 料理[りょうり] しません。'] },
        { mean: '週[しゅう] に 三回[さんかい] ジム に 行[い]きます。', a: 'I go to the gym three times a week.', o: ['I went to the gym three times last week.', 'I go to the gym every day.', 'The gym is open three days a week.'] },
        { build: '全然[ぜんぜん] お酒[さけ] を 飲[の]みません。', en: 'I never drink alcohol.' },
        { resp: 'よく 料理[りょうり] します か。', npcEn: 'Do you cook often?', a: 'いいえ、 あまり しません。', o: ['いいえ、 よく します。', 'はい、 全然[ぜんぜん] します。'] },
        { say: 'ときどき 運動[うんどう] します。', en: 'I sometimes exercise.' }
      ],
      convo: 'gym-signup'
    },
    {
      id: 'L2-8', icon: '🎁', title: 'Gifts: Give & Receive', sub: 'あげます · もらいます · くれます · 社',
      goals: ['Talk about giving and receiving gifts', 'Choose between あげます and くれます', 'Understand Japanese gift customs'],
      kanji: '社',
      words: [
        'あげます|give (to others)',
        'もらいます|receive, get',
        'くれます|give (to me / my family)',
        'プレゼント|present',
        '花[はな]|flower',
        'チョコレート|chocolate',
        'ネクタイ|necktie',
        'お祝[いわ]い|celebration gift',
        'おめでとう ございます|congratulations',
        'バレンタインデー|Valentine\'s Day',
        'ホワイトデー|White Day (March 14)',
        'かわいい|cute',
        'うれしい|happy, glad',
        'お返[かえ]し|return gift'
      ],
      grammar: [
        { t: 'あげます — give (away from me)', x: '<b>Giver は Receiver に Thing を あげます</b>. Use it when I give to someone, or when one person gives to another.', e: [['わたし は 母[はは] *に* 花[はな] を *あげました*。', 'I gave my mother flowers.']] },
        { t: 'もらいます — receive', x: '<b>Receiver は Giver に / から Thing を もらいます</b>.', e: [['友[とも]だち *に* チョコレート を *もらいました*。', 'I got chocolate from a friend.']] },
        { t: 'くれます — give (to me)', x: 'When someone gives <b>to me</b> (or my family), use <b>くれます</b>. Using あげます here sounds wrong!', e: [['田中[たなか] さん が わたし に ネクタイ を *くれました*。', 'Tanaka gave me a tie.'], ['姉[あね] が これ を *くれました*。', 'My sister gave me this.']] }
      ],
      dialog: {
        title: 'Valentine\'s Day at the office', lines: [
          ['Ken', 'あ、 その チョコレート、 どう した ん です か。', 'Oh, where did that chocolate come from?'],
          ['Sato', '会社[かいしゃ] の 人[ひと] が くれました。 義理[ぎり]チョコ です よ。', 'People at the office gave it to me. It\'s "obligation chocolate".'],
          ['Ken', 'へえ！ 男[おとこ] の 人[ひと] が もらいます か。', 'Oh! Men receive it?'],
          ['Sato', 'はい。 日本[にほん] で は、 女[おんな] の 人[ひと] が 男[おとこ] の 人[ひと] に チョコ を あげます。', 'Yes. In Japan, women give chocolate to men.'],
          ['Ken', 'じゃあ、 ホワイトデー に お返[かえ]し を あげます ね。', 'So you give something back on White Day?'],
          ['Sato', 'そう です。 3月[さんがつ] 14日[じゅうよっか] です。', 'That\'s right. On March 14th.']
        ]
      },
      note: { t: 'Gift customs', x: 'On Valentine\'s Day women give chocolate — <b>本命チョコ</b> for a crush, <b>義理チョコ</b> for coworkers. On White Day (March 14) men return the favor. Gifts are offered with both hands, and small return gifts (<b>お返し</b>) are expected for many presents.' },
      ex: [
        { mc: 'Your friend gave you a book: 友だちが本を ＿。', a: 'くれました', o: ['あげました', 'もらいました', '行[い]きました'] },
        { fill: 'わたし は 母[はは] ＿ 花[はな] を あげました。', a: 'に', o: ['を', 'で'], en: 'I gave my mother flowers.' },
        { mean: '先生[せんせい] に 本[ほん] を もらいました。', a: 'I received a book from my teacher.', o: ['I gave my teacher a book.', 'My teacher gave me a pen.', 'I bought my teacher a book.'] },
        { build: '友[とも]だち に プレゼント を あげました。', en: 'I gave my friend a present.' },
        { resp: 'お誕生日[たんじょうび] おめでとう ございます！ これ、 どうぞ。', npcEn: 'Happy birthday! This is for you.', a: 'わあ、 ありがとう ございます！ うれしい です。', o: ['どういたしまして。', 'おめでとう ございます。'], why: 'どういたしまして = "you\'re welcome" — wrong role here!' },
        { say: 'おめでとう ございます！', en: 'Congratulations!' }
      ],
      convo: 'gift-exchange'
    },
    {
      id: 'L2-9', icon: '🚉', title: 'At the Station', sub: 'Trains · に乗る / を降りる · 駅',
      goals: ['Find the right platform', 'Ask about transfers and stops', 'Get on and off trains — in Japanese'],
      kanji: '駅',
      words: [
        '乗[の]ります|ride, get on (〜に)',
        '降[お]ります|get off (〜を)',
        '乗[の]り換[か]え|transfer',
        '～行[ゆ]き|bound for ~',
        '～番線[ばんせん]|platform/track ~',
        '何番線[なんばんせん]|which platform',
        '次[つぎ]|next',
        '各駅[かくえき] 停車[ていしゃ]|local train (stops everywhere)',
        '急行[きゅうこう]|express',
        '改札[かいさつ]|ticket gate',
        'ホーム|platform',
        '終電[しゅうでん]|last train',
        '止[と]まります|stop',
        'IC[アイシー] カード|IC card (Suica, PASMO…)',
        'チャージ します|top up'
      ],
      grammar: [
        { t: 'に 乗[の]ります / を 降[お]ります', x: 'You get <b>on</b> a vehicle with <b>に</b> and get <b>off</b> with <b>を</b>.', e: [['山手線[やまのてせん] *に* 乗[の]ります。', 'I take the Yamanote Line.'], ['次[つぎ] の 駅[えき] で 電車[でんしゃ] *を* 降[お]ります。', 'I get off the train at the next station.']] },
        { t: 'Asking about trains', x: 'Key questions at any station:', e: [['新宿[しんじゅく] 行[ゆ]き は *何番線[なんばんせん]* です か。', 'Which platform is the train for Shinjuku?'], ['この 電車[でんしゃ] は 渋谷[しぶや] に *止[と]まります か*。', 'Does this train stop at Shibuya?'], ['どこ で *乗[の]り換[か]えます か*。', 'Where do I transfer?']] }
      ],
      dialog: {
        title: 'Asking station staff', lines: [
          ['You', 'すみません、 浅草[あさくさ] に 行[い]きたい です。 何番線[なんばんせん] です か。', 'Excuse me, I want to go to Asakusa. Which platform?'],
          ['Staff', '銀座線[ぎんざせん] です ね。 2番線[にばんせん] です。', 'That\'s the Ginza Line. Platform 2.'],
          ['You', '乗[の]り換[か]え は あります か。', 'Do I need to transfer?'],
          ['Staff', 'いいえ、 ありません。 終点[しゅうてん] です よ。', 'No. It\'s the last stop.'],
          ['You', 'IC[アイシー] カード は 使[つか]えます か。', 'Can I use an IC card?'],
          ['Staff', 'はい、 使[つか]えます。', 'Yes, you can.'],
          ['You', 'ありがとう ございます。', 'Thank you.']
        ]
      },
      note: { t: 'Train etiquette', x: 'Don\'t talk on the phone on trains, queue at the marked lines on the platform, and offer <b>優先席</b> (priority seats) to those who need them. Some rush-hour cars are <b>女性専用車</b> (women only). Watch for the <b>終電</b> — the last train leaves around midnight!' },
      ex: [
        { fill: '電車[でんしゃ] ＿ 乗[の]ります。', a: 'に', o: ['を', 'で'], en: 'I get on the train.' },
        { fill: '次[つぎ] の 駅[えき] で バス ＿ 降[お]ります。', a: 'を', o: ['に', 'で'], en: 'I get off the bus at the next stop.' },
        { mc: '"Which platform is it?"', a: '何番線[なんばんせん] です か。', o: ['何時[なんじ] です か。', '何階[なんがい] です か。', '何回[なんかい] です か。'] },
        { mean: '東京[とうきょう] 行[ゆ]き の 電車[でんしゃ]', a: 'a train bound for Tokyo', o: ['a train from Tokyo', 'Tokyo station', 'a train ticket to Tokyo'] },
        { resp: 'どちら まで です か。', npcEn: 'Where are you going?', a: '新宿[しんじゅく] まで です。', o: ['新宿[しんじゅく] から です。', '2番線[にばんせん] です。'] },
        { say: 'この 電車[でんしゃ] は 渋谷[しぶや] に 止[と]まります か。', en: 'Does this train stop at Shibuya?' }
      ],
      convo: 'train-station'
    },
    {
      id: 'L2-10', icon: '📝', title: 'Review: My Weekend', sub: 'Telling a story · それから · でも',
      goals: ['Tell a short story about your weekend', 'Link sentences with そして, それから and でも', 'Use the all-purpose work greeting お疲れ様です'],
      words: [
        'そして|and (then)',
        'でも|but',
        'とても|very',
        'たくさん|a lot, many',
        '大変[たいへん]|tough, hard',
        '楽[たの]しい|fun',
        '疲[つか]れました|I\'m tired',
        'お疲[つか]れ様[さま] です|good work / hello (to colleagues)',
        'お先[さき] に 失礼[しつれい] します|excuse me for leaving first',
        '海[うみ]|sea, beach',
        'お寺[てら]|temple'
      ],
      grammar: [
        { t: 'Linking sentences', x: 'Tell stories with <b>そして</b> (and), <b>それから</b> (after that) and <b>でも</b> (but) at the start of sentences.', e: [['朝[あさ] ジム に 行[い]きました。 *それから* 買[か]い物[もの] を しました。', 'I went to the gym in the morning. After that I went shopping.'], ['映画[えいが] を 見[み]ました。 *でも*、 つまらなかった です。', 'I watched a movie. But it was boring.']] },
        { t: 'お疲[つか]れ様[さま]です — the work greeting', x: '<b>お疲れ様です</b> literally means "you must be tired", but at work it\'s hello, goodbye and "good job" all in one. Leaving before your coworkers? Say <b>お先に失礼します</b>.', e: [['*お疲[つか]れ様[さま] です*。', 'Hi / good work. (to colleagues)'], ['*お先[さき] に 失礼[しつれい] します*。', 'Excuse me for leaving before you.']] }
      ],
      dialog: {
        title: 'Weekend story', lines: [
          ['Sato', 'お疲[つか]れ様[さま] です。 週末[しゅうまつ] は どう でした か。', 'Hi there. How was your weekend?'],
          ['You', 'とても 楽[たの]しかった です。 土曜日[どようび] は 6時[ろくじ] に 起[お]きました。', 'It was really fun. On Saturday I got up at 6.'],
          ['You', 'そして、 友[とも]だち と 電車[でんしゃ] で 鎌倉[かまくら] に 行[い]きました。', 'And I went to Kamakura by train with a friend.'],
          ['Sato', 'いい です ね！ 何[なに] を しました か。', 'Nice! What did you do?'],
          ['You', '大仏[だいぶつ] を 見[み]ました。 それから、 海[うみ] の 近[ちか]く で しらす丼[どん] を 食[た]べました。', 'We saw the Great Buddha. Then we ate shirasu rice bowls near the sea.'],
          ['Sato', 'へえ！ 日曜日[にちようび] は？', 'Wow! And Sunday?'],
          ['You', '日曜日[にちようび] は 疲[つか]れました から、 どこ も 行[い]きません でした。', 'On Sunday I was tired, so I didn\'t go anywhere.']
        ]
      },
      note: { t: 'Easy day trips from Tokyo', x: '<b>鎌倉</b> (temples and the Great Buddha), <b>日光</b> (ornate shrines) and <b>箱根</b> (hot springs and views of Mt. Fuji) are all 1–2 hours by train — perfect weekend trips.' },
      ex: [
        { mc: 'Greeting a coworker at the office in the afternoon:', a: 'お疲[つか]れ様[さま] です。', o: ['いただきます。', 'おやすみなさい。', 'はじめまして。'] },
        { fill: '映画[えいが] を 見[み]ました。 ＿、 つまらなかった です。', a: 'でも', o: ['そして', 'それから'], en: 'I watched a movie. But it was boring.' },
        { mean: '朝[あさ] 起[お]きて、 それから 公園[こうえん] で 散歩[さんぽ] しました。', a: 'I got up in the morning, and then took a walk in the park.', o: ['I walked to the park every morning.', 'I got up late and didn\'t go to the park.', 'I will take a walk in the park tomorrow.'] },
        { resp: '週末[しゅうまつ] は どう でした か。', npcEn: 'How was your weekend?', a: 'とても 楽[たの]しかった です。', o: ['とても 楽[たの]しい でした。', '週末[しゅうまつ] でした。'] },
        { build: '友[とも]だち と 電車[でんしゃ] で 海[うみ] に 行[い]きました。', en: 'I went to the beach by train with a friend.' },
        { say: 'お先[さき] に 失礼[しつれい] します。', en: 'Excuse me for leaving before you.' }
      ],
      convo: 'izakaya-coworkers'
    }
  ]
});
