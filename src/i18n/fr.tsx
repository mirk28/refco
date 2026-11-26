import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";
import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";
import { de, que } from "./fr-elision";

/**
 * Interface texts in French. Same keys as `en.tsx`.
 *
 * Wording: "code de parrainage" for referral code (main keyword; "code parrain" and "code d'invitation" as second
 * terms), "plateforme" (f.) for the exchange, "frais" for fees, "spot" and "futures" for the markets, formal address
 * ("vous"). Exchange names stand without article and are feminine ("Binance est-elle …"); "de" / "que" before a
 * name go through `./fr-elision` ("de Binance", "d'OKX"). Numbers in French notation (10 000 USDT, 0,02 %,
 * 34,1 Md $). Field and button names of the exchanges stay in English, because only the English interface was checked.
 */

const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A, B et C" – no comma before "et". */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} et ${items[items.length - 1]}`);
/** "A, B ou C" – for alternatives such as the sign-up methods. */
const orList = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} ou ${items[items.length - 1]}`);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
const names = ["Binance", "OKX", "Bybit", "Bitget", "Gate", "KuCoin", "MEXC"];
/**
 * A table value after a colon or inside a sentence: first letter in lower case ("Jusqu'à 150x" → "jusqu'à 150x"),
 * unless the text starts with an exchange name or an acronym (KYC, USDT, MiCA).
 */
const lcStart = (s: string) => {
  const first = s.split(/[\s'’]/)[0];
  if (names.includes(first) || /[A-Z0-9]/.test(first.slice(1))) return s;
  return s.charAt(0).toLocaleLowerCase("fr-FR") + s.slice(1);
};
/** A step title as a sentence in a running answer. */
const asSentence = (s: string) => (/[.!?:]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** A number in French notation: 1234.5 → "1 234,5". */
const frNumber = (n: number, digits: number) => {
  const [int, dec] = n.toFixed(digits).split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return dec ? `${grouped},${dec}` : grouped;
};
/** Billions of US dollars: 34.1 → "34,1 Md $". */
const md = (n: string) => `${n} Md $`;

export const fr: Dictionary = {
  list,

  format: {
    billions: (n) => md(frNumber(n, n >= 10 ? 1 : 2)),
    billionsExact: (n) => md(frNumber(n, 2)),
    billionsFloor: (n) => md(`${frNumber(Math.floor(n), 0)}+`),
  },

  meta: {
    siteTitle: `${site.name} – Codes de parrainage vérifiés pour les plateformes crypto`,
    siteDescription:
      "Codes de parrainage vérifiés pour Binance, OKX, Bybit, Bitget, Gate, KuCoin et MEXC : bonus pour nouveaux utilisateurs et remises sur les frais en spot et en futures, avec un seul lien d'inscription. Frais, faits, points forts et points faibles, sans détour.",
  },

  layout: {
    skip: "Aller au contenu",
    mainNav: "Menu principal",
    nav: { exchanges: "Plateformes", benefits: "Avantages", compare: "Comparer", howItWorks: "Fonctionnement", about: "À propos" },
    getCodes: "Voir les codes",
    homeLabel: `${site.name} – accueil de ${site.domain}`,
    language: "Langue",
    footerAbout:
      "Codes de parrainage vérifiés pour les plus grandes plateformes crypto : bonus de bienvenue et remises sur les frais en spot et en futures. Des faits clairs, tirés de sources officielles.",
    referralCodes: "Codes de parrainage",
    referralCodeOf: (name) => `Code de parrainage ${name}`,
    alternatives: "Alternatives",
    alternativesOf: (name) => `Alternatives à ${name}`,
    guides: "Guides",
    comparisons: "Comparatif des plateformes",
    howCodesWork: "Comment fonctionnent les codes de parrainage",
    faq: "FAQ",
    about: "À propos et méthodologie",
    legal: "Informations légales",
    imprint: "Mentions légales",
    privacy: "Politique de confidentialité",
    disclosure: "Divulgation d'affiliation",
    cookieSettings: "Paramètres des cookies",
    risk: (
      <>
        <strong>Avertissement sur les risques :</strong> le trading de produits dérivés crypto avec effet de levier est très risqué et peut entraîner la
        perte de la totalité de votre dépôt. Ne tradez qu'avec de l'argent que vous pouvez vous permettre de perdre. Rien sur ce site ne constitue un conseil
        financier, d'investissement ou fiscal.
      </>
    ),
    affiliate: (
      <>
        <strong>Divulgation d'affiliation :</strong> certains liens sont des liens de parrainage. Si vous vous inscrivez par leur intermédiaire, nous
        pouvons percevoir une commission, sans aucun coût supplémentaire pour vous. Cela n'influence jamais les faits que nous publions. Les noms et logos
        des plateformes sont des marques de leurs propriétaires respectifs ; {site.name} n'est ni affilié à ces derniers ni approuvé par eux.
      </>
    ),
  },

  consent: {
    label: "Consentement à la mesure d'audience",
    text: (privacyHref) => (
      <>
        <strong>Mesure d'audience : à vous de choisir.</strong> Nous aimerions utiliser Google Analytics pour savoir quelles pages sont lues. Cet outil
        dépose des cookies et envoie des données d'utilisation à Google, et il ne démarre que si vous l'autorisez. Aucun cookie publicitaire, dans tous les
        cas. Détails : <Link href={privacyHref}>politique de confidentialité</Link>.
      </>
    ),
    decline: "Refuser",
    allow: "Autoriser la mesure d'audience",
  },

  notFound: {
    title: "Cette page n'existe pas",
    text: "Le code de parrainage que vous cherchez a peut-être changé d'adresse. Essayez l'une de ces plateformes :",
    back: "Retour à l'accueil",
  },

  og: {
    footer: ["Liens vérifiés", "Frais et faits", "Sources officielles"],
    homeAlt: "RefCo – codes de parrainage vérifiés pour les plateformes crypto",
    homeKicker: (monthYear) => `Mis à jour en ${monthYear}`,
    homeTitle: "Codes de parrainage crypto, vérifiés.",
    exchangeAlt: "Code de parrainage, alternatives et comparatifs d'une plateforme crypto – RefCo",
    exchangeKicker: (monthYear) => `Vérifié en ${monthYear}`,
    exchangeTitle: (e) => `Code de parrainage ${e.name}`,
    exchangeSubtitle: (e) => `${benefit(e)} · Spot et futures avec un seul lien`,
    versusBadge: "Face-à-face",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `Frais futures ${feesA} vs ${feesB} · levier ${leverageA}x vs ${leverageB}x · KYC, pays, bonus`,
  },

  blocks: {
    signUpOn: (name) => `S'inscrire sur ${name}`,
    signUp: "S'inscrire",
    details: "Détails",
    breadcrumb: "Fil d'Ariane",
    copy: "Copier",
    copied: "Copié ✓",
    spotMakerTaker: "Spot maker / taker",
    futuresMakerTaker: "Futures maker / taker",
    maxLeverage: "Levier max.",
    since: "Création",
    tableCaption: "Comparatif des plateformes crypto : offre de bienvenue, frais spot et futures, levier et données de marché",
    exchange: "Plateforme",
    newUserOffer: "Offre de bienvenue",
    futuresFees: "Frais futures (maker / taker)",
    spotFees: "Frais spot",
    openInterest: "Open interest",
    markets: "Marchés",
    action: "Action",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) => fit(TITLE_MAX, `Codes de parrainage crypto et bonus (${monthYear})`, `Codes de parrainage crypto (${monthYear})`),
    description: (monthYear) =>
      fit(
        DESC_MAX,
        `Codes de parrainage vérifiés pour Binance, OKX, Bybit, Bitget, Gate, KuCoin et MEXC : bonus et remises de frais avec un seul lien (${monthYear}).`,
        `Codes de parrainage vérifiés pour Binance, OKX, Bybit, Bitget, Gate, KuCoin et MEXC : bonus et remises de frais spot et futures avec un seul lien.`,
      ),
    listName: "Codes de parrainage des plateformes crypto pour le spot et les futures",
    updated: (monthYear) => `Mis à jour en ${monthYear}`,
    h1: (
      <>
        Codes de parrainage des plateformes crypto, <span className="hl">vérifiés</span> et expliqués.
      </>
    ),
    lead: (
      <>
        Obtenez les bonus de bienvenue et les remises sur les frais des plus grandes plateformes crypto au monde, avec un seul parrainage pour le spot{" "}
        <em>et</em> les futures. Vous y trouverez aussi les faits utiles pour choisir : frais, levier, licences, points forts et points faibles, sans
        complaisance.
      </>
    ),
    browse: "Voir les codes de parrainage",
    seeBenefits: "Voir vos avantages",
    trust: (date) => [`Vérifié le ${date}`, "Liens officiels uniquement", "Mesure d'audience uniquement avec votre accord"],
    featured: "Plateformes en vedette",
    ticketName: (name) => `Code de parrainage ${name}`,
    ticketTag: "SPOT + FUTURES",
    stats: ["Grandes plateformes spot et futures", "Open interest cumulé", "Marchés de dérivés suivis", "Frais maker les plus bas (MEXC)"],
    marketData: (date) => `Données de marché : classement des dérivés de CoinMarketCap, relevé du ${date}.`,

    benefitsEyebrow: "Vos avantages",
    benefitsTitle: `Pourquoi s'inscrire avec un code de parrainage ${site.name} ?`,
    benefitsLead: "Même plateforme, mêmes frais, mais avec les avantages réservés aux nouveaux utilisateurs, que vous perdriez en vous inscrivant directement.",
    benefits: [
      {
        title: "Bonus de bienvenue",
        text: "Accédez à l'offre de bienvenue de la plateforme : bons de remise sur les frais, bonus futures et récompenses de tâches pouvant atteindre plusieurs milliers d'USDT.",
      },
      {
        title: "Frais de trading réduits",
        text: "Quand la plateforme le permet, une partie de la commission de parrainage vous revient sous forme de remise sur chaque trade.",
      },
      {
        title: "Spot et futures, un seul lien",
        text: "Le parrainage est lié à votre compte : il couvre le spot, les futures, la marge et les options. Pas besoin d'un deuxième code.",
      },
      {
        title: "Aucun coût supplémentaire",
        text: "Un parrainage n'augmente jamais vos frais. Vous y gagnez, et c'est la plateforme qui finance le programme.",
      },
      {
        title: "Pages d'inscription officielles",
        text: "Chaque lien ouvre le site de la plateforme elle-même. Aucun intermédiaire, aucune donnée partagée avec nous.",
      },
      {
        title: "À utiliser dès l'inscription",
        text: "Certaines plateformes permettent d'ajouter un code pendant 30 jours, d'autres jamais. Utilisez le lien avant de créer votre compte et vous êtes couvert partout.",
      },
    ],
    offersCaption: "Offres de bienvenue par plateforme",
    offersHead: ["Plateforme", "Offre de bienvenue avec parrainage", "Un seul lien couvre"],
    claim: "En profiter",
    offersNote: (date) =>
      `Offres vérifiées le ${date}. Les récompenses de bienvenue dépendent de tâches, exigent une vérification d'identité et varient selon la région : les conditions en vigueur figurent sur la page d'inscription de chaque plateforme.`,

    exchangesEyebrow: "Codes de parrainage",
    exchangesTitle: "Choisissez votre plateforme",
    exchangesLead:
      "Chaque page explique le parrainage, les frais et le profil de trader auquel la plateforme convient le mieux : vous vous inscrivez une seule fois, sur la bonne plateforme.",
    sideBySide: "Côte à côte",
    notSure: "Vous hésitez ?",
    notSureText: (count) => `Comparez les frais, le levier et l'open interest des ${count} plateformes dans un seul tableau.`,
    compareExchanges: "Comparer les plateformes",

    compareTitle: "Plateformes crypto comparées : spot et futures",
    compareLead: "Offres de bienvenue, frais standard (hors VIP) en spot et en futures, levier et profondeur de marché en un coup d'œil.",
    compareNote: (reviewed, market) =>
      `Frais : niveau standard publié par chaque plateforme, vérifié le ${reviewed}. Open interest et marchés : CoinMarketCap, ${market}. Les frais changent : vérifiez-les sur la plateforme avant de trader.`,
    versusStrip: {
      title: "Comparez deux plateformes en face-à-face",
      text: (pairs, hubHref) => (
        <>
          {pairs} face-à-face mettent côte à côte frais, levier, produits, pays, KYC et offres de parrainage :{" "}
          <Link href={hubHref}>tous les comparatifs de plateformes</Link>.
        </>
      ),
    },
    alternativesStrip: {
      title: "Vous cherchez une alternative à votre plateforme ?",
      text: (others) =>
        `Chaque comparatif oppose une plateforme aux ${others} autres : frais, levier, produits, vérification d'identité et pays acceptés.`,
    },

    picksEyebrow: "Réponse rapide",
    picksTitle: "Quelle plateforme vous convient le mieux ?",
    picks: [
      { label: "Liquidité la plus profonde", slug: "binance", why: "Le plus grand open interest et le plus gros volume de futures au monde." },
      { label: "Frais bas et options", slug: "okx", why: "0,08 % / 0,10 % sur le spot, 0,03 % sur les options et une preuve de réserves chaque mois." },
      { label: "Trading actif de futures sur mobile", slug: "bybit", why: "Un moteur rapide et l'une des meilleures applications de trading." },
      { label: "Copy trading", slug: "bitget", why: "Copiez automatiquement des traders de futures expérimentés." },
      { label: "Le plus d'altcoins", slug: "gate", why: "5 400+ actifs et des futures sur des tokens de niche." },
      { label: "Bots de trading", slug: "kucoin", why: "Des bots de trading gratuits pour le spot et les futures." },
      { label: "Frais les plus bas", slug: "mexc", why: "0 % de frais maker sur le spot et sur la plupart des contrats futures." },
    ],

    howEyebrow: "Fonctionnement",
    howTitle: "Utiliser un code de parrainage en trois étapes",
    steps: [
      {
        title: "Choisissez une plateforme",
        text: "Comparez les frais, le levier et les fonctionnalités ci-dessus, puis ouvrez la page de la plateforme qui correspond à votre façon de trader.",
      },
      {
        title: "Inscrivez-vous via notre lien",
        text: "Le parrainage est associé automatiquement. Inscrivez-vous avec votre adresse e-mail ou votre numéro de téléphone avant d'ouvrir un compte par un autre biais.",
      },
      {
        title: "Vérifiez votre compte et récupérez vos récompenses",
        text: "Terminez la vérification d'identité (KYC), sécurisez votre compte avec la double authentification (2FA) et consultez les récompenses de bienvenue affichées dans votre tableau de bord.",
      },
    ],

    trustEyebrow: `Pourquoi ${site.name}`,
    trustTitle: "Conçu pour la confiance, pas pour les clics",
    trustCards: [
      {
        title: "Offres vérifiées",
        text: "Nous vérifions l'offre de bienvenue de chaque plateforme et ne listons que ce que vous pouvez réellement obtenir.",
      },
      {
        title: "Des faits récents et datés",
        text: "Frais, levier et licences sont revérifiés régulièrement, et chaque page indique sa date de vérification.",
      },
      { title: "La confidentialité d'abord", text: "Aucun pixel publicitaire, aucun cookie publicitaire. La mesure d'audience ne fonctionne que si vous l'autorisez." },
      {
        title: "Rapide et clair",
        text: "Des pages légères qui s'affichent instantanément sur n'importe quel téléphone : la réponse d'abord, les détails ensuite.",
      },
      {
        title: "Avantages et inconvénients, sans détour",
        text: "Nous signalons les faiblesses, les incidents et les restrictions régionales, pas seulement le discours marketing.",
      },
      { title: "Le risque d'abord", text: "L'effet de levier peut anéantir un dépôt très vite. Nous le disons clairement sur chaque page." },
    ],

    faqEyebrow: "FAQ",
    faqTitle: "Codes de parrainage : questions fréquentes",
    faqs: (reviewed) => [
      {
        q: "Qu'est-ce qu'un code de parrainage sur une plateforme crypto ?",
        a: "Un code de parrainage (aussi appelé code parrain, code d'invitation ou referral ID) est un identifiant court qui relie un nouveau compte sur une plateforme à la personne ou au site qui l'a recommandée. Les plateformes s'en servent pour récompenser les deux parties : les nouveaux utilisateurs reçoivent en général des récompenses de bienvenue ou une réduction des frais de trading, et le parrain touche une part des frais.",
      },
      {
        q: "Quels sont les avantages d'un code de parrainage ?",
        a: "Les nouveaux utilisateurs qui s'inscrivent avec un parrainage accèdent à l'offre de bienvenue de la plateforme, par exemple jusqu'à 250 USDT de récompenses de parrainage sur Bybit ou jusqu'à 10 000 USDT de récompenses pour nouveaux utilisateurs sur MEXC. Lorsque le parrain reverse une partie de sa commission, ils récupèrent aussi une part de leurs frais de trading, comme 10 % pendant un an sur Gate. Cela ne coûte rien de plus.",
      },
      {
        q: "Un même code de parrainage fonctionne-t-il pour le spot et les futures ?",
        a: "Oui. Sur Binance, OKX, Bybit, Bitget, Gate, KuCoin et MEXC, le parrainage est lié à votre compte, et non à un produit en particulier. Une seule inscription couvre le trading spot et futures, ainsi que la marge, les options ou le copy trading quand la plateforme les propose.",
      },
      {
        q: "Paie-t-on plus cher en s'inscrivant avec un code de parrainage ?",
        a: "Non. S'inscrire via un lien de parrainage n'augmente jamais vos frais. Selon la plateforme et votre région, vous pouvez même obtenir une réduction des frais ou un bonus de bienvenue auquel vous n'auriez pas droit sans parrainage.",
      },
      {
        q: "Peut-on ajouter un code de parrainage après avoir créé son compte ?",
        a: "Cela dépend de la plateforme. Binance permet de lier un code dans les 30 jours suivant l'inscription si vous n'avez effectué ni dépôt ni trade, et MEXC vous laisse lier vous-même un parrain dans les 30 jours après l'inscription. KuCoin propose une demande “Link Referrer” dans son centre d'aide. Bybit, OKX et Bitget n'acceptent le code que pendant l'inscription, et Gate ne documente aucun moyen d'en ajouter un plus tard. Le plus sûr est d'utiliser le lien avant de créer votre compte.",
      },
      {
        q: "Quelle plateforme crypto a les frais futures les plus bas ?",
        a: `Lors de notre dernière vérification (${reviewed}), MEXC affichait les frais standard sur les futures les plus bas, avec 0 % maker et 0,02 % taker sur BTCUSDT. Binance, OKX et Gate facturent 0,02 % maker / 0,05 % taker au niveau standard, Bybit 0,02 % / 0,055 %, et Bitget et KuCoin 0,02 % / 0,06 %.`,
      },
      {
        q: "Quelle est la meilleure plateforme pour les produits dérivés crypto ?",
        a: "Tout dépend de ce que vous tradez. Binance offre la liquidité la plus profonde, OKX associe frais bas et options, Bybit mise sur le trading rapide de contrats perpétuels, Bitget sur le copy trading, Gate sur les futures d'altcoins, KuCoin sur les bots et MEXC sur les frais les plus bas.",
      },
      {
        q: "Ces plateformes sont-elles disponibles aux États-Unis ?",
        a: "Pour la plupart, non. Binance, Bybit, Bitget, Gate, KuCoin et MEXC classent les États-Unis parmi les pays restreints ou interdits, et OKX restreint certaines juridictions américaines. La disponibilité varie aussi au Royaume-Uni, au Canada et dans l'UE : chaque page de plateforme liste les pays restreints d'après les conditions d'utilisation de la plateforme elle-même.",
      },
      {
        q: "À quelle fréquence ces informations sont-elles mises à jour ?",
        a: `Nous revérifions régulièrement les frais, le levier, les licences et les données de marché. Chaque page affiche la date de sa dernière vérification ; les données actuelles ont été vérifiées le ${reviewed}.`,
      },
    ],
    countryFaq: {
      country: "fr",
      // The answer below states these statuses in words. The home page compares them with the researched
      // data (src/data/alternatives/) and stops the build if one has changed, so the text gets rewritten.
      expected: { binance: "open", okx: "regional", bybit: "regional", bitget: "restricted", gate: "regional", kucoin: "partial", mexc: "restricted" },
      faq: (reviewed) => ({
        q: "Ces plateformes sont-elles disponibles en France ?",
        a: `D'après les pages de chaque plateforme, vérifiées le ${reviewed} : Binance ne fait pas figurer la France sur sa liste de pays interdits. OKX, Bybit et Gate servent les résidents français via leurs plateformes européennes agréées MiCA : OKX Europe et Gate EU à Malte (MFSA), Bybit EU à Vienne (FMA autrichienne). À noter : OKX Europe limite les contrats perpétuels à 10x, Gate EU propose moins de produits que le site mondial, et les nouveaux utilisateurs de l'EEE ne peuvent plus s'inscrire sur la plateforme mondiale de Bybit. KuCoin restreint la France sur son site mondial, et KuCoin EU, qui couvre l'EEE hors Malte, ne cite pas la France. Bitget a cessé ses services en France ; Bitget EU a demandé un agrément MiCAR à la FMA autrichienne et ne proposera ses services qu'une fois celui-ci accordé. MEXC restreint la France, où ses services s'arrêtent progressivement jusqu'au 5 mars 2027. Pour les autres pays, la page de chaque plateforme liste les restrictions d'après ses propres conditions.`,
      }),
    },

    ctaTitle: "Profitez de votre bonus de bienvenue",
    ctaText: "Choisissez une plateforme, inscrivez-vous avec un parrainage vérifié et tradez le spot et les futures avec un seul compte.",
    ctaButton: "Voir tous les codes de parrainage",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    // Quatre formulations, fixes par plateforme, pour que les titres ne commencent pas tous de la même façon.
    title: (e, shortMonthYear) => {
      const n = e.name, c = e.referralCode, b = benefit(e), y = yearOf(shortMonthYear);
      return [
        () => fit(TITLE_MAX, `Code de parrainage ${n} ${c} (${shortMonthYear}) : ${lcStart(b)}`, `Code de parrainage ${n} ${c} (${shortMonthYear}) avec bonus`, `Code de parrainage ${n} ${c} (${shortMonthYear})`),
        () => fit(TITLE_MAX, `${c} : code de parrainage ${n}, ${lcStart(b)}`, `${c} : code de parrainage ${n} et bonus (${shortMonthYear})`, `${c} : code de parrainage ${n} (${shortMonthYear})`),
        () => fit(TITLE_MAX, `${b} : code de parrainage ${n} ${c}`, `Bonus de bienvenue ${y} : code de parrainage ${n} ${c}`, `Code de parrainage ${n} ${c} (${y})`),
        () => fit(TITLE_MAX, `Comment utiliser le code de parrainage ${n} ${c} (${shortMonthYear})`, `Comment utiliser le code de parrainage ${n} ${c}`, `Code de parrainage ${n} ${c}`),
      ][variant(4, e.slug)]();
    },
    description: (e, monthYear) =>
      fit(
        DESC_MAX,
        `Code de parrainage ${e.name} : ${e.referralCode}. ${benefit(e)}. Où le saisir, inscription, KYC et frais, vérifiés en ${monthYear}.`,
        `Code de parrainage ${e.name} : ${e.referralCode}. ${benefit(e)}. Où le saisir, KYC et frais (${monthYear}).`,
        `Code de parrainage ${e.name} : ${e.referralCode}. ${benefit(e)}. Où le saisir, étapes d'inscription, KYC et frais.`,
        `Code de parrainage ${e.name} : ${e.referralCode}. Où le saisir, étapes d'inscription, KYC et frais, vérifiés en ${monthYear}.`,
      ),
    keywords: (e) => {
      const same = (k: string) => k.toLocaleLowerCase("fr-FR").replace(/[\s'-]/g, "");
      return [
        `code de parrainage ${e.name}`,
        `code de parrainage ${e.name} ${e.referralCode}`,
        `code parrain ${e.name}`,
        `code d'invitation ${e.name}`,
        `lien de parrainage ${e.name}`,
        `code promo ${e.name}`,
        `${e.name} referral code`,
        ...(/referral/i.test(e.referral.codeName) ? [`${e.name} ${e.referral.codeName}`] : []),
        `bonus de bienvenue ${e.name}`,
        `bonus d'inscription ${e.name}`,
        `comment s'inscrire sur ${e.name}`,
        `KYC ${e.name}`,
        `frais futures ${e.name}`,
      ].filter((k, i, all) => all.findIndex((x) => same(x) === same(k)) === i);
    },
    toc: {
      "code-facts": "Le code en bref",
      benefits: "Vos avantages",
      "use-code": "Utiliser le code",
      "how-to": "Comment s'inscrire",
      verification: "Vérification (KYC)",
      "key-facts": "Chiffres clés",
      fees: "Frais",
      about: "À propos de la plateforme",
      "pros-cons": "Avantages et inconvénients",
      "best-for": "Pour qui ?",
      safety: "Sécurité et disponibilité",
      faq: "FAQ",
      sources: "Sources",
      alternatives: "Alternatives et comparatifs",
    },
    onThisPage: "Sur cette page",
    crumbHome: "Accueil",
    crumbCodes: "Codes de parrainage",
    crumbPage: (e) => `Code de parrainage ${e.name}`,

    /* JSON-LD */
    offerName: (e) => `Code de parrainage ${e.name} ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}. Un seul parrainage couvre ${list(e.referralCovers)}.`,
    offerCategory: "Inscription sur une plateforme crypto",
    howToName: (e) => `Comment s'inscrire sur ${e.name} avec le code de parrainage ${e.referralCode}`,
    howToDescription: (e) =>
      `Les étapes d'inscription sur ${e.name} telles que la plateforme les documente, y compris l'endroit où saisir le code de parrainage ${e.referralCode}.`,

    /* Hero */
    updated: (date) => `Vérifié et mis à jour le ${date}`,
    h1: (e) => `Code de parrainage ${e.name} : ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong>, avec un seul parrainage pour {list(e.referralCovers)}. Voici ce que vous obtenez, ce que coûte le trading et si{" "}
        {e.name} est la plateforme qu'il vous faut.
      </>
    ),
    quickAnswer: "Réponse rapide",
    highlights: "Points clés",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futures ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `Levier ${lcStart(shortLeverage(e))}`,
      `${e.market.markets} marchés de dérivés`,
      `Depuis ${e.founded}`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `Votre inscription sur ${e.name}`,
    appliedByLink: "Le parrainage s'applique automatiquement via ce lien.",
    goesToOfficial: (domain) => `Mène directement au site officiel ${domain}.`,
    codeLabel: "Code de parrainage",
    noCodeToType: "Aucun code à saisir : il s'applique via le lien",
    officialSite: (domain) => `Site officiel : ${domain}`,
    yourBenefits: "Vos avantages",
    freeNeverRaises: "Gratuit : un parrainage n'augmente jamais vos frais",
    qrLabel: (e) => `Code QR : s'inscrire dans l'application ${e.name} avec le parrainage ${e.referralCode}`,
    preferApp: "Vous préférez l'application ?",
    scan: (e) => (
      <>
        Scannez-le avec l'appareil photo de votre téléphone pour ouvrir {e.name}
        {e.referralCode ? (
          <>
            , parrainage <strong>{e.referralCode}</strong> inclus
          </>
        ) : null}
        . Fonctionne sur iOS et Android.
      </>
    ),
    riskLine: (e, links) => (
      <>
        Le trading à effet de levier comporte un risque élevé. {e.name} n'est pas disponible dans tous les pays : consultez la section{" "}
        <a href="#safety">disponibilité</a> ou les <Link href={links.alternatives}>alternatives à {e.name}</Link>.
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `Le code de parrainage ${e.name} ${e.referralCode} en bref`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        En {monthYear}, le code de parrainage {e.name} (aussi appelé code parrain ou code d'invitation) est <strong>{e.referralCode}</strong>. Le
        tableau résume ce qu'il fait, où le saisir et ce {que(e.name)} exige d'un nouveau compte. Chaque ligne a été vérifiée le {date} sur les
        pages officielles {de(e.name)}.
      </>
    ),
    codeFactsCaption: (e) => `Code de parrainage ${e.name} ${e.referralCode} : l'essentiel`,
    codeFacts: (e, date) => [
      [`Code de parrainage ${e.name}`, <strong key="code">{e.referralCode}</strong>],
      [`Nom utilisé par ${e.name}`, e.referral.codeName],
      ["Avantage pour les nouveaux utilisateurs", benefit(e)],
      ["Où le saisir", e.referral.whereShort],
      ["Peut-on l'ajouter après l'inscription ?", e.referral.afterSignupShort],
      ["Valable pour", e.referralCovers.join(", ")],
      ["Vérification d'identité (KYC)", e.signup.kycShort],
      ["Coût", "Gratuit : il n'augmente pas vos frais"],
      ["Dernière vérification", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `Vos avantages avec le code de parrainage ${e.name}`,
    benefitsIntro: (e) => (
      <>
        S'inscrire avec le code de parrainage {e.name} <strong>{e.referralCode}</strong> ne vous coûte rien de plus. Voici ce {que(e.name)} propose
        actuellement aux nouveaux comptes. Le même code vaut pour <strong>{list(e.referralCovers)}</strong> : inutile d'en avoir un pour le spot et un
        autre pour les futures.
      </>
    ),
    offerChecked: (date) => `Offre de bienvenue · vérifiée le ${date}`,
    appliedWhenRegistering: "valable si vous vous inscrivez via ce parrainage",
    noExtraCost: "Aucun coût supplémentaire : un parrainage ne rend jamais vos frais de trading plus élevés",
    oneReferralCovers: "Un seul parrainage couvre :",
    claimOffer: (e) => `Profiter de l'offre de bienvenue ${de(e.name)}`,
    tasksTitle: (e) => `Offre de bienvenue ${de(e.name)} : tâches et récompenses`,
    tasksCaption: (e) => `Tâches pour nouveaux utilisateurs sur ${e.name} et récompense de chacune`,
    task: "Tâche",
    reward: "Récompense",
    tasksNote: (e, date) =>
      `Telles qu'affichées par ${e.name} le ${date}. Les offres varient selon le pays et changent souvent : seules comptent les conditions affichées dans votre compte après l'inscription.`,

    /* How to use the code */
    useCodeTitle: (e) => `Comment utiliser le code de parrainage ${e.name} ${e.referralCode}`,
    whereToEnter: (e) => `Où saisir le code de parrainage ${e.name} ?`,
    forgotCode: "Code oublié ? L'ajouter après l'inscription",
    asInvited: "Ce que vous obtenez en tant que filleul",
    interfaceNote: (e) => (
      <>
        Les noms de champs et de boutons entre guillemets sont ceux de l'interface anglaise {de(e.name)}, celle que nous avons vérifiée ; dans
        l'interface française, ils peuvent porter un autre nom.
      </>
    ),

    /* Registration */
    howToTitle: (e) => `Comment s'inscrire sur ${e.name} étape par étape`,
    howToIntro: (e) => (
      <>
        {e.name} permet de créer un compte avec {orList(e.signup.methods)}. Voici les étapes telles {que(e.name)} les documente, avec le moment où
        intervient le code de parrainage <strong>{e.referralCode}</strong>.
      </>
    ),
    startRegistration: (e) => `Commencer l'inscription sur ${e.name}`,

    /* Verification */
    kycTitle: (e) => `Vérification d'identité (KYC) sur ${e.name}`,
    verification: "Vérification",
    minAge: "Âge minimum",
    documents: "Documents acceptés",

    /* Key facts */
    factsTitle: (e) => `L'essentiel sur ${e.name}`,
    founded: "Année de création",
    headquarters: "Siège",
    futuresFees: "Frais futures (maker / taker)",
    spotFees: "Frais spot (maker / taker)",
    maxLeverage: "Levier maximal",
    assets: "Actifs",
    openInterest: "Open interest",
    volume24h: "Volume des dérivés sur 24 h",
    users: "Utilisateurs",
    regulation: "Réglementation",
    factsNote: (date) =>
      `Open interest, volume et nombre de marchés : classement des dérivés de CoinMarketCap, ${date}. Frais : niveau standard à la date de vérification.`,

    /* Fees */
    feesTitle: (e) => `Frais ${e.name} expliqués`,
    feesIntro: (e) =>
      `${e.name} applique un modèle maker/taker : les ordres qui ajoutent de la liquidité au carnet d'ordres (ordres à cours limité) paient les frais maker, ceux qui en retirent (ordres au marché) paient les frais taker. Les taux baissent à mesure que votre volume sur 30 jours ou vos avoirs augmentent.`,
    market: "Marché",
    maker: "Maker",
    taker: "Taker",
    futuresRow: "Futures / perpétuels",
    spotRow: "Spot",
    feesNote: (e, date) => `Taux standard (hors VIP) publiés par ${e.name}, vérifiés le ${date}.`,
    funding: "Les taux de financement (funding) des contrats perpétuels sont versés entre traders, et non à la plateforme.",
    liveSchedule: (e) => `Voir la grille tarifaire actuelle ${de(e.name)}`,
    feesCompare: (e, others, links) => (
      <>
        Comment ces taux se situent-ils ? Notre <Link href={`${links.alternatives}#fees`}>comparatif des alternatives à {e.name}</Link> met les frais{" "}
        {de(e.name)} en regard de ceux {de(list(others))}.
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `À propos ${de(e.name)}`,
    products: "Produits",
    prosConsTitle: (e) => `Avantages et inconvénients ${de(e.name)}`,
    pros: "Avantages",
    cons: "Inconvénients",
    bestForTitle: (e) => `À qui s'adresse ${e.name} ?`,
    openAccount: (e) => `Ouvrir un compte ${e.name}`,
    notAMatch: (e, count, links, pairs) => (
      <>
        Pas convaincu ? Découvrez <Link href={links.alternatives}>les {count} meilleures alternatives à {e.name}</Link> et le point fort de chacune, ou
        comparez {e.name} en face-à-face : <Link href={pairs[0].href}>{pairs[0].label}</Link> et <Link href={pairs[1].href}>{pairs[1].label}</Link>.
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `${e.name} est-elle fiable ?`,
    availability: "Disponibilité :",
    closedWhereYouLive: (e, links) => (
      <>
        {e.name} n'est pas disponible là où vous vivez ? Le{" "}
        <Link href={`${links.alternatives}#countries`}>tableau des pays de notre page Alternatives à {e.name}</Link> indique quelles autres plateformes
        acceptent votre pays.
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `Code de parrainage ${e.name} et inscription : FAQ`,
    faqIntro: (e, count) =>
      `${count} questions sur le code de parrainage ${e.name} ${e.referralCode}, la création et la vérification du compte, l'offre de bienvenue et les frais.`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "Sources : d'où viennent ces informations",
    sourcesIntro: (e, date) =>
      `Tout ce que cette page indique sur le code de parrainage, l'inscription, la vérification, l'offre de bienvenue et les frais a été relevé le ${date} sur le site officiel et dans le centre d'aide ${de(e.name)}. Les plateformes modifient leurs offres et leurs frais sans préavis et affichent des conditions différentes selon les pays : ce sont donc les pages ci-dessous qui font foi.`,

    /* Alternatives */
    alternativesTitle: (e) => `Alternatives à ${e.name}`,
    alternativesIntro: (e, count, links) => (
      <>
        Vous n'êtes pas sûr {que(e.name)} vous convienne ? Voici les alternatives les plus proches, chacune avec sa propre inscription par parrainage.
        Le <Link href={links.alternatives}>comparatif complet des alternatives à {e.name}</Link> confronte les {count} plateformes à {e.name} : frais,
        levier, produits, vérification et disponibilité par pays.
      </>
    ),
    headToHeadTitle: (e) => `${e.name} en face-à-face`,
    headToHeadIntro: (e) =>
      `Vous hésitez entre ${e.name} et une autre plateforme ? Chaque face-à-face compare les frais, le levier, les produits, les pays et les offres de parrainage :`,
    compareAll: (e, count) => `Comparer les ${count} alternatives à ${e.name}`,
    allComparisons: "Tous les comparatifs de plateformes →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>Avertissement sur les risques :</strong> les produits dérivés crypto sont des instruments complexes. L'effet de levier multiplie les
        gains comme les pertes, et vous pouvez perdre toute votre marge en quelques minutes. Cette page est fournie à titre informatif et ne constitue pas
        un conseil financier. Nous pouvons percevoir une commission si vous vous inscrivez via nos liens : consultez notre{" "}
        <Link href={disclosureHref}>divulgation d'affiliation</Link>.
      </>
    ),
    joinTitle: (e) => `Rejoignez ${e.name} en 3 minutes`,
    joinText: (e) => `${benefit(e)}. Un seul parrainage pour le spot et les futures.`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `Code de parrainage ${name}`,
      signup: (name) => `Inscription et vérification sur ${name}`,
      bonus: (name) => `Bonus de bienvenue et récompenses sur ${name}`,
      fees: (name) => `Frais et trading sur ${name}`,
      safety: () => "Sécurité et disponibilité",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `Quel est le code de parrainage ${e.name} ?`,
          a: `Le code de parrainage ${e.name} est ${e.referralCode}. ${r.apply} Sur son site, ${e.name} l'appelle ${r.codeName}.`,
        },
        { topic: "referral", q: `Où saisir le code de parrainage ${e.name} ?`, a: r.whereToEnter },
        { topic: "referral", q: `Peut-on ajouter le code de parrainage ${e.name} après l'inscription ?`, a: r.afterSignup },
        { topic: "referral", q: `Qu'obtient-on avec le code de parrainage ${e.name} ${e.referralCode} ?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `Le code de parrainage ${e.name} fonctionne-t-il pour le spot et les futures ?`,
          a: `Oui. Le parrainage est lié à votre compte ${e.name}, et non à un produit en particulier : une seule inscription avec ${e.referralCode} couvre ${list(e.referralCovers)}.`,
        },
        {
          topic: "referral",
          q: `Le code de parrainage ${e.name} est-il payant ?`,
          a: `Non. Saisir ${e.referralCode} est gratuit et n'augmente pas vos frais de trading. ${e.name} finance son programme de parrainage avec ses propres revenus issus des frais.`,
        },
        {
          topic: "signup",
          q: `Comment s'inscrire sur ${e.name} ?`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${asSentence(st.title)}`).join(" ")} Vous pouvez vous inscrire avec ${orList(s.methods)}.`,
        },
        { topic: "signup", q: `La vérification d'identité (KYC) est-elle obligatoire sur ${e.name} ?`, a: s.kyc },
        { topic: "signup", q: `Quels documents sont acceptés pour la vérification sur ${e.name} ?`, a: s.documents },
        { topic: "signup", q: `Quel âge faut-il avoir pour ouvrir un compte ${e.name} ?`, a: s.minAge },
        {
          topic: "fees",
          q: `Quels sont les frais de trading sur ${e.name} ?`,
          a: `Au niveau standard, ${e.name} facture ${e.spotFees.maker} maker / ${e.spotFees.taker} taker sur le spot et ${e.futuresFees.maker} maker / ${e.futuresFees.taker} taker sur les contrats perpétuels.${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `Dans quels pays ${e.name} n'est-elle pas disponible ?`, a: e.restricted },
      ];
    },
  },
};
