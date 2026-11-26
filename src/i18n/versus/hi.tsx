/**
 * The head-to-head pages ("/hi/<a>-vs-<b>") and the comparison hub in Hindi.
 * Same keys as `./en.tsx`, written natively for readers in India.
 *
 * Wording: "एक्सचेंज" (masculine: "Binance देता है"), "फीस", "रेफरल कोड", "लीवरेज", "आप". Spot, Futures, Margin,
 * Copy Trading, KYC and MiCA stay in Latin letters. The pages call themselves “आमने-सामने तुलना”, the hub
 * “एक्सचेंज तुलना”. "vs" stays "vs". Exchange and country names take no ending – postpositions are separate words
 * ("Binance पर", "भारत में"), and का / की / के agree with the noun that follows. Devanagari has no capital letters,
 * so texts from the data are inserted as they are (`lcFirst` only lower-cases a Latin "Up to").
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

const locale = "hi";
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

/** Hindi has no capital letters: Devanagari text stays as it is; only a Latin "Up to" at the start is lower-cased. */
const lcFirst = (s: string) => s.replace(/^Up to\b/, "up to");
/** "320 मिलियन+ रजिस्टर्ड यूज़र्स (Binance के अनुसार)" → without the bracket; "390 कॉइन, 509 Spot पेयर्स (Bybit API)" → without the bracket. */
const withoutSource = (s: string) => s.replace(/\s*\((?:[^()]*के अनुसार|[^()]*\bAPI)\)/, "");
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
const points = (n: number) => (n === 1 ? "पॉइंट" : "पॉइंट्स");
const leverageRisk = "ज़्यादा लीवरेज से लिक्विडेशन का जोखिम बहुत बढ़ जाता है।";
const regionalNote = "क्षेत्रीय प्लेटफ़ॉर्म पर आमतौर पर प्रोडक्ट्स की रेंज, फीस और लिमिट्स अलग होती हैं।";
const safeWay = "सुरक्षित तरीका यही है कि आप रेफरल लिंक से रजिस्टर करें।";

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `${e.name} ${joinList(rows.map((r) => r.topic))} में आगे है` : `${e.name} इनमें से किसी में भी आगे नहीं है`;
  return `न ${a.name} हर पॉइंट पर बेहतर है, न ${b.name}। इस तुलना के ${s.measurable} मापे जा सकने वाले पॉइंट्स में से ${a.name} ${s.a.length} में आगे है और ${b.name} ${s.b.length} में${s.tie.length ? `, जबकि ${s.tie.length} ${points(s.tie.length)} पर दोनों बराबर हैं` : ""}। ${lead(a, s.a)}। ${lead(b, s.b)}। ${a.name} चुनें, अगर ${lcFirst(altInfo(a).chooseIf[0])}। ${b.name} चुनें, अगर ${lcFirst(altInfo(b).chooseIf[0])}।`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb) return `${a.name} और ${b.name} पर अधिकतम लीवरेज एक जैसा है: ${a.name} पर ${lcFirst(a.maxLeverage)}, ${b.name} पर ${lcFirst(b.maxLeverage)}।`;
  const [high, low] = la > lb ? [a, b] : [b, a];
  return `${high.name} पर अधिकतम लीवरेज ज़्यादा है – ${lcFirst(high.maxLeverage)} – जबकि ${low.name} पर ${lcFirst(low.maxLeverage)}।`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `CoinMarketCap की डेरिवेटिव्स रैंकिंग (${prettyDate(site.marketDataDate)}) में ${a.name} का ओपन इंटरेस्ट ${a.market.markets} मार्केट्स में ${formatBn(a.market.openInterestBn)} था और ${b.name} का ${b.market.markets} मार्केट्स में ${formatBn(b.market.openInterestBn)}। ${deeper.name} का मार्केट ज़्यादा गहरा है, और इसका मतलब आमतौर पर बड़े ऑर्डर्स पर कम स्प्रेड होता है।`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${a.name} ${joinList(notOffered.map((f) => f.noun))} ऑफ़र करता है, ${b.name} नहीं।` : "",
    notFound.length ? `${a.name} ${joinList(notFound.map((f) => f.noun))} ऑफ़र करता है; ${b.name} की अपनी साइट पर हमें ऐसा कोई प्रोडक्ट नहीं मिला।` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${e.name} ${c.residents} के लिए बंद है${extra}`;
  if (status === "regional") return `${e.name} ${c.residents} को एक क्षेत्रीय प्लेटफ़ॉर्म${extra} के ज़रिए सेवा देता है`;
  if (status === "partial") return `${e.name} ${c.name} पर आंशिक प्रतिबंध लगाता है${extra}`;
  return `${e.name} ${c.name} को प्रतिबंधित देशों की सूची में नहीं रखता`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("hi").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}। ${statusPhrase(b, c)}। देशों की सूचियाँ बदलती रहती हैं, और किसी देश का सूची में न होना इस बात की गारंटी नहीं है कि वहाँ हर प्रोडक्ट उपलब्ध है – आख़िरी फ़ैसला एक्सचेंज की अपनी शर्तों से होता है।`;

/* ------------------------------------ FAQ ------------------------------------ */

/** All questions a head-to-head page answers, grouped for display (see `./en.tsx`). */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) =>
    has(a, key) && has(b, key) ? "दोनों पर" : has(a, key) ? `सिर्फ़ ${a.name} पर` : has(b, key) ? `सिर्फ़ ${b.name} पर` : "दोनों में से किसी की साइट पर नहीं मिला";
  const noTokenDiscount = "ऐसा कोई डिस्काउंट प्रकाशित नहीं है।";
  const noFund = "किसी प्रोटेक्शन फंड का नाम नहीं बताया गया।";
  const noMica = "अपने पेजों पर MiCA के तहत मंज़ूरी वाली किसी कंपनी का नाम नहीं बताता";

  const verdict: Faq[] = [
    { q: `${a.name} या ${b.name}: कौन बेहतर है?`, a: versusAnswer(a, b, s) },
    {
      q: `${a.name} और ${b.name} में मुख्य अंतर क्या है?`,
      a: `${ia.pick}। ${ib.pick}।${aheadA.length ? ` ${a.name} के सबसे साफ़, मापे जा सकने वाले फ़ायदे: ${aheadA.slice(0, 2).map(lcFirst).join("; ")}।` : ""}${aheadB.length ? ` ${b.name} के: ${aheadB.slice(0, 2).map(lcFirst).join("; ")}।` : ""}`,
    },
    {
      q: `क्या ${a.name}, ${b.name} से बड़ा है?`,
      a: `CoinMarketCap की डेरिवेटिव्स रैंकिंग (${marketDate}) में ${a.name} का ओपन इंटरेस्ट ${formatBn(a.market.openInterestBn)} और 24 घंटे का वॉल्यूम ${formatBn(a.market.volume24hBn)} था, ${b.name} का ${formatBn(b.market.openInterestBn)} और ${formatBn(b.market.volume24hBn)}। दोनों के अपने आँकड़ों के मुताबिक ${a.name} के ${withoutSource(a.users)} हैं और ${b.name} के ${withoutSource(b.users)}।`,
    },
    {
      q: `शुरुआती ट्रेडर्स के लिए ${a.name} या ${b.name}: कौन बेहतर है?`,
      a: `पहले अकाउंट के लिए तीन बातें मायने रखती हैं: क्रिप्टो खरीदने का आसान तरीका, प्रैक्टिस का मौका और कम फीस। कार्ड या बैंक ट्रांसफ़र से क्रिप्टो खरीदना: ${state("fiat")}। डेमो ट्रेडिंग: ${state("demoTrading")}। Copy Trading: ${state("copyTrading")}। ${feeSentence(a, b, "spot")} पहचान सत्यापन – ${a.name}: ${lcFirst(a.signup.kycShort)}; ${b.name}: ${lcFirst(b.signup.kycShort)}।`,
    },
    {
      q: `Futures ट्रेडिंग के लिए ${a.name} या ${b.name}: कौन बेहतर है?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${a.name} या ${b.name}: किसकी फीस कम है?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} ये स्टैंडर्ड (नॉन-VIP) रेट्स हैं; VIP लेवल और एक्सचेंज टोकन इन्हें और कम कर देते हैं।`,
    },
    {
      q: `क्या ${a.name} और ${b.name} अपने टोकन से फीस भरने पर डिस्काउंट देते हैं?`,
      a: `${a.name}: ${a.tokenDiscount || noTokenDiscount} ${b.name}: ${b.tokenDiscount || noTokenDiscount}`,
    },
    { q: `${a.name} या ${b.name}: कौन ज़्यादा लीवरेज देता है?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${a.name} या ${b.name}: किस पर ज़्यादा कॉइन लिस्टेड हैं?`,
      a: `दोनों के अपने आँकड़ों के मुताबिक ${a.name} पर ${withoutSource(a.assets)} लिस्टेड हैं और ${b.name} पर ${withoutSource(b.assets)}। एक्सचेंज अलग-अलग तरीके से गिनते हैं – कुछ कॉइन गिनते हैं, कुछ ट्रेडिंग पेयर्स – इसलिए इन दोनों आँकड़ों की सीधी तुलना नहीं की जा सकती।`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `क्या ${c.name} में ${a.name} या ${b.name} इस्तेमाल कर सकते हैं?`, a: countryPairAnswer(a, b, c) })),
    {
      q: `क्या ${a.name} और ${b.name} पर KYC ज़रूरी है?`,
      a: `हाँ, दोनों नए यूज़र्स से पहचान सत्यापन माँगते हैं। ${a.name}: ${lcFirst(a.signup.kycShort)}। ${b.name}: ${lcFirst(b.signup.kycShort)}। बिना वेरिफिकेशन ट्रेडिंग के लिए इनमें से कोई भी विकल्प नहीं है।`,
    },
    {
      q: `${a.name} या ${b.name}: कौन ज़्यादा सुरक्षित है?`,
      a: `कोई भी सेंट्रलाइज़्ड एक्सचेंज जोखिम-मुक्त नहीं है, इसलिए ईमानदार तुलना सिर्फ़ उसी की हो सकती है जो हर एक्सचेंज ख़ुद प्रकाशित करता है। ${a.name}: ${a.regulation}। प्रूफ़ ऑफ़ रिज़र्व्स – ${ia.reserves}। ${ia.fund ? `${ia.fund}।` : noFund} ${b.name}: ${b.regulation}। प्रूफ़ ऑफ़ रिज़र्व्स – ${ib.reserves}। ${ib.fund ? `${ib.fund}।` : noFund} दोनों में से किसी भी एक्सचेंज पर सिर्फ़ वही फंड रखें, जिनसे आप एक्टिव ट्रेडिंग करते हैं।`,
    },
    {
      q: `क्या ${a.name} और ${b.name} EU में MiCA के तहत रेगुलेटेड हैं?`,
      a: `${a.name}: ${ia.mica ? `हाँ – ${ia.mica}` : noMica}। ${b.name}: ${ib.mica ? `हाँ – ${ib.mica}` : noMica}। ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `हमारी तुलना वाले ${featureList.length} प्रोडक्ट्स में ऐसा कुछ नहीं है: ${x.name} अपनी साइट पर जो भी प्रोडक्ट दिखाता है, वह ${y.name} भी दिखाता है।`;
  const products: Faq[] = [
    { q: `${a.name} क्या ऑफ़र करता है जो ${b.name} नहीं करता?`, a: onlyA || nothing(a, b) },
    { q: `${b.name} क्या ऑफ़र करता है जो ${a.name} नहीं करता?`, a: onlyB || nothing(b, a) },
    {
      q: `क्या ${a.name} और ${b.name} पर Copy Trading, ट्रेडिंग बॉट, ऑप्शंस और डेमो ट्रेडिंग उपलब्ध हैं?`,
      a: `Copy Trading: ${state("copyTrading")}। ट्रेडिंग बॉट: ${state("tradingBots")}। ऑप्शंस: ${state("options")}। डेमो ट्रेडिंग: ${state("demoTrading")}।${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` जहाँ सिर्फ़ एक एक्सचेंज का नाम है, वहाँ ${prettyDate(site.lastReviewed)} को दूसरे एक्सचेंज की अपनी साइट पर हमें उस प्रोडक्ट का कोई पेज नहीं मिला।` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `${a.name} और ${b.name} के रेफरल कोड क्या हैं?`,
      a: `${a.name}: ${a.referralCode} – ${lcFirst(a.referral.whereShort)}। ${b.name}: ${b.referralCode} – ${lcFirst(b.referral.whereShort)}। दोनों कोड इस्तेमाल करना मुफ़्त है और इनसे आपकी ट्रेडिंग फीस नहीं बढ़ती।`,
    },
    {
      q: `${a.name} या ${b.name}: किसका साइन-अप बोनस बेहतर है?`,
      a: `${a.name}: ${lcFirst(offer(a))}। ${b.name}: ${lcFirst(offer(b))}। दोनों एक्सचेंजों पर वेलकम रिवॉर्ड्स पहचान सत्यापन, डिपॉज़िट या ट्रेडिंग वॉल्यूम जैसी शर्तों से जुड़े होते हैं और देश के हिसाब से बदलते हैं, इसलिए हेडलाइन में लिखी रकम की नहीं, शर्तों की तुलना करें।`,
    },
    {
      q: `क्या ${a.name} या ${b.name} पर बाद में रेफरल कोड जोड़ सकते हैं?`,
      a: `${a.name}: ${lcFirst(a.referral.afterSignupShort)}। ${b.name}: ${lcFirst(b.referral.afterSignupShort)}। दोनों पर ${safeWay}`,
    },
    {
      q: `क्या ${a.name} और ${b.name} एक साथ इस्तेमाल कर सकते हैं?`,
      a: "हाँ। ये अलग-अलग कंपनियाँ हैं, इसलिए एक पर अकाउंट होने से दूसरे के अकाउंट पर कोई असर नहीं पड़ता, और कई ट्रेडर्स दो एक्सचेंजों पर फंड रखते हैं। फीस टियर, रेफरल और रिवॉर्ड्स हर अकाउंट से अलग-अलग जुड़े होते हैं और एक से दूसरे में ट्रांसफ़र नहीं होते।",
    },
    {
      q: `${a.name} से ${b.name} में क्रिप्टो कैसे ट्रांसफ़र करें?`,
      a: `1. रेफरल कोड ${b.referralCode} के साथ ${b.name} पर अपना अकाउंट खोलें और पहचान सत्यापन पूरा करें। 2. ${a.name} पर खुली Futures और Margin पोज़िशन बंद करें – पोज़िशन एक एक्सचेंज से दूसरे पर ट्रांसफ़र नहीं की जा सकतीं। 3. ${b.name} में उस कॉइन और नेटवर्क का डिपॉज़िट एड्रेस कॉपी करें, जिसे आप इस्तेमाल करना चाहते हैं। 4. ${a.name} से उसी नेटवर्क पर इस एड्रेस पर विड्रॉल करें, और पहले थोड़ी-सी टेस्ट रकम भेजें: गलत नेटवर्क पर भेजा गया ट्रांसफ़र खो सकता है। उल्टी दिशा में भी यही स्टेप्स काम करते हैं।`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} या ${b.name}: कौन बेहतर है?`, faqs: verdict },
    { id: "fees", title: "फीस, लीवरेज और कॉइन", faqs: fees },
    { id: "countries", title: "देश, KYC और सुरक्षा", faqs: countries },
    { id: "products", title: "प्रोडक्ट्स", faqs: products },
    { id: "referral", title: "रेफरल कोड और एक्सचेंज बदलना", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi: top, oi, mica }: HubFacts) =>
  `सबसे कम स्टैंडर्ड Futures फीस ${names(lowF)} की है (${feePair(lowF[0].futuresFees)} मेकर / टेकर), सबसे ज़्यादा लीवरेज ${names(top)} पर मिलता है (${leverageOf(top[0])}x) और सबसे गहरा डेरिवेटिव्स मार्केट ${names(oi)} का है (${formatBn(oi[0].market.openInterestBn)} ओपन इंटरेस्ट)। ${names(mica)} EEA (यूरोपीय आर्थिक क्षेत्र) के निवासियों के लिए MiCA के तहत मंज़ूरी वाले प्लेटफ़ॉर्म का नाम ${verb(mica, "बताता है", "बताते हैं")}। आपके लिए कौन-सा एक्सचेंज बेहतर है, यह इस पर निर्भर करता है कि आप किन दो के बीच फ़ैसला कर रहे हैं – नीचे वह जोड़ी चुनें।`;

