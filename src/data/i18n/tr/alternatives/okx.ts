import type { AlternativesText } from "../../../types";

export const okx: AlternativesText = {
  role: "Düşük komisyon, opsiyon ve MiCA",
  pick: "OKX, düşük komisyonu opsiyonlar ve AEA için MiCA yetkili bir platformla birleştiriyor",
  pitch:
    "OKX, Spot'ta %0,08 maker / %0,10 taker, vadeli ve sürekli vadeli kontratlarda %0,02 / %0,05 komisyon alıyor, opsiyonları %0,03 ile sunuyor ve her ay rezerv kanıtı yayımlıyor. AEA'da yaşayanlar için MiCA yetkili bir platform var: OKX Europe – orada sürekli vadeli kontratlar 10x ile sınırlı.",
  chooseIf: [
    "Spot, vadeli işlem ve opsiyonda düşük standart komisyon istiyorsan",
    "AEA'da yaşıyorsan ve MiCA kapsamında yetkili bir borsa istiyorsan",
    "Kendi bakiyenle kontrol edebileceğin aylık bir rezerv kanıtı senin için önemliyse",
  ],
  thinkTwiceIf: [
    "Avrupa'da yüksek kaldıraç istiyorsan – OKX Europe sürekli vadeli kontratlarını (X-Perps) 10x ile sınırlıyor",
    "Kanada, Hindistan, Japonya veya Hong Kong'da yaşıyorsan – OKX bunları kısıtlı bölge sayıyor",
    "Referans kodunu girmeyi unutabilirsen – OKX kodu kayıttan sonra eklemiyor",
  ],
  intro:
    "OKX, düşük standart komisyonları ve aylık rezerv kanıtıyla Spot ve türev işlemlerde en büyük borsalardan biri. İnsanlar OKX alternatifini çoğunlukla şu nedenlerle arıyor: işlem yapabileceğin ürünler büyük ölçüde nerede yaşadığına bağlı – OKX Europe platformunda sürekli vadeli kontratlarda kaldıraç 10x ile sınırlı –, global site 100x'te duruyor ya da OKX Kanada, Hindistan, Japonya ve Hong Kong'a kapalı. Bu sayfa en yakın altı alternatifi, borsaların kendi sitelerindeki rakamlarla OKX ile karşılaştırıyor.",
  reasons: [
    {
      title: "Kaldıraç sınırlı – özellikle Avrupa'da",
      text: "Global sitede en yüksek kaldıraç 100x ve BTC-USDT, ETH-USDT gibi sürekli vadeli kontratlarda sunuluyor. OKX Europe platformunda sürekli vadeli ürünün adı X-Perps; kaldıraç 10x ile sınırlı, büyük pozisyonlarda daha da düşük.",
    },
    {
      title: "OKX yaşadığın yerde kısıtlı",
      text: "OKX, Kanada, Hindistan, Japonya, Hong Kong, Malezya ve ABD'deki bazı yargı bölgelerini kısıtlı bölgeler arasında sayıyor (liste 14 Kasım 2026'da güncellendi). Birleşik Krallık, Avustralya, Brezilya ve Güney Kore'de ise türev ürünler kısıtlı.",
    },
    {
      title: "Daha kısa bir coin listesi",
      text: "OKX Europe sayfalarında 270'ten fazla coin olduğu belirtiliyor – altcoin odaklı borsaların kataloğuna kıyasla daha dar bir seçki.",
    },
    {
      title: "Hoş geldin ödülleri kilitli",
      text: "OKX Europe platformunda kripto ödüller 45 güne kadar kilitli kalıyor – işlemde kullanılabiliyor ama çekilemiyor. Global sitede ödüllerin 30 gün içinde açılması gerekiyor ve tamamlanmamış görevler kayıttan 180 gün sonra sona eriyor.",
    },
    {
      title: "Kaçırılan referans kodu sonradan eklenemiyor",
      text: "OKX, davet kodlarının yalnızca kayıt sırasında geçerli olduğunu ve geriye dönük olarak eklenemeyeceğini belirtiyor. Hesabı silip yeniden kaydolmak da işe yaramıyor.",
    },
    {
      title: "Telefon numarası zorunlu",
      text: "OKX her hesapta hem e-posta adresi hem de telefon numarası istiyor; işlem yapma, para yatırma ve para çekmeden önce de kimlik doğrulaması şart.",
    },
  ],
  stayIf: [
    "Komisyona dikkat ediyorsan: Spot'ta %0,08 / %0,10 ve vadeli işlemlerde %0,02 / %0,05, düşük standart oranlar",
    "Sürekli vadeli kontratların yanında opsiyon veya vade tarihli vadeli kontratlarla da işlem yapıyorsan",
    "AEA'da yaşıyorsan ve MiCA yetkili bir platformda kalmak istiyorsan",
  ],
  faqs: [
    {
      q: "OKX Europe platformunda maksimum kaldıraç kaç?",
      a: "10x. OKX Europe platformunda sürekli vadeli ürünün adı X-Perps; kaldıraç 10x ile sınırlı, büyük pozisyonlarda daha da düşük. Global sitede ise OKX, BTC-USDT ve ETH-USDT gibi sürekli vadeli kontratlarda 100x'e kadar çıkıyor.",
    },
    {
      q: "OKX Kanada, Hindistan, Japonya veya Hong Kong'da kullanılabilir mi?",
      a: "Hayır. Dördü de OKX'in kısıtlı bölgeler listesinde yer alıyor (son güncelleme 14 Kasım 2026); listede Malezya, Afganistan, Nepal, Özbekistan ve yaptırım uygulanan ülkeler de var.",
    },
    {
      q: "OKX Birleşik Krallık'ta kullanılabilir mi?",
      a: "Yalnızca kısmen. OKX, Birleşik Krallık'ta türev ürünlerle ilgili, CeFi ile ilgili ve P2P hizmetleri kısıtlıyor. Birleşik Krallık'ta yaşayanlar global platformun Birleşik Krallık sayfalarını (okx.com/en-gb) tam ürün yelpazesi olmadan kullanıyor.",
    },
  ],
  reserves: "BTC %108, ETH %101, USDT %106, USDC %100 (aylık rapor, 1 Kasım 2026 tarihli doğrulama)",
  fund: "Yalnızca marjin ve türev işlemleri için güvenlik fonu – likidasyon açıklarını karşılar",
  featureNotes: {
    copyTrading: "Global sitede Spot ve vadeli kopya işlem (copy trading)",
    tradingBots: "Spot grid, vadeli grid ve diğer bot stratejileri",
    options: "Global sitede %0,03 maker / %0,03 taker komisyonla opsiyon",
    demoTrading: "OKX hesabınla kullanılan demo işlem ortamı",
    margin: "Global sitede 10x'e kadar Spot marjin",
    p2p: "Global sitede emanet (escrow) korumalı P2P pazar yeri",
    fiat: "Bölgeye göre kart, banka havalesi, PayPal ve Apple Pay; OKX Europe platformunda SEPA, Visa ve Mastercard",
    earn: "Simple Earn, On-chain Earn ve ikili yatırım (dual investment)",
    launchpad: "Global sitede Jumpstart token satışları",
    web3Wallet: "OKX Wallet, kendi saklamalı (self-custody), 130'dan fazla ağ",
    card: "OKX Card, stablecoin bakiyesinden ödeme yapan bir Mastercard",
  },
  countryNotes: {
    us: "OKX US, yalnızca onaylı ABD bölgelerinde",
    uk: "türev, CeFi bağlantılı ve P2P hizmetlerinde kısıtlama",
    de: "OKX Europe",
    fr: "OKX Europe",
    nl: "OKX Europe",
    es: "OKX Europe",
    it: "OKX Europe",
    au: "OKX Australia",
    sg: "OKX Singapore",
    ae: "Dubai'deki OKX Middle East",
  },
  regional:
    "OKX birkaç bölge için ayrı platformlar işletiyor: AEA sakinleri için Malta'daki OKX Europe Limited (okx.com/en-eu), MFSA tarafından MiCA kapsamında yetkilendirilmiş; onaylı ABD bölgeleri için OKX US (OKX INC., FinCEN'e kayıtlı bir para hizmetleri işletmesi); OKX Australia; OKX Singapore (OKX SG Pte. Ltd.); Dubai'de VARA lisanslı OKX Middle East Fintech FZE; ve OKX Brazil. Geri kalan herkese Seyşeller'deki Aux Cayes FinTech Co. Ltd. hizmet veriyor. Her bölgesel platformun kendi ürün yelpazesi var – örneğin OKX Europe sürekli vadeli kontratlarda kaldıracı 10x ile sınırlıyor.",
  mica: "OKX Europe Limited, Malta, MFSA tarafından yetkilendirilmiş",
  sourceLabels: [
    "OKX: Spot kopya işlem",
    "OKX: Spot grid trading botu",
    "OKX: Opsiyon işlemleri",
    "OKX API dokümantasyonu: demo işlem",
    "OKX: Spot marjin işlemleri",
    "OKX: P2P işlemleri",
    "OKX: Kart veya banka havalesiyle kripto satın alma",
    "OKX: Simple Earn",
    "OKX: Jumpstart",
    "OKX Wallet",
    "OKX: OKX Card",
    "OKX Europe: Hizmet Şartları (AEA)",
    "OKX US",
    "OKX Australia: Hakkında",
    "OKX UK",
  ],
};
