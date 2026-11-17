/**
 * The head-to-head pages ("/am/<a>-vs-<b>") and the comparison hub in Amharic.
 * Same keys as `./en.tsx`, written natively for readers in Ethiopia (polite እርስዎ form, news and finance register).
 *
 * Wording: "መድረክ" for an exchange (masculine singular: "Binance ያቀርባል", two or more plural), "ክፍያ", "ሪፈራል ኮድ",
 * "ሌቨሬጅ", "ስፖት", "ፊውቸርስ"; KYC and MiCA stay in Latin letters. The pages call themselves "አንድ ለአንድ ንጽጽር", the hub
 * "የመድረኮች ንጽጽር"; the better value of a row is "ብልጫ ያለው", a tie "እኩል". "vs" stays "vs" in titles, crumbs and labels.
 * Prefixes are glued to a Latin name or a digit ("የBinance", "ከOKX", "በ30"), postpositions stay separate words
 * ("Binance ላይ", "ከOKX ጋር"), and no suffix is ever glued to a Latin name, a code or a digit. Nothing is glued in front
 * of a country name from the data: "in …" comes from `countryIn` below. The Ethiopic spellings of the names
 * ("Binance (ባይናንስ)") appear only in the title, the H1, the first mention in the lead and the keywords.
 * Ethiopic has no capital letters, so texts from the data are inserted as they are (no `lcFirst`); data texts that end
 * a sentence get "።" from the code (`bare` drops one they may already carry).
 */
import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, leverageOf, verb } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import { readingOf, withReading } from "../name-readings";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "am";
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

/** The name with its Ethiopic spelling, for the title, the H1 and the first mention in the lead. */
const named = (e: Exchange) => withReading(e, locale);
/** A data text without a closing mark, for sentences the code closes itself. */
const bare = (s: string) => s.trim().replace(/[።.]$/, "");
/** A data text that stands as a sentence of its own, closed with "።". */
const sentence = (s: string) => (/[።?!]$/.test(s.trim()) ? s.trim() : `${bare(s)}።`);
/** Drops the source bracket of `users` / `assets`: "(Binance እንደገለጸው)", "(Bybit API)". */
const withoutSource = (s: string) => bare(s.replace(/\s*\((?:[^()]*እንደ\s?ገለ[ጸፀ]ው|[^()]*\bAPI)\)/, ""));
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
/** Counted nouns: the singular after 1, the plural from 2. */
const points = (n: number) => (n === 1 ? "ነጥብ" : "ነጥቦች");
const marketsWord = (n: number) => (n === 1 ? "ገበያ" : "ገበያዎች");

/** "in <country>", by country key – the forms of the sheet (the UAE loses its የ after the prefix). */
const countryIn: Record<CountryKey, string> = {
  us: "በአሜሪካ",
  uk: "በዩናይትድ ኪንግደም",
  ca: "በካናዳ",
  de: "በጀርመን",
  fr: "በፈረንሳይ",
  nl: "በኔዘርላንድስ",
  es: "በስፔን",
  it: "በጣሊያን",
  au: "በአውስትራሊያ",
  jp: "በጃፓን",
  sg: "በሲንጋፖር",
  hk: "በሆንግ ኮንግ",
  in: "በሕንድ",
  ae: "በተባበሩት አረብ ኤምሬትስ",
};
const inCountry = (c: Country) => countryIn[c.key] ?? `${c.name} ውስጥ`;