function hubFaqs({ all, ranked, lowF, lowS, hi: top, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "किस क्रिप्टो एक्सचेंज की फीस सबसे कम है?",
      a: `स्टैंडर्ड टियर पर सबसे कम Futures फीस ${names(lowF)} की है: ${feePair(lowF[0].futuresFees)} (मेकर / टेकर)। सबसे कम Spot फीस ${names(lowS)} की है: ${feePair(lowS[0].spotFees)}। बाकी एक्सचेंज: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} – Futures पर ${feePair(e.futuresFees)} और Spot पर ${feePair(e.spotFees)}`)
        .join("; ")}। VIP लेवल और एक्सचेंज टोकन इन रेट्स को और कम कर देते हैं।`,
    },
    {
      q: "किस क्रिप्टो एक्सचेंज पर सबसे ज़्यादा लीवरेज मिलता है?",
      a: `${names(top)}: ${lcFirst(top[0].maxLeverage)}। बाकी: ${ranked
        .filter((e) => !top.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join(", ")}। ${leverageRisk}`,
    },
    {
      q: "किस क्रिप्टो एक्सचेंज का Futures मार्केट सबसे गहरा है?",
      a: `CoinMarketCap की डेरिवेटिव्स रैंकिंग (${marketDate}) में ओपन इंटरेस्ट के हिसाब से: ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join(", ")}। गहरे मार्केट का मतलब आमतौर पर बड़े ऑर्डर्स पर कम स्प्रेड होता है।`,
    },
    {
      q: "किन एक्सचेंजों के पास EEA के लिए MiCA के तहत मंज़ूरी वाला प्लेटफ़ॉर्म है?",
      a: `${joinList(mica.map((e) => `${e.name} (${altInfo(e).mica})`))}। ${names(noMica)} अपने पेजों पर MiCA के तहत मंज़ूरी वाली किसी कंपनी का नाम नहीं ${verb(noMica, "बताता", "बताते")}। ${regionalNote}`,
    },
    {
      q: "किन एक्सचेंजों पर साइन-अप के बाद रेफरल कोड जोड़ सकते हैं?",
      a: `${later.map((e) => `${e.name}: ${lcFirst(e.referral.afterSignupShort)}`).join("। ")}। ${names(signupOnly)} पर कोड सिर्फ़ रजिस्ट्रेशन के समय ही गिना जाता है या बाद में जोड़ने का कोई तरीका नहीं बताया गया है – हर जगह ${safeWay}`,
    },
    {
      q: "ये तुलनाएँ कैसे की जाती हैं?",
      a: `हर आँकड़ा एक्सचेंज की अपनी वेबसाइट या हेल्प सेंटर से लिया गया है – फीस शेड्यूल, शर्तें, प्रतिबंधित देशों की सूचियाँ, प्रोडक्ट पेज – और हर पेज पर उसके सोर्स दिए गए हैं। ओपन इंटरेस्ट, वॉल्यूम और डेरिवेटिव्स मार्केट्स की संख्या CoinMarketCap की डेरिवेटिव्स रैंकिंग से ली गई है। किसी पॉइंट पर कौन आगे है, यह इन्हीं आँकड़ों से तय होता है; हमारी अपनी कोई रैंकिंग नहीं है। मौजूदा रिव्यू की तारीख: ${date}।`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const hi: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row before "में आगे है" ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "Futures फीस (मेकर / टेकर)", topic: "Futures फीस" },
    spotFees: { label: "Spot फीस (मेकर / टेकर)", topic: "Spot फीस" },
    leverage: { label: "अधिकतम लीवरेज", topic: "अधिकतम लीवरेज" },
    openInterest: { label: "डेरिवेटिव्स ओपन इंटरेस्ट", topic: "ओपन इंटरेस्ट" },
    volume: { label: "24 घंटे का डेरिवेटिव्स वॉल्यूम", topic: "24 घंटे के डेरिवेटिव्स वॉल्यूम" },
    markets: { label: "डेरिवेटिव्स मार्केट्स", topic: "डेरिवेटिव्स मार्केट्स की संख्या" },
    users: { label: "यूज़र्स (एक्सचेंज के अपने आँकड़े)", topic: "यूज़र्स की संख्या" },
    assets: { label: "लिस्टेड एसेट्स (एक्सचेंज के अपने आँकड़े)", topic: "" },
    founded: { label: "स्थापना", topic: "" },
    products: { label: (compared) => `मिले प्रोडक्ट्स (तुलना किए गए ${compared} में से)`, topic: "प्रोडक्ट्स की रेंज" },
    countries: { label: (compared) => `प्रतिबंधित देश (तुलना किए गए ${compared} में से)`, topic: "देशों की कवरेज" },
    mica: { label: "MiCA मंज़ूरी वाला EEA प्लेटफ़ॉर्म", topic: "MiCA मंज़ूरी" },
    kyc: { label: "पहचान सत्यापन (KYC)", topic: "" },
    addLater: { label: "बाद में रेफरल कोड जोड़ सकते हैं?", topic: "बाद में रेफरल कोड जोड़ने की सुविधा" },
    offer: { label: "नए यूज़र्स के लिए ऑफ़र", topic: "" },
    reserves: { label: "प्रूफ़ ऑफ़ रिज़र्व्स", topic: "" },
    fund: { label: "प्रोटेक्शन फंड", topic: "" },
  },
  countOf: (count, of) => `${of} में से ${count}`,
  noMica: "कोई नाम नहीं बताया गया",
  noFund: "कोई नाम नहीं बताया गया",

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
          `${a.name} vs ${b.name} (${shortMonthYear}): फीस, लीवरेज और बोनस`,
          `${a.name} या ${b.name}? फीस, लीवरेज और KYC की तुलना`,
          `${a.name} vs ${b.name}: ${yearOf(shortMonthYear)} में कौन-सा एक्सचेंज बेहतर?`,
        ][variant(3, a.slug, b.slug)],
        `${a.name} vs ${b.name} (${shortMonthYear})`,
      ),
    description: (a, b, monthYear) =>
      fit(
        DESC_MAX,
        `${a.name} vs ${b.name}: Futures फीस ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, लीवरेज ${leverageOf(a)}x vs ${leverageOf(b)}x, प्रोडक्ट्स, देश, KYC और रेफरल कोड – ${monthYear} में जाँचा गया।`,
        `${a.name} vs ${b.name}: Futures फीस ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, लीवरेज ${leverageOf(a)}x vs ${leverageOf(b)}x, प्रोडक्ट्स, देश, KYC और रेफरल कोड।`,
      ),
    keywords: (a, b, former) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${a.name} या ${b.name}`,
      `${a.name} vs ${b.name} फीस`,
      `${a.name} vs ${b.name} Futures`,
      `${a.name} ${b.name} तुलना`,
      `क्या ${a.name} ${b.name} से बेहतर है`,
      `क्या ${b.name} ${a.name} से बेहतर है`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],

    crumbHome: "होम",
    crumbHub: "एक्सचेंज तुलना",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name} वही एक्सचेंज है, जिसे पहले ${formerName} के नाम से जाना जाता था।`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${a.name} और ${b.name} दोनों सेंट्रलाइज़्ड एक्सचेंज हैं, जहाँ Spot और लीवरेज वाली Futures ट्रेडिंग होती है, और दोनों नए यूज़र्स के लिए रेफरल प्रोग्राम चलाते हैं। ${pickA}। ${pickB}।${formerNote ? ` ${formerNote}` : ""} इस आमने-सामने तुलना में दोनों की फीस, लीवरेज, प्रोडक्ट्स, देशों में उपलब्धता, वेरिफिकेशन के नियम और रेफरल ऑफ़र साथ-साथ रखे गए हैं – हर आँकड़ा ${date} को एक्सचेंजों की अपनी वेबसाइटों से लिया गया है।`,

    toc: {
      "at-a-glance": "एक नज़र में",
      verdict: "कौन-सा चुनें",
      fees: "फीस",
      leverage: "लीवरेज और मार्केट डेप्थ",
      products: "प्रोडक्ट्स",
      countries: "देश",
      kyc: "वेरिफिकेशन (KYC)",
      safety: "सुरक्षा और रेगुलेशन",
      referral: "रेफरल कोड",
      "pros-cons": "फ़ायदे और नुकसान",
      faq: "सवाल-जवाब",
      sources: "सोर्स",
    },
    onThisPage: "इस पेज पर",

    /* Hero */
    updated: (date) => `${date} को जाँचा और अपडेट किया गया`,
    h1: (a, b) => `${a.name} vs ${b.name}: फीस, लीवरेज और सुरक्षा की तुलना`,
    quickAnswer: "सीधा जवाब",
    keyFigures: "मुख्य आँकड़े",
    chips: (a, b, oiA, oiB) => [
      `Futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `लीवरेज ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `ओपन इंटरेस्ट ${oiA} vs ${oiB}`,
    ],
    boxTitle: "रेफरल कोड के साथ साइन अप करें",
    boxNote: "दोनों कोड मुफ़्त हैं और इनसे आपकी फीस कभी नहीं बढ़ती।",
    codeLabel: (e) => `${e.name} रेफरल कोड`,
    boxRisk: () => (
      <>
        लीवरेज वाली ट्रेडिंग में जोखिम बहुत ज़्यादा है। दोनों में से कोई भी एक्सचेंज हर देश में उपलब्ध नहीं है – <a href="#countries">देश</a> देखें।
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name}: एक नज़र में`,
    glanceText: (a, b, s) =>
      `आप ${a.name} vs ${b.name} सर्च करें या ${b.name} vs ${a.name}, तुलना वही रहती है। जिन ${s.measurable} पॉइंट्स का फ़ैसला आँकड़ों से हो सकता है, उनमें से ${a.name} ${s.a.length} में आगे है और ${b.name} ${s.b.length} में${s.tie.length ? `; ${s.tie.length} ${points(s.tie.length)} पर दोनों बराबर हैं` : ""}। सभी पॉइंट्स बराबर अहम नहीं हैं – एक्टिव ट्रेडर के लिए लंबी कॉइन लिस्ट से ज़्यादा कम फीस मायने रखती है – इसलिए वही कॉलम देखें, जो आपके ट्रेड करने के तरीके से मेल खाता है।`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}: फीस, लीवरेज, मार्केट का आकार, प्रोडक्ट्स, देश, वेरिफिकेशन और रेफरल के नियम`,
    compared: "पैमाना",
    ahead: "आगे",
    level: "बराबर",
    glanceNote: (marketDate, date) =>
      `फीस: स्टैंडर्ड (नॉन-VIP) टियर। ओपन इंटरेस्ट, वॉल्यूम और मार्केट्स: CoinMarketCap डेरिवेटिव्स रैंकिंग, ${marketDate}। “–” का मतलब है कि दोनों वैल्यू को एक-दूसरे के मुकाबले रैंक नहीं किया जा सकता। बाकी सब कुछ ${date} को एक्सचेंजों की अपनी वेबसाइटों पर पढ़ा गया।`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} या ${b.name}: आपको कौन-सा चुनना चाहिए?`,
    verdictText:
      "कोई एक ओवरऑल विजेता नहीं है – हर एक्सचेंज अलग तरह के ट्रेडर के लिए बना है। दोनों बॉक्स दिखाते हैं कि कौन-सा एक्सचेंज किसके लिए सही है और किन पॉइंट्स पर वह दूसरे से मापे जा सकने वाले तौर पर आगे है।",
    bestFor: (role) => `ख़ासियत: ${role}`,
    chooseIf: (e) => `${e.name} चुनें, अगर …`,
    aheadOf: (e, other) => `${e.name} कहाँ ${other.name} से आगे है`,
    noAdvantage: "जिन पॉइंट्स की हम तुलना करते हैं, उनमें कोई मापी जा सकने वाली बढ़त नहीं।",
    thinkTwice: "दोबारा सोचें, अगर …",
    codeButton: (e) => `${e.name} रेफरल कोड ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `फीस: ${a.name} vs ${b.name}`,
    feesModel:
      "दोनों मेकर/टेकर मॉडल पर चलते हैं: लिक्विडिटी जोड़ने वाले लिमिट ऑर्डर पर मेकर फीस लगती है, और लिक्विडिटी लेने वाले ऑर्डर पर टेकर फीस।",
    feesCaption: (a, b) => `${a.name} और ${b.name} की स्टैंडर्ड Spot और Futures फीस`,
    exchange: "एक्सचेंज",
    futuresMaker: "Futures मेकर",
    futuresTaker: "Futures टेकर",
    spotMaker: "Spot मेकर",
    spotTaker: "Spot टेकर",
    otherMarkets: "अन्य मार्केट्स (मेकर / टेकर)",
    feesNote: (date) => `हर एक्सचेंज के प्रकाशित स्टैंडर्ड (नॉन-VIP) रेट्स, ${date} को जाँचे गए। फीस बदलती रहती है – ट्रेड करने से पहले एक्सचेंज पर पुष्टि कर लें।`,
    tokenTitle: "टोकन डिस्काउंट और बारीक शर्तें",
    noTokenDiscount: "एक्सचेंज टोकन से फीस भरने पर किसी डिस्काउंट की जानकारी प्रकाशित नहीं है।",

    /* Leverage */
    leverageTitle: "लीवरेज और मार्केट डेप्थ",
    leverageRisk: "ज़्यादा लीवरेज से लिक्विडेशन का जोखिम बहुत बढ़ जाता है – अधिकतम लीवरेज एक सीमा है, कोई सुझाव नहीं।",
    leverageCaption: (a, b) => `${a.name} और ${b.name} का लीवरेज और डेरिवेटिव्स मार्केट डेटा`,
    maxLeverage: "अधिकतम लीवरेज",
    openInterest: "ओपन इंटरेस्ट",
    volume24h: "24 घंटे का डेरिवेटिव्स वॉल्यूम",
    derivativesMarkets: "डेरिवेटिव्स मार्केट्स",
    listedAssets: "लिस्टेड एसेट्स (एक्सचेंज के अपने आँकड़े)",
    leverageNote: (marketDate) =>
      `मार्केट डेटा: CoinMarketCap डेरिवेटिव्स रैंकिंग, ${marketDate}। एक्सचेंज लिस्टेड एसेट्स को अलग-अलग तरीके से गिनते हैं – कुछ कॉइन गिनते हैं, कुछ ट्रेडिंग पेयर्स।`,

    /* Products */
    productsTitle: (a, b) => `प्रोडक्ट्स: ${a.name} और ${b.name} क्या ऑफ़र करते हैं`,
    productsSame: (compared) => `दोनों एक्सचेंज अपनी साइट पर वे सभी ${compared} प्रोडक्ट्स दिखाते हैं, जिनकी हम तुलना करते हैं; अंतर बारीकियों में है।`,
    productsLegend: (date) => `टिक का मतलब है कि एक्सचेंज अपनी साइट पर वह प्रोडक्ट दिखाता है; डैश का मतलब है कि ${date} को हमें वहाँ उसका कोई पेज नहीं मिला।`,
    productsCaption: (a, b) => `${a.name} और ${b.name} के प्रोडक्ट्स`,
    product: "प्रोडक्ट",
    offered: "उपलब्ध",
    notOffered: "उपलब्ध नहीं",
    noPage: "अपनी साइट पर कोई पेज नहीं मिला",

    /* Countries */
    countriesTitle: (a, b) => `देश: ${a.name} और ${b.name} कहाँ उपलब्ध हैं`,
    countriesText: (compared, differing) =>
      `नीचे ${compared} देशों के लिए वही लिखा है, जो हर एक्सचेंज की अपनी शर्तों में है। इनमें से ${differing} देशों में दोनों की स्थिति अलग है। “${ct.statusLabel.regional}” का मतलब है कि एक्सचेंज उस देश को एक अलग प्लेटफ़ॉर्म से सेवा देता है, जिसके अपने प्रोडक्ट्स, फीस और लिमिट्स होते हैं।`,
    countriesCaption: (a, b) => `${a.name} और ${b.name} की देशों में उपलब्धता`,
    country: "देश",
    countriesNote: (date) =>
      `“${ct.statusLabel.open}” का मतलब है कि ${date} को वह देश एक्सचेंज की प्रतिबंधित सूची में नहीं था – यह इस बात की गारंटी नहीं है कि वहाँ हर प्रोडक्ट उपलब्ध है। दोनों एक्सचेंज VPN या गलत जानकारी के ज़रिए किसी प्रतिबंध से बचने की मनाही करते हैं।`,
    differTitle: "दोनों कहाँ अलग हैं",
    differQuestion: (a, b, countryName) => `${countryName} में ${a.name} या ${b.name}?`,
    neither: (a, b, hrefA, hrefB) => (
      <>
        जहाँ आप रहते हैं, वहाँ दोनों में से कोई उपलब्ध नहीं है? विकल्पों वाले पेजों की देश-तालिकाएँ दिखाती हैं कि कौन-से दूसरे एक्सचेंज आपके देश को स्वीकार करते
        हैं: <Link href={hrefA}>देश के हिसाब से {a.name} के विकल्प</Link> · <Link href={hrefB}>देश के हिसाब से {b.name} के विकल्प</Link>।
      </>
    ),
    restrictedTitle: "प्रतिबंधित देश और क्षेत्रीय प्लेटफ़ॉर्म",
    whereNot: (e) => `${e.name} कहाँ उपलब्ध नहीं है?`,
    regionalPlatforms: "क्षेत्रीय प्लेटफ़ॉर्म:",

    /* Verification */
    kycTitle: (a, b) => `वेरिफिकेशन: ${a.name} vs ${b.name}`,
    kycText:
      "दोनों नए यूज़र्स से पहचान सत्यापन माँगते हैं, इसलिए बिना KYC ट्रेडिंग के लिए इनमें से कोई भी विकल्प नहीं है। अंतर इस बात में है कि बिना वेरिफिकेशन वाला अकाउंट क्या-क्या कर सकता है और जाँच कैसे होती है।",
    documents: "दस्तावेज़:",
    minAge: "न्यूनतम उम्र:",
    howToRegister: (e) => `${e.name} पर रजिस्टर और वेरिफ़ाई कैसे करें, स्टेप बाय स्टेप`,

    /* Safety */
    safetyTitle: (a, b) => `सुरक्षा और रेगुलेशन: ${a.name} vs ${b.name}`,
    safetyText:
      "कोई भी सेंट्रलाइज़्ड एक्सचेंज जोखिम-मुक्त नहीं है। तुलना उसी की हो सकती है, जो हर एक्सचेंज अपने बारे में प्रकाशित करता है: उसके पास कहाँ लाइसेंस है, क्या वह अपने रिज़र्व्स का सबूत देता है और क्या वह आपात स्थिति के लिए कोई फंड रखता है।",
    safetyCaption: (a, b) => `${a.name} और ${b.name} का रेगुलेशन, प्रूफ़ ऑफ़ रिज़र्व्स और प्रोटेक्शन फंड`,
    licences: "एक्सचेंज के बताए लाइसेंस",
    entity: "संचालन करने वाली कंपनी",
    reserves: "प्रूफ़ ऑफ़ रिज़र्व्स",
    fund: "प्रोटेक्शन फंड",
    founded: "स्थापना",
    isSafe: (e) => `क्या ${e.name} सुरक्षित है?`,
    safetyDetail: (e) => `${e.name} की सुरक्षा और उपलब्धता विस्तार से`,

    /* Referral codes */
    referralTitle: (a, b) => `रेफरल कोड और नए यूज़र्स के ऑफ़र: ${a.name} vs ${b.name}`,
    referralText:
      "आप जो भी चुनें, रेफरल कोड के साथ रजिस्टर करें: इसका कोई खर्च नहीं है, इससे आपकी फीस कभी नहीं बढ़ती और एक्सचेंज का नए यूज़र्स वाला ऑफ़र अनलॉक होता है। आख़िरी पंक्ति पर ध्यान दें – भूला हुआ कोड हमेशा बाद में नहीं जोड़ा जा सकता।",
    referralCaption: (a, b) => `${a.name} और ${b.name} के रेफरल कोड और नए यूज़र्स के ऑफ़र`,
    referralCodeOf: (e) => `${e.name} रेफरल कोड`,
    referralCode: "रेफरल कोड",
    newUserOffer: "नए यूज़र्स के लिए ऑफ़र",
    inviteeReward: "इनवाइट किए गए यूज़र के तौर पर आपको क्या मिलता है",
    covers: "एक रेफरल में शामिल",
    whereCode: "कोड कहाँ डालें",
    addLater: "क्या बाद में जोड़ सकते हैं?",
    referralNote: (date) => `ऑफ़र ${date} को जाँचे गए। वेलकम रिवॉर्ड्स टास्क पर आधारित होते हैं, इनके लिए पहचान सत्यापन ज़रूरी है और ये देश के हिसाब से अलग होते हैं।`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `${a.name} और ${b.name} के फ़ायदे और नुकसान`,
    pros: "फ़ायदे",
    cons: "नुकसान",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – अक्सर पूछे जाने वाले सवाल`,
    faqText: (count, a, b) => `${a.name} और ${b.name} के बीच चुनाव पर ${count} सवाल: फीस, लीवरेज, देश, वेरिफिकेशन, प्रोडक्ट्स और रेफरल कोड।`,

    /* Sources */
    sourcesTitle: "सोर्स: ये आँकड़े कहाँ से आए हैं",
    sourcesText: (date, marketDate) =>
      `इस पेज पर फीस, लीवरेज, प्रोडक्ट्स, वेरिफिकेशन, देशों, लाइसेंस, रिज़र्व्स और रेफरल नियमों के बारे में जो कुछ भी लिखा है, वह ${date} को दोनों एक्सचेंजों की अपनी वेबसाइटों और हेल्प सेंटर से लिया गया है। ओपन इंटरेस्ट, वॉल्यूम और डेरिवेटिव्स मार्केट्स की संख्या CoinMarketCap की डेरिवेटिव्स रैंकिंग (${marketDate}) से ली गई है। एक्सचेंज बिना सूचना के अपनी शर्तें बदल देते हैं, इसलिए आख़िरी बात नीचे दिए गए पेजों की ही मानी जाए।`,
    officialPages: (e, count) => `${e.name}: ${count} आधिकारिक पेज`,

    /* More comparisons */
    moreTitle: "और तुलनाएँ",
    against: (e) => `बाकी एक्सचेंजों के मुकाबले ${e.name}`,
    allAlternatives: (e) => `${e.name} के सभी विकल्प`,
    allComparisons: "सभी एक्सचेंज तुलनाएँ",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>जोखिम की चेतावनी:</strong> क्रिप्टो डेरिवेटिव्स जटिल इंस्ट्रूमेंट हैं। लीवरेज मुनाफ़े और नुकसान दोनों को कई गुना कर देता है, और आप कुछ ही
        मिनटों में अपना पूरा मार्जिन गँवा सकते हैं। यह पेज सिर्फ़ जानकारी के लिए है और यह वित्तीय सलाह नहीं है। अगर आप हमारे लिंक से साइन अप करते हैं, तो
        हमें कमीशन मिल सकता है – हमारा <Link href={disclosureHref}>एफिलिएट डिस्क्लोज़र</Link> देखें। इससे आँकड़े नहीं बदलते: ये एक्सचेंजों के अपने आँकड़े
        हैं।
      </>
    ),
    ctaTitle: (a, b) => `${a.name} या ${b.name}? रेफरल कोड के साथ शुरुआत करें`,
    ctaText: "दोनों में से किसी भी एक्सचेंज पर Spot और Futures के लिए एक ही अकाउंट, बिना किसी अतिरिक्त खर्च के।",
    ctaButton: "और एक्सचेंजों की तुलना करें",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) =>
      fit(TITLE_MAX, `क्रिप्टो एक्सचेंज तुलना (${shortMonthYear}): ${pairs} आमने-सामने मुकाबले`, `क्रिप्टो एक्सचेंज तुलना (${shortMonthYear})`),
    description: (exchangeNames, pairs, monthYear) =>
      fit(
        DESC_MAX,
        `${exchangeNames} जोड़ियों में: फीस, लीवरेज, देश, KYC और रेफरल कोड पर ${pairs} आमने-सामने तुलनाएँ – ${monthYear} में जाँचा गया।`,
        `${exchangeNames} जोड़ियों में: फीस, लीवरेज, देश, KYC और रेफरल कोड पर ${pairs} आमने-सामने तुलनाएँ।`,
      ),
    crumbHome: "होम",
    crumbPage: "एक्सचेंज तुलना",
    listName: "क्रिप्टो एक्सचेंजों की आमने-सामने तुलनाएँ",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `${date} को जाँचा और अपडेट किया गया`,
    h1: (pairs) => `क्रिप्टो एक्सचेंज तुलना: ${pairs} आमने-सामने मुकाबले`,
    lead: (exchangeCount) =>
      `${exchangeCount} एक्सचेंज, और हर जोड़ी की तुलना एक जैसे पॉइंट्स पर: फीस, लीवरेज, मार्केट डेप्थ, प्रोडक्ट्स, देशों में उपलब्धता, पहचान सत्यापन, रेगुलेशन और रेफरल ऑफ़र। हर तुलना में एक्सचेंजों की अपनी वेबसाइटों के आँकड़े इस्तेमाल किए गए हैं।`,
    quickAnswer: "सीधा जवाब",

    pickTitle: "तुलना के लिए दो एक्सचेंज चुनें",
    pickText: (others) =>
      `हर बॉक्स में एक एक्सचेंज को बाकी ${others} के सामने रखा गया है। हर जोड़ी का एक ही पेज है, इसलिए “Binance vs OKX” और “OKX vs Binance” दोनों एक ही तुलना पर ले जाते हैं।`,
    alternativesOf: (e) => `${e.name} के विकल्प`,
    referralCodeOf: (e) => `${e.name} रेफरल कोड`,

    tableTitle: (exchangeCount) => `सभी ${exchangeCount} एक्सचेंज एक साथ`,
    tableText: "हर एक्सचेंज के नए यूज़र्स वाले ऑफ़र, स्टैंडर्ड (नॉन-VIP) फीस, लीवरेज और मार्केट डेप्थ एक ही टेबल में।",
    tableNote: (date, marketDate) =>
      `फीस: हर एक्सचेंज का प्रकाशित स्टैंडर्ड टियर, ${date} को जाँचा गया। ओपन इंटरेस्ट और मार्केट्स: CoinMarketCap, ${marketDate}।`,

    alternativesTitle: "एक एक्सचेंज, बाकी सभी के मुकाबले",
    alternativesText: (others) =>
      `दो में से चुनना नहीं, बल्कि किसी एक्सचेंज की जगह दूसरा ढूँढ रहे हैं? विकल्पों वाले पेज एक एक्सचेंज को एक साथ बाकी ${others} से मापते हैं और दिखाते हैं कि उनमें से कौन-से आपके देश को स्वीकार करते हैं।`,

    faqTitle: "एक्सचेंज तुलना – अक्सर पूछे जाने वाले सवाल",

    ctaTitle: "फ़ैसला कर लिया? रेफरल कोड के साथ साइन अप करें",
    ctaText: (exchangeCount) => `सभी ${exchangeCount} एक्सचेंजों के वेरिफ़ाइड कोड – Spot और Futures के लिए एक अकाउंट, बिना किसी अतिरिक्त खर्च के।`,
    ctaButton: "सभी रेफरल कोड देखें",
  },
};
