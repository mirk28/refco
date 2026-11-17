import type { ReactNode } from "react";
import Link from "next/link";
import { nav, site } from "@/config/site";
import type { CountryKey, CountryStatus, Exchange, Faq, FaqTopic } from "@/data/types";

/**
 * Interface texts in English. This file defines the shape of a dictionary (`Dictionary` below);
 * every other language in `src/i18n/` has to provide the same keys.
 *
 * Texts about one exchange (offers, steps, fees notes, questions) are not here – they are data and
 * live in `src/data/exchanges/` (English) and `src/data/i18n/<locale>/` (translations).
 */

const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A, B and C" */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");

/** Paths a text links to. They are passed in so that a dictionary holds words only. All lead to pages in the language of the dictionary. */
export type PageLinks = {
  /** Home page. */
  home: string;
  /** Comparison table on the home page. */
  compareTable: string;
  /** Alternatives page of the exchange. */
  alternatives: string;
  /** Hub of all comparisons. */
  compareHub: string;
  /** Referral-code page of another exchange. */
  referral: (slug: string) => string;
};
/** A link to a head-to-head page: its path and its label ("Binance vs OKX"). */
export type PairLink = { href: string; label: string };

export const en = {
  list,

  format: {
    /** Billions of US dollars, e.g. "$12.3B". */
    billions: (n: number) => `$${n.toFixed(n >= 10 ? 1 : 2)}B`,
    billionsExact: (n: number) => `$${n.toFixed(2)}B`,
    billionsFloor: (n: number) => `$${Math.floor(n)}B+`,
  },

  meta: {
    siteTitle: `${site.name} – Verified Crypto Exchange Referral Codes`,
    siteDescription: site.description as string,
  },

  layout: {
    skip: "Skip to content",
    mainNav: "Main",
    /** Links of the main navigation. */
    nav: nav.map((n) => ({ href: n.href as string, label: n.label as string })),
    getCodes: "Get codes",
    homeLabel: `${site.name} – ${site.domain} home`,
    language: "Language",
    footerAbout:
      "Verified referral codes for the largest crypto exchanges – welcome bonuses and fee rebates for spot and futures. Clear facts from official sources.",
    referralCodes: "Referral codes",
    referralCodeOf: (name: string) => `${name} referral code`,
    alternatives: "Alternatives",
    alternativesOf: (name: string) => `${name} alternatives`,
    guides: "Guides",
    comparisons: "Exchange comparisons",
    howCodesWork: "How referral codes work",
    faq: "FAQ",
    about: "About & methodology",
    legal: "Legal",
    imprint: "Imprint (legal notice)",
    privacy: "Privacy policy",
    disclosure: "Affiliate disclosure",
    cookieSettings: "Cookie settings",
    risk: (
      <>
        <strong>Risk warning:</strong> Trading crypto derivatives with leverage is highly risky and can result in the loss of your entire deposit. Only
        trade with money you can afford to lose. Nothing on this website is financial, investment or tax advice.
      </>
    ) as ReactNode,
    affiliate: (
      <>
        <strong>Affiliate disclosure:</strong> Some links are referral links. If you sign up through them we may earn a commission at no extra cost to
        you. This never affects the facts we publish. Exchange names and logos are trademarks of their respective owners; {site.name} is not affiliated
        with or endorsed by them.
      </>
    ) as ReactNode,
  },

  consent: {
    label: "Analytics consent",
    text: (privacyHref: string): ReactNode => (
      <>
        <strong>Analytics – your choice.</strong> We would like to use Google Analytics to see which pages are read. It sets cookies and sends usage
        data to Google, and it only starts if you allow it. No advertising cookies either way. Details: <Link href={privacyHref}>privacy policy</Link>.
      </>
    ),
    decline: "Decline",
    allow: "Allow analytics",
  },

  notFound: {
    title: "This page doesn't exist",
    text: "The referral code you are looking for may have moved. Try one of these:",
    back: "Back to home",
  },

  og: {
    footer: ["Verified links", "Fees and facts", "Official sources"],
    homeAlt: "RefCo – verified crypto exchange referral codes",
    homeKicker: (monthYear: string) => `Updated ${monthYear}`,
    homeTitle: "Crypto exchange referral codes, verified.",
    exchangeAlt: "Exchange referral code, alternatives and comparisons – RefCo",
    exchangeKicker: (monthYear: string) => `Checked ${monthYear}`,
    exchangeTitle: (e: Exchange) => `${e.name} Referral Code`,
    exchangeSubtitle: (e: Exchange) => `${benefit(e)} · Spot & futures with one link`,
    versusBadge: "Head to head",
    versusSubtitle: (feesA: string, feesB: string, leverageA: number, leverageB: number) =>
      `Futures fees ${feesA} vs ${feesB} · ${leverageA}x vs ${leverageB}x leverage · KYC, countries, bonus`,
  },

  blocks: {
    signUpOn: (name: string) => `Sign up on ${name}`,
    signUp: "Sign up",
    details: "Details",
    breadcrumb: "Breadcrumb",
    copy: "Copy",
    copied: "Copied ✓",
    spotMakerTaker: "Spot maker / taker",
    futuresMakerTaker: "Futures maker / taker",
    maxLeverage: "Max leverage",
    since: "Since",
    tableCaption: "Comparison of crypto exchanges by new-user offer, spot and futures fees, leverage and market data",
    exchange: "Exchange",
    newUserOffer: "New-user offer",
    futuresFees: "Futures fees (maker / taker)",
    spotFees: "Spot fees",
    openInterest: "Open interest",
    markets: "Markets",
    action: "Action",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear: string) => `Crypto Exchange Referral Codes (${monthYear}): Bonuses for Spot & Futures`,
    description: (monthYear: string) =>
      `Verified referral codes for Binance, OKX, Bybit, Bitget, Gate, KuCoin and MEXC. Unlock new-user bonuses and fee rebates for spot and futures with one link – updated ${monthYear}.`,
    listName: "Crypto exchange referral codes for spot and futures",
    updated: (monthYear: string) => `Updated ${monthYear}`,
    h1: (
      <>
        Crypto exchange referral codes, <span className="hl">verified</span> and explained.
      </>
    ) as ReactNode,
    lead: (
      <>
        Unlock welcome bonuses and fee rebates on the world&apos;s largest crypto exchanges – one referral for spot <em>and</em> futures. Plus the facts
        you need to choose: fees, leverage, licences and honest pros &amp; cons.
      </>
    ) as ReactNode,
    browse: "Browse referral codes",
    seeBenefits: "See your benefits",
    trust: (date: string) => [`Checked ${date}`, "Official links only", "Analytics only with your consent"],
    featured: "Featured exchanges",
    ticketName: (name: string) => `${name} referral code`,
    ticketTag: "SPOT + FUTURES",
    stats: ["Top spot & futures exchanges", "Combined open interest", "Derivatives markets covered", "Lowest maker fee (MEXC)"],
    marketData: (date: string) => `Market data: CoinMarketCap derivatives ranking, snapshot ${date}.`,

    benefitsEyebrow: "Your benefits",
    benefitsTitle: `Why sign up with a ${site.name} referral code?`,
    benefitsLead: "Same exchange, same fees – but with the new-user perks you would miss by signing up directly.",
    benefits: [
      {
        title: "Welcome bonuses",
        text: "Unlock the exchange's new-user offer – fee rebate vouchers, futures bonuses and task rewards worth up to thousands of USDT.",
      },
      {
        title: "Lower trading fees",
        text: "Where the exchange allows it, part of the referral commission flows back to you as a rebate on every trade.",
      },
      {
        title: "Spot and futures, one link",
        text: "The referral is tied to your account – it covers spot, futures, margin and options. No second code needed.",
      },
      { title: "Zero extra cost", text: "A referral never makes your fees higher. You only gain – the exchange pays for the programme." },
      { title: "Official sign-up pages", text: "Every link opens the exchange's own website. No middlemen, no data shared with us." },
      {
        title: "Best applied at sign-up",
        text: "Some exchanges let you add a code for 30 days, others never. Use the link before you create your account and you are safe everywhere.",
      },
    ],
    offersCaption: "New-user offers per exchange",
    offersHead: ["Exchange", "New-user offer with referral", "One link covers"],
    claim: "Claim",
    offersNote: (date: string) =>
      `Offers checked ${date}. Welcome rewards are task-based, require identity verification and vary by region – the live terms are shown on each exchange's sign-up page.`,

    exchangesEyebrow: "Referral codes",
    exchangesTitle: "Choose your exchange",
    exchangesLead: "Each page explains the referral, the fees and who the exchange is best for – so you sign up once, on the right platform.",
    sideBySide: "Side by side",
    notSure: "Not sure which one?",
    notSureText: (count: number) => `Compare fees, leverage and open interest of all ${count} exchanges in one table.`,
    compareExchanges: "Compare exchanges",

    compareTitle: "Crypto exchanges compared: spot & futures",
    compareLead: "New-user offers, standard (non-VIP) spot and futures fees, leverage and market depth at a glance.",
    compareNote: (reviewed: string, market: string) =>
      `Fees: standard tier as published by each exchange, checked ${reviewed}. Open interest and markets: CoinMarketCap, ${market}. Fees change – confirm on the exchange before trading.`,
    /** Shown below the table where the pair comparisons and alternatives pages exist in English only (not used in English). */
    /** Strip under the comparison table: links to every head-to-head page. */
    versusStrip: {
      title: "Compare two exchanges head to head",
      text: (pairs: number, hubHref: string): ReactNode => (
        <>
          {pairs} pair comparisons with fees, leverage, products, countries, KYC and referral offers side by side –{" "}
          <Link href={hubHref}>all exchange comparisons</Link>.
        </>
      ),
    },
    /** Strip under the picks: links to every alternatives page. */
    alternativesStrip: {
      title: "Looking for an alternative to your exchange?",
      text: (others: number) =>
        `Each comparison measures one exchange against the other ${others}: fees, leverage, products, identity verification and the countries it accepts.`,
    },

    picksEyebrow: "Quick answer",
    picksTitle: "Which exchange is best for you?",
    picks: [
      { label: "Deepest liquidity", slug: "binance", why: "Largest open interest and futures volume worldwide." },
      { label: "Low fees & options", slug: "okx", why: "0.08% / 0.10% on spot, 0.03% on options and monthly proof of reserves." },
      { label: "Active futures on mobile", slug: "bybit", why: "Fast engine and one of the best trading apps." },
      { label: "Copy trading", slug: "bitget", why: "Mirror experienced futures traders automatically." },
      { label: "Most altcoins", slug: "gate", why: "5,400+ assets and futures on niche tokens." },
      { label: "Trading bots", slug: "kucoin", why: "Free trading bots for spot and futures." },
      { label: "Lowest fees", slug: "mexc", why: "0% maker fees on spot and most futures contracts." },
    ],

    howEyebrow: "How it works",
    howTitle: "Use a referral code in three steps",
    steps: [
      { title: "Pick an exchange", text: "Compare fees, leverage and features above and open the page of the exchange that fits your trading style." },
      {
        title: "Sign up through our link",
        text: "The referral is attached automatically. Register with your email or phone before you create an account anywhere else.",
      },
      {
        title: "Verify & claim rewards",
        text: "Complete identity verification (KYC), secure your account with 2FA and check the welcome rewards shown in your dashboard.",
      },
    ],

    trustEyebrow: `Why ${site.name}`,
    trustTitle: "Built for trust, not clicks",
    trustCards: [
      { title: "Verified offers", text: "We check each exchange's new-user offer and only list what you can actually claim." },
      { title: "Fresh, dated facts", text: "Fees, leverage and licences are re-checked regularly and every page shows its review date." },
      { title: "Privacy first", text: "No ad pixels and no advertising cookies. Analytics only runs if you allow it." },
      { title: "Fast & clear", text: "Lightweight pages that load instantly on any phone – the answer first, details after." },
      { title: "Honest pros & cons", text: "We list weaknesses, incidents and regional restrictions – not just the marketing." },
      { title: "Risk first", text: "Leverage can wipe out a deposit fast. We say so clearly on every page." },
    ],

    faqEyebrow: "FAQ",
    faqTitle: "Referral codes – frequently asked questions",
    faqs: (reviewed: string): Faq[] => [
      {
        q: "What is a crypto exchange referral code?",
        a: "A referral code (also called invite code or referral ID) is a short identifier that links a new exchange account to the person or website that recommended it. Exchanges use it to reward both sides – new users typically receive welcome rewards or a trading-fee discount, and the referrer earns a share of the fees.",
      },
      {
        q: "What are the benefits of using a referral code?",
        a: "New users who sign up with a referral get access to the exchange's welcome offer – for example up to 250 USDT in referral rewards on Bybit or up to 10,000 USDT in new-user rewards on MEXC – and, where the referrer shares commission, part of their trading fees back, such as 10% for one year on Gate. It costs nothing extra.",
      },
      {
        q: "Does one referral code work for both spot and futures trading?",
        a: "Yes. On Binance, OKX, Bybit, Bitget, Gate, KuCoin and MEXC the referral is linked to your account, not to a single product. One sign-up covers spot and futures trading – plus margin, options or copy trading where the exchange offers them.",
      },
      {
        q: "Do I pay more if I sign up with a referral code?",
        a: "No. Signing up through a referral link never increases your fees. Depending on the exchange and your region you may even receive a fee discount or welcome bonus that you would not get without one.",
      },
      {
        q: "Can I add a referral code after creating my account?",
        a: "It depends on the exchange. Binance lets you bind a code within 30 days of registration if you have not deposited or traded, and MEXC lets you link a referrer yourself within 30 days of sign-up. KuCoin has a “Link Referrer” request in its Help Centre. Bybit, OKX and Bitget only accept the code during registration, and Gate documents no way to add one later. The safe way is to use the link before you create your account.",
      },
      {
        q: "Which crypto exchange has the lowest futures fees?",
        a: `At our last review (${reviewed}) MEXC had the lowest standard futures fees with 0% maker and 0.02% taker on BTCUSDT. Binance, OKX and Gate charge 0.02% maker / 0.05% taker on the standard tier, Bybit 0.02% / 0.055%, and Bitget and KuCoin 0.02% / 0.06%.`,
      },
      {
        q: "Which exchange is best for crypto derivatives?",
        a: "It depends on what you trade. Binance offers the deepest liquidity, OKX combines low fees with options, Bybit is built for fast perpetual trading, Bitget for copy trading, Gate for altcoin futures, KuCoin for bots and MEXC for the lowest fees.",
      },
      {
        q: "Are these exchanges available in the US?",
        a: "Mostly not. Binance, Bybit, Bitget, Gate, KuCoin and MEXC list the United States as a restricted or prohibited country, and OKX restricts certain US jurisdictions. Availability also differs in the UK, Canada and the EU – every exchange page lists the restricted countries from the exchange's own terms.",
      },
      {
        q: "How often is this information updated?",
        a: `We re-check fees, leverage, licences and market data regularly. Every page shows the date of its last review; the current data was checked on ${reviewed}.`,
      },
    ],

    /**
     * An extra question about availability in the main country of a language, written from the researched
     * country data. `expected` lists the status per exchange that the answer puts into words (not used in English).
     */
    countryFaq: null as { country: CountryKey; expected: Record<string, CountryStatus>; faq: (reviewed: string) => Faq } | null,

    ctaTitle: "Claim your welcome bonus",
    ctaText: "Pick an exchange, sign up with a verified referral and trade spot and futures with one account.",
    ctaButton: "See all referral codes",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    title: (e: Exchange, shortMonthYear: string) => `${e.name} Referral Code ${e.referralCode} (${shortMonthYear}): ${benefit(e)}`,
    description: (e: Exchange, monthYear: string) =>
      `${e.name} referral code: ${e.referralCode}. ${benefit(e)} – where to enter it, sign-up steps, KYC and fees, checked ${monthYear}.`,
    keywords: (e: Exchange) => [
      `${e.name} referral code`,
      `${e.name} referral code ${e.referralCode}`,
      `${e.name} ${e.referral.codeName.toLowerCase()}`,
      `${e.name} referral link`,
      `${e.name} invite code`,
      `${e.name} sign up bonus`,
      `how to register on ${e.name}`,
      `${e.name} KYC`,
      `${e.name} futures fees`,
    ],
    toc: {
      "code-facts": "Code at a glance",
      benefits: "Your benefits",
      "use-code": "How to use the code",
      "how-to": "How to sign up",
      verification: "Verification (KYC)",
      "key-facts": "Key facts",
      fees: "Fees",
      about: "About the exchange",
      "pros-cons": "Pros & cons",
      "best-for": "Who it's for",
      safety: "Safety & availability",
      faq: "FAQ",
      sources: "Sources",
      alternatives: "Alternatives & comparisons",
    },
    onThisPage: "On this page",
    crumbHome: "Home",
    crumbCodes: "Referral codes",
    crumbPage: (e: Exchange) => `${e.name} referral code`,

    /* JSON-LD */
    offerName: (e: Exchange) => `${e.name} referral code ${e.referralCode}`,
    offerDescription: (e: Exchange) => `${benefit(e)}. One referral covers ${e.referralCovers.join(", ")}.`,
    offerCategory: "Cryptocurrency exchange registration",
    howToName: (e: Exchange) => `How to sign up on ${e.name} with the referral code ${e.referralCode}`,
    howToDescription: (e: Exchange) =>
      `Registration steps for ${e.name} as documented by the exchange, including where the referral code ${e.referralCode} is entered.`,

    /* Hero */
    updated: (date: string) => `Checked and updated ${date}`,
    h1: (e: Exchange) => `${e.name} Referral Code: ${e.referralCode}`,
    lead: (e: Exchange): ReactNode => (
      <>
        <strong>{benefit(e)}</strong> – plus one referral for {list(e.referralCovers)}. Here is what you get, what it costs to trade and whether {e.name}{" "}
        is the right exchange for you.
      </>
    ),
    quickAnswer: "Quick answer",
    highlights: "Highlights",
    chips: (e: Exchange) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futures ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `${shortLeverage(e)} leverage`,
      `${e.market.markets} derivatives markets`,
      `Since ${e.founded}`,
    ],

    /* Sign-up box */
    yourSignup: (e: Exchange) => `Your ${e.name} sign-up`,
    appliedByLink: "Referral is applied automatically through this link.",
    goesToOfficial: (domain: string) => `Goes directly to the official ${domain} website.`,
    codeLabel: "Referral code",
    noCodeToType: "No code to type – applied via link",
    officialSite: (domain: string) => `Official site: ${domain}`,
    yourBenefits: "Your benefits",
    freeNeverRaises: "Free – using a referral never raises your fees",
    qrLabel: (e: Exchange) => `QR code: sign up on the ${e.name} app with referral ${e.referralCode}`,
    preferApp: "Prefer the app?",
    scan: (e: Exchange): ReactNode => (
      <>
        Scan with your phone camera to open {e.name}
        {e.referralCode ? (
          <>
            {" "}
            – referral <strong>{e.referralCode}</strong> included
          </>
        ) : null}
        . Works for iOS and Android.
      </>
    ),
    riskLine: (e: Exchange, links: PageLinks): ReactNode => (
      <>
        Leveraged trading is high-risk. Not available in every country – see <a href="#safety">availability</a> or the{" "}
        <Link href={links.alternatives}>{e.name} alternatives</Link>.
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e: Exchange) => `${e.name} referral code ${e.referralCode} at a glance`,
    codeFactsIntro: (e: Exchange, monthYear: string, date: string): ReactNode => (
      <>
        The {e.name} referral code for {monthYear} is <strong>{e.referralCode}</strong>. The table sums up what it does, where it goes and what {e.name}{" "}
        requires from a new account – each line checked against {e.name}&apos;s own pages on {date}.
      </>
    ),
    codeFactsCaption: (e: Exchange) => `${e.name} referral code ${e.referralCode}: key facts`,
    codeFacts: (e: Exchange, date: string): [string, ReactNode][] => [
      [`${e.name} referral code`, <strong key="code">{e.referralCode}</strong>],
      [`What ${e.name} calls it`, e.referral.codeName],
      ["New-user benefit", benefit(e)],
      ["Where it goes", e.referral.whereShort],
      ["Can it be added after sign-up?", e.referral.afterSignupShort],
      ["Valid for", e.referralCovers.join(", ")],
      ["Identity verification (KYC)", e.signup.kycShort],
      ["Cost", "Free – it does not raise your fees"],
      ["Last checked", date],
    ],

    /* Benefits */
    benefitsTitle: (e: Exchange) => `Your benefits with the ${e.name} referral`,
    benefitsIntro: (e: Exchange): ReactNode => (
      <>
        Signing up with the {e.name} referral code <strong>{e.referralCode}</strong> costs you nothing extra. This is what {e.name} offers new accounts at
        the moment. The same code works for <strong>{list(e.referralCovers)}</strong> – you don&apos;t need a separate one for spot and futures.
      </>
    ),
    offerChecked: (date: string) => `New-user offer · checked ${date}`,
    appliedWhenRegistering: "applied when you register through this referral",
    noExtraCost: "No extra cost – your trading fees are never higher because of a referral",
    oneReferralCovers: "One referral covers:",
    claimOffer: (e: Exchange) => `Claim your ${e.name} welcome offer`,
    tasksTitle: (e: Exchange) => `${e.name} welcome offer: tasks and rewards`,
    tasksCaption: (e: Exchange) => `${e.name} new-user tasks and the reward for each`,
    task: "Task",
    reward: "Reward",
    tasksNote: (e: Exchange, date: string) =>
      `As listed by ${e.name} on ${date}. Offers differ by country and change often – the terms shown in your account after sign-up are the ones that apply.`,

    /* How to use the code */
    useCodeTitle: (e: Exchange) => `How to use the ${e.name} referral code ${e.referralCode}`,
    whereToEnter: (e: Exchange) => `Where to enter the ${e.name} referral code`,
    forgotCode: "Forgot the code? Adding it after registration",
    asInvited: "What you get as an invited user",
    /** Explains that quoted field and button names are those of the English interface (not needed in English). */
    interfaceNote: (e: Exchange): ReactNode => null,

    /* Registration */
    howToTitle: (e: Exchange) => `How to register on ${e.name} step by step`,
    howToIntro: (e: Exchange): ReactNode => (
      <>
        {e.name} lets you create an account with {list(e.signup.methods)}. These are the steps as {e.name} documents them, with the point where the
        referral code <strong>{e.referralCode}</strong> comes in.
      </>
    ),
    startRegistration: (e: Exchange) => `Start your ${e.name} registration`,

    /* Verification */
    kycTitle: (e: Exchange) => `${e.name} identity verification (KYC)`,
    verification: "Verification",
    minAge: "Minimum age",
    documents: "Accepted documents",

    /* Key facts */
    factsTitle: (e: Exchange) => `${e.name} at a glance`,
    founded: "Founded",
    headquarters: "Headquarters",
    futuresFees: "Futures fees (maker / taker)",
    spotFees: "Spot fees (maker / taker)",
    maxLeverage: "Max leverage",
    assets: "Assets",
    openInterest: "Open interest",
    volume24h: "24h derivatives volume",
    users: "Users",
    regulation: "Regulation",
    factsNote: (date: string) =>
      `Open interest, volume and market count: CoinMarketCap derivatives ranking, ${date}. Fees: standard tier at review date.`,

    /* Fees */
    feesTitle: (e: Exchange) => `${e.name} fees explained`,
    feesIntro: (e: Exchange) =>
      `${e.name} uses a maker/taker model: orders that add liquidity to the order book (limit orders) pay the maker fee, orders that remove liquidity (market orders) pay the taker fee. Rates fall as your 30-day volume or holdings increase.`,
    market: "Market",
    maker: "Maker",
    taker: "Taker",
    futuresRow: "Futures / perpetuals",
    spotRow: "Spot",
    feesNote: (e: Exchange, date: string) => `Standard (non-VIP) rates as published by ${e.name}, checked ${date}.`,
    funding: "Funding rates on perpetual contracts are paid between traders, not to the exchange.",
    liveSchedule: (e: Exchange) => `See the live ${e.name} fee schedule`,
    feesCompare: (e: Exchange, others: string[], links: PageLinks): ReactNode => (
      <>
        How do these rates compare? Our <Link href={`${links.alternatives}#fees`}>{e.name} alternatives comparison</Link> puts {e.name}&apos;s fees next
        to those of {list(others)}.
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e: Exchange) => `About ${e.name}`,
    products: "Products",
    prosConsTitle: (e: Exchange) => `${e.name} pros and cons`,
    pros: "Pros",
    cons: "Cons",
    bestForTitle: (e: Exchange) => `Who is ${e.name} best for?`,
    openAccount: (e: Exchange) => `Open your ${e.name} account`,
    /** Where to look if the exchange does not fit – for languages without alternatives pages (the English page links to those). */
    notAMatch: (e: Exchange, count: number, links: PageLinks, pairs: PairLink[]): ReactNode => (
      <>
        Not a match? See <Link href={links.alternatives}>the {count} best {e.name} alternatives</Link> and what each of them is best for, or compare{" "}
        {e.name} head to head: <Link href={pairs[0].href}>{pairs[0].label}</Link> and <Link href={pairs[1].href}>{pairs[1].label}</Link>.
      </>
    ),

    /* Safety */
    safetyTitle: (e: Exchange) => `Is ${e.name} safe?`,
    availability: "Availability:",
    closedWhereYouLive: (e: Exchange, links: PageLinks): ReactNode => (
      <>
        Is {e.name} closed where you live? The <Link href={`${links.alternatives}#countries`}>country table on our {e.name} alternatives page</Link> shows
        which of the other exchanges accept your country.
      </>
    ),

    /* FAQ */
    faqTitle: (e: Exchange) => `${e.name} referral code and registration – FAQ`,
    faqIntro: (e: Exchange, count: number) =>
      `${count} questions about the ${e.name} referral code ${e.referralCode}, creating and verifying an account, the welcome offer and fees.`,

    /* Guides on other platforms: text in front of the language name of each link. */
    guideLink: (label: string, name: string | undefined, language: ReactNode): ReactNode => (
      <>
        {label} – {name ? `${name} (` : null}
        {language}
        {name ? ")" : null}
      </>
    ),

    /* Sources */
    sourcesTitle: "Sources: where these facts come from",
    sourcesIntro: (e: Exchange, date: string) =>
      `Everything on this page about the referral code, registration, verification, the welcome offer and fees was read on ${e.name}'s own website and help centre on ${date}. Exchanges change offers and fees without notice and show different terms in different countries, so the pages below are the final word.`,

    /* Alternatives – the texts of a language whose comparison pages exist in English only. */
    alternativesTitle: (e: Exchange) => `Alternatives to ${e.name}`,
    alternativesIntro: (e: Exchange, count: number, links: PageLinks): ReactNode => (
      <>
        Not sure {e.name} is the right fit? These are the closest alternatives, each with its own referral sign-up. The{" "}
        <Link href={links.alternatives}>full {e.name} alternatives comparison</Link> measures all {count} against {e.name} by fees, leverage, products,
        verification and country availability.
      </>
    ),
    headToHeadTitle: (e: Exchange) => `${e.name} head to head`,
    headToHeadIntro: (e: Exchange) =>
      `Deciding between ${e.name} and one other exchange? Each pair has its own comparison of fees, leverage, products, countries and referral offers:`,
    compareAll: (e: Exchange, count: number) => `Compare all ${count} ${e.name} alternatives`,
    allComparisons: "All exchange comparisons →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref: string): ReactNode => (
      <>
        <strong>Risk warning:</strong> Crypto derivatives are complex instruments. Leverage multiplies gains and losses, and you can lose your entire
        margin within minutes. This page is for information only and is not financial advice. We may earn a commission if you sign up through our links –
        see our <Link href={disclosureHref}>affiliate disclosure</Link>.
      </>
    ),
    joinTitle: (e: Exchange) => `Join ${e.name} in 3 minutes`,
    joinText: (e: Exchange) => `${benefit(e)}. One referral for spot and futures.`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name: string) => `${name} referral code`,
      signup: (name: string) => `Registering and verifying on ${name}`,
      bonus: (name: string) => `${name} welcome bonus and rewards`,
      fees: (name: string) => `${name} fees and trading`,
      safety: () => "Safety and availability",
    } as Record<FaqTopic, (name: string) => string>,
    common: (e: Exchange): Faq[] => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `What is the ${e.name} referral code?`,
          a: `The ${e.name} referral code is ${e.referralCode}. ${r.apply} ${e.name} itself calls it the ${r.codeName}.`,
        },
        { topic: "referral", q: `Where do I enter the ${e.name} referral code?`, a: r.whereToEnter },
        { topic: "referral", q: `Can I add the ${e.name} referral code after I have registered?`, a: r.afterSignup },
        { topic: "referral", q: `What do I get with the ${e.name} referral code ${e.referralCode}?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `Does the ${e.name} referral code work for both spot and futures?`,
          a: `Yes. The referral is tied to your ${e.name} account, not to one product, so a single sign-up with ${e.referralCode} covers ${list(e.referralCovers)}.`,
        },
        {
          topic: "referral",
          q: `Does using the ${e.name} referral code cost anything?`,
          a: `No. Entering ${e.referralCode} is free and does not raise your trading fees. ${e.name} pays its referral programme out of its own fee income.`,
        },
        {
          topic: "signup",
          q: `How do I sign up on ${e.name}?`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${st.title}`).join(" ")} You can register with ${list(s.methods)}.`,
        },
        { topic: "signup", q: `Do I need identity verification (KYC) on ${e.name}?`, a: s.kyc },
        { topic: "signup", q: `Which documents does ${e.name} accept for verification?`, a: s.documents },
        { topic: "signup", q: `How old do I have to be to open a ${e.name} account?`, a: s.minAge },
        {
          topic: "fees",
          q: `What are the trading fees on ${e.name}?`,
          a: `On the standard tier ${e.name} charges ${e.spotFees.maker} maker / ${e.spotFees.taker} taker on spot and ${e.futuresFees.maker} maker / ${e.futuresFees.taker} taker on perpetual futures.${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `In which countries is ${e.name} not available?`, a: e.restricted },
      ];
    },
  },
};

export type Dictionary = typeof en;
