/* Level 8 — JLPT N2: upper-intermediate. Business, news, formal writing and nuanced speech.
 * Vocabulary and kanji for N2 are learned through the N2 decks (Review & Learn). */
(function () {
  const G = (t, m, f, x, ...e) => ({ t, m, f, x, e });
  JT.addLevel({
    n: 8, jlpt: 2, tag: 'N2', icon: '🏯', color: '#8a3b2f',
    title: 'N2 · Professional Japanese', jp: 'ビジネスと新聞の日本語',
    desc: 'The Japanese of offices, newspapers and serious conversation: formal connectors, nuanced concessions, strong emotions, risks, evaluations and the many faces of こと and もの.',
    cando: ['Follow business documents and news articles', 'Express nuanced contrasts and concessions', 'Talk about risks, possibilities and impossibilities', 'Use formal expressions for ceremonies, meetings and announcements', 'Evaluate people and things fairly', 'Understand complex written arguments'],
    lessons: [
      {
        id: 'N2-1', icon: '📐', title: 'Basis & Standards', sub: 'に基づいて · をもとに · に沿って · に応じて · を中心に · をめぐって',
        goals: ['State what something is based on', 'Say things are adjusted to circumstances', 'Describe what a debate centers on'],
        words: ['調査[ちょうさ]|survey, investigation', '経験[けいけん]|experience', '方針[ほうしん]|policy', '予算[よさん]|budget', '希望[きぼう]|wish, request', '議論[ぎろん]|debate, discussion', '問題[もんだい]|issue, problem', '資料[しりょう]|materials, data'],
        grammar: [
          G('～に基[もと]づいて', 'based on (data, rules, facts)', 'N + に基づいて / に基づく + N',
            'Something is founded on objective information.',
            ['この 報告書[ほうこくしょ] は アンケート の 結果[けっか] *に 基[もと]づいて* 作成[さくせい] された。', 'This report was prepared based on survey results.'], ['法律[ほうりつ] *に 基[もと]づく* 判断[はんだん] が 必要[ひつよう] だ。', 'A judgment based on the law is necessary.']),
          G('～をもとに(して)', 'based on (material, inspiration)', 'N + をもとに(して)',
            'Uses something as material or inspiration to create something new.',
            ['この 映画[えいが] は 実話[じつわ] *を もと に* 作[つく]られた。', 'This movie was made based on a true story.'], ['自分[じぶん] の 経験[けいけん] *を もと に して*、 小説[しょうせつ] を 書[か]いた。', 'I wrote a novel based on my own experiences.']),
          G('～に沿[そ]って', 'in line with, following', 'N + に沿って / に沿った + N',
            'Following a plan, policy or route.',
            ['会社[かいしゃ] の 方針[ほうしん] *に 沿[そ]って* 計画[けいかく] を 立[た]てる。', 'We make plans in line with company policy.'], ['川[かわ] *に 沿[そ]って* 桜[さくら] の 木[き] が 並[なら]んで いる。', 'Cherry trees line the river.']),
          G('～に応[おう]じて', 'in accordance with, depending on', 'N + に応じて / に応じた + N',
            'Adjusting to circumstances, needs or levels.',
            ['予算[よさん] *に 応[おう]じて*、 プラン を 選[えら]べます。', 'You can choose a plan according to your budget.'], ['お客[きゃく]様[さま] の 希望[きぼう] *に 応[おう]じた* サービス を 提供[ていきょう] します。', 'We provide services tailored to customers\' wishes.']),
          G('～を中心[ちゅうしん]に', 'centered on, mainly', 'N + を中心に(して)',
            'The focus or core of something.',
            ['若者[わかもの] *を 中心[ちゅうしん] に*、 この アプリ が 人気[にんき] だ。', 'This app is popular, mainly among young people.'], ['台風[たいふう] は 九州[きゅうしゅう] *を 中心[ちゅうしん] に* 大[おお]きな 被害[ひがい] を もたらした。', 'The typhoon caused major damage, mainly in Kyushu.']),
          G('～をめぐって', 'over, concerning (a dispute)', 'N + をめぐって / をめぐる + N',
            'The topic around which debate or conflict revolves.',
            ['新[あたら]しい 空港[くうこう] の 建設[けんせつ] *を めぐって*、 議論[ぎろん] が 続[つづ]いて いる。', 'Debate continues over the construction of the new airport.'], ['遺産[いさん] *を めぐる* 争[あらそ]い', 'a dispute over an inheritance'])
        ],
        note: { t: 'Reading the news', x: 'These six phrases appear in nearly every Japanese news article. Spotting them lets you instantly see the structure: what the basis is (に基づいて), who is mainly affected (を中心に), and what the controversy is about (をめぐって).' },
        ex: [
          { fill: '経験[けいけん] ＿ 給料[きゅうりょう] が 決[き]まります。', a: 'に 応[おう]じて', o: ['を めぐって', 'を 中心[ちゅうしん] に'], en: 'Salary is determined according to experience.' },
          { mc: '"This drama is based on a manga."', a: 'この ドラマ は 漫画[まんが] を もと に して いる。', o: ['この ドラマ は 漫画[まんが] を めぐって いる。', 'この ドラマ は 漫画[まんが] に 応[おう]じて いる。', 'この ドラマ は 漫画[まんが] に 沿[そ]って いる。'] }
        ]
      },
      {
        id: 'N2-2', icon: '🗓️', title: 'Time & Range', sub: 'にかけて · にわたって · を通じて · に先立って · 次第 · 以来',
        goals: ['Describe spans of time and space', 'Say "as soon as" formally', 'Talk about something since a point in time'],
        words: ['関東[かんとう]|Kanto region', '梅雨[つゆ]|rainy season', '開会式[かいかいしき]|opening ceremony', '工事[こうじ]|construction work', '一年中[いちねんじゅう]|all year round', '到着[とうちゃく]|arrival', '卒業[そつぎょう]|graduation', '連絡[れんらく]|contact'],
        grammar: [
          G('～にかけて', 'from … through (approx. range)', 'N から + N + にかけて',
            'A rough range of time or area.',
            ['今夜[こんや] から 明日[あした] の 朝[あさ] *に かけて*、 雪[ゆき] が 降[ふ]る でしょう。', 'Snow is expected from tonight through tomorrow morning.'], ['関東[かんとう] から 東北[とうほく] *に かけて* 大雨[おおあめ] に なった。', 'There was heavy rain from Kanto to Tohoku.']),
          G('～にわたって', 'over, throughout (a long span)', 'N + にわたって / にわたる + N',
            'Emphasizes the whole length or extent.',
            ['会議[かいぎ] は 5時間[ごじかん] *に わたって* 続[つづ]いた。', 'The meeting lasted for five hours.'], ['10年[じゅうねん] *に わたる* 研究[けんきゅう] の 結果[けっか]', 'the results of research spanning ten years']),
          G('～を通[つう]じて / ～を通[とお]して', 'throughout / through (means)', 'N + を通じて / を通して',
            '"Throughout a period" or "by means of".',
            ['この 地域[ちいき] は 一年[いちねん] *を 通[つう]じて* 暖[あたた]かい。', 'This region is warm all year round.'], ['友人[ゆうじん] *を 通[とお]して* 彼女[かのじょ] と 知[し]り合[あ]った。', 'I got to know her through a friend.']),
          G('～に先立[さきだ]って', 'prior to, before (formal)', 'N / dictionary form + に先立って',
            'Formal "before" for official events.',
            ['開会式[かいかいしき] *に 先立[さきだ]って*、 記者[きしゃ] 会見[かいけん] が 行[おこな]われた。', 'A press conference was held prior to the opening ceremony.'], ['工事[こうじ] *に 先立[さきだ]ち*、 住民[じゅうみん] に 説明[せつめい] を した。', 'Residents were briefed before the construction.']),
          G('～次第[しだい] (as soon as)', 'as soon as (formal)', 'Verb stem + 次第',
            'Polite "as soon as" — common in business emails.',
            ['資料[しりょう] が 届[とど]き *次第[しだい]*、 ご連絡[れんらく] いたします。', 'I will contact you as soon as the materials arrive.'], ['準備[じゅんび] が でき *次第[しだい]*、 出発[しゅっぱつ] します。', 'We will depart as soon as we\'re ready.']),
          G('～て以来[いらい]', 'ever since', 'て-form / N + 以来',
            'A state continuing from a past point.',
            ['日本[にほん] に *来[き]て 以来[いらい]*、 一度[いちど] も 国[くに] に 帰[かえ]って いない。', 'Since coming to Japan, I haven\'t been back home once.'], ['卒業[そつぎょう] *以来[いらい]*、 彼[かれ] に は 会[あ]って いない。', 'I haven\'t seen him since graduation.'])
        ],
        note: { t: 'Business email: 次第', x: '<b>～次第ご連絡いたします</b> ("I\'ll contact you as soon as…") is a staple of business email. Pair it with <b>確認次第</b> ("as soon as I confirm") and you sound like a pro.' },
        ex: [
          { fill: '結果[けっか] が わかり ＿、 お知[し]らせ します。', a: '次第[しだい]', o: ['以来[いらい]', 'に わたって'], en: 'I\'ll let you know as soon as the results are known.' },
          { mc: '"The festival lasts for three days."', a: '祭[まつ]り は 三日間[みっかかん] に わたって 行[おこな]われる。', o: ['祭[まつ]り は 三日間[みっかかん] に 先立[さきだ]って 行[おこな]われる。', '祭[まつ]り は 三日間[みっかかん] 次第[しだい] 行[おこな]われる。', '祭[まつ]り は 三日間[みっかかん] 以来[いらい] 行[おこな]われる。'] }
        ]
      },
      {
        id: 'N2-3', icon: '↔️', title: 'Contrast & Concession', sub: 'ものの · ながらも · にもかかわらず · といっても · からといって',
        goals: ['Concede and contrast formally', 'Correct exaggerated impressions', 'Say "just because… doesn\'t mean"'],
        words: ['努力[どりょく]|effort', '結果[けっか]|result', '反対[はんたい]|opposition', '実行[じっこう]|carrying out', '狭[せま]い|narrow, cramped', '料理[りょうり] が できる|can cook', '簡単[かんたん]|simple', '外国人[がいこくじん]|foreigner'],
        grammar: [
          G('～ものの', 'although (but in reality)', 'Plain form (な-adj + な / である) + ものの',
            'Acknowledges a fact, then shows a contrasting reality — written / formal.',
            ['免許[めんきょ] は 取[と]った *もの の*、 ほとんど 運転[うんてん] して いない。', 'Although I got my license, I hardly ever drive.'], ['頭[あたま] で は わかって いる *もの の*、 なかなか やめられない。', 'Although I understand it in my head, I just can\'t quit.']),
          G('～ながら(も)', 'although, while (contrast)', 'Verb stem / adj / N + ながら(も)',
            'Two contrasting facts about the same subject.',
            ['狭[せま]い *ながら も*、 快適[かいてき] な 部屋[へや] です。', 'Although small, it\'s a comfortable room.'], ['悪[わる]い と 知[し]り *ながら*、 嘘[うそ] を ついて しまった。', 'Even though I knew it was wrong, I lied.']),
          G('～にもかかわらず', 'despite, in spite of', 'Plain form / N + にもかかわらず',
            'Formal "despite", often with surprise.',
            ['雨[あめ] *に も かかわらず*、 大勢[おおぜい] の 人[ひと] が 集[あつ]まった。', 'Despite the rain, many people gathered.'], ['努力[どりょく] した *に も かかわらず*、 結果[けっか] は 出[で]なかった。', 'Despite my efforts, no results came.']),
          G('～といっても', 'although I say…, (it\'s not much)', 'Plain form / N + といっても',
            'Corrects an exaggerated impression.',
            ['料理[りょうり] が できる *と いって も*、 簡単[かんたん] な もの だけ です。', 'I say I can cook, but only simple things.'], ['旅行[りょこう] *と いって も*、 近[ちか]く の 温泉[おんせん] に 一泊[いっぱく] する だけ だ。', 'It\'s a "trip", but just one night at a nearby hot spring.']),
          G('～からといって', 'just because … (doesn\'t mean)', 'Plain form + からといって + negative',
            'Rejects a hasty conclusion.',
            ['日本人[にほんじん] だ *から と いって*、 敬語[けいご] が 完璧[かんぺき] な わけ で は ない。', 'Just because someone is Japanese doesn\'t mean their keigo is perfect.'], ['安[やす]い *から と いって*、 たくさん 買[か]う の は よくない。', 'Just because it\'s cheap doesn\'t mean you should buy lots.']),
          G('～一方(で)', 'while, on the other hand', 'Plain form (な-adj + な / である) + 一方(で)',
            'Two contrasting sides of a situation.',
            ['都会[とかい] は 便利[べんり] な *一方[いっぽう] で*、 物価[ぶっか] が 高[たか]い。', 'While cities are convenient, prices are high.'], ['子[こ]ども が 減[へ]る *一方[いっぽう]*、 高齢者[こうれいしゃ] は 増[ふ]えて いる。', 'While the number of children falls, the elderly population rises.'])
        ],
        dialog: {
          title: 'Small apartment', lines: [
            ['Yui', '新[あたら]しい 部屋[へや]、 どう？', 'How\'s the new place?'],
            ['You', '駅[えき] から 近[ちか]い もの の、 ちょっと 狭[せま]い ん だ よ ね。', 'It\'s close to the station, but kind of cramped.'],
            ['Yui', 'でも、 狭[せま]い ながら も 日当[ひあ]たり は いい って 言[い]って なかった？', 'But didn\'t you say that, though small, it gets good sunlight?'],
            ['You', 'うん。 狭[せま]い から と いって、 住[す]みにくい わけ じゃ ない よ。', 'Yeah. Just because it\'s small doesn\'t mean it\'s hard to live in.']
          ]
        },
        note: { t: 'Japanese "yes, but…"', x: 'Japanese argument often acknowledges first, then contrasts: <b>～ものの</b>, <b>～とはいえ</b>, <b>～一方で</b>. Mastering this rhythm makes your opinions sound balanced and polite.' },
        ex: [
          { fill: '頑張[がんば]った ＿、 試験[しけん] に 落[お]ちて しまった。', a: 'に も かかわらず', o: ['から と いって', 'と いって も'], en: 'Despite working hard, I failed the exam.' },
          { mc: '"Just because it\'s expensive doesn\'t mean it\'s good."', a: '高[たか]い から と いって、 いい と は 限[かぎ]らない。', o: ['高[たか]い もの の、 いい と は 限[かぎ]らない。', '高[たか]い 一方[いっぽう]、 いい と 限[かぎ]る。', '高[たか]い と いって も、 いい わけ だ。'] }
        ]
      },
      {
        id: 'N2-4', icon: '😣', title: 'Can\'t Help It', sub: 'ずにはいられない · てならない · てたまらない · ざるを得ない',
        goals: ['Express irresistible urges', 'Describe overwhelming feelings', 'Say you have no choice but to'],
        words: ['笑[わら]う|laugh', '心配[しんぱい]|worry', '会[あ]いたい|want to meet', '中止[ちゅうし]|cancellation', '残念[ざんねん]|regrettable', '気[き] に なる|be on one\'s mind', '涙[なみだ]|tears', '我慢[がまん]|endurance'],
        grammar: [
          G('～ずにはいられない', 'can\'t help doing', 'ない-stem + ずにはいられない (する → せずにはいられない)',
            'An irresistible impulse.',
            ['あまり に おかしくて、 *笑[わら]わず に は いられなかった*。', 'It was so funny I couldn\'t help laughing.'], ['その 話[はなし] を 聞[き]いて、 *泣[な]かず に は いられなかった*。', 'Hearing that story, I couldn\'t help crying.']),
          G('～てならない', 'can\'t help feeling (spontaneous)', 'て-form + ならない (with feeling/thinking verbs)',
            'A feeling that arises uncontrollably — slightly formal.',
            ['息子[むすこ] の こと が *心配[しんぱい] で ならない*。', 'I can\'t help worrying about my son.'], ['何[なに] か 隠[かく]して いる よう に *思[おも]えて ならない*。', 'I can\'t shake the feeling they\'re hiding something.']),
          G('～てたまらない / ～てしょうがない', 'unbearably, extremely', 'て-form (い-adj くて, な-adj で) + たまらない / しょうがない',
            'A strong physical or emotional state. しょうがない is more casual.',
            ['家族[かぞく] に *会[あ]いたくて たまらない*。', 'I miss my family so much I can\'t stand it.'], ['今日[きょう] は 暑[あつ]くて *しょうが ない*。', 'It\'s unbearably hot today.']),
          G('～ざるを得[え]ない', 'have no choice but to', 'ない-stem + ざるを得ない (する → せざるを得ない)',
            'Forced by circumstances (formal).',
            ['台風[たいふう] の ため、 旅行[りょこう] を *中止[ちゅうし] せ ざる を 得[え]ない*。', 'Because of the typhoon, we have no choice but to cancel the trip.'], ['上司[じょうし] の 命令[めいれい] なら、 *従[したが]わ ざる を 得[え]ない*。', 'If it\'s the boss\'s order, I have to obey.']),
          G('～ないではいられない', 'can\'t help doing (spoken)', 'ない form + ではいられない',
            'Same as ずにはいられない, more conversational.',
            ['困[こま]って いる 人[ひと] を 見[み]る と、 *助[たす]け ない で は いられない*。', 'When I see someone in trouble, I can\'t help helping.'], ['新作[しんさく] が 出[で]る と、 *買[か]わ ない で は いられない*。', 'When a new release comes out, I can\'t resist buying it.'])
        ],
        dialog: {
          title: 'Homesick', lines: [
            ['Sato', '最近[さいきん]、 元気[げんき] ない ね。', 'You seem down lately.'],
            ['You', '実[じつ]は、 家族[かぞく] に 会[あ]いたくて たまらない ん です。', 'Actually, I miss my family terribly.'],
            ['Sato', 'そう か。 年末[ねんまつ] は 帰[かえ]れる の？', 'I see. Can you go home at year end?'],
            ['You', '仕事[しごと] が 忙[いそが]しい ので、 今年[ことし] は 諦[あきら]め ざる を 得[え]ない ん です。', 'Work is busy, so I have no choice but to give up this year.']
          ]
        },
        note: { t: 'Feelings that "happen to you"', x: 'Expressions like <b>思えてならない</b> and <b>気になってしょうがない</b> present emotions as things that happen to you rather than things you choose — a very Japanese way of describing feelings.' },
        ex: [
          { fill: '雨[あめ] で 道[みち] が 通[とお]れない ので、 引[ひ]き返[かえ]さ ＿。', a: 'ざる を 得[え]ない', o: ['ず に は いられない', 'て たまらない'], en: 'The road is closed due to rain, so we have no choice but to turn back.' },
          { mc: '"I\'m dying to know the result."', a: '結果[けっか] が 気[き] に なって しょうが ない。', o: ['結果[けっか] が 気[き] に なら ざる を 得[え]ない。', '結果[けっか] が 気[き] に なら ず に は いられない。', '結果[けっか] が 気[き] に なる もの の。'] }
        ]
      },
      {
        id: 'N2-5', icon: '⚠️', title: 'Risk & Possibility', sub: 'おそれがある · かねない · かねる · がたい · 得る · っこない',
        goals: ['Warn of risks formally', 'Politely refuse with かねる', 'Say something is hard to believe or impossible'],
        words: ['津波[つなみ]|tsunami', '警報[けいほう]|warning, alert', '事故[じこ]|accident', '居眠[いねむ]り|dozing off', '要望[ようぼう]|request', '応[おう]じる|respond, comply', '信[しん]じる|believe', '許[ゆる]す|forgive'],
        grammar: [
          G('～おそれがある', 'there is a risk that', 'Dictionary form / N の + おそれがある',
            'Formal warning about a negative possibility (news, notices).',
            ['大雨[おおあめ] で 川[かわ] が *あふれる おそれ が ある*。', 'There is a risk the river will overflow due to heavy rain.'], ['津波[つなみ] *の おそれ が ありますので*、 海岸[かいがん] から 離[はな]れて ください。', 'There is a risk of a tsunami, so please move away from the coast.']),
          G('～かねない', 'could well (lead to something bad)', 'Verb stem + かねない',
            'A bad outcome is quite possible.',
            ['寝不足[ねぶそく] で 運転[うんてん] する と、 事故[じこ] を *起[お]こし かねない*。', 'Driving without enough sleep could well cause an accident.'], ['そんな 言[い]い方[かた] を したら、 誤解[ごかい] *され かねない* よ。', 'If you put it that way, you might be misunderstood.']),
          G('～かねる', 'cannot (politely refusing)', 'Verb stem + かねる',
            'A polite "I\'m unable to" — used by staff and in business.',
            ['申[もう]し訳[わけ] ございません が、 その ご要望[ようぼう] に は *お応[こた]え し かねます*。', 'I\'m terribly sorry, but we cannot meet that request.'], ['わたし に は *判断[はんだん] し かねます*。', 'I\'m not in a position to decide.']),
          G('～がたい', 'hard to (emotionally / ethically)', 'Verb stem + がたい',
            'Difficult to accept, believe or forgive.',
            ['彼[かれ] が 犯人[はんにん] だ なんて、 *信[しん]じ がたい*。', 'It\'s hard to believe he is the culprit.'], ['あの 行為[こうい] は *許[ゆる]し がたい*。', 'That act is hard to forgive.']),
          G('～得[う]る / ～得[え]ない', 'can happen / cannot happen', 'Verb stem + 得る (うる/える) · 得ない (えない)',
            'Possibility in principle.',
            ['地震[じしん] は いつ でも *起[お]こり 得[う]る*。', 'Earthquakes can happen at any time.'], ['そんな こと は *あり 得[え]ない*。', 'That\'s impossible.']),
          G('～っこない', 'no way (casual)', 'Verb stem + っこない',
            'Strong casual denial.',
            ['一日[いちにち] で 全部[ぜんぶ] なんて、 *でき っこ ない* よ。', 'There\'s no way we can do it all in one day.'], ['あいつ が 約束[やくそく] を *守[まも]り っこ ない*。', 'There\'s no way that guy will keep his promise.'])
        ],
        note: { t: 'Emergency Japanese', x: 'Japanese TV and phone alerts use <b>～おそれがあります</b> constantly: 津波のおそれ (risk of tsunami), 土砂災害のおそれ (risk of landslides). Recognizing it could keep you safe — follow the announcement and evacuate.' },
        ex: [
          { resp: 'この 商品[しょうひん]、 半額[はんがく] に して もらえません か。', npcEn: 'Could you give me this at half price?', a: '申[もう]し訳[わけ] ございません が、 それ は いたし かねます。', o: ['申[もう]し訳[わけ] ございません が、 それ は し っこ ない です。', 'それ は あり 得[う]る です。'] },
          { fill: 'このまま 放[ほう]って おく と、 大[おお]きな 問題[もんだい] に なり ＿。', a: 'かねない', o: ['かねる', 'がたい'], en: 'If we leave it like this, it could well become a big problem.' }
        ]
      },
      {
        id: 'N2-6', icon: '📝', title: 'The Many Faces of こと', sub: 'ことだ · ことに · ことから · ことなく · ことには',
        goals: ['Give advice with ～ことだ', 'Express emotion with ～ことに', 'Explain origins with ことから'],
        words: ['上達[じょうたつ]|improvement', '驚[おどろ]いた|surprising', '残念[ざんねん] な こと に|regrettably', '名前[なまえ] の 由来[ゆらい]|origin of a name', '休[やす]む こと なく|without resting', '諦[あきら]める|give up', '実際[じっさい] に|actually', '確[たし]かめる|confirm'],
        grammar: [
          G('～ことだ (advice)', 'you should (best thing to do)', 'Dictionary / ない form + ことだ',
            'Advice from experience — sounds like a mentor.',
            ['上手[じょうず] に なりたければ、 毎日[まいにち] *練習[れんしゅう] する こと だ*。', 'If you want to get good, practice every day.'], ['疲[つか]れて いる なら、 *無理[むり] を しない こと だ*。', 'If you\'re tired, don\'t push yourself.']),
          G('～ことに', 'to one\'s (emotion)…', 'Emotion adj (な-adj + な) / た-form + ことに',
            'Frames a statement with your feeling about it.',
            ['*驚[おどろ]いた こと に*、 彼[かれ] は 一人[ひとり] で 全部[ぜんぶ] 終[お]わらせて いた。', 'To my surprise, he had finished it all alone.'], ['*残念[ざんねん] な こと に*、 その 店[みせ] は 閉店[へいてん] して しまった。', 'Regrettably, that shop has closed.']),
          G('～ことから', 'from the fact that (origin / reason)', 'Plain form (N + である) + ことから',
            'Explains the origin of a name or the basis of a judgment.',
            ['富士山[ふじさん] が 見[み]える *こと から*、 この 坂[さか] は 富士見坂[ふじみざか] と 呼[よ]ばれて いる。', 'Because Mt. Fuji is visible from it, this slope is called Fujimi-zaka.'], ['指紋[しもん] が 一致[いっち] した *こと から*、 犯人[はんにん] が わかった。', 'The culprit was identified because the fingerprints matched.']),
          G('～ことなく', 'without (ever) doing', 'Dictionary form + ことなく',
            'Formal "without".',
            ['彼[かれ] は 一日[いちにち] も *休[やす]む こと なく* 働[はたら]き 続[つづ]けた。', 'He kept working without taking a single day off.'], ['*諦[あきら]める こと なく*、 夢[ゆめ] を 追[お]い 続[つづ]けた。', 'She kept chasing her dream without giving up.']),
          G('～ないことには', 'unless (you do X, can\'t…)', 'ない form + ことには + negative',
            'A necessary first step.',
            ['実際[じっさい] に *使[つか]って みない こと に は*、 良[よ]さ は わからない。', 'Unless you actually try it, you won\'t know how good it is.'], ['社長[しゃちょう] が *来[こ]ない こと に は*、 会議[かいぎ] が 始[はじ]められない。', 'We can\'t start the meeting until the president comes.'])
        ],
        note: { t: 'The joy of name origins', x: '<b>～ことから…と呼ばれる</b> is how Japanese explain place names and nicknames — great for guidebooks, museum signs and trivia shows.' },
        ex: [
          { fill: '＿ こと に、 財布[さいふ] が 戻[もど]って きた。', a: 'うれしい', o: ['うれしく', 'うれしかったら'], en: 'To my delight, my wallet came back.' },
          { mc: '"If you want to lose weight, stop eating snacks."', a: 'やせたい なら、 間食[かんしょく] を やめる こと だ。', o: ['やせたい なら、 間食[かんしょく] を やめる こと から だ。', 'やせたい なら、 間食[かんしょく] を やめる こと なく だ。', 'やせたい なら、 間食[かんしょく] を やめ ない こと に は。'] }
        ]
      },
      {
        id: 'N2-7', icon: '💭', title: 'The Many Faces of もの', sub: 'ものがある · ものなら · というものだ · というものではない',
        goals: ['Express being moved by something with ものがある', 'Make bold hypotheticals with ものなら', 'State general truths and challenge assumptions'],
        words: ['感動[かんどう]|being moved', '迫力[はくりょく]|impact, intensity', '戻[もど]れる|can go back', '若[わか]い ころ|one\'s youth', '友情[ゆうじょう]|friendship', '多[おお]ければ いい|the more the better', '常識[じょうしき]|common sense', '一流[いちりゅう]|first-class'],
        grammar: [
          G('～ものがある', 'there is something (moving) about', 'Plain form (な-adj + な) + ものがある',
            'Expresses a strong impression.',
            ['彼[かれ] の 演奏[えんそう] に は 人[ひと] を *感動[かんどう] させる もの が ある*。', 'There\'s something about his playing that moves people.'], ['一人[ひとり] で 海外[かいがい] で 暮[く]らす の は *寂[さび]しい もの が ある*。', 'There\'s something lonely about living abroad alone.']),
          G('～ものなら', 'if (it were possible)…; if you dare', 'Potential form + ものなら (wish) · volitional + ものなら (dare)',
            'An unlikely wish, or a warning about consequences.',
            ['*戻[もど]れる もの なら*、 学生[がくせい] 時代[じだい] に 戻[もど]りたい。', 'If only I could go back, I\'d return to my student days.'], ['遅刻[ちこく] *しよう もの なら*、 先生[せんせい] に すごく 叱[しか]られる。', 'If you dare be late, the teacher will scold you badly.']),
          G('～というものだ', 'that\'s what… is (general truth)', 'Plain form / N + というものだ',
            'States the nature of something with conviction.',
            ['困[こま]った とき に 助[たす]け 合[あ]う の が *友情[ゆうじょう] という もの だ*。', 'Helping each other in hard times — that\'s what friendship is.'], ['一度[いちど] の 失敗[しっぱい] で 諦[あきら]める の は *もったいない という もの だ*。', 'Giving up after one failure is truly a waste.']),
          G('～というものではない / ～ものではない', 'it\'s not (always) the case that / one shouldn\'t', 'Plain form + というものではない · dictionary form + ものではない (social rule)',
            'Challenges an assumption, or states what one shouldn\'t do.',
            ['お金[かね] が あれ ば 幸[しあわ]せ *という もの で は ない*。', 'Having money doesn\'t necessarily make you happy.'], ['人[ひと] の 悪口[わるぐち] を *言[い]う もの で は ない*。', 'One shouldn\'t speak ill of others.']),
          G('～ものだ (deep feeling)', 'how…! / really (emotion)', 'Plain form + ものだ',
            'Deep feeling or wonder.',
            ['時間[じかん] が たつ の は *早[はや]い もの だ*。', 'How quickly time passes.'], ['よく ここ まで *頑張[がんば]った もの だ*。', 'You\'ve really done well to get this far.'])
        ],
        note: { t: 'もの = "the nature of things"', x: 'もの-expressions talk about how things are in general — life, people, time. <b>人生とはそういうものだ</b> ("that\'s just how life is") is a classic, philosophical Japanese line.' },
        ex: [
          { mc: '"Just practicing a lot doesn\'t necessarily make you better."', a: 'たくさん 練習[れんしゅう] すれ ば 上手[じょうず] に なる という もの で は ない。', o: ['たくさん 練習[れんしゅう] すれ ば 上手[じょうず] に なる もの が ある。', 'たくさん 練習[れんしゅう] すれ ば 上手[じょうず] に なる もの なら。', 'たくさん 練習[れんしゅう] すれ ば 上手[じょうず] に なる という もの だ。'] },
          { fill: '休[やす]める もの ＿、 一週間[いっしゅうかん] ぐらい 休[やす]みたい。', a: 'なら', o: ['だ', 'が ある'], en: 'If only I could take time off, I\'d like about a week.' }
        ]
      },
      {
        id: 'N2-8', icon: '➕', title: 'Not Only… But Also', sub: 'ばかりか · 上に · はもちろん · はもとより · に加えて',
        goals: ['Add information with escalating force', 'Say "not to mention" naturally', 'Build stronger arguments'],
        words: ['被害[ひがい]|damage', '景色[けしき]|scenery', 'サービス|service', '値段[ねだん]|price', '観光客[かんこうきゃく]|tourists', '地元[じもと]|local', '経験[けいけん]|experience', '能力[のうりょく]|ability'],
        grammar: [
          G('～ばかりか', 'not only (but even)', 'Plain form (な-adj + な) / N + ばかりか + も/まで/さえ',
            'Adds something more surprising.',
            ['彼[かれ] は 謝[あやま]らない *ばかり か*、 逆[ぎゃく] に 怒[おこ]り 出[だ]した。', 'Not only did he not apologize, he even got angry.'], ['この 店[みせ] は 安[やす]い *ばかり か*、 味[あじ] も 一流[いちりゅう] だ。', 'This shop is not only cheap — the taste is first-class.']),
          G('～上[うえ]に', 'on top of, besides', 'Plain form (な-adj + な, N + の) + 上に',
            'Adds a fact in the same direction (both good or both bad).',
            ['この 部屋[へや] は 広[ひろ]い *上[うえ] に*、 家賃[やちん] も 安[やす]い。', 'This apartment is spacious, and on top of that, cheap.'], ['道[みち] に 迷[まよ]った *上[うえ] に*、 雨[あめ] まで 降[ふ]って きた。', 'I got lost, and on top of that it started raining.']),
          G('～はもちろん', 'not to mention, of course', 'N + はもちろん',
            'X goes without saying; Y too.',
            ['この 公園[こうえん] は 春[はる] *は もちろん*、 秋[あき] も きれい だ。', 'This park is beautiful in spring, of course, and in autumn too.'], ['日本語[にほんご] *は もちろん*、 中国語[ちゅうごくご] も 話[はな]せる。', 'She speaks Japanese, of course, and also Chinese.']),
          G('～はもとより', 'not to mention (formal)', 'N + はもとより',
            'Formal version of はもちろん.',
            ['この 祭[まつ]り に は 地元[じもと] の 人[ひと] *は もとより*、 海外[かいがい] から の 観光客[かんこうきゃく] も 訪[おとず]れる。', 'Not only locals but also tourists from abroad visit this festival.'], ['経験[けいけん] *は もとより*、 人柄[ひとがら] も 重視[じゅうし] します。', 'We value character as well as experience, of course.']),
          G('～に加[くわ]えて', 'in addition to', 'N + に加えて',
            'Formal addition.',
            ['給料[きゅうりょう] *に 加[くわ]えて*、 交通費[こうつうひ] も 支給[しきゅう] されます。', 'In addition to salary, transportation costs are paid.'], ['大雨[おおあめ] *に 加[くわ]えて*、 強風[きょうふう] に も 注意[ちゅうい] して ください。', 'In addition to heavy rain, please watch out for strong winds.'])
        ],
        dialog: {
          title: 'Recommending a ryokan', lines: [
            ['Ken', 'あの 旅館[りょかん]、 どう だった？', 'How was that ryokan?'],
            ['You', '最高[さいこう] だった よ。 温泉[おんせん] は もちろん、 料理[りょうり] も すごく おいしかった。', 'Amazing. The hot springs of course, but the food was also delicious.'],
            ['Ken', 'へえ。 高[たか]かった？', 'Oh. Was it expensive?'],
            ['You', 'それ が、 安[やす]い ばかり か、 駅[えき] まで 送迎[そうげい] まで して くれた ん だ。', 'Actually, not only was it cheap, they even drove us to and from the station.']
          ]
        },
        note: { t: 'Persuasive Japanese', x: 'Stacking points with <b>～上に</b>, <b>～ばかりか</b> and <b>～はもちろん</b> is how Japanese make strong recommendations and complaints. Try them when writing reviews or proposals.' },
        ex: [
          { fill: 'この アプリ は 便利[べんり] な ＿、 無料[むりょう] で 使[つか]える。', a: '上[うえ] に', o: ['もの の', 'から と いって'], en: 'This app is convenient, and on top of that, free.' },
          { mc: '"Not only adults but even children enjoy it."', a: '大人[おとな] は もちろん、 子[こ]ども も 楽[たの]しめる。', o: ['大人[おとな] に 加[くわ]えて、 子[こ]ども が 楽[たの]しめない。', '大人[おとな] の 上[うえ] に、 子[こ]ども を 楽[たの]しむ。', '大人[おとな] ばかり か、 子[こ]ども は 楽[たの]しめない。'] }
        ]
      },
      {
        id: 'N2-9', icon: '🚧', title: 'Conditions & Limits', sub: '次第で · 限り · に限らず · に限って · 以上は · からには',
        goals: ['Say outcomes depend on something', 'Express limits and exceptions', 'State firm resolve with からには'],
        words: ['結果[けっか]|result', '努力[どりょく] 次第[しだい]|depending on effort', '在庫[ざいこ]|stock', '先着[せんちゃく]|first-come', '限定[げんてい]|limited', '責任[せきにん]|responsibility', '約束[やくそく]|promise', '最後[さいご] まで|until the end'],
        grammar: [
          G('～次第で / ～次第だ', 'depending on / depends on', 'N + 次第で / 次第だ',
            'The outcome is determined by X.',
            ['結果[けっか] は あなた の 努力[どりょく] *次第[しだい] です*。', 'The result depends on your effort.'], ['天気[てんき] *次第[しだい] で*、 予定[よてい] を 変[か]える かもしれない。', 'Depending on the weather, we might change the plan.']),
          G('～限[かぎ]り', 'as long as / as far as', 'Plain form / N の + 限り',
            'A limit or condition.',
            ['体[からだ] が 元気[げんき] な *限[かぎ]り*、 働[はたら]き 続[つづ]けたい。', 'As long as I\'m healthy, I want to keep working.'], ['わたし の 知[し]る *限[かぎ]り*、 彼[かれ] は 来[こ]ない。', 'As far as I know, he isn\'t coming.']),
          G('～に限[かぎ]らず', 'not limited to', 'N + に限らず',
            'Broadens the scope.',
            ['この 映画[えいが] は 子[こ]ども *に 限[かぎ]らず*、 大人[おとな] に も 人気[にんき] が ある。', 'This movie is popular not only with children but adults too.'], ['週末[しゅうまつ] *に 限[かぎ]らず*、 この 店[みせ] は いつも 混[こ]んで いる。', 'Not just on weekends — this shop is always crowded.']),
          G('～に限[かぎ]り / ～に限[かぎ]って', 'only (limited to) / of all times, just when', 'N + に限り (only) · N + に限って (ironically)',
            'に限り = limited to; に限って = the one time something happens unexpectedly.',
            ['先着[せんちゃく] 100名[ひゃくめい] *に 限[かぎ]り*、 プレゼント を 差[さ]し上[あ]げます。', 'Limited to the first 100 people, we\'ll give a gift.'], ['傘[かさ] を 持[も]って こなかった 日[ひ] *に 限[かぎ]って*、 雨[あめ] が 降[ふ]る。', 'It always rains on the very day I don\'t bring an umbrella.']),
          G('～以上[いじょう](は) / ～からには', 'now that, since (so must)', 'Plain form + 以上(は) / からには',
            'Since a situation exists, a certain resolve or duty follows.',
            ['引[ひ]き受[う]けた *以上[いじょう] は*、 最後[さいご] まで 責任[せきにん] を 持[も]つ。', 'Now that I\'ve taken it on, I\'ll take responsibility to the end.'], ['日本[にほん] に 来[き]た *から に は*、 日本語[にほんご] を ペラペラ に なりたい。', 'Since I\'ve come to Japan, I want to become fluent.'])
        ],
        dialog: {
          title: 'The big project', lines: [
            ['Boss', 'この プロジェクト、 君[きみ] に 任[まか]せたい ん だ が。', 'I\'d like to put you in charge of this project.'],
            ['You', 'はい。 引[ひ]き受[う]ける から に は、 全力[ぜんりょく] で 頑張[がんば]ります。', 'Yes. Now that I\'m taking it on, I\'ll give it my all.'],
            ['Boss', '成功[せいこう] する か どう か は チーム の 協力[きょうりょく] 次第[しだい] だ。', 'Whether it succeeds depends on the team\'s cooperation.'],
            ['You', 'わたし の 知[し]る 限[かぎ]り、 みんな やる気[き] が あります から、 大丈夫[だいじょうぶ] です。', 'As far as I know, everyone is motivated, so it\'ll be fine.']
          ]
        },
        note: { t: 'Murphy\'s law, Japanese style', x: '<b>～に限って</b> captures that "of course it happens today of all days" feeling: 急いでいる時に限って電車が遅れる ("the train is late precisely when I\'m in a hurry").' },
        ex: [
          { fill: '試合[しあい] を する ＿、 絶対[ぜったい] 勝[か]ちたい。', a: 'から に は', o: ['に 限[かぎ]らず', '次第[しだい] で'], en: 'Since we\'re playing the match, I definitely want to win.' },
          { mc: '"This offer is limited to today."', a: '本日[ほんじつ] に 限[かぎ]り 有効[ゆうこう] です。', o: ['本日[ほんじつ] に 限[かぎ]らず 有効[ゆうこう] です。', '本日[ほんじつ] 次第[しだい] 有効[ゆうこう] です。', '本日[ほんじつ] の 以上[いじょう] は 有効[ゆうこう] です。'] }
        ]
      },
      {
        id: 'N2-10', icon: '🎤', title: 'Formal Occasions', sub: 'に際して · にあたって · において · につき · に伴って',
        goals: ['Use ceremony and announcement language', 'Read official notices', 'Describe changes that come with something'],
        words: ['入社[にゅうしゃ]|joining a company', '式典[しきてん]|ceremony', '開催[かいさい]|holding (an event)', '工事中[こうじちゅう]|under construction', '使用[しよう] 禁止[きんし]|use prohibited', '人口[じんこう] 増加[ぞうか]|population increase', '施設[しせつ]|facility', '契約[けいやく]|contract'],
        grammar: [
          G('～に際[さい]して', 'on the occasion of', 'N / dictionary form + に際して',
            'At an important, often one-time occasion.',
            ['ご入学[にゅうがく] *に 際[さい]して*、 心[こころ] より お祝[いわ]い 申[もう]し上[あ]げます。', 'On the occasion of your enrollment, we offer our heartfelt congratulations.'], ['出国[しゅっこく] *に 際[さい]して*、 パスポート を 確認[かくにん] します。', 'We check passports upon departure from the country.']),
          G('～にあたって', 'at the time of, when (starting)', 'N / dictionary form + にあたって',
            'On the occasion of starting something important.',
            ['新[あたら]しい 生活[せいかつ] を 始[はじ]める *に あたって*、 部屋[へや] を 片付[かたづ]けた。', 'When starting my new life, I tidied my room.'], ['契約[けいやく] *に あたり*、 以下[いか] の 点[てん] に ご注意[ちゅうい] ください。', 'When signing the contract, please note the following points.']),
          G('～において / ～における', 'in, at (formal location / field)', 'N + において / における + N',
            'Formal "in / at".',
            ['式典[しきてん] は 市民[しみん] ホール *に おいて* 行[おこな]われます。', 'The ceremony will be held at the City Hall.'], ['現代[げんだい] 社会[しゃかい] *に おける* 問題[もんだい]', 'problems in modern society']),
          G('～につき', 'due to (notices)', 'N + につき',
            'A compact "because" on signs and notices.',
            ['工事中[こうじちゅう] *に つき*、 立入[たちいり] 禁止[きんし]。', 'Under construction — no entry.'], ['本日[ほんじつ] は 祝日[しゅくじつ] *に つき*、 休業[きゅうぎょう] いたします。', 'We are closed today due to the national holiday.']),
          G('～に伴[ともな]って', 'along with, as a result of', 'N / dictionary form + に伴って / に伴う + N',
            'A change that accompanies another change.',
            ['人口[じんこう] の 増加[ぞうか] *に 伴[ともな]って*、 住宅[じゅうたく] が 不足[ふそく] して いる。', 'Along with population growth, there\'s a housing shortage.'], ['台風[たいふう] *に 伴[ともな]う* 大雨[おおあめ] に 警戒[けいかい] して ください。', 'Please be on alert for heavy rain caused by the typhoon.'])
        ],
        reading: {
          title: 'お知[し]らせ: 図書館[としょかん] の 改装[かいそう] に ついて', text: [
            '市立[しりつ] 図書館[としょかん] は、 建物[たてもの] の 老朽化[ろうきゅうか] に 伴[ともな]い、 来年[らいねん] 4月[しがつ] から 改装[かいそう] 工事[こうじ] を 行[おこな]います。',
            '工事[こうじ] 期間中[きかんちゅう] は 休館[きゅうかん] と なります が、 駅前[えきまえ] の 市民[しみん] センター に おいて 臨時[りんじ] の 貸出[かしだし] 窓口[まどぐち] を 開設[かいせつ] します。',
            '休館[きゅうかん] に 先立[さきだ]ち、 3月[さんがつ] 中[ちゅう] は 一人[ひとり] 20冊[にじゅっさつ] まで 借[か]りる こと が できます。 なお、 返却[へんきゃく] は 工事[こうじ] 終了[しゅうりょう] 後[ご] でも かまいません。'
          ],
          en: ['Due to the aging of the building, the City Library will undergo renovation work from April next year.', 'The library will be closed during the work, but a temporary lending counter will open at the Civic Center in front of the station.', 'Ahead of the closure, during March each person may borrow up to 20 books. Returns may be made after the work is finished.'],
          q: [
            ['Why is the library being renovated?', 'Because the building is old', 'Because it\'s too small', 'Because of an earthquake', 'Because the city got new funding'],
            ['Where can people borrow books during the work?', 'At the Civic Center by the station', 'At a school library', 'Nowhere — lending stops', 'Online only'],
            ['What is special about March?', 'You can borrow up to 20 books', 'The library is closed', 'Returns are not accepted', 'The work starts']
          ]
        },
        note: { t: 'Signs and notices', x: 'Official notices are a world of their own: <b>～につき</b>, <b>～のため</b>, <b>なお</b> ("additionally"), <b>ご了承ください</b> ("please understand"). Reading station and city-hall notices is excellent N2 practice.' },
        ex: [
          { fill: '本日[ほんじつ] は 定休日[ていきゅうび] ＿、 お休[やす]み を いただいて おります。', a: 'に つき', o: ['に あたって', 'に 際[さい]して'], en: 'We are closed today as it\'s our regular holiday.' },
          { mc: '"The conference will be held in Tokyo."', a: '会議[かいぎ] は 東京[とうきょう] に おいて 開催[かいさい] される。', o: ['会議[かいぎ] は 東京[とうきょう] に つき 開催[かいさい] される。', '会議[かいぎ] は 東京[とうきょう] に 伴[ともな]って 開催[かいさい] される。', '会議[かいぎ] は 東京[とうきょう] に 際[さい]して 開催[かいさい] される。'] }
        ],
        convo: 'n2-business-meeting'
      },
      {
        id: 'N2-11', icon: '🏅', title: 'Evaluation', sub: 'だけあって · だけに · にしては · わりに · としては',
        goals: ['Praise things "as expected" with だけあって', 'Say "considering…" with にしては and わりに', 'Evaluate fairly and diplomatically'],
        words: ['さすが|as expected', 'プロ|professional', '有名店[ゆうめいてん]|famous restaurant', '初心者[しょしんしゃ]|beginner', '値段[ねだん] の わりに|for the price', '期待[きたい]|expectation', '新人[しんじん]|newcomer', '出来[でき]|quality of work'],
        grammar: [
          G('～だけあって / ～だけのことはある', 'as expected of, no wonder', 'Plain form (な-adj + な) / N + だけあって',
            'Praises something that lives up to its reputation.',
            ['さすが 有名店[ゆうめいてん] *だけ あって*、 本当[ほんとう] に おいしい。', 'As expected of a famous restaurant, it\'s really delicious.'], ['10年[じゅうねん] 住[す]んで いた *だけ の こと は ある*。 日本語[にほんご] が 完璧[かんぺき] だ。', 'No wonder — she lived there ten years. Her Japanese is perfect.']),
          G('～だけに', 'precisely because (so all the more)', 'Plain form / N + だけに',
            'Because of X, the result is all the more so.',
            ['期待[きたい] して いた *だけ に*、 がっかり した。', 'Because I\'d been looking forward to it, I was all the more disappointed.'], ['ベテラン *だけ に*、 落[お]ち着[つ]いて いる。', 'Being a veteran, he\'s naturally calm.']),
          G('～にしては', 'for (considering, unexpectedly)', 'Plain form / N + にしては',
            'The result differs from what you\'d expect of X.',
            ['初心者[しょしんしゃ] *に して は*、 上手[じょうず] です ね。', 'You\'re good for a beginner.'], ['10月[じゅうがつ] *に して は* 暑[あつ]い。', 'It\'s hot for October.']),
          G('～わりに(は)', 'considering, for (proportion)', 'Plain form (な-adj + な, N + の) + わりに',
            'Outcome doesn\'t match what you\'d expect given X.',
            ['この レストラン は 値段[ねだん] *の わり に*、 量[りょう] が 多[おお]い。', 'This restaurant gives large portions for the price.'], ['よく 食[た]べる *わり に*、 太[ふと]らない。', 'She doesn\'t gain weight considering how much she eats.']),
          G('～としては', 'for (as a member of a category / position)', 'N + としては',
            'Evaluates from a category or position.',
            ['日本人[にほんじん] *と して は*、 背[せ] が 高[たか]い ほう だ。', 'He\'s on the tall side for a Japanese person.'], ['会社[かいしゃ] *と して は*、 その 提案[ていあん] は 受[う]け入[い]れられない。', 'As a company, we cannot accept that proposal.'])
        ],
        dialog: {
          title: 'The new hire', lines: [
            ['Sato', '新人[しんじん] の 鈴木[すずき] さん、 どう？', 'How\'s the new hire, Suzuki?'],
            ['You', '新人[しんじん] に して は、 仕事[しごと] が すごく 速[はや]い です よ。', 'For a newcomer, she works really fast.'],
            ['Sato', '前[まえ] の 会社[かいしゃ] で 5年[ごねん] やって いた だけ あって、 さすが だ ね。', 'As expected from someone who did it for five years at her last company.'],
            ['You', 'ええ。 若[わか]い わり に 落[お]ち着[つ]いて いて、 頼[たよ]れます。', 'Yes. She\'s calm for her age, very reliable.']
          ]
        },
        note: { t: 'さすが!', x: '<b>さすが</b> ("as expected of you!") is one of the warmest compliments in Japanese — it praises someone for living up to their abilities. Pair it with だけあって for full effect: さすがプロだけあって….' },
        ex: [
          { fill: '外国人[がいこくじん] ＿、 漢字[かんじ] を よく 知[し]って いる。', a: 'に して は', o: ['だけ あって', 'から に は'], en: 'He knows a lot of kanji for a foreigner.' },
          { mc: '"As expected of a five-star hotel, the service is excellent."', a: '五[いつ]つ星[ぼし] ホテル だけ あって、 サービス が すばらしい。', o: ['五[いつ]つ星[ぼし] ホテル に して は、 サービス が すばらしい。', '五[いつ]つ星[ぼし] ホテル の わり に、 サービス が 悪[わる]い。', '五[いつ]つ星[ぼし] ホテル と して は、 サービス が すばらしく ない。'] }
        ]
      },
      {
        id: 'N2-12', icon: '🌀', title: 'Far From It', sub: 'どころか · どころではない · ところを · ところへ · たところで',
        goals: ['Say "far from…, actually the opposite"', 'Say you\'re in no state for something', 'Use ところ in advanced patterns'],
        words: ['休[やす]む どころ か|far from resting', '花見[はなみ]|cherry-blossom viewing', '忙[いそが]しい ところ|while busy', '出[で]かけよう と した ところ へ|just as I was leaving', '謝[あやま]った ところ で|even if I apologize', '許[ゆる]して もらえない|won\'t be forgiven', '貯金[ちょきん]|savings', '借金[しゃっきん]|debt'],
        grammar: [
          G('～どころか', 'far from (on the contrary)', 'Plain form (な-adj/N: no だ) + どころか',
            'The reality is the opposite or far beyond.',
            ['貯金[ちょきん] *どころ か*、 借金[しゃっきん] が ある。', 'Far from having savings, I have debt.'], ['雨[あめ] は 止[や]む *どころ か*、 ますます 強[つよ]く なった。', 'Far from stopping, the rain got even heavier.']),
          G('～どころではない', 'in no state for, not the time for', 'N / dictionary form + どころではない',
            'Circumstances make something impossible.',
            ['仕事[しごと] が 忙[いそが]しくて、 *花見[はなみ] どころ で は ない*。', 'I\'m so busy with work, hanami is out of the question.'], ['熱[ねつ] が あって、 *勉強[べんきょう] どころ じゃ ない*。', 'I have a fever — I\'m in no state to study.']),
          G('～ところを', 'while (you are …) — polite apology/thanks', 'Plain form / N の + ところを',
            'Acknowledges someone\'s situation, usually in thanks or apology.',
            ['お忙[いそが]しい *ところ を*、 ありがとう ございました。', 'Thank you for taking the time when you\'re so busy.'], ['お休[やす]み の *ところ を* 申[もう]し訳[わけ] ありません。', 'I\'m sorry to disturb you on your day off.']),
          G('～ところへ / ～ところに', 'just when (someone/something came)', 'Plain form + ところへ / ところに',
            'An interruption at a specific moment.',
            ['出[で]かけよう と して いた *ところ へ*、 友[とも]だち が 来[き]た。', 'Just as I was about to go out, a friend came over.'], ['ちょうど 話[はな]して いた *ところ に*、 本人[ほんにん] が 現[あらわ]れた。', 'Just as we were talking about him, the man himself appeared.']),
          G('～たところで', 'even if (it\'s useless)', 'た-form + ところで',
            'Doing X won\'t change anything.',
            ['今[いま] から *急[いそ]いだ ところ で*、 間[ま]に 合[あ]わない。', 'Even if we hurry now, we won\'t make it.'], ['いくら *謝[あやま]った ところ で*、 許[ゆる]して もらえない だろう。', 'No matter how much I apologize, I probably won\'t be forgiven.'])
        ],
        dialog: {
          title: 'Holiday plans?', lines: [
            ['Yui', '連休[れんきゅう]、 どこ か 行[い]く？', 'Going anywhere for the long weekend?'],
            ['You', 'それ どころ じゃ ない よ。 締[し]め切[き]り が 三[みっ]つ も ある ん だ。', 'I\'m in no state for that. I have three deadlines.'],
            ['Yui', 'え、 休[やす]む どころ か、 仕事[しごと] ばかり だ ね。', 'Oh, far from resting, it\'s all work.'],
            ['You', 'うん… 今[いま] から 文句[もんく] を 言[い]った ところ で、 仕事[しごと] は 減[へ]らない し ね。', 'Yeah… complaining now won\'t make the work go away.']
          ]
        },
        note: { t: 'お忙しいところ', x: '<b>お忙しいところ（を）すみません</b> and <b>お忙しいところありがとうございました</b> are must-know business phrases — use them when asking someone for time and when thanking them afterward.' },
        ex: [
          { resp: '明日[あした] の 飲[の]み会[かい]、 来[く]る？', npcEn: 'Coming to drinks tomorrow?', a: '試験[しけん] 前[まえ] で、 それ どころ じゃ ない ん だ。', o: ['試験[しけん] 前[まえ] どころ か、 行[い]く。', '試験[しけん] 前[まえ] の ところ を、 行[い]く。'] },
          { fill: 'お忙[いそが]しい ＿、 お時間[じかん] を いただき ありがとう ございます。', a: 'ところ を', o: ['どころ か', 'ところ で'], en: 'Thank you for your time despite being so busy.' }
        ]
      },
      {
        id: 'N2-13', icon: '🎭', title: 'As If & In an Instant', sub: 'かのように · かと思うと · か～ないかのうちに',
        goals: ['Describe appearances that aren\'t reality', 'Narrate sudden changes', 'Describe near-simultaneous events'],
        words: ['まるで|just like', '知[し]らない かのよう に|as if not knowing', '泣[な]き出[だ]す|burst into tears', '晴[は]れた か と 思[おも]う と|no sooner had it cleared up', '終[お]わる か 終[お]わらない か のうち に|the instant it ended', '飛[と]び出[だ]す|rush out', '眠[ねむ]る|fall asleep', '布団[ふとん]|futon'],
        grammar: [
          G('～かのように', 'as if (though it isn\'t)', 'Plain form + かのように / かのような + N',
            'Behaves like something is true when it isn\'t.',
            ['彼[かれ] は 何[なに] も *知[し]らない か の よう に* 振[ふ]る舞[ま]った。', 'He acted as if he knew nothing.'], ['まるで 夢[ゆめ] を 見[み]て いる *か の よう な* 景色[けしき] だった。', 'The view was as if I were dreaming.']),
          G('～かと思[おも]うと / ～かと思[おも]ったら', 'no sooner … than (sudden change)', 'た-form + かと思うと',
            'Narrates a quick, surprising change (about others, not yourself).',
            ['空[そら] が 晴[は]れた *か と 思[おも]う と*、 また 雨[あめ] が 降[ふ]り出[だ]した。', 'No sooner had the sky cleared than it started raining again.'], ['赤[あか]ちゃん は 笑[わら]った *か と 思[おも]ったら*、 急[きゅう] に 泣[な]き出[だ]した。', 'The baby laughed, then suddenly burst into tears.']),
          G('～か～ないかのうちに', 'the instant, just as', 'Dictionary form + か + ない form + かのうちに',
            'Two events almost simultaneous.',
            ['チャイム が *鳴[な]る か 鳴[な]らない か の うち に*、 学生[がくせい] たち は 教室[きょうしつ] を 飛[と]び出[だ]した。', 'The instant the bell rang, the students rushed out of the classroom.'], ['布団[ふとん] に *入[はい]る か 入[はい]らない か の うち に*、 眠[ねむ]って しまった。', 'I fell asleep the moment I got into my futon.']),
          G('～ように (likeness)', 'like, as (comparison / example)', 'Plain form / N の + ように / ような',
            'Shows similarity or gives an example.',
            ['先生[せんせい] が 言[い]った *よう に*、 準備[じゅんび] は 大切[たいせつ] だ。', 'As the teacher said, preparation is important.'], ['彼女[かのじょ] は 花[はな] *の よう な* 人[ひと] だ。', 'She\'s a person like a flower.'])
        ],
        note: { t: 'Literary style', x: '<b>かのように</b> and <b>かと思うと</b> are favorites in novels and essays — they paint vivid pictures. Spotting them helps you enjoy Japanese literature at the N2 level.' },
        ex: [
          { fill: '彼[かれ] は 何事[なにごと] も なかった ＿ 笑[わら]って いた。', a: 'か の よう に', o: ['か と 思[おも]うと', 'どころ か'], en: 'He was laughing as if nothing had happened.' },
          { mc: '"No sooner had he come home than he went out again."', a: '彼[かれ] は 帰[かえ]って きた か と 思[おも]うと、 また 出[で]かけた。', o: ['彼[かれ] は 帰[かえ]って きた か の よう に、 また 出[で]かけた。', '彼[かれ] は 帰[かえ]って くる どころ か、 また 出[で]かけた。', '彼[かれ] は 帰[かえ]って きた ところ で、 また 出[で]かけた。'] }
        ]
      },
      {
        id: 'N2-14', icon: '🔁', title: 'Ongoing Processes', sub: 'つつ · つつある · 抜く · 切る · かける · っぱなし',
        goals: ['Describe ongoing trends with つつある', 'Say "do completely" with 抜く and 切る', 'Describe unfinished or left-on states'],
        words: ['回復[かいふく]|recovery', '景気[けいき]|economy', '最後[さいご] まで 走[はし]り抜[ぬ]く|run to the very end', '使[つか]い切[き]る|use up', '読[よ]みかけ|half-read', '電気[でんき] を つけっぱなし|leaving the lights on', '温暖化[おんだんか]|global warming', '進[すす]む|advance, progress'],
        grammar: [
          G('～つつ(も)', 'while (doing); although', 'Verb stem + つつ (while) / つつも (although)',
            'Formal "while"; つつも = even though.',
            ['景色[けしき] を 楽[たの]しみ *つつ*、 散歩[さんぽ] した。', 'I took a walk while enjoying the scenery.'], ['体[からだ] に 悪[わる]い と 知[し]り *つつ も*、 タバコ を やめられない。', 'Although I know it\'s bad for me, I can\'t quit smoking.']),
          G('～つつある', 'be in the process of', 'Verb stem + つつある',
            'A gradual ongoing change (formal / news).',
            ['地球[ちきゅう] の 温暖化[おんだんか] は 確実[かくじつ] に *進[すす]み つつ ある*。', 'Global warming is steadily progressing.'], ['景気[けいき] は *回復[かいふく] し つつ ある*。', 'The economy is recovering.']),
          G('～抜[ぬ]く', 'do to the very end', 'Verb stem + 抜く',
            'Do thoroughly or see through to completion despite difficulty.',
            ['マラソン を 最後[さいご] まで *走[はし]り 抜[ぬ]いた*。', 'I ran the marathon all the way to the end.'], ['よく *考[かんが]え 抜[ぬ]いた* 結果[けっか]、 転職[てんしょく] する こと に した。', 'After thinking it through thoroughly, I decided to change jobs.']),
          G('～切[き]る / ～切[き]れない', 'do completely / can\'t completely', 'Verb stem + 切る / 切れない',
            'Totally finished, or too much to finish.',
            ['一日[いちにち] で 小説[しょうせつ] を *読[よ]み 切[き]った*。', 'I read the whole novel in one day.'], ['こんな に たくさん の 料理[りょうり]、 *食[た]べ 切[き]れない*。', 'I can\'t finish this much food.']),
          G('～かける / ～かけの', 'half-done, about to', 'Verb stem + かける / かけの + N',
            'Started but not finished.',
            ['*読[よ]み かけ の* 本[ほん] が 机[つくえ] の 上[うえ] に ある。', 'There\'s a half-read book on the desk.'], ['何[なに] か *言[い]い かけて*、 彼[かれ] は 黙[だま]った。', 'He started to say something, then fell silent.']),
          G('～っぱなし', 'left (on), continuously', 'Verb stem + っぱなし',
            'Left in a state (often carelessly) or continuing without break.',
            ['電気[でんき] を *つけ っぱなし* に して 出[で]かけて しまった。', 'I went out and left the lights on.'], ['今日[きょう] は 一日[いちにち] 中[じゅう] *立[た]ち っぱなし* だった。', 'I was on my feet all day today.'])
        ],
        dialog: {
          title: 'Marathon day', lines: [
            ['Ken', 'マラソン、 完走[かんそう] した ん だって？', 'I heard you finished the marathon?'],
            ['You', 'うん！ 途中[とちゅう] で 何度[なんど] も 諦[あきら]め かけた けど、 最後[さいご] まで 走[はし]り 抜[ぬ]いた よ。', 'Yeah! I almost gave up several times, but I ran it to the end.'],
            ['Ken', 'すごい！ 足[あし] は 大丈夫[だいじょうぶ]？', 'Amazing! Are your legs OK?'],
            ['You', '回復[かいふく] し つつ ある けど、 階段[かいだん] は まだ つらい…', 'They\'re recovering, but stairs are still tough…']
          ]
        },
        note: { t: 'Compound verbs', x: 'Japanese builds rich meanings by stacking verbs: 読み切る (read through), 使い切る (use up), 走り抜く (run to the end), 言いかける (start to say). Learn them as words — they\'re everywhere in real Japanese.' },
        ex: [
          { fill: '窓[まど] を 開[あ]け ＿ に して 寝[ね]て しまった。', a: 'っぱなし', o: ['つつ', '切[き]り'], en: 'I fell asleep with the window left open.' },
          { mc: '"The number of foreign tourists is increasing."', a: '外国人[がいこくじん] 観光客[かんこうきゃく] が 増[ふ]え つつ ある。', o: ['外国人[がいこくじん] 観光客[かんこうきゃく] が 増[ふ]え っぱなし だ。', '外国人[がいこくじん] 観光客[かんこうきゃく] が 増[ふ]え 抜[ぬ]いた。', '外国人[がいこくじん] 観光客[かんこうきゃく] が 増[ふ]え かけ の だ。'] }
        ]
      },
      {
        id: 'N2-15', icon: '🤔', title: 'Hypotheses & Judgments', sub: 'としたら · というより · といえば · に違いない · に決まっている',
        goals: ['Build hypotheses with としたら / とすれば', 'Rephrase precisely with というより', 'Express certainty with に違いない and に決まっている'],
        words: ['犯人[はんにん]|culprit', '証拠[しょうこ]|evidence', '冷静[れいせい]|calm', '性格[せいかく]|personality', '京都[きょうと] と いえば|speaking of Kyoto', '本当[ほんとう] だ と したら|if it\'s true', '負[ま]ける|lose', '有利[ゆうり]|advantageous'],
        grammar: [
          G('～としたら / ～とすれば', 'if we suppose that', 'Plain form + としたら / とすれば',
            'A hypothesis, often uncertain or unlikely.',
            ['その 話[はなし] が *本当[ほんとう] だ と したら*、 大変[たいへん] な こと だ。', 'If that story is true, it\'s serious.'], ['もし 宇宙[うちゅう] に *行[い]ける と すれ ば*、 何[なに] を 持[も]って いく？', 'If you could go to space, what would you take?']),
          G('～というより', 'rather than (more accurately)', 'Plain form / N + というより',
            'Refines a description.',
            ['彼[かれ] は 冷静[れいせい] *という より*、 冷[つめ]たい 人[ひと] だ。', 'He\'s cold rather than calm.'], ['今日[きょう] は 暖[あたた]かい *という より*、 暑[あつ]い くらい だ。', 'Today is not so much warm as hot.']),
          G('～といえば / ～というと', 'speaking of', 'N + といえば / というと',
            'Brings up an associated topic.',
            ['京都[きょうと] *と いえ ば*、 やっぱり お寺[てら] です ね。', 'Speaking of Kyoto, it has to be temples.'], ['夏[なつ] *と いう と*、 花火[はなび] を 思[おも]い出[だ]す。', 'When I think of summer, fireworks come to mind.']),
          G('～に違[ちが]いない', 'must be, surely', 'Plain form (な-adj/N: no だ) + に違いない',
            'Strong conviction based on reasoning (written / formal).',
            ['電気[でんき] が ついて いる。 彼[かれ] は 家[いえ] に いる *に 違[ちが]いない*。', 'The light is on. He must be home.'], ['この 証拠[しょうこ] から 見[み]て、 彼[かれ] が 犯人[はんにん] *に 違[ちが]いない*。', 'Judging from this evidence, he must be the culprit.']),
          G('～に決[き]まっている', 'is bound to, obviously', 'Plain form (な-adj/N: no だ) + に決まっている',
            'Strong, often subjective certainty (spoken).',
            ['そんな に 食[た]べたら、 お腹[なか] が 痛[いた]く *なる に 決[き]まって いる* よ。', 'If you eat that much, you\'re bound to get a stomachache.'], ['プロ と 戦[たたか]ったら、 *負[ま]ける に 決[き]まって る*。', 'If we play against pros, we\'re obviously going to lose.'])
        ],
        dialog: {
          title: 'A mystery at the office', lines: [
            ['Sato', '冷蔵庫[れいぞうこ] の ケーキ、 なくなって る！', 'The cake in the fridge is gone!'],
            ['You', 'クリーム が 部長[ぶちょう] の 机[つくえ] に ついて いる。 部長[ぶちょう] に 違[ちが]いない です ね。', 'There\'s cream on the manager\'s desk. It must have been him.'],
            ['Sato', '部長[ぶちょう] と いえ ば、 大[だい]の 甘党[あまとう] だ から ね。', 'Speaking of the manager, he does have a huge sweet tooth.'],
            ['You', '本人[ほんにん] に 聞[き]いたら、 知[し]らない って 言[い]う に 決[き]まって ます けど ね。', 'If we ask him, he\'ll obviously say he knows nothing.']
          ]
        },
        note: { t: 'Certainty scale', x: 'From weakest to strongest: かもしれない (maybe) → だろう (probably) → はずだ (should be) → に違いない (must be) → に決まっている (obviously, no doubt). Choose carefully — strong certainty can sound arrogant in meetings.' },
        ex: [
          { fill: 'あの 店[みせ] は いつも 行列[ぎょうれつ] だ。 おいしい ＿。', a: 'に 違[ちが]いない', o: ['と したら', 'と いえ ば'], en: 'That shop always has a line. It must be delicious.' },
          { mc: '"He\'s more of a friend than a teacher."', a: '彼[かれ] は 先生[せんせい] という より 友[とも]だち だ。', o: ['彼[かれ] は 先生[せんせい] と いえ ば 友[とも]だち だ。', '彼[かれ] は 先生[せんせい] と したら 友[とも]だち だ。', '彼[かれ] は 先生[せんせい] に 違[ちが]いない 友[とも]だち だ。'] }
        ],
        convo: 'n2-debate'
      },
      {
        id: 'N2-16', icon: '📚', title: 'N2 Review: Society & Opinion', sub: 'Reading & review',
        goals: ['Read an editorial-style text', 'Review N2 connectors in context', 'Get ready for the N2 mock exam'],
        words: ['高齢化[こうれいか]|population aging', '労働力[ろうどうりょく]|workforce', '不足[ふそく]|shortage', '受[う]け入[い]れ|acceptance', '共生[きょうせい]|coexistence', '制度[せいど]|system', '課題[かだい]|challenge', '多様性[たようせい]|diversity'],
        grammar: [
          G('Review: N2 essentials', 'basis, range, concession, emotion, risk, evaluation, hypothesis', '',
            'You\'ve covered the core N2 grammar. Read the editorial below, then test yourself with the <b>N2 mock exam</b> and keep learning N2 words and kanji.',
            ['少子[しょうし] 高齢化[こうれいか] *に 伴[ともな]って*、 労働力[ろうどうりょく] 不足[ふそく] が 深刻[しんこく] に なって いる。', 'Along with the falling birth rate and aging population, the labor shortage is becoming serious.'], ['外国人[がいこくじん] 労働者[ろうどうしゃ] の 受[う]け入[い]れ *を めぐって*、 さまざま な 意見[いけん] が ある。', 'There are various opinions over accepting foreign workers.'])
        ],
        reading: {
          title: '社説[しゃせつ]: 共[とも]に 生[い]きる 社会[しゃかい] へ', text: [
            '少子[しょうし] 高齢化[こうれいか] が 進[すす]む に 伴[ともな]い、 日本[にほん] の 多[おお]く の 業界[ぎょうかい] で 人手[ひとで] 不足[ふそく] が 深刻[しんこく] に なり つつ ある。 介護[かいご] や 建設[けんせつ] の 現場[げんば] は もとより、 コンビニ や 飲食店[いんしょくてん] で も 外国人[がいこくじん] の 姿[すがた] は 珍[めずら]しく なく なった。',
            '外国人[がいこくじん] 労働者[ろうどうしゃ] の 受[う]け入[い]れ を めぐって は、 治安[ちあん] の 悪化[あっか] を 心配[しんぱい] する 声[こえ] も ある。 しかし、 外国人[がいこくじん] だ から と いって 問題[もんだい] を 起[お]こす わけ で は ない。',
            '大切[たいせつ] な の は、 制度[せいど] を 整[ととの]える こと に 加[くわ]えて、 地域[ちいき] の 人々[ひとびと] が 互[たが]い を 理解[りかい] しよう と する こと だ。 言葉[ことば] や 習慣[しゅうかん] の 違[ちが]い は ある もの の、 共[とも]に 暮[く]らす 隣人[りんじん] と して 支[ささ]え 合[あ]う 社会[しゃかい] を 目指[めざ]す べき で は ない だろう か。'
          ],
          en: ['As the declining birthrate and aging population advance, labor shortages are becoming serious in many Japanese industries. Not only in nursing care and construction, but also in convenience stores and restaurants, foreign workers are no longer an unusual sight.', 'Regarding the acceptance of foreign workers, some voice concerns about worsening public safety. However, being a foreigner doesn\'t mean someone will cause problems.', 'What matters is not only putting systems in place, but also local people trying to understand one another. Although there are differences in language and customs, shouldn\'t we aim for a society where we support each other as neighbors living together?'],
          q: [
            ['What trend does the first paragraph describe?', 'Labor shortages and more foreign workers', 'Rising unemployment', 'Fewer convenience stores', 'More young workers'],
            ['How does the writer respond to safety concerns?', 'Being foreign doesn\'t mean someone causes problems', 'The concerns are completely justified', 'Foreign workers should be limited', 'The police should be increased'],
            ['What does the writer think is important?', 'Systems plus mutual understanding in communities', 'Stricter immigration rules', 'Teaching everyone English', 'Building separate communities']
          ]
        },
        ex: [
          { mc: '"Despite the bad weather, the event was held."', a: '悪天候[あくてんこう] に も かかわらず、 イベント は 開催[かいさい] された。', o: ['悪天候[あくてんこう] だけ あって、 イベント は 開催[かいさい] された。', '悪天候[あくてんこう] に 限[かぎ]らず、 イベント は 中止[ちゅうし] された。', '悪天候[あくてんこう] どころ か、 イベント は 開催[かいさい] しない。'] },
          { mc: '"I can\'t help worrying about my family."', a: '家族[かぞく] の こと が 心配[しんぱい] で ならない。', o: ['家族[かぞく] の こと が 心配[しんぱい] せ ざる を 得[え]ない。', '家族[かぞく] の こと が 心配[しんぱい] し かねない。', '家族[かぞく] の こと が 心配[しんぱい] する もの が ある。'] },
          { mc: '"Considering the price, the quality is high."', a: '値段[ねだん] の わり に、 品質[ひんしつ] が 高[たか]い。', o: ['値段[ねだん] だけ に、 品質[ひんしつ] が 高[たか]い。', '値段[ねだん] に 際[さい]して、 品質[ひんしつ] が 高[たか]い。', '値段[ねだん] を めぐって、 品質[ひんしつ] が 高[たか]い。'] }
        ],
        convo: 'n2-client-call'
      }
    ]
  });
})();
