import Link from "next/link";
import { legal, site } from "@/config/site";
import type { PageTexts, TextSection } from "./en";

/**
 * The text pages in German. Same pages and sections as `./en.tsx`, written from the English text.
 *
 * Wording: "Börse" / "Kryptobörse" for an exchange, "Empfehlungscode", "Gebühren", the reader is "du". The
 * operator of the website is "der Betreiber"; a controller under the GDPR is "Verantwortlicher", a processor
 * "Auftragsverarbeiter". The regulation is "DSGVO (Datenschutz-Grundverordnung)", articles are cited as
 * "Art. 6 Abs. 1 lit. f DSGVO". Page names as in the footer: „Impressum“, „Datenschutzerklärung“,
 * „Affiliate-Hinweis“, „Über uns & Methodik“. Names, addresses and email addresses stay as they are in
 * `src/config/site.ts`.
 *
 * The legal pages (affiliate disclosure, imprint, privacy policy) carry `translationNotice`: the English
 * text is the binding one.
 */

const section = (s: TextSection) => s;

/** A plain link, because the English page has its own root layout and loads as a new document. */
const translationNotice = (englishHref: string) => (
  <p className="muted">
    <strong>Hinweis:</strong> Diese Seite ist eine unverbindliche deutsche Fassung, die wir als Service anbieten. Verbindlich ist die{" "}
    <a href={englishHref} hrefLang="en">
      englische Fassung
    </a>
    .
  </p>
);

