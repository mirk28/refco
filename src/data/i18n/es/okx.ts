import type { ExchangeText } from "../../types";

export const okx: ExchangeText = {
  referral: {
    codeName: "código de referido",
    whereShort: "Campo “Referral code (optional)” en el paso del correo electrónico del registro",
    apply:
      "Introdúcelo en el campo “Referral code (optional)” en el paso del correo electrónico del registro – el campo está plegado y hay que desplegarlo – o abre el enlace de registro de esta página, que ya lleva el código por ti.",
    whereToEnter:
      "En el sitio web de OKX, el código va en el campo “Referral code (optional)”, en el paso en el que introduces tu dirección de correo electrónico. El campo está plegado, así que despliégalo primero. Si llegas a través de un enlace de referido, el código ya va incluido, y OKX indica que un código precargado desde un enlace no se puede editar. En el teléfono, las instrucciones de OKX son introducir primero tu correo electrónico en la página de invitación, después instalar la app a través de ese enlace y registrarte con el mismo correo – si instalas la app por separado y te registras allí, es posible que el código no se transfiera.",
    afterSignupShort: "No – solo durante el registro",
    afterSignup:
      "No. OKX indica que los códigos de invitación solo surten efecto durante el registro y no se pueden añadir de forma retroactiva; sus preguntas frecuentes sobre referidos dicen que, por lo general, un código no se puede añadir ni cambiar después. Eliminar tu cuenta y registrarte de nuevo no restablece la elegibilidad y puede considerarse una infracción. Un enlace con la forma okx.com/join/… no se puede asociar a una cuenta ya existente.",
    inviteeReward:
      "Como usuario invitado recibes las recompensas de bienvenida de OKX, también llamadas New User Bonus. Son independientes de la recompensa de quien te invita y dependen de tu país, de la campaña y del enlace que hayas usado; la oferta queda fijada en el momento en que te registras. En nuestra comprobación, la página de invitación de este código mostraba una recompensa de bienvenida de hasta 400 € en OKX Europe, y la página de invitación global de OKX prometía hasta 100 USDT por registrarse y completar tareas.",
    guide: [
      "Un código de referido de OKX vincula tu nueva cuenta con la persona que te invitó. Para ti, el efecto práctico es el acceso a las recompensas de bienvenida: un conjunto de tareas de depósito y de trading cuyos importes fija OKX según el país, la campaña y el grupo de usuarios. La oferta que recibes se decide cuando te registras, y por eso el código tiene que estar puesto en ese momento.",
      "A qué OKX llegas depende de dónde vivas. Los visitantes del Espacio Económico Europeo (EEE) – y de varios otros países europeos – son redirigidos a OKX Europe (okx.com/en-eu), operado por OKX Europe Limited en Malta bajo MiCA. Allí las recompensas se pagan en criptomonedas, cupones de X-Perps o un VIP Pass, las recompensas en criptomonedas permanecen bloqueadas hasta 45 días (se pueden operar, pero no retirar) y el volumen de X-Perps no cuenta para las tareas de trading.",
      "En el sitio global, las recompensas llegan en forma de criptomonedas o tarjetas de reembolso que hay que abrir en un plazo de 30 días, una tarea de trading debe cumplirse con una sola operación y las tareas sin completar desaparecen 180 días después del registro.",
    ],
  },
  signup: {
    methods: ["una dirección de correo electrónico (durante el registro se añade y se confirma un número de teléfono)"],
    steps: [
      {
        title: "Abre la página de invitación de OKX",
        text: "Usa el botón de registro de esta página. OKX abre la página de invitación del código T7IRGAR3 y muestra la recompensa de bienvenida que se aplica en tu país.",
      },
      {
        title: "Elige tu país o región de residencia",
        text: "Selecciona dónde vives, acepta los Términos de Servicio y haz clic en “Next”.",
      },
      {
        title: "Introduce tu dirección de correo electrónico y comprueba el código de referido",
        text: "Despliega “Referral code (optional)” – debería contener T7IRGAR3 – y luego haz clic en “Sign up”.",
      },
      {
        title: "Confirma el código de 6 dígitos del correo electrónico",
        text: "OKX envía un código de 6 dígitos a tu dirección de correo electrónico. Es válido durante 10 minutos.",
      },
      {
        title: "Añade tu número de teléfono",
        text: "Introduce tu número de teléfono y el código de 6 dígitos que se envía a ese número. OKX exige tanto una dirección de correo electrónico como un número de teléfono en todas las cuentas.",
      },
      {
        title: "Crea una contraseña",
        text: "Elige una contraseña segura y única para la cuenta.",
      },
      {
        title: "Verifica tu identidad",
        text: "Completa la verificación de identidad con un documento de identidad oficial y una selfie o una comprobación facial. El trading, los depósitos y los retiros vienen después.",
      },
    ],
    kycShort: "Obligatoria antes de operar, depositar y retirar",
    kyc: "Sí. OKX exige la verificación de identidad para usar una cuenta individual – el trading, los depósitos y los retiros vienen después de ella. Indicas tu residencia, nacionalidad, nombre, fecha de nacimiento y los datos de tu documento, subes un documento oficial y completas una selfie o una comprobación facial; OKX también puede pedirte un comprobante de domicilio emitido en los últimos 6 meses. OKX dice que la revisión se completa en un plazo de 24 horas, y un documento de identidad solo puede usarse para una única cuenta.",
    documents:
      "Un documento de identidad oficial vigente: pasaporte, documento nacional de identidad, licencia de conducir o permiso de residencia – la lista que se muestra para tu país durante la verificación es la definitiva – más una selfie o una comprobación facial y, si se solicita, un comprobante de domicilio con no más de 6 meses de antigüedad.",
    minAge: "18 años",
  },
  welcomeTasks: [],
  tokenDiscount: "",
  extraFeeMarkets: ["Opciones"],
  sourceLabels: [
    "OKX: Cómo registrar una cuenta",
    "OKX: Preguntas frecuentes sobre el programa de referidos",
    "OKX: Preguntas frecuentes para afiliados (códigos de invitación y reembolsos)",
    "OKX: Términos y condiciones del New User Bonus (EEE)",
    "OKX: Preguntas frecuentes sobre el New User Bonus (EEE)",
    "OKX: Términos y condiciones del New User Bonus (global)",
    "OKX: Tabla de comisiones",
    "OKX: Preguntas frecuentes sobre las reglas de comisiones de trading",
    "OKX: Apalancamiento de X-Perps en el EEE",
    "API pública de OKX: instrumentos de swaps perpetuos (apalancamiento máximo)",
    "OKX: Cómo verificar una cuenta individual",
    "OKX: Verificación de identidad – elegibilidad, tiempo de revisión y documentos",
    "OKX: Divulgación de riesgos y cumplimiento (ubicaciones restringidas)",
    "OKX: Términos de Servicio",
    "OKX Europe: Acerca de",
    "OKX Middle East: Acerca de (licencia VARA)",
    "OKX: Prueba de reservas",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futuros y swaps perpetuos"],
  bonusHeadline: "Recompensa de bienvenida de hasta 400 € o 100 USDT",
  benefits: [
    "Recompensas de bienvenida de OKX para nuevos usuarios: hasta 400 € en OKX Europe y hasta 100 USDT en el sitio global, que se desbloquean con tareas de depósito y de trading",
    "Comisiones estándar bajas: 0.08% maker / 0.10% taker en spot y 0.02% / 0.05% en futuros y perpetuos",
    "Un código que va en el enlace no se puede escribir mal – OKX bloquea el código precargado",
    "Prueba de reservas mensual que puedes comprobar con tu propio saldo",
  ],
  benefitNote:
    "Las recompensas de bienvenida exigen registrarse a través de un enlace designado y completar la verificación de identidad, y después tareas de depósito y de trading. En OKX Europe las transferencias internas no cuentan como depósitos, los pares sin comisiones y el volumen de X-Perps no cuentan como operaciones, las recompensas en criptomonedas permanecen bloqueadas hasta 45 días y la acreditación puede tardar hasta 48 horas. En el sitio global las recompensas deben abrirse en un plazo de 30 días y las tareas caducan 180 días después del registro. Los importes y las tareas varían según el país y la campaña.",
  headquarters: "Aux Cayes FinTech Co. Ltd. (Seychelles) para el sitio global; OKX Europe Limited (Malta); OKX Middle East Fintech FZE (Dubái)",
  regulation: "Autorización MiCA a través de OKX Europe Limited (Malta, MFSA); licencia VARA en Dubái",
  users: "120M+ usuarios (según OKX Europe)",
  assets: "270+ criptomonedas (según OKX Europe)",
  maxLeverage: "Hasta 100x (sitio global; hasta 10x en OKX Europe)",
  feeNote:
    "Estas son las comisiones para usuarios Regular; el nivel siguiente empieza en 100,000 en activos o en 1,000,000 de volumen spot de 30 días (5,000,000 para futuros), contados en EUR en OKX Europe y en USD en el sitio global. Los futuros con vencimiento tienen una comisión de liquidación (settlement) del 0.01%.",
  products: ["Spot", "Swaps perpetuos", "Futuros con vencimiento", "Opciones", "Bots de trading"],
  tagline: "Spot y derivados con comisiones bajas y prueba de reservas mensual",
  quickAnswer:
    "El código de referido de OKX es T7IRGAR3. En el sitio web va en el campo “Referral code (optional)”, en el paso del correo electrónico del registro; el botón de esta página ya lo lleva por ti. Solo funciona durante el registro – OKX no añade códigos de invitación de forma retroactiva. Los nuevos usuarios reciben las recompensas de bienvenida de OKX: hasta 400 € en OKX Europe o hasta 100 USDT en el sitio global, tras la verificación de identidad y las tareas de depósito y de trading.",
  about: [
    "OKX se fundó en 2017 y es uno de los mayores exchanges de criptomonedas tanto en spot como en derivados. Las páginas de OKX Europe hablan de más de 120 millones de usuarios y listan más de 270 criptomonedas. Los usuarios Regular pagan 0.08% maker y 0.10% taker en spot, 0.02% / 0.05% en futuros y swaps perpetuos y 0.03% en opciones.",
    "La gama de productos abarca spot, swaps perpetuos, futuros con vencimiento, opciones y bots de trading, pero lo que puedes usar depende de dónde vivas. En el sitio global el apalancamiento más alto es de 100x, disponible en perpetuos como BTC-USDT, ETH-USDT, SOL-USDT y XRP-USDT. En OKX Europe el producto perpetuo se llama X-Perps y está limitado a 10x, menos para posiciones más grandes.",
    "OKX publica una prueba de reservas cada mes. El informe número 49 cubrió 33.87 mil millones de dólares en 21 activos; la verificación del 1 de noviembre de 2026 mostró ratios de reserva del 108% para BTC, 101% para ETH, 106% para USDT y 100% para USDC. Se basa en zk-STARK y un árbol de Merkle, de modo que los usuarios que han iniciado sesión pueden comprobar que su propio saldo está incluido. OKX Europe Limited está autorizada por la Malta Financial Services Authority como proveedor de servicios de criptoactivos bajo MiCA, y OKX Middle East Fintech FZE tiene una licencia de la VARA de Dubái.",
  ],
  highlights: [
    { title: "Comisiones estándar bajas", text: "0.08% / 0.10% en spot y 0.02% / 0.05% en futuros y perpetuos." },
    { title: "Prueba de reservas mensual", text: "49 informes hasta ahora, verificables con zk-STARK y un árbol de Merkle." },
    { title: "Autorizado bajo MiCA en el EEE", text: "OKX Europe Limited está autorizada por el regulador maltés MFSA." },
  ],
  pros: [
    "Comisiones estándar bajas en spot, futuros y opciones",
    "Prueba de reservas mensual que puedes verificar tú mismo, con ratios superiores al 100%",
    "Entidad autorizada bajo MiCA para usuarios del EEE y licencia VARA en Dubái",
    "Opciones y futuros con vencimiento además de swaps perpetuos",
  ],
  cons: [
    "El código de referido no se puede añadir después del registro",
    "Los productos dependen mucho de tu país – los perpetuos están limitados a 10x en OKX Europe",
    "Las recompensas de bienvenida en OKX Europe permanecen bloqueadas hasta 45 días",
    "No disponible en Canadá, India, Japón, Hong Kong ni en partes de Estados Unidos",
  ],
  bestFor: ["Traders de spot y futuros atentos a las comisiones", "Traders de opciones", "Usuarios del EEE que quieren una plataforma autorizada bajo MiCA"],
  signupTip:
    "En el teléfono, introduce primero tu correo electrónico en la página de invitación e instala la app a través de ese enlace – si descargas la app por separado y te registras allí, es posible que el código de referido no se transfiera.",
  safety:
    "OKX publica una prueba de reservas mensual – ratios del 108% para BTC, 101% para ETH, 106% para USDT y 100% para USDC en la verificación del 1 de noviembre de 2026 – y permite a los usuarios que han iniciado sesión comprobar su propio saldo mediante “View my report”, con herramientas de código abierto y direcciones de billeteras publicadas. Todas las cuentas deben tener vinculados tanto una dirección de correo electrónico como un número de teléfono. Como en cualquier exchange, mantén en la plataforma solo el capital destinado al trading.",
  restricted:
    "OKX incluye como ubicaciones restringidas: Afganistán, Canadá, Cuba, Hong Kong, Irán, India, Japón, Malasia, Nepal, Corea del Norte, Siria, Uzbekistán, las regiones de Crimea, Donetsk y Luhansk y determinadas jurisdicciones de Estados Unidos, incluidos todos los territorios estadounidenses. Se aplican restricciones parciales en Australia, Brasil, Corea del Sur y el Reino Unido (sin derivados) y para los pagos en moneda fiat en Rusia. La lista se actualizó por última vez el 14 de noviembre de 2026.",
  faqs: [
    {
      topic: "referral",
      q: "¿T7IRGAR3 es un código de referido de OKX que funciona?",
      a: "Sí. El 16 de noviembre de 2026 el enlace okx.com/join/T7IRGAR3 abrió la propia página de invitación de OKX para ese código, con una recompensa de bienvenida y un enlace de registro que lleva el código.",
    },
    {
      topic: "referral",
      q: "¿Por qué no veo el campo del código de referido en OKX?",
      a: "El campo “Referral code (optional)” está plegado en el formulario de registro y hay que desplegarlo. OKX añade que, si el campo no aparece en absoluto, debes registrarte a través del enlace de referido.",
    },
    {
      topic: "referral",
      q: "¿Cómo uso el código de referido de OKX en la app?",
      a: "Abre el enlace de invitación en tu teléfono e introduce allí tu dirección de correo electrónico; después instala la app de OKX a través de ese enlace y regístrate con el mismo correo. OKX advierte que el código puede no transferirse si instalas la app por separado y te registras en ella.",
    },
    {
      topic: "referral",
      q: "¿Puedo conseguir el referido de OKX si elimino mi cuenta y me registro de nuevo?",
      a: "No. OKX indica que eliminar una cuenta y volver a registrarse no restablece la elegibilidad y puede tratarse como una infracción.",
    },
    {
      topic: "signup",
      q: "¿Necesito un número de teléfono para registrarme en OKX?",
      a: "Sí. El registro de OKX pide primero una dirección de correo electrónico y después un número de teléfono, cada uno confirmado con un código de 6 dígitos. Ambos deben estar vinculados, y cada dirección de correo electrónico y cada número de teléfono solo pueden usarse para una única cuenta.",
    },
    {
      topic: "signup",
      q: "¿Cuánto tiempo es válido el código de verificación por correo electrónico de OKX?",
      a: "El código de 6 dígitos que OKX envía a tu dirección de correo electrónico durante el registro es válido durante 10 minutos.",
    },
    {
      topic: "signup",
      q: "¿Cuánto tarda la verificación de identidad de OKX?",
      a: "OKX dice que la revisión se completa en un plazo de 24 horas después de que envíes tu documento y la selfie o la comprobación facial.",
    },
    {
      topic: "signup",
      q: "¿Puedo usar OKX sin KYC?",
      a: "No. La verificación de identidad es obligatoria para usar una cuenta individual; el trading, los depósitos y los retiros solo están disponibles después.",
    },
    {
      topic: "bonus",
      q: "¿Cuáles son las recompensas de bienvenida de OKX?",
      a: "Los nuevos usuarios que se registran a través de un enlace de referido reciben las recompensas de bienvenida de OKX (New User Bonus). En nuestra comprobación, la página de invitación mostraba hasta 400 € en OKX Europe, y la página de invitación global mostraba hasta 100 USDT. Las recompensas se desbloquean al completar la verificación de identidad, las tareas de depósito y las tareas de trading, y varían según el país y la campaña.",
    },
    {
      topic: "bonus",
      q: "¿Puedo retirar la recompensa de bienvenida de OKX de inmediato?",
      a: "No. En OKX Europe las recompensas en criptomonedas quedan bloqueadas hasta 45 días – puedes operar con ellas, pero no retirarlas. En el sitio global las recompensas quedan bloqueadas al llegar y no se pueden operar ni retirar durante el bloqueo.",
    },
    {
      topic: "bonus",
      q: "¿Qué depósitos y operaciones cuentan para las tareas de bienvenida de OKX?",
      a: "En OKX Europe cuentan los depósitos de criptomonedas o de moneda fiat mediante SEPA, iDEAL o Bancontact; las transferencias internas no. Cuentan las operaciones realizadas con Buy, Sell, Convert o el libro de órdenes spot; los pares sin comisiones y el volumen de X-Perps no. En el sitio global, una tarea de trading tiene que cumplirse con una sola operación.",
    },
    {
      topic: "fees",
      q: "¿Cuáles son las comisiones de opciones de OKX?",
      a: "Los usuarios Regular pagan 0.03% maker y 0.03% taker en opciones.",
    },
    {
      topic: "fees",
      q: "¿Cuál es el apalancamiento máximo en OKX?",
      a: "100x en el sitio global, en swaps perpetuos como BTC-USDT, ETH-USDT, SOL-USDT y XRP-USDT, y menor para posiciones más grandes. En OKX Europe, los X-Perps están limitados a 10x. Un apalancamiento alto aumenta drásticamente el riesgo de liquidación.",
    },
    {
      topic: "fees",
      q: "¿Cómo consigo comisiones más bajas en OKX?",
      a: "Los niveles de comisiones de OKX dependen de tu saldo de activos o de tu volumen de trading de 30 días. El nivel Regular termina en 100,000 en activos, o en 1,000,000 de volumen de 30 días en spot y 5,000,000 en futuros; por encima de eso se aplican las comisiones VIP.",
    },
    {
      topic: "safety",
      q: "¿Está OKX regulado en Europa?",
      a: "Sí. OKX Europe Limited está autorizada por la Malta Financial Services Authority como proveedor de servicios de criptoactivos bajo MiCA y atiende a los clientes del EEE a través de okx.com/en-eu.",
    },
    {
      topic: "safety",
      q: "¿Está OKX disponible en Estados Unidos?",
      a: "Solo de forma limitada: OKX incluye determinadas jurisdicciones de Estados Unidos y todos los territorios estadounidenses entre las ubicaciones restringidas. Canadá, India, Japón y Hong Kong están totalmente restringidos.",
    },
    {
      topic: "safety",
      q: "¿Publica OKX una prueba de reservas?",
      a: "Sí, cada mes. El informe número 49 cubrió 33.87 mil millones de dólares en 21 activos, y la verificación del 1 de noviembre de 2026 mostró 108% para BTC, 101% para ETH, 106% para USDT y 100% para USDC.",
    },
  ],
};
