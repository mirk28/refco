import type { ExchangeText } from "../../types";

export const bybit: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Campo “Referral Code (Optional)” del formulario de registro",
    apply:
      "Introdúcelo en el campo “Referral Code (Optional)” del formulario de registro, o abre el enlace de registro de esta página, que completa el campo por ti.",
    whereToEnter:
      "El formulario de registro de Bybit tiene un campo llamado “Referral Code (Optional)”. En la web llegas a él después de introducir tu correo electrónico o tu número de teléfono; en la app, un paso más tarde – en ambos casos antes de pulsar “Sign Up Now”. El enlace de esta página abre la página de invitación de Bybit con VN3KGLE ya puesto en ese campo; el campo sigue siendo editable, así que comprueba que el código sigue ahí antes de enviar el formulario.",
    afterSignupShort: "No – solo durante el registro",
    afterSignup:
      "No. La guía de registro de Bybit indica que, después de registrarte, no podrás añadir, modificar ni eliminar tu código de referido o de afiliado. La única excepción que Bybit documenta se refiere a los códigos de afiliado, que pueden añadirse en un plazo de 14 días en una cuenta principal que todavía no tenga código; Bybit dice expresamente que ahí no se admiten los códigos del programa de referidos como VN3KGLE.",
    inviteeReward:
      "Con el programa de referidos de Bybit, el usuario invitado puede ganar hasta 250 USDT: 50 USDT por una primera operación de al menos 50 dólares en los 14 días siguientes al registro, 100 USDT por al menos 500 dólares de volumen de trading acumulado en los 30 días posteriores a esa primera operación y otros 100 USDT por al menos 10,000 dólares en esos mismos 30 días. La página de invitación de Bybit anuncia además recompensas para el invitado por registrarse y completar la verificación de identidad, y los nuevos usuarios reciben los Welcome Gifts de 100 USDT en el Rewards Hub.",
    guide: [
      "El programa de referidos de Bybit recompensa a ambas partes con los mismos importes, y por eso Bybit lo anuncia como “up to 500 USDT combined” (hasta 500 USDT en conjunto). Como usuario invitado desbloqueas tu parte en tres etapas ligadas a tu propio trading: una primera operación de al menos 50 dólares en los 14 días siguientes al registro y, después, 500 dólares y 10,000 dólares de volumen acumulado en los 30 días que siguen. Cuenta el volumen de spot, derivados y opciones; las operaciones en pares sin comisiones, no.",
      "Cada recompensa pasa por una revisión de riesgo de 3 días y después hay que reclamarla en un plazo de 10 días; de lo contrario, expira. Bybit limita el programa con un fondo mensual de 500,000 USDT que se reparte por orden de llegada. Estas condiciones se aplican a las cuentas registradas en el sitio global a partir del 10 de octubre de 2026.",
      "Tu país de residencia decide si el código sirve de algo. Las condiciones del programa de referidos de Bybit establecen que no hay programa de referidos en Alemania, el Reino Unido, Francia, Bélgica ni Hong Kong, y que el programa no está abierto a los residentes del Espacio Económico Europeo (EEE) invitados dentro del EEE. Los residentes del EEE usan Bybit EU (bybit.eu), una plataforma independiente gestionada por Bybit EU GmbH en Viena, con su propia oferta de referidos, más reducida.",
    ],
  },
  signup: {
    methods: ["un correo electrónico", "un número de teléfono", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Abre la página de registro de Bybit",
        text: "Usa el botón de registro de esta página. Abre la página de invitación de Bybit con el código de referido VN3KGLE ya introducido.",
      },
      {
        title: "Selecciona tu país de residencia",
        text: "Bybit lo pide en primer lugar porque los productos y las recompensas dependen de dónde vivas.",
      },
      {
        title: "Introduce tu correo electrónico o tu número de teléfono",
        text: "O continúa con Google, Apple o Telegram.",
      },
      {
        title: "Revisa el código de referido",
        text: "El campo “Referral Code (Optional)” debe mostrar VN3KGLE. Es tu única oportunidad – Bybit no permite añadir ni cambiar el código más adelante.",
      },
      {
        title: "Introduce el código de verificación y crea una contraseña",
        text: "Confirma el código que te envía Bybit, elige una contraseña y pulsa “Sign Up Now”. En la app (versión 4.47.0 o posterior) también puedes configurar una passkey.",
      },
      {
        title: "Completa la verificación de identidad",
        text: "Bybit exige el nivel de verificación Standard antes de que puedas depositar u operar.",
      },
    ],
    kycShort: "Obligatoria para todos los productos (nivel Standard)",
    kyc: "Sí. Bybit exige como mínimo la verificación de identidad Standard para todos los productos. Sin ella, una cuenta no puede depositar ni operar y solo puede retirar – hasta 20,000 USDT al día y 100,000 USDT al mes. La verificación Standard (un documento de identidad más una evaluación de identidad) eleva el límite diario de retiro a 1 millón de USDT; la verificación Advanced, con un comprobante de domicilio, a 2 millones de USDT.",
    documents:
      "Bybit acepta pasaporte, documento de identidad, permiso de residencia o licencia de conducir. Solo se aceptan documentos físicos, y el nivel Advanced requiere además un comprobante de domicilio.",
    minAge: "18 años",
  },
  welcomeTasks: [
    { task: "Referidos: primera operación de al menos 50 dólares en los 14 días siguientes al registro", reward: "50 USDT" },
    {
      task: "Referidos: al menos 500 dólares de volumen de trading acumulado en los 30 días posteriores a la primera operación",
      reward: "100 USDT",
    },
    { task: "Referidos: al menos 10,000 dólares de volumen de trading acumulado en esos mismos 30 días", reward: "100 USDT" },
    { task: "Welcome Gifts: completar la verificación de identidad", reward: "Fee Saver de 20 USDT (derivados)" },
    { task: "Welcome Gifts: depositar al menos 10 dólares", reward: "Position Airdrop de 30 USDT (derivados)" },
    { task: "Welcome Gifts: operar por al menos 10 dólares", reward: "Fee Saver de 50 USDT (derivados)" },
  ],
  tokenDiscount:
    "Pagar las comisiones en MNT reduce un 25% las comisiones de spot (0.075% para VIP 0) y un 10% las de futuros (0.018% maker / 0.0495% taker). El descuento no se aplica a contratos inversos, bots de trading, seguidores de copy trading ni trading por API.",
  extraFeeMarkets: ["Opciones"],
  sourceLabels: [
    "Bybit: Cómo registrar una cuenta",
    "Bybit: Programa de referidos – preguntas frecuentes generales",
    "Bybit: Página y condiciones del programa de referidos",
    "Bybit: Cómo añadir y consultar un código de afiliado registrado",
    "Bybit: Rewards Hub (Welcome Gifts)",
    "Bybit: Preguntas frecuentes del Rewards Hub",
    "Bybit: Estructura de comisiones de trading",
    "Bybit: Pago de comisiones de trading con MNT",
    "Bybit: Parámetros de margen (niveles de apalancamiento)",
    "Bybit: Preguntas frecuentes sobre el KYC individual",
    "Bybit: Ventajas de los distintos niveles de KYC",
    "Bybit: Países con servicio restringido",
    "Bybit: Sobre nosotros",
    "Bybit: Prueba de reservas",
    "Bybit: Cronología del incidente de seguridad (febrero de 2025)",
    "Bybit: Bybit Europe y MiCAR",
    "Bybit EU: Programa de referidos",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Derivados", "Opciones"],
  bonusHeadline: "Hasta 250 USDT en recompensas por referido",
  benefits: [
    "Hasta 250 USDT para el usuario invitado: 50 USDT tras una primera operación de 50 dólares o más en un plazo de 14 días, más 100 USDT en cada caso al alcanzar 500 dólares y 10,000 dólares de volumen",
    "Welcome Gifts de 100 USDT en el Rewards Hub por verificarte, depositar 10 dólares y operar por 10 dólares",
    "Un solo código de referido para toda la cuenta – cuenta el volumen de spot, derivados y opciones",
    "25% de descuento en las comisiones de spot y 10% en las de futuros si pagas las comisiones en MNT",
  ],
  benefitNote:
    "Las recompensas por referido se aplican a las cuentas registradas en el sitio global de Bybit a partir del 10 de octubre de 2026, pasan una revisión de riesgo de 3 días, deben reclamarse en un plazo de 10 días y proceden de un fondo mensual de 500,000 USDT (por orden de llegada). Bybit no tiene programa de referidos en Alemania, el Reino Unido, Francia, Bélgica ni Hong Kong y no lo abre a los residentes del EEE invitados dentro del EEE. Los Welcome Gifts exigen la verificación de identidad Lv. 1, varían según el usuario y la región, expiran y no se pueden retirar.",
  headquarters: "Dubái, EAU",
  regulation: "Autorización MiCAR a través de Bybit EU GmbH, Viena (supervisada por la FMA de Austria), para el EEE excepto Malta",
  users: "90M+ usuarios (según Bybit)",
  assets: "390 monedas, 509 pares spot (API de Bybit)",
  maxLeverage: "Hasta 150x (perpetuo BTCUSDT)",
  feeNote:
    "Las comisiones bajan con el nivel VIP – Supreme VIP paga 0% maker en derivados – y pueden variar según la región; la referencia válida es la página “My Fee Rate” de tu cuenta.",
  products: [
    "Perpetuos USDT y USDC",
    "Contratos inversos",
    "Opciones",
    "Spot",
    "Copy trading",
    "Bots de trading",
    "Cuenta de trading unificada",
  ],
  tagline: "Motor de trading rápido, pensado ante todo para derivados",
  quickAnswer:
    "El código de referido de Bybit es VN3KGLE. Introdúcelo en el campo “Referral Code (Optional)” al registrarte – el botón de esta página lo completa por ti. Tiene que estar puesto en el momento del registro: Bybit no permite añadir ni cambiar un código de referido después. Los usuarios invitados pueden ganar hasta 250 USDT en tres etapas de trading, empezando por 50 USDT por una primera operación de 50 dólares en un plazo de 14 días.",
  about: [
    "Bybit nació en 2018 como exchange de derivados y trasladó su sede a Dubái en 2023. Hoy declara más de 90 millones de usuarios en más de 181 países y se describe como el segundo mayor exchange del mundo por volumen de trading. La plataforma sigue pareciendo hecha para traders activos: entrada de órdenes rápida, una cuenta de trading unificada y una app móvil muy cuidada.",
    "Además de perpetuos USDT y USDC, Bybit ofrece contratos inversos, opciones, spot, copy trading y bots de trading. Los usuarios estándar pagan 0.02% maker y 0.055% taker en perpetuos y futuros y 0.1% en spot. El apalancamiento llega hasta 150x en el perpetuo BTCUSDT en el nivel de riesgo más bajo y disminuye a medida que crece la posición. A los clientes europeos los atiende Bybit EU GmbH en Viena, que está supervisada por la FMA de Austria bajo MiCAR y cubre el EEE excepto Malta.",
    "El 21 de febrero de 2025, unos atacantes se llevaron alrededor de 1.46 mil millones de dólares de una de las cold wallets de Ethereum de Bybit – el mayor hackeo de la historia cripto. Bybit mantuvo abiertos los retiros, repuso el ETH que faltaba mediante préstamos puente, grandes depósitos y compras OTC, y una auditoría de prueba de reservas realizada por Hacken el 24 de febrero mostró que el déficit quedó cubierto en 72 horas. Según Bybit, los activos de los clientes estuvieron respaldados 1:1 en todo momento.",
  ],
  highlights: [
    { title: "ADN de derivados", text: "Creado para traders de futuros desde el primer día, con un motor de emparejamiento rápido." },
    { title: "Hasta 250 USDT", text: "Recompensas por referido en tres etapas, ligadas a tu propio volumen de trading." },
    { title: "Déficit cubierto en 72 horas", text: "Tras el hackeo de 2025, Bybit mantuvo abiertos los retiros y repuso las reservas." },
  ],
  pros: [
    "Motor rápido y estable y app móvil de primer nivel",
    "Amplia gama de contratos perpetuos, inversos y de opciones",
    "Recompensas por referido claras de hasta 250 USDT para el usuario invitado",
    "Prueba de reservas con autoverificación mediante árbol de Merkle",
  ],
  cons: [
    "Incidente de seguridad importante en febrero de 2025 (1.46 mil millones de dólares sustraídos de una cold wallet de Ethereum)",
    "El código de referido no se puede añadir ni cambiar después del registro",
    "Sin programa de referidos para residentes del EEE ni para Alemania, el Reino Unido, Francia, Bélgica y Hong Kong",
    "No disponible en EE. UU., Canadá, Singapur, Hong Kong ni China continental",
  ],
  bestFor: [
    "Traders activos de futuros perpetuos",
    "Traders que operan sobre todo desde el teléfono",
    "Usuarios que quieren copy trading con derivados",
  ],
  signupTip:
    "Revisa el campo “Referral Code (Optional)” antes de pulsar “Sign Up Now” – después no se puede corregir. Luego haz tu primera operación de al menos 50 dólares en un plazo de 14 días para desbloquear los primeros 50 USDT.",
  safety:
    "Bybit guarda los activos de los clientes en cold wallets multifirma y publica una prueba de reservas que, según afirma, muestra un respaldo 1:1; en nuestra revisión, la instantánea más reciente era del 27 de octubre de 2026, y puedes verificar tu propio saldo con una comprobación mediante árbol de Merkle y una herramienta de código abierto. Para tu cuenta, Bybit ofrece Google Authenticator y un código antiphishing. El hackeo de febrero de 2025 demuestra que incluso los grandes exchanges pueden ser vulnerados – mantén en la plataforma solo el capital que uses para operar.",
  restricted:
    "Bybit incluye entre los lugares con servicio restringido: Estados Unidos, China continental, Hong Kong, Singapur, Canadá, Corea del Norte, Cuba, Irán, Uzbekistán, Sudán, Siria, así como Crimea, Sebastopol y las zonas de Donetsk, Lugansk, Jersón y Zaporiyia no controladas por el gobierno. En el Reino Unido, Bybit no acepta nuevos registros, y desde el 21 de octubre de 2026 las cuentas del Reino Unido están limitadas a retiros.",
  faqs: [
    {
      topic: "referral",
      q: "¿Funciona VN3KGLE como código de referido de Bybit?",
      a: "Sí. El 16 de noviembre de 2026, el enlace de esta página abrió la página de invitación de Bybit con VN3KGLE ya introducido en el campo “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "¿Un código de referido de Bybit es lo mismo que un código de afiliado?",
      a: "No. Bybit los trata de forma distinta: un código de afiliado puede añadirse en los 14 días siguientes al registro en una cuenta principal que todavía no tenga código, mientras que los códigos del programa de referidos como VN3KGLE no pueden añadirse de ningún modo después del registro.",
    },
    {
      topic: "referral",
      q: "¿Funciona el código de referido de Bybit en la UE?",
      a: "No. Las condiciones del programa de referidos de Bybit establecen que el programa no está abierto a los residentes del EEE invitados dentro del EEE y que no hay programa de referidos en Alemania, Francia ni Bélgica. Los residentes del EEE usan Bybit EU (bybit.eu), que tiene su propia oferta de referidos.",
    },
    {
      topic: "referral",
      q: "¿Qué operaciones cuentan para las recompensas por referido de Bybit?",
      a: "Cuenta el volumen de trading de spot, derivados y opciones, y Bybit menciona también Alpha, Convert y algunos productos más recientes. Las operaciones en pares sin comisiones quedan excluidas.",
    },
    {
      topic: "signup",
      q: "¿Puedo registrarme en Bybit con Google, Apple o Telegram?",
      a: "Sí. El registro de Bybit ofrece Google, Apple y Telegram además del correo electrónico o el número de teléfono. En la app (versión 4.47.0 o posterior) también puedes crear una passkey.",
    },
    {
      topic: "signup",
      q: "¿Puedo usar Bybit sin KYC?",
      a: "Para operar, no. Sin la verificación de identidad, una cuenta de Bybit no puede depositar ni operar; solo puede retirar, hasta 20,000 USDT al día y 100,000 USDT al mes.",
    },
    {
      topic: "signup",
      q: "¿Cuáles son los niveles de KYC y los límites de retiro de Bybit?",
      a: "La verificación Standard (documento de identidad más evaluación de identidad) permite retiros de hasta 1 millón de USDT al día. La verificación Advanced, que añade un comprobante de domicilio, eleva el límite a 2 millones de USDT al día. Para límites más altos existe un nivel Pro con diligencia debida reforzada.",
    },
    {
      topic: "bonus",
      q: "¿De cuánto es el bono de referido de Bybit para nuevos usuarios?",
      a: "Hasta 250 USDT para el usuario invitado: 50 USDT por una primera operación de al menos 50 dólares en los 14 días siguientes al registro, 100 USDT por 500 dólares de volumen acumulado en los 30 días posteriores a esa operación y 100 USDT por 10,000 dólares en el mismo periodo. Quien invita recibe los mismos importes, y por eso Bybit anuncia hasta 500 USDT en conjunto.",
    },
    {
      topic: "bonus",
      q: "¿Qué son los Welcome Gifts de Bybit?",
      a: "El Rewards Hub de Bybit muestra 100 USDT en Welcome Gifts: un Fee Saver de 20 USDT por completar la verificación de identidad, un Position Airdrop de 30 USDT por un depósito de al menos 10 dólares y un Fee Saver de 50 USDT por una operación de al menos 10 dólares – todos para derivados. Las tareas varían según el usuario y la región.",
    },
    {
      topic: "bonus",
      q: "¿Tengo que reclamar las recompensas por referido de Bybit?",
      a: "Sí. Cada recompensa pasa primero por una revisión de riesgo de 3 días y después hay que reclamarla en un plazo de 10 días; de lo contrario, expira. Las recompensas proceden de un fondo mensual de 500,000 USDT y se pagan por orden de llegada.",
    },
    {
      topic: "bonus",
      q: "¿Puedo retirar los Welcome Gifts de Bybit?",
      a: "No. Bybit indica que las recompensas del Rewards Hub expiran y no se pueden retirar. Los Fee Saver compensan comisiones de trading y los Position Airdrop se usan como margen en el trading de derivados.",
    },
    {
      topic: "fees",
      q: "¿Cuáles son las comisiones de futuros de Bybit?",
      a: "Los usuarios VIP 0 pagan 0.02% maker y 0.055% taker en contratos perpetuos y de futuros, 0.1% en spot y 0.02% maker / 0.03% taker en opciones. Pagar en MNT reduce las comisiones de futuros un 10%, hasta 0.018% / 0.0495%.",
    },
    {
      topic: "fees",
      q: "¿Cuál es el apalancamiento máximo en Bybit?",
      a: "Hasta 150x en el perpetuo BTCUSDT en el primer nivel de riesgo (posiciones de hasta 300,000 USDT); el máximo baja a 100x en el nivel siguiente y sigue bajando a medida que crece la posición. Un apalancamiento alto aumenta considerablemente el riesgo de liquidación.",
    },
    {
      topic: "fees",
      q: "¿De cuánto es el descuento en comisiones de Bybit con MNT?",
      a: "Pagar las comisiones en MNT da un 25% de descuento en las comisiones de spot y un 10% en las de futuros. No se aplica a contratos inversos, bots de trading, seguidores de copy trading ni trading por API.",
    },
    {
      topic: "safety",
      q: "¿Fue hackeado Bybit?",
      a: "Sí. El 21 de febrero de 2025 se sustrajeron alrededor de 1.46 mil millones de dólares de una cold wallet de Ethereum. Bybit no suspendió los retiros, obtuvo ETH de reposición mediante préstamos puente, grandes depósitos y compras OTC, y una auditoría de prueba de reservas de Hacken del 24 de febrero mostró que el déficit quedó cubierto en 72 horas.",
    },
    {
      topic: "safety",
      q: "¿Está Bybit disponible en el Reino Unido?",
      a: "No. Bybit no acepta nuevos registros desde el Reino Unido, y desde el 21 de octubre de 2026 las cuentas con residencia en el Reino Unido están limitadas a retiros.",
    },
    {
      topic: "safety",
      q: "¿Está Bybit disponible en Europa?",
      a: "A los residentes del Espacio Económico Europeo (EEE) los atiende Bybit EU GmbH en Viena, que está supervisada por la Autoridad del Mercado Financiero de Austria bajo MiCAR y cubre el EEE excepto Malta. Es una plataforma independiente, con sus propias comisiones y su propia gama de productos.",
    },
  ],
};
