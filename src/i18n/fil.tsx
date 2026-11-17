import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";

/**
 * Interface texts in Filipino. Same keys as `en.tsx`.
 *
 * Wording: the measured Taglish of Filipino crypto guides – the sentence frame in Filipino, the trading and app nouns
 * in English ("exchange", "account", "fees", "spot", "futures", "leverage", "deposit", "KYC"), plural only with "mga"
 * plus the singular noun. Main keyword "referral code" with the name in front ("Binance referral code"), "invite code"
 * and "referral ID" as second terms. Exchange names take free-standing markers only ("ang Binance", "ng Binance",
 * "sa Binance"). Address "ka / mo / sa iyo", the site is "kami / namin". Numbers as in English (0.02%, 10,000 USDT),
 * "bilyon" for billion. Field and button names of the exchanges stay in English, because only the English interface
 * was checked.
 */

const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A, B at C" – no comma before "at". */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} at ${items[items.length - 1]}`);
/** "A, B o C" – for alternatives such as the sign-up methods. */
const orList = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} o ${items[items.length - 1]}`);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** `maxLeverage` starts with "Hanggang"; inside a phrase it is lower-cased ("leverage na hanggang 150x"). */
const lcLeverage = (s: string) => (s.startsWith("Hanggang") ? `h${s.slice(1)}` : s);
/** A step title as a sentence in a running answer. */
const asSentence = (s: string) => (/[.!?:]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);

export const fil: Dictionary = {
  list,

  format: {
    billions: (n) => `$${n.toFixed(n >= 10 ? 1 : 2)} bilyon`,
    billionsExact: (n) => `$${n.toFixed(2)} bilyon`,
    billionsFloor: (n) => `Mahigit $${Math.floor(n)} bilyon`,
  },

  meta: {
    siteTitle: `${site.name} – Mga Verified na Crypto Exchange Referral Code`,
    siteDescription:
      "Mga verified na referral code para sa Binance, OKX, Bybit, Bitget, Gate, KuCoin at MEXC – kunin ang bonus para sa bagong user at fee rebate sa spot at futures trading gamit ang iisang sign-up link. Fees, malinaw na datos, pati tapat na kalamangan at kahinaan.",
  },

  layout: {
    skip: "Lumaktaw sa nilalaman",
    mainNav: "Pangunahing menu",
    nav: { exchanges: "Mga exchange", benefits: "Mga benepisyo", compare: "Ikumpara", howItWorks: "Paano ito gumagana", about: "Tungkol sa amin" },
    getCodes: "Kunin ang mga code",
    homeLabel: `${site.name} – home page ng ${site.domain}`,
    language: "Wika",
    footerAbout:
      "Mga verified na referral code para sa pinakamalalaking crypto exchange – welcome bonus at fee rebate para sa spot at futures. Malinaw na datos mula sa mga opisyal na sanggunian.",
    referralCodes: "Mga referral code",
    referralCodeOf: (name) => `${name} referral code`,
    alternatives: "Mga alternatibo",
    alternativesOf: (name) => `${name} alternatives`,
    guides: "Mga gabay",
    comparisons: "Paghahambing ng mga exchange",
    howCodesWork: "Paano gumagana ang referral code",
    faq: "FAQ",
    about: "Tungkol sa amin at metodolohiya",
    legal: "Legal",
    imprint: "Legal na impormasyon",
    privacy: "Patakaran sa privacy",
    disclosure: "Pagsisiwalat ng affiliate",
    cookieSettings: "Mga setting ng cookie",
    risk: (
      <>
        <strong>Babala sa panganib:</strong> Napakataas ng panganib ng trading ng crypto derivatives na may leverage, at puwedeng mawala ang buong deposit
        mo. Mag-trade lang gamit ang perang kaya mong mawala. Walang anuman sa website na ito ang payo sa pananalapi, pamumuhunan o buwis.
      </>
    ),
    affiliate: (
      <>
        <strong>Pagsisiwalat ng affiliate:</strong> Referral link ang ilan sa mga link dito. Kapag nag-sign up ka gamit ang mga ito, puwede kaming kumita ng
        komisyon nang walang dagdag na bayad sa iyo. Hindi kailanman naaapektuhan nito ang mga datos na inilalathala namin. Trademark ng kani-kanilang
        may-ari ang mga pangalan at logo ng mga exchange; walang ugnayan sa kanila ang {site.name}, at hindi rin nila ito itinataguyod.
      </>
    ),
  },

  consent: {
    label: "Pahintulot sa analytics",
    text: (privacyHref) => (
      <>
        <strong>Analytics – ikaw ang magpapasya.</strong> Gusto naming gamitin ang Google Analytics para makita kung aling mga pahina ang binabasa.
        Naglalagay ito ng cookie at nagpapadala ng datos ng paggamit sa Google, at magsisimula lang ito kapag pinayagan mo. Alinman ang piliin mo, walang
        cookie para sa advertising. Mga detalye: <Link href={privacyHref}>Patakaran sa privacy</Link>.
      </>
    ),
    decline: "Tanggihan",
    allow: "Payagan ang analytics",
  },

  notFound: {
    title: "Hindi umiiral ang pahinang ito",
    text: "Baka nailipat na ang referral code na hinahanap mo. Subukan ang isa sa mga ito:",
    back: "Bumalik sa home page",
  },

  og: {
    footer: ["Verified na link", "Fees at datos", "Opisyal na sanggunian"],
    homeAlt: "RefCo – mga verified na crypto exchange referral code",
    homeKicker: (monthYear) => `Na-update noong ${monthYear}`,
    homeTitle: "Mga verified na crypto exchange referral code.",
    exchangeAlt: "Referral code, mga alternatibo at paghahambing ng exchange – RefCo",
    exchangeKicker: (monthYear) => `Sinuri noong ${monthYear}`,
    exchangeTitle: (e) => `${e.name} Referral Code`,
    exchangeSubtitle: (e) => `${benefit(e)} · Spot & futures sa iisang link`,
    versusBadge: "Head-to-head",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `Futures fees ${feesA} vs ${feesB} · Leverage ${leverageA}x vs ${leverageB}x · KYC, mga bansa, bonus`,
  },

  blocks: {
    signUpOn: (name) => `Mag-sign up sa ${name}`,
    signUp: "Mag-sign up",
    details: "Detalye",
    breadcrumb: "Breadcrumb",
    copy: "I-copy",
    copied: "Na-copy ✓",
    spotMakerTaker: "Spot maker / taker",
    futuresMakerTaker: "Futures maker / taker",
    maxLeverage: "Pinakamataas na leverage",
    since: "Itinatag",
    tableCaption: "Paghahambing ng mga crypto exchange ayon sa offer para sa bagong user, spot at futures fees, leverage at market data",
    exchange: "Exchange",
    newUserOffer: "Offer para sa bagong user",
    futuresFees: "Futures fees (maker / taker)",
    spotFees: "Spot fees",
    openInterest: "Open interest",
    markets: "Mga market",
    action: "Aksyon",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) => `Crypto Exchange Referral Code (${monthYear}): Bonus sa Spot & Futures`,
    description: (monthYear) =>
      `Verified na referral code: Binance, OKX, Bybit, Bitget, Gate, KuCoin at MEXC. Bonus sa bagong user, fee rebate sa spot at futures, iisang link (${monthYear}).`,
    listName: "Mga crypto exchange referral code para sa spot at futures",
    updated: (monthYear) => `Na-update noong ${monthYear}`,
    h1: (
      <>
        Mga crypto exchange referral code na <span className="hl">verified</span> at malinaw na ipinaliwanag.
      </>
    ),
    lead: (
      <>
        Kunin ang welcome bonus at fee rebate sa pinakamalalaking crypto exchange sa mundo – iisang referral code (tinatawag ding invite code o referral
        ID) para sa spot <em>at</em> futures. Kasama rin ang mga datos na kailangan mo sa pagpili: fees, leverage, lisensya, pati tapat na kalamangan at
        kahinaan.
      </>
    ),
    browse: "Tingnan ang mga referral code",
    seeBenefits: "Tingnan ang mga benepisyo mo",
    trust: (date) => [`Sinuri noong ${date}`, "Opisyal na link lang", "Analytics lang kapag pumayag ka"],
    featured: "Mga tampok na exchange",
    ticketName: (name) => `${name} referral code`,
    ticketTag: "SPOT + FUTURES",
    stats: ["Nangungunang spot & futures exchange", "Kabuuang open interest", "Saklaw na derivatives market", "Pinakamababang maker fee (MEXC)"],
    marketData: (date) => `Market data: derivatives ranking ng CoinMarketCap, kuha noong ${date}.`,

    benefitsEyebrow: "Mga benepisyo mo",
    benefitsTitle: `Bakit mag-sign up gamit ang ${site.name} referral code?`,
    benefitsLead: "Parehong exchange, parehong fees – pero kasama ang mga pakinabang para sa bagong user na mapapalampas mo kung direkta kang mag-sign up.",
    benefits: [
      {
        title: "Welcome bonus",
        text: "Kunin ang offer para sa bagong user ng exchange – trading fee rebate voucher, futures bonus at task reward na nagkakahalaga ng hanggang libu-libong USDT.",
      },
      {
        title: "Mas mababang trading fees",
        text: "Kung pinapayagan ng exchange, bumabalik sa iyo ang bahagi ng komisyon mula sa referral bilang rebate sa bawat trade.",
      },
      {
        title: "Spot at futures, iisang link",
        text: "Naka-link ang referral sa account mo – saklaw nito ang spot, futures, margin at options. Hindi mo na kailangan ng pangalawang code.",
      },
      {
        title: "Walang dagdag na gastos",
        text: "Hindi kailanman tataas ang fees mo dahil sa referral. Pakinabang lang ang makukuha mo – ang exchange ang nagbabayad para sa referral program.",
      },
      {
        title: "Opisyal na sign-up page",
        text: "Binubuksan ng bawat link ang sariling website ng exchange. Walang tagapamagitan, at walang datos na ibinabahagi sa amin.",
      },
      {
        title: "Pinakamainam gamitin sa pag-sign up",
        text: "May mga exchange na pumapayag magdagdag ng code sa loob ng 30 araw, at may mga hindi kailanman pumapayag. Gamitin ang link bago ka gumawa ng account, at ligtas ka sa alinmang exchange.",
      },
    ],
    offersCaption: "Mga offer para sa bagong user sa bawat exchange",
    offersHead: ["Exchange", "Offer para sa bagong user gamit ang referral", "Saklaw ng iisang link"],
    claim: "I-claim",
    offersNote: (date) =>
      `Sinuri ang mga offer noong ${date}. Nakabatay sa task ang mga welcome reward, kailangan ng identity verification at nag-iiba ayon sa rehiyon – nasa sign-up page ng bawat exchange ang kasalukuyang mga tuntunin.`,

    exchangesEyebrow: "Mga referral code",
    exchangesTitle: "Piliin ang exchange mo",
    exchangesLead:
      "Ipinapaliwanag ng bawat pahina ang referral, ang fees at kung para kanino pinakabagay ang exchange – para isang beses ka lang mag-sign up, sa tamang platform.",
    sideBySide: "Magkatabi",
    notSure: "Hindi sigurado kung alin?",
    notSureText: (count) => `Ikumpara ang fees, leverage at open interest ng lahat ng ${count} exchange sa iisang talahanayan.`,
    compareExchanges: "Ikumpara ang mga exchange",

    compareTitle: "Paghahambing ng mga crypto exchange: spot & futures",
    compareLead: "Offer para sa bagong user, standard (non-VIP) na spot at futures fees, leverage at lalim ng market – sa isang tingin.",
    compareNote: (reviewed, market) =>
      `Fees: standard tier ayon sa inilathala ng bawat exchange, sinuri noong ${reviewed}. Open interest at market: CoinMarketCap, ${market}. Nagbabago ang fees – kumpirmahin muna sa exchange bago mag-trade.`,
    versusStrip: {
      title: "Head-to-head na paghahambing ng dalawang exchange",
      text: (pairs, hubHref) => (
        <>
          {pairs} head-to-head na paghahambing na magkatabing nagpapakita ng fees, leverage, produkto, bansa, KYC at referral offer –{" "}
          <Link href={hubHref}>lahat ng paghahambing ng mga exchange</Link>.
        </>
      ),
    },
    alternativesStrip: {
      title: "Naghahanap ng alternatibo sa exchange mo?",
      text: (others) =>
        `Sinusukat ng bawat paghahambing ang isang exchange laban sa ${others} pang exchange: fees, leverage, produkto, identity verification at ang mga bansang tinatanggap nito.`,
    },

    picksEyebrow: "Mabilis na sagot",
    picksTitle: "Aling exchange ang pinakabagay sa iyo?",
    picks: [
      { label: "Pinakamalalim na liquidity", slug: "binance", why: "Pinakamalaking open interest at futures volume sa buong mundo." },
      { label: "Mababang fees & options", slug: "okx", why: "0.08% / 0.10% sa spot, 0.03% sa options at buwanang proof of reserves." },
      { label: "Aktibong futures sa mobile", slug: "bybit", why: "Mabilis na engine at isa sa pinakamahusay na trading app." },
      { label: "Copy trading", slug: "bitget", why: "Awtomatikong gayahin ang mga bihasang futures trader." },
      { label: "Pinakamaraming altcoin", slug: "gate", why: "5,400+ asset at futures sa mga niche token." },
      { label: "Trading bot", slug: "kucoin", why: "Libreng trading bot para sa spot at futures." },
      { label: "Pinakamababang fees", slug: "mexc", why: "0% maker fee sa spot at sa karamihan ng futures contract." },
    ],

    howEyebrow: "Paano ito gumagana",
    howTitle: "Gamitin ang referral code sa tatlong hakbang",
    steps: [
      {
        title: "Pumili ng exchange",
        text: "Ikumpara ang fees, leverage at mga feature sa itaas, saka buksan ang pahina ng exchange na bagay sa istilo mo ng trading.",
      },
      {
        title: "Mag-sign up gamit ang link namin",
        text: "Awtomatikong naikakabit ang referral. Mag-sign up gamit ang email o phone number mo bago ka gumawa ng account kahit saan pa.",
      },
      {
        title: "I-verify at i-claim ang mga reward",
        text: "Tapusin ang identity verification (KYC), protektahan ang account mo gamit ang 2FA at tingnan ang mga welcome reward sa dashboard mo.",
      },
    ],

    trustEyebrow: `Bakit ${site.name}`,
    trustTitle: "Ginawa para sa tiwala, hindi para sa click",
    trustCards: [
      {
        title: "Mga verified na offer",
        text: "Sinusuri namin ang offer para sa bagong user ng bawat exchange at inililista lang namin ang talagang makukuha mo.",
      },
      {
        title: "Bago at may petsang datos",
        text: "Regular naming sinusuri ulit ang fees, leverage at lisensya, at ipinapakita ng bawat pahina ang petsa ng huling pagsusuri nito.",
      },
      { title: "Privacy muna", text: "Walang ad pixel at walang cookie para sa advertising. Gumagana lang ang analytics kapag pinayagan mo." },
      { title: "Mabilis at malinaw", text: "Magaan ang mga pahina at agad nagbubukas sa kahit anong phone – sagot muna, saka ang detalye." },
      {
        title: "Tapat na kalamangan at kahinaan",
        text: "Inililista namin ang mga kahinaan, insidente at restriction ayon sa rehiyon – hindi lang ang marketing.",
      },
      { title: "Panganib muna", text: "Puwedeng maubos agad ng leverage ang isang deposit. Malinaw namin itong sinasabi sa bawat pahina." },
    ],

    faqEyebrow: "FAQ",
    faqTitle: "Referral code – mga madalas itanong",
    faqs: (reviewed) => [
      {
        q: "Ano ang crypto exchange referral code?",
        a: "Ang referral code (tinatawag ding invite code o referral ID) ay maikling identifier na nag-uugnay sa bagong exchange account sa tao o website na nagrekomenda nito. Ginagamit ito ng mga exchange para gantimpalaan ang dalawang panig – karaniwang nakakatanggap ng welcome reward o diskwento sa trading fees ang bagong user, at kumikita naman ang referrer ng bahagi ng fees.",
      },
      {
        q: "Ano ang mga benepisyo ng paggamit ng referral code?",
        a: "Makukuha ng mga bagong user na nag-sign up gamit ang referral ang welcome offer ng exchange – halimbawa, hanggang 250 USDT na referral reward sa Bybit o hanggang 10,000 USDT na reward para sa bagong user sa MEXC – at, kung ibinabahagi ng referrer ang komisyon, bumabalik sa kanila ang bahagi ng trading fees nila, gaya ng 10% sa loob ng isang taon sa Gate. Wala itong dagdag na bayad.",
      },
      {
        q: "Gumagana ba ang iisang referral code sa spot at futures trading?",
        a: "Oo. Sa Binance, OKX, Bybit, Bitget, Gate, KuCoin at MEXC, naka-link ang referral sa account mo, hindi sa iisang produkto. Saklaw ng isang pag-sign up ang spot at futures trading – pati margin, options o copy trading kung inaalok ng exchange ang mga ito.",
      },
      {
        q: "Mas malaki ba ang babayaran ko kung mag-sign up ako gamit ang referral code?",
        a: "Hindi. Hindi kailanman tumataas ang fees mo dahil nag-sign up ka gamit ang referral link. Depende sa exchange at sa rehiyon mo, puwede ka pang makakuha ng diskwento sa fees o welcome bonus na hindi mo makukuha kung walang referral.",
      },
      {
        q: "Puwede ko bang idagdag ang referral code pagkatapos kong gumawa ng account?",
        a: "Depende sa exchange. Sa Binance, puwede mong i-link ang code sa loob ng 30 araw mula sa registration kung hindi ka pa nag-deposit o nag-trade, at sa MEXC, puwede mong i-link mismo ang referrer mo sa loob ng 30 araw pagkatapos mag-sign up. May “Link Referrer” na request ang KuCoin sa help center nito. Sa registration lang tumatanggap ng code ang Bybit, OKX at Bitget, at walang dokumentadong paraan ang Gate para magdagdag nito pagkatapos. Ang ligtas na paraan: gamitin ang link bago ka gumawa ng account.",
      },
      {
        q: "Aling crypto exchange ang may pinakamababang futures fees?",
        a: `Sa huling pagsusuri namin (${reviewed}), ang MEXC ang may pinakamababang standard futures fees: 0% maker at 0.02% taker sa BTCUSDT. Naniningil ang Binance, OKX at Gate ng 0.02% maker / 0.05% taker sa standard tier, ang Bybit ng 0.02% / 0.055%, at ang Bitget at KuCoin ng 0.02% / 0.06%.`,
      },
      {
        q: "Aling exchange ang pinakamaganda para sa crypto derivatives?",
        a: "Depende sa uri ng trading mo. Pinakamalalim ang liquidity ng Binance, pinagsasama ng OKX ang mababang fees at options, ginawa ang Bybit para sa mabilis na perpetual trading, ang Bitget para sa copy trading, ang Gate para sa altcoin futures, ang KuCoin para sa mga bot at ang MEXC para sa pinakamababang fees.",
      },
      {
        q: "Available ba ang mga exchange na ito sa US?",
        a: "Sa karamihan, hindi. Nakalista ang United States bilang restricted o ipinagbabawal na bansa sa Binance, Bybit, Bitget, Gate, KuCoin at MEXC, at nililimitahan ng OKX ang ilang hurisdiksyon sa US. Iba-iba rin ang availability sa UK, Canada at EU – nakalista sa bawat pahina ng exchange ang mga restricted na bansa mula sa sariling mga tuntunin ng exchange.",
      },
      {
        q: "Gaano kadalas sinusuri ulit ang impormasyong ito?",
        a: `Regular naming sinusuri ulit ang fees, leverage, lisensya at market data. Ipinapakita ng bawat pahina ang petsa ng huling pagsusuri nito; sinuri ang kasalukuyang datos noong ${reviewed}.`,
      },
    ],
    countryFaq: null,

    ctaTitle: "I-claim ang welcome bonus mo",
    ctaText: "Pumili ng exchange, mag-sign up gamit ang verified na referral at mag-trade ng spot at futures sa iisang account.",
    ctaButton: "Tingnan ang lahat ng referral code",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    title: (e, shortMonthYear) => `${e.name} Referral Code ${e.referralCode} (${shortMonthYear}): ${benefit(e)}`,
    description: (e, monthYear) =>
      `${e.name} referral code: ${e.referralCode}. ${benefit(e)} – saan ito ilalagay, mga hakbang sa pag-sign up, KYC at fees, sinuri noong ${monthYear}.`,
    keywords: (e) => [
      `${e.name} referral code`,
      `${e.name} referral code ${e.referralCode}`,
      `${e.name} ${e.referral.codeName.toLowerCase()}`,
      `${e.name} referral link`,
      `${e.name} invite code`,
      `${e.name} sign up bonus`,
      `how to register on ${e.name}`,
      `${e.name} KYC`,
      `${e.name} futures fees`,
      `referral code sa ${e.name}`,
      `paano mag-sign up sa ${e.name}`,
      `paano ilagay ang referral code sa ${e.name}`,
    ],
    toc: {
      "code-facts": "Ang code sa isang tingin",
      benefits: "Mga benepisyo mo",
      "use-code": "Paano gamitin ang code",
      "how-to": "Paano mag-sign up",
      verification: "Verification (KYC)",
      "key-facts": "Mahahalagang datos",
      fees: "Fees",
      about: "Tungkol sa exchange",
      "pros-cons": "Kalamangan at kahinaan",
      "best-for": "Para kanino ito",
      safety: "Kaligtasan at availability",
      faq: "FAQ",
      sources: "Mga sanggunian",
      alternatives: "Mga alternatibo at paghahambing",
    },
    onThisPage: "Sa pahinang ito",
    crumbHome: "Home",
    crumbCodes: "Mga referral code",
    crumbPage: (e) => `${e.name} referral code`,

    /* JSON-LD */
    offerName: (e) => `${e.name} referral code ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}. Saklaw ng iisang referral ang ${list(e.referralCovers)}.`,
    offerCategory: "Registration sa cryptocurrency exchange",
    howToName: (e) => `Paano mag-sign up sa ${e.name} gamit ang referral code na ${e.referralCode}`,
    howToDescription: (e) =>
      `Mga hakbang ng registration sa ${e.name} ayon sa dokumentasyon ng exchange, kasama kung saan ilalagay ang referral code na ${e.referralCode}.`,

    /* Hero */
    updated: (date) => `Sinuri at na-update noong ${date}`,
    h1: (e) => `${e.name} Referral Code: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – at iisang referral para sa {list(e.referralCovers)}. Narito kung ano ang makukuha mo, magkano ang gastos sa
        trading at kung ang {e.name} ba ang tamang exchange para sa iyo.
      </>
    ),
    quickAnswer: "Mabilis na sagot",
    highlights: "Mga tampok",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futures ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `Leverage na ${lcLeverage(shortLeverage(e))}`,
      `${e.market.markets} derivatives market`,
      `Itinatag noong ${e.founded}`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `Ang pag-sign up mo sa ${e.name}`,
    appliedByLink: "Awtomatikong nailalapat ang referral sa link na ito.",
    goesToOfficial: (domain) => `Diretso sa opisyal na website na ${domain}.`,
    codeLabel: "Referral code",
    noCodeToType: "Walang code na kailangang ilagay – kasama na sa link",
    officialSite: (domain) => `Opisyal na site: ${domain}`,
    yourBenefits: "Mga benepisyo mo",
    freeNeverRaises: "Libre – hindi kailanman tinataasan ng referral ang fees mo",
    qrLabel: (e) => `QR code: mag-sign up sa ${e.name} app gamit ang referral na ${e.referralCode}`,
    preferApp: "Mas gusto mo ang app?",
    scan: (e) => (
      <>
        I-scan gamit ang camera ng phone mo para buksan ang {e.name}
        {e.referralCode ? (
          <>
            {" "}
            – kasama na ang referral na <strong>{e.referralCode}</strong>
          </>
        ) : null}
        . Gumagana sa iOS at Android.
      </>
    ),
    riskLine: (e, links) => (
      <>
        Mataas ang panganib ng trading na may leverage. Hindi available ang {e.name} sa lahat ng bansa – tingnan ang <a href="#safety">availability</a> o
        ang <Link href={links.alternatives}>{e.name} alternatives</Link>.
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `${e.name} referral code ${e.referralCode} sa isang tingin`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        Ang {e.name} referral code (tinatawag ding invite code o referral ID) para sa {monthYear} ay <strong>{e.referralCode}</strong>. Ibinubuod ng
        talahanayan kung ano ang ginagawa ng code, saan ito ilalagay at ano ang hinihingi ng {e.name} sa bagong account – sinuri namin ang bawat linya
        laban sa sariling mga pahina ng {e.name} noong {date}.
      </>
    ),
    codeFactsCaption: (e) => `${e.name} referral code ${e.referralCode}: mahahalagang datos`,
    codeFacts: (e, date) => [
      [`${e.name} referral code`, <strong key="code">{e.referralCode}</strong>],
      [`Tawag dito ng ${e.name}`, e.referral.codeName],
      ["Benepisyo para sa bagong user", benefit(e)],
      ["Saan ilalagay", e.referral.whereShort],
      ["Puwede bang idagdag pagkatapos mag-sign up?", e.referral.afterSignupShort],
      ["Saklaw", e.referralCovers.join(", ")],
      ["Identity verification (KYC)", e.signup.kycShort],
      ["Gastos", "Libre – hindi nito tinataasan ang fees mo"],
      ["Huling sinuri", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `Mga benepisyo mo sa ${e.name} referral code`,
    benefitsIntro: (e) => (
      <>
        Walang dagdag na bayad ang pag-sign up gamit ang {e.name} referral code na <strong>{e.referralCode}</strong>. Ito ang kasalukuyang offer ng{" "}
        {e.name} para sa mga bagong account. Gumagana ang parehong code para sa <strong>{list(e.referralCovers)}</strong> – hindi mo kailangan ng hiwalay
        na code para sa spot at futures.
      </>
    ),
    offerChecked: (date) => `Offer para sa bagong user · sinuri noong ${date}`,
    appliedWhenRegistering: "nailalapat kapag nag-sign up ka gamit ang referral na ito",
    noExtraCost: "Walang dagdag na gastos – hindi kailanman tataas ang trading fees mo dahil sa referral",
    oneReferralCovers: "Saklaw ng iisang referral:",
    claimOffer: (e) => `I-claim ang welcome offer ng ${e.name}`,
    tasksTitle: (e) => `Welcome offer ng ${e.name}: mga task at reward`,
    tasksCaption: (e) => `Mga task para sa bagong user ng ${e.name} at ang reward sa bawat isa`,
    task: "Task",
    reward: "Reward",
    tasksNote: (e, date) =>
      `Ayon sa listahan ng ${e.name} noong ${date}. Iba-iba ang mga offer sa bawat bansa at madalas itong magbago – ang mga tuntuning makikita sa account mo pagkatapos mag-sign up ang masusunod.`,

    /* How to use the code */
    useCodeTitle: (e) => `Paano gamitin ang ${e.name} referral code na ${e.referralCode}`,
    whereToEnter: (e) => `Saan ilalagay ang ${e.name} referral code?`,
    forgotCode: "Nakalimutan mo ang code? Pagdagdag nito pagkatapos ng registration",
    asInvited: "Ang makukuha mo bilang inimbitahang user",
    interfaceNote: (e) => (
      <>
        Mula sa English na interface ng {e.name} na sinuri namin ang mga pangalan ng field at button na nasa panipi; puwedeng iba ang tawag sa mga ito sa
        Filipino na bersyon.
      </>
    ),

    /* Registration */
    howToTitle: (e) => `Paano mag-sign up sa ${e.name} nang hakbang-hakbang`,
    howToIntro: (e) => (
      <>
        Puwede kang gumawa ng account sa {e.name} gamit ang {orList(e.signup.methods)}. Ito ang mga hakbang ayon sa dokumentasyon ng {e.name}, kasama
        ang bahagi kung saan papasok ang referral code na <strong>{e.referralCode}</strong>.
      </>
    ),
    startRegistration: (e) => `Simulan ang registration sa ${e.name}`,

    /* Verification */
    kycTitle: (e) => `Identity verification (KYC) sa ${e.name}`,
    verification: "Verification",
    minAge: "Minimum na edad",
    documents: "Tinatanggap na dokumento",

    /* Key facts */
    factsTitle: (e) => `${e.name} sa isang tingin`,
    founded: "Itinatag",
    headquarters: "Punong-tanggapan",
    futuresFees: "Futures fees (maker / taker)",
    spotFees: "Spot fees (maker / taker)",
    maxLeverage: "Pinakamataas na leverage",
    assets: "Mga asset",
    openInterest: "Open interest",
    volume24h: "Derivatives volume (24 oras)",
    users: "Mga user",
    regulation: "Regulasyon",
    factsNote: (date) =>
      `Open interest, volume at bilang ng market: derivatives ranking ng CoinMarketCap, ${date}. Fees: standard tier sa petsa ng pagsusuri.`,

    /* Fees */
    feesTitle: (e) => `${e.name} fees, ipinaliwanag`,
    feesIntro: (e) =>
      `Maker/taker model ang gamit ng ${e.name}: maker fee ang binabayaran ng mga order na nagdadagdag ng liquidity sa order book (limit order), at taker fee naman ang sa mga order na kumukuha ng liquidity (market order). Bumababa ang mga rate habang tumataas ang volume mo sa loob ng 30 araw o ang hawak mong asset.`,
    market: "Market",
    maker: "Maker",
    taker: "Taker",
    futuresRow: "Futures / perpetual",
    spotRow: "Spot",
    feesNote: (e, date) => `Standard (non-VIP) na rate ayon sa inilathala ng ${e.name}, sinuri noong ${date}.`,
    funding: "Binabayaran ng mga trader sa isa't isa ang funding rate ng mga perpetual contract, hindi sa exchange.",
    liveSchedule: (e) => `Tingnan ang kasalukuyang fee schedule ng ${e.name}`,
    feesCompare: (e, others, links) => (
      <>
        Paano maihahambing ang mga rate na ito sa iba? Inilalagay ng aming <Link href={`${links.alternatives}#fees`}>paghahambing ng {e.name} alternatives</Link>{" "}
        ang fees ng {e.name} katabi ng fees ng {list(others)}.
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `Tungkol sa ${e.name}`,
    products: "Mga produkto",
    prosConsTitle: (e) => `Kalamangan at kahinaan ng ${e.name}`,
    pros: "Kalamangan",
    cons: "Kahinaan",
    bestForTitle: (e) => `Para kanino pinakabagay ang ${e.name}?`,
    openAccount: (e) => `Gumawa ng account sa ${e.name}`,
    notAMatch: (e, count, links, pairs) => (
      <>
        Hindi bagay sa iyo? Tingnan ang <Link href={links.alternatives}>{count} pinakamahusay na {e.name} alternatives</Link> at kung para saan
        pinakabagay ang bawat isa, o ikumpara ang {e.name} nang head-to-head: <Link href={pairs[0].href}>{pairs[0].label}</Link> at{" "}
        <Link href={pairs[1].href}>{pairs[1].label}</Link>.
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `Ligtas ba ang ${e.name}?`,
    availability: "Availability:",
    closedWhereYouLive: (e, links) => (
      <>
        Hindi available ang {e.name} kung saan ka nakatira? Ipinapakita ng{" "}
        <Link href={`${links.alternatives}#countries`}>talahanayan ng mga bansa sa pahina ng {e.name} alternatives</Link> kung alin sa ibang exchange ang
        tumatanggap sa bansa mo.
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `${e.name} referral code at registration – FAQ`,
    faqIntro: (e, count) =>
      `${count} tanong tungkol sa ${e.name} referral code na ${e.referralCode}, sa paggawa at pag-verify ng account, sa welcome offer at sa fees.`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "Mga sanggunian: saan galing ang mga datos na ito",
    sourcesIntro: (e, date) =>
      `Binasa namin sa sariling website at help center ng ${e.name} noong ${date} ang lahat ng nasa pahinang ito tungkol sa referral code, registration, verification, welcome offer at fees. Binabago ng mga exchange ang mga offer at fees nang walang abiso at iba-iba ang tuntuning ipinapakita nila sa bawat bansa, kaya ang mga pahina sa ibaba ang pinal na batayan.`,

    /* Alternatives */
    alternativesTitle: (e) => `Mga alternatibo sa ${e.name}`,
    alternativesIntro: (e, count, links) => (
      <>
        Hindi sigurado kung bagay sa iyo ang {e.name}? Ito ang pinakamalalapit na alternatibo, na may kanya-kanyang referral sign-up. Sinusukat ng{" "}
        <Link href={links.alternatives}>buong paghahambing ng {e.name} alternatives</Link> ang lahat ng {count} exchange laban sa {e.name} ayon sa fees,
        leverage, produkto, verification at availability sa bawat bansa.
      </>
    ),
    headToHeadTitle: (e) => `${e.name}: head-to-head na paghahambing`,
    headToHeadIntro: (e) =>
      `Pumipili ka ba sa pagitan ng ${e.name} at ng isa pang exchange? May sariling paghahambing ang bawat pares – fees, leverage, produkto, bansa at referral offer:`,
    compareAll: (e, count) => `Ikumpara ang lahat ng ${count} alternatibo sa ${e.name}`,
    allComparisons: "Lahat ng paghahambing ng mga exchange →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>Babala sa panganib:</strong> Komplikadong instrumento ang crypto derivatives. Pinalalaki ng leverage ang kita at ang lugi, at puwedeng
        mawala ang buong margin mo sa loob lang ng ilang minuto. Para sa impormasyon lang ang pahinang ito at hindi ito payo sa pananalapi. Puwede kaming
        kumita ng komisyon kapag nag-sign up ka gamit ang mga link namin – tingnan ang aming <Link href={disclosureHref}>Pagsisiwalat ng affiliate</Link>.
      </>
    ),
    joinTitle: (e) => `Sumali sa ${e.name} sa loob ng 3 minuto`,
    joinText: (e) => `${benefit(e)}. Iisang referral para sa spot at futures.`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `${name} referral code`,
      signup: (name) => `Pag-sign up at pag-verify sa ${name}`,
      bonus: (name) => `Welcome bonus at mga reward ng ${name}`,
      fees: (name) => `${name} fees at trading`,
      safety: () => "Kaligtasan at availability",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `Ano ang ${e.name} referral code?`,
          a: `Ang ${e.name} referral code ay ${e.referralCode}. ${r.apply} Sa ${e.name} mismo, tinatawag itong ${r.codeName}.`,
        },
        { topic: "referral", q: `Saan ilalagay ang ${e.name} referral code?`, a: r.whereToEnter },
        { topic: "referral", q: `Puwede ko bang idagdag ang ${e.name} referral code pagkatapos kong mag-sign up?`, a: r.afterSignup },
        { topic: "referral", q: `Ano ang makukuha ko sa ${e.name} referral code na ${e.referralCode}?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `Gumagana ba ang ${e.name} referral code sa spot at futures?`,
          a: `Oo. Naka-link ang referral sa ${e.name} account mo, hindi sa iisang produkto, kaya saklaw ng iisang pag-sign up gamit ang ${e.referralCode} ang ${list(e.referralCovers)}.`,
        },
        {
          topic: "referral",
          q: `Kailangan ko bang magbayad para gamitin ang ${e.name} referral code?`,
          a: `Hindi. Libre ang paglalagay ng ${e.referralCode} at hindi nito tinataasan ang trading fees mo. Binabayaran ng ${e.name} ang referral program nito mula sa sarili nitong kita sa fees.`,
        },
        {
          topic: "signup",
          q: `Paano mag-sign up sa ${e.name}?`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${asSentence(st.title)}`).join(" ")} Puwede kang mag-sign up gamit ang ${orList(s.methods)}.`,
        },
        { topic: "signup", q: `Kailangan ba ng identity verification (KYC) sa ${e.name}?`, a: s.kyc },
        { topic: "signup", q: `Anong mga dokumento ang tinatanggap ng ${e.name} para sa verification?`, a: s.documents },
        { topic: "signup", q: `Ano ang minimum na edad para gumawa ng account sa ${e.name}?`, a: s.minAge },
        {
          topic: "fees",
          q: `Magkano ang trading fees sa ${e.name}?`,
          a: `Sa standard tier, naniningil ang ${e.name} ng ${e.spotFees.maker} maker / ${e.spotFees.taker} taker sa spot at ${e.futuresFees.maker} maker / ${e.futuresFees.taker} taker sa perpetual futures.${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `Saang mga bansa hindi available ang ${e.name}?`, a: e.restricted },
      ];
    },
  },
};
