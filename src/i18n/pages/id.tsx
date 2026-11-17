import Link from "next/link";
import { legal, site } from "@/config/site";
import type { PageTexts, TextSection } from "./en";

/**
 * The text pages in Indonesian. Same pages and sections as `./en.tsx`, written from the English text.
 *
 * Wording: "exchange" / "exchange kripto", "kode referral", "biaya", the reader is "Anda" (capital A), the site is
 * "kami". The operator of the website is "pengelola"; a controller under the GDPR is "pengendali data", a processor
 * "prosesor data". The regulation is "Peraturan Perlindungan Data Umum Uni Eropa (GDPR)" at its first mention, then
 * "GDPR"; articles are cited as "Pasal 6 ayat (1) huruf f GDPR" (a numbered point as "Pasal 4 angka 7 GDPR"). Page
 * names as in the footer: “Informasi hukum”, “Kebijakan privasi”, “Pengungkapan afiliasi”, “Tentang kami &
 * metodologi”. Our own buttons and labels are quoted in “…”. Names, addresses and email addresses stay as they are
 * in `src/config/site.ts`.
 *
 * The legal pages (affiliate disclosure, imprint, privacy policy) carry `translationNotice`: the English
 * text is the binding one.
 */

const section = (s: TextSection) => s;

/** A plain link, because the English page has its own root layout and loads as a new document. */
const translationNotice = (englishHref: string) => (
  <p className="muted">
    <strong>Catatan:</strong> Halaman ini merupakan versi bahasa Indonesia yang kami sediakan untuk memudahkan Anda. Yang mengikat secara hukum
    adalah{" "}
    <a href={englishHref} hrefLang="en">
      versi bahasa Inggris
    </a>
    .
  </p>
);

