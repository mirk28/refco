import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";

/**
 * Interface texts in Swahili (Kiswahili sanifu, readers in Kenya, Tanzania and East Africa). Same keys as `en.tsx`.
 *
 * Wording: "msimbo wa rufaa" for referral code (main keyword; in titles, H1, share cards and link labels the name
 * follows directly, "Msimbo wa Rufaa Binance"; in a sentence "msimbo wa rufaa wa Binance"), "msimbo wa mwaliko" as
 * second term, "jukwaa" / "majukwaa" for the exchange, "ada" for fees, spot / futures / leverage / options in English,
 * address in the second person singular. A bare exchange name is class 9 ("Binance inatoza", "OKX haitozi"), two or
 * more names class 10 ("zinatoza"). Numbers in English notation (0.02%, 10,000 USDT, $34.1 bilioni); counted nouns
 * come first ("siku 30", "majukwaa 7"). Field and button names of the exchanges stay in English, because only the
 * English interface was checked.
 */

const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A, B na C" – no comma before "na". */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} na ${items[items.length - 1]}`);
/** "A, B au C" – for alternatives such as the sign-up methods. */
const orList = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} au ${items[items.length - 1]}`);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** `maxLeverage` starts with "Hadi"; inside a phrase it is lower-cased ("Leverage ya hadi 150x"). */
const lcLeverage = (s: string) => (s.startsWith("Hadi") ? `h${s.slice(1)}` : s);
/** A step title as a sentence in a running answer. */
const asSentence = (s: string) => (/[.!?:]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** "Novemba 2026" → "Nov 2026" (the short Swahili month is its first three letters), so that the home title stays within 65 characters. */
const shortMonth = (s: string) => s.replace(/^([A-Za-z]{3})[A-Za-z]+/, "$1");

export const sw: Dictionary = {
  list,

  format: {
    billions: (n) => `$${n.toFixed(n >= 10 ? 1 : 2)} bilioni`,
    billionsExact: (n) => `$${n.toFixed(2)} bilioni`,
    billionsFloor: (n) => `$${Math.floor(n)} bilioni+`,
  },

  meta: {
    siteTitle: `${site.name} – Misimbo ya rufaa iliyothibitishwa kwa majukwaa ya crypto`,
    siteDescription:
      "Misimbo ya rufaa iliyothibitishwa ya Binance, OKX, Bybit, Bitget, Gate, KuCoin na MEXC – pata bonasi za watumiaji wapya na marejesho ya ada kwa biashara ya spot na futures kupitia kiungo kimoja cha usajili. Ada, taarifa pamoja na faida na hasara zilizoelezwa kwa uwazi.",
  },

  layout: {
    skip: "Ruka hadi maudhui",
    mainNav: "Menyu kuu",
    nav: { exchanges: "Majukwaa", benefits: "Faida", compare: "Linganisha", howItWorks: "Jinsi inavyofanya kazi", about: "Kuhusu" },
    getCodes: "Pata misimbo",
    homeLabel: `${site.name} – ukurasa wa mwanzo wa ${site.domain}`,
    language: "Lugha",
    footerAbout:
      "Misimbo ya rufaa iliyothibitishwa kwa majukwaa makubwa zaidi ya crypto – bonasi za ukaribisho na marejesho ya ada kwa spot na futures. Taarifa wazi kutoka vyanzo rasmi.",
    referralCodes: "Misimbo ya rufaa",
    referralCodeOf: (name) => `Msimbo wa Rufaa ${name}`,
    alternatives: "Majukwaa mbadala",
    alternativesOf: (name) => `Mbadala wa ${name}`,
    guides: "Miongozo",
    comparisons: "Ulinganisho wa majukwaa",
    howCodesWork: "Jinsi misimbo ya rufaa inavyofanya kazi",
    faq: "Maswali yanayoulizwa mara kwa mara",
    about: "Kuhusu sisi na jinsi tunavyokagua",
    legal: "Masuala ya kisheria",
    imprint: "Taarifa za kisheria",
    privacy: "Sera ya faragha",
    disclosure: "Ufichuzi wa ushirika",
    cookieSettings: "Mipangilio ya vidakuzi",
    risk: (
      <>
        <strong>Tahadhari ya hatari:</strong> Biashara ya derivatives za crypto kwa kutumia leverage ina hatari kubwa na inaweza kukufanya upoteze pesa
        zote ulizoweka. Fanya biashara kwa pesa ambazo unaweza kumudu kuzipoteza tu. Hakuna chochote kwenye tovuti hii ambacho ni ushauri wa kifedha, wa
        uwekezaji au wa kodi.
      </>
    ),
    affiliate: (
      <>
        <strong>Ufichuzi wa ushirika:</strong> Baadhi ya viungo ni viungo vya rufaa. Ukijisajili kupitia viungo hivyo, tunaweza kupata kamisheni bila
        gharama yoyote ya ziada kwako. Jambo hili haliathiri kamwe taarifa tunazochapisha. Majina na nembo za majukwaa ni alama za biashara za wamiliki
        wake; {site.name} haina uhusiano na majukwaa hayo, wala haijaidhinishwa nayo.
      </>
    ),
  },

  consent: {
    label: "Idhini ya takwimu za matumizi",
    text: (privacyHref) => (
      <>
        <strong>Takwimu za matumizi – uamuzi ni wako.</strong> Tungependa kutumia Google Analytics ili kuona kurasa zipi zinasomwa. Huweka vidakuzi
        (cookies), hutuma data ya matumizi kwa Google na huanza tu ukiiruhusu. Hakuna vidakuzi vya matangazo kwa vyovyote vile. Maelezo zaidi:{" "}
        <Link href={privacyHref}>Sera ya faragha</Link>.
      </>
    ),
    decline: "Kataa",
    allow: "Ruhusu takwimu",
  },

  notFound: {
    title: "Ukurasa huu haupo",
    text: "Msimbo wa rufaa unaoutafuta huenda umehamishwa. Jaribu mojawapo ya kurasa hizi:",
    back: "Rudi ukurasa wa mwanzo",
  },

  og: {
    footer: ["Viungo vilivyothibitishwa", "Ada na taarifa", "Vyanzo rasmi"],
    homeAlt: "RefCo – misimbo ya rufaa iliyothibitishwa kwa majukwaa ya crypto",
    homeKicker: (monthYear) => `Imesasishwa ${monthYear}`,
    homeTitle: "Misimbo ya rufaa ya crypto, iliyothibitishwa.",
    exchangeAlt: "Msimbo wa rufaa, mbadala na ulinganisho wa jukwaa la crypto – RefCo",
    exchangeKicker: (monthYear) => `Imekaguliwa ${monthYear}`,
    exchangeTitle: (e) => `Msimbo wa Rufaa ${e.name}`,
    exchangeSubtitle: (e) => `${benefit(e)} · Spot na futures kwa kiungo kimoja`,
    versusBadge: "Ana kwa ana",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `Ada za futures ${feesA} vs ${feesB} · Leverage ${leverageA}x vs ${leverageB}x · KYC, nchi, bonasi`,
  },

  blocks: {
    signUpOn: (name) => `Jisajili kwenye ${name}`,
    signUp: "Jisajili",
    details: "Maelezo",
    breadcrumb: "Njia ya ukurasa",
    copy: "Nakili",
    copied: "Imenakiliwa ✓",
    spotMakerTaker: "Spot maker / taker",
    futuresMakerTaker: "Futures maker / taker",
    maxLeverage: "Leverage ya juu zaidi",
    since: "Tangu",
    tableCaption: "Ulinganisho wa majukwaa ya crypto kwa ofa ya watumiaji wapya, ada za spot na futures, leverage na takwimu za soko",
    exchange: "Jukwaa",
    newUserOffer: "Ofa ya watumiaji wapya",
    futuresFees: "Ada za futures (maker / taker)",
    spotFees: "Ada za spot",
    openInterest: "Open interest",
    markets: "Masoko",
    action: "Kitendo",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) => `Misimbo ya rufaa ya crypto (${shortMonth(monthYear)}): bonasi za spot na futures`,
    description: (monthYear) =>
      `Misimbo ya rufaa iliyothibitishwa: Binance, OKX, Bybit, Bitget, Gate, KuCoin na MEXC. Bonasi na marejesho ya ada za spot na futures kwa kiungo kimoja – ${shortMonth(monthYear)}.`,
    listName: "Misimbo ya rufaa ya majukwaa ya crypto kwa spot na futures",
    updated: (monthYear) => `Imesasishwa ${monthYear}`,
    h1: (
      <>
        Misimbo ya rufaa ya majukwaa ya crypto, <span className="hl">iliyothibitishwa</span> na kuelezwa.
      </>
    ),
    lead: (
      <>
        Pata bonasi za ukaribisho na marejesho ya ada kwenye majukwaa makubwa zaidi ya crypto (exchange) duniani – msimbo mmoja wa rufaa (referral code;
        pia huitwa msimbo wa mwaliko) unatumika kwa spot <em>na</em> futures. Pia utapata taarifa unazohitaji ili kuchagua: ada, leverage, leseni pamoja na
        faida na hasara zilizoelezwa kwa uwazi.
      </>
    ),
    browse: "Tazama misimbo ya rufaa",
    seeBenefits: "Tazama faida zako",
    trust: (date) => [`Imekaguliwa ${date}`, "Viungo rasmi pekee", "Takwimu za matumizi kwa idhini yako tu"],
    featured: "Majukwaa yaliyoangaziwa",
    ticketName: (name) => `Msimbo wa Rufaa ${name}`,
    ticketTag: "SPOT + FUTURES",
    stats: ["Majukwaa bora ya spot na futures", "Jumla ya open interest", "Masoko ya derivatives yaliyojumuishwa", "Ada ya maker ya chini zaidi (MEXC)"],
    marketData: (date) => `Takwimu za soko: orodha ya viwango vya derivatives ya CoinMarketCap, kama ilivyokuwa ${date}.`,

    benefitsEyebrow: "Faida zako",
    benefitsTitle: `Kwa nini ujisajili kwa msimbo wa rufaa wa ${site.name}?`,
    benefitsLead: "Jukwaa lilelile, ada zilezile – lakini ukiwa na manufaa ya watumiaji wapya ambayo ungeyakosa ukijisajili moja kwa moja.",
    benefits: [
      {
        title: "Bonasi za ukaribisho",
        text: "Pata ofa ambayo jukwaa linatoa kwa watumiaji wapya – vocha za marejesho ya ada, bonasi za futures na zawadi za kukamilisha kazi zenye thamani ya hadi maelfu ya USDT.",
      },
      {
        title: "Ada za biashara za chini",
        text: "Pale jukwaa linaporuhusu, sehemu ya kamisheni ya rufaa hurudi kwako kama marejesho kwenye kila biashara.",
      },
      {
        title: "Spot na futures, kiungo kimoja",
        text: "Rufaa inaunganishwa na akaunti yako – inahusu spot, futures, margin na options. Huhitaji msimbo wa pili.",
      },
      { title: "Hakuna gharama ya ziada", text: "Rufaa haipandishi ada zako kamwe. Unachopata ni faida tu – jukwaa ndilo linalolipia mpango huu." },
      { title: "Kurasa rasmi za usajili", text: "Kila kiungo kinafungua tovuti ya jukwaa lenyewe. Hakuna watu wa kati, hakuna data inayoshirikiwa nasi." },
      {
        title: "Ni bora kuutumia wakati wa kujisajili",
        text: "Baadhi ya majukwaa hukuruhusu kuongeza msimbo ndani ya siku 30, mengine hayaruhusu kabisa. Ukitumia kiungo kabla ya kufungua akaunti yako, utakuwa salama kwenye kila jukwaa.",
      },
    ],
    offersCaption: "Ofa za watumiaji wapya kwa kila jukwaa",
    offersHead: ["Jukwaa", "Ofa ya watumiaji wapya kupitia rufaa", "Kiungo kimoja kinahusu"],
    claim: "Pata ofa",
    offersNote: (date) =>
      `Ofa zimekaguliwa ${date}. Zawadi za ukaribisho hutegemea kukamilisha kazi, zinahitaji uthibitishaji wa utambulisho na hutofautiana kulingana na eneo – masharti ya sasa yanaonyeshwa kwenye ukurasa wa usajili wa kila jukwaa.`,

    exchangesEyebrow: "Misimbo ya rufaa",
    exchangesTitle: "Chagua jukwaa lako",
    exchangesLead: "Kila ukurasa unaeleza rufaa, ada na watu ambao jukwaa linawafaa zaidi – ili ujisajili mara moja tu, kwenye jukwaa sahihi.",
    sideBySide: "Bega kwa bega",
    notSure: "Huna uhakika uchague lipi?",
    notSureText: (count) =>
      `Linganisha ada, leverage na open interest (jumla ya mikataba iliyo wazi) ya majukwaa yote ${count} katika jedwali moja.`,
    compareExchanges: "Linganisha majukwaa",

    compareTitle: "Ulinganisho wa majukwaa ya crypto: spot na futures",
    compareLead: "Ofa za watumiaji wapya, ada za kawaida (bila VIP) za spot na futures, leverage na kina cha soko kwa mtazamo mmoja.",
    compareNote: (reviewed, market) =>
      `Ada: kiwango cha kawaida kama kila jukwaa linavyokichapisha, zimekaguliwa ${reviewed}. Open interest na masoko: CoinMarketCap, ${market}. Ada hubadilika – zithibitishe kwenye jukwaa kabla ya kufanya biashara.`,
    versusStrip: {
      title: "Linganisha majukwaa mawili ana kwa ana",
      text: (pairs, hubHref) => (
        <>
          Ulinganisho wa jozi {pairs} za majukwaa unaoweka ada, leverage, bidhaa, nchi, KYC na ofa za rufaa bega kwa bega –{" "}
          <Link href={hubHref}>ulinganisho wote wa majukwaa</Link>.
        </>
      ),
    },
    alternativesStrip: {
      title: "Unatafuta mbadala wa jukwaa lako?",
      text: (others) =>
        `Kila ulinganisho unapima jukwaa moja dhidi ya majukwaa mengine ${others}: ada, leverage, bidhaa, uthibitishaji wa utambulisho na nchi ambazo jukwaa linazikubali.`,
    },

    picksEyebrow: "Jibu la haraka",
    picksTitle: "Jukwaa lipi linakufaa zaidi?",
    picks: [
      { label: "Ukwasi (liquidity) mkubwa zaidi", slug: "binance", why: "Open interest kubwa zaidi na kiasi kikubwa zaidi cha biashara ya futures duniani." },
      {
        label: "Ada za chini na options",
        slug: "okx",
        why: "0.08% / 0.10% kwenye spot, 0.03% kwenye options na uthibitisho wa akiba (proof of reserves) kila mwezi.",
      },
      { label: "Biashara amilifu ya futures kwenye simu", slug: "bybit", why: "Injini ya biashara yenye kasi na mojawapo ya app bora zaidi za biashara." },
      { label: "Copy trading", slug: "bitget", why: "Nakili kiotomatiki nafasi za wafanyabiashara wazoefu wa futures." },
      { label: "Altcoin nyingi zaidi", slug: "gate", why: "Sarafu za kidijitali (crypto) 5,400+ na futures za tokeni zisizojulikana sana." },
      { label: "Roboti za biashara", slug: "kucoin", why: "Roboti za biashara (trading bots) bila malipo kwa spot na futures." },
      { label: "Ada za chini zaidi", slug: "mexc", why: "Ada ya maker ya 0% kwenye spot na kwenye mikataba mingi ya futures." },
    ],

    howEyebrow: "Jinsi inavyofanya kazi",
    howTitle: "Tumia msimbo wa rufaa kwa hatua tatu",
    steps: [
      {
        title: "Chagua jukwaa",
        text: "Linganisha ada, leverage na huduma hapo juu, kisha fungua ukurasa wa jukwaa linaloendana na mtindo wako wa biashara.",
      },
      {
        title: "Jisajili kupitia kiungo chetu",
        text: "Rufaa inaunganishwa kiotomatiki. Jisajili kwa barua pepe au namba ya simu kabla ya kufungua akaunti mahali pengine popote.",
      },
      {
        title: "Thibitisha utambulisho, pata zawadi",
        text: "Kamilisha uthibitishaji wa utambulisho (KYC), linda akaunti yako kwa 2FA na angalia zawadi za ukaribisho zinazoonyeshwa kwenye dashibodi yako.",
      },
    ],

    trustEyebrow: `Kwa nini ${site.name}`,
    trustTitle: "Imejengwa kwa ajili ya uaminifu, si mibofyo",
    trustCards: [
      { title: "Ofa zilizothibitishwa", text: "Tunakagua ofa ya watumiaji wapya ya kila jukwaa na tunaorodhesha tu kile unachoweza kupata kweli." },
      {
        title: "Taarifa mpya zenye tarehe",
        text: "Tunakagua upya ada, leverage na leseni mara kwa mara na kila ukurasa unaonyesha tarehe ya ukaguzi wake.",
      },
      { title: "Faragha kwanza", text: "Hakuna pixel za matangazo wala vidakuzi vya matangazo. Takwimu za matumizi hufanya kazi tu ukiziruhusu." },
      { title: "Haraka na wazi", text: "Kurasa nyepesi zinazofunguka papo hapo kwenye simu yoyote – jibu kwanza, maelezo baadaye." },
      { title: "Faida na hasara kwa uwazi", text: "Tunaorodhesha udhaifu, matukio na vizuizi vya kikanda – si matangazo pekee." },
      { title: "Hatari kwanza", text: "Leverage inaweza kufuta amana haraka. Tunalisema hilo wazi kwenye kila ukurasa." },
    ],

    faqEyebrow: "Maswali",
    faqTitle: "Misimbo ya rufaa – maswali yanayoulizwa mara kwa mara",
    faqs: (reviewed) => [
      {
        q: "Msimbo wa rufaa wa jukwaa la crypto ni nini?",
        a: "Msimbo wa rufaa (referral code; pia huitwa msimbo wa mwaliko au referral ID) ni kitambulisho kifupi kinachounganisha akaunti mpya kwenye jukwaa na mtu au tovuti iliyolipendekeza jukwaa hilo. Majukwaa huutumia kuzawadia pande zote mbili – kwa kawaida watumiaji wapya hupata zawadi za ukaribisho au punguzo la ada za biashara, huku mwalikaji akipata sehemu ya ada.",
      },
      {
        q: "Faida za kutumia msimbo wa rufaa ni zipi?",
        a: "Watumiaji wapya wanaojisajili kupitia rufaa hupata ofa ya ukaribisho ya jukwaa – kwa mfano zawadi za rufaa za hadi 250 USDT kwenye Bybit au zawadi za watumiaji wapya za hadi 10,000 USDT kwenye MEXC. Pale mwalikaji anapogawana kamisheni yake, pia hurejeshewa sehemu ya ada zao za biashara, kama 10% kwa mwaka mmoja kwenye Gate. Haigharimu chochote cha ziada.",
      },
      {
        q: "Je, msimbo mmoja wa rufaa unatumika kwa biashara ya spot na futures?",
        a: "Ndiyo. Kwenye Binance, OKX, Bybit, Bitget, Gate, KuCoin na MEXC, rufaa inaunganishwa na akaunti yako, si na bidhaa moja. Usajili mmoja unahusu biashara ya spot na futures – pamoja na margin, options au copy trading pale jukwaa linapozitoa.",
      },
      {
        q: "Je, nitalipa zaidi nikijisajili kwa msimbo wa rufaa?",
        a: "Hapana. Kujisajili kupitia kiungo cha rufaa hakuongezi ada zako kamwe. Kulingana na jukwaa na eneo lako, unaweza hata kupata punguzo la ada au bonasi ya ukaribisho ambayo usingeipata bila rufaa.",
      },
      {
        q: "Je, naweza kuongeza msimbo wa rufaa baada ya kufungua akaunti?",
        a: "Inategemea jukwaa. Binance inakuruhusu kuunganisha msimbo ndani ya siku 30 baada ya kujisajili ikiwa bado hujaweka pesa wala kufanya biashara. MEXC nayo inakuruhusu kuunganisha mwalikaji mwenyewe ndani ya siku 30 baada ya kujisajili. KuCoin ina ombi la “Link Referrer” kwenye Kituo chake cha Msaada. Bybit, OKX na Bitget zinakubali msimbo wakati wa usajili tu, ilhali Gate haijataja njia yoyote ya kuuongeza baadaye. Njia salama ni kutumia kiungo kabla ya kufungua akaunti yako.",
      },
      {
        q: "Jukwaa lipi la crypto lina ada za chini zaidi za futures?",
        a: `Katika ukaguzi wetu wa mwisho (${reviewed}), MEXC ndiyo iliyokuwa na ada za kawaida za futures zilizo chini zaidi: 0% maker na 0.02% taker kwenye BTCUSDT. Binance, OKX na Gate zinatoza 0.02% maker / 0.05% taker katika kiwango cha kawaida, Bybit inatoza 0.02% / 0.055%, huku Bitget na KuCoin zikitoza 0.02% / 0.06%.`,
      },
      {
        q: "Jukwaa lipi ni bora kwa derivatives za crypto?",
        a: "Inategemea unafanya biashara ya nini. Binance ina ukwasi mkubwa zaidi na OKX inachanganya ada za chini na options. Bybit imejengwa kwa ajili ya biashara ya haraka ya mikataba ya perpetual, Bitget inafaa kwa copy trading, Gate kwa futures za altcoin, KuCoin kwa roboti za biashara na MEXC kwa ada za chini zaidi.",
      },
      {
        q: "Je, majukwaa haya yanapatikana Marekani?",
        a: "Kwa sehemu kubwa, hapana. Binance, Bybit, Bitget, Gate, KuCoin na MEXC zinaorodhesha Marekani kama nchi iliyozuiwa au iliyopigwa marufuku, huku OKX ikizuia baadhi ya maeneo ya kisheria nchini Marekani. Upatikanaji pia unatofautiana nchini Uingereza, Kanada na katika Umoja wa Ulaya (EU) – ukurasa wa kila jukwaa unaorodhesha nchi zilizozuiwa kulingana na masharti ya jukwaa lenyewe.",
      },
      {
        q: "Taarifa hizi husasishwa mara ngapi?",
        a: `Tunakagua upya ada, leverage, leseni na takwimu za soko mara kwa mara. Kila ukurasa unaonyesha tarehe ya ukaguzi wake wa mwisho; data ya sasa ilikaguliwa ${reviewed}.`,
      },
    ],
    countryFaq: null,

    ctaTitle: "Pata bonasi yako ya ukaribisho",
    ctaText: "Chagua jukwaa, jisajili kwa rufaa iliyothibitishwa na ufanye biashara ya spot na futures kwa akaunti moja.",
    ctaButton: "Tazama misimbo yote ya rufaa",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    title: (e, shortMonthYear) => `Msimbo wa Rufaa ${e.name} ${e.referralCode} (${shortMonthYear}): ${benefit(e)}`,
    description: (e, monthYear) =>
      `Msimbo wa rufaa wa ${e.name}: ${e.referralCode}. ${benefit(e)} – mahali pa kuuweka, hatua za kujisajili, KYC na ada. Imekaguliwa ${monthYear}.`,
    keywords: (e) => {
      const same = (k: string) => k.toLocaleLowerCase("sw").replace(/[\s-]/g, "");
      const cn = e.referral.codeName;
      // The exchange's own English field name ("Referral ID") follows the name as people type it in English; a Swahili one leads.
      const own = /^[\x20-\x7E]+$/.test(cn) ? `${e.name} ${cn.toLowerCase().replace(/\bid\b/, "ID")}` : `${cn} ${e.name}`;
      return [
        `msimbo wa rufaa ${e.name}`,
        `msimbo wa rufaa ${e.name} ${e.referralCode}`,
        `referral code ya ${e.name}`,
        `${e.name} referral code`,
        `${e.name} referral ID`,
        own,
        `kiungo cha rufaa ${e.name}`,
        `msimbo wa mwaliko ${e.name}`,
        `${e.name} invite code`,
        `kodi ya rufaa ${e.name}`,
        `bonasi ya kujisajili ${e.name}`,
        `jinsi ya kujisajili ${e.name}`,
        `jinsi ya kuweka msimbo wa rufaa ${e.name}`,
        `KYC ${e.name}`,
        `ada za futures ${e.name}`,
        `makato ya ${e.name}`,
      ].filter((k, i, all) => all.findIndex((x) => same(x) === same(k)) === i);
    },
    toc: {
      "code-facts": "Msimbo kwa muhtasari",
      benefits: "Faida zako",
      "use-code": "Jinsi ya kutumia msimbo",
      "how-to": "Jinsi ya kujisajili",
      verification: "Uthibitishaji (KYC)",
      "key-facts": "Taarifa muhimu",
      fees: "Ada",
      about: "Kuhusu jukwaa",
      "pros-cons": "Faida na hasara",
      "best-for": "Linamfaa nani",
      safety: "Usalama na upatikanaji",
      faq: "Maswali na majibu",
      sources: "Vyanzo",
      alternatives: "Mbadala na ulinganisho",
    },
    onThisPage: "Kwenye ukurasa huu",
    crumbHome: "Mwanzo",
    crumbCodes: "Misimbo ya rufaa",
    crumbPage: (e) => `Msimbo wa Rufaa ${e.name}`,

    /* JSON-LD */
    offerName: (e) => `Msimbo wa Rufaa ${e.name} ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}. Rufaa moja inahusu ${list(e.referralCovers)}.`,
    offerCategory: "Usajili kwenye jukwaa la sarafu za kidijitali",
    howToName: (e) => `Jinsi ya kujisajili kwenye ${e.name} kwa msimbo wa rufaa ${e.referralCode}`,
    howToDescription: (e) =>
      `Hatua za kujisajili kwenye ${e.name} kama jukwaa lenyewe linavyozieleza, ikiwemo mahali unapoweka msimbo wa rufaa ${e.referralCode}.`,

    /* Hero */
    updated: (date) => `Imekaguliwa na kusasishwa ${date}`,
    h1: (e) => `Msimbo wa Rufaa ${e.name}: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – pamoja na rufaa moja inayohusu {list(e.referralCovers)}. Hapa utaona unachopata, gharama ya kufanya biashara na
        kama {e.name} ni jukwaa (exchange) linalokufaa.
      </>
    ),
    quickAnswer: "Jibu la haraka",
    highlights: "Mambo muhimu",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futures ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `Leverage ya ${lcLeverage(shortLeverage(e))}`,
      `Masoko ${e.market.markets} ya derivatives`,
      `Tangu ${e.founded}`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `Usajili wako kwenye ${e.name}`,
    appliedByLink: "Rufaa inawekwa kiotomatiki kupitia kiungo hiki.",
    goesToOfficial: (domain) => `Kinakupeleka moja kwa moja kwenye tovuti rasmi ya ${domain}.`,
    codeLabel: "Msimbo wa rufaa",
    noCodeToType: "Huhitaji kuandika msimbo – unawekwa kupitia kiungo",
    officialSite: (domain) => `Tovuti rasmi: ${domain}`,
    yourBenefits: "Faida zako",
    freeNeverRaises: "Bila malipo – kutumia rufaa hakupandishi ada zako kamwe",
    qrLabel: (e) => `Msimbo wa QR: jisajili kwenye app ya ${e.name} kwa rufaa ${e.referralCode}`,
    preferApp: "Unapendelea app?",
    scan: (e) => (
      <>
        Changanua kwa kamera ya simu yako ili kufungua {e.name}
        {e.referralCode ? (
          <>
            {" "}
            – rufaa <strong>{e.referralCode}</strong> imejumuishwa
          </>
        ) : null}
        . Inafanya kazi kwenye iOS na Android.
      </>
    ),
    riskLine: (e, links) => (
      <>
        Biashara kwa leverage ina hatari kubwa. {e.name} haipatikani katika kila nchi – angalia <a href="#safety">upatikanaji</a> au{" "}
        <Link href={links.alternatives}>mbadala wa {e.name}</Link>.
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `Msimbo wa rufaa wa ${e.name} ${e.referralCode} kwa muhtasari`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        Msimbo wa rufaa (referral code; pia huitwa msimbo wa mwaliko) wa {e.name} kwa {monthYear} ni <strong>{e.referralCode}</strong>. Jedwali hili
        linaeleza kwa ufupi kazi ya msimbo, mahali unapowekwa na kile ambacho {e.name} inahitaji kutoka kwa akaunti mpya – kila mstari umekaguliwa {date}{" "}
        dhidi ya kurasa za {e.name} yenyewe.
      </>
    ),
    codeFactsCaption: (e) => `Msimbo wa rufaa wa ${e.name} ${e.referralCode}: taarifa muhimu`,
    codeFacts: (e, date) => [
      [`Msimbo wa rufaa wa ${e.name}`, <strong key="code">{e.referralCode}</strong>],
      [`Jina lake kwenye ${e.name}`, e.referral.codeName],
      ["Faida kwa watumiaji wapya", benefit(e)],
      ["Mahali pa kuuweka", e.referral.whereShort],
      ["Je, unaweza kuongezwa baada ya kujisajili?", e.referral.afterSignupShort],
      ["Unatumika kwa", e.referralCovers.join(", ")],
      ["Uthibitishaji wa utambulisho (KYC)", e.signup.kycShort],
      ["Gharama", "Bila malipo – haupandishi ada zako"],
      ["Ukaguzi wa mwisho", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `Faida zako kwa msimbo wa rufaa wa ${e.name}`,
    benefitsIntro: (e) => (
      <>
        Kujisajili kwa msimbo wa rufaa wa {e.name} <strong>{e.referralCode}</strong> hakukugharimu chochote cha ziada. Hii ndiyo ofa ambayo {e.name}{" "}
        inatoa kwa akaunti mpya kwa sasa. Msimbo huohuo unatumika kwa <strong>{list(e.referralCovers)}</strong> – huhitaji msimbo tofauti kwa spot na
        futures.
      </>
    ),
    offerChecked: (date) => `Ofa ya watumiaji wapya · imekaguliwa ${date}`,
    appliedWhenRegistering: "inatumika unapojisajili kupitia rufaa hii",
    noExtraCost: "Hakuna gharama ya ziada – ada zako za biashara hazipandi kamwe kwa sababu ya rufaa",
    oneReferralCovers: "Rufaa moja inahusu:",
    claimOffer: (e) => `Pata ofa ya ukaribisho ya ${e.name}`,
    tasksTitle: (e) => `Ofa ya ukaribisho ya ${e.name}: kazi na zawadi`,
    tasksCaption: (e) => `Kazi za watumiaji wapya wa ${e.name} na zawadi ya kila kazi`,
    task: "Kazi",
    reward: "Zawadi",
    tasksNote: (e, date) =>
      `Kwa mujibu wa orodha ya ${e.name} ya ${date}. Ofa hutofautiana kati ya nchi na hubadilika mara kwa mara – masharti yanayoonyeshwa kwenye akaunti yako baada ya kujisajili ndiyo yanayotumika.`,

    /* How to use the code */
    useCodeTitle: (e) => `Jinsi ya kutumia msimbo wa rufaa wa ${e.name} ${e.referralCode}`,
    whereToEnter: (e) => `Msimbo wa rufaa wa ${e.name} unawekwa wapi?`,
    forgotCode: "Ulisahau msimbo? Kuuongeza baada ya kujisajili",
    asInvited: "Unachopata ukiwa mwalikwa",
    interfaceNote: (e) => (
      <>
        Majina ya sehemu na vitufe yaliyo ndani ya alama za nukuu yametoka kwenye kiolesura cha Kiingereza cha {e.name} tulichokagua; ukitumia lugha
        nyingine kwenye app au tovuti, majina hayo yanaweza kuwa tofauti.
      </>
    ),

    /* Registration */
    howToTitle: (e) => `Jinsi ya kujisajili kwenye ${e.name} hatua kwa hatua`,
    howToIntro: (e) => (
      <>
        {e.name} inakuruhusu kufungua akaunti kwa kutumia {orList(e.signup.methods)}. Hizi ni hatua kama {e.name} inavyozieleza, pamoja na mahali ambapo
        msimbo wa rufaa <strong>{e.referralCode}</strong> unatumika.
      </>
    ),
    startRegistration: (e) => `Anza usajili wako kwenye ${e.name}`,

    /* Verification */
    kycTitle: (e) => `Uthibitishaji wa utambulisho (KYC) kwenye ${e.name}`,
    verification: "Uthibitishaji",
    minAge: "Umri wa chini",
    documents: "Nyaraka zinazokubaliwa",

    /* Key facts */
    factsTitle: (e) => `${e.name} kwa muhtasari`,
    founded: "Ilianzishwa",
    headquarters: "Makao makuu",
    futuresFees: "Ada za futures (maker / taker)",
    spotFees: "Ada za spot (maker / taker)",
    maxLeverage: "Leverage ya juu zaidi",
    assets: "Sarafu",
    openInterest: "Open interest",
    volume24h: "Kiasi cha biashara ya derivatives (saa 24)",
    users: "Watumiaji",
    regulation: "Udhibiti",
    factsNote: (date) =>
      `Open interest (jumla ya mikataba iliyo wazi), kiasi cha biashara na idadi ya masoko: orodha ya viwango vya derivatives ya CoinMarketCap, ${date}. Ada: kiwango cha kawaida siku ya ukaguzi.`,

    /* Fees */
    feesTitle: (e) => `Ada za ${e.name} zimefafanuliwa`,
    feesIntro: (e) =>
      `${e.name} inatumia mfumo wa maker / taker: oda zinazoongeza ukwasi (liquidity) kwenye kitabu cha oda (limit orders) hulipa ada ya maker, huku oda zinazoondoa ukwasi (market orders) zikilipa ada ya taker. Kadiri kiasi chako cha biashara cha siku 30 au mali unazoshikilia zinavyoongezeka, ndivyo viwango vinavyoshuka.`,
    market: "Soko",
    maker: "Maker",
    taker: "Taker",
    futuresRow: "Futures / perpetual",
    spotRow: "Spot",
    feesNote: (e, date) => `Viwango vya kawaida (bila VIP) kama ${e.name} inavyovichapisha, vimekaguliwa ${date}.`,
    funding: "Funding rate za mikataba ya perpetual hulipwa kati ya wafanyabiashara wenyewe, si kwa jukwaa.",
    liveSchedule: (e) => `Tazama jedwali la sasa la ada za ${e.name}`,
    feesCompare: (e, others, links) => (
      <>
        Viwango hivi vinalinganaje na vya majukwaa mengine? <Link href={`${links.alternatives}#fees`}>Ulinganisho wetu wa mbadala wa {e.name}</Link>{" "}
        unaweka ada za {e.name} kando ya ada za {list(others)}.
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `Kuhusu ${e.name}`,
    products: "Bidhaa",
    prosConsTitle: (e) => `Faida na hasara za ${e.name}`,
    pros: "Faida",
    cons: "Hasara",
    bestForTitle: (e) => `${e.name} inamfaa nani zaidi?`,
    openAccount: (e) => `Fungua akaunti yako ya ${e.name}`,
    notAMatch: (e, count, links, pairs) => (
      <>
        Haikufai? Tazama <Link href={links.alternatives}>majukwaa mbadala {count} bora ya {e.name}</Link> na kile ambacho kila moja linafaa zaidi, au
        linganisha {e.name} ana kwa ana: <Link href={pairs[0].href}>{pairs[0].label}</Link> na <Link href={pairs[1].href}>{pairs[1].label}</Link>.
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `Je, ${e.name} ni salama?`,
    availability: "Upatikanaji:",
    closedWhereYouLive: (e, links) => (
      <>
        Je, {e.name} haipatikani unakoishi? <Link href={`${links.alternatives}#countries`}>Jedwali la nchi kwenye ukurasa wetu wa mbadala wa {e.name}</Link>{" "}
        linaonyesha ni majukwaa yapi mengine yanayokubali nchi yako.
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `Msimbo wa rufaa wa ${e.name} na usajili – maswali na majibu`,
    faqIntro: (e, count) =>
      `Maswali ${count} kuhusu msimbo wa rufaa wa ${e.name} ${e.referralCode}, kufungua na kuthibitisha akaunti, ofa ya ukaribisho na ada.`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "Vyanzo: taarifa hizi zinatoka wapi",
    sourcesIntro: (e, date) =>
      `Kila kitu kilicho kwenye ukurasa huu kuhusu msimbo wa rufaa, usajili, uthibitishaji, ofa ya ukaribisho na ada tulikisoma kwenye tovuti na kituo cha msaada cha ${e.name} yenyewe mnamo ${date}. Majukwaa hubadilisha ofa na ada bila kutoa taarifa na huonyesha masharti tofauti katika nchi tofauti, kwa hiyo kurasa zilizo hapa chini ndizo zenye kauli ya mwisho.`,

    /* Alternatives */
    alternativesTitle: (e) => `Mbadala wa ${e.name}`,
    alternativesIntro: (e, count, links) => (
      <>
        Huna uhakika kama {e.name} inakufaa? Haya ndiyo majukwaa mbadala yanayokaribiana nayo zaidi, kila moja likiwa na usajili wake wa rufaa.{" "}
        <Link href={links.alternatives}>Ulinganisho kamili wa mbadala wa {e.name}</Link> unapima majukwaa yote {count} dhidi ya {e.name} kwa ada, leverage,
        bidhaa, uthibitishaji na upatikanaji kwa nchi.
      </>
    ),
    headToHeadTitle: (e) => `${e.name} ana kwa ana`,
    headToHeadIntro: (e) =>
      `Unachagua kati ya ${e.name} na jukwaa jingine moja? Kila jozi ina ulinganisho wake wa ada, leverage, bidhaa, nchi na ofa za rufaa:`,
    compareAll: (e, count) => `Mbadala wa ${e.name}: linganisha majukwaa yote ${count}`,
    allComparisons: "Ulinganisho wote wa majukwaa →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>Tahadhari ya hatari:</strong> Derivatives za crypto ni bidhaa tata. Leverage inazidisha faida na hasara; unaweza kupoteza margin yako
        yote ndani ya dakika chache. Ukurasa huu ni kwa ajili ya taarifa tu na si ushauri wa kifedha. Tunaweza kupata kamisheni ukijisajili kupitia viungo
        vyetu – angalia <Link href={disclosureHref}>Ufichuzi wa ushirika</Link>.
      </>
    ),
    joinTitle: (e) => `Jiunge na ${e.name} ndani ya dakika 3`,
    joinText: (e) => `${benefit(e)}. Rufaa moja kwa spot na futures.`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `Msimbo wa rufaa wa ${name}`,
      signup: (name) => `Kujisajili na kuthibitisha akaunti kwenye ${name}`,
      bonus: (name) => `Bonasi ya ukaribisho na zawadi za ${name}`,
      fees: (name) => `Ada na biashara kwenye ${name}`,
      safety: () => "Usalama na upatikanaji",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `Msimbo wa rufaa wa ${e.name} ni upi?`,
          a: `Msimbo wa rufaa wa ${e.name} ni ${e.referralCode}. ${r.apply} ${e.name} yenyewe inauita ${r.codeName}.`,
        },
        { topic: "referral", q: `Msimbo wa rufaa wa ${e.name} unawekwa wapi?`, a: r.whereToEnter },
        { topic: "referral", q: `Je, naweza kuongeza msimbo wa rufaa wa ${e.name} baada ya kujisajili?`, a: r.afterSignup },
        { topic: "referral", q: `Msimbo wa rufaa wa ${e.name} ${e.referralCode} unanipa nini?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `Je, msimbo wa rufaa wa ${e.name} unatumika kwa spot na futures?`,
          a: `Ndiyo. Rufaa inaunganishwa na akaunti yako ya ${e.name}, si na bidhaa moja, kwa hiyo usajili mmoja kwa ${e.referralCode} unahusu ${list(e.referralCovers)}.`,
        },
        {
          topic: "referral",
          q: `Je, kutumia msimbo wa rufaa wa ${e.name} kuna gharama yoyote?`,
          a: `Hapana. Kuweka ${e.referralCode} ni bure na hakupandishi ada zako za biashara. ${e.name} inalipia mpango wake wa rufaa kutoka kwenye mapato yake yenyewe ya ada.`,
        },
        {
          topic: "signup",
          q: `Jinsi ya kujisajili kwenye ${e.name}?`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${asSentence(st.title)}`).join(" ")} Unaweza kujisajili kwa kutumia ${orList(s.methods)}.`,
        },
        { topic: "signup", q: `Je, ${e.name} inahitaji uthibitishaji wa utambulisho (KYC)?`, a: s.kyc },
        { topic: "signup", q: `${e.name} inakubali nyaraka gani kwa uthibitishaji?`, a: s.documents },
        { topic: "signup", q: `Lazima niwe na umri gani ili kufungua akaunti ya ${e.name}?`, a: s.minAge },
        {
          topic: "fees",
          q: `Ada za biashara za ${e.name} ni zipi?`,
          a: `Katika kiwango cha kawaida, ${e.name} inatoza ${e.spotFees.maker} maker / ${e.spotFees.taker} taker kwenye spot na ${e.futuresFees.maker} maker / ${e.futuresFees.taker} taker kwenye mikataba ya perpetual.${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `${e.name} haipatikani katika nchi zipi?`, a: e.restricted },
      ];
    },
  },
};
