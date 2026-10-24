/* Level 2 role-plays. Option: [japanese, english, score 0|1|2, feedback, 'npc reply|english', goto] */
JT.addConvos([
  {
    id: 'routine-chat', level: 2, icon: '⏰', npc: 'Yui',
    title: 'Morning Person?', scene: 'Your friend Yui is curious about your daily routine.',
    goal: 'Describe your day with ます-verbs and times.',
    script: [
      ['n', '毎朝[まいあさ] 何時[なんじ] に 起[お]きます か。', 'What time do you get up every morning?'],
      ['u', [
        ['6時[ろくじ] 半[はん] に 起[お]きます。', 'I get up at 6:30.', 2, ''],
        ['6時[ろくじ] を 起[お]きます。', '6 o\'clock get up.', 1, 'Use に with clock times: 6時に.'],
        ['毎朝[まいあさ] に 起[お]きます。', 'I get up at every morning.', 0, 'Answer with a time!']]],
      ['n', '早[はや]い です ね！ 朝[あさ]ごはん は 食[た]べます か。', 'That\'s early! Do you eat breakfast?'],
      ['u', [
        ['はい、 パン を 食[た]べます。 コーヒー も 飲[の]みます。', 'Yes, I eat bread. I drink coffee too.', 2, 'Nice use of も.'],
        ['いいえ、 食[た]べません。', 'No, I don\'t.', 2, ''],
        ['はい、 朝[あさ]ごはん です。', 'Yes, it\'s breakfast.', 1, 'Use the verb: 食べます.']]],
      ['n', '会社[かいしゃ] は 何時[なんじ] から です か。', 'What time does work start?'],
      ['u', [
        ['9時[くじ] から です。 6時[ろくじ] まで 働[はたら]きます。', 'From 9. I work until 6.', 2, ''],
        ['9時[きゅうじ] から です。', 'From "kyū-ji".', 1, '9 o\'clock is くじ.']]],
      ['n', '夜[よる] は 何[なに] を します か。', 'What do you do in the evenings?'],
      ['u', [
        ['日本語[にほんご] を 勉強[べんきょう] します。 それから テレビ を 見[み]ます。', 'I study Japanese. Then I watch TV.', 2, 'Great use of それから.'],
        ['11時[じゅういちじ] に 寝[ね]ます。', 'I go to bed at 11.', 2, ''],
        ['夜[よる] です。', 'It\'s night.', 0, '']]],
      ['end', 'えらい です ね！ わたし も 頑張[がんば]ります。', 'Impressive! I\'ll do my best too.']
    ]
  },
  {
    id: 'commute', level: 2, icon: '🚲', npc: 'Sato',
    title: 'How Do You Get Here?', scene: 'Sato, a new coworker, asks about your commute and weekend trip.',
    goal: 'Talk about transport and destinations.',
    script: [
      ['n', '何[なに] で 会社[かいしゃ] に 来[き]ます か。', 'How do you get to work?'],
      ['u', [
        ['電車[でんしゃ] で 来[き]ます。', 'I come by train.', 2, ''],
        ['歩[ある]いて 来[き]ます。', 'I walk here.', 2, 'No で with 歩いて — perfect.'],
        ['電車[でんしゃ] を 来[き]ます。', 'Train (object) come.', 1, 'Means of transport takes で.']]],
      ['n', '何分[なんぷん] ぐらい です か。', 'About how many minutes?'],
      ['u', [
        ['30分[さんじゅっぷん] ぐらい です。', 'About 30 minutes.', 2, ''],
        ['3時[さんじ] です。', 'It\'s 3 o\'clock.', 0, 'He asked how long.']]],
      ['n', 'そう です か。 週末[しゅうまつ] は どこ か へ 行[い]きます か。', 'I see. Are you going anywhere this weekend?'],
      ['u', [
        ['はい、 京都[きょうと] へ 行[い]きます。', 'Yes, I\'m going to Kyoto.', 2, ''],
        ['いいえ、 どこ も 行[い]きません。', 'No, I\'m not going anywhere.', 2, 'どこも + negative = nowhere.', 'そう です か。 ゆっくり 休[やす]んで ください。|I see. Have a good rest.', 'rest'],
        ['はい、 京都[きょうと] で 行[い]きます。', 'Yes, I go at Kyoto.', 1, 'Destination takes へ or に.']]],
      ['n', 'いい です ね！ 新幹線[しんかんせん] で 行[い]きます か。', 'Nice! Are you going by shinkansen?'],
      ['u', [
        ['はい、 新幹線[しんかんせん] で 行[い]きます。', 'Yes, by shinkansen.', 2, ''],
        ['いいえ、 バス で 行[い]きます。 安[やす]い です から。', 'No, by bus. Because it\'s cheap.', 2, 'Night buses are a budget favorite.']]],
      ['label', 'rest'],
      ['end', 'いい 週末[しゅうまつ] を！', 'Have a nice weekend!']
    ]
  },
  {
    id: 'weekend-report', level: 2, icon: '🎤', npc: 'Sato',
    title: 'Monday Morning', scene: 'It\'s Monday. Your coworker asks the classic question.',
    goal: 'Talk about what you did — and didn\'t do — in the past tense.',
    script: [
      ['n', 'おはよう ございます。 週末[しゅうまつ] は 何[なに] を しました か。', 'Good morning. What did you do on the weekend?'],
      ['u', [
        ['友[とも]だち と カラオケ に 行[い]きました。', 'I went to karaoke with friends.', 2, ''],
        ['友[とも]だち と カラオケ に 行[い]きます。', 'I go to karaoke with friends.', 1, 'It\'s in the past — use ました.'],
        ['週末[しゅうまつ] でした。', 'It was the weekend.', 0, '']]],
      ['n', 'いい です ね！ 何[なに] を 歌[うた]いました か。', 'Nice! What did you sing?'],
      ['u', [
        ['日本[にほん] の 歌[うた] を 歌[うた]いました。', 'I sang Japanese songs.', 2, ''],
        ['えっと… 英語[えいご] の 歌[うた] です。', 'Um… English songs.', 2, '']]],
      ['n', '日曜日[にちようび] は？', 'And Sunday?'],
      ['u', [
        ['どこ も 行[い]きません でした。 うち で 休[やす]みました。', 'I didn\'t go anywhere. I rested at home.', 2, ''],
        ['何[なに] も しません でした。', 'I didn\'t do anything.', 2, ''],
        ['日曜日[にちようび] に 行[い]きます。', 'I\'ll go on Sunday.', 0, 'Sunday has passed!']]],
      ['n', 'わたし も です。 昨日[きのう] は ずっと 寝[ね]て いました。', 'Me too. I slept all day yesterday.'],
      ['u', [
        ['へえ、 そう です か。', 'Oh, really.', 2, ''],
        ['いい です ね。', 'Sounds nice.', 2, ''],
        ['いただきます。', '(before eating)', 0, '']]],
      ['end', 'さあ、 今週[こんしゅう] も 頑張[がんば]りましょう！', 'Well, let\'s do our best this week too!']
    ]
  },
  {
    id: 'bookstore', level: 2, icon: '📚', npc: 'Clerk',
    title: 'At the Bookstore', scene: 'You want a beginner Japanese book and a magazine.',
    goal: 'Ask for what you want and pay.',
    script: [
      ['n', 'いらっしゃいませ。', 'Welcome.'],
      ['u', [
        ['すみません、 日本語[にほんご] の 教科書[きょうかしょ] は どこ に あります か。', 'Excuse me, where are the Japanese textbooks?', 2, ''],
        ['日本語[にほんご] の 本[ほん] を 読[よ]みます か。', 'Do you read Japanese books?', 1, 'She works here — ask where they are.']]],
      ['n', '2階[にかい] に あります。 エスカレーター で どうぞ。', 'They\'re on the 2nd floor. Take the escalator.'],
      ['n', '… こちら は 初心者[しょしんしゃ] 向[む]け です よ。', '… This one is for beginners.'],
      ['u', [
        ['いい です ね。 これ を 買[か]います。', 'Nice. I\'ll buy this.', 2, ''],
        ['ほか に も あります か。', 'Are there others too?', 2, '', 'はい、 こちら も 人気[にんき] です。|Yes, this one is popular too.'],
        ['これ は 何[なに] を 読[よ]みます か。', 'This reads what?', 0, '']]],
      ['u', [
        ['あと、 雑誌[ざっし] も 買[か]いたい です。', 'Also, I want to buy a magazine.', 2, ''],
        ['以上[いじょう] です。', 'That\'s all.', 1, 'You wanted a magazine too!']]],
      ['n', '雑誌[ざっし] は 入口[いりぐち] の 近[ちか]く に あります よ。', 'Magazines are near the entrance.'],
      ['n', '全部[ぜんぶ] で 二千[にせん] 五百[ごひゃく] 円[えん] です。 カバー を おかけ します か。', 'That\'s 2,500 yen. Shall I put a cover on the book?'],
      ['u', [
        ['はい、 おねがいします。', 'Yes, please.', 2, 'Japanese bookstores wrap books in free paper covers — so no one sees what you read!'],
        ['大丈夫[だいじょうぶ] です。', 'No, thanks.', 2, '']]],
      ['end', 'ありがとう ございました！', 'Thank you very much!']
    ]
  },
  {
    id: 'invite-friend', level: 2, icon: '🎬', npc: 'Yui',
    title: 'Movie Night?', scene: 'You want to invite Yui to a movie this weekend.',
    goal: 'Invite, negotiate a day and agree on a time and place.',
    script: [
      ['u', [
        ['ゆい さん、 土曜日[どようび] に いっしょ に 映画[えいが] を 見[み]ません か。', 'Yui, would you like to see a movie together on Saturday?', 2, 'A perfect invitation.'],
        ['ゆい さん、 映画[えいが] を 見[み]ます か。', 'Yui, do you watch movies?', 1, 'That\'s a question, not an invitation. Try ～ませんか.'],
        ['映画[えいが] を 見[み]ましょう か。', 'Shall I watch a movie?', 1, '']]],
      ['n', 'あ、 土曜日[どようび] は ちょっと… バイト が あります。', 'Ah, Saturday is a bit… I have my part-time job.'],
      ['u', [
        ['そう です か。 じゃあ、 日曜日[にちようび] は どう です か。', 'I see. Then how about Sunday?', 2, ''],
        ['どうして です か。', 'Why?', 1, 'She already gave a reason — pushing is awkward.', 'えっと… バイト です。|Um… my part-time job.'],
        ['じゃあ、 いい です。', 'Then never mind.', 1, 'You could offer another day!']]],
      ['n', '日曜日[にちようび] は 大丈夫[だいじょうぶ] です。 ぜひ！', 'Sunday is fine. I\'d love to!'],
      ['u', [
        ['何時[なんじ] に 会[あ]いましょう か。', 'What time shall we meet?', 2, ''],
        ['よかった！ 何[なに] を 見[み]ましょう か。', 'Great! What shall we watch?', 2, '', 'アニメ の 映画[えいが] は どう です か。|How about an anime movie?']]],
      ['n', '2時[にじ] は どう です か。', 'How about 2?'],
      ['u', [
        ['いい です よ。 どこ で 会[あ]いましょう か。', 'Sure. Where shall we meet?', 2, ''],
        ['2時[にじ] まで です か。', 'Until 2?', 0, '']]],
      ['n', '渋谷[しぶや] 駅[えき] の ハチ公[こう] の 前[まえ] で 会[あ]いましょう。', 'Let\'s meet in front of Hachikō at Shibuya Station.'],
      ['u', [
        ['わかりました。 楽[たの]しみ です！', 'OK. I\'m looking forward to it!', 2, ''],
        ['ハチ公[こう] は だれ です か。', 'Who is Hachikō?', 2, 'Hachikō is the famously loyal dog statue — Tokyo\'s favorite meeting spot.', '有名[ゆうめい] な 犬[いぬ] の 像[ぞう] です よ。|A statue of a famous dog.']]],
      ['end', 'じゃあ、 日曜日[にちようび] に！', 'See you on Sunday!']
    ]
  },
  {
    id: 'homestay-room', level: 2, icon: '🛏️', npc: 'Host mother', avatar: '👩‍🦳',
    title: 'Homestay Arrival', scene: 'You arrive at your homestay. Your host mother shows you around.',
    goal: 'Ask where things are with あります / います.',
    script: [
      ['n', 'いらっしゃい！ どうぞ、 上[あ]がって ください。', 'Welcome! Please come in.'],
      ['u', [
        ['おじゃま します。', 'Sorry to intrude. (said when entering someone\'s home)', 2, 'The perfect phrase when entering a Japanese home.'],
        ['ただいま。', 'I\'m home.', 1, 'Sweet — but that\'s for when you live there already!'],
        ['いらっしゃいませ。', 'Welcome (shop).', 0, '']]],
      ['n', 'ここ が あなた の 部屋[へや] です。', 'This is your room.'],
      ['u', [
        ['わあ、 きれい です ね。 ありがとう ございます。', 'Wow, it\'s lovely. Thank you.', 2, ''],
        ['部屋[へや] は どこ です か。', 'Where is the room?', 0, 'You\'re standing in it!']]],
      ['u', [
        ['あの、 トイレ は どこ に あります か。', 'Um, where is the toilet?', 2, ''],
        ['あの、 トイレ は どこ に います か。', 'Um, where is the toilet (living)?', 1, 'Things use あります.']]],
      ['n', '階段[かいだん] の 横[よこ] に あります。 お風呂[ふろ] は 1階[いっかい] です。', 'Next to the stairs. The bath is on the 1st floor.'],
      ['n', 'あ、 うち に は 犬[いぬ] が います。 コロ です。', 'Oh, we have a dog. This is Koro.'],
      ['u', [
        ['かわいい！ コロ、 よろしく ね。', 'So cute! Nice to meet you, Koro.', 2, ''],
        ['犬[いぬ] が あります か。', 'You have a dog (object)?', 1, 'Animals take います.']]],
      ['end', '晩[ばん]ごはん は 7時[しちじ] です よ。 ゆっくり して ね。', 'Dinner is at 7. Make yourself at home.']
    ]
  },
  {
    id: 'gym-signup', level: 2, icon: '🏋️', npc: 'Gym staff', avatar: '🧑‍🏫',
    title: 'Joining a Gym', scene: 'You visit a gym to sign up. The staff asks about your habits.',
    goal: 'Talk about how often you do things.',
    script: [
      ['n', 'いらっしゃいませ。 ご入会[にゅうかい] です か。', 'Welcome. Are you joining?'],
      ['u', [
        ['はい、 おねがいします。', 'Yes, please.', 2, ''],
        ['はい、 ジム です。', 'Yes, it\'s a gym.', 1, '']]],
      ['n', 'よく 運動[うんどう] します か。', 'Do you exercise often?'],
      ['u', [
        ['いいえ、 あまり しません。', 'No, not much.', 2, 'あまり + negative.'],
        ['ときどき 走[はし]ります。', 'I run sometimes.', 2, ''],
        ['あまり します。', 'I do not-much.', 0, 'あまり needs a negative verb.']]],
      ['n', '週[しゅう] に 何回[なんかい] ぐらい 来[き]ます か。', 'About how many times a week will you come?'],
      ['u', [
        ['週[しゅう] に 二回[にかい] ぐらい です。', 'About twice a week.', 2, ''],
        ['毎日[まいにち] 来[き]ます！', 'Every day!', 2, 'Ambitious!'],
        ['二時[にじ] です。', 'At 2 o\'clock.', 0, 'How many TIMES — 回.']]],
      ['n', 'じゃあ、 この プラン が いい です ね。 月[つき] 八千[はっせん] 円[えん] です。', 'Then this plan is good. 8,000 yen a month.'],
      ['u', [
        ['わかりました。 それ に します。', 'OK. I\'ll take that.', 2, ''],
        ['ちょっと 高[たか]い です ね…', 'It\'s a bit expensive…', 2, 'Polite hesitation.', 'じゃあ、 こちら は 五千[ごせん] 円[えん] です。 平日[へいじつ] だけ です。|Then this one is 5,000 yen. Weekdays only.']]],
      ['end', 'ありがとう ございます。 頑張[がんば]りましょう！', 'Thank you. Let\'s work hard together!']
    ]
  },
  {
    id: 'gift-exchange', level: 2, icon: '🎁', npc: 'Mika', avatar: '👧',
    title: 'Birthday Present', scene: 'It\'s your birthday. Your friend Mika has a present for you.',
    goal: 'Receive a gift graciously and talk about gifts.',
    script: [
      ['n', 'お誕生日[たんじょうび] おめでとう！ これ、 プレゼント。', 'Happy birthday! This is a present.'],
      ['u', [
        ['わあ、 ありがとう！ うれしい！', 'Wow, thank you! I\'m so happy!', 2, ''],
        ['どういたしまして。', 'You\'re welcome.', 0, 'That\'s what SHE would say after you thank her.'],
        ['いくら でした か。', 'How much was it?', 0, 'Never ask the price of a gift!']]],
      ['n', '開[あ]けて みて！', 'Open it!'],
      ['u', [
        ['かわいい マフラー！ 大切[たいせつ] に します。', 'What a cute scarf! I\'ll treasure it.', 2, ''],
        ['マフラー です ね。', 'It\'s a scarf.', 1, 'A bit flat — show some joy!']]],
      ['n', '去年[きょねん] は 何[なに] を もらいました か。', 'What did you get last year?'],
      ['u', [
        ['姉[あね] が 時計[とけい] を くれました。', 'My sister gave me a watch.', 2, 'くれました — given to me. Perfect.'],
        ['姉[あね] が 時計[とけい] を あげました。', 'My sister gave (away) a watch.', 1, 'When someone gives to YOU, use くれました.'],
        ['姉[あね] に 時計[とけい] を もらいました。', 'I got a watch from my sister.', 2, 'Also perfect.']]],
      ['n', 'いい です ね。 ミカ の 誕生日[たんじょうび] は 来月[らいげつ] です よ！', 'Nice. My birthday is next month, you know!'],
      ['u', [
        ['じゃあ、 わたし も プレゼント を あげます ね！', 'Then I\'ll give you a present too!', 2, ''],
        ['じゃあ、 プレゼント を くれます ね！', 'Then you\'ll give (me) a present!', 0, 'Mixed up — you will give HER one: あげます.']]],
      ['end', 'やった！ 楽[たの]しみ に して います。', 'Yay! I\'m looking forward to it.']
    ]
  },
  {
    id: 'train-station', level: 2, icon: '🚉', npc: 'Station staff', avatar: '🧑‍✈️',
    title: 'Which Train?', scene: 'Shinjuku Station is a maze. Ask for help getting to Kamakura.',
    goal: 'Find the platform, check transfers and top up your card.',
    script: [
      ['u', [
        ['すみません、 鎌倉[かまくら] に 行[い]きたい ん です が…', 'Excuse me, I\'d like to go to Kamakura…', 2, 'Trailing off with が… is a very natural way to ask for help.'],
        ['鎌倉[かまくら] です。', 'Kamakura.', 1, 'Understandable, but a bit abrupt.']]],
      ['n', '鎌倉[かまくら] です ね。 湘南[しょうなん] 新宿[しんじゅく] ライン が 便利[べんり] です。 3番線[さんばんせん] です。', 'Kamakura. The Shōnan-Shinjuku Line is convenient. Platform 3.'],
      ['u', [
        ['3番線[さんばんせん] です ね。 乗[の]り換[か]え は あります か。', 'Platform 3. Is there a transfer?', 2, ''],
        ['3時[さんじ] です か。', 'At 3 o\'clock?', 0, '番線 = platform.']]],
      ['n', '逗子[ずし] 行[ゆ]き なら、 乗[の]り換[か]え なし です。 大船[おおふな] 行[ゆ]き は 大船[おおふな] で 乗[の]り換[か]え です。', 'If it\'s bound for Zushi, no transfer. If it\'s bound for Ōfuna, change at Ōfuna.'],
      ['u', [
        ['わかりました。 逗子[ずし] 行[ゆ]き に 乗[の]ります。', 'Got it. I\'ll take the one bound for Zushi.', 2, ''],
        ['すみません、 もう 一度[いちど] おねがいします。', 'Sorry, once more please.', 2, '', '逗子[ずし] 行[ゆ]き に 乗[の]って ください。 乗[の]り換[か]え なし です。|Take the one bound for Zushi. No transfer.']]],
      ['u', [
        ['あと、 IC[アイシー] カード に チャージ したい です。', 'Also, I want to top up my IC card.', 2, ''],
        ['ありがとう ございました！', 'Thank you very much!', 2, '', 'あ、 カード の 残高[ざんだか] は 大丈夫[だいじょうぶ] です か。|Oh, is your card balance OK?']]],
      ['n', 'チャージ は あちら の 券売機[けんばいき] で できます よ。', 'You can top up at that ticket machine over there.'],
      ['end', 'お気[き] を つけて。', 'Have a safe trip.']
    ]
  },
  {
    id: 'izakaya-coworkers', level: 2, icon: '🏮', npc: 'Sato',
    title: 'After-Work Izakaya', scene: 'Friday night at an izakaya with coworkers. Sato is in a chatty mood.',
    goal: 'Order, toast and chat about your week.',
    script: [
      ['n', 'お疲[つか]れ様[さま] です！ 何[なに] を 飲[の]みます か。', 'Good work this week! What will you drink?'],
      ['u', [
        ['とりあえず 生[なま]ビール で！', 'Draft beer to start!', 2, 'とりあえず生 — the most Japanese first order there is.'],
        ['ウーロン茶[ちゃ] を おねがいします。', 'Oolong tea, please.', 2, 'Non-drinkers are totally welcome.'],
        ['いただきます。', '(before eating)', 1, 'Save it for when the food arrives!']]],
      ['n', 'じゃあ、 乾杯[かんぱい]！', 'Well then — cheers!'],
      ['u', [
        ['乾杯[かんぱい]！', 'Cheers!', 2, 'Clink glasses — slightly lower than your boss\'s glass!'],
        ['ごちそうさま でした！', 'Thanks for the meal!', 0, 'Too early!']]],
      ['n', '今週[こんしゅう] は 忙[いそが]しかった です ね。', 'This week was busy, huh.'],
      ['u', [
        ['そう です ね。 毎日[まいにち] 9時[くじ] まで 働[はたら]きました。', 'It was. I worked until 9 every day.', 2, ''],
        ['大変[たいへん] でした ね。', 'It was tough, wasn\'t it.', 2, 'Empathy with ね — very natural.']]],
      ['n', '週末[しゅうまつ] は 何[なに] を します か。', 'What are you doing this weekend?'],
      ['u', [
        ['友[とも]だち と 鎌倉[かまくら] に 行[い]きます。', 'I\'m going to Kamakura with a friend.', 2, ''],
        ['何[なに] も しません。 寝[ね]ます！', 'Nothing. I\'ll sleep!', 2, 'Relatable.']]],
      ['n', 'いい です ね。 あ、 もう 11時[じゅういちじ] です ね。', 'Nice. Oh, it\'s already 11.'],
      ['u', [
        ['じゃあ、 お先[さき] に 失礼[しつれい] します。', 'Well, excuse me for leaving first.', 2, 'The polite way to leave before others.'],
        ['終電[しゅうでん] は 何時[なんじ] です か。', 'What time is the last train?', 2, 'Smart question!', '12時[じゅうにじ] ごろ です よ。 まだ 大丈夫[だいじょうぶ]。|Around 12. Still OK.']]],
      ['end', 'お疲[つか]れ様[さま] でした！ また 来週[らいしゅう]。', 'Good work! See you next week.']
    ]
  }
]);
