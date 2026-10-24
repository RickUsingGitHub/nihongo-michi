# Third-party data

Nihongo Michi bundles open data. The raw downloads live in `tools/raw/` and
`tools/build-data.js` turns them into the files in `src/data/gen/`. Those files
stay under the licences below (the share-alike licences apply to the data and
anything derived from it, not to the app's code).

| Data | Used for | Source | Licence |
|---|---|---|---|
| JLPT vocabulary lists by Jonathan Waller | Word decks (N5–N1) and their JLPT levels | [tanos.co.uk](http://www.tanos.co.uk/jlpt/) via [jamsinclair/open-anki-jlpt-decks](https://github.com/jamsinclair/open-anki-jlpt-decks) (`tools/raw/n*.csv`) | CC BY (see tanos.co.uk) |
| JMdict | English meanings in the word decks | [EDRDG](https://www.edrdg.org/jmdict/j_jmdict.html) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| KANJIDIC2 | Kanji meanings and readings | [EDRDG](https://www.edrdg.org/wiki/index.php/KANJIDIC_Project) via [davidluzgouveia/kanji-data](https://github.com/davidluzgouveia/kanji-data) (MIT) (`tools/raw/kanji.json`) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| KanjiVG © Ulrich Apel | Stroke-order animations and tracing | [kanjivg.tagaini.net](https://kanjivg.tagaini.net) (`tools/raw/kanjivg.xml.gz`) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) |

Changes made to the data:

- The WaniKani fields (`wk_*`) that the kanji-data project includes were removed from
  `tools/raw/kanji.json`; the app uses only the KANJIDIC meanings and readings.
- For about 100 kanji the app puts an everyday meaning first (for example 見 is shown as
  "see, look" rather than KANJIDIC's "see, hopes, chances"), and look-alike pairs get distinct
  lead meanings (画 / 絵). These keywords were written for this app and are in `tools/build-data.js`.
- A few word-list entries are corrected on import (for example 運動 listed with the reading
  うんどうする, or 田ぼ for 田んぼ).

The JLPT has not published official word or kanji lists since 2010, so all level assignments are
unofficial.
