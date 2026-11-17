/**
 * The sentences of the comparison pages in Khmer. Same functions and the same logic as `./en.ts`, written in Khmer.
 *
 * Wording (language sheet `sheet-km.md`): "ជម្រើសជំនួស Binance" (alternative), "វេទិកាជួញដូរ" / "វេទិកា" (exchange),
 * "កូដណែនាំ", "កម្រៃ" next to a product or a rate and "កម្រៃជួញដូរ" otherwise, "Maker / Taker", "ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ
 * (KYC)", "Leverage", "នាំមុខ" for "ahead". The reader is "អ្នក" (dropped where Khmer drops it), the site "យើង".
 * Khmer has no plural, gender, case or capital letters: `verb()` and `lcFirst()` of the English file fall away and
 * no inserted text is ever lower-cased. A name, a code, a number or any Latin word has one space on each side;
 * Khmer words stand together (`glue()` adds the space only where an inserted text does not start with Khmer script).
 * Country names stand alone in `name` and are glued to "នៅ" ("នៅកាណាដា"); `residents` is "អ្នករស់នៅ" + name; the
 * UAE is "UAE" only in `short`. Every `noun` of the product table starts with a Khmer word, so it follows "មាន"
 * directly ("មានមុខងារ Copy Trading").
 *
 * Sentences end with "។"; lists built in code use `list()` of the dictionary ("Binance, OKX និង Bybit"); the
 * name – fact pairs and clause items that English joins with "; " keep "; ". Data texts are inserted as written
 * (section 7 of the language sheet): `pick` and the table phrases come without a final "។" (`bare()` removes one
 * if present), `afterSignupShort` loses its "បាន – " where English drops "Yes – ", `maxLeverage` ("រហូតដល់ 150x (…)")
 * follows "Leverage", `chooseIf` is glued to "ប្រសិនបើ". Fee rates arrive in the site's notation (0.02%); leverage
 * stays 150x.
 */
import { site } from "@/config/site";
import type { Exchange, Faq, Fee, Step } from "@/data/exchanges";
import { countryList, featureList } from "@/data/alternatives";
import type { CountryKey, CountryStatus, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { withReading } from "@/i18n/name-readings";
import {
  addLater,
  altInfo as altInfoIn,
  alternativesTo as alternativesIn,
  cheaper,
  countryGroups,
  feePair,
  highestLeverage,
  largestOpenInterest,
  leverageOf,
  lowestFutures,
  lowestSpot,
  pct,
  withFeature,
  withMica,
} from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { AltFaqGroup, CompareText } from "./en";

const locale = "km";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);

/* --------------------------------- joining --------------------------------- */

/** Puts a Khmer word before an inserted text: no space before Khmer script, one space before anything else. */
const glue = (khmer: string, text: string) => (/^\p{Script=Khmer}/u.test(text.trim()) ? `${khmer}${text.trim()}` : `${khmer} ${text.trim()}`);
/** A data text without a final "។" – for texts that code closes or joins itself. */
const bare = (s: string) => s.trim().replace(/[\s។]+$/u, "");
/** A data text closed with "។". */
const stop = (s: string) => `${bare(s)}។`;
/** The `pick` lines of several exchanges, joined with "។ " and closed with "។". */
const picks = (list: Exchange[]) => `${list.map((a) => bare(altInfo(a).pick)).join("។ ")}។`;
/** `afterSignupShort` without its leading "បាន – ". */
const withoutYes = (s: string) => bare(s).replace(/^បាន\s*–\s*/u, "");

/* -------------------------------- vocabulary -------------------------------- */

