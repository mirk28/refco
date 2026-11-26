/**
 * The head-to-head pages ("/bn/<a>-vs-<b>") and the comparison hub ("/bn/compare") in Bengali.
 * Same keys as `./en.tsx`, written natively for readers in Bangladesh (standard চলিত ভাষা, polite "আপনি").
 *
 * Wording: "এক্সচেঞ্জ", "ফি", "রেফারেল কোড", "লিভারেজ", "স্পট", "ফিউচার্স"; KYC and MiCA stay in Latin letters.
 * The pages call themselves ‘মুখোমুখি তুলনা’, the hub ‘এক্সচেঞ্জ তুলনা’; the better value of a row is ‘এগিয়ে’, a tie
 * ‘সমান’. Between two names the pages say "বনাম" ("Binance বনাম OKX"; the Latin "vs" only in the keywords), between
 * two figures in the chips and the description "vs" stays "vs".
 * Names stay Latin and take their ending after a hyphen: "-এর", "-কে", and the locative from `at()` ("Binance-এ",
 * "MEXC-তে", also once at the end of a joined list: "Binance, OKX ও Bybit-এ"). Nothing is glued to a country name
 * from the data: the forms "in …" and "of …" come from the maps below. The script spellings of the names
 * ("Binance (বাইন্যান্স)") appear only in the title, the H1, the first mention in the lead and the keywords.
 * Bengali has no capital letters, so texts from the data are inserted as they are; data texts that end a sentence
 * get "।" from the code (`bare` drops one they may already carry).
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
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";

const locale = "bn";
const ct = compareText(locale);
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const { advantages, feeSentence, names } = ct;
const featureList = ct.features;
const countryList = ct.countries;
type Country = (typeof countryList)[number];

/* ---------------------------------- helpers --------------------------------- */

/** Locative after a Latin name or a joined list of names: "Binance-এ", "MEXC-তে", "Binance ও Gate-এ". */
const at = (s: string) => `${s}-${s.endsWith("MEXC") ? "তে" : "এ"}`;
/** The name with its Bengali spelling, for the title, the H1 and the first mention in the lead. */
const named = (e: Exchange) => withReading(e, locale);
/** Spellings people also type, for the keywords only. */
const keywordVariants: Record<string, string> = { binance: "বাইনান্স", mexc: "মেক্সসি" };
/** A data text without a closing danda, for sentences the code closes itself. */
const bare = (s: string) => s.trim().replace(/।$/, "");
/** Drops the source bracket of `users` / `assets`: "(Binance-এর তথ্যমতে)", "(Bybit API)". */
const withoutSource = (s: string) => s.replace(/\s*\((?:[^()]*-এর তথ্যমতে|[^()]*\bAPI)\)/, "");
/** A table figure inside a sentence: "320 মিলিয়ন+" → "320 মিলিয়নের বেশি". */
const inSentence = (s: string) => bare(withoutSource(s)).replace(/মিলিয়ন\+/g, "মিলিয়নের বেশি");
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;

/** "in <country>", by country key (`c.residents` of `compareText("bn")` is already the object form "… বাসিন্দাদের"). */
const countryIn: Record<CountryKey, string> = {
  us: "যুক্তরাষ্ট্রে",
  uk: "যুক্তরাজ্যে",
  ca: "কানাডায়",
  de: "জার্মানিতে",
  fr: "ফ্রান্সে",
  nl: "নেদারল্যান্ডসে",
  es: "স্পেনে",
  it: "ইতালিতে",
  au: "অস্ট্রেলিয়ায়",
  jp: "জাপানে",
  sg: "সিঙ্গাপুরে",
  hk: "হংকংয়ে",
  in: "ভারতে",
  ae: "সংযুক্ত আরব আমিরাতে",
};

