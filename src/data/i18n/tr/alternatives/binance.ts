import type { AlternativesText } from "../../../types";

export const binance: AlternativesText = {
  role: "En derin likidite",
  pick: "Binance en derin türev piyasasına sahip ve unutulan bir referans kodunu 30 gün içinde sonradan bağlamana izin veriyor",
  pitch:
    "Binance, CoinMarketCap türev sıralamasının en büyük borsası ve likiditede referans noktası: BTC, ETH ve büyük piyasa değerli coinlerin sürekli vadeli kontratlarında dar spread, vadeli işlemlerde %0,02 maker / %0,05 taker ve BTCUSDT ile ETHUSDT kontratlarında 150x'e kadar kaldıraç. Spot, marjin, vadeli işlemler, opsiyonlar, botlar ve kopya işlem tek bir girişle kullanılabiliyor.",
  chooseIf: [
    "Büyük hacimlerle işlem yapıp BTC, ETH ve büyük piyasa değerli coinlerin sürekli vadeli kontratlarında en dar spread'i arıyorsan",
    "Spot, marjin, vadeli işlemler, opsiyonlar, botlar ve kopya işlemi tek bir girişle kullanmak istiyorsan",
    "Referans kodu olmadan kayıt olduysan – Binance, para yatırmadıysan ve işlem yapmadıysan 30 gün içinde kod bağlamana izin veriyor",
  ],
  thinkTwiceIf: [
    "ABD, Kanada veya Hollanda'da yaşıyorsan – üçü de Binance'in yasaklı ülkeler listesinde",
    "AEA'da yaşıyor ve referans avantajlarından yararlanmak istiyorsan – Binance, 1 Temmuz 2026'dan bu yana AEA kullanıcılarını referans programının dışında tutuyor",
    "İlk günden yüksek kaldıraç istiyorsan – yeni vadeli işlem hesapları ilk 30 gün boyunca 20x ile sınırlı",
  ],
  intro:
    "Binance, türev piyasasındaki açık pozisyon (open interest) bakımından en büyük kripto para borsası; ancak herkese açık değil ve her konuda en ucuz ya da en esnek seçenek de değil. Binance alternatifi arayanların başlıca nedenleri şunlar: Binance yaşadıkları ülkede kapalı – ABD, Kanada ve Hollanda, Binance'in yasaklı ülkeler listesinde –, daha düşük komisyon ya da daha yüksek kaldıraç istiyorlar veya tüm fonlarını tek bir borsada tutmak istemiyorlar. Bu sayfa, borsaların kendi sitelerindeki rakamlarla Binance'i en yakın altı alternatifiyle karşılaştırıyor.",
  reasons: [
    {
      title: "Binance ülkende kullanılamıyor",
      text: "Binance'in yasaklı ülkeler listesi (5 Ocak 2026'da güncellendi), yaptırım uygulanan ülke ve bölgelerin yanı sıra ABD, Kanada ve Hollanda'yı da sayıyor. Birleşik Krallık'ta ise bazı hizmetlere bireysel müşteriler erişemiyor.",
    },
    {
      title: "Daha düşük komisyon istiyorsun",
      text: "Binance standart seviyede Spot'ta maker ve taker için %0,10, USDⓈ-M vadeli işlemlerde %0,02 / %0,05 komisyon alıyor. Komisyonları BNB ile ödersen bu oranlar Spot'ta %0,075'e, vadeli işlemlerde %0,018 / %0,045'e düşüyor.",
    },
    {
      title: "Daha fazla kaldıraç veya daha fazla coin istiyorsun",
      text: "Kaldıraç BTCUSDT ve ETHUSDT sürekli vadeli kontratlarında 150x'te duruyor; yeni vadeli işlem hesapları ise ilk 30 gün boyunca 20x'ten fazlasını kullanamıyor. Binance'te 600+ kripto para listeleniyor.",
    },
    {
      title: "AEA'da referans avantajı yok",
      text: "1 Temmuz 2026'dan bu yana AEA ülkelerinde kayıtlı kullanıcılar Binance referans programına artık katılamıyor. Binance'in referans koşulları ayrıca Birleşik Krallık, Singapur, Japonya, Türkiye, Hong Kong ve İsrail için de kısıtlamalar sıralıyor.",
    },
    {
      title: "Her şeyden önce kimlik doğrulama",
      text: "Her yeni kullanıcı, para yatırmadan veya işlem yapmadan önce kimlik doğrulamasını tamamlamak zorunda. Binance'e göre inceleme genellikle 48 saat içinde bitiyor.",
    },
    {
      title: "Her şeyi tek borsada tutmak istemiyorsun",
      text: "Hiçbir merkezi borsa risksiz değildir. İşlem sermayeni ikinci bir borsada da tutmak, tek bir platforma olan bağımlılığını azaltır.",
    },
  ],
  stayIf: [
    "Senin için en önemli şey likiditeyse – Binance, tüm borsalar arasında en büyük açık pozisyona ve vadeli işlem hacmine sahip",
    "Komisyonları BNB ile ödüyorsan: Spot komisyonlarında %25, USDⓈ-M vadeli işlem komisyonlarında %10 indirim",
    "ADGM FSRA denetimine, kendin doğrulayabileceğin bir rezerv kanıtına ve yaklaşık 1 milyar ABD dolarlık SAFU fonuna önem veriyorsan",
  ],
  faqs: [
    {
      q: "Binance ABD, Kanada veya Hollanda'da kullanılabilir mi?",
      a: "Hayır. Binance'in yasaklı ülkeler listesi (5 Ocak 2026'da güncellendi) ABD, Kanada ve Hollanda'yı sayıyor. ABD söz konusu olduğunda liste, ABD vatandaşlarını ve ABD'de faaliyet gösteren herkesi de kapsıyor.",
    },
    {
      q: "Binance referans programı Avrupa'da geçerli mi?",
      a: "AEA'da yaşayanlar için artık değil. Binance'in referans koşullarına göre AEA ülkelerinde kayıtlı kullanıcılar 1 Temmuz 2026'dan bu yana Binance referans programına katılma hakkına sahip değil; koşullar ayrıca Birleşik Krallık için de kısıtlamalar sıralıyor. Binance'in hizmet verdiği ülkelerden yine de Binance hesabı açabilirsin, ancak orada referansın hiçbir etkisi olmaz.",
    },
    {
      q: "Binance yeni hesaplarda kaldıracı sınırlıyor mu?",
      a: "Evet. Açılışının üzerinden 30 gün geçmemiş vadeli işlem hesapları 20x'ten fazla kaldıraç kullanamaz. Bu sürenin ardından Binance, 300.000 USDT'ye kadar olan pozisyonlarda BTCUSDT ve ETHUSDT sürekli vadeli kontratlarında 150x'e kadar kaldıraç sunuyor.",
    },
  ],
  reserves: "BTC %100,05 (12 Kasım 2026 tarihli denetim), Merkle ağacı ve zk-SNARKs ile kullanıcı tarafından doğrulanabilir",
  fund: "Yaklaşık 1 milyar ABD dolarlık SAFU fonu (Şubat 2026 itibarıyla)",
  featureNotes: {
    copyTrading: "Vadeli işlem ve Spot kopya işlem (copy trading)",
    tradingBots: "Spot ve vadeli grid, DCA, arbitraj, yeniden dengeleme ve TWAP botları",
    options: "BTC, ETH, BNB, SOL, XRP ve DOGE opsiyonları",
    demoTrading: "Spot ve vadeli işlemler için sanal fonlarla demo hesap",
    margin: "İzole ve çapraz marjin",
    p2p: "Yerel ödeme yöntemleriyle Binance P2P",
    fiat: "Bölgeye göre banka havalesi ve kredi ya da banka kartı",
    earn: "Simple Earn, çift yatırım (dual investment) ve ETH staking",
    launchpad: "Launchpool ve HODLer Airdrops",
    web3Wallet: "Binance Wallet, Binance uygulamasının içinde yer alan self-custody (kendi kendine saklama) cüzdanı",
    card: "Binance Card, yalnızca Brezilya'da yaşayanlar için",
  },
  countryNotes: {
    uk: "Birleşik Krallık'taki bireysel müşteriler için bazı hizmetlerde erişim kısıtlaması",
    au: "Binance Australia",
    jp: "Binance Japan",
    sg: "yasaklı listede değil, ancak referans programı orada kısıtlı",
    hk: "yasaklı listede değil, ancak referans programı orada kısıtlı",
    ae: "Dubai'deki Binance UAE",
  },
  regional:
    "Binance.com, Abu Dabi'deki ADGM Financial Services Regulatory Authority tarafından lisanslanmış üç şirket tarafından işletiliyor. Japonya (Binance Japan Inc.), Avustralya (AUSTRAC'a kayıtlı Binance Australia) ve BAE (Dubai'de VARA lisanslı Binance FZE) için ayrı yerel platformlar bulunuyor; Binance ayrıca Bahreyn, Kazakistan, Yeni Zelanda, Tayland, Endonezya, Meksika, El Salvador, Arjantin, Brezilya ve Güney Afrika'da lisanslı başka şirketler de listeliyor. Lisans sayfasında hiçbir AB veya AEA şirketi geçmiyor.",
  mica: "",
  sourceLabels: [
    "Binance: Kopya işlem (copy trading)",
    "Binance: Trading botları",
    "Binance: Opsiyonlar",
    "Binance: Demo hesap",
    "Binance: İzole marjin",
    "Binance P2P",
    "Binance: Kartla veya banka havalesiyle kripto satın alma",
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
