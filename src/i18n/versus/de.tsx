/**
 * The head-to-head pages ("/de/<a>-vs-<b>") and the comparison hub ("/de/boersenvergleich") in German.
 * Same keys as `./en.tsx`, written in German.
 *
 * Wording: "Börse", "Gebühren", "Empfehlungscode", "Hebel", "Futures", informal "du". The pages call themselves
 * „Direktvergleich“, the hub „Börsenvergleich“. Fee rates come from the data in German notation (0,02 %). "vs" stays "vs".
 * Exchange names take no article ("bei Binance", "von OKX"). Country names with article and preposition come from
 * `countryForms` below; texts from the data keep their capitals – only the starters in `lcFirst` are lower-cased.
 */
import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, leverageOf, verb } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "de";
const ct = compareText(locale);
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const { advantages, feeSentence, names } = ct;
/** The first words of the points built by `advantages` in `../compare/de.ts` – none of them is a noun. */
const pointStarters = new Set(["Niedrigere", "Höherer", "Mehr", "Ein", "Eine", "Bietet", "Keine", "Bedient"]);
/** A point of `advantages` inside a sentence: "niedrigere Spot-Gebühren …". Anything else keeps its capital. */
const lcPoint = (s: string) => {
  const first = s.split(" ")[0];
  return pointStarters.has(first) ? first.toLowerCase() + s.slice(first.length) : s;
};
const featureList = ct.features;
const countryList = ct.countries;
type Country = (typeof countryList)[number];

/* ---------------------------------- grammar --------------------------------- */

/** Country names after "in" ("in den USA", "im Vereinigten Königreich") and as object ("die USA", "Kanada"). */
const countryForms: Record<CountryKey, { in: string; acc: string }> = {
  us: { in: "in den USA", acc: "die USA" },
  uk: { in: "im Vereinigten Königreich", acc: "das Vereinigte Königreich" },
  ca: { in: "in Kanada", acc: "Kanada" },
  de: { in: "in Deutschland", acc: "Deutschland" },
  fr: { in: "in Frankreich", acc: "Frankreich" },
  nl: { in: "in den Niederlanden", acc: "die Niederlande" },
  es: { in: "in Spanien", acc: "Spanien" },
  it: { in: "in Italien", acc: "Italien" },
  au: { in: "in Australien", acc: "Australien" },
  jp: { in: "in Japan", acc: "Japan" },
  sg: { in: "in Singapur", acc: "Singapur" },
  hk: { in: "in Hongkong", acc: "Hongkong" },
  in: { in: "in Indien", acc: "Indien" },
  ae: { in: "in den VAE", acc: "die Vereinigten Arabischen Emirate" },
};

/* ---------------------------------- helpers --------------------------------- */

/**
 * Lower-cases only the known starters of texts from the data when they continue a sentence:
 * "Ja –", "Nein –", "Auf Anfrage –", "Bis zu", "Du". German nouns keep their capital, so nothing else is touched.
 */
const lcFirst = (s: string) =>
  s
    .replace(/^(Ja|Nein|Auf Anfrage) –/, (m) => m.charAt(0).toLowerCase() + m.slice(1))
    .replace(/^Bis zu\b/, "bis zu")
    .replace(/^Du\b/, "du");
