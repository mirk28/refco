import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";
import { readingOf, withReading } from "./name-readings";

/**
 * Interface texts in Bengali (Bangladesh first). Same keys as `en.tsx`.
 *
 * Wording: "রেফারেল কোড" for referral code (main keyword; the name goes first and takes no ending: "Binance রেফারেল
 * কোড"), "রেফার কোড", "ইনভাইট কোড" and "রেফারেল আইডি" as second terms, "এক্সচেঞ্জ" for the exchange, "ফি" for fees,
 * স্পট / ফিউচার্স / মার্জিন in Bengali script so that endings attach, polite address ("আপনি"). Exchange names stay
 * Latin; an ending follows a hyphen ("Binance-এর", "OKX-কে", "Binance-এ", but "MEXC-তে"). The Bengali spelling of a
 * name is added in brackets only in the title, the H1, the lead and the keywords (`withReading`). Latin digits with a
 * decimal point (0.02%, 10,000 USDT, 34.1 বিলিয়ন ডলার), sentence end "।". Field and button names of the exchanges stay
 * in English, because only the English interface was checked.
 */

const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A, B ও C" */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} ও ${items[items.length - 1]}`);
/** "A, B বা C" – for alternatives such as the sign-up methods. */
const orList = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} বা ${items[items.length - 1]}`);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** Locative ("on / at / in") after a Latin name: "Binance-এ", but "MEXC-তে". In a joined list it stands once, on the last name. */
const at = (s: string) => `${s}-${s.endsWith("MEXC") ? "তে" : "এ"}`;
/** A step title as a sentence in a running answer: it gets a danda unless it already ends with a mark. */
const asSentence = (s: string) => (/[।.!?:]$/.test(s.trim()) ? s.trim() : `${s.trim()}।`);
/** Spellings people also type besides the fixed one (`readingOf`): keywords only, never in text. */
const keywordSpellings: Record<string, string> = { binance: "বাইনান্স", mexc: "মেক্সসি" };

export const bn: Dictionary = {
  list,

  format: {
    billions: (n) => `${n.toFixed(n >= 10 ? 1 : 2)} বিলিয়ন ডলার`,
    billionsExact: (n) => `${n.toFixed(2)} বিলিয়ন ডলার`,
    billionsFloor: (n) => `${Math.floor(n)} বিলিয়ন ডলারের বেশি`,
  },

  meta: {
    siteTitle: `${site.name} – ক্রিপ্টো এক্সচেঞ্জের যাচাই করা রেফারেল কোড`,
    siteDescription:
      "Binance, OKX, Bybit, Bitget, Gate, KuCoin ও MEXC-এর যাচাই করা রেফারেল কোড – একটি সাইন আপ লিংকেই স্পট ও ফিউচার্স ট্রেডিংয়ে নতুন ব্যবহারকারীদের বোনাস ও ফি রিবেট নিন। ফি, তথ্য এবং খোলামেলা সুবিধা-অসুবিধা।",
  },

  layout: {
    skip: "সরাসরি মূল অংশে যান",
    mainNav: "প্রধান মেনু",
    nav: { exchanges: "এক্সচেঞ্জ", benefits: "সুবিধা", compare: "তুলনা", howItWorks: "যেভাবে কাজ করে", about: "আমাদের সম্পর্কে" },
    getCodes: "কোড নিন",
    homeLabel: `${site.name} – ${site.domain} হোম পেজ`,
    language: "ভাষা",
    footerAbout:
      "সবচেয়ে বড় ক্রিপ্টো এক্সচেঞ্জগুলোর যাচাই করা রেফারেল কোড – স্পট ও ফিউচার্সে ওয়েলকাম বোনাস ও ফি রিবেট। অফিসিয়াল সূত্র থেকে নেওয়া স্পষ্ট তথ্য।",
    referralCodes: "রেফারেল কোড",
    referralCodeOf: (name) => `${name} রেফারেল কোড`,
    alternatives: "বিকল্প",
    alternativesOf: (name) => `${name}-এর বিকল্প`,
    guides: "গাইড",
    comparisons: "এক্সচেঞ্জ তুলনা",
    howCodesWork: "রেফারেল কোড যেভাবে কাজ করে",
    faq: "প্রশ্নোত্তর",
    about: "আমাদের সম্পর্কে ও যাচাই পদ্ধতি",
    legal: "আইনি বিষয়",
    imprint: "আইনি তথ্য",
    privacy: "গোপনীয়তা নীতি",
    disclosure: "অ্যাফিলিয়েট ডিসক্লোজার",
    cookieSettings: "কুকি সেটিংস",
    risk: (
      <>
        <strong>ঝুঁকি সতর্কতা:</strong> লিভারেজ নিয়ে ক্রিপ্টো ডেরিভেটিভস ট্রেড করা অত্যন্ত ঝুঁকিপূর্ণ, এতে আপনার পুরো ডিপোজিট হারিয়ে যেতে পারে। যতটুকু অর্থ হারালেও আপনার
        সমস্যা হবে না, কেবল ততটুকু দিয়েই ট্রেড করুন। এই ওয়েবসাইটের কোনো কিছুই আর্থিক, বিনিয়োগ বা কর-বিষয়ক পরামর্শ নয়।
      </>
    ),
    affiliate: (
      <>
        <strong>অ্যাফিলিয়েট ডিসক্লোজার:</strong> কিছু লিংক রেফারেল লিংক। এগুলো দিয়ে রেজিস্ট্রেশন করলে আমরা কমিশন পেতে পারি, এতে আপনার কোনো বাড়তি খরচ
        হয় না। আমরা যে তথ্য প্রকাশ করি, তাতে এর কোনো প্রভাব কখনো পড়ে না। এক্সচেঞ্জগুলোর নাম ও লোগো তাদের নিজ নিজ মালিকের ট্রেডমার্ক; {site.name}{" "}
        তাদের সঙ্গে যুক্ত নয়, আর তারাও {site.name}-কে সমর্থন বা অনুমোদন করেনি।
      </>
    ),
  },

  consent: {
    label: "অ্যানালিটিক্সের সম্মতি",
    text: (privacyHref) => (
      <>
        <strong>অ্যানালিটিক্স – সিদ্ধান্ত আপনার।</strong> কোন পেজগুলো পড়া হয়, তা জানতে আমরা Google Analytics ব্যবহার করতে চাই। এটি কুকি বসায়, ব্যবহারের
        ডেটা Google-এর কাছে পাঠায় এবং আপনি অনুমতি দিলেই কেবল চালু হয়। বিজ্ঞাপনের কুকি কোনো অবস্থাতেই নেই। বিস্তারিত:{" "}
        <Link href={privacyHref}>গোপনীয়তা নীতি</Link>।
      </>
    ),
    decline: "প্রত্যাখ্যান করুন",
    allow: "অ্যানালিটিক্সের অনুমতি দিন",
  },

  notFound: {
    title: "এই পেজটি নেই",
    text: "আপনি যে রেফারেল কোডটি খুঁজছেন, সেটি সম্ভবত অন্য পেজে সরে গেছে। এগুলোর কোনো একটি দেখুন:",
    back: "হোম পেজে ফিরে যান",
  },

  og: {
    footer: ["যাচাই করা লিংক", "ফি ও তথ্য", "অফিসিয়াল সূত্র"],
    homeAlt: "RefCo – ক্রিপ্টো এক্সচেঞ্জের যাচাই করা রেফারেল কোড",
    homeKicker: (monthYear) => `হালনাগাদ: ${monthYear}`,
    homeTitle: "ক্রিপ্টো এক্সচেঞ্জের রেফারেল কোড, যাচাই করা।",
    exchangeAlt: "ক্রিপ্টো এক্সচেঞ্জের রেফারেল কোড, বিকল্প ও তুলনা – RefCo",
    exchangeKicker: (monthYear) => `যাচাই: ${monthYear}`,
    exchangeTitle: (e) => `${e.name} রেফারেল কোড`,
    exchangeSubtitle: (e) => `${benefit(e)} · এক লিংকে স্পট ও ফিউচার্স`,
    versusBadge: "মুখোমুখি তুলনা",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `ফিউচার্স ফি ${feesA} বনাম ${feesB} · লিভারেজ ${leverageA}x বনাম ${leverageB}x · KYC, দেশ, বোনাস`,
  },

  blocks: {
    signUpOn: (name) => `${at(name)} সাইন আপ করুন`,
    signUp: "সাইন আপ করুন",
    details: "বিস্তারিত",
    breadcrumb: "পেজের অবস্থান",
    copy: "কপি করুন",
    copied: "কপি হয়েছে ✓",
    spotMakerTaker: "স্পট মেকার / টেকার",
    futuresMakerTaker: "ফিউচার্স মেকার / টেকার",
    maxLeverage: "সর্বোচ্চ লিভারেজ",
    since: "প্রতিষ্ঠা",
    tableCaption: "নতুন ব্যবহারকারীদের অফার, স্পট ও ফিউচার্স ফি, লিভারেজ এবং মার্কেট ডেটা অনুযায়ী ক্রিপ্টো এক্সচেঞ্জের তুলনা",
    exchange: "এক্সচেঞ্জ",
    newUserOffer: "নতুন ব্যবহারকারীদের অফার",
    futuresFees: "ফিউচার্স ফি (মেকার / টেকার)",
    spotFees: "স্পট ফি",
    openInterest: "ওপেন ইন্টারেস্ট",
    markets: "মার্কেট",
    action: "পদক্ষেপ",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) => `ক্রিপ্টো এক্সচেঞ্জ রেফারেল কোড (${monthYear}): স্পট ও ফিউচার্সে বোনাস`,
    description: (monthYear) =>
      `Binance, OKX, Bybit, Bitget, Gate, KuCoin ও MEXC-এর যাচাই করা রেফারেল কোড। এক লিংকেই স্পট ও ফিউচার্সে ওয়েলকাম বোনাস আর ফি রিবেট নিন – হালনাগাদ: ${monthYear}।`,
    listName: "স্পট ও ফিউচার্সের জন্য ক্রিপ্টো এক্সচেঞ্জ রেফারেল কোড",
    updated: (monthYear) => `হালনাগাদ: ${monthYear}`,
    h1: (
      <>
        ক্রিপ্টো এক্সচেঞ্জ রেফারেল কোড, <span className="hl">যাচাই করা</span> ও সহজ ভাষায় ব্যাখ্যা করা।
      </>
    ),
    lead: (
      <>
        বিশ্বের সবচেয়ে বড় ক্রিপ্টো এক্সচেঞ্জগুলোতে ওয়েলকাম বোনাস ও ফি রিবেট নিন – স্পট (Spot) ও ফিউচার্স (Futures), <em>দুটির জন্যই</em> একটি রেফারেল। সঙ্গে
        এক্সচেঞ্জ বেছে নিতে যা জানা দরকার: ফি, লিভারেজ, লাইসেন্স এবং খোলামেলা সুবিধা-অসুবিধা।
      </>
    ),
    browse: "রেফারেল কোড দেখুন",
    seeBenefits: "আপনার সুবিধাগুলো দেখুন",
    trust: (date) => [`যাচাই: ${date}`, "শুধু অফিসিয়াল লিংক", "অ্যানালিটিক্স শুধু আপনার সম্মতিতে"],
    featured: "বাছাই করা এক্সচেঞ্জ",
    ticketName: (name) => `${name} রেফারেল কোড`,
    ticketTag: "স্পট + ফিউচার্স",
    stats: ["শীর্ষ স্পট ও ফিউচার্স এক্সচেঞ্জ", "মোট ওপেন ইন্টারেস্ট", "আওতাভুক্ত ডেরিভেটিভস মার্কেট", "সবচেয়ে কম মেকার ফি (MEXC)"],
    marketData: (date) => `মার্কেট ডেটা: CoinMarketCap-এর ডেরিভেটিভস র‍্যাংকিং, ${date} তারিখের স্ন্যাপশট।`,

    benefitsEyebrow: "আপনার সুবিধা",
    benefitsTitle: `কেন ${site.name}-এর রেফারেল কোড দিয়ে অ্যাকাউন্ট খুলবেন?`,
    benefitsLead: "একই এক্সচেঞ্জ, একই ফি – তবে সরাসরি রেজিস্ট্রেশন করলে নতুন ব্যবহারকারীদের যে সুবিধাগুলো হাতছাড়া হতো, সেগুলোও পাবেন।",
    benefits: [
      {
        title: "ওয়েলকাম বোনাস",
        text: "এক্সচেঞ্জের নতুন ব্যবহারকারীদের অফার নিন – ফি রিবেট ভাউচার, ফিউচার্স বোনাস ও টাস্ক রিওয়ার্ড, সব মিলিয়ে কয়েক হাজার USDT পর্যন্ত।",
      },
      {
        title: "কম ট্রেডিং ফি",
        text: "এক্সচেঞ্জ অনুমতি দিলে রেফারেল কমিশনের একটি অংশ প্রতিটি ট্রেডে রিবেট হিসেবে আপনার কাছে ফিরে আসে।",
      },
      {
        title: "স্পট ও ফিউচার্স, এক লিংকে",
        text: "রেফারেল যুক্ত থাকে আপনার অ্যাকাউন্টের সঙ্গে – স্পট, ফিউচার্স, মার্জিন ও অপশনস সবকিছুতেই খাটে। দ্বিতীয় কোনো কোড লাগে না।",
      },
      { title: "বাড়তি খরচ নেই", text: "রেফারেলের কারণে আপনার ফি কখনো বাড়ে না। আপনার শুধু লাভ – প্রোগ্রামের খরচ বহন করে এক্সচেঞ্জ।" },
      { title: "অফিসিয়াল রেজিস্ট্রেশন পেজ", text: "প্রতিটি লিংক এক্সচেঞ্জের নিজস্ব ওয়েবসাইট খোলে। মাঝে কোনো মধ্যস্থতাকারী নেই, আমাদের সঙ্গে কোনো ডেটাও শেয়ার হয় না।" },
      {
        title: "রেজিস্ট্রেশনের সময় দেওয়াই ভালো",
        text: "কিছু এক্সচেঞ্জে 30 দিন পর্যন্ত কোড যোগ করা যায়, কিছুতে কখনোই না। অ্যাকাউন্ট খোলার আগে লিংকটি ব্যবহার করলে সব এক্সচেঞ্জেই নিশ্চিন্ত থাকবেন।",
      },
    ],
    offersCaption: "প্রতিটি এক্সচেঞ্জে নতুন ব্যবহারকারীদের অফার",
    offersHead: ["এক্সচেঞ্জ", "রেফারেলসহ নতুন ব্যবহারকারীদের অফার", "এক লিংকের আওতায়"],
    claim: "অফার নিন",
    offersNote: (date) =>
      `${date} তারিখে অফারগুলো যাচাই করা হয়েছে। ওয়েলকাম রিওয়ার্ড পেতে টাস্ক পূরণ করতে হয়, পরিচয় যাচাই লাগে এবং অঞ্চলভেদে তা আলাদা হয় – সর্বশেষ শর্তাবলি প্রতিটি এক্সচেঞ্জের রেজিস্ট্রেশন পেজে দেখানো থাকে।`,

    exchangesEyebrow: "রেফারেল কোড",
    exchangesTitle: "আপনার এক্সচেঞ্জ বেছে নিন",
    exchangesLead:
      "প্রতিটি পেজে রেফারেল, ফি আর এক্সচেঞ্জটি কাদের জন্য সবচেয়ে উপযুক্ত, তা ব্যাখ্যা করা আছে – যাতে একবারেই সঠিক প্ল্যাটফর্মে রেজিস্ট্রেশন করতে পারেন।",
    sideBySide: "পাশাপাশি তুলনা",
    notSure: "কোনটি বেছে নেবেন, বুঝতে পারছেন না?",
    notSureText: (count) => `সব ${count}টি এক্সচেঞ্জের ফি, লিভারেজ ও ওপেন ইন্টারেস্ট এক টেবিলে তুলনা করুন।`,
    compareExchanges: "এক্সচেঞ্জ তুলনা করুন",

    compareTitle: "ক্রিপ্টো এক্সচেঞ্জের তুলনা: স্পট ও ফিউচার্স",
    compareLead: "নতুন ব্যবহারকারীদের অফার, স্পট ও ফিউচার্সের স্ট্যান্ডার্ড (নন-VIP) ফি, লিভারেজ আর মার্কেটের গভীরতা – এক নজরে।",
    compareNote: (reviewed, market) =>
      `ফি: প্রতিটি এক্সচেঞ্জের প্রকাশিত স্ট্যান্ডার্ড লেভেল, ${reviewed} তারিখে যাচাই করা। ওপেন ইন্টারেস্ট ও মার্কেট: CoinMarketCap, ${market}। ফি বদলায় – ট্রেড করার আগে এক্সচেঞ্জে মিলিয়ে নিন।`,
    versusStrip: {
      title: "দুটি এক্সচেঞ্জের মুখোমুখি তুলনা",
      text: (pairs, hubHref) => (
        <>
          {pairs}টি মুখোমুখি তুলনায় ফি, লিভারেজ, প্রোডাক্ট, দেশ, KYC ও রেফারেল অফার পাশাপাশি দেখুন –{" "}
          <Link href={hubHref}>সব এক্সচেঞ্জ তুলনা</Link>।
        </>
      ),
    },
    alternativesStrip: {
      title: "আপনার এক্সচেঞ্জের বিকল্প খুঁজছেন?",
      text: (others) =>
        `প্রতিটি তুলনায় একটি এক্সচেঞ্জকে বাকি ${others}টির সঙ্গে মিলিয়ে দেখা হয়েছে: ফি, লিভারেজ, প্রোডাক্ট, পরিচয় যাচাই এবং কোন কোন দেশের ব্যবহারকারী নেয়।`,
    },

    picksEyebrow: "সংক্ষিপ্ত উত্তর",
    picksTitle: "আপনার জন্য কোন এক্সচেঞ্জ সবচেয়ে ভালো?",
    picks: [
      { label: "সবচেয়ে গভীর লিকুইডিটি", slug: "binance", why: "বিশ্বে সবচেয়ে বেশি ওপেন ইন্টারেস্ট ও ফিউচার্স ভলিউম।" },
      { label: "কম ফি ও অপশনস", slug: "okx", why: "স্পটে 0.08% / 0.10%, অপশনসে 0.03% এবং প্রতি মাসে প্রুফ অব রিজার্ভস।" },
      { label: "মোবাইলে সক্রিয় ফিউচার্স ট্রেডিং", slug: "bybit", why: "দ্রুত ট্রেডিং ইঞ্জিন এবং সেরা ট্রেডিং অ্যাপগুলোর একটি।" },
      { label: "কপি ট্রেডিং", slug: "bitget", why: "অভিজ্ঞ ফিউচার্স ট্রেডারদের ট্রেড স্বয়ংক্রিয়ভাবে কপি করুন।" },
      { label: "সবচেয়ে বেশি অল্টকয়েন", slug: "gate", why: "5,400+ অ্যাসেট এবং স্বল্প-পরিচিত টোকেনেও ফিউচার্স।" },
      { label: "ট্রেডিং বট", slug: "kucoin", why: "স্পট ও ফিউচার্সের জন্য বিনা খরচে ট্রেডিং বট।" },
      { label: "সবচেয়ে কম ফি", slug: "mexc", why: "স্পটে এবং বেশির ভাগ ফিউচার্স কন্ট্রাক্টে 0% মেকার ফি।" },
    ],

    howEyebrow: "যেভাবে কাজ করে",
    howTitle: "তিনটি ধাপে রেফারেল কোড ব্যবহার করুন",
    steps: [
      { title: "এক্সচেঞ্জ বেছে নিন", text: "ওপরে ফি, লিভারেজ ও ফিচার তুলনা করুন, তারপর আপনার ট্রেডিং ধরনের সঙ্গে মেলে এমন এক্সচেঞ্জের পেজ খুলুন।" },
      {
        title: "আমাদের লিংক দিয়ে রেজিস্ট্রেশন করুন",
        text: "রেফারেল নিজে থেকেই যুক্ত হয়ে যায়। অন্য কোথাও অ্যাকাউন্ট খোলার আগে ইমেইল বা ফোন নম্বর দিয়ে রেজিস্ট্রেশন করুন।",
      },
      {
        title: "যাচাই শেষে রিওয়ার্ড নিন",
        text: "পরিচয় যাচাই (KYC) শেষ করুন, 2FA দিয়ে অ্যাকাউন্ট সুরক্ষিত করুন এবং ড্যাশবোর্ডে দেখানো ওয়েলকাম রিওয়ার্ডগুলো দেখে নিন।",
      },
    ],

    trustEyebrow: `কেন ${site.name}`,
    trustTitle: "ক্লিকের জন্য নয়, আস্থার জন্য তৈরি",
    trustCards: [
      { title: "যাচাই করা অফার", text: "আমরা প্রতিটি এক্সচেঞ্জের নতুন ব্যবহারকারীদের অফার যাচাই করি এবং আপনি সত্যিই যা পেতে পারেন, শুধু সেটুকুই তালিকায় রাখি।" },
      { title: "হালনাগাদ তথ্য, তারিখসহ", text: "আমরা নিয়মিত ফি, লিভারেজ ও লাইসেন্স আবার যাচাই করি, আর প্রতিটি পেজে যাচাইয়ের তারিখ লেখা থাকে।" },
      { title: "গোপনীয়তা সবার আগে", text: "কোনো অ্যাড পিক্সেল নেই, বিজ্ঞাপনের কুকিও নেই। অনুমতি দিলেই কেবল অ্যানালিটিক্স চলে।" },
      { title: "দ্রুত ও স্পষ্ট", text: "হালকা পেজ, যেকোনো ফোনে মুহূর্তেই খোলে – আগে উত্তর, পরে বিস্তারিত।" },
      { title: "খোলামেলা সুবিধা-অসুবিধা", text: "আমরা দুর্বলতা, অতীতের ঘটনা ও আঞ্চলিক বিধিনিষেধও তুলে ধরি – শুধু বিজ্ঞাপনের কথা নয়।" },
      { title: "ঝুঁকির কথা আগে", text: "লিভারেজ খুব দ্রুত পুরো ডিপোজিট শেষ করে দিতে পারে। প্রতিটি পেজে আমরা তা স্পষ্ট করে বলি।" },
    ],

    faqEyebrow: "প্রশ্নোত্তর",
    faqTitle: "রেফারেল কোড – সচরাচর জিজ্ঞাসিত প্রশ্ন",
    faqs: (reviewed) => [
      {
        q: "ক্রিপ্টো এক্সচেঞ্জের রেফারেল কোড কী?",
        a: "রেফারেল কোড (অনেকে বলেন রেফার কোড, ইনভাইট কোড বা রেফারেল আইডি) হলো ছোট একটি শনাক্তকারী কোড। এক্সচেঞ্জটির সুপারিশ যে ব্যক্তি বা ওয়েবসাইট করেছে, নতুন অ্যাকাউন্টকে এটি তার সঙ্গে যুক্ত করে। এর মাধ্যমে এক্সচেঞ্জ দুই পক্ষকেই রিওয়ার্ড দেয় – নতুন ব্যবহারকারী সাধারণত ওয়েলকাম রিওয়ার্ড বা ট্রেডিং ফিতে ছাড় পান, আর রেফারার পান ফির একটি অংশ।",
      },
      {
        q: "রেফারেল কোড ব্যবহার করলে কী সুবিধা?",
        a: "রেফারেল দিয়ে রেজিস্ট্রেশন করা নতুন ব্যবহারকারীরা এক্সচেঞ্জের ওয়েলকাম অফার পান – যেমন Bybit-এ 250 USDT পর্যন্ত রেফারেল রিওয়ার্ড বা MEXC-তে 10,000 USDT পর্যন্ত নতুন ব্যবহারকারীদের রিওয়ার্ড – আর রেফারার কমিশন ভাগ করে নিলে ট্রেডিং ফির একটি অংশও ফেরত পান, যেমন Gate-এ এক বছর ধরে 10%। এর জন্য বাড়তি কোনো খরচ নেই।",
      },
      {
        q: "একটি রেফারেল কোড কি স্পট ও ফিউচার্স ট্রেডিং দুটিতেই কাজ করে?",
        a: "হ্যাঁ। Binance, OKX, Bybit, Bitget, Gate, KuCoin ও MEXC-তে রেফারেল আপনার অ্যাকাউন্টের সঙ্গে যুক্ত থাকে, কোনো একটি প্রোডাক্টের সঙ্গে নয়। একবার রেজিস্ট্রেশন করলেই স্পট ও ফিউচার্স ট্রেডিং দুটিই এর আওতায় আসে – আর এক্সচেঞ্জে থাকলে মার্জিন, অপশনস বা কপি ট্রেডিংও।",
      },
      {
        q: "রেফারেল কোড দিয়ে রেজিস্ট্রেশন করলে কি বেশি খরচ হয়?",
        a: "না। রেফারেল লিংক দিয়ে রেজিস্ট্রেশন করলে আপনার ফি কখনো বাড়ে না। এক্সচেঞ্জ ও আপনার অঞ্চলভেদে বরং রেফারেল ছাড়া পাওয়া যায় না এমন ফি ছাড় বা ওয়েলকাম বোনাসও পেতে পারেন।",
      },
      {
        q: "অ্যাকাউন্ট খোলার পরে কি রেফারেল কোড যোগ করা যায়?",
        a: "এটি এক্সচেঞ্জের ওপর নির্ভর করে। Binance-এ ডিপোজিট বা ট্রেড না করে থাকলে রেজিস্ট্রেশনের 30 দিনের মধ্যে কোড যুক্ত করা যায়, আর MEXC-তে রেজিস্ট্রেশনের 30 দিনের মধ্যে নিজেই রেফারার যুক্ত করতে পারবেন। KuCoin-এর হেল্প সেন্টারে “Link Referrer” নামে একটি অনুরোধ জমা দেওয়ার ব্যবস্থা আছে। Bybit, OKX ও Bitget শুধু রেজিস্ট্রেশনের সময়ই কোড নেয়, আর Gate পরে কোড যোগ করার কোনো উপায় জানায়নি। নিরাপদ উপায় হলো অ্যাকাউন্ট খোলার আগেই লিংকটি ব্যবহার করা।",
      },
      {
        q: "কোন ক্রিপ্টো এক্সচেঞ্জে ফিউচার্স ফি সবচেয়ে কম?",
        a: `আমাদের সর্বশেষ যাচাইয়ে (${reviewed}) সবচেয়ে কম স্ট্যান্ডার্ড ফিউচার্স ফি ছিল MEXC-এর: BTCUSDT-তে 0% মেকার ও 0.02% টেকার। Binance, OKX ও Gate স্ট্যান্ডার্ড লেভেলে 0.02% মেকার / 0.05% টেকার ফি নেয়, Bybit 0.02% / 0.055%, আর Bitget ও KuCoin 0.02% / 0.06%।`,
      },
      {
        q: "ক্রিপ্টো ডেরিভেটিভসের জন্য কোন এক্সচেঞ্জ সবচেয়ে ভালো?",
        a: "কী ট্রেড করবেন, তার ওপর নির্ভর করে। Binance-এ লিকুইডিটি সবচেয়ে গভীর, OKX কম ফির সঙ্গে অপশনসও দেয়, Bybit তৈরি দ্রুত পারপেচুয়াল ট্রেডিংয়ের জন্য, Bitget কপি ট্রেডিংয়ের জন্য, Gate অল্টকয়েন ফিউচার্সের জন্য, KuCoin বটের জন্য আর MEXC সবচেয়ে কম ফির জন্য।",
      },
      {
        q: "যুক্তরাষ্ট্র থেকে কি এই এক্সচেঞ্জগুলো ব্যবহার করা যায়?",
        a: "বেশির ভাগ ক্ষেত্রে না। Binance, Bybit, Bitget, Gate, KuCoin ও MEXC যুক্তরাষ্ট্রকে বিধিনিষেধযুক্ত বা নিষিদ্ধ দেশের তালিকায় রেখেছে, আর OKX যুক্তরাষ্ট্রের নির্দিষ্ট কিছু অঞ্চলে বিধিনিষেধ আরোপ করে। যুক্তরাজ্য, কানাডা ও EU-তেও পরিস্থিতি এক্সচেঞ্জভেদে আলাদা – প্রতিটি এক্সচেঞ্জের পেজে সেই এক্সচেঞ্জের নিজস্ব শর্তাবলি থেকে নিষিদ্ধ দেশের তালিকা দেওয়া আছে।",
      },
      {
        q: "এই তথ্য কত দিন পরপর হালনাগাদ হয়?",
        a: `আমরা নিয়মিত ফি, লিভারেজ, লাইসেন্স ও মার্কেট ডেটা আবার যাচাই করি। প্রতিটি পেজে সর্বশেষ যাচাইয়ের তারিখ দেওয়া থাকে; বর্তমান ডেটা ${reviewed} তারিখে যাচাই করা।`,
      },
    ],
    countryFaq: null,

    ctaTitle: "আপনার ওয়েলকাম বোনাস নিন",
    ctaText: "একটি এক্সচেঞ্জ বেছে নিন, যাচাই করা রেফারেল দিয়ে রেজিস্ট্রেশন করুন এবং একই অ্যাকাউন্টে স্পট ও ফিউচার্স ট্রেড করুন।",
    ctaButton: "সব রেফারেল কোড দেখুন",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    title: (e, shortMonthYear) => `${withReading(e, "bn")} রেফারেল কোড ${e.referralCode} (${shortMonthYear}): ${benefit(e)}`,
    description: (e, monthYear) =>
      `${e.name} রেফারেল কোড: ${e.referralCode}। ${benefit(e)} – কোডটি কোথায় দিতে হয়, ধাপে ধাপে রেজিস্ট্রেশন, KYC ও ফি; যাচাই: ${monthYear}।`,
    keywords: (e) => {
      const same = (k: string) => k.toLowerCase().replace(/[\s-]/g, "");
      const reading = readingOf(e.slug, "bn");
      const spelling = keywordSpellings[e.slug];
      const cn = e.referral.codeName;
      // The exchange's own English field name ("Referral ID") as people type it in Latin letters; a Bengali one repeats the main keyword and drops out.
      const own = /^[\x20-\x7E]+$/.test(cn) ? `${e.name} ${cn.toLowerCase().replace(/\bid\b/, "ID")}` : `${e.name} ${cn}`;
      return [
        `${e.name} রেফারেল কোড`,
        `${e.name} রেফারেল কোড ${e.referralCode}`,
        `${e.name} referral code`,
        ...(reading ? [`${reading} রেফারেল কোড`] : []),
        ...(spelling ? [`${spelling} রেফারেল কোড`] : []),
        own,
        `${e.name} রেফার কোড`,
        `${e.name} ইনভাইট কোড`,
        `${e.name} রেফারেল আইডি`,
        `${e.name} রেফারেল লিংক`,
        `${e.name} রেফারাল কোড`,
        `${e.name} সাইন আপ বোনাস`,
        `${e.name} অ্যাকাউন্ট খোলার নিয়ম`,
        `${e.name} একাউন্ট খোলার নিয়ম`,
        `${e.name} KYC`,
        `${e.name} ফিউচার্স ফি`,
      ].filter((k, i, all) => all.findIndex((x) => same(x) === same(k)) === i);
    },
    toc: {
      "code-facts": "এক নজরে কোড",
      benefits: "আপনার সুবিধা",
      "use-code": "কোড যেভাবে ব্যবহার করবেন",
      "how-to": "যেভাবে রেজিস্ট্রেশন করবেন",
      verification: "পরিচয় যাচাই (KYC)",
      "key-facts": "মূল তথ্য",
      fees: "ফি",
      about: "এক্সচেঞ্জ সম্পর্কে",
      "pros-cons": "সুবিধা ও অসুবিধা",
      "best-for": "কাদের জন্য উপযুক্ত",
      safety: "নিরাপত্তা ও ব্যবহারের সুযোগ",
      faq: "প্রশ্নোত্তর",
      sources: "সূত্র",
      alternatives: "বিকল্প ও তুলনা",
    },
    onThisPage: "এই পেজে যা আছে",
    crumbHome: "হোম",
    crumbCodes: "রেফারেল কোড",
    crumbPage: (e) => `${e.name} রেফারেল কোড`,

    /* JSON-LD */
    offerName: (e) => `${e.name} রেফারেল কোড ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}। একটি রেফারেলের আওতায়: ${e.referralCovers.join(", ")}।`,
    offerCategory: "ক্রিপ্টোকারেন্সি এক্সচেঞ্জে রেজিস্ট্রেশন",
    howToName: (e) => `রেফারেল কোড ${e.referralCode} দিয়ে ${at(e.name)} রেজিস্ট্রেশনের নিয়ম`,
    howToDescription: (e) => `এক্সচেঞ্জের নিজের বর্ণনা অনুযায়ী ${at(e.name)} রেজিস্ট্রেশনের ধাপ, রেফারেল কোড ${e.referralCode} কোথায় দিতে হয় তা-সহ।`,

    /* Hero */
    updated: (date) => `${date} তারিখে যাচাই ও হালনাগাদ করা`,
    h1: (e) => `${withReading(e, "bn")} রেফারেল কোড: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – সঙ্গে {list(e.referralCovers)} মিলিয়ে একটিই রেফারেল। এখানে জানবেন কী পাচ্ছেন, ট্রেডিংয়ে খরচ কত এবং{" "}
        {withReading(e, "bn")} এক্সচেঞ্জটি আপনার জন্য সঠিক কি না।
      </>
    ),
    quickAnswer: "সংক্ষিপ্ত উত্তর",
    highlights: "বিশেষ দিক",
    chips: (e) => [
      `স্পট ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `ফিউচার্স ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `${shortLeverage(e)} লিভারেজ`,
      `${e.market.markets}টি ডেরিভেটিভস মার্কেট`,
      `${e.founded} সাল থেকে`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `${at(e.name)} আপনার রেজিস্ট্রেশন`,
    appliedByLink: "এই লিংকে রেফারেল নিজে থেকেই যুক্ত হয়ে যায়।",
    goesToOfficial: (domain) => `সরাসরি অফিসিয়াল ওয়েবসাইটে (${domain}) নিয়ে যায়।`,
    codeLabel: "রেফারেল কোড",
    noCodeToType: "কোড টাইপ করতে হবে না – লিংকেই যুক্ত",
    officialSite: (domain) => `অফিসিয়াল সাইট: ${domain}`,
    yourBenefits: "আপনার সুবিধা",
    freeNeverRaises: "বিনা খরচে – রেফারেলের কারণে আপনার ফি কখনো বাড়ে না",
    qrLabel: (e) => `QR কোড: রেফারেল ${e.referralCode} দিয়ে ${e.name} অ্যাপে অ্যাকাউন্ট খুলুন`,
    preferApp: "অ্যাপ ব্যবহার করতে চান?",
    scan: (e) => (
      <>
        ফোনের ক্যামেরা দিয়ে স্ক্যান করে {e.name} খুলুন
        {e.referralCode ? (
          <>
            {" "}
            – রেফারেল <strong>{e.referralCode}</strong> আগে থেকেই যুক্ত
          </>
        ) : null}
        । iOS ও Android দুটিতেই কাজ করে।
      </>
    ),
    riskLine: (e, links) => (
      <>
        লিভারেজ ট্রেডিং উচ্চ ঝুঁকিপূর্ণ। সব দেশ থেকে {e.name} ব্যবহার করা যায় না – <a href="#safety">কোথা থেকে ব্যবহার করা যায়</a> বা{" "}
        <Link href={links.alternatives}>{e.name}-এর বিকল্প</Link> দেখুন।
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `এক নজরে ${e.name} রেফারেল কোড ${e.referralCode}`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        {monthYear}-এর জন্য {e.name} রেফারেল কোড – অনেকে বলেন রেফার কোড বা ইনভাইট কোড – হলো <strong>{e.referralCode}</strong>। কোডটি কী কাজ করে, কোথায় দিতে
        হয় এবং নতুন অ্যাকাউন্টের কাছে {e.name} কী চায়, নিচের টেবিলে তার সারসংক্ষেপ দেওয়া হলো – প্রতিটি লাইন {date} তারিখে {e.name}-এর নিজস্ব পেজের সঙ্গে
        মিলিয়ে দেখা।
      </>
    ),
    codeFactsCaption: (e) => `${e.name} রেফারেল কোড ${e.referralCode}: মূল তথ্য`,
    codeFacts: (e, date) => [
      [`${e.name} রেফারেল কোড`, <strong key="code">{e.referralCode}</strong>],
      [`${e.name} যে নামে ডাকে`, e.referral.codeName],
      ["নতুন ব্যবহারকারীর সুবিধা", benefit(e)],
      ["কোথায় দিতে হয়", e.referral.whereShort],
      ["রেজিস্ট্রেশনের পরে কি যোগ করা যায়?", e.referral.afterSignupShort],
      ["প্রযোজ্য", e.referralCovers.join(", ")],
      ["পরিচয় যাচাই (KYC)", e.signup.kycShort],
      ["খরচ", "বিনা খরচে – আপনার ফি বাড়ে না"],
      ["সর্বশেষ যাচাই", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `${e.name} রেফারেলে আপনার সুবিধা`,
    benefitsIntro: (e) => (
      <>
        {e.name} রেফারেল কোড <strong>{e.referralCode}</strong> দিয়ে রেজিস্ট্রেশন করতে আপনার বাড়তি কোনো খরচ নেই। নতুন অ্যাকাউন্টের জন্য {e.name} এখন যা দিচ্ছে,
        তা নিচে দেওয়া হলো। <strong>{list(e.referralCovers)}</strong> মিলিয়ে একই কোড খাটে – স্পট আর ফিউচার্সের জন্য আলাদা কোড লাগে না।
      </>
    ),
    offerChecked: (date) => `নতুন ব্যবহারকারীদের অফার · যাচাই: ${date}`,
    appliedWhenRegistering: "এই রেফারেলের মাধ্যমে রেজিস্ট্রেশন করলে প্রযোজ্য",
    noExtraCost: "বাড়তি খরচ নেই – রেফারেলের কারণে আপনার ট্রেডিং ফি কখনো বেশি হয় না",
    oneReferralCovers: "একটি রেফারেলের আওতায়:",
    claimOffer: (e) => `${at(e.name)} নতুন ব্যবহারকারীদের অফার নিন`,
    tasksTitle: (e) => `${e.name}-এর নতুন ব্যবহারকারীদের অফার: টাস্ক ও রিওয়ার্ড`,
    tasksCaption: (e) => `${at(e.name)} নতুন ব্যবহারকারীদের টাস্ক এবং প্রতিটির রিওয়ার্ড`,
    task: "টাস্ক",
    reward: "রিওয়ার্ড",
    tasksNote: (e, date) =>
      `${date} তারিখে ${e.name}-এর দেওয়া তালিকা অনুযায়ী। অফার দেশভেদে আলাদা এবং প্রায়ই বদলায় – রেজিস্ট্রেশনের পরে আপনার অ্যাকাউন্টে যে শর্তাবলি দেখাবে, সেগুলোই প্রযোজ্য।`,

    /* How to use the code */
    useCodeTitle: (e) => `${e.name} রেফারেল কোড ${e.referralCode} যেভাবে ব্যবহার করবেন`,
    whereToEnter: (e) => `${e.name} রেফারেল কোড কোথায় দিতে হয়`,
    forgotCode: "কোড দিতে ভুলে গেছেন? রেজিস্ট্রেশনের পরে যোগ করা",
    asInvited: "আমন্ত্রিত ব্যবহারকারী হিসেবে যা পাবেন",
    interfaceNote: (e) => (
      <>
        উদ্ধৃতিচিহ্নে দেওয়া ফিল্ড ও বাটনের নামগুলো {e.name}-এর ইংরেজি ইন্টারফেস থেকে নেওয়া – আমরা সেটিই যাচাই করেছি; বাংলা ইন্টারফেসে নামগুলো আলাদা হতে পারে।
      </>
    ),

    /* Registration */
    howToTitle: (e) => `${e.name} অ্যাকাউন্ট খোলার নিয়ম – ধাপে ধাপে`,
    howToIntro: (e) => (
      <>
        {at(e.name)} {orList(e.signup.methods)} দিয়ে অ্যাকাউন্ট খোলা যায়। নিচের ধাপগুলো {e.name} নিজেই বর্ণনা করেছে; রেফারেল কোড{" "}
        <strong>{e.referralCode}</strong> কোন ধাপে দিতে হয়, সেটিও দেখানো হলো।
      </>
    ),
    startRegistration: (e) => `${at(e.name)} রেজিস্ট্রেশন শুরু করুন`,

    /* Verification */
    kycTitle: (e) => `${e.name}-এর পরিচয় যাচাই (KYC)`,
    verification: "যাচাই",
    minAge: "ন্যূনতম বয়স",
    documents: "গ্রহণযোগ্য কাগজপত্র",

    /* Key facts */
    factsTitle: (e) => `এক নজরে ${e.name}`,
    founded: "প্রতিষ্ঠা",
    headquarters: "সদর দপ্তর",
    futuresFees: "ফিউচার্স ফি (মেকার / টেকার)",
    spotFees: "স্পট ফি (মেকার / টেকার)",
    maxLeverage: "সর্বোচ্চ লিভারেজ",
    assets: "অ্যাসেট",
    openInterest: "ওপেন ইন্টারেস্ট",
    volume24h: "24 ঘণ্টার ডেরিভেটিভস ভলিউম",
    users: "ব্যবহারকারী",
    regulation: "রেগুলেশন",
    factsNote: (date) =>
      `ওপেন ইন্টারেস্ট, ভলিউম ও মার্কেটের সংখ্যা: CoinMarketCap-এর ডেরিভেটিভস র‍্যাংকিং, ${date}। ফি: যাচাইয়ের তারিখের স্ট্যান্ডার্ড লেভেল।`,

    /* Fees */
    feesTitle: (e) => `${e.name} ট্রেডিং ফি: সহজ ব্যাখ্যা`,
    feesIntro: (e) =>
      `${e.name} মেকার / টেকার মডেলে ফি নেয়: যে অর্ডার অর্ডার বুকে লিকুইডিটি যোগ করে (লিমিট অর্ডার), তাতে মেকার ফি লাগে; যে অর্ডার লিকুইডিটি সরিয়ে নেয় (মার্কেট অর্ডার), তাতে টেকার ফি লাগে। আপনার 30 দিনের ভলিউম বা হোল্ডিং বাড়লে রেট কমতে থাকে।`,
    market: "মার্কেট",
    maker: "মেকার",
    taker: "টেকার",
    futuresRow: "ফিউচার্স / পারপেচুয়াল",
    spotRow: "স্পট",
    feesNote: (e, date) => `${e.name}-এর প্রকাশিত স্ট্যান্ডার্ড (নন-VIP) রেট, ${date} তারিখে যাচাই করা।`,
    funding: "পারপেচুয়াল কন্ট্রাক্টের ফান্ডিং রেট ট্রেডাররা একে অপরকে দেন, এক্সচেঞ্জকে নয়।",
    liveSchedule: (e) => `${e.name}-এর বর্তমান ফি তালিকা দেখুন`,
    feesCompare: (e, others, links) => (
      <>
        এই রেট অন্যদের তুলনায় কেমন? <Link href={`${links.alternatives}#fees`}>{e.name}-এর বিকল্প পেজ</Link> দেখুন – সেখানে {e.name}-এর ফি{" "}
        {list(others)}-এর ফির পাশাপাশি রাখা আছে।
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `${e.name} সম্পর্কে`,
    products: "প্রোডাক্ট",
    prosConsTitle: (e) => `${e.name}-এর সুবিধা ও অসুবিধা`,
    pros: "সুবিধা",
    cons: "অসুবিধা",
    bestForTitle: (e) => `${e.name} কাদের জন্য সবচেয়ে ভালো?`,
    openAccount: (e) => `আপনার ${e.name} অ্যাকাউন্ট খুলুন`,
    notAMatch: (e, count, links, pairs) => (
      <>
        মিলছে না? <Link href={links.alternatives}>{e.name}-এর সেরা {count}টি বিকল্প</Link> দেখুন – কোনটি কোন কাজে সবচেয়ে ভালো, তা-সহ – অথবা {e.name}-এর
        মুখোমুখি তুলনা দেখুন: <Link href={pairs[0].href}>{pairs[0].label}</Link> ও <Link href={pairs[1].href}>{pairs[1].label}</Link>।
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `${e.name} কি নিরাপদ?`,
    availability: "কোথা থেকে ব্যবহার করা যায়:",
    closedWhereYouLive: (e, links) => (
      <>
        আপনার দেশ থেকে {e.name} ব্যবহার করা যায় না? বাকি এক্সচেঞ্জগুলোর কোনগুলো আপনার দেশের ব্যবহারকারী নেয়, তা দেখা যাবে{" "}
        <Link href={`${links.alternatives}#countries`}>আমাদের {e.name}-এর বিকল্প পেজের দেশভিত্তিক টেবিলে</Link>।
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `${e.name} রেফারেল কোড ও রেজিস্ট্রেশন – প্রশ্নোত্তর`,
    faqIntro: (e, count) =>
      `${e.name} রেফারেল কোড ${e.referralCode}, অ্যাকাউন্ট খোলা ও যাচাই, নতুন ব্যবহারকারীদের অফার এবং ফি নিয়ে ${count}টি প্রশ্ন।`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "সূত্র: এই তথ্য কোথা থেকে নেওয়া",
    sourcesIntro: (e, date) =>
      `রেফারেল কোড, রেজিস্ট্রেশন, পরিচয় যাচাই, নতুন ব্যবহারকারীদের অফার ও ফি নিয়ে এই পেজের সব তথ্য ${date} তারিখে ${e.name}-এর নিজস্ব ওয়েবসাইট ও হেল্প সেন্টার থেকে পড়ে নেওয়া। এক্সচেঞ্জগুলো আগাম ঘোষণা ছাড়াই অফার ও ফি বদলায় এবং দেশভেদে ভিন্ন শর্ত দেখায়, তাই নিচের পেজগুলোই চূড়ান্ত।`,

    /* Alternatives */
    alternativesTitle: (e) => `${e.name}-এর বিকল্প`,
    alternativesIntro: (e, count, links) => (
      <>
        {e.name} আপনার জন্য সঠিক কি না, নিশ্চিত নন? নিচে এর সবচেয়ে কাছের বিকল্পগুলো দেওয়া হলো – প্রতিটিতেই নিজস্ব রেফারেল দিয়ে রেজিস্ট্রেশন করা যায়।{" "}
        <Link href={links.alternatives}>{e.name}-এর বিকল্পগুলোর পূর্ণ তুলনা</Link> ফি, লিভারেজ, প্রোডাক্ট, পরিচয় যাচাই এবং কোন দেশ থেকে ব্যবহার করা যায় –
        এসব দিক থেকে সব {count}টি এক্সচেঞ্জকেই {e.name}-এর সঙ্গে মিলিয়ে দেখে।
      </>
    ),
    headToHeadTitle: (e) => `${e.name}: মুখোমুখি তুলনা`,
    headToHeadIntro: (e) =>
      `${e.name} ও আরেকটি এক্সচেঞ্জের মধ্যে বেছে নিতে চান? প্রতিটি জোড়ার ফি, লিভারেজ, প্রোডাক্ট, দেশ ও রেফারেল অফারের আলাদা তুলনা আছে:`,
    compareAll: (e, count) => `${e.name}-এর সব ${count}টি বিকল্প তুলনা করুন`,
    allComparisons: "সব এক্সচেঞ্জ তুলনা →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>ঝুঁকি সতর্কতা:</strong> ক্রিপ্টো ডেরিভেটিভস জটিল আর্থিক উপকরণ। লিভারেজ লাভ ও লোকসান দুটিই বহুগুণ বাড়িয়ে দেয়, আর কয়েক মিনিটের মধ্যেই
        আপনার পুরো মার্জিন হারাতে পারেন। এই পেজ শুধু তথ্যের জন্য, এটি আর্থিক পরামর্শ নয়। আমাদের লিংক দিয়ে রেজিস্ট্রেশন করলে আমরা কমিশন পেতে পারি –
        দেখুন আমাদের <Link href={disclosureHref}>অ্যাফিলিয়েট ডিসক্লোজার</Link>।
      </>
    ),
    joinTitle: (e) => `3 মিনিটে ${e.name} অ্যাকাউন্ট খুলুন`,
    joinText: (e) => `${benefit(e)}। স্পট ও ফিউচার্সের জন্য একটিই রেফারেল।`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `${name} রেফারেল কোড`,
      signup: (name) => `${at(name)} রেজিস্ট্রেশন ও পরিচয় যাচাই`,
      bonus: (name) => `${name} ওয়েলকাম বোনাস ও রিওয়ার্ড`,
      fees: (name) => `${name}-এর ফি ও ট্রেডিং`,
      safety: () => "নিরাপত্তা ও ব্যবহারের সুযোগ",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `${e.name} রেফারেল কোড কী?`,
          a: `${e.name} রেফারেল কোড হলো ${e.referralCode}। ${r.apply} ${e.name} নিজে একে ${r.codeName} বলে।`,
        },
        { topic: "referral", q: `${e.name} রেফারেল কোড কোথায় দিতে হয়?`, a: r.whereToEnter },
        { topic: "referral", q: `রেজিস্ট্রেশনের পরে কি ${e.name} রেফারেল কোড যোগ করা যায়?`, a: r.afterSignup },
        { topic: "referral", q: `${e.name} রেফারেল কোড ${e.referralCode} দিয়ে কী পাওয়া যায়?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `${e.name} রেফারেল কোড কি স্পট ও ফিউচার্স দুটিতেই কাজ করে?`,
          a: `হ্যাঁ। রেফারেল যুক্ত থাকে আপনার ${e.name} অ্যাকাউন্টের সঙ্গে, কোনো একটি প্রোডাক্টের সঙ্গে নয়, তাই ${list(e.referralCovers)} মিলিয়ে ${e.referralCode} দিয়ে একবার রেজিস্ট্রেশনই যথেষ্ট।`,
        },
        {
          topic: "referral",
          q: `${e.name} রেফার কোড ব্যবহার করলে কি কোনো খরচ আছে?`,
          a: `না। ${e.referralCode} দেওয়া বিনা খরচে, এতে আপনার ট্রেডিং ফিও বাড়ে না। ${e.name} নিজের ফি আয় থেকেই রেফারেল প্রোগ্রামের খরচ চালায়।`,
        },
        {
          topic: "signup",
          q: `${at(e.name)} অ্যাকাউন্ট কীভাবে খুলব?`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${asSentence(st.title)}`).join(" ")} ${orList(s.methods)} দিয়ে রেজিস্ট্রেশন করতে পারবেন।`,
        },
        { topic: "signup", q: `${at(e.name)} কি পরিচয় যাচাই (KYC) করতে হয়?`, a: s.kyc },
        { topic: "signup", q: `যাচাইয়ের জন্য ${e.name} কোন কোন কাগজপত্র নেয়?`, a: s.documents },
        { topic: "signup", q: `${e.name} অ্যাকাউন্ট খুলতে কত বছর বয়স হতে হয়?`, a: s.minAge },
        {
          topic: "fees",
          q: `${at(e.name)} ট্রেডিং ফি কত?`,
          a: `স্ট্যান্ডার্ড লেভেলে ${e.name} স্পটে ${e.spotFees.maker} মেকার / ${e.spotFees.taker} টেকার এবং পারপেচুয়াল ফিউচার্সে ${e.futuresFees.maker} মেকার / ${e.futuresFees.taker} টেকার ফি নেয়।${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `কোন কোন দেশ থেকে ${e.name} ব্যবহার করা যায় না?`, a: e.restricted },
      ];
    },
  },
};
