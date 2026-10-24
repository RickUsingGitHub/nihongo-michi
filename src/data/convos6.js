/* N4–N1 role-plays. Option: [japanese, english, score 0|1|2, feedback, 'npc reply|english', goto] */
JT.addConvos([
  // ---------------- N4 ----------------
  {
    id: 'n4-neighbor-favor', level: 6, icon: '📦', npc: 'Mrs. Suzuki', avatar: '👵',
    title: 'Asking a Neighbor a Favor', scene: 'You\'re going away for a week and need someone to receive a package.',
    goal: 'Ask for a favor with ～てもらえませんか and thank her properly.',
    script: [
      ['n', 'あら、 こんにちは。 どう した の？', 'Oh, hello. What\'s up?'],
      ['u', [
        ['実[じつ]は、 お願[ねが]い が ある ん です が…', 'Actually, I have a favor to ask…', 2, 'The perfect soft opener.'],
        ['荷物[にもつ] を 受[う]け取[と]って。', 'Receive my package.', 0, 'Way too direct for a neighbor!'],
        ['お願[ねが]い します。', 'Please.', 1, 'Explain what you need first.']]],
      ['n', 'いい わ よ。 何[なに]？', 'Sure. What is it?'],
      ['u', [
        ['来週[らいしゅう] 一週間[いっしゅうかん] 留守[るす] に する ので、 荷物[にもつ] を 預[あず]かって もらえません か。', 'I\'ll be away all next week — could you keep a package for me?', 2, ''],
        ['荷物[にもつ] を 預[あず]かって あげます か。', 'Shall I keep a package for you?', 0, 'あげる means YOU do the favor. You want もらう.'],
        ['荷物[にもつ] が 来[く]る そう です。', 'I hear a package is coming.', 1, 'Now ask the actual favor.']]],
      ['n', 'もちろん。 いつ 届[とど]く の？', 'Of course. When will it arrive?'],
      ['u', [
        ['水曜日[すいようび] の 午後[ごご] に 届[とど]く はず です。', 'It should arrive Wednesday afternoon.', 2, 'Nice use of はず.'],
        ['水曜日[すいようび] に 届[とど]いたら、 受[う]け取[と]って くれる と 助[たす]かります。', 'If you could take it when it arrives Wednesday, that would help.', 2, '']]],
      ['n', 'わかった わ。 気[き] を つけて 行[い]って らっしゃい。', 'Got it. Have a safe trip.'],
      ['u', [
        ['本当[ほんとう] に 助[たす]かります。 お土産[みやげ] を 買[か]って きます ね。', 'That really helps. I\'ll bring back a souvenir.', 2, 'A return gift is the polite thing to do.'],
        ['ありがとう。', 'Thanks.', 1, 'A bit casual for an older neighbor.']]],
      ['end', 'あら、 気[き] を 使[つか]わなくて いい の に。', 'Oh, you don\'t need to go to the trouble.']
    ]
  },
  {
    id: 'n4-trip-planning', level: 6, icon: '🗾', npc: 'Ken',
    title: 'Planning a Trip', scene: 'You and Ken plan a weekend trip. Lots of "if" and "let\'s".',
    goal: 'Use volitional and conditionals (たら・ば・なら) naturally.',
    script: [
      ['n', '週末[しゅうまつ]、 どこ か 行[い]こう よ。', 'Let\'s go somewhere this weekend.'],
      ['u', [
        ['いい ね！ 温泉[おんせん] に 行[い]こう か。', 'Great! Shall we go to a hot spring?', 2, ''],
        ['いい ね！ 温泉[おんせん] に 行[い]きます か。', 'Great! Will you go to a hot spring?', 1, 'Casual volitional 行こう sounds more natural with a friend.']]],
      ['n', '温泉[おんせん] なら、 箱根[はこね] は どう？', 'If it\'s hot springs, how about Hakone?'],
      ['u', [
        ['箱根[はこね] なら、 新宿[しんじゅく] から ロマンスカー で 行[い]ける ね。', 'If it\'s Hakone, we can go on the Romancecar from Shinjuku.', 2, ''],
        ['箱根[はこね] と、 行[い]こう。', 'Hakone and, let\'s go.', 0, '']]],
      ['n', '天気[てんき] が 悪[わる]かったら どう する？', 'What if the weather is bad?'],
      ['u', [
        ['雨[あめ] が 降[ふ]ったら、 美術館[びじゅつかん] に 行[い]けば いい よ。', 'If it rains, we can just go to a museum.', 2, ''],
        ['雨[あめ] が 降[ふ]る と、 行[い]こう。', 'When it rains, let\'s go.', 0, 'と can\'t take a suggestion like 行こう.']]],
      ['n', 'いい ね。 宿[やど] は どう しよう？', 'Nice. What about accommodation?'],
      ['u', [
        ['早[はや]く 予約[よやく] すれ ば 安[やす]く なる から、 今日[きょう] 予約[よやく] して おく よ。', 'It\'s cheaper if we book early, so I\'ll book today.', 2, 'ば + ておく — great.'],
        ['予約[よやく] しよう と 思[おも]って いる。', 'I\'m thinking of booking.', 2, '']]],
      ['end', 'ありがとう！ 楽[たの]しみ だ ね。', 'Thanks! Can\'t wait.']
    ]
  },
  {
    id: 'n4-broken-item', level: 6, icon: '🔧', npc: 'Shop clerk', avatar: '🧑‍💼',
    title: 'Returning a Broken Item', scene: 'The headphones you bought yesterday stopped working. You go back to the store.',
    goal: 'Explain the problem with てしまう / んです and ask for an exchange.',
    script: [
      ['n', 'いらっしゃいませ。 どう なさいました か。', 'Welcome. How can I help?'],
      ['u', [
        ['昨日[きのう] 買[か]った ヘッドホン が、 もう 壊[こわ]れて しまった ん です が…', 'The headphones I bought yesterday already broke…', 2, 'てしまった + んですが — perfect complaint style.'],
        ['ヘッドホン を 壊[こわ]しました。', 'I broke the headphones.', 1, 'That sounds like YOU broke them! Use 壊れてしまった.'],
        ['返金[へんきん] しろ。', 'Refund it.', 0, 'Rude!']]],
      ['n', '申[もう]し訳[わけ] ございません。 レシート は お持[も]ち です か。', 'I\'m very sorry. Do you have the receipt?'],
      ['u', [
        ['はい、 こちら です。', 'Yes, here it is.', 2, ''],
        ['レシート を 捨[す]てて しまいました…', 'I threw the receipt away…', 1, 'Oops — that may make it harder.', 'そう です か… 会員[かいいん] カード は お持[も]ち です か。|I see… Do you have a membership card?']]],
      ['n', '確認[かくにん] いたします。 … 右[みぎ] から 音[おと] が 聞[き]こえない ん です ね。', 'Let me check. … No sound from the right side, I see.'],
      ['u', [
        ['はい。 新[あたら]しい の と 交換[こうかん] して もらえません か。', 'Yes. Could you exchange it for a new one?', 2, ''],
        ['はい。 直[なお]して あげて ください。', 'Yes. Please fix it (for someone).', 1, 'You want もらう — a favor for you.']]],
      ['end', 'かしこまりました。 すぐ に 新[あたら]しい もの を お持[も]ち します。', 'Certainly. I\'ll bring a new one right away.']
    ]
  },
  {
    id: 'n4-boss-dinner', level: 6, icon: '🍶', npc: 'Mr. Kato', avatar: '👴',
    title: 'Dinner at the Boss\'s Home', scene: 'Your manager, Mr. Kato, has invited you to dinner at his house. Time for keigo!',
    goal: 'Use respectful and humble language naturally.',
    script: [
      ['n', 'よく 来[き]て くれた ね。 さあ、 上[あ]がって。', 'Glad you could come. Come on in.'],
      ['u', [
        ['お邪魔[じゃま] します。 本日[ほんじつ] は お招[まね]き いただき、 ありがとう ございます。', 'Excuse me for intruding. Thank you for inviting me today.', 2, 'Excellent.'],
        ['来[き]て あげました。', 'I came for you.', 0, 'Very rude — あげる to a superior!'],
        ['こんばんは。 入[はい]ります。', 'Good evening. I\'m coming in.', 1, 'Use お邪魔します when entering a home.']]],
      ['u', [
        ['これ、 つまらない もの です が、 どうぞ 召[め]し上[あ]がって ください。', 'This is just a small thing, but please enjoy it.', 2, '召し上がる — respectful "eat".'],
        ['これ、 どうぞ いただいて ください。', 'Please humbly receive this.', 0, 'いただく is humble — never for your boss\'s actions.']]],
      ['n', 'ありがとう。 気[き] を 使[つか]わせて 悪[わる]い ね。 何[なに] を 飲[の]む？', 'Thanks — sorry to make you go to trouble. What will you drink?'],
      ['u', [
        ['では、 ビール を いただきます。', 'Then I\'ll have a beer, thank you.', 2, 'いただきます — humble, perfect.'],
        ['ビール を 召[め]し上[あ]がります。', 'I\'ll (respectfully) eat beer.', 0, 'Don\'t use respectful language for yourself.']]],
      ['n', '加藤[かとう] の 妻[つま] です。 たくさん 召[め]し上[あ]がって ね。', 'I\'m Kato\'s wife. Please eat plenty.'],
      ['u', [
        ['はじめまして。 加藤[かとう] 部長[ぶちょう] に は いつも お世話[せわ] に なって おります。', 'Nice to meet you. Mr. Kato always takes such good care of me.', 2, 'The perfect line for a boss\'s family.'],
        ['加藤[かとう] さん は いつも 優[やさ]しい です。', 'Kato is always kind.', 1, 'Nice, but お世話になっております is the expected phrase.']]],
      ['n', '… もう こんな 時間[じかん] か。', '… Oh, look at the time.'],
      ['u', [
        ['本日[ほんじつ] は ごちそうさま でした。 そろそろ 失礼[しつれい] いたします。', 'Thank you for the wonderful meal. I should be going.', 2, ''],
        ['じゃあ、 帰[かえ]る ね。', 'Well, I\'m going home.', 0, 'Far too casual with your boss!']]],
      ['end', 'また いつ でも 来[き]て ください。 気[き] を つけて。', 'Come again any time. Take care.']
    ]
  },
  {
    id: 'n4-part-time', level: 6, icon: '☕', npc: 'Manager', avatar: '👔',
    title: 'Part-Time Job Interview', scene: 'You\'re interviewing for a part-time job at a café.',
    goal: 'Talk about what you can do, when you can work and why.',
    script: [
      ['n', 'では、 自己[じこ] 紹介[しょうかい] を お願[ねが]い します。', 'Please introduce yourself.'],
      ['u', [
        ['リー と 申[もう]します。 大学[だいがく] で 経済[けいざい] を 勉強[べんきょう] して います。 よろしく お願[ねが]い いたします。', 'My name is Lee. I study economics at university. Thank you for this opportunity.', 2, 'Humble 申します — perfect for interviews.'],
        ['リー です。 学生[がくせい] だ よ。', 'I\'m Lee. I\'m a student, you know.', 0, 'Too casual for an interview.']]],
      ['n', '日本語[にほんご] は どの くらい 話[はな]せます か。', 'How well can you speak Japanese?'],
      ['u', [
        ['日常[にちじょう] 会話[かいわ] は 問題[もんだい] なく 話[はな]せます。 敬語[けいご] も 勉強[べんきょう] して います。', 'I can handle daily conversation without problems, and I\'m studying keigo.', 2, ''],
        ['ペラペラ です。', 'I\'m fluent.', 1, 'Bold! Modesty usually lands better.']]],
      ['n', '週[しゅう] に 何日[なんにち] 働[はたら]けます か。', 'How many days a week can you work?'],
      ['u', [
        ['週[しゅう] に 三日[みっか] ぐらい 働[はたら]けます。 土日[どにち] も 大丈夫[だいじょうぶ] です。', 'About three days a week. Weekends are fine too.', 2, ''],
        ['三日[みっか] 働[はたら]きたがります。', 'I (someone else) wants to work three days.', 0, 'たがる is for other people.']]],
      ['n', 'どうして この 店[みせ] で 働[はたら]きたい の です か。', 'Why do you want to work at this café?'],
      ['u', [
        ['お客[きゃく]様[さま] と 話[はな]す こと で、 日本語[にほんご] が もっと 上手[じょうず] に なる と 思[おも]った から です。', 'Because I thought talking with customers would improve my Japanese.', 2, ''],
        ['コーヒー が 好[す]き だ し、 家[いえ] から 近[ちか]い し…', 'I like coffee, and it\'s close to home…', 2, 'Honest — ～し lists reasons nicely.']]],
      ['end', 'わかりました。 結果[けっか] は 一週間[いっしゅうかん] 以内[いない] に ご連絡[れんらく] します。', 'I see. We\'ll contact you with the result within a week.']
    ]
  },
  // ---------------- N3 ----------------
  {
    id: 'n3-job-interview', level: 7, icon: '💼', npc: 'Interviewer', avatar: '👔',
    title: 'Full-Time Job Interview', scene: 'A formal interview at a Japanese trading company.',
    goal: 'Speak about your experience and motivation with formal N3 grammar.',
    script: [
      ['n', '本日[ほんじつ] は お越[こ]し いただき、 ありがとう ございます。 どうぞ お座[すわ]り ください。', 'Thank you for coming today. Please have a seat.'],
      ['u', [
        ['失礼[しつれい] いたします。 本日[ほんじつ] は よろしく お願[ねが]い いたします。', 'Excuse me. Thank you for meeting me today.', 2, 'Classic interview opener.'],
        ['どうも。', 'Thanks.', 0, 'Too casual.']]],
      ['n', '当社[とうしゃ] を 志望[しぼう] した 理由[りゆう] を 教[おし]えて ください。', 'Please tell us why you applied to our company.'],
      ['u', [
        ['御社[おんしゃ] は 海外[かいがい] 展開[てんかい] に 力[ちから] を 入[い]れて いる ため、 語学力[ごがくりょく] を 生[い]かせる と 考[かんが]えた から です。', 'Because your company focuses on overseas expansion, I thought I could make use of my language skills.', 2, '御社 = "your company" in speech.'],
        ['給料[きゅうりょう] が いい から です。', 'Because the salary is good.', 1, 'Honest… but not the answer interviewers want!']]],
      ['n', '前[まえ] の 仕事[しごと] で は どんな 経験[けいけん] を しました か。', 'What experience did you gain at your previous job?'],
      ['u', [
        ['営業[えいぎょう] と して、 アジア の 取引先[とりひきさき] と の 交渉[こうしょう] を 担当[たんとう] して いました。', 'As a salesperson, I was in charge of negotiations with Asian clients.', 2, 'として — great.'],
        ['いろいろ な 経験[けいけん] を しました。', 'I had various experiences.', 1, 'Be specific!']]],
      ['n', '仕事[しごと] で 失敗[しっぱい] した とき は、 どう します か。', 'What do you do when you make a mistake at work?'],
      ['u', [
        ['まず すぐ に 上司[じょうし] に 報告[ほうこく] し、 同[おな]じ ミス を しない よう に 原因[げんいん] を 考[かんが]える よう に して います。', 'First I report to my boss right away, and I make a point of analyzing the cause so I don\'t repeat it.', 2, 'Perfect — and you mentioned 報告 (reporting), very valued in Japan.'],
        ['失敗[しっぱい] する わけ が ありません。', 'There\'s no way I\'d make a mistake.', 0, 'Overconfidence won\'t impress.']]],
      ['end', 'ありがとう ございました。 結果[けっか] は 後日[ごじつ] ご連絡[れんらく] いたします。', 'Thank you. We will contact you with the result at a later date.']
    ]
  },
  {
    id: 'n3-apology', level: 7, icon: '🙇', npc: 'Section chief', avatar: '👔',
    title: 'Apologizing at Work', scene: 'You forgot to send an important document to a client. Your section chief calls you over.',
    goal: 'Apologize properly, explain and propose a fix.',
    script: [
      ['n', 'ちょっと いい？ ABC 社[しゃ] から 資料[しりょう] が 届[とど]いて いない って 電話[でんわ] が あった ん だ けど。', 'Got a minute? ABC called saying they haven\'t received the documents.'],
      ['u', [
        ['大変[たいへん] 申[もう]し訳[わけ] ございません。 わたし の 確認[かくにん] 不足[ぶそく] です。', 'I\'m terribly sorry. It was my failure to check.', 2, 'Take responsibility first — exactly right.'],
        ['電車[でんしゃ] が 遅[おく]れた せい です。', 'It\'s because the train was late.', 0, 'Blaming circumstances without apologizing looks bad.'],
        ['あ、 忘[わす]れちゃった。', 'Oops, I forgot.', 0, 'Far too casual.']]],
      ['n', 'どう して 送[おく]られて いない ん だ？', 'Why wasn\'t it sent?'],
      ['u', [
        ['送信[そうしん] した つもり だった の です が、 下書[したが]き に 残[のこ]って いました。', 'I thought I\'d sent it, but it was left in drafts.', 2, 'つもりだった — honest explanation.'],
        ['送[おく]る わけ が ない です。', 'There\'s no way I\'d send it.', 0, 'That makes no sense.']]],
      ['n', 'そう か。 先方[せんぽう] は 怒[おこ]って いた よ。', 'I see. The client was angry.'],
      ['u', [
        ['今[いま] すぐ 送[おく]り、 先方[せんぽう] に お電話[でんわ] で お詫[わ]び いたします。', 'I\'ll send it right now and call the client to apologize.', 2, 'Proposing immediate action — great.'],
        ['怒[おこ]る こと は ない と 思[おも]います。', 'I don\'t think they need to be angry.', 0, 'Never say that!']]],
      ['n', 'うん、 そう して くれ。 今後[こんご] は 気[き] を つけて ね。', 'Yes, do that. Be careful from now on.'],
      ['u', [
        ['はい。 今後[こんご] は 送信[そうしん] 後[ご] に 必[かなら]ず 確認[かくにん] する よう に します。', 'Yes. From now on I\'ll always check after sending.', 2, 'ようにする — a concrete commitment.'],
        ['はい、 二度[にど] と しません。', 'Yes, I won\'t do it again.', 2, '']]],
      ['end', 'よろしく 頼[たの]む よ。', 'I\'m counting on you.']
    ]
  },
  {
    id: 'n3-complaint', level: 7, icon: '🏢', npc: 'Landlord', avatar: '👨',
    title: 'Noise Complaint', scene: 'Your upstairs neighbor is noisy late every night. You call the building management.',
    goal: 'Complain politely but clearly.',
    script: [
      ['n', 'はい、 さくら 不動産[ふどうさん] です。', 'Hello, Sakura Real Estate.'],
      ['u', [
        ['あの、 さくら ハイツ 202号室[にまるにごうしつ] の スミス です が、 ちょっと ご相談[そうだん] が ありまして…', 'Um, this is Smith from Sakura Heights room 202 — I have something to discuss…', 2, 'ご相談 — a soft way to raise a problem.'],
        ['上[うえ] の 人[ひと] が うるさい！', 'The person upstairs is noisy!', 0, 'Too blunt for a first contact.']]],
      ['n', 'はい、 どう されました か。', 'Yes, what seems to be the matter?'],
      ['u', [
        ['上[うえ] の 部屋[へや] から 毎晩[まいばん] 12時[じゅうにじ] 過[す]ぎ まで 足音[あしおと] が 聞[き]こえて、 眠[ねむ]れない ん です。', 'Every night until after midnight I hear footsteps from upstairs and can\'t sleep.', 2, 'Concrete facts — very effective.'],
        ['ちょっと 音[おと] が 気[き] に なる か な と 思[おも]って…', 'I was just thinking the sound bothers me a little…', 1, 'Too vague — they may not act.']]],
      ['n', 'それ は ご迷惑[めいわく] を おかけ して います。 いつ ごろ から です か。', 'We apologize for the inconvenience. Since when?'],
      ['u', [
        ['先月[せんげつ] 新[あたら]しい 人[ひと] が 引[ひ]っ越[こ]して きて から です。', 'Since a new person moved in last month.', 2, ''],
        ['ずっと 前[まえ] から だ と 思[おも]います。', 'I think since long ago.', 1, '']]],
      ['n', 'わかりました。 こちら から 注意[ちゅうい] して おきます。', 'Understood. We\'ll speak to them.'],
      ['u', [
        ['お手数[てすう] を おかけ しますが、 よろしく お願[ねが]い します。 わたし の 名前[なまえ] は 出[だ]さないで いただける と 助[たす]かります。', 'Sorry for the trouble. I\'d appreciate it if you didn\'t mention my name.', 2, 'Smart — keeps neighbor relations smooth.'],
        ['すぐ 追[お]い出[だ]して ください。', 'Please evict them immediately.', 0, 'Extreme!']]],
      ['end', 'かしこまりました。 お名前[なまえ] は 出[だ]さず に 対応[たいおう] いたします。', 'Certainly. We\'ll handle it without mentioning your name.']
    ]
  },
  {
    id: 'n3-friend-advice', level: 7, icon: '☕', npc: 'Mika', avatar: '👧',
    title: 'Advice for a Friend', scene: 'Your friend Mika is stressed about work and asks for your advice over coffee.',
    goal: 'Listen, empathize and advise with N3 nuance.',
    script: [
      ['n', '最近[さいきん]、 仕事[しごと] が つらくて… 辞[や]めよう か な って 思[おも]って る の。', 'Work has been so hard lately… I\'m thinking of quitting.'],
      ['u', [
        ['そう なんだ。 何[なに] か あった の？', 'I see. Did something happen?', 2, 'Listen first — very kind.'],
        ['辞[や]める べき だ よ。', 'You should quit.', 1, 'Advice too fast — listen first.']]],
      ['n', '残業[ざんぎょう] ばかり で、 上司[じょうし] も 厳[きび]しい し…', 'Nothing but overtime, and my boss is strict…'],
      ['u', [
        ['それ は 大変[たいへん] だ ね。 疲[つか]れる わけ だ よ。', 'That\'s tough. No wonder you\'re exhausted.', 2, 'わけだ — empathetic conclusion.'],
        ['みんな そう だ よ。', 'Everyone\'s like that.', 1, 'Dismissive!']]],
      ['n', 'でも、 辞[や]めたら 次[つぎ] の 仕事[しごと] が 見[み]つかる か 不安[ふあん] で。', 'But if I quit, I\'m worried whether I\'ll find another job.'],
      ['u', [
        ['すぐ 辞[や]める こと は ない よ。 まず 転職[てんしょく] サイト を 見[み]て みたら？', 'No need to quit right away. Why not look at job sites first?', 2, 'ことはない + たら — gentle advice.'],
        ['ミカ なら 大丈夫[だいじょうぶ] に 決[き]まって る よ！', 'You\'ll obviously be fine!', 2, 'Encouraging!']]],
      ['end', 'ありがとう。 話[はな]したら 少[すこ]し 楽[らく] に なった。', 'Thanks. I feel a little better after talking.']
    ]
  },
  // ---------------- N2 ----------------
  {
    id: 'n2-business-meeting', level: 8, icon: '📊', npc: 'Manager Suzuki', avatar: '👩‍💼',
    title: 'Project Meeting', scene: 'A meeting about a delayed product launch. You lead the discussion.',
    goal: 'Report, propose and negotiate with formal N2 expressions.',
    script: [
      ['n', 'では、 進捗[しんちょく] 状況[じょうきょう] の 報告[ほうこく] を お願[ねが]い します。', 'Please report on the progress.'],
      ['u', [
        ['はい。 部品[ぶひん] の 納品[のうひん] が 遅[おく]れて いる ため、 発売[はつばい] が 二週間[にしゅうかん] ほど 遅[おく]れる おそれ が あります。', 'Due to delays in parts delivery, there is a risk the launch will be delayed by about two weeks.', 2, 'ため + おそれがある — textbook business Japanese.'],
        ['遅[おく]れて いる っぽい です。', 'It seems kind of late.', 0, 'Too casual for a meeting.']]],
      ['n', 'それ は 困[こま]りました ね。 何[なに] か 対策[たいさく] は あります か。', 'That\'s a problem. Any countermeasures?'],
      ['u', [
        ['別[べつ] の 業者[ぎょうしゃ] に も 発注[はっちゅう] する こと に よって、 遅[おく]れ を 一週間[いっしゅうかん] に 抑[おさ]えられる と 考[かんが]えて おります。', 'By also ordering from another supplier, I believe we can limit the delay to one week.', 2, 'Concrete and formal.'],
        ['仕方[しかた] が ない と 思[おも]います。', 'I think it can\'t be helped.', 1, 'Meetings expect a proposal!']]],
      ['n', 'コスト は どう なります か。', 'What about costs?'],
      ['u', [
        ['費用[ひよう] は 一割[いちわり] ほど 増[ふ]える もの の、 発売[はつばい] が 遅[おく]れる 損失[そんしつ] に 比[くら]べれ ば 少[すく]ない です。', 'Costs rise about 10%, but that\'s small compared to the loss from a delayed launch.', 2, 'ものの + に比べれば — persuasive.'],
        ['わかり かねます。', 'I cannot know.', 1, 'Better to come prepared with numbers.']]],
      ['n', 'わかりました。 その 方向[ほうこう] で 進[すす]めて ください。', 'Understood. Please proceed that way.'],
      ['u', [
        ['承知[しょうち] しました。 詳細[しょうさい] が 決[き]まり 次第[しだい]、 ご報告[ほうこく] いたします。', 'Understood. I\'ll report as soon as the details are decided.', 2, '次第 — perfect.'],
        ['オッケー です。', 'OK.', 0, 'Too casual.']]],
      ['end', 'よろしく お願[ねが]い します。', 'Thank you.']
    ]
  },
  {
    id: 'n2-client-call', level: 8, icon: '☎️', npc: 'Client', avatar: '👨‍💼',
    title: 'Client on the Phone', scene: 'An important client calls with a request you can\'t accept as is.',
    goal: 'Handle a business call with keigo and decline diplomatically.',
    script: [
      ['n', 'お世話[せわ] に なって おります。 山田[やまだ] 商事[しょうじ] の 山田[やまだ] です。', 'Thank you for your continued support. This is Yamada from Yamada Trading.'],
      ['u', [
        ['いつも お世話[せわ] に なって おります。 ABC 社[しゃ] の スミス で ございます。', 'Thank you as always. This is Smith from ABC.', 2, 'The standard opening.'],
        ['もしもし、 スミス です けど。', 'Hello, it\'s Smith.', 0, 'Not for business calls.']]],
      ['n', '実[じつ]は、 納期[のうき] を 一週間[いっしゅうかん] 早[はや]めて いただけない か と 思[おも]いまして。', 'Actually, I was wondering if you could bring the delivery date forward by a week.'],
      ['u', [
        ['左様[さよう] で ございます か。 社内[しゃない] で 確認[かくにん] いたします ので、 少々[しょうしょう] お時間[じかん] を いただけます でしょう か。', 'I see. Could you give me a little time to check internally?', 2, 'Never commit on the spot.'],
        ['無理[むり] です。', 'Impossible.', 0, 'Far too blunt.']]],
      ['n', '急[いそ]ぎ で 申[もう]し訳[わけ] ない の です が、 何[なん] とか なりません か。', 'Sorry for the rush, but is there any way?'],
      ['u', [
        ['全量[ぜんりょう] を 一週間[いっしゅうかん] 早[はや]める の は 難[むずか]しい か と 存[ぞん]じます が、 半分[はんぶん] だけ 先[さき] に お届[とど]け する こと は 可能[かのう] か と 思[おも]います。', 'Bringing everything forward would be difficult, but delivering half in advance may be possible.', 2, 'Decline + alternative — excellent diplomacy.'],
        ['お応[こた]え し かねます。', 'We cannot comply.', 1, 'Polite, but offering an alternative builds trust.']]],
      ['n', 'それ は 助[たす]かります。 では、 それ で お願[ねが]い できます か。', 'That would help. Could we go with that?'],
      ['u', [
        ['承知[しょうち] いたしました。 詳細[しょうさい] は 改[あらた]めて メール で お送[おく]り いたします。', 'Certainly. I\'ll send details by email.', 2, ''],
        ['はい。 じゃあ、 そういう こと で。', 'OK. So, that\'s that.', 1, 'Too casual for a client.']]],
      ['end', 'ありがとう ございます。 引[ひ]き続[つづ]き よろしく お願[ねが]い いたします。', 'Thank you. We look forward to continuing to work with you.']
    ]
  },
  {
    id: 'n2-debate', level: 8, icon: '🗣️', npc: 'Classmate', avatar: '🧑‍🎓',
    title: 'Debate: Remote Work', scene: 'In a seminar, you debate whether companies should allow full remote work.',
    goal: 'Argue a position with concessions and evidence.',
    script: [
      ['n', '完全[かんぜん] リモート に すれ ば、 生産性[せいさんせい] が 下[さ]がる と 思[おも]います。', 'I think productivity would drop with full remote work.'],
      ['u', [
        ['確[たし]か に その 懸念[けねん] は ある もの の、 調査[ちょうさ] に よれ ば 生産性[せいさんせい] が 上[あ]がった 企業[きぎょう] も 多[おお]い そう です。', 'That concern exists, but according to surveys many companies saw productivity rise.', 2, 'Concede + evidence — strong debate style.'],
        ['それ は 間違[まちが]って います。', 'That\'s wrong.', 1, 'Too confrontational for a Japanese seminar.']]],
      ['n', 'でも、 社員[しゃいん] 同士[どうし] の コミュニケーション が 減[へ]る の で は ない でしょう か。', 'But won\'t communication between employees decrease?'],
      ['u', [
        ['リモート だ から と いって、 コミュニケーション が なく なる わけ で は ありません。 ツール 次第[しだい] だ と 思[おも]います。', 'Being remote doesn\'t mean communication disappears. It depends on the tools.', 2, 'からといって + わけではない + 次第 — superb.'],
        ['減[へ]る に 決[き]まって います。', 'It will obviously decrease.', 0, 'That supports the other side!']]],
      ['n', 'では、 新入[しんにゅう] 社員[しゃいん] の 教育[きょういく] は どう する の です か。', 'Then what about training new employees?'],
      ['u', [
        ['その 点[てん] に 関[かん]して は、 最初[さいしょ] の 数[すう]か月[げつ] に 限[かぎ]り 出社[しゅっしゃ] する など、 柔軟[じゅうなん] な 対応[たいおう] が 必要[ひつよう] だ と 考[かんが]えます。', 'On that point, flexible measures are needed — like coming to the office only for the first few months.', 2, 'に関しては + に限り — balanced.'],
        ['わかりません。', 'I don\'t know.', 1, 'Try to propose something!']]],
      ['end', 'なるほど。 一律[いちりつ] に 決[き]める の で は なく、 状況[じょうきょう] に 応[おう]じて 選[えら]ぶ べき だ と いう こと です ね。', 'I see. So you\'re saying it should be chosen according to circumstances, not decided uniformly.']
    ]
  },
  // ---------------- N1 ----------------
  {
    id: 'n1-speech', level: 9, icon: '🎤', npc: 'Host', avatar: '🎩',
    title: 'Wedding Speech', scene: 'You\'re asked to give a speech at your Japanese colleague\'s wedding. The host introduces you.',
    goal: 'Deliver formal ceremonial Japanese.',
    script: [
      ['n', 'それでは、 新郎[しんろう] の 同僚[どうりょう] で いらっしゃる スミス 様[さま] より、 ご祝辞[しゅくじ] を 頂戴[ちょうだい] いたします。', 'We will now hear a congratulatory speech from Mr./Ms. Smith, a colleague of the groom.'],
      ['u', [
        ['ただいま ご紹介[しょうかい] に あずかりました スミス と 申[もう]します。 健太[けんた] さん、 美咲[みさき] さん、 ご結婚[けっこん] 誠[まこと] に おめでとう ございます。', 'I am Smith, as just introduced. Kenta, Misaki, my heartfelt congratulations on your marriage.', 2, 'A textbook opening.'],
        ['どうも、 スミス です。 おめでとう！', 'Hi, I\'m Smith. Congrats!', 0, 'Far too casual for a ceremony.']]],
      ['u', [
        ['健太[けんた] さん は、 入社[にゅうしゃ] 以来[いらい] 誰[だれ] より も 早[はや]く 出社[しゅっしゃ] し、 困難[こんなん] を もの と も せず に 仕事[しごと] に 取[と]り組[く]んで こられました。', 'Since joining the company, Kenta has always arrived earliest and tackled his work undaunted by difficulties.', 2, 'をものともせず — elegant praise.'],
        ['健太[けんた] さん は よく 遅刻[ちこく] します が、 いい 人[ひと] です。', 'Kenta is often late, but he\'s a good guy.', 0, 'Never mention flaws in a wedding speech!']]],
      ['u', [
        ['その 誠実[せいじつ] な お人柄[ひとがら] は、 皆様[みなさま] ご存[ぞん]じ の 通[とお]り で ございます。', 'His sincere character is just as everyone here knows.', 2, ''],
        ['彼[かれ] の 性格[せいかく] は 普通[ふつう] です。', 'His personality is normal.', 0, '']]],
      ['u', [
        ['お二人[ふたり] の 末永[すえなが]い お幸[しあわ]せ を 心[こころ] より お祈[いの]り 申[もう]し上[あ]げ、 お祝[いわ]い の 言葉[ことば] と させて いただきます。', 'I sincerely wish the two of you lasting happiness, and with that conclude my words of celebration.', 2, 'The classic closing formula.'],
        ['以上[いじょう] です。 終[お]わり！', 'That\'s it. The end!', 0, '']]],
      ['end', 'スミス 様[さま]、 心温[こころあたた]まる ご祝辞[しゅくじ]、 誠[まこと] に ありがとう ございました。', 'Thank you, Mr./Ms. Smith, for that heartwarming speech.']
    ]
  },
  {
    id: 'n1-negotiation', level: 9, icon: '🤝', npc: 'Director Tanaka', avatar: '👔',
    title: 'High-Stakes Negotiation', scene: 'You negotiate a long-term partnership with a director of a major Japanese firm.',
    goal: 'Persuade with refined, formal N1 Japanese.',
    script: [
      ['n', '御社[おんしゃ] の ご提案[ていあん] は 拝見[はいけん] しました が、 価格[かかく] の 面[めん] で 再考[さいこう] を お願[ねが]い したい。', 'We have reviewed your proposal, but we\'d like you to reconsider the price.'],
      ['u', [
        ['ご指摘[してき] は ごもっとも です。 ただ、 品質[ひんしつ] と いい 納期[のうき] と いい、 弊社[へいしゃ] の 提案[ていあん] は 他社[たしゃ] と は 比[くら]べる べく も ない と 自負[じふ] して おります。', 'Your point is entirely fair. However, in both quality and delivery, we believe our proposal is beyond comparison with other companies.', 2, 'といい～といい + べくもない — masterful.'],
        ['値段[ねだん] は 下[さ]げません。', 'We won\'t lower the price.', 0, 'Too blunt for a negotiation.']]],
      ['n', 'それ は 承知[しょうち] して いる。 しかし、 予算[よさん] に は 限[かぎ]り が ある の で ね。', 'I understand that. But our budget has limits.'],
      ['u', [
        ['でしたら、 三年[さんねん] 契約[けいやく] を 前提[ぜんてい] と して いただける の で あれ ば、 一割[いちわり] の 値引[ねび]き も 検討[けんとう] の 余地[よち] が ございます。', 'In that case, if we could assume a three-year contract, there is room to consider a 10% discount.', 2, 'Conditional concession — a classic negotiation move.'],
        ['予算[よさん] は さて おき、 契約[けいやく] して ください。', 'Budget aside, please sign.', 1, 'You can\'t just brush aside their budget!']]],
      ['n', '三年[さんねん] か… 長期[ちょうき] 契約[けいやく] と なる と、 社内[しゃない] で も 慎重[しんちょう] な 議論[ぎろん] を 余儀[よぎ] なく される。', 'Three years… With a long-term contract, we\'d be compelled to deliberate carefully internally.'],
      ['u', [
        ['もちろん で ございます。 ご判断[はんだん] に 足[た]る 資料[しりょう] を 改[あらた]めて ご用意[ようい] いたします。', 'Of course. We will prepare materials sufficient for your judgment.', 2, 'に足る — refined.'],
        ['早[はや]く 決[き]めて ください。', 'Please decide quickly.', 0, 'Pressure backfires in Japanese business.']]],
      ['end', 'それ は ありがたい。 前向[まえむ]き に 検討[けんとう] させて いただく。', 'I appreciate that. We will consider it positively.']
    ]
  }
]);
