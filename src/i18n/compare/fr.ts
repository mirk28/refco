/**
 * The sentences of the comparison pages in French. Same functions and the same logic as `./en.ts`, written in
 * French grammar.
 *
 * Wording: « plateforme » (f.), « alternative à Binance », « code de parrainage », « frais », « maker / taker »,
 * « vérification d'identité », address « vous », the site « nous ». Exchange names take no article and count as
 * feminine (« la plateforme »): agreement is avoided where it costs nothing (« revient moins cher », « accessible »).
 * Before a name, "de" and "que" go through `de()` / `que()` of `../fr-elision` (« les frais d'OKX », « moins chère
 * qu'OKX »); "à", "sur", "pour", "contre" never change. Countries: `name` with its article (« les États-Unis »),
 * `inName` after "in" (« aux États-Unis »), `short` for the tables, `residents` « les utilisateurs résidant aux
 * États-Unis » (the dative is `residents.replace(/^les /, "aux ")`). A country is never put after "de" or "à".
 * Fee rates arrive in French notation (0,02 %); leverage stays 150x; counts are grouped with a space.
 *
 * Capitals: inserted data texts are lower-cased inside a sentence only when their first word is a common word
 * (« Oui – … », « Jusqu'à 150x … », « Obligatoire … », « vous … »); a name or an abbreviation keeps its capital.
 */
import { site } from "@/config/site";
import type { Exchange, Faq, Fee, Step } from "@/data/exchanges";
import { exchanges } from "@/data/exchanges";
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
  leverageOf,
  lowestFutures,
  lowestSpot,
  pct,
  verb,
  withFeature,
  withMica,
} from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import { de, que } from "../fr-elision";
import type { AltFaqGroup, CompareText } from "./en";

const locale = "fr";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
/** "de Binance, d'OKX et de Gate" – "de" repeated before every name, elided where needed. */
const deNames = (list: Exchange[]) => joinList(list.map((e) => de(e.name)));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
/** "1 152" – thousands grouped with an ordinary space (turned into a no-break space later). */
const count = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
/** "alternative" / "alternatives" – singular for 0 and 1. */
const alternatives = (n: number) => (n > 1 ? "alternatives" : "alternative");

/* -------------------------------- capitals -------------------------------- */

const properNames = new Set(exchanges.map((e) => e.name));
/**
 * Lower-cases the first letter when the text starts with a common word (« Jusqu'à 150x … » → « jusqu'à 150x … »,
 * « Obligatoire … » → « obligatoire … »). A name (Binance, Gate) or a word with a capital inside (OKX, KYC, BTC,
 * MiCA, KuCoin) keeps its capital.
 */
