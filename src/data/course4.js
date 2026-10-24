/* Level 4 — Connecting Ideas: the て-form, ない-form and casual speech. */
JT.addLevel({
  n: 4, jlpt: 5, tag: 'N5·4', icon: '🔗', color: '#a0522d',
  title: 'Connecting Ideas', jp: 'て形でつなごう',
  desc: 'The て-form is the Swiss-army knife of Japanese: requests, directions, "doing right now", permission, rules and linking actions — plus ない-forms and casual speech with friends.',
  cando: ['Make polite requests', 'Give and follow directions', 'Say what you are doing right now and describe people', 'Ask permission and understand rules and signs', 'Explain symptoms at a clinic', 'Chat casually with friends'],
  lessons: [
    {
      id: 'L4-1', icon: '🙏', title: 'The て-form & Requests', sub: '～てください · 言 話',
      goals: ['Make the て-form of any verb', 'Ask people to do things with ～てください', 'Ask a stranger to take your photo'],
      kanji: '言話',
      words: [
        '～ て ください|please do ~',
        '見[み]せます|show',
        '教[おし]えます|teach, tell',
        '手伝[てつだ]います|help',
        '待[ま]ちます|wait',
        '話[はな]します|speak, talk',
        '言[い]います|say',
        '使[つか]います|use',
        '持[も]ちます|hold, carry',
        '開[あ]けます|open',
        '閉[し]めます|close',
        '押[お]します|push, press',
        'もう 一度[いちど]|once more'
      ],
      grammar: [
        { t: 'Making the て-form', x: 'From the ます-form:<br>• <b>～います・～ちます・～ります</b> → <b>って</b> (買って, 待って, 帰って)<br>• <b>～みます・～びます・～にます</b> → <b>んで</b> (飲んで, 遊んで)<br>• <b>～きます</b> → <b>いて</b> (書いて) — except 行きます → <b>行って</b><br>• <b>～ぎます</b> → <b>いで</b> (泳いで)<br>• <b>～します</b> → <b>して</b> (話して)<br>• Ru-verbs — most <b>～えます</b> verbs plus 見ます, 起きます, います, 着ます — just drop ます: 食べて, 見て<br>• Irregular: <b>来ます → 来[き]て</b>, します → して.', e: [['書[か]きます → *書[か]いて*', 'write'], ['飲[の]みます → *飲[の]んで*', 'drink'], ['待[ま]ちます → *待[ま]って*', 'wait'], ['話[はな]します → *話[はな]して*', 'speak'], ['行[い]きます → *行[い]って*', 'go (exception!)']] },
        { t: '～てください — please do…', x: 'て-form + <b>ください</b> = a polite request. Start with すみません for extra politeness. Even more polite: <b>～ていただけませんか</b>.', e: [['ちょっと *待[ま]って ください*。', 'Please wait a moment.'], ['もう 一度[いちど] *言[い]って ください*。', 'Please say it once more.'], ['すみません、 写真[しゃしん] を *撮[と]って ください*。', 'Excuse me, could you take a photo of us?']] }
      ],
      dialog: {
        title: 'Can you take our photo?', lines: [
          ['You', 'すみません、 写真[しゃしん] を 撮[と]って いただけません か。', 'Excuse me, could you possibly take our photo?'],
          ['Woman', 'はい、 いい です よ。', 'Sure.'],
          ['You', 'ありがとう ございます。 ここ を 押[お]して ください。', 'Thank you. Please press here.'],
          ['Woman', 'はい、 撮[と]ります よ。 はい、 チーズ！', 'OK, here goes. Say cheese!'],
          ['You', 'すみません、 もう 一枚[いちまい] おねがいします。 縦[たて] で 撮[と]って ください。', 'Sorry, one more please. Vertically, please.'],
          ['Woman', 'はい、 どうぞ。', 'Here you go.'],
          ['You', 'ありがとう ございました！', 'Thank you so much!']
        ]
      },
      note: { t: 'ありがとうございました (past)', x: 'Notice the past tense <b>ありがとうございました</b> once a favor is finished — shop staff say it as you leave. While the kindness is still happening, use <b>ありがとうございます</b>.' },
      ex: [
        { mc: 'て-form of 飲みます:', a: '飲[の]んで', o: ['飲[の]みて', '飲[の]って', '飲[の]いて'] },
        { mc: 'て-form of 書きます:', a: '書[か]いて', o: ['書[か]きて', '書[か]って', '書[か]んで'] },
        { mc: 'て-form of 行きます:', a: '行[い]って', o: ['行[い]いて', '行[い]きて', '行[い]んで'] },
        { mc: 'て-form of 待ちます:', a: '待[ま]って', o: ['待[ま]ちて', '待[ま]んで', '待[ま]いて'] },
        { mc: 'て-form of 食べます:', a: '食[た]べて', o: ['食[た]べって', '食[た]んで', '食[た]べいて'] },
        { fill: 'ゆっくり 話[はな]＿ ください。', a: 'して', o: ['いて', 'って'], en: 'Please speak slowly.' },
        { resp: '住所[じゅうしょ] は 港区[みなとく] 六本木[ろっぽんぎ] いち の に の さん です。', npcEn: '(very fast) The address is 1-2-3 Roppongi, Minato-ku.', a: 'すみません、 もう 一度[いちど] 言[い]って ください。', o: ['すみません、 もう 一度[いちど] 言[い]います。', 'もう 一度[いちど] 言[い]いません か。'] },
        { build: 'ちょっと 待[ま]って ください。', en: 'Please wait a moment.' },
        { say: '写真[しゃしん] を 撮[と]って ください。', en: 'Please take a photo.' }
      ],
      convo: 'photo-request'
    },
    {
      id: 'L4-2', icon: '🧭', title: 'Directions', sub: '～て、～て · を (through) · 右 左 道',
      goals: ['Ask for directions', 'Give step-by-step directions with the て-form', 'Understand landmarks: lights, corners, bridges'],
      kanji: '右左道',
      words: [
        '道[みち]|road, way',
        '曲[ま]がります|turn',
        '渡[わた]ります|cross',
        'まっすぐ 行[い]きます|go straight',
        '信号[しんごう]|traffic light',
        '角[かど]|corner',
        '交差点[こうさてん]|intersection',
        '橋[はし]|bridge',
        '～つ目[め]|the ~th (one)',
        '突[つ]き当[あ]たり|end of the road',
        '地図[ちず]|map',
        '迷[まよ]います|get lost',
        '向[む]かい|across from, opposite',
        '交番[こうばん]|police box'
      ],
      grammar: [
        { t: 'Giving directions with て', x: 'Chain the steps with the て-form: "go straight AND turn AND…". Movement <i>through</i> a place takes <b>を</b> (道を渡る, 角を曲がる).', e: [['まっすぐ *行[い]って*、 二[ふた]つ目[め] の 信号[しんごう] を 右[みぎ] に *曲[ま]がって* ください。', 'Go straight and turn right at the second traffic light.'], ['橋[はし] *を* 渡[わた]って ください。', 'Please cross the bridge.'], ['左[ひだり] に コンビニ が あります。', 'There\'s a convenience store on the left.']] },
        { t: 'Asking the way', x: 'Useful openers when you\'re lost:', e: [['すみません、 道[みち] に *迷[まよ]いました*。', 'Excuse me, I\'m lost.'], ['駅[えき] まで *どう 行[い]けば いい です か*。', 'How do I get to the station?'], ['地図[ちず] を *書[か]いて ください*。', 'Could you draw me a map?']] }
      ],
      dialog: {
        title: 'Lost in the neighborhood', lines: [
          ['You', 'すみません、 道[みち] に 迷[まよ]いました。 さくら ホテル は どこ です か。', 'Excuse me, I\'m lost. Where is the Sakura Hotel?'],
          ['Man', 'さくら ホテル です か。 この 道[みち] を まっすぐ 行[い]って ください。', 'The Sakura Hotel? Go straight along this road.'],
          ['Man', 'それから、 二[ふた]つ目[め] の 信号[しんごう] を 左[ひだり] に 曲[ま]がって ください。', 'Then turn left at the second traffic light.'],
          ['You', '二[ふた]つ目[め] の 信号[しんごう] を 左[ひだり] です ね。', 'Left at the second light.'],
          ['Man', 'はい。 橋[はし] を 渡[わた]って、 右[みぎ] に あります よ。 銀行[ぎんこう] の 向[む]かい です。', 'Yes. Cross the bridge and it\'s on the right, across from the bank.'],
          ['You', 'よく わかりました。 ありがとう ございました！', 'Got it. Thank you very much!']
        ]
      },
      note: { t: 'No street names!', x: 'Most Japanese streets have no names — addresses use districts and block numbers (港区六本木1-2-3). People give directions by landmarks: konbini, banks, traffic lights. <b>交番</b> (police boxes) have detailed local maps and officers happy to help.' },
      ex: [
        { mean: '二[ふた]つ目[め] の 角[かど] を 右[みぎ] に 曲[ま]がって ください。', a: 'Please turn right at the second corner.', o: ['Please turn left at the first corner.', 'Go straight past two corners.', 'The second building on the right.'] },
        { fill: '橋[はし] ＿ 渡[わた]って ください。', a: 'を', o: ['に', 'で'], en: 'Please cross the bridge.' },
        { mc: '"Go straight and turn left."', a: 'まっすぐ 行[い]って、 左[ひだり] に 曲[ま]がって ください。', o: ['まっすぐ 行[い]きます、 左[ひだり] に 曲[ま]がります ください。', 'まっすぐ 行[い]って、 左[ひだり] を 曲[ま]がります。', 'まっすぐ と 左[ひだり] に 曲[ま]がって ください。'] },
        { build: '信号[しんごう] を 右[みぎ] に 曲[ま]がって ください。', en: 'Please turn right at the traffic light.' },
        { mc: 'Which kanji means LEFT?', a: '左[ひだり]', o: ['右[みぎ]', '道[みち]', '上[うえ]'] },
        { say: 'すみません、 道[みち] に 迷[まよ]いました。', en: 'Excuse me, I\'m lost.' }
      ],
      convo: 'directions'
    },
    {
      id: 'L4-3', icon: '📱', title: 'Right Now: ～ています', sub: 'Ongoing actions · 休 立',
      goals: ['Say what you\'re doing right now', 'Ask what someone is doing', 'Handle a "where are you?" phone call'],
      kanji: '休立',
      words: [
        '～ て います|is ~ing (right now)',
        '休憩[きゅうけい]|break, rest',
        '立[た]ちます|stand',
        '座[すわ]ります|sit',
        '泳[およ]ぎます|swim',
        '歌[うた]います|sing',
        '走[はし]ります|run',
        'もしもし|hello (on the phone)',
        'すぐ|right away, soon',
        '遅[おく]れます|be late, be delayed',
        '着[つ]きます|arrive',
        'みんな|everyone',
        'ごめん|sorry (casual)'
      ],
      grammar: [
        { t: '～ています — ongoing action', x: 'て-form + <b>います</b> = "is doing" right now. In casual speech the い often drops: <b>食べてる</b>.', e: [['今[いま]、 何[なに] を *して います* か。', 'What are you doing right now?'], ['ご飯[はん] を *食[た]べて います*。', 'I\'m eating.'], ['雨[あめ] が *降[ふ]って います*。', 'It\'s raining.'], ['今[いま]、 駅[えき] に *向[む]かって います*。', 'I\'m on my way to the station.']] }
      ],
      dialog: {
        title: 'Running late', lines: [
          ['Yui', 'もしもし、 ケン さん？ 今[いま]、 どこ に います か。', 'Hello, Ken? Where are you?'],
          ['Ken', 'ごめん！ 今[いま]、 電車[でんしゃ] に 乗[の]って います。', 'Sorry! I\'m on the train now.'],
          ['Yui', 'え？ みんな 駅[えき] で 待[ま]って います よ。', 'What? Everyone\'s waiting at the station.'],
          ['Ken', '本当[ほんとう] に すみません。 電車[でんしゃ] が 遅[おく]れて います。 あと 10分[じゅっぷん] で 着[つ]きます。', 'I\'m really sorry. The train is delayed. I\'ll arrive in 10 minutes.'],
          ['Yui', 'わかりました。 じゃあ、 カフェ で 休[やす]んで います ね。', 'OK. We\'ll be resting in a café, then.']
        ]
      },
      note: { t: 'Delay certificates', x: 'Train delays are so rare in Japan that railways hand out <b>遅延証明書</b> (delay certificates) at the gates — show one to your boss or teacher to prove the train made you late!' },
      ex: [
        { mc: '"It\'s raining."', a: '雨[あめ] が 降[ふ]って います。', o: ['雨[あめ] が 降[ふ]ります います。', '雨[あめ] を 降[ふ]って います。', '雨[あめ] が 降[ふ]って あります。'] },
        { resp: '今[いま]、 何[なに] を して います か。', npcEn: 'What are you doing right now?', a: 'テレビ を 見[み]て います。', o: ['テレビ を 見[み]ました。', 'テレビ を 見[み]て います か。'] },
        { fill: '子[こ]ども が 公園[こうえん] で 遊[あそ]ん＿ います。', a: 'で', o: ['て', 'に'], en: 'The children are playing in the park.' },
        { build: '今[いま]、 駅[えき] に 向[む]かって います。', en: 'I\'m heading to the station now.' },
        { mean: 'みんな 待[ま]って います よ。', a: 'Everyone is waiting, you know.', o: ['Everyone waited.', 'Please wait, everyone.', 'Is everyone waiting?'] },
        { say: '今[いま] 電車[でんしゃ] に 乗[の]って います。', en: 'I\'m on the train now.' }
      ],
      convo: 'running-late'
    },
    {
      id: 'L4-4', icon: '🏙️', title: 'States & Descriptions', sub: '住んでいます · 知っています · 父 母',
      goals: ['Say where you live and work', 'Say you know / don\'t know', 'Describe what people are wearing'],
      kanji: '父母',
      words: [
        '住[す]んで います|live (in)',
        '結婚[けっこん] して います|be married',
        '知[し]って います|know',
        '知[し]りません|don\'t know',
        '持[も]って います|have, own',
        '働[はたら]いて います|work (at a place)',
        '独身[どくしん]|single',
        '眼鏡[めがね]|glasses',
        'かけます|put on, wear (glasses)',
        '着[き]ます|put on, wear (tops)',
        'はきます|put on, wear (shoes, trousers)',
        'かぶります|put on, wear (hats)',
        '背[せ] が 高[たか]い|tall (person)',
        '髪[かみ]|hair',
        '両親[りょうしん]|parents'
      ],
      grammar: [
        { t: '～ています — states', x: 'Some verbs + ています describe a lasting <b>state</b>, not an action in progress: 住んでいます (live), 結婚しています (am married), 知っています (know), 持っています (have), 働いています (work at).', e: [['東京[とうきょう] に *住[す]んで います*。', 'I live in Tokyo.'], ['姉[あね] は *結婚[けっこん] して います*。', 'My older sister is married.'], ['車[くるま] を *持[も]って います* か。', 'Do you have a car?']] },
        { t: '知[し]っています vs 知[し]りません', x: 'Odd but true: "I know" = <b>知っています</b>, but "I don\'t know" = <b>知りません</b> (never 知っていません). For "I\'m not sure", <b>わかりません</b> is softer.', e: [['この 店[みせ]、 *知[し]って います* か。', 'Do you know this shop?'], ['いいえ、 *知[し]りません*。', 'No, I don\'t.']] },
        { t: 'Describing people', x: 'Clothes use ています, with a different verb for each body part: <b>着ています</b> (tops), <b>はいています</b> (shoes, trousers, skirts), <b>かけています</b> (glasses), <b>かぶっています</b> (hats).', e: [['赤[あか]い シャツ を *着[き]て います*。', '(They\'re) wearing a red shirt.'], ['眼鏡[めがね] を *かけて います*。', '(They\'re) wearing glasses.'], ['帽子[ぼうし] を *かぶって います*。', '(They\'re) wearing a hat.']] }
      ],
      dialog: {
        title: 'A coworker\'s family', lines: [
          ['You', '田中[たなか] さん は どこ に 住[す]んで います か。', 'Where do you live, Tanaka?'],
          ['Tanaka', '横浜[よこはま] に 住[す]んで います。 家族[かぞく] と いっしょ です。', 'In Yokohama. With my family.'],
          ['You', '結婚[けっこん] して います か。', 'Are you married?'],
          ['Tanaka', 'はい、 子[こ]ども が 二人[ふたり] います。 父[ちち] と 母[はは] も 近[ちか]く に 住[す]んで います。', 'Yes, I have two kids. My father and mother live nearby too.'],
          ['You', 'いい です ね。 横浜[よこはま] の 中華街[ちゅうかがい]、 知[し]って います！ 有名[ゆうめい] です よ ね。', 'Nice. I know Yokohama\'s Chinatown! It\'s famous, right?'],
          ['Tanaka', 'ええ。 今度[こんど]、 いっしょ に 行[い]きましょう。', 'Yes. Let\'s go together sometime.']
        ]
      },
      note: { t: 'Personal questions', x: 'Questions about age, marriage or even salary come up more freely in Japan than in many Western countries — partly to decide how politely to speak to you. You can always deflect with a smile: <b>ひみつです</b> ("it\'s a secret")!' },
      ex: [
        { mc: '"I don\'t know."', a: '知[し]りません。', o: ['知[し]って いません。', '知[し]って ない です。', '知[し]りました。'] },
        { fill: '大阪[おおさか] ＿ 住[す]んで います。', a: 'に', o: ['で', 'を'], en: 'I live in Osaka.' },
        { mean: '兄[あに] は 結婚[けっこん] して いません。', a: 'My older brother isn\'t married.', o: ['My older brother got married.', 'My younger brother is married.', 'Is your brother married?'] },
        { mc: '"She\'s wearing glasses."', a: '眼鏡[めがね] を かけて います。', o: ['眼鏡[めがね] を 着[き]て います。', '眼鏡[めがね] を はいて います。', '眼鏡[めがね] を かぶって います。'] },
        { resp: 'この レストラン、 知[し]って います か。', npcEn: 'Do you know this restaurant?', a: 'はい、 知[し]って います。 有名[ゆうめい] です よ ね。', o: ['はい、 知[し]ります。', 'いいえ、 知[し]って いません。'] },
        { build: '車[くるま] を 持[も]って います か。', en: 'Do you have a car?' }
      ],
      convo: 'lost-friend'
    },
    {
      id: 'L4-5', icon: '🚫', title: 'May I? Rules & Permission', sub: '～てもいい · ～てはいけない · 待',
      goals: ['Ask permission politely', 'Understand what is not allowed', 'Read common rule signs'],
      kanji: '待',
      words: [
        '～ ても いい です か|may I ~?',
        '～ ては いけません|must not ~',
        'だめ|no good, not allowed',
        'タバコ を 吸[す]います|smoke',
        '入[はい]ります|enter, go in',
        '脱[ぬ]ぎます|take off (clothes, shoes)',
        '窓[まど]|window',
        '禁止[きんし]|prohibited',
        '撮影[さつえい]|photography, filming',
        'もちろん|of course',
        '待合室[まちあいしつ]|waiting room',
        '庭[にわ]|garden'
      ],
      grammar: [
        { t: '～てもいいですか — May I…?', x: 'て-form + <b>もいいですか</b> asks permission. Yes: <b>はい、どうぞ</b> / <b>いいですよ</b>. No: <b>すみません、ちょっと…</b>', e: [['ここ に *座[すわ]って も いい です か*。', 'May I sit here?'], ['写真[しゃしん] を *撮[と]って も いい です か*。', 'May I take a photo?'], ['窓[まど] を *開[あ]けて も いい です か*。', 'May I open the window?']] },
        { t: '～てはいけません — must not', x: 'て-form + <b>はいけません</b> = "you must not". Signs use <b>禁止</b> (prohibited). Casual: <b>～ちゃだめ</b>.', e: [['ここ で タバコ を *吸[す]って は いけません*。', 'You must not smoke here.'], ['美術館[びじゅつかん] で 写真[しゃしん] を *撮[と]って は いけません*。', 'You can\'t take photos in the museum.'], ['撮影[さつえい] *禁止[きんし]*', 'No photography']] }
      ],
      dialog: {
        title: 'Visiting a temple', lines: [
          ['You', 'すみません、 ここ で 写真[しゃしん] を 撮[と]って も いい です か。', 'Excuse me, may I take photos here?'],
          ['Monk', '庭[にわ] は いい です よ。 でも、 お堂[どう] の 中[なか] で は 撮[と]って は いけません。', 'The garden is fine. But not inside the hall.'],
          ['You', 'わかりました。 中[なか] に 入[はい]って も いい です か。', 'I see. May I go inside?'],
          ['Monk', 'はい、 どうぞ。 靴[くつ] を 脱[ぬ]いで ください。', 'Yes, please. Take off your shoes, please.'],
          ['You', 'はい。 あの、 ここ に 座[すわ]って も いい です か。', 'OK. Um, may I sit here?'],
          ['Monk', 'もちろん。 ゆっくり して ください。', 'Of course. Take your time.']
        ]
      },
      note: { t: 'Shoes off!', x: 'Remove your shoes at homes, temples, ryokan, some restaurants, clinics and fitting rooms — look for a step up or a shoe rack. Never step on tatami in slippers. Temples also often ask for no photos inside halls: <b>撮影禁止</b>.' },
      ex: [
        { mc: '"May I sit here?"', a: 'ここ に 座[すわ]って も いい です か。', o: ['ここ に 座[すわ]って は いけません か。', 'ここ に 座[すわ]りましょう か。', 'ここ に 座[すわ]りたい です か。'] },
        { mean: 'ここ で 食[た]べて は いけません。', a: 'You must not eat here.', o: ['You may eat here.', 'Let\'s eat here.', 'Do you want to eat here?'] },
        { mc: 'A sign says 撮影禁止. It means…', a: 'No photography', o: ['Photo spot', 'Camera shop', 'Photos welcome'] },
        { resp: '窓[まど] を 開[あ]けて も いい です か。', npcEn: 'May I open the window?', a: 'ええ、 どうぞ。', o: ['はい、 開[あ]けて は いけません。', 'いいえ、 どうぞ。'] },
        { build: '中[なか] に 入[はい]って も いい です か。', en: 'May I go inside?' },
        { fill: 'ここ で タバコ を 吸[す]って ＿ いけません。', a: 'は', o: ['も', 'を'], en: 'You must not smoke here.' }
      ],
      convo: 'temple-visit'
    },
    {
      id: 'L4-6', icon: '🗾', title: 'First This, Then That', sub: '～て、～て · ～てから · 東 西 南 北',
      goals: ['Describe a sequence of actions', 'Say "after doing X" with てから', 'Read the compass kanji on station exits'],
      kanji: '東西南北',
      words: [
        '～ て から|after doing ~',
        '東[ひがし]|east',
        '西[にし]|west',
        '南[みなみ]|south',
        '北[きた]|north',
        '東口[ひがしぐち]|east exit',
        '出[で]かけます|go out',
        '予定[よてい]|plan, schedule',
        '観光[かんこう]|sightseeing',
        'まず|first of all',
        '次[つぎ] に|next',
        '最後[さいご] に|finally, lastly',
        '洗[あら]います|wash'
      ],
      grammar: [
        { t: 'V1て、V2 — and then', x: 'Chain actions in order with the て-form. The <b>last</b> verb sets the tense for the whole sentence.', e: [['朝[あさ] *起[お]きて*、 シャワー を *浴[あ]びて*、 会社[かいしゃ] に 行[い]きます。', 'I get up, shower and go to work.'], ['浅草[あさくさ] に *行[い]って*、 お寺[てら] を 見[み]ました。', 'I went to Asakusa and saw the temple.']] },
        { t: 'V1てから V2 — after doing V1', x: '<b>てから</b> stresses the order: "only after V1, then V2".', e: [['手[て] を *洗[あら]って から* 食[た]べて ください。', 'Please wash your hands before you eat.'], ['ホテル に *着[つ]いて から*、 電話[でんわ] します。', 'I\'ll call after I get to the hotel.']] }
      ],
      dialog: {
        title: 'Planning a day in Tokyo', lines: [
          ['Ken', '明日[あした] の 予定[よてい] は？', 'What\'s the plan for tomorrow?'],
          ['You', 'まず、 朝[あさ] 浅草[あさくさ] に 行[い]って、 浅草寺[せんそうじ] を 見[み]ます。', 'First, I\'ll go to Asakusa in the morning and see Sensō-ji.'],
          ['You', 'それから、 スカイツリー に 登[のぼ]って、 昼[ひる]ごはん を 食[た]べます。', 'Then I\'ll go up the Skytree and have lunch.'],
          ['Ken', 'いい です ね。 夜[よる] は？', 'Nice. And the evening?'],
          ['You', 'ホテル に 帰[かえ]って から、 新宿[しんじゅく] で 飲[の]みます！', 'After going back to the hotel, I\'ll go drinking in Shinjuku!'],
          ['Ken', '新宿[しんじゅく] 駅[えき] は 大[おお]きい です から、 東口[ひがしぐち] で 会[あ]いましょう。', 'Shinjuku Station is huge, so let\'s meet at the East Exit.']
        ]
      },
      note: { t: 'The world\'s busiest station', x: 'Shinjuku Station handles over 3 million people a day and has 200+ exits. Always agree on the exact exit — <b>東口</b>, <b>西口</b>, <b>南口</b> — when meeting someone there.' },
      ex: [
        { mc: '"I\'ll eat after showering."', a: 'シャワー を 浴[あ]びて から 食[た]べます。', o: ['シャワー を 浴[あ]びます から 食[た]べます。', '食[た]べて から シャワー を 浴[あ]びます。', 'シャワー を 浴[あ]びたい から 食[た]べます。'] },
        { mean: '東口[ひがしぐち] で 会[あ]いましょう。', a: 'Let\'s meet at the east exit.', o: ['Let\'s meet at the west exit.', 'Where is the east exit?', 'I met them at the north exit.'] },
        { mc: 'Which kanji means NORTH?', a: '北[きた]', o: ['南[みなみ]', '東[ひがし]', '西[にし]'] },
        { build: 'ホテル に 着[つ]いて から 電話[でんわ] します。', en: 'I\'ll call after I arrive at the hotel.' },
        { fill: '手[て] を 洗[あら]って ＿ 食[た]べましょう。', a: 'から', o: ['まで', 'より'], en: 'Let\'s wash our hands, then eat.' },
        { mean: '朝[あさ] 起[お]きて、 コーヒー を 飲[の]んで、 出[で]かけました。', a: 'I got up, drank coffee and went out.', o: ['I will get up, drink coffee and go out.', 'I drank coffee after going out.', 'I didn\'t drink coffee in the morning.'] }
      ],
      convo: 'day-plan'
    },
    {
      id: 'L4-7', icon: '⚠️', title: 'Must & Mustn\'t', sub: 'ない-form · ないでください · なければ · 外',
      goals: ['Make the ない-form', 'Ask people not to do things', 'Say what you must do — and don\'t have to do'],
      kanji: '外',
      words: [
        '～ ないで ください|please don\'t ~',
        '～ なければ なりません|must ~',
        '～ なくても いい です|don\'t have to ~',
        '忘[わす]れます|forget',
        '心配[しんぱい] します|worry',
        '払[はら]います|pay',
        '出[だ]します|hand in; put out',
        '薬[くすり]|medicine',
        '外[そと]|outside',
        '外国人[がいこくじん]|foreigner',
        '在留[ざいりゅう] カード|residence card',
        '締[し]め切[き]り|deadline',
        '書類[しょるい]|documents, forms',
        '市役所[しやくしょ]|city hall'
      ],
      grammar: [
        { t: 'Making the ない-form', x: 'Ru-verbs: drop ます, add <b>ない</b> (食べない, 見ない). U-verbs: change the い-sound before ます to an <b>あ</b>-sound + ない (書き→書<b>か</b>ない, 飲み→飲<b>ま</b>ない, 待ち→待<b>た</b>ない). A plain い before ます becomes <b>わ</b>: 買い→買<b>わ</b>ない. Irregular: しない, 来[こ]ない — and ある → <b>ない</b>!', e: [['食[た]べます → *食[た]べない*', 'eat → don\'t eat'], ['行[い]きます → *行[い]かない*', 'go → don\'t go'], ['買[か]います → *買[か]わない*', 'buy → don\'t buy'], ['します → *しない*', 'do → don\'t do']] },
        { t: '～ないでください — please don\'t', x: 'ない-form + <b>でください</b>.', e: [['心配[しんぱい] *しないで ください*。', 'Please don\'t worry.'], ['ここ に 車[くるま] を *止[と]めないで ください*。', 'Please don\'t park here.']] },
        { t: '～なければなりません — must', x: 'ない → <b>なければなりません</b> (must). Super-common casual version: <b>～なきゃ</b>. And <b>～なくてもいいです</b> = "don\'t have to".', e: [['外国人[がいこくじん] は 在留[ざいりゅう] カード を *持[も]って いなければ なりません*。', 'Foreign residents must carry their residence card.'], ['もう *帰[かえ]らなきゃ*！', 'I\'ve got to go home!'], ['靴[くつ] を *脱[ぬ]がなくても いい です*。', 'You don\'t have to take off your shoes.']] }
      ],
      dialog: {
        title: 'At city hall', lines: [
          ['Staff', '引[ひ]っ越[こ]し の 手続[てつづ]き です ね。 14日[じゅうよっか] 以内[いない] に 届[とど]け を 出[だ]さなければ なりません。', 'For moving, you must file the notice within 14 days.'],
          ['You', 'わかりました。 何[なに] を 持[も]って こなければ なりません か。', 'I see. What do I need to bring?'],
          ['Staff', '在留[ざいりゅう] カード と パスポート です。 写真[しゃしん] は 持[も]って こなくても いい です。', 'Your residence card and passport. You don\'t need photos.'],
          ['You', 'この 書類[しょるい] は 英語[えいご] で 書[か]いて も いい です か。', 'May I fill in this form in English?'],
          ['Staff', '名前[なまえ] は ローマ字[じ] で いい です。 でも、 住所[じゅうしょ] は 日本語[にほんご] で 書[か]いて ください。', 'Your name in roman letters is fine. But please write the address in Japanese.'],
          ['You', 'はい。 ありがとう ございます。', 'OK. Thank you.']
        ]
      },
      note: { t: 'Life admin in Japan', x: 'After moving you must register your address at the city or ward office (<b>市役所 / 区役所</b>) within 14 days. Foreign residents are legally required to carry their <b>在留カード</b> at all times — don\'t leave home without it.' },
      ex: [
        { mc: 'ない-form of 飲みます:', a: '飲[の]まない', o: ['飲[の]みない', '飲[の]めない', '飲[の]わない'] },
        { mc: 'ない-form of 買います:', a: '買[か]わない', o: ['買[か]あない', '買[か]いない', '買[か]かない'] },
        { mc: 'ない-form of 来ます:', a: '来[こ]ない', o: ['来[き]ない', '来[く]ない', '来[か]ない'] },
        { fill: '心配[しんぱい] しないで ＿。', a: 'ください', o: ['います', 'なりません'], en: 'Please don\'t worry.' },
        { mean: '明日[あした] は 早[はや]く 起[お]きなければ なりません。', a: 'I have to get up early tomorrow.', o: ['I don\'t have to get up early tomorrow.', 'Please get up early tomorrow.', 'I got up early yesterday.'] },
        { build: 'ここ で 写真[しゃしん] を 撮[と]らないで ください。', en: 'Please don\'t take photos here.' },
        { resp: 'もう 11時[じゅういちじ] です よ。', npcEn: 'It\'s already 11, you know.', a: 'え！ もう 帰[かえ]らなきゃ！', o: ['え！ もう 帰[かえ]りなきゃ！', 'え！ 帰[かえ]らないで ください！'] }
      ],
      convo: 'city-office'
    },
    {
      id: 'L4-8', icon: '🏥', title: 'At the Doctor & Pharmacy', sub: 'Body · symptoms · 手 目 耳 足',
      goals: ['Name parts of the body', 'Explain symptoms: it hurts, fever, cough', 'Understand basic medicine instructions'],
      kanji: '手目耳足',
      words: [
        '頭[あたま]|head',
        '目[め]|eye',
        '耳[みみ]|ear',
        'のど|throat',
        'お腹[なか]|stomach, belly',
        '手[て]|hand',
        '足[あし]|foot, leg',
        '歯[は]|tooth',
        '痛[いた]い|painful, it hurts',
        '熱[ねつ]|fever',
        '風邪[かぜ]|a cold',
        'せき|cough',
        '薬局[やっきょく]|pharmacy',
        'アレルギー|allergy',
        '気分[きぶん] が 悪[わる]い|feel sick',
        '保険証[ほけんしょう]|health insurance card'
      ],
      grammar: [
        { t: '～が痛[いた]いです', x: 'Body part + <b>が痛いです</b> = "my ~ hurts".', e: [['頭[あたま] *が 痛[いた]い* です。', 'I have a headache.'], ['お腹[なか] *が 痛[いた]い* です。', 'I have a stomachache.'], ['のど が 少[すこ]し *痛[いた]い* です。', 'My throat hurts a little.']] },
        { t: 'Describing symptoms', x: 'Useful patterns: <b>熱があります</b> (I have a fever), <b>せきが出ます</b> (I have a cough), <b>～から</b> (since ~).', e: [['昨日[きのう] *から* 熱[ねつ] が あります。', 'I\'ve had a fever since yesterday.'], ['せき が *出[で]ます*。', 'I have a cough.'], ['ペニシリン の *アレルギー が あります*。', 'I\'m allergic to penicillin.']] }
      ],
      dialog: {
        title: 'At a clinic', lines: [
          ['Doctor', '今日[きょう] は どう しました か。', 'What brings you in today?'],
          ['You', '昨日[きのう] から 頭[あたま] が 痛[いた]くて、 熱[ねつ] も あります。', 'I\'ve had a headache since yesterday, and a fever too.'],
          ['Doctor', 'せき は 出[で]ます か。', 'Are you coughing?'],
          ['You', 'はい、 少[すこ]し 出[で]ます。 のど も 痛[いた]い です。', 'Yes, a little. My throat hurts too.'],
          ['Doctor', '風邪[かぜ] です ね。 薬[くすり] を 出[だ]します。 一日[いちにち] 三回[さんかい]、 食後[しょくご] に 飲[の]んで ください。', 'It\'s a cold. I\'ll prescribe medicine. Take it three times a day after meals.'],
          ['You', 'お風呂[ふろ] に 入[はい]って も いい です か。', 'May I take a bath?'],
          ['Doctor', '今日[きょう] は 入[はい]らないで ください。 ゆっくり 休[やす]んで ください ね。', 'Not today, please. Get plenty of rest.']
        ]
      },
      note: { t: 'Health care basics', x: 'Bring your <b>保険証</b> (health insurance card) to clinics — insurance covers 70% of costs. Drugstores (<b>ドラッグストア</b>) sell many medicines over the counter. Emergencies: dial <b>119</b> for an ambulance or fire, <b>110</b> for police.' },
      ex: [
        { mc: '"I have a stomachache."', a: 'お腹[なか] が 痛[いた]い です。', o: ['お腹[なか] を 痛[いた]い です。', 'お腹[なか] が 痛[いた]く です。', 'お腹[なか] は 熱[ねつ] です。'] },
        { mean: '熱[ねつ] が あります。', a: 'I have a fever.', o: ['It\'s hot today.', 'I have a cough.', 'I don\'t have a fever.'] },
        { resp: 'どう しました か。', npcEn: 'What seems to be the problem?', a: 'のど が 痛[いた]い です。', o: ['のど が 痛[いた]かった です か。', 'どう しません。'] },
        { mc: 'Which kanji means "ear"?', a: '耳[みみ]', o: ['目[め]', '手[て]', '足[あし]'] },
        { build: '一日[いちにち] 三回[さんかい] 飲[の]んで ください。', en: 'Please take it three times a day.' },
        { say: '頭[あたま] が 痛[いた]い です。', en: 'I have a headache.' }
      ],
      convo: 'clinic'
    },
    {
      id: 'L4-9', icon: '😎', title: 'Casual Speech with Friends', sub: 'Dictionary form · だ · うん/ううん',
      goals: ['Use dictionary (plain) forms of verbs', 'Speak casually with friends', 'Understand common slang like めっちゃ and マジで'],
      words: [
        'うん|yeah',
        'ううん|nope',
        'だ|is (casual です)',
        '行[い]く|go (dictionary form)',
        '食[た]べる|eat (dictionary form)',
        'する|do (dictionary form)',
        '来[く]る|come (dictionary form)',
        'ある|there is (dictionary form)',
        'いる|there is (living, dictionary form)',
        'めっちゃ|super, really (slang)',
        'マジ で？|seriously?',
        'やばい|crazy (awesome or awful!)',
        'じゃあ ね|see ya',
        'おつかれ|hey / good work (casual)',
        'ひま|free (not busy)'
      ],
      grammar: [
        { t: 'Dictionary form = casual present', x: 'The plain form is how verbs appear in dictionaries — and how friends talk. Ru-verbs: 食べ<b>ます</b> → 食べ<b>る</b>. U-verbs: the い-sound becomes an う-sound: 行<b>き</b>ます → 行<b>く</b>, 飲<b>み</b>ます → 飲<b>む</b>, 買<b>い</b>ます → 買<b>う</b>, 待<b>ち</b>ます → 待<b>つ</b>. Irregular: します → <b>する</b>, 来ます → <b>来[く]る</b>.', e: [['明日[あした]、 何[なに] *する*？', 'What are you doing tomorrow?'], ['映画[えいが] *見[み]る*？', 'Wanna watch a movie?'], ['うん、 *行[い]く*！', 'Yeah, I\'m in!']] },
        { t: 'Casual vs. polite', x: 'Casual speech drops です/ます and often particles (は, を, か). Questions just rise in tone. <b>だ</b> replaces です after nouns and な-adjectives (often dropped in questions). Casual negative: <b>じゃない</b>, ない-form. Use casual only with friends, family and kids — never with customers or bosses!', e: [['これ、 おいしい？', 'Is this good? (casual)'], ['ううん、 学生[がくせい] *じゃ ない*。', 'Nope, I\'m not a student.'], ['今日[きょう] は 休[やす]み *だ*。', 'Today\'s my day off.'], ['ううん、 *行[い]かない*。', 'Nah, I\'m not going.']] }
      ],
      dialog: {
        title: 'Texting a friend', lines: [
          ['Yui', 'おつかれ～！ 明日[あした]、 ひま？', 'Hey! Free tomorrow?'],
          ['You', 'うん、 ひま だよ。 何[なに] する？', 'Yeah, I\'m free. What do you want to do?'],
          ['Yui', '新[あたら]しい カフェ に 行[い]かない？ パンケーキ が めっちゃ おいしい らしい よ。', 'Wanna go to the new café? Apparently the pancakes are super good.'],
          ['You', 'マジ で？ 行[い]く 行[い]く！ 何時[なんじ] に する？', 'Seriously? I\'m in! What time?'],
          ['Yui', '11時[じゅういちじ] は？ 混[こ]む から。', 'How about 11? It gets crowded.'],
          ['You', 'オッケー。 じゃあ、 また 明日[あした] ね！', 'OK. See you tomorrow then!']
        ]
      },
      note: { t: 'Who can you be casual with?', x: 'Friends, family, younger people and close coworkers of the same rank. When in doubt, stay polite (です・ます). If a Japanese friend says <b>タメ口でいいよ</b> ("you can talk casually with me") — that\'s your green light!' },
      ex: [
        { mc: 'Casual form of 飲みます:', a: '飲[の]む', o: ['飲[の]みる', '飲[の]る', '飲[の]まる'] },
        { mc: 'Casual form of 来ます:', a: '来[く]る', o: ['来[き]る', '来[こ]る', '来[く]う'] },
        { mc: 'Casual form of 買います:', a: '買[か]う', o: ['買[か]いる', '買[か]る', '買[か]む'] },
        { resp: '明日[あした]、 ひま？', npcEn: '(a friend) Free tomorrow?', a: 'うん、 ひま だよ。', o: ['はい、 ひま で ございます。', 'ううん、 ひま です か。'] },
        { mean: 'ううん、 行[い]かない。', a: 'Nope, I\'m not going.', o: ['Yeah, let\'s go.', 'Didn\'t you go?', 'I want to go.'] },
        { build: '明日[あした]、 何[なに] する？', en: 'What are you doing tomorrow? (casual)' }
      ],
      convo: 'friend-chat'
    },
    {
      id: 'L4-10', icon: '🎢', title: 'Review: A Day Out', sub: 'Putting Level 4 together',
      goals: ['Plan and enjoy a day out with friends', 'Combine て-forms, permission and casual speech', 'Read rule signs at attractions'],
      words: [
        '遊園地[ゆうえんち]|amusement park',
        '並[なら]びます|line up, queue',
        '乗[の]り物[もの]|ride, attraction',
        '待[ま]ち 時間[じかん]|waiting time',
        'お土産[みやげ] 屋[や]|souvenir shop',
        '楽[たの]しみ|something to look forward to',
        '飲食[いんしょく]|eating and drinking',
        'ジェットコースター|roller coaster',
        '先[さき] に|first, beforehand'
      ],
      grammar: [
        { t: 'Review: the power of て', x: 'You can now use the て-form for requests (～てください), linking actions (～て、～て), ongoing actions and states (～ています), permission (～てもいい), prohibition (～てはいけない) and sequence (～てから) — plus ない-forms and casual speech!', e: [['並[なら]んで から チケット を 買[か]って ください。', 'Please line up and then buy a ticket.'], ['ジェットコースター に 乗[の]って も いい？', 'Can I ride the roller coaster? (casual)']] }
      ],
      dialog: {
        title: 'At an amusement park', lines: [
          ['Yui', '見[み]て！ あの ジェットコースター、 めっちゃ 高[たか]い！', 'Look! That roller coaster is super tall!'],
          ['You', 'うわあ、 怖[こわ]そう… 待[ま]ち 時間[じかん] は？', 'Whoa, it looks scary… What\'s the wait?'],
          ['Yui', '90分[きゅうじゅっぷん] だって。 先[さき] に お昼[ひる] を 食[た]べて から 並[なら]ばない？', 'It says 90 minutes. Why don\'t we eat lunch first and then line up?'],
          ['You', 'うん、 いい ね。 あ、 ここ で 食[た]べて も いい の かな。', 'Yeah, good idea. Oh, I wonder if we can eat here.'],
          ['Yui', 'あそこ に 「飲食[いんしょく] 禁止[きんし]」 って 書[か]いて ある よ。 レストラン に 行[い]かない？', 'There\'s a "no eating or drinking" sign over there. Shall we go to a restaurant?'],
          ['You', 'オッケー。 楽[たの]しみ だね！', 'OK. This is going to be fun!']
        ]
      },
      note: { t: 'Theme-park culture', x: 'At Tokyo Disney Resort and Universal Studios Japan, friends often wear matching outfits (<b>おそろいコーデ</b>), buy themed snacks and wait patiently in long, orderly lines — queuing is a national skill!' },
      ex: [
        { mc: '"Please don\'t eat here." (sign rule, polite)', a: 'ここ で 食[た]べないで ください。', o: ['ここ で 食[た]べて ください。', 'ここ で 食[た]べなくても いい です。', 'ここ で 食[た]べても いい です か。'] },
        { resp: 'ジェットコースター に 乗[の]る？', npcEn: '(friend) Wanna ride the roller coaster?', a: 'うん、 乗[の]る！', o: ['はい、 乗[の]ります で ございます。', 'うん、 乗[の]って ください。'] },
        { fill: '先[さき] に お昼[ひる] を 食[た]べて ＿ 並[なら]びましょう。', a: 'から', o: ['まで', 'も'], en: 'Let\'s eat lunch first and then line up.' },
        { mean: '今[いま] みんな 並[なら]んで います。', a: 'Everyone is lining up now.', o: ['Everyone lined up yesterday.', 'Please line up, everyone.', 'Nobody is lining up.'] },
        { build: 'ここ で 写真[しゃしん] を 撮[と]って も いい です か。', en: 'May I take photos here?' },
        { say: '楽[たの]しみ だね！', en: 'Can\'t wait! (casual)' }
      ],
      convo: 'theme-park'
    }
  ]
});
