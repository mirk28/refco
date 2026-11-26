import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";
import Link from "next/link";
import type { AlternativesTexts } from "./en";

/**
 * Texts of the "[Exchange] alternatives" pages in German. Same keys as `./en.tsx`.
 * Wording: "Börse", "Gebühren", "Empfehlungscode", "du". Exchange names without article ("bei Binance", "von OKX").
 * `title` and `keywords` use the search form ("Binance Alternativen"); visible text uses "Binance-Alternativen".
 */

/** "in" + article for the country names of the comparison: "in den USA", "im Vereinigten Königreich", "in Japan". */
const inCountryForms: Record<string, string> = {
  USA: "in den USA",
  "Vereinigte Staaten": "in den Vereinigten Staaten",
  "Vereinigten Staaten": "in den Vereinigten Staaten",
  "Vereinigtes Königreich": "im Vereinigten Königreich",
  "Vereinigte Königreich": "im Vereinigten Königreich",
  Großbritannien: "in Großbritannien",
  Niederlande: "in den Niederlanden",
  "Vereinigte Arabische Emirate": "in den Vereinigten Arabischen Emiraten",
  "Vereinigten Arabischen Emirate": "in den Vereinigten Arabischen Emiraten",
  VAE: "in den VAE",
};
/** Fallback for a name with an article that is not in the table above. */
const articleIn: Record<string, string> = { die: "in der", das: "im", der: "im" };

/** Accepts the name with or without article ("die USA" / "USA") and an optional bracket ("Niederlande (Holland)"). */
const inCountry = (country: string) => {
  const m = /^(die|das|der)\s+(.+)$/i.exec(country.trim());
  const bare = m ? m[2] : country.trim();
  const paren = bare.indexOf(" (");
  const head = paren > 0 ? bare.slice(0, paren) : bare;
  const tail = paren > 0 ? bare.slice(paren) : "";
  const form = inCountryForms[head];
  if (form) return form + tail;
  return m ? `${articleIn[m[1].toLowerCase()]} ${bare}` : `in ${bare}`;
};

