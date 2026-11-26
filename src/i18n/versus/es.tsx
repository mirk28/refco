/**
 * The head-to-head pages ("/es/<a>-vs-<b>") and the comparison hub ("/es/comparar") in Spanish.
 * Same keys as `./en.tsx`, phrased in Spanish grammar.
 *
 * Wording as in `../es.tsx` and `../compare/es.ts`: "exchange" (masculine), "comisiones", "código de referido",
 * informal "tú". Numbers keep the notation of the exchanges' own pages (0.02%, 150x). "vs" stays "vs".
 */
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";
import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import { exchanges } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, leverageOf, verb } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "es";
const ct = compareText(locale);
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const { advantages, feeSentence, names } = ct;
const featureList = ct.features;
const countryList = ct.countries;
type Country = (typeof countryList)[number];

/* ---------------------------------- helpers --------------------------------- */

/** Lower-cases the first letter, unless the text starts with a name ("Gate no lo documenta") or an abbreviation ("KYC …"). */
const properNames = new Set(exchanges.map((e) => e.name));
const lcFirst = (s: string) => {
  const first = s.split(/[\s–:,;.]/)[0];
  return properNames.has(first) || /^[A-ZÁÉÍÓÚÑ0-9]{2,}/.test(first) ? s : s.charAt(0).toLowerCase() + s.slice(1);
};
/** "320M+ usuarios (según Binance)" → "320M+ usuarios"; "390 monedas, 509 pares spot (API de Bybit)" → without the bracket. */
const withoutSource = (s: string) => s.replace(/\s*\((según [^)]*|API de [^)]*)\)/, "");
const lowerUpTo = (s: string) => s.replace(/^Hasta/, "hasta");
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
const tied = (count: number) => (count === 1 ? "queda en empate" : "quedan en empate");

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `${e.name} va por delante en ${joinList(rows.map((r) => r.topic))}` : `${e.name} no va por delante en ninguno`;
  return `Ni ${a.name} ni ${b.name} es mejor en todos los puntos. De los ${s.measurable} puntos medibles de esta comparación, ${a.name} va por delante en ${s.a.length} y ${b.name} en ${s.b.length}${s.tie.length ? `, y ${s.tie.length} ${tied(s.tie.length)}` : ""}. ${lead(a, s.a)}. ${lead(b, s.b)}. Elige ${a.name} si ${lcFirst(altInfo(a).chooseIf[0])}. Elige ${b.name} si ${lcFirst(altInfo(b).chooseIf[0])}.`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb)
    return `${joinList([a.name, b.name])} tienen el mismo apalancamiento máximo: ${a.name} ${lowerUpTo(a.maxLeverage)}, ${b.name} ${lowerUpTo(b.maxLeverage)}.`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `${hi.name} ofrece el mayor apalancamiento máximo: ${lowerUpTo(hi.maxLeverage)}. ${lo.name} llega ${lowerUpTo(lo.maxLeverage)}.`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `En el ranking de derivados de CoinMarketCap (${prettyDate(site.marketDataDate)}), ${a.name} tenía ${formatBn(a.market.openInterestBn)} de interés abierto en ${a.market.markets} mercados y ${b.name} ${formatBn(b.market.openInterestBn)} en ${b.market.markets}. ${deeper.name} tiene el mercado más profundo, lo que suele traducirse en spreads más ajustados en órdenes grandes.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${a.name} ofrece ${joinList(notOffered.map((f) => f.noun))}, que ${b.name} no ofrece.` : "",
    notFound.length ? `${a.name} ofrece ${joinList(notFound.map((f) => f.noun))}; en el sitio de ${b.name} no encontramos ningún producto así.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${e.name} está cerrado para ${c.residents}${extra}`;
  if (status === "regional") return `${e.name} atiende a ${c.residents} a través de una plataforma regional${extra}`;
  if (status === "partial") return `${e.name} aplica restricciones parciales en ${c.name}${extra}`;
  return `${e.name} no incluye ${c.name} entre los países restringidos`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("es").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. Las listas de países cambian, y que un país no figure en ellas no garantiza que allí se ofrezcan todos los productos – deciden los términos del propio exchange.`;

/* ------------------------------------ FAQ ------------------------------------ */

/** All questions a head-to-head page answers, grouped for display (see `./en.tsx`). */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) =>
    has(a, key) && has(b, key) ? "ambos" : has(a, key) ? `solo ${a.name}` : has(b, key) ? `solo ${b.name}` : "no encontrado en ninguno de los dos sitios";
  const noTokenDiscount = "No publica ningún descuento de este tipo.";
  const noFund = "No nombra ningún fondo de protección.";
  const noMica = "no nombra ninguna entidad autorizada bajo MiCA en sus propias páginas";

  const verdict: Faq[] = [
    { q: `¿Cuál es mejor, ${a.name} o ${b.name}?`, a: versusAnswer(a, b, s) },
    {
      q: `¿Cuál es la principal diferencia entre ${a.name} y ${b.name}?`,
      a: `${ia.pick}. ${ib.pick}.${aheadA.length ? ` Las ventajas medibles más claras de ${a.name}: ${aheadA.slice(0, 2).map(lcFirst).join("; ")}.` : ""}${aheadB.length ? ` Las de ${b.name}: ${aheadB.slice(0, 2).map(lcFirst).join("; ")}.` : ""}`,
    },
    {
      q: `¿Es ${a.name} más grande que ${b.name}?`,
      a: `En el ranking de derivados de CoinMarketCap (${marketDate}), ${a.name} tenía ${formatBn(a.market.openInterestBn)} de interés abierto y ${formatBn(a.market.volume24hBn)} de volumen en 24 horas; ${b.name}, ${formatBn(b.market.openInterestBn)} y ${formatBn(b.market.volume24hBn)}. Según sus propias cifras, ${a.name} tiene ${withoutSource(a.users)} y ${b.name} ${withoutSource(b.users)}.`,
    },
    {
      q: `¿Cuál es mejor para principiantes, ${a.name} o ${b.name}?`,
      a: `Para una primera cuenta importan tres cosas: una forma fácil de comprar criptomonedas, una forma de practicar y comisiones bajas. Compras con tarjeta o transferencia bancaria: ${state("fiat")}. Trading demo: ${state("demoTrading")}. Copy trading: ${state("copyTrading")}. ${feeSentence(a, b, "spot")} Verificación de identidad – ${a.name}: ${lcFirst(a.signup.kycShort)}; ${b.name}: ${lcFirst(b.signup.kycShort)}.`,
    },
    {
      q: `¿Cuál es mejor para operar futuros, ${a.name} o ${b.name}?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} Un apalancamiento alto aumenta mucho el riesgo de liquidación.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `¿Cuál tiene comisiones más bajas, ${a.name} o ${b.name}?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} Son las tarifas estándar (no VIP); los niveles VIP y los tokens de los exchanges las reducen aún más.`,
    },
    {
      q: `¿Dan ${a.name} y ${b.name} un descuento por pagar las comisiones con su propio token?`,
      a: `${a.name}: ${a.tokenDiscount || noTokenDiscount} ${b.name}: ${b.tokenDiscount || noTokenDiscount}`,
    },
    {
      q: `¿Cuál ofrece mayor apalancamiento, ${a.name} o ${b.name}?`,
      a: `${leverageSentence(a, b)} Un apalancamiento alto aumenta mucho el riesgo de liquidación.`,
    },
    {
      q: `¿Cuál lista más monedas, ${a.name} o ${b.name}?`,
      a: `Según sus propias cifras, ${a.name} lista ${withoutSource(a.assets)} y ${b.name} ${withoutSource(b.assets)}. Los exchanges cuentan de forma distinta – unos cuentan monedas, otros pares de trading –, así que las dos cifras no son directamente comparables.`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `¿Puedo usar ${a.name} o ${b.name} en ${c.name}?`, a: countryPairAnswer(a, b, c) })),
    {
      q: `¿Exigen KYC ${a.name} y ${b.name}?`,
      a: `Sí, ambos piden verificación de identidad a los nuevos usuarios. ${a.name}: ${lcFirst(a.signup.kycShort)}. ${b.name}: ${lcFirst(b.signup.kycShort)}. Ninguno de los dos es una opción para operar sin verificación.`,
    },
    {
      q: `¿Cuál es más seguro, ${a.name} o ${b.name}?`,
      a: `Ningún exchange centralizado está libre de riesgo, así que la comparación honesta es lo que publica cada uno. ${a.name}: ${a.regulation}. Prueba de reservas – ${ia.reserves}. ${ia.fund ? `${ia.fund}.` : noFund} ${b.name}: ${b.regulation}. Prueba de reservas – ${ib.reserves}. ${ib.fund ? `${ib.fund}.` : noFund} Mantén en cualquiera de los dos exchanges solo los fondos con los que operas activamente.`,
    },
    {
      q: `¿Están ${a.name} y ${b.name} regulados en la UE bajo MiCA?`,
      a: `${a.name}: ${ia.mica ? `sí – ${ia.mica}` : noMica}. ${b.name}: ${ib.mica ? `sí – ${ib.mica}` : noMica}. Una plataforma regional suele tener su propia gama de productos, comisiones y límites.`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `Nada entre los ${featureList.length} productos que comparamos: todos los productos que ${x.name} muestra en su sitio también los muestra ${y.name}.`;
  const products: Faq[] = [
    { q: `¿Qué ofrece ${a.name} que ${b.name} no ofrece?`, a: onlyA || nothing(a, b) },
    { q: `¿Qué ofrece ${b.name} que ${a.name} no ofrece?`, a: onlyB || nothing(b, a) },
    {
      q: `¿Ofrecen ${a.name} y ${b.name} copy trading, bots de trading, opciones y trading demo?`,
      a: `Copy trading: ${state("copyTrading")}. Bots de trading: ${state("tradingBots")}. Opciones: ${state("options")}. Trading demo: ${state("demoTrading")}.${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` Donde solo se nombra un exchange, no encontramos ninguna página del producto en el sitio del otro el ${prettyDate(site.lastReviewed)}.` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `¿Cuáles son los códigos de referido de ${a.name} y ${b.name}?`,
      a: `${a.name}: ${a.referralCode} – ${lcFirst(a.referral.whereShort)}. ${b.name}: ${b.referralCode} – ${lcFirst(b.referral.whereShort)}. Los dos códigos son gratuitos y no aumentan tus comisiones de trading.`,
    },
    {
      q: `¿Cuál tiene el mejor bono de registro, ${a.name} o ${b.name}?`,
      a: `${a.name}: ${lcFirst(offer(a))}. ${b.name}: ${lcFirst(offer(b))}. Las recompensas de bienvenida de ambos exchanges están sujetas a condiciones como la verificación de identidad, los depósitos o el volumen de trading y varían según el país, así que compara las condiciones, no la cifra destacada.`,
    },
    {
      q: `¿Puedo añadir un código de referido más tarde en ${a.name} o ${b.name}?`,
      a: `${a.name}: ${lcFirst(a.referral.afterSignupShort)}. ${b.name}: ${lcFirst(b.referral.afterSignupShort)}. Lo seguro en ambos es registrarse a través del enlace de referido.`,
    },
    {
      q: `¿Puedo usar ${a.name} y ${b.name} al mismo tiempo?`,
      a: "Sí. Son empresas distintas, así que una cuenta en uno no afecta a una cuenta en el otro, y muchos traders mantienen fondos en dos exchanges. Los niveles de comisiones, los referidos y las recompensas están vinculados a cada cuenta y no se trasladan.",
    },
    {
      q: `¿Cómo paso criptomonedas de ${a.name} a ${b.name}?`,
      a: `1. Abre tu cuenta de ${b.name} con el código de referido ${b.referralCode} y completa la verificación de identidad. 2. Cierra las posiciones abiertas de futuros y de margen en ${a.name} – las posiciones no se pueden trasladar de un exchange a otro. 3. En ${b.name}, copia la dirección de depósito de la moneda y la red que quieras usar. 4. Retira desde ${a.name} a esa dirección por la misma red y envía primero un importe pequeño de prueba: una transferencia por la red equivocada puede perderse. Los mismos pasos sirven en sentido contrario.`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} o ${b.name}: ¿cuál es mejor?`, faqs: verdict },
    { id: "fees", title: "Comisiones, apalancamiento y monedas", faqs: fees },
    { id: "countries", title: "Países, KYC y seguridad", faqs: countries },
    { id: "products", title: "Productos", faqs: products },
    { id: "referral", title: "Códigos de referido y cómo pasar de uno a otro", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi, oi, mica }: HubFacts) =>
  `${names(lowF)} ${verb(lowF, "tiene", "tienen")} las comisiones estándar de futuros más bajas (${feePair(lowF[0].futuresFees)} maker / taker), ${names(hi)} el mayor apalancamiento (${leverageOf(hi[0])}x) y ${names(oi)} el mercado de derivados más profundo (${formatBn(oi[0].market.openInterestBn)} de interés abierto). ${names(mica)} ${verb(mica, "nombra", "nombran")} una plataforma autorizada bajo MiCA para los residentes del EEE. Qué exchange te conviene más depende de la pareja entre la que estés decidiendo – elígela abajo.`;

function hubFaqs({ all, ranked, lowF, lowS, hi, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "¿Qué exchange de criptomonedas tiene las comisiones más bajas?",
      a: `En el nivel estándar, ${names(lowF)} ${verb(lowF, "tiene", "tienen")} las comisiones de futuros más bajas, con ${feePair(lowF[0].futuresFees)} (maker / taker), y ${names(lowS)} las comisiones spot más bajas, con ${feePair(lowS[0].spotFees)}. Los demás exchanges: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} ${feePair(e.futuresFees)} en futuros y ${feePair(e.spotFees)} en spot`)
        .join("; ")}. Los niveles VIP y los tokens de los exchanges reducen aún más estas tarifas.`,
    },
    {
      q: "¿Qué exchange de criptomonedas ofrece el mayor apalancamiento?",
      a: `${names(hi)}: ${lowerUpTo(hi[0].maxLeverage)}. Los demás: ${ranked
        .filter((e) => !hi.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join(", ")}. Un apalancamiento alto aumenta mucho el riesgo de liquidación.`,
    },
    {
      q: "¿Qué exchange de criptomonedas tiene el mercado de futuros más profundo?",
      a: `Por interés abierto en el ranking de derivados de CoinMarketCap (${marketDate}): ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join(", ")}. Un mercado más profundo suele traducirse en spreads más ajustados en órdenes grandes.`,
    },
    {
      q: "¿Qué exchanges tienen una plataforma autorizada bajo MiCA para el EEE?",
      a: `${joinList(mica.map((e) => `${e.name} (${altInfo(e).mica})`))}. ${names(noMica)} no ${verb(noMica, "nombra", "nombran")} ninguna entidad autorizada bajo MiCA en sus propias páginas. Una plataforma regional suele tener su propia gama de productos, comisiones y límites.`,
    },
    {
      q: "¿Qué exchanges me dejan añadir un código de referido después de registrarme?",
      a: `${later.map((e) => `${e.name}: ${lcFirst(e.referral.afterSignupShort)}`).join(". ")}. En ${names(signupOnly)} el código solo cuenta en el registro o no se documenta ninguna forma de añadirlo después – lo seguro en todos es registrarse a través del enlace de referido.`,
    },
    {
      q: "¿Cómo se hacen estas comparaciones?",
      a: `Cada cifra se lee en el sitio web o el centro de ayuda del propio exchange – tablas de comisiones, términos, listas de países restringidos, páginas de productos – y cada página enumera sus fuentes. El interés abierto, el volumen y el número de mercados de derivados proceden del ranking de derivados de CoinMarketCap. Qué exchange va por delante en un punto se deduce de esas cifras; no hay ninguna clasificación propia. La fecha de revisión actual es el ${date}.`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const es: VersusText = {
  rows: {
    futuresFees: { label: "Comisiones de futuros (maker / taker)", topic: "comisiones de futuros" },
    spotFees: { label: "Comisiones spot (maker / taker)", topic: "comisiones spot" },
    leverage: { label: "Apalancamiento máximo", topic: "apalancamiento máximo" },
    openInterest: { label: "Interés abierto en derivados", topic: "interés abierto" },
    volume: { label: "Volumen de derivados en 24 h", topic: "volumen de derivados en 24 horas" },
    markets: { label: "Mercados de derivados", topic: "número de mercados de derivados" },
    users: { label: "Usuarios (cifras propias)", topic: "número de usuarios" },
    assets: { label: "Activos listados (cifras propias)", topic: "" },
    founded: { label: "Año de fundación", topic: "" },
    products: { label: (compared) => `Productos encontrados (de ${compared} comparados)`, topic: "gama de productos" },
    countries: { label: (compared) => `Países cerrados (de ${compared} comparados)`, topic: "cobertura de países" },
    mica: { label: "Plataforma para el EEE autorizada bajo MiCA", topic: "autorización MiCA" },
    kyc: { label: "Verificación de identidad (KYC)", topic: "" },
    addLater: { label: "¿Añadir un código de referido después?", topic: "posibilidad de añadir un código de referido después" },
    offer: { label: "Oferta para nuevos usuarios", topic: "" },
    reserves: { label: "Prueba de reservas", topic: "" },
    fund: { label: "Fondo de protección", topic: "" },
  },
  countOf: (count, of) => `${count} de ${of}`,
  noMica: "No nombra ninguna",
  noFund: "No nombra ninguno",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    // Tres formulaciones, fijas por pareja.
    title: (a, b, shortMonthYear) =>
      fit(
        TITLE_MAX,
        ...[
          [`${a.name} vs ${b.name} (${shortMonthYear}): comisiones, apalancamiento y bono`, `${a.name} vs ${b.name} (${shortMonthYear}): comisiones y apalancamiento`],
          [`¿${a.name} o ${b.name}? Comisiones, apalancamiento y KYC`, `¿${a.name} o ${b.name}? Comisiones y KYC comparados`],
          [`${a.name} vs ${b.name}: ¿qué exchange es mejor en ${yearOf(shortMonthYear)}?`],
        ][variant(3, a.slug, b.slug)],
        `${a.name} vs ${b.name} (${shortMonthYear})`,
      ),
    description: (a, b, monthYear) =>
      fit(
        DESC_MAX,
        `${a.name} vs ${b.name}: comisiones de futuros ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, apalancamiento ${leverageOf(a)}x vs ${leverageOf(b)}x, productos, países, KYC y códigos de referido (${monthYear}).`,
        `${a.name} vs ${b.name}: comisiones de futuros ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, apalancamiento ${leverageOf(a)}x vs ${leverageOf(b)}x, países, KYC y códigos de referido (${monthYear}).`,
        `${a.name} vs ${b.name}: comisiones de futuros ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, apalancamiento ${leverageOf(a)}x vs ${leverageOf(b)}x, KYC y códigos de referido (${monthYear}).`,
        `${a.name} vs ${b.name}: comisiones de futuros ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, apalancamiento ${leverageOf(a)}x vs ${leverageOf(b)}x, productos, países, KYC y códigos de referido.`,
      ),
    keywords: (a, b, former) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${a.name} o ${b.name}`,
      `${a.name} vs ${b.name} comisiones`,
      `${a.name} vs ${b.name} futuros`,
      `comparación ${a.name} ${b.name}`,
      `es ${a.name} mejor que ${b.name}`,
      `es ${b.name} mejor que ${a.name}`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],

    crumbHome: "Inicio",
    crumbHub: "Comparaciones de exchanges",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name} es el exchange antes conocido como ${formerName}.`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${joinList([a.name, b.name])} son exchanges centralizados para trading spot y de futuros con apalancamiento, y ambos tienen un programa de referidos para nuevos usuarios. ${pickA}. ${pickB}.${formerNote ? ` ${formerNote}` : ""} Esta página pone lado a lado sus comisiones, apalancamiento, productos, disponibilidad por país, reglas de verificación y ofertas de referido – cada cifra se leyó en los sitios de los propios exchanges el ${date}.`,

    toc: {
      "at-a-glance": "De un vistazo",
      verdict: "Cuál elegir",
      fees: "Comisiones",
      leverage: "Apalancamiento y profundidad",
      products: "Productos",
      countries: "Países",
      kyc: "Verificación (KYC)",
      safety: "Seguridad y regulación",
      referral: "Códigos de referido",
      "pros-cons": "Ventajas e inconvenientes",
      faq: "Preguntas frecuentes",
      sources: "Fuentes",
    },
    onThisPage: "En esta página",

    /* Hero */
    updated: (date) => `Comprobado y actualizado el ${date}`,
    h1: (a, b) => `${a.name} vs ${b.name}: comisiones, apalancamiento y seguridad comparados`,
    quickAnswer: "Respuesta rápida",
    keyFigures: "Cifras clave",
    chips: (a, b, oiA, oiB) => [
      `Futuros ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `Apalancamiento ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `Interés abierto ${oiA} vs ${oiB}`,
    ],
    boxTitle: "Regístrate con un código de referido",
    boxNote: "Los dos códigos son gratuitos y nunca aumentan tus comisiones.",
    codeLabel: (e) => `Código de referido de ${e.name}`,
    boxRisk: () => (
      <>
        El trading con apalancamiento es de alto riesgo. Ninguno de los dos exchanges está disponible en todos los países – consulta{" "}
        <a href="#countries">países</a>.
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name} de un vistazo`,
    glanceText: (a, b, s) =>
      `Busques ${a.name} vs ${b.name} o ${b.name} vs ${a.name}, la comparación es la misma. De los ${s.measurable} puntos que se pueden decidir con las cifras, ${a.name} va por delante en ${s.a.length} y ${b.name} en ${s.b.length}${s.tie.length ? `; ${s.tie.length} ${tied(s.tie.length)}` : ""}. Los puntos no tienen la misma importancia – unas comisiones más bajas pesan más para un trader activo que una lista de monedas más larga –, así que lee la columna que encaje con tu forma de operar.`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}: comisiones, apalancamiento, tamaño de mercado, productos, países, verificación y reglas de referido`,
    compared: "Comparado",
    ahead: "Por delante",
    level: "Empate",
    glanceNote: (marketDate, date) =>
      `Comisiones: nivel estándar (no VIP). Interés abierto, volumen y mercados: ranking de derivados de CoinMarketCap, ${marketDate}. "–" significa que los dos valores no se pueden ordenar entre sí. Todo lo demás se leyó en los sitios de los propios exchanges el ${date}.`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} o ${b.name}: ¿cuál deberías elegir?`,
    verdictText:
      "No hay un ganador absoluto – cada exchange está pensado para un tipo de trader distinto. Los dos recuadros muestran a quién le conviene cada uno y en qué puntos medibles va por delante del otro.",
    bestFor: (role) => `Ideal para: ${role}`,
    chooseIf: (e) => `Elige ${e.name} si …`,
    aheadOf: (e, other) => `En qué va ${e.name} por delante de ${other.name}`,
    noAdvantage: "Ninguna ventaja medible en los puntos que comparamos.",
    thinkTwice: "Piénsalo dos veces si …",
    codeButton: (e) => `Código de referido de ${e.name}: ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `Comisiones: ${a.name} vs ${b.name}`,
    feesModel:
      "Ambos usan un modelo maker/taker: las órdenes límite que añaden liquidez pagan la comisión maker, y las órdenes que retiran liquidez pagan la comisión taker.",
    feesCaption: (a, b) => `Comisiones estándar de spot y futuros de ${a.name} y ${b.name}`,
    exchange: "Exchange",
    futuresMaker: "Futuros maker",
    futuresTaker: "Futuros taker",
    spotMaker: "Spot maker",
    spotTaker: "Spot taker",
    otherMarkets: "Otros mercados (maker / taker)",
    feesNote: (date) =>
      `Tarifas estándar (no VIP) publicadas por cada exchange, comprobadas el ${date}. Las comisiones cambian – confírmalas en el exchange antes de operar.`,
    tokenTitle: "Descuentos con token y letra pequeña",
    noTokenDiscount: "No publica ningún descuento por pagar las comisiones con un token del exchange.",

    /* Leverage */
    leverageTitle: "Apalancamiento y profundidad de mercado",
    leverageRisk: "Un apalancamiento alto aumenta mucho el riesgo de liquidación – el máximo es un límite, no una recomendación.",
    leverageCaption: (a, b) => `Apalancamiento y datos del mercado de derivados de ${a.name} y ${b.name}`,
    maxLeverage: "Apalancamiento máximo",
    openInterest: "Interés abierto",
    volume24h: "Volumen de derivados en 24 h",
    derivativesMarkets: "Mercados de derivados",
    listedAssets: "Activos listados (cifras propias)",
    leverageNote: (marketDate) =>
      `Datos de mercado: ranking de derivados de CoinMarketCap, ${marketDate}. Los exchanges cuentan los activos listados de forma distinta – unos cuentan monedas, otros pares de trading.`,

    /* Products */
    productsTitle: (a, b) => `Productos: qué ofrecen ${a.name} y ${b.name}`,
    productsSame: (compared) =>
      `Ambos exchanges muestran en sus propios sitios los ${compared} productos que comparamos; las diferencias están en los detalles.`,
    productsLegend: (date) =>
      `Una marca de verificación significa que el exchange muestra el producto en su propio sitio; un guion significa que allí no encontramos ninguna página sobre él el ${date}.`,
    productsCaption: (a, b) => `Productos que ofrecen ${a.name} y ${b.name}`,
    product: "Producto",
    offered: "Disponible",
    notOffered: "No disponible",
    noPage: "No se encontró ninguna página en su propio sitio",

    /* Countries */
    countriesTitle: (a, b) => `Países: dónde están disponibles ${a.name} y ${b.name}`,
    countriesText: (compared, differing) =>
      `Para ${compared} países, esto es lo que dicen los términos de cada exchange. Los dos difieren en ${differing} de ellos. "Sitio regional" significa que el exchange atiende al país a través de una plataforma separada, con sus propios productos, comisiones y límites.`,
    countriesCaption: (a, b) => `Disponibilidad por país de ${a.name} y ${b.name}`,
    country: "País",
    countriesNote: (date) =>
      `"No restringido" significa que el país no figuraba en la lista de países restringidos del exchange el ${date} – no garantiza que allí se ofrezcan todos los productos. Ambos exchanges prohíben eludir una restricción con una VPN o con datos falsos.`,
    differTitle: "En qué países difieren",
    differQuestion: (a, b, countryName) => `¿${a.name} o ${b.name} en ${countryName}?`,
    neither: (a, b, hrefA, hrefB) => (
      <>
        ¿Ninguno de los dos está abierto donde vives? Las tablas de países de las páginas de alternativas muestran qué otros exchanges aceptan tu país:{" "}
        <Link href={hrefA}>Alternativas a {a.name} por país</Link> · <Link href={hrefB}>Alternativas a {b.name} por país</Link>.
      </>
    ),
    restrictedTitle: "Países restringidos y plataformas regionales",
    whereNot: (e) => `¿Dónde no está disponible ${e.name}?`,
    regionalPlatforms: "Plataformas regionales:",

    /* Verification */
    kycTitle: (a, b) => `Verificación: ${a.name} vs ${b.name}`,
    kycText:
      "Ambos piden verificación de identidad a los nuevos usuarios, así que ninguno es una opción para operar sin KYC. La diferencia está en lo que todavía puede hacer una cuenta sin verificar y en cómo funciona la comprobación.",
    documents: "Documentos:",
    minAge: "Edad mínima:",
    howToRegister: (e) => `Cómo registrarse y verificarse en ${e.name}, paso a paso`,

    /* Safety */
    safetyTitle: (a, b) => `Seguridad y regulación: ${a.name} vs ${b.name}`,
    safetyText:
      "Ningún exchange centralizado está libre de riesgo. Lo que sí se puede comparar es lo que cada uno publica sobre sí mismo: dónde tiene licencia, si demuestra sus reservas y si mantiene un fondo para emergencias.",
    safetyCaption: (a, b) => `Regulación, prueba de reservas y fondos de protección de ${a.name} y ${b.name}`,
    licences: "Licencias que nombra el exchange",
    entity: "Entidad operadora",
    reserves: "Prueba de reservas",
    fund: "Fondo de protección",
    founded: "Año de fundación",
    isSafe: (e) => `¿Es seguro ${e.name}?`,
    safetyDetail: (e) => `Seguridad y disponibilidad de ${e.name} en detalle`,

    /* Referral codes */
    referralTitle: (a, b) => `Códigos de referido y ofertas para nuevos usuarios: ${a.name} vs ${b.name}`,
    referralText:
      "Elijas el que elijas, regístrate con un código de referido: no cuesta nada, nunca aumenta tus comisiones y desbloquea la oferta del exchange para nuevos usuarios. Fíjate en la última fila – un código olvidado no siempre se puede añadir después.",
    referralCaption: (a, b) => `Códigos de referido y ofertas para nuevos usuarios de ${a.name} y ${b.name}`,
    referralCodeOf: (e) => `Código de referido de ${e.name}`,
    referralCode: "Código de referido",
    newUserOffer: "Oferta para nuevos usuarios",
    inviteeReward: "Lo que recibes como usuario invitado",
    covers: "Un referido cubre",
    whereCode: "Dónde va el código",
    addLater: "¿Se puede añadir después?",
    referralNote: (date) =>
      `Ofertas comprobadas el ${date}. Las recompensas de bienvenida se basan en tareas, exigen verificación de identidad y varían según el país.`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `Ventajas e inconvenientes de ${a.name} y ${b.name}`,
    pros: "Ventajas",
    cons: "Inconvenientes",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – Preguntas frecuentes`,
    faqText: (count, a, b) =>
      `${count} preguntas sobre cómo elegir entre ${a.name} y ${b.name}: comisiones, apalancamiento, países, verificación, productos y códigos de referido.`,

    /* Sources */
    sourcesTitle: "Fuentes: de dónde salen estas cifras",
    sourcesText: (date, marketDate) =>
      `Todo lo que esta página dice sobre comisiones, apalancamiento, productos, verificación, países, licencias, reservas y reglas de referido se leyó en los sitios web y centros de ayuda de los dos exchanges el ${date}. El interés abierto, el volumen y el número de mercados de derivados proceden del ranking de derivados de CoinMarketCap (${marketDate}). Los exchanges cambian sus términos sin previo aviso, así que las páginas siguientes tienen la última palabra.`,
    officialPages: (e, count) => `${e.name}: ${count} páginas oficiales`,

    /* More comparisons */
    moreTitle: "Más comparaciones",
    against: (e) => `${e.name} frente a los demás exchanges`,
    allAlternatives: (e) => `Todas las alternativas a ${e.name}`,
    allComparisons: "Todas las comparaciones de exchanges",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>Advertencia de riesgo:</strong> Los derivados de criptomonedas son instrumentos complejos. El apalancamiento multiplica las ganancias y
        las pérdidas, y puedes perder todo tu margen en cuestión de minutos. Esta página es solo informativa y no constituye asesoramiento financiero.
        Podemos recibir una comisión si te registras a través de nuestros enlaces – consulta nuestra{" "}
        <Link href={disclosureHref}>divulgación de afiliación</Link>. Eso no cambia las cifras: son las de los propios exchanges.
      </>
    ),
    ctaTitle: (a, b) => `¿${a.name} o ${b.name}? Empieza con un código de referido`,
    ctaText: "Una sola cuenta para spot y futuros en cualquiera de los dos exchanges, sin coste adicional.",
    ctaButton: "Comparar más exchanges",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) =>
      fit(TITLE_MAX, `Comparar exchanges cripto (${shortMonthYear}): ${pairs} comparaciones`, `Comparar exchanges de criptomonedas (${shortMonthYear})`),
    description: (exchangeNames, pairs, monthYear) =>
      fit(
        DESC_MAX,
        `${exchangeNames} por parejas: ${pairs} comparaciones directas de comisiones, apalancamiento, países, KYC y códigos de referido (${monthYear}).`,
        `${exchangeNames}: ${pairs} comparaciones directas de comisiones, apalancamiento, KYC y códigos de referido (${monthYear}).`,
        `${exchangeNames}: ${pairs} comparaciones de comisiones, apalancamiento, KYC y códigos de referido (${monthYear}).`,
        `${exchangeNames} por parejas: ${pairs} comparaciones directas de comisiones, apalancamiento, países, KYC y códigos de referido.`,
      ),
    crumbHome: "Inicio",
    crumbPage: "Comparaciones de exchanges",
    listName: "Comparaciones directas de exchanges de criptomonedas",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `Comprobado y actualizado el ${date}`,
    h1: (pairs) => `Comparar exchanges de criptomonedas: ${pairs} comparaciones directas`,
    lead: (exchangeCount) =>
      `${exchangeCount} exchanges, cada pareja comparada en los mismos puntos: comisiones, apalancamiento, profundidad de mercado, productos, disponibilidad por país, verificación de identidad, regulación y ofertas de referido. Cada comparación usa las cifras de los sitios de los propios exchanges.`,
    quickAnswer: "Respuesta rápida",

    pickTitle: "Elige dos exchanges para comparar",
    pickText: (others) =>
      `Cada recuadro enfrenta un exchange con los otros ${others}. Cada pareja tiene una sola página, así que "Binance vs OKX" y "OKX vs Binance" llevan a la misma comparación.`,
    alternativesOf: (e) => `Alternativas a ${e.name}`,
    referralCodeOf: (e) => `Código de referido de ${e.name}`,

    tableTitle: (exchangeCount) => `Los ${exchangeCount} exchanges lado a lado`,
    tableText:
      "Ofertas para nuevos usuarios, comisiones estándar (no VIP), apalancamiento y profundidad de mercado de todos los exchanges en una sola tabla.",
    tableNote: (date, marketDate) =>
      `Comisiones: nivel estándar publicado por cada exchange, comprobado el ${date}. Interés abierto y mercados: CoinMarketCap, ${marketDate}.`,

    alternativesTitle: "Un exchange frente a todos los demás",
    alternativesText: (others) =>
      `¿No estás decidiendo entre dos, sino buscando un sustituto? Las páginas de alternativas comparan un exchange con los otros ${others} a la vez y muestran cuáles aceptan tu país.`,

    faqTitle: "Comparaciones de exchanges – Preguntas frecuentes",

    ctaTitle: "¿Decidido? Regístrate con un código de referido",
    ctaText: (exchangeCount) => `Códigos verificados para los ${exchangeCount} exchanges – una sola cuenta para spot y futuros, sin coste adicional.`,
    ctaButton: "Ver todos los códigos de referido",
  },
};
