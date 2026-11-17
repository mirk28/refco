import type { ExchangeText } from "../../types";

export const okx: ExchangeText = {
  referral: {
    codeName: "referans kodu",
    whereShort: "Kayıt sırasında e-posta adımındaki “Referral code (optional)” alanı",
    apply:
      "Kodu, kaydın e-posta adımındaki “Referral code (optional)” alanına gir – bu alan kapalı gelir, önce genişletmen gerekir – ya da bu sayfadaki kayıt bağlantısını aç; kod bağlantıyla birlikte otomatik gelir.",
    whereToEnter:
      "OKX web sitesinde kod, e-posta adresini girdiğin adımdaki “Referral code (optional)” alanına yazılır. Bu alan kapalı gelir, o yüzden önce genişletmen gerekir. Bir referans bağlantısıyla gelirsen kod otomatik olarak eklenir; OKX, bağlantıdan önceden doldurulmuş bir kodun değiştirilemeyeceğini belirtiyor. Telefonda OKX'in talimatı şöyle: önce davet sayfasında e-posta adresini gir, ardından uygulamayı aynı bağlantı üzerinden yükle ve aynı e-postayla kaydol – uygulamayı ayrıca yükleyip orada kayıt olursan kod aktarılmayabilir.",
    afterSignupShort: "Hayır – yalnızca kayıt sırasında",
    afterSignup:
      "Hayır. OKX, davet kodlarının yalnızca kayıt sırasında geçerli olduğunu ve geriye dönük olarak eklenemeyeceğini belirtiyor; referans programı SSS sayfasına göre de bir kod sonradan genellikle eklenemez veya değiştirilemez. Hesabını silip yeniden kaydolmak hak sahipliğini geri getirmez ve kural ihlali sayılabilir. okx.com/join/… biçimindeki bir bağlantı mevcut bir hesaba bağlanamaz.",
    inviteeReward:
      "Davet edilen kullanıcı olarak OKX'in hoş geldin ödüllerini alırsın; bu ödüller Welcome Rewards ya da New User Bonus adıyla da geçer. Davet edenin kazancından ayrıdır, ülkene, kampanyaya ve kullandığın bağlantıya göre değişir; teklif, kaydolduğun anda sabitlenir. Kontrolümüz sırasında bu kodun davet sayfası OKX Europe için 400 €'ya kadar bir hoş geldin ödülü gösteriyordu; OKX'in global davet sayfası ise kayıt olup görevleri tamamlayanlara 100 USDT'ye kadar ödül vaat ediyordu.",
    guide: [
      "OKX referans kodu yeni hesabını seni davet eden kişiye bağlar. Senin için pratik sonucu, hoş geldin ödüllerine erişmektir: tutarlarını OKX'in ülkeye, kampanyaya ve kullanıcı grubuna göre belirlediği bir dizi para yatırma ve işlem görevi. Hangi teklifi alacağın kayıt anında belirlenir; bu yüzden kodun tam o anda girilmiş olması gerekir.",
      "Hangi OKX'e yönlendirileceğin nerede yaşadığına bağlı. AEA'dan – ve diğer bazı Avrupa ülkelerinden – gelen ziyaretçiler OKX Europe platformuna (okx.com/en-eu) yönlendirilir; bu platformu Malta'da MiCA kapsamında OKX Europe Limited işletir. Burada ödüller kripto para, X-Perps kuponu veya VIP Pass olarak verilir, kripto ödüller 45 güne kadar kilitli kalır (işlemde kullanılabilir ama çekilemez) ve X-Perps hacmi işlem görevlerine sayılmaz.",
      "Global sitede ödüller kripto para ya da 30 gün içinde açılması gereken komisyon iade kartları (rebate card) olarak gelir; bir işlem görevinin tek bir işlemle karşılanması gerekir ve tamamlanmamış görevler kayıttan 180 gün sonra ortadan kalkar.",
    ],
  },
  signup: {
    methods: ["bir e-posta adresi (kayıt sırasında bir telefon numarası da eklenip doğrulanır)"],
    steps: [
      {
        title: "OKX davet sayfasını aç",
        text: "Bu sayfadaki kayıt butonunu kullan. OKX, T7IRGAR3 kodunun davet sayfasını açar ve ülkende geçerli olan hoş geldin ödülünü gösterir.",
      },
      {
        title: "Yaşadığın ülkeyi veya bölgeyi seç",
        text: "İkamet ettiğin yeri seç, Hizmet Şartları'nı onayla ve “Next” butonuna tıkla.",
      },
      {
        title: "E-posta adresini gir ve referans kodunu kontrol et",
        text: "“Referral code (optional)” alanını aç – içinde T7IRGAR3 olmalı – ve “Sign up” butonuna tıkla.",
      },
      {
        title: "E-postadaki 6 haneli kodu onayla",
        text: "OKX, e-posta adresine 6 haneli bir kod gönderir. Kod 10 dakika boyunca geçerlidir.",
      },
      {
        title: "Telefon numaranı ekle",
        text: "Telefon numaranı ve bu numaraya gönderilen 6 haneli kodu gir. OKX her hesapta hem e-posta adresi hem de telefon numarası ister.",
      },
      {
        title: "Şifre belirle",
        text: "Hesabın için güçlü ve başka hiçbir yerde kullanmadığın bir şifre seç.",
      },
      {
        title: "Kimliğini doğrula",
        text: "Kimlik doğrulamasını resmi bir kimlik belgesi ve bir selfie ya da yüz taramasıyla tamamla. İşlem yapma, para yatırma ve para çekme bundan sonra açılır.",
      },
    ],
    kycShort: "İşlem, para yatırma ve para çekme öncesinde zorunlu",
    kyc: "Evet. OKX, bireysel hesap kullanmak için kimlik doğrulamasını şart koşuyor – işlem yapma, para yatırma ve para çekme ancak bundan sonra mümkün. İkamet ülkeni, uyruğunu, adını, doğum tarihini ve kimlik bilgilerini girer, resmi bir belge yükler ve bir selfie ya da yüz taramasından geçersin; OKX ayrıca son 6 ay içinde düzenlenmiş bir adres belgesi de isteyebilir. OKX'e göre inceleme 24 saat içinde tamamlanıyor ve bir kimlik belgesi yalnızca tek bir hesap için kullanılabiliyor.",
    documents:
      "Geçerli, resmi makamlarca verilmiş bir kimlik belgesi: pasaport, ulusal kimlik kartı, ehliyet veya oturma izni – doğrulama sırasında ülken için gösterilen liste esas alınır – ayrıca bir selfie ya da yüz taraması ve istenirse 6 aydan eski olmayan bir adres belgesi.",
    minAge: "18 yaş",
  },
  welcomeTasks: [],
  tokenDiscount: "",
  extraFeeMarkets: ["Opsiyon"],
  sourceLabels: [
    "OKX: Hesap nasıl açılır",
    "OKX: Referans programı SSS",
    "OKX: Affiliate SSS (davet kodları ve komisyon iadeleri)",
    "OKX: New User Bonus şartları ve koşulları (AEA)",
    "OKX: New User Bonus SSS (AEA)",
    "OKX: New User Bonus şartları ve koşulları (global)",
    "OKX: Komisyon tablosu",
    "OKX: İşlem ücreti kuralları SSS",
    "OKX: AEA'da X-Perps kaldıracı",
    "OKX herkese açık API: sürekli vadeli swap enstrümanları (maksimum kaldıraç)",
    "OKX: Bireysel hesap nasıl doğrulanır",
    "OKX: Kimlik doğrulama – uygunluk, inceleme süresi ve belgeler",
    "OKX: Risk ve uyum bildirimi (kısıtlı bölgeler)",
    "OKX: Hizmet Şartları",
    "OKX Europe: Hakkında",
    "OKX Middle East: Hakkında (VARA lisansı)",
    "OKX: Rezerv kanıtı (Proof of Reserves)",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Vadeli işlemler ve sürekli vadeli kontratlar"],
  bonusHeadline: "400 €'ya veya 100 USDT'ye kadar hoş geldin ödülü",
  benefits: [
    "Yeni kullanıcılar için OKX hoş geldin ödülleri: OKX Europe platformunda 400 €'ya, global sitede 100 USDT'ye kadar; para yatırma ve işlem görevleriyle açılır",
    "Düşük standart komisyon: Spot'ta %0,08 maker / %0,10 taker, vadeli ve sürekli vadeli kontratlarda %0,02 / %0,05",
    "Bağlantıyla gelen kod yanlış yazılamaz – OKX önceden doldurulan kodu kilitler",
    "Kendi bakiyenle karşılaştırabileceğin aylık rezerv kanıtı",
  ],
  benefitNote:
    "Hoş geldin ödülleri için belirlenmiş bir bağlantı üzerinden kaydolman ve kimlik doğrulamasını tamamlaman, ardından para yatırma ve işlem görevlerini yerine getirmen gerekir. OKX Europe platformunda iç transferler para yatırma sayılmaz, komisyonsuz pariteler ve X-Perps hacmi işlem sayılmaz, kripto ödüller 45 güne kadar kilitli kalır ve hesaba geçmeleri 48 saate kadar sürebilir. Global sitede ödüllerin 30 gün içinde açılması gerekir ve görevler kayıttan 180 gün sonra sona erer. Tutarlar ve görevler ülkeye ve kampanyaya göre değişir.",
  headquarters: "Global site için Aux Cayes FinTech Co. Ltd. (Seyşeller); OKX Europe Limited (Malta); OKX Middle East Fintech FZE (Dubai)",
  regulation: "OKX Europe Limited aracılığıyla MiCA yetkisi (Malta, MFSA); Dubai'de VARA lisansı",
  users: "120M+ kullanıcı (OKX Europe verilerine göre)",
  assets: "270+ coin (OKX Europe verilerine göre)",
  maxLeverage: "100x'e kadar (global site; OKX Europe platformunda 10x'e kadar)",
  feeNote:
    "Bunlar Regular kullanıcı oranları; bir üst seviye 100.000 varlıkta ya da 30 günlük 1.000.000 Spot hacminde (vadelide 5.000.000) başlar ve OKX Europe platformunda EUR, global sitede USD ile hesaplanır. Vade tarihli vadeli kontratlarda %0,01 uzlaşma (settlement) ücreti alınır.",
  products: ["Spot", "Sürekli vadeli kontratlar", "Vade tarihli vadeli kontratlar", "Opsiyon", "Trading botları"],
  tagline: "Düşük komisyonlu Spot ve türev işlemler, aylık rezerv kanıtı",
  quickAnswer:
    "OKX referans kodu T7IRGAR3. Web sitesinde kod, kaydın e-posta adımındaki “Referral code (optional)” alanına girilir; bu sayfadaki buton kodu senin yerine otomatik ekler. Kod yalnızca kayıt sırasında işe yarar – OKX davet kodlarını sonradan eklemiyor. Yeni kullanıcılar OKX'in hoş geldin ödüllerini alır: kimlik doğrulaması ile para yatırma ve işlem görevlerinin ardından OKX Europe platformunda 400 €'ya, global sitede 100 USDT'ye kadar.",
  about: [
    "OKX 2017'de kuruldu ve hem Spot hem de türev işlemlerde en büyük kripto para borsalarından biri. OKX Europe sayfaları 120 milyondan fazla kullanıcıdan söz ediyor ve 270'ten fazla coin listeliyor. Regular kullanıcılar Spot'ta %0,08 maker ve %0,10 taker, vadeli işlemlerde ve sürekli vadeli kontratlarda %0,02 / %0,05, opsiyonlarda ise %0,03 komisyon öder.",
    "Ürün yelpazesi Spot, sürekli vadeli kontratlar, vade tarihli vadeli kontratlar, opsiyon ve trading botlarını kapsıyor; ancak bunlardan hangisini kullanabileceğin nerede yaşadığına bağlı. Global sitede en yüksek kaldıraç 100x ve BTC-USDT, ETH-USDT, SOL-USDT ve XRP-USDT gibi sürekli vadeli kontratlarda sunuluyor. OKX Europe platformunda sürekli vadeli ürünün adı X-Perps; kaldıraç 10x ile sınırlı, büyük pozisyonlarda daha da düşük.",
    "OKX her ay rezerv kanıtı yayımlıyor. 49. rapor 21 varlıkta toplam 33,87 milyar ABD dolarını kapsıyordu; 1 Kasım 2026 tarihli doğrulama BTC için %108, ETH için %101, USDT için %106 ve USDC için %100 rezerv oranı gösterdi. Sistem zk-STARK ve Merkle ağacı üzerine kurulu; böylece giriş yapmış kullanıcılar kendi bakiyelerinin hesaba katıldığını kontrol edebiliyor. OKX Europe Limited, Malta Financial Services Authority tarafından MiCA kapsamında kripto varlık hizmet sağlayıcısı olarak yetkilendirilmiş; OKX Middle East Fintech FZE ise Dubai'nin düzenleyici kurumu VARA'dan lisans almış durumda.",
  ],
  highlights: [
    { title: "Düşük standart komisyon", text: "Spot'ta %0,08 / %0,10, vadeli ve sürekli vadeli kontratlarda %0,02 / %0,05." },
    { title: "Aylık rezerv kanıtı", text: "Şimdiye kadar 49 rapor; zk-STARK ve Merkle ağacıyla doğrulanabiliyor." },
    { title: "AEA'da MiCA yetkili", text: "OKX Europe Limited, Malta düzenleyicisi MFSA'dan yetki almış." },
  ],
  pros: [
    "Spot, vadeli işlem ve opsiyonda düşük standart komisyon",
    "Oranları %100'ün üzerinde olan, kendin doğrulayabileceğin aylık rezerv kanıtı",
    "AEA kullanıcıları için MiCA yetkili şirket ve Dubai'de VARA lisansı",
    "Sürekli vadeli kontratların yanında opsiyon ve vade tarihli vadeli kontratlar",
  ],
  cons: [
    "Referans kodu kayıttan sonra eklenemiyor",
    "Ürünler büyük ölçüde ülkene bağlı – OKX Europe sürekli vadeli kontratları 10x ile sınırlıyor",
    "OKX Europe platformunda hoş geldin ödülleri 45 güne kadar kilitli kalıyor",
    "Kanada, Hindistan, Japonya, Hong Kong ve ABD'nin bazı bölgelerinde kullanılamıyor",
  ],
  bestFor: ["Komisyona dikkat eden Spot ve vadeli işlem trader'ları", "Opsiyon trader'ları", "MiCA yetkili bir platform isteyen AEA kullanıcıları"],
  signupTip:
    "Telefonda önce davet sayfasında e-posta adresini gir ve uygulamayı o bağlantı üzerinden yükle – uygulamayı ayrıca indirip orada kaydolursan referans kodu aktarılmayabilir.",
  safety:
    "OKX her ay rezerv kanıtı yayımlıyor – 1 Kasım 2026 tarihli doğrulamada oranlar BTC için %108, ETH için %101, USDT için %106 ve USDC için %100'dü – ve giriş yapmış kullanıcıların “View my report” üzerinden kendi bakiyelerini kontrol etmesine olanak tanıyor; bunun için açık kaynaklı araçlar ve yayımlanmış cüzdan adresleri de sunuluyor. Her hesaba hem bir e-posta adresi hem de bir telefon numarası bağlanması zorunlu. Her borsada olduğu gibi platformda yalnızca işlem sermayeni tut.",
  restricted:
    "OKX'in kısıtlı bölgeler listesinde şunlar yer alıyor: Afganistan, Kanada, Küba, Hong Kong, İran, Hindistan, Japonya, Malezya, Nepal, Kuzey Kore, Suriye, Özbekistan, Kırım, Donetsk ve Luhansk bölgeleri ile ABD'ye bağlı tüm topraklar dahil olmak üzere ABD'deki bazı yargı bölgeleri. Avustralya, Brezilya, Güney Kore ve Birleşik Krallık'ta kısmi kısıtlamalar (türev ürün yok), Rusya'da ise itibari para (fiat) ödemelerine yönelik kısıtlamalar geçerli. Liste en son 14 Kasım 2026'da güncellendi.",
  faqs: [
    {
      topic: "referral",
      q: "T7IRGAR3 OKX referans kodu çalışıyor mu?",
      a: "Evet. 16 Kasım 2026'da okx.com/join/T7IRGAR3 bağlantısı OKX'in bu koda ait kendi davet sayfasını açtı; sayfada bir hoş geldin ödülü ve kodu taşıyan bir kayıt bağlantısı vardı.",
    },
    {
      topic: "referral",
      q: "OKX'te referans kodu alanı neden görünmüyor?",
      a: "“Referral code (optional)” alanı kayıt formunda kapalı durur ve önce genişletilmesi gerekir. OKX ayrıca, alan hiç görünmüyorsa bunun yerine referans bağlantısı üzerinden kaydolmanı öneriyor.",
    },
    {
      topic: "referral",
      q: "OKX referans kodu uygulamada nasıl girilir?",
      a: "Davet bağlantısını telefonunda aç ve e-posta adresini orada gir; ardından OKX uygulamasını bu bağlantı üzerinden yükle ve aynı e-postayla kaydol. OKX, uygulamayı ayrıca yükleyip içinden kaydolursan kodun aktarılmayabileceği konusunda uyarıyor.",
    },
    {
      topic: "referral",
      q: "OKX hesabımı silip yeniden kaydolursam referans kodu kullanabilir miyim?",
      a: "Hayır. OKX'e göre bir hesabı silip yeniden kaydolmak hak sahipliğini geri getirmez ve kural ihlali olarak değerlendirilebilir.",
    },
    {
      topic: "signup",
      q: "OKX kayıt için telefon numarası gerekli mi?",
      a: "Evet. OKX kaydında önce e-posta adresi, ardından telefon numarası istenir; ikisi de 6 haneli bir kodla doğrulanır. Her ikisinin de hesaba bağlanması zorunludur ve her e-posta adresi ile telefon numarası yalnızca tek bir hesapta kullanılabilir.",
    },
    {
      topic: "signup",
      q: "OKX e-posta doğrulama kodu ne kadar süre geçerli?",
      a: "OKX'in kayıt sırasında e-posta adresine gönderdiği 6 haneli kod 10 dakika boyunca geçerlidir.",
    },
    {
      topic: "signup",
      q: "OKX kimlik doğrulama ne kadar sürer?",
      a: "OKX'e göre inceleme, belgeni ve selfie ya da yüz taramasını gönderdikten sonra 24 saat içinde tamamlanıyor.",
    },
    {
      topic: "signup",
      q: "OKX KYC olmadan kullanılabilir mi?",
      a: "Hayır. Bireysel hesap kullanmak için kimlik doğrulaması zorunlu; işlem yapma, para yatırma ve para çekme ancak bundan sonra açılıyor.",
    },
    {
      topic: "bonus",
      q: "OKX hoş geldin bonusu nedir?",
      a: "Referans bağlantısıyla kaydolan yeni kullanıcılar OKX'in hoş geldin ödüllerini (New User Bonus) alır. Kontrolümüz sırasında davet sayfası OKX Europe için 400 €'ya kadar, global davet sayfası ise 100 USDT'ye kadar ödül gösteriyordu. Ödüller kimlik doğrulaması, para yatırma görevleri ve işlem görevleri tamamlanınca açılır; ülkeye ve kampanyaya göre farklılık gösterir.",
    },
    {
      topic: "bonus",
      q: "OKX hoş geldin ödülü hemen çekilebilir mi?",
      a: "Hayır. OKX Europe platformunda kripto ödüller 45 güne kadar kilitli kalır – bunlarla işlem yapabilirsin ama çekemezsin. Global sitede ödüller hesaba geldiği anda kilitlenir ve kilit süresi boyunca ne işlemde kullanılabilir ne de çekilebilir.",
    },
    {
      topic: "bonus",
      q: "OKX hoş geldin görevlerinde hangi para yatırma ve işlemler sayılır?",
      a: "OKX Europe platformunda kripto para yatırma ya da SEPA, iDEAL veya Bancontact ile itibari para yatırma sayılır; iç transferler sayılmaz. Buy, Sell, Convert veya Spot emir defteri üzerinden yapılan işlemler sayılır; komisyonsuz pariteler ve X-Perps hacmi sayılmaz. Global sitede bir işlem görevinin tek bir işlemle karşılanması gerekir.",
    },
    {
      topic: "fees",
      q: "OKX opsiyon komisyonu ne kadar?",
      a: "Regular kullanıcılar opsiyonlarda %0,03 maker ve %0,03 taker komisyon öder.",
    },
    {
      topic: "fees",
      q: "OKX'te maksimum kaldıraç kaç?",
      a: "Global sitede BTC-USDT, ETH-USDT, SOL-USDT ve XRP-USDT gibi sürekli vadeli kontratlarda 100x, büyük pozisyonlarda daha düşük. OKX Europe platformunda X-Perps kaldıracı 10x ile sınırlı. Yüksek kaldıraç likidasyon riskini keskin biçimde artırır.",
    },
    {
      topic: "fees",
      q: "OKX'te komisyon nasıl düşürülür?",
      a: "OKX'te komisyon seviyesi varlık bakiyene ya da 30 günlük işlem hacmine göre belirlenir. Regular seviyesi 100.000 varlıkta ya da Spot'ta 1.000.000, vadelide 5.000.000 tutarındaki 30 günlük hacimde biter; bunun üzerinde VIP oranları geçerlidir.",
    },
    {
      topic: "safety",
      q: "OKX Avrupa'da lisanslı mı?",
      a: "Evet. OKX Europe Limited, Malta Financial Services Authority tarafından MiCA kapsamında kripto varlık hizmet sağlayıcısı olarak yetkilendirilmiştir ve AEA müşterilerine okx.com/en-eu üzerinden hizmet verir.",
    },
    {
      topic: "safety",
      q: "OKX ABD'de kullanılabilir mi?",
      a: "Yalnızca sınırlı ölçüde: OKX, ABD'deki bazı yargı bölgelerini ve ABD'ye bağlı tüm toprakları kısıtlı bölgeler arasında sayıyor. Kanada, Hindistan, Japonya ve Hong Kong ise tamamen kısıtlı.",
    },
    {
      topic: "safety",
      q: "OKX rezerv kanıtı yayımlıyor mu?",
      a: "Evet, her ay. 49. rapor 21 varlıkta 33,87 milyar ABD dolarını kapsıyordu; 1 Kasım 2026 tarihli doğrulama BTC için %108, ETH için %101, USDT için %106 ve USDC için %100 oran gösterdi.",
    },
  ],
};
