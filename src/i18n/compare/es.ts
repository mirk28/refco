/**
 * The sentences of the comparison pages in Spanish. Same functions as `./en.ts`, phrased in Spanish grammar.
 *
 * Wording as in `../es.tsx`: "exchange" (masculine), "comisiones", "código de referido", informal "tú".
 * Numbers keep the notation of the exchanges' own pages (0.02%, 150x).
 */
import { site } from "@/config/site";
import type { Exchange, Faq, Fee, Step } from "@/data/exchanges";
import { exchanges } from "@/data/exchanges";
import { countryList, featureList } from "@/data/alternatives";
import type { CountryKey, CountryStatus, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import {
  addLater,
  altInfo as altInfoIn,
  alternativesTo as alternativesIn,
  cheaper,
  countryGroups,
  feePair,
  highestLeverage,
  largestOpenInterest,
  leverageOf,
  lowestFutures,
  lowestSpot,
  pct,
  verb,
  withFeature,
  withMica,
} from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { AltFaqGroup, CompareText } from "./en";

const locale = "es";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);

/** Lower-cases the first letter, unless the text starts with a name ("Gate no lo documenta") or an abbreviation ("KYC …"). */
const properNames = new Set(exchanges.map((e) => e.name));
const lcFirst = (s: string) => {
  const first = s.split(/[\s–:,;.]/)[0];
  return properNames.has(first) || /^[A-ZÁÉÍÓÚÑ0-9]{2,}/.test(first) ? s : s.charAt(0).toLowerCase() + s.slice(1);
};

/* -------------------------------- vocabulary -------------------------------- */

const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "Copy trading", noun: "copy trading" },
  tradingBots: { label: "Bots de trading", noun: "bots de trading" },
  options: { label: "Opciones", noun: "trading de opciones" },
  demoTrading: { label: "Trading demo", noun: "trading demo" },
  margin: { label: "Margen spot", noun: "trading con margen spot" },
  p2p: { label: "Trading P2P", noun: "trading P2P" },
  fiat: { label: "Compra con tarjeta / banco", noun: "compras de criptomonedas con tarjeta o transferencia bancaria" },
  earn: { label: "Earn / staking", noun: "productos Earn" },
  launchpad: { label: "Launchpad / launchpool", noun: "un launchpad" },
  web3Wallet: { label: "Billetera Web3", noun: "una billetera Web3 de autocustodia" },
  card: { label: "Tarjeta cripto", noun: "una tarjeta cripto" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` carries the article where Spanish needs one ("en el Reino Unido"); `short` is the table label. */
const countryWords: Record<CountryKey, { name: string; short: string }> = {
  us: { name: "Estados Unidos", short: "Estados Unidos" },
  uk: { name: "el Reino Unido", short: "Reino Unido" },
  ca: { name: "Canadá", short: "Canadá" },
  de: { name: "Alemania", short: "Alemania" },
  fr: { name: "Francia", short: "Francia" },
  nl: { name: "los Países Bajos", short: "Países Bajos" },
  es: { name: "España", short: "España" },
  it: { name: "Italia", short: "Italia" },
  au: { name: "Australia", short: "Australia" },
  jp: { name: "Japón", short: "Japón" },
  sg: { name: "Singapur", short: "Singapur" },
  hk: { name: "Hong Kong", short: "Hong Kong" },
  in: { name: "la India", short: "India" },
  ae: { name: "los Emiratos Árabes Unidos", short: "EAU" },
};
const countries = countryList.map((c) => ({ key: c.key, ...countryWords[c.key], residents: `los residentes en ${countryWords[c.key].name}` }));
type Country = (typeof countryList)[number];

const statusLabel: Record<CountryStatus, string> = {
  restricted: "Restringido",
  regional: "Sitio regional",
  partial: "Parcial",
  open: "No restringido",
};

const marketLabel = (market: "spot" | "futures") => (market === "spot" ? "spot" : "futuros perpetuos");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const label = marketLabel(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${joinList([a.name, x.name])} cobran las mismas comisiones estándar en ${label}: ${fa.maker} maker / ${fa.taker} taker.`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} es más barato para makers y takers`
      : mm !== 0
        ? `${who} es más barato para makers, los takers pagan lo mismo`
        : `${who} es más barato para takers, los makers pagan lo mismo`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} es más barato para makers, ${x.name} para takers`
          : `${x.name} es más barato para makers, ${a.name} para takers`;
  return `En ${label}, ${a.name} cobra ${fa.maker} maker / ${fa.taker} taker y ${x.name} ${fx.maker} / ${fx.taker} – ${verdict}.`;
}

