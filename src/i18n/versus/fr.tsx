/**
 * The head-to-head pages ("/fr/<a>-vs-<b>") and the comparison hub ("/fr/comparatif") in French.
 * Same keys as `./en.tsx`, written in French.
 *
 * Wording: « plateforme » (f.), « frais », « code de parrainage », « levier », « futures », « vous ». The pages call
 * themselves « face-à-face », the hub « Comparatif des plateformes »; "Ahead" is « Avantage », "Level" « Égalité ».
 * "vs" stays "vs". Fee rates come from the data in French notation (0,02 %). Exchange names take no article and are
 * feminine; "de" and "que" before a name come from `../fr-elision` (« d'OKX », « qu'OKX »). Country names with their
 * article and preposition come from `countryForms` below – never "de" + country.
 */
import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import { exchanges } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, leverageOf, verb } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import { de, que } from "../fr-elision";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "fr";
const ct = compareText(locale);
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const { advantages, feeSentence, names } = ct;
const featureList = ct.features;
const countryList = ct.countries;
type Country = (typeof countryList)[number];

/* ---------------------------------- grammar --------------------------------- */

/** Each country inside a sentence, with its article (« les États-Unis »), and after "in" (« aux États-Unis »). */
const countryForms: Record<CountryKey, { the: string; in: string }> = {
  us: { the: "les États-Unis", in: "aux États-Unis" },
  uk: { the: "le Royaume-Uni", in: "au Royaume-Uni" },
  ca: { the: "le Canada", in: "au Canada" },
  de: { the: "l'Allemagne", in: "en Allemagne" },
  fr: { the: "la France", in: "en France" },
  nl: { the: "les Pays-Bas", in: "aux Pays-Bas" },
  es: { the: "l'Espagne", in: "en Espagne" },
  it: { the: "l'Italie", in: "en Italie" },
  au: { the: "l'Australie", in: "en Australie" },
  jp: { the: "le Japon", in: "au Japon" },
  sg: { the: "Singapour", in: "à Singapour" },
  hk: { the: "Hong Kong", in: "à Hong Kong" },
  in: { the: "l'Inde", in: "en Inde" },
  ae: { the: "les Émirats arabes unis", in: "aux Émirats arabes unis" },
};

/* ---------------------------------- helpers --------------------------------- */

const properNames = new Set(exchanges.map((e) => e.name));
/**
 * Lower-cases the first letter of a text from the data where it continues a sentence ("Oui – …" → "oui – …",
 * "Jusqu'à …" → "jusqu'à …"). A text that starts with an exchange name or an abbreviation (KYC, MiCA, BTC, USDT)
 * keeps its capital.
 */
const lcFirst = (s: string) => {
  const first = s.split(/[\s–:,;.()]/)[0];
  return properNames.has(first) || /[A-Z0-9]/.test(first.slice(1)) ? s : s.charAt(0).toLowerCase() + s.slice(1);
};
/** "Plus de 320 millions d'utilisateurs inscrits (selon Binance)" → without the bracket; likewise "… (Bybit API)". */
const withoutSource = (s: string) => s.replace(/\s*\((?:selon [^()]*|[^()]*\bAPI\b[^()]*)\)/, "");
/** The figure of a field from the data inside a sentence: "Jusqu'à 150x (…)" → "jusqu'à 150x (…)". */
const inSentence = (s: string) => lcFirst(withoutSource(s));
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
const leverageRisk = "Un effet de levier élevé augmente fortement le risque de liquidation.";
const regionalNote = "Une plateforme régionale a en général sa propre gamme de produits, ses propres frais et ses propres limites.";
const level = (count: number) => `${count} ${count === 1 ? "est" : "sont"} à égalité`;

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `L'avantage revient à ${e.name} pour ${joinList(rows.map((r) => r.topic))}` : `${e.name} n'a l'avantage sur aucun de ces points`;
  return `Ni ${a.name} ni ${b.name} ne l'emporte sur tous les points. Sur les ${s.measurable} points mesurables de ce comparatif, ${a.name} a l'avantage sur ${s.a.length} et ${b.name} sur ${s.b.length}${s.tie.length ? `, et ${level(s.tie.length)}` : ""}. ${lead(a, s.a)}. ${lead(b, s.b)}. Choisissez ${a.name} si ${lcFirst(altInfo(a).chooseIf[0])}. Choisissez ${b.name} si ${lcFirst(altInfo(b).chooseIf[0])}.`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb)
    return `${a.name} et ${b.name} offrent le même levier maximal : ${a.name} ${lcFirst(a.maxLeverage)}, ${b.name} ${lcFirst(b.maxLeverage)}.`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  const rest = /^Jusqu'à /.test(lo.maxLeverage) ? lo.maxLeverage.slice("Jusqu'à ".length) : "";
  return `${hi.name} offre le levier maximal le plus élevé : ${lcFirst(hi.maxLeverage)}. ${rest ? `Sur ${lo.name}, le maximum est de ${rest}` : `${lo.name} : ${lcFirst(lo.maxLeverage)}`}.`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `Selon le classement des produits dérivés de CoinMarketCap (${prettyDate(site.marketDataDate)}), ${a.name} affichait ${formatBn(a.market.openInterestBn)} d'open interest (intérêt ouvert) sur ${a.market.markets} marchés et ${b.name} ${formatBn(b.market.openInterestBn)} sur ${b.market.markets}. ${deeper.name} offre le marché le plus profond, ce qui se traduit en général par des spreads plus serrés sur les gros ordres.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${a.name} propose ${joinList(notOffered.map((f) => f.noun))}, ce ${que(b.name)} ne propose pas.` : "",
    notFound.length ? `${a.name} propose ${joinList(notFound.map((f) => f.noun))} ; sur le site ${de(b.name)}, nous n'avons trouvé aucun produit de ce type.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const place = countryForms[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${e.name} n'accepte pas les utilisateurs résidant ${place.in}${extra}`;
  if (status === "regional") return `${e.name} accueille les utilisateurs résidant ${place.in} via une plateforme régionale${extra}`;
  if (status === "partial") return `${e.name} restreint en partie ${place.the}${extra}`;
  return `${e.name} ne compte pas ${place.the} parmi les pays restreints`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("fr").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. Les listes de pays évoluent, et un pays absent de la liste ne garantit pas que tous les produits y soient proposés : ce sont les conditions d'utilisation de chaque plateforme qui font foi.`;

