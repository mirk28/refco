import type { ExchangeText } from "../../types";

export const bitget: ExchangeText = {
  referral: {
    codeName: "Referral code",
    whereShort: "Champ “Referral code” du formulaire d'inscription (facultatif)",
    apply:
      "Saisissez-le dans le champ “Referral code” du formulaire d'inscription, ou ouvrez le lien d'inscription de cette page : il remplit le champ à votre place et le verrouille.",
    whereToEnter:
      "Le formulaire d'inscription de Bitget comporte un champ facultatif intitulé “Referral code”. Sur le site web, il se trouve juste après votre adresse e-mail ou votre numéro de mobile, avant le choix du mot de passe ; dans l'application, il vient après le mot de passe, avant d'appuyer sur “Create account”. Le lien de cette page ouvre la page d'inscription parrainée de Bitget avec JZVEV1M3 déjà saisi et le champ verrouillé.",
    afterSignupShort: "Non – uniquement lors de l'inscription (exceptions seulement via le support)",
    afterSignup:
      "Pas par vous-même. Le centre d'aide de Bitget indique que les codes de parrainage doivent être saisis lors de l'inscription et ne peuvent être ni ajoutés ni modifiés une fois le compte créé. Selon cette même réponse du centre d'aide, la seule voie possible est un ticket au support avec votre UID, le code et la preuve que l'invitation a été envoyée avant votre inscription, sans aucune garantie de résultat. Bitget ne publie aucun délai pour cette démarche.",
    inviteeReward:
      "Le programme de parrainage public de Bitget récompense le filleul avec des airdrops de BTC et des Mystery Boxes : un airdrop de BTC d'une valeur de 9 $ et une Mystery Box pouvant atteindre 500 USDT pour un dépôt net d'au moins 200 USDT dans les 15 jours et un premier trade remplissant les conditions, puis 18 $ supplémentaires en BTC et une Mystery Box pouvant atteindre 1 000 USDT dès que votre volume de trading total dépasse 100 000 USDT. Ces récompenses supposent que le parrain participe à l'opération, et elles ne sont pas versées si l'une des deux parties détient un compte d'affilié, de teneur de marché ou de courtier : ce sont donc les montants affichés dans votre compte après l'inscription qui s'appliquent. Indépendamment du code, les nouveaux utilisateurs ont droit au pack de bienvenue de Bitget, qui peut atteindre 6 200 USDT.",
    guide: [
      "Un code de parrainage Bitget rattache votre nouveau compte à celui de votre parrain. Bitget prend en compte presque tout ce que vous tradez dans le cadre du programme : le trading spot, copy trading et marge compris, les futures, les contrats perpétuels sur actions, les contrats perpétuels sur matières premières, les actions en spot et les CFD.",
      "Le premier palier de récompense exige un dépôt net d'au moins 200 USDT dans les 15 jours suivant l'inscription et, le jour de votre premier trade, au moins 1 000 USDT de volume spot, 4 000 USDT de volume sur les futures ou 100 000 USDT de volume sur les CFD. Une Mystery Box peut contenir des USDT, des bonus de trading sur les futures, des bons de boost de position sur les futures, des bons d'APR Earn ou des bons de remise sur les frais spot, et doit être réclamée dans les 30 jours suivant son crédit.",
      "Bitget n'annonce aucune réduction des frais pour les filleuls. Ce qui fait baisser vos coûts sur Bitget, c'est le token BGB : payer les frais spot ou de marge en BGB vous donne droit à 20 % de réduction.",
    ],
  },
  signup: {
    methods: ["une adresse e-mail", "un numéro de mobile", "Google", "Telegram", "un portefeuille crypto"],
    steps: [
      {
        title: "Ouvrez la page d'inscription de Bitget",
        text: "Utilisez le bouton d'inscription de cette page. Bitget ouvre sa page d'inscription parrainée avec le code JZVEV1M3 déjà saisi et verrouillé.",
      },
      {
        title: "Saisissez votre adresse e-mail ou votre numéro de mobile",
        text: "Le guide d'inscription de Bitget mentionne aussi l'inscription avec Google, Telegram ou un portefeuille.",
      },
      {
        title: "Contrôlez le code de parrainage et acceptez les conditions",
        text: "Le champ “Referral code” doit afficher JZVEV1M3. Acceptez les conditions et cliquez sur “Next”.",
      },
      {
        title: "Choisissez un mot de passe",
        text: "Entre 8 et 32 caractères.",
      },
      {
        title: "Passez le captcha et saisissez le code à 6 chiffres",
        text: "Effectuez le contrôle de sécurité, puis saisissez le code à 6 chiffres que Bitget envoie à votre adresse e-mail ou sur votre téléphone. Aucun document n'est nécessaire pour s'inscrire.",
      },
      {
        title: "Vérifiez votre identité",
        text: "Terminez la vérification de niveau 1 avec une pièce d'identité et une vérification faciale : sans elle, vous ne pouvez ni déposer, ni trader, ni retirer.",
      },
    ],
    kycShort: "Obligatoire pour tous les utilisateurs",
    kyc: "Oui. Bitget indique que tous les nouveaux utilisateurs doivent effectuer la vérification d'identité dès leur inscription ; cette règle s'applique depuis le 1er septembre 2023. Sans elle, impossible de déposer, de trader ou de retirer des fonds, retraits on-chain et transferts internes compris. Le niveau 1 comprend une pièce d'identité et une vérification faciale ; un justificatif de domicile n'est exigé que si Bitget le demande. Après la vérification, la limite de retrait standard est de 3 millions d'USDT par 24 heures.",
    documents: "Une pièce d'identité officielle (carte d'identité, passeport, permis de conduire ou titre de séjour), ainsi qu'une vérification faciale.",
    minAge: "18 ans",
  },
  welcomeTasks: [
    { task: "Pack de bienvenue : check-in pendant trois jours", reward: "Bon de boost de position de 200 USDT sur les futures BTC USDT-M" },
    { task: "Défi : dépôt net d'au moins 1 000 USDT, 100 USDT de volume spot et 300 000 USDT de volume sur les futures", reward: "50 USDT" },
    { task: "Défi : dépôt net d'au moins 20 000 USDT, 10 000 USDT de volume spot et 2 000 000 USDT de volume sur les futures", reward: "400 USDT" },
    { task: "Défi : dépôt net d'au moins 100 000 USDT, 100 000 USDT de volume spot et 80 000 000 USDT de volume sur les futures", reward: "6 000 USDT" },
    { task: "Parrainage : dépôt net d'au moins 200 USDT dans les 15 jours et un premier trade remplissant les conditions", reward: "Airdrop de BTC d'une valeur de 9 $ et une Mystery Box (jusqu'à 500 USDT)" },
    { task: "Parrainage : volume de trading total supérieur à 100 000 USDT", reward: "18 $ en BTC et une Mystery Box (jusqu'à 1 000 USDT)" },
  ],
  tokenDiscount:
    "Payer les frais spot ou de marge en BGB donne droit à 20 % de réduction : 0,08 % au lieu de 0,1 % pour les utilisateurs standard. La grille tarifaire de Bitget n'indique aucune réduction BGB sur les futures.",
  extraFeeMarkets: ["Futures Coin-M", "Futures USDC-M"],
  sourceLabels: [
    "Bitget : comment s'inscrire (site web)",
    "Bitget : comment s'inscrire (application)",
    "Bitget : programme de parrainage et règles",
    "Centre d'aide Bitget : ajouter un code de parrainage après l'inscription",
    "Bitget : récompenses des nouveaux utilisateurs (pack de bienvenue)",
    "Bitget : règles des bonus de trading",
    "Bitget : grille des frais",
    "Bitget : payer les frais de trading en BGB",
    "Bitget : vérification d'identité (KYC)",
    "Bitget : limites de retrait",
    "Bitget : conditions d'utilisation (pays interdits)",
    "Bitget : à propos",
    "Bitget : licences réglementaires",
    "Bitget : preuve de réserves",
    "Bitget : fonds de protection",
    "Bitget : copy trading pour les copieurs",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Marge", "Futures", "Copy trading", "Perpétuels sur actions et CFD"],
  bonusHeadline: "Pack de bienvenue jusqu'à 6 200 USDT",
  benefits: [
    "Récompenses pour les nouveaux utilisateurs jusqu'à 6 200 USDT, à commencer par un bon de boost de position de 200 USDT sur les futures pour trois jours de check-in",
    "Récompenses du programme de parrainage pour le filleul : airdrops de BTC et Mystery Boxes jusqu'à 500 et 1 000 USDT",
    "Un seul parrainage couvre le spot, la marge, les futures, le copy trading, les contrats perpétuels sur actions et les CFD",
    "20 % de réduction sur les frais spot et de marge quand vous les payez en BGB",
  ],
  benefitNote:
    "Le montant de 6 200 USDT est un maximum : 200 USDT sont accordés sous forme de bon de boost de position sur les futures, et le reste provient d'un défi de dépôt et de trading dont seul le palier le plus élevé atteint est versé ; la récompense maximale exige donc un dépôt net de 100 000 USDT et 80 millions d'USDT de volume sur les futures. Les conditions doivent être remplies dans un délai de sept jours ; sur les futures, seuls les ordres taker comptent, et les trades en copy trading, via API ou par bot sont exclus. Les récompenses se réclament manuellement, et les bonus de trading ne peuvent pas être retirés en espèces. Les récompenses de parrainage supposent que le parrain participe à l'opération de Bitget et ne sont versées ni à des comptes d'affiliés ni par leur intermédiaire.",
  headquarters: "Non indiqué par Bitget (exploitant désigné dans les conditions d'utilisation : BTG Technology Holdings Limited)",
  regulation:
    "Enregistrements ou licences en Australie (AUSTRAC), au Salvador (BSP, DASP), en Argentine (VASP), en Afrique du Sud, au Mexique, à Maurice et en Géorgie",
  users: "150 millions d'utilisateurs inscrits (selon Bitget)",
  assets: "600+ paires de trading spot, 200+ paires de futures",
  maxLeverage: "Jusqu'à 150x (futures BTC et ETH)",
  feeNote: "Les frais baissent aux niveaux VIP supérieurs.",
  products: ["Futures USDT-M, Coin-M et USDC-M", "Spot", "Trading sur marge", "Copy trading", "Bots de trading", "Actions tokenisées et CFD", "Earn", "Bitget Wallet"],
  tagline: "La plateforme du copy trading crypto",
  quickAnswer:
    "Le code de parrainage Bitget est JZVEV1M3. Saisissez-le dans le champ “Referral code” lors de l'inscription : le bouton de cette page le saisit pour vous et verrouille le champ. Il doit être saisi pendant l'inscription, car le centre d'aide de Bitget précise que les codes ne peuvent être ni ajoutés ni modifiés ensuite, sauf via un ticket au support. Les nouveaux utilisateurs peuvent obtenir un pack de bienvenue jusqu'à 6 200 USDT, à commencer par un bon de 200 USDT sur les futures pour trois jours de check-in.",
  about: [
    "Fondée en 2018, Bitget annonce 150 millions d'utilisateurs inscrits et plus de 20 milliards d'USDT de volume de trading quotidien. Elle s'est fait connaître grâce au copy trading et se présente comme la plus grande plateforme de copy trading crypto : les copieurs choisissent un trader principal, fixent un montant à partir de 50 USDT, et Bitget reproduit automatiquement les positions de ce trader, qui perçoit en échange une part des bénéfices du copieur.",
    "La plateforme propose plus de 600 paires de trading spot et plus de 200 paires de futures, avec un effet de levier jusqu'à 150x sur BTC et ETH et jusqu'à 10x sur marge. Les utilisateurs standard paient 0,1 % sur le spot (0,08 % avec BGB) et 0,02 % maker / 0,06 % taker sur les futures USDT-M, Coin-M et USDC-M. Bots de trading, produits Earn, actions tokenisées, CFD et portefeuille non dépositaire Bitget Wallet complètent l'offre.",
    "Bitget publie chaque mois une preuve de réserves fondée sur un arbre de Merkle ; l'instantané du 12 novembre 2026 affichait un ratio de réserves total de 124 %, avec 127 % pour le BTC, 114 % pour l'USDT et 103 % pour l'ETH. Son fonds de protection, évalué à 274 millions de dollars, doit couvrir les pertes liées à des incidents touchant toute la plateforme et dont l'utilisateur n'est pas responsable. Bitget fait état d'enregistrements ou de licences en Australie, au Salvador, en Argentine, en Afrique du Sud, au Mexique, à Maurice et en Géorgie, et ses conditions d'utilisation excluent une longue liste de pays, dont les États-Unis, le Canada, l'Allemagne, la France et l'Autriche.",
  ],
  highlights: [
    { title: "Leader du copy trading", text: "Suivez des traders principaux dès 50 USDT et reproduisez automatiquement leurs positions." },
    { title: "Fonds de protection de 274 M$", text: "Un fonds dédié aux pertes liées à des incidents touchant toute la plateforme." },
    { title: "Réserves à 124 %", text: "Preuve de réserves mensuelle par arbre de Merkle, dernier instantané du 12 novembre 2026." },
  ],
  pros: [
    "Copy trading sur les futures et le spot dès 50 USDT",
    "Preuve de réserves mensuelle à 124 % et fonds de protection de 274 millions de dollars",
    "Frais futures standard de 0,02 % maker / 0,06 % taker, et 20 % de réduction sur les frais spot avec BGB",
    "Le lien de parrainage saisit le code à votre place et le verrouille : aucune faute de frappe possible",
  ],
  cons: [
    "Impossible d'ajouter un code de parrainage après l'inscription, sauf via un ticket au support",
    "Indisponible aux États-Unis, au Canada, en Allemagne, en France, en Autriche, au Japon et à Singapour",
    "La récompense de bienvenue maximale exige un dépôt et un volume de trading très élevés",
    "Le copy trading peut donner un faux sentiment de sécurité : les résultats passés ne garantissent pas les rendements futurs",
  ],
  bestFor: [
    "Traders qui veulent copier des traders de futures expérimentés",
    "Traders de futures sur altcoins",
    "Utilisateurs qui veulent aussi s'exposer aux actions via la crypto",
  ],
  signupTip:
    "Vérifiez votre identité juste après l'inscription, car Bitget n'autorise ni dépôt, ni trade, ni retrait sans elle, puis faites le check-in trois jours pour obtenir le bon de boost de position de 200 USDT sur les futures.",
  safety:
    "Bitget publie chaque mois une preuve de réserves fondée sur un arbre de Merkle (124 % au total lors de l'instantané du 12 novembre 2026) et dispose d'un fonds de protection évalué à 274 millions de dollars ; c'est Bitget qui examine les demandes d'indemnisation adressées au fonds. Activez la double authentification dès votre inscription. Les résultats du copy trading sont des performances passées et ne garantissent pas les rendements futurs.",
  restricted:
    "Les conditions d'utilisation de Bitget (dernière mise à jour le 4 novembre 2026) citent notamment comme pays interdits : Autriche, Biélorussie, Canada, Cuba, France, Allemagne, Hong Kong, Iran, Japon, Kazakhstan, Malaisie, Corée du Nord, Russie, Singapour, Soudan, Thaïlande, Émirats arabes unis et États-Unis, territoires compris. La page de vérification de Bitget mentionne en outre l'Inde, l'Italie et l'Espagne. Il est interdit d'utiliser un VPN pour contourner la restriction.",
  faqs: [
    {
      topic: "referral",
      q: "Le code parrain Bitget JZVEV1M3 fonctionne-t-il ?",
      a: "Oui. Le 16 novembre 2026, le lien de cette page a ouvert la page d'inscription parrainée de Bitget avec JZVEV1M3 prérempli et verrouillé dans le champ du code de parrainage.",
    },
    {
      topic: "referral",
      q: "Pourquoi le lien d'inscription Bitget s'ouvre-t-il sur un autre domaine ou dans une autre langue ?",
      a: "Les liens de partage de Bitget redirigent via plusieurs domaines appartenant à la plateforme : lors de notre vérification, le même lien s'est ouvert une fois sur bitget.com et une fois sur bitget.site. Ils peuvent aussi s'ouvrir dans la langue dans laquelle le lien a été créé. Le code de parrainage JZVEV1M3 était renseigné à chaque fois.",
    },
    {
      topic: "referral",
      q: "Quels trades comptent pour le programme de parrainage Bitget ?",
      a: "Le trading spot, copy trading et marge compris, le trading de futures, les contrats perpétuels sur actions, les contrats perpétuels sur matières premières, le trading d'actions en spot et le trading de CFD.",
    },
    {
      topic: "referral",
      q: "Qu'est-ce qu'une Mystery Box Bitget ?",
      a: "Une récompense du programme de parrainage de Bitget. Elle peut contenir des USDT, des bonus de trading sur les futures, des bons de boost de position sur les futures, des bons d'APR Earn ou des bons de remise sur les frais spot, et doit être réclamée dans les 30 jours suivant son crédit.",
    },
    {
      topic: "signup",
      q: "Faut-il des documents pour s'inscrire sur Bitget ?",
      a: "Pas pour créer le compte : selon le guide de Bitget, aucun document n'est nécessaire pour s'inscrire. Il faut en revanche une pièce d'identité et une vérification faciale pour la vérification d'identité qui suit, et sans elle, vous ne pouvez ni déposer, ni trader, ni retirer.",
    },
    {
      topic: "signup",
      q: "Quelles sont les exigences de mot de passe sur Bitget ?",
      a: "Un mot de passe Bitget doit comporter entre 8 et 32 caractères.",
    },
    {
      topic: "signup",
      q: "Peut-on s'inscrire sur Bitget avec Google ou Telegram ?",
      a: "Oui. Le guide d'inscription de Bitget indique que vous pouvez aussi vous inscrire directement avec Google, Telegram ou un portefeuille, en plus d'une adresse e-mail ou d'un numéro de mobile.",
    },
    {
      topic: "signup",
      q: "Peut-on utiliser Bitget sans KYC ?",
      a: "Non. Depuis le 1er septembre 2023, tous les nouveaux utilisateurs doivent effectuer la vérification d'identité dès leur inscription ; sans elle, Bitget n'autorise ni dépôt, ni trade, ni retrait.",
    },
    {
      topic: "bonus",
      q: "Quel est le bonus de bienvenue Bitget ?",
      a: "Bitget annonce jusqu'à 6 200 USDT de récompenses pour les nouveaux utilisateurs. Elles se composent d'un bon de boost de position de 200 USDT sur les futures BTC USDT-M, obtenu pour trois jours de check-in, et d'un défi de dépôt et de trading d'une valeur de 50, 400 ou 6 000 USDT, dont seul le palier le plus élevé atteint est versé.",
    },
    {
      topic: "bonus",
      q: "Que faut-il faire pour obtenir la récompense Bitget de 6 000 USDT ?",
      a: "Dans un délai de sept jours : un dépôt net d'au moins 100 000 USDT, 100 000 USDT de volume spot et 80 000 000 USDT de volume sur les futures. Le palier de 50 USDT demande un dépôt de 1 000 USDT, 100 USDT de volume spot et 300 000 USDT de volume sur les futures. Sur les futures, seuls les ordres taker comptent, et les trades en copy trading, via API ou par bot sont exclus.",
    },
    {
      topic: "bonus",
      q: "Peut-on retirer les bonus de trading Bitget ?",
      a: "Non. Bitget précise que les bonus de trading ne sont pas retirables et ne peuvent pas être encaissés. Retirer des fonds dans les trois jours qui suivent la période du défi fait en outre perdre la récompense du défi.",
    },
    {
      topic: "fees",
      q: "Quels sont les frais futures sur Bitget ?",
      a: "Les utilisateurs standard paient 0,02 % maker et 0,06 % taker sur les futures USDT-M, Coin-M et USDC-M.",
    },
    {
      topic: "fees",
      q: "Quelle réduction offre le BGB sur les frais Bitget ?",
      a: "20 % sur les frais spot et de marge, ce qui fait passer le taux spot standard de 0,1 % à 0,08 %. La grille tarifaire de Bitget n'indique aucune réduction BGB sur les futures.",
    },
    {
      topic: "fees",
      q: "Quel est le levier maximal sur Bitget ?",
      a: "Jusqu'à 150x sur les futures BTC et ETH ; le maximum varie selon la crypto. Le trading sur marge va jusqu'à 10x. Un effet de levier élevé augmente fortement le risque de liquidation.",
    },
    {
      topic: "fees",
      q: "Comment fonctionne le copy trading sur Bitget et combien coûte-t-il ?",
      a: "Vous choisissez un trader principal, fixez votre montant (50 USDT minimum) et Bitget reproduit les positions de ce trader sur votre compte. Le trader principal perçoit une part de vos bénéfices ; les pages d'aide de Bitget donnent des fourchettes différentes pour cette part, alors vérifiez le taux affiché sur le profil du trader avant de le suivre.",
    },
    {
      topic: "safety",
      q: "Qu'est-ce que le fonds de protection Bitget ?",
      a: "Un fonds que Bitget conserve pour couvrir les pertes des utilisateurs liées à des incidents touchant toute la plateforme et qui ne résultent pas de leurs propres actions. Bitget l'évalue à 274 millions de dollars, détenus sous forme de 4 204,71 BTC, et examine elle-même les demandes d'indemnisation.",
    },
    {
      topic: "safety",
      q: "Bitget est-elle disponible aux États-Unis ou en Allemagne ?",
      a: "Non. Les conditions d'utilisation de Bitget placent les États-Unis, l'Allemagne, la France, l'Autriche, le Canada, le Japon et Singapour sur la liste des pays interdits.",
    },
    {
      topic: "safety",
      q: "Bitget publie-t-elle une preuve de réserves ?",
      a: "Oui, chaque mois, sous la forme d'une preuve par arbre de Merkle. L'instantané du 12 novembre 2026 affichait un ratio de réserves total de 124 % : 127 % pour le BTC, 114 % pour l'USDT et 103 % pour l'ETH.",
    },
  ],
};
