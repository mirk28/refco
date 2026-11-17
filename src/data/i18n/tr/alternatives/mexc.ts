import type { AlternativesText } from "../../../types";

export const mexc: AlternativesText = {
  role: "En düşük komisyon, en yüksek kaldıraç",
  pick: "MEXC, en düşük komisyonu (%0 maker) ve en yüksek kaldıracı (500x'e kadar) sunuyor ama birinci sınıf (tier-one) bir lisansı yok",
  pitch:
    "MEXC fiyatla rekabet ediyor: Spot'ta ve çoğu vadeli kontratta maker komisyonu yok, BTCUSDT vadeli kontratlarında taker oranı %0,02 ve BTCUSDT ile ETHUSDT'de kaldıraç 500x'e kadar. 1.384 Spot paritesi ve 1.152 vadeli kontrat listeliyor – ve birinci sınıf (tier-one) bir lisansı ya da MiCA yetkisi olmadığını kendisi açıklıyor.",
  chooseIf: [
    "Sık işlem yapıyorsan ve en büyük maliyetin komisyonsa – maker'lar Spot'ta ve çoğu vadeli kontratta %0 ödüyor",
    "Yeni listelemelerin peşindeysen: 1.384 Spot paritesi ve 1.152 vadeli kontrat",
    "Referans kodu olmadan kaydolduysan – MEXC, 30 gün içinde davet edeni kendin bağlamana izin veriyor",
  ],
  thinkTwiceIf: [
    "Regülasyon senin için önemliyse – MEXC birinci sınıf bir lisansı ve MiCA yetkisi olmadığını açıklıyor",
    "ABD, Birleşik Krallık, Kanada, Fransa, Hollanda, Singapur veya Hong Kong'da yaşıyorsan – hepsi MEXC'nin Kullanıcı Sözleşmesi'nde yasaklı yargı bölgeleri arasında",
    "Bonuslara güveniyorsan – bonuslar çekilemiyor ve vadeli işlem hesabından erken fon çıkarırsan kaybediliyor",
  ],
  intro:
    "MEXC; sıfır maker komisyonu, 500x'e kadar kaldıraç ve çok uzun bir piyasa listesiyle trader'ları kendine çekiyor. MEXC'ye alternatif arayanların başlıca nedeni regülasyon – MEXC birinci sınıf (tier-one) bir lisansı ve MiCA yetkisi olmadığını kendisi açıklıyor –; bunun yanında borsanın Fransa ve Hollanda'da hizmetini aşamalı olarak kapatması, ABD, Birleşik Krallık ve Kanada'ya kapalı olması ya da MEXC'nin sitesinde göstermediği opsiyon veya Spot marjin gibi ürünlere ihtiyaç duyulması da rol oynuyor. Bu sayfa en yakın altı alternatifi, borsaların kendi sitelerindeki rakamlarla MEXC ile karşılaştırıyor.",
  reasons: [
    {
      title: "Birinci sınıf lisans yok",
      text: "Sözleşme tarafı, Komorlar Birliği'nde kayıtlı MEXC (Comoros) Ltd. MEXC kendi sayfalarında herhangi bir lisans belirtmiyor, birinci sınıf (tier-one) bir lisansı ve MiCA yetkisi olmadığını açıklıyor ve kendi rehberinde ESMA'nın uyumsuz kuruluşlar için tuttuğu geçici sicilde (interim register) yer aldığını belirtiyor.",
    },
    {
      title: "MEXC Fransa ve Hollanda'dan çekiliyor",
      text: "Kullanıcı Sözleşmesi (13 Ekim 2026'da güncellendi) Fransa ve Hollanda'yı yasaklı ülkeler arasında sayıyor. MEXC, Hollanda için son hesap kapatma tarihini 16 Kasım 2026 olarak belirledi; Fransa'da ise hizmetini 5 Mart 2027'ye kadar gruplar hâlinde aşamalı olarak kapatıyor.",
    },
    {
      title: "ABD, Birleşik Krallık ve Kanada'ya kapalı",
      text: "ABD, Birleşik Krallık, Kanada, Singapur, Hong Kong, Malezya, Çin anakarası, Rusya, Belarus ve Kazakistan da yasaklı yargı bölgeleri arasında.",
    },
    {
      title: "Pratikte kimlik doğrulama şart",
      text: "MEXC, KYC'yi tamamlamamanın para yatırma, para çekme ve işlem yapmaya erişimini etkileyebileceğini belirtiyor; ödülleri için de en az Primary KYC gerekiyor.",
    },
    {
      title: "Şartlara bağlı bonuslar",
      text: "Bonuslar çekilemiyor – yalnızca onlarla elde edilen kâr çekilebiliyor – ve bir bonus bitmeden vadeli işlem hesabından fon çıkarırsan bonusun tamamını kaybediyorsun.",
    },
    {
      title: "Bulamadığımız ürünler",
      text: "16 Kasım 2026'da MEXC'nin kendi sitesinde opsiyon işlemi, Spot marjin veya kendi saklamalı (self-custody) bir cüzdan bulamadık.",
    },
  ],
  stayIf: [
    "Kararını komisyonlar belirliyorsa: BTCUSDT vadeli kontratlarında %0 maker ve %0,02 taker, Spot'ta %0 / %0,05",
    "Yeni ve küçük tokenlarda erken işlem yapıyorsan – 1.384 Spot paritesi ve 1.152 vadeli kontrat",
    "Offshore bir platformu kabul ediyorsan ve orada yalnızca işlem sermayeni tutuyorsan",
  ],
  faqs: [
    {
      q: "MEXC Fransa ve Hollanda'dan çekiliyor mu?",
      a: "Evet. MEXC'nin Kullanıcı Sözleşmesi (13 Ekim 2026'da güncellendi) iki ülkeyi de yasaklı yargı bölgeleri arasında sayıyor. MEXC, Hollanda için son hesap kapatma tarihini 16 Kasım 2026 olarak belirledi; Fransa'da ise hizmetini 28 Ekim 2026 ile 5 Mart 2027 arasında gruplar hâlinde aşamalı olarak kapatıyor ve yeni kayıtlar şimdiden kapalı.",
    },
    {
      q: "MEXC AB'de hizmet veriyor mu?",
      a: "MEXC'nin kendi sayfaları bu konuda birbirini tutmuyor. Kullanıcı Sözleşmesi Fransa ve Hollanda'yı yasaklıyor; kısıtlı ülkeler hakkındaki makalesi ise diğer AB ve AEA ülkelerini yasaklı saymıyor – bunu söylerken MEXC'nin MiCA yetkisi bulunmadığını ve ESMA'nın uyumsuz kuruluşlar için tuttuğu geçici sicilde yer aldığını da belirtiyor. MEXC'nin daha yeni bir makalesi ise MEXC'nin AB/AEA'ya hizmet vermediğini söylüyor. AEA'da bulunan ve MiCA kapsamında yetkilendirilmiş bir platform isteyen herkes alternatiflere bakmak zorunda.",
    },
    {
      q: "MEXC'de opsiyon veya Spot marjin işlemi var mı?",
      a: "16 Kasım 2026'da MEXC'nin kendi sitesinde ikisini de bulamadık: yardım merkezinde opsiyon araması sonuç vermiyor ve sitede tanımlanan hesap türleri Spot, Futures, Fiat ve Copy Trade. MEXC'nin türev ürünleri USDT marjinli ve coin marjinli vadeli kontratlardan oluşuyor.",
    },
  ],
  reserves: "USDT %122,42, USDC %109,84, BTC %317,61, ETH %112,41 (9 Kasım 2026 tarihli anlık görüntü)",
  fund: "100 milyon ABD dolarlık Guardian Fund ve ayrıca bir vadeli işlem sigorta fonu",
  featureNotes: {
    copyTrading: "Ayrı bir Copy Trade hesabıyla vadeli kopya işlem",
    tradingBots: "Vadeli grid botu, ayrıca Spot grid ve DCA botları",
    options: "",
    demoTrading: "Canlı piyasa verileriyle vadeli işlemlerde demo hesap",
    margin: "",
    p2p: "USDT, BTC, ETH ve diğer coinler için komisyonsuz P2P",
    fiat: "Visa ve Mastercard kartları, banka havalesi ve Apple Pay",
    earn: "Esnek ve vadeli birikim ürünleri ile On-Chain Earn",
    launchpad: "Launchpad üzerinden token satışlarına katılım (subscription)",
    web3Wallet: "",
    card: "MEXC Card, bir kripto ödeme kartı",
  },
  countryNotes: {
    de: "yasaklı listede değil, ancak MEXC'nin MiCA yetkisi yok ve MEXC daha yeni bir makalesinde AB/AEA'ya hizmet vermediğini söylüyor",
    fr: "5 Mart 2027'ye kadar aşamalı kapanış",
    nl: "son hesap kapatma tarihi: 16 Kasım 2026",
    es: "yasaklı listede değil, ancak MEXC'nin MiCA yetkisi yok ve MEXC daha yeni bir makalesinde AB/AEA'ya hizmet vermediğini söylüyor",
    it: "yasaklı listede değil, ancak MEXC'nin MiCA yetkisi yok ve MEXC daha yeni bir makalesinde AB/AEA'ya hizmet vermediğini söylüyor",
    au: "yasaklı listede değil; 500x kaldıraç sunulmuyor",
    jp: "yasak değil, ancak MEXC Japonya'yı sınırlı bölgeler arasında sayıyor – uygulaması Japon uygulama mağazalarında yok",
    in: "yasak değil, ancak MEXC Hindistan'ı sınırlı bölgeler arasında sayıyor – uygulaması orada listelenmiyor",
  },
  regional: "",
  mica: "",
  sourceLabels: [
    "MEXC: Kopya işlem (copy trading)",
    "MEXC: Vadeli grid botu",
    "MEXC: Vadeli işlem demo hesabı",
    "MEXC: Hesap türlerinin açıklaması",
    "MEXC: P2P işlemleri",
    "MEXC: Kart veya banka havalesiyle kripto satın alma",
    "MEXC: Earn",
    "MEXC: Launchpad",
    "MEXC: MEXC Card nedir?",
    "MEXC: Fransa'da hizmetlerin aşamalı olarak sonlandırılması",
    "MEXC Learn: MEXC alternatifleri arayanlar için",
  ],
};
