import type { AlternativesText } from "../../../types";

export const okx: AlternativesText = {
  role: "Frais bas, options et MiCA",
  pick: "OKX combine des frais bas avec des options et une plateforme agréée MiCA pour l'EEE",
  pitch:
    "OKX facture 0,08 % maker / 0,10 % taker sur le spot et 0,02 % / 0,05 % sur les futures et les contrats perpétuels, propose des options à 0,03 % et publie chaque mois une preuve de réserves. Les résidents de l'EEE disposent d'une plateforme agréée MiCA, OKX Europe, où les contrats perpétuels sont toutefois limités à 10x.",
  chooseIf: [
    "vous voulez des frais standard bas sur le spot, les futures et les options",
    "vous vivez dans l'EEE et voulez une plateforme agréée au titre de MiCA",
    "vous tenez à une preuve de réserves mensuelle que vous pouvez vérifier avec votre propre solde",
  ],
  thinkTwiceIf: [
    "vous voulez un levier élevé en Europe – OKX Europe limite ses contrats perpétuels (X-Perps) à 10x",
    "vous vivez au Canada, en Inde, au Japon ou à Hong Kong – OKX les classe parmi les zones restreintes",
    "vous risquez d'oublier le code de parrainage – OKX ne l'ajoute pas après l'inscription",
  ],
  intro:
    "OKX est l'une des plus grandes plateformes d'échange de cryptomonnaies pour le spot et les produits dérivés, avec des frais standard bas et une preuve de réserves mensuelle. Si l'on cherche une alternative à OKX, c'est surtout parce que ce que l'on peut trader dépend fortement du lieu de résidence (les contrats perpétuels sont limités à 10x sur OKX Europe), parce que le site mondial s'arrête à 100x, ou parce qu'OKX reste fermée au Canada, en Inde, au Japon et à Hong Kong. Cette page compare OKX aux six alternatives les plus proches, avec des chiffres tirés des sites des plateformes elles-mêmes.",
  reasons: [
    {
      title: "Le levier est plafonné, surtout en Europe",
      text: "Sur le site mondial, l'effet de levier maximal est de 100x, sur des contrats perpétuels comme BTC-USDT et ETH-USDT. Sur OKX Europe, le produit perpétuel s'appelle X-Perps et il est limité à 10x, moins pour les positions plus importantes.",
    },
    {
      title: "OKX est restreinte là où vous vivez",
      text: "OKX classe le Canada, l'Inde, le Japon, Hong Kong, la Malaisie et certaines juridictions américaines parmi les zones restreintes (liste mise à jour le 14 novembre 2026). Au Royaume-Uni, en Australie, au Brésil et en Corée du Sud, les produits dérivés sont restreints.",
    },
    {
      title: "Un catalogue de cryptos plus restreint",
      text: "Les pages d'OKX Europe font état de plus de 270 cryptomonnaies, un catalogue plus réduit que celui des plateformes axées sur les altcoins.",
    },
    {
      title: "Les récompenses de bienvenue sont bloquées",
      text: "Sur OKX Europe, les récompenses en crypto restent bloquées jusqu'à 45 jours : vous pouvez les trader, mais pas les retirer. Sur le site mondial, les récompenses doivent être ouvertes dans les 30 jours, et les tâches non terminées expirent 180 jours après l'inscription.",
    },
    {
      title: "Un code de parrainage oublié ne peut pas être ajouté",
      text: "Selon OKX, les codes d'invitation ne prennent effet qu'à l'inscription et ne peuvent pas être ajoutés rétroactivement. Supprimer le compte pour se réinscrire n'y change rien.",
    },
    {
      title: "Le numéro de téléphone est obligatoire",
      text: "OKX exige à la fois une adresse e-mail et un numéro de téléphone sur chaque compte, ainsi qu'une vérification d'identité avant le trading, les dépôts et les retraits.",
    },
  ],
  stayIf: [
    "vous êtes attentif aux frais : 0,08 % / 0,10 % sur le spot et 0,02 % / 0,05 % sur les futures sont des taux standard bas",
    "vous tradez des options ou des futures à échéance en plus des contrats perpétuels",
    "vous résidez dans l'EEE et voulez rester sur une plateforme agréée MiCA",
  ],
  faqs: [
    {
      q: "Quel est le levier maximal sur OKX Europe ?",
      a: "10x. Sur OKX Europe, le produit perpétuel s'appelle X-Perps et il est limité à 10x, moins pour les positions plus importantes. Sur le site mondial, OKX monte jusqu'à 100x sur des contrats perpétuels comme BTC-USDT et ETH-USDT.",
    },
    {
      q: "OKX est-elle disponible au Canada, en Inde, au Japon ou à Hong Kong ?",
      a: "Non. Les quatre figurent sur la liste des zones restreintes d'OKX (dernière mise à jour le 14 novembre 2026), avec la Malaisie, l'Afghanistan, le Népal, l'Ouzbékistan et les pays sous sanctions.",
    },
    {
      q: "OKX est-elle disponible au Royaume-Uni ?",
      a: "En partie seulement. OKX restreint au Royaume-Uni les services liés aux produits dérivés, à la CeFi et au P2P. Les résidents du Royaume-Uni utilisent les pages britanniques de la plateforme mondiale (okx.com/en-gb), sans toute la gamme de produits.",
    },
  ],
  reserves: "BTC 108 %, ETH 101 %, USDT 106 %, USDC 100 % (rapport mensuel, vérification du 1er novembre 2026)",
  fund: "Fonds de sécurité réservé au trading sur marge et aux produits dérivés, qui couvre les déficits liés aux liquidations",
  featureNotes: {
    copyTrading: "Copy trading spot et futures sur le site mondial",
    tradingBots: "Grid trading spot et futures, et d'autres stratégies de bots",
    options: "Options à 0,03 % maker / 0,03 % taker sur le site mondial",
    demoTrading: "Environnement de trading démo, utilisable avec votre compte OKX",
    margin: "Trading sur marge spot jusqu'à 10x sur le site mondial",
    p2p: "Place de marché P2P avec séquestre sur le site mondial",
    fiat: "Cartes bancaires, virement, PayPal et Apple Pay selon la région ; SEPA, Visa et Mastercard sur OKX Europe",
    earn: "Simple Earn, On-chain Earn et Dual Investment",
    launchpad: "Ventes de tokens Jumpstart sur le site mondial",
    web3Wallet: "OKX Wallet, portefeuille en auto-garde, plus de 130 blockchains",
    card: "OKX Card, une Mastercard qui paie à partir de vos stablecoins",
  },
  countryNotes: {
    us: "OKX US, uniquement dans les zones autorisées des États-Unis",
    uk: "restrictions sur les produits dérivés, les services liés à la CeFi et le P2P",
    de: "OKX Europe",
    fr: "OKX Europe",
    nl: "OKX Europe",
    es: "OKX Europe",
    it: "OKX Europe",
    au: "OKX Australia",
    sg: "OKX Singapore",
    ae: "OKX Middle East à Dubaï",
  },
  regional:
    "OKX exploite des plateformes distinctes pour plusieurs régions : OKX Europe Limited à Malte (okx.com/en-eu), agréée par la MFSA au titre de MiCA, pour les résidents de l'EEE ; OKX US (OKX INC., entreprise de services monétaires enregistrée auprès du FinCEN) pour les zones autorisées des États-Unis ; OKX Australia ; OKX Singapore (OKX SG Pte. Ltd.) ; OKX Middle East Fintech FZE à Dubaï, titulaire d'une licence de la VARA ; et OKX Brazil. Tous les autres utilisateurs sont servis par Aux Cayes FinTech Co. Ltd., aux Seychelles. Chaque plateforme régionale a sa propre gamme de produits : OKX Europe, par exemple, limite les contrats perpétuels à 10x.",
  mica: "OKX Europe Limited, Malte, agréée par la MFSA",
  sourceLabels: [
    "OKX : copy trading spot",
    "OKX : bot de grid trading spot",
    "OKX : trading d'options",
    "Documentation de l'API d'OKX : trading démo",
    "OKX : trading sur marge spot",
    "OKX : trading P2P",
    "OKX : acheter des cryptos par carte ou virement bancaire",
    "OKX : Simple Earn",
    "OKX : Jumpstart",
    "OKX Wallet",
    "OKX : OKX Card",
    "OKX Europe : conditions d'utilisation (EEE)",
    "OKX US",
    "OKX Australia : à propos",
    "OKX UK",
  ],
};
