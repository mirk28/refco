import type { ExchangeText } from "../../types";

export const bitget: ExchangeText = {
  referral: {
    codeName: "Referral code",
    whereShort: "Feld “Referral code” im Registrierungsformular (optional)",
    apply:
      "Gib ihn im Feld “Referral code” des Registrierungsformulars ein oder öffne den Registrierungslink auf dieser Seite, der das Feld für dich ausfüllt und sperrt.",
    whereToEnter:
      "Das Registrierungsformular von Bitget enthält ein optionales Feld mit der Bezeichnung “Referral code”. Auf der Website kommt es direkt nach deiner E-Mail-Adresse oder Handynummer, noch bevor du das Passwort festlegst; in der App kommt es nach dem Passwort, bevor du auf “Create account” tippst. Der Link auf dieser Seite öffnet die Registrierungsseite des Bitget-Empfehlungsprogramms, auf der JZVEV1M3 bereits eingetragen und das Feld gesperrt ist.",
    afterSignupShort: "Nein – nur bei der Registrierung (Ausnahmen nur über den Support)",
    afterSignup:
      "Nicht in Eigenregie. Laut Hilfecenter von Bitget müssen Empfehlungscodes bei der Registrierung eingegeben werden und lassen sich nach der Kontoeröffnung weder hinzufügen noch ändern. Derselben Antwort im Hilfecenter zufolge bleibt nur ein Support-Ticket mit deiner UID, dem Code und einem Nachweis, dass die Einladung vor deiner Registrierung verschickt wurde – ein Erfolg ist nicht garantiert. Eine Frist dafür nennt Bitget nicht.",
    inviteeReward:
      "Das öffentliche Empfehlungsprogramm von Bitget belohnt eingeladene Nutzer mit BTC-Airdrops und Mystery Boxes: Für eine Nettoeinzahlung von mindestens 200 USDT innerhalb von 15 Tagen und einen qualifizierenden ersten Trade gibt es einen BTC-Airdrop im Wert von 9 US-Dollar plus eine Mystery Box mit bis zu 500 USDT; sobald dein gesamtes Handelsvolumen 100.000 USDT übersteigt, kommen weitere 18 US-Dollar in BTC plus eine Mystery Box mit bis zu 1.000 USDT hinzu. Voraussetzung ist, dass die einladende Person an der Aktion teilnimmt, und nichts wird ausgezahlt, wenn eine der beiden Seiten ein Affiliate-, Market-Maker- oder Broker-Konto hat – maßgeblich sind daher die Beträge, die dir nach der Registrierung in deinem Konto angezeigt werden. Unabhängig vom Code erhalten Neukunden das Willkommenspaket von Bitget mit bis zu 6.200 USDT.",
    guide: [
      "Ein Bitget Empfehlungscode verknüpft dein neues Konto mit der Person, die dich eingeladen hat. Für das Programm zählt Bitget fast alles, was du handelst: Spot-Handel einschließlich Copy Trading und Margin, Futures, Aktien-Perpetuals, Rohstoff-Perpetuals, Spot-Aktien und CFDs.",
      "Für die erste Prämienstufe brauchst du innerhalb von 15 Tagen nach der Registrierung eine Nettoeinzahlung von mindestens 200 USDT und am Tag deines ersten Trades mindestens 1.000 USDT Spot-Volumen, 4.000 USDT Futures-Volumen oder 100.000 USDT CFD-Volumen. Eine Mystery Box kann USDT, Futures-Trading-Boni, Futures-Positionsboost-Gutscheine, Earn-APR-Gutscheine oder Gutscheine für Rückvergütungen auf Spot-Gebühren enthalten und muss innerhalb von 30 Tagen nach der Gutschrift eingelöst werden.",
      "Einen Gebührenrabatt für eingeladene Nutzer führt Bitget nicht auf. Was deine Kosten bei Bitget senkt, ist der BGB-Token: Zahlst du Spot- oder Margin-Gebühren in BGB, sparst du 20 %.",
    ],
  },
  signup: {
    methods: ["E-Mail-Adresse", "Handynummer", "Google", "Telegram", "Krypto-Wallet"],
    steps: [
      {
        title: "Öffne die Registrierungsseite von Bitget",
        text: "Nutze den Registrierungsbutton auf dieser Seite. Bitget öffnet dann die Registrierungsseite des Empfehlungsprogramms, auf der der Code JZVEV1M3 bereits eingetragen und gesperrt ist.",
      },
      {
        title: "Gib deine E-Mail-Adresse oder Handynummer ein",
        text: "Die Registrierungsanleitung von Bitget nennt außerdem die Anmeldung mit Google, Telegram oder einer Wallet.",
      },
      {
        title: "Prüfe den Empfehlungscode und akzeptiere die Bedingungen",
        text: "Im Feld “Referral code” sollte JZVEV1M3 stehen. Stimme den Bedingungen zu und klicke auf “Next”.",
      },
      {
        title: "Lege ein Passwort fest",
        text: "Zwischen 8 und 32 Zeichen.",
      },
      {
        title: "Löse das Captcha und gib den 6-stelligen Code ein",
        text: "Schließe die Sicherheitsprüfung ab und tippe den 6-stelligen Code ein, den Bitget an deine E-Mail-Adresse oder dein Handy schickt. Für die Registrierung brauchst du keine Dokumente.",
      },
      {
        title: "Verifiziere deine Identität",
        text: "Schließe die Verifizierung der Stufe 1 mit einem Ausweisdokument und einem Gesichtsscan ab – ohne sie sind Einzahlungen, Trades und Auszahlungen nicht möglich.",
      },
    ],
    kycShort: "Pflicht für alle Nutzer",
    kyc: "Ja. Laut Bitget müssen alle Neukunden die Identitätsprüfung direkt nach der Registrierung abschließen; diese Regel gilt seit dem 1. September 2023. Ohne Verifizierung kannst du weder Geld einzahlen noch handeln oder Guthaben auszahlen – auch On-Chain-Auszahlungen und interne Überweisungen sind gesperrt. Stufe 1 besteht aus einem Ausweisdokument und einer Gesichtsverifizierung; einen Adressnachweis brauchst du nur, wenn Bitget ihn anfordert. Nach der Verifizierung liegt das Standard-Auszahlungslimit bei 3 Millionen USDT pro 24 Stunden.",
    documents: "Ein staatlich ausgestellter Personalausweis, Reisepass, Führerschein oder Aufenthaltstitel, dazu eine Gesichtsverifizierung.",
    minAge: "18 Jahre",
  },
  welcomeTasks: [
    { task: "Willkommenspaket: an drei Tagen einchecken", reward: "Positionsboost-Gutschein über 200 USDT für BTC-Futures (USDT-M)" },
    { task: "Challenge: Nettoeinzahlung von mindestens 1.000 USDT, 100 USDT Spot-Volumen und 300.000 USDT Futures-Volumen", reward: "50 USDT" },
    { task: "Challenge: Nettoeinzahlung von mindestens 20.000 USDT, 10.000 USDT Spot-Volumen und 2.000.000 USDT Futures-Volumen", reward: "400 USDT" },
    { task: "Challenge: Nettoeinzahlung von mindestens 100.000 USDT, 100.000 USDT Spot-Volumen und 80.000.000 USDT Futures-Volumen", reward: "6.000 USDT" },
    { task: "Empfehlung: Nettoeinzahlung von mindestens 200 USDT innerhalb von 15 Tagen plus ein qualifizierender erster Trade", reward: "BTC-Airdrop im Wert von 9 US-Dollar und eine Mystery Box (bis zu 500 USDT)" },
    { task: "Empfehlung: gesamtes Handelsvolumen über 100.000 USDT", reward: "18 US-Dollar in BTC und eine Mystery Box (bis zu 1.000 USDT)" },
  ],
  tokenDiscount:
    "Zahlst du Spot- oder Margin-Gebühren in BGB, bekommst du 20 % Rabatt – für Standardnutzer 0,08 % statt 0,1 %. Für Futures weist die Gebührentabelle von Bitget keinen BGB-Rabatt aus.",
  extraFeeMarkets: ["Coin-M-Futures", "USDC-M-Futures"],
  sourceLabels: [
    "Bitget: So registrierst du dich (Website)",
    "Bitget: So registrierst du dich (App)",
    "Bitget: Empfehlungsprogramm und Regeln",
    "Bitget-Hilfecenter: Empfehlungscode nach der Registrierung hinzufügen",
    "Bitget: Prämien für Neukunden (Willkommenspaket)",
    "Bitget: Regeln für Trading-Boni",
    "Bitget: Gebührenübersicht",
    "Bitget: Handelsgebühren mit BGB bezahlen",
    "Bitget: Identitätsprüfung (KYC)",
    "Bitget: Auszahlungslimits",
    "Bitget: Nutzungsbedingungen (verbotene Länder)",
    "Bitget: Über uns",
    "Bitget: Regulatorische Lizenzen",
    "Bitget: Reservenachweis (Proof of Reserves)",
    "Bitget: Schutzfonds (Protection Fund)",
    "Bitget: Copy Trading für Follower",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures", "Copy Trading", "Aktien-Perpetuals & CFDs"],
  bonusHeadline: "Willkommenspaket von bis zu 6.200 USDT",
  benefits: [
    "Neukundenprämien von bis zu 6.200 USDT, angefangen mit einem Futures-Positionsboost-Gutschein über 200 USDT für drei Tage Check-in",
    "Prämien aus dem Empfehlungsprogramm für eingeladene Nutzer: BTC-Airdrops und Mystery Boxes mit bis zu 500 und 1.000 USDT",
    "Eine einzige Empfehlung zählt für Spot, Margin, Futures, Copy Trading, Aktien-Perpetuals und CFDs",
    "20 % Rabatt auf Spot- und Margin-Gebühren, wenn du sie in BGB zahlst",
  ],
  benefitNote:
    "Die 6.200 USDT sind ein Höchstwert: 200 USDT gibt es als Futures-Positionsboost-Gutschein, der Rest stammt aus einer Einzahlungs- und Trading-Challenge, bei der nur die höchste erreichte Stufe ausgezahlt wird – für die Top-Prämie brauchst du also eine Nettoeinzahlung von 100.000 USDT und 80 Mio. USDT Futures-Volumen. Die Bedingungen müssen innerhalb von sieben Tagen erfüllt sein; bei Futures zählen nur Taker-Orders, Copy-, API- und Bot-Trades sind ausgeschlossen. Prämien musst du manuell abholen, und Trading-Boni können nicht in bar ausgezahlt werden. Empfehlungsprämien setzen voraus, dass die einladende Person an der Bitget-Aktion teilnimmt, und werden weder an Affiliate-Konten noch über sie ausgezahlt.",
  headquarters: "Von Bitget nicht angegeben (in den Nutzungsbedingungen genannter Betreiber: BTG Technology Holdings Limited)",
  regulation:
    "Registrierungen oder Lizenzen in Australien (AUSTRAC), El Salvador (BSP, DASP), Argentinien (VASP), Südafrika, Mexiko, Mauritius und Georgien",
  users: "150 Mio. registrierte Nutzer (laut Bitget)",
  assets: "600+ Spot-Handelspaare, 200+ Futures-Paare",
  maxLeverage: "Bis zu 150x (BTC- und ETH-Futures)",
  feeNote: "Auf höheren VIP-Stufen zahlst du weniger.",
  products: ["USDT-M-, Coin-M- & USDC-M-Futures", "Spot", "Margin", "Copy Trading", "Trading-Bots", "Tokenisierte Aktien & CFDs", "Earn", "Bitget Wallet"],
  tagline: "Die Heimat des Krypto-Copy-Tradings",
  quickAnswer:
    "Der Bitget Empfehlungscode lautet JZVEV1M3. Gib ihn bei der Kontoeröffnung im Feld “Referral code” ein – der Button auf dieser Seite trägt ihn ein und sperrt das Feld. Eingeben musst du ihn während der Registrierung: Laut Hilfecenter von Bitget lassen sich Codes danach weder hinzufügen noch ändern, außer über ein Support-Ticket. Neukunden können sich ein Willkommenspaket von bis zu 6.200 USDT sichern, angefangen mit einem Futures-Gutschein über 200 USDT für drei Tage Check-in.",
  about: [
    "Bitget wurde 2018 gegründet und meldet 150 Millionen registrierte Nutzer sowie ein tägliches Handelsvolumen von mehr als 20 Mrd. USDT. Bekannt wurde die Börse mit Copy Trading, und sie bezeichnet sich selbst als größte Krypto-Copy-Trading-Plattform: Follower wählen einen Lead Trader, legen einen Betrag ab 50 USDT fest, und Bitget bildet die Positionen dieses Traders automatisch nach; der Lead Trader erhält dafür einen Anteil an den Gewinnen des Followers.",
    "Die Plattform listet über 600 Spot-Handelspaare und mehr als 200 Futures-Paare, mit einem Hebel von bis zu 150x auf BTC und ETH und bis zu 10x im Margin-Handel. Standardnutzer zahlen im Spot-Handel 0,1 % – mit BGB 0,08 % – und bei USDT-M-, Coin-M- und USDC-M-Futures 0,02 % Maker / 0,06 % Taker. Trading-Bots, Earn-Produkte, tokenisierte Aktien, CFDs und die Bitget Wallet zur Eigenverwahrung runden das Angebot ab.",
    "Bitget veröffentlicht jeden Monat einen Reservenachweis auf Basis eines Merkle-Baums; der Snapshot vom 12. November 2026 ergab eine Gesamtreservequote von 124 %, bei BTC 127 %, bei USDT 114 % und bei ETH 103 %. Der Schutzfonds (Protection Fund) wird mit 274 Mio. US-Dollar bewertet und soll Verluste aus plattformweiten Ereignissen abdecken, die Nutzer nicht selbst verschuldet haben. Bitget nennt Registrierungen oder Lizenzen in Australien, El Salvador, Argentinien, Südafrika, Mexiko, Mauritius und Georgien; die Nutzungsbedingungen schließen eine lange Liste von Ländern aus, darunter die USA, Kanada, Deutschland, Frankreich und Österreich.",
  ],
  highlights: [
    { title: "Führend im Copy Trading", text: "Folge Lead Tradern ab 50 USDT und übernimm ihre Positionen automatisch." },
    { title: "Schutzfonds über 274 Mio. $", text: "Ein eigener Fonds für Verluste aus plattformweiten Ereignissen." },
    { title: "Reserven bei 124 %", text: "Monatlicher Reservenachweis per Merkle-Baum, letzter Snapshot vom 12. November 2026." },
  ],
  pros: [
    "Copy Trading für Futures und Spot ab 50 USDT",
    "Monatlicher Reservenachweis mit 124 % und ein Schutzfonds über 274 Mio. US-Dollar",
    "Standardgebühren für Futures von 0,02 % Maker / 0,06 % Taker und 20 % Rabatt auf Spot-Gebühren mit BGB",
    "Der Empfehlungslink trägt den Code ein und sperrt ihn – Tippfehler sind ausgeschlossen",
  ],
  cons: [
    "Ein Empfehlungscode lässt sich nach der Registrierung nicht mehr hinzufügen, außer über ein Support-Ticket",
    "Nicht verfügbar in den USA, Kanada, Deutschland, Frankreich, Österreich, Japan und Singapur",
    "Die höchste Willkommensprämie verlangt eine sehr hohe Einzahlung und sehr viel Handelsvolumen",
    "Copy Trading kann eine falsche Sicherheit vermitteln – vergangene Ergebnisse garantieren keine künftigen Renditen",
  ],
  bestFor: ["Trader, die erfahrene Futures-Trader kopieren wollen", "Trader von Altcoin-Futures", "Nutzer, die über Krypto auch auf Aktien setzen wollen"],
  signupTip:
    "Verifiziere deine Identität direkt nach der Registrierung – ohne sie lässt Bitget weder Einzahlungen noch Trades oder Auszahlungen zu – und checke an drei Tagen ein, um dir den Futures-Positionsboost-Gutschein über 200 USDT zu sichern.",
  safety:
    "Bitget veröffentlicht monatlich einen Reservenachweis per Merkle-Baum – beim Snapshot vom 12. November 2026 insgesamt 124 % – und unterhält einen Schutzfonds im Wert von 274 Mio. US-Dollar; Ansprüche an den Fonds prüft Bitget selbst. Richte bei der Registrierung gleich die Zwei-Faktor-Authentifizierung ein. Copy-Trading-Ergebnisse spiegeln die Vergangenheit wider und garantieren keine künftigen Renditen.",
  restricted:
    "Die Nutzungsbedingungen von Bitget (zuletzt aktualisiert am 4. November 2026) führen unter anderem diese Länder als verboten auf: Österreich, Belarus, Kanada, Kuba, Frankreich, Deutschland, Hongkong, Iran, Japan, Kasachstan, Malaysia, Nordkorea, Russland, Singapur, Sudan, Thailand, die Vereinigten Arabischen Emirate und die USA einschließlich ihrer Territorien. Die Verifizierungsseite von Bitget nennt zusätzlich Indien, Italien und Spanien. Die Sperre per VPN zu umgehen, ist verboten.",
  faqs: [
    {
      topic: "referral",
      q: "Funktioniert der Bitget Empfehlungscode JZVEV1M3?",
      a: "Ja. Am 16. November 2026 öffnete der Link auf dieser Seite die Registrierungsseite des Bitget-Empfehlungsprogramms, und im Feld für den Empfehlungscode stand JZVEV1M3 bereits vorausgefüllt und gesperrt.",
    },
    {
      topic: "referral",
      q: "Warum öffnet sich der Bitget Registrierungslink auf einer anderen Domain oder in einer anderen Sprache?",
      a: "Die Teilen-Links von Bitget leiten über mehrere eigene Domains der Börse weiter – bei unserer Prüfung öffnete derselbe Link einmal auf bitget.com und einmal auf bitget.site – und können sich in der Sprache öffnen, in der der Link erstellt wurde. Der Empfehlungscode JZVEV1M3 war jedes Mal eingetragen.",
    },
    {
      topic: "referral",
      q: "Welche Trades zählen für das Bitget Empfehlungsprogramm?",
      a: "Spot-Handel einschließlich Copy Trading und Margin, Futures-Handel, Aktien-Perpetuals, Rohstoff-Perpetuals, Spot-Handel mit Aktien und CFD-Handel.",
    },
    {
      topic: "referral",
      q: "Was ist eine Bitget Mystery Box?",
      a: "Eine Prämie aus dem Empfehlungsprogramm von Bitget. Sie kann USDT, Futures-Trading-Boni, Futures-Positionsboost-Gutscheine, Earn-APR-Gutscheine oder Gutscheine für Rückvergütungen auf Spot-Gebühren enthalten und muss innerhalb von 30 Tagen nach der Gutschrift eingelöst werden.",
    },
    {
      topic: "signup",
      q: "Brauche ich Dokumente für die Registrierung bei Bitget?",
      a: "Für die Kontoeröffnung nicht – laut der Anleitung von Bitget sind für die Registrierung keine Dokumente nötig. Für die anschließende Identitätsprüfung brauchst du aber ein Ausweisdokument und einen Gesichtsscan, und ohne sie sind Einzahlungen, Trades und Auszahlungen nicht möglich.",
    },
    {
      topic: "signup",
      q: "Welche Passwort-Anforderungen hat Bitget?",
      a: "Ein Bitget-Passwort muss zwischen 8 und 32 Zeichen lang sein.",
    },
    {
      topic: "signup",
      q: "Kann ich mich bei Bitget mit Google oder Telegram registrieren?",
      a: "Ja. Laut der Registrierungsanleitung von Bitget kannst du dich neben E-Mail-Adresse oder Handynummer auch direkt mit Google, Telegram oder einer Wallet registrieren.",
    },
    {
      topic: "signup",
      q: "Kann ich Bitget ohne KYC nutzen?",
      a: "Nein. Seit dem 1. September 2023 müssen alle Neukunden die Identitätsprüfung direkt nach der Registrierung abschließen; ohne sie lässt Bitget keine Einzahlungen, Trades oder Auszahlungen zu.",
    },
    {
      topic: "bonus",
      q: "Wie hoch ist der Bitget Willkommensbonus für Neukunden?",
      a: "Bitget wirbt mit Neukundenprämien von bis zu 6.200 USDT. Sie setzen sich zusammen aus einem Positionsboost-Gutschein über 200 USDT für BTC-Futures (USDT-M), den du für drei Tage Check-in erhältst, und einer Einzahlungs- und Trading-Challenge über 50, 400 oder 6.000 USDT, bei der nur die höchste erreichte Stufe ausgezahlt wird.",
    },
    {
      topic: "bonus",
      q: "Was muss ich für die Bitget Prämie von 6.000 USDT tun?",
      a: "Innerhalb von sieben Tagen: eine Nettoeinzahlung von mindestens 100.000 USDT, 100.000 USDT Spot-Volumen und 80.000.000 USDT Futures-Volumen. Für die Stufe mit 50 USDT brauchst du 1.000 USDT Einzahlung, 100 USDT Spot-Volumen und 300.000 USDT Futures-Volumen. Bei Futures zählen nur Taker-Orders; Copy-, API- und Bot-Trades sind ausgeschlossen.",
    },
    {
      topic: "bonus",
      q: "Kann ich Bitget Trading-Boni auszahlen lassen?",
      a: "Nein. Laut Bitget sind Trading-Boni nicht auszahlbar und können nicht in bar entnommen werden. Zahlst du innerhalb von drei Tagen nach dem Challenge-Zeitraum Guthaben aus, verfällt außerdem die Challenge-Prämie.",
    },
    {
      topic: "fees",
      q: "Wie hoch sind die Bitget Futures-Gebühren?",
      a: "Standardnutzer zahlen bei USDT-M-, Coin-M- und USDC-M-Futures 0,02 % Maker- und 0,06 % Taker-Gebühr.",
    },
    {
      topic: "fees",
      q: "Wie hoch ist der BGB-Gebührenrabatt bei Bitget?",
      a: "20 % auf Spot- und Margin-Gebühren – damit sinkt die Standardgebühr im Spot-Handel von 0,1 % auf 0,08 %. Für Futures weist die Gebührentabelle von Bitget keinen BGB-Rabatt aus.",
    },
    {
      topic: "fees",
      q: "Wie hoch ist der maximale Hebel bei Bitget?",
      a: "Bis zu 150x bei BTC- und ETH-Futures; das Maximum hängt vom jeweiligen Coin ab. Im Margin-Handel sind bis zu 10x möglich. Ein hoher Hebel erhöht das Liquidationsrisiko erheblich.",
    },
    {
      topic: "fees",
      q: "Wie funktioniert Copy Trading bei Bitget und was kostet es?",
      a: "Du wählst einen Lead Trader, legst deinen Betrag fest – mindestens 50 USDT – und Bitget bildet die Positionen des Traders in deinem Konto nach. Der Lead Trader erhält einen Anteil an deinen Gewinnen; die Hilfeseiten von Bitget selbst nennen dafür unterschiedliche Spannen, prüfe also den Satz im Profil des Traders, bevor du ihm folgst.",
    },
    {
      topic: "safety",
      q: "Was ist der Bitget Schutzfonds (Protection Fund)?",
      a: "Ein Fonds, den Bitget unterhält, um Verluste von Nutzern aus plattformweiten Ereignissen zu decken, die sie nicht durch eigenes Handeln verursacht haben. Bitget beziffert ihn auf 274 Mio. US-Dollar, gehalten in 4.204,71 BTC, und prüft Ansprüche selbst.",
    },
    {
      topic: "safety",
      q: "Ist Bitget in den USA oder in Deutschland verfügbar?",
      a: "Nein. Die USA, Deutschland, Frankreich, Österreich, Kanada, Japan und Singapur stehen allesamt auf der Liste der verbotenen Länder in den Nutzungsbedingungen von Bitget.",
    },
    {
      topic: "safety",
      q: "Veröffentlicht Bitget einen Reservenachweis (Proof of Reserves)?",
      a: "Ja, jeden Monat, als Nachweis per Merkle-Baum. Der Snapshot vom 12. November 2026 ergab eine Gesamtreservequote von 124 %: 127 % für BTC, 114 % für USDT und 103 % für ETH.",
    },
  ],
};
