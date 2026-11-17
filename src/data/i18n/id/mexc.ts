import type { ExchangeText } from "../../types";

export const mexc: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Kolom “Referral Code (Optional)” di formulir pendaftaran (membedakan huruf besar dan kecil)",
    apply:
      "Masukkan kode ini di kolom “Referral Code (Optional)” pada formulir pendaftaran – huruf besar dan kecilnya dibedakan – atau buka tautan pendaftaran di halaman ini, yang langsung mengisi kolom tersebut dan menguncinya.",
    whereToEnter:
      "Formulir pendaftaran MEXC memiliki kolom berlabel “Referral Code (Optional)” dengan petunjuk “Enter invitation code (case-sensitive)”, jadi ketik 4E3xM persis seperti tertulis, dengan huruf E dan M kapital. Di situs, centang “Enter Referral Code” agar kolom itu muncul; di aplikasi, ketuk panah kecil untuk membukanya. Tautan di halaman ini membuka halaman undangan MEXC dengan 4E3xM sudah terisi dan kolomnya terkunci.",
    afterSignupShort: "Ya – dalam 30 hari setelah pendaftaran",
    afterSignup:
      "Ya. MEXC menyediakan fitur mandiri untuk menautkan pengundang setelah pendaftaran: hanya akun yang mendaftar dalam 30 hari terakhir yang memenuhi syarat, fitur ini berlaku untuk akun utama, dan Anda menautkannya dengan kode referral atau UID pengundang. Pengundang harus sudah mendaftar lebih dulu daripada Anda. Menurut MEXC, kode undangan yang sudah ditautkan tidak bisa diubah atau dihapus.",
    inviteeReward:
      "MEXC tidak memberi pengguna yang diundang diskon biaya permanen. Kode ini justru membuka akses ke event referral MEXC: halaman undangannya menampilkan hadiah tambahan hingga 140 USDT bagi pendaftar lewat referral, di atas hadiah pengguna baru hingga 10.000 USDT. Hadiah referral dibayarkan dalam bentuk bonus futures setelah Anda menyelesaikan tugas deposit bersih dan tugas trading futures dalam 7 hari setelah mendaftar.",
    guide: [
      "Di MEXC, kode referral punya dua fungsi. Kode ini mencatat siapa yang mengundang Anda – pengundang mendapat komisi dari transaksi spot dan futures Anda – sekaligus membuat Anda berhak ikut event referral yang diadakan MEXC untuk pendaftar baru. Event ini berjenjang: 50 USDT untuk deposit bersih minimal US$100 dan volume futures US$1.000, 90 USDT untuk volume futures US$10.000, dan 140 USDT untuk US$20.000 – semuanya dalam 7 hari setelah pendaftaran dan setelah Primary KYC selesai.",
      "Hadiahnya berupa bonus futures, voucher biaya, dan airdrop posisi, bukan uang tunai. MEXC menandai event ini sebagai terbatas waktu dan “only open to designated users” (hanya untuk pengguna tertentu), dan FAQ event itu menyebutkan bahwa bonus referral tidak bisa digabung dengan event 10.000 USDT atau bonus Rewards Hub – padahal halaman undangan mengiklankan keduanya bersamaan. Jadikan jumlah yang tampil di akun Anda sendiri setelah mendaftar sebagai acuan.",
      "Karena kode ini membedakan huruf besar dan kecil, tautan adalah cara paling aman untuk memakainya. Jika Anda sudah mendaftar tanpa kode, Anda masih punya waktu 30 hari untuk menautkannya sendiri.",
    ],
  },
  signup: {
    methods: ["alamat email", "nomor telepon", "Google", "Apple", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Buka halaman pendaftaran MEXC",
        text: "Gunakan tombol daftar di halaman ini. MEXC membuka halaman “Your Friend Invites You to Join MEXC” dengan kode referral 4E3xM yang sudah terisi dan terkunci.",
      },
      {
        title: "Masukkan alamat email atau nomor telepon dan kata sandi",
        text: "Atau lanjutkan dengan Google, Apple, Telegram, atau MetaMask. Kata sandi minimal 10 karakter dan harus berisi huruf besar dan kecil, angka, serta simbol.",
      },
      {
        title: "Periksa kode referral",
        text: "Kolom “Referral Code (Optional)” seharusnya menampilkan 4E3xM. Jika Anda mengetiknya sendiri, perhatikan huruf kapitalnya – kode ini membedakan huruf besar dan kecil.",
      },
      {
        title: "Selesaikan puzzle geser",
        text: "MEXC menampilkan puzzle geser sebagai pemeriksaan keamanan.",
      },
      {
        title: "Masukkan kode 6 digit",
        text: "Ketik kode verifikasi 6 digit yang dikirim MEXC, lalu pilih “Confirm”.",
      },
      {
        title: "Selesaikan KYC",
        text: "Selesaikan Primary KYC untuk membuka hadiah dan menghindari pembatasan pada deposit, penarikan, dan trading.",
      },
    ],
    kycShort: "Diperlukan untuk deposit, penarikan, dan trading",
    kyc: "Dalam praktiknya, ya. MEXC menyatakan bahwa verifikasi KYC yang tidak diselesaikan bisa memengaruhi akses Anda ke layanan seperti deposit, penarikan, dan trading; hadiahnya pun mensyaratkan minimal Primary KYC. Primary KYC mengizinkan penarikan kripto 80 BTC per hari; Advanced KYC menaikkannya menjadi 200 BTC per hari dan menambahkan limit fiat 20.000 USD per hari. Spot, futures, dan event terbuka di kedua level.",
    documents: "MEXC menerima kartu identitas, paspor, SIM, atau izin tinggal.",
    minAge:
      "Usia dewasa menurut hukum di negara Anda – Perjanjian Pengguna MEXC mensyaratkan Anda sudah cukup umur untuk membuat kontrak yang mengikat dan tidak menyebut angka tertentu",
  },
  welcomeTasks: [
    { task: "Pendaftaran akun", reward: "Voucher 10 USDT" },
    { task: "Login pertama di aplikasi", reward: "Voucher 10 USDT" },
    { task: "Selesaikan Primary KYC dalam 7 hari", reward: "Airdrop posisi BTCUSDT senilai US$200" },
    { task: "Trading futures kumulatif (level tertinggi: minimal 1.000.000 USDT)", reward: "Bonus futures hingga 7.620 USDT" },
    { task: "Event referral: deposit bersih minimal US$100 dan volume futures US$1.000 dalam 7 hari", reward: "50 USDT dalam bentuk bonus futures" },
    { task: "Event referral: volume futures minimal US$10.000 dalam 7 hari", reward: "90 USDT dalam bentuk bonus futures" },
    { task: "Event referral: volume futures minimal US$20.000 dalam 7 hari", reward: "140 USDT dalam bentuk bonus futures" },
  ],
  tokenDiscount:
    "Membayar biaya dengan MX memberi diskon 20% untuk biaya spot dan futures; untuk futures, MX harus berada di dompet Futures Anda. Diskon 50% sebelumnya untuk pemegang 500 MX atau lebih ditangguhkan sejak 9 Februari 2026.",
  extraFeeMarkets: ["Futures Coin-M (BTCUSD, ETHUSD)"],
  sourceLabels: [
    "MEXC: Proses pendaftaran akun (web)",
    "MEXC: Proses pendaftaran akun (aplikasi)",
    "MEXC: Panduan referral",
    "MEXC: Panduan menautkan pengundang secara mandiri",
    "MEXC: Event referral dan ketentuannya",
    "MEXC: Rewards Hub (hadiah pengguna baru)",
    "MEXC: Pengumuman hadiah selamat datang (masa berlaku bonus)",
    "MEXC: Tabel biaya",
    "MEXC: Cara memakai MX untuk diskon biaya trading",
    "MEXC: Peluncuran leverage 500x di futures",
    "MEXC: FAQ KYC",
    "MEXC: Pertanyaan umum seputar verifikasi KYC",
    "MEXC: Perjanjian Pengguna (yurisdiksi terlarang)",
    "MEXC Learn: Negara yang dibatasi",
    "MEXC: Tentang MEXC",
    "MEXC: Mengapa MEXC (pasangan trading dan kontrak)",
    "MEXC: Bukti cadangan (proof of reserves)",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futures"],
  bonusHeadline: "Hadiah pengguna baru hingga 10.000 USDT",
  benefits: [
    "Hadiah pengguna baru hingga 10.000 USDT di Rewards Hub – voucher, airdrop posisi, dan bonus futures",
    "Pendaftar lewat referral melihat hadiah tambahan hingga 140 USDT dalam bentuk bonus futures",
    "Biaya maker 0% untuk spot dan sebagian besar kontrak futures",
    "Kode masih bisa ditautkan dalam 30 hari setelah pendaftaran",
  ],
  benefitNote:
    "Semua hadiah berbasis tugas dan mensyaratkan minimal Primary KYC. Bonus tidak bisa ditarik – hanya keuntungan dari bonus itu yang bisa – dan memindahkan dana keluar dari akun Futures sebelum bonus habis terpakai membuat seluruh bonus hangus. Bonus futures berlaku untuk kontrak USDT-M dan diumumkan dengan masa berlaku 15 hari. Event referral terbatas waktu dan hanya untuk pengguna tertentu, FAQ event MEXC menyebut bonusnya tidak bisa digabung dengan event 10.000 USDT, dan hadiah melewati tinjauan risiko hingga 7 hari. Wilayah yang melarang derivatif bisa tidak memenuhi syarat.",
  headquarters: "MEXC (Comoros) Ltd, terdaftar di Uni Komoro",
  regulation: "Tidak ada lisensi yang disebutkan di situs MEXC sendiri; MEXC menyatakan tidak memiliki lisensi kelas satu maupun izin MiCA",
  users: "40 juta+ pengguna (menurut MEXC)",
  assets: "1.384 pasangan spot dan 1.152 kontrak futures (menurut MEXC)",
  maxLeverage: "Hingga 500x (futures BTCUSDT dan ETHUSDT)",
  feeNote:
    "Tarif futures yang ditampilkan adalah tarif MEXC untuk BTCUSDT dan ETHUSDT; untuk semua kontrak, halaman biaya MEXC menyebut rentang 0% hingga 0,04% untuk maker dan 0% hingga 0,1% untuk taker, sementara beberapa pasangan diperdagangkan tanpa biaya. MEXC mencatat bahwa tarif maker bisa berbeda tergantung event platform atau wilayah Anda.",
  products: ["Futures USDT-M & Coin-M", "Spot", "Copy trading", "Launchpad", "Earn"],
  tagline: "Biaya maker nol dan leverage hingga 500x",
  quickAnswer:
    "Kode referral MEXC adalah 4E3xM – kode ini membedakan huruf besar dan kecil. Masukkan kode ini di kolom “Referral Code (Optional)” saat mendaftar, atau gunakan tombol di halaman ini yang mengisinya sekaligus menguncinya. Jika Anda lupa, MEXC mengizinkan Anda menautkan pengundang sendiri dalam 30 hari setelah pendaftaran. Pengguna baru bisa membuka hadiah hingga 10.000 USDT, dan halaman undangan MEXC menampilkan bonus tambahan hingga 140 USDT bagi pendaftar lewat referral.",
  about: [
    "MEXC beroperasi sejak 2018 dan menyatakan melayani lebih dari 40 juta pengguna di lebih dari 170 negara dan wilayah. Exchange ini bersaing lewat harga dan keragaman pasar: pengguna reguler tidak membayar biaya maker untuk spot dan sebagian besar kontrak futures, sementara MEXC mencantumkan 1.384 pasangan spot serta 1.152 kontrak futures.",
    "Platform futures MEXC menawarkan kontrak bermargin USDT dan bermargin koin dengan leverage hingga 500x untuk BTCUSDT dan ETHUSDT. Leverage maksimum ini tidak tersedia di semua negara – MEXC mengecualikan Australia, Austria, Belgia, Kanada, Prancis, Hong Kong, Italia, Rusia, Inggris, dan Yaman – dan copy trading tidak mendukung 250x maupun 500x. Tersedia juga copy trading, launchpad, dan produk Earn.",
    "Pihak yang berkontrak dengan pengguna adalah MEXC (Comoros) Ltd, terdaftar di Uni Komoro. MEXC tidak menyebut lisensi apa pun di situsnya sendiri dan menyatakan sendiri bahwa exchange ini tidak memiliki lisensi kelas satu maupun izin MiCA; panduan MEXC sendiri mencatat bahwa MEXC tercantum dalam daftar sementara ESMA untuk entitas yang tidak patuh. MEXC memublikasikan bukti cadangan (proof of reserves) – snapshot 9 November 2026 menunjukkan 122,42% untuk USDT, 109,84% untuk USDC, 317,61% untuk BTC, dan 112,41% untuk ETH – serta mengelola Guardian Fund senilai US$100 juta dan dana asuransi futures.",
  ],
  highlights: [
    { title: "Biaya maker 0%", text: "Biaya maker nol untuk spot dan sebagian besar kontrak futures." },
    { title: "Bisa ditautkan dalam 30 hari", text: "Lupa kodenya? MEXC mengizinkan Anda menautkan pengundang selama 30 hari setelah pendaftaran." },
    { title: "Cadangan di atas 100%", text: "USDT 122%, BTC 318%, ETH 112% pada snapshot 9 November 2026." },
  ],
  pros: [
    "Biaya trading termasuk yang terendah di industri: maker 0%, taker 0,02% di futures BTCUSDT",
    "Kode referral bisa ditautkan hingga 30 hari setelah pendaftaran",
    "1.384 pasangan spot dan 1.152 kontrak futures",
    "Bukti cadangan di atas 100% dan Guardian Fund senilai US$100 juta",
  ],
  cons: [
    "Tidak memiliki lisensi kelas satu maupun izin MiCA, menurut pernyataan MEXC sendiri",
    "Tidak tersedia di Amerika Serikat, Inggris, Kanada, Prancis, Belanda, Singapura, dan Hong Kong",
    "Bonus tidak bisa ditarik dan hangus jika Anda memindahkan dana terlalu cepat",
    "Leverage 500x berisiko sangat tinggi",
  ],
  bestFor: [
    "Trader futures frekuensi tinggi yang memperhitungkan setiap biaya",
    "Trader yang memburu listing baru",
    "Pengguna berpengalaman yang nyaman dengan exchange offshore",
  ],
  signupTip:
    "Selesaikan Primary KYC dalam 7 hari setelah mendaftar – langkah ini membuka airdrop posisi BTCUSDT senilai US$200 – dan jangan memindahkan dana keluar dari akun Futures selama bonus futures masih terpakai, karena bonusnya akan hangus.",
  safety:
    "MEXC memublikasikan bukti cadangan (proof of reserves) – 122,42% untuk USDT, 109,84% untuk USDC, 317,61% untuk BTC, dan 112,41% untuk ETH pada snapshot 9 November 2026 – serta mengelola Guardian Fund senilai US$100 juta dan dana asuransi futures. MEXC sendiri menyatakan tidak memegang lisensi kelas satu maupun izin MiCA, jadi gunakan pengamanan akun yang kuat dan jangan simpan tabungan jangka panjang di sana. Untuk token yang sangat baru, periksa likuiditas dan spesifikasi kontraknya sebelum trading token tersebut dengan leverage.",
  restricted:
    "Perjanjian Pengguna MEXC (terakhir diperbarui 13 Oktober 2026) melarang pengguna dari Korea Utara, Kuba, Sudan, Iran, Tiongkok daratan, Singapura, Malaysia, Amerika Serikat, Inggris, Hong Kong, Kazakhstan, Rusia, wilayah Ukraina yang dikuasai Rusia, Belarus, Kanada, Prancis, dan Belanda, serta dari negara yang terkena sanksi dan negara dalam daftar hitam FATF.",
  faqs: [
    {
      topic: "referral",
      q: "Apakah kode referral MEXC 4E3xM berfungsi?",
      a: "Ya. Pada 16 November 2026, tautan di halaman ini membuka halaman undangan MEXC dengan inviteCode=4E3xM di alamat URL dan 4E3xM sudah terisi serta terkunci di kolom “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Apakah kode referral MEXC membedakan huruf besar dan kecil?",
      a: "Ya. Kolom pendaftaran MEXC memuat petunjuk “Enter invitation code (case-sensitive)”. Kodenya 4E3xM – angka 4, huruf E kapital, angka 3, huruf x kecil, dan huruf M kapital.",
    },
    {
      topic: "referral",
      q: "Bagaimana cara menautkan pengundang di MEXC setelah mendaftar?",
      a: "Gunakan fitur penautan pengundang mandiri dari MEXC dalam 30 hari setelah mendaftar. Fitur ini tersedia untuk akun utama, Anda memasukkan kode referral atau UID pengundang, dan pengundang harus sudah mendaftar sebelum Anda. Pengundang yang sudah ditautkan tidak bisa diubah atau dihapus lagi.",
    },
    {
      topic: "referral",
      q: "Apakah kode referral MEXC memberi diskon biaya?",
      a: "MEXC tidak mencantumkan diskon biaya permanen bagi pengguna yang diundang. Manfaatnya adalah event referral dengan hadiah hingga 140 USDT dalam bentuk bonus futures, ditambah hadiah umum untuk pengguna baru.",
    },
    {
      topic: "signup",
      q: "Apa syarat kata sandi MEXC?",
      a: "Minimal 10 karakter, termasuk huruf besar, huruf kecil, angka, dan simbol.",
    },
    {
      topic: "signup",
      q: "Bisakah saya mendaftar di MEXC dengan Google, Apple, Telegram, atau MetaMask?",
      a: "Ya. Halaman pendaftaran MEXC menyediakan Google dan Apple secara langsung serta Telegram dan MetaMask di bawah “More Options”, selain email dan nomor telepon.",
    },
    {
      topic: "signup",
      q: "Apa saja level dan limit KYC di MEXC?",
      a: "Primary KYC mengizinkan penarikan kripto 80 BTC per hari dan trading P2P. Advanced KYC menaikkan limit menjadi 200 BTC per hari dan mengizinkan transaksi fiat hingga 20.000 USD per hari. Spot, futures, dan event terbuka di kedua level.",
    },
    {
      topic: "signup",
      q: "Apakah MEXC bisa dipakai tanpa KYC?",
      a: "Hanya dengan pembatasan. MEXC menyatakan bahwa verifikasi KYC yang tidak diselesaikan bisa memengaruhi akses Anda ke layanan seperti deposit, penarikan, dan trading; hadiah pengguna baru dan hadiah referral juga mensyaratkan minimal Primary KYC.",
    },
    {
      topic: "bonus",
      q: "Apa saja bonus selamat datang MEXC?",
      a: "MEXC mengiklankan hadiah pengguna baru hingga 10.000 USDT. Contoh dari Rewards Hub MEXC: voucher 10 USDT untuk pendaftaran, voucher 10 USDT untuk login pertama di aplikasi, airdrop posisi BTCUSDT senilai US$200 untuk menyelesaikan Primary KYC dalam 7 hari, dan bonus futures hingga 7.620 USDT untuk trading kumulatif, dengan level tertinggi pada volume 1.000.000 USDT.",
    },
    {
      topic: "bonus",
      q: "Berapa bonus referral MEXC?",
      a: "Dalam event referral MEXC, pengguna yang diundang menerima 50 USDT untuk deposit bersih minimal US$100 ditambah volume futures US$1.000, 90 USDT untuk volume futures US$10.000, dan 140 USDT untuk US$20.000 – semuanya dalam 7 hari setelah mendaftar. Hadiah dibayarkan sebagai bonus futures, voucher biaya, dan airdrop posisi. Event ini terbatas waktu dan hanya terbuka untuk pengguna tertentu.",
    },
    {
      topic: "bonus",
      q: "Bisakah saya menarik bonus MEXC?",
      a: "Tidak. MEXC menyatakan bahwa bonus tidak bisa ditarik, tetapi keuntungan dari transaksi yang memakai bonus bisa. Memindahkan aset apa pun keluar dari akun Futures sebelum bonus habis terpakai membuat seluruh bonus hangus.",
    },
    {
      topic: "bonus",
      q: "Berapa lama masa berlaku bonus futures MEXC?",
      a: "MEXC mengumumkan masa berlaku 15 hari untuk bonus futures dan voucher. Bonus futures hanya bisa dipakai untuk kontrak USDT-M.",
    },
    {
      topic: "fees",
      q: "Berapa biaya futures MEXC?",
      a: "Untuk BTCUSDT dan ETHUSDT, pengguna reguler membayar maker 0% dan taker 0,02%. Untuk semua kontrak, halaman biaya MEXC menyebut rentang 0% hingga 0,04% untuk maker dan 0% hingga 0,1% untuk taker, sementara beberapa pasangan bebas biaya.",
    },
    {
      topic: "fees",
      q: "Berapa diskon biaya MX di MEXC?",
      a: "Diskonnya 20% untuk biaya spot dan futures jika Anda membayarnya dengan MX; untuk futures, MX harus berada di dompet Futures Anda. Diskon 50% sebelumnya untuk pemegang minimal 500 MX ditangguhkan sejak 9 Februari 2026.",
    },
    {
      topic: "fees",
      q: "Apakah MEXC benar-benar menawarkan leverage 500x?",
      a: "Ya, untuk futures BTCUSDT dan ETHUSDT. Leverage ini tidak tersedia di Australia, Austria, Belgia, Kanada, Prancis, Hong Kong, Italia, Rusia, Inggris, dan Yaman, serta tidak didukung untuk copy trading. Pada 500x, pergerakan harga 0,2% yang berlawanan dengan posisi Anda bisa menghapus seluruh posisi.",
    },
    {
      topic: "safety",
      q: "Apakah MEXC teregulasi?",
      a: "MEXC tidak menyebut lisensi apa pun di situsnya sendiri dan menyatakan tidak memiliki lisensi kelas satu maupun izin MiCA. Pihak yang berkontrak dengan pengguna adalah MEXC (Comoros) Ltd, terdaftar di Uni Komoro.",
    },
    {
      topic: "safety",
      q: "Apakah MEXC tersedia di Amerika Serikat atau Inggris?",
      a: "Tidak. Amerika Serikat dan Inggris sama-sama termasuk yurisdiksi terlarang dalam Perjanjian Pengguna MEXC, begitu pula Kanada, Prancis, Belanda, Singapura, dan Hong Kong.",
    },
    {
      topic: "safety",
      q: "Apakah MEXC memublikasikan bukti cadangan (proof of reserves)?",
      a: "Ya. Snapshot 9 November 2026 menunjukkan rasio cadangan 122,42% untuk USDT, 109,84% untuk USDC, 317,61% untuk BTC, dan 112,41% untuk ETH. MEXC juga mengelola Guardian Fund senilai US$100 juta.",
    },
  ],
};
