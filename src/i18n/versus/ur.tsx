/**
 * The head-to-head pages ("/ur/<a>-vs-<b>") and the comparison hub in Urdu.
 * Same keys as `./en.tsx`, written natively for readers in Pakistan.
 *
 * Wording: "ایکسچینج" (masculine: "Binance پیش کرتا ہے", plural "ایکسچینجز"), "فیس" (feminine), "ریفرل کوڈ",
 * "لیوریج", polite "آپ". Spot, Futures, Margin, Copy Trading, KYC and MiCA stay in Latin letters. The pages call
 * themselves “آمنے سامنے موازنہ”, the hub “ایکسچینج موازنہ”. "vs" stays "vs". Exchange and country names take no
 * ending – postpositions are separate words ("Binance پر", "پاکستان میں"), and کا / کی / کے agree with the noun
 * that follows. Arabic script has no capital letters, so texts from the data are inserted as they are (`lcFirst`
 * only lower-cases a Latin "Up to"). Data texts without a full stop (pick, kycShort, regulation, reserves, fund …)
 * get "۔" where they end a sentence.
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
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";

const locale = "ur";
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

/** Urdu has no capital letters: Urdu text stays as it is; only a Latin "Up to" at the start is lower-cased. */
const lcFirst = (s: string) => s.replace(/^Up to\b/, "up to");
/** Drops the source bracket: "320 ملین+ رجسٹرڈ یوزرز (Binance کے مطابق)" and "390 کوائنز، 509 Spot پیئرز (Bybit API)". */
const withoutSource = (s: string) => s.replace(/\s*\((?:[^()]*کے مطابق|[^()]*\bAPI)\)/, "");
/** A data text without its closing full stop, for lists joined with "۔ ". */
const bare = (s: string) => s.trim().replace(/۔$/, "");
/** Ends a data text with "۔" unless it already ends a sentence. */
const stop = (s: string) => (/[۔؟!]$/.test(s.trim()) ? s.trim() : `${s.trim()}۔`);
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
const points = (n: number) => (n === 1 ? "پوائنٹ" : "پوائنٹس");
const leverageRisk = "زیادہ لیوریج سے لیکویڈیشن کا خطرہ بہت بڑھ جاتا ہے۔";
const regionalNote = "علاقائی پلیٹ فارم پر عموماً پروڈکٹس کی رینج، فیس اور لمٹس الگ ہوتی ہیں۔";
const safeWay = "محفوظ طریقہ یہی ہے کہ آپ ریفرل لنک کے ذریعے رجسٹر کریں۔";
const noMicaEntity = "اپنے پیجز پر MiCA کے تحت منظور شدہ کسی کمپنی کا نام نہیں بتاتا";

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `${e.name} ${joinList(rows.map((r) => r.topic))} میں آگے ہے` : `${e.name} ان میں سے کسی میں بھی آگے نہیں`;
  return `نہ ${a.name} ہر پوائنٹ پر بہتر ہے اور نہ ${b.name}۔ اس موازنے کے ${s.measurable} قابلِ پیمائش پوائنٹس میں سے ${a.name} ${s.a.length} میں آگے ہے اور ${b.name} ${s.b.length} میں${s.tie.length ? `، جبکہ ${s.tie.length} ${points(s.tie.length)} پر دونوں برابر ہیں` : ""}۔ ${lead(a, s.a)}۔ ${lead(b, s.b)}۔ ${a.name} منتخب کریں، اگر ${lcFirst(bare(altInfo(a).chooseIf[0]))}۔ ${b.name} منتخب کریں، اگر ${lcFirst(bare(altInfo(b).chooseIf[0]))}۔`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb)
    return `${a.name} اور ${b.name} پر زیادہ سے زیادہ لیوریج ایک جیسا ہے: ${a.name} پر ${lcFirst(a.maxLeverage)}، ${b.name} پر ${lcFirst(b.maxLeverage)}۔`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `${hi.name} پر لیوریج کی حد زیادہ ہے – ${lcFirst(hi.maxLeverage)} – جبکہ ${lo.name} پر ${lcFirst(lo.maxLeverage)}۔`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `CoinMarketCap کی ڈیریویٹوز رینکنگ (${prettyDate(site.marketDataDate)}) کے مطابق ${a.name} کا اوپن انٹرسٹ ${a.market.markets} مارکیٹس میں ${formatBn(a.market.openInterestBn)} تھا اور ${b.name} کا ${b.market.markets} مارکیٹس میں ${formatBn(b.market.openInterestBn)}۔ ${deeper.name} کی مارکیٹ زیادہ گہری ہے، جس کا مطلب عموماً بڑے آرڈرز پر کم اسپریڈ ہوتا ہے۔`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${a.name} ${joinList(notOffered.map((f) => f.noun))} پیش کرتا ہے، ${b.name} نہیں۔` : "",
    notFound.length ? `${a.name} ${joinList(notFound.map((f) => f.noun))} پیش کرتا ہے؛ ${b.name} کی اپنی سائٹ پر ہمیں ایسی کوئی پروڈکٹ نہیں ملی۔` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${e.name} ${c.residents} کے لیے بند ہے${extra}`;
  if (status === "regional") return `${e.name} ${c.residents} کو ایک علاقائی پلیٹ فارم${extra} کے ذریعے سروس دیتا ہے`;
  if (status === "partial") return `${e.name} ${c.name} میں جزوی پابندیاں لگاتا ہے${extra}`;
  return `${e.name} ${c.name} کو ممنوعہ ممالک کی فہرست میں نہیں رکھتا`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("ur").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}۔ ${statusPhrase(b, c)}۔ ممالک کی فہرستیں بدلتی رہتی ہیں، اور کسی ملک کا فہرست میں نہ ہونا اس بات کی ضمانت نہیں کہ وہاں ہر پروڈکٹ دستیاب ہے – فیصلہ ایکسچینج کی اپنی شرائط سے ہوتا ہے۔`;

/* ------------------------------------ FAQ ------------------------------------ */

/** All questions a head-to-head page answers, grouped for display (see `./en.tsx`). */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) =>
    has(a, key) && has(b, key) ? "دونوں پر" : has(a, key) ? `صرف ${a.name} پر` : has(b, key) ? `صرف ${b.name} پر` : "دونوں میں سے کسی کی سائٹ پر نہیں ملا";
  const noTokenDiscount = "ایسا کوئی ڈسکاؤنٹ شائع نہیں کیا گیا۔";
  const noFund = "کسی پروٹیکشن فنڈ کا نام نہیں بتایا گیا۔";

  const verdict: Faq[] = [
    { q: `${a.name} یا ${b.name}: کون بہتر ہے؟`, a: versusAnswer(a, b, s) },
    {
      q: `${a.name} اور ${b.name} میں بنیادی فرق کیا ہے؟`,
      a: `${stop(ia.pick)} ${stop(ib.pick)}${aheadA.length ? ` ${a.name} کے سب سے واضح قابلِ پیمائش فائدے: ${aheadA.slice(0, 2).map(lcFirst).join("؛ ")}۔` : ""}${aheadB.length ? ` ${b.name} کے: ${aheadB.slice(0, 2).map(lcFirst).join("؛ ")}۔` : ""}`,
    },
    {
      q: `کیا ${a.name}، ${b.name} سے بڑا ہے؟`,
      a: `CoinMarketCap کی ڈیریویٹوز رینکنگ (${marketDate}) کے مطابق ${a.name} کا اوپن انٹرسٹ ${formatBn(a.market.openInterestBn)} اور 24 گھنٹے کا والیوم ${formatBn(a.market.volume24hBn)} تھا، جبکہ ${b.name} کا ${formatBn(b.market.openInterestBn)} اور ${formatBn(b.market.volume24hBn)}۔ دونوں کے اپنے اعداد و شمار کے مطابق ${a.name} کے ${withoutSource(a.users)} ہیں اور ${b.name} کے ${withoutSource(b.users)}۔`,
    },
    {
      q: `نئے ٹریڈرز کے لیے ${a.name} یا ${b.name}: کون بہتر ہے؟`,
      a: `پہلے اکاؤنٹ کے لیے تین چیزیں اہم ہیں: کرپٹو خریدنے کا آسان طریقہ، پریکٹس کا موقع اور کم فیس۔ کارڈ یا بینک ٹرانسفر سے خریداری: ${state("fiat")}۔ ڈیمو ٹریڈنگ: ${state("demoTrading")}۔ Copy Trading: ${state("copyTrading")}۔ ${feeSentence(a, b, "spot")} شناختی تصدیق – ${a.name}: ${lcFirst(bare(a.signup.kycShort))}؛ ${b.name}: ${lcFirst(bare(b.signup.kycShort))}۔`,
    },
    {
      q: `Futures ٹریڈنگ کے لیے ${a.name} یا ${b.name}: کون بہتر ہے؟`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${a.name} یا ${b.name}: کس کی فیس کم ہے؟`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} یہ اسٹینڈرڈ (نان-VIP) ریٹس ہیں؛ VIP لیولز اور ایکسچینج ٹوکن انہیں مزید کم کر دیتے ہیں۔`,
    },
    {
      q: `کیا ${a.name} اور ${b.name} اپنے ٹوکن میں فیس ادا کرنے پر ڈسکاؤنٹ دیتے ہیں؟`,
      a: `${a.name}: ${stop(a.tokenDiscount || noTokenDiscount)} ${b.name}: ${stop(b.tokenDiscount || noTokenDiscount)}`,
    },
    { q: `${a.name} یا ${b.name}: کون زیادہ لیوریج دیتا ہے؟`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${a.name} یا ${b.name}: کس پر زیادہ کوائنز لسٹڈ ہیں؟`,
      a: `دونوں کے اپنے اعداد و شمار کے مطابق ${a.name} پر ${withoutSource(a.assets)} لسٹڈ ہیں اور ${b.name} پر ${withoutSource(b.assets)}۔ ایکسچینجز الگ الگ طریقے سے گنتے ہیں – کچھ کوائنز گنتے ہیں، کچھ ٹریڈنگ پیئرز – اس لیے ان دونوں اعداد کا براہِ راست موازنہ نہیں کیا جا سکتا۔`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `کیا ${c.name} میں ${a.name} یا ${b.name} استعمال کر سکتے ہیں؟`, a: countryPairAnswer(a, b, c) })),
    {
      q: `کیا ${a.name} اور ${b.name} پر KYC ضروری ہے؟`,
      a: `جی ہاں، دونوں نئے یوزرز سے شناختی تصدیق مانگتے ہیں۔ ${a.name}: ${stop(lcFirst(a.signup.kycShort))} ${b.name}: ${stop(lcFirst(b.signup.kycShort))} دونوں میں سے کوئی بھی بغیر ویریفکیشن ٹریڈنگ کا راستہ نہیں دیتا۔`,
    },
    {
      q: `${a.name} یا ${b.name}: کون زیادہ محفوظ ہے؟`,
      a: `کوئی بھی سینٹرلائزڈ ایکسچینج رسک فری نہیں، اس لیے دیانت دارانہ موازنہ یہی ہے کہ ہر ایکسچینج خود کیا شائع کرتا ہے۔ ${a.name}: ${stop(a.regulation)} پروف آف ریزرو – ${stop(ia.reserves)} ${ia.fund ? stop(ia.fund) : noFund} ${b.name}: ${stop(b.regulation)} پروف آف ریزرو – ${stop(ib.reserves)} ${ib.fund ? stop(ib.fund) : noFund} دونوں میں سے کسی بھی ایکسچینج پر صرف وہی فنڈز رکھیں جن سے آپ ایکٹو ٹریڈنگ کرتے ہیں۔`,
    },
    {
      q: `کیا ${a.name} اور ${b.name} EU میں MiCA کے تحت ریگولیٹڈ ہیں؟`,
      a: `${a.name}: ${ia.mica ? `جی ہاں – ${bare(ia.mica)}` : noMicaEntity}۔ ${b.name}: ${ib.mica ? `جی ہاں – ${bare(ib.mica)}` : noMicaEntity}۔ ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `جن ${featureList.length} پروڈکٹس کا ہم موازنہ کرتے ہیں، ان میں ایسی کوئی نہیں: ${x.name} اپنی سائٹ پر جو بھی پروڈکٹ دکھاتا ہے، وہ ${y.name} بھی دکھاتا ہے۔`;
  const products: Faq[] = [
    { q: `${a.name} کیا پیش کرتا ہے جو ${b.name} نہیں کرتا؟`, a: onlyA || nothing(a, b) },
    { q: `${b.name} کیا پیش کرتا ہے جو ${a.name} نہیں کرتا؟`, a: onlyB || nothing(b, a) },
    {
      q: `کیا ${a.name} اور ${b.name} پر Copy Trading، ٹریڈنگ بوٹس، آپشنز اور ڈیمو ٹریڈنگ دستیاب ہیں؟`,
      a: `Copy Trading: ${state("copyTrading")}۔ ٹریڈنگ بوٹس: ${state("tradingBots")}۔ آپشنز: ${state("options")}۔ ڈیمو ٹریڈنگ: ${state("demoTrading")}۔${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` جہاں صرف ایک ایکسچینج کا نام ہے، وہاں ${prettyDate(site.lastReviewed)} کو دوسرے ایکسچینج کی اپنی سائٹ پر ہمیں اس پروڈکٹ کا کوئی پیج نہیں ملا۔` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `${a.name} اور ${b.name} کے ریفرل کوڈ کیا ہیں؟`,
      a: `${a.name}: ${a.referralCode} – ${stop(lcFirst(a.referral.whereShort))} ${b.name}: ${b.referralCode} – ${stop(lcFirst(b.referral.whereShort))} دونوں کوڈ استعمال کرنا مفت ہے اور ان سے آپ کی ٹریڈنگ فیس نہیں بڑھتی۔`,
    },
    {
      q: `${a.name} یا ${b.name}: کس کا سائن اپ بونس بہتر ہے؟`,
      a: `${a.name}: ${stop(lcFirst(offer(a)))} ${b.name}: ${stop(lcFirst(offer(b)))} دونوں ایکسچینجز پر ویلکم ریوارڈز شناختی تصدیق، ڈپازٹ یا ٹریڈنگ والیوم جیسی شرائط سے جڑے ہوتے ہیں اور ملک کے حساب سے مختلف ہوتے ہیں، اس لیے ہیڈلائن میں لکھی رقم کا نہیں بلکہ شرائط کا موازنہ کریں۔`,
    },
    {
      q: `کیا ${a.name} یا ${b.name} پر بعد میں ریفرل کوڈ شامل کر سکتے ہیں؟`,
      a: `${a.name}: ${stop(lcFirst(a.referral.afterSignupShort))} ${b.name}: ${stop(lcFirst(b.referral.afterSignupShort))} دونوں پر ${safeWay}`,
    },
    {
      q: `کیا ${a.name} اور ${b.name} ایک ساتھ استعمال کر سکتے ہیں؟`,
      a: "جی ہاں۔ یہ الگ الگ کمپنیاں ہیں، اس لیے ایک پر اکاؤنٹ ہونے سے دوسرے کے اکاؤنٹ پر کوئی اثر نہیں پڑتا، اور بہت سے ٹریڈرز دو ایکسچینجز پر فنڈز رکھتے ہیں۔ فیس ٹیئرز، ریفرلز اور ریوارڈز ہر اکاؤنٹ سے الگ الگ جڑے ہوتے ہیں اور ایک سے دوسرے میں منتقل نہیں ہوتے۔",
    },
    {
      q: `${a.name} سے ${b.name} میں کرپٹو کیسے منتقل کریں؟`,
      a: `1۔ ریفرل کوڈ ${b.referralCode} کے ساتھ ${b.name} پر اپنا اکاؤنٹ کھولیں اور شناختی تصدیق مکمل کریں۔ 2۔ ${a.name} پر کھلی Futures اور Margin پوزیشنز بند کریں – پوزیشنز ایک ایکسچینج سے دوسرے پر منتقل نہیں کی جا سکتیں۔ 3۔ ${b.name} میں اس کوائن اور نیٹ ورک کا ڈپازٹ ایڈریس کاپی کریں جو آپ استعمال کرنا چاہتے ہیں۔ 4۔ ${a.name} سے اسی نیٹ ورک پر اس ایڈریس پر ودڈرال کریں، اور پہلے تھوڑی سی ٹیسٹ رقم بھیجیں: غلط نیٹ ورک پر کیا گیا ٹرانسفر ضائع ہو سکتا ہے۔ الٹی سمت میں بھی یہی اسٹیپس کام کرتے ہیں۔`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} یا ${b.name}: کون بہتر ہے؟`, faqs: verdict },
    { id: "fees", title: "فیس، لیوریج اور کوائنز", faqs: fees },
    { id: "countries", title: "ممالک، KYC اور سیکیورٹی", faqs: countries },
    { id: "products", title: "پروڈکٹس", faqs: products },
    { id: "referral", title: "ریفرل کوڈز اور ایک ایکسچینج سے دوسرے پر منتقلی", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi: top, oi, mica }: HubFacts) =>
  `سب سے کم اسٹینڈرڈ Futures فیس ${names(lowF)} کی ہے (${feePair(lowF[0].futuresFees)} میکر / ٹیکر)، سب سے زیادہ لیوریج ${names(top)} پر ملتا ہے (${leverageOf(top[0])}x) اور سب سے گہری ڈیریویٹوز مارکیٹ ${names(oi)} کی ہے (${formatBn(oi[0].market.openInterestBn)} اوپن انٹرسٹ)۔ ${names(mica)} EEA (یورپی اکنامک ایریا) کے رہائشیوں کے لیے MiCA کے تحت منظور شدہ پلیٹ فارم کا نام ${verb(mica, "بتاتا ہے", "بتاتے ہیں")}۔ آپ کے لیے کون سا ایکسچینج بہتر ہے، یہ اس پر منحصر ہے کہ آپ کن دو کے درمیان فیصلہ کر رہے ہیں – نیچے وہ جوڑی منتخب کریں۔`;

function hubFaqs({ all, ranked, lowF, lowS, hi: top, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "کس کرپٹو ایکسچینج کی فیس سب سے کم ہے؟",
      a: `اسٹینڈرڈ ٹیئر پر سب سے کم Futures فیس ${names(lowF)} کی ہے، ${feePair(lowF[0].futuresFees)} (میکر / ٹیکر)، اور سب سے کم Spot فیس ${names(lowS)} کی، ${feePair(lowS[0].spotFees)}۔ باقی ایکسچینجز: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} – Futures پر ${feePair(e.futuresFees)} اور Spot پر ${feePair(e.spotFees)}`)
        .join("؛ ")}۔ VIP لیولز اور ایکسچینج ٹوکن ان ریٹس کو مزید کم کر دیتے ہیں۔`,
    },
    {
      q: "کس کرپٹو ایکسچینج پر سب سے زیادہ لیوریج ملتا ہے؟",
      a: `${names(top)}: ${lcFirst(top[0].maxLeverage)}۔ باقی: ${ranked
        .filter((e) => !top.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join("، ")}۔ ${leverageRisk}`,
    },
    {
      q: "کس کرپٹو ایکسچینج کی Futures مارکیٹ سب سے گہری ہے؟",
      a: `CoinMarketCap کی ڈیریویٹوز رینکنگ (${marketDate}) میں اوپن انٹرسٹ کے حساب سے: ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join("، ")}۔ زیادہ گہری مارکیٹ کا مطلب عموماً بڑے آرڈرز پر کم اسپریڈ ہوتا ہے۔`,
    },
    {
      q: "کن ایکسچینجز کے پاس EEA کے لیے MiCA کے تحت منظور شدہ پلیٹ فارم ہے؟",
      a: `${joinList(mica.map((e) => `${e.name} (${bare(altInfo(e).mica)})`))}۔ ${names(noMica)} اپنے پیجز پر MiCA کے تحت منظور شدہ کسی کمپنی کا نام نہیں ${verb(noMica, "بتاتا", "بتاتے")}۔ ${regionalNote}`,
    },
    {
      q: "کن ایکسچینجز پر سائن اپ کے بعد ریفرل کوڈ شامل کیا جا سکتا ہے؟",
      a: `${later.map((e) => `${e.name}: ${lcFirst(bare(e.referral.afterSignupShort))}`).join("۔ ")}۔ ${names(signupOnly)} پر کوڈ صرف رجسٹریشن کے وقت ہی شمار ہوتا ہے یا بعد میں شامل کرنے کا کوئی طریقہ نہیں بتایا گیا – ہر جگہ ${safeWay}`,
    },
    {
      q: "یہ موازنے کیسے کیے جاتے ہیں؟",
      a: `تمام اعداد و شمار ایکسچینج کی اپنی ویب سائٹ یا ہیلپ سینٹر سے لیے گئے ہیں – فیس شیڈول، شرائط، ممنوعہ ممالک کی فہرستیں، پروڈکٹ پیجز – اور ہر پیج پر اس کے ذرائع درج ہیں۔ اوپن انٹرسٹ، والیوم اور ڈیریویٹوز مارکیٹس کی تعداد CoinMarketCap کی ڈیریویٹوز رینکنگ سے لی گئی ہے۔ کسی پوائنٹ پر کون آگے ہے، یہ انہی اعداد و شمار سے طے ہوتا ہے؛ ہماری اپنی کوئی رینکنگ نہیں۔ موجودہ ریویو کی تاریخ ${date} ہے۔`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const ur: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row before "میں آگے ہے" ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "Futures فیس (میکر / ٹیکر)", topic: "Futures فیس" },
    spotFees: { label: "Spot فیس (میکر / ٹیکر)", topic: "Spot فیس" },
    leverage: { label: "زیادہ سے زیادہ لیوریج", topic: "زیادہ سے زیادہ لیوریج" },
    openInterest: { label: "ڈیریویٹوز اوپن انٹرسٹ", topic: "اوپن انٹرسٹ" },
    volume: { label: "24 گھنٹے کا ڈیریویٹوز والیوم", topic: "24 گھنٹے کے ڈیریویٹوز والیوم" },
    markets: { label: "ڈیریویٹوز مارکیٹس", topic: "ڈیریویٹوز مارکیٹس کی تعداد" },
    users: { label: "یوزرز (ایکسچینج کے اپنے اعداد و شمار)", topic: "یوزرز کی تعداد" },
    assets: { label: "لسٹڈ ایسٹس (ایکسچینج کے اپنے اعداد و شمار)", topic: "" },
    founded: { label: "سالِ قیام", topic: "" },
    products: { label: (compared) => `ملنے والی پروڈکٹس (موازنہ کی گئی ${compared} میں سے)`, topic: "پروڈکٹس کی رینج" },
    countries: { label: (compared) => `بند ممالک (موازنہ کیے گئے ${compared} میں سے)`, topic: "ممالک کی کوریج" },
    mica: { label: "MiCA سے منظور شدہ EEA پلیٹ فارم", topic: "MiCA منظوری" },
    kyc: { label: "شناختی تصدیق (KYC)", topic: "" },
    addLater: { label: "بعد میں ریفرل کوڈ شامل کر سکتے ہیں؟", topic: "بعد میں ریفرل کوڈ شامل کرنے کی سہولت" },
    offer: { label: "نئے یوزرز کے لیے آفر", topic: "" },
    reserves: { label: "پروف آف ریزرو", topic: "" },
    fund: { label: "پروٹیکشن فنڈ", topic: "" },
  },
  countOf: (count, of) => `${of} میں سے ${count}`,
  noMica: "کوئی نام نہیں بتایا گیا",
  noFund: "کوئی نام نہیں بتایا گیا",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    title: (a, b, shortMonthYear) =>
      fit(
        TITLE_MAX,
        [
          `${a.name} vs ${b.name} (${shortMonthYear}): فیس، لیوریج اور بونس`,
          `${a.name} یا ${b.name}؟ فیس، لیوریج اور KYC کا موازنہ`,
          `${a.name} vs ${b.name}: ${yearOf(shortMonthYear)} میں کون سا ایکسچینج بہتر ہے؟`,
        ][variant(3, a.slug, b.slug)],
        `${a.name} vs ${b.name} (${shortMonthYear})`,
      ),
    description: (a, b, monthYear) =>
      fit(
        DESC_MAX,
        `${a.name} vs ${b.name}: Futures فیس ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}، لیوریج ${leverageOf(a)}x vs ${leverageOf(b)}x، پروڈکٹس، ممالک، KYC اور ریفرل کوڈز – ${monthYear} میں چیک کیا گیا۔`,
        `${a.name} vs ${b.name}: Futures فیس ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}، لیوریج ${leverageOf(a)}x vs ${leverageOf(b)}x، پروڈکٹس، ممالک، KYC اور ریفرل کوڈز۔`,
      ),
    keywords: (a, b, former) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${a.name} یا ${b.name}`,
      `${a.name} vs ${b.name} فیس`,
      `${a.name} vs ${b.name} Futures`,
      `${a.name} ${b.name} موازنہ`,
      `کیا ${a.name} ${b.name} سے بہتر ہے`,
      `کیا ${b.name} ${a.name} سے بہتر ہے`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],

    crumbHome: "ہوم",
    crumbHub: "ایکسچینج موازنہ",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name} وہی ایکسچینج ہے جو پہلے ${formerName} کے نام سے جانا جاتا تھا۔`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${a.name} اور ${b.name} دونوں سینٹرلائزڈ ایکسچینجز ہیں جہاں Spot اور لیوریج والی Futures ٹریڈنگ ہوتی ہے، اور دونوں نئے یوزرز کے لیے ریفرل پروگرام چلاتے ہیں۔ ${stop(pickA)} ${stop(pickB)}${formerNote ? ` ${formerNote}` : ""} یہ آمنے سامنے موازنہ دونوں کی فیس، لیوریج، پروڈکٹس، ممالک میں دستیابی، ویریفکیشن کے قواعد اور ریفرل آفرز کو ساتھ ساتھ دکھاتا ہے – تمام اعداد و شمار ${date} کو ایکسچینجز کی اپنی ویب سائٹس سے لیے گئے ہیں۔`,

    toc: {
      "at-a-glance": "ایک نظر میں",
      verdict: "کون سا منتخب کریں",
      fees: "فیس",
      leverage: "لیوریج اور مارکیٹ ڈیپتھ",
      products: "پروڈکٹس",
      countries: "ممالک",
      kyc: "ویریفکیشن (KYC)",
      safety: "سیکیورٹی اور ریگولیشن",
      referral: "ریفرل کوڈز",
      "pros-cons": "فوائد اور نقصانات",
      faq: "سوال و جواب",
      sources: "ذرائع",
    },
    onThisPage: "اس پیج پر",

    /* Hero */
    updated: (date) => `${date} کو چیک اور اپ ڈیٹ کیا گیا`,
    h1: (a, b) => `${a.name} vs ${b.name}: فیس، لیوریج اور سیکیورٹی کا موازنہ`,
    quickAnswer: "مختصر جواب",
    keyFigures: "اہم اعداد و شمار",
    chips: (a, b, oiA, oiB) => [
      `Futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `لیوریج ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `اوپن انٹرسٹ ${oiA} vs ${oiB}`,
    ],
    boxTitle: "ریفرل کوڈ کے ساتھ سائن اپ کریں",
    boxNote: "دونوں کوڈ مفت ہیں اور ان سے آپ کی فیس کبھی نہیں بڑھتی۔",
    codeLabel: (e) => `${e.name} ریفرل کوڈ`,
    boxRisk: () => (
      <>
        لیوریج والی ٹریڈنگ میں رسک بہت زیادہ ہے۔ دونوں میں سے کوئی بھی ایکسچینج ہر ملک میں دستیاب نہیں – <a href="#countries">ممالک</a> دیکھیں۔
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name}: ایک نظر میں`,
    glanceText: (a, b, s) =>
      `آپ ${a.name} vs ${b.name} سرچ کریں یا ${b.name} vs ${a.name}، موازنہ ایک ہی ہے۔ جن ${s.measurable} پوائنٹس کا فیصلہ اعداد و شمار سے ہو سکتا ہے، ان میں سے ${a.name} ${s.a.length} میں آگے ہے اور ${b.name} ${s.b.length} میں${s.tie.length ? `؛ ${s.tie.length} ${points(s.tie.length)} پر دونوں برابر ہیں` : ""}۔ تمام پوائنٹس یکساں اہم نہیں – ایک ایکٹو ٹریڈر کے لیے لمبی کوائن لسٹ سے زیادہ کم فیس اہم ہے – اس لیے وہ کالم دیکھیں جو آپ کے ٹریڈنگ کے انداز سے میل کھاتا ہے۔`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}: فیس، لیوریج، مارکیٹ کا سائز، پروڈکٹس، ممالک، ویریفکیشن اور ریفرل کے قواعد`,
    compared: "پیمانہ",
    ahead: "آگے",
    level: "برابر",
    glanceNote: (marketDate, date) =>
      `فیس: اسٹینڈرڈ (نان-VIP) ٹیئر۔ اوپن انٹرسٹ، والیوم اور مارکیٹس: CoinMarketCap ڈیریویٹوز رینکنگ، ${marketDate}۔ “–” کا مطلب ہے کہ دونوں ویلیوز کو ایک دوسرے کے مقابلے میں کم یا زیادہ نہیں کہا جا سکتا۔ باقی سب کچھ ${date} کو ایکسچینجز کی اپنی ویب سائٹس پر پڑھا گیا۔`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} یا ${b.name}: آپ کو کون سا منتخب کرنا چاہیے؟`,
    verdictText:
      "کوئی ایک مجموعی فاتح نہیں – ہر ایکسچینج الگ طرح کے ٹریڈر کے لیے بنا ہے۔ دونوں باکس دکھاتے ہیں کہ کون سا ایکسچینج کس کے لیے موزوں ہے اور کن پوائنٹس پر وہ دوسرے سے قابلِ پیمائش طور پر آگے ہے۔",
    bestFor: (role) => `خاص بات: ${role}`,
    chooseIf: (e) => `${e.name} منتخب کریں، اگر …`,
    aheadOf: (e, other) => `${e.name} کہاں ${other.name} سے آگے ہے`,
    noAdvantage: "جن پوائنٹس کا ہم موازنہ کرتے ہیں، ان میں کوئی قابلِ پیمائش برتری نہیں۔",
    thinkTwice: "دوبارہ سوچیں، اگر …",
    codeButton: (e) => `${e.name} ریفرل کوڈ ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `فیس: ${a.name} vs ${b.name}`,
    feesModel:
      "دونوں میکر/ٹیکر ماڈل پر چلتے ہیں: لیکویڈیٹی شامل کرنے والے لمٹ آرڈرز پر میکر فیس لگتی ہے، اور لیکویڈیٹی لینے والے آرڈرز پر ٹیکر فیس۔",
    feesCaption: (a, b) => `${a.name} اور ${b.name} کی اسٹینڈرڈ Spot اور Futures فیس`,
    exchange: "ایکسچینج",
    futuresMaker: "Futures میکر",
    futuresTaker: "Futures ٹیکر",
    spotMaker: "Spot میکر",
    spotTaker: "Spot ٹیکر",
    otherMarkets: "دیگر مارکیٹس (میکر / ٹیکر)",
    feesNote: (date) => `ہر ایکسچینج کے شائع کردہ اسٹینڈرڈ (نان-VIP) ریٹس، ${date} کو چیک کیے گئے۔ فیس بدلتی رہتی ہے – ٹریڈنگ سے پہلے ایکسچینج پر تصدیق کر لیں۔`,
    tokenTitle: "ٹوکن ڈسکاؤنٹ اور باریک شرائط",
    noTokenDiscount: "ایکسچینج ٹوکن میں فیس ادا کرنے پر کوئی ڈسکاؤنٹ شائع نہیں کیا گیا۔",

    /* Leverage */
    leverageTitle: "لیوریج اور مارکیٹ ڈیپتھ",
    leverageRisk: "زیادہ لیوریج سے لیکویڈیشن کا خطرہ بہت بڑھ جاتا ہے – زیادہ سے زیادہ لیوریج ایک حد ہے، کوئی مشورہ نہیں۔",
    leverageCaption: (a, b) => `${a.name} اور ${b.name} کا لیوریج اور ڈیریویٹوز مارکیٹ ڈیٹا`,
    maxLeverage: "زیادہ سے زیادہ لیوریج",
    openInterest: "اوپن انٹرسٹ",
    volume24h: "24 گھنٹے کا ڈیریویٹوز والیوم",
    derivativesMarkets: "ڈیریویٹوز مارکیٹس",
    listedAssets: "لسٹڈ ایسٹس (ایکسچینج کے اپنے اعداد و شمار)",
    leverageNote: (marketDate) =>
      `مارکیٹ ڈیٹا: CoinMarketCap ڈیریویٹوز رینکنگ، ${marketDate}۔ ایکسچینجز لسٹڈ ایسٹس کو الگ الگ طریقے سے گنتے ہیں – کچھ کوائنز گنتے ہیں، کچھ ٹریڈنگ پیئرز۔`,

    /* Products */
    productsTitle: (a, b) => `پروڈکٹس: ${a.name} اور ${b.name} کیا پیش کرتے ہیں`,
    productsSame: (compared) => `دونوں ایکسچینجز اپنی سائٹس پر وہ تمام ${compared} پروڈکٹس دکھاتے ہیں جن کا ہم موازنہ کرتے ہیں؛ فرق تفصیلات میں ہے۔`,
    productsLegend: (date) => `ٹک کا مطلب ہے کہ ایکسچینج اپنی سائٹ پر وہ پروڈکٹ دکھاتا ہے؛ ڈیش کا مطلب ہے کہ ${date} کو ہمیں وہاں اس کا کوئی پیج نہیں ملا۔`,
    productsCaption: (a, b) => `${a.name} اور ${b.name} کی پروڈکٹس`,
    product: "پروڈکٹ",
    offered: "دستیاب",
    notOffered: "دستیاب نہیں",
    noPage: "اپنی سائٹ پر کوئی پیج نہیں ملا",

    /* Countries */
    countriesTitle: (a, b) => `ممالک: ${a.name} اور ${b.name} کہاں دستیاب ہیں`,
    countriesText: (compared, differing) =>
      `نیچے ${compared} ممالک کے لیے وہی لکھا ہے جو ہر ایکسچینج کی اپنی شرائط میں درج ہے۔ ان میں سے ${differing} ممالک میں دونوں کی صورتحال مختلف ہے۔ “${ct.statusLabel.regional}” کا مطلب ہے کہ ایکسچینج اس ملک کو ایک الگ پلیٹ فارم کے ذریعے سروس دیتا ہے، جس کی اپنی پروڈکٹس، فیس اور لمٹس ہوتی ہیں۔`,
    countriesCaption: (a, b) => `${a.name} اور ${b.name} کی ممالک میں دستیابی`,
    country: "ملک",
    countriesNote: (date) =>
      `“${ct.statusLabel.open}” کا مطلب ہے کہ ${date} کو وہ ملک ایکسچینج کی ممنوعہ فہرست میں نہیں تھا – یہ اس بات کی ضمانت نہیں کہ وہاں ہر پروڈکٹ دستیاب ہے۔ دونوں ایکسچینجز VPN یا غلط معلومات کے ذریعے پابندی کو بائی پاس کرنا ممنوع قرار دیتے ہیں۔`,
    differTitle: "دونوں کہاں مختلف ہیں",
    differQuestion: (a, b, countryName) => `${countryName} میں ${a.name} یا ${b.name}؟`,
    neither: (a, b, hrefA, hrefB) => (
      <>
        جہاں آپ رہتے ہیں، کیا وہاں دونوں میں سے کوئی بھی دستیاب نہیں؟ متبادل ایکسچینجز والے پیجز کے ملک وار ٹیبل دکھاتے ہیں کہ کون سے دوسرے ایکسچینجز آپ کے
        ملک کو قبول کرتے ہیں: <Link href={hrefA}>ملک کے حساب سے {a.name} کے متبادل</Link> · <Link href={hrefB}>ملک کے حساب سے {b.name} کے متبادل</Link>۔
      </>
    ),
    restrictedTitle: "ممنوعہ ممالک اور علاقائی پلیٹ فارمز",
    whereNot: (e) => `${e.name} کہاں دستیاب نہیں؟`,
    regionalPlatforms: "علاقائی پلیٹ فارمز:",

    /* Verification */
    kycTitle: (a, b) => `ویریفکیشن: ${a.name} vs ${b.name}`,
    kycText:
      "دونوں نئے یوزرز سے شناختی تصدیق مانگتے ہیں، اس لیے بغیر KYC ٹریڈنگ کے لیے ان میں سے کوئی بھی راستہ نہیں۔ فرق اس میں ہے کہ بغیر ویریفکیشن والا اکاؤنٹ کیا کچھ کر سکتا ہے اور جانچ کیسے ہوتی ہے۔",
    documents: "دستاویزات:",
    minAge: "کم از کم عمر:",
    howToRegister: (e) => `${e.name} پر رجسٹریشن اور ویریفکیشن کیسے کریں، قدم بہ قدم`,

    /* Safety */
    safetyTitle: (a, b) => `سیکیورٹی اور ریگولیشن: ${a.name} vs ${b.name}`,
    safetyText:
      "کوئی بھی سینٹرلائزڈ ایکسچینج رسک فری نہیں۔ موازنہ اسی کا ہو سکتا ہے جو ہر ایکسچینج اپنے بارے میں خود شائع کرتا ہے: اس کے پاس کہاں لائسنس ہے، کیا وہ اپنے ریزرو کا ثبوت دیتا ہے اور کیا وہ ہنگامی حالات کے لیے کوئی فنڈ رکھتا ہے۔",
    safetyCaption: (a, b) => `${a.name} اور ${b.name} کا ریگولیشن، پروف آف ریزرو اور پروٹیکشن فنڈ`,
    licences: "ایکسچینج کے بتائے گئے لائسنس",
    entity: "آپریٹ کرنے والی کمپنی",
    reserves: "پروف آف ریزرو",
    fund: "پروٹیکشن فنڈ",
    founded: "سالِ قیام",
    isSafe: (e) => `کیا ${e.name} محفوظ ہے؟`,
    safetyDetail: (e) => `${e.name} کی سیکیورٹی اور دستیابی تفصیل سے`,

    /* Referral codes */
    referralTitle: (a, b) => `ریفرل کوڈز اور نئے یوزرز کی آفرز: ${a.name} vs ${b.name}`,
    referralText:
      "آپ جو بھی منتخب کریں، ریفرل کوڈ کے ساتھ رجسٹر کریں: اس کا کوئی خرچ نہیں، اس سے آپ کی فیس کبھی نہیں بڑھتی اور ایکسچینج کی نئے یوزرز والی آفر ان لاک ہو جاتی ہے۔ آخری قطار پر دھیان دیں – بھولا ہوا کوڈ ہمیشہ بعد میں شامل نہیں کیا جا سکتا۔",
    referralCaption: (a, b) => `${a.name} اور ${b.name} کے ریفرل کوڈز اور نئے یوزرز کی آفرز`,
    referralCodeOf: (e) => `${e.name} ریفرل کوڈ`,
    referralCode: "ریفرل کوڈ",
    newUserOffer: "نئے یوزرز کے لیے آفر",
    inviteeReward: "انوائٹ کیے گئے یوزر کے طور پر آپ کو کیا ملتا ہے",
    covers: "ایک ریفرل میں شامل",
    whereCode: "کوڈ کہاں ڈالیں",
    addLater: "کیا بعد میں شامل کر سکتے ہیں؟",
    referralNote: (date) => `آفرز ${date} کو چیک کی گئیں۔ ویلکم ریوارڈز ٹاسکس پر مبنی ہوتے ہیں، ان کے لیے شناختی تصدیق ضروری ہے اور یہ ملک کے حساب سے مختلف ہوتے ہیں۔`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `${a.name} اور ${b.name} کے فوائد اور نقصانات`,
    pros: "فوائد",
    cons: "نقصانات",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – اکثر پوچھے جانے والے سوالات`,
    faqText: (count, a, b) => `${a.name} اور ${b.name} میں سے انتخاب پر ${count} سوالات: فیس، لیوریج، ممالک، ویریفکیشن، پروڈکٹس اور ریفرل کوڈز۔`,

    /* Sources */
    sourcesTitle: "ذرائع: یہ اعداد و شمار کہاں سے آئے ہیں",
    sourcesText: (date, marketDate) =>
      `اس پیج پر فیس، لیوریج، پروڈکٹس، ویریفکیشن، ممالک، لائسنس، ریزرو اور ریفرل قواعد کے بارے میں جو کچھ بھی لکھا ہے، وہ ${date} کو دونوں ایکسچینجز کی اپنی ویب سائٹس اور ہیلپ سینٹرز سے لیا گیا ہے۔ اوپن انٹرسٹ، والیوم اور ڈیریویٹوز مارکیٹس کی تعداد CoinMarketCap کی ڈیریویٹوز رینکنگ (${marketDate}) سے لی گئی ہے۔ ایکسچینجز بغیر اطلاع کے اپنی شرائط بدل دیتے ہیں، اس لیے حتمی بات نیچے دیے گئے پیجز کی ہی ہے۔`,
    officialPages: (e, count) => `${e.name}: ${count} آفیشل پیجز`,

    /* More comparisons */
    moreTitle: "مزید موازنے",
    against: (e) => `باقی ایکسچینجز کے مقابلے میں ${e.name}`,
    allAlternatives: (e) => `${e.name} کے تمام متبادل`,
    allComparisons: "تمام ایکسچینج موازنے",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>رسک وارننگ:</strong> کرپٹو ڈیریویٹوز پیچیدہ انسٹرومنٹس ہیں۔ لیوریج منافع اور نقصان دونوں کو کئی گنا بڑھا دیتا ہے، اور آپ چند منٹوں میں اپنا پورا
        مارجن کھو سکتے ہیں۔ یہ پیج صرف معلومات کے لیے ہے اور مالی مشورہ نہیں۔ اگر آپ ہمارے لنکس کے ذریعے سائن اپ کرتے ہیں تو ہمیں کمیشن مل سکتا ہے – ہمارا{" "}
        <Link href={disclosureHref}>ایفیلیئٹ ڈسکلوژر</Link> دیکھیں۔ اس سے اعداد و شمار نہیں بدلتے: یہ ایکسچینجز کے اپنے اعداد و شمار ہیں۔
      </>
    ),
    ctaTitle: (a, b) => `${a.name} یا ${b.name}؟ ریفرل کوڈ کے ساتھ شروع کریں`,
    ctaText: "دونوں میں سے کسی بھی ایکسچینج پر Spot اور Futures کے لیے ایک ہی اکاؤنٹ، بغیر کسی اضافی خرچ کے۔",
    ctaButton: "مزید ایکسچینجز کا موازنہ کریں",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) =>
      fit(TITLE_MAX, `کرپٹو ایکسچینج موازنہ (${shortMonthYear}): ${pairs} آمنے سامنے مقابلے`, `کرپٹو ایکسچینج موازنہ (${shortMonthYear})`),
    description: (exchangeNames, pairs, monthYear) =>
      fit(
        DESC_MAX,
        `${exchangeNames} جوڑیوں میں: فیس، لیوریج، ممالک، KYC اور ریفرل کوڈز پر ${pairs} آمنے سامنے موازنے – ${monthYear} میں چیک کیا گیا۔`,
        `${exchangeNames} جوڑیوں میں: فیس، لیوریج، ممالک، KYC اور ریفرل کوڈز پر ${pairs} آمنے سامنے موازنے۔`,
      ),
    crumbHome: "ہوم",
    crumbPage: "ایکسچینج موازنہ",
    listName: "کرپٹو ایکسچینجز کے آمنے سامنے موازنے",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `${date} کو چیک اور اپ ڈیٹ کیا گیا`,
    h1: (pairs) => `کرپٹو ایکسچینج موازنہ: ${pairs} آمنے سامنے مقابلے`,
    lead: (exchangeCount) =>
      `${exchangeCount} ایکسچینجز، اور ہر جوڑی کا موازنہ ایک جیسے پوائنٹس پر: فیس، لیوریج، مارکیٹ ڈیپتھ، پروڈکٹس، ممالک میں دستیابی، شناختی تصدیق، ریگولیشن اور ریفرل آفرز۔ ہر موازنے میں ایکسچینجز کی اپنی ویب سائٹس کے اعداد و شمار استعمال کیے گئے ہیں۔`,
    quickAnswer: "مختصر جواب",

    pickTitle: "موازنے کے لیے دو ایکسچینج منتخب کریں",
    pickText: (others) =>
      `ہر باکس میں ایک ایکسچینج کو باقی ${others} کے سامنے رکھا گیا ہے۔ ہر جوڑی کا ایک ہی پیج ہے، اس لیے “Binance vs OKX” اور “OKX vs Binance” دونوں ایک ہی موازنے پر لے جاتے ہیں۔`,
    alternativesOf: (e) => `${e.name} کے متبادل`,
    referralCodeOf: (e) => `${e.name} ریفرل کوڈ`,

    tableTitle: (exchangeCount) => `تمام ${exchangeCount} ایکسچینجز ایک ساتھ`,
    tableText: "ہر ایکسچینج کی نئے یوزرز والی آفرز، اسٹینڈرڈ (نان-VIP) فیس، لیوریج اور مارکیٹ ڈیپتھ ایک ہی ٹیبل میں۔",
    tableNote: (date, marketDate) =>
      `فیس: ہر ایکسچینج کا شائع کردہ اسٹینڈرڈ ٹیئر، ${date} کو چیک کیا گیا۔ اوپن انٹرسٹ اور مارکیٹس: CoinMarketCap، ${marketDate}۔`,

    alternativesTitle: "ایک ایکسچینج، باقی سب کے مقابلے میں",
    alternativesText: (others) =>
      `دو میں سے انتخاب نہیں کر رہے بلکہ کسی ایکسچینج کا متبادل ڈھونڈ رہے ہیں؟ متبادل والے پیجز ایک ایکسچینج کا باقی ${others} سے ایک ساتھ موازنہ کرتے ہیں اور دکھاتے ہیں کہ ان میں سے کون سے آپ کے ملک کو قبول کرتے ہیں۔`,

    faqTitle: "ایکسچینج موازنہ – اکثر پوچھے جانے والے سوالات",

    ctaTitle: "فیصلہ کر لیا؟ ریفرل کوڈ کے ساتھ سائن اپ کریں",
    ctaText: (exchangeCount) => `تمام ${exchangeCount} ایکسچینجز کے ویریفائیڈ کوڈز – Spot اور Futures کے لیے ایک اکاؤنٹ، بغیر کسی اضافی خرچ کے۔`,
    ctaButton: "تمام ریفرل کوڈز دیکھیں",
  },
};
