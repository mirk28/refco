/**
 * The sentences of the comparison pages in Bengali. Same functions and the same logic as `./en.ts`, written in
 * Bengali grammar (standard Bangladeshi usage, polite "আপনি", the site speaks as "আমরা").
 *
 * Names stay Latin and take their endings after a hyphen: `${name}-এর`, locative through `at()` ("Binance-এ",
 * "MEXC-তে"); on a joined list the ending stands once, on the last name ("Bybit ও OKX-এর"). A name is a thing:
 * plain third-person verbs (দেয়, নেয়, জানায়), the same for one name or several, so `verb()` is only used where the
 * sentence itself differs. Country names stand bare in `name` and `short`; no ending is ever glued to a country
 * variable – the locative comes from `countryWords`. `residents` is the form for the object and before a
 * postposition: "যুক্তরাষ্ট্রের বাসিন্দাদের" ("… বাসিন্দাদের সেবা দেয়", "… বাসিন্দাদের জন্য").
 * Counts take the classifier "টি" (6টি বিকল্প). Fee rates arrive in the site's notation (0.02%); leverage stays 150x;
 * `formatBn` gives "34.1 বিলিয়ন ডলার" and never takes an ending.
 * Bengali script has no capital letters, so inserted data texts are never re-cased. Data texts without a danda
 * (pick, kycShort, assets, reserves, fund, mica, maxLeverage …) get one where they end a sentence.
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
  verb,
  withFeature,
  withMica,
} from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { AltFaqGroup, CompareText } from "./en";

const locale = "bn";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);

/* --------------------------------- endings --------------------------------- */

/** Locative ("on / at / in") after a Latin name or a joined list of names: "Binance-এ", "OKX ও MEXC-তে". */
const at = (s: string) => `${s}-${s.endsWith("MEXC") ? "তে" : "এ"}`;
/** A data text without a final danda – for texts that code joins itself. */
const bare = (s: string) => s.trim().replace(/\s*।$/, "");
/** Ends a data text with a danda unless it already ends a sentence. */
const stop = (s: string) => (/[।?!]$/.test(s.trim()) ? s.trim() : `${s.trim()}।`);
/** The `pick` lines of several exchanges, joined with "। " and closed with "।". */
const picks = (list: Exchange[]) => `${list.map((a) => bare(altInfo(a).pick)).join("। ")}।`;
/** `afterSignupShort` without its leading "হ্যাঁ – ". */
const withoutYes = (s: string) => s.trim().replace(/^হ্যাঁ\s*–\s*/, "");

/* -------------------------------- vocabulary -------------------------------- */

