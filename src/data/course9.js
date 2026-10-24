/* Level 9 — JLPT N1: advanced Japanese. Literary, formal, rhetorical and highly nuanced grammar.
 * Vocabulary and kanji for N1 are learned through the N1 decks (Review & Learn). */
(function () {
  const G = (t, m, f, x, ...e) => ({ t, m, f, x, e });
  JT.addLevel({
    n: 9, jlpt: 1, tag: 'N1', icon: '🗻', color: '#1e2230',
    title: 'N1 · Mastery', jp: '上級・日本語の頂へ',
    desc: 'The summit: literary and formal grammar for editorials, speeches, novels and high-level business — expressing inevitability, worth, extremes, rhetoric and subtle attitudes.',
    cando: ['Read editorials, essays and literature', 'Understand formal speeches and ceremonial language', 'Express subtle attitudes: disapproval, admiration, inevitability', 'Use rhetorical and classical-style expressions', 'Follow complex arguments and debates', 'Sit the JLPT N1'],
    lessons: [
      {
        id: 'N1-1', icon: '⚡', title: 'Instant Succession', sub: 'や否や · が早いか · なり · そばから · てからというもの',
        goals: ['Narrate events happening the instant something else does', 'Describe repeated futility with そばから', 'Mark life-changing turning points'],
        words: ['ベル|bell', '飛[と]び出[だ]す|rush out', '発売[はつばい]|release, going on sale', '売[う]り切[き]れる|sell out', '覚[おぼ]える|memorize', '人生[じんせい]|life', '一変[いっぺん] する|change completely', '黙[だま]り込[こ]む|fall silent'],
        grammar: [
          G('～や否[いな]や', 'the moment, as soon as', 'Dictionary form + や否や / や',
            'B happens the instant A happens — written, narrative style.',
            ['ベル が 鳴[な]る *や 否[いな]や*、 生徒[せいと] たち は 教室[きょうしつ] を 飛[と]び出[だ]した。', 'The moment the bell rang, the students rushed out of the classroom.'], ['新商品[しんしょうひん] は 発売[はつばい] される *や 否[いな]や* 売[う]り切[き]れた。', 'The new product sold out the moment it went on sale.']),
          G('～が早[はや]いか', 'no sooner … than', 'Dictionary / た-form + が早いか',
            'An action immediately following another, often impulsively.',
            ['彼[かれ] は 部屋[へや] に 入[はい]る *が 早[はや]い か*、 ベッド に 倒[たお]れ込[こ]んだ。', 'No sooner had he entered the room than he collapsed onto the bed.'], ['子[こ]ども は おもちゃ を 受[う]け取[と]る *が 早[はや]い か*、 箱[はこ] を 開[あ]け始[はじ]めた。', 'The child started opening the box the instant he got the toy.']),
          G('～なり', 'as soon as (then unexpectedly)', 'Dictionary form + なり',
            'One person\'s action followed immediately by an unexpected one.',
            ['彼女[かのじょ] は 手紙[てがみ] を 読[よ]む *なり*、 泣[な]き出[だ]した。', 'As soon as she read the letter, she burst into tears.'], ['父[ちち] は 家[いえ] に 帰[かえ]る *なり*、 黙[だま]って 部屋[へや] に こもった。', 'As soon as my father came home, he silently shut himself in his room.']),
          G('～そばから', 'no sooner … than (repeatedly undone)', 'Dictionary / た-form + そばから',
            'Each time you do something, it\'s immediately undone.',
            ['単語[たんご] を 覚[おぼ]える *そば から* 忘[わす]れて しまう。', 'I forget words as soon as I memorize them.'], ['片付[かたづ]けた *そば から*、 子[こ]ども が 散[ち]らかす。', 'The kids make a mess as soon as I tidy up.']),
          G('～てからというもの', 'ever since (with a big change)', 'て-form + からというもの',
            'A dramatic, lasting change since an event.',
            ['子[こ]ども が *生[う]まれて から と いう もの*、 生活[せいかつ] が 一変[いっぺん] した。', 'Ever since our child was born, our life has completely changed.'], ['彼[かれ] は 日本[にほん] に *来[き]て から と いう もの*、 毎日[まいにち] 日本語[にほんご] で 日記[にっき] を 書[か]いて いる。', 'Ever since he came to Japan, he\'s written a diary in Japanese every day.'])
        ],
        note: { t: 'Narrative speed', x: 'や否や, が早いか and なり all mean "as soon as", but each colors the scene: や否や is crisp and formal, が早いか stresses haste, なり highlights a surprising reaction. Novels use them to control pacing.' },
        ex: [
          { fill: '彼[かれ] は 電話[でんわ] を 切[き]る ＿、 家[いえ] を 飛[と]び出[だ]した。', a: 'なり', o: ['そば から', 'て から と いう もの'], en: 'As soon as he hung up, he rushed out of the house.' },
          { mc: '"Ever since I started running, I\'ve become healthier."', a: '走[はし]り始[はじ]めて から と いう もの、 体[からだ] が 丈夫[じょうぶ] に なった。', o: ['走[はし]り始[はじ]める や 否[いな]や、 体[からだ] が 丈夫[じょうぶ] に なった。', '走[はし]り始[はじ]める そば から、 体[からだ] が 丈夫[じょうぶ] に なった。', '走[はし]り始[はじ]める が 早[はや]い か、 体[からだ] が 丈夫[じょうぶ] に なる。'] }
        ]
      },
      {
        id: 'N1-2', icon: '🎒', title: 'Two Things at Once', sub: 'かたわら · がてら · かたがた · ながらにして',
        goals: ['Describe side activities with かたわら', 'Combine an errand with an outing using がてら', 'Use ながらにして for "while remaining"'],
        words: ['会社員[かいしゃいん]|company employee', '執筆[しっぴつ]|writing (books)', '散歩[さんぽ]|walk', 'お礼[れい]|thanks', '挨拶[あいさつ]|greeting', '居[い]ながら|while staying', '生[う]まれ つき|by nature, from birth', '才能[さいのう]|talent'],
        grammar: [
          G('～かたわら', 'while also (side activity, long-term)', 'Dictionary form / N の + かたわら',
            'A secondary activity pursued alongside one\'s main work.',
            ['彼[かれ] は 会社[かいしゃ] に 勤[つと]める *かたわら*、 小説[しょうせつ] を 書[か]いて いる。', 'While working at a company, he also writes novels.'], ['子育[こそだ]て *の かたわら*、 大学院[だいがくいん] で 研究[けんきゅう] を 続[つづ]けて いる。', 'Alongside raising children, she continues her research at graduate school.']),
          G('～がてら', 'while (doing one thing, also do another)', 'Verb stem / する-noun + がてら',
            'Combining a casual outing with a purpose.',
            ['散歩[さんぽ] *がてら*、 パン を 買[か]い に 行[い]った。', 'I went to buy bread while out for a walk.'], ['駅[えき] まで 友人[ゆうじん] を 送[おく]り *がてら*、 本屋[ほんや] に 寄[よ]った。', 'While seeing my friend off to the station, I stopped by a bookstore.']),
          G('～かたがた', 'also for the purpose of (formal visit)', 'N + かたがた',
            'Formal: visiting or writing for two purposes, typically greeting/thanks.',
            ['お礼[れい] *かたがた*、 ご挨拶[あいさつ] に 伺[うかが]いました。', 'I\'ve come to pay my respects and to thank you.'], ['近況[きんきょう] 報告[ほうこく] *かたがた*、 お手紙[てがみ] を 差[さ]し上[あ]げます。', 'I\'m writing to you, also to let you know how I\'ve been.']),
          G('～ながらにして', 'while remaining (in a state), from birth', 'N / verb stem + ながらにして',
            'Achieving something without changing one\'s state; innate qualities.',
            ['インターネット の おかげ で、 家[いえ] に *い ながら に して* 世界中[せかいじゅう] の 情報[じょうほう] が 手[て] に 入[はい]る。', 'Thanks to the internet, we can get information from all over the world without leaving home.'], ['彼[かれ] は *生[う]まれ ながら に して* 音楽[おんがく] の 才能[さいのう] に 恵[めぐ]まれて いた。', 'He was blessed with musical talent from birth.'])
        ],
        note: { t: 'がてら vs かたわら', x: '<b>がてら</b> is a one-off combination (a walk + shopping). <b>かたわら</b> is a long-term side pursuit (a day job + writing novels). <b>かたがた</b> appears almost only in formal greetings and letters.' },
        ex: [
          { fill: '彼女[かのじょ] は 教師[きょうし] の 仕事[しごと] の ＿、 画家[がか] と して も 活動[かつどう] して いる。', a: 'かたわら', o: ['がてら', 'かたがた'], en: 'Alongside her work as a teacher, she is also active as a painter.' },
          { mc: '"I took a walk to the post office, also to get some exercise."', a: '運動[うんどう] がてら、 郵便局[ゆうびんきょく] まで 歩[ある]いた。', o: ['運動[うんどう] かたわら、 郵便局[ゆうびんきょく] まで 歩[ある]いた。', '運動[うんどう] ながら に して、 郵便局[ゆうびんきょく] まで 歩[ある]いた。', '運動[うんどう] が 早[はや]い か、 郵便局[ゆうびんきょく] まで 歩[ある]いた。'] }
        ]
      },
      {
        id: 'N1-3', icon: '⛓️', title: 'Inevitability', sub: 'ずにはおかない · ないではすまない · を余儀なくされる · を禁じ得ない',
        goals: ['Say something will inevitably happen', 'Say something can\'t be let pass', 'Describe being forced by circumstances'],
        words: ['感動[かんどう]|deep emotion', '作品[さくひん]|work (of art)', '謝罪[しゃざい]|apology', '中止[ちゅうし]|cancellation', '避難[ひなん]|evacuation', '同情[どうじょう]|sympathy', '怒[いか]り|anger', '被災者[ひさいしゃ]|disaster victims'],
        grammar: [
          G('～ずにはおかない', 'will surely, cannot fail to (cause)', 'ない-stem + ずにはおかない (する → せずにはおかない)',
            'Something will inevitably cause a reaction, or someone is determined to act.',
            ['彼[かれ] の 作品[さくひん] は 見[み]る 人[ひと] を *感動[かんどう] させ ず に は おかない*。', 'His work never fails to move those who see it.'], ['この 不正[ふせい] は 必[かなら]ず *暴[あば]か ず に は おかない*。', 'I will expose this fraud, no matter what.']),
          G('～ないではすまない / ～ずにはすまない', 'cannot get away without', 'ない form + ではすまない · ない-stem + ずにはすまない',
            'Social or moral obligation makes something unavoidable.',
            ['これ ほど の 迷惑[めいわく] を かけた の だ から、 *謝[あやま]ら ない で は すまない*。', 'Having caused this much trouble, I can\'t get away without apologizing.'], ['ミス が 明[あき]らか に なれ ば、 責任[せきにん] を *問[と]わ れ ず に は すまない* だろう。', 'If the mistake comes to light, responsibility will surely be demanded.']),
          G('～を余儀[よぎ]なくされる', 'be forced to (by circumstances)', 'N + を余儀なくされる · (causer) を余儀なくさせる',
            'Formal: unavoidable action imposed by circumstances.',
            ['台風[たいふう] の ため、 大会[たいかい] は *中止[ちゅうし] を 余儀[よぎ] なく された*。', 'The tournament was forced to be cancelled due to the typhoon.'], ['住民[じゅうみん] は 長期[ちょうき] の *避難[ひなん] 生活[せいかつ] を 余儀[よぎ] なく されて いる*。', 'Residents have been forced into long-term evacuation.']),
          G('～を禁[きん]じ得[え]ない', 'cannot suppress (an emotion)', 'Emotion N + を禁じ得ない',
            'Formal: overwhelming feeling one can\'t hold back.',
            ['被災者[ひさいしゃ] の 話[はなし] を 聞[き]き、 *同情[どうじょう] を 禁[きん]じ 得[え]ない*。', 'Hearing the victims\' stories, I can\'t help feeling sympathy.'], ['あまり に 無責任[むせきにん] な 発言[はつげん] に、 *怒[いか]り を 禁[きん]じ 得[え]ない*。', 'I cannot suppress my anger at such irresponsible remarks.'])
        ],
        note: { t: 'News vocabulary', x: '<b>～を余儀なくされる</b> is a news favorite: 運休を余儀なくされた (forced to suspend service), 撤退を余儀なくされた (forced to withdraw). It frames hardship as caused by circumstances, not choice.' },
        ex: [
          { fill: '会社[かいしゃ] の 業績[ぎょうせき] 悪化[あっか] に より、 多[おお]く の 社員[しゃいん] が 退職[たいしょく] ＿。', a: 'を 余儀[よぎ] なく された', o: ['を 禁[きん]じ 得[え]なかった', 'ず に は おかなかった'], en: 'Due to the company\'s worsening results, many employees were forced to resign.' },
          { mc: '"Her speech never fails to move the audience."', a: '彼女[かのじょ] の スピーチ は 聴衆[ちょうしゅう] を 感動[かんどう] させ ず に は おかない。', o: ['彼女[かのじょ] の スピーチ は 聴衆[ちょうしゅう] を 感動[かんどう] を 余儀[よぎ] なく された。', '彼女[かのじょ] の スピーチ は 聴衆[ちょうしゅう] に 感動[かんどう] を 禁[きん]じ 得[え]ない。', '彼女[かのじょ] の スピーチ は 聴衆[ちょうしゅう] を 感動[かんどう] し ない で は すまない。'] }
        ]
      },
      {
        id: 'N1-4', icon: '💎', title: 'Worthy & Unworthy', sub: 'に足る · に足りない · に値する · に堪えない · に難くない',
        goals: ['Say something is worth (or not worth) attention', 'Express that something is unbearable to watch or hear', 'Say something is easy to imagine'],
        words: ['信頼[しんらい]|trust', '人物[じんぶつ]|person, figure', '恐[おそ]れる|fear', '尊敬[そんけい]|respect', '一読[いちどく]|a reading', '見[み]る に 堪[た]えない|unbearable to watch', '想像[そうぞう]|imagination', '苦労[くろう]|hardship'],
        grammar: [
          G('～に足[た]る', 'worthy of, sufficient for', 'Dictionary form / N + に足る',
            'Something deserves an action (trust, respect, mention).',
            ['彼[かれ] は *信頼[しんらい] する に 足[た]る* 人物[じんぶつ] だ。', 'He is a person worthy of trust.'], ['この 計画[けいかく] に は 投資[とうし] *する に 足[た]る* 価値[かち] が ある。', 'This plan has enough value to be worth investing in.']),
          G('～に足[た]りない / ～に足[た]らない', 'not worth, trivial', 'Dictionary form / N + に足りない',
            'Not worth worrying about.',
            ['そんな 小[ちい]さな ミス は *恐[おそ]れる に 足[た]りない*。', 'Such a small mistake isn\'t worth fearing.'], ['*取[と]る に 足[た]らない* 問題[もんだい] で 時間[じかん] を 無駄[むだ] に する な。', 'Don\'t waste time on trivial issues.']),
          G('～に値[あたい]する', 'deserve, be worth', 'Dictionary form / N + に値する',
            'Merits praise, attention, etc.',
            ['この 本[ほん] は *一読[いちどく] に 値[あたい] する*。', 'This book is worth reading.'], ['彼[かれ] の 努力[どりょく] は *称賛[しょうさん] に 値[あたい] する*。', 'His efforts deserve praise.']),
          G('～に堪[た]えない / ～に堪[た]える', 'unbearable to / bearable, worth', 'Dictionary form / N + に堪えない (unbearable) / に堪える (bears, is worthy)',
            'に堪えない: too awful to watch/listen to — or (fixed) deep emotion: 感謝に堪えない.',
            ['事故[じこ] の 現場[げんば] は *見[み]る に 堪[た]えない* ほど ひどかった。', 'The accident scene was too terrible to look at.'], ['皆様[みなさま] の ご支援[しえん] に は *感謝[かんしゃ] に 堪[た]えません*。', 'I am deeply grateful for everyone\'s support.'], ['大人[おとな] の 鑑賞[かんしょう] *に 堪[た]える* アニメ', 'an anime that stands up to adult viewing']),
          G('～に難[かた]くない', 'easy to (imagine/understand)', 'Dictionary form / N + に難くない',
            'Formal: it\'s not hard to imagine.',
            ['彼[かれ] の 苦労[くろう] は *想像[そうぞう] に 難[かた]くない*。', 'It\'s not hard to imagine his hardships.'], ['親[おや] の 気持[きも]ち を 考[かんが]えれ ば、 反対[はんたい] する の も *理解[りかい] に 難[かた]くない*。', 'Considering the parents\' feelings, their opposition is easy to understand.'])
        ],
        note: { t: 'Book reviews & recommendations', x: 'Reviews love these: <b>一読に値する</b> ("worth a read"), <b>鑑賞に堪える</b> ("holds up to serious viewing"), <b>取るに足らない</b> ("insignificant"). Watch for them in book, film and restaurant critiques.' },
        ex: [
          { fill: 'あの 政治家[せいじか] の 発言[はつげん] は 聞[き]く ＿。', a: 'に 堪[た]えない', o: ['に 値[あたい] する', 'に 難[かた]くない'], en: 'That politician\'s remarks are unbearable to listen to.' },
          { mc: '"His achievement deserves special mention."', a: '彼[かれ] の 業績[ぎょうせき] は 特筆[とくひつ] に 値[あたい] する。', o: ['彼[かれ] の 業績[ぎょうせき] は 特筆[とくひつ] に 足[た]りない。', '彼[かれ] の 業績[ぎょうせき] は 特筆[とくひつ] に 難[かた]くない。', '彼[かれ] の 業績[ぎょうせき] は 特筆[とくひつ] に 堪[た]えない。'] }
        ]
      },
      {
        id: 'N1-5', icon: '🛡️', title: 'By Means Of & In Defiance Of', sub: 'をもって · をものともせず · をよそに · にもまして · をおいて',
        goals: ['Use formal "with/by means of" and deadlines', 'Describe defying difficulties', 'Say "more than ever" and "no one but"'],
        words: ['本日[ほんじつ]|today (formal)', '締[し]め切[き]る|close (applications)', '困難[こんなん]|difficulty', '挑戦[ちょうせん]|challenge', '心配[しんぱい]|worry', '周囲[しゅうい]|surroundings, people around', '適任者[てきにんしゃ]|the right person for the job', '以前[いぜん]|before, previously'],
        grammar: [
          G('～をもって', 'with, by means of; as of (formal)', 'N + をもって',
            'Formal "by" or a deadline/endpoint.',
            ['本日[ほんじつ] *を もって*、 受付[うけつけ] を 締[し]め切[き]ります。', 'As of today, applications are closed.'], ['書面[しょめん] *を もって* ご連絡[れんらく] いたします。', 'We will contact you in writing.'], ['彼[かれ] の 実力[じつりょく] *を もって すれ ば*、 合格[ごうかく] は 間違[まちが]いない。', 'With his ability, he\'s sure to pass.']),
          G('～をものともせず(に)', 'in defiance of, undaunted by', 'N + をものともせず(に)',
            'Bravely overcoming obstacles (about others).',
            ['彼[かれ] は 怪我[けが] *を もの と も せず*、 最後[さいご] まで 戦[たたか]った。', 'Undaunted by his injury, he fought to the end.'], ['登山[とざん] 隊[たい] は 吹雪[ふぶき] *を もの と も せず に* 頂上[ちょうじょう] を 目指[めざ]した。', 'The climbing team headed for the summit in defiance of the blizzard.']),
          G('～をよそに', 'ignoring, without regard for', 'N + をよそに',
            'Disregarding others\' concerns or the situation.',
            ['親[おや] の 心配[しんぱい] *を よそ に*、 彼[かれ] は 一人[ひとり] で 世界[せかい] 旅行[りょこう] に 出[で]た。', 'Ignoring his parents\' worries, he set off on a solo world trip.'], ['住民[じゅうみん] の 反対[はんたい] *を よそ に*、 工事[こうじ] が 始[はじ]まった。', 'Construction began in disregard of residents\' opposition.']),
          G('～にもまして', 'even more than', 'N + にもまして · 何にもまして (above all)',
            'Exceeds a previous level.',
            ['今年[ことし] の 夏[なつ] は 例年[れいねん] *に も まして* 暑[あつ]い。', 'This summer is even hotter than usual.'], ['*何[なに] に も まして* 大切[たいせつ] な の は 健康[けんこう] だ。', 'Above all else, health is what matters.']),
          G('～をおいて(ほかに)…ない', 'nobody/nothing but', 'N + をおいて + ほかにない',
            'Only X fits — high praise.',
            ['この 仕事[しごと] を 任[まか]せられる の は、 彼[かれ] *を おいて ほか に い ない*。', 'There\'s no one but him we can entrust this job to.'], ['日本[にほん] の 紅葉[こうよう] を 楽[たの]しむ なら、 京都[きょうと] *を おいて ほか に ない*。', 'For enjoying autumn leaves in Japan, there\'s no place but Kyoto.'])
        ],
        note: { t: 'をもって in ceremonies', x: 'Formal endings often use をもって: <b>これをもちまして、本日の会を終了いたします</b> ("With this, today\'s gathering comes to a close"). You\'ll hear it at weddings, graduations and company events.' },
        ex: [
          { fill: '周囲[しゅうい] の 反対[はんたい] ＿、 彼[かれ] は 会社[かいしゃ] を 辞[や]めて 起業[きぎょう] した。', a: 'を よそ に', o: ['を もって', 'に も まして'], en: 'Disregarding the opposition of those around him, he quit to start his own business.' },
          { mc: '"With this, the meeting is adjourned."', a: 'これ を もちまして、 会議[かいぎ] を 終了[しゅうりょう] いたします。', o: ['これ を よそ に、 会議[かいぎ] を 終了[しゅうりょう] いたします。', 'これ を おいて、 会議[かいぎ] を 終了[しゅうりょう] いたします。', 'これ に も まして、 会議[かいぎ] を 終了[しゅうりょう] いたします。'] }
        ]
      },
      {
        id: 'N1-6', icon: '🚩', title: 'Starting & Ending Points', sub: 'を皮切りに · を限りに · に至っては · に至るまで · を機に',
        goals: ['Describe the starting point of a series', 'Mark a final occasion', 'Express extremes and full coverage'],
        words: ['公演[こうえん]|performance', '全国[ぜんこく]|nationwide', 'ツアー|tour', '引退[いんたい]|retirement', '社員[しゃいん]|employees', '細部[さいぶ]|details', '転職[てんしょく]|job change', '退職[たいしょく]|retirement, leaving a job'],
        grammar: [
          G('～を皮切[かわき]りに', 'starting with (a series)', 'N + を皮切りに(して)',
            'The first of a series of events.',
            ['東京[とうきょう] 公演[こうえん] *を 皮切[かわき]り に*、 全国[ぜんこく] ツアー が 始[はじ]まる。', 'Starting with the Tokyo performance, a nationwide tour begins.'], ['彼[かれ] の 発言[はつげん] *を 皮切[かわき]り に*、 次々[つぎつぎ] と 反対[はんたい] 意見[いけん] が 出[で]た。', 'Starting with his remark, opposing opinions came one after another.']),
          G('～を限[かぎ]りに', 'as of (last time), after … no more', 'N + を限りに',
            'Marks the final instance.',
            ['今日[きょう] *を 限[かぎ]り に*、 タバコ を やめる。', 'As of today, I\'m quitting smoking.'], ['彼女[かのじょ] は 今季[こんき] *を 限[かぎ]り に* 現役[げんえき] を 引退[いんたい] する。', 'She will retire from active play after this season.']),
          G('～に至[いた]っては', 'as for (the most extreme case)', 'N + に至っては',
            'Introduces the most extreme example.',
            ['家族[かぞく] は みんな 反対[はんたい] した。 父[ちち] *に 至[いた]って は*、 口[くち] も きいて くれない。', 'My whole family opposed it. As for my father, he won\'t even speak to me.'], ['ほとんど の 社員[しゃいん] が 遅刻[ちこく] し、 部長[ぶちょう] *に 至[いた]って は* 昼[ひる] まで 来[こ]なかった。', 'Most staff were late; the manager didn\'t show up until noon.']),
          G('～に至[いた]るまで', 'down to, even (wide coverage)', 'N + に至るまで',
            'Emphasizes the extent of coverage.',
            ['この 店[みせ] は 料理[りょうり] は もちろん、 器[うつわ] *に 至[いた]る まで* こだわって いる。', 'This restaurant is particular not only about the food but right down to the tableware.'], ['子[こ]ども から お年寄[としよ]り *に 至[いた]る まで*、 誰[だれ] でも 楽[たの]しめる。', 'Everyone from children to the elderly can enjoy it.']),
          G('～を機[き]に', 'taking the opportunity of', 'N + を機に',
            'An event serves as a turning point.',
            ['結婚[けっこん] *を 機[き] に*、 会社[かいしゃ] を 辞[や]めた。', 'I quit my job on the occasion of my marriage.'], ['転勤[てんきん] *を 機[き] に*、 家[いえ] を 買[か]う こと に した。', 'Taking the opportunity of my transfer, I decided to buy a house.'])
        ],
        note: { t: 'Announcing retirement', x: 'Athletes and celebrities announce <b>今シーズンを限りに引退します</b>. Businesses say <b>本日を限りに閉店いたします</b> ("closing permanently as of today"). Recognize these and you\'ll follow Japanese news headlines easily.' },
        ex: [
          { fill: 'この 地域[ちいき] の 店[みせ] は 減[へ]る 一方[いっぽう] で、 本屋[ほんや] ＿ 一軒[いっけん] も 残[のこ]って いない。', a: 'に 至[いた]って は', o: ['を 皮切[かわき]り に', 'を 機[き] に'], en: 'Shops in this area keep decreasing; as for bookstores, not a single one remains.' },
          { mc: '"Taking the opportunity of the new year, I started a diary."', a: '新年[しんねん] を 機[き] に、 日記[にっき] を 始[はじ]めた。', o: ['新年[しんねん] を 限[かぎ]り に、 日記[にっき] を 始[はじ]めた。', '新年[しんねん] に 至[いた]って は、 日記[にっき] を 始[はじ]めた。', '新年[しんねん] に 至[いた]る まで、 日記[にっき] を 始[はじ]めた。'] }
        ]
      },
      {
        id: 'N1-7', icon: '🍱', title: 'Only Here, Only This', sub: 'ならでは · ならまだしも · なりに · なくして',
        goals: ['Praise what is unique to a place or person', 'Say "it would be one thing if…"', 'Describe doing things in one\'s own way'],
        words: ['郷土[きょうど] 料理[りょうり]|local cuisine', '職人[しょくにん]|artisan', '技[わざ]|skill, technique', '子[こ]ども なり|in a child\'s own way', '努力[どりょく] なくして|without effort', '成功[せいこう]|success', '一度[いちど] なら|if (it were) once', '許[ゆる]す|forgive'],
        grammar: [
          G('～ならでは(の)', 'unique to, only possible with', 'N + ならでは(の)',
            'Praises something characteristic of a specific place/person.',
            ['これ は 京都[きょうと] *なら で は の* 味[あじ] です。', 'This is a flavor you can only find in Kyoto.'], ['職人[しょくにん] *なら で は の* 技[わざ] が 光[ひか]る 作品[さくひん] だ。', 'It\'s a piece where the skill only an artisan has shines.']),
          G('～ならまだしも', 'it would be one thing if … but', 'N / plain form + ならまだしも',
            'A lesser case is acceptable; the actual case isn\'t.',
            ['一度[いちど] *なら まだしも*、 何度[なんど] も 遅刻[ちこく] する の は 問題[もんだい] だ。', 'Once would be one thing, but being late again and again is a problem.'], ['子[こ]ども *なら まだしも*、 大人[おとな] が そんな こと を する なんて。', 'It\'d be one thing for a child, but for an adult to do that…']),
          G('～なりに / ～なりの', 'in one\'s own way', 'N / plain form + なりに / なりの + N',
            'Doing one\'s best within one\'s limitations.',
            ['子[こ]ども は 子[こ]ども *なり に* 悩[なや]み が ある もの だ。', 'Children have their own worries in their own way.'], ['わたし *なり に* 頑張[がんば]った つもり です。', 'I did my best in my own way.']),
          G('～なくして(は)', 'without (X, Y is impossible)', 'N + なくして(は) + negative',
            'An essential condition.',
            ['努力[どりょく] *なくして* 成功[せいこう] は あり 得[え]ない。', 'Success is impossible without effort.'], ['皆様[みなさま] の ご協力[きょうりょく] *なくして は*、 この 計画[けいかく] は 実現[じつげん] しません でした。', 'This plan could not have been realized without everyone\'s cooperation.'])
        ],
        note: { t: 'Tourism slogans', x: 'Travel ads constantly use <b>ここならではの体験</b> ("experiences you can only have here") and <b>地元ならではの味</b> ("local flavors only found here"). It\'s the language of "authentic".' },
        ex: [
          { fill: '理由[りゆう] が ある ＿、 無断[むだん] で 休[やす]む の は 許[ゆる]されない。', a: 'なら まだしも', o: ['なら で は', 'なり に'], en: 'It would be one thing if there was a reason, but taking time off without notice isn\'t acceptable.' },
          { mc: '"Without your support, we couldn\'t have won."', a: '皆[みな]さん の 応援[おうえん] なくして は、 勝[か]てません でした。', o: ['皆[みな]さん の 応援[おうえん] なら で は、 勝[か]てません でした。', '皆[みな]さん の 応援[おうえん] なり に、 勝[か]てません でした。', '皆[みな]さん の 応援[おうえん] なら まだしも、 勝[か]てません でした。'] }
        ]
      },
      {
        id: 'N1-8', icon: '🎌', title: 'Given That…', sub: 'とあって · とあれば · ともなると · ともあろう · といえども',
        goals: ['Explain special circumstances with とあって', 'Say "if it\'s for…" with とあれば', 'Express expectations of status with ともなると / ともあろう'],
        words: ['連休[れんきゅう]|consecutive holidays', '観光地[かんこうち]|tourist spot', '家族[かぞく] の ため|for the family', '大臣[だいじん]|minister', '発言[はつげん]|remark', '専門家[せんもんか]|expert', '油断[ゆだん]|carelessness', '社会人[しゃかいじん]|working adult'],
        grammar: [
          G('～とあって', 'because (of a special circumstance)', 'Plain form / N + とあって',
            'An unusual situation naturally leads to a result (news style).',
            ['連休[れんきゅう] *と あって*、 観光地[かんこうち] は どこ も 人[ひと] で いっぱい だ。', 'Because it\'s a long holiday weekend, tourist spots are packed everywhere.'], ['人気[にんき] 歌手[かしゅ] が 来[く]る *と あって*、 会場[かいじょう] は 朝[あさ] から 長蛇[ちょうだ] の 列[れつ] だ。', 'With a popular singer coming, there\'s been a long line at the venue since morning.']),
          G('～とあれば', 'if it\'s (for the sake of)', 'Plain form / N + とあれば',
            'For a special reason, one will do anything.',
            ['家族[かぞく] の ため *と あれ ば*、 どんな 苦労[くろう] も いとわない。', 'If it\'s for my family, I won\'t shy away from any hardship.'], ['社長[しゃちょう] の 命令[めいれい] *と あれ ば*、 従[したが]う しか ない。', 'If it\'s the president\'s order, we have no choice but to obey.']),
          G('～ともなると / ～ともなれば', 'once (one reaches a certain level)', 'N / dictionary form + ともなると',
            'Higher status or stage brings different expectations.',
            ['社会人[しゃかいじん] *と も なる と*、 自分[じぶん] の 行動[こうどう] に 責任[せきにん] を 持[も]たなければ ならない。', 'Once you\'re a working adult, you must take responsibility for your actions.'], ['12月[じゅうにがつ] *と も なれ ば*、 街[まち] は クリスマス 一色[いっしょく] に なる。', 'Come December, the whole town is all about Christmas.']),
          G('～ともあろう', 'someone of (high) standing like', 'N + ともあろう + N',
            'Criticism: behavior unworthy of one\'s position.',
            ['大臣[だいじん] *と も あろう* 人[ひと] が、 そんな 発言[はつげん] を する とは。', 'For someone of a minister\'s standing to make such a remark…'], ['専門家[せんもんか] *と も あろう* 者[もの] が、 こんな 初歩的[しょほてき] な ミス を する なんて。', 'For an expert to make such a basic mistake…']),
          G('～といえども', 'even though, even (formal)', 'Plain form / N + といえども',
            'Formal concession: even X isn\'t exempt.',
            ['子[こ]ども *と いえ ども*、 ルール は 守[まも]らなければ ならない。', 'Even children must follow the rules.'], ['プロ *と いえ ども*、 油断[ゆだん] すれ ば 負[ま]ける。', 'Even professionals lose if they let their guard down.'])
        ],
        note: { t: 'Japanese criticism, gently', x: '<b>～ともあろう人が</b> is a refined way to express disappointment: it implies the person should know better because of their position — sharp, but indirect.' },
        ex: [
          { fill: '年末[ねんまつ] ＿、 空港[くうこう] は 帰省[きせい] する 人[ひと] で 混雑[こんざつ] して いる。', a: 'と あって', o: ['と あれ ば', 'と いえ ども'], en: 'It being year-end, the airport is crowded with people going home.' },
          { mc: '"Even a genius needs effort."', a: '天才[てんさい] と いえ ども、 努力[どりょく] は 必要[ひつよう] だ。', o: ['天才[てんさい] と あって、 努力[どりょく] は 必要[ひつよう] だ。', '天才[てんさい] と も あろう、 努力[どりょく] は 必要[ひつよう] だ。', '天才[てんさい] と あれ ば、 努力[どりょく] は 必要[ひつよう] ない。'] }
        ]
      },
      {
        id: 'N1-9', icon: '🚫', title: 'Not Even…', sub: 'たりとも · すら · だに · はおろか',
        goals: ['Emphasize "not even one" with たりとも', 'Use すら and だに for extreme examples', 'Say "let alone" with はおろか'],
        words: ['一円[いちえん]|one yen', '無駄[むだ]|waste', '油断[ゆだん]|carelessness', '名前[なまえ] すら|even the name', '想像[そうぞう] だに|even imagining', '恐[おそ]ろしい|frightening', '漢字[かんじ] は おろか|let alone kanji', 'ひらがな|hiragana'],
        grammar: [
          G('～たりとも', 'not even (a single)', 'One-unit N (一日, 一円, 一瞬) + たりとも + negative',
            'Absolutely none — strong, formal.',
            ['試験[しけん] まで あと 一[いっ]か月[げつ]。 *一日[いちにち] たり と も* 無駄[むだ] に できない。', 'One month until the exam. I can\'t waste even a single day.'], ['税金[ぜいきん] は *一円[いちえん] たり と も* 無駄[むだ] に して は ならない。', 'Not a single yen of tax money must be wasted.']),
          G('～すら / ～ですら', 'even (an extreme example)', 'N + すら / ですら',
            'A more formal, literary さえ.',
            ['彼[かれ] は 自分[じぶん] の 名前[なまえ] *すら* 書[か]けない。', 'He can\'t even write his own name.'], ['専門家[せんもんか] *で すら* 解[と]けない 問題[もんだい] だ。', 'It\'s a problem even experts can\'t solve.']),
          G('～だに', 'even (just thinking/hearing)', 'Dictionary form (考える, 想像する, 聞く) + だに',
            'Literary: even the thought is too much.',
            ['あの 事故[じこ] の こと は *思[おも]い 出[だ]す だに* 恐[おそ]ろしい。', 'Even just recalling that accident is frightening.'], ['こんな 結果[けっか] に なる とは *想像[そうぞう] だに* しなかった。', 'I never even imagined it would turn out like this.']),
          G('～はおろか', 'let alone, not to mention', 'N + はおろか',
            'If even the easier thing isn\'t possible, the harder thing certainly isn\'t (usually negative).',
            ['漢字[かんじ] *は おろか*、 ひらがな も 読[よ]めない。', 'I can\'t even read hiragana, let alone kanji.'], ['旅行[りょこう] *は おろか*、 近所[きんじょ] に 出[で]かける 時間[じかん] も ない。', 'I don\'t even have time to go out locally, let alone travel.'])
        ],
        note: { t: 'Escalating emphasis', x: 'Strength of "even": も (also) → さえ (even) → すら (even, literary) → だに (even just…, very literary). Use はおろか + も/さえ to build a powerful "let alone" sentence.' },
        ex: [
          { fill: '一瞬[いっしゅん] ＿ 気[き] を 抜[ぬ]く な。', a: 'たり と も', o: ['は おろか', 'だに'], en: 'Don\'t let your guard down for even a moment.' },
          { mc: '"He doesn\'t even have a car, let alone a house."', a: '彼[かれ] は 家[いえ] は おろか、 車[くるま] さえ 持[も]って いない。', o: ['彼[かれ] は 家[いえ] たり と も、 車[くるま] さえ 持[も]って いない。', '彼[かれ] は 家[いえ] だに、 車[くるま] さえ 持[も]って いない。', '彼[かれ] は 家[いえ] すら おろか、 車[くるま] を 持[も]って いる。'] }
        ]
      },
      {
        id: 'N1-10', icon: '📜', title: 'Classical Shoulds', sub: 'まじき · べからず · べく · べくもない · んがため',
        goals: ['Recognize classical-style prohibitions', 'Express purpose with べく', 'Say something is impossible with べくもない'],
        words: ['教師[きょうし]|teacher', '行為[こうい]|act, deed', '立入[たちいり]|entry', '芝生[しばふ]|lawn', '夢[ゆめ] を 叶[かな]える|realize a dream', '知[し]る べく も ない|no way of knowing', '比[くら]べる べく も ない|beyond comparison', '勝[か]たん が ため|in order to win'],
        grammar: [
          G('～まじき', 'unbecoming of, should not (for a role)', 'Dictionary form + まじき + N (する → すまじき)',
            'Behavior inappropriate for someone\'s role.',
            ['生徒[せいと] を 殴[なぐ]る なんて、 教師[きょうし] に *ある まじき* 行為[こうい] だ。', 'Hitting a student is conduct unbecoming of a teacher.'], ['それ は 医者[いしゃ] と して *許[ゆる]す まじき* 行為[こうい] だ。', 'That is an act that cannot be tolerated from a doctor.']),
          G('～べからず / ～べからざる', 'must not (signs, rules)', 'Dictionary form + べからず (する → すべからず)',
            'Classical prohibition used on signs and in maxims.',
            ['芝生[しばふ] に *入[はい]る べからず*。', 'Keep off the grass.'], ['初心[しょしん] *忘[わす]る べからず*。', 'Never forget your beginner\'s spirit. (proverb)'], ['欠[か]く *べからざる* 存在[そんざい]', 'an indispensable presence']),
          G('～べく', 'in order to (formal)', 'Dictionary form + べく (する → すべく)',
            'Formal purpose.',
            ['夢[ゆめ] を *叶[かな]える べく*、 彼[かれ] は 毎日[まいにち] 努力[どりょく] を 続[つづ]けた。', 'In order to realize his dream, he kept working hard every day.'], ['問題[もんだい] を *解決[かいけつ] す べく*、 対策[たいさく] チーム が 作[つく]られた。', 'A task force was formed to solve the problem.']),
          G('～べくもない', 'there is no way to', 'Dictionary form + べくもない',
            'Something is beyond possibility.',
            ['プロ の 演奏[えんそう] と は *比[くら]べる べく も ない*。', 'There\'s no comparing it with a professional performance.'], ['当時[とうじ] の わたし に は、 その 意味[いみ] など *知[し]る べく も なかった*。', 'Back then, I had no way of knowing what it meant.']),
          G('～んがため(に)', 'in order to (literary, strong will)', 'ない-stem + んがため (する → せんがため)',
            'Archaic, very strong purpose.',
            ['勝[か]た *ん が ため に*、 彼[かれ] は あらゆる 努力[どりょく] を した。', 'In order to win, he made every possible effort.'], ['真実[しんじつ] を 知[し]ら *ん が ため*、 彼[かれ] は 旅[たび] に 出[で]た。', 'To learn the truth, he set out on a journey.'])
        ],
        note: { t: 'Old Japanese lives on', x: 'Classical forms like <b>べからず</b> survive on signs, in proverbs and in martial-arts dojos: 初心忘るべからず (Zeami, 15th century) is still quoted at every company orientation.' },
        ex: [
          { fill: '新製品[しんせいひん] を 開発[かいはつ] す ＿、 研究[けんきゅう] チーム が 結成[けっせい] された。', a: 'べく', o: ['べからず', 'まじき'], en: 'A research team was formed in order to develop a new product.' },
          { mc: '"Lying is unbecoming of a politician."', a: '嘘[うそ] を つく の は 政治家[せいじか] に ある まじき こと だ。', o: ['嘘[うそ] を つく の は 政治家[せいじか] に ある べく こと だ。', '嘘[うそ] を つく の は 政治家[せいじか] に ある べく も ない こと だ。', '嘘[うそ] を つく の は 政治家[せいじか] に ある ん が ため だ。'] }
        ]
      },
      {
        id: 'N1-11', icon: '🌪️', title: 'Bad Ends & Tendencies', sub: 'しまつだ · きらいがある · ずくめ · まみれ · めく · じみる',
        goals: ['Describe a bad outcome after a series of problems', 'Point out undesirable tendencies', 'Describe things full of or resembling something'],
        words: ['借金[しゃっきん]|debt', '家出[いえで]|running away from home', '何事[なにごと] も|everything', '大[おお]げさ|exaggerated', '黒[くろ] ずくめ|all in black', '汗[あせ] まみれ|covered in sweat', '春[はる] めく|become spring-like', '子[こ]ども じみた|childish'],
        grammar: [
          G('～しまつだ', 'end up (in a bad way)', 'Dictionary form / この・あの + しまつだ',
            'A disgraceful outcome after a series of bad events.',
            ['彼[かれ] は 借金[しゃっきん] を 重[かさ]ね、 ついに は 家族[かぞく] に まで 嘘[うそ] を *つく しまつ だ*。', 'He piled up debts, and in the end even lied to his family.'], ['遅刻[ちこく] ばかり か、 今日[きょう] は 無断[むだん] 欠勤[けっきん] *する しまつ だ*。', 'Not only is he always late, today he even skipped work without notice.']),
          G('～きらいがある', 'have a tendency to (undesirable)', 'Dictionary form / N の + きらいがある',
            'A negative tendency (critical, formal).',
            ['彼[かれ] は 何事[なにごと] も 大[おお]げさ に *言[い]う きらい が ある*。', 'He tends to exaggerate everything.'], ['最近[さいきん] の 若者[わかもの] は 失敗[しっぱい] を *恐[おそ]れる きらい が ある*。', 'Young people these days tend to fear failure.']),
          G('～ずくめ', 'entirely, nothing but', 'N + ずくめ',
            'Completely full of something (often good things: いいことずくめ).',
            ['今年[ことし] は 結婚[けっこん] に 昇進[しょうしん] と、 *いい こと ずくめ* だった。', 'This year was nothing but good things — marriage and a promotion.'], ['彼女[かのじょ] は いつも *黒[くろ] ずくめ* の 服[ふく] を 着[き]て いる。', 'She always dresses all in black.']),
          G('～まみれ', 'covered in (unpleasant)', 'N + まみれ',
            'Covered all over with something messy.',
            ['子[こ]ども たち は *泥[どろ] まみれ* に なって 遊[あそ]んで いた。', 'The children were playing, covered in mud.'], ['一日中[いちにちじゅう] 働[はたら]いて *汗[あせ] まみれ* に なった。', 'I worked all day and got drenched in sweat.']),
          G('～めく / ～じみる', '-ish, showing signs of / smacking of', 'N + めく (spring-like) · N + じみる (childish, often negative)',
            'めく: signs of a season or quality appear. じみる: takes on an (often negative) quality.',
            ['日差[ひざ]し が 暖[あたた]かく なり、 だいぶ *春[はる] めいて きた*。', 'The sunlight has warmed and it\'s become quite spring-like.'], ['いい 大人[おとな] が *子[こ]ども じみた* こと を する な。', 'A grown adult shouldn\'t act so childish.'])
        ],
        note: { t: 'Criticizing with style', x: '<b>～しまつだ</b> and <b>～きらいがある</b> are how editorials criticize people and trends without crude words — useful for understanding opinion pieces and debates.' },
        ex: [
          { fill: '彼[かれ] は 人[ひと] の 意見[いけん] を 聞[き]かない ＿。', a: 'きらい が ある', o: ['しまつ だ', 'ずくめ だ'], en: 'He tends not to listen to others\' opinions.' },
          { mc: '"After the rain, the kids came home covered in mud."', a: '雨[あめ] の 後[あと]、 子[こ]ども たち は 泥[どろ] まみれ で 帰[かえ]って きた。', o: ['雨[あめ] の 後[あと]、 子[こ]ども たち は 泥[どろ] ずくめ で 帰[かえ]って きた。', '雨[あめ] の 後[あと]、 子[こ]ども たち は 泥[どろ] めいて 帰[かえ]って きた。', '雨[あめ] の 後[あと]、 子[こ]ども たち は 泥[どろ] きらい で 帰[かえ]って きた。'] }
        ]
      },
      {
        id: 'N1-12', icon: '⚖️', title: 'Whether… or…', sub: 'であれ～であれ · といい～といい · なり～なり · つ～つ · いかんで',
        goals: ['Say "whether A or B" formally', 'Praise multiple aspects with といい～といい', 'Express dependence with いかんで'],
        words: ['晴[は]れ|clear weather', '色[いろ]|color', '形[かたち]|shape', '電話[でんわ] なり メール なり|by phone or email', '抜[ぬ]きつ 抜[ぬ]かれつ|neck and neck', '持[も]ちつ 持[も]たれつ|give and take', '結果[けっか] いかん|depending on the result', '理由[りゆう] の いかん を 問[と]わず|regardless of the reason'],
        grammar: [
          G('～であれ～であれ', 'whether A or B', 'N であれ N であれ',
            'Formal: regardless of which.',
            ['晴[は]れ *で あれ* 雨[あめ] *で あれ*、 試合[しあい] は 予定[よてい] 通[どお]り 行[おこな]う。', 'Rain or shine, the match will go ahead as scheduled.'], ['大人[おとな] *で あれ* 子[こ]ども *で あれ*、 ルール は 守[まも]る べき だ。', 'Whether adult or child, rules should be followed.']),
          G('～といい～といい', 'both A and B (evaluation)', 'N といい N といい',
            'Evaluates by citing two aspects.',
            ['この 茶碗[ちゃわん] は 色[いろ] *と いい* 形[かたち] *と いい*、 申[もう]し分[ぶん] ない。', 'This tea bowl is impeccable in both color and shape.'], ['彼[かれ] は 声[こえ] *と いい* 表情[ひょうじょう] *と いい*、 父親[ちちおや] に そっくり だ。', 'In both voice and expression, he\'s just like his father.']),
          G('～なり～なり', 'either A or B (suggestion)', 'Dictionary form / N + なり + … + なり',
            'Suggests options, with others possible.',
            ['わからない こと が あれ ば、 先生[せんせい] に 聞[き]く *なり* 辞書[じしょ] で 調[しら]べる *なり* しなさい。', 'If there\'s something you don\'t know, ask the teacher or look it up in a dictionary.'], ['電話[でんわ] *なり* メール *なり* で 連絡[れんらく] して ください。', 'Please contact us by phone or email or whatever.']),
          G('～つ～つ', 'alternating (both ways)', 'Verb stem + つ + (opposite) verb stem + つ',
            'Fixed expressions of back-and-forth.',
            ['二人[ふたり] は *抜[ぬ]き つ 抜[ぬ]かれ つ* の 接戦[せっせん] を 繰[く]り広[ひろ]げた。', 'The two had a neck-and-neck race, overtaking each other back and forth.'], ['人間[にんげん] は *持[も]ち つ 持[も]たれ つ* の 関係[かんけい] で 生[い]きて いる。', 'Humans live in relationships of give and take.']),
          G('～いかんで / ～いかんによらず', 'depending on / regardless of', 'N (の) + いかんで(は) / いかんによらず · 理由のいかんを問わず',
            'Formal dependence or independence.',
            ['試験[しけん] の 結果[けっか] *いかん で*、 進学[しんがく] できる か どう か が 決[き]まる。', 'Whether you can advance depends on the exam results.'], ['理由[りゆう] の *いかん を 問[と]わず*、 遅刻[ちこく] は 認[みと]められない。', 'Regardless of the reason, lateness is not permitted.'])
        ],
        note: { t: '持ちつ持たれつ', x: '<b>持ちつ持たれつ</b> ("give and take", lit. "holding and being held") expresses a core Japanese social value: relationships of mutual support, where favors circulate.' },
        ex: [
          { fill: 'この 料理[りょうり] は 味[あじ] と いい 見[み]た目[め] ＿、 最高[さいこう] だ。', a: 'と いい', o: ['で あれ', 'なり'], en: 'This dish is superb in both taste and appearance.' },
          { mc: '"Regardless of the reason, cancellations are not refunded."', a: '理由[りゆう] の いかん を 問[と]わず、 キャンセル の 返金[へんきん] は いたしません。', o: ['理由[りゆう] と いい、 キャンセル の 返金[へんきん] は いたしません。', '理由[りゆう] なり、 キャンセル の 返金[へんきん] は いたしません。', '理由[りゆう] つ、 キャンセル の 返金[へんきん] は いたしません。'] }
        ]
      },
      {
        id: 'N1-13', icon: '🎲', title: 'Expectations Defied', sub: 'かと思いきや · とは · ものを · とばかりに · んばかりに',
        goals: ['Say "I thought…, but actually…"', 'Express shock with とは', 'Describe gestures that all but say something'],
        words: ['合格[ごうかく]|passing', '不合格[ふごうかく]|failing', '晴[は]れる か と 思[おも]いきや|thought it would clear up but', '言[い]わんばかり|as if to say', '泣[な]き出[だ]さんばかり|on the verge of tears', '今[いま] だ と ばかり に|seizing the moment', '素直[すなお] に|obediently, frankly', '謝[あやま]れ ば いい ものを|should have just apologized'],
        grammar: [
          G('～かと思[おも]いきや', 'I thought…, but (unexpectedly)', 'Plain form + かと思いきや',
            'An expectation is overturned.',
            ['簡単[かんたん] に *勝[か]てる か と 思[おも]いきや*、 意外[いがい] な 苦戦[くせん] を 強[し]いられた。', 'I thought we\'d win easily, but surprisingly we struggled.'], ['もう *帰[かえ]った か と 思[おも]いきや*、 まだ 会社[かいしゃ] に 残[のこ]って いた。', 'I thought he\'d gone home, but he was still at the office.']),
          G('～とは', 'to think that … (surprise)', 'Plain form + とは',
            'Strong surprise or disbelief.',
            ['あの 彼[かれ] が 社長[しゃちょう] に *なる とは*、 夢[ゆめ] に も 思[おも]わなかった。', 'To think that he would become president — I never dreamed of it.'], ['こんな ところ で 君[きみ] に *会[あ]う とは*！', 'Fancy meeting you here!']),
          G('～ものを', 'if only (regret, reproach)', 'Plain form + ものを',
            'Regret that something better wasn\'t done.',
            ['素直[すなお] に *謝[あやま]れ ば いい もの を*、 彼[かれ] は 言[い]い訳[わけ] ばかり した。', 'He should have just apologized honestly, but he only made excuses.'], ['言[い]って くれれ ば *手伝[てつだ]った もの を*。', 'If only you\'d told me, I would have helped.']),
          G('～とばかりに', 'as if to say', 'Phrase + とばかりに',
            'An action that clearly conveys an unspoken message.',
            ['彼[かれ] は 「*もう 帰[かえ]れ*」 *と ばかり に* ドア を 開[あ]けた。', 'He opened the door as if to say "go home now".'], ['チャンス *と ばかり に*、 彼女[かのじょ] は 自分[じぶん] の 意見[いけん] を 述[の]べた。', 'Seizing the chance, she stated her opinion.']),
          G('～んばかり', 'almost, on the verge of', 'ない-stem + んばかり(に / の) (する → せんばかり)',
            'So intense it seems about to happen.',
            ['彼女[かのじょ] は 今[いま] に も *泣[な]き出[だ]さ ん ばかり の* 顔[かお] を して いた。', 'She looked as if she was about to burst into tears.'], ['会場[かいじょう] は 割[わ]れ *ん ばかり の* 拍手[はくしゅ] に 包[つつ]まれた。', 'The hall was filled with thunderous applause.'])
        ],
        note: { t: 'Literary drama', x: '<b>割れんばかりの拍手</b> ("applause fit to bring the house down") and <b>泣き出さんばかり</b> are stock phrases in novels and sports reporting — vivid shortcuts for intense moments.' },
        ex: [
          { fill: '雨[あめ] が 止[や]んだ ＿、 また すぐ 降[ふ]り出[だ]した。', a: 'か と 思[おも]いきや', o: ['とは', 'もの を'], en: 'I thought the rain had stopped, but it started again right away.' },
          { mc: '"He looked at me as if to say \'You\'re wrong\'."', a: '彼[かれ] は 「間違[まちが]って いる」 と ばかり に わたし を 見[み]た。', o: ['彼[かれ] は 「間違[まちが]って いる」 か と 思[おも]いきや わたし を 見[み]た。', '彼[かれ] は 「間違[まちが]って いる」 もの を わたし を 見[み]た。', '彼[かれ] は 「間違[まちが]って いる」 とは わたし を 見[み]た。'] }
        ]
      },
      {
        id: 'N1-14', icon: '🧘', title: 'No Need & That\'s That', sub: 'までもない · までだ · ばそれまでだ · はさておき · ばこそ · ゆえ',
        goals: ['Say something goes without saying', 'Express "I\'ll just do X, that\'s all"', 'Set topics aside and give reasons formally'],
        words: ['言[い]う まで も ない|it goes without saying', '断[ことわ]られたら|if refused', '諦[あきら]める|give up', '冗談[じょうだん] は さておき|joking aside', '愛[あい]|love', '厳[きび]しく|strictly', '若[わか]さ ゆえ|because of youth', '過[あやま]ち|mistake, error'],
        grammar: [
          G('～までもない', 'there\'s no need to', 'Dictionary form + までもない · 言うまでもなく (needless to say)',
            'Something is too obvious or simple to require action.',
            ['健康[けんこう] が 大切[たいせつ] な の は *言[い]う まで も ない*。', 'It goes without saying that health is important.'], ['これ くらい の 傷[きず] なら、 病院[びょういん] に *行[い]く まで も ない*。', 'For a scratch like this, there\'s no need to go to the hospital.']),
          G('～までだ / ～までのことだ', 'simply (do as a last resort); merely', 'Dictionary form + までだ (resolve) · た-form + までだ (merely)',
            'If X fails, I\'ll just do Y — or "I merely did X".',
            ['断[ことわ]られたら、 また *頼[たの]む まで だ*。', 'If they refuse, I\'ll simply ask again.'], ['わたし は 事実[じじつ] を *言[い]った まで の こと だ*。', 'I merely stated the facts.']),
          G('～ばそれまでだ', 'if … then that\'s the end of it', 'ば-form + それまでだ',
            'Once a certain thing happens, everything is lost.',
            ['いくら お金[かね] を 貯[た]めて も、 *死[し]んで しまえ ば それ まで だ*。', 'No matter how much money you save, once you die that\'s the end of it.'], ['どんな に いい 計画[けいかく] でも、 実行[じっこう] *しなけれ ば それ まで だ*。', 'However good a plan is, if you don\'t carry it out, that\'s that.']),
          G('～はさておき', 'setting aside', 'N + はさておき',
            'Puts one topic aside to focus on another.',
            ['冗談[じょうだん] *は さて おき*、 本題[ほんだい] に 入[はい]りましょう。', 'Joking aside, let\'s get down to business.'], ['値段[ねだん] *は さて おき*、 デザイン は とても いい。', 'Price aside, the design is very good.']),
          G('～ばこそ / ～ゆえ(に)', 'precisely because / owing to (formal)', 'ば-form + こそ · N (の) / plain form + ゆえ(に)',
            'Strong, formal reasons.',
            ['子[こ]ども を *愛[あい] すれ ば こそ*、 厳[きび]しく 叱[しか]る の だ。', 'It\'s precisely because I love my children that I scold them strictly.'], ['若[わか]さ *ゆえ の* 過[あやま]ち だった。', 'It was a mistake born of youth.'])
        ],
        note: { t: 'Formal reasoning words', x: '<b>ゆえに</b> ("therefore") appears in logic and philosophy — even Descartes is translated as 我思う、ゆえに我あり ("I think, therefore I am"). <b>言うまでもなく</b> opens countless formal speeches.' },
        ex: [
          { fill: 'この 程度[ていど] の 問題[もんだい] なら、 先生[せんせい] に 聞[き]く ＿。', a: 'まで も ない', o: ['ば それ まで だ', 'は さて おき'], en: 'For a problem this easy, there\'s no need to ask the teacher.' },
          { mc: '"Setting the details aside, I agree with the plan."', a: '細[こま]かい 点[てん] は さて おき、 その 計画[けいかく] に は 賛成[さんせい] です。', o: ['細[こま]かい 点[てん] まで も なく、 その 計画[けいかく] に は 賛成[さんせい] です。', '細[こま]かい 点[てん] ゆえ に、 その 計画[けいかく] に は 賛成[さんせい] です。', '細[こま]かい 点[てん] なら ば それ まで、 その 計画[けいかく] に は 賛成[さんせい] です。'] }
        ],
        convo: 'n1-speech'
      },
      {
        id: 'N1-15', icon: '🏔️', title: 'N1 Review: The Summit', sub: 'Advanced reading & review',
        goals: ['Read a literary essay using N1 grammar', 'Review the most important N1 patterns', 'Take the N1 mock exam'],
        words: ['言語[げんご]|language', '習得[しゅうとく]|acquisition, mastery', '母語[ぼご]|mother tongue', '壁[かべ]|wall, barrier', '挫折[ざせつ]|setback, giving up', '視野[しや]|outlook, perspective', '文化[ぶんか]|culture', '頂上[ちょうじょう]|summit'],
        grammar: [
          G('Review: N1 essentials', 'succession, inevitability, worth, extremes, classical style, rhetoric', '',
            'You have reached the summit of the JLPT grammar path! Read the essay below, take the <b>N1 mock exam</b>, and keep your N1 vocabulary and kanji decks growing. 継続は力なり — keep going.',
            ['外国語[がいこくご] の 習得[しゅうとく] は、 努力[どりょく] *なくして は* あり 得[え]ない。', 'Mastering a foreign language is impossible without effort.'], ['言語[げんご] を 学[まな]ぶ こと は 一読[いちどく] *に 値[あたい] する* 本[ほん] を 読[よ]む よう な もの だ。', 'Learning a language is like reading a book worth reading.'])
        ],
        reading: {
          title: '随筆[ずいひつ]: 言葉[ことば] の 山[やま] を 登[のぼ]る', text: [
            '外国語[がいこくご] を 学[まな]ぶ こと は、 しばしば 登山[とざん] に たとえられる。 麓[ふもと] で は 一歩[いっぽ] ごと に 景色[けしき] が 変[か]わり、 新[あたら]しい 単語[たんご] を 覚[おぼ]える たび に 世界[せかい] が 広[ひろ]がる。',
            'ところが、 中腹[ちゅうふく] まで 来[く]る や 否[いな]や、 道[みち] は 急[きゅう] に 険[けわ]しく なる。 覚[おぼ]える そば から 忘[わす]れ、 挫折[ざせつ] しかけた 学習者[がくしゅうしゃ] は 数[かぞ]え きれない。 頂上[ちょうじょう] は おろか、 次[つぎ] の 一歩[いっぽ] さえ 見[み]えない 日[ひ] も ある。',
            'しかし、 苦[くる]しい 坂[さか] を 登[のぼ]れ ば こそ、 頂上[ちょうじょう] から の 眺[なが]め は 格別[かくべつ] な の だ。 言葉[ことば] を 通[とお]して 異[こと]なる 文化[ぶんか] に 触[ふ]れる 喜[よろこ]び は、 何[なに] に も まして 人生[じんせい] を 豊[ゆた]か に して くれる。',
            '一日[いちにち] たり と も 休[やす]まず に、 とは 言[い]わない。 ただ、 歩[ある]み を 止[と]め さえ しなけれ ば、 いつか 必[かなら]ず 頂[いただき] に たどり着[つ]く だろう。'
          ],
          en: ['Learning a foreign language is often likened to mountain climbing. At the foot of the mountain the scenery changes with every step, and each new word you learn widens your world.', 'However, as soon as you reach the mountainside, the path suddenly becomes steep. Learners who forget words as soon as they memorize them and nearly give up are countless. Some days you can\'t even see the next step, let alone the summit.', 'But precisely because you climb those painful slopes, the view from the top is exceptional. The joy of touching a different culture through language enriches life more than anything.', 'I won\'t say you must never rest for even a single day. But as long as you don\'t stop walking, you will surely reach the summit someday.'],
          q: [
            ['What is language learning compared to?', 'Mountain climbing', 'Running a marathon', 'Building a house', 'Sailing a ship'],
            ['What happens in the middle stage, according to the essay?', 'The path becomes steep and learners forget things quickly', 'Learning becomes effortless', 'The scenery stops changing', 'Learners reach the summit'],
            ['What is the writer\'s final message?', 'As long as you keep going, you will reach the top', 'You must study every single day without rest', 'Only talented people can master a language', 'It is better to stay at the foot of the mountain']
          ]
        },
        ex: [
          { mc: '"The moment the door opened, the dog ran out."', a: 'ドア が 開[あ]く や 否[いな]や、 犬[いぬ] が 飛[と]び出[だ]した。', o: ['ドア が 開[あ]く かたわら、 犬[いぬ] が 飛[と]び出[だ]した。', 'ドア が 開[あ]く べく、 犬[いぬ] が 飛[と]び出[だ]した。', 'ドア が 開[あ]く まじき、 犬[いぬ] が 飛[と]び出[だ]した。'] },
          { mc: '"Even professionals make mistakes."', a: 'プロ と いえ ども、 ミス を する こと は ある。', o: ['プロ と あって、 ミス を する こと は ある。', 'プロ ならでは、 ミス を する こと は ある。', 'プロ を 皮切[かわき]り に、 ミス を する こと は ある。'] },
          { mc: '"It goes without saying that safety comes first."', a: '安全[あんぜん] が 第一[だいいち] で ある こと は 言[い]う まで も ない。', o: ['安全[あんぜん] が 第一[だいいち] で ある こと は 言[い]う まで だ。', '安全[あんぜん] が 第一[だいいち] で ある こと は 言[い]え ば それ まで だ。', '安全[あんぜん] が 第一[だいいち] で ある こと は 言[い]う べからず。'] }
        ],
        convo: 'n1-negotiation'
      }
    ]
  });
})();
