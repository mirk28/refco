import type { ExchangeText } from "../../types";

export const okx: ExchangeText = {
  referral: {
    codeName: "code de parrainage",
    whereShort: "Champ “Referral code (optional)” à l'étape de l'adresse e-mail, lors de l'inscription",
    apply:
      "Saisissez-le dans le champ “Referral code (optional)” à l'étape de l'adresse e-mail de l'inscription (le champ est replié : dépliez-le d'abord), ou ouvrez le lien d'inscription de cette page, qui renseigne le code à votre place.",
    whereToEnter:
      "Sur le site d'OKX, le code se saisit dans le champ “Referral code (optional)”, à l'étape où vous indiquez votre adresse e-mail. Ce champ est replié : dépliez-le d'abord. Si vous arrivez par un lien de parrainage, le code est repris automatiquement, et OKX précise qu'un code prérempli par un lien ne peut plus être modifié. Sur téléphone, OKX demande de saisir d'abord votre adresse e-mail sur la page d'invitation, puis d'installer l'application via ce même lien et de vous inscrire avec la même adresse. Si vous installez l'application séparément et vous y inscrivez, le code risque de ne pas être repris.",
    afterSignupShort: "Non – uniquement lors de l'inscription",
    afterSignup:
      "Non. Selon OKX, les codes d'invitation ne prennent effet qu'au moment de l'inscription et ne peuvent pas être ajoutés rétroactivement ; sa FAQ sur le parrainage indique qu'un code ne peut généralement être ni ajouté ni modifié par la suite. Supprimer votre compte pour vous réinscrire ne vous redonne pas droit au parrainage et peut être considéré comme une infraction. Un lien du type okx.com/join/… ne peut pas être associé à un compte existant.",
    inviteeReward:
      "En tant que filleul, vous recevez les récompenses de bienvenue d'OKX (Welcome Rewards), aussi appelées New User Bonus. Elles sont distinctes de la récompense du parrain et dépendent de votre pays, de la campagne et du lien utilisé ; l'offre est fixée au moment de votre inscription. Lors de notre vérification, la page d'invitation de ce code affichait une récompense de bienvenue pouvant atteindre 400 € sur OKX Europe, et la page d'invitation mondiale d'OKX promettait jusqu'à 100 USDT pour l'inscription et la réalisation de tâches.",
    guide: [
      "Un code de parrainage OKX relie votre nouveau compte à la personne qui vous a invité. Concrètement, il vous donne accès aux récompenses de bienvenue : une série de tâches de dépôt et de trading dont OKX fixe les montants selon le pays, la campagne et le groupe d'utilisateurs. L'offre à laquelle vous avez droit est déterminée à l'inscription, c'est pourquoi le code doit être renseigné à ce moment-là.",
      "La version d'OKX sur laquelle vous arrivez dépend de votre lieu de résidence. Les visiteurs de l'Espace économique européen (EEE), ainsi que de plusieurs autres pays européens, sont redirigés vers OKX Europe (okx.com/en-eu), exploitée par OKX Europe Limited, à Malte, sous le régime MiCA. Les récompenses y sont versées en crypto, en bons X-Perps ou sous forme de VIP Pass ; les récompenses en crypto restent bloquées jusqu'à 45 jours (vous pouvez les trader, mais pas les retirer), et le volume X-Perps ne compte pas pour les tâches de trading.",
      "Sur le site mondial, les récompenses arrivent sous forme de crypto ou de cartes de remise à ouvrir dans les 30 jours, une tâche de trading doit être remplie en un seul trade, et les tâches non terminées disparaissent 180 jours après l'inscription.",
    ],
  },
  signup: {
    methods: ["une adresse e-mail (un numéro de téléphone est ajouté et confirmé pendant l'inscription)"],
    steps: [
      {
        title: "Ouvrez la page d'invitation OKX",
        text: "Utilisez le bouton d'inscription de cette page. OKX ouvre la page d'invitation du code T7IRGAR3 et affiche la récompense de bienvenue applicable dans votre pays.",
      },
      {
        title: "Choisissez votre pays ou votre région de résidence",
        text: "Sélectionnez votre lieu de résidence, confirmez avoir pris connaissance des conditions d'utilisation (Terms of Service) et cliquez sur “Next”.",
      },
      {
        title: "Saisissez votre adresse e-mail et vérifiez le code de parrainage",
        text: "Dépliez “Referral code (optional)” : le champ doit contenir T7IRGAR3. Cliquez ensuite sur “Sign up”.",
      },
      {
        title: "Confirmez le code à 6 chiffres reçu par e-mail",
        text: "OKX envoie un code à 6 chiffres à votre adresse e-mail. Il est valable 10 minutes.",
      },
      {
        title: "Ajoutez votre numéro de téléphone",
        text: "Saisissez votre numéro de téléphone, puis le code à 6 chiffres envoyé à ce numéro. OKX exige à la fois une adresse e-mail et un numéro de téléphone sur chaque compte.",
      },
      {
        title: "Définissez un mot de passe",
        text: "Choisissez pour ce compte un mot de passe robuste, que vous n'utilisez nulle part ailleurs.",
      },
      {
        title: "Vérifiez votre identité",
        text: "Terminez la vérification d'identité avec une pièce d'identité officielle et un selfie ou un contrôle facial. Le trading, les dépôts et les retraits ne sont possibles qu'ensuite.",
      },
    ],
    kycShort: "Obligatoire avant le trading, les dépôts et les retraits",
    kyc: "Oui. OKX exige une vérification d'identité pour utiliser un compte particulier : le trading, les dépôts et les retraits ne sont possibles qu'après. Vous indiquez votre pays de résidence, votre nationalité, votre nom, votre date de naissance et les informations de votre pièce d'identité, vous importez un document officiel et vous passez un selfie ou un contrôle facial ; OKX peut aussi demander un justificatif de domicile émis au cours des 6 derniers mois. Selon OKX, l'examen du dossier est terminé sous 24 heures, et une pièce d'identité ne peut servir qu'à un seul compte.",
    documents:
      "Une pièce d'identité officielle en cours de validité : passeport, carte nationale d'identité, permis de conduire ou titre de séjour (seule fait foi la liste affichée pour votre pays lors de la vérification), plus un selfie ou un contrôle facial et, sur demande, un justificatif de domicile de moins de 6 mois.",
    minAge: "18 ans",
  },
  welcomeTasks: [],
  tokenDiscount: "",
  extraFeeMarkets: ["Options"],
  sourceLabels: [
    "OKX : comment créer un compte",
    "OKX : FAQ du programme de parrainage",
    "OKX : FAQ affiliation (codes d'invitation et remises)",
    "OKX : conditions générales du New User Bonus (EEE)",
    "OKX : FAQ du New User Bonus (EEE)",
    "OKX : conditions générales du New User Bonus (site mondial)",
    "OKX : barème des frais",
    "OKX : FAQ sur les règles des frais de trading",
    "OKX : effet de levier des X-Perps dans l'EEE",
    "API publique d'OKX : instruments de contrats perpétuels (levier maximal)",
    "OKX : comment vérifier un compte particulier",
    "OKX : vérification d'identité – conditions, délai d'examen et documents",
    "OKX : informations sur les risques et la conformité (zones restreintes)",
    "OKX : conditions d'utilisation",
    "OKX Europe : à propos",
    "OKX Middle East : à propos (licence VARA)",
    "OKX : preuve de réserves",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futures (contrats perpétuels inclus)"],
  bonusHeadline: "Récompense de bienvenue pouvant atteindre 400 € ou 100 USDT",
  benefits: [
    "Récompenses de bienvenue OKX pour les nouveaux utilisateurs : jusqu'à 400 € sur OKX Europe et jusqu'à 100 USDT sur le site mondial, débloquées par des tâches de dépôt et de trading",
    "Frais standard bas : 0,08 % maker / 0,10 % taker sur le spot et 0,02 % / 0,05 % sur les futures et les perpétuels",
    "Un code transmis par le lien ne peut pas être mal saisi : OKX verrouille un code prérempli",
    "Preuve de réserves mensuelle, que vous pouvez vérifier avec votre propre solde",
  ],
  benefitNote:
    "Pour obtenir les récompenses de bienvenue, il faut s'inscrire via un lien prévu à cet effet et terminer la vérification d'identité, puis réaliser des tâches de dépôt et de trading. Sur OKX Europe, les transferts internes ne comptent pas comme dépôts, les paires sans frais et le volume X-Perps ne comptent pas comme trades, les récompenses en crypto restent bloquées jusqu'à 45 jours et leur versement peut prendre jusqu'à 48 heures. Sur le site mondial, les récompenses doivent être ouvertes dans les 30 jours et les tâches expirent 180 jours après l'inscription. Montants et tâches varient selon le pays et la campagne.",
  headquarters:
    "Aux Cayes FinTech Co. Ltd. (Seychelles) pour le site mondial ; OKX Europe Limited (Malte) ; OKX Middle East Fintech FZE (Dubaï)",
  regulation: "Agrément MiCA via OKX Europe Limited (Malte, MFSA) ; licence VARA à Dubaï",
  users: "Plus de 120 millions d'utilisateurs (selon OKX Europe)",
  assets: "270+ cryptomonnaies (selon OKX Europe)",
  maxLeverage: "Jusqu'à 100x (site mondial ; jusqu'à 10x sur OKX Europe)",
  feeNote:
    "Ce sont les taux du niveau Regular ; le niveau supérieur commence à 100 000 en actifs ou à 1 000 000 de volume spot sur 30 jours (5 000 000 pour les futures), comptés en EUR sur OKX Europe et en USD sur le site mondial. Les futures à échéance entraînent des frais de règlement de 0,01 %.",
  products: ["Spot", "Contrats perpétuels", "Futures à échéance", "Options", "Bots de trading"],
  tagline: "Spot et produits dérivés à frais bas, avec preuve de réserves mensuelle",
  quickAnswer:
    "Le code de parrainage OKX est T7IRGAR3. Sur le site, il se saisit dans le champ “Referral code (optional)” à l'étape de l'adresse e-mail de l'inscription ; le bouton de cette page le renseigne à votre place. Il ne fonctionne qu'à l'inscription : OKX n'ajoute pas les codes d'invitation après coup. Les nouveaux utilisateurs reçoivent les récompenses de bienvenue d'OKX, soit jusqu'à 400 € sur OKX Europe ou jusqu'à 100 USDT sur le site mondial, après la vérification d'identité et des tâches de dépôt et de trading.",
  about: [
    "OKX a été fondée en 2017 et compte parmi les plus grandes plateformes d'échange de cryptomonnaies, aussi bien pour le spot que pour les produits dérivés. Les pages d'OKX Europe font état de plus de 120 millions d'utilisateurs et de plus de 270 cryptomonnaies listées. Les utilisateurs du niveau Regular paient 0,08 % en maker et 0,10 % en taker sur le spot, 0,02 % / 0,05 % sur les futures (contrats à terme) et les contrats perpétuels, et 0,03 % sur les options.",
    "La gamme couvre le spot, les contrats perpétuels, les futures à échéance, les options et les bots de trading, mais ce que vous pouvez utiliser dépend de votre lieu de résidence. Sur le site mondial, l'effet de levier maximal est de 100x, disponible sur des contrats perpétuels comme BTC-USDT, ETH-USDT, SOL-USDT et XRP-USDT. Sur OKX Europe, le produit perpétuel s'appelle X-Perps et il est limité à 10x, moins pour les positions plus importantes.",
    "OKX publie une preuve de réserves chaque mois. Le 49e rapport portait sur 33,87 milliards de dollars répartis sur 21 actifs ; la vérification du 1er novembre 2026 affichait des ratios de réserves de 108 % pour BTC, 101 % pour ETH, 106 % pour USDT et 100 % pour USDC. Cette preuve repose sur zk-STARK et un arbre de Merkle, ce qui permet aux utilisateurs connectés de vérifier que leur propre solde y figure. OKX Europe Limited est agréée par la Malta Financial Services Authority en tant que prestataire de services sur crypto-actifs au titre de MiCA, et OKX Middle East Fintech FZE détient une licence de la VARA de Dubaï.",
  ],
  highlights: [
    { title: "Frais standard bas", text: "0,08 % / 0,10 % sur le spot et 0,02 % / 0,05 % sur les futures et les perpétuels." },
    { title: "Preuve de réserves mensuelle", text: "49 rapports publiés à ce jour, vérifiables grâce à zk-STARK et à un arbre de Merkle." },
    { title: "Agrément MiCA dans l'EEE", text: "OKX Europe Limited est agréée par la MFSA, le régulateur maltais." },
  ],
  pros: [
    "Frais standard bas sur le spot, les futures et les options",
    "Preuve de réserves mensuelle, vérifiable par chacun, avec des ratios supérieurs à 100 %",
    "Entité agréée MiCA pour les utilisateurs de l'EEE et licence VARA à Dubaï",
    "Options et futures à échéance en plus des contrats perpétuels",
  ],
  cons: [
    "Impossible d'ajouter un code de parrainage après l'inscription",
    "Les produits dépendent fortement de votre pays : les contrats perpétuels sont plafonnés à 10x sur OKX Europe",
    "Les récompenses de bienvenue restent bloquées jusqu'à 45 jours sur OKX Europe",
    "Indisponible au Canada, en Inde, au Japon, à Hong Kong et dans une partie des États-Unis",
  ],
  bestFor: ["Traders spot et futures attentifs aux frais", "Traders d'options", "Utilisateurs de l'EEE qui veulent une plateforme agréée MiCA"],
  signupTip:
    "Sur téléphone, saisissez d'abord votre adresse e-mail sur la page d'invitation, puis installez l'application via ce lien. Si vous téléchargez l'application séparément et vous y inscrivez, le code de parrainage risque de ne pas être repris.",
  safety:
    "OKX publie chaque mois une preuve de réserves (ratios de 108 % pour BTC, 101 % pour ETH, 106 % pour USDT et 100 % pour USDC lors de la vérification du 1er novembre 2026) et permet aux utilisateurs connectés de vérifier leur propre solde via “View my report”, avec des outils open source et des adresses de portefeuilles publiées. Chaque compte doit être associé à la fois à une adresse e-mail et à un numéro de téléphone. Comme sur toute plateforme, ne laissez sur OKX que votre capital de trading.",
  restricted:
    "OKX classe les pays et territoires suivants parmi les zones restreintes : l'Afghanistan, le Canada, Cuba, Hong Kong, l'Iran, l'Inde, le Japon, la Malaisie, le Népal, la Corée du Nord, la Syrie, l'Ouzbékistan, les régions de Crimée, de Donetsk et de Louhansk, ainsi que certaines juridictions américaines, dont l'ensemble des territoires américains. Des restrictions partielles s'appliquent en Australie, au Brésil, en Corée du Sud et au Royaume-Uni (pas de produits dérivés), ainsi qu'aux paiements en monnaie fiduciaire en Russie. La liste a été mise à jour pour la dernière fois le 14 novembre 2026.",
  faqs: [
    {
      topic: "referral",
      q: "Le code de parrainage OKX T7IRGAR3 fonctionne-t-il ?",
      a: "Oui. Le 16 novembre 2026, le lien okx.com/join/T7IRGAR3 ouvrait la page d'invitation officielle d'OKX pour ce code, avec une récompense de bienvenue et un lien d'inscription contenant le code.",
    },
    {
      topic: "referral",
      q: "Pourquoi le champ du code de parrainage n'apparaît-il pas sur OKX ?",
      a: "Le champ “Referral code (optional)” est replié dans le formulaire d'inscription et doit être déplié. OKX précise que si le champ ne s'affiche pas du tout, vous devez plutôt vous inscrire via le lien de parrainage.",
    },
    {
      topic: "referral",
      q: "Comment utiliser le code parrain OKX dans l'application ?",
      a: "Ouvrez le lien d'invitation sur votre téléphone et saisissez-y votre adresse e-mail, puis installez l'application OKX via ce lien et inscrivez-vous avec la même adresse. OKX prévient que le code risque de ne pas être repris si vous installez l'application séparément et vous y inscrivez.",
    },
    {
      topic: "referral",
      q: "Peut-on obtenir le parrainage OKX en supprimant son compte et en se réinscrivant ?",
      a: "Non. Selon OKX, supprimer un compte pour se réinscrire ne redonne pas droit au parrainage et peut être considéré comme une infraction.",
    },
    {
      topic: "signup",
      q: "Faut-il un numéro de téléphone pour s'inscrire sur OKX ?",
      a: "Oui. Lors de l'inscription, OKX demande d'abord une adresse e-mail, puis un numéro de téléphone, chacun confirmé par un code à 6 chiffres. Les deux doivent être associés au compte, et une adresse e-mail comme un numéro de téléphone ne peuvent servir qu'à un seul compte.",
    },
    {
      topic: "signup",
      q: "Combien de temps le code de vérification envoyé par e-mail par OKX est-il valable ?",
      a: "Le code à 6 chiffres qu'OKX envoie à votre adresse e-mail lors de l'inscription est valable 10 minutes.",
    },
    {
      topic: "signup",
      q: "Combien de temps prend la vérification d'identité sur OKX ?",
      a: "Selon OKX, l'examen est terminé sous 24 heures après l'envoi de votre document et la réalisation du selfie ou du contrôle facial.",
    },
    {
      topic: "signup",
      q: "Peut-on utiliser OKX sans KYC ?",
      a: "Non. La vérification d'identité est obligatoire pour utiliser un compte particulier ; le trading, les dépôts et les retraits ne sont accessibles qu'ensuite.",
    },
    {
      topic: "bonus",
      q: "Quel est le bonus de bienvenue OKX ?",
      a: "Les nouveaux utilisateurs qui s'inscrivent via un lien de parrainage reçoivent les récompenses de bienvenue d'OKX (New User Bonus). Lors de notre vérification, la page d'invitation affichait jusqu'à 400 € sur OKX Europe, et la page d'invitation mondiale jusqu'à 100 USDT. Les récompenses se débloquent en terminant la vérification d'identité, des tâches de dépôt et des tâches de trading, et elles varient selon le pays et la campagne.",
    },
    {
      topic: "bonus",
      q: "Peut-on retirer tout de suite la récompense de bienvenue OKX ?",
      a: "Non. Sur OKX Europe, les récompenses en crypto sont bloquées jusqu'à 45 jours : vous pouvez les trader, mais pas les retirer. Sur le site mondial, les récompenses sont bloquées dès leur réception et ne peuvent être ni tradées ni retirées pendant la période de blocage.",
    },
    {
      topic: "bonus",
      q: "Quels dépôts et trades comptent pour les tâches de bienvenue OKX ?",
      a: "Sur OKX Europe, les dépôts en crypto ou en monnaie fiduciaire par SEPA, iDEAL ou Bancontact comptent, mais pas les transferts internes. Les trades passés via Buy, Sell, Convert ou le carnet d'ordres spot comptent ; les paires sans frais et le volume X-Perps, non. Sur le site mondial, une tâche de trading doit être remplie en un seul trade.",
    },
    {
      topic: "fees",
      q: "Quels sont les frais sur les options OKX ?",
      a: "Les utilisateurs du niveau Regular paient 0,03 % en maker et 0,03 % en taker sur les options.",
    },
    {
      topic: "fees",
      q: "Quel est le levier maximal sur OKX ?",
      a: "100x sur le site mondial, sur des contrats perpétuels comme BTC-USDT, ETH-USDT, SOL-USDT et XRP-USDT, et moins pour les positions plus importantes. Sur OKX Europe, les X-Perps sont limités à 10x. Un effet de levier élevé augmente fortement le risque de liquidation.",
    },
    {
      topic: "fees",
      q: "Comment payer moins de frais sur OKX ?",
      a: "Les niveaux de frais d'OKX dépendent de votre solde d'actifs ou de votre volume de trading sur 30 jours. Le niveau Regular s'arrête à 100 000 en actifs, ou à 1 000 000 de volume sur 30 jours sur le spot et 5 000 000 sur les futures ; au-delà, ce sont les taux VIP qui s'appliquent.",
    },
    {
      topic: "safety",
      q: "OKX est-elle régulée en Europe ?",
      a: "Oui. OKX Europe Limited est agréée par la Malta Financial Services Authority en tant que prestataire de services sur crypto-actifs au titre de MiCA et sert les clients de l'EEE via okx.com/en-eu.",
    },
    {
      topic: "safety",
      q: "OKX est-elle disponible aux États-Unis ?",
      a: "Seulement en partie : OKX classe certaines juridictions américaines et l'ensemble des territoires américains parmi les zones restreintes. Le Canada, l'Inde, le Japon et Hong Kong sont entièrement restreints.",
    },
    {
      topic: "safety",
      q: "OKX publie-t-elle une preuve de réserves ?",
      a: "Oui, chaque mois. Le 49e rapport portait sur 33,87 milliards de dollars répartis sur 21 actifs, et la vérification du 1er novembre 2026 affichait 108 % pour BTC, 101 % pour ETH, 106 % pour USDT et 100 % pour USDC.",
    },
  ],
};