/** CoinMarketCap's derivatives ranking, without a prefix: "የ…", "በ…", "ከ…" go in front. */
const cmc = "CoinMarketCap የዴሪቬቲቭስ ደረጃ ዝርዝር";
const leverageRisk = "ከፍተኛ ሌቨሬጅ የሊኩዊዴሽን ስጋትን በእጅጉ ይጨምራል።";
const regionalNote = "አካባቢያዊ መድረክ ብዙውን ጊዜ የራሱ ምርቶች፣ ክፍያዎች እና ገደቦች አሉት።";
const safeWay = "አስተማማኙ መንገድ በሪፈራል ሊንኩ መመዝገብ ነው።";

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length === 0
      ? `${e.name} ከእነዚህ ነጥቦች በአንዱም ብልጫ የለውም`
      : rows.length === 1
        ? `${e.name} ብልጫ ያለው በዚህ ነጥብ ነው፦ ${rows[0].topic}`
        : `${e.name} ብልጫ ያለው በሚከተሉት ነጥቦች ነው፦ ${joinList(rows.map((r) => r.topic))}`;
  const rest = s.tie.length === 1 ? "በቀሪው 1 ነጥብ" : `በቀሪዎቹ ${s.tie.length} ነጥቦች`;
  return `${a.name} እና ${b.name} አንዳቸውም በሁሉም ነጥብ የተሻሉ አይደሉም። በዚህ ንጽጽር በአሃዝ ሊለኩ ከሚችሉት ${s.measurable} ነጥቦች ውስጥ ${a.name} በ${s.a.length} ${points(s.a.length)}፣ ${b.name} ደግሞ በ${s.b.length} ${points(s.b.length)} ብልጫ አላቸው${s.tie.length ? `፤ ${rest} እኩል ናቸው` : ""}። ${lead(a, s.a)}። ${lead(b, s.b)}። ${a.name} የሚሻልዎት፦ ${bare(altInfo(a).chooseIf[0])}። ${b.name} የሚሻልዎት፦ ${bare(altInfo(b).chooseIf[0])}።`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb) return `${a.name} እና ${b.name} ላይ ያለው ከፍተኛ ሌቨሬጅ እኩል ነው፦ ${a.name} ላይ ${bare(a.maxLeverage)}፣ ${b.name} ላይ ${bare(b.maxLeverage)}።`;
  const [high, low] = la > lb ? [a, b] : [b, a];
  return `ከፍተኛው ሌቨሬጅ የሚበልጠው ${high.name} ላይ ነው – ${bare(high.maxLeverage)}፤ ${low.name} ላይ ግን ${bare(low.maxLeverage)} ነው።`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `በ${cmc} (${prettyDate(site.marketDataDate)}) የ${a.name} ኦፕን ኢንተረስት (Open Interest) በ${a.market.markets} ${marketsWord(a.market.markets)} ${formatBn(a.market.openInterestBn)} ነበር፤ የ${b.name} ደግሞ በ${b.market.markets} ${marketsWord(b.market.markets)} ${formatBn(b.market.openInterestBn)}። ሊኩዊዲቲው ከፍ ያለው ገበያ የ${deeper.name} ነው፤ ይህ ደግሞ ብዙውን ጊዜ በትላልቅ ኦርደሮች ላይ ጠባብ ስፕሬድ ማለት ነው።`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${a.name} ${joinList(notOffered.map((f) => f.noun))} ያቀርባል፤ ${b.name} ግን አያቀርብም።` : "",
    notFound.length ? `${a.name} ${joinList(notFound.map((f) => f.noun))} ያቀርባል፤ በ${b.name} የራሱ ድረ-ገጽ ላይ ግን እንዲህ ያለ ምርት አላገኘንም።` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** The status of one exchange in one country. A note stands in brackets right after the exchange name. */
const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${bare(note)})` : "";
  if (status === "restricted") return `${e.name}${extra} ለ${c.residents.replace(/^የ/, "")} ዝግ ነው`;
  if (status === "regional") return `${e.name}${extra} ${c.residents}ን በአካባቢያዊ መድረክ በኩል ያገለግላል`;
  if (status === "partial") return `${e.name}${extra} ${inCountry(c)} በከፊል ገደብ ጥሏል`;
  return `${c.name} በ${e.name} የተከለከሉ አገሮች ዝርዝር ውስጥ የለም`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("am").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}። ${statusPhrase(b, c)}። የአገሮች ዝርዝሮች ይቀየራሉ፤ አንድ አገር በዝርዝሩ ውስጥ አለመኖሩም እዚያ ሁሉም ምርቶች እንደሚቀርቡ ዋስትና አይሆንም – የሚወስነው የመድረኩ የራሱ የአጠቃቀም ደንቦች ናቸው።`;

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
      ? "በሁለቱም ላይ አለ"
      : has(a, key)
        ? `${a.name} ላይ ብቻ አለ`
        : has(b, key)
          ? `${b.name} ላይ ብቻ አለ`
          : "በሁለቱም ድረ-ገጾች ላይ አልተገኘም";
  const noTokenDiscount = "እንዲህ ያለ ቅናሽ አልተገለጸም።";
  const fund = (f: string) => `የጥበቃ ፈንድ፦ ${f ? bare(f) : "አልተጠቀሰም"}።`;
  const micaOf = (m: string) => (m ? `አዎ – ${bare(m)}` : "በራሱ ገጾች ላይ በMiCA ፈቃድ ያገኘ አካል አልጠቀሰም");

  const verdict: Faq[] = [
    { q: `${a.name} ወይስ ${b.name}፦ የትኛው ይሻላል?`, a: versusAnswer(a, b, s) },
    {
      q: `በ${a.name} እና በ${b.name} መካከል ያለው ዋና ልዩነት ምንድን ነው?`,
      a: `${bare(ia.pick)}። ${bare(ib.pick)}።${aheadA.length ? ` የ${a.name} በአሃዝ የሚለኩ ዋና ዋና ብልጫዎች፦ ${aheadA.slice(0, 2).map(bare).join("፤ ")}።` : ""}${aheadB.length ? ` የ${b.name} ብልጫዎች ደግሞ፦ ${aheadB.slice(0, 2).map(bare).join("፤ ")}።` : ""}`,
    },
    {
      q: `${a.name} በመጠን ከ${b.name} ይበልጣል?`,
      a: `በ${cmc} (${marketDate}) የ${a.name} ኦፕን ኢንተረስት (Open Interest) ${formatBn(a.market.openInterestBn)}፣ የ24 ሰዓት የግብይት መጠኑ ደግሞ ${formatBn(a.market.volume24hBn)} ነበር፤ የ${b.name} ደግሞ በቅደም ተከተል ${formatBn(b.market.openInterestBn)} እና ${formatBn(b.market.volume24hBn)} ነበሩ። በመድረኮቹ የራሳቸው አሃዝ መሠረት ${a.name} ${withoutSource(a.users)} አሉት፤ ${b.name} ደግሞ ${withoutSource(b.users)} አሉት።`,
    },
    {
      q: `ለጀማሪዎች ${a.name} ወይስ ${b.name} ይሻላል?`,
      a: `ለመጀመሪያ አካውንት ሦስት ነገሮች ወሳኝ ናቸው፦ ክሪፕቶ በቀላሉ የሚገዙበት መንገድ፣ የመለማመጃ ዕድል እና ዝቅተኛ ክፍያ። በካርድ ወይም በባንክ ዝውውር ክሪፕቶ መግዛት፦ ${state("fiat")}። ዴሞ ግብይት፦ ${state("demoTrading")}። ኮፒ ትሬዲንግ፦ ${state("copyTrading")}። ${feeSentence(a, b, "spot")} የማንነት ማረጋገጫ – ${a.name}፦ ${bare(a.signup.kycShort)}፤ ${b.name}፦ ${bare(b.signup.kycShort)}።`,
    },
    {
      q: `ለፊውቸርስ ግብይት ${a.name} ወይስ ${b.name} ይሻላል?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${a.name} ወይስ ${b.name}፦ ክፍያው ያነሰው የትኛው ነው?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} እነዚህ መደበኛ (VIP ያልሆኑ) ክፍያዎች ናቸው፤ የVIP ደረጃዎች እና የመድረኮቹ ቶከኖች ክፍያውን የበለጠ ይቀንሳሉ።`,
    },
    {
      q: `${a.name} እና ${b.name} ክፍያን በራሳቸው ቶከን ለሚከፍሉ ቅናሽ ይሰጣሉ?`,
      a: `${a.name}፦ ${a.tokenDiscount ? sentence(a.tokenDiscount) : noTokenDiscount} ${b.name}፦ ${b.tokenDiscount ? sentence(b.tokenDiscount) : noTokenDiscount}`,
    },
    { q: `${a.name} ወይስ ${b.name}፦ ከፍ ያለ ሌቨሬጅ የሚሰጠው የትኛው ነው?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${a.name} ወይስ ${b.name}፦ ብዙ ኮይኖች ያሉት የትኛው ነው?`,
      a: `በመድረኮቹ የራሳቸው አሃዝ መሠረት ${a.name} ላይ ${withoutSource(a.assets)} አሉ፤ ${b.name} ላይ ደግሞ ${withoutSource(b.assets)} አሉ። መድረኮቹ የሚቆጥሩት በተለያየ መንገድ ነው – አንዳንዶቹ ኮይኖችን፣ ሌሎቹ የግብይት ጥንዶችን ይቆጥራሉ – ስለዚህ ሁለቱን አሃዞች በቀጥታ ማነጻጸር አይቻልም።`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `${inCountry(c)} ${a.name} እና ${b.name} መጠቀም ይቻላል?`, a: countryPairAnswer(a, b, c) })),
    {
      q: `${a.name} እና ${b.name} KYC ይጠይቃሉ?`,
      a: `አዎ፣ ሁለቱም አዲስ ተጠቃሚዎችን የማንነት ማረጋገጫ (KYC) ይጠይቃሉ። ${a.name}፦ ${bare(a.signup.kycShort)}። ${b.name}፦ ${bare(b.signup.kycShort)}። ያለ ማረጋገጫ ለመገበያየት ከሁለቱ አንዳቸውም አማራጭ አይደሉም።`,
    },
    {
      q: `${a.name} ወይስ ${b.name}፦ ይበልጥ አስተማማኙ የትኛው ነው?`,
      a: `ከስጋት ነጻ የሆነ ማዕከላዊ መድረክ የለም፤ ስለዚህ ትክክለኛው ንጽጽር እያንዳንዱ መድረክ ስለራሱ ይፋ የሚያደርገው መረጃ ነው። ${a.name}፦ ${bare(a.regulation)}። የመጠባበቂያ ክምችት ማረጋገጫ – ${bare(ia.reserves)}። ${fund(ia.fund)} ${b.name}፦ ${bare(b.regulation)}። የመጠባበቂያ ክምችት ማረጋገጫ – ${bare(ib.reserves)}። ${fund(ib.fund)} በየትኛውም መድረክ ላይ በንቃት የሚገበያዩበትን ገንዘብ ብቻ ያስቀምጡ።`,
    },
    {
      q: `${a.name} እና ${b.name} በአውሮፓ ኅብረት (EU) በMiCA መሠረት ፈቃድ አላቸው?`,
      a: `${a.name}፦ ${micaOf(ia.mica)}። ${b.name}፦ ${micaOf(ib.mica)}። ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `ከምናነጻጽራቸው ${featureList.length} ምርቶች መካከል አንድም የለም፦ ${x.name} በድረ-ገጹ ላይ የሚያሳየው እያንዳንዱ ምርት ${y.name} ላይም ይገኛል።`;
  const products: Faq[] = [
    { q: `${a.name} የሚያቀርበው ግን ${b.name} የማያቀርበው ምንድን ነው?`, a: onlyA || nothing(a, b) },
    { q: `${b.name} የሚያቀርበው ግን ${a.name} የማያቀርበው ምንድን ነው?`, a: onlyB || nothing(b, a) },
    {
      q: `${a.name} እና ${b.name} ኮፒ ትሬዲንግ፣ የግብይት ቦቶች፣ ኦፕሽንስ እና ዴሞ ግብይት ያቀርባሉ?`,
      a: `ኮፒ ትሬዲንግ፦ ${state("copyTrading")}። የግብይት ቦቶች፦ ${state("tradingBots")}። ኦፕሽንስ (Options)፦ ${state("options")}። ዴሞ ግብይት፦ ${state("demoTrading")}።${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` አንድ መድረክ ብቻ በተጠቀሰበት ቦታ፣ በ${prettyDate(site.lastReviewed)} በሌላኛው መድረክ የራሱ ድረ-ገጽ ላይ ለዚያ ምርት የሚሆን ገጽ አላገኘንም።` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `የ${a.name} እና የ${b.name} ሪፈራል ኮዶች ምንድን ናቸው?`,
      a: `${a.name}፦ ${a.referralCode} – ${bare(a.referral.whereShort)}። ${b.name}፦ ${b.referralCode} – ${bare(b.referral.whereShort)}። ሁለቱም ኮዶች በነጻ የሚያገለግሉ ሲሆን የግብይት ክፍያዎን አይጨምሩም።`,
    },
    {
      q: `${a.name} ወይስ ${b.name}፦ የተሻለ የምዝገባ ቦነስ ያለው የትኛው ነው?`,
      a: `${a.name}፦ ${bare(offer(a))}። ${b.name}፦ ${bare(offer(b))}። በሁለቱም መድረኮች የእንኳን ደህና መጡ ሽልማቶች እንደ ማንነት ማረጋገጫ፣ ዲፖዚት ወይም የግብይት መጠን ካሉ ቅድመ ሁኔታዎች ጋር የተያያዙ ናቸው፤ ከአገር አገርም ይለያያሉ። ስለዚህ በማስታወቂያው ላይ ያለውን ትልቁን አሃዝ ሳይሆን ቅድመ ሁኔታዎቹን ያነጻጽሩ።`,
    },
    {
      q: `ከተመዘገቡ በኋላ በ${a.name} እና በ${b.name} ሪፈራል ኮድ ማስገባት ይቻላል?`,
      a: `${a.name}፦ ${bare(a.referral.afterSignupShort)}። ${b.name}፦ ${bare(b.referral.afterSignupShort)}። በሁለቱም ላይ ${safeWay}`,
    },
    {
      q: `${a.name} እና ${b.name} በአንድ ጊዜ መጠቀም ይቻላል?`,
      a: "አዎ። ሁለቱ የተለያዩ ኩባንያዎች ስለሆኑ በአንዱ ላይ ያለዎት አካውንት በሌላኛው ላይ ባለው አካውንት ላይ ተጽዕኖ አያሳድርም፤ ብዙ ትሬደሮችም ገንዘባቸውን በሁለት መድረኮች ላይ ያስቀምጣሉ። የክፍያ ደረጃዎች፣ ሪፈራሎች እና ሽልማቶች ከእያንዳንዱ አካውንት ጋር የተያያዙ ናቸው፤ ከአንዱ ወደ ሌላው አይተላለፉም።",
    },
    {
      q: `ክሪፕቶን ከ${a.name} ወደ ${b.name} እንዴት ማዛወር ይቻላል?`,
      a: `1. ${b.referralCode} የሚለውን ሪፈራል ኮድ ተጠቅመው የ${b.name} አካውንትዎን ይክፈቱ፤ የማንነት ማረጋገጫውንም ያጠናቅቁ። 2. ${a.name} ላይ ያሉ ክፍት የፊውቸርስ እና የማርጂን ፖዚሽኖችን ይዝጉ – ፖዚሽኖችን ከአንድ መድረክ ወደ ሌላ ማዛወር አይቻልም። 3. ${b.name} ላይ ለመጠቀም ለሚፈልጉት ኮይን እና ኔትወርክ የዲፖዚት አድራሻውን ይቅዱ። 4. ከ${a.name} ወደዚያ አድራሻ በተመሳሳይ ኔትወርክ ገንዘቡን ያውጡ፤ መጀመሪያ ግን አነስተኛ የሙከራ መጠን ይላኩ፦ በተሳሳተ ኔትወርክ የተላከ ገንዘብ ሊጠፋ ይችላል። በተቃራኒው አቅጣጫም እነዚሁ ደረጃዎች ይሠራሉ።`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} ወይስ ${b.name}፦ የትኛው ይሻላል?`, faqs: verdict },
    { id: "fees", title: "ክፍያ፣ ሌቨሬጅ እና ኮይኖች", faqs: fees },
    { id: "countries", title: "አገሮች፣ KYC እና ደህንነት", faqs: countries },
    { id: "products", title: "ምርቶች", faqs: products },
    { id: "referral", title: "ሪፈራል ኮዶች እና ከአንዱ መድረክ ወደ ሌላው መዛወር", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi: top, oi, mica }: HubFacts) =>
  `ዝቅተኛው መደበኛ የፊውቸርስ ክፍያ የሚገኘው ${names(lowF)} ላይ ነው (${feePair(lowF[0].futuresFees)} ሜከር / ቴከር)፤ ከፍተኛው ሌቨሬጅ ${names(top)} ላይ (${leverageOf(top[0])}x)፣ ከፍተኛ ሊኩዊዲቲ ያለው የዴሪቬቲቭስ ገበያ ደግሞ ${names(oi)} ላይ ነው (${formatBn(oi[0].market.openInterestBn)} ኦፕን ኢንተረስት)። ${names(mica)} ለአውሮፓ ኢኮኖሚያዊ ቀጣና (EEA) ነዋሪዎች በMiCA ፈቃድ ያገኘ መድረክ ${verb(mica, "ይጠቅሳል", "ይጠቅሳሉ")}። የትኛው መድረክ እንደሚሻልዎት የሚወሰነው በየትኞቹ ሁለት መድረኮች መካከል እንደሚመርጡ ነው – ጥንዱን ከታች ይምረጡ።`;

