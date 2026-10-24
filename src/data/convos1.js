/* Level 1 role-plays. Option: [japanese, english, score 0|1|2, feedback, 'npc reply|english', goto] */
JT.addConvos([
  {
    id: 'party-jobs', level: 1, icon: '🍻', npc: 'Sato',
    title: 'What Do You Do?', scene: 'At an izakaya after work, your coworker Sato asks about you and your friend Kim.',
    goal: 'Talk about jobs and who people are.',
    script: [
      ['n', 'お仕事[しごと] は 何[なん] です か。', 'What do you do?'],
      ['u', [
        ['英語[えいご] の 先生[せんせい] です。', 'I\'m an English teacher.', 2, ''],
        ['はい、 仕事[しごと] です。', 'Yes, it\'s a job.', 0, 'Say what your job is.'],
        ['先生[せんせい] さん です。', 'I\'m Mr. Teacher.', 1, 'Don\'t add さん to describe yourself.']]],
      ['n', 'へえ。 あの 人[ひと] は だれ です か。', 'Oh. Who is that person?'],
      ['u', [
        ['キム さん です。 わたし の 友[とも]だち です。', 'That\'s Kim. My friend.', 2, ''],
        ['あれ は キム さん です。', 'That thing is Kim.', 1, 'あれ is for things — for people say あの人.'],
        ['だれ です か。', 'Who is it?', 0, 'He\'s asking you!']]],
      ['n', 'キム さん も 先生[せんせい] です か。', 'Is Kim a teacher too?'],
      ['u', [
        ['いいえ、 先生[せんせい] じゃ ありません。 エンジニア です。', 'No, not a teacher. An engineer.', 2, ''],
        ['はい、 エンジニア です。', 'Yes, an engineer.', 0, 'はい would mean "yes, a teacher". Start with いいえ.'],
        ['いいえ、 エンジニア じゃ ありません。', 'No, not an engineer.', 0, 'Kim IS an engineer.']]],
      ['n', 'そう です か。 キム さん は 韓国人[かんこくじん] です か。', 'I see. Is Kim Korean?'],
      ['u', [
        ['はい、 そう です。', 'Yes, that\'s right.', 2, ''],
        ['はい、 韓国人[かんこくじん] じゃ ありません。', 'Yes, not Korean.', 0, 'Contradiction!'],
        ['わかりません。', 'I don\'t know.', 1, 'Possible, but he\'s your friend…']]],
      ['end', 'じゃあ、 乾杯[かんぱい]！', 'Well then — cheers!']
    ]
  },
  {
    id: 'lost-found', level: 1, icon: '☂️', npc: 'Station staff', avatar: '🧑‍✈️',
    title: 'Lost and Found', scene: 'You left things on a train. The station\'s lost-and-found counter has a few items.',
    goal: 'Find which items are yours.',
    script: [
      ['n', 'どう しました か。', 'How can I help?'],
      ['u', [
        ['すみません、 傘[かさ] と 財布[さいふ] が… 忘[わす]れ物[もの] です。', 'Excuse me, an umbrella and a wallet… lost items.', 2, 'Good enough to be understood!'],
        ['こんばんは。 はじめまして。', 'Good evening. Nice to meet you.', 1, 'Polite, but say what you lost.'],
        ['これ を ください。', 'Please give me this.', 0, 'Explain the problem first.']]],
      ['n', 'この 傘[かさ] です か。', 'Is it this umbrella?'],
      ['u', [
        ['いいえ、 ちがいます。 あの 青[あお]い 傘[かさ] です。', 'No. It\'s that blue umbrella.', 2, ''],
        ['はい、 わたし の です。', 'Yes, it\'s mine.', 1, 'Is it? Yours was blue — that one is black!', 'え？ この 黒[くろ]い 傘[かさ] です か。|Huh? This black umbrella?'],
        ['あれ 傘[かさ] です。', 'That umbrella.', 1, 'Use あの before a noun: あの傘.']]],
      ['n', 'はい、 どうぞ。 財布[さいふ] は… これ です か。', 'Here you go. And the wallet… is it this one?'],
      ['u', [
        ['はい、 それ は わたし の です！', 'Yes, that\'s mine!', 2, ''],
        ['いいえ、 わたし の じゃ ありません。', 'No, it\'s not mine.', 1, 'Hmm, you\'d better look again — it has your card in it!', 'え、 でも カード の 名前[なまえ] は… エマ さん です よ。|But the name on the card is… Emma.'],
        ['だれ の です か。', 'Whose is it?', 1, '']]],
      ['n', '中[なか] を 確認[かくにん] して ください。', 'Please check inside.'],
      ['u', [
        ['大丈夫[だいじょうぶ] です。 本当[ほんとう] に ありがとう ございました！', 'It\'s all fine. Thank you so much!', 2, 'ございました (past) thanks someone for something finished.'],
        ['いただきます。', '(before eating)', 0, '']]],
      ['end', 'よかった です ね。 お気[き] を つけて。', 'I\'m glad. Take care.']
    ]
  },
  {
    id: 'family-photo', level: 1, icon: '📸', npc: 'Yui',
    title: 'Family Photos', scene: 'Your friend Yui sees a family photo on your phone.',
    goal: 'Introduce your family — and ask about hers.',
    script: [
      ['n', 'これ は 家族[かぞく] の 写真[しゃしん] です か。', 'Is this a photo of your family?'],
      ['u', [
        ['はい。 父[ちち] と 母[はは] と 姉[あね] です。', 'Yes. My father, mother and older sister.', 2, 'Humble words for your own family — perfect.'],
        ['はい。 お父[とう]さん と お母[かあ]さん です。', 'Yes. (My) Dad and Mom.', 1, 'Understandable, but to others use 父 and 母.'],
        ['いいえ、 家族[かぞく] です。', 'No, it\'s my family.', 0, 'Contradiction!']]],
      ['n', 'お姉[ねえ]さん は 学生[がくせい] です か。', 'Is your older sister a student?'],
      ['u', [
        ['いいえ、 会社員[かいしゃいん] です。', 'No, she\'s an office worker.', 2, ''],
        ['いいえ、 お姉[ねえ]さん は 会社員[かいしゃいん] です。', 'No, (your) older sister is an office worker.', 1, 'For your own sister, say 姉.'],
        ['はい、 姉[あね] じゃ ありません。', 'Yes, not my sister.', 0, '']]],
      ['n', 'そう です か。 お父[とう]さん も 会社員[かいしゃいん] です か。', 'I see. Is your father an office worker too?'],
      ['u', [
        ['いいえ、 父[ちち] は 医者[いしゃ] です。', 'No, my father is a doctor.', 2, ''],
        ['はい、 父[ちち] も 会社員[かいしゃいん] です。', 'Yes, my father is an office worker too.', 2, 'Nice use of も.']]],
      ['u', [
        ['ゆい さん は 兄弟[きょうだい] が います か。', 'Yui, do you have siblings?', 2, 'Great — keep the conversation going!', 'はい、 弟[おとうと] が います。 大学生[だいがくせい] です。|Yes, I have a younger brother. He\'s at university.'],
        ['ゆい さん の 家族[かぞく] は？', 'And your family, Yui?', 2, '', '両親[りょうしん] と 弟[おとうと] です。|My parents and younger brother.'],
        ['じゃあ、 また。', 'Well, see you.', 1, 'A bit abrupt!']]],
      ['end', '今度[こんど]、 写真[しゃしん] を 見[み]せます ね。', 'I\'ll show you photos next time.']
    ]
  },
  {
    id: 'fast-food', level: 1, icon: '🍔', npc: 'Staff',
    title: 'Fast-Food Order', scene: 'A busy burger chain at lunchtime. The menu is all katakana!',
    goal: 'Order a combo with the drink and size you want.',
    script: [
      ['n', 'いらっしゃいませ。 店内[てんない] で お召[め]し上[あ]がり です か。', 'Welcome. Eating in?'],
      ['u', [
        ['はい、 店内[てんない] で。', 'Yes, eating in.', 2, ''],
        ['いいえ、 テイクアウト で。', 'No, takeout.', 2, ''],
        ['ハンバーガー です か。', 'Is it a hamburger?', 0, 'Answer the question first.']]],
      ['n', 'ご注文[ちゅうもん] を どうぞ。', 'Please go ahead and order.'],
      ['u', [
        ['チーズバーガー の セット を ひとつ おねがいします。', 'One cheeseburger combo, please.', 2, ''],
        ['チーズバーガー を ひとつ ください。', 'One cheeseburger, please.', 2, 'Burger only — fine too.'],
        ['メニュー は いくら です か。', 'How much is the menu?', 1, 'Funny! Order something.']]],
      ['n', 'お飲[の]み物[もの] は 何[なに] に なさいます か。', 'What would you like to drink?'],
      ['u', [
        ['アイスコーヒー で おねがいします。', 'Iced coffee, please.', 2, ''],
        ['オレンジジュース で。', 'Orange juice.', 2, ''],
        ['ポテト です。', 'Fries.', 0, 'That\'s not a drink!']]],
      ['n', 'サイズ は エス、 エム、 エル が ございます。', 'We have S, M and L sizes.'],
      ['u', [
        ['エム で おねがいします。', 'Medium, please.', 2, ''],
        ['エル サイズ を ください。', 'Size L, please.', 2, ''],
        ['いいえ、 大丈夫[だいじょうぶ] です。', 'No, I\'m fine.', 0, 'Pick a size!']]],
      ['n', '以上[いじょう] で よろしい です か。', 'Will that be all?'],
      ['u', [
        ['はい、 以上[いじょう] で。', 'Yes, that\'s all.', 2, 'Repeat their word 以上 — easy!'],
        ['はい、 大丈夫[だいじょうぶ] です。', 'Yes, I\'m fine.', 2, ''],
        ['ちがいます。', 'That\'s wrong.', 0, '']]],
      ['end', '六百五十円[ろっぴゃくごじゅうえん] です。 ありがとう ございます！', 'That\'s 650 yen. Thank you!']
    ]
  },
  {
    id: 'bakery', level: 1, icon: '🥐', npc: 'Clerk',
    title: 'The Bakery', scene: 'Japanese bakeries are amazing. Buy treats for a picnic with three friends.',
    goal: 'Order several items with ひとつ, ふたつ… and pay.',
    script: [
      ['n', 'いらっしゃいませ。', 'Welcome.'],
      ['u', [
        ['すみません、 この パン は 何[なん] です か。', 'Excuse me, what is this bread?', 2, '', 'それ は メロンパン です。 甘[あま]い です よ。|That\'s melon pan. It\'s sweet.'],
        ['これ を よっつ ください。', 'Four of these, please.', 2, ''],
        ['パン は どこ です か。', 'Where is the bread?', 1, 'You\'re standing in a bakery!']]],
      ['u', [
        ['じゃあ、 メロンパン を よっつ ください。', 'Then four melon pans, please.', 2, 'One for each friend!'],
        ['メロンパン を よん ください。', 'Melon pan, four please.', 1, 'For things, count with よっつ.'],
        ['メロンパン を よっか ください。', 'Melon pan, the fourth day please.', 0, 'よっか is "4th day of the month".']]],
      ['n', 'はい。 ほか に は？', 'Sure. Anything else?'],
      ['u', [
        ['あの ケーキ も ふたつ おねがいします。', 'Two of those cakes too, please.', 2, 'Nice use of も.'],
        ['以上[いじょう] で。', 'That\'s all.', 2, '', '…|']]],
      ['n', '全部[ぜんぶ] で 千四百円[せんよんひゃくえん] です。', 'That\'s 1,400 yen in total.'],
      ['u', [
        ['はい、 二千円[にせんえん] です。', 'Here\'s 2,000 yen.', 2, '', '六百円[ろっぴゃくえん] の おつり です。|Here\'s 600 yen change.'],
        ['千四百円[せんよんひゃくえん] です か。 はい、 どうぞ。', '1,400 yen? Here you go.', 2, ''],
        ['いくつ です か。', 'How many?', 0, 'She told you the price.']]],
      ['end', 'ありがとう ございました！', 'Thank you very much!']
    ]
  },
  {
    id: 'opening-hours', level: 1, icon: '🏦', npc: 'Receptionist',
    title: 'Is It Still Open?', scene: 'You need to send a package and withdraw cash. You call into a community center to ask about hours.',
    goal: 'Find out when the post office and bank are open.',
    script: [
      ['u', [
        ['すみません、 郵便局[ゆうびんきょく] は 何時[なんじ] まで です か。', 'Excuse me, until what time is the post office open?', 2, ''],
        ['郵便局[ゆうびんきょく] は いつ です か。', 'When is the post office?', 1, 'Ask 何時から / 何時まで.'],
        ['郵便局[ゆうびんきょく] を ください。', 'A post office, please.', 0, '']]],
      ['n', '郵便局[ゆうびんきょく] は 5時[ごじ] まで です。', 'The post office is open until 5.'],
      ['u', [
        ['今[いま] 何時[なんじ] です か。', 'What time is it now?', 2, '', '今[いま] は 4時[よじ] 半[はん] です。 急[いそ]いで！|It\'s 4:30. Hurry!'],
        ['5時[ごじ] から です か。', 'From 5?', 0, 'She said until 5.']]],
      ['u', [
        ['あと、 銀行[ぎんこう] は 何時[なんじ] まで です か。', 'And until what time is the bank open?', 2, ''],
        ['銀行[ぎんこう] も 5時[ごじ] まで です か。', 'Is the bank open until 5 too?', 2, 'Good use of も!']]],
      ['n', '銀行[ぎんこう] は 3時[さんじ] まで です。 でも、 コンビニ の ATM[エーティーエム] は 24時間[にじゅうよじかん] です よ。', 'The bank closes at 3. But konbini ATMs are 24 hours.'],
      ['u', [
        ['なるほど。 ありがとう ございます！', 'I see. Thank you!', 2, ''],
        ['24時[にじゅうよじ] から です か。', 'From 24 o\'clock?', 0, '24時間 = 24 hours (all day).']]],
      ['end', 'いいえ。 いって らっしゃい。', 'Not at all. Off you go.']
    ]
  },
  {
    id: 'birthday', level: 1, icon: '🎂', npc: 'Ken',
    title: 'Birthday Plans', scene: 'Your friend Ken wants to plan a party.',
    goal: 'Talk about dates and days of the week.',
    script: [
      ['n', '誕生日[たんじょうび] は いつ です か。', 'When is your birthday?'],
      ['u', [
        ['5月[ごがつ] 8日[ようか] です。', 'It\'s May 8th.', 2, ''],
        ['5月[ごがつ] 8日[はちにち] です。', 'May "eight-nichi".', 1, 'The 8th is ようか — irregular!'],
        ['金曜日[きんようび] です。', 'It\'s Friday.', 1, 'That\'s a weekday, not a date.']]],
      ['n', 'え、 来週[らいしゅう] の 金曜日[きんようび] です ね！', 'Oh, that\'s next Friday!'],
      ['u', [
        ['そう です ね。', 'That\'s right.', 2, ''],
        ['いいえ、 今週[こんしゅう] です。', 'No, it\'s this week.', 1, 'Hmm, check the calendar!', 'え？ 今日[きょう] は 5月[ごがつ] 1日[ついたち] です よ。|Huh? Today is May 1st.']]],
      ['n', 'パーティー を しません か。 土曜日[どようび] は どう です か。', 'Why don\'t we have a party? How about Saturday?'],
      ['u', [
        ['いい です ね！ 土曜日[どようび] は 大丈夫[だいじょうぶ] です。', 'Sounds great! Saturday is fine.', 2, ''],
        ['土曜日[どようび] は ちょっと… 日曜日[にちようび] は どう です か。', 'Saturday is a bit… How about Sunday?', 2, 'Perfect soft refusal + alternative.', 'いい です よ。 じゃあ、 日曜日[にちようび] に！|Sure. Sunday then!'],
        ['土曜日[どようび] は 何曜日[なんようび] です か。', 'What day of the week is Saturday?', 0, '']]],
      ['n', '何時[なんじ] から が いい です か。', 'What time should it start?'],
      ['u', [
        ['6時[ろくじ] から は どう です か。', 'How about from 6?', 2, ''],
        ['6時[ろくじ] まで です。', 'Until 6.', 1, 'He asked when it starts.']]],
      ['end', 'じゃあ、 決[き]まり！ 楽[たの]しみ です ね。', 'Then it\'s decided! Can\'t wait.']
    ]
  },
  {
    id: 'department-store', level: 1, icon: '🏬', npc: 'Staff',
    title: 'Department Store Hunt', scene: 'You need shoes and a gift box of sweets from a huge department store.',
    goal: 'Find the right floors.',
    script: [
      ['n', 'いらっしゃいませ。', 'Welcome.'],
      ['u', [
        ['すみません、 靴[くつ] 売[う]り場[ば] は 何階[なんがい] です か。', 'Excuse me, which floor is the shoe section?', 2, ''],
        ['靴[くつ] は どこ です か。', 'Where are shoes?', 2, 'Simple and clear.'],
        ['靴[くつ] を ください。', 'Shoes, please.', 1, 'This is the information desk — ask where they are.']]],
      ['n', '靴[くつ] 売[う]り場[ば] は 3階[さんがい] で ございます。', 'The shoe section is on the 3rd floor.'],
      ['u', [
        ['3階[さんがい] です ね。 エレベーター は どちら です か。', '3rd floor. Where is the elevator?', 2, ''],
        ['3階[さんかい] です か。', '"San-kai"?', 1, 'It\'s さんがい — but she\'ll understand.']]],
      ['n', 'エレベーター は あちら で ございます。', 'The elevator is over there.'],
      ['u', [
        ['あと、 お菓子[かし] は 何階[なんがい] です か。', 'Also, which floor are sweets on?', 2, ''],
        ['ありがとう ございます。', 'Thank you.', 2, '', 'ほか に 何[なに] か ございます か。|Is there anything else?']]],
      ['u', [
        ['お菓子[かし] の 売[う]り場[ば] は どこ です か。', 'Where is the sweets section?', 2, ''],
        ['いいえ、 以上[いじょう] です。', 'No, that\'s all.', 1, 'But you still need the gift!']]],
      ['n', 'お菓子[かし] は 地下[ちか] 1階[いっかい] です。 デパ地下[ちか] です ね。', 'Sweets are on B1 — the depachika.'],
      ['u', [
        ['地下[ちか] 1階[いっかい] です ね。 ありがとう ございます！', 'B1. Thank you!', 2, ''],
        ['上[うえ] です か。', 'Upstairs?', 0, '地下 = basement.']]],
      ['end', 'ごゆっくり どうぞ。', 'Please take your time.']
    ]
  },
  {
    id: 'small-talk', level: 1, icon: '☕', npc: 'Sato',
    title: 'Coffee-Break Small Talk', scene: 'In the office kitchen, Sato chats while making coffee.',
    goal: 'Keep the conversation alive with aizuchi, ね and よ.',
    script: [
      ['n', '今日[きょう] は 寒[さむ]い です ね。', 'It\'s cold today, isn\'t it?'],
      ['u', [
        ['そう です ね。', 'It sure is.', 2, 'Agreeing with そうですね is the classic response.'],
        ['そう です か。', 'Is that so?', 1, 'Sounds like this is news to you. Use そうですね to agree.'],
        ['寒[さむ]い です よ。', 'It\'s cold, you know.', 1, 'よ tells new info — but she just said it!']]],
      ['n', 'この コーヒー、 新[あたら]しい です よ。 おいしい です。', 'This coffee is new, you know. It\'s good.'],
      ['u', [
        ['へえ、 そう です か！', 'Oh, really!', 2, 'Great aizuchi.'],
        ['なるほど。', 'I see.', 2, ''],
        ['はじめまして。', 'Nice to meet you.', 0, '']]],
      ['n', 'エチオピア の コーヒー です。', 'It\'s Ethiopian coffee.'],
      ['u', [
        ['本当[ほんとう] に おいしい です ね！', 'It\'s really delicious!', 2, ''],
        ['すごい です ね！', 'Amazing!', 2, ''],
        ['いいえ。', 'No.', 0, 'Rude!']]],
      ['n', '週末[しゅうまつ] は 何[なに] を しました か。', 'What did you do on the weekend?'],
      ['u', [
        ['えっと… 映画[えいが] を 見[み]ました。', 'Um… I watched a movie.', 2, 'Fillers like えっと sound natural.'],
        ['週末[しゅうまつ] です。', 'It\'s the weekend.', 0, ''],
        ['えっと… わかりません。', 'Um… I don\'t know.', 1, 'Odd answer about your own weekend!']]],
      ['end', 'いい です ね。 じゃあ、 また 後[あと] で。', 'Nice. See you later.']
    ]
  },
  {
    id: 'new-neighbor', level: 1, icon: '🏘️', npc: 'Mr. Yamada', avatar: '👨',
    title: 'Hello, New Neighbor', scene: 'You just moved in. Ring the bell next door with a small gift.',
    goal: 'Introduce yourself, give a gift and learn the garbage days.',
    script: [
      ['n', 'はい、 どちら 様[さま] です か。', 'Yes? Who is it?'],
      ['u', [
        ['はじめまして。 隣[となり] に 引[ひ]っ越[こ]して きた エマ です。', 'Nice to meet you. I\'m Emma, I just moved in next door.', 2, ''],
        ['エマ さん です。', 'It\'s Ms. Emma.', 0, 'No さん for yourself!'],
        ['ピザ です。', 'Pizza delivery.', 0, 'Ha! No.']]],
      ['n', 'あ、 はじめまして。 山田[やまだ] です。', 'Oh, nice to meet you. I\'m Yamada.'],
      ['u', [
        ['これ、 つまらない もの です が…', 'This is just a small thing, but…', 2, 'The classic humble gift phrase.'],
        ['これ、 おいしい です よ。 どうぞ。', 'This is tasty, you know. Here.', 2, 'Modern and friendly — also fine.'],
        ['これ は いくら です か。', 'How much is this?', 0, '']]],
      ['n', 'わざわざ すみません。 ありがとう ございます。', 'You shouldn\'t have. Thank you.'],
      ['u', [
        ['あの、 ごみ の 日[ひ] は いつ です か。', 'Um, when are the garbage days?', 2, 'Very practical!'],
        ['どういたしまして。', 'You\'re welcome.', 1, 'Fine — now ask something useful!', 'あ、 そう だ。 ごみ の 日[ひ]、 わかります か。|Oh, right. Do you know the garbage days?']]],
      ['n', '燃[も]える ごみ は 月曜日[げつようび] と 木曜日[もくようび] の 朝[あさ] です。', 'Burnable garbage is Monday and Thursday mornings.'],
      ['u', [
        ['月曜日[げつようび] と 木曜日[もくようび] です ね。 わかりました。', 'Monday and Thursday. Got it.', 2, 'Repeating back shows you understood.'],
        ['火曜日[かようび] と 金曜日[きんようび] です ね。', 'Tuesday and Friday.', 0, 'Listen again: 月 and 木.']]],
      ['u', [
        ['これから よろしく おねがいします。', 'I look forward to being your neighbor.', 2, ''],
        ['さようなら。', 'Goodbye.', 1, 'OK, but よろしくおねがいします builds the relationship.']]],
      ['end', 'こちら こそ。 何[なに] か あったら、 いつでも どうぞ。', 'Likewise. If you need anything, just ask.']
    ]
  }
]);
