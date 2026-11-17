/**
 * The head-to-head pages ("/sw/<a>-vs-<b>") and the comparison hub ("/sw/linganisha") in Swahili.
 * Same keys as `./en.tsx`, written natively for readers in Kenya, Tanzania and East Africa.
 *
 * Wording: "jukwaa" / "majukwaa", "ada", "msimbo wa rufaa", spot, futures, leverage, maker / taker in English; the reader
 * is addressed in the singular ("unaweza", "chagua"), the site speaks as "sisi". The pages call themselves "ulinganisho
 * wa ana kwa ana", the hub "Ulinganisho wa majukwaa"; the better value of a row is "Mbele", a tie "Sare". "vs" stays.
 * A bare exchange name is class 9 ("Binance inatoza", "Binance na OKX zinatoza"); possessives put the noun first
 * ("ada za Binance"). In a country: "nchini Marekani", but "huko Hong Kong".
 * Generated dates: `prettyDate` gives "16 Novemba 2026", the short month of a title "Nov 2026".
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

const locale = "sw";
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

/** Names that keep their capital when a text from the data continues a sentence. */
const keepCapital = new Set(["Binance", "OKX", "Bybit", "Bitget", "Gate", "KuCoin", "MEXC"]);
/**
 * A text from the data inside a sentence: lower-cases the first letter of a common Swahili first word
 * ("Ndiyo –" → "ndiyo –", "Hadi" → "hadi", "Watumiaji milioni 320+" → "watumiaji milioni 320+", "Unataka" → "unataka").
 * Exchange names and abbreviations ("Gate haijataja …", "KYC", "BTC", "“Referral ID") keep their capital.
 */
const lcFirst = (s: string) => {
  const first = s.split(/[\s,.:;()–]/)[0];
  if (!first || keepCapital.has(first) || first.slice(1) !== first.slice(1).toLowerCase()) return s;
  return s.charAt(0).toLowerCase() + s.slice(1);
};
/** "Watumiaji milioni 320+ waliosajiliwa (kwa mujibu wa Binance)" / "Sarafu 390, jozi 509 za spot (Bybit API)" → without the bracket. */
const withoutSource = (s: string) => s.replace(/\s*\((?:kwa mujibu wa [^()]*|[^()]*\bAPI)\)/, "");
/** "Hadi 150x (…)" inside a sentence → "hadi 150x (…)". */
const lowerUpTo = (s: string) => s.replace(/^Hadi\b/, "hadi");
/** A data text that code closes itself, without a final full stop (`pick`, `chooseIf`). */
const bare = (s: string) => s.trim().replace(/\.$/, "");
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
/** "in <country>": "nchini Marekani", but "huko Hong Kong". */
const hkName = countryList.find((c) => c.key === "hk")?.name ?? "Hong Kong";
const inCountryName = (name: string) => (name === hkName ? `huko ${name}` : `nchini ${name}`);
/** "kipengele 1 kiko sare" / "vipengele 3 viko sare"; `ing` gives the "-kiwa" form after "huku". */
const tieText = (n: number, ing = false) =>
  n === 1 ? (ing ? "kipengele 1 kikiwa sare" : "kipengele 1 kiko sare") : ing ? `vipengele ${n} vikiwa sare` : `vipengele ${n} viko sare`;