export const id: PageTexts = {
  layout: {
    aside: "Di halaman ini dan lainnya",
    onThisPage: "Di halaman ini",
    referralCodes: "Kode referral",
    compare: "Bandingkan exchange",
    alternativesOf: (name) => <>Alternatif {name}</>,
    allComparisons: "Semua perbandingan exchange →",
  },

  home: "Beranda",

  /* ------------------------------------ About ------------------------------------ */
  about: {
    title: `Tentang Kami & Metodologi ${site.name}`,
    description: `Siapa yang mengelola ${site.domain}, dari mana data kami berasal, dan cara kami meninjau exchange kripto: biaya, kode referral, lisensi, dan ketersediaan.`,
    ldName: `Tentang ${site.name}`,
    crumb: "Tentang kami",
    intro: () => (
      <>
        <span className="eyebrow">Tentang kami</span>
        <h1>Tentang {site.name}</h1>
        <p className="lead">
          {site.name} ({site.domain}) membantu trader mendaftar di exchange derivatif kripto yang tepat – dengan kode referral yang benar-benar berfungsi
          dan fakta penting yang perlu Anda ketahui sebelum melakukan deposit.
        </p>
      </>
    ),
    sections: {
      "what-we-do": section({
        nav: "Apa yang kami lakukan",
        heading: "Apa yang kami lakukan",
        body: () => (
          <p>
            Kami berfokus pada exchange terbesar dalam peringkat derivatif CoinMarketCap dan menerbitkan satu halaman untuk setiap exchange dengan
            struktur yang sama: jawaban singkat, fakta utama, biaya, deskripsi yang jujur, kelebihan dan kekurangan, catatan keamanan, ketersediaan, dan
            FAQ. Dengan begitu, exchange mudah dibandingkan satu sama lain.
          </p>
        ),
      }),
      methodology: section({
        nav: "Metodologi kami",
        heading: "Metodologi kami",
        body: (c) => (
          <ul>
            <li>
              <strong>Data pasar</strong> (open interest, volume 24 jam, jumlah pasar) berasal dari peringkat derivatif CoinMarketCap dan diberi tanggal
              di setiap halaman.
            </li>
            <li>
              <strong>Kode referral, pendaftaran, dan verifikasi</strong> – tempat kode dimasukkan, apakah kode bisa ditambahkan belakangan, langkah
              pendaftaran, dan aturan KYC – kami baca langsung di situs resmi dan pusat bantuan setiap exchange. Setiap halaman exchange mencantumkan
              halaman resmi yang menjadi acuan pemeriksaannya.
            </li>
            <li>
              <strong>Biaya dan leverage</strong> diambil dari tabel biaya resmi setiap exchange untuk level standar (non-VIP).
            </li>
            <li>
              <strong>Penawaran pengguna baru</strong> kami kutip sesuai pernyataan exchange, lengkap dengan syaratnya. Penawaran ini berbeda di tiap
              negara dan sering berubah.
            </li>
            <li>
              <strong>Lisensi dan insiden</strong> diambil dari halaman lisensi dan pernyataan resmi exchange itu sendiri.
            </li>
            <li>
              <strong>Perbandingan exchange</strong> – halaman alternatif dan <Link href={c.links.compare}>perbandingan langsung</Link> – memakai angka
              yang sama dengan halaman exchange. Sebuah produk ditandai tersedia hanya jika exchange menampilkannya di situsnya sendiri, dan ketersediaan
              per negara diambil dari ketentuan, daftar negara yang dibatasi, dan situs regional setiap exchange. Exchange mana yang “Unggul” pada suatu
              poin dibaca langsung dari angka tersebut, bukan hasil pemeringkatan kami.
            </li>
            <li>
              <strong>Siklus peninjauan:</strong> data diperiksa ulang secara berkala; peninjauan terakhir dilakukan pada {c.reviewed}.
            </li>
          </ul>
        ),
      }),
      independence: section({
        nav: "Independensi",
        heading: "Independensi",
        body: (c) => (
          <p>
            Kami menerima komisi referral dari exchange yang kami cantumkan – rinciannya ada di halaman{" "}
            <Link href={c.links.affiliateDisclosure}>Pengungkapan afiliasi</Link>. Komisi ini tidak pernah mengubah fakta yang kami terbitkan, dan kami
            selalu menyebutkan kelemahan serta pembatasan setiap exchange.
          </p>
        ),
      }),
      operator: section({
        nav: `Siapa yang mengelola ${site.name}`,
        heading: <>Siapa yang mengelola {site.name}</>,
        body: (c) => (
          <p>
            {site.name} adalah situs pribadi, bukan perusahaan. Nama pengelolanya tercantum di halaman{" "}
            <Link href={c.links.imprint}>Informasi hukum</Link>. {site.name} bukan exchange dan tidak pernah menerima atau menyimpan dana Anda – akun
            dibuka langsung di exchange.
          </p>
        ),
      }),
      contact: section({
        nav: "Kontak",
        heading: "Kontak",
        body: () => (
          <p>
            Menemukan informasi yang sudah usang? Kirim email ke <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> – kami segera
            memperbaiki kesalahan.
          </p>
        ),
      }),
    },
  },

  /* ------------------------------ Affiliate disclosure ------------------------------ */
  affiliateDisclosure: {
    title: "Pengungkapan Afiliasi",
    description: `Pengungkapan afiliasi ${site.name}: sumber penghasilan kami, tautan mana yang berupa iklan, dan mengapa fakta seputar exchange kripto di situs ini tidak terpengaruh.`,
    intro: (c) => (
      <>
        <h1>Pengungkapan Afiliasi</h1>
        <p className="lead">Transparansi adalah dasar kepercayaan. Berikut penjelasan rinci tentang cara {site.name} dibiayai.</p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      earn: section({
        nav: "Cara kami memperoleh pendapatan",
        heading: "Cara kami memperoleh pendapatan",
        body: () => (
          <p>
            {site.name} ikut serta dalam program referral dan program afiliasi exchange yang ditampilkan di situs ini. Jika Anda membuka akun lewat
            salah satu tautan kami, exchange dapat membayar komisi kepada pengelola situs ini – biasanya sebagian dari biaya trading yang dihasilkan akun
            Anda. Anda tidak pernah membayar lebih karena hal ini: referral tidak menaikkan biaya Anda, dan pendaftaran lewat referral sering kali
            disertai diskon biaya atau hadiah selamat datang untuk Anda. Komisi dibayar oleh exchange, bukan oleh Anda.
          </p>
        ),
      }),
      advertising: section({
        nav: "Tautan mana yang merupakan iklan",
        heading: "Tautan mana yang merupakan iklan",
        body: () => (
          <p>
            Setiap tautan dan tombol yang mengarah ke exchange – misalnya “Daftar di …”, “Daftar”, atau “Klaim” – serta setiap kode referral yang
            ditampilkan di situs ini adalah iklan: komunikasi komersial untuk exchange tersebut, dan kami dapat menerima bayaran untuk itu. Tautan ini
            ditandai dengan <code>rel=&quot;sponsored&quot;</code> sesuai pedoman mesin pencari, dan halaman pengungkapan ini ditautkan dari setiap
            halaman.
          </p>
        ),
      }),
      independence: section({
        nav: "Apa yang tidak terpengaruh",
        heading: "Apa yang tidak terpengaruh",
        body: () => (
          <ul>
            <li>
              Biaya, leverage, lisensi, aturan verifikasi, dan pembatasan negara diambil dari halaman milik exchange sendiri, data pasar dari
              CoinMarketCap – bukan dari perjanjian pemasaran. Setiap halaman exchange mencantumkan sumbernya.
            </li>
            <li>Kami menerbitkan kelemahan, insiden keamanan, dan pembatasan regional untuk setiap exchange.</li>
            <li>
              Urutan exchange mengikuti posisinya dalam peringkat derivatif CoinMarketCap. Tidak ada exchange yang dapat membayar untuk mendapat posisi
              yang lebih baik.
            </li>
            <li>Exchange mana yang “Unggul” dalam sebuah perbandingan dihitung dari angka yang dipublikasikan. Hasil ini tidak dapat dibeli.</li>
          </ul>
        ),
      }),
      who: section({
        nav: "Dengan siapa Anda berurusan",
        heading: "Dengan siapa Anda berurusan",
        body: () => (
          <p>
            {site.name} adalah situs informasi, bukan exchange atau broker. Situs ini tidak pernah menerima atau menyimpan uang maupun aset kripto Anda.
            Jika Anda mendaftar, kontrak Anda terjalin hanya dengan exchange, berdasarkan ketentuan exchange tersebut. Boleh tidaknya Anda menggunakan
            suatu exchange bergantung pada negara tempat Anda tinggal – periksa ketentuan exchange itu sebelum mendaftar.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Bukan nasihat keuangan",
        heading: "Bukan nasihat keuangan",
        body: () => (
          <p>
            Tidak ada isi situs ini yang merupakan rekomendasi untuk membeli, menjual, atau memperdagangkan aset apa pun, dan isinya tidak menggantikan
            nasihat yang mempertimbangkan situasi pribadi Anda. Derivatif kripto adalah produk berisiko tinggi: leverage melipatgandakan keuntungan
            sekaligus kerugian, dan Anda dapat kehilangan seluruh deposit.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        Pengelola situs ini tercantum di halaman <Link href={c.links.imprint}>Informasi hukum</Link>; cara data pribadi ditangani dijelaskan di
        halaman <Link href={c.links.privacy}>Kebijakan privasi</Link>.
      </p>
    ),
  },

  /* ------------------------------------ Imprint ------------------------------------ */
  imprint: {
    title: "Informasi Hukum",
    description: `Informasi hukum ${site.domain}: pengelola, data kontak, apa itu situs ini dan apa yang bukan, tanggung jawab hukum, serta hukum yang berlaku.`,
    intro: (c) => (
      <>
        <h1>Informasi Hukum</h1>
        <p className="muted">
          Informasi tentang penyedia layanan sesuai Pasal 5 Direktif 2000/31/EC (Direktif E-Commerce) dan Pasal 5 Undang-Undang Polandia tertanggal
          18 Juli 2002 tentang Penyediaan Layanan secara Elektronik.
        </p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      operator: section({
        nav: "Pengelola",
        heading: "Pengelola situs ini",
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
              “{site.name}” dan “kami” di situs ini merujuk pada pengelola yang disebutkan di atas. {site.name} adalah nama situs, bukan nama
              perusahaan.
            </p>
          </>
        ),
      }),
      "represented-by": section({
        heading: "Diwakili oleh",
        body: () => <p>{legal.representative}</p>,
      }),
      contact: section({
        nav: "Kontak",
        heading: "Kontak",
        body: () => (
          <p>
            Email: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            {legal.phone ? (
              <>
                <br />
                Telepon: {legal.phone}
              </>
            ) : null}
          </p>
        ),
      }),
      "legal-form": section({
        nav: "Bentuk hukum",
        heading: "Bentuk hukum",
        body: () => <p>Situs ini dikelola oleh orang perseorangan. Tidak ada pencatatan dalam register perdagangan.</p>,
      }),
      register: section({
        heading: "Register perdagangan dan nomor PPN (VAT)",
        body: () => (
          <p>
            {legal.registerEntry}
            <br />
            {legal.vatId}
          </p>
        ),
      }),
      responsible: section({
        nav: "Penanggung jawab konten",
        heading: "Penanggung jawab konten",
        body: () => <p>{legal.representative || legal.operator}, alamat seperti di atas.</p>,
      }),
      scope: section({
        nav: "Apa itu situs ini",
        heading: "Apa itu situs ini – dan apa yang bukan",
        body: () => (
          <p>
            {site.name} adalah situs informasi dan perbandingan tentang exchange kripto serta program referral masing-masing exchange. Situs ini bukan
            exchange, bukan broker, dan bukan penyedia layanan aset kripto: situs ini tidak menerima, menyimpan, atau memindahkan uang maupun aset
            kripto, tidak mengeksekusi order, dan tidak mengadakan kontrak apa pun dengan pengunjung. Jika Anda membuka akun, Anda melakukannya langsung
            di exchange, berdasarkan ketentuan exchange itu sendiri dan melalui proses verifikasi milik exchange tersebut.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Bukan nasihat, peringatan risiko",
        heading: "Bukan nasihat, peringatan risiko",
        body: () => (
          <p>
            Tidak ada isi situs ini yang merupakan nasihat investasi, keuangan, hukum, atau pajak, rekomendasi pribadi, maupun penawaran atau ajakan
            untuk membeli atau menjual aset kripto atau instrumen keuangan apa pun. Perbandingan di situs ini menyajikan fakta yang dipublikasikan
            exchange dan tidak mempertimbangkan keadaan pribadi Anda. Trading aset kripto, terutama dengan leverage, mengandung risiko kerugian yang
            tinggi – hingga kehilangan seluruh deposit Anda. Ambil keputusan sendiri dan, jika ragu, konsultasikan dengan penasihat berlisensi.
          </p>
        ),
      }),
      availability: section({
        nav: "Ketersediaan",
        heading: "Ketersediaan dan negara yang dibatasi",
        body: () => (
          <p>
            Exchange tidak menyediakan layanan di semua negara, dan beberapa produk dibatasi bagi penduduk negara tertentu. Situs ini tidak ditujukan
            kepada orang yang di tempat tinggalnya dilarang menggunakan exchange yang bersangkutan atau menerima informasi tentang exchange tersebut.
            Sebelum mendaftar, periksa ketentuan exchange dan peraturan di negara tempat tinggal Anda. Situs ini hanya ditujukan untuk orang dewasa.
          </p>
        ),
      }),
      liability: section({
        nav: "Tanggung jawab",
        heading: "Tanggung jawab atas konten",
        body: () => (
          <p>
            Konten situs ini disusun dengan cermat dan diperiksa secara berkala; setiap halaman exchange menampilkan tanggal peninjauan terakhir dan
            sumber yang menjadi acuan pemeriksaannya. Namun, biaya, batas leverage, bonus, aturan verifikasi, dan ketersediaan ditetapkan oleh exchange
            dan dapat berubah sewaktu-waktu, sehingga kami tidak dapat menjamin bahwa informasi ini akurat, lengkap, atau terkini. Yang berlaku adalah
            ketentuan yang ditampilkan exchange pada saat Anda mendaftar. Sejauh diizinkan oleh hukum, kami tidak bertanggung jawab atas kerugian yang
            timbul dari penggunaan informasi ini; tanggung jawab atas kesengajaan dan kelalaian berat, serta setiap tanggung jawab yang menurut hukum
            tidak dapat dikecualikan, tetap berlaku.
          </p>
        ),
      }),
      links: section({
        nav: "Tautan eksternal",
        heading: "Tautan ke situs lain",
        body: (c) => (
          <p>
            Situs ini berisi tautan ke situs eksternal yang berada di luar kendali kami. Isi situs tersebut sepenuhnya menjadi tanggung jawab penyedianya
            masing-masing. Sebagian tautan keluar adalah tautan afiliasi (referral), dan kami dapat menerima komisi atas tautan tersebut – lihat halaman{" "}
            <Link href={c.links.affiliateDisclosure}>Pengungkapan afiliasi</Link>. Jika menurut Anda sebuah tautan mengarah ke konten yang melanggar
            hukum, beri tahu kami di <a href={`mailto:${legal.email}`}>{legal.email}</a> dan kami akan segera memeriksanya.
          </p>
        ),
      }),
      trademarks: section({
        nav: "Merek dagang dan hak cipta",
        heading: "Merek dagang dan hak cipta",
        body: () => (
          <p>
            Nama dan logo exchange adalah merek dagang milik pemiliknya masing-masing dan digunakan hanya untuk keperluan identifikasi. {site.name} tidak
            berafiliasi dengan exchange mana pun yang ditampilkan, dan tidak ada exchange yang mendukung atau mensponsori {site.name}. Semua teks dan
            grafis asli di situs ini dilindungi hak cipta.
          </p>
        ),
      }),
      disputes: section({
        nav: "Penyelesaian sengketa",
        heading: "Penyelesaian sengketa konsumen",
        body: () => (
          <p>
            Kami tidak menjual barang atau jasa kepada pengunjung, sehingga penggunaan situs ini tidak menimbulkan kontrak konsumen. Kami tidak ikut
            serta dalam prosedur penyelesaian sengketa di hadapan badan arbitrase konsumen. Keluhan tentang suatu exchange harus disampaikan langsung
            kepada exchange tersebut.
          </p>
        ),
      }),
      law: section({
        nav: "Hukum yang berlaku",
        heading: "Hukum yang berlaku",
        body: () => (
          <p>
            Situs ini dan penggunaannya tunduk pada hukum Polandia. Jika Anda konsumen, ketentuan wajib perlindungan konsumen di negara tempat Anda
            biasanya bertempat tinggal tetap berlaku.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        Lihat juga halaman <Link href={c.links.privacy}>Kebijakan privasi</Link> dan{" "}
        <Link href={c.links.affiliateDisclosure}>Pengungkapan afiliasi</Link> kami.
      </p>
    ),
  },

  /* --------------------------------- Privacy policy --------------------------------- */
  privacy: {
    title: "Kebijakan Privasi",
    description: `Kebijakan privasi ${site.domain}: cara data pribadi diproses menurut GDPR Uni Eropa. Google Analytics hanya dengan persetujuan Anda, tanpa cookie iklan.`,
    intro: (c) => (
      <>
        <h1>Kebijakan Privasi</h1>
        <p className="muted">Terakhir diperbarui: {c.reviewed}</p>
        {translationNotice(c.links.english)}

        <div className="info">
          <strong>Ringkasnya:</strong> {site.domain} tidak memakai piksel iklan, plugin media sosial, atau font eksternal. Google Analytics hanya
          berjalan jika Anda mengizinkannya di banner persetujuan; tanpa persetujuan Anda, tidak ada cookie yang dipasang dan tidak ada data yang
          dikirim ke Google. Selain itu, kami hanya memproses data teknis yang diperlukan untuk menyajikan situs ini secara aman. Jika Anda mengeklik
          tautan ke exchange, Anda meninggalkan situs kami dan yang berlaku adalah kebijakan privasi exchange tersebut.
        </div>
      </>
    ),
    sections: {
      controller: section({
        nav: "Pengendali data",
        heading: "1. Pengendali data",
        body: () => (
          <>
            <p>
              Pengendali yang bertanggung jawab atas pemrosesan data di situs ini dalam pengertian Pasal 4 angka 7 Peraturan Perlindungan Data Umum Uni
              Eropa (GDPR) adalah pengelola situs, yaitu orang perseorangan:
            </p>
            <p>
              {legal.operator}
              <br />
              {legal.street}, {legal.zipCity}, {legal.country}
              <br />
              Email: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            </p>
            <p>
              Pengendali berkedudukan di Polandia. Yang berlaku adalah GDPR dan Undang-Undang Polandia tertanggal 10 Mei 2018 tentang Perlindungan Data
              Pribadi. Jika Anda mengunjungi situs ini dari Swiss, Undang-Undang Federal Swiss tentang Perlindungan Data (FADP) juga dapat berlaku; hak
              yang dijelaskan di bawah ini dapat Anda gunakan dengan cara yang sama.
            </p>
          </>
        ),
      }),
      hosting: section({
        nav: "Hosting dan file log",
        heading: "2. Hosting dan file log server",
        body: () => (
          <>
            <p>
              Hosting situs ini disediakan oleh {legal.hostingProvider} (“Vercel”), yang bertindak sebagai prosesor data kami (Pasal 28 GDPR). Saat
              Anda mengunjungi situs ini, Vercel secara otomatis memproses data teknis yang dikirim browser Anda: alamat IP, tanggal dan waktu
              permintaan, URL yang diminta, URL perujuk (referrer), jenis dan versi browser, sistem operasi, serta kode status HTTP. Data ini diperlukan
              untuk menyajikan situs serta menjaga stabilitas dan keamanannya (misalnya untuk menangkal serangan). Data ini tidak digabungkan dengan
              sumber data lain dan tidak digunakan untuk mengidentifikasi Anda.
            </p>
            <p>
              Dasar hukum: Pasal 6 ayat (1) huruf f GDPR – kepentingan sah kami atas situs yang aman dan berfungsi baik. Vercel menyimpan data log
              selama jangka waktu terbatas, lalu menghapusnya. Vercel dapat memproses data di Amerika Serikat. Vercel tersertifikasi berdasarkan EU-U.S.
              Data Privacy Framework (Kerangka Privasi Data UE-AS), yang telah mendapat keputusan kecukupan dari Komisi Eropa (Pasal 45 GDPR). Selain
              itu, berlaku perjanjian pemrosesan data Vercel, yang mencakup Klausul Kontrak Standar (Standard Contractual Clauses) UE.
            </p>
          </>
        ),
      }),
      cookies: section({
        nav: "Cookie dan analitik",
        heading: "3. Cookie dan analitik",
        body: () => (
          <>
            <p>
              Tanpa persetujuan Anda, kami tidak memasang cookie dan tidak menggunakan analitik. Kami tidak menggunakan jaringan iklan, fingerprinting,
              atau plugin media sosial, dan semua font serta gambar dimuat dari domain kami sendiri. Kami tidak melakukan pengambilan keputusan otomatis
              atau pembuatan profil (Pasal 22 GDPR).
            </p>
            <p>
              Pilihan Anda di banner persetujuan disimpan di penyimpanan lokal (local storage) browser Anda (entri <code>refco-analytics-consent</code>,
              nilai “granted” atau “denied”), agar kami tidak perlu bertanya lagi di setiap halaman. Entri ini diperlukan untuk menghormati pilihan
              Anda dan tidak dikirim kepada siapa pun.
            </p>
            <h3 id="analytics">Google Analytics – hanya dengan persetujuan Anda</h3>
            <p>
              Jika Anda memilih “Izinkan analitik”, situs ini memuat Google Analytics 4, layanan dari Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Ireland (“Google”). Google Analytics memasang cookie <code>_ga</code> dan{" "}
              <code>_ga_{site.analyticsId.replace(/^G-/, "")}</code> (secara default disimpan hingga dua tahun) untuk membedakan pengunjung. Layanan ini
              mencatat halaman yang dilihat, cara pengunjung sampai ke situs ini, perkiraan wilayah yang diturunkan dari alamat IP, serta data browser
              dan perangkat. Menurut Google, Analytics 4 tidak mencatat atau menyimpan alamat IP. Kami hanya menggunakan laporannya dalam bentuk
              agregat, untuk melihat halaman mana yang dibaca. Fitur iklan dinonaktifkan: tidak ada cookie iklan dan tidak ada personalisasi iklan.
            </p>
            <p>
              Dasar hukum: persetujuan Anda (Pasal 6 ayat (1) huruf a GDPR). Google bertindak sebagai prosesor data kami. Data dapat ditransfer ke
              Google LLC di AS, yang tersertifikasi berdasarkan EU-U.S. Data Privacy Framework. Google menghapus data tingkat pengguna setelah periode
              retensi yang diatur di Analytics, paling lama 14 bulan. Anda dapat menarik persetujuan kapan saja, dengan akibat hukum untuk waktu mendatang, melalui
              “Pengaturan cookie” di bagian bawah setiap halaman; cookie Analytics kemudian dihapus dari browser Anda dan Analytics tidak lagi dimuat.
              Informasi lebih lanjut dari Google:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener nofollow">
                policies.google.com/privacy
              </a>
              .
            </p>
          </>
        ),
      }),
      "affiliate-links": section({
        nav: "Tautan ke exchange",
        heading: "4. Tautan ke exchange (tautan afiliasi)",
        body: (c) => (
          <p>
            Situs kami berisi tautan ke exchange kripto pihak ketiga. Sebagian di antaranya adalah tautan referral yang memungkinkan exchange mengenali
            bahwa Anda datang dari situs kami. Kami tidak mengirimkan data pribadi apa pun kepada exchange; pengenal referral merupakan bagian dari
            tautan itu sendiri dan mengidentifikasi kami, bukan Anda. Begitu Anda mengeklik, Anda berada di situs exchange dan yang berlaku adalah
            kebijakan privasi exchange tersebut. Exchange kemudian dapat memasang cookie dan memproses data Anda sebagai pengendali data yang terpisah.
            Exchange melaporkan kepada kami komisi yang timbul dari akun yang dibuka lewat tautan kami. Laporan semacam itu dapat memuat pengenal akun
            berbentuk pseudonim (misalnya user ID) dan angka biaya; kami menggunakannya hanya untuk menghitung komisi (Pasal 6 ayat (1) huruf f GDPR)
            dan tidak berusaha mengidentifikasi Anda darinya. Selengkapnya tentang tautan ini:{" "}
            <Link href={c.links.affiliateDisclosure}>Pengungkapan afiliasi</Link>.
          </p>
        ),
      }),
      email: section({
        nav: "Kontak lewat email",
        heading: "5. Kontak lewat email",
        body: () => (
          <p>
            Jika Anda menghubungi kami lewat email, kami memproses data yang Anda berikan (alamat email, nama, isi pesan) untuk menjawab permintaan
            Anda. Dasar hukum: Pasal 6 ayat (1) huruf f GDPR – kepentingan sah kami untuk menjawab pertanyaan. Pesan Anda disimpan di kotak surat kami,
            yang dikelola penyedia layanan email yang bertindak sebagai prosesor data kami. Kami menghapus korespondensi setelah permintaan Anda selesai
            ditangani, kecuali hukum mewajibkan kami menyimpannya lebih lama. Anda tidak wajib memberikan data pribadi apa pun; hanya saja, tanpa alamat
            email kami tidak dapat membalas.
          </p>
        ),
      }),
      recipients: section({
        nav: "Penerima data",
        heading: "6. Penerima data",
        body: () => (
          <p>
            Kami tidak menjual data pribadi dan tidak meneruskannya kepada pihak ketiga untuk tujuan mereka sendiri. Data hanya diproses oleh penyedia
            layanan yang disebutkan di atas – penyedia hosting, penyedia email, dan, jika Anda mengizinkan analitik, Google – dan hanya diungkapkan
            kepada otoritas jika hukum mewajibkan kami melakukannya.
          </p>
        ),
      }),
      rights: section({
        nav: "Hak Anda",
        heading: "7. Hak Anda",
        body: () => (
          <>
            <p>Dengan memenuhi syarat yang ditetapkan hukum, Anda berhak:</p>
            <ul>
              <li>mengakses data pribadi yang kami simpan tentang Anda (Pasal 15 GDPR),</li>
              <li>meminta perbaikan data yang tidak akurat (Pasal 16 GDPR),</li>
              <li>meminta penghapusan (Pasal 17 GDPR) dan pembatasan pemrosesan (Pasal 18 GDPR),</li>
              <li>meminta portabilitas data (Pasal 20 GDPR),</li>
              <li>
                mengajukan keberatan, dengan alasan yang berkaitan dengan situasi khusus Anda, atas pemrosesan yang didasarkan pada kepentingan sah
                (Pasal 21 GDPR),
              </li>
              <li>menarik persetujuan yang telah Anda berikan kapan saja, dengan akibat hukum untuk waktu mendatang (Pasal 7 ayat (3) GDPR),</li>
              <li>
                mengajukan pengaduan kepada otoritas pengawas (Pasal 77 GDPR) – di Polandia, Ketua Kantor Perlindungan Data Pribadi (Prezes Urzędu
                Ochrony Danych Osobowych, UODO, uodo.gov.pl), atau otoritas di negara UE tempat Anda tinggal atau bekerja; di Swiss, Komisioner
                Federal untuk Perlindungan Data dan Informasi (FDPIC).
              </li>
            </ul>
            <p>
              Untuk menggunakan hak Anda, kirim email ke <a href={`mailto:${legal.email}`}>{legal.email}</a>. Kami menjawab tanpa penundaan yang tidak
              semestinya dan paling lambat dalam satu bulan.
            </p>
          </>
        ),
      }),
      children: section({
        nav: "Anak-anak",
        heading: "8. Anak-anak",
        body: () => (
          <p>Situs ini ditujukan untuk orang dewasa. Kami tidak dengan sengaja memproses data pribadi orang yang berusia di bawah 18 tahun.</p>
        ),
      }),
      security: section({
        nav: "Keamanan data",
        heading: "9. Keamanan data",
        body: () => (
          <p>
            Situs ini hanya disajikan melalui koneksi HTTPS terenkripsi (TLS) dengan header keamanan yang ketat. Kami menerapkan langkah teknis dan
            organisasi yang memadai untuk melindungi data Anda.
          </p>
        ),
      }),
      changes: section({
        nav: "Perubahan",
        heading: "10. Perubahan kebijakan ini",
        body: (c) => (
          <p>
            Kami dapat memperbarui kebijakan privasi ini jika situs atau ketentuan hukum berubah. Versi terbaru selalu tersedia di halaman ini. Pengelola
            situs disebutkan di halaman <Link href={c.links.imprint}>Informasi hukum</Link>.
          </p>
        ),
      }),
    },
  },
};