/** `label` for the tables, `noun` after "មាន" in sentences ("មានមុខងារ Copy Trading"); every noun starts with a Khmer word. */
const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "Copy Trading", noun: "មុខងារ Copy Trading" },
  tradingBots: { label: "Bot ជួញដូរ", noun: "មុខងារ Bot ជួញដូរ" },
  options: { label: "Options", noun: "ការជួញដូរ Options" },
  demoTrading: { label: "ជួញដូរសាកល្បង (Demo)", noun: "ការជួញដូរសាកល្បង (Demo)" },
  margin: { label: "Spot Margin", noun: "ការជួញដូរ Margin លើ Spot" },
  p2p: { label: "ជួញដូរ P2P", noun: "ការជួញដូរ P2P" },
  fiat: { label: "ទិញដោយកាត / ធនាគារ", noun: "ការទិញគ្រីបតូដោយកាត ឬផ្ទេរប្រាក់តាមធនាគារ" },
  earn: { label: "Earn / Staking", noun: "ផលិតផល Earn" },
  launchpad: { label: "Launchpad / Launchpool", noun: "មុខងារ Launchpad" },
  web3Wallet: { label: "កាបូប Web3", noun: "កាបូប Web3 ដែលអ្នកគ្រប់គ្រងដោយខ្លួនឯង (Self-custody)" },
  card: { label: "កាតគ្រីបតូ", noun: "កាតគ្រីបតូ" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` for sentences ("នៅជប៉ុន"), `short` for the tables. */
const countryWords: Record<CountryKey, { name: string; short: string }> = {
  us: { name: "សហរដ្ឋអាមេរិក", short: "សហរដ្ឋអាមេរិក" },
  uk: { name: "ចក្រភពអង់គ្លេស", short: "ចក្រភពអង់គ្លេស" },
  ca: { name: "កាណាដា", short: "កាណាដា" },
  de: { name: "អាល្លឺម៉ង់", short: "អាល្លឺម៉ង់" },
  fr: { name: "បារាំង", short: "បារាំង" },
  nl: { name: "ហូឡង់", short: "ហូឡង់" },
  es: { name: "អេស្ប៉ាញ", short: "អេស្ប៉ាញ" },
  it: { name: "អ៊ីតាលី", short: "អ៊ីតាលី" },
  au: { name: "អូស្ត្រាលី", short: "អូស្ត្រាលី" },
  jp: { name: "ជប៉ុន", short: "ជប៉ុន" },
  sg: { name: "សិង្ហបុរី", short: "សិង្ហបុរី" },
  hk: { name: "ហុងកុង", short: "ហុងកុង" },
  in: { name: "ឥណ្ឌា", short: "ឥណ្ឌា" },
  ae: { name: "អេមីរ៉ាតអារ៉ាប់រួម", short: "UAE" },
};
/** `residents`: "អ្នករស់នៅជប៉ុន". */
const countries = countryList.map((c) => ({ key: c.key, ...countryWords[c.key], residents: `អ្នករស់នៅ${countryWords[c.key].name}` }));

const statusLabel: Record<CountryStatus, string> = {
  restricted: "រឹតត្បិត",
  regional: "វេទិកាប្រចាំតំបន់",
  partial: "រឹតត្បិតមួយផ្នែក",
  open: "មិនរឹតត្បិត",
};

/** The market of a fee comparison, after "លើ": "ទីផ្សារ Spot" / "កិច្ចសន្យា Perpetual". */
const marketName = (market: "spot" | "futures") => (market === "spot" ? "ទីផ្សារ Spot" : "កិច្ចសន្យា Perpetual");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const label = marketName(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${a.name} និង ${x.name} គិតកម្រៃស្តង់ដារដូចគ្នាលើ${label}៖ Maker ${fa.maker} / Taker ${fa.taker}។`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} មានកម្រៃទាបជាង ទាំងលើ Maker និង Taker`
      : mm !== 0
        ? `${who} មានកម្រៃ Maker ទាបជាង ហើយកម្រៃ Taker ស្មើគ្នា`
        : `${who} មានកម្រៃ Taker ទាបជាង ហើយកម្រៃ Maker ស្មើគ្នា`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} មានកម្រៃ Maker ទាបជាង ចំណែក ${x.name} មានកម្រៃ Taker ទាបជាង`
          : `${x.name} មានកម្រៃ Maker ទាបជាង ចំណែក ${a.name} មានកម្រៃ Taker ទាបជាង`;
  return `${a.name} គិតកម្រៃ Maker ${fa.maker} / Taker ${fa.taker} លើ${label} ចំណែក ${x.name} គិត ${fx.maker} / ${fx.taker} – ${verdict}។`;
}

