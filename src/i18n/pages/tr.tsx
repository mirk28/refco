import Link from "next/link";
import { legal, site } from "@/config/site";
import type { PageTexts, TextSection } from "./en";

/**
 * The text pages in Turkish. Same pages and sections as `./en.tsx`.
 *
 * Written for Turkish readers, informal "sen". "borsa", "referans kodu", "komisyon" / "işlem ücreti". The
 * operator of the website is "işletmeci"; a controller under the GDPR is "veri sorumlusu", a processor
 * "veri işleyen". Articles of law are cited as "GDPR md. 6/1-f". Page names as in the footer: "Künye",
 * "Gizlilik Politikası", "Satış Ortaklığı Açıklaması", "Hakkımızda ve Metodoloji".
 * Names, addresses and email addresses stay as they are in `src/config/site.ts`.
 *
 * The legal pages (affiliate disclosure, imprint, privacy policy) carry `translationNotice`: the English
 * text is the binding one.
 */

const section = (s: TextSection) => s;

/** A plain link, because the English page has its own root layout and loads as a new document. */
const translationNotice = (englishHref: string) => (
  <p className="muted">
    <strong>Not:</strong> Bu sayfa, kolaylık sağlamak amacıyla sunulan Türkçe bir sürümdür; bağlayıcı olan{" "}
    <a href={englishHref} hrefLang="en">
      İngilizce sürümdür
    </a>
    .
  </p>
);

