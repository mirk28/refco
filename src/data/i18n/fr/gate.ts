import type { ExchangeText } from "../../types";

export const gate: ExchangeText = {
  referral: {
    codeName: "code de parrainage",
    whereShort: "Rattaché via le lien d'inscription (Gate affiche le parrain sur le formulaire de création de compte)",
    apply:
      "Ouvrez le lien d'inscription de cette page : Gate rattache le code à votre inscription et affiche sur le formulaire une bannière du parrain qui indique la récompense.",
    whereToEnter:
      "Sur Gate, le plus sûr est de passer par le lien de parrainage. Le lien de cette page ouvre gate.com/signup avec le code VAAXAW9YVA déjà rattaché, et Gate le confirme par une bannière au-dessus du formulaire (“Register now to receive a gift from your friend”, soit « inscrivez-vous maintenant pour recevoir un cadeau de votre ami »). La première étape du formulaire web ne demande que votre pays de résidence : il n'y a donc pas de champ séparé à remplir pour le code à ce stade. Si la bannière du parrain n'apparaît pas, rouvrez le lien avant de créer le compte.",
    afterSignupShort: "Non documenté par Gate – passez par le lien lors de l'inscription",
    afterSignup:
      "Gate ne publie aucune méthode pour ajouter un code de parrainage à un compte déjà ouvert. Ses règles de parrainage précisent que chaque utilisateur ne peut s'inscrire que par une seule méthode de parrainage, et le guide de Gate avertit que la relation de parrainage risque de ne pas être enregistrée si un nouvel utilisateur s'inscrit sans le lien ou le code d'invitation. Passez par le lien avant de créer le compte.",
    inviteeReward:
      "En vous inscrivant via ce lien, vous rejoignez le programme Super Commission de Gate : la page d'inscription de Gate indique que vous recevez une commission équivalant à 10 % de vos frais de trading. Selon le règlement du programme, la remise est calculée sur vos frais de trading pendant 1 an et exclut les transactions en monnaie fiat.",
    guide: [
      "Gate fait tourner plusieurs programmes de parrainage en parallèle. Le code VAAXAW9YVA relève de Super Commission, où le parrain reverse une partie de sa commission aux personnes qu'il invite : Gate affiche une répartition de 30 % pour le parrain et de 10 % pour le filleul, calculée sur les frais de trading du filleul pendant un an. Les transactions en monnaie fiat n'entrent pas dans le calcul.",
      "Une seule inscription couvre le spot, la marge, les futures et Trenches (la section que Gate appelle aussi Gate Alpha). Les autres campagnes de parrainage de Gate reposent plutôt sur des bons, “Earn Voucher” et “Token Crew”, mais le règlement de Super Commission précise que les comptes invités de cette façon n'ont pas droit aux récompenses d'autres événements : ne comptez donc pas les cumuler.",
      "Gate ne prend pas en charge les invitations d'un site à l'autre. Si vous résidez dans l'Espace économique européen (EEE), vous dépendez d'une entité distincte de Gate établie à Malte (gate.com/en-eu) : la commission n'y est versée que sur le trading spot, et un parrainage effectué sur le site mondial n'y est pas repris. Super Commission n'est pas non plus accessible aux utilisateurs de Belgique, du Royaume-Uni, de France, d'Allemagne, des Pays-Bas, de Turquie, d'Autriche et de Corée du Sud.",
    ],
  },
  signup: {
    methods: ["une adresse e-mail", "un numéro de téléphone", "Google", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Ouvrez la page d'inscription de Gate",
        text: "Utilisez le bouton d'inscription de cette page. Au-dessus du formulaire, Gate affiche une bannière avec le parrain et la récompense de 10 % sur les frais : c'est la confirmation que le parrainage est bien rattaché.",
      },
      {
        title: "Choisissez votre pays ou région de résidence",
        text: "Indiquez où vous résidez, acceptez les conditions d'utilisation, puis cliquez sur “Create Account” (créer un compte).",
      },
      {
        title: "Saisissez votre adresse e-mail ou votre numéro de téléphone",
        text: "Choisissez l'un des deux : Gate s'en sert pour la connexion et pour vous envoyer les codes de sécurité.",
      },
      {
        title: "Saisissez le code de vérification",
        text: "Gate envoie un code par e-mail ou sur votre téléphone. D'après le guide de l'application Gate, il reste valable 15 minutes.",
      },
      {
        title: "Définissez votre mot de passe",
        text: "Choisissez un mot de passe robuste et unique pour terminer la création du compte.",
      },
      {
        title: "Vérifiez votre identité",
        text: "Effectuez la vérification d'identité (KYC) avec un passeport, une carte d'identité ou un permis de conduire. Gate l'exige avant tout dépôt ou retrait de cryptos.",
      },
    ],
    kycShort: "Obligatoire pour déposer et retirer",
    kyc: "Oui. Gate indique que la vérification d'identité (KYC) est obligatoire pour tous les utilisateurs qui veulent déposer et retirer des cryptomonnaies, effectuer des opérations en monnaie fiat et participer aux souscriptions Startup. La vérification d'adresse est facultative et relève vos limites de retrait. La tâche de vérification d'identité fait aussi partie des récompenses pour débutants de Gate.",
    documents:
      "Pour la vérification d'identité, Gate accepte un passeport, une carte d'identité ou un permis de conduire. Vous pouvez, si vous le souhaitez, ajouter un justificatif de domicile pour obtenir des limites plus élevées.",
    minAge: "18 ans (conditions d'utilisation de Gate)",
  },
  welcomeTasks: [
    { task: "S'inscrire", reward: "Bon d'une valeur de 50 USDT" },
    { task: "Terminer la vérification d'identité", reward: "Bon d'une valeur de 50 USDT" },
    { task: "Premier dépôt d'au moins 10 USDT", reward: "Bon d'une valeur de 10 USDT" },
    { task: "Premier trade d'au moins 10 USDT", reward: "Bon d'une valeur de 5 USDT" },
    { task: "Premier téléchargement de l'application", reward: "Bon d'une valeur de 10 USDT" },
    {
      task: "Tâche avancée, première étape : dépôt net d'au moins 50 USDT et 500 USDT de volume de trading",
      reward: "100 USDT (les tâches avancées vont jusqu'à 10 000 USDT)",
    },
  ],
  tokenDiscount: "Payer les frais spot en GT fait passer le taux standard de 0,1 % à 0,09 %, pour les makers comme pour les takers.",
  extraFeeMarkets: ["Futures à livraison USDT"],
  sourceLabels: [
    "Gate : programme de parrainage Super Commission et règlement",
    "Gate : campagne de parrainage Earn Voucher",
    "Gate : campagne de parrainage Token Crew",
    "Gate Learn : guide du programme de parrainage de Gate",
    "Gate : Rewards Hub (tâches pour débutants)",
    "Gate : règles des tâches pour débutants",
    "Gate : grille tarifaire",
    "Gate : paliers de marge et de levier du contrat perpétuel BTCUSDT",
    "Gate : limite de levier des nouveaux comptes futures",
    "Gate : comment s'inscrire sur le site web",
    "Gate : comment s'inscrire dans l'application",
    "Gate : obligation de KYC",
    "Gate : comment effectuer la vérification d'identité",
    "Gate : conditions d'utilisation (pays restreints, âge minimum)",
    "Gate : qui sommes-nous",
    "Gate : licences",
    "Gate : preuve de réserves",
    "Gate : passage au domaine gate.com (annonce)",
  ],
  feeDiscount: "10 % de remise sur vos frais de trading pendant 1 an",
  referralCovers: ["Spot", "Marge", "Futures", "Trenches (Gate Alpha)"],
  bonusHeadline: "10 % de remise sur les frais et des tâches pour débutants d'une valeur de 125 USDT",
  benefits: [
    "Le Rewards Hub de Gate affiche des tâches pour débutants d'une valeur de 125 USDT en bons (inscription, vérification, premier dépôt, premier trade, téléchargement de l'application)",
    "Un seul parrainage couvre le spot, la marge, les futures et Trenches pendant un an",
    "Frais spot de 0,1 %, ou 0,09 % si vous les payez en GT",
    "Plus de 5 400 actifs numériques à trader avec un seul compte",
  ],
  benefitNote:
    "La remise de 10 % est la récompense que Gate affiche sur la page d'inscription ouverte via ce lien ; elle exclut les transactions en monnaie fiat et n'est pas accessible aux utilisateurs de Belgique, du Royaume-Uni, de France, d'Allemagne, des Pays-Bas, de Turquie, d'Autriche et de Corée du Sud. Les tâches pour débutants doivent être accomplies dans les 15 jours suivant l'inscription, peuvent varier selon la région et excluent les comptes institutionnels, API et d'affiliés. Selon les règles de Gate, les comptes invités via le partage de commission n'ont pas droit aux récompenses d'autres événements : le Rewards Hub de votre compte indique ce que vous pouvez réellement obtenir.",
  headquarters: "Gate Group, avec des entités agréées dans plusieurs régions",
  regulation:
    "Licences ou enregistrements à Malte (MFSA, MiCA), à Gibraltar, aux Bahamas, à Hong Kong, à Dubaï (VARA, DMCC), en Australie (AUSTRAC), au Japon et à Chypre",
  users: "Plus de 63 millions d'utilisateurs (selon Gate)",
  assets: "5 400+ actifs numériques",
  maxLeverage: "Jusqu'à 200x (contrat perpétuel BTCUSDT)",
  feeNote:
    "Plus le niveau VIP est élevé, plus les frais baissent. Si vous activez Points Deduction à la place de GT, Gate applique des taux fixes : 0,2 % sur le spot et 0,075 % de frais taker sur les futures.",
  products: ["Contrats perpétuels", "Futures à livraison", "Options", "Spot", "Marge", "Copy trading", "Launchpad", "Earn"],
  tagline: "Le plus large choix d'altcoins, depuis 2013",
  quickAnswer:
    "Le code de parrainage Gate est VAAXAW9YVA. Ouvrez le lien d'inscription de cette page et Gate le rattache automatiquement : le formulaire d'inscription affiche alors une bannière qui promet une commission de 10 % sur vos frais de trading. La remise court pendant un an et couvre le spot, la marge, les futures et Trenches. Gate ne documente aucun moyen d'ajouter un code plus tard : passez donc par le lien avant de créer le compte.",
  about: [
    "Gate a été fondée en 2013 : elle a débuté sous le nom de Bter.com, est devenue Gate.io, puis a adopté le domaine international gate.com en mai 2025. Sa marque de fabrique, c'est l'étendue du catalogue : Gate affirme lister plus de 5 400 actifs numériques et servir plus de 63 millions d'utilisateurs, et les nouveaux tokens y apparaissent souvent bien avant d'arriver sur les autres grandes plateformes.",
    "Côté produits dérivés, Gate affichait le deuxième plus gros open interest (intérêt ouvert) du classement CoinMarketCap à la date de nos données de marché, avec des contrats perpétuels marginés en USDT sur des centaines d'altcoins, des futures à livraison et des options. Sur le contrat perpétuel BTCUSDT, l'effet de levier monte jusqu'à 200x dans le palier de risque le plus bas, tandis que les nouveaux comptes futures démarrent avec une limite de 20x pendant leurs trois premiers jours. Le copy trading, un launchpad pour les nouveaux tokens et les produits Earn côtoient les écrans de trading.",
    "Gate publie une preuve de réserves depuis mai 2020. Le relevé du 18 octobre 2026 faisait état de 8,68 milliards de dollars de réserves totales sur 496 actifs, pour un ratio de réserves de 118 %. Le groupe indique des licences et enregistrements à Malte (MFSA, dans le cadre de MiCA), à Gibraltar, aux Bahamas, à Hong Kong, à Dubaï, en Australie, au Japon et à Chypre. Le site mondial gate.com est fermé aux résidents des États-Unis et d'une longue liste d'autres pays ; les résidents de l'EEE dépendent de l'entité maltaise de Gate.",
  ],
  highlights: [
    { title: "5 400+ actifs", text: "L'un des plus grands catalogues d'altcoins, toutes plateformes confondues." },
    { title: "10 % de vos frais remboursés", text: "Gate l'affiche sur la page d'inscription ouverte via ce lien." },
    { title: "Réserves à 118 %", text: "Preuve de réserves depuis 2020, dernier relevé le 18 octobre 2026." },
  ],
  pros: [
    "Des futures sur de nombreux altcoins introuvables ailleurs",
    "Frais spot standard de 0,1 %, 0,09 % avec GT, et 0,02 % / 0,05 % sur les perpétuels USDT",
    "Preuve de réserves depuis 2020, avec un ratio de réserves de 118 %",
    "Un long historique depuis 2013 et de plus en plus de licences régionales",
  ],
  cons: [
    "Le site mondial est fermé à de nombreux pays, dont les États-Unis, le Royaume-Uni, le Canada, l'Allemagne, la France, l'Espagne et les Pays-Bas",
    "Aucun moyen documenté d'ajouter un code de parrainage après l'inscription",
    "Les parrainages ne passent pas d'un site régional de Gate à l'autre",
    "Les petits tokens présentent un fort risque de volatilité et de liquidité",
  ],
  bestFor: ["Traders de futures sur altcoins", "Chasseurs de nouveaux listings", "Traders qui privilégient l'étendue du choix plutôt que la simplicité"],
  signupTip:
    "Accomplissez les tâches pour débutants dans les 15 jours qui suivent l'inscription, car les bons pour débutants expirent ensuite, et pensez à payer vos frais spot en GT pour les ramener à 0,09 %.",
  safety:
    "Gate publie une preuve de réserves avec un ratio supérieur à 100 % (118 % au relevé du 18 octobre 2026), et son centre d'aide décrit la double authentification, un code anti-phishing, une liste blanche de retrait et un mot de passe des fonds. Activez-les avant de déposer des fonds. Sur les altcoins à faible capitalisation, vérifiez toujours la liquidité avant d'ouvrir des positions à effet de levier.",
  restricted:
    "Les conditions d'utilisation de Gate (dernière mise à jour le 22 juillet 2026) dressent la liste des pays et territoires restreints pour le site mondial, parmi lesquels les États-Unis, la Chine continentale, Singapour, le Canada, la France, l'Allemagne, Hong Kong, la Malaisie, Malte, l'Espagne, les Pays-Bas, le Royaume-Uni, l'Autriche, l'Inde, l'Indonésie, le Japon, l'Argentine, les Émirats arabes unis, la Thaïlande, la Corée du Sud, les Philippines, le Pakistan, le Vietnam, la Russie et la Biélorussie, ainsi que les régions sous sanctions. Gate dessert certains de ces pays via des entités distinctes, avec leurs propres sites et règles.",
  faqs: [
    {
      topic: "referral",
      q: "Le code de parrainage Gate VAAXAW9YVA fonctionne-t-il ?",
      a: "Oui. Le 16 novembre 2026, le lien gate.com/signup/VAAXAW9YVA ouvrait la page d'inscription officielle de Gate avec le code rattaché et une bannière du parrain affichant “Sign up and trade to receive 10% commission reward on trading fees!”.",
    },
    {
      topic: "referral",
      q: "Combien de temps dure la remise de parrainage sur Gate ?",
      a: "Un an. Selon les règles Super Commission de Gate, la remise est calculée sur vos frais de trading pendant 1 an et exclut les transactions en monnaie fiat.",
    },
    {
      topic: "referral",
      q: "Gate.io est-elle la même plateforme que Gate, et le code fonctionne-t-il encore ?",
      a: "Oui. Gate.io a adopté le domaine international gate.com en mai 2025 ; il s'agit de la même plateforme, fondée en 2013. Le code VAAXAW9YVA s'utilise sur gate.com.",
    },
    {
      topic: "referral",
      q: "Le code de parrainage Gate fonctionne-t-il dans l'UE ?",
      a: "Pas de la même manière. Les résidents de l'Espace économique européen (EEE) dépendent d'un site Gate distinct (gate.com/en-eu, exploité depuis Malte) où la commission ne porte que sur le trading spot, et Gate précise que les invitations d'un site à l'autre ne sont pas prises en charge. Super Commission n'est pas non plus accessible aux utilisateurs de Belgique, de France, d'Allemagne, des Pays-Bas et d'Autriche.",
    },
    {
      topic: "referral",
      q: "Peut-on cumuler la remise de parrainage Gate avec les bons de parrainage de Gate ?",
      a: "Mieux vaut ne pas y compter. Les règles Super Commission de Gate précisent que les comptes invités de cette façon n'ont pas droit aux récompenses d'autres événements, ce qui inclut les campagnes de bons “Earn Voucher” et “Token Crew”.",
    },
    {
      topic: "signup",
      q: "Pourquoi le formulaire d'inscription Gate demande-t-il d'abord le pays ?",
      a: "L'inscription sur Gate commence par votre pays ou région de résidence, car les produits, les récompenses et même l'entité Gate qui vous sert en dépendent. Ce n'est qu'ensuite que vous saisissez votre adresse e-mail ou votre numéro de téléphone.",
    },
    {
      topic: "signup",
      q: "Combien de temps le code de vérification Gate est-il valable ?",
      a: "D'après le guide d'inscription de l'application Gate, le code de vérification envoyé par e-mail ou sur votre téléphone reste valable 15 minutes.",
    },
    {
      topic: "signup",
      q: "Peut-on utiliser Gate sans KYC ?",
      a: "Seulement de façon limitée. Gate indique que le KYC est obligatoire pour tous les utilisateurs afin de déposer et retirer des cryptomonnaies, d'effectuer des opérations en monnaie fiat et de participer aux souscriptions Startup.",
    },
    {
      topic: "bonus",
      q: "Quel est le bonus de bienvenue Gate pour les nouveaux utilisateurs ?",
      a: "Le Rewards Hub de Gate affiche des tâches pour débutants d'une valeur de 125 USDT en bons : 50 pour l'inscription, 50 pour la vérification d'identité, 10 pour un premier dépôt d'au moins 10 USDT, 5 pour un premier trade d'au moins 10 USDT et 10 pour le premier téléchargement de l'application. Les tâches avancées vont jusqu'à 10 000 USDT. La page d'inscription annonce elle-même jusqu'à 135 USDT : ce sont donc les montants affichés dans votre compte qui font foi.",
    },
    {
      topic: "bonus",
      q: "Combien de temps a-t-on pour terminer les tâches pour débutants sur Gate ?",
      a: "Les tâches pour débutants doivent être terminées dans les 15 jours suivant l'inscription. Les trades de stablecoins ne comptent pas pour les tâches de trading, et les comptes institutionnels, API et d'affiliés en sont exclus.",
    },
    {
      topic: "fees",
      q: "Quels sont les frais spot sur Gate ?",
      a: "Les frais spot standard (VIP 0) sont de 0,1 % pour les makers comme pour les takers, ou de 0,09 % si vous payez les frais en GT. Si vous activez plutôt Points Deduction, Gate applique un taux fixe de 0,2 %.",
    },
    {
      topic: "fees",
      q: "Quels sont les frais futures sur Gate ?",
      a: "Les contrats perpétuels USDT coûtent 0,02 % maker et 0,05 % taker au niveau standard. Les futures à livraison USDT affichent -0,015 % maker (une remise) et 0,016 % taker.",
    },
    {
      topic: "fees",
      q: "Quel est le levier maximal sur Gate ?",
      a: "Jusqu'à 200x sur le contrat perpétuel BTCUSDT, dans le palier de risque le plus bas (marge croisée, positions jusqu'à la première limite de risque). Les nouveaux comptes futures sont limités à 20x pendant leurs trois premiers jours. Un effet de levier aussi élevé peut entraîner la liquidation d'une position sur un très faible mouvement de prix.",
    },
    {
      topic: "safety",
      q: "Gate est-elle disponible aux États-Unis ?",
      a: "Non. Les conditions d'utilisation de Gate placent les États-Unis sur la liste des pays et territoires restreints.",
    },
    {
      topic: "safety",
      q: "Gate publie-t-elle une preuve de réserves ?",
      a: "Oui, depuis mai 2020. Le relevé du 18 octobre 2026 faisait état de 8,68 milliards de dollars de réserves totales sur 496 actifs et d'un ratio de réserves de 118 %.",
    },
    {
      topic: "safety",
      q: "Où Gate détient-elle des licences ?",
      a: "Gate fait état de licences ou d'enregistrements à Hong Kong, à Gibraltar, à Malte (MFSA, dans le cadre de MiCA), en Australie (AUSTRAC), à Dubaï (VARA et DMCC), aux Bahamas, au Japon et à Chypre.",
    },
  ],
};
