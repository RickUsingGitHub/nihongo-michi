/* Level 7 — JLPT N3: intermediate Japanese for work, news and real conversations.
 * Vocabulary and kanji for N3 are learned through the N3 decks (Review & Learn). */
(function () {
  const G = (t, m, f, x, ...e) => ({ t, m, f, x, e });
  JT.addLevel({
    n: 7, jlpt: 3, tag: 'N3', icon: '🏙️', color: '#2e4a7d',
    title: 'N3 · Intermediate', jp: '中級へのかけ橋',
    desc: 'Bridge from textbook to real Japanese: nuanced reasons and contrasts, hearsay and news language, perspective, emphasis, timing, regret — and natural casual speech.',
    cando: ['Explain causes and results, positive and negative', 'Say what you should and shouldn\'t do, and what\'s "not necessarily" true', 'Understand news-style hearsay', 'Express wishes about other people', 'Discuss topics from different perspectives', 'Follow fast casual conversation'],
    lessons: [
      {
        id: 'N3-1', icon: '⚖️', title: 'Thanks To & Because Of', sub: 'おかげで · せいで · ため · によって · もので',
        goals: ['Credit good results with おかげで', 'Blame bad results with せいで', 'Give formal causes with ため and によって'],
        words: ['台風[たいふう]|typhoon', '遅延[ちえん]|delay', '合格[ごうかく]|passing (an exam)', '事故[じこ]|accident', '渋滞[じゅうたい]|traffic jam', '影響[えいきょう]|influence, effect', '原因[げんいん]|cause', '被害[ひがい]|damage'],
        grammar: [
          G('～おかげで', 'thanks to (good result)', 'Plain form / N の + おかげで',
            'Credits someone or something for a positive outcome. おかげさまで = "thanks to you" (polite set phrase).',
            ['先生[せんせい] *の おかげ で*、 試験[しけん] に 合格[ごうかく] できました。', 'Thanks to my teacher, I passed the exam.'], ['薬[くすり] を 飲[の]んだ *おかげ で*、 熱[ねつ] が 下[さ]がった。', 'Thanks to the medicine, my fever went down.']),
          G('～せいで', 'because of (bad result, blame)', 'Plain form / N の + せいで · ～せいか (perhaps because of)',
            'Blames something for a negative outcome.',
            ['台風[たいふう] *の せい で*、 電車[でんしゃ] が 止[と]まった。', 'The trains stopped because of the typhoon.'], ['夜[よる] コーヒー を 飲[の]んだ *せい で*、 眠[ねむ]れなかった。', 'I couldn\'t sleep because I drank coffee at night.']),
          G('～ため(に) (cause)', 'due to (formal)', 'Plain form / N の + ため(に)',
            'A formal "because" — announcements, news, written Japanese.',
            ['大雪[おおゆき] の *ため*、 本日[ほんじつ] は 休校[きゅうこう] と します。', 'Due to heavy snow, school is closed today.'], ['事故[じこ] が あった *ため に*、 道[みち] が 渋滞[じゅうたい] して います。', 'The road is jammed due to an accident.']),
          G('～によって / ～による (cause)', 'caused by', 'N + によって / による + N',
            'Formal causes, common in news.',
            ['地震[じしん] *に よって*、 多[おお]く の 建物[たてもの] が 壊[こわ]れた。', 'Many buildings were destroyed by the earthquake.'], ['台風[たいふう] *に よる* 被害[ひがい] が 広[ひろ]がって いる。', 'Damage caused by the typhoon is spreading.']),
          G('～もので / ～ものだから', 'it\'s just that (excuse)', 'Plain form (な-adj/N + な) + もので / ものだから',
            'A personal, slightly apologetic explanation.',
            ['すみません、 電車[でんしゃ] が 遅[おく]れた *もの で*…', 'Sorry — it\'s just that the train was late…'], ['あまり に おいしかった *もの だ から*、 全部[ぜんぶ] 食[た]べて しまった。', 'It was just so delicious that I ate it all.'])
        ],
        dialog: {
          title: 'After the exam', lines: [
            ['Sato', '合格[ごうかく]、 おめでとう！', 'Congratulations on passing!'],
            ['You', 'ありがとう ございます。 佐藤[さとう] さん が 練習[れんしゅう] に 付[つ]き合[あ]って くれた おかげ です。', 'Thank you. It\'s thanks to you practicing with me.'],
            ['Sato', 'いえいえ。 わたし は 去年[きょねん]、 寝坊[ねぼう] した せい で 試験[しけん] に 遅[おく]れちゃった ん です よ。', 'Not at all. Last year I was late for the exam because I overslept.'],
            ['You', 'えっ、 それ は 大変[たいへん] でした ね！', 'Oh no, that must have been awful!']
          ]
        },
        note: { t: 'おかげさまで', x: 'Asked how you are, Japanese often reply <b>おかげさまで元気です</b> — "thanks to you, I\'m well" — even if the person did nothing in particular. It expresses general gratitude for others\' support.' },
        ex: [
          { fill: '雨[あめ] の ＿、 試合[しあい] が 中止[ちゅうし] に なった。', a: 'せい で', o: ['おかげ で', 'ばかり で'], en: 'The match was cancelled because of the rain.' },
          { resp: 'お体[からだ] の 具合[ぐあい] は いかが です か。', npcEn: 'How is your health?', a: 'おかげさま で、 だいぶ よく なりました。', o: ['せい で、 だいぶ よく なりました。', 'ため に、 元気[げんき] です。'] }
        ]
      },
      {
        id: 'N3-2', icon: '🧩', title: 'That\'s Why… / Not Necessarily', sub: 'わけだ · わけではない · わけがない · わけにはいかない',
        goals: ['Draw conclusions with わけだ', 'Soften statements with わけではない', 'Say something is impossible or not an option'],
        words: ['理由[りゆう]|reason', '納得[なっとく] する|be convinced', '断[ことわ]る|refuse, decline', '休[やす]む|take time off', '嫌[きら]い|dislike', '完璧[かんぺき]|perfect', '責任[せきにん]|responsibility', '迷惑[めいわく]|trouble, nuisance'],
        grammar: [
          G('～わけだ', 'no wonder / that\'s why (conclusion)', 'Plain form (な-adj + な, N + の/という) + わけだ',
            'A logical conclusion drawn from what you just learned.',
            ['10年[じゅうねん] も 住[す]んで いた の です か。 日本語[にほんご] が 上手[じょうず] な *わけ です ね*。', 'You lived there 10 years? No wonder your Japanese is good.'], ['エアコン が 壊[こわ]れて いる。 暑[あつ]い *わけ だ*。', 'The air conditioner is broken. That\'s why it\'s hot.']),
          G('～わけではない', 'it\'s not that / not necessarily', 'Plain form + わけではない · 全部～わけではない (not all)',
            'Partially denies something or a natural assumption.',
            ['肉[にく] が 嫌[きら]い な *わけ で は ない* ん です が、 今日[きょう] は 魚[さかな] に します。', 'It\'s not that I dislike meat, but today I\'ll have fish.'], ['日本人[にほんじん] が みんな アニメ が 好[す]き な *わけ で は ない*。', 'Not all Japanese people like anime.']),
          G('～わけがない', 'there\'s no way', 'Plain form + わけがない',
            'Strong denial based on reasoning.',
            ['あんな に 練習[れんしゅう] した ん だ から、 負[ま]ける *わけ が ない*。', 'We practiced so hard — there\'s no way we\'ll lose.'], ['彼[かれ] が そんな 嘘[うそ] を つく *わけ が ありません*。', 'There\'s no way he would tell such a lie.']),
          G('～わけにはいかない', 'can\'t (for social or moral reasons)', 'Dictionary form + わけにはいかない · ない form + わけにはいかない (must)',
            'You could, but circumstances or responsibility won\'t allow it.',
            ['明日[あした] は 大事[だいじ] な 会議[かいぎ] が ある ので、 *休[やす]む わけ に は いかない*。', 'I have an important meeting tomorrow, so I can\'t take the day off.'], ['先生[せんせい] に 頼[たの]まれたら、 *断[ことわ]る わけ に は いかない*。', 'If my teacher asks, I can\'t say no.']),
          G('～というわけではない', 'it doesn\'t mean that', 'Plain form + というわけではない',
            'Corrects a possible misunderstanding.',
            ['高[たか]い から いい *という わけ で は ない*。', 'Expensive doesn\'t necessarily mean good.'], ['返事[へんじ] が ない から 怒[おこ]って いる *という わけ で は ない* よ。', 'No reply doesn\'t mean they\'re angry.'])
        ],
        dialog: {
          title: 'Turning down drinks', lines: [
            ['Sato', '今日[きょう] の 飲[の]み会[かい]、 来[こ]ない の？', 'You\'re not coming to drinks tonight?'],
            ['You', '行[い]きたくない わけ じゃ ない ん です けど、 明日[あした] 朝[あさ] 早[はや]い ん です。', 'It\'s not that I don\'t want to go — I have an early morning tomorrow.'],
            ['Sato', 'ああ、 出張[しゅっちょう] だった ね。 じゃあ、 無理[むり] する わけ に は いかない ね。', 'Ah, your business trip. Then you can\'t push yourself.'],
            ['You', 'すみません。 次[つぎ] は 必[かなら]ず 行[い]きます！', 'Sorry. I\'ll definitely come next time!']
          ]
        },
        note: { t: 'Softening "no"', x: '<b>～わけじゃないんですけど…</b> is a gentle way to decline while protecting the relationship: you show that the refusal isn\'t personal.' },
        ex: [
          { mc: '"No wonder it\'s so cold — the window is open."', a: '窓[まど] が 開[あ]いて いる。 寒[さむ]い わけ だ。', o: ['窓[まど] が 開[あ]いて いる。 寒[さむ]い わけ が ない。', '窓[まど] が 開[あ]いて いる。 寒[さむ]い わけ に は いかない。', '窓[まど] が 開[あ]いて いる。 寒[さむ]い わけ で は ない。'] },
          { fill: '一人[ひとり] で 全部[ぜんぶ] できる ＿。 手伝[てつだ]って ください。', a: 'わけ が ない', o: ['わけ だ', 'わけ に は いかない'], en: 'There\'s no way I can do it all alone. Please help.' }
        ]
      },
      {
        id: 'N3-3', icon: '🧭', title: 'Should & No Need', sub: 'べきだ · ことはない · ないことはない · しかない',
        goals: ['Say what someone should do with べきだ', 'Reassure with ～ことはない', 'Express reluctant possibility and "no choice"'],
        words: ['謝[あやま]る|apologize', '心配[しんぱい]|worry', '諦[あきら]める|give up', '方法[ほうほう]|method, way', '約束[やくそく]|promise', '守[まも]る|keep, protect', '終電[しゅうでん]|last train', '我慢[がまん] する|put up with'],
        grammar: [
          G('～べきだ / ～べきではない', 'should / should not (moral)', 'Dictionary form + べきだ (する → すべき / するべき)',
            'A strong statement of what\'s right. Sounds preachy if aimed directly at someone — use carefully.',
            ['約束[やくそく] は *守[まも]る べき だ*。', 'Promises should be kept.'], ['人[ひと] の 悪口[わるぐち] は *言[い]う べき で は ない*。', 'You shouldn\'t speak ill of others.']),
          G('～ことはない', 'there\'s no need to', 'Dictionary form + ことはない',
            'Reassures someone that something is unnecessary.',
            ['そんな に *心配[しんぱい] する こと は ない* よ。', 'There\'s no need to worry so much.'], ['わざわざ 来[く]る *こと は ありません*。 メール で 大丈夫[だいじょうぶ] です。', 'No need to come all the way. Email is fine.']),
          G('～ないことはない', 'it\'s not that I can\'t (but…)', 'ない form + ことはない',
            'A reluctant "yes, possible".',
            ['辛[から]い もの は *食[た]べられない こと は ない* けど、 あまり 好[す]き じゃ ない。', 'It\'s not that I can\'t eat spicy food, but I don\'t really like it.'], ['急[いそ]げば *間[ま]に 合[あ]わない こと は ない*。', 'If we hurry, we might just make it.']),
          G('～しかない', 'have no choice but to', 'Dictionary form + しかない',
            'The only option left.',
            ['終電[しゅうでん] が 行[い]って しまった。 タクシー で *帰[かえ]る しか ない*。', 'The last train has gone. I have no choice but to take a taxi.'], ['ここ まで 来[き]たら、 *やる しか ない*！', 'Now that we\'ve come this far, all we can do is go for it!']),
          G('～ようがない', 'there\'s no way to', 'Verb stem + ようがない',
            'No method exists.',
            ['住所[じゅうしょ] が わからない ので、 *連絡[れんらく] し よう が ない*。', 'I don\'t know the address, so there\'s no way to contact them.'], ['こんな に 壊[こわ]れたら、 もう *直[なお]し よう が ない*。', 'Once it\'s this broken, there\'s no way to fix it.'])
        ],
        dialog: {
          title: 'A mistake at work', lines: [
            ['You', '大事[だいじ] な メール を 間違[まちが]えて 送[おく]って しまいました…', 'I sent an important email by mistake…'],
            ['Sato', 'そんな に 落[お]ち込[こ]む こと は ない よ。 すぐ 謝[あやま]る べき だ けど ね。', 'No need to be so down. But you should apologize right away.'],
            ['You', 'そう です ね。 電話[でんわ] で 謝[あやま]る しか ない です ね。', 'You\'re right. All I can do is apologize by phone.'],
            ['Sato', '大丈夫[だいじょうぶ]。 誰[だれ] でも ミス は する から。', 'It\'ll be fine. Everyone makes mistakes.']
          ]
        },
        note: { t: 'しょうがない', x: '<b>しょうがない</b> / <b>仕方がない</b> ("it can\'t be helped") is a deeply Japanese attitude — accepting what you can\'t change and moving on. You\'ll hear it after delays, rain, and bad luck.' },
        ex: [
          { resp: 'どう しよう、 試験[しけん] に 落[お]ちたら…', npcEn: 'What will I do if I fail the exam…', a: 'そんな に 心配[しんぱい] する こと は ない よ。', o: ['心配[しんぱい] する べき だ よ。', '心配[しんぱい] する しか ない よ。'] },
          { mc: '"There\'s no choice but to wait."', a: '待[ま]つ しか ない。', o: ['待[ま]つ こと は ない。', '待[ま]つ べき で は ない。', '待[ま]たない こと は ない。'] }
        ]
      },
      {
        id: 'N3-4', icon: '📰', title: 'News & Hearsay', sub: 'によると · ということだ · とのことだ · って · らしい',
        goals: ['Cite sources with によると', 'Report information formally and casually', 'Use らしい for "typical of"'],
        words: ['発表[はっぴょう]|announcement', '調査[ちょうさ]|survey, investigation', '記事[きじ]|article', '値上[ねあ]げ|price increase', '政府[せいふ]|government', '国民[こくみん]|citizens', '割合[わりあい]|proportion, rate', '増[ふ]える|increase'],
        grammar: [
          G('～によると / ～によれば', 'according to', 'N + によると + ～そうだ / らしい / ということだ',
            'Introduces the source of information.',
            ['ニュース *に よる と*、 来月[らいげつ] から 電気代[でんきだい] が 上[あ]がる そう だ。', 'According to the news, electricity prices will rise next month.'], ['天気[てんき] 予報[よほう] *に よれば*、 週末[しゅうまつ] は 晴[は]れる らしい。', 'According to the forecast, it\'ll be sunny this weekend.']),
          G('～ということだ', 'I hear that / they say', 'Plain form + ということだ',
            'Formal hearsay; also used to sum up: "in other words…".',
            ['部長[ぶちょう] は 今日[きょう] 会社[かいしゃ] に 戻[もど]らない *という こと です*。', 'I hear the manager won\'t be back at the office today.'], ['つまり、 計画[けいかく] は 中止[ちゅうし] *という こと です ね*。', 'So, in other words, the plan is cancelled.']),
          G('～とのことだ', 'I was told that (business)', 'Plain form + とのことです',
            'Relays a message in business situations.',
            ['田中[たなか] さん から 電話[でんわ] が あって、 少[すこ]し 遅[おく]れる *との こと です*。', 'Tanaka called — he says he\'ll be a little late.'], ['先方[せんぽう] は 来週[らいしゅう] でも 大丈夫[だいじょうぶ] *との こと でした*。', 'The client said next week is fine.']),
          G('～って (casual hearsay)', 'they say / I heard', 'Plain form + って',
            'The everyday version of そうだ / と言っていた.',
            ['明日[あした] 雨[あめ] *だって*。', 'They say it\'ll rain tomorrow.'], ['あの 店[みせ]、 来月[らいげつ] *閉[し]まる んだって*。', 'I heard that shop is closing next month.']),
          G('N + らしい (typical)', 'typical of / just like (a real) N', 'N + らしい',
            'Describes something that has the ideal qualities of N. Opposite: N らしくない.',
            ['今日[きょう] は 春[はる] *らしい* 暖[あたた]かい 日[ひ] です ね。', 'Today is a warm, truly spring-like day.'], ['そんな こと を 言[い]う なんて、 あなた *らしく ない* ね。', 'It\'s not like you to say something like that.'])
        ],
        reading: {
          title: 'ニュース: 若者[わかもの] の 読書[どくしょ] 時間[じかん]', text: [
            '文部科学省[もんぶかがくしょう] の 調査[ちょうさ] に よる と、 一[いち] か月[げつ] に 一冊[いっさつ] も 本[ほん] を 読[よ]まない 大学生[だいがくせい] の 割合[わりあい] が、 初[はじ]めて 50%[ごじゅっパーセント] を 超[こ]えた という こと だ。',
            '原因[げんいん] の 一[ひと]つ は スマートフォン だ と 考[かんが]えられて いる。 一日[いちにち] に 三時間[さんじかん] 以上[いじょう] スマホ を 使[つか]う 学生[がくせい] も 少[すく]なく ない。',
            'ただ、 本[ほん] を 読[よ]まない から と いって、 文字[もじ] を 読[よ]んで いない わけ で は ない。 ネット の 記事[きじ] や 電子[でんし] 書籍[しょせき] を 読[よ]む 学生[がくせい] は 増[ふ]えて いる との こと だ。'
          ],
          en: ['According to a Ministry of Education survey, the proportion of university students who don\'t read even one book a month has exceeded 50% for the first time.', 'Smartphones are thought to be one of the causes. Quite a few students use their phones for over three hours a day.', 'However, not reading books doesn\'t mean they aren\'t reading text. The number of students reading online articles and e-books is reportedly increasing.'],
          q: [
            ['What did the survey find?', 'Over half of students read no books in a month', 'Students read more books than before', 'Most students read three books a month', 'Students don\'t use smartphones much'],
            ['What is considered one cause?', 'Smartphones', 'Expensive books', 'Too much homework', 'Fewer libraries'],
            ['What does the last paragraph say?', 'Students still read online articles and e-books', 'Students have stopped reading entirely', 'E-books are becoming less popular', 'The survey was wrong']
          ]
        },
        note: { t: 'News Japanese', x: 'News uses plain だ / である style and formal hearsay: <b>～とみられる</b> ("it is believed"), <b>～という</b> ("it is said"), <b>～とのことだ</b>. NHK\'s "NEWS WEB EASY" offers simplified news with furigana — great practice now!' },
        ex: [
          { mc: 'Business message: "Tanaka says he\'ll be late."', a: '田中[たなか] さん は 遅[おく]れる との こと です。', o: ['田中[たなか] さん は 遅[おく]れる って。', '田中[たなか] さん は 遅[おく]れる らしい だ。', '田中[たなか] さん は 遅[おく]れ そう です。'] },
          { fill: '新聞[しんぶん] ＿、 来年[らいねん] 消費税[しょうひぜい] が 上[あ]がる そう だ。', a: 'に よる と', o: ['に とって', 'に ついて'], en: 'According to the paper, consumption tax will go up next year.' }
        ]
      },
      {
        id: 'N3-5', icon: '🌧️', title: 'Even If, Even Though', sub: 'ても · たとえ～ても · としても · にしても · くせに',
        goals: ['Say "even if" with ても and たとえ', 'Make hypothetical concessions with としても', 'Criticize with くせに'],
        words: ['反対[はんたい]|opposition', '続[つづ]ける|continue', '雨[あめ] が 降[ふ]っても|even if it rains', '失敗[しっぱい]|failure', '冗談[じょうだん]|joke', '知[し]って いる くせに|despite knowing', '我慢[がまん]|patience, endurance', '準備[じゅんび]|preparation'],
        grammar: [
          G('～ても / ～でも', 'even if / even though', 'て-form + も · い-adj: くても · な-adj/N: でも',
            'The result doesn\'t change despite the condition.',
            ['雨[あめ] が *降[ふ]って も*、 試合[しあい] は あります。', 'Even if it rains, the match will go ahead.'], ['いくら *考[かんが]えて も*、 答[こた]え が わからない。', 'No matter how much I think, I can\'t figure out the answer.']),
          G('たとえ～ても', 'even if (strong, hypothetical)', 'たとえ + ても / でも',
            'たとえ strengthens the "even if".',
            ['*たとえ* みんな に 反対[はんたい] *されて も*、 わたし は やる。', 'Even if everyone opposes me, I\'ll do it.'], ['*たとえ* 冗談[じょうだん] *でも*、 そんな こと を 言[い]って は いけない。', 'Even as a joke, you shouldn\'t say that.']),
          G('～としても', 'even supposing that', 'Plain form + としても',
            'Concession for a hypothetical situation.',
            ['今[いま] から *出[で]かけた と して も*、 間[ま]に 合[あ]わない だろう。', 'Even if we left now, we probably wouldn\'t make it.'], ['宝[たから]くじ が *当[あ]たった と して も*、 仕事[しごと] は 辞[や]めない。', 'Even if I won the lottery, I wouldn\'t quit my job.']),
          G('～にしても', 'even if / granted that', 'Plain form / N + にしても',
            'Accepts a premise but disagrees with a degree.',
            ['忙[いそが]しい *に して も*、 連絡[れんらく] ぐらい して ほしい。', 'Even if you\'re busy, I\'d like you to at least get in touch.'], ['冗談[じょうだん] *に して も*、 ひどすぎる。', 'Even as a joke, that\'s too much.']),
          G('～くせに', 'even though (critical)', 'Plain form (な-adj + な, N + の) + くせに',
            'Strong criticism or contempt — casual, use carefully!',
            ['自分[じぶん] で は 何[なに] も *しない くせ に*、 文句[もんく] ばかり 言[い]う。', 'He does nothing himself, yet complains all the time.'], ['*知[し]って いる くせ に*、 教[おし]えて くれない。', 'She knows, yet she won\'t tell me.'])
        ],
        dialog: {
          title: 'Rain or shine', lines: [
            ['Ken', '明日[あした] の キャンプ、 雨[あめ] でも 行[い]く？', 'Are we still going camping tomorrow if it rains?'],
            ['You', 'たとえ 雨[あめ] が 降[ふ]って も 行[い]こう よ！ テント が ある し。', 'Let\'s go even if it rains! We have a tent.'],
            ['Ken', 'でも、 台風[たいふう] だった と して も？', 'But even if it\'s a typhoon?'],
            ['You', 'さすが に 台風[たいふう] なら やめよう…', 'Well, if it\'s a typhoon, let\'s not…']
          ]
        },
        note: { t: 'くせに — handle with care', x: '<b>くせに</b> carries real irritation. Between close friends it can be playful (下手なくせに！"you\'re bad at it, but…"), but toward coworkers or superiors it\'s rude. Use のに for a softer contrast.' },
        ex: [
          { mc: '"Even if it\'s expensive, I\'ll buy it."', a: '高[たか]くて も 買[か]います。', o: ['高[たか]い でも 買[か]います。', '高[たか]い くせ に 買[か]います。', '高[たか]かった と して も 買[か]いました。'] },
          { fill: '＿ 失敗[しっぱい] して も、 諦[あきら]めない。', a: 'たとえ', o: ['たぶん', 'もし か'], en: 'Even if I fail, I won\'t give up.' }
        ]
      },
      {
        id: 'N3-6', icon: '🙋', title: 'Wishes About Others', sub: 'てほしい · がる · たがる · ようとする',
        goals: ['Say what you want others to do', 'Describe other people\'s feelings with がる', 'Talk about attempts with ようとする'],
        words: ['怖[こわ]がる|be afraid', '寂[さび]しがる|feel lonely', '欲[ほ]しがる|want (someone else)', '行[い]きたがる|want to go (someone else)', '起[お]こそう と する|try to wake', '急[いそ]ぐ|hurry', '返事[へんじ]|reply', '素直[すなお]|honest, obedient'],
        grammar: [
          G('～てほしい / ～てもらいたい', 'want someone to do', 'Person に + て-form + ほしい · negative: ～ないでほしい',
            'Expresses what you want another person to do. Direct to superiors can sound demanding — use ～ていただけませんか.',
            ['もっと ゆっくり *話[はな]して ほしい*。', 'I want you to speak more slowly.'], ['この こと は 誰[だれ] に も *言[い]わないで ほしい*。', 'I\'d like you not to tell anyone about this.'], ['部長[ぶちょう] に 資料[しりょう] を *確認[かくにん] して もらいたい* ん です が。', 'I\'d like the manager to check the documents.']),
          G('～がる', 'show signs of feeling (others)', 'Adj stem (い→×) + がる',
            'Japanese doesn\'t state other people\'s feelings directly: 彼は寂しい sounds odd. Use がる for outward signs.',
            ['弟[おとうと] は 犬[いぬ] を *怖[こわ]がって います*。', 'My younger brother is scared of dogs.'], ['娘[むすめ] が 新[あたら]しい スマホ を *欲[ほ]しがって いる*。', 'My daughter wants a new smartphone.']),
          G('～たがる', 'want to (others)', 'Verb stem + たがる',
            'Third-person version of ～たい.',
            ['子[こ]ども は すぐ 外[そと] で *遊[あそ]びたがる*。', 'Kids always want to play outside.'], ['夫[おっと] は 週末[しゅうまつ] いつも *寝[ね]たがる*。', 'My husband always wants to sleep on weekends.']),
          G('～ようとする', 'try to / be about to', 'Volitional + とする · ～ようとしない (won\'t even try)',
            'An attempt (often unsuccessful) or a moment just before an action.',
            ['寝[ね] *よう と した* とき、 電話[でんわ] が 鳴[な]った。', 'Just as I was about to sleep, the phone rang.'], ['何度[なんど] *起[お]こそう と して も*、 起[お]きない。', 'No matter how many times I try to wake him, he won\'t get up.'], ['息子[むすこ] は 野菜[やさい] を *食[た]べよう と しない*。', 'My son won\'t even try to eat vegetables.'])
        ],
        dialog: {
          title: 'Parenting talk', lines: [
            ['Neighbor', 'お子[こ]さん、 最近[さいきん] どう？', 'How are the kids these days?'],
            ['You', '上[うえ] の 子[こ] が 犬[いぬ] を 飼[か]いたがって いて、 困[こま]って いる ん です。', 'My eldest wants a dog and it\'s a headache.'],
            ['Neighbor', 'うち も そう。 毎日[まいにち] 散歩[さんぽ] する って 言[い]う けど ね。', 'Same here. They say they\'ll walk it every day, but…'],
            ['You', 'ちゃんと 世話[せわ] を して ほしい ん です けど ね。', 'I\'d want them to really take care of it.']
          ]
        },
        note: { t: 'Other people\'s minds', x: 'In Japanese you can\'t directly know someone else\'s feelings, so grammar marks them as observed: <b>寂しがっている</b>, <b>行きたがっている</b>, <b>嬉しそう</b>. Saying 彼は嬉しい sounds like you\'re reading his mind.' },
        ex: [
          { mc: '"I want you to come early."', a: '早[はや]く 来[き]て ほしい。', o: ['早[はや]く 来[き]たい ほしい。', '早[はや]く 来[く]る が ほしい。', '早[はや]く 来[き]たがって いる。'] },
          { mc: '"My cat is afraid of the vacuum."', a: '猫[ねこ] は 掃除機[そうじき] を 怖[こわ]がって います。', o: ['猫[ねこ] は 掃除機[そうじき] が 怖[こわ]い です。', '猫[ねこ] は 掃除機[そうじき] を 怖[こわ]い です。', '猫[ねこ] は 掃除機[そうじき] を 怖[こわ]そう です。'] }
        ]
      },
      {
        id: 'N3-7', icon: '⏱️', title: 'Precise Timing', sub: 'とたん · 最中 · たびに · ついでに · てからでないと',
        goals: ['Say "the moment that…"', 'Talk about interruptions and repeated occasions', 'Combine errands with ついでに'],
        words: ['立[た]ち上[あ]がる|stand up', '鳴[な]る|ring', '停電[ていでん]|power outage', '思[おも]い出[だ]す|remember, recall', '郵便局[ゆうびんきょく]|post office', '許可[きょか]|permission', '散歩[さんぽ]|walk', '会議中[かいぎちゅう]|during a meeting'],
        grammar: [
          G('～たとたん(に)', 'the moment (something unexpected)', 'た-form + とたん(に)',
            'Something happens immediately and unexpectedly after an action.',
            ['立[た]ち上[あ]がった *とたん に*、 めまい が した。', 'The moment I stood up, I felt dizzy.'], ['家[いえ] を 出[で]た *とたん*、 雨[あめ] が 降[ふ]り出[だ]した。', 'The moment I left the house, it started raining.']),
          G('～最中(に)', 'right in the middle of', 'ている form / N の + 最中(に)',
            'An interruption at the peak of an activity.',
            ['会議[かいぎ] の *最中[さいちゅう] に*、 停電[ていでん] に なった。', 'In the middle of the meeting, there was a power outage.'], ['食事[しょくじ] して いる *最中[さいちゅう] に* 電話[でんわ] が 鳴[な]った。', 'The phone rang right in the middle of dinner.']),
          G('～たびに', 'every time', 'Dictionary form / N の + たびに',
            'Each time X happens, Y happens.',
            ['この 曲[きょく] を 聞[き]く *たび に*、 高校[こうこう] 時代[じだい] を 思[おも]い出[だ]す。', 'Every time I hear this song, I remember high school.'], ['出張[しゅっちょう] の *たび に*、 お土産[みやげ] を 買[か]って くる。', 'Every business trip, he brings back souvenirs.']),
          G('～ついでに', 'while you\'re at it', 'Dictionary / た-form / N の + ついでに',
            'Doing something extra while doing something else.',
            ['散歩[さんぽ] の *ついで に*、 郵便局[ゆうびんきょく] に 寄[よ]った。', 'While out for a walk, I stopped by the post office.'], ['コンビニ に 行[い]く *ついで に*、 牛乳[ぎゅうにゅう] を 買[か]って きて くれる？', 'While you\'re going to the konbini, could you buy milk?']),
          G('～てからでないと', 'not until / unless first', 'て-form + からでないと / からでなければ + negative',
            'B can\'t happen until A is done.',
            ['部長[ぶちょう] の 許可[きょか] を *もらって から で ない と*、 決[き]められません。', 'I can\'t decide until I get the manager\'s approval.'], ['実物[じつぶつ] を *見[み]て から で ない と*、 買[か]えない。', 'I can\'t buy it without seeing it first.'])
        ],
        dialog: {
          title: 'Errands', lines: [
            ['Yui', '出[で]かける の？ じゃあ、 ついで に パン を 買[か]って きて くれる？', 'Going out? Then could you buy bread while you\'re at it?'],
            ['You', 'いい よ。 あ、 駅前[えきまえ] の パン屋[や]、 行[い]く たび に 混[こ]んで る んだ よ ね。', 'Sure. Oh, the bakery by the station is crowded every time I go.'],
            ['Yui', 'じゃあ、 スーパー の で いい よ。', 'Then the supermarket one is fine.'],
            ['You', 'オッケー。 … あっ、 家[いえ] を 出[で]た とたん に 雨[あめ] だ！', 'OK. … Oh, the moment I left it started raining!']
          ]
        },
        note: { t: 'ついでに — the efficient life', x: 'Japanese love doing things <b>ついでに</b>: stopping by the konbini on the way home, buying omiyage on a business trip. When someone asks "ついでに…いい？", it\'s a small favor that costs you little.' },
        ex: [
          { fill: '駅[えき] に 着[つ]いた ＿、 電車[でんしゃ] が 出[で]て しまった。', a: 'とたん に', o: ['ついで に', 'たび に'], en: 'The moment I got to the station, the train left.' },
          { mc: '"Every time I go to Kyoto, I visit this temple."', a: '京都[きょうと] に 行[い]く たび に、 この お寺[てら] に 行[い]きます。', o: ['京都[きょうと] に 行[い]った とたん に、 この お寺[てら] に 行[い]きます。', '京都[きょうと] に 行[い]く 最中[さいちゅう] に、 この お寺[てら] に 行[い]きます。', '京都[きょうと] の ついで に、 この お寺[てら] に 行[い]きました。'] }
        ]
      },
      {
        id: 'N3-8', icon: '🔭', title: 'Perspective & Stance', sub: 'として · にとって · に対して · に関して · によって',
        goals: ['Speak in a role with として', 'Give a viewpoint with にとって', 'Use formal topic and contrast markers'],
        words: ['立場[たちば]|position, standpoint', '代表[だいひょう]|representative', '意見[いけん]|opinion', '大切[たいせつ]|important', '態度[たいど]|attitude', '質問[しつもん]|question', '地域[ちいき]|region', '習慣[しゅうかん]|custom'],
        grammar: [
          G('～として', 'as (a role / status)', 'N + として',
            'In the capacity of.',
            ['留学生[りゅうがくせい] *と して* 日本[にほん] に 来[き]ました。', 'I came to Japan as an exchange student.'], ['会社[かいしゃ] の 代表[だいひょう] *と して*、 会議[かいぎ] に 出席[しゅっせき] した。', 'I attended the meeting as the company\'s representative.']),
          G('～にとって', 'for / from the viewpoint of', 'N + にとって',
            'Whose perspective a judgment comes from.',
            ['わたし *に とって*、 家族[かぞく] が 一番[いちばん] 大切[たいせつ] です。', 'For me, family is most important.'], ['この 問題[もんだい] は 子[こ]ども *に とって* 難[むずか]しすぎる。', 'This question is too hard for children.']),
          G('～に対して', 'toward / against / in contrast to', 'N + に対して',
            'Target of an action or attitude; also contrast.',
            ['お客[きゃく]様[さま] *に 対[たい]して* 失礼[しつれい] な 態度[たいど] を とって は いけない。', 'You must not be rude toward customers.'], ['兄[あに] が 静[しず]か な *の に 対[たい]して*、 弟[おとうと] は よく しゃべる。', 'While the older brother is quiet, the younger one talks a lot.']),
          G('～に関して / ～に関する', 'regarding (formal)', 'N + に関して / に関する + N',
            'A formal "about".',
            ['この 件[けん] *に 関[かん]して*、 何[なに] か 質問[しつもん] は あります か。', 'Do you have any questions regarding this matter?'], ['環境[かんきょう] *に 関[かん]する* 本[ほん] を 読[よ]んで います。', 'I\'m reading a book on the environment.']),
          G('～によって (varies)', 'depending on / by', 'N + によって / により',
            'Shows variation by category; also "by (means / agent)".',
            ['地域[ちいき] *に よって*、 お正月[しょうがつ] の 習慣[しゅうかん] が 違[ちが]う。', 'New Year customs differ by region.'], ['人[ひと] *に よって* 考[かんが]え方[かた] は いろいろ だ。', 'Ways of thinking vary from person to person.'])
        ],
        reading: {
          title: 'コラム: 外国人[がいこくじん] に とって の 敬語[けいご]', text: [
            '日本語[にほんご] を 学[まな]ぶ 外国人[がいこくじん] に とって、 一番[いちばん] 難[むずか]しい の は 敬語[けいご] だ と よく 言[い]われる。',
            '相手[あいて] に よって 言葉[ことば] を 変[か]えなければ ならない から だ。 上司[じょうし] に 対[たい]して は 尊敬語[そんけいご] を 使[つか]い、 自分[じぶん] の 行動[こうどう] に 関[かん]して は 謙譲語[けんじょうご] を 使[つか]う。',
            'しかし、 実[じつ]は 日本人[にほんじん] に とって も 敬語[けいご] は 簡単[かんたん] で は ない。 新入[しんにゅう] 社員[しゃいん] と して 会社[かいしゃ] に 入[はい]る と、 多[おお]く の 人[ひと] が 研修[けんしゅう] で 敬語[けいご] を 学[まな]び直[なお]す の だ。'
          ],
          en: ['It\'s often said that for foreigners learning Japanese, the hardest thing is keigo.', 'That\'s because you must change your words depending on the listener: respectful language toward superiors, humble language regarding your own actions.', 'But actually, keigo isn\'t easy for Japanese people either. When they join a company as new employees, many re-learn keigo in training.'],
          q: [
            ['Why is keigo said to be difficult?', 'You must change words depending on the listener', 'It has too many kanji', 'It is only used in writing', 'It changes every year'],
            ['When do you use humble language?', 'When talking about your own actions', 'When talking to children', 'When writing emails only', 'When talking about the weather'],
            ['What does the last paragraph say?', 'Many Japanese re-learn keigo when they start work', 'Japanese people find keigo easy', 'Keigo is no longer used in companies', 'Foreigners learn keigo faster than Japanese']
          ]
        },
        note: { t: 'Formal connectors', x: '<b>に関して</b>, <b>に対して</b>, <b>によって</b> make your Japanese sound educated in meetings, emails and presentations. In casual talk, you\'d use について and で instead.' },
        ex: [
          { fill: '日本人[にほんじん] ＿、 お正月[しょうがつ] は 大切[たいせつ] な 行事[ぎょうじ] です。', a: 'に とって', o: ['に 対[たい]して', 'と して'], en: 'For Japanese people, New Year is an important event.' },
          { mc: '"Prices vary by store."', a: '店[みせ] に よって 値段[ねだん] が 違[ちが]います。', o: ['店[みせ] に とって 値段[ねだん] が 違[ちが]います。', '店[みせ] と して 値段[ねだん] が 違[ちが]います。', '店[みせ] に 関[かん]して 値段[ねだん] が 違[ちが]います。'] }
        ],
        convo: 'n3-job-interview'
      },
      {
        id: 'N3-9', icon: '📈', title: 'Degree & Extent', sub: 'ほど · くらい · ば～ほど · ほど～はない · さえ',
        goals: ['Describe extremes with ほど and くらい', 'Say "the more…, the more…"', 'Emphasize "even" with さえ'],
        words: ['涙[なみだ]|tears', '笑[わら]う|laugh', '疲[つか]れる|get tired', '練習[れんしゅう]|practice', '上達[じょうたつ]|improvement', '景色[けしき]|scenery', '時間[じかん] さえ あれば|if only I had time', '名前[なまえ] さえ|even (my) name'],
        grammar: [
          G('～ほど / ～くらい (extent)', 'to the extent that / so…that', 'Plain form / N + ほど / くらい',
            'Expresses degree by example. くらい is more casual.',
            ['涙[なみだ] が 出[で]る *ほど* 笑[わら]った。', 'I laughed so hard I cried.'], ['歩[ある]けない *くらい* 疲[つか]れた。', 'I was so tired I couldn\'t walk.']),
          G('～ば～ほど', 'the more…, the more', 'ば-form + dictionary form + ほど',
            'Proportional change.',
            ['練習[れんしゅう] *すれば する ほど*、 上手[じょうず] に なる。', 'The more you practice, the better you get.'], ['日本語[にほんご] は *勉強[べんきょう] すれば する ほど* おもしろく なる。', 'The more I study Japanese, the more interesting it gets.']),
          G('～ほど～はない', 'nothing is as … as', 'N + ほど + adj + N + はない',
            'A strong superlative.',
            ['ここ *ほど* きれい な 景色[けしき] *は ない*。', 'There\'s no scenery as beautiful as this.'], ['母[はは] の 料理[りょうり] *ほど* おいしい もの *は ない*。', 'Nothing is as delicious as my mother\'s cooking.']),
          G('～さえ', 'even (extreme example)', 'N + さえ (subject: でさえ)',
            'Emphasizes an unexpected or extreme case.',
            ['忙[いそが]しくて、 昼[ひる]ごはん を 食[た]べる 時間[じかん] *さえ* ない。', 'I\'m so busy I don\'t even have time for lunch.'], ['子[こ]ども *で さえ* 知[し]って いる。', 'Even a child knows that.']),
          G('～さえ～ば', 'if only / as long as', 'N さえ + ば-form',
            'The single condition needed.',
            ['時間[じかん] *さえ あれば*、 もっと 旅行[りょこう] したい。', 'If only I had time, I\'d travel more.'], ['この 薬[くすり] *さえ 飲[の]めば*、 すぐ 治[なお]ります よ。', 'As long as you take this medicine, you\'ll get better soon.'])
        ],
        dialog: {
          title: 'Hiking', lines: [
            ['Ken', 'もう 歩[ある]けない くらい 疲[つか]れた…', 'I\'m so tired I can\'t walk anymore…'],
            ['You', 'あと 少[すこ]し だよ。 上[うえ] から の 景色[けしき] ほど きれい な もの は ない って！', 'Just a bit more. They say nothing is as beautiful as the view from the top!'],
            ['Ken', '水[みず] さえ あれば 頑張[がんば]れる ん だ けど…', 'If only I had some water, I could keep going…'],
            ['You', 'はい、 どうぞ。 登[のぼ]れば 登[のぼ]る ほど 涼[すず]しく なる よ。', 'Here you go. The higher we climb, the cooler it gets.']
          ]
        },
        note: { t: 'さえ vs も', x: '<b>名前も知らない</b> = "I don\'t know his name either". <b>名前さえ知らない</b> = "I don\'t even know his name" — さえ highlights how extreme it is.' },
        ex: [
          { mc: '"The more you eat, the fatter you get."', a: '食[た]べれば 食[た]べる ほど 太[ふと]る。', o: ['食[た]べる ほど 食[た]べれば 太[ふと]る。', '食[た]べれば 食[た]べた ほど 太[ふと]る。', '食[た]べる くらい 太[ふと]る。'] },
          { fill: 'あの 人[ひと] は 自分[じぶん] の 名前[なまえ] ＿ 書[か]けない。', a: 'さえ', o: ['ほど', 'くらい'], en: 'That person can\'t even write their own name.' }
        ]
      },
      {
        id: 'N3-10', icon: '❗', title: 'Emphasis & Attitude', sub: 'こそ · なんて · だけでなく · も～ば～も',
        goals: ['Emphasize with こそ', 'Show surprise or disdain with なんて', 'Add points with だけでなく and も～ば～も'],
        words: ['今度[こんど] こそ|this time for sure', 'まさか|no way, surely not', 'ありがたい|grateful', '歌[うた]|song', '踊[おど]る|dance', '性格[せいかく]|personality', '頭[あたま] が いい|smart', '優[やさ]しい|kind'],
        grammar: [
          G('～こそ', 'precisely / this very', 'N + こそ · ～からこそ (precisely because)',
            'Strong emphasis.',
            ['*今度[こんど] こそ* 試験[しけん] に 合格[ごうかく] する ぞ！', 'This time I\'ll pass the exam for sure!'], ['こちら *こそ*、 よろしく お願[ねが]い します。', 'The pleasure is mine.'], ['好[す]き だ *から こそ*、 厳[きび]しく 言[い]う ん だ。', 'It\'s precisely because I care that I\'m strict.']),
          G('～なんて / ～なんか', 'such a thing as (surprise / disdain)', 'Plain form / N + なんて · N + なんか',
            'Surprise, disbelief or downplaying.',
            ['彼[かれ] が 結婚[けっこん] する *なんて*、 信[しん]じられない。', 'I can\'t believe he\'s getting married.'], ['わたし *なんか* まだまだ です。', 'Someone like me still has a long way to go.'], ['宿題[しゅくだい] *なんて* やりたくない！', 'I don\'t want to do homework or anything!']),
          G('～だけでなく / ～ばかりでなく', 'not only … but also', 'Plain form / N + だけでなく + も',
            'Adds a second point.',
            ['彼女[かのじょ] は 歌[うた] *だけ で なく*、 ダンス *も* 上手[じょうず] だ。', 'She\'s good not only at singing but also dancing.'], ['この アプリ は 便利[べんり] な *ばかり で なく*、 無料[むりょう] だ。', 'This app is not only handy but free.']),
          G('～も～ば～も', 'both … and …', 'N も + ば-form + N も',
            'Lists two (often positive) qualities.',
            ['彼[かれ] は 頭[あたま] *も よけれ ば* 性格[せいかく] *も* いい。', 'He\'s both smart and has a great personality.'], ['この 店[みせ] は 値段[ねだん] *も 安[やす]けれ ば*、 味[あじ] *も* いい。', 'This shop is both cheap and tasty.']),
          G('まさか', 'no way / surely not', 'まさか + ～ないでしょう / とは思わなかった',
            'Disbelief.',
            ['*まさか* 優勝[ゆうしょう] する とは 思[おも]わなかった。', 'I never imagined we\'d win.'], ['*まさか*、 もう 忘[わす]れた ん じゃ ない でしょう ね？', 'Surely you haven\'t forgotten already?'])
        ],
        dialog: {
          title: 'Surprise news', lines: [
            ['Yui', 'ケン が 歌手[かしゅ] に なる なんて、 びっくり だ よ ね！', 'Can you believe Ken is becoming a singer!'],
            ['You', 'まさか と 思[おも]った けど、 歌[うた] だけ で なく 作曲[さっきょく] も できる ん だって。', 'I thought no way, but apparently he can not only sing but also compose.'],
            ['Yui', 'すごい。 わたし なんか カラオケ も 下手[へた] な のに。', 'Amazing. Meanwhile I\'m even bad at karaoke.'],
            ['You', '今度[こんど] こそ いっしょ に ライブ に 行[い]こう！', 'This time, let\'s definitely go to his show together!']
          ]
        },
        note: { t: 'なんか — the humble downplayer', x: '<b>わたしなんか</b> ("someone like me") is a common humble move. But <b>あなたなんか</b> ("someone like you") is an insult! Only use なんか on yourself or on things, not people you respect.' },
        ex: [
          { fill: '今年[ことし] ＿ 日本[にほん] に 行[い]きたい！', a: 'こそ', o: ['なんて', 'さえ'], en: 'This year, for sure, I want to go to Japan!' },
          { mc: '"He speaks not only English but also French."', a: '彼[かれ] は 英語[えいご] だけ で なく、 フランス語[ご] も 話[はな]せる。', o: ['彼[かれ] は 英語[えいご] こそ、 フランス語[ご] も 話[はな]せる。', '彼[かれ] は 英語[えいご] なんて、 フランス語[ご] も 話[はな]せる。', '彼[かれ] は 英語[えいご] さえ、 フランス語[ご] が 話[はな]せない。'] }
        ]
      },
      {
        id: 'N3-11', icon: '📊', title: 'Change & Comparison', sub: 'につれて · にしたがって · に比べて · ようになる',
        goals: ['Describe gradual change with につれて / にしたがって', 'Compare formally with に比べて', 'Discuss trends'],
        words: ['年[とし] を とる|grow older', '人口[じんこう]|population', '減[へ]る|decrease', '技術[ぎじゅつ]|technology', '発達[はったつ]|development', '物価[ぶっか]|prices (cost of living)', '上[あ]がる|rise', '平均[へいきん]|average'],
        grammar: [
          G('～につれて', 'as (gradual parallel change)', 'Dictionary form / N + につれて',
            'As A changes, B changes along with it.',
            ['年[とし] を とる *に つれて*、 体力[たいりょく] が 落[お]ちて きた。', 'As I get older, my stamina has been declining.'], ['時間[じかん] が たつ *に つれて*、 町[まち] の 様子[ようす] も 変[か]わった。', 'As time passed, the town changed too.']),
          G('～にしたがって', 'as / in accordance with', 'Dictionary form / N + にしたがって',
            'Similar to につれて; also "following (rules / instructions)".',
            ['山[やま] を 登[のぼ]る *に したがって*、 気温[きおん] が 下[さ]がる。', 'As you climb the mountain, the temperature drops.'], ['係員[かかりいん] の 指示[しじ] *に したがって*、 避難[ひなん] して ください。', 'Please evacuate following the staff\'s instructions.']),
          G('～に比べて', 'compared to', 'N + に比べて / と比べて',
            'Formal comparison.',
            ['去年[きょねん] *に 比[くら]べて*、 今年[ことし] は 雨[あめ] が 多[おお]い。', 'Compared to last year, there\'s more rain this year.'], ['東京[とうきょう] は 地方[ちほう] *に 比[くら]べて* 物価[ぶっか] が 高[たか]い。', 'Tokyo has higher prices compared to the regions.']),
          G('～ようになる (habit change, review)', 'come to / start to', 'Dictionary / potential form + ようになる',
            'Paired with につれて to describe trends.',
            ['技術[ぎじゅつ] の 発達[はったつ] に つれて、 家[いえ] で 働[はたら]ける *よう に なった*。', 'With the development of technology, people became able to work from home.'], ['最近[さいきん] は 現金[げんきん] を 使[つか]わ *なく なった*。', 'Lately, I\'ve stopped using cash.']),
          G('～一方だ', 'keep on (one direction, usually bad)', 'Dictionary form + 一方だ',
            'A trend that only goes one way.',
            ['この 町[まち] の 人口[じんこう] は *減[へ]る 一方[いっぽう] だ*。', 'This town\'s population just keeps shrinking.'], ['物価[ぶっか] は *上[あ]がる 一方[いっぽう] だ*。', 'Prices keep going up and up.'])
        ],
        dialog: {
          title: 'Hometown changes', lines: [
            ['Neighbor', '昔[むかし] に 比[くら]べて、 この 商店街[しょうてんがい] も 静[しず]か に なった ね。', 'Compared to the old days, this shopping street has become quiet.'],
            ['You', 'そう です ね。 大型[おおがた] スーパー が できる に つれて、 お店[みせ] が 減[へ]って いった ん です ね。', 'It has. As big supermarkets opened, the shops decreased.'],
            ['Neighbor', '若[わか]い 人[ひと] も 都会[とかい] に 出[で]て いく 一方[いっぽう] で ね。', 'And young people keep leaving for the cities.'],
            ['You', 'でも 最近[さいきん] は、 古[ふる]い 家[いえ] を カフェ に する 人[ひと] も 増[ふ]えて きました よ。', 'But recently more people are turning old houses into cafés.']
          ]
        },
        note: { t: 'Japan\'s shrinking countryside', x: 'Japan\'s population peaked around 2008. Rural areas face depopulation (<b>過疎化</b>) and many empty houses (<b>空き家</b>) — some towns offer them almost for free to newcomers. You now have the grammar to discuss it!' },
        ex: [
          { fill: '気温[きおん] が 上[あ]がる ＿、 アイス が 売[う]れる。', a: 'に つれて', o: ['に 比[くら]べて', 'に とって'], en: 'As the temperature rises, ice cream sells.' },
          { mc: '"Compared to Osaka, Tokyo is bigger."', a: '大阪[おおさか] に 比[くら]べて、 東京[とうきょう] は 大[おお]きい。', o: ['大阪[おおさか] に つれて、 東京[とうきょう] は 大[おお]きい。', '大阪[おおさか] に したがって、 東京[とうきょう] は 大[おお]きい。', '大阪[おおさか] の 一方[いっぽう] だ、 東京[とうきょう] は 大[おお]きい。'] }
        ]
      },
      {
        id: 'N3-12', icon: '🏷️', title: 'Tendencies & Descriptions', sub: 'がち · 気味 · っぽい · だらけ · 向け',
        goals: ['Describe tendencies with がち and 気味', 'Use っぽい for "-ish"', 'Describe things full of something with だらけ'],
        words: ['風邪[かぜ] 気味[ぎみ]|having a slight cold', '遅[おく]れがち|tend to be late', '子[こ]どもっぽい|childish', '間違[まちが]いだらけ|full of mistakes', '初心者[しょしんしゃ] 向[む]け|for beginners', '泥[どろ]|mud', '忘[わす]れっぽい|forgetful', '曇[くも]りがち|often cloudy'],
        grammar: [
          G('～がち', 'tend to (often negative)', 'Verb stem / N + がち',
            'Something happens often, usually undesirably.',
            ['冬[ふゆ] は 運動[うんどう] 不足[ぶそく] に *なり がち だ*。', 'In winter we tend to get too little exercise.'], ['彼[かれ] は 最近[さいきん] 会社[かいしゃ] を *休[やす]み がち だ*。', 'He\'s been taking a lot of days off lately.']),
          G('～気味', 'slightly, a touch of', 'Verb stem / N + 気味',
            'A slight degree of a (usually negative) condition.',
            ['ちょっと 風邪[かぜ] *気味[ぎみ]* なので、 今日[きょう] は 早[はや]く 寝[ね]ます。', 'I\'m feeling a little under the weather, so I\'ll sleep early.'], ['最近[さいきん]、 太[ふと]り *気味[ぎみ]* です。', 'I\'ve been putting on a bit of weight lately.']),
          G('～っぽい', '-ish, -like, tends to', 'Verb stem / adj stem / N + っぽい',
            'Casual "seems like / has a quality of".',
            ['彼[かれ] は 30歳[さんじゅっさい] な のに *子[こ]どもっぽい*。', 'He\'s 30 but childish.'], ['最近[さいきん]、 *忘[わす]れっぽく* なった。', 'I\'ve gotten forgetful lately.'], ['この スープ、 ちょっと *水[みず]っぽい* ね。', 'This soup is a little watery.']),
          G('～だらけ', 'full of, covered in (negative)', 'N + だらけ',
            'Too much of something unpleasant.',
            ['子[こ]ども たち は *泥[どろ] だらけ* で 帰[かえ]って きた。', 'The kids came home covered in mud.'], ['この 作文[さくぶん] は *間違[まちが]い だらけ* だ。', 'This essay is full of mistakes.']),
          G('～向け / ～向き', 'aimed at / suited for', 'N + 向け (designed for) · N + 向き (suitable for)',
            '向け = made for a target audience; 向き = happens to be suitable.',
            ['これ は *初心者[しょしんしゃ] 向[む]け* の 教科書[きょうかしょ] です。', 'This is a textbook for beginners.'], ['この 部屋[へや] は *南[みなみ] 向[む]き* で 明[あか]るい。', 'This room faces south and is bright.'])
        ],
        reading: {
          title: '案内[あんない]: 初心者[しょしんしゃ] 向[む]け 料理[りょうり] 教室[きょうしつ]', text: [
            '「忙[いそが]しくて、 食事[しょくじ] が コンビニ 弁当[べんとう] ばかり に なり がち」 「料理[りょうり] は 失敗[しっぱい] だらけ で 自信[じしん] が ない」 —— そんな 方[かた] に ぴったり の 教室[きょうしつ] です。',
            'この 教室[きょうしつ] は 一人暮[ひとりぐ]らし の 社会人[しゃかいじん] 向[む]け に、 30分[さんじゅっぷん] で 作[つく]れる 簡単[かんたん] な 和食[わしょく] を 教[おし]えます。',
            '毎週[まいしゅう] 土曜日[どようび] の 午前[ごぜん] 10時[じゅうじ] から。 材料費[ざいりょうひ] 込[こ]み で 一回[いっかい] {2,000円|にせんえん} です。 道具[どうぐ] は 全部[ぜんぶ] こちら で 用意[ようい] します ので、 エプロン だけ 持[も]って きて ください。'
          ],
          en: ['"I\'m so busy my meals tend to be all konbini bentos." "My cooking is full of failures and I have no confidence." — This class is perfect for people like that.', 'Aimed at working people who live alone, this class teaches simple Japanese dishes you can make in 30 minutes.', 'Every Saturday from 10 a.m. ¥2,000 per session including ingredients. We provide all the tools, so just bring an apron.'],
          q: [
            ['Who is the class aimed at?', 'Working people who live alone', 'Professional chefs', 'Children', 'Elderly people'],
            ['What do participants need to bring?', 'An apron', 'Ingredients', 'Their own knives', '¥2,000 worth of food'],
            ['What kind of food is taught?', 'Simple Japanese food made in 30 minutes', 'French desserts', 'Konbini-style bentos', 'Traditional banquet cuisine']
          ]
        },
        note: { t: '～向け everywhere', x: 'Look for 向け on products and signs: <b>子供向け</b> (for kids), <b>外国人向け</b> (for foreigners), <b>大人向け</b> (for adults). It\'s a fast way to see who something is designed for.' },
        ex: [
          { fill: '最近[さいきん] 疲[つか]れ ＿ なので、 早[はや]く 寝[ね]る よう に して います。', a: '気味[ぎみ]', o: ['だらけ', '向け'], en: 'I\'ve been a bit tired lately, so I try to sleep early.' },
          { mc: '"His room is full of garbage."', a: '彼[かれ] の 部屋[へや] は ごみ だらけ だ。', o: ['彼[かれ] の 部屋[へや] は ごみ っぽい だ。', '彼[かれ] の 部屋[へや] は ごみ がち だ。', '彼[かれ] の 部屋[へや] は ごみ 向[む]け だ。'] }
        ]
      },
      {
        id: 'N3-13', icon: '🔄', title: 'Without & Instead Of', sub: 'ずに · ないで · かわりに · なしで',
        goals: ['Say "without doing" in formal and casual ways', 'Say "instead of" with かわりに', 'Make trades and substitutions'],
        words: ['朝食[ちょうしょく]|breakfast', '傘[かさ] を 持[も]たずに|without an umbrella', '辞書[じしょ]|dictionary', '代[か]わりに|instead, in place of', '担当[たんとう]|person in charge', '出席[しゅっせき]|attendance', '砂糖[さとう]|sugar', 'お礼[れい]|thanks, reward'],
        grammar: [
          G('～ずに / ～ないで', 'without doing', 'ない-stem + ずに (する → せずに) · ない form + で',
            'ずに is more formal/written; ないで is everyday.',
            ['朝[あさ]ごはん を *食[た]べずに* 家[いえ] を 出[で]た。', 'I left home without eating breakfast.'], ['辞書[じしょ] を *使[つか]わないで* 読[よ]んで みて ください。', 'Try reading it without a dictionary.'], ['何[なに] も *言[い]わずに* 帰[かえ]って しまった。', 'He went home without saying anything.']),
          G('～かわりに (instead)', 'instead of / in place of', 'Dictionary form / N の + かわりに',
            'Substitution.',
            ['部長[ぶちょう] の *かわり に*、 わたし が 会議[かいぎ] に 出[で]ます。', 'I\'ll attend the meeting in place of the manager.'], ['電車[でんしゃ] で 行[い]く *かわり に*、 歩[ある]いて 行[い]った。', 'Instead of taking the train, I walked.']),
          G('～かわりに (exchange)', 'in exchange for', 'Plain form + かわりに',
            'A trade or balancing point.',
            ['英語[えいご] を 教[おし]える *かわり に*、 日本語[にほんご] を 教[おし]えて もらって いる。', 'In exchange for teaching English, I get taught Japanese.'], ['この 部屋[へや] は 広[ひろ]い *かわり に*、 駅[えき] から 遠[とお]い。', 'This apartment is spacious, but in return it\'s far from the station.']),
          G('～なしで / ～なしに', 'without (noun)', 'N + なしで / なしに',
            'Without a thing.',
            ['砂糖[さとう] *なし で* コーヒー を 飲[の]む。', 'I drink coffee without sugar.'], ['予約[よやく] *なし で* 入[はい]れます か。', 'Can I go in without a reservation?'])
        ],
        dialog: {
          title: 'Covering for a coworker', lines: [
            ['Sato', '明日[あした]、 わたし の かわり に 打[う]ち合[あ]わせ に 出[で]て もらえない？', 'Could you attend tomorrow\'s meeting in my place?'],
            ['You', 'いい です よ。 その かわり、 来週[らいしゅう] の シフト を 代[か]わって もらえます か。', 'Sure. In exchange, could you swap my shift next week?'],
            ['Sato', 'もちろん！ 資料[しりょう] なし で 大丈夫[だいじょうぶ]？', 'Of course! Will you be OK without materials?'],
            ['You', '前[まえ] に 説明[せつめい] を 聞[き]いた ので、 たぶん 大丈夫[だいじょうぶ] です。', 'I heard the explanation before, so probably fine.']
          ]
        },
        note: { t: '～ずにはいられない preview', x: 'ず appears in many fixed expressions you\'ll meet at N2: <b>思わず</b> ("without thinking"), <b>相変わらず</b> ("as usual"), <b>～ずにはいられない</b> ("can\'t help doing").' },
        ex: [
          { mc: '"He left without paying."', a: '彼[かれ] は お金[かね] を 払[はら]わずに 帰[かえ]った。', o: ['彼[かれ] は お金[かね] を 払[はら]わないずに 帰[かえ]った。', '彼[かれ] は お金[かね] を 払[はら]う かわり に 帰[かえ]った。', '彼[かれ] は お金[かね] なし で 払[はら]った。'] },
          { fill: '今日[きょう] は 田中[たなか] さん の ＿ わたし が 説明[せつめい] します。', a: 'かわり に', o: ['なし で', 'ずに'], en: 'Today I\'ll explain in Tanaka\'s place.' }
        ]
      },
      {
        id: 'N3-14', icon: '🗨️', title: 'Real Casual Speech', sub: 'っけ · とか · じゃん · もん · ちゃう',
        goals: ['Check your memory with ～っけ', 'Give vague examples with とか', 'Recognize じゃん, もん and contractions'],
        words: ['何[なん]だっけ|what was it again?', 'やっぱり|as expected, after all', 'めんどくさい|troublesome, a pain', 'すごく|really, very', 'ていうか|I mean, or rather', 'ヤバい|crazy (good/bad)', 'マジ|seriously', 'うける|that\'s hilarious'],
        grammar: [
          G('～っけ', 'was it…? (checking memory)', 'Plain past / だった + っけ',
            'Asking (yourself or others) to confirm something you half-remember.',
            ['あの 人[ひと]、 名前[なまえ] 何[なん] *だっけ*？', 'What was that person\'s name again?'], ['明日[あした] の 会議[かいぎ] 何時[なんじ] から *だった っけ*？', 'What time does tomorrow\'s meeting start again?']),
          G('～とか', 'things like (vague listing)', 'N / plain form + とか',
            'Lists examples vaguely; also softens statements.',
            ['休[やす]み の 日[ひ] は 映画[えいが] *とか* 見[み]て る。', 'On days off I watch movies and stuff.'], ['今度[こんど]、 ご飯[はん] *とか* 行[い]かない？', 'Want to go for dinner or something sometime?']),
          G('～じゃん', 'isn\'t it / you know (casual)', 'Plain form + じゃん',
            'Casual "right?" — originally from Yokohama dialect, now everywhere.',
            ['これ、 すごく いい *じゃん*！', 'Hey, this is really good!'], ['だから 言[い]った *じゃん*。', 'I told you so, didn\'t I?']),
          G('～もん / ～もの (excuse)', 'because (childish/emotional reason)', 'Plain form + もん / もの',
            'A casual, sometimes pouty justification.',
            ['だって、 眠[ねむ]かった *ん だ もん*。', 'But I was sleepy!'], ['行[い]きたくない。 寒[さむ]い *もん*。', 'I don\'t want to go. It\'s cold.']),
          G('Contractions', 'how real speech shrinks', 'ている → てる · ておく → とく · てしまう → ちゃう · ければ → きゃ · なければ → なきゃ · ては → ちゃ · という → って',
            'Native speakers contract constantly. Recognizing these is half the battle in listening.',
            ['今[いま] 何[なに] *して る*？', 'What are you doing now?'], ['ビール、 冷[ひ]やし *とく* ね。', 'I\'ll chill the beer (in advance).'], ['もう *行[い]かなきゃ*！', 'I gotta go!'])
        ],
        dialog: {
          title: 'Chatting with a friend', lines: [
            ['Mika', 'ねえ、 あの 映画[えいが] の タイトル 何[なん] だっけ？', 'Hey, what was that movie\'s title again?'],
            ['You', 'え、 先週[せんしゅう] 見[み]た じゃん！ 「海[うみ] の 声[こえ]」 だ よ。', 'Huh, we watched it last week! It\'s "Voice of the Sea".'],
            ['Mika', 'そう そう！ ていうか、 続編[ぞくへん] 出[で]る んだって。 また 見[み]に 行[い]こう よ。', 'Right right! Actually, I heard there\'s a sequel. Let\'s go see it again.'],
            ['You', 'いい ね！ チケット、 予約[よやく] し とく ね。', 'Nice! I\'ll book tickets.']
          ]
        },
        note: { t: 'Listening tip', x: 'If casual speech feels too fast, it\'s usually contractions. Train your ear with <b>てる / とく / ちゃう / なきゃ / って</b> — once you hear them, dramas and anime suddenly become clear.' },
        ex: [
          { resp: '明日[あした] の 集合[しゅうごう] 時間[じかん]、 何時[なんじ] だっけ？', npcEn: 'What time are we meeting tomorrow again?', a: '10時[じゅうじ] だよ。', o: ['10時[じゅうじ] だっけ。', '10時[じゅうじ] で ございます。'] },
          { mc: 'What does しとく mean?', a: 'しておく — do in advance', o: ['している — be doing', 'してしまう — finish doing', 'しなければ — must do'] }
        ]
      },
      {
        id: 'N3-15', icon: '😔', title: 'Regrets & Wishes', sub: 'ばよかった · ところだった · といい · ものだ',
        goals: ['Express regret with ～ばよかった', 'Say "almost happened" with ところだった', 'Make wishes with ～といい', 'Reminisce with ～ものだ'],
        words: ['後悔[こうかい]|regret', '危[あぶ]ない|dangerous, close call', '乗[の]り遅[おく]れる|miss (a train)', '合格[ごうかく] できる|be able to pass', '昔[むかし]|long ago', 'よく ～ たものだ|used to often', '晴[は]れる|be sunny', '願[ねが]い|wish'],
        grammar: [
          G('～ばよかった / ～たらよかった', 'I should have / I wish I had', 'ば-form + よかった · ない → なければよかった',
            'Regret about the past.',
            ['もっと 早[はや]く *出[で]れ ば よかった*。', 'I should have left earlier.'], ['あんな こと、 *言[い]わなけれ ば よかった*。', 'I wish I hadn\'t said that.']),
          G('～ところだった', 'almost (but didn\'t)', 'Dictionary form + ところだった',
            'A narrow escape.',
            ['危[あぶ]なかった！ 電車[でんしゃ] に *乗[の]り遅[おく]れる ところ だった*。', 'Close call! I almost missed the train.'], ['大事[だいじ] な 約束[やくそく] を *忘[わす]れる ところ でした*。', 'I nearly forgot an important appointment.']),
          G('～といい / ～ばいい (wish)', 'I hope / it would be nice if', 'Dictionary form + といい(ですね) · ば-form + いいのに',
            'Hoping for an outcome (often for someone else).',
            ['明日[あした]、 *晴[は]れる と いい です ね*。', 'I hope it\'s sunny tomorrow.'], ['試験[しけん] に *合格[ごうかく] できる と いい ね*。', 'I hope you pass the exam.'], ['もっと 休[やす]み が *あれ ば いい のに*。', 'If only there were more holidays.']),
          G('～ものだ (reminiscing / nature)', 'used to / it\'s natural that', 'た-form + ものだ (nostalgia) · dictionary form + ものだ (general truth)',
            'Nostalgic memories, or how things naturally are.',
            ['子[こ]ども の ころ は よく この 川[かわ] で *遊[あそ]んだ もの だ*。', 'As a kid I used to play in this river a lot.'], ['人[ひと] は 失敗[しっぱい] から *学[まな]ぶ もの だ*。', 'People learn from their failures.']),
          G('～ものか / ～もんか', 'no way will I (strong refusal)', 'Dictionary form + ものか (casual: もんか)',
            'Emphatic "definitely not".',
            ['あんな 店[みせ]、 二度[にど] と *行[い]く もん か*！', 'I\'ll never go to that shop again!'], ['こんな ところ で *負[ま]ける もの か*。', 'There\'s no way I\'ll lose here.'])
        ],
        dialog: {
          title: 'Missed the concert', lines: [
            ['Ken', 'コンサート の チケット、 取[と]れた？', 'Did you get concert tickets?'],
            ['You', 'ううん、 売[う]り切[き]れ だった。 もっと 早[はや]く 予約[よやく] すれ ば よかった…', 'No, sold out. I should have booked earlier…'],
            ['Ken', '残念[ざんねん]。 キャンセル が 出[で]る と いい ね。', 'Too bad. I hope there are cancellations.'],
            ['You', 'うん。 昔[むかし] は 当日[とうじつ] でも 買[か]えた もの だ けど ね。', 'Yeah. Back in the day you could buy them on the day.']
          ]
        },
        note: { t: '～といいですね — the kind wish', x: 'Japanese often respond to others\' plans with a wish: 晴れるといいですね ("I hope it\'s sunny"), 早く治るといいですね ("I hope you get better soon"). It\'s a warm, natural thing to say.' },
        ex: [
          { resp: '来週[らいしゅう]、 面接[めんせつ] が ある ん です。', npcEn: 'I have an interview next week.', a: 'うまく いく と いい です ね。', o: ['うまく いけ ば よかった です ね。', 'うまく いく ところ でした ね。'] },
          { mc: '"I almost fell asleep."', a: '寝[ね]る ところ だった。', o: ['寝[ね]た ところ だった。', '寝[ね]れ ば よかった。', '寝[ね]る もの だ。'] }
        ],
        convo: 'n3-apology'
      },
      {
        id: 'N3-16', icon: '📚', title: 'N3 Review: Work & Society', sub: 'Reading & review',
        goals: ['Read an opinion piece using N3 grammar', 'Review reasons, perspective, change and nuance', 'Get ready for the N3 mock exam'],
        words: ['働[はたら]き方[かた]|way of working', '在宅[ざいたく] 勤務[きんむ]|working from home', '通勤[つうきん]|commuting', '効率[こうりつ]|efficiency', '孤独[こどく]|loneliness', '交流[こうりゅう]|interaction', '導入[どうにゅう]|introduction (of a system)', '課題[かだい]|issue, challenge'],
        grammar: [
          G('Review: N3 essentials', 'reasons, perspective, hearsay, degree, change, tendencies', '',
            'You\'ve covered the core N3 grammar. Read the opinion piece below, then test yourself with the <b>N3 mock exam</b> and keep growing your N3 vocabulary and kanji decks.',
            ['在宅[ざいたく] 勤務[きんむ] の *おかげ で*、 通勤[つうきん] 時間[じかん] が なく なった。', 'Thanks to working from home, my commute disappeared.'], ['便利[べんり] だ から と いって、 いい *わけ で は ない*。', 'Just because it\'s convenient doesn\'t mean it\'s good.'])
        ],
        reading: {
          title: '意見文[いけんぶん]: 在宅[ざいたく] 勤務[きんむ] は 本当[ほんとう] に いい の か', text: [
            'コロナ を きっかけ に、 多[おお]く の 会社[かいしゃ] が 在宅[ざいたく] 勤務[きんむ] を 導入[どうにゅう] した。 通勤[つうきん] し なくて も いい おかげ で、 家族[かぞく] と 過[す]ごす 時間[じかん] が 増[ふ]えた と いう 人[ひと] は 多[おお]い。',
            'しかし、 在宅[ざいたく] 勤務[きんむ] に は 課題[かだい] も ある。 同僚[どうりょう] と の 交流[こうりゅう] が 減[へ]る に つれて、 孤独[こどく] を 感[かん]じる 人[ひと] が 増[ふ]えて いる という。 また、 家[いえ] で は 運動[うんどう] 不足[ぶそく] に なり がち だ。',
            'わたし は、 在宅[ざいたく] 勤務[きんむ] が 悪[わる]い わけ で は ない と 思[おも]う。 大切[たいせつ] な の は、 人[ひと] に よって 合[あ]う 働[はたら]き方[かた] が 違[ちが]う という こと だ。 会社[かいしゃ] は 社員[しゃいん] が 自分[じぶん] で 選[えら]べる よう に す べき で は ない だろう か。'
          ],
          en: ['Triggered by COVID, many companies introduced working from home. Many people say that, thanks to not having to commute, they have more time with family.', 'However, working from home also has problems. Reportedly, as interaction with coworkers decreases, more people feel lonely. Also, people tend to get too little exercise at home.', 'I don\'t think working from home is bad. What matters is that the way of working that suits people differs from person to person. Shouldn\'t companies let employees choose for themselves?'],
          q: [
            ['What benefit of working from home is mentioned first?', 'More time with family because there\'s no commute', 'Higher salaries', 'Better health', 'More meetings with coworkers'],
            ['What problem is mentioned?', 'People feel lonely as interaction decreases', 'Internet costs go up', 'Companies lose money', 'People work fewer hours'],
            ['What is the writer\'s opinion?', 'Employees should be able to choose how they work', 'Working from home should be banned', 'Everyone should work from home', 'Commuting is good exercise']
          ]
        },
        ex: [
          { mc: '"Thanks to my friend\'s advice, I found a job."', a: '友[とも]だち の アドバイス の おかげ で、 仕事[しごと] が 見[み]つかった。', o: ['友[とも]だち の アドバイス の せい で、 仕事[しごと] が 見[み]つかった。', '友[とも]だち の アドバイス に とって、 仕事[しごと] が 見[み]つかった。', '友[とも]だち の アドバイス だらけ で、 仕事[しごと] が 見[み]つかった。'] },
          { mc: '"It\'s not that I hate it."', a: '嫌[きら]い な わけ で は ない。', o: ['嫌[きら]い な わけ だ。', '嫌[きら]い な わけ が ない。', '嫌[きら]い な わけ に は いかない。'] },
          { mc: '"The more I read, the more interesting it gets."', a: '読[よ]めば 読[よ]む ほど おもしろく なる。', o: ['読[よ]む ほど 読[よ]めば おもしろく なる。', '読[よ]めば 読[よ]んだ ほど おもしろい。', '読[よ]む に つれて おもしろく なれ ば いい。'] }
        ],
        convo: 'n3-complaint'
      }
    ]
  });
})();
