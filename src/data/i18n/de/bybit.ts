import type { ExchangeText } from "../../types";

export const bybit: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Feld “Referral Code (Optional)” im Registrierungsformular",
    apply:
      "Gib ihn im Feld “Referral Code (Optional)” des Registrierungsformulars ein oder öffne den Registrierungslink auf dieser Seite, der das Feld automatisch für dich ausfüllt.",
    whereToEnter:
      "Das Registrierungsformular von Bybit hat ein Feld mit der Beschriftung “Referral Code (Optional)”. Auf der Website kommst du dorthin, nachdem du deine E-Mail-Adresse oder Telefonnummer eingegeben hast, in der App einen Schritt später – in beiden Fällen, bevor du auf “Sign Up Now” tippst. Der Link auf dieser Seite öffnet die Einladungsseite von Bybit, in der VN3KGLE schon in diesem Feld steht. Das Feld bleibt bearbeitbar, prüfe also vor dem Absenden, ob der Code noch drinsteht.",
    afterSignupShort: "Nein – nur bei der Registrierung",
    afterSignup:
      "Nein. In der Registrierungsanleitung von Bybit heißt es, dass du deinen Empfehlungs- oder Affiliate-Code nach der Registrierung nicht mehr hinzufügen, ändern oder löschen kannst. Die einzige Ausnahme, die Bybit dokumentiert, gilt für Affiliate-Codes: Sie lassen sich innerhalb von 14 Tagen zu einem Hauptkonto hinzufügen, das noch keinen Code hat. Bybit stellt ausdrücklich klar, dass Codes aus dem Empfehlungsprogramm wie VN3KGLE dort nicht unterstützt werden.",
    inviteeReward:
      "Im Empfehlungsprogramm von Bybit kannst du als eingeladener Nutzer bis zu 250 USDT verdienen: 50 USDT für einen ersten Trade von mindestens 50 $ innerhalb von 14 Tagen nach der Registrierung, 100 USDT für mindestens 500 $ kumuliertes Handelsvolumen in den 30 Tagen nach diesem ersten Trade und weitere 100 USDT für mindestens 10.000 $ in denselben 30 Tagen. Auf der Einladungsseite wirbt Bybit zusätzlich mit Prämien für Eingeladene, die sich registrieren und die Identitätsprüfung abschließen, und Neukunden erhalten im Rewards Hub die Welcome Gifts über 100 USDT.",
    guide: [
      "Das Empfehlungsprogramm von Bybit belohnt beide Seiten mit denselben Beträgen – deshalb wirbt Bybit mit “up to 500 USDT combined”, also mit bis zu 500 USDT für beide zusammen. Als eingeladener Nutzer schaltest du deinen Anteil in drei Stufen frei, die an dein eigenes Trading geknüpft sind: ein erster Trade von mindestens 50 $ innerhalb von 14 Tagen nach der Registrierung, danach 500 $ und 10.000 $ kumuliertes Volumen in den folgenden 30 Tagen. Es zählt das Volumen aus Spot, Derivaten und Optionen, Trades in gebührenfreien Paaren dagegen nicht.",
      "Jede Prämie durchläuft eine 3-tägige Risikoprüfung und muss danach innerhalb von 10 Tagen abgeholt werden, sonst verfällt sie. Bybit begrenzt das Programm auf einen monatlichen Topf von 500.000 USDT, der nach dem Prinzip „Wer zuerst kommt, mahlt zuerst“ ausgezahlt wird. Diese Bedingungen gelten für Konten, die ab dem 10. Oktober 2026 auf der globalen Website registriert wurden.",
      "Ob der Code überhaupt etwas bringt, hängt von deinem Wohnort ab. Laut den Empfehlungsbedingungen von Bybit gibt es in Deutschland, im Vereinigten Königreich, in Frankreich, Belgien und Hongkong kein Empfehlungsprogramm, und für Einwohner des EWR (Europäischer Wirtschaftsraum), die innerhalb des EWR eingeladen werden, ist es nicht geöffnet. Wer im EWR wohnt, nutzt Bybit EU (bybit.eu) – eine separate Plattform der Bybit EU GmbH in Wien mit einem eigenen, kleineren Empfehlungsangebot.",
    ],
  },
  signup: {
    methods: ["E-Mail-Adresse", "Telefonnummer", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Öffne die Registrierungsseite von Bybit",
        text: "Nutze den Registrierungsbutton auf dieser Seite. Er öffnet die Einladungsseite von Bybit, auf der der Empfehlungscode VN3KGLE bereits eingetragen ist.",
      },
      {
        title: "Wähle dein Wohnsitzland",
        text: "Bybit fragt zuerst danach, weil Produkte und Prämien davon abhängen, wo du wohnst.",
      },
      {
        title: "Gib deine E-Mail-Adresse oder Telefonnummer ein",
        text: "Alternativ kannst du mit Google, Apple oder Telegram fortfahren.",
      },
      {
        title: "Prüfe den Empfehlungscode",
        text: "Im Feld “Referral Code (Optional)” sollte VN3KGLE stehen. Das ist deine einzige Chance – Bybit lässt dich den Code später weder hinzufügen noch ändern.",
      },
      {
        title: "Gib den Bestätigungscode ein und lege ein Passwort fest",
        text: "Bestätige den Code, den Bybit dir schickt, wähle ein Passwort und tippe auf “Sign Up Now”. In der App (ab Version 4.47.0) kannst du außerdem einen Passkey einrichten.",
      },
      {
        title: "Schließe die Identitätsprüfung ab",
        text: "Bybit verlangt die Verifizierungsstufe Standard, bevor du einzahlen oder handeln kannst.",
      },
    ],
    kycShort: "Pflicht für alle Produkte (Stufe Standard)",
    kyc: "Ja. Bybit verlangt für alle Produkte mindestens die Identitätsprüfung der Stufe Standard. Ohne sie kannst du mit einem Konto weder einzahlen noch handeln, sondern nur auszahlen – bis zu 20.000 USDT pro Tag und 100.000 USDT pro Monat. Die Standard-Verifizierung (ein Ausweisdokument plus eine Identitätsbewertung) hebt das tägliche Auszahlungslimit auf 1 Mio. USDT, die Advanced-Verifizierung mit Adressnachweis auf 2 Mio. USDT.",
    documents:
      "Bybit akzeptiert Reisepass, Personalausweis, Aufenthaltstitel oder Führerschein. Angenommen werden nur physische Dokumente, und für die Stufe Advanced brauchst du zusätzlich einen Adressnachweis.",
    minAge: "18 Jahre",
  },
  welcomeTasks: [
    { task: "Empfehlungsprogramm: erster Trade von mindestens 50 $ innerhalb von 14 Tagen nach der Registrierung", reward: "50 USDT" },
    { task: "Empfehlungsprogramm: mindestens 500 $ kumuliertes Handelsvolumen in den 30 Tagen nach dem ersten Trade", reward: "100 USDT" },
    { task: "Empfehlungsprogramm: mindestens 10.000 $ kumuliertes Handelsvolumen in denselben 30 Tagen", reward: "100 USDT" },
    { task: "Welcome Gifts: Identitätsprüfung abschließen", reward: "20 USDT Fee Saver (Derivate)" },
    { task: "Welcome Gifts: mindestens 10 $ einzahlen", reward: "30 USDT Position Airdrop (Derivate)" },
    { task: "Welcome Gifts: mindestens 10 $ handeln", reward: "50 USDT Fee Saver (Derivate)" },
  ],
  tokenDiscount:
    "Wenn du Gebühren in MNT bezahlst, sparst du 25 % bei den Spot-Gebühren (0,075 % auf VIP 0) und 10 % bei den Futures-Gebühren (0,018 % Maker / 0,0495 % Taker). Der Rabatt gilt nicht für inverse Kontrakte, Trading-Bots, Follower im Copy Trading und API-Trading.",
  extraFeeMarkets: ["Optionen"],
  sourceLabels: [
    "Bybit: So registrierst du ein Konto",
    "Bybit: Empfehlungsprogramm – allgemeine FAQ",
    "Bybit: Seite und Bedingungen des Empfehlungsprogramms",
    "Bybit: Registrierten Affiliate-Code hinzufügen und prüfen",
    "Bybit: Welcome Gifts im Rewards Hub",
    "Bybit: FAQ zum Rewards Hub",
    "Bybit: Struktur der Handelsgebühren",
    "Bybit: Handelsgebühren mit MNT bezahlen",
    "Bybit: Margin-Parameter (Hebelstufen)",
    "Bybit: KYC-FAQ für Privatkunden",
    "Bybit: Vorteile der verschiedenen KYC-Stufen",
    "Bybit: Länder mit eingeschränktem Service",
    "Bybit: Über uns",
    "Bybit: Reservenachweis (Proof of Reserves)",
    "Bybit: Chronologie des Sicherheitsvorfalls (Februar 2025)",
    "Bybit: Bybit Europe und MiCAR",
    "Bybit EU: Empfehlungsprogramm",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Derivate", "Optionen"],
  bonusHeadline: "Bis zu 250 USDT Empfehlungsprämien",
  benefits: [
    "Bis zu 250 USDT für Eingeladene: 50 USDT nach einem ersten Trade ab 50 $ innerhalb von 14 Tagen, dazu je 100 USDT bei 500 $ und bei 10.000 $ Volumen",
    "Welcome Gifts über 100 USDT im Rewards Hub für Verifizierung, eine Einzahlung von 10 $ und 10 $ Handelsvolumen",
    "Ein Empfehlungscode für das ganze Konto – Volumen aus Spot, Derivaten und Optionen zählt gleichermaßen",
    "25 % Rabatt auf Spot-Gebühren und 10 % auf Futures-Gebühren, wenn du Gebühren in MNT bezahlst",
  ],
  benefitNote:
    "Die Empfehlungsprämien gelten für Konten, die ab dem 10. Oktober 2026 auf der globalen Website von Bybit registriert wurden, durchlaufen eine 3-tägige Risikoprüfung, müssen innerhalb von 10 Tagen abgeholt werden und stammen aus einem monatlichen Topf von 500.000 USDT (wer zuerst kommt, mahlt zuerst). In Deutschland, im Vereinigten Königreich, in Frankreich, Belgien und Hongkong betreibt Bybit kein Empfehlungsprogramm, und für Einwohner des EWR, die innerhalb des EWR eingeladen werden, ist es nicht geöffnet. Welcome Gifts setzen die Identitätsprüfung Lv. 1 voraus, unterscheiden sich je nach Nutzer und Region, verfallen und können nicht ausgezahlt werden.",
  headquarters: "Dubai, VAE",
  regulation: "MiCAR-Zulassung über die Bybit EU GmbH, Wien (beaufsichtigt von der österreichischen FMA), für den EWR außer Malta",
  users: "90 Mio.+ Nutzer (laut Bybit)",
  assets: "390 Coins, 509 Spot-Paare (Bybit-API)",
  maxLeverage: "Bis zu 150x (BTCUSDT-Perpetual)",
  feeNote:
    "Die Gebühren sinken mit der VIP-Stufe – Supreme VIP zahlt auf Derivate 0 % Maker-Gebühr – und können je nach Region abweichen; maßgeblich ist die Seite “My Fee Rate” in deinem Konto.",
  products: [
    "USDT- und USDC-Perpetuals",
    "Inverse Kontrakte",
    "Optionen",
    "Spot",
    "Copy Trading",
    "Trading-Bots",
    "Einheitliches Trading-Konto",
  ],
  tagline: "Schnelle Trading-Engine mit Fokus auf Derivate",
  quickAnswer:
    "Der Bybit Empfehlungscode lautet VN3KGLE. Gib ihn bei der Registrierung im Feld “Referral Code (Optional)” ein – der Button auf dieser Seite trägt ihn automatisch für dich ein. Er muss schon bei der Registrierung dort stehen: Bybit lässt dich einen Empfehlungscode nachträglich weder hinzufügen noch ändern. Eingeladene Nutzer können in drei Trading-Stufen bis zu 250 USDT verdienen, angefangen mit 50 USDT für einen ersten Trade von 50 $ innerhalb von 14 Tagen.",
  about: [
    "Bybit startete 2018 als Derivatebörse und verlegte den Hauptsitz 2023 nach Dubai. Heute meldet die Börse mehr als 90 Millionen Nutzer in über 181 Ländern und bezeichnet sich selbst als die nach Handelsvolumen zweitgrößte Börse der Welt. Die Plattform ist nach wie vor spürbar für aktive Trader gebaut: schnelle Ordereingabe, ein einheitliches Trading-Konto und eine ausgereifte mobile App.",
    "Neben USDT- und USDC-Perpetuals bietet Bybit inverse Kontrakte, Optionen, Spot, Copy Trading und Trading-Bots. Standardnutzer zahlen auf Perpetuals und Futures 0,02 % Maker- und 0,055 % Taker-Gebühr, im Spot-Handel 0,1 %. Der Hebel reicht beim BTCUSDT-Perpetual in der niedrigsten Risikostufe bis 150x und sinkt, je größer die Position wird. Kunden in Europa betreut die Bybit EU GmbH in Wien, die unter MiCAR von der österreichischen FMA beaufsichtigt wird und den EWR außer Malta abdeckt.",
    "Am 21. Februar 2025 erbeuteten Angreifer rund 1,46 Mrd. US-Dollar aus einer der Ethereum-Cold-Wallets von Bybit – der größte Hack in der Geschichte der Kryptowährungen. Bybit hielt die Auszahlungen offen, ersetzte das fehlende ETH über Überbrückungskredite, große Einzahlungen und OTC-Käufe, und ein Reservenachweis-Audit von Hacken am 24. Februar zeigte, dass die Lücke binnen 72 Stunden geschlossen war. Nach Angaben von Bybit waren die Kundengelder durchgehend 1:1 gedeckt.",
  ],
  highlights: [
    { title: "Derivate-DNA", text: "Von Anfang an für Futures-Trader gebaut, mit einer schnellen Matching-Engine." },
    { title: "Bis zu 250 USDT", text: "Empfehlungsprämien in drei Stufen, gekoppelt an dein eigenes Handelsvolumen." },
    { title: "Lücke in 72 Stunden geschlossen", text: "Nach dem Hack 2025 hielt Bybit die Auszahlungen offen und stellte die Reserven wieder her." },
  ],
  pros: [
    "Schnelle, stabile Engine und erstklassige mobile App",
    "Große Auswahl an Perpetual-, inversen und Optionskontrakten",
    "Klare Empfehlungsprämien von bis zu 250 USDT für Eingeladene",
    "Reservenachweis mit Selbstprüfung per Merkle-Tree",
  ],
  cons: [
    "Schwerer Sicherheitsvorfall im Februar 2025 (1,46 Mrd. US-Dollar aus einer Ethereum-Cold-Wallet entwendet)",
    "Ein Empfehlungscode lässt sich nach der Registrierung weder hinzufügen noch ändern",
    "Kein Empfehlungsprogramm für Einwohner des EWR sowie in Deutschland, im Vereinigten Königreich, in Frankreich, Belgien und Hongkong",
    "Nicht verfügbar in den USA, in Kanada, Singapur, Hongkong und Festlandchina",
  ],
  bestFor: ["Aktive Trader von Perpetual Futures", "Trader, die vor allem mobil handeln", "Nutzer, die Copy Trading mit Derivaten wollen"],
  signupTip:
    "Prüfe das Feld “Referral Code (Optional)”, bevor du auf “Sign Up Now” tippst – später lässt es sich nicht mehr korrigieren. Mach dann innerhalb von 14 Tagen deinen ersten Trade über mindestens 50 $, um die ersten 50 USDT freizuschalten.",
  safety:
    "Bybit verwahrt Kundengelder in Multi-Signature-Cold-Wallets und veröffentlicht einen Reservenachweis, der nach eigenen Angaben eine 1:1-Deckung belegt; der neueste Snapshot stammte bei unserer Prüfung vom 27. Oktober 2026, und dein eigenes Guthaben kannst du per Merkle-Tree-Check und mit einem Open-Source-Tool überprüfen. Für dein Konto bietet Bybit Google Authenticator und einen Anti-Phishing-Code. Der Hack vom Februar 2025 zeigt, dass auch große Börsen gehackt werden können – lass nur dein Trading-Kapital auf der Plattform.",
  restricted:
    "Auf der Liste der gesperrten Länder von Bybit stehen: die USA, Festlandchina, Hongkong, Singapur, Kanada, Nordkorea, Kuba, Iran, Usbekistan, Sudan, Syrien sowie die Krim, Sewastopol und die nicht von der Regierung kontrollierten Teile von Donezk, Luhansk, Cherson und Saporischschja. Im Vereinigten Königreich nimmt Bybit keine Neuregistrierungen an, und seit dem 21. Oktober 2026 sind britische Konten auf Auszahlungen beschränkt.",
  faqs: [
    {
      topic: "referral",
      q: "Ist VN3KGLE ein gültiger Bybit Empfehlungscode?",
      a: "Ja. Am 16. November 2026 öffnete der Link auf dieser Seite die Einladungsseite von Bybit, und VN3KGLE stand bereits im Feld “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Ist ein Bybit Referral-Code dasselbe wie ein Affiliate-Code?",
      a: "Nein. Bybit behandelt beide unterschiedlich: Ein Affiliate-Code kann innerhalb von 14 Tagen nach der Registrierung zu einem Hauptkonto hinzugefügt werden, das noch keinen Code hat, Codes aus dem Empfehlungsprogramm wie VN3KGLE dagegen lassen sich nach der Registrierung überhaupt nicht mehr hinzufügen.",
    },
    {
      topic: "referral",
      q: "Funktioniert der Bybit Empfehlungscode in der EU?",
      a: "Nein. Laut den Empfehlungsbedingungen von Bybit ist das Programm nicht für Einwohner des EWR geöffnet, die innerhalb des EWR eingeladen werden, und in Deutschland, Frankreich und Belgien gibt es kein Empfehlungsprogramm. Wer im EWR wohnt, nutzt Bybit EU (bybit.eu) mit einem eigenen Empfehlungsangebot.",
    },
    {
      topic: "referral",
      q: "Welche Trades zählen für die Bybit Empfehlungsprämien?",
      a: "Es zählt das Handelsvolumen aus Spot, Derivaten und Optionen; Bybit nennt außerdem Alpha, Convert und einige neuere Produkte. Trades in gebührenfreien Paaren sind ausgeschlossen.",
    },
    {
      topic: "signup",
      q: "Kann ich mich bei Bybit mit Google, Apple oder Telegram registrieren?",
      a: "Ja. Bei der Registrierung bietet Bybit neben E-Mail-Adresse oder Telefonnummer auch Google, Apple und Telegram an. In der App (ab Version 4.47.0) kannst du zusätzlich einen Passkey erstellen.",
    },
    {
      topic: "signup",
      q: "Kann ich Bybit ohne KYC nutzen?",
      a: "Nicht zum Handeln. Ohne Identitätsprüfung kannst du mit einem Bybit-Konto weder einzahlen noch handeln, sondern nur auszahlen – bis zu 20.000 USDT pro Tag und 100.000 USDT pro Monat.",
    },
    {
      topic: "signup",
      q: "Welche KYC-Stufen und Auszahlungslimits gibt es bei Bybit?",
      a: "Die Standard-Verifizierung (Ausweisdokument plus Identitätsbewertung) erlaubt Auszahlungen von bis zu 1 Mio. USDT pro Tag. Die Advanced-Verifizierung, für die zusätzlich ein Adressnachweis nötig ist, hebt das Limit auf 2 Mio. USDT pro Tag. Für höhere Limits gibt es eine Pro-Stufe mit erweiterter Sorgfaltsprüfung.",
    },
    {
      topic: "bonus",
      q: "Wie hoch ist der Bybit Empfehlungsbonus für Neukunden?",
      a: "Bis zu 250 USDT für Eingeladene: 50 USDT für einen ersten Trade von mindestens 50 $ innerhalb von 14 Tagen nach der Registrierung, 100 USDT für 500 $ kumuliertes Volumen in den 30 Tagen nach diesem Trade und 100 USDT für 10.000 $ im selben Zeitraum. Wer einlädt, erhält dieselben Beträge – deshalb wirbt Bybit mit bis zu 500 USDT zusammen.",
    },
    {
      topic: "bonus",
      q: "Was sind die Bybit Welcome Gifts?",
      a: "Im Rewards Hub von Bybit stehen Welcome Gifts über 100 USDT: ein Fee Saver über 20 USDT für den Abschluss der Identitätsprüfung, ein Position Airdrop über 30 USDT für eine Einzahlung von mindestens 10 $ und ein Fee Saver über 50 USDT für einen Trade von mindestens 10 $ – alle für Derivate. Die Aufgaben unterscheiden sich je nach Nutzer und Region.",
    },
    {
      topic: "bonus",
      q: "Muss ich die Bybit Empfehlungsprämien selbst abholen?",
      a: "Ja. Jede Prämie durchläuft zuerst eine 3-tägige Risikoprüfung und muss danach innerhalb von 10 Tagen abgeholt werden, sonst verfällt sie. Die Prämien stammen aus einem monatlichen Topf von 500.000 USDT und werden nach dem Prinzip „Wer zuerst kommt, mahlt zuerst“ ausgezahlt.",
    },
    {
      topic: "bonus",
      q: "Kann ich Bybit Welcome Gifts auszahlen lassen?",
      a: "Nein. Laut Bybit verfallen Prämien aus dem Rewards Hub und sind nicht auszahlbar. Fee Saver werden mit Handelsgebühren verrechnet, Position Airdrops dienen als Margin im Derivatehandel.",
    },
    {
      topic: "fees",
      q: "Wie hoch sind die Futures-Gebühren bei Bybit?",
      a: "Auf VIP 0 zahlst du bei Perpetual- und Futures-Kontrakten 0,02 % Maker und 0,055 % Taker, im Spot-Handel 0,1 % und bei Optionen 0,02 % Maker / 0,03 % Taker. Wer in MNT zahlt, senkt die Futures-Gebühren um 10 % auf 0,018 % / 0,0495 %.",
    },
    {
      topic: "fees",
      q: "Wie hoch ist der maximale Hebel bei Bybit?",
      a: "Bis zu 150x beim BTCUSDT-Perpetual in der ersten Risikostufe (Positionen bis 300.000 USDT); in der nächsten Stufe sinkt das Maximum auf 100x und mit wachsender Position weiter. Ein hoher Hebel erhöht das Liquidationsrisiko erheblich.",
    },
    {
      topic: "fees",
      q: "Wie hoch ist der MNT-Gebührenrabatt bei Bybit?",
      a: "Wenn du Gebühren in MNT bezahlst, sparst du 25 % bei den Spot-Gebühren und 10 % bei den Futures-Gebühren. Für inverse Kontrakte, Trading-Bots, Follower im Copy Trading und API-Trading gilt der Rabatt nicht.",
    },
    {
      topic: "safety",
      q: "Wurde Bybit gehackt?",
      a: "Ja. Am 21. Februar 2025 wurden rund 1,46 Mrd. US-Dollar aus einer Ethereum-Cold-Wallet entwendet. Bybit stoppte die Auszahlungen nicht, beschaffte Ersatz-ETH über Überbrückungskredite, große Einzahlungen und OTC-Käufe, und ein Reservenachweis-Audit von Hacken am 24. Februar zeigte, dass die Lücke binnen 72 Stunden geschlossen war.",
    },
    {
      topic: "safety",
      q: "Ist Bybit im Vereinigten Königreich verfügbar?",
      a: "Nein. Bybit nimmt keine Neuregistrierungen aus dem Vereinigten Königreich an, und seit dem 21. Oktober 2026 können Konten mit Wohnsitz im Vereinigten Königreich nur noch Auszahlungen vornehmen.",
    },
    {
      topic: "safety",
      q: "Ist Bybit in Europa verfügbar?",
      a: "Einwohner des EWR betreut die Bybit EU GmbH in Wien, die unter MiCAR von der österreichischen Finanzmarktaufsicht beaufsichtigt wird und den EWR außer Malta abdeckt. Es handelt sich um eine separate Plattform mit eigenen Gebühren und eigenem Produktangebot.",
    },
  ],
};
