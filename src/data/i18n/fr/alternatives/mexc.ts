import type { AlternativesText } from "../../../types";

export const mexc: AlternativesText = {
  role: "Frais les plus bas, levier le plus élevé",
  pick: "MEXC a les frais les plus bas (0 % maker) et le levier le plus élevé (jusqu'à 500x), mais aucune licence de premier plan",
  pitch:
    "MEXC mise sur le prix : pas de frais maker sur le spot ni sur la plupart des contrats futures, 0,02 % taker sur les futures BTCUSDT et un levier jusqu'à 500x sur BTCUSDT et ETHUSDT. La plateforme propose 1 384 paires spot et 1 152 contrats futures, mais déclare elle-même n'avoir ni licence de premier plan ni agrément MiCA.",
  chooseIf: [
    "vous tradez souvent et que les frais sont votre premier poste de dépense – les makers paient 0 % sur le spot et sur la plupart des contrats futures",
    "vous chassez les nouveaux listings : 1 384 paires spot et 1 152 contrats futures",
    "vous vous êtes inscrit sans code de parrainage – MEXC vous permet de lier vous-même un parrain dans les 30 jours",
  ],
  thinkTwiceIf: [
    "vous accordez de l'importance à la régulation – MEXC déclare n'avoir ni licence de premier plan ni agrément MiCA",
    "vous vivez aux États-Unis, au Royaume-Uni, au Canada, en France, aux Pays-Bas, à Singapour ou à Hong Kong – les conditions d'utilisation de MEXC les classent tous parmi les juridictions interdites",
    "vous comptez sur les bonus – ils ne sont pas retirables et sont perdus si vous sortez trop tôt des fonds du compte Futures",
  ],
  intro:
    "MEXC attire les traders avec des frais maker nuls, un effet de levier jusqu'à 500x et une très longue liste de marchés. Ceux qui cherchent une alternative à MEXC le font surtout pour des raisons réglementaires (MEXC déclare n'avoir ni licence de premier plan ni agrément MiCA), parce que la plateforme se retire de France et des Pays-Bas et reste fermée aux États-Unis, au Royaume-Uni et au Canada, ou parce qu'il leur faut des produits que MEXC ne présente pas sur son site, comme les options ou la marge sur le spot. Cette page compare MEXC à ses six alternatives les plus proches, avec les chiffres publiés sur les sites des plateformes elles-mêmes.",
  reasons: [
    {
      title: "Aucune licence de premier plan",
      text: "L'entité contractante est MEXC (Comoros) Ltd, enregistrée dans l'Union des Comores. MEXC ne mentionne aucune licence sur ses propres pages, déclare n'avoir ni licence de premier plan ni agrément MiCA et signale dans son propre guide qu'elle figure dans le registre provisoire de l'ESMA des entités non conformes.",
    },
    {
      title: "MEXC quitte la France et les Pays-Bas",
      text: "Les conditions d'utilisation (mises à jour le 13 octobre 2026) classent la France et les Pays-Bas parmi les pays interdits. MEXC a fixé au 16 novembre 2026 la date finale de fermeture des comptes aux Pays-Bas et se retire de France par vagues successives jusqu'au 5 mars 2027.",
    },
    {
      title: "Inaccessible aux États-Unis, au Royaume-Uni et au Canada",
      text: "Les États-Unis, le Royaume-Uni, le Canada, Singapour, Hong Kong, la Malaisie, la Chine continentale, la Russie, la Biélorussie et le Kazakhstan font eux aussi partie des juridictions interdites.",
    },
    {
      title: "En pratique, la vérification est nécessaire",
      text: "MEXC indique qu'un KYC non terminé peut limiter votre accès aux dépôts, aux retraits et au trading, et ses récompenses exigent au minimum le KYC primaire.",
    },
    {
      title: "Des bonus sous conditions",
      text: "Les bonus ne sont pas retirables (seul le gain réalisé avec eux l'est), et sortir des fonds du compte Futures avant d'avoir épuisé un bonus fait perdre ce bonus en totalité.",
    },
    {
      title: "Produits que nous n'avons pas trouvés",
      text: "Le 16 novembre 2026, nous n'avons trouvé sur le site de MEXC ni trading d'options, ni marge sur le spot, ni portefeuille en auto-conservation.",
    },
  ],
  stayIf: [
    "vous décidez en fonction des frais : 0 % maker et 0,02 % taker sur les futures BTCUSDT, 0 % / 0,05 % sur le spot",
    "vous tradez tôt les tokens récents et peu capitalisés – 1 384 paires spot et 1 152 contrats futures",
    "vous acceptez une plateforme offshore et n'y gardez que votre capital de trading",
  ],
  faqs: [
    {
      q: "MEXC quitte-t-elle la France et les Pays-Bas ?",
      a: "Oui. Les conditions d'utilisation de MEXC (mises à jour le 13 octobre 2026) classent ces deux pays parmi les juridictions interdites. Aux Pays-Bas, MEXC a fixé au 16 novembre 2026 la date finale de fermeture des comptes ; en France, elle se retire par vagues entre le 28 octobre 2026 et le 5 mars 2027, et les inscriptions y sont déjà fermées.",
    },
    {
      q: "MEXC est-elle disponible dans l'UE ?",
      a: "Les pages de MEXC se contredisent. Ses conditions d'utilisation interdisent la France et les Pays-Bas, et son article sur les pays restreints indique que les autres pays de l'UE et de l'Espace économique européen (EEE) ne sont pas interdits, tout en précisant que MEXC n'a aucun agrément MiCA et figure dans le registre provisoire de l'ESMA des entités non conformes. Un article plus récent de MEXC affirme qu'elle ne fournit pas ses services dans l'UE/EEE. Quiconque, dans l'EEE, veut une plateforme agréée MiCA doit se tourner vers les alternatives.",
    },
    {
      q: "MEXC propose-t-elle le trading d'options ou le trading sur marge en spot ?",
      a: "Nous n'avons trouvé ni l'un ni l'autre sur le site de MEXC le 16 novembre 2026 : son centre d'aide ne renvoie aucun résultat pour les options, et les types de comptes qu'il décrit sont Spot, Futures, Fiat et Copy Trade. Les produits dérivés de MEXC sont des futures avec marge en USDT et des futures avec marge en crypto.",
    },
  ],
  reserves: "USDT 122,42 %, USDC 109,84 %, BTC 317,61 %, ETH 112,41 % (instantané du 9 novembre 2026)",
  fund: "Guardian Fund de 100 millions de dollars, plus un fonds d'assurance pour les futures",
  featureNotes: {
    copyTrading: "Copy trading sur les futures avec un compte Copy Trade distinct",
    tradingBots: "Bot grid pour les futures, ainsi que des bots grid et DCA pour le spot",
    options: "",
    demoTrading: "Trading démo sur les futures avec les données de marché en temps réel",
    margin: "",
    p2p: "P2P sans frais pour l'USDT, le BTC, l'ETH et d'autres cryptos",
    fiat: "Cartes Visa et Mastercard, virement bancaire et Apple Pay",
    earn: "Épargne flexible et à durée fixe, plus On-Chain Earn",
    launchpad: "Souscriptions de tokens via le Launchpad",
    web3Wallet: "",
    card: "MEXC Card, une carte de paiement crypto",
  },
  countryNotes: {
    de: "pas sur la liste des pays interdits, mais aucun agrément MiCA et, selon un article plus récent de MEXC, aucun service dans l'UE/EEE",
    fr: "retrait progressif jusqu'au 5 mars 2027",
    nl: "fermeture définitive des comptes le 16 novembre 2026",
    es: "pas sur la liste des pays interdits, mais aucun agrément MiCA et, selon un article plus récent de MEXC, aucun service dans l'UE/EEE",
    it: "pas sur la liste des pays interdits, mais aucun agrément MiCA et, selon un article plus récent de MEXC, aucun service dans l'UE/EEE",
    au: "pas sur la liste des pays interdits ; levier de 500x non proposé",
    jp: "pas d'interdiction, mais MEXC classe le Japon parmi les pays à accès limité – l'application MEXC est absente des boutiques d'applications japonaises",
    in: "pas d'interdiction, mais MEXC classe l'Inde parmi les pays à accès limité – l'application MEXC n'y est pas référencée",
  },
  regional: "",
  mica: "",
  sourceLabels: [
    "MEXC : copy trading",
    "MEXC : bot grid pour les futures",
    "MEXC : trading démo sur les futures",
    "MEXC : les types de comptes expliqués",
    "MEXC : trading P2P",
    "MEXC : acheter des cryptos par carte ou virement bancaire",
    "MEXC : Earn",
    "MEXC : Launchpad",
    "MEXC : comprendre la MEXC Card",
    "MEXC : arrêt progressif du service en France",
    "MEXC Learn : à la recherche d'alternatives à MEXC",
  ],
};