/** Which alternatives are cheaper than, level with or more expensive than `x` on one market (standard tier). */
function feeSummary(x: Exchange, alts: Exchange[], market: "spot" | "futures"): string {
  const fee = (e: Exchange) => (market === "spot" ? e.spotFees : e.futuresFees);
  const fx = fee(x);
  const diff = (a: Exchange) => [Math.sign(pct(fee(a).maker) - pct(fx.maker)), Math.sign(pct(fee(a).taker) - pct(fx.taker))];
  const same = alts.filter((a) => diff(a).every((d) => d === 0));
  const lower = alts.filter((a) => !same.includes(a) && diff(a).every((d) => d <= 0));
  const higher = alts.filter((a) => !same.includes(a) && diff(a).every((d) => d >= 0));
  const mixed = alts.filter((a) => !same.includes(a) && !lower.includes(a) && !higher.includes(a));
  const rates = (list: Exchange[]) => joinList(list.map((a) => `${a.name} (${feePair(fee(a))})`));
  return [
    `En ${marketLabel(market)}, ${x.name} cobra ${feePair(fx)} (maker / taker).`,
    lower.length ? `${verb(lower, "Más barato", "Más baratos")}: ${rates(lower)}.` : `Ninguna de las ${alts.length} alternativas es más barata.`,
    same.length ? `Mismas comisiones: ${names(same)}.` : "",
    higher.length ? `${verb(higher, "Más caro", "Más caros")}: ${rates(higher)}.` : "",
    mixed.length ? `${verb(mixed, "Más barato", "Más baratos")} solo en un lado: ${rates(mixed)}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (market: "spot" | "futures", fa: Fee, fx: Fee) => {
    const of = market === "spot" ? "spot" : "de futuros";
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`Comisiones ${of} más bajas: ${feePair(fa)} en lugar de ${feePair(fx)} (maker / taker)`);
    else if (m < 0 && t === 0) out.push(`Comisión maker ${of} más baja: ${fa.maker} en lugar de ${fx.maker}`);
    else if (t < 0 && m === 0) out.push(`Comisión taker ${of} más baja: ${fa.taker} en lugar de ${fx.taker}`);
    else if (m < 0) out.push(`Comisión maker ${of} más baja: ${fa.maker} en lugar de ${fx.maker} (pero una comisión taker más alta)`);
    else if (t < 0) out.push(`Comisión taker ${of} más baja: ${fa.taker} en lugar de ${fx.taker} (pero una comisión maker más alta)`);
  };
  fee("spot", a.spotFees, x.spotFees);
  fee("futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`Mayor apalancamiento máximo: ${leverageOf(a)}x en lugar de ${leverageOf(x)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`Más interés abierto en derivados: ${formatBn(a.market.openInterestBn)} frente a ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`Más mercados de derivados: ${a.market.markets} frente a ${x.market.markets}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`Un código de referido olvidado todavía se puede añadir (${lcFirst(a.referral.afterSignupShort.replace(/^Sí – /, ""))})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`Ofrece ${joinList(notOffered.map((f) => f.noun))}, que ${x.name} no ofrece`);
  if (notFound.length) out.push(`Ofrece ${joinList(notFound.map((f) => f.noun))} – en el sitio de ${x.name} no encontramos ningún producto así`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`Una plataforma para el EEE autorizada bajo MiCA (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`No restringe ${joinList(openWhere.map((c) => c.name))}, donde ${x.name} está cerrado`);
  if (regionalWhere.length) out.push(`Opera en ${joinList(regionalWhere.map((c) => c.name))} a través de una plataforma regional, donde ${x.name} está cerrado`);
  return out;
}

/* ---------------------------------- country --------------------------------- */

/** Plain-text answer to "Which alternatives to x can be used in this country?". */
function countryAnswer(x: Exchange, alts: Exchange[], country: Country): string {
  const c = countries.find((it) => it.key === country.key)!;
  const own = altInfo(x).countries[c.key];
  const g = countryGroups(alts, c.key);
  const note = (a: Exchange) => altInfo(a).countries[c.key].note;
  const withNote = (list: Exchange[]) => list.map((a) => (note(a) ? `${a.name} (${note(a)})` : a.name));
  const parts: string[] = [];
  if (own.status === "restricted") parts.push(`${x.name} incluye ${c.name} en su propia lista de países restringidos.`);
  else if (own.status === "partial") parts.push(`${x.name} aplica restricciones parciales en ${c.name}${own.note ? ` (${own.note})` : ""}.`);
  else if (own.status === "regional") parts.push(`${x.name} atiende a ${c.residents} a través de una plataforma regional${own.note ? ` (${own.note})` : ""}.`);
  else parts.push(`${x.name} no incluye ${c.name} entre los países restringidos.`);
  if (g.open.length) parts.push(`${names(g.open)} no ${verb(g.open, "incluye", "incluyen")} ${c.name} entre los países restringidos.`);
  if (g.regional.length)
    parts.push(`${joinList(withNote(g.regional))} ${verb(g.regional, "atiende", "atienden")} a ${c.residents} a través de una plataforma regional separada.`);
  if (g.partial.length) parts.push(`Con restricciones parciales: ${withNote(g.partial).join("; ")}.`);
  if (g.restricted.length)
    parts.push(`${names(g.restricted)} ${own.status === "restricted" ? "también " : ""}${verb(g.restricted, "incluye", "incluyen")} ${c.name} entre sus países restringidos.`);
  if (!g.open.length && !g.regional.length) parts.push(`Ninguna de las ${alts.length} alternativas está totalmente abierta a ${c.residents}.`);
  parts.push("Las listas de países cambian, y que un país no figure en ellas no garantiza que allí se ofrezcan todos los productos – deciden los términos del propio exchange.");
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `Las ${alts.length} alternativas a ${x.name} que se comparan aquí son ${names(alts)}. ${alts.map((a) => altInfo(a).pick).join(". ")}. Las ${alts.length} piden verificación de identidad a los nuevos usuarios y cada una tiene su propia lista de países restringidos, así que consulta la tabla de países antes de registrarte.`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `Decide qué tiene que ser mejor que en ${x.name}`,
      text: `Comisiones más bajas, más apalancamiento, más monedas o simplemente un exchange que acepte tu país: las tablas de esta página muestran en qué va por delante de ${x.name} cada alternativa y en qué no.`,
    },
    {
      title: "Comprueba que el exchange acepta tu país",
      text: "Cada exchange tiene su propia lista de países restringidos, y algunos te derivan a una plataforma regional con otros productos y límites. Mira la tabla de países antes de registrarte.",
    },
    {
      title: "Regístrate a través del enlace de referido",
      text: `${names(signupOnly)} solo ${verb(signupOnly, "acepta", "aceptan")} un código de referido durante el registro o no ${verb(signupOnly, "documenta", "documentan")} ninguna forma de añadirlo después, así que usa el enlace antes de que exista la cuenta.${later.length ? ` ${names(later)} ${verb(later, "permite", "permiten")} añadirlo después bajo ciertas condiciones.` : ""}`,
    },
    {
      title: "Verifica tu identidad antes de mover fondos",
      text: `Las ${alts.length} alternativas piden verificación de identidad a los nuevos usuarios, y en la mayoría los depósitos o el trading permanecen bloqueados hasta completarla. Ten a mano un pasaporte, un documento de identidad o un permiso de conducir.`,
    },
    {
      title: `Cierra tus posiciones abiertas en ${x.name}`,
      text: `Las posiciones de futuros y de margen no se pueden trasladar de un exchange a otro. Ciérralas primero en ${x.name}, o conserva la cuenta hasta que hayan terminado.`,
    },
    {
      title: "Retira a tu nueva dirección de depósito",
      text: "Copia la dirección de depósito del nuevo exchange, elige la misma moneda y la misma red en ambos lados y envía primero un importe pequeño de prueba. Una transferencia por la red equivocada puede perderse.",
    },
    {
      title: `Decide qué pasa con tu cuenta de ${x.name}`,
      text: `Puedes conservarla – las cuentas en distintos exchanges son independientes entre sí. Tu nivel de comisiones, tu referido y las recompensas sin usar se quedan en ${x.name} y no se trasladan.`,
    },
  ];
}

