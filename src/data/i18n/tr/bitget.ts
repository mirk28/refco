import type { ExchangeText } from "../../types";

export const bitget: ExchangeText = {
  referral: {
    codeName: "Referral code",
    whereShort: "Kayıt formundaki “Referral code” alanı (isteğe bağlı)",
    apply:
      "Kodu kayıt formundaki “Referral code” alanına yaz ya da bu sayfadaki kayıt bağlantısını aç; bağlantı alanı senin yerine doldurur ve kilitler.",
    whereToEnter:
      "Bitget'in kayıt formunda “Referral code” adlı, doldurulması isteğe bağlı bir alan bulunur. Web sitesinde bu alan, e-posta adresinin ya da cep telefonu numaranın hemen ardından, şifreni belirlemeden önce gelir; uygulamada ise şifreden sonra, “Create account” düğmesine dokunmadan önce karşına çıkar. Bu sayfadaki bağlantı, Bitget'in referans kayıt sayfasını JZVEV1M3 kodu girilmiş ve alan kilitlenmiş hâlde açar.",
    afterSignupShort: "Hayır – yalnızca kayıt sırasında (istisnalar sadece destek üzerinden)",
    afterSignup:
      "Kendi başına ekleyemezsin. Bitget Yardım Merkezi, referans kodlarının kayıt sırasında girilmesi gerektiğini ve hesap açıldıktan sonra eklenemeyeceğini ya da değiştirilemeyeceğini belirtiyor. Aynı Yardım Merkezi yanıtına göre tek yol; UID'ni, kodu ve davetin sen kayıt olmadan önce gönderildiğini gösteren bir kanıtı içeren bir destek talebi açmak – sonucu da garanti değil. Bitget bunun için herhangi bir süre sınırı yayımlamıyor.",
    inviteeReward:
      "Bitget'in herkese açık referans programı (Referral Program), davet edilen kullanıcıyı BTC airdrop'ları ve Mystery Box'larla ödüllendirir: 15 gün içinde en az 200 USDT net para yatırma ve şartları karşılayan ilk işlem için 9 ABD doları değerinde BTC airdrop'u ile 500 USDT'ye kadar bir Mystery Box; toplam işlem hacmin 100.000 USDT'yi geçtiğinde ise 18 ABD doları değerinde BTC ve 1.000 USDT'ye kadar bir Mystery Box daha. Bu ödüller için davet edenin kampanyaya kayıtlı olması gerekir ve taraflardan birinin affiliate, piyasa yapıcı (market maker) veya broker hesabı varsa ödeme yapılmaz; bu yüzden geçerli olan tutarlar, kayıttan sonra hesabında gösterilenlerdir. Koddan bağımsız olarak yeni kullanıcılar Bitget'in 6.200 USDT'ye kadar hoş geldin paketinden yararlanır.",
    guide: [
      "Bitget referans kodu, yeni hesabını seni davet eden kişiye bağlar. Bitget, programda yaptığın işlemlerin neredeyse tamamını sayar: kopya işlem ve marjin dahil Spot işlemler, vadeli işlemler, stock perps, commodity perps (emtia perpetual'ları), spot hisse senetleri ve CFD'ler.",
      "İlk ödül aşaması için kayıttan sonraki 15 gün içinde en az 200 USDT net para yatırman ve ilk işlemini yaptığın gün en az 1.000 USDT Spot hacmine, 4.000 USDT vadeli işlem hacmine ya da 100.000 USDT CFD hacmine ulaşman gerekir. Bir Mystery Box'tan USDT, vadeli işlem bonusları, vadeli işlem pozisyon artırma kuponları, Earn APR kuponları veya Spot komisyon iadesi kuponları çıkabilir; kutu, hesabına tanımlandıktan sonraki 30 gün içinde talep edilmelidir.",
      "Bitget, davet edilen kullanıcılar için komisyon indirimi listelemiyor. Bitget'te maliyetini düşüren şey BGB tokenı: Spot veya marjin komisyonlarını BGB ile ödemek %20 indirim sağlar.",
    ],
  },
  signup: {
    methods: ["e-posta adresi", "cep telefonu numarası", "Google", "Telegram", "kripto cüzdan"],
    steps: [
      {
        title: "Bitget kayıt sayfasını aç",
        text: "Bu sayfadaki kayıt düğmesini kullan. Bitget, referans kayıt sayfasını JZVEV1M3 kodu girilmiş ve kilitlenmiş hâlde açar.",
      },
      {
        title: "E-posta adresini veya cep telefonu numaranı gir",
        text: "Bitget'in kayıt rehberinde Google, Telegram veya cüzdanla kayıt seçeneği de yer alıyor.",
      },
      {
        title: "Referans kodunu kontrol et ve şartları kabul et",
        text: "“Referral code” alanında JZVEV1M3 görünmeli. Şartları kabul et ve “Next” düğmesine tıkla.",
      },
      {
        title: "Şifreni belirle",
        text: "8 ile 32 karakter arasında olmalı.",
      },
      {
        title: "Captcha'yı geç ve 6 haneli kodu gir",
        text: "Güvenlik doğrulamasını tamamla ve Bitget'in e-postana ya da telefonuna gönderdiği 6 haneli kodu yaz. Kayıt için hiçbir belge gerekmez.",
      },
      {
        title: "Kimliğini doğrula",
        text: "Kimlik belgesi ve yüz doğrulamasıyla Seviye 1 doğrulamasını tamamla – bu adım olmadan para yatıramaz, işlem yapamaz ve para çekemezsin.",
      },
    ],
    kycShort: "Tüm kullanıcılar için zorunlu",
    kyc: "Evet. Bitget, tüm yeni kullanıcıların kayıt olur olmaz kimlik doğrulamasını tamamlaması gerektiğini belirtiyor; bu kural 1 Eylül 2023'ten beri uygulanıyor. Doğrulama olmadan para yatıramaz, işlem yapamaz ve – zincir üstü (on-chain) çekimler ile dahili transferler dahil – para çekemezsin. Seviye 1, bir kimlik belgesi ve yüz doğrulamasından oluşur; adres belgesi yalnızca Bitget isterse gerekir. Doğrulamadan sonra standart para çekme limiti 24 saatte 3 milyon USDT'dir.",
    documents: "Devlet tarafından verilmiş kimlik kartı, pasaport, sürücü belgesi veya oturma izni ile birlikte yüz doğrulaması.",
    minAge: "18 yaş",
  },
  welcomeTasks: [
    { task: "Hoş geldin paketi: üç gün check-in yap", reward: "200 USDT'lik BTC USDT-M vadeli işlem pozisyon artırma kuponu" },
    { task: "Görev: en az 1.000 USDT net para yatırma, 100 USDT Spot hacmi ve 300.000 USDT vadeli işlem hacmi", reward: "50 USDT" },
    { task: "Görev: en az 20.000 USDT net para yatırma, 10.000 USDT Spot hacmi ve 2.000.000 USDT vadeli işlem hacmi", reward: "400 USDT" },
    { task: "Görev: en az 100.000 USDT net para yatırma, 100.000 USDT Spot hacmi ve 80.000.000 USDT vadeli işlem hacmi", reward: "6.000 USDT" },
    { task: "Referans: 15 gün içinde en az 200 USDT net para yatırma ve şartları karşılayan ilk işlem", reward: "9 ABD doları değerinde BTC airdrop'u ve bir Mystery Box (500 USDT'ye kadar)" },
    { task: "Referans: 100.000 USDT'yi aşan toplam işlem hacmi", reward: "18 ABD doları değerinde BTC ve bir Mystery Box (1.000 USDT'ye kadar)" },
  ],
  tokenDiscount:
    "Spot veya marjin komisyonlarını BGB ile ödemek %20 indirim sağlar – standart kullanıcılar için %0,1 yerine %0,08. Bitget'in komisyon tablosunda vadeli işlemler için BGB indirimi yok.",
  extraFeeMarkets: ["Coin-M vadeli işlemler", "USDC-M vadeli işlemler"],
  sourceLabels: [
    "Bitget: Kayıt nasıl yapılır (web sitesi)",
    "Bitget: Kayıt nasıl yapılır (uygulama)",
    "Bitget: Referans programı ve kuralları",
    "Bitget Yardım Merkezi: kayıttan sonra referans kodu ekleme",
    "Bitget: Yeni kullanıcı ödülleri (hoş geldin paketi)",
    "Bitget: İşlem bonusu kuralları",
    "Bitget: Komisyon tablosu",
    "Bitget: İşlem komisyonlarını BGB ile ödeme",
    "Bitget: Kimlik doğrulama (KYC)",
    "Bitget: Para çekme limitleri",
    "Bitget: Kullanım Koşulları (yasaklı ülkeler)",
    "Bitget: Hakkımızda",
    "Bitget: Düzenleyici lisanslar",
    "Bitget: Rezerv kanıtı (Proof of Reserves)",
    "Bitget: Koruma Fonu (Protection Fund)",
    "Bitget: Takipçiler için kopya işlem",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Marjin", "Vadeli işlemler", "Kopya işlem", "Stock perps ve CFD'ler"],
  bonusHeadline: "6.200 USDT'ye kadar hoş geldin paketi",
  benefits: [
    "6.200 USDT'ye kadar yeni kullanıcı ödülü; ilki, üç gün check-in yapınca verilen 200 USDT'lik vadeli işlem pozisyon artırma kuponu",
    "Referans programında davet edilen kullanıcıya özel ödüller: BTC airdrop'ları ve 500 ile 1.000 USDT'ye kadar Mystery Box'lar",
    "Tek referans; Spot, marjin, vadeli işlemler, kopya işlem, stock perps ve CFD'lerin hepsinde geçerli",
    "Komisyonları BGB ile ödersen Spot ve marjin komisyonlarında %20 indirim",
  ],
  benefitNote:
    "6.200 USDT bir üst sınırdır: 200 USDT vadeli işlem pozisyon artırma kuponu olarak verilir, geri kalanı ise yalnızca ulaştığın en yüksek kademenin ödendiği bir para yatırma ve işlem görevinden gelir; yani en büyük ödül için 100.000 USDT net para yatırma ve 80 milyon USDT vadeli işlem hacmi gerekir. Şartların yedi gün içinde karşılanması gerekir; vadeli işlemlerde yalnızca taker emirleri sayılır, kopya, API ve bot işlemleri hariç tutulur. Ödüller manuel olarak talep edilir ve işlem bonusları nakit olarak çekilemez. Referans ödülleri, davet edenin Bitget kampanyasına kayıtlı olmasına bağlıdır ve affiliate hesaplarına ya da bu hesaplar üzerinden ödenmez.",
  headquarters: "Bitget belirtmiyor (Kullanım Koşulları'nda adı geçen işletmeci: BTG Technology Holdings Limited)",
  regulation: "Avustralya (AUSTRAC), El Salvador (BSP, DASP), Arjantin (VASP), Güney Afrika, Meksika, Mauritius ve Gürcistan'da kayıt veya lisanslar",
  users: "150 milyon kayıtlı kullanıcı (Bitget'e göre)",
  assets: "600+ Spot işlem çifti, 200+ vadeli işlem çifti",
  maxLeverage: "150x'e kadar (BTC ve ETH vadeli işlemleri)",
  feeNote: "VIP seviyesi yükseldikçe komisyon düşer.",
  products: ["USDT-M, Coin-M ve USDC-M vadeli işlemler", "Spot", "Marjin", "Kopya işlem", "Trading botları", "Tokenize hisseler ve CFD'ler", "Earn", "Bitget Wallet"],
  tagline: "Kripto kopya işlemin adresi",
  quickAnswer:
    "Bitget referans kodu: JZVEV1M3. Kayıt olurken kodu “Referral code” alanına gir – bu sayfadaki düğme alanı senin yerine doldurur ve kilitler. Kodun kayıt sırasında girilmesi şart: Bitget Yardım Merkezi'ne göre kodlar sonradan eklenemez veya değiştirilemez, tek istisna destek talebi. Yeni kullanıcılar 6.200 USDT'ye kadar hoş geldin paketi alabilir; ilk adım, üç gün check-in yapınca verilen 200 USDT'lik vadeli işlem kuponu.",
  about: [
    "2018'de kurulan Bitget, 150 milyon kayıtlı kullanıcıya ve günlük 20 milyar USDT'yi aşan işlem hacmine ulaştığını açıklıyor. Adını kopya işlemle (copy trading) duyuran borsa, kendini en büyük kripto kopya işlem platformu olarak tanımlıyor: Takipçiler bir lider trader seçer, 50 USDT'den başlayan bir tutar belirler ve Bitget o trader'ın pozisyonlarını otomatik olarak kopyalar; lider trader ise takipçinin kârından pay alır.",
    "Platformda 600'den fazla Spot işlem çifti ve 200'ü aşkın vadeli işlem çifti listeleniyor; kaldıraç BTC ve ETH'de 150x'e, marjin işlemlerde 10x'e kadar çıkıyor. Standart kullanıcılar Spot'ta %0,1 – BGB ile %0,08 – öder; USDT-M, Coin-M ve USDC-M vadeli işlemlerde ise maker %0,02 / taker %0,06 komisyon uygulanır. Trading botları, Earn ürünleri, tokenize hisseler, CFD'ler ve kendi kendine saklamalı (self-custody) Bitget Wallet yelpazeyi tamamlıyor.",
    "Bitget her ay Merkle ağacı tabanlı bir rezerv kanıtı yayımlıyor; 12 Kasım 2026 tarihli anlık görüntü toplam rezerv oranını %124 olarak gösterdi: BTC için %127, USDT için %114 ve ETH için %103. Koruma Fonu'nun (Protection Fund) değeri 274 milyon ABD doları; fon, kullanıcının kusurundan kaynaklanmayan ve tüm platformu etkileyen olaylardaki kayıpları karşılamak için tutuluyor. Bitget; Avustralya, El Salvador, Arjantin, Güney Afrika, Meksika, Mauritius ve Gürcistan'daki kayıt ve lisanslarını listeliyor, Kullanım Koşulları ise aralarında ABD, Kanada, Almanya, Fransa ve Avusturya'nın da bulunduğu uzun bir ülke listesini kapsam dışı bırakıyor.",
  ],
  highlights: [
    { title: "Kopya işlemde lider", text: "Lider trader'ları 50 USDT'den itibaren takip et ve pozisyonlarını otomatik olarak kopyala." },
    { title: "274 milyon ABD dolarlık Koruma Fonu", text: "Platform genelindeki olaylardan doğan kayıplar için ayrılmış özel bir fon." },
    { title: "Rezerv oranı %124", text: "Aylık Merkle ağacı rezerv kanıtı, son anlık görüntü 12 Kasım 2026." },
  ],
  pros: [
    "50 USDT'den başlayan vadeli işlem ve Spot kopya işlemi",
    "%124 oranında aylık rezerv kanıtı ve 274 milyon ABD dolarlık Koruma Fonu",
    "Maker %0,02 / taker %0,06 standart vadeli işlem komisyonu ve BGB ile Spot komisyonlarında %20 indirim",
    "Referans bağlantısı kodu otomatik doldurup kilitler, bu yüzden yanlış yazılamaz",
  ],
  cons: [
    "Referans kodu kayıttan sonra eklenemez – tek istisna bir destek talebi açmak",
    "ABD, Kanada, Almanya, Fransa, Avusturya, Japonya ve Singapur'da kullanılamıyor",
    "En yüksek hoş geldin ödülü çok büyük bir para yatırma ve işlem hacmi gerektiriyor",
    "Kopya işlem yanıltıcı bir güvenlik hissi yaratabilir – geçmiş sonuçlar gelecekteki getirilerin garantisi değildir",
  ],
  bestFor: [
    "Deneyimli vadeli işlem trader'larını kopyalamak isteyenler",
    "Altcoin vadeli işlemleri yapan trader'lar",
    "Kripto üzerinden hisse senetlerinde de pozisyon almak isteyen kullanıcılar",
  ],
  signupTip:
    "Kayıt olur olmaz kimliğini doğrula – Bitget doğrulama olmadan para yatırmaya, işlem yapmaya ve para çekmeye izin vermiyor – ve 200 USDT'lik vadeli işlem pozisyon artırma kuponunu almak için üç gün check-in yap.",
  safety:
    "Bitget her ay Merkle ağacı tabanlı bir rezerv kanıtı yayımlıyor – 12 Kasım 2026 anlık görüntüsünde toplam %124 – ve değeri 274 milyon ABD doları olan bir Koruma Fonu tutuyor; fona yapılan talepleri Bitget değerlendiriyor. Kayıt olurken iki faktörlü kimlik doğrulamayı etkinleştir. Kopya işlem sonuçları geçmiş performansı gösterir ve gelecekteki getirileri garanti etmez.",
  restricted:
    "Bitget'in Kullanım Koşulları (son güncelleme: 4 Kasım 2026) yasaklı ülkeler arasında diğerlerinin yanı sıra şunları sayıyor: Avusturya, Belarus, Kanada, Küba, Fransa, Almanya, Hong Kong, İran, Japonya, Kazakistan, Malezya, Kuzey Kore, Rusya, Singapur, Sudan, Tayland, Birleşik Arap Emirlikleri ve toprakları dahil ABD. Bitget'in doğrulama sayfası bunlara ek olarak Hindistan, İtalya ve İspanya'yı da sayıyor. Kısıtlamayı aşmak için VPN kullanmak yasaktır.",
  faqs: [
    {
      topic: "referral",
      q: "JZVEV1M3 Bitget referans kodu geçerli mi?",
      a: "Evet. 16 Kasım 2026'da bu sayfadaki bağlantı, Bitget'in referans kayıt sayfasını JZVEV1M3 referans kodu alanına girilmiş ve kilitlenmiş hâlde açtı.",
    },
    {
      topic: "referral",
      q: "Bitget kayıt bağlantısı neden farklı bir alan adında veya dilde açılıyor?",
      a: "Bitget'in paylaşım bağlantıları, borsanın kendi alan adlarından birkaçı üzerinden yönlendirilir – kontrolümüzde aynı bağlantı bir kez bitget.com, bir kez de bitget.site adresinde açıldı – ve bağlantının oluşturulduğu dilde açılabilir. JZVEV1M3 referans kodu her seferinde alana girilmiş olarak geldi.",
    },
    {
      topic: "referral",
      q: "Bitget referans programında hangi işlemler sayılıyor?",
      a: "Kopya işlem ve marjin dahil Spot işlemler, vadeli işlemler, stock perps, commodity perps (emtia perpetual'ları), spot hisse senedi işlemleri ve CFD işlemleri.",
    },
    {
      topic: "referral",
      q: "Bitget Mystery Box nedir?",
      a: "Bitget referans programının ödüllerinden biri. İçinden USDT, vadeli işlem bonusları, vadeli işlem pozisyon artırma kuponları, Earn APR kuponları veya Spot komisyon iadesi kuponları çıkabilir ve hesabına tanımlandıktan sonraki 30 gün içinde talep edilmesi gerekir.",
    },
    {
      topic: "signup",
      q: "Bitget'e kayıt olmak için belge gerekiyor mu?",
      a: "Hesap açmak için gerekmiyor – Bitget'in rehberine göre kayıt için belge istenmez. Ancak ardından gelen kimlik doğrulaması için bir kimlik belgesine ve yüz doğrulamasına ihtiyacın var; doğrulama olmadan para yatıramaz, işlem yapamaz ve para çekemezsin.",
    },
    {
      topic: "signup",
      q: "Bitget şifre kuralları nelerdir?",
      a: "Bitget şifresi 8 ile 32 karakter arasında olmalıdır.",
    },
    {
      topic: "signup",
      q: "Bitget'e Google veya Telegram ile kayıt olabilir miyim?",
      a: "Evet. Bitget'in kayıt rehberine göre e-posta adresi veya cep telefonu numarasının yanı sıra doğrudan Google, Telegram ya da bir cüzdanla da kayıt olabilirsin.",
    },
    {
      topic: "signup",
      q: "Bitget KYC'siz kullanılabilir mi?",
      a: "Hayır. 1 Eylül 2023'ten bu yana tüm yeni kullanıcıların kayıttan hemen sonra kimlik doğrulamasını tamamlaması gerekiyor; doğrulama olmadan Bitget para yatırmaya, işlem yapmaya ve para çekmeye izin vermiyor.",
    },
    {
      topic: "bonus",
      q: "Bitget hoş geldin bonusu nedir?",
      a: "Bitget, yeni kullanıcılara 6.200 USDT'ye kadar ödül vaat ediyor. Bu tutar, üç gün check-in yapınca verilen 200 USDT'lik BTC USDT-M vadeli işlem pozisyon artırma kuponundan ve 50, 400 veya 6.000 USDT değerindeki bir para yatırma ve işlem görevinden oluşur; görevde yalnızca ulaştığın en yüksek kademe ödenir.",
    },
    {
      topic: "bonus",
      q: "Bitget 6.000 USDT ödülü için ne yapmam gerekiyor?",
      a: "Yedi gün içinde en az 100.000 USDT net para yatırma, 100.000 USDT Spot hacmi ve 80.000.000 USDT vadeli işlem hacmi. 50 USDT'lik kademe için 1.000 USDT yatırman, 100 USDT Spot hacmi ve 300.000 USDT vadeli işlem hacmi gerekir. Vadeli işlemlerde yalnızca taker emirleri sayılır; kopya, API ve bot işlemleri hariç tutulur.",
    },
    {
      topic: "bonus",
      q: "Bitget işlem bonusları çekilebilir mi?",
      a: "Hayır. Bitget, işlem bonuslarının çekilemeyeceğini ve nakit olarak alınamayacağını belirtiyor. Görev süresi bittikten sonraki üç gün içinde para çekersen görev ödülünü de kaybedersin.",
    },
    {
      topic: "fees",
      q: "Bitget vadeli işlem komisyonları ne kadar?",
      a: "Standart kullanıcılar USDT-M, Coin-M ve USDC-M vadeli işlemlerde maker için %0,02, taker için %0,06 öder.",
    },
    {
      topic: "fees",
      q: "Bitget BGB komisyon indirimi ne kadar?",
      a: "Spot ve marjin komisyonlarında %20; bu indirim standart Spot oranını %0,1'den %0,08'e düşürür. Bitget'in komisyon tablosunda vadeli işlemler için BGB indirimi yer almıyor.",
    },
    {
      topic: "fees",
      q: "Bitget'te maksimum kaldıraç kaç?",
      a: "BTC ve ETH vadeli işlemlerinde 150x'e kadar; üst sınır coine göre değişir. Marjin işlemlerde kaldıraç 10x'e kadar çıkar. Yüksek kaldıraç likidasyon riskini ciddi ölçüde artırır.",
    },
    {
      topic: "fees",
      q: "Bitget kopya işlem nasıl çalışır, ücreti ne kadar?",
      a: "Bir lider trader seçer, tutarını belirlersin – en az 50 USDT – ve Bitget o trader'ın pozisyonlarını senin hesabında kopyalar. Lider trader kârından pay alır; Bitget'in kendi yardım sayfaları bu pay için farklı aralıklar veriyor, bu yüzden takip etmeden önce trader'ın profilinde gösterilen oranı kontrol et.",
    },
    {
      topic: "safety",
      q: "Bitget Koruma Fonu (Protection Fund) nedir?",
      a: "Bitget'in, kullanıcının kendi eyleminden kaynaklanmayan, platform genelindeki olaylarda oluşan kullanıcı kayıplarını karşılamak için tuttuğu fon. Bitget, 4.204,71 BTC olarak tutulan fonun değerini 274 milyon ABD doları olarak açıklıyor ve talepleri kendisi değerlendiriyor.",
    },
    {
      topic: "safety",
      q: "Bitget ABD'de veya Almanya'da kullanılabilir mi?",
      a: "Hayır. ABD, Almanya, Fransa, Avusturya, Kanada, Japonya ve Singapur'un hepsi Bitget Kullanım Koşulları'ndaki yasaklı ülkeler listesinde yer alıyor.",
    },
    {
      topic: "safety",
      q: "Bitget rezerv kanıtı yayımlıyor mu?",
      a: "Evet, her ay Merkle ağacı kanıtı olarak. 12 Kasım 2026 tarihli anlık görüntü toplam rezerv oranını %124 olarak gösterdi: BTC için %127, USDT için %114 ve ETH için %103.",
    },
  ],
};
