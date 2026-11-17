/**
 * The sentences of the comparison pages in Amharic. Same functions and the same logic as `./en.ts`, written in
 * Amharic grammar (the written Amharic of news and finance media, polite እርስዎ form, the site speaks as "we").
 *
 * Wording: "መድረክ" (masculine singular: "Binance ያቀርባል"; two or more names take the plural through `verb()`),
 * "ሪፈራል ኮድ", "አማራጭ" / "አማራጮች", "ክፍያ", "ሜከር / ቴከር". Prefixes are glued to a Latin name or a digit (የBinance,
 * ከOKX, በ30); postpositions and ወደ, እንደ, ያለ, እና stay separate words. No suffix is ever glued to a Latin name, a
 * code or a digit – the sentences make the name the subject or put a postposition after it.
 * Country names stand bare in `name` (the UAE with its leading የ); `in` is the "in …" form (በአሜሪካ, በተባበሩት አረብ
 * ኤምሬትስ) and `residents` carries one የ ("የአሜሪካ ነዋሪዎች"), which is stripped before a prefix.
 * Fee rates arrive in the site's notation (0.02%); leverage stays 150x; `formatBn` gives "34.1 ቢሊዮን ዶላር".
 * Ethiopic has no capital letters, so inserted data texts are never re-cased (no `lcFirst`). Data texts without a
 * final "።" (pick, kycShort, assets, reserves, fund, mica …) get one where they end a sentence; `chooseIf` items
 * always come last, after "፦".
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

const locale = "am";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
/** "6 አማራጮች" – singular after 1, plural from 2. */
const altCount = (n: number) => `${n} ${n === 1 ? "አማራጭ" : "አማራጮች"}`;

/* --------------------------------- endings --------------------------------- */

/** A data text without a final "።" – for texts that code joins itself. */
const bare = (s: string) => s.trim().replace(/\s*።$/, "");
/** Ends a data text with "።" unless it already ends a sentence. */
const stop = (s: string) => (/[።?!]$/.test(s.trim()) ? s.trim() : `${s.trim()}።`);
/** The `pick` lines of several exchanges, joined with "። " and closed with "።". */
const picks = (list: Exchange[]) => `${list.map((a) => bare(altInfo(a).pick)).join("። ")}።`;
/** `afterSignupShort` without its leading "አዎ – ". */
const withoutYes = (s: string) => s.trim().replace(/^አዎ\s*–\s*/, "");

/* -------------------------------- vocabulary -------------------------------- */

