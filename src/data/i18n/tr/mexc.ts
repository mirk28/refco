import type { ExchangeText } from "../../types";

export const mexc: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Kayıt formundaki “Referral Code (Optional)” alanı (büyük/küçük harfe duyarlı)",
    apply:
      "Kodu kayıt formundaki “Referral Code (Optional)” alanına gir – kod büyük/küçük harfe duyarlı – ya da bu sayfadaki kayıt bağlantısını aç; bağlantı alanı senin yerine doldurur ve kilitler.",
    whereToEnter:
      "MEXC'nin kayıt formunda “Referral Code (Optional)” adlı bir alan var ve içinde “Enter invitation code (case-sensitive)” ipucu yazıyor. Bu yüzden 4E3xM kodunu tam yazıldığı gibi, büyük E ve büyük M harfleriyle gir. Web sitesinde alanı görmek için “Enter Referral Code” kutucuğunu işaretlersin, uygulamada ise alanı açmak için küçük oka dokunursun. Bu sayfadaki bağlantı, MEXC'nin davet sayfasını 4E3xM önceden girilmiş ve alan kilitlenmiş olarak açar.",
    afterSignupShort: "Evet – kayıttan sonraki 30 gün içinde",
    afterSignup:
      "Evet. MEXC'de kayıttan sonra davet edeni kendin bağlayabileceğin bir self-servis işlevi var: yalnızca son 30 gün içinde kaydolmuş hesaplar bundan yararlanabilir, işlev ana hesaplarda çalışır ve bağlamayı referans koduyla ya da davet edenin UID numarasıyla yaparsın. Davet edenin senden önce kaydolmuş olması gerekir. MEXC'ye göre bir davet kodu bir kez bağlandıktan sonra değiştirilemez ve kaldırılamaz.",
    inviteeReward:
      "MEXC, davet edilen kullanıcılara kalıcı bir komisyon indirimi vermiyor. Kodun sana açtığı şey MEXC'nin referans kampanyası: davet sayfası, referansla kaydolanlara 10.000 USDT'ye varan yeni kullanıcı ödüllerinin üzerine 140 USDT'ye kadar ek bir ödül gösteriyor. Referans ödülü, kayıttan sonraki 7 gün içinde bir net para yatırma görevini ve bir vadeli işlem görevini tamamladığında vadeli işlem bonusu olarak ödenir.",
    guide: [
      "MEXC'de referans kodu iki işe yarar. Birincisi, seni kimin davet ettiğini kaydeder – davet eden, Spot ve vadeli işlemlerinden komisyon kazanır. İkincisi, seni MEXC'nin yeni kayıtlar için düzenlediği referans kampanyasına katılmaya hak kazandırır. Kampanya kademelidir: en az 100 dolarlık net para yatırma ve 1.000 dolarlık vadeli işlem hacmi için 50 USDT, 10.000 dolarlık vadeli işlem hacminde 90 USDT ve 20.000 dolarda 140 USDT – hepsi kayıttan sonraki 7 gün içinde ve Primary KYC tamamlandıktan sonra.",
      "Ödüller nakit değil; vadeli işlem bonusu, komisyon kuponu ve pozisyon airdrop'u olarak verilir. MEXC kampanyayı süreli ve “only open to designated users” (yalnızca belirlenen kullanıcılara açık) olarak işaretliyor; kampanyanın SSS sayfası da referans bonusunun 10.000 USDT kampanyasıyla veya Rewards Hub bonuslarıyla birleştirilemeyeceğini söylüyor – davet sayfası ikisini birlikte tanıtsa bile. Kayıttan sonra kendi hesabında gösterilen tutarları geçerli tutarlar olarak esas al.",
      "Kod büyük/küçük harfe duyarlı olduğu için onu uygulamanın en güvenli yolu bağlantıyı kullanmak. Kodsuz kaydolduysan, kodu kendin bağlamak için hâlâ 30 günün var.",
    ],
  },
  signup: {
    methods: ["e-posta adresi", "telefon numarası", "Google", "Apple", "Telegram", "MetaMask"],
    steps: [
      {
        title: "MEXC kayıt sayfasını aç",
        text: "Bu sayfadaki kayıt butonunu kullan. MEXC, “Your Friend Invites You to Join MEXC” sayfasını 4E3xM referans kodu önceden girilmiş ve kilitlenmiş olarak açar.",
      },
      {
        title: "E-posta adresini veya telefon numaranı gir ve şifre belirle",
        text: "Dilersen Google, Apple, Telegram veya MetaMask ile de devam edebilirsin. Şifre en az 10 karakterden oluşmalı; büyük harf, küçük harf, rakam ve sembol içermeli.",
      },
      {
        title: "Referans kodunu kontrol et",
        text: "“Referral Code (Optional)” alanında 4E3xM yazmalı. Kodu kendin yazıyorsan büyük harflere dikkat et – kod büyük/küçük harfe duyarlı.",
      },
      {
        title: "Kaydırmalı bulmacayı çöz",
        text: "MEXC, güvenlik kontrolü olarak bir kaydırmalı bulmaca gösterir.",
      },
      {
        title: "6 haneli kodu gir",
        text: "MEXC'nin sana gönderdiği 6 haneli doğrulama kodunu yaz ve “Confirm” butonuna bas.",
      },
      {
        title: "KYC'yi tamamla",
        text: "Ödüllerin kilidini açmak ve para yatırma, para çekme ve işlem yapmada kısıtlamalarla karşılaşmamak için Primary KYC'yi tamamla.",
      },
    ],
    kycShort: "Para yatırma, para çekme ve işlem için gerekli",
    kyc: "Pratikte evet. MEXC, KYC doğrulamasını tamamlamamanın para yatırma, para çekme ve işlem gibi hizmetlere erişimini etkileyebileceğini belirtiyor; ödülleri için de en az Primary KYC gerekiyor. Primary KYC (temel doğrulama) ile günde 80 BTC'ye kadar kripto çekebilirsin; Advanced KYC (gelişmiş doğrulama) bu sınırı günde 200 BTC'ye çıkarır ve günlük 20.000 USD'lik fiat limiti ekler. Spot, vadeli işlemler ve kampanyalar her iki seviyede de açık.",
    documents: "MEXC kimlik kartı, pasaport, ehliyet veya oturma izni kabul ediyor.",
    minAge:
      "Ülkendeki reşit olma yaşı – MEXC'nin Kullanıcı Sözleşmesi, bağlayıcı bir sözleşme yapabilecek yasal yaşta olmanı şart koşuyor ama belirli bir yaş belirtmiyor",
  },
  welcomeTasks: [
    { task: "Kayıt", reward: "10 USDT kupon" },
    { task: "Uygulamaya ilk giriş", reward: "10 USDT kupon" },
    { task: "Primary KYC'nin 7 gün içinde tamamlanması", reward: "200 dolarlık BTCUSDT pozisyon airdrop'u" },
    { task: "Kümülatif vadeli işlem hacmi (en üst kademe: en az 1.000.000 USDT)", reward: "7.620 USDT'ye kadar vadeli işlem bonusu" },
    {
      task: "Referans kampanyası: 7 gün içinde en az 100 dolar net para yatırma ve 1.000 dolar vadeli işlem hacmi",
      reward: "50 USDT vadeli işlem bonusu",
    },
    { task: "Referans kampanyası: 7 gün içinde en az 10.000 dolar vadeli işlem hacmi", reward: "90 USDT vadeli işlem bonusu" },
    { task: "Referans kampanyası: 7 gün içinde en az 20.000 dolar vadeli işlem hacmi", reward: "140 USDT vadeli işlem bonusu" },
  ],
  tokenDiscount:
    "Komisyonları MX ile ödersen Spot ve vadeli işlem komisyonlarında %20 indirim alırsın; vadeli işlemlerde MX'in vadeli işlem (Futures) cüzdanında durması gerekir. 500 MX veya daha fazlasını tutanlara verilen eski %50 indirim 9 Şubat 2026'dan beri askıya alınmış durumda.",
  extraFeeMarkets: ["Coin-M vadeli işlemler (BTCUSD, ETHUSD)"],
  sourceLabels: [
    "MEXC: Hesap açma adımları (web)",
    "MEXC: Hesap açma adımları (uygulama)",
    "MEXC: Referans rehberi",
    "MEXC: Davet edeni kendin bağlama rehberi",
    "MEXC: Referans kampanyası ve kuralları",
    "MEXC: Rewards Hub (yeni kullanıcı ödülleri)",
    "MEXC: Hoş geldin ödülleri duyurusu (bonus geçerlilik süresi)",
    "MEXC: Komisyon tablosu",
    "MEXC: İşlem komisyonu indirimi için MX nasıl kullanılır",
    "MEXC: Vadeli işlemlerde 500x kaldıracın başlatılması",
    "MEXC: KYC SSS",
    "MEXC: KYC doğrulamasıyla ilgili sık sorulan sorular",
    "MEXC: Kullanıcı Sözleşmesi (yasaklı yargı bölgeleri)",
    "MEXC Learn: Kısıtlı ülkeler",
    "MEXC: Hakkında",
    "MEXC: Neden MEXC? (pariteler ve kontratlar)",
    "MEXC: Rezerv kanıtı (Proof of Reserves)",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Vadeli işlemler"],
  bonusHeadline: "10.000 USDT'ye kadar yeni kullanıcı ödülü",
  benefits: [
    "Rewards Hub'da 10.000 USDT'ye kadar yeni kullanıcı ödülü – kuponlar, pozisyon airdrop'ları ve vadeli işlem bonusları",
    "Referansla kaydolanlara vadeli işlem bonusu olarak 140 USDT'ye kadar ek ödül gösteriliyor",
    "Spot'ta ve çoğu vadeli kontratta %0 maker komisyonu",
    "Kod, kayıttan sonraki 30 gün içinde hâlâ bağlanabilir",
  ],
  benefitNote:
    "Tüm ödüller görev bazlıdır ve en az Primary KYC gerektirir. Bonuslar çekilemez – yalnızca onlarla elde edilen kâr çekilebilir – ve bir bonus tamamen kullanılmadan vadeli işlem hesabından fon çıkarırsan bonusun tamamını kaybedersin. Vadeli işlem bonusları USDT-M kontratlarda geçerlidir ve 15 günlük geçerlilik süresiyle duyurulmuştur. Referans kampanyası süreli ve yalnızca belirlenen kullanıcılara açık; MEXC'nin kampanya SSS'sine göre bu bonus 10.000 USDT kampanyasıyla birleştirilemez ve ödüller 7 güne kadar süren bir risk incelemesinden geçer. Türev ürünlerin yasak olduğu bölgeler kapsam dışında kalabilir.",
  headquarters: "MEXC (Comoros) Ltd, Komorlar Birliği'nde kayıtlı",
  regulation:
    "MEXC'nin kendi sayfalarında herhangi bir lisans belirtilmiyor; MEXC birinci sınıf (tier-one) bir lisansı ve MiCA yetkisi olmadığını kendisi açıklıyor",
  users: "40 milyonu aşkın kullanıcı (MEXC'ye göre)",
  assets: "1.384 Spot paritesi ve 1.152 vadeli kontrat (MEXC'ye göre)",
  maxLeverage: "500x'e kadar (BTCUSDT ve ETHUSDT vadeli kontratları)",
  feeNote:
    "Gösterilen vadeli işlem oranı, MEXC'nin BTCUSDT ve ETHUSDT için uyguladığı oran; tüm kontratlar genelinde komisyon sayfası maker için %0 ile %0,04, taker için %0 ile %0,1 arasında bir aralık veriyor ve bazı pariteler sıfır komisyonla işlem görüyor. MEXC, maker oranlarının platform kampanyalarına veya bulunduğun bölgeye göre değişebileceğini belirtiyor.",
  products: ["USDT-M ve Coin-M vadeli işlemler", "Spot", "Kopya işlem (copy trading)", "Launchpad", "Earn"],
  tagline: "Sıfır maker komisyonu ve 500x'e kadar kaldıraç",
  quickAnswer:
    "MEXC referans kodu: 4E3xM – büyük/küçük harfe duyarlı. Kaydolurken kodu “Referral Code (Optional)” alanına gir ya da bu sayfadaki butonu kullan; buton kodu alana yazar ve kilitler. Kodu girmeyi unuttuysan MEXC, kayıttan sonraki 30 gün içinde davet edeni kendin bağlamana izin veriyor. Yeni kullanıcılar 10.000 USDT'ye kadar ödülün kilidini açabilir; MEXC'nin davet sayfası ayrıca referansla kaydolanlara 140 USDT'ye kadar ek bonus gösteriyor.",
  about: [
    "MEXC 2018'den beri faaliyette ve 170'ten fazla ülke ve bölgede 40 milyonu aşkın kullanıcıya hizmet verdiğini söylüyor. Fiyat ve ürün çeşitliliğiyle rekabet ediyor: standart kullanıcılar Spot'ta ve çoğu vadeli kontratta maker komisyonu ödemiyor, MEXC'de ise 1.384 Spot paritesi ve 1.152 vadeli kontrat listeleniyor.",
    "Vadeli işlem platformu USDT marjinli ve coin marjinli kontratlar sunuyor; BTCUSDT ve ETHUSDT'de kaldıraç 500x'e kadar çıkıyor. Bu üst sınır her yerde geçerli değil – MEXC Avustralya, Avusturya, Belçika, Kanada, Fransa, Hong Kong, İtalya, Rusya, Birleşik Krallık ve Yemen'i bunun dışında tutuyor – ve kopya işlemde 250x ile 500x desteklenmiyor. Bunların yanında kopya işlem, bir launchpad ve Earn ürünleri de mevcut.",
    "Sözleşme tarafı, Komorlar Birliği'nde kayıtlı MEXC (Comoros) Ltd. MEXC kendi sayfalarında herhangi bir lisans belirtmiyor ve birinci sınıf (tier-one) bir lisansı ya da MiCA yetkisi bulunmadığını kendisi açıklıyor; kendi rehberinde de ESMA'nın uyumsuz kuruluşlar için tuttuğu geçici sicilde (interim register) yer aldığını belirtiyor. Rezerv kanıtı yayımlıyor – 9 Kasım 2026 tarihli anlık görüntüde oranlar USDT için %122,42, USDC için %109,84, BTC için %317,61 ve ETH için %112,41 idi – ve 100 milyon ABD dolarlık bir Guardian Fund ile bir vadeli işlem sigorta fonu bulunduruyor.",
  ],
  highlights: [
    { title: "%0 maker komisyonu", text: "Spot'ta ve çoğu vadeli kontratta sıfır maker komisyonu." },
    { title: "30 gün içinde bağla", text: "Kodu girmeyi mi unuttun? MEXC, kayıttan sonra 30 gün boyunca davet edeni bağlamana izin veriyor." },
    { title: "%100'ün üzerinde rezerv", text: "9 Kasım 2026 tarihli anlık görüntüde USDT %122, BTC %318, ETH %112." },
  ],
  pros: [
    "Sektörün en düşük işlem komisyonları arasında: BTCUSDT vadeli kontratlarında %0 maker, %0,02 taker",
    "Referans kodu kayıttan sonra 30 güne kadar bağlanabiliyor",
    "1.384 Spot paritesi ve 1.152 vadeli kontrat",
    "%100'ün üzerinde rezerv kanıtı ve 100 milyon ABD dolarlık Guardian Fund",
  ],
  cons: [
    "MEXC'nin kendi açıklamasına göre birinci sınıf lisans ve MiCA yetkisi yok",
    "ABD, Birleşik Krallık, Kanada, Fransa, Hollanda, Singapur ve Hong Kong'da kullanılamıyor",
    "Bonuslar çekilemiyor ve fonları erken çıkarırsan kaybediliyor",
    "500x kaldıraç son derece riskli",
  ],
  bestFor: [
    "Maliyete duyarlı, yüksek frekanslı vadeli işlem trader'ları",
    "Yeni listelemelerin peşindeki trader'lar",
    "Offshore platformlarda kendini rahat hisseden deneyimli kullanıcılar",
  ],
  signupTip:
    "Primary KYC'yi kayıttan sonraki 7 gün içinde tamamla – 200 dolarlık BTCUSDT pozisyon airdrop'unun kilidini bu açar – ve bir vadeli işlem bonusu hâlâ kullanımdayken vadeli işlem hesabından fon çıkarma; yoksa bonusu kaybedersin.",
  safety:
    "MEXC rezerv kanıtı yayımlıyor – 9 Kasım 2026 tarihli anlık görüntüde USDT için %122,42, USDC için %109,84, BTC için %317,61 ve ETH için %112,41 – ve 100 milyon ABD dolarlık bir Guardian Fund ile bir vadeli işlem sigorta fonu bulunduruyor. MEXC birinci sınıf (tier-one) bir lisansı ve MiCA yetkisi olmadığını kendisi açıklıyor; bu yüzden hesabında güçlü güvenlik önlemleri kullan ve uzun vadeli birikimlerini orada tutma. Çok yeni tokenlarda, kaldıraçla işlem yapmadan önce likiditeyi ve kontrat özelliklerini kontrol et.",
  restricted:
    "MEXC'nin Kullanıcı Sözleşmesi (son güncelleme 13 Ekim 2026) şu ülke ve bölgelerden gelen kullanıcıları yasaklıyor: Kuzey Kore, Küba, Sudan, İran, Çin anakarası, Singapur, Malezya, ABD, Birleşik Krallık, Hong Kong, Kazakistan, Rusya, Ukrayna'nın Rusya kontrolündeki bölgeleri, Belarus, Kanada, Fransa ve Hollanda; bunlara ek olarak yaptırım uygulanan ve FATF kara listesindeki ülkeler.",
  faqs: [
    {
      topic: "referral",
      q: "4E3xM MEXC referans kodu çalışıyor mu?",
      a: "Evet. 16 Kasım 2026'da bu sayfadaki bağlantı, MEXC'nin davet sayfasını adres satırında inviteCode=4E3xM ile açtı; “Referral Code (Optional)” alanında 4E3xM önceden girilmiş ve kilitliydi.",
    },
    {
      topic: "referral",
      q: "MEXC referans kodu büyük/küçük harfe duyarlı mı?",
      a: "Evet. MEXC'nin kayıt alanında “Enter invitation code (case-sensitive)” ipucu yer alıyor. Kod 4E3xM: rakam olarak 4, büyük E, rakam olarak 3, küçük x ve büyük M.",
    },
    {
      topic: "referral",
      q: "MEXC'de referans kodu sonradan nasıl eklenir?",
      a: "Kayıttan sonraki 30 gün içinde MEXC'nin davet edeni kendin bağlama (self-servis) işlevini kullan. İşlev ana hesaplara açık; ya referans kodunu ya da davet edenin UID numarasını girersin ve davet edenin senden önce kaydolmuş olması gerekir. Bağlantı sonradan değiştirilemez veya kaldırılamaz.",
    },
    {
      topic: "referral",
      q: "MEXC referans kodu komisyon indirimi sağlıyor mu?",
      a: "MEXC, davet edilen kullanıcı için kalıcı bir komisyon indirimi listelemiyor. Kodun avantajı, vadeli işlem bonusu olarak 140 USDT'ye kadar ödül sunan referans kampanyası ve bunun yanında genel yeni kullanıcı ödülleri.",
    },
    {
      topic: "signup",
      q: "MEXC şifre gereksinimleri neler?",
      a: "En az 10 karakter; içinde bir büyük harf, bir küçük harf, bir rakam ve bir sembol bulunmalı.",
    },
    {
      topic: "signup",
      q: "MEXC'ye Google, Apple, Telegram veya MetaMask ile kaydolabilir miyim?",
      a: "Evet. MEXC'nin kayıt sayfası e-posta ve telefonun yanı sıra Google ve Apple seçeneklerini doğrudan, Telegram ve MetaMask seçeneklerini ise “More Options” altında sunuyor.",
    },
    {
      topic: "signup",
      q: "MEXC KYC seviyeleri ve limitleri neler?",
      a: "Primary KYC, günde 80 BTC'ye kadar kripto çekimine ve P2P işlemlere izin verir. Advanced KYC bu limiti günde 200 BTC'ye çıkarır ve günde 20.000 USD'ye kadar fiat işlem yapmanı sağlar. Spot, vadeli işlemler ve kampanyalar her iki seviyede de açık.",
    },
    {
      topic: "signup",
      q: "MEXC KYC'siz kullanılabilir mi?",
      a: "Yalnızca kısıtlamalarla. MEXC, KYC doğrulamasını tamamlamamanın para yatırma, para çekme ve işlem gibi hizmetlere erişimini etkileyebileceğini belirtiyor; yeni kullanıcı ve referans ödülleri için de en az Primary KYC gerekiyor.",
    },
    {
      topic: "bonus",
      q: "MEXC hoş geldin bonusu nedir?",
      a: "MEXC, 10.000 USDT'ye kadar yeni kullanıcı ödülü tanıtıyor. Rewards Hub'dan örnekler: kayıt için 10 USDT kupon, uygulamaya ilk giriş için 10 USDT kupon, Primary KYC'yi 7 gün içinde tamamlamak için 200 dolarlık BTCUSDT pozisyon airdrop'u ve kümülatif işlem hacmi için 7.620 USDT'ye kadar vadeli işlem bonusu – en üst kademe 1.000.000 USDT hacimde.",
    },
    {
      topic: "bonus",
      q: "MEXC referans bonusu ne kadar?",
      a: "MEXC'nin referans kampanyasında davet edilen kullanıcı, en az 100 dolarlık net para yatırma ve 1.000 dolarlık vadeli işlem hacmi için 50 USDT, 10.000 dolarlık vadeli işlem hacminde 90 USDT ve 20.000 dolarda 140 USDT alır – hepsi kayıttan sonraki 7 gün içinde. Ödeme vadeli işlem bonusu, komisyon kuponu ve pozisyon airdrop'u olarak yapılır. Kampanya süreli ve yalnızca belirlenen kullanıcılara açık.",
    },
    {
      topic: "bonus",
      q: "MEXC bonusu çekilebilir mi?",
      a: "Hayır. MEXC'ye göre bonuslar çekilemez, ancak bonusla yapılan işlemlerden elde edilen kâr çekilebilir. Bonus tamamen kullanılmadan vadeli işlem hesabından herhangi bir varlığı transfer edersen bonusun tamamını kaybedersin.",
    },
    {
      topic: "bonus",
      q: "MEXC vadeli işlem bonusu ne kadar süre geçerli?",
      a: "MEXC, vadeli işlem bonusları ve kuponlar için 15 günlük geçerlilik süresi duyurdu. Vadeli işlem bonusu yalnızca USDT-M kontratlarda kullanılabilir.",
    },
    {
      topic: "fees",
      q: "MEXC vadeli işlem komisyonları ne kadar?",
      a: "BTCUSDT ve ETHUSDT'de standart kullanıcılar %0 maker ve %0,02 taker komisyonu öder. Tüm kontratlar genelinde MEXC'nin komisyon sayfası maker için %0 ile %0,04, taker için %0 ile %0,1 arasında bir aralık veriyor; bazı pariteler ise tamamen komisyonsuz.",
    },
    {
      topic: "fees",
      q: "MEXC MX komisyon indirimi ne kadar?",
      a: "Komisyonları MX ile ödediğinde Spot ve vadeli işlem komisyonlarında %20; vadeli işlemler için MX'in vadeli işlem (Futures) cüzdanında bulunması gerekir. En az 500 MX tutanlara verilen önceki %50 indirim 9 Şubat 2026'dan beri askıda.",
    },
    {
      topic: "fees",
      q: "MEXC gerçekten 500x kaldıraç sunuyor mu?",
      a: "Evet, BTCUSDT ve ETHUSDT vadeli kontratlarında. Avustralya, Avusturya, Belçika, Kanada, Fransa, Hong Kong, İtalya, Rusya, Birleşik Krallık ve Yemen'de sunulmuyor; kopya işlem de bunu desteklemiyor. 500x kaldıraçta aleyhine %0,2'lik bir fiyat hareketi pozisyonunu tamamen silebilir.",
    },
    {
      topic: "safety",
      q: "MEXC lisanslı mı?",
      a: "MEXC kendi sayfalarında herhangi bir lisans belirtmiyor ve birinci sınıf (tier-one) bir lisansı ya da MiCA yetkisi olmadığını açıklıyor. Sözleşme tarafı, Komorlar Birliği'nde kayıtlı MEXC (Comoros) Ltd.",
    },
    {
      topic: "safety",
      q: "MEXC ABD'de veya Birleşik Krallık'ta kullanılabilir mi?",
      a: "Hayır. MEXC'nin Kullanıcı Sözleşmesi'nde hem ABD hem de Birleşik Krallık yasaklı yargı bölgeleri arasında; Kanada, Fransa, Hollanda, Singapur ve Hong Kong da öyle.",
    },
    {
      topic: "safety",
      q: "MEXC rezerv kanıtı yayımlıyor mu?",
      a: "Evet. 9 Kasım 2026 tarihli anlık görüntü USDT için %122,42, USDC için %109,84, BTC için %317,61 ve ETH için %112,41 rezerv oranı gösterdi. MEXC ayrıca 100 milyon ABD dolarlık bir Guardian Fund bulunduruyor.",
    },
  ],
};
