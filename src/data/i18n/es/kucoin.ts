import type { ExchangeText } from "../../types";

export const kucoin: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Campo “Referral Code (Optional)” en el primer paso del registro",
    apply:
      "Introdúcelo en el campo “Referral Code (Optional)” del primer paso del registro, o abre el enlace de registro de esta página, que completa el campo y lo bloquea.",
    whereToEnter:
      "KuCoin pide el código de referido justo en el primer paso del registro, junto con tu dirección de correo electrónico o tu número de teléfono – tanto en la web como en la app. El campo se llama “Referral Code (Optional)”. El enlace de esta página abre la página de registro de KuCoin con QBSS4BT7 ya introducido y el campo bloqueado, así que nada puede salir mal. La guía de registro de KuCoin añade que puedes escribir el código a mano si un enlace no lo completa.",
    afterSignupShort: "A petición – “Link Referrer” en el Centro de ayuda (condiciones no publicadas)",
    afterSignup:
      "Posiblemente. El Centro de ayuda de KuCoin ofrece una solicitud de autoservicio llamada “Link Referrer” (“Submit a request to add a referrer manually”) y otra equivalente para desvincular a un referidor. Ambas exigen iniciar sesión, y KuCoin no publica las condiciones ni un plazo, por lo que la aprobación no está garantizada. Introducir el código al registrarte sigue siendo la vía fiable.",
    inviteeReward:
      "La página de referidos de KuCoin dice que los amigos invitados “stand to receive cashback and exclusive newcomer rewards”. El cashback es una parte de tus propias comisiones de trading: el referidor puede fijar una tasa de cashback exclusiva para las personas a las que invita, hasta su tasa de comisión actual, por lo que no hay un porcentaje fijo. La relación de referido dura 365 días desde tu registro. Además, KuCoin anuncia un bono de hasta 10,650 USDT para usuarios nuevos.",
    guide: [
      "El programa de referidos de KuCoin paga al referidor una comisión sobre las comisiones de trading de las personas a las que invita y le permite devolver una parte al usuario invitado en forma de cashback. KuCoin no establece un porcentaje fijo de cashback – es la tasa que haya configurado el referidor, con el límite de la tasa de comisión del propio referidor.",
      "La relación de referido cubre las operaciones spot (que para KuCoin incluyen spot, margen y bots de trading), los ETFs y las operaciones de futuros. Las operaciones realizadas a través de la API no son elegibles. La relación dura 365 días desde tu registro y termina antes si alcanzas VIP 3. Las comisiones de referido se liquidan a diario en la moneda en la que se pagó la comisión de trading.",
      "KuCoin indica que el programa de referidos no está disponible para residentes de Bélgica, Francia, los Países Bajos y otros países o regiones donde sus servicios están restringidos.",
    ],
  },
  signup: {
    methods: ["una dirección de correo electrónico", "un número de teléfono", "Telegram", "Google", "Apple"],
    steps: [
      {
        title: "Abre la página de registro de KuCoin",
        text: "Usa el botón de registro de esta página. KuCoin abre “Welcome to KuCoin” con el código de referido QBSS4BT7 ya introducido en el campo “Referral Code (Optional)”.",
      },
      {
        title: "Introduce tu dirección de correo electrónico o tu número de teléfono",
        text: "O continúa con Telegram, Google o Apple. El código de referido está en este mismo primer paso.",
      },
      {
        title: "Acepta los Términos de uso",
        text: "Marca la casilla de los Términos de uso y la Política de privacidad y selecciona “Create Account and Claim Reward”.",
      },
      {
        title: "Introduce el código de verificación",
        text: "KuCoin envía un código a tu correo electrónico o a tu teléfono para confirmar que es tuyo.",
      },
      {
        title: "Crea una contraseña de inicio de sesión",
        text: "Elige tu contraseña y selecciona “Confirm” – la cuenta ya existe.",
      },
      {
        title: "Verifica tu identidad",
        text: "Elige tu país y el tipo de documento, sube fotos del documento y completa la verificación facial. Los usuarios nuevos la necesitan para usar los productos de KuCoin.",
      },
    ],
    kycShort: "Obligatoria para usuarios nuevos",
    kyc: "Sí. Desde el 31 de agosto de 2023, los usuarios nuevos deben completar la verificación de identidad para usar los productos y servicios de KuCoin. La verificación consiste en elegir tu país y el tipo de documento, subir fotos del documento y pasar una comprobación facial, y una persona solo puede verificar una cuenta de KuCoin. Las cuentas más antiguas que nunca se verificaron todavía pueden vender criptomonedas, cerrar posiciones de futuros y de margen, rescatar productos Earn y retirar fondos, pero no pueden depositar.",
    documents:
      "KuCoin acepta un documento de identidad, una licencia de conducir, un pasaporte o un permiso de residencia, seguidos de la verificación facial.",
    minAge: "18 años (Términos de uso de KuCoin)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Pagar las comisiones en KCS da un 20% de descuento, que KuCoin aplica al trading spot y de margen y abona como reembolso; KuCoin señala que el descuento real puede resultar algo menor. Los niveles VIP más altos reducen las comisiones hasta un 75%.",
  extraFeeMarkets: ["Spot – tokens de clase B", "Spot – tokens de clase C"],
  sourceLabels: [
    "KuCoin: Cómo registrarse (web y app)",
    "KuCoin: Programa de referidos y reglas",
    "KuCoin: Autoservicio del Centro de ayuda (Link Referrer)",
    "KuCoin: Rewards Hub (tareas para usuarios nuevos)",
    "KuCoin: Preguntas frecuentes del Rewards Hub",
    "KuCoin: Tabla de comisiones por nivel VIP",
    "KuCoin: Pago de comisiones con KCS",
    "KuCoin: Verificación de identidad y límites de la cuenta",
    "KuCoin: Apalancamiento de futuros según el tamaño de la posición",
    "KuCoin: Comisiones de los bots de trading",
    "KuCoin: Términos de uso (ubicaciones restringidas, edad mínima)",
    "KuCoin: Sobre nosotros",
    "KuCoin: Prueba de reservas",
    "KuCoin EU: Licencia MiCAR de KuCoin EU Exchange GmbH",
    "KuCoin: Comunicado sobre la resolución con el Departamento de Justicia de EE. UU.",
    "KuCoin: Carta del CEO sobre el incidente de seguridad de 2020",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margen", "Futuros", "Bots de trading", "ETFs"],
  bonusHeadline: "Bono de hasta 10,650 USDT para usuarios nuevos",
  benefits: [
    "La página de registro de KuCoin anuncia un bono de hasta 10,650 USDT para usuarios nuevos, que se desbloquea con tareas en el Rewards Hub",
    "Cashback sobre tus comisiones de trading si el referidor ha fijado una tasa – el programa de KuCoin lo permite durante 365 días",
    "Una sola relación de referido cubre spot, margen, futuros, bots de trading y ETFs",
    "Usar los bots de trading es gratis; solo pagas la comisión de trading del bot",
  ],
  benefitNote:
    "La cifra de 10,650 USDT es el titular del propio KuCoin y un máximo: el Rewards Hub la reparte en forma de paquetes de cupones, fondos de prueba, cupones de comisiones y pequeñas recompensas en efectivo por registrarte, verificar tu identidad, un primer depósito, una primera operación y tareas por tiempo limitado. Las tareas por tiempo limitado deben completarse en los 7 días siguientes al registro y las recompensas son válidas durante 30 días. Los pares de stablecoins y las operaciones sin comisión no cuentan, y los creadores de mercado y los usuarios institucionales quedan excluidos. Las preguntas frecuentes del Rewards Hub de KuCoin todavía mencionan un máximo anterior de 3,200 USDT.",
  headquarters: "No indicada por KuCoin (Términos de uso regidos por la legislación de las Islas Turcas y Caicos)",
  regulation: "Licencia MiCAR a través de KuCoin EU Exchange GmbH, Viena (EEE excepto Malta); registro ante AUSTRAC en Australia",
  users: "45M+ usuarios (según KuCoin)",
  assets: "1,000+ tokens listados, 1,300+ pares de trading",
  maxLeverage: "Hasta 125x (tramo de posición más pequeño)",
  feeNote:
    "KuCoin clasifica los tokens en clases: la comisión spot indicada arriba corresponde a los tokens de clase A, mientras que los tokens de clase B y de clase C cuestan más. La clase depende de la moneda base del par.",
  products: ["Futuros con margen en USDT y en criptomonedas", "Spot", "Margen", "Bots de trading", "Copy trading", "Earn", "KuCoin Web3 Wallet"],
  tagline: "Altcoins y bots de trading para todos",
  quickAnswer:
    "El código de referido de KuCoin es QBSS4BT7. Va en el campo “Referral Code (Optional)” del primer paso del registro; el botón de esta página abre KuCoin con el código ya introducido y bloqueado. La relación de referido cubre spot, margen, futuros y bots de trading durante 365 días, y KuCoin anuncia un bono de hasta 10,650 USDT para usuarios nuevos. Si olvidas el código, el Centro de ayuda de KuCoin tiene una solicitud “Link Referrer”, pero sus condiciones no son públicas.",
  about: [
    "KuCoin se lanzó en el tercer trimestre de 2017 y dice que hoy atiende a más de 45 millones de usuarios en más de 200 países y regiones, con más de 1,000 tokens listados. Se ganó a su público listando altcoins pronto y haciendo fácil el trading automatizado: usar sus bots de trading no cuesta nada más allá de sus comisiones de trading.",
    "Los derivados de KuCoin incluyen futuros con margen en USDT y en criptomonedas, con un apalancamiento máximo de 125x en el tramo de posición más pequeño – el límite baja a 100x en el tramo siguiente y sigue bajando a medida que crece la posición. El exchange también ofrece trading con margen, copy trading, productos Earn y una wallet Web3, y el token KCS da un 20% de descuento en las comisiones spot y de margen.",
    "El 27 de enero de 2025 KuCoin anunció una resolución con el Departamento de Justicia de EE. UU.; ya había cerrado las cuentas de los usuarios de EE. UU. con efecto a partir del 23 de enero de 2025. En el EEE, el grupo opera a través de KuCoin EU Exchange GmbH, en Viena, un proveedor de servicios de criptoactivos con licencia conforme a MiCAR y supervisado por la FMA austriaca. Tras un hackeo en 2020 que afectó a unos 285 millones de dólares, KuCoin afirma que el propio exchange y su fondo de seguro cubrieron los aproximadamente 45.55 millones de dólares que no se pudieron recuperar y que ningún usuario sufrió pérdidas.",
  ],
  highlights: [
    { title: "Bots de trading gratuitos", text: "Los bots en sí no cuestan nada – solo la comisión de trading del bot." },
    { title: "Código fijado", text: "El enlace de registro introduce QBSS4BT7 y bloquea el campo." },
    { title: "Reservas por encima del 100%", text: "BTC 112%, ETH 115%, USDT 110% al 31 de octubre de 2026." },
  ],
  pros: [
    "Trading automatizado fácil para principiantes, con bots gratuitos",
    "Amplia selección de altcoins, con más de 1,000 tokens listados",
    "Comisiones estándar de futuros bajas: 0.02% maker / 0.06% taker",
    "Prueba de reservas por encima del 100% para BTC, ETH, USDT y USDC",
  ],
  cons: [
    "No disponible en EE. UU., Francia, los Países Bajos, Singapur y partes de Canadá",
    "Las comisiones spot suben al 0.2% y al 0.3% para los tokens de clase B y de clase C",
    "Las condiciones para añadir un referidor después del registro no están publicadas",
    "Menor volumen de futuros que los cinco exchanges principales",
  ],
  bestFor: ["Traders que quieren automatizar con bots", "Entusiastas de las altcoins", "Traders de futuros de nivel intermedio"],
  signupTip:
    "Completa la verificación de identidad justo después del registro – los usuarios nuevos la necesitan para poder usar KuCoin – y empieza las tareas por tiempo limitado del Rewards Hub en los 7 días siguientes al registro.",
  safety:
    "KuCoin publica con regularidad informes de prueba de reservas. Los datos del 31 de octubre de 2026 mostraban ratios de reserva del 112% para BTC, 115% para ETH, 110% para USDT y 127% para USDC, con un informe de auditoría fechado el 9 de noviembre de 2026. Tras el hackeo de 2020, KuCoin afirma que ningún usuario sufrió pérdidas. Los bots automatizan la ejecución, no la gestión del riesgo – define siempre una condición de parada y mantén en el exchange solo el capital de trading.",
  restricted:
    "Los Términos de uso de KuCoin (actualizados el 29 de octubre de 2026) enumeran como ubicaciones restringidas: Estados Unidos, incluidos sus territorios, Singapur, China continental y Hong Kong, Malasia, Kazajistán, Uzbekistán, Rusia, Bielorrusia, las provincias canadienses de Ontario y Columbia Británica, Francia, los Países Bajos y las regiones de Crimea, Donetsk, Lugansk, Zaporiyia y Jersón. Está prohibido usar una VPN para eludir la restricción.",
  faqs: [
    {
      topic: "referral",
      q: "¿QBSS4BT7 es un código de referido de KuCoin que funciona?",
      a: "Sí. El 16 de noviembre de 2026, el enlace de esta página abrió la página de registro de KuCoin con QBSS4BT7 ya introducido y bloqueado en el campo “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "¿Cuánto dura la relación de referido en KuCoin?",
      a: "365 días desde tu registro. Según las reglas de KuCoin, las comisiones de referido – y con ellas cualquier cashback – también se detienen si alcanzas el nivel VIP 3.",
    },
    {
      topic: "referral",
      q: "¿Cuánto cashback recibo con un código de referido de KuCoin?",
      a: "KuCoin no establece una tasa fija. El referidor puede fijar una tasa de cashback exclusiva para los usuarios invitados, hasta la tasa de comisión del propio referidor, y se paga sobre las operaciones spot, de margen, con bots de trading, de ETFs y de futuros. Las operaciones por API no son elegibles.",
    },
    {
      topic: "referral",
      q: "¿Qué significa “Link Referrer” en KuCoin?",
      a: "Es una solicitud de autoservicio del Centro de ayuda de KuCoin, descrita como “Submit a request to add a referrer manually”. Es la vía para las cuentas que se registraron sin código. Tienes que iniciar sesión para usarla, y KuCoin no publica sus condiciones.",
    },
    {
      topic: "referral",
      q: "¿En qué países no se aplica el programa de referidos de KuCoin?",
      a: "KuCoin indica que el programa no está disponible para residentes de Bélgica, Francia, los Países Bajos y otros países o regiones donde sus servicios están restringidos.",
    },
    {
      topic: "signup",
      q: "¿Puedo registrarme en KuCoin con Google, Apple o Telegram?",
      a: "Sí. La página de registro de KuCoin muestra “Or continue with” Telegram, Google y Apple debajo del campo de correo electrónico y teléfono.",
    },
    {
      topic: "signup",
      q: "¿Puedo usar KuCoin sin KYC?",
      a: "Como usuario nuevo, no. Desde el 31 de agosto de 2023, los usuarios nuevos deben completar la verificación de identidad para usar los productos y servicios de KuCoin.",
    },
    {
      topic: "signup",
      q: "¿Puedo tener dos cuentas de KuCoin?",
      a: "Verificadas, no. KuCoin indica que una persona solo puede verificar una cuenta de KuCoin.",
    },
    {
      topic: "bonus",
      q: "¿Cuál es el bono de bienvenida de KuCoin?",
      a: "La página de inicio y la página de registro de KuCoin anuncian hasta 10,650 USDT para usuarios nuevos. Se paga mediante tareas para usuarios nuevos en el Rewards Hub – registro, verificación de identidad, primer depósito, primera operación y tareas por tiempo limitado – en forma de paquetes de cupones, fondos de prueba, cupones de comisiones y pequeñas recompensas en efectivo. La tarea de registro aparece como 400 USDT Bonus Pack and Cash Reward.",
    },
    {
      topic: "bonus",
      q: "¿Cuánto tiempo tengo para reclamar las recompensas para usuarios nuevos de KuCoin?",
      a: "Las tareas de desafío por tiempo limitado deben completarse en los 7 días siguientes al registro, y KuCoin indica que las recompensas son válidas durante 30 días antes de caducar.",
    },
    {
      topic: "bonus",
      q: "¿Qué operaciones no cuentan para las tareas para usuarios nuevos de KuCoin?",
      a: "Las operaciones en pares de stablecoins y las operaciones sin comisión no cuentan. Los creadores de mercado y los usuarios institucionales no son elegibles en ningún caso.",
    },
    {
      topic: "fees",
      q: "¿Cuáles son las comisiones de futuros de KuCoin?",
      a: "Los usuarios VIP 0 pagan 0.02% maker y 0.06% taker en futuros. El bot Futures Grid aplica una comisión de trading fija del 0.06%.",
    },
    {
      topic: "fees",
      q: "¿De cuánto es el descuento con KCS en KuCoin?",
      a: "20%. KuCoin lo aplica al trading spot y de margen cuando pagas las comisiones en KCS y lo abona como reembolso; el descuento real puede ser algo menor.",
    },
    {
      topic: "fees",
      q: "¿Son gratuitos los bots de trading de KuCoin?",
      a: "Sí, KuCoin indica que los bots en sí son gratuitos. Las operaciones siguen una regla de comisiones aparte para bots: los bots spot obtienen un 20% de descuento sobre la tasa maker y taker de VIP 0, el bot Futures Grid paga un 0.06% fijo, y las deducciones con KCS y los niveles VIP no se aplican.",
    },
    {
      topic: "fees",
      q: "¿Cuál es el apalancamiento máximo en KuCoin?",
      a: "125x para cuentas verificadas en el tramo de posición más pequeño. El apalancamiento de futuros de KuCoin se escalona según el tamaño de la posición – el tramo siguiente está limitado a 100x.",
    },
    {
      topic: "safety",
      q: "¿KuCoin está disponible en EE. UU.?",
      a: "No. Estados Unidos es una ubicación restringida en los Términos de uso de KuCoin, y KuCoin cerró las cuentas de los usuarios de EE. UU. con efecto a partir del 23 de enero de 2025.",
    },
    {
      topic: "safety",
      q: "¿KuCoin está regulado en Europa?",
      a: "KuCoin EU Exchange GmbH, en Viena, es un proveedor de servicios de criptoactivos con licencia conforme a MiCAR y supervisado por la Autoridad del Mercado Financiero de Austria. Presta servicio en el EEE excepto Malta.",
    },
    {
      topic: "safety",
      q: "¿KuCoin fue hackeado?",
      a: "Sí, en 2020. Se vieron afectados unos 285 millones de dólares. KuCoin afirma que el propio exchange y su fondo de seguro cubrieron los aproximadamente 45.55 millones de dólares (16%) que no se pudieron recuperar y que ningún usuario sufrió pérdidas.",
    },
  ],
};
