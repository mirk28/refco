import type { ExchangeText } from "../../types";

export const mexc: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Campo “Referral Code (Optional)” del formulario de registro (distingue mayúsculas y minúsculas)",
    apply:
      "Introdúcelo en el campo “Referral Code (Optional)” del formulario de registro – el código distingue mayúsculas y minúsculas – o abre el enlace de registro de esta página, que rellena el campo y lo bloquea.",
    whereToEnter:
      "El formulario de registro de MEXC tiene un campo con la etiqueta “Referral Code (Optional)” y la indicación “Enter invitation code (case-sensitive)”, así que escribe 4E3xM exactamente como aparece, con la E y la M en mayúscula. En el sitio web marcas la casilla “Enter Referral Code” para que aparezca el campo; en la app tocas la flecha pequeña para desplegarlo. El enlace de esta página abre la página de invitación de MEXC con 4E3xM ya rellenado y el campo bloqueado.",
    afterSignupShort: "Sí – dentro de los 30 días posteriores al registro",
    afterSignup:
      "Sí. MEXC tiene una función de autoservicio para vincular un referidor después del registro: solo pueden usarla las cuentas registradas en los últimos 30 días, funciona para cuentas principales y la vinculación se hace con el código de referido o con el UID del referidor. El referidor debe haberse registrado antes que tú. Una vez vinculado un código de invitación, MEXC indica que no se puede cambiar ni eliminar.",
    inviteeReward:
      "MEXC no da a los usuarios invitados un descuento permanente en comisiones. Lo que el código desbloquea es el evento de referidos de MEXC: su página de invitación muestra a quienes se registran por referido una recompensa adicional de hasta 140 USDT, que se suma a las recompensas para nuevos usuarios de hasta 10,000 USDT. La recompensa por referido se paga en bonos de futuros cuando completas una tarea de depósito neto y una tarea de trading de futuros dentro de los 7 días posteriores al registro.",
    guide: [
      "En MEXC el código de referido hace dos cosas. Registra quién te invitó – el referidor gana una comisión por tus operaciones de spot y futuros – y te hace elegible para el evento de referidos que MEXC organiza para los nuevos registros. Ese evento funciona por niveles: 50 USDT por un depósito neto de al menos 100 dólares y 1,000 dólares de volumen en futuros, 90 USDT con 10,000 dólares de volumen en futuros y 140 USDT con 20,000 dólares, todo dentro de los 7 días posteriores al registro y después del KYC Primario.",
      "Las recompensas son bonos de futuros, cupones de comisiones y airdrops de posición, no dinero en efectivo. MEXC señala que el evento es por tiempo limitado y “only open to designated users” (solo para usuarios designados), y las preguntas frecuentes del evento dicen que el bono de referido no se puede combinar con el evento de 10,000 USDT ni con los bonos del Rewards Hub – aunque la página de invitación anuncia ambos juntos. Toma como válidas las cantidades que se muestren en tu propia cuenta después del registro.",
      "Como el código distingue mayúsculas y minúsculas, un enlace es la forma más segura de aplicarlo. Si te registraste sin él, todavía tienes 30 días para vincularlo por tu cuenta.",
    ],
  },
  signup: {
    methods: ["un correo electrónico", "un número de teléfono", "Google", "Apple", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Abre la página de registro de MEXC",
        text: "Usa el botón de registro de esta página. MEXC abre “Your Friend Invites You to Join MEXC” con el código de referido 4E3xM ya rellenado y bloqueado.",
      },
      {
        title: "Introduce tu correo electrónico o número de teléfono y una contraseña",
        text: "O continúa con Google, Apple, Telegram o MetaMask. La contraseña necesita al menos 10 caracteres con letras mayúsculas y minúsculas, un número y un símbolo.",
      },
      {
        title: "Revisa el código de referido",
        text: "El campo “Referral Code (Optional)” debería mostrar 4E3xM. Si lo escribes tú, fíjate en las mayúsculas – el código distingue mayúsculas y minúsculas.",
      },
      {
        title: "Resuelve el rompecabezas deslizante",
        text: "MEXC muestra un rompecabezas deslizante como verificación de seguridad.",
      },
      {
        title: "Introduce el código de 6 dígitos",
        text: "Escribe el código de verificación de 6 dígitos que te envía MEXC y selecciona “Confirm”.",
      },
      {
        title: "Completa el KYC",
        text: "Termina el KYC Primario para desbloquear las recompensas y evitar restricciones en depósitos, retiros y trading.",
      },
    ],
    kycShort: "Necesaria para depósitos, retiros y trading",
    kyc: "En la práctica, sí. MEXC indica que no completar la verificación KYC puede afectar a tu acceso a servicios como depósitos, retiros y trading, y sus recompensas exigen al menos el KYC Primario. El KYC Primario permite retiros de criptomonedas de 80 BTC al día; el KYC Avanzado eleva ese límite a 200 BTC al día y añade límites en moneda fiat de 20,000 USD al día. Spot, futuros y eventos están disponibles en ambos niveles.",
    documents: "MEXC acepta un documento de identidad, un pasaporte, una licencia de conducir o un permiso de residencia.",
    minAge: "Mayoría de edad en tu país – el Acuerdo de Usuario de MEXC exige que tengas la edad legal para celebrar un contrato vinculante y no menciona ninguna cifra",
  },
  welcomeTasks: [
    { task: "Registrarte", reward: "Cupón de 10 USDT" },
    { task: "Primer inicio de sesión en la app", reward: "Cupón de 10 USDT" },
    { task: "Completar el KYC Primario en un plazo de 7 días", reward: "Airdrop de posición BTCUSDT de 200 dólares" },
    { task: "Trading de futuros acumulado (nivel máximo: al menos 1,000,000 USDT)", reward: "Bono de futuros de hasta 7,620 USDT" },
    { task: "Evento de referidos: depósito neto de al menos 100 dólares y 1,000 dólares de volumen en futuros en un plazo de 7 días", reward: "50 USDT en bonos de futuros" },
    { task: "Evento de referidos: volumen en futuros de al menos 10,000 dólares en un plazo de 7 días", reward: "90 USDT en bonos de futuros" },
    { task: "Evento de referidos: volumen en futuros de al menos 20,000 dólares en un plazo de 7 días", reward: "140 USDT en bonos de futuros" },
  ],
  tokenDiscount:
    "Pagar las comisiones con MX da un 20% de descuento en las comisiones de spot y futuros; en el caso de los futuros, los MX tienen que estar en tu billetera de Futuros. El antiguo descuento del 50% por mantener 500 MX o más está suspendido desde el 9 de febrero de 2026.",
  extraFeeMarkets: ["Futuros Coin-M (BTCUSD, ETHUSD)"],
  sourceLabels: [
    "MEXC: Proceso de registro de cuenta (web)",
    "MEXC: Proceso de registro de cuenta (app)",
    "MEXC: Guía de referidos",
    "MEXC: Guía de autoservicio para vincular un referidor",
    "MEXC: Evento de referidos y reglas",
    "MEXC: Rewards Hub (recompensas para nuevos usuarios)",
    "MEXC: Anuncio de las recompensas de bienvenida (validez de los bonos)",
    "MEXC: Tabla de comisiones",
    "MEXC: Cómo usar MX para obtener descuentos en las comisiones de trading",
    "MEXC: Lanzamiento del apalancamiento de 500x en futuros",
    "MEXC: Preguntas frecuentes sobre KYC",
    "MEXC: Preguntas habituales sobre la verificación KYC",
    "MEXC: Acuerdo de Usuario (jurisdicciones prohibidas)",
    "MEXC Learn: Países restringidos",
    "MEXC: Quiénes somos",
    "MEXC: Por qué MEXC (pares y contratos)",
    "MEXC: Prueba de reservas",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futuros"],
  bonusHeadline: "Hasta 10,000 USDT en recompensas para nuevos usuarios",
  benefits: [
    "Recompensas para nuevos usuarios de hasta 10,000 USDT en el Rewards Hub – cupones, airdrops de posición y bonos de futuros",
    "A quienes se registran por referido se les muestra una recompensa adicional de hasta 140 USDT en bonos de futuros",
    "Comisión maker del 0% en spot y en la mayoría de los contratos de futuros",
    "El código todavía se puede vincular dentro de los 30 días posteriores al registro",
  ],
  benefitNote:
    "Todas las recompensas dependen de completar tareas y exigen al menos el KYC Primario. Los bonos no se pueden retirar – solo las ganancias obtenidas con ellos – y, si sacas fondos de la cuenta de Futuros antes de haber usado un bono por completo, pierdes el bono entero. Los bonos de futuros sirven para contratos USDT-M y se anunciaron con una validez de 15 días. El evento de referidos es por tiempo limitado y está abierto solo a usuarios designados, las preguntas frecuentes del evento de MEXC dicen que su bono no se puede combinar con el evento de 10,000 USDT, y las recompensas pasan por una revisión de riesgo de hasta 7 días. Las regiones donde los derivados están prohibidos pueden no ser elegibles.",
  headquarters: "MEXC (Comoros) Ltd, registrada en la Unión de las Comoras",
  regulation: "Las páginas de MEXC no nombran ninguna licencia; MEXC declara que no tiene licencia de primer nivel ni autorización MiCA",
  users: "40M+ usuarios (según MEXC)",
  assets: "1,384 pares spot y 1,152 contratos de futuros (según MEXC)",
  maxLeverage: "Hasta 500x (futuros BTCUSDT y ETHUSDT)",
  feeNote:
    "La comisión de futuros que se muestra es la de MEXC para BTCUSDT y ETHUSDT; para el conjunto de los contratos, su página de comisiones indica un rango del 0% al 0.04% para makers y del 0% al 0.1% para takers, y algunos pares se operan con cero comisiones. MEXC señala que las comisiones maker pueden variar según los eventos de la plataforma o tu región.",
  products: ["Futuros USDT-M y Coin-M", "Spot", "Copy trading", "Launchpad", "Earn"],
  tagline: "Cero comisiones maker y hasta 500x de apalancamiento",
  quickAnswer:
    "El código de referido de MEXC es 4E3xM – distingue mayúsculas y minúsculas. Introdúcelo en el campo “Referral Code (Optional)” al registrarte, o usa el botón de esta página, que lo rellena y lo bloquea. Si lo olvidaste, MEXC te permite vincular un referidor por tu cuenta dentro de los 30 días posteriores al registro. Los nuevos usuarios pueden desbloquear hasta 10,000 USDT en recompensas, y la página de invitación de MEXC muestra a quienes se registran por referido un bono adicional de hasta 140 USDT.",
  about: [
    "MEXC opera desde 2018 y afirma que atiende a más de 40 millones de usuarios en más de 170 países y regiones. Compite en precio y en amplitud de oferta: los usuarios regulares no pagan comisión maker en spot ni en la mayoría de los contratos de futuros, y MEXC lista 1,384 pares spot y 1,152 contratos de futuros.",
    "La plataforma de futuros ofrece contratos con margen en USDT y con margen en criptomonedas, con un apalancamiento de hasta 500x en BTCUSDT y ETHUSDT. Ese máximo no está disponible en todas partes – MEXC excluye de él a Australia, Austria, Bélgica, Canadá, Francia, Hong Kong, Italia, Rusia, el Reino Unido y Yemen – y el copy trading no admite 250x ni 500x. También están disponibles el copy trading, un launchpad y productos Earn.",
    "La entidad contratante es MEXC (Comoros) Ltd, registrada en la Unión de las Comoras. MEXC no nombra ninguna licencia en sus propias páginas y él mismo declara que no tiene licencia de primer nivel ni autorización MiCA; su propia guía señala que figura en el registro provisional de entidades no conformes de la ESMA. Publica una prueba de reservas – la instantánea del 9 de noviembre de 2026 mostraba un 122.42% para USDT, un 109.84% para USDC, un 317.61% para BTC y un 112.41% para ETH – y mantiene un Guardian Fund (fondo de protección) de 100 millones de dólares y un fondo de seguro de futuros.",
  ],
  highlights: [
    { title: "Comisiones maker del 0%", text: "Cero comisiones maker en spot y en la mayoría de los contratos de futuros." },
    { title: "Vincúlalo en un plazo de 30 días", text: "¿Olvidaste el código? MEXC te permite vincular un referidor durante los 30 días posteriores al registro." },
    { title: "Reservas por encima del 100%", text: "USDT 122%, BTC 318%, ETH 112% en la instantánea del 9 de noviembre de 2026." },
  ],
  pros: [
    "Comisiones de trading entre las más bajas del sector: 0% maker, 0.02% taker en los futuros BTCUSDT",
    "Un código de referido se puede vincular hasta 30 días después del registro",
    "1,384 pares spot y 1,152 contratos de futuros",
    "Prueba de reservas por encima del 100% y un Guardian Fund (fondo de protección) de 100 millones de dólares",
  ],
  cons: [
    "Sin licencia de primer nivel ni autorización MiCA, según declara el propio MEXC",
    "No disponible en EE. UU., el Reino Unido, Canadá, Francia, los Países Bajos, Singapur y Hong Kong",
    "Los bonos no se pueden retirar y se pierden si sacas fondos antes de tiempo",
    "El apalancamiento de 500x es extremadamente arriesgado",
  ],
  bestFor: ["Traders de futuros de alta frecuencia y sensibles a los costos", "Traders a la caza de nuevos listados", "Usuarios con experiencia que se sienten cómodos con plataformas offshore"],
  signupTip:
    "Completa el KYC Primario dentro de los 7 días posteriores al registro – desbloquea el airdrop de posición BTCUSDT de 200 dólares – y no saques fondos de tu cuenta de Futuros mientras un bono de futuros siga en uso, o perderás el bono.",
  safety:
    "MEXC publica una prueba de reservas – 122.42% para USDT, 109.84% para USDC, 317.61% para BTC y 112.41% para ETH en la instantánea del 9 de noviembre de 2026 – y mantiene un Guardian Fund (fondo de protección) de 100 millones de dólares y un fondo de seguro de futuros. El propio MEXC declara que no tiene licencia de primer nivel ni autorización MiCA, así que protege tu cuenta con medidas de seguridad sólidas y no guardes allí tus ahorros a largo plazo. Con tokens muy nuevos, revisa la liquidez y las especificaciones del contrato antes de operarlos con apalancamiento.",
  restricted:
    "El Acuerdo de Usuario de MEXC (actualizado por última vez el 13 de octubre de 2026) prohíbe el acceso a los usuarios de Corea del Norte, Cuba, Sudán, Irán, China continental, Singapur, Malasia, Estados Unidos, el Reino Unido, Hong Kong, Kazajistán, Rusia, las regiones de Ucrania controladas por Rusia, Bielorrusia, Canadá, Francia y los Países Bajos, además de los países sancionados y los incluidos en la lista negra del GAFI (FATF).",
  faqs: [
    {
      topic: "referral",
      q: "¿Funciona 4E3xM como código de referido de MEXC?",
      a: "Sí. El 16 de noviembre de 2026 el enlace de esta página abrió la página de invitación de MEXC con inviteCode=4E3xM en la dirección y 4E3xM ya rellenado y bloqueado en el campo “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "¿El código de referido de MEXC distingue mayúsculas y minúsculas?",
      a: "Sí. El campo de registro de MEXC lleva la indicación “Enter invitation code (case-sensitive)”. El código es 4E3xM – dígito 4, E mayúscula, dígito 3, x minúscula, M mayúscula.",
    },
    {
      topic: "referral",
      q: "¿Cómo vinculo un referidor en MEXC después del registro?",
      a: "Usa la vinculación de referidor en autoservicio de MEXC dentro de los 30 días posteriores al registro. Está disponible para cuentas principales, introduces el código de referido o el UID del referidor, y el referidor debe haberse registrado antes que tú. Después, la vinculación no se puede cambiar ni eliminar.",
    },
    {
      topic: "referral",
      q: "¿El código de referido de MEXC da un descuento en comisiones?",
      a: "MEXC no indica ningún descuento permanente en comisiones para el usuario invitado. La ventaja es el evento de referidos, con recompensas de hasta 140 USDT en bonos de futuros, además de las recompensas generales para nuevos usuarios.",
    },
    {
      topic: "signup",
      q: "¿Qué requisitos tiene la contraseña de MEXC?",
      a: "Al menos 10 caracteres, incluidos una letra mayúscula, una letra minúscula, un número y un símbolo.",
    },
    {
      topic: "signup",
      q: "¿Puedo registrarme en MEXC con Google, Apple, Telegram o MetaMask?",
      a: "Sí. La página de registro de MEXC ofrece Google y Apple directamente, y Telegram y MetaMask en “More Options”, además del correo electrónico y el teléfono.",
    },
    {
      topic: "signup",
      q: "¿Cuáles son los niveles y límites de KYC de MEXC?",
      a: "El KYC Primario permite retiros de criptomonedas de 80 BTC al día y el trading P2P. El KYC Avanzado eleva el límite a 200 BTC al día y permite transacciones en moneda fiat de hasta 20,000 USD al día. Spot, futuros y eventos están disponibles en ambos niveles.",
    },
    {
      topic: "signup",
      q: "¿Puedo usar MEXC sin KYC?",
      a: "Solo con restricciones. MEXC indica que no completar la verificación KYC puede afectar a tu acceso a servicios como depósitos, retiros y trading, y las recompensas para nuevos usuarios y las de referidos exigen al menos el KYC Primario.",
    },
    {
      topic: "bonus",
      q: "¿Cuál es el bono de bienvenida de MEXC?",
      a: "MEXC anuncia hasta 10,000 USDT en recompensas para nuevos usuarios. Ejemplos de su Rewards Hub: un cupón de 10 USDT por registrarte, un cupón de 10 USDT por el primer inicio de sesión en la app, un airdrop de posición BTCUSDT de 200 dólares por completar el KYC Primario en un plazo de 7 días y un bono de futuros de hasta 7,620 USDT por el trading acumulado, con el nivel máximo en 1,000,000 USDT de volumen.",
    },
    {
      topic: "bonus",
      q: "¿De cuánto es el bono de referido de MEXC?",
      a: "En el evento de referidos de MEXC, el usuario invitado recibe 50 USDT por un depósito neto de al menos 100 dólares más 1,000 dólares de volumen en futuros, 90 USDT con 10,000 dólares de volumen en futuros y 140 USDT con 20,000 dólares, todo dentro de los 7 días posteriores al registro. Se paga como bono de futuros, cupón de comisiones y airdrop de posición. El evento es por tiempo limitado y está abierto solo a usuarios designados.",
    },
    {
      topic: "bonus",
      q: "¿Puedo retirar el bono de MEXC?",
      a: "No. MEXC indica que los bonos no se pueden retirar, pero sí las ganancias obtenidas en operaciones financiadas con el bono. Transferir cualquier activo fuera de la cuenta de Futuros antes de haber usado el bono por completo hace que se pierda el bono entero.",
    },
    {
      topic: "bonus",
      q: "¿Cuánto tiempo es válido un bono de futuros de MEXC?",
      a: "MEXC anunció una validez de 15 días para los bonos de futuros y para los cupones. Un bono de futuros solo se puede usar en contratos USDT-M.",
    },
    {
      topic: "fees",
      q: "¿Cuáles son las comisiones de futuros de MEXC?",
      a: "En BTCUSDT y ETHUSDT los usuarios regulares pagan 0% maker y 0.02% taker. Para el conjunto de los contratos, la página de comisiones de MEXC indica un rango del 0% al 0.04% para makers y del 0% al 0.1% para takers, y algunos pares no tienen comisiones.",
    },
    {
      topic: "fees",
      q: "¿De cuánto es el descuento en comisiones con MX de MEXC?",
      a: "Un 20% en las comisiones de spot y futuros cuando las pagas con MX; en el caso de los futuros, los MX deben estar en tu billetera de Futuros. El anterior descuento del 50% por mantener al menos 500 MX está suspendido desde el 9 de febrero de 2026.",
    },
    {
      topic: "fees",
      q: "¿De verdad ofrece MEXC un apalancamiento de 500x?",
      a: "Sí, en los futuros BTCUSDT y ETHUSDT. No se ofrece en Australia, Austria, Bélgica, Canadá, Francia, Hong Kong, Italia, Rusia, el Reino Unido y Yemen, y el copy trading no lo admite. Con 500x, un movimiento del 0.2% en tu contra puede acabar con la posición.",
    },
    {
      topic: "safety",
      q: "¿Está regulado MEXC?",
      a: "MEXC no nombra ninguna licencia en sus propias páginas y declara que no tiene licencia de primer nivel ni autorización MiCA. Su entidad contratante es MEXC (Comoros) Ltd, registrada en la Unión de las Comoras.",
    },
    {
      topic: "safety",
      q: "¿Está MEXC disponible en EE. UU. o en el Reino Unido?",
      a: "No. Tanto Estados Unidos como el Reino Unido son jurisdicciones prohibidas en el Acuerdo de Usuario de MEXC, al igual que Canadá, Francia, los Países Bajos, Singapur y Hong Kong.",
    },
    {
      topic: "safety",
      q: "¿Publica MEXC una prueba de reservas?",
      a: "Sí. La instantánea del 9 de noviembre de 2026 mostraba ratios de reserva del 122.42% para USDT, el 109.84% para USDC, el 317.61% para BTC y el 112.41% para ETH. MEXC también mantiene un Guardian Fund (fondo de protección) de 100 millones de dólares.",
    },
  ],
};
