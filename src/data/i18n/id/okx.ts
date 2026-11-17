import type { ExchangeText } from "../../types";

export const okx: ExchangeText = {
  referral: {
    codeName: "kode referral",
    whereShort: "Kolom “Referral code (optional)” di langkah email saat pendaftaran",
    apply:
      "Masukkan kode ini di kolom “Referral code (optional)” pada langkah email saat pendaftaran – kolom ini masih tertutup dan harus dibuka terlebih dahulu – atau buka tautan pendaftaran di halaman ini, yang otomatis membawa kode tersebut untuk Anda.",
    whereToEnter:
      "Di situs OKX, kode dimasukkan ke kolom “Referral code (optional)” pada langkah tempat Anda mengisi alamat email. Kolom ini masih tertutup, jadi buka terlebih dahulu. Jika Anda datang lewat tautan referral, kode ikut terbawa, dan menurut OKX kode yang terisi otomatis dari tautan tidak bisa diubah. Untuk ponsel, petunjuk OKX adalah memasukkan email di halaman undangan terlebih dahulu, lalu menginstal aplikasi lewat tautan tersebut dan mendaftar dengan email yang sama – jika Anda menginstal aplikasi secara terpisah dan mendaftar di sana, kode bisa saja tidak terbawa.",
    afterSignupShort: "Tidak – hanya saat pendaftaran",
    afterSignup:
      "Tidak. OKX menyatakan bahwa kode undangan hanya berlaku saat pendaftaran dan tidak bisa ditambahkan secara retroaktif; FAQ program referral OKX menyebutkan bahwa kode umumnya tidak bisa ditambahkan atau diubah setelahnya. Menghapus akun lalu mendaftar ulang tidak membuat Anda kembali memenuhi syarat dan bisa dianggap sebagai pelanggaran. Tautan berformat okx.com/join/… tidak bisa dikaitkan dengan akun yang sudah ada.",
    inviteeReward:
      "Sebagai pengguna yang diundang, Anda mendapatkan Welcome Rewards OKX (hadiah selamat datang), yang juga disebut New User Bonus. Hadiah ini terpisah dari hadiah untuk pengundang dan bergantung pada negara Anda, kampanye yang berjalan, dan tautan yang Anda pakai; penawarannya ditetapkan saat Anda mendaftar. Saat kami memeriksa, halaman undangan untuk kode ini menampilkan hadiah selamat datang hingga €400 di OKX Europe, dan halaman undangan global OKX menjanjikan hingga 100 USDT untuk pendaftaran dan penyelesaian tugas.",
    guide: [
      "Kode referral OKX menautkan akun baru Anda dengan orang yang mengundang Anda. Dampak praktisnya bagi Anda adalah akses ke Welcome Rewards: serangkaian tugas deposit dan trading yang nominal hadiahnya ditetapkan OKX per negara, kampanye, dan kelompok pengguna. Penawaran yang Anda dapatkan ditentukan saat pendaftaran, karena itu kode harus sudah terpasang pada saat itu.",
      "Versi OKX yang Anda buka bergantung pada tempat tinggal Anda. Pengunjung dari Wilayah Ekonomi Eropa (EEA) – dan dari beberapa negara Eropa lainnya – diarahkan ke OKX Europe (okx.com/en-eu), platform yang dijalankan OKX Europe Limited di Malta berdasarkan MiCA. Di sana, hadiah dibayarkan dalam bentuk kripto, voucher X-Perps, atau VIP Pass; hadiah kripto terkunci hingga 45 hari (bisa dipakai trading, tetapi tidak bisa ditarik), dan volume X-Perps tidak dihitung untuk tugas trading.",
      "Di situs global, hadiah masuk dalam bentuk kripto atau kartu rebate yang harus dibuka dalam 30 hari, tugas trading harus dipenuhi dengan satu transaksi saja, dan tugas yang belum selesai hilang 180 hari setelah pendaftaran.",
    ],
  },
  signup: {
    methods: ["alamat email (nomor telepon ditambahkan dan dikonfirmasi selama pendaftaran)"],
    steps: [
      {
        title: "Buka halaman undangan OKX",
        text: "Gunakan tombol pendaftaran di halaman ini. OKX membuka halaman undangan untuk kode T7IRGAR3 dan menampilkan hadiah selamat datang yang berlaku di negara Anda.",
      },
      {
        title: "Pilih negara atau wilayah tempat tinggal",
        text: "Pilih tempat Anda tinggal, setujui Ketentuan Layanan (Terms of Service), lalu klik “Next”.",
      },
      {
        title: "Masukkan alamat email dan periksa kode referral",
        text: "Buka bagian “Referral code (optional)” – kolom ini seharusnya berisi T7IRGAR3 – lalu klik “Sign up”.",
      },
      {
        title: "Konfirmasi kode email 6 digit",
        text: "OKX mengirim kode 6 digit ke alamat email Anda. Kode ini berlaku selama 10 menit.",
      },
      {
        title: "Tambahkan nomor telepon",
        text: "Masukkan nomor telepon Anda dan kode 6 digit yang dikirim ke nomor tersebut. OKX mewajibkan alamat email sekaligus nomor telepon di setiap akun.",
      },
      {
        title: "Buat kata sandi",
        text: "Pilih kata sandi yang kuat dan unik untuk akun ini.",
      },
      {
        title: "Verifikasi identitas",
        text: "Selesaikan verifikasi identitas dengan dokumen identitas resmi dari pemerintah dan swafoto atau pemeriksaan wajah. Trading, deposit, dan penarikan baru bisa dilakukan setelahnya.",
      },
    ],
    kycShort: "Wajib sebelum trading, deposit, dan penarikan",
    kyc: "Ya. OKX mewajibkan verifikasi identitas untuk menggunakan akun individu – trading, deposit, dan penarikan semuanya baru bisa dilakukan setelahnya. Anda mengisi negara tempat tinggal, kewarganegaraan, nama, tanggal lahir, dan data identitas, mengunggah dokumen resmi dari pemerintah, lalu menjalani swafoto atau pemeriksaan wajah; OKX juga bisa meminta bukti alamat yang diterbitkan dalam 6 bulan terakhir. Menurut OKX, peninjauan selesai dalam 24 jam, dan satu dokumen identitas hanya bisa dipakai untuk satu akun.",
    documents:
      "Dokumen identitas resmi dari pemerintah yang masih berlaku: paspor, kartu identitas nasional, SIM, atau izin tinggal – yang menentukan adalah daftar untuk negara Anda yang ditampilkan saat verifikasi – ditambah swafoto atau pemeriksaan wajah dan, jika diminta, bukti alamat yang diterbitkan tidak lebih dari 6 bulan lalu.",
    minAge: "18 tahun",
  },
  welcomeTasks: [],
  tokenDiscount: "",
  extraFeeMarkets: ["Opsi"],
  sourceLabels: [
    "OKX: Cara mendaftar akun",
    "OKX: FAQ program referral",
    "OKX: FAQ afiliasi (kode undangan dan rebate)",
    "OKX: Syarat dan ketentuan New User Bonus (EEA)",
    "OKX: FAQ New User Bonus (EEA)",
    "OKX: Syarat dan ketentuan New User Bonus (global)",
    "OKX: Tabel biaya",
    "OKX: FAQ aturan biaya trading",
    "OKX: Leverage X-Perps di EEA",
    "API publik OKX: instrumen swap perpetual (leverage maksimum)",
    "OKX: Cara memverifikasi akun individu",
    "OKX: Verifikasi identitas – syarat, waktu peninjauan, dan dokumen",
    "OKX: Pengungkapan risiko dan kepatuhan (lokasi yang dibatasi)",
    "OKX: Ketentuan Layanan",
    "OKX Europe: Tentang kami",
    "OKX Middle East: Tentang kami (lisensi VARA)",
    "OKX: Bukti cadangan (proof of reserves)",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futures & swap perpetual"],
  bonusHeadline: "Hadiah selamat datang hingga €400 atau 100 USDT",
  benefits: [
    "Welcome Rewards OKX untuk pengguna baru: hingga €400 di OKX Europe dan hingga 100 USDT di situs global, dibuka lewat tugas deposit dan trading",
    "Biaya standar rendah: maker 0,08% / taker 0,10% untuk spot dan 0,02% / 0,05% untuk futures dan kontrak perpetual",
    "Kode yang dibawa tautan tidak mungkin salah ketik – OKX mengunci kode yang sudah terisi otomatis",
    "Bukti cadangan (proof of reserves) bulanan yang bisa Anda cocokkan dengan saldo sendiri",
  ],
  benefitNote:
    "Welcome Rewards mensyaratkan pendaftaran lewat tautan yang ditentukan dan verifikasi identitas yang sudah selesai, lalu tugas deposit dan trading. Di OKX Europe, transfer internal tidak dihitung sebagai deposit, pasangan trading tanpa biaya dan volume X-Perps tidak dihitung sebagai transaksi, hadiah kripto terkunci hingga 45 hari, dan pengkreditan bisa memakan waktu hingga 48 jam. Di situs global, hadiah harus dibuka dalam 30 hari dan tugas kedaluwarsa 180 hari setelah pendaftaran. Nominal dan tugas berbeda menurut negara dan kampanye.",
  headquarters:
    "Aux Cayes FinTech Co. Ltd. (Seychelles) untuk situs global; OKX Europe Limited (Malta); OKX Middle East Fintech FZE (Dubai)",
  regulation: "Izin MiCA lewat OKX Europe Limited (Malta, MFSA); lisensi VARA di Dubai",
  users: "120 juta+ pengguna (menurut OKX Europe)",
  assets: "270+ koin (menurut OKX Europe)",
  maxLeverage: "Hingga 100x (situs global; hingga 10x di OKX Europe)",
  feeNote:
    "Tarif ini berlaku untuk pengguna level Regular; level di atasnya dimulai dari aset 100.000 atau volume spot 30 hari sebesar 1.000.000 (5.000.000 untuk futures), dihitung dalam EUR di OKX Europe dan dalam USD di situs global. Futures dengan jatuh tempo dikenai biaya penyelesaian (settlement) 0,01%.",
  products: ["Spot", "Swap perpetual", "Futures dengan jatuh tempo", "Opsi", "Bot trading"],
  tagline: "Spot dan derivatif berbiaya rendah dengan bukti cadangan (proof of reserves) bulanan",
  quickAnswer:
    "Kode referral OKX adalah T7IRGAR3. Di situs web, kode ini dimasukkan ke kolom “Referral code (optional)” pada langkah email saat pendaftaran; tombol di halaman ini sudah membawanya untuk Anda. Kode hanya berlaku saat pendaftaran – OKX tidak menambahkan kode undangan secara retroaktif. Pengguna baru mendapatkan Welcome Rewards OKX: hingga €400 di OKX Europe atau hingga 100 USDT di situs global, setelah verifikasi identitas serta tugas deposit dan trading.",
  about: [
    "OKX didirikan pada 2017 dan merupakan salah satu exchange kripto terbesar, baik untuk spot maupun derivatif. Halaman OKX Europe menyebut lebih dari 120 juta pengguna dan mencantumkan lebih dari 270 koin. Pengguna Regular membayar maker 0,08% dan taker 0,10% untuk spot, 0,02% / 0,05% untuk futures dan swap perpetual, serta 0,03% untuk opsi.",
    "Produknya mencakup spot, swap perpetual, futures dengan jatuh tempo, opsi, dan bot trading, tetapi produk yang bisa Anda gunakan bergantung pada tempat tinggal Anda. Di situs global, leverage tertinggi adalah 100x, tersedia untuk kontrak perpetual seperti BTC-USDT, ETH-USDT, SOL-USDT, dan XRP-USDT. Di OKX Europe, produk perpetual bernama X-Perps dan dibatasi hingga 10x, lebih rendah untuk posisi yang lebih besar.",
    "OKX menerbitkan bukti cadangan (proof of reserves) setiap bulan. Laporan ke-49 mencakup US$33,87 miliar dalam 21 aset; verifikasi 1 November 2026 menunjukkan rasio cadangan 108% untuk BTC, 101% untuk ETH, 106% untuk USDT, dan 100% untuk USDC. Sistemnya dibangun di atas zk-STARK dan Merkle tree, sehingga pengguna yang sudah masuk ke akunnya bisa memastikan saldonya sendiri ikut tercakup. OKX Europe Limited mendapat izin dari Malta Financial Services Authority sebagai penyedia layanan aset kripto berdasarkan MiCA, dan OKX Middle East Fintech FZE memegang lisensi dari VARA Dubai.",
  ],
  highlights: [
    { title: "Biaya standar rendah", text: "0,08% / 0,10% untuk spot dan 0,02% / 0,05% untuk futures dan kontrak perpetual." },
    {
      title: "Bukti cadangan (proof of reserves) bulanan",
      text: "Sejauh ini sudah ada 49 laporan, yang bisa diverifikasi dengan zk-STARK dan Merkle tree.",
    },
    { title: "Berizin MiCA di Wilayah Ekonomi Eropa (EEA)", text: "OKX Europe Limited mendapat izin dari regulator Malta, MFSA." },
  ],
  pros: [
    "Biaya standar rendah untuk spot, futures, dan opsi",
    "Bukti cadangan (proof of reserves) bulanan yang bisa diverifikasi sendiri, dengan rasio di atas 100%",
    "Entitas berizin MiCA untuk pengguna Wilayah Ekonomi Eropa (EEA) dan lisensi VARA di Dubai",
    "Opsi dan futures dengan jatuh tempo, selain swap perpetual",
  ],
  cons: [
    "Kode referral tidak bisa ditambahkan setelah pendaftaran",
    "Produk sangat bergantung pada negara Anda – kontrak perpetual dibatasi hingga 10x di OKX Europe",
    "Hadiah selamat datang di OKX Europe terkunci hingga 45 hari",
    "Tidak tersedia di Kanada, India, Jepang, Hong Kong, dan sebagian Amerika Serikat",
  ],
  bestFor: [
    "Trader spot dan futures yang memperhatikan biaya",
    "Trader opsi",
    "Pengguna di Wilayah Ekonomi Eropa (EEA) yang menginginkan platform berizin MiCA",
  ],
  signupTip:
    "Di ponsel, masukkan email Anda di halaman undangan terlebih dahulu, lalu instal aplikasi lewat tautan tersebut – jika Anda mengunduh aplikasi secara terpisah dan mendaftar di sana, kode referral bisa saja tidak terbawa.",
  safety:
    "OKX menerbitkan bukti cadangan (proof of reserves) setiap bulan – rasionya 108% untuk BTC, 101% untuk ETH, 106% untuk USDT, dan 100% untuk USDC pada verifikasi 1 November 2026 – dan memungkinkan pengguna yang sudah masuk ke akunnya memeriksa saldo sendiri lewat “View my report”, dengan alat open-source dan alamat dompet yang dipublikasikan. Setiap akun wajib terhubung dengan alamat email sekaligus nomor telepon. Seperti di exchange mana pun, simpan di platform hanya modal yang Anda pakai untuk trading.",
  restricted:
    "OKX mencantumkan lokasi berikut sebagai wilayah yang dibatasi: Afganistan, Kanada, Kuba, Hong Kong, Iran, India, Jepang, Malaysia, Nepal, Korea Utara, Suriah, Uzbekistan, wilayah Krimea, Donetsk, dan Luhansk, serta yurisdiksi tertentu di Amerika Serikat, termasuk semua wilayah teritori AS. Pembatasan sebagian berlaku di Australia, Brasil, Korea Selatan, dan Inggris (tanpa derivatif), serta untuk pembayaran fiat di Rusia. Daftar ini terakhir diperbarui pada 14 November 2026.",
  faqs: [
    {
      topic: "referral",
      q: "Apakah T7IRGAR3 kode referral OKX yang masih berlaku?",
      a: "Ya. Pada 16 November 2026, tautan okx.com/join/T7IRGAR3 membuka halaman undangan resmi OKX untuk kode tersebut, lengkap dengan hadiah selamat datang dan tautan pendaftaran yang membawa kode itu.",
    },
    {
      topic: "referral",
      q: "Mengapa saya tidak melihat kolom kode referral di OKX?",
      a: "Kolom “Referral code (optional)” di formulir pendaftaran masih tertutup dan harus dibuka terlebih dahulu. OKX menambahkan bahwa jika kolom itu sama sekali tidak muncul, Anda sebaiknya mendaftar lewat tautan referral.",
    },
    {
      topic: "referral",
      q: "Bagaimana cara memakai kode referral OKX di aplikasi?",
      a: "Buka tautan undangan di ponsel dan masukkan alamat email Anda di sana, lalu instal aplikasi OKX lewat tautan tersebut dan daftar dengan email yang sama. OKX memperingatkan bahwa kode bisa saja tidak terbawa jika Anda menginstal aplikasi secara terpisah dan mendaftar di dalamnya.",
    },
    {
      topic: "referral",
      q: "Bisakah saya mendapatkan referral OKX dengan menghapus akun lalu mendaftar ulang?",
      a: "Tidak. OKX menyatakan bahwa menghapus akun lalu mendaftar ulang tidak membuat Anda kembali memenuhi syarat dan bisa dianggap sebagai pelanggaran.",
    },
    {
      topic: "signup",
      q: "Apakah saya perlu nomor telepon untuk mendaftar di OKX?",
      a: "Ya. Pendaftaran OKX meminta alamat email terlebih dahulu, lalu nomor telepon, masing-masing dikonfirmasi dengan kode 6 digit. Keduanya wajib terhubung, dan setiap alamat email serta nomor telepon hanya bisa dipakai untuk satu akun.",
    },
    {
      topic: "signup",
      q: "Berapa lama kode verifikasi email OKX berlaku?",
      a: "Kode 6 digit yang dikirim OKX ke alamat email Anda saat pendaftaran berlaku selama 10 menit.",
    },
    {
      topic: "signup",
      q: "Berapa lama proses verifikasi identitas di OKX?",
      a: "Menurut OKX, peninjauan selesai dalam 24 jam setelah Anda mengirimkan dokumen serta swafoto atau pemeriksaan wajah.",
    },
    {
      topic: "signup",
      q: "Apakah OKX bisa dipakai tanpa KYC?",
      a: "Tidak. Verifikasi identitas wajib untuk menggunakan akun individu; trading, deposit, dan penarikan baru tersedia setelahnya.",
    },
    {
      topic: "bonus",
      q: "Apa itu bonus selamat datang OKX?",
      a: "Pengguna baru yang mendaftar lewat tautan referral mendapatkan Welcome Rewards OKX (New User Bonus). Saat kami memeriksa, halaman undangan menampilkan hingga €400 di OKX Europe, dan halaman undangan global menampilkan hingga 100 USDT. Hadiah ini dibuka dengan menyelesaikan verifikasi identitas, tugas deposit, dan tugas trading, serta berbeda menurut negara dan kampanye.",
    },
    {
      topic: "bonus",
      q: "Bisakah saya langsung menarik hadiah selamat datang OKX?",
      a: "Tidak. Di OKX Europe, hadiah kripto terkunci hingga 45 hari – Anda bisa memakainya untuk trading, tetapi tidak bisa menariknya. Di situs global, hadiah langsung terkunci begitu masuk dan tidak bisa dipakai trading maupun ditarik selama masa penguncian.",
    },
    {
      topic: "bonus",
      q: "Deposit dan transaksi apa saja yang dihitung untuk tugas selamat datang OKX?",
      a: "Di OKX Europe, deposit kripto atau fiat lewat SEPA, iDEAL, atau Bancontact dihitung, sedangkan transfer internal tidak. Transaksi lewat Buy, Sell, Convert, atau order book spot dihitung; pasangan tanpa biaya dan volume X-Perps tidak. Di situs global, tugas trading harus dipenuhi dengan satu transaksi saja.",
    },
    {
      topic: "fees",
      q: "Berapa biaya opsi di OKX?",
      a: "Pengguna Regular membayar maker 0,03% dan taker 0,03% untuk opsi.",
    },
    {
      topic: "fees",
      q: "Berapa leverage maksimum di OKX?",
      a: "Di situs global, leverage maksimumnya 100x untuk swap perpetual seperti BTC-USDT, ETH-USDT, SOL-USDT, dan XRP-USDT, dan lebih rendah untuk posisi yang lebih besar. Di OKX Europe, X-Perps dibatasi hingga 10x. Leverage tinggi sangat meningkatkan risiko likuidasi.",
    },
    {
      topic: "fees",
      q: "Bagaimana cara mendapatkan biaya lebih rendah di OKX?",
      a: "Level biaya OKX bergantung pada saldo aset atau volume trading 30 hari Anda. Level Regular berakhir pada aset 100.000, atau pada volume 30 hari sebesar 1.000.000 untuk spot dan 5.000.000 untuk futures; di atas itu, berlaku tarif VIP.",
    },
    {
      topic: "safety",
      q: "Apakah OKX teregulasi di Eropa?",
      a: "Ya. OKX Europe Limited mendapat izin dari Malta Financial Services Authority sebagai penyedia layanan aset kripto berdasarkan MiCA dan melayani nasabah di Wilayah Ekonomi Eropa (EEA) lewat okx.com/en-eu.",
    },
    {
      topic: "safety",
      q: "Apakah OKX tersedia di Amerika Serikat?",
      a: "Hanya secara terbatas: OKX mencantumkan yurisdiksi tertentu di Amerika Serikat dan semua wilayah teritori AS sebagai lokasi yang dibatasi. Kanada, India, Jepang, dan Hong Kong dibatasi sepenuhnya.",
    },
    {
      topic: "safety",
      q: "Apakah OKX menerbitkan bukti cadangan (proof of reserves)?",
      a: "Ya, setiap bulan. Laporan ke-49 mencakup US$33,87 miliar dalam 21 aset, dan verifikasi 1 November 2026 menunjukkan 108% untuk BTC, 101% untuk ETH, 106% untuk USDT, dan 100% untuk USDC.",
    },
  ],
};
