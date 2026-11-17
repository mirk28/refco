/**
 * The sentences of the comparison pages in Hindi. Same functions and the same logic as `./en.ts`, written in
 * Hindi grammar.
 *
 * Wording: "एक्सचेंज" (masculine: "Binance सस्ता है", plural "सस्ते हैं"), "फीस" (feminine), "रेफरल कोड", "विकल्प",
 * polite "आप". Exchange names take no ending; postpositions are separate words ("Binance पर", "OKX की फीस") and
 * का / की / के agree with the noun that follows. Country names stand without postposition in `name`; the
 * sentences add "में" / "को" themselves. `residents` ("अमेरिका में रहने वाले यूज़र्स") stays the same before a
 * postposition. Fee rates come from the data (0.02%); leverage stays 150x.
 * Devanagari has no capital letters, so inserted data texts are never changed. Data texts without a danda
 * (pick, kycShort, assets, reserves, fund, mica …) get one where they end a sentence.
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

const locale = "hi";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);

/* --------------------------------- endings --------------------------------- */

/** Ends a data text with a danda unless it already ends a sentence. */
const stop = (s: string) => (/[।?!.]$/.test(s.trim()) ? s.trim() : `${s.trim()}।`);
/** The `pick` lines of several exchanges as consecutive sentences ("…। …।"). */
const picks = (list: Exchange[]) => list.map((a) => stop(altInfo(a).pick)).join(" ");
/** `afterSignupShort` without its leading "हाँ – ". */
const withoutYes = (s: string) => s.replace(/^(हाँ|हां)\s*–\s*/, "");

/* -------------------------------- vocabulary -------------------------------- */

