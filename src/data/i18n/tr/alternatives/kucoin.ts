import type { AlternativesText } from "../../../types";

export const kucoin: AlternativesText = {
  role: "Ücretsiz trading botları",
  pick: "KuCoin ücretsiz trading botları ve 1.000'den fazla listelenmiş token sunuyor",
  pitch:
    "KuCoin 1.000'den fazla token listeliyor ve otomatik işlemi kolaylaştırıyor: Trading botlarının işlem ücreti dışında hiçbir maliyeti yok. Vadeli işlemlerde komisyon %0,02 maker / %0,06 taker, kaldıraç 125x'e kadar; referans ilişkisi ise 365 gün sürüyor.",
  chooseIf: [
    "KuCoin'in botlarını ücretsiz kullanarak işlemlerini otomatikleştirmek istiyorsan",
    "1.000'den fazla listelenmiş token ve 1.300+ parite arasında altcoin arıyorsan",
    "Kayıtta referans kodunu kaçırmış olma ihtimalin varsa – KuCoin'in Yardım Merkezi'nde bir “Link Referrer” talebi bulunuyor",
  ],
  thinkTwiceIf: [
    "ABD'de, Singapur'da, Hong Kong'da, Fransa'da, Hollanda'da ya da Kanada'nın Ontario veya Britanya Kolumbiyası eyaletlerinde yaşıyorsan",
    "Küçük tokenlarla işlem yapıyorsan – B ve C sınıfı tokenlarda Spot komisyonu %0,20 ve %0,30'a çıkıyor",
    "Opsiyon işlemi yapmak istiyorsan – KuCoin opsiyon işlemlerini 15 Ocak 2026'da kapattı",
  ],
  intro:
    "KuCoin, altcoinleri erkenden listelemesi ve ücretsiz trading botlarıyla tanınıyor. KuCoin alternatifi aramanın başlıca nedenleri: borsanın Ocak 2025'te ABD'li kullanıcıların hesaplarını kapatması, Fransa, Hollanda, Singapur ve Kanada'nın bazı bölgelerinin kısıtlı olması ya da KuCoin'dekinden daha büyük bir vadeli işlem piyasası arayışı. Bu sayfa en yakın altı alternatifi, borsaların kendi sitelerindeki rakamlarla KuCoin ile karşılaştırıyor.",
  reasons: [
    {
      title: "KuCoin ABD'den çekildi",
      text: "KuCoin, 27 Ocak 2025'te ABD Adalet Bakanlığı ile bir uzlaşmaya vardığını duyurdu; ABD'li kullanıcıların hesaplarını ise 23 Ocak 2025 itibarıyla zaten kapatmıştı. KuCoin'in Kullanım Koşulları'nda ABD, bağlı toprakları dahil, kısıtlı bölge olarak yer alıyor.",
    },
    {
      title: "Daha fazla kısıtlı ülke",
      text: "Kullanım Koşulları (29 Ekim 2026'da güncellendi) ayrıca Singapur, Çin anakarası ve Hong Kong, Malezya, Kazakistan, Özbekistan, Rusya, Belarus, Fransa, Hollanda ile Kanada'nın Ontario ve Britanya Kolumbiyası eyaletlerini de sayıyor.",
    },
    {
      title: "Daha küçük bir vadeli işlem piyasası",
      text: "KuCoin'in vadeli işlem hacmi, CoinMarketCap türev sıralamasındaki ilk beş borsanın gerisinde. Daha büyük emir defterleri, büyük emirlerde genellikle daha dar spread anlamına gelir.",
    },
    {
      title: "Küçük tokenlarda daha yüksek komisyon",
      text: "%0,10'luk standart Spot oranı yalnızca A sınıfı tokenlar için geçerli. B sınıfı tokenlarda komisyon %0,20, C sınıfı tokenlarda %0,30; vadeli işlemlerde taker'lar %0,06 öder.",
    },
    {
      title: "Artık opsiyon yok",
      text: "KuCoin 24 Aralık 2025'te opsiyon işlem hizmetini sonlandıracağını duyurdu; web ve uygulamadaki giriş noktaları 15 Ocak 2026'da kapandı.",
    },
    {
      title: "2020'deki hack saldırısı",
      text: "2020'de bir hack saldırısı yaklaşık 285 milyon ABD dolarlık varlığı etkiledi. KuCoin, geri alınamayan yaklaşık 45,55 milyon ABD dolarını kendisinin ve sigorta fonunun karşıladığını, hiçbir kullanıcının zarar görmediğini belirtiyor.",
    },
  ],
  stayIf: [
    "KuCoin'in ücretsiz trading botlarını kullanıyorsan ve ihtiyacını karşılıyorlarsa",
    "KCS tutuyorsan – komisyonları KCS ile ödemek Spot ve marjin komisyonlarında %20 indirim sağlıyor",
    "AEA'da yaşıyorsan ve Avusturya'da MiCAR lisansına sahip KuCoin EU'dan memnunsan",
  ],
  faqs: [
    {
      q: "ABD'li kullanıcılar KuCoin'de hâlâ işlem yapabilir mi?",
      a: "Hayır. KuCoin'in Kullanım Koşulları'nda ABD, bağlı toprakları dahil, kısıtlı bölge olarak yer alıyor ve KuCoin, ABD'li kullanıcıların hesaplarını 23 Ocak 2025 itibarıyla kapattı. Bu sayfadaki ülke tablosu, alternatiflerin ABD'ye nasıl yaklaştığını gösteriyor.",
    },
    {
      q: "KuCoin'de hâlâ opsiyon işlemi var mı?",
      a: "Hayır. KuCoin 24 Aralık 2025'te opsiyon işlem hizmetini sonlandıracağını duyurdu ve web ile uygulamadaki giriş noktaları 15 Ocak 2026'da kapandı.",
    },
    {
      q: "KuCoin EU ile KuCoin aynı şey mi?",
      a: "Hayır. Viyana'daki KuCoin EU Exchange GmbH, Malta hariç AEA sakinlerine MiCAR lisansıyla hizmet veriyor ve Avusturya Finans Piyasası Otoritesi'nin denetiminde. Yardım merkezinde Spot, Convert (dönüştürme), marjin, Simple Earn, KuCard ve SEPA ile para yatırma bölümleri var, ancak vadeli işlemler için bir bölüm yok.",
    },
  ],
  reserves: "BTC %112, ETH %115, USDT %110, USDC %127 (31 Ekim 2026 verileri)",
  fund: "",
  featureNotes: {
    copyTrading: "USDT sürekli vadeli kontratlarda (perpetual) vadeli kopya işlem",
    tradingBots: "Spot grid ve DCA dahil ücretsiz botlar",
    options: "Opsiyon işlemleri 15 Ocak 2026'da kapatıldı",
    demoTrading: "",
    margin: "Spot marjin, BTC/USDT'de 10x",
    p2p: "Yerel para birimleriyle USDT almak için P2P pazar yeri",
    fiat: "Visa ve Mastercard kartlar, Apple Pay ve banka havalesi",
    earn: "Esnek birikim ve çift yatırım (dual investment) dahil KuCoin Earn",
    launchpad: "Spotlight token satışları ve GemPool",
    web3Wallet: "KuCoin Web3 Wallet, çoklu zincir ve kendi kendine saklama (self-custody)",
    card: "KuCard: Malta hariç AEA sakinleri için Visa, Avustralya'da Mastercard",
  },
  countryNotes: {
    ca: "Ontario ve Britanya Kolumbiyası'nda kısıtlama",
    de: "KuCoin EU",
    fr: "global sitede kısıtlama; KuCoin EU, Fransa'nın adını anmadan Malta hariç AEA'yı kapsıyor",
    nl: "global sitede kısıtlama; KuCoin EU, Hollanda'nın adını anmadan Malta hariç AEA'yı kapsıyor",
    es: "KuCoin EU",
    it: "KuCoin EU",
    au: "KuCoin AU",
  },
  regional:
    "Viyana'daki KuCoin EU Exchange GmbH (kucoin.com/en-eu), Malta hariç AEA sakinlerine MiCAR lisansıyla ve Avusturya FMA'nın denetiminde hizmet veriyor. KuCoin AU (AUSTRAC'a kayıtlı Axis One Markets Pty Ltd) Avustralya'ya hizmet veriyor, KuCoin Thailand kucoin.th adresinde faaliyet gösteriyor; Brezilya'da yaşayanlar ise ayrı KuCoin Brasil koşullarına tabi.",
  mica: "KuCoin EU Exchange GmbH, Viyana; Avusturya FMA'nın denetiminde",
  sourceLabels: [
    "KuCoin: Vadeli kopya işlem (copy trading)",
    "KuCoin: Trading botları (strateji işlemleri)",
    "KuCoin: Opsiyon işlemlerinin sonlandırılmasına ilişkin duyuru",
    "KuCoin: Marjin işlemleri",
    "KuCoin: P2P işlemleri",
    "KuCoin: Kart veya banka havalesiyle kripto satın alma",
    "KuCoin: Earn",
    "KuCoin: Spotlight launchpad",
    "KuCoin: Web3 Wallet",
    "KuCoin: KuCard",
    "KuCoin EU: Genel Koşullar",
    "KuCoin AU",
  ],
};
