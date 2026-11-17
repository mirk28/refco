/**
 * The head-to-head pages ("/km/<a>-vs-<b>") and the comparison hub ("/km/compare") in Khmer.
 * Same keys as `./en.tsx`, written natively for readers in Cambodia (standard written Khmer, "អ្នក" / "យើង").
 *
 * Wording: "វេទិកាជួញដូរ" / "វេទិកា", "កម្រៃជួញដូរ" ("កម្រៃ" only next to a product or a rate), "កូដណែនាំ"; Spot, Futures,
 * Margin, Maker / Taker, Leverage, Liquidity, Open Interest, Derivatives, Position, Copy Trading, KYC and MiCA stay in
 * Latin letters. The pages call themselves "ប្រៀបធៀបមួយទល់មួយ", the hub "ប្រៀបធៀបវេទិកាជួញដូរ"; the better value of a
 * row is "នាំមុខ", a tie "ស្មើគ្នា". Labels keep the Latin "vs"; questions put "ឬ" between the names.
 * Khmer has no gender, case, plural or capitals: a name or a data text is inserted unchanged, a Latin name, code or number
 * has a space on each side, and nothing is glued to a name. Words run together; one space stands where English has a
 * comma or a pause. A sentence ends with "។", a heading before a list with "៖". The Khmer spellings of the names
 * ("Binance (បាយណាន់)") appear only in the title, the H1, the first mention in the lead and the keywords.
 */
import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, leverageOf } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import { readingOf, withReading } from "../name-readings";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "km";
const ct = compareText(locale);
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const { advantages, names } = ct;
const featureList = ct.features;
const countryList = ct.countries;
type Country = (typeof countryList)[number];

/* ---------------------------------- helpers --------------------------------- */

/** The name with its Khmer spelling, for the title, the H1 and the first mention in the lead. */
const named = (e: Exchange) => withReading(e, locale);
/** Second spellings people also type besides the fixed one (`readingOf`): keywords only, never in text. */
const keywordVariants: Record<string, string> = { binance: "ប៊ីណាន់", okx: "អូខេអិច" };
/** The richest variant that fits into `max` characters (the last one otherwise). */
const fit = (max: number, ...variants: string[]) => variants.find((v) => v.length <= max) ?? variants[variants.length - 1];
/** A Khmer word followed by a data text: glued when the text starts with a Khmer letter, one space before Latin, digits and quotes. */
const after = (word: string, s: string) => (/^[ក-៿]/.test(s) ? `${word}${s}` : `${word} ${s}`);
/** A data text inside a sentence, without a final mark (the sentence closes it itself). */
const bare = (s: string) => s.trim().replace(/\s*[។.]$/, "");
/** A data text or a built sentence as a closed sentence ("…។"). */
const closed = (s: string) => (/[។?]$/.test(s.trim()) ? s.trim() : `${bare(s)}។`);
/** Drops the source bracket of `users` / `assets`: "(តាម Binance)", "(Bybit API)". */
const withoutSource = (s: string) => bare(s.replace(/\s*\((?:(?:យោង)?តាម[^()]*|[^()]*\bAPI)\)/, ""));
const offer = (e: Exchange) => bare(e.feeDiscount || e.bonusHeadline);
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
const fee = (a: Exchange, b: Exchange, market: "spot" | "futures") => closed(ct.feeSentence(a, b, market));
/** Several advantages after a colon, joined with "; " as in `compare/km.ts`, closed with "។". */
const statements = (items: string[]) => `${items.map(bare).join("; ")}។`;

const leverageRisk = "Leverage ខ្ពស់ធ្វើឱ្យហានិភ័យ Liquidation កើនឡើងយ៉ាងខ្លាំង។";
const leverageRiskFirst = "Leverage ខ្ពស់ធ្វើឱ្យហានិភ័យ Liquidation (ការបិទ Position ដោយបង្ខំ) កើនឡើងយ៉ាងខ្លាំង។";
const regionalNote = "វេទិកាប្រចាំតំបន់ជាធម្មតាមានផលិតផល, កម្រៃជួញដូរ និងដែនកំណត់ផ្ទាល់ខ្លួន។";
const safeWay = "វិធីដែលមានសុវត្ថិភាព គឺចុះឈ្មោះតាមតំណភ្ជាប់ណែនាំ";
const cmcRanking = "តារាងចំណាត់ថ្នាក់ Derivatives របស់ CoinMarketCap";
const ownFigures = "តាមតួលេខដែលវេទិកានីមួយៗប្រកាស";
const deeperMeans = "ទីផ្សារដែលជ្រៅជាង ជាធម្មតាមានន័យថា Spread តូចជាងសម្រាប់ការបញ្ជាទិញលក់ទំហំធំ។";
const noMicaEntity = "មិនបានបញ្ជាក់នីតិបុគ្គលណាមួយ ដែលមានអាជ្ញាប័ណ្ណ MiCA នៅលើទំព័ររបស់ខ្លួនទេ";

