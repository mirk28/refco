import type { AlternativesText } from "../../../types";

export const binance: AlternativesText = {
  role: "La liquidez más profunda",
  pick: "Binance tiene el mercado de derivados más profundo y te permite vincular un código de referido olvidado en un plazo de 30 días",
  pitch:
    "Binance es el mayor exchange del ranking de derivados de CoinMarketCap y la referencia en liquidez: spreads ajustados en los perpetuos de BTC, de ETH y de monedas de gran capitalización, 0.02% maker / 0.05% taker en futuros y hasta 150x en BTCUSDT y ETHUSDT. Spot, margen, futuros, opciones, bots y copy trading funcionan con un solo inicio de sesión.",
  chooseIf: [
    "Operas con grandes volúmenes y necesitas los spreads más ajustados en los perpetuos de BTC, de ETH y de monedas de gran capitalización",
    "Quieres spot, margen, futuros, opciones, bots y copy trading con un solo inicio de sesión",
    "Te registraste sin un código de referido – Binance te permite vincular uno en un plazo de 30 días si no has depositado ni operado",
  ],
  thinkTwiceIf: [
    "Vives en Estados Unidos, Canadá o los Países Bajos – los tres están en la lista de países prohibidos de Binance",
    "Eres residente del EEE y quieres beneficios de referido – Binance excluye a los usuarios del EEE de su programa de referidos desde el 1 de julio de 2026",
    "Quieres un apalancamiento alto desde el primer día – las cuentas de futuros nuevas están limitadas a 20x durante sus primeros 30 días",
  ],
  intro:
    "Binance es el mayor exchange de criptomonedas por interés abierto en derivados, pero no está abierto a todo el mundo y no es el más barato ni el más flexible en todos los aspectos. La gente busca una alternativa a Binance sobre todo porque Binance está cerrado en su país – Estados Unidos, Canadá y los Países Bajos están en su lista de países prohibidos –, porque quiere comisiones más bajas o más apalancamiento, o porque no quiere tener todos sus fondos en un solo exchange. Esta página compara las seis alternativas más cercanas con Binance, con cifras de los propios sitios de los exchanges.",
  reasons: [
    {
      title: "Binance no está disponible en tu país",
      text: "La lista de países prohibidos de Binance (actualizada el 5 de enero de 2026) nombra a Estados Unidos, Canadá y los Países Bajos, además de países y regiones sancionados. En el Reino Unido, ciertos servicios no son accesibles para los clientes minoristas.",
    },
    {
      title: "Quieres comisiones más bajas",
      text: "Binance cobra 0.10% maker y taker en spot y 0.02% / 0.05% en los futuros USDⓈ-M en el nivel estándar. Pagar las comisiones en BNB lo reduce a 0.075% en spot y a 0.018% / 0.045% en futuros.",
    },
    {
      title: "Quieres más apalancamiento o más monedas",
      text: "El apalancamiento no pasa de 150x en los perpetuos BTCUSDT y ETHUSDT, y las cuentas de futuros nuevas no pueden usar más de 20x durante sus primeros 30 días. Binance lista 600+ criptomonedas.",
    },
    {
      title: "Sin beneficios de referido en el EEE",
      text: "Desde el 1 de julio de 2026, los usuarios registrados en países del EEE ya no pueden participar en el programa de referidos de Binance. Los términos de referidos de Binance también enumeran restricciones para el Reino Unido, Singapur, Japón, Turquía, Hong Kong e Israel.",
    },
    {
      title: "La verificación va antes que todo",
      text: "Todos los usuarios nuevos deben completar la verificación de identidad antes de depositar u operar. Binance afirma que la revisión suele terminar en un plazo de 48 horas.",
    },
    {
      title: "No quieres tenerlo todo en un solo exchange",
      text: "Ningún exchange centralizado está libre de riesgos. Mantener capital de trading en un segundo exchange reduce tu dependencia de una sola plataforma.",
    },
  ],
  stayIf: [
    "La liquidez es lo que más te importa – Binance tiene el mayor interés abierto y el mayor volumen de futuros de todos los exchanges",
    "Pagas las comisiones en BNB: 25% de descuento en las comisiones spot y 10% en las comisiones de futuros USDⓈ-M",
    "Valoras la regulación de la FSRA del ADGM, una prueba de reservas que puedes verificar tú mismo y el fondo SAFU, de aproximadamente 1,000 millones de dólares",
  ],
  faqs: [
    {
      q: "¿Binance está disponible en Estados Unidos, Canadá o los Países Bajos?",
      a: "No. La lista de países prohibidos de Binance (actualizada el 5 de enero de 2026) nombra a Estados Unidos, Canadá y los Países Bajos. En el caso de Estados Unidos, la lista también abarca a los ciudadanos estadounidenses y a cualquier persona que opere en Estados Unidos.",
    },
    {
      q: "¿Funciona el programa de referidos de Binance en Europa?",
      a: "Ya no para los residentes del EEE. Según los términos de referidos de Binance, los usuarios registrados en países del EEE no son elegibles para participar en el programa de referidos de Binance desde el 1 de julio de 2026, y los términos también enumeran restricciones para el Reino Unido. Aun así puedes abrir una cuenta de Binance desde los países en los que Binance presta servicio, pero allí un referido no tiene ningún efecto.",
    },
    {
      q: "¿Binance limita el apalancamiento de las cuentas nuevas?",
      a: "Sí. Las cuentas de futuros con menos de 30 días no pueden usar más de 20x. Después, Binance llega hasta 150x en los perpetuos BTCUSDT y ETHUSDT para posiciones de hasta 300,000 USDT.",
    },
  ],
  reserves: "BTC 100.05% (auditoría del 12 de noviembre de 2026), verificable por el propio usuario con un árbol de Merkle y zk-SNARKs",
  fund: "Fondo SAFU de aproximadamente 1,000 millones de dólares (a febrero de 2026)",
  featureNotes: {
    copyTrading: "Copy trading de futuros y de spot",
    tradingBots: "Bots de grid de spot y de futuros, DCA, arbitraje, rebalanceo y TWAP",
    options: "Opciones sobre BTC, ETH, BNB, SOL, XRP y DOGE",
    demoTrading: "Trading demo con fondos virtuales para spot y futuros",
    margin: "Margen aislado y cruzado",
    p2p: "Binance P2P con métodos de pago locales",
    fiat: "Transferencia bancaria y tarjeta de crédito o débito, según la región",
    earn: "Simple Earn, inversión dual y staking de ETH",
    launchpad: "Launchpool y HODLer Airdrops",
    web3Wallet: "Binance Wallet, una billetera de autocustodia dentro de la app de Binance",
    card: "Binance Card, solo para residentes de Brasil",
  },
  countryNotes: {
    uk: "ciertos servicios no son accesibles para los clientes minoristas del Reino Unido",
    au: "Binance Australia",
    jp: "Binance Japan",
    sg: "no está en la lista de países prohibidos, pero el programa de referidos está restringido allí",
    hk: "no está en la lista de países prohibidos, pero el programa de referidos está restringido allí",
    ae: "Binance UAE en Dubái",
  },
  regional:
    "Binance.com está operado por tres entidades con licencia de la Financial Services Regulatory Authority del ADGM en Abu Dabi. Existen plataformas locales separadas para Japón (Binance Japan Inc.), Australia (Binance Australia, registrada ante AUSTRAC) y los Emiratos Árabes Unidos (Binance FZE, con licencia de la VARA en Dubái), y Binance enumera otras entidades con licencia en Baréin, Kazajistán, Nueva Zelanda, Tailandia, Indonesia, México, El Salvador, Argentina, Brasil y Sudáfrica. Su página de licencias no nombra ninguna entidad de la UE ni del EEE.",
  mica: "",
  sourceLabels: [
    "Binance: Copy trading",
    "Binance: Bots de trading",
    "Binance: Opciones",
    "Binance: Trading demo",
    "Binance: Margen aislado",
    "Binance P2P",
    "Binance: Compra de criptomonedas con tarjeta o transferencia bancaria",
    "Binance: Earn",
    "Binance: Launchpool",
    "Binance: Binance Wallet",
    "Binance: Binance Card",
    "Binance UK",
    "Binance Australia",
    "Binance Japan",
    "Binance UAE",
  ],
};
