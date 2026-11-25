import type { ExchangeText } from "../../types";

export const binance: ExchangeText = {
  referral: {
    codeName: "Referral ID",
    whereShort: "Feld “Referral ID (Optional)” im letzten Schritt der Registrierung",
    apply:
      "Gib ihn im letzten Schritt der Registrierung in das Feld “Referral ID (Optional)” ein – oder öffne den Registrierungslink auf dieser Seite, der ihn automatisch für dich einträgt.",
    whereToEnter:
      "Binance fragt den Empfehlungscode im letzten Schritt der Registrierung ab – nachdem du deine E-Mail-Adresse oder Telefonnummer bestätigt und ein Passwort festgelegt hast –, und zwar auf der Website ebenso wie in der App. Kommst du über einen Empfehlungslink, trägt Binance den Code selbst ein und zeigt daneben einen grünen Haken mit “Linked” an. Andernfalls gibst du REFCO888 in das Feld “Referral ID (Optional)” ein. Der Schritt ist optional und lässt sich überspringen.",
    afterSignupShort: "Ja – innerhalb von 30 Tagen, vor der ersten Einzahlung oder dem ersten Trade",
    afterSignup:
      "Ja, unter bestimmten Voraussetzungen. Auf der Binance-Seite zum Verknüpfen von Empfehlungen (binance.com/en/activity/referral/bind-ref) kannst du einen fehlenden Empfehlungscode nachtragen, wenn dein Konto jünger als 30 Tage ist, weder Einzahlungen noch Handelsaktivität aufweist, noch keine Empfehlung hat und ein Hauptkonto ist, wenn deine Identitätsprüfung in den letzten 180 Tagen nicht für ein anderes Konto verwendet wurde und wenn das Konto nicht wegen Wash Trading markiert ist. Ist eine Empfehlung einmal verknüpft, lässt sie sich laut Binance weder ändern noch entfernen.",
    inviteeReward:
      "REFCO888 ist ein Code für Binance Referral Pro. Im Pro-Modus bekommt der eingeladene Nutzer einen Teil seiner eigenen Handelsgebühren in USDC zurück, sofern der Werber sich entschieden hat, seine Provision zu teilen – welcher Satz gilt, zeigt Binance bei der Registrierung an. Unabhängig vom Code gibt Binance jedem verifizierten Neukunden Einsteigeraufgaben, die bis zu 100 USD in Rabattgutscheinen für Handelsgebühren wert sind.",
    guide: [
      "Binance betreibt zwei Empfehlungsmodi, und jeder Neukunde kann nur einem davon angehören. Links der Form binance.com/register?ref=… – wie der auf dieser Seite – gehören zu Referral Pro: Der Werber erhält eine Provision auf deine Handelsgebühren und kann dir einen Teil davon als Rückvergütung in USDC weitergeben. Der andere Modus, Referral Lite, arbeitet mit Rabattgutscheinen für Handelsgebühren bei kleinen ersten Käufen und Trades; unter einem Pro-Code gibt Binance diese Gutscheine nicht aus.",
      "Eine Pro-Empfehlung gilt für Spot, Margin und Futures. Eröffnest du später ein Futures-Konto, zeigt Binance ein zweites, optionales Feld “Futures Referral ID” an. Es akzeptiert nur einen Code desselben Werbers, der auch dein Hauptkonto eingeladen hat – zwei verschiedene Werber lassen sich also nicht kombinieren.",
      "Entscheidend ist, wo du wohnst. Seit dem 1. Juli 2026 können Nutzer, die in Ländern des EWR registriert sind, in keiner Form mehr am Empfehlungsprogramm von Binance teilnehmen, und die Empfehlungsbedingungen von Binance nennen außerdem Einschränkungen für das Vereinigte Königreich, Singapur, Japan, die Türkei, Hongkong und Israel. Aus den Ländern, die Binance bedient, kannst du trotzdem ein Konto eröffnen – die Empfehlung hat dann aber keine Wirkung.",
    ],
  },
  signup: {
    methods: ["E-Mail-Adresse", "Telefonnummer", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Öffne die Registrierungsseite von Binance",
        text: "Nutze den Registrierungsbutton auf dieser Seite. Er öffnet accounts.binance.com mit hinterlegter Empfehlung – Binance zeigt den Code REFCO888 neben dem Formular an.",
      },
      {
        title: "Gib deine E-Mail-Adresse oder Telefonnummer ein",
        text: "Oder fahre mit Google, Apple oder Telegram fort. Akzeptiere die Nutzungsbedingungen und den Datenschutzhinweis, um weiterzukommen.",
      },
      {
        title: "Bestätige den 6-stelligen Code",
        text: "Binance schickt einen 6-stelligen Bestätigungscode an deine E-Mail-Adresse oder Telefonnummer. Er bleibt 30 Minuten gültig.",
      },
      {
        title: "Lege ein Passwort fest",
        text: "Mindestens 8 Zeichen, darunter ein Großbuchstabe und eine Ziffer.",
      },
      {
        title: "Prüfe den Empfehlungscode",
        text: "Im letzten Schritt sollte die Referral ID bereits eingetragen sein, mit grünem Haken und “Linked”. Ist das Feld leer, gib REFCO888 ein – oder überspring es, wenn du keine Empfehlung möchtest.",
      },
      {
        title: "Verifiziere deine Identität",
        text: "Anschließend führt Binance dich zur Identitätsprüfung. Jeder Neukunde muss sie abschließen, bevor er einzahlen oder handeln kann.",
      },
    ],
    kycShort: "Pflicht für alle Produkte",
    kyc: "Ja. Binance verlangt von jedem Neukunden eine abgeschlossene Identitätsprüfung (Status “Verified”), bevor er irgendein Produkt nutzen kann – auch Krypto-Einzahlungen und Trades. Du wählst ein Dokument aus, lädst es hoch und durchläufst einen Liveness-Check; laut Binance ist die Prüfung in der Regel innerhalb von 48 Stunden abgeschlossen. Ältere Konten, die nie verifiziert wurden, sind auf Auszahlungen beschränkt.",
    documents:
      "Die meisten Nutzer können sich mit Reisepass, Personalausweis oder Führerschein verifizieren; danach folgt ein Liveness-Check, bei dem dein Gesicht geprüft wird.",
    minAge: "18 Jahre (Nutzungsbedingungen von Binance)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Zahlst du die Gebühren in BNB, sparst du 25 % bei den Spot-Gebühren (0,075 % statt 0,10 %) und 10 % bei den Gebühren für USDⓈ-M-Futures (0,018 % Maker / 0,045 % Taker statt 0,02 % / 0,05 %).",
  extraFeeMarkets: ["COIN-M-Futures"],
  sourceLabels: [
    "Binance: Registrierung auf der Website (Schritt mit dem Empfehlungscode)",
    "Binance: Registrierung in der App",
    "Binance: Empfehlungscode nach der Registrierung verknüpfen",
    "Binance: Die Modi Referral Pro und Referral Lite",
    "Binance: Bedingungen des Empfehlungsprogramms und regionale Einschränkungen",
    "Binance: Willkommensprämien für Neukunden (Rabattgutscheine für Gebühren)",
    "Binance: Gebührensätze im Spot-Handel",
    "Binance: Gebührensätze für USDⓈ-M-Futures",
    "Binance: Gebührensätze für COIN-M-Futures",
    "Binance: Hebel und Margin bei USDⓈ-M-Futures",
    "Binance: Hebelgrenzen für neue Futures-Konten",
    "Binance: Identitätsprüfung",
    "Binance: Nutzungsbedingungen",
    "Binance: Liste der verbotenen Länder",
    "Binance: Lizenzen und Registrierungen",
    "Binance: Reservenachweis (Proof of Reserves)",
    "Binance: SAFU-Fonds",
    "Binance: Über Binance",
  ],
  guides: {
    heading: "Ratgeber auf Binance Square",
    intro:
      "Ein ausführlicher Ratgeber mit Checkliste zur Anmeldung mit einem Binance Empfehlungscode ist auf Binance Square erschienen, der hauseigenen Content-Plattform von Binance. Das Original ist auf Spanisch; Binance Square kann es übersetzt anzeigen:",
    linkLabel: "FAQ zum Binance Empfehlungscode",
  },
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures"],
  bonusHeadline: "Bis zu 100 USD in Rabattgutscheinen für Gebühren",
  benefits: [
    "Einsteigeraufgaben im Wert von bis zu 100 USD in Rabattgutscheinen für Handelsgebühren, sobald dein Konto verifiziert ist",
    "Eine Empfehlung gilt für Spot, Margin und Futures – ein zweiter Code ist nicht nötig",
    "25 % Rabatt auf Spot-Gebühren und 10 % auf Gebühren für USDⓈ-M-Futures, wenn du die Gebühren in BNB zahlst",
    "Der Code lässt sich bis zu 30 Tage nach der Registrierung noch verknüpfen, solange du weder eingezahlt noch gehandelt hast",
  ],
  benefitNote:
    "Die Willkommensgutscheine sind das allgemeine Neukundenangebot von Binance, keine Prämie des Empfehlungscodes. Sie werden nach der Identitätsprüfung ausgegeben, erstatten Spot-Handelsgebühren, lassen sich nicht mit API-Trades verrechnen und können nur in der Binance-App eingelöst werden. Binance schließt eine lange Liste von Ländern davon aus, darunter das Vereinigte Königreich, die USA, Kanada, die Niederlande, Norwegen, Serbien, Japan, Singapur und Hongkong.",
  headquarters: "Betrieb über ADGM-lizenzierte Gesellschaften in Abu Dhabi",
  regulation:
    "Reguliert durch die ADGM FSRA (Abu Dhabi); weitere Lizenzen und Registrierungen u. a. in Dubai (VARA), Bahrain, Kasachstan, Australien und Japan",
  users: "320 Mio.+ registrierte Nutzer (laut Binance)",
  assets: "600+ Kryptowährungen",
  maxLeverage: "Bis zu 150x (BTCUSDT- und ETHUSDT-Perpetuals)",
  feeNote: "Höhere VIP-Stufen senken die Sätze weiter.",
  products: ["Spot", "Margin", "USDⓈ-M- und COIN-M-Futures", "Optionen", "Copy Trading", "Trading-Bots", "Earn & Launchpool"],
  tagline: "Die tiefste Liquidität bei Krypto-Derivaten",
  quickAnswer:
    "Der Binance Empfehlungscode lautet REFCO888. Binance fragt ihn im letzten Schritt der Registrierung ab; über den Button auf dieser Seite wird er automatisch eingetragen. Ein Code gilt für Spot, Margin und Futures. Hast du ihn vergessen, kannst du bei Binance innerhalb von 30 Tagen nach der Registrierung noch einen Code verknüpfen, solange du weder eingezahlt noch gehandelt hast. Verifizierte Neukunden können außerdem bis zu 100 USD in Rabattgutscheinen für Handelsgebühren erhalten.",
  about: [
    "Binance ging im Juli 2017 an den Start und wurde nach eigenen Angaben innerhalb von 180 Tagen zur größten Kryptobörse der Welt. Heute meldet die Börse mehr als 320 Millionen registrierte Nutzer in über 180 Ländern und listet mehr als 600 Kryptowährungen. Bei Derivaten ist sie die klare Nummer eins: Zum Stichtag unserer Marktdaten hatte Binance mehr Open Interest als die drei nächstplatzierten Börsen im Derivate-Ranking von CoinMarketCap zusammen. Für Trader zählt das, denn tiefe Orderbücher bedeuten engere Spreads und weniger Slippage bei großen Orders.",
    "Mit einem Login hast du Zugriff auf Spot- und Margin-Handel, Futures mit USDⓈ-Margin und mit Coin-Margin, Optionen, Trading-Bots und Copy Trading sowie auf Earn und Launchpool. Der Hebel bei USDⓈ-M-Futures reicht bei den Perpetuals BTCUSDT und ETHUSDT bis 150x für Positionen bis 300.000 USDT; Kontrakte mit Coin-Margin gehen bis 125x. Neue Futures-Konten können in den ersten 30 Tagen höchstens 20x nutzen.",
    "Binance.com wird über drei lizenzierte Gesellschaften von der Financial Services Regulatory Authority des Abu Dhabi Global Market (ADGM) reguliert. Daneben nennt Binance Lizenzen und Registrierungen in Dubai (VARA), Bahrain, Kasachstan, Australien (AUSTRAC), Indien, Indonesien, Japan, Neuseeland, Thailand, Mexiko, El Salvador, Argentinien, Brasilien und Südafrika. Der Reservenachweis kombiniert einen Merkle-Baum mit zk-SNARKs, sodass Nutzer prüfen können, ob ihr eigenes Guthaben enthalten ist, und der 2018 eingerichtete Notfallfonds SAFU verfügte im Februar 2026 über rund 1 Mrd. US-Dollar.",
  ],
  highlights: [
    { title: "Liquidität Nr. 1", text: "Das größte Open Interest und das höchste Futures-Volumen aller Börsen." },
    { title: "Niedrige Futures-Gebühren", text: "0,02 % Maker / 0,05 % Taker im Standardtarif, mit BNB 10 % weniger." },
    { title: "Alles in einer App", text: "Futures, Optionen, Bots, Copy Trading und Earn unter einem Konto." },
  ],
  pros: [
    "Unerreichte Liquidität bei Perpetuals auf BTC, ETH und große Altcoins",
    "Wettbewerbsfähige Standardgebühren plus zusätzlicher BNB-Rabatt",
    "Ein selbst überprüfbarer Reservenachweis und der SAFU-Fonds mit rund 1 Mrd. US-Dollar",
    "Ein fehlender Empfehlungscode lässt sich innerhalb von 30 Tagen noch verknüpfen",
  ],
  cons: [
    "Nicht verfügbar in den USA, in Kanada und in den Niederlanden",
    "Ohne Identitätsprüfung keine Einzahlung und kein Handel",
    "Neue Futures-Konten sind in den ersten 30 Tagen auf einen Hebel von 20x begrenzt",
    "Einwohner des EWR sind seit Juli 2026 vom Empfehlungsprogramm ausgeschlossen",
  ],
  bestFor: [
    "Aktive Futures-Trader, die tiefe Liquidität brauchen",
    "Trader, die eine Plattform für alles wollen",
    "Nutzer mit hohem Handelsvolumen, die von VIP-Stufen profitieren",
  ],
  signupTip:
    "Schließ die Identitätsprüfung gleich ab: Ohne sie lässt Binance neue Konten weder einzahlen noch handeln, und die Willkommensaufgaben gibt es erst, wenn du verifiziert bist.",
  safety:
    "Binance veröffentlicht einen Reservenachweis, der nach eigenen Angaben alle Kontoguthaben im Verhältnis 1:1 gedeckt zeigt – die Prüfung vom 12. November 2026 ergab für BTC eine Reservequote von 100,05 % –, und du kannst dein eigenes Konto unter Wallet → Verification überprüfen. Zum Kontoschutz gehören Zwei-Faktor-Authentifizierung, Passkeys und eine Whitelist für Auszahlungen. Der SAFU-Fonds soll Nutzer in Extremfällen schützen. Keine zentralisierte Börse ist risikofrei – lass dort also nur Guthaben liegen, mit dem du aktiv handelst.",
  restricted:
    "Die Liste der verbotenen Länder von Binance (aktualisiert am 5. Januar 2026) nennt die USA, Kanada, die Niederlande, Kuba, Nordkorea, den Iran, die Krim sowie die sogenannten Volksrepubliken Donezk und Luhansk.",
  faqs: [
    {
      topic: "referral",
      q: "Funktioniert der Binance Empfehlungscode REFCO888?",
      a: "Ja. Am 16. November 2026 öffnete der Link binance.com/register?ref=REFCO888 die offizielle Registrierungsseite von Binance, auf der neben dem Anmeldeformular der Code REFCO888 angezeigt wurde.",
    },
    {
      topic: "referral",
      q: "Was ist der Unterschied zwischen Binance Referral Pro und Referral Lite?",
      a: "Es sind zwei getrennte Modi, und ein Neukunde kann nur in einem davon sein. Bei Referral Pro verdient der Werber eine Provision auf deine Handelsgebühren und kann einen Teil davon als Rückvergütung in USDC an dich weitergeben. Bei Referral Lite erhalten beide Seiten Rabattgutscheine für Handelsgebühren, wenn kleine Aufgaben zum ersten Kauf und zum ersten Trade erledigt sind. REFCO888 ist ein Referral-Pro-Code, die Lite-Gutscheine gelten hier also nicht.",
    },
    {
      topic: "referral",
      q: "Gibt es einen eigenen Binance Futures Empfehlungscode?",
      a: "Wenn du ein Futures-Konto eröffnest, zeigt Binance ein optionales Feld “Futures Referral ID” an. Es akzeptiert nur einen Code desselben Werbers, mit dessen Referral-Pro-Code oder -Link du dich registriert hast – eine Empfehlung deckt also praktisch Spot, Margin und Futures ab.",
    },
    {
      topic: "referral",
      q: "Kann ich meinen Binance Empfehlungscode später ändern?",
      a: "Nein. Laut Binance lässt sich eine einmal hergestellte Empfehlungsbeziehung weder ändern noch entfernen. Nur ein Konto ganz ohne Empfehlung kann noch eine verknüpfen – innerhalb von 30 Tagen nach der Registrierung und vor der ersten Einzahlung oder dem ersten Trade.",
    },
    {
      topic: "referral",
      q: "Funktioniert der Binance Empfehlungscode in der EU?",
      a: "Nicht mehr. Nach den Empfehlungsbedingungen von Binance dürfen Nutzer, die in Ländern des EWR registriert sind, seit dem 1. Juli 2026 nicht mehr am Binance Referral Program teilnehmen. Die Bedingungen nennen außerdem Einschränkungen für das Vereinigte Königreich, Singapur, Japan, die Türkei, Hongkong und Israel.",
    },
    {
      topic: "signup",
      q: "Kann ich mich bei Binance mit Google, Apple oder Telegram registrieren?",
      a: "Ja. Neben E-Mail-Adresse oder Telefonnummer bietet die Registrierungsseite von Binance “Continue with Google”, “Continue with Apple” und “Continue with Telegram” an.",
    },
    {
      topic: "signup",
      q: "Welche Anforderungen stellt Binance an das Passwort?",
      a: "Ein Passwort bei Binance braucht mindestens 8 Zeichen, darunter einen Großbuchstaben und eine Ziffer.",
    },
    {
      topic: "signup",
      q: "Wie lange ist der Binance Bestätigungscode gültig?",
      a: "Der 6-stellige Code, den Binance dir bei der Registrierung an deine E-Mail-Adresse oder Telefonnummer schickt, ist 30 Minuten gültig.",
    },
    {
      topic: "signup",
      q: "Wie lange dauert die Identitätsprüfung bei Binance?",
      a: "Laut Binance ist die Prüfung in der Regel innerhalb von 48 Stunden abgeschlossen, nachdem du dein Dokument eingereicht und den Liveness-Check bestanden hast.",
    },
    {
      topic: "signup",
      q: "Kann ich Binance ohne KYC nutzen?",
      a: "Nein. Alle Neukunden müssen verifiziert sein, bevor sie Produkte von Binance nutzen können – auch Krypto-Einzahlungen und Trades. Ältere Konten ohne Verifizierung können nur noch auszahlen.",
    },
    {
      topic: "bonus",
      q: "Welchen Willkommensbonus bekommen Neukunden bei Binance?",
      a: "Binance gibt Neukunden drei Einsteigeraufgaben, die Rabattgutscheine für Handelsgebühren im Wert von bis zu 100 USD freischalten. Die Aufgaben gibt es erst, wenn du die Kontoverifizierung abgeschlossen hast, und jeder Gutschein erstattet einen festen Prozentsatz deiner Spot-Handelsgebühren.",
    },
    {
      topic: "bonus",
      q: "Kann ich mir den Binance Willkommensbonus auszahlen lassen?",
      a: "Nein. Die Prämie ist ein Rabattgutschein für Handelsgebühren, kein Bargeld: Er erstattet Spot-Handelsgebühren, gilt nicht für Trades über die API und lässt sich nur in der Binance-App nutzen.",
    },
    {
      topic: "bonus",
      q: "Welche Länder sind von den Binance Willkommensgutscheinen ausgeschlossen?",
      a: "Die Bedingungen von Binance schließen unter anderem das Vereinigte Königreich, die USA, Kanada, die Niederlande, Kroatien, Norwegen, Island, Liechtenstein, Serbien, Albanien, Russland, Japan, Singapur und Hongkong aus. Die vollständige Liste steht im Hilfeartikel von Binance zu den Willkommensprämien.",
    },
    {
      topic: "fees",
      q: "Wie hoch ist der BNB-Gebührenrabatt bei Binance?",
      a: "Wer die Gebühren in BNB zahlt, spart 25 % bei den Spot-Gebühren – 0,075 % statt 0,10 % für normale Nutzer – und 10 % bei den Gebühren für USDⓈ-M-Futures, was 0,018 % Maker und 0,045 % Taker ergibt.",
    },
    {
      topic: "fees",
      q: "Wie hoch ist der maximale Hebel bei Binance?",
      a: "Bis zu 150x bei den USDⓈ-M-Perpetuals BTCUSDT und ETHUSDT für Positionen bis 300.000 USDT und bis zu 125x beim BTCUSD-Perpetual mit Coin-Margin. Futures-Konten, die jünger als 30 Tage sind, können höchstens 20x nutzen. Ein hoher Hebel erhöht das Risiko einer Liquidation erheblich.",
    },
    {
      topic: "fees",
      q: "Wie hoch sind die Gebühren für COIN-M-Futures bei Binance?",
      a: "Normale Nutzer zahlen bei COIN-M-Futures 0,02 % Maker und 0,05 % Taker – dieselben Sätze wie bei den USDⓈ-M-Kontrakten mit USDT-Margin.",
    },
    {
      topic: "safety",
      q: "Ist Binance in den USA verfügbar?",
      a: "Nein. Die USA stehen zusammen mit Kanada und den Niederlanden auf der Liste der verbotenen Länder von Binance.",
    },
    {
      topic: "safety",
      q: "Was ist der SAFU-Fonds von Binance?",
      a: "SAFU (Secure Asset Fund for Users) ist ein Notfallfonds, den Binance 2018 eingerichtet hat, um Nutzer in Extremfällen zu schützen. Nach Angaben von Binance hielt er im Februar 2026 Krypto-Assets im Wert von rund 1 Mrd. US-Dollar und wird aufgestockt, sobald er unter 800 Mio. US-Dollar fällt.",
    },
    {
      topic: "safety",
      q: "Wie prüfe ich den Reservenachweis von Binance?",
      a: "Binance veröffentlicht seine Reservequoten auf der Seite zum Reservenachweis (Proof of Reserves) und nutzt dafür einen Merkle-Baum mit zk-SNARKs. Eingeloggte Nutzer können unter Wallet → Verification bestätigen, dass ihr eigenes Guthaben enthalten ist.",
    },
  ],
};