const ranking = "র‍্যাংকিং";
const cmcRanking = `CoinMarketCap-এর ডেরিভেটিভস ${ranking}`;
const leverageRisk = "বেশি লিভারেজে লিকুইডেশনের ঝুঁকি অনেক বেড়ে যায়।";
const regionalNote = "আঞ্চলিক প্ল্যাটফর্মের প্রোডাক্ট, ফি ও লিমিট সাধারণত আলাদা হয়।";
const safeWay = "নিরাপদ উপায় হলো রেফারেল লিংক দিয়ে রেজিস্ট্রেশন করা।";
const noMicaEntity = "নিজের পেজে MiCA অনুমোদিত কোনো প্রতিষ্ঠানের নাম উল্লেখ করে না";

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length
      ? `${rows.length === 1 ? "যে বিষয়ে" : "যেসব বিষয়ে"} ${e.name} এগিয়ে: ${joinList(rows.map((r) => r.topic))}`
      : `${e.name} কোনো বিষয়েই এগিয়ে নেই`;
  return `${a.name} বা ${b.name} – কোনোটিই সব বিষয়ে সেরা নয়। এই তুলনায় সংখ্যা দিয়ে বিচার করা যায় এমন ${s.measurable}টি বিষয়ের মধ্যে ${a.name} এগিয়ে ${s.a.length}টিতে, ${b.name} ${s.b.length}টিতে${s.tie.length ? `, আর ${s.tie.length}টিতে দুটি সমান` : ""}। ${lead(a, s.a)}। ${lead(b, s.b)}। ${a.name} বেছে নিন, যদি ${bare(altInfo(a).chooseIf[0])}। ${b.name} বেছে নিন, যদি ${bare(altInfo(b).chooseIf[0])}।`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb) return `${a.name} ও ${b.name}-এর সর্বোচ্চ লিভারেজ একই: ${at(a.name)} ${bare(a.maxLeverage)}, ${at(b.name)} ${bare(b.maxLeverage)}।`;
  const [high, low] = la > lb ? [a, b] : [b, a];
  return `সর্বোচ্চ লিভারেজ বেশি ${at(high.name)} – ${bare(high.maxLeverage)}; ${at(low.name)} ${bare(low.maxLeverage)}।`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `${cmcRanking}য়ে (${prettyDate(site.marketDataDate)}) ${a.name}-এর ওপেন ইন্টারেস্ট ছিল ${a.market.markets}টি মার্কেটে মোট ${formatBn(a.market.openInterestBn)}, ${b.name}-এর ${b.market.markets}টি মার্কেটে ${formatBn(b.market.openInterestBn)}। ${deeper.name}-এর মার্কেট বেশি গভীর, ফলে বড় অর্ডারে সাধারণত স্প্রেড কম থাকে।`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${at(a.name)} ${joinList(notOffered.map((f) => f.noun))} আছে, ${at(b.name)} নেই।` : "",
    notFound.length ? `${at(a.name)} ${joinList(notFound.map((f) => f.noun))} আছে; ${b.name}-এর নিজস্ব সাইটে আমরা এমন কোনো প্রোডাক্ট পাইনি।` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${e.name} ${c.residents} জন্য বন্ধ${extra}`;
  if (status === "regional") return `${e.name} একটি আঞ্চলিক প্ল্যাটফর্মের মাধ্যমে ${c.residents} সেবা দেয়${extra}`;
  if (status === "partial") return `${e.name} ${countryIn[c.key]} আংশিক বিধিনিষেধ রেখেছে${extra}`;
  return `${e.name}-এর নিষিদ্ধ দেশের তালিকায় ${c.name} নেই`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("bn").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}। ${statusPhrase(b, c)}। দেশের তালিকা বদলায়, আর কোনো দেশ তালিকায় না থাকলেই সেখানে সব প্রোডাক্ট পাওয়া যাবে – এমন নিশ্চয়তা নেই; শেষ কথা এক্সচেঞ্জের নিজস্ব শর্তাবলি।`;

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
      ? "দুটিতেই আছে"
      : has(a, key)
        ? `শুধু ${at(a.name)} আছে`
        : has(b, key)
          ? `শুধু ${at(b.name)} আছে`
          : "কোনোটির সাইটেই পাওয়া যায়নি";
  const noTokenDiscount = "এমন কোনো ছাড় প্রকাশিত নেই।";
  const noFund = "কোনো সুরক্ষা তহবিলের নাম জানানো হয়নি।";

  const verdict: Faq[] = [
    { q: `${a.name} নাকি ${b.name}: কোনটি ভালো?`, a: versusAnswer(a, b, s) },
    {
      q: `${a.name} ও ${b.name}-এর মূল পার্থক্য কী?`,
      a: `${bare(ia.pick)}। ${bare(ib.pick)}।${aheadA.length ? ` ${a.name}-এর সবচেয়ে স্পষ্ট, সংখ্যায় মাপা যায় এমন সুবিধা: ${aheadA.slice(0, 2).map(bare).join("; ")}।` : ""}${aheadB.length ? ` ${b.name}-এর: ${aheadB.slice(0, 2).map(bare).join("; ")}।` : ""}`,
    },
    {
      q: `${a.name} কি ${b.name}-এর চেয়ে বড়?`,
      a: `${cmcRanking}য়ে (${marketDate}) ${a.name}-এর ওপেন ইন্টারেস্ট ছিল ${formatBn(a.market.openInterestBn)} আর 24 ঘণ্টার ভলিউম ${formatBn(a.market.volume24hBn)}, ${b.name}-এর যথাক্রমে ${formatBn(b.market.openInterestBn)} ও ${formatBn(b.market.volume24hBn)}। নিজেদের দেওয়া হিসাবে ${a.name}-এর ${inSentence(a.users)} আছে, আর ${b.name}-এর ${inSentence(b.users)}।`,
    },
    {
      q: `নতুনদের জন্য ${a.name} নাকি ${b.name}: কোনটি ভালো?`,
      a: `প্রথম অ্যাকাউন্টের জন্য তিনটি বিষয় জরুরি: সহজে ক্রিপ্টো কেনার উপায়, অনুশীলনের সুযোগ আর কম ফি। কার্ড বা ব্যাংক ট্রান্সফারে ক্রিপ্টো কেনা: ${state("fiat")}। ডেমো ট্রেডিং: ${state("demoTrading")}। কপি ট্রেডিং: ${state("copyTrading")}। ${feeSentence(a, b, "spot")} পরিচয় যাচাই – ${a.name}: ${bare(a.signup.kycShort)}; ${b.name}: ${bare(b.signup.kycShort)}।`,
    },
    {
      q: `ফিউচার্স ট্রেডিংয়ের জন্য ${a.name} নাকি ${b.name}: কোনটি ভালো?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${a.name} নাকি ${b.name}: কোনটির ট্রেডিং ফি কম?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} এগুলো স্ট্যান্ডার্ড (নন-VIP) রেট; VIP লেভেল ও এক্সচেঞ্জের নিজস্ব টোকেনে ফি আরও কমে।`,
    },
    {
      q: `${a.name} ও ${b.name} কি নিজস্ব টোকেনে ফি দিলে ছাড় দেয়?`,
      a: `${a.name}: ${a.tokenDiscount || noTokenDiscount} ${b.name}: ${b.tokenDiscount || noTokenDiscount}`,
    },
    { q: `${a.name} নাকি ${b.name}: কোনটিতে লিভারেজ বেশি?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${a.name} নাকি ${b.name}: কোনটিতে বেশি কয়েন লিস্টেড?`,
      a: `নিজেদের দেওয়া হিসাবে লিস্টেড অ্যাসেট – ${a.name}: ${inSentence(a.assets)}; ${b.name}: ${inSentence(b.assets)}। এক্সচেঞ্জগুলো আলাদাভাবে গোনে – কেউ কয়েন গোনে, কেউ ট্রেডিং পেয়ার – তাই দুটি সংখ্যা সরাসরি তুলনা করা যায় না।`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `${c.name} থেকে কি ${a.name} বা ${b.name} ব্যবহার করা যায়?`, a: countryPairAnswer(a, b, c) })),
    {
      q: `${a.name} ও ${at(b.name)} কি KYC বাধ্যতামূলক?`,
      a: `হ্যাঁ, দুটিই নতুন ব্যবহারকারীদের কাছে পরিচয় যাচাই চায়। ${a.name}: ${bare(a.signup.kycShort)}। ${b.name}: ${bare(b.signup.kycShort)}। যাচাই ছাড়া ট্রেড করতে চাইলে দুটির কোনোটিই বিকল্প নয়।`,
    },
    {
      q: `${a.name} নাকি ${b.name}: কোনটি বেশি নিরাপদ?`,
      a: `কোনো সেন্ট্রালাইজড এক্সচেঞ্জই ঝুঁকিমুক্ত নয়, তাই সৎ তুলনা হলো প্রতিটি এক্সচেঞ্জ নিজে কী প্রকাশ করে, তা দেখা। ${a.name}: ${bare(a.regulation)}। প্রুফ অব রিজার্ভস – ${bare(ia.reserves)}। ${ia.fund ? `${bare(ia.fund)}।` : noFund} ${b.name}: ${bare(b.regulation)}। প্রুফ অব রিজার্ভস – ${bare(ib.reserves)}। ${ib.fund ? `${bare(ib.fund)}।` : noFund} যে এক্সচেঞ্জই হোক, সেখানে শুধু সক্রিয়ভাবে ট্রেড করার অর্থটুকুই রাখুন।`,
    },
    {
      q: `${a.name} ও ${b.name} কি EU-তে MiCA অনুযায়ী নিয়ন্ত্রিত?`,
      a: `${a.name}: ${ia.mica ? `হ্যাঁ – ${bare(ia.mica)}` : noMicaEntity}। ${b.name}: ${ib.mica ? `হ্যাঁ – ${bare(ib.mica)}` : noMicaEntity}। ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `আমাদের তুলনার ${featureList.length}টি প্রোডাক্টের মধ্যে কিছুই নেই: ${x.name} নিজের সাইটে যে প্রোডাক্টগুলো দেখায়, তার সবই ${y.name}-ও দেখায়।`;
  const products: Faq[] = [
    { q: `${at(a.name)} এমন কী আছে, যা ${at(b.name)} নেই?`, a: onlyA || nothing(a, b) },
    { q: `${at(b.name)} এমন কী আছে, যা ${at(a.name)} নেই?`, a: onlyB || nothing(b, a) },
    {
      q: `${a.name} ও ${at(b.name)} কি কপি ট্রেডিং, ট্রেডিং বট, অপশনস ও ডেমো ট্রেডিং আছে?`,
      a: `কপি ট্রেডিং: ${state("copyTrading")}। ট্রেডিং বট: ${state("tradingBots")}। অপশনস: ${state("options")}। ডেমো ট্রেডিং: ${state("demoTrading")}।${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` যেখানে শুধু একটি এক্সচেঞ্জের নাম আছে, সেখানে অন্যটির নিজস্ব সাইটে ${prettyDate(site.lastReviewed)} তারিখে আমরা ওই প্রোডাক্টের কোনো পেজ পাইনি।` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `${a.name} ও ${b.name}-এর রেফারেল কোড কী?`,
      a: `${a.name}: ${a.referralCode} – ${bare(a.referral.whereShort)}। ${b.name}: ${b.referralCode} – ${bare(b.referral.whereShort)}। দুটি কোডই বিনা খরচে ব্যবহার করা যায় এবং আপনার ট্রেডিং ফি বাড়ায় না।`,
    },
    {
      q: `${a.name} নাকি ${b.name}: কোনটির সাইন আপ বোনাস ভালো?`,
      a: `${a.name}: ${bare(offer(a))}। ${b.name}: ${bare(offer(b))}। দুটি এক্সচেঞ্জেই ওয়েলকাম রিওয়ার্ড পরিচয় যাচাই, ডিপোজিট বা ট্রেডিং ভলিউমের মতো শর্তের সঙ্গে যুক্ত এবং দেশভেদে আলাদা, তাই শিরোনামের অঙ্ক নয়, শর্তগুলো তুলনা করুন।`,
    },
    {
      q: `${a.name} বা ${at(b.name)} কি পরে রেফারেল কোড যোগ করা যায়?`,
      a: `${a.name}: ${bare(a.referral.afterSignupShort)}। ${b.name}: ${bare(b.referral.afterSignupShort)}। দুটিতেই ${safeWay}`,
    },
    {
      q: `${a.name} ও ${b.name} কি একসঙ্গে ব্যবহার করা যায়?`,
      a: "হ্যাঁ। দুটি আলাদা কোম্পানি, তাই একটিতে অ্যাকাউন্ট থাকলে অন্যটির অ্যাকাউন্টে কোনো প্রভাব পড়ে না, আর অনেক ট্রেডারই দুটি এক্সচেঞ্জে ফান্ড রাখেন। ফি লেভেল, রেফারেল ও রিওয়ার্ড প্রতিটি অ্যাকাউন্টের সঙ্গে আলাদাভাবে যুক্ত, এক অ্যাকাউন্ট থেকে আরেকটিতে যায় না।",
    },
    {
      q: `${a.name} থেকে ${at(b.name)} ক্রিপ্টো কীভাবে সরানো যায়?`,
      a: `1. রেফারেল কোড ${b.referralCode} দিয়ে ${b.name} অ্যাকাউন্ট খুলুন এবং পরিচয় যাচাই শেষ করুন। 2. ${at(a.name)} খোলা ফিউচার্স ও মার্জিন পজিশন বন্ধ করুন – এক এক্সচেঞ্জ থেকে আরেক এক্সচেঞ্জে পজিশন সরানো যায় না। 3. ${at(b.name)} যে কয়েন ও নেটওয়ার্ক ব্যবহার করবেন, তার ডিপোজিট অ্যাড্রেস কপি করুন। 4. ${a.name} থেকে একই নেটওয়ার্কে ওই অ্যাড্রেসে উইথড্র করুন, আর আগে অল্প পরিমাণ পাঠিয়ে পরীক্ষা করে নিন: ভুল নেটওয়ার্কে পাঠানো অর্থ হারিয়ে যেতে পারে। উল্টো দিকেও একই ধাপগুলো কাজ করে।`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} নাকি ${b.name}: কোনটি ভালো?`, faqs: verdict },
    { id: "fees", title: "ফি, লিভারেজ ও কয়েন", faqs: fees },
    { id: "countries", title: "দেশ, KYC ও নিরাপত্তা", faqs: countries },
    { id: "products", title: "প্রোডাক্ট", faqs: products },
    { id: "referral", title: "রেফারেল কোড ও এক এক্সচেঞ্জ থেকে আরেকটিতে যাওয়া", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi: top, oi, mica }: HubFacts) =>
  `সবচেয়ে কম স্ট্যান্ডার্ড ফিউচার্স ফি ${names(lowF)}-এর (${feePair(lowF[0].futuresFees)}, মেকার / টেকার), সবচেয়ে বেশি লিভারেজ ${at(names(top))} (${leverageOf(top[0])}x) আর সবচেয়ে গভীর ডেরিভেটিভস মার্কেট ${names(oi)}-এর (ওপেন ইন্টারেস্ট ${formatBn(oi[0].market.openInterestBn)})। ${names(mica)} ইউরোপীয় অর্থনৈতিক অঞ্চলের (EEA) বাসিন্দাদের জন্য MiCA অনুমোদিত প্ল্যাটফর্মের নাম জানায়। আপনার জন্য কোন এক্সচেঞ্জ ভালো, তা নির্ভর করে কোন দুটির মধ্যে বেছে নিচ্ছেন তার ওপর – নিচে সেই জোড়াটি বেছে নিন।`;

