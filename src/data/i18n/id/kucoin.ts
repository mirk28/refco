import type { ExchangeText } from "../../types";

export const kucoin: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Kolom “Referral Code (Optional)” di langkah pertama pendaftaran",
    apply:
      "Masukkan kode ini ke kolom “Referral Code (Optional)” di langkah pertama pendaftaran, atau gunakan tautan pendaftaran di halaman ini – tautan itu mengisi kolom tersebut sekaligus menguncinya.",
    whereToEnter:
      "KuCoin meminta kode referral di langkah paling awal pendaftaran, bersama alamat email atau nomor telepon Anda – baik di situs maupun di aplikasi. Kolomnya berlabel “Referral Code (Optional)”. Tautan di halaman ini membuka halaman pendaftaran KuCoin dengan QBSS4BT7 yang sudah terisi dan kolom yang terkunci, jadi tidak ada yang bisa salah. Panduan pendaftaran KuCoin menambahkan bahwa Anda bisa mengetik kode secara manual jika tautan gagal mengisinya.",
    afterSignupShort: "Atas permintaan – “Link Referrer” di Pusat Bantuan (syaratnya tidak dipublikasikan)",
    afterSignup:
      "Mungkin. Pusat Bantuan KuCoin menyediakan permintaan layanan mandiri bernama “Link Referrer” (“Submit a request to add a referrer manually”, yaitu permintaan untuk menambahkan pengundang secara manual), serta permintaan pasangannya untuk melepas pengundang. Keduanya mengharuskan Anda masuk ke akun, dan KuCoin tidak memublikasikan syarat maupun batas waktunya, sehingga persetujuan tidak dijamin. Memasukkan kode saat mendaftar tetap menjadi cara yang pasti.",
    inviteeReward:
      "Menurut halaman referral KuCoin, teman yang diundang berpeluang mendapat cashback dan hadiah eksklusif untuk pengguna baru (“stand to receive cashback and exclusive newcomer rewards”). Cashback ini adalah bagian dari biaya trading Anda sendiri: pengundang bisa menetapkan tarif cashback eksklusif bagi orang yang diundangnya, hingga setinggi tarif komisinya saat ini, sehingga tidak ada persentase tetap. Hubungan referral berlaku selama 365 hari sejak Anda mendaftar. Selain itu, KuCoin mengiklankan bonus hingga 10.650 USDT untuk pengguna baru.",
    guide: [
      "Program referral KuCoin memberi pengundang komisi dari biaya trading pengguna yang diundangnya, dan memungkinkan pengundang mengembalikan sebagian komisi itu kepada pengguna yang diundang dalam bentuk cashback. KuCoin tidak menetapkan persentase cashback yang tetap – besarnya mengikuti tarif yang diatur pengundang, dengan batas atas tarif komisi pengundang itu sendiri.",
      "Referral ini mencakup transaksi spot (yang di KuCoin meliputi spot, margin, dan bot trading), ETF, serta transaksi futures. Transaksi yang dilakukan lewat API tidak memenuhi syarat. Hubungan referral berlaku selama 365 hari sejak Anda mendaftar dan berakhir lebih awal jika Anda mencapai VIP 3. Komisi dibayarkan setiap hari dalam mata uang yang dipakai untuk membayar biaya tersebut.",
      "KuCoin menyatakan bahwa program referral tidak tersedia bagi penduduk Belgia, Prancis, Belanda, serta negara atau wilayah lain tempat layanan KuCoin dibatasi.",
    ],
  },
  signup: {
    methods: ["alamat email", "nomor telepon", "Telegram", "Google", "Apple"],
    steps: [
      {
        title: "Buka halaman pendaftaran KuCoin",
        text: "Gunakan tombol pendaftaran di halaman ini. KuCoin membuka halaman “Welcome to KuCoin” dengan kode referral QBSS4BT7 yang sudah tercantum di kolom “Referral Code (Optional)”.",
      },
      {
        title: "Masukkan alamat email atau nomor telepon",
        text: "Atau lanjutkan dengan Telegram, Google, atau Apple. Kode referral juga berada di langkah pertama ini.",
      },
      {
        title: "Setujui Ketentuan Penggunaan",
        text: "Centang kotak Ketentuan Penggunaan dan Kebijakan Privasi, lalu pilih “Create Account and Claim Reward”.",
      },
      {
        title: "Masukkan kode verifikasi",
        text: "KuCoin mengirim kode ke email atau nomor telepon Anda untuk memastikan bahwa alamat atau nomor itu memang milik Anda.",
      },
      {
        title: "Buat kata sandi login",
        text: "Tentukan kata sandi, lalu pilih “Confirm” – akun Anda kini sudah dibuat.",
      },
      {
        title: "Verifikasi identitas",
        text: "Pilih negara dan jenis dokumen identitas, unggah foto dokumen, lalu selesaikan verifikasi wajah. Pengguna baru memerlukan langkah ini untuk memakai produk KuCoin.",
      },
    ],
    kycShort: "Wajib untuk pengguna baru",
    kyc: "Ya. Sejak 31 Agustus 2023, pengguna baru wajib menyelesaikan verifikasi identitas untuk memakai produk dan layanan KuCoin. Verifikasi terdiri atas memilih negara dan jenis dokumen identitas, mengunggah foto dokumen, dan pemeriksaan wajah; satu orang hanya bisa memverifikasi satu akun KuCoin. Akun lama yang belum pernah diverifikasi masih bisa menjual kripto, menutup posisi futures dan margin, mencairkan produk Earn, serta menarik dana, tetapi tidak bisa melakukan deposit.",
    documents: "KuCoin menerima kartu identitas, SIM, paspor, atau izin tinggal, lalu dilanjutkan dengan verifikasi wajah.",
    minAge: "18 tahun (Ketentuan Penggunaan KuCoin)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Membayar biaya dengan KCS memberi diskon 20%. KuCoin menerapkannya pada trading spot dan margin serta mengkreditkannya sebagai rebate, dengan catatan bahwa diskon yang benar-benar diterima bisa sedikit lebih rendah. Level VIP yang lebih tinggi memangkas biaya hingga 75%.",
  extraFeeMarkets: ["Spot – token kelas B", "Spot – token kelas C"],
  sourceLabels: [
    "KuCoin: Cara mendaftar (web dan aplikasi)",
    "KuCoin: Program referral dan aturannya",
    "KuCoin: Layanan mandiri Pusat Bantuan (Link Referrer)",
    "KuCoin: Rewards Hub (tugas pengguna baru)",
    "KuCoin: FAQ Rewards Hub",
    "KuCoin: Tabel biaya per level VIP",
    "KuCoin: Membayar biaya dengan KCS",
    "KuCoin: Verifikasi identitas dan batas akun",
    "KuCoin: Leverage futures menurut ukuran posisi",
    "KuCoin: Biaya bot trading",
    "KuCoin: Ketentuan Penggunaan (wilayah yang dibatasi, usia minimum)",
    "KuCoin: Tentang kami",
    "KuCoin: Bukti cadangan (proof of reserves)",
    "KuCoin EU: Lisensi MiCAR KuCoin EU Exchange GmbH",
    "KuCoin: Pernyataan tentang penyelesaian dengan Departemen Kehakiman AS",
    "KuCoin: Surat CEO tentang insiden keamanan 2020",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures", "Bot trading", "ETF"],
  bonusHeadline: "Bonus hingga 10.650 USDT untuk pengguna baru",
  benefits: [
    "Halaman pendaftaran KuCoin mengiklankan bonus hingga 10.650 USDT untuk pengguna baru, yang bisa dibuka lewat tugas di Rewards Hub",
    "Cashback atas biaya trading Anda jika pengundang sudah menetapkan tarifnya – program KuCoin mengizinkannya selama 365 hari",
    "Satu referral mencakup spot, margin, futures, bot trading, dan ETF",
    "Bot trading gratis dipakai; Anda hanya membayar biaya trading bot",
  ],
  benefitNote:
    "Angka 10.650 USDT adalah angka promosi KuCoin sendiri sekaligus nilai maksimum: Rewards Hub membayarkannya dalam bentuk paket kupon, dana uji coba, voucher biaya, dan hadiah tunai kecil untuk pendaftaran, verifikasi identitas, deposit pertama, transaksi pertama, dan tugas berbatas waktu. Tugas berbatas waktu harus diselesaikan dalam 7 hari sejak pendaftaran, dan hadiah berlaku selama 30 hari. Pasangan stablecoin dan transaksi tanpa biaya tidak dihitung, sedangkan market maker dan pengguna institusional dikecualikan. FAQ Rewards Hub KuCoin masih menyebut batas maksimum lama sebesar 3.200 USDT.",
  headquarters: "Tidak disebutkan oleh KuCoin (Ketentuan Penggunaan tunduk pada hukum Kepulauan Turks dan Caicos)",
  regulation:
    "Lisensi MiCAR lewat KuCoin EU Exchange GmbH di Wina, untuk Wilayah Ekonomi Eropa (EEA) kecuali Malta; pendaftaran AUSTRAC di Australia",
  users: "45 juta+ pengguna (menurut KuCoin)",
  assets: "1.000+ token terdaftar, 1.300+ pasangan trading",
  maxLeverage: "Hingga 125x (tingkat posisi terkecil)",
  feeNote:
    "KuCoin membagi token ke dalam beberapa kelas: tarif spot di atas berlaku untuk token kelas A, sedangkan token kelas B dan kelas C lebih mahal. Kelas token ditentukan oleh mata uang dasar (base currency) pasangan trading.",
  products: ["Futures margin USDT & margin koin", "Spot", "Margin", "Bot trading", "Copy trading", "Earn", "KuCoin Web3 Wallet"],
  tagline: "Altcoin dan bot trading untuk semua orang",
  quickAnswer:
    "Kode referral KuCoin adalah QBSS4BT7. Kode ini dimasukkan ke kolom “Referral Code (Optional)” di langkah pertama pendaftaran; tombol di halaman ini membuka KuCoin dengan kode yang sudah terisi dan terkunci. Referral ini mencakup spot, margin, futures, dan bot trading selama 365 hari, dan KuCoin mengiklankan bonus hingga 10.650 USDT untuk pengguna baru. Jika Anda lupa memasukkan kode, Pusat Bantuan KuCoin menyediakan permintaan “Link Referrer”, tetapi syaratnya tidak dipublikasikan.",
  about: [
    "KuCoin diluncurkan pada kuartal ketiga 2017 dan menyatakan kini melayani lebih dari 45 juta pengguna di lebih dari 200 negara dan wilayah, dengan lebih dari 1.000 token terdaftar. Basis penggunanya tumbuh karena KuCoin cepat melakukan listing altcoin dan membuat trading otomatis mudah diakses: bot trading KuCoin tidak dikenai biaya apa pun selain biaya trading.",
    "Untuk derivatif, KuCoin menyediakan futures dengan margin USDT dan margin koin, dengan leverage maksimum 125x di tingkat posisi terkecil – batasnya turun menjadi 100x di tingkat berikutnya dan terus turun seiring bertambahnya ukuran posisi. Exchange ini juga menawarkan trading margin, copy trading, produk Earn, dan dompet Web3, sementara token KCS memberi diskon 20% untuk biaya spot dan margin.",
    "Pada 27 Januari 2025, KuCoin mengumumkan penyelesaian dengan Departemen Kehakiman AS; sebelumnya exchange ini sudah menutup akun pengguna AS terhitung sejak 23 Januari 2025. Di Wilayah Ekonomi Eropa (EEA), grup KuCoin beroperasi melalui KuCoin EU Exchange GmbH di Wina, penyedia layanan aset kripto berlisensi MiCAR yang diawasi oleh FMA Austria. Setelah peretasan pada 2020 yang berdampak pada sekitar US$285 juta, KuCoin menyatakan bahwa KuCoin bersama dana asuransinya menutup sekitar US$45,55 juta yang tidak bisa dipulihkan, dan tidak ada pengguna yang mengalami kerugian.",
  ],
  highlights: [
    { title: "Bot trading gratis", text: "Bot itu sendiri tidak dipungut biaya – yang ada hanya biaya trading bot." },
    { title: "Kode langsung terkunci", text: "Tautan pendaftaran mengisi QBSS4BT7 dan mengunci kolomnya." },
    { title: "Cadangan di atas 100%", text: "BTC 112%, ETH 115%, USDT 110% per 31 Oktober 2026." },
  ],
  pros: [
    "Trading otomatis yang ramah pemula dengan bot gratis",
    "Pilihan altcoin yang luas dengan lebih dari 1.000 token terdaftar",
    "Biaya futures standar yang rendah: maker 0,02% / taker 0,06%",
    "Bukti cadangan (proof of reserves) di atas 100% untuk BTC, ETH, USDT, dan USDC",
  ],
  cons: [
    "Tidak tersedia di Amerika Serikat, Prancis, Belanda, Singapura, dan sebagian Kanada",
    "Biaya spot naik menjadi 0,2% dan 0,3% untuk token kelas B dan kelas C",
    "Syarat untuk menambahkan pengundang setelah pendaftaran tidak dipublikasikan",
    "Volume futures lebih rendah daripada lima exchange teratas",
  ],
  bestFor: ["Trader yang ingin mengotomatiskan trading dengan bot", "Penggemar altcoin", "Trader futures tingkat menengah"],
  signupTip:
    "Selesaikan verifikasi identitas segera setelah mendaftar – tanpa itu pengguna baru sama sekali tidak bisa memakai KuCoin – dan mulai tugas berbatas waktu di Rewards Hub dalam 7 hari sejak pendaftaran.",
  safety:
    "KuCoin rutin memublikasikan laporan bukti cadangan (proof of reserves). Data per 31 Oktober 2026 menunjukkan rasio cadangan 112% untuk BTC, 115% untuk ETH, 110% untuk USDT, dan 127% untuk USDC, dengan laporan audit bertanggal 9 November 2026. Terkait peretasan 2020, KuCoin menyatakan bahwa tidak ada pengguna yang mengalami kerugian. Bot mengotomatiskan eksekusi, bukan manajemen risiko – selalu tetapkan kondisi berhenti, dan simpan di exchange hanya modal yang memang untuk trading.",
  restricted:
    "Ketentuan Penggunaan KuCoin (diperbarui 29 Oktober 2026) mencantumkan wilayah berikut sebagai wilayah yang dibatasi: Amerika Serikat termasuk wilayah teritorialnya, Singapura, Tiongkok daratan dan Hong Kong, Malaysia, Kazakhstan, Uzbekistan, Rusia, Belarus, Provinsi Ontario dan British Columbia di Kanada, Prancis, Belanda, serta wilayah Krimea, Donetsk, Luhansk, Zaporizhzhia, dan Kherson. Penggunaan VPN untuk mengakali pembatasan ini dilarang.",
  faqs: [
    {
      topic: "referral",
      q: "Apakah kode referral KuCoin QBSS4BT7 berfungsi?",
      a: "Ya. Pada 16 November 2026, tautan di halaman ini membuka halaman pendaftaran KuCoin dengan QBSS4BT7 yang sudah terisi dan terkunci di kolom “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Berapa lama referral KuCoin berlaku?",
      a: "Selama 365 hari sejak Anda mendaftar. Menurut aturan KuCoin, komisi – dan bersama itu cashback apa pun – juga berhenti jika Anda mencapai level VIP 3.",
    },
    {
      topic: "referral",
      q: "Berapa cashback yang saya dapat dengan kode referral KuCoin?",
      a: "KuCoin tidak menetapkan tarif tetap. Pengundang bisa menetapkan tarif cashback eksklusif untuk pengguna yang diundang, hingga setinggi tarif komisinya sendiri, dan cashback dibayarkan untuk transaksi spot, margin, bot trading, ETF, dan futures. Transaksi lewat API tidak memenuhi syarat.",
    },
    {
      topic: "referral",
      q: "Apa arti “Link Referrer” di KuCoin?",
      a: "Ini adalah permintaan layanan mandiri di Pusat Bantuan KuCoin dengan deskripsi “Submit a request to add a referrer manually”, yaitu permintaan untuk menambahkan pengundang secara manual. Jalur ini disediakan untuk akun yang mendaftar tanpa kode. Anda harus masuk ke akun untuk memakainya, dan KuCoin tidak memublikasikan syaratnya.",
    },
    {
      topic: "referral",
      q: "Di negara mana program referral KuCoin tidak berlaku?",
      a: "KuCoin menyatakan bahwa program ini tidak tersedia bagi penduduk Belgia, Prancis, Belanda, serta negara atau wilayah lain tempat layanan KuCoin dibatasi.",
    },
    {
      topic: "signup",
      q: "Bisakah saya mendaftar di KuCoin dengan Google, Apple, atau Telegram?",
      a: "Ya. Halaman pendaftaran KuCoin menampilkan “Or continue with” dengan pilihan Telegram, Google, dan Apple di bawah kolom email dan nomor telepon.",
    },
    {
      topic: "signup",
      q: "Apakah KuCoin bisa dipakai tanpa KYC?",
      a: "Tidak bagi pengguna baru. Sejak 31 Agustus 2023, pengguna baru wajib menyelesaikan verifikasi identitas untuk memakai produk dan layanan KuCoin.",
    },
    {
      topic: "signup",
      q: "Bisakah saya punya dua akun KuCoin?",
      a: "Tidak jika keduanya terverifikasi. KuCoin menyatakan bahwa satu orang hanya bisa memverifikasi satu akun KuCoin.",
    },
    {
      topic: "bonus",
      q: "Apa itu bonus selamat datang KuCoin?",
      a: "Beranda dan halaman pendaftaran KuCoin mengiklankan bonus hingga 10.650 USDT untuk pengguna baru. Bonus ini dibayarkan lewat tugas pengguna baru di Rewards Hub – pendaftaran, verifikasi identitas, deposit pertama, transaksi pertama, dan tugas berbatas waktu – dalam bentuk paket kupon, dana uji coba, voucher biaya, dan hadiah tunai kecil. Tugas pendaftaran tercantum sebagai paket bonus dan hadiah tunai (Bonus Pack and Cash Reward) senilai 400 USDT.",
    },
    {
      topic: "bonus",
      q: "Berapa lama waktu saya untuk mengklaim hadiah pengguna baru KuCoin?",
      a: "Tugas tantangan berbatas waktu harus diselesaikan dalam 7 hari sejak pendaftaran, dan KuCoin menyatakan bahwa hadiah berlaku selama 30 hari sebelum kedaluwarsa.",
    },
    {
      topic: "bonus",
      q: "Transaksi apa saja yang tidak dihitung untuk tugas pengguna baru KuCoin?",
      a: "Transaksi pada pasangan stablecoin dan transaksi tanpa biaya tidak dihitung. Market maker dan pengguna institusional sama sekali tidak memenuhi syarat.",
    },
    {
      topic: "fees",
      q: "Berapa biaya futures KuCoin?",
      a: "Pengguna VIP 0 membayar maker 0,02% dan taker 0,06% untuk futures. Bot Futures Grid memakai biaya trading tetap sebesar 0,06%.",
    },
    {
      topic: "fees",
      q: "Berapa besar diskon KCS di KuCoin?",
      a: "Diskonnya 20%. KuCoin menerapkannya pada trading spot dan margin jika Anda membayar biaya dengan KCS, lalu mengkreditkannya sebagai rebate; diskon yang benar-benar diterima bisa sedikit lebih rendah.",
    },
    {
      topic: "fees",
      q: "Apakah bot trading KuCoin gratis?",
      a: "Ya, KuCoin menyatakan bahwa bot itu sendiri gratis. Transaksinya mengikuti aturan biaya bot tersendiri: bot spot mendapat diskon 20% dari tarif maker dan taker VIP 0, bot Futures Grid membayar tarif tetap 0,06%, dan potongan KCS maupun level VIP tidak berlaku.",
    },
    {
      topic: "fees",
      q: "Berapa leverage maksimum di KuCoin?",
      a: "Leverage maksimum 125x berlaku untuk akun terverifikasi di tingkat posisi terkecil. Leverage futures KuCoin berjenjang menurut ukuran posisi – tingkat berikutnya dibatasi pada 100x.",
    },
    {
      topic: "safety",
      q: "Apakah KuCoin tersedia di Amerika Serikat?",
      a: "Tidak. Amerika Serikat termasuk wilayah yang dibatasi dalam Ketentuan Penggunaan KuCoin, dan KuCoin telah menutup akun pengguna AS terhitung sejak 23 Januari 2025.",
    },
    {
      topic: "safety",
      q: "Apakah KuCoin teregulasi di Eropa?",
      a: "KuCoin EU Exchange GmbH di Wina adalah penyedia layanan aset kripto berlisensi MiCAR yang diawasi oleh Otoritas Pasar Keuangan Austria. Perusahaan ini melayani Wilayah Ekonomi Eropa (EEA) kecuali Malta.",
    },
    {
      topic: "safety",
      q: "Apakah KuCoin pernah diretas?",
      a: "Ya, pada 2020. Dana sekitar US$285 juta terdampak. KuCoin menyatakan bahwa KuCoin bersama dana asuransinya menutup sekitar US$45,55 juta (16%) yang tidak bisa dipulihkan, dan tidak ada pengguna yang mengalami kerugian.",
    },
  ],
};
