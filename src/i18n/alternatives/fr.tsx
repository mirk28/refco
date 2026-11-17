import Link from "next/link";
import type { AlternativesTexts } from "./en";
import { de, que } from "../fr-elision";

/**
 * Texts of the "[Exchange] alternatives" pages in French. Same keys as `./en.tsx`.
 * Wording: "plateforme" (feminine, no article before a name), "frais", "code de parrainage", "vous".
 * Elision before an exchange name through `de()` / `que()` from `../fr-elision` ("d'OKX", "qu'OKX").
 */

/** Singular for 0 and 1, plural from 2. */
const pl = (n: number, one: string, many: string) => (n > 1 ? many : one);

/** "in" form of the country names of the comparison: "aux États-Unis", "au Royaume-Uni", "en France", "à Singapour". */
const inCountryForms: Record<string, string> = {
  "États-Unis": "aux États-Unis",
  "Royaume-Uni": "au Royaume-Uni",
  Canada: "au Canada",
  Allemagne: "en Allemagne",
  France: "en France",
  "Pays-Bas": "aux Pays-Bas",
  Espagne: "en Espagne",
  Italie: "en Italie",
  Australie: "en Australie",
  Japon: "au Japon",
  Singapour: "à Singapour",
  "Hong Kong": "à Hong Kong",
  Inde: "en Inde",
  "Émirats arabes unis": "aux Émirats arabes unis",
};
/** Fallback for a name with an article that is not in the table above. */
const articleIn: Record<string, string> = { les: "aux", le: "au", la: "en", "l'": "en" };

