import type { ExchangeText } from "../../types";

export const gate: ExchangeText = {
  referral: {
    codeName: "código de referido",
    whereShort: "Va incluido en el enlace de registro – Gate muestra a quien te invita en el formulario de registro",
    apply:
      "Abre el enlace de registro de esta página: Gate vincula el código a tu registro y muestra en el formulario un banner con quien te invita y la recompensa.",
    whereToEnter:
      "En Gate, la vía más segura es el enlace de referido. El enlace de esta página abre gate.com/signup con el código VAAXAW9YVA ya incluido, y Gate lo confirma con un banner encima del formulario (“Register now to receive a gift from your friend”). El primer paso del formulario web solo te pide tu país de residencia, así que ahí no hay ninguna casilla aparte para escribir el código – si no ves el banner de quien te invita, vuelve a abrir el enlace antes de crear la cuenta.",
    afterSignupShort: "Gate no lo documenta – usa el enlace al registrarte",
    afterSignup:
      "Gate no publica ninguna forma de añadir un código de referido a una cuenta del exchange que ya existe. Sus reglas de referidos dicen que cada usuario solo puede registrarse a través de un único método de referido, y la propia guía de Gate advierte de que la relación de referido puede no quedar registrada si un nuevo usuario se registra sin el enlace o el código de invitación. Usa el enlace antes de crear la cuenta.",
    inviteeReward:
      "Al registrarte a través de este enlace entras en el programa Super Commission de Gate: la página de registro de Gate indica que recibes una recompensa por comisión del 10% sobre tus comisiones de trading. Según las reglas del programa, el reembolso se calcula sobre tus comisiones de trading durante 1 año y excluye las transacciones con moneda fiat.",
    guide: [
      "Gate mantiene varios programas de referidos en paralelo. El código VAAXAW9YVA pertenece a Super Commission, donde quien refiere comparte parte de la comisión con las personas a las que invita: el reparto que muestra Gate es del 30% para quien refiere y del 10% para el amigo invitado, calculado sobre las comisiones de trading del amigo durante un año. Las transacciones con moneda fiat quedan excluidas.",
      "Un solo registro cubre spot, margen, futuros y Trenches (la sección que Gate también llama Gate Alpha). Las otras campañas de referidos de Gate funcionan, en cambio, con cupones – “Earn Voucher” y “Token Crew” – pero las reglas de Super Commission establecen que las cuentas invitadas de este modo no son elegibles para recompensas de otros eventos, así que no cuentes con combinarlas.",
      "Gate no admite invitaciones entre sitios. Si vives en el EEE te atiende una entidad independiente de Gate en Malta (gate.com/en-eu), donde la comisión solo se paga por el trading en spot, y un referido hecho en el sitio global no se traslada. Super Commission tampoco está disponible para usuarios de Bélgica, Reino Unido, Francia, Alemania, Países Bajos, Turquía, Austria y Corea del Sur.",
    ],
  },
  signup: {
    methods: ["una dirección de correo electrónico", "un número de teléfono", "Google", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Abre la página de registro de Gate",
        text: "Usa el botón de registro de esta página. Gate muestra encima del formulario un banner con quien te invita y la recompensa del 10% en comisiones – esa es tu confirmación de que el referido está vinculado.",
      },
      {
        title: "Selecciona tu país o región de residencia",
        text: "Elige dónde vives y acepta el Acuerdo de Usuario; después haz clic en “Create Account”.",
      },
      {
        title: "Escribe tu dirección de correo electrónico o tu número de teléfono",
        text: "Elige uno de los dos; Gate lo usa para tu inicio de sesión y los códigos de seguridad.",
      },
      {
        title: "Escribe el código de verificación",
        text: "Gate envía un código a tu correo electrónico o a tu teléfono. Según la guía de la app de Gate, es válido durante 15 minutos.",
      },
      {
        title: "Crea tu contraseña",
        text: "Elige una contraseña segura y única para terminar de crear la cuenta.",
      },
      {
        title: "Verifica tu identidad",
        text: "Completa el KYC con un pasaporte, un documento de identidad o un permiso de conducir. Gate lo exige antes de que puedas depositar o retirar criptomonedas.",
      },
    ],
    kycShort: "Obligatoria para depositar y retirar",
    kyc: "Sí. Gate indica que la verificación de identidad (KYC) es obligatoria para que todos los usuarios puedan depositar y retirar criptomonedas, operar con monedas fiat y participar en las suscripciones de Startup. La verificación de domicilio es opcional y aumenta tus límites de retiro. La tarea de verificación de identidad también forma parte de las recompensas para nuevos usuarios de Gate.",
    documents:
      "Gate acepta un pasaporte, un documento de identidad o un permiso de conducir para la verificación de identidad. De forma voluntaria se puede añadir un comprobante de domicilio para obtener límites más altos.",
    minAge: "18 años (Acuerdo de Usuario de Gate)",
  },
  welcomeTasks: [
    { task: "Registro", reward: "Cupón por valor de 50 USDT" },
    { task: "Completar la verificación de identidad", reward: "Cupón por valor de 50 USDT" },
    { task: "Primer depósito de al menos 10 USDT", reward: "Cupón por valor de 10 USDT" },
    { task: "Primera operación de al menos 10 USDT", reward: "Cupón por valor de 5 USDT" },
    { task: "Primera descarga de la app", reward: "Cupón por valor de 10 USDT" },
    {
      task: "Tarea avanzada, primera etapa: depósito neto de al menos 50 USDT y 500 USDT de volumen de trading",
      reward: "100 USDT (las tareas avanzadas llegan hasta 10,000 USDT)",
    },
  ],
  tokenDiscount: "Pagar las comisiones de spot en GT reduce la tarifa estándar del 0.1% al 0.09% tanto para makers como para takers.",
  extraFeeMarkets: ["Futuros con vencimiento en USDT"],
  sourceLabels: [
    "Gate: Programa de referidos Super Commission y sus reglas",
    "Gate: Campaña de referidos Earn Voucher",
    "Gate: Campaña de referidos Token Crew",
    "Gate Learn: Guía del programa de referidos de Gate",
    "Gate: Rewards Hub (tareas para nuevos usuarios)",
    "Gate: Reglas de las tareas para nuevos usuarios",
    "Gate: Tabla de comisiones",
    "Gate: Niveles de margen y apalancamiento del perpetuo BTCUSDT",
    "Gate: Límite de apalancamiento para cuentas de futuros nuevas",
    "Gate: Cómo registrarse en el sitio web",
    "Gate: Cómo registrarse en la app",
    "Gate: Requisito de KYC",
    "Gate: Cómo completar la verificación de identidad",
    "Gate: Acuerdo de Usuario (ubicaciones restringidas, edad mínima)",
    "Gate: Sobre nosotros",
    "Gate: Licencias",
    "Gate: Prueba de reservas",
    "Gate: Cambio al dominio gate.com (anuncio)",
  ],
  feeDiscount: "10% de tus comisiones de trading de vuelta durante 1 año",
  referralCovers: ["Spot", "Margen", "Futuros", "Trenches (Gate Alpha)"],
  bonusHeadline: "Reembolso del 10% en comisiones más tareas para nuevos usuarios por valor de 125 USDT",
  benefits: [
    "El Rewards Hub de Gate enumera tareas para nuevos usuarios por valor de 125 USDT en cupones (registro, verificación, primer depósito, primera operación, descarga de la app)",
    "Un solo referido cubre spot, margen, futuros y Trenches durante un año",
    "Comisiones de spot del 0.1%, o del 0.09% si las pagas en GT",
    "Opera con más de 5,400 activos digitales desde una sola cuenta",
  ],
  benefitNote:
    "El reembolso del 10% es la recompensa que Gate muestra en la página de registro a la que se llega con este enlace; excluye las transacciones con moneda fiat y no está disponible para usuarios de Bélgica, Reino Unido, Francia, Alemania, Países Bajos, Turquía, Austria y Corea del Sur. Las tareas para nuevos usuarios deben completarse en los 15 días siguientes al registro, pueden variar según la región y excluyen las cuentas institucionales, de API y de afiliados. Las reglas de Gate dicen que las cuentas invitadas mediante el reparto de comisiones no son elegibles para recompensas de otros eventos – el Rewards Hub de tu cuenta muestra lo que realmente puedes reclamar.",
  headquarters: "Gate Group, con entidades con licencia en varias regiones",
  regulation: "Licencias o registros en Malta (MFSA, MiCA), Gibraltar, Bahamas, Hong Kong, Dubái (VARA, DMCC), Australia (AUSTRAC), Japón y Chipre",
  users: "63M+ de usuarios (según Gate)",
  assets: "5,400+ activos digitales",
  maxLeverage: "Hasta 200x (perpetuo BTCUSDT)",
  feeNote:
    "Los niveles VIP más altos pagan menos. Si activas Points Deduction en lugar de GT, Gate aplica tarifas fijas del 0.2% en spot y una comisión taker del 0.075% en futuros.",
  products: ["Futuros perpetuos", "Futuros con vencimiento", "Opciones", "Spot", "Margen", "Copy trading", "Launchpad", "Earn"],
  tagline: "La selección de altcoins más amplia, desde 2013",
  quickAnswer:
    "El código de referido de Gate es VAAXAW9YVA. Abre el enlace de registro de esta página y Gate lo vincula automáticamente – el formulario de registro muestra entonces un banner que promete una recompensa por comisión del 10% sobre tus comisiones de trading. El reembolso dura un año y cubre spot, margen, futuros y Trenches. Gate no documenta ninguna forma de añadir un código más tarde, así que usa el enlace antes de crear la cuenta.",
  about: [
    "Gate se fundó en 2013 – empezó como Bter.com, pasó a ser Gate.io y adoptó el dominio internacional gate.com en mayo de 2025. Su sello distintivo es la amplitud: Gate afirma que lista más de 5,400 activos digitales y atiende a más de 63 millones de usuarios, y los tokens nuevos suelen aparecer allí mucho antes de que otros grandes exchanges los incorporen.",
    "En derivados, Gate registraba el segundo mayor interés abierto del ranking de CoinMarketCap en la fecha de nuestros datos de mercado, con perpetuos con margen en USDT sobre cientos de altcoins, futuros con vencimiento y opciones. El apalancamiento en el perpetuo BTCUSDT llega hasta 200x en el nivel de riesgo más bajo, mientras que las cuentas de futuros nuevas empiezan con un límite de 20x durante sus tres primeros días. El copy trading, un launchpad para tokens nuevos y los productos Earn están junto a las pantallas de trading.",
    "Gate publica su prueba de reservas desde mayo de 2020. El lote del 18 de octubre de 2026 mostraba unas reservas totales de 8.68 mil millones de dólares repartidas en 496 activos y un ratio de reservas del 118%. El grupo enumera licencias y registros en Malta (MFSA, bajo MiCA), Gibraltar, Bahamas, Hong Kong, Dubái, Australia, Japón y Chipre. El sitio global gate.com está cerrado a los residentes de Estados Unidos y de una larga lista de otros países; a los residentes del EEE los atiende la entidad maltesa de Gate.",
  ],
  highlights: [
    { title: "5,400+ activos", text: "Uno de los catálogos de altcoins más grandes entre todos los exchanges." },
    { title: "10% de tus comisiones de vuelta", text: "Lo muestra Gate en la página de registro a la que se llega con este enlace." },
    { title: "Reservas al 118%", text: "Prueba de reservas desde 2020, último lote del 18 de octubre de 2026." },
  ],
  pros: [
    "Futuros sobre muchas altcoins que no encontrarás en otros sitios",
    "Comisión estándar de spot del 0.1%, del 0.09% con GT, y del 0.02% / 0.05% en perpetuos en USDT",
    "Prueba de reservas desde 2020 con un ratio de reservas del 118%",
    "Larga trayectoria desde 2013 y una lista creciente de licencias regionales",
  ],
  cons: [
    "El sitio global está cerrado a muchos países, entre ellos EE. UU., Reino Unido, Canadá, Alemania, Francia, España y Países Bajos",
    "No hay una forma documentada de añadir un código de referido después del registro",
    "Los referidos no se trasladan entre los sitios regionales de Gate",
    "Los tokens más pequeños conllevan un alto riesgo de volatilidad y de liquidez",
  ],
  bestFor: ["Traders de futuros de altcoins", "Cazadores de listados tempranos", "Traders que valoran la amplitud por encima de la sencillez"],
  signupTip:
    "Completa las tareas para nuevos usuarios en los 15 días siguientes al registro – después los cupones para principiantes caducan – y considera pagar las comisiones de spot en GT para bajarlas al 0.09%.",
  safety:
    "Gate publica una prueba de reservas con un ratio de reservas superior al 100% – 118% en el lote del 18 de octubre de 2026 – y su centro de ayuda documenta la autenticación de dos factores, un código antiphishing, una lista blanca de retiros y una contraseña de fondos. Actívalos antes de depositar. Con las altcoins de baja capitalización, comprueba siempre la liquidez antes de abrir posiciones con apalancamiento.",
  restricted:
    "El Acuerdo de Usuario de Gate (última actualización: 22 de julio de 2026) enumera las ubicaciones restringidas para el sitio global, entre ellas Estados Unidos, China continental, Singapur, Canadá, Francia, Alemania, Hong Kong, Malasia, Malta, España, Países Bajos, Reino Unido, Austria, India, Indonesia, Japón, Argentina, Emiratos Árabes Unidos, Tailandia, Corea del Sur, Filipinas, Pakistán, Vietnam, Rusia y Bielorrusia, además de las regiones sancionadas. Algunos de estos países son atendidos por entidades independientes de Gate con sus propios sitios y reglas.",
  faqs: [
    {
      topic: "referral",
      q: "¿VAAXAW9YVA es un código de referido de Gate que funciona?",
      a: "Sí. El 16 de noviembre de 2026, el enlace gate.com/signup/VAAXAW9YVA abrió la página de registro del propio Gate con el código incluido y un banner de quien invita con el texto “Sign up and trade to receive 10% commission reward on trading fees!”.",
    },
    {
      topic: "referral",
      q: "¿Cuánto dura el reembolso por referido de Gate?",
      a: "Un año. Según las reglas de Super Commission de Gate, el reembolso de comisiones se basa en tus comisiones de trading durante 1 año y excluye las transacciones con moneda fiat.",
    },
    {
      topic: "referral",
      q: "¿Gate.io es lo mismo que Gate, y el código sigue funcionando?",
      a: "Sí. Gate.io adoptó el dominio internacional gate.com en mayo de 2025; es el mismo exchange, fundado en 2013. El código VAAXAW9YVA se usa en gate.com.",
    },
    {
      topic: "referral",
      q: "¿El código de referido de Gate funciona en la UE?",
      a: "No de la misma manera. A los residentes del EEE los atiende un sitio independiente de Gate (gate.com/en-eu, operado desde Malta) donde la comisión solo se aplica al trading en spot, y Gate indica que no se admiten invitaciones entre sitios. Super Commission tampoco está disponible para usuarios de Bélgica, Francia, Alemania, Países Bajos y Austria.",
    },
    {
      topic: "referral",
      q: "¿Puedo combinar el reembolso por referido de Gate con los cupones de referidos de Gate?",
      a: "No cuentes con ello. Las reglas de Super Commission de Gate establecen que las cuentas invitadas de este modo no son elegibles para recompensas de otros eventos, lo que abarca las campañas de cupones “Earn Voucher” y “Token Crew”.",
    },
    {
      topic: "signup",
      q: "¿Por qué el formulario de registro de Gate me pide primero mi país?",
      a: "El registro en Gate empieza por tu país o región de residencia porque de ello dependen los productos, las recompensas e incluso la entidad de Gate que te atiende. Solo después escribes tu dirección de correo electrónico o tu número de teléfono.",
    },
    {
      topic: "signup",
      q: "¿Cuánto tiempo es válido el código de verificación de Gate?",
      a: "Según la guía de registro en la app de Gate, el código de verificación enviado a tu correo electrónico o a tu teléfono es válido durante 15 minutos.",
    },
    {
      topic: "signup",
      q: "¿Puedo usar Gate sin KYC?",
      a: "Solo de forma limitada. Gate indica que el KYC es obligatorio para que todos los usuarios puedan depositar y retirar criptomonedas, operar con monedas fiat y unirse a las suscripciones de Startup.",
    },
    {
      topic: "bonus",
      q: "¿Cuál es el bono de bienvenida de Gate para nuevos usuarios?",
      a: "El Rewards Hub de Gate enumera tareas para nuevos usuarios por valor de 125 USDT en cupones: 50 por registrarte, 50 por la verificación de identidad, 10 por un primer depósito de al menos 10 USDT, 5 por una primera operación de al menos 10 USDT y 10 por la primera descarga de la app. Las tareas avanzadas llegan hasta 10,000 USDT. La propia página de registro anuncia hasta 135 USDT, así que los importes que cuentan son los que aparecen en tu cuenta.",
    },
    {
      topic: "bonus",
      q: "¿Cuánto tiempo tengo para completar las tareas para nuevos usuarios de Gate?",
      a: "Las tareas para principiantes deben completarse en los 15 días siguientes al registro. Las operaciones con stablecoins no cuentan para las tareas de trading, y las cuentas institucionales, de API y de afiliados quedan excluidas.",
    },
    {
      topic: "fees",
      q: "¿Cuáles son las comisiones de spot de Gate?",
      a: "La comisión estándar de spot (VIP 0) es del 0.1% para makers y takers, o del 0.09% si pagas las comisiones en GT. Si en su lugar activas Points Deduction, Gate aplica un 0.2% fijo.",
    },
    {
      topic: "fees",
      q: "¿Cuáles son las comisiones de futuros de Gate?",
      a: "Los futuros perpetuos en USDT cuestan un 0.02% maker y un 0.05% taker en el nivel estándar. Los futuros con vencimiento en USDT figuran con un -0.015% maker (un reembolso) y un 0.016% taker.",
    },
    {
      topic: "fees",
      q: "¿Cuál es el apalancamiento máximo en Gate?",
      a: "Hasta 200x en el perpetuo BTCUSDT en el nivel de riesgo más bajo (margen cruzado, posiciones hasta el primer límite de riesgo). Las cuentas de futuros nuevas están limitadas a 20x durante sus tres primeros días. Un apalancamiento tan alto puede liquidar una posición con un movimiento de precio muy pequeño.",
    },
    {
      topic: "safety",
      q: "¿Gate está disponible en EE. UU.?",
      a: "No. Estados Unidos figura en la lista de ubicaciones restringidas del Acuerdo de Usuario de Gate.",
    },
    {
      topic: "safety",
      q: "¿Gate publica una prueba de reservas?",
      a: "Sí, desde mayo de 2020. El lote del 18 de octubre de 2026 mostraba unas reservas totales de 8.68 mil millones de dólares repartidas en 496 activos y un ratio de reservas del 118%.",
    },
    {
      topic: "safety",
      q: "¿Dónde tiene licencia Gate?",
      a: "Gate enumera licencias o registros en Hong Kong, Gibraltar, Malta (MFSA, bajo MiCA), Australia (AUSTRAC), Dubái (VARA y DMCC), Bahamas, Japón y Chipre.",
    },
  ],
};