/** "320 Mio.+ registrierte Nutzer (laut Binance)" → "320 Mio.+ registrierte Nutzer"; "… (Bybit-API)" → without the bracket. */
const withoutSource = (s: string) => s.replace(/\s*\((?:laut [^()]*|[^()]*[-\s]API)\)/, "");
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
const leverageRisk = "Ein hoher Hebel erhöht das Liquidationsrisiko stark.";
const regionalNote = "Eine regionale Plattform hat in der Regel ein eigenes Produktangebot, eigene Gebühren und eigene Limits.";

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `${e.name} punktet bei ${joinList(rows.map((r) => r.topic))}` : `${e.name} liegt bei keinem davon vorn`;
  return `Weder ${a.name} noch ${b.name} ist in jedem Punkt besser. Von den ${s.measurable} messbaren Punkten dieses Vergleichs liegt ${a.name} bei ${s.a.length} vorn und ${b.name} bei ${s.b.length}${s.tie.length ? `, bei ${s.tie.length} herrscht Gleichstand` : ""}. ${lead(a, s.a)}. ${lead(b, s.b)}. Wähle ${a.name}, wenn ${lcFirst(altInfo(a).chooseIf[0])}. Wähle ${b.name}, wenn ${lcFirst(altInfo(b).chooseIf[0])}.`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb) return `${a.name} und ${b.name} bieten denselben maximalen Hebel: ${a.name} ${lcFirst(a.maxLeverage)}, ${b.name} ${lcFirst(b.maxLeverage)}.`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `${hi.name} bietet den höheren maximalen Hebel – ${lcFirst(hi.maxLeverage)} – gegenüber ${lcFirst(lo.maxLeverage)} bei ${lo.name}.`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `Im Derivate-Ranking von CoinMarketCap (${prettyDate(site.marketDataDate)}) kam ${a.name} auf ${formatBn(a.market.openInterestBn)} Open Interest in ${a.market.markets} Märkten, ${b.name} auf ${formatBn(b.market.openInterestBn)} in ${b.market.markets}. ${deeper.name} hat den tieferen Markt – das bedeutet meist engere Spreads bei großen Orders.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${a.name} bietet ${joinList(notOffered.map((f) => f.noun))}, ${b.name} nicht.` : "",
    notFound.length ? `${a.name} bietet ${joinList(notFound.map((f) => f.noun))}; auf der Website von ${b.name} haben wir kein solches Produkt gefunden.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const place = countryForms[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${e.name} ist für Nutzer mit Wohnsitz ${place.in} gesperrt${extra}`;
  if (status === "regional") return `${e.name} bedient Nutzer mit Wohnsitz ${place.in} über eine regionale Plattform${extra}`;
  if (status === "partial") return `${e.name} ist ${place.in} teilweise eingeschränkt${extra}`;
  return `${e.name} führt ${place.acc} nicht als gesperrtes Land`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("de").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. Länderlisten ändern sich, und wenn ein Land nicht aufgeführt ist, heißt das noch nicht, dass dort jedes Produkt angeboten wird – maßgeblich sind die Bedingungen der jeweiligen Börse.`;

/* ------------------------------------ FAQ ------------------------------------ */

/** All questions a head-to-head page answers, grouped for display (see `./en.tsx`). */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) =>
    has(a, key) && has(b, key) ? "bei beiden" : has(a, key) ? `nur bei ${a.name}` : has(b, key) ? `nur bei ${b.name}` : "auf keiner der beiden Websites gefunden";
  const noTokenDiscount = "Ein solcher Rabatt wird nicht angegeben.";
  const noFund = "Kein Schutzfonds genannt.";
  const noMica = "Auf den eigenen Seiten nennt die Börse keine nach MiCA zugelassene Gesellschaft";

  const verdict: Faq[] = [
    { q: `${a.name} oder ${b.name}: Was ist besser?`, a: versusAnswer(a, b, s) },
    {
      q: `Was ist der größte Unterschied zwischen ${a.name} und ${b.name}?`,
      a: `${ia.pick}. ${ib.pick}.${aheadA.length ? ` Die deutlichsten messbaren Vorteile von ${a.name}: ${aheadA.slice(0, 2).map(lcPoint).join("; ")}.` : ""}${aheadB.length ? ` Die von ${b.name}: ${aheadB.slice(0, 2).map(lcPoint).join("; ")}.` : ""}`,
    },
    {
      q: `Ist ${a.name} größer als ${b.name}?`,
      a: `Im Derivate-Ranking von CoinMarketCap (${marketDate}) kam ${a.name} auf ${formatBn(a.market.openInterestBn)} Open Interest und ${formatBn(a.market.volume24hBn)} Handelsvolumen in 24 Stunden, ${b.name} auf ${formatBn(b.market.openInterestBn)} und ${formatBn(b.market.volume24hBn)}. Nach eigenen Angaben hat ${a.name} ${withoutSource(a.users)} und ${b.name} ${withoutSource(b.users)}.`,
    },
    {
      q: `${a.name} oder ${b.name}: Was ist besser für Anfänger?`,
      a: `Beim ersten Konto zählen drei Dinge: ein einfacher Weg, Krypto zu kaufen, eine Möglichkeit zum Üben und niedrige Gebühren. Kauf per Karte oder Banküberweisung: ${state("fiat")}. Demo-Trading: ${state("demoTrading")}. Copy Trading: ${state("copyTrading")}. ${feeSentence(a, b, "spot")} Identitätsprüfung – ${a.name}: ${lcFirst(a.signup.kycShort)}; ${b.name}: ${lcFirst(b.signup.kycShort)}.`,
    },
    {
      q: `${a.name} oder ${b.name}: Was ist besser für Futures-Trading?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${a.name} oder ${b.name}: Wo sind die Gebühren niedriger?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} Das sind die Standardgebühren (ohne VIP-Stufe); VIP-Stufen und börseneigene Token senken sie weiter.`,
    },
    {
      q: `Gibt es bei ${a.name} und ${b.name} Rabatt, wenn du die Gebühren mit dem börseneigenen Token zahlst?`,
      a: `${a.name}: ${a.tokenDiscount || noTokenDiscount} ${b.name}: ${b.tokenDiscount || noTokenDiscount}`,
    },
    { q: `${a.name} oder ${b.name}: Wo gibt es den höheren Hebel?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${a.name} oder ${b.name}: Wo gibt es mehr Coins?`,
      a: `Nach eigenen Angaben listet ${a.name} ${withoutSource(a.assets)} und ${b.name} ${withoutSource(b.assets)}. Die Börsen zählen unterschiedlich – manche zählen Coins, andere Handelspaare –, daher lassen sich die beiden Zahlen nicht direkt vergleichen.`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({
      q: `Kann ich ${a.name} oder ${b.name} ${countryForms[c.key].in} nutzen?`,
      a: countryPairAnswer(a, b, c),
    })),
    {
      q: `Ist bei ${a.name} und ${b.name} KYC Pflicht?`,
      a: `Ja, beide verlangen von Neukunden eine Identitätsprüfung. ${a.name}: ${lcFirst(a.signup.kycShort)}. ${b.name}: ${lcFirst(b.signup.kycShort)}. Für Trading ohne Verifizierung kommt keine der beiden infrage.`,
    },
    {
      q: `${a.name} oder ${b.name}: Was ist sicherer?`,
      a: `Keine zentralisierte Börse ist risikofrei, ein fairer Vergleich kann sich also nur auf das stützen, was jede selbst veröffentlicht. ${a.name}: ${a.regulation}. Reservenachweis – ${ia.reserves}. ${ia.fund ? `${ia.fund}.` : noFund} ${b.name}: ${b.regulation}. Reservenachweis – ${ib.reserves}. ${ib.fund ? `${ib.fund}.` : noFund} Lass auf beiden Börsen nur das Guthaben liegen, mit dem du aktiv handelst.`,
    },
    {
      q: `Sind ${a.name} und ${b.name} in der EU nach MiCA reguliert?`,
      a: `${a.name}: ${ia.mica ? `ja – ${ia.mica}` : noMica}. ${b.name}: ${ib.mica ? `ja – ${ib.mica}` : noMica}. ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `Unter den ${featureList.length} verglichenen Produkten nichts: Jedes Produkt, das ${x.name} auf der eigenen Website zeigt, zeigt auch ${y.name}.`;
  const products: Faq[] = [
    { q: `Was bietet ${a.name}, was ${b.name} nicht hat?`, a: onlyA || nothing(a, b) },
    { q: `Was bietet ${b.name}, was ${a.name} nicht hat?`, a: onlyB || nothing(b, a) },
    {
      q: `Bieten ${a.name} und ${b.name} Copy Trading, Trading-Bots, Optionen und Demo-Trading?`,
      a: `Copy Trading: ${state("copyTrading")}. Trading-Bots: ${state("tradingBots")}. Optionen: ${state("options")}. Demo-Trading: ${state("demoTrading")}.${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` Wo nur eine Börse genannt ist, haben wir am ${prettyDate(site.lastReviewed)} auf der Website der anderen keine Seite zu dem Produkt gefunden.` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `Wie lauten die Empfehlungscodes für ${a.name} und ${b.name}?`,
      a: `${a.name}: ${a.referralCode} – ${lcFirst(a.referral.whereShort)}. ${b.name}: ${b.referralCode} – ${lcFirst(b.referral.whereShort)}. Beide Codes sind kostenlos und erhöhen deine Handelsgebühren nicht.`,
    },
    {
      q: `${a.name} oder ${b.name}: Wo ist der Bonus für Neukunden besser?`,
      a: `${a.name}: ${lcFirst(offer(a))}. ${b.name}: ${lcFirst(offer(b))}. Die Willkommensprämien beider Börsen sind an Bedingungen wie Identitätsprüfung, Einzahlungen oder Handelsvolumen geknüpft und unterscheiden sich je nach Land – vergleiche also die Bedingungen, nicht den beworbenen Höchstbetrag.`,
    },
    {
      q: `Kann ich bei ${a.name} oder ${b.name} einen Empfehlungscode nachträglich eingeben?`,
      a: `${a.name}: ${lcFirst(a.referral.afterSignupShort)}. ${b.name}: ${lcFirst(b.referral.afterSignupShort)}. Auf Nummer sicher gehst du bei beiden, wenn du dich über den Empfehlungslink registrierst.`,
    },
    {
      q: `Kann ich ${a.name} und ${b.name} gleichzeitig nutzen?`,
      a: "Ja. Es sind getrennte Unternehmen: Ein Konto bei der einen Börse wirkt sich nicht auf ein Konto bei der anderen aus, und viele Trader halten Guthaben auf zwei Börsen. Gebührenstufen, Empfehlungen und Prämien hängen am jeweiligen Konto und werden nicht übertragen.",
    },
    {
      q: `Wie übertrage ich Krypto von ${a.name} zu ${b.name}?`,
      a: `1. Eröffne dein Konto bei ${b.name} mit dem Empfehlungscode ${b.referralCode} und durchlaufe die Identitätsprüfung. 2. Schließe offene Futures- und Margin-Positionen bei ${a.name} – Positionen lassen sich nicht zwischen Börsen übertragen. 3. Kopiere bei ${b.name} die Einzahlungsadresse für den Coin und das Netzwerk, die du nutzen willst. 4. Zahle von ${a.name} auf diese Adresse im selben Netzwerk aus und sende zuerst einen kleinen Testbetrag: Ein Transfer über das falsche Netzwerk kann verloren gehen. In die andere Richtung funktionieren dieselben Schritte.`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} oder ${b.name}: Was ist besser?`, faqs: verdict },
    { id: "fees", title: "Gebühren, Hebel und Coins", faqs: fees },
    { id: "countries", title: "Länder, KYC und Sicherheit", faqs: countries },
    { id: "products", title: "Produkte", faqs: products },
    { id: "referral", title: "Empfehlungscodes und Wechsel zwischen den Börsen", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi, oi, mica }: HubFacts) =>
  `${names(lowF)} ${verb(lowF, "hat", "haben")} die niedrigsten Standardgebühren für Futures (${feePair(lowF[0].futuresFees)} Maker / Taker), ${names(hi)} den höchsten Hebel (${leverageOf(hi[0])}x) und ${names(oi)} den tiefsten Derivatemarkt (${formatBn(oi[0].market.openInterestBn)} Open Interest). ${names(mica)} ${verb(mica, "nennt", "nennen")} eine nach MiCA zugelassene Plattform für Nutzer mit Wohnsitz im EWR. Welche Börse für dich besser ist, hängt davon ab, zwischen welchen beiden du dich entscheidest – wähle das Paar unten aus.`;

