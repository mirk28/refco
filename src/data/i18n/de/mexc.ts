import type { ExchangeText } from "../../types";

export const mexc: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Feld “Referral Code (Optional)” im Registrierungsformular (Groß- und Kleinschreibung beachten)",
    apply:
      "Gib ihn im Registrierungsformular in das Feld “Referral Code (Optional)” ein – der Code unterscheidet zwischen Groß- und Kleinschreibung – oder öffne den Registrierungslink auf dieser Seite, der das Feld ausfüllt und sperrt.",
    whereToEnter:
      "Im Registrierungsformular von MEXC gibt es ein Feld mit der Bezeichnung “Referral Code (Optional)” und dem Hinweis “Enter invitation code (case-sensitive)”. Tippe 4E3xM deshalb genau so ab, wie er geschrieben wird – mit großem E und großem M. Auf der Website setzt du ein Häkchen bei “Enter Referral Code”, damit das Feld erscheint; in der App tippst du auf den kleinen Pfeil, um es aufzuklappen. Der Link auf dieser Seite öffnet die Einladungsseite von MEXC, auf der 4E3xM bereits eingetragen und das Feld gesperrt ist.",
    afterSignupShort: "Ja – innerhalb von 30 Tagen nach der Registrierung",
    afterSignup:
      "Ja. MEXC bietet eine Self-Service-Funktion, mit der du nach der Registrierung einen Werber verknüpfen kannst: Berechtigt sind nur Konten, die in den letzten 30 Tagen eröffnet wurden, die Funktion gilt für Hauptkonten, und du verknüpfst entweder über den Empfehlungscode oder über die UID des Werbers. Der Werber muss sich vor dir registriert haben. Ist ein Einladungscode einmal verknüpft, lässt er sich laut MEXC weder ändern noch entfernen.",
    inviteeReward:
      "Einen dauerhaften Gebührenrabatt gibt MEXC eingeladenen Nutzern nicht. Der Code schaltet stattdessen das Empfehlungs-Event von MEXC frei: Die Einladungsseite zeigt allen, die sich über eine Empfehlung registrieren, eine Extraprämie von bis zu 140 USDT – über die Neukundenprämien von bis zu 10.000 USDT hinaus. Die Empfehlungsprämie wird in Futures-Boni ausgezahlt, wenn du innerhalb von 7 Tagen nach der Registrierung eine Aufgabe zur Nettoeinzahlung und eine Aufgabe zum Futures-Handel erfüllst.",
    guide: [
      "Bei MEXC erfüllt der Empfehlungscode zwei Zwecke. Er hält fest, wer dich eingeladen hat – der Werber erhält eine Provision auf deine Spot- und Futures-Trades –, und er berechtigt dich zur Teilnahme am Empfehlungs-Event, das MEXC für Neukunden veranstaltet. Das Event ist gestaffelt: 50 USDT für eine Nettoeinzahlung von mindestens 100 US-Dollar und 1.000 US-Dollar Futures-Volumen, 90 USDT bei 10.000 US-Dollar Futures-Volumen und 140 USDT bei 20.000 US-Dollar – jeweils innerhalb von 7 Tagen nach der Registrierung und nach Abschluss von Primary KYC.",
      "Ausgezahlt werden Futures-Boni, Gebührengutscheine und Positions-Airdrops, kein Bargeld. MEXC kennzeichnet das Event als zeitlich begrenzt und “only open to designated users” (nur für ausgewählte Nutzer), und laut den FAQ zum Event lässt sich der Empfehlungsbonus weder mit dem 10.000-USDT-Event noch mit Boni aus dem Rewards Hub kombinieren – obwohl die Einladungsseite beides zusammen bewirbt. Maßgeblich sind die Beträge, die dir nach der Registrierung in deinem eigenen Konto angezeigt werden.",
      "Weil der Code zwischen Groß- und Kleinschreibung unterscheidet, ist ein Link der sicherste Weg, ihn zu nutzen. Hast du dich ohne Code registriert, kannst du ihn noch 30 Tage lang selbst verknüpfen.",
    ],
  },
  signup: {
    methods: ["E-Mail-Adresse", "Telefonnummer", "Google", "Apple", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Öffne die Registrierungsseite von MEXC",
        text: "Nutze den Registrierungsbutton auf dieser Seite. MEXC öffnet die Seite “Your Friend Invites You to Join MEXC”, auf der der Empfehlungscode 4E3xM bereits eingetragen und gesperrt ist.",
      },
      {
        title: "Gib deine E-Mail-Adresse oder Telefonnummer und ein Passwort ein",
        text: "Du kannst auch mit Google, Apple, Telegram oder MetaMask fortfahren. Das Passwort braucht mindestens 10 Zeichen mit Groß- und Kleinbuchstaben, einer Zahl und einem Sonderzeichen.",
      },
      {
        title: "Prüfe den Empfehlungscode",
        text: "Im Feld “Referral Code (Optional)” sollte 4E3xM stehen. Wenn du ihn selbst eintippst, achte auf die Großbuchstaben – der Code unterscheidet zwischen Groß- und Kleinschreibung.",
      },
      {
        title: "Löse das Schiebepuzzle",
        text: "MEXC zeigt zur Sicherheitsprüfung ein Schiebepuzzle an.",
      },
      {
        title: "Gib den 6-stelligen Code ein",
        text: "Tippe den 6-stelligen Bestätigungscode ein, den MEXC dir schickt, und wähle “Confirm”.",
      },
      {
        title: "Schließe die KYC-Verifizierung ab",
        text: "Schließe Primary KYC ab, um die Prämien freizuschalten und Einschränkungen bei Einzahlungen, Auszahlungen und beim Handel zu vermeiden.",
      },
    ],
    kycShort: "Erforderlich für Einzahlungen, Auszahlungen und Handel",
    kyc: "In der Praxis ja. MEXC erklärt, dass eine nicht abgeschlossene KYC-Verifizierung deinen Zugang zu Diensten wie Einzahlungen, Auszahlungen und Handel beeinträchtigen kann, und die Prämien setzen mindestens Primary KYC voraus. Mit Primary KYC sind Krypto-Auszahlungen von 80 BTC pro Tag möglich; Advanced KYC hebt das auf 200 BTC pro Tag an und ergänzt Fiat-Limits von 20.000 USD pro Tag. Spot, Futures und Events stehen auf beiden Stufen offen.",
    documents: "MEXC akzeptiert Personalausweis, Reisepass, Führerschein oder Aufenthaltstitel.",
    minAge:
      "Volljährigkeit nach dem Recht deines Landes – die Nutzungsvereinbarung von MEXC verlangt, dass du alt genug bist, um einen verbindlichen Vertrag zu schließen, und nennt kein konkretes Alter",
  },
  welcomeTasks: [
    { task: "Registrierung", reward: "10-USDT-Gutschein" },
    { task: "Erster Login in der App", reward: "10-USDT-Gutschein" },
    { task: "Primary KYC innerhalb von 7 Tagen abschließen", reward: "BTCUSDT-Positions-Airdrop im Wert von 200 $" },
    { task: "Kumuliertes Futures-Handelsvolumen (höchste Stufe: mindestens 1.000.000 USDT)", reward: "Futures-Bonus von bis zu 7.620 USDT" },
    { task: "Empfehlungs-Event: Nettoeinzahlung von mindestens 100 $ und 1.000 $ Futures-Volumen innerhalb von 7 Tagen", reward: "50 USDT in Futures-Boni" },
    { task: "Empfehlungs-Event: Futures-Volumen von mindestens 10.000 $ innerhalb von 7 Tagen", reward: "90 USDT in Futures-Boni" },
    { task: "Empfehlungs-Event: Futures-Volumen von mindestens 20.000 $ innerhalb von 7 Tagen", reward: "140 USDT in Futures-Boni" },
  ],
  tokenDiscount:
    "Zahlst du die Gebühren mit MX, bekommst du 20 % Rabatt auf Spot- und Futures-Gebühren; bei Futures muss das MX in deinem Futures-Wallet liegen. Der frühere Rabatt von 50 % für das Halten von 500 MX oder mehr ist seit dem 9. Februar 2026 ausgesetzt.",
  extraFeeMarkets: ["Coin-M-Futures (BTCUSD, ETHUSD)"],
  sourceLabels: [
    "MEXC: Ablauf der Kontoregistrierung (Web)",
    "MEXC: Ablauf der Kontoregistrierung (App)",
    "MEXC: Leitfaden zum Empfehlungsprogramm",
    "MEXC: Anleitung zur Self-Service-Verknüpfung des Werbers",
    "MEXC: Empfehlungs-Event und Regeln",
    "MEXC: Rewards Hub (Neukundenprämien)",
    "MEXC: Ankündigung der Willkommensprämien (Gültigkeit der Boni)",
    "MEXC: Gebührenübersicht",
    "MEXC: Gebührenrabatte mit MX nutzen",
    "MEXC: Einführung von 500x Hebel bei Futures",
    "MEXC: KYC-FAQ",
    "MEXC: Häufige Fragen zur KYC-Verifizierung",
    "MEXC: Nutzungsvereinbarung (ausgeschlossene Länder und Gebiete)",
    "MEXC Learn: Gesperrte Länder",
    "MEXC: Über MEXC",
    "MEXC: Warum MEXC (Handelspaare und Kontrakte)",
    "MEXC: Reservenachweis",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futures"],
  bonusHeadline: "Bis zu 10.000 USDT an Neukundenprämien",
  benefits: [
    "Neukundenprämien von bis zu 10.000 USDT im Rewards Hub – Gutscheine, Positions-Airdrops und Futures-Boni",
    "Wer sich über eine Empfehlung registriert, sieht eine Extraprämie von bis zu 140 USDT in Futures-Boni",
    "0 % Maker-Gebühr auf Spot und auf die meisten Futures-Kontrakte",
    "Der Code lässt sich noch innerhalb von 30 Tagen nach der Registrierung verknüpfen",
  ],
  benefitNote:
    "Alle Prämien sind an Aufgaben gebunden und setzen mindestens Primary KYC voraus. Boni lassen sich nicht auszahlen – nur die damit erzielten Gewinne –, und wer Guthaben aus dem Futures-Konto abzieht, bevor ein Bonus vollständig verbraucht ist, verliert den gesamten Bonus. Futures-Boni gelten für USDT-M-Kontrakte und wurden mit einer Gültigkeit von 15 Tagen angekündigt. Das Empfehlungs-Event ist zeitlich begrenzt und nur für ausgewählte Nutzer offen, laut den FAQ zum Event lässt sich sein Bonus nicht mit dem 10.000-USDT-Event kombinieren, und Prämien durchlaufen eine Risikoprüfung von bis zu 7 Tagen. In Regionen, in denen Derivate verboten sind, kann die Teilnahme ausgeschlossen sein.",
  headquarters: "MEXC (Comoros) Ltd, eingetragen in der Union der Komoren",
  regulation:
    "Auf den eigenen Seiten von MEXC keine Lizenz genannt; MEXC erklärt, keine Lizenz einer erstklassigen Aufsichtsbehörde und keine MiCA-Zulassung zu haben",
  users: "40 Mio.+ Nutzer (laut MEXC)",
  assets: "1.384 Spot-Paare und 1.152 Futures-Kontrakte (laut MEXC)",
  maxLeverage: "Bis zu 500x (BTCUSDT- und ETHUSDT-Futures)",
  feeNote:
    "Der angegebene Futures-Satz gilt bei MEXC für BTCUSDT und ETHUSDT; über alle Kontrakte hinweg nennt die Gebührenseite eine Spanne von 0 % bis 0,04 % für Maker und 0 % bis 0,1 % für Taker, und einige Paare werden ganz ohne Gebühren gehandelt. MEXC weist darauf hin, dass die Maker-Sätze je nach Plattform-Events oder deiner Region abweichen können.",
  products: ["USDT-M- und Coin-M-Futures", "Spot", "Copy Trading", "Launchpad", "Earn"],
  tagline: "Keine Maker-Gebühren und bis zu 500x Hebel",
  quickAnswer:
    "Der MEXC Empfehlungscode lautet 4E3xM – Groß- und Kleinschreibung beachten. Gib ihn bei der Registrierung in das Feld “Referral Code (Optional)” ein oder nutze den Button auf dieser Seite, der ihn einträgt und das Feld sperrt. Falls du ihn vergessen hast, kannst du bei MEXC innerhalb von 30 Tagen nach der Registrierung selbst einen Werber verknüpfen. Neukunden können Prämien von bis zu 10.000 USDT freischalten, und die Einladungsseite von MEXC zeigt allen, die sich über eine Empfehlung registrieren, einen Extrabonus von bis zu 140 USDT.",
  about: [
    "MEXC ist seit 2018 am Markt und gibt an, mehr als 40 Millionen Nutzer in über 170 Ländern und Regionen zu bedienen. Die Börse punktet mit Preis und Auswahl: Normale Nutzer zahlen auf Spot und auf die meisten Futures-Kontrakte keine Maker-Gebühr, und MEXC listet 1.384 Spot-Paare und 1.152 Futures-Kontrakte.",
    "Die Futures-Plattform bietet Kontrakte mit Margin in USDT und in Coins, mit einem Hebel von bis zu 500x auf BTCUSDT und ETHUSDT. Dieses Maximum gibt es nicht überall – MEXC nimmt Australien, Österreich, Belgien, Kanada, Frankreich, Hongkong, Italien, Russland, das Vereinigte Königreich und den Jemen davon aus –, und beim Copy Trading werden 250x und 500x nicht unterstützt. Daneben stehen Copy Trading, ein Launchpad und Earn-Produkte zur Verfügung.",
    "Vertragspartner ist die MEXC (Comoros) Ltd, eingetragen in der Union der Komoren. MEXC nennt auf den eigenen Seiten keine Lizenz und erklärt selbst, weder eine Lizenz einer erstklassigen Aufsichtsbehörde noch eine MiCA-Zulassung zu besitzen; im eigenen Leitfaden weist MEXC darauf hin, dass die Börse im vorläufigen ESMA-Register nicht konformer Unternehmen geführt wird. MEXC veröffentlicht einen Reservenachweis – der Snapshot vom 9. November 2026 zeigte 122,42 % für USDT, 109,84 % für USDC, 317,61 % für BTC und 112,41 % für ETH – und unterhält einen Guardian Fund über 100 Mio. US-Dollar sowie einen Versicherungsfonds für Futures.",
  ],
  highlights: [
    { title: "0 % Maker-Gebühren", text: "Keine Maker-Gebühren auf Spot und auf die meisten Futures-Kontrakte." },
    { title: "Verknüpfung binnen 30 Tagen", text: "Code vergessen? Bei MEXC kannst du noch 30 Tage nach der Registrierung einen Werber verknüpfen." },
    { title: "Reserven über 100 %", text: "USDT 122 %, BTC 318 %, ETH 112 % beim Snapshot vom 9. November 2026." },
  ],
  pros: [
    "Einige der niedrigsten Handelsgebühren der Branche: 0 % Maker, 0,02 % Taker auf BTCUSDT-Futures",
    "Ein Empfehlungscode lässt sich bis zu 30 Tage nach der Registrierung verknüpfen",
    "1.384 Spot-Paare und 1.152 Futures-Kontrakte",
    "Reservenachweis über 100 % und ein Guardian Fund über 100 Mio. US-Dollar",
  ],
  cons: [
    "Keine Lizenz einer erstklassigen Aufsichtsbehörde und keine MiCA-Zulassung – nach eigener Aussage von MEXC",
    "Nicht verfügbar in den USA, im Vereinigten Königreich, in Kanada, Frankreich, den Niederlanden, Singapur und Hongkong",
    "Boni sind nicht auszahlbar und verfallen, wenn du vorzeitig Guthaben abziehst",
    "Ein Hebel von 500x ist extrem riskant",
  ],
  bestFor: [
    "Kostenbewusste Futures-Trader mit hoher Handelsfrequenz",
    "Trader auf der Suche nach Neulistungen",
    "Erfahrene Nutzer, die Offshore-Börsen nicht scheuen",
  ],
  signupTip:
    "Schließe Primary KYC innerhalb von 7 Tagen nach der Registrierung ab – damit schaltest du den BTCUSDT-Positions-Airdrop über 200 US-Dollar frei – und zieh kein Guthaben aus deinem Futures-Konto ab, solange ein Futures-Bonus noch in Gebrauch ist, sonst verfällt der Bonus.",
  safety:
    "MEXC veröffentlicht einen Reservenachweis – 122,42 % für USDT, 109,84 % für USDC, 317,61 % für BTC und 112,41 % für ETH beim Snapshot vom 9. November 2026 – und unterhält einen Guardian Fund über 100 Mio. US-Dollar sowie einen Versicherungsfonds für Futures. MEXC selbst erklärt, keine Lizenz einer erstklassigen Aufsichtsbehörde und keine MiCA-Zulassung zu besitzen. Sichere dein Konto deshalb gut ab und bewahre dort keine langfristigen Ersparnisse auf. Prüfe bei sehr neuen Token Liquidität und Kontraktspezifikationen, bevor du sie mit Hebel handelst.",
  restricted:
    "Die Nutzungsvereinbarung von MEXC (zuletzt aktualisiert am 13. Oktober 2026) untersagt die Nutzung für Personen aus Nordkorea, Kuba, dem Sudan, dem Iran, Festlandchina, Singapur, Malaysia, den USA, dem Vereinigten Königreich, Hongkong, Kasachstan, Russland, den von Russland kontrollierten Gebieten der Ukraine, Belarus, Kanada, Frankreich und den Niederlanden sowie aus sanktionierten Ländern und Ländern auf der schwarzen Liste der FATF.",
  faqs: [
    {
      topic: "referral",
      q: "Funktioniert der MEXC Empfehlungscode 4E3xM?",
      a: "Ja. Am 16. November 2026 öffnete der Link auf dieser Seite die Einladungsseite von MEXC – mit inviteCode=4E3xM in der Adresszeile und 4E3xM vorausgefüllt und gesperrt im Feld “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Muss ich beim MEXC Referral-Code auf Groß- und Kleinschreibung achten?",
      a: "Ja. Das Registrierungsfeld von MEXC trägt den Hinweis “Enter invitation code (case-sensitive)”. Der Code lautet 4E3xM – Ziffer 4, großes E, Ziffer 3, kleines x, großes M.",
    },
    {
      topic: "referral",
      q: "Wie verknüpfe ich bei MEXC nachträglich einen Werber?",
      a: "Nutze innerhalb von 30 Tagen nach der Registrierung die Self-Service-Verknüpfung von MEXC. Sie steht Hauptkonten zur Verfügung, du gibst entweder den Empfehlungscode oder die UID des Werbers ein, und der Werber muss sich vor dir registriert haben. Die Verknüpfung lässt sich danach weder ändern noch entfernen.",
    },
    {
      topic: "referral",
      q: "Bekomme ich mit dem MEXC Empfehlungscode Rabatt auf die Gebühren?",
      a: "MEXC nennt keinen dauerhaften Gebührenrabatt für eingeladene Nutzer. Der Vorteil ist das Empfehlungs-Event mit Prämien von bis zu 140 USDT in Futures-Boni, dazu kommen die allgemeinen Neukundenprämien.",
    },
    {
      topic: "signup",
      q: "Welche Anforderungen stellt MEXC an das Passwort?",
      a: "Mindestens 10 Zeichen, darunter ein Großbuchstabe, ein Kleinbuchstabe, eine Zahl und ein Sonderzeichen.",
    },
    {
      topic: "signup",
      q: "Kann ich mich bei MEXC mit Google, Apple, Telegram oder MetaMask registrieren?",
      a: "Ja. Die Registrierungsseite von MEXC bietet Google und Apple direkt an, Telegram und MetaMask unter “More Options” – zusätzlich zu E-Mail und Telefonnummer.",
    },
    {
      topic: "signup",
      q: "Welche KYC-Stufen und Limits gibt es bei MEXC?",
      a: "Primary KYC erlaubt Krypto-Auszahlungen von 80 BTC pro Tag und P2P-Handel. Advanced KYC hebt das Limit auf 200 BTC pro Tag an und ermöglicht Fiat-Transaktionen von bis zu 20.000 USD pro Tag. Spot, Futures und Events stehen auf beiden Stufen offen.",
    },
    {
      topic: "signup",
      q: "Kann ich MEXC ohne KYC nutzen?",
      a: "Nur mit Einschränkungen. MEXC erklärt, dass eine nicht abgeschlossene KYC-Verifizierung deinen Zugang zu Diensten wie Einzahlungen, Auszahlungen und Handel beeinträchtigen kann, und die Neukunden- und Empfehlungsprämien setzen mindestens Primary KYC voraus.",
    },
    {
      topic: "bonus",
      q: "Welchen Willkommensbonus bietet MEXC?",
      a: "MEXC bewirbt Neukundenprämien von bis zu 10.000 USDT. Beispiele aus dem Rewards Hub: ein 10-USDT-Gutschein für die Registrierung, ein 10-USDT-Gutschein für den ersten Login in der App, ein BTCUSDT-Positions-Airdrop über 200 US-Dollar, wenn du Primary KYC innerhalb von 7 Tagen abschließt, und ein Futures-Bonus von bis zu 7.620 USDT für kumuliertes Handelsvolumen, wobei die höchste Stufe bei 1.000.000 USDT Volumen liegt.",
    },
    {
      topic: "bonus",
      q: "Wie hoch ist der MEXC Empfehlungsbonus?",
      a: "Beim Empfehlungs-Event von MEXC erhältst du als eingeladener Nutzer 50 USDT für eine Nettoeinzahlung von mindestens 100 US-Dollar plus 1.000 US-Dollar Futures-Volumen, 90 USDT bei 10.000 US-Dollar Futures-Volumen und 140 USDT bei 20.000 US-Dollar – jeweils innerhalb von 7 Tagen nach der Registrierung. Ausgezahlt wird als Futures-Bonus, Gebührengutschein und Positions-Airdrop. Das Event ist zeitlich begrenzt und nur für ausgewählte Nutzer offen.",
    },
    {
      topic: "bonus",
      q: "Kann ich den MEXC Bonus auszahlen lassen?",
      a: "Nein. Laut MEXC lassen sich Boni nicht auszahlen, Gewinne aus Trades mit Bonusguthaben dagegen schon. Überträgst du irgendwelche Vermögenswerte aus dem Futures-Konto, bevor der Bonus vollständig verbraucht ist, verfällt der gesamte Bonus.",
    },
    {
      topic: "bonus",
      q: "Wie lange ist ein MEXC Futures-Bonus gültig?",
      a: "MEXC hat für Futures-Boni und für Gutscheine eine Gültigkeit von 15 Tagen angekündigt. Ein Futures-Bonus lässt sich nur für USDT-M-Kontrakte nutzen.",
    },
    {
      topic: "fees",
      q: "Wie hoch sind die Futures-Gebühren bei MEXC?",
      a: "Auf BTCUSDT und ETHUSDT zahlen normale Nutzer 0 % Maker- und 0,02 % Taker-Gebühr. Über alle Kontrakte hinweg nennt die Gebührenseite von MEXC eine Spanne von 0 % bis 0,04 % für Maker und 0 % bis 0,1 % für Taker, und einige Paare sind gebührenfrei.",
    },
    {
      topic: "fees",
      q: "Wie hoch ist der MX-Gebührenrabatt bei MEXC?",
      a: "20 % auf Spot- und Futures-Gebühren, wenn du sie mit MX bezahlst; bei Futures muss das MX in deinem Futures-Wallet liegen. Der frühere Rabatt von 50 % für das Halten von mindestens 500 MX ist seit dem 9. Februar 2026 ausgesetzt.",
    },
    {
      topic: "fees",
      q: "Bietet MEXC wirklich 500x Hebel?",
      a: "Ja, auf BTCUSDT- und ETHUSDT-Futures. In Australien, Österreich, Belgien, Kanada, Frankreich, Hongkong, Italien, Russland, im Vereinigten Königreich und im Jemen wird er nicht angeboten, und Copy Trading unterstützt ihn nicht. Bei 500x kann eine Bewegung von 0,2 % gegen dich die Position auslöschen.",
    },
    {
      topic: "safety",
      q: "Ist MEXC reguliert?",
      a: "MEXC nennt auf den eigenen Seiten keine Lizenz und erklärt, keine Lizenz einer erstklassigen Aufsichtsbehörde und keine MiCA-Zulassung zu haben. Vertragspartner ist die MEXC (Comoros) Ltd, eingetragen in der Union der Komoren.",
    },
    {
      topic: "safety",
      q: "Ist MEXC in den USA oder im Vereinigten Königreich verfügbar?",
      a: "Nein. Sowohl die USA als auch das Vereinigte Königreich sind laut Nutzungsvereinbarung von MEXC ausgeschlossene Länder, ebenso Kanada, Frankreich, die Niederlande, Singapur und Hongkong.",
    },
    {
      topic: "safety",
      q: "Veröffentlicht MEXC einen Reservenachweis (Proof of Reserves)?",
      a: "Ja. Der Snapshot vom 9. November 2026 zeigte Reservequoten von 122,42 % für USDT, 109,84 % für USDC, 317,61 % für BTC und 112,41 % für ETH. Außerdem unterhält MEXC einen Guardian Fund über 100 Mio. US-Dollar.",
    },
  ],
};