export const de: PageTexts = {
  layout: {
    aside: "Auf dieser Seite und mehr",
    onThisPage: "Auf dieser Seite",
    referralCodes: "Empfehlungscodes",
    compare: "Börsen vergleichen",
    alternativesOf: (name) => <>{name}-Alternativen</>,
    allComparisons: "Alle Börsenvergleiche →",
  },

  home: "Startseite",

  /* ------------------------------------ About ------------------------------------ */
  about: {
    title: `Über uns & Methodik von ${site.name}`,
    description: `Wer ${site.domain} betreibt, woher unsere Börsendaten stammen, wie wir Kryptobörsen prüfen und wie oft Gebühren und Angebote neu geprüft werden.`,
    ldName: `Über ${site.name}`,
    crumb: "Über uns",
    intro: () => (
      <>
        <span className="eyebrow">Über uns</span>
        <h1>Über {site.name}</h1>
        <p className="lead">
          {site.name} ({site.domain}) hilft Tradern, sich bei der passenden Börse für Krypto-Derivate zu registrieren – mit einem Empfehlungscode, der
          funktioniert, und mit den Fakten, die zählen, bevor du einzahlst.
        </p>
      </>
    ),
    sections: {
      "what-we-do": section({
        nav: "Was wir machen",
        heading: "Was wir machen",
        body: () => (
          <p>
            Wir konzentrieren uns auf die größten Börsen im Derivate-Ranking von CoinMarketCap und veröffentlichen zu jeder Börse eine Seite mit
            derselben Struktur: Kurzantwort, wichtigste Fakten, Gebühren, eine ehrliche Beschreibung, Vor- und Nachteile, Hinweise zur Sicherheit,
            Verfügbarkeit und FAQ. So lassen sich die Börsen leicht miteinander vergleichen.
          </p>
        ),
      }),
      methodology: section({
        nav: "Unsere Methodik",
        heading: "Unsere Methodik",
        body: (c) => (
          <ul>
            <li>
              <strong>Marktdaten</strong> (Open Interest, 24h-Volumen, Anzahl der Märkte) stammen aus dem Derivate-Ranking von CoinMarketCap und sind auf
              jeder Seite mit Datum angegeben.
            </li>
            <li>
              <strong>Empfehlungscodes, Registrierung und Verifizierung</strong> – wo der Code eingegeben wird, ob er sich nachträglich hinzufügen lässt,
              die Schritte der Registrierung und die KYC-Regeln – lesen wir direkt auf der Website und im Hilfecenter der jeweiligen Börse nach. Jede
              Börsenseite nennt die offiziellen Seiten, mit denen sie abgeglichen wurde.
            </li>
            <li>
              <strong>Gebühren und Hebel</strong> übernehmen wir aus dem offiziellen Gebührenverzeichnis der jeweiligen Börse, und zwar für die
              Standardstufe (ohne VIP).
            </li>
            <li>
              <strong>Neukundenangebote</strong> geben wir so wieder, wie die Börse sie angibt, samt ihren Bedingungen. Sie unterscheiden sich von Land zu
              Land und ändern sich häufig.
            </li>
            <li>
              <strong>Lizenzen und Vorfälle</strong> entnehmen wir den Lizenzseiten und offiziellen Mitteilungen der Börse selbst.
            </li>
            <li>
              <strong>Börsenvergleiche</strong> – die Alternativen-Seiten und die <Link href={c.links.compare}>Direktvergleiche</Link> – verwenden dieselben
              Zahlen wie die Börsenseiten. Ein Produkt gilt nur dann als angeboten, wenn die Börse es auf ihrer eigenen Website zeigt, und die Verfügbarkeit
              in den einzelnen Ländern entnehmen wir den Nutzungsbedingungen, den Listen gesperrter Länder und den regionalen Websites der jeweiligen
              Börse. Welche Börse bei einem Punkt „vorn“ liegt, wird an diesen Zahlen abgelesen und nicht von uns festgelegt.
            </li>
            <li>
              <strong>Prüfzyklus:</strong> Die Daten werden regelmäßig erneut geprüft; das aktuelle Prüfdatum ist der {c.reviewed}.
            </li>
          </ul>
        ),
      }),
      independence: section({
        nav: "Unabhängigkeit",
        heading: "Unabhängigkeit",
        body: (c) => (
          <p>
            Wir erhalten Provisionen aus den Empfehlungsprogrammen der Börsen, die wir vorstellen – Details findest du in unserem{" "}
            <Link href={c.links.affiliateDisclosure}>Affiliate-Hinweis</Link>. An den Fakten, die wir veröffentlichen, ändert das nie etwas, und Schwächen
            und Einschränkungen nennen wir immer.
          </p>
        ),
      }),
      operator: section({
        nav: `Wer ${site.name} betreibt`,
        heading: <>Wer {site.name} betreibt</>,
        body: (c) => (
          <p>
            {site.name} ist eine private Website, kein Unternehmen. Der Betreiber ist im <Link href={c.links.imprint}>Impressum</Link> genannt. {site.name}{" "}
            ist keine Börse und nimmt dein Geld nie entgegen oder verwahrt es – Konten werden direkt bei der Börse eröffnet.
          </p>
        ),
      }),
      contact: section({
        nav: "Kontakt",
        heading: "Kontakt",
        body: () => (
          <p>
            Veraltete Informationen entdeckt? Schreib uns an <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> – wir korrigieren Fehler
            schnell.
          </p>
        ),
      }),
    },
  },

  /* ------------------------------ Affiliate disclosure ------------------------------ */
  affiliateDisclosure: {
    title: "Affiliate-Hinweis",
    description: `Wie ${site.name} Geld verdient, welche Links Werbung sind und warum das die Fakten nicht beeinflusst, die wir über Kryptobörsen veröffentlichen.`,
    intro: (c) => (
      <>
        <h1>Affiliate-Hinweis</h1>
        <p className="lead">Transparenz ist die Grundlage für Vertrauen. Hier steht genau, wie sich {site.name} finanziert.</p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      earn: section({
        nav: "Wie wir Geld verdienen",
        heading: "Wie wir Geld verdienen",
        body: () => (
          <p>
            {site.name} nimmt an den Empfehlungs- und Affiliate-Programmen der Börsen teil, die auf dieser Website vorgestellt werden. Wenn du über einen
            unserer Links ein Konto eröffnest, kann die Börse dem Betreiber dieser Website eine Provision zahlen – meist einen Anteil an den
            Handelsgebühren, die dein Konto erzeugt. Du zahlst dadurch nie mehr: Eine Empfehlung erhöht deine Gebühren nicht, und bei einer Registrierung
            über eine Empfehlung bekommst du oft einen Gebührenrabatt oder einen Willkommensbonus. Die Provision zahlt die Börse, nicht du.
          </p>
        ),
      }),
      advertising: section({
        nav: "Welche Links Werbung sind",
        heading: "Welche Links Werbung sind",
        body: () => (
          <p>
            Werbung sind alle Links und Buttons, die zu einer Börse führen (zum Beispiel „Bei … registrieren“, „Registrieren“ oder „Sichern“), sowie alle
            Empfehlungscodes, die auf dieser Website angezeigt werden: Es handelt sich um kommerzielle Kommunikation für die jeweilige Börse, für die wir
            bezahlt werden können. Diese Links sind gemäß den Richtlinien der Suchmaschinen mit <code>rel=&quot;sponsored&quot;</code> gekennzeichnet, und
            dieser Hinweis ist von jeder Seite aus verlinkt.
          </p>
        ),
      }),
      independence: section({
        nav: "Worauf das keinen Einfluss hat",
        heading: "Worauf das keinen Einfluss hat",
        body: () => (
          <ul>
            <li>
              Gebühren, Hebel, Lizenzen, Verifizierungsregeln und Länderbeschränkungen stammen von den Seiten der Börsen selbst, Marktdaten von
              CoinMarketCap – nicht aus Marketingvereinbarungen. Jede Börsenseite nennt ihre Quellen.
            </li>
            <li>Wir veröffentlichen für jede Börse Schwächen, Sicherheitsvorfälle und regionale Einschränkungen.</li>
            <li>
              Die Reihenfolge der Börsen richtet sich nach ihrer Position im Derivate-Ranking von CoinMarketCap. Keine Börse kann für einen besseren Platz
              bezahlen.
            </li>
            <li>Welche Börse in einem Vergleich „vorn“ liegt, wird aus den veröffentlichten Zahlen berechnet. Kaufen lässt sich das nicht.</li>
          </ul>
        ),
      }),
      who: section({
        nav: "Mit wem du es zu tun hast",
        heading: "Mit wem du es zu tun hast",
        body: () => (
          <p>
            {site.name} ist eine Informationswebsite, keine Börse und kein Broker. Sie nimmt nie Geld oder Kryptowerte von dir entgegen und verwahrt sie
            auch nicht. Wenn du dich registrierst, schließt du deinen Vertrag ausschließlich mit der Börse, zu deren Bedingungen. Ob du eine Börse nutzen
            darfst, hängt von dem Land ab, in dem du lebst – prüfe ihre Bedingungen, bevor du dich registrierst.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Keine Finanzberatung",
        heading: "Keine Finanzberatung",
        body: () => (
          <p>
            Nichts auf dieser Website ist eine Empfehlung, einen Vermögenswert zu kaufen, zu verkaufen oder zu handeln, und nichts hier ersetzt eine
            Beratung, die deine persönliche Situation berücksichtigt. Krypto-Derivate sind Hochrisikoprodukte: Der Hebel vervielfacht Gewinne und Verluste,
            und du kannst deine gesamte Einzahlung verlieren.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        Der Betreiber dieser Website ist im <Link href={c.links.imprint}>Impressum</Link> genannt; wie personenbezogene Daten verarbeitet werden, erklärt
        die <Link href={c.links.privacy}>Datenschutzerklärung</Link>.
      </p>
    ),
  },

  /* ------------------------------------ Imprint ------------------------------------ */
  imprint: {
    title: "Impressum",
    description: `Impressum von ${site.domain}: Betreiber, Kontaktdaten, was die Website ist und was nicht, Haftung und anwendbares Recht.`,
    intro: (c) => (
      <>
        <h1>Impressum</h1>
        <p className="muted">
          Angaben zum Diensteanbieter gemäß Art. 5 der Richtlinie 2000/31/EG (E-Commerce-Richtlinie) und Art. 5 des polnischen Gesetzes vom 18. Juli
          2002 über die Erbringung von Dienstleistungen auf elektronischem Wege.
        </p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      operator: section({
        nav: "Betreiber",
        heading: "Betreiber dieser Website",
        body: () => (
          <>
            <p>
              {legal.operator}
              <br />
              {legal.street}
              <br />
              {legal.zipCity}
              <br />
              {legal.country}
            </p>
            <p>
              „{site.name}“, „wir“ und „uns“ bezeichnen auf dieser Website den oben genannten Betreiber. {site.name} ist der Name der Website, nicht eines
              Unternehmens.
            </p>
          </>
        ),
      }),
      "represented-by": section({
        heading: "Vertreten durch",
        body: () => <p>{legal.representative}</p>,
      }),
      contact: section({
        nav: "Kontakt",
        heading: "Kontakt",
        body: () => (
          <p>
            E-Mail: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            {legal.phone ? (
              <>
                <br />
                Telefon: {legal.phone}
              </>
            ) : null}
          </p>
        ),
      }),
      "legal-form": section({
        nav: "Rechtsform",
        heading: "Rechtsform",
        body: () => <p>Diese Website wird von einer Privatperson betrieben. Ein Eintrag in ein Handelsregister besteht nicht.</p>,
      }),
      register: section({
        heading: "Registereintrag und Umsatzsteuer",
        body: () => (
          <p>
            {legal.registerEntry}
            <br />
            {legal.vatId}
          </p>
        ),
      }),
      responsible: section({
        nav: "Verantwortlich für den Inhalt",
        heading: "Verantwortlich für den Inhalt",
        body: () => <p>{legal.representative || legal.operator}, Anschrift wie oben.</p>,
      }),
      scope: section({
        nav: "Was diese Website ist",
        heading: "Was diese Website ist – und was nicht",
        body: () => (
          <p>
            {site.name} ist eine Informations- und Vergleichswebsite über Kryptobörsen und ihre Empfehlungsprogramme. Sie ist keine Börse, kein Broker und
            kein Anbieter von Kryptowerte-Dienstleistungen: Sie nimmt weder Geld noch Kryptowerte an, verwahrt oder überträgt keine, führt keine Aufträge
            aus und schließt mit Besuchern keinerlei Verträge. Wenn du ein Konto eröffnest, tust du das direkt bei der Börse, zu deren eigenen Bedingungen
            und über deren eigenes Verifizierungsverfahren.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Keine Beratung, Risikohinweis",
        heading: "Keine Beratung, Risikohinweis",
        body: () => (
          <p>
            Nichts auf dieser Website ist eine Anlage-, Finanz-, Rechts- oder Steuerberatung, eine persönliche Empfehlung oder ein Angebot oder eine
            Aufforderung zum Kauf oder Verkauf von Kryptowerten oder Finanzinstrumenten. Die Vergleiche geben Fakten wieder, die die Börsen veröffentlicht
            haben, und berücksichtigen deine persönlichen Umstände nicht. Der Handel mit Kryptowerten, vor allem mit Hebel, ist mit einem hohen
            Verlustrisiko verbunden – bis hin zum Verlust deiner gesamten Einzahlung. Entscheide selbst und wende dich im Zweifel an einen zugelassenen
            Berater.
          </p>
        ),
      }),
      availability: section({
        nav: "Verfügbarkeit",
        heading: "Verfügbarkeit und gesperrte Länder",
        body: () => (
          <p>
            Die Börsen bieten ihre Dienste nicht in jedem Land an, und manche Produkte sind für Einwohner bestimmter Länder eingeschränkt. Diese Website
            richtet sich nicht an Personen, denen die Nutzung der betreffenden Börse oder der Erhalt von Informationen über sie an ihrem Wohnort verboten
            ist. Prüfe vor der Registrierung die Bedingungen der Börse und die Vorschriften deines Wohnsitzlandes. Die Website richtet sich ausschließlich
            an Erwachsene.
          </p>
        ),
      }),
      liability: section({
        nav: "Haftung",
        heading: "Haftung für Inhalte",
        body: () => (
          <p>
            Die Inhalte dieser Website wurden mit Sorgfalt erstellt und werden regelmäßig geprüft; jede Börsenseite zeigt das Datum ihrer letzten Prüfung
            und die Quellen, mit denen sie abgeglichen wurde. Gebühren, Hebelgrenzen, Boni, Verifizierungsregeln und Verfügbarkeit legen jedoch die Börsen
            fest, und sie können sich jederzeit ändern. Deshalb können wir keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der
            Informationen übernehmen. Maßgeblich sind die Bedingungen, die die Börse im Moment deiner Registrierung anzeigt. Soweit gesetzlich zulässig,
            übernehmen wir keine Haftung für Schäden, die aus der Nutzung dieser Informationen entstehen; die Haftung für Vorsatz und grobe Fahrlässigkeit
            sowie jede Haftung, die gesetzlich nicht ausgeschlossen werden kann, bleiben unberührt.
          </p>
        ),
      }),
      links: section({
        nav: "Externe Links",
        heading: "Links zu anderen Websites",
        body: (c) => (
          <p>
            Diese Website enthält Links zu externen Websites, auf die wir keinen Einfluss haben. Für deren Inhalte ist allein der jeweilige Anbieter
            verantwortlich. Einige ausgehende Links sind Affiliate-Links (Empfehlungslinks), für die wir eine Provision erhalten können – siehe unseren{" "}
            <Link href={c.links.affiliateDisclosure}>Affiliate-Hinweis</Link>. Wenn du meinst, dass ein Link zu rechtswidrigen Inhalten führt, schreib uns
            an <a href={`mailto:${legal.email}`}>{legal.email}</a>; wir prüfen das unverzüglich.
          </p>
        ),
      }),
      trademarks: section({
        nav: "Marken und Urheberrecht",
        heading: "Marken und Urheberrecht",
        body: () => (
          <p>
            Namen und Logos der Börsen sind Marken ihrer jeweiligen Inhaber und werden nur zur Identifizierung verwendet. {site.name} ist mit keiner der
            vorgestellten Börsen verbunden und wird von keiner von ihnen empfohlen oder gesponsert. Alle eigenen Texte und Grafiken dieser Website sind
            urheberrechtlich geschützt.
          </p>
        ),
      }),
      disputes: section({
        nav: "Streitbeilegung",
        heading: "Verbraucherstreitbeilegung",
        body: () => (
          <p>
            Wir verkaufen Besuchern keine Waren oder Dienstleistungen, daher entsteht durch die Nutzung dieser Website kein Verbrauchervertrag. An
            Streitbeilegungsverfahren vor einer Schlichtungsstelle für Verbraucher nehmen wir nicht teil. Beschwerden über eine Börse sind an die jeweilige
            Börse zu richten.
          </p>
        ),
      }),
      law: section({
        nav: "Anwendbares Recht",
        heading: "Anwendbares Recht",
        body: () => (
          <p>
            Für diese Website und ihre Nutzung gilt polnisches Recht. Wenn du Verbraucher bist, bleiben die zwingenden Verbraucherschutzvorschriften des
            Landes, in dem du deinen gewöhnlichen Aufenthalt hast, unberührt.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        Siehe auch unsere <Link href={c.links.privacy}>Datenschutzerklärung</Link> und unseren{" "}
        <Link href={c.links.affiliateDisclosure}>Affiliate-Hinweis</Link>.
      </p>
    ),
  },

  /* --------------------------------- Privacy policy --------------------------------- */
  privacy: {
    title: "Datenschutzerklärung",
    description: `Wie ${site.domain} personenbezogene Daten nach der DSGVO verarbeitet: Google Analytics nur mit deiner Einwilligung, keine Werbe-Cookies.`,
    intro: (c) => (
      <>
        <h1>Datenschutzerklärung</h1>
        <p className="muted">Stand: {c.reviewed}</p>
        {translationNotice(c.links.english)}

        <div className="info">
          <strong>Kurz gesagt:</strong> {site.domain} verwendet keine Werbepixel, keine Social-Media-Plugins und keine externen Schriftarten. Google
          Analytics läuft nur, wenn du es im Einwilligungsbanner erlaubst; ohne deine Einwilligung wird kein Cookie gesetzt und nichts an Google gesendet.
          Darüber hinaus verarbeiten wir nur die technischen Daten, die nötig sind, um die Website sicher auszuliefern. Wenn du auf einen Link zu einer
          Börse klickst, verlässt du unsere Website, und es gilt die Datenschutzerklärung der Börse.
        </div>
      </>
    ),
    sections: {
      controller: section({
        nav: "Verantwortlicher",
        heading: "1. Verantwortlicher",
        body: () => (
          <>
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne von Art. 4 Nr. 7 der EU-Datenschutz-Grundverordnung (DSGVO) ist der
              Betreiber der Website, eine Privatperson:
            </p>
            <p>
              {legal.operator}
              <br />
              {legal.street}, {legal.zipCity}, {legal.country}
              <br />
              E-Mail: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            </p>
            <p>
              Der Verantwortliche ist in Polen niedergelassen. Es gelten die DSGVO und das polnische Gesetz vom 10. Mai 2018 über den Schutz
              personenbezogener Daten. Wenn du die Website aus der Schweiz besuchst, kann zusätzlich das Schweizer Bundesgesetz über den Datenschutz (DSG)
              gelten; die unten beschriebenen Rechte stehen dir in gleicher Weise zu.
            </p>
          </>
        ),
      }),
      hosting: section({
        nav: "Hosting und Logdateien",
        heading: "2. Hosting und Server-Logdateien",
        body: () => (
          <>
            <p>
              Diese Website wird bei {legal.hostingProvider} („Vercel“) gehostet. Vercel ist als unser Auftragsverarbeiter tätig (Art. 28 DSGVO). Wenn du
              die Website besuchst, verarbeitet Vercel automatisch technische Daten, die dein Browser übermittelt: IP-Adresse, Datum und Uhrzeit der
              Anfrage, aufgerufene URL, Referrer-URL, Browsertyp und -version, Betriebssystem und den HTTP-Statuscode. Diese Daten sind erforderlich, um die
              Website auszuliefern und ihre Stabilität und Sicherheit zu gewährleisten (zum Beispiel zur Abwehr von Angriffen). Sie werden nicht mit anderen
              Datenquellen zusammengeführt und nicht dazu verwendet, dich zu identifizieren.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO – unser berechtigtes Interesse an einer sicheren und funktionsfähigen Website. Vercel speichert die
              Logdaten für einen begrenzten Zeitraum und löscht sie danach. Vercel kann Daten in den USA verarbeiten. Vercel ist nach dem EU-U.S. Data
              Privacy Framework zertifiziert, für das die Europäische Kommission einen Angemessenheitsbeschluss erlassen hat (Art. 45 DSGVO), und es gilt der
              Auftragsverarbeitungsvertrag von Vercel, der die EU-Standardvertragsklauseln enthält.
            </p>
          </>
        ),
      }),
      cookies: section({
        nav: "Cookies und Analyse",
        heading: "3. Cookies und Webanalyse",
        body: () => (
          <>
            <p>
              Ohne deine Einwilligung setzen wir keine Cookies und verwenden keine Analysedienste. Wir nutzen keine Werbenetzwerke, kein Fingerprinting und
              keine Social-Media-Plugins; alle Schriftarten und Bilder werden von unserer eigenen Domain ausgeliefert. Eine automatisierte
              Entscheidungsfindung oder ein Profiling (Art. 22 DSGVO) findet nicht statt.
            </p>
            <p>
              Deine Auswahl im Einwilligungsbanner wird im lokalen Speicher (Local Storage) deines Browsers abgelegt (Eintrag{" "}
              <code>refco-analytics-consent</code>, Wert „granted“ oder „denied“), damit wir nicht auf jeder Seite erneut fragen müssen. Dieser Eintrag ist
              erforderlich, um deine Entscheidung zu respektieren, und wird an niemanden übermittelt.
            </p>
            <h3 id="analytics">Google Analytics – nur mit deiner Einwilligung</h3>
            <p>
              Wenn du „Analyse erlauben“ wählst, lädt diese Website Google Analytics 4, einen Dienst der Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Irland („Google“). Google Analytics setzt die Cookies <code>_ga</code> und{" "}
              <code>_ga_{site.analyticsId.replace(/^G-/, "")}</code> (standardmäßig bis zu zwei Jahre gespeichert), um Besucher voneinander zu unterscheiden.
              Erfasst wird, welche Seiten aufgerufen werden, wie Besucher auf die Website gelangt sind, die aus der IP-Adresse abgeleitete ungefähre Region
              sowie Browser- und Gerätedaten. Nach Angaben von Google protokolliert oder speichert Analytics 4 keine IP-Adressen. Wir nutzen die Berichte nur
              in zusammengefasster Form, um zu sehen, welche Seiten gelesen werden. Die Werbefunktionen sind deaktiviert: keine Werbe-Cookies und keine
              personalisierte Werbung.
            </p>
            <p>
              Rechtsgrundlage: deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Google ist als unser Auftragsverarbeiter tätig. Daten können an Google LLC in
              den USA übermittelt werden, die nach dem EU-U.S. Data Privacy Framework zertifiziert ist. Google löscht Daten auf Nutzerebene nach Ablauf der
              in Analytics eingestellten Aufbewahrungsdauer von höchstens 14 Monaten. Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft über
              „Cookie-Einstellungen“ am Ende jeder Seite widerrufen; die Analytics-Cookies werden dann aus deinem Browser entfernt, und Analytics wird nicht
              mehr geladen. Weitere Informationen von Google:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener nofollow">
                policies.google.com/privacy
              </a>
              .
            </p>
          </>
        ),
      }),
      "affiliate-links": section({
        nav: "Links zu Börsen",
        heading: "4. Links zu Börsen (Affiliate-Links)",
        body: (c) => (
          <p>
            Unsere Website enthält Links zu Kryptobörsen von Drittanbietern. Einige davon sind Empfehlungslinks, an denen die Börse erkennt, dass du von
            unserer Website kommst. Wir übermitteln der Börse keine personenbezogenen Daten; die Empfehlungskennung ist Teil des Links selbst und
            identifiziert uns, nicht dich. Sobald du klickst, bist du auf der Website der Börse, und es gilt deren Datenschutzerklärung. Die Börse kann dann
            Cookies setzen und deine Daten als eigenständiger Verantwortlicher verarbeiten. Die Börse meldet uns, welche Provisionen aus Konten entstanden
            sind, die über unsere Links eröffnet wurden. Eine solche Meldung kann eine pseudonyme Kontokennung (zum Beispiel eine User-ID) und
            Gebührenbeträge enthalten; wir verwenden sie nur zur Abrechnung der Provisionen (Art. 6 Abs. 1 lit. f DSGVO) und versuchen nicht, dich anhand
            dieser Angaben zu identifizieren. Mehr zu diesen Links: <Link href={c.links.affiliateDisclosure}>Affiliate-Hinweis</Link>.
          </p>
        ),
      }),
      email: section({
        nav: "Kontakt per E-Mail",
        heading: "5. Kontakt per E-Mail",
        body: () => (
          <p>
            Wenn du uns per E-Mail kontaktierst, verarbeiten wir die Daten, die du uns mitteilst (E-Mail-Adresse, Name, Inhalt deiner Nachricht), um deine
            Anfrage zu beantworten. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO – unser berechtigtes Interesse an der Beantwortung von Anfragen. Deine
            Nachricht wird in unserem Postfach gespeichert, das ein E-Mail-Anbieter als unser Auftragsverarbeiter betreibt. Wir löschen die Korrespondenz,
            sobald deine Anfrage erledigt ist, sofern wir sie nicht aufgrund gesetzlicher Pflichten länger aufbewahren müssen. Du bist nicht verpflichtet,
            personenbezogene Daten anzugeben; ohne E-Mail-Adresse können wir dir allerdings nicht antworten.
          </p>
        ),
      }),
      recipients: section({
        nav: "Empfänger von Daten",
        heading: "6. Empfänger von Daten",
        body: () => (
          <p>
            Wir verkaufen keine personenbezogenen Daten und geben sie nicht an Dritte für deren eigene Zwecke weiter. Die Daten werden nur von den oben
            genannten Dienstleistern verarbeitet – dem Hosting-Anbieter, dem E-Mail-Anbieter und, wenn du die Analyse erlaubt hast, Google – und an Behörden
            nur weitergegeben, wenn wir gesetzlich dazu verpflichtet sind.
          </p>
        ),
      }),
      rights: section({
        nav: "Deine Rechte",
        heading: "7. Deine Rechte",
        body: () => (
          <>
            <p>Unter den gesetzlichen Voraussetzungen hast du das Recht auf:</p>
            <ul>
              <li>Auskunft über die personenbezogenen Daten, die wir über dich gespeichert haben (Art. 15 DSGVO),</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
              <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
              <li>
                Widerspruch aus Gründen, die sich aus deiner besonderen Situation ergeben, gegen eine Verarbeitung, die auf berechtigten Interessen beruht
                (Art. 21 DSGVO),
              </li>
              <li>Widerruf einer erteilten Einwilligung, jederzeit und mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO),</li>
              <li>
                Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO) – in Polen beim Präsidenten des Amtes für den Schutz personenbezogener Daten (Prezes
                Urzędu Ochrony Danych Osobowych, UODO, uodo.gov.pl) oder bei der Behörde des EU-Landes, in dem du wohnst oder arbeitest; in der Schweiz beim
                Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB).
              </li>
            </ul>
            <p>
              Um deine Rechte auszuüben, schreib an <a href={`mailto:${legal.email}`}>{legal.email}</a>. Wir antworten unverzüglich, spätestens innerhalb
              eines Monats.
            </p>
          </>
        ),
      }),
      children: section({
        nav: "Kinder",
        heading: "8. Kinder",
        body: () => (
          <p>Diese Website richtet sich an Erwachsene. Wir verarbeiten nicht wissentlich personenbezogene Daten von Personen unter 18 Jahren.</p>
        ),
      }),
      security: section({
        nav: "Datensicherheit",
        heading: "9. Datensicherheit",
        body: () => (
          <p>
            Diese Website wird ausschließlich über eine verschlüsselte HTTPS-Verbindung (TLS) mit strengen Sicherheits-Headern ausgeliefert. Wir treffen
            angemessene technische und organisatorische Maßnahmen, um deine Daten zu schützen.
          </p>
        ),
      }),
      changes: section({
        nav: "Änderungen",
        heading: "10. Änderungen dieser Datenschutzerklärung",
        body: (c) => (
          <p>
            Wir können diese Datenschutzerklärung aktualisieren, wenn sich die Website oder die rechtlichen Anforderungen ändern. Die aktuelle Fassung ist
            immer auf dieser Seite abrufbar. Der Betreiber ist im <Link href={c.links.imprint}>Impressum</Link> genannt.
          </p>
        ),
      }),
    },
  },
};