function hubFaqs({ all, ranked, lowF, lowS, hi, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "Welche Kryptobörse hat die niedrigsten Gebühren?",
      a: `Auf der Standardstufe ${verb(lowF, "hat", "haben")} ${names(lowF)} mit ${feePair(lowF[0].futuresFees)} (Maker / Taker) die niedrigsten Futures-Gebühren und ${names(lowS)} mit ${feePair(lowS[0].spotFees)} die niedrigsten Spot-Gebühren. Die übrigen Börsen: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} ${feePair(e.futuresFees)} bei Futures und ${feePair(e.spotFees)} bei Spot`)
        .join("; ")}. VIP-Stufen und börseneigene Token senken diese Sätze weiter.`,
    },
    {
      q: "Welche Kryptobörse bietet den höchsten Hebel?",
      a: `${names(hi)}: ${lcFirst(hi[0].maxLeverage)}. Die anderen: ${ranked
        .filter((e) => !hi.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join(", ")}. ${leverageRisk}`,
    },
    {
      q: "Welche Kryptobörse hat den tiefsten Futures-Markt?",
      a: `Gemessen am Open Interest im Derivate-Ranking von CoinMarketCap (${marketDate}): ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join(", ")}. Ein tieferer Markt bedeutet meist engere Spreads bei großen Orders.`,
    },
    {
      q: "Welche Börsen haben eine nach MiCA zugelassene Plattform für den EWR?",
      a: `${joinList(mica.map((e) => `${e.name} (${altInfo(e).mica})`))}. ${names(noMica)} ${verb(noMica, "nennt", "nennen")} auf den eigenen Seiten keine nach MiCA zugelassene Gesellschaft. ${regionalNote}`,
    },
    {
      q: "Bei welchen Börsen kann ich den Empfehlungscode nach der Registrierung nachtragen?",
      a: `${later.map((e) => `${e.name}: ${lcFirst(e.referral.afterSignupShort)}`).join(". ")}. Bei ${names(signupOnly)} zählt der Code nur bei der Registrierung, oder es ist kein Weg dokumentiert, ihn nachzutragen – auf Nummer sicher gehst du überall, wenn du dich über den Empfehlungslink registrierst.`,
    },
    {
      q: "Wie entstehen diese Vergleiche?",
      a: `Jede Zahl stammt von der Website oder aus dem Hilfe-Center der jeweiligen Börse – Gebührentabellen, Nutzungsbedingungen, Listen gesperrter Länder, Produktseiten –, und jede Seite nennt ihre Quellen. Open Interest, Volumen und die Zahl der Derivatemärkte stammen aus dem Derivate-Ranking von CoinMarketCap. Wer bei einem Punkt vorn liegt, ergibt sich aus diesen Zahlen; ein eigenes Ranking erstellen wir nicht. Stand der aktuellen Prüfung: ${date}.`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const de: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row after "punktet bei" (dative with article) ---- */
  rows: {
    futuresFees: { label: "Futures-Gebühren (Maker / Taker)", topic: "den Futures-Gebühren" },
    spotFees: { label: "Spot-Gebühren (Maker / Taker)", topic: "den Spot-Gebühren" },
    leverage: { label: "Maximaler Hebel", topic: "dem maximalen Hebel" },
    openInterest: { label: "Open Interest (Derivate)", topic: "dem Open Interest" },
    volume: { label: "Derivatevolumen (24 h)", topic: "dem 24-Stunden-Volumen bei Derivaten" },
    markets: { label: "Derivatemärkte", topic: "der Zahl der Derivatemärkte" },
    users: { label: "Nutzer (eigene Angaben)", topic: "den Nutzerzahlen" },
    assets: { label: "Gelistete Kryptowerte (eigene Angaben)", topic: "" },
    founded: { label: "Gegründet", topic: "" },
    products: { label: (compared) => `Gefundene Produkte (von ${compared} verglichenen)`, topic: "der Produktauswahl" },
    countries: { label: (compared) => `Gesperrte Länder (von ${compared} verglichenen)`, topic: "der Länderabdeckung" },
    mica: { label: "MiCA-zugelassene EWR-Plattform", topic: "der MiCA-Zulassung" },
    kyc: { label: "Identitätsprüfung (KYC)", topic: "" },
    addLater: { label: "Empfehlungscode nachtragen?", topic: "dem Nachtragen eines Empfehlungscodes" },
    offer: { label: "Neukundenangebot", topic: "" },
    reserves: { label: "Reservenachweis", topic: "" },
    fund: { label: "Schutzfonds", topic: "" },
  },
  countOf: (count, of) => `${count} von ${of}`,
  noMica: "Nicht genannt",
  noFund: "Nicht genannt",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    title: (a, b, shortMonthYear) => `${a.name} vs ${b.name} (${shortMonthYear}): Gebühren, Hebel, KYC & Bonus`,
    description: (a, b, monthYear) =>
      `${a.name} vs ${b.name}: Futures-Gebühren ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, Hebel ${leverageOf(a)}x vs ${leverageOf(b)}x, dazu Produkte, Länder, KYC und Empfehlungscodes – offizielle Daten, geprüft im ${monthYear}.`,
    keywords: (a, b, former) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${a.name} oder ${b.name}`,
      `${a.name} vs ${b.name} Gebühren`,
      `${a.name} vs ${b.name} Futures`,
      `${a.name} ${b.name} Vergleich`,
      `ist ${a.name} besser als ${b.name}`,
      `ist ${b.name} besser als ${a.name}`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],

    crumbHome: "Startseite",
    crumbHub: "Börsenvergleich",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name} ist die Börse, die früher ${formerName} hieß.`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${a.name} und ${b.name} sind zentralisierte Kryptobörsen für den Spot-Handel und gehebelte Futures, und beide haben ein Empfehlungsprogramm für Neukunden. ${pickA}. ${pickB}.${formerNote ? ` ${formerNote}` : ""} Dieser Direktvergleich stellt Gebühren, Hebel, Produkte, Verfügbarkeit nach Ländern, Regeln zur Identitätsprüfung und Empfehlungsangebote nebeneinander – alle Zahlen stammen von den eigenen Websites der Börsen, abgerufen am ${date}.`,

    toc: {
      "at-a-glance": "Auf einen Blick",
      verdict: "Welche Börse wählen",
      fees: "Gebühren",
      leverage: "Hebel & Markttiefe",
      products: "Produkte",
      countries: "Länder",
      kyc: "Verifizierung (KYC)",
      safety: "Sicherheit & Regulierung",
      referral: "Empfehlungscodes",
      "pros-cons": "Vor- & Nachteile",
      faq: "FAQ",
      sources: "Quellen",
    },
    onThisPage: "Auf dieser Seite",

    /* Hero */
    updated: (date) => `Geprüft und aktualisiert am ${date}`,
    h1: (a, b) => `${a.name} vs ${b.name}: Gebühren, Hebel und Sicherheit im Vergleich`,
    quickAnswer: "Kurz gesagt",
    keyFigures: "Kennzahlen",
    chips: (a, b, oiA, oiB) => [
      `Futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `Hebel ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `Open Interest ${oiA} vs ${oiB}`,
    ],
    boxTitle: "Mit Empfehlungscode registrieren",
    boxNote: "Beide Codes sind kostenlos und erhöhen deine Gebühren nie.",
    codeLabel: (e) => `${e.name} Empfehlungscode`,
    boxRisk: () => (
      <>
        Trading mit Hebel ist hochriskant. Keine der beiden Börsen ist in jedem Land verfügbar – siehe <a href="#countries">Länder</a>.
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name} auf einen Blick`,
    glanceText: (a, b, s) =>
      `Ob du nach ${a.name} vs ${b.name} oder nach ${b.name} vs ${a.name} suchst – der Vergleich ist derselbe. Von den ${s.measurable} Punkten, die sich anhand der Zahlen entscheiden lassen, liegt ${a.name} bei ${s.a.length} vorn und ${b.name} bei ${s.b.length}${s.tie.length ? `; bei ${s.tie.length} herrscht Gleichstand` : ""}. Die Punkte sind nicht gleich wichtig – für aktive Trader zählen niedrigere Gebühren mehr als eine längere Coin-Liste –, also achte auf die Zeilen, die zu deiner Art zu handeln passen.`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}: Gebühren, Hebel, Marktgröße, Produkte, Länder, Verifizierung und Empfehlungsregeln`,
    compared: "Kriterium",
    ahead: "Vorn",
    level: "Gleichstand",
    glanceNote: (marketDate, date) =>
      `Gebühren: Standardstufe (ohne VIP). Open Interest, Volumen und Märkte: Derivate-Ranking von CoinMarketCap, ${marketDate}. „–“ heißt, dass sich die beiden Werte nicht gegeneinander abwägen lassen. Alles andere stammt von den eigenen Websites der Börsen, abgerufen am ${date}.`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} oder ${b.name}: Welche Börse solltest du wählen?`,
    verdictText:
      "Einen Gesamtsieger gibt es nicht – jede Börse ist für einen anderen Typ Trader gebaut. Die beiden Kästen zeigen, für wen sich welche eignet und wo sie der anderen messbar voraus ist.",
    bestFor: (role) => `Stärke: ${role}`,
    chooseIf: (e) => `Wähle ${e.name}, wenn …`,
    aheadOf: (e, other) => `Wo ${e.name} gegenüber ${other.name} vorn liegt`,
    noAdvantage: "Bei den verglichenen Punkten kein messbarer Vorteil.",
    thinkTwice: "Überleg es dir gut, wenn …",
    codeButton: (e) => `${e.name} Empfehlungscode ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `Gebühren: ${a.name} vs ${b.name}`,
    feesModel:
      "Beide arbeiten mit einem Maker-Taker-Modell: Limit-Orders, die dem Orderbuch Liquidität hinzufügen, zahlen die Maker-Gebühr, Orders, die Liquidität entnehmen, die Taker-Gebühr.",
    feesCaption: (a, b) => `Standardgebühren für Spot und Futures bei ${a.name} und ${b.name}`,
    exchange: "Börse",
    futuresMaker: "Futures Maker",
    futuresTaker: "Futures Taker",
    spotMaker: "Spot Maker",
    spotTaker: "Spot Taker",
    otherMarkets: "Weitere Märkte (Maker / Taker)",
    feesNote: (date) => `Standardsätze (ohne VIP), wie von den Börsen veröffentlicht, geprüft am ${date}. Gebühren ändern sich – prüfe sie vor dem Handel bei der Börse.`,
    tokenTitle: "Token-Rabatte und Kleingedrucktes",
    noTokenDiscount: "Ein Rabatt für die Zahlung von Gebühren mit einem börseneigenen Token wird nicht angegeben.",

    /* Leverage */
    leverageTitle: "Hebel und Markttiefe",
    leverageRisk: "Ein hoher Hebel erhöht das Liquidationsrisiko stark – das Maximum ist eine Grenze, keine Empfehlung.",
    leverageCaption: (a, b) => `Hebel und Daten zum Derivatemarkt von ${a.name} und ${b.name}`,
    maxLeverage: "Maximaler Hebel",
    openInterest: "Open Interest",
    volume24h: "Derivatevolumen (24 h)",
    derivativesMarkets: "Derivatemärkte",
    listedAssets: "Gelistete Kryptowerte (eigene Angaben)",
    leverageNote: (marketDate) =>
      `Marktdaten: Derivate-Ranking von CoinMarketCap, ${marketDate}. Die Börsen zählen gelistete Werte unterschiedlich – manche zählen Coins, andere Handelspaare.`,

    /* Products */
    productsTitle: (a, b) => `Produkte: Was ${a.name} und ${b.name} bieten`,
    productsSame: (compared) => `Beide Börsen zeigen alle ${compared} verglichenen Produkte auf ihren eigenen Websites; die Unterschiede liegen im Detail.`,
    productsLegend: (date) => `Ein Häkchen bedeutet, dass die Börse das Produkt auf ihrer eigenen Website zeigt; ein Strich, dass wir dort am ${date} keine Seite dazu gefunden haben.`,
    productsCaption: (a, b) => `Produkte von ${a.name} und ${b.name}`,
    product: "Produkt",
    offered: "Angeboten",
    notOffered: "Nicht angeboten",
    noPage: "Keine Seite auf der eigenen Website gefunden",

    /* Countries */
    countriesTitle: (a, b) => `Länder: Wo ${a.name} und ${b.name} verfügbar sind`,
    countriesText: (compared, differing) =>
      `Für ${compared} Länder steht hier, was die Bedingungen der beiden Börsen sagen. In ${differing} davon unterscheiden sie sich. „${ct.statusLabel.regional}“ bedeutet, dass die Börse das Land über eine eigene Plattform mit eigenen Produkten, Gebühren und Limits bedient.`,
    countriesCaption: (a, b) => `Verfügbarkeit von ${a.name} und ${b.name} nach Ländern`,
    country: "Land",
    countriesNote: (date) =>
      `„${ct.statusLabel.open}“ heißt: am ${date} nicht auf der Sperrliste der Börse – keine Garantie, dass dort jedes Produkt angeboten wird. Beide Börsen verbieten, eine Sperre per VPN oder mit falschen Angaben zu umgehen.`,
    differTitle: "Wo sich die beiden unterscheiden",
    differQuestion: (a, b, countryName) => {
      const key = countryList.find((c) => c.name === countryName || c.short === countryName)?.key;
      return `${a.name} oder ${b.name} ${key ? countryForms[key].in : `in ${countryName}`}?`;
    },
    neither: (a, b, hrefA, hrefB) => (
      <>
        Ist keine der beiden dort verfügbar, wo du wohnst? Die Ländertabellen der Alternativen-Seiten zeigen, welche anderen Börsen dein Land akzeptieren:{" "}
        <Link href={hrefA}>{a.name} Alternativen nach Land</Link> · <Link href={hrefB}>{b.name} Alternativen nach Land</Link>.
      </>
    ),
    restrictedTitle: "Gesperrte Länder und regionale Plattformen",
    whereNot: (e) => `Wo ist ${e.name} nicht verfügbar?`,
    regionalPlatforms: "Regionale Plattformen:",

    /* Verification */
    kycTitle: (a, b) => `Verifizierung: ${a.name} vs ${b.name}`,
    kycText:
      "Beide verlangen von Neukunden eine Identitätsprüfung, für Trading ohne KYC kommt also keine der beiden infrage. Der Unterschied liegt darin, was ein unverifiziertes Konto noch kann und wie die Prüfung abläuft.",
    documents: "Dokumente:",
    minAge: "Mindestalter:",
    howToRegister: (e) => `Registrierung und Verifizierung bei ${e.name} Schritt für Schritt`,

    /* Safety */
    safetyTitle: (a, b) => `Sicherheit und Regulierung: ${a.name} vs ${b.name}`,
    safetyText:
      "Keine zentralisierte Börse ist risikofrei. Vergleichen lässt sich, was jede über sich selbst veröffentlicht: wo sie lizenziert ist, ob sie ihre Reserven nachweist und ob sie einen Fonds für Notfälle unterhält.",
    safetyCaption: (a, b) => `Regulierung, Reservenachweis und Schutzfonds von ${a.name} und ${b.name}`,
    licences: "Von der Börse genannte Lizenzen",
    entity: "Betreibergesellschaft",
    reserves: "Reservenachweis",
    fund: "Schutzfonds",
    founded: "Gegründet",
    isSafe: (e) => `Ist ${e.name} sicher?`,
    safetyDetail: (e) => `Sicherheit und Verfügbarkeit von ${e.name} im Detail`,

    /* Referral codes */
    referralTitle: (a, b) => `Empfehlungscodes und Neukundenangebote: ${a.name} vs ${b.name}`,
    referralText:
      "Egal, wofür du dich entscheidest: Registriere dich mit einem Empfehlungscode. Das kostet nichts, erhöht deine Gebühren nie und schaltet das Neukundenangebot der Börse frei. Achte auf die letzte Zeile – ein vergessener Code lässt sich nicht immer nachtragen.",
    referralCaption: (a, b) => `Empfehlungscodes und Neukundenangebote von ${a.name} und ${b.name}`,
    referralCodeOf: (e) => `${e.name} Empfehlungscode`,
    referralCode: "Empfehlungscode",
    newUserOffer: "Neukundenangebot",
    inviteeReward: "Was du als eingeladener Nutzer bekommst",
    covers: "Eine Empfehlung gilt für",
    whereCode: "Wo der Code eingegeben wird",
    addLater: "Nachtragen möglich?",
    referralNote: (date) =>
      `Angebote geprüft am ${date}. Willkommensprämien sind an Aufgaben geknüpft, setzen eine Identitätsprüfung voraus und unterscheiden sich je nach Land.`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `Vor- und Nachteile von ${a.name} und ${b.name}`,
    pros: "Vorteile",
    cons: "Nachteile",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – FAQ`,
    faqText: (count, a, b) => `${count} Fragen zur Wahl zwischen ${a.name} und ${b.name}: Gebühren, Hebel, Länder, Verifizierung, Produkte und Empfehlungscodes.`,

    /* Sources */
    sourcesTitle: "Quellen: Woher diese Zahlen stammen",
    sourcesText: (date, marketDate) =>
      `Alles, was auf dieser Seite zu Gebühren, Hebel, Produkten, Verifizierung, Ländern, Lizenzen, Reserven und Empfehlungsregeln steht, stammt von den Websites und Hilfe-Centern der beiden Börsen, abgerufen am ${date}. Open Interest, Volumen und die Zahl der Derivatemärkte stammen aus dem Derivate-Ranking von CoinMarketCap (${marketDate}). Börsen ändern ihre Bedingungen ohne Vorankündigung – maßgeblich sind daher die unten aufgeführten Seiten.`,
    officialPages: (e, count) => `${e.name}: ${count} offizielle Seiten`,

    /* More comparisons */
    moreTitle: "Weitere Vergleiche",
    against: (e) => `${e.name} im Vergleich mit den anderen Börsen`,
    allAlternatives: (e) => `Alle ${e.name} Alternativen`,
    allComparisons: "Alle Börsenvergleiche",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>Risikohinweis:</strong> Krypto-Derivate sind komplexe Instrumente. Ein Hebel vervielfacht Gewinne und Verluste, und du kannst deine
        gesamte Margin innerhalb von Minuten verlieren. Diese Seite dient nur der Information und ist keine Finanzberatung. Wenn du dich über unsere
        Links registrierst, erhalten wir möglicherweise eine Provision – siehe unseren <Link href={disclosureHref}>Affiliate-Hinweis</Link>. An den
        Zahlen ändert das nichts: Sie stammen von den Börsen selbst.
      </>
    ),
    ctaTitle: (a, b) => `${a.name} oder ${b.name}? Starte mit einem Empfehlungscode`,
    ctaText: "Ein Konto für Spot und Futures – bei beiden Börsen ohne Zusatzkosten.",
    ctaButton: "Weitere Börsen vergleichen",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) => `Krypto-Börsenvergleich (${shortMonthYear}): ${pairs} Direktvergleiche`,
    description: (exchangeNames, pairs, monthYear) =>
      `${exchangeNames} paarweise: ${pairs} Direktvergleiche zu Gebühren, Hebel, Ländern, KYC und Empfehlungscodes – offizielle Daten, geprüft im ${monthYear}.`,
    crumbHome: "Startseite",
    crumbPage: "Börsenvergleich",
    listName: "Direktvergleiche von Kryptobörsen",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `Geprüft und aktualisiert am ${date}`,
    h1: (pairs) => `Krypto-Börsenvergleich: ${pairs} Direktvergleiche`,
    lead: (exchangeCount) =>
      `${exchangeCount} Börsen, jedes Paar nach denselben Punkten verglichen: Gebühren, Hebel, Markttiefe, Produkte, Verfügbarkeit nach Ländern, Identitätsprüfung, Regulierung und Empfehlungsangebote. Jeder Vergleich nutzt die Zahlen von den eigenen Websites der Börsen.`,
    quickAnswer: "Kurz gesagt",

    pickTitle: "Wähle zwei Börsen für den Vergleich",
    pickText: (others) =>
      `Jeder Kasten stellt eine Börse den anderen ${others} gegenüber. Jedes Paar hat genau eine Seite, „Binance vs OKX“ und „OKX vs Binance“ führen also zum selben Vergleich.`,
    alternativesOf: (e) => `${e.name} Alternativen`,
    referralCodeOf: (e) => `${e.name} Empfehlungscode`,

    tableTitle: (exchangeCount) => `Alle ${exchangeCount} Börsen nebeneinander`,
    tableText: "Neukundenangebote, Standardgebühren (ohne VIP), Hebel und Markttiefe aller Börsen in einer Tabelle.",
    tableNote: (date, marketDate) =>
      `Gebühren: Standardstufe, wie von den Börsen veröffentlicht, geprüft am ${date}. Open Interest und Märkte: CoinMarketCap, ${marketDate}.`,

    alternativesTitle: "Eine Börse gegen alle anderen",
    alternativesText: (others) =>
      `Du schwankst nicht zwischen zwei Börsen, sondern suchst Ersatz? Die Alternativen-Seiten messen eine Börse auf einmal an den anderen ${others} und zeigen, welche davon dein Land akzeptieren.`,

    faqTitle: "Börsenvergleich – FAQ",

    ctaTitle: "Entschieden? Registriere dich mit einem Empfehlungscode",
    ctaText: (exchangeCount) => `Geprüfte Codes für alle ${exchangeCount} Börsen – ein Konto für Spot und Futures, ohne Zusatzkosten.`,
    ctaButton: "Alle Empfehlungscodes ansehen",
  },
};