const leverageRisk = "Leverage kubwa huongeza sana hatari ya liquidation.";
const regionalNote = "Jukwaa la kikanda kwa kawaida lina bidhaa, ada na vikomo vyake.";

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `${e.name} iko mbele katika ${joinList(rows.map((r) => r.topic))}` : `${e.name} haiko mbele katika kipengele chochote`;
  return `Si ${a.name} wala ${b.name} iliyo bora katika kila kipengele. Kati ya vipengele ${s.measurable} vinavyopimika katika ulinganisho huu, ${a.name} iko mbele katika ${s.a.length} na ${b.name} katika ${s.b.length}${s.tie.length ? `, huku ${tieText(s.tie.length, true)}` : ""}. ${lead(a, s.a)}. ${lead(b, s.b)}. Chagua ${a.name} ikiwa ${lcFirst(bare(altInfo(a).chooseIf[0]))}. Chagua ${b.name} ikiwa ${lcFirst(bare(altInfo(b).chooseIf[0]))}.`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb)
    return `${a.name} na ${b.name} zinatoa leverage ya juu zaidi ileile: ${a.name} ${lowerUpTo(a.maxLeverage)}, ${b.name} ${lowerUpTo(b.maxLeverage)}.`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `${hi.name} inatoa leverage ya juu zaidi – ${lowerUpTo(hi.maxLeverage)} – ikilinganishwa na ${lowerUpTo(lo.maxLeverage)} kwenye ${lo.name}.`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `Kwenye orodha ya viwango vya derivatives ya CoinMarketCap (${prettyDate(site.marketDataDate)}), ${a.name} ilikuwa na open interest ya ${formatBn(a.market.openInterestBn)} katika masoko ${a.market.markets}; ${b.name} ilikuwa na ${formatBn(b.market.openInterestBn)} katika masoko ${b.market.markets}. ${deeper.name} ina soko lenye kina zaidi, jambo ambalo kwa kawaida humaanisha spread ndogo zaidi kwa oda kubwa.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length
      ? `${a.name} inatoa ${joinList(notOffered.map((f) => f.noun))}, ilhali ${b.name} haitoi ${verb(notOffered, "bidhaa hiyo", "bidhaa hizo")}.`
      : "",
    notFound.length ? `${a.name} inatoa ${joinList(notFound.map((f) => f.noun))}; kwenye tovuti ya ${b.name} yenyewe hatukupata bidhaa ya aina hiyo.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${e.name} haipatikani kwa ${c.residents}${extra}`;
  if (status === "regional") return `${e.name} inawahudumia ${c.residents} kupitia jukwaa la kikanda${extra}`;
  if (status === "partial") return `${e.name} inaizuia ${c.name} kwa sehemu${extra}`;
  return `${e.name} haiorodheshi ${c.name} miongoni mwa nchi zilizozuiwa`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("sw").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. Orodha za nchi hubadilika; nchi kutokuwa kwenye orodha si hakikisho kwamba kila bidhaa inapatikana huko – masharti ya jukwaa lenyewe ndiyo yanayoamua.`;

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
      ? "zote mbili"
      : has(a, key)
        ? `${a.name} pekee`
        : has(b, key)
          ? `${b.name} pekee`
          : "haionekani kwenye tovuti ya jukwaa lolote kati ya haya mawili";
  const noTokenDiscount = "Hakuna punguzo kama hilo lililochapishwa.";
  const noFund = "Hakuna mfuko wa ulinzi uliotajwa.";
  const noMica = "haitaji kampuni yoyote iliyoidhinishwa chini ya MiCA kwenye kurasa zake";

  const verdict: Faq[] = [
    { q: `${a.name} au ${b.name}: ipi ni bora?`, a: versusAnswer(a, b, s) },
    {
      q: `Tofauti kuu kati ya ${a.name} na ${b.name} ni ipi?`,
      a: `${bare(ia.pick)}. ${bare(ib.pick)}.${aheadA.length ? ` Faida za ${a.name} zilizo wazi zaidi na zinazopimika: ${aheadA.slice(0, 2).map(lcFirst).join("; ")}.` : ""}${aheadB.length ? ` Za ${b.name}: ${aheadB.slice(0, 2).map(lcFirst).join("; ")}.` : ""}`,
    },
    {
      q: `Je, ${a.name} ni kubwa kuliko ${b.name}?`,
      a: `Kwenye orodha ya viwango vya derivatives ya CoinMarketCap (${marketDate}), ${a.name} ilikuwa na open interest ya ${formatBn(a.market.openInterestBn)} na kiasi cha biashara cha saa 24 cha ${formatBn(a.market.volume24hBn)}; ${b.name} ilikuwa na ${formatBn(b.market.openInterestBn)} na ${formatBn(b.market.volume24hBn)}. Kwa takwimu zao wenyewe, ${a.name} ina ${lcFirst(withoutSource(a.users))} na ${b.name} ina ${lcFirst(withoutSource(b.users))}.`,
    },
    {
      q: `${a.name} au ${b.name}: ipi ni bora kwa wanaoanza?`,
      a: `Kwa akaunti ya kwanza mambo matatu ni muhimu: njia rahisi ya kununua crypto, nafasi ya kufanya mazoezi na ada za chini. Ununuzi kwa kadi au uhamisho wa benki: ${state("fiat")}. Biashara ya demo: ${state("demoTrading")}. Copy trading: ${state("copyTrading")}. ${feeSentence(a, b, "spot")} Uthibitishaji wa utambulisho – ${a.name}: ${lcFirst(a.signup.kycShort)}; ${b.name}: ${lcFirst(b.signup.kycShort)}.`,
    },
    {
      q: `${a.name} au ${b.name}: ipi ni bora kwa biashara ya futures?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${a.name} au ${b.name}: ipi ina ada za chini?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} Hivi ni viwango vya kawaida (bila VIP); ngazi za VIP na tokeni za majukwaa yenyewe huvishusha zaidi.`,
    },
    {
      q: `Je, ${a.name} na ${b.name} zinatoa punguzo ukilipa ada kwa tokeni zao?`,
      a: `${a.name}: ${a.tokenDiscount || noTokenDiscount} ${b.name}: ${b.tokenDiscount || noTokenDiscount}`,
    },
    { q: `${a.name} au ${b.name}: ipi inatoa leverage ya juu zaidi?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${a.name} au ${b.name}: ipi ina sarafu nyingi zaidi?`,
      a: `Kwa takwimu zao wenyewe, ${a.name} inaorodhesha ${lcFirst(withoutSource(a.assets))} na ${b.name} ${lcFirst(withoutSource(b.assets))}. Majukwaa huhesabu kwa njia tofauti – baadhi huhesabu sarafu, mengine jozi za biashara – kwa hivyo takwimu hizi mbili hazilinganishiki moja kwa moja.`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `Je, naweza kutumia ${a.name} au ${b.name} ${inCountryName(c.name)}?`, a: countryPairAnswer(a, b, c) })),
    {
      q: `Je, ${a.name} na ${b.name} zinahitaji KYC?`,
      a: `Ndiyo, zote mbili zinawataka watumiaji wapya kuthibitisha utambulisho wao. ${a.name}: ${lcFirst(a.signup.kycShort)}. ${b.name}: ${lcFirst(b.signup.kycShort)}. Hakuna hata moja kati ya hizo inayofaa kwa biashara bila uthibitishaji.`,
    },
    {
      q: `${a.name} au ${b.name}: ipi ni salama zaidi?`,
      a: `Hakuna jukwaa la kati (centralised exchange) lisilo na hatari, kwa hivyo ulinganisho wa haki ni kile ambacho kila jukwaa linachapisha. ${a.name}: ${a.regulation}. Uthibitisho wa akiba – ${ia.reserves}. ${ia.fund ? `${ia.fund}.` : noFund} ${b.name}: ${b.regulation}. Uthibitisho wa akiba – ${ib.reserves}. ${ib.fund ? `${ib.fund}.` : noFund} Kwenye jukwaa lolote kati ya haya mawili, weka tu pesa unazotumia kufanya biashara kwa sasa.`,
    },
    {
      q: `Je, ${a.name} na ${b.name} zinasimamiwa chini ya MiCA katika Umoja wa Ulaya?`,
      a: `${a.name}: ${ia.mica ? `ndiyo – ${ia.mica}` : noMica}. ${b.name}: ${ib.mica ? `ndiyo – ${ib.mica}` : noMica}. ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `Hakuna kati ya bidhaa ${featureList.length} tunazolinganisha: kila bidhaa ambayo ${x.name} inaonyesha kwenye tovuti yake, ${y.name} pia inaionyesha.`;
  const products: Faq[] = [
    { q: `${a.name} inatoa nini ambacho ${b.name} haitoi?`, a: onlyA || nothing(a, b) },
    { q: `${b.name} inatoa nini ambacho ${a.name} haitoi?`, a: onlyB || nothing(b, a) },
    {
      q: `Je, ${a.name} na ${b.name} zina copy trading, roboti za biashara, options na biashara ya demo?`,
      a: `Copy trading: ${state("copyTrading")}. Roboti za biashara: ${state("tradingBots")}. Options: ${state("options")}. Biashara ya demo: ${state("demoTrading")}.${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` Pale ambapo jukwaa moja pekee limetajwa, hatukupata ukurasa wa bidhaa hiyo kwenye tovuti ya jukwaa lingine mnamo ${prettyDate(site.lastReviewed)}.` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `Misimbo ya rufaa ya ${a.name} na ${b.name} ni ipi?`,
      a: `${a.name}: ${a.referralCode} – ${lcFirst(a.referral.whereShort)}. ${b.name}: ${b.referralCode} – ${lcFirst(b.referral.whereShort)}. Misimbo yote miwili ni bure kutumia na haiongezi ada zako za biashara.`,
    },
    {
      q: `${a.name} au ${b.name}: ipi ina bonasi bora ya kujisajili?`,
      a: `${a.name}: ${lcFirst(offer(a))}. ${b.name}: ${lcFirst(offer(b))}. Zawadi za ukaribisho kwenye majukwaa yote mawili hutegemea masharti kama uthibitishaji wa utambulisho, kuweka pesa au kiasi cha biashara. Pia hutofautiana kulingana na nchi, kwa hivyo linganisha masharti, si kiasi kinachotangazwa.`,
    },
    {
      q: `Je, naweza kuweka msimbo wa rufaa baadaye kwenye ${a.name} au ${b.name}?`,
      a: `${a.name}: ${lcFirst(a.referral.afterSignupShort)}. ${b.name}: ${lcFirst(b.referral.afterSignupShort)}. Njia salama kwenye majukwaa yote mawili ni kujisajili kupitia kiungo cha rufaa.`,
    },
    {
      q: `Je, naweza kutumia ${a.name} na ${b.name} kwa wakati mmoja?`,
      a: "Ndiyo. Ni kampuni tofauti, kwa hivyo akaunti kwenye moja haiathiri akaunti kwenye nyingine. Wafanyabiashara wengi huweka pesa kwenye majukwaa mawili. Ngazi za ada, rufaa na zawadi zimefungamana na kila akaunti na hazihamii jukwaa jingine.",
    },
    {
      q: `Jinsi ya kuhamisha crypto kutoka ${a.name} kwenda ${b.name}?`,
      a: `1. Fungua akaunti ya ${b.name} kwa msimbo wa rufaa ${b.referralCode} na ukamilishe uthibitishaji wa utambulisho. 2. Funga nafasi zilizo wazi za futures na margin kwenye ${a.name} – nafasi haziwezi kuhamishwa kati ya majukwaa. 3. Kwenye ${b.name}, nakili anwani ya kuweka crypto ya sarafu na mtandao (network) unaotaka kutumia. 4. Toa crypto kutoka ${a.name} kwenda anwani hiyo kwenye mtandao uleule; tuma kiasi kidogo cha majaribio kwanza: uhamisho kwenye mtandao usio sahihi unaweza kupotea. Hatua hizi hizi zinafanya kazi pia upande mwingine.`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} au ${b.name}: ipi ni bora?`, faqs: verdict },
    { id: "fees", title: "Ada, leverage na sarafu", faqs: fees },
    { id: "countries", title: "Nchi, KYC na usalama", faqs: countries },
    { id: "products", title: "Bidhaa", faqs: products },
    { id: "referral", title: "Misimbo ya rufaa na kuhama kati ya majukwaa", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi, oi, mica }: HubFacts) =>
  `${names(lowF)} ${verb(lowF, "ina", "zina")} ada za kawaida za futures zilizo chini zaidi (${feePair(lowF[0].futuresFees)} maker / taker), ${names(hi)} ${verb(hi, "ina", "zina")} leverage ya juu zaidi (${leverageOf(hi[0])}x) na ${names(oi)} ${verb(oi, "ina", "zina")} soko la derivatives lenye kina zaidi, lenye open interest (jumla ya mikataba iliyo wazi) ya ${formatBn(oi[0].market.openInterestBn)}. ${names(mica)} ${verb(mica, "inataja", "zinataja")} jukwaa lililoidhinishwa chini ya MiCA kwa wakazi wa Eneo la Kiuchumi la Ulaya (EEA). Jukwaa lipi linakufaa zaidi hutegemea majukwaa mawili unayoamua kati yake – chagua jozi hiyo hapa chini.`;

function hubFaqs({ all, ranked, lowF, lowS, hi, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "Jukwaa la crypto lenye ada za chini zaidi ni lipi?",
      a: `Kwenye kiwango cha kawaida, ${names(lowF)} ${verb(lowF, "ina", "zina")} ada za futures zilizo chini zaidi – ${feePair(lowF[0].futuresFees)} (maker / taker) – na ${names(lowS)} ${verb(lowS, "ina", "zina")} ada za spot zilizo chini zaidi – ${feePair(lowS[0].spotFees)}. Majukwaa mengine: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} ${feePair(e.futuresFees)} kwenye futures na ${feePair(e.spotFees)} kwenye spot`)
        .join("; ")}. Ngazi za VIP na tokeni za majukwaa yenyewe hushusha viwango hivi zaidi.`,
    },
    {
      q: "Jukwaa la crypto lenye leverage ya juu zaidi ni lipi?",
      a: `${names(hi)}: ${lowerUpTo(hi[0].maxLeverage)}. Majukwaa mengine: ${ranked
        .filter((e) => !hi.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join(", ")}. Leverage kubwa huongeza sana hatari ya liquidation (nafasi kufungwa kwa lazima).`,
    },
    {
      q: "Soko la futures lenye kina zaidi liko kwenye jukwaa lipi?",
      a: `Kwa kipimo cha open interest kwenye orodha ya viwango vya derivatives ya CoinMarketCap (${marketDate}): ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join(", ")}. Soko lenye kina zaidi kwa kawaida humaanisha spread ndogo zaidi kwa oda kubwa.`,
    },
    {
      q: "Majukwaa yenye jukwaa la EEA lililoidhinishwa chini ya MiCA ni yapi?",
      a: `${joinList(mica.map((e) => `${e.name} (${altInfo(e).mica})`))}. ${names(noMica)} ${verb(noMica, "haitaji", "hazitaji")} kampuni yoyote iliyoidhinishwa chini ya MiCA kwenye kurasa ${verb(noMica, "zake", "zao")}. ${regionalNote}`,
    },
    {
      q: "Majukwaa yanayoniruhusu kuweka msimbo wa rufaa baada ya kujisajili ni yapi?",
      a: `${later.map((e) => `${e.name}: ${lcFirst(e.referral.afterSignupShort)}`).join(". ")}. Kwenye ${names(signupOnly)}, msimbo huhesabiwa tu wakati wa usajili au hakuna njia iliyoelezwa ya kuuweka baadaye – njia salama kila mahali ni kujisajili kupitia kiungo cha rufaa.`,
    },
    {
      q: "Ulinganisho huu hufanywa vipi?",
      a: `Kila takwimu inasomwa kwenye tovuti au kituo cha msaada cha jukwaa lenyewe – majedwali ya ada, masharti, orodha za nchi zilizozuiwa, kurasa za bidhaa – na kila ukurasa unaorodhesha vyanzo vyake. Open interest, kiasi cha biashara na idadi ya masoko ya derivatives vinatoka kwenye orodha ya viwango vya derivatives ya CoinMarketCap. Jukwaa lipi liko mbele katika kipengele fulani husomwa moja kwa moja kutoka kwenye takwimu hizo; hatuna orodha yetu wenyewe ya kupanga majukwaa. Ukaguzi wa sasa ni wa ${date}.`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const sw: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row after "iko mbele katika" ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "Ada za futures (maker / taker)", topic: "ada za futures" },
    spotFees: { label: "Ada za spot (maker / taker)", topic: "ada za spot" },
    leverage: { label: "Leverage ya juu zaidi", topic: "leverage ya juu zaidi" },
    openInterest: { label: "Open interest ya derivatives", topic: "open interest (jumla ya mikataba iliyo wazi)" },
    volume: { label: "Kiasi cha biashara ya derivatives (saa 24)", topic: "kiasi cha biashara ya derivatives cha saa 24" },
    markets: { label: "Masoko ya derivatives", topic: "idadi ya masoko ya derivatives" },
    users: { label: "Watumiaji (takwimu za jukwaa)", topic: "idadi ya watumiaji" },
    assets: { label: "Mali zilizoorodheshwa (takwimu za jukwaa)", topic: "" },
    founded: { label: "Mwaka wa kuanzishwa", topic: "" },
    products: { label: (compared) => `Bidhaa zilizopatikana (kati ya ${compared} zilizolinganishwa)`, topic: "wigo wa bidhaa" },
    countries: { label: (compared) => `Nchi zilizozuiwa (kati ya ${compared} zilizolinganishwa)`, topic: "upatikanaji katika nchi" },
    mica: { label: "Jukwaa la EEA lililoidhinishwa chini ya MiCA", topic: "idhini ya MiCA" },
    kyc: { label: "Uthibitishaji wa utambulisho (KYC)", topic: "" },
    addLater: { label: "Kuweka msimbo wa rufaa baadaye?", topic: "uwezekano wa kuweka msimbo wa rufaa baadaye" },
    offer: { label: "Ofa ya watumiaji wapya", topic: "" },
    reserves: { label: "Uthibitisho wa akiba", topic: "" },
    fund: { label: "Mfuko wa ulinzi", topic: "" },
  },
  countOf: (count, of) => `${count} kati ya ${of}`,
  noMica: "Hakuna lililotajwa",
  noFund: "Hakuna uliotajwa",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    title: (a, b, shortMonthYear) => `${a.name} vs ${b.name} (${shortMonthYear}): Ada, leverage, KYC na bonasi`,
    description: (a, b, monthYear) =>
      `${a.name} vs ${b.name}: ada za futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, leverage ${leverageOf(a)}x vs ${leverageOf(b)}x, bidhaa, nchi, KYC na misimbo ya rufaa – takwimu rasmi, ${monthYear}.`,
    keywords: (a, b, former) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${a.name} au ${b.name}`,
      `${a.name} au ${b.name} ipi ni bora`,
      `ada za ${a.name} na ${b.name}`,
      `futures ${a.name} vs ${b.name}`,
      `tofauti kati ya ${a.name} na ${b.name}`,
      `je ${a.name} ni bora kuliko ${b.name}`,
      `je ${b.name} ni bora kuliko ${a.name}`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],

    crumbHome: "Mwanzo",
    crumbHub: "Ulinganisho wa majukwaa",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name} ndilo jukwaa lililojulikana zamani kama ${formerName}.`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${a.name} na ${b.name} zote ni majukwaa ya kati (centralised exchanges) yanayotoa biashara ya spot na futures zenye leverage; zote mbili pia zina mpango wa rufaa kwa watumiaji wapya. ${bare(pickA)}. ${bare(pickB)}.${formerNote ? ` ${formerNote}` : ""} Ulinganisho huu wa ana kwa ana unaweka bega kwa bega ada, leverage, bidhaa, upatikanaji katika nchi, masharti ya uthibitishaji na ofa za rufaa za majukwaa haya mawili – kila takwimu imesomwa kwenye tovuti za majukwaa yenyewe mnamo ${date}.`,

    toc: {
      "at-a-glance": "Kwa muhtasari",
      verdict: "Lipi la kuchagua",
      fees: "Ada",
      leverage: "Leverage na kina cha soko",
      products: "Bidhaa",
      countries: "Nchi",
      kyc: "Uthibitishaji (KYC)",
      safety: "Usalama na usimamizi",
      referral: "Misimbo ya rufaa",
      "pros-cons": "Faida na hasara",
      faq: "Maswali ya mara kwa mara",
      sources: "Vyanzo",
    },
    onThisPage: "Kwenye ukurasa huu",

    /* Hero */
    updated: (date) => `Imekaguliwa na kusasishwa ${date}`,
    h1: (a, b) => `${a.name} vs ${b.name}: Ulinganisho wa ada, leverage na usalama`,
    quickAnswer: "Jibu la haraka",
    keyFigures: "Takwimu kuu",
    chips: (a, b, oiA, oiB) => [
      `Futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `Leverage ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `Open interest ${oiA} vs ${oiB}`,
    ],
    boxTitle: "Jisajili kwa msimbo wa rufaa",
    boxNote: "Misimbo yote miwili ni bure na haiongezi ada zako kamwe.",
    codeLabel: (e) => `Msimbo wa rufaa wa ${e.name}`,
    boxRisk: () => (
      <>
        Biashara yenye leverage ina hatari kubwa. Hakuna kati ya majukwaa haya mawili linalopatikana katika kila nchi – angalia <a href="#countries">nchi</a>.
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name} kwa muhtasari`,
    glanceText: (a, b, s) =>
      `Iwe unatafuta ${a.name} vs ${b.name} au ${b.name} vs ${a.name}, ulinganisho ni uleule. Kati ya vipengele ${s.measurable} vinavyoweza kuamuliwa kwa takwimu, ${a.name} iko mbele katika ${s.a.length} na ${b.name} katika ${s.b.length}${s.tie.length ? `; ${tieText(s.tie.length)}` : ""}. Vipengele hivi havina uzito sawa – kwa mfanyabiashara anayefanya biashara mara kwa mara, ada za chini ni muhimu kuliko orodha ndefu ya sarafu – kwa hivyo zingatia safu inayolingana na jinsi unavyofanya biashara.`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}: ada, leverage, ukubwa wa soko, bidhaa, nchi, uthibitishaji na masharti ya rufaa`,
    compared: "Kipengele",
    ahead: "Mbele",
    level: "Sare",
    glanceNote: (marketDate, date) =>
      `Ada: kiwango cha kawaida (bila VIP). Open interest, kiasi cha biashara na masoko: orodha ya viwango vya derivatives ya CoinMarketCap, ${marketDate}. ‘–’ inamaanisha haiwezekani kusema ipi kati ya thamani hizo mbili iko mbele. Kila kitu kingine kimesomwa kwenye tovuti za majukwaa yenyewe mnamo ${date}.`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} au ${b.name}: uchague ipi?`,
    verdictText:
      "Hakuna mshindi wa jumla – kila jukwaa limejengwa kwa aina tofauti ya mfanyabiashara. Visanduku viwili hapa chini vinaonyesha kila jukwaa linamfaa nani na pale lilipo mbele ya jingine kwa vipimo.",
    bestFor: (role) => `Bora kwa: ${role}`,
    chooseIf: (e) => `Chagua ${e.name} ikiwa …`,
    aheadOf: (e, other) => `Pale ${e.name} ilipo mbele ya ${other.name}`,
    noAdvantage: "Hakuna faida inayopimika katika vipengele tunavyolinganisha.",
    thinkTwice: "Fikiria mara mbili ikiwa …",
    codeButton: (e) => `Msimbo wa Rufaa ${e.name} ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `Ada: ${a.name} vs ${b.name}`,
    feesModel:
      "Zote mbili zinatumia mfumo wa maker / taker: oda za limit zinazoongeza ukwasi (liquidity) hulipa ada ya maker; oda zinazochukua ukwasi hulipa ada ya taker.",
    feesCaption: (a, b) => `Ada za kawaida ambazo ${a.name} na ${b.name} zinatoza kwenye spot na futures`,
    exchange: "Jukwaa",
    futuresMaker: "Maker (futures)",
    futuresTaker: "Taker (futures)",
    spotMaker: "Maker (spot)",
    spotTaker: "Taker (spot)",
    otherMarkets: "Masoko mengine (maker / taker)",
    feesNote: (date) => `Viwango vya kawaida (bila VIP) ambavyo kila jukwaa limechapisha, vimekaguliwa ${date}. Ada hubadilika – thibitisha kwenye jukwaa kabla ya kufanya biashara.`,
    tokenTitle: "Punguzo kwa tokeni na masharti ya ziada",
    noTokenDiscount: "Hakuna punguzo lililochapishwa la kulipa ada kwa tokeni ya jukwaa.",

    /* Leverage */
    leverageTitle: "Leverage na kina cha soko",
    leverageRisk: "Leverage kubwa huongeza sana hatari ya liquidation (nafasi kufungwa kwa lazima) – kiwango cha juu ni kikomo, si pendekezo.",
    leverageCaption: (a, b) => `${a.name} na ${b.name}: leverage na takwimu za soko la derivatives`,
    maxLeverage: "Leverage ya juu zaidi",
    openInterest: "Open interest",
    volume24h: "Kiasi cha biashara ya derivatives (saa 24)",
    derivativesMarkets: "Masoko ya derivatives",
    listedAssets: "Mali zilizoorodheshwa (takwimu za jukwaa)",
    leverageNote: (marketDate) =>
      `Takwimu za soko: orodha ya viwango vya derivatives ya CoinMarketCap, ${marketDate}. Majukwaa huhesabu mali zilizoorodheshwa kwa njia tofauti – baadhi huhesabu sarafu, mengine jozi za biashara.`,

    /* Products */
    productsTitle: (a, b) => `Bidhaa: ${a.name} na ${b.name} zinatoa nini`,
    productsSame: (compared) => `Majukwaa yote mawili yanaonyesha bidhaa zote ${compared} tunazolinganisha kwenye tovuti zao; tofauti ziko kwenye maelezo.`,
    productsLegend: (date) =>
      `Alama ya tiki inamaanisha jukwaa linaonyesha bidhaa hiyo kwenye tovuti yake; kistari kinamaanisha hatukupata ukurasa wake hapo mnamo ${date}.`,
    productsCaption: (a, b) => `Bidhaa ambazo ${a.name} na ${b.name} zinatoa`,
    product: "Bidhaa",
    offered: "Inapatikana",
    notOffered: "Haipatikani",
    noPage: "Hakuna ukurasa kwenye tovuti yake",

    /* Countries */
    countriesTitle: (a, b) => `Nchi: ${a.name} na ${b.name} zinapatikana wapi`,
    countriesText: (compared, differing) =>
      `Jedwali hili linaonyesha kile ambacho masharti ya kila jukwaa yanasema kuhusu nchi ${compared}. Majukwaa haya mawili yanatofautiana katika nchi ${differing} kati ya hizo. ‘${ct.statusLabel.regional}’ inamaanisha jukwaa linahudumia nchi hiyo kupitia jukwaa tofauti lenye bidhaa, ada na vikomo vyake.`,
    countriesCaption: (a, b) => `Upatikanaji wa ${a.name} na ${b.name} kwa nchi`,
    country: "Nchi",
    countriesNote: (date) =>
      `‘${ct.statusLabel.open}’ inamaanisha nchi haikuwa kwenye orodha ya vizuizi ya jukwaa mnamo ${date} – si hakikisho kwamba kila bidhaa inapatikana huko. Majukwaa yote mawili yanakataza kukwepa kizuizi kwa VPN au taarifa za uongo.`,
    differTitle: "Pale majukwaa haya mawili yanapotofautiana",
    differQuestion: (a, b, countryName) => `${a.name} au ${b.name} ${inCountryName(countryName)}?`,
    neither: (a, b, hrefA, hrefB) => (
      <>
        Je, hakuna kati ya majukwaa haya mawili linalopatikana unakoishi? Majedwali ya nchi kwenye kurasa za mbadala yanaonyesha majukwaa mengine yanayokubali nchi
        yako: <Link href={hrefA}>Mbadala wa {a.name} kwa nchi</Link> · <Link href={hrefB}>Mbadala wa {b.name} kwa nchi</Link>.
      </>
    ),
    restrictedTitle: "Nchi zilizozuiwa na majukwaa ya kikanda",
    whereNot: (e) => `${e.name} haipatikani wapi?`,
    regionalPlatforms: "Majukwaa ya kikanda:",

    /* Verification */
    kycTitle: (a, b) => `Uthibitishaji: ${a.name} vs ${b.name}`,
    kycText:
      "Zote mbili zinawataka watumiaji wapya kuthibitisha utambulisho wao, kwa hivyo hakuna hata moja inayofaa kwa biashara bila KYC. Tofauti iko kwenye kile ambacho akaunti isiyothibitishwa bado inaweza kufanya na jinsi ukaguzi unavyofanyika.",
    documents: "Nyaraka:",
    minAge: "Umri wa chini:",
    howToRegister: (e) => `Jinsi ya kujisajili na kuthibitisha akaunti kwenye ${e.name}, hatua kwa hatua`,

    /* Safety */
    safetyTitle: (a, b) => `Usalama na usimamizi: ${a.name} vs ${b.name}`,
    safetyText:
      "Hakuna jukwaa la kati lisilo na hatari. Kinachoweza kulinganishwa ni kile ambacho kila jukwaa linachapisha kuhusu lenyewe: lina leseni wapi, kama linathibitisha akiba yake na kama lina mfuko wa dharura.",
    safetyCaption: (a, b) => `${a.name} na ${b.name}: usimamizi, uthibitisho wa akiba na mifuko ya ulinzi`,
    licences: "Leseni ambazo jukwaa linataja",
    entity: "Kampuni inayoendesha jukwaa",
    reserves: "Uthibitisho wa akiba",
    fund: "Mfuko wa ulinzi",
    founded: "Mwaka wa kuanzishwa",
    isSafe: (e) => `Je, ${e.name} ni salama?`,
    safetyDetail: (e) => `Usalama na upatikanaji wa ${e.name} kwa undani`,

    /* Referral codes */
    referralTitle: (a, b) => `Misimbo ya rufaa na ofa za watumiaji wapya: ${a.name} vs ${b.name}`,
    referralText:
      "Jukwaa lolote utakalochagua, jisajili kwa msimbo wa rufaa: haugharimu chochote, hauongezi ada zako kamwe na unafungua ofa ya watumiaji wapya ya jukwaa husika. Zingatia safu ya mwisho – msimbo uliosahaulika hauwezi kuwekwa baadaye kila wakati.",
    referralCaption: (a, b) => `${a.name} na ${b.name}: misimbo ya rufaa na ofa za watumiaji wapya`,
    referralCodeOf: (e) => `Msimbo wa Rufaa ${e.name}`,
    referralCode: "Msimbo wa rufaa",
    newUserOffer: "Ofa ya watumiaji wapya",
    inviteeReward: "Unachopata kama mwalikwa",
    covers: "Rufaa moja inahusu",
    whereCode: "Msimbo unawekwa wapi",
    addLater: "Kuweka msimbo baadaye?",
    referralNote: (date) =>
      `Ofa zimekaguliwa ${date}. Zawadi za ukaribisho zinategemea kukamilisha kazi, zinahitaji uthibitishaji wa utambulisho na hutofautiana kulingana na nchi.`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `Faida na hasara za ${a.name} na ${b.name}`,
    pros: "Faida",
    cons: "Hasara",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – maswali yanayoulizwa mara kwa mara`,
    faqText: (count, a, b) =>
      `Maswali ${count} kuhusu kuchagua kati ya ${a.name} na ${b.name}: ada, leverage, nchi, uthibitishaji, bidhaa na misimbo ya rufaa.`,

    /* Sources */
    sourcesTitle: "Vyanzo: takwimu hizi zinatoka wapi",
    sourcesText: (date, marketDate) =>
      `Kila kitu kwenye ukurasa huu kuhusu ada, leverage, bidhaa, uthibitishaji, nchi, leseni, akiba na masharti ya rufaa kimesomwa kwenye tovuti na vituo vya msaada vya majukwaa haya mawili mnamo ${date}. Open interest, kiasi cha biashara na idadi ya masoko ya derivatives vinatoka kwenye orodha ya viwango vya derivatives ya CoinMarketCap (${marketDate}). Majukwaa hubadilisha masharti bila taarifa, kwa hivyo kurasa zilizo hapa chini ndizo zenye neno la mwisho.`,
    officialPages: (e, count) => `${e.name}: ${count === 1 ? "ukurasa 1 rasmi" : `kurasa ${count} rasmi`}`,

    /* More comparisons */
    moreTitle: "Ulinganisho zaidi",
    against: (e) => `${e.name} dhidi ya majukwaa mengine`,
    allAlternatives: (e) => `Majukwaa yote mbadala ya ${e.name}`,
    allComparisons: "Ulinganisho wote wa majukwaa",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>Tahadhari ya hatari:</strong> Derivatives za sarafu za kidijitali (crypto) ni bidhaa tata za kifedha. Leverage huzidisha faida na hasara;
        unaweza kupoteza margin yako yote ndani ya dakika chache. Ukurasa huu ni kwa ajili ya taarifa tu na si ushauri wa kifedha. Tunaweza kupata kamisheni
        ukijisajili kupitia viungo vyetu – angalia <Link href={disclosureHref}>Ufichuzi wa ushirika</Link>. Hilo halibadilishi takwimu: ni za majukwaa
        yenyewe.
      </>
    ),
    ctaTitle: (a, b) => `${a.name} au ${b.name}? Anza na msimbo wa rufaa`,
    ctaText: "Akaunti moja kwa spot na futures kwenye jukwaa lolote kati ya haya mawili, bila gharama ya ziada.",
    ctaButton: "Linganisha majukwaa zaidi",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) => `Ulinganisho wa majukwaa ya crypto (${shortMonthYear}): jozi ${pairs} ana kwa ana`,
    description: (exchangeNames, pairs, monthYear) =>
      `${exchangeNames} kwa jozi: ulinganisho ${pairs} wa ana kwa ana kuhusu ada, leverage, nchi, KYC na misimbo ya rufaa – takwimu rasmi, ${monthYear}.`,
    crumbHome: "Mwanzo",
    crumbPage: "Ulinganisho wa majukwaa",
    listName: "Ulinganisho wa ana kwa ana wa majukwaa ya crypto",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `Imekaguliwa na kusasishwa ${date}`,
    h1: (pairs) => `Ulinganisho wa majukwaa ya crypto: jozi ${pairs} za ana kwa ana`,
    lead: (exchangeCount) =>
      `Majukwaa ${exchangeCount} ya crypto (exchanges), kila jozi imelinganishwa kwa vipengele vilevile: ada, leverage, kina cha soko, bidhaa, upatikanaji katika nchi, uthibitishaji wa utambulisho, usimamizi na ofa za rufaa. Kila ulinganisho unatumia takwimu kutoka kwenye tovuti za majukwaa yenyewe.`,
    quickAnswer: "Jibu la haraka",

    pickTitle: "Chagua majukwaa mawili ya kulinganisha",
    pickText: (others) =>
      `Kila kisanduku kinaonyesha jukwaa moja dhidi ya majukwaa mengine ${others}. Kila jozi ina ukurasa mmoja, kwa hivyo ‘Binance vs OKX’ na ‘OKX vs Binance’ zinaelekeza kwenye ulinganisho uleule.`,
    alternativesOf: (e) => `Mbadala wa ${e.name}`,
    referralCodeOf: (e) => `Msimbo wa Rufaa ${e.name}`,

    tableTitle: (exchangeCount) => `Majukwaa yote ${exchangeCount} bega kwa bega`,
    tableText: "Ofa za watumiaji wapya, ada za kawaida (bila VIP), leverage na kina cha soko cha kila jukwaa katika jedwali moja.",
    tableNote: (date, marketDate) =>
      `Ada: kiwango cha kawaida ambacho kila jukwaa limechapisha, kimekaguliwa ${date}. Open interest na masoko: CoinMarketCap, ${marketDate}.`,

    alternativesTitle: "Jukwaa moja dhidi ya mengine yote",
    alternativesText: (others) =>
      `Huamui kati ya majukwaa mawili, bali unatafuta mbadala? Kurasa za mbadala zinapima jukwaa moja dhidi ya majukwaa mengine ${others} kwa wakati mmoja na zinaonyesha yapi yanakubali nchi yako.`,

    faqTitle: "Ulinganisho wa majukwaa – maswali yanayoulizwa mara kwa mara",

    ctaTitle: "Umeamua? Jisajili kwa msimbo wa rufaa",
    ctaText: (exchangeCount) => `Misimbo iliyothibitishwa kwa majukwaa yote ${exchangeCount} – akaunti moja kwa spot na futures, bila gharama ya ziada.`,
    ctaButton: "Tazama misimbo yote ya rufaa",
  },
};
