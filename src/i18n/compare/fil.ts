/**
 * The sentences of the comparison pages in Filipino. Same functions and the same logic as `./en.ts`, written in
 * Filipino grammar (the measured Taglish of the language sheet).
 *
 * Wording: "exchange" (English, plural only "mga exchange"), "alternatibo sa Binance", "referral code", "fees",
 * "maker / taker", "identity verification", "posisyon", address "ka / mo / sa iyo", the site "kami / namin". A name
 * is the proper noun of a thing: "ang Binance", "ng Binance", "sa Binance" – free-standing markers, nothing is glued
 * to a name, a digit or a variable. Filipino has no verb agreement, so `verb()` is only used where the sentence
 * itself differs (one regional platform or one per exchange, one website or several). Counts with a variable are
 * digit + bare noun ("6 alternatibo"); "all 6" is "lahat ng 6 exchange". Country names stay English ("sa United
 * States", "mga residente ng US"). Fee rates arrive in the site's notation (0.02%); leverage stays 150x.
 *
 * Capitals: an inserted data text keeps its first letter when it starts with a name, a token, an acronym or a digit;
 * a plain first word ("Oo", "Hindi", "Kapag", "Hanggang", "Kailangan", "Gusto" …) is lower-cased inside a sentence.
 * `pick` ("Ang {name} ay …") is inserted unchanged.
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
  lcFirst,
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

const locale = "fil";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const count = (n: number) => n.toLocaleString("en-US");

/* -------------------------------- capitals -------------------------------- */

/** First words of a data text that are names and keep their capital inside a sentence. */
const keepCapital = new Set([
  "Binance",
  "Bybit",
  "Bitget",
  "Gate",
  "Simple",
  "Earn",
  "Launchpool",
  "Launchpad",
  "Jumpstart",
  "Merkle",
  "Visa",
  "Mastercard",
  "Web",
  "Europa",
  "Malta",
  "Vienna",
  "Austria",
  "Dubai",
  "Abu",
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
  "Brazil",
  "Turkey",
]);
/**
 * Lower-cases the first letter of a data text inside a sentence ("Oo – sa loob ng 30 araw …" → "oo – sa loob ng 30
 * araw …", "Hanggang 150x …" → "hanggang 150x …", "Gusto mo ng …" → "gusto mo ng …"). A text that starts with a
 * name, a token, an acronym (KYC, BTC, OKX, KuCoin) or a digit is left unchanged.
 */
const lcData = (s: string) => {
  const first = s.match(/^\p{L}+/u)?.[0] ?? "";
  return /^\p{Lu}\p{Ll}+$/u.test(first) && !keepCapital.has(first) ? s.charAt(0).toLowerCase() + s.slice(1) : s;
};

