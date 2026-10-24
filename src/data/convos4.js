/* Level 4 role-plays. Option: [japanese, english, score 0|1|2, feedback, 'npc reply|english', goto] */
JT.addConvos([
  {
    id: 'photo-request', level: 4, icon: '📸', npc: 'Woman', avatar: '👩',
    title: 'Take Our Photo?', scene: 'At Fushimi Inari\'s red gates, you want a photo of you and your friend.',
    goal: 'Politely ask a stranger to take a photo — and give instructions.',
    script: [
      ['u', [
        ['すみません、 写真[しゃしん] を 撮[と]って いただけません か。', 'Excuse me, could you possibly take our photo?', 2, 'Extra polite — perfect for strangers.'],
        ['すみません、 写真[しゃしん] を 撮[と]って ください。', 'Excuse me, please take a photo.', 2, 'Also fine.'],
        ['写真[しゃしん] を 撮[と]ります。', 'I take a photo.', 0, 'Ask with ～てください.']]],
      ['n', 'いい です よ。 どこ を 押[お]します か。', 'Sure. Where do I press?'],
      ['u', [
        ['ここ を 押[お]して ください。', 'Please press here.', 2, ''],
        ['ここ を 押[お]します。', 'I press here.', 1, 'Make it a request: 押してください.']]],
      ['n', 'はい、 撮[と]ります よ。 … どう です か。', 'OK, here goes. … How is it?'],
      ['u', [
        ['すみません、 もう 一枚[いちまい] 撮[と]って ください。 鳥居[とりい] も 入[い]れて ください。', 'Sorry, one more please. Please include the gates too.', 2, ''],
        ['ありがとう ございました！ 完璧[かんぺき] です！', 'Thank you so much! Perfect!', 2, '', 'よかった です。|I\'m glad.', 'end'],
        ['もう 一枚[いちまい] 撮[と]りました。', 'I took one more.', 0, '']]],
      ['n', 'はい、 どうぞ。 鳥居[とりい] も 入[はい]って います よ。', 'Here you go. The gates are in it too.'],
      ['u', [
        ['ありがとう ございました！', 'Thank you so much!', 2, 'Past tense for a finished favor.'],
        ['どういたしまして。', 'You\'re welcome.', 0, 'That\'s her line!']]],
      ['label', 'end'],
      ['end', 'いい 旅行[りょこう] を！', 'Have a great trip!']
    ]
  },
  {
    id: 'directions', level: 4, icon: '🧭', npc: 'Man', avatar: '👨',
    title: 'Lost in the Backstreets', scene: 'Your map app died. Ask a passer-by for the way to Ueno Station.',
    goal: 'Understand step-by-step directions and confirm them.',
    script: [
      ['u', [
        ['すみません、 道[みち] に 迷[まよ]いました。 上野[うえの] 駅[えき] は どこ です か。', 'Excuse me, I\'m lost. Where is Ueno Station?', 2, ''],
        ['上野[うえの] 駅[えき] に 行[い]って ください。', 'Please go to Ueno Station.', 0, 'You\'re telling HIM to go!']]],
      ['n', 'この 道[みち] を まっすぐ 行[い]って、 二[ふた]つ目[め] の 信号[しんごう] を 右[みぎ] に 曲[ま]がって ください。', 'Go straight along this road and turn right at the second light.'],
      ['u', [
        ['二[ふた]つ目[め] の 信号[しんごう] を 右[みぎ] です ね。', 'Right at the second light.', 2, 'Repeating back — great habit.'],
        ['一[ひと]つ目[め] の 信号[しんごう] を 左[ひだり] です ね。', 'Left at the first light.', 0, 'Listen again: 二つ目, 右.', 'いいえ、 二[ふた]つ目[め] を 右[みぎ] です。|No, the second one, right.']]],
      ['n', 'はい。 それから 橋[はし] を 渡[わた]って ください。 駅[えき] は 左[ひだり] に あります。', 'Yes. Then cross the bridge. The station is on the left.'],
      ['u', [
        ['歩[ある]いて 何分[なんぷん] ぐらい です か。', 'About how many minutes on foot?', 2, '', '10分[じゅっぷん] ぐらい です よ。|About 10 minutes.'],
        ['地図[ちず] を 書[か]いて いただけません か。', 'Could you draw me a map?', 2, 'Nice polite request.', 'いい です よ。 … はい、 どうぞ。|Sure. … Here you go.'],
        ['橋[はし] を 渡[わた]りません。', 'I won\'t cross the bridge.', 0, '']]],
      ['u', [
        ['よく わかりました。 ありがとう ございました！', 'I understand. Thank you very much!', 2, ''],
        ['すみません、 もう 一度[いちど] 言[い]って ください。', 'Sorry, please say it once more.', 1, 'Fine — though you already got it!', 'まっすぐ、 二[ふた]つ目[め] を 右[みぎ]、 橋[はし] を 渡[わた]って 左[ひだり] です。|Straight, right at the 2nd, cross the bridge, on the left.']]],
      ['end', 'いいえ。 気[き] を つけて。', 'Not at all. Take care.']
    ]
  },
  {
    id: 'running-late', level: 4, icon: '⏱️', npc: 'Yui',
    title: 'Running Late', scene: 'Your train stopped. Yui calls — you\'re supposed to meet her now.',
    goal: 'Explain where you are and what\'s happening with ～ています.',
    script: [
      ['n', 'もしもし？ 今[いま] どこ に いる の？', 'Hello? Where are you right now?'],
      ['u', [
        ['ごめん！ 今[いま]、 電車[でんしゃ] に 乗[の]って います。', 'Sorry! I\'m on the train now.', 2, ''],
        ['今[いま]、 電車[でんしゃ] に 乗[の]ります。', 'Now I ride the train.', 1, 'For right now, use ～ています.'],
        ['駅[えき] で 待[ま]って います。', 'I\'m waiting at the station.', 1, 'She\'s at the station — you\'re not!', 'え？ わたし も 駅[えき] に いる よ。 どこ？|Huh? I\'m at the station too. Where?']]],
      ['n', 'え？ 何[なに] か あった の？', 'Huh? Did something happen?'],
      ['u', [
        ['電車[でんしゃ] が 止[と]まって います。 事故[じこ] です。', 'The train has stopped. There was an accident.', 2, ''],
        ['電車[でんしゃ] が 遅[おく]れて います。', 'The train is delayed.', 2, '']]],
      ['n', 'そう なんだ。 何分[なんぷん] ぐらい かかる？', 'I see. How long will it take?'],
      ['u', [
        ['20分[にじゅっぷん] ぐらい かかります。 本当[ほんとう] に すみません。', 'About 20 minutes. I\'m really sorry.', 2, ''],
        ['わかりません。 先[さき] に カフェ に 入[はい]って いて ください。', 'I don\'t know. Please wait in a café first.', 2, 'Thoughtful!']]],
      ['n', '大丈夫[だいじょうぶ] だよ。 駅前[えきまえ] の カフェ で 本[ほん] を 読[よ]んで る ね。', 'No problem. I\'ll be reading in the café in front of the station.'],
      ['u', [
        ['ありがとう！ 着[つ]いたら すぐ 電話[でんわ] します。', 'Thanks! I\'ll call right when I arrive.', 2, ''],
        ['はい、 読[よ]んで ください。', 'Yes, please read.', 1, 'Odd — say thanks!']]],
      ['end', 'うん。 気[き] を つけて ね。', 'OK. Be careful.']
    ]
  },
  {
    id: 'lost-friend', level: 4, icon: '🎆', npc: 'Information desk', avatar: '💁',
    title: 'Lost at the Festival', scene: 'At a crowded fireworks festival you\'ve lost your friend. You go to the information tent.',
    goal: 'Describe your friend: clothes, glasses, height.',
    script: [
      ['n', 'どう されました か。', 'How can I help?'],
      ['u', [
        ['友[とも]だち と はぐれました。 探[さが]して います。', 'I got separated from my friend. I\'m looking for her.', 2, ''],
        ['友[とも]だち を なくしました。', 'I lost (an object) my friend.', 1, 'Understandable! はぐれる is "get separated".']]],
      ['n', 'お友[とも]だち は どんな 人[ひと] です か。', 'What does your friend look like?'],
      ['u', [
        ['背[せ] が 高[たか]くて、 髪[かみ] が 長[なが]い です。', 'She\'s tall and has long hair.', 2, ''],
        ['きれい な 人[ひと] です。', 'She\'s a pretty person.', 1, 'Nice, but not very helpful for finding her!']]],
      ['n', '何[なに] を 着[き]て います か。', 'What is she wearing?'],
      ['u', [
        ['青[あお]い 浴衣[ゆかた] を 着[き]て います。', 'She\'s wearing a blue yukata.', 2, ''],
        ['青[あお]い 浴衣[ゆかた] を はいて います。', 'She\'s "wearing (on legs)" a blue yukata.', 1, 'Clothing on the body uses 着ています.'],
        ['青[あお]い 浴衣[ゆかた] を 着[き]ます。', 'She will wear a blue yukata.', 1, 'Describe now: 着ています.']]],
      ['n', '眼鏡[めがね] は かけて います か。', 'Is she wearing glasses?'],
      ['u', [
        ['はい、 黒[くろ]い 眼鏡[めがね] を かけて います。', 'Yes, black glasses.', 2, 'かける is the verb for glasses.'],
        ['いいえ、 かけて いません。 でも、 帽子[ぼうし] を かぶって います。', 'No. But she\'s wearing a hat.', 2, 'Great — かぶる for hats.']]],
      ['n', 'お名前[なまえ] は？ 放送[ほうそう] します ね。', 'Her name? We\'ll make an announcement.'],
      ['u', [
        ['リサ です。 ありがとう ございます！', 'Lisa. Thank you!', 2, ''],
        ['リサ さん です。', 'Ms. Lisa.', 2, 'Using さん for a friend is fine here.']]],
      ['end', '少々[しょうしょう] お待[ま]ち ください。 ここ に いて ください ね。', 'Please wait a moment. Stay right here, OK?']
    ]
  },
  {
    id: 'temple-visit', level: 4, icon: '⛩️', npc: 'Monk', avatar: '🧘',
    title: 'Temple Rules', scene: 'At a quiet temple in Kyoto, you want to know what\'s allowed.',
    goal: 'Ask permission with ～てもいいですか and respect the rules.',
    script: [
      ['u', [
        ['すみません、 写真[しゃしん] を 撮[と]って も いい です か。', 'Excuse me, may I take photos?', 2, ''],
        ['写真[しゃしん] を 撮[と]って は いけません か。', 'Mustn\'t I take photos?', 1, 'Ask positively: 撮ってもいいですか.']]],
      ['n', 'お庭[にわ] は いい です よ。 でも、 本堂[ほんどう] の 中[なか] は 撮影[さつえい] 禁止[きんし] です。', 'The garden is fine. But no photos inside the main hall.'],
      ['u', [
        ['わかりました。 中[なか] に 入[はい]って も いい です か。', 'I see. May I go inside?', 2, ''],
        ['本堂[ほんどう] で 撮[と]って も いい です ね。', 'So I can take photos in the hall.', 0, 'No — 禁止 means prohibited!']]],
      ['n', 'はい、 どうぞ。 靴[くつ] を 脱[ぬ]いで ください。', 'Yes, please. Please take off your shoes.'],
      ['u', [
        ['はい。 靴[くつ] は ここ に 置[お]いて も いい です か。', 'OK. May I leave my shoes here?', 2, ''],
        ['靴[くつ] を 脱[ぬ]がなくても いい です か。', 'Do I not have to take them off?', 0, 'He just asked you to!']]],
      ['n', 'ええ、 その 棚[たな] に どうぞ。', 'Yes, on that shelf.'],
      ['u', [
        ['あの、 座禅[ざぜん] を 体験[たいけん] して も いい です か。', 'Um, may I try zazen meditation?', 2, '', 'もちろん。 10時[じゅうじ] から です。|Of course. It starts at 10.'],
        ['ありがとう ございます。', 'Thank you.', 2, '']]],
      ['end', 'どうぞ、 ゆっくり して ください。', 'Please take your time.']
    ]
  },
  {
    id: 'day-plan', level: 4, icon: '🗼', npc: 'Ken',
    title: 'Plan the Perfect Day', scene: 'Ken asks about your plan for tomorrow in Tokyo.',
    goal: 'Explain a sequence of activities with ～て and ～てから.',
    script: [
      ['n', '明日[あした] は 何[なに] を する？', 'What are you doing tomorrow?'],
      ['u', [
        ['まず 築地[つきじ] で 朝[あさ]ごはん を 食[た]べて、 それから 浅草[あさくさ] に 行[い]きます。', 'First breakfast at Tsukiji, then Asakusa.', 2, 'Great chaining with て.'],
        ['築地[つきじ] で 朝[あさ]ごはん を 食[た]べます、 浅草[あさくさ] に 行[い]きます。', 'I eat breakfast at Tsukiji, I go to Asakusa.', 1, 'Link them: 食べて、行きます.']]],
      ['n', 'いい ね。 浅草[あさくさ] の 後[あと] は？', 'Nice. And after Asakusa?'],
      ['u', [
        ['スカイツリー に 登[のぼ]って から、 秋葉原[あきはばら] で 買[か]い物[もの] を します。', 'After going up the Skytree, I\'ll shop in Akihabara.', 2, ''],
        ['秋葉原[あきはばら] に 行[い]って から、 スカイツリー に 登[のぼ]ります。', 'After Akihabara, I\'ll go up the Skytree.', 2, '']]],
      ['n', '夜[よる] は 新宿[しんじゅく] で 飲[の]まない？', 'Want to go drinking in Shinjuku at night?'],
      ['u', [
        ['いい ね！ 何時[なんじ] に どこ で 会[あ]う？', 'Sure! When and where shall we meet?', 2, 'Casual with a friend — perfect.'],
        ['すみません、 夜[よる] は ちょっと…', 'Sorry, the night is a bit…', 2, 'Polite refusal.', 'そっか。 また 今度[こんど] ね。|I see. Next time then.', 'bye']]],
      ['n', '7時[しちじ] に 新宿[しんじゅく] 駅[えき] の 東口[ひがしぐち] は？', '7 o\'clock at Shinjuku Station East Exit?'],
      ['u', [
        ['東口[ひがしぐち] だね。 オッケー！', 'East Exit. OK!', 2, ''],
        ['西口[にしぐち] で いい？', 'Is the West Exit OK?', 2, '', 'うん、 いい よ。|Sure.']]],
      ['label', 'bye'],
      ['end', 'じゃあ、 楽[たの]しんで ね！', 'Have fun!']
    ]
  },
  {
    id: 'city-office', level: 4, icon: '🏛️', npc: 'Clerk',
    title: 'City Hall Paperwork', scene: 'You just moved. You\'re at the ward office to register your new address.',
    goal: 'Understand what you must and needn\'t do.',
    script: [
      ['n', '本日[ほんじつ] は どの よう な ご用件[ようけん] でしょう か。', 'How can I help you today?'],
      ['u', [
        ['引[ひ]っ越[こ]し の 届[とど]け を 出[だ]したい ん です が。', 'I\'d like to file a moving notice.', 2, ''],
        ['引[ひ]っ越[こ]し しました。', 'I moved.', 2, 'Simple — works fine.']]],
      ['n', '在留[ざいりゅう] カード は お持[も]ち です か。', 'Do you have your residence card?'],
      ['u', [
        ['はい、 これ です。', 'Yes, here it is.', 2, ''],
        ['いいえ、 うち に あります。', 'No, it\'s at home.', 1, 'You must always carry it!', 'それ は 困[こま]ります ね。 いつも 持[も]って いなければ なりません よ。|That\'s a problem. You must always carry it.']]],
      ['n', 'この 用紙[ようし] に 記入[きにゅう] して ください。', 'Please fill in this form.'],
      ['u', [
        ['英語[えいご] で 書[か]いて も いい です か。', 'May I write in English?', 2, '', '名前[なまえ] は ローマ字[じ] で いい です が、 住所[じゅうしょ] は 日本語[にほんご] で おねがいします。|Name in roman letters is OK, but the address in Japanese please.'],
        ['はんこ が なければ なりません か。', 'Must I have a hanko (seal)?', 2, '', 'いいえ、 サイン で いい です。|No, a signature is fine.']]],
      ['u', [
        ['写真[しゃしん] も 出[だ]さなければ なりません か。', 'Do I also have to submit a photo?', 2, '', 'いいえ、 写真[しゃしん] は 出[だ]さなくても いい です。|No, you don\'t need a photo.'],
        ['わかりました。', 'I understand.', 2, '']]],
      ['end', 'では、 番号[ばんごう] で お呼[よ]び します ので、 お待[ま]ち ください。', 'We\'ll call your number, so please wait.']
    ]
  },
  {
    id: 'clinic', level: 4, icon: '🩺', npc: 'Doctor',
    title: 'At the Clinic', scene: 'You\'ve felt awful since yesterday. Time to see a doctor.',
    goal: 'Explain your symptoms and understand the instructions.',
    script: [
      ['n', '今日[きょう] は どう しました か。', 'What brings you in today?'],
      ['u', [
        ['昨日[きのう] から のど が 痛[いた]くて、 熱[ねつ] が あります。', 'Since yesterday my throat hurts and I have a fever.', 2, ''],
        ['のど を 痛[いた]い です。', 'Throat (object) hurts.', 1, 'Use が: のどが痛いです.'],
        ['元気[げんき] です。', 'I\'m fine.', 0, 'Then why are you here?']]],
      ['n', '熱[ねつ] は 何度[なんど] です か。', 'What\'s your temperature?'],
      ['u', [
        ['38度[さんじゅうはちど] です。', '38 degrees.', 2, ''],
        ['わかりません。 測[はか]りません でした。', 'I don\'t know. I didn\'t measure it.', 2, '', 'じゃあ、 今[いま] 測[はか]りましょう。 … 38度[さんじゅうはちど] です ね。|Let\'s measure now. … 38 degrees.']]],
      ['n', 'せき は 出[で]ます か。 アレルギー は ありません か。', 'Do you have a cough? Any allergies?'],
      ['u', [
        ['少[すこ]し せき が 出[で]ます。 アレルギー は ありません。', 'A slight cough. No allergies.', 2, ''],
        ['ペニシリン の アレルギー が あります。', 'I\'m allergic to penicillin.', 2, 'Important to say!']]],
      ['n', '風邪[かぜ] です ね。 この 薬[くすり] を 一日[いちにち] 三回[さんかい]、 食後[しょくご] に 飲[の]んで ください。', 'It\'s a cold. Take this medicine three times a day after meals.'],
      ['u', [
        ['会社[かいしゃ] に 行[い]って も いい です か。', 'May I go to work?', 2, '', '二日[ふつか] ぐらい 休[やす]んで ください。|Please rest for about two days.'],
        ['一日[いちにち] 三回[さんかい] です ね。 わかりました。', 'Three times a day. Understood.', 2, '']]],
      ['end', 'お大事[だいじ] に。', 'Take care of yourself. (said to sick people)']
    ]
  },
  {
    id: 'friend-chat', level: 4, icon: '💬', npc: 'Mika', avatar: '👧',
    title: 'Casual Chat', scene: 'Your friend Mika messages you. Friends talk casually — no です/ます!',
    goal: 'Keep it casual and make plans.',
    script: [
      ['n', 'おつかれ～！ 今[いま] 何[なに] してる？', 'Hey! What are you up to?'],
      ['u', [
        ['家[いえ] で ゲーム してる よ。', 'Playing games at home.', 2, 'Natural casual style.'],
        ['家[いえ] で ゲーム を して おります。', 'I am humbly playing games at home.', 1, 'Way too formal for a friend!'],
        ['ゲーム です か。', 'Is it a game?', 0, '']]],
      ['n', '週末[しゅうまつ]、 ひま？', 'Free this weekend?'],
      ['u', [
        ['うん、 ひま だよ。 何[なに] する？', 'Yeah, free. What should we do?', 2, ''],
        ['ううん、 土曜日[どようび] は バイト。 日曜日[にちようび] なら ひま。', 'Nope, Saturday I work. Sunday I\'m free.', 2, 'Natural casual answer.']]],
      ['n', '新[あたら]しい ラーメン屋[や]、 行[い]かない？ めっちゃ おいしい らしい よ。', 'Wanna go to the new ramen place? Apparently it\'s super good.'],
      ['u', [
        ['マジ で？ 行[い]く 行[い]く！', 'Seriously? I\'m in!', 2, ''],
        ['はい、 行[い]きましょう。', 'Yes, let\'s go (polite).', 1, 'Fine, but polite sounds distant between friends.']]],
      ['n', '何時[なんじ] が いい？', 'What time works?'],
      ['u', [
        ['12時[じゅうにじ] は？ 駅[えき] で 会[あ]おう。', 'How about 12? Let\'s meet at the station.', 2, ''],
        ['12時[じゅうにじ] で お願[ねが]い いたします。', '12 o\'clock, if you please (very formal).', 1, 'Haha — too stiff!']]],
      ['end', 'オッケー！ じゃあ ね～', 'OK! See ya~']
    ]
  },
  {
    id: 'theme-park', level: 4, icon: '🎢', npc: 'Yui',
    title: 'Theme-Park Day', scene: 'You and Yui are at an amusement park. Lines are long and rules are everywhere.',
    goal: 'Make plans, read signs and stay casual.',
    script: [
      ['n', 'どれ から 乗[の]る？', 'Which one should we ride first?'],
      ['u', [
        ['あの ジェットコースター に 乗[の]ろう！', 'Let\'s ride that roller coaster!', 2, '乗ろう = casual "let\'s ride".'],
        ['あれ に 乗[の]らない？', 'Shall we ride that?', 2, '']]],
      ['n', '待[ま]ち 時間[じかん]、 90分[きゅうじゅっぷん] だって…', 'The wait is 90 minutes…'],
      ['u', [
        ['じゃあ、 先[さき] に ご飯[はん] を 食[た]べて から 並[なら]ぼう。', 'Then let\'s eat first and line up after.', 2, ''],
        ['大丈夫[だいじょうぶ]。 並[なら]んで いる 間[あいだ] に 話[はな]そう。', 'It\'s fine. Let\'s chat while we wait.', 2, '']]],
      ['n', 'あ、 ここ で 食[た]べて も いい の かな？', 'Oh, I wonder if we can eat here?'],
      ['u', [
        ['あそこ に 「飲食[いんしょく] 禁止[きんし]」 って 書[か]いて ある よ。', 'There\'s a "no eating" sign over there.', 2, ''],
        ['いい よ。 食[た]べて は いけない。', 'Sure. We mustn\'t eat.', 0, 'Contradiction!']]],
      ['n', 'そっか。 じゃあ、 レストラン に 行[い]こう。', 'I see. Let\'s go to a restaurant then.'],
      ['u', [
        ['うん！ 楽[たの]しみ だね。', 'Yeah! This is fun.', 2, ''],
        ['はい、 承知[しょうち] いたしました。', 'Yes, understood (very formal).', 1, 'Haha, so formal!']]],
      ['end', '今日[きょう] は 一日[いちにち] 遊[あそ]ぼう ね！', 'Let\'s have fun all day!']
    ]
  }
]);
