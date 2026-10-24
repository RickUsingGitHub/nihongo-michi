/* Level 3 role-plays. Option: [japanese, english, score 0|1|2, feedback, 'npc reply|english', goto] */
JT.addConvos([
  {
    id: 'apartment', level: 3, icon: '🏢', npc: 'Agent', avatar: '🧑‍💼',
    title: 'Apartment Viewing', scene: 'A real-estate agent shows you a small apartment in Tokyo.',
    goal: 'Describe the place, ask about rent and decide.',
    script: [
      ['n', 'こちら の 部屋[へや] です。 どう です か。', 'This is the room. What do you think?'],
      ['u', [
        ['明[あか]るくて きれい です ね。', 'It\'s bright and clean.', 2, 'Nice linking with ～くて.'],
        ['ちょっと 狭[せま]い です ね。', 'It\'s a bit cramped.', 2, 'Honest but polite.'],
        ['狭[せま]い な 部屋[へや] です。', 'It\'s a cramped (na) room.', 1, '狭い is an い-adjective — no な.']]],
      ['n', '駅[えき] から 歩[ある]いて 5分[ごふん] です よ。', 'It\'s a 5-minute walk from the station.'],
      ['u', [
        ['近[ちか]い です ね。 便利[べんり] です ね。', 'That\'s close. Convenient.', 2, ''],
        ['遠[とお]い です ね。', 'That\'s far.', 1, '5 minutes is close!']]],
      ['u', [
        ['家賃[やちん] は いくら です か。', 'How much is the rent?', 2, ''],
        ['家賃[やちん] は 高[たか]い です か。', 'Is the rent expensive?', 2, '']]],
      ['n', '月[つき] 8万円[はちまんえん] です。', 'It\'s 80,000 yen a month.'],
      ['u', [
        ['うーん、 ちょっと 高[たか]い です ね。 もう 少[すこ]し 安[やす]い 部屋[へや] は あります か。', 'Hmm, a bit expensive. Do you have a slightly cheaper room?', 2, '', 'ございます。 こちら は 6万円[ろくまんえん] です。 でも、 少[すこ]し 古[ふる]い です。|We do. This one is 60,000 yen. But it\'s a bit old.'],
        ['安[やす]い です ね！ ここ に します。', 'That\'s cheap! I\'ll take it.', 2, 'For Tokyo, not bad!', 'ありがとう ございます！|Thank you!', 'done'],
        ['高[たか]くない でした。', 'It wasn\'t expensive.', 0, 'Wrong tense, and it doesn\'t answer.']]],
      ['u', [
        ['古[ふる]くても 大丈夫[だいじょうぶ] です。 そちら に します。', 'Old is fine. I\'ll take that one.', 2, ''],
        ['じゃあ、 最初[さいしょ] の 部屋[へや] に します。', 'Then I\'ll take the first room.', 2, '']]],
      ['label', 'done'],
      ['end', 'かしこまりました。 では、 契約[けいやく] の 準備[じゅんび] を します ね。', 'Certainly. I\'ll prepare the contract.']
    ]
  },
  {
    id: 'hometown', level: 3, icon: '🏞️', npc: 'Mr. Kato', avatar: '👴',
    title: 'Where Are You From?', scene: 'At a community event, an older man asks about your hometown.',
    goal: 'Describe your hometown with な- and い-adjectives.',
    script: [
      ['n', 'お国[くに] は どちら です か。', 'Where are you from?'],
      ['u', [
        ['カナダ です。 トロント から 来[き]ました。', 'Canada. I came from Toronto.', 2, ''],
        ['カナダ 人[じん] です。', 'I\'m Canadian.', 2, ''],
        ['どちら です か。', 'Where?', 0, 'He\'s asking you.']]],
      ['n', 'どんな 町[まち] です か。', 'What kind of city is it?'],
      ['u', [
        ['大[おお]きくて にぎやか な 町[まち] です。', 'It\'s a big, lively city.', 2, ''],
        ['にぎやか で 大[おお]きい な 町[まち] です。', 'Lively and big (na) city.', 1, '大きい is an い-adjective — no な.'],
        ['町[まち] です。', 'It\'s a town.', 1, 'Describe it!']]],
      ['n', '冬[ふゆ] は 寒[さむ]い でしょう？', 'Winters must be cold, right?'],
      ['u', [
        ['はい、 とても 寒[さむ]い です。 雪[ゆき] も 多[おお]い です。', 'Yes, very cold. Lots of snow too.', 2, ''],
        ['いいえ、 あまり 寒[さむ]い です。', 'No, not-very cold.', 0, 'あまり needs a negative: 寒くない.']]],
      ['n', '何[なに] が 有名[ゆうめい] です か。', 'What is it famous for?'],
      ['u', [
        ['CN[シーエヌ] タワー が 有名[ゆうめい] です。 とても 高[たか]い です よ。', 'The CN Tower. It\'s very tall.', 2, ''],
        ['メープル シロップ が 有名[ゆうめい] です。', 'Maple syrup.', 2, '']]],
      ['n', 'いい です ね。 日本[にほん] と どちら が 好[す]き です か。', 'Nice. Which do you like better, there or Japan?'],
      ['u', [
        ['どちら も 好[す]き です。', 'I like both.', 2, 'Diplomatic!'],
        ['日本[にほん] の ほう が 好[す]き です。 食[た]べ物[もの] が おいしい です から。', 'I prefer Japan. The food is good.', 2, '']]],
      ['end', 'ははは。 うれしい です ね。', 'Haha, that makes me happy.']
    ]
  },
  {
    id: 'trip-report', level: 3, icon: '♨️', npc: 'Ken',
    title: 'How Was the Trip?', scene: 'You\'re back from a weekend at a hot-spring town. Ken wants details.',
    goal: 'Describe a past trip with past-tense adjectives.',
    script: [
      ['n', '旅行[りょこう] は どう でした か。', 'How was the trip?'],
      ['u', [
        ['とても 楽[たの]しかった です！', 'It was really fun!', 2, ''],
        ['とても 楽[たの]しい でした！', 'It was very fun (wrong form)!', 1, 'い-adjective past: 楽しかったです.'],
        ['楽[たの]しい です。', 'It\'s fun.', 1, 'Use the past tense!']]],
      ['n', '温泉[おんせん] は よかった です か。', 'Was the hot spring good?'],
      ['u', [
        ['はい、 気持[きも]ち よかった です。', 'Yes, it felt great.', 2, ''],
        ['はい、 いかった です。', 'Yes, it was "ikatta".', 1, 'いい → よかった.']]],
      ['n', '天気[てんき] は？', 'And the weather?'],
      ['u', [
        ['あまり よくなかった です。 雨[あめ] でした。', 'Not great. It rained.', 2, ''],
        ['晴[は]れ でした。 暖[あたた]かかった です。', 'It was sunny. Warm.', 2, '']]],
      ['n', '旅館[りょかん] の 料理[りょうり] は どう でした か。', 'How was the food at the inn?'],
      ['u', [
        ['新鮮[しんせん] で おいしかった です。', 'Fresh and delicious.', 2, 'な-adjective + で to link.'],
        ['安[やす]くて おいしかった です。', 'Cheap and delicious.', 2, ''],
        ['料理[りょうり] でした。', 'It was food.', 0, '']]],
      ['end', 'うらやましい！ 今度[こんど] わたし も 行[い]きたい です。', 'I\'m jealous! I want to go next time too.']
    ]
  },
  {
    id: 'hobbies', level: 3, icon: '🎮', npc: 'Sato',
    title: 'Hobbies & Compliments', scene: 'At lunch, Sato asks about your hobbies — and compliments your Japanese.',
    goal: 'Talk about likes and skills, and stay modest.',
    script: [
      ['n', '趣味[しゅみ] は 何[なん] です か。', 'What are your hobbies?'],
      ['u', [
        ['写真[しゃしん] を 撮[と]る こと と ゲーム です。', 'Taking photos and games.', 2, ''],
        ['ゲーム が 好[す]き です。', 'I like games.', 2, ''],
        ['ゲーム を 好[す]き です。', 'I like games (wrong particle).', 1, 'Likes take が: ゲームが好き.']]],
      ['n', 'どんな ゲーム が 好[す]き です か。', 'What kind of games do you like?'],
      ['u', [
        ['日本[にほん] の RPG[アールピージー] が 大好[だいす]き です。', 'I love Japanese RPGs.', 2, ''],
        ['いい ゲーム です。', 'Good games.', 1, '']]],
      ['n', 'へえ。 料理[りょうり] は します か。', 'Oh. Do you cook?'],
      ['u', [
        ['はい、 料理[りょうり] は 得意[とくい] です。', 'Yes, cooking is my strong point.', 2, '得意 is fine for yourself.'],
        ['はい、 料理[りょうり] が 上手[じょうず] です。', 'Yes, I\'m skilled at cooking.', 1, 'Calling yourself 上手 sounds boastful. Use 得意.'],
        ['いいえ、 苦手[にがて] です。', 'No, I\'m not good at it.', 2, '']]],
      ['n', 'それにしても、 日本語[にほんご] が 上手[じょうず] です ね！', 'By the way, your Japanese is really good!'],
      ['u', [
        ['いえいえ、 まだまだ です。', 'Oh no, I still have a long way to go.', 2, 'The perfect modest reply.'],
        ['はい、 上手[じょうず] です。', 'Yes, I\'m good.', 0, 'Too boastful for Japanese ears!'],
        ['ありがとう ございます。 でも、 漢字[かんじ] は 苦手[にがて] です。', 'Thank you. But I\'m weak at kanji.', 2, 'Gracious and modest.']]],
      ['end', 'そんな こと ない です よ！', 'Not at all!']
    ]
  },
  {
    id: 'travel-plans', level: 3, icon: '✈️', npc: 'Yui',
    title: 'Dream Vacation', scene: 'Yui and you daydream about holidays over coffee.',
    goal: 'Say what you want and want to do.',
    script: [
      ['n', '今[いま]、 何[なに] が 一番[いちばん] ほしい です か。', 'What do you want most right now?'],
      ['u', [
        ['新[あたら]しい カメラ が ほしい です。', 'I want a new camera.', 2, ''],
        ['新[あたら]しい カメラ を ほしい です。', 'I want a new camera (wrong particle).', 1, 'ほしい takes が.'],
        ['休[やす]み が ほしい です！', 'I want a vacation!', 2, 'Relatable.']]],
      ['n', '休[やす]み に どこ へ 行[い]きたい です か。', 'Where do you want to go on vacation?'],
      ['u', [
        ['北海道[ほっかいどう] へ 行[い]きたい です。', 'I want to go to Hokkaido.', 2, ''],
        ['沖縄[おきなわ] に 行[い]きます たい。', 'Okinawa go want.', 0, 'Stem + たい: 行きたいです.']]],
      ['n', 'そこ で 何[なに] を したい です か。', 'What do you want to do there?'],
      ['u', [
        ['おいしい 海鮮[かいせん] を 食[た]べたい です。', 'I want to eat delicious seafood.', 2, ''],
        ['スキー を したい です。', 'I want to ski.', 2, '']]],
      ['n', 'いい です ね。 わたし も 行[い]きたい！', 'Sounds great. I want to go too!'],
      ['u', [
        ['じゃあ、 いっしょ に 行[い]きません か。', 'Then why don\'t we go together?', 2, ''],
        ['ゆい さん は 行[い]きたくない です か。', 'Don\'t you want to go?', 1, 'She just said she does!']]],
      ['end', 'ぜひ！ 計画[けいかく] を 立[た]てましょう。', 'Definitely! Let\'s make a plan.']
    ]
  },
  {
    id: 'family-restaurant', level: 3, icon: '🍝', npc: 'Staff',
    title: 'Family Restaurant', scene: 'Dinner at a famiresu with a friend\'s family: 2 adults, 2 kids.',
    goal: 'Use counters for people, drinks and dishes.',
    script: [
      ['n', 'いらっしゃいませ。 何名[なんめい] 様[さま] です か。', 'Welcome. How many?'],
      ['u', [
        ['四人[よにん] です。 大人[おとな] 二人[ふたり]、 子[こ]ども 二人[ふたり] です。', 'Four. Two adults, two children.', 2, ''],
        ['よんにん です。', '"Yon-nin".', 1, '4 people is よにん.'],
        ['四[よっ]つ です。', 'Four (things).', 0, 'People use 人.']]],
      ['n', '禁煙席[きんえんせき] で よろしい です か。', 'Is non-smoking OK?'],
      ['u', [
        ['はい、 おねがいします。', 'Yes, please.', 2, ''],
        ['いいえ、 大丈夫[だいじょうぶ] です。', 'No, I\'m fine.', 1, 'That would mean no to non-smoking!']]],
      ['n', 'ご注文[ちゅうもん] は お決[き]まり です か。', 'Are you ready to order?'],
      ['u', [
        ['ハンバーグ を 二[ふた]つ と、 お子[こ]さま ランチ を 二[ふた]つ ください。', 'Two hamburg steaks and two kids\' meals, please.', 2, ''],
        ['ハンバーグ を 二人[ふたり] ください。', 'Two people of hamburg steak.', 1, 'Count dishes with つ.']]],
      ['n', 'お飲[の]み物[もの] は？', 'Drinks?'],
      ['u', [
        ['ビール を 一杯[いっぱい] と、 ジュース を 三杯[さんばい] ください。', 'One beer and three juices, please.', 2, 'Great counter use.'],
        ['ドリンクバー を 四人[よにん] おねがいします。', 'Drink bar for four, please.', 2, 'Famiresu drink bars are all-you-can-drink!'],
        ['ビール を 三本[さんほん] ください。', 'Three "san-hon" beers.', 1, '3 bottles is さんぼん.']]],
      ['end', 'かしこまりました。 少々[しょうしょう] お待[ま]ち ください。', 'Certainly. Please wait a moment.']
    ]
  },
  {
    id: 'electronics', level: 3, icon: '📷', npc: 'Clerk',
    title: 'Which Camera?', scene: 'At a big electronics store in Akihabara, you\'re choosing between two cameras.',
    goal: 'Compare options and choose one.',
    script: [
      ['n', 'いらっしゃいませ。 何[なに] か お探[さが]し です か。', 'Welcome. Looking for something?'],
      ['u', [
        ['カメラ を 探[さが]して います。 軽[かる]い の が いい です。', 'I\'m looking for a camera. Something light.', 2, ''],
        ['カメラ が ほしい です。', 'I want a camera.', 2, '']]],
      ['n', 'こちら の A[エー] と B[ビー] が 人気[にんき] です。', 'Models A and B here are popular.'],
      ['u', [
        ['A[エー] と B[ビー] と どちら が 軽[かる]い です か。', 'Which is lighter, A or B?', 2, ''],
        ['どちら が 一番[いちばん] です か。', 'Which is number one?', 1, 'For two things use どちら + より/ほうが — and say "better at what".']]],
      ['n', 'B[ビー] の ほう が 軽[かる]い です。 でも、 A[エー] の ほう が 写真[しゃしん] が きれい です。', 'B is lighter. But A takes nicer photos.'],
      ['u', [
        ['値段[ねだん] は どちら が 安[やす]い です か。', 'Which is cheaper?', 2, ''],
        ['A[エー] は B[ビー] より 重[おも]い です か。', 'Is A heavier than B?', 2, 'Good use of より.']]],
      ['n', 'B[ビー] の ほう が 一万円[いちまんえん] 安[やす]い です。', 'B is 10,000 yen cheaper.'],
      ['u', [
        ['じゃあ、 B[ビー] に します。', 'Then I\'ll take B.', 2, ''],
        ['写真[しゃしん] が 大切[たいせつ] です から、 A[エー] に します。', 'Photos matter most, so I\'ll take A.', 2, ''],
        ['どちら も ほしくない です。', 'I don\'t want either.', 1, 'Polite way: また来ます ("I\'ll come back").']]],
      ['end', 'ありがとう ございます！ 免税[めんぜい] も できます よ。', 'Thank you! It can be tax-free too.']
    ]
  },
  {
    id: 'weather-chat', level: 3, icon: '🌦️', npc: 'Neighbor', avatar: '👵',
    title: 'Weather Talk', scene: 'Your elderly neighbor chats while watering her plants.',
    goal: 'Make weather small talk the Japanese way.',
    script: [
      ['n', '今日[きょう] は 暑[あつ]い です ね。', 'Hot today, isn\'t it?'],
      ['u', [
        ['本当[ほんとう] に 暑[あつ]い です ね。', 'It really is.', 2, 'Agreement with ね — perfect.'],
        ['暑[あつ]い です か。', 'Is it hot?', 1, 'Sounds like you disagree or didn\'t notice.'],
        ['寒[さむ]い です ね。', 'Cold, isn\'t it?', 0, 'She said hot!']]],
      ['n', '明日[あした] は 雨[あめ] でしょう か。', 'I wonder if it\'ll rain tomorrow.'],
      ['u', [
        ['天気[てんき] 予報[よほう] で は、 明日[あした] は 曇[くも]り です。', 'The forecast says cloudy tomorrow.', 2, ''],
        ['たぶん 雨[あめ] でしょう。', 'Probably rain.', 2, '']]],
      ['n', '日本[にほん] の 夏[なつ] は どう です か。', 'How do you find Japanese summers?'],
      ['u', [
        ['ちょっと 大変[たいへん] です。 国[くに] より 暑[あつ]い です から。', 'A bit tough. It\'s hotter than back home.', 2, ''],
        ['大好[だいす]き です！', 'I love them!', 2, '']]],
      ['n', 'どの 季節[きせつ] が 一番[いちばん] 好[す]き です か。', 'Which season do you like best?'],
      ['u', [
        ['秋[あき] が 一番[いちばん] 好[す]き です。 涼[すず]しくて きれい です から。', 'Autumn — it\'s cool and beautiful.', 2, ''],
        ['春[はる] の ほう が 好[す]き です。', 'I prefer spring.', 1, 'For "best of all" use 一番.']]],
      ['end', 'わたし も 秋[あき] が 好[す]き です よ。 熱中症[ねっちゅうしょう] に 気[き] を つけて ね。', 'I like autumn too. Watch out for heatstroke.']
    ]
  },
  {
    id: 'clothes-shop', level: 3, icon: '👕', npc: 'Staff',
    title: 'Clothes Shopping', scene: 'At a clothing store in Harajuku. You want a jacket for autumn.',
    goal: 'Find the right size and color.',
    script: [
      ['n', 'いらっしゃいませ。 何[なに] か お探[さが]し です か。', 'Welcome. Looking for anything?'],
      ['u', [
        ['秋[あき] の ジャケット が ほしい です。', 'I want an autumn jacket.', 2, ''],
        ['ちょっと 見[み]て いる だけ です。', 'I\'m just looking.', 2, 'Great phrase to get some space!', 'どうぞ、 ごゆっくり。|Please take your time.', 'browse']]],
      ['label', 'browse'],
      ['n', 'こちら の 黒[くろ]い ジャケット は いかが です か。', 'How about this black jacket?'],
      ['u', [
        ['ほか の 色[いろ] は あります か。', 'Do you have other colors?', 2, '', '紺[こん] と ベージュ も ございます。|We also have navy and beige.'],
        ['かっこいい です ね。 試着[しちゃく] して も いい です か。', 'Cool. May I try it on?', 2, '']]],
      ['n', '試着室[しちゃくしつ] は こちら です。 … いかが です か。', 'The fitting room is here. … How is it?'],
      ['u', [
        ['ちょっと 小[ちい]さい です。 大[おお]きい の は あります か。', 'It\'s a bit small. Do you have a bigger one?', 2, '', 'はい、 L[エル] サイズ です。 どうぞ。|Yes, here\'s size L.'],
        ['ちょうど いい です。', 'It\'s just right.', 2, ''],
        ['小[ちい]さい な です。', 'Small (na) is.', 0, '']]],
      ['n', 'とても お似合[にあ]い です よ。', 'It really suits you.'],
      ['u', [
        ['ありがとう ございます。 じゃあ、 これ に します。', 'Thank you. I\'ll take it.', 2, ''],
        ['ちょっと 考[かんが]えます。', 'I\'ll think about it.', 2, 'A polite way to leave without buying.']]],
      ['end', 'ありがとう ございます。 レジ は あちら です。', 'Thank you. The register is over there.']
    ]
  },
  {
    id: 'hotel-checkin', level: 3, icon: '🏨', npc: 'Receptionist',
    title: 'Hotel Check-in', scene: 'You arrive at your hotel in Kyoto in the early afternoon — before check-in time.',
    goal: 'Leave your luggage, then check in and ask about your room.',
    script: [
      ['n', 'いらっしゃいませ。', 'Welcome.'],
      ['u', [
        ['予約[よやく] した ミラー です。 チェックイン は 何時[なんじ] から です か。', 'I have a reservation, Miller. From what time is check-in?', 2, ''],
        ['チェックイン を ください。', 'Check-in, please give.', 1, '']]],
      ['n', 'ミラー 様[さま] です ね。 チェックイン は 3時[さんじ] から で ございます。', 'Mr./Ms. Miller. Check-in is from 3.'],
      ['u', [
        ['じゃあ、 荷物[にもつ] を 預[あず]けたい です。', 'Then I\'d like to leave my luggage.', 2, ''],
        ['今[いま] 何時[なんじ] です か。', 'What time is it now?', 1, '', '1時[いちじ] で ございます。|It\'s 1 o\'clock.']]],
      ['u', [
        ['荷物[にもつ] を 預[あず]けて も いい です か。', 'May I leave my luggage?', 2, ''],
        ['3時[さんじ] に 来[き]ます。', 'I\'ll come at 3.', 1, 'With your heavy bags?']]],
      ['n', 'はい、 お預[あず]かり します。 何[なに] か ご希望[きぼう] は ございます か。', 'Certainly. Any requests for your room?'],
      ['u', [
        ['静[しず]か な 部屋[へや] が いい です。', 'I\'d like a quiet room.', 2, ''],
        ['山[やま] が 見[み]える 部屋[へや] は あります か。', 'Is there a room with a mountain view?', 2, '', '確認[かくにん] します ね。 … はい、 ございます。|Let me check. … Yes, we have one.'],
        ['大[おお]きい な 部屋[へや] が いい です。', 'Big (na) room.', 1, '大きい — no な.']]],
      ['u', [
        ['朝食[ちょうしょく] は 何時[なんじ] から です か。', 'From what time is breakfast?', 2, '', '7時[しちじ] から 10時[じゅうじ] まで です。|From 7 to 10.'],
        ['ありがとう ございます。', 'Thank you.', 2, '']]],
      ['end', 'では、 3時[さんじ] に お待[ま]ち して おります。', 'We\'ll be expecting you at 3.']
    ]
  }
]);
