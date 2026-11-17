/**
 * The sentences of the comparison pages in Urdu. Same functions and the same logic as `./en.ts`, written in
 * Urdu grammar (subject – object – verb, postpositions as separate words).
 *
 * Wording: "ایکسچینج" (masculine: "Binance سستا ہے", plural "سستے ہیں"), "فیس" (feminine), "ریفرل کوڈ", "متبادل",
 * polite "آپ". Exchange names take no ending; postpositions are separate words ("Binance پر", "OKX کی فیس") and
 * کا / کی / کے agree with the noun that follows. Country names stand without postposition in `name`; the
 * sentences add "میں" / "کو" / "پر" themselves. `residents` ("امریکہ میں رہنے والے یوزرز") stays the same before a
 * postposition. Fee rates come from the data (0.02%); leverage stays 150x. Sentences end with "۔", questions with "؟".
 * Arabic script has no capital letters, so inserted data texts are never changed. Data texts without a full stop
 * (pick, kycShort, assets, reserves, fund, mica …) get "۔" where they end a sentence.
 */
import { site } from "@/config/site";
import type { Exchange, Faq, Fee, Step } from "@/data/exchanges";
import { countryList, featureList } from "@/data/alternatives";
import type { CountryKey, CountryStatus, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
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

const locale = "ur";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);

/* --------------------------------- endings --------------------------------- */

/** Ends a data text with "۔" unless it already ends a sentence. */
const stop = (s: string) => (/[۔؟!.?]$/.test(s.trim()) ? s.trim() : `${s.trim()}۔`);
/** The `pick` lines of several exchanges as consecutive sentences ("…۔ …۔"). */
const picks = (list: Exchange[]) => list.map((a) => stop(altInfo(a).pick)).join(" ");
/** `afterSignupShort` without its leading "ہاں – ". */
const withoutYes = (s: string) => s.replace(/^(جی\s+)?ہاں\s*[–-]\s*/, "");

/* -------------------------------- vocabulary -------------------------------- */

