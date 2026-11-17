import type { ExchangeText } from "../../types";

export const kucoin: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Feld “Referral Code (Optional)” im ersten Schritt der Registrierung",
    apply:
      "Gib ihn gleich im ersten Schritt der Registrierung in das Feld “Referral Code (Optional)” ein – oder öffne den Registrierungslink auf dieser Seite, der das Feld ausfüllt und sperrt.",
    whereToEnter:
      "KuCoin fragt den Empfehlungscode gleich im ersten Schritt der Registrierung ab, zusammen mit deiner E-Mail-Adresse oder Telefonnummer – auf der Website ebenso wie in der App. Das Feld heißt “Referral Code (Optional)”. Der Link auf dieser Seite öffnet die Registrierungsseite von KuCoin mit bereits eingetragenem QBSS4BT7 und gesperrtem Feld, sodass nichts schiefgehen kann. Laut der Registrierungsanleitung von KuCoin kannst du den Code auch von Hand eintippen, falls ein Link ihn nicht einträgt.",
    afterSignupShort: "Auf Anfrage – “Link Referrer” im Hilfe-Center (Bedingungen nicht veröffentlicht)",
    afterSignup:
      "Unter Umständen ja. Im Hilfe-Center von KuCoin gibt es eine Self-Service-Anfrage namens “Link Referrer” (“Submit a request to add a referrer manually”, also ein Antrag, einen Werber manuell hinzuzufügen) und ein passendes Gegenstück, um einen Werber wieder zu entfernen. Für beide musst du eingeloggt sein, und KuCoin veröffentlicht weder die Bedingungen noch eine Frist – eine Genehmigung ist also nicht garantiert. Der sichere Weg bleibt, den Code direkt bei der Registrierung einzugeben.",
    inviteeReward:
      "Laut der Empfehlungsseite von KuCoin können eingeladene Freunde mit Cashback und exklusiven Prämien für Neulinge rechnen (“stand to receive cashback and exclusive newcomer rewards”). Das Cashback ist ein Anteil an deinen eigenen Handelsgebühren: Der Werber kann für die Personen, die er einlädt, einen exklusiven Cashback-Satz festlegen, höchstens in Höhe seines aktuellen Provisionssatzes – einen festen Prozentsatz gibt es daher nicht. Die Empfehlungsbeziehung läuft 365 Tage ab deiner Registrierung. Zusätzlich wirbt KuCoin mit einem Bonus von bis zu 10.650 USDT für Neukunden.",
    guide: [
      "Das Empfehlungsprogramm von KuCoin zahlt dem Werber eine Provision auf die Handelsgebühren der Personen, die er eingeladen hat, und erlaubt ihm, einen Teil davon als Cashback an den eingeladenen Nutzer weiterzugeben. Einen festen Cashback-Prozentsatz gibt KuCoin nicht vor – maßgeblich ist der Satz, den der Werber eingestellt hat, höchstens aber sein eigener Provisionssatz.",
      "Die Empfehlung gilt für Spot-Trades (bei KuCoin zählen dazu Spot, Margin und Trading-Bots), ETFs und Futures-Trades. Über die API platzierte Trades sind ausgeschlossen. Die Beziehung besteht 365 Tage ab deiner Registrierung und endet früher, wenn du VIP 3 erreichst. Provisionen werden täglich in der Währung abgerechnet, in der die Gebühr bezahlt wurde.",
      "Laut KuCoin können Einwohner von Belgien, Frankreich, den Niederlanden und anderen Ländern oder Regionen, in denen die Dienste von KuCoin eingeschränkt sind, nicht am Empfehlungsprogramm teilnehmen.",
    ],
  },
  signup: {
    methods: ["E-Mail-Adresse", "Telefonnummer", "Telegram", "Google", "Apple"],
    steps: [
      {
        title: "Öffne die Registrierungsseite von KuCoin",
        text: "Nutze den Registrierungsbutton auf dieser Seite. Es öffnet sich die Seite “Welcome to KuCoin”, auf der der Empfehlungscode QBSS4BT7 bereits im Feld “Referral Code (Optional)” steht.",
      },
      {
        title: "Gib deine E-Mail-Adresse oder Telefonnummer ein",
        text: "Oder melde dich über Telegram, Google oder Apple an. Der Empfehlungscode steht im selben ersten Schritt.",
      },
      {
        title: "Akzeptiere die Nutzungsbedingungen",
        text: "Setze das Häkchen bei den Nutzungsbedingungen und der Datenschutzerklärung und wähle “Create Account and Claim Reward”.",
      },
      {
        title: "Gib den Bestätigungscode ein",
        text: "KuCoin schickt einen Code an deine E-Mail-Adresse oder Telefonnummer, um zu bestätigen, dass sie dir gehört.",
      },
      {
        title: "Lege ein Login-Passwort fest",
        text: "Wähle dein Passwort und dann “Confirm” – damit ist das Konto angelegt.",
      },
      {
        title: "Bestätige deine Identität",
        text: "Wähle dein Land und die Art des Ausweisdokuments, lade Fotos des Dokuments hoch und schließe die Gesichtsverifizierung ab. Neukunden brauchen diesen Schritt, um die Produkte von KuCoin nutzen zu können.",
      },
    ],
    kycShort: "Pflicht für Neukunden",
    kyc: "Ja. Seit dem 31. August 2023 müssen Neukunden die Identitätsprüfung abschließen, um die Produkte und Dienste von KuCoin nutzen zu können. Dazu wählst du dein Land und die Art des Ausweises, lädst Fotos des Dokuments hoch und absolvierst einen Gesichtsabgleich; jede Person kann nur ein KuCoin-Konto verifizieren. Ältere Konten, die nie verifiziert wurden, können weiterhin Krypto verkaufen, Futures- und Margin-Positionen schließen, Earn-Produkte einlösen und Auszahlungen vornehmen, aber nichts einzahlen.",
    documents:
      "KuCoin akzeptiert Personalausweis, Führerschein, Reisepass oder Aufenthaltstitel; danach folgt eine Gesichtsverifizierung.",
    minAge: "18 Jahre (Nutzungsbedingungen von KuCoin)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Zahlst du die Gebühren in KCS, bekommst du 20 % Rabatt; KuCoin gewährt ihn im Spot- und Margin-Handel und schreibt ihn als Rückvergütung gut, weist aber darauf hin, dass der tatsächliche Rabatt etwas geringer ausfallen kann. Höhere VIP-Stufen senken die Gebühren um bis zu 75 %.",
  extraFeeMarkets: ["Spot – Token der Klasse B", "Spot – Token der Klasse C"],
  sourceLabels: [
    "KuCoin: So funktioniert die Registrierung (Web und App)",
    "KuCoin: Empfehlungsprogramm und Regeln",
    "KuCoin: Self-Service im Hilfe-Center (Link Referrer)",
    "KuCoin: Rewards Hub (Aufgaben für Neukunden)",
    "KuCoin: FAQ zum Rewards Hub",
    "KuCoin: Gebührenübersicht nach VIP-Stufe",
    "KuCoin: Gebühren mit KCS bezahlen",
    "KuCoin: Identitätsprüfung und Kontolimits",
    "KuCoin: Futures-Hebel nach Positionsgröße",
    "KuCoin: Gebühren für Trading-Bots",
    "KuCoin: Nutzungsbedingungen (gesperrte Regionen, Mindestalter)",
    "KuCoin: Über uns",
    "KuCoin: Reservenachweis (Proof of Reserves)",
    "KuCoin EU: MiCAR-Lizenz der KuCoin EU Exchange GmbH",
    "KuCoin: Stellungnahme zur Einigung mit dem US-Justizministerium",
    "KuCoin: Brief des CEO zum Sicherheitsvorfall 2020",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures", "Trading-Bots", "ETFs"],
  bonusHeadline: "Bis zu 10.650 USDT Bonus für Neukunden",
  benefits: [
    "Die Registrierungsseite von KuCoin wirbt mit einem Bonus von bis zu 10.650 USDT für Neukunden, freigeschaltet über Aufgaben im Rewards Hub",
    "Cashback auf deine Handelsgebühren, sofern der Werber einen Satz festgelegt hat – das Programm von KuCoin erlaubt das für 365 Tage",
    "Eine einzige Empfehlung gilt für Spot, Margin, Futures, Trading-Bots und ETFs",
    "Trading-Bots kosten nichts; du zahlst nur die Handelsgebühr für Bots",
  ],
  benefitNote:
    "Die 10.650 USDT sind die Werbezahl von KuCoin selbst und ein Höchstwert: Der Rewards Hub zahlt sie in Form von Gutscheinpaketen, Testguthaben, Gebührengutscheinen und kleinen Cash-Prämien aus – für die Registrierung, die Identitätsprüfung, die erste Einzahlung, den ersten Trade und zeitlich begrenzte Aufgaben. Zeitlich begrenzte Aufgaben müssen innerhalb von 7 Tagen nach der Registrierung erledigt werden, die Prämien sind 30 Tage gültig. Stablecoin-Paare und gebührenfreie Trades zählen nicht, Market Maker und institutionelle Nutzer sind ausgeschlossen. In der FAQ zum Rewards Hub nennt KuCoin noch einen älteren Höchstbetrag von 3.200 USDT.",
  headquarters: "Von KuCoin nicht angegeben (Nutzungsbedingungen unterliegen dem Recht der Turks- und Caicosinseln)",
  regulation: "MiCAR-Lizenz über die KuCoin EU Exchange GmbH, Wien (EWR außer Malta); AUSTRAC-Registrierung in Australien",
  users: "45 Mio.+ Nutzer (laut KuCoin)",
  assets: "1.000+ gelistete Token, 1.300+ Handelspaare",
  maxLeverage: "Bis zu 125x (kleinste Positionsstufe)",
  feeNote:
    "KuCoin teilt Token in Klassen ein: Der oben genannte Spot-Satz gilt für Token der Klasse A, Token der Klassen B und C sind teurer. Welche Klasse gilt, hängt von der Basiswährung des Handelspaars ab.",
  products: ["Futures mit USDT- und Coin-Margin", "Spot", "Margin", "Trading-Bots", "Copy Trading", "Earn", "KuCoin Web3 Wallet"],
  tagline: "Altcoins und Trading-Bots für alle",
  quickAnswer:
    "Der KuCoin-Empfehlungscode lautet QBSS4BT7. Er gehört in das Feld “Referral Code (Optional)” im ersten Schritt der Registrierung; der Button auf dieser Seite öffnet KuCoin mit bereits eingetragenem und gesperrtem Code. Die Empfehlung gilt 365 Tage lang für Spot, Margin, Futures und Trading-Bots, und KuCoin wirbt mit einem Bonus von bis zu 10.650 USDT für Neukunden. Falls du den Code vergisst, bietet das Hilfe-Center von KuCoin die Anfrage “Link Referrer” an – deren Bedingungen sind allerdings nicht öffentlich.",
  about: [
    "KuCoin ist im dritten Quartal 2017 gestartet und bedient nach eigenen Angaben heute über 45 Millionen Nutzer in mehr als 200 Ländern und Regionen, mit mehr als 1.000 gelisteten Token. Ihre Nutzerbasis hat sich die Börse aufgebaut, indem sie Altcoins früh listet und automatisiertes Trading einfach macht: Die Trading-Bots kosten außer den Handelsgebühren nichts.",
    "Bei den Derivaten bietet KuCoin Futures mit USDT- und Coin-Margin und einem Hebel von maximal 125x in der kleinsten Positionsstufe – in der nächsten Stufe sinkt das Limit auf 100x und mit wachsender Position weiter. Außerdem gibt es Margin-Handel, Copy Trading, Earn-Produkte und eine Web3-Wallet, und der KCS-Token bringt 20 % Rabatt auf Spot- und Margin-Gebühren.",
    "Am 27. Januar 2025 gab KuCoin eine Einigung mit dem US-Justizministerium bekannt; die Konten von US-Nutzern hatte die Börse bereits mit Wirkung zum 23. Januar 2025 geschlossen. Im EWR ist die Gruppe über die KuCoin EU Exchange GmbH in Wien tätig, einen nach MiCAR lizenzierten Anbieter von Kryptowerte-Dienstleistungen unter Aufsicht der österreichischen FMA. Nach einem Hack im Jahr 2020, von dem rund 285 Mio. US-Dollar betroffen waren, haben die Börse und ihr Versicherungsfonds laut KuCoin die etwa 45,55 Mio. US-Dollar gedeckt, die nicht zurückgeholt werden konnten, und kein Nutzer hat einen Verlust erlitten.",
  ],
  highlights: [
    { title: "Kostenlose Trading-Bots", text: "Die Bots selbst kosten nichts – es fällt nur die Handelsgebühr für Bots an." },
    { title: "Code fest eingetragen", text: "Der Registrierungslink trägt QBSS4BT7 ein und sperrt das Feld." },
    { title: "Reserven über 100 %", text: "BTC 112 %, ETH 115 %, USDT 110 % zum 31. Oktober 2026." },
  ],
  pros: [
    "Einsteigerfreundliches automatisiertes Trading mit kostenlosen Bots",
    "Große Altcoin-Auswahl mit mehr als 1.000 gelisteten Token",
    "Niedrige Standardgebühren für Futures: 0,02 % Maker / 0,06 % Taker",
    "Reservenachweis über 100 % für BTC, ETH, USDT und USDC",
  ],
  cons: [
    "Nicht verfügbar in den USA, Frankreich, den Niederlanden, Singapur und Teilen Kanadas",
    "Spot-Gebühren steigen bei Token der Klassen B und C auf 0,2 % bzw. 0,3 %",
    "Die Bedingungen, um nach der Registrierung einen Werber nachzutragen, sind nicht veröffentlicht",
    "Geringeres Futures-Volumen als bei den fünf größten Börsen",
  ],
  bestFor: ["Trader, die mit Bots automatisieren wollen", "Altcoin-Fans", "Fortgeschrittene Futures-Trader"],
  signupTip:
    "Schließe die Identitätsprüfung direkt nach der Registrierung ab – ohne sie können Neukunden KuCoin überhaupt nicht nutzen – und starte die zeitlich begrenzten Aufgaben im Rewards Hub innerhalb von 7 Tagen nach der Kontoeröffnung.",
  safety:
    "KuCoin veröffentlicht regelmäßig Berichte zum Reservenachweis (Proof of Reserves). Die Daten vom 31. Oktober 2026 zeigten Reservequoten von 112 % für BTC, 115 % für ETH, 110 % für USDT und 127 % für USDC, dazu einen Prüfbericht vom 9. November 2026. Zum Hack von 2020 erklärt KuCoin, dass kein Nutzer einen Verlust erlitten hat. Bots automatisieren die Ausführung, nicht das Risikomanagement – lege immer eine Stoppbedingung fest und lass nur Trading-Kapital auf der Börse liegen.",
  restricted:
    "Die Nutzungsbedingungen von KuCoin (aktualisiert am 29. Oktober 2026) führen als gesperrte Regionen auf: die USA einschließlich ihrer Territorien, Singapur, Festlandchina und Hongkong, Malaysia, Kasachstan, Usbekistan, Russland, Belarus, die kanadischen Provinzen Ontario und British Columbia, Frankreich, die Niederlande sowie die Regionen Krim, Donezk, Luhansk, Saporischschja und Cherson. Die Sperre mit einem VPN zu umgehen, ist verboten.",
  faqs: [
    {
      topic: "referral",
      q: "Funktioniert der KuCoin-Empfehlungscode QBSS4BT7?",
      a: "Ja. Am 16. November 2026 öffnete der Link auf dieser Seite die Registrierungsseite von KuCoin, und QBSS4BT7 stand bereits fest eingetragen im gesperrten Feld “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Wie lange gilt eine Empfehlung bei KuCoin?",
      a: "365 Tage ab deiner Registrierung. Nach den Regeln von KuCoin enden die Provisionen – und damit auch ein etwaiges Cashback – außerdem, sobald du VIP-Stufe 3 erreichst.",
    },
    {
      topic: "referral",
      q: "Wie viel Cashback bekomme ich mit einem KuCoin-Empfehlungscode?",
      a: "KuCoin gibt keinen festen Satz vor. Der Werber kann für eingeladene Nutzer einen exklusiven Cashback-Satz festlegen, höchstens bis zu seinem eigenen Provisionssatz; gezahlt wird er auf Trades in Spot, Margin, Trading-Bots, ETFs und Futures. API-Trades sind ausgeschlossen.",
    },
    {
      topic: "referral",
      q: "Was bedeutet “Link Referrer” bei KuCoin?",
      a: "Das ist eine Self-Service-Anfrage im Hilfe-Center von KuCoin mit der Beschreibung “Submit a request to add a referrer manually” – also ein Antrag, einen Werber manuell hinzuzufügen. Sie ist der Weg für Konten, die ohne Code registriert wurden. Um sie zu nutzen, musst du eingeloggt sein, und KuCoin veröffentlicht keine Bedingungen dafür.",
    },
    {
      topic: "referral",
      q: "In welchen Ländern gilt das Empfehlungsprogramm von KuCoin nicht?",
      a: "Laut KuCoin steht das Programm Einwohnern von Belgien, Frankreich, den Niederlanden und anderen Ländern oder Regionen, in denen die Dienste von KuCoin eingeschränkt sind, nicht offen.",
    },
    {
      topic: "signup",
      q: "Kann ich mich bei KuCoin mit Google, Apple oder Telegram registrieren?",
      a: "Ja. Die Registrierungsseite von KuCoin zeigt unter dem Feld für E-Mail-Adresse und Telefonnummer “Or continue with” mit Telegram, Google und Apple.",
    },
    {
      topic: "signup",
      q: "Kann ich KuCoin ohne KYC nutzen?",
      a: "Als Neukunde nicht. Seit dem 31. August 2023 müssen Neukunden die Identitätsprüfung abschließen, um die Produkte und Dienste von KuCoin nutzen zu können.",
    },
    {
      topic: "signup",
      q: "Kann ich zwei KuCoin-Konten haben?",
      a: "Keine zwei verifizierten. Laut KuCoin kann eine Person nur ein KuCoin-Konto verifizieren.",
    },
    {
      topic: "bonus",
      q: "Wie hoch ist der Willkommensbonus bei KuCoin?",
      a: "Startseite und Registrierungsseite von KuCoin werben mit bis zu 10.650 USDT für Neukunden. Ausgezahlt wird das über Neukunden-Aufgaben im Rewards Hub – Registrierung, Identitätsprüfung, erste Einzahlung, erster Trade und zeitlich begrenzte Aufgaben – in Form von Gutscheinpaketen, Testguthaben, Gebührengutscheinen und kleinen Cash-Prämien. Für die Registrierung nennt KuCoin ein Bonuspaket über 400 USDT plus Cash-Prämie (Bonus Pack and Cash Reward).",
    },
    {
      topic: "bonus",
      q: "Wie lange habe ich Zeit, die Neukunden-Prämien von KuCoin einzulösen?",
      a: "Zeitlich begrenzte Challenge-Aufgaben müssen innerhalb von 7 Tagen nach der Registrierung erledigt sein, und laut KuCoin sind die Prämien 30 Tage gültig, bevor sie verfallen.",
    },
    {
      topic: "bonus",
      q: "Welche Trades zählen bei den Neukunden-Aufgaben von KuCoin nicht?",
      a: "Trades in Stablecoin-Paaren und gebührenfreie Trades zählen nicht. Market Maker und institutionelle Nutzer sind grundsätzlich ausgeschlossen.",
    },
    {
      topic: "fees",
      q: "Wie hoch sind die Futures-Gebühren bei KuCoin?",
      a: "Nutzer der Stufe VIP 0 zahlen bei Futures 0,02 % als Maker und 0,06 % als Taker. Der Futures-Grid-Bot arbeitet mit einer festen Handelsgebühr von 0,06 %.",
    },
    {
      topic: "fees",
      q: "Wie viel Rabatt bringt KCS bei KuCoin?",
      a: "20 %. KuCoin gewährt ihn im Spot- und Margin-Handel, wenn du die Gebühren in KCS bezahlst, und schreibt ihn als Rückvergütung gut; der tatsächliche Rabatt kann etwas niedriger ausfallen.",
    },
    {
      topic: "fees",
      q: "Sind die Trading-Bots von KuCoin kostenlos?",
      a: "Ja, laut KuCoin sind die Bots selbst kostenlos. Für ihre Trades gilt eine eigene Gebührenregel: Spot-Bots erhalten 20 % Rabatt auf den Maker- und Taker-Satz von VIP 0, der Futures-Grid-Bot zahlt fest 0,06 %, und KCS-Abzüge sowie VIP-Stufen gelten hier nicht.",
    },
    {
      topic: "fees",
      q: "Wie hoch ist der maximale Hebel bei KuCoin?",
      a: "125x für verifizierte Konten in der kleinsten Positionsstufe. Den Futures-Hebel staffelt KuCoin nach Positionsgröße – die nächste Stufe ist auf 100x begrenzt.",
    },
    {
      topic: "safety",
      q: "Ist KuCoin in den USA verfügbar?",
      a: "Nein. Die USA sind in den Nutzungsbedingungen von KuCoin als gesperrte Region aufgeführt, und KuCoin hat die Konten von US-Nutzern mit Wirkung zum 23. Januar 2025 geschlossen.",
    },
    {
      topic: "safety",
      q: "Ist KuCoin in Europa reguliert?",
      a: "Die KuCoin EU Exchange GmbH in Wien ist ein nach MiCAR lizenzierter Anbieter von Kryptowerte-Dienstleistungen und steht unter der Aufsicht der österreichischen Finanzmarktaufsicht. Sie bedient den EWR mit Ausnahme von Malta.",
    },
    {
      topic: "safety",
      q: "Wurde KuCoin gehackt?",
      a: "Ja, im Jahr 2020. Betroffen waren rund 285 Mio. US-Dollar. Laut KuCoin haben die Börse und ihr Versicherungsfonds die etwa 45,55 Mio. US-Dollar (16 %) gedeckt, die nicht zurückgeholt werden konnten, und kein Nutzer hat einen Verlust erlitten.",
    },
  ],
};