/** `label` for the tables, `noun` as the object of "ऑफ़र करता है" in sentences. */
const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "Copy Trading", noun: "Copy Trading" },
  tradingBots: { label: "ट्रेडिंग बॉट", noun: "ट्रेडिंग बॉट" },
  options: { label: "ऑप्शंस", noun: "ऑप्शंस ट्रेडिंग" },
  demoTrading: { label: "डेमो ट्रेडिंग", noun: "डेमो ट्रेडिंग" },
  margin: { label: "Spot Margin", noun: "Spot Margin ट्रेडिंग" },
  p2p: { label: "P2P ट्रेडिंग", noun: "P2P ट्रेडिंग" },
  fiat: { label: "कार्ड / बैंक से खरीद", noun: "कार्ड या बैंक ट्रांसफ़र से क्रिप्टो खरीदने की सुविधा" },
  earn: { label: "Earn / स्टेकिंग", noun: "Earn प्रोडक्ट्स" },
  launchpad: { label: "Launchpad / Launchpool", noun: "Launchpad" },
  web3Wallet: { label: "Web3 वॉलेट", noun: "सेल्फ़-कस्टडी Web3 वॉलेट" },
  card: { label: "क्रिप्टो कार्ड", noun: "क्रिप्टो कार्ड" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` for sentences ("अमेरिका में", "अमेरिका को"), `short` for the tables. */
const countryWords: Record<CountryKey, { name: string; short: string }> = {
  us: { name: "अमेरिका", short: "अमेरिका" },
  uk: { name: "यूनाइटेड किंगडम", short: "यूनाइटेड किंगडम" },
  ca: { name: "कनाडा", short: "कनाडा" },
  de: { name: "जर्मनी", short: "जर्मनी" },
  fr: { name: "फ्रांस", short: "फ्रांस" },
  nl: { name: "नीदरलैंड्स", short: "नीदरलैंड्स" },
  es: { name: "स्पेन", short: "स्पेन" },
  it: { name: "इटली", short: "इटली" },
  au: { name: "ऑस्ट्रेलिया", short: "ऑस्ट्रेलिया" },
  jp: { name: "जापान", short: "जापान" },
  sg: { name: "सिंगापुर", short: "सिंगापुर" },
  hk: { name: "हांगकांग", short: "हांगकांग" },
  in: { name: "भारत", short: "भारत" },
  ae: { name: "संयुक्त अरब अमीरात", short: "UAE" },
};
/** `residents` reads the same with and without a following postposition ("… यूज़र्स को", "… यूज़र्स के लिए"). */
const countries = countryList.map((c) => ({ key: c.key, ...countryWords[c.key], residents: `${countryWords[c.key].name} में रहने वाले यूज़र्स` }));

const statusLabel: Record<CountryStatus, string> = {
  restricted: "प्रतिबंधित",
  regional: "क्षेत्रीय साइट",
  partial: "आंशिक",
  open: "प्रतिबंधित नहीं",
};

/** The market of a fee comparison: "Spot" / "परपेचुअल फ्यूचर्स". */
const marketName = (market: "spot" | "futures") => (market === "spot" ? "Spot" : "परपेचुअल फ्यूचर्स");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const label = marketName(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${a.name} और ${x.name} दोनों की स्टैंडर्ड ${label} फीस एक जैसी है: ${fa.maker} मेकर / ${fa.taker} टेकर।`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} मेकर और टेकर दोनों के लिए सस्ता है`
      : mm !== 0
        ? `${who} मेकर के लिए सस्ता है, टेकर फीस दोनों पर बराबर है`
        : `${who} टेकर के लिए सस्ता है, मेकर फीस दोनों पर बराबर है`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} मेकर के लिए सस्ता है, ${x.name} टेकर के लिए`
          : `${x.name} मेकर के लिए सस्ता है, ${a.name} टेकर के लिए`;
  return `${label} पर ${a.name} की फीस ${fa.maker} मेकर / ${fa.taker} टेकर है और ${x.name} की ${fx.maker} / ${fx.taker} – ${verdict}।`;
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
    `${marketName(market)} पर ${x.name} ${feePair(fx)} (मेकर / टेकर) फीस लेता है।`,
    lower.length ? `कम फीस: ${rates(lower)}।` : `${alts.length} विकल्पों में से कोई भी सस्ता नहीं है।`,
    same.length ? `बराबर फीस: ${names(same)}।` : "",
    higher.length ? `ज़्यादा फीस: ${rates(higher)}।` : "",
    mixed.length ? `सिर्फ़ मेकर या सिर्फ़ टेकर फीस कम: ${rates(mixed)}।` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (market: "spot" | "futures", fa: Fee, fx: Fee) => {
    const where = market === "spot" ? "Spot पर" : "Futures पर";
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`${where} कम फीस: ${feePair(fx)} के बजाय ${feePair(fa)} (मेकर / टेकर)`);
    else if (m < 0 && t === 0) out.push(`${where} कम मेकर फीस: ${fx.maker} के बजाय ${fa.maker}`);
    else if (t < 0 && m === 0) out.push(`${where} कम टेकर फीस: ${fx.taker} के बजाय ${fa.taker}`);
    else if (m < 0) out.push(`${where} कम मेकर फीस: ${fx.maker} के बजाय ${fa.maker} (लेकिन टेकर फीस ज़्यादा)`);
    else if (t < 0) out.push(`${where} कम टेकर फीस: ${fx.taker} के बजाय ${fa.taker} (लेकिन मेकर फीस ज़्यादा)`);
  };
  fee("spot", a.spotFees, x.spotFees);
  fee("futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`ऊँचा अधिकतम लीवरेज: ${leverageOf(x)}x के बजाय ${leverageOf(a)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`डेरिवेटिव्स में ज़्यादा ओपन इंटरेस्ट: ${formatBn(a.market.openInterestBn)} बनाम ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`ज़्यादा डेरिवेटिव्स मार्केट: ${a.market.markets} बनाम ${x.market.markets}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`भूला हुआ रेफरल कोड बाद में भी जोड़ा जा सकता है (${withoutYes(a.referral.afterSignupShort)})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length)
    out.push(`${joinList(notOffered.map((f) => f.noun))} ऑफ़र करता है, जबकि ${x.name} ${verb(notOffered, "इसे", "इन्हें")} ऑफ़र नहीं करता`);
  if (notFound.length)
    out.push(`${joinList(notFound.map((f) => f.noun))} ऑफ़र करता है – ${x.name} की अपनी वेबसाइट पर हमें ऐसा कोई प्रोडक्ट नहीं मिला`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`MiCA के तहत मंज़ूरी वाला EEA प्लेटफ़ॉर्म (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`${joinList(openWhere.map((c) => c.name))} में प्रतिबंधित नहीं है, जहाँ ${x.name} बंद है`);
  if (regionalWhere.length)
    out.push(`${joinList(regionalWhere.map((c) => c.name))} में क्षेत्रीय प्लेटफ़ॉर्म के ज़रिए सेवा देता है, जहाँ ${x.name} बंद है`);
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
  if (own.status === "restricted") parts.push(`${x.name} ने ${c.name} को प्रतिबंधित देशों की अपनी सूची में रखा है।`);
  else if (own.status === "partial") parts.push(`${x.name} ${c.name} को आंशिक रूप से प्रतिबंधित रखता है${ownNote}।`);
  else if (own.status === "regional") parts.push(`${x.name} ${c.residents} को एक क्षेत्रीय प्लेटफ़ॉर्म के ज़रिए सेवा देता है${ownNote}।`);
  else parts.push(`${x.name} ${c.name} को प्रतिबंधित देशों की सूची में नहीं रखता।`);
  if (g.open.length) parts.push(`${names(g.open)} ${c.name} को प्रतिबंधित देशों की सूची में नहीं ${verb(g.open, "रखता", "रखते")}।`);
  if (g.regional.length)
    parts.push(
      `${joinList(withNote(g.regional))} ${c.residents} को ${verb(g.regional, "एक अलग क्षेत्रीय प्लेटफ़ॉर्म के ज़रिए सेवा देता है", "अलग-अलग क्षेत्रीय प्लेटफ़ॉर्म के ज़रिए सेवा देते हैं")}।`,
    );
  if (g.partial.length) parts.push(`आंशिक रूप से प्रतिबंधित: ${withNote(g.partial).join("; ")}।`);
  if (g.restricted.length)
    parts.push(`${names(g.restricted)}${own.status === "restricted" ? " भी" : ""} ${c.name} को प्रतिबंधित ${verb(g.restricted, "रखता है", "रखते हैं")}।`);
  if (!g.open.length && !g.regional.length) parts.push(`${alts.length} विकल्पों में से कोई भी ${c.residents} के लिए पूरी तरह खुला नहीं है।`);
  parts.push(
    "देशों की सूचियाँ बदलती रहती हैं, और किसी देश का सूची में न होना इस बात की गारंटी नहीं है कि वहाँ हर प्रोडक्ट उपलब्ध है – मान्य वही है जो एक्सचेंज की अपनी शर्तों में लिखा है।",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `यहाँ ${x.name} के जिन ${alts.length} विकल्पों की तुलना की गई है, वे हैं ${names(alts)}। ${picks(alts)} सभी ${alts.length} एक्सचेंज नए यूज़र्स से पहचान सत्यापन (KYC) माँगते हैं और हर एक की प्रतिबंधित देशों की अपनी सूची है, इसलिए साइन-अप करने से पहले देशों वाली टेबल देख लें।`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `तय करें कि ${x.name} की तुलना में क्या बेहतर होना चाहिए`,
      text: `कम फीस, ज़्यादा लीवरेज, ज़्यादा कॉइन या बस ऐसा एक्सचेंज जो आपके देश को स्वीकार करे: इस पेज की टेबल दिखाती हैं कि हर विकल्प किन बातों में ${x.name} से आगे है और किनमें नहीं।`,
    },
    {
      title: "जाँचें कि एक्सचेंज आपके देश को स्वीकार करता है या नहीं",
      text: "हर एक्सचेंज की प्रतिबंधित देशों की अपनी सूची होती है, और कुछ एक्सचेंज आपको अलग प्रोडक्ट्स और लिमिट वाले क्षेत्रीय प्लेटफ़ॉर्म पर भेज देते हैं। रजिस्ट्रेशन से पहले देशों वाली टेबल देख लें।",
    },
    {
      title: "रेफरल लिंक से रजिस्टर करें",
      text: `${names(signupOnly)} रेफरल कोड सिर्फ़ रजिस्ट्रेशन के समय ${verb(signupOnly, "लेता है", "लेते हैं")} या बाद में कोड जोड़ने का कोई तरीका नहीं ${verb(signupOnly, "बताता", "बताते")}, इसलिए अकाउंट बनने से पहले ही लिंक का इस्तेमाल करें।${later.length ? ` ${names(later)} कुछ शर्तों के साथ बाद में कोड जोड़ने ${verb(later, "देता है", "देते हैं")}।` : ""}`,
    },
    {
      title: "फंड ट्रांसफ़र करने से पहले पहचान सत्यापन पूरा करें",
      text: `सभी ${alts.length} विकल्प नए यूज़र्स से पहचान सत्यापन माँगते हैं, और ज़्यादातर पर इसके पूरा होने तक डिपॉज़िट या ट्रेडिंग लॉक रहती है। पासपोर्ट, पहचान पत्र (ID कार्ड) या ड्राइविंग लाइसेंस तैयार रखें।`,
    },
    {
      title: `${x.name} पर अपनी खुली पोज़िशन बंद करें`,
      text: `Futures और Margin पोज़िशन एक एक्सचेंज से दूसरे एक्सचेंज पर ट्रांसफ़र नहीं की जा सकतीं। पहले उन्हें ${x.name} पर बंद करें, या उनके ख़त्म होने तक अकाउंट बनाए रखें।`,
    },
    {
      title: "नए डिपॉज़िट एड्रेस पर विड्रॉल करें",
      text: "नए एक्सचेंज से डिपॉज़िट एड्रेस कॉपी करें, दोनों तरफ़ एक ही कॉइन और एक ही नेटवर्क चुनें और पहले थोड़ी-सी टेस्ट राशि भेजें। ग़लत नेटवर्क पर भेजा गया ट्रांसफ़र गुम हो सकता है।",
    },
    {
      title: `तय करें कि आपके ${x.name} अकाउंट का क्या होगा`,
      text: `आप इसे रख सकते हैं – अलग-अलग एक्सचेंजों के अकाउंट एक-दूसरे से स्वतंत्र होते हैं। आपका फीस लेवल, आपका रेफरल और इस्तेमाल न किए गए रिवॉर्ड ${x.name} पर ही रहते हैं और साथ नहीं जाते।`,
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
      q: `${x.name} का सबसे अच्छा विकल्प कौन-सा है?`,
      a: `${x.name} का कोई एक सबसे अच्छा विकल्प नहीं है – यह इस पर निर्भर करता है कि आप एक्सचेंज क्यों बदलना चाहते हैं। ${picks(alts)} इस पेज पर सभी ${n} की तुलना ${x.name} से फीस, लीवरेज, प्रोडक्ट्स, देशों में उपलब्धता और वेरिफिकेशन के आधार पर की गई है – आँकड़े एक्सचेंजों की अपनी वेबसाइटों से लिए गए हैं और ${date} को जाँचे गए हैं।`,
    },
    {
      q: `${x.name} जैसे एक्सचेंज कौन-से हैं?`,
      a: `${x.name} से सबसे ज़्यादा मिलते-जुलते एक्सचेंज ${names(alts)} हैं। ${x.name} की तरह ये भी सेंट्रलाइज़्ड एक्सचेंज हैं, जो एक ही अकाउंट में Spot और लीवरेज वाली Futures ट्रेडिंग ऑफ़र करते हैं और नए यूज़र्स के लिए रेफरल प्रोग्राम चलाते हैं। इनमें फ़र्क फीस, अधिकतम लीवरेज, लिस्टेड एसेट्स की संख्या और उन देशों में है जिन्हें ये स्वीकार करते हैं।`,
    },
    {
      q: `${x.name} का सबसे बड़ा विकल्प कौन-सा है?`,
      a: `CoinMarketCap पर डेरिवेटिव्स ओपन इंटरेस्ट (${prettyDate(site.marketDataDate)}) के हिसाब से ${n} विकल्पों में ${names(oi)} ${formatBn(oi[0].market.openInterestBn)} के साथ सबसे ${verb(oi, "बड़ा है", "बड़े हैं")}। ख़ुद ${x.name} का ओपन इंटरेस्ट ${formatBn(x.market.openInterestBn)} था।`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${x.name} के किस विकल्प की फीस सबसे कम है?`,
      a: `${n} विकल्पों में सबसे कम स्टैंडर्ड Futures फीस ${names(lowF)} की है: ${feePair(lowF[0].futuresFees)} (मेकर / टेकर)। Spot पर ${names(lowS)} ${feePair(lowS[0].spotFees)} के साथ सबसे ${verb(lowS, "सस्ता है", "सस्ते हैं")}। ${x.name} Futures पर ${feePair(x.futuresFees)} और Spot पर ${feePair(x.spotFees)} फीस लेता है।${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} ये स्टैंडर्ड लेवल की दरें हैं; VIP लेवल और एक्सचेंजों के अपने टोकन इन्हें और कम कर देते हैं।`,
    },
    {
      q: `कौन-से एक्सचेंज ${x.name} से सस्ते हैं?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `परपेचुअल फ्यूचर्स पर: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}, जबकि ${x.name} पर ${feePair(x.futuresFees)}।` : `परपेचुअल फ्यूचर्स पर ${n} विकल्पों में से कोई भी ${x.name} की ${feePair(x.futuresFees)} फीस से कम नहीं लेता।`} ${cheaperS.length ? `Spot पर: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}, जबकि ${x.name} पर ${feePair(x.spotFees)}।` : `Spot पर इनमें से कोई भी ${x.name} की ${feePair(x.spotFees)} फीस से कम नहीं लेता।`} सभी आँकड़े स्टैंडर्ड लेवल पर मेकर / टेकर फीस हैं।`
          : `स्टैंडर्ड लेवल पर ${n} विकल्पों में से कोई भी ${x.name} से सस्ता नहीं है: ${x.name} Futures पर ${feePair(x.futuresFees)} और Spot पर ${feePair(x.spotFees)} (मेकर / टेकर) फीस लेता है, जो इस तुलना की सबसे कम दरें हैं। फिर भी दूसरे कारणों से इन विकल्पों पर नज़र डालना फ़ायदेमंद है – रेगुलेशन, प्रोडक्ट्स या वे देश जिन्हें ये स्वीकार करते हैं।`,
    },
    {
      q: `${x.name} के किस विकल्प पर सबसे ज़्यादा लीवरेज मिलता है?`,
      a: `${n} विकल्पों में सबसे ज़्यादा लीवरेज ${names(highest)} ${verb(highest, "देता है", "देते हैं")}: ${highest[0].maxLeverage}। बाकी: ${alts
        .filter((a) => !highest.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join(", ")}। ख़ुद ${x.name} पर अधिकतम लीवरेज: ${x.maxLeverage}। ज़्यादा लीवरेज से लिक्विडेशन का जोखिम बहुत बढ़ जाता है।`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `${c.name} में आप ${x.name} के कौन-से विकल्प इस्तेमाल कर सकते हैं?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `क्या ${x.name} का कोई विकल्प बिना KYC के है?`,
      a: `इन ${n} में से कोई नहीं। इनमें से हर एक्सचेंज नए यूज़र्स से पहचान सत्यापन माँगता है: ${alts.map((a) => `${a.name} – ${a.signup.kycShort}`).join("; ")}। ख़ुद ${x.name}: ${stop(x.signup.kycShort)}`,
    },
    {
      q: `${x.name} के कौन-से विकल्प EU में MiCA के तहत रेगुलेटेड हैं?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} EEA (यूरोपीय आर्थिक क्षेत्र) के निवासियों के लिए MiCA के तहत मंज़ूरी वाली कंपनी का नाम ${verb(mica, "बताता है", "बताते हैं")}।` : `${n} में से कोई भी MiCA के तहत मंज़ूरी वाली कंपनी का नाम नहीं बताता।`}${noMica.length ? ` ${names(noMica)} अपने पेजों पर किसी MiCA ऑथराइज़ेशन का ज़िक्र नहीं ${verb(noMica, "करता", "करते")}।` : ""} ${xInfo.mica ? `ख़ुद ${x.name}: ${stop(xInfo.mica)}` : `ख़ुद ${x.name} ऐसी किसी कंपनी का नाम नहीं बताता।`} क्षेत्रीय प्लेटफ़ॉर्म के प्रोडक्ट्स, फीस और लिमिट आम तौर पर अलग होते हैं।`,
    },
    {
      q: `${x.name} का सबसे सुरक्षित विकल्प कौन-सा है?`,
      a: `कोई भी सेंट्रलाइज़्ड एक्सचेंज जोखिम से मुक्त नहीं है, इसलिए ईमानदार तुलना सिर्फ़ इस बात की हो सकती है कि हर एक्सचेंज ख़ुद क्या प्रकाशित करता है। ${alts.map((a) => `${a.name}: प्रूफ़ ऑफ़ रिज़र्व्स – ${stop(altInfo(a).reserves)} ${altInfo(a).fund ? stop(altInfo(a).fund) : "किसी प्रोटेक्शन फंड का नाम नहीं दिया गया।"}`).join(" ")} किसी भी एक्सचेंज पर सिर्फ़ उतना ही फंड रखें, जितने से आप सक्रिय रूप से ट्रेड करते हैं।`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `${x.name} के कौन-से विकल्प ${f.noun} ऑफ़र करते हैं?`,
      a: `${yes.length ? `${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))} ${f.noun} ऑफ़र ${verb(yes, "करता है", "करते हैं")}।` : `${n} विकल्पों में से कोई भी अपनी वेबसाइट पर ${f.noun} नहीं दिखाता।`}${no.length ? ` ${names(no)} यह सुविधा ऑफ़र नहीं ${verb(no, "करता", "करते")}।` : ""}${unknown.length ? ` ${names(unknown)} की ${verb(unknown, "वेबसाइट", "वेबसाइटों")} पर हमारी जाँच में ऐसा कोई प्रोडक्ट नहीं मिला।` : ""} ${own === true ? `ख़ुद ${x.name} पर भी यह सुविधा है।` : own === false ? `ख़ुद ${x.name} यह सुविधा ऑफ़र नहीं करता।` : `ख़ुद ${x.name} अपनी वेबसाइट पर ऐसा कोई प्रोडक्ट नहीं दिखाता।`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `${x.name} के किस विकल्प पर सबसे ज़्यादा कॉइन लिस्टेड हैं?`,
      a: `एक्सचेंजों के अपने आँकड़ों के अनुसार: ${alts.map((a) => `${a.name} – ${a.assets}`).join("; ")}। ${x.name}: ${stop(x.assets)} एक्सचेंज अलग-अलग तरीके से गिनती करते हैं – कुछ कॉइन गिनते हैं, कुछ ट्रेडिंग पेयर – इसलिए इन आँकड़ों की सीधी तुलना नहीं की जा सकती।`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `${x.name} से दूसरे एक्सचेंज पर कैसे स्विच करें?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}।`)
        .join(" "),
    },
    {
      q: `क्या दूसरे एक्सचेंज पर अकाउंट खोलने के बाद भी आप अपना ${x.name} अकाउंट रख सकते हैं?`,
      a: `हाँ। ये एक्सचेंज अलग-अलग कंपनियाँ हैं, इसलिए एक पर बने अकाउंट का दूसरे पर बने अकाउंट पर कोई असर नहीं पड़ता और आप दोनों का एक साथ इस्तेमाल कर सकते हैं। जो कुछ अकाउंट से जुड़ा है, वह ट्रांसफ़र नहीं होता: आपका ${x.name} रेफरल, फीस लेवल, वेलकम रिवॉर्ड और ट्रेडिंग हिस्ट्री ${x.name} पर ही रहते हैं।`,
    },
    {
      q: `क्या आप ${x.name} की खुली Futures पोज़िशन दूसरे एक्सचेंज पर ले जा सकते हैं?`,
      a: `नहीं। Futures पोज़िशन सिर्फ़ उसी एक्सचेंज पर रहती है, जहाँ उसे खोला गया था। स्विच करने के लिए ${x.name} पर पोज़िशन बंद करें, फंड विड्रॉ करें और दूसरे एक्सचेंज पर नई पोज़िशन खोलें – वहाँ लागू कीमत और फीस पर।`,
    },
    {
      q: `क्या ${x.name} के विकल्पों के रेफरल कोड हैं?`,
      a: `हाँ, सभी ${n} के: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("; ")}। रेफरल कोड का इस्तेमाल मुफ़्त है और इससे आपकी ट्रेडिंग फीस नहीं बढ़ती।`,
    },
    {
      q: `क्या ${x.name} के किसी विकल्प पर बाद में रेफरल कोड जोड़ा जा सकता है?`,
      a: `${alts.map((a) => `${a.name}: ${stop(a.referral.afterSignupShort)}`).join(" ")} हर एक्सचेंज पर सुरक्षित तरीका यही है कि आप रेफरल लिंक से रजिस्टर करें।`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `क्या ${a.name} ${x.name} से बेहतर है?`,
      a: `${ahead.length ? `${a.name} इन बिंदुओं पर ${x.name} से आगे है: ${ahead.join("; ")}।` : `जिन बिंदुओं की हम तुलना करते हैं, उनमें ${a.name} को ${x.name} पर कोई मापने योग्य बढ़त नहीं है।`} ${behind.length ? `${x.name} इन बिंदुओं पर आगे है: ${behind.join("; ")}।` : `${x.name} इनमें से किसी भी बिंदु पर आगे नहीं है।`} ${a.name} आपके लिए सही है, अगर ${altInfo(a).chooseIf[0]}।`,
    };
  });

  return [
    { id: "choosing", title: `${x.name} का विकल्प कैसे चुनें`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "फीस और लीवरेज", faqs: fees },
    { id: "countries", title: "देश, KYC और रेगुलेशन", faqs: countryFaqs },
    { id: "features", title: "प्रोडक्ट्स और कॉइन", faqs: featureFaqs },
    { id: "switching", title: `${x.name} से स्विच करना और रेफरल कोड`, faqs: switching },
    { id: "versus", title: `${x.name} बनाम विकल्प`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `${x.name} के सबसे अच्छे विकल्प कौन-से हैं?`,
    a: `${picks(alts)} ${x.name} के विकल्पों वाला हमारा पेज सभी ${alts.length} की तुलना ${x.name} से फीस, लीवरेज, प्रोडक्ट्स, देशों में उपलब्धता और वेरिफिकेशन के आधार पर करता है।`,
  };
}

export const hi: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "हाँ", no: "नहीं", notFound: "उसकी वेबसाइट पर नहीं मिला" },
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
