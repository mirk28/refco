/**
 * The head-to-head pages ("/fil/<a>-vs-<b>") and the comparison hub ("/fil/compare") in Filipino.
 * Same keys as `./en.tsx`, written natively for Filipino crypto traders (measured Taglish).
 *
 * Wording: "exchange", "fees", "leverage", "account", "user" stay English ("mga exchange", never "-s"); the reader is
 * "ka / mo / sa iyo", the site "kami / namin". Names are things, not persons: "ang Binance", "ng Binance",
 * "sa Binance"; the keyword is "Binance referral code". The pages call themselves "head-to-head na paghahambing",
 * the hub "Paghahambing ng mga exchange"; the better value of a row is "Angat", a tie "Tabla". "vs" stays "vs".
 * Counts are digit + bare noun ("5 punto", "14 bansa"). Generated dates: `prettyDate` gives "Nobyembre 16, 2026",
 * the month of a title "Nob 2026".
 */
import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, leverageOf } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "fil";
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

/** First words that keep their capital when a text from the data continues a sentence: names, places, products. */
const keepCapital = new Set([
  "Binance",
  "OKX",
  "Bybit",
  "Bitget",
  "Gate",
  "KuCoin",
  "MEXC",
  "United",
  "Canada",
  "Germany",
  "France",
  "Netherlands",
  "Spain",
  "Italy",
  "Australia",
  "Japan",
  "Singapore",
  "Hong",
  "India",
  "Europa",
  "Malta",
  "Austria",
  "Vienna",
  "Dubai",
  "Abu",
  "Simple",
  "Launchpool",
  "Jumpstart",
  "Earn",
  "Copy",
  "Merkle",
  "Guardian",
  "Protection",
  "Insurance",
]);
/**
 * A text from the data inside a sentence: lower-cases the first letter of a common first word ("Oo –" → "oo –",
 * "Hanggang 150x" → "hanggang 150x", "Mahigit 320 milyong user" → "mahigit 320 milyong user", "Kailangan para sa …" →
 * "kailangan para sa …", "Gusto mo ng …" → "gusto mo ng …"). Names, places, products and abbreviations (KYC, BTC, USDT,
 * MiCA, “Referral ID …”) keep their capital.
 */
