import type { ExchangeText } from "../../types";

export const binance: ExchangeText = {
  referral: {
    codeName: "Referral ID",
    whereShort: "Kaydın son adımındaki “Referral ID (Optional)” alanı",
    apply:
      "Kodu kaydın son adımındaki “Referral ID (Optional)” alanına gir ya da bu sayfadaki kayıt bağlantısını aç; bağlantı kodu senin yerine otomatik olarak doldurur.",
    whereToEnter:
      "Binance referans kodunu hem web sitesinde hem de uygulamada kaydın son adımında ister – yani e-posta adresini ya da telefon numaranı doğrulayıp şifreni belirledikten sonra. Bir referans bağlantısıyla gelirsen Binance kodu senin yerine doldurur ve yanında yeşil bir onay işaretiyle birlikte “Linked” ibaresini gösterir. Aksi halde “Referral ID (Optional)” alanına REFCO888 yaz. Bu adım isteğe bağlıdır ve atlanabilir.",
    afterSignupShort: "Evet – 30 gün içinde, ilk para yatırma veya işlemden önce",
    afterSignup:
      "Evet, ama belirli şartlarla. Binance, eksik bir referans kodunu kendi referans bağlama sayfasında (binance.com/en/activity/referral/bind-ref) sonradan bağlamana şu durumlarda izin verir: hesabının açılışının üzerinden henüz 30 gün geçmediyse, hesapta hiç para yatırma veya işlem hareketi yoksa, hesap henüz bir referansa bağlı değilse ve bir ana hesapsa; ayrıca kimlik doğrulaman son 180 gün içinde başka bir hesapta kullanılmadıysa ve hesap wash trading nedeniyle işaretlenmemişse. Binance'e göre referans bir kez bağlandıktan sonra değiştirilemez ve kaldırılamaz.",
    inviteeReward:
      "REFCO888 bir Binance Referral Pro kodudur. Pro modunda davet eden kişi komisyonunu paylaşmayı seçtiyse, davet edilen kullanıcı kendi ödediği işlem ücretlerinin bir kısmını USDC olarak geri alır – geçerli oranı Binance kayıt sırasında gösterir. Koddan bağımsız olarak Binance, kimliğini doğrulamış her yeni kullanıcıya 100 USD'ye kadar komisyon iade kuponu kazandıran başlangıç görevleri sunar.",
    guide: [
      "Binance'te iki ayrı referans modu var ve yeni bir kullanıcı yalnızca birine dahil olabilir. Bu sayfadaki gibi binance.com/register?ref=… biçimindeki bağlantılar Referral Pro'ya aittir: davet eden kişi senin işlem ücretlerinden komisyon kazanır ve bunun bir kısmını sana USDC cinsinden iade olarak geri verebilir. Diğer mod olan Referral Lite ise küçük ilk alımlar ve ilk işlemler için komisyon iade kuponlarıyla çalışır; Binance bu kuponları Pro kodla yapılan kayıtlarda vermez.",
      "Tek bir Pro referansı Spot, Marjin ve Vadeli İşlemler için geçerlidir. Daha sonra bir Vadeli İşlemler hesabı açtığında Binance ikinci, isteğe bağlı bir “Futures Referral ID” alanı gösterir. Bu alan yalnızca ana hesabını davet eden kişinin kodunu kabul eder; yani iki farklı davet edeni bir araya getiremezsin.",
      "Nerede yaşadığın önemli. 1 Temmuz 2026'dan bu yana AEA (Avrupa Ekonomik Alanı) ülkelerinde kayıtlı kullanıcılar Binance referans programına hiçbir şekilde katılamıyor; Binance'in referans koşulları ayrıca Birleşik Krallık, Singapur, Japonya, Türkiye, Hong Kong ve İsrail için de kısıtlamalar sıralıyor. Binance'in hizmet verdiği ülkelerden yine hesap açabilirsin, ancak bu durumda referansın hiçbir etkisi olmaz.",
    ],
  },
  signup: {
    methods: ["e-posta adresi", "telefon numarası", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Binance kayıt sayfasını aç",
        text: "Bu sayfadaki kayıt butonunu kullan. Buton, referansın eklenmiş olduğu accounts.binance.com sayfasını açar – Binance formun yanında REFCO888 kodunu gösterir.",
      },
      {
        title: "E-posta adresini veya telefon numaranı gir",
        text: "Ya da Google, Apple veya Telegram ile devam et. İlerlemek için Kullanım Koşullarını ve Gizlilik Bildirimini kabul et.",
      },
      {
        title: "6 haneli kodu onayla",
        text: "Binance, e-postana veya telefonuna 6 haneli bir doğrulama kodu gönderir. Kod 30 dakika boyunca geçerlidir.",
      },
      {
        title: "Şifreni belirle",
        text: "En az 8 karakter; içinde bir büyük harf ve bir rakam bulunmalı.",
      },
      {
        title: "Referans kodunu kontrol et",
        text: "Son adımda Referral ID alanı yeşil bir onay işareti ve “Linked” ibaresiyle zaten dolu olmalı. Alan boşsa REFCO888 yaz – referans istemiyorsan bu adımı atla.",
      },
      {
        title: "Kimliğini doğrula",
        text: "Ardından Binance seni kimlik doğrulamaya yönlendirir. Her yeni kullanıcının para yatırmadan veya işlem yapmadan önce bu adımı tamamlaması gerekir.",
      },
    ],
    kycShort: "Tüm ürünler için zorunlu",
    kyc: "Evet. Binance, her yeni kullanıcının herhangi bir ürünü kullanmadan önce kimlik doğrulamasını tamamlamasını (“Verified” durumu) şart koşar – kripto para yatırma ve alım satım işlemleri de buna dahildir. Bir belge seçer, yükler ve canlılık kontrolünden geçersin; Binance'e göre inceleme genellikle 48 saat içinde tamamlanır. Hiç doğrulama yapmamış eski hesaplar yalnızca para çekebilir.",
    documents:
      "Çoğu kullanıcı pasaport, ulusal kimlik kartı veya sürücü belgesiyle doğrulama yapabilir; ardından bir canlılık (yüz) kontrolü gelir.",
    minAge: "18 yaş (Binance Kullanım Koşulları)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Komisyonları BNB ile ödersen Spot komisyonlarında %25 (%0,10 yerine %0,075), USDⓈ-M vadeli işlem komisyonlarında ise %10 indirim alırsın (%0,02 / %0,05 yerine %0,018 maker / %0,045 taker).",
  extraFeeMarkets: ["COIN-M vadeli işlemler"],
  sourceLabels: [
    "Binance: Web sitesinde kayıt olma (referans adımı)",
    "Binance: Uygulamada kayıt olma",
    "Binance: Kayıttan sonra referans kodu bağlama",
    "Binance: Referral Pro ve Referral Lite modları",
    "Binance: Referans programı koşulları ve bölgesel kısıtlamalar",
    "Binance: Yeni kullanıcı hoş geldin ödülleri (komisyon iade kuponları)",
    "Binance: Spot işlem komisyon oranları",
    "Binance: USDⓈ-M vadeli işlem komisyon oranları",
    "Binance: COIN-M vadeli işlem komisyon oranları",
    "Binance: USDⓈ-M vadeli işlemlerde kaldıraç ve marjin",
    "Binance: Yeni vadeli işlem hesaplarında kaldıraç sınırları",
    "Binance: Kimlik doğrulama",
    "Binance: Kullanım Koşulları",
    "Binance: Yasaklı ülkeler listesi",
    "Binance: Lisanslar ve kayıtlar",
    "Binance: Rezerv kanıtı (Proof of Reserves)",
    "Binance: SAFU fonu",
    "Binance: Hakkında",
  ],
  guides: {
    heading: "Binance Square rehberleri",
    intro:
      "Binance referans koduyla kayıt olmaya dair kontrol listeli daha kapsamlı bir rehber, Binance'in kendi içerik platformu Binance Square'de yayımlandı. Orijinali İspanyolca; Binance Square çevirisini gösterebilir:",
    linkLabel: "Binance referans kodu SSS",
    videoLinkLabel: "Binance referans kodu video SSS",
  },
  feeDiscount: "",
  referralCovers: ["Spot", "Marjin", "Vadeli İşlemler"],
  bonusHeadline: "100 USD'ye kadar komisyon iade kuponu",
  benefits: [
    "Hesabın doğrulandıktan sonra 100 USD'ye kadar komisyon iade kuponu kazandıran başlangıç görevleri",
    "Tek referans Spot, Marjin ve Vadeli İşlemler için geçerli – ikinci bir koda gerek yok",
    "Komisyonları BNB ile ödediğinde Spot komisyonlarında %25, USDⓈ-M vadeli işlem komisyonlarında %10 indirim",
    "Para yatırmadıysan ve işlem yapmadıysan kod, kayıttan sonraki 30 güne kadar hâlâ bağlanabilir",
  ],
  benefitNote:
    "Hoş geldin kuponları referans kodunun bir ödülü değil, Binance'in genel yeni kullanıcı kampanyasıdır. Kimlik doğrulamasından sonra verilir, Spot işlem ücretlerini iade eder, API üzerinden yapılan işlemlerin ücretlerini karşılamaz ve yalnızca Binance uygulamasında kullanılabilir. Binance uzun bir ülke listesini bu kampanyanın dışında tutar; bunlar arasında Birleşik Krallık, ABD, Kanada, Hollanda, Norveç, Sırbistan, Japonya, Singapur ve Hong Kong da var.",
  headquarters: "Abu Dabi'deki ADGM lisanslı şirketler üzerinden işletiliyor",
  regulation:
    "ADGM FSRA (Abu Dabi) tarafından düzenleniyor; Dubai (VARA), Bahreyn, Kazakistan, Avustralya ve Japonya dahil başka lisans ve kayıtlar",
  users: "320 milyondan fazla kayıtlı kullanıcı (Binance'e göre)",
  assets: "600+ kripto para",
  maxLeverage: "150x'e kadar (BTCUSDT ve ETHUSDT sürekli vadeli kontratları)",
  feeNote: "Daha yüksek VIP seviyeleri oranları daha da düşürür.",
  products: [
    "Spot",
    "Marjin",
    "USDⓈ-M ve COIN-M vadeli işlemler",
    "Opsiyon",
    "Kopya işlem (copy trading)",
    "Trading botları",
    "Earn ve Launchpool",
  ],
  tagline: "Kripto türev piyasasında en derin likidite",
  quickAnswer:
    "Binance referans kodu: REFCO888. Binance bu kodu kaydın son adımında ister; bu sayfadaki buton üzerinden kayıt olursan kod otomatik olarak doldurulur. Tek kod Spot, Marjin ve Vadeli İşlemler için geçerlidir. Kodu girmeyi unuttuysan, para yatırmadığın ve işlem yapmadığın sürece Binance kayıttan sonraki 30 gün içinde kod bağlamana izin verir. Kimliğini doğrulamış yeni kullanıcılar ayrıca 100 USD'ye kadar komisyon iade kuponu kazanabilir.",
  about: [
    "Binance Temmuz 2017'de faaliyete geçti ve kendi açıklamasına göre 180 gün içinde dünyanın en büyük kripto para borsası oldu. Bugün 180'den fazla ülkede 320 milyonun üzerinde kayıtlı kullanıcısı olduğunu açıklıyor ve 600'den fazla kripto parayı listeliyor. Türev ürünlerde açık ara bir numara: piyasa verilerimizin tarihinde, CoinMarketCap türev sıralamasında kendisinden sonra gelen üç borsanın toplamından daha fazla açık pozisyona (open interest) sahipti. Bu, trader'lar için önemli; çünkü derin emir defterleri daha dar spread ve büyük emirlerde daha az kayma (slippage) anlamına gelir.",
    "Tek bir girişle Spot ve marjin işlemlerine, USDⓈ teminatlı ve coin teminatlı vadeli işlemlere, opsiyonlara, trading botlarına ve kopya işleme, ayrıca Earn ve Launchpool ürünlerine erişirsin. USDⓈ-M vadeli işlemlerde kaldıraç, 300.000 USDT'ye kadar olan pozisyonlarda BTCUSDT ve ETHUSDT sürekli vadeli kontratlarında (perpetual) 150x'e kadar çıkar; coin teminatlı kontratlarda üst sınır 125x. Yeni vadeli işlem hesapları ilk 30 gün boyunca 20x'ten fazla kaldıraç kullanamaz.",
    "Binance.com, üç lisanslı şirket aracılığıyla Abu Dhabi Global Market (ADGM) bünyesindeki Financial Services Regulatory Authority tarafından düzenleniyor. Binance ayrıca Dubai (VARA), Bahreyn, Kazakistan, Avustralya (AUSTRAC), Hindistan, Endonezya, Japonya, Yeni Zelanda, Tayland, Meksika, El Salvador, Arjantin, Brezilya ve Güney Afrika'daki lisans ve kayıtlarını listeliyor. Rezerv kanıtı, kullanıcıların kendi bakiyelerinin dahil edildiğini kontrol edebilmesi için bir Merkle ağacını zk-SNARKs ile birleştiriyor; 2018'de kurulan SAFU acil durum fonunda ise Şubat 2026 itibarıyla yaklaşık 1 milyar ABD doları bulunuyordu.",
  ],
  highlights: [
    { title: "Likiditede 1 numara", text: "Tüm borsalar arasında en büyük açık pozisyon ve vadeli işlem hacmi." },
    { title: "Düşük vadeli işlem komisyonu", text: "Standart seviyede %0,02 maker / %0,05 taker, BNB ile %10 daha az." },
    { title: "Her şey tek uygulamada", text: "Vadeli işlemler, opsiyonlar, botlar, kopya işlem ve Earn tek bir hesapta." },
  ],
  pros: [
    "BTC, ETH ve büyük altcoinlerin sürekli vadeli kontratlarında rakipsiz likidite",
    "Ek BNB indirimiyle rekabetçi standart komisyonlar",
    "Kendin doğrulayabileceğin rezerv kanıtı ve yaklaşık 1 milyar ABD dolarlık SAFU fonu",
    "Eksik referans kodu 30 gün içinde hâlâ bağlanabiliyor",
  ],
  cons: [
    "ABD, Kanada ve Hollanda'da kullanılamıyor",
    "Para yatırmadan veya işlem yapmadan önce kimlik doğrulama zorunlu",
    "Yeni vadeli işlem hesaplarında kaldıraç ilk 30 gün 20x ile sınırlı",
    "AEA sakinleri Temmuz 2026'dan bu yana referans programının dışında",
  ],
  bestFor: [
    "Derin likiditeye ihtiyaç duyan aktif vadeli işlem trader'ları",
    "Her şey için tek bir platform isteyen trader'lar",
    "VIP seviyelerinden yararlanan yüksek hacimli kullanıcılar",
  ],
  signupTip:
    "Kimlik doğrulamayı hemen tamamla: Binance yeni hesapların doğrulama olmadan para yatırmasına veya işlem yapmasına izin vermiyor, hoş geldin görevleri de ancak doğrulandıktan sonra tanımlanıyor.",
  safety:
    "Binance, tüm hesap bakiyelerinin 1:1 karşılığının bulunduğunu gösterdiğini söylediği bir rezerv kanıtı yayımlıyor – 12 Kasım 2026 tarihli denetimde BTC rezerv oranı %100,05 çıktı – ve kendi hesabını Wallet → Verification bölümünden doğrulamana olanak tanıyor. Hesap güvenliği iki faktörlü kimlik doğrulama, geçiş anahtarları (passkey) ve para çekme beyaz listesini kapsıyor. SAFU fonunun amacı, olağanüstü durumlarda kullanıcıları korumak. Hiçbir merkezi borsa risksiz değildir; bu yüzden orada yalnızca aktif olarak işlem yaptığın fonları tut.",
  restricted:
    "Binance'in yasaklı ülkeler listesinde (5 Ocak 2026'da güncellendi) şunlar yer alıyor: ABD, Kanada, Hollanda, Küba, Kuzey Kore, İran, Kırım ve sözde Donetsk ve Luhansk Halk Cumhuriyetleri.",
  faqs: [
    {
      topic: "referral",
      q: "REFCO888 Binance referans kodu geçerli mi?",
      a: "Evet. 16 Kasım 2026'da binance.com/register?ref=REFCO888 bağlantısı Binance'in kendi kayıt sayfasını açtı ve sayfa, kayıt formunun yanında REFCO888 kodunu gösterdi.",
    },
    {
      topic: "referral",
      q: "Binance Referral Pro ile Referral Lite arasındaki fark nedir?",
      a: "İkisi ayrı modlardır ve yeni bir kullanıcı yalnızca birinde yer alabilir. Referral Pro modunda davet eden kişi senin işlem ücretlerinden komisyon kazanır ve bunun bir kısmını USDC olarak ödenen bir iade şeklinde seninle paylaşabilir. Referral Lite modunda ise iki taraf da küçük ilk alım ve ilk işlem görevlerini tamamladığında komisyon iade kuponu alır. REFCO888 bir Referral Pro kodu olduğu için Lite kuponları geçerli değildir.",
    },
    {
      topic: "referral",
      q: "Binance Futures için ayrı bir referans kodu var mı?",
      a: "Binance, bir Vadeli İşlemler hesabı açtığında isteğe bağlı bir “Futures Referral ID” alanı gösterir. Bu alan yalnızca kayıt olurken Referral Pro kodunu veya bağlantısını kullandığın davet edenin kodunu kabul eder; dolayısıyla tek bir referans fiilen Spot, Marjin ve Vadeli İşlemler için geçerli olur.",
    },
    {
      topic: "referral",
      q: "Binance referans kodunu sonradan değiştirebilir miyim?",
      a: "Hayır. Binance, referans ilişkisi bir kez kurulduktan sonra değiştirilemeyeceğini ve kaldırılamayacağını belirtiyor. Yalnızca hiçbir referansa bağlı olmayan bir hesap, kayıttan sonraki 30 gün içinde ve ilk para yatırma ya da ilk işlemden önce kod bağlayabilir.",
    },
    {
      topic: "referral",
      q: "Binance referans kodu AB'de geçerli mi?",
      a: "Artık değil. Binance'in referans koşullarına göre AEA ülkelerinde kayıtlı kullanıcılar 1 Temmuz 2026'dan bu yana Binance referans programına katılma hakkına sahip değil. Koşullar ayrıca Birleşik Krallık, Singapur, Japonya, Türkiye, Hong Kong ve İsrail için de kısıtlamalar sıralıyor.",
    },
    {
      topic: "signup",
      q: "Binance'e Google, Apple veya Telegram ile kayıt olabilir miyim?",
      a: "Evet. Binance'in kayıt sayfası, e-posta adresi veya telefon numarasının yanı sıra “Continue with Google”, “Continue with Apple” ve “Continue with Telegram” seçeneklerini de sunuyor.",
    },
    {
      topic: "signup",
      q: "Binance şifresi nasıl olmalı?",
      a: "Binance şifresi en az 8 karakterden oluşmalı ve bir büyük harf ile bir rakam içermelidir.",
    },
    {
      topic: "signup",
      q: "Binance doğrulama kodu ne kadar süre geçerli?",
      a: "Binance'in kayıt sırasında e-postana veya telefonuna gönderdiği 6 haneli kod 30 dakika boyunca geçerlidir.",
    },
    {
      topic: "signup",
      q: "Binance kimlik doğrulama ne kadar sürer?",
      a: "Binance'e göre inceleme, belgeni gönderip canlılık kontrolünden geçtikten sonra genellikle 48 saat içinde tamamlanır.",
    },
    {
      topic: "signup",
      q: "Binance KYC olmadan kullanılabilir mi?",
      a: "Hayır. Tüm yeni kullanıcıların, kripto para yatırma ve alım satım dahil Binance ürünlerini kullanabilmesi için önce doğrulanmış olması gerekir. Doğrulanmamış eski hesaplar yalnızca para çekebilir.",
    },
    {
      topic: "bonus",
      q: "Binance yeni kullanıcı hoş geldin bonusu nedir?",
      a: "Binance yeni kullanıcılara, 100 USD'ye varan komisyon iade kuponlarının kilidini açan üç başlangıç görevi verir. Görevler ancak hesap doğrulamasını tamamladıktan sonra tanımlanır ve her kupon, Spot işlem ücretlerinin belirli bir yüzdesini iade eder.",
    },
    {
      topic: "bonus",
      q: "Binance hoş geldin bonusu çekilebilir mi?",
      a: "Hayır. Ödül nakit değil, bir komisyon iade kuponudur: Spot işlem ücretlerini iade eder, API üzerinden verilen emirlerde kullanılamaz ve yalnızca Binance uygulamasında kullanılabilir.",
    },
    {
      topic: "bonus",
      q: "Binance hoş geldin kuponlarından hangi ülkeler yararlanamaz?",
      a: "Binance'in koşulları, diğerlerinin yanı sıra şu ülkeleri kapsam dışında bırakıyor: Birleşik Krallık, ABD, Kanada, Hollanda, Hırvatistan, Norveç, İzlanda, Lihtenştayn, Sırbistan, Arnavutluk, Rusya, Japonya, Singapur ve Hong Kong. Tam liste, Binance'in hoş geldin ödülleriyle ilgili yardım makalesinde yer alıyor.",
    },
    {
      topic: "fees",
      q: "Binance BNB komisyon indirimi ne kadar?",
      a: "Komisyonları BNB ile ödemek Spot komisyonlarını %25 düşürür – normal kullanıcılar için %0,10 yerine %0,075 – ve USDⓈ-M vadeli işlem komisyonlarını %10 azaltır; böylece maker %0,018, taker %0,045 olur.",
    },
    {
      topic: "fees",
      q: "Binance'te maksimum kaldıraç ne kadar?",
      a: "300.000 USDT'ye kadar olan pozisyonlarda BTCUSDT ve ETHUSDT USDⓈ-M sürekli vadeli kontratlarında 150x'e, coin teminatlı BTCUSD sürekli kontratında ise 125x'e kadar. Açılışının üzerinden 30 gün geçmemiş vadeli işlem hesapları 20x'ten fazla kaldıraç kullanamaz. Yüksek kaldıraç likidasyon riskini keskin biçimde artırır.",
    },
    {
      topic: "fees",
      q: "Binance COIN-M vadeli işlem komisyonları ne kadar?",
      a: "Normal kullanıcılar COIN-M vadeli işlemlerde %0,02 maker ve %0,05 taker öder; bu oranlar USDT teminatlı USDⓈ-M kontratlarıyla aynıdır.",
    },
    {
      topic: "safety",
      q: "Binance ABD'de kullanılabilir mi?",
      a: "Hayır. ABD, Kanada ve Hollanda ile birlikte Binance'in yasaklı ülkeler listesinde yer alıyor.",
    },
    {
      topic: "safety",
      q: "Binance SAFU fonu nedir?",
      a: "SAFU (Secure Asset Fund for Users), Binance'in kullanıcıları olağanüstü durumlarda korumak için 2018'de kurduğu bir acil durum fonudur. Binance'e göre fonda Şubat 2026 itibarıyla yaklaşık 1 milyar ABD doları değerinde kripto varlık bulunuyordu ve fon 800 milyon ABD dolarının altına düşerse yeniden takviye ediliyor.",
    },
    {
      topic: "safety",
      q: "Binance rezerv kanıtı nasıl kontrol edilir?",
      a: "Binance rezerv oranlarını rezerv kanıtı sayfasında yayımlıyor ve zk-SNARKs ile birlikte bir Merkle ağacı kullanıyor. Giriş yapmış kullanıcılar, kendi bakiyelerinin dahil olduğunu Wallet → Verification bölümünden teyit edebilir.",
    },
  ],
};