/** `label` for the tables, `noun` as the object of "پیش کرتا ہے" in sentences. */
const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "Copy Trading", noun: "Copy Trading" },
  tradingBots: { label: "ٹریڈنگ بوٹس", noun: "ٹریڈنگ بوٹس" },
  options: { label: "آپشنز", noun: "آپشنز ٹریڈنگ" },
  demoTrading: { label: "ڈیمو ٹریڈنگ", noun: "ڈیمو ٹریڈنگ" },
  margin: { label: "Spot Margin", noun: "Spot Margin ٹریڈنگ" },
  p2p: { label: "P2P ٹریڈنگ", noun: "P2P ٹریڈنگ" },
  fiat: { label: "کارڈ / بینک سے خریداری", noun: "کارڈ یا بینک ٹرانسفر سے کرپٹو خریدنے کی سہولت" },
  earn: { label: "Earn / اسٹیکنگ", noun: "Earn پروڈکٹس" },
  launchpad: { label: "Launchpad / Launchpool", noun: "Launchpad" },
  web3Wallet: { label: "Web3 والٹ", noun: "سیلف کسٹڈی Web3 والٹ" },
  card: { label: "کرپٹو کارڈ", noun: "کرپٹو کارڈ" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` for sentences ("امریکہ میں", "امریکہ پر"), `short` for the tables. */
const countryWords: Record<CountryKey, { name: string; short: string }> = {
  us: { name: "امریکہ", short: "امریکہ" },
  uk: { name: "برطانیہ", short: "برطانیہ" },
  ca: { name: "کینیڈا", short: "کینیڈا" },
  de: { name: "جرمنی", short: "جرمنی" },
  fr: { name: "فرانس", short: "فرانس" },
  nl: { name: "نیدرلینڈز", short: "نیدرلینڈز" },
  es: { name: "اسپین", short: "اسپین" },
  it: { name: "اٹلی", short: "اٹلی" },
  au: { name: "آسٹریلیا", short: "آسٹریلیا" },
  jp: { name: "جاپان", short: "جاپان" },
  sg: { name: "سنگاپور", short: "سنگاپور" },
  hk: { name: "ہانگ کانگ", short: "ہانگ کانگ" },
  in: { name: "بھارت", short: "بھارت" },
  ae: { name: "متحدہ عرب امارات", short: "متحدہ عرب امارات" },
};
/** `residents` reads the same with and without a following postposition ("… یوزرز کو", "… یوزرز کے لیے"). */
const countries = countryList.map((c) => ({ key: c.key, ...countryWords[c.key], residents: `${countryWords[c.key].name} میں رہنے والے یوزرز` }));

const statusLabel: Record<CountryStatus, string> = {
  restricted: "ممنوع",
  regional: "علاقائی سائٹ",
  partial: "جزوی",
  open: "ممنوع نہیں",
};

/** The market of a fee comparison: "Spot" / "پرپیچوئل فیوچرز". */
const marketName = (market: "spot" | "futures") => (market === "spot" ? "Spot" : "پرپیچوئل فیوچرز");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const label = marketName(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${label} پر ${a.name} اور ${x.name} دونوں ایک جیسی اسٹینڈرڈ فیس لیتے ہیں: ${fa.maker} میکر / ${fa.taker} ٹیکر۔`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} میکرز اور ٹیکرز دونوں کے لیے سستا ہے`
      : mm !== 0
        ? `${who} میکرز کے لیے سستا ہے، جبکہ ٹیکرز کی فیس دونوں پر برابر ہے`
        : `${who} ٹیکرز کے لیے سستا ہے، جبکہ میکرز کی فیس دونوں پر برابر ہے`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} میکرز کے لیے سستا ہے اور ${x.name} ٹیکرز کے لیے`
          : `${x.name} میکرز کے لیے سستا ہے اور ${a.name} ٹیکرز کے لیے`;
  return `${label} پر ${a.name} کی فیس ${fa.maker} میکر / ${fa.taker} ٹیکر ہے اور ${x.name} کی ${fx.maker} / ${fx.taker} – ${verdict}۔`;
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
    `${marketName(market)} پر ${x.name} کی فیس ${feePair(fx)} (میکر / ٹیکر) ہے۔`,
    lower.length ? `${x.name} سے ${verb(lower, "سستا", "سستے")}: ${rates(lower)}۔` : `${alts.length} متبادل میں سے کوئی بھی ${x.name} سے سستا نہیں۔`,
    same.length ? `برابر فیس: ${names(same)}۔` : "",
    higher.length ? `${x.name} سے ${verb(higher, "مہنگا", "مہنگے")}: ${rates(higher)}۔` : "",
    mixed.length ? `صرف میکر یا صرف ٹیکر فیس میں ${verb(mixed, "سستا", "سستے")}: ${rates(mixed)}۔` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (market: "spot" | "futures", fa: Fee, fx: Fee) => {
    const where = market === "spot" ? "Spot پر" : "Futures پر";
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`${where} کم فیس: ${feePair(fx)} کے بجائے ${feePair(fa)} (میکر / ٹیکر)`);
    else if (m < 0 && t === 0) out.push(`${where} کم میکر فیس: ${fx.maker} کے بجائے ${fa.maker}`);
    else if (t < 0 && m === 0) out.push(`${where} کم ٹیکر فیس: ${fx.taker} کے بجائے ${fa.taker}`);
    else if (m < 0) out.push(`${where} کم میکر فیس: ${fx.maker} کے بجائے ${fa.maker} (لیکن ٹیکر فیس زیادہ)`);
    else if (t < 0) out.push(`${where} کم ٹیکر فیس: ${fx.taker} کے بجائے ${fa.taker} (لیکن میکر فیس زیادہ)`);
  };
  fee("spot", a.spotFees, x.spotFees);
  fee("futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`لیوریج کی زیادہ حد: ${leverageOf(x)}x کے بجائے ${leverageOf(a)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`ڈیریویٹوز میں زیادہ اوپن انٹرسٹ: ${formatBn(a.market.openInterestBn)} بمقابلہ ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`زیادہ ڈیریویٹوز مارکیٹس: ${a.market.markets} بمقابلہ ${x.market.markets}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`بھولا ہوا ریفرل کوڈ بعد میں بھی شامل کیا جا سکتا ہے (${withoutYes(a.referral.afterSignupShort)})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`${joinList(notOffered.map((f) => f.noun))} پیش کرتا ہے، جبکہ ${x.name} یہ پیش نہیں کرتا`);
  if (notFound.length)
    out.push(`${joinList(notFound.map((f) => f.noun))} پیش کرتا ہے – ${x.name} کی اپنی ویب سائٹ پر ہمیں ایسی کوئی پروڈکٹ نہیں ملی`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`MiCA کے تحت منظور شدہ EEA پلیٹ فارم (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`${joinList(openWhere.map((c) => c.name))} پر پابندی نہیں لگاتا، جہاں ${x.name} بند ہے`);
  if (regionalWhere.length)
    out.push(`${joinList(regionalWhere.map((c) => c.name))} میں علاقائی پلیٹ فارم کے ذریعے سروس دیتا ہے، جہاں ${x.name} بند ہے`);
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
  if (own.status === "restricted") parts.push(`${x.name} کی ممنوعہ ممالک کی اپنی فہرست میں ${c.name} شامل ہے۔`);
  else if (own.status === "partial") parts.push(`${x.name} ${c.name} میں جزوی پابندیاں لگاتا ہے${ownNote}۔`);
  else if (own.status === "regional") parts.push(`${x.name} ${c.residents} کو ایک علاقائی پلیٹ فارم${ownNote} کے ذریعے سروس دیتا ہے۔`);
  else parts.push(`${x.name} ${c.name} کو ممنوعہ ممالک کی فہرست میں نہیں رکھتا۔`);
  if (g.open.length) parts.push(`${names(g.open)} ${c.name} کو ممنوعہ ممالک کی فہرست میں نہیں ${verb(g.open, "رکھتا", "رکھتے")}۔`);
  if (g.regional.length)
    parts.push(
      `${joinList(withNote(g.regional))} ${c.residents} کو ${verb(g.regional, "ایک الگ علاقائی پلیٹ فارم کے ذریعے سروس دیتا ہے", "اپنے اپنے الگ علاقائی پلیٹ فارم کے ذریعے سروس دیتے ہیں")}۔`,
    );
  if (g.partial.length) parts.push(`جزوی پابندیاں: ${withNote(g.partial).join("؛ ")}۔`);
  if (g.restricted.length)
    parts.push(`${names(g.restricted)}${own.status === "restricted" ? " بھی" : ""} ${c.name} پر پابندی ${verb(g.restricted, "لگاتا ہے", "لگاتے ہیں")}۔`);
  if (!g.open.length && !g.regional.length) parts.push(`${alts.length} متبادل میں سے کوئی بھی ${c.residents} کے لیے مکمل طور پر کھلا نہیں ہے۔`);
  parts.push(
    "ممالک کی فہرستیں بدلتی رہتی ہیں، اور کسی ملک کا فہرست میں نہ ہونا اس بات کی ضمانت نہیں کہ وہاں ہر پروڈکٹ دستیاب ہے – اصل فیصلہ ایکسچینج کی اپنی شرائط سے ہوتا ہے۔",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `یہاں ${x.name} کے جن ${alts.length} متبادل کا موازنہ کیا گیا ہے، وہ ${names(alts)} ہیں۔ ${picks(alts)} یہ تمام ${alts.length} ایکسچینجز نئے یوزرز سے شناختی تصدیق (KYC) مانگتے ہیں اور ہر ایک کی ممنوعہ ممالک کی اپنی فہرست ہے، اس لیے سائن اپ سے پہلے ممالک والا ٹیبل ضرور دیکھ لیں۔`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `طے کریں کہ ${x.name} کے مقابلے میں کیا بہتر ہونا چاہیے`,
      text: `کم فیس، زیادہ لیوریج، زیادہ کوائنز یا بس ایسا ایکسچینج جو آپ کے ملک کو قبول کرے: اس پیج کے ٹیبلز بتاتے ہیں کہ ہر متبادل کن باتوں میں ${x.name} سے آگے ہے اور کن میں نہیں۔`,
    },
    {
      title: "چیک کریں کہ ایکسچینج آپ کے ملک کو قبول کرتا ہے یا نہیں",
      text: "ہر ایکسچینج کی ممنوعہ ممالک کی اپنی فہرست ہوتی ہے، اور کچھ ایکسچینجز آپ کو ایسے علاقائی پلیٹ فارم پر بھیج دیتے ہیں جس کی پروڈکٹس اور لمٹس مختلف ہوتی ہیں۔ رجسٹریشن سے پہلے ممالک والا ٹیبل دیکھ لیں۔",
    },
    {
      title: "ریفرل لنک کے ذریعے رجسٹر کریں",
      text: `${names(signupOnly)} ریفرل کوڈ صرف رجسٹریشن کے وقت قبول ${verb(signupOnly, "کرتا ہے", "کرتے ہیں")} یا بعد میں کوڈ شامل کرنے کا کوئی طریقہ نہیں ${verb(signupOnly, "بتاتا", "بتاتے")}، اس لیے اکاؤنٹ بننے سے پہلے ہی لنک استعمال کریں۔${later.length ? ` ${names(later)} کچھ شرائط کے ساتھ بعد میں کوڈ شامل کرنے ${verb(later, "دیتا ہے", "دیتے ہیں")}۔` : ""}`,
    },
    {
      title: "فنڈز منتقل کرنے سے پہلے اپنی شناختی تصدیق مکمل کریں",
      text: `تمام ${alts.length} متبادل نئے یوزرز سے شناختی تصدیق مانگتے ہیں، اور زیادہ تر پر اس کے مکمل ہونے تک ڈپازٹ یا ٹریڈنگ بند رہتی ہے۔ پاسپورٹ، شناختی کارڈ یا ڈرائیونگ لائسنس تیار رکھیں۔`,
    },
    {
      title: `${x.name} پر اپنی اوپن پوزیشنز بند کریں`,
      text: `Futures اور Margin پوزیشنز ایک ایکسچینج سے دوسرے ایکسچینج پر منتقل نہیں کی جا سکتیں۔ پہلے انہیں ${x.name} پر بند کریں، یا ان کے ختم ہونے تک اکاؤنٹ برقرار رکھیں۔`,
    },
    {
      title: "اپنے نئے ڈپازٹ ایڈریس پر ودڈرال کریں",
      text: "نئے ایکسچینج سے ڈپازٹ ایڈریس کاپی کریں، دونوں طرف ایک ہی کوائن اور ایک ہی نیٹ ورک منتخب کریں اور پہلے تھوڑی سی ٹیسٹ رقم بھیجیں۔ غلط نیٹ ورک پر کیا گیا ٹرانسفر ضائع ہو سکتا ہے۔",
    },
    {
      title: `طے کریں کہ آپ کے ${x.name} اکاؤنٹ کا کیا ہوگا`,
      text: `آپ اسے رکھ سکتے ہیں – مختلف ایکسچینجز کے اکاؤنٹس ایک دوسرے سے آزاد ہوتے ہیں۔ آپ کا فیس لیول، آپ کا ریفرل اور استعمال نہ ہونے والے ریوارڈز ${x.name} پر ہی رہتے ہیں اور نئے ایکسچینج پر منتقل نہیں ہوتے۔`,
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
      q: `${x.name} کا بہترین متبادل کون سا ہے؟`,
      a: `${x.name} کا کوئی ایک بہترین متبادل نہیں – یہ اس پر منحصر ہے کہ آپ ایکسچینج کیوں بدلنا چاہتے ہیں۔ ${picks(alts)} اس پیج پر تمام ${n} کا ${x.name} سے موازنہ فیس، لیوریج، پروڈکٹس، ممالک میں دستیابی اور ویریفکیشن کی بنیاد پر کیا گیا ہے – اعداد و شمار ایکسچینجز کی اپنی ویب سائٹس سے لیے گئے ہیں اور ${date} کو چیک کیے گئے ہیں۔`,
    },
    {
      q: `${x.name} جیسے ایکسچینجز کون سے ہیں؟`,
      a: `${x.name} سے سب سے زیادہ ملتے جلتے ایکسچینجز ${names(alts)} ہیں۔ ${x.name} کی طرح یہ بھی سینٹرلائزڈ ایکسچینجز ہیں جو ایک ہی اکاؤنٹ میں Spot اور لیوریج والی Futures ٹریڈنگ پیش کرتے ہیں اور نئے یوزرز کے لیے ریفرل پروگرام چلاتے ہیں۔ ان میں فرق فیس، زیادہ سے زیادہ لیوریج، لسٹڈ ایسیٹس کی تعداد اور ان ممالک کا ہے جنہیں یہ قبول کرتے ہیں۔`,
    },
    {
      q: `${x.name} کا سب سے بڑا متبادل کون سا ہے؟`,
      a: `CoinMarketCap پر ڈیریویٹوز اوپن انٹرسٹ (${prettyDate(site.marketDataDate)}) کے لحاظ سے ${n} متبادل میں ${names(oi)} ${formatBn(oi[0].market.openInterestBn)} کے ساتھ سب سے ${verb(oi, "بڑا ہے", "بڑے ہیں")}۔ خود ${x.name} کا اوپن انٹرسٹ ${formatBn(x.market.openInterestBn)} تھا۔`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${x.name} کے کس متبادل کی فیس سب سے کم ہے؟`,
      a: `${n} متبادل میں سب سے کم اسٹینڈرڈ Futures فیس ${names(lowF)} کی ہے: ${feePair(lowF[0].futuresFees)} (میکر / ٹیکر)۔ Spot پر ${names(lowS)} ${feePair(lowS[0].spotFees)} کے ساتھ سب سے ${verb(lowS, "سستا ہے", "سستے ہیں")}۔ ${x.name} کی فیس Futures پر ${feePair(x.futuresFees)} اور Spot پر ${feePair(x.spotFees)} ہے۔${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} یہ اسٹینڈرڈ لیول کے ریٹس ہیں؛ VIP لیولز اور ایکسچینجز کے اپنے ٹوکنز انہیں مزید کم کر دیتے ہیں۔`,
    },
    {
      q: `کون سے ایکسچینجز ${x.name} سے سستے ہیں؟`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `پرپیچوئل فیوچرز پر: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}، جبکہ ${x.name} پر ${feePair(x.futuresFees)}۔` : `پرپیچوئل فیوچرز پر ${n} متبادل میں سے کوئی بھی ${x.name} کی ${feePair(x.futuresFees)} فیس سے کم نہیں لیتا۔`} ${cheaperS.length ? `Spot پر: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}، جبکہ ${x.name} پر ${feePair(x.spotFees)}۔` : `Spot پر ان میں سے کوئی بھی ${x.name} کی ${feePair(x.spotFees)} فیس سے کم نہیں لیتا۔`} تمام اعداد اسٹینڈرڈ لیول پر میکر / ٹیکر فیس ہیں۔`
          : `اسٹینڈرڈ لیول پر ${n} متبادل میں سے کوئی بھی ${x.name} سے سستا نہیں: ${x.name} کی فیس Futures پر ${feePair(x.futuresFees)} اور Spot پر ${feePair(x.spotFees)} (میکر / ٹیکر) ہے، جو اس موازنے کے سب سے کم ریٹس ہیں۔ پھر بھی دوسری وجوہات سے ان متبادل پر نظر ڈالنا فائدہ مند ہے – ریگولیشن، پروڈکٹس یا وہ ممالک جنہیں یہ قبول کرتے ہیں۔`,
    },
    {
      q: `${x.name} کے کس متبادل پر سب سے زیادہ لیوریج ملتا ہے؟`,
      a: `${n} متبادل میں سب سے زیادہ لیوریج ${names(highest)} ${verb(highest, "دیتا ہے", "دیتے ہیں")}: ${highest[0].maxLeverage}۔ باقی: ${alts
        .filter((a) => !highest.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join("، ")}۔ خود ${x.name} پر زیادہ سے زیادہ لیوریج: ${x.maxLeverage}۔ زیادہ لیوریج سے لیکویڈیشن کا خطرہ بہت بڑھ جاتا ہے۔`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `${c.name} میں آپ ${x.name} کے کون سے متبادل استعمال کر سکتے ہیں؟`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `کیا ${x.name} کا کوئی متبادل بغیر KYC کے ہے؟`,
      a: `ان ${n} میں سے کوئی نہیں۔ ان میں سے ہر ایکسچینج نئے یوزرز سے شناختی تصدیق مانگتا ہے: ${alts.map((a) => `${a.name} – ${a.signup.kycShort}`).join("؛ ")}۔ خود ${x.name}: ${stop(x.signup.kycShort)}`,
    },
    {
      q: `${x.name} کے کون سے متبادل یورپی یونین میں MiCA کے تحت ریگولیٹڈ ہیں؟`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} EEA (یورپی اکنامک ایریا) کے رہائشیوں کے لیے MiCA کے تحت منظور شدہ ادارے کا نام ${verb(mica, "بتاتا ہے", "بتاتے ہیں")}۔` : `${n} میں سے کوئی بھی MiCA کے تحت منظور شدہ کسی ادارے کا نام نہیں بتاتا۔`}${noMica.length ? ` ${names(noMica)} اپنے پیجز پر کسی MiCA منظوری کا ذکر نہیں ${verb(noMica, "کرتا", "کرتے")}۔` : ""} ${xInfo.mica ? `خود ${x.name}: ${stop(xInfo.mica)}` : `خود ${x.name} ایسے کسی ادارے کا نام نہیں بتاتا۔`} علاقائی پلیٹ فارم کی پروڈکٹس، فیس اور لمٹس عام طور پر الگ ہوتی ہیں۔`,
    },
    {
      q: `${x.name} کا سب سے محفوظ متبادل کون سا ہے؟`,
      a: `کوئی بھی سینٹرلائزڈ ایکسچینج خطرے سے پاک نہیں، اس لیے ایمانداری سے موازنہ صرف اسی بات کا ہو سکتا ہے کہ ہر ایکسچینج خود کیا شائع کرتا ہے۔ ${alts.map((a) => `${a.name}: پروف آف ریزرو – ${stop(altInfo(a).reserves)} ${altInfo(a).fund ? stop(altInfo(a).fund) : "کسی پروٹیکشن فنڈ کا ذکر نہیں۔"}`).join(" ")} کسی بھی ایکسچینج پر صرف اتنے ہی فنڈز رکھیں جن سے آپ فعال طور پر ٹریڈ کرتے ہیں۔`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `${x.name} کے کون سے متبادل ${f.noun} پیش کرتے ہیں؟`,
      a: `${yes.length ? `${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))} ${f.noun} پیش ${verb(yes, "کرتا ہے", "کرتے ہیں")}۔` : `${n} متبادل میں سے کوئی بھی اپنی ویب سائٹ پر ${f.noun} نہیں دکھاتا۔`}${no.length ? ` ${names(no)} یہ سہولت پیش نہیں ${verb(no, "کرتا", "کرتے")}۔` : ""}${unknown.length ? ` ${names(unknown)} کی ${verb(unknown, "ویب سائٹ", "ویب سائٹس")} پر ہماری جانچ میں ایسی کوئی پروڈکٹ نہیں ملی۔` : ""} ${own === true ? `خود ${x.name} پر بھی یہ سہولت موجود ہے۔` : own === false ? `خود ${x.name} یہ سہولت پیش نہیں کرتا۔` : `خود ${x.name} اپنی ویب سائٹ پر ایسی کوئی پروڈکٹ نہیں دکھاتا۔`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `${x.name} کے کس متبادل پر سب سے زیادہ کوائنز لسٹڈ ہیں؟`,
      a: `ایکسچینجز کے اپنے اعداد و شمار کے مطابق: ${alts.map((a) => `${a.name} – ${a.assets}`).join("؛ ")}۔ ${x.name}: ${stop(x.assets)} ایکسچینجز مختلف طریقوں سے گنتی کرتے ہیں – کچھ کوائنز گنتے ہیں اور کچھ ٹریڈنگ پیئرز – اس لیے ان اعداد کا براہ راست موازنہ نہیں کیا جا سکتا۔`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `${x.name} سے دوسرے ایکسچینج پر کیسے سوئچ کریں؟`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}۔ ${s.title}۔`)
        .join(" "),
    },
    {
      q: `کیا دوسرے ایکسچینج پر اکاؤنٹ کھولنے کے بعد آپ اپنا ${x.name} اکاؤنٹ برقرار رکھ سکتے ہیں؟`,
      a: `جی ہاں۔ یہ ایکسچینجز الگ الگ کمپنیاں ہیں، اس لیے ایک پر موجود اکاؤنٹ کا دوسرے پر موجود اکاؤنٹ پر کوئی اثر نہیں پڑتا اور آپ دونوں کو ساتھ ساتھ استعمال کر سکتے ہیں۔ البتہ جو کچھ اکاؤنٹ سے جڑا ہے وہ منتقل نہیں ہوتا: آپ کا ${x.name} ریفرل، فیس لیول، ویلکم ریوارڈز اور ٹریڈنگ ہسٹری ${x.name} پر ہی رہتے ہیں۔`,
    },
    {
      q: `کیا آپ ${x.name} کی اوپن Futures پوزیشنز دوسرے ایکسچینج پر منتقل کر سکتے ہیں؟`,
      a: `نہیں۔ Futures پوزیشن صرف اسی ایکسچینج پر موجود ہوتی ہے جہاں اسے کھولا گیا تھا۔ سوئچ کرنے کے لیے ${x.name} پر پوزیشن بند کریں، فنڈز ودڈرال کریں اور دوسرے ایکسچینج پر نئی پوزیشن کھولیں – اسی قیمت اور فیس پر جو وہاں لاگو ہو۔`,
    },
    {
      q: `کیا ${x.name} کے متبادل ایکسچینجز کے بھی ریفرل کوڈ ہیں؟`,
      a: `جی ہاں، تمام ${n} کے: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("؛ ")}۔ ریفرل کوڈ استعمال کرنا مفت ہے اور اس سے آپ کی ٹریڈنگ فیس نہیں بڑھتی۔`,
    },
    {
      q: `کیا ${x.name} کے کسی متبادل پر بعد میں ریفرل کوڈ شامل کیا جا سکتا ہے؟`,
      a: `${alts.map((a) => `${a.name}: ${stop(a.referral.afterSignupShort)}`).join(" ")} ہر ایکسچینج پر محفوظ طریقہ یہی ہے کہ آپ ریفرل لنک کے ذریعے رجسٹر کریں۔`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `کیا ${a.name}، ${x.name} سے بہتر ہے؟`,
      a: `${ahead.length ? `${a.name} ان نکات پر ${x.name} سے آگے ہے: ${ahead.join("؛ ")}۔` : `جن نکات کا ہم موازنہ کرتے ہیں، ان میں ${a.name} کو ${x.name} پر کوئی قابلِ پیمائش برتری حاصل نہیں۔`} ${behind.length ? `${x.name} ان نکات پر آگے ہے: ${behind.join("؛ ")}۔` : `${x.name} ان میں سے کسی بھی نکتے پر آگے نہیں۔`} ${a.name} آپ کے لیے صحیح ہے اگر ${altInfo(a).chooseIf[0]}۔`,
    };
  });

  return [
    { id: "choosing", title: `${x.name} کا متبادل کیسے چنیں`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "فیس اور لیوریج", faqs: fees },
    { id: "countries", title: "ممالک، KYC اور ریگولیشن", faqs: countryFaqs },
    { id: "features", title: "پروڈکٹس اور کوائنز", faqs: featureFaqs },
    { id: "switching", title: `${x.name} سے سوئچ کرنا اور ریفرل کوڈز`, faqs: switching },
    { id: "versus", title: `${x.name} بمقابلہ متبادل`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `${x.name} کے بہترین متبادل کون سے ہیں؟`,
    a: `${picks(alts)} ${x.name} کے متبادل والے ہمارے پیج پر تمام ${alts.length} کا ${x.name} سے موازنہ فیس، لیوریج، پروڈکٹس، ممالک میں دستیابی اور ویریفکیشن کی بنیاد پر کیا گیا ہے۔`,
  };
}

export const ur: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "ہاں", no: "نہیں", notFound: "اس کی ویب سائٹ پر نہیں ملا" },
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
