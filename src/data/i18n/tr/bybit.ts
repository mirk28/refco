import type { ExchangeText } from "../../types";

export const bybit: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Kayıt formundaki “Referral Code (Optional)” alanı",
    apply:
      "Kodu kayıt formundaki “Referral Code (Optional)” alanına yaz ya da bu sayfadaki kayıt bağlantısını aç; bağlantı alanı senin yerine doldurur.",
    whereToEnter:
      "Bybit'in kayıt formunda “Referral Code (Optional)” adlı bir alan bulunur. Web sitesinde bu alana e-posta adresini ya da telefon numaranı girdikten sonra ulaşırsın, uygulamada ise bir adım sonra – her iki durumda da “Sign Up Now” düğmesine dokunmadan önce. Bu sayfadaki bağlantı, Bybit'in davet sayfasını VN3KGLE kodu bu alana girilmiş hâlde açar; alan düzenlenebilir kaldığı için formu göndermeden önce kodun hâlâ orada olduğunu kontrol et.",
    afterSignupShort: "Hayır – yalnızca kayıt sırasında",
    afterSignup:
      "Hayır. Bybit'in kayıt rehberine göre kayıt olduktan sonra referans ya da affiliate kodunu ekleyemez, değiştiremez veya silemezsin. Bybit'in belgelediği tek istisna affiliate kodlarıyla ilgili: Bu kodlar, henüz kodu olmayan bir ana hesaba 14 gün içinde eklenebilir. Bybit, VN3KGLE gibi referans programı kodlarının bu istisnaya dahil olmadığını açıkça belirtir.",
    inviteeReward:
      "Bybit'in referans programında davet edilen kullanıcı 250 USDT'ye kadar kazanabilir: Kayıttan sonraki 14 gün içinde en az 50 dolarlık ilk işlem için 50 USDT, bu ilk işlemin ardından gelen 30 gün içinde en az 500 dolarlık toplam işlem hacmi için 100 USDT ve aynı 30 gün içinde en az 10.000 dolarlık hacim için 100 USDT daha. Bybit'in davet sayfası bunlara ek olarak kayıt olan ve kimlik doğrulamasını tamamlayan davetliler için ödüller duyuruyor; yeni kullanıcılar ayrıca Rewards Hub'da 100 USDT değerinde Welcome Gifts (hoş geldin hediyeleri) alıyor.",
    guide: [
      "Bybit'in referans programı iki tarafı da aynı tutarlarla ödüllendirir; Bybit'in programı “up to 500 USDT combined” sözleriyle, yani iki tarafın toplam ödülü üzerinden tanıtmasının nedeni de bu. Davet edilen kullanıcı olarak kendi payını, kendi işlemlerine bağlı üç aşamada açarsın: Kayıttan sonraki 14 gün içinde en az 50 dolarlık ilk işlem, ardından gelen 30 gün içinde ise 500 dolar ve 10.000 dolar toplam hacim. Spot, türev ve opsiyon hacmi sayılır; komisyonsuz paritelerdeki işlemler sayılmaz.",
      "Her ödül önce 3 günlük bir risk incelemesinden geçer, ardından 10 gün içinde talep edilmesi gerekir; aksi hâlde süresi dolar. Bybit programa aylık 500.000 USDT'lik bir havuzla üst sınır koyar ve bu havuz ilk gelen alır esasıyla dağıtılır. Bu koşullar, global sitede 10 Ekim 2026 ve sonrasında açılan hesaplar için geçerlidir.",
      "Kodun işe yarayıp yaramayacağını nerede yaşadığın belirler. Bybit'in referans koşullarına göre Almanya, Birleşik Krallık, Fransa, Belçika ve Hong Kong'da referans programı yoktur; program, AEA (Avrupa Ekonomik Alanı) içinden davet edilen AEA sakinlerine de açık değildir. AEA sakinleri bunun yerine Bybit EU platformunu (bybit.eu) kullanır: Viyana'daki Bybit EU GmbH tarafından işletilen, kendine ait ve daha küçük bir referans teklifi olan ayrı bir platform.",
    ],
  },
  signup: {
    methods: ["e-posta adresi", "telefon numarası", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Bybit kayıt sayfasını aç",
        text: "Bu sayfadaki kayıt düğmesini kullan. Düğme, Bybit'in davet sayfasını VN3KGLE referans kodu girilmiş hâlde açar.",
      },
      {
        title: "Yaşadığın ülkeyi seç",
        text: "Ürünler ve ödüller yaşadığın yere göre değiştiği için Bybit bunu ilk adımda sorar.",
      },
      {
        title: "E-posta adresini veya telefon numaranı gir",
        text: "Ya da Google, Apple veya Telegram ile devam et.",
      },
      {
        title: "Referans kodunu kontrol et",
        text: "“Referral Code (Optional)” alanında VN3KGLE yazmalı. Bu tek şansın – Bybit kodu sonradan eklemene ya da değiştirmene izin vermez.",
      },
      {
        title: "Doğrulama kodunu gir ve şifre belirle",
        text: "Bybit'in gönderdiği kodu onayla, bir şifre seç ve “Sign Up Now” düğmesine dokun. Uygulamada (4.47.0 veya üzeri) bir geçiş anahtarı (passkey) da ayarlayabilirsin.",
      },
      {
        title: "Kimlik doğrulamayı tamamla",
        text: "Bybit, para yatırabilmen ve işlem yapabilmen için Standart doğrulama seviyesini şart koşar.",
      },
    ],
    kycShort: "Tüm ürünler için zorunlu (Standart seviye)",
    kyc: "Evet. Bybit tüm ürünler için en az Standart kimlik doğrulamayı şart koşar. Doğrulanmamış bir hesap para yatıramaz ve işlem yapamaz, yalnızca para çekebilir – günde 20.000 USDT'ye, ayda 100.000 USDT'ye kadar. Standart doğrulama (kimlik belgesi ve kimlik değerlendirmesi) günlük para çekme limitini 1 milyon USDT'ye, adres belgesi de isteyen Advanced (ileri) doğrulama ise 2 milyon USDT'ye çıkarır.",
    documents:
      "Bybit pasaport, kimlik kartı, oturma izni veya sürücü belgesi kabul eder. Yalnızca fiziksel belgeler geçerlidir; Advanced seviye için ayrıca adres belgesi gerekir.",
    minAge: "18 yaş",
  },
  welcomeTasks: [
    { task: "Referans: kayıttan sonraki 14 gün içinde en az 50 dolarlık ilk işlem", reward: "50 USDT" },
    { task: "Referans: ilk işlemden sonraki 30 gün içinde en az 500 dolarlık toplam işlem hacmi", reward: "100 USDT" },
    { task: "Referans: aynı 30 gün içinde en az 10.000 dolarlık toplam işlem hacmi", reward: "100 USDT" },
    { task: "Welcome Gifts: kimlik doğrulamayı tamamla", reward: "20 USDT Fee Saver (türev ürünler)" },
    { task: "Welcome Gifts: en az 10 dolar yatır", reward: "30 USDT Position Airdrop (türev ürünler)" },
    { task: "Welcome Gifts: en az 10 dolarlık işlem yap", reward: "50 USDT Fee Saver (türev ürünler)" },
  ],
  tokenDiscount:
    "Komisyonları MNT ile ödersen Spot komisyonu %25 (VIP 0 için %0,075), vadeli işlem komisyonu %10 (%0,018 maker / %0,0495 taker) düşer. İndirim ters (inverse) kontratlar, trading botları, copy trading takipçileri ve API işlemleri için geçerli değildir.",
  extraFeeMarkets: ["Opsiyon"],
  sourceLabels: [
    "Bybit: Hesap nasıl açılır",
    "Bybit: Referans programı – genel SSS",
    "Bybit: Referans programı sayfası ve koşulları",
    "Bybit: Kayıtlı affiliate kodu nasıl eklenir ve kontrol edilir",
    "Bybit: Rewards Hub ödül merkezi (Welcome Gifts)",
    "Bybit: Rewards Hub hakkında SSS",
    "Bybit: İşlem komisyonu yapısı",
    "Bybit: İşlem komisyonlarını MNT ile ödeme",
    "Bybit: Marjin parametreleri (kaldıraç kademeleri)",
    "Bybit: Bireysel KYC SSS",
    "Bybit: KYC seviyelerinin avantajları",
    "Bybit: Hizmet kısıtlaması olan ülkeler",
    "Bybit: Hakkımızda",
    "Bybit: Rezerv kanıtı",
    "Bybit: Güvenlik olayının zaman çizelgesi (Şubat 2025)",
    "Bybit: Bybit Europe ve MiCAR",
    "Bybit EU: Referans programı",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Türev ürünler", "Opsiyon"],
  bonusHeadline: "250 USDT'ye kadar referans ödülü",
  benefits: [
    "Davet edilen kullanıcıya 250 USDT'ye kadar: 14 gün içinde 50 dolar ve üzeri ilk işlemden sonra 50 USDT, 500 dolar ve 10.000 dolar hacimde ise 100'er USDT",
    "Rewards Hub'da doğrulama, 10 dolar yatırma ve 10 dolarlık işlem için 100 USDT Welcome Gifts",
    "Tüm hesap için tek referans kodu – Spot, türev ve opsiyon hacminin hepsi sayılır",
    "Komisyonları MNT ile ödediğinde Spot'ta %25, vadeli işlemlerde %10 indirim",
  ],
  benefitNote:
    "Referans ödülleri, Bybit'in global sitesinde 10 Ekim 2026 ve sonrasında açılan hesaplar için geçerlidir; 3 günlük risk incelemesinden geçer, 10 gün içinde talep edilmeleri gerekir ve aylık 500.000 USDT'lik bir havuzdan ödenir (ilk gelen alır). Bybit'in Almanya, Birleşik Krallık, Fransa, Belçika ve Hong Kong'da referans programı yoktur; AEA içinden davet edilen AEA sakinleri de programa katılamaz. Welcome Gifts için Lv. 1 kimlik doğrulama gerekir; ödüller kullanıcıya ve bölgeye göre değişir, süresi dolar ve çekilemez.",
  headquarters: "Dubai, BAE",
  regulation: "Malta hariç AEA için Bybit EU GmbH, Viyana üzerinden MiCAR lisansı (Avusturya FMA denetiminde)",
  users: "90 milyonu aşkın kullanıcı (Bybit'e göre)",
  assets: "390 coin, 509 Spot paritesi (Bybit API'si)",
  maxLeverage: "150x'e kadar (BTCUSDT perpetual)",
  feeNote:
    "Oranlar VIP seviyesi yükseldikçe düşer – Supreme VIP türev ürünlerde %0 maker öder – ve bölgeye göre farklılık gösterebilir; esas alınması gereken, hesabındaki “My Fee Rate” sayfasıdır.",
  products: [
    "USDT ve USDC sürekli vadeli kontratlar (perpetual)",
    "Ters (inverse) kontratlar",
    "Opsiyon",
    "Spot",
    "Kopya işlem (copy trading)",
    "Trading botları",
    "Birleşik işlem hesabı (Unified Trading Account)",
  ],
  tagline: "Türev odaklı, hızlı işlem motoru",
  quickAnswer:
    "Bybit referans kodu: VN3KGLE. Kayıt olurken kodu “Referral Code (Optional)” alanına gir – bu sayfadaki düğme alanı senin yerine doldurur. Kodun kayıt anında girilmiş olması şart: Bybit referans kodunun sonradan eklenmesine veya değiştirilmesine izin vermez. Davet edilen kullanıcılar üç işlem aşamasında 250 USDT'ye kadar kazanabilir; ilk aşama, 14 gün içinde yapılan 50 dolarlık ilk işlem için verilen 50 USDT.",
  about: [
    "Bybit 2018'de bir türev ürün borsası olarak kuruldu ve 2023'te genel merkezini Dubai'ye taşıdı. Bugün 181'den fazla ülkede 90 milyonu aşkın kullanıcısı olduğunu açıklıyor ve kendini işlem hacmine göre dünyanın en büyük ikinci borsası olarak tanımlıyor. Platform hâlâ aktif trader'lar için tasarlanmış hissi veriyor: hızlı emir girişi, birleşik işlem hesabı ve özenle hazırlanmış bir mobil uygulama.",
    "Bybit, USDT ve USDC sürekli vadeli kontratların yanında ters (inverse) kontratlar, opsiyon, Spot, kopya işlem ve trading botları sunuyor. Standart kullanıcılar perpetual ve vadeli kontratlarda %0,02 maker ve %0,055 taker, Spot'ta %0,1 öder. Kaldıraç, BTCUSDT perpetual kontratında en düşük risk kademesinde 150x'e kadar çıkar ve pozisyon büyüdükçe düşer. Avrupalı müşterilere, MiCAR kapsamında Avusturya FMA denetimindeki ve Malta hariç AEA'yı kapsayan Viyana'daki Bybit EU GmbH hizmet verir.",
    "21 Şubat 2025'te saldırganlar, Bybit'in Ethereum soğuk cüzdanlarından birinden yaklaşık 1,46 milyar ABD doları çaldı – kripto tarihinin en büyük hack saldırısı. Bybit para çekme işlemlerini açık tuttu, eksik ETH miktarını köprü kredileri, büyük tutarlı para yatırma işlemleri ve OTC alımlarıyla yerine koydu; Hacken'in 24 Şubat'taki rezerv kanıtı denetimi, açığın 72 saat içinde kapandığını gösterdi. Bybit'e göre müşteri varlıkları süreç boyunca 1:1 karşılıklı kaldı.",
  ],
  highlights: [
    { title: "Türev ürün DNA'sı", text: "İlk günden vadeli işlem yapanlar için, hızlı bir eşleştirme motoruyla kuruldu." },
    { title: "250 USDT'ye kadar", text: "Kendi işlem hacmine bağlı, üç aşamalı referans ödülleri." },
    { title: "Açık 72 saatte kapandı", text: "2025 saldırısından sonra Bybit para çekmeyi açık tuttu ve rezervleri tamamladı." },
  ],
  pros: [
    "Hızlı ve istikrarlı işlem motoru, üst düzey mobil uygulama",
    "Sürekli vadeli, ters (inverse) ve opsiyon kontratlarında geniş seçenek",
    "Davet edilen kullanıcı için 250 USDT'ye kadar net referans ödülleri",
    "Merkle ağacıyla kendi bakiyeni kontrol edebildiğin rezerv kanıtı",
  ],
  cons: [
    "Şubat 2025'te büyük güvenlik olayı (bir Ethereum soğuk cüzdanından 1,46 milyar ABD doları çalındı)",
    "Referans kodu kayıttan sonra eklenemez veya değiştirilemez",
    "AEA sakinleri ile Almanya, Birleşik Krallık, Fransa, Belçika ve Hong Kong için referans programı yok",
    "ABD, Kanada, Singapur, Hong Kong ve Çin anakarasında kullanılamıyor",
  ],
  bestFor: ["Sürekli vadeli kontratlarda aktif işlem yapanlar", "Mobil öncelikli trader'lar", "Türev ürünlerde kopya işlem yapmak isteyenler"],
  signupTip:
    "“Sign Up Now” düğmesine dokunmadan önce “Referral Code (Optional)” alanını kontrol et – sonradan düzeltilemez. Ardından ilk 50 USDT'yi açmak için 14 gün içinde en az 50 dolarlık ilk işlemini yap.",
  safety:
    "Bybit müşteri varlıklarını çoklu imzalı (multi-signature) soğuk cüzdanlarda saklar ve kendi açıklamasına göre 1:1 karşılığı gösteren bir rezerv kanıtı yayımlar; kontrolümüz sırasındaki en güncel anlık görüntü 27 Ekim 2026 tarihliydi ve kendi bakiyeni bir Merkle ağacı kontrolü ile açık kaynaklı bir araçla doğrulayabilirsin. Hesabın için Bybit, Google Authenticator ve oltalama karşıtı (anti-phishing) kod sunar. Şubat 2025'teki hack saldırısı, büyük borsaların bile ihlal edilebileceğini gösteriyor – platformda yalnızca işlem sermayeni tut.",
  restricted:
    "Bybit'in hizmet kısıtlaması listesinde şunlar yer alıyor: ABD, Çin anakarası, Hong Kong, Singapur, Kanada, Kuzey Kore, Küba, İran, Özbekistan, Sudan, Suriye ile Kırım, Sivastopol ve Donetsk, Luhansk, Herson ve Zaporijya'nın hükümet kontrolü dışındaki bölgeleri. Bybit Birleşik Krallık'ta yeni kayıt kabul etmiyor; 21 Ekim 2026'dan beri Birleşik Krallık hesapları yalnızca para çekebiliyor.",
  faqs: [
    {
      topic: "referral",
      q: "Bybit referans kodu VN3KGLE geçerli mi?",
      a: "Evet. 16 Kasım 2026'da bu sayfadaki bağlantı, Bybit'in davet sayfasını “Referral Code (Optional)” alanına VN3KGLE önceden girilmiş hâlde açtı.",
    },
    {
      topic: "referral",
      q: "Bybit referans kodu ile affiliate kodu aynı mı?",
      a: "Hayır. Bybit ikisini farklı ele alır: Affiliate kodu, henüz kodu olmayan bir ana hesaba kayıttan sonraki 14 gün içinde eklenebilir; VN3KGLE gibi referans programı kodları ise kayıttan sonra hiçbir şekilde eklenemez.",
    },
    {
      topic: "referral",
      q: "Bybit referans kodu AB'de geçerli mi?",
      a: "Hayır. Bybit'in referans koşullarına göre program, AEA içinden davet edilen AEA sakinlerine açık değildir; Almanya, Fransa ve Belçika'da ise hiç referans programı yoktur. AEA sakinleri, kendi referans teklifi olan Bybit EU platformunu (bybit.eu) kullanır.",
    },
    {
      topic: "referral",
      q: "Bybit referans ödülleri için hangi işlemler sayılır?",
      a: "Spot, türev ve opsiyon işlem hacmi sayılır; Bybit bunlara Alpha, Convert ve birkaç yeni ürünü de ekliyor. Komisyonsuz paritelerdeki işlemler hariç tutulur.",
    },
    {
      topic: "signup",
      q: "Bybit'e Google, Apple veya Telegram ile kayıt olabilir miyim?",
      a: "Evet. Bybit kayıtta e-posta adresi ve telefon numarasının yanında Google, Apple ve Telegram seçeneklerini de sunar. Uygulamada (4.47.0 veya üzeri) bir geçiş anahtarı (passkey) da oluşturabilirsin.",
    },
    {
      topic: "signup",
      q: "Bybit KYC olmadan kullanılır mı?",
      a: "İşlem yapmak için hayır. Kimlik doğrulaması yapılmamış bir Bybit hesabı para yatıramaz ve işlem yapamaz; yalnızca günde 20.000 USDT'ye, ayda 100.000 USDT'ye kadar para çekebilir.",
    },
    {
      topic: "signup",
      q: "Bybit KYC seviyeleri ve para çekme limitleri nelerdir?",
      a: "Standart doğrulama (kimlik belgesi ve kimlik değerlendirmesi) günde 1 milyon USDT'ye kadar para çekmeye izin verir. Buna adres belgesini ekleyen Advanced doğrulama, limiti günde 2 milyon USDT'ye çıkarır. Daha yüksek limitler için genişletilmiş durum tespiti (enhanced due diligence) içeren bir Pro seviyesi de var.",
    },
    {
      topic: "bonus",
      q: "Yeni kullanıcılar için Bybit referans bonusu ne kadar?",
      a: "Davet edilen kullanıcı için 250 USDT'ye kadar: Kayıttan sonraki 14 gün içinde en az 50 dolarlık ilk işlem için 50 USDT, bu işlemden sonraki 30 gün içinde 500 dolarlık toplam hacim için 100 USDT ve aynı dönemde 10.000 dolarlık hacim için 100 USDT. Davet eden de aynı tutarları alır; Bybit'in toplamda 500 USDT'ye kadar ödül duyurmasının nedeni bu.",
    },
    {
      topic: "bonus",
      q: "Bybit Welcome Gifts nedir?",
      a: "Bybit'in Rewards Hub bölümünde 100 USDT değerinde Welcome Gifts yer alıyor: kimlik doğrulamayı tamamlamak için 20 USDT Fee Saver, en az 10 dolarlık para yatırma için 30 USDT Position Airdrop ve en az 10 dolarlık işlem için 50 USDT Fee Saver – hepsi türev ürünler için. Görevler kullanıcıya ve bölgeye göre değişir.",
    },
    {
      topic: "bonus",
      q: "Bybit referans ödüllerini talep etmem gerekir mi?",
      a: "Evet. Her ödül önce 3 günlük bir risk incelemesinden geçer, ardından 10 gün içinde talep edilmesi gerekir; aksi hâlde süresi dolar. Ödüller aylık 500.000 USDT'lik bir havuzdan, ilk gelen alır esasıyla ödenir.",
    },
    {
      topic: "bonus",
      q: "Bybit Welcome Gifts ödülleri çekilebilir mi?",
      a: "Hayır. Bybit, Rewards Hub ödüllerinin süresinin dolduğunu ve çekilemediğini belirtir. Fee Saver'lar işlem komisyonlarını karşılar, Position Airdrop'lar ise türev işlemlerinde marjin olarak kullanılır.",
    },
    {
      topic: "fees",
      q: "Bybit vadeli işlem komisyonları ne kadar?",
      a: "VIP 0 kullanıcılar perpetual ve vadeli kontratlarda %0,02 maker ve %0,055 taker, Spot'ta %0,1, opsiyonda %0,02 maker / %0,03 taker öder. Komisyonu MNT ile ödemek, vadeli işlem komisyonlarını %10 azaltıp %0,018 / %0,0495'e indirir.",
    },
    {
      topic: "fees",
      q: "Bybit'te maksimum kaldıraç kaç?",
      a: "BTCUSDT perpetual kontratında ilk risk kademesinde (300.000 USDT'ye kadar pozisyonlar) 150x'e kadar; bir sonraki kademede üst sınır 100x'e iner ve pozisyon büyüdükçe daha da düşer. Yüksek kaldıraç, likidasyon riskini keskin biçimde artırır.",
    },
    {
      topic: "fees",
      q: "Bybit MNT komisyon indirimi ne kadar?",
      a: "Komisyonu MNT ile ödemek Spot'ta %25, vadeli işlemlerde %10 indirim sağlar. İndirim ters (inverse) kontratlar, trading botları, copy trading takipçileri ve API işlemleri için geçerli değildir.",
    },
    {
      topic: "safety",
      q: "Bybit hacklendi mi?",
      a: "Evet. 21 Şubat 2025'te bir Ethereum soğuk cüzdanından yaklaşık 1,46 milyar ABD doları çalındı. Bybit para çekme işlemlerini durdurmadı, eksik ETH miktarını köprü kredileri, büyük tutarlı para yatırma işlemleri ve OTC alımlarıyla temin etti; Hacken tarafından 24 Şubat'ta yapılan rezerv kanıtı denetimi, açığın 72 saat içinde kapandığını gösterdi.",
    },
    {
      topic: "safety",
      q: "Bybit Birleşik Krallık'ta kullanılabilir mi?",
      a: "Hayır. Bybit Birleşik Krallık'tan yeni kayıt kabul etmiyor; 21 Ekim 2026'dan beri Birleşik Krallık'ta ikamet eden hesaplar yalnızca para çekebiliyor.",
    },
    {
      topic: "safety",
      q: "Bybit Avrupa'da kullanılabilir mi?",
      a: "AEA sakinlerine, MiCAR kapsamında Avusturya Finans Piyasası Otoritesi'nin (FMA) denetiminde faaliyet gösteren ve Malta hariç AEA'yı kapsayan Viyana merkezli Bybit EU GmbH hizmet verir. Bu, kendi komisyonları ve ürün yelpazesi olan ayrı bir platformdur.",
    },
  ],
};
