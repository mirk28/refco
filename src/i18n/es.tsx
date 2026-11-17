import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";

/**
 * Interface texts in Spanish. Same keys as `en.tsx`.
 *
 * Wording: "código de referido" for referral code, "exchange" for the platform, "comisiones" for fees,
 * informal address ("tú"). Numbers keep the notation of the exchanges' own pages (0.02%, 10,000 USDT).
 * Field and button names of the exchanges stay in English, because only the English interface was checked.
 */

const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A, B y C" – "e" in front of a word that starts with the sound "i". */
const list = (items: string[]) => {
  if (items.length <= 1) return items.join("");
  const last = items[items.length - 1];
  const and = /^h?i(?![aeou])/i.test(last) ? "e" : "y";
  return `${items.slice(0, -1).join(", ")} ${and} ${last}`;
};
const lcFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** Thousands of millions of US dollars: 12.3 → "$12,300 M" ("M" = millones). */
const millions = (bn: number) => `$${Math.round(bn * 1000).toLocaleString("en-US")} M`;

export const es: Dictionary = {
  list,

  format: {
    billions: (n) => millions(Number(n.toFixed(n >= 10 ? 1 : 2))),
    billionsExact: (n) => millions(n),
    billionsFloor: (n) => `${millions(Math.floor(n))}+`,
  },

  meta: {
    siteTitle: `${site.name} – Códigos de referido verificados para exchanges de criptomonedas`,
    siteDescription:
      "Códigos de referido verificados para Binance, OKX, Bybit, Bitget, Gate, KuCoin y MEXC – desbloquea bonos para nuevos usuarios y reembolsos de comisiones en spot y futuros con un solo enlace de registro. Comisiones, datos y ventajas e inconvenientes sin adornos.",
  },

  layout: {
    skip: "Saltar al contenido",
    mainNav: "Principal",
    nav: [
      { href: "/es#exchanges", label: "Exchanges" },
      { href: "/es#benefits", label: "Ventajas" },
      { href: "/es#compare", label: "Comparar" },
      { href: "/es#how-it-works", label: "Cómo funciona" },
    ],
    getCodes: "Ver códigos",
    homeLabel: `${site.name} – ${site.domain}, inicio`,
    language: "Idioma",
    footerAbout:
      "Códigos de referido verificados para los mayores exchanges de criptomonedas – bonos de bienvenida y reembolsos de comisiones para spot y futuros. Datos claros de fuentes oficiales.",
    referralCodes: "Códigos de referido",
    referralCodeOf: (name) => `Código de referido de ${name}`,
    alternatives: "Alternativas",
    alternativesOf: (name) => `Alternativas a ${name}`,
    guides: "Guías",
    comparisons: "Comparaciones de exchanges",
    howCodesWork: "Cómo funcionan los códigos de referido",
    faq: "Preguntas frecuentes",
    about: "Quiénes somos y metodología",
    legal: "Legal",
    imprint: "Aviso legal",
    privacy: "Política de privacidad",
    disclosure: "Divulgación de afiliación",
    cookieSettings: "Configuración de cookies",
    risk: (
      <>
        <strong>Advertencia de riesgo:</strong> Operar derivados de criptomonedas con apalancamiento es muy arriesgado y puede suponer la pérdida de todo
        tu depósito. Opera solo con dinero que puedas permitirte perder. Nada de lo publicado en este sitio web es asesoramiento financiero, de inversión
        ni fiscal.
      </>
    ),
    affiliate: (
      <>
        <strong>Divulgación de afiliación:</strong> Algunos enlaces son enlaces de referido. Si te registras a través de ellos, podemos recibir una
        comisión sin coste adicional para ti. Esto nunca afecta a los datos que publicamos. Los nombres y logotipos de los exchanges son marcas de sus
        respectivos titulares; {site.name} no está afiliado a ellos ni cuenta con su respaldo.
      </>
    ),
  },

  consent: {
    label: "Consentimiento de analítica",
    text: (privacyHref) => (
      <>
        <strong>Analítica – tú decides.</strong> Nos gustaría usar Google Analytics para ver qué páginas se leen. Instala cookies y envía datos de uso a
        Google, y solo se activa si lo permites. En ningún caso hay cookies publicitarias. Detalles:{" "}
        <Link href={privacyHref}>política de privacidad</Link>.
      </>
    ),
    decline: "Rechazar",
    allow: "Permitir analítica",
  },

  notFound: {
    title: "Esta página no existe",
    text: "Puede que el código de referido que buscas haya cambiado de sitio. Prueba con uno de estos:",
    back: "Volver al inicio",
  },

  og: {
    footer: ["Enlaces verificados", "Comisiones y datos", "Fuentes oficiales"],
    homeAlt: "RefCo – códigos de referido verificados para exchanges de criptomonedas",
    homeKicker: (monthYear) => `Actualizado en ${monthYear}`,
    homeTitle: "Códigos de referido para exchanges cripto, verificados.",
    exchangeAlt: "Código de referido, alternativas y comparaciones de exchanges – RefCo",
    exchangeKicker: (monthYear) => `Comprobado en ${monthYear}`,
    exchangeTitle: (e) => `Código de referido de ${e.name}`,
    exchangeSubtitle: (e) => `${benefit(e)} · Spot y futuros con un solo enlace`,
    versusBadge: "Cara a cara",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `Comisiones de futuros ${feesA} vs ${feesB} · apalancamiento ${leverageA}x vs ${leverageB}x · KYC, países, bono`,
  },

  blocks: {
    signUpOn: (name) => `Regístrate en ${name}`,
    signUp: "Registrarse",
    details: "Detalles",
    breadcrumb: "Ruta de navegación",
    copy: "Copiar",
    copied: "Copiado ✓",
    spotMakerTaker: "Spot maker / taker",
    futuresMakerTaker: "Futuros maker / taker",
    maxLeverage: "Apalancamiento máx.",
    since: "Desde",
    tableCaption:
      "Comparación de exchanges de criptomonedas por oferta para nuevos usuarios, comisiones de spot y futuros, apalancamiento y datos de mercado",
    exchange: "Exchange",
    newUserOffer: "Oferta para nuevos usuarios",
    futuresFees: "Comisiones de futuros (maker / taker)",
    spotFees: "Comisiones spot",
    openInterest: "Interés abierto",
    markets: "Mercados",
    action: "Acción",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) => `Códigos de referido para exchanges de criptomonedas (${monthYear}): bonos en spot y futuros`,
    description: (monthYear) =>
      `Códigos de referido verificados para Binance, OKX, Bybit, Bitget, Gate, KuCoin y MEXC. Desbloquea bonos para nuevos usuarios y reembolsos de comisiones en spot y futuros con un solo enlace – actualizado en ${monthYear}.`,
    listName: "Códigos de referido de exchanges de criptomonedas para spot y futuros",
    updated: (monthYear) => `Actualizado en ${monthYear}`,
    h1: (
      <>
        Códigos de referido para exchanges de criptomonedas, <span className="hl">verificados</span> y explicados.
      </>
    ),
    lead: (
      <>
        Desbloquea bonos de bienvenida y reembolsos de comisiones en los mayores exchanges de criptomonedas del mundo – un solo referido para spot{" "}
        <em>y</em> futuros. Además, los datos que necesitas para elegir: comisiones, apalancamiento, licencias y ventajas e inconvenientes sin adornos.
      </>
    ),
    browse: "Ver códigos de referido",
    seeBenefits: "Ver tus ventajas",
    trust: (date) => [`Comprobado el ${date}`, "Solo enlaces oficiales", "Analítica solo con tu consentimiento"],
    featured: "Exchanges destacados",
    ticketName: (name) => `Código de referido de ${name}`,
    ticketTag: "SPOT + FUTUROS",
    stats: ["Principales exchanges de spot y futuros", "Interés abierto conjunto", "Mercados de derivados cubiertos", "Comisión maker más baja (MEXC)"],
    marketData: (date) => `Datos de mercado: ranking de derivados de CoinMarketCap, instantánea del ${date}.`,

    benefitsEyebrow: "Tus ventajas",
    benefitsTitle: `¿Por qué registrarte con un código de referido de ${site.name}?`,
    benefitsLead: "El mismo exchange, las mismas comisiones – pero con las ventajas para nuevos usuarios que te perderías registrándote directamente.",
    benefits: [
      {
        title: "Bonos de bienvenida",
        text: "Desbloquea la oferta del exchange para nuevos usuarios: cupones de reembolso de comisiones, bonos de futuros y recompensas por tareas que pueden sumar miles de USDT.",
      },
      {
        title: "Comisiones de trading más bajas",
        text: "Donde el exchange lo permite, parte de la comisión de referido vuelve a ti como reembolso en cada operación.",
      },
      {
        title: "Spot y futuros con un solo enlace",
        text: "El referido queda vinculado a tu cuenta: cubre spot, futuros, margen y opciones. No hace falta un segundo código.",
      },
      { title: "Sin coste adicional", text: "Un referido nunca hace que pagues comisiones más altas. Solo ganas – el programa lo paga el exchange." },
      {
        title: "Páginas de registro oficiales",
        text: "Cada enlace abre el sitio web del propio exchange. Sin intermediarios y sin compartir datos con nosotros.",
      },
      {
        title: "Mejor aplicarlo al registrarte",
        text: "Algunos exchanges permiten añadir un código durante 30 días, otros nunca. Usa el enlace antes de crear tu cuenta y estarás cubierto en todos.",
      },
    ],
    offersCaption: "Ofertas para nuevos usuarios por exchange",
    offersHead: ["Exchange", "Oferta para nuevos usuarios con referido", "Un enlace cubre"],
    claim: "Conseguir",
    offersNote: (date) =>
      `Ofertas comprobadas el ${date}. Las recompensas de bienvenida dependen de tareas, exigen verificación de identidad y varían según la región – las condiciones vigentes aparecen en la página de registro de cada exchange.`,

    exchangesEyebrow: "Códigos de referido",
    exchangesTitle: "Elige tu exchange",
    exchangesLead:
      "Cada página explica el referido, las comisiones y para quién es mejor el exchange – para que te registres una sola vez, en la plataforma adecuada.",
    sideBySide: "Comparativa",
    notSure: "¿No sabes cuál elegir?",
    notSureText: (count) => `Compara las comisiones, el apalancamiento y el interés abierto de los ${count} exchanges en una sola tabla.`,
    compareExchanges: "Comparar exchanges",

    compareTitle: "Exchanges de criptomonedas comparados: spot y futuros",
    compareLead:
      "Ofertas para nuevos usuarios, comisiones estándar (no VIP) de spot y futuros, apalancamiento y profundidad de mercado de un vistazo.",
    compareNote: (reviewed, market) =>
      `Comisiones: nivel estándar publicado por cada exchange, comprobado el ${reviewed}. Interés abierto y mercados: CoinMarketCap, ${market}. Las comisiones cambian – confírmalas en el exchange antes de operar.`,
    versusStrip: {
      title: "Compara dos exchanges cara a cara",
      text: (pairs, hubHref) => (
        <>
          {pairs} comparaciones por pares con comisiones, apalancamiento, productos, países, KYC y ofertas de referidos lado a lado –{" "}
          <Link href={hubHref}>todas las comparaciones de exchanges</Link>.
        </>
      ),
    },
    alternativesStrip: {
      title: "¿Buscas una alternativa a tu exchange?",
      text: (others) =>
        `Cada comparación mide un exchange frente a los otros ${others}: comisiones, apalancamiento, productos, verificación de identidad y los países que acepta.`,
    },

    picksEyebrow: "Respuesta rápida",
    picksTitle: "¿Qué exchange es mejor para ti?",
    picks: [
      { label: "Mayor liquidez", slug: "binance", why: "El mayor interés abierto y volumen de futuros del mundo." },
      { label: "Comisiones bajas y opciones", slug: "okx", why: "0.08% / 0.10% en spot, 0.03% en opciones y prueba de reservas mensual." },
      { label: "Futuros activos desde el móvil", slug: "bybit", why: "Motor rápido y una de las mejores apps de trading." },
      { label: "Copy trading", slug: "bitget", why: "Replica automáticamente a traders de futuros con experiencia." },
      { label: "Más altcoins", slug: "gate", why: "5,400+ activos y futuros sobre tokens de nicho." },
      { label: "Bots de trading", slug: "kucoin", why: "Bots de trading gratuitos para spot y futuros." },
      { label: "Comisiones más bajas", slug: "mexc", why: "0% de comisión maker en spot y en la mayoría de los contratos de futuros." },
    ],

    howEyebrow: "Cómo funciona",
    howTitle: "Usa un código de referido en tres pasos",
    steps: [
      {
        title: "Elige un exchange",
        text: "Compara comisiones, apalancamiento y funciones más arriba y abre la página del exchange que encaje con tu forma de operar.",
      },
      {
        title: "Regístrate con nuestro enlace",
        text: "El referido se aplica automáticamente. Regístrate con tu correo electrónico o tu teléfono antes de crear una cuenta por cualquier otra vía.",
      },
      {
        title: "Verifica tu identidad y consigue las recompensas",
        text: "Completa la verificación de identidad (KYC), protege tu cuenta con 2FA y revisa las recompensas de bienvenida que aparecen en tu panel.",
      },
    ],

    trustEyebrow: `Por qué ${site.name}`,
    trustTitle: "Pensado para la confianza, no para los clics",
    trustCards: [
      {
        title: "Ofertas verificadas",
        text: "Comprobamos la oferta para nuevos usuarios de cada exchange y solo mostramos lo que de verdad puedes conseguir.",
      },
      {
        title: "Datos actuales y con fecha",
        text: "Comisiones, apalancamiento y licencias se revisan con regularidad, y cada página muestra su fecha de revisión.",
      },
      { title: "La privacidad, primero", text: "Sin píxeles publicitarios ni cookies de publicidad. La analítica solo se activa si la permites." },
      { title: "Rápido y claro", text: "Páginas ligeras que cargan al instante en cualquier teléfono – primero la respuesta, después los detalles." },
      {
        title: "Ventajas e inconvenientes sin adornos",
        text: "Contamos también los puntos débiles, los incidentes y las restricciones regionales – no solo el marketing.",
      },
      { title: "El riesgo, primero", text: "El apalancamiento puede acabar con un depósito en muy poco tiempo. Lo decimos claramente en cada página." },
    ],

    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Códigos de referido – preguntas frecuentes",
    faqs: (reviewed) => [
      {
        q: "¿Qué es un código de referido de un exchange de criptomonedas?",
        a: "Un código de referido (también llamado código de invitación o referral ID) es un identificador corto que vincula una cuenta nueva en un exchange con la persona o el sitio web que lo recomendó. Los exchanges lo usan para recompensar a ambas partes: los nuevos usuarios suelen recibir recompensas de bienvenida o un descuento en las comisiones de trading, y quien refiere gana una parte de las comisiones.",
      },
      {
        q: "¿Qué ventajas tiene usar un código de referido?",
        a: "Los nuevos usuarios que se registran con un referido acceden a la oferta de bienvenida del exchange – por ejemplo, hasta 250 USDT en recompensas de referido en Bybit o hasta 10,000 USDT en recompensas para nuevos usuarios en MEXC – y, cuando quien refiere comparte su comisión, recuperan parte de sus comisiones de trading, como el 10% durante un año en Gate. No cuesta nada extra.",
      },
      {
        q: "¿Un mismo código de referido sirve para spot y para futuros?",
        a: "Sí. En Binance, OKX, Bybit, Bitget, Gate, KuCoin y MEXC el referido queda vinculado a tu cuenta, no a un solo producto. Un único registro cubre el trading de spot y de futuros – además de margen, opciones o copy trading donde el exchange los ofrezca.",
      },
      {
        q: "¿Pago más si me registro con un código de referido?",
        a: "No. Registrarte a través de un enlace de referido nunca aumenta tus comisiones. Según el exchange y tu región, incluso puedes recibir un descuento en comisiones o un bono de bienvenida que no obtendrías sin él.",
      },
      {
        q: "¿Puedo añadir un código de referido después de crear mi cuenta?",
        a: "Depende del exchange. Binance permite vincular un código en los 30 días siguientes al registro si no has depositado ni operado, y MEXC te deja vincular por tu cuenta a quien te refirió en los 30 días posteriores al registro. KuCoin tiene una solicitud “Link Referrer” en su centro de ayuda. Bybit, OKX y Bitget solo aceptan el código durante el registro, y Gate no documenta ninguna forma de añadirlo después. Lo seguro es usar el enlace antes de crear tu cuenta.",
      },
      {
        q: "¿Qué exchange de criptomonedas tiene las comisiones de futuros más bajas?",
        a: `En nuestra última revisión (${reviewed}), MEXC tenía las comisiones estándar de futuros más bajas, con 0% maker y 0.02% taker en BTCUSDT. Binance, OKX y Gate cobran 0.02% maker / 0.05% taker en el nivel estándar, Bybit 0.02% / 0.055%, y Bitget y KuCoin 0.02% / 0.06%.`,
      },
      {
        q: "¿Qué exchange es mejor para derivados de criptomonedas?",
        a: "Depende de lo que operes. Binance ofrece la mayor liquidez, OKX combina comisiones bajas con opciones, Bybit está pensado para operar perpetuos con rapidez, Bitget para el copy trading, Gate para futuros de altcoins, KuCoin para bots y MEXC para las comisiones más bajas.",
      },
      {
        q: "¿Están disponibles estos exchanges en Estados Unidos?",
        a: "En su mayoría, no. Binance, Bybit, Bitget, Gate, KuCoin y MEXC incluyen a Estados Unidos como país restringido o prohibido, y OKX restringe determinadas jurisdicciones estadounidenses. La disponibilidad también varía en el Reino Unido, Canadá y la UE – la página de cada exchange enumera los países restringidos según sus propios términos.",
      },
      {
        q: "¿Con qué frecuencia se actualiza esta información?",
        a: `Revisamos con regularidad las comisiones, el apalancamiento, las licencias y los datos de mercado. Cada página muestra la fecha de su última revisión; los datos actuales se comprobaron el ${reviewed}.`,
      },
    ],
    countryFaq: {
      country: "es",
      // The answer below states these statuses in words. The home page compares them with the researched
      // data (src/data/alternatives/) and stops the build if one has changed, so the text gets rewritten.
      expected: { binance: "open", okx: "regional", bybit: "regional", bitget: "restricted", gate: "regional", kucoin: "regional", mexc: "partial" },
      faq: (reviewed) => ({
        q: "¿Están disponibles estos exchanges en España?",
        a: `Según las páginas de cada exchange, comprobadas el ${reviewed}: Binance no incluye a España entre sus países restringidos. OKX, Bybit, Gate y KuCoin atienden a los residentes en España a través de sus plataformas europeas (OKX Europe, Bybit EU, Gate EU y KuCoin EU), con una oferta de productos más limitada que la del sitio global. Bitget nombra a España como país no admitido en su página de verificación. MEXC no tiene a España en su lista de países prohibidos, pero no cuenta con autorización MiCA e indica que no presta servicio en la UE ni en el EEE. Para otros países, la página de cada exchange enumera las restricciones según sus propios términos.`,
      }),
    },

    ctaTitle: "Consigue tu bono de bienvenida",
    ctaText: "Elige un exchange, regístrate con un referido verificado y opera spot y futuros con una sola cuenta.",
    ctaButton: "Ver todos los códigos de referido",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    title: (e, shortMonthYear) => `Código de referido de ${e.name}: ${e.referralCode} (${shortMonthYear}) – ${benefit(e)}`,
    description: (e, monthYear) =>
      `Código de referido de ${e.name}: ${e.referralCode}. ${benefit(e)} – dónde introducirlo, pasos de registro, KYC y comisiones, comprobado en ${monthYear}.`,
    keywords: (e) => [
      `código de referido ${e.name}`,
      `código de referido de ${e.name} ${e.referralCode}`,
      `código de invitación ${e.name}`,
      `enlace de referido ${e.name}`,
      `${e.name} ${e.referral.codeName.toLowerCase()}`,
      `bono de bienvenida ${e.name}`,
      `cómo registrarse en ${e.name}`,
      `KYC ${e.name}`,
      `comisiones de futuros ${e.name}`,
    ],
    toc: {
      "code-facts": "El código en resumen",
      benefits: "Tus ventajas",
      "use-code": "Cómo usar el código",
      "how-to": "Cómo registrarse",
      verification: "Verificación (KYC)",
      "key-facts": "Datos clave",
      fees: "Comisiones",
      about: "Sobre el exchange",
      "pros-cons": "Ventajas e inconvenientes",
      "best-for": "Para quién es",
      safety: "Seguridad y disponibilidad",
      faq: "Preguntas frecuentes",
      sources: "Fuentes",
      alternatives: "Alternativas",
    },
    onThisPage: "En esta página",
    crumbHome: "Inicio",
    crumbCodes: "Códigos de referido",
    crumbPage: (e) => `Código de referido de ${e.name}`,

    /* JSON-LD */
    offerName: (e) => `Código de referido de ${e.name} ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}. Un solo referido cubre ${e.referralCovers.join(", ")}.`,
    offerCategory: "Registro en un exchange de criptomonedas",
    howToName: (e) => `Cómo registrarse en ${e.name} con el código de referido ${e.referralCode}`,
    howToDescription: (e) =>
      `Pasos de registro en ${e.name} tal como los documenta el exchange, incluido dónde se introduce el código de referido ${e.referralCode}.`,

    /* Hero */
    updated: (date) => `Comprobado y actualizado el ${date}`,
    h1: (e) => `Código de referido de ${e.name}: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – y un solo referido para {list(e.referralCovers)}. Aquí tienes lo que recibes, cuánto cuesta operar y si {e.name}{" "}
        es el exchange adecuado para ti.
      </>
    ),
    quickAnswer: "Respuesta rápida",
    highlights: "Datos destacados",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futuros ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `Apalancamiento ${lcFirst(shortLeverage(e))}`,
      `${e.market.markets} mercados de derivados`,
      `Desde ${e.founded}`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `Tu registro en ${e.name}`,
    appliedByLink: "El referido se aplica automáticamente a través de este enlace.",
    goesToOfficial: (domain) => `Lleva directamente al sitio web oficial ${domain}.`,
    codeLabel: "Código de referido",
    noCodeToType: "No hay código que escribir – se aplica con el enlace",
    officialSite: (domain) => `Sitio oficial: ${domain}`,
    yourBenefits: "Tus ventajas",
    freeNeverRaises: "Gratis – usar un referido nunca aumenta tus comisiones",
    qrLabel: (e) => `Código QR: regístrate en la app de ${e.name} con el referido ${e.referralCode}`,
    preferApp: "¿Prefieres la app?",
    scan: (e) => (
      <>
        Escanéalo con la cámara de tu teléfono para abrir {e.name}
        {e.referralCode ? (
          <>
            {" "}
            – referido <strong>{e.referralCode}</strong> incluido
          </>
        ) : null}
        . Funciona en iOS y Android.
      </>
    ),
    riskLine: (e, links) => (
      <>
        El trading con apalancamiento es de alto riesgo. No está disponible en todos los países – consulta la <a href="#safety">disponibilidad</a> o las{" "}
        <Link href={links.alternatives}>alternativas a {e.name}</Link>.
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `El código de referido de ${e.name} ${e.referralCode} en resumen`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        El código de referido de {e.name} para {monthYear} es <strong>{e.referralCode}</strong>. La tabla resume qué hace, dónde se introduce y qué exige{" "}
        {e.name} a una cuenta nueva – cada línea comprobada en las propias páginas de {e.name} el {date}.
      </>
    ),
    codeFactsCaption: (e) => `Código de referido de ${e.name} ${e.referralCode}: datos clave`,
    codeFacts: (e, date) => [
      [`Código de referido de ${e.name}`, <strong key="code">{e.referralCode}</strong>],
      [`Cómo lo llama ${e.name}`, e.referral.codeName],
      ["Ventaja para nuevos usuarios", benefit(e)],
      ["Dónde se introduce", e.referral.whereShort],
      ["¿Se puede añadir después del registro?", e.referral.afterSignupShort],
      ["Válido para", e.referralCovers.join(", ")],
      ["Verificación de identidad (KYC)", e.signup.kycShort],
      ["Coste", "Gratis – no aumenta tus comisiones"],
      ["Última comprobación", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `Tus ventajas con el referido de ${e.name}`,
    benefitsIntro: (e) => (
      <>
        Registrarte con el código de referido de {e.name} <strong>{e.referralCode}</strong> no te cuesta nada extra. Esto es lo que {e.name} ofrece
        actualmente a las cuentas nuevas. El mismo código sirve para <strong>{list(e.referralCovers)}</strong> – no necesitas uno distinto para spot y
        futuros.
      </>
    ),
    offerChecked: (date) => `Oferta para nuevos usuarios · comprobada el ${date}`,
    appliedWhenRegistering: "se aplica al registrarte a través de este referido",
    noExtraCost: "Sin coste adicional – tus comisiones de trading nunca son más altas por usar un referido",
    oneReferralCovers: "Un solo referido cubre:",
    claimOffer: (e) => `Consigue tu oferta de bienvenida de ${e.name}`,
    tasksTitle: (e) => `Oferta de bienvenida de ${e.name}: tareas y recompensas`,
    tasksCaption: (e) => `Tareas para nuevos usuarios de ${e.name} y la recompensa de cada una`,
    task: "Tarea",
    reward: "Recompensa",
    tasksNote: (e, date) =>
      `Según lo publicado por ${e.name} el ${date}. Las ofertas varían según el país y cambian con frecuencia – las condiciones que aparecen en tu cuenta tras el registro son las que valen.`,

    /* How to use the code */
    useCodeTitle: (e) => `Cómo usar el código de referido de ${e.name} ${e.referralCode}`,
    whereToEnter: (e) => `Dónde introducir el código de referido de ${e.name}`,
    forgotCode: "¿Olvidaste el código? Añadirlo después del registro",
    asInvited: "Qué recibes como usuario invitado",
    interfaceNote: (e) => (
      <>
        Los nombres de campos y botones entre comillas son los de la interfaz en inglés de {e.name}, que es la que comprobamos; en la interfaz en español
        pueden llamarse de otra forma.
      </>
    ),

    /* Registration */
    howToTitle: (e) => `Cómo registrarse en ${e.name} paso a paso`,
    howToIntro: (e) => (
      <>
        {e.name} te permite crear una cuenta con {list(e.signup.methods)}. Estos son los pasos tal como los documenta {e.name}, con el momento en que
        entra en juego el código de referido <strong>{e.referralCode}</strong>.
      </>
    ),
    startRegistration: (e) => `Empieza tu registro en ${e.name}`,

    /* Verification */
    kycTitle: (e) => `Verificación de identidad (KYC) en ${e.name}`,
    verification: "Verificación",
    minAge: "Edad mínima",
    documents: "Documentos aceptados",

    /* Key facts */
    factsTitle: (e) => `${e.name} de un vistazo`,
    founded: "Año de fundación",
    headquarters: "Sede",
    futuresFees: "Comisiones de futuros (maker / taker)",
    spotFees: "Comisiones spot (maker / taker)",
    maxLeverage: "Apalancamiento máximo",
    assets: "Activos",
    openInterest: "Interés abierto",
    volume24h: "Volumen de derivados en 24 h",
    users: "Usuarios",
    regulation: "Regulación",
    factsNote: (date) =>
      `Interés abierto, volumen y número de mercados: ranking de derivados de CoinMarketCap, ${date}. Comisiones: nivel estándar en la fecha de revisión.`,

    /* Fees */
    feesTitle: (e) => `Las comisiones de ${e.name}, explicadas`,
    feesIntro: (e) =>
      `${e.name} usa un modelo maker/taker: las órdenes que añaden liquidez al libro de órdenes (órdenes límite) pagan la comisión maker, y las que retiran liquidez (órdenes a mercado) pagan la comisión taker. Las tarifas bajan a medida que aumentan tu volumen de 30 días o tus tenencias.`,
    market: "Mercado",
    maker: "Maker",
    taker: "Taker",
    futuresRow: "Futuros / perpetuos",
    spotRow: "Spot",
    feesNote: (e, date) => `Tarifas estándar (no VIP) publicadas por ${e.name}, comprobadas el ${date}.`,
    funding: "Las tasas de financiación de los contratos perpetuos se pagan entre traders, no al exchange.",
    liveSchedule: (e) => `Consulta la tabla de comisiones actual de ${e.name}`,
    feesCompare: (e, others, links) => (
      <>
        ¿Cómo quedan estas tarifas frente a las demás? Nuestra <Link href={`${links.alternatives}#fees`}>comparación de alternativas a {e.name}</Link> pone
        las comisiones de {e.name} junto a las de {list(others)}.
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `Sobre ${e.name}`,
    products: "Productos",
    prosConsTitle: (e) => `Ventajas e inconvenientes de ${e.name}`,
    pros: "Ventajas",
    cons: "Inconvenientes",
    bestForTitle: (e) => `¿Para quién es mejor ${e.name}?`,
    openAccount: (e) => `Abre tu cuenta en ${e.name}`,
    notAMatch: (e, count, links, pairs) => (
      <>
        ¿No es lo que buscas? Mira <Link href={links.alternatives}>las {count} mejores alternativas a {e.name}</Link> y en qué destaca cada una, o compara{" "}
        {e.name} cara a cara: <Link href={pairs[0].href}>{pairs[0].label}</Link> y <Link href={pairs[1].href}>{pairs[1].label}</Link>.
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `¿Es seguro ${e.name}?`,
    availability: "Disponibilidad:",
    closedWhereYouLive: (e, links) => (
      <>
        ¿{e.name} no está disponible donde vives? La{" "}
        <Link href={`${links.alternatives}#countries`}>tabla de países de nuestra página de alternativas a {e.name}</Link> muestra cuáles de los otros
        exchanges aceptan tu país.
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `Código de referido y registro en ${e.name} – preguntas frecuentes`,
    faqIntro: (e, count) =>
      `${count} preguntas sobre el código de referido de ${e.name} ${e.referralCode}, la creación y verificación de la cuenta, la oferta de bienvenida y las comisiones.`,

    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "Fuentes: de dónde salen estos datos",
    sourcesIntro: (e, date) =>
      `Todo lo que esta página dice sobre el código de referido, el registro, la verificación, la oferta de bienvenida y las comisiones se leyó en el propio sitio web y centro de ayuda de ${e.name} el ${date}. Los exchanges cambian ofertas y comisiones sin previo aviso y muestran condiciones distintas según el país, así que las páginas siguientes tienen la última palabra. Los enlaces llevan a las páginas oficiales en inglés.`,

    /* Alternatives */
    alternativesTitle: (e) => `Alternativas a ${e.name}`,
    alternativesIntro: (e, count, links) => (
      <>
        ¿No tienes claro que {e.name} sea lo que buscas? Estas son las alternativas más cercanas, cada una con su propio registro con referido. La{" "}
        <Link href={links.alternatives}>comparación completa de alternativas a {e.name}</Link> mide las {count} frente a {e.name} en comisiones,
        apalancamiento, productos, verificación y disponibilidad por país.
      </>
    ),
    headToHeadTitle: (e) => `${e.name} cara a cara`,
    headToHeadIntro: (e) =>
      `¿Dudas entre ${e.name} y otro exchange? Cada par tiene su propia comparación de comisiones, apalancamiento, productos, países y ofertas de referidos:`,
    compareAll: (e, count) => `Compara las ${count} alternativas a ${e.name}`,
    allComparisons: "Todas las comparaciones de exchanges →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>Advertencia de riesgo:</strong> Los derivados de criptomonedas son instrumentos complejos. El apalancamiento multiplica las ganancias y
        las pérdidas, y puedes perder todo tu margen en cuestión de minutos. Esta página es solo informativa y no constituye asesoramiento financiero.
        Podemos recibir una comisión si te registras a través de nuestros enlaces – consulta nuestra{" "}
        <Link href={disclosureHref}>divulgación de afiliación</Link>.
      </>
    ),
    joinTitle: (e) => `Únete a ${e.name} en 3 minutos`,
    joinText: (e) => `${benefit(e)}. Un solo referido para spot y futuros.`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `Código de referido de ${name}`,
      signup: (name) => `Registro y verificación en ${name}`,
      bonus: (name) => `Bono de bienvenida y recompensas de ${name}`,
      fees: (name) => `Comisiones y trading en ${name}`,
      safety: () => "Seguridad y disponibilidad",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `¿Cuál es el código de referido de ${e.name}?`,
          a: `El código de referido de ${e.name} es ${e.referralCode}. ${r.apply} El propio ${e.name} lo llama ${r.codeName}.`,
        },
        { topic: "referral", q: `¿Dónde introduzco el código de referido de ${e.name}?`, a: r.whereToEnter },
        { topic: "referral", q: `¿Puedo añadir el código de referido de ${e.name} después de registrarme?`, a: r.afterSignup },
        { topic: "referral", q: `¿Qué recibo con el código de referido de ${e.name} ${e.referralCode}?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `¿El código de referido de ${e.name} sirve tanto para spot como para futuros?`,
          a: `Sí. El referido queda vinculado a tu cuenta de ${e.name}, no a un solo producto, así que un único registro con ${e.referralCode} cubre ${list(e.referralCovers)}.`,
        },
        {
          topic: "referral",
          q: `¿Cuesta algo usar el código de referido de ${e.name}?`,
          a: `No. Introducir ${e.referralCode} es gratis y no aumenta tus comisiones de trading. ${e.name} paga su programa de referidos con sus propios ingresos por comisiones.`,
        },
        {
          topic: "signup",
          q: `¿Cómo me registro en ${e.name}?`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${st.title}`).join(" ")} Puedes registrarte con ${list(s.methods)}.`,
        },
        { topic: "signup", q: `¿Necesito verificación de identidad (KYC) en ${e.name}?`, a: s.kyc },
        { topic: "signup", q: `¿Qué documentos acepta ${e.name} para la verificación?`, a: s.documents },
        { topic: "signup", q: `¿Qué edad debo tener para abrir una cuenta en ${e.name}?`, a: s.minAge },
        {
          topic: "fees",
          q: `¿Cuáles son las comisiones de trading en ${e.name}?`,
          a: `En el nivel estándar, ${e.name} cobra ${e.spotFees.maker} maker / ${e.spotFees.taker} taker en spot y ${e.futuresFees.maker} maker / ${e.futuresFees.taker} taker en futuros perpetuos.${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `¿En qué países no está disponible ${e.name}?`, a: e.restricted },
      ];
    },
  },
};
