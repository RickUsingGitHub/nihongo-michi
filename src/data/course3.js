/* Level 3 — Describing Things: adjectives, likes & skills, wants, counters, comparisons. */
JT.addLevel({
  n: 3, jlpt: 5, tag: 'N5·3', icon: '🎨', color: '#6b4fa0',
  title: 'Describing Things', jp: '形容詞で描こう',
  desc: 'Describe people, places and experiences, say what you like and want, count people and things, compare options, and talk about the weather.',
  cando: ['Describe things with い- and な-adjectives, present and past', 'Talk about likes, dislikes, hobbies and skills — modestly', 'Say what you want and want to do', 'Count people, tickets, bottles and more', 'Compare two things and pick a favorite', 'Shop for clothes and check into a hotel'],
  lessons: [
    {
      id: 'L3-1', icon: '🏠', title: 'い-Adjectives', sub: 'big, new, interesting · 大 小 高 安 新 古',
      goals: ['Describe things with い-adjectives', 'Make them negative: 高くない', 'Use とても and あまり'],
      kanji: '大小高安新古',
      words: [
        '大[おお]きい|big',
        '小[ちい]さい|small',
        '新[あたら]しい|new',
        '古[ふる]い|old (things)',
        'おもしろい|interesting, funny',
        'つまらない|boring',
        '難[むずか]しい|difficult',
        'やさしい|easy; kind',
        'いい|good',
        '悪[わる]い|bad',
        '忙[いそが]しい|busy',
        '広[ひろ]い|spacious, wide',
        '狭[せま]い|cramped, narrow',
        '近[ちか]い|near, close',
        '遠[とお]い|far'
      ],
      grammar: [
        { t: 'い-adjectives', x: 'Adjectives ending in <b>い</b> go directly before nouns or before です.', e: [['*大[おお]きい* 犬[いぬ]', 'a big dog'], ['この 部屋[へや] は *狭[せま]い* です。', 'This room is cramped.'], ['日本語[にほんご] は *おもしろい* です。', 'Japanese is interesting.']] },
        { t: 'Negative: ～くないです', x: 'Drop the final い and add <b>くないです</b> (or くありません). Irregular: いい → <b>よくないです</b>.', e: [['この ラーメン は *高[たか]くない* です。', 'This ramen isn\'t expensive.'], ['天気[てんき] が *よくない* です。', 'The weather isn\'t good.']] },
        { t: 'とても / あまり', x: '<b>とても</b> = very. <b>あまり</b> + negative = not very.', e: [['*とても* おいしい です。', 'It\'s very delicious.'], ['*あまり* 難[むずか]しくない です。', 'It\'s not very difficult.']] }
      ],
      dialog: {
        title: 'Apartment hunting', lines: [
          ['Agent', 'この 部屋[へや] は どう です か。', 'How about this room?'],
          ['You', 'うーん、 ちょっと 狭[せま]い です ね。', 'Hmm, it\'s a bit small.'],
          ['Agent', 'でも、 新[あたら]しい です よ。 駅[えき] から 近[ちか]い です。', 'But it\'s new. And it\'s close to the station.'],
          ['You', '家賃[やちん] は 高[たか]い です か。', 'Is the rent expensive?'],
          ['Agent', 'いいえ、 あまり 高[たか]くない です。 7万円[ななまんえん] です。', 'No, not very. ¥70,000.'],
          ['You', 'いい です ね。 じゃあ、 ここ に します。', 'Nice. Then I\'ll take this one.']
        ]
      },
      note: { t: 'Japanese apartments', x: 'Rooms are measured in <b>畳</b> (tatami mats, about 1.6 m²) and layouts are written like <b>1K</b> or <b>2LDK</b> (L = living, D = dining, K = kitchen). Renting often involves <b>礼金</b> — "key money", a non-refundable thank-you gift to the landlord!' },
      ex: [
        { mc: '"It\'s not expensive."', a: '高[たか]くない です。', o: ['高[たか]い じゃない です。', '高[たか]い ない です。', '高[たか]く です。'] },
        { mc: 'The negative of いい:', a: 'よくない', o: ['いくない', 'いいない', 'よいじゃない'] },
        { build: 'この 部屋[へや] は とても 広[ひろ]い です。', en: 'This room is very spacious.' },
        { mean: '日本語[にほんご] は あまり 難[むずか]しくない です。', a: 'Japanese isn\'t very difficult.', o: ['Japanese is very difficult.', 'Japanese is interesting.', 'Is Japanese difficult?'] },
        { resp: '日本[にほん] の 夏[なつ] は どう です か。', npcEn: 'What are Japanese summers like?', a: 'とても 暑[あつ]い です ね。', o: ['とても 暑[あつ]くない です ね。', 'あまり 暑[あつ]い です。'], why: 'あまり needs a negative.' },
        { fill: '駅[えき] は ＿ です。 歩[ある]いて 5分[ごふん] です。', a: '近[ちか]い', o: ['遠[とお]い', '古[ふる]い'], en: 'The station is close. It\'s a 5-minute walk.' }
      ],
      convo: 'apartment'
    },
    {
      id: 'L3-2', icon: '✨', title: 'な-Adjectives', sub: 'quiet, famous, convenient · 名',
      goals: ['Describe things with な-adjectives', 'Ask "how is it?" and "what kind of…?"', 'Talk about your hometown'],
      kanji: '名',
      words: [
        'きれい|pretty; clean',
        '静[しず]か|quiet',
        'にぎやか|lively, bustling',
        '有名[ゆうめい]|famous',
        '便利[べんり]|convenient',
        '不便[ふべん]|inconvenient',
        '元気[げんき]|healthy, energetic',
        '親切[しんせつ]|kind',
        'ひま|free (not busy)',
        '大切[たいせつ]|important, precious',
        '簡単[かんたん]|easy, simple',
        '町[まち]|town',
        'どんな|what kind of',
        'どう|how',
        '名前[なまえ]|name'
      ],
      grammar: [
        { t: 'な-adjectives', x: 'These work like nouns: add <b>な</b> before a noun and <b>です</b> at the end. Negative: <b>じゃないです</b>. Careful: きれい ends in い but is a な-adjective!', e: [['*静[しず]か な* 町[まち]', 'a quiet town'], ['東京[とうきょう] は *にぎやか* です。', 'Tokyo is lively.'], ['この 店[みせ] は *有名[ゆうめい] じゃ ない* です。', 'This shop isn\'t famous.'], ['*きれい な* 部屋[へや]', 'a clean room']] },
        { t: 'どう / どんな', x: '<b>どう</b> = how (is it)? <b>どんな</b> + noun = what kind of…? Link two な-adjectives with <b>で</b>.', e: [['京都[きょうと] は *どう* です か。', 'How is Kyoto?'], ['*どんな* 町[まち] です か。', 'What kind of town is it?'], ['静[しず]か *で* きれい な 町[まち] です。', 'It\'s a quiet, pretty town.']] }
      ],
      dialog: {
        title: 'Hometown talk', lines: [
          ['Yui', 'エマ さん の 町[まち] は どんな 町[まち] です か。', 'Emma, what\'s your hometown like?'],
          ['Emma', '小[ちい]さくて 静[しず]か な 町[まち] です。', 'It\'s a small, quiet town.'],
          ['Yui', '有名[ゆうめい] な もの は あります か。', 'Is it famous for anything?'],
          ['Emma', '古[ふる]い お城[しろ] が 有名[ゆうめい] です。 とても きれい です よ。', 'An old castle is famous. It\'s very beautiful.'],
          ['Yui', 'いい です ね。 便利[べんり] です か。', 'Nice. Is it convenient?'],
          ['Emma', 'うーん、 あまり 便利[べんり] じゃ ない です。 電車[でんしゃ] が 少[すく]ない です から。', 'Hmm, not very. There aren\'t many trains.']
        ], me: 'Emma'
      },
      note: { t: 'お元気ですか isn\'t "how are you?"', x: '<b>お元気ですか</b> is only for people you haven\'t seen in a while ("have you been well?"). Day to day, people just say こんにちは or comment on the weather. The reply: <b>おかげさまで元気です</b> ("I\'m well, thanks to you").' },
      ex: [
        { mc: '"a quiet room"', a: '静[しず]か な 部屋[へや]', o: ['静[しず]か 部屋[へや]', '静[しず]か の 部屋[へや]', '静[しず]かい 部屋[へや]'] },
        { mc: 'Which one is a な-adjective?', a: 'きれい', o: ['大[おお]きい', 'おいしい', '高[たか]い'] },
        { fill: 'この 町[まち] は 便利[べんり] ＿ ない です。', a: 'じゃ', o: ['く', 'な'], en: 'This town isn\'t convenient.' },
        { mean: '親切[しんせつ] な 人[ひと] です ね。', a: 'They\'re a kind person, aren\'t they?', o: ['Is that person kind?', 'That person is famous.', 'They\'re not very kind.'] },
        { build: '東京[とうきょう] は にぎやか な 町[まち] です。', en: 'Tokyo is a lively city.' },
        { resp: 'お元気[げんき] です か。', npcEn: '(an old friend) Have you been well?', a: 'はい、 おかげさま で 元気[げんき] です。', o: ['はい、 元気[げんき] な です。', 'いいえ、 きれい です。'] }
      ],
      convo: 'hometown'
    },
    {
      id: 'L3-3', icon: '🏯', title: 'How Was It?', sub: 'Past adjectives · ～くて / ～で · 長',
      goals: ['Describe past experiences: it was fun, it wasn\'t expensive', 'Link adjectives: cheap and tasty', 'Talk about a trip'],
      kanji: '長',
      words: [
        '楽[たの]しい|fun',
        '景色[けしき]|scenery, view',
        '温泉[おんせん]|hot spring',
        '旅館[りょかん]|Japanese inn',
        '神社[じんじゃ]|shrine',
        '長[なが]い|long',
        '短[みじか]い|short',
        '最高[さいこう]|the best',
        '素敵[すてき]|lovely',
        '怖[こわ]い|scary',
        'うるさい|noisy, annoying',
        'まあまあ|so-so',
        '気持[きも]ち いい|feels good',
        '熱[あつ]い|hot (to the touch)'
      ],
      grammar: [
        { t: 'Past of い-adjectives', x: '<b>～い → ～かった です</b> (was) and <b>～くなかった です</b> (wasn\'t). いい → <b>よかった</b>.', e: [['旅行[りょこう] は *楽[たの]しかった* です。', 'The trip was fun.'], ['ホテル は *高[たか]くなかった* です。', 'The hotel wasn\'t expensive.'], ['天気[てんき] が *よかった* です。', 'The weather was good.']] },
        { t: 'Past of な-adjectives and nouns', x: '<b>～でした</b> (was), <b>～じゃなかった です</b> (wasn\'t).', e: [['温泉[おんせん] は *静[しず]か でした*。', 'The hot spring was quiet.'], ['お寺[てら] は あまり *きれい じゃ なかった* です。', 'The temple wasn\'t very pretty.']] },
        { t: 'Linking adjectives: ～くて / ～で', x: 'To say "A and B": い-adjectives drop い and add <b>くて</b>; な-adjectives add <b>で</b>.', e: [['*安[やす]くて* おいしい です。', 'It\'s cheap and tasty.'], ['*静[しず]か で* きれい でした。', 'It was quiet and pretty.']] }
      ],
      dialog: {
        title: 'Back from Hakone', lines: [
          ['Ken', '箱根[はこね] は どう でした か。', 'How was Hakone?'],
          ['You', '最高[さいこう] でした！ 景色[けしき] が とても きれい でした。', 'It was the best! The scenery was beautiful.'],
          ['Ken', '温泉[おんせん] は？', 'And the hot springs?'],
          ['You', '気持[きも]ち よかった です。 でも、 ちょっと 熱[あつ]かった です。', 'They felt great. But a bit hot.'],
          ['Ken', '旅館[りょかん] は 高[たか]かった です か。', 'Was the ryokan expensive?'],
          ['You', 'いいえ、 あまり 高[たか]くなかった です。 料理[りょうり] も 安[やす]くて おいしかった です よ。', 'No, not too expensive. And the food was cheap and delicious.']
        ]
      },
      note: { t: 'Onsen etiquette', x: 'Wash thoroughly at the showers <i>before</i> getting in, no swimsuits, and keep your small towel out of the water (people put it on their heads!). Some onsen refuse tattoos — look for <b>タトゥーOK</b> signs or private baths (<b>貸切風呂</b>).' },
      ex: [
        { mc: '"It was fun."', a: '楽[たの]しかった です。', o: ['楽[たの]しい でした。', '楽[たの]しく でした。', '楽[たの]しかった でした。'] },
        { mc: '"The weather was good."', a: '天気[てんき] が よかった です。', o: ['天気[てんき] が いかった です。', '天気[てんき] が いい でした。', '天気[てんき] が よく でした。'] },
        { fill: '駅[えき] は 静[しず]か ＿。', a: 'でした', o: ['かった です', 'くて'], en: 'The station was quiet.' },
        { fill: 'この 店[みせ] は 安[やす]＿ おいしい です。', a: 'くて', o: ['いて', 'で'], en: 'This shop is cheap and tasty.' },
        { build: '旅行[りょこう] は とても 楽[たの]しかった です。', en: 'The trip was really fun.' },
        { resp: '映画[えいが] は どう でした か。', npcEn: 'How was the movie?', a: 'まあまあ でした。', o: ['まあまあ かった です。', '映画[えいが] です。'] }
      ],
      convo: 'trip-report'
    },
    {
      id: 'L3-4', icon: '⚽', title: 'Likes, Dislikes & Skills', sub: '好き · 上手 · 得意 · 好',
      goals: ['Say what you like and dislike', 'Talk about hobbies and skills', 'Respond modestly to compliments'],
      kanji: '好',
      words: [
        '好[す]き|like',
        '大好[だいす]き|love, really like',
        '嫌[きら]い|dislike',
        '上手[じょうず]|good at (said of others)',
        '下手[へた]|bad at',
        '得意[とくい]|good at, strong point',
        '苦手[にがて]|weak at, not a fan of',
        '趣味[しゅみ]|hobby',
        'スポーツ|sports',
        'サッカー|soccer',
        '野球[やきゅう]|baseball',
        '歌[うた]|song',
        'ゲーム|game',
        'アニメ|anime',
        '料理[りょうり]|cooking, cuisine',
        '野菜[やさい]|vegetables'
      ],
      grammar: [
        { t: 'N が 好[す]きです', x: 'Likes use <b>が</b>, not を! Same with 嫌い, 上手, 下手, 得意 and 苦手.', e: [['猫[ねこ] *が* 好[す]き です。', 'I like cats.'], ['野菜[やさい] *が* 嫌[きら]い です。', 'I don\'t like vegetables.'], ['料理[りょうり] *が* 上手[じょうず] です ね！', 'You\'re a good cook!']] },
        { t: '上手[じょうず] vs 得意[とくい] — be humble', x: 'Don\'t call yourself <b>上手</b> — it sounds like bragging. Use <b>得意</b> for your strengths. When praised, deflect: <b>いえいえ、まだまだです</b> ("no, no, I still have a long way to go").', e: [['日本語[にほんご]、 上手[じょうず] です ね！', 'Your Japanese is good!'], ['*いえいえ、 まだまだ です*。', 'Oh no, I still have a long way to go.'], ['料理[りょうり] が *得意[とくい]* です。', 'Cooking is my strong point.']] },
        { t: 'どんな N が好[す]きですか', x: 'Ask about preferences with <b>どんな</b>.', e: [['*どんな* 音楽[おんがく] が 好[す]き です か。', 'What kind of music do you like?'], ['趣味[しゅみ] は 何[なん] です か。', 'What are your hobbies?']] }
      ],
      dialog: {
        title: 'Getting to know a coworker', lines: [
          ['Sato', '趣味[しゅみ] は 何[なん] です か。', 'What are your hobbies?'],
          ['You', 'アニメ と ゲーム が 大好[だいす]き です。 佐藤[さとう] さん は？', 'I love anime and games. How about you?'],
          ['Sato', 'わたし は スポーツ が 好[す]き です。 特[とく]に 野球[やきゅう] が 好[す]き です。', 'I like sports. Especially baseball.'],
          ['You', 'へえ、 野球[やきゅう] が 上手[じょうず] です か。', 'Oh, are you good at baseball?'],
          ['Sato', 'いえいえ、 下手[へた] です よ。 見[み]る の が 好[す]き です。', 'No, no, I\'m bad at it. I like watching.'],
          ['Sato', 'ところで、 日本語[にほんご]、 上手[じょうず] です ね！', 'By the way, your Japanese is good!'],
          ['You', 'いえいえ、 まだまだ です。', 'Oh no, I still have a long way to go.']
        ]
      },
      note: { t: '"Your Japanese is so good!"', x: 'You\'ll hear <b>日本語上手ですね！</b> after saying just ありがとう. It\'s friendly encouragement. Answering <b>いえいえ、まだまだです</b> with a smile will impress people even more!' },
      ex: [
        { fill: 'わたし は 猫[ねこ] ＿ 好[す]き です。', a: 'が', o: ['を', 'に'], en: 'I like cats.' },
        { resp: '日本語[にほんご]、 上手[じょうず] です ね！', npcEn: 'Your Japanese is good!', a: 'いえいえ、 まだまだ です。', o: ['はい、 上手[じょうず] です。', 'はい、 わたし は 上手[じょうず] です よ。'], why: 'Be modest!' },
        { mc: 'Talking about your own strength politely:', a: '料理[りょうり] が 得意[とくい] です。', o: ['料理[りょうり] が 上手[じょうず] です。', '料理[りょうり] を 好[す]き です。', '料理[りょうり] が 下手[へた] です。'] },
        { build: 'どんな 音楽[おんがく] が 好[す]き です か。', en: 'What kind of music do you like?' },
        { mean: '野菜[やさい] が あまり 好[す]き じゃ ない です。', a: 'I don\'t really like vegetables.', o: ['I love vegetables.', 'Vegetables are expensive.', 'Do you like vegetables?'] },
        { say: '趣味[しゅみ] は 何[なん] です か。', en: 'What are your hobbies?' }
      ],
      convo: 'hobbies'
    },
    {
      id: 'L3-5', icon: '🗻', title: 'I Want…', sub: 'ほしい · ～たい · 国 語',
      goals: ['Say what you want with ほしい', 'Say what you want to do with ～たい', 'Offer things politely with いかがですか'],
      kanji: '国語',
      words: [
        'ほしい|want (a thing)',
        '～ たい|want to (do)',
        '外国[がいこく]|foreign country',
        '国[くに]|country; home country',
        '～語[ご]|~ language',
        '中国語[ちゅうごくご]|Chinese (language)',
        '韓国[かんこく]|South Korea',
        'フランス|France',
        '留学[りゅうがく]|studying abroad',
        '将来[しょうらい]|the future',
        '世界[せかい]|world',
        '富士山[ふじさん]|Mt. Fuji',
        '登[のぼ]ります|climb',
        '一番[いちばん]|most, number one',
        'いかが です か|how about…? (polite offer)'
      ],
      grammar: [
        { t: 'N が ほしいです — I want N', x: '<b>ほしい</b> is an い-adjective for wanting <i>things</i>. It takes <b>が</b>.', e: [['新[あたら]しい スマホ が *ほしい* です。', 'I want a new smartphone.'], ['今[いま]、 何[なに] が 一番[いちばん] *ほしい* です か。', 'What do you want most right now?']] },
        { t: 'V-たい — want to do', x: 'Take the ます-stem (食べ<s>ます</s>) and add <b>たいです</b>. It conjugates like an い-adjective: 行きたくない (don\'t want to go), 行きたかった (wanted to go).', e: [['日本[にほん] に *行[い]きたい* です。', 'I want to go to Japan.'], ['すし が *食[た]べたい* です。', 'I want to eat sushi.'], ['今日[きょう] は 何[なに] も *したくない* です。', 'I don\'t want to do anything today.']] },
        { t: 'Offering: いかがですか', x: 'Asking someone higher-status <b>～たいですか</b> ("do you want…?") can sound too direct. Offer things with <b>いかがですか</b> or invite with <b>～ませんか</b>.', e: [['コーヒー は *いかが です か*。', 'Would you like some coffee?']] }
      ],
      dialog: {
        title: 'Dream trip', lines: [
          ['Yui', '休[やす]み に 何[なに] が したい です か。', 'What do you want to do on your vacation?'],
          ['You', '富士山[ふじさん] に 登[のぼ]りたい です！', 'I want to climb Mt. Fuji!'],
          ['Yui', 'すごい！ わたし は 外国[がいこく] に 行[い]きたい です。', 'Amazing! I want to go abroad.'],
          ['You', 'どこ の 国[くに] に 行[い]きたい です か。', 'Which country do you want to go to?'],
          ['Yui', 'フランス です。 フランス語[ご] も 勉強[べんきょう] したい です。', 'France. I want to study French too.'],
          ['You', 'いい です ね。 お土産[みやげ] が ほしい です！', 'Nice. I want a souvenir!']
        ]
      },
      note: { t: 'Climbing Mt. Fuji', x: 'Mt. Fuji is open for climbing only from July to early September. Many people climb overnight to see the sunrise from the top — <b>ご来光</b>. A Japanese saying goes: "A wise person climbs Fuji once; only a fool climbs it twice!"' },
      ex: [
        { fill: '新[あたら]しい かばん ＿ ほしい です。', a: 'が', o: ['を', 'に'], en: 'I want a new bag.' },
        { mc: '"I want to drink water."', a: '水[みず] が 飲[の]みたい です。', o: ['水[みず] が 飲[の]みます たい です。', '水[みず] が 飲[の]みほしい です。', '水[みず] を 飲[の]むたい です。'] },
        { mc: '"I don\'t want to go."', a: '行[い]きたくない です。', o: ['行[い]きたい じゃない です。', '行[い]きません たい です。', '行[い]きたいない です。'] },
        { build: '日本[にほん] で 働[はたら]きたい です。', en: 'I want to work in Japan.' },
        { resp: 'コーヒー は いかが です か。', npcEn: 'Would you like some coffee?', a: 'ありがとう ございます。 いただきます。', o: ['はい、 ほしい です か。', 'コーヒー が 好[す]き じゃ ありません か。'] },
        { mean: '何[なに] が 食[た]べたい です か。', a: 'What do you want to eat?', o: ['What did you eat?', 'Do you want to eat?', 'What do you like to eat?'] }
      ],
      convo: 'travel-plans'
    },
    {
      id: 'L3-6', icon: '🧮', title: 'Counting People & Things', sub: '人 · 枚 · 本 · 杯 · 歳 · 男 女 子',
      goals: ['Count people (ひとり, ふたり, さんにん…)', 'Use common counters for tickets, bottles and cups', 'Ask and say ages'],
      kanji: '男女子',
      words: [
        '一人[ひとり]|one person',
        '二人[ふたり]|two people',
        '～人[にん]|~ people (three or more)',
        '何人[なんにん]|how many people',
        '～枚[まい]|counter for flat things (tickets, paper, shirts)',
        '～本[ほん]|counter for long things (bottles, pens)',
        '～個[こ]|counter for small objects',
        '～杯[はい]|counter for cups and glasses',
        '～歳[さい]|~ years old',
        '何歳[なんさい]|how old',
        '男[おとこ] の 人[ひと]|man',
        '女[おんな] の 人[ひと]|woman',
        '男[おとこ] の 子[こ]|boy',
        '女[おんな] の 子[こ]|girl',
        '大人[おとな]|adult',
        '二十歳[はたち]|20 years old'
      ],
      grammar: [
        { t: 'Counting people', x: '<b>ひとり</b> (1), <b>ふたり</b> (2), then number + <b>にん</b>: さんにん, <b>よにん</b> (4!), ごにん… Restaurants ask <b>何名様ですか</b> — answer with ～人です.', e: [['*二人[ふたり]* です。', 'Two people. (at a restaurant)'], ['家族[かぞく] は *四人[よにん]* です。', 'There are four of us in my family.']] },
        { t: 'Common counters', x: 'Japanese counts by shape: <b>枚</b> flat things, <b>本</b> long things, <b>個</b> small objects, <b>杯</b> cups and bowls. Watch the sound changes: いっぽん, にほん, <b>さんぼん</b>, ろっぽん; いっぱい, にはい, <b>さんばい</b>. Stuck? ひとつ・ふたつ works for most things!', e: [['切符[きっぷ] を *二枚[にまい]* ください。', 'Two tickets, please.'], ['ビール を *三本[さんぼん]* ください。', 'Three bottles of beer, please.'], ['ごはん を もう *一杯[いっぱい]*。', 'Another bowl of rice.']] },
        { t: 'Age: ～歳[さい]', x: '1 いっさい, 8 はっさい, 10 じゅっさい — and 20 is special: <b>はたち</b>. Polite question: <b>おいくつですか</b>.', e: [['*何歳[なんさい]* です か。', 'How old are you?'], ['*二十歳[はたち]* です。', 'I\'m 20.']] }
      ],
      dialog: {
        title: 'At a family restaurant', lines: [
          ['Staff', 'いらっしゃいませ。 何名[なんめい] 様[さま] です か。', 'Welcome. How many in your party?'],
          ['You', '三人[さんにん] です。 大人[おとな] 二人[ふたり] と 子[こ]ども 一人[ひとり] です。', 'Three. Two adults and one child.'],
          ['Staff', 'お子[こ]さま は 何歳[なんさい] です か。', 'How old is the child?'],
          ['You', '五歳[ごさい] です。 子[こ]ども の いす は あります か。', 'Five. Do you have a child\'s chair?'],
          ['Staff', 'はい、 ございます。 お飲[の]み物[もの] は？', 'Yes, we do. Drinks?'],
          ['You', '生[なま]ビール を 二杯[にはい] と、 オレンジジュース を 一[ひと]つ ください。', 'Two draft beers and one orange juice, please.']
        ]
      },
      note: { t: 'Toilet signs!', x: 'You now know <b>男</b> (man) and <b>女</b> (woman) — the two most important kanji on restroom doors. In family restaurants (<b>ファミレス</b>) there\'s usually an <b>お子様ランチ</b> (kids\' plate), and the classic first order at a bar is <b>とりあえず生</b> — "a draft beer for now"!' },
      ex: [
        { mc: 'Four people:', a: 'よにん', o: ['よんにん', 'しにん', 'よっにん'] },
        { mc: 'Counter for tickets (flat things):', a: '枚[まい]', o: ['本[ほん]', '個[こ]', '杯[はい]'] },
        { mc: '"Three bottles"', a: 'さんぼん', o: ['さんほん', 'さんぽん', 'さんまい'] },
        { resp: '何名[なんめい] 様[さま] です か。', npcEn: 'How many people?', a: '二人[ふたり] です。', o: ['二[ふた]つ です。', '二歳[にさい] です。'] },
        { mean: '女[おんな] の 子[こ] が 二人[ふたり] います。', a: 'There are two girls.', o: ['There are two women.', 'I have two sons.', 'Two girls are coming.'] },
        { build: '切符[きっぷ] を 二枚[にまい] ください。', en: 'Two tickets, please.' }
      ],
      convo: 'family-restaurant'
    },
    {
      id: 'L3-7', icon: '⚖️', title: 'Which Is Better?', sub: 'より · のほうが · 一番 · 多 少',
      goals: ['Compare two things', 'Ask "which do you prefer?"', 'Say what you like most'],
      kanji: '多少',
      words: [
        '～ より|than ~',
        '～ の ほう が|~ is more…',
        'どちら|which (of two)',
        '同[おな]じ|same',
        '多[おお]い|many, a lot',
        '少[すく]ない|few, not many',
        '速[はや]い|fast',
        '遅[おそ]い|slow; late',
        '安全[あんぜん]|safe',
        '季節[きせつ]|season',
        'もっと|more',
        'どうして|why',
        'たこ焼[や]き|takoyaki (octopus balls)'
      ],
      grammar: [
        { t: 'A は B より ～ — A is more ~ than B', x: '<b>より</b> = "than". The adjective itself doesn\'t change!', e: [['新幹線[しんかんせん] は バス *より* 速[はや]い です。', 'The shinkansen is faster than the bus.'], ['東京[とうきょう] は 大阪[おおさか] *より* 大[おお]きい です。', 'Tokyo is bigger than Osaka.']] },
        { t: 'AとBとどちらが～ですか', x: 'Ask "which is more…, A or B?" and answer with <b>～のほうが</b>.', e: [['コーヒー と 紅茶[こうちゃ] と *どちら* が 好[す]き です か。', 'Which do you prefer, coffee or tea?'], ['コーヒー *の ほう が* 好[す]き です。', 'I prefer coffee.'], ['*どちら も* 好[す]き です。', 'I like both.']] },
        { t: '～の中[なか]で ～が一番[いちばん]', x: 'Superlatives: "among ~, X is the most".', e: [['日本[にほん] の 食[た]べ物[もの] の 中[なか] で 何[なに] が *一番[いちばん]* 好[す]き です か。', 'What\'s your favorite Japanese food?'], ['すし が *一番[いちばん]* 好[す]き です。', 'I like sushi the most.']] }
      ],
      dialog: {
        title: 'Tokyo or Osaka?', lines: [
          ['Ken', '東京[とうきょう] と 大阪[おおさか] と どちら が 好[す]き です か。', 'Which do you like better, Tokyo or Osaka?'],
          ['You', 'うーん、 大阪[おおさか] の ほう が 好[す]き です。', 'Hmm, I prefer Osaka.'],
          ['Ken', 'どうして です か。', 'Why?'],
          ['You', '東京[とうきょう] より 人[ひと] が 少[すく]ない です から。 それに、 食[た]べ物[もの] が 安[やす]くて おいしい です！', 'There are fewer people than in Tokyo. Plus, the food is cheap and tasty!'],
          ['Ken', 'たしかに。 大阪[おおさか] の 食[た]べ物[もの] の 中[なか] で 何[なに] が 一番[いちばん] 好[す]き です か。', 'True. What\'s your favorite Osaka food?'],
          ['You', 'たこ焼[や]き が 一番[いちばん] です！', 'Takoyaki is number one!']
        ]
      },
      note: { t: 'Tokyo vs. Osaka', x: 'A friendly rivalry: Osaka people are known as funnier and more direct, they stand on the RIGHT side of escalators (Tokyo: left), and the city\'s motto is <b>食い倒れ</b> — "eat until you drop".' },
      ex: [
        { fill: '電車[でんしゃ] は バス ＿ 速[はや]い です。', a: 'より', o: ['の ほう が', 'から'], en: 'The train is faster than the bus.' },
        { resp: '犬[いぬ] と 猫[ねこ] と どちら が 好[す]き です か。', npcEn: 'Which do you prefer, dogs or cats?', a: '猫[ねこ] の ほう が 好[す]き です。', o: ['猫[ねこ] より 好[す]き です。', '猫[ねこ] が 一番[いちばん] です か。'] },
        { mc: '"Summer is the season I like most."', a: '夏[なつ] が 一番[いちばん] 好[す]き です。', o: ['夏[なつ] が より 好[す]き です。', '夏[なつ] の ほう が 好[す]き です。', '夏[なつ] は 好[す]き 一番[いちばん] です。'] },
        { build: '東京[とうきょう] は 京都[きょうと] より 人[ひと] が 多[おお]い です。', en: 'Tokyo has more people than Kyoto.' },
        { mean: 'どちら も 同[おな]じ です。', a: 'They\'re both the same.', o: ['Neither is good.', 'Which one is the same?', 'I like both.'] },
        { say: 'どちら が いい です か。', en: 'Which one is better?' }
      ],
      convo: 'electronics'
    },
    {
      id: 'L3-8', icon: '☔', title: 'Weather & Seasons', sub: 'でしょう · small talk · 天 気 雨',
      goals: ['Make weather small talk', 'Understand forecasts with でしょう', 'Talk about the four seasons'],
      kanji: '天気雨',
      words: [
        '天気[てんき]|weather',
        '雨[あめ]|rain',
        '雪[ゆき]|snow',
        '晴[は]れ|sunny, clear',
        '曇[くも]り|cloudy',
        '台風[たいふう]|typhoon',
        '春[はる]|spring',
        '夏[なつ]|summer',
        '秋[あき]|autumn',
        '冬[ふゆ]|winter',
        '暑[あつ]い|hot (weather)',
        '寒[さむ]い|cold (weather)',
        '暖[あたた]かい|warm',
        '涼[すず]しい|cool',
        '天気[てんき] 予報[よほう]|weather forecast',
        '降[ふ]ります|fall (rain, snow)'
      ],
      grammar: [
        { t: 'Weather small talk', x: 'The weather is THE safe small-talk topic. Make a comment and add <b>ね</b>.', e: [['今日[きょう] は 暑[あつ]い です *ね*。', 'Hot today, isn\'t it?'], ['よく 降[ふ]ります *ね*。', 'It keeps raining, doesn\'t it?']] },
        { t: '～でしょう — probably', x: '<b>でしょう</b> = "probably / I suppose" — weather forecasts love it. With a rising tone, <b>でしょう？</b> means "…right?"', e: [['明日[あした] は 雨[あめ] *でしょう*。', 'It will probably rain tomorrow.'], ['午後[ごご] は 晴[は]れ *でしょう*。', 'It will probably be sunny in the afternoon.']] }
      ],
      dialog: {
        title: 'Rainy season', lines: [
          ['Neighbor', 'よく 降[ふ]ります ね。', 'It keeps raining, doesn\'t it?'],
          ['You', 'そう です ね。 梅雨[つゆ] です から ね。', 'It does. It\'s the rainy season, after all.'],
          ['Neighbor', '明日[あした] も 雨[あめ] でしょう か。', 'I wonder if it\'ll rain tomorrow too.'],
          ['You', '天気[てんき] 予報[よほう] で は、 明日[あした] は 晴[は]れ です よ。', 'According to the forecast, tomorrow will be sunny.'],
          ['Neighbor', 'よかった！ 洗濯[せんたく] が できます ね。', 'Great! I can do laundry.'],
          ['You', 'でも、 来週[らいしゅう] は 台風[たいふう] が 来[き]ます よ。', 'But a typhoon is coming next week.']
        ]
      },
      note: { t: 'Japan\'s seasons', x: '<b>梅雨</b> (rainy season, June–July), humid summers, typhoons (August–October), stunning autumn leaves (<b>紅葉</b>), snowy winters in the north, and cherry blossoms (<b>桜</b>) in spring — with the news tracking the "sakura front" across the country!' },
      ex: [
        { mean: '明日[あした] は 雪[ゆき] でしょう。', a: 'It will probably snow tomorrow.', o: ['It snowed yesterday.', 'It\'s snowing now.', 'Will it snow tomorrow?'] },
        { mc: 'Small talk on a hot day:', a: '暑[あつ]い です ね。', o: ['暑[あつ]い です よ。', '暑[あつ]い です か。', '暑[あつ]くない です。'], why: 'ね invites agreement — perfect for small talk.' },
        { resp: '寒[さむ]い です ね。', npcEn: 'Cold, isn\'t it?', a: '本当[ほんとう] に 寒[さむ]い です ね。', o: ['いいえ、 寒[さむ]い です。', 'はい、 暑[あつ]い です。'] },
        { mc: 'Which season is 秋?', a: 'autumn', o: ['spring', 'summer', 'winter'] },
        { fill: '明日[あした] は 晴[は]れ ＿。', a: 'でしょう', o: ['ましょう', 'ません'], en: 'Tomorrow will probably be sunny.' },
        { build: '午後[ごご] から 雨[あめ] が 降[ふ]ります。', en: 'It will rain from the afternoon.' }
      ],
      convo: 'weather-chat'
    },
    {
      id: 'L3-9', icon: '👕', title: 'Shopping for Clothes', sub: 'Colors · sizes · ～の · 白 店',
      goals: ['Ask for other sizes and colors', 'Ask to try something on', 'Decide what to buy with ～にします'],
      kanji: '白店',
      words: [
        '色[いろ]|color',
        '白[しろ]い|white',
        '黒[くろ]い|black',
        '赤[あか]い|red',
        '青[あお]い|blue',
        '黄色[きいろ]い|yellow',
        'サイズ|size',
        'シャツ|shirt',
        'ズボン|trousers',
        'スカート|skirt',
        '靴下[くつした]|socks',
        '試着[しちゃく]|trying on (clothes)',
        '店[みせ]|shop',
        '店員[てんいん]|shop staff',
        'ちょうど いい|just right'
      ],
      grammar: [
        { t: 'Asking for other options', x: '<b>～はありますか</b> = "Do you have ~?". <b>の</b> can replace a noun: 大きいの = "a big one".', e: [['もう 少[すこ]し 大[おお]きい *の* は あります か。', 'Do you have a slightly bigger one?'], ['白[しろ]い *の* を ください。', 'The white one, please.'], ['ほか の 色[いろ] は あります か。', 'Do you have other colors?']] },
        { t: '～てもいいですか (preview) & ～にします', x: '<b>試着してもいいですか</b> = "May I try it on?" — you\'ll master this pattern in Level 4. <b>～にします</b> = "I\'ll go with ~" (making a decision).', e: [['試着[しちゃく] して も いい です か。', 'May I try this on?'], ['じゃあ、 これ *に します*。', 'OK, I\'ll take this one.']] }
      ],
      dialog: {
        title: 'At a clothing store', lines: [
          ['Staff', 'いらっしゃいませ。 何[なに] か お探[さが]し です か。', 'Welcome. Are you looking for something?'],
          ['You', '白[しろ]い シャツ が ほしい です。', 'I want a white shirt.'],
          ['Staff', 'こちら は いかが です か。', 'How about this one?'],
          ['You', 'いい です ね。 試着[しちゃく] して も いい です か。', 'Nice. May I try it on?'],
          ['Staff', 'はい、 どうぞ。 試着室[しちゃくしつ] は あちら です。', 'Of course. The fitting room is over there.'],
          ['You', '… ちょっと 小[ちい]さい です。 もう 少[すこ]し 大[おお]きい の は あります か。', '…It\'s a bit small. Do you have a slightly bigger one?'],
          ['Staff', 'L[エル] サイズ も ございます。', 'We also have size L.'],
          ['You', '… ちょうど いい です。 これ に します。', '…It\'s just right. I\'ll take it.']
        ]
      },
      note: { t: 'Sizes and tax-free shopping', x: 'Japanese clothes run small — a Western M is often a Japanese L. Shoe sizes are in centimeters (26.5 ≈ US men\'s 8.5). Tourists can shop <b>免税</b> (tax-free) in many big stores — bring your passport. Take your shoes off before entering a fitting room!' },
      ex: [
        { mc: '"Do you have a slightly bigger one?"', a: 'もう 少[すこ]し 大[おお]きい の は あります か。', o: ['もう 少[すこ]し 大[おお]きい です か。', '大[おお]きい が あります か。', 'もっと 大[おお]きい を ください か。'] },
        { fill: '＿ シャツ を ください。', a: '白[しろ]い', o: ['白[しろ]く', '白[しろ]な'], en: 'A white shirt, please.' },
        { resp: 'こちら は いかが です か。', npcEn: 'How about this one?', a: 'ほか の 色[いろ] は あります か。', o: ['ほか の 色[いろ] が ほしい です か。', 'いかが です。'] },
        { build: 'じゃあ、 これ に します。', en: 'OK, I\'ll take this one.' },
        { mean: '黒[くろ]い 靴[くつ] が ほしい です。', a: 'I want black shoes.', o: ['I have black shoes.', 'Do you have black shoes?', 'These shoes are black.'] },
        { say: '試着[しちゃく] して も いい です か。', en: 'May I try it on?' }
      ],
      convo: 'clothes-shop'
    },
    {
      id: 'L3-10', icon: '🏨', title: 'Review: Hotel Check-in', sub: 'Putting Level 3 together · 山 川',
      goals: ['Check into a hotel or ryokan', 'Make requests about your room', 'Ask about breakfast and facilities'],
      kanji: '山川',
      words: [
        '予約[よやく]|reservation',
        'チェックイン|check-in',
        'チェックアウト|check-out',
        'パスポート|passport',
        'フロント|front desk',
        '朝食[ちょうしょく]|breakfast (formal)',
        '～付[つ]き|with ~ included',
        '荷物[にもつ]|luggage',
        '預[あず]けます|leave (in someone\'s care)',
        '山[やま]|mountain',
        '川[かわ]|river',
        '眺[なが]め|view',
        '禁煙[きんえん]|non-smoking',
        '～泊[はく]|~ nights (stay)'
      ],
      grammar: [
        { t: 'Review: describe, want, compare', x: 'In Level 3 you learned adjectives (い & な, present & past), likes (が好き), wants (ほしい・たい), counters, comparisons and weather talk. A hotel check-in pulls many of them together.', e: [['山[やま] が 見[み]える 部屋[へや] が いい です。', 'I\'d like a room with a mountain view.'], ['荷物[にもつ] を 預[あず]けたい です。', 'I\'d like to leave my luggage.'], ['朝食[ちょうしょく] は 何時[なんじ] から です か。', 'From what time is breakfast?']] }
      ],
      dialog: {
        title: 'Checking in', lines: [
          ['Staff', 'いらっしゃいませ。 チェックイン です か。', 'Welcome. Checking in?'],
          ['You', 'はい。 予約[よやく] した スミス です。', 'Yes. I have a reservation under Smith.'],
          ['Staff', 'スミス 様[さま]、 二泊[にはく] で、 朝食[ちょうしょく] 付[つ]き です ね。 パスポート を おねがいします。', 'Mr./Ms. Smith — two nights, breakfast included. Your passport, please.'],
          ['You', 'はい、 どうぞ。 あの、 川[かわ] が 見[み]える 部屋[へや] は あります か。', 'Here you go. Um, do you have a room with a river view?'],
          ['Staff', 'はい、 ございます。 8階[はっかい] の お部屋[へや] です。 眺[なが]め が とても いい です よ。', 'Yes, we do. A room on the 8th floor. The view is wonderful.'],
          ['You', 'うれしい です！ 朝食[ちょうしょく] は 何時[なんじ] から です か。', 'Great! From what time is breakfast?'],
          ['Staff', '6時[ろくじ] 半[はん] から 10時[じゅうじ] まで です。', 'From 6:30 to 10:00.']
        ]
      },
      note: { t: 'Ryokan vs. business hotel', x: 'In a <b>旅館</b> you sleep on futons laid on tatami, wear a <b>浴衣</b>, and dinner is often a multi-course <b>懐石</b> meal. <b>ビジネスホテル</b> are small, spotless and cheap — perfect for travelers. Many hotels will keep your luggage before check-in.' },
      ex: [
        { resp: 'チェックイン です か。', npcEn: 'Checking in?', a: 'はい。 予約[よやく] した スミス です。', o: ['はい、 チェックアウト です。', 'いいえ、 予約[よやく] が ほしい です。'] },
        { mc: '"I\'d like to leave my luggage."', a: '荷物[にもつ] を 預[あず]けたい です。', o: ['荷物[にもつ] が ほしい です。', '荷物[にもつ] を 預[あず]けます か。', '荷物[にもつ] は 大[おお]きい です。'] },
        { mean: '朝食[ちょうしょく] 付[つ]き です。', a: 'Breakfast is included.', o: ['Breakfast is extra.', 'Breakfast starts at 7.', 'There is no breakfast.'] },
        { fill: 'この 部屋[へや] は あの 部屋[へや] ＿ 広[ひろ]い です。', a: 'より', o: ['で', 'が'], en: 'This room is bigger than that room.' },
        { build: '山[やま] が 見[み]える 部屋[へや] が いい です。', en: 'I\'d like a room with a mountain view.' },
        { mean: '昨日[きのう] の 旅館[りょかん] は 静[しず]か で、 料理[りょうり] も おいしかった です。', a: 'Yesterday\'s inn was quiet, and the food was delicious too.', o: ['The inn is noisy but the food is good.', 'I want to stay at a quiet inn.', 'The food at the inn wasn\'t good.'] }
      ],
      convo: 'hotel-checkin'
    }
  ]
});
