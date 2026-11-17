import type { ExchangeText } from "../../types";

export const okx: ExchangeText = {
  referral: {
    codeName: "Empfehlungscode",
    whereShort: "Feld “Referral code (optional)” im E-Mail-Schritt der Registrierung",
    apply:
      "Gib ihn im E-Mail-Schritt der Registrierung in das Feld “Referral code (optional)” ein – das Feld ist eingeklappt und muss erst aufgeklappt werden – oder öffne den Registrierungslink auf dieser Seite, der den Code automatisch mitbringt.",
    whereToEnter:
      "Auf der Website von OKX gehört der Code in das Feld “Referral code (optional)”, und zwar in dem Schritt, in dem du deine E-Mail-Adresse eingibst. Das Feld ist eingeklappt, klappe es also zuerst auf. Kommst du über einen Empfehlungslink, wird der Code automatisch übernommen; laut OKX lässt sich ein über einen Link vorausgefüllter Code nicht mehr ändern. Auf dem Smartphone sollst du laut OKX zuerst deine E-Mail-Adresse auf der Einladungsseite eingeben, dann die App über genau diesen Link installieren und dich mit derselben E-Mail-Adresse registrieren – installierst du die App separat und registrierst dich dort, wird der Code unter Umständen nicht übernommen.",
    afterSignupShort: "Nein – nur bei der Registrierung",
    afterSignup:
      "Nein. Laut OKX wirken Einladungscodes nur bei der Registrierung und lassen sich nicht rückwirkend hinzufügen; in den FAQ zum Empfehlungsprogramm heißt es, dass ein Code nachträglich in der Regel weder hinzugefügt noch geändert werden kann. Löschst du dein Konto und registrierst dich neu, wirst du dadurch nicht wieder teilnahmeberechtigt, und das kann als Verstoß gewertet werden. Ein Link der Form okx.com/join/… lässt sich nicht mit einem bestehenden Konto verknüpfen.",
    inviteeReward:
      "Als eingeladener Nutzer erhältst du die Welcome Rewards von OKX, auch New User Bonus genannt. Sie sind unabhängig von der Prämie für die Person, die dich eingeladen hat, und hängen von deinem Land, der Kampagne und dem verwendeten Link ab; welches Angebot für dich gilt, steht im Moment deiner Registrierung fest. Bei unserer Prüfung zeigte die Einladungsseite für diesen Code einen Willkommensbonus von bis zu 400 € auf OKX Europe, und die globale Einladungsseite von OKX versprach bis zu 100 USDT für die Registrierung und erledigte Aufgaben.",
    guide: [
      "Ein OKX-Empfehlungscode verknüpft dein neues Konto mit der Person, die dich eingeladen hat. Praktisch bedeutet das für dich den Zugang zu den Welcome Rewards – einer Reihe von Einzahlungs- und Trading-Aufgaben, deren Beträge OKX je nach Land, Kampagne und Nutzergruppe festlegt. Welches Angebot du bekommst, entscheidet sich bei der Registrierung; deshalb muss der Code genau in diesem Moment eingetragen sein.",
      "Auf welcher OKX-Plattform du landest, hängt von deinem Wohnort ab. Besucher aus dem EWR – und aus mehreren weiteren europäischen Ländern – werden zu OKX Europe (okx.com/en-eu) weitergeleitet; betrieben wird die Plattform von der OKX Europe Limited in Malta unter MiCA. Dort werden die Prämien in Krypto, als X-Perps-Gutscheine oder als VIP Pass gutgeschrieben; Krypto-Prämien bleiben bis zu 45 Tage gesperrt (handelbar, aber nicht auszahlbar), und X-Perps-Volumen zählt nicht für die Trading-Aufgaben.",
      "Auf der globalen Website erhältst du die Prämien als Krypto oder als Rebate-Karten und musst sie innerhalb von 30 Tagen öffnen; eine Trading-Aufgabe muss mit einem einzigen Trade erfüllt werden, und nicht erledigte Aufgaben verschwinden 180 Tage nach der Registrierung.",
    ],
  },
  signup: {
    methods: ["E-Mail-Adresse (die Telefonnummer wird während der Registrierung hinzugefügt und bestätigt)"],
    steps: [
      {
        title: "Einladungsseite von OKX öffnen",
        text: "Klicke auf dieser Seite auf den Registrierungsbutton. OKX öffnet die Einladungsseite für den Code T7IRGAR3 und zeigt den Willkommensbonus an, der in deinem Land gilt.",
      },
      {
        title: "Land oder Region des Wohnsitzes auswählen",
        text: "Wähle aus, wo du wohnst, bestätige die Nutzungsbedingungen (Terms of Service) und klicke auf “Next”.",
      },
      {
        title: "E-Mail-Adresse eingeben und Empfehlungscode prüfen",
        text: "Klappe “Referral code (optional)” auf – dort sollte T7IRGAR3 stehen – und klicke dann auf “Sign up”.",
      },
      {
        title: "6-stelligen E-Mail-Code bestätigen",
        text: "OKX schickt einen 6-stelligen Code an deine E-Mail-Adresse. Er ist 10 Minuten lang gültig.",
      },
      {
        title: "Telefonnummer hinzufügen",
        text: "Gib deine Telefonnummer ein und dann den 6-stelligen Code, der an diese Nummer geschickt wird. OKX verlangt für jedes Konto sowohl eine E-Mail-Adresse als auch eine Telefonnummer.",
      },
      {
        title: "Passwort festlegen",
        text: "Wähle für das Konto ein starkes Passwort, das du nirgendwo sonst verwendest.",
      },
      {
        title: "Identität verifizieren",
        text: "Schließe die Identitätsprüfung mit einem amtlichen Ausweisdokument und einem Selfie oder Gesichtsabgleich ab. Erst danach sind Trading, Einzahlungen und Auszahlungen möglich.",
      },
    ],
    kycShort: "Pflicht vor Trading, Einzahlungen und Auszahlungen",
    kyc: "Ja. OKX verlangt für die Nutzung eines Privatkontos eine Identitätsprüfung – Trading, Einzahlungen und Auszahlungen sind erst danach möglich. Du gibst Wohnsitz, Staatsangehörigkeit, Name, Geburtsdatum und Ausweisdaten an, lädst ein amtliches Dokument hoch und durchläufst einen Selfie- oder Gesichtsabgleich; zusätzlich kann OKX einen Adressnachweis verlangen, der in den letzten 6 Monaten ausgestellt wurde. Laut OKX ist die Prüfung innerhalb von 24 Stunden abgeschlossen, und ein Ausweisdokument kann nur für ein einziges Konto verwendet werden.",
    documents:
      "Ein gültiges amtliches Ausweisdokument: Reisepass, Personalausweis, Führerschein oder Aufenthaltstitel – maßgeblich ist die Liste, die dir bei der Verifizierung für dein Land angezeigt wird –, dazu ein Selfie oder Gesichtsabgleich und auf Anfrage ein Adressnachweis, der nicht älter als 6 Monate ist.",
    minAge: "18 Jahre",
  },
  welcomeTasks: [],
  tokenDiscount: "",
  extraFeeMarkets: ["Optionen"],
  sourceLabels: [
    "OKX: So registrierst du ein Konto",
    "OKX: FAQ zum Empfehlungsprogramm",
    "OKX: Affiliate-FAQ (Einladungscodes und Rückvergütungen)",
    "OKX: Bedingungen des New User Bonus (EWR)",
    "OKX: FAQ zum New User Bonus (EWR)",
    "OKX: Bedingungen des New User Bonus (global)",
    "OKX: Gebührenübersicht",
    "OKX: FAQ zu den Regeln für Handelsgebühren",
    "OKX: Hebel bei X-Perps im EWR",
    "Öffentliche API von OKX: Perpetual-Swap-Instrumente (maximaler Hebel)",
    "OKX: So verifizierst du ein Privatkonto",
    "OKX: Identitätsprüfung – Voraussetzungen, Prüfdauer und Dokumente",
    "OKX: Risiko- und Compliance-Hinweise (gesperrte Länder und Gebiete)",
    "OKX: Nutzungsbedingungen",
    "OKX Europe: Über uns",
    "OKX Middle East: Über uns (VARA-Lizenz)",
    "OKX: Reservenachweis (Proof of Reserves)",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futures & Perpetual Swaps"],
  bonusHeadline: "Willkommensbonus von bis zu 400 € oder 100 USDT",
  benefits: [
    "Welcome Rewards von OKX für Neukunden: bis zu 400 € auf OKX Europe und bis zu 100 USDT auf der globalen Website, freigeschaltet über Einzahlungs- und Trading-Aufgaben",
    "Niedrige Standardgebühren: 0,08 % Maker / 0,10 % Taker im Spot-Handel und 0,02 % / 0,05 % bei Futures und Perpetuals",
    "Ein per Link übernommener Code kann nicht falsch eingetippt werden – einen vorausgefüllten Code kann man bei OKX nicht mehr ändern",
    "Monatlicher Reservenachweis, den du mit deinem eigenen Guthaben abgleichen kannst",
  ],
  benefitNote:
    "Für die Welcome Rewards musst du dich über einen dafür vorgesehenen Link registrieren und die Identitätsprüfung abschließen; danach folgen Einzahlungs- und Trading-Aufgaben. Auf OKX Europe zählen interne Überweisungen nicht als Einzahlung, gebührenfreie Handelspaare und X-Perps-Volumen nicht als Trades; Krypto-Prämien bleiben bis zu 45 Tage gesperrt, und die Gutschrift kann bis zu 48 Stunden dauern. Auf der globalen Website müssen die Prämien innerhalb von 30 Tagen geöffnet werden, und die Aufgaben verfallen 180 Tage nach der Registrierung. Beträge und Aufgaben unterscheiden sich je nach Land und Kampagne.",
  headquarters: "Aux Cayes FinTech Co. Ltd. (Seychellen) für die globale Website; OKX Europe Limited (Malta); OKX Middle East Fintech FZE (Dubai)",
  regulation: "MiCA-Zulassung über die OKX Europe Limited (Malta, MFSA); VARA-Lizenz in Dubai",
  users: "120 Mio.+ Nutzer (laut OKX Europe)",
  assets: "270+ Coins (laut OKX Europe)",
  maxLeverage: "Bis zu 100x (globale Website; bis zu 10x auf OKX Europe)",
  feeNote:
    "Das sind die Sätze für Regular-Nutzer; die nächsthöhere Stufe beginnt bei 100.000 an Vermögenswerten oder bei 1.000.000 Spot-Volumen in 30 Tagen (5.000.000 bei Futures), gerechnet in EUR auf OKX Europe und in USD auf der globalen Website. Auf Futures mit Verfallstermin fällt eine Abwicklungsgebühr (Settlement Fee) von 0,01 % an.",
  products: ["Spot", "Perpetual Swaps", "Futures mit Verfallstermin", "Optionen", "Trading-Bots"],
  tagline: "Spot und Derivate zu niedrigen Gebühren, mit monatlichem Reservenachweis",
  quickAnswer:
    "Der OKX-Empfehlungscode lautet T7IRGAR3. Auf der Website gehört er im E-Mail-Schritt der Registrierung in das Feld “Referral code (optional)”; der Button auf dieser Seite überträgt ihn automatisch. Er funktioniert nur bei der Registrierung – OKX trägt Einladungscodes nicht rückwirkend nach. Neukunden erhalten die Welcome Rewards von OKX: bis zu 400 € auf OKX Europe oder bis zu 100 USDT auf der globalen Website, nach der Identitätsprüfung und nach Einzahlungs- und Trading-Aufgaben.",
  about: [
    "OKX wurde 2017 gegründet und gehört zu den größten Kryptobörsen – sowohl für Spot als auch für Derivate. Auf den Seiten von OKX Europe ist von mehr als 120 Millionen Nutzern die Rede, gelistet sind dort über 270 Coins. Regular-Nutzer zahlen im Spot-Handel 0,08 % Maker und 0,10 % Taker, bei Futures und Perpetual Swaps 0,02 % / 0,05 % und bei Optionen 0,03 %.",
    "Das Angebot umfasst Spot, Perpetual Swaps, Futures mit Verfallstermin, Optionen und Trading-Bots – was du davon nutzen kannst, hängt allerdings von deinem Wohnort ab. Auf der globalen Website liegt der höchste Hebel bei 100x, verfügbar für Perpetuals wie BTC-USDT, ETH-USDT, SOL-USDT und XRP-USDT. Auf OKX Europe heißt das Perpetual-Produkt X-Perps und ist auf 10x begrenzt, bei größeren Positionen auf weniger.",
    "OKX veröffentlicht jeden Monat einen Reservenachweis. Der 49. Bericht deckte 33,87 Mrd. US-Dollar in 21 Assets ab; die Prüfung vom 1. November 2026 ergab Reservequoten von 108 % für BTC, 101 % für ETH, 106 % für USDT und 100 % für USDC. Der Nachweis beruht auf zk-STARK und einem Merkle-Baum, sodass eingeloggte Nutzer prüfen können, ob ihr eigenes Guthaben enthalten ist. Die OKX Europe Limited ist von der Malta Financial Services Authority als Anbieter von Kryptowerte-Dienstleistungen nach MiCA zugelassen, und die OKX Middle East Fintech FZE besitzt eine Lizenz der VARA in Dubai.",
  ],
  highlights: [
    { title: "Niedrige Standardgebühren", text: "0,08 % / 0,10 % im Spot-Handel und 0,02 % / 0,05 % bei Futures und Perpetuals." },
    { title: "Monatlicher Reservenachweis", text: "Bisher 49 Berichte, überprüfbar mit zk-STARK und Merkle-Baum." },
    { title: "MiCA-Zulassung im EWR", text: "Die OKX Europe Limited ist von der maltesischen Aufsichtsbehörde MFSA zugelassen." },
  ],
  pros: [
    "Niedrige Standardgebühren für Spot, Futures und Optionen",
    "Monatlicher, selbst überprüfbarer Reservenachweis mit Quoten über 100 %",
    "MiCA-zugelassene Gesellschaft für Nutzer im EWR und VARA-Lizenz in Dubai",
    "Optionen und Futures mit Verfallstermin zusätzlich zu Perpetual Swaps",
  ],
  cons: [
    "Ein Empfehlungscode lässt sich nach der Registrierung nicht mehr hinzufügen",
    "Das Produktangebot hängt stark von deinem Land ab – auf OKX Europe sind Perpetuals auf 10x begrenzt",
    "Willkommensprämien bleiben auf OKX Europe bis zu 45 Tage gesperrt",
    "Nicht verfügbar in Kanada, Indien, Japan, Hongkong und Teilen der USA",
  ],
  bestFor: ["Gebührenbewusste Spot- und Futures-Trader", "Optionstrader", "Nutzer im EWR, die eine MiCA-zugelassene Plattform suchen"],
  signupTip:
    "Gib auf dem Smartphone zuerst deine E-Mail-Adresse auf der Einladungsseite ein und installiere die App über diesen Link – lädst du die App separat herunter und registrierst dich dort, wird der Empfehlungscode unter Umständen nicht übernommen.",
  safety:
    "OKX veröffentlicht monatlich einen Reservenachweis – bei der Prüfung vom 1. November 2026 lagen die Quoten bei 108 % für BTC, 101 % für ETH, 106 % für USDT und 100 % für USDC – und lässt eingeloggte Nutzer ihr eigenes Guthaben über “View my report” prüfen, mit Open-Source-Tools und veröffentlichten Wallet-Adressen. Mit jedem Konto müssen sowohl eine E-Mail-Adresse als auch eine Telefonnummer verknüpft sein. Wie bei jeder Börse gilt: Lass nur das Kapital auf der Plattform, mit dem du tatsächlich tradest.",
  restricted:
    "OKX führt folgende Länder und Gebiete als gesperrt: Afghanistan, Kanada, Kuba, Hongkong, Iran, Indien, Japan, Malaysia, Nepal, Nordkorea, Syrien, Usbekistan, die Regionen Krim, Donezk und Luhansk sowie bestimmte Gebiete der USA einschließlich aller US-Außengebiete. Teilweise Einschränkungen gelten in Australien, Brasilien, Südkorea und im Vereinigten Königreich (keine Derivate) sowie für Fiat-Zahlungen in Russland. Die Liste wurde zuletzt am 14. November 2026 aktualisiert.",
  faqs: [
    {
      topic: "referral",
      q: "Funktioniert der OKX-Empfehlungscode T7IRGAR3?",
      a: "Ja. Am 16. November 2026 öffnete der Link okx.com/join/T7IRGAR3 die offizielle Einladungsseite von OKX für diesen Code – mit einem Willkommensbonus und einem Registrierungslink, der den Code enthält.",
    },
    {
      topic: "referral",
      q: "Warum sehe ich bei OKX kein Feld für den Empfehlungscode?",
      a: "Das Feld “Referral code (optional)” ist im Registrierungsformular eingeklappt und muss erst aufgeklappt werden. OKX ergänzt: Wird das Feld überhaupt nicht angezeigt, solltest du dich stattdessen über den Empfehlungslink registrieren.",
    },
    {
      topic: "referral",
      q: "Wie nutze ich den OKX-Empfehlungscode in der App?",
      a: "Öffne den Einladungslink auf deinem Smartphone und gib dort deine E-Mail-Adresse ein. Installiere dann die OKX-App über diesen Link und registriere dich mit derselben E-Mail-Adresse. OKX warnt, dass der Code unter Umständen nicht übernommen wird, wenn du die App separat installierst und dich darin registrierst.",
    },
    {
      topic: "referral",
      q: "Kann ich den OKX-Empfehlungscode nachträglich nutzen, indem ich mein Konto lösche und mich neu registriere?",
      a: "Nein. Laut OKX stellt das Löschen eines Kontos mit anschließender Neuregistrierung die Berechtigung nicht wieder her und kann als Verstoß gewertet werden.",
    },
    {
      topic: "signup",
      q: "Brauche ich für die Registrierung bei OKX eine Telefonnummer?",
      a: "Ja. Bei der Registrierung fragt OKX zuerst nach einer E-Mail-Adresse und dann nach einer Telefonnummer; beide bestätigst du mit einem 6-stelligen Code. Beide müssen mit dem Konto verknüpft sein, und jede E-Mail-Adresse und jede Telefonnummer kann nur für ein Konto verwendet werden.",
    },
    {
      topic: "signup",
      q: "Wie lange ist der E-Mail-Bestätigungscode von OKX gültig?",
      a: "Der 6-stellige Code, den OKX dir bei der Registrierung an deine E-Mail-Adresse schickt, ist 10 Minuten lang gültig.",
    },
    {
      topic: "signup",
      q: "Wie lange dauert die Identitätsprüfung bei OKX?",
      a: "Laut OKX ist die Prüfung innerhalb von 24 Stunden abgeschlossen, nachdem du dein Dokument eingereicht und den Selfie- oder Gesichtsabgleich erledigt hast.",
    },
    {
      topic: "signup",
      q: "Kann ich OKX ohne KYC nutzen?",
      a: "Nein. Für die Nutzung eines Privatkontos ist die Identitätsprüfung Pflicht; Trading, Einzahlungen und Auszahlungen stehen erst danach zur Verfügung.",
    },
    {
      topic: "bonus",
      q: "Was ist der Willkommensbonus von OKX?",
      a: "Neukunden, die sich über einen Empfehlungslink registrieren, erhalten die Welcome Rewards von OKX (New User Bonus). Bei unserer Prüfung zeigte die Einladungsseite bis zu 400 € auf OKX Europe, die globale Einladungsseite bis zu 100 USDT. Freigeschaltet werden die Prämien durch die abgeschlossene Identitätsprüfung sowie durch Einzahlungs- und Trading-Aufgaben; sie unterscheiden sich je nach Land und Kampagne.",
    },
    {
      topic: "bonus",
      q: "Kann ich den OKX-Willkommensbonus sofort auszahlen?",
      a: "Nein. Auf OKX Europe sind Krypto-Prämien bis zu 45 Tage gesperrt – du kannst damit handeln, sie aber nicht auszahlen. Auf der globalen Website sind die Prämien schon bei der Gutschrift gesperrt und können während der Sperrfrist weder gehandelt noch ausgezahlt werden.",
    },
    {
      topic: "bonus",
      q: "Welche Einzahlungen und Trades zählen für die Willkommensaufgaben von OKX?",
      a: "Auf OKX Europe zählen Einzahlungen in Krypto oder in Fiat per SEPA, iDEAL oder Bancontact, interne Überweisungen dagegen nicht. Trades über Buy, Sell, Convert oder das Spot-Orderbuch zählen, gebührenfreie Handelspaare und X-Perps-Volumen nicht. Auf der globalen Website muss eine Trading-Aufgabe mit einem einzigen Trade erfüllt werden.",
    },
    {
      topic: "fees",
      q: "Wie hoch sind die Gebühren für Optionen bei OKX?",
      a: "Regular-Nutzer zahlen bei Optionen 0,03 % Maker und 0,03 % Taker.",
    },
    {
      topic: "fees",
      q: "Wie hoch ist der maximale Hebel bei OKX?",
      a: "100x auf der globalen Website, bei Perpetual Swaps wie BTC-USDT, ETH-USDT, SOL-USDT und XRP-USDT, und weniger bei größeren Positionen. Auf OKX Europe sind X-Perps auf 10x begrenzt. Ein hoher Hebel erhöht das Liquidationsrisiko drastisch.",
    },
    {
      topic: "fees",
      q: "Wie bekomme ich bei OKX niedrigere Gebühren?",
      a: "Die Gebührenstufen von OKX richten sich nach deinem Vermögensbestand oder deinem Handelsvolumen der letzten 30 Tage. Die Stufe Regular endet bei 100.000 an Vermögenswerten bzw. bei 1.000.000 an 30-Tage-Volumen im Spot-Handel und 5.000.000 bei Futures; darüber gelten VIP-Sätze.",
    },
    {
      topic: "safety",
      q: "Ist OKX in Europa reguliert?",
      a: "Ja. Die OKX Europe Limited ist von der Malta Financial Services Authority als Anbieter von Kryptowerte-Dienstleistungen nach MiCA zugelassen und betreut Kunden aus dem EWR über okx.com/en-eu.",
    },
    {
      topic: "safety",
      q: "Ist OKX in den USA verfügbar?",
      a: "Nur eingeschränkt: OKX führt bestimmte Gebiete der USA und alle US-Außengebiete als gesperrt. Kanada, Indien, Japan und Hongkong sind vollständig gesperrt.",
    },
    {
      topic: "safety",
      q: "Veröffentlicht OKX einen Reservenachweis (Proof of Reserves)?",
      a: "Ja, jeden Monat. Der 49. Bericht deckte 33,87 Mrd. US-Dollar in 21 Assets ab, und die Prüfung vom 1. November 2026 ergab 108 % für BTC, 101 % für ETH, 106 % für USDT und 100 % für USDC.",
    },
  ],
};
