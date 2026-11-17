import type { ExchangeText } from "../../types";

export const gate: ExchangeText = {
  referral: {
    codeName: "Empfehlungscode",
    whereShort: "Wird über den Registrierungslink übernommen – Gate zeigt den Werber im Anmeldeformular an",
    apply:
      "Öffne den Registrierungslink auf dieser Seite: Gate verknüpft den Code mit deiner Registrierung und blendet im Formular ein Banner mit dem Werber und der Prämie ein.",
    whereToEnter:
      "Bei Gate ist der Empfehlungslink der sicherste Weg. Der Link auf dieser Seite öffnet gate.com/signup mit bereits hinterlegtem Code VAAXAW9YVA, und Gate bestätigt das mit einem Banner über dem Formular (“Register now to receive a gift from your friend”). Im ersten Schritt des Webformulars fragt Gate nur nach deinem Wohnsitzland, ein eigenes Feld für den Code gibt es dort also nicht – siehst du das Banner mit dem Werber nicht, öffne den Link erneut, bevor du das Konto anlegst.",
    afterSignupShort: "Von Gate nicht dokumentiert – nutze den Link bei der Registrierung",
    afterSignup:
      "Gate nennt keinen Weg, einen Empfehlungscode nachträglich zu einem bestehenden Börsenkonto hinzuzufügen. Laut den Regeln des Empfehlungsprogramms kann sich jeder Nutzer nur über eine einzige Empfehlungsmethode registrieren, und der Leitfaden von Gate selbst warnt, dass die Empfehlungsbeziehung womöglich nicht erfasst wird, wenn sich ein Neukunde ohne Einladungslink oder -code registriert. Nutze den Link, bevor du das Konto eröffnest.",
    inviteeReward:
      "Wenn du dich über diesen Link registrierst, landest du im Super-Commission-Programm von Gate: Laut der Registrierungsseite von Gate erhältst du eine Provisionsprämie von 10 % auf deine Handelsgebühren. Nach den Programmregeln wird die Rückvergütung 1 Jahr lang auf Basis deiner Handelsgebühren berechnet, Fiat-Transaktionen sind davon ausgenommen.",
    guide: [
      "Gate betreibt mehrere Empfehlungsprogramme parallel. Der Code VAAXAW9YVA gehört zu Super Commission: Hier teilt der Werber einen Teil seiner Provision mit den Personen, die er einlädt. Gate gibt die Aufteilung mit 30 % für den Werber und 10 % für die eingeladene Person an, berechnet auf deren Handelsgebühren über ein Jahr. Fiat-Transaktionen sind ausgenommen.",
      "Eine einzige Registrierung gilt für Spot, Margin, Futures und Trenches (den Bereich, den Gate auch Gate Alpha nennt). Die übrigen Empfehlungskampagnen von Gate arbeiten stattdessen mit Gutscheinen – “Earn Voucher” und “Token Crew” –, doch laut den Super-Commission-Regeln haben so eingeladene Konten keinen Anspruch auf Prämien aus anderen Aktionen. Rechne also nicht damit, beides zu kombinieren.",
      "Gate unterstützt keine seitenübergreifenden Einladungen. Wohnst du im EWR, betreut dich eine eigene Gate-Gesellschaft in Malta (gate.com/en-eu); dort gibt es Provision nur auf den Spot-Handel, und eine Empfehlung von der globalen Website wird nicht übernommen. Außerdem steht Super Commission Nutzern aus Belgien, dem Vereinigten Königreich, Frankreich, Deutschland, den Niederlanden, der Türkei, Österreich und Südkorea nicht zur Verfügung.",
    ],
  },
  signup: {
    methods: ["E-Mail-Adresse", "Telefonnummer", "Google", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Registrierungsseite von Gate öffnen",
        text: "Nutze den Registrierungsbutton auf dieser Seite. Über dem Formular zeigt Gate ein Banner mit dem Werber und der Gebührenprämie von 10 % – daran erkennst du, dass die Empfehlung hinterlegt ist.",
      },
      {
        title: "Wohnsitzland oder -region auswählen",
        text: "Gib an, wo du wohnst, akzeptiere die Nutzungsvereinbarung (User Agreement) und klicke dann auf “Create Account”.",
      },
      {
        title: "E-Mail-Adresse oder Telefonnummer eingeben",
        text: "Entscheide dich für eine der beiden Optionen; Gate nutzt sie für deinen Login und deine Sicherheitscodes.",
      },
      {
        title: "Bestätigungscode eingeben",
        text: "Gate schickt einen Code an deine E-Mail-Adresse oder Telefonnummer. Laut der App-Anleitung von Gate ist er 15 Minuten lang gültig.",
      },
      {
        title: "Passwort festlegen",
        text: "Wähle ein starkes Passwort, das du nirgendwo sonst verwendest, um die Kontoeröffnung abzuschließen.",
      },
      {
        title: "Identität verifizieren",
        text: "Schließe die KYC-Prüfung mit Reisepass, Personalausweis oder Führerschein ab. Gate verlangt sie, bevor du Krypto einzahlen oder auszahlen kannst.",
      },
    ],
    kycShort: "Pflicht für Ein- und Auszahlungen",
    kyc: "Ja. Laut Gate ist die KYC-Identitätsprüfung für alle Nutzer Pflicht, um Kryptowährungen ein- und auszuzahlen, mit Fiat-Währungen zu handeln und an Startup-Zeichnungen teilzunehmen. Die Adressverifizierung ist freiwillig und erhöht deine Auszahlungslimits. Die Aufgabe zur Identitätsprüfung gehört außerdem zu den Neukundenprämien von Gate.",
    documents:
      "Für die Identitätsprüfung akzeptiert Gate einen Reisepass, einen Personalausweis oder einen Führerschein. Für höhere Limits kannst du freiwillig einen Adressnachweis hinzufügen.",
    minAge: "18 Jahre (Nutzungsvereinbarung von Gate)",
  },
  welcomeTasks: [
    { task: "Registrierung", reward: "Gutschein im Wert von 50 USDT" },
    { task: "Abgeschlossene Identitätsprüfung", reward: "Gutschein im Wert von 50 USDT" },
    { task: "Erste Einzahlung von mindestens 10 USDT", reward: "Gutschein im Wert von 10 USDT" },
    { task: "Erster Trade über mindestens 10 USDT", reward: "Gutschein im Wert von 5 USDT" },
    { task: "Erster App-Download", reward: "Gutschein im Wert von 10 USDT" },
    {
      task: "Fortgeschrittene Aufgabe, erste Stufe: Netto-Einzahlung von mindestens 50 USDT und 500 USDT Handelsvolumen",
      reward: "100 USDT (fortgeschrittene Aufgaben reichen bis 10.000 USDT)",
    },
  ],
  tokenDiscount: "Bezahlst du Spot-Gebühren in GT, sinkt der Standardsatz für Maker und Taker von 0,1 % auf 0,09 %.",
  extraFeeMarkets: ["USDT Delivery Futures"],
  sourceLabels: [
    "Gate: Super-Commission-Empfehlungsprogramm und Regeln",
    "Gate: Empfehlungskampagne Earn Voucher",
    "Gate: Empfehlungskampagne Token Crew",
    "Gate Learn: Leitfaden zum Empfehlungsprogramm von Gate",
    "Gate: Rewards Hub (Einsteigeraufgaben)",
    "Gate: Regeln der Einsteigeraufgaben",
    "Gate: Gebührenübersicht",
    "Gate: Margin und Hebelstufen beim BTCUSDT-Perpetual",
    "Gate: Hebellimit für neue Futures-Konten",
    "Gate: Registrierung auf der Website",
    "Gate: Registrierung in der App",
    "Gate: KYC-Pflicht",
    "Gate: So schließt du die Identitätsprüfung ab",
    "Gate: Nutzungsvereinbarung (gesperrte Länder, Mindestalter)",
    "Gate: Über uns",
    "Gate: Lizenzen",
    "Gate: Reservenachweis",
    "Gate: Umzug auf die Domain gate.com (Ankündigung)",
  ],
  feeDiscount: "10 % deiner Handelsgebühren zurück, 1 Jahr lang",
  referralCovers: ["Spot", "Margin", "Futures", "Trenches (Gate Alpha)"],
  bonusHeadline: "10 % Gebührenrückvergütung plus Einsteigeraufgaben im Wert von 125 USDT",
  benefits: [
    "Der Rewards Hub von Gate listet Einsteigeraufgaben mit Gutscheinen im Wert von 125 USDT (Registrierung, Verifizierung, erste Einzahlung, erster Trade, App-Download)",
    "Eine Empfehlung gilt ein Jahr lang für Spot, Margin, Futures und Trenches",
    "Spot-Gebühren von 0,1 % oder 0,09 %, wenn du sie in GT bezahlst",
    "Mehr als 5.400 digitale Assets mit nur einem Konto handeln",
  ],
  benefitNote:
    "Die Rückvergütung von 10 % ist die Prämie, die Gate auf der über diesen Link erreichten Registrierungsseite anzeigt; sie gilt nicht für Fiat-Transaktionen und steht Nutzern aus Belgien, dem Vereinigten Königreich, Frankreich, Deutschland, den Niederlanden, der Türkei, Österreich und Südkorea nicht zur Verfügung. Einsteigeraufgaben müssen innerhalb von 15 Tagen nach der Registrierung erledigt werden, können je nach Region abweichen und gelten nicht für institutionelle, API- und Affiliate-Konten. Laut den Regeln von Gate haben Konten, die über Provisionsteilung eingeladen wurden, keinen Anspruch auf Prämien aus anderen Aktionen – was du tatsächlich beanspruchen kannst, zeigt dir der Rewards Hub in deinem Konto.",
  headquarters: "Gate Group mit lizenzierten Gesellschaften in mehreren Regionen",
  regulation:
    "Lizenzen oder Registrierungen in Malta (MFSA, MiCA), Gibraltar, auf den Bahamas, in Hongkong, Dubai (VARA, DMCC), Australien (AUSTRAC), Japan und Zypern",
  users: "63 Mio.+ Nutzer (laut Gate)",
  assets: "5.400+ digitale Assets",
  maxLeverage: "Bis zu 200x (BTCUSDT-Perpetual)",
  feeNote:
    "Höhere VIP-Stufen zahlen weniger. Aktivierst du statt GT die Option Points Deduction, berechnet Gate feste Sätze: 0,2 % im Spot-Handel und eine Taker-Gebühr von 0,075 % bei Futures.",
  products: ["Perpetual Futures", "Delivery Futures", "Optionen", "Spot", "Margin", "Copy Trading", "Launchpad", "Earn"],
  tagline: "Die größte Altcoin-Auswahl – seit 2013",
  quickAnswer:
    "Der Gate Empfehlungscode lautet VAAXAW9YVA. Öffne den Registrierungslink auf dieser Seite, dann hinterlegt Gate den Code automatisch – im Formular erscheint anschließend ein Banner, das dir eine Provisionsprämie von 10 % auf deine Handelsgebühren verspricht. Die Rückvergütung läuft ein Jahr und gilt für Spot, Margin, Futures und Trenches. Gate dokumentiert keinen Weg, einen Code später nachzutragen, also nutze den Link, bevor du das Konto eröffnest.",
  about: [
    "Gate wurde 2013 gegründet – zunächst als Bter.com, später als Gate.io, und im Mai 2025 wechselte die Börse auf die internationale Domain gate.com. Ihr Markenzeichen ist die Breite des Angebots: Laut Gate sind mehr als 5.400 digitale Assets gelistet und über 63 Millionen Nutzer registriert, und neue Token tauchen dort oft lange auf, bevor andere große Börsen sie aufnehmen.",
    "Bei den Derivaten hatte Gate an unserem Stichtag für Marktdaten das zweitgrößte Open Interest im Ranking von CoinMarketCap – mit Perpetuals mit USDT-Margin auf Hunderte Altcoins, Delivery Futures und Optionen. Der Hebel beim BTCUSDT-Perpetual reicht in der niedrigsten Risikostufe bis 200x, neue Futures-Konten starten in ihren ersten drei Tagen jedoch mit einem Limit von 20x. Copy Trading, ein Launchpad für neue Token und Earn-Produkte liegen direkt neben den Handelsansichten.",
    "Gate veröffentlicht seit Mai 2020 einen Reservenachweis (Proof of Reserves). Der Stand vom 18. Oktober 2026 wies Gesamtreserven von 8,68 Mrd. US-Dollar über 496 Assets und eine Reservequote von 118 % aus. Die Gruppe nennt Lizenzen und Registrierungen in Malta (MFSA, nach MiCA), Gibraltar, auf den Bahamas, in Hongkong, Dubai, Australien, Japan und Zypern. Die globale Website gate.com ist für Einwohner der USA und einer langen Liste weiterer Länder gesperrt; Einwohner des EWR betreut die maltesische Gesellschaft von Gate.",
  ],
  highlights: [
    { title: "5.400+ Assets", text: "Einer der größten Altcoin-Kataloge aller Börsen." },
    { title: "10 % deiner Gebühren zurück", text: "Von Gate auf der Registrierungsseite angezeigt, die du über diesen Link erreichst." },
    { title: "Reservequote 118 %", text: "Reservenachweis seit 2020, letzter Stand vom 18. Oktober 2026." },
  ],
  pros: [
    "Futures auf viele Altcoins, die du anderswo nicht findest",
    "Standard-Spotgebühr von 0,1 %, mit GT 0,09 %, dazu 0,02 % / 0,05 % bei USDT-Perpetuals",
    "Reservenachweis seit 2020 mit einer Reservequote von 118 %",
    "Lange Geschichte seit 2013 und eine wachsende Zahl regionaler Lizenzen",
  ],
  cons: [
    "Die globale Website ist für viele Länder gesperrt, darunter die USA, das Vereinigte Königreich, Kanada, Deutschland, Frankreich, Spanien und die Niederlande",
    "Kein dokumentierter Weg, einen Empfehlungscode nach der Registrierung hinzuzufügen",
    "Empfehlungen werden nicht zwischen den regionalen Websites von Gate übertragen",
    "Kleinere Token bergen hohe Volatilitäts- und Liquiditätsrisiken",
  ],
  bestFor: ["Trader von Altcoin-Futures", "Jäger von Neulistings", "Trader, denen Auswahl wichtiger ist als Einfachheit"],
  signupTip:
    "Erledige die Einsteigeraufgaben innerhalb von 15 Tagen nach der Registrierung – danach verfallen die Einsteiger-Gutscheine – und überlege, Spot-Gebühren in GT zu bezahlen, um sie auf 0,09 % zu senken.",
  safety:
    "Gate veröffentlicht einen Reservenachweis mit einer Reservequote über 100 % – 118 % beim Stand vom 18. Oktober 2026 –, und das Hilfecenter beschreibt Zwei-Faktor-Authentifizierung, einen Anti-Phishing-Code, eine Whitelist für Auszahlungen und ein Fondspasswort. Aktiviere diese Funktionen, bevor du einzahlst. Prüfe bei Altcoins mit geringer Marktkapitalisierung immer die Liquidität, bevor du gehebelte Positionen eröffnest.",
  restricted:
    "Die Nutzungsvereinbarung von Gate (zuletzt aktualisiert am 22. Juli 2026) nennt gesperrte Länder und Regionen für die globale Website, darunter die USA, Festlandchina, Singapur, Kanada, Frankreich, Deutschland, Hongkong, Malaysia, Malta, Spanien, die Niederlande, das Vereinigte Königreich, Österreich, Indien, Indonesien, Japan, Argentinien, die VAE, Thailand, Südkorea, die Philippinen, Pakistan, Vietnam, Russland und Belarus sowie sanktionierte Gebiete. Einige dieser Länder werden von eigenen Gate-Gesellschaften mit eigenen Websites und Regeln betreut.",
  faqs: [
    {
      topic: "referral",
      q: "Funktioniert der Gate Empfehlungscode VAAXAW9YVA?",
      a: "Ja. Am 16. November 2026 öffnete der Link gate.com/signup/VAAXAW9YVA die offizielle Registrierungsseite von Gate mit hinterlegtem Code und einem Banner des Werbers mit dem Text “Sign up and trade to receive 10% commission reward on trading fees!”.",
    },
    {
      topic: "referral",
      q: "Wie lange läuft die Rückvergütung beim Gate Empfehlungscode?",
      a: "Ein Jahr. Nach den Super-Commission-Regeln von Gate wird die Gebührenrückvergütung 1 Jahr lang auf Basis deiner Handelsgebühren berechnet; Fiat-Transaktionen sind ausgenommen.",
    },
    {
      topic: "referral",
      q: "Ist Gate.io dasselbe wie Gate – und funktioniert der Code noch?",
      a: "Ja. Gate.io ist im Mai 2025 auf die internationale Domain gate.com umgezogen; es ist dieselbe Börse, gegründet 2013. Der Code VAAXAW9YVA wird auf gate.com verwendet.",
    },
    {
      topic: "referral",
      q: "Funktioniert der Gate Empfehlungscode in der EU?",
      a: "Nicht auf die gleiche Weise. Einwohner des EWR werden über eine eigene Gate-Website betreut (gate.com/en-eu, betrieben von Malta aus), auf der Provision nur für den Spot-Handel gezahlt wird, und laut Gate werden seitenübergreifende Einladungen nicht unterstützt. Außerdem ist Super Commission für Nutzer aus Belgien, Frankreich, Deutschland, den Niederlanden und Österreich nicht verfügbar.",
    },
    {
      topic: "referral",
      q: "Kann ich die Gate Rückvergütung mit den Empfehlungsgutscheinen von Gate kombinieren?",
      a: "Verlass dich nicht darauf. Laut den Super-Commission-Regeln von Gate haben so eingeladene Konten keinen Anspruch auf Prämien aus anderen Aktionen – das betrifft auch die Gutscheinkampagnen “Earn Voucher” und “Token Crew”.",
    },
    {
      topic: "signup",
      q: "Warum fragt das Gate Anmeldeformular zuerst nach meinem Land?",
      a: "Die Registrierung bei Gate beginnt mit deinem Wohnsitzland oder deiner Region, weil davon die Produkte, die Prämien und sogar die Gate-Gesellschaft abhängen, die dich betreut. Erst danach gibst du deine E-Mail-Adresse oder Telefonnummer ein.",
    },
    {
      topic: "signup",
      q: "Wie lange ist der Bestätigungscode von Gate gültig?",
      a: "Laut der Anleitung von Gate zur Registrierung in der App ist der Bestätigungscode, den du per E-Mail oder aufs Telefon bekommst, 15 Minuten lang gültig.",
    },
    {
      topic: "signup",
      q: "Kann ich Gate ohne KYC nutzen?",
      a: "Nur eingeschränkt. Laut Gate ist KYC für alle Nutzer Pflicht, um Kryptowährungen ein- und auszuzahlen, mit Fiat-Währungen zu handeln und an Startup-Zeichnungen teilzunehmen.",
    },
    {
      topic: "bonus",
      q: "Welchen Willkommensbonus bietet Gate für Neukunden?",
      a: "Der Rewards Hub von Gate listet Einsteigeraufgaben mit Gutscheinen im Wert von 125 USDT: 50 für die Registrierung, 50 für die Identitätsprüfung, 10 für eine erste Einzahlung von mindestens 10 USDT, 5 für einen ersten Trade über mindestens 10 USDT und 10 für den ersten App-Download. Fortgeschrittene Aufgaben reichen bis 10.000 USDT. Die Registrierungsseite selbst wirbt mit bis zu 135 USDT – maßgeblich sind also die Beträge, die dir in deinem Konto angezeigt werden.",
    },
    {
      topic: "bonus",
      q: "Wie lange habe ich Zeit für die Einsteigeraufgaben bei Gate?",
      a: "Einsteigeraufgaben müssen innerhalb von 15 Tagen nach der Registrierung erledigt werden. Trades mit Stablecoins zählen nicht für die Handelsaufgaben, und institutionelle, API- und Affiliate-Konten sind ausgeschlossen.",
    },
    {
      topic: "fees",
      q: "Wie hoch sind die Spot-Gebühren bei Gate?",
      a: "Die Standard-Spotgebühr (VIP 0) beträgt 0,1 % für Maker und Taker oder 0,09 %, wenn du die Gebühren in GT bezahlst. Ist stattdessen Points Deduction aktiviert, berechnet Gate pauschal 0,2 %.",
    },
    {
      topic: "fees",
      q: "Wie hoch sind die Futures-Gebühren bei Gate?",
      a: "USDT Perpetual Futures kosten in der Standardstufe 0,02 % Maker- und 0,05 % Taker-Gebühr. Für USDT Delivery Futures nennt Gate -0,015 % Maker (also eine Rückvergütung) und 0,016 % Taker.",
    },
    {
      topic: "fees",
      q: "Wie hoch ist der maximale Hebel bei Gate?",
      a: "Bis zu 200x beim BTCUSDT-Perpetual in der niedrigsten Risikostufe (Cross-Margin, Positionen bis zum ersten Risikolimit). Neue Futures-Konten sind in ihren ersten drei Tagen auf 20x begrenzt. Bei einem so hohen Hebel kann schon eine sehr kleine Kursbewegung eine Position liquidieren.",
    },
    {
      topic: "safety",
      q: "Ist Gate in den USA verfügbar?",
      a: "Nein. Die USA stehen in der Nutzungsvereinbarung von Gate auf der Liste der gesperrten Länder.",
    },
    {
      topic: "safety",
      q: "Veröffentlicht Gate einen Reservenachweis (Proof of Reserves)?",
      a: "Ja, seit Mai 2020. Der Stand vom 18. Oktober 2026 wies Gesamtreserven von 8,68 Mrd. US-Dollar über 496 Assets und eine Reservequote von 118 % aus.",
    },
    {
      topic: "safety",
      q: "Wo ist Gate lizenziert?",
      a: "Gate nennt Lizenzen oder Registrierungen in Hongkong, Gibraltar, Malta (MFSA, nach MiCA), Australien (AUSTRAC), Dubai (VARA und DMCC), auf den Bahamas, in Japan und Zypern.",
    },
  ],
};