/* ------------------------------------ FAQ ------------------------------------ */

/** All questions a head-to-head page answers, grouped for display (see `./en.tsx`). */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) =>
    has(a, key) && has(b, key) ? "sur les deux plateformes" : has(a, key) ? `uniquement sur ${a.name}` : has(b, key) ? `uniquement sur ${b.name}` : "absent des deux sites";
  const noTokenDiscount = "aucune réduction de ce type n'est publiée.";
  const noFund = "Aucun fonds de protection cité.";
  const noMica = "aucune entité agréée MiCA citée sur ses propres pages";
  const tokenRule = (e: Exchange) => (e.tokenDiscount ? lcFirst(e.tokenDiscount) : noTokenDiscount);
  const safety = (e: Exchange) => {
    const info = altInfo(e);
    return `${e.name} : ${lcFirst(e.regulation)}. Preuve de réserves : ${lcFirst(info.reserves)}. ${info.fund ? `${info.fund}.` : noFund}`;
  };

  const verdict: Faq[] = [
    { q: `${a.name} ou ${b.name} : quelle est la meilleure plateforme ?`, a: versusAnswer(a, b, s) },
    {
      q: `Quelle est la principale différence entre ${a.name} et ${b.name} ?`,
      a: `${ia.pick}. ${ib.pick}.${aheadA.length ? ` Les avantages mesurables les plus nets ${de(a.name)} : ${aheadA.slice(0, 2).map(lcFirst).join(" ; ")}.` : ""}${aheadB.length ? ` Ceux ${de(b.name)} : ${aheadB.slice(0, 2).map(lcFirst).join(" ; ")}.` : ""}`,
    },
    {
      q: `${a.name} est-elle plus grande ${que(b.name)} ?`,
      a: `Selon le classement des produits dérivés de CoinMarketCap (${marketDate}), ${a.name} affichait ${formatBn(a.market.openInterestBn)} d'open interest et ${formatBn(a.market.volume24hBn)} de volume sur 24 heures, ${b.name} ${formatBn(b.market.openInterestBn)} et ${formatBn(b.market.volume24hBn)}. D'après leurs propres chiffres, ${a.name} compte ${inSentence(a.users)} et ${b.name} ${inSentence(b.users)}.`,
    },
    {
      q: `${a.name} ou ${b.name} : laquelle choisir pour débuter ?`,
      a: `Pour un premier compte, trois choses comptent : un moyen simple d'acheter des cryptos, un moyen de s'entraîner et des frais bas. Achat par carte ou virement bancaire : ${state("fiat")}. Trading démo : ${state("demoTrading")}. Copy trading : ${state("copyTrading")}. ${feeSentence(a, b, "spot")} Vérification d'identité sur ${a.name} : ${lcFirst(a.signup.kycShort)} ; sur ${b.name} : ${lcFirst(b.signup.kycShort)}.`,
    },
    {
      q: `${a.name} ou ${b.name} : laquelle choisir pour trader les futures ?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${a.name} ou ${b.name} : quelle plateforme a les frais les plus bas ?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} Il s'agit des frais standard (hors VIP) ; les niveaux VIP et les tokens des plateformes les réduisent encore.`,
    },
    {
      q: `${a.name} et ${b.name} accordent-elles une réduction sur les frais payés avec leur propre token ?`,
      a: `${a.name} : ${tokenRule(a)} ${b.name} : ${tokenRule(b)}`,
    },
    { q: `${a.name} ou ${b.name} : laquelle offre le levier le plus élevé ?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${a.name} ou ${b.name} : laquelle propose le plus de cryptos ?`,
      a: `D'après leurs propres chiffres, ${a.name} propose ${inSentence(a.assets)} ; ${b.name}, ${inSentence(b.assets)}. Les plateformes ne comptent pas de la même façon : certaines comptent les cryptos, d'autres les paires de trading. Les deux chiffres ne sont donc pas directement comparables.`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({
      q: `Peut-on utiliser ${a.name} ou ${b.name} ${countryForms[c.key].in} ?`,
      a: countryPairAnswer(a, b, c),
    })),
    {
      q: `Le KYC est-il obligatoire sur ${a.name} et ${b.name} ?`,
      a: `Oui, les deux plateformes demandent une vérification d'identité aux nouveaux utilisateurs. ${a.name} : ${lcFirst(a.signup.kycShort)}. ${b.name} : ${lcFirst(b.signup.kycShort)}. Ni l'une ni l'autre ne permet de trader sans vérification.`,
    },
    {
      q: `${a.name} ou ${b.name} : laquelle est la plus sûre ?`,
      a: `Aucune plateforme centralisée n'est sans risque : la comparaison honnête porte donc sur ce que chacune publie. ${safety(a)} ${safety(b)} Ne laissez sur l'une comme sur l'autre que les fonds avec lesquels vous tradez activement.`,
    },
    {
      q: `${a.name} et ${b.name} disposent-elles d'un agrément MiCA dans l'UE ?`,
      a: `${a.name} : ${ia.mica ? `oui – ${ia.mica}` : noMica}. ${b.name} : ${ib.mica ? `oui – ${ib.mica}` : noMica}. ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `Rien parmi les ${featureList.length} produits que nous comparons : tout produit ${que(x.name)} présente sur son site figure aussi sur celui ${de(y.name)}.`;
  const products: Faq[] = [
    { q: `Que propose ${a.name} ${que(b.name)} ne propose pas ?`, a: onlyA || nothing(a, b) },
    { q: `Que propose ${b.name} ${que(a.name)} ne propose pas ?`, a: onlyB || nothing(b, a) },
    {
      q: `${a.name} et ${b.name} proposent-elles le copy trading, des bots de trading, les options et le trading démo ?`,
      a: `Copy trading : ${state("copyTrading")}. Bots de trading : ${state("tradingBots")}. Options : ${state("options")}. Trading démo : ${state("demoTrading")}.${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` Quand une seule plateforme est citée, nous n'avons trouvé, lors de notre vérification du ${prettyDate(site.lastReviewed)}, aucune page consacrée au produit sur le site de l'autre.` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `Quels sont les codes de parrainage ${a.name} et ${b.name} ?`,
      a: `${a.name} : ${a.referralCode} – ${lcFirst(a.referral.whereShort)}. ${b.name} : ${b.referralCode} – ${lcFirst(b.referral.whereShort)}. Les deux codes sont gratuits et n'augmentent pas vos frais de trading.`,
    },
    {
      q: `${a.name} ou ${b.name} : quelle plateforme offre le meilleur bonus d'inscription ?`,
      a: `${a.name} : ${lcFirst(offer(a))}. ${b.name} : ${lcFirst(offer(b))}. Sur les deux plateformes, les récompenses de bienvenue sont soumises à des conditions comme la vérification d'identité, un dépôt ou un volume de trading, et varient selon le pays : comparez les conditions, pas le montant mis en avant.`,
    },
    {
      q: `Peut-on ajouter un code de parrainage après l'inscription sur ${a.name} ou ${b.name} ?`,
      a: `${a.name} : ${lcFirst(a.referral.afterSignupShort)}. ${b.name} : ${lcFirst(b.referral.afterSignupShort)}. Sur l'une comme sur l'autre, le plus sûr est de s'inscrire via le lien de parrainage.`,
    },
    {
      q: `Peut-on utiliser ${a.name} et ${b.name} en même temps ?`,
      a: "Oui. Ce sont deux sociétés distinctes : un compte sur l'une n'a aucune incidence sur un compte sur l'autre, et beaucoup de traders gardent des fonds sur deux plateformes. Les niveaux de frais, le parrainage et les récompenses sont liés à chaque compte et ne se transfèrent pas.",
    },
    {
      q: `Comment transférer des cryptos ${de(a.name)} vers ${b.name} ?`,
      a: `1. Ouvrez votre compte ${b.name} avec le code de parrainage ${b.referralCode} et terminez la vérification d'identité. 2. Clôturez les positions futures et sur marge encore ouvertes sur ${a.name} : une position ne peut pas être transférée d'une plateforme à l'autre. 3. Sur ${b.name}, copiez l'adresse de dépôt de la crypto et du réseau que vous voulez utiliser. 4. Retirez vos fonds depuis ${a.name} vers cette adresse, sur le même réseau, et envoyez d'abord un petit montant test : un transfert sur le mauvais réseau peut être perdu. Les mêmes étapes valent dans l'autre sens.`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} ou ${b.name} : laquelle est la meilleure ?`, faqs: verdict },
    { id: "fees", title: "Frais, levier et cryptos", faqs: fees },
    { id: "countries", title: "Pays, KYC et sécurité", faqs: countries },
    { id: "products", title: "Produits", faqs: products },
    { id: "referral", title: "Codes de parrainage et transfert entre plateformes", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi, oi, mica }: HubFacts) =>
  `${names(lowF)} ${verb(lowF, "a", "ont")} les frais futures standard les plus bas (${feePair(lowF[0].futuresFees)} maker / taker), ${names(hi)} le levier le plus élevé (${leverageOf(hi[0])}x) et ${names(oi)} le marché des dérivés le plus profond, avec ${formatBn(oi[0].market.openInterestBn)} d'open interest (intérêt ouvert). ${names(mica)} ${verb(mica, "dispose", "disposent")} d'une plateforme agréée MiCA pour les utilisateurs résidant dans l'Espace économique européen (EEE). La plateforme qui vous convient le mieux dépend des deux entre lesquelles vous hésitez : choisissez la paire ci-dessous.`;

function hubFaqs({ all, ranked, lowF, lowS, hi, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "Quelle plateforme crypto a les frais les plus bas ?",
      a: `Au niveau standard, ${names(lowF)} ${verb(lowF, "a", "ont")} les frais futures les plus bas avec ${feePair(lowF[0].futuresFees)} (maker / taker), et ${names(lowS)} les frais spot les plus bas avec ${feePair(lowS[0].spotFees)}. Les autres plateformes : ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} ${feePair(e.futuresFees)} sur les futures et ${feePair(e.spotFees)} sur le spot`)
        .join(" ; ")}. Les niveaux VIP et les tokens des plateformes réduisent encore ces taux.`,
    },
    {
      q: "Quelle plateforme crypto offre le levier le plus élevé ?",
      a: `${names(hi)} : ${lcFirst(hi[0].maxLeverage)}. Les autres : ${ranked
        .filter((e) => !hi.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join(", ")}. ${leverageRisk}`,
    },
    {
      q: "Quelle plateforme crypto a le marché futures le plus profond ?",
      a: `En open interest (intérêt ouvert), selon le classement des produits dérivés de CoinMarketCap (${marketDate}) : ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join(", ")}. Un marché plus profond se traduit en général par des spreads plus serrés sur les gros ordres.`,
    },
    {
      q: "Quelles plateformes crypto ont une entité agréée MiCA pour l'EEE ?",
      a: `${joinList(mica.map((e) => `${e.name} (${altInfo(e).mica})`))}. ${names(noMica)} ne ${verb(noMica, "cite", "citent")} aucune entité agréée MiCA sur ${verb(noMica, "ses", "leurs")} propres pages. ${regionalNote}`,
    },
    {
      q: "Quelles plateformes permettent d'ajouter un code de parrainage après l'inscription ?",
      a: `${later.map((e) => `${e.name} : ${lcFirst(e.referral.afterSignupShort)}`).join(". ")}. Sur ${names(signupOnly)}, le code ne compte que lors de l'inscription, ou aucun moyen de l'ajouter ensuite n'est documenté : partout, le plus sûr est de s'inscrire via le lien de parrainage.`,
    },
    {
      q: "Comment ces comparatifs sont-ils réalisés ?",
      a: `Chaque chiffre provient du site ou du centre d'aide de la plateforme concernée (grilles tarifaires, conditions d'utilisation, listes de pays restreints, pages produits), et chaque page cite ses sources. L'open interest, le volume et le nombre de marchés dérivés proviennent du classement des produits dérivés de CoinMarketCap. Ces chiffres seuls déterminent quelle plateforme a l'avantage sur un point ; nous n'établissons aucun classement propre. La vérification actuelle date du ${date}.`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const fr: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row after "L'avantage revient à X pour" (with article) ---- */
  rows: {
    futuresFees: { label: "Frais futures (maker / taker)", topic: "les frais futures" },
    spotFees: { label: "Frais spot (maker / taker)", topic: "les frais spot" },
    leverage: { label: "Levier max.", topic: "le levier maximal" },
    openInterest: { label: "Open interest des dérivés", topic: "l'open interest" },
    volume: { label: "Volume des dérivés (24 h)", topic: "le volume des dérivés sur 24 heures" },
    markets: { label: "Marchés dérivés", topic: "le nombre de marchés dérivés" },
    users: { label: "Utilisateurs (selon la plateforme)", topic: "le nombre d'utilisateurs" },
    assets: { label: "Actifs listés (selon la plateforme)", topic: "" },
    founded: { label: "Création", topic: "" },
    products: { label: (compared) => `Produits trouvés (sur ${compared} comparés)`, topic: "l'éventail de produits" },
    countries: { label: (compared) => `Pays restreints (sur ${compared} comparés)`, topic: "la couverture géographique" },
    mica: { label: "Plateforme EEE agréée MiCA", topic: "l'agrément MiCA" },
    kyc: { label: "Vérification d'identité (KYC)", topic: "" },
    addLater: { label: "Code ajoutable après l'inscription ?", topic: "l'ajout d'un code de parrainage après l'inscription" },
    offer: { label: "Offre de bienvenue", topic: "" },
    reserves: { label: "Preuve de réserves", topic: "" },
    fund: { label: "Fonds de protection", topic: "" },
  },
  countOf: (count, of) => `${count} sur ${of}`,
  /** "None named" in the rows « Plateforme EEE agréée MiCA » (f.) and « Fonds de protection » (m.). */
  noMica: "Aucune citée",
  noFund: "Aucun cité",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    title: (a, b, shortMonthYear) => `${a.name} vs ${b.name} (${shortMonthYear}) : frais, levier, KYC et bonus comparés`,
    description: (a, b, monthYear) =>
      `${a.name} vs ${b.name} : frais futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, levier ${leverageOf(a)}x vs ${leverageOf(b)}x, produits, pays, KYC et codes de parrainage. Données officielles vérifiées en ${monthYear}.`,
    keywords: (a, b, former) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${a.name} ou ${b.name}`,
      `frais ${a.name} vs ${b.name}`,
      `${a.name} vs ${b.name} futures`,
      `comparatif ${a.name} ${b.name}`,
      `${a.name} ou ${b.name} quelle plateforme choisir`,
      `${b.name} ou ${a.name} quelle plateforme choisir`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],

    crumbHome: "Accueil",
    crumbHub: "Comparatif des plateformes",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name} est la plateforme autrefois appelée ${formerName}.`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${a.name} et ${b.name} sont deux plateformes d'échange de cryptomonnaies centralisées, pour le trading spot et les futures (contrats à terme) avec effet de levier, et toutes deux proposent un programme de parrainage aux nouveaux utilisateurs. ${pickA}. ${pickB}.${formerNote ? ` ${formerNote}` : ""} Ce face-à-face met côte à côte leurs frais, leur levier, leurs produits, leur disponibilité par pays, leurs règles de vérification et leurs offres de parrainage. Chaque chiffre a été relevé sur les sites des plateformes le ${date}.`,

    toc: {
      "at-a-glance": "Vue d'ensemble",
      verdict: "Laquelle choisir",
      fees: "Frais",
      leverage: "Levier et profondeur",
      products: "Produits",
      countries: "Pays",
      kyc: "Vérification (KYC)",
      safety: "Sécurité et régulation",
      referral: "Codes de parrainage",
      "pros-cons": "Points forts et faibles",
      faq: "FAQ",
      sources: "Sources",
    },
    onThisPage: "Sur cette page",

    /* Hero */
    updated: (date) => `Vérifié et mis à jour le ${date}`,
    h1: (a, b) => `${a.name} vs ${b.name} : frais, levier et sécurité comparés`,
    quickAnswer: "En bref",
    keyFigures: "Chiffres clés",
    chips: (a, b, oiA, oiB) => [
      `Futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `Levier ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `Open interest ${oiA} vs ${oiB}`,
    ],
    boxTitle: "Inscrivez-vous avec un code de parrainage",
    boxNote: "Les deux codes sont gratuits et n'augmentent jamais vos frais.",
    codeLabel: (e) => `Code de parrainage ${e.name}`,
    boxRisk: () => (
      <>
        Le trading avec effet de levier est à haut risque. Aucune des deux plateformes n&apos;est disponible dans tous les pays : voir la section{" "}
        <a href="#countries">Pays</a>.
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name} en un coup d'œil`,
    glanceText: (a, b, s) =>
      `Que vous cherchiez ${a.name} vs ${b.name} ou ${b.name} vs ${a.name}, le comparatif est le même. Sur les ${s.measurable} points que les chiffres permettent de départager, ${a.name} a l'avantage sur ${s.a.length} et ${b.name} sur ${s.b.length}${s.tie.length ? ` ; ${level(s.tie.length)}` : ""}. Tous les points n'ont pas le même poids : pour un trader actif, des frais plus bas comptent davantage qu'une liste de cryptos plus longue. Regardez donc d'abord les lignes qui correspondent à votre façon de trader.`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name} : frais, levier, taille du marché, produits, pays, vérification et règles de parrainage`,
    compared: "Critère",
    ahead: "Avantage",
    level: "Égalité",
    glanceNote: (marketDate, date) =>
      `Frais : niveau standard (hors VIP). Open interest, volume et marchés : classement des produits dérivés de CoinMarketCap, ${marketDate}. « – » signifie que les deux valeurs ne peuvent pas être départagées. Tout le reste a été relevé sur les sites des plateformes le ${date}.`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} ou ${b.name} : quelle plateforme choisir ?`,
    verdictText:
      "Il n'y a pas de gagnant absolu : chaque plateforme s'adresse à un type de trader différent. Les deux encadrés montrent à qui chacune convient et sur quels points elle a un avantage mesurable sur l'autre.",
    bestFor: (role) => `Point fort : ${lcFirst(role)}`,
    chooseIf: (e) => `Choisissez ${e.name} si …`,
    aheadOf: (e, other) => `Où ${e.name} a l'avantage sur ${other.name}`,
    noAdvantage: "Aucun avantage mesurable sur les points comparés.",
    thinkTwice: "Réfléchissez-y à deux fois si …",
    codeButton: (e) => `Code de parrainage ${e.name} ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `Frais : ${a.name} vs ${b.name}`,
    feesModel:
      "Les deux appliquent un modèle maker / taker : les ordres à cours limité qui ajoutent de la liquidité paient les frais maker, les ordres qui en retirent paient les frais taker.",
    feesCaption: (a, b) => `Frais standard spot et futures ${de(a.name)} et ${de(b.name)}`,
    exchange: "Plateforme",
    futuresMaker: "Futures maker",
    futuresTaker: "Futures taker",
    spotMaker: "Spot maker",
    spotTaker: "Spot taker",
    otherMarkets: "Autres marchés (maker / taker)",
    feesNote: (date) => `Taux standard (hors VIP) publiés par chaque plateforme, vérifiés le ${date}. Les frais évoluent : vérifiez-les sur la plateforme avant de trader.`,
    tokenTitle: "Réductions via token et petits caractères",
    noTokenDiscount: "Aucune réduction n'est publiée pour le paiement des frais avec un token de la plateforme.",

    /* Leverage */
    leverageTitle: "Levier et profondeur de marché",
    leverageRisk: "Un effet de levier élevé augmente fortement le risque de liquidation : le maximum est une limite, pas une recommandation.",
    leverageCaption: (a, b) => `Levier et données du marché des dérivés ${de(a.name)} et ${de(b.name)}`,
    maxLeverage: "Levier max.",
    openInterest: "Open interest",
    volume24h: "Volume des dérivés (24 h)",
    derivativesMarkets: "Marchés dérivés",
    listedAssets: "Actifs listés (selon la plateforme)",
    leverageNote: (marketDate) =>
      `Données de marché : classement des produits dérivés de CoinMarketCap, ${marketDate}. Les plateformes ne comptent pas les actifs listés de la même façon : certaines comptent les cryptos, d'autres les paires de trading.`,

    /* Products */
    productsTitle: (a, b) => `Produits : ce que proposent ${a.name} et ${b.name}`,
    productsSame: (compared) => `Les deux plateformes présentent sur leur propre site les ${compared} produits que nous comparons ; les différences se jouent dans les détails.`,
    productsLegend: (date) => `Une coche signifie que la plateforme présente le produit sur son propre site ; un tiret, que nous n'y avons trouvé aucune page consacrée au produit le ${date}.`,
    productsCaption: (a, b) => `Produits proposés par ${a.name} et ${b.name}`,
    product: "Produit",
    offered: "Proposé",
    notOffered: "Non proposé",
    noPage: "Aucune page trouvée sur son site",

    /* Countries */
    countriesTitle: (a, b) => `Pays : où ${a.name} et ${b.name} sont disponibles`,
    countriesText: (compared, differing) =>
      `Pour ${compared} pays, voici ce que disent les conditions d'utilisation de chaque plateforme. Les deux diffèrent pour ${differing} d'entre eux. « ${ct.statusLabel.regional} » signifie que la plateforme sert ce pays via un site distinct, avec ses propres produits, frais et limites.`,
    countriesCaption: (a, b) => `Disponibilité ${de(a.name)} et ${de(b.name)} par pays`,
    country: "Pays",
    countriesNote: (date) =>
      `« ${ct.statusLabel.open} » signifie : absent de la liste des pays restreints de la plateforme le ${date}, ce qui ne garantit pas que tous les produits y soient proposés. Les deux plateformes interdisent de contourner une restriction avec un VPN ou de fausses informations.`,
    differTitle: "Là où les deux diffèrent",
    differQuestion: (a, b, countryName) => {
      const key = countryList.find((c) => c.name === countryName || c.short === countryName)?.key;
      return key ? `${a.name} ou ${b.name} ${countryForms[key].in} ?` : `${a.name} ou ${b.name} : ${countryName} ?`;
    },
    neither: (a, b, hrefA, hrefB) => (
      <>
        Aucune des deux n&apos;est disponible là où vous vivez ? Les tableaux par pays des pages d&apos;alternatives indiquent quelles autres plateformes
        acceptent votre pays : <Link href={hrefA}>Alternatives à {a.name} par pays</Link> · <Link href={hrefB}>Alternatives à {b.name} par pays</Link>.
      </>
    ),
    restrictedTitle: "Pays restreints et plateformes régionales",
    whereNot: (e) => `Où ${e.name} n'est-elle pas disponible ?`,
    regionalPlatforms: "Plateformes régionales :",

    /* Verification */
    kycTitle: (a, b) => `Vérification d'identité : ${a.name} vs ${b.name}`,
    kycText:
      "Les deux plateformes demandent une vérification d'identité aux nouveaux utilisateurs : ni l'une ni l'autre ne permet donc de trader sans KYC. La différence porte sur ce qu'un compte non vérifié peut encore faire et sur le déroulement de la vérification.",
    documents: "Documents :",
    minAge: "Âge minimum :",
    howToRegister: (e) => `Comment s'inscrire et faire vérifier son compte sur ${e.name}, étape par étape`,

    /* Safety */
    safetyTitle: (a, b) => `Sécurité et régulation : ${a.name} vs ${b.name}`,
    safetyText:
      "Aucune plateforme centralisée n'est sans risque. Ce que l'on peut comparer, c'est ce que chacune publie sur elle-même : où elle détient une licence, si elle prouve ses réserves et si elle dispose d'un fonds pour les situations d'urgence.",
    safetyCaption: (a, b) => `Régulation, preuve de réserves et fonds de protection ${de(a.name)} et ${de(b.name)}`,
    licences: "Licences citées par la plateforme",
    entity: "Entité exploitante",
    reserves: "Preuve de réserves",
    fund: "Fonds de protection",
    founded: "Création",
    isSafe: (e) => `${e.name} est-elle sûre ?`,
    safetyDetail: (e) => `Sécurité et disponibilité ${de(e.name)} en détail`,

    /* Referral codes */
    referralTitle: (a, b) => `Codes de parrainage et offres de bienvenue : ${a.name} vs ${b.name}`,
    referralText:
      "Quel que soit votre choix, inscrivez-vous avec un code de parrainage : c'est gratuit, cela n'augmente jamais vos frais et vous donne accès à l'offre de bienvenue de la plateforme. Attention à la dernière ligne : un code oublié ne peut pas toujours être ajouté après coup.",
    referralCaption: (a, b) => `Codes de parrainage et offres de bienvenue ${de(a.name)} et ${de(b.name)}`,
    referralCodeOf: (e) => `Code de parrainage ${e.name}`,
    referralCode: "Code de parrainage",
    newUserOffer: "Offre de bienvenue",
    inviteeReward: "Ce que vous recevez en tant que filleul",
    covers: "Un parrainage couvre",
    whereCode: "Où saisir le code",
    addLater: "Ajout possible après l'inscription ?",
    referralNote: (date) =>
      `Offres vérifiées le ${date}. Les récompenses de bienvenue dépendent de tâches, exigent une vérification d'identité et varient selon le pays.`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `Points forts et points faibles ${de(a.name)} et ${de(b.name)}`,
    pros: "Points forts",
    cons: "Points faibles",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} : FAQ`,
    faqText: (count, a, b) => `${count} questions pour choisir entre ${a.name} et ${b.name} : frais, levier, pays, vérification, produits et codes de parrainage.`,

    /* Sources */
    sourcesTitle: "Sources : d'où viennent ces chiffres",
    sourcesText: (date, marketDate) =>
      `Tout ce que cette page indique sur les frais, le levier, les produits, la vérification, les pays, les licences, les réserves et les règles de parrainage a été relevé sur les sites et dans les centres d'aide des deux plateformes le ${date}. L'open interest, le volume et le nombre de marchés dérivés proviennent du classement des produits dérivés de CoinMarketCap (${marketDate}). Les plateformes modifient leurs conditions sans préavis : ce sont les pages ci-dessous qui font foi.`,
    officialPages: (e, count) => `${e.name} : ${count} ${count > 1 ? "pages officielles" : "page officielle"}`,

    /* More comparisons */
    moreTitle: "Autres face-à-face",
    against: (e) => `${e.name} face aux autres plateformes`,
    allAlternatives: (e) => `Toutes les alternatives à ${e.name}`,
    allComparisons: "Tous les face-à-face",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>Avertissement sur les risques :</strong> les produits dérivés crypto sont des instruments complexes. L&apos;effet de levier multiplie
        les gains comme les pertes, et vous pouvez perdre toute votre marge en quelques minutes. Cette page est fournie à titre d&apos;information
        uniquement et ne constitue pas un conseil financier. Nous pouvons percevoir une commission si vous vous inscrivez via nos liens : voir notre page{" "}
        <Link href={disclosureHref}>Divulgation d&apos;affiliation</Link>. Cela ne change rien aux chiffres : ce sont ceux des plateformes elles-mêmes.
      </>
    ),
    ctaTitle: (a, b) => `${a.name} ou ${b.name} ? Commencez avec un code de parrainage`,
    ctaText: "Un seul compte pour le spot et les futures, sur l'une comme sur l'autre, sans frais supplémentaires.",
    ctaButton: "Comparer d'autres plateformes",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) => `Comparatif des plateformes crypto (${shortMonthYear}) : ${pairs} face-à-face`,
    description: (exchangeNames, pairs, monthYear) =>
      `${exchangeNames} deux à deux : ${pairs} face-à-face (frais, levier, pays, KYC, codes de parrainage). Données officielles vérifiées en ${monthYear}.`,
    crumbHome: "Accueil",
    crumbPage: "Comparatif des plateformes",
    listName: "Face-à-face entre plateformes crypto",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `Vérifié et mis à jour le ${date}`,
    h1: (pairs) => `Comparatif des plateformes crypto : ${pairs} face-à-face`,
    lead: (exchangeCount) =>
      `${exchangeCount} plateformes d'échange de cryptomonnaies, chaque paire comparée sur les mêmes points : frais, levier, profondeur de marché, produits, disponibilité par pays, vérification d'identité, régulation et offres de parrainage. Chaque face-à-face repose sur les chiffres publiés par les plateformes sur leurs propres sites.`,
    quickAnswer: "En bref",

    pickTitle: "Choisissez deux plateformes à comparer",
    pickText: (others) =>
      `Chaque encadré oppose une plateforme aux ${others} autres. Chaque paire n'a qu'une seule page : « Binance vs OKX » et « OKX vs Binance » mènent au même face-à-face.`,
    alternativesOf: (e) => `Alternatives à ${e.name}`,
    referralCodeOf: (e) => `Code de parrainage ${e.name}`,

    tableTitle: (exchangeCount) => `Les ${exchangeCount} plateformes côte à côte`,
    tableText: "Offres de bienvenue, frais standard (hors VIP), levier et profondeur de marché de chaque plateforme, dans un seul tableau.",
    tableNote: (date, marketDate) =>
      `Frais : niveau standard publié par chaque plateforme, vérifié le ${date}. Open interest et marchés : CoinMarketCap, ${marketDate}.`,

    alternativesTitle: "Une plateforme face à toutes les autres",
    alternativesText: (others) =>
      `Vous ne cherchez pas à départager deux plateformes, mais à en remplacer une ? Les pages « Alternatives à … » comparent une plateforme aux ${others} autres à la fois et indiquent lesquelles acceptent votre pays.`,

    faqTitle: "Comparatif des plateformes : FAQ",

    ctaTitle: "Votre choix est fait ? Inscrivez-vous avec un code de parrainage",
    ctaText: (exchangeCount) => `Des codes vérifiés pour les ${exchangeCount} plateformes : un seul compte pour le spot et les futures, sans frais supplémentaires.`,
    ctaButton: "Voir tous les codes de parrainage",
  },
};
