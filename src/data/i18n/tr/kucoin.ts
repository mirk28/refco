import type { ExchangeText } from "../../types";

export const kucoin: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Kaydın ilk adımındaki “Referral Code (Optional)” alanı",
    apply:
      "Kodu kaydın ilk adımındaki “Referral Code (Optional)” alanına yaz ya da bu sayfadaki kayıt bağlantısını aç; bağlantı alanı senin yerine doldurur ve kilitler.",
    whereToEnter:
      "KuCoin referans kodunu kaydın en başında, e-posta adresin veya telefon numaranla aynı adımda ister – hem web sitesinde hem de uygulamada. Alanın adı “Referral Code (Optional)”. Bu sayfadaki bağlantı, KuCoin'in kayıt sayfasını QBSS4BT7 kodu girilmiş ve alan kilitlenmiş hâlde açar; yani ters gidebilecek bir şey yok. KuCoin'in kayıt rehberi ayrıca, bir bağlantı alanı doldurmazsa kodu elle de yazabileceğini belirtiyor.",
    afterSignupShort: "Talep üzerine – Yardım Merkezi'nde “Link Referrer” (koşullar yayımlanmamış)",
    afterSignup:
      "Olabilir. KuCoin'in Yardım Merkezi'nde “Link Referrer” (“Submit a request to add a referrer manually”) adlı, kendin oluşturabileceğin bir talep türü var; davet edenin bağlantısını kaldırmak için de bunun bir karşılığı bulunuyor. İki talep için de giriş yapman gerekiyor ve KuCoin ne koşulları ne de bir süre sınırı yayımlıyor; bu yüzden onay garanti değil. Güvenilir yol hâlâ kodu kayıt sırasında girmek.",
    inviteeReward:
      "KuCoin'in referans sayfası, davet edilen arkadaşların “stand to receive cashback and exclusive newcomer rewards”, yani komisyon iadesi ve yeni kullanıcılara özel ödüller alabileceğini söylüyor. Bu iade (cashback), kendi ödediğin işlem ücretlerinin bir kısmı: Davet eden kişi, davet ettiği kullanıcılar için kendi güncel komisyon oranına kadar özel bir iade oranı belirleyebiliyor; bu nedenle sabit bir yüzde yok. Referans ilişkisi kaydından itibaren 365 gün sürüyor. Bunun üzerine KuCoin, yeni kullanıcılar için 10.650 USDT'ye kadar bonus duyuruyor.",
    guide: [
      "KuCoin'in referans programı, davet eden kişiye davet ettiği kullanıcıların işlem ücretleri üzerinden komisyon öder ve bu komisyonun bir kısmını davet edilen kullanıcıya iade (cashback) olarak geri vermesine imkân tanır. KuCoin sabit bir iade yüzdesi belirlemez – oran, davet edenin ayarladığı orandır ve davet edenin kendi komisyon oranıyla sınırlıdır.",
      "Referans; Spot işlemlerini (KuCoin'de bu kapsama Spot, marjin ve trading botları girer), ETF'leri ve vadeli işlemleri kapsar. API üzerinden verilen emirler sayılmaz. İlişki kaydından itibaren 365 gün sürer, VIP 3 seviyesine ulaşırsan daha erken biter. Komisyonlar her gün, işlem ücretinin ödendiği para biriminde hesaplanıp ödenir.",
      "KuCoin'e göre referans programı Belçika, Fransa, Hollanda ve hizmetlerinin kısıtlı olduğu diğer ülke ve bölgelerde yaşayanlara açık değil.",
    ],
  },
  signup: {
    methods: ["e-posta adresi", "telefon numarası", "Telegram", "Google", "Apple"],
    steps: [
      {
        title: "KuCoin kayıt sayfasını aç",
        text: "Bu sayfadaki kayıt düğmesini kullan. KuCoin, “Welcome to KuCoin” sayfasını QBSS4BT7 referans kodu “Referral Code (Optional)” alanına girilmiş hâlde açar.",
      },
      {
        title: "E-posta adresini veya telefon numaranı gir",
        text: "Ya da Telegram, Google veya Apple ile devam et. Referans kodu da aynı ilk adımda yer alıyor.",
      },
      {
        title: "Kullanım Koşulları'nı kabul et",
        text: "Kullanım Koşulları ve Gizlilik Politikası kutucuğunu işaretle, ardından “Create Account and Claim Reward” düğmesine bas.",
      },
      {
        title: "Doğrulama kodunu gir",
        text: "KuCoin, e-posta adresinin ya da telefon numaranın sana ait olduğunu teyit etmek için bir kod gönderir.",
      },
      {
        title: "Giriş şifresi belirle",
        text: "Şifreni seç ve “Confirm” düğmesine bas – hesabın artık oluşturuldu.",
      },
      {
        title: "Kimliğini doğrula",
        text: "Ülkeni ve kimlik belgesi türünü seç, belgenin fotoğraflarını yükle ve yüz doğrulamasını tamamla. Yeni kullanıcılar KuCoin'in ürünlerini ancak bu adımdan sonra kullanabiliyor.",
      },
    ],
    kycShort: "Yeni kullanıcılar için zorunlu",
    kyc: "Evet. 31 Ağustos 2023'ten bu yana yeni kullanıcıların KuCoin'in ürün ve hizmetlerini kullanabilmesi için kimlik doğrulamasını (Identity Verification) tamamlaması gerekiyor. Doğrulama; ülkeni ve kimlik belgesi türünü seçmekten, belgenin fotoğraflarını yüklemekten ve bir yüz kontrolünden oluşur; bir kişi yalnızca tek bir KuCoin hesabını doğrulayabilir. Hiç doğrulanmamış eski hesaplar kripto satabilir, vadeli işlem ve marjin pozisyonlarını kapatabilir, Earn ürünlerindeki varlıklarını geri alabilir ve para çekebilir; ancak para yatıramaz.",
    documents: "KuCoin kimlik kartı, sürücü belgesi, pasaport veya oturma izni kabul ediyor; ardından yüz doğrulaması geliyor.",
    minAge: "18 yaş (KuCoin Kullanım Koşulları)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Komisyonları KCS ile ödemek %20 indirim sağlar; KuCoin bu indirimi Spot ve marjin işlemlerinde uygular ve iade (rebate) olarak hesaba geçirir. KuCoin, gerçekleşen indirimin biraz daha düşük çıkabileceğini belirtiyor. Daha yüksek VIP seviyeleri komisyonları %75'e kadar düşürür.",
  extraFeeMarkets: ["Spot – B sınıfı tokenlar", "Spot – C sınıfı tokenlar"],
  sourceLabels: [
    "KuCoin: Nasıl kayıt olunur (web ve uygulama)",
    "KuCoin: Referans programı ve kuralları",
    "KuCoin: Yardım Merkezi self servis talepleri (Link Referrer)",
    "KuCoin: Rewards Hub (yeni kullanıcı görevleri)",
    "KuCoin: Rewards Hub SSS",
    "KuCoin: VIP seviyesine göre komisyon tablosu",
    "KuCoin: Komisyonları KCS ile ödeme",
    "KuCoin: Kimlik doğrulama ve hesap limitleri",
    "KuCoin: Pozisyon büyüklüğüne göre vadeli işlem kaldıracı",
    "KuCoin: Trading botu komisyonları",
    "KuCoin: Kullanım Koşulları (kısıtlı bölgeler, asgari yaş)",
    "KuCoin: Hakkımızda",
    "KuCoin: Rezerv kanıtı (Proof of Reserves)",
    "KuCoin EU: KuCoin EU Exchange GmbH'nin MiCAR lisansı",
    "KuCoin: ABD Adalet Bakanlığı ile varılan uzlaşmaya ilişkin açıklama",
    "KuCoin: CEO'nun 2020 güvenlik olayına ilişkin mektubu",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Marjin", "Vadeli işlemler", "Trading botları", "ETF'ler"],
  bonusHeadline: "Yeni kullanıcılara 10.650 USDT'ye kadar bonus",
  benefits: [
    "KuCoin'in kayıt sayfası yeni kullanıcılara 10.650 USDT'ye kadar bonus duyuruyor; bonus, Rewards Hub'daki görevlerle açılıyor",
    "Davet eden bir oran belirlediyse işlem ücretlerinde iade (cashback) – KuCoin'in programı buna 365 gün boyunca izin veriyor",
    "Tek referans Spot, marjin, vadeli işlemler, trading botları ve ETF'leri kapsıyor",
    "Trading botlarını kullanmak ücretsiz; yalnızca bot işlem ücretini ödersin",
  ],
  benefitNote:
    "10.650 USDT, KuCoin'in kendi manşet rakamı ve bir üst sınır: Rewards Hub bu tutarı kupon paketleri, deneme fonları (trial funds), komisyon kuponları ve küçük nakit ödüller şeklinde; kayıt, kimlik doğrulama, ilk para yatırma, ilk işlem ve süreli görevler karşılığında öder. Süreli görevlerin kayıttan sonraki 7 gün içinde tamamlanması gerekir ve ödüller 30 gün geçerlidir. Stablecoin pariteleri ve komisyonsuz işlemler sayılmaz; piyasa yapıcılar (market maker) ve kurumsal kullanıcılar kapsam dışıdır. KuCoin'in Rewards Hub SSS sayfası hâlâ 3.200 USDT olan eski bir üst sınırdan söz ediyor.",
  headquarters: "KuCoin tarafından belirtilmemiş (Kullanım Koşulları Turks ve Caicos Adaları hukukuna tabi)",
  regulation: "Viyana'daki KuCoin EU Exchange GmbH üzerinden MiCAR lisansı (Malta hariç AEA); Avustralya'da AUSTRAC kaydı",
  users: "45 milyonu aşkın kullanıcı (KuCoin'e göre)",
  assets: "1.000+ listelenmiş token, 1.300+ parite",
  maxLeverage: "125x'e kadar (en küçük pozisyon kademesi)",
  feeNote:
    "KuCoin tokenları sınıflara ayırır: Yukarıdaki Spot oranı A sınıfı tokenlar için geçerli; B ve C sınıfı tokenlarda komisyon daha yüksek. Bir tokenın sınıfını, paritenin baz para birimi belirler.",
  products: ["USDT ve coin marjinli vadeli işlemler", "Spot", "Marjin", "Trading botları", "Kopya işlem (copy trading)", "Earn", "KuCoin Web3 Wallet"],
  tagline: "Herkes için altcoin ve trading botları",
  quickAnswer:
    "KuCoin referans kodu: QBSS4BT7. Kod, kaydın ilk adımındaki “Referral Code (Optional)” alanına girilir; bu sayfadaki düğme KuCoin'i kod girilmiş ve alan kilitlenmiş hâlde açar. Referans 365 gün boyunca Spot, marjin, vadeli işlemler ve trading botlarını kapsar; KuCoin ayrıca yeni kullanıcılar için 10.650 USDT'ye kadar bonus duyuruyor. Kodu girmeyi unutursan KuCoin'in Yardım Merkezi'nde bir “Link Referrer” talebi var, ancak koşulları kamuya açık değil.",
  about: [
    "KuCoin 2017'nin üçüncü çeyreğinde yayına girdi ve bugün 200'den fazla ülke ve bölgede 45 milyonu aşkın kullanıcıya hizmet verdiğini, 1.000'den fazla token listelediğini söylüyor. Kitlesini altcoinleri erkenden listeleyerek ve otomatik işlemi kolaylaştırarak büyüttü: Trading botlarının işlem ücretleri dışında hiçbir maliyeti yok.",
    "KuCoin'deki türev ürünler arasında USDT ve coin marjinli vadeli kontratlar bulunuyor; en yüksek kaldıraç en küçük pozisyon kademesinde 125x – bir sonraki kademede sınır 100x'e iniyor ve pozisyon büyüdükçe daha da düşüyor. Borsa ayrıca marjin işlemi, kopya işlem, Earn ürünleri ve bir Web3 cüzdanı sunuyor; KCS tokenı ise Spot ve marjin komisyonlarında %20 indirim sağlıyor.",
    "KuCoin, 27 Ocak 2025'te ABD Adalet Bakanlığı ile bir uzlaşmaya vardığını duyurdu; ABD'li kullanıcıların hesaplarını ise 23 Ocak 2025 itibarıyla zaten kapatmıştı. AEA'da grup, Viyana'daki KuCoin EU Exchange GmbH aracılığıyla faaliyet gösteriyor; bu şirket MiCAR kapsamında lisanslı bir kripto varlık hizmet sağlayıcısı ve Avusturya FMA'nın denetiminde. 2020'de yaklaşık 285 milyon ABD dolarlık varlığı etkileyen hack saldırısının ardından KuCoin, geri alınamayan yaklaşık 45,55 milyon ABD dolarını kendisinin ve sigorta fonunun karşıladığını, hiçbir kullanıcının zarar görmediğini belirtiyor.",
  ],
  highlights: [
    { title: "Ücretsiz trading botları", text: "Botların kendisi için ücret yok – yalnızca bot işlem ücreti ödenir." },
    { title: "Kod kilitli gelir", text: "Kayıt bağlantısı QBSS4BT7 kodunu girer ve alanı kilitler." },
    { title: "%100'ün üzerinde rezerv", text: "31 Ekim 2026 itibarıyla BTC %112, ETH %115, USDT %110." },
  ],
  pros: [
    "Ücretsiz botlarla yeni başlayanlara uygun otomatik işlem",
    "1.000'den fazla listelenmiş tokenla geniş altcoin seçeneği",
    "%0,02 maker / %0,06 taker ile düşük standart vadeli işlem komisyonu",
    "BTC, ETH, USDT ve USDC için %100'ün üzerinde rezerv kanıtı",
  ],
  cons: [
    "ABD, Fransa, Hollanda, Singapur ve Kanada'nın bazı bölgelerinde kullanılamıyor",
    "B ve C sınıfı tokenlarda Spot komisyonu %0,2 ve %0,3'e çıkıyor",
    "Kayıttan sonra davet eden eklemenin koşulları yayımlanmıyor",
    "Vadeli işlem hacmi ilk beş borsanın gerisinde",
  ],
  bestFor: ["Botlarla otomatik işlem yapmak isteyen trader'lar", "Altcoin meraklıları", "Orta seviye vadeli işlem trader'ları"],
  signupTip:
    "Kayıttan hemen sonra kimlik doğrulamasını tamamla – yeni kullanıcılar KuCoin'i ancak bu şekilde kullanabiliyor – ve Rewards Hub'daki süreli görevlere kayıttan sonraki 7 gün içinde başla.",
  safety:
    "KuCoin düzenli olarak rezerv kanıtı raporları yayımlıyor. 31 Ekim 2026 tarihli veriler BTC için %112, ETH için %115, USDT için %110 ve USDC için %127 rezerv oranı gösterdi; denetim raporu 9 Kasım 2026 tarihli. KuCoin, 2020'deki hack saldırısında hiçbir kullanıcının zarar görmediğini belirtiyor. Botlar risk yönetimini değil, yalnızca emirlerin yürütülmesini otomatikleştirir – her zaman bir durdurma koşulu belirle ve borsada yalnızca işlem sermayeni tut.",
  restricted:
    "KuCoin'in Kullanım Koşulları (29 Ekim 2026'da güncellendi) şu yerleri kısıtlı bölge olarak sayıyor: bağlı toprakları dahil ABD, Singapur, Çin anakarası ve Hong Kong, Malezya, Kazakistan, Özbekistan, Rusya, Belarus, Kanada'nın Ontario ve Britanya Kolumbiyası eyaletleri, Fransa, Hollanda ile Kırım, Donetsk, Luhansk, Zaporijya ve Herson bölgeleri. Kısıtlamayı VPN ile aşmak yasak.",
  faqs: [
    {
      topic: "referral",
      q: "KuCoin referans kodu QBSS4BT7 çalışıyor mu?",
      a: "Evet. 16 Kasım 2026'da bu sayfadaki bağlantı, KuCoin'in kayıt sayfasını “Referral Code (Optional)” alanına QBSS4BT7 önceden girilmiş ve kilitlenmiş hâlde açtı.",
    },
    {
      topic: "referral",
      q: "KuCoin referans kodu ne kadar süre geçerli?",
      a: "Kaydından itibaren 365 gün. KuCoin'in kurallarına göre VIP 3 seviyesine ulaşırsan komisyonlar – ve onlarla birlikte varsa iade (cashback) de – daha erken sona erer.",
    },
    {
      topic: "referral",
      q: "KuCoin referans koduyla ne kadar cashback alırım?",
      a: "KuCoin sabit bir oran belirlemiyor. Davet eden, davet ettiği kullanıcılar için kendi komisyon oranına kadar özel bir iade (cashback) oranı belirleyebilir; iade Spot, marjin, trading botu, ETF ve vadeli işlemlerde ödenir. API üzerinden yapılan işlemler sayılmaz.",
    },
    {
      topic: "referral",
      q: "KuCoin'de “Link Referrer” ne demek?",
      a: "KuCoin Yardım Merkezi'nde kendin oluşturabileceğin bir talep; açıklaması “Submit a request to add a referrer manually”, yani davet edeni elle eklemek için talep gönder. Kod girmeden kayıt olmuş hesaplar için yol bu. Kullanmak için giriş yapman gerekiyor ve KuCoin koşullarını yayımlamıyor.",
    },
    {
      topic: "referral",
      q: "KuCoin referans programı hangi ülkelerde geçerli değil?",
      a: "KuCoin'e göre program Belçika, Fransa, Hollanda ve hizmetlerinin kısıtlı olduğu diğer ülke ve bölgelerde yaşayanlara açık değil.",
    },
    {
      topic: "signup",
      q: "KuCoin'e Google, Apple veya Telegram ile kayıt olabilir miyim?",
      a: "Evet. KuCoin'in kayıt sayfası, e-posta ve telefon alanının altında “Or continue with” başlığıyla Telegram, Google ve Apple seçeneklerini gösteriyor.",
    },
    {
      topic: "signup",
      q: "KuCoin KYC olmadan kullanılabilir mi?",
      a: "Yeni kullanıcı olarak hayır. 31 Ağustos 2023'ten bu yana yeni kullanıcıların KuCoin'in ürün ve hizmetlerini kullanabilmesi için kimlik doğrulamasını tamamlaması gerekiyor.",
    },
    {
      topic: "signup",
      q: "KuCoin'de iki hesap açabilir miyim?",
      a: "Doğrulanmış iki hesap açamazsın. KuCoin'e göre bir kişi yalnızca tek bir KuCoin hesabını doğrulayabilir.",
    },
    {
      topic: "bonus",
      q: "KuCoin hoş geldin bonusu nedir?",
      a: "KuCoin'in ana sayfası ve kayıt sayfası yeni kullanıcılara 10.650 USDT'ye kadar ödül duyuruyor. Bu tutar Rewards Hub'daki yeni kullanıcı görevleriyle – kayıt, kimlik doğrulama, ilk para yatırma, ilk işlem ve süreli görevler – kupon paketleri, deneme fonları, komisyon kuponları ve küçük nakit ödüller şeklinde ödeniyor. Kayıt görevi 400 USDT Bonus Pack ve Cash Reward olarak listeleniyor.",
    },
    {
      topic: "bonus",
      q: "KuCoin yeni kullanıcı ödülleri için ne kadar sürem var?",
      a: "Süreli görevlerin (limited-time challenge) kayıttan sonraki 7 gün içinde tamamlanması gerekiyor; KuCoin ayrıca ödüllerin 30 gün geçerli olduğunu, ardından sürelerinin dolduğunu belirtiyor.",
    },
    {
      topic: "bonus",
      q: "KuCoin yeni kullanıcı görevlerinde hangi işlemler sayılmaz?",
      a: "Stablecoin paritelerindeki işlemler ve komisyonsuz işlemler sayılmaz. Piyasa yapıcılar (market maker) ve kurumsal kullanıcılar ise hiç katılamaz.",
    },
    {
      topic: "fees",
      q: "KuCoin vadeli işlem komisyonları ne kadar?",
      a: "VIP 0 kullanıcılar vadeli işlemlerde %0,02 maker ve %0,06 taker öder. Futures Grid botu ise %0,06 sabit işlem ücretiyle çalışır.",
    },
    {
      topic: "fees",
      q: "KuCoin KCS indirimi ne kadar?",
      a: "%20. KuCoin bu indirimi, komisyonları KCS ile ödediğinde Spot ve marjin işlemlerinde uygular ve iade (rebate) olarak hesaba geçirir; gerçekleşen indirim biraz daha düşük olabilir.",
    },
    {
      topic: "fees",
      q: "KuCoin trading botları ücretsiz mi?",
      a: "Evet, KuCoin botların kendisinin ücretsiz olduğunu belirtiyor. İşlemler ise ayrı bir bot komisyonu kuralına tabi: Spot botları VIP 0 maker ve taker oranından %20 indirim alır, Futures Grid botu sabit %0,06 öder; KCS indirimi ve VIP seviyeleri uygulanmaz.",
    },
    {
      topic: "fees",
      q: "KuCoin'de maksimum kaldıraç kaç?",
      a: "Doğrulanmış hesaplar için en küçük pozisyon kademesinde 125x. KuCoin'de vadeli işlem kaldıracı pozisyon büyüklüğüne göre kademelidir – bir sonraki kademede sınır 100x.",
    },
    {
      topic: "safety",
      q: "KuCoin ABD'de kullanılabilir mi?",
      a: "Hayır. ABD, KuCoin'in Kullanım Koşulları'nda kısıtlı bölge olarak geçiyor ve KuCoin, ABD'li kullanıcıların hesaplarını 23 Ocak 2025 itibarıyla kapattı.",
    },
    {
      topic: "safety",
      q: "KuCoin Avrupa'da lisanslı mı?",
      a: "Viyana'daki KuCoin EU Exchange GmbH, MiCAR kapsamında lisanslı bir kripto varlık hizmet sağlayıcısı ve Avusturya Finans Piyasası Otoritesi'nin denetiminde. Malta hariç AEA'ya hizmet veriyor.",
    },
    {
      topic: "safety",
      q: "KuCoin hacklendi mi?",
      a: "Evet, 2020'de. Yaklaşık 285 milyon ABD dolarlık varlık etkilendi. KuCoin, geri alınamayan yaklaşık 45,55 milyon ABD dolarını (%16) kendisinin ve sigorta fonunun karşıladığını, hiçbir kullanıcının zarar görmediğini belirtiyor.",
    },
  ],
};