export const tr: PageTexts = {
  layout: {
    aside: "Bu sayfada ve daha fazlası",
    onThisPage: "Bu sayfada",
    referralCodes: "Referans kodları",
    compare: "Borsaları karşılaştır",
    alternativesOf: (name) => <>{name} alternatifleri</>,
    allComparisons: "Tüm borsa karşılaştırmaları →",
  },

  home: "Ana sayfa",

  /* ------------------------------------ About ------------------------------------ */
  about: {
    title: `${site.name} Hakkında ve Metodolojimiz`,
    description: `${site.domain} sitesini kimin işlettiği, verilerimizin nereden geldiği ve kripto para borsalarını nasıl incelediğimiz.`,
    ldName: `${site.name} Hakkında`,
    crumb: "Hakkımızda",
    intro: () => (
      <>
        <span className="eyebrow">Hakkımızda</span>
        <h1>{site.name} Hakkında</h1>
        <p className="lead">
          {site.name} ({site.domain}), trader'ların doğru kripto türev borsasına kaydolmasına yardımcı olur – çalışan bir referansla ve para
          yatırmadan önce gerçekten önemli olan bilgilerle.
        </p>
      </>
    ),
    sections: {
      "what-we-do": section({
        nav: "Ne yapıyoruz",
        heading: "Ne yapıyoruz",
        body: () => (
          <p>
            CoinMarketCap'in türev borsaları sıralamasındaki en büyük borsalara odaklanıyor ve her borsa için aynı yapıda bir sayfa yayınlıyoruz: kısa
            cevap, temel bilgiler, komisyonlar, dürüst bir tanıtım, artılar ve eksiler, güvenlik notları, hangi ülkelerde kullanılabildiği ve sıkça
            sorulan sorular. Böylece borsaları kolayca karşılaştırabilirsin.
          </p>
        ),
      }),
      methodology: section({
        nav: "Metodolojimiz",
        heading: "Metodolojimiz",
        body: (c) => (
          <ul>
            <li>
              <strong>Piyasa verileri</strong> (açık pozisyon / open interest, 24 saatlik hacim, piyasa sayısı) CoinMarketCap'in türev sıralamasından
              alınır ve her sayfada tarihiyle birlikte gösterilir.
            </li>
            <li>
              <strong>Referans kodları, kayıt ve doğrulama</strong> – kodun nereye girildiği, sonradan eklenip eklenemeyeceği, kayıt adımları ve KYC
              kuralları – her borsanın kendi web sitesinden ve yardım merkezinden okunur. Her borsa sayfası, kontrolde esas alınan resmi sayfaları
              listeler.
            </li>
            <li>
              <strong>Komisyonlar ve kaldıraç</strong>, her borsanın resmi komisyon tablosundan standart (VIP olmayan) seviye için alınır.
            </li>
            <li>
              <strong>Hoş geldin bonusları</strong>, borsanın belirttiği şekilde ve koşullarıyla birlikte aktarılır. Ülkeden ülkeye farklılık gösterir
              ve sık sık değişir.
            </li>
            <li>
              <strong>Lisanslar ve geçmişte yaşanan olaylar</strong>, borsanın kendi lisans sayfalarından ve resmi açıklamalarından alınır.
            </li>
            <li>
              <strong>Borsa karşılaştırmaları</strong> – alternatif sayfaları ve <Link href={c.links.compare}>birebir karşılaştırmalar</Link> – borsa
              sayfalarıyla aynı rakamları kullanır. Bir ürün yalnızca borsa onu kendi sitesinde gösteriyorsa sunuluyor olarak işaretlenir; ülke
              erişimi ise her borsanın kendi kullanım koşullarından, kısıtlı ülkeler listelerinden ve bölgesel sitelerinden alınır. Bir konuda hangi
              borsanın “önde” olduğu bu rakamlardan okunur; sıralamayı biz yapmayız.
            </li>
            <li>
              <strong>İnceleme döngüsü:</strong> veriler düzenli olarak yeniden kontrol edilir; güncel inceleme tarihi: {c.reviewed}.
            </li>
          </ul>
        ),
      }),
      independence: section({
        nav: "Bağımsızlık",
        heading: "Bağımsızlık",
        body: (c) => (
          <p>
            Listelediğimiz borsalardan referans komisyonu kazanıyoruz – ayrıntılar{" "}
            <Link href={c.links.affiliateDisclosure}>Satış Ortaklığı Açıklaması</Link> sayfamızda. Bu, yayınladığımız bilgileri asla değiştirmez;
            zayıf yönleri ve kısıtlamaları her zaman belirtiriz.
          </p>
        ),
      }),
      operator: section({
        nav: `${site.name} sitesini kim işletiyor?`,
        heading: <>{site.name} sitesini kim işletiyor?</>,
        body: (c) => (
          <p>
            {site.name} bir şirket değil, bireysel olarak işletilen bir web sitesidir. İşletmecinin adı <Link href={c.links.imprint}>Künye</Link>{" "}
            sayfasında yer alır. {site.name} bir borsa değildir ve paranı hiçbir zaman almaz ya da saklamaz – hesaplar doğrudan borsada açılır.
          </p>
        ),
      }),
      contact: section({
        nav: "İletişim",
        heading: "İletişim",
        body: () => (
          <p>
            Güncelliğini yitirmiş bir bilgi mi gördün? <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> adresine e-posta gönder –
            hataları hızla düzeltiriz.
          </p>
        ),
      }),
    },
  },

  /* ------------------------------ Affiliate disclosure ------------------------------ */
  affiliateDisclosure: {
    title: "Satış Ortaklığı Açıklaması",
    description: `${site.name} nasıl gelir elde ediyor, hangi bağlantılar reklam ve bu neden kripto para borsaları hakkında yayınladığımız bilgileri etkilemiyor?`,
    intro: (c) => (
      <>
        <h1>Satış Ortaklığı Açıklaması</h1>
        <p className="lead">Güvenin temeli şeffaflıktır. {site.name} sitesinin nasıl finanse edildiğini burada tüm açıklığıyla anlatıyoruz.</p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      earn: section({
        nav: "Nasıl para kazanıyoruz",
        heading: "Nasıl para kazanıyoruz",
        body: () => (
          <p>
            {site.name}, bu sitede yer alan borsaların referans ve satış ortaklığı (affiliate) programlarına katılır. Bağlantılarımızdan biri
            üzerinden hesap açtığında borsa, bu sitenin işletmecisine bir komisyon ödeyebilir – genellikle hesabının ürettiği işlem ücretlerinden bir
            pay. Bu yüzden asla daha fazla ödemezsin: referans, işlem ücretlerini artırmaz; referansla yapılan kayıtlarda çoğu zaman sana işlem ücreti
            indirimi veya hoş geldin ödülü de verilir. Komisyonu sen değil, borsa öder.
          </p>
        ),
      }),
      advertising: section({
        nav: "Hangi bağlantılar reklamdır",
        heading: "Hangi bağlantılar reklamdır",
        body: () => (
          <p>
            Bu sitede bir borsaya yönlendiren her bağlantı ve buton – örneğin “Binance'e kaydol”, “Kaydol” veya “Ödülü al” – ve gösterilen her referans
            kodu reklamdır: ilgili borsa için yapılan ve karşılığında bize ödeme yapılabilecek ticari bir iletişimdir. Bu bağlantılar arama
            motorlarının yönergelerine uygun olarak <code>rel=&quot;sponsored&quot;</code> ile işaretlenir ve bu açıklamaya her sayfadan bağlantı
            verilir.
          </p>
        ),
      }),
      independence: section({
        nav: "Bu neleri etkilemez",
        heading: "Bu neleri etkilemez",
        body: () => (
          <ul>
            <li>
              Komisyonlar, kaldıraç, lisanslar, doğrulama kuralları ve ülke kısıtlamaları borsaların kendi sayfalarından, piyasa verileri ise
              CoinMarketCap'ten alınır – pazarlama anlaşmalarından değil. Her borsa sayfası kaynaklarını listeler.
            </li>
            <li>Her borsanın zayıf yönlerini, güvenlik olaylarını ve bölgesel kısıtlamalarını yayınlarız.</li>
            <li>
              Borsaların sırası, CoinMarketCap'in türev sıralamasındaki yerlerine göre belirlenir. Hiçbir borsa daha iyi bir sıra için para ödeyemez.
            </li>
            <li>Bir karşılaştırmada hangi borsanın “önde” olduğu, yayınlanan rakamlardan hesaplanır. Bu satın alınamaz.</li>
          </ul>
        ),
      }),
      who: section({
        nav: "Muhatabın kim",
        heading: "Muhatabın kim",
        body: () => (
          <p>
            {site.name} bir borsa ya da aracı kurum değil, bir bilgi sitesidir. Paranı veya kripto varlıklarını hiçbir zaman almaz ya da saklamaz.
            Kaydolursan sözleşmen yalnızca borsayla ve borsanın kendi koşullarına göre kurulur. Bir borsayı kullanıp kullanamayacağın yaşadığın ülkeye
            bağlıdır – kaydolmadan önce borsanın koşullarını kontrol et.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Finansal tavsiye değildir",
        heading: "Finansal tavsiye değildir",
        body: () => (
          <p>
            Bu sitedeki hiçbir içerik, herhangi bir varlığı almak, satmak veya onunla işlem yapmak için bir öneri değildir ve kişisel durumunu
            dikkate alan bir danışmanlığın yerini tutmaz. Kripto türev ürünleri yüksek risklidir: kaldıraç kazancı da kaybı da katlar ve yatırdığın
            paranın tamamını kaybedebilirsin.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        Bu sitenin işletmecisi <Link href={c.links.imprint}>Künye</Link> sayfasında belirtilmiştir; kişisel verilerin nasıl işlendiği{" "}
        <Link href={c.links.privacy}>Gizlilik Politikası</Link> sayfasında açıklanır.
      </p>
    ),
  },

  /* ------------------------------------ Imprint ------------------------------------ */
  imprint: {
    title: "Künye (Yasal Bildirim)",
    description: `${site.domain} için yasal bildirim: işletmeci, iletişim bilgileri, sitenin ne olduğu ve ne olmadığı, sorumluluk ve uygulanacak hukuk.`,
    intro: (c) => (
      <>
        <h1>Künye (Yasal Bildirim)</h1>
        <p className="muted">
          2000/31/AT sayılı Direktif (Elektronik Ticaret Direktifi) md. 5 ve 18 Temmuz 2002 tarihli Elektronik Yolla Hizmet Sunumuna İlişkin
          Polonya Kanunu md. 5 uyarınca hizmet sağlayıcıya ilişkin bilgiler.
        </p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      operator: section({
        nav: "İşletmeci",
        heading: "Bu web sitesinin işletmecisi",
        body: () => (
          <>
            <p>
              {legal.operator}
              <br />
              {legal.street}
              <br />
              {legal.zipCity}
              <br />
              {legal.country}
            </p>
            <p>
              Bu sitede geçen “{site.name}”, “biz”, “bize” ve “bizi” ifadeleri yukarıda adı geçen işletmeciyi ifade eder. {site.name} bir şirketin
              değil, web sitesinin adıdır.
            </p>
          </>
        ),
      }),
      "represented-by": section({
        heading: "Temsilci",
        body: () => <p>{legal.representative}</p>,
      }),
      contact: section({
        nav: "İletişim",
        heading: "İletişim",
        body: () => (
          <p>
            E-posta: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            {legal.phone ? (
              <>
                <br />
                Telefon: {legal.phone}
              </>
            ) : null}
          </p>
        ),
      }),
      "legal-form": section({
        nav: "Hukuki statü",
        heading: "Hukuki statü",
        body: () => <p>Bu web sitesi bir gerçek kişi tarafından işletilmektedir. Herhangi bir ticaret siciline kaydı yoktur.</p>,
      }),
      register: section({
        heading: "Sicil kaydı ve KDV",
        body: () => (
          <p>
            {legal.registerEntry}
            <br />
            {legal.vatId}
          </p>
        ),
      }),
      responsible: section({
        nav: "İçerikten sorumlu kişi",
        heading: "İçerikten sorumlu kişi",
        body: () => <p>{legal.representative || legal.operator}, adres yukarıdaki gibidir.</p>,
      }),
      scope: section({
        nav: "Bu site nedir",
        heading: "Bu site nedir – ve ne değildir",
        body: () => (
          <p>
            {site.name}, kripto para borsaları ve bunların referans programları hakkında bir bilgi ve karşılaştırma sitesidir. Bir borsa, aracı kurum
            ya da kripto varlık hizmet sağlayıcısı değildir: para veya kripto varlık kabul etmez, saklamaz ya da transfer etmez, emir gerçekleştirmez
            ve ziyaretçilerle herhangi bir sözleşme kurmaz. Bir hesap açarsan bunu doğrudan borsada, borsanın kendi koşullarına göre ve borsanın kendi
            doğrulama süreciyle yaparsın.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Tavsiye değildir, risk uyarısı",
        heading: "Tavsiye değildir, risk uyarısı",
        body: () => (
          <p>
            Bu sitedeki hiçbir içerik yatırım, finans, hukuk veya vergi tavsiyesi, kişisel bir öneri ya da herhangi bir kripto varlığı veya finansal
            aracı almaya veya satmaya yönelik bir teklif veya davet niteliği taşımaz. Karşılaştırmalar borsaların yayınladığı bilgileri aktarır ve
            kişisel durumunu dikkate almaz. Kripto varlıklarla, özellikle kaldıraçlı işlem yapmak yüksek kayıp riski taşır – bu risk, yatırdığın
            paranın tamamını kaybetmeye kadar varabilir. Kararını kendin ver ve emin değilsen lisanslı bir danışmana başvur.
          </p>
        ),
      }),
      availability: section({
        nav: "Ülke erişimi",
        heading: "Ülke erişimi ve kısıtlı ülkeler",
        body: () => (
          <p>
            Borsalar hizmetlerini her ülkede sunmaz ve bazı ürünler belirli ülkelerde yaşayanlar için kısıtlanmıştır. Bu site, yaşadığı yerde ilgili
            borsayı kullanması ya da o borsa hakkında bilgi alması yasak olan kişilere yönelik değildir. Kaydolmadan önce borsanın koşullarını ve
            ikamet ettiğin ülkenin kurallarını kontrol et. Site yalnızca yetişkinlere yöneliktir.
          </p>
        ),
      }),
      liability: section({
        nav: "Sorumluluk",
        heading: "İçerikle ilgili sorumluluk",
        body: () => (
          <p>
            Bu sitenin içeriği özenle hazırlanmıştır ve düzenli olarak kontrol edilir; her borsa sayfası son inceleme tarihini ve kontrolde esas
            alınan kaynakları gösterir. Ancak komisyonlar, kaldıraç limitleri, bonuslar, doğrulama kuralları ve ülke erişimi borsalar tarafından
            belirlenir ve her an değişebilir; bu nedenle bilgilerin doğru, eksiksiz veya güncel olduğunu garanti edemeyiz. Geçerli olan, kaydolduğun
            anda borsanın gösterdiği koşullardır. Yasaların izin verdiği ölçüde, bu bilgilerin kullanımından doğan zararlar için sorumluluk kabul
            etmiyoruz; kast ve ağır ihmalden doğan sorumluluk ile yasa gereği hariç tutulamayan her türlü sorumluluk saklıdır.
          </p>
        ),
      }),
      links: section({
        nav: "Dış bağlantılar",
        heading: "Başka web sitelerine bağlantılar",
        body: (c) => (
          <p>
            Bu site, üzerinde hiçbir kontrolümüz olmayan harici web sitelerine bağlantılar içerir. Bu sitelerin içeriğinden yalnızca ilgili sağlayıcı
            sorumludur. Dışarıya giden bazı bağlantılar satış ortaklığı (referans) bağlantılarıdır ve bunlar için komisyon alabiliriz – bkz.{" "}
            <Link href={c.links.affiliateDisclosure}>Satış Ortaklığı Açıklaması</Link>. Bir bağlantının hukuka aykırı bir içeriğe yönlendirdiğini
            düşünüyorsan bunu <a href={`mailto:${legal.email}`}>{legal.email}</a> adresinden bize bildir; gecikmeksizin kontrol ederiz.
          </p>
        ),
      }),
      trademarks: section({
        nav: "Markalar ve telif hakkı",
        heading: "Markalar ve telif hakkı",
        body: () => (
          <p>
            Borsa adları ve logoları ilgili sahiplerinin ticari markalarıdır ve yalnızca tanımlama amacıyla kullanılır. {site.name} ile sitede yer
            alan borsalar arasında kurumsal bir bağ yoktur; {site.name} bu borsaların hiçbiri tarafından onaylanmamış veya sponsor edilmemektedir. Bu
            sitedeki tüm özgün metin ve grafikler telif hakkıyla korunmaktadır.
          </p>
        ),
      }),
      disputes: section({
        nav: "Uyuşmazlık çözümü",
        heading: "Tüketici uyuşmazlıklarının çözümü",
        body: () => (
          <p>
            Ziyaretçilere mal veya hizmet satmıyoruz; bu nedenle siteyi kullanmaktan bir tüketici sözleşmesi doğmaz. Bir tüketici tahkim kuruluşu
            önündeki uyuşmazlık çözüm süreçlerine katılmıyoruz. Bir borsayla ilgili şikâyetler o borsaya iletilmelidir.
          </p>
        ),
      }),
      law: section({
        nav: "Uygulanacak hukuk",
        heading: "Uygulanacak hukuk",
        body: () => (
          <p>
            Bu site ve kullanımı Polonya hukukuna tabidir. Tüketiciysen, mutat meskeninin bulunduğu ülkenin emredici tüketici koruma hükümleri
            saklıdır.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        <Link href={c.links.privacy}>Gizlilik Politikası</Link> ve <Link href={c.links.affiliateDisclosure}>Satış Ortaklığı Açıklaması</Link>{" "}
        sayfalarımıza da göz at.
      </p>
    ),
  },

  /* --------------------------------- Privacy policy --------------------------------- */
  privacy: {
    title: "Gizlilik Politikası",
    description: `${site.domain} sitesinin kişisel verileri AB GDPR kapsamında nasıl işlediği: Google Analytics yalnızca onayınla, reklam çerezi yok.`,
    intro: (c) => (
      <>
        <h1>Gizlilik Politikası</h1>
        <p className="muted">Son güncelleme: {c.reviewed}</p>
        {translationNotice(c.links.english)}

        <div className="info">
          <strong>Kısaca:</strong> {site.domain} reklam pikseli, sosyal medya eklentisi veya harici yazı tipi kullanmaz. Google Analytics yalnızca
          onay penceresinde izin verirsen çalışır; onayın olmadan hiçbir çerez yerleştirilmez ve Google'a hiçbir şey gönderilmez. Bunun dışında
          yalnızca siteyi güvenli şekilde sunmak için gerekli teknik verileri işleriz. Bir borsaya giden bağlantıya tıkladığında sitemizden
          ayrılırsın ve borsanın kendi gizlilik politikası geçerli olur.
        </div>
      </>
    ),
    sections: {
      controller: section({
        nav: "Veri sorumlusu",
        heading: "1. Veri sorumlusu",
        body: () => (
          <>
            <p>
              Bu sitedeki veri işleme faaliyetleri bakımından GDPR (AB Genel Veri Koruma Tüzüğü) md. 4/7 anlamında veri sorumlusu, sitenin
              işletmecisi olan gerçek kişidir:
            </p>
            <p>
              {legal.operator}
              <br />
              {legal.street}, {legal.zipCity}, {legal.country}
              <br />
              E-posta: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            </p>
            <p>
              Veri sorumlusu Polonya'da yerleşiktir. GDPR ve 10 Mayıs 2018 tarihli Polonya Kişisel Verilerin Korunması Kanunu uygulanır. Siteyi
              İsviçre'den ziyaret ediyorsan ek olarak İsviçre Federal Veri Koruma Kanunu (FADP) da uygulanabilir; aşağıda açıklanan haklardan aynı
              şekilde yararlanabilirsin.
            </p>
          </>
        ),
      }),
      hosting: section({
        nav: "Barındırma ve log kayıtları",
        heading: "2. Barındırma ve sunucu log kayıtları",
        body: () => (
          <>
            <p>
              Bu sitenin barındırma hizmetini {legal.hostingProvider} (“Vercel”) sağlar; Vercel, veri işleyenimiz olarak hareket eder (GDPR md. 28).
              Siteyi ziyaret ettiğinde Vercel, tarayıcının ilettiği teknik verileri otomatik olarak işler: IP adresi, isteğin tarihi ve saati,
              istenen URL, yönlendiren URL (referrer), tarayıcı türü ve sürümü, işletim sistemi ve HTTP durum kodu. Bu veriler, sitenin sunulması
              ve kararlılığı ile güvenliğinin sağlanması (örneğin saldırılara karşı korunma) için gereklidir. Başka veri kaynaklarıyla
              birleştirilmez ve kimliğini belirlemek için kullanılmaz.
            </p>
            <p>
              Hukuki dayanak: GDPR md. 6/1-f – güvenli ve işlevsel bir web sitesine yönelik meşru menfaatimiz. Log verileri Vercel tarafından sınırlı
              bir süre saklanır ve ardından silinir. Vercel verileri ABD'de işleyebilir. Vercel, Avrupa Komisyonu'nun yeterlilik kararı verdiği
              (GDPR md. 45) AB-ABD Veri Gizliliği Çerçevesi (EU-U.S. Data Privacy Framework) kapsamında sertifikalıdır; ayrıca Vercel'in AB Standart
              Sözleşme Maddelerini içeren veri işleme sözleşmesi uygulanır.
            </p>
          </>
        ),
      }),
      cookies: section({
        nav: "Çerezler ve analiz",
        heading: "3. Çerezler ve analiz",
        body: () => (
          <>
            <p>
              Onayın olmadan hiçbir çerez yerleştirmiyor ve hiçbir analiz aracı kullanmıyoruz. Reklam ağları, parmak izi takibi (fingerprinting) veya
              sosyal medya eklentileri kullanmıyoruz; tüm yazı tipleri ve görseller kendi alan adımızdan sunulur. Otomatik karar verme veya profil
              oluşturma yapmıyoruz (GDPR md. 22).
            </p>
            <p>
              Onay penceresindeki tercihin, her sayfada yeniden sormak zorunda kalmamamız için tarayıcının yerel depolama alanında (local storage)
              saklanır (<code>refco-analytics-consent</code> kaydı, değeri “granted” veya “denied”). Bu kayıt, tercihine uyabilmemiz için gereklidir ve
              hiç kimseye gönderilmez.
            </p>
            <h3 id="analytics">Google Analytics – yalnızca onayınla</h3>
            <p>
              “Analitiğe izin ver” seçeneğini seçersen bu site, Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland (“Google”)
              tarafından sunulan bir hizmet olan Google Analytics 4'ü yükler. Google Analytics, ziyaretçileri birbirinden ayırt etmek için{" "}
              <code>_ga</code> ve <code>_ga_{site.analyticsId.replace(/^G-/, "")}</code> çerezlerini yerleştirir (varsayılan olarak iki yıla kadar
              saklanır). Hangi sayfaların görüntülendiğini, ziyaretçilerin siteye nasıl ulaştığını, IP adresinden çıkarılan yaklaşık bölgeyi ve
              tarayıcı ile cihaz verilerini kaydeder. Google'a göre Analytics 4, IP adreslerini kaydetmez veya saklamaz. Raporları yalnızca toplu
              hâlde, hangi sayfaların okunduğunu görmek için kullanırız. Reklam özellikleri kapalıdır: reklam çerezi de reklam kişiselleştirmesi de
              yoktur.
            </p>
            <p>
              Hukuki dayanak: onayın (GDPR md. 6/1-a). Google, veri işleyenimiz olarak hareket eder. Veriler ABD'deki Google LLC'ye aktarılabilir;
              Google LLC, AB-ABD Veri Gizliliği Çerçevesi kapsamında sertifikalıdır. Google, kullanıcı düzeyindeki verileri Analytics'te belirlenen
              saklama süresi (en fazla 14 ay) dolduğunda siler. Onayını, her sayfanın altındaki “Çerez ayarları” üzerinden dilediğin zaman ileriye
              dönük olarak geri çekebilirsin; bu durumda Analytics çerezleri tarayıcından silinir ve Analytics artık yüklenmez. Google'dan daha fazla
              bilgi:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener nofollow">
                policies.google.com/privacy
              </a>
              .
            </p>
          </>
        ),
      }),
      "affiliate-links": section({
        nav: "Borsalara giden bağlantılar",
        heading: "4. Borsalara giden bağlantılar (satış ortaklığı bağlantıları)",
        body: (c) => (
          <p>
            Sitemiz, üçüncü taraflara ait kripto para borsalarına giden bağlantılar içerir. Bunların bir kısmı, sitemizden geldiğini borsanın
            anlamasını sağlayan referans bağlantılarıdır. Borsaya hiçbir kişisel veri aktarmayız; referans tanımlayıcısı bağlantının kendisinin bir
            parçasıdır ve seni değil, bizi tanımlar. Tıkladığın anda borsanın web sitesindesin ve onun gizlilik politikası geçerlidir. Borsa bu
            durumda çerez yerleştirebilir ve verilerini ayrı bir veri sorumlusu olarak işleyebilir. Borsa, bağlantılarımız üzerinden açılan
            hesaplardan hangi komisyonların doğduğunu bize bildirir. Bu bildirim takma adlı bir hesap tanımlayıcısı (örneğin bir kullanıcı kimliği /
            user ID) ve işlem ücreti rakamları içerebilir; bunu yalnızca komisyonların hesabını tutmak için kullanırız (GDPR md. 6/1-f) ve buradan
            kimliğini tespit etmeye çalışmayız. Bu bağlantılar hakkında daha fazlası:{" "}
            <Link href={c.links.affiliateDisclosure}>Satış Ortaklığı Açıklaması</Link>.
          </p>
        ),
      }),
      email: section({
        nav: "E-postayla iletişim",
        heading: "5. E-postayla iletişim",
        body: () => (
          <p>
            Bizimle e-postayla iletişime geçersen, talebini yanıtlamak için verdiğin verileri (e-posta adresi, ad, mesajının içeriği) işleriz. Hukuki
            dayanak: GDPR md. 6/1-f – gelen sorulara yanıt verme konusundaki meşru menfaatimiz. Mesajın, veri işleyenimiz olarak hareket eden bir
            e-posta hizmet sağlayıcısının işlettiği posta kutumuzda saklanır. Talebin sonuçlandığında yazışmayı sileriz; yasa daha uzun süre
            saklamamızı gerektiriyorsa bu durum hariçtir. Kişisel veri vermek zorunda değilsin; yalnızca bir e-posta adresi olmadan sana yanıt
            veremeyiz.
          </p>
        ),
      }),
      recipients: section({
        nav: "Veri alıcıları",
        heading: "6. Veri alıcıları",
        body: () => (
          <p>
            Kişisel verileri satmayız ve üçüncü taraflara kendi amaçları için aktarmayız. Veriler yalnızca yukarıda adı geçen hizmet sağlayıcılar –
            barındırma sağlayıcısı, e-posta sağlayıcısı ve analize izin verdiysen Google – tarafından işlenir ve resmî makamlarla yalnızca yasal
            olarak zorunlu olduğumuzda paylaşılır.
          </p>
        ),
      }),
      rights: section({
        nav: "Hakların",
        heading: "7. Hakların",
        body: () => (
          <>
            <p>Yasal koşullar sağlandığı ölçüde şu haklara sahipsin:</p>
            <ul>
              <li>hakkında tuttuğumuz kişisel verilere erişim (GDPR md. 15),</li>
              <li>yanlış verilerin düzeltilmesini isteme (GDPR md. 16),</li>
              <li>verilerin silinmesini (GDPR md. 17) ve işlemenin kısıtlanmasını (GDPR md. 18) isteme,</li>
              <li>veri taşınabilirliği (GDPR md. 20),</li>
              <li>kendi özel durumundan kaynaklanan nedenlerle, meşru menfaate dayanan işlemeye itiraz etme (GDPR md. 21),</li>
              <li>verdiğin onayı dilediğin zaman ileriye dönük olarak geri çekme (GDPR md. 7/3),</li>
              <li>
                bir denetim makamına şikâyette bulunma (GDPR md. 77) – Polonya'da Kişisel Veri Koruma Ofisi Başkanı (Prezes Urzędu Ochrony Danych
                Osobowych, UODO, uodo.gov.pl) ya da yaşadığın veya çalıştığın AB ülkesinin denetim makamı; İsviçre'de Federal Veri Koruma ve Bilgi
                Komiseri (FDPIC).
              </li>
            </ul>
            <p>
              Haklarını kullanmak için <a href={`mailto:${legal.email}`}>{legal.email}</a> adresine e-posta gönder. Sana gereksiz bir gecikme
              olmaksızın, en geç bir ay içinde yanıt veririz.
            </p>
          </>
        ),
      }),
      children: section({
        nav: "Çocuklar",
        heading: "8. Çocuklar",
        body: () => <p>Bu site yetişkinlere yöneliktir. 18 yaşından küçük kişilerin kişisel verilerini bilerek işlemeyiz.</p>,
      }),
      security: section({
        nav: "Veri güvenliği",
        heading: "9. Veri güvenliği",
        body: () => (
          <p>
            Bu site yalnızca sıkı güvenlik başlıklarıyla (security headers) korunan, şifreli bir HTTPS bağlantısı (TLS) üzerinden sunulur. Verilerini
            korumak için uygun teknik ve organizasyonel tedbirleri alırız.
          </p>
        ),
      }),
      changes: section({
        nav: "Değişiklikler",
        heading: "10. Bu politikadaki değişiklikler",
        body: (c) => (
          <p>
            Site veya yasal gereklilikler değiştiğinde bu gizlilik politikasını güncelleyebiliriz. Güncel sürüm her zaman bu sayfada yer alır.
            İşletmecinin adı <Link href={c.links.imprint}>Künye</Link> sayfasında belirtilmiştir.
          </p>
        ),
      }),
    },
  },
};
