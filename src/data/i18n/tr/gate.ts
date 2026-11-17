import type { ExchangeText } from "../../types";

export const gate: ExchangeText = {
  referral: {
    codeName: "referans kodu",
    whereShort: "Kayıt bağlantısıyla eklenir – Gate davet edeni kayıt formunda gösterir",
    apply:
      "Bu sayfadaki kayıt bağlantısını açman yeterli: Gate kodu kaydına ekler ve formda davet edeni ve ödülü gösteren bir banner görüntüler.",
    whereToEnter:
      "Gate'te en güvenli yol referans bağlantısıdır. Bu sayfadaki bağlantı gate.com/signup sayfasını VAAXAW9YVA kodu eklenmiş olarak açar ve Gate bunu formun üstündeki bir banner ile teyit eder (“Register now to receive a gift from your friend”). Web formunun ilk adımı yalnızca ikamet ettiğin ülkeyi sorar; yani orada kodu yazacağın ayrı bir kutu yoktur – davet edeni gösteren banner görünmüyorsa hesabı oluşturmadan önce bağlantıyı yeniden aç.",
    afterSignupShort: "Sonradan ekleme Gate tarafından belgelenmemiş – kayıt olurken bağlantıyı kullan",
    afterSignup:
      "Gate, mevcut bir borsa hesabına referans kodu eklemenin bir yolunu yayımlamıyor. Referans kurallarına göre her kullanıcı yalnızca tek bir referans yöntemiyle kayıt olabilir; Gate'in kendi rehberi de yeni bir kullanıcı davet bağlantısı ya da davet kodu olmadan kayıt olursa referans ilişkisinin kaydedilmeyebileceği konusunda uyarıyor. Hesabı oluşturmadan önce bağlantıyı kullan.",
    inviteeReward:
      "Bu bağlantıyla kayıt olduğunda Gate'in Super Commission programına dahil olursun: Gate'in kayıt sayfasında belirtildiğine göre işlem ücretlerin üzerinden %10 komisyon ödülü alırsın. Program kurallarına göre iade, 1 yıl boyunca ödediğin işlem ücretleri üzerinden hesaplanır ve fiat işlemlerini kapsamaz.",
    guide: [
      "Gate aynı anda birden fazla referans programı yürütüyor. VAAXAW9YVA kodu Super Commission programına ait; bu programda davet eden, kazandığı komisyonun bir kısmını davet ettiği kişilerle paylaşıyor. Gate'in gösterdiği paylaşım oranı davet eden için %30, davet edilen arkadaş için %10; hesaplama, arkadaşın bir yıl boyunca ödediği işlem ücretlerine dayanıyor. Fiat işlemleri kapsam dışı.",
      "Tek bir kayıt; Spot, Marjin, Vadeli işlemler ve Trenches (Gate'in Gate Alpha olarak da adlandırdığı bölüm) için geçerlidir. Gate'in diğer referans kampanyaları ise kuponla çalışıyor – “Earn Voucher” ve “Token Crew” – ancak Super Commission kuralları, bu yolla davet edilen hesapların diğer etkinliklerin ödüllerinden yararlanamayacağını belirtiyor. Yani bunları birleştirebileceğine güvenme.",
      "Gate siteler arası davetleri desteklemiyor. AEA'da (Avrupa Ekonomik Alanı) yaşıyorsan sana Gate'in Malta'daki ayrı bir şirketi hizmet verir (gate.com/en-eu); orada komisyon yalnızca Spot işlemler için ödenir ve global sitede yapılan bir referans oraya taşınmaz. Super Commission ayrıca Belçika, Birleşik Krallık, Fransa, Almanya, Hollanda, Türkiye, Avusturya ve Güney Kore'deki kullanıcılara açık değil.",
    ],
  },
  signup: {
    methods: ["e-posta adresi", "telefon numarası", "Google", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Gate kayıt sayfasını aç",
        text: "Bu sayfadaki kayıt düğmesini kullan. Gate, formun üstünde davet edeni ve %10'luk işlem ücreti ödülünü gösteren bir banner çıkarır – referansın eklendiğinin teyidi budur.",
      },
      {
        title: "İkamet ettiğin ülkeyi veya bölgeyi seç",
        text: "Yaşadığın yeri seç, Kullanıcı Sözleşmesini kabul et ve ardından “Create Account” düğmesine tıkla.",
      },
      {
        title: "E-posta adresini veya telefon numaranı gir",
        text: "İkisinden birini seç; Gate bunu girişlerin ve güvenlik kodların için kullanır.",
      },
      {
        title: "Doğrulama kodunu gir",
        text: "Gate e-postana veya telefonuna bir kod gönderir. Gate'in uygulama rehberine göre kod 15 dakika geçerlidir.",
      },
      {
        title: "Şifreni belirle",
        text: "Hesap oluşturmayı tamamlamak için güçlü ve başka hiçbir yerde kullanmadığın bir şifre seç.",
      },
      {
        title: "Kimliğini doğrula",
        text: "KYC'yi pasaport, kimlik kartı veya sürücü belgesiyle tamamla. Gate, kripto para yatırıp çekebilmen için bunu şart koşuyor.",
      },
    ],
    kycShort: "Para yatırma ve çekme için zorunlu",
    kyc: "Evet. Gate'e göre kripto para yatırmak ve çekmek, fiat para birimleriyle işlem yapmak ve Startup aboneliklerine katılmak için KYC kimlik doğrulaması tüm kullanıcılar için zorunlu. Adres doğrulaması isteğe bağlıdır ve para çekme limitlerini yükseltir. Kimlik doğrulama görevi aynı zamanda Gate'in yeni kullanıcı ödüllerinin de bir parçası.",
    documents:
      "Gate, kimlik doğrulaması için pasaport, kimlik kartı veya sürücü belgesi kabul ediyor. Daha yüksek limitler için isteğe bağlı olarak bir adres belgesi de eklenebilir.",
    minAge: "18 yaş (Gate Kullanıcı Sözleşmesi)",
  },
  welcomeTasks: [
    { task: "Kayıt olma", reward: "50 USDT değerinde kupon" },
    { task: "Kimlik doğrulamasını tamamlama", reward: "50 USDT değerinde kupon" },
    { task: "En az 10 USDT tutarında ilk para yatırma", reward: "10 USDT değerinde kupon" },
    { task: "En az 10 USDT tutarında ilk işlem", reward: "5 USDT değerinde kupon" },
    { task: "Uygulamayı ilk kez indirme", reward: "10 USDT değerinde kupon" },
    {
      task: "İleri seviye görev, ilk aşama: en az 50 USDT net para yatırma ve 500 USDT işlem hacmi",
      reward: "100 USDT (ileri seviye görevlerde 10.000 USDT'ye kadar)",
    },
  ],
  tokenDiscount: "Spot komisyonlarını GT ile ödemek, standart oranı hem maker hem taker için %0,1'den %0,09'a düşürür.",
  extraFeeMarkets: ["USDT teslimatlı vadeli kontratlar"],
  sourceLabels: [
    "Gate: Super Commission referans programı ve kuralları",
    "Gate: Earn Voucher referans kampanyası",
    "Gate: Token Crew referans kampanyası",
    "Gate Learn: Gate referans programı rehberi",
    "Gate: Rewards Hub (yeni kullanıcı görevleri)",
    "Gate: Yeni kullanıcı görevlerinin kuralları",
    "Gate: Komisyon tablosu",
    "Gate: BTCUSDT sürekli vadeli kontrat marjin ve kaldıraç kademeleri",
    "Gate: Yeni vadeli işlem hesapları için kaldıraç sınırı",
    "Gate: Web sitesinde kayıt nasıl yapılır?",
    "Gate: Uygulamada kayıt nasıl yapılır?",
    "Gate: KYC zorunluluğu",
    "Gate: Kimlik doğrulama nasıl tamamlanır?",
    "Gate: Kullanıcı Sözleşmesi (kısıtlı bölgeler, minimum yaş)",
    "Gate: Hakkımızda",
    "Gate: Lisanslar",
    "Gate: Rezerv kanıtı (Proof of Reserves)",
    "Gate: gate.com alan adına geçiş (duyuru)",
  ],
  feeDiscount: "İşlem ücretlerinde 1 yıl boyunca %10 iade",
  referralCovers: ["Spot", "Marjin", "Vadeli işlemler", "Trenches (Gate Alpha)"],
  bonusHeadline: "%10 işlem ücreti iadesi ve 125 USDT değerinde yeni kullanıcı görevleri",
  benefits: [
    "Gate'in Rewards Hub'ı 125 USDT değerinde kuponlu yeni kullanıcı görevleri listeliyor (kayıt, doğrulama, ilk para yatırma, ilk işlem, uygulama indirme)",
    "Tek referans bir yıl boyunca Spot, Marjin, Vadeli işlemler ve Trenches için geçerli",
    "%0,1 Spot komisyonu; GT ile ödersen %0,09",
    "Tek hesapla 5.400'den fazla dijital varlıkta işlem yap",
  ],
  benefitNote:
    "%10 iade, bu bağlantıyla açılan kayıt sayfasında Gate'in gösterdiği ödüldür; fiat işlemlerini kapsamaz ve Belçika, Birleşik Krallık, Fransa, Almanya, Hollanda, Türkiye, Avusturya ve Güney Kore'deki kullanıcılara açık değildir. Yeni kullanıcı görevleri kayıttan sonraki 15 gün içinde tamamlanmalıdır, bölgeye göre değişebilir ve kurumsal, API ve satış ortaklığı (affiliate) hesaplarını kapsamaz. Gate'in kurallarına göre komisyon paylaşımıyla davet edilen hesaplar diğer etkinliklerin ödüllerinden yararlanamaz – gerçekte neleri talep edebileceğini hesabındaki Rewards Hub gösterir.",
  headquarters: "Gate Group, birçok bölgede lisanslı kuruluşlarıyla",
  regulation: "Malta (MFSA, MiCA), Cebelitarık, Bahamalar, Hong Kong, Dubai (VARA, DMCC), Avustralya (AUSTRAC), Japonya ve Kıbrıs'ta lisans veya kayıt",
  users: "63 milyondan fazla kullanıcı (Gate'e göre)",
  assets: "5.400+ dijital varlık",
  maxLeverage: "200x'e kadar (BTCUSDT sürekli vadeli kontrat)",
  feeNote:
    "Üst VIP seviyeleri daha az komisyon öder. GT yerine Points Deduction özelliğini açarsan Gate, Spot işlemlerde sabit %0,2, vadeli işlemlerde ise sabit %0,075 taker komisyonu uygular.",
  products: ["Sürekli vadeli kontratlar", "Teslimatlı vadeli kontratlar", "Opsiyonlar", "Spot", "Marjin", "Kopya işlem", "Launchpad", "Earn"],
  tagline: "2013'ten beri en geniş altcoin yelpazesi",
  quickAnswer:
    "Gate referans kodu: VAAXAW9YVA. Bu sayfadaki kayıt bağlantısını açtığında Gate kodu otomatik olarak ekler – ardından kayıt formunda, işlem ücretlerin üzerinden %10 komisyon ödülü vaat eden bir banner görünür. İade bir yıl sürer; Spot, Marjin, Vadeli işlemler ve Trenches için geçerlidir. Gate kodu sonradan eklemenin bir yolunu belgelemediği için hesabı oluşturmadan önce bağlantıyı kullan.",
  about: [
    "Gate 2013'te kuruldu – Bter.com olarak başladı, ardından Gate.io adını aldı ve Mayıs 2025'te uluslararası gate.com alan adına geçti. Ayırt edici özelliği çeşitlilik: Gate, 5.400'den fazla dijital varlık listelediğini ve 63 milyonun üzerinde kullanıcıya hizmet verdiğini söylüyor; yeni tokenlar da çoğu zaman diğer büyük borsalardan çok önce burada ortaya çıkıyor.",
    "Türev tarafında Gate, piyasa verilerimizin tarihinde CoinMarketCap sıralamasında en yüksek ikinci açık pozisyona (open interest) sahipti; yüzlerce altcoin üzerinde USDT marjinli sürekli vadeli kontratlar, teslimatlı vadeli kontratlar ve opsiyonlar sunuyor. BTCUSDT sürekli vadeli kontratında kaldıraç, en düşük risk kademesinde 200x'e kadar çıkıyor; yeni vadeli işlem hesapları ise ilk üç gün 20x sınırıyla başlıyor. İşlem ekranlarının yanında kopya işlem, yeni tokenlar için bir launchpad ve Earn ürünleri bulunuyor.",
    "Gate, Mayıs 2020'den beri rezerv kanıtı (Proof of Reserves) yayımlıyor. 18 Ekim 2026 tarihli rapor, 496 varlıkta toplam 8,68 milyar ABD doları rezerv ve %118 rezerv oranı gösterdi. Grup; Malta (MFSA, MiCA kapsamında), Cebelitarık, Bahamalar, Hong Kong, Dubai, Avustralya, Japonya ve Kıbrıs'taki lisans ve kayıtlarını listeliyor. Global site gate.com, ABD'de ve uzun bir listedeki diğer ülkelerde yaşayanlara kapalı; AEA'da yaşayanlara ise Gate'in Malta'daki şirketi hizmet veriyor.",
  ],
  highlights: [
    { title: "5.400+ varlık", text: "Borsalar arasındaki en büyük altcoin kataloglarından biri." },
    { title: "İşlem ücretlerinin %10'u geri", text: "Gate bunu, bu bağlantıyla açılan kayıt sayfasında gösteriyor." },
    { title: "%118 rezerv oranı", text: "2020'den beri rezerv kanıtı; son rapor 18 Ekim 2026 tarihli." },
  ],
  pros: [
    "Başka yerde bulamayacağın birçok altcoin için vadeli işlem",
    "Standart Spot komisyonu %0,1, GT ile %0,09; USDT sürekli vadeli kontratlarda %0,02 / %0,05",
    "2020'den beri rezerv kanıtı ve %118 rezerv oranı",
    "2013'ten bu yana uzun bir geçmiş ve giderek uzayan bir bölgesel lisans listesi",
  ],
  cons: [
    "Global site; ABD, Birleşik Krallık, Kanada, Almanya, Fransa, İspanya ve Hollanda dahil birçok ülkeye kapalı",
    "Kayıttan sonra referans kodu eklemenin belgelenmiş bir yolu yok",
    "Referanslar Gate'in bölgesel siteleri arasında taşınmıyor",
    "Küçük tokenlar yüksek volatilite ve likidite riski taşıyor",
  ],
  bestFor: ["Altcoin vadeli işlem trader'ları", "Yeni listelemeleri erken yakalamak isteyenler", "Sadelikten çok çeşitliliğe değer veren trader'lar"],
  signupTip:
    "Yeni kullanıcı görevlerini kayıttan sonraki 15 gün içinde tamamla – sonrasında başlangıç kuponlarının süresi doluyor – ve Spot komisyonlarını GT ile ödeyerek %0,09'a indirmeyi düşün.",
  safety:
    "Gate, rezerv oranı %100'ün üzerinde olan bir rezerv kanıtı yayımlıyor – 18 Ekim 2026 tarihli raporda %118 – ve yardım merkezi iki faktörlü kimlik doğrulamayı, anti-phishing kodunu, para çekme beyaz listesini ve fon şifresini anlatıyor. Para yatırmadan önce bunları etkinleştir. Düşük piyasa değerli altcoinlerde kaldıraçlı pozisyon açmadan önce mutlaka likiditeyi kontrol et.",
  restricted:
    "Gate'in Kullanıcı Sözleşmesi (son güncelleme: 22 Temmuz 2026) global site için kısıtlı bölgeleri listeliyor. Bunlar arasında ABD, Çin anakarası, Singapur, Kanada, Fransa, Almanya, Hong Kong, Malezya, Malta, İspanya, Hollanda, Birleşik Krallık, Avusturya, Hindistan, Endonezya, Japonya, Arjantin, BAE, Tayland, Güney Kore, Filipinler, Pakistan, Vietnam, Rusya ve Belarus'un yanı sıra yaptırım uygulanan bölgeler de var. Bu ülkelerin bazılarına, kendi siteleri ve kuralları olan ayrı Gate şirketleri hizmet veriyor.",
  faqs: [
    {
      topic: "referral",
      q: "Gate referans kodu VAAXAW9YVA çalışıyor mu?",
      a: "Evet. 16 Kasım 2026'da gate.com/signup/VAAXAW9YVA bağlantısı, Gate'in kendi kayıt sayfasını kod eklenmiş olarak açtı ve davet edeni gösteren banner şu metni içeriyordu: “Sign up and trade to receive 10% commission reward on trading fees!”.",
    },
    {
      topic: "referral",
      q: "Gate referans iadesi ne kadar sürüyor?",
      a: "Bir yıl. Gate'in Super Commission kurallarına göre ücret iadesi, 1 yıl boyunca ödediğin işlem ücretleri üzerinden hesaplanır ve fiat işlemlerini kapsamaz.",
    },
    {
      topic: "referral",
      q: "Gate.io ile Gate aynı borsa mı, kod hâlâ geçerli mi?",
      a: "Evet. Gate.io, Mayıs 2025'te uluslararası gate.com alan adına geçti; 2013'te kurulan aynı borsadır. VAAXAW9YVA kodu gate.com üzerinde kullanılır.",
    },
    {
      topic: "referral",
      q: "Gate referans kodu AB'de geçerli mi?",
      a: "Aynı şekilde değil. AEA'da yaşayanlara ayrı bir Gate sitesi (gate.com/en-eu, Malta'dan işletiliyor) hizmet veriyor; orada komisyon yalnızca Spot işlemler için geçerli ve Gate siteler arası davetlerin desteklenmediğini belirtiyor. Super Commission ayrıca Belçika, Fransa, Almanya, Hollanda ve Avusturya'daki kullanıcılara açık değil.",
    },
    {
      topic: "referral",
      q: "Gate referans iadesini Gate'in referans kuponlarıyla birleştirebilir miyim?",
      a: "Buna güvenme. Gate'in Super Commission kurallarına göre bu yolla davet edilen hesaplar diğer etkinliklerin ödüllerinden yararlanamaz; buna “Earn Voucher” ve “Token Crew” kupon kampanyaları da dahil.",
    },
    {
      topic: "signup",
      q: "Gate kayıt formu neden önce ülkemi soruyor?",
      a: "Gate'te kayıt, ikamet ettiğin ülke veya bölgeyle başlar; çünkü sunulan ürünler, ödüller ve hatta sana hizmet veren Gate şirketi buna bağlıdır. E-posta adresini veya telefon numaranı ancak bundan sonra girersin.",
    },
    {
      topic: "signup",
      q: "Gate doğrulama kodu ne kadar süre geçerli?",
      a: "Gate'in uygulama kayıt rehberine göre e-postana veya telefonuna gönderilen doğrulama kodu 15 dakika geçerlidir.",
    },
    {
      topic: "signup",
      q: "Gate KYC olmadan kullanılır mı?",
      a: "Yalnızca sınırlı ölçüde. Gate'e göre kripto para yatırmak ve çekmek, fiat para birimleriyle işlem yapmak ve Startup aboneliklerine katılmak için KYC tüm kullanıcılar için zorunlu.",
    },
    {
      topic: "bonus",
      q: "Gate'te yeni kullanıcılar için hoş geldin bonusu nedir?",
      a: "Gate'in Rewards Hub sayfası, 125 USDT değerinde kupon kazandıran yeni kullanıcı görevleri listeliyor: kayıt için 50, kimlik doğrulama için 50, en az 10 USDT tutarındaki ilk para yatırma için 10, en az 10 USDT tutarındaki ilk işlem için 5 ve uygulamayı ilk kez indirmek için 10. İleri seviye görevlerde ödül 10.000 USDT'ye kadar çıkıyor. Kayıt sayfasının kendisi 135 USDT'ye kadar ödül duyuruyor; bu yüzden geçerli olan, hesabında gösterilen tutarlardır.",
    },
    {
      topic: "bonus",
      q: "Gate yeni kullanıcı görevlerini tamamlamak için ne kadar sürem var?",
      a: "Başlangıç görevleri kayıttan sonraki 15 gün içinde tamamlanmalı. Stablecoin işlemleri, işlem görevlerine sayılmaz; kurumsal, API ve satış ortaklığı (affiliate) hesapları ise kapsam dışıdır.",
    },
    {
      topic: "fees",
      q: "Gate Spot komisyon oranları ne kadar?",
      a: "Standart (VIP 0) Spot komisyonu maker ve taker için %0,1; komisyonu GT ile ödersen %0,09. Bunun yerine Points Deduction özelliğini açarsan Gate sabit %0,2 uygular.",
    },
    {
      topic: "fees",
      q: "Gate vadeli işlem komisyonları ne kadar?",
      a: "USDT sürekli vadeli kontratlarda standart seviyede komisyon %0,02 maker ve %0,05 taker. USDT teslimatlı vadeli kontratlar ise -%0,015 maker (yani iade) ve %0,016 taker olarak listeleniyor.",
    },
    {
      topic: "fees",
      q: "Gate'te maksimum kaldıraç kaç?",
      a: "En düşük risk kademesinde BTCUSDT sürekli vadeli kontratında 200x'e kadar (çapraz marjin, ilk risk limitine kadar olan pozisyonlar). Yeni vadeli işlem hesapları ilk üç gün boyunca 20x ile sınırlı. Bu kadar yüksek kaldıraçta çok küçük bir fiyat hareketi bile pozisyonun likidasyonuna yol açabilir.",
    },
    {
      topic: "safety",
      q: "Gate ABD'de kullanılabilir mi?",
      a: "Hayır. ABD, Gate'in Kullanıcı Sözleşmesindeki kısıtlı bölgeler listesinde yer alıyor.",
    },
    {
      topic: "safety",
      q: "Gate rezerv kanıtı yayımlıyor mu?",
      a: "Evet, Mayıs 2020'den beri. 18 Ekim 2026 tarihli rapor, 496 varlıkta toplam 8,68 milyar ABD doları rezerv ve %118 rezerv oranı gösterdi.",
    },
    {
      topic: "safety",
      q: "Gate nerelerde lisanslı?",
      a: "Gate'in listelediği lisans veya kayıtlar şu yerlerde: Hong Kong, Cebelitarık, Malta (MFSA, MiCA kapsamında), Avustralya (AUSTRAC), Dubai (VARA ve DMCC), Bahamalar, Japonya ve Kıbrıs.",
    },
  ],
};