/** Which alternatives are cheaper than, level with or more expensive than `x` on one market (standard tier). */
function feeSummary(x: Exchange, alts: Exchange[], market: "spot" | "futures"): string {
  const fee = (e: Exchange) => (market === "spot" ? e.spotFees : e.futuresFees);
  const fx = fee(x);
  const diff = (a: Exchange) => [Math.sign(pct(fee(a).maker) - pct(fx.maker)), Math.sign(pct(fee(a).taker) - pct(fx.taker))];
  const same = alts.filter((a) => diff(a).every((d) => d === 0));
  const lower = alts.filter((a) => !same.includes(a) && diff(a).every((d) => d <= 0));
  const higher = alts.filter((a) => !same.includes(a) && diff(a).every((d) => d >= 0));
  const mixed = alts.filter((a) => !same.includes(a) && !lower.includes(a) && !higher.includes(a));
  const rates = (list: Exchange[]) => joinList(list.map((a) => `${a.name} (${feePair(fee(a))})`));
  return [
    `${x.name} គិតកម្រៃ ${feePair(fx)} (Maker / Taker) លើ${marketName(market)}។`,
    lower.length ? `កម្រៃទាបជាង៖ ${rates(lower)}។` : `ក្នុងចំណោមជម្រើសជំនួសទាំង ${alts.length} គ្មានវេទិកាណាមួយមានកម្រៃទាបជាងទេ។`,
    same.length ? `កម្រៃស្មើគ្នា៖ ${names(same)}។` : "",
    higher.length ? `កម្រៃខ្ពស់ជាង៖ ${rates(higher)}។` : "",
    mixed.length ? `កម្រៃទាបជាងតែម្ខាង (Maker ឬ Taker)៖ ${rates(mixed)}។` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (label: string, fa: Fee, fx: Fee) => {
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`កម្រៃ ${label} ទាបជាង៖ ${feePair(fa)} ធៀបនឹង ${feePair(fx)} (Maker / Taker)`);
    else if (m < 0 && t === 0) out.push(`កម្រៃ Maker លើ ${label} ទាបជាង៖ ${fa.maker} ធៀបនឹង ${fx.maker}`);
    else if (t < 0 && m === 0) out.push(`កម្រៃ Taker លើ ${label} ទាបជាង៖ ${fa.taker} ធៀបនឹង ${fx.taker}`);
    else if (m < 0) out.push(`កម្រៃ Maker លើ ${label} ទាបជាង៖ ${fa.maker} ធៀបនឹង ${fx.maker} (ប៉ុន្តែកម្រៃ Taker ខ្ពស់ជាង)`);
    else if (t < 0) out.push(`កម្រៃ Taker លើ ${label} ទាបជាង៖ ${fa.taker} ធៀបនឹង ${fx.taker} (ប៉ុន្តែកម្រៃ Maker ខ្ពស់ជាង)`);
  };
  fee("Spot", a.spotFees, x.spotFees);
  fee("Futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`Leverage អតិបរមាខ្ពស់ជាង៖ ${leverageOf(a)}x ធៀបនឹង ${leverageOf(x)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`Open Interest លើទីផ្សារ Derivatives ច្រើនជាង៖ ${formatBn(a.market.openInterestBn)} ធៀបនឹង ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`ទីផ្សារ Derivatives ច្រើនជាង៖ ${a.market.markets} ធៀបនឹង ${x.market.markets}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`កូដណែនាំដែលភ្លេច នៅតែអាចភ្ជាប់បាននៅពេលក្រោយ (${withoutYes(a.referral.afterSignupShort)})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`${glue("មាន", joinList(notOffered.map((f) => f.noun)))} ដែល ${x.name} មិនមាន`);
  if (notFound.length)
    out.push(`${glue("មាន", joinList(notFound.map((f) => f.noun)))} – យើងរកមិនឃើញផលិតផលបែបនេះ លើគេហទំព័រផ្ទាល់របស់ ${x.name} ទេ`);

  if (altInfo(a).mica && !altInfo(x).mica)
    out.push(`វេទិកាសម្រាប់តំបន់សេដ្ឋកិច្ចអឺរ៉ុប (EEA) ដែលមានអាជ្ញាប័ណ្ណស្របតាម MiCA (${bare(altInfo(a).mica)})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`មិនរឹតត្បិតសេវានៅ${joinList(openWhere.map((c) => c.name))} ខណៈដែល ${x.name} បិទសេវានៅទីនោះ`);
  if (regionalWhere.length)
    out.push(`ផ្តល់សេវានៅ${joinList(regionalWhere.map((c) => c.name))} តាមរយៈវេទិកាប្រចាំតំបន់ ខណៈដែល ${x.name} បិទសេវានៅទីនោះ`);
  return out;
}

/* ---------------------------------- country --------------------------------- */

/** Plain-text answer to "Which alternatives to x can be used in this country?". */
function countryAnswer(x: Exchange, alts: Exchange[], country: (typeof countryList)[number]): string {
  const c = countries.find((it) => it.key === country.key)!;
  const own = altInfo(x).countries[c.key];
  const g = countryGroups(alts, c.key);
  const note = (a: Exchange) => altInfo(a).countries[c.key].note;
  const withNote = (list: Exchange[]) => list.map((a) => (note(a) ? `${a.name} (${bare(note(a)!)})` : a.name));
  const ownNote = own.note ? ` (${bare(own.note)})` : "";
  const parts: string[] = [];
  if (own.status === "restricted") parts.push(`${x.name} ដាក់${c.name} ក្នុងបញ្ជីប្រទេសរឹតត្បិតរបស់ខ្លួន។`);
  else if (own.status === "partial") parts.push(`${x.name} រឹតត្បិតសេវាមួយផ្នែកនៅ${c.name}${ownNote}។`);
  else if (own.status === "regional") parts.push(`${x.name} ផ្តល់សេវាដល់${c.residents} តាមរយៈវេទិកាប្រចាំតំបន់${ownNote}។`);
  else parts.push(`${x.name} មិនដាក់${c.name} ក្នុងបញ្ជីប្រទេសរឹតត្បិតទេ។`);
  if (g.open.length) parts.push(`${names(g.open)} មិនដាក់${c.name} ក្នុងបញ្ជីប្រទេសរឹតត្បិតទេ។`);
  if (g.regional.length) parts.push(`${joinList(withNote(g.regional))} ផ្តល់សេវាដល់${c.residents} តាមរយៈវេទិកាប្រចាំតំបន់ដាច់ដោយឡែក។`);
  if (g.partial.length) parts.push(`រឹតត្បិតមួយផ្នែក៖ ${joinList(withNote(g.partial))}។`);
  if (g.restricted.length)
    parts.push(
      own.status === "restricted"
        ? `${names(g.restricted)} ក៏រឹតត្បិតសេវានៅ${c.name}ដែរ។`
        : `${names(g.restricted)} រឹតត្បិតសេវានៅ${c.name}។`,
    );
  if (!g.open.length && !g.regional.length)
    parts.push(`ក្នុងចំណោមជម្រើសជំនួសទាំង ${alts.length} គ្មានវេទិកាណាមួយបើកសេវាពេញលេញ សម្រាប់${c.residents}ទេ។`);
  parts.push(
    "បញ្ជីប្រទេសអាចផ្លាស់ប្តូរ ហើយការដែលប្រទេសមួយមិនមានក្នុងបញ្ជី មិនមែនជាការធានាថាគ្រប់ផលិតផលមាននៅទីនោះទេ – លក្ខខណ្ឌផ្ទាល់របស់វេទិកាជួញដូរ ជាអ្នកសម្រេច។",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `ទំព័រនេះប្រៀបធៀបជម្រើសជំនួស ${withReading(x, locale)} ចំនួន ${alts.length} គឺ ${names(alts)}។ ${picks(alts)} វេទិកាទាំង ${alts.length} តម្រូវឱ្យអ្នកប្រើប្រាស់ថ្មី ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ (KYC) ហើយវេទិកានីមួយៗ មានបញ្ជីប្រទេសរឹតត្បិតរៀងៗខ្លួន ដូច្នេះពិនិត្យតារាងប្រទេស មុនពេលចុះឈ្មោះ។`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `កំណត់ថាវេទិកាថ្មីត្រូវល្អជាង ${x.name} លើចំណុចណាខ្លះ`,
      text: `កម្រៃជួញដូរទាបជាង, Leverage ខ្ពស់ជាង, កាក់ច្រើនជាង ឬគ្រាន់តែជាវេទិកា ដែលបើកសេវានៅប្រទេសដែលអ្នករស់នៅ៖ តារាងនៅលើទំព័រនេះបង្ហាញថា ជម្រើសជំនួសនីមួយៗនាំមុខ ${x.name} ត្រង់ណា និងមិននាំមុខត្រង់ណា។`,
    },
    {
      title: "ពិនិត្យថា វេទិកាបើកសេវានៅប្រទេសដែលអ្នករស់នៅ",
      text: "វេទិកាជួញដូរនីមួយៗ មានបញ្ជីប្រទេសរឹតត្បិតរៀងៗខ្លួន ហើយវេទិកាខ្លះ បញ្ជូនអ្នកទៅវេទិកាប្រចាំតំបន់ ដែលមានផលិតផល និងដែនកំណត់ខុសៗគ្នា។ មើលតារាងប្រទេស មុនពេលចុះឈ្មោះ។",
    },
    {
      title: "ចុះឈ្មោះតាមតំណភ្ជាប់ណែនាំ",
      text: `${names(signupOnly)} ទទួលកូដណែនាំតែពេលចុះឈ្មោះប៉ុណ្ណោះ ឬមិនបានបញ្ជាក់វិធីភ្ជាប់កូដនៅពេលក្រោយ ដូច្នេះប្រើតំណភ្ជាប់ មុនពេលបង្កើតគណនី។${later.length ? ` ${names(later)} អនុញ្ញាតឱ្យភ្ជាប់កូដនៅពេលក្រោយ តាមលក្ខខណ្ឌមួយចំនួន។` : ""}`,
    },
    {
      title: "ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ មុនពេលផ្ទេរប្រាក់",
      text: `ជម្រើសជំនួសទាំង ${alts.length} តម្រូវឱ្យអ្នកប្រើប្រាស់ថ្មី ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ ហើយលើវេទិកាភាគច្រើន ការដាក់ប្រាក់ ឬការជួញដូរនៅតែជាប់សោ រហូតដល់ផ្ទៀងផ្ទាត់រួច។ ត្រៀមលិខិតឆ្លងដែន, អត្តសញ្ញាណប័ណ្ណ ឬប័ណ្ណបើកបរឱ្យរួចរាល់។`,
    },
    {
      title: `បិទ Position ដែលកំពុងបើកលើ ${x.name}`,
      text: `Position Futures និង Margin មិនអាចផ្ទេររវាងវេទិកាបានទេ។ បិទ Position ទាំងនោះលើ ${x.name} ជាមុនសិន ឬរក្សាគណនីទុក រហូតដល់ Position ទាំងនោះបញ្ចប់។`,
    },
    {
      title: "ដកប្រាក់ទៅអាសយដ្ឋានដាក់ប្រាក់ថ្មី",
      text: "ចម្លងអាសយដ្ឋានដាក់ប្រាក់ពីវេទិកាថ្មី ជ្រើសរើសកាក់ដូចគ្នា និងបណ្តាញដូចគ្នានៅសងខាង រួចផ្ញើចំនួនតិចតួច ដើម្បីសាកល្បងជាមុនសិន។ ប្រាក់ដែលផ្ទេរតាមបណ្តាញខុស អាចបាត់បង់។",
    },
    {
      title: `សម្រេចថានឹងធ្វើអ្វីជាមួយគណនី ${x.name}`,
      text: `អ្នកអាចរក្សាគណនីនោះទុកបាន – គណនីលើវេទិកាផ្សេងៗគ្នា មិនពាក់ព័ន្ធគ្នាទេ។ កម្រិតកម្រៃ, ការណែនាំ និងរង្វាន់ដែលមិនទាន់ប្រើ នៅជាប់នឹង ${x.name} ហើយមិនផ្ទេរទៅជាមួយទេ។`,
    },
  ];
}

/** All questions an alternatives page answers, grouped for display. Answers are built from the data files. */
function buildAlternativesFaqs(x: Exchange, alts: Exchange[]): AltFaqGroup[] {
  const n = alts.length;
  const date = prettyDate(site.lastReviewed);
  const lowF = lowestFutures(alts);
  const lowS = lowestSpot(alts);
  const highest = highestLeverage(alts);
  const oi = largestOpenInterest(alts);
  const cheaperF = alts.filter((a) => cheaper(a.futuresFees, x.futuresFees));
  const cheaperS = alts.filter((a) => cheaper(a.spotFees, x.spotFees));
  const mica = withMica(alts);
  const noMica = alts.filter((a) => !altInfo(a).mica);
  const xInfo = altInfo(x);

  const choosing: Faq[] = [
    {
      q: `ជម្រើសជំនួស ${x.name} ល្អបំផុតគឺមួយណា?`,
      a: `គ្មានជម្រើសជំនួស ${x.name} តែមួយដែលល្អបំផុតទេ – ចម្លើយអាស្រ័យលើហេតុផល ដែលអ្នកចង់ប្តូរវេទិកា។ ${picks(alts)} ទំព័រនេះប្រៀបធៀបវេទិកាទាំង ${n} ជាមួយ ${x.name} លើកម្រៃជួញដូរ, Leverage, ផលិតផល, ប្រទេសដែលអាចប្រើបាន និងការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ ដោយប្រើតួលេខ ពីគេហទំព័រផ្ទាល់របស់វេទិកានីមួយៗ ដែលបានពិនិត្យថ្ងៃទី ${date}។`,
    },
    {
      q: `វេទិកាដូច ${x.name} មានអ្វីខ្លះ?`,
      a: `${names(alts)} ជាវេទិកាដែលស្រដៀង ${x.name} ជាងគេ។ ដូច ${x.name} ដែរ វេទិកាទាំងនេះជាវេទិកាជួញដូរបែបមជ្ឈការ (CEX) ដែលផ្តល់ការជួញដូរ Spot និង Futures ប្រើ Leverage ក្នុងគណនីតែមួយ ហើយមានកម្មវិធីណែនាំ សម្រាប់អ្នកប្រើប្រាស់ថ្មី។ ភាពខុសគ្នាស្ថិតនៅលើកម្រៃជួញដូរ, Leverage អតិបរមា, ចំនួនទ្រព្យសកម្មដែលបានចុះបញ្ជី និងប្រទេសដែលវេទិកានីមួយៗទទួល។`,
    },
    {
      q: `ជម្រើសជំនួស ${x.name} ធំជាងគេគឺមួយណា?`,
      a: `បើវាស់តាម Open Interest លើទីផ្សារ Derivatives នៅ CoinMarketCap (ទិន្នន័យថ្ងៃទី ${prettyDate(site.marketDataDate)}) ${names(oi)} ធំជាងគេ ក្នុងចំណោមជម្រើសជំនួសទាំង ${n} ដោយមាន ${formatBn(oi[0].market.openInterestBn)}។ ចំណែក ${x.name} មាន ${formatBn(x.market.openInterestBn)}។`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `ជម្រើសជំនួស ${x.name} មួយណាមានកម្រៃជួញដូរទាបជាងគេ?`,
      a: `${names(lowF)} មានកម្រៃ Futures ស្តង់ដារទាបជាងគេ ក្នុងចំណោមវេទិកាទាំង ${n} គឺ ${feePair(lowF[0].futuresFees)} (Maker / Taker)។ លើ Spot ${names(lowS)} មានកម្រៃទាបជាងគេ គឺ ${feePair(lowS[0].spotFees)}។ ${x.name} គិតកម្រៃ ${feePair(x.futuresFees)} លើ Futures និង ${feePair(x.spotFees)} លើ Spot។${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} ទាំងនេះជាអត្រាកម្រិតស្តង់ដារ ហើយកម្រិត VIP និង Token របស់វេទិកា អាចបញ្ចុះកម្រៃបន្ថែមទៀត។`,
    },
    {
      q: `វេទិកាណាខ្លះមានកម្រៃជួញដូរទាបជាង ${x.name}?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `លើកិច្ចសន្យា Perpetual៖ ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))} ធៀបនឹង ${feePair(x.futuresFees)} លើ ${x.name}។` : `លើកិច្ចសន្យា Perpetual គ្មានជម្រើសជំនួសណាមួយ ក្នុងចំណោមទាំង ${n} មានកម្រៃទាបជាង ${x.name} (${feePair(x.futuresFees)}) ទេ។`} ${cheaperS.length ? `លើ Spot៖ ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))} ធៀបនឹង ${feePair(x.spotFees)} លើ ${x.name}។` : `លើ Spot គ្មានវេទិកាណាមួយ ក្នុងចំណោមនោះមានកម្រៃទាបជាង ${x.name} (${feePair(x.spotFees)}) ទេ។`} តួលេខទាំងអស់ជាកម្រៃ Maker / Taker កម្រិតស្តង់ដារ។`
          : `នៅកម្រិតស្តង់ដារ គ្មានជម្រើសជំនួសណាមួយ ក្នុងចំណោមទាំង ${n} មានកម្រៃទាបជាង ${x.name} ទេ៖ ${x.name} គិតកម្រៃ ${feePair(x.futuresFees)} លើ Futures និង ${feePair(x.spotFees)} លើ Spot (Maker / Taker) ដែលជាអត្រាទាបបំផុតក្នុងការប្រៀបធៀបនេះ។ ជម្រើសជំនួសទាំងនេះនៅតែគួរពិចារណា ដោយហេតុផលផ្សេង – បទប្បញ្ញត្តិ, ផលិតផល ឬប្រទេសដែលវេទិកាទទួល។`,
    },
    {
      q: `ជម្រើសជំនួស ${x.name} មួយណាផ្តល់ Leverage ខ្ពស់ជាងគេ?`,
      a: `${names(highest)} ផ្តល់ Leverage ខ្ពស់ជាងគេ ក្នុងចំណោមវេទិកាទាំង ${n} ${glue("គឺ", bare(highest[0].maxLeverage))}។ វេទិកាផ្សេងទៀត៖ ${joinList(
        alts.filter((a) => !highest.includes(a)).map((a) => `${a.name} ${leverageOf(a)}x`),
      )}។ ចំណែក ${x.name} ផ្តល់ Leverage ${bare(x.maxLeverage)}។ Leverage ខ្ពស់ធ្វើឱ្យហានិភ័យ Liquidation (ការបិទ Position ដោយបង្ខំ) កើនឡើងយ៉ាងខ្លាំង។`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `ជម្រើសជំនួស ${x.name} មួយណាខ្លះប្រើបាននៅ${c.name}?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `ជម្រើសជំនួស ${x.name} ដែលមិនតម្រូវ KYC មានដែរឬទេ?`,
      a: `គ្មានទេ ក្នុងចំណោមវេទិកាទាំង ${n} នេះ។ វេទិកានីមួយៗតម្រូវឱ្យអ្នកប្រើប្រាស់ថ្មី ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ៖ ${alts.map((a) => `${a.name} – ${bare(a.signup.kycShort)}`).join("; ")}។ ចំណែក ${x.name}៖ ${bare(x.signup.kycShort)}។`,
    },
    {
      q: `ជម្រើសជំនួស ${x.name} មួយណាខ្លះមានអាជ្ញាប័ណ្ណ MiCA នៅសហភាពអឺរ៉ុប?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${bare(altInfo(a).mica)})`))} បញ្ជាក់នីតិបុគ្គលដែលមានអាជ្ញាប័ណ្ណ MiCA សម្រាប់អ្នករស់នៅតំបន់សេដ្ឋកិច្ចអឺរ៉ុប (EEA)។` : `ក្នុងចំណោមវេទិកាទាំង ${n} គ្មានវេទិកាណាមួយ បញ្ជាក់នីតិបុគ្គលដែលមានអាជ្ញាប័ណ្ណ MiCA ទេ។`}${noMica.length ? ` ${names(noMica)} មិនបានបញ្ជាក់អាជ្ញាប័ណ្ណ MiCA ណាមួយ លើទំព័រផ្ទាល់របស់ខ្លួនទេ។` : ""} ${xInfo.mica ? `ចំណែក ${x.name}៖ ${bare(xInfo.mica)}។` : `ចំណែក ${x.name} មិនបានបញ្ជាក់នីតិបុគ្គលណាមួយទេ។`} វេទិកាប្រចាំតំបន់ជាធម្មតា មានផលិតផល, កម្រៃជួញដូរ និងដែនកំណត់ផ្ទាល់ខ្លួន។`,
    },
    {
      q: `ជម្រើសជំនួស ${x.name} មួយណាមានសុវត្ថិភាពជាងគេ?`,
      a: `វេទិកាជួញដូរបែបមជ្ឈការ (CEX) ទាំងអស់សុទ្ធតែមានហានិភ័យ ដូច្នេះការប្រៀបធៀបដោយស្មោះត្រង់ គឺមើលលើអ្វីដែលវេទិកានីមួយៗបោះពុម្ពផ្សាយ។ ${alts
        .map(
          (a, i) =>
            `${a.name}៖ ភស្តុតាងទុនបម្រុង${i === 0 ? " (Proof of Reserves)" : ""} – ${bare(altInfo(a).reserves)}។ ${altInfo(a).fund ? stop(altInfo(a).fund) : "មិនបានបញ្ជាក់មូលនិធិការពារទេ។"}`,
        )
        .join(" ")} លើវេទិកាណាក៏ដោយ ទុកតែប្រាក់ ដែលអ្នកកំពុងប្រើជួញដូរប៉ុណ្ណោះ។`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    const featureNote = (a: Exchange) => altInfo(a).features[key].note;
    return {
      q: `ជម្រើសជំនួស ${x.name} មួយណាខ្លះ${glue("មាន", f.noun)}?`,
      a: `${yes.length ? `${joinList(yes.map((a) => (featureNote(a) ? `${a.name} (${bare(featureNote(a)!)})` : a.name)))} ${glue("មាន", f.noun)}។` : `ក្នុងចំណោមជម្រើសជំនួសទាំង ${n} គ្មានវេទិកាណាមួយ ${glue("បង្ហាញ", f.noun)} លើគេហទំព័រផ្ទាល់របស់ខ្លួនទេ។`}${no.length ? ` ${names(no)} មិនមានផលិតផលនេះទេ។` : ""}${unknown.length ? ` នៅពេលយើងពិនិត្យ យើងរកមិនឃើញផលិតផលបែបនេះ លើគេហទំព័ររបស់ ${names(unknown)} ទេ។` : ""} ${own === true ? `ចំណែក ${x.name} ក៏មានផលិតផលនេះដែរ។` : own === false ? `ចំណែក ${x.name} មិនមានទេ។` : `ចំណែក ${x.name} មិនបង្ហាញផលិតផលបែបនេះ លើគេហទំព័ររបស់ខ្លួនទេ។`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `ជម្រើសជំនួស ${x.name} មួយណាមានកាក់ច្រើនជាងគេ?`,
      a: `តាមតួលេខដែលវេទិកានីមួយៗផ្សព្វផ្សាយ៖ ${alts.map((a) => `${a.name} – ${bare(a.assets)}`).join("; ")}។ ចំណែក ${x.name}៖ ${bare(x.assets)}។ វេទិកានីមួយៗរាប់ខុសគ្នា – ខ្លះរាប់កាក់ ខ្លះទៀតរាប់គូជួញដូរ – ដូច្នេះតួលេខទាំងនេះ មិនអាចយកមកប្រៀបធៀបគ្នាដោយផ្ទាល់បានទេ។`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `របៀបប្តូរពី ${x.name} ទៅវេទិកាផ្សេង?`,
      a: switchSteps(x, alts)
        .map((s, i) => `ជំហានទី ${i + 1}៖ ${s.title}។`)
        .join(" "),
    },
    {
      q: `គណនី ${x.name} អាចរក្សាទុកបានដែរឬទេ ពេលបើកគណនីលើវេទិកាផ្សេង?`,
      a: `បាន។ វេទិកាជួញដូរនីមួយៗ ជាក្រុមហ៊ុនដាច់ដោយឡែកពីគ្នា ដូច្នេះគណនីលើវេទិកាមួយ មិនប៉ះពាល់ដល់គណនីលើវេទិកាមួយទៀតទេ ហើយអ្នកអាចប្រើទាំងពីរស្របគ្នាបាន។ អ្វីដែលមិនផ្ទេរទៅជាមួយ គឺអ្វីៗដែលភ្ជាប់នឹងគណនី៖ ការណែនាំលើ ${x.name}, កម្រិតកម្រៃ, រង្វាន់ស្វាគមន៍ និងប្រវត្តិជួញដូរ នៅជាប់នឹង ${x.name}។`,
    },
    {
      q: `Position Futures ដែលកំពុងបើកលើ ${x.name} អាចផ្ទេរទៅវេទិកាផ្សេងបានដែរឬទេ?`,
      a: `មិនបានទេ។ Position Futures មានតែលើវេទិកាដែលបានបើក Position នោះប៉ុណ្ណោះ។ ដើម្បីប្តូរ បិទ Position លើ ${x.name} ដកប្រាក់ចេញ រួចបើក Position ថ្មីលើវេទិកាមួយទៀត – តាមតម្លៃ និងកម្រៃដែលអនុវត្តនៅទីនោះ។`,
    },
    {
      q: `ជម្រើសជំនួស ${x.name} មានកូដណែនាំដែរឬទេ?`,
      a: `មាន។ វេទិកាទាំង ${n} សុទ្ធតែមាន៖ ${alts.map((a) => `${a.name} ${a.referralCode} (${bare(a.feeDiscount || a.bonusHeadline)})`).join("; ")}។ ការប្រើកូដណែនាំមិនគិតថ្លៃ ហើយមិនធ្វើឱ្យកម្រៃជួញដូរកើនឡើងទេ។`,
    },
    {
      q: `ជម្រើសជំនួស ${x.name} អាចភ្ជាប់កូដណែនាំនៅពេលក្រោយបានដែរឬទេ?`,
      a: `${alts.map((a) => `${a.name}៖ ${bare(a.referral.afterSignupShort)}`).join("។ ")}។ វិធីដែលមានសុវត្ថិភាពលើគ្រប់វេទិកា គឺចុះឈ្មោះតាមតំណភ្ជាប់ណែនាំ។`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `${a.name} ល្អជាង ${x.name} ដែរឬទេ?`,
      a: `${ahead.length ? `${a.name} នាំមុខ ${x.name} លើចំណុចទាំងនេះ៖ ${ahead.join("; ")}។` : `លើចំណុចដែលយើងប្រៀបធៀប ${a.name} គ្មានអត្ថប្រយោជន៍ដែលអាចវាស់វែងបាន លើស ${x.name} ទេ។`} ${behind.length ? `ចំណែក ${x.name} នាំមុខលើ៖ ${behind.join("; ")}។` : `ចំណែក ${x.name} មិននាំមុខលើចំណុចណាមួយទេ។`} ${a.name} សមនឹងអ្នក ប្រសិនបើ${bare(altInfo(a).chooseIf[0])}។`,
    };
  });

  return [
    { id: "choosing", title: `ការជ្រើសរើសវេទិកាជំនួស ${x.name}`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "កម្រៃជួញដូរ និង Leverage", faqs: fees },
    { id: "countries", title: "ប្រទេស, KYC និងបទប្បញ្ញត្តិ", faqs: countryFaqs },
    { id: "features", title: "ផលិតផល និងកាក់", faqs: featureFaqs },
    { id: "switching", title: `ការប្តូរពី ${x.name} និងកូដណែនាំ`, faqs: switching },
    { id: "versus", title: `${x.name} ធៀបនឹងជម្រើសជំនួស`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `ជម្រើសជំនួស ${x.name} ល្អបំផុតមានអ្វីខ្លះ?`,
    a: `${picks(alts)} ទំព័រជម្រើសជំនួស ${x.name} របស់យើង ប្រៀបធៀបវេទិកាទាំង ${alts.length} ជាមួយ ${x.name} លើកម្រៃជួញដូរ, Leverage, ផលិតផល, ប្រទេសដែលអាចប្រើបាន និងការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ។`,
  };
}

export const km: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "មាន", no: "គ្មាន", notFound: "រកមិនឃើញលើគេហទំព័ររបស់វេទិកា" },
  names,
  feeSentence,
  feeSummary,
  advantages,
  countryAnswer,
  quickAnswer,
  switchSteps,
  buildAlternativesFaqs,
  alternativesTeaserFaq,
};