const lcFirst = (s: string) => {
  const first = s.split(/[\s–:,;.()]/)[0];
  return properNames.has(first) || /^.+[A-ZÀ-ÖØ-Þ]/.test(first) ? s : s.charAt(0).toLowerCase() + s.slice(1);
};
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Ends a data text with a full stop unless it already ends a sentence. */
const stop = (s: string) => (/[.!?]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** A data text without a final full stop – for texts that code joins itself. */
const bare = (s: string) => s.trim().replace(/\.$/, "");
/** The `pick` lines of several exchanges, joined with ". " and closed. */
const picks = (list: Exchange[]) => `${list.map((a) => bare(altInfo(a).pick)).join(". ")}.`;

/* -------------------------------- vocabulary -------------------------------- */

/**
 * `label` for the tables, `noun` with its article as the object of « propose » (« propose le copy trading »,
 * « propose des bots de trading »), `none` after a negation (« aucune ne propose de bots de trading »).
 */
const featureWords: Record<FeatureKey, { label: string; noun: string; none: string }> = {
  copyTrading: { label: "Copy trading", noun: "le copy trading", none: "de copy trading" },
  tradingBots: { label: "Bots de trading", noun: "des bots de trading", none: "de bots de trading" },
  options: { label: "Options", noun: "le trading d'options", none: "de trading d'options" },
  demoTrading: { label: "Trading démo", noun: "le trading démo", none: "de trading démo" },
  margin: { label: "Trading sur marge spot", noun: "le trading sur marge spot", none: "de trading sur marge spot" },
  p2p: { label: "Trading P2P", noun: "le trading P2P", none: "de trading P2P" },
  fiat: {
    label: "Achat par carte / virement",
    noun: "l'achat de cryptos par carte ou virement bancaire",
    none: "d'achat de cryptos par carte ou virement bancaire",
  },
  earn: { label: "Earn / staking", noun: "des produits Earn", none: "de produits Earn" },
  launchpad: { label: "Launchpad / launchpool", noun: "un launchpad", none: "de launchpad" },
  web3Wallet: { label: "Portefeuille Web3", noun: "un portefeuille Web3 en auto-conservation", none: "de portefeuille Web3 en auto-conservation" },
  card: { label: "Carte crypto", noun: "une carte crypto", none: "de carte crypto" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` in a sentence (with its article), `inName` for "in", `short` for the tables. */
const countryWords: Record<CountryKey, { name: string; inName: string; short: string }> = {
  us: { name: "les États-Unis", inName: "aux États-Unis", short: "États-Unis" },
  uk: { name: "le Royaume-Uni", inName: "au Royaume-Uni", short: "Royaume-Uni" },
  ca: { name: "le Canada", inName: "au Canada", short: "Canada" },
  de: { name: "l'Allemagne", inName: "en Allemagne", short: "Allemagne" },
  fr: { name: "la France", inName: "en France", short: "France" },
  nl: { name: "les Pays-Bas", inName: "aux Pays-Bas", short: "Pays-Bas" },
  es: { name: "l'Espagne", inName: "en Espagne", short: "Espagne" },
  it: { name: "l'Italie", inName: "en Italie", short: "Italie" },
  au: { name: "l'Australie", inName: "en Australie", short: "Australie" },
  jp: { name: "le Japon", inName: "au Japon", short: "Japon" },
  sg: { name: "Singapour", inName: "à Singapour", short: "Singapour" },
  hk: { name: "Hong Kong", inName: "à Hong Kong", short: "Hong Kong" },
  in: { name: "l'Inde", inName: "en Inde", short: "Inde" },
  ae: { name: "les Émirats arabes unis", inName: "aux Émirats arabes unis", short: "Émirats arabes unis" },
};
/** `residents`: « les utilisateurs résidant aux États-Unis » ("résidant" never changes). */
const countries = countryList.map((c) => ({ key: c.key, ...countryWords[c.key], residents: `les utilisateurs résidant ${countryWords[c.key].inName}` }));
type Country = (typeof countries)[number];
/** « aux utilisateurs résidant aux États-Unis » */
const toResidents = (c: Country) => `aux utilisateurs résidant ${c.inName}`;

const statusLabel: Record<CountryStatus, string> = {
  restricted: "Restreint",
  regional: "Site régional",
  partial: "Partiel",
  open: "Non restreint",
};

/** « sur le spot » / « sur les contrats perpétuels » – the market of a fee comparison. */
const onMarket = (market: "spot" | "futures") => (market === "spot" ? "sur le spot" : "sur les contrats perpétuels");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const where = onMarket(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${a.name} et ${x.name} facturent les mêmes frais standard ${where} : ${fa.maker} maker / ${fa.taker} taker.`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} revient moins cher aux makers comme aux takers`
      : mm !== 0
        ? `${who} revient moins cher aux makers, les takers paient le même taux`
        : `${who} revient moins cher aux takers, les makers paient le même taux`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} revient moins cher aux makers, ${x.name} aux takers`
          : `${x.name} revient moins cher aux makers, ${a.name} aux takers`;
  return `${cap(where)}, ${a.name} facture ${fa.maker} maker / ${fa.taker} taker et ${x.name} ${fx.maker} / ${fx.taker} : ${verdict}.`;
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
    `${cap(onMarket(market))}, ${x.name} facture ${feePair(fx)} (maker / taker).`,
    lower.length
      ? `${verb(lower, "Moins chère", "Moins chères")} : ${rates(lower)}.`
      : `Aucune des ${alts.length} ${alternatives(alts.length)} n'est moins chère.`,
    same.length ? `Mêmes taux : ${names(same)}.` : "",
    higher.length ? `${verb(higher, "Plus chère", "Plus chères")} : ${rates(higher)}.` : "",
    mixed.length ? `${verb(mixed, "Moins chère", "Moins chères")} d'un seul côté : ${rates(mixed)}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (market: "spot" | "futures", fa: Fee, fx: Fee) => {
    const on = market === "spot" ? "sur le spot" : "sur les futures";
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`Frais plus bas ${on} : ${feePair(fa)} au lieu de ${feePair(fx)} (maker / taker)`);
    else if (m < 0 && t === 0) out.push(`Frais maker plus bas ${on} : ${fa.maker} au lieu de ${fx.maker}`);
    else if (t < 0 && m === 0) out.push(`Frais taker plus bas ${on} : ${fa.taker} au lieu de ${fx.taker}`);
    else if (m < 0) out.push(`Frais maker plus bas ${on} : ${fa.maker} au lieu de ${fx.maker} (mais des frais taker plus élevés)`);
    else if (t < 0) out.push(`Frais taker plus bas ${on} : ${fa.taker} au lieu de ${fx.taker} (mais des frais maker plus élevés)`);
  };
  fee("spot", a.spotFees, x.spotFees);
  fee("futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`Levier maximal plus élevé : ${leverageOf(a)}x au lieu de ${leverageOf(x)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`Open interest plus élevé sur les produits dérivés : ${formatBn(a.market.openInterestBn)} contre ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`Plus de marchés de produits dérivés : ${count(a.market.markets)} contre ${count(x.market.markets)}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`Possibilité d'ajouter après coup un code de parrainage oublié (${lcFirst(a.referral.afterSignupShort.replace(/^Oui\s*–\s*/, ""))})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`Propose ${joinList(notOffered.map((f) => f.noun))}, ce ${que(x.name)} ne propose pas`);
  if (notFound.length)
    out.push(`Propose ${joinList(notFound.map((f) => f.noun))}, alors que nous n'avons trouvé aucun produit de ce type sur le site même ${de(x.name)}`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`Une plateforme pour l'EEE agréée MiCA (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`Aucune restriction ${joinList(openWhere.map((c) => c.inName))}, là où ${x.name} n'est pas accessible`);
  if (regionalWhere.length)
    out.push(`Sert les utilisateurs résidant ${joinList(regionalWhere.map((c) => c.inName))} via une plateforme régionale, là où ${x.name} n'est pas accessible`);
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
  if (own.status === "restricted") parts.push(`${x.name} inscrit ${c.name} sur sa propre liste de pays restreints.`);
  else if (own.status === "partial") parts.push(`${x.name} restreint en partie son offre ${c.inName}${ownNote}.`);
  else if (own.status === "regional") parts.push(`${x.name} sert ${c.residents} via une plateforme régionale${ownNote}.`);
  else parts.push(`${x.name} ne compte pas ${c.name} parmi les pays restreints.`);
  if (g.open.length) parts.push(`${names(g.open)} ne ${verb(g.open, "compte", "comptent")} pas ${c.name} parmi les pays restreints.`);
  if (g.regional.length)
    parts.push(
      `${joinList(withNote(g.regional))} ${verb(g.regional, "sert", "servent")} ${c.residents} ${verb(g.regional, "via une plateforme régionale distincte", "via des plateformes régionales distinctes")}.`,
    );
  if (g.partial.length) parts.push(`Restrictions partielles : ${withNote(g.partial).join(" ; ")}.`);
  if (g.restricted.length)
    parts.push(`${names(g.restricted)} ${verb(g.restricted, "restreint", "restreignent")}${own.status === "restricted" ? " également" : ""} ${c.name}.`);
  if (!g.open.length && !g.regional.length)
    parts.push(`Aucune des ${alts.length} ${alternatives(alts.length)} n'est pleinement accessible ${toResidents(c)}.`);
  parts.push(
    "Les listes de pays évoluent, et l'absence d'un pays sur une liste ne garantit pas que tous les produits y soient proposés : seules les conditions d'utilisation de la plateforme font foi.",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `Les ${alts.length} ${alternatives(alts.length)} à ${x.name} comparées ici sont ${names(alts)}. ${picks(alts)} Les ${alts.length} plateformes demandent toutes une vérification d'identité aux nouveaux utilisateurs et chacune a sa propre liste de pays restreints : consultez donc le tableau des pays avant de vous inscrire.`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `Déterminez ce qui doit être mieux que sur ${x.name}`,
      text: `Des frais plus bas, plus de levier, plus de cryptomonnaies ou simplement une plateforme qui accepte votre pays : les tableaux de cette page montrent où chaque alternative a l'avantage sur ${x.name} et où elle ne l'a pas.`,
    },
    {
      title: "Vérifiez que la plateforme accepte votre pays",
      text: "Chaque plateforme a sa propre liste de pays restreints, et certaines vous redirigent vers une plateforme régionale avec d'autres produits et d'autres limites. Consultez le tableau des pays avant de vous inscrire.",
    },
    {
      title: "Inscrivez-vous via le lien de parrainage",
      text: `${names(signupOnly)} n'${verb(signupOnly, "accepte", "acceptent")} un code de parrainage que lors de l'inscription ou ne ${verb(signupOnly, "documente", "documentent")} aucun moyen de l'ajouter plus tard : utilisez donc le lien avant de créer le compte.${later.length ? ` ${names(later)} ${verb(later, "permet", "permettent")} de l'ajouter après coup, sous conditions.` : ""}`,
    },
    {
      title: "Terminez la vérification d'identité avant de transférer vos fonds",
      text: `Les ${alts.length} ${alternatives(alts.length)} demandent toutes une vérification d'identité aux nouveaux utilisateurs, et sur la plupart d'entre elles, les dépôts ou le trading restent bloqués tant qu'elle n'est pas terminée. Gardez à portée de main un passeport, une carte d'identité ou un permis de conduire.`,
    },
    {
      title: `Clôturez vos positions ouvertes sur ${x.name}`,
      text: `On ne peut pas transférer une position sur futures ou sur marge d'une plateforme à l'autre. Clôturez d'abord vos positions sur ${x.name}, ou gardez le compte jusqu'à ce qu'elles arrivent à échéance.`,
    },
    {
      title: "Retirez vos fonds vers votre nouvelle adresse de dépôt",
      text: "Copiez l'adresse de dépôt de la nouvelle plateforme, choisissez la même crypto et le même réseau des deux côtés et envoyez d'abord un petit montant de test. Des fonds envoyés sur le mauvais réseau peuvent être perdus.",
    },
    {
      title: `Décidez du sort de votre compte ${x.name}`,
      text: `Vous pouvez le conserver : les comptes ouverts sur différentes plateformes sont indépendants les uns des autres. Votre niveau de frais, votre parrainage et les récompenses non utilisées restent sur ${x.name} et ne sont pas transférés.`,
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
  const nAlts = `${n} ${alternatives(n)}`;

  const choosing: Faq[] = [
    {
      q: `Quelle est la meilleure alternative à ${x.name} ?`,
      a: `Il n'existe pas une seule meilleure alternative à ${x.name} : tout dépend de la raison pour laquelle vous voulez changer de plateforme. ${picks(alts)} Cette page compare les ${n} plateformes à ${x.name} selon les frais, le levier, les produits, la disponibilité par pays et la vérification d'identité, avec des chiffres issus des sites des plateformes elles-mêmes, vérifiés le ${date}.`,
    },
    {
      q: `Quelles sont les plateformes comme ${x.name} ?`,
      a: `${names(alts)} sont celles qui s'en rapprochent le plus. Comme ${x.name}, ce sont des plateformes centralisées qui proposent le trading spot et les futures avec effet de levier sur un seul compte, et qui gèrent un programme de parrainage pour les nouveaux utilisateurs. Elles se distinguent par leurs frais, leur levier maximal, le nombre d'actifs listés et les pays qu'elles acceptent.`,
    },
    {
      q: `Quelle est la plus grande alternative à ${x.name} ?`,
      a: `D'après l'open interest (intérêt ouvert) sur les produits dérivés relevé par CoinMarketCap (${prettyDate(site.marketDataDate)}), ${names(oi)} ${verb(oi, "est la plus grande", "sont les plus grandes")} des ${nAlts}, avec ${formatBn(oi[0].market.openInterestBn)}. De son côté, ${x.name} se situait à ${formatBn(x.market.openInterestBn)}.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Quelle alternative à ${x.name} a les frais les plus bas ?`,
      a: `Sur les futures, ${names(lowF)} ${verb(lowF, "affiche", "affichent")} les frais standard les plus bas des ${nAlts} : ${feePair(lowF[0].futuresFees)} (maker / taker). Sur le spot, ${names(lowS)} ${verb(lowS, "revient", "reviennent")} le moins cher, avec ${feePair(lowS[0].spotFees)}. ${x.name} facture ${feePair(x.futuresFees)} sur les futures et ${feePair(x.spotFees)} sur le spot.${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} Il s'agit des taux du niveau standard ; les niveaux VIP et les tokens propres aux plateformes les réduisent encore.`,
    },
    {
      q: `Quelles plateformes sont moins chères ${que(x.name)} ?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `Sur les contrats perpétuels : ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}, contre ${feePair(x.futuresFees)} sur ${x.name}.` : `Sur les contrats perpétuels, aucune des ${nAlts} ne passe sous les ${feePair(x.futuresFees)} ${de(x.name)}.`} ${cheaperS.length ? `Sur le spot : ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}, contre ${feePair(x.spotFees)} sur ${x.name}.` : `Sur le spot, aucune d'entre elles ne passe sous les ${feePair(x.spotFees)} ${de(x.name)}.`} Tous les chiffres s'entendent maker / taker, au niveau standard.`
          : `Aucune des ${nAlts} n'est moins chère ${que(x.name)} au niveau standard : ${x.name} facture ${feePair(x.futuresFees)} sur les futures et ${feePair(x.spotFees)} sur le spot (maker / taker), les taux les plus bas de ce comparatif. Les alternatives valent le détour pour d'autres raisons : réglementation, produits ou pays acceptés.`,
    },
    {
      q: `Quelle alternative à ${x.name} offre le levier le plus élevé ?`,
      a: `${names(hi)} ${verb(hi, "offre", "offrent")} le levier le plus élevé des ${nAlts} : ${lcFirst(hi[0].maxLeverage)}. Les autres : ${alts
        .filter((a) => !hi.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join(", ")}. De son côté, ${x.name} va ${lcFirst(x.maxLeverage)}. Un effet de levier élevé accroît fortement le risque de liquidation.`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `Quelles alternatives à ${x.name} peut-on utiliser ${c.inName} ?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `Existe-t-il une alternative à ${x.name} sans KYC ?`,
      a: `Pas parmi ces ${n} plateformes. Chacune demande une vérification d'identité aux nouveaux utilisateurs : ${alts.map((a) => `${a.name} – ${lcFirst(a.signup.kycShort)}`).join(" ; ")}. Pour ${x.name} : ${stop(lcFirst(x.signup.kycShort))}`,
    },
    {
      q: `Quelles alternatives à ${x.name} sont agréées MiCA dans l'UE ?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} ${verb(mica, "mentionne", "mentionnent")} une entité agréée MiCA pour les résidents de l'Espace économique européen (EEE).` : `Aucune des ${n} ne mentionne d'entité agréée MiCA.`}${noMica.length ? ` ${names(noMica)} ne ${verb(noMica, "mentionne", "mentionnent")} aucun agrément MiCA sur ${verb(noMica, "ses", "leurs")} propres pages.` : ""} ${xInfo.mica ? `Pour ${x.name} : ${stop(xInfo.mica)}` : `De son côté, ${x.name} ne mentionne aucune entité agréée MiCA.`} Une plateforme régionale a généralement sa propre gamme de produits, ses propres frais et ses propres limites.`,
    },
    {
      q: `Quelle est l'alternative à ${x.name} la plus sûre ?`,
      a: `Aucune plateforme centralisée n'est sans risque : la comparaison honnête porte donc sur ce que chacune publie. ${alts.map((a) => `${a.name} : preuve de réserves – ${stop(altInfo(a).reserves)} ${altInfo(a).fund ? stop(altInfo(a).fund) : "Aucun fonds de protection mentionné."}`).join(" ")} Sur n'importe quelle plateforme, ne laissez que les fonds avec lesquels vous tradez activement.`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `Quelles alternatives à ${x.name} proposent ${f.noun} ?`,
      a: `${yes.length ? `${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))} ${verb(yes, "propose", "proposent")} ${f.noun}.` : `Aucune des ${nAlts} ne propose ${f.none} sur son propre site.`}${no.length ? ` ${names(no)} n'en ${verb(no, "propose", "proposent")} pas.` : ""}${unknown.length ? ` Sur ${verb(unknown, "le site", "les sites")} ${deNames(unknown)}, nous n'avons trouvé aucun produit de ce type lors de notre vérification.` : ""} ${own === true ? `De son côté, ${x.name} propose aussi ${f.noun}.` : own === false ? `De son côté, ${x.name} n'en propose pas.` : `De son côté, ${x.name} ne présente aucun produit de ce type sur son site.`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `Quelle alternative à ${x.name} propose le plus de cryptomonnaies ?`,
      a: `Selon leurs propres chiffres : ${alts.map((a) => `${a.name} – ${a.assets}`).join(" ; ")}. ${x.name} : ${stop(x.assets)} Les plateformes ne comptent pas de la même façon (certaines comptent les cryptomonnaies, d'autres les paires de trading) : les chiffres ne sont donc pas directement comparables.`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `Comment passer ${de(x.name)} à une autre plateforme ?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}.`)
        .join(" "),
    },
    {
      q: `Peut-on garder son compte ${x.name} en ouvrant un compte sur une autre plateforme ?`,
      a: `Oui. Les plateformes sont des sociétés distinctes : un compte sur l'une n'a aucune incidence sur un compte sur une autre, et vous pouvez utiliser les deux en parallèle. En revanche, rien de ce qui est lié au compte n'est transféré : votre parrainage sur ${x.name}, votre niveau de frais, vos récompenses de bienvenue et votre historique de trading restent sur ${x.name}.`,
    },
    {
      q: `Peut-on transférer des positions ouvertes sur les futures ${de(x.name)} vers une autre plateforme ?`,
      a: `Non. Une position sur futures n'existe que sur la plateforme où elle a été ouverte. Pour changer, clôturez la position sur ${x.name}, retirez les fonds et ouvrez une nouvelle position sur l'autre plateforme, au prix et avec les frais qui s'y appliquent.`,
    },
    {
      q: `Les alternatives à ${x.name} ont-elles des codes de parrainage ?`,
      a: `Oui, les ${n} : ${alts.map((a) => `${a.name} ${a.referralCode} (${lcFirst(a.feeDiscount || a.bonusHeadline)})`).join(" ; ")}. Utiliser un code de parrainage est gratuit et n'augmente pas vos frais de trading.`,
    },
    {
      q: `Peut-on ajouter un code de parrainage après l'inscription sur une alternative à ${x.name} ?`,
      a: `${alts.map((a) => `${a.name} : ${lcFirst(a.referral.afterSignupShort)}`).join(". ")}. Sur toutes les plateformes, le plus sûr est de vous inscrire via le lien de parrainage.`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `${a.name} est-elle meilleure ${que(x.name)} ?`,
      a: `${ahead.length ? `${a.name} a l'avantage sur ${x.name} sur ces points : ${ahead.map(lcFirst).join(" ; ")}.` : `Sur les points que nous comparons, ${a.name} n'a aucun avantage mesurable sur ${x.name}.`} ${behind.length ? `De son côté, ${x.name} a l'avantage sur ces points : ${behind.map(lcFirst).join(" ; ")}.` : `${x.name} n'a l'avantage sur aucun de ces points.`} ${a.name} vous convient si ${lcFirst(bare(altInfo(a).chooseIf[0]))}.`,
    };
  });

  return [
    { id: "choosing", title: `Choisir une alternative à ${x.name}`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "Frais et levier", faqs: fees },
    { id: "countries", title: "Pays, KYC et réglementation", faqs: countryFaqs },
    { id: "features", title: "Produits et cryptomonnaies", faqs: featureFaqs },
    { id: "switching", title: `Quitter ${x.name} et codes de parrainage`, faqs: switching },
    { id: "versus", title: `${x.name} face aux alternatives`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `Quelles sont les meilleures alternatives à ${x.name} ?`,
    a: `${picks(alts)} Notre page « Alternatives à ${x.name} » compare les ${alts.length} plateformes à ${x.name} selon les frais, le levier, les produits, la disponibilité par pays et la vérification d'identité.`,
  };
}

export const fr: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "Oui", no: "Non", notFound: "Introuvable sur son site" },
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
