import type { ExchangeText } from "../../types";

export const mexc: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Champ “Referral Code (Optional)” du formulaire d'inscription (sensible à la casse)",
    apply:
      "Saisissez-le dans le champ “Referral Code (Optional)” du formulaire d'inscription, en respectant les majuscules et les minuscules, ou ouvrez le lien d'inscription de cette page : il remplit le champ et le verrouille.",
    whereToEnter:
      "Le formulaire d'inscription de MEXC comporte un champ intitulé “Referral Code (Optional)”, avec l'indication “Enter invitation code (case-sensitive)” : le code est sensible à la casse, tapez donc 4E3xM exactement tel quel, avec le E et le M en majuscules. Sur le site, cochez “Enter Referral Code” pour faire apparaître le champ ; dans l'application, touchez la petite flèche pour le déplier. Le lien de cette page ouvre la page d'invitation de MEXC avec 4E3xM déjà renseigné et le champ verrouillé.",
    afterSignupShort: "Oui – dans les 30 jours suivant l'inscription",
    afterSignup:
      "Oui. MEXC propose une fonction en libre-service pour lier un parrain après l'inscription : seuls les comptes créés au cours des 30 derniers jours y ont droit, elle s'adresse aux comptes principaux, et la liaison se fait par code de parrainage ou par l'UID du parrain. Le parrain doit s'être inscrit avant vous. Une fois un code d'invitation lié, il ne peut plus être modifié ni supprimé, précise MEXC.",
    inviteeReward:
      "MEXC n'accorde pas de réduction permanente des frais aux filleuls. Le code donne en revanche accès à l'événement de parrainage de MEXC : sa page d'invitation affiche, pour les inscriptions par parrainage, une récompense supplémentaire allant jusqu'à 140 USDT, en plus des récompenses pour nouveaux utilisateurs pouvant atteindre 10 000 USDT. La récompense de parrainage est versée en bonus futures lorsque vous accomplissez une tâche de dépôt net et une tâche de trading sur les futures dans les 7 jours suivant l'inscription.",
    guide: [
      "Sur MEXC, le code de parrainage remplit deux fonctions. Il enregistre qui vous a invité (le parrain touche une commission sur vos trades spot et futures) et il vous donne accès à l'événement de parrainage que MEXC organise pour les nouveaux inscrits. Cet événement fonctionne par paliers : 50 USDT pour un dépôt net d'au moins 100 $ et 1 000 $ de volume sur les futures, 90 USDT à 10 000 $ de volume futures et 140 USDT à 20 000 $, le tout dans les 7 jours suivant l'inscription et après le KYC primaire.",
      "Les récompenses prennent la forme de bonus futures, de bons de remise sur les frais et d'airdrops de positions, pas d'argent liquide. MEXC présente l'événement comme limité dans le temps et “only open to designated users” (réservé à des utilisateurs désignés), et la FAQ de l'événement précise que le bonus de parrainage n'est cumulable ni avec l'événement à 10 000 USDT ni avec les bonus du Rewards Hub, alors même que la page d'invitation met les deux en avant ensemble. Seuls comptent les montants affichés dans votre propre compte après l'inscription.",
      "Comme le code est sensible à la casse, le lien reste le moyen le plus sûr de le faire prendre en compte. Si vous vous êtes inscrit sans lui, vous avez encore 30 jours pour le lier vous-même.",
    ],
  },
  signup: {
    methods: ["une adresse e-mail", "un numéro de téléphone", "Google", "Apple", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Ouvrez la page d'inscription de MEXC",
        text: "Utilisez le bouton d'inscription de cette page. MEXC ouvre la page “Your Friend Invites You to Join MEXC” avec le code de parrainage 4E3xM déjà renseigné et verrouillé.",
      },
      {
        title: "Saisissez votre adresse e-mail ou votre numéro de téléphone et un mot de passe",
        text: "Vous pouvez aussi continuer avec Google, Apple, Telegram ou MetaMask. Le mot de passe doit compter au moins 10 caractères, avec des majuscules et des minuscules, un chiffre et un symbole.",
      },
      {
        title: "Vérifiez le code de parrainage",
        text: "Le champ “Referral Code (Optional)” doit afficher 4E3xM. Si vous le tapez vous-même, faites attention aux majuscules : le code est sensible à la casse.",
      },
      {
        title: "Résolvez le puzzle coulissant",
        text: "MEXC affiche un puzzle coulissant comme contrôle de sécurité.",
      },
      {
        title: "Saisissez le code à 6 chiffres",
        text: "Tapez le code de vérification à 6 chiffres que MEXC vous envoie, puis sélectionnez “Confirm”.",
      },
      {
        title: "Terminez la vérification KYC",
        text: "Terminez le KYC primaire pour débloquer les récompenses et éviter les restrictions sur les dépôts, les retraits et le trading.",
      },
    ],
    kycShort: "Nécessaire pour les dépôts, les retraits et le trading",
    kyc: "En pratique, oui. MEXC indique qu'une vérification KYC non terminée peut limiter votre accès à des services comme les dépôts, les retraits et le trading, et ses récompenses exigent au minimum le KYC primaire. Le KYC primaire autorise des retraits crypto de 80 BTC par jour ; le KYC avancé porte ce plafond à 200 BTC par jour et ajoute des limites en monnaie fiat de 20 000 USD par jour. Le spot, les futures et les événements sont accessibles aux deux niveaux.",
    documents: "MEXC accepte une carte d'identité, un passeport, un permis de conduire ou un titre de séjour.",
    minAge:
      "Majorité légale dans votre pays : les conditions d'utilisation de MEXC exigent l'âge légal pour conclure un contrat contraignant, sans fixer d'âge précis",
  },
  welcomeTasks: [
    { task: "S'inscrire", reward: "Bon de 10 USDT" },
    { task: "Première connexion dans l'application", reward: "Bon de 10 USDT" },
    { task: "Terminer le KYC primaire dans les 7 jours", reward: "Airdrop d'une position BTCUSDT de 200 $" },
    { task: "Trading cumulé sur les futures (palier le plus haut : au moins 1 000 000 USDT)", reward: "Bonus futures jusqu'à 7 620 USDT" },
    { task: "Événement de parrainage : dépôt net d'au moins 100 $ et 1 000 $ de volume futures dans les 7 jours", reward: "50 USDT en bonus futures" },
    { task: "Événement de parrainage : volume futures d'au moins 10 000 $ dans les 7 jours", reward: "90 USDT en bonus futures" },
    { task: "Événement de parrainage : volume futures d'au moins 20 000 $ dans les 7 jours", reward: "140 USDT en bonus futures" },
  ],
  tokenDiscount:
    "Payer les frais en MX donne droit à 20 % de réduction sur les frais spot et futures ; pour les futures, les MX doivent se trouver dans votre portefeuille Futures. L'ancienne réduction de 50 % accordée pour la détention d'au moins 500 MX est suspendue depuis le 9 février 2026.",
  extraFeeMarkets: ["Futures Coin-M (BTCUSD, ETHUSD)"],
  sourceLabels: [
    "MEXC : processus d'inscription (web)",
    "MEXC : processus d'inscription (application)",
    "MEXC : guide du parrainage",
    "MEXC : guide de liaison d'un parrain en libre-service",
    "MEXC : événement de parrainage et règles",
    "MEXC : Rewards Hub (récompenses pour nouveaux utilisateurs)",
    "MEXC : annonce des récompenses de bienvenue (validité des bonus)",
    "MEXC : grille des frais",
    "MEXC : utiliser le MX pour réduire les frais de trading",
    "MEXC : lancement du levier 500x sur les futures",
    "MEXC : FAQ sur le KYC",
    "MEXC : questions fréquentes sur la vérification KYC",
    "MEXC : conditions d'utilisation (juridictions interdites)",
    "MEXC Learn : pays restreints",
    "MEXC : à propos",
    "MEXC : pourquoi MEXC (paires et contrats)",
    "MEXC : preuve de réserves",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futures"],
  bonusHeadline: "Jusqu'à 10 000 USDT de récompenses pour les nouveaux utilisateurs",
  benefits: [
    "Récompenses pour nouveaux utilisateurs jusqu'à 10 000 USDT dans le Rewards Hub : bons, airdrops de positions et bonus futures",
    "Pour une inscription par parrainage, MEXC affiche une récompense supplémentaire allant jusqu'à 140 USDT en bonus futures",
    "Frais maker de 0 % sur le spot et sur la plupart des contrats futures",
    "Le code peut encore être lié dans les 30 jours suivant l'inscription",
  ],
  benefitNote:
    "Toutes les récompenses dépendent de tâches et exigent au minimum le KYC primaire. Les bonus ne sont pas retirables (seuls les gains obtenus avec eux le sont), et sortir des fonds du compte Futures avant qu'un bonus soit entièrement utilisé fait perdre la totalité du bonus. Les bonus futures s'utilisent sur les contrats USDT-M et ont été annoncés avec une validité de 15 jours. L'événement de parrainage est limité dans le temps et réservé à des utilisateurs désignés, la FAQ de l'événement indique que son bonus n'est pas cumulable avec l'événement à 10 000 USDT, et les récompenses passent par un contrôle des risques qui peut durer jusqu'à 7 jours. Les régions où les produits dérivés sont interdits peuvent être exclues.",
  headquarters: "MEXC (Comoros) Ltd, enregistrée dans l'Union des Comores",
  regulation: "Aucune licence mentionnée sur les pages de MEXC ; MEXC déclare n'avoir ni licence de premier plan ni agrément MiCA",
  users: "Plus de 40 millions d'utilisateurs (selon MEXC)",
  assets: "1 384 paires spot et 1 152 contrats futures (selon MEXC)",
  maxLeverage: "Jusqu'à 500x (contrats futures BTCUSDT et ETHUSDT)",
  feeNote:
    "Le taux futures affiché est celui de MEXC pour BTCUSDT et ETHUSDT ; sur l'ensemble des contrats, sa page de frais donne une fourchette de 0 % à 0,04 % pour les makers et de 0 % à 0,1 % pour les takers, et certaines paires se tradent sans frais. MEXC précise que les taux maker peuvent varier selon les événements de la plateforme ou votre région.",
  products: ["Futures USDT-M et Coin-M", "Spot", "Copy trading", "Launchpad", "Earn"],
  tagline: "Frais maker nuls et levier jusqu'à 500x",
  quickAnswer:
    "Le code de parrainage MEXC est 4E3xM, et il est sensible à la casse. Saisissez-le dans le champ “Referral Code (Optional)” lors de l'inscription, ou utilisez le bouton de cette page, qui le renseigne et verrouille le champ. Si vous l'avez oublié, MEXC vous permet de lier vous-même un parrain dans les 30 jours suivant l'inscription. Les nouveaux utilisateurs peuvent débloquer jusqu'à 10 000 USDT de récompenses, et la page d'invitation de MEXC affiche pour les inscriptions par parrainage un bonus supplémentaire allant jusqu'à 140 USDT.",
  about: [
    "MEXC opère depuis 2018 et affirme servir plus de 40 millions d'utilisateurs dans plus de 170 pays et régions. Elle mise sur les prix et l'étendue de son offre : les utilisateurs standard ne paient pas de frais maker sur le spot ni sur la plupart des contrats futures, et MEXC propose 1 384 paires spot et 1 152 contrats futures.",
    "La plateforme de futures propose des contrats avec marge en USDT et des contrats avec marge en crypto, avec un effet de levier jusqu'à 500x sur BTCUSDT et ETHUSDT. Ce maximum n'est pas accessible partout : MEXC en exclut l'Australie, l'Autriche, la Belgique, le Canada, la France, Hong Kong, l'Italie, la Russie, le Royaume-Uni et le Yémen, et le copy trading ne prend en charge ni 250x ni 500x. MEXC propose aussi le copy trading, un launchpad et des produits Earn.",
    "L'entité contractante est MEXC (Comoros) Ltd, enregistrée dans l'Union des Comores. MEXC ne mentionne aucune licence sur ses propres pages et déclare elle-même n'avoir ni licence de premier plan ni agrément MiCA ; son propre guide signale qu'elle figure dans le registre provisoire de l'ESMA des entités non conformes. Elle publie une preuve de réserves (l'instantané du 9 novembre 2026 indiquait 122,42 % pour l'USDT, 109,84 % pour l'USDC, 317,61 % pour le BTC et 112,41 % pour l'ETH) et dispose d'un Guardian Fund de 100 millions de dollars ainsi que d'un fonds d'assurance pour les futures.",
  ],
  highlights: [
    { title: "Frais maker de 0 %", text: "Frais maker nuls sur le spot et sur la plupart des contrats futures." },
    { title: "Liaison possible pendant 30 jours", text: "Code oublié ? MEXC vous permet de lier un parrain pendant 30 jours après l'inscription." },
    { title: "Réserves supérieures à 100 %", text: "USDT 122 %, BTC 318 %, ETH 112 % lors de l'instantané du 9 novembre 2026." },
  ],
  pros: [
    "Parmi les frais de trading les plus bas du secteur : 0 % maker, 0,02 % taker sur les futures BTCUSDT",
    "Un code de parrainage peut être lié jusqu'à 30 jours après l'inscription",
    "1 384 paires spot et 1 152 contrats futures",
    "Preuve de réserves supérieure à 100 % et Guardian Fund de 100 millions de dollars",
  ],
  cons: [
    "Ni licence de premier plan ni agrément MiCA, selon MEXC elle-même",
    "Indisponible aux États-Unis, au Royaume-Uni, au Canada, en France, aux Pays-Bas, à Singapour et à Hong Kong",
    "Bonus non retirables et perdus si vous sortez des fonds trop tôt",
    "Un levier de 500x est extrêmement risqué",
  ],
  bestFor: [
    "Traders de futures à haute fréquence attentifs aux coûts",
    "Traders à l'affût des nouveaux listings",
    "Utilisateurs expérimentés à l'aise avec les plateformes offshore",
  ],
  signupTip:
    "Terminez le KYC primaire dans les 7 jours suivant l'inscription, car il débloque l'airdrop d'une position BTCUSDT de 200 $, et ne sortez aucun fonds de votre compte Futures tant qu'un bonus futures est en cours d'utilisation : sinon, vous perdez ce bonus.",
  safety:
    "MEXC publie une preuve de réserves (122,42 % pour l'USDT, 109,84 % pour l'USDC, 317,61 % pour le BTC et 112,41 % pour l'ETH lors de l'instantané du 9 novembre 2026) et dispose d'un Guardian Fund de 100 millions de dollars ainsi que d'un fonds d'assurance pour les futures. MEXC déclare elle-même ne détenir ni licence de premier plan ni agrément MiCA : sécurisez donc solidement votre compte et n'y conservez pas d'épargne à long terme. Avec des tokens très récents, vérifiez la liquidité et les spécifications des contrats avant de les trader avec effet de levier.",
  restricted:
    "Les conditions d'utilisation de MEXC (dernière mise à jour le 13 octobre 2026) interdisent l'accès aux utilisateurs de Corée du Nord, de Cuba, du Soudan, d'Iran, de Chine continentale, de Singapour, de Malaisie, des États-Unis, du Royaume-Uni, de Hong Kong, du Kazakhstan, de Russie, des régions d'Ukraine contrôlées par la Russie, de Biélorussie, du Canada, de France et des Pays-Bas, ainsi que des pays sous sanctions et de ceux inscrits sur la liste noire du GAFI.",
  faqs: [
    {
      topic: "referral",
      q: "Le code de parrainage MEXC 4E3xM fonctionne-t-il ?",
      a: "Oui. Le 16 novembre 2026, le lien de cette page a ouvert la page d'invitation de MEXC avec inviteCode=4E3xM dans l'adresse et 4E3xM prérempli et verrouillé dans le champ “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Le code de parrainage MEXC est-il sensible à la casse ?",
      a: "Oui. Le champ d'inscription de MEXC porte l'indication “Enter invitation code (case-sensitive)”. Le code est 4E3xM : le chiffre 4, un E majuscule, le chiffre 3, un x minuscule et un M majuscule.",
    },
    {
      topic: "referral",
      q: "Comment ajouter un parrain sur MEXC après l'inscription ?",
      a: "Utilisez la liaison de parrain en libre-service de MEXC dans les 30 jours suivant l'inscription. Elle est ouverte aux comptes principaux, vous saisissez soit le code de parrainage, soit l'UID du parrain, et le parrain doit s'être inscrit avant vous. La liaison ne peut ensuite être ni modifiée ni supprimée.",
    },
    {
      topic: "referral",
      q: "Le code parrain MEXC donne-t-il une réduction sur les frais ?",
      a: "MEXC n'indique aucune réduction permanente des frais pour le filleul. L'avantage, c'est l'événement de parrainage, avec des récompenses allant jusqu'à 140 USDT en bonus futures, en plus des récompenses générales pour nouveaux utilisateurs.",
    },
    {
      topic: "signup",
      q: "Quelles sont les exigences de mot de passe sur MEXC ?",
      a: "Au moins 10 caractères, dont une majuscule, une minuscule, un chiffre et un symbole.",
    },
    {
      topic: "signup",
      q: "Peut-on s'inscrire sur MEXC avec Google, Apple, Telegram ou MetaMask ?",
      a: "Oui. La page d'inscription de MEXC propose directement Google et Apple, et Telegram et MetaMask sous “More Options”, en plus de l'e-mail et du téléphone.",
    },
    {
      topic: "signup",
      q: "Quels sont les niveaux de KYC et les limites sur MEXC ?",
      a: "Le KYC primaire autorise des retraits crypto de 80 BTC par jour et le trading P2P. Le KYC avancé relève la limite à 200 BTC par jour et permet des transactions en monnaie fiat jusqu'à 20 000 USD par jour. Le spot, les futures et les événements sont accessibles aux deux niveaux.",
    },
    {
      topic: "signup",
      q: "Peut-on utiliser MEXC sans KYC ?",
      a: "Seulement avec des restrictions. MEXC indique qu'une vérification KYC non terminée peut limiter votre accès à des services comme les dépôts, les retraits et le trading, et les récompenses pour nouveaux utilisateurs et de parrainage exigent au minimum le KYC primaire.",
    },
    {
      topic: "bonus",
      q: "Quel est le bonus de bienvenue MEXC ?",
      a: "MEXC annonce jusqu'à 10 000 USDT de récompenses pour les nouveaux utilisateurs. Exemples tirés de son Rewards Hub : un bon de 10 USDT pour l'inscription, un bon de 10 USDT pour la première connexion dans l'application, l'airdrop d'une position BTCUSDT de 200 $ si vous terminez le KYC primaire dans les 7 jours et un bonus futures allant jusqu'à 7 620 USDT pour le trading cumulé, le palier le plus haut étant fixé à 1 000 000 USDT de volume.",
    },
    {
      topic: "bonus",
      q: "Combien rapporte le bonus de parrainage MEXC ?",
      a: "Dans l'événement de parrainage de MEXC, le filleul reçoit 50 USDT pour un dépôt net d'au moins 100 $ plus 1 000 $ de volume futures, 90 USDT à 10 000 $ de volume futures et 140 USDT à 20 000 $, le tout dans les 7 jours suivant l'inscription. La récompense est versée sous forme de bonus futures, de bon de remise sur les frais et d'airdrop de position. L'événement est limité dans le temps et réservé à des utilisateurs désignés.",
    },
    {
      topic: "bonus",
      q: "Peut-on retirer le bonus MEXC ?",
      a: "Non. MEXC indique que les bonus ne peuvent pas être retirés, contrairement aux gains tirés des trades financés par un bonus. Transférer le moindre actif hors du compte Futures avant que le bonus soit entièrement utilisé fait perdre la totalité du bonus.",
    },
    {
      topic: "bonus",
      q: "Combien de temps un bonus futures MEXC est-il valable ?",
      a: "MEXC a annoncé une validité de 15 jours pour les bonus futures et pour les bons. Un bonus futures ne peut servir que sur les contrats USDT-M.",
    },
    {
      topic: "fees",
      q: "Quels sont les frais futures MEXC ?",
      a: "Sur BTCUSDT et ETHUSDT, les utilisateurs standard paient 0 % maker et 0,02 % taker. Sur l'ensemble des contrats, la page de frais de MEXC donne une fourchette de 0 % à 0,04 % pour les makers et de 0 % à 0,1 % pour les takers, et certaines paires sont sans frais.",
    },
    {
      topic: "fees",
      q: "Quelle réduction des frais le MX donne-t-il sur MEXC ?",
      a: "20 % sur les frais spot et futures si vous les payez en MX ; pour les futures, les MX doivent se trouver dans votre portefeuille Futures. L'ancienne réduction de 50 % accordée pour la détention d'au moins 500 MX est suspendue depuis le 9 février 2026.",
    },
    {
      topic: "fees",
      q: "MEXC propose-t-elle vraiment un levier de 500x ?",
      a: "Oui, sur les contrats futures BTCUSDT et ETHUSDT. Ce levier n'est proposé ni en Australie, ni en Autriche, ni en Belgique, ni au Canada, ni en France, ni à Hong Kong, ni en Italie, ni en Russie, ni au Royaume-Uni, ni au Yémen, et le copy trading ne le prend pas en charge. À 500x, un mouvement de 0,2 % contre vous peut anéantir la position.",
    },
    {
      topic: "safety",
      q: "MEXC est-elle régulée ?",
      a: "MEXC ne mentionne aucune licence sur ses propres pages et déclare n'avoir ni licence de premier plan ni agrément MiCA. Son entité contractante est MEXC (Comoros) Ltd, enregistrée dans l'Union des Comores.",
    },
    {
      topic: "safety",
      q: "MEXC est-elle disponible aux États-Unis ou au Royaume-Uni ?",
      a: "Non. Les États-Unis et le Royaume-Uni figurent tous deux parmi les juridictions interdites par les conditions d'utilisation de MEXC, tout comme le Canada, la France, les Pays-Bas, Singapour et Hong Kong.",
    },
    {
      topic: "safety",
      q: "MEXC publie-t-elle une preuve de réserves ?",
      a: "Oui. L'instantané du 9 novembre 2026 indiquait des taux de réserve de 122,42 % pour l'USDT, 109,84 % pour l'USDC, 317,61 % pour le BTC et 112,41 % pour l'ETH. MEXC dispose aussi d'un Guardian Fund de 100 millions de dollars.",
    },
  ],
};
