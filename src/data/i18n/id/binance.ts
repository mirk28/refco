import type { ExchangeText } from "../../types";

export const binance: ExchangeText = {
  referral: {
    codeName: "Referral ID",
    whereShort: "Kolom “Referral ID (Optional)” di langkah terakhir pendaftaran",
    apply:
      "Masukkan kode ini di kolom “Referral ID (Optional)” pada langkah terakhir pendaftaran, atau buka tautan pendaftaran di halaman ini agar kode terisi secara otomatis.",
    whereToEnter:
      "Binance meminta kode referral di langkah terakhir pendaftaran – setelah Anda mengonfirmasi alamat email atau nomor telepon dan membuat kata sandi – baik di situs maupun di aplikasi. Jika Anda datang lewat tautan referral, Binance mengisi kode secara otomatis dan menampilkan tanda centang hijau bertuliskan “Linked” di sebelahnya. Jika tidak, ketik REFCO888 di kolom “Referral ID (Optional)”. Langkah ini opsional dan bisa dilewati.",
    afterSignupShort: "Ya – dalam 30 hari, sebelum ada deposit atau transaksi",
    afterSignup:
      "Ya, dengan syarat. Binance mengizinkan Anda menautkan kode referral yang belum dimasukkan lewat halaman penautan referral (binance.com/en/activity/referral/bind-ref) jika usia akun Anda kurang dari 30 hari, akun belum memiliki deposit maupun aktivitas trading, belum memiliki referral, dan merupakan akun utama, jika verifikasi identitas Anda tidak dipakai untuk akun lain dalam 180 hari terakhir, serta jika akun tidak ditandai karena wash trading. Menurut Binance, referral yang sudah tertaut tidak bisa diubah atau dihapus.",
    inviteeReward:
      "REFCO888 adalah kode Binance Referral Pro. Dalam mode Pro, pengguna yang diundang mendapatkan kembali sebagian biaya trading miliknya sendiri, dibayarkan dalam USDC, jika pengundang memilih untuk membagi komisinya – Binance menampilkan tarif yang berlaku saat pendaftaran. Terlepas dari kode ini, Binance memberi setiap pengguna baru yang terverifikasi tugas pemula senilai hingga 100 USD dalam bentuk voucher rebate biaya trading.",
    guide: [
      "Binance menjalankan dua mode referral, dan setiap pengguna baru hanya bisa tergabung di salah satunya. Tautan berformat binance.com/register?ref=… – seperti tautan di halaman ini – termasuk Referral Pro: pengundang mendapat komisi dari biaya trading Anda dan bisa mengembalikan sebagian kepada Anda sebagai rebate dalam USDC. Mode lainnya, Referral Lite, memakai voucher rebate biaya trading untuk pembelian pertama dan transaksi pertama yang bernilai kecil; Binance tidak menerbitkan voucher tersebut untuk kode Pro.",
      "Satu referral Pro berlaku untuk Spot, Margin, dan Futures. Saat nanti Anda membuka akun Futures, Binance menampilkan kolom kedua yang opsional, “Futures Referral ID”. Kolom ini hanya menerima kode dari pengundang yang sama dengan pengundang akun utama Anda, jadi Anda tidak bisa menggabungkan dua pengundang yang berbeda.",
      "Tempat tinggal Anda ikut menentukan. Sejak 1 Juli 2026, pengguna yang terdaftar di negara Wilayah Ekonomi Eropa (EEA) tidak bisa lagi ikut program referral Binance dalam bentuk apa pun, dan ketentuan referral Binance juga mencantumkan pembatasan untuk Inggris, Singapura, Jepang, Turki, Hong Kong, dan Israel. Dari negara yang dilayani Binance, Anda tetap bisa membuat akun, tetapi referral tidak berpengaruh apa-apa.",
    ],
  },
  signup: {
    methods: ["alamat email", "nomor telepon", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Buka halaman pendaftaran Binance",
        text: "Gunakan tombol daftar di halaman ini. Tombol itu membuka accounts.binance.com dengan referral yang sudah terpasang – Binance menampilkan kode REFCO888 di samping formulir.",
      },
      {
        title: "Masukkan alamat email atau nomor telepon",
        text: "Atau lanjutkan dengan Google, Apple, atau Telegram. Setujui Ketentuan Penggunaan dan Pemberitahuan Privasi untuk melanjutkan.",
      },
      {
        title: "Konfirmasi kode 6 digit",
        text: "Binance mengirim kode verifikasi 6 digit ke email atau ponsel Anda. Kode ini berlaku selama 30 menit.",
      },
      {
        title: "Buat kata sandi",
        text: "Minimal 8 karakter, termasuk satu huruf kapital dan satu angka.",
      },
      {
        title: "Periksa kode referral",
        text: "Di langkah terakhir, kolom Referral ID seharusnya sudah terisi, lengkap dengan tanda centang hijau dan “Linked”. Jika kolom masih kosong, masukkan REFCO888 – atau lewati jika Anda tidak ingin memakai referral.",
      },
      {
        title: "Verifikasi identitas",
        text: "Setelah itu, Binance mengarahkan Anda ke verifikasi identitas. Setiap pengguna baru wajib menyelesaikannya sebelum melakukan deposit atau trading.",
      },
    ],
    kycShort: "Wajib untuk semua produk",
    kyc: "Ya. Binance mewajibkan setiap pengguna baru menyelesaikan verifikasi identitas (status “Verified”) sebelum memakai produk apa pun – termasuk deposit dan transaksi kripto. Anda memilih dokumen, mengunggahnya, lalu menjalani pemeriksaan liveness; menurut Binance, peninjauan biasanya selesai dalam 48 jam. Akun lama yang belum pernah diverifikasi hanya bisa melakukan penarikan.",
    documents:
      "Sebagian besar pengguna bisa melakukan verifikasi dengan paspor, kartu identitas nasional, atau surat izin mengemudi (SIM), lalu menjalani pemeriksaan liveness (wajah).",
    minAge: "18 tahun (Ketentuan Penggunaan Binance)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Membayar biaya dengan BNB memberi diskon 25% untuk biaya spot (0,075%, turun dari 0,10%) dan diskon 10% untuk biaya futures USDⓈ-M (maker 0,018% / taker 0,045%, turun dari 0,02% / 0,05%).",
  extraFeeMarkets: ["Futures COIN-M"],
  sourceLabels: [
    "Binance: Cara mendaftar di situs (langkah kode referral)",
    "Binance: Cara mendaftar di aplikasi",
    "Binance: Menautkan kode referral setelah pendaftaran",
    "Binance: Mode Referral Pro dan Referral Lite",
    "Binance: Ketentuan program referral dan pembatasan regional",
    "Binance: Hadiah selamat datang untuk pengguna baru (voucher rebate biaya)",
    "Binance: Tarif biaya trading spot",
    "Binance: Tarif biaya futures USDⓈ-M",
    "Binance: Tarif biaya futures COIN-M",
    "Binance: Leverage dan margin futures USDⓈ-M",
    "Binance: Batas leverage untuk akun futures baru",
    "Binance: Verifikasi identitas",
    "Binance: Ketentuan Penggunaan",
    "Binance: Daftar negara terlarang",
    "Binance: Lisensi dan pendaftaran resmi",
    "Binance: Bukti cadangan (proof of reserves)",
    "Binance: Dana SAFU",
    "Binance: Tentang Binance",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures"],
  bonusHeadline: "Voucher rebate biaya hingga 100 USD",
  benefits: [
    "Tugas pemula senilai hingga 100 USD dalam bentuk voucher rebate biaya trading setelah akun Anda terverifikasi",
    "Satu referral berlaku untuk Spot, Margin, dan Futures – tidak perlu kode kedua",
    "Diskon 25% untuk biaya spot dan 10% untuk biaya futures USDⓈ-M saat Anda membayar biaya dengan BNB",
    "Kode masih bisa ditautkan hingga 30 hari setelah pendaftaran, selama Anda belum melakukan deposit atau trading",
  ],
  benefitNote:
    "Voucher selamat datang adalah penawaran pengguna baru yang umum dari Binance, bukan hadiah dari kode referral. Voucher ini diterbitkan setelah verifikasi identitas, mengembalikan biaya trading spot, tidak bisa memotong biaya transaksi lewat API, dan hanya bisa dipakai di aplikasi Binance. Binance mengecualikan banyak negara dari penawaran ini, di antaranya Inggris, Amerika Serikat, Kanada, Belanda, Norwegia, Serbia, Jepang, Singapura, dan Hong Kong.",
  headquarters: "Beroperasi lewat entitas berlisensi ADGM di Abu Dhabi",
  regulation:
    "Diatur oleh ADGM FSRA (Abu Dhabi); lisensi dan pendaftaran lain, antara lain di Dubai (VARA), Bahrain, Kazakhstan, Australia, dan Jepang",
  users: "320 juta+ pengguna terdaftar (menurut Binance)",
  assets: "600+ aset kripto",
  maxLeverage: "Hingga 150x (kontrak perpetual BTCUSDT dan ETHUSDT)",
  feeNote: "Level VIP yang lebih tinggi menurunkan tarif lebih jauh lagi.",
  products: ["Spot", "Margin", "Futures USDⓈ-M & COIN-M", "Opsi", "Copy trading", "Bot trading", "Earn & Launchpool"],
  tagline: "Likuiditas terdalam di pasar derivatif kripto",
  quickAnswer:
    "Kode referral Binance adalah REFCO888. Binance memintanya di langkah terakhir pendaftaran; lewat tombol di halaman ini, kode terisi secara otomatis. Satu kode berlaku untuk Spot, Margin, dan Futures. Jika lupa memasukkannya, Anda masih bisa menautkan kode dalam 30 hari setelah pendaftaran, selama belum melakukan deposit atau trading. Pengguna baru yang terverifikasi juga bisa mendapatkan voucher rebate biaya trading hingga 100 USD.",
  about: [
    "Binance diluncurkan pada Juli 2017 dan, menurut Binance sendiri, dalam 180 hari sudah menjadi exchange kripto terbesar di dunia. Kini Binance melaporkan lebih dari 320 juta pengguna terdaftar di lebih dari 180 negara dan menyediakan lebih dari 600 aset kripto. Di pasar derivatif, Binance jelas nomor satu: pada tanggal data pasar kami, open interest di Binance lebih besar daripada gabungan tiga exchange berikutnya di peringkat derivatif CoinMarketCap. Bagi trader, hal ini penting karena order book yang dalam berarti spread lebih ketat dan slippage lebih kecil pada order berukuran besar.",
    "Satu login memberi akses ke trading spot dan margin, futures dengan margin USDⓈ dan margin koin, opsi, bot trading, dan copy trading, ditambah Earn dan Launchpool. Leverage futures USDⓈ-M bisa mencapai 150x pada kontrak perpetual BTCUSDT dan ETHUSDT untuk posisi hingga 300.000 USDT; kontrak dengan margin koin hingga 125x. Akun futures baru tidak bisa memakai lebih dari 20x selama 30 hari pertama.",
    "Binance.com diatur oleh Financial Services Regulatory Authority dari Abu Dhabi Global Market (ADGM) lewat tiga entitas berlisensi. Binance juga mencantumkan lisensi dan pendaftaran di Dubai (VARA), Bahrain, Kazakhstan, Australia (AUSTRAC), India, Indonesia, Jepang, Selandia Baru, Thailand, Meksiko, El Salvador, Argentina, Brasil, dan Afrika Selatan. Bukti cadangan (proof of reserves) Binance menggabungkan Merkle tree dengan zk-SNARKs sehingga pengguna bisa memastikan saldo mereka sendiri ikut tercakup, dan dana darurat SAFU yang dibentuk pada 2018 bernilai sekitar US$1 miliar per Februari 2026.",
  ],
  highlights: [
    { title: "Likuiditas No. 1", text: "Open interest dan volume futures terbesar dibanding exchange mana pun." },
    { title: "Biaya futures rendah", text: "Maker 0,02% / taker 0,05% di level standar, 10% lebih murah dengan BNB." },
    { title: "Semua dalam satu aplikasi", text: "Futures, opsi, bot, copy trading, dan Earn dalam satu akun." },
  ],
  pros: [
    "Likuiditas tak tertandingi untuk kontrak perpetual BTC, ETH, dan altcoin utama",
    "Biaya standar yang kompetitif, ditambah diskon ekstra dengan BNB",
    "Bukti cadangan yang bisa Anda verifikasi sendiri dan dana SAFU sekitar US$1 miliar",
    "Kode referral yang terlewat masih bisa ditautkan dalam 30 hari",
  ],
  cons: [
    "Tidak tersedia di Amerika Serikat, Kanada, dan Belanda",
    "Verifikasi identitas wajib sebelum Anda bisa melakukan deposit atau trading",
    "Akun futures baru dibatasi leverage 20x selama 30 hari pertama",
    "Penduduk Wilayah Ekonomi Eropa (EEA) dikecualikan dari program referral sejak Juli 2026",
  ],
  bestFor: [
    "Trader futures aktif yang membutuhkan likuiditas dalam",
    "Trader yang menginginkan satu platform untuk semua kebutuhan",
    "Pengguna bervolume tinggi yang mendapat manfaat dari level VIP",
  ],
  signupTip:
    "Selesaikan verifikasi identitas sejak awal: tanpa verifikasi, Binance tidak mengizinkan akun baru melakukan deposit atau trading, dan tugas selamat datang baru diberikan setelah Anda terverifikasi.",
  safety:
    "Binance menerbitkan bukti cadangan (proof of reserves) yang menurut Binance menunjukkan seluruh saldo akun didukung 1:1 – audit 12 November 2026 menunjukkan rasio cadangan BTC sebesar 100,05% – dan Anda bisa memverifikasi akun sendiri di Wallet → Verification. Perlindungan akun mencakup autentikasi dua faktor, passkey, dan whitelist penarikan. Dana SAFU dimaksudkan untuk melindungi pengguna dalam kondisi ekstrem. Tidak ada exchange terpusat yang bebas risiko, jadi simpan di sana hanya dana yang benar-benar Anda pakai untuk trading aktif.",
  restricted:
    "Daftar negara terlarang Binance (diperbarui 5 Januari 2026) mencantumkan Amerika Serikat, Kanada, Belanda, Kuba, Korea Utara, Iran, Krimea, serta wilayah yang disebut Republik Rakyat Donetsk dan Luhansk.",
  faqs: [
    {
      topic: "referral",
      q: "Apakah REFCO888 kode referral Binance yang masih berlaku?",
      a: "Ya. Pada 16 November 2026, tautan binance.com/register?ref=REFCO888 membuka halaman pendaftaran resmi Binance, yang menampilkan kode REFCO888 di samping formulir pendaftaran.",
    },
    {
      topic: "referral",
      q: "Apa bedanya Binance Referral Pro dan Referral Lite?",
      a: "Keduanya adalah mode yang terpisah, dan pengguna baru hanya bisa berada di salah satunya. Di Referral Pro, pengundang mendapat komisi dari biaya trading Anda dan bisa membagikan sebagian kepada Anda sebagai rebate yang dibayarkan dalam USDC. Di Referral Lite, kedua pihak menerima voucher rebate biaya trading setelah menyelesaikan tugas kecil berupa pembelian pertama dan transaksi pertama. REFCO888 adalah kode Referral Pro, jadi voucher Lite tidak berlaku.",
    },
    {
      topic: "referral",
      q: "Apakah ada kode referral Binance Futures tersendiri?",
      a: "Binance menampilkan kolom opsional “Futures Referral ID” saat Anda membuka akun Futures. Kolom ini hanya menerima kode dari pengundang yang sama, yaitu pemilik kode atau tautan Referral Pro yang Anda pakai saat mendaftar, sehingga satu referral praktis berlaku untuk Spot, Margin, dan Futures.",
    },
    {
      topic: "referral",
      q: "Bisakah saya mengganti kode referral Binance nanti?",
      a: "Tidak. Binance menyatakan bahwa hubungan referral yang sudah terbentuk tidak bisa diubah atau dihapus. Hanya akun yang sama sekali belum memiliki referral yang bisa menautkannya, dalam 30 hari setelah pendaftaran dan sebelum deposit atau transaksi pertama.",
    },
    {
      topic: "referral",
      q: "Apakah kode referral Binance berlaku di Uni Eropa?",
      a: "Tidak lagi. Menurut ketentuan referral Binance, sejak 1 Juli 2026 pengguna yang terdaftar di negara Wilayah Ekonomi Eropa (EEA) tidak lagi berhak mengikuti Binance Referral Program. Ketentuan tersebut juga mencantumkan pembatasan untuk Inggris, Singapura, Jepang, Turki, Hong Kong, dan Israel.",
    },
    {
      topic: "signup",
      q: "Bisakah saya mendaftar di Binance dengan Google, Apple, atau Telegram?",
      a: "Ya. Selain alamat email atau nomor telepon, halaman pendaftaran Binance menyediakan “Continue with Google”, “Continue with Apple”, dan “Continue with Telegram”.",
    },
    {
      topic: "signup",
      q: "Apa saja syarat kata sandi Binance?",
      a: "Kata sandi Binance harus terdiri dari minimal 8 karakter, termasuk satu huruf kapital dan satu angka.",
    },
    {
      topic: "signup",
      q: "Berapa lama kode verifikasi Binance berlaku?",
      a: "Kode 6 digit yang dikirim Binance ke email atau ponsel Anda saat pendaftaran berlaku selama 30 menit.",
    },
    {
      topic: "signup",
      q: "Berapa lama proses verifikasi identitas Binance?",
      a: "Menurut Binance, peninjauan biasanya selesai dalam 48 jam setelah Anda mengirimkan dokumen dan lolos pemeriksaan liveness.",
    },
    {
      topic: "signup",
      q: "Apakah Binance bisa dipakai tanpa KYC?",
      a: "Tidak. Semua pengguna baru wajib terverifikasi sebelum bisa memakai produk Binance, termasuk deposit dan transaksi kripto. Akun lama yang belum terverifikasi hanya bisa melakukan penarikan.",
    },
    {
      topic: "bonus",
      q: "Apa bonus selamat datang Binance untuk pengguna baru?",
      a: "Binance memberi pengguna baru tiga tugas pemula yang membuka voucher rebate biaya trading senilai hingga 100 USD. Tugas ini baru diberikan setelah Anda menyelesaikan verifikasi akun, dan setiap voucher mengembalikan persentase tertentu dari biaya trading spot Anda.",
    },
    {
      topic: "bonus",
      q: "Bisakah saya menarik bonus selamat datang Binance?",
      a: "Tidak. Hadiah ini berupa voucher rebate biaya trading, bukan uang tunai: voucher mengembalikan biaya trading spot, tidak bisa dipakai untuk transaksi yang dilakukan lewat API, dan hanya bisa digunakan di aplikasi Binance.",
    },
    {
      topic: "bonus",
      q: "Negara mana saja yang dikecualikan dari voucher selamat datang Binance?",
      a: "Ketentuan Binance mengecualikan, antara lain, Inggris, Amerika Serikat, Kanada, Belanda, Kroasia, Norwegia, Islandia, Liechtenstein, Serbia, Albania, Rusia, Jepang, Singapura, dan Hong Kong. Daftar lengkapnya ada di artikel bantuan Binance tentang hadiah selamat datang.",
    },
    {
      topic: "fees",
      q: "Berapa diskon biaya dengan BNB di Binance?",
      a: "Membayar biaya dengan BNB memberi diskon 25% untuk biaya spot – 0,075%, turun dari 0,10% bagi pengguna reguler – dan diskon 10% untuk biaya futures USDⓈ-M, sehingga menjadi maker 0,018% dan taker 0,045%.",
    },
    {
      topic: "fees",
      q: "Berapa leverage maksimum di Binance?",
      a: "Hingga 150x pada kontrak perpetual USDⓈ-M BTCUSDT dan ETHUSDT untuk posisi hingga 300.000 USDT, dan hingga 125x pada kontrak perpetual BTCUSD dengan margin koin. Akun futures yang berumur kurang dari 30 hari tidak bisa memakai lebih dari 20x. Leverage tinggi membuat risiko likuidasi naik tajam.",
    },
    {
      topic: "fees",
      q: "Berapa biaya futures COIN-M di Binance?",
      a: "Pengguna reguler membayar maker 0,02% dan taker 0,05% untuk futures COIN-M, sama dengan tarif kontrak USDⓈ-M yang bermargin USDT.",
    },
    {
      topic: "safety",
      q: "Apakah Binance tersedia di Amerika Serikat?",
      a: "Tidak. Amerika Serikat masuk daftar negara terlarang Binance, bersama Kanada dan Belanda.",
    },
    {
      topic: "safety",
      q: "Apa itu dana SAFU Binance?",
      a: "SAFU (Secure Asset Fund for Users) adalah dana darurat yang dibentuk Binance pada 2018 untuk melindungi pengguna dalam kondisi ekstrem. Menurut Binance, per Februari 2026 dana ini berisi aset kripto senilai sekitar US$1 miliar dan akan diisi ulang jika nilainya turun di bawah US$800 juta.",
    },
    {
      topic: "safety",
      q: "Bagaimana cara memeriksa bukti cadangan Binance?",
      a: "Binance memublikasikan rasio cadangannya di halaman bukti cadangan (proof of reserves) dan memakai Merkle tree dengan zk-SNARKs. Pengguna yang sudah masuk ke akun bisa memastikan saldo mereka sendiri ikut tercakup di Wallet → Verification.",
    },
  ],
};