/** Ends a data text with a full stop unless it already ends a sentence. */
const stop = (s: string) => (/[.!?]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** A data text without a final full stop – for texts that code joins itself. */
const bare = (s: string) => s.trim().replace(/\.$/, "");
/** The `pick` lines ("Ang {name} ay …") of several exchanges, joined with ". " and closed. */
const picks = (list: Exchange[]) => `${list.map((a) => bare(altInfo(a).pick)).join(". ")}.`;
/** `afterSignupShort` without its leading "Oo – ". */
const withoutYes = (s: string) => lcData(s.replace(/^Oo\s*[–-]\s*/, ""));
/** `maxLeverage` inside a sentence: "hanggang 150x (BTCUSDT at ETHUSDT perpetual contract)". */
const leverageText = (s: string) => lcData(bare(s));

/* -------------------------------- vocabulary -------------------------------- */

/** `label` for the tables, `noun` after "may" / "nag-aalok ng" in sentences ("may copy trading"). */
const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "Copy trading", noun: "copy trading" },
  tradingBots: { label: "Mga trading bot", noun: "mga trading bot" },
  options: { label: "Options", noun: "options trading" },
  demoTrading: { label: "Demo trading", noun: "demo trading" },
  margin: { label: "Spot margin", noun: "spot margin trading" },
  p2p: { label: "P2P trading", noun: "P2P trading" },
  fiat: { label: "Pagbili gamit ang card / bangko", noun: "pagbili ng crypto gamit ang card o bank transfer" },
  earn: { label: "Earn / staking", noun: "mga Earn product" },
  launchpad: { label: "Launchpad / launchpool", noun: "launchpad" },
  web3Wallet: { label: "Web3 wallet", noun: "self-custody na Web3 wallet" },
  card: { label: "Crypto card", noun: "crypto card" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` for sentences ("sa United States"), `short` for the tables, `residents` as "mga residente ng …". */
const countryWords: Record<CountryKey, { name: string; short: string; residents: string }> = {
  us: { name: "United States", short: "United States", residents: "mga residente ng US" },
  uk: { name: "United Kingdom", short: "United Kingdom", residents: "mga residente ng UK" },
  ca: { name: "Canada", short: "Canada", residents: "mga residente ng Canada" },
  de: { name: "Germany", short: "Germany", residents: "mga residente ng Germany" },
  fr: { name: "France", short: "France", residents: "mga residente ng France" },
  nl: { name: "Netherlands", short: "Netherlands", residents: "mga residente ng Netherlands" },
  es: { name: "Spain", short: "Spain", residents: "mga residente ng Spain" },
  it: { name: "Italy", short: "Italy", residents: "mga residente ng Italy" },
  au: { name: "Australia", short: "Australia", residents: "mga residente ng Australia" },
  jp: { name: "Japan", short: "Japan", residents: "mga residente ng Japan" },
  sg: { name: "Singapore", short: "Singapore", residents: "mga residente ng Singapore" },
  hk: { name: "Hong Kong", short: "Hong Kong", residents: "mga residente ng Hong Kong" },
  in: { name: "India", short: "India", residents: "mga residente ng India" },
  ae: { name: "United Arab Emirates", short: "UAE", residents: "mga residente ng UAE" },
};
const countries = countryList.map((c) => ({ key: c.key, ...countryWords[c.key] }));

const statusLabel: Record<CountryStatus, string> = {
  restricted: "Restricted",
  regional: "Regional site",
  partial: "Bahagyang restricted",
  open: "Hindi restricted",
};

/** The market of a fee comparison: "spot" / "perpetual futures". */
const marketName = (market: "spot" | "futures") => (market === "spot" ? "spot" : "perpetual futures");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const label = marketName(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `Pareho ang standard ${label} fees ng ${a.name} at ${x.name}: ${fa.maker} maker / ${fa.taker} taker.`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `mas mura ang ${who} para sa mga maker at taker`
      : mm !== 0
        ? `mas mura ang ${who} para sa mga maker, at pareho ang binabayaran ng mga taker`
        : `mas mura ang ${who} para sa mga taker, at pareho ang binabayaran ng mga maker`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `mas mura ang ${a.name} para sa mga maker, at ang ${x.name} naman para sa mga taker`
          : `mas mura ang ${x.name} para sa mga maker, at ang ${a.name} naman para sa mga taker`;
  return `Sa ${label}, naniningil ang ${a.name} ng ${fa.maker} maker / ${fa.taker} taker at ang ${x.name} ng ${fx.maker} / ${fx.taker} – ${verdict}.`;
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
    `Sa ${marketName(market)}, naniningil ang ${x.name} ng ${feePair(fx)} (maker / taker).`,
    lower.length ? `Mas mura: ${rates(lower)}.` : `Wala sa ${alts.length} alternatibo ang mas mura.`,
    same.length ? `Parehong fees: ${names(same)}.` : "",
    higher.length ? `Mas mahal: ${rates(higher)}.` : "",
    mixed.length ? `Mas mura lang sa maker o sa taker: ${rates(mixed)}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (label: string, fa: Fee, fx: Fee) => {
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`Mas mababang ${label} fees: ${feePair(fa)} sa halip na ${feePair(fx)} (maker / taker)`);
    else if (m < 0 && t === 0) out.push(`Mas mababang ${label} maker fee: ${fa.maker} sa halip na ${fx.maker}`);
    else if (t < 0 && m === 0) out.push(`Mas mababang ${label} taker fee: ${fa.taker} sa halip na ${fx.taker}`);
    else if (m < 0) out.push(`Mas mababang ${label} maker fee: ${fa.maker} sa halip na ${fx.maker} (pero mas mataas ang taker fee)`);
    else if (t < 0) out.push(`Mas mababang ${label} taker fee: ${fa.taker} sa halip na ${fx.taker} (pero mas mataas ang maker fee)`);
  };
  fee("spot", a.spotFees, x.spotFees);
  fee("futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`Mas mataas na maximum leverage: ${leverageOf(a)}x sa halip na ${leverageOf(x)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`Mas malaking open interest sa derivatives: ${formatBn(a.market.openInterestBn)} kumpara sa ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`Mas maraming derivatives market: ${count(a.market.markets)} kumpara sa ${count(x.market.markets)}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`Puwede pang idagdag ang nakalimutang referral code (${withoutYes(bare(a.referral.afterSignupShort))})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`Nag-aalok ng ${joinList(notOffered.map((f) => f.noun))}, na hindi inaalok ng ${x.name}`);
  if (notFound.length)
    out.push(`Nag-aalok ng ${joinList(notFound.map((f) => f.noun))} – wala kaming nakitang ganitong produkto sa sariling website ng ${x.name}`);

  if (altInfo(a).mica && !altInfo(x).mica)
    out.push(`May platform para sa EEA (European Economic Area) na awtorisado sa ilalim ng MiCA (${bare(altInfo(a).mica)})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`Hindi restricted ang ${joinList(openWhere.map((c) => c.name))}, kung saan sarado ang ${x.name}`);
  if (regionalWhere.length)
    out.push(`Nagsisilbi sa ${joinList(regionalWhere.map((c) => c.name))} gamit ang regional platform, kung saan sarado ang ${x.name}`);
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
  if (own.status === "restricted") parts.push(`Isinasama ng ${x.name} ang ${c.name} sa sarili nitong listahan ng mga restricted na bansa.`);
  else if (own.status === "partial") parts.push(`Bahagyang restricted ang ${x.name} sa ${c.name}${ownNote}.`);
  else if (own.status === "regional") parts.push(`Nagsisilbi ang ${x.name} sa ${c.residents} gamit ang regional platform${ownNote}.`);
  else parts.push(`Hindi inililista ng ${x.name} ang ${c.name} bilang restricted.`);
  if (g.open.length) parts.push(`Hindi inililista ng ${names(g.open)} ang ${c.name} bilang restricted.`);
  if (g.regional.length)
    parts.push(
      `Nagsisilbi ang ${joinList(withNote(g.regional))} sa ${c.residents} gamit ang ${verb(g.regional, "hiwalay na regional platform", "kani-kaniyang hiwalay na regional platform")}.`,
    );
  if (g.partial.length) parts.push(`Bahagyang restricted: ${withNote(g.partial).join("; ")}.`);
  if (g.restricted.length) parts.push(`Restricted${own.status === "restricted" ? " din" : ""} ang ${c.name} sa ${names(g.restricted)}.`);
  if (!g.open.length && !g.regional.length) parts.push(`Wala sa ${alts.length} alternatibo ang ganap na bukas sa ${c.residents}.`);
  parts.push(
    "Nagbabago ang mga listahan ng bansa, at kahit wala sa listahan ang isang bansa, hindi iyon garantiya na inaalok doon ang bawat produkto – ang mga tuntunin ng exchange mismo ang nagpapasya.",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `Ito ang ${alts.length} alternatibo sa ${x.name} na inihahambing dito: ${names(alts)}. ${picks(alts)} Humihingi ng identity verification sa mga bagong user ang lahat ng ${alts.length} exchange, at may sariling listahan ng mga restricted na bansa ang bawat isa, kaya tingnan muna ang table ng mga bansa bago ka mag-sign up.`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `Tukuyin kung ano ang kailangang mas maganda kaysa sa ${x.name}`,
      text: `Mas mababang fees, mas mataas na leverage, mas maraming coin o simpleng exchange na tumatanggap sa bansa mo: makikita sa mga table sa page na ito kung saan angat ang bawat alternatibo sa ${x.name} at kung saan hindi.`,
    },
    {
      title: "Tiyaking tinatanggap ng exchange ang bansa mo",
      text: "May sariling listahan ng mga restricted na bansa ang bawat exchange, at inililipat ka ng ilan sa isang regional platform na iba ang mga produkto at limit. Tingnan ang table ng mga bansa bago ka mag-sign up.",
    },
    {
      title: "Mag-sign up gamit ang referral link",
      text: `Sa registration lang tumatanggap ng referral code ang ${names(signupOnly)}, o walang nakadokumentong paraan para idagdag ito pagkatapos, kaya gamitin ang link bago mo gawin ang account.${later.length ? ` Pinapayagan ng ${names(later)} na idagdag ang code pagkatapos, sa ilalim ng ilang kondisyon.` : ""}`,
    },
    {
      title: "I-verify ang identity mo bago maglipat ng pondo",
      text: `Humihingi ng identity verification sa mga bagong user ang lahat ng ${alts.length} alternatibo, at sa karamihan sa mga ito, naka-lock ang deposit o trading hangga't hindi pa tapos ang verification. Ihanda ang passport, ID card o driver's license mo.`,
    },
    {
      title: `Isara ang mga bukas mong posisyon sa ${x.name}`,
      text: `Hindi puwedeng ilipat mula sa isang exchange papunta sa iba ang mga posisyon sa futures at margin. Isara muna ang mga ito sa ${x.name}, o panatilihin ang account hanggang matapos ang mga ito.`,
    },
    {
      title: "Mag-withdraw papunta sa bagong deposit address mo",
      text: "I-copy ang deposit address mula sa bagong exchange, piliin ang parehong coin at parehong network sa magkabilang panig, at magpadala muna ng maliit na halaga bilang test. Puwedeng mawala ang transfer na ipinadala sa maling network.",
    },
    {
      title: `Pagpasyahan kung ano ang gagawin sa ${x.name} account mo`,
      text: `Puwede mo itong panatilihin – hiwalay sa isa't isa ang mga account sa magkakaibang exchange. Mananatili sa ${x.name} ang fee tier mo, ang referral mo at ang mga hindi nagamit na reward, at hindi lilipat ang mga ito.`,
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
      q: `Ano ang pinakamagandang alternatibo sa ${x.name}?`,
      a: `Walang iisang pinakamagandang alternatibo sa ${x.name} – depende ito sa dahilan kung bakit mo gustong lumipat. ${picks(alts)} Inihahambing sa page na ito ang lahat ng ${n} exchange sa ${x.name} ayon sa fees, leverage, mga produkto, availability sa bawat bansa at verification, gamit ang mga numero mula sa sariling website ng mga exchange, na sinuri noong ${date}.`,
    },
    {
      q: `Anong mga exchange ang katulad ng ${x.name}?`,
      a: `Pinakakahawig ng ${x.name} ang ${names(alts)}. Tulad nito, mga centralized exchange ang mga ito na nag-aalok ng spot at futures trading na may leverage sa iisang account, at may referral program para sa mga bagong user. Nagkakaiba ang mga ito sa fees, maximum leverage, dami ng nakalistang asset at mga bansang tinatanggap.`,
    },
    {
      q: `Ano ang pinakamalaking alternatibo sa ${x.name}?`,
      a: `Batay sa derivatives open interest sa CoinMarketCap (${prettyDate(site.marketDataDate)}), ang ${names(oi)} ang pinakamalaki sa ${n} alternatibo, na may ${formatBn(oi[0].market.openInterestBn)}. Nasa ${formatBn(x.market.openInterestBn)} naman ang ${x.name} mismo.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Aling alternatibo sa ${x.name} ang may pinakamababang fees?`,
      a: `Ang ${names(lowF)} ang may pinakamababang standard futures fees sa ${n} alternatibo: ${feePair(lowF[0].futuresFees)} (maker / taker). Sa spot, ang ${names(lowS)} ang pinakamura, na may ${feePair(lowS[0].spotFees)}. Naniningil ang ${x.name} ng ${feePair(x.futuresFees)} sa futures at ${feePair(x.spotFees)} sa spot.${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} Mga rate ito ng standard tier; lalo pa itong ibinababa ng mga VIP level at ng sariling token ng exchange.`,
    },
    {
      q: `Aling mga exchange ang mas mura kaysa sa ${x.name}?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `Sa perpetual futures: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}, kumpara sa ${feePair(x.futuresFees)} sa ${x.name}.` : `Sa perpetual futures, wala sa ${n} alternatibo ang mas mura kaysa sa ${feePair(x.futuresFees)} ng ${x.name}.`} ${cheaperS.length ? `Sa spot: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}, kumpara sa ${feePair(x.spotFees)} sa ${x.name}.` : `Sa spot, wala sa mga ito ang mas mura kaysa sa ${feePair(x.spotFees)} ng ${x.name}.`} Maker / taker sa standard tier ang lahat ng numero.`
          : `Sa standard tier, wala sa ${n} alternatibo ang mas mura kaysa sa ${x.name}: naniningil ang ${x.name} ng ${feePair(x.futuresFees)} sa futures at ${feePair(x.spotFees)} sa spot (maker / taker), ang pinakamababang rate sa paghahambing na ito. Sulit pa ring tingnan ang mga alternatibo dahil sa ibang dahilan – regulasyon, mga produkto o mga bansang tinatanggap ng mga ito.`,
    },
    {
      q: `Aling alternatibo sa ${x.name} ang may pinakamataas na leverage?`,
      a: `Ang ${names(highest)} ang may pinakamataas na leverage sa ${n} alternatibo: ${leverageText(highest[0].maxLeverage)}. Ang iba: ${alts
        .filter((a) => !highest.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join(", ")}. Sa ${x.name} mismo, ${leverageText(x.maxLeverage)}. Lubhang pinapataas ng mataas na leverage ang panganib na ma-liquidate ka.`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `Aling mga alternatibo sa ${x.name} ang puwede kong gamitin sa ${c.name}?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `May alternatibo ba sa ${x.name} na walang KYC?`,
      a: `Wala sa ${n} alternatibong ito. Humihingi ng identity verification sa mga bagong user ang bawat isa sa mga ito: ${alts.map((a) => `${a.name} – ${lcData(bare(a.signup.kycShort))}`).join("; ")}. Sa ${x.name} mismo: ${stop(lcData(x.signup.kycShort))}`,
    },
    {
      q: `Aling mga alternatibo sa ${x.name} ang nasa ilalim ng regulasyon ng MiCA sa EU?`,
      a: `${mica.length ? `May entity na awtorisado sa ilalim ng MiCA para sa mga residente ng EEA (European Economic Area) ang ${joinList(mica.map((a) => `${a.name} (${bare(altInfo(a).mica)})`))}.` : `Wala sa ${n} alternatibo ang may binabanggit na entity na awtorisado sa ilalim ng MiCA.`}${noMica.length ? ` Walang binabanggit na awtorisasyon sa ilalim ng MiCA ang ${names(noMica)} sa ${verb(noMica, "sarili nitong mga page", "kani-kaniyang mga page")}.` : ""} ${xInfo.mica ? `Sa ${x.name} mismo: ${stop(xInfo.mica)}` : `Walang binabanggit ang ${x.name} mismo.`} Karaniwang may sariling hanay ng mga produkto, fees at limit ang isang regional platform.`,
    },
    {
      q: `Aling alternatibo sa ${x.name} ang pinakaligtas?`,
      a: `Walang centralized exchange na walang panganib, kaya ang tapat na paghahambing ay ang tingnan kung ano ang inilalathala ng bawat isa. ${alts.map((a) => `${a.name}: proof of reserves – ${stop(altInfo(a).reserves)} ${altInfo(a).fund ? stop(altInfo(a).fund) : "Walang binabanggit na protection fund."}`).join(" ")} Sa anumang exchange, itago lang doon ang pondong aktibo mong ginagamit sa trading.`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `Aling mga alternatibo sa ${x.name} ang may ${f.noun}?`,
      a: `${yes.length ? `May ${f.noun} ang ${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))}.` : `Wala sa ${n} alternatibo ang nagpapakita ng ${f.noun} sa sarili nitong website.`}${no.length ? ` Hindi ito inaalok ng ${names(no)}.` : ""}${unknown.length ? ` Sa ${verb(unknown, "website", "mga website")} ng ${names(unknown)}, wala kaming nakitang ganitong produkto nang suriin namin.` : ""} ${own === true ? `Mayroon din nito ang ${x.name} mismo.` : own === false ? `Hindi ito inaalok ng ${x.name} mismo.` : `Walang ganitong produkto sa website ng ${x.name} mismo.`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `Aling alternatibo sa ${x.name} ang may pinakamaraming coin?`,
      a: `Ayon sa sariling numero ng bawat exchange: ${alts.map((a) => `${a.name} – ${lcData(bare(a.assets))}`).join("; ")}. ${x.name}: ${stop(lcData(x.assets))} Magkakaiba ang paraan ng pagbilang ng mga exchange – coin ang binibilang ng ilan, trading pair naman ng iba – kaya hindi direktang maihahambing ang mga numerong ito.`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `Paano lumipat mula sa ${x.name} papunta sa ibang exchange?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}.`)
        .join(" "),
    },
    {
      q: `Puwede ko bang panatilihin ang ${x.name} account ko kapag gumawa ako ng account sa ibang exchange?`,
      a: `Oo. Magkakahiwalay na kumpanya ang mga exchange, kaya hindi naaapektuhan ng account mo sa isa ang account mo sa iba, at puwede mong gamitin nang sabay ang dalawa. Ang hindi lumilipat ay ang anumang nakatali sa account: mananatili sa ${x.name} ang referral mo sa ${x.name}, ang fee tier mo, ang mga welcome reward at ang trading history mo.`,
    },
    {
      q: `Puwede ko bang ilipat ang mga bukas na posisyon sa futures mula sa ${x.name} papunta sa ibang exchange?`,
      a: `Hindi. Umiiral lang ang isang posisyon sa futures sa exchange kung saan ito binuksan. Para lumipat, isara ang posisyon sa ${x.name}, i-withdraw ang pondo at magbukas ng bagong posisyon sa kabilang exchange – sa presyo at fees na umiiral doon.`,
    },
    {
      q: `May referral code ba ang mga alternatibo sa ${x.name}?`,
      a: `Oo, lahat ng ${n} exchange: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("; ")}. Libre ang paggamit ng referral code at hindi nito pinapataas ang trading fees mo.`,
    },
    {
      q: `Puwede ko bang idagdag ang referral code pagkatapos mag-sign up sa isang alternatibo sa ${x.name}?`,
      a: `${alts.map((a) => `${a.name}: ${lcData(bare(a.referral.afterSignupShort))}`).join(". ")}. Sa lahat ng exchange, ang ligtas na paraan ay mag-sign up gamit ang referral link.`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `Mas maganda ba ang ${a.name} kaysa sa ${x.name}?`,
      a: `${ahead.length ? `Angat ang ${a.name} sa ${x.name} sa mga puntong ito: ${ahead.map(lcFirst).join("; ")}.` : `Sa mga puntong inihahambing namin, walang nasusukat na kalamangan ang ${a.name} sa ${x.name}.`} ${behind.length ? `Angat naman ang ${x.name} sa: ${behind.map(lcFirst).join("; ")}.` : `Hindi angat ang ${x.name} sa alinman sa mga ito.`} Bagay sa iyo ang ${a.name} kung ${lcData(bare(altInfo(a).chooseIf[0]))}.`,
    };
  });

  return [
    { id: "choosing", title: `Pagpili ng alternatibo sa ${x.name}`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "Fees at leverage", faqs: fees },
    { id: "countries", title: "Mga bansa, KYC at regulasyon", faqs: countryFaqs },
    { id: "features", title: "Mga produkto at coin", faqs: featureFaqs },
    { id: "switching", title: `Paglipat mula sa ${x.name} at mga referral code`, faqs: switching },
    { id: "versus", title: `${x.name} vs mga alternatibo`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `Ano ang mga pinakamagandang alternatibo sa ${x.name}?`,
    a: `${picks(alts)} Inihahambing ng page namin tungkol sa mga alternatibo sa ${x.name} ang lahat ng ${alts.length} exchange sa ${x.name} ayon sa fees, leverage, mga produkto, availability sa bawat bansa at verification.`,
  };
}

export const fil: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "Oo", no: "Hindi", notFound: "Hindi nakita sa sariling website" },
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
