/* Level 5 role-plays. Option: [japanese, english, score 0|1|2, feedback, 'npc reply|english', goto] */
JT.addConvos([
  {
    id: 'language-exchange', level: 5, icon: '🗣️', npc: 'Haruto', avatar: '🧑‍🎓',
    title: 'Language Exchange', scene: 'You meet Haruto at a language-exchange café for the first time.',
    goal: 'Talk about what you can and can\'t do.',
    script: [
      ['n', 'はじめまして。 はると です。 日本語[にほんご] は どの ぐらい 勉強[べんきょう] して います か。', 'Nice to meet you. I\'m Haruto. How long have you been studying Japanese?'],
      ['u', [
        ['半年[はんとし] ぐらい です。 まだまだ です が、 よろしく おねがいします。', 'About six months. I still have a long way to go, but nice to meet you.', 2, ''],
        ['日本語[にほんご] が 上手[じょうず] です。', 'I\'m good at Japanese.', 1, 'Too boastful — and doesn\'t answer "how long".']]],
      ['n', '漢字[かんじ] を 読[よ]む こと が できます か。', 'Can you read kanji?'],
      ['u', [
        ['少[すこ]し できます。 百[ひゃく] ぐらい 読[よ]む こと が できます。', 'A little. I can read about a hundred.', 2, ''],
        ['読[よ]みます こと が できます。', 'Read-masu can.', 1, 'Use the dictionary form: 読むことができます.'],
        ['いいえ、 まだ 読[よ]む こと が できません。', 'No, I can\'t read them yet.', 2, '']]],
      ['n', 'すごい です ね。 趣味[しゅみ] は 何[なん] です か。', 'Impressive. What are your hobbies?'],
      ['u', [
        ['趣味[しゅみ] は 写真[しゃしん] を 撮[と]る こと です。', 'My hobby is taking photos.', 2, ''],
        ['料理[りょうり] を する の が 好[す]き です。', 'I like cooking.', 2, '']]],
      ['n', 'ぼく は 英語[えいご] を 話[はな]す の が 苦手[にがて] です。', 'I\'m not good at speaking English.'],
      ['u', [
        ['じゃあ、 毎週[まいしゅう] いっしょ に 練習[れんしゅう] しません か。', 'Then shall we practice together every week?', 2, ''],
        ['大丈夫[だいじょうぶ] です よ。 少[すこ]し ずつ 上手[じょうず] に なります。', 'It\'s OK. You\'ll get better little by little.', 2, 'Encouraging!']]],
      ['end', 'ぜひ！ LINE[ライン] を 交換[こうかん] しましょう。', 'Definitely! Let\'s swap LINE.']
    ]
  },
  {
    id: 'hanami-plan', level: 5, icon: '🌸', npc: 'Yui',
    title: 'Hanami Party', scene: 'Cherry blossoms are blooming. Yui is organizing a picnic.',
    goal: 'Talk about experiences with ～たことがあります.',
    script: [
      ['n', '花見[はなみ] を した こと が あります か。', 'Have you ever done hanami?'],
      ['u', [
        ['いいえ、 一度[いちど] も ありません。', 'No, never.', 2, ''],
        ['はい、 去年[きょねん] 上野[うえの] 公園[こうえん] で した こと が あります。', 'Yes, I did it at Ueno Park last year.', 2, ''],
        ['いいえ、 する こと が ありません。', 'No, I never do (habit).', 1, 'For experience use the た-form: したことがありません.']]],
      ['n', 'じゃあ、 今度[こんど] の 土曜日[どようび]、 いっしょ に 行[い]きましょう！', 'Then let\'s go together this Saturday!'],
      ['u', [
        ['ぜひ！ 何[なに] を 持[も]って 行[い]けば いい です か。', 'Definitely! What should I bring?', 2, '', '飲[の]み物[もの] を おねがいします。|Drinks, please.'],
        ['土曜日[どようび] は ちょっと… 日曜日[にちようび] は どう です か。', 'Saturday is a bit… How about Sunday?', 2, '', 'いい です よ。 日曜日[にちようび] に しましょう。|Sure, let\'s do Sunday.']]],
      ['n', 'お弁当[べんとう] は わたし が 作[つく]ります。 日本[にほん] の お弁当[べんとう]、 食[た]べた こと が あります か。', 'I\'ll make the bentos. Have you ever eaten a homemade Japanese bento?'],
      ['u', [
        ['コンビニ の は あります が、 手作[てづく]り は ありません。', 'Konbini ones yes, homemade no.', 2, ''],
        ['はい、 何回[なんかい] も 食[た]べた こと が あります。', 'Yes, many times.', 2, '']]],
      ['n', '楽[たの]しみ です ね！ 浴衣[ゆかた] は 着[き]た こと が あります か。', 'Can\'t wait! Have you ever worn a yukata?'],
      ['u', [
        ['いいえ、 でも 着[き]て みたい です！', 'No, but I\'d love to try!', 2, ''],
        ['浴衣[ゆかた] は 夏[なつ] です よ。', 'Yukata are for summer, you know.', 2, 'True — good cultural point!', 'あ、 そう でした。 夏祭[なつまつ]り に 着[き]ましょう！|Oh right. Let\'s wear them at a summer festival!']]],
      ['end', 'じゃあ、 当日[とうじつ] 楽[たの]しみ に して います！', 'Looking forward to the day!']
    ]
  },
  {
    id: 'vacation-chat', level: 5, icon: '🏝️', npc: 'Ken',
    title: 'Summer Vacation', scene: 'Back at work after summer vacation. Ken asks how it was.',
    goal: 'List activities with ～たり～たり.',
    script: [
      ['n', '夏休[なつやす]み は どう でした か。', 'How was summer vacation?'],
      ['u', [
        ['最高[さいこう] でした！ 沖縄[おきなわ] に 行[い]きました。', 'It was the best! I went to Okinawa.', 2, ''],
        ['楽[たの]しい でした。', 'It was fun (wrong form).', 1, 'Past of い-adj: 楽しかったです.']]],
      ['n', '沖縄[おきなわ] で 何[なに] を しました か。', 'What did you do in Okinawa?'],
      ['u', [
        ['海[うみ] で 泳[およ]いだり、 島[しま] を ドライブ したり しました。', 'I swam, drove around the islands, that kind of thing.', 2, 'Perfect ～たり～たり.'],
        ['泳[およ]ぎたり、 ドライブ したり しました。', 'Swim-tari, drove-tari.', 1, 'た-form of 泳ぐ is 泳いだ → 泳いだり.'],
        ['海[うみ] で 泳[およ]ぎます。', 'I swim in the sea.', 1, 'Past tense, please!']]],
      ['n', 'いい です ね。 食[た]べ物[もの] は どう でした か。', 'Nice. How was the food?'],
      ['u', [
        ['ゴーヤチャンプル を 食[た]べた こと が なかった ので、 楽[たの]しかった です。', 'I\'d never had goya champuru, so that was fun.', 2, ''],
        ['おいしかった です。 毎日[まいにち] 食[た]べたり 飲[の]んだり しました。', 'It was delicious. I ate and drank every day.', 2, '']]],
      ['n', 'ぼく は どこ も 行[い]きません でした。 家[いえ] で 寝[ね]たり、 ゲーム を したり…', 'I didn\'t go anywhere. Just slept, played games…'],
      ['u', [
        ['のんびり できて、 いい です ね。', 'Getting to relax is nice too.', 2, 'Kind response.'],
        ['かわいそう！', 'Poor you!', 1, 'A bit blunt, though friendly.']]],
      ['end', 'ははは。 来年[らいねん] は ぼく も 旅行[りょこう] したい です。', 'Haha. Next year I want to travel too.']
    ]
  },
  {
    id: 'host-family-morning', level: 5, icon: '🍳', npc: 'Host mother', avatar: '👩‍🦳',
    title: 'Busy Morning', scene: 'Your host mother checks your plans for a day trip.',
    goal: 'Use 前に, 後で and time expressions.',
    script: [
      ['n', '今日[きょう] は 何時[なんじ] に 出[で]かける の？', 'What time are you heading out today?'],
      ['u', [
        ['9時[くじ] に 出[で]かけます。 出[で]かける 前[まえ] に 朝[あさ]ごはん を 食[た]べます。', 'At 9. I\'ll eat breakfast before leaving.', 2, ''],
        ['出[で]かけた 前[まえ] に 食[た]べます。', 'Before having left, I\'ll eat.', 1, 'Dictionary form before 前に: 出かける前に.']]],
      ['n', 'お弁当[べんとう]、 作[つく]った から 持[も]って 行[い]って ね。', 'I made you a bento, so take it with you.'],
      ['u', [
        ['わあ、 ありがとう ございます！', 'Wow, thank you!', 2, ''],
        ['いただきます！', '(before eating)', 1, 'Cute — but save it for lunchtime!']]],
      ['n', '何時[なんじ] ごろ 帰[かえ]る？', 'Around what time will you be back?'],
      ['u', [
        ['7時[しちじ] ごろ です。 晩[ばん]ごはん の 前[まえ] に 帰[かえ]ります。', 'Around 7. I\'ll be back before dinner.', 2, ''],
        ['わかりません。 駅[えき] に 着[つ]いた 後[あと] で 連絡[れんらく] します。', 'Not sure. I\'ll let you know after I reach the station.', 2, '']]],
      ['n', '鍵[かぎ] は 持[も]った？', 'Did you take your key?'],
      ['u', [
        ['あ、 さっき 確認[かくにん] しました。 大丈夫[だいじょうぶ] です。', 'Ah, I checked a moment ago. All good.', 2, ''],
        ['あっ、 忘[わす]れました！', 'Oh no, I forgot!', 2, 'Good thing she asked!', 'もう、 気[き] を つけて ね！ はい、 どうぞ。|Honestly, be careful! Here you go.']]],
      ['u', [
        ['いって きます！', 'I\'m off!', 2, ''],
        ['ただいま！', 'I\'m home!', 0, 'That\'s for coming back!']]],
      ['end', 'いって らっしゃい！', 'Have a good day!']
    ]
  },
  {
    id: 'late-to-work', level: 5, icon: '🏢', npc: 'Boss', avatar: '👔',
    title: 'Late for the Meeting', scene: 'You arrive 20 minutes late to the office. Your manager looks at you.',
    goal: 'Apologize properly and explain with ので.',
    script: [
      ['n', 'おはよう。 どう した の？', 'Morning. What happened?'],
      ['u', [
        ['申[もう]し訳[わけ] ありません。 電車[でんしゃ] が 止[と]まった ので、 遅[おく]れました。', 'I\'m very sorry. The train stopped, so I was late.', 2, 'Formal apology + soft reason with ので.'],
        ['電車[でんしゃ] が 止[と]まった から、 遅[おく]れた。', 'Train stopped so I was late (casual).', 1, 'Too casual for your boss — and apologize first!'],
        ['ごめん ね。', 'Sorry (very casual).', 0, 'Way too casual!']]],
      ['n', 'そう か。 遅延[ちえん] 証明書[しょうめいしょ] は ある？', 'I see. Do you have a delay certificate?'],
      ['u', [
        ['はい、 こちら です。', 'Yes, here it is.', 2, ''],
        ['すみません、 もらいません でした。', 'Sorry, I didn\'t get one.', 1, 'Next time grab one at the station gate!']]],
      ['n', '遅[おく]れる とき は、 先[さき] に 電話[でんわ] して ね。', 'When you\'re going to be late, call ahead.'],
      ['u', [
        ['はい、 次[つぎ] から 気[き] を つけます。', 'Yes, I\'ll be careful from now on.', 2, ''],
        ['はい、 遅[おく]れた とき 電話[でんわ] します。', 'Yes, I\'ll call when I was late.', 1, 'Before being late: 遅れるとき.']]],
      ['n', '会議[かいぎ] は 10時[じゅうじ] から だ から、 まだ 大丈夫[だいじょうぶ]。', 'The meeting is from 10, so we\'re still fine.'],
      ['u', [
        ['ありがとう ございます。 すぐ 準備[じゅんび] します。', 'Thank you. I\'ll prepare right away.', 2, ''],
        ['よかった です！', 'That\'s a relief!', 2, '']]],
      ['end', 'よろしく。', 'Thanks.']
    ]
  },
  {
    id: 'reunion', level: 5, icon: '🤗', npc: 'Mr. Mori', avatar: '👨‍🏫',
    title: 'A Reunion', scene: 'You run into your old Japanese teacher after a year.',
    goal: 'Describe changes with ～くなる / ～になる.',
    script: [
      ['n', 'あれ？ 久[ひさ]しぶり！ 元気[げんき] でした か。', 'Oh? Long time no see! Have you been well?'],
      ['u', [
        ['お久[ひさ]しぶり です！ おかげさま で 元気[げんき] です。', 'Long time no see! I\'ve been well, thank you.', 2, 'Polite and warm.'],
        ['はじめまして。', 'Nice to meet you.', 0, 'You know him!']]],
      ['n', '日本語[にほんご]、 本当[ほんとう] に 上手[じょうず] に なりました ね。', 'Your Japanese has really improved.'],
      ['u', [
        ['いえいえ、 まだまだ です。 でも、 毎日[まいにち] 勉強[べんきょう] して います。', 'No, no, still a long way to go. But I study every day.', 2, ''],
        ['はい、 上手[じょうず] く なりました。', 'Yes, I became "jōzu-ku".', 1, 'な-adj: 上手になりました — and be modest!']]],
      ['n', '仕事[しごと] は どう です か。', 'How\'s work?'],
      ['u', [
        ['最近[さいきん]、 忙[いそが]しく なりました。', 'It\'s gotten busy lately.', 2, ''],
        ['新[あたら]しい 会社[かいしゃ] で エンジニア に なりました。', 'I became an engineer at a new company.', 2, '']]],
      ['n', 'そう です か。 町[まち] も 変[か]わりました よ。 駅[えき] が きれい に なりました。', 'I see. The town has changed too. The station got all nice and new.'],
      ['u', [
        ['本当[ほんとう] だ。 前[まえ] より 便利[べんり] に なりました ね。', 'You\'re right. It\'s more convenient than before.', 2, ''],
        ['駅[えき] が きれい く なりました。', 'Station became "kirei-ku".', 1, 'きれい is な-adj: きれいになりました.']]],
      ['end', '今度[こんど]、 ゆっくり お茶[ちゃ] でも 飲[の]みましょう。', 'Let\'s have tea and catch up properly sometime.']
    ]
  },
  {
    id: 'career-chat', level: 5, icon: '💼', npc: 'Sato',
    title: 'Future Plans', scene: 'Over lunch, Sato asks about your plans and opinions.',
    goal: 'Give opinions with と思います and plans with つもり.',
    script: [
      ['n', '来年[らいねん] も 日本[にほん] に いる つもり です か。', 'Are you planning to stay in Japan next year too?'],
      ['u', [
        ['はい、 もう 少[すこ]し いる つもり です。', 'Yes, I plan to stay a bit longer.', 2, ''],
        ['いいえ、 国[くに] に 帰[かえ]る つもり です。', 'No, I plan to go back home.', 2, ''],
        ['はい、 いた つもり です。', 'Yes, I intended to have been.', 1, 'Dictionary form before つもり: いるつもり.']]],
      ['n', 'JLPT[ジェイエルピーティー] は 受[う]けます か。', 'Will you take the JLPT?'],
      ['u', [
        ['はい、 12月[じゅうにがつ] に N4[エヌよん] を 受[う]ける 予定[よてい] です。', 'Yes, I\'m scheduled to take N4 in December.', 2, ''],
        ['たぶん 受[う]けない と 思[おも]います。', 'I probably won\'t.', 2, '']]],
      ['n', '日本[にほん] の 会社[かいしゃ] は どう 思[おも]います か。', 'What do you think of Japanese companies?'],
      ['u', [
        ['みんな 親切[しんせつ] だ と 思[おも]います。 でも、 会議[かいぎ] が 長[なが]い と 思[おも]います。', 'I think everyone is kind. But I think meetings are long.', 2, 'Honest, balanced opinion.'],
        ['親切[しんせつ] と 思[おも]います。', 'I think kind.', 1, 'な-adj + だ: 親切だと思います.']]],
      ['n', 'たしかに！ 会議[かいぎ] は もっと 短[みじか]く なる と いい です ね。', 'True! It\'d be nice if meetings got shorter.'],
      ['u', [
        ['本当[ほんとう] に そう 思[おも]います。', 'I really think so.', 2, ''],
        ['反対[はんたい] です。', 'I disagree.', 1, 'Bold! Japanese usually soften disagreement.']]],
      ['end', 'ははは。 じゃあ、 午後[ごご] も 頑張[がんば]りましょう。', 'Haha. Well, let\'s work hard this afternoon too.']
    ]
  },
  {
    id: 'restaurant-booking', level: 5, icon: '📞', npc: 'Staff',
    title: 'Book a Table', scene: 'You phone a popular Japanese restaurant to book dinner for your parents\' visit.',
    goal: 'Make a reservation and mention a dietary need.',
    script: [
      ['n', 'お電話[でんわ] ありがとう ございます。 和食[わしょく] の 「はな」 で ございます。', 'Thank you for calling. This is Hana Japanese restaurant.'],
      ['u', [
        ['もしもし、 予約[よやく] を したい ん です が。', 'Hello, I\'d like to make a reservation.', 2, ''],
        ['はな さん です か。', 'Is this Mr. Hana?', 1, 'Hana is the restaurant\'s name!']]],
      ['n', 'ありがとう ございます。 何日[なんにち] の 何時[なんじ] が よろしい です か。', 'Thank you. What date and time?'],
      ['u', [
        ['15日[じゅうごにち] の 土曜日[どようび]、 7時[しちじ] に おねがいします。', 'Saturday the 15th at 7, please.', 2, ''],
        ['土曜日[どようび] です。', 'Saturday.', 1, 'Give a time too!', '何時[なんじ] が よろしい です か。|What time would be good?']]],
      ['n', '何名[なんめい] 様[さま] です か。', 'For how many people?'],
      ['u', [
        ['3名[さんめい] です。', 'Three people.', 2, ''],
        ['三[みっ]つ です。', 'Three (things).', 1, 'For people use 名 or 人.']]],
      ['n', '申[もう]し訳[わけ] ありません。 7時[しちじ] は 満席[まんせき] です。 6時[ろくじ] 半[はん] は いかが です か。', 'I\'m sorry, 7 is fully booked. How about 6:30?'],
      ['u', [
        ['じゃあ、 6時[ろくじ] 半[はん] で おねがいします。', '6:30 then, please.', 2, ''],
        ['8時[はちじ] は 空[あ]いて います か。', 'Is 8 available?', 2, '', 'はい、 8時[はちじ] は 空[あ]いて おります。|Yes, 8 is available.']]],
      ['n', 'お名前[なまえ] と お電話[でんわ] 番号[ばんごう] を お願[ねが]い します。', 'Your name and phone number, please.'],
      ['u', [
        ['ミラー です。 番号[ばんごう] は ゼロ きゅう ゼロ の いち に さん よん の ご ろく なな はち です。', 'Miller. The number is 090-1234-5678.', 2, ''],
        ['ミラー 様[さま] です。', 'Honorable Miller.', 0, 'Never use 様 for yourself!']]],
      ['u', [
        ['あと、 母[はは] は 魚[さかな] が 食[た]べられません。', 'Also, my mother can\'t eat fish.', 2, 'Good to mention when booking.', 'かしこまりました。 お肉[にく] の 料理[りょうり] に 変[か]えます ね。|Certainly. We\'ll switch to meat dishes.'],
        ['以上[いじょう] です。', 'That\'s all.', 1, 'Didn\'t your mother have a food issue?']]],
      ['end', 'ご予約[よやく] ありがとう ございます。 お待[ま]ち して おります。', 'Thank you for your reservation. We look forward to seeing you.']
    ]
  },
  {
    id: 'gyudon-order', level: 5, icon: '🍚', npc: 'Staff',
    title: 'Beef Bowl Shop', scene: 'A gyūdon chain at lunchtime. Read the menu and order like a regular.',
    goal: 'Use menu words: 並, 大盛り, 税込, 品切れ.',
    script: [
      ['n', 'いらっしゃいませ！ ご注文[ちゅうもん] は？', 'Welcome! Your order?'],
      ['u', [
        ['牛丼[ぎゅうどん] の 並[なみ] を ください。', 'A regular beef bowl, please.', 2, ''],
        ['牛丼[ぎゅうどん] の 大盛[おおも]り を ください。', 'A large beef bowl, please.', 2, ''],
        ['牛丼[ぎゅうどん] の 品切[しなぎ]れ を ください。', 'A sold-out beef bowl, please.', 0, '品切れ means "sold out"!']]],
      ['n', 'セット に します か。 みそ汁[しる] と サラダ が 付[つ]きます。', 'Make it a set? It comes with miso soup and salad.'],
      ['u', [
        ['はい、 セット で おねがいします。', 'Yes, as a set please.', 2, ''],
        ['いいえ、 牛丼[ぎゅうどん] だけ で いい です。', 'No, just the beef bowl.', 2, '']]],
      ['n', '申[もう]し訳[わけ] ありません。 本日[ほんじつ]、 卵[たまご] は 品切[しなぎ]れ です。', 'I\'m sorry, eggs are sold out today.'],
      ['u', [
        ['そう です か。 大丈夫[だいじょうぶ] です。', 'I see. That\'s fine.', 2, ''],
        ['じゃあ、 卵[たまご] を 二[ふた]つ ください。', 'Then two eggs, please.', 0, 'They\'re sold out!']]],
      ['u', [
        ['これ は 税込[ぜいこみ] です か。', 'Is this tax-included?', 2, '', 'はい、 税込[ぜいこみ] 五百[ごひゃく] 円[えん] です。|Yes, 500 yen including tax.'],
        ['いくら です か。', 'How much is it?', 2, '', '五百[ごひゃく] 円[えん] です。|500 yen.']]],
      ['end', 'ありがとう ございました！ 少々[しょうしょう] お待[ま]ち ください。', 'Thank you! Just a moment.']
    ]
  },
  {
    id: 'graduation-party', level: 5, icon: '🎉', npc: 'Yui',
    title: 'N5 Celebration', scene: 'You passed! Yui throws you a small party.',
    goal: 'Use everything: opinions, experiences, plans and thanks.',
    script: [
      ['n', '合格[ごうかく]、 おめでとう！', 'Congratulations on passing!'],
      ['u', [
        ['ありがとう！ ゆい さん の おかげ です。', 'Thanks! It\'s all thanks to you.', 2, 'おかげ — "thanks to you". Lovely.'],
        ['おめでとう ございます！', 'Congratulations!', 0, 'That\'s her line — you passed!']]],
      ['n', '試験[しけん] は どう だった？', 'How was the exam?'],
      ['u', [
        ['聴解[ちょうかい] は 難[むずか]しかった けど、 文法[ぶんぽう] は 簡単[かんたん] でした。', 'Listening was hard, but grammar was easy.', 2, ''],
        ['思[おも]った より 簡単[かんたん] だった。', 'Easier than I thought.', 2, 'Natural casual style.']]],
      ['n', '次[つぎ] は 何[なに] を する つもり？', 'What do you plan to do next?'],
      ['u', [
        ['N4[エヌよん] を 受[う]ける つもり です。 もっと 話[はな]せる よう に なりたい です。', 'I plan to take N4. I want to be able to speak more.', 2, ''],
        ['日本[にほん] で 働[はたら]きたい と 思[おも]って います。', 'I\'m thinking I want to work in Japan.', 2, '']]],
      ['n', '日本語[にほんご] を 勉強[べんきょう] して、 何[なに] が 一番[いちばん] 楽[たの]しかった？', 'What was the most fun part of studying Japanese?'],
      ['u', [
        ['日本人[にほんじん] の 友[とも]だち と 話[はな]した こと です。', 'Talking with Japanese friends.', 2, ''],
        ['アニメ を 字幕[じまく] なし で 見[み]た こと です。', 'Watching anime without subtitles.', 2, '']]],
      ['n', 'これから も 頑張[がんば]って ね！ 乾杯[かんぱい]！', 'Keep it up! Cheers!'],
      ['u', [
        ['乾杯[かんぱい]！ これから も よろしく ね！', 'Cheers! Here\'s to more good times!', 2, ''],
        ['頑張[がんば]って ください。', 'You do your best.', 1, 'She\'s cheering YOU on — reply 頑張ります!']]],
      ['end', 'うん！', 'Yeah!']
    ]
  },
  {
    id: 'koban', level: 5, icon: '👮', npc: 'Officer', avatar: '👮',
    title: 'Lost Wallet at the Kōban', scene: 'You lost your wallet. You go to the police box (交番) near the station.',
    goal: 'Explain when, where and what you lost.',
    script: [
      ['n', 'どう しました か。', 'What\'s the matter?'],
      ['u', [
        ['財布[さいふ] を なくしました。', 'I lost my wallet.', 2, ''],
        ['財布[さいふ] が ありません。 困[こま]って います。', 'My wallet is gone. I\'m in trouble.', 2, '']]],
      ['n', 'いつ ごろ なくしました か。', 'Around when did you lose it?'],
      ['u', [
        ['1時間[いちじかん] 前[まえ] です。 電車[でんしゃ] を 降[お]りた とき は ありました。', 'An hour ago. I had it when I got off the train.', 2, 'Great use of とき.'],
        ['1時間[いちじかん] 後[あと] です。', 'An hour later.', 0, 'Past = 前 (ago).']]],
      ['n', 'どんな 財布[さいふ] です か。', 'What kind of wallet?'],
      ['u', [
        ['黒[くろ]くて 小[ちい]さい 財布[さいふ] です。', 'A small black wallet.', 2, ''],
        ['黒[くろ]い な 財布[さいふ] です。', 'A black (na) wallet.', 1, '黒い is an い-adjective — no な.']]],
      ['n', '中[なか] に 何[なに] が 入[はい]って いました か。', 'What was inside?'],
      ['u', [
        ['在留[ざいりゅう] カード と クレジット カード と 現金[げんきん] 一万円[いちまんえん] ぐらい です。', 'My residence card, a credit card and about ¥10,000 cash.', 2, ''],
        ['お金[かね] です。', 'Money.', 1, 'More detail helps them find it.']]],
      ['n', '少々[しょうしょう] お待[ま]ち ください。 … あ、 さっき 届[とど]いた 財布[さいふ] が あります。 これ です か。', 'One moment… Oh, a wallet was just handed in. Is this it?'],
      ['u', [
        ['はい、 それ です！ 本当[ほんとう] に ありがとう ございました！', 'Yes, that\'s it! Thank you so much!', 2, 'Only in Japan…'],
        ['いいえ、 ちがいます。', 'No, it\'s not.', 1, 'Look again — it has your card!']]],
      ['end', 'よかった です ね。 この 書類[しょるい] に 名前[なまえ] を 書[か]いて ください。', 'I\'m glad. Please write your name on this form.']
    ]
  }
]);
