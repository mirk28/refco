import type { AlternativesText } from "../../../types";

export const mexc: AlternativesText = {
  role: "Comisiones más bajas, mayor apalancamiento",
  pick: "MEXC tiene las comisiones más bajas (0% maker) y el mayor apalancamiento (hasta 500x), pero no tiene licencia de primer nivel",
  pitch:
    "MEXC compite en precio: sin comisión maker en spot ni en la mayoría de los contratos de futuros, 0.02% taker en los futuros BTCUSDT y hasta 500x en BTCUSDT y ETHUSDT. Lista 1,384 pares spot y 1,152 contratos de futuros – y él mismo declara que no tiene licencia de primer nivel ni autorización MiCA.",
  chooseIf: [
    "Operas con frecuencia y las comisiones son tu mayor costo – los makers pagan un 0% en spot y en la mayoría de los contratos de futuros",
    "Vas a la caza de nuevos listados: 1,384 pares spot y 1,152 contratos de futuros",
    "Te registraste sin código de referido – MEXC te permite vincular un referidor por tu cuenta en un plazo de 30 días",
  ],
  thinkTwiceIf: [
    "Te importa la regulación – MEXC declara que no tiene licencia de primer nivel ni autorización MiCA",
    "Vives en Estados Unidos, el Reino Unido, Canadá, Francia, los Países Bajos, Singapur o Hong Kong – todos son jurisdicciones prohibidas en el Acuerdo de Usuario de MEXC",
    "Cuentas con los bonos – no se pueden retirar y se pierden si sacas fondos de la cuenta de Futuros antes de tiempo",
  ],
  intro:
    "MEXC atrae a los traders con cero comisiones maker, hasta 500x de apalancamiento y una lista de mercados muy larga. Quienes buscan una alternativa a MEXC lo hacen sobre todo por motivos regulatorios – MEXC declara que no tiene licencia de primer nivel ni autorización MiCA –, porque está cerrando gradualmente su servicio en Francia y los Países Bajos y está cerrado a Estados Unidos, el Reino Unido y Canadá, o porque necesitan productos que MEXC no muestra en su sitio, como las opciones o el margen spot. Esta página compara las seis alternativas más cercanas con MEXC, con cifras de los sitios de los propios exchanges.",
  reasons: [
    {
      title: "Sin licencia de primer nivel",
      text: "La entidad contratante es MEXC (Comoros) Ltd, registrada en la Unión de las Comoras. MEXC no nombra ninguna licencia en sus propias páginas, declara que no tiene licencia de primer nivel ni autorización MiCA y señala en su propia guía que figura en el registro provisional de entidades no conformes de la ESMA.",
    },
    {
      title: "MEXC se retira de Francia y los Países Bajos",
      text: "El Acuerdo de Usuario (actualizado el 13 de octubre de 2026) nombra a Francia y los Países Bajos como prohibidos. MEXC fijó el 16 de noviembre de 2026 como fecha final de baja de usuarios para los Países Bajos y está cerrando gradualmente su servicio en Francia por tandas hasta el 5 de marzo de 2027.",
    },
    {
      title: "Cerrado a Estados Unidos, el Reino Unido y Canadá",
      text: "Estados Unidos, el Reino Unido, Canadá, Singapur, Hong Kong, Malasia, China continental, Rusia, Bielorrusia y Kazajistán también son jurisdicciones prohibidas.",
    },
    {
      title: "En la práctica, la verificación es necesaria",
      text: "MEXC indica que no completar el KYC puede afectar a tu acceso a depósitos, retiros y trading, y sus recompensas exigen al menos el KYC Primario.",
    },
    {
      title: "Bonos con condiciones",
      text: "Los bonos no se pueden retirar – solo las ganancias obtenidas con ellos – y, si sacas fondos de la cuenta de Futuros antes de haber usado un bono por completo, pierdes el bono entero.",
    },
    {
      title: "Productos que no encontramos",
      text: "El 16 de noviembre de 2026 no encontramos en el propio sitio de MEXC ni trading de opciones, ni margen spot, ni una billetera de autocustodia.",
    },
  ],
  stayIf: [
    "Las comisiones son lo decisivo para ti: 0% maker y 0.02% taker en los futuros BTCUSDT, 0% / 0.05% en spot",
    "Operas pronto con tokens nuevos y pequeños – 1,384 pares spot y 1,152 contratos de futuros",
    "Aceptas una plataforma offshore y solo mantienes allí capital de trading",
  ],
  faqs: [
    {
      q: "¿Se retira MEXC de Francia y los Países Bajos?",
      a: "Sí. El Acuerdo de Usuario de MEXC (actualizado el 13 de octubre de 2026) nombra a ambos como jurisdicciones prohibidas. Para los Países Bajos, MEXC fijó el 16 de noviembre de 2026 como fecha final de baja de usuarios; en Francia está cerrando gradualmente su servicio por tandas entre el 28 de octubre de 2026 y el 5 de marzo de 2027, y los registros ya están cerrados.",
    },
    {
      q: "¿Presta MEXC servicio en la UE?",
      a: "Las propias páginas de MEXC no coinciden entre sí. Su Acuerdo de Usuario prohíbe Francia y los Países Bajos, y su artículo sobre países restringidos dice que los demás países de la UE y del EEE no están prohibidos – a la vez que declara que MEXC no tiene autorización MiCA y figura en el registro provisional de entidades no conformes de la ESMA. Un artículo más reciente de MEXC dice que MEXC no presta servicio en la UE/EEE. Quien esté en el EEE y quiera una plataforma autorizada bajo MiCA tiene que mirar las alternativas.",
    },
    {
      q: "¿Ofrece MEXC opciones o trading con margen spot?",
      a: "El 16 de noviembre de 2026 no encontramos ninguna de las dos cosas en el propio sitio de MEXC: su centro de ayuda no devuelve resultados para opciones, y los tipos de cuenta que describe son Spot, Futuros, Fiat y Copy Trade. Los derivados de MEXC son futuros con margen en USDT y con margen en criptomonedas.",
    },
  ],
  reserves: "USDT 122.42%, USDC 109.84%, BTC 317.61%, ETH 112.41% (instantánea del 9 de noviembre de 2026)",
  fund: "Guardian Fund de 100 millones de dólares, más un fondo de seguro de futuros",
  featureNotes: {
    copyTrading: "Copy trading de futuros con una cuenta Copy Trade separada",
    tradingBots: "Bot de grid de futuros, además de bots de grid spot y DCA",
    options: "",
    demoTrading: "Trading demo de futuros con datos de mercado en tiempo real",
    margin: "",
    p2p: "P2P sin comisiones para USDT, BTC, ETH y otras monedas",
    fiat: "Tarjetas Visa y Mastercard, transferencia bancaria y Apple Pay",
    earn: "Ahorro flexible y a plazo fijo y On-Chain Earn",
    launchpad: "Suscripciones de tokens en el Launchpad",
    web3Wallet: "",
    card: "MEXC Card, una tarjeta de pago con criptomonedas",
  },
  countryNotes: {
    de: "no está en la lista de prohibidos, pero MEXC no tiene autorización MiCA y dice en un artículo más reciente que no presta servicio en la UE/EEE",
    fr: "cierre gradual del servicio hasta el 5 de marzo de 2027",
    nl: "baja final de usuarios el 16 de noviembre de 2026",
    es: "no está en la lista de prohibidos, pero MEXC no tiene autorización MiCA y dice en un artículo más reciente que no presta servicio en la UE/EEE",
    it: "no está en la lista de prohibidos, pero MEXC no tiene autorización MiCA y dice en un artículo más reciente que no presta servicio en la UE/EEE",
    au: "no está en la lista de prohibidos; no se ofrece el apalancamiento de 500x",
    jp: "sin prohibición, pero MEXC clasifica a Japón como limitado – su app no está en las tiendas de aplicaciones japonesas",
    in: "sin prohibición, pero MEXC clasifica a la India como limitada – su app no figura allí",
  },
  regional: "",
  mica: "",
  sourceLabels: [
    "MEXC: Copy trading",
    "MEXC: Bot de grid de futuros",
    "MEXC: Trading demo de futuros",
    "MEXC: Explicación de los tipos de cuenta",
    "MEXC: Trading P2P",
    "MEXC: Compra de criptomonedas con tarjeta o transferencia bancaria",
    "MEXC: Earn",
    "MEXC: Launchpad",
    "MEXC: Entender la MEXC Card",
    "MEXC: Cierre gradual del servicio en Francia",
    "MEXC Learn: En busca de alternativas a MEXC",
  ],
};
