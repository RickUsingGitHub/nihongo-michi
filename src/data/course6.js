/* Level 6 — JLPT N4: everyday fluency. Grammar units with dialogues and readings.
 * Vocabulary and kanji for N4 are learned through the N4 decks (Review & Learn). */
(function () {
  const G = (t, m, f, x, ...e) => ({ t, m, f, x, e });
  JT.addLevel({
    n: 6, jlpt: 4, tag: 'N4', icon: '🌿', color: '#2c8a57',
    title: 'N4 · Everyday Fluency', jp: '日常会話をなめらかに',
    desc: 'The grammar that makes everyday Japanese flow: potential, volitional, conditionals, giving and receiving favors, passive and causative, "looks like / I heard", and your first keigo.',
    cando: ['Say what you can and can\'t do', 'Make suggestions and talk about intentions', 'Use "if" and "when" in four different ways', 'Ask for and do favors', 'Report things you heard or that seem to be so', 'Speak politely to customers, bosses and teachers'],
    lessons: [
      {
        id: 'N4-1', icon: '🏊', title: 'Can You? The Potential Form', sub: '可能形 · ようになる · 見える',
        goals: ['Say what you can and can\'t do with the potential form', 'Describe changes with ～ようになる', 'Use 見える and 聞こえる'],
        words: ['泳[およ]げる|can swim', '眠[ねむ]れる|can sleep', '見[み]える|can be seen, be visible', '聞[き]こえる|can be heard', '音[おと]|sound', '運転[うんてん]|driving', '免許[めんきょ]|license', 'やっと|finally, at last'],
        grammar: [
          G('Potential form ～られる / ～える', 'can do', 'Ru-verbs: 食べる → 食べられる · U-verbs: last う-sound → え-sound + る (書く → 書ける, 話す → 話せる, 待つ → 待てる) · する → できる · 来る → 来[こ]られる',
            'The potential form says what someone <b>can</b> do. The object often switches from を to <b>が</b>. In casual speech many people drop the ら: 見れる, 来れる (<i>ra-nuki kotoba</i>).',
            ['刺身[さしみ] が *食[た]べられます* か。', 'Can you eat sashimi?'], ['漢字[かんじ] が 少[すこ]し *書[か]けます*。', 'I can write a few kanji.'], ['明日[あした] は *来[こ]られません*。', 'I can\'t come tomorrow.']),
          G('～ようになる', 'come to (be able to) do', 'Potential / dictionary form + ようになる · negative: ～なくなる',
            'Describes a <b>change</b> over time in ability or habit.',
            ['日本語[にほんご] が 話[はな]せる *よう に なりました*。', 'I\'ve become able to speak Japanese.'], ['毎朝[まいあさ] 走[はし]る *よう に なりました*。', 'I\'ve started running every morning.'], ['最近[さいきん]、 夜[よる] 眠[ねむ]れ *なく なりました*。', 'Lately I can\'t sleep at night anymore.']),
          G('見[み]える・聞[き]こえる', 'be visible / be audible', 'N が 見える / 聞こえる',
            '見える and 聞こえる are for things that naturally come into view or reach your ears. 見られる / 聞ける mean you have the <i>chance</i> to see or hear something.',
            ['窓[まど] から 富士山[ふじさん] が *見[み]えます*。', 'You can see Mt. Fuji from the window.'], ['隣[となり] の 部屋[へや] から 音楽[おんがく] が *聞[き]こえます*。', 'I can hear music from the next room.'], ['この 映画[えいが] は ネット で *見[み]られます*。', 'You can watch this movie online.']),
          G('Potential vs ～ことができる', 'two ways to say "can"', '', 'Both mean "can". ～ことができる sounds a little more formal and is common in writing and announcements; the potential form is shorter and conversational.',
            ['館内[かんない] で 写真[しゃしん] を *撮[と]る こと が できます*。', 'You may take photos inside the building. (formal)'], ['ここ で 写真[しゃしん] *撮[と]れる*？', 'Can I take photos here? (casual)'])
        ],
        dialog: {
          title: 'Can you swim?', lines: [
            ['Ken', '泳[およ]げます か。', 'Can you swim?'],
            ['You', 'はい、 子[こ]ども の とき から 泳[およ]げます。 ケン さん は？', 'Yes, I\'ve been able to since I was a kid. You?'],
            ['Ken', 'ぼく は 最近[さいきん] やっと 泳[およ]げる よう に なりました。', 'I only recently became able to swim.'],
            ['You', 'すごい！ 来週[らいしゅう]、 いっしょ に プール に 行[い]きません か。', 'Great! Want to go to the pool together next week?'],
            ['Ken', 'すみません、 来週[らいしゅう] は 忙[いそが]しくて 行[い]けない ん です。', 'Sorry, I\'m busy next week, so I can\'t go.']
          ]
        },
        note: { t: 'ら抜き言葉 — dropping the ら', x: 'You\'ll constantly hear <b>見れる</b>, <b>食べれる</b>, <b>来れる</b> instead of 見られる etc. Purists frown on it, but it\'s standard in casual speech — just use the full form in writing and formal situations.' },
        ex: [
          { resp: '日本語[にほんご] の 新聞[しんぶん] が 読[よ]めます か。', npcEn: 'Can you read Japanese newspapers?', a: 'まだ 読[よ]めません が、 少[すこ]し ずつ 読[よ]める よう に なって います。', o: ['まだ 読[よ]むません。', 'はい、 読[よ]められます。'] },
          { mc: 'Potential form of 話す:', a: '話[はな]せる', o: ['話[はな]される', '話[はな]しれる', '話[はな]られる'] }
        ]
      },
      {
        id: 'N4-2', icon: '🧭', title: 'Let\'s! Volitional & Intentions', sub: '意向形 · ようと思う · つもり',
        goals: ['Use the volitional form (let\'s… / shall we…)', 'Talk about what you are thinking of doing', 'Distinguish plans, intentions and decisions'],
        words: ['決[き]める|decide', '始[はじ]める|start, begin', 'やめる|quit, stop', '貯[た]める|save (money)', '計画[けいかく]|plan', '留学[りゅうがく]|study abroad', '転職[てんしょく]|job change', '節約[せつやく]|saving, economizing'],
        grammar: [
          G('Volitional form ～よう / ～おう', 'let\'s / shall we (casual)', 'Ru-verbs: 食べる → 食べよう · U-verbs: last う-sound → お-sound + う (行く → 行こう, 飲む → 飲もう) · する → しよう · 来る → 来[こ]よう',
            'The casual version of ～ましょう. Used with friends to suggest doing something together.',
            ['ちょっと *休[やす]もう* か。', 'Shall we take a little break?'], ['週末[しゅうまつ]、 海[うみ] に *行[い]こう* よ！', 'Let\'s go to the beach this weekend!'], ['じゃあ、 駅[えき] で *会[あ]おう*。', 'OK, let\'s meet at the station.']),
          G('～ようと思う', 'I\'m thinking of doing', 'Volitional + と思う · ～ようと思っている (have been thinking)',
            'Shares a plan you have in mind — softer and less fixed than つもり.',
            ['来年[らいねん]、 日本[にほん] に 留学[りゅうがく] *しよう と 思[おも]って います*。', 'I\'m thinking of studying in Japan next year.'], ['今日[きょう] は 早[はや]く *寝[ね]よう と 思[おも]います*。', 'I think I\'ll go to bed early today.']),
          G('～ことにする / ～ことになる', 'decide to / it has been decided', 'Dictionary / ない form + ことにする (I decide) · ことになる (it gets decided, often by others)',
            '<b>ことにする</b> = your own decision. <b>ことになる</b> = a decision made by circumstances or other people (also used to sound modest about your own decisions).',
            ['毎日[まいにち] 歩[ある]いて 通勤[つうきん] *する こと に しました*。', 'I\'ve decided to walk to work every day.'], ['来月[らいげつ] から 大阪[おおさか] に 転勤[てんきん] *する こと に なりました*。', 'It\'s been decided that I\'ll transfer to Osaka next month.'], ['お酒[さけ] は 飲[の]ま *ない こと に して います*。', 'I make it a rule not to drink.']),
          G('つもり vs 予定 vs ようと思う', 'degrees of certainty', '',
            '<b>～ようと思う</b> — an idea you\'re considering. <b>～つもり</b> — a firm intention. <b>～予定</b> — a fixed schedule, often involving others.',
            ['お金[かね] を 貯[た]めて、 車[くるま] を *買[か]う つもり です*。', 'I intend to save money and buy a car.'], ['会議[かいぎ] は 3時[さんじ] に 終[お]わる *予定[よてい] です*。', 'The meeting is scheduled to end at 3.'])
        ],
        dialog: {
          title: 'New year\'s resolutions', lines: [
            ['Yui', '今年[ことし] の 目標[もくひょう] は 何[なに]？', 'What\'s your goal for this year?'],
            ['You', 'お金[かね] を 貯[た]めよう と 思[おも]って。 外食[がいしょく] を やめる こと に した。', 'I\'m thinking of saving money. I\'ve decided to stop eating out.'],
            ['Yui', 'えらい！ わたし は ジム に 通[かよ]おう かな。', 'Impressive! Maybe I\'ll start going to the gym.'],
            ['You', 'じゃあ、 いっしょ に 頑張[がんば]ろう！', 'Then let\'s both do our best!']
          ]
        },
        note: { t: '～ことになりました — the modest announcement', x: 'Japanese often announce personal news with <b>ことになりました</b> ("it has come about that…") — e.g. 結婚することになりました ("I\'m getting married"). It sounds humble, as if fate decided, even when you chose it yourself.' },
        ex: [
          { mc: 'Volitional form of 飲む:', a: '飲[の]もう', o: ['飲[の]みよう', '飲[の]むよう', '飲[の]まよう'] },
          { resp: '休[やす]み に 何[なに] を する つもり？', npcEn: 'What are you planning to do on your break?', a: '温泉[おんせん] に 行[い]こう と 思[おも]って いる。', o: ['温泉[おんせん] に 行[い]こう つもり。', '温泉[おんせん] に 行[い]った つもり です。'] }
        ]
      },
      {
        id: 'N4-3', icon: '🤲', title: 'Doing Favors', sub: 'てあげる · てもらう · てくれる',
        goals: ['Talk about doing favors for others', 'Say someone did something for you', 'Ask for favors politely with ～てもらえませんか'],
        words: ['貸[か]す|lend', '借[か]りる|borrow', '直[なお]す|fix, repair', '案内[あんない] する|show around, guide', '手伝[てつだ]う|help', '迎[むか]えに 行[い]く|go to pick up', '翻訳[ほんやく]|translation', '親切[しんせつ]|kind'],
        grammar: [
          G('～てあげる', 'do something for someone', 'て-form + あげる',
            'You (or someone) do a favor for another person. Be careful: saying it directly to a superior (～てあげましょうか) can sound condescending — use ～ましょうか instead.',
            ['妹[いもうと] に 宿題[しゅくだい] を *教[おし]えて あげました*。', 'I taught my little sister her homework.'], ['友[とも]だち を 駅[えき] まで *送[おく]って あげた*。', 'I gave my friend a ride to the station.']),
          G('～てもらう', 'have someone do something (for me)', 'Person に + て-form + もらう',
            'You receive a favor: someone does something for you. Very common for expressing gratitude.',
            ['友[とも]だち に 引[ひ]っ越[こ]し を *手伝[てつだ]って もらいました*。', 'I had my friend help me move.'], ['日本人[にほんじん] の 同僚[どうりょう] に メール を *直[なお]して もらった*。', 'My Japanese coworker corrected my email for me.']),
          G('～てくれる', 'someone does something for me', 'Person が + て-form + くれる',
            'Like もらう but from the giver\'s side. It shows appreciation: 来てくれた = "(kindly) came for me".',
            ['田中[たなか] さん が 傘[かさ] を *貸[か]して くれました*。', 'Tanaka lent me an umbrella.'], ['母[はは] が 空港[くうこう] まで *迎[むか]え に 来[き]て くれた*。', 'My mother came to pick me up at the airport.']),
          G('～てもらえませんか / ～てくれませんか', 'could you (please)…?', 'て-form + もらえませんか (more polite) / くれませんか',
            'Polite requests. Even more polite: <b>～ていただけませんか</b>.',
            ['すみません、 ちょっと *手伝[てつだ]って もらえません か*。', 'Excuse me, could you help me a moment?'], ['この 書類[しょるい] を *翻訳[ほんやく] して いただけません か*。', 'Could you possibly translate this document?'])
        ],
        dialog: {
          title: 'Moving day', lines: [
            ['Sato', '引[ひ]っ越[こ]し、 大変[たいへん] でした か。', 'Was the move tough?'],
            ['You', '友[とも]だち が 三人[さんにん] 来[き]て くれた ので、 すぐ 終[お]わりました。', 'Three friends came to help, so it was over quickly.'],
            ['Sato', 'いい 友[とも]だち です ね。', 'You have good friends.'],
            ['You', 'はい。 お礼[れい] に 晩[ばん]ごはん を ごちそう して あげました。', 'Yes. As thanks, I treated them to dinner.']
          ]
        },
        note: { t: 'Gratitude baked into grammar', x: 'Japanese often marks favors grammatically. Saying 友達が来た ("my friend came") is neutral, but <b>友達が来てくれた</b> adds "…and I\'m grateful". Using くれる/もらう correctly makes you sound warm and natural.' },
        ex: [
          { mc: '"My friend lent me a book."', a: '友[とも]だち が 本[ほん] を 貸[か]して くれました。', o: ['友[とも]だち が 本[ほん] を 貸[か]して あげました。', '友[とも]だち に 本[ほん] を 貸[か]して くれました。', '友[とも]だち が 本[ほん] を 借[か]りて くれました。'] },
          { resp: '重[おも]そう です ね。 持[も]ちましょう か。', npcEn: 'That looks heavy. Shall I carry it?', a: 'ありがとう ございます。 助[たす]かります。', o: ['はい、 持[も]って あげて ください。', 'いいえ、 持[も]って くれません。'] }
        ],
        convo: 'n4-neighbor-favor'
      },
      {
        id: 'N4-4', icon: '🔀', title: 'If & When: Four Conditionals', sub: 'たら · ば · と · なら',
        goals: ['Choose between たら, ば, と and なら', 'Give advice with ～たらどうですか', 'Read a short notice'],
        words: ['もし|if (emphasis)', '安[やす]ければ|if it\'s cheap', '曲[ま]がる|turn', '押[お]す|push', '晴[は]れる|clear up', '雨[あめ] が 止[や]む|rain stops', '中止[ちゅうし]|cancellation', '雨天[うてん]|rainy weather'],
        grammar: [
          G('～たら', 'if / when (after)', 'た-form + ら (なかったら for negative)',
            'The most flexible "if" — also "when (after) X happens". Works for one-time situations and requests.',
            ['駅[えき] に *着[つ]いたら*、 電話[でんわ] して ください。', 'When you get to the station, please call me.'], ['もし 宝[たから]くじ が *当[あ]たったら*、 世界[せかい] 旅行[りょこう] を したい。', 'If I won the lottery, I\'d travel the world.']),
          G('～ば', 'if (condition)', 'Verbs: う-sound → え-sound + ば (行く → 行けば, 食べる → 食べれば) · い-adj: い → ければ · な-adj/noun: なら(ば)',
            'Focuses on the <b>condition</b> needed for a result. Often used for advice and general truths.',
            ['安[やす] *ければ* 買[か]います。', 'If it\'s cheap, I\'ll buy it.'], ['毎日[まいにち] *練習[れんしゅう] すれば*、 上手[じょうず] に なります よ。', 'If you practice every day, you\'ll get good.']),
          G('～と', 'whenever / naturally leads to', 'Dictionary form + と',
            'For automatic, natural or habitual results — machines, directions, nature. Not for requests or wishes.',
            ['この ボタン を *押[お]す と*、 お湯[ゆ] が 出[で]ます。', 'When you press this button, hot water comes out.'], ['右[みぎ] に *曲[ま]がる と*、 駅[えき] が あります。', 'If you turn right, you\'ll find the station.']),
          G('～なら', 'if it\'s the case that / as for', 'Plain form / noun + なら',
            'Responds to something just mentioned: "if that\'s the case…" or "if it\'s X you want…".',
            ['京都[きょうと] に *行[い]く なら*、 金閣寺[きんかくじ] が おすすめ です。', 'If you\'re going to Kyoto, I recommend Kinkaku-ji.'], ['ラーメン *なら*、 あの 店[みせ] が 一番[いちばん] です。', 'If it\'s ramen you want, that shop is the best.']),
          G('～たらどうですか', 'why don\'t you…? (advice)', 'た-form + らどうですか / らいいですよ',
            'A gentle suggestion.',
            ['疲[つか]れて いる なら、 少[すこ]し *休[やす]んだら どう です か*。', 'If you\'re tired, why not rest a little?'], ['駅[えき] の 人[ひと] に *聞[き]いたら いい です よ*。', 'You should ask the station staff.'])
        ],
        reading: {
          title: 'お知らせ: 町内[ちょうない] の 夏祭[なつまつ]り', text: [
            '8月[はちがつ] 15日[じゅうごにち] (土[ど]) に 公園[こうえん] で 夏祭[なつまつ]り を 行[おこな]います。',
            '雨[あめ] が 降[ふ]ったら、 祭[まつ]り は 次[つぎ] の 日[ひ] に なります。 二日[ふつか] とも 雨天[うてん] なら、 中止[ちゅうし] です。',
            '浴衣[ゆかた] を 着[き]て 来[く]れば、 かき氷[ごおり] が 無料[むりょう] に なります。 お子[こ]さん と いっしょ に ぜひ 来[き]て ください。'
          ],
          en: ['A summer festival will be held in the park on Saturday, August 15th.', 'If it rains, the festival moves to the next day. If it rains on both days, it\'s cancelled.', 'If you come wearing a yukata, shaved ice is free. Please come with your children!'],
          q: [
            ['What happens if it rains on the 15th?', 'The festival moves to the 16th.', 'The festival is cancelled.', 'It moves to the gym.', 'It starts later in the day.'],
            ['When is the festival cancelled?', 'If it rains on both days', 'If fewer than 15 people come', 'If it is too hot', 'If it rains on the 16th only'],
            ['How can you get free shaved ice?', 'Wear a yukata', 'Bring your children', 'Arrive early', 'Help set up']
          ]
        },
        note: { t: 'Which "if" do I use?', x: 'When in doubt, use <b>たら</b> — it works in most everyday situations. Use <b>と</b> for machines and directions, <b>ば</b> for advice and conditions, and <b>なら</b> when responding to what someone just said.' },
        ex: [
          { fill: 'この ボタン を 押[お]す ＿、 ドア が 開[あ]きます。', a: 'と', o: ['なら', 'たら ば'], en: 'When you press this button, the door opens.' },
          { resp: '来月[らいげつ] 北海道[ほっかいどう] に 行[い]きます。', npcEn: 'I\'m going to Hokkaido next month.', a: '北海道[ほっかいどう] に 行[い]く なら、 ぜひ 海鮮[かいせん] を 食[た]べて ください。', o: ['北海道[ほっかいどう] に 行[い]く と、 海鮮[かいせん] を 食[た]べて ください。', '北海道[ほっかいどう] に 行[い]けば、 食[た]べました。'] }
        ],
        convo: 'n4-trip-planning'
      },
      {
        id: 'N4-5', icon: '🧰', title: 'て-form Helpers', sub: 'てしまう · ておく · てある · てみる',
        goals: ['Express completion and regret with ～てしまう', 'Prepare in advance with ～ておく', 'Describe resulting states with ～てある', 'Try things with ～てみる'],
        words: ['忘[わす]れる|forget', '壊[こわ]す|break (something)', '落[お]とす|drop', '準備[じゅんび]|preparation', '予約[よやく]|reservation', '冷[ひ]やす|chill', '飾[かざ]る|decorate', '着[き]て みる|try on'],
        grammar: [
          G('～てしまう', 'finish completely / do accidentally (regret)', 'て-form + しまう · casual: ～ちゃう / ～じゃう',
            'Shows completion or, very often, regret: "ended up doing…".',
            ['財布[さいふ] を 電車[でんしゃ] に *忘[わす]れて しまいました*。', 'I (accidentally) left my wallet on the train.'], ['ケーキ を 全部[ぜんぶ] *食[た]べちゃった*。', 'I ate the whole cake.'], ['宿題[しゅくだい] は もう *やって しまいました*。', 'I\'ve already finished the homework.']),
          G('～ておく', 'do in advance / leave as is', 'て-form + おく · casual: ～とく',
            'Doing something beforehand in preparation, or leaving something in a state.',
            ['パーティー の 前[まえ] に ビール を *冷[ひ]やして おきます*。', 'I\'ll chill the beer before the party.'], ['レストラン を *予約[よやく] して おいた* よ。', 'I booked the restaurant (in advance).'], ['窓[まど] は *開[あ]けて おいて* ください。', 'Please leave the window open.']),
          G('～てある', 'has been done (resulting state)', 'Transitive verb て-form + ある',
            'Describes the state left by someone\'s deliberate action. Compare: 窓が開いている (the window is open) vs 窓が開けてある (the window has been opened — on purpose).',
            ['壁[かべ] に 絵[え] が *飾[かざ]って あります*。', 'A painting has been hung on the wall.'], ['テーブル に 名前[なまえ] が *書[か]いて あります*。', 'Names are written on the table.']),
          G('～てみる', 'try doing', 'て-form + みる',
            'Try something to see what it\'s like.',
            ['この 服[ふく]、 *着[き]て みて も いい* です か。', 'May I try this on?'], ['納豆[なっとう] を 初[はじ]めて *食[た]べて みました*。', 'I tried natto for the first time.']),
          G('～ていく / ～てくる', 'go / come (direction, change over time)', 'て-form + いく / くる',
            'Movement away/toward the speaker, or a change from now on (いく) / up to now (くる).',
            ['コンビニ で 飲[の]み物[もの] を *買[か]って いきます*。', 'I\'ll buy drinks at the konbini on the way.'], ['だんだん 寒[さむ]く *なって きました*。', 'It\'s been getting colder.'], ['これから も 日本語[にほんご] を *勉強[べんきょう] して いきたい* です。', 'I want to keep studying Japanese from now on.'])
        ],
        dialog: {
          title: 'Party prep', lines: [
            ['Yui', '飲[の]み物[もの] は 冷[ひ]やして おいた？', 'Did you chill the drinks?'],
            ['You', 'うん、 冷蔵庫[れいぞうこ] に 入[い]れて ある よ。', 'Yeah, they\'re in the fridge.'],
            ['Yui', 'あ、 ケーキ を 買[か]う の を 忘[わす]れちゃった！', 'Oh no, I forgot to buy the cake!'],
            ['You', '大丈夫[だいじょうぶ]。 駅前[えきまえ] の 店[みせ] に 行[い]って みよう。', 'It\'s fine. Let\'s try the shop in front of the station.']
          ]
        },
        note: { t: '～ちゃった — the sound of mild regret', x: '<b>～ちゃった</b> / <b>～じゃった</b> (from ～てしまった) is everywhere in casual speech: 寝坊しちゃった ("I overslept, oops"), 割っちゃった ("I broke it…"). It softens confessions.' },
        ex: [
          { mc: '"I accidentally deleted the file."', a: 'ファイル を 消[け]して しまいました。', o: ['ファイル を 消[け]して おきました。', 'ファイル が 消[け]して あります。', 'ファイル を 消[け]して みました。'] },
          { fill: '明日[あした] の 会議[かいぎ] の 資料[しりょう] を コピー して ＿。', a: 'おきます', o: ['しまいます', 'あります'], en: 'I\'ll copy the documents for tomorrow\'s meeting in advance.' }
        ],
        convo: 'n4-broken-item'
      },
      {
        id: 'N4-6', icon: '👀', title: 'Looks Like & I Heard', sub: 'そうだ · らしい · ようだ · みたい',
        goals: ['Say how things look with ～そう', 'Report hearsay with ～そうだ and ～らしい', 'Make guesses with ～ようだ / ～みたい'],
        words: ['天気[てんき] 予報[よほう]|weather forecast', 'ニュース|news', '噂[うわさ]|rumor', '眠[ねむ]い|sleepy', '雨[あめ] が 降[ふ]りそう|looks like rain', '人気[にんき]|popularity', '混[こ]む|get crowded', '結婚[けっこん] する|get married'],
        grammar: [
          G('～そうだ (appearance)', 'looks like / seems about to', 'Stem + そう: おいしそう, 降りそう, 元気そう · いい → よさそう · ない → なさそう',
            'Your judgment based on how something <b>looks right now</b>.',
            ['この ケーキ、 *おいし そう* です ね。', 'This cake looks delicious.'], ['今[いま] に も 雨[あめ] が *降[ふ]り そう* です。', 'It looks like it\'s about to rain any moment.'], ['田中[たなか] さん は *元気[げんき] そう* でした。', 'Tanaka looked well.']),
          G('～そうだ (hearsay)', 'I heard that…', 'Plain form + そうだ',
            'Reports information from another source. Different from the "looks like" そう — this one attaches to the full plain form.',
            ['天気[てんき] 予報[よほう] に よる と、 明日[あした] は 雪[ゆき] が *降[ふ]る そう です*。', 'According to the forecast, it will snow tomorrow.'], ['あの 店[みせ] は とても *おいしい そう です*。', 'I hear that shop is really good.']),
          G('～らしい', 'apparently / it seems (from what I heard)', 'Plain form + らしい (noun/な-adj: no だ)',
            'Hearsay or inference from evidence, slightly less certain. N + らしい also means "typical of N": 男らしい (manly).',
            ['山田[やまだ] さん、 来月[らいげつ] *結婚[けっこん] する らしい* よ。', 'Apparently Yamada is getting married next month.'], ['今日[きょう] は *休[やす]み らしい* です。', 'It seems they\'re closed today.']),
          G('～ようだ / ～みたいだ', 'it seems / appears (my guess)', 'Plain form + ようだ (な-adj + な, noun + の) · casual: みたい (no の/な)',
            'A guess based on what you observe or experience. みたい is the casual version.',
            ['電気[でんき] が 消[き]えて います ね。 だれ も いない *よう です*。', 'The lights are off. It seems no one is there.'], ['道[みち] が 混[こ]んで いる *みたい*。 遅[おく]れる かも。', 'Looks like the roads are crowded. I might be late.']),
          G('～ような / ～みたいな (like)', 'like, such as (comparison)', 'N + のような / みたいな + noun',
            'Compares or gives an example.',
            ['夢[ゆめ] *の よう な* 一日[いちにち] でした。', 'It was a dreamlike day.'], ['ゆい さん *みたい な* 人[ひと] が 好[す]き です。', 'I like people like Yui.'])
        ],
        dialog: {
          title: 'Office gossip', lines: [
            ['Sato', '聞[き]いた？ 部長[ぶちょう]、 会社[かいしゃ] を 辞[や]める らしい よ。', 'Did you hear? Apparently the department head is quitting.'],
            ['You', 'え、 本当[ほんとう]？ 最近[さいきん] 疲[つか]れて いる よう でした ね。', 'Really? He did seem tired lately.'],
            ['Sato', 'うん。 田舎[いなか] で カフェ を 開[ひら]く そう です。', 'Yeah. I heard he\'s opening a café in the countryside.'],
            ['You', 'へえ、 楽[たの]し そう！', 'Wow, that sounds fun!']
          ]
        },
        note: { t: 'Two kinds of そう', x: '<b>降りそう</b> (stem + そう) = "looks like it will rain" — what you see. <b>降るそう</b> (plain form + そう) = "I heard it will rain" — what you were told. One kana makes the difference!' },
        ex: [
          { mc: '"This looks delicious."', a: 'おいし そう です ね。', o: ['おいしい そう です ね。', 'おいしい らしい です ね。', 'おいしい よう な です ね。'] },
          { mc: '"I heard it will rain tomorrow." (from the forecast)', a: '明日[あした] は 雨[あめ] が 降[ふ]る そう です。', o: ['明日[あした] は 雨[あめ] が 降[ふ]り そう です。', '明日[あした] は 雨[あめ] みたい な です。', '明日[あした] は 雨[あめ] が 降[ふ]って そう です。'] }
        ]
      },
      {
        id: 'N4-7', icon: '🙃', title: 'The Passive', sub: '受身形 · suffering passive',
        goals: ['Form the passive', 'Describe things done to you', 'Use the "suffering" passive for annoyances'],
        words: ['叱[しか]る|scold', 'ほめる|praise', '踏[ふ]む|step on', '盗[ぬす]む|steal', '頼[たの]む|ask, request', '建[た]てる|build', '発明[はつめい] する|invent', '泥棒[どろぼう]|thief'],
        grammar: [
          G('Passive form ～られる / ～れる', 'be done (to)', 'Ru-verbs: 食べる → 食べられる · U-verbs: う-sound → あ-sound + れる (書く → 書かれる, 言う → 言われる) · する → される · 来る → 来[こ]られる',
            'The person affected is the subject; the doer is marked with <b>に</b>. (Ru-verb passive looks the same as the potential — context tells you which.)',
            ['子[こ]ども の とき、 よく 母[はは] に *叱[しか]られました*。', 'I was often scolded by my mother as a child.'], ['先生[せんせい] に 作文[さくぶん] を *ほめられた*。', 'My teacher praised my essay.'], ['電車[でんしゃ] で 足[あし] を *踏[ふ]まれました*。', 'Someone stepped on my foot on the train.']),
          G('Suffering passive', 'had something (annoying) happen', 'Person は + doer に + passive',
            'Japanese uses the passive even with intransitive verbs to show you were negatively affected.',
            ['雨[あめ] に *降[ふ]られて*、 びしょびしょ に なった。', 'I got caught in the rain and got soaked.'], ['夜中[よなか] に 赤[あか]ちゃん に *泣[な]かれて*、 眠[ねむ]れなかった。', 'The baby cried in the night and I couldn\'t sleep.'], ['泥棒[どろぼう] に 自転車[じてんしゃ] を *盗[ぬす]まれました*。', 'My bicycle was stolen by a thief.']),
          G('Passive for facts & history', 'is made / was built (impersonal)', 'Thing は + passive (doer によって)',
            'Common in news, signs and explanations. The creator takes <b>によって</b>.',
            ['この お寺[てら] は 800年[はっぴゃくねん] 前[まえ] に *建[た]てられました*。', 'This temple was built 800 years ago.'], ['電話[でんわ] は ベル に よって *発明[はつめい] されました*。', 'The telephone was invented by Bell.'], ['日本[にほん] の アニメ は 世界中[せかいじゅう] で *見[み]られて います*。', 'Japanese anime is watched all over the world.'])
        ],
        dialog: {
          title: 'A bad morning', lines: [
            ['Yui', 'どう した の？ 元気[げんき] ない ね。', 'What\'s wrong? You seem down.'],
            ['You', '今朝[けさ]、 電車[でんしゃ] で 足[あし] を 踏[ふ]まれて、 コーヒー を こぼされた ん だ。', 'This morning someone stepped on my foot on the train, and spilled coffee on me.'],
            ['Yui', 'うわ、 ひどい！', 'Ugh, terrible!'],
            ['You', 'しかも、 部長[ぶちょう] に 遅刻[ちこく] を 注意[ちゅうい] された…', 'And then the boss told me off for being late…']
          ]
        },
        note: { t: 'Passive = blame-free complaining', x: 'The suffering passive lets you complain without accusing anyone directly: 雨に降られた ("I got rained on"). It\'s extremely common in everyday conversation.' },
        ex: [
          { mc: 'Passive form of 言う:', a: '言[い]われる', o: ['言[い]えられる', '言[い]いれる', '言[い]わせる'] },
          { mc: '"My wallet was stolen."', a: '財布[さいふ] を 盗[ぬす]まれました。', o: ['財布[さいふ] を 盗[ぬす]みました。', '財布[さいふ] に 盗[ぬす]まれました。', '財布[さいふ] が 盗[ぬす]ませました。'] }
        ]
      },
      {
        id: 'N4-8', icon: '🎬', title: 'Make & Let: The Causative', sub: '使役 · させてください · 使役受身',
        goals: ['Say who makes or lets someone do something', 'Ask permission humbly with ～させてください', 'Complain about being made to do things'],
        words: ['させる|make / let (do)', '残業[ざんぎょう]|overtime', '休[やす]ませる|let (someone) rest', '習[なら]わせる|make (someone) take lessons', '待[ま]たせる|keep (someone) waiting', '部下[ぶか]|subordinate', '社員[しゃいん]|employee', '自由[じゆう]|free, freedom'],
        grammar: [
          G('Causative form ～させる / ～せる', 'make / let someone do', 'Ru-verbs: 食べる → 食べさせる · U-verbs: う-sound → あ-sound + せる (行く → 行かせる, 待つ → 待たせる) · する → させる · 来る → 来[こ]させる',
            'The person made or allowed to act takes <b>に</b> (or を with intransitive verbs). Whether it\'s "make" or "let" depends on context.',
            ['母[はは] は 弟[おとうと] に 野菜[やさい] を *食[た]べさせました*。', 'My mother made my little brother eat vegetables.'], ['部長[ぶちょう] は 部下[ぶか] を 早[はや]く *帰[かえ]らせました*。', 'The manager let his staff go home early.'], ['*お待[ま]たせ しました*。', 'Sorry to have kept you waiting.']),
          G('～させてください', 'please let me…', 'Causative て-form + ください / いただけませんか',
            'A humble way to ask permission or volunteer.',
            ['今日[きょう] は 熱[ねつ] が ある ので、 *休[やす]ませて ください*。', 'I have a fever, so please let me take today off.'], ['その 仕事[しごと]、 ぜひ わたし に *やらせて ください*。', 'Please let me do that job.'], ['少[すこ]し *考[かんが]えさせて いただけません か*。', 'Could you let me think about it a little?']),
          G('Causative-passive ～させられる', 'be made to do (against your will)', 'Causative + passive: 食べさせられる · U-verbs often shorten: 飲ませられる → 飲まされる',
            'Complains about being forced to do something.',
            ['子[こ]ども の とき、 ピアノ を *習[なら]わされました*。', 'As a child I was made to take piano lessons.'], ['昨日[きのう] は 夜[よる] 10時[じゅうじ] まで *残業[ざんぎょう] させられた*。', 'Yesterday I was made to work overtime until 10 p.m.'], ['飲[の]み会[かい] で お酒[さけ] を たくさん *飲[の]まされた*。', 'I was made to drink a lot at the drinking party.'])
        ],
        reading: {
          title: 'メール: 休[やす]み の お願[ねが]い', text: [
            '山本[やまもと] 部長[ぶちょう]、 お疲[つか]れ様[さま] です。 営業部[えいぎょうぶ] の スミス です。',
            '実[じつ]は、 来月[らいげつ] 国[くに] で 姉[あね] の 結婚式[けっこんしき] が あります。 そこ で、 7日[なのか] から 11日[じゅういちにち] まで 休[やす]ませて いただけない でしょう か。',
            '休[やす]み の 間[あいだ] の 仕事[しごと] は、 田中[たなか] さん に お願[ねが]い して あります。 急[いそ]ぎ の 連絡[れんらく] は メール で お願[ねが]い します。',
            'どうぞ よろしく お願[ねが]い いたします。'
          ],
          en: ['Mr. Yamamoto, thank you for your hard work. This is Smith from Sales.', 'Actually, my older sister\'s wedding is next month back home. Could you please let me take time off from the 7th to the 11th?', 'I have asked Tanaka to cover my work while I\'m away. Please contact me by email for anything urgent.', 'Thank you very much for considering this.'],
          q: [
            ['Why does Smith want time off?', 'For a sister\'s wedding', 'For a medical treatment', 'To move house', 'For a business trip'],
            ['Who will do Smith\'s work?', 'Tanaka', 'The department head', 'Nobody', 'Smith\'s sister'],
            ['How should urgent matters be handled?', 'By email', 'By phone', 'They should wait until Smith returns', 'Through Yamamoto']
          ]
        },
        note: { t: 'お待たせしました', x: 'You\'ll hear <b>お待たせしました</b> ("sorry to have made you wait") constantly — from waiters, shop staff and friends arriving late. It\'s a causative in disguise: 待たせる = "make (someone) wait".' },
        ex: [
          { mc: 'Polite way to ask for time off:', a: '休[やす]ませて いただけません か。', o: ['休[やす]まれて いただけません か。', '休[やす]んで あげません か。', '休[やす]ませられて ください。'] },
          { resp: 'すみません、 遅[おく]く なりました。', npcEn: '(friend arriving) Sorry I\'m late.', a: '大丈夫[だいじょうぶ]。 わたし も 今[いま] 来[き]た ところ。', o: ['お待[ま]たせ しました。', '待[ま]たされて ください。'] }
        ]
      },
      {
        id: 'N4-9', icon: '🎯', title: 'Purpose, Reasons & "Although"', sub: 'ために · ように · のに · し',
        goals: ['Say why you do things with ために and ように', 'Express frustration or contrast with のに', 'List reasons with ～し'],
        words: ['健康[けんこう]|health', '貯金[ちょきん]|savings', '間[ま]に 合[あ]う|be in time', '忘[わす]れない よう に|so as not to forget', '目覚[めざ]まし|alarm clock', '値段[ねだん]|price', '便利[べんり]|convenient', 'せっかく|with effort, specially'],
        grammar: [
          G('～ために (purpose)', 'in order to', 'Dictionary form (volitional verbs) / N の + ために',
            'A deliberate goal. The subject of both parts is usually the same.',
            ['家[いえ] を *買[か]う ため に*、 貯金[ちょきん] して います。', 'I\'m saving money to buy a house.'], ['*健康[けんこう] の ため に*、 毎日[まいにち] 歩[ある]いて います。', 'I walk every day for my health.']),
          G('～ように (purpose)', 'so that', 'Potential / non-volitional / ない form + ように',
            'Aims at a state you can\'t directly control (being able to…, not forgetting…).',
            ['遅刻[ちこく] *しない よう に*、 目覚[めざ]まし を 二[ふた]つ かけました。', 'I set two alarms so I wouldn\'t be late.'], ['後[うし]ろ の 人[ひと] も *見[み]える よう に*、 大[おお]きく 書[か]いて ください。', 'Please write it big so people in the back can see too.']),
          G('～ようにする', 'make an effort to / make sure to', 'Dictionary / ない form + ようにする',
            'A habit you try to keep.',
            ['毎日[まいにち] 野菜[やさい] を *食[た]べる よう に して います*。', 'I make a point of eating vegetables every day.'], ['夜[よる] は スマホ を *見[み]ない よう に して います*。', 'I try not to look at my phone at night.']),
          G('～のに (although)', 'although / even though (frustration)', 'Plain form + のに (な-adj/noun + な)',
            'Shows a result that goes against expectations — often with disappointment or complaint.',
            ['一生懸命[いっしょうけんめい] *勉強[べんきょう] した のに*、 試験[しけん] に 落[お]ちた。', 'Even though I studied hard, I failed the exam.'], ['*日曜日[にちようび] な のに*、 仕事[しごと] が ある。', 'Even though it\'s Sunday, I have to work.']),
          G('～し、～し', 'and also (listing reasons)', 'Plain form + し',
            'Lists several reasons, implying there are more.',
            ['この 部屋[へや] は 駅[えき] から *近[ちか]い し*、 *安[やす]い し*、 いい です ね。', 'This apartment is close to the station, and it\'s cheap — it\'s good.'], ['今日[きょう] は *雨[あめ] だ し*、 疲[つか]れて いる し、 家[いえ] に いる。', 'It\'s raining and I\'m tired, so I\'m staying home.'])
        ],
        dialog: {
          title: 'Why so early?', lines: [
            ['Sato', '毎朝[まいあさ] 早[はや]い です ね。', 'You\'re early every morning.'],
            ['You', '電車[でんしゃ] が 混[こ]まない うち に 来[く]る よう に して いる ん です。', 'I make a point of coming before the trains get crowded.'],
            ['Sato', 'なるほど。 わたし は 早[はや]く 寝[ね]た のに、 寝坊[ねぼう] しちゃった。', 'I see. I went to bed early, and yet I overslept.'],
            ['You', '目覚[めざ]まし を 二[ふた]つ かけたら どう です か。', 'How about setting two alarms?']
          ]
        },
        note: { t: 'せっかく…のに', x: '<b>せっかく</b> ("after all the trouble") often pairs with のに for disappointment: せっかく作ったのに、誰も食べなかった ("I went to the trouble of making it, and nobody ate it").' },
        ex: [
          { fill: '風邪[かぜ] を ひかない ＿、 手[て] を よく 洗[あら]います。', a: 'よう に', o: ['ため に', 'のに'], en: 'I wash my hands well so I won\'t catch a cold.', why: 'ひかない is non-volitional → ように.' },
          { mc: '"Even though I invited him, he didn\'t come."', a: '誘[さそ]った のに、 来[こ]なかった。', o: ['誘[さそ]った ため に、 来[こ]なかった。', '誘[さそ]った し、 来[こ]なかった。', '誘[さそ]う よう に、 来[こ]なかった。'] }
        ]
      },
      {
        id: 'N4-10', icon: '💡', title: 'Advice, Obligation & Expectation', sub: 'たほうがいい · なくてもいい · はず',
        goals: ['Give advice with ～たほうがいい', 'Say what isn\'t necessary', 'Talk about what should be the case with はず'],
        words: ['薬[くすり] を 飲[の]む|take medicine', '病院[びょういん]|hospital, clinic', '無理[むり] を する|overdo it', '届[とど]く|arrive (package)', '発送[はっそう]|shipping', '構[かま]わない|don\'t mind', '必要[ひつよう]|necessary', '確[たし]か|surely, if I remember right'],
        grammar: [
          G('～たほうがいい', 'you\'d better / should', 'た-form + ほうがいい · negative: ない form + ほうがいい',
            'Clear advice. With superiors, soften it: ～たほうがいいかもしれません.',
            ['熱[ねつ] が ある なら、 病院[びょういん] に *行[い]った ほう が いい* です よ。', 'If you have a fever, you\'d better go to a clinic.'], ['あまり 無理[むり] *しない ほう が いい* です よ。', 'You\'d better not overdo it.']),
          G('～なくてもいい', 'don\'t have to', 'ない → なくてもいい',
            'Something isn\'t necessary.',
            ['明日[あした] は 会社[かいしゃ] に *来[こ]なくても いい* です。', 'You don\'t have to come to the office tomorrow.'], ['全部[ぜんぶ] *食[た]べなくても いい* よ。', 'You don\'t have to eat it all.']),
          G('～てもかまわない', 'it\'s fine if / I don\'t mind', 'て-form + もかまわない',
            'Slightly more formal than ～てもいい.',
            ['ここ に 荷物[にもつ] を *置[お]いて も かまいません*。', 'You may leave your luggage here.'], ['日本語[にほんご] で *書[か]いて も 英語[えいご] で 書[か]いて も かまいません*。', 'You can write in either Japanese or English.']),
          G('～はずだ', 'should be (logical expectation)', 'Plain form + はず (な-adj + な, noun + の)',
            'What you expect to be true based on facts. ～はずがない = "can\'t possibly be".',
            ['荷物[にもつ] は 明日[あした] *届[とど]く はず です*。', 'The package should arrive tomorrow.'], ['鍵[かぎ] は この かばん に *ある はず な のに*…', 'The key should be in this bag, but…'], ['彼[かれ] が そんな こと を *言[い]う はず が ない*。', 'There\'s no way he would say such a thing.']),
          G('～なければならない / ～なくてはいけない', 'must (review + casual forms)', 'ない → なければならない / なくてはいけない · casual: なきゃ / なくちゃ',
            'You met なければなりません in Level 4. In speech you\'ll mostly hear なきゃ and なくちゃ.',
            ['明日[あした] まで に レポート を *出[だ]さなきゃ*。', 'I have to hand in the report by tomorrow.'], ['もう *帰[かえ]らなくちゃ*。', 'I have to go home now.'])
        ],
        dialog: {
          title: 'Feeling sick', lines: [
            ['Sato', '顔色[かおいろ] が 悪[わる]い です よ。 早[はや]く 帰[かえ]った ほう が いい です よ。', 'You look pale. You should go home early.'],
            ['You', 'でも、 この 資料[しりょう] を 今日[きょう] 中[じゅう] に 作[つく]らなきゃ…', 'But I have to make this document today…'],
            ['Sato', 'それ は 明日[あした] でも かまわない はず です。 部長[ぶちょう] に 聞[き]いて みます ね。', 'Tomorrow should be fine for that. I\'ll ask the manager.'],
            ['You', 'すみません。 助[たす]かります。', 'Thank you. That helps a lot.']
          ]
        },
        note: { t: 'Softening advice', x: 'Japanese avoids sounding pushy. Add <b>～かもしれません</b> or <b>～と思いますよ</b> to advice for coworkers and superiors: 病院に行ったほうがいいと思いますよ.' },
        ex: [
          { resp: '頭[あたま] が ずっと 痛[いた]い ん です。', npcEn: 'My head has been hurting all along.', a: '病院[びょういん] に 行[い]った ほう が いい です よ。', o: ['病院[びょういん] に 行[い]く ほう が いい です。', '病院[びょういん] に 行[い]かなくても いい です よ。'] },
          { mc: '"He should be home by now."', a: '彼[かれ] は もう 家[いえ] に いる はず です。', o: ['彼[かれ] は もう 家[いえ] に いる ほう が いい です。', '彼[かれ] は もう 家[いえ] に いなければ なりません。', '彼[かれ] は もう 家[いえ] に いる はず が ありません。'] }
        ]
      },
      {
        id: 'N4-11', icon: '⏲️', title: 'Time & Timing', sub: 'ながら · あいだ · うちに · ところ · ばかり',
        goals: ['Do two things at once with ながら', 'Talk about "while" and "before it\'s too late"', 'Pinpoint timing with ところ and ばかり'],
        words: ['歩[ある]きスマホ|walking while using a phone', '留守[るす]|being away from home', '若[わか]い|young', '冷[さ]める|get cold', '出[で]かける|go out', 'ちょうど|just, exactly', '着[つ]いた ばかり|just arrived', '寝坊[ねぼう] する|oversleep'],
        grammar: [
          G('～ながら', 'while (doing two things at once)', 'Verb stem + ながら',
            'Two actions by the same person at the same time. The main action comes last.',
            ['音楽[おんがく] を *聞[き]きながら* 勉強[べんきょう] します。', 'I study while listening to music.'], ['歩[ある]き *ながら* スマホ を 見[み]ない で ください。', 'Please don\'t look at your phone while walking.']),
          G('～あいだ / ～あいだに', 'while / during (the whole time) / at some point during', 'Plain form / N の + 間 (あいだ) / 間に',
            '<b>間</b> = throughout the period; <b>間に</b> = something happens at one point within it.',
            ['夏休[なつやす]み の *間[あいだ]*、 ずっと 実家[じっか] に いました。', 'I was at my parents\' place all through summer vacation.'], ['留守[るす] の *間[あいだ] に*、 荷物[にもつ] が 届[とど]いた。', 'A package arrived while I was out.']),
          G('～うちに', 'while (before it changes)', 'Dictionary / ている / ない form, い-adj, な-adj + な, N の + うちに',
            'Do something while a condition lasts — before it\'s too late.',
            ['温[あたた]かい *うち に* 食[た]べて ください。', 'Please eat it while it\'s warm.'], ['若[わか]い *うち に* いろいろ な 国[くに] に 行[い]きたい。', 'I want to visit many countries while I\'m young.'], ['暗[くら]く *ならない うち に* 帰[かえ]ろう。', 'Let\'s go home before it gets dark.']),
          G('～ところだ', 'about to / in the middle of / just did', 'Dictionary form + ところ (about to) · ている + ところ (in the middle of) · た-form + ところ (just did)',
            'Pinpoints exactly where you are in an action.',
            ['今[いま] から *出[で]かける ところ です*。', 'I\'m just about to go out.'], ['今[いま]、 晩[ばん]ごはん を *作[つく]って いる ところ です*。', 'I\'m in the middle of making dinner.'], ['ちょうど 駅[えき] に *着[つ]いた ところ です*。', 'I\'ve just arrived at the station.']),
          G('～たばかり', 'just did (recently)', 'た-form + ばかり',
            'Something happened recently — from the speaker\'s feeling (could be days or months ago).',
            ['日本[にほん] に *来[き]た ばかり* なので、 まだ 何[なに] も わかりません。', 'I just came to Japan, so I don\'t understand anything yet.'], ['さっき *食[た]べた ばかり* なのに、 もう お腹[なか] が すいた。', 'I just ate, but I\'m already hungry.'])
        ],
        dialog: {
          title: 'Where are you?', lines: [
            ['Ken', 'もしもし、 今[いま] どこ？', 'Hello, where are you now?'],
            ['You', 'ちょうど 家[いえ] を 出[で]た ところ。 あと 20分[にじゅっぷん] ぐらい。', 'I just left home. About 20 more minutes.'],
            ['Ken', 'じゃあ、 待[ま]って いる 間[あいだ] に 席[せき] を 取[と]って おく ね。', 'Then I\'ll grab seats while I wait.'],
            ['You', 'ありがとう！ 混[こ]まない うち に 行[い]く ね。', 'Thanks! I\'ll get there before it gets crowded.']
          ]
        },
        note: { t: '歩きスマホ', x: 'Walking while staring at your phone (<b>歩きスマホ</b>) is a big social issue in Japan — stations display posters asking people to stop. Now you can read them: 歩きながらスマホを見ないでください.' },
        ex: [
          { mc: '"I\'m about to eat."', a: '今[いま] から 食[た]べる ところ です。', o: ['今[いま] から 食[た]べた ところ です。', '今[いま] から 食[た]べて いる ところ です。', '今[いま] から 食[た]べた ばかり です。'] },
          { fill: '冷[さ]めない ＿ 飲[の]んで ください。', a: 'うち に', o: ['ながら', 'ばかり'], en: 'Please drink it before it gets cold.' }
        ]
      },
      {
        id: 'N4-12', icon: '🗯️', title: 'Explaining & Nuance', sub: 'んです · すぎる · やすい/にくい · かもしれない',
        goals: ['Explain and ask for explanations with ～んです', 'Say "too much" with すぎる', 'Describe how easy or hard things are', 'Express possibility'],
        words: ['飲[の]みすぎる|drink too much', '使[つか]いやすい|easy to use', '読[よ]みにくい|hard to read', '字[じ]|handwriting, character', '説明[せつめい]|explanation', 'たぶん|probably', 'もしかしたら|possibly, perhaps', '具合[ぐあい]|condition (health)'],
        grammar: [
          G('～んです / ～のです', 'explaining / asking for an explanation', 'Plain form + んです (な-adj/noun + なんです)',
            'Adds a sense of "the thing is…" or "is it that…?". Essential for natural conversation — but overusing it in questions can sound nosy.',
            ['どう *した ん です か*。', 'What happened? (I can see something\'s up)'], ['すみません、 頭[あたま] が *痛[いた]い ん です*。', 'Sorry — the thing is, I have a headache.'], ['明日[あした]、 休[やす]み を *もらいたい ん です が*…', 'I\'d like to take tomorrow off…']),
          G('～すぎる', 'too much / overly', 'Verb stem / adj stem (い→×, な→×) + すぎる',
            'Excess. Conjugates like a ru-verb.',
            ['昨日[きのう] は *飲[の]みすぎて*、 頭[あたま] が 痛[いた]い。', 'I drank too much yesterday and have a headache.'], ['この 問題[もんだい] は *難[むずか]しすぎます*。', 'This question is too difficult.'], ['*静[しず]かすぎて* ちょっと 怖[こわ]い。', 'It\'s so quiet it\'s a little scary.']),
          G('～やすい / ～にくい', 'easy to / hard to', 'Verb stem + やすい / にくい',
            'How easy something is to do. Conjugates like an い-adjective.',
            ['この ペン は *書[か]きやすい* です。', 'This pen is easy to write with.'], ['彼[かれ] の 字[じ] は *読[よ]みにくい*。', 'His handwriting is hard to read.']),
          G('～かもしれない', 'might, maybe', 'Plain form + かもしれない (noun/な-adj: no だ) · casual: かも',
            'Possibility (around 50%). Compare でしょう / だろう (probably, ~70%+).',
            ['午後[ごご] から 雨[あめ] が *降[ふ]る かもしれません*。', 'It might rain in the afternoon.'], ['もしかしたら、 彼[かれ] は *来[こ]ない かも*。', 'Maybe he won\'t come.']),
          G('～だろう / ～でしょう', 'probably / I suppose', 'Plain form + だろう (casual, written) / でしょう (polite)',
            'Your reasonably confident guess. でしょう？ with rising tone = "right?"',
            ['明日[あした] は *晴[は]れる だろう*。', 'It will probably be sunny tomorrow.'], ['この 映画[えいが]、 *おもしろかった でしょう*？', 'This movie was good, right?'])
        ],
        reading: {
          title: 'ブログ: 日本[にほん] の 一人暮[ひとりぐ]らし', text: [
            '日本[にほん] に 来[き]て、 もう すぐ 一年[いちねん] に なります。 最初[さいしょ] は わからない こと が 多[おお]すぎて、 毎日[まいにち] 大変[たいへん] でした。',
            '例[たと]えば、 ごみ の 分[わ]け方[かた] です。 燃[も]える ごみ と 燃[も]えない ごみ を 分[わ]けなければ ならない ん です が、 説明[せつめい] の 紙[かみ] が 読[よ]みにくくて、 よく 間違[まちが]えました。',
            'でも、 隣[となり] の おばあさん が いつも 親切[しんせつ] に 教[おし]えて くれた ので、 今[いま] は 大丈夫[だいじょうぶ] です。 来年[らいねん] は 日本人[にほんじん] の 友[とも]だち が もっと できる かもしれません。'
          ],
          en: ['It will soon be a year since I came to Japan. At first there were too many things I didn\'t understand, and every day was hard.', 'For example, sorting garbage. You have to separate burnable and non-burnable trash, but the explanation sheet was hard to read, so I often made mistakes.', 'But the old lady next door always kindly taught me, so now I\'m fine. Next year, I might make more Japanese friends.'],
          q: [
            ['What was difficult for the writer at first?', 'Sorting the garbage', 'Making friends at work', 'Learning to cook', 'Riding the trains'],
            ['Why did the writer make mistakes?', 'The instruction sheet was hard to read', 'The garbage days kept changing', 'Nobody explained anything', 'The bins were too far away'],
            ['Who helped the writer?', 'The elderly woman next door', 'A coworker', 'The landlord', 'A Japanese teacher']
          ]
        },
        note: { t: 'The magic of ～んですが…', x: 'Ending a request with <b>～んですが…</b> and trailing off is the politest way to bring up a problem: 部屋のエアコンが動かないんですが… ("The air conditioner in my room isn\'t working…"). The listener will offer help.' },
        ex: [
          { resp: 'あれ、 元気[げんき] が ない です ね。', npcEn: 'Hm, you seem down.', a: 'ちょっと 寝不足[ねぶそく] な ん です。', o: ['ちょっと 寝不足[ねぶそく] だ ん です。', 'ちょっと 寝不足[ねぶそく] すぎます。'] },
          { mc: '"This phone is easy to use."', a: 'この スマホ は 使[つか]いやすい です。', o: ['この スマホ は 使[つか]うやすい です。', 'この スマホ は 使[つか]いすぎます。', 'この スマホ は 使[つか]いにくい です。'] }
        ]
      },
      {
        id: 'N4-13', icon: '❓', title: 'Questions Inside Sentences & Quotes', sub: 'か(どうか) · という · と言っていました',
        goals: ['Embed questions: "I don\'t know whether…"', 'Name and define things with という', 'Relay messages: "she said that…"'],
        words: ['覚[おぼ]えて いる|remember', '確認[かくにん] する|check', '伝[つた]える|tell, pass on', '意味[いみ]|meaning', '店員[てんいん]|shop clerk', '集合[しゅうごう]|gathering, meeting up', '場所[ばしょ]|place', 'について|about, concerning'],
        grammar: [
          G('～か / ～かどうか', 'whether / embedded questions', 'Question word + plain form + か · yes/no: plain form + かどうか',
            'Puts a question inside a sentence. Nouns and な-adj drop だ before か.',
            ['会議[かいぎ] が *何時[なんじ] に 始[はじ]まる か* 知[し]って います か。', 'Do you know what time the meeting starts?'], ['明日[あした] *行[い]ける かどう か* わかりません。', 'I don\'t know whether I can go tomorrow.'], ['鍵[かぎ] を *どこ に 置[お]いた か* 覚[おぼ]えて いない。', 'I don\'t remember where I put my key.']),
          G('～という', 'called / named / that says', 'A という B',
            'Names or defines something: "a B called A". Also introduces the content of news, rules, etc.',
            ['「さくら」 *という* 店[みせ] を 知[し]って います か。', 'Do you know a shop called "Sakura"?'], ['「いただきます」 *という* 言葉[ことば] は 英語[えいご] に 訳[やく]しにくい。', 'The word "itadakimasu" is hard to translate into English.'], ['電車[でんしゃ] が 止[と]まった *という* ニュース を 見[み]ました。', 'I saw the news that the trains had stopped.']),
          G('～と言っていました', 'said that (relaying a message)', 'Plain form + と言っていました / と言っていた',
            'Passing on what someone said.',
            ['田中[たなか] さん は 少[すこ]し *遅[おく]れる と 言[い]って いました*。', 'Tanaka said he\'ll be a little late.'], ['先生[せんせい] が テスト は 来週[らいしゅう] *だ と 言[い]って いた* よ。', 'The teacher said the test is next week.']),
          G('～と伝えてください', 'please tell (someone) that', 'Plain form + と伝えてください',
            'Asking someone to pass on a message.',
            ['佐藤[さとう] さん に 明日[あした] の 会議[かいぎ] は 中止[ちゅうし] *だ と 伝[つた]えて ください*。', 'Please tell Sato that tomorrow\'s meeting is cancelled.'], ['お母[かあ]さん に よろしく *お伝[つた]え ください*。', 'Please give my regards to your mother.']),
          G('～について', 'about, concerning', 'N + について',
            'The topic of talking, thinking, researching.',
            ['日本[にほん] の 文化[ぶんか] *に ついて* レポート を 書[か]きました。', 'I wrote a report about Japanese culture.'], ['その 件[けん] *に ついて* は、 後[あと] で 話[はな]しましょう。', 'Let\'s talk about that matter later.'])
        ],
        dialog: {
          title: 'A message for you', lines: [
            ['Yui', 'さっき ケン から 電話[でんわ] が あった よ。', 'Ken called a little while ago.'],
            ['You', '何[なん] て 言[い]って た？', 'What did he say?'],
            ['Yui', '明日[あした] の 集合[しゅうごう] 場所[ばしょ] が 変[か]わった って。 どこ か は メール する と 言[い]って いた。', 'He said tomorrow\'s meeting place changed. He said he\'d email where.'],
            ['You', 'わかった。 来[く]る かどう か も 確認[かくにん] して みる ね。', 'Got it. I\'ll check whether he\'s coming too.']
          ]
        },
        note: { t: '～って — the casual quote', x: 'In speech, と言っていた shrinks to <b>って</b>: 遅れるって ("he says he\'ll be late"), 何て言ってた？ ("what did he say?"). You\'ll hear って dozens of times a day.' },
        ex: [
          { mc: '"I don\'t know if it\'s true."', a: '本当[ほんとう] かどう か わかりません。', o: ['本当[ほんとう] だ かどう か わかりません か。', '本当[ほんとう] か と わかりません。', '本当[ほんとう] という わかりません。'] },
          { resp: '店長[てんちょう] は 何[なん] と 言[い]って いました か。', npcEn: 'What did the manager say?', a: '明日[あした] は 休[やす]み だ と 言[い]って いました。', o: ['明日[あした] は 休[やす]み と 言[い]って います か。', '明日[あした] は 休[やす]み という です。'] }
        ]
      },
      {
        id: 'N4-14', icon: '📏', title: 'Degree & Limits', sub: 'ほど～ない · しか～ない · だけ · ばかり',
        goals: ['Say "not as… as" with ほど', 'Say "only" in two ways', 'Complain that someone does nothing but…'],
        words: ['思[おも]った ほど|as much as I thought', '人口[じんこう]|population', '残[のこ]り|remainder, what\'s left', '千円[せんえん] しか ない|only have 1,000 yen', '文句[もんく]|complaint', '遊[あそ]んで ばかり|doing nothing but playing', '寒[さむ]さ|coldness', '比[くら]べる|compare'],
        grammar: [
          G('～ほど～ない', 'not as … as', 'A は B ほど + negative',
            'Comparison: A doesn\'t reach B\'s level.',
            ['大阪[おおさか] は 東京[とうきょう] *ほど* 人[ひと] が *多[おお]くない*。', 'Osaka isn\'t as crowded as Tokyo.'], ['試験[しけん] は 思[おも]った *ほど* 難[むずか]しく *なかった*。', 'The exam wasn\'t as hard as I thought.']),
          G('～しか～ない', 'only (and not enough)', 'N + しか + negative',
            'Emphasizes scarcity — always with a negative verb.',
            ['財布[さいふ] に 千円[せんえん] *しか ありません*。', 'I only have 1,000 yen in my wallet.'], ['日本語[にほんご] は 少[すこ]し *しか* 話[はな]せ *ません*。', 'I can only speak a little Japanese.']),
          G('～だけ', 'only, just (neutral)', 'N / plain form + だけ',
            'A neutral "only". Compare しか, which stresses "not enough".',
            ['飲[の]み物[もの] *だけ* 注文[ちゅうもん] しました。', 'I ordered only a drink.'], ['見[み]る *だけ* なら 無料[むりょう] です。', 'It\'s free if you just look.']),
          G('～てばかりいる', 'do nothing but', 'て-form + ばかりいる · N + ばかり',
            'Criticizes doing only one thing, too much.',
            ['弟[おとうと] は ゲーム を *して ばかり いる*。', 'My little brother does nothing but play games.'], ['最近[さいきん]、 コンビニ の 弁当[べんとう] *ばかり* 食[た]べて いる。', 'Lately I eat nothing but konbini bentos.']),
          G('～さ (adjective → noun)', '-ness (turning adjectives into nouns)', 'い-adj: 高い → 高さ · な-adj: 便利 → 便利さ',
            'Measures or names a quality: height, coldness, convenience.',
            ['富士山[ふじさん] の *高[たか]さ* は 3776[さんぜんななひゃくななじゅうろく] メートル です。', 'Mt. Fuji is 3,776 meters high.'], ['北海道[ほっかいどう] の 冬[ふゆ] の *寒[さむ]さ* に びっくり しました。', 'I was surprised by how cold Hokkaido\'s winters are.'])
        ],
        dialog: {
          title: 'Not as bad as I thought', lines: [
            ['Ken', '日本[にほん] の 夏[なつ] は どう？', 'How\'s summer in Japan?'],
            ['You', '思[おも]った ほど 暑[あつ]くない けど、 湿気[しっけ] が すごい ね。', 'Not as hot as I thought, but the humidity is crazy.'],
            ['Ken', 'エアコン の 部屋[へや] に いて ばかり じゃ だめ だよ。', 'You can\'t just stay in air-conditioned rooms, you know.'],
            ['You', 'わかって る。 でも、 外[そと] に 出[で]る の は 夜[よる] だけ に して る。', 'I know. But I only go out at night.']
          ]
        },
        note: { t: 'しか vs だけ', x: '<b>千円だけあります</b> = "I have just 1,000 yen" (neutral). <b>千円しかありません</b> = "I only have 1,000 yen" (and it\'s not enough!). しか always needs a negative.' },
        ex: [
          { fill: '駅[えき] まで 5分[ごふん] ＿ かかりません。', a: 'しか', o: ['だけ', 'ほど'], en: 'It only takes 5 minutes to the station.', why: 'With a negative verb → しか.' },
          { mc: '"This year isn\'t as cold as last year."', a: '今年[ことし] は 去年[きょねん] ほど 寒[さむ]くない。', o: ['今年[ことし] は 去年[きょねん] ほど 寒[さむ]い。', '去年[きょねん] は 今年[ことし] ほど 寒[さむ]くない。', '今年[ことし] は 去年[きょねん] しか 寒[さむ]くない。'] }
        ]
      },
      {
        id: 'N4-15', icon: '🎩', title: 'Keigo Basics', sub: '尊敬語 · 謙譲語 · お～になる · お～する',
        goals: ['Recognize respectful language (尊敬語) for others', 'Use humble language (謙譲語) for yourself', 'Understand what shop staff say to you'],
        words: ['いらっしゃる|be, come, go (respectful)', '召[め]し上[あ]がる|eat, drink (respectful)', 'おっしゃる|say (respectful)', 'ご覧[らん]に なる|see (respectful)', '参[まい]る|go, come (humble)', '申[もう]す|say, be called (humble)', 'いただく|receive, eat (humble)', '拝見[はいけん] する|see (humble)'],
        grammar: [
          G('Respectful verbs (尊敬語)', 'raising the other person', 'いる/行く/来る → いらっしゃる · 食べる/飲む → 召し上がる · 言う → おっしゃる · 見る → ご覧になる · する → なさる · 知っている → ご存じだ',
            'Used for actions of customers, bosses, teachers — anyone you show respect to. Never for yourself!',
            ['社長[しゃちょう] は 今[いま]、 会議室[かいぎしつ] に *いらっしゃいます*。', 'The president is in the meeting room now.'], ['どうぞ *召[め]し上[あ]がって ください*。', 'Please, help yourself (eat).'], ['先生[せんせい] が そう *おっしゃいました*。', 'The teacher said so.']),
          G('お～になる', 'respectful pattern for most verbs', 'お + stem + になる (お待ちになる, お帰りになる)',
            'Turns regular verbs into respectful ones.',
            ['部長[ぶちょう] は もう *お帰[かえ]り に なりました*。', 'The department head has already gone home.'], ['この 本[ほん]、 もう *お読[よ]み に なりました* か。', 'Have you read this book yet?']),
          G('Humble verbs (謙譲語)', 'lowering yourself', '行く/来る → 参る · 言う → 申す · する → いたす · 食べる/もらう → いただく · 見る → 拝見する · いる → おる',
            'For your own actions toward a respected person.',
            ['スミス と *申[もう]します*。', 'My name is Smith.'], ['明日[あした]、 御社[おんしゃ] に *参[まい]ります*。', 'I will come to your company tomorrow.'], ['資料[しりょう] を *拝見[はいけん] しました*。', 'I\'ve looked at the documents.']),
          G('お～する / ご～する', 'humble pattern: I\'ll do it for you', 'お + stem + する (お持ちする) · ご + する-noun + する (ご案内する)',
            'Offering service humbly.',
            ['荷物[にもつ] を *お持[も]ち します*。', 'I\'ll carry your bags (for you).'], ['会議室[かいぎしつ] に *ご案内[あんない] します*。', 'I\'ll show you to the meeting room.']),
          G('Shop & service keigo', 'what staff say to you', 'でございます · かしこまりました · 少々お待ちください · ～でよろしいでしょうか',
            'You\'ll hear these constantly — understand them, and you\'ll handle any shop or hotel.',
            ['こちら が メニュー *で ございます*。', 'Here is the menu.'], ['*かしこまりました*。 *少々[しょうしょう] お待[ま]ち ください*。', 'Certainly. Please wait a moment.'], ['お支払[しはら]い は カード *で よろしい でしょう か*。', 'Will you be paying by card?'])
        ],
        dialog: {
          title: 'Visiting a client', lines: [
            ['Receptionist', 'いらっしゃいませ。 失礼[しつれい] です が、 お名前[なまえ] を お伺[うかが]い できます か。', 'Welcome. Excuse me, may I ask your name?'],
            ['You', 'ABC[エービーシー] 商事[しょうじ] の スミス と 申[もう]します。 鈴木[すずき] 様[さま] と 3時[さんじ] に お約束[やくそく] して おります。', 'I\'m Smith from ABC Trading. I have a 3 o\'clock appointment with Mr. Suzuki.'],
            ['Receptionist', 'かしこまりました。 鈴木[すずき] は 会議室[かいぎしつ] で お待[ま]ち して おります。 ご案内[あんない] いたします。', 'Certainly. Suzuki is waiting in the meeting room. I\'ll show you there.'],
            ['You', 'ありがとう ございます。', 'Thank you.']
          ]
        },
        note: { t: 'Your own company is "humble" too', x: 'In business, staff refer to their own boss <b>without</b> さん when talking to outsiders: 鈴木は会議室におります. Inside the company, it\'s 鈴木部長. Your company is the "in-group", so it gets humble language.' },
        ex: [
          { mc: 'Respectful form of 食べる:', a: '召[め]し上[あ]がる', o: ['いただく', '参[まい]る', '申[もう]す'] },
          { mc: 'Introducing yourself humbly:', a: 'スミス と 申[もう]します。', o: ['スミス と おっしゃいます。', 'スミス様[さま] で ございます。', 'スミス と 言[い]って いらっしゃいます。'] }
        ],
        convo: 'n4-boss-dinner'
      },
      {
        id: 'N4-16', icon: '📚', title: 'N4 Review: Life in Japan', sub: 'Reading & review',
        goals: ['Read a longer text using N4 grammar', 'Review conditionals, passive, causative and keigo', 'Get ready for the N4 mock exam'],
        words: ['生活[せいかつ]|life, living', '慣[な]れる|get used to', '驚[おどろ]く|be surprised', '習慣[しゅうかん]|custom, habit', '違[ちが]い|difference', '感謝[かんしゃ]|gratitude', '経験[けいけん]|experience', '将来[しょうらい]|future'],
        grammar: [
          G('Review: N4 essentials', 'potential, volitional, conditionals, favors, passive, causative, keigo', '',
            'You\'ve covered the core N4 grammar. In this review unit, read a longer passage, then test yourself with the <b>N4 mock exam</b> on the Progress page and keep learning N4 words and kanji in Review & Learn.',
            ['日本[にほん] の 生活[せいかつ] に *慣[な]れて きました*。', 'I\'ve been getting used to life in Japan.'], ['もっと 早[はや]く 日本語[にほんご] を *勉強[べんきょう] すれば よかった*。', 'I wish I had studied Japanese earlier.'])
        ],
        reading: {
          title: '作文[さくぶん]: 日本[にほん] に 来[き]て 驚[おどろ]いた こと', text: [
            'わたし が 日本[にほん] に 来[き]て 一番[いちばん] 驚[おどろ]いた の は、 電車[でんしゃ] の 静[しず]かさ です。 朝[あさ] の 電車[でんしゃ] は とても 混[こ]んで いる のに、 だれ も 電話[でんわ] で 話[はな]して いません。',
            '最初[さいしょ] は 友[とも]だち と 話[はな]して いて、 隣[となり] の 人[ひと] に 注意[ちゅうい] されて しまいました。 それ から は 電車[でんしゃ] の 中[なか] で は 静[しず]か に する よう に して います。',
            'もう 一[ひと]つ 驚[おどろ]いた の は、 忘[わす]れ物[もの] が 戻[もど]って くる こと です。 駅[えき] に 傘[かさ] を 忘[わす]れた とき、 次[つぎ] の 日[ひ] に 取[と]り に 行[い]ったら、 ちゃんと 保管[ほかん] されて いました。',
            '日本[にほん] の 生活[せいかつ] に は ルール が 多[おお]い です が、 慣[な]れれば とても 住[す]みやすい 国[くに] だ と 思[おも]います。'
          ],
          en: ['What surprised me most when I came to Japan was how quiet the trains are. Even though morning trains are packed, nobody talks on the phone.', 'At first I was chatting with a friend and got told off by the person next to me. Since then I make sure to be quiet on trains.', 'Another surprise was that lost things come back. When I left my umbrella at a station and went to get it the next day, it had been properly kept.', 'There are many rules in Japanese life, but once you get used to them, I think it\'s a very easy country to live in.'],
          q: [
            ['What surprised the writer most?', 'How quiet trains are', 'How crowded trains are', 'How expensive trains are', 'How fast trains are'],
            ['What happened when the writer talked with a friend on the train?', 'A neighbor told them to be quiet', 'They missed their stop', 'They lost an umbrella', 'They made a new friend'],
            ['What does the writer think of life in Japan?', 'Easy to live in once you\'re used to the rules', 'Too strict to enjoy', 'Lonely without friends', 'Better in the countryside']
          ]
        },
        ex: [
          { mc: '"If I had known, I would have come."', a: '知[し]って いたら、 来[き]た のに。', o: ['知[し]って いれば、 来[く]る のに。', '知[し]る と、 来[き]た のに。', '知[し]って いる なら、 来[き]ました。'] },
          { mc: '"My boss made me rewrite the report."', a: '上司[じょうし] に レポート を 書[か]き直[なお]させられました。', o: ['上司[じょうし] が レポート を 書[か]き直[なお]されました。', '上司[じょうし] に レポート を 書[か]き直[なお]して くれました。', '上司[じょうし] を レポート に 書[か]き直[なお]させました。'] },
          { mc: 'Respectful way to ask "Will you come tomorrow?" to a client:', a: '明日[あした] いらっしゃいます か。', o: ['明日[あした] 参[まい]ります か。', '明日[あした] 来[き]ます か。', '明日[あした] おります か。'] }
        ]
      }
    ]
  });
})();