function hubFaqs({ all, ranked, lowF, lowS, hi: top, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "ዝቅተኛ ክፍያ ያለው የክሪፕቶ ግብይት መድረክ የትኛው ነው?",
      a: `በመደበኛ ደረጃ ዝቅተኛው የፊውቸርስ ክፍያ የሚገኘው ${names(lowF)} ላይ ነው፦ ${feePair(lowF[0].futuresFees)} (ሜከር / ቴከር)፤ ዝቅተኛው የስፖት ክፍያ ደግሞ ${names(lowS)} ላይ፦ ${feePair(lowS[0].spotFees)}። ሌሎቹ መድረኮች፦ ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} – ፊውቸርስ ላይ ${feePair(e.futuresFees)}፣ ስፖት ላይ ${feePair(e.spotFees)}`)
        .join("፤ ")}። የVIP ደረጃዎች እና የመድረኮቹ ቶከኖች እነዚህን ክፍያዎች የበለጠ ይቀንሳሉ።`,
    },
    {
      q: "ከፍተኛ ሌቨሬጅ የሚሰጠው የክሪፕቶ ግብይት መድረክ የትኛው ነው?",
      a: `${names(top)}፦ ${bare(top[0].maxLeverage)}። ሌሎቹ፦ ${ranked
        .filter((e) => !top.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join("፣ ")}። ${leverageRisk}`,
    },
    {
      q: "የፊውቸርስ ገበያው ከፍተኛ ሊኩዊዲቲ ያለው የክሪፕቶ ግብይት መድረክ የትኛው ነው?",
      a: `በ${cmc} (${marketDate}) ላይ ባለው ኦፕን ኢንተረስት (Open Interest) ሲለካ፦ ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join("፣ ")}። ሊኩዊዲቲው ከፍ ያለ ገበያ ብዙውን ጊዜ በትላልቅ ኦርደሮች ላይ ጠባብ ስፕሬድ ማለት ነው።`,
    },
    {
      q: "ለአውሮፓ ኢኮኖሚያዊ ቀጣና (EEA) በMiCA ፈቃድ ያገኘ መድረክ ያላቸው የትኞቹ ናቸው?",
      a: `በMiCA ፈቃድ ያገኘ የEEA መድረክ ያላቸው፦ ${joinList(mica.map((e) => `${e.name} (${bare(altInfo(e).mica)})`))}። ${names(noMica)} በ${verb(noMica, "ራሱ", "ራሳቸው")} ገጾች ላይ በMiCA ፈቃድ ያገኘ አካል ${verb(noMica, "አልጠቀሰም", "አልጠቀሱም")}። ${regionalNote}`,
    },
    {
      q: "ከተመዘገቡ በኋላ ሪፈራል ኮድ ማስገባት የሚፈቅዱት የትኞቹ መድረኮች ናቸው?",
      a: `${later.map((e) => `${e.name}፦ ${bare(e.referral.afterSignupShort)}`).join("። ")}። ${names(signupOnly)} ላይ ኮዱ የሚቆጠረው በምዝገባ ጊዜ ብቻ ነው፣ ወይም በኋላ የሚገባበት መንገድ አልተገለጸም – በሁሉም መድረኮች ${safeWay}`,
    },
    {
      q: "እነዚህ ንጽጽሮች እንዴት ይዘጋጃሉ?",
      a: `እያንዳንዱ አሃዝ የተወሰደው ከመድረኩ የራሱ ድረ-ገጽ ወይም የእገዛ ማዕከል ነው – የክፍያ ሰንጠረዦች፣ የአጠቃቀም ደንቦች፣ የተከለከሉ አገሮች ዝርዝሮች፣ የምርት ገጾች – እያንዳንዱ ገጽም ምንጮቹን ይዘረዝራል። ኦፕን ኢንተረስት፣ የግብይት መጠን እና የዴሪቬቲቭስ ገበያዎች ብዛት የተወሰዱት ከ${cmc} ነው። በአንድ ነጥብ ላይ የትኛው መድረክ ብልጫ እንዳለው የሚታየው ከእነዚሁ አሃዞች ነው፤ የራሳችን የደረጃ አሰጣጥ የለንም። አሁን ያለው የማረጋገጫ ቀን ${date} ነው።`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const am: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row in "… ብልጫ ያለው በሚከተሉት ነጥቦች ነው፦ …" ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "የፊውቸርስ ክፍያ (ሜከር / ቴከር)", topic: "የፊውቸርስ ክፍያ" },
    spotFees: { label: "የስፖት ክፍያ (ሜከር / ቴከር)", topic: "የስፖት ክፍያ" },
    leverage: { label: "ከፍተኛ ሌቨሬጅ", topic: "ከፍተኛ ሌቨሬጅ" },
    openInterest: { label: "የዴሪቬቲቭስ ኦፕን ኢንተረስት", topic: "ኦፕን ኢንተረስት" },
    volume: { label: "የ24 ሰዓት የዴሪቬቲቭስ የግብይት መጠን", topic: "የ24 ሰዓት የዴሪቬቲቭስ የግብይት መጠን" },
    markets: { label: "የዴሪቬቲቭስ ገበያዎች", topic: "የዴሪቬቲቭስ ገበያዎች ብዛት" },
    users: { label: "ተጠቃሚዎች (የመድረኩ የራሱ አሃዝ)", topic: "የተጠቃሚዎች ብዛት" },
    assets: { label: "የተዘረዘሩ ንብረቶች (የመድረኩ የራሱ አሃዝ)", topic: "" },
    founded: { label: "የተመሠረተበት ዓመት (እ.ኤ.አ.)", topic: "" },
    products: { label: (compared) => `የተገኙ ምርቶች (ከ${compared} የተነጻጸሩ ምርቶች ውስጥ)`, topic: "የምርቶች ብዛት" },
    countries: { label: (compared) => `የተከለከሉ አገሮች (ከ${compared} የተነጻጸሩ አገሮች ውስጥ)`, topic: "የአገሮች ሽፋን" },
    mica: { label: "በMiCA ፈቃድ ያገኘ የEEA መድረክ", topic: "የMiCA ፈቃድ" },
    kyc: { label: "የማንነት ማረጋገጫ (KYC)", topic: "" },
    addLater: { label: "ሪፈራል ኮድ በኋላ ማስገባት ይቻላል?", topic: "ሪፈራል ኮድ በኋላ የማስገባት ዕድል" },
    offer: { label: "የአዲስ ተጠቃሚ ማበረታቻ", topic: "" },
    reserves: { label: "የመጠባበቂያ ክምችት ማረጋገጫ", topic: "" },
    fund: { label: "የጥበቃ ፈንድ", topic: "" },
  },
  countOf: (count, of) => `ከ${of} ውስጥ ${count}`,
  noMica: "አልተጠቀሰም",
  noFund: "አልተጠቀሰም",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    /** Names with their Ethiopic spellings first; the month goes last, after the tail that may be cut off. */
    title: (a, b, shortMonthYear) => `${named(a)} vs ${named(b)}፦ የክፍያ፣ የሌቨሬጅ፣ የKYC እና የቦነስ ንጽጽር (${shortMonthYear})`,
    description: (a, b, monthYear) =>
      `${a.name} vs ${b.name}፦ የፊውቸርስ ክፍያ ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}፣ ሌቨሬጅ ${leverageOf(a)}x vs ${leverageOf(b)}x፣ ምርቶች፣ አገሮች፣ KYC እና ሪፈራል ኮዶች – ይፋዊ መረጃ፣ ${monthYear}።`,
    keywords: (a, b, former) => {
      const ra = readingOf(a.slug, locale);
      const rb = readingOf(b.slug, locale);
      const variant = (slug: string, reading?: string) => (slug === "binance" ? "ቢናንስ" : reading);
      const va = variant(a.slug, ra);
      const vb = variant(b.slug, rb);
      return [
        `${a.name} vs ${b.name}`,
        `${b.name} vs ${a.name}`,
        `${a.name} ወይስ ${b.name}`,
        `${a.name} ወይስ ${b.name} የትኛው ይሻላል`,
        `${a.name} እና ${b.name} ንጽጽር`,
        `${a.name} vs ${b.name} ክፍያ`,
        `${a.name} vs ${b.name} ፊውቸርስ`,
        `${a.name} ከ${b.name} ይሻላል`,
        `${b.name} ከ${a.name} ይሻላል`,
        ...(ra && rb ? [`${ra} vs ${rb}`, `${ra} ወይስ ${rb}`, `${ra} እና ${rb} ንጽጽር`] : []),
        ...(va && vb && (va !== ra || vb !== rb) ? [`${va} ወይስ ${vb}`] : []),
        `${a.name} or ${b.name}`,
        `${a.name} vs ${b.name} fees`,
        ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
      ];
    },

    crumbHome: "መነሻ ገጽ",
    crumbHub: "የመድረኮች ንጽጽር",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name} ቀደም ሲል ${formerName} በሚል ስም ይታወቅ ነበር።`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${named(a)} እና ${named(b)} ሁለቱም ለስፖት (Spot) ግብይት እና በሌቨሬጅ ለሚደረግ የፊውቸርስ (Futures) ግብይት የሚያገለግሉ ማዕከላዊ የክሪፕቶ ግብይት መድረኮች ናቸው፤ ሁለቱም ለአዲስ ተጠቃሚዎች ሪፈራል ፕሮግራም አላቸው። ${bare(pickA)}። ${bare(pickB)}።${formerNote ? ` ${formerNote}` : ""} ይህ አንድ ለአንድ ንጽጽር የሁለቱን ክፍያ፣ ሌቨሬጅ፣ ምርቶች፣ የሚገኙባቸውን አገሮች፣ የማረጋገጫ ደንቦች እና የሪፈራል ማበረታቻዎች ጎን ለጎን ያቀርባል – እያንዳንዱ አሃዝ በ${date} ከመድረኮቹ የራሳቸው ድረ-ገጾች የተወሰደ ነው።`,

    toc: {
      "at-a-glance": "በጨረፍታ",
      verdict: "የትኛውን መምረጥ ይሻላል",
      fees: "ክፍያ",
      leverage: "ሌቨሬጅ እና የገበያ ሊኩዊዲቲ",
      products: "ምርቶች",
      countries: "አገሮች",
      kyc: "የማንነት ማረጋገጫ (KYC)",
      safety: "ደህንነት እና ቁጥጥር",
      referral: "ሪፈራል ኮዶች",
      "pros-cons": "ጥቅሞች እና ጉዳቶች",
      faq: "ተደጋጋሚ ጥያቄዎች",
      sources: "ምንጮች",
    },
    onThisPage: "በዚህ ገጽ",

    /* Hero */
    updated: (date) => `የተረጋገጠው እና የተሻሻለው፦ ${date}`,
    h1: (a, b) => `${named(a)} vs ${named(b)}፦ የክፍያ፣ የሌቨሬጅ እና የደህንነት ንጽጽር`,
    quickAnswer: "አጭር መልስ",
    keyFigures: "ዋና አሃዞች",
    chips: (a, b, oiA, oiB) => [
      `ፊውቸርስ ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `ስፖት ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `ሌቨሬጅ ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `ኦፕን ኢንተረስት ${oiA} vs ${oiB}`,
    ],
    boxTitle: "በሪፈራል ኮድ ይመዝገቡ",
    boxNote: "ሁለቱም ኮዶች ነጻ ናቸው፤ ክፍያዎንም ፈጽሞ አይጨምሩም።",
    codeLabel: (e) => `${e.name} ሪፈራል ኮድ`,
    boxRisk: () => (
      <>
        በሌቨሬጅ መገበያየት ከፍተኛ ስጋት አለው። ከሁለቱ አንዳቸውም በሁሉም አገሮች አይገኙም – <a href="#countries">አገሮች</a> የሚለውን ክፍል ይመልከቱ።
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name} በጨረፍታ`,
    glanceText: (a, b, s) =>
      `«${a.name} vs ${b.name}» ብለው ቢፈልጉም «${b.name} vs ${a.name}» ብለው ቢፈልጉም ንጽጽሩ ያው ነው። በአሃዝ ሊወሰኑ ከሚችሉት ${s.measurable} ነጥቦች ውስጥ ${a.name} በ${s.a.length} ${points(s.a.length)}፣ ${b.name} ደግሞ በ${s.b.length} ${points(s.b.length)} ብልጫ አላቸው${s.tie.length ? `፤ ${s.tie.length === 1 ? "በቀሪው 1 ነጥብ" : `በቀሪዎቹ ${s.tie.length} ነጥቦች`} እኩል ናቸው` : ""}። ነጥቦቹ እኩል ክብደት የላቸውም – ለንቁ ትሬደር ረጅም የኮይን ዝርዝር ከመኖሩ ይልቅ ዝቅተኛ ክፍያ ይበልጥ ይጠቅማል – ስለዚህ ከሚገበያዩበት መንገድ ጋር የሚስማማውን ዓምድ ይመልከቱ።`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}፦ ክፍያ፣ ሌቨሬጅ፣ የገበያ መጠን፣ ምርቶች፣ አገሮች፣ የማንነት ማረጋገጫ እና የሪፈራል ደንቦች`,
    compared: "የንጽጽር ነጥብ",
    ahead: "ብልጫ ያለው",
    level: "እኩል",
    glanceNote: (marketDate, date) =>
      `ክፍያ፦ መደበኛ (VIP ያልሆነ) ደረጃ። ኦፕን ኢንተረስት፣ የግብይት መጠን እና ገበያዎች፦ የ${cmc}፣ ${marketDate}። «–» ማለት ሁለቱን እሴቶች አንዱን ከሌላው በላይ ማስቀመጥ አይቻልም ማለት ነው። ሌሎቹ መረጃዎች በሙሉ በ${date} ከመድረኮቹ የራሳቸው ድረ-ገጾች የተወሰዱ ናቸው።`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} ወይስ ${b.name}፦ የትኛውን መምረጥ ይሻላል?`,
    verdictText:
      "በሁሉም ረገድ አሸናፊ የሆነ የለም – እያንዳንዱ መድረክ ለተለየ ዓይነት ትሬደር የተዘጋጀ ነው። ሁለቱ ሳጥኖች እያንዳንዱ ለማን እንደሚስማማ እና በአሃዝ ሲለካ ከሌላው በምን ብልጫ እንዳለው ያሳያሉ።",
    bestFor: (role) => `ጠንካራ ጎኑ፦ ${role}`,
    chooseIf: (e) => `${e.name} የሚሻልዎት፦`,
    aheadOf: (e, other) => `${e.name} ከ${other.name} የሚበልጥባቸው ነጥቦች`,
    noAdvantage: "በምናነጻጽራቸው ነጥቦች ላይ በአሃዝ የሚለካ ብልጫ የለውም።",
    thinkTwice: "ደግመው ያስቡበት፦",
    codeButton: (e) => `${e.name} ሪፈራል ኮድ ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `የግብይት ክፍያ፦ ${a.name} vs ${b.name}`,
    feesModel:
      "ሁለቱም የሜከር (Maker) / ቴከር (Taker) ሞዴል ይጠቀማሉ፦ ሊኩዊዲቲ የሚጨምሩ ሊሚት ኦርደሮች የሜከር ክፍያ ይከፍላሉ፣ ሊኩዊዲቲ የሚወስዱ ኦርደሮች ደግሞ የቴከር ክፍያ ይከፍላሉ።",
    feesCaption: (a, b) => `የ${a.name} እና የ${b.name} መደበኛ የስፖት እና የፊውቸርስ ክፍያዎች`,
    exchange: "መድረክ",
    futuresMaker: "ፊውቸርስ ሜከር",
    futuresTaker: "ፊውቸርስ ቴከር",
    spotMaker: "ስፖት ሜከር",
    spotTaker: "ስፖት ቴከር",
    otherMarkets: "ሌሎች ገበያዎች (ሜከር / ቴከር)",
    feesNote: (date) => `እያንዳንዱ መድረክ ያወጣው መደበኛ (VIP ያልሆነ) ክፍያ፣ በ${date} የተረጋገጠ። ክፍያዎች ይቀየራሉ – ከመገበያየትዎ በፊት በመድረኩ ላይ ያረጋግጡ።`,
    tokenTitle: "የቶከን ቅናሾች እና ዝርዝር ሁኔታዎች",
    noTokenDiscount: "ክፍያን በመድረኩ ቶከን ሲከፍሉ የሚሰጥ ቅናሽ አልተገለጸም።",

    /* Leverage */
    leverageTitle: "ሌቨሬጅ እና የገበያ ሊኩዊዲቲ",
    leverageRisk: "ከፍተኛ ሌቨሬጅ የሊኩዊዴሽን ስጋትን በእጅጉ ይጨምራል – ከፍተኛው ሌቨሬጅ ገደብ እንጂ ምክር አይደለም።",
    leverageCaption: (a, b) => `የ${a.name} እና የ${b.name} ሌቨሬጅ እና የዴሪቬቲቭስ ገበያ መረጃ`,
    maxLeverage: "ከፍተኛ ሌቨሬጅ",
    openInterest: "ኦፕን ኢንተረስት",
    volume24h: "የ24 ሰዓት የዴሪቬቲቭስ የግብይት መጠን",
    derivativesMarkets: "የዴሪቬቲቭስ ገበያዎች",
    listedAssets: "የተዘረዘሩ ንብረቶች (የመድረኩ የራሱ አሃዝ)",
    leverageNote: (marketDate) =>
      `የገበያ መረጃ፦ የ${cmc}፣ ${marketDate}። መድረኮቹ የተዘረዘሩ ንብረቶችን የሚቆጥሩት በተለያየ መንገድ ነው – አንዳንዶቹ ኮይኖችን፣ ሌሎቹ የግብይት ጥንዶችን ይቆጥራሉ።`,

    /* Products */
    productsTitle: (a, b) => `ምርቶች፦ ${a.name} እና ${b.name} የሚያቀርቡት`,
    productsSame: (compared) => `ሁለቱም መድረኮች የምናነጻጽራቸውን ሁሉንም ${compared} ምርቶች በራሳቸው ድረ-ገጾች ላይ ያሳያሉ፤ ልዩነቱ በዝርዝሩ ላይ ነው።`,
    productsLegend: (date) =>
      `✓ ምልክት መድረኩ ምርቱን በራሱ ድረ-ገጽ ላይ ያሳያል ማለት ነው፤ ሰረዝ (–) ደግሞ በ${date} እዚያ ለምርቱ የሚሆን ገጽ አላገኘንም ማለት ነው።`,
    productsCaption: (a, b) => `${a.name} እና ${b.name} የሚያቀርቧቸው ምርቶች`,
    product: "ምርት",
    offered: "ይቀርባል",
    notOffered: "አይቀርብም",
    noPage: "በራሱ ድረ-ገጽ ላይ ገጽ አልተገኘም",

    /* Countries */
    countriesTitle: (a, b) => `አገሮች፦ ${a.name} እና ${b.name} የት ይገኛሉ?`,
    countriesText: (compared, differing) =>
      `ለ${compared} አገሮች የእያንዳንዱ መድረክ የአጠቃቀም ደንቦች የሚሉትን ከዚህ በታች ያገኛሉ። ሁለቱ መድረኮች ከእነዚህ ውስጥ በ${differing} ${differing === 1 ? "አገር" : "አገሮች"} ይለያያሉ። «${ct.statusLabel.regional}» ማለት መድረኩ አገሪቱን የራሱ ምርቶች፣ ክፍያዎች እና ገደቦች ባሉት የተለየ መድረክ በኩል ያገለግላል ማለት ነው።`,
    countriesCaption: (a, b) => `${a.name} እና ${b.name} በየትኞቹ አገሮች እንደሚገኙ`,
    country: "አገር",
    countriesNote: (date) =>
      `«${ct.statusLabel.open}» ማለት አገሪቱ በ${date} በመድረኩ የተከለከሉ አገሮች ዝርዝር ውስጥ አልነበረችም ማለት ነው – ይህ እዚያ ሁሉም ምርቶች እንደሚቀርቡ ዋስትና አይሆንም። ሁለቱም መድረኮች ገደቡን በVPN ወይም በሐሰተኛ መረጃ ማለፍን ይከለክላሉ።`,
    differTitle: "ሁለቱ የሚለያዩባቸው አገሮች",
    differQuestion: (a, b, countryName) => {
      const c = countryList.find((it) => it.name === countryName);
      return c ? `${inCountry(c)} ${a.name} ወይስ ${b.name}?` : `${countryName}፦ ${a.name} ወይስ ${b.name}?`;
    },
    neither: (a, b, hrefA, hrefB) => (
      <>
        በሚኖሩበት አገር ሁለቱም ዝግ ናቸው? የአማራጮች ገጾች የአገር ሰንጠረዦች አገርዎን የሚቀበሉ ሌሎች መድረኮችን ያሳያሉ፦{" "}
        <Link href={hrefA}>{a.name} አማራጮች በአገር</Link> · <Link href={hrefB}>{b.name} አማራጮች በአገር</Link>።
      </>
    ),
    restrictedTitle: "የተከለከሉ አገሮች እና አካባቢያዊ መድረኮች",
    whereNot: (e) => `${e.name} የማይገኘው የት ነው?`,
    regionalPlatforms: "አካባቢያዊ መድረኮች፦",

    /* Verification */
    kycTitle: (a, b) => `የማንነት ማረጋገጫ፦ ${a.name} vs ${b.name}`,
    kycText:
      "ሁለቱም አዲስ ተጠቃሚዎችን የማንነት ማረጋገጫ ይጠይቃሉ፤ ስለዚህ ያለ KYC ለመገበያየት አንዳቸውም አማራጭ አይደሉም። ልዩነቱ ያልተረጋገጠ አካውንት አሁንም ምን ማድረግ እንደሚችል እና ማረጋገጫው እንዴት እንደሚካሄድ ላይ ነው።",
    documents: "ሰነዶች፦",
    minAge: "ዝቅተኛ ዕድሜ፦",
    howToRegister: (e) => `${e.name} ላይ እንዴት መመዝገብ እና ማንነትዎን ማረጋገጥ ይቻላል – ደረጃ በደረጃ`,

    /* Safety */
    safetyTitle: (a, b) => `ደህንነት እና ቁጥጥር፦ ${a.name} vs ${b.name}`,
    safetyText:
      "ከስጋት ነጻ የሆነ ማዕከላዊ መድረክ የለም። ሊነጻጸር የሚችለው እያንዳንዱ መድረክ ስለራሱ ይፋ የሚያደርገው ነው፦ ፈቃድ ያገኘው የት እንደሆነ፣ የመጠባበቂያ ክምችቱን ያረጋግጥ እንደሆነ እና ለአደጋ ጊዜ የሚሆን ፈንድ ያስቀምጥ እንደሆነ።",
    safetyCaption: (a, b) => `የ${a.name} እና የ${b.name} ቁጥጥር፣ የመጠባበቂያ ክምችት ማረጋገጫ እና የጥበቃ ፈንዶች`,
    licences: "መድረኩ የጠቀሳቸው ፈቃዶች",
    entity: "የሚያስተዳድረው ኩባንያ",
    reserves: "የመጠባበቂያ ክምችት ማረጋገጫ",
    fund: "የጥበቃ ፈንድ",
    founded: "የተመሠረተበት ዓመት (እ.ኤ.አ.)",
    isSafe: (e) => `${e.name} አስተማማኝ ነው?`,
    safetyDetail: (e) => `የ${e.name} ደህንነት እና ተደራሽነት በዝርዝር`,

    /* Referral codes */
    referralTitle: (a, b) => `ሪፈራል ኮዶች እና የአዲስ ተጠቃሚ ማበረታቻዎች፦ ${a.name} vs ${b.name}`,
    referralText:
      "የትኛውንም ቢመርጡ በሪፈራል ኮድ ይመዝገቡ፦ ምንም አያስከፍልም፣ ክፍያዎን ፈጽሞ አይጨምርም፣ የመድረኩን የአዲስ ተጠቃሚ ማበረታቻም እንዲያገኙ ያስችልዎታል። የመጨረሻውን ረድፍ ልብ ይበሉ – የተረሳ ኮድ ሁልጊዜ በኋላ ሊገባ አይችልም።",
    referralCaption: (a, b) => `የ${a.name} እና የ${b.name} ሪፈራል ኮዶች እና የአዲስ ተጠቃሚ ማበረታቻዎች`,
    referralCodeOf: (e) => `${e.name} ሪፈራል ኮድ`,
    referralCode: "ሪፈራል ኮድ",
    newUserOffer: "የአዲስ ተጠቃሚ ማበረታቻ",
    inviteeReward: "እንደ ተጋባዥ የሚያገኙት",
    covers: "አንድ ሪፈራል የሚሸፍነው",
    whereCode: "ኮዱ የሚገባበት ቦታ",
    addLater: "በኋላ ማስገባት ይቻላል?",
    referralNote: (date) => `ማበረታቻዎቹ በ${date} ተረጋግጠዋል። የእንኳን ደህና መጡ ሽልማቶች በተግባራት ላይ የተመሠረቱ ናቸው፣ የማንነት ማረጋገጫ ይጠይቃሉ፣ ከአገር አገርም ይለያያሉ።`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `የ${a.name} እና የ${b.name} ጥቅሞች እና ጉዳቶች`,
    pros: "ጥቅሞች",
    cons: "ጉዳቶች",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – ተደጋጋሚ ጥያቄዎች`,
    faqText: (count, a, b) =>
      `በ${a.name} እና በ${b.name} መካከል ለመምረጥ የሚረዱ ${count} ${count === 1 ? "ጥያቄ" : "ጥያቄዎች"}፦ ክፍያ፣ ሌቨሬጅ፣ አገሮች፣ የማንነት ማረጋገጫ፣ ምርቶች እና ሪፈራል ኮዶች።`,

    /* Sources */
    sourcesTitle: "ምንጮች፦ እነዚህ አሃዞች ከየት መጡ",
    sourcesText: (date, marketDate) =>
      `በዚህ ገጽ ላይ ስለ ክፍያ፣ ሌቨሬጅ፣ ምርቶች፣ የማንነት ማረጋገጫ፣ አገሮች፣ ፈቃዶች፣ የመጠባበቂያ ክምችት እና የሪፈራል ደንቦች ያለው መረጃ ሁሉ በ${date} ከሁለቱ መድረኮች የራሳቸው ድረ-ገጾች እና የእገዛ ማዕከላት የተወሰደ ነው። ኦፕን ኢንተረስት፣ የግብይት መጠን እና የዴሪቬቲቭስ ገበያዎች ብዛት የተወሰዱት ከ${cmc} (${marketDate}) ነው። መድረኮች ደንቦቻቸውን ያለ ማስጠንቀቂያ ይቀይራሉ፤ ስለዚህ የመጨረሻው ቃል የሚከተሉት ገጾች ናቸው።`,
    officialPages: (e, count) => `${e.name}፦ ${count} ይፋዊ ${count === 1 ? "ገጽ" : "ገጾች"}`,

    /* More comparisons */
    moreTitle: "ተጨማሪ ንጽጽሮች",
    against: (e) => `${e.name} ከሌሎቹ መድረኮች ጋር ሲነጻጸር`,
    allAlternatives: (e) => `ሁሉም ${e.name} አማራጮች`,
    allComparisons: "ሁሉም የመድረኮች ንጽጽሮች",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>የስጋት ማስጠንቀቂያ፦</strong> የክሪፕቶ ዴሪቬቲቭስ ውስብስብ የፋይናንስ መሣሪያዎች ናቸው። ሌቨሬጅ ትርፍንም ኪሳራንም ያበዛል፤ ያስያዙትን ማርጂን በሙሉ
        በጥቂት ደቂቃዎች ውስጥ ሊያጡ ይችላሉ። ይህ ገጽ ለመረጃ ብቻ የቀረበ ሲሆን የፋይናንስ ምክር አይደለም። በሊንኮቻችን ከተመዘገቡ ኮሚሽን ልናገኝ እንችላለን –
        «<Link href={disclosureHref}>የአፊሊዬት መግለጫ</Link>» የሚለውን ገጻችንን ይመልከቱ። ይህ አሃዞቹን አይቀይርም፦ አሃዞቹ የመድረኮቹ የራሳቸው ናቸው።
      </>
    ),
    ctaTitle: (a, b) => `${a.name} ወይስ ${b.name}? በሪፈራል ኮድ ይጀምሩ`,
    ctaText: "በየትኛውም መድረክ ለስፖት እና ለፊውቸርስ አንድ አካውንት – ያለ ተጨማሪ ክፍያ።",
    ctaButton: "ተጨማሪ መድረኮችን ያነጻጽሩ",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) => `የክሪፕቶ መድረኮች ንጽጽር (${shortMonthYear})፦ ${pairs} አንድ ለአንድ ንጽጽሮች`,
    description: (exchangeNames, pairs, monthYear) =>
      `${exchangeNames} በጥንድ፦ ${pairs} አንድ ለአንድ ንጽጽሮች – ክፍያ፣ ሌቨሬጅ፣ አገሮች፣ KYC እና ሪፈራል ኮዶች፤ ይፋዊ መረጃ፣ ${monthYear}።`,
    crumbHome: "መነሻ ገጽ",
    crumbPage: "የመድረኮች ንጽጽር",
    listName: "የክሪፕቶ መድረኮች አንድ ለአንድ ንጽጽሮች",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `የተረጋገጠው እና የተሻሻለው፦ ${date}`,
    h1: (pairs) => `የክሪፕቶ መድረኮች ንጽጽር፦ ${pairs} አንድ ለአንድ ንጽጽሮች`,
    lead: (exchangeCount) =>
      `${exchangeCount} መድረኮች፣ እያንዳንዱ ጥንድ በተመሳሳይ ነጥቦች የተነጻጸረ፦ ክፍያ፣ ሌቨሬጅ፣ የገበያ ሊኩዊዲቲ፣ ምርቶች፣ የሚገኙባቸው አገሮች፣ የማንነት ማረጋገጫ፣ ቁጥጥር እና የሪፈራል ማበረታቻዎች። እያንዳንዱ ንጽጽር ከመድረኮቹ የራሳቸው ድረ-ገጾች የተወሰዱ አሃዞችን ይጠቀማል።`,
    quickAnswer: "አጭር መልስ",

    pickTitle: "ለማነጻጸር ሁለት መድረኮችን ይምረጡ",
    pickText: (others) =>
      `እያንዳንዱ ሳጥን አንድን መድረክ ከሌሎቹ ${others} ጋር ያስቀምጣል። እያንዳንዱ ጥንድ አንድ ገጽ ብቻ ስላለው «Binance vs OKX» እና «OKX vs Binance» ወደ አንድ ንጽጽር ይወስዳሉ።`,
    alternativesOf: (e) => `${e.name} አማራጮች`,
    referralCodeOf: (e) => `${e.name} ሪፈራል ኮድ`,

    tableTitle: (exchangeCount) => `ሁሉም ${exchangeCount} መድረኮች ጎን ለጎን`,
    tableText: "የእያንዳንዱ መድረክ የአዲስ ተጠቃሚ ማበረታቻ፣ መደበኛ (VIP ያልሆነ) ክፍያ፣ ሌቨሬጅ እና የገበያ ሊኩዊዲቲ በአንድ ሰንጠረዥ።",
    tableNote: (date, marketDate) => `ክፍያ፦ እያንዳንዱ መድረክ ያወጣው መደበኛ ደረጃ፣ በ${date} የተረጋገጠ። ኦፕን ኢንተረስት እና ገበያዎች፦ CoinMarketCap፣ ${marketDate}።`,

    alternativesTitle: "አንድ መድረክ ከሌሎቹ ሁሉ ጋር",
    alternativesText: (others) =>
      `በሁለት መድረኮች መካከል ሳይሆን ምትክ መድረክ እየፈለጉ ነው? የአማራጮች ገጾች አንድን መድረክ ከሌሎቹ ${others} ጋር በአንድ ጊዜ ያነጻጽራሉ፤ ከእነሱም አገርዎን የሚቀበሉትን ያሳያሉ።`,

    faqTitle: "የመድረኮች ንጽጽር – ተደጋጋሚ ጥያቄዎች",

    ctaTitle: "ወስነዋል? በሪፈራል ኮድ ይመዝገቡ",
    ctaText: (exchangeCount) => `ለሁሉም ${exchangeCount} መድረኮች የተረጋገጡ ሪፈራል ኮዶች – ለስፖት እና ለፊውቸርስ አንድ አካውንት፣ ያለ ተጨማሪ ክፍያ።`,
    ctaButton: "ሁሉንም ሪፈራል ኮዶች ይመልከቱ",
  },
};
