import type { AlternativesText } from "../../../types";

export const binance: AlternativesText = {
  role: "Liquidité la plus profonde",
  pick: "Binance a le marché de produits dérivés le plus profond et permet de lier un code de parrainage oublié dans les 30 jours",
  pitch:
    "Binance est la plus grande plateforme du classement des dérivés de CoinMarketCap et la référence en matière de liquidité : spreads serrés sur les contrats perpétuels BTC, ETH et grandes capitalisations, 0,02 % maker / 0,05 % taker sur les futures et un levier jusqu'à 150x sur BTCUSDT et ETHUSDT. Spot, marge, futures, options, bots et copy trading sont accessibles avec un seul identifiant.",
  chooseIf: [
    "vous tradez de gros montants et avez besoin des spreads les plus serrés sur les contrats perpétuels BTC, ETH et grandes capitalisations",
    "vous voulez le spot, la marge, les futures, les options, les bots et le copy trading avec un seul identifiant",
    "vous vous êtes inscrit sans code de parrainage – Binance permet d'en lier un dans les 30 jours si vous n'avez ni déposé ni tradé",
  ],
  thinkTwiceIf: [
    "vous vivez aux États-Unis, au Canada ou aux Pays-Bas – Binance place ces trois pays sur sa liste des pays interdits",
    "vous résidez dans l'EEE et voulez profiter du parrainage – Binance exclut les utilisateurs de l'EEE de son programme de parrainage depuis le 1er juillet 2026",
    "vous voulez un levier élevé dès le premier jour – les nouveaux comptes futures sont limités à 20x pendant leurs 30 premiers jours",
  ],
  intro:
    "Binance est la plus grande plateforme crypto par l'open interest (intérêt ouvert) sur les dérivés, mais elle n'est pas ouverte à tous et n'est ni la moins chère ni la plus souple sur tous les points. On cherche surtout une alternative à Binance parce que la plateforme est fermée dans son pays (les États-Unis, le Canada et les Pays-Bas figurent sur sa liste des pays interdits), parce qu'on veut des frais plus bas ou plus de levier, ou parce qu'on ne veut pas garder tous ses fonds sur une seule plateforme. Cette page compare Binance aux six alternatives les plus proches, avec les chiffres publiés sur les sites des plateformes elles-mêmes.",
  reasons: [
    {
      title: "Binance n'est pas disponible dans votre pays",
      text: "La liste des pays interdits de Binance (mise à jour le 5 janvier 2026) cite les États-Unis, le Canada et les Pays-Bas, en plus des pays et régions sous sanctions. Au Royaume-Uni, certains services ne sont pas accessibles aux clients particuliers.",
    },
    {
      title: "Vous voulez des frais plus bas",
      text: "Au niveau standard, Binance facture 0,10 % maker et taker sur le spot et 0,02 % / 0,05 % sur les futures USDⓈ-M. En payant les frais en BNB, vous passez à 0,075 % sur le spot et à 0,018 % / 0,045 % sur les futures.",
    },
    {
      title: "Vous voulez plus de levier ou plus de cryptos",
      text: "Le levier s'arrête à 150x sur les contrats perpétuels BTCUSDT et ETHUSDT, et les nouveaux comptes futures ne peuvent pas dépasser 20x pendant leurs 30 premiers jours. Binance liste plus de 600 cryptomonnaies.",
    },
    {
      title: "Pas d'avantages de parrainage dans l'EEE",
      text: "Depuis le 1er juillet 2026, les utilisateurs inscrits dans un pays de l'Espace économique européen (EEE) ne peuvent plus participer au programme de parrainage de Binance. Les conditions de parrainage de Binance prévoient aussi des restrictions pour le Royaume-Uni, Singapour, le Japon, la Turquie, Hong Kong et Israël.",
    },
    {
      title: "La vérification passe avant tout",
      text: "Tout nouvel utilisateur doit terminer la vérification d'identité avant de déposer ou de trader. Selon Binance, l'examen est généralement bouclé sous 48 heures.",
    },
    {
      title: "Vous ne voulez pas tout garder sur une seule plateforme",
      text: "Aucune plateforme centralisée n'est sans risque. En gardant du capital de trading sur une seconde plateforme, vous dépendez moins d'un seul acteur.",
    },
  ],
  stayIf: [
    "vous accordez la priorité à la liquidité – Binance a le plus gros open interest et le plus fort volume de futures de toutes les plateformes",
    "vous payez les frais en BNB : 25 % de réduction sur les frais spot et 10 % sur les frais des futures USDⓈ-M",
    "vous tenez à la régulation par la FSRA de l'ADGM, à une preuve de réserves vérifiable par vous-même et au fonds SAFU d'environ 1 milliard de dollars",
  ],
  faqs: [
    {
      q: "Binance est-elle disponible aux États-Unis, au Canada ou aux Pays-Bas ?",
      a: "Non. La liste des pays interdits de Binance (mise à jour le 5 janvier 2026) cite les États-Unis, le Canada et les Pays-Bas. Pour les États-Unis, la liste vise aussi les citoyens américains et toute personne exerçant une activité aux États-Unis.",
    },
    {
      q: "Le programme de parrainage Binance fonctionne-t-il en Europe ?",
      a: "Plus pour les résidents de l'Espace économique européen (EEE). Selon les conditions de parrainage de Binance, les utilisateurs inscrits dans un pays de l'EEE n'ont plus le droit de participer au Binance Referral Program depuis le 1er juillet 2026, et ces conditions prévoient aussi des restrictions pour le Royaume-Uni. Vous pouvez toujours ouvrir un compte Binance depuis les pays que Binance dessert, mais un parrainage n'y a aucun effet.",
    },
    {
      q: "Binance limite-t-elle le levier des nouveaux comptes ?",
      a: "Oui. Les comptes futures de moins de 30 jours ne peuvent pas dépasser 20x. Ensuite, Binance monte jusqu'à 150x sur les contrats perpétuels BTCUSDT et ETHUSDT, pour des positions allant jusqu'à 300 000 USDT.",
    },
  ],
  reserves: "BTC 100,05 % (audit du 12 novembre 2026), vérifiable par vous-même grâce à un arbre de Merkle et des zk-SNARKs",
  fund: "Fonds SAFU d'environ 1 milliard de dollars (en février 2026)",
  featureNotes: {
    copyTrading: "Copy trading sur les futures et le spot",
    tradingBots: "Bots grid, DCA, d'arbitrage, de rééquilibrage et TWAP sur le spot et les futures",
    options: "Options sur BTC, ETH, BNB, SOL, XRP et DOGE",
    demoTrading: "Trading démo avec des fonds virtuels, sur le spot et les futures",
    margin: "Marge isolée et marge croisée",
    p2p: "Binance P2P avec des moyens de paiement locaux",
    fiat: "Virement bancaire et carte de crédit ou de débit, selon la région",
    earn: "Simple Earn, Dual Investment et staking d'ETH",
    launchpad: "Launchpool et HODLer Airdrops",
    web3Wallet: "Binance Wallet, un portefeuille non custodial intégré à l'application Binance",
    card: "Binance Card, réservée aux résidents du Brésil",
  },
  countryNotes: {
    uk: "accès restreint à certains services pour les clients particuliers au Royaume-Uni",
    au: "Binance Australia",
    jp: "Binance Japan",
    sg: "hors de la liste des pays interdits, mais avec un programme de parrainage restreint",
    hk: "hors de la liste des pays interdits, mais avec un programme de parrainage restreint",
    ae: "Binance UAE à Dubaï",
  },
  regional:
    "Binance.com est exploitée par trois entités agréées par l'ADGM Financial Services Regulatory Authority à Abou Dhabi. Des plateformes locales distinctes existent pour le Japon (Binance Japan Inc.), l'Australie (Binance Australia, enregistrée auprès de l'AUSTRAC) et les Émirats arabes unis (Binance FZE, agréée par la VARA à Dubaï), et Binance cite d'autres entités agréées à Bahreïn, au Kazakhstan, en Nouvelle-Zélande, en Thaïlande, en Indonésie, au Mexique, au Salvador, en Argentine, au Brésil et en Afrique du Sud. Sa page des licences ne mentionne aucune entité dans l'UE ou l'EEE.",
  mica: "",
  sourceLabels: [
    "Binance : copy trading",
    "Binance : bots de trading",
    "Binance : options",
    "Binance : trading démo",
    "Binance : marge isolée",
    "Binance P2P",
    "Binance : acheter des cryptos par carte ou virement bancaire",
    "Binance : Earn",
    "Binance : Launchpool",
    "Binance : Binance Wallet",
    "Binance : Binance Card",
    "Binance UK",
    "Binance Australia",
    "Binance Japan",
    "Binance UAE",
  ],
};