/** `label` for the tables, `noun` as subject or object in sentences ("কপি ট্রেডিং আছে", "কপি ট্রেডিং অফার করে"). */
const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "কপি ট্রেডিং", noun: "কপি ট্রেডিং" },
  tradingBots: { label: "ট্রেডিং বট", noun: "ট্রেডিং বট" },
  options: { label: "অপশনস", noun: "অপশনস ট্রেডিং" },
  demoTrading: { label: "ডেমো ট্রেডিং", noun: "ডেমো ট্রেডিং" },
  margin: { label: "স্পট মার্জিন", noun: "স্পট মার্জিন ট্রেডিং" },
  p2p: { label: "P2P ট্রেডিং", noun: "P2P ট্রেডিং" },
  fiat: { label: "কার্ড / ব্যাংক দিয়ে কেনা", noun: "কার্ড বা ব্যাংক ট্রান্সফারে ক্রিপ্টো কেনার সুবিধা" },
  earn: { label: "Earn / স্টেকিং", noun: "Earn প্রোডাক্ট" },
  launchpad: { label: "Launchpad / Launchpool", noun: "Launchpad" },
  web3Wallet: { label: "Web3 ওয়ালেট", noun: "সেলফ-কাস্টডি Web3 ওয়ালেট" },
  card: { label: "ক্রিপ্টো কার্ড", noun: "ক্রিপ্টো কার্ড" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` bare (also before "থেকে"), `short` for the tables, `loc` "in …", `gen` "of …". */
const countryWords: Record<CountryKey, { name: string; short: string; loc: string; gen: string }> = {
  us: { name: "যুক্তরাষ্ট্র", short: "যুক্তরাষ্ট্র", loc: "যুক্তরাষ্ট্রে", gen: "যুক্তরাষ্ট্রের" },
  uk: { name: "যুক্তরাজ্য", short: "যুক্তরাজ্য", loc: "যুক্তরাজ্যে", gen: "যুক্তরাজ্যের" },
  ca: { name: "কানাডা", short: "কানাডা", loc: "কানাডায়", gen: "কানাডার" },
  de: { name: "জার্মানি", short: "জার্মানি", loc: "জার্মানিতে", gen: "জার্মানির" },
  fr: { name: "ফ্রান্স", short: "ফ্রান্স", loc: "ফ্রান্সে", gen: "ফ্রান্সের" },
  nl: { name: "নেদারল্যান্ডস", short: "নেদারল্যান্ডস", loc: "নেদারল্যান্ডসে", gen: "নেদারল্যান্ডসের" },
  es: { name: "স্পেন", short: "স্পেন", loc: "স্পেনে", gen: "স্পেনের" },
  it: { name: "ইতালি", short: "ইতালি", loc: "ইতালিতে", gen: "ইতালির" },
  au: { name: "অস্ট্রেলিয়া", short: "অস্ট্রেলিয়া", loc: "অস্ট্রেলিয়ায়", gen: "অস্ট্রেলিয়ার" },
  jp: { name: "জাপান", short: "জাপান", loc: "জাপানে", gen: "জাপানের" },
  sg: { name: "সিঙ্গাপুর", short: "সিঙ্গাপুর", loc: "সিঙ্গাপুরে", gen: "সিঙ্গাপুরের" },
  hk: { name: "হংকং", short: "হংকং", loc: "হংকংয়ে", gen: "হংকংয়ের" },
  in: { name: "ভারত", short: "ভারত", loc: "ভারতে", gen: "ভারতের" },
  ae: { name: "সংযুক্ত আরব আমিরাত", short: "আমিরাত", loc: "সংযুক্ত আরব আমিরাতে", gen: "সংযুক্ত আরব আমিরাতের" },
};
/** `residents` for the object and before a postposition: "যুক্তরাষ্ট্রের বাসিন্দাদের". */
const countries = countryList.map((c) => ({
  key: c.key,
  name: countryWords[c.key].name,
  short: countryWords[c.key].short,
  residents: `${countryWords[c.key].gen} বাসিন্দাদের`,
}));

const statusLabel: Record<CountryStatus, string> = {
  restricted: "নিষিদ্ধ",
  regional: "আঞ্চলিক সাইট",
  partial: "আংশিক বিধিনিষেধ",
  open: "নিষিদ্ধ নয়",
};

/** The market of a fee comparison, in the locative: "স্পটে" / "পারপেচুয়াল ফিউচার্সে". */
const marketAt = (market: "spot" | "futures") => (market === "spot" ? "স্পটে" : "পারপেচুয়াল ফিউচার্সে");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const where = marketAt(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${where} ${a.name} ও ${x.name} একই স্ট্যান্ডার্ড ফি নেয়: ${fa.maker} মেকার / ${fa.taker} টেকার।`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `মেকার ও টেকার দুই ক্ষেত্রেই ${who} সস্তা`
      : mm !== 0
        ? `মেকারদের জন্য ${who} সস্তা, টেকার ফি একই`
        : `টেকারদের জন্য ${who} সস্তা, মেকার ফি একই`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `মেকারদের জন্য ${a.name} সস্তা, টেকারদের জন্য ${x.name}`
          : `মেকারদের জন্য ${x.name} সস্তা, টেকারদের জন্য ${a.name}`;
  return `${where} ${a.name}-এর ফি ${fa.maker} মেকার / ${fa.taker} টেকার, আর ${x.name}-এর ${fx.maker} / ${fx.taker} – ${verdict}।`;
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
    `${marketAt(market)} ${x.name}-এর ফি ${feePair(fx)} (মেকার / টেকার)।`,
    lower.length ? `কম ফি: ${rates(lower)}।` : `${alts.length}টি বিকল্পের কোনোটিই সস্তা নয়।`,
    same.length ? `একই ফি: ${names(same)}।` : "",
    higher.length ? `বেশি ফি: ${rates(higher)}।` : "",
    mixed.length ? `শুধু মেকার বা শুধু টেকার ফি কম: ${rates(mixed)}।` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (market: "spot" | "futures", fa: Fee, fx: Fee) => {
    const where = market === "spot" ? "স্পটে" : "ফিউচার্সে";
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`${where} ফি কম: ${feePair(fx)}-এর বদলে ${feePair(fa)} (মেকার / টেকার)`);
    else if (m < 0 && t === 0) out.push(`${where} মেকার ফি কম: ${fx.maker}-এর বদলে ${fa.maker}`);
    else if (t < 0 && m === 0) out.push(`${where} টেকার ফি কম: ${fx.taker}-এর বদলে ${fa.taker}`);
    else if (m < 0) out.push(`${where} মেকার ফি কম: ${fx.maker}-এর বদলে ${fa.maker} (তবে টেকার ফি বেশি)`);
    else if (t < 0) out.push(`${where} টেকার ফি কম: ${fx.taker}-এর বদলে ${fa.taker} (তবে মেকার ফি বেশি)`);
  };
  fee("spot", a.spotFees, x.spotFees);
  fee("futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`সর্বোচ্চ লিভারেজ বেশি: ${leverageOf(x)}x-এর বদলে ${leverageOf(a)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`ডেরিভেটিভসে ওপেন ইন্টারেস্ট বেশি: ${formatBn(a.market.openInterestBn)} বনাম ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`ডেরিভেটিভস মার্কেট বেশি: ${a.market.markets}টি বনাম ${x.market.markets}টি`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`ভুলে যাওয়া রেফারেল কোড পরেও যুক্ত করা যায় (${withoutYes(a.referral.afterSignupShort)})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`${joinList(notOffered.map((f) => f.noun))} আছে, কিন্তু ${at(x.name)} নেই`);
  if (notFound.length) out.push(`${joinList(notFound.map((f) => f.noun))} আছে – ${x.name}-এর নিজস্ব সাইটে আমরা এমন কোনো প্রোডাক্ট পাইনি`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`ইউরোপীয় অর্থনৈতিক অঞ্চলের (EEA) জন্য MiCA-এর অধীনে অনুমোদিত প্ল্যাটফর্ম (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`${x.name} যেসব দেশে বন্ধ, তার মধ্যে নিষিদ্ধ নয়: ${joinList(openWhere.map((c) => c.name))}`);
  if (regionalWhere.length)
    out.push(`${x.name} যেসব দেশে বন্ধ, তার মধ্যে আঞ্চলিক প্ল্যাটফর্মের মাধ্যমে সেবা দেয়: ${joinList(regionalWhere.map((c) => c.name))}`);
  return out;
}

/* ---------------------------------- country --------------------------------- */

/** Plain-text answer to "Which alternatives to x can be used in this country?". */
function countryAnswer(x: Exchange, alts: Exchange[], country: (typeof countryList)[number]): string {
  const c = countries.find((it) => it.key === country.key)!;
  const w = countryWords[c.key];
  const own = altInfo(x).countries[c.key];
  const g = countryGroups(alts, c.key);
  const note = (a: Exchange) => altInfo(a).countries[c.key].note;
  const withNote = (list: Exchange[]) => list.map((a) => (note(a) ? `${a.name} (${note(a)})` : a.name));
  const ownNote = own.note ? ` (${own.note})` : "";
  const parts: string[] = [];
  if (own.status === "restricted") parts.push(`${x.name}-এর নিজস্ব নিষিদ্ধ দেশের তালিকায় ${c.name} আছে।`);
  else if (own.status === "partial") parts.push(`${w.loc} ${x.name}-এর আংশিক বিধিনিষেধ আছে${ownNote}।`);
  else if (own.status === "regional") parts.push(`${x.name} ${c.residents} একটি আঞ্চলিক প্ল্যাটফর্মের মাধ্যমে সেবা দেয়${ownNote}।`);
  else parts.push(`${x.name}-এর নিষিদ্ধ দেশের তালিকায় ${c.name} নেই।`);
  if (g.open.length) parts.push(`${names(g.open)}-এর নিষিদ্ধ দেশের তালিকায় ${c.name} নেই।`);
  if (g.regional.length)
    parts.push(
      `${joinList(withNote(g.regional))} ${c.residents} ${verb(g.regional, "আলাদা একটি আঞ্চলিক প্ল্যাটফর্মের", "নিজ নিজ আলাদা আঞ্চলিক প্ল্যাটফর্মের")} মাধ্যমে সেবা দেয়।`,
    );
  if (g.partial.length) parts.push(`${statusLabel.partial}: ${withNote(g.partial).join("; ")}।`);
  if (g.restricted.length)
    parts.push(`${names(g.restricted)}-এর নিষিদ্ধ দেশের ${own.status === "restricted" ? "তালিকাতেও" : "তালিকায়"} ${c.name} আছে।`);
  if (!g.open.length && !g.regional.length) parts.push(`${alts.length}টি বিকল্পের কোনোটিই ${c.residents} জন্য পুরোপুরি খোলা নয়।`);
  parts.push(
    "দেশের তালিকা বদলায়, আর কোনো দেশ তালিকায় না থাকলেই যে সেখানে সব প্রোডাক্ট পাওয়া যাবে, তার নিশ্চয়তা নেই – শেষ কথা এক্সচেঞ্জের নিজস্ব শর্তাবলির।",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `এই পেজে আমরা ${withReading(x, locale)} এক্সচেঞ্জের ${alts.length}টি বিকল্পের তুলনা করেছি: ${names(alts)}। ${picks(alts)} ${alts.length}টি এক্সচেঞ্জই নতুন ব্যবহারকারীদের কাছে পরিচয় যাচাই (KYC) চায়, আর প্রত্যেকটির নিজস্ব নিষিদ্ধ দেশের তালিকা আছে, তাই অ্যাকাউন্ট খোলার আগে দেশভিত্তিক টেবিলটি দেখে নিন।`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `${x.name}-এর তুলনায় কী ভালো হওয়া চাই, তা ঠিক করুন`,
      text: `কম ফি, বেশি লিভারেজ, বেশি কয়েন, কিংবা শুধু আপনার দেশ থেকে ব্যবহার করা যায় এমন একটি এক্সচেঞ্জ: এই পেজের টেবিলগুলোতে দেখা যাবে কোন বিকল্প কোথায় ${x.name}-এর চেয়ে এগিয়ে, আর কোথায় নয়।`,
    },
    {
      title: "এক্সচেঞ্জটি আপনার দেশ থেকে ব্যবহার করা যায় কি না, দেখে নিন",
      text: "প্রতিটি এক্সচেঞ্জের নিজস্ব নিষিদ্ধ দেশের তালিকা আছে, আর কোনো কোনো এক্সচেঞ্জ আপনাকে আলাদা প্রোডাক্ট ও লিমিটের একটি আঞ্চলিক প্ল্যাটফর্মে পাঠিয়ে দেয়। রেজিস্ট্রেশনের আগে দেশভিত্তিক টেবিলটি দেখে নিন।",
    },
    {
      title: "রেফারেল লিংক দিয়ে রেজিস্ট্রেশন করুন",
      text: `${names(signupOnly)} শুধু রেজিস্ট্রেশনের সময় রেফারেল কোড নেয়, অথবা পরে কোড যোগ করার কোনো উপায় জানায় না – তাই অ্যাকাউন্ট খোলার আগেই লিংকটি ব্যবহার করুন।${later.length ? ` ${names(later)} শর্তসাপেক্ষে পরেও কোড যোগ করতে দেয়।` : ""}`,
    },
    {
      title: "ফান্ড সরানোর আগে পরিচয় যাচাই সেরে নিন",
      text: `${alts.length}টি বিকল্পই নতুন ব্যবহারকারীদের কাছে পরিচয় যাচাই চায়, আর বেশিরভাগ এক্সচেঞ্জে যাচাই শেষ না হওয়া পর্যন্ত ডিপোজিট বা ট্রেড বন্ধ থাকে। পাসপোর্ট, পরিচয়পত্র বা ড্রাইভিং লাইসেন্স হাতের কাছে রাখুন।`,
    },
    {
      title: `${at(x.name)} খোলা পজিশনগুলো বন্ধ করুন`,
      text: `ফিউচার্স ও মার্জিন পজিশন এক এক্সচেঞ্জ থেকে আরেক এক্সচেঞ্জে সরানো যায় না। আগে সেগুলো ${at(x.name)} বন্ধ করুন, অথবা পজিশনগুলো শেষ না হওয়া পর্যন্ত অ্যাকাউন্টটি রেখে দিন।`,
    },
    {
      title: "নতুন ডিপোজিট অ্যাড্রেসে উইথড্র করুন",
      text: "নতুন এক্সচেঞ্জ থেকে ডিপোজিট অ্যাড্রেস কপি করুন, দুই দিকেই একই কয়েন ও একই নেটওয়ার্ক বেছে নিন এবং আগে অল্প পরিমাণ পাঠিয়ে পরীক্ষা করুন। ভুল নেটওয়ার্কে পাঠানো ট্রান্সফার হারিয়ে যেতে পারে।",
    },
    {
      title: `আপনার ${x.name} অ্যাকাউন্টের কী হবে, ঠিক করুন`,
      text: `অ্যাকাউন্টটি রেখে দিতে পারেন – আলাদা আলাদা এক্সচেঞ্জের অ্যাকাউন্ট একটি আরেকটির থেকে স্বাধীন। আপনার ফি লেভেল, রেফারেল ও অব্যবহৃত রিওয়ার্ড ${at(x.name)} থেকে যায়, নতুন এক্সচেঞ্জে যায় না।`,
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
      q: `${x.name}-এর সেরা বিকল্প কোনটি?`,
      a: `${x.name}-এর একটিমাত্র সেরা বিকল্প বলে কিছু নেই – কোনটি ভালো, তা নির্ভর করে আপনি কেন এক্সচেঞ্জ বদলাতে চান, তার ওপর। ${picks(alts)} এই পেজে ফি, লিভারেজ, প্রোডাক্ট, দেশভিত্তিক প্রাপ্যতা ও পরিচয় যাচাইয়ের দিক থেকে ${n}টিকেই ${x.name}-এর সঙ্গে তুলনা করা হয়েছে; সব তথ্য এক্সচেঞ্জগুলোর নিজস্ব সাইট থেকে নেওয়া এবং ${date} তারিখে যাচাই করা।`,
    },
    {
      q: `${x.name}-এর মতো এক্সচেঞ্জ কোনগুলো?`,
      a: `${x.name}-এর সবচেয়ে কাছাকাছি এক্সচেঞ্জ হলো ${names(alts)}। ${x.name}-এর মতো এগুলোও সেন্ট্রালাইজড এক্সচেঞ্জ: এক অ্যাকাউন্টেই স্পট ও লিভারেজসহ ফিউচার্স ট্রেডিংয়ের সুযোগ দেয় এবং নতুন ব্যবহারকারীদের জন্য রেফারেল প্রোগ্রাম চালায়। এদের পার্থক্য ফি, সর্বোচ্চ লিভারেজ, লিস্ট করা অ্যাসেটের সংখ্যা আর কোন কোন দেশের ব্যবহারকারী নেয়, তাতে।`,
    },
    {
      q: `${x.name}-এর সবচেয়ে বড় বিকল্প কোনটি?`,
      a: `CoinMarketCap-এর ডেরিভেটিভস ওপেন ইন্টারেস্ট অনুযায়ী (${prettyDate(site.marketDataDate)}-এর তথ্য) ${n}টি বিকল্পের মধ্যে সবচেয়ে বড় ${names(oi)}: ${formatBn(oi[0].market.openInterestBn)}। ${x.name}-এর নিজের ওপেন ইন্টারেস্ট ছিল ${formatBn(x.market.openInterestBn)}।`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${x.name}-এর কোন বিকল্পে ফি সবচেয়ে কম?`,
      a: `${n}টি বিকল্পের মধ্যে স্ট্যান্ডার্ড ফিউচার্স ফি সবচেয়ে কম ${names(lowF)}-এর: ${feePair(lowF[0].futuresFees)} (মেকার / টেকার)। স্পটে সবচেয়ে সস্তা ${names(lowS)}: ${feePair(lowS[0].spotFees)}। ${x.name}-এর ফি ফিউচার্সে ${feePair(x.futuresFees)}, আর স্পটে ${feePair(x.spotFees)}।${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} এগুলো স্ট্যান্ডার্ড লেভেলের হার; VIP লেভেল ও এক্সচেঞ্জের নিজস্ব টোকেনে ফি আরও কমে।`,
    },
    {
      q: `কোন কোন এক্সচেঞ্জ ${x.name}-এর চেয়ে সস্তা?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `পারপেচুয়াল ফিউচার্সে: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}, আর ${at(x.name)} ${feePair(x.futuresFees)}।` : `পারপেচুয়াল ফিউচার্সে ${n}টি বিকল্পের কোনোটিই ${x.name}-এর ${feePair(x.futuresFees)}-এর চেয়ে কম ফি নেয় না।`} ${cheaperS.length ? `স্পটে: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}, আর ${at(x.name)} ${feePair(x.spotFees)}।` : `স্পটে এদের কোনোটিই ${x.name}-এর ${feePair(x.spotFees)}-এর চেয়ে কম ফি নেয় না।`} সব হার স্ট্যান্ডার্ড লেভেলের মেকার / টেকার ফি।`
          : `স্ট্যান্ডার্ড লেভেলে ${n}টি বিকল্পের কোনোটিই ${x.name}-এর চেয়ে সস্তা নয়: ${x.name}-এর ফি ফিউচার্সে ${feePair(x.futuresFees)}, আর স্পটে ${feePair(x.spotFees)} (মেকার / টেকার) – এই তুলনায় সবচেয়ে কম। তবু অন্য কারণে বিকল্পগুলো দেখে নেওয়া যায় – রেগুলেশন, প্রোডাক্ট বা কোন কোন দেশের ব্যবহারকারী নেয়।`,
    },
    {
      q: `${x.name}-এর কোন বিকল্পে লিভারেজ সবচেয়ে বেশি?`,
      a: `${n}টি বিকল্পের মধ্যে সবচেয়ে বেশি লিভারেজ দেয় ${names(highest)}: ${bare(highest[0].maxLeverage)}। বাকিগুলো: ${alts
        .filter((a) => !highest.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join(", ")}। ${x.name} নিজে দেয় ${bare(x.maxLeverage)}। উচ্চ লিভারেজ লিকুইডেশনের ঝুঁকি অনেক বাড়িয়ে দেয়।`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `${c.name} থেকে ${x.name}-এর কোন কোন বিকল্প ব্যবহার করা যায়?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `KYC ছাড়া কি ${x.name}-এর কোনো বিকল্প ব্যবহার করা যায়?`,
      a: `এই ${n}টির কোনোটিই নয়। প্রতিটিই নতুন ব্যবহারকারীদের কাছে পরিচয় যাচাই চায়: ${alts.map((a) => `${a.name} – ${bare(a.signup.kycShort)}`).join("; ")}। ${x.name} নিজে: ${stop(x.signup.kycShort)}`,
    },
    {
      q: `${x.name}-এর কোন কোন বিকল্প EU-তে MiCA-এর অধীনে নিয়ন্ত্রিত?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} ইউরোপীয় অর্থনৈতিক অঞ্চলের (EEA) বাসিন্দাদের জন্য MiCA-এর অধীনে অনুমোদিত ${verb(mica, "একটি প্রতিষ্ঠানের", "নিজ নিজ প্রতিষ্ঠানের")} নাম জানায়।` : `${n}টির কোনোটিই MiCA-এর অধীনে অনুমোদিত কোনো প্রতিষ্ঠানের নাম জানায় না।`}${noMica.length ? ` ${names(noMica)} নিজস্ব পেজে কোনো MiCA অনুমোদনের কথা জানায় না।` : ""} ${xInfo.mica ? `${x.name} নিজে: ${stop(xInfo.mica)}` : `${x.name} নিজে এমন কোনো প্রতিষ্ঠানের নাম জানায় না।`} আঞ্চলিক প্ল্যাটফর্মে সাধারণত প্রোডাক্ট, ফি ও লিমিট আলাদা হয়।`,
    },
    {
      q: `${x.name}-এর কোন বিকল্প সবচেয়ে নিরাপদ?`,
      a: `কোনো সেন্ট্রালাইজড এক্সচেঞ্জই ঝুঁকিমুক্ত নয়, তাই সৎ তুলনা মানে প্রতিটি এক্সচেঞ্জ নিজে কী প্রকাশ করে, সেটি দেখা। ${alts.map((a) => `${a.name}: প্রুফ অব রিজার্ভস – ${stop(altInfo(a).reserves)} ${altInfo(a).fund ? stop(altInfo(a).fund) : "কোনো সুরক্ষা তহবিলের নাম উল্লেখ নেই।"}`).join(" ")} যতটুকু দিয়ে আপনি সক্রিয়ভাবে ট্রেড করেন, যেকোনো এক্সচেঞ্জে শুধু ততটুকু ফান্ডই রাখুন।`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `${x.name}-এর কোন কোন বিকল্পে ${f.noun} আছে?`,
      a: `${yes.length ? `${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))} ${f.noun} অফার করে।` : `${n}টি বিকল্পের কোনোটিই নিজস্ব সাইটে ${f.noun} দেখায় না।`}${no.length ? ` ${names(no)} এটি অফার করে না।` : ""}${unknown.length ? ` ${names(unknown)}-এর ${verb(unknown, "সাইটে", "সাইটগুলোতে")} যাচাইয়ের সময় আমরা এমন কোনো প্রোডাক্ট পাইনি।` : ""} ${own === true ? `${at(x.name)}ও এটি আছে।` : own === false ? `${x.name} নিজে এটি অফার করে না।` : `${x.name} নিজের সাইটে এমন কোনো প্রোডাক্ট দেখায় না।`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `${x.name}-এর কোন বিকল্পে সবচেয়ে বেশি কয়েন লিস্ট করা আছে?`,
      a: `এক্সচেঞ্জগুলোর নিজস্ব হিসাবে: ${alts.map((a) => `${a.name} – ${bare(a.assets)}`).join("; ")}। ${x.name}: ${stop(x.assets)} এক্সচেঞ্জগুলো আলাদাভাবে গোনে – কেউ কয়েন গোনে, কেউ ট্রেডিং পেয়ার – তাই সংখ্যাগুলো সরাসরি তুলনা করা যায় না।`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `${x.name} থেকে অন্য এক্সচেঞ্জে কীভাবে সরে যাব?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}।`)
        .join(" "),
    },
    {
      q: `অন্য এক্সচেঞ্জে অ্যাকাউন্ট খুললে কি ${x.name} অ্যাকাউন্ট রেখে দেওয়া যায়?`,
      a: `হ্যাঁ। এক্সচেঞ্জগুলো আলাদা আলাদা কোম্পানি, তাই একটির অ্যাকাউন্টের কোনো প্রভাব অন্যটির অ্যাকাউন্টে পড়ে না, আর দুটিই পাশাপাশি ব্যবহার করতে পারবেন। তবে অ্যাকাউন্টের সঙ্গে যুক্ত কিছুই সঙ্গে যায় না: আপনার ${x.name} রেফারেল, ফি লেভেল, ওয়েলকাম রিওয়ার্ড ও ট্রেডিং হিস্ট্রি ${at(x.name)} থেকে যায়।`,
    },
    {
      q: `${at(x.name)} খোলা ফিউচার্স পজিশন কি অন্য এক্সচেঞ্জে সরানো যায়?`,
      a: `না। যে এক্সচেঞ্জে খোলা হয়েছে, ফিউচার্স পজিশন শুধু সেখানেই থাকে। সরতে চাইলে ${at(x.name)} পজিশনটি বন্ধ করুন, ফান্ড উইথড্র করুন এবং অন্য এক্সচেঞ্জে নতুন পজিশন খুলুন – সেখানকার দাম ও ফি অনুযায়ী।`,
    },
    {
      q: `${x.name}-এর বিকল্পগুলোর কি রেফারেল কোড আছে?`,
      a: `হ্যাঁ, ${n}টিরই আছে: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("; ")}। রেফারেল কোড ব্যবহার করতে কোনো খরচ নেই, আর এতে আপনার ট্রেডিং ফি বাড়ে না।`,
    },
    {
      q: `${x.name}-এর বিকল্পগুলোতে কি অ্যাকাউন্ট খোলার পরে রেফারেল কোড যোগ করা যায়?`,
      a: `${alts.map((a) => `${a.name}: ${bare(a.referral.afterSignupShort)}`).join("। ")}। সব এক্সচেঞ্জেই নিরাপদ উপায় হলো রেফারেল লিংক দিয়ে রেজিস্ট্রেশন করা।`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `${a.name} কি ${x.name}-এর চেয়ে ভালো?`,
      a: `${ahead.length ? `এই বিষয়গুলোতে ${a.name} ${x.name}-এর চেয়ে এগিয়ে: ${ahead.join("; ")}।` : `আমরা যেসব বিষয় তুলনা করি, তাতে ${x.name}-এর চেয়ে ${a.name}-এর মাপা যায় এমন কোনো সুবিধা নেই।`} ${behind.length ? `${x.name} এগিয়ে এসব বিষয়ে: ${behind.join("; ")}।` : `এগুলোর কোনোটিতেই ${x.name} এগিয়ে নেই।`} যদি ${bare(altInfo(a).chooseIf[0])}, তাহলে ${a.name} আপনার জন্য উপযুক্ত।`,
    };
  });

  return [
    { id: "choosing", title: `${x.name}-এর বিকল্প বেছে নেওয়া`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "ফি ও লিভারেজ", faqs: fees },
    { id: "countries", title: "দেশ, KYC ও রেগুলেশন", faqs: countryFaqs },
    { id: "features", title: "প্রোডাক্ট ও কয়েন", faqs: featureFaqs },
    { id: "switching", title: `${x.name} থেকে সরে যাওয়া ও রেফারেল কোড`, faqs: switching },
    { id: "versus", title: `${x.name} বনাম বিকল্পগুলো`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `${x.name}-এর সেরা বিকল্প কোনগুলো?`,
    a: `${picks(alts)} আমাদের ${x.name}-এর বিকল্প পেজে ফি, লিভারেজ, প্রোডাক্ট, দেশভিত্তিক প্রাপ্যতা ও পরিচয় যাচাইয়ের দিক থেকে ${alts.length}টিকেই ${x.name}-এর সঙ্গে তুলনা করা হয়েছে।`,
  };
}

export const bn: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "হ্যাঁ", no: "না", notFound: "এক্সচেঞ্জের সাইটে পাওয়া যায়নি" },
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
