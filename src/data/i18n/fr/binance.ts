import type { ExchangeText } from "../../types";

export const binance: ExchangeText = {
  referral: {
    codeName: "Referral ID",
    whereShort: "Champ “Referral ID (Optional)” à la dernière étape de l'inscription",
    apply:
      "Saisissez-le dans le champ “Referral ID (Optional)” à la dernière étape de l'inscription, ou ouvrez le lien d'inscription de cette page, qui le renseigne à votre place.",
    whereToEnter:
      "Sur le site comme dans l'application, Binance demande le code de parrainage à la dernière étape de l'inscription, une fois que vous avez confirmé votre adresse e-mail ou votre numéro de téléphone et défini un mot de passe. Si vous arrivez par un lien de parrainage, Binance renseigne le code à votre place et affiche à côté une coche verte avec “Linked”. Sinon, saisissez REFCO888 dans le champ “Referral ID (Optional)”. Cette étape est facultative : vous pouvez la passer.",
    afterSignupShort: "Oui – dans les 30 jours, avant tout dépôt ou trade",
    afterSignup:
      "Oui, sous conditions. Binance permet de lier un code de parrainage manquant sur sa page dédiée (binance.com/en/activity/referral/bind-ref) si votre compte a moins de 30 jours, n'a enregistré ni dépôt ni activité de trading, n'est encore rattaché à aucun parrain et est un compte principal, si votre vérification d'identité n'a pas servi pour un autre compte au cours des 180 derniers jours et si le compte n'est pas signalé pour du wash trading. Selon Binance, un parrainage lié ne peut ensuite être ni modifié ni supprimé.",
    inviteeReward:
      "REFCO888 est un code Binance Referral Pro. En mode Pro, le filleul récupère une partie de ses propres frais de trading, versée en USDC, si le parrain a choisi de partager sa commission : Binance affiche le taux applicable lors de l'inscription. Indépendamment du code, Binance propose à chaque nouvel utilisateur vérifié des tâches pour débutants qui rapportent jusqu'à 100 USD de bons de remise sur les frais de trading.",
    guide: [
      "Binance fonctionne avec deux modes de parrainage, et un nouvel utilisateur ne peut relever que de l'un d'eux. Les liens de la forme binance.com/register?ref=…, comme celui de cette page, relèvent de Referral Pro : le parrain touche une commission sur vos frais de trading et peut vous en reverser une partie sous forme de remise en USDC. L'autre mode, Referral Lite, repose sur des bons de remise sur les frais de trading pour de petits premiers achats et premiers trades ; Binance n'émet pas ces bons avec un code Pro.",
      "Un seul parrainage Pro couvre le spot, la marge et les futures. Si vous ouvrez plus tard un compte Futures, Binance affiche un second champ facultatif, “Futures Referral ID”. Il n'accepte que le code du parrain qui a invité votre compte principal : impossible, donc, de combiner deux parrains différents.",
      "Votre pays de résidence a son importance. Depuis le 1er juillet 2026, les utilisateurs inscrits dans un pays de l'Espace économique européen (EEE) ne peuvent plus participer au programme de parrainage de Binance, à quelque titre que ce soit, et les conditions de parrainage de Binance prévoient aussi des restrictions pour le Royaume-Uni, Singapour, le Japon, la Turquie, Hong Kong et Israël. Vous pouvez toujours ouvrir un compte depuis les pays que Binance dessert, mais le parrainage n'a alors aucun effet.",
    ],
  },
  signup: {
    methods: ["une adresse e-mail", "un numéro de téléphone", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Ouvrez la page d'inscription de Binance",
        text: "Utilisez le bouton d'inscription de cette page. Il ouvre accounts.binance.com avec le parrainage déjà rattaché : Binance affiche le code REFCO888 à côté du formulaire.",
      },
      {
        title: "Saisissez votre adresse e-mail ou votre numéro de téléphone",
        text: "Ou continuez avec Google, Apple ou Telegram. Acceptez les conditions d'utilisation et l'avis de confidentialité pour poursuivre.",
      },
      {
        title: "Confirmez le code à 6 chiffres",
        text: "Binance envoie un code de vérification à 6 chiffres sur votre adresse e-mail ou votre téléphone. Il reste valable 30 minutes.",
      },
      {
        title: "Définissez un mot de passe",
        text: "Au moins 8 caractères, dont une majuscule et un chiffre.",
      },
      {
        title: "Contrôlez le code de parrainage",
        text: "À la dernière étape, le champ Referral ID devrait déjà être rempli, avec une coche verte et “Linked”. Si le champ est vide, saisissez REFCO888, ou passez l'étape si vous ne souhaitez pas de parrainage.",
      },
      {
        title: "Vérifiez votre identité",
        text: "Binance vous dirige ensuite vers la vérification d'identité. Tout nouvel utilisateur doit la terminer avant de déposer ou de trader.",
      },
    ],
    kycShort: "Obligatoire pour tous les produits",
    kyc: "Oui. Binance exige de chaque nouvel utilisateur une vérification d'identité terminée (statut “Verified”) avant d'utiliser le moindre produit, y compris les dépôts de cryptos et les trades. Vous choisissez un document, vous le téléversez et vous passez une vérification faciale ; selon Binance, l'examen est généralement bouclé sous 48 heures. Les comptes plus anciens qui n'ont jamais été vérifiés sont limités aux retraits.",
    documents:
      "La plupart des utilisateurs peuvent faire vérifier leur identité avec un passeport, une carte nationale d'identité ou un permis de conduire, puis passent une vérification faciale.",
    minAge: "18 ans (conditions d'utilisation de Binance)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "En payant les frais en BNB, vous obtenez 25 % de réduction sur les frais spot (0,075 % au lieu de 0,10 %) et 10 % sur les frais des futures USDⓈ-M (0,018 % maker / 0,045 % taker au lieu de 0,02 % / 0,05 %).",
  extraFeeMarkets: ["Futures COIN-M"],
  sourceLabels: [
    "Binance : s'inscrire sur le site (étape du code de parrainage)",
    "Binance : s'inscrire dans l'application",
    "Binance : lier un code de parrainage après l'inscription",
    "Binance : les modes Referral Pro et Referral Lite",
    "Binance : conditions du programme de parrainage et restrictions régionales",
    "Binance : récompenses de bienvenue des nouveaux utilisateurs (bons de remise sur les frais)",
    "Binance : barème des frais de trading spot",
    "Binance : barème des frais des futures USDⓈ-M",
    "Binance : barème des frais des futures COIN-M",
    "Binance : levier et marge des futures USDⓈ-M",
    "Binance : limites de levier des nouveaux comptes futures",
    "Binance : vérification d'identité",
    "Binance : conditions d'utilisation",
    "Binance : liste des pays interdits",
    "Binance : licences et enregistrements",
    "Binance : preuve de réserves",
    "Binance : fonds SAFU",
    "Binance : à propos",
  ],
  guides: {
    heading: "Guides sur Binance Square",
    intro:
      "Binance Square, la plateforme de contenus de Binance, publie des guides plus détaillés sur le programme de parrainage de Binance, sous forme de questions-réponses. Il en existe un par langue, chacun écrit pour ses propres lecteurs et non traduit :",
    linkLabel: "FAQ du code de parrainage Binance",
  },
  feeDiscount: "",
  referralCovers: ["Spot", "Marge", "Futures"],
  bonusHeadline: "Jusqu'à 100 USD de bons de remise sur les frais",
  benefits: [
    "Des tâches pour débutants qui rapportent jusqu'à 100 USD de bons de remise sur les frais de trading, une fois votre compte vérifié",
    "Un seul parrainage pour le spot, la marge et les futures : pas besoin d'un second code",
    "25 % de réduction sur les frais spot et 10 % sur les frais des futures USDⓈ-M si vous payez les frais en BNB",
    "Vous pouvez encore lier le code jusqu'à 30 jours après l'inscription, tant que vous n'avez ni déposé ni tradé",
  ],
  benefitNote:
    "Les bons de bienvenue relèvent de l'offre générale de Binance pour les nouveaux utilisateurs, pas d'une récompense liée au code de parrainage. Binance les attribue après la vérification d'identité ; ils remboursent des frais de trading spot, ne couvrent pas les trades passés via l'API et ne s'utilisent que dans l'application Binance. Binance en exclut une longue liste de pays, dont le Royaume-Uni, les États-Unis, le Canada, les Pays-Bas, la Norvège, la Serbie, le Japon, Singapour et Hong Kong.",
  headquarters: "Exploitation via des entités agréées par l'ADGM à Abou Dhabi",
  regulation:
    "Sous la supervision de la FSRA de l'ADGM (Abou Dhabi) ; autres licences et enregistrements, notamment à Dubaï (VARA), à Bahreïn, au Kazakhstan, en Australie et au Japon",
  users: "Plus de 320 millions d'utilisateurs inscrits (selon Binance)",
  assets: "600+ cryptomonnaies",
  maxLeverage: "Jusqu'à 150x (contrats perpétuels BTCUSDT et ETHUSDT)",
  feeNote: "Plus le niveau VIP est élevé, plus les taux baissent.",
  products: ["Spot", "Marge", "Futures USDⓈ-M et COIN-M", "Options", "Copy trading", "Bots de trading", "Earn et Launchpool"],
  tagline: "La liquidité la plus profonde sur les dérivés crypto",
  quickAnswer:
    "Le code de parrainage Binance est REFCO888. Binance le demande à la dernière étape de l'inscription ; le bouton de cette page le renseigne automatiquement. Un seul code couvre le spot, la marge et les futures. Si vous l'avez oublié, Binance permet de lier un code dans les 30 jours suivant l'inscription, tant que vous n'avez ni déposé ni tradé. Les nouveaux utilisateurs vérifiés peuvent aussi obtenir jusqu'à 100 USD de bons de remise sur les frais de trading.",
  about: [
    "Binance a vu le jour en juillet 2017 et, selon ses propres dires, est devenue en 180 jours la plus grande plateforme crypto au monde. Elle revendique aujourd'hui plus de 320 millions d'utilisateurs inscrits dans plus de 180 pays et liste plus de 600 cryptomonnaies. Sur les produits dérivés, elle est nettement numéro un : à la date de nos données de marché, son open interest (intérêt ouvert) dépassait celui des trois plateformes suivantes du classement des dérivés de CoinMarketCap réunies. Pour les traders, ce n'est pas un détail : des carnets d'ordres profonds signifient des spreads plus serrés et moins de slippage sur les gros ordres.",
    "Un seul identifiant donne accès au trading spot et sur marge, aux futures (contrats à terme) à marge en USDⓈ et à marge en crypto, aux options, aux bots de trading et au copy trading, ainsi qu'à Earn et Launchpool. Sur les futures USDⓈ-M, l'effet de levier monte jusqu'à 150x sur les contrats perpétuels BTCUSDT et ETHUSDT, pour des positions allant jusqu'à 300 000 USDT ; les contrats à marge en crypto vont jusqu'à 125x. Les nouveaux comptes futures ne peuvent pas dépasser 20x pendant leurs 30 premiers jours.",
    "Binance.com est régulée par la Financial Services Regulatory Authority de l'Abu Dhabi Global Market (ADGM), via trois entités agréées. Binance fait aussi état de licences et d'enregistrements à Dubaï (VARA), à Bahreïn, au Kazakhstan, en Australie (AUSTRAC), en Inde, en Indonésie, au Japon, en Nouvelle-Zélande, en Thaïlande, au Mexique, au Salvador, en Argentine, au Brésil et en Afrique du Sud. Sa preuve de réserves combine un arbre de Merkle et des zk-SNARKs pour que chaque utilisateur puisse vérifier que son propre solde est inclus, et son fonds d'urgence SAFU, créé en 2018, détenait environ 1 milliard de dollars en février 2026.",
  ],
  highlights: [
    { title: "Liquidité n° 1", text: "Le plus gros open interest et le plus fort volume de futures de toutes les plateformes." },
    { title: "Frais bas sur les futures", text: "0,02 % maker / 0,05 % taker au niveau standard, 10 % de moins avec le BNB." },
    { title: "Tout dans une seule application", text: "Futures, options, bots, copy trading et Earn sur un seul compte." },
  ],
  pros: [
    "Liquidité inégalée sur les contrats perpétuels BTC, ETH et des principaux altcoins",
    "Frais standard compétitifs, avec une réduction supplémentaire en BNB",
    "Une preuve de réserves vérifiable par vous-même et le fonds SAFU d'environ 1 milliard de dollars",
    "Possibilité de lier un code de parrainage manquant dans les 30 jours",
  ],
  cons: [
    "Indisponible aux États-Unis, au Canada et aux Pays-Bas",
    "Vérification d'identité obligatoire avant tout dépôt ou trade",
    "Levier limité à 20x pour les nouveaux comptes futures pendant les 30 premiers jours",
    "Résidents de l'EEE exclus du programme de parrainage depuis juillet 2026",
  ],
  bestFor: [
    "Traders de futures actifs qui ont besoin d'une liquidité profonde",
    "Traders qui veulent une seule plateforme pour tout",
    "Utilisateurs à fort volume qui profitent des niveaux VIP",
  ],
  signupTip:
    "Terminez la vérification d'identité tout de suite : Binance ne laisse pas les nouveaux comptes déposer ni trader sans elle, et n'attribue les tâches de bienvenue qu'une fois votre compte vérifié.",
  safety:
    "Binance publie une preuve de réserves qui, selon elle, montre que tous les soldes des comptes sont couverts à 1:1 (l'audit du 12 novembre 2026 affichait un ratio de réserves BTC de 100,05 %) et vous permet de vérifier votre propre compte dans Wallet → Verification. La protection du compte comprend la double authentification, les clés d'accès (passkeys) et une liste blanche d'adresses de retrait. Le fonds SAFU doit protéger les utilisateurs dans les cas extrêmes. Aucune plateforme centralisée n'est sans risque : n'y laissez que les fonds avec lesquels vous tradez activement.",
  restricted:
    "La liste des pays interdits de Binance (mise à jour le 5 janvier 2026) cite les États-Unis, le Canada, les Pays-Bas, Cuba, la Corée du Nord, l'Iran, la Crimée et les républiques dites populaires de Donetsk et de Louhansk.",
  faqs: [
    {
      topic: "referral",
      q: "Le code de parrainage Binance REFCO888 fonctionne-t-il ?",
      a: "Oui. Le 16 novembre 2026, le lien binance.com/register?ref=REFCO888 ouvrait la page d'inscription officielle de Binance, qui affichait le code REFCO888 à côté du formulaire d'inscription.",
    },
    {
      topic: "referral",
      q: "Quelle est la différence entre Binance Referral Pro et Referral Lite ?",
      a: "Ce sont deux modes distincts, et un nouvel utilisateur ne peut relever que de l'un d'eux. Avec Referral Pro, le parrain touche une commission sur vos frais de trading et peut vous en reverser une partie sous forme de remise payée en USDC. Avec Referral Lite, parrain et filleul reçoivent des bons de remise sur les frais de trading pour l'accomplissement de petites tâches liées au premier achat et au premier trade. REFCO888 est un code Referral Pro : les bons Lite ne s'appliquent donc pas.",
    },
    {
      topic: "referral",
      q: "Existe-t-il un code de parrainage distinct pour Binance Futures ?",
      a: "Binance affiche un champ facultatif “Futures Referral ID” à l'ouverture d'un compte Futures. Il n'accepte que le code du parrain dont vous avez utilisé le code ou le lien Referral Pro pour vous inscrire : dans les faits, un seul parrainage couvre donc le spot, la marge et les futures.",
    },
    {
      topic: "referral",
      q: "Peut-on modifier son code parrain Binance après coup ?",
      a: "Non. Binance indique qu'une fois la relation de parrainage établie, elle ne peut être ni modifiée ni supprimée. Seul un compte sans aucun parrainage peut en lier un, dans les 30 jours suivant l'inscription et avant son premier dépôt ou trade.",
    },
    {
      topic: "referral",
      q: "Le code de parrainage Binance fonctionne-t-il dans l'UE ?",
      a: "Plus maintenant. Selon les conditions de parrainage de Binance, les utilisateurs inscrits dans un pays de l'Espace économique européen (EEE) n'ont plus le droit de participer au Binance Referral Program depuis le 1er juillet 2026. Ces conditions prévoient aussi des restrictions pour le Royaume-Uni, Singapour, le Japon, la Turquie, Hong Kong et Israël.",
    },
    {
      topic: "signup",
      q: "Peut-on s'inscrire sur Binance avec Google, Apple ou Telegram ?",
      a: "Oui. En plus de l'adresse e-mail ou du numéro de téléphone, la page d'inscription de Binance propose “Continue with Google”, “Continue with Apple” et “Continue with Telegram”.",
    },
    {
      topic: "signup",
      q: "Quelles sont les exigences pour le mot de passe Binance ?",
      a: "Un mot de passe Binance doit comporter au moins 8 caractères, dont une majuscule et un chiffre.",
    },
    {
      topic: "signup",
      q: "Combien de temps le code de vérification Binance est-il valable ?",
      a: "Le code à 6 chiffres que Binance envoie sur votre adresse e-mail ou votre téléphone lors de l'inscription reste valable 30 minutes.",
    },
    {
      topic: "signup",
      q: "Combien de temps prend la vérification d'identité (KYC) sur Binance ?",
      a: "Selon Binance, l'examen est généralement bouclé sous 48 heures, une fois votre document envoyé et la vérification faciale réussie.",
    },
    {
      topic: "signup",
      q: "Peut-on utiliser Binance sans KYC ?",
      a: "Non. Tous les nouveaux utilisateurs doivent être vérifiés avant de pouvoir utiliser les produits Binance, y compris les dépôts de cryptos et les trades. Les anciens comptes non vérifiés peuvent seulement effectuer des retraits.",
    },
    {
      topic: "bonus",
      q: "Quel est le bonus de bienvenue Binance pour les nouveaux utilisateurs ?",
      a: "Binance propose aux nouveaux utilisateurs trois tâches pour débutants qui débloquent jusqu'à 100 USD de bons de remise sur les frais de trading. Binance n'attribue ces tâches qu'une fois la vérification du compte terminée, et chaque bon rembourse un pourcentage fixe de vos frais de trading spot.",
    },
    {
      topic: "bonus",
      q: "Peut-on retirer le bonus de bienvenue Binance ?",
      a: "Non. La récompense est un bon de remise sur les frais de trading, pas de l'argent : il rembourse des frais de trading spot, ne s'applique pas aux trades passés via l'API et ne s'utilise que dans l'application Binance.",
    },
    {
      topic: "bonus",
      q: "Quels pays sont exclus des bons de bienvenue Binance ?",
      a: "Les conditions de Binance excluent notamment le Royaume-Uni, les États-Unis, le Canada, les Pays-Bas, la Croatie, la Norvège, l'Islande, le Liechtenstein, la Serbie, l'Albanie, la Russie, le Japon, Singapour et Hong Kong. La liste complète figure dans l'article d'aide de Binance consacré aux récompenses de bienvenue.",
    },
    {
      topic: "fees",
      q: "Quelle est la réduction BNB sur les frais Binance ?",
      a: "En payant les frais en BNB, vous obtenez 25 % de réduction sur les frais spot (0,075 % au lieu de 0,10 % pour les utilisateurs classiques) et 10 % sur les frais des futures USDⓈ-M, soit 0,018 % maker et 0,045 % taker.",
    },
    {
      topic: "fees",
      q: "Quel est le levier maximal sur Binance ?",
      a: "Jusqu'à 150x sur les contrats perpétuels USDⓈ-M BTCUSDT et ETHUSDT pour des positions allant jusqu'à 300 000 USDT, et jusqu'à 125x sur le contrat perpétuel BTCUSD à marge en crypto. Les comptes futures de moins de 30 jours ne peuvent pas dépasser 20x. Un effet de levier élevé augmente fortement le risque de liquidation.",
    },
    {
      topic: "fees",
      q: "Quels sont les frais des futures COIN-M sur Binance ?",
      a: "Les utilisateurs classiques paient 0,02 % maker et 0,05 % taker sur les futures COIN-M, soit les mêmes taux que sur les contrats USDⓈ-M à marge en USDT.",
    },
    {
      topic: "safety",
      q: "Binance est-elle disponible aux États-Unis ?",
      a: "Non. Binance place les États-Unis sur sa liste des pays interdits, avec le Canada et les Pays-Bas.",
    },
    {
      topic: "safety",
      q: "Qu'est-ce que le fonds SAFU de Binance ?",
      a: "Le SAFU (Secure Asset Fund for Users) est un fonds d'urgence créé par Binance en 2018 pour protéger les utilisateurs dans les cas extrêmes. Selon Binance, il détenait en février 2026 des actifs crypto d'une valeur d'environ 1 milliard de dollars et il est réapprovisionné s'il passe sous les 800 millions de dollars.",
    },
    {
      topic: "safety",
      q: "Comment vérifier la preuve de réserves de Binance ?",
      a: "Binance publie ses ratios de réserves sur sa page de preuve de réserves et s'appuie sur un arbre de Merkle et des zk-SNARKs. Les utilisateurs connectés peuvent confirmer dans Wallet → Verification que leur propre solde est inclus.",
    },
  ],
};