/** "Binance នាំមុខ 5 ចំណុច ហើយ OKX នាំមុខ 4 ចំណុច" / "… OKX នាំមុខ 4 ចំណុច ហើយ 3 ចំណុចទៀតស្មើគ្នា" */
const tally = (a: Exchange, b: Exchange, s: ScoreSummary) =>
  s.tie.length
    ? `${a.name} នាំមុខ ${s.a.length} ចំណុច ${b.name} នាំមុខ ${s.b.length} ចំណុច ហើយ ${s.tie.length} ចំណុចទៀតស្មើគ្នា`
    : `${a.name} នាំមុខ ${s.a.length} ចំណុច ហើយ ${b.name} នាំមុខ ${s.b.length} ចំណុច`;

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? after(`${e.name} នាំមុខផ្នែក`, joinList(rows.map((r) => r.topic))) : `${e.name} មិននាំមុខលើចំណុចណាមួយឡើយ`;
  const choose = (e: Exchange) => after(`ជ្រើសរើស ${e.name} ប្រសិនបើ`, bare(altInfo(e).chooseIf[0]));
  return `រវាង ${a.name} និង ${b.name} គ្មានវេទិកាណាល្អជាងលើគ្រប់ចំណុចទេ។ ក្នុងចំណោម ${s.measurable} ចំណុចដែលវាស់វែងបានក្នុងការប្រៀបធៀបនេះ ${tally(a, b, s)}។ ${lead(a, s.a)}។ ${lead(b, s.b)}។ ${choose(a)}។ ${choose(b)}។`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb)
    return `${a.name} និង ${b.name} មាន Leverage អតិបរមាស្មើគ្នា៖ ${after(`${a.name} ផ្តល់`, bare(a.maxLeverage))} ហើយ ${after(`${b.name} ផ្តល់`, bare(b.maxLeverage))}។`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `${hi.name} ផ្តល់ Leverage អតិបរមាខ្ពស់ជាង – ${bare(hi.maxLeverage)} – ${after("ធៀបនឹង", bare(lo.maxLeverage))} លើ ${lo.name}។`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `តាម${cmcRanking} (ថ្ងៃទី ${prettyDate(site.marketDataDate)}) ${a.name} មាន Open Interest ${formatBn(a.market.openInterestBn)} លើទីផ្សារ ${a.market.markets} ហើយ ${b.name} មាន ${formatBn(b.market.openInterestBn)} លើទីផ្សារ ${b.market.markets}។ ${deeper.name} មានទីផ្សារជ្រៅជាង ដែលជាធម្មតាមានន័យថា Spread តូចជាងសម្រាប់ការបញ្ជាទិញលក់ទំហំធំ។`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${after(`${a.name} មាន`, joinList(notOffered.map((f) => f.noun)))} ខណៈដែល ${b.name} មិនមានទេ។` : "",
    notFound.length
      ? `${after(`${a.name} មាន`, joinList(notFound.map((f) => f.noun)))} ប៉ុន្តែយើងរកមិនឃើញផលិតផលបែបនេះ នៅលើគេហទំព័ររបស់ ${b.name} ផ្ទាល់ទេ។`
      : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${bare(note)})` : "";
  if (status === "restricted") return `${e.name} មិនផ្តល់សេវា ${after("ដល់", c.residents)}${extra}`;
  if (status === "regional") return `${e.name} ផ្តល់សេវា ${after("ដល់", c.residents)} តាមរយៈវេទិកាប្រចាំតំបន់${extra}`;
  if (status === "partial") return `${e.name} ${after("រឹតត្បិតមួយផ្នែកនៅ", c.name)}${extra}`;
  return `${e.name} ${after("មិនបានដាក់", c.name)} ក្នុងបញ្ជីប្រទេសរឹតត្បិតទេ`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("km").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}។ ${statusPhrase(b, c)}។ បញ្ជីប្រទេសអាចផ្លាស់ប្តូរ ហើយប្រទេសដែលមិនមានក្នុងបញ្ជី ក៏មិនធានាថាគ្រប់ផលិតផលមាននៅទីនោះដែរ – លក្ខខណ្ឌផ្ទាល់របស់វេទិកាជួញដូរ ជាអ្នកសម្រេច។`;

/* ------------------------------------ FAQ ------------------------------------ */

/** All questions a head-to-head page answers, grouped for display (see `./en.tsx`). */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) =>
    has(a, key) && has(b, key)
      ? "មានលើវេទិកាទាំងពីរ"
      : has(a, key)
        ? `មានតែលើ ${a.name}`
        : has(b, key)
          ? `មានតែលើ ${b.name}`
          : "រកមិនឃើញលើគេហទំព័ររបស់វេទិកាទាំងពីរ";
  const noTokenDiscount = "មិនបានប្រកាសការបញ្ចុះកម្រៃបែបនេះទេ។";
  const noFund = "មិនបានបញ្ជាក់អំពីមូលនិធិការពារទេ។";
  const kyc = (e: Exchange) => bare(e.signup.kycShort);

  const verdict: Faq[] = [
    { q: `${a.name} ឬ ${b.name}៖ មួយណាល្អជាង?`, a: versusAnswer(a, b, s) },
    {
      q: `${a.name} និង ${b.name} ខុសគ្នាសំខាន់ត្រង់ណា?`,
      a: `${bare(ia.pick)}។ ${bare(ib.pick)}។${aheadA.length ? ` ចំណុចដែល ${a.name} នាំមុខច្បាស់ជាងគេតាមតួលេខ៖ ${statements(aheadA.slice(0, 2))}` : ""}${aheadB.length ? ` ចំណែក ${b.name}៖ ${statements(aheadB.slice(0, 2))}` : ""}`,
    },
    {
      q: `${a.name} ធំជាង ${b.name} ដែរឬទេ?`,
      a: `តាម${cmcRanking} (ថ្ងៃទី ${marketDate}) ${a.name} មាន Open Interest ${formatBn(a.market.openInterestBn)} និងបរិមាណជួញដូរ 24 ម៉ោង ${formatBn(a.market.volume24hBn)} ចំណែក ${b.name} មាន ${formatBn(b.market.openInterestBn)} និង ${formatBn(b.market.volume24hBn)}។ ${ownFigures} ${after(`${a.name} មាន`, withoutSource(a.users))} ហើយ ${after(`${b.name} មាន`, withoutSource(b.users))}។`,
    },
    {
      q: `${a.name} ឬ ${b.name}៖ មួយណាល្អជាងសម្រាប់អ្នកចាប់ផ្តើមដំបូង?`,
      a: `សម្រាប់គណនីដំបូង មានបីចំណុចសំខាន់៖ ការទិញគ្រីបតូបានងាយស្រួល, កន្លែងហាត់ជួញដូរ និងកម្រៃជួញដូរទាប។ ការទិញដោយកាត ឬការផ្ទេរប្រាក់តាមធនាគារ៖ ${state("fiat")}។ ជួញដូរសាកល្បង (Demo)៖ ${state("demoTrading")}។ Copy Trading៖ ${state("copyTrading")}។ ${fee(a, b, "spot")} ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ – ${a.name}៖ ${kyc(a)} ចំណែក ${b.name}៖ ${kyc(b)}។`,
    },
    {
      q: `${a.name} ឬ ${b.name}៖ មួយណាល្អជាងសម្រាប់ជួញដូរ Futures?`,
      a: `${fee(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `កម្រៃជួញដូរ ${a.name} ឬ ${b.name}៖ មួយណាទាបជាង?`,
      a: `${fee(a, b, "futures")} ${fee(a, b, "spot")} ទាំងនេះជាកម្រៃស្តង់ដារ (មិនមែន VIP)។ កម្រិត VIP និង Token របស់វេទិកា អាចបញ្ចុះកម្រៃបន្ថែមទៀត។`,
    },
    {
      q: `${a.name} និង ${b.name} បញ្ចុះកម្រៃ ពេលបង់កម្រៃដោយ Token របស់ខ្លួនដែរឬទេ?`,
      a: `${a.name}៖ ${a.tokenDiscount ? closed(a.tokenDiscount) : noTokenDiscount} ${b.name}៖ ${b.tokenDiscount ? closed(b.tokenDiscount) : noTokenDiscount}`,
    },
    { q: `${a.name} ឬ ${b.name}៖ មួយណាផ្តល់ Leverage ខ្ពស់ជាង?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${a.name} ឬ ${b.name}៖ មួយណាមានកាក់ច្រើនជាង?`,
      a: `${ownFigures} ${after(`${a.name} មាន`, withoutSource(a.assets))} ហើយ ${after(`${b.name} មាន`, withoutSource(b.assets))}។ វេទិកានីមួយៗរាប់ខុសគ្នា – ខ្លះរាប់កាក់ ខ្លះរាប់គូជួញដូរ – ដូច្នេះតួលេខទាំងពីរ មិនអាចប្រៀបធៀបគ្នាដោយផ្ទាល់បានទេ។`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({
      q: `${a.name} ឬ ${b.name} ${after("ប្រើបាននៅ", c.name)}ដែរឬទេ?`,
      a: countryPairAnswer(a, b, c),
    })),
    {
      q: `${a.name} និង ${b.name} តម្រូវឱ្យធ្វើ KYC ដែរឬទេ?`,
      a: `តម្រូវ។ វេទិកាទាំងពីរតម្រូវឱ្យអ្នកប្រើប្រាស់ថ្មី ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ។ ${a.name}៖ ${kyc(a)}។ ${b.name}៖ ${kyc(b)}។ បើចង់ជួញដូរដោយមិនផ្ទៀងផ្ទាត់អត្តសញ្ញាណ វេទិកាទាំងពីរមិនមែនជាជម្រើសទេ។`,
    },
    {
      q: `${a.name} ឬ ${b.name}៖ មួយណាមានសុវត្ថិភាពជាង?`,
      a: `គ្មានវេទិកាជួញដូរបែបមជ្ឈការណាមួយ ដែលគ្មានហានិភ័យទេ ដូច្នេះការប្រៀបធៀបដោយស្មោះត្រង់ គឺមើលលើអ្វីដែលវេទិកានីមួយៗផ្សព្វផ្សាយ។ ${a.name}៖ ${bare(a.regulation)}។ ភស្តុតាងទុនបម្រុង (Proof of Reserves) – ${bare(ia.reserves)}។ ${ia.fund ? closed(ia.fund) : noFund} ${b.name}៖ ${bare(b.regulation)}។ ភស្តុតាងទុនបម្រុង – ${bare(ib.reserves)}។ ${ib.fund ? closed(ib.fund) : noFund} ទោះប្រើវេទិកាណាក៏ដោយ ទុកលើវេទិកា តែប្រាក់ដែលអ្នកកំពុងជួញដូរប៉ុណ្ណោះ។`,
    },
    {
      q: `${a.name} និង ${b.name} មានអាជ្ញាប័ណ្ណ MiCA នៅសហភាពអឺរ៉ុបដែរឬទេ?`,
      a: `${a.name}៖ ${ia.mica ? `មាន – ${bare(ia.mica)}` : noMicaEntity}។ ${b.name}៖ ${ib.mica ? `មាន – ${bare(ib.mica)}` : noMicaEntity}។ ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `គ្មានទេ ក្នុងចំណោមផលិតផល ${featureList.length} ដែលយើងប្រៀបធៀប៖ គ្រប់ផលិតផលដែល ${x.name} បង្ហាញលើគេហទំព័ររបស់ខ្លួន ក៏មានបង្ហាញលើ ${y.name} ដែរ។`;
  const products: Faq[] = [
    { q: `${a.name} មានអ្វីខ្លះដែល ${b.name} គ្មាន?`, a: onlyA || nothing(a, b) },
    { q: `${b.name} មានអ្វីខ្លះដែល ${a.name} គ្មាន?`, a: onlyB || nothing(b, a) },
    {
      q: `${a.name} និង ${b.name} មាន Copy Trading, Bot ជួញដូរ, Options និងជួញដូរសាកល្បង (Demo) ដែរឬទេ?`,
      a: `Copy Trading៖ ${state("copyTrading")}។ Bot ជួញដូរ៖ ${state("tradingBots")}។ Options៖ ${state("options")}។ ជួញដូរសាកល្បង (Demo)៖ ${state("demoTrading")}។${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` ចំណុចណាដែលមានឈ្មោះវេទិកាតែមួយ មានន័យថាយើងរកមិនឃើញទំព័រផលិតផលនោះ លើគេហទំព័ររបស់វេទិកាមួយទៀត កាលពីថ្ងៃទី ${prettyDate(site.lastReviewed)}។` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `កូដណែនាំ ${a.name} និង ${b.name} គឺអ្វី?`,
      a: `កូដណែនាំ ${a.name} គឺ ${a.referralCode} – ${bare(a.referral.whereShort)}។ កូដណែនាំ ${b.name} គឺ ${b.referralCode} – ${bare(b.referral.whereShort)}។ កូដទាំងពីរប្រើដោយឥតគិតថ្លៃ ហើយមិនធ្វើឱ្យកម្រៃជួញដូរកើនឡើងទេ។`,
    },
    {
      q: `ប្រាក់រង្វាន់ចុះឈ្មោះ ${a.name} ឬ ${b.name}៖ មួយណាល្អជាង?`,
      a: `${a.name}៖ ${offer(a)}។ ${b.name}៖ ${offer(b)}។ រង្វាន់ស្វាគមន៍លើវេទិកាទាំងពីរ ភ្ជាប់នឹងលក្ខខណ្ឌ ដូចជាការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ, ការដាក់ប្រាក់ ឬបរិមាណជួញដូរ ហើយខុសគ្នាតាមប្រទេស ដូច្នេះត្រូវប្រៀបធៀបលក្ខខណ្ឌ មិនមែនត្រឹមតែតួលេខ ក្នុងចំណងជើងផ្សព្វផ្សាយទេ។`,
    },
    {
      q: `ភ្ជាប់កូដណែនាំ ${a.name} ឬ ${b.name} ក្រោយចុះឈ្មោះបានដែរឬទេ?`,
      a: `${a.name}៖ ${bare(a.referral.afterSignupShort)}។ ${b.name}៖ ${bare(b.referral.afterSignupShort)}។ លើវេទិកាទាំងពីរ ${safeWay}។`,
    },
    {
      q: `${a.name} និង ${b.name} ប្រើក្នុងពេលតែមួយបានដែរឬទេ?`,
      a: "បាន។ វេទិកាទាំងពីរជាក្រុមហ៊ុនដាច់ដោយឡែកពីគ្នា ដូច្នេះគណនីលើវេទិកាមួយ មិនប៉ះពាល់ដល់គណនីលើវេទិកាមួយទៀតទេ ហើយអ្នកជួញដូរជាច្រើនទុកប្រាក់លើវេទិកាពីរ។ កម្រិតកម្រៃ, ការណែនាំ និងរង្វាន់ ភ្ជាប់នឹងគណនីនីមួយៗ ហើយមិនផ្ទេរទៅវេទិកាមួយទៀតទេ។",
    },
    {
      q: `ផ្ទេរគ្រីបតូពី ${a.name} ទៅ ${b.name} ដោយរបៀបណា?`,
      a: `ជំហានទី 1៖ បើកគណនី ${b.name} ដោយប្រើកូដណែនាំ ${b.referralCode} ហើយបញ្ចប់ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ។ ជំហានទី 2៖ បិទ Position Futures និង Margin ដែលនៅបើកលើ ${a.name} – Position មិនអាចផ្ទេរ ពីវេទិកាមួយទៅវេទិកាមួយទៀតបានទេ។ ជំហានទី 3៖ លើ ${b.name} ចម្លងអាសយដ្ឋានដាក់ប្រាក់ សម្រាប់កាក់ និងបណ្តាញដែលអ្នកចង់ប្រើ។ ជំហានទី 4៖ ដកប្រាក់ពី ${a.name} ទៅអាសយដ្ឋាននោះលើបណ្តាញដូចគ្នា ហើយផ្ញើចំនួនតិចតួចសាកល្បងជាមុនសិន៖ ការផ្ទេរលើបណ្តាញខុស អាចបាត់បង់ប្រាក់។ ជំហានដូចគ្នានេះ ក៏ប្រើបានសម្រាប់ការផ្ទេរ ក្នុងទិសដៅផ្ទុយដែរ។`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} ឬ ${b.name}៖ មួយណាល្អជាង?`, faqs: verdict },
    { id: "fees", title: "កម្រៃជួញដូរ, Leverage និងកាក់", faqs: fees },
    { id: "countries", title: "ប្រទេស, KYC និងសុវត្ថិភាព", faqs: countries },
    { id: "products", title: "ផលិតផល", faqs: products },
    { id: "referral", title: "កូដណែនាំ និងការផ្ទេររវាងវេទិកាទាំងពីរ", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi: top, oi, mica }: HubFacts) =>
  `${names(lowF)} មានកម្រៃស្តង់ដារលើ Futures ទាបជាងគេ (${feePair(lowF[0].futuresFees)} Maker / Taker) ${names(top)} មាន Leverage ខ្ពស់ជាងគេ (${leverageOf(top[0])}x) ហើយ ${names(oi)} មានទីផ្សារ Derivatives ជ្រៅជាងគេ (Open Interest ${formatBn(oi[0].market.openInterestBn)})។ ${names(mica)} បញ្ជាក់អំពីវេទិកាដែលមានអាជ្ញាប័ណ្ណ MiCA សម្រាប់អ្នករស់នៅតំបន់សេដ្ឋកិច្ចអឺរ៉ុប (EEA)។ វេទិកាណាល្អជាងសម្រាប់អ្នក អាស្រ័យលើគូដែលអ្នកកំពុងសម្រេចចិត្ត – ជ្រើសរើសគូនោះនៅខាងក្រោម។`;

function hubFaqs({ all, ranked, lowF, lowS, hi: top, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "វេទិកាជួញដូរគ្រីបតូណា មានកម្រៃជួញដូរទាបជាងគេ?",
      a: `នៅកម្រិតស្តង់ដារ ${names(lowF)} មានកម្រៃ Futures ទាបជាងគេ គឺ ${feePair(lowF[0].futuresFees)} (Maker / Taker) ហើយ ${names(lowS)} មានកម្រៃ Spot ទាបជាងគេ គឺ ${feePair(lowS[0].spotFees)}។ វេទិកាផ្សេងទៀត៖ ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} ${feePair(e.futuresFees)} លើ Futures និង ${feePair(e.spotFees)} លើ Spot`)
        .join("; ")}។ កម្រិត VIP និង Token របស់វេទិកា អាចបញ្ចុះអត្រាទាំងនេះបន្ថែមទៀត។`,
    },
    {
      q: "វេទិកាជួញដូរគ្រីបតូណា ផ្តល់ Leverage ខ្ពស់ជាងគេ?",
      a: `${names(top)}៖ ${bare(top[0].maxLeverage)}។ វេទិកាផ្សេងទៀត៖ ${joinList(ranked.filter((e) => !top.includes(e)).map((e) => `${e.name} ${leverageOf(e)}x`))}។ ${leverageRiskFirst}`,
    },
    {
      q: "វេទិកាជួញដូរគ្រីបតូណា មានទីផ្សារ Futures ជ្រៅជាងគេ?",
      a: `វាស់តាម Open Interest លើ${cmcRanking} (ថ្ងៃទី ${marketDate})៖ ${joinList(ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`))}។ ${deeperMeans}`,
    },
    {
      q: "វេទិកាជួញដូរណាខ្លះ មានវេទិកាសម្រាប់ EEA ដែលមានអាជ្ញាប័ណ្ណ MiCA?",
      a: `${joinList(mica.map((e) => `${e.name} (${bare(altInfo(e).mica)})`))}។ ${names(noMica)} ${noMicaEntity}។ ${regionalNote}`,
    },
    {
      q: "វេទិកាជួញដូរណាខ្លះ អនុញ្ញាតឱ្យភ្ជាប់កូដណែនាំក្រោយចុះឈ្មោះ?",
      a: `${later.map((e) => `${e.name}៖ ${bare(e.referral.afterSignupShort)}`).join("។ ")}។ លើ ${names(signupOnly)} កូដមានប្រសិទ្ធភាពតែនៅពេលចុះឈ្មោះ ឬមិនមានការបញ្ជាក់អំពីវិធីភ្ជាប់ នៅពេលក្រោយ – នៅគ្រប់វេទិកា ${safeWay}។`,
    },
    {
      q: "ការប្រៀបធៀបទាំងនេះធ្វើឡើងដោយរបៀបណា?",
      a: `យើងអានគ្រប់តួលេខពីគេហទំព័រ ឬមជ្ឈមណ្ឌលជំនួយរបស់វេទិកាជួញដូរផ្ទាល់ – តារាងកម្រៃ, លក្ខខណ្ឌ, បញ្ជីប្រទេសរឹតត្បិត និងទំព័រផលិតផល – ហើយទំព័រនីមួយៗរាយបញ្ជីប្រភពរបស់ខ្លួន។ Open Interest, បរិមាណជួញដូរ និងចំនួនទីផ្សារ Derivatives មកពី${cmcRanking}។ វេទិកាណានាំមុខលើចំណុចណាមួយ គឺកំណត់ដោយផ្ទាល់ពីតួលេខទាំងនោះ – យើងមិនបង្កើតចំណាត់ថ្នាក់ដោយខ្លួនឯងទេ។ ការពិនិត្យបច្ចុប្បន្នធ្វើឡើងថ្ងៃទី ${date}។`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const km: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row after "នាំមុខផ្នែក" ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "កម្រៃ Futures (Maker / Taker)", topic: "កម្រៃ Futures" },
    spotFees: { label: "កម្រៃ Spot (Maker / Taker)", topic: "កម្រៃ Spot" },
    leverage: { label: "Leverage អតិបរមា", topic: "Leverage អតិបរមា" },
    openInterest: { label: "Open Interest លើទីផ្សារ Derivatives", topic: "Open Interest" },
    volume: { label: "បរិមាណជួញដូរ Derivatives 24 ម៉ោង", topic: "បរិមាណជួញដូរ Derivatives 24 ម៉ោង" },
    markets: { label: "ចំនួនទីផ្សារ Derivatives", topic: "ចំនួនទីផ្សារ Derivatives" },
    users: { label: "អ្នកប្រើប្រាស់ (តួលេខដែលវេទិកាប្រកាស)", topic: "ចំនួនអ្នកប្រើប្រាស់" },
    assets: { label: "ទ្រព្យសកម្មដែលបានចុះបញ្ជី (តួលេខដែលវេទិកាប្រកាស)", topic: "" },
    founded: { label: "ឆ្នាំបង្កើត", topic: "" },
    products: { label: (compared) => `ផលិតផលដែលរកឃើញ (ក្នុងចំណោម ${compared} ដែលប្រៀបធៀប)`, topic: "ចំនួនផលិតផល" },
    countries: { label: (compared) => `ប្រទេសរឹតត្បិត (ក្នុងចំណោម ${compared} ប្រទេសដែលប្រៀបធៀប)`, topic: "ប្រទេសដែលអាចប្រើបាន" },
    mica: { label: "វេទិកា EEA ដែលមានអាជ្ញាប័ណ្ណ MiCA", topic: "អាជ្ញាប័ណ្ណ MiCA" },
    kyc: { label: "ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ (KYC)", topic: "" },
    addLater: { label: "ភ្ជាប់កូដណែនាំនៅពេលក្រោយបានដែរឬទេ?", topic: "ការភ្ជាប់កូដណែនាំនៅពេលក្រោយ" },
    offer: { label: "ប្រូម៉ូសិនសម្រាប់អ្នកប្រើប្រាស់ថ្មី", topic: "" },
    reserves: { label: "ភស្តុតាងទុនបម្រុង", topic: "" },
    fund: { label: "មូលនិធិការពារ", topic: "" },
  },
  countOf: (count, of) => `${count} ក្នុងចំណោម ${of}`,
  noMica: "មិនបានបញ្ជាក់",
  noFund: "មិនបានបញ្ជាក់",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    /** Both names with their Khmer spellings and the month, as in English; then the richest tail that keeps the title within 65 characters. */
    title: (a, b, shortMonthYear) => {
      const head = `${named(a)} vs ${named(b)} (${shortMonthYear})`;
      return fit(65, `${head}៖ កម្រៃជួញដូរ, Leverage និង KYC`, `${head}៖ កម្រៃជួញដូរ និង Leverage`, `${head}៖ កម្រៃជួញដូរ`, `${head}៖ ប្រៀបធៀប`, head);
    },
    /** 140–160 characters for every pair: the longest variant that fits. */
    description: (a, b, monthYear) => {
      const body = `កម្រៃ Futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, Leverage ${leverageOf(a)}x vs ${leverageOf(b)}x, ផលិតផល, ប្រទេស, KYC និងកូដណែនាំ`;
      return fit(
        160,
        `${a.name} vs ${b.name}៖ ${body} – ទិន្នន័យផ្លូវការ បានពិនិត្យខែ${monthYear}។`,
        `${a.name} vs ${b.name}៖ ${body} – ទិន្នន័យផ្លូវការ ពិនិត្យខែ${monthYear}។`,
        `${a.name} vs ${b.name}៖ ${body} – ទិន្នន័យផ្លូវការខែ${monthYear}។`,
      );
    },
    keywords: (a, b, former) => {
      const ra = readingOf(a.slug, locale);
      const rb = readingOf(b.slug, locale);
      const va = keywordVariants[a.slug] ?? ra;
      const vb = keywordVariants[b.slug] ?? rb;
      return [
        `${a.name} vs ${b.name}`,
        `${b.name} vs ${a.name}`,
        `${a.name} ឬ ${b.name}`,
        `${a.name} ឬ ${b.name} មួយណាល្អជាង`,
        `ប្រៀបធៀប ${a.name} និង ${b.name}`,
        `កម្រៃជួញដូរ ${a.name} និង ${b.name}`,
        `${a.name} vs ${b.name} Futures`,
        `${a.name} ល្អជាង ${b.name} ដែរឬទេ`,
        `${b.name} ល្អជាង ${a.name} ដែរឬទេ`,
        `កូដណែនាំ ${a.name} និង ${b.name}`,
        ...(ra && rb ? [`${ra} vs ${rb}`, `${ra} ឬ ${rb}`, `ប្រៀបធៀប ${ra} និង ${rb}`] : []),
        ...(va && vb && (va !== ra || vb !== rb) ? [`${va} ឬ ${vb}`] : []),
        `${a.name} vs ${b.name} fees`,
        `${a.name} or ${b.name}`,
        ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`, `${old} ឬ ${other}`]),
      ];
    },

    crumbHome: "ទំព័រដើម",
    crumbHub: "ប្រៀបធៀបវេទិកាជួញដូរ",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name} ជាវេទិកាជួញដូរដែលពីមុនមានឈ្មោះថា ${formerName}។`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${named(a)} និង ${named(b)} ជាវេទិកាជួញដូររូបិយប័ណ្ណគ្រីបតូបែបមជ្ឈការ (CEX) ទាំងពីរ សម្រាប់ជួញដូរ Spot និង Futures ដែលប្រើ Leverage ហើយវេទិកាទាំងពីរមានកម្មវិធីណែនាំ សម្រាប់អ្នកប្រើប្រាស់ថ្មី។ ${bare(pickA)}។ ${bare(pickB)}។${formerNote ? ` ${formerNote}` : ""} ទំព័រប្រៀបធៀបមួយទល់មួយនេះ ដាក់កម្រៃជួញដូរ, Leverage, ផលិតផល, ប្រទេសដែលអាចប្រើបាន, លក្ខខណ្ឌផ្ទៀងផ្ទាត់អត្តសញ្ញាណ និងប្រូម៉ូសិនកូដណែនាំរបស់វេទិកាទាំងពីរ ឱ្យឃើញក្បែរគ្នា – គ្រប់តួលេខ យើងអានពីគេហទំព័ររបស់វេទិកាផ្ទាល់ កាលពីថ្ងៃទី ${date}។`,

    toc: {
      "at-a-glance": "ទិដ្ឋភាពរួម",
      verdict: "គួរជ្រើសរើសមួយណា",
      fees: "កម្រៃជួញដូរ",
      leverage: "Leverage និងជម្រៅទីផ្សារ",
      products: "ផលិតផល",
      countries: "ប្រទេស",
      kyc: "ការផ្ទៀងផ្ទាត់ (KYC)",
      safety: "សុវត្ថិភាព និងបទប្បញ្ញត្តិ",
      referral: "កូដណែនាំ",
      "pros-cons": "គុណសម្បត្តិ និងគុណវិបត្តិ",
      faq: "សំណួរដែលសួរញឹកញាប់",
      sources: "ប្រភព",
    },
    onThisPage: "នៅលើទំព័រនេះ",

    /* Hero */
    updated: (date) => `បានពិនិត្យ និងធ្វើបច្ចុប្បន្នភាពថ្ងៃទី ${date}`,
    h1: (a, b) => `${named(a)} vs ${named(b)}៖ ប្រៀបធៀបកម្រៃជួញដូរ, Leverage និងសុវត្ថិភាព`,
    quickAnswer: "ចម្លើយខ្លី",
    keyFigures: "តួលេខសំខាន់ៗ",
    chips: (a, b, oiA, oiB) => [
      `Futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `Leverage ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `Open Interest ${oiA} vs ${oiB}`,
    ],
    boxTitle: "ចុះឈ្មោះដោយប្រើកូដណែនាំ",
    boxNote: "កូដទាំងពីរប្រើដោយឥតគិតថ្លៃ ហើយមិនដែលធ្វើឱ្យកម្រៃជួញដូរកើនឡើងទេ។",
    codeLabel: (e) => `កូដណែនាំ ${e.name}`,
    boxRisk: () => (
      <>
        ការជួញដូរដោយប្រើ Leverage មានហានិភ័យខ្ពស់។ វេទិកាទាំងពីរ មិនបើកឱ្យប្រើនៅគ្រប់ប្រទេសទេ – មើលផ្នែក<a href="#countries">ប្រទេស</a>។
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name}៖ ទិដ្ឋភាពរួម`,
    glanceText: (a, b, s) =>
      `ទោះអ្នកស្វែងរក «${a.name} vs ${b.name}» ឬ «${b.name} vs ${a.name}» ក៏ដោយ ការប្រៀបធៀបនៅតែដូចគ្នា។ ក្នុងចំណោម ${s.measurable} ចំណុចដែលតួលេខអាចសម្រេចបាន ${tally(a, b, s)}។ ចំណុចទាំងនេះមិនសំខាន់ស្មើគ្នាទេ – សម្រាប់អ្នកជួញដូរសកម្ម កម្រៃជួញដូរទាបជាង សំខាន់ជាងបញ្ជីកាក់វែងជាង – ដូច្នេះ ផ្តោតលើចំណុច ដែលត្រូវនឹងរបៀបជួញដូររបស់អ្នក។`,
    glanceCaption: (a, b) =>
      `${a.name} vs ${b.name}៖ កម្រៃជួញដូរ, Leverage, ទំហំទីផ្សារ, ផលិតផល, ប្រទេស, ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ និងលក្ខខណ្ឌកូដណែនាំ`,
    compared: "ចំណុចប្រៀបធៀប",
    ahead: "នាំមុខ",
    level: "ស្មើគ្នា",
    glanceNote: (marketDate, date) =>
      `កម្រៃជួញដូរ៖ កម្រិតស្តង់ដារ (មិនមែន VIP)។ Open Interest, បរិមាណជួញដូរ និងចំនួនទីផ្សារ៖ ${cmcRanking} ថ្ងៃទី ${marketDate}។ «–» មានន័យថា តម្លៃទាំងពីរមិនអាចតម្រៀបធៀបគ្នាបាន។ ព័ត៌មានផ្សេងទៀតទាំងអស់ យើងអានពីគេហទំព័ររបស់វេទិកាផ្ទាល់ កាលពីថ្ងៃទី ${date}។`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} ឬ ${b.name}៖ គួរជ្រើសរើសមួយណា?`,
    verdictText:
      "គ្មានអ្នកឈ្នះលើគ្រប់ផ្នែកទេ – វេទិកានីមួយៗបង្កើតឡើង សម្រាប់អ្នកជួញដូរប្រភេទខុសៗគ្នា។ ប្រអប់ទាំងពីរខាងក្រោមបង្ហាញថា វេទិកានីមួយៗសមនឹងអ្នកណា និងនាំមុខវេទិកាមួយទៀតត្រង់ណាខ្លះ តាមតួលេខ។",
    bestFor: (role) => `ចំណុចខ្លាំង៖ ${role}`,
    chooseIf: (e) => `ជ្រើសរើស ${e.name} ប្រសិនបើ៖`,
    aheadOf: (e, other) => `ចំណុចដែល ${e.name} នាំមុខ ${other.name}`,
    noAdvantage: "គ្មានចំណុចនាំមុខដែលវាស់វែងបាន លើចំណុចដែលយើងប្រៀបធៀបទេ។",
    thinkTwice: "គិតឱ្យបានច្បាស់សិន ប្រសិនបើ៖",
    codeButton: (e) => `កូដណែនាំ ${e.name}៖ ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `កម្រៃជួញដូរ ${a.name} vs ${b.name}`,
    feesModel:
      "វេទិកាទាំងពីរប្រើគំរូ Maker / Taker៖ ការបញ្ជា Limit ដែលបន្ថែម Liquidity បង់កម្រៃ Maker ចំណែកការបញ្ជាដែលដក Liquidity ចេញ បង់កម្រៃ Taker។",
    feesCaption: (a, b) => `កម្រៃស្តង់ដារលើ Spot និង Futures៖ ${a.name} និង ${b.name}`,
    exchange: "វេទិកាជួញដូរ",
    futuresMaker: "Futures Maker",
    futuresTaker: "Futures Taker",
    spotMaker: "Spot Maker",
    spotTaker: "Spot Taker",
    otherMarkets: "ទីផ្សារផ្សេងទៀត (Maker / Taker)",
    feesNote: (date) =>
      `កម្រៃស្តង់ដារ (មិនមែន VIP) តាមការប្រកាសរបស់វេទិកានីមួយៗ បានពិនិត្យថ្ងៃទី ${date}។ កម្រៃអាចផ្លាស់ប្តូរ – ពិនិត្យលើវេទិកាម្តងទៀតមុនពេលជួញដូរ។`,
    tokenTitle: "ការបញ្ចុះកម្រៃដោយ Token និងលក្ខខណ្ឌលម្អិត",
    noTokenDiscount: "វេទិកានេះមិនបានប្រកាសការបញ្ចុះកម្រៃ ពេលបង់កម្រៃដោយ Token របស់ខ្លួនទេ។",

    /* Leverage */
    leverageTitle: "Leverage និងជម្រៅទីផ្សារ",
    leverageRisk:
      "Leverage ខ្ពស់ធ្វើឱ្យហានិភ័យ Liquidation (ការបិទ Position ដោយបង្ខំ) កើនឡើងយ៉ាងខ្លាំង – កម្រិតអតិបរមាជាដែនកំណត់ មិនមែនជាអនុសាសន៍ទេ។",
    leverageCaption: (a, b) => `Leverage និងទិន្នន័យទីផ្សារ Derivatives៖ ${a.name} និង ${b.name}`,
    maxLeverage: "Leverage អតិបរមា",
    openInterest: "Open Interest",
    volume24h: "បរិមាណជួញដូរ Derivatives 24 ម៉ោង",
    derivativesMarkets: "ទីផ្សារ Derivatives",
    listedAssets: "ទ្រព្យសកម្មដែលបានចុះបញ្ជី (តួលេខដែលវេទិកាប្រកាស)",
    leverageNote: (marketDate) =>
      `ទិន្នន័យទីផ្សារ៖ ${cmcRanking} ថ្ងៃទី ${marketDate}។ វេទិកានីមួយៗ រាប់ទ្រព្យសកម្មដែលបានចុះបញ្ជីខុសគ្នា – ខ្លះរាប់កាក់ ខ្លះរាប់គូជួញដូរ។`,

    /* Products */
    productsTitle: (a, b) => `ផលិតផល៖ ${a.name} និង ${b.name} ផ្តល់អ្វីខ្លះ`,
    productsSame: (compared) =>
      `វេទិកាទាំងពីរបង្ហាញផលិតផលទាំង ${compared} ដែលយើងប្រៀបធៀប នៅលើគេហទំព័ររបស់ខ្លួន – ភាពខុសគ្នាស្ថិតនៅលើព័ត៌មានលម្អិត។`,
    productsLegend: (date) =>
      `សញ្ញាធីកមានន័យថា វេទិកាបង្ហាញផលិតផលនោះលើគេហទំព័ររបស់ខ្លួន។ សញ្ញាដាច់មានន័យថា យើងរកមិនឃើញទំព័រផលិតផលនោះនៅទីនោះ កាលពីថ្ងៃទី ${date}។`,
    productsCaption: (a, b) => `ផលិតផលដែល ${a.name} និង ${b.name} ផ្តល់`,
    product: "ផលិតផល",
    offered: "មាន",
    notOffered: "គ្មាន",
    noPage: "រកមិនឃើញទំព័រលើគេហទំព័ររបស់វេទិកា",

    /* Countries */
    countriesTitle: (a, b) => `ប្រទេស៖ ${a.name} និង ${b.name} ប្រើបាននៅទីណាខ្លះ`,
    countriesText: (compared, differing) =>
      `សម្រាប់ ${compared} ប្រទេស តារាងនេះបង្ហាញ អ្វីដែលលក្ខខណ្ឌរបស់វេទិកានីមួយៗកំណត់។ វេទិកាទាំងពីរខុសគ្នានៅ ${differing} ប្រទេសក្នុងចំណោមនោះ។ «${ct.statusLabel.regional}» មានន័យថា វេទិកាផ្តល់សេវាដល់ប្រទេសនោះ តាមរយៈវេទិកាដាច់ដោយឡែក ដែលមានផលិតផល, កម្រៃជួញដូរ និងដែនកំណត់ផ្ទាល់ខ្លួន។`,
    countriesCaption: (a, b) => `ប្រទេសដែល ${a.name} និង ${b.name} អាចប្រើបាន`,
    country: "ប្រទេស",
    countriesNote: (date) =>
      `«${ct.statusLabel.open}» មានន័យថា ប្រទេសនោះមិនមាន ក្នុងបញ្ជីប្រទេសរឹតត្បិតរបស់វេទិកា កាលពីថ្ងៃទី ${date} – នេះមិនធានាថាគ្រប់ផលិតផលមាននៅទីនោះទេ។ វេទិកាទាំងពីរហាមប្រើ VPN ឬព័ត៌មានមិនពិត ដើម្បីគេចពីការរឹតត្បិត។`,
    differTitle: "ចំណុចដែលវេទិកាទាំងពីរខុសគ្នា",
    differQuestion: (a, b, countryName) => `${a.name} ឬ ${b.name} ${after("នៅ", countryName)}?`,
    neither: (a, b, hrefA, hrefB) => (
      <>
        វេទិកាទាំងពីរមិនបើកសេវា នៅកន្លែងដែលអ្នករស់នៅទេឬ? តារាងប្រទេសនៅលើទំព័រជម្រើសជំនួស បង្ហាញថាវេទិកាផ្សេងណាខ្លះ ទទួលអ្នកមកពីប្រទេសរបស់អ្នក៖{" "}
        <Link href={hrefA}>ជម្រើសជំនួស {a.name} តាមប្រទេស</Link> · <Link href={hrefB}>ជម្រើសជំនួស {b.name} តាមប្រទេស</Link>។
      </>
    ),
    restrictedTitle: "ប្រទេសរឹតត្បិត និងវេទិកាប្រចាំតំបន់",
    whereNot: (e) => `${e.name} ប្រើមិនបាននៅប្រទេសណាខ្លះ?`,
    regionalPlatforms: "វេទិកាប្រចាំតំបន់៖",

    /* Verification */
    kycTitle: (a, b) => `ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ (KYC)៖ ${a.name} vs ${b.name}`,
    kycText:
      "វេទិកាទាំងពីរតម្រូវឱ្យអ្នកប្រើប្រាស់ថ្មី ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ ដូច្នេះគ្មានវេទិកាណាជាជម្រើស សម្រាប់ជួញដូរដោយមិនធ្វើ KYC ទេ។ ភាពខុសគ្នាស្ថិតនៅលើ អ្វីដែលគណនីមិនទាន់ផ្ទៀងផ្ទាត់ នៅតែអាចធ្វើបាន និងរបៀបដែលការត្រួតពិនិត្យដំណើរការ។",
    documents: "ឯកសារ៖",
    minAge: "អាយុអប្បបរមា៖",
    howToRegister: (e) => `របៀបបង្កើតគណនី ${e.name} និងផ្ទៀងផ្ទាត់អត្តសញ្ញាណ មួយជំហានម្តងៗ`,

    /* Safety */
    safetyTitle: (a, b) => `សុវត្ថិភាព និងបទប្បញ្ញត្តិ៖ ${a.name} vs ${b.name}`,
    safetyText:
      "គ្មានវេទិកាជួញដូរបែបមជ្ឈការណាមួយ ដែលគ្មានហានិភ័យទេ។ អ្វីដែលអាចប្រៀបធៀបបាន គឺព័ត៌មានដែលវេទិកានីមួយៗ ផ្សព្វផ្សាយអំពីខ្លួនឯង៖ ទទួលអាជ្ញាប័ណ្ណនៅទីណា បង្ហាញភស្តុតាងទុនបម្រុង (Proof of Reserves) ដែរឬទេ និងមានមូលនិធិសម្រាប់ករណីបន្ទាន់ដែរឬទេ។",
    safetyCaption: (a, b) => `បទប្បញ្ញត្តិ, ភស្តុតាងទុនបម្រុង និងមូលនិធិការពារ៖ ${a.name} និង ${b.name}`,
    licences: "អាជ្ញាប័ណ្ណដែលវេទិកាបញ្ជាក់",
    entity: "នីតិបុគ្គលប្រតិបត្តិ",
    reserves: "ភស្តុតាងទុនបម្រុង",
    fund: "មូលនិធិការពារ",
    founded: "ឆ្នាំបង្កើត",
    isSafe: (e) => `${e.name} មានសុវត្ថិភាពដែរឬទេ?`,
    safetyDetail: (e) => `សុវត្ថិភាព និងប្រទេសដែលប្រើ ${e.name} បាន៖ ព័ត៌មានលម្អិត`,

    /* Referral codes */
    referralTitle: (a, b) => `កូដណែនាំ និងប្រូម៉ូសិនសម្រាប់អ្នកប្រើប្រាស់ថ្មី៖ ${a.name} vs ${b.name}`,
    referralText:
      "ទោះជ្រើសរើសវេទិកាណាក៏ដោយ ចុះឈ្មោះដោយប្រើកូដណែនាំ៖ កូដនេះមិនគិតថ្លៃ មិនដែលធ្វើឱ្យកម្រៃជួញដូរកើនឡើង ហើយបើកសិទ្ធិទទួលប្រូម៉ូសិន សម្រាប់អ្នកប្រើប្រាស់ថ្មីរបស់វេទិកា។ ប្រយ័ត្នជួរចុងក្រោយ – កូដដែលភ្លេចបញ្ចូល មិនតែងតែអាចភ្ជាប់នៅពេលក្រោយបានទេ។",
    referralCaption: (a, b) => `កូដណែនាំ និងប្រូម៉ូសិនសម្រាប់អ្នកប្រើប្រាស់ថ្មី៖ ${a.name} និង ${b.name}`,
    referralCodeOf: (e) => `កូដណែនាំ ${e.name}`,
    referralCode: "កូដណែនាំ",
    newUserOffer: "ប្រូម៉ូសិនសម្រាប់អ្នកប្រើប្រាស់ថ្មី",
    inviteeReward: "អ្វីដែលអ្នកទទួលបាន ជាអ្នកចុះឈ្មោះតាមការណែនាំ",
    covers: "កូដតែមួយប្រើបានសម្រាប់",
    whereCode: "បញ្ចូលកូដនៅត្រង់ណា",
    addLater: "ភ្ជាប់នៅពេលក្រោយបានដែរឬទេ?",
    referralNote: (date) =>
      `ប្រូម៉ូសិនបានពិនិត្យថ្ងៃទី ${date}។ រង្វាន់ស្វាគមន៍ផ្អែកលើភារកិច្ច តម្រូវឱ្យផ្ទៀងផ្ទាត់អត្តសញ្ញាណ ហើយខុសគ្នាតាមប្រទេស។`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `គុណសម្បត្តិ និងគុណវិបត្តិរបស់ ${a.name} និង ${b.name}`,
    pros: "គុណសម្បត្តិ",
    cons: "គុណវិបត្តិ",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – សំណួរដែលសួរញឹកញាប់`,
    faqText: (count, a, b) =>
      `សំណួរ ${count} អំពីការជ្រើសរើសរវាង ${a.name} និង ${b.name}៖ កម្រៃជួញដូរ, Leverage, ប្រទេស, ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ, ផលិតផល និងកូដណែនាំ។`,

    /* Sources */
    sourcesTitle: "ប្រភព៖ តួលេខទាំងនេះមកពីណា",
    sourcesText: (date, marketDate) =>
      `ព័ត៌មានទាំងអស់នៅលើទំព័រនេះ អំពីកម្រៃជួញដូរ, Leverage, ផលិតផល, ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ, ប្រទេស, អាជ្ញាប័ណ្ណ, ទុនបម្រុង និងលក្ខខណ្ឌកូដណែនាំ យើងអានពីគេហទំព័រ និងមជ្ឈមណ្ឌលជំនួយរបស់វេទិកាទាំងពីរផ្ទាល់ កាលពីថ្ងៃទី ${date}។ Open Interest, បរិមាណជួញដូរ និងចំនួនទីផ្សារ Derivatives មកពី${cmcRanking} (ថ្ងៃទី ${marketDate})។ វេទិកាជួញដូរអាចផ្លាស់ប្តូរលក្ខខណ្ឌ ដោយមិនជូនដំណឹងជាមុន ដូច្នេះទំព័រខាងក្រោមជាប្រភពចុងក្រោយ។`,
    officialPages: (e, count) => `${e.name}៖ ទំព័រផ្លូវការ ${count}`,

    /* More comparisons */
    moreTitle: "ការប្រៀបធៀបផ្សេងទៀត",
    against: (e) => `${e.name} ធៀបនឹងវេទិកាផ្សេងទៀត`,
    allAlternatives: (e) => `ជម្រើសជំនួស ${e.name} ទាំងអស់`,
    allComparisons: "ការប្រៀបធៀបវេទិកាជួញដូរទាំងអស់",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>ការព្រមានអំពីហានិភ័យ៖</strong> Derivatives គ្រីបតូជាឧបករណ៍ស្មុគស្មាញ។ Leverage ពង្រីកទាំងប្រាក់ចំណេញ និងការខាតបង់ ហើយអ្នកអាចបាត់បង់ Margin ទាំងអស់ ក្នុងរយៈពេលតែប៉ុន្មាននាទី។ ទំព័រនេះសម្រាប់ផ្តល់ព័ត៌មានតែប៉ុណ្ណោះ មិនមែនជាដំបូន្មានហិរញ្ញវត្ថុទេ។ យើងអាចទទួលបានកម្រៃជើងសារ ប្រសិនបើអ្នកចុះឈ្មោះតាមតំណភ្ជាប់របស់យើង – មើល
        {""}<Link href={disclosureHref}>ការបញ្ជាក់អំពីកម្រៃជើងសារ</Link>។ ការណ៍នេះមិនផ្លាស់ប្តូរតួលេខទេ៖ តួលេខទាំងអស់មកពីវេទិកាជួញដូរផ្ទាល់។
      </>
    ),
    ctaTitle: (a, b) => `${a.name} ឬ ${b.name}? ចាប់ផ្តើមជាមួយកូដណែនាំ`,
    ctaText: "គណនីតែមួយសម្រាប់ Spot និង Futures លើវេទិកាណាមួយក៏បាន ដោយមិនមានថ្លៃបន្ថែម។",
    ctaButton: "ប្រៀបធៀបវេទិកាផ្សេងទៀត",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) => `ប្រៀបធៀបវេទិកាជួញដូរគ្រីបតូ (${shortMonthYear})៖ ${pairs} គូ មួយទល់មួយ`,
    /** 140–160 characters: the longest variant that fits. */
    description: (exchangeNames, pairs, monthYear) =>
      fit(
        160,
        `${exchangeNames}៖ ប្រៀបធៀបមួយទល់មួយ ${pairs} គូ លើកម្រៃជួញដូរ, Leverage, ប្រទេស, KYC និងកូដណែនាំ – ទិន្នន័យផ្លូវការ បានពិនិត្យខែ${monthYear}។`,
        `${exchangeNames}៖ ប្រៀបធៀបមួយទល់មួយ ${pairs} គូ លើកម្រៃជួញដូរ, Leverage, ប្រទេស, KYC និងកូដណែនាំ – ទិន្នន័យផ្លូវការ ពិនិត្យខែ${monthYear}។`,
        `${exchangeNames}៖ ប្រៀបធៀបមួយទល់មួយ ${pairs} គូ លើកម្រៃជួញដូរ, Leverage, ប្រទេស, KYC និងកូដណែនាំ – ទិន្នន័យផ្លូវការខែ${monthYear}។`,
        `${exchangeNames}៖ ${pairs} គូ មួយទល់មួយ លើកម្រៃជួញដូរ, Leverage, ប្រទេស, KYC និងកូដណែនាំ – ទិន្នន័យផ្លូវការខែ${monthYear}។`,
      ),
    crumbHome: "ទំព័រដើម",
    crumbPage: "ប្រៀបធៀបវេទិកាជួញដូរ",
    listName: "ប្រៀបធៀបមួយទល់មួយ វេទិកាជួញដូរគ្រីបតូ",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `បានពិនិត្យ និងធ្វើបច្ចុប្បន្នភាពថ្ងៃទី ${date}`,
    h1: (pairs) => `ប្រៀបធៀបវេទិកាជួញដូរគ្រីបតូ៖ ប្រៀបធៀបមួយទល់មួយ ${pairs} គូ`,
    lead: (exchangeCount) =>
      `យើងប្រៀបធៀបវេទិកាជួញដូររូបិយប័ណ្ណគ្រីបតូ ${exchangeCount} គ្រប់គូ លើចំណុចដូចគ្នា៖ កម្រៃជួញដូរ, Leverage, ជម្រៅទីផ្សារ, ផលិតផល, ប្រទេសដែលអាចប្រើបាន, ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ, បទប្បញ្ញត្តិ និងប្រូម៉ូសិនកូដណែនាំ។ ការប្រៀបធៀបនីមួយៗ ប្រើតួលេខពីគេហទំព័ររបស់វេទិកាជួញដូរផ្ទាល់។`,
    quickAnswer: "ចម្លើយខ្លី",

    pickTitle: "ជ្រើសរើសវេទិកាពីរដើម្បីប្រៀបធៀប",
    pickText: (others) =>
      `ប្រអប់នីមួយៗដាក់វេទិកាមួយ ទល់នឹងវេទិកាផ្សេងទៀតទាំង ${others}។ គូនីមួយៗមានទំព័រតែមួយ ដូច្នេះ «Binance vs OKX» និង «OKX vs Binance» នាំទៅការប្រៀបធៀបតែមួយ។`,
    alternativesOf: (e) => `ជម្រើសជំនួស ${e.name}`,
    referralCodeOf: (e) => `កូដណែនាំ ${e.name}`,

    tableTitle: (exchangeCount) => `វេទិកាជួញដូរទាំង ${exchangeCount} ដាក់ក្បែរគ្នា`,
    tableText: "ប្រូម៉ូសិនសម្រាប់អ្នកប្រើប្រាស់ថ្មី, កម្រៃស្តង់ដារ (មិនមែន VIP), Leverage និងជម្រៅទីផ្សាររបស់វេទិកានីមួយៗ ក្នុងតារាងតែមួយ។",
    tableNote: (date, marketDate) =>
      `កម្រៃជួញដូរ៖ កម្រិតស្តង់ដារ តាមការប្រកាសរបស់វេទិកានីមួយៗ បានពិនិត្យថ្ងៃទី ${date}។ Open Interest និងចំនួនទីផ្សារ៖ CoinMarketCap ថ្ងៃទី ${marketDate}។`,

    alternativesTitle: "វេទិកាមួយធៀបនឹងវេទិកាផ្សេងទៀតទាំងអស់",
    alternativesText: (others) =>
      `មិនមែនកំពុងរើសរវាងវេទិកាពីរ ប៉ុន្តែកំពុងរកវេទិកាជំនួសមែនទេ? ទំព័រជម្រើសជំនួសវាស់វែងវេទិកាមួយ ធៀបនឹងវេទិកាផ្សេងទៀតទាំង ${others} ក្នុងពេលតែមួយ ហើយបង្ហាញថាវេទិកាណាខ្លះ ទទួលអ្នកមកពីប្រទេសរបស់អ្នក។`,

    faqTitle: "ប្រៀបធៀបវេទិកាជួញដូរ – សំណួរដែលសួរញឹកញាប់",

    ctaTitle: "សម្រេចចិត្តបានហើយ? ចុះឈ្មោះដោយប្រើកូដណែនាំ",
    ctaText: (exchangeCount) =>
      `កូដដែលបានផ្ទៀងផ្ទាត់ សម្រាប់វេទិកាជួញដូរទាំង ${exchangeCount} – គណនីតែមួយសម្រាប់ Spot និង Futures ដោយមិនមានថ្លៃបន្ថែម។`,
    ctaButton: "មើលកូដណែនាំទាំងអស់",
  },
};
