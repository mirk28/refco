import type { ExchangeText } from "../../types";

export const bybit: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Champ “Referral Code (Optional)” du formulaire d'inscription",
    apply:
      "Saisissez-le dans le champ “Referral Code (Optional)” du formulaire d'inscription, ou ouvrez le lien d'inscription de cette page, qui remplit le champ à votre place.",
    whereToEnter:
      "Le formulaire d'inscription de Bybit comporte un champ intitulé “Referral Code (Optional)”. Sur le site, vous y arrivez après avoir saisi votre adresse e-mail ou votre numéro de téléphone ; dans l'application, une étape plus tard. Dans les deux cas, il apparaît avant que vous appuyiez sur “Sign Up Now”. Le lien de cette page ouvre la page d'invitation de Bybit avec VN3KGLE déjà inscrit dans ce champ. Le champ reste modifiable : vérifiez donc que le code y figure toujours avant de valider.",
    afterSignupShort: "Non – uniquement lors de l'inscription",
    afterSignup:
      "Non. Le guide d'inscription de Bybit indique qu'une fois inscrit, vous ne pourrez plus ajouter, modifier ni supprimer votre code de parrainage ou d'affiliation. La seule exception que Bybit documente concerne les codes d'affiliation : on peut les ajouter dans les 14 jours sur un compte principal qui n'a pas encore de code. Bybit précise explicitement que les codes du programme de parrainage (Referral Program), comme VN3KGLE, n'y sont pas pris en charge.",
    inviteeReward:
      "Dans le cadre du programme de parrainage de Bybit, le filleul peut gagner jusqu'à 250 USDT : 50 USDT pour un premier trade d'au moins 50 $ dans les 14 jours suivant l'inscription, 100 USDT pour au moins 500 $ de volume de trading cumulé dans les 30 jours suivant ce premier trade, puis encore 100 USDT pour au moins 10 000 $ sur ces mêmes 30 jours. La page d'invitation de Bybit met aussi en avant des récompenses pour les filleuls qui s'inscrivent et terminent la vérification d'identité, et les nouveaux utilisateurs reçoivent les Welcome Gifts de 100 USDT dans le Rewards Hub.",
    guide: [
      "Le programme de parrainage de Bybit récompense le parrain et le filleul avec les mêmes montants : c'est pourquoi Bybit l'annonce avec la formule “up to 500 USDT combined”, soit jusqu'à 500 USDT à eux deux. En tant que filleul, vous débloquez votre part en trois étapes liées à votre propre trading : un premier trade d'au moins 50 $ dans les 14 jours suivant l'inscription, puis 500 $ et 10 000 $ de volume cumulé dans les 30 jours qui suivent. Le volume réalisé sur le spot, les dérivés et les options compte ; les trades sur des paires sans frais, non.",
      "Chaque récompense passe par un examen des risques de 3 jours, puis doit être récupérée dans les 10 jours, faute de quoi elle expire. Bybit plafonne le programme avec une enveloppe mensuelle de 500 000 USDT, distribuée selon le principe du premier arrivé, premier servi. Ces conditions s'appliquent aux comptes ouverts sur le site mondial à partir du 10 octobre 2026.",
      "C'est votre pays de résidence qui détermine si le code sert à quelque chose. Les conditions du programme de parrainage de Bybit précisent qu'il n'existe pas de programme de parrainage en Allemagne, au Royaume-Uni, en France, en Belgique et à Hong Kong, et que le programme n'est pas ouvert aux résidents de l'Espace économique européen (EEE) parrainés au sein de l'EEE. Les résidents de l'EEE utilisent Bybit EU (bybit.eu), une plateforme distincte exploitée par Bybit EU GmbH à Vienne, avec sa propre offre de parrainage, plus modeste.",
    ],
  },
  signup: {
    methods: ["une adresse e-mail", "un numéro de téléphone", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Ouvrez la page d'inscription de Bybit",
        text: "Utilisez le bouton d'inscription de cette page. Il ouvre la page d'invitation de Bybit avec le code de parrainage VN3KGLE déjà renseigné.",
      },
      {
        title: "Sélectionnez votre pays de résidence",
        text: "Bybit le demande en premier, car les produits et les récompenses dépendent de votre lieu de résidence.",
      },
      {
        title: "Saisissez votre adresse e-mail ou votre numéro de téléphone",
        text: "Vous pouvez aussi continuer avec Google, Apple ou Telegram.",
      },
      {
        title: "Vérifiez le code de parrainage",
        text: "Le champ “Referral Code (Optional)” doit afficher VN3KGLE. C'est votre seule chance : Bybit ne permet pas d'ajouter ni de modifier le code par la suite.",
      },
      {
        title: "Saisissez le code de vérification et choisissez un mot de passe",
        text: "Confirmez le code que Bybit vous envoie, choisissez un mot de passe et appuyez sur “Sign Up Now”. Dans l'application (version 4.47.0 ou ultérieure), vous pouvez aussi configurer une clé d'accès (passkey).",
      },
      {
        title: "Terminez la vérification d'identité",
        text: "Bybit exige le niveau de vérification Standard avant tout dépôt ou trade.",
      },
    ],
    kycShort: "Obligatoire pour tous les produits (niveau Standard)",
    kyc: "Oui. Bybit exige au minimum la vérification d'identité de niveau Standard pour tous les produits. Sans elle, un compte ne peut ni déposer ni trader, seulement retirer : jusqu'à 20 000 USDT par jour et 100 000 USDT par mois. La vérification Standard (une pièce d'identité et une évaluation d'identité) porte la limite de retrait quotidienne à 1 million d'USDT, la vérification Advanced, avec justificatif de domicile, à 2 millions d'USDT.",
    documents:
      "Bybit accepte le passeport, la carte d'identité, le titre de séjour ou le permis de conduire. Seuls les documents physiques sont acceptés, et le niveau Advanced exige en plus un justificatif de domicile.",
    minAge: "18 ans",
  },
  welcomeTasks: [
    { task: "Parrainage : premier trade d'au moins 50 $ dans les 14 jours suivant l'inscription", reward: "50 USDT" },
    { task: "Parrainage : au moins 500 $ de volume de trading cumulé dans les 30 jours suivant le premier trade", reward: "100 USDT" },
    { task: "Parrainage : au moins 10 000 $ de volume de trading cumulé sur ces mêmes 30 jours", reward: "100 USDT" },
    { task: "Welcome Gifts : terminer la vérification d'identité", reward: "Fee Saver de 20 USDT (dérivés)" },
    { task: "Welcome Gifts : déposer au moins 10 $", reward: "Position Airdrop de 30 USDT (dérivés)" },
    { task: "Welcome Gifts : trader au moins 10 $", reward: "Fee Saver de 50 USDT (dérivés)" },
  ],
  tokenDiscount:
    "Payer les frais en MNT réduit de 25 % les frais spot (0,075 % au niveau VIP 0) et de 10 % les frais sur les futures (0,018 % maker / 0,0495 % taker). La réduction ne s'applique pas aux contrats inverses, aux bots de trading, aux copieurs en copy trading ni au trading via API.",
  extraFeeMarkets: ["Options"],
  sourceLabels: [
    "Bybit : comment créer un compte",
    "Bybit : programme de parrainage – FAQ générale",
    "Bybit : page et conditions du programme de parrainage",
    "Bybit : ajouter et vérifier un code d'affiliation enregistré",
    "Bybit : Rewards Hub (Welcome Gifts)",
    "Bybit : FAQ du Rewards Hub",
    "Bybit : structure des frais de trading",
    "Bybit : payer les frais de trading en MNT",
    "Bybit : paramètres de marge (paliers de levier)",
    "Bybit : FAQ sur le KYC des particuliers",
    "Bybit : avantages des différents niveaux de KYC",
    "Bybit : pays où le service est restreint",
    "Bybit : à propos",
    "Bybit : preuve de réserves",
    "Bybit : chronologie de l'incident de sécurité (février 2025)",
    "Bybit : Bybit Europe et MiCAR",
    "Bybit EU : programme de parrainage",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Dérivés", "Options"],
  bonusHeadline: "Jusqu'à 250 USDT de récompenses de parrainage",
  benefits: [
    "Jusqu'à 250 USDT pour le filleul : 50 USDT après un premier trade d'au moins 50 $ dans les 14 jours, puis 100 USDT à chacun des paliers de 500 $ et de 10 000 $ de volume",
    "100 USDT de Welcome Gifts dans le Rewards Hub pour la vérification d'identité, un dépôt de 10 $ et un trade de 10 $",
    "Un seul code de parrainage pour tout le compte : les volumes en spot, en dérivés et en options comptent tous",
    "25 % de réduction sur les frais spot et 10 % sur les frais des futures si vous payez les frais en MNT",
  ],
  benefitNote:
    "Les récompenses de parrainage concernent les comptes ouverts sur le site mondial de Bybit à partir du 10 octobre 2026. Elles passent par un examen des risques de 3 jours, doivent être récupérées dans les 10 jours et proviennent d'une enveloppe mensuelle de 500 000 USDT (premier arrivé, premier servi). Bybit ne propose aucun programme de parrainage en Allemagne, au Royaume-Uni, en France, en Belgique et à Hong Kong, et ne l'ouvre pas aux résidents de l'EEE parrainés au sein de l'EEE. Les Welcome Gifts exigent la vérification d'identité de niveau 1, varient selon l'utilisateur et la région, expirent et ne peuvent pas être retirés.",
  headquarters: "Dubaï, Émirats arabes unis",
  regulation: "Agrément MiCAR via Bybit EU GmbH, Vienne (supervisée par la FMA autrichienne), pour l'EEE hors Malte",
  users: "Plus de 90 millions d'utilisateurs (selon Bybit)",
  assets: "390 cryptomonnaies, 509 paires spot (Bybit API)",
  maxLeverage: "Jusqu'à 150x (contrat perpétuel BTCUSDT)",
  feeNote:
    "Les taux baissent avec le niveau VIP (le niveau Supreme VIP paie 0 % maker sur les dérivés) et peuvent varier selon la région ; la page “My Fee Rate” de votre compte fait foi.",
  products: [
    "Contrats perpétuels USDT et USDC",
    "Contrats inverses",
    "Options",
    "Spot",
    "Copy trading",
    "Bots de trading",
    "Compte de trading unifié",
  ],
  tagline: "Moteur de trading rapide, pensé d'abord pour les dérivés",
  quickAnswer:
    "Le code de parrainage Bybit est VN3KGLE. Saisissez-le dans le champ “Referral Code (Optional)” lors de l'inscription : le bouton de cette page le renseigne à votre place. Il doit y figurer dès l'inscription, car Bybit ne permet pas d'ajouter ni de modifier un code de parrainage par la suite. Les filleuls peuvent gagner jusqu'à 250 USDT en trois étapes de trading, à commencer par 50 USDT pour un premier trade de 50 $ dans les 14 jours.",
  about: [
    "Bybit a vu le jour en 2018 comme plateforme de produits dérivés et a transféré son siège à Dubaï en 2023. Elle revendique aujourd'hui plus de 90 millions d'utilisateurs dans plus de 181 pays et se présente comme la deuxième plateforme mondiale par volume de trading. Elle reste taillée pour les traders actifs : saisie rapide des ordres, compte de trading unifié et application mobile soignée.",
    "Outre les contrats perpétuels en USDT et en USDC, Bybit propose des contrats inverses, des options, du spot, du copy trading et des bots de trading. Au niveau standard, vous payez 0,02 % maker et 0,055 % taker sur les contrats perpétuels et les futures (contrats à terme), et 0,1 % sur le spot. L'effet de levier monte jusqu'à 150x sur le contrat perpétuel BTCUSDT dans le palier de risque le plus bas, puis diminue à mesure que la position grossit. Les clients européens dépendent de Bybit EU GmbH, à Vienne : supervisée par la FMA autrichienne au titre de MiCAR, cette entité couvre l'Espace économique européen (EEE) à l'exception de Malte.",
    "Le 21 février 2025, des pirates ont dérobé environ 1,46 milliard de dollars dans l'un des portefeuilles froids Ethereum de Bybit, soit le plus gros piratage de l'histoire de la crypto. Bybit a maintenu les retraits ouverts, a remplacé l'ETH manquant grâce à des prêts relais, à des dépôts importants et à des achats de gré à gré (OTC), et un audit de preuve de réserves mené par Hacken le 24 février a montré que le trou était comblé en 72 heures. Selon Bybit, les actifs des clients sont restés couverts à 1:1 tout au long de l'épisode.",
  ],
  highlights: [
    { title: "L'ADN des dérivés", text: "Pensée pour les traders de futures dès le premier jour, avec un moteur d'appariement rapide." },
    { title: "Jusqu'à 250 USDT", text: "Des récompenses de parrainage en trois étapes, liées à votre propre volume de trading." },
    { title: "Trou comblé en 72 heures", text: "Après le piratage de 2025, Bybit a maintenu les retraits ouverts et reconstitué ses réserves." },
  ],
  pros: [
    "Moteur rapide et stable, application mobile de premier plan",
    "Large choix de contrats perpétuels, de contrats inverses et d'options",
    "Récompenses de parrainage claires, jusqu'à 250 USDT pour le filleul",
    "Preuve de réserves avec auto-vérification par arbre de Merkle",
  ],
  cons: [
    "Incident de sécurité majeur en février 2025 (1,46 milliard de dollars dérobés dans un portefeuille froid Ethereum)",
    "Impossible d'ajouter ou de modifier un code de parrainage après l'inscription",
    "Pas de programme de parrainage pour les résidents de l'EEE ni pour l'Allemagne, le Royaume-Uni, la France, la Belgique et Hong Kong",
    "Indisponible aux États-Unis, au Canada, à Singapour, à Hong Kong et en Chine continentale",
  ],
  bestFor: ["Traders actifs de contrats perpétuels", "Traders qui privilégient le mobile", "Utilisateurs qui veulent du copy trading sur les dérivés"],
  signupTip:
    "Vérifiez le champ “Referral Code (Optional)” avant d'appuyer sur “Sign Up Now” : il est impossible de le corriger après coup. Faites ensuite votre premier trade d'au moins 50 $ dans les 14 jours pour débloquer les 50 premiers USDT.",
  safety:
    "Bybit conserve les actifs des clients dans des portefeuilles froids multisignatures et publie une preuve de réserves qui, selon elle, montre une couverture à 1:1. Lors de notre vérification, le dernier instantané datait du 27 octobre 2026, et vous pouvez contrôler votre propre solde grâce à une vérification par arbre de Merkle et à un outil open source. Pour protéger votre compte, Bybit propose Google Authenticator et un code anti-phishing. Le piratage de février 2025 montre que même les grandes plateformes ne sont pas à l'abri d'une intrusion : ne laissez sur la plateforme que le capital destiné au trading.",
  restricted:
    "Bybit classe parmi les pays et régions à service restreint : les États-Unis, la Chine continentale, Hong Kong, Singapour, le Canada, la Corée du Nord, Cuba, l'Iran, l'Ouzbékistan, le Soudan, la Syrie, ainsi que la Crimée, Sébastopol et les parties des régions de Donetsk, Louhansk, Kherson et Zaporijia non contrôlées par le gouvernement. Au Royaume-Uni, Bybit n'accepte aucune nouvelle inscription et, depuis le 21 octobre 2026, les comptes du Royaume-Uni sont limités aux retraits.",
  faqs: [
    {
      topic: "referral",
      q: "VN3KGLE est-il un code parrain Bybit valide ?",
      a: "Oui. Le 16 novembre 2026, le lien de cette page a ouvert la page d'invitation de Bybit avec VN3KGLE prérempli dans le champ “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Un code de parrainage Bybit est-il la même chose qu'un code d'affiliation ?",
      a: "Non. Bybit les traite différemment : un code d'affiliation peut être ajouté dans les 14 jours suivant l'inscription sur un compte principal qui n'a pas encore de code, alors que les codes du programme de parrainage, comme VN3KGLE, ne peuvent plus du tout être ajoutés après l'inscription.",
    },
    {
      topic: "referral",
      q: "Le code de parrainage Bybit fonctionne-t-il dans l'UE ?",
      a: "Non. Les conditions du programme de parrainage de Bybit précisent qu'il n'est pas ouvert aux résidents de l'Espace économique européen (EEE) parrainés au sein de l'EEE et qu'il n'existe pas de programme de parrainage en Allemagne, en France et en Belgique. Les résidents de l'EEE utilisent Bybit EU (bybit.eu), qui gère sa propre offre de parrainage.",
    },
    {
      topic: "referral",
      q: "Quels trades comptent pour les récompenses de parrainage Bybit ?",
      a: "Le volume de trading réalisé sur le spot, les dérivés et les options compte, et Bybit cite aussi Alpha, Convert et quelques produits plus récents. Les trades sur des paires sans frais sont exclus.",
    },
    {
      topic: "signup",
      q: "Peut-on s'inscrire sur Bybit avec Google, Apple ou Telegram ?",
      a: "Oui. L'inscription sur Bybit propose Google, Apple et Telegram en plus de l'adresse e-mail ou du numéro de téléphone. Dans l'application (version 4.47.0 ou ultérieure), vous pouvez aussi créer une clé d'accès (passkey).",
    },
    {
      topic: "signup",
      q: "Peut-on utiliser Bybit sans KYC ?",
      a: "Pas pour trader. Sans vérification d'identité, un compte Bybit ne peut ni déposer ni trader ; il peut seulement retirer, jusqu'à 20 000 USDT par jour et 100 000 USDT par mois.",
    },
    {
      topic: "signup",
      q: "Quels sont les niveaux KYC et les limites de retrait sur Bybit ?",
      a: "La vérification Standard (pièce d'identité et évaluation d'identité) permet de retirer jusqu'à 1 million d'USDT par jour. La vérification Advanced, qui ajoute un justificatif de domicile, relève la limite à 2 millions d'USDT par jour. Un niveau Pro avec vigilance renforcée existe pour des limites plus élevées.",
    },
    {
      topic: "bonus",
      q: "Combien rapporte le bonus de parrainage Bybit aux nouveaux utilisateurs ?",
      a: "Jusqu'à 250 USDT pour le filleul : 50 USDT pour un premier trade d'au moins 50 $ dans les 14 jours suivant l'inscription, 100 USDT pour 500 $ de volume cumulé dans les 30 jours suivant ce trade et 100 USDT pour 10 000 $ sur la même période. Le parrain reçoit les mêmes montants, c'est pourquoi Bybit annonce jusqu'à 500 USDT au total.",
    },
    {
      topic: "bonus",
      q: "Que sont les Welcome Gifts de Bybit ?",
      a: "Le Rewards Hub de Bybit affiche 100 USDT de Welcome Gifts : un Fee Saver de 20 USDT pour la vérification d'identité, un Position Airdrop de 30 USDT pour un dépôt d'au moins 10 $ et un Fee Saver de 50 USDT pour un trade d'au moins 10 $, tous réservés aux dérivés. Les tâches varient selon l'utilisateur et la région.",
    },
    {
      topic: "bonus",
      q: "Faut-il récupérer soi-même les récompenses de parrainage Bybit ?",
      a: "Oui. Chaque récompense passe d'abord par un examen des risques de 3 jours, puis doit être récupérée dans les 10 jours, sinon elle expire. Les récompenses proviennent d'une enveloppe mensuelle de 500 000 USDT et sont versées selon le principe du premier arrivé, premier servi.",
    },
    {
      topic: "bonus",
      q: "Peut-on retirer les Welcome Gifts de Bybit ?",
      a: "Non. Bybit indique que les récompenses du Rewards Hub expirent et ne peuvent pas être retirées. Les Fee Savers compensent les frais de trading, et les Position Airdrops servent de marge pour le trading de dérivés.",
    },
    {
      topic: "fees",
      q: "Quels sont les frais futures de Bybit ?",
      a: "Au niveau VIP 0, vous payez 0,02 % maker et 0,055 % taker sur les contrats perpétuels et les futures, 0,1 % sur le spot et 0,02 % maker / 0,03 % taker sur les options. Payer en MNT réduit les frais sur les futures de 10 %, à 0,018 % / 0,0495 %.",
    },
    {
      topic: "fees",
      q: "Quel est le levier maximal sur Bybit ?",
      a: "Jusqu'à 150x sur le contrat perpétuel BTCUSDT dans le premier palier de risque (positions jusqu'à 300 000 USDT) ; le maximum tombe à 100x au palier suivant, puis baisse encore à mesure que la position grossit. Un effet de levier élevé augmente fortement le risque de liquidation.",
    },
    {
      topic: "fees",
      q: "Quelle réduction des frais offre MNT sur Bybit ?",
      a: "Payer les frais en MNT donne 25 % de réduction sur les frais spot et 10 % sur les frais des futures. La réduction ne s'applique pas aux contrats inverses, aux bots de trading, aux copieurs en copy trading ni au trading via API.",
    },
    {
      topic: "safety",
      q: "Bybit a-t-elle été piratée ?",
      a: "Oui. Le 21 février 2025, des pirates ont dérobé environ 1,46 milliard de dollars dans un portefeuille froid Ethereum. Bybit n'a pas suspendu les retraits, s'est procuré de l'ETH de remplacement grâce à des prêts relais, à des dépôts importants et à des achats de gré à gré (OTC), et un audit de preuve de réserves de Hacken du 24 février a montré que le trou était comblé en 72 heures.",
    },
    {
      topic: "safety",
      q: "Bybit est-elle disponible au Royaume-Uni ?",
      a: "Non. Bybit n'accepte aucune nouvelle inscription depuis le Royaume-Uni et, depuis le 21 octobre 2026, les comptes de résidents du Royaume-Uni sont limités aux retraits.",
    },
    {
      topic: "safety",
      q: "Bybit est-elle disponible en Europe ?",
      a: "Les résidents de l'Espace économique européen (EEE) dépendent de Bybit EU GmbH, à Vienne. Supervisée par l'Autorité autrichienne des marchés financiers (FMA) au titre de MiCAR, cette entité couvre l'EEE à l'exception de Malte. Il s'agit d'une plateforme distincte, avec ses propres frais et sa propre gamme de produits.",
    },
  ],
};
