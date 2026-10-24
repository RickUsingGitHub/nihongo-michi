/* Level 0 role-plays. Option: [japanese, english, score 0|1|2, feedback, 'npc reply|english', goto] */
JT.addConvos([
  {
    id: 'morning-neighbor', level: 0, icon: '🏠', npc: 'Mrs. Suzuki', avatar: '👵',
    title: 'Good Morning, Neighbor', scene: 'Leaving your apartment at 8 a.m., you bump into your neighbor Mrs. Suzuki.',
    goal: 'Greet your neighbor and head out politely.',
    script: [
      ['n', 'おはよう ございます。', 'Good morning.'],
      ['u', [
        ['おはよう ございます。', 'Good morning.', 2, 'Perfect — mirror the greeting.'],
        ['こんばんは。', 'Good evening.', 0, 'It\'s 8 in the morning!', 'え？ 今[いま] は 朝[あさ] です よ。|Huh? It\'s morning now.'],
        ['おやすみなさい。', 'Good night.', 0, 'That\'s for bedtime.']]],
      ['n', 'いい 天気[てんき] です ね。', 'Nice weather, isn\'t it?'],
      ['u', [
        ['そう です ね。', 'Yes, it is.', 2, 'そうですね is the go-to way to agree.'],
        ['はい、 わかりません。', 'Yes, I don\'t understand.', 0, 'That doesn\'t fit here.'],
        ['いいえ。', 'No.', 1, 'Grammatically fine, but disagreeing about nice weather sounds cold!']]],
      ['n', 'お出[で]かけ です か。', 'Going out?'],
      ['u', [
        ['はい、 ちょっと。', 'Yes, just for a bit.', 2, 'ちょっと is the perfect vague answer — no details needed.'],
        ['いいえ、 ちがいます。', 'No, that\'s wrong.', 1, 'Understandable, but it sounds like you\'re correcting her.'],
        ['どうぞ。', 'Here you go.', 0, 'どうぞ is for offering something.']]],
      ['n', 'いってらっしゃい！', 'Have a good day! (lit. "go and come back")'],
      ['u', [
        ['いってきます！', 'I\'m off! (lit. "I\'ll go and come back")', 2, 'いってきます ↔ いってらっしゃい is the classic leaving-home pair.'],
        ['いただきます！', '(said before eating)', 0, 'That\'s for meals!'],
        ['ありがとう ございます。', 'Thank you.', 1, 'Polite — but the set reply is いってきます.']]],
      ['end', '気[き] を つけて ね。', 'Take care.']
    ]
  },
  {
    id: 'self-intro', level: 0, icon: '🥂', npc: 'Tanaka',
    title: 'The Welcome Party', scene: 'At a welcome party, a coworker comes over to say hello. (You are Emma from the UK, an English teacher.)',
    goal: 'Introduce yourself the Japanese way.',
    script: [
      ['n', 'はじめまして。 田中[たなか] です。', 'Nice to meet you. I\'m Tanaka.'],
      ['u', [
        ['はじめまして。 エマ です。', 'Nice to meet you. I\'m Emma.', 2, 'Textbook perfect.'],
        ['田中[たなか] さん です か。', 'You\'re Tanaka?', 1, 'Introduce yourself back too!'],
        ['エマ さん です。', 'I\'m Ms. Emma.', 0, 'Never add さん to your own name.']]],
      ['n', 'エマ さん は アメリカ人[じん] です か。', 'Emma, are you American?'],
      ['u', [
        ['いいえ、 イギリス人[じん] です。', 'No, I\'m British.', 2, ''],
        ['はい、 イギリス人[じん] です。', 'Yes, I\'m British.', 0, '"Yes" contradicts what follows. Start with いいえ.'],
        ['いいえ、 イギリス です。', 'No, it\'s the UK.', 1, 'Add 人 for nationality: イギリス人.']]],
      ['n', 'そう です か。 お仕事[しごと] は？', 'I see. And your job?'],
      ['u', [
        ['英語[えいご] の 先生[せんせい] です。', 'I\'m an English teacher.', 2, ''],
        ['すみません、 もう いちど おねがいします。', 'Sorry, once more please.', 1, 'Good survival move! お仕事 means "job".', 'お・し・ご・と。 ジョブ です。|O-shi-go-to. "Job".'],
        ['はい、 そう です。', 'Yes, that\'s right.', 0, 'That doesn\'t answer the question.']]],
      ['u', [
        ['あ、 英語[えいご] の 先生[せんせい] です。', 'Ah, I\'m an English teacher.', 2, ''],
        ['いただきます。', '(said before eating)', 0, 'Not the time!']]],
      ['n', 'へえ、 いい です ね！', 'Oh, nice!'],
      ['u', [
        ['よろしく おねがいします。', 'Pleased to meet you.', 2, 'The perfect way to close an introduction.'],
        ['さようなら。', 'Goodbye.', 1, 'A bit abrupt — the party has just started!'],
        ['ごちそうさま でした。', 'Thanks for the meal.', 0, 'That\'s for after eating.']]],
      ['end', 'こちら こそ、 よろしく おねがいします。', 'Likewise, pleased to meet you.']
    ]
  },
  {
    id: 'dont-understand', level: 0, icon: '🏪', npc: 'Clerk',
    title: 'Too Fast at the Konbini', scene: 'The convenience-store clerk speaks very fast. Use your survival phrases!',
    goal: 'Get through checkout even when you don\'t catch everything.',
    script: [
      ['n', 'お弁当[べんとう]、 温[あたた]めます か。', '(very fast) Shall I heat up your bento?'],
      ['u', [
        ['すみません、 もう いちど おねがいします。', 'Sorry, once more please.', 2, 'Asking for a repeat is totally normal.', 'お弁当[べんとう]、 温[あたた]めます か。 レンジ で… チン！|Shall I heat your bento? In the microwave… ding!'],
        ['ゆっくり おねがいします。', 'Slowly, please.', 2, 'Great survival phrase.', 'お・べん・とう、 あたため・ます・か。 レンジ で… チン！|Bento… heat it? Microwave… ding!'],
        ['いただきます。', '(said before eating)', 0, 'Not yet!']]],
      ['u', [
        ['あ、 わかりました！ はい、 おねがいします。', 'Ah, got it! Yes, please.', 2, ''],
        ['いいえ、 大丈夫[だいじょうぶ] です。', 'No, I\'m fine.', 2, 'Also natural.'],
        ['わかりません。', 'I don\'t understand.', 1, 'Hint: "チン" is the microwave sound!']]],
      ['n', '袋[ふくろ] は ご利用[りよう] です か。', 'Will you use a bag?'],
      ['u', [
        ['大丈夫[だいじょうぶ] です。', 'I\'m fine (no thanks).', 2, 'Bags cost a few yen in Japan, so many people decline.'],
        ['おねがいします。', 'Yes, please.', 2, 'Fine — it adds ¥3–5.'],
        ['はい、 ちがいます。', 'Yes, that\'s wrong.', 0, 'That doesn\'t make sense.']]],
      ['n', 'ポイント カード は お持[も]ち です か。', 'Do you have a point card?'],
      ['u', [
        ['いいえ、 大丈夫[だいじょうぶ] です。', 'No, I\'m fine.', 2, 'The standard answer.'],
        ['英語[えいご]、 話[はな]せます か。', 'Can you speak English?', 1, 'Fair try!', 'すみません、 英語[えいご] は ちょっと… ポイント カード、 ノー？|Sorry, my English is… Point card — no?'],
        ['わかりました。', 'Got it.', 0, 'That doesn\'t answer the question.']]],
      ['end', 'ありがとう ございました！', 'Thank you very much!']
    ]
  },
  {
    id: 'souvenir-shop', level: 0, icon: '🎁', npc: 'Clerk',
    title: 'Souvenir Shopping', scene: 'A souvenir shop in Kyoto is full of mysterious boxes. Find out what they are and buy one.',
    goal: 'Ask what things are and buy one.',
    script: [
      ['n', 'いらっしゃいませ！', 'Welcome!'],
      ['u', [
        ['すみません、 これ は 何[なん] です か。', 'Excuse me, what is this?', 2, ''],
        ['いらっしゃいませ。', 'Welcome.', 0, 'That\'s the staff\'s line. A nod is enough.'],
        ['これ は 何[なん] です。', 'This is what.', 1, 'Add か to make it a question!']]],
      ['n', 'それ は 八[や]つ橋[はし] です。 京都[きょうと] の お菓子[かし] です よ。', 'That\'s yatsuhashi. It\'s a Kyoto sweet.'],
      ['u', [
        ['あれ は 何[なん] です か。', 'What is that over there?', 2, 'Good use of あれ for something far away.', 'あれ は 抹茶[まっちゃ] の クッキー です。|That\'s matcha cookies.'],
        ['これ は おいしい です か。', 'Is this tasty?', 2, '', 'はい、 とても おいしい です よ。|Yes, very tasty.'],
        ['どれ です か。', 'Which one?', 1, 'Hmm, she just told you!']]],
      ['n', 'どうぞ、 食[た]べて みて ください。', 'Here, please try one.'],
      ['u', [
        ['ありがとう ございます。 … おいしい！', 'Thank you. … Delicious!', 2, 'Free samples are common — enjoy!'],
        ['いいえ。', 'No.', 1, 'Blunt. Try 大丈夫です to decline politely.'],
        ['はじめまして。', 'Nice to meet you.', 0, '']]],
      ['u', [
        ['これ を ください。', 'This one, please.', 2, ''],
        ['これ は いくら です か。', 'How much is this?', 2, '', '千[せん] 円[えん] です。|It\'s 1,000 yen.'],
        ['ごちそうさま でした。', 'Thanks for the meal.', 1, 'Cute after a sample, but you still need to buy something!']]],
      ['n', 'ありがとう ございます。 袋[ふくろ] に 入[い]れます か。', 'Thank you. Shall I put it in a bag?'],
      ['u', [
        ['はい、 おねがいします。', 'Yes, please.', 2, 'Gifts usually get a nice paper bag.'],
        ['大丈夫[だいじょうぶ] です。', 'I\'m fine.', 2, ''],
        ['ちがいます。', 'That\'s wrong.', 0, '']]],
      ['end', 'ありがとう ございました！ また どうぞ。', 'Thank you very much! Please come again.']
    ]
  },
  {
    id: 'exchange-numbers', level: 0, icon: '📱', npc: 'Ken',
    title: 'Language Exchange', scene: 'At a language exchange café, Ken wants to stay in touch.',
    goal: 'Swap phone numbers (and LINE!).',
    script: [
      ['n', '今日[きょう] は ありがとう ございました！', 'Thanks for today!'],
      ['u', [
        ['こちら こそ、 ありがとう ございました。', 'Thank you too.', 2, 'こちらこそ = "same here".'],
        ['どういたしまして。', 'You\'re welcome.', 1, 'OK, but こちらこそ is warmer — you both helped each other.'],
        ['いただきます。', '(before eating)', 0, '']]],
      ['n', '電話[でんわ] 番号[ばんごう] は 何[なん] です か。', 'What\'s your phone number?'],
      ['u', [
        ['ゼロ きゅう ゼロ の いち に さん よん の ご ろく なな はち です。', 'It\'s 090-1234-5678.', 2, 'Clear and correct.'],
        ['きゅうじゅう の いち に さん よん です。', 'It\'s ninety-1234.', 1, 'Read phone numbers digit by digit: ゼロ きゅう ゼロ.'],
        ['いくら です か。', 'How much is it?', 0, '']]],
      ['n', 'すみません、 もう いちど おねがいします。', 'Sorry, once more please.'],
      ['u', [
        ['ゼロ きゅう ゼロ の いち に さん よん の ご ろく なな はち。', '090-1234-5678.', 2, ''],
        ['ゆっくり おねがいします。', 'Slowly, please.', 0, 'He\'s asking YOU to repeat.']]],
      ['n', 'ありがとう！ LINE[ライン] も 交換[こうかん] しません か。', 'Thanks! Shall we swap LINE too?'],
      ['u', [
        ['いい です ね！ はい、 どうぞ。', 'Sounds good! Here you go.', 2, 'Show your QR code — done!'],
        ['ちょっと…', 'It\'s a bit…', 1, 'A polite "no". He\'ll understand!', 'あ、 大丈夫[だいじょうぶ] です よ！|Oh, no problem!'],
        ['わかりません。', 'I don\'t understand.', 1, 'LINE is Japan\'s messaging app.']]],
      ['end', 'じゃあ、 また！', 'See you again!']
    ]
  },
  {
    id: 'konbini', level: 0, icon: '🍙', npc: 'Clerk',
    title: 'Convenience Store Checkout', scene: 'You\'re buying an onigiri and a coffee at a konbini.',
    goal: 'Pay and decline what you don\'t need, like a local.',
    script: [
      ['n', 'いらっしゃいませ！', 'Welcome!'],
      ['u', [
        ['これ、 おねがいします。', 'These, please.', 2, 'Put your items down and say this.'],
        ['いらっしゃいませ。', 'Welcome.', 0, 'That\'s the staff\'s line!'],
        ['はじめまして。', 'Nice to meet you.', 0, 'Only for introductions.']]],
      ['n', 'おにぎり、 温[あたた]めます か。', 'Shall I heat up the onigiri?'],
      ['u', [
        ['いいえ、 大丈夫[だいじょうぶ] です。', 'No, I\'m fine.', 2, 'Onigiri are usually eaten cold.'],
        ['はい、 おねがいします。', 'Yes, please.', 1, 'Unusual — but your choice!'],
        ['いくら です か。', 'How much is it?', 0, 'Answer the question first.']]],
      ['n', '三百[さんびゃく] 二十[にじゅう] 円[えん] です。', 'That\'s 320 yen.'],
      ['u', [
        ['カード で いい です か。', 'Is a card OK?', 2, '', 'はい、 どうぞ。|Yes, go ahead.'],
        ['はい、 千[せん] 円[えん] です。', 'Here\'s 1,000 yen.', 2, '', '六百[ろっぴゃく] 八十[はちじゅう] 円[えん] の おつり です。|Here\'s 680 yen change.'],
        ['高[たか]い です ね。', 'That\'s expensive.', 1, 'Haggling isn\'t done in Japanese shops!']]],
      ['n', 'レシート は ご利用[りよう] です か。', 'Do you need the receipt?'],
      ['u', [
        ['大丈夫[だいじょうぶ] です。', 'No thanks.', 2, ''],
        ['おねがいします。', 'Yes, please.', 2, ''],
        ['ちがいます。', 'That\'s wrong.', 0, '']]],
      ['end', 'ありがとう ございました！', 'Thank you very much!']
    ]
  },
  {
    id: 'where-toilet', level: 0, icon: '🚻', npc: 'Station staff', avatar: '🧑‍✈️',
    title: 'Where\'s the Restroom?', scene: 'You\'re in a busy station and urgently need a restroom.',
    goal: 'Find the restroom — and a konbini afterwards.',
    script: [
      ['u', [
        ['すみません、 トイレ は どこ です か。', 'Excuse me, where is the restroom?', 2, 'Clear and polite.'],
        ['トイレ を ください。', 'Please give me a toilet.', 1, 'Funny, but they\'ll get it. Ask どこですか for places.'],
        ['トイレ です。', 'It\'s a toilet.', 0, 'Make it a question!']]],
      ['n', 'トイレ です か。 あそこ です。 まっすぐ 行[い]って、 右[みぎ] です。', 'The restroom? Over there. Go straight, then right.'],
      ['u', [
        ['まっすぐ、 右[みぎ] です ね。 ありがとう ございます。', 'Straight, then right. Thank you.', 2, 'Repeating directions back is a great habit.'],
        ['左[ひだり] です か。', 'Left?', 1, 'Listen again — 右 is right.', 'いいえ、 右[みぎ] です。|No, right.'],
        ['はじめまして。', 'Nice to meet you.', 0, '']]],
      ['n', 'はい。', 'Yes.'],
      ['u', [
        ['あと、 コンビニ は どこ です か。', 'Also, where is a convenience store?', 2, ''],
        ['いくら です か。', 'How much is it?', 0, 'Restrooms are free!']]],
      ['n', 'コンビニ は 駅[えき] の 外[そと] です。 出口[でぐち] の 近[ちか]く です よ。', 'The konbini is outside the station, near the exit.'],
      ['u', [
        ['わかりました。 ありがとう ございます！', 'Got it. Thank you!', 2, ''],
        ['すみません、 もう いちど おねがいします。', 'Sorry, once more please.', 2, '', '駅[えき] の 外[そと]、 出口[でぐち] の 近[ちか]く です。|Outside the station, near the exit.']]],
      ['end', 'いいえ。 どうぞ お気[き] を つけて。', 'Not at all. Take care.']
    ]
  },
  {
    id: 'ramen-shop', level: 0, icon: '🍜', npc: 'Waiter',
    title: 'Ramen Night', scene: 'A cozy ramen shop. You\'re hungry — order, eat, pay.',
    goal: 'Order ramen and a drink, then pay.',
    script: [
      ['n', 'いらっしゃいませ！ 何名[なんめい] 様[さま] です か。', 'Welcome! How many people?'],
      ['u', [
        ['ひとり です。', 'Just one.', 2, 'You can also hold up one finger.'],
        ['ふたつ です。', 'Two (things).', 1, 'ふたつ counts things — for people say ふたり. You\'ll learn this soon!'],
        ['ラーメン です。', 'Ramen.', 0, 'First tell them how many people.']]],
      ['n', 'こちら へ どうぞ。 ご注文[ちゅうもん] は？', 'This way please. What would you like?'],
      ['u', [
        ['ラーメン を ひとつ おねがいします。', 'One ramen, please.', 2, ''],
        ['メニュー を おねがいします。', 'The menu, please.', 2, '', 'はい、 どうぞ。 英語[えいご] の メニュー です。|Here you go, an English menu.'],
        ['ごちそうさま でした。', 'Thanks for the meal.', 0, 'You haven\'t eaten yet!']]],
      ['n', 'お飲[の]み物[もの] は？', 'Anything to drink?'],
      ['u', [
        ['ビール を おねがいします。', 'A beer, please.', 2, ''],
        ['水[みず] を おねがいします。', 'Water, please.', 2, 'Water and tea are usually free.'],
        ['いいえ、 ちがいます。', 'No, that\'s wrong.', 0, 'Use 大丈夫です to say "no thanks".']]],
      ['n', 'お待[ま]たせ しました！ ラーメン です。', 'Sorry to keep you waiting! Your ramen.'],
      ['u', [
        ['いただきます！', 'Let\'s eat!', 2, 'Slurping is perfectly polite with ramen!'],
        ['ごちそうさま でした！', 'Thanks for the meal!', 0, 'That\'s for after eating.'],
        ['おやすみなさい。', 'Good night.', 0, '']]],
      ['n', '…', '(Some time later…)'],
      ['u', [
        ['ごちそうさま でした。 お会計[かいけい] おねがいします。', 'Thank you for the meal. The bill, please.', 2, 'Perfect ending.'],
        ['すみません、 いくら です か。', 'Excuse me, how much is it?', 2, ''],
        ['いただきます。', '(before eating)', 0, 'You\'ve finished already!']]],
      ['end', '千[せん] 二百[にひゃく] 円[えん] です。 ありがとう ございました！', 'That\'s 1,200 yen. Thank you very much!']
    ]
  },
  {
    id: 'what-time', level: 0, icon: '🚌', npc: 'Woman', avatar: '👩',
    title: 'Waiting for the Bus', scene: 'At a bus stop, your phone is dead. You need to know the time.',
    goal: 'Ask the time and when the bus comes.',
    script: [
      ['u', [
        ['すみません、 今[いま] 何時[なんじ] です か。', 'Excuse me, what time is it now?', 2, ''],
        ['すみません、 何時[なんじ] を ください。', 'Excuse me, please give me what time.', 1, 'Close! Use です か for questions.'],
        ['いくら です か。', 'How much is it?', 0, '']]],
      ['n', '今[いま]… 2時[にじ] 50分[ごじゅっぷん] です。', 'It\'s… 2:50.'],
      ['u', [
        ['ありがとう ございます。 バス は 何時[なんじ] です か。', 'Thank you. What time is the bus?', 2, ''],
        ['2時[にじ] 15分[じゅうごふん] です か。', 'Is it 2:15?', 1, 'Listen again: 50 = ごじゅっぷん.', 'いいえ、 2時[にじ] 50分[ごじゅっぷん] です。|No, 2:50.']]],
      ['n', 'えっと… 3時[さんじ] です。 あと 10分[じゅっぷん] です ね。', 'Um… at 3. Ten more minutes.'],
      ['u', [
        ['そう です か。 ありがとう ございます。', 'I see. Thank you.', 2, ''],
        ['3時[さんじ] 半[はん] です か。', 'Is it 3:30?', 1, 'She said 3時 — exactly 3.', 'いいえ、 3時[さんじ] ちょうど です。|No, exactly 3.']]],
      ['n', 'どこ へ 行[い]きます か。', 'Where are you going?'],
      ['u', [
        ['駅[えき] です。', 'To the station.', 2, 'Short answers are natural.'],
        ['はい、 そう です。', 'Yes, that\'s right.', 0, 'That doesn\'t answer "where".']]],
      ['end', 'わたし も です。 一緒[いっしょ] です ね。', 'Me too. We\'re going the same way.']
    ]
  },
  {
    id: 'taxi-ride', level: 0, icon: '🚕', npc: 'Driver',
    title: 'Taxi to the Hotel', scene: 'You arrive in Tokyo at night and take a taxi to your hotel. (The door opens by itself!)',
    goal: 'Tell the driver where to go, check the time and pay.',
    script: [
      ['n', 'こんばんは。 どちら まで？', 'Good evening. Where to?'],
      ['u', [
        ['こんばんは。 さくら ホテル まで おねがいします。', 'Good evening. To the Sakura Hotel, please.', 2, 'Place + まで おねがいします is the taxi formula.'],
        ['ホテル です。', 'Hotel.', 1, 'Which hotel? Give the name — or show the address on your phone.'],
        ['おはよう ございます。', 'Good morning.', 0, 'It\'s night!']]],
      ['n', 'さくら ホテル です ね。 かしこまりました。', 'The Sakura Hotel. Certainly.'],
      ['u', [
        ['何分[なんぷん] ぐらい です か。', 'About how many minutes?', 2, ''],
        ['いくら です か。', 'How much is it?', 1, 'The meter decides — but you can ask!', 'メーター です よ。 二千[にせん] 円[えん] ぐらい です。|It\'s by the meter. About 2,000 yen.']]],
      ['n', '20分[にじゅっぷん] ぐらい です。', 'About 20 minutes.'],
      ['u', [
        ['わかりました。 ゆっくり で 大丈夫[だいじょうぶ] です。', 'OK. No need to rush.', 2, 'Nice and polite.'],
        ['すみません、 わかりません。', 'Sorry, I don\'t understand.', 1, '', 'に・じゅっ・ぷん。 トゥエンティ ミニッツ。|Twen-ty mi-nutes.']]],
      ['n', 'はい、 着[つ]きました。 二千[にせん] 四百[よんひゃく] 円[えん] です。', 'Here we are. That\'s 2,400 yen.'],
      ['u', [
        ['カード で いい です か。', 'Is a card OK?', 2, 'Most Tokyo taxis take cards and IC cards.', 'はい、 どうぞ。|Yes, go ahead.'],
        ['はい、 三千[さんぜん] 円[えん] です。 おつり は 大丈夫[だいじょうぶ] です。', 'Here\'s 3,000 yen. Keep the change.', 1, 'Kind — but tipping isn\'t a custom; the driver will likely insist on giving change!', 'いえいえ、 六百[ろっぴゃく] 円[えん] の おつり です。|No no, here\'s your 600 yen change.'],
        ['ごちそうさま でした。', 'Thanks for the meal.', 0, '']]],
      ['end', 'ありがとう ございました。 お気[き] を つけて。', 'Thank you very much. Take care.']
    ]
  }
]);