/** Accepts the name with or without article ("les États-Unis" / "États-Unis") and an optional bracket. */
const inCountry = (country: string): string | undefined => {
  const m = /^(les|le|la)\s+(.+)$/i.exec(country.trim()) ?? /^(l)['’](.+)$/i.exec(country.trim());
  const article = m ? (m[1].toLowerCase() === "l" ? "l'" : m[1].toLowerCase()) : undefined;
  const bare = m ? m[2] : country.trim();
  const paren = bare.indexOf(" (");
  const head = paren > 0 ? bare.slice(0, paren) : bare;
  const tail = paren > 0 ? bare.slice(paren) : "";
  const form = inCountryForms[head];
  if (form) return form + tail;
  return article ? `${articleIn[article]} ${bare}` : undefined;
};

export const fr: AlternativesTexts = {
  /* ------------------------------- metadata ------------------------------- */
  title: (x, n, shortMonthYear) => `Alternatives à ${x.name} (${shortMonthYear}) : ${n} ${pl(n, "plateforme comparée", "plateformes comparées")}`,
  description: (x, names, n, former, monthYear) =>
    `${names} : ${n} ${pl(n, "alternative", "alternatives")} à ${x.name}${former ? ` (${former})` : ""} ${pl(n, "comparée", "comparées")} (frais, levier, KYC, pays et codes de parrainage) – données officielles, vérifiées en ${monthYear}.`,
  keywords: (x, alts, former) => [
    `alternatives à ${x.name}`,
    `alternative à ${x.name}`,
    `${x.name} alternatives`,
    `plateformes comme ${x.name}`,
    `meilleures alternatives à ${x.name}`,
    `concurrents ${de(x.name)}`,
    `alternative à ${x.name} moins chère`,
    `alternative à ${x.name} sans KYC`,
    ...(former ? [`alternatives à ${former}`, `alternative à ${former}`] : []),
    ...alts.map((a) => `${a.name} vs ${x.name}`),
  ],
  crumbHome: "Accueil",
  crumbReferral: (name) => `Code de parrainage ${name}`,
  crumbAlternatives: (name) => `Alternatives à ${name}`,
  listLdName: (name) => `Alternatives à ${name}`,
  listLdDescription: (name) => `Plateformes comparées à ${name}, dans l'ordre du classement des produits dérivés de CoinMarketCap.`,
  howToLdName: (name) => `Comment passer ${de(name)} à une autre plateforme`,
  howToLdDescription: (name) => `Ce qu'il faut vérifier, et dans quel ordre, quand vous quittez ${name} pour une autre plateforme crypto.`,
  ogTitle: (name) => `Alternatives à ${name}`,
  ogSubtitle: (names) => `${names} – frais, levier, KYC et pays comparés`,

  /* --------------------------------- words --------------------------------- */
  /** Joins the last two names of a list of links: " et ". */
  and: () => " et ",
  noneOfThem: "Aucune d'entre elles",

  /* ---------------------------------- hero ---------------------------------- */
  updated: (date) => `Vérifié et mis à jour le ${date}`,
  h1: (name, n) => `Alternatives à ${name} : ${n} ${pl(n, "plateforme comparée", "plateformes comparées")}`,
  quickAnswer: "En bref",
  chipsLabel: "Points comparés",
  chips: (n, products, countries) => [
    `${n} ${pl(n, "plateforme", "plateformes")}`,
    "Frais et levier",
    `${products} ${pl(products, "produit", "produits")}`,
    `${countries} pays`,
    "KYC et réglementation",
    "Codes de parrainage",
  ],
  glanceTitle: (name) => `Les alternatives à ${name} en un coup d'œil`,
  glanceIntro: "Le point fort de chacune, avec ses frais standard sur les futures (maker / taker).",
  glanceOrder: (marketDate) => `Ordre : classement des produits dérivés de CoinMarketCap du ${marketDate}. Le trading avec effet de levier présente un risque élevé.`,
  onThisPage: "Sur cette page",
  toc: (name, n) => [
    ["at-a-glance", "En un coup d'œil"],
    ["why", `Pourquoi quitter ${name} ?`],
    ["alternatives", `Les ${n} ${pl(n, "alternative", "alternatives")}`],
    ["by-need", "La meilleure selon vos besoins"],
    ["fees", "Frais"],
    ["products", "Produits"],
    ["countries", "Pays"],
    ["kyc", "Vérification (KYC)"],
    ["safety", "Réglementation et réserves"],
    ["referral-codes", "Codes de parrainage"],
    ["switch", "Comment changer de plateforme"],
    ["faq", "FAQ"],
    ["sources", "Sources"],
  ],

  /* ------------------------------- at a glance ------------------------------ */
  comparedTitle: (name, monthYear) => `Alternatives à ${name} comparées (${monthYear})`,
  comparedIntro: (name, n, date) =>
    `Les ${n} ${pl(n, "alternative", "alternatives")} face à ${name} elle-même. Les frais sont les tarifs standard (hors VIP) que publie chaque plateforme, au format maker / taker ; le levier est le maximum qu'elle documente ; le code de parrainage est celui avec lequel vous pouvez vous inscrire. Nous avons relevé chaque chiffre sur le site de la plateforme elle-même le ${date}.`,
  comparedCaption: (name, n) => `${name} et ${n} ${pl(n, "alternative", "alternatives")} : point fort de chacune, frais, levier et code de parrainage`,
  colExchange: "Plateforme",
  colBestFor: "Point fort",
  colFuturesFees: "Frais futures",
  colSpotFees: "Frais spot",
  colMaxLeverage: "Levier max.",
  colReferralCode: "Code de parrainage",
  colAction: "Action",
  forComparison: "pour comparaison",
  signUp: "S'inscrire",
  comparedOrder: (marketDate) => `Ordre des alternatives : classement des produits dérivés de CoinMarketCap du ${marketDate}.`,

  /* ----------------------------------- why ---------------------------------- */
  whyTitle: (name) => `Pourquoi chercher une alternative à ${name} ?`,
  whyIntro: (name, sourcesHref) => (
    <>
      Voici les points sur lesquels {name} fixe elle-même des limites. Chacun est tiré des pages officielles de la plateforme (voir la{" "}
      <Link href={sourcesHref}>liste des sources sur notre page {name}</Link>). Si aucun ne vous concerne, rester est un choix tout à fait valable.
    </>
  ),
  stayTitle: (name) => `Restez sur ${name} si …`,
  stayOutro: (name, code, href) => (
    <>
      Vous avez décidé de rester ? Notre <Link href={href}>page du code de parrainage {name}</Link> donne le code {code}, les étapes d&apos;inscription et
      l&apos;offre de bienvenue actuelle.
    </>
  ),

  /* ------------------------------ alternatives ------------------------------ */
  detailTitle: (name, n) => `Les ${n} meilleures alternatives à ${name} en détail`,
  detailIntro: (name) =>
    `Nous comparons chaque alternative à ${name} sur les mêmes points : frais, levier, taille du marché, vérification, règles de parrainage, produits et pays acceptés. Nous ne retenons comme « Avantage » que les différences qui se lisent dans les chiffres publiés par les plateformes elles-mêmes.`,
  rowFuturesFees: "Frais futures (maker / taker)",
  rowSpotFees: "Frais spot (maker / taker)",
  rowMaxLeverage: "Levier max.",
  rowAssets: "Actifs listés",
  rowOpenInterest: "Open interest des dérivés",
  rowUsers: "Utilisateurs",
  rowFounded: "Année de création",
  rowKyc: "Vérification d'identité",
  rowAddLater: "Ajouter le code de parrainage plus tard ?",
  rowOffer: "Offre de bienvenue",
  bestFor: (role) => `Point fort : ${role}`,
  asAlternative: (name) => `comme alternative à ${name}`,
  chooseIf: (a, x) => `Choisissez ${a} plutôt ${que(x)} si …`,
  thinkTwiceIf: "Réfléchissez-y à deux fois si …",
  whereAhead: (a, x) => `Les points où ${a} a l'avantage sur ${x}`,
  whereBehind: (x) => `Les points où ${x} a l'avantage`,
  noAdvantage: "Aucun avantage mesurable sur les points que nous comparons.",
  codeLabel: (name) => `Code de parrainage ${name}`,
  signUpOn: (name) => `S'inscrire sur ${name}`,
  linkReferral: (name, code) => `Code de parrainage ${name} ${code} : offre, étapes d'inscription et KYC`,
  linkVersus: (a, x) => `${a} vs ${x} : le face-à-face complet`,
  linkAlternatives: (name) => `Alternatives à ${name}`,
  sideBySide: (a, x) => `${a} vs ${x} : tous les chiffres côte à côte`,
  sideBySideCaption: (a, x) => `${a} vs ${x} : frais, levier, actifs, vérification et règles de parrainage`,
  versusHead: (a, x) => `${a} vs ${x}`,

  /* --------------------------------- by need -------------------------------- */
  needTitle: (name) => `La meilleure alternative à ${name} selon vos besoins`,
  needIntro: (n) =>
    `Laquelle des ${n} arrive en tête ? Tout dépend de ce que vous cherchez. Le tableau répond besoin par besoin, à partir des chiffres et sans classement de notre part.`,
  needCaption: (name) => `Meilleure alternative à ${name} selon le besoin`,
  needColWant: "Si vous voulez …",
  needColLook: "À regarder",
  needColWhy: "Pourquoi",
  needLowestFutures: "Les frais futures les plus bas",
  needLowestSpot: "Les frais spot les plus bas",
  needHighestLeverage: "Le levier le plus élevé",
  needDeepest: "Le marché de dérivés le plus profond",
  needMostMarkets: "Le plus grand nombre de marchés dérivés",
  needMica: "Une plateforme agréée MiCA pour l'EEE",
  needAddLater: "Pouvoir ajouter le code de parrainage après l'inscription",
  whyStandardTier: (fees) => `${fees} maker / taker au niveau standard`,
  whyOpenInterest: (amount, marketDate) => `${amount} d'open interest (CoinMarketCap, ${marketDate})`,
  whyMarkets: (markets, marketDate) => `${markets} ${pl(markets, "marché", "marchés")} (CoinMarketCap, ${marketDate})`,
  whyFeature: "Visible sur le site de la plateforme elle-même ; le détail de l'offre figure sous « Produits »",
  needNotFound: (n) => `Introuvable sur les sites des ${n} alternatives lors de notre vérification.`,

  /* ---------------------------------- fees ---------------------------------- */
  feesTitle: (name) => `Frais : ${name} face à ses alternatives`,
  feesIntro:
    "Les sept plateformes appliquent un modèle maker/taker : les ordres limites qui ajoutent de la liquidité paient les frais maker, ceux qui en retirent paient les frais taker. Le tableau présente le niveau standard, c'est-à-dire les tarifs que paie un nouveau compte avant tout niveau VIP ou toute réduction liée à un token.",
  feesCaption: (name) => `Frais standard spot et futures ${de(name)} et de ses alternatives`,
  colFuturesMaker: "Maker futures",
  colFuturesTaker: "Taker futures",
  colSpotMaker: "Maker spot",
  colSpotTaker: "Taker spot",
  colOtherMarkets: "Autres marchés (maker / taker)",
  feesNote: (date) =>
    `Tarifs standard (hors VIP) tels que chaque plateforme les publie, vérifiés le ${date}. Les frais changent : contrôlez-les sur la plateforme avant de trader.`,
  cheaperTitle: (name) => `Quelle plateforme est moins chère ${que(name)} ?`,
  tokenTitle: "Réductions par token et petites lignes",
  noTokenDiscount: "La plateforme ne publie aucune réduction pour le paiement des frais avec son propre token.",

  /* -------------------------------- products -------------------------------- */
  productsTitle: "Produits : ce que propose chaque plateforme",
  productsIntro: (date) =>
    `Une coche signifie que la plateforme présente le produit sur son propre site. Un tiret signifie que nous n'y avons trouvé aucune page à son sujet le ${date}, ce qui ne prouve pas que le produit n'existe pas. L'offre peut varier selon le pays, surtout sur les plateformes régionales.`,
  productsCaption: (name) => `Produits proposés par ${name} et ses alternatives`,
  colProduct: "Produit",
  productDetailsTitle: "Détail des produits, plateforme par plateforme",
  productDetails: (name) => `${name} : détail des produits`,
  offered: "Disponible",
  notOffered: "Non disponible",
  noPageFound: "Aucune page trouvée sur le site de la plateforme elle-même",

  /* -------------------------------- countries ------------------------------- */
  countriesTitle: (name) => `Disponibilité : ${name} et ses alternatives par pays`,
  countriesIntro: (count) =>
    `Le pays de résidence est la raison la plus fréquente de chercher une alternative. Pour ${count} pays, le tableau indique ce que disent les conditions d'utilisation de chaque plateforme. « Site régional » signifie que la plateforme propose ses services dans ce pays via une plateforme distincte, avec ses propres produits, frais et limites.`,
  countriesCaption: (name) => `Disponibilité ${de(name)} et de ses alternatives selon le pays`,
  colCountry: "Pays",
  legendRestricted: "accès fermé aux résidents selon les conditions d'utilisation ou les avis de la plateforme elle-même",
  legendRegional: "service assuré par une plateforme régionale distincte",
  legendPartial: "seulement certains produits ou certaines régions",
  legendOpen: (date) => `absent de la liste des pays restreints le ${date}`,
  countriesNote:
    "« Non restreint » ne garantit pas que tous les produits soient proposés dans ce pays. Ce sont les conditions de la plateforme au moment de votre inscription qui s'appliquent, et toutes ces plateformes interdisent de contourner une restriction avec un VPN ou de fausses informations.",
  countryHeading: (name, country) => {
    const where = inCountry(country);
    return where ? `Alternatives à ${name} ${where}` : `Alternatives à ${name} : ${country}`;
  },
  restrictedTitle: "Pays restreints et plateformes régionales, plateforme par plateforme",
  whereNotAvailable: (name) => `Où ${name} n'est-elle pas disponible ?`,
  regionalPlatforms: "Plateformes régionales :",

  /* ----------------------------------- kyc ---------------------------------- */
  kycTitle: (name) => `Vérification : existe-t-il une alternative à ${name} sans KYC ?`,
  kycIntro: (n) =>
    `Pas parmi ces ${n}. Toutes les plateformes de ce comparatif demandent une vérification d'identité aux nouveaux utilisateurs, et sur la plupart, les dépôts ou le trading restent bloqués tant qu'elle n'est pas terminée. Les différences portent sur ce qu'un compte non vérifié peut encore faire.`,
  kycCaption: (name) => `Vérification d'identité sur ${name} et ses alternatives`,
  colKyc: "Vérification d'identité",
  kycDetailsTitle: "Ce que dit chaque plateforme sur la vérification",
  kycQuestion: (name) => `Faut-il passer la vérification d'identité (KYC) sur ${name} ?`,

  /* --------------------------------- safety --------------------------------- */
  safetyTitle: "Réglementation, preuve de réserves et fonds de protection",
  safetyIntro:
    "Aucune plateforme centralisée n'est sans risque. Ce que l'on peut comparer, c'est ce que chacune publie sur elle-même : où elle détient une licence, si elle prouve ses réserves et si elle dispose d'un fonds pour les situations d'urgence.",
  safetyCaption: (name) => `Réglementation, preuve de réserves et fonds de protection ${de(name)} et de ses alternatives`,
  colLicences: "Licences citées par la plateforme",
  colReserves: "Preuve de réserves",
  colFund: "Fonds de protection",
  noneNamed: "Aucun fonds cité",
  safetyNote:
    "Les ratios de réserves sont les chiffres des plateformes elles-mêmes, aux dates de relevé indiquées. Ne laissez des fonds que sur une plateforme où vous tradez activement.",

  /* ----------------------------- referral codes ----------------------------- */
  codesTitle: (name) => `Codes de parrainage des alternatives à ${name}`,
  codesIntro:
    "Si vous ouvrez un compte sur l'une des alternatives, faites-le avec un code de parrainage : il ne coûte rien, n'augmente jamais vos frais et débloque l'offre de bienvenue de la plateforme. La dernière colonne compte le plus. Sur plusieurs plateformes, impossible d'ajouter après coup un code oublié.",
  codesCaption: (name) => `Codes de parrainage ${de(name)} et de ses alternatives`,
  colOffer: "Offre de bienvenue",
  colWhere: "Où saisir le code",
  colLater: "Ajout possible plus tard ?",
  codesRow: (name) => `Code de parrainage ${name}`,
  codesNote: (date) =>
    `Offres vérifiées le ${date}. Les récompenses de bienvenue dépendent de tâches, exigent une vérification d'identité et varient selon le pays.`,

  /* --------------------------------- switch --------------------------------- */
  switchTitle: (name) => `Comment passer ${de(name)} à une autre plateforme`,
  switchIntro:
    "Changer de plateforme demande moins de travail qu'il n'y paraît, à condition de respecter l'ordre : d'abord le compte, ensuite la vérification, les fonds en dernier.",

  /* ----------------------------------- faq ---------------------------------- */
  faqTitle: (name) => `Alternatives à ${name} : FAQ`,
  faqIntro: (name, count) =>
    `${count} questions pour remplacer ${name} : quelle plateforme pour quel besoin, frais, pays, vérification et marche à suivre pour changer.`,

  /* --------------------------------- sources -------------------------------- */
  sourcesTitle: "Sources : d'où viennent ces chiffres",
  sourcesIntro: (date, marketDate) =>
    `Nous avons relevé tout ce que cette page indique sur les frais, le levier, les produits, la vérification, les pays, les licences, les réserves et les règles de parrainage sur les sites et dans les centres d'aide des plateformes elles-mêmes le ${date}. L'open interest (intérêt ouvert) et le nombre de marchés dérivés proviennent du classement des produits dérivés de CoinMarketCap (${marketDate}). Les plateformes modifient leurs conditions sans préavis : ce sont donc les pages ci-dessous qui font foi.`,
  sourcesSummary: (name, count, focus) =>
    `${name} : ${count} ${pl(count, "page officielle", "pages officielles")}${focus ? "" : ` ${pl(count, "consultée", "consultées")} pour ce comparatif`}`,
  sourcesMore: (name, count, href) => (
    <>
      Frais, levier, vérification, règles de parrainage et liste des pays restreints {de(name)} :{" "}
      <Link href={href}>{count > 1 ? `les ${count} sources sur notre page ${name}` : `la source sur notre page ${name}`}</Link>.
    </>
  ),

  /* ---------------------------------- more ---------------------------------- */
  moreTitle: "Autres comparatifs de plateformes",
  headToHeadTitle: (name) => `${name} en face-à-face`,
  headToHeadIntro: "Une alternative figure sur votre liste ? Les face-à-face détaillent davantage les frais, les produits, les pays et les offres de parrainage :",
  otherAlternativesTitle: "Alternatives aux autres plateformes",
  otherAlternativesIntro: "Le même comparatif, du point de vue de chacune des autres plateformes :",
  referralLink: (name, code) => `Code de parrainage ${name} ${code}`,
  allComparisons: "Tous les comparatifs de plateformes",

  /* ------------------------------ notice and CTA ----------------------------- */
  risk: (disclosureHref) => (
    <>
      <strong>Avertissement sur les risques :</strong> les produits dérivés crypto sont des instruments complexes. L&apos;effet de levier multiplie les
      gains comme les pertes, et vous pouvez perdre toute votre marge en quelques minutes. Cette page est fournie à titre d&apos;information uniquement et
      ne constitue pas un conseil financier. Nous pouvons percevoir une commission si vous vous inscrivez via nos liens (voir la page{" "}
      <Link href={disclosureHref}>Divulgation d&apos;affiliation</Link>). Cela ne change rien aux chiffres, qui sont ceux des plateformes elles-mêmes.
    </>
  ),
  ctaTitle: (name) => `Vous avez trouvé votre alternative à ${name} ?`,
  ctaText: "Inscrivez-vous avec un code de parrainage vérifié : un seul compte pour le spot et les futures, sans coût supplémentaire.",
  ctaButton: "Voir tous les codes de parrainage",
};