function hubFaqs({ all, ranked, lowF, lowS, hi: top, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "কোন ক্রিপ্টো এক্সচেঞ্জের ট্রেডিং ফি সবচেয়ে কম?",
      a: `স্ট্যান্ডার্ড লেভেলে সবচেয়ে কম ফিউচার্স ফি ${names(lowF)}-এর: ${feePair(lowF[0].futuresFees)} (মেকার / টেকার), আর সবচেয়ে কম স্পট ফি ${names(lowS)}-এর: ${feePair(lowS[0].spotFees)}। বাকি এক্সচেঞ্জগুলো: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} – ফিউচার্সে ${feePair(e.futuresFees)}, স্পটে ${feePair(e.spotFees)}`)
        .join("; ")}। VIP লেভেল ও এক্সচেঞ্জের নিজস্ব টোকেনে এই রেট আরও কমে।`,
    },
    {
      q: "কোন ক্রিপ্টো এক্সচেঞ্জে সবচেয়ে বেশি লিভারেজ পাওয়া যায়?",
      a: `${names(top)}: ${bare(top[0].maxLeverage)}। বাকিগুলো: ${ranked
        .filter((e) => !top.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join(", ")}। ${leverageRisk}`,
    },
    {
      q: "কোন ক্রিপ্টো এক্সচেঞ্জের ফিউচার্স মার্কেট সবচেয়ে গভীর?",
      a: `${cmcRanking}য়ের ওপেন ইন্টারেস্ট অনুযায়ী (${marketDate}): ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join(", ")}। মার্কেট যত গভীর, বড় অর্ডারে স্প্রেড সাধারণত তত কম।`,
    },
    {
      q: "কোন কোন এক্সচেঞ্জের EEA প্ল্যাটফর্ম MiCA অনুমোদিত?",
      a: `${joinList(mica.map((e) => `${e.name} (${bare(altInfo(e).mica)})`))}। ${names(noMica)} নিজেদের পেজে MiCA অনুমোদিত কোনো প্রতিষ্ঠানের নাম উল্লেখ করে না। ${regionalNote}`,
    },
    {
      q: "অ্যাকাউন্ট খোলার পরে কোন এক্সচেঞ্জে রেফারেল কোড যোগ করা যায়?",
      a: `${later.map((e) => `${e.name}: ${bare(e.referral.afterSignupShort)}`).join("। ")}। ${at(names(signupOnly))} কোড শুধু রেজিস্ট্রেশনের সময়ই গণ্য হয়, অথবা পরে যোগ করার কোনো উপায় জানানো নেই – সব এক্সচেঞ্জেই ${safeWay}`,
    },
    {
      q: "এই তুলনাগুলো কীভাবে করা হয়?",
      a: `প্রতিটি সংখ্যা এক্সচেঞ্জের নিজস্ব ওয়েবসাইট বা হেল্প সেন্টার থেকে নেওয়া – ফি তালিকা, শর্তাবলি, নিষিদ্ধ দেশের তালিকা, প্রোডাক্ট পেজ – আর প্রতিটি পেজে তার সূত্র দেওয়া আছে। ওপেন ইন্টারেস্ট, ভলিউম ও ডেরিভেটিভস মার্কেটের সংখ্যা ${cmcRanking} থেকে নেওয়া। কোনো বিষয়ে কোন এক্সচেঞ্জ এগিয়ে, তা ওই সংখ্যা থেকেই ঠিক হয়; আমাদের নিজস্ব কোনো ${ranking} নেই। সর্বশেষ যাচাইয়ের তারিখ: ${date}।`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */


export const bn: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row in "যেসব বিষয়ে … এগিয়ে: …" ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "ফিউচার্স ফি (মেকার / টেকার)", topic: "ফিউচার্স ফি" },
    spotFees: { label: "স্পট ফি (মেকার / টেকার)", topic: "স্পট ফি" },
    leverage: { label: "সর্বোচ্চ লিভারেজ", topic: "সর্বোচ্চ লিভারেজ" },
    openInterest: { label: "ডেরিভেটিভস ওপেন ইন্টারেস্ট", topic: "ওপেন ইন্টারেস্ট" },
    volume: { label: "24 ঘণ্টার ডেরিভেটিভস ভলিউম", topic: "24 ঘণ্টার ডেরিভেটিভস ভলিউম" },
    markets: { label: "ডেরিভেটিভস মার্কেট", topic: "ডেরিভেটিভস মার্কেটের সংখ্যা" },
    users: { label: "ব্যবহারকারী (এক্সচেঞ্জের নিজস্ব হিসাব)", topic: "ব্যবহারকারীর সংখ্যা" },
    assets: { label: "লিস্টেড অ্যাসেট (এক্সচেঞ্জের নিজস্ব হিসাব)", topic: "" },
    founded: { label: "প্রতিষ্ঠার বছর", topic: "" },
    products: { label: (compared) => `পাওয়া প্রোডাক্ট (তুলনা করা ${compared}টির মধ্যে)`, topic: "প্রোডাক্টের পরিসর" },
    countries: { label: (compared) => `নিষিদ্ধ দেশ (তুলনা করা ${compared}টির মধ্যে)`, topic: "দেশভিত্তিক প্রাপ্যতা" },
    mica: { label: "MiCA অনুমোদিত EEA প্ল্যাটফর্ম", topic: "MiCA অনুমোদন" },
    kyc: { label: "পরিচয় যাচাই (KYC)", topic: "" },
    addLater: { label: "পরে কি রেফারেল কোড যোগ করা যায়?", topic: "পরে রেফারেল কোড যোগ করার সুযোগ" },
    offer: { label: "নতুন ব্যবহারকারীদের অফার", topic: "" },
    reserves: { label: "প্রুফ অব রিজার্ভস", topic: "" },
    fund: { label: "সুরক্ষা তহবিল", topic: "" },
  },
  countOf: (count, of) => `${of}টির মধ্যে ${count}টি`,
  noMica: "উল্লেখ নেই",
  noFund: "উল্লেখ নেই",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    // Three wordings, chosen per pair; the Bengali readings in brackets go first when the title gets too long.
    title: (a, b, shortMonthYear) => {
      const m = shortMonthYear, y = yearOf(shortMonthYear);
      const worded = (A: string, B: string) =>
        [
          `${A} বনাম ${B} (${m}): ফি, লিভারেজ ও বোনাস`,
          `${A} নাকি ${B}? ফি, লিভারেজ ও KYC-র তুলনা`,
          `${A} বনাম ${B}: ${y} সালে কোন এক্সচেঞ্জ ভালো?`,
        ][variant(3, a.slug, b.slug)];
      return fit(TITLE_MAX, worded(named(a), named(b)), worded(a.name, b.name), `${named(a)} বনাম ${named(b)} (${m})`, `${a.name} বনাম ${b.name} (${m})`);
    },
    description: (a, b, monthYear) =>
      fit(
        DESC_MAX,
        `${a.name} বনাম ${b.name}: ফিউচার্স ফি ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, লিভারেজ ${leverageOf(a)}x vs ${leverageOf(b)}x, প্রোডাক্ট, দেশ, KYC ও রেফারেল কোড – অফিসিয়াল ডেটা, যাচাই: ${monthYear}।`,
        `${a.name} বনাম ${b.name}: ফিউচার্স ফি ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, লিভারেজ ${leverageOf(a)}x vs ${leverageOf(b)}x, প্রোডাক্ট, দেশ, KYC ও রেফারেল কোড – যাচাই: ${monthYear}।`,
        `${a.name} বনাম ${b.name}: ফিউচার্স ফি ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, লিভারেজ ${leverageOf(a)}x vs ${leverageOf(b)}x, প্রোডাক্ট, দেশ, KYC ও রেফারেল কোড।`,
      ),
    keywords: (a, b, former) => {
      const ra = readingOf(a.slug, locale);
      const rb = readingOf(b.slug, locale);
      const va = keywordVariants[a.slug] ?? ra;
      const vb = keywordVariants[b.slug] ?? rb;
      return [
        `${a.name} বনাম ${b.name}`,
        `${b.name} বনাম ${a.name}`,
        `${a.name} vs ${b.name}`,
        `${b.name} vs ${a.name}`,
        `${a.name} নাকি ${b.name}`,
        `${a.name} ও ${b.name}-এর তুলনা`,
        `${a.name} বনাম ${b.name} ফি`,
        `${a.name} বনাম ${b.name} ফিউচার্স`,
        `${a.name} কি ${b.name}-এর চেয়ে ভালো`,
        `${b.name} কি ${a.name}-এর চেয়ে ভালো`,
        ...(ra && rb ? [`${ra} বনাম ${rb}`] : []),
        ...(va && vb && (va !== ra || vb !== rb) ? [`${va} বনাম ${vb}`] : []),
        ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`, `${old} বনাম ${other}`]),
      ];
    },

    crumbHome: "হোম",
    crumbHub: "এক্সচেঞ্জ তুলনা",
    crumbPage: (a, b) => `${a.name} বনাম ${b.name}`,

    formerNote: (e, formerName) => `${e.name} আগে ${formerName} নামে পরিচিত ছিল।`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${named(a)} ও ${named(b)} দুটিই স্পট (Spot) ও লিভারেজসহ ফিউচার্স (Futures) ট্রেডিংয়ের সেন্ট্রালাইজড এক্সচেঞ্জ, আর দুটিই নতুন ব্যবহারকারীদের জন্য রেফারেল প্রোগ্রাম চালায়। ${bare(pickA)}। ${bare(pickB)}।${formerNote ? ` ${formerNote}` : ""} এই মুখোমুখি তুলনায় দুটির ফি, লিভারেজ, প্রোডাক্ট, দেশভিত্তিক প্রাপ্যতা, পরিচয় যাচাইয়ের নিয়ম ও রেফারেল অফার পাশাপাশি রাখা হয়েছে – প্রতিটি সংখ্যা ${date} তারিখে এক্সচেঞ্জগুলোর নিজস্ব সাইট থেকে নেওয়া।`,

    toc: {
      "at-a-glance": "এক নজরে",
      verdict: "কোনটি বেছে নেবেন",
      fees: "ফি",
      leverage: "লিভারেজ ও মার্কেটের গভীরতা",
      products: "প্রোডাক্ট",
      countries: "দেশ",
      kyc: "পরিচয় যাচাই (KYC)",
      safety: "নিরাপত্তা ও রেগুলেশন",
      referral: "রেফারেল কোড",
      "pros-cons": "সুবিধা ও অসুবিধা",
      faq: "প্রশ্নোত্তর",
      sources: "সূত্র",
    },
    onThisPage: "এই পেজে",

    /* Hero */
    updated: (date) => `${date} তারিখে যাচাই ও হালনাগাদ করা`,
    h1: (a, b) => `${named(a)} বনাম ${named(b)}: ফি, লিভারেজ ও নিরাপত্তার তুলনা`,
    quickAnswer: "সংক্ষিপ্ত উত্তর",
    keyFigures: "মূল সংখ্যা",
    chips: (a, b, oiA, oiB) => [
      `ফিউচার্স ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `স্পট ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `লিভারেজ ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `ওপেন ইন্টারেস্ট ${oiA} vs ${oiB}`,
    ],
    boxTitle: "রেফারেল কোড দিয়ে সাইন আপ করুন",
    boxNote: "দুটি কোডই ফ্রি এবং কখনো আপনার ফি বাড়ায় না।",
    codeLabel: (e) => `${e.name} রেফারেল কোড`,
    boxRisk: () => (
      <>
        লিভারেজ ট্রেডিং উচ্চ ঝুঁকিপূর্ণ। দুটির কোনোটিই সব দেশ থেকে ব্যবহার করা যায় না – <a href="#countries">দেশ</a> অংশটি দেখুন।
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} বনাম ${b.name} এক নজরে`,
    glanceText: (a, b, s) =>
      `${a.name} বনাম ${b.name} লিখে খুঁজুন বা ${b.name} বনাম ${a.name} – তুলনা একই। সংখ্যা দিয়ে বিচার করা যায় এমন ${s.measurable}টি বিষয়ের মধ্যে ${a.name} এগিয়ে ${s.a.length}টিতে, ${b.name} ${s.b.length}টিতে${s.tie.length ? `; ${s.tie.length}টিতে দুটি সমান` : ""}। সব বিষয় সমান গুরুত্বপূর্ণ নয় – সক্রিয় ট্রেডারের কাছে লম্বা কয়েন তালিকার চেয়ে কম ফি বেশি জরুরি – তাই আপনার ট্রেডিংয়ের ধরনের সঙ্গে যে কলাম মেলে, সেটিই দেখুন।`,
    glanceCaption: (a, b) => `${a.name} বনাম ${b.name}: ফি, লিভারেজ, মার্কেটের আকার, প্রোডাক্ট, দেশ, পরিচয় যাচাই ও রেফারেলের নিয়ম`,
    compared: "বিষয়",
    ahead: "এগিয়ে",
    level: "সমান",
    glanceNote: (marketDate, date) =>
      `ফি: স্ট্যান্ডার্ড (নন-VIP) লেভেল। ওপেন ইন্টারেস্ট, ভলিউম ও মার্কেট: CoinMarketCap ডেরিভেটিভস ${ranking}, ${marketDate}। ‘–’ মানে দুটি মানের মধ্যে কোনটি এগিয়ে, তা বলা যায় না। বাকি সব তথ্য ${date} তারিখে এক্সচেঞ্জগুলোর নিজস্ব সাইটে পড়া।`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} নাকি ${b.name}: কোনটি বেছে নেবেন?`,
    verdictText:
      "সব দিক থেকে জয়ী কেউ নেই – প্রতিটি এক্সচেঞ্জ আলাদা ধরনের ট্রেডারের জন্য তৈরি। দুটি বক্সে দেখানো হয়েছে কোনটি কার জন্য উপযুক্ত এবং কোন কোন বিষয়ে সংখ্যার হিসাবে সেটি অন্যটির চেয়ে এগিয়ে।",
    bestFor: (role) => `বিশেষত্ব: ${role}`,
    chooseIf: (e) => `${e.name} বেছে নিন, যদি …`,
    aheadOf: (e, other) => `যেসব বিষয়ে ${e.name} ${other.name}-এর চেয়ে এগিয়ে`,
    noAdvantage: "আমাদের তুলনার বিষয়গুলোতে সংখ্যার হিসাবে কোনো সুবিধা নেই।",
    thinkTwice: "আরেকবার ভেবে দেখুন, যদি …",
    codeButton: (e) => `${e.name} রেফারেল কোড ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `ট্রেডিং ফি: ${a.name} বনাম ${b.name}`,
    feesModel: "দুটিই মেকার / টেকার মডেলে চলে: লিকুইডিটি যোগ করে এমন লিমিট অর্ডারে মেকার ফি লাগে, লিকুইডিটি নেয় এমন অর্ডারে টেকার ফি।",
    feesCaption: (a, b) => `${a.name} ও ${b.name}-এর স্ট্যান্ডার্ড স্পট ও ফিউচার্স ফি`,
    exchange: "এক্সচেঞ্জ",
    futuresMaker: "ফিউচার্স মেকার",
    futuresTaker: "ফিউচার্স টেকার",
    spotMaker: "স্পট মেকার",
    spotTaker: "স্পট টেকার",
    otherMarkets: "অন্যান্য মার্কেট (মেকার / টেকার)",
    feesNote: (date) => `প্রতিটি এক্সচেঞ্জের প্রকাশিত স্ট্যান্ডার্ড (নন-VIP) রেট, ${date} তারিখে যাচাই করা। ফি বদলায় – ট্রেড করার আগে এক্সচেঞ্জে মিলিয়ে নিন।`,
    tokenTitle: "টোকেনে ফি ছাড় ও খুঁটিনাটি শর্ত",
    noTokenDiscount: "এক্সচেঞ্জের টোকেনে ফি দিলে কোনো ছাড়ের কথা প্রকাশিত নেই।",

    /* Leverage */
    leverageTitle: "লিভারেজ ও মার্কেটের গভীরতা",
    leverageRisk: "বেশি লিভারেজে লিকুইডেশনের ঝুঁকি অনেক বেড়ে যায় – সর্বোচ্চ লিভারেজ একটি সীমা, পরামর্শ নয়।",
    leverageCaption: (a, b) => `${a.name} ও ${b.name}-এর লিভারেজ ও ডেরিভেটিভস মার্কেটের ডেটা`,
    maxLeverage: "সর্বোচ্চ লিভারেজ",
    openInterest: "ওপেন ইন্টারেস্ট",
    volume24h: "24 ঘণ্টার ডেরিভেটিভস ভলিউম",
    derivativesMarkets: "ডেরিভেটিভস মার্কেট",
    listedAssets: "লিস্টেড অ্যাসেট (এক্সচেঞ্জের নিজস্ব হিসাব)",
    leverageNote: (marketDate) =>
      `মার্কেট ডেটা: CoinMarketCap ডেরিভেটিভস ${ranking}, ${marketDate}। লিস্টেড অ্যাসেট এক্সচেঞ্জগুলো আলাদাভাবে গোনে – কেউ কয়েন গোনে, কেউ ট্রেডিং পেয়ার।`,

    /* Products */
    productsTitle: (a, b) => `প্রোডাক্ট: ${a.name} ও ${b.name} কী কী দেয়`,
    productsSame: (compared) => `আমাদের তুলনার ${compared}টি প্রোডাক্টের সবগুলোই দুটি এক্সচেঞ্জ নিজেদের সাইটে দেখায়; পার্থক্য খুঁটিনাটিতে।`,
    productsLegend: (date) => `টিক চিহ্ন মানে এক্সচেঞ্জটি নিজের সাইটে প্রোডাক্টটি দেখায়; ড্যাশ মানে ${date} তারিখে সেখানে আমরা এর কোনো পেজ পাইনি।`,
    productsCaption: (a, b) => `${a.name} ও ${b.name}-এর প্রোডাক্ট`,
    product: "প্রোডাক্ট",
    offered: "আছে",
    notOffered: "নেই",
    noPage: "নিজের সাইটে কোনো পেজ পাওয়া যায়নি",

    /* Countries */
    countriesTitle: (a, b) => `দেশ: ${a.name} ও ${b.name} কোথা থেকে ব্যবহার করা যায়`,
    countriesText: (compared, differing) =>
      `${compared}টি দেশের ক্ষেত্রে প্রতিটি এক্সচেঞ্জের নিজস্ব শর্তাবলি যা বলে, তা নিচে দেওয়া হলো। এর মধ্যে ${differing}টি দেশে দুটির অবস্থান আলাদা। ‘${ct.statusLabel.regional}’ মানে এক্সচেঞ্জটি দেশটিতে আলাদা একটি প্ল্যাটফর্ম দিয়ে সেবা দেয়, আর সেই প্ল্যাটফর্মের প্রোডাক্ট, ফি ও লিমিট নিজস্ব।`,
    countriesCaption: (a, b) => `দেশভেদে ${a.name} ও ${b.name}-এর প্রাপ্যতা`,
    country: "দেশ",
    countriesNote: (date) =>
      `‘${ct.statusLabel.open}’ মানে ${date} তারিখে দেশটি এক্সচেঞ্জের নিষিদ্ধ দেশের তালিকায় ছিল না – এতে সেখানে সব প্রোডাক্ট পাওয়ার নিশ্চয়তা নেই। VPN বা ভুল তথ্য দিয়ে বিধিনিষেধ এড়ানো দুটি এক্সচেঞ্জেই নিষিদ্ধ।`,
    differTitle: "কোথায় দুটি আলাদা",
    differQuestion: (a, b, countryName) => {
      const key = countryList.find((c) => c.name === countryName)?.key;
      return key ? `${countryIn[key]} ${a.name} নাকি ${b.name}?` : `${countryName}: ${a.name} নাকি ${b.name}?`;
    },
    neither: (a, b, hrefA, hrefB) => (
      <>
        যেখানে থাকেন, সেখান থেকে দুটির কোনোটিই ব্যবহার করা যায় না? বিকল্প পেজগুলোর দেশভিত্তিক টেবিলে দেখা যায়, অন্য কোন এক্সচেঞ্জ আপনার দেশ থেকে ব্যবহার
        করা যায়: <Link href={hrefA}>দেশভেদে {a.name}-এর বিকল্প</Link> · <Link href={hrefB}>দেশভেদে {b.name}-এর বিকল্প</Link>।
      </>
    ),
    restrictedTitle: "নিষিদ্ধ দেশ ও আঞ্চলিক প্ল্যাটফর্ম",
    whereNot: (e) => `${e.name} কোথায় ব্যবহার করা যায় না?`,
    regionalPlatforms: "আঞ্চলিক প্ল্যাটফর্ম:",

    /* Verification */
    kycTitle: (a, b) => `পরিচয় যাচাই: ${a.name} বনাম ${b.name}`,
    kycText:
      "দুটিই নতুন ব্যবহারকারীদের কাছে পরিচয় যাচাই চায়, তাই KYC ছাড়া ট্রেড করার জন্য কোনোটিই বিকল্প নয়। পার্থক্য হলো যাচাই না করা অ্যাকাউন্টে কী কী করা যায় এবং যাচাই কীভাবে হয়।",
    documents: "কাগজপত্র:",
    minAge: "ন্যূনতম বয়স:",
    howToRegister: (e) => `${e.name} অ্যাকাউন্ট খোলার নিয়ম ও পরিচয় যাচাই, ধাপে ধাপে`,

    /* Safety */
    safetyTitle: (a, b) => `নিরাপত্তা ও রেগুলেশন: ${a.name} বনাম ${b.name}`,
    safetyText:
      "কোনো সেন্ট্রালাইজড এক্সচেঞ্জই ঝুঁকিমুক্ত নয়। তুলনা করা যায় শুধু প্রতিটি এক্সচেঞ্জ নিজের সম্পর্কে যা প্রকাশ করে, তা: কোথায় তার লাইসেন্স আছে, রিজার্ভের প্রমাণ দেয় কি না এবং জরুরি অবস্থার জন্য কোনো তহবিল রাখে কি না।",
    safetyCaption: (a, b) => `${a.name} ও ${b.name}-এর রেগুলেশন, প্রুফ অব রিজার্ভস ও সুরক্ষা তহবিল`,
    licences: "এক্সচেঞ্জের জানানো লাইসেন্স",
    entity: "পরিচালনাকারী প্রতিষ্ঠান",
    reserves: "প্রুফ অব রিজার্ভস",
    fund: "সুরক্ষা তহবিল",
    founded: "প্রতিষ্ঠার বছর",
    isSafe: (e) => `${e.name} কি নিরাপদ?`,
    safetyDetail: (e) => `${e.name}-এর নিরাপত্তা ও প্রাপ্যতা বিস্তারিত`,

    /* Referral codes */
    referralTitle: (a, b) => `রেফারেল কোড ও নতুন ব্যবহারকারীদের অফার: ${a.name} বনাম ${b.name}`,
    referralText:
      "যেটিই বেছে নিন, রেফারেল কোড দিয়ে রেজিস্ট্রেশন করুন: এতে কোনো খরচ নেই, ফি কখনো বাড়ে না এবং এক্সচেঞ্জের নতুন ব্যবহারকারীদের অফার চালু হয়। শেষ সারিটি খেয়াল করুন – ভুলে যাওয়া কোড সবসময় পরে যোগ করা যায় না।",
    referralCaption: (a, b) => `${a.name} ও ${b.name}-এর রেফারেল কোড ও নতুন ব্যবহারকারীদের অফার`,
    referralCodeOf: (e) => `${e.name} রেফারেল কোড`,
    referralCode: "রেফারেল কোড",
    newUserOffer: "নতুন ব্যবহারকারীদের অফার",
    inviteeReward: "আমন্ত্রিত ব্যবহারকারী হিসেবে আপনি যা পান",
    covers: "এক রেফারেলেই অন্তর্ভুক্ত",
    whereCode: "কোড কোথায় দিতে হয়",
    addLater: "পরে কি যোগ করা যায়?",
    referralNote: (date) => `অফার ${date} তারিখে যাচাই করা। ওয়েলকাম রিওয়ার্ড টাস্কভিত্তিক, এর জন্য পরিচয় যাচাই লাগে এবং দেশভেদে আলাদা।`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `${a.name} ও ${b.name}-এর সুবিধা ও অসুবিধা`,
    pros: "সুবিধা",
    cons: "অসুবিধা",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} বনাম ${b.name} – প্রশ্নোত্তর`,
    faqText: (count, a, b) => `${a.name} ও ${b.name}-এর মধ্যে বেছে নেওয়া নিয়ে ${count}টি প্রশ্ন: ফি, লিভারেজ, দেশ, পরিচয় যাচাই, প্রোডাক্ট ও রেফারেল কোড।`,

    /* Sources */
    sourcesTitle: "সূত্র: এই সংখ্যাগুলো কোথা থেকে নেওয়া",
    sourcesText: (date, marketDate) =>
      `এই পেজে ফি, লিভারেজ, প্রোডাক্ট, পরিচয় যাচাই, দেশ, লাইসেন্স, রিজার্ভ ও রেফারেলের নিয়ম নিয়ে যা আছে, তার সবই ${date} তারিখে দুটি এক্সচেঞ্জের নিজস্ব ওয়েবসাইট ও হেল্প সেন্টারে পড়া। ওপেন ইন্টারেস্ট, ভলিউম ও ডেরিভেটিভস মার্কেটের সংখ্যা ${cmcRanking} (${marketDate}) থেকে নেওয়া। এক্সচেঞ্জগুলো আগাম নোটিশ ছাড়াই শর্ত বদলায়, তাই নিচের পেজগুলোই চূড়ান্ত।`,
    officialPages: (e, count) => `${e.name}: ${count}টি অফিসিয়াল পেজ`,

    /* More comparisons */
    moreTitle: "আরও তুলনা",
    against: (e) => `${e.name} বনাম অন্য এক্সচেঞ্জ`,
    allAlternatives: (e) => `${e.name}-এর সব বিকল্প`,
    allComparisons: "সব এক্সচেঞ্জ তুলনা",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>ঝুঁকি সতর্কতা:</strong> ক্রিপ্টো ডেরিভেটিভস জটিল ইনস্ট্রুমেন্ট। লিভারেজে লাভ ও ক্ষতি দুটিই কয়েক গুণ বাড়ে, আর কয়েক মিনিটের মধ্যেই আপনার
        পুরো মার্জিন হারাতে পারেন। এই পেজ শুধু তথ্যের জন্য, এটি আর্থিক পরামর্শ নয়। আমাদের লিংক দিয়ে সাইন আপ করলে আমরা কমিশন পেতে পারি – দেখুন আমাদের{" "}
        <Link href={disclosureHref}>অ্যাফিলিয়েট ডিসক্লোজার</Link>। এতে সংখ্যা বদলায় না: সেগুলো এক্সচেঞ্জগুলোর নিজস্ব।
      </>
    ),
    ctaTitle: (a, b) => `${a.name} নাকি ${b.name}? শুরু করুন রেফারেল কোড দিয়ে`,
    ctaText: "যেকোনো একটি এক্সচেঞ্জে স্পট ও ফিউচার্সের জন্য একটিই অ্যাকাউন্ট, বাড়তি কোনো খরচ ছাড়া।",
    ctaButton: "আরও এক্সচেঞ্জ তুলনা করুন",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) =>
      fit(
        TITLE_MAX,
        `ক্রিপ্টো এক্সচেঞ্জ তুলনা (${shortMonthYear}): ${pairs}টি জোড়ার মুখোমুখি তুলনা`,
        `ক্রিপ্টো এক্সচেঞ্জ তুলনা (${shortMonthYear}): ${pairs}টি মুখোমুখি জোড়া`,
        `ক্রিপ্টো এক্সচেঞ্জ তুলনা (${shortMonthYear})`,
      ),
    description: (exchangeNames, pairs, monthYear) =>
      fit(
        DESC_MAX,
        `${exchangeNames} জোড়ায় জোড়ায়: ফি, লিভারেজ, দেশ, KYC ও রেফারেল কোডের ${pairs}টি মুখোমুখি তুলনা – অফিসিয়াল ডেটা, যাচাই: ${monthYear}।`,
        `${exchangeNames} জোড়ায় জোড়ায়: ফি, লিভারেজ, দেশ, KYC ও রেফারেল কোডের ${pairs}টি মুখোমুখি তুলনা – যাচাই: ${monthYear}।`,
        `${exchangeNames} জোড়ায় জোড়ায়: ফি, লিভারেজ, দেশ, KYC ও রেফারেল কোডের ${pairs}টি মুখোমুখি তুলনা।`,
      ),
    crumbHome: "হোম",
    crumbPage: "এক্সচেঞ্জ তুলনা",
    listName: "ক্রিপ্টো এক্সচেঞ্জের মুখোমুখি তুলনা",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `${date} তারিখে যাচাই ও হালনাগাদ করা`,
    h1: (pairs) => `ক্রিপ্টো এক্সচেঞ্জ তুলনা: ${pairs}টি জোড়ার মুখোমুখি তুলনা`,
    lead: (exchangeCount) =>
      `${exchangeCount}টি এক্সচেঞ্জ, প্রতিটি জোড়ার তুলনা একই বিষয়ে: ফি, লিভারেজ, মার্কেটের গভীরতা, প্রোডাক্ট, দেশভিত্তিক প্রাপ্যতা, পরিচয় যাচাই, রেগুলেশন ও রেফারেল অফার। প্রতিটি তুলনায় এক্সচেঞ্জগুলোর নিজস্ব সাইটের সংখ্যা ব্যবহার করা হয়েছে।`,
    quickAnswer: "সংক্ষিপ্ত উত্তর",

    pickTitle: "তুলনার জন্য দুটি এক্সচেঞ্জ বেছে নিন",
    pickText: (others) =>
      `প্রতিটি বক্সে একটি এক্সচেঞ্জের পাশে বাকি ${others}টি। প্রতিটি জোড়ার একটিই পেজ, তাই ‘Binance বনাম OKX’ আর ‘OKX বনাম Binance’ একই তুলনায় নিয়ে যায়।`,
    alternativesOf: (e) => `${e.name}-এর বিকল্প`,
    referralCodeOf: (e) => `${e.name} রেফারেল কোড`,

    tableTitle: (exchangeCount) => `${exchangeCount}টি এক্সচেঞ্জই পাশাপাশি`,
    tableText: "প্রতিটি এক্সচেঞ্জের নতুন ব্যবহারকারীদের অফার, স্ট্যান্ডার্ড (নন-VIP) ফি, লিভারেজ ও মার্কেটের গভীরতা – এক টেবিলে।",
    tableNote: (date, marketDate) =>
      `ফি: প্রতিটি এক্সচেঞ্জের প্রকাশিত স্ট্যান্ডার্ড লেভেল, ${date} তারিখে যাচাই করা। ওপেন ইন্টারেস্ট ও মার্কেট: CoinMarketCap, ${marketDate}।`,

    alternativesTitle: "একটি এক্সচেঞ্জ বনাম বাকি সব",
    alternativesText: (others) =>
      `দুটির মধ্যে বাছাই নয়, বরং বিকল্প খুঁজছেন? বিকল্প পেজগুলো একটি এক্সচেঞ্জকে একসঙ্গে বাকি ${others}টির সঙ্গে মিলিয়ে দেখে এবং জানায়, এদের মধ্যে কোনগুলো আপনার দেশ থেকে ব্যবহার করা যায়।`,

    faqTitle: "এক্সচেঞ্জ তুলনা – প্রশ্নোত্তর",

    ctaTitle: "সিদ্ধান্ত নিয়েছেন? রেফারেল কোড দিয়ে সাইন আপ করুন",
    ctaText: (exchangeCount) => `${exchangeCount}টি এক্সচেঞ্জেরই যাচাই করা কোড – স্পট ও ফিউচার্সের জন্য একটি অ্যাকাউন্ট, বাড়তি কোনো খরচ ছাড়া।`,
    ctaButton: "সব রেফারেল কোড দেখুন",
  },
};