/** `label` for the tables, `noun` as the object of "ያቀርባል" in sentences ("ኮፒ ትሬዲንግ ያቀርባል"). */
const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "ኮፒ ትሬዲንግ", noun: "ኮፒ ትሬዲንግ" },
  tradingBots: { label: "የግብይት ቦቶች", noun: "የግብይት ቦቶች" },
  options: { label: "ኦፕሽንስ", noun: "የኦፕሽንስ ግብይት" },
  demoTrading: { label: "ዴሞ ግብይት", noun: "ዴሞ ግብይት" },
  margin: { label: "ስፖት ማርጂን", noun: "የስፖት ማርጂን ግብይት" },
  p2p: { label: "P2P ግብይት", noun: "P2P ግብይት" },
  fiat: { label: "በካርድ / በባንክ መግዛት", noun: "በካርድ ወይም በባንክ ዝውውር ክሪፕቶ የመግዛት አገልግሎት" },
  earn: { label: "Earn / ስቴኪንግ", noun: "የEarn ምርቶች" },
  launchpad: { label: "Launchpad / Launchpool", noun: "Launchpad" },
  web3Wallet: { label: "Web3 ዋሌት", noun: "ራስዎ የሚቆጣጠሩት (self-custody) Web3 ዋሌት" },
  card: { label: "ክሪፕቶ ካርድ", noun: "ክሪፕቶ ካርድ" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` for sentences, `short` for the tables. */
const countryWords: Record<CountryKey, { name: string; short: string }> = {
  us: { name: "አሜሪካ", short: "አሜሪካ" },
  uk: { name: "ዩናይትድ ኪንግደም", short: "ዩኬ" },
  ca: { name: "ካናዳ", short: "ካናዳ" },
  de: { name: "ጀርመን", short: "ጀርመን" },
  fr: { name: "ፈረንሳይ", short: "ፈረንሳይ" },
  nl: { name: "ኔዘርላንድስ", short: "ኔዘርላንድስ" },
  es: { name: "ስፔን", short: "ስፔን" },
  it: { name: "ጣሊያን", short: "ጣሊያን" },
  au: { name: "አውስትራሊያ", short: "አውስትራሊያ" },
  jp: { name: "ጃፓን", short: "ጃፓን" },
  sg: { name: "ሲንጋፖር", short: "ሲንጋፖር" },
  hk: { name: "ሆንግ ኮንግ", short: "ሆንግ ኮንግ" },
  in: { name: "ሕንድ", short: "ሕንድ" },
  ae: { name: "የተባበሩት አረብ ኤምሬትስ", short: "ኤምሬትስ" },
};
/** A name that already begins with የ loses it under a prefix: "በተባበሩት አረብ ኤምሬትስ". */
const noYe = (s: string) => s.replace(/^የ/, "");
/** `in` – "በአሜሪካ"; `residents` – "የአሜሪካ ነዋሪዎች" (one የ). */
const countries = countryList.map((c) => {
  const { name, short } = countryWords[c.key];
  return { key: c.key, name, short, in: `በ${noYe(name)}`, residents: `የ${noYe(name)} ነዋሪዎች` };
});

const statusLabel: Record<CountryStatus, string> = {
  restricted: "የተከለከለ",
  regional: "አካባቢያዊ ድረ-ገጽ",
  partial: "በከፊል",
  open: "ያልተከለከለ",
};

/** The market of a fee comparison: "ስፖት" / "ፐርፔችዋል ፊውቸርስ" (with በ: "በስፖት"). */
const marketName = (market: "spot" | "futures") => (market === "spot" ? "ስፖት" : "ፐርፔችዋል ፊውቸርስ");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const label = marketName(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${a.name} እና ${x.name} በ${label} ተመሳሳይ መደበኛ ክፍያ ያስከፍላሉ፦ ${fa.maker} ሜከር / ${fa.taker} ቴከር።`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} ለሜከርም ለቴከርም ያነሰ ክፍያ ያስከፍላል`
      : mm !== 0
        ? `${who} ለሜከር ያነሰ ክፍያ ያስከፍላል፣ ቴከሮች ግን እኩል ይከፍላሉ`
        : `${who} ለቴከር ያነሰ ክፍያ ያስከፍላል፣ ሜከሮች ግን እኩል ይከፍላሉ`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} ለሜከር፣ ${x.name} ደግሞ ለቴከር ያነሰ ክፍያ ያስከፍላሉ`
          : `${x.name} ለሜከር፣ ${a.name} ደግሞ ለቴከር ያነሰ ክፍያ ያስከፍላሉ`;
  return `በ${label} የ${a.name} ክፍያ ${fa.maker} ሜከር / ${fa.taker} ቴከር ሲሆን የ${x.name} ደግሞ ${fx.maker} / ${fx.taker} ነው – ${verdict}።`;
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
    `በ${marketName(market)} ${x.name} ${feePair(fx)} (ሜከር / ቴከር) ያስከፍላል።`,
    lower.length ? `ያነሰ ክፍያ ያላቸው፦ ${rates(lower)}።` : `ከ${altCount(alts.length)} መካከል ያነሰ ክፍያ የሚያስከፍል የለም።`,
    same.length ? `ተመሳሳይ ክፍያ ያላቸው፦ ${names(same)}።` : "",
    higher.length ? `ከፍ ያለ ክፍያ ያላቸው፦ ${rates(higher)}።` : "",
    mixed.length ? `በሜከር ወይም በቴከር ብቻ ያነሰ ክፍያ ያላቸው፦ ${rates(mixed)}።` : "",
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
    if (m < 0 && t < 0) out.push(`ያነሰ የ${label} ክፍያ፦ ከ${feePair(fx)} ይልቅ ${feePair(fa)} (ሜከር / ቴከር)`);
    else if (m < 0 && t === 0) out.push(`ያነሰ የ${label} ሜከር ክፍያ፦ ከ${fx.maker} ይልቅ ${fa.maker}`);
    else if (t < 0 && m === 0) out.push(`ያነሰ የ${label} ቴከር ክፍያ፦ ከ${fx.taker} ይልቅ ${fa.taker}`);
    else if (m < 0) out.push(`ያነሰ የ${label} ሜከር ክፍያ፦ ከ${fx.maker} ይልቅ ${fa.maker} (የቴከር ክፍያው ግን ከፍ ያለ ነው)`);
    else if (t < 0) out.push(`ያነሰ የ${label} ቴከር ክፍያ፦ ከ${fx.taker} ይልቅ ${fa.taker} (የሜከር ክፍያው ግን ከፍ ያለ ነው)`);
  };
  fee("ስፖት", a.spotFees, x.spotFees);
  fee("ፊውቸርስ", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`ከፍ ያለ የሌቨሬጅ ጣሪያ፦ ከ${leverageOf(x)}x ይልቅ ${leverageOf(a)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`የበለጠ የዴሪቬቲቭስ ኦፕን ኢንተረስት፦ ${formatBn(a.market.openInterestBn)}፣ ${x.name} ላይ ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`የበለጠ የዴሪቬቲቭስ ገበያዎች ብዛት፦ ${a.market.markets}፣ ${x.name} ላይ ${x.market.markets}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`የረሱትን ሪፈራል ኮድ ቆይተውም ማስገባት ይችላሉ (${withoutYes(a.referral.afterSignupShort)})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`${joinList(notOffered.map((f) => f.noun))} ያቀርባል፣ ${x.name} ግን አያቀርብም`);
  if (notFound.length)
    out.push(`${joinList(notFound.map((f) => f.noun))} ያቀርባል – በ${x.name} የራሱ ድረ-ገጽ ላይ እንዲህ ያለ ምርት አላገኘንም`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`በMiCA መሠረት ፈቃድ ያለው የEEA መድረክ (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`${joinList(openWhere.map((c) => c.name))} ላይ ገደብ አልጣለም፣ ${x.name} ግን እዚያ ዝግ ነው`);
  if (regionalWhere.length)
    out.push(`${joinList(regionalWhere.map((c) => c.in))} ያሉ ተጠቃሚዎችን በአካባቢያዊ መድረክ በኩል ያገለግላል፣ ${x.name} ግን እዚያ ዝግ ነው`);
  return out;
}

/* ---------------------------------- country --------------------------------- */

/** Plain-text answer to "Which alternatives to x can be used in this country?". */
function countryAnswer(x: Exchange, alts: Exchange[], country: (typeof countryList)[number]): string {
  const c = countries.find((it) => it.key === country.key)!;
  const own = altInfo(x).countries[c.key];
  const g = countryGroups(alts, c.key);
  const note = (a: Exchange) => altInfo(a).countries[c.key].note;
  const withNote = (list: Exchange[]) => list.map((a) => (note(a) ? `${a.name} (${note(a)})` : a.name));
  const ownNote = own.note ? ` (${own.note})` : "";
  const parts: string[] = [];
  if (own.status === "restricted") parts.push(`${x.name} ${c.name}ን በራሱ የተከለከሉ አገሮች ዝርዝር ውስጥ አካቷል።`);
  else if (own.status === "partial") parts.push(`${x.name}${ownNote} ${c.name} ላይ በከፊል ገደብ ጥሏል።`);
  else if (own.status === "regional") parts.push(`${x.name}${ownNote} ${c.residents}ን በአካባቢያዊ መድረክ በኩል ያገለግላል።`);
  else parts.push(`${x.name} ${c.name}ን በተከለከሉ አገሮች ዝርዝሩ ውስጥ አላካተተም።`);
  if (g.open.length) parts.push(`${names(g.open)} ${c.name}ን በተከለከሉ አገሮች ዝርዝር ውስጥ ${verb(g.open, "አላካተተም", "አላካተቱም")}።`);
  if (g.regional.length)
    parts.push(
      `${joinList(withNote(g.regional))} ${c.residents}ን ${verb(g.regional, "በተለየ አካባቢያዊ መድረክ በኩል ያገለግላል", "እያንዳንዳቸው በተለየ አካባቢያዊ መድረክ በኩል ያገለግላሉ")}።`,
    );
  if (g.partial.length) parts.push(`በከፊል ገደብ የጣሉ፦ ${withNote(g.partial).join("፤ ")}።`);
  if (g.restricted.length)
    parts.push(`${names(g.restricted)} ${own.status === "restricted" ? "እንዲሁ " : ""}${c.name} ላይ ገደብ ${verb(g.restricted, "ጥሏል", "ጥለዋል")}።`);
  if (!g.open.length && !g.regional.length) parts.push(`ከ${altCount(alts.length)} መካከል ለ${noYe(c.residents)} ሙሉ በሙሉ ክፍት የሆነ የለም።`);
  parts.push(
    "የአገሮች ዝርዝሮች ይቀየራሉ፤ አንድ አገር በዝርዝሩ ውስጥ አለመኖሩም ሁሉም ምርቶች እዚያ እንደሚቀርቡ ዋስትና አይሆንም – ወሳኙ የመድረኩ የራሱ የአጠቃቀም ደንቦች ናቸው።",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `እዚህ የምናነጻጽራቸው የ${withReading(x, locale)} አማራጮች ${alts.length} ናቸው፦ ${names(alts)}። ${picks(alts)} ሁሉም ${altCount(alts.length)} ከአዲስ ተጠቃሚዎች የማንነት ማረጋገጫ (KYC) ይጠይቃሉ፤ እያንዳንዳቸውም የራሳቸው የተከለከሉ አገሮች ዝርዝር አላቸው። ስለዚህ ከመመዝገብዎ በፊት የአገሮችን ሰንጠረዥ ይመልከቱ።`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `አዲሱ መድረክ ከ${x.name} በምን መብለጥ እንዳለበት ይወስኑ`,
      text: `ያነሰ ክፍያ፣ የበለጠ ሌቨሬጅ፣ ብዙ ኮይኖች ወይም በቀላሉ አገርዎን የሚቀበል መድረክ፦ በዚህ ገጽ ላይ ያሉት ሰንጠረዦች እያንዳንዱ አማራጭ ከ${x.name} በምን እንደሚበልጥ እና በምን እንደማይበልጥ ያሳያሉ።`,
    },
    {
      title: "መድረኩ አገርዎን እንደሚቀበል ያረጋግጡ",
      text: "እያንዳንዱ መድረክ የራሱ የተከለከሉ አገሮች ዝርዝር አለው፤ አንዳንዶቹ ደግሞ ምርቶቻቸውና ገደቦቻቸው ወደሚለያዩ አካባቢያዊ መድረኮች ይመሩዎታል። ከመመዝገብዎ በፊት የአገሮችን ሰንጠረዥ ይመልከቱ።",
    },
    {
      title: "በሪፈራል ሊንኩ ይመዝገቡ",
      text: `${names(signupOnly)} ሪፈራል ኮድ ${verb(signupOnly, "የሚቀበለው", "የሚቀበሉት")} በምዝገባ ጊዜ ብቻ ነው ወይም ኮዱን በኋላ የማስገቢያ መንገድ ${verb(signupOnly, "አልገለጸም", "አልገለጹም")}፤ ስለዚህ አካውንቱ ከመከፈቱ በፊት ሊንኩን ይጠቀሙ።${later.length ? ` ${names(later)} በተወሰኑ ሁኔታዎች ኮዱን በኋላ ማስገባት ${verb(later, "ይፈቅዳል", "ይፈቅዳሉ")}።` : ""}`,
    },
    {
      title: "ገንዘብ ከማዛወርዎ በፊት ማንነትዎን ያረጋግጡ",
      text: `ሁሉም ${altCount(alts.length)} ከአዲስ ተጠቃሚዎች የማንነት ማረጋገጫ ይጠይቃሉ፤ በአብዛኞቹ ላይ ደግሞ ማረጋገጫው እስኪጠናቀቅ ድረስ ገንዘብ ማስገባት ወይም መገበያየት ዝግ ሆኖ ይቆያል። ፓስፖርት፣ የመታወቂያ ካርድ ወይም መንጃ ፈቃድ ያዘጋጁ።`,
    },
    {
      title: `${x.name} ላይ ያሉ ክፍት ፖዚሽኖችዎን ይዝጉ`,
      text: `የፊውቸርስ እና የማርጂን ፖዚሽኖችን ከአንድ መድረክ ወደ ሌላ ማዛወር አይቻልም። መጀመሪያ ${x.name} ላይ ይዝጓቸው፣ ወይም ጊዜያቸው እስኪያበቃ ድረስ አካውንቱን ይያዙ።`,
    },
    {
      title: "ገንዘቡን ወደ አዲሱ የዲፖዚት አድራሻዎ ያውጡ",
      text: "የዲፖዚት አድራሻውን ከአዲሱ መድረክ ይቅዱ፣ በሁለቱም በኩል አንድ አይነት ኮይን እና አንድ አይነት ኔትወርክ ይምረጡ፣ መጀመሪያም አነስተኛ የሙከራ መጠን ይላኩ። በተሳሳተ ኔትወርክ የተላከ ገንዘብ ሊጠፋ ይችላል።",
    },
    {
      title: `የ${x.name} አካውንትዎ ምን እንደሚሆን ይወስኑ`,
      text: `አካውንቱን መያዝ ይችላሉ – በተለያዩ መድረኮች ያሉ አካውንቶች አንዱ በሌላው ላይ ጥገኛ አይደሉም። የክፍያ ደረጃዎ፣ ሪፈራልዎ እና ያልተጠቀሙባቸው ሽልማቶች ${x.name} ላይ ይቀራሉ እንጂ አይተላለፉም።`,
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
      q: `ምርጡ የ${x.name} አማራጭ የትኛው ነው?`,
      a: `አንድ ብቸኛ ምርጥ የ${x.name} አማራጭ የለም – መልሱ መድረክ ለመቀየር በሚፈልጉበት ምክንያት ይወሰናል። ${picks(alts)} በዚህ ገጽ ላይ ሁሉም ${altCount(n)} ከ${x.name} ጋር በክፍያ፣ በሌቨሬጅ፣ በምርቶች፣ በአገሮች ተደራሽነት እና በማንነት ማረጋገጫ ተነጻጽረዋል፤ አሃዞቹ ከመድረኮቹ የራሳቸው ድረ-ገጾች የተወሰዱ ሲሆኑ በ${date} ተረጋግጠዋል።`,
    },
    {
      q: `ከ${x.name} ጋር የሚመሳሰሉ መድረኮች የትኞቹ ናቸው?`,
      a: `ከ${x.name} ጋር በጣም የሚቀራረቡት ${names(alts)} ናቸው። እንደ ${x.name} ሁሉ እነዚህም ስፖት እና በሌቨሬጅ የሚደረግ የፊውቸርስ ግብይትን በአንድ አካውንት የሚያቀርቡ፣ ለአዲስ ተጠቃሚዎችም ሪፈራል ፕሮግራም ያላቸው ማዕከላዊ (centralised) የክሪፕቶ ግብይት መድረኮች ናቸው። የሚለያዩት በክፍያ፣ በከፍተኛው ሌቨሬጅ፣ በተዘረዘሩ ንብረቶች ብዛት እና በሚቀበሏቸው አገሮች ነው።`,
    },
    {
      q: `ትልቁ የ${x.name} አማራጭ የትኛው ነው?`,
      a: `በCoinMarketCap የ${prettyDate(site.marketDataDate)} መረጃ መሠረት፣ በዴሪቬቲቭስ ኦፕን ኢንተረስት (Open Interest) ሲለካ ከ${altCount(n)} መካከል ${verb(oi, "ትልቁ", "ትልቆቹ")} ${formatBn(oi[0].market.openInterestBn)} ${verb(oi, "ያለው", "ያላቸው")} ${names(oi)} ${verb(oi, "ነው", "ናቸው")}። የ${x.name} የራሱ ኦፕን ኢንተረስት ${formatBn(x.market.openInterestBn)} ነበር።`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `ዝቅተኛው ክፍያ ያለው የ${x.name} አማራጭ የትኛው ነው?`,
      a: `${names(lowF)} ከ${altCount(n)} መካከል ዝቅተኛውን መደበኛ የፊውቸርስ ክፍያ ${verb(lowF, "ያስከፍላል", "ያስከፍላሉ")}፦ ${feePair(lowF[0].futuresFees)} (ሜከር / ቴከር)። በስፖት ደግሞ ዝቅተኛውን ክፍያ (${feePair(lowS[0].spotFees)}) ${verb(lowS, "የሚያስከፍለው", "የሚያስከፍሉት")} ${names(lowS)} ${verb(lowS, "ነው", "ናቸው")}። ${x.name} በፊውቸርስ ${feePair(x.futuresFees)}፣ በስፖት ደግሞ ${feePair(x.spotFees)} ያስከፍላል።${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} እነዚህ የመደበኛ ደረጃ ተመኖች ናቸው፤ የVIP ደረጃዎች እና የመድረኮቹ የራሳቸው ቶከኖች ክፍያውን የበለጠ ይቀንሱታል።`,
    },
    {
      q: `ከ${x.name} ያነሰ ክፍያ የሚያስከፍሉ መድረኮች የትኞቹ ናቸው?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `በፐርፔችዋል ፊውቸርስ፦ ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}፤ በ${x.name} ደግሞ ${feePair(x.futuresFees)} ነው።` : `በፐርፔችዋል ፊውቸርስ ከ${altCount(n)} መካከል ከ${x.name} ክፍያ (${feePair(x.futuresFees)}) ያነሰ የሚያስከፍል የለም።`} ${cheaperS.length ? `በስፖት፦ ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}፤ በ${x.name} ደግሞ ${feePair(x.spotFees)} ነው።` : `በስፖት ደግሞ ከእነሱ መካከል ከ${x.name} ክፍያ (${feePair(x.spotFees)}) ያነሰ የሚያስከፍል የለም።`} ሁሉም አሃዞች በመደበኛ ደረጃ ያሉ የሜከር / ቴከር ክፍያዎች ናቸው።`
          : `በመደበኛ ደረጃ ከ${altCount(n)} መካከል ከ${x.name} ያነሰ ክፍያ የሚያስከፍል የለም፦ ${x.name} በፊውቸርስ ${feePair(x.futuresFees)}፣ በስፖት ደግሞ ${feePair(x.spotFees)} (ሜከር / ቴከር) ያስከፍላል፤ እነዚህም በዚህ ንጽጽር ውስጥ ዝቅተኛዎቹ ተመኖች ናቸው። ቢሆንም አማራጮቹን በሌሎች ምክንያቶች ማየት ተገቢ ነው – በቁጥጥር፣ በምርቶች ወይም በሚቀበሏቸው አገሮች።`,
    },
    {
      q: `ከፍተኛውን ሌቨሬጅ የሚያቀርበው የ${x.name} አማራጭ የትኛው ነው?`,
      a: `${names(highest)} ከ${altCount(n)} መካከል ከፍተኛውን ሌቨሬጅ ${verb(highest, "ያቀርባል", "ያቀርባሉ")}፦ ${highest[0].maxLeverage}። የቀሩት፦ ${alts
        .filter((a) => !highest.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join("፣ ")}። ${x.name} ራሱ የሚሰጠው ሌቨሬጅ፦ ${x.maxLeverage}። ከፍተኛ ሌቨሬጅ የሊኩዊዴሽን ስጋትን በእጅጉ ይጨምራል።`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `${c.in} የትኞቹን የ${x.name} አማራጮች መጠቀም ይቻላል?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `ያለ KYC መጠቀም የሚቻል የ${x.name} አማራጭ አለ?`,
      a: `ከእነዚህ ${altCount(n)} መካከል የለም። እያንዳንዳቸው ከአዲስ ተጠቃሚዎች የማንነት ማረጋገጫ ይጠይቃሉ፦ ${alts.map((a) => `${a.name} – ${bare(a.signup.kycShort)}`).join("፤ ")}። ${x.name} ራሱ፦ ${stop(x.signup.kycShort)}`,
    },
    {
      q: `በአውሮፓ ኅብረት (EU) በMiCA ቁጥጥር ስር ያሉ የ${x.name} አማራጮች የትኞቹ ናቸው?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} ለአውሮፓ ኢኮኖሚያዊ ቀጣና (EEA) ነዋሪዎች በMiCA ፈቃድ ያገኘ ሕጋዊ አካል ${verb(mica, "ይጠቅሳል", "ይጠቅሳሉ")}።` : `ከ${altCount(n)} መካከል በMiCA ፈቃድ ያገኘ ሕጋዊ አካል የሚጠቅስ የለም።`}${noMica.length ? ` ${names(noMica)} ${verb(noMica, "በራሱ", "በራሳቸው")} ገጾች ላይ ምንም የMiCA ፈቃድ ${verb(noMica, "አይጠቅስም", "አይጠቅሱም")}።` : ""} ${xInfo.mica ? `${x.name} ራሱ፦ ${stop(xInfo.mica)}` : `${x.name} ራሱ እንዲህ ያለ ሕጋዊ አካል አይጠቅስም።`} አካባቢያዊ መድረክ አብዛኛውን ጊዜ የራሱ ምርቶች፣ ክፍያዎች እና ገደቦች አሉት።`,
    },
    {
      q: `በጣም ደህንነቱ የተጠበቀው የ${x.name} አማራጭ የትኛው ነው?`,
      a: `ከስጋት ነፃ የሆነ ማዕከላዊ መድረክ የለም፤ ስለዚህ ሐቀኛው ንጽጽር እያንዳንዱ መድረክ ይፋ የሚያደርገውን ማየት ነው። ${alts.map((a, i) => `${a.name}፦ የመጠባበቂያ ክምችት ማረጋገጫ${i === 0 ? " (Proof of Reserves)" : ""} – ${stop(altInfo(a).reserves)} ${altInfo(a).fund ? stop(altInfo(a).fund) : "ምንም የጥበቃ ፈንድ አልተጠቀሰም።"}`).join(" ")} በየትኛውም መድረክ ላይ በንቃት የሚገበያዩበትን ገንዘብ ብቻ ያስቀምጡ።`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `${f.noun} የሚያቀርቡ የ${x.name} አማራጮች የትኞቹ ናቸው?`,
      a: `${yes.length ? `${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))} ${f.noun} ${verb(yes, "ያቀርባል", "ያቀርባሉ")}።` : `ከ${altCount(n)} መካከል በራሱ ድረ-ገጽ ላይ ${f.noun} የሚያሳይ የለም።`}${no.length ? ` ${names(no)} ይህን ${verb(no, "አያቀርብም", "አያቀርቡም")}።` : ""}${unknown.length ? ` ባደረግነው ፍተሻ ${joinList(unknown.map((a) => `በ${a.name}`))} ${verb(unknown, "ድረ-ገጽ", "ድረ-ገጾች")} ላይ እንዲህ ያለ ምርት አላገኘንም።` : ""} ${own === true ? `${x.name} ራሱም ይህን ያቀርባል።` : own === false ? `${x.name} ራሱ ይህን አያቀርብም።` : `${x.name} ራሱ በድረ-ገጹ ላይ እንዲህ ያለ ምርት አያሳይም።`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `በጣም ብዙ ኮይኖች የተዘረዘሩበት የ${x.name} አማራጭ የትኛው ነው?`,
      a: `መድረኮቹ ራሳቸው ባወጡት አሃዝ መሠረት፦ ${alts.map((a) => `${a.name} – ${bare(a.assets)}`).join("፤ ")}። ${x.name}፦ ${stop(x.assets)} መድረኮቹ የሚቆጥሩት በተለያየ መንገድ ነው – አንዳንዶቹ ኮይኖችን፣ ሌሎቹ ደግሞ የግብይት ጥንዶችን ይቆጥራሉ – ስለዚህ አሃዞቹን በቀጥታ ማነጻጸር አይቻልም።`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `ከ${x.name} ወደ ሌላ መድረክ እንዴት መቀየር ይቻላል?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}።`)
        .join(" "),
    },
    {
      q: `በሌላ መድረክ አካውንት ከከፈቱ በኋላ የ${x.name} አካውንትዎን መያዝ ይቻላል?`,
      a: `አዎ። መድረኮቹ የተለያዩ ኩባንያዎች ናቸው፤ ስለዚህ በአንዱ ያለ አካውንት በሌላው ያለን አካውንት አይነካም፣ ሁለቱንም ጎን ለጎን መጠቀም ይችላሉ። ከአካውንቱ ጋር የተያያዘ ማንኛውም ነገር ግን አይተላለፍም፦ የ${x.name} ሪፈራልዎ፣ የክፍያ ደረጃዎ፣ የእንኳን ደህና መጡ ሽልማቶችዎ እና የግብይት ታሪክዎ ${x.name} ላይ ይቀራሉ።`,
    },
    {
      q: `ክፍት የፊውቸርስ ፖዚሽኖችን ከ${x.name} ወደ ሌላ መድረክ ማዛወር ይቻላል?`,
      a: `አይቻልም። የፊውቸርስ ፖዚሽን የሚኖረው በተከፈተበት መድረክ ላይ ብቻ ነው። ለመቀየር ፖዚሽኑን ${x.name} ላይ ይዝጉ፣ ገንዘቡን ያውጡ እና በሌላው መድረክ አዲስ ፖዚሽን ይክፈቱ – እዚያ በሚሠራው ዋጋ እና ክፍያ።`,
    },
    {
      q: `የ${x.name} አማራጮች ሪፈራል ኮድ አላቸው?`,
      a: `አዎ፣ ሁሉም ${altCount(n)} ሪፈራል ኮድ አላቸው፦ ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("፤ ")}። ሪፈራል ኮድ መጠቀም ነፃ ነው፤ የግብይት ክፍያዎንም አይጨምርም።`,
    },
    {
      q: `በ${x.name} አማራጮች ላይ ሪፈራል ኮድ በኋላ ማስገባት ይቻላል?`,
      a: `${alts.map((a) => `${a.name}፦ ${bare(a.referral.afterSignupShort)}`).join("። ")}። በየትኛውም መድረክ ላይ አስተማማኙ መንገድ በሪፈራል ሊንኩ መመዝገብ ነው።`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `${a.name} ከ${x.name} ይሻላል?`,
      a: `${ahead.length ? `${a.name} በእነዚህ ነጥቦች ከ${x.name} ብልጫ አለው፦ ${ahead.join("፤ ")}።` : `በምናነጻጽራቸው ነጥቦች ${a.name} ከ${x.name} የሚለካ ብልጫ የለውም።`} ${behind.length ? `${x.name} ደግሞ በእነዚህ ብልጫ አለው፦ ${behind.join("፤ ")}።` : `${x.name} ደግሞ በአንዱም ብልጫ የለውም።`} ${a.name} የሚስማማዎት፦ ${bare(altInfo(a).chooseIf[0])}።`,
    };
  });

  return [
    { id: "choosing", title: `የ${x.name} አማራጭ መምረጥ`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "ክፍያ እና ሌቨሬጅ", faqs: fees },
    { id: "countries", title: "አገሮች፣ KYC እና ቁጥጥር", faqs: countryFaqs },
    { id: "features", title: "ምርቶች እና ኮይኖች", faqs: featureFaqs },
    { id: "switching", title: `ከ${x.name} መቀየር እና ሪፈራል ኮዶች`, faqs: switching },
    { id: "versus", title: `${x.name} vs አማራጮቹ`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `ምርጥ የ${x.name} አማራጮች የትኞቹ ናቸው?`,
    a: `${picks(alts)} የ${x.name} አማራጮች ገጻችን ሁሉንም ${altCount(alts.length)} ከ${x.name} ጋር በክፍያ፣ በሌቨሬጅ፣ በምርቶች፣ በአገሮች ተደራሽነት እና በማንነት ማረጋገጫ ያነጻጽራል።`,
  };
}

export const am: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "አዎ", no: "አይ", notFound: "በድረ-ገጹ ላይ አልተገኘም" },
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
