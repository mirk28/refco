import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";
import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";

/**
 * Interface texts in German. Same keys as `en.tsx`.
 *
 * Wording: "Empfehlungscode" for referral code (main keyword, "Referral-Code" as second term), "Börse" /
 * "Kryptobörse" for the exchange, "Gebühren" for fees, "Spot" and "Futures" for the markets, informal address
 * ("du"). Exchange names stand without article ("bei Binance", "von Bybit"). Numbers in German notation
 * (10.000 USDT, 0,02 %, 34,1 Mrd. $). Field and button names of the exchanges stay in English, because only
 * the English interface was checked.
 */

const NBSP = "\u00a0";
const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A, B und C" */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} und ${items[items.length - 1]}`);
/** "A, B oder C" – for alternatives such as the sign-up methods. */
const orList = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} oder ${items[items.length - 1]}`);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** Sentence starters of the data texts that are lower-cased inside a sentence ("Bis zu 150x" → "Hebel bis zu 150x"). Nouns keep their capital. */
const starters = ["Bis zu", "Ja –", "Nein –", "Auf Anfrage –", "Du "];
const lcStart = (s: string) => (starters.some((w) => s.startsWith(w)) ? s.charAt(0).toLocaleLowerCase("de-DE") + s.slice(1) : s);
/** A step title as a sentence in a running answer. */
const asSentence = (s: string) => (/[.!?:]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** A number in German notation: 1234.5 → "1.234,5". */
const deNumber = (n: number, digits: number) => {
  const [int, dec] = n.toFixed(digits).split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return dec ? `${grouped},${dec}` : grouped;
};
/** Billions of US dollars: 34.1 → "34,1 Mrd. $". */
const mrd = (n: string) => `${n}${NBSP}Mrd.${NBSP}$`;

export const de: Dictionary = {
  list,

  format: {
    billions: (n) => mrd(deNumber(n, n >= 10 ? 1 : 2)),
    billionsExact: (n) => mrd(deNumber(n, 2)),
    billionsFloor: (n) => mrd(`${deNumber(Math.floor(n), 0)}+`),
  },

  meta: {
    siteTitle: `${site.name} – Geprüfte Empfehlungscodes für Kryptobörsen`,
    siteDescription:
      "Geprüfte Empfehlungscodes (Referral-Codes) für Binance, OKX, Bybit, Bitget, Gate, KuCoin und MEXC – mit einem einzigen Registrierungslink sicherst du dir Neukundenboni und Gebührenrabatte für Spot und Futures. Gebühren, Fakten und ehrliche Vor- und Nachteile.",
  },

  layout: {
    skip: "Zum Inhalt springen",
    mainNav: "Hauptmenü",
    nav: { exchanges: "Börsen", benefits: "Vorteile", compare: "Vergleich", howItWorks: "So funktioniert’s", about: "Über uns" },
    getCodes: "Codes holen",
    homeLabel: `${site.name} – Startseite von ${site.domain}`,
    language: "Sprache",
    footerAbout:
      "Geprüfte Empfehlungscodes für die größten Kryptobörsen – Willkommensboni und Gebührenrabatte für Spot und Futures. Klare Fakten aus offiziellen Quellen.",
    referralCodes: "Empfehlungscodes",
    referralCodeOf: (name) => `${name} Empfehlungscode`,
    alternatives: "Alternativen",
    alternativesOf: (name) => `${name} Alternativen`,
    guides: "Ratgeber",
    comparisons: "Börsenvergleiche",
    howCodesWork: "So funktionieren Empfehlungscodes",
    faq: "FAQ",
    about: "Über uns & Methodik",
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutzerklärung",
    disclosure: "Affiliate-Hinweis",
    cookieSettings: "Cookie-Einstellungen",
    risk: (
      <>
        <strong>Risikohinweis:</strong> Der Handel mit Krypto-Derivaten mit Hebel ist hochriskant und kann zum Verlust deiner gesamten Einzahlung führen.
        Handle nur mit Geld, dessen Verlust du dir leisten kannst. Nichts auf dieser Website stellt eine Finanz-, Anlage- oder Steuerberatung dar.
      </>
    ),
    affiliate: (
      <>
        <strong>Affiliate-Hinweis:</strong> Manche Links sind Empfehlungslinks. Wenn du dich über sie registrierst, erhalten wir unter Umständen eine
        Provision – für dich entstehen dadurch keine Mehrkosten. Auf die Fakten, die wir veröffentlichen, hat das nie Einfluss. Namen und Logos der Börsen
        sind Marken ihrer jeweiligen Inhaber; {site.name} steht in keiner Verbindung zu ihnen und wird von ihnen weder unterstützt noch empfohlen.
      </>
    ),
  },

  consent: {
    label: "Einwilligung in die Webanalyse",
    text: (privacyHref) => (
      <>
        <strong>Analyse – du entscheidest.</strong> Wir würden gern Google Analytics nutzen, um zu sehen, welche Seiten gelesen werden. Es setzt Cookies,
        sendet Nutzungsdaten an Google und startet nur, wenn du es erlaubst. Werbe-Cookies gibt es in keinem Fall. Details:{" "}
        <Link href={privacyHref}>Datenschutzerklärung</Link>.
      </>
    ),
    decline: "Ablehnen",
    allow: "Analyse erlauben",
  },

  notFound: {
    title: "Diese Seite gibt es nicht",
    text: "Der Empfehlungscode, den du suchst, ist vielleicht umgezogen. Versuch es mit einer dieser Börsen:",
    back: "Zurück zur Startseite",
  },

  og: {
    footer: ["Geprüfte Links", "Gebühren und Fakten", "Offizielle Quellen"],
    homeAlt: "RefCo – geprüfte Empfehlungscodes für Kryptobörsen",
    homeKicker: (monthYear) => `Stand: ${monthYear}`,
    homeTitle: "Empfehlungscodes für Kryptobörsen, geprüft.",
    exchangeAlt: "Empfehlungscode, Alternativen und Vergleiche einer Kryptobörse – RefCo",
    exchangeKicker: (monthYear) => `Geprüft: ${monthYear}`,
    exchangeTitle: (e) => `${e.name} Empfehlungscode`,
    exchangeSubtitle: (e) => `${benefit(e)} · Spot & Futures mit einem Link`,
    versusBadge: "Direktvergleich",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `Futures-Gebühren ${feesA} vs. ${feesB} · Hebel ${leverageA}x vs. ${leverageB}x · KYC, Länder, Bonus`,
  },

  blocks: {
    signUpOn: (name) => `Bei ${name} registrieren`,
    signUp: "Registrieren",
    details: "Details",
    breadcrumb: "Brotkrümelnavigation",
    copy: "Kopieren",
    copied: "Kopiert ✓",
    spotMakerTaker: "Spot Maker / Taker",
    futuresMakerTaker: "Futures Maker / Taker",
    maxLeverage: "Max. Hebel",
    since: "Gegründet",
    tableCaption: "Vergleich von Kryptobörsen nach Neukundenangebot, Spot- und Futures-Gebühren, Hebel und Marktdaten",
    exchange: "Börse",
    newUserOffer: "Neukundenangebot",
    futuresFees: "Futures-Gebühren (Maker / Taker)",
    spotFees: "Spot-Gebühren",
    openInterest: "Open Interest",
    markets: "Märkte",
    action: "Aktion",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) => fit(TITLE_MAX, `Empfehlungscodes für Kryptobörsen & Boni (${monthYear})`, `Empfehlungscodes für Kryptobörsen (${monthYear})`),
    description: (monthYear) =>
      fit(
        DESC_MAX,
        `Geprüfte Empfehlungscodes für Binance, OKX, Bybit, Bitget, Gate, KuCoin und MEXC: Neukundenboni und Gebührenrabatte mit einem Link. Stand: ${monthYear}.`,
        `Geprüfte Empfehlungscodes für Binance, OKX, Bybit, Bitget, Gate, KuCoin und MEXC: Neukundenboni und Gebührenrabatte für Spot und Futures mit einem Link.`,
      ),
    listName: "Empfehlungscodes von Kryptobörsen für Spot und Futures",
    updated: (monthYear) => `Stand: ${monthYear}`,
    h1: (
      <>
        Empfehlungscodes für Kryptobörsen, <span className="hl">geprüft</span> und erklärt.
      </>
    ),
    lead: (
      <>
        Sichere dir Willkommensboni und Gebührenrabatte bei den größten Kryptobörsen der Welt – mit einer Empfehlung für Spot <em>und</em> Futures. Dazu
        die Fakten, die du für deine Wahl brauchst: Gebühren, Hebel, Lizenzen und ehrliche Vor- und Nachteile.
      </>
    ),
    browse: "Empfehlungscodes ansehen",
    seeBenefits: "Deine Vorteile ansehen",
    trust: (date) => [`Geprüft am ${date}`, "Nur offizielle Links", "Analyse nur mit deiner Einwilligung"],
    featured: "Ausgewählte Börsen",
    ticketName: (name) => `${name} Empfehlungscode`,
    ticketTag: "SPOT + FUTURES",
    stats: ["Top-Börsen für Spot & Futures", "Open Interest zusammen", "Erfasste Derivatemärkte", "Niedrigste Maker-Gebühr (MEXC)"],
    marketData: (date) => `Marktdaten: Derivate-Ranking von CoinMarketCap, Stand vom ${date}.`,

    benefitsEyebrow: "Deine Vorteile",
    benefitsTitle: `Warum über einen Empfehlungscode von ${site.name} registrieren?`,
    benefitsLead: "Gleiche Börse, gleiche Gebühren – aber mit den Neukundenvorteilen, die dir bei einer direkten Registrierung entgehen würden.",
    benefits: [
      {
        title: "Willkommensboni",
        text: "Sichere dir das Neukundenangebot der Börse – Gutscheine für Gebührenrabatte, Futures-Boni und Prämien für erledigte Aufgaben im Wert von bis zu mehreren Tausend USDT.",
      },
      {
        title: "Niedrigere Handelsgebühren",
        text: "Wo die Börse es zulässt, fließt ein Teil der Empfehlungsprovision bei jedem Trade als Rabatt an dich zurück.",
      },
      {
        title: "Spot und Futures, ein Link",
        text: "Die Empfehlung hängt an deinem Konto – sie gilt für Spot, Futures, Margin und Optionen. Einen zweiten Code brauchst du nicht.",
      },
      { title: "Keine Mehrkosten", text: "Eine Empfehlung macht deine Gebühren nie teurer. Du kannst nur gewinnen – das Programm bezahlt die Börse." },
      {
        title: "Offizielle Registrierungsseiten",
        text: "Jeder Link öffnet die Website der Börse selbst. Keine Zwischenhändler, keine Daten, die an uns weitergegeben werden.",
      },
      {
        title: "Am besten gleich bei der Registrierung",
        text: "Manche Börsen lassen dich einen Code noch 30 Tage lang nachtragen, andere gar nicht. Nutzt du den Link, bevor du dein Konto eröffnest, bist du überall auf der sicheren Seite.",
      },
    ],
    offersCaption: "Neukundenangebote nach Börse",
    offersHead: ["Börse", "Neukundenangebot mit Empfehlung", "Ein Link gilt für"],
    claim: "Sichern",
    offersNote: (date) =>
      `Angebote geprüft am ${date}. Willkommensprämien sind an Aufgaben geknüpft, setzen eine Identitätsprüfung voraus und unterscheiden sich je nach Region – die aktuellen Bedingungen zeigt jede Börse auf ihrer Registrierungsseite.`,

    exchangesEyebrow: "Empfehlungscodes",
    exchangesTitle: "Wähle deine Börse",
    exchangesLead:
      "Jede Seite erklärt die Empfehlung, die Gebühren und für wen sich die Börse am besten eignet – so registrierst du dich nur einmal, und zwar auf der richtigen Plattform.",
    sideBySide: "Im Vergleich",
    notSure: "Noch unentschlossen?",
    notSureText: (count) => `Vergleiche Gebühren, Hebel und Open Interest aller ${count} Börsen in einer Tabelle.`,
    compareExchanges: "Börsen vergleichen",

    compareTitle: "Kryptobörsen im Vergleich: Spot & Futures",
    compareLead: "Neukundenangebote, Standardgebühren (ohne VIP-Stufe) für Spot und Futures, Hebel und Markttiefe auf einen Blick.",
    compareNote: (reviewed, market) =>
      `Gebühren: Standardstufe laut Angaben der jeweiligen Börse, geprüft am ${reviewed}. Open Interest und Märkte: CoinMarketCap, ${market}. Gebühren ändern sich – prüfe sie vor dem Handel direkt bei der Börse.`,
    versusStrip: {
      title: "Zwei Börsen im Direktvergleich",
      text: (pairs, hubHref) => (
        <>
          {pairs} Paarvergleiche, in denen Gebühren, Hebel, Produkte, Länder, KYC und Empfehlungsangebote direkt nebeneinanderstehen –{" "}
          <Link href={hubHref}>alle Börsenvergleiche</Link>.
        </>
      ),
    },
    alternativesStrip: {
      title: "Suchst du eine Alternative zu deiner Börse?",
      text: (others) =>
        `Jeder Vergleich misst eine Börse an den ${others} anderen: Gebühren, Hebel, Produkte, Identitätsprüfung und die Länder, aus denen sie Kunden annimmt.`,
    },

    picksEyebrow: "Kurze Antwort",
    picksTitle: "Welche Börse passt am besten zu dir?",
    picks: [
      { label: "Höchste Liquidität", slug: "binance", why: "Größtes Open Interest und höchstes Futures-Volumen weltweit." },
      { label: "Niedrige Gebühren & Optionen", slug: "okx", why: "0,08 % / 0,10 % im Spot-Handel, 0,03 % auf Optionen und ein monatlicher Reservenachweis." },
      { label: "Aktives Futures-Trading per App", slug: "bybit", why: "Schnelle Handels-Engine und eine der besten Trading-Apps." },
      { label: "Copy Trading", slug: "bitget", why: "Kopiere erfahrene Futures-Trader automatisch." },
      { label: "Die meisten Altcoins", slug: "gate", why: "5.400+ Kryptowerte und Futures auf Nischen-Token." },
      { label: "Trading-Bots", slug: "kucoin", why: "Kostenlose Trading-Bots für Spot und Futures." },
      { label: "Niedrigste Gebühren", slug: "mexc", why: "0 % Maker-Gebühr im Spot-Handel und bei den meisten Futures-Kontrakten." },
    ],

    howEyebrow: "So funktioniert’s",
    howTitle: "So nutzt du einen Empfehlungscode in drei Schritten",
    steps: [
      {
        title: "Börse auswählen",
        text: "Vergleiche oben Gebühren, Hebel und Funktionen und öffne die Seite der Börse, die zu deinem Trading-Stil passt.",
      },
      {
        title: "Über unseren Link registrieren",
        text: "Die Empfehlung wird automatisch hinterlegt. Registriere dich mit deiner E-Mail-Adresse oder Telefonnummer, bevor du irgendwo anders ein Konto eröffnest.",
      },
      {
        title: "Verifizieren & Prämien sichern",
        text: "Schließe die Identitätsprüfung (KYC) ab, sichere dein Konto mit 2FA und sieh dir die Willkommensprämien in deinem Dashboard an.",
      },
    ],

    trustEyebrow: `Warum ${site.name}`,
    trustTitle: "Gemacht für Vertrauen, nicht für Klicks",
    trustCards: [
      { title: "Geprüfte Angebote", text: "Wir prüfen das Neukundenangebot jeder Börse und listen nur, was du tatsächlich bekommen kannst." },
      { title: "Aktuelle Fakten mit Datum", text: "Gebühren, Hebel und Lizenzen werden regelmäßig neu geprüft, und jede Seite nennt ihr Prüfdatum." },
      { title: "Datenschutz zuerst", text: "Keine Werbepixel und keine Werbe-Cookies. Die Analyse läuft nur, wenn du sie erlaubst." },
      { title: "Schnell & klar", text: "Schlanke Seiten, die auf jedem Smartphone sofort laden – zuerst die Antwort, dann die Details." },
      { title: "Ehrliche Vor- & Nachteile", text: "Wir nennen Schwächen, Vorfälle und regionale Einschränkungen – nicht nur das Marketing." },
      { title: "Risiko zuerst", text: "Ein Hebel kann eine Einzahlung schnell vernichten. Das sagen wir auf jeder Seite deutlich." },
    ],

    faqEyebrow: "FAQ",
    faqTitle: "Empfehlungscodes – häufige Fragen",
    faqs: (reviewed) => [
      {
        q: "Was ist ein Empfehlungscode bei einer Kryptobörse?",
        a: "Ein Empfehlungscode (auch Einladungscode, Referral-Code oder Referral ID genannt) ist eine kurze Kennung, die ein neues Börsenkonto mit der Person oder Website verknüpft, die die Börse empfohlen hat. Die Börsen belohnen damit beide Seiten – Neukunden erhalten meist Willkommensprämien oder einen Rabatt auf die Handelsgebühren, der Werber bekommt einen Anteil an den Gebühren.",
      },
      {
        q: "Welche Vorteile bringt ein Empfehlungscode?",
        a: "Wer sich über eine Empfehlung registriert, erhält Zugang zum Willkommensangebot der Börse – etwa bis zu 250 USDT an Empfehlungsprämien bei Bybit oder bis zu 10.000 USDT an Neukundenprämien bei MEXC – und, wenn der Werber seine Provision teilt, einen Teil der Handelsgebühren zurück, zum Beispiel 10 % für ein Jahr bei Gate. Zusätzliche Kosten entstehen dabei nicht.",
      },
      {
        q: "Gilt ein Empfehlungscode für Spot und Futures?",
        a: "Ja. Bei Binance, OKX, Bybit, Bitget, Gate, KuCoin und MEXC ist die Empfehlung an dein Konto gebunden, nicht an ein einzelnes Produkt. Eine Registrierung deckt den Spot- und den Futures-Handel ab – dazu Margin, Optionen oder Copy Trading, sofern die Börse sie anbietet.",
      },
      {
        q: "Zahle ich mehr, wenn ich mich mit einem Empfehlungscode registriere?",
        a: "Nein. Eine Registrierung über einen Empfehlungslink erhöht deine Gebühren nie. Je nach Börse und Region kannst du sogar einen Gebührenrabatt oder Willkommensbonus erhalten, den du ohne Empfehlung nicht bekommen würdest.",
      },
      {
        q: "Kann ich einen Empfehlungscode nachträglich hinzufügen?",
        a: "Das hängt von der Börse ab. Bei Binance kannst du innerhalb von 30 Tagen nach der Registrierung einen Code verknüpfen, sofern du noch nichts eingezahlt und nicht gehandelt hast, und bei MEXC kannst du innerhalb von 30 Tagen nach der Registrierung selbst einen Werber verknüpfen. KuCoin bietet im Hilfe-Center eine Anfrage “Link Referrer” an. Bybit, OKX und Bitget akzeptieren den Code nur während der Registrierung, und Gate dokumentiert keinen Weg, ihn später hinzuzufügen. Am sichersten ist es, den Link zu nutzen, bevor du dein Konto eröffnest.",
      },
      {
        q: "Welche Kryptobörse hat die niedrigsten Futures-Gebühren?",
        a: `Bei unserer letzten Prüfung (${reviewed}) hatte MEXC die niedrigsten Standardgebühren für Futures: 0 % Maker und 0,02 % Taker auf BTCUSDT. Binance, OKX und Gate verlangen in der Standardstufe 0,02 % Maker / 0,05 % Taker, Bybit 0,02 % / 0,055 %, Bitget und KuCoin 0,02 % / 0,06 %.`,
      },
      {
        q: "Welche Börse ist die beste für Krypto-Derivate?",
        a: "Das hängt davon ab, was du handelst. Binance bietet die höchste Liquidität, OKX verbindet niedrige Gebühren mit Optionen, und Bybit ist für den schnellen Handel mit Perpetual Futures gebaut. Bitget steht für Copy Trading, Gate für Altcoin-Futures, KuCoin für Bots und MEXC für die niedrigsten Gebühren.",
      },
      {
        q: "Sind diese Börsen in den USA verfügbar?",
        a: "Größtenteils nicht. Binance, Bybit, Bitget, Gate, KuCoin und MEXC führen die USA als gesperrtes oder verbotenes Land, und OKX schränkt bestimmte Rechtsgebiete der USA ein. Auch im Vereinigten Königreich, in Kanada und in der EU unterscheidet sich die Verfügbarkeit – jede Börsenseite nennt die gesperrten Länder aus den eigenen Bedingungen der Börse.",
      },
      {
        q: "Wie oft werden diese Informationen aktualisiert?",
        a: `Wir prüfen Gebühren, Hebel, Lizenzen und Marktdaten regelmäßig neu. Jede Seite zeigt das Datum ihrer letzten Prüfung; die aktuellen Daten wurden am ${reviewed} geprüft.`,
      },
    ],
    countryFaq: null,

    ctaTitle: "Sichere dir deinen Willkommensbonus",
    ctaText: "Wähle eine Börse, registriere dich mit einer geprüften Empfehlung und handle Spot und Futures mit einem einzigen Konto.",
    ctaButton: "Alle Empfehlungscodes ansehen",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    // Vier Formulierungen, je Börse fest gewählt, damit nicht alle Titel mit "<Börse> Empfehlungscode" beginnen.
    title: (e, shortMonthYear) => {
      const n = e.name, c = e.referralCode, b = benefit(e), y = yearOf(shortMonthYear);
      return [
        () => fit(TITLE_MAX, `${n} Empfehlungscode ${c} (${shortMonthYear}): ${b}`, `${n} Empfehlungscode ${c} (${shortMonthYear}) – mit Bonus`, `${n} Empfehlungscode ${c} (${shortMonthYear})`),
        () => fit(TITLE_MAX, `Code ${c}: ${n} Empfehlungscode – ${b}`, `Code ${c}: ${n} Empfehlungscode mit Bonus (${shortMonthYear})`, `Code ${c}: ${n} Empfehlungscode (${shortMonthYear})`),
        () => fit(TITLE_MAX, `${b}: ${n} Empfehlungscode ${c}`, `Neukundenbonus ${y}: ${n} Empfehlungscode ${c}`, `${n} Empfehlungscode ${c} (${y})`),
        () => fit(TITLE_MAX, `So nutzt du den ${n} Empfehlungscode ${c} (${shortMonthYear})`, `So nutzt du den ${n} Empfehlungscode ${c}`, `${n} Empfehlungscode ${c}`),
      ][variant(4, e.slug)]();
    },
    description: (e, monthYear) =>
      fit(
        DESC_MAX,
        `${e.name} Empfehlungscode ${e.referralCode}: ${benefit(e)}. Wo du ihn eingibst, Registrierung, KYC und Gebühren – geprüft im ${monthYear}.`,
        `${e.name} Empfehlungscode ${e.referralCode}: ${benefit(e)}. Eingabe, Registrierung, KYC und Gebühren – Stand: ${monthYear}.`,
        `${e.name} Empfehlungscode ${e.referralCode}: ${benefit(e)}. Wo du ihn eingibst, Registrierung, KYC und Gebühren.`,
        `${e.name} Empfehlungscode ${e.referralCode}: wo du ihn eingibst, Registrierung Schritt für Schritt, KYC und Gebühren – geprüft im ${monthYear}.`,
      ),
    keywords: (e) => {
      const same = (k: string) => k.toLocaleLowerCase("de-DE").replace(/[\s-]/g, "");
      return [
        `${e.name} Empfehlungscode`,
        `${e.name} Empfehlungscode ${e.referralCode}`,
        `${e.name} Referral-Code`,
        `${e.name} ${e.referral.codeName}`,
        `${e.name} Empfehlungslink`,
        `${e.name} Einladungscode`,
        `${e.name} Bonus für Neukunden`,
        `${e.name} registrieren`,
        `${e.name} KYC`,
        `${e.name} Futures Gebühren`,
      ].filter((k, i, all) => all.findIndex((x) => same(x) === same(k)) === i);
    },
    toc: {
      "code-facts": "Code auf einen Blick",
      benefits: "Deine Vorteile",
      "use-code": "So nutzt du den Code",
      "how-to": "So registrierst du dich",
      verification: "Identitätsprüfung (KYC)",
      "key-facts": "Eckdaten",
      fees: "Gebühren",
      about: "Über die Börse",
      "pros-cons": "Vor- & Nachteile",
      "best-for": "Für wen geeignet",
      safety: "Sicherheit & Verfügbarkeit",
      faq: "FAQ",
      sources: "Quellen",
      alternatives: "Alternativen & Vergleiche",
    },
    onThisPage: "Auf dieser Seite",
    crumbHome: "Startseite",
    crumbCodes: "Empfehlungscodes",
    crumbPage: (e) => `${e.name} Empfehlungscode`,

    /* JSON-LD */
    offerName: (e) => `${e.name} Empfehlungscode ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}. Eine Empfehlung gilt für ${list(e.referralCovers)}.`,
    offerCategory: "Registrierung bei einer Kryptobörse",
    howToName: (e) => `So registrierst du dich bei ${e.name} mit dem Empfehlungscode ${e.referralCode}`,
    howToDescription: (e) =>
      `Die Schritte der Registrierung bei ${e.name}, wie die Börse sie dokumentiert – einschließlich der Stelle, an der der Empfehlungscode ${e.referralCode} eingegeben wird.`,

    /* Hero */
    updated: (date) => `Geprüft und aktualisiert am ${date}`,
    h1: (e) => `${e.name} Empfehlungscode: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – dazu eine Empfehlung für {list(e.referralCovers)}. Hier erfährst du, was du bekommst, was der Handel kostet und ob{" "}
        {e.name} die richtige Börse für dich ist.
      </>
    ),
    quickAnswer: "Kurze Antwort",
    highlights: "Das Wichtigste",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futures ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `Hebel ${lcStart(shortLeverage(e))}`,
      `${e.market.markets} Derivatemärkte`,
      `Gegründet ${e.founded}`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `Deine Registrierung bei ${e.name}`,
    appliedByLink: "Über diesen Link wird die Empfehlung automatisch hinterlegt.",
    goesToOfficial: (domain) => `Führt direkt zur offiziellen Website ${domain}.`,
    codeLabel: "Empfehlungscode",
    noCodeToType: "Kein Code zum Eintippen – wird über den Link übernommen",
    officialSite: (domain) => `Offizielle Website: ${domain}`,
    yourBenefits: "Deine Vorteile",
    freeNeverRaises: "Kostenlos – eine Empfehlung erhöht deine Gebühren nie",
    qrLabel: (e) => `QR-Code: in der ${e.name}-App mit dem Empfehlungscode ${e.referralCode} registrieren`,
    preferApp: "Lieber per App?",
    scan: (e) => (
      <>
        Scanne den QR-Code mit deiner Handykamera, um {e.name} zu öffnen
        {e.referralCode ? (
          <>
            {" "}
            – Empfehlung <strong>{e.referralCode}</strong> inklusive
          </>
        ) : null}
        . Funktioniert unter iOS und Android.
      </>
    ),
    riskLine: (e, links) => (
      <>
        Hebelhandel ist hochriskant. Nicht in jedem Land verfügbar – siehe <a href="#safety">Verfügbarkeit</a> oder die{" "}
        <Link href={links.alternatives}>Alternativen zu {e.name}</Link>.
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `${e.name} Empfehlungscode ${e.referralCode} auf einen Blick`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        Der {e.name} Empfehlungscode (Referral-Code) für {monthYear} lautet <strong>{e.referralCode}</strong>. Die Tabelle fasst zusammen, was er bewirkt,
        wo er eingegeben wird und was {e.name} von einem neuen Konto verlangt – jede Zeile haben wir am {date} mit den Seiten von {e.name} selbst
        abgeglichen.
      </>
    ),
    codeFactsCaption: (e) => `${e.name} Empfehlungscode ${e.referralCode}: Eckdaten`,
    codeFacts: (e, date) => [
      [`${e.name} Empfehlungscode`, <strong key="code">{e.referralCode}</strong>],
      [`Bezeichnung bei ${e.name}`, e.referral.codeName],
      ["Vorteil für Neukunden", benefit(e)],
      ["Wo eingeben?", e.referral.whereShort],
      ["Nachträglich hinzufügen?", e.referral.afterSignupShort],
      ["Gilt für", e.referralCovers.join(", ")],
      ["Identitätsprüfung (KYC)", e.signup.kycShort],
      ["Kosten", "Kostenlos – deine Gebühren steigen dadurch nicht"],
      ["Zuletzt geprüft", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `Deine Vorteile mit dem ${e.name} Empfehlungscode`,
    benefitsIntro: (e) => (
      <>
        Die Registrierung mit dem {e.name} Empfehlungscode <strong>{e.referralCode}</strong> kostet dich nichts extra. Folgendes bietet {e.name} neuen
        Konten derzeit an. Derselbe Code gilt für <strong>{list(e.referralCovers)}</strong> – einen eigenen Code für Spot und einen für Futures brauchst du
        nicht.
      </>
    ),
    offerChecked: (date) => `Neukundenangebot · geprüft am ${date}`,
    appliedWhenRegistering: "gilt, wenn du dich über diese Empfehlung registrierst",
    noExtraCost: "Keine Mehrkosten – durch eine Empfehlung werden deine Handelsgebühren nie höher",
    oneReferralCovers: "Eine Empfehlung gilt für:",
    claimOffer: (e) => `Willkommensangebot von ${e.name} sichern`,
    tasksTitle: (e) => `Willkommensangebot von ${e.name}: Aufgaben und Prämien`,
    tasksCaption: (e) => `Neukundenaufgaben bei ${e.name} und die Prämie für jede Aufgabe`,
    task: "Aufgabe",
    reward: "Prämie",
    tasksNote: (e, date) =>
      `Stand der Angaben von ${e.name}: ${date}. Angebote unterscheiden sich von Land zu Land und ändern sich häufig – maßgeblich sind die Bedingungen, die dir nach der Registrierung in deinem Konto angezeigt werden.`,

    /* How to use the code */
    useCodeTitle: (e) => `So nutzt du den ${e.name} Empfehlungscode ${e.referralCode}`,
    whereToEnter: (e) => `Wo gebe ich den ${e.name} Empfehlungscode ein?`,
    forgotCode: "Code vergessen? Nachträglich hinzufügen",
    asInvited: "Was du als eingeladener Nutzer bekommst",
    interfaceNote: (e) => (
      <>
        Die Namen von Feldern und Schaltflächen in Anführungszeichen stammen aus der englischen Oberfläche von {e.name}, die wir geprüft haben; in der
        deutschen Oberfläche können sie anders heißen.
      </>
    ),

    /* Registration */
    howToTitle: (e) => `So registrierst du dich bei ${e.name} – Schritt für Schritt`,
    howToIntro: (e) => (
      <>
        Registrieren kannst du dich bei {e.name} mit {orList(e.signup.methods)}. Hier sind die Schritte, wie {e.name} sie dokumentiert – mit der Stelle,
        an der der Empfehlungscode <strong>{e.referralCode}</strong> ins Spiel kommt.
      </>
    ),
    startRegistration: (e) => `Registrierung bei ${e.name} starten`,

    /* Verification */
    kycTitle: (e) => `Identitätsprüfung (KYC) bei ${e.name}`,
    verification: "Identitätsprüfung",
    minAge: "Mindestalter",
    documents: "Akzeptierte Dokumente",

    /* Key facts */
    factsTitle: (e) => `${e.name} im Überblick`,
    founded: "Gegründet",
    headquarters: "Hauptsitz",
    futuresFees: "Futures-Gebühren (Maker / Taker)",
    spotFees: "Spot-Gebühren (Maker / Taker)",
    maxLeverage: "Maximaler Hebel",
    assets: "Angebot",
    openInterest: "Open Interest",
    volume24h: "Derivatevolumen (24 h)",
    users: "Nutzer",
    regulation: "Regulierung",
    factsNote: (date) =>
      `Open Interest, Volumen und Anzahl der Märkte: Derivate-Ranking von CoinMarketCap, ${date}. Gebühren: Standardstufe zum Prüfdatum.`,

    /* Fees */
    feesTitle: (e) => `${e.name} Gebühren erklärt`,
    feesIntro: (e) =>
      `${e.name} arbeitet mit einem Maker-Taker-Modell: Orders, die dem Orderbuch Liquidität hinzufügen (Limit-Orders), zahlen die Maker-Gebühr; Orders, die ihm Liquidität entziehen (Market-Orders), zahlen die Taker-Gebühr. Die Sätze sinken, je höher dein 30-Tage-Volumen oder dein Bestand ist.`,
    market: "Markt",
    maker: "Maker",
    taker: "Taker",
    futuresRow: "Futures / Perpetuals",
    spotRow: "Spot",
    feesNote: (e, date) => `Standardsätze (ohne VIP-Stufe) laut ${e.name}, geprüft am ${date}.`,
    funding: "Funding-Zahlungen bei Perpetual Futures fließen zwischen den Tradern, nicht an die Börse.",
    liveSchedule: (e) => `Zur aktuellen Gebührentabelle von ${e.name}`,
    feesCompare: (e, others, links) => (
      <>
        Wie schneiden diese Sätze im Vergleich ab? Unser <Link href={`${links.alternatives}#fees`}>Vergleich der Alternativen zu {e.name}</Link> stellt die
        Gebühren von {e.name} denen von {list(others)} gegenüber.
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `Über ${e.name}`,
    products: "Produkte",
    prosConsTitle: (e) => `Vor- und Nachteile von ${e.name}`,
    pros: "Vorteile",
    cons: "Nachteile",
    bestForTitle: (e) => `Für wen eignet sich ${e.name}?`,
    openAccount: (e) => `Konto bei ${e.name} eröffnen`,
    notAMatch: (e, count, links, pairs) => (
      <>
        Passt nicht? Sieh dir <Link href={links.alternatives}>die {count} besten Alternativen zu {e.name}</Link> an und wofür sich jede am besten eignet, oder
        vergleiche {e.name} im Direktvergleich: <Link href={pairs[0].href}>{pairs[0].label}</Link> und <Link href={pairs[1].href}>{pairs[1].label}</Link>.
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `Ist ${e.name} sicher?`,
    availability: "Verfügbarkeit:",
    closedWhereYouLive: (e, links) => (
      <>
        Ist {e.name} dort, wo du lebst, nicht verfügbar? Die{" "}
        <Link href={`${links.alternatives}#countries`}>Ländertabelle auf unserer Seite zu den Alternativen zu {e.name}</Link> zeigt, welche der anderen
        Börsen Kunden aus deinem Land annehmen.
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `${e.name} Empfehlungscode und Registrierung – FAQ`,
    faqIntro: (e, count) =>
      `${count} Fragen zum ${e.name} Empfehlungscode ${e.referralCode}, zur Kontoeröffnung und Verifizierung, zum Willkommensangebot und zu den Gebühren.`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "Quellen: Woher diese Fakten stammen",
    sourcesIntro: (e, date) =>
      `Alles, was auf dieser Seite zum Empfehlungscode, zur Registrierung, zur Verifizierung, zum Willkommensangebot und zu den Gebühren steht, haben wir am ${date} auf der Website und im Hilfe-Center von ${e.name} selbst nachgelesen. Börsen ändern Angebote und Gebühren ohne Vorankündigung und zeigen in verschiedenen Ländern unterschiedliche Bedingungen – maßgeblich sind deshalb die unten verlinkten Seiten.`,

    /* Alternatives */
    alternativesTitle: (e) => `Alternativen zu ${e.name}`,
    alternativesIntro: (e, count, links) => (
      <>
        Nicht sicher, ob {e.name} das Richtige für dich ist? Das sind die naheliegendsten Alternativen, jede mit eigener Registrierung per Empfehlung. Der{" "}
        <Link href={links.alternatives}>vollständige Vergleich der Alternativen zu {e.name}</Link> misst alle {count} an {e.name} – nach Gebühren, Hebel,
        Produkten, Verifizierung und Verfügbarkeit nach Land.
      </>
    ),
    headToHeadTitle: (e) => `${e.name} im Direktvergleich`,
    headToHeadIntro: (e) =>
      `Du schwankst zwischen ${e.name} und einer anderen Börse? Für jedes Paar gibt es einen eigenen Vergleich von Gebühren, Hebel, Produkten, Ländern und Empfehlungsangeboten:`,
    compareAll: (e, count) => `Alle ${count} Alternativen zu ${e.name} vergleichen`,
    allComparisons: "Alle Börsenvergleiche →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>Risikohinweis:</strong> Krypto-Derivate sind komplexe Instrumente. Ein Hebel vervielfacht Gewinne und Verluste, und du kannst deine gesamte
        Margin innerhalb von Minuten verlieren. Diese Seite dient nur der Information und ist keine Finanzberatung. Wenn du dich über unsere Links
        registrierst, erhalten wir möglicherweise eine Provision – siehe unseren <Link href={disclosureHref}>Affiliate-Hinweis</Link>.
      </>
    ),
    joinTitle: (e) => `In 3 Minuten bei ${e.name} dabei`,
    joinText: (e) => `${benefit(e)}. Eine Empfehlung für Spot und Futures.`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `${name} Empfehlungscode`,
      signup: (name) => `Registrierung und Verifizierung bei ${name}`,
      bonus: (name) => `Willkommensbonus und Prämien bei ${name}`,
      fees: (name) => `Gebühren und Handel bei ${name}`,
      safety: () => "Sicherheit und Verfügbarkeit",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `Wie lautet der ${e.name} Empfehlungscode?`,
          a: `Der ${e.name} Empfehlungscode lautet ${e.referralCode}. ${r.apply} ${e.name} selbst bezeichnet ihn als ${r.codeName}.`,
        },
        { topic: "referral", q: `Wo gebe ich den ${e.name} Empfehlungscode ein?`, a: r.whereToEnter },
        { topic: "referral", q: `Kann ich den ${e.name} Empfehlungscode nachträglich eingeben?`, a: r.afterSignup },
        { topic: "referral", q: `Was bekomme ich mit dem ${e.name} Empfehlungscode ${e.referralCode}?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `Gilt der ${e.name} Empfehlungscode für Spot und Futures?`,
          a: `Ja. Die Empfehlung ist an dein ${e.name}-Konto gebunden, nicht an ein einzelnes Produkt – eine einzige Registrierung mit ${e.referralCode} deckt daher ${list(e.referralCovers)} ab.`,
        },
        {
          topic: "referral",
          q: `Kostet der ${e.name} Empfehlungscode etwas?`,
          a: `Nein. Die Eingabe von ${e.referralCode} ist kostenlos und erhöht deine Handelsgebühren nicht. ${e.name} finanziert das Empfehlungsprogramm aus den eigenen Gebühreneinnahmen.`,
        },
        {
          topic: "signup",
          q: `Wie registriere ich mich bei ${e.name}?`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${asSentence(st.title)}`).join(" ")} Registrieren kannst du dich mit ${orList(s.methods)}.`,
        },
        { topic: "signup", q: `Brauche ich bei ${e.name} eine Identitätsprüfung (KYC)?`, a: s.kyc },
        { topic: "signup", q: `Welche Dokumente akzeptiert ${e.name} für die Verifizierung?`, a: s.documents },
        { topic: "signup", q: `Wie alt muss ich sein, um ein Konto bei ${e.name} zu eröffnen?`, a: s.minAge },
        {
          topic: "fees",
          q: `Wie hoch sind die Handelsgebühren bei ${e.name}?`,
          a: `In der Standardstufe verlangt ${e.name} im Spot-Handel ${e.spotFees.maker} Maker / ${e.spotFees.taker} Taker und bei Perpetual Futures ${e.futuresFees.maker} Maker / ${e.futuresFees.taker} Taker.${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `In welchen Ländern ist ${e.name} nicht verfügbar?`, a: e.restricted },
      ];
    },
  },
};
