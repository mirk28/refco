import type { AlternativesText } from "../../../types";

export const binance: AlternativesText = {
  role: "Tiefste Liquidität",
  pick: "Binance hat den tiefsten Derivatemarkt und lässt dich einen vergessenen Empfehlungscode innerhalb von 30 Tagen nachtragen",
  pitch:
    "Binance ist die größte Börse im Derivate-Ranking von CoinMarketCap und der Maßstab für Liquidität: enge Spreads bei Perpetuals auf BTC, ETH und Large Caps, 0,02 % Maker / 0,05 % Taker bei Futures und bis zu 150x auf BTCUSDT und ETHUSDT. Spot, Margin, Futures, Optionen, Bots und Copy Trading laufen über einen einzigen Login.",
  chooseIf: [
    "du mit großen Summen handelst und die engsten Spreads bei Perpetuals auf BTC, ETH und Large Caps brauchst",
    "du Spot, Margin, Futures, Optionen, Bots und Copy Trading unter einem Login haben willst",
    "du dich ohne Empfehlungscode registriert hast – Binance lässt dich innerhalb von 30 Tagen einen nachtragen, solange du weder eingezahlt noch gehandelt hast",
  ],
  thinkTwiceIf: [
    "du in den USA, in Kanada oder in den Niederlanden lebst – alle drei stehen auf der Liste der verbotenen Länder von Binance",
    "du im EWR wohnst und Empfehlungsvorteile nutzen willst – Binance schließt Nutzer aus dem EWR seit dem 1. Juli 2026 von seinem Empfehlungsprogramm aus",
    "du vom ersten Tag an mit hohem Hebel handeln willst – neue Futures-Konten sind in den ersten 30 Tagen auf 20x begrenzt",
  ],
  intro:
    "Gemessen am Open Interest bei Derivaten ist Binance die größte Kryptobörse, doch sie steht nicht allen offen und ist nicht in jedem Punkt die günstigste oder flexibelste. Wer eine Binance Alternative sucht, tut das meist, weil Binance im eigenen Land gesperrt ist – die USA, Kanada und die Niederlande stehen auf der Liste der verbotenen Länder –, weil niedrigere Gebühren oder mehr Hebel gefragt sind oder weil nicht das ganze Guthaben auf einer einzigen Börse liegen soll. Diese Seite vergleicht die sechs naheliegendsten Alternativen mit Binance, mit Zahlen von den Websites der Börsen selbst.",
  reasons: [
    {
      title: "Binance ist in deinem Land nicht verfügbar",
      text: "Die Liste der verbotenen Länder von Binance (aktualisiert am 5. Januar 2026) nennt neben sanktionierten Ländern und Regionen die USA, Kanada und die Niederlande. Im Vereinigten Königreich sind bestimmte Dienste für Privatkunden nicht zugänglich.",
    },
    {
      title: "Du willst niedrigere Gebühren",
      text: "Im Standardtarif berechnet Binance bei Spot 0,10 % für Maker und Taker und bei USDⓈ-M-Futures 0,02 % / 0,05 %. Zahlst du die Gebühren in BNB, sinkt das auf 0,075 % bei Spot und 0,018 % / 0,045 % bei Futures.",
    },
    {
      title: "Du willst mehr Hebel oder mehr Coins",
      text: "Beim Hebel ist mit 150x auf den Perpetuals BTCUSDT und ETHUSDT Schluss, und neue Futures-Konten können in den ersten 30 Tagen höchstens 20x nutzen. Binance listet 600+ Kryptowährungen.",
    },
    {
      title: "Keine Empfehlungsvorteile im EWR",
      text: "Seit dem 1. Juli 2026 können Nutzer, die in Ländern des EWR registriert sind, nicht mehr am Empfehlungsprogramm von Binance teilnehmen. Die Empfehlungsbedingungen von Binance nennen außerdem Einschränkungen für das Vereinigte Königreich, Singapur, Japan, die Türkei, Hongkong und Israel.",
    },
    {
      title: "Die Verifizierung kommt vor allem anderen",
      text: "Jeder Neukunde muss die Identitätsprüfung abschließen, bevor er einzahlen oder handeln kann. Laut Binance ist die Prüfung in der Regel innerhalb von 48 Stunden erledigt.",
    },
    {
      title: "Du willst nicht alles auf einer Börse haben",
      text: "Keine zentralisierte Börse ist risikofrei. Wer sein Trading-Kapital auch auf einer zweiten Börse hält, ist weniger von einer einzigen Plattform abhängig.",
    },
  ],
  stayIf: [
    "du vor allem Wert auf Liquidität legst – Binance hat das größte Open Interest und das höchste Futures-Volumen aller Börsen",
    "du die Gebühren in BNB zahlst: 25 % Rabatt auf Spot-Gebühren und 10 % auf Gebühren für USDⓈ-M-Futures",
    "du Wert auf die Regulierung durch die ADGM FSRA, einen selbst überprüfbaren Reservenachweis und den SAFU-Fonds mit rund 1 Mrd. US-Dollar legst",
  ],
  faqs: [
    {
      q: "Ist Binance in den USA, in Kanada oder in den Niederlanden verfügbar?",
      a: "Nein. Die Liste der verbotenen Länder von Binance (aktualisiert am 5. Januar 2026) nennt die USA, Kanada und die Niederlande. Für die USA erfasst die Liste außerdem US-Bürger und alle, die in den USA tätig sind.",
    },
    {
      q: "Funktioniert das Binance Empfehlungsprogramm in Europa?",
      a: "Für Einwohner des EWR nicht mehr. Nach den Empfehlungsbedingungen von Binance dürfen Nutzer, die in Ländern des EWR registriert sind, seit dem 1. Juli 2026 nicht mehr am Binance Referral Program teilnehmen, und die Bedingungen nennen außerdem Einschränkungen für das Vereinigte Königreich. Aus den Ländern, die Binance bedient, kannst du weiterhin ein Konto bei Binance eröffnen, eine Empfehlung hat dort aber keine Wirkung.",
    },
    {
      q: "Begrenzt Binance den Hebel für neue Konten?",
      a: "Ja. Futures-Konten, die jünger als 30 Tage sind, können höchstens 20x nutzen. Danach geht Binance bei den Perpetuals BTCUSDT und ETHUSDT bis 150x für Positionen bis 300.000 USDT.",
    },
  ],
  reserves: "BTC 100,05 % (Prüfung vom 12. November 2026), selbst überprüfbar per Merkle-Baum und zk-SNARKs",
  fund: "SAFU-Fonds mit rund 1 Mrd. US-Dollar (Stand: Februar 2026)",
  featureNotes: {
    copyTrading: "Copy Trading für Futures und Spot",
    tradingBots: "Grid-, DCA-, Arbitrage-, Rebalancing- und TWAP-Bots für Spot und Futures",
    options: "Optionen auf BTC, ETH, BNB, SOL, XRP und DOGE",
    demoTrading: "Demo-Trading mit virtuellem Guthaben für Spot und Futures",
    margin: "Isolierte Margin und Cross-Margin",
    p2p: "Binance P2P mit lokalen Zahlungsmethoden",
    fiat: "Banküberweisung sowie Kredit- oder Debitkarte, je nach Region",
    earn: "Simple Earn, Dual Investment und ETH-Staking",
    launchpad: "Launchpool und HODLer Airdrops",
    web3Wallet: "Binance Wallet, eine Wallet zur Selbstverwahrung in der Binance-App",
    card: "Binance Card, nur für Einwohner Brasiliens",
  },
  countryNotes: {
    uk: "kein Zugang zu bestimmten Diensten für Privatkunden im Vereinigten Königreich",
    au: "Binance Australia",
    jp: "Binance Japan",
    sg: "nicht auf der Liste der verbotenen Länder, aber mit eingeschränktem Empfehlungsprogramm",
    hk: "nicht auf der Liste der verbotenen Länder, aber mit eingeschränktem Empfehlungsprogramm",
    ae: "Binance UAE in Dubai",
  },
  regional:
    "Binance.com wird von drei Gesellschaften betrieben, die von der ADGM Financial Services Regulatory Authority in Abu Dhabi lizenziert sind. Eigene lokale Plattformen gibt es für Japan (Binance Japan Inc.), Australien (Binance Australia, bei AUSTRAC registriert) und die VAE (Binance FZE, von VARA in Dubai lizenziert); weitere lizenzierte Gesellschaften nennt Binance in Bahrain, Kasachstan, Neuseeland, Thailand, Indonesien, Mexiko, El Salvador, Argentinien, Brasilien und Südafrika. Auf der Lizenzseite ist keine Gesellschaft in der EU oder im EWR aufgeführt.",
  mica: "",
  sourceLabels: [
    "Binance: Copy Trading",
    "Binance: Trading-Bots",
    "Binance: Optionen",
    "Binance: Demo-Trading",
    "Binance: Isolierte Margin",
    "Binance P2P",
    "Binance: Krypto per Karte oder Banküberweisung kaufen",
    "Binance: Earn",
    "Binance: Launchpool",
    "Binance: Binance Wallet",
    "Binance: Binance Card",
    "Binance UK",
    "Binance Australia",
    "Binance Japan",
    "Binance UAE",
  ],
};
