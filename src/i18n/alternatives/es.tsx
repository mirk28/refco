import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";
import Link from "next/link";
import type { AlternativesTexts } from "./en";

/**
 * Texts of the "[Exchange] alternatives" pages in Spanish. Same keys as `./en.tsx`.
 * Wording as in `../es.tsx`: "exchange" (masculine), "comisiones", "código de referido", informal "tú".
 */
export const es: AlternativesTexts = {
  /* ------------------------------- metadata ------------------------------- */
  // Cuatro formulaciones, fijas por exchange.
  title: (x, n, shortMonthYear) =>
    fit(
      TITLE_MAX,
      ...[
        [`Alternativas a ${x.name} (${shortMonthYear}): ${n} exchanges comparados`],
        [`Las ${n} mejores alternativas a ${x.name} (${shortMonthYear}): comisiones y bonos`, `Las ${n} mejores alternativas a ${x.name}: comisiones y bonos`],
        [`¿Buscas alternativas a ${x.name}? ${n} exchanges comparados`],
        [`Alternativas a ${x.name} ${yearOf(shortMonthYear)}: comisiones, apalancamiento y KYC`, `Alternativas a ${x.name} ${yearOf(shortMonthYear)}: comisiones y KYC comparados`],
      ][variant(4, x.slug)],
      `Alternativas a ${x.name}: ${n} exchanges comparados`,
      `Alternativas a ${x.name} (${shortMonthYear})`,
    ),
  description: (x, names, n, former, monthYear) =>
    fit(
      DESC_MAX,
      `${names}: ${n} alternativas a ${x.name}${former ? ` (${former})` : ""} por comisiones, apalancamiento, KYC, países y códigos de referido (${monthYear}).`,
      `${names}: ${n} alternativas a ${x.name} por comisiones, apalancamiento, KYC, países y códigos de referido (${monthYear}).`,
      `${names}: ${n} alternativas a ${x.name} comparadas por comisiones, apalancamiento, KYC, países y códigos de referido.`,
    ),
  keywords: (x, alts, former) => [
    `alternativas a ${x.name}`,
    `alternativa a ${x.name}`,
    `exchanges como ${x.name}`,
    `mejores alternativas a ${x.name}`,
    `competidores de ${x.name}`,
    `alternativa a ${x.name} con comisiones más bajas`,
    `alternativa a ${x.name} sin KYC`,
    ...(former ? [`alternativas a ${former}`, `alternativa a ${former}`] : []),
    ...alts.map((a) => `${a.name} vs ${x.name}`),
  ],
  crumbHome: "Inicio",
  crumbReferral: (name) => `Código de referido de ${name}`,
  crumbAlternatives: (name) => `Alternativas a ${name}`,
  listLdName: (name) => `Alternativas a ${name}`,
  listLdDescription: (name) => `Exchanges comparados con ${name}, en el orden del ranking de derivados de CoinMarketCap.`,
  howToLdName: (name) => `Cómo cambiar de ${name} a otro exchange`,
  howToLdDescription: (name) => `Qué comprobar y en qué orden al pasar de ${name} a otro exchange de criptomonedas.`,
  ogTitle: (name) => `Alternativas a ${name}`,
  ogSubtitle: (names) => `${names} – comisiones, apalancamiento, KYC y países comparados`,

  /* --------------------------------- words --------------------------------- */
  /** " y ", or " e " in front of a name that starts with the sound "i". */
  and: (next) => (/^h?i(?![aeou])/i.test(next) ? " e " : " y "),
  noneOfThem: "Ninguna de ellas",

  /* ---------------------------------- hero ---------------------------------- */
  updated: (date) => `Comprobado y actualizado el ${date}`,
  h1: (name, n) => `Alternativas a ${name}: ${n} exchanges comparados`,
  quickAnswer: "Respuesta rápida",
  chipsLabel: "Qué se compara",
  chips: (n, products, countries) => [`${n} exchanges`, "Comisiones y apalancamiento", `${products} productos`, `${countries} países`, "KYC y regulación", "Códigos de referido"],
  glanceTitle: (name) => `Alternativas a ${name} de un vistazo`,
  glanceIntro: "En qué destaca cada una, con sus comisiones estándar de futuros (maker / taker).",
  glanceOrder: (marketDate) => `Orden: ranking de derivados de CoinMarketCap, ${marketDate}. El trading con apalancamiento es de alto riesgo.`,
  onThisPage: "En esta página",
  toc: (name, n) => [
    ["at-a-glance", "De un vistazo"],
    ["why", `¿Por qué cambiar de ${name}?`],
    ["alternatives", `Las ${n} alternativas`],
    ["by-need", "La mejor para cada necesidad"],
    ["fees", "Comisiones"],
    ["products", "Productos"],
    ["countries", "Países"],
    ["kyc", "Verificación (KYC)"],
    ["safety", "Regulación y reservas"],
    ["referral-codes", "Códigos de referido"],
    ["switch", "Cómo cambiar"],
    ["faq", "Preguntas frecuentes"],
    ["sources", "Fuentes"],
  ],

  /* ------------------------------- at a glance ------------------------------ */
  comparedTitle: (name, monthYear) => `Alternativas a ${name} comparadas (${monthYear})`,
  comparedIntro: (name, n, date) =>
    `Las ${n} alternativas junto al propio ${name}. Las comisiones son las tarifas estándar (sin VIP) que publica cada exchange, mostradas como maker / taker; el apalancamiento es el máximo que documenta; el código de referido es el que puedes usar para registrarte. Todas las cifras se leyeron en el sitio del propio exchange el ${date}.`,
  comparedCaption: (name, n) => `${name} y ${n} alternativas: en qué destaca cada una, comisiones, apalancamiento y código de referido`,
  colExchange: "Exchange",
  colBestFor: "Ideal para",
  colFuturesFees: "Comisiones de futuros",
  colSpotFees: "Comisiones spot",
  colMaxLeverage: "Apalancamiento máx.",
  colReferralCode: "Código de referido",
  colAction: "Acción",
  forComparison: "como referencia",
  signUp: "Registrarse",
  comparedOrder: (marketDate) => `Orden de las alternativas: ranking de derivados de CoinMarketCap, ${marketDate}.`,

  /* ----------------------------------- why ---------------------------------- */
  whyTitle: (name) => `¿Por qué buscar una alternativa a ${name}?`,
  whyIntro: (name, sourcesHref) => (
    <>
      Estos son los puntos en los que el propio {name} pone límites – cada uno tomado de las páginas del propio {name} (consulta la{" "}
      <Link href={sourcesHref}>lista de fuentes de nuestra página de {name}</Link>). Si ninguno te afecta, quedarte es una opción perfectamente válida.
    </>
  ),
  stayTitle: (name) => `Cuándo ${name} sigue siendo la opción adecuada`,
  stayOutro: (name, code, href) => (
    <>
      ¿Has decidido quedarte? Nuestra <Link href={href}>página del código de referido de {name}</Link> tiene el código {code}, los pasos de registro y
      la oferta actual para nuevos usuarios.
    </>
  ),

  /* ------------------------------ alternatives ------------------------------ */
  detailTitle: (name, n) => `Las ${n} mejores alternativas a ${name} en detalle`,
  detailIntro: (name) =>
    `Cada alternativa se mide con ${name} en los mismos puntos: comisiones, apalancamiento, tamaño del mercado, verificación, reglas de referidos, productos y los países que acepta. “Por delante” solo recoge diferencias que se pueden leer en las cifras de los propios exchanges.`,
  rowFuturesFees: "Comisiones de futuros (maker / taker)",
  rowSpotFees: "Comisiones spot (maker / taker)",
  rowMaxLeverage: "Apalancamiento máx.",
  rowAssets: "Activos listados",
  rowOpenInterest: "Interés abierto en derivados",
  rowUsers: "Usuarios",
  rowFounded: "Año de fundación",
  rowKyc: "Verificación de identidad",
  rowAddLater: "¿Añadir el código de referido después?",
  rowOffer: "Oferta para nuevos usuarios",
  bestFor: (role) => `Ideal para: ${role}`,
  asAlternative: (name) => `como alternativa a ${name}`,
  chooseIf: (a, x) => `Elige ${a} en lugar de ${x} si …`,
  thinkTwiceIf: "Piénsalo dos veces si …",
  whereAhead: (a, x) => `En qué va ${a} por delante de ${x}`,
  whereBehind: (x) => `En qué va ${x} por delante`,
  noAdvantage: "Ninguna ventaja medible en los puntos que comparamos.",
  codeLabel: (name) => `Código de referido de ${name}`,
  signUpOn: (name) => `Regístrate en ${name}`,
  linkReferral: (name, code) => `Código de referido de ${name} ${code}: oferta, pasos de registro y KYC`,
  linkVersus: (a, x) => `${a} vs ${x}: comparación completa cara a cara`,
  linkAlternatives: (name) => `Alternativas a ${name}`,
  sideBySide: (a, x) => `${a} vs ${x}: todas las cifras lado a lado`,
  sideBySideCaption: (a, x) => `${a} vs ${x}: comisiones, apalancamiento, activos, verificación y reglas de referidos`,
  versusHead: (a, x) => `${a} vs ${x}`,

  /* --------------------------------- by need -------------------------------- */
  needTitle: (name) => `La mejor alternativa a ${name} para cada necesidad`,
  needIntro: (n) => `Cuál de las ${n} sale mejor parada depende de lo que busques. La tabla lo responde necesidad por necesidad – a partir de las cifras, sin una clasificación propia.`,
  needCaption: (name) => `La mejor alternativa a ${name} según la necesidad`,
  needColWant: "Si quieres …",
  needColLook: "Mira",
  needColWhy: "Por qué",
  needLowestFutures: "Las comisiones de futuros más bajas",
  needLowestSpot: "Las comisiones spot más bajas",
  needHighestLeverage: "El mayor apalancamiento",
  needDeepest: "El mercado de derivados más profundo",
  needMostMarkets: "El mayor número de mercados de derivados",
  needMica: "Una plataforma autorizada bajo MiCA para el EEE",
  needAddLater: "Poder añadir el código de referido después del registro",
  whyStandardTier: (fees) => `${fees} maker / taker en el nivel estándar`,
  whyOpenInterest: (amount, marketDate) => `${amount} de interés abierto (CoinMarketCap, ${marketDate})`,
  whyMarkets: (markets, marketDate) => `${markets} mercados (CoinMarketCap, ${marketDate})`,
  whyFeature: "Aparece en el sitio del propio exchange – qué se ofrece exactamente figura en Productos",
  needNotFound: (n) => `No encontrado en los sitios de las ${n} alternativas en nuestra revisión.`,

  /* ---------------------------------- fees ---------------------------------- */
  feesTitle: (name) => `Comisiones: ${name} frente a sus alternativas`,
  feesIntro:
    "Los siete exchanges usan un modelo maker/taker: las órdenes límite que añaden liquidez pagan la comisión maker, y las órdenes que retiran liquidez pagan la comisión taker. La tabla muestra el nivel estándar – las tarifas que paga una cuenta nueva antes de cualquier nivel VIP o descuento por token.",
  feesCaption: (name) => `Comisiones estándar de spot y futuros de ${name} y sus alternativas`,
  colFuturesMaker: "Futuros maker",
  colFuturesTaker: "Futuros taker",
  colSpotMaker: "Spot maker",
  colSpotTaker: "Spot taker",
  colOtherMarkets: "Otros mercados (maker / taker)",
  feesNote: (date) => `Tarifas estándar (sin VIP) tal como las publica cada exchange, comprobadas el ${date}. Las comisiones cambian – confírmalas en el exchange antes de operar.`,
  cheaperTitle: (name) => `¿Quién es más barato que ${name}?`,
  tokenTitle: "Descuentos por token y letra pequeña",
  noTokenDiscount: "No se publica ningún descuento por pagar las comisiones con un token del exchange.",

  /* -------------------------------- products -------------------------------- */
  productsTitle: "Productos: qué ofrece cada exchange",
  productsIntro: (date) =>
    `Una marca significa que el exchange muestra el producto en su propio sitio. Una raya significa que el ${date} no encontramos allí ninguna página sobre él – no demuestra que el producto no exista. Lo que se ofrece puede variar según el país, sobre todo en las plataformas regionales.`,
  productsCaption: (name) => `Productos que ofrecen ${name} y sus alternativas`,
  colProduct: "Producto",
  productDetailsTitle: "Detalles de los productos por exchange",
  productDetails: (name) => `${name}: productos en detalle`,
  offered: "Se ofrece",
  notOffered: "No se ofrece",
  noPageFound: "No se encontró ninguna página en el sitio del propio exchange",

  /* -------------------------------- countries ------------------------------- */
  countriesTitle: (name) => `Disponibilidad: ${name} y sus alternativas por país`,
  countriesIntro: (count) =>
    `El lugar donde vives es el motivo más habitual para necesitar una alternativa. La tabla muestra, para ${count} países, lo que dicen los términos de cada exchange. “Sitio regional” significa que el exchange atiende al país a través de una plataforma separada con sus propios productos, comisiones y límites.`,
  countriesCaption: (name) => `Disponibilidad por país de ${name} y sus alternativas`,
  colCountry: "País",
  legendRestricted: "cerrado para los residentes según los términos o avisos del propio exchange",
  legendRegional: "atendido por una plataforma regional separada",
  legendPartial: "solo algunos productos o regiones",
  legendOpen: (date) => `no figura en la lista de países restringidos el ${date}`,
  countriesNote:
    "“No restringido” no garantiza que en ese país se ofrezcan todos los productos. Se aplican los términos del exchange en el momento en que te registras, y todos estos exchanges prohíben eludir una restricción con una VPN o con datos falsos.",
  countryHeading: (name, country) => `Alternativas a ${name} en ${country}`,
  restrictedTitle: "Países restringidos y plataformas regionales por exchange",
  whereNotAvailable: (name) => `¿Dónde no está disponible ${name}?`,
  regionalPlatforms: "Plataformas regionales:",

  /* ----------------------------------- kyc ---------------------------------- */
  kycTitle: (name) => `Verificación: ¿hay alguna alternativa a ${name} sin KYC?`,
  kycIntro: (n) =>
    `No entre estas ${n}. Todos los exchanges de esta comparación piden verificación de identidad a los nuevos usuarios, y en la mayoría los depósitos o el trading permanecen bloqueados hasta completarla. Las diferencias están en lo que todavía puede hacer una cuenta sin verificar.`,
  kycCaption: (name) => `Verificación de identidad en ${name} y sus alternativas`,
  colKyc: "Verificación de identidad",
  kycDetailsTitle: "Qué dice cada exchange sobre la verificación",
  kycQuestion: (name) => `¿Necesito verificación de identidad (KYC) en ${name}?`,

  /* --------------------------------- safety --------------------------------- */
  safetyTitle: "Regulación, prueba de reservas y fondos de protección",
  safetyIntro:
    "Ningún exchange centralizado está libre de riesgo. Lo que sí se puede comparar es lo que cada uno publica sobre sí mismo: dónde tiene licencia, si demuestra sus reservas y si mantiene un fondo para emergencias.",
  safetyCaption: (name) => `Regulación, prueba de reservas y fondos de protección de ${name} y sus alternativas`,
  colLicences: "Licencias que nombra el exchange",
  colReserves: "Prueba de reservas",
  colFund: "Fondo de protección",
  noneNamed: "No nombra ninguno",
  safetyNote: "Los ratios de reservas son cifras de los propios exchanges en las fechas indicadas. Mantén en un exchange solo los fondos con los que operas activamente.",

  /* ----------------------------- referral codes ----------------------------- */
  codesTitle: (name) => `Códigos de referido para las alternativas a ${name}`,
  codesIntro:
    "Si abres una cuenta en una de las alternativas, hazlo con un código de referido: no cuesta nada, nunca aumenta tus comisiones y desbloquea la oferta del exchange para nuevos usuarios. La última columna es la más importante – en varios exchanges un código olvidado no se puede añadir después.",
  codesCaption: (name) => `Códigos de referido de ${name} y sus alternativas`,
  colOffer: "Oferta para nuevos usuarios",
  colWhere: "Dónde va el código",
  colLater: "¿Se puede añadir después?",
  codesRow: (name) => `Código de referido de ${name}`,
  codesNote: (date) => `Ofertas comprobadas el ${date}. Las recompensas de bienvenida se basan en tareas, exigen verificación de identidad y varían según el país.`,

  /* --------------------------------- switch --------------------------------- */
  switchTitle: (name) => `Cómo cambiar de ${name} a otro exchange`,
  switchIntro: "Cambiar da menos trabajo de lo que parece, siempre que respetes el orden: primero la cuenta, después la verificación y al final los fondos.",

  /* ----------------------------------- faq ---------------------------------- */
  faqTitle: (name) => `Alternativas a ${name} – Preguntas frecuentes`,
  faqIntro: (name, count) => `${count} preguntas sobre cómo sustituir a ${name}: qué exchange encaja con cada necesidad, comisiones, países, verificación y cómo cambiar.`,

  /* --------------------------------- sources -------------------------------- */
  sourcesTitle: "Fuentes: de dónde salen estas cifras",
  sourcesIntro: (date, marketDate) =>
    `Todo lo que dice esta página sobre comisiones, apalancamiento, productos, verificación, países, licencias, reservas y reglas de referidos se leyó en los sitios web y centros de ayuda de los propios exchanges el ${date}. El interés abierto y el número de mercados de derivados proceden del ranking de derivados de CoinMarketCap (${marketDate}). Los exchanges cambian sus términos sin previo aviso, así que las páginas siguientes tienen la última palabra.`,
  sourcesSummary: (name, count, focus) => `${name}: ${count} páginas oficiales${focus ? "" : " consultadas para esta comparación"}`,
  sourcesMore: (name, count, href) => (
    <>
      Comisiones, apalancamiento, verificación, reglas de referidos y lista de países restringidos de {name}:{" "}
      <Link href={href}>
        las {count} fuentes en nuestra página de {name}
      </Link>
      .
    </>
  ),

  /* ---------------------------------- more ---------------------------------- */
  moreTitle: "Más comparaciones de exchanges",
  headToHeadTitle: (name) => `${name} cara a cara`,
  headToHeadIntro: "¿Ya tienes una alternativa en tu lista? Las páginas de cada par profundizan en comisiones, productos, países y ofertas de referidos:",
  otherAlternativesTitle: "Alternativas a los demás exchanges",
  otherAlternativesIntro: "La misma comparación desde el punto de vista de cada uno de los demás exchanges:",
  referralLink: (name, code) => `Código de referido de ${name} ${code}`,
  allComparisons: "Todas las comparaciones de exchanges",

  /* ------------------------------ notice and CTA ----------------------------- */
  risk: (disclosureHref) => (
    <>
      <strong>Advertencia de riesgo:</strong> Los derivados de criptomonedas son instrumentos complejos. El apalancamiento multiplica las ganancias y
      las pérdidas, y puedes perder todo tu margen en cuestión de minutos. Esta página es solo informativa y no constituye asesoramiento financiero.
      Podemos recibir una comisión si te registras a través de nuestros enlaces – consulta nuestra{" "}
      <Link href={disclosureHref}>divulgación de afiliación</Link>. Eso no cambia las cifras: son las de los propios exchanges.
    </>
  ),
  ctaTitle: (name) => `¿Has encontrado tu alternativa a ${name}?`,
  ctaText: "Regístrate con un código de referido verificado – una sola cuenta para spot y futuros, sin coste adicional.",
  ctaButton: "Ver todos los códigos de referido",
};
