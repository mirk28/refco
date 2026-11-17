import type { ExchangeText } from "../../types";

export const bitget: ExchangeText = {
  referral: {
    codeName: "Referral code",
    whereShort: "Campo “Referral code” del formulario de registro (opcional)",
    apply:
      "Introdúcelo en el campo “Referral code” del formulario de registro o abre el enlace de registro de esta página, que rellena el campo y lo bloquea.",
    whereToEnter:
      "El formulario de registro de Bitget tiene un campo opcional llamado “Referral code”. En la web aparece justo después de tu correo electrónico o número de teléfono móvil, antes de que crees la contraseña; en la app aparece después de la contraseña, antes de que toques “Create account”. El enlace de esta página abre la página de registro por referido de Bitget con JZVEV1M3 ya introducido y el campo bloqueado.",
    afterSignupShort: "No – solo durante el registro (excepciones solo a través de soporte)",
    afterSignup:
      "Por tu cuenta, no. El Centro de ayuda de Bitget indica que los códigos de referido deben introducirse durante el registro y que no se pueden añadir ni cambiar una vez creada la cuenta. Según la misma respuesta del Centro de ayuda, la única vía es un ticket de soporte con tu UID, el código y una prueba de que la invitación se envió antes de que te registraras – sin resultado garantizado. Bitget no publica ningún plazo para ello.",
    inviteeReward:
      "El programa de referidos público de Bitget recompensa al usuario invitado con airdrops de BTC y Mystery Boxes: un airdrop de BTC por valor de 9 dólares más una Mystery Box de hasta 500 USDT por un depósito neto de al menos 200 USDT en un plazo de 15 días y una primera operación que cumpla los requisitos, y otros 18 dólares en BTC más una Mystery Box de hasta 1,000 USDT cuando tu volumen total de trading supere los 100,000 USDT. Estas recompensas exigen que quien te invita esté inscrito en la promoción y no se pagan si alguna de las dos partes tiene una cuenta de afiliado, de market maker o de bróker, así que los importes que aparecen en tu cuenta después del registro son los que se aplican. Independientemente del código, los usuarios nuevos reciben el paquete de bienvenida de Bitget de hasta 6,200 USDT.",
    guide: [
      "Un código de referido de Bitget vincula tu nueva cuenta con quien te invitó. Bitget cuenta para el programa casi todo lo que operas: trading spot, incluidos copy trading y margen, futuros, stock perps, perpetuos de materias primas, acciones en spot y CFD.",
      "La primera etapa de recompensas exige un depósito neto de al menos 200 USDT en los 15 días posteriores al registro y, el día de tu primera operación, al menos 1,000 USDT de volumen en spot, 4,000 USDT de volumen en futuros o 100,000 USDT de volumen en CFD. Una Mystery Box puede contener USDT, bonos de trading de futuros, cupones de aumento de posición en futuros, cupones de APR de Earn o cupones de reembolso de comisiones spot, y hay que reclamarla en los 30 días siguientes a su abono.",
      "Bitget no indica ningún descuento en comisiones para los usuarios invitados. Lo que sí reduce lo que pagas en Bitget es el token BGB: pagar las comisiones de spot o de margen en BGB da un 20% de descuento.",
    ],
  },
  signup: {
    methods: ["un correo electrónico", "un número de teléfono móvil", "Google", "Telegram", "una wallet de criptomonedas"],
    steps: [
      {
        title: "Abre la página de registro de Bitget",
        text: "Usa el botón de registro de esta página. Bitget abre su página de registro por referido con el código JZVEV1M3 ya introducido y bloqueado.",
      },
      {
        title: "Introduce tu correo electrónico o tu número de teléfono móvil",
        text: "La guía de registro de Bitget también menciona el registro con Google, Telegram o una wallet.",
      },
      {
        title: "Revisa el código de referido y acepta los términos",
        text: "El campo “Referral code” debe mostrar JZVEV1M3. Acepta los términos y haz clic en “Next”.",
      },
      {
        title: "Crea una contraseña",
        text: "Entre 8 y 32 caracteres.",
      },
      {
        title: "Supera el captcha e introduce el código de 6 dígitos",
        text: "Completa la verificación de seguridad y escribe el código de 6 dígitos que Bitget envía a tu correo electrónico o a tu teléfono. Para registrarte no hacen falta documentos.",
      },
      {
        title: "Verifica tu identidad",
        text: "Completa la verificación de nivel 1 con un documento de identidad y una verificación facial – sin ella no puedes depositar, operar ni retirar.",
      },
    ],
    kycShort: "Obligatoria para todos los usuarios",
    kyc: "Sí. Bitget indica que todos los usuarios nuevos deben completar la verificación de identidad inmediatamente después de registrarse; la norma se aplica desde el 1 de septiembre de 2023. Sin ella no puedes depositar, operar ni retirar fondos, incluidos los retiros on-chain y las transferencias internas. El nivel 1 consiste en un documento de identidad y una verificación facial; el comprobante de domicilio solo hace falta si Bitget lo pide. Tras la verificación, el límite de retiro estándar es de 3 millones de USDT cada 24 horas.",
    documents: "Un documento de identidad emitido por el gobierno, pasaporte, licencia de conducir o permiso de residencia, más la verificación facial.",
    minAge: "18 años",
  },
  welcomeTasks: [
    { task: "Pack de bienvenida: haz check-in durante tres días", reward: "Cupón de aumento de posición en futuros USDT-M de BTC de 200 USDT" },
    { task: "Desafío: depósito neto de al menos 1,000 USDT, 100 USDT de volumen en spot y 300,000 USDT de volumen en futuros", reward: "50 USDT" },
    { task: "Desafío: depósito neto de al menos 20,000 USDT, 10,000 USDT de volumen en spot y 2,000,000 USDT de volumen en futuros", reward: "400 USDT" },
    { task: "Desafío: depósito neto de al menos 100,000 USDT, 100,000 USDT de volumen en spot y 80,000,000 USDT de volumen en futuros", reward: "6,000 USDT" },
    { task: "Referidos: depósito neto de al menos 200 USDT en un plazo de 15 días más una primera operación que cumpla los requisitos", reward: "Airdrop de BTC por valor de 9 dólares y una Mystery Box (hasta 500 USDT)" },
    { task: "Referidos: volumen total de trading superior a 100,000 USDT", reward: "18 dólares en BTC y una Mystery Box (hasta 1,000 USDT)" },
  ],
  tokenDiscount:
    "Pagar las comisiones de spot o de margen en BGB da un 20% de descuento – 0.08% en lugar de 0.1% para los usuarios estándar. La tabla de comisiones de Bitget no muestra ningún descuento con BGB para futuros.",
  extraFeeMarkets: ["Futuros Coin-M", "Futuros USDC-M"],
  sourceLabels: [
    "Bitget: Cómo registrarse (sitio web)",
    "Bitget: Cómo registrarse (app)",
    "Bitget: Programa de referidos y reglas",
    "Centro de ayuda de Bitget: añadir un código de referido después del registro",
    "Bitget: Recompensas para usuarios nuevos (paquete de bienvenida)",
    "Bitget: Reglas de los bonos de trading",
    "Bitget: Tabla de comisiones",
    "Bitget: Usar BGB para pagar las comisiones de trading",
    "Bitget: Verificación de identidad (KYC)",
    "Bitget: Límites de retiro",
    "Bitget: Términos de uso (países prohibidos)",
    "Bitget: Sobre nosotros",
    "Bitget: Licencias regulatorias",
    "Bitget: Prueba de reservas",
    "Bitget: Fondo de Protección (Protection Fund)",
    "Bitget: Copy trading para seguidores",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margen", "Futuros", "Copy trading", "Stock perps y CFD"],
  bonusHeadline: "Paquete de bienvenida de hasta 6,200 USDT",
  benefits: [
    "Recompensas para usuarios nuevos de hasta 6,200 USDT, empezando por un cupón de aumento de posición en futuros de 200 USDT por hacer check-in tres días",
    "Recompensas del programa de referidos para el usuario invitado: airdrops de BTC y Mystery Boxes de hasta 500 y 1,000 USDT",
    "Un solo referido cuenta para spot, margen, futuros, copy trading, stock perps y CFD",
    "20% de descuento en las comisiones de spot y de margen si las pagas en BGB",
  ],
  benefitNote:
    "La cifra de 6,200 USDT es un máximo: 200 USDT llegan en forma de cupón de aumento de posición en futuros y el resto procede de un desafío de depósito y trading en el que solo se paga el nivel más alto que alcances, de modo que la recompensa máxima exige un depósito neto de 100,000 USDT y 80 millones de USDT de volumen en futuros. Los requisitos deben cumplirse en un plazo de siete días; en futuros solo cuentan las órdenes taker, y quedan excluidas las operaciones de copy trading, por API y con bots. Las recompensas se reclaman manualmente y los bonos de trading no se pueden retirar como efectivo. Las recompensas por referidos dependen de que quien te invita esté inscrito en la promoción de Bitget y no se pagan a cuentas de afiliado ni a través de ellas.",
  headquarters: "No indicada por Bitget (operador nombrado en los Términos: BTG Technology Holdings Limited)",
  regulation: "Registros o licencias en Australia (AUSTRAC), El Salvador (BSP, DASP), Argentina (VASP), Sudáfrica, México, Mauricio y Georgia",
  users: "150M de usuarios registrados (según Bitget)",
  assets: "600+ pares de trading spot, 200+ pares de futuros",
  maxLeverage: "Hasta 150x (futuros de BTC y ETH)",
  feeNote: "Los niveles VIP más altos pagan menos.",
  products: ["Futuros USDT-M, Coin-M y USDC-M", "Spot", "Margen", "Copy trading", "Bots de trading", "Acciones tokenizadas y CFD", "Earn", "Bitget Wallet"],
  tagline: "La casa del copy trading de criptomonedas",
  quickAnswer:
    "El código de referido de Bitget es JZVEV1M3. Introdúcelo en el campo “Referral code” al registrarte – el botón de esta página lo rellena y lo bloquea. Hay que introducirlo durante el registro: el Centro de ayuda de Bitget dice que los códigos no se pueden añadir ni cambiar después, salvo mediante un ticket de soporte. Los usuarios nuevos pueden reclamar un paquete de bienvenida de hasta 6,200 USDT, empezando por un cupón de futuros de 200 USDT por hacer check-in tres días.",
  about: [
    "Bitget se fundó en 2018 y declara 150 millones de usuarios registrados y más de 20 mil millones de USDT de volumen de trading diario. Se hizo un nombre con el copy trading y se define como la mayor plataforma de copy trading de criptomonedas: los seguidores eligen un trader líder, fijan un importe a partir de 50 USDT y Bitget replica automáticamente las posiciones de ese trader, mientras que el trader líder recibe una parte de las ganancias del seguidor.",
    "La plataforma cuenta con más de 600 pares de trading spot y más de 200 pares de futuros, con apalancamiento de hasta 150x en BTC y ETH y de hasta 10x en margen. Los usuarios estándar pagan 0.1% en spot – 0.08% con BGB – y 0.02% maker / 0.06% taker en futuros USDT-M, Coin-M y USDC-M. Los bots de trading, los productos Earn, las acciones tokenizadas, los CFD y Bitget Wallet, la wallet de autocustodia, completan la oferta.",
    "Bitget publica cada mes una prueba de reservas con árbol de Merkle; la instantánea del 12 de noviembre de 2026 mostró un ratio de reservas total del 124%, con un 127% para BTC, un 114% para USDT y un 103% para ETH. Su Fondo de Protección (Protection Fund) está valorado en 274 millones de dólares y está pensado para cubrir pérdidas por eventos que afectan a toda la plataforma y que no son culpa del usuario. Bitget enumera registros o licencias en Australia, El Salvador, Argentina, Sudáfrica, México, Mauricio y Georgia, y sus Términos de uso excluyen una larga lista de países, entre ellos Estados Unidos, Canadá, Alemania, Francia y Austria.",
  ],
  highlights: [
    { title: "Líder en copy trading", text: "Sigue a traders líderes desde 50 USDT y replica sus posiciones automáticamente." },
    { title: "Fondo de Protección de 274 millones de dólares", text: "Un fondo específico (Protection Fund) para pérdidas por eventos que afectan a toda la plataforma." },
    { title: "Reservas del 124%", text: "Prueba de reservas mensual con árbol de Merkle, última instantánea del 12 de noviembre de 2026." },
  ],
  pros: [
    "Copy trading de futuros y spot desde 50 USDT",
    "Prueba de reservas mensual del 124% y un Fondo de Protección de 274 millones de dólares",
    "Comisiones estándar de futuros de 0.02% maker / 0.06% taker y 20% de descuento en las comisiones spot con BGB",
    "El enlace de referido rellena el código y lo bloquea, así que no puedes escribirlo mal",
  ],
  cons: [
    "No se puede añadir un código de referido después del registro, salvo mediante un ticket de soporte",
    "No disponible en Estados Unidos, Canadá, Alemania, Francia, Austria, Japón y Singapur",
    "La recompensa de bienvenida más alta exige un depósito y un volumen de trading muy grandes",
    "El copy trading puede crear una falsa sensación de seguridad – los resultados pasados no garantizan rendimientos futuros",
  ],
  bestFor: ["Traders que quieren copiar a traders de futuros con experiencia", "Traders de futuros de altcoins", "Usuarios que también quieren exposición a acciones a través de cripto"],
  signupTip:
    "Verifica tu identidad justo después de registrarte – Bitget no permite depósitos, operaciones ni retiros sin ella – y haz check-in tres días para conseguir el cupón de aumento de posición en futuros de 200 USDT.",
  safety:
    "Bitget publica cada mes una prueba de reservas con árbol de Merkle – 124% en total en la instantánea del 12 de noviembre de 2026 – y mantiene un Fondo de Protección valorado en 274 millones de dólares; las reclamaciones al fondo las evalúa Bitget. Activa la autenticación de dos factores al registrarte. Los resultados del copy trading son rendimientos pasados y no garantizan rendimientos futuros.",
  restricted:
    "Los Términos de uso de Bitget (última actualización: 4 de noviembre de 2026) enumeran como países prohibidos, entre otros: Austria, Bielorrusia, Canadá, Cuba, Francia, Alemania, Hong Kong, Irán, Japón, Kazajistán, Malasia, Corea del Norte, Rusia, Singapur, Sudán, Tailandia, los Emiratos Árabes Unidos y Estados Unidos, incluidos sus territorios. La página de verificación de Bitget menciona además a India, Italia y España. Está prohibido usar una VPN para eludir la restricción.",
  faqs: [
    {
      topic: "referral",
      q: "¿JZVEV1M3 es un código de referido de Bitget que funciona?",
      a: "Sí. El 16 de noviembre de 2026, el enlace de esta página abrió la página de registro por referido de Bitget con JZVEV1M3 ya rellenado y bloqueado en el campo del código de referido.",
    },
    {
      topic: "referral",
      q: "¿Por qué el enlace de registro de Bitget se abre en otro dominio o en otro idioma?",
      a: "Los enlaces para compartir de Bitget redirigen a través de varios de sus propios dominios – en nuestra revisión, el mismo enlace se abrió una vez en bitget.com y otra en bitget.site – y pueden abrirse en el idioma en el que se creó el enlace. El código de referido JZVEV1M3 apareció rellenado en todas las ocasiones.",
    },
    {
      topic: "referral",
      q: "¿Qué operaciones cuentan para el programa de referidos de Bitget?",
      a: "El trading spot, incluidos copy trading y margen, el trading de futuros, los stock perps, los perpetuos de materias primas, el trading de acciones en spot y el trading de CFD.",
    },
    {
      topic: "referral",
      q: "¿Qué es una Mystery Box de Bitget?",
      a: "Una recompensa del programa de referidos de Bitget. Puede contener USDT, bonos de trading de futuros, cupones de aumento de posición en futuros, cupones de APR de Earn o cupones de reembolso de comisiones spot, y debe reclamarse en los 30 días siguientes a su abono.",
    },
    {
      topic: "signup",
      q: "¿Necesito documentos para registrarme en Bitget?",
      a: "Para crear la cuenta, no – la guía de Bitget dice que no hacen falta documentos para registrarse. Sí necesitas un documento de identidad y una verificación facial para la verificación de identidad posterior, y sin ella no puedes depositar, operar ni retirar.",
    },
    {
      topic: "signup",
      q: "¿Qué requisitos tiene la contraseña de Bitget?",
      a: "La contraseña de Bitget debe tener entre 8 y 32 caracteres.",
    },
    {
      topic: "signup",
      q: "¿Puedo registrarme en Bitget con Google o Telegram?",
      a: "Sí. La guía de registro de Bitget dice que también puedes registrarte directamente con Google, Telegram o una wallet, además de con un correo electrónico o un número de teléfono móvil.",
    },
    {
      topic: "signup",
      q: "¿Puedo usar Bitget sin KYC?",
      a: "No. Desde el 1 de septiembre de 2023, todos los usuarios nuevos deben completar la verificación de identidad inmediatamente después de registrarse; sin ella, Bitget no permite depósitos, operaciones ni retiros.",
    },
    {
      topic: "bonus",
      q: "¿Cuál es el bono de bienvenida de Bitget?",
      a: "Bitget anuncia hasta 6,200 USDT en recompensas para usuarios nuevos. Se compone de un cupón de aumento de posición en futuros USDT-M de BTC de 200 USDT por hacer check-in tres días y de un desafío de depósito y trading de 50, 400 o 6,000 USDT, del que solo se paga el nivel más alto que alcances.",
    },
    {
      topic: "bonus",
      q: "¿Qué tengo que hacer para conseguir la recompensa de 6,000 USDT de Bitget?",
      a: "En un plazo de siete días: un depósito neto de al menos 100,000 USDT, 100,000 USDT de volumen en spot y 80,000,000 USDT de volumen en futuros. El nivel de 50 USDT exige 1,000 USDT depositados, 100 USDT de volumen en spot y 300,000 USDT de volumen en futuros. En futuros solo cuentan las órdenes taker, y quedan excluidas las operaciones de copy trading, por API y con bots.",
    },
    {
      topic: "bonus",
      q: "¿Puedo retirar los bonos de trading de Bitget?",
      a: "No. Bitget indica que los bonos de trading no son retirables y no se pueden sacar como efectivo. Además, si retiras fondos en los tres días posteriores al periodo del desafío, pierdes la recompensa del desafío.",
    },
    {
      topic: "fees",
      q: "¿Cuáles son las comisiones de futuros de Bitget?",
      a: "Los usuarios estándar pagan 0.02% maker y 0.06% taker en futuros USDT-M, Coin-M y USDC-M.",
    },
    {
      topic: "fees",
      q: "¿De cuánto es el descuento en comisiones con BGB en Bitget?",
      a: "Un 20% en las comisiones de spot y de margen, lo que baja la tarifa estándar de spot de 0.1% a 0.08%. La tabla de comisiones de Bitget no muestra ningún descuento con BGB para futuros.",
    },
    {
      topic: "fees",
      q: "¿Cuál es el apalancamiento máximo en Bitget?",
      a: "Hasta 150x en futuros de BTC y ETH; el máximo varía según la moneda. El trading con margen llega hasta 10x. Un apalancamiento alto aumenta considerablemente el riesgo de liquidación.",
    },
    {
      topic: "fees",
      q: "¿Cómo funciona el copy trading de Bitget y cuánto cuesta?",
      a: "Eliges un trader líder, fijas tu importe – el mínimo es de 50 USDT – y Bitget replica las posiciones del trader en tu cuenta. El trader líder recibe una parte de tus ganancias; las propias páginas de ayuda de Bitget dan rangos distintos para esa parte, así que revisa el porcentaje que aparece en el perfil del trader antes de seguirlo.",
    },
    {
      topic: "safety",
      q: "¿Qué es el Fondo de Protección (Protection Fund) de Bitget?",
      a: "Un fondo que Bitget mantiene para cubrir pérdidas de los usuarios por eventos que afectan a toda la plataforma y que no se deben a las acciones del propio usuario. Bitget lo valora en 274 millones de dólares, mantenidos en forma de 4,204.71 BTC, y evalúa las reclamaciones por su cuenta.",
    },
    {
      topic: "safety",
      q: "¿Bitget está disponible en Estados Unidos o en Alemania?",
      a: "No. Estados Unidos, Alemania, Francia, Austria, Canadá, Japón y Singapur figuran todos en la lista de países prohibidos de los Términos de uso de Bitget.",
    },
    {
      topic: "safety",
      q: "¿Bitget publica prueba de reservas?",
      a: "Sí, cada mes, en forma de prueba con árbol de Merkle. La instantánea del 12 de noviembre de 2026 mostró un ratio de reservas total del 124%: 127% para BTC, 114% para USDT y 103% para ETH.",
    },
  ],
};