const lcFirst = (s: string) => {
  const first = s.split(/[\s,.:;()–]/)[0];
  if (!first || !/^[A-Z]/.test(first) || keepCapital.has(first) || first.slice(1) !== first.slice(1).toLowerCase()) return s;
  return s.charAt(0).toLowerCase() + s.slice(1);
};
/** "Mahigit 320 milyong rehistradong user (ayon sa Binance)" / "390 coin, 509 spot pair (Bybit API)" → without the bracket. */
const withoutSource = (s: string) => s.replace(/\s*\((?:ayon sa [^()]*|[^()]*\bAPI)\)/, "");
/** "Hanggang 150x (…)" → "hanggang 150x (…)", for the middle of a sentence. */
const lowerUpTo = (s: string) => s.replace(/^Hanggang/, "hanggang");
/** A data text that code closes itself, without a final full stop (`pick`, `chooseIf`). */
const bare = (s: string) => s.trim().replace(/\.$/, "");
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
const leverageRisk = "Lubhang pinapataas ng mataas na leverage ang panganib na ma-liquidate ka.";
const regionalNote = "Karaniwang may sariling hanay ng produkto, fees at limit ang isang regional platform.";
const cmc = "derivatives ranking ng CoinMarketCap";

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `Angat ang ${e.name} sa ${joinList(rows.map((r) => r.topic))}` : `Hindi angat ang ${e.name} sa alinman sa mga ito`;
  return `Wala sa ${a.name} at ${b.name} ang mas maganda sa bawat punto. Sa ${s.measurable} nasusukat na punto ng paghahambing na ito, angat ang ${a.name} sa ${s.a.length} at ang ${b.name} sa ${s.b.length}${s.tie.length ? `, at tabla sila sa ${s.tie.length}` : ""}. ${lead(a, s.a)}. ${lead(b, s.b)}. Piliin ang ${a.name} kung ${lcFirst(bare(altInfo(a).chooseIf[0]))}. Piliin ang ${b.name} kung ${lcFirst(bare(altInfo(b).chooseIf[0]))}.`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb)
    return `Pareho ang maximum leverage ng ${a.name} at ${b.name}: sa ${a.name}, ${lowerUpTo(a.maxLeverage)}; sa ${b.name}, ${lowerUpTo(b.maxLeverage)}.`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `Mas mataas ang maximum leverage ng ${hi.name} – ${lowerUpTo(hi.maxLeverage)} – kumpara sa ${lowerUpTo(lo.maxLeverage)} sa ${lo.name}.`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `Sa ${cmc} (${prettyDate(site.marketDataDate)}), ${formatBn(a.market.openInterestBn)} ang open interest ng ${a.name} sa ${a.market.markets} market, at ${formatBn(b.market.openInterestBn)} naman ang sa ${b.name} sa ${b.market.markets} market. Mas malalim ang market ng ${deeper.name}, at karaniwang nangangahulugan ito ng mas makitid na spread sa malalaking order.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `Nag-aalok ang ${a.name} ng ${joinList(notOffered.map((f) => f.noun))}, na hindi inaalok ng ${b.name}.` : "",
    notFound.length
      ? `Nag-aalok ang ${a.name} ng ${joinList(notFound.map((f) => f.noun))}; sa sariling website ng ${b.name}, wala kaming nakitang ganitong produkto.`
      : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `Sarado ang ${e.name} sa ${c.residents}${extra}`;
  if (status === "regional") return `Pinagsisilbihan ng ${e.name} ang ${c.residents} gamit ang isang regional platform${extra}`;
  if (status === "partial") return `Bahagyang restricted ang ${e.name} sa ${c.name}${extra}`;
  return `Wala ang ${c.name} sa mga restricted na bansa ng ${e.name}`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("fil").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. Nagbabago ang mga listahan ng bansa, at kung wala sa listahan ang isang bansa, hindi iyon garantiya na available doon ang bawat produkto – ang sariling mga tuntunin ng exchange ang masusunod.`;

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
      ? "nasa parehong exchange"
      : has(a, key)
        ? `sa ${a.name} lang`
        : has(b, key)
          ? `sa ${b.name} lang`
          : "hindi nakita sa website ng alinman sa dalawa";
  const noTokenDiscount = "Walang inilathalang ganitong diskwento.";
  const noFund = "Walang binanggit na protection fund.";
  const noMica = "walang binabanggit na entity na awtorisado sa ilalim ng MiCA sa sarili nitong mga pahina";

  const verdict: Faq[] = [
    { q: `Alin ang mas maganda, ${a.name} o ${b.name}?`, a: versusAnswer(a, b, s) },
    {
      q: `Ano ang pangunahing pagkakaiba ng ${a.name} at ${b.name}?`,
      a: `${bare(ia.pick)}. ${bare(ib.pick)}.${aheadA.length ? ` Pinakamalinaw na nasusukat na kalamangan ng ${a.name}: ${aheadA.slice(0, 2).map(lcFirst).join("; ")}.` : ""}${aheadB.length ? ` Sa ${b.name} naman: ${aheadB.slice(0, 2).map(lcFirst).join("; ")}.` : ""}`,
    },
    {
      q: `Mas malaki ba ang ${a.name} kaysa sa ${b.name}?`,
      a: `Sa ${cmc} (${marketDate}), ${formatBn(a.market.openInterestBn)} ang open interest ng ${a.name} at ${formatBn(a.market.volume24hBn)} ang volume nito sa loob ng 24 oras; ${formatBn(b.market.openInterestBn)} at ${formatBn(b.market.volume24hBn)} naman ang sa ${b.name}. Ayon sa sarili nilang bilang, may ${lcFirst(withoutSource(a.users))} ang ${a.name}, at may ${lcFirst(withoutSource(b.users))} naman ang ${b.name}.`,
    },
    {
      q: `Alin ang mas bagay sa mga baguhan, ${a.name} o ${b.name}?`,
      a: `Sa unang account, tatlong bagay ang mahalaga: madaling paraan ng pagbili ng crypto, paraan para magsanay at mababang fees. Pagbili gamit ang card o bank transfer: ${state("fiat")}. Demo trading: ${state("demoTrading")}. Copy trading: ${state("copyTrading")}. ${feeSentence(a, b, "spot")} Identity verification – ${a.name}: ${lcFirst(a.signup.kycShort)}; ${b.name}: ${lcFirst(b.signup.kycShort)}.`,
    },
    {
      q: `Alin ang mas maganda para sa futures trading, ${a.name} o ${b.name}?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Alin ang may mas mababang fees, ${a.name} o ${b.name}?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} Standard fees (non-VIP) ang mga ito; lalo pang ibinababa ng mga VIP level at ng mga token ng exchange ang mga rate na ito.`,
    },
    {
      q: `May diskwento ba sa fees ang ${a.name} at ${b.name} kapag sarili nilang token ang ipinambayad?`,
      a: `${a.name}: ${a.tokenDiscount || noTokenDiscount} ${b.name}: ${b.tokenDiscount || noTokenDiscount}`,
    },
    { q: `Alin ang may mas mataas na leverage, ${a.name} o ${b.name}?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `Alin ang may mas maraming coin, ${a.name} o ${b.name}?`,
      a: `Ayon sa sarili nilang bilang, ${lcFirst(withoutSource(a.assets))} ang nakalista sa ${a.name}, at ${lcFirst(withoutSource(b.assets))} naman sa ${b.name}. Magkakaiba ang paraan ng pagbilang ng mga exchange – coin ang binibilang ng ilan, trading pair naman ng iba – kaya hindi direktang maikukumpara ang dalawang bilang.`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `Puwede ko bang gamitin ang ${a.name} o ${b.name} sa ${c.name}?`, a: countryPairAnswer(a, b, c) })),
    {
      q: `Kailangan ba ng KYC sa ${a.name} at ${b.name}?`,
      a: `Oo, parehong humihingi ng identity verification ang dalawa sa mga bagong user. ${a.name}: ${lcFirst(a.signup.kycShort)}. ${b.name}: ${lcFirst(b.signup.kycShort)}. Hindi opsyon ang alinman sa dalawa kung gusto mong mag-trade nang walang verification.`,
    },
    {
      q: `Alin ang mas ligtas, ${a.name} o ${b.name}?`,
      a: `Walang centralized exchange na walang panganib, kaya ang tapat na paghahambing ay kung ano ang inilalathala ng bawat isa. ${a.name}: ${a.regulation}. Proof of reserves – ${ia.reserves}. ${ia.fund ? `${ia.fund}.` : noFund} ${b.name}: ${b.regulation}. Proof of reserves – ${ib.reserves}. ${ib.fund ? `${ib.fund}.` : noFund} Sa alinmang exchange, itago lang doon ang pondong aktibo mong ginagamit sa trading.`,
    },
    {
      q: `Awtorisado ba ang ${a.name} at ${b.name} sa ilalim ng MiCA sa EU?`,
      a: `${a.name}: ${ia.mica ? `oo – ${ia.mica}` : noMica}. ${b.name}: ${ib.mica ? `oo – ${ib.mica}` : noMica}. ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `Wala sa ${featureList.length} produkto na ikinukumpara namin: makikita rin sa ${y.name} ang bawat produktong ipinapakita ng ${x.name} sa sarili nitong website.`;
  const products: Faq[] = [
    { q: `Ano ang mayroon sa ${a.name} na wala sa ${b.name}?`, a: onlyA || nothing(a, b) },
    { q: `Ano ang mayroon sa ${b.name} na wala sa ${a.name}?`, a: onlyB || nothing(b, a) },
    {
      q: `May copy trading, trading bot, options at demo trading ba ang ${a.name} at ${b.name}?`,
      a: `Copy trading: ${state("copyTrading")}. Trading bot: ${state("tradingBots")}. Options: ${state("options")}. Demo trading: ${state("demoTrading")}.${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` Kung isang exchange lang ang nakasaad, wala kaming nakitang pahina para sa produkto sa sariling website ng isa pa noong ${prettyDate(site.lastReviewed)}.` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `Ano ang ${a.name} referral code at ${b.name} referral code?`,
      a: `${a.name}: ${a.referralCode} – ${lcFirst(a.referral.whereShort)}. ${b.name}: ${b.referralCode} – ${lcFirst(b.referral.whereShort)}. Libreng gamitin ang dalawang code at hindi tataas ang trading fees mo dahil dito.`,
    },
    {
      q: `Alin ang may mas magandang sign up bonus, ${a.name} o ${b.name}?`,
      a: `${a.name}: ${lcFirst(offer(a))}. ${b.name}: ${lcFirst(offer(b))}. Sa parehong exchange, may mga kondisyon ang welcome reward – gaya ng identity verification, deposit o trading volume – at nagkakaiba ito depende sa bansa, kaya ikumpara ang mga kondisyon, hindi ang numerong nasa headline.`,
    },
    {
      q: `Puwede ko bang ilagay ang referral code pagkatapos mag-sign up sa ${a.name} o ${b.name}?`,
      a: `${a.name}: ${lcFirst(a.referral.afterSignupShort)}. ${b.name}: ${lcFirst(b.referral.afterSignupShort)}. Sa parehong exchange, ang ligtas na paraan ay mag-sign up gamit ang referral link.`,
    },
    {
      q: `Puwede ko bang gamitin nang sabay ang ${a.name} at ${b.name}?`,
      a: "Oo. Magkahiwalay na kumpanya ang dalawa, kaya hindi naaapektuhan ng account mo sa isa ang account mo sa isa pa, at maraming trader ang may pondo sa dalawang exchange. Nakakabit sa bawat account ang fee tier, referral at reward, at hindi nalilipat ang mga ito.",
    },
    {
      q: `Paano maglipat ng crypto mula sa ${a.name} papunta sa ${b.name}?`,
      a: `1. Gumawa ng ${b.name} account gamit ang referral code na ${b.referralCode}, saka tapusin ang identity verification. 2. Isara ang mga bukas na futures at margin na posisyon mo sa ${a.name} – hindi nalilipat ang mga posisyon mula sa isang exchange papunta sa iba. 3. Sa ${b.name}, i-copy ang deposit address para sa coin at network na gusto mong gamitin. 4. Mag-withdraw mula sa ${a.name} papunta sa address na iyon sa parehong network, at magpadala muna ng maliit na test amount: puwedeng mawala ang transfer sa maling network. Ganito rin ang mga hakbang kung sa kabilang direksyon.`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} o ${b.name}: alin ang mas maganda?`, faqs: verdict },
    { id: "fees", title: "Fees, leverage at coin", faqs: fees },
    { id: "countries", title: "Mga bansa, KYC at kaligtasan", faqs: countries },
    { id: "products", title: "Mga produkto", faqs: products },
    { id: "referral", title: "Mga referral code at paglipat sa pagitan ng dalawa", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi, oi, mica }: HubFacts) =>
  `${names(lowF)} ang may pinakamababang standard futures fees (${feePair(lowF[0].futuresFees)} maker / taker), ${names(hi)} ang may pinakamataas na leverage (${leverageOf(hi[0])}x) at ${names(oi)} ang may pinakamalalim na derivatives market (open interest na ${formatBn(oi[0].market.openInterestBn)}). ${names(mica)} ang may binabanggit na platform na awtorisado sa ilalim ng MiCA para sa mga residente ng EEA (European Economic Area). Nakadepende sa pares na pinagpipilian mo kung aling exchange ang mas bagay sa iyo – piliin ito sa ibaba.`;

function hubFaqs({ all, ranked, lowF, lowS, hi, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "Aling crypto exchange ang may pinakamababang fees?",
      a: `Sa standard tier, ${names(lowF)} ang may pinakamababang futures fees na ${feePair(lowF[0].futuresFees)} (maker / taker), at ${names(lowS)} ang may pinakamababang spot fees na ${feePair(lowS[0].spotFees)}. Ang iba pang exchange: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} ${feePair(e.futuresFees)} sa futures at ${feePair(e.spotFees)} sa spot`)
        .join("; ")}. Lalo pang ibinababa ng mga VIP level at ng mga token ng exchange ang mga rate na ito.`,
    },
    {
      q: "Aling crypto exchange ang may pinakamataas na leverage?",
      a: `${names(hi)}: ${lowerUpTo(hi[0].maxLeverage)}. Ang iba: ${ranked
        .filter((e) => !hi.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join(", ")}. ${leverageRisk}`,
    },
    {
      q: "Aling crypto exchange ang may pinakamalalim na futures market?",
      a: `Batay sa open interest sa ${cmc} (${marketDate}): ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join(", ")}. Karaniwang mas makitid ang spread sa malalaking order kapag mas malalim ang market.`,
    },
    {
      q: "Aling mga exchange ang may platform na awtorisado sa ilalim ng MiCA para sa EEA?",
      a: `${joinList(mica.map((e) => `${e.name} (${altInfo(e).mica})`))}. Walang binabanggit na entity na awtorisado sa ilalim ng MiCA ang ${names(noMica)} sa sarili nilang mga pahina. ${regionalNote}`,
    },
    {
      q: "Aling mga exchange ang nagpapahintulot na ilagay ang referral code pagkatapos mag-sign up?",
      a: `${later.map((e) => `${e.name}: ${lcFirst(e.referral.afterSignupShort)}`).join(". ")}. Sa ${names(signupOnly)}, sa registration lang bumibilang ang code o walang dokumentadong paraan para idagdag ito pagkatapos – sa lahat ng exchange, ang ligtas na paraan ay mag-sign up gamit ang referral link.`,
    },
    {
      q: "Paano ginagawa ang mga paghahambing na ito?",
      a: `Binabasa namin ang bawat numero sa sariling website o help center ng exchange – mga fee schedule, tuntunin, listahan ng mga restricted na bansa, product page – at nakalista sa bawat pahina ang mga sanggunian nito. Galing sa ${cmc} ang open interest, volume at bilang ng derivatives market. Sa mga numerong iyon nakabatay kung aling exchange ang angat sa isang punto; wala kaming sariling ranking. Ang kasalukuyang petsa ng pagsusuri: ${date}.`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const fil: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row after "angat ang X sa" ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "Futures fees (maker / taker)", topic: "futures fees" },
    spotFees: { label: "Spot fees (maker / taker)", topic: "spot fees" },
    leverage: { label: "Maximum leverage", topic: "maximum leverage" },
    openInterest: { label: "Open interest sa derivatives", topic: "open interest" },
    volume: { label: "Derivatives volume (24 oras)", topic: "derivatives volume sa loob ng 24 oras" },
    markets: { label: "Bilang ng derivatives market", topic: "bilang ng derivatives market" },
    users: { label: "Mga user (ayon sa exchange)", topic: "bilang ng user" },
    assets: { label: "Nakalistang asset (ayon sa exchange)", topic: "" },
    founded: { label: "Itinatag", topic: "" },
    products: { label: (compared) => `Mga produktong nakita (sa ${compared} na ikinumpara)`, topic: "dami ng produkto" },
    countries: { label: (compared) => `Mga bansang sarado (sa ${compared} na ikinumpara)`, topic: "saklaw ng mga bansa" },
    mica: { label: "Platform sa EEA na awtorisado sa ilalim ng MiCA", topic: "awtorisasyon sa ilalim ng MiCA" },
    kyc: { label: "Identity verification (KYC)", topic: "" },
    addLater: { label: "Puwede bang idagdag ang referral code pagkatapos?", topic: "pagdagdag ng referral code pagkatapos mag-sign up" },
    offer: { label: "Offer para sa bagong user", topic: "" },
    reserves: { label: "Proof of reserves", topic: "" },
    fund: { label: "Protection fund", topic: "" },
  },
  countOf: (count, of) => `${count} sa ${of}`,
  noMica: "Walang binanggit",
  noFund: "Walang binanggit",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    /** Within 50–60 characters for most pairs, as the sheet asks; "vs" already says that the two are compared. */
    title: (a, b, shortMonthYear) => `${a.name} vs ${b.name} (${shortMonthYear}): Fees, Leverage, KYC & Bonus`,
    description: (a, b, monthYear) =>
      `${a.name} vs ${b.name}: futures fees ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, leverage ${leverageOf(a)}x vs ${leverageOf(b)}x, produkto, bansa, KYC at referral code – opisyal na datos, sinuri noong ${monthYear}.`,
    keywords: (a, b, former) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${a.name} or ${b.name}`,
      `${a.name} o ${b.name}`,
      `${a.name} vs ${b.name} fees`,
      `${a.name} vs ${b.name} futures`,
      `${a.name} ${b.name} comparison`,
      `paghahambing ng ${a.name} at ${b.name}`,
      `is ${a.name} better than ${b.name}`,
      `is ${b.name} better than ${a.name}`,
      `${a.name} o ${b.name} alin ang mas maganda`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],

    crumbHome: "Home",
    crumbHub: "Paghahambing ng mga exchange",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `Ang ${e.name} ang exchange na dating kilala bilang ${formerName}.`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `Parehong centralized exchange ang ${a.name} at ${b.name} para sa spot at futures trading na may leverage, at parehong may referral program para sa mga bagong user. ${bare(pickA)}. ${bare(pickB)}.${formerNote ? ` ${formerNote}` : ""} Inilalatag ng head-to-head na paghahambing na ito nang magkatabi ang kanilang fees, leverage, produkto, availability sa bawat bansa, mga patakaran sa verification at referral offer – binasa namin ang bawat numero sa sariling website ng mga exchange noong ${date}.`,

    toc: {
      "at-a-glance": "Buod",
      verdict: "Alin ang pipiliin",
      fees: "Fees",
      leverage: "Leverage & lalim ng market",
      products: "Mga produkto",
      countries: "Mga bansa",
      kyc: "Verification (KYC)",
      safety: "Kaligtasan & regulasyon",
      referral: "Mga referral code",
      "pros-cons": "Kalamangan & kahinaan",
      faq: "FAQ",
      sources: "Mga sanggunian",
    },
    onThisPage: "Sa pahinang ito",

    /* Hero */
    updated: (date) => `Sinuri at na-update noong ${date}`,
    h1: (a, b) => `${a.name} vs ${b.name}: Paghahambing ng Fees, Leverage at Kaligtasan`,
    quickAnswer: "Mabilis na sagot",
    keyFigures: "Mahahalagang numero",
    chips: (a, b, oiA, oiB) => [
      `Futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `Leverage ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `Open interest ${oiA} vs ${oiB}`,
    ],
    boxTitle: "Mag-sign up gamit ang referral code",
    boxNote: "Libre ang dalawang code at hindi kailanman tataas ang fees mo dahil dito.",
    codeLabel: (e) => `${e.name} referral code`,
    boxRisk: () => (
      <>
        Mataas ang panganib ng trading na may leverage. Walang isa man sa dalawang exchange na available sa lahat ng bansa – tingnan ang{" "}
        <a href="#countries">mga bansa</a>.
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name} sa isang tingin`,
    glanceText: (a, b, s) =>
      `Hanapin mo man ang “${a.name} vs ${b.name}” o “${b.name} vs ${a.name}”, iisa ang paghahambing. Sa ${s.measurable} punto na mapagpapasyahan ng mga numero, angat ang ${a.name} sa ${s.a.length} at ang ${b.name} sa ${s.b.length}${s.tie.length ? `; tabla sila sa ${s.tie.length}` : ""}. Hindi pare-pareho ang bigat ng mga punto – para sa aktibong trader, mas mahalaga ang mas mababang fees kaysa sa mas mahabang listahan ng coin – kaya tingnan ang column na bagay sa paraan mo ng pag-trade.`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}: fees, leverage, laki ng market, produkto, bansa, verification at mga patakaran sa referral`,
    compared: "Punto",
    ahead: "Angat",
    level: "Tabla",
    glanceNote: (marketDate, date) =>
      `Fees: standard tier (non-VIP). Open interest, volume at market: ${cmc}, ${marketDate}. Ang ibig sabihin ng “–” ay hindi mairaranggo ang dalawang halaga laban sa isa’t isa. Binasa namin ang lahat ng iba pa sa sariling website ng mga exchange noong ${date}.`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} o ${b.name}: alin ang dapat mong piliin?`,
    verdictText:
      "Walang iisang panalo – ginawa ang bawat exchange para sa ibang uri ng trader. Ipinapakita ng dalawang kahon kung para kanino bagay ang bawat isa at kung saan ito nasusukat na angat sa isa pa.",
    bestFor: (role) => `Pinakamainam para sa: ${role}`,
    chooseIf: (e) => `Piliin ang ${e.name} kung …`,
    aheadOf: (e, other) => `Kung saan angat ang ${e.name} sa ${other.name}`,
    noAdvantage: "Walang nasusukat na kalamangan sa mga puntong ikinukumpara namin.",
    thinkTwice: "Pag-isipang mabuti kung …",
    codeButton: (e) => `${e.name} referral code ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `Fees: ${a.name} vs ${b.name}`,
    feesModel:
      "Parehong gumagamit ng maker/taker model ang dalawa: maker fee ang binabayaran ng mga limit order na nagdadagdag ng liquidity, at taker fee naman ang sa mga order na kumukuha ng liquidity.",
    feesCaption: (a, b) => `Standard spot at futures fees ng ${a.name} at ${b.name}`,
    exchange: "Exchange",
    futuresMaker: "Futures maker",
    futuresTaker: "Futures taker",
    spotMaker: "Spot maker",
    spotTaker: "Spot taker",
    otherMarkets: "Ibang market (maker / taker)",
    feesNote: (date) =>
      `Standard (non-VIP) fees ayon sa inilathala ng bawat exchange, sinuri noong ${date}. Nagbabago ang fees – kumpirmahin muna sa exchange bago mag-trade.`,
    tokenTitle: "Diskwento gamit ang token at maliliit na detalye",
    noTokenDiscount: "Walang inilathalang diskwento para sa pagbabayad ng fees gamit ang token ng exchange.",

    /* Leverage */
    leverageTitle: "Leverage at lalim ng market",
    leverageRisk: "Lubhang pinapataas ng mataas na leverage ang panganib na ma-liquidate ka – limitasyon ang maximum, hindi rekomendasyon.",
    leverageCaption: (a, b) => `Leverage at derivatives market data ng ${a.name} at ${b.name}`,
    maxLeverage: "Maximum leverage",
    openInterest: "Open interest",
    volume24h: "Derivatives volume (24 oras)",
    derivativesMarkets: "Bilang ng derivatives market",
    listedAssets: "Nakalistang asset (ayon sa exchange)",
    leverageNote: (marketDate) =>
      `Market data: ${cmc}, ${marketDate}. Magkakaiba ang paraan ng pagbilang ng mga exchange sa nakalistang asset – coin ang binibilang ng ilan, trading pair naman ng iba.`,

    /* Products */
    productsTitle: (a, b) => `Mga produkto: ano ang inaalok ng ${a.name} at ${b.name}`,
    productsSame: (compared) =>
      `Ipinapakita ng parehong exchange sa sarili nilang website ang lahat ng ${compared} produkto na ikinukumpara namin; nasa mga detalye ang pagkakaiba.`,
    productsLegend: (date) =>
      `Tsek: ipinapakita ng exchange ang produkto sa sarili nitong website. Gitling: wala kaming nakitang pahina para rito sa website na iyon noong ${date}.`,
    productsCaption: (a, b) => `Mga produktong inaalok ng ${a.name} at ${b.name}`,
    product: "Produkto",
    offered: "Inaalok",
    notOffered: "Hindi inaalok",
    noPage: "Walang nakitang pahina sa sarili nitong website",

    /* Countries */
    countriesTitle: (a, b) => `Mga bansa: saan available ang ${a.name} at ${b.name}`,
    countriesText: (compared, differing) =>
      `Para sa ${compared} bansa, ito ang sinasabi ng sariling mga tuntunin ng bawat exchange. Magkaiba ang dalawa sa ${differing} sa mga ito. Ang ibig sabihin ng “${ct.statusLabel.regional}” ay pinagsisilbihan ng exchange ang bansa gamit ang hiwalay na platform na may sariling produkto, fees at limit.`,
    countriesCaption: (a, b) => `Availability ng ${a.name} at ${b.name} sa bawat bansa`,
    country: "Bansa",
    countriesNote: (date) =>
      `Ang ibig sabihin ng “${ct.statusLabel.open}” ay wala ang bansa sa listahan ng mga restricted na bansa ng exchange noong ${date} – hindi ito garantiya na available doon ang bawat produkto. Parehong ipinagbabawal ng dalawang exchange ang paglusot sa restriction gamit ang VPN o pekeng detalye.`,
    differTitle: "Kung saan magkaiba ang dalawa",
    differQuestion: (a, b, countryName) => `${a.name} o ${b.name} sa ${countryName}?`,
    neither: (a, b, hrefA, hrefB) => (
      <>
        Hindi ba bukas ang alinman sa dalawa kung saan ka nakatira? Ipinapakita ng country table sa mga pahina ng alternatives kung aling iba pang
        exchange ang tumatanggap sa bansa mo: <Link href={hrefA}>{a.name} alternatives ayon sa bansa</Link> ·{" "}
        <Link href={hrefB}>{b.name} alternatives ayon sa bansa</Link>.
      </>
    ),
    restrictedTitle: "Mga restricted na bansa at regional platform",
    whereNot: (e) => `Saan hindi available ang ${e.name}?`,
    regionalPlatforms: "Mga regional platform:",

    /* Verification */
    kycTitle: (a, b) => `Verification: ${a.name} vs ${b.name}`,
    kycText:
      "Parehong humihingi ng identity verification sa mga bagong user, kaya hindi opsyon ang alinman sa dalawa para mag-trade nang walang KYC. Nasa dalawang bagay ang pagkakaiba: kung ano pa ang magagawa ng account na hindi pa verified at kung paano gumagana ang pagsusuri.",
    documents: "Mga dokumento:",
    minAge: "Minimum na edad:",
    howToRegister: (e) => `Paano mag-sign up at i-verify ang account sa ${e.name}, hakbang-hakbang`,

    /* Safety */
    safetyTitle: (a, b) => `Kaligtasan at regulasyon: ${a.name} vs ${b.name}`,
    safetyText:
      "Walang centralized exchange na walang panganib. Ang maikukumpara ay kung ano ang inilalathala ng bawat isa tungkol sa sarili nito: kung saan ito lisensyado, kung pinapatunayan nito ang reserves nito at kung may pondo ito para sa emergency.",
    safetyCaption: (a, b) => `Regulasyon, proof of reserves at protection fund ng ${a.name} at ${b.name}`,
    licences: "Mga lisensyang binanggit ng exchange",
    entity: "Kumpanyang nagpapatakbo",
    reserves: "Proof of reserves",
    fund: "Protection fund",
    founded: "Itinatag",
    isSafe: (e) => `Ligtas ba ang ${e.name}?`,
    safetyDetail: (e) => `Kaligtasan at availability ng ${e.name}, nang detalyado`,

    /* Referral codes */
    referralTitle: (a, b) => `Mga referral code at offer para sa bagong user: ${a.name} vs ${b.name}`,
    referralText:
      "Alinman ang piliin mo, mag-sign up gamit ang referral code: libre ito, hindi nito kailanman tinataasan ang fees mo at binubuksan nito ang offer ng exchange para sa bagong user. Bantayan ang huling hilera – hindi laging puwedeng idagdag pagkatapos ang nakalimutang code.",
    referralCaption: (a, b) => `Mga referral code at offer para sa bagong user ng ${a.name} at ${b.name}`,
    referralCodeOf: (e) => `${e.name} referral code`,
    referralCode: "Referral code",
    newUserOffer: "Offer para sa bagong user",
    inviteeReward: "Makukuha mo bilang inimbitahang user",
    covers: "Saklaw ng isang referral",
    whereCode: "Saan ilalagay ang code",
    addLater: "Puwede bang idagdag pagkatapos?",
    referralNote: (date) =>
      `Sinuri ang mga offer noong ${date}. Nakabatay sa task ang mga welcome reward, kailangan ng identity verification at nagkakaiba depende sa bansa.`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `Kalamangan at kahinaan ng ${a.name} at ${b.name}`,
    pros: "Kalamangan",
    cons: "Kahinaan",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – FAQ`,
    faqText: (count, a, b) =>
      `${count} tanong tungkol sa pagpili sa pagitan ng ${a.name} at ${b.name}: fees, leverage, mga bansa, verification, produkto at referral code.`,

    /* Sources */
    sourcesTitle: "Mga sanggunian: saan galing ang mga numerong ito",
    sourcesText: (date, marketDate) =>
      `Binasa namin ang lahat ng nasa pahinang ito tungkol sa fees, leverage, produkto, verification, bansa, lisensya, reserves at mga patakaran sa referral sa sariling website at help center ng dalawang exchange noong ${date}. Galing sa ${cmc} (${marketDate}) ang open interest, volume at bilang ng derivatives market. Binabago ng mga exchange ang kanilang mga tuntunin nang walang abiso, kaya ang mga pahina sa ibaba ang huling batayan.`,
    officialPages: (e, count) => `${e.name}: ${count} opisyal na pahina`,

    /* More comparisons */
    moreTitle: "Iba pang paghahambing",
    against: (e) => `${e.name} laban sa ibang exchange`,
    allAlternatives: (e) => `Lahat ng ${e.name} alternatives`,
    allComparisons: "Lahat ng paghahambing ng mga exchange",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>Babala sa panganib:</strong> Kumplikadong instrumento ang crypto derivatives. Pinapalaki ng leverage ang kita at ang lugi, at puwedeng
        mawala ang buong margin mo sa loob ng ilang minuto. Para sa impormasyon lang ang pahinang ito at hindi ito payong pinansyal. Puwede kaming
        kumita ng komisyon kapag nag-sign up ka gamit ang mga link namin – tingnan ang <Link href={disclosureHref}>Pagsisiwalat ng affiliate</Link>.
        Hindi nito binabago ang mga numero: galing ang mga ito sa mga exchange mismo.
      </>
    ),
    ctaTitle: (a, b) => `${a.name} o ${b.name}? Magsimula sa referral code`,
    ctaText: "Isang account para sa spot at futures sa alinmang exchange, nang walang dagdag na bayad.",
    ctaButton: "Ikumpara ang iba pang exchange",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) => `Paghahambing ng mga Crypto Exchange (${shortMonthYear}): ${pairs} Head-to-Head`,
    description: (exchangeNames, pairs, monthYear) =>
      `${exchangeNames}: ${pairs} head-to-head na paghahambing ng fees, leverage, bansa, KYC at referral code – opisyal na datos, sinuri noong ${monthYear}.`,
    crumbHome: "Home",
    crumbPage: "Paghahambing ng mga exchange",
    listName: "Mga head-to-head na paghahambing ng crypto exchange",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `Sinuri at na-update noong ${date}`,
    h1: (pairs) => `Paghahambing ng mga crypto exchange: ${pairs} head-to-head na paghahambing`,
    lead: (exchangeCount) =>
      `${exchangeCount} exchange, at ikinumpara ang bawat pares sa parehong mga punto: fees, leverage, lalim ng market, produkto, availability sa bawat bansa, identity verification, regulasyon at referral offer. Ginagamit ng bawat paghahambing ang mga numero mula sa sariling website ng mga exchange.`,
    quickAnswer: "Mabilis na sagot",

    pickTitle: "Pumili ng dalawang exchange na ikukumpara",
    pickText: (others) =>
      `Inilalaban ng bawat kahon ang isang exchange sa ${others} pang exchange. Iisa ang pahina ng bawat pares, kaya iisang paghahambing ang pupuntahan ng “Binance vs OKX” at “OKX vs Binance”.`,
    alternativesOf: (e) => `${e.name} alternatives`,
    referralCodeOf: (e) => `${e.name} referral code`,

    tableTitle: (exchangeCount) => `Lahat ng ${exchangeCount} exchange, magkakatabi`,
    tableText: "Mga offer para sa bagong user, standard (non-VIP) fees, leverage at lalim ng market ng bawat exchange sa iisang table.",
    tableNote: (date, marketDate) =>
      `Fees: standard tier ayon sa inilathala ng bawat exchange, sinuri noong ${date}. Open interest at market: CoinMarketCap, ${marketDate}.`,

    alternativesTitle: "Isang exchange laban sa lahat ng iba",
    alternativesText: (others) =>
      `Hindi ka pumipili sa pagitan ng dalawa, kundi naghahanap ng kapalit? Sabay na sinusukat ng mga pahina ng alternatives ang isang exchange laban sa ${others} pang exchange at ipinapakita kung alin sa kanila ang tumatanggap sa bansa mo.`,

    faqTitle: "Paghahambing ng mga exchange – FAQ",

    ctaTitle: "Nakapagpasya ka na? Mag-sign up gamit ang referral code",
    ctaText: (exchangeCount) => `Mga verified na code para sa lahat ng ${exchangeCount} exchange – isang account para sa spot at futures, nang walang dagdag na bayad.`,
    ctaButton: "Tingnan ang lahat ng referral code",
  },
};