export const de: AlternativesTexts = {
  /* ------------------------------- metadata ------------------------------- */
  // Vier Formulierungen, je Börse fest gewählt.
  title: (x, n, shortMonthYear) =>
    fit(
      TITLE_MAX,
      ...[
        [`${x.name} Alternativen (${shortMonthYear}): ${n} Börsen im Vergleich`],
        [`Die ${n} besten ${x.name} Alternativen (${shortMonthYear}) – Gebühren & Boni`, `Die ${n} besten ${x.name} Alternativen: Gebühren & Boni`],
        [`Welche ${x.name} Alternativen lohnen sich? ${n} Börsen im Vergleich`],
        [`${x.name} Alternativen ${yearOf(shortMonthYear)}: Gebühren, Hebel & KYC im Vergleich`, `${x.name} Alternativen ${yearOf(shortMonthYear)}: Gebühren & KYC im Vergleich`],
      ][variant(4, x.slug)],
      `${x.name} Alternativen: ${n} Börsen im Vergleich`,
      `${x.name} Alternativen (${shortMonthYear})`,
    ),
  description: (x, names, n, former, monthYear) =>
    fit(
      DESC_MAX,
      `${names}: ${n} Alternativen zu ${x.name}${former ? ` (${former})` : ""} im Vergleich – Gebühren, Hebel, KYC, Länder, Empfehlungscodes. Stand: ${monthYear}.`,
      `${names}: ${n} Alternativen zu ${x.name} im Vergleich – Gebühren, Hebel, KYC, Länder, Empfehlungscodes. Stand: ${monthYear}.`,
      `${names}: ${n} Alternativen zu ${x.name} im Vergleich nach Gebühren, Hebel, KYC, Ländern und Empfehlungscodes.`,
    ),
  keywords: (x, alts, former) => [
    `${x.name} Alternativen`,
    `${x.name} Alternative`,
    `Börsen wie ${x.name}`,
    `beste ${x.name} Alternativen`,
    `${x.name} Konkurrenz`,
    `${x.name} Alternative niedrigere Gebühren`,
    `${x.name} Alternative ohne KYC`,
    ...(former ? [`${former} Alternativen`, `${former} Alternative`] : []),
    ...alts.map((a) => `${a.name} vs ${x.name}`),
  ],
  crumbHome: "Startseite",
  crumbReferral: (name) => `${name}-Empfehlungscode`,
  crumbAlternatives: (name) => `${name}-Alternativen`,
  listLdName: (name) => `${name}-Alternativen`,
  listLdDescription: (name) => `Börsen im Vergleich mit ${name}, sortiert nach dem Derivate-Ranking von CoinMarketCap.`,
  howToLdName: (name) => `So wechselst du von ${name} zu einer anderen Börse`,
  howToLdDescription: (name) => `Was du in welcher Reihenfolge prüfen solltest, wenn du von ${name} zu einer anderen Kryptobörse wechselst.`,
  ogTitle: (name) => `${name}-Alternativen`,
  ogSubtitle: (names) => `${names} – Gebühren, Hebel, KYC und Länder im Vergleich`,

  /* --------------------------------- words --------------------------------- */
  /** Joins the last two names of a list of links: " und ". */
  and: () => " und ",
  noneOfThem: "Keine davon",

  /* ---------------------------------- hero ---------------------------------- */
  updated: (date) => `Geprüft und aktualisiert am ${date}`,
  h1: (name, n) => `${name}-Alternativen: ${n} Börsen im Vergleich`,
  quickAnswer: "Kurz gesagt",
  chipsLabel: "Was verglichen wird",
  chips: (n, products, countries) => [`${n} Börsen`, "Gebühren & Hebel", `${products} Produkte`, `${countries} Länder`, "KYC & Regulierung", "Empfehlungscodes"],
  glanceTitle: (name) => `${name}-Alternativen auf einen Blick`,
  glanceIntro: "Wofür sich jede am besten eignet – mit ihren Standardgebühren für Futures (Maker / Taker).",
  glanceOrder: (marketDate) => `Reihenfolge: Derivate-Ranking von CoinMarketCap, ${marketDate}. Der Handel mit Hebel ist hochriskant.`,
  onThisPage: "Auf dieser Seite",
  toc: (name, n) => [
    ["at-a-glance", "Auf einen Blick"],
    ["why", `Warum von ${name} wechseln?`],
    ["alternatives", `Die ${n} Alternativen`],
    ["by-need", "Beste Wahl je nach Bedarf"],
    ["fees", "Gebühren"],
    ["products", "Produkte"],
    ["countries", "Länder"],
    ["kyc", "Verifizierung (KYC)"],
    ["safety", "Regulierung & Reserven"],
    ["referral-codes", "Empfehlungscodes"],
    ["switch", "So wechselst du"],
    ["faq", "Häufige Fragen"],
    ["sources", "Quellen"],
  ],

  /* ------------------------------- at a glance ------------------------------ */
  comparedTitle: (name, monthYear) => `${name}-Alternativen im Vergleich (${monthYear})`,
  comparedIntro: (name, n, date) =>
    `Die ${n} Alternativen und zum Vergleich ${name} selbst. Bei den Gebühren stehen die Standardsätze (ohne VIP-Stufe), die jede Börse veröffentlicht, als Maker / Taker; beim Hebel das Maximum, das sie dokumentiert; beim Empfehlungscode der Code, mit dem du dich registrieren kannst. Alle Zahlen haben wir am ${date} direkt auf der Website der jeweiligen Börse abgelesen.`,
  comparedCaption: (name, n) => `${name} und ${n} Alternativen: wofür sich jede am besten eignet, Gebühren, Hebel und Empfehlungscode`,
  colExchange: "Börse",
  colBestFor: "Ideal für",
  colFuturesFees: "Futures-Gebühren",
  colSpotFees: "Spot-Gebühren",
  colMaxLeverage: "Max. Hebel",
  colReferralCode: "Empfehlungscode",
  colAction: "Aktion",
  forComparison: "zum Vergleich",
  signUp: "Registrieren",
  comparedOrder: (marketDate) => `Reihenfolge der Alternativen: Derivate-Ranking von CoinMarketCap, ${marketDate}.`,

  /* ----------------------------------- why ---------------------------------- */
  whyTitle: (name) => `Warum eine Alternative zu ${name} suchen?`,
  whyIntro: (name, sourcesHref) => (
    <>
      Das sind die Punkte, an denen {name} selbst Grenzen setzt – jeder davon stammt von den eigenen Seiten der Börse (siehe die{" "}
      <Link href={sourcesHref}>Quellenliste auf unserer {name}-Seite</Link>). Betrifft dich keiner davon, ist es eine völlig vernünftige Wahl, bei {name} zu
      bleiben.
    </>
  ),
  stayTitle: (name) => `${name} bleibt die richtige Wahl, wenn …`,
  stayOutro: (name, code, href) => (
    <>
      Du hast dich entschieden zu bleiben? Auf unserer <Link href={href}>Seite zum {name}-Empfehlungscode</Link> findest du den Code {code}, die Schritte zur
      Registrierung und das aktuelle Neukundenangebot.
    </>
  ),

  /* ------------------------------ alternatives ------------------------------ */
  detailTitle: (name, n) => `Die ${n} besten ${name}-Alternativen im Detail`,
  detailIntro: (name) =>
    `Jede Alternative wird an denselben Punkten mit ${name} gemessen: Gebühren, Hebel, Marktgröße, Verifizierung, Regeln für Empfehlungscodes, Produkte und die Länder, die sie akzeptiert. Unter „Vorteile“ stehen nur Unterschiede, die sich an den eigenen Zahlen der Börsen ablesen lassen.`,
  rowFuturesFees: "Futures-Gebühren (Maker / Taker)",
  rowSpotFees: "Spot-Gebühren (Maker / Taker)",
  rowMaxLeverage: "Max. Hebel",
  rowAssets: "Gelistete Kryptowerte",
  rowOpenInterest: "Open Interest (Derivate)",
  rowUsers: "Nutzer",
  rowFounded: "Gegründet",
  rowKyc: "Identitätsprüfung",
  rowAddLater: "Empfehlungscode später nachtragen?",
  rowOffer: "Neukundenangebot",
  bestFor: (role) => `Ideal für: ${role}`,
  asAlternative: (name) => `als Alternative zu ${name}`,
  chooseIf: (a, x) => `Wähle ${a} statt ${x}, wenn …`,
  thinkTwiceIf: "Überleg es dir zweimal, wenn …",
  whereAhead: (a, x) => `Vorteile von ${a} gegenüber ${x}`,
  whereBehind: (x) => `Vorteile von ${x}`,
  noAdvantage: "Kein messbarer Vorteil bei den Punkten, die wir vergleichen.",
  codeLabel: (name) => `${name}-Empfehlungscode`,
  signUpOn: (name) => `Bei ${name} registrieren`,
  linkReferral: (name, code) => `${name}-Empfehlungscode ${code}: Angebot, Schritte zur Registrierung und KYC`,
  linkVersus: (a, x) => `${a} vs ${x}: der komplette Direktvergleich`,
  linkAlternatives: (name) => `${name}-Alternativen`,
  sideBySide: (a, x) => `${a} vs ${x}: alle Zahlen nebeneinander`,
  sideBySideCaption: (a, x) => `${a} vs ${x}: Gebühren, Hebel, Kryptowerte, Verifizierung und Regeln für Empfehlungscodes`,
  versusHead: (a, x) => `${a} vs ${x}`,

  /* --------------------------------- by need -------------------------------- */
  needTitle: (name) => `Die beste ${name}-Alternative je nach Bedarf`,
  needIntro: (n) => `Welche der ${n} vorn liegt, hängt davon ab, was du suchst. Die Tabelle beantwortet das für jeden Bedarf einzeln – anhand der Zahlen, ohne eigenes Ranking.`,
  needCaption: (name) => `Beste ${name}-Alternative nach Bedarf`,
  needColWant: "Du suchst …",
  needColLook: "Schau dir an",
  needColWhy: "Warum",
  needLowestFutures: "Niedrigste Futures-Gebühren",
  needLowestSpot: "Niedrigste Spot-Gebühren",
  needHighestLeverage: "Höchster Hebel",
  needDeepest: "Größte Markttiefe bei Derivaten",
  needMostMarkets: "Die meisten Derivatemärkte",
  needMica: "MiCA-zugelassene Plattform für den EWR",
  needAddLater: "Empfehlungscode auch nach der Registrierung eintragbar",
  whyStandardTier: (fees) => `${fees} Maker / Taker in der Standardstufe`,
  whyOpenInterest: (amount, marketDate) => `${amount} Open Interest (CoinMarketCap, ${marketDate})`,
  whyMarkets: (markets, marketDate) => `${markets} Märkte (CoinMarketCap, ${marketDate})`,
  whyFeature: "Auf der eigenen Website der Börse ausgewiesen – was genau angeboten wird, steht unter „Produkte“",
  needNotFound: (n) => `Bei unserer Prüfung auf den Websites der ${n} Alternativen nicht gefunden.`,

  /* ---------------------------------- fees ---------------------------------- */
  feesTitle: (name) => `Gebühren: ${name} und die Alternativen im Vergleich`,
  feesIntro:
    "Alle sieben Börsen arbeiten mit einem Maker-Taker-Modell: Limit-Orders, die dem Orderbuch Liquidität hinzufügen, zahlen die Maker-Gebühr, Orders, die Liquidität entnehmen, die Taker-Gebühr. Die Tabelle zeigt die Standardstufe – also die Sätze, die ein neues Konto zahlt, bevor eine VIP-Stufe oder ein Token-Rabatt greift.",
  feesCaption: (name) => `Standardgebühren für Spot und Futures von ${name} und den Alternativen`,
  colFuturesMaker: "Futures-Maker",
  colFuturesTaker: "Futures-Taker",
  colSpotMaker: "Spot-Maker",
  colSpotTaker: "Spot-Taker",
  colOtherMarkets: "Weitere Märkte (Maker / Taker)",
  feesNote: (date) => `Standardsätze (ohne VIP-Stufe), wie von der jeweiligen Börse veröffentlicht, geprüft am ${date}. Gebühren ändern sich – kontrolliere sie vor dem Handel direkt bei der Börse.`,
  cheaperTitle: (name) => `Welche Börse ist günstiger als ${name}?`,
  tokenTitle: "Token-Rabatte und Kleingedrucktes",
  noTokenDiscount: "Ein Rabatt, wenn du die Gebühren mit einem Börsen-Token bezahlst, ist nicht veröffentlicht.",

  /* -------------------------------- products -------------------------------- */
  productsTitle: "Produkte: Das bietet jede Börse",
  productsIntro: (date) =>
    `Ein Haken bedeutet, dass die Börse das Produkt auf ihrer eigenen Website zeigt. Ein Strich bedeutet, dass wir dort am ${date} keine Seite dazu gefunden haben – ein Beweis, dass es das Produkt nicht gibt, ist das nicht. Das Angebot kann je nach Land abweichen, vor allem auf regionalen Plattformen.`,
  productsCaption: (name) => `Produkte von ${name} und den Alternativen`,
  colProduct: "Produkt",
  productDetailsTitle: "Produktdetails je Börse",
  productDetails: (name) => `${name}: Produkte im Detail`,
  offered: "Angeboten",
  notOffered: "Nicht angeboten",
  noPageFound: "Keine Seite auf der eigenen Website der Börse gefunden",

  /* -------------------------------- countries ------------------------------- */
  countriesTitle: (name) => `Verfügbarkeit: ${name} und die Alternativen nach Ländern`,
  countriesIntro: (count) =>
    `Wo du wohnst, ist der häufigste Grund, warum du eine Alternative brauchst. Die Tabelle zeigt für ${count} Länder, was in den eigenen Bedingungen der jeweiligen Börse steht. „Regionale Website“ heißt: Die Börse bedient das Land über eine separate Plattform mit eigenen Produkten, Gebühren und Limits.`,
  countriesCaption: (name) => `Verfügbarkeit von ${name} und den Alternativen nach Ländern`,
  colCountry: "Land",
  legendRestricted: "für Einwohner gesperrt – laut den eigenen Bedingungen oder Hinweisen der Börse",
  legendRegional: "über eine separate regionale Plattform bedient",
  legendPartial: "nur einige Produkte oder Regionen",
  legendOpen: (date) => `am ${date} nicht auf der Liste der gesperrten Länder`,
  countriesNote:
    "„Nicht gesperrt“ ist keine Garantie dafür, dass jedes Produkt in diesem Land angeboten wird. Maßgeblich sind die Bedingungen der Börse zum Zeitpunkt deiner Registrierung, und alle diese Börsen verbieten es, eine Sperre per VPN oder mit falschen Angaben zu umgehen.",
  countryHeading: (name, country) => `${name}-Alternativen ${inCountry(country)}`,
  restrictedTitle: "Gesperrte Länder und regionale Plattformen je Börse",
  whereNotAvailable: (name) => `Wo ist ${name} nicht verfügbar?`,
  regionalPlatforms: "Regionale Plattformen:",

  /* ----------------------------------- kyc ---------------------------------- */
  kycTitle: (name) => `Verifizierung: Gibt es eine ${name}-Alternative ohne KYC?`,
  kycIntro: (n) =>
    `Unter diesen ${n} nicht. Jede Börse in diesem Vergleich verlangt von Neukunden eine Identitätsprüfung, und bei den meisten bleiben Einzahlungen oder der Handel gesperrt, bis sie abgeschlossen ist. Die Unterschiede liegen darin, was ein nicht verifiziertes Konto trotzdem noch kann.`,
  kycCaption: (name) => `Identitätsprüfung bei ${name} und den Alternativen`,
  colKyc: "Identitätsprüfung",
  kycDetailsTitle: "Was jede Börse zur Verifizierung sagt",
  kycQuestion: (name) => `Brauche ich bei ${name} eine Identitätsprüfung (KYC)?`,

  /* --------------------------------- safety --------------------------------- */
  safetyTitle: "Regulierung, Reservenachweis und Schutzfonds",
  safetyIntro:
    "Keine zentralisierte Börse ist frei von Risiken. Vergleichen lässt sich, was jede über sich selbst veröffentlicht: wo sie lizenziert ist, ob sie ihre Reserven nachweist und ob sie einen Fonds für den Notfall vorhält.",
  safetyCaption: (name) => `Regulierung, Reservenachweis und Schutzfonds von ${name} und den Alternativen`,
  colLicences: "Von der Börse genannte Lizenzen",
  colReserves: "Reservenachweis",
  colFund: "Schutzfonds",
  noneNamed: "Keiner genannt",
  safetyNote: "Die Reservequoten sind eigene Angaben der Börsen zu den jeweils genannten Stichtagen. Lass Guthaben nur auf einer Börse liegen, auf der du aktiv handelst.",

  /* ----------------------------- referral codes ----------------------------- */
  codesTitle: (name) => `Empfehlungscodes für die ${name}-Alternativen`,
  codesIntro:
    "Wenn du ein Konto bei einer der Alternativen eröffnest, dann mit Empfehlungscode: Er kostet nichts, erhöht nie deine Gebühren und schaltet das Neukundenangebot der Börse frei. Am wichtigsten ist die letzte Spalte – bei mehreren Börsen lässt sich ein vergessener Code nachträglich nicht mehr eintragen.",
  codesCaption: (name) => `Empfehlungscodes von ${name} und den Alternativen`,
  colOffer: "Neukundenangebot",
  colWhere: "Wo du den Code eingibst",
  colLater: "Nachträglich eintragbar?",
  codesRow: (name) => `${name}-Empfehlungscode`,
  codesNote: (date) => `Angebote geprüft am ${date}. Willkommensboni sind an Aufgaben gebunden, setzen eine Identitätsprüfung voraus und unterscheiden sich je nach Land.`,

  /* --------------------------------- switch --------------------------------- */
  switchTitle: (name) => `So wechselst du von ${name} zu einer anderen Börse`,
  switchIntro: "Der Umzug macht weniger Arbeit, als es klingt – solange du die Reihenfolge einhältst: zuerst das Konto, dann die Verifizierung, zuletzt das Guthaben.",

  /* ----------------------------------- faq ---------------------------------- */
  faqTitle: (name) => `${name}-Alternativen – häufige Fragen`,
  faqIntro: (name, count) => `${count} Fragen zum Umstieg von ${name}: welche Börse wozu passt, Gebühren, Länder, Verifizierung und wie der Wechsel gelingt.`,

  /* --------------------------------- sources -------------------------------- */
  sourcesTitle: "Quellen: Woher stammen diese Zahlen?",
  sourcesIntro: (date, marketDate) =>
    `Alles, was auf dieser Seite zu Gebühren, Hebel, Produkten, Verifizierung, Ländern, Lizenzen, Reserven und Regeln für Empfehlungscodes steht, haben wir am ${date} auf den eigenen Websites und in den Hilfecentern der Börsen nachgelesen. Open Interest und die Zahl der Derivatemärkte stammen aus dem Derivate-Ranking von CoinMarketCap (${marketDate}). Börsen ändern ihre Bedingungen ohne Vorankündigung – maßgeblich sind deshalb die unten verlinkten Seiten.`,
  sourcesSummary: (name, count, focus) => `${name}: ${count} ${focus ? "" : "für diesen Vergleich geprüfte "}offizielle Seiten`,
  sourcesMore: (name, count, href) => (
    <>
      Gebühren, Hebel, Verifizierung, Regeln für Empfehlungscodes und die Liste der gesperrten Länder von {name}:{" "}
      <Link href={href}>
        alle {count} Quellen auf unserer {name}-Seite
      </Link>
      .
    </>
  ),

  /* ---------------------------------- more ---------------------------------- */
  moreTitle: "Weitere Börsenvergleiche",
  headToHeadTitle: (name) => `${name} im Direktvergleich`,
  headToHeadIntro: "Du hast eine Alternative in der engeren Wahl? Die Direktvergleiche gehen tiefer auf Gebühren, Produkte, Länder und Neukundenangebote ein:",
  otherAlternativesTitle: "Alternativen zu den anderen Börsen",
  otherAlternativesIntro: "Derselbe Vergleich, jeweils aus Sicht einer der anderen Börsen:",
  referralLink: (name, code) => `${name}-Empfehlungscode ${code}`,
  allComparisons: "Alle Börsenvergleiche",

  /* ------------------------------ notice and CTA ----------------------------- */
  risk: (disclosureHref) => (
    <>
      <strong>Risikohinweis:</strong> Krypto-Derivate sind komplexe Instrumente. Ein Hebel vervielfacht Gewinne und Verluste, und du kannst deine gesamte
      Margin innerhalb von Minuten verlieren. Diese Seite dient nur der Information und ist keine Finanzberatung. Wenn du dich über unsere Links registrierst,
      erhalten wir möglicherweise eine Provision – siehe unseren <Link href={disclosureHref}>Affiliate-Hinweis</Link>. An den Zahlen ändert das nichts: Es
      sind die eigenen Angaben der Börsen.
    </>
  ),
  ctaTitle: (name) => `Deine ${name}-Alternative gefunden?`,
  ctaText: "Registriere dich mit einem geprüften Empfehlungscode – ein Konto für Spot und Futures, ohne Zusatzkosten.",
  ctaButton: "Alle Empfehlungscodes ansehen",
};
