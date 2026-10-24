/* Phrasebook: ready-to-use phrases by situation. [japanese, english, note] */
window.JT = window.JT || {};
JT.PHRASEBOOK = [
  {
    cat: 'Greetings & Basics', icon: '👋', items: [
      ['おはよう ございます。', 'Good morning.'],
      ['こんにちは。', 'Hello. / Good afternoon.'],
      ['こんばんは。', 'Good evening.'],
      ['ありがとう ございます。', 'Thank you very much.'],
      ['すみません。', 'Excuse me. / Sorry.', 'Works for getting attention, apologizing and thanking.'],
      ['ごめんなさい。', 'I\'m sorry.', 'More personal apology — friends and family.'],
      ['はじめまして。 よろしく お願[ねが]い します。', 'Nice to meet you.'],
      ['お元気[げんき] です か。', 'How have you been?', 'For people you haven\'t seen in a while.'],
      ['お先[さき] に 失礼[しつれい] します。', 'Excuse me for leaving first.'],
      ['お疲[つか]れ様[さま] です。', 'Thanks for your hard work. / Hi (at work).'],
      ['いって きます。 / いって らっしゃい。', 'I\'m off. / See you later.'],
      ['ただいま。 / おかえり なさい。', 'I\'m home. / Welcome back.'],
      ['おやすみ なさい。', 'Good night.'],
      ['また 明日[あした]。', 'See you tomorrow.']
    ]
  },
  {
    cat: 'Survival & Help', icon: '🆘', items: [
      ['わかりません。', 'I don\'t understand.'],
      ['もう 一度[いちど] お願[ねが]い します。', 'Once more, please.'],
      ['ゆっくり 話[はな]して ください。', 'Please speak slowly.'],
      ['英語[えいご] を 話[はな]せます か。', 'Can you speak English?'],
      ['日本語[にほんご] は 少[すこ]し だけ です。', 'I only speak a little Japanese.'],
      ['書[か]いて いただけません か。', 'Could you write it down?'],
      ['これ は 日本語[にほんご] で 何[なん] と 言[い]います か。', 'What is this called in Japanese?'],
      ['〇〇 は どういう 意味[いみ] です か。', 'What does 〇〇 mean?'],
      ['ちょっと 待[ま]って ください。', 'Please wait a moment.'],
      ['大丈夫[だいじょうぶ] です。', 'I\'m OK. / No thank you.'],
      ['助[たす]けて！', 'Help!'],
      ['道[みち] に 迷[まよ]いました。', 'I\'m lost.']
    ]
  },
  {
    cat: 'Restaurant & Food', icon: '🍜', items: [
      ['二人[ふたり] です。', 'Two people, please.'],
      ['メニュー を お願[ねが]い します。', 'The menu, please.'],
      ['英語[えいご] の メニュー は あります か。', 'Do you have an English menu?'],
      ['おすすめ は 何[なん] です か。', 'What do you recommend?'],
      ['これ を ください。', 'This one, please.'],
      ['同[おな]じ もの を お願[ねが]い します。', 'The same, please.'],
      ['とりあえず 生[なま] で。', 'A draft beer to start, please.'],
      ['お水[みず] を ください。', 'Water, please.'],
      ['肉[にく] が 食[た]べられません。', 'I can\'t eat meat.'],
      ['えび の アレルギー が あります。', 'I\'m allergic to shrimp.'],
      ['いただきます。', '(said before eating)'],
      ['ごちそうさま でした。', 'Thank you for the meal.'],
      ['お会計[かいけい] お願[ねが]い します。', 'The check, please.'],
      ['別々[べつべつ] で お願[ねが]い します。', 'Separate checks, please.'],
      ['カード で 払[はら]えます か。', 'Can I pay by card?']
    ]
  },
  {
    cat: 'Shopping', icon: '🛍️', items: [
      ['これ は いくら です か。', 'How much is this?'],
      ['見[み]て いる だけ です。', 'I\'m just looking.'],
      ['試着[しちゃく] して も いい です か。', 'May I try this on?'],
      ['もう 少[すこ]し 大[おお]きい の は あります か。', 'Do you have a slightly bigger one?'],
      ['ほか の 色[いろ] は あります か。', 'Do you have other colors?'],
      ['これ に します。', 'I\'ll take this one.'],
      ['袋[ふくろ] は 大丈夫[だいじょうぶ] です。', 'I don\'t need a bag.'],
      ['免税[めんぜい] で お願[ねが]い します。', 'Tax-free, please.'],
      ['プレゼント 用[よう] に 包[つつ]んで いただけます か。', 'Could you gift-wrap it?'],
      ['レシート を ください。', 'A receipt, please.'],
      ['ちょっと 考[かんが]えます。', 'I\'ll think about it.']
    ]
  },
  {
    cat: 'Trains & Transport', icon: '🚃', items: [
      ['〇〇 まで いくら です か。', 'How much is it to 〇〇?'],
      ['〇〇 行[ゆ]き は 何番線[なんばんせん] です か。', 'Which platform for 〇〇?'],
      ['この 電車[でんしゃ] は 〇〇 に 止[と]まります か。', 'Does this train stop at 〇〇?'],
      ['どこ で 乗[の]り換[か]えます か。', 'Where do I transfer?'],
      ['次[つぎ] は 何[なに] 駅[えき] です か。', 'What\'s the next station?'],
      ['終電[しゅうでん] は 何時[なんじ] です か。', 'What time is the last train?'],
      ['〇〇 まで お願[ねが]い します。', 'To 〇〇, please. (taxi)'],
      ['ここ で 止[と]めて ください。', 'Please stop here.'],
      ['IC[アイシー] カード は 使[つか]えます か。', 'Can I use an IC card?'],
      ['切符[きっぷ] を なくしました。', 'I lost my ticket.']
    ]
  },
  {
    cat: 'Hotel', icon: '🏨', items: [
      ['予約[よやく] した 〇〇 です。', 'I have a reservation under 〇〇.'],
      ['チェックイン を お願[ねが]い します。', 'I\'d like to check in.'],
      ['荷物[にもつ] を 預[あず]かって いただけます か。', 'Could you keep my luggage?'],
      ['朝食[ちょうしょく] は 何時[なんじ] から です か。', 'From what time is breakfast?'],
      ['ワイファイ の パスワード を 教[おし]えて ください。', 'Please tell me the Wi-Fi password.'],
      ['部屋[へや] の エアコン が つきません。', 'The air conditioner in my room won\'t turn on.'],
      ['タオル を もう 一枚[いちまい] ください。', 'One more towel, please.'],
      ['チェックアウト は 何時[なんじ] です か。', 'What time is check-out?'],
      ['タクシー を 呼[よ]んで いただけます か。', 'Could you call a taxi for me?']
    ]
  },
  {
    cat: 'Directions', icon: '🗺️', items: [
      ['〇〇 は どこ です か。', 'Where is 〇〇?'],
      ['駅[えき] まで どう 行[い]けば いい です か。', 'How do I get to the station?'],
      ['歩[ある]いて 何分[なんぷん] ぐらい です か。', 'About how many minutes on foot?'],
      ['この 近[ちか]く に コンビニ は あります か。', 'Is there a convenience store nearby?'],
      ['地図[ちず] で 教[おし]えて いただけます か。', 'Could you show me on the map?'],
      ['まっすぐ 行[い]って、 右[みぎ] に 曲[ま]がって ください。', 'Go straight, then turn right.'],
      ['信号[しんごう] を 渡[わた]って ください。', 'Cross at the traffic light.'],
      ['交番[こうばん] は どこ です か。', 'Where is the police box?']
    ]
  },
  {
    cat: 'Health & Emergency', icon: '💊', items: [
      ['気分[きぶん] が 悪[わる]い です。', 'I feel sick.'],
      ['頭[あたま] が 痛[いた]い です。', 'I have a headache.'],
      ['熱[ねつ] が あります。', 'I have a fever.'],
      ['お腹[なか] が 痛[いた]い です。', 'I have a stomachache.'],
      ['病院[びょういん] に 行[い]きたい です。', 'I want to go to a hospital.'],
      ['救急車[きゅうきゅうしゃ] を 呼[よ]んで ください！', 'Please call an ambulance!', 'Emergency number: 119.'],
      ['警察[けいさつ] を 呼[よ]んで ください！', 'Please call the police!', 'Police: 110.'],
      ['財布[さいふ] を なくしました。', 'I lost my wallet.'],
      ['この 薬[くすり] は 一日[いちにち] 何回[なんかい] 飲[の]みます か。', 'How many times a day do I take this medicine?'],
      ['地震[じしん] の とき、 どこ に 避難[ひなん] すれ ば いい です か。', 'Where should I evacuate in an earthquake?']
    ]
  },
  {
    cat: 'Small Talk', icon: '💬', items: [
      ['いい 天気[てんき] です ね。', 'Nice weather, isn\'t it?'],
      ['今日[きょう] は 暑[あつ]い です ね。', 'It\'s hot today, isn\'t it?'],
      ['お仕事[しごと] は 何[なん] です か。', 'What do you do?'],
      ['趣味[しゅみ] は 何[なん] です か。', 'What are your hobbies?'],
      ['日本[にほん] に 来[き]て 一年[いちねん] に なります。', 'It\'s been a year since I came to Japan.'],
      ['日本[にほん] の 食[た]べ物[もの] が 大好[だいす]き です。', 'I love Japanese food.'],
      ['へえ、 そう なん です か。', 'Oh, really?'],
      ['なるほど。', 'I see. / That makes sense.'],
      ['いえいえ、 まだまだ です。', 'Oh no, I still have a long way to go.', 'The modest reply to compliments.'],
      ['週末[しゅうまつ] は 何[なに] を しました か。', 'What did you do on the weekend?']
    ]
  },
  {
    cat: 'Work & Business', icon: '💼', items: [
      ['いつも お世話[せわ] に なって おります。', 'Thank you for your continued support.', 'Standard opening for business calls and emails.'],
      ['〇〇 と 申[もう]します。', 'My name is 〇〇. (humble)'],
      ['少々[しょうしょう] お待[ま]ち ください。', 'Please wait a moment.'],
      ['確認[かくにん] して、 折[お]り返[かえ]し ご連絡[れんらく] いたします。', 'I\'ll check and get back to you.'],
      ['お忙[いそが]しい ところ すみません。', 'Sorry to bother you when you\'re busy.'],
      ['承知[しょうち] いたしました。', 'Certainly. / Understood.'],
      ['申[もう]し訳[わけ] ございません。', 'I\'m terribly sorry.'],
      ['ご検討[けんとう] の ほど、 よろしく お願[ねが]い いたします。', 'Thank you for your consideration.'],
      ['お先[さき] に 失礼[しつれい] いたします。', 'Excuse me for leaving before you.'],
      ['お疲[つか]れ様[さま] でした。', 'Good work today.']
    ]
  },
  {
    cat: 'Home & Neighbors', icon: '🏠', items: [
      ['隣[となり] に 引[ひ]っ越[こ]して きた 〇〇 です。', 'I\'m 〇〇, I just moved in next door.'],
      ['つまらない もの です が、 どうぞ。', 'It\'s just a small thing, but please accept it.'],
      ['ごみ の 日[ひ] は いつ です か。', 'When is garbage day?'],
      ['お邪魔[じゃま] します。', 'Excuse me for intruding. (entering a home)'],
      ['お邪魔[じゃま] しました。', 'Thank you for having me. (leaving a home)'],
      ['お世話[せわ] に なります。', 'Thank you for taking care of me.'],
      ['何[なに] か 手伝[てつだ]いましょう か。', 'Can I help with anything?']
    ]
  },
  {
    cat: 'Friends & Social', icon: '🎉', items: [
      ['今度[こんど]、 ご飯[はん] に 行[い]きません か。', 'Shall we go for a meal sometime?'],
      ['LINE[ライン]、 交換[こうかん] しません か。', 'Shall we exchange LINE?'],
      ['乾杯[かんぱい]！', 'Cheers!'],
      ['楽[たの]しかった！ また 遊[あそ]ぼう ね。', 'That was fun! Let\'s hang out again.'],
      ['誕生日[たんじょうび] おめでとう！', 'Happy birthday!'],
      ['頑張[がんば]って ね！', 'Good luck!'],
      ['お大事[だいじ] に。', 'Get well soon.'],
      ['すごい！', 'Amazing!'],
      ['マジ で？', 'Seriously?', 'Casual — friends only.'],
      ['ごめん、 遅[おく]れる！', 'Sorry, I\'ll be late!']
    ]
  }
];