/** All questions an alternatives page answers, grouped for display. Answers are built from the data files. */
function buildAlternativesFaqs(x: Exchange, alts: Exchange[]): AltFaqGroup[] {
  const n = alts.length;
  const date = prettyDate(site.lastReviewed);
  const lowF = lowestFutures(alts);
  const lowS = lowestSpot(alts);
  const hi = highestLeverage(alts);
  const oi = largestOpenInterest(alts);
  const cheaperF = alts.filter((a) => cheaper(a.futuresFees, x.futuresFees));
  const cheaperS = alts.filter((a) => cheaper(a.spotFees, x.spotFees));
  const mica = withMica(alts);
  const noMica = alts.filter((a) => !altInfo(a).mica);
  const xInfo = altInfo(x);
  const upTo = (s: string) => s.replace(/^Hasta/, "hasta");

  const choosing: Faq[] = [
    {
      q: `¿Cuál es la mejor alternativa a ${x.name}?`,
      a: `No hay una única mejor alternativa a ${x.name} – depende de por qué quieres cambiar. ${alts.map((a) => altInfo(a).pick).join(". ")}. Esta página compara las ${n} con ${x.name} por comisiones, apalancamiento, productos, disponibilidad por país y verificación, con cifras de los sitios de los propios exchanges, comprobadas el ${date}.`,
    },
    {
      q: `¿Qué exchanges son parecidos a ${x.name}?`,
      a: `${names(alts)} son los más parecidos. Al igual que ${x.name}, son exchanges centralizados que ofrecen trading spot y de futuros con apalancamiento en una sola cuenta y tienen un programa de referidos para nuevos usuarios. Se diferencian en las comisiones, el apalancamiento máximo, el número de activos listados y los países que aceptan.`,
    },
    {
      q: `¿Cuál es la mayor alternativa a ${x.name}?`,
      a: `Por interés abierto en derivados en CoinMarketCap (${prettyDate(site.marketDataDate)}), ${names(oi)} ${verb(oi, "es la mayor", "son las mayores")} de las ${n} alternativas, con ${formatBn(oi[0].market.openInterestBn)}. El propio ${x.name} se situaba en ${formatBn(x.market.openInterestBn)}.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `¿Qué alternativa a ${x.name} tiene las comisiones más bajas?`,
      a: `${names(lowF)} ${verb(lowF, "tiene", "tienen")} las comisiones estándar de futuros más bajas de las ${n}: ${feePair(lowF[0].futuresFees)} (maker / taker). En spot, ${names(lowS)} ${verb(lowS, "es el más barato", "son los más baratos")} con ${feePair(lowS[0].spotFees)}. ${x.name} cobra ${feePair(x.futuresFees)} en futuros y ${feePair(x.spotFees)} en spot.${lowF.length === 1 ? ` ${lowF[0].feeNote}` : ""} Son las tarifas del nivel estándar; los niveles VIP y los tokens de los exchanges las reducen aún más.`,
    },
    {
      q: `¿Qué exchanges son más baratos que ${x.name}?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `En futuros perpetuos: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}, frente a ${feePair(x.futuresFees)} en ${x.name}.` : `En futuros perpetuos ninguna de las ${n} alternativas cobra menos que ${x.name} (${feePair(x.futuresFees)}).`} ${cheaperS.length ? `En spot: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}, frente a ${feePair(x.spotFees)} en ${x.name}.` : `En spot ninguna cobra menos que ${x.name} (${feePair(x.spotFees)}).`} Todas las cifras son maker / taker en el nivel estándar.`
          : `Ninguna de las ${n} alternativas cobra menos que ${x.name} en el nivel estándar: ${x.name} cobra ${feePair(x.futuresFees)} en futuros y ${feePair(x.spotFees)} en spot (maker / taker), las tarifas más bajas de esta comparación. Las alternativas merecen un vistazo por otros motivos – regulación, productos o los países que aceptan.`,
    },
    {
      q: `¿Qué alternativa a ${x.name} ofrece el mayor apalancamiento?`,
      a: `${names(hi)} ${verb(hi, "ofrece", "ofrecen")} el mayor apalancamiento de las ${n}: ${upTo(hi[0].maxLeverage)}. Las demás: ${alts
        .filter((a) => !hi.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join(", ")}. El propio ${x.name} llega ${upTo(x.maxLeverage)}. Un apalancamiento alto aumenta mucho el riesgo de liquidación.`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `¿Qué alternativas a ${x.name} puedo usar en ${c.name}?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `¿Hay alguna alternativa a ${x.name} sin KYC?`,
      a: `No entre estas ${n}. Todas piden verificación de identidad a los nuevos usuarios: ${alts.map((a) => `${a.name} – ${lcFirst(a.signup.kycShort)}`).join("; ")}. El propio ${x.name}: ${lcFirst(x.signup.kycShort)}.`,
    },
    {
      q: `¿Qué alternativas a ${x.name} están reguladas en la UE bajo MiCA?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} ${verb(mica, "nombra", "nombran")} una entidad autorizada bajo MiCA para los residentes del EEE.` : `Ninguna de las ${n} nombra una entidad autorizada bajo MiCA.`}${noMica.length ? ` ${names(noMica)} no ${verb(noMica, "nombra", "nombran")} ninguna autorización MiCA en sus propias páginas.` : ""} ${xInfo.mica ? `El propio ${x.name}: ${xInfo.mica}.` : `El propio ${x.name} no nombra ninguna.`} Una plataforma regional suele tener su propia gama de productos, comisiones y límites.`,
    },
    {
      q: `¿Cuál es la alternativa a ${x.name} más segura?`,
      a: `Ningún exchange centralizado está libre de riesgo, así que la comparación honesta es lo que publica cada uno. ${alts.map((a) => `${a.name}: prueba de reservas – ${altInfo(a).reserves}. ${altInfo(a).fund ? `${altInfo(a).fund}.` : "No nombra ningún fondo de protección."}`).join(" ")} Mantén en cualquier exchange solo los fondos con los que operas activamente.`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `¿Qué alternativas a ${x.name} ofrecen ${f.noun}?`,
      a: `${yes.length ? `${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))} ${verb(yes, "ofrece", "ofrecen")} ${f.noun}.` : `Ninguna de las ${n} alternativas muestra ${f.noun} en su propio sitio.`}${no.length ? ` ${names(no)} no lo ${verb(no, "ofrece", "ofrecen")}.` : ""}${unknown.length ? ` En ${verb(unknown, "el sitio", "los sitios")} de ${names(unknown)} no encontramos ningún producto así en nuestra revisión.` : ""} El propio ${x.name} ${own === true ? "también lo tiene" : own === false ? "no lo ofrece" : "no muestra ningún producto así en su sitio"}.`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `¿Qué alternativa a ${x.name} lista más monedas?`,
      a: `Según sus propias cifras: ${alts.map((a) => `${a.name} – ${a.assets}`).join("; ")}. ${x.name}: ${x.assets}. Los exchanges cuentan de forma distinta – unos cuentan monedas, otros pares de trading –, así que las cifras no son directamente comparables.`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `¿Cómo cambio de ${x.name} a otro exchange?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}.`)
        .join(" "),
    },
    {
      q: `¿Puedo conservar mi cuenta de ${x.name} si abro una en otro exchange?`,
      a: `Sí. Los exchanges son empresas distintas, así que una cuenta en uno no afecta a una cuenta en otro y puedes usar ambas a la vez. Lo que no se traslada es todo lo vinculado a la cuenta: tu referido de ${x.name}, tu nivel de comisiones, las recompensas de bienvenida y el historial de trading se quedan en ${x.name}.`,
    },
    {
      q: `¿Puedo trasladar posiciones de futuros abiertas de ${x.name} a otro exchange?`,
      a: `No. Una posición de futuros solo existe en el exchange donde se abrió. Para cambiar, cierra la posición en ${x.name}, retira los fondos y abre una posición nueva en el otro exchange – al precio y con las comisiones que se apliquen allí.`,
    },
    {
      q: `¿Tienen códigos de referido las alternativas a ${x.name}?`,
      a: `Sí, las ${n}: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("; ")}. Usar un código de referido es gratis y no aumenta tus comisiones de trading.`,
    },
    {
      q: `¿Puedo añadir un código de referido más tarde en una alternativa a ${x.name}?`,
      a: `${alts.map((a) => `${a.name}: ${lcFirst(a.referral.afterSignupShort)}`).join(". ")}. Lo seguro en todos los exchanges es registrarse a través del enlace de referido.`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `¿Es ${a.name} mejor que ${x.name}?`,
      a: `${ahead.length ? `${a.name} va por delante de ${x.name} en estos puntos: ${ahead.map(lcFirst).join("; ")}.` : `En los puntos que comparamos, ${a.name} no tiene ninguna ventaja medible sobre ${x.name}.`} ${behind.length ? `${x.name} va por delante en: ${behind.map(lcFirst).join("; ")}.` : `${x.name} no va por delante en ninguno.`} ${a.name} te conviene si ${lcFirst(altInfo(a).chooseIf[0])}.`,
    };
  });

  return [
    { id: "choosing", title: `Elegir una alternativa a ${x.name}`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "Comisiones y apalancamiento", faqs: fees },
    { id: "countries", title: "Países, KYC y regulación", faqs: countryFaqs },
    { id: "features", title: "Productos y monedas", faqs: featureFaqs },
    { id: "switching", title: `Cambiar desde ${x.name} y códigos de referido`, faqs: switching },
    { id: "versus", title: `${x.name} frente a las alternativas`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `¿Cuáles son las mejores alternativas a ${x.name}?`,
    a: `${alts.map((a) => altInfo(a).pick).join(". ")}. Nuestra página de alternativas a ${x.name} compara las ${alts.length} con ${x.name} por comisiones, apalancamiento, productos, disponibilidad por país y verificación.`,
  };
}

export const es: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "Sí", no: "No", notFound: "No encontrado en su sitio" },
  names,
  feeSentence,
  feeSummary,
  advantages,
  countryAnswer,
  quickAnswer,
  switchSteps,
  buildAlternativesFaqs,
  alternativesTeaserFaq,
};
