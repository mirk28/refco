import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";

/**
 * Interface texts in Hindi. Same keys as `en.tsx`.
 *
 * Wording: "रेफरल कोड" for referral code (main keyword; the Latin "referral code" is added to the keywords,
 * because many Indian readers search in Latin letters), "एक्सचेंज" (masculine) for the exchange, "फीस" for
 * fees, Spot / Futures / Margin in Latin letters, polite address ("आप"). Exchange names take no ending: the
 * postposition after them (का / की / के, पर, में) follows the noun of the template. Numbers in Latin digits with
 * a decimal point (0.02%, 10,000 USDT, $34.1 बिलियन). Field and button names of the exchanges stay in English,
 * because only the English interface was checked.
 */

const NBSP = " ";
const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A, B और C" */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} और ${items[items.length - 1]}`);
/** "A, B या C" – for alternatives such as the sign-up methods. */
const orList = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} या ${items[items.length - 1]}`);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** A step title as a sentence in a running answer: it gets a danda unless it already ends with a mark. */
const asSentence = (s: string) => (/[।.!?:]$/.test(s.trim()) ? s.trim() : `${s.trim()}।`);
/** Billions of US dollars, the Indian way with Latin digits: 34.1 → "$34.1 बिलियन". */
const billion = (n: string) => `$${n}${NBSP}बिलियन`;

export const hi: Dictionary = {
  list,

  format: {
    billions: (n) => billion(n.toFixed(n >= 10 ? 1 : 2)),
    billionsExact: (n) => billion(n.toFixed(2)),
    billionsFloor: (n) => `${billion(String(Math.floor(n)))}+`,
  },

  meta: {
    siteTitle: `${site.name} – क्रिप्टो एक्सचेंज के वेरिफाइड रेफरल कोड`,
    siteDescription:
      "Binance, OKX, Bybit, Bitget, Gate, KuCoin और MEXC के वेरिफाइड रेफरल कोड – एक ही साइन-अप लिंक से Spot और Futures ट्रेडिंग पर नए यूज़र्स के बोनस और फीस रिबेट पाएँ। फीस, तथ्य और खूबियों-कमियों का ईमानदार आकलन।",
  },

  layout: {
    skip: "सीधे कंटेंट पर जाएँ",
    mainNav: "मुख्य मेन्यू",
    nav: { exchanges: "एक्सचेंज", benefits: "फ़ायदे", compare: "तुलना", howItWorks: "कैसे काम करता है", about: "हमारे बारे में" },
    getCodes: "कोड पाएँ",
    homeLabel: `${site.name} – ${site.domain} होम पेज`,
    language: "भाषा",
    footerAbout:
      "सबसे बड़े क्रिप्टो एक्सचेंजों के वेरिफाइड रेफरल कोड – Spot और Futures के लिए वेलकम बोनस और फीस रिबेट। आधिकारिक स्रोतों से साफ़-साफ़ तथ्य।",
    referralCodes: "रेफरल कोड",
    referralCodeOf: (name) => `${name} रेफरल कोड`,
    alternatives: "विकल्प",
    alternativesOf: (name) => `${name} के विकल्प`,
    guides: "गाइड",
    comparisons: "एक्सचेंज तुलना",
    howCodesWork: "रेफरल कोड कैसे काम करते हैं",
    faq: "सवाल-जवाब",
    about: "हमारे बारे में और कार्यप्रणाली",
    legal: "कानूनी",
    imprint: "कानूनी जानकारी",
    privacy: "गोपनीयता नीति",
    disclosure: "एफिलिएट डिस्क्लोज़र",
    cookieSettings: "कुकी सेटिंग्स",
    risk: (
      <>
        <strong>जोखिम चेतावनी:</strong> लीवरेज के साथ क्रिप्टो डेरिवेटिव्स की ट्रेडिंग बेहद जोखिम भरी है और इसमें आपका पूरा डिपॉज़िट डूब सकता है। सिर्फ़
        उतने पैसे से ट्रेड करें, जिन्हें खोना आप सह सकें। इस वेबसाइट पर लिखी कोई भी बात वित्तीय, निवेश या टैक्स सलाह नहीं है।
      </>
    ),
    affiliate: (
      <>
        <strong>एफिलिएट डिस्क्लोज़र:</strong> कुछ लिंक रेफरल लिंक हैं। अगर आप इनके ज़रिए साइन अप करते हैं, तो हमें कमीशन मिल सकता है – आपको इसके लिए
        कुछ भी अतिरिक्त नहीं देना पड़ता। हम जो तथ्य प्रकाशित करते हैं, उन पर इसका कभी कोई असर नहीं पड़ता। एक्सचेंजों के नाम और लोगो उनके संबंधित मालिकों
        के ट्रेडमार्क हैं; {site.name} का उनसे कोई संबंध नहीं है और न ही उन्होंने इसका समर्थन किया है।
      </>
    ),
  },

  consent: {
    label: "एनालिटिक्स के लिए सहमति",
    text: (privacyHref) => (
      <>
        <strong>एनालिटिक्स – फ़ैसला आपका।</strong> हम Google Analytics का इस्तेमाल करना चाहेंगे, ताकि पता चले कि कौन-से पेज पढ़े जाते हैं। यह कुकीज़ सेट
        करता है, इस्तेमाल का डेटा Google को भेजता है और तभी शुरू होता है, जब आप इसकी अनुमति दें। विज्ञापन वाली कुकीज़ किसी भी हाल में नहीं। पूरी जानकारी:{" "}
        <Link href={privacyHref}>गोपनीयता नीति</Link>।
      </>
    ),
    decline: "अस्वीकार करें",
    allow: "एनालिटिक्स की अनुमति दें",
  },

  notFound: {
    title: "यह पेज मौजूद नहीं है",
    text: "आप जो रेफरल कोड ढूँढ रहे हैं, वह शायद किसी दूसरे पेज पर चला गया है। इनमें से कोई एक आज़माएँ:",
    back: "होम पेज पर वापस जाएँ",
  },

  og: {
    footer: ["वेरिफाइड लिंक", "फीस और तथ्य", "आधिकारिक स्रोत"],
    homeAlt: "RefCo – क्रिप्टो एक्सचेंज के वेरिफाइड रेफरल कोड",
    homeKicker: (monthYear) => `${monthYear} में अपडेट`,
    homeTitle: "क्रिप्टो एक्सचेंज रेफरल कोड, वेरिफाइड।",
    exchangeAlt: "क्रिप्टो एक्सचेंज का रेफरल कोड, विकल्प और तुलना – RefCo",
    exchangeKicker: (monthYear) => `${monthYear} में जाँचा गया`,
    exchangeTitle: (e) => `${e.name} रेफरल कोड`,
    exchangeSubtitle: (e) => `${benefit(e)} · एक लिंक से Spot और Futures`,
    versusBadge: "आमने-सामने तुलना",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `Futures फीस ${feesA} बनाम ${feesB} · लीवरेज ${leverageA}x बनाम ${leverageB}x · KYC, देश, बोनस`,
  },

  blocks: {
    signUpOn: (name) => `${name} पर साइन अप करें`,
    signUp: "साइन अप करें",
    details: "विवरण",
    breadcrumb: "नेविगेशन पथ",
    copy: "कॉपी करें",
    copied: "कॉपी हो गया ✓",
    spotMakerTaker: "Spot मेकर / टेकर",
    futuresMakerTaker: "Futures मेकर / टेकर",
    maxLeverage: "अधिकतम लीवरेज",
    since: "स्थापना",
    tableCaption: "क्रिप्टो एक्सचेंजों की तुलना: नए यूज़र्स का ऑफ़र, Spot और Futures फीस, लीवरेज और मार्केट डेटा",
    exchange: "एक्सचेंज",
    newUserOffer: "नए यूज़र्स के लिए ऑफ़र",
    futuresFees: "Futures फीस (मेकर / टेकर)",
    spotFees: "Spot फीस",
    openInterest: "ओपन इंटरेस्ट",
    markets: "मार्केट",
    action: "एक्शन",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) =>
      fit(TITLE_MAX, `क्रिप्टो एक्सचेंज रेफरल कोड और बोनस (${monthYear})`, `क्रिप्टो एक्सचेंज रेफरल कोड (${monthYear})`),
    description: (monthYear) =>
      fit(
        DESC_MAX,
        `Binance, OKX, Bybit, Bitget, Gate, KuCoin और MEXC के वेरिफाइड रेफरल कोड: एक ही लिंक से Spot और Futures पर नए यूज़र्स के बोनस और फीस रिबेट। ${monthYear} में अपडेट।`,
        `Binance, OKX, Bybit, Bitget, Gate, KuCoin और MEXC के वेरिफाइड रेफरल कोड: एक लिंक से नए यूज़र्स के बोनस और फीस रिबेट। ${monthYear} में अपडेट।`,
        `Binance, OKX, Bybit, Bitget, Gate, KuCoin और MEXC के वेरिफाइड रेफरल कोड: एक लिंक से नए यूज़र्स के बोनस और फीस रिबेट।`,
      ),
    listName: "Spot और Futures के लिए क्रिप्टो एक्सचेंज रेफरल कोड",
    updated: (monthYear) => `${monthYear} में अपडेट`,
    h1: (
      <>
        क्रिप्टो एक्सचेंज रेफरल कोड – <span className="hl">वेरिफाइड</span> और पूरी जानकारी के साथ।
      </>
    ),
    lead: (
      <>
        दुनिया के सबसे बड़े क्रिप्टो एक्सचेंजों पर वेलकम बोनस और फीस रिबेट पाएँ – Spot <em>और</em> Futures, दोनों के लिए एक ही रेफरल। साथ में वे तथ्य, जो
        सही एक्सचेंज चुनने के लिए ज़रूरी हैं: फीस, लीवरेज, लाइसेंस और खूबियों-कमियों का ईमानदार आकलन।
      </>
    ),
    browse: "रेफरल कोड देखें",
    seeBenefits: "अपने फ़ायदे देखें",
    trust: (date) => [`${date} को जाँचा गया`, "सिर्फ़ आधिकारिक लिंक", "एनालिटिक्स सिर्फ़ आपकी सहमति से"],
    featured: "चुनिंदा एक्सचेंज",
    ticketName: (name) => `${name} रेफरल कोड`,
    ticketTag: "SPOT + FUTURES",
    stats: ["Spot और Futures के टॉप एक्सचेंज", "कुल ओपन इंटरेस्ट", "शामिल डेरिवेटिव्स मार्केट", "सबसे कम मेकर फीस (MEXC)"],
    marketData: (date) => `मार्केट डेटा: CoinMarketCap की डेरिवेटिव्स रैंकिंग, ${date} का स्नैपशॉट।`,

    benefitsEyebrow: "आपके फ़ायदे",
    benefitsTitle: `${site.name} के रेफरल कोड से साइन अप क्यों करें?`,
    benefitsLead: "वही एक्सचेंज, वही फीस – लेकिन साथ में नए यूज़र्स वाले वे फ़ायदे, जो सीधे साइन अप करने पर आपसे छूट जाते।",
    benefits: [
      {
        title: "वेलकम बोनस",
        text: "एक्सचेंज का नए यूज़र्स वाला ऑफ़र अनलॉक करें – फीस रिबेट वाउचर, Futures बोनस और टास्क रिवॉर्ड, जिनकी कुल कीमत हज़ारों USDT तक हो सकती है।",
      },
      {
        title: "कम ट्रेडिंग फीस",
        text: "जहाँ एक्सचेंज इसकी अनुमति देता है, वहाँ रेफरल कमीशन का एक हिस्सा हर ट्रेड पर रिबेट के रूप में आपको वापस मिलता है।",
      },
      {
        title: "Spot और Futures, एक ही लिंक",
        text: "रेफरल आपके अकाउंट से जुड़ता है – Spot, Futures, Margin और ऑप्शंस, सब पर लागू होता है। दूसरे कोड की ज़रूरत नहीं पड़ती।",
      },
      { title: "कोई अतिरिक्त खर्च नहीं", text: "रेफरल से आपकी फीस कभी नहीं बढ़ती। आपका सिर्फ़ फ़ायदा है – प्रोग्राम का खर्च एक्सचेंज उठाता है।" },
      { title: "आधिकारिक साइन-अप पेज", text: "हर लिंक एक्सचेंज की अपनी वेबसाइट खोलता है। कोई बिचौलिया नहीं, और आपका कोई डेटा हमारे साथ शेयर नहीं होता।" },
      {
        title: "साइन-अप के समय ही लगाएँ",
        text: "कुछ एक्सचेंज 30 दिन तक कोड जोड़ने देते हैं, कुछ कभी नहीं। अकाउंट बनाने से पहले लिंक इस्तेमाल करें, तो आप हर एक्सचेंज पर निश्चिंत रहेंगे।",
      },
    ],
    offersCaption: "हर एक्सचेंज पर नए यूज़र्स के ऑफ़र",
    offersHead: ["एक्सचेंज", "रेफरल के साथ नए यूज़र्स का ऑफ़र", "एक लिंक में शामिल"],
    claim: "पाएँ",
    offersNote: (date) =>
      `ऑफ़र ${date} को जाँचे गए। वेलकम रिवॉर्ड टास्क पूरे करने पर मिलते हैं, इनके लिए पहचान सत्यापन ज़रूरी है और ये क्षेत्र के हिसाब से बदलते हैं – मौजूदा शर्तें हर एक्सचेंज के साइन-अप पेज पर दिखाई जाती हैं।`,

    exchangesEyebrow: "रेफरल कोड",
    exchangesTitle: "अपना एक्सचेंज चुनें",
    exchangesLead:
      "हर पेज रेफरल और फीस समझाता है और बताता है कि एक्सचेंज किसके लिए सबसे अच्छा है – ताकि आप एक ही बार, सही प्लेटफ़ॉर्म पर साइन अप करें।",
    sideBySide: "साथ-साथ",
    notSure: "तय नहीं कर पा रहे?",
    notSureText: (count) => `सभी ${count} एक्सचेंजों की फीस, लीवरेज और ओपन इंटरेस्ट की तुलना एक ही टेबल में करें।`,
    compareExchanges: "एक्सचेंजों की तुलना करें",

    compareTitle: "क्रिप्टो एक्सचेंजों की तुलना: Spot और Futures",
    compareLead: "नए यूज़र्स के ऑफ़र, Spot और Futures की स्टैंडर्ड (नॉन-VIP) फीस, लीवरेज और मार्केट की गहराई – सब एक नज़र में।",
    compareNote: (reviewed, market) =>
      `फीस: हर एक्सचेंज का प्रकाशित स्टैंडर्ड लेवल, ${reviewed} को जाँचा गया। ओपन इंटरेस्ट और मार्केट: CoinMarketCap, ${market}। फीस बदलती रहती है – ट्रेड करने से पहले एक्सचेंज पर पुष्टि कर लें।`,
    versusStrip: {
      title: "दो एक्सचेंजों की आमने-सामने तुलना करें",
      text: (pairs, hubHref) => (
        <>
          {pairs} जोड़ियों की तुलना, जिनमें फीस, लीवरेज, प्रोडक्ट्स, देश, KYC और रेफरल ऑफ़र साथ-साथ रखे गए हैं –{" "}
          <Link href={hubHref}>सभी एक्सचेंज तुलनाएँ</Link>।
        </>
      ),
    },
    alternativesStrip: {
      title: "अपने एक्सचेंज का विकल्प ढूँढ रहे हैं?",
      text: (others) =>
        `हर तुलना एक एक्सचेंज को बाकी ${others} एक्सचेंजों के मुकाबले परखती है: फीस, लीवरेज, प्रोडक्ट्स, पहचान सत्यापन और वे देश, जहाँ के यूज़र्स को वह स्वीकार करता है।`,
    },

    picksEyebrow: "सीधा जवाब",
    picksTitle: "आपके लिए कौन-सा एक्सचेंज सबसे अच्छा है?",
    picks: [
      { label: "सबसे गहरी लिक्विडिटी", slug: "binance", why: "दुनिया में सबसे बड़ा ओपन इंटरेस्ट और सबसे ज़्यादा Futures वॉल्यूम।" },
      { label: "कम फीस और ऑप्शंस", slug: "okx", why: "Spot पर 0.08% / 0.10%, ऑप्शंस पर 0.03% और हर महीने प्रूफ़ ऑफ़ रिज़र्व्स।" },
      { label: "मोबाइल पर एक्टिव Futures ट्रेडिंग", slug: "bybit", why: "तेज़ ट्रेडिंग इंजन और सबसे अच्छे ट्रेडिंग ऐप्स में से एक।" },
      { label: "Copy Trading", slug: "bitget", why: "अनुभवी Futures ट्रेडर्स के ट्रेड अपने-आप कॉपी करें।" },
      { label: "सबसे ज़्यादा ऑल्टकॉइन", slug: "gate", why: "5,400+ एसेट और कम चर्चित टोकन पर भी Futures।" },
      { label: "ट्रेडिंग बॉट", slug: "kucoin", why: "Spot और Futures के लिए मुफ़्त ट्रेडिंग बॉट।" },
      { label: "सबसे कम फीस", slug: "mexc", why: "Spot और ज़्यादातर Futures कॉन्ट्रैक्ट पर 0% मेकर फीस।" },
    ],

    howEyebrow: "कैसे काम करता है",
    howTitle: "तीन स्टेप में रेफरल कोड का इस्तेमाल करें",
    steps: [
      {
        title: "एक्सचेंज चुनें",
        text: "ऊपर फीस, लीवरेज और फ़ीचर्स की तुलना करें और उस एक्सचेंज का पेज खोलें, जो आपकी ट्रेडिंग स्टाइल से मेल खाता हो।",
      },
      {
        title: "हमारे लिंक से साइन अप करें",
        text: "रेफरल अपने-आप जुड़ जाता है। कहीं और अकाउंट बनाने से पहले अपने ईमेल या फ़ोन नंबर से रजिस्टर करें।",
      },
      {
        title: "वेरिफाई करें और रिवॉर्ड पाएँ",
        text: "पहचान सत्यापन (KYC) पूरा करें, 2FA से अपना अकाउंट सुरक्षित करें और डैशबोर्ड में दिख रहे वेलकम रिवॉर्ड देखें।",
      },
    ],

    trustEyebrow: `${site.name} ही क्यों`,
    trustTitle: "भरोसे के लिए बना, क्लिक के लिए नहीं",
    trustCards: [
      { title: "वेरिफाइड ऑफ़र", text: "हम हर एक्सचेंज का नए यूज़र्स वाला ऑफ़र जाँचते हैं और सिर्फ़ वही दिखाते हैं, जो आप सच में पा सकते हैं।" },
      { title: "ताज़ा तथ्य, तारीख के साथ", text: "फीस, लीवरेज और लाइसेंस नियमित रूप से दोबारा जाँचे जाते हैं, और हर पेज पर उसकी समीक्षा की तारीख दिखती है।" },
      { title: "प्राइवेसी सबसे पहले", text: "न विज्ञापन पिक्सेल, न विज्ञापन कुकीज़। एनालिटिक्स तभी चलता है, जब आप इसकी अनुमति दें।" },
      { title: "तेज़ और साफ़", text: "हल्के पेज, जो किसी भी फ़ोन पर तुरंत खुलते हैं – पहले जवाब, फिर विवरण।" },
      { title: "ईमानदार खूबियाँ और कमियाँ", text: "हम कमज़ोरियाँ, घटनाएँ और क्षेत्रीय पाबंदियाँ भी बताते हैं – सिर्फ़ मार्केटिंग की बातें नहीं।" },
      { title: "जोखिम सबसे पहले", text: "लीवरेज किसी डिपॉज़िट को बहुत जल्दी खत्म कर सकता है। यह बात हम हर पेज पर साफ़-साफ़ लिखते हैं।" },
    ],

    faqEyebrow: "सवाल-जवाब",
    faqTitle: "रेफरल कोड – अक्सर पूछे जाने वाले सवाल",
    faqs: (reviewed) => [
      {
        q: "क्रिप्टो एक्सचेंज रेफरल कोड क्या होता है?",
        a: "रेफरल कोड (जिसे इनवाइट कोड या रेफरल ID भी कहते हैं) एक छोटा पहचान कोड है, जो नए एक्सचेंज अकाउंट को उस व्यक्ति या वेबसाइट से जोड़ता है, जिसने एक्सचेंज की सिफ़ारिश की थी। एक्सचेंज इसके ज़रिए दोनों पक्षों को इनाम देते हैं – नए यूज़र्स को आम तौर पर वेलकम रिवॉर्ड या ट्रेडिंग फीस पर छूट मिलती है, और रेफर करने वाले को फीस का एक हिस्सा।",
      },
      {
        q: "रेफरल कोड इस्तेमाल करने के क्या फ़ायदे हैं?",
        a: "रेफरल से साइन अप करने वाले नए यूज़र्स को एक्सचेंज का वेलकम ऑफ़र मिलता है – जैसे Bybit पर 250 USDT तक के रेफरल रिवॉर्ड या MEXC पर 10,000 USDT तक के नए यूज़र रिवॉर्ड – और जहाँ रेफर करने वाला अपना कमीशन शेयर करता है, वहाँ ट्रेडिंग फीस का एक हिस्सा वापस भी मिलता है, जैसे Gate पर एक साल तक 10%। इसके लिए कुछ भी अतिरिक्त नहीं देना पड़ता।",
      },
      {
        q: "क्या एक ही रेफरल कोड Spot और Futures, दोनों ट्रेडिंग पर काम करता है?",
        a: "हाँ। Binance, OKX, Bybit, Bitget, Gate, KuCoin और MEXC पर रेफरल आपके अकाउंट से जुड़ा होता है, किसी एक प्रोडक्ट से नहीं। एक ही साइन-अप से Spot और Futures ट्रेडिंग, दोनों कवर हो जाती हैं – और जहाँ एक्सचेंज ये ऑफ़र करता है, वहाँ Margin, ऑप्शंस या Copy Trading भी।",
      },
      {
        q: "क्या रेफरल कोड से साइन अप करने पर ज़्यादा पैसे देने पड़ते हैं?",
        a: "नहीं। रेफरल लिंक से साइन अप करने पर आपकी फीस कभी नहीं बढ़ती। एक्सचेंज और आपके क्षेत्र के हिसाब से आपको फीस पर छूट या वेलकम बोनस भी मिल सकता है, जो बिना रेफरल के नहीं मिलता।",
      },
      {
        q: "क्या अकाउंट बनाने के बाद रेफरल कोड जोड़ा जा सकता है?",
        a: "यह एक्सचेंज पर निर्भर करता है। Binance पर, अगर आपने अभी तक कोई डिपॉज़िट या ट्रेड नहीं किया है, तो रजिस्ट्रेशन के 30 दिन के भीतर कोड जोड़ा जा सकता है, और MEXC पर आप साइन-अप के 30 दिन के भीतर खुद अपना रेफरर लिंक कर सकते हैं। KuCoin के हेल्प सेंटर में इसके लिए “Link Referrer” रिक्वेस्ट है। Bybit, OKX और Bitget कोड सिर्फ़ रजिस्ट्रेशन के दौरान स्वीकार करते हैं, और Gate ने बाद में कोड जोड़ने का कोई तरीका नहीं बताया है। सबसे सुरक्षित तरीका यही है कि अकाउंट बनाने से पहले लिंक इस्तेमाल करें।",
      },
      {
        q: "किस क्रिप्टो एक्सचेंज की Futures फीस सबसे कम है?",
        a: `हमारी ताज़ा समीक्षा (${reviewed}) में MEXC की स्टैंडर्ड Futures फीस सबसे कम थी: BTCUSDT पर 0% मेकर और 0.02% टेकर। Binance, OKX और Gate स्टैंडर्ड लेवल पर 0.02% मेकर / 0.05% टेकर लेते हैं, Bybit 0.02% / 0.055%, और Bitget व KuCoin 0.02% / 0.06%।`,
      },
      {
        q: "क्रिप्टो डेरिवेटिव्स के लिए कौन-सा एक्सचेंज सबसे अच्छा है?",
        a: "यह इस पर निर्भर करता है कि आप क्या ट्रेड करते हैं। Binance पर लिक्विडिटी सबसे गहरी है, OKX कम फीस के साथ ऑप्शंस भी देता है, Bybit तेज़ परपेचुअल ट्रेडिंग के लिए बना है, Bitget Copy Trading के लिए, Gate ऑल्टकॉइन Futures के लिए, KuCoin बॉट्स के लिए और MEXC सबसे कम फीस के लिए।",
      },
      {
        q: "क्या ये एक्सचेंज अमेरिका में उपलब्ध हैं?",
        a: "ज़्यादातर नहीं। Binance, Bybit, Bitget, Gate, KuCoin और MEXC अमेरिका को प्रतिबंधित या वर्जित देशों में गिनते हैं, और OKX अमेरिका के कुछ क्षेत्राधिकारों पर रोक लगाता है। यूनाइटेड किंगडम, कनाडा और EU में भी उपलब्धता अलग-अलग है – हर एक्सचेंज पेज पर एक्सचेंज की अपनी शर्तों के आधार पर प्रतिबंधित देशों की सूची दी गई है।",
      },
      {
        q: "यह जानकारी कितनी बार अपडेट होती है?",
        a: `हम फीस, लीवरेज, लाइसेंस और मार्केट डेटा नियमित रूप से दोबारा जाँचते हैं। हर पेज पर उसकी आख़िरी समीक्षा की तारीख दिखती है; मौजूदा डेटा ${reviewed} को जाँचा गया था।`,
      },
    ],
    countryFaq: {
      country: "in",
      // The answer below states these statuses in words. The home page compares them with the researched
      // data (src/data/alternatives/) and stops the build if one has changed, so the text gets rewritten.
      expected: { binance: "open", okx: "restricted", bybit: "open", bitget: "restricted", gate: "restricted", kucoin: "open", mexc: "partial" },
      faq: (reviewed) => ({
        q: "क्या ये एक्सचेंज भारत में उपलब्ध हैं?",
        a: `हर एक्सचेंज के अपने पेजों के अनुसार, जिन्हें ${reviewed} को जाँचा गया: Binance, Bybit और KuCoin भारत को अपने प्रतिबंधित देशों की सूची में नहीं रखते। OKX और Gate भारत को प्रतिबंधित देशों में गिनते हैं। Bitget अपने वेरिफिकेशन पेज पर भारत को उन देशों में गिनाता है, जिन्हें वह सपोर्ट नहीं करता। MEXC भारत को प्रतिबंधित नहीं करता, लेकिन उसे सीमित (limited) देशों में रखता है, और वहाँ उसका ऐप लिस्टेड नहीं है। हर एक्सचेंज पेज पर एक्सचेंज की अपनी शर्तों के आधार पर प्रतिबंधित देशों की सूची दी गई है; आप पर क्या लागू होता है, यह आख़िर में वही शर्तें तय करती हैं, इसलिए अपनी स्थिति के लिए उन्हें ज़रूर जाँच लें।`,
      }),
    },

    ctaTitle: "अपना वेलकम बोनस पाएँ",
    ctaText: "एक्सचेंज चुनें, वेरिफाइड रेफरल से साइन अप करें और एक ही अकाउंट से Spot और Futures ट्रेड करें।",
    ctaButton: "सभी रेफरल कोड देखें",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    // Four wordings, chosen per exchange, so the seven titles do not all start with "<Exchange> रेफरल कोड".
    title: (e, shortMonthYear) => {
      const n = e.name, c = e.referralCode, m = shortMonthYear, y = yearOf(shortMonthYear);
      return [
        () => fit(TITLE_MAX, `${n} रेफरल कोड ${c} (${m}): साइन-अप बोनस`, `${n} रेफरल कोड ${c} (${m})`, `${n} रेफरल कोड ${c}`),
        () => fit(TITLE_MAX, `${c} – ${n} रेफरल कोड और बोनस (${m})`, `${c} – ${n} रेफरल कोड (${m})`, `${c} – ${n} रेफरल कोड`),
        () => fit(TITLE_MAX, `नए यूज़र्स का बोनस: ${n} रेफरल कोड ${c} (${y})`, `साइन-अप बोनस: ${n} रेफरल कोड ${c}`, `${n} रेफरल कोड ${c} (${y})`),
        () => fit(TITLE_MAX, `${n} रेफरल कोड ${c} कैसे इस्तेमाल करें (${m})`, `${n} रेफरल कोड ${c} कैसे इस्तेमाल करें`, `${n} रेफरल कोड ${c}`),
      ][variant(4, e.slug)]();
    },
    description: (e, monthYear) =>
      fit(
        DESC_MAX,
        `${e.name} रेफरल कोड ${e.referralCode}: ${benefit(e)}। कोड कहाँ डालें, साइन-अप के स्टेप, KYC और फीस – ${monthYear} में जाँचा गया।`,
        `${e.name} रेफरल कोड ${e.referralCode}: ${benefit(e)}। कोड कहाँ डालें, साइन-अप के स्टेप, KYC और फीस।`,
        `${e.name} रेफरल कोड ${e.referralCode}: कोड कहाँ डालें, साइन-अप के स्टेप, KYC और फीस – ${monthYear} में जाँचा गया।`,
      ),
    keywords: (e) => {
      const same = (k: string) => k.toLowerCase().replace(/[\s-]/g, "");
      return [
        `${e.name} रेफरल कोड`,
        `${e.name} रेफरल कोड ${e.referralCode}`,
        `${e.name} referral code`,
        `${e.name} ${e.referral.codeName}`,
        `${e.name} रेफरल लिंक`,
        `${e.name} इनवाइट कोड`,
        `${e.name} साइन-अप बोनस`,
        `${e.name} पर रजिस्टर कैसे करें`,
        `${e.name} KYC`,
        `${e.name} Futures फीस`,
      ].filter((k, i, all) => all.findIndex((x) => same(x) === same(k)) === i);
    },
    toc: {
      "code-facts": "कोड एक नज़र में",
      benefits: "आपके फ़ायदे",
      "use-code": "कोड कैसे इस्तेमाल करें",
      "how-to": "साइन अप कैसे करें",
      verification: "वेरिफिकेशन (KYC)",
      "key-facts": "मुख्य तथ्य",
      fees: "फीस",
      about: "एक्सचेंज के बारे में",
      "pros-cons": "खूबियाँ और कमियाँ",
      "best-for": "किसके लिए सही",
      safety: "सुरक्षा और उपलब्धता",
      faq: "सवाल-जवाब",
      sources: "स्रोत",
      alternatives: "विकल्प और तुलना",
    },
    onThisPage: "इस पेज पर",
    crumbHome: "होम",
    crumbCodes: "रेफरल कोड",
    crumbPage: (e) => `${e.name} रेफरल कोड`,

    /* JSON-LD */
    offerName: (e) => `${e.name} रेफरल कोड ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}। एक ही रेफरल में ${list(e.referralCovers)} शामिल हैं।`,
    offerCategory: "क्रिप्टो एक्सचेंज पर रजिस्ट्रेशन",
    howToName: (e) => `रेफरल कोड ${e.referralCode} के साथ ${e.name} पर साइन अप कैसे करें`,
    howToDescription: (e) =>
      `${e.name} पर रजिस्ट्रेशन के स्टेप, जैसे एक्सचेंज ने खुद बताए हैं – साथ में यह भी कि रेफरल कोड ${e.referralCode} कहाँ डाला जाता है।`,

    /* Hero */
    updated: (date) => `${date} को जाँचा और अपडेट किया गया`,
    h1: (e) => `${e.name} रेफरल कोड: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – साथ ही {list(e.referralCovers)} के लिए एक ही रेफरल। यहाँ जानिए कि आपको क्या मिलता है, ट्रेडिंग पर कितना खर्च आता है और
        क्या {e.name} आपके लिए सही एक्सचेंज है।
      </>
    ),
    quickAnswer: "सीधा जवाब",
    highlights: "खास बातें",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futures ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `${shortLeverage(e)} लीवरेज`,
      `${e.market.markets} डेरिवेटिव्स मार्केट`,
      `${e.founded} से`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `${e.name} पर आपका साइन-अप`,
    appliedByLink: "इस लिंक से रेफरल अपने-आप लागू हो जाता है।",
    goesToOfficial: (domain) => `सीधे आधिकारिक वेबसाइट ${domain} पर ले जाता है।`,
    codeLabel: "रेफरल कोड",
    noCodeToType: "कोड टाइप करने की ज़रूरत नहीं – लिंक से अपने-आप लागू",
    officialSite: (domain) => `आधिकारिक साइट: ${domain}`,
    yourBenefits: "आपके फ़ायदे",
    freeNeverRaises: "मुफ़्त – रेफरल से आपकी फीस कभी नहीं बढ़ती",
    qrLabel: (e) => `QR कोड: रेफरल ${e.referralCode} के साथ ${e.name} ऐप पर साइन अप करें`,
    preferApp: "ऐप से साइन अप करना चाहते हैं?",
    scan: (e) => (
      <>
        {e.name} खोलने के लिए अपने फ़ोन के कैमरे से स्कैन करें
        {e.referralCode ? (
          <>
            {" "}
            – रेफरल <strong>{e.referralCode}</strong> पहले से शामिल
          </>
        ) : null}
        । iOS और Android, दोनों पर काम करता है।
      </>
    ),
    riskLine: (e, links) => (
      <>
        लीवरेज वाली ट्रेडिंग में जोखिम बहुत ज़्यादा है। यह हर देश में उपलब्ध नहीं है – <a href="#safety">उपलब्धता</a> या{" "}
        <Link href={links.alternatives}>{e.name} के विकल्प</Link> देखें।
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `${e.name} रेफरल कोड ${e.referralCode} एक नज़र में`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        {monthYear} के लिए {e.name} रेफरल कोड <strong>{e.referralCode}</strong> है। नीचे की टेबल बताती है कि यह कोड क्या करता है, कहाँ डाला जाता है और{" "}
        {e.name} नए अकाउंट से क्या माँगता है – हर पंक्ति {date} को {e.name} के अपने पेजों से मिलाकर जाँची गई है।
      </>
    ),
    codeFactsCaption: (e) => `${e.name} रेफरल कोड ${e.referralCode}: मुख्य तथ्य`,
    codeFacts: (e, date) => [
      [`${e.name} रेफरल कोड`, <strong key="code">{e.referralCode}</strong>],
      [`${e.name} इसे क्या कहता है`, e.referral.codeName],
      ["नए यूज़र्स का फ़ायदा", benefit(e)],
      ["कोड कहाँ डालें", e.referral.whereShort],
      ["साइन-अप के बाद जोड़ सकते हैं?", e.referral.afterSignupShort],
      ["किन पर लागू", e.referralCovers.join(", ")],
      ["पहचान सत्यापन (KYC)", e.signup.kycShort],
      ["खर्च", "मुफ़्त – इससे आपकी फीस नहीं बढ़ती"],
      ["आख़िरी बार जाँचा गया", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `${e.name} रेफरल के साथ आपके फ़ायदे`,
    benefitsIntro: (e) => (
      <>
        {e.name} रेफरल कोड <strong>{e.referralCode}</strong> से साइन अप करने पर आपको कोई अतिरिक्त खर्च नहीं देना पड़ता। फ़िलहाल {e.name} नए अकाउंट्स को
        यह ऑफ़र दे रहा है। यही कोड <strong>{list(e.referralCovers)}</strong> पर काम करता है – Spot और Futures के लिए अलग-अलग कोड की ज़रूरत नहीं।
      </>
    ),
    offerChecked: (date) => `नए यूज़र्स का ऑफ़र · ${date} को जाँचा गया`,
    appliedWhenRegistering: "इस रेफरल के ज़रिए रजिस्टर करने पर लागू",
    noExtraCost: "कोई अतिरिक्त खर्च नहीं – रेफरल की वजह से आपकी ट्रेडिंग फीस कभी ज़्यादा नहीं होती",
    oneReferralCovers: "एक ही रेफरल में शामिल:",
    claimOffer: (e) => `अपना ${e.name} वेलकम ऑफ़र पाएँ`,
    tasksTitle: (e) => `${e.name} वेलकम ऑफ़र: टास्क और रिवॉर्ड`,
    tasksCaption: (e) => `${e.name} पर नए यूज़र्स के टास्क और हर टास्क का रिवॉर्ड`,
    task: "टास्क",
    reward: "रिवॉर्ड",
    tasksNote: (e, date) =>
      `${date} को ${e.name} के पेज पर दी गई जानकारी के अनुसार। ऑफ़र हर देश में अलग होते हैं और अक्सर बदलते हैं – साइन-अप के बाद आपके अकाउंट में जो शर्तें दिखती हैं, वही लागू होती हैं।`,

    /* How to use the code */
    useCodeTitle: (e) => `${e.name} रेफरल कोड ${e.referralCode} कैसे इस्तेमाल करें`,
    whereToEnter: (e) => `${e.name} रेफरल कोड कहाँ डालें`,
    forgotCode: "कोड डालना भूल गए? रजिस्ट्रेशन के बाद जोड़ना",
    asInvited: "इनवाइट किए गए यूज़र के तौर पर आपको क्या मिलता है",
    interfaceNote: (e) => (
      <>
        उद्धरण चिह्नों में दिए गए फ़ील्ड और बटन के नाम {e.name} के अंग्रेज़ी इंटरफ़ेस से लिए गए हैं, जिसे हमने जाँचा है; हिंदी इंटरफ़ेस में इनके नाम अलग हो
        सकते हैं।
      </>
    ),

    /* Registration */
    howToTitle: (e) => `${e.name} पर रजिस्ट्रेशन कैसे करें – स्टेप बाय स्टेप`,
    howToIntro: (e) => (
      <>
        {e.name} पर अकाउंट {orList(e.signup.methods)} से बनाया जा सकता है। नीचे वे स्टेप हैं, जो {e.name} ने खुद बताए हैं – साथ में यह भी कि रेफरल कोड{" "}
        <strong>{e.referralCode}</strong> किस स्टेप पर काम आता है।
      </>
    ),
    startRegistration: (e) => `${e.name} पर रजिस्ट्रेशन शुरू करें`,

    /* Verification */
    kycTitle: (e) => `${e.name} पर पहचान सत्यापन (KYC)`,
    verification: "वेरिफिकेशन",
    minAge: "न्यूनतम उम्र",
    documents: "मान्य दस्तावेज़",

    /* Key facts */
    factsTitle: (e) => `${e.name} एक नज़र में`,
    founded: "स्थापना",
    headquarters: "मुख्यालय",
    futuresFees: "Futures फीस (मेकर / टेकर)",
    spotFees: "Spot फीस (मेकर / टेकर)",
    maxLeverage: "अधिकतम लीवरेज",
    assets: "एसेट",
    openInterest: "ओपन इंटरेस्ट",
    volume24h: "24 घंटे का डेरिवेटिव्स वॉल्यूम",
    users: "यूज़र्स",
    regulation: "रेगुलेशन",
    factsNote: (date) =>
      `ओपन इंटरेस्ट, वॉल्यूम और मार्केट की संख्या: CoinMarketCap की डेरिवेटिव्स रैंकिंग, ${date}। फीस: समीक्षा की तारीख पर स्टैंडर्ड लेवल।`,

    /* Fees */
    feesTitle: (e) => `${e.name} की फीस, आसान भाषा में`,
    feesIntro: (e) =>
      `${e.name} मेकर/टेकर मॉडल पर चलता है: ऑर्डर बुक में लिक्विडिटी जोड़ने वाले ऑर्डर (लिमिट ऑर्डर) पर मेकर फीस लगती है, और लिक्विडिटी हटाने वाले ऑर्डर (मार्केट ऑर्डर) पर टेकर फीस। आपका 30 दिन का वॉल्यूम या होल्डिंग बढ़ने के साथ रेट कम होते जाते हैं।`,
    market: "मार्केट",
    maker: "मेकर",
    taker: "टेकर",
    futuresRow: "Futures / परपेचुअल",
    spotRow: "Spot",
    feesNote: (e, date) => `${e.name} के प्रकाशित स्टैंडर्ड (नॉन-VIP) रेट, ${date} को जाँचे गए।`,
    funding: "परपेचुअल कॉन्ट्रैक्ट पर फंडिंग रेट ट्रेडर्स आपस में चुकाते हैं, एक्सचेंज को नहीं।",
    liveSchedule: (e) => `${e.name} की मौजूदा फीस सूची देखें`,
    feesCompare: (e, others, links) => (
      <>
        ये रेट बाकियों के मुकाबले कैसे हैं? हमारी <Link href={`${links.alternatives}#fees`}>{e.name} के विकल्पों की तुलना</Link> में {e.name} की फीस को{" "}
        {list(others)} की फीस के साथ रखा गया है।
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `${e.name} के बारे में`,
    products: "प्रोडक्ट्स",
    prosConsTitle: (e) => `${e.name} की खूबियाँ और कमियाँ`,
    pros: "खूबियाँ",
    cons: "कमियाँ",
    bestForTitle: (e) => `${e.name} किसके लिए सबसे अच्छा है?`,
    openAccount: (e) => `अपना ${e.name} अकाउंट खोलें`,
    notAMatch: (e, count, links, pairs) => (
      <>
        आपके लिए सही नहीं? <Link href={links.alternatives}>{e.name} के {count} सबसे अच्छे विकल्प</Link> देखें और जानें कि उनमें से हर एक किसके लिए सबसे
        अच्छा है, या {e.name} की आमने-सामने तुलना करें: <Link href={pairs[0].href}>{pairs[0].label}</Link> और{" "}
        <Link href={pairs[1].href}>{pairs[1].label}</Link>।
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `क्या ${e.name} सुरक्षित है?`,
    availability: "उपलब्धता:",
    closedWhereYouLive: (e, links) => (
      <>
        आप जहाँ रहते हैं, क्या वहाँ {e.name} उपलब्ध नहीं है?{" "}
        <Link href={`${links.alternatives}#countries`}>हमारे {e.name} विकल्प पेज की देश-तालिका</Link> बताती है कि बाकी एक्सचेंजों में से कौन-से आपके देश
        के यूज़र्स को स्वीकार करते हैं।
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `${e.name} रेफरल कोड और रजिस्ट्रेशन – सवाल-जवाब`,
    faqIntro: (e, count) =>
      `${e.name} रेफरल कोड ${e.referralCode}, अकाउंट बनाने और वेरिफाई करने, वेलकम ऑफ़र और फीस के बारे में ${count} सवाल।`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "स्रोत: ये तथ्य कहाँ से लिए गए हैं",
    sourcesIntro: (e, date) =>
      `इस पेज पर रेफरल कोड, रजिस्ट्रेशन, वेरिफिकेशन, वेलकम ऑफ़र और फीस के बारे में जो कुछ भी लिखा है, वह ${date} को ${e.name} की अपनी वेबसाइट और हेल्प सेंटर पर पढ़ा गया था। एक्सचेंज बिना सूचना के ऑफ़र और फीस बदल देते हैं और अलग-अलग देशों में अलग शर्तें दिखाते हैं, इसलिए आख़िरी बात नीचे दिए गए पेजों की ही मानी जाए।`,

    /* Alternatives */
    alternativesTitle: (e) => `${e.name} के विकल्प`,
    alternativesIntro: (e, count, links) => (
      <>
        पक्का नहीं कि {e.name} आपके लिए सही है? ये इसके सबसे करीबी विकल्प हैं, और हर एक पर रेफरल के साथ अलग से साइन अप किया जा सकता है।{" "}
        <Link href={links.alternatives}>{e.name} के विकल्पों की पूरी तुलना</Link> सभी {count} एक्सचेंजों को फीस, लीवरेज, प्रोडक्ट्स, वेरिफिकेशन और देशों
        में उपलब्धता के आधार पर {e.name} से मिलाती है।
      </>
    ),
    headToHeadTitle: (e) => `${e.name}: आमने-सामने तुलना`,
    headToHeadIntro: (e) =>
      `${e.name} और किसी एक दूसरे एक्सचेंज के बीच फ़ैसला नहीं कर पा रहे? हर जोड़ी की फीस, लीवरेज, प्रोडक्ट्स, देशों और रेफरल ऑफ़र की अपनी अलग तुलना है:`,
    compareAll: (e, count) => `${e.name} के सभी ${count} विकल्पों की तुलना करें`,
    allComparisons: "सभी एक्सचेंज तुलनाएँ →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>जोखिम चेतावनी:</strong> क्रिप्टो डेरिवेटिव्स जटिल इंस्ट्रूमेंट हैं। लीवरेज मुनाफ़े और नुकसान, दोनों को कई गुना बढ़ा देता है, और आप कुछ ही
        मिनटों में अपना पूरा मार्जिन गँवा सकते हैं। यह पेज सिर्फ़ जानकारी के लिए है और वित्तीय सलाह नहीं है। अगर आप हमारे लिंक से साइन अप करते हैं, तो
        हमें कमीशन मिल सकता है – हमारा <Link href={disclosureHref}>एफिलिएट डिस्क्लोज़र</Link> देखें।
      </>
    ),
    joinTitle: (e) => `3 मिनट में ${e.name} से जुड़ें`,
    joinText: (e) => `${benefit(e)}। Spot और Futures के लिए एक ही रेफरल।`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `${name} रेफरल कोड`,
      signup: (name) => `${name} पर रजिस्ट्रेशन और वेरिफिकेशन`,
      bonus: (name) => `${name} वेलकम बोनस और रिवॉर्ड`,
      fees: (name) => `${name} की फीस और ट्रेडिंग`,
      safety: () => "सुरक्षा और उपलब्धता",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `${e.name} रेफरल कोड क्या है?`,
          a: `${e.name} रेफरल कोड ${e.referralCode} है। ${r.apply} ${e.name} खुद इसे ${r.codeName} कहता है।`,
        },
        { topic: "referral", q: `${e.name} रेफरल कोड कहाँ डालें?`, a: r.whereToEnter },
        { topic: "referral", q: `क्या रजिस्ट्रेशन के बाद ${e.name} रेफरल कोड जोड़ा जा सकता है?`, a: r.afterSignup },
        { topic: "referral", q: `${e.name} रेफरल कोड ${e.referralCode} से क्या मिलता है?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `क्या ${e.name} रेफरल कोड Spot और Futures, दोनों पर काम करता है?`,
          a: `हाँ। रेफरल आपके ${e.name} अकाउंट से जुड़ा होता है, किसी एक प्रोडक्ट से नहीं, इसलिए ${e.referralCode} के साथ एक ही साइन-अप में ${list(e.referralCovers)} शामिल हैं।`,
        },
        {
          topic: "referral",
          q: `क्या ${e.name} रेफरल कोड इस्तेमाल करने का कोई चार्ज है?`,
          a: `नहीं। ${e.referralCode} डालना मुफ़्त है और इससे आपकी ट्रेडिंग फीस नहीं बढ़ती। ${e.name} अपने रेफरल प्रोग्राम का खर्च फीस से होने वाली अपनी कमाई से उठाता है।`,
        },
        {
          topic: "signup",
          q: `${e.name} पर साइन अप कैसे करें?`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${asSentence(st.title)}`).join(" ")} आप ${orList(s.methods)} से रजिस्टर कर सकते हैं।`,
        },
        { topic: "signup", q: `क्या ${e.name} पर पहचान सत्यापन (KYC) ज़रूरी है?`, a: s.kyc },
        { topic: "signup", q: `${e.name} वेरिफिकेशन के लिए कौन-से दस्तावेज़ स्वीकार करता है?`, a: s.documents },
        { topic: "signup", q: `${e.name} अकाउंट खोलने के लिए कम से कम कितनी उम्र होनी चाहिए?`, a: s.minAge },
        {
          topic: "fees",
          q: `${e.name} पर ट्रेडिंग फीस कितनी है?`,
          a: `स्टैंडर्ड लेवल पर ${e.name} Spot पर ${e.spotFees.maker} मेकर / ${e.spotFees.taker} टेकर और परपेचुअल Futures पर ${e.futuresFees.maker} मेकर / ${e.futuresFees.taker} टेकर फीस लेता है।${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `${e.name} किन देशों में उपलब्ध नहीं है?`, a: e.restricted },
      ];
    },
  },
};
