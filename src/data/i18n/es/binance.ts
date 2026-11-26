import type { ExchangeText } from "../../types";

export const binance: ExchangeText = {
  referral: {
    codeName: "Referral ID",
    whereShort: "Campo “Referral ID (Optional)” en el último paso del registro",
    apply:
      "Introdúcelo en el campo “Referral ID (Optional)” en el último paso del registro, o abre el enlace de registro de esta página, que lo completa por ti.",
    whereToEnter:
      "Binance pide el código de referido en el último paso del registro – después de que hayas confirmado tu correo electrónico o tu número de teléfono y creado una contraseña – tanto en el sitio web como en la app. Si llegas a través de un enlace de referido, Binance completa el código por ti y muestra junto a él una marca de verificación verde con “Linked”. Si no, escribe REFCO888 en el campo “Referral ID (Optional)”. El paso es opcional y se puede omitir.",
    afterSignupShort: "Sí – en un plazo de 30 días, antes de cualquier depósito u operación",
    afterSignup:
      "Sí, con condiciones. Binance te permite vincular un código de referido que falte en su página de vinculación de referidos (binance.com/en/activity/referral/bind-ref) si tu cuenta tiene menos de 30 días, no tiene depósitos ni actividad de trading, todavía no tiene una relación de referido y es una cuenta principal, si tu verificación de identidad no se usó en otra cuenta en los últimos 180 días y si la cuenta no está marcada por wash trading. Una vez vinculada la relación de referido, Binance indica que no se puede cambiar ni eliminar.",
    inviteeReward:
      "REFCO888 es un código de Binance Referral Pro. En el modo Pro, el usuario invitado recibe de vuelta una parte de sus propias comisiones de trading, pagada en USDC, si quien lo refirió ha decidido compartir su comisión – Binance muestra durante el registro la tasa que se aplica. Aparte del código, Binance da a cada nuevo usuario verificado tareas para principiantes por un valor de hasta 100 USD en cupones de reembolso de comisiones de trading.",
    guide: [
      "Binance tiene dos modos de referidos, y un usuario nuevo solo puede estar en uno de ellos. Los enlaces con la forma binance.com/register?ref=… – como el de esta página – pertenecen a Referral Pro: quien te refiere gana una comisión sobre tus comisiones de trading y puede devolverte una parte como reembolso en USDC. El otro modo, Referral Lite, funciona con cupones de reembolso de comisiones de trading para primeras compras y operaciones pequeñas; Binance no emite esos cupones con un código Pro.",
      "Un solo referido Pro cubre Spot, Margen y Futuros. Cuando más adelante abres una cuenta de Futuros, Binance muestra un segundo campo opcional, “Futures Referral ID”. Solo acepta un código de la misma persona que invitó a tu cuenta principal, así que no puedes combinar dos invitaciones de personas distintas.",
      "Importa dónde vives. Desde el 1 de julio de 2026, los usuarios registrados en países del Espacio Económico Europeo (EEE) ya no pueden participar de ninguna forma en el programa de referidos de Binance, y los términos de referidos de Binance también enumeran restricciones para el Reino Unido, Singapur, Japón, Turquía, Hong Kong e Israel. Aun así puedes abrir una cuenta desde los países en los que Binance presta servicio, pero entonces el referido no tiene ningún efecto.",
    ],
  },
  signup: {
    methods: ["un correo electrónico", "un número de teléfono", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Abre la página de registro de Binance",
        text: "Usa el botón de registro de esta página. Abre accounts.binance.com con el referido ya incluido – Binance muestra el código REFCO888 junto al formulario.",
      },
      {
        title: "Introduce tu correo electrónico o tu número de teléfono",
        text: "O continúa con Google, Apple o Telegram. Acepta los Términos de uso y el Aviso de privacidad para seguir.",
      },
      {
        title: "Confirma el código de 6 dígitos",
        text: "Binance envía un código de verificación de 6 dígitos a tu correo o a tu teléfono. Es válido durante 30 minutos.",
      },
      {
        title: "Crea una contraseña",
        text: "Al menos 8 caracteres, incluidos una letra mayúscula y un número.",
      },
      {
        title: "Revisa el código de referido",
        text: "En el último paso, el Referral ID ya debería estar completado, con una marca de verificación verde y “Linked”. Si el campo está vacío, escribe REFCO888 – u omítelo si no quieres un referido.",
      },
      {
        title: "Verifica tu identidad",
        text: "Después, Binance te lleva a la verificación de identidad. Todos los usuarios nuevos deben completarla antes de depositar u operar.",
      },
    ],
    kycShort: "Obligatoria para todos los productos",
    kyc: "Sí. Binance exige que todos los usuarios nuevos completen la verificación de identidad (estado “Verified”) antes de usar cualquier producto – incluidos los depósitos y las operaciones con criptomonedas. Eliges un documento, lo subes y superas una prueba de vida; Binance afirma que la revisión suele terminar en un plazo de 48 horas. Las cuentas más antiguas que nunca se verificaron solo pueden hacer retiros.",
    documents:
      "La mayoría de los usuarios puede verificarse con un pasaporte, un documento nacional de identidad o una licencia de conducir, seguido de una prueba de vida (facial).",
    minAge: "18 años (Términos de uso de Binance)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Pagar las comisiones en BNB reduce un 25% las comisiones spot (0.075% en lugar de 0.10%) y un 10% las comisiones de futuros USDⓈ-M (0.018% maker / 0.045% taker en lugar de 0.02% / 0.05%).",
  extraFeeMarkets: ["Futuros COIN-M"],
  sourceLabels: [
    "Binance: Cómo registrarse en el sitio web (paso del referido)",
    "Binance: Cómo registrarse en la app",
    "Binance: Vincular un código de referido después del registro",
    "Binance: Modos Referral Pro y Referral Lite",
    "Binance: Términos del programa de referidos y restricciones regionales",
    "Binance: Recompensas de bienvenida para nuevos usuarios (cupones de reembolso de comisiones)",
    "Binance: Tasas de comisión del trading spot",
    "Binance: Tasas de comisión de los futuros USDⓈ-M",
    "Binance: Tasas de comisión de los futuros COIN-M",
    "Binance: Apalancamiento y margen de los futuros USDⓈ-M",
    "Binance: Límites de apalancamiento para cuentas de futuros nuevas",
    "Binance: Verificación de identidad",
    "Binance: Términos de uso",
    "Binance: Lista de países prohibidos",
    "Binance: Licencias y registros",
    "Binance: Prueba de reservas",
    "Binance: Fondo SAFU",
    "Binance: Acerca de",
  ],
  guides: {
    heading: "Guías en Binance Square",
    intro:
      "En Binance Square, la plataforma de contenido propia de Binance, hay una guía más extensa con checklist para registrarse con un código de referido de Binance y una breve FAQ en vídeo sobre el mismo tema. Binance Square muestra ambas en español:",
    linkLabel: "Preguntas frecuentes sobre el código de referido de Binance",
    videoLinkLabel: "Código de referido de Binance: FAQ en vídeo",
  },
  feeDiscount: "",
  referralCovers: ["Spot", "Margen", "Futuros"],
  bonusHeadline: "Hasta 100 USD en cupones de reembolso de comisiones",
  benefits: [
    "Tareas para principiantes por un valor de hasta 100 USD en cupones de reembolso de comisiones de trading una vez que tu cuenta está verificada",
    "Un solo referido cubre Spot, Margen y Futuros – no hace falta un segundo código",
    "25% de descuento en las comisiones spot y 10% en las comisiones de futuros USDⓈ-M si pagas las comisiones en BNB",
    "El código todavía se puede vincular hasta 30 días después del registro si no has depositado ni operado",
  ],
  benefitNote:
    "Los cupones de bienvenida son la oferta general de Binance para nuevos usuarios, no una recompensa del código de referido. Se emiten después de la verificación de identidad, reembolsan comisiones de trading spot, no pueden compensar operaciones hechas por API y solo se pueden usar en la app de Binance. Binance excluye de ellos a una larga lista de países, entre ellos el Reino Unido, Estados Unidos, Canadá, los Países Bajos, Noruega, Serbia, Japón, Singapur y Hong Kong.",
  headquarters: "Operado a través de entidades con licencia del ADGM en Abu Dabi",
  regulation: "Regulado por la FSRA del ADGM (Abu Dabi); otras licencias y registros, entre ellos Dubái (VARA), Baréin, Kazajistán, Australia y Japón",
  users: "320M+ usuarios registrados (según Binance)",
  assets: "600+ criptomonedas",
  maxLeverage: "Hasta 150x (perpetuos BTCUSDT y ETHUSDT)",
  feeNote: "Los niveles VIP más altos reducen aún más las tasas.",
  products: ["Spot", "Margen", "Futuros USDⓈ-M y COIN-M", "Opciones", "Copy trading", "Bots de trading", "Earn y Launchpool"],
  tagline: "La liquidez más profunda en derivados cripto",
  quickAnswer:
    "El código de referido de Binance es REFCO888. Binance lo pide en el último paso del registro; con el botón de esta página se completa automáticamente. Un solo código cubre Spot, Margen y Futuros. Si lo olvidaste, Binance te permite vincular un código en un plazo de 30 días desde el registro, siempre que no hayas depositado ni operado. Los nuevos usuarios verificados también pueden ganar hasta 100 USD en cupones de reembolso de comisiones de trading.",
  about: [
    "Binance se lanzó en julio de 2017 y, según su propio relato, se convirtió en el mayor exchange de criptomonedas del mundo en 180 días. Hoy declara más de 320 millones de usuarios registrados en más de 180 países y lista más de 600 criptomonedas. En derivados es el claro número uno: en la fecha de nuestros datos de mercado tenía más interés abierto que los tres exchanges siguientes del ranking de derivados de CoinMarketCap juntos. Para los traders eso importa, porque unos libros de órdenes profundos significan spreads más ajustados y menos deslizamiento (slippage) en las órdenes grandes.",
    "Un solo inicio de sesión da acceso al trading spot y con margen, a los futuros con margen en USDⓈ y con margen en criptomonedas, a opciones, bots de trading y copy trading, además de Earn y Launchpool. El apalancamiento en los futuros USDⓈ-M llega hasta 150x en los perpetuos BTCUSDT y ETHUSDT para posiciones de hasta 300,000 USDT; los contratos con margen en criptomonedas llegan hasta 125x. Las cuentas de futuros nuevas no pueden usar más de 20x durante sus primeros 30 días.",
    "Binance.com está regulado por la Financial Services Regulatory Authority de Abu Dhabi Global Market (ADGM) a través de tres entidades con licencia. Binance también enumera licencias y registros en Dubái (VARA), Baréin, Kazajistán, Australia (AUSTRAC), India, Indonesia, Japón, Nueva Zelanda, Tailandia, México, El Salvador, Argentina, Brasil y Sudáfrica. Su prueba de reservas combina un árbol de Merkle con zk-SNARKs para que los usuarios puedan comprobar que su propio saldo está incluido, y su fondo de emergencia SAFU, creado en 2018, tenía aproximadamente 1,000 millones de dólares a febrero de 2026.",
  ],
  highlights: [
    { title: "N.º 1 en liquidez", text: "El mayor interés abierto y el mayor volumen de futuros de todos los exchanges." },
    { title: "Comisiones de futuros bajas", text: "0.02% maker / 0.05% taker en el nivel estándar, un 10% menos con BNB." },
    { title: "Todo en una sola app", text: "Futuros, opciones, bots, copy trading y Earn en una sola cuenta." },
  ],
  pros: [
    "Liquidez inigualable en los perpetuos de BTC, ETH y las principales altcoins",
    "Comisiones estándar competitivas con un descuento adicional por BNB",
    "Prueba de reservas que puedes verificar tú mismo y el fondo SAFU, de aproximadamente 1,000 millones de dólares",
    "Un código de referido que falte todavía se puede vincular en un plazo de 30 días",
  ],
  cons: [
    "No está disponible en Estados Unidos, Canadá ni los Países Bajos",
    "La verificación de identidad es obligatoria antes de que puedas depositar u operar",
    "Las cuentas de futuros nuevas están limitadas a un apalancamiento de 20x durante los primeros 30 días",
    "Los residentes del EEE están excluidos del programa de referidos desde julio de 2026",
  ],
  bestFor: [
    "Traders activos de futuros que necesitan liquidez profunda",
    "Traders que quieren una sola plataforma para todo",
    "Usuarios de alto volumen que se benefician de los niveles VIP",
  ],
  signupTip:
    "Completa la verificación de identidad de inmediato: Binance no permite que las cuentas nuevas depositen ni operen sin ella, y las tareas de bienvenida solo se emiten una vez que estás verificado.",
  safety:
    "Binance publica una prueba de reservas que, según afirma, muestra que todos los saldos de las cuentas están respaldados 1:1 – la auditoría del 12 de noviembre de 2026 mostró un ratio de reservas de BTC del 100.05% – y te permite verificar tu propia cuenta en Wallet → Verification. La protección de la cuenta incluye autenticación de dos factores, llaves de acceso (passkeys) y una lista blanca de retiros. El fondo SAFU está pensado para proteger a los usuarios en casos extremos. Ningún exchange centralizado está libre de riesgos, así que mantén allí solo los fondos con los que operas activamente.",
  restricted:
    "La lista de países prohibidos de Binance (actualizada el 5 de enero de 2026) nombra a Estados Unidos, Canadá, los Países Bajos, Cuba, Corea del Norte, Irán, Crimea y las llamadas Repúblicas Populares de Donetsk y Lugansk.",
  faqs: [
    {
      topic: "referral",
      q: "¿REFCO888 es un código de referido de Binance que funciona?",
      a: "Sí. El 16 de noviembre de 2026, el enlace binance.com/register?ref=REFCO888 abrió la propia página de registro de Binance, que mostraba el código REFCO888 junto al formulario de registro.",
    },
    {
      topic: "referral",
      q: "¿Cuál es la diferencia entre Binance Referral Pro y Referral Lite?",
      a: "Son dos modos separados, y un usuario nuevo solo puede estar en uno. En Referral Pro, quien te refiere gana una comisión sobre tus comisiones de trading y puede compartir una parte contigo como reembolso pagado en USDC. En Referral Lite, ambas partes reciben cupones de reembolso de comisiones de trading por completar pequeñas tareas de primera compra y primera operación. REFCO888 es un código de Referral Pro, así que los cupones de Lite no se aplican.",
    },
    {
      topic: "referral",
      q: "¿Hay un código de referido aparte para Binance Futures?",
      a: "Binance muestra un campo opcional “Futures Referral ID” cuando abres una cuenta de Futuros. Solo acepta un código de la misma persona cuyo código o enlace de Referral Pro usaste para registrarte, así que, en la práctica, un solo referido cubre Spot, Margen y Futuros.",
    },
    {
      topic: "referral",
      q: "¿Puedo cambiar mi código de referido de Binance más adelante?",
      a: "No. Binance indica que, una vez establecida la relación de referido, no se puede cambiar ni eliminar. Solo una cuenta sin ningún referido puede vincular uno, en un plazo de 30 días desde el registro y antes de su primer depósito u operación.",
    },
    {
      topic: "referral",
      q: "¿Funciona el código de referido de Binance en la UE?",
      a: "Ya no. Según los términos de referidos de Binance, los usuarios registrados en países del EEE no son elegibles para participar en el programa de referidos de Binance desde el 1 de julio de 2026. Los términos también enumeran restricciones para el Reino Unido, Singapur, Japón, Turquía, Hong Kong e Israel.",
    },
    {
      topic: "signup",
      q: "¿Puedo registrarme en Binance con Google, Apple o Telegram?",
      a: "Sí. Además de un correo electrónico o un número de teléfono, la página de registro de Binance ofrece “Continue with Google”, “Continue with Apple” y “Continue with Telegram”.",
    },
    {
      topic: "signup",
      q: "¿Cuáles son los requisitos de la contraseña de Binance?",
      a: "Una contraseña de Binance necesita al menos 8 caracteres, incluidos una letra mayúscula y un número.",
    },
    {
      topic: "signup",
      q: "¿Cuánto tiempo es válido el código de verificación de Binance?",
      a: "El código de 6 dígitos que Binance envía a tu correo o a tu teléfono durante el registro es válido durante 30 minutos.",
    },
    {
      topic: "signup",
      q: "¿Cuánto tarda la verificación de identidad de Binance?",
      a: "Binance afirma que la revisión suele completarse en un plazo de 48 horas después de que envías tu documento y superas la prueba de vida.",
    },
    {
      topic: "signup",
      q: "¿Puedo usar Binance sin KYC?",
      a: "No. Todos los usuarios nuevos deben estar verificados antes de poder usar los productos de Binance, incluidos los depósitos y las operaciones con criptomonedas. Las cuentas antiguas sin verificar solo pueden retirar.",
    },
    {
      topic: "bonus",
      q: "¿Cuál es el bono de bienvenida de Binance para nuevos usuarios?",
      a: "Binance da a los nuevos usuarios tres tareas para principiantes que desbloquean hasta 100 USD en cupones de reembolso de comisiones de trading. Las tareas solo se emiten después de que completas la verificación de la cuenta, y cada cupón reembolsa un porcentaje fijo de tus comisiones de trading spot.",
    },
    {
      topic: "bonus",
      q: "¿Puedo retirar el bono de bienvenida de Binance?",
      a: "No. La recompensa es un cupón de reembolso de comisiones de trading, no dinero en efectivo: reembolsa comisiones de trading spot, no se puede usar para operaciones realizadas a través de la API y solo se puede usar en la app de Binance.",
    },
    {
      topic: "bonus",
      q: "¿Qué países están excluidos de los cupones de bienvenida de Binance?",
      a: "Los términos de Binance excluyen, entre otros, al Reino Unido, Estados Unidos, Canadá, los Países Bajos, Croacia, Noruega, Islandia, Liechtenstein, Serbia, Albania, Rusia, Japón, Singapur y Hong Kong. La lista completa está en el artículo de ayuda de Binance sobre las recompensas de bienvenida.",
    },
    {
      topic: "fees",
      q: "¿De cuánto es el descuento en comisiones de Binance con BNB?",
      a: "Pagar las comisiones en BNB reduce un 25% las comisiones spot – 0.075% en lugar de 0.10% para los usuarios regulares – y un 10% las comisiones de futuros USDⓈ-M, lo que da 0.018% maker y 0.045% taker.",
    },
    {
      topic: "fees",
      q: "¿Cuál es el apalancamiento máximo en Binance?",
      a: "Hasta 150x en los contratos perpetuos USDⓈ-M BTCUSDT y ETHUSDT para posiciones de hasta 300,000 USDT, y hasta 125x en el perpetuo BTCUSD con margen en criptomonedas. Las cuentas de futuros con menos de 30 días no pueden usar más de 20x. Un apalancamiento alto aumenta drásticamente el riesgo de liquidación.",
    },
    {
      topic: "fees",
      q: "¿Cuáles son las comisiones de los futuros COIN-M de Binance?",
      a: "Los usuarios regulares pagan 0.02% maker y 0.05% taker en los futuros COIN-M, las mismas tasas que en los contratos USDⓈ-M con margen en USDT.",
    },
    {
      topic: "safety",
      q: "¿Binance está disponible en Estados Unidos?",
      a: "No. Estados Unidos figura en la lista de países prohibidos de Binance, junto con Canadá y los Países Bajos.",
    },
    {
      topic: "safety",
      q: "¿Qué es el fondo SAFU de Binance?",
      a: "SAFU (Secure Asset Fund for Users) es un fondo de emergencia que Binance creó en 2018 para proteger a los usuarios en casos extremos. Binance indica que, a febrero de 2026, tenía criptoactivos por un valor aproximado de 1,000 millones de dólares y que se repone si cae por debajo de 800 millones de dólares.",
    },
    {
      topic: "safety",
      q: "¿Cómo compruebo la prueba de reservas de Binance?",
      a: "Binance publica sus ratios de reservas en su página de prueba de reservas y utiliza un árbol de Merkle con zk-SNARKs. Los usuarios que han iniciado sesión pueden confirmar que su propio saldo está incluido en Wallet → Verification.",
    },
  ],
};
