/**
 * The sentences of the comparison pages in Swahili. Same functions and the same logic as `./en.ts`, written in
 * Swahili grammar.
 *
 * Wording: "jukwaa" / "majukwaa" (exchange), "mbadala wa Binance" / "majukwaa mbadala", "msimbo wa rufaa", "ada",
 * "maker / taker", "uthibitishaji wa utambulisho (KYC)", address in the second person singular, the site "sisi".
 * A bare exchange name is class 9 ("Binance inatoza"), two or more are class 10 ("Binance na OKX zinatoza") –
 * `verb()` picks the form. Possessives put the head noun first ("ada za Binance"); nothing is glued to a name.
 * Country names stand alone in `name`; `inName` holds the form after "in" ("nchini Marekani", "huko Hong Kong").
 * Country objects carry no object marker ("inazuia Marekani"), so "Falme za Kiarabu" needs no special case.
 * Fee rates arrive in the site's notation (0.02%); leverage stays 150x; counts with comma grouping.
 *
 * Capitals: inserted data texts are lower-cased inside a sentence only where English does it, and never when they
 * start with an exchange name or an acronym (Gate's "Gate haijataja …", KYC, VIP, BTC).
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

const locale = "sw";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const count = (n: number) => n.toLocaleString("en-US");

/* -------------------------------- capitals -------------------------------- */

/** A data text that starts with an exchange name or an acronym keeps its capital. */
const keepsCapital = /^(?:Binance|OKX|Bybit|Bitget|Gate|KuCoin|MEXC|[A-Z][A-Z0-9]+\b)/;
/** Lower-cases the first letter of a data text inside a sentence ("Ndiyo – …" → "ndiyo – …", "Hadi 150x" → "hadi 150x"). */
const lc = (s: string) => (keepsCapital.test(s) ? s : lcFirst(s));

