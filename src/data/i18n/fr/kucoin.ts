import type { ExchangeText } from "../../types";

export const kucoin: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Champ “Referral Code (Optional)” à la première étape de l'inscription",
    apply:
      "Saisissez-le dans le champ “Referral Code (Optional)” dès la première étape de l'inscription, ou ouvrez le lien d'inscription de cette page : il remplit le champ et le verrouille.",
    whereToEnter:
      "KuCoin demande le code de parrainage dès la toute première étape de l'inscription, en même temps que votre adresse e-mail ou votre numéro de téléphone, sur le site comme dans l'application. Le champ s'intitule “Referral Code (Optional)”. Le lien de cette page ouvre la page d'inscription de KuCoin avec QBSS4BT7 déjà saisi et le champ verrouillé, si bien qu'aucune erreur n'est possible. Le guide d'inscription de KuCoin précise que vous pouvez aussi taper le code à la main si un lien ne le remplit pas.",
    afterSignupShort: "Sur demande – “Link Referrer” dans le centre d'aide (conditions non publiées)",
    afterSignup:
      "C'est possible. Le centre d'aide de KuCoin propose une demande en libre-service appelée “Link Referrer” (“Submit a request to add a referrer manually”, c'est-à-dire une demande d'ajout manuel d'un parrain), ainsi qu'une demande symétrique pour retirer un parrain. Les deux exigent d'être connecté, et KuCoin ne publie ni les conditions ni de délai : l'acceptation n'est donc pas garantie. Saisir le code lors de l'inscription reste la méthode fiable.",
    inviteeReward:
      "Selon la page de parrainage de KuCoin, les amis invités peuvent recevoir du cashback et des récompenses exclusives réservées aux nouveaux venus (“stand to receive cashback and exclusive newcomer rewards”). Ce cashback est une part de vos propres frais de trading : le parrain peut fixer un taux de cashback exclusif pour ses filleuls, dans la limite de son taux de commission actuel. Il n'existe donc pas de pourcentage fixe. La relation de parrainage dure 365 jours à compter de votre inscription. KuCoin annonce en outre un bonus allant jusqu'à 10 650 USDT pour les nouveaux utilisateurs.",
    guide: [
      "Le programme de parrainage de KuCoin verse au parrain une commission sur les frais de trading de ses filleuls et lui permet d'en reverser une partie au filleul sous forme de cashback. KuCoin ne fixe aucun pourcentage de cashback : c'est le taux configuré par le parrain qui s'applique, plafonné à son propre taux de commission.",
      "Le parrainage couvre les trades spot (qui, sur KuCoin, regroupent le spot, la marge et les bots de trading), les ETF et les trades sur futures. Les trades passés via l'API n'y donnent pas droit. La relation dure 365 jours à compter de votre inscription et prend fin plus tôt si vous atteignez le niveau VIP 3. Les commissions sont réglées chaque jour, dans la devise utilisée pour payer les frais.",
      "KuCoin précise que le programme de parrainage n'est pas ouvert aux résidents de Belgique, de France, des Pays-Bas et d'autres pays ou régions où ses services sont restreints.",
    ],
  },
  signup: {
    methods: ["une adresse e-mail", "un numéro de téléphone", "Telegram", "Google", "Apple"],
    steps: [
      {
        title: "Ouvrez la page d'inscription de KuCoin",
        text: "Utilisez le bouton d'inscription de cette page. KuCoin ouvre la page “Welcome to KuCoin”, avec le code de parrainage QBSS4BT7 déjà inscrit dans le champ “Referral Code (Optional)”.",
      },
      {
        title: "Saisissez votre adresse e-mail ou votre numéro de téléphone",
        text: "Vous pouvez aussi continuer avec Telegram, Google ou Apple. Le code de parrainage se trouve sur cette même première étape.",
      },
      {
        title: "Acceptez les conditions d'utilisation",
        text: "Cochez la case des conditions d'utilisation et de la politique de confidentialité, puis sélectionnez “Create Account and Claim Reward”.",
      },
      {
        title: "Saisissez le code de vérification",
        text: "KuCoin envoie un code à votre adresse e-mail ou à votre numéro de téléphone pour vérifier que vous en êtes bien le titulaire.",
      },
      {
        title: "Définissez un mot de passe de connexion",
        text: "Choisissez votre mot de passe et sélectionnez “Confirm” : le compte est créé.",
      },
      {
        title: "Vérifiez votre identité",
        text: "Choisissez votre pays et le type de pièce d'identité, importez des photos du document et terminez la vérification faciale. Les nouveaux utilisateurs en ont besoin pour accéder aux produits de KuCoin.",
      },
    ],
    kycShort: "Obligatoire pour les nouveaux utilisateurs",
    kyc: "Oui. Depuis le 31 août 2023, les nouveaux utilisateurs doivent terminer la vérification d'identité pour utiliser les produits et services de KuCoin. La vérification consiste à choisir votre pays et le type de pièce d'identité, à importer des photos du document et à passer une reconnaissance faciale ; une même personne ne peut vérifier qu'un seul compte KuCoin. Les anciens comptes jamais vérifiés peuvent encore vendre des cryptos, clôturer des positions sur futures et sur marge, racheter des produits Earn et effectuer des retraits, mais pas de dépôts.",
    documents:
      "KuCoin accepte la carte d'identité, le permis de conduire, le passeport ou le titre de séjour ; une vérification faciale suit.",
    minAge: "18 ans (conditions d'utilisation de KuCoin)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Payer les frais en KCS donne droit à une réduction de 20 %, que KuCoin applique au trading spot et sur marge et crédite sous forme de remise ; KuCoin précise que la réduction réelle peut être légèrement inférieure. Les niveaux VIP supérieurs réduisent les frais jusqu'à 75 %.",
  extraFeeMarkets: ["Spot – tokens de classe B", "Spot – tokens de classe C"],
  sourceLabels: [
    "KuCoin : comment s'inscrire (site et application)",
    "KuCoin : programme de parrainage et règles",
    "KuCoin : libre-service du centre d'aide (Link Referrer)",
    "KuCoin : Rewards Hub (tâches pour nouveaux utilisateurs)",
    "KuCoin : FAQ du Rewards Hub",
    "KuCoin : grille des frais par niveau VIP",
    "KuCoin : payer les frais en KCS",
    "KuCoin : vérification d'identité et limites du compte",
    "KuCoin : levier des futures selon la taille de position",
    "KuCoin : frais des bots de trading",
    "KuCoin : conditions d'utilisation (zones restreintes, âge minimum)",
    "KuCoin : à propos",
    "KuCoin : preuve de réserves",
    "KuCoin EU : licence MiCAR de KuCoin EU Exchange GmbH",
    "KuCoin : déclaration sur l'accord avec le ministère américain de la Justice",
    "KuCoin : lettre du PDG sur l'incident de sécurité de 2020",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Marge", "Futures", "Bots de trading", "ETF"],
  bonusHeadline: "Jusqu'à 10 650 USDT de bonus pour les nouveaux utilisateurs",
  benefits: [
    "La page d'inscription de KuCoin annonce un bonus allant jusqu'à 10 650 USDT pour les nouveaux utilisateurs, débloqué via des tâches dans le Rewards Hub",
    "Du cashback sur vos frais de trading si le parrain a fixé un taux : le programme de KuCoin le prévoit pendant 365 jours",
    "Un seul parrainage couvre le spot, la marge, les futures, les bots de trading et les ETF",
    "Les bots de trading sont gratuits ; vous ne payez que les frais de trading des bots",
  ],
  benefitNote:
    "Les 10 650 USDT sont le chiffre d'appel de KuCoin et un montant maximal : le Rewards Hub les verse sous forme de packs de coupons, de fonds d'essai, de bons de frais et de petites récompenses en cash, pour l'inscription, la vérification d'identité, un premier dépôt, un premier trade et des tâches à durée limitée. Les tâches à durée limitée doivent être accomplies dans les 7 jours suivant l'inscription, et les récompenses sont valables 30 jours. Les paires de stablecoins et les trades sans frais ne comptent pas, et les market makers comme les utilisateurs institutionnels sont exclus. La FAQ du Rewards Hub de KuCoin mentionne encore un ancien plafond de 3 200 USDT.",
  headquarters: "Non communiqué par KuCoin (conditions d'utilisation régies par le droit des îles Turques-et-Caïques)",
  regulation: "Licence MiCAR via KuCoin EU Exchange GmbH, Vienne (EEE sauf Malte) ; enregistrement auprès de l'AUSTRAC en Australie",
  users: "Plus de 45 millions d'utilisateurs (selon KuCoin)",
  assets: "1 000+ tokens listés, 1 300+ paires de trading",
  maxLeverage: "Jusqu'à 125x (palier des plus petites positions)",
  feeNote:
    "KuCoin répartit les tokens en classes : le taux spot ci-dessus vaut pour les tokens de classe A, tandis que les tokens de classe B et de classe C coûtent plus cher. La classe dépend de la devise de base de la paire.",
  products: ["Futures à marge USDT et à marge en crypto", "Spot", "Marge", "Bots de trading", "Copy trading", "Earn", "KuCoin Web3 Wallet"],
  tagline: "Altcoins et bots de trading pour tous",
  quickAnswer:
    "Le code de parrainage KuCoin est QBSS4BT7. Il se saisit dans le champ “Referral Code (Optional)”, dès la première étape de l'inscription ; le bouton de cette page ouvre KuCoin avec le code déjà renseigné et verrouillé. Le parrainage couvre le spot, la marge, les futures et les bots de trading pendant 365 jours, et KuCoin annonce un bonus allant jusqu'à 10 650 USDT pour les nouveaux utilisateurs. Si vous oubliez le code, le centre d'aide de KuCoin propose une demande “Link Referrer”, mais ses conditions ne sont pas publiques.",
  about: [
    "KuCoin a vu le jour au troisième trimestre 2017 et affirme servir aujourd'hui plus de 45 millions d'utilisateurs dans plus de 200 pays et régions, avec plus de 1 000 tokens listés. Elle a bâti sa communauté en listant tôt des altcoins et en rendant le trading automatisé accessible : ses bots de trading ne coûtent rien au-delà des frais de trading.",
    "Côté produits dérivés, KuCoin propose des futures (contrats à terme) à marge USDT et à marge en crypto, avec un effet de levier maximal de 125x dans le plus petit palier de position ; la limite descend à 100x au palier suivant, puis continue de baisser à mesure que la position grandit. La plateforme propose aussi le trading sur marge, le copy trading, des produits Earn et un portefeuille Web3, et le token KCS donne droit à 20 % de réduction sur les frais spot et sur marge.",
    "Le 27 janvier 2025, KuCoin a annoncé avoir conclu un accord avec le ministère américain de la Justice ; elle avait déjà fermé les comptes des utilisateurs américains avec effet au 23 janvier 2025. Dans l'Espace économique européen (EEE), le groupe opère via KuCoin EU Exchange GmbH, à Vienne, un prestataire de services sur crypto-actifs agréé au titre de MiCAR et supervisé par la FMA autrichienne. Après un piratage survenu en 2020 qui a touché environ 285 millions de dollars, KuCoin affirme qu'avec son fonds d'assurance, elle a couvert les quelque 45,55 millions de dollars qui n'ont pas pu être récupérés, et qu'aucun utilisateur n'a subi de perte.",
  ],
  highlights: [
    { title: "Bots de trading gratuits", text: "Les bots eux-mêmes sont gratuits : seuls les frais de trading des bots s'appliquent." },
    { title: "Code verrouillé", text: "Le lien d'inscription saisit QBSS4BT7 et verrouille le champ." },
    { title: "Réserves supérieures à 100 %", text: "BTC 112 %, ETH 115 %, USDT 110 % au 31 octobre 2026." },
  ],
  pros: [
    "Trading automatisé accessible aux débutants, avec des bots gratuits",
    "Large choix d'altcoins, avec plus de 1 000 tokens listés",
    "Frais standard bas sur les futures : 0,02 % maker / 0,06 % taker",
    "Preuve de réserves supérieure à 100 % pour BTC, ETH, USDT et USDC",
  ],
  cons: [
    "Indisponible aux États-Unis, en France, aux Pays-Bas, à Singapour et dans une partie du Canada",
    "Les frais spot montent à 0,2 % et 0,3 % pour les tokens de classe B et de classe C",
    "Les conditions pour ajouter un parrain après l'inscription ne sont pas publiées",
    "Volume sur les futures inférieur à celui des cinq premières plateformes",
  ],
  bestFor: ["Traders qui veulent automatiser leur trading avec des bots", "Amateurs d'altcoins", "Traders de futures de niveau intermédiaire"],
  signupTip:
    "Terminez la vérification d'identité dès l'inscription : sans elle, un nouvel utilisateur ne peut pas utiliser KuCoin du tout. Lancez ensuite les tâches à durée limitée du Rewards Hub dans les 7 jours qui suivent votre inscription.",
  safety:
    "KuCoin publie régulièrement des rapports de preuve de réserves. Les données du 31 octobre 2026 affichaient des taux de réserve de 112 % pour BTC, 115 % pour ETH, 110 % pour USDT et 127 % pour USDC, avec un rapport d'audit daté du 9 novembre 2026. Après le piratage de 2020, KuCoin affirme qu'aucun utilisateur n'a subi de perte. Les bots automatisent l'exécution, pas la gestion du risque : fixez toujours une condition d'arrêt et ne laissez sur la plateforme que votre capital de trading.",
  restricted:
    "Les conditions d'utilisation de KuCoin (mises à jour le 29 octobre 2026) classent comme zones restreintes : les États-Unis (territoires compris), Singapour, la Chine continentale et Hong Kong, la Malaisie, le Kazakhstan, l'Ouzbékistan, la Russie, la Biélorussie, les provinces canadiennes de l'Ontario et de la Colombie-Britannique, la France, les Pays-Bas, ainsi que les régions de Crimée, de Donetsk, de Louhansk, de Zaporijjia et de Kherson. Il est interdit d'utiliser un VPN pour contourner cette restriction.",
  faqs: [
    {
      topic: "referral",
      q: "Le code parrain KuCoin QBSS4BT7 fonctionne-t-il ?",
      a: "Oui. Le 16 novembre 2026, le lien de cette page a ouvert la page d'inscription de KuCoin avec QBSS4BT7 prérempli et verrouillé dans le champ “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Combien de temps dure un parrainage sur KuCoin ?",
      a: "365 jours à compter de votre inscription. Selon les règles de KuCoin, les commissions, et donc l'éventuel cashback, s'arrêtent aussi si vous atteignez le niveau VIP 3.",
    },
    {
      topic: "referral",
      q: "Combien de cashback reçoit-on avec un code de parrainage KuCoin ?",
      a: "KuCoin ne fixe aucun taux. Le parrain peut définir un taux de cashback exclusif pour ses filleuls, dans la limite de son propre taux de commission ; ce cashback est versé sur les trades spot, sur marge, via les bots de trading, sur les ETF et sur les futures. Les trades passés via l'API n'y donnent pas droit.",
    },
    {
      topic: "referral",
      q: "Que signifie “Link Referrer” sur KuCoin ?",
      a: "C'est une demande en libre-service du centre d'aide de KuCoin, décrite comme “Submit a request to add a referrer manually” (une demande d'ajout manuel d'un parrain). Elle s'adresse aux comptes créés sans code. Il faut être connecté pour l'utiliser, et KuCoin n'en publie pas les conditions.",
    },
    {
      topic: "referral",
      q: "Dans quels pays le programme de parrainage KuCoin ne s'applique-t-il pas ?",
      a: "Selon KuCoin, le programme n'est pas ouvert aux résidents de Belgique, de France, des Pays-Bas et d'autres pays ou régions où ses services sont restreints.",
    },
    {
      topic: "signup",
      q: "Peut-on s'inscrire sur KuCoin avec Google, Apple ou Telegram ?",
      a: "Oui. Sous le champ e-mail et téléphone, la page d'inscription de KuCoin affiche “Or continue with”, suivi de Telegram, Google et Apple.",
    },
    {
      topic: "signup",
      q: "Peut-on utiliser KuCoin sans KYC ?",
      a: "Pas en tant que nouvel utilisateur. Depuis le 31 août 2023, les nouveaux utilisateurs doivent terminer la vérification d'identité pour utiliser les produits et services de KuCoin.",
    },
    {
      topic: "signup",
      q: "Peut-on avoir deux comptes KuCoin ?",
      a: "Pas deux comptes vérifiés. KuCoin précise qu'une personne ne peut vérifier qu'un seul compte KuCoin.",
    },
    {
      topic: "bonus",
      q: "Quel est le bonus de bienvenue KuCoin ?",
      a: "La page d'accueil et la page d'inscription de KuCoin annoncent jusqu'à 10 650 USDT pour les nouveaux utilisateurs. Ce montant est versé via les tâches pour nouveaux utilisateurs du Rewards Hub (inscription, vérification d'identité, premier dépôt, premier trade et tâches à durée limitée), sous forme de packs de coupons, de fonds d'essai, de bons de frais et de petites récompenses en cash. La tâche d'inscription figure comme un pack bonus et une récompense en cash de 400 USDT (Bonus Pack and Cash Reward).",
    },
    {
      topic: "bonus",
      q: "De combien de temps dispose-t-on pour obtenir les récompenses nouveaux utilisateurs de KuCoin ?",
      a: "Les tâches de défi à durée limitée doivent être accomplies dans les 7 jours suivant l'inscription, et KuCoin précise que les récompenses restent valables 30 jours avant d'expirer.",
    },
    {
      topic: "bonus",
      q: "Quels trades ne comptent pas pour les tâches nouveaux utilisateurs de KuCoin ?",
      a: "Les trades sur des paires de stablecoins et les trades sans frais ne comptent pas. Les market makers et les utilisateurs institutionnels en sont totalement exclus.",
    },
    {
      topic: "fees",
      q: "Quels sont les frais futures de KuCoin ?",
      a: "Au niveau VIP 0, les utilisateurs paient 0,02 % en maker et 0,06 % en taker sur les futures. Le bot Futures Grid applique des frais de trading fixes de 0,06 %.",
    },
    {
      topic: "fees",
      q: "Quelle est la réduction KCS sur KuCoin ?",
      a: "20 %. KuCoin l'applique au trading spot et sur marge lorsque vous payez les frais en KCS, et la crédite sous forme de remise ; la réduction réelle peut être légèrement inférieure.",
    },
    {
      topic: "fees",
      q: "Les bots de trading KuCoin sont-ils gratuits ?",
      a: "Oui, KuCoin indique que les bots eux-mêmes sont gratuits. Leurs trades suivent une règle de frais propre aux bots : les bots spot bénéficient de 20 % de réduction sur les taux maker et taker du niveau VIP 0, le bot Futures Grid paie un taux fixe de 0,06 %, et ni la déduction en KCS ni les niveaux VIP ne s'appliquent.",
    },
    {
      topic: "fees",
      q: "Quel est le levier maximal sur KuCoin ?",
      a: "125x pour les comptes vérifiés, dans le plus petit palier de position. Sur KuCoin, le levier des futures dépend de la taille de la position, par paliers : le palier suivant est limité à 100x.",
    },
    {
      topic: "safety",
      q: "KuCoin est-elle disponible aux États-Unis ?",
      a: "Non. Les conditions d'utilisation de KuCoin classent les États-Unis parmi les zones restreintes, et KuCoin a fermé les comptes des utilisateurs américains avec effet au 23 janvier 2025.",
    },
    {
      topic: "safety",
      q: "KuCoin est-elle régulée en Europe ?",
      a: "KuCoin EU Exchange GmbH, à Vienne, est un prestataire de services sur crypto-actifs agréé au titre de MiCAR et supervisé par l'autorité autrichienne des marchés financiers. Ce prestataire couvre l'EEE, Malte exceptée.",
    },
    {
      topic: "safety",
      q: "KuCoin a-t-elle subi un piratage ?",
      a: "Oui, en 2020. Environ 285 millions de dollars ont été touchés. KuCoin affirme qu'avec son fonds d'assurance, elle a couvert les quelque 45,55 millions de dollars (16 %) qui n'ont pas pu être récupérés, et qu'aucun utilisateur n'a subi de perte.",
    },
  ],
};