/** Ends a data text with a full stop unless it already ends a sentence. */
const stop = (s: string) => (/[.!?]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** A data text without a final full stop – for texts that code joins itself. */
const bare = (s: string) => s.trim().replace(/\.$/, "");
/** The `pick` lines of several exchanges, joined with ". " and closed. */
const picks = (list: Exchange[]) => `${list.map((a) => bare(altInfo(a).pick)).join(". ")}.`;
/** `afterSignupShort` without its leading "Ndiyo – ". */
const withoutYes = (s: string) => s.replace(/^Ndiyo\s*–\s*/, "");

/* -------------------------------- vocabulary -------------------------------- */

/**
 * `label` for the tables, `noun` as the object of "inatoa" in sentences ("inatoa copy trading"); `first` is the
 * form of the question, where the term appears for the first time.
 */
const featureWords: Record<FeatureKey, { label: string; noun: string; first?: string }> = {
  copyTrading: { label: "Copy trading", noun: "copy trading" },
  tradingBots: { label: "Roboti za biashara", noun: "roboti za biashara", first: "roboti za biashara (trading bots)" },
  options: { label: "Options", noun: "biashara ya options" },
  demoTrading: { label: "Biashara ya demo", noun: "biashara ya demo" },
  margin: { label: "Spot margin", noun: "biashara ya margin kwenye spot" },
  p2p: { label: "Biashara ya P2P", noun: "biashara ya P2P" },
  fiat: { label: "Kununua kwa kadi / benki", noun: "ununuzi wa crypto kwa kadi au uhamisho wa benki" },
  earn: { label: "Earn / staking", noun: "bidhaa za Earn" },
  launchpad: { label: "Launchpad / launchpool", noun: "launchpad" },
  web3Wallet: { label: "Pochi ya Web3", noun: "pochi ya Web3 unayoidhibiti mwenyewe" },
  card: { label: "Kadi ya crypto", noun: "kadi ya crypto" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` for sentences, `short` for the tables, `inName` after "in" ("nchini Marekani", "huko Hong Kong"). */
const countryWords: Record<CountryKey, { name: string; short: string; inName: string; residents: string }> = {
  us: { name: "Marekani", short: "Marekani", inName: "nchini Marekani", residents: "wakazi wa Marekani" },
  uk: { name: "Uingereza", short: "Uingereza", inName: "nchini Uingereza", residents: "wakazi wa Uingereza" },
  ca: { name: "Kanada", short: "Kanada", inName: "nchini Kanada", residents: "wakazi wa Kanada" },
  de: { name: "Ujerumani", short: "Ujerumani", inName: "nchini Ujerumani", residents: "wakazi wa Ujerumani" },
  fr: { name: "Ufaransa", short: "Ufaransa", inName: "nchini Ufaransa", residents: "wakazi wa Ufaransa" },
  nl: { name: "Uholanzi", short: "Uholanzi", inName: "nchini Uholanzi", residents: "wakazi wa Uholanzi" },
  es: { name: "Uhispania", short: "Uhispania", inName: "nchini Uhispania", residents: "wakazi wa Uhispania" },
  it: { name: "Italia", short: "Italia", inName: "nchini Italia", residents: "wakazi wa Italia" },
  au: { name: "Australia", short: "Australia", inName: "nchini Australia", residents: "wakazi wa Australia" },
  jp: { name: "Japani", short: "Japani", inName: "nchini Japani", residents: "wakazi wa Japani" },
  sg: { name: "Singapore", short: "Singapore", inName: "nchini Singapore", residents: "wakazi wa Singapore" },
  hk: { name: "Hong Kong", short: "Hong Kong", inName: "huko Hong Kong", residents: "wakazi wa Hong Kong" },
  in: { name: "India", short: "India", inName: "nchini India", residents: "wakazi wa India" },
  ae: { name: "Falme za Kiarabu", short: "UAE", inName: "nchini Falme za Kiarabu", residents: "wakazi wa UAE" },
};
const countries = countryList.map((c) => ({ key: c.key, ...countryWords[c.key] }));

const statusLabel: Record<CountryStatus, string> = {
  restricted: "Imezuiwa",
  regional: "Tovuti ya kikanda",
  partial: "Imezuiwa kwa sehemu",
  open: "Haijazuiwa",
};

/** The market of a fee comparison after "kwenye": "spot" / "mikataba ya perpetual". */
const marketName = (market: "spot" | "futures") => (market === "spot" ? "spot" : "mikataba ya perpetual");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const label = marketName(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${a.name} na ${x.name} zinatoza ada zilezile za kawaida kwenye ${label}: ${fa.maker} maker / ${fa.taker} taker.`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} ni nafuu zaidi kwa maker na kwa taker`
      : mm !== 0
        ? `${who} ni nafuu zaidi kwa maker, huku ada ya taker ikiwa sawa`
        : `${who} ni nafuu zaidi kwa taker, huku ada ya maker ikiwa sawa`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} ni nafuu zaidi kwa maker, ${x.name} kwa taker`
          : `${x.name} ni nafuu zaidi kwa maker, ${a.name} kwa taker`;
  return `Kwenye ${label}, ${a.name} inatoza ${fa.maker} maker / ${fa.taker} taker huku ${x.name} ikitoza ${fx.maker} / ${fx.taker} – ${verdict}.`;
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
    `Kwenye ${marketName(market)}, ${x.name} inatoza ${feePair(fx)} (maker / taker).`,
    lower.length ? `Nafuu zaidi: ${rates(lower)}.` : `Hakuna hata moja kati ya majukwaa mbadala ${alts.length} lililo nafuu zaidi.`,
    same.length ? `Ada sawa: ${names(same)}.` : "",
    higher.length ? `Ghali zaidi: ${rates(higher)}.` : "",
    mixed.length ? `Nafuu zaidi kwa maker pekee au kwa taker pekee: ${rates(mixed)}.` : "",
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
    if (m < 0 && t < 0) out.push(`Ada za chini zaidi kwenye ${label}: ${feePair(fa)} badala ya ${feePair(fx)} (maker / taker)`);
    else if (m < 0 && t === 0) out.push(`Ada ya maker iliyo chini zaidi kwenye ${label}: ${fa.maker} badala ya ${fx.maker}`);
    else if (t < 0 && m === 0) out.push(`Ada ya taker iliyo chini zaidi kwenye ${label}: ${fa.taker} badala ya ${fx.taker}`);
    else if (m < 0)
      out.push(`Ada ya maker iliyo chini zaidi kwenye ${label}: ${fa.maker} badala ya ${fx.maker} (lakini ada ya taker iko juu zaidi)`);
    else if (t < 0)
      out.push(`Ada ya taker iliyo chini zaidi kwenye ${label}: ${fa.taker} badala ya ${fx.taker} (lakini ada ya maker iko juu zaidi)`);
  };
  fee("spot", a.spotFees, x.spotFees);
  fee("futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`Kikomo cha leverage kilicho juu zaidi: ${leverageOf(a)}x badala ya ${leverageOf(x)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`Open interest kubwa zaidi kwenye derivatives: ${formatBn(a.market.openInterestBn)} dhidi ya ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`Masoko mengi zaidi ya derivatives: ${count(a.market.markets)} dhidi ya ${count(x.market.markets)}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`Bado unaweza kuongeza msimbo wa rufaa uliousahau (${lc(withoutYes(bare(a.referral.afterSignupShort)))})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`Inatoa ${joinList(notOffered.map((f) => f.noun))}, wakati ${x.name} haitoi`);
  if (notFound.length)
    out.push(`Inatoa ${joinList(notFound.map((f) => f.noun))} – kwenye tovuti ya ${x.name} yenyewe hatukupata bidhaa kama hiyo`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`Jukwaa la EEA lililoidhinishwa chini ya MiCA (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`Haizuii ${joinList(openWhere.map((c) => c.name))}, ambako ${x.name} imefungwa`);
  if (regionalWhere.length)
    out.push(`Inahudumia ${joinList(regionalWhere.map((c) => c.name))} kupitia jukwaa la kikanda, ambako ${x.name} imefungwa`);
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
  if (own.status === "restricted") parts.push(`${x.name} inataja ${c.name} kwenye orodha yake yenyewe ya nchi zilizozuiwa.`);
  else if (own.status === "partial") parts.push(`${x.name} inazuia ${c.name} kwa sehemu${ownNote}.`);
  else if (own.status === "regional") parts.push(`${x.name} inahudumia ${c.residents} kupitia jukwaa la kikanda${ownNote}.`);
  else parts.push(`${x.name} haiorodheshi ${c.name} kama nchi iliyozuiwa.`);
  if (g.open.length) parts.push(`${names(g.open)} ${verb(g.open, "haiorodheshi", "haziorodheshi")} ${c.name} kama nchi iliyozuiwa.`);
  if (g.regional.length)
    parts.push(
      `${joinList(withNote(g.regional))} ${verb(g.regional, "inahudumia", "zinahudumia")} ${c.residents}${verb(g.regional, " kupitia jukwaa tofauti la kikanda", ", kila moja kupitia jukwaa lake tofauti la kikanda")}.`,
    );
  if (g.partial.length) parts.push(`Vizuizi kwa sehemu: ${withNote(g.partial).join("; ")}.`);
  if (g.restricted.length)
    parts.push(`${names(g.restricted)} ${verb(g.restricted, "inazuia", "zinazuia")} ${c.name}${own.status === "restricted" ? " pia" : ""}.`);
  if (!g.open.length && !g.regional.length)
    parts.push(`Hakuna hata moja kati ya majukwaa mbadala ${alts.length} lililo wazi kikamilifu kwa ${c.residents}.`);
  parts.push(
    "Orodha za nchi hubadilika, na nchi kutotajwa kwenye orodha haimaanishi kwamba kila bidhaa inapatikana huko – masharti ya jukwaa husika ndiyo yanayoamua.",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `Majukwaa mbadala ${alts.length} ya ${x.name} tunayolinganisha hapa ni ${names(alts)}. ${picks(alts)} Majukwaa yote ${alts.length} yanawataka watumiaji wapya wathibitishe utambulisho wao (KYC) na kila moja lina orodha yake ya nchi zilizozuiwa, kwa hiyo angalia jedwali la nchi kabla ya kujisajili.`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `Amua ni nini kinapaswa kuwa bora kuliko kwenye ${x.name}`,
      text: `Ada za chini zaidi, leverage kubwa zaidi, sarafu nyingi zaidi au angalau jukwaa linalokubali nchi yako: majedwali ya ukurasa huu yanaonyesha pale kila jukwaa mbadala lilipo mbele ya ${x.name} na pale lisipokuwa mbele.`,
    },
    {
      title: "Hakikisha jukwaa linakubali nchi yako",
      text: "Kila jukwaa lina orodha yake ya nchi zilizozuiwa, na baadhi hukuelekeza kwenye jukwaa la kikanda lenye bidhaa na vikomo tofauti. Angalia jedwali la nchi kabla ya kujisajili.",
    },
    {
      title: "Jisajili kupitia kiungo cha rufaa",
      text: `${names(signupOnly)} ${verb(signupOnly, "inapokea", "zinapokea")} msimbo wa rufaa wakati wa usajili tu au ${verb(signupOnly, "haielezi", "hazielezi")} njia yoyote ya kuuongeza baadaye, kwa hiyo tumia kiungo kabla akaunti haijafunguliwa.${later.length ? ` ${names(later)} ${verb(later, "inaruhusu", "zinaruhusu")} kuuongeza baadaye kwa masharti fulani.` : ""}`,
    },
    {
      title: "Thibitisha utambulisho wako kabla ya kuhamisha pesa",
      text: `Majukwaa mbadala yote ${alts.length} yanawataka watumiaji wapya wathibitishe utambulisho wao, na kwenye mengi yao huwezi kuweka pesa wala kufanya biashara hadi uthibitishaji ukamilike. Andaa pasipoti, kitambulisho au leseni ya udereva.`,
    },
    {
      title: `Funga nafasi zako zilizo wazi kwenye ${x.name}`,
      text: `Nafasi za futures na margin haziwezi kuhamishwa kutoka jukwaa moja kwenda jingine. Zifunge kwanza kwenye ${x.name} au baki na akaunti hadi nafasi hizo zifikie mwisho.`,
    },
    {
      title: "Toa pesa kwenda anwani yako mpya ya amana",
      text: "Nakili anwani ya amana kutoka jukwaa jipya, chagua sarafu ileile na mtandao uleule pande zote mbili, kisha tuma kiasi kidogo cha majaribio kwanza. Uhamisho uliotumwa kwenye mtandao usio sahihi unaweza kupotea.",
    },
    {
      title: `Amua hatima ya akaunti yako ya ${x.name}`,
      text: `Unaweza kuendelea kuwa nayo – akaunti kwenye majukwaa tofauti hazitegemeani. Ngazi yako ya ada, rufaa yako na zawadi ambazo hujazitumia hubaki kwenye ${x.name} na hazihamishwi.`,
    },
  ];
}

/** All questions an alternatives page answers, grouped for display. Answers are built from the data files. */
function buildAlternativesFaqs(x: Exchange, alts: Exchange[]): AltFaqGroup[] {
  const n = alts.length;
  const date = prettyDate(site.lastReviewed);
  const lowF = lowestFutures(alts);
  const lowS = lowestSpot(alts);
  const hi = highestLeverage(alts);
  const oi = largestOpenInterest(alts);
  const cheaperF = alts.filter((a) => cheaper(a.futuresFees, x.futuresFees));
  const cheaperS = alts.filter((a) => cheaper(a.spotFees, x.spotFees));
  const mica = withMica(alts);
  const noMica = alts.filter((a) => !altInfo(a).mica);
  const xInfo = altInfo(x);

  const choosing: Faq[] = [
    {
      q: `Mbadala bora wa ${x.name} ni upi?`,
      a: `Hakuna mbadala mmoja wa ${x.name} ulio bora kuliko yote – inategemea sababu inayokufanya utake kuhama. ${picks(alts)} Ukurasa huu unalinganisha majukwaa yote ${n} na ${x.name} kwa ada, leverage, bidhaa, upatikanaji katika nchi na uthibitishaji wa utambulisho, kwa takwimu kutoka tovuti za majukwaa yenyewe, zilizokaguliwa ${date}.`,
    },
    {
      q: `Majukwaa yanayofanana na ${x.name} ni yapi?`,
      a: `${names(alts)} ndizo zinazofanana nayo zaidi. Kama ${x.name}, ni majukwaa ya kati (centralised exchanges) yanayotoa biashara ya spot na futures zenye leverage kwa akaunti moja na yanaendesha mpango wa rufaa kwa watumiaji wapya. Yanatofautiana kwa ada, kiwango cha juu cha leverage, idadi ya mali za kidijitali zilizoorodheshwa na nchi yanazokubali.`,
    },
    {
      q: `Mbadala mkubwa zaidi wa ${x.name} ni upi?`,
      a: `Kwa kipimo cha open interest (jumla ya mikataba iliyo wazi) ya derivatives kwenye CoinMarketCap (${prettyDate(site.marketDataDate)}), ${names(oi)} ${verb(oi, "ndiyo kubwa zaidi", "ndizo kubwa zaidi")} kati ya majukwaa mbadala ${n}, ${verb(oi, "ikiwa na", "zikiwa na")} ${formatBn(oi[0].market.openInterestBn)}. ${x.name} yenyewe ilikuwa na ${formatBn(x.market.openInterestBn)}.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Mbadala wa ${x.name} wenye ada za chini zaidi ni upi?`,
      a: `${names(lowF)} ${verb(lowF, "ina", "zina")} ada za futures zilizo chini zaidi kati ya majukwaa ${n} katika kiwango cha kawaida: ${feePair(lowF[0].futuresFees)} (maker / taker). Kwenye spot, ${names(lowS)} ${verb(lowS, "ndiyo nafuu zaidi", "ndizo nafuu zaidi")}: ${feePair(lowS[0].spotFees)}. ${x.name} inatoza ${feePair(x.futuresFees)} kwenye futures na ${feePair(x.spotFees)} kwenye spot.${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} Hizi ni ada za kiwango cha kawaida; ngazi za VIP na tokeni za majukwaa yenyewe huzipunguza zaidi.`,
    },
    {
      q: `Majukwaa yenye ada nafuu kuliko ${x.name} ni yapi?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `Kwenye mikataba ya perpetual: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}, dhidi ya ${feePair(x.futuresFees)} kwenye ${x.name}.` : `Kwenye mikataba ya perpetual, hakuna hata moja kati ya majukwaa mbadala ${n} linalotoza chini ya ${x.name} (${feePair(x.futuresFees)}).`} ${cheaperS.length ? `Kwenye spot: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}, dhidi ya ${feePair(x.spotFees)} kwenye ${x.name}.` : `Kwenye spot, hakuna hata moja kati yao linalotoza chini ya ${x.name} (${feePair(x.spotFees)}).`} Takwimu zote ni maker / taker katika kiwango cha kawaida.`
          : `Katika kiwango cha kawaida, hakuna hata moja kati ya majukwaa mbadala ${n} linalotoza chini ya ${x.name}: ${x.name} inatoza ${feePair(x.futuresFees)} kwenye futures na ${feePair(x.spotFees)} kwenye spot (maker / taker), viwango vya chini zaidi katika ulinganisho huu. Majukwaa mbadala yanastahili kuangaliwa kwa sababu nyingine – udhibiti, bidhaa au nchi yanazokubali.`,
    },
    {
      q: `Mbadala wa ${x.name} wenye leverage ya juu zaidi ni upi?`,
      a: `${names(hi)} ${verb(hi, "inatoa", "zinatoa")} leverage ya juu zaidi kati ya majukwaa ${n}: ${lc(hi[0].maxLeverage)}. Majukwaa mengine: ${alts
        .filter((a) => !hi.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join(", ")}. ${x.name} yenyewe inatoa ${lc(x.maxLeverage)}. Leverage kubwa huongeza sana hatari ya liquidation (nafasi kufungwa kwa lazima).`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `Majukwaa mbadala ya ${x.name} ninayoweza kutumia ${c.inName} ni yapi?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `Je, kuna mbadala wa ${x.name} usiohitaji KYC?`,
      a: `Hakuna kati ya majukwaa haya ${n}. Kila moja linawataka watumiaji wapya wathibitishe utambulisho wao: ${alts.map((a) => `${a.name} – ${lc(bare(a.signup.kycShort))}`).join("; ")}. ${x.name} yenyewe: ${stop(lc(x.signup.kycShort))}`,
    },
    {
      q: `Majukwaa mbadala ya ${x.name} yanayosimamiwa chini ya MiCA katika Umoja wa Ulaya (EU) ni yapi?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} ${verb(mica, "inataja", "zinataja")} kampuni iliyoidhinishwa chini ya MiCA kwa wakazi wa Eneo la Kiuchumi la Ulaya (EEA).` : `Hakuna hata moja kati ya majukwaa ${n} linalotaja kampuni iliyoidhinishwa chini ya MiCA.`}${noMica.length ? ` ${names(noMica)} ${verb(noMica, "haionyeshi", "hazionyeshi")} idhini yoyote ya MiCA kwenye kurasa ${verb(noMica, "zake", "zao")}.` : ""} ${xInfo.mica ? `${x.name} yenyewe: ${stop(xInfo.mica)}` : `${x.name} yenyewe haionyeshi kampuni yoyote kama hiyo.`} Jukwaa la kikanda kwa kawaida lina bidhaa zake, ada zake na vikomo vyake.`,
    },
    {
      q: `Mbadala wa ${x.name} ulio salama zaidi ni upi?`,
      a: `Hakuna jukwaa la kati lisilo na hatari, kwa hiyo njia ya haki ya kulinganisha ni kuangalia kile ambacho kila moja linachapisha. ${alts.map((a, i) => `${a.name}: uthibitisho wa akiba${i === 0 ? " (proof of reserves)" : ""} – ${stop(altInfo(a).reserves)} ${altInfo(a).fund ? stop(altInfo(a).fund) : "Hakuna mfuko wa ulinzi uliotajwa."}`).join(" ")} Kwenye jukwaa lolote, weka tu pesa unazozitumia kufanya biashara kwa sasa.`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `Majukwaa mbadala ya ${x.name} yanayotoa ${f.first ?? f.noun} ni yapi?`,
      a: `${yes.length ? `${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))} ${verb(yes, "inatoa", "zinatoa")} ${f.noun}.` : `Hakuna hata moja kati ya majukwaa mbadala ${n} linaloonyesha ${f.noun} kwenye tovuti yake.`}${no.length ? ` ${names(no)} ${verb(no, "haitoi", "hazitoi")} huduma hii.` : ""}${unknown.length ? ` Kwenye ${verb(unknown, "tovuti ya", "tovuti za")} ${names(unknown)} hatukupata bidhaa kama hiyo tulipokagua.` : ""} ${x.name} yenyewe ${own === true ? "pia inatoa huduma hii" : own === false ? "haitoi huduma hii" : "haionyeshi bidhaa kama hiyo kwenye tovuti yake"}.`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `Mbadala wa ${x.name} unaoorodhesha sarafu nyingi zaidi ni upi?`,
      a: `Kwa takwimu za majukwaa yenyewe: ${alts.map((a) => `${a.name} – ${lc(bare(a.assets))}`).join("; ")}. ${x.name}: ${stop(lc(x.assets))} Majukwaa huhesabu kwa njia tofauti – baadhi huhesabu sarafu, mengine jozi za biashara – kwa hiyo takwimu hizi haziwezi kulinganishwa moja kwa moja.`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `Jinsi ya kuhama kutoka ${x.name} kwenda jukwaa jingine?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}.`)
        .join(" "),
    },
    {
      q: `Je, naweza kubaki na akaunti yangu ya ${x.name} nikifungua akaunti kwenye jukwaa jingine?`,
      a: `Ndiyo. Majukwaa haya ni kampuni tofauti, kwa hiyo akaunti kwenye moja haiathiri akaunti kwenye jingine na unaweza kutumia zote mbili sambamba. Kisichohamishwa ni chochote kilichofungamana na akaunti: rufaa yako ya ${x.name}, ngazi yako ya ada, zawadi za ukaribisho na historia yako ya biashara hubaki kwenye ${x.name}.`,
    },
    {
      q: `Je, naweza kuhamisha nafasi za futures zilizo wazi kutoka ${x.name} kwenda jukwaa jingine?`,
      a: `Hapana. Nafasi ya futures ipo tu kwenye jukwaa ilipofunguliwa. Ili kuhama, funga nafasi hiyo kwenye ${x.name}, toa pesa kisha fungua nafasi mpya kwenye jukwaa jingine – kwa bei na ada zinazotumika huko.`,
    },
    {
      q: `Je, majukwaa mbadala ya ${x.name} yana misimbo ya rufaa?`,
      a: `Ndiyo, majukwaa yote ${n}: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("; ")}. Kutumia msimbo wa rufaa ni bure na hakuongezi ada zako za biashara.`,
    },
    {
      q: `Je, naweza kuweka msimbo wa rufaa baadaye kwenye mbadala wa ${x.name}?`,
      a: `${alts.map((a) => `${a.name}: ${lc(bare(a.referral.afterSignupShort))}`).join(". ")}. Njia salama kwenye kila jukwaa ni kujisajili kupitia kiungo cha rufaa.`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `Je, ${a.name} ni bora kuliko ${x.name}?`,
      a: `${ahead.length ? `${a.name} iko mbele ya ${x.name} katika vipengele hivi: ${ahead.map(lcFirst).join("; ")}.` : `Katika vipengele tunavyolinganisha, ${a.name} haina faida inayoweza kupimwa dhidi ya ${x.name}.`} ${behind.length ? `${x.name} iko mbele katika: ${behind.map(lcFirst).join("; ")}.` : `${x.name} haiko mbele katika kipengele chochote.`} ${a.name} inakufaa ikiwa ${lc(bare(altInfo(a).chooseIf[0]))}.`,
    };
  });

  return [
    { id: "choosing", title: `Kuchagua mbadala wa ${x.name}`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "Ada na leverage", faqs: fees },
    { id: "countries", title: "Nchi, KYC na udhibiti", faqs: countryFaqs },
    { id: "features", title: "Bidhaa na sarafu", faqs: featureFaqs },
    { id: "switching", title: `Kuhama kutoka ${x.name} na misimbo ya rufaa`, faqs: switching },
    { id: "versus", title: `${x.name} vs majukwaa mbadala`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `Majukwaa mbadala bora ya ${x.name} ni yapi?`,
    a: `${picks(alts)} Ukurasa wetu wa mbadala wa ${x.name} unalinganisha majukwaa yote ${alts.length} na ${x.name} kwa ada, leverage, bidhaa, upatikanaji katika nchi na uthibitishaji wa utambulisho.`,
  };
}

export const sw: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "Ndiyo", no: "Hapana", notFound: "Haikupatikana kwenye tovuti yake" },
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
