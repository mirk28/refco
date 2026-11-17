import type { ExchangeText } from "../../types";

export const gate: ExchangeText = {
  referral: {
    codeName: "kode referral",
    whereShort: "Terpasang lewat tautan pendaftaran – Gate menampilkan pengundang di formulir pendaftaran",
    apply:
      "Buka tautan pendaftaran di halaman ini: Gate memasang kode tersebut pada pendaftaran Anda dan menampilkan banner pengundang beserta hadiahnya di formulir.",
    whereToEnter:
      "Di Gate, cara paling aman adalah tautan referral. Tautan di halaman ini membuka gate.com/signup dengan kode VAAXAW9YVA yang sudah terpasang, dan Gate mengonfirmasinya dengan banner di atas formulir (“Register now to receive a gift from your friend”). Langkah pertama formulir web hanya menanyakan negara tempat tinggal Anda, jadi di sana tidak ada kolom kode terpisah yang perlu diisi. Jika banner pengundang tidak muncul, buka ulang tautan tersebut sebelum membuat akun.",
    afterSignupShort: "Tidak didokumentasikan oleh Gate – gunakan tautan saat mendaftar",
    afterSignup:
      "Gate tidak memublikasikan cara menambahkan kode referral ke akun exchange yang sudah ada. Menurut aturan referral Gate, setiap pengguna hanya bisa mendaftar lewat satu metode referral, dan panduan Gate sendiri memperingatkan bahwa hubungan referral mungkin tidak tercatat jika pengguna baru mendaftar tanpa tautan atau kode undangan. Gunakan tautan ini sebelum membuat akun.",
    inviteeReward:
      "Dengan mendaftar lewat tautan ini, Anda masuk ke program Super Commission Gate: halaman pendaftaran Gate menyebutkan bahwa Anda menerima hadiah komisi 10% dari biaya trading. Menurut aturan program, rebate ini dihitung dari biaya trading Anda selama 1 tahun dan tidak mencakup transaksi fiat.",
    guide: [
      "Gate menjalankan beberapa program referral sekaligus. Kode VAAXAW9YVA termasuk program Super Commission: di program ini, pengundang membagi sebagian komisinya dengan orang yang diundangnya. Pembagian yang ditampilkan Gate adalah 30% untuk pengundang dan 10% untuk teman yang diundang, dihitung dari biaya trading teman tersebut selama satu tahun. Transaksi fiat tidak termasuk.",
      "Satu kali pendaftaran mencakup spot, margin, futures, dan Trenches (bagian yang juga disebut Gate sebagai Gate Alpha). Kampanye referral Gate yang lain, yaitu “Earn Voucher” dan “Token Crew”, memakai voucher sebagai gantinya. Namun, aturan Super Commission menyatakan bahwa akun yang diundang dengan cara ini tidak berhak atas hadiah dari event lain, jadi jangan berharap keduanya bisa digabungkan.",
      "Gate tidak mendukung undangan lintas situs. Jika Anda tinggal di Wilayah Ekonomi Eropa (EEA), Anda dilayani oleh entitas Gate terpisah di Malta (gate.com/en-eu). Di sana komisi hanya dibayarkan untuk trading spot, dan referral yang dibuat di situs global tidak ikut terbawa. Super Commission juga tidak tersedia bagi pengguna dari Belgia, Inggris, Prancis, Jerman, Belanda, Turki, Austria, dan Korea Selatan.",
    ],
  },
  signup: {
    methods: ["alamat email", "nomor telepon", "Google", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Buka halaman pendaftaran Gate",
        text: "Gunakan tombol pendaftaran di halaman ini. Gate menampilkan banner berisi pengundang dan hadiah 10% dari biaya di atas formulir – itulah konfirmasi bahwa referral Anda sudah terpasang.",
      },
      {
        title: "Pilih negara atau wilayah tempat tinggal Anda",
        text: "Pilih negara tempat Anda tinggal dan setujui Perjanjian Pengguna, lalu klik “Create Account”.",
      },
      {
        title: "Masukkan alamat email atau nomor telepon",
        text: "Pilih salah satu; Gate memakainya untuk login dan kode keamanan Anda.",
      },
      {
        title: "Masukkan kode verifikasi",
        text: "Gate mengirim kode ke email atau ponsel Anda. Menurut panduan aplikasi Gate, kode ini berlaku selama 15 menit.",
      },
      {
        title: "Buat kata sandi",
        text: "Pilih kata sandi yang kuat dan unik untuk menyelesaikan pembuatan akun.",
      },
      {
        title: "Verifikasi identitas",
        text: "Selesaikan KYC dengan paspor, kartu identitas, atau SIM. Gate mewajibkannya sebelum Anda bisa melakukan deposit atau penarikan kripto.",
      },
    ],
    kycShort: "Wajib untuk deposit dan penarikan",
    kyc: "Ya. Menurut Gate, verifikasi identitas (KYC) wajib bagi semua pengguna untuk melakukan deposit dan penarikan aset kripto, trading mata uang fiat, dan ikut serta dalam subscription Startup. Verifikasi alamat bersifat opsional dan menaikkan batas penarikan Anda. Tugas verifikasi identitas juga termasuk dalam hadiah pemula Gate.",
    documents:
      "Gate menerima paspor, kartu identitas, atau SIM untuk verifikasi identitas. Bukti alamat bisa ditambahkan secara sukarela untuk batas yang lebih tinggi.",
    minAge: "18 tahun (Perjanjian Pengguna Gate)",
  },
  welcomeTasks: [
    { task: "Mendaftar", reward: "Voucher senilai 50 USDT" },
    { task: "Menyelesaikan verifikasi identitas", reward: "Voucher senilai 50 USDT" },
    { task: "Deposit pertama minimal 10 USDT", reward: "Voucher senilai 10 USDT" },
    { task: "Transaksi pertama minimal 10 USDT", reward: "Voucher senilai 5 USDT" },
    { task: "Unduhan aplikasi pertama", reward: "Voucher senilai 10 USDT" },
    {
      task: "Tugas lanjutan, tahap pertama: deposit bersih minimal 50 USDT dan volume trading 500 USDT",
      reward: "100 USDT (tugas lanjutan hingga 10.000 USDT)",
    },
  ],
  tokenDiscount: "Membayar biaya spot dengan GT menurunkan tarif standar dari 0,1% menjadi 0,09%, baik untuk maker maupun taker.",
  extraFeeMarkets: ["Futures delivery USDT"],
  sourceLabels: [
    "Gate: Program referral Super Commission dan aturannya",
    "Gate: Kampanye referral Earn Voucher",
    "Gate: Kampanye referral Token Crew",
    "Gate Learn: Panduan program referral Gate",
    "Gate: Rewards Hub (tugas pemula)",
    "Gate: Aturan tugas pemula",
    "Gate: Tabel biaya",
    "Gate: Margin dan tingkatan leverage kontrak perpetual BTCUSDT",
    "Gate: Batas leverage untuk akun futures baru",
    "Gate: Cara mendaftar lewat situs",
    "Gate: Cara mendaftar di aplikasi",
    "Gate: Kewajiban KYC",
    "Gate: Cara menyelesaikan verifikasi identitas",
    "Gate: Perjanjian Pengguna (lokasi yang dibatasi, usia minimum)",
    "Gate: Tentang kami",
    "Gate: Lisensi",
    "Gate: Bukti cadangan (proof of reserves)",
    "Gate: Pindah ke domain gate.com (pengumuman)",
  ],
  feeDiscount: "Rebate 10% dari biaya trading selama 1 tahun",
  referralCovers: ["Spot", "Margin", "Futures", "Trenches (Gate Alpha)"],
  bonusHeadline: "Rebate biaya 10% ditambah tugas pemula senilai 125 USDT",
  benefits: [
    "Rewards Hub Gate mencantumkan tugas pemula senilai 125 USDT dalam bentuk voucher (pendaftaran, verifikasi, deposit pertama, transaksi pertama, unduhan aplikasi)",
    "Satu referral mencakup spot, margin, futures, dan Trenches selama satu tahun",
    "Biaya spot 0,1%, atau 0,09% jika dibayar dengan GT",
    "Trading lebih dari 5.400 aset kripto dengan satu akun",
  ],
  benefitNote:
    "Rebate 10% adalah hadiah yang ditampilkan Gate di halaman pendaftaran yang dibuka lewat tautan ini; rebate ini tidak mencakup transaksi fiat dan tidak tersedia bagi pengguna dari Belgia, Inggris, Prancis, Jerman, Belanda, Turki, Austria, dan Korea Selatan. Tugas pemula harus diselesaikan dalam 15 hari setelah pendaftaran, bisa berbeda menurut wilayah, dan tidak berlaku untuk akun institusi, API, maupun afiliasi. Menurut aturan Gate, akun yang diundang lewat pembagian komisi tidak berhak atas hadiah dari event lain – Rewards Hub di akun Anda menunjukkan hadiah yang benar-benar bisa Anda klaim.",
  headquarters: "Gate Group, dengan entitas berlisensi di beberapa wilayah",
  regulation:
    "Lisensi atau pendaftaran di Malta (MFSA, MiCA), Gibraltar, Bahama, Hong Kong, Dubai (VARA, DMCC), Australia (AUSTRAC), Jepang, dan Siprus",
  users: "63 juta+ pengguna (menurut Gate)",
  assets: "5.400+ aset kripto",
  maxLeverage: "Hingga 200x (kontrak perpetual BTCUSDT)",
  feeNote:
    "Level VIP yang lebih tinggi membayar lebih sedikit. Jika Anda mengaktifkan Points Deduction sebagai pengganti GT, Gate menerapkan tarif tetap 0,2% untuk spot dan biaya taker 0,075% untuk futures.",
  products: ["Futures perpetual", "Futures delivery", "Opsi", "Spot", "Margin", "Copy trading", "Launchpad", "Earn"],
  tagline: "Pilihan altcoin terluas, sejak 2013",
  quickAnswer:
    "Kode referral Gate adalah VAAXAW9YVA. Buka tautan pendaftaran di halaman ini, dan Gate memasang kode tersebut secara otomatis – formulir pendaftaran lalu menampilkan banner yang menjanjikan hadiah komisi 10% dari biaya trading Anda. Rebate ini berlaku selama satu tahun dan mencakup spot, margin, futures, dan Trenches. Gate tidak mendokumentasikan cara menambahkan kode setelahnya, jadi gunakan tautan ini sebelum membuat akun.",
  about: [
    "Gate didirikan pada 2013. Awalnya bernama Bter.com, lalu berganti menjadi Gate.io, dan pada Mei 2025 beralih ke domain internasional gate.com. Ciri khas Gate adalah keluasan pilihannya: menurut Gate, exchange ini menyediakan lebih dari 5.400 aset kripto dan melayani lebih dari 63 juta pengguna, dan token baru sering muncul di sana jauh sebelum exchange besar lain ikut mencantumkannya.",
    "Di sisi derivatif, Gate mencatat open interest terbesar kedua dalam peringkat CoinMarketCap pada tanggal data pasar kami, dengan kontrak perpetual margin USDT untuk ratusan altcoin, futures delivery, dan opsi. Leverage untuk kontrak perpetual BTCUSDT tersedia hingga 200x di tingkat risiko terendah, sedangkan akun futures baru dibatasi 20x selama tiga hari pertama. Copy trading, launchpad untuk token baru, dan produk Earn tersedia di samping layar trading.",
    "Gate memublikasikan bukti cadangan (proof of reserves) sejak Mei 2020. Laporan 18 Oktober 2026 menunjukkan total cadangan US$8,68 miliar untuk 496 aset dengan rasio cadangan 118%. Grup ini mencantumkan lisensi dan pendaftaran di Malta (MFSA, berdasarkan MiCA), Gibraltar, Bahama, Hong Kong, Dubai, Australia, Jepang, dan Siprus. Situs global gate.com tertutup bagi penduduk Amerika Serikat dan banyak negara lain; penduduk Wilayah Ekonomi Eropa (EEA) dilayani oleh entitas Gate di Malta.",
  ],
  highlights: [
    { title: "5.400+ aset", text: "Salah satu katalog altcoin terbesar di antara semua exchange." },
    { title: "Rebate biaya 10%", text: "Ditampilkan Gate di halaman pendaftaran yang dibuka lewat tautan ini." },
    { title: "Cadangan 118%", text: "Bukti cadangan (proof of reserves) sejak 2020, laporan terbaru pada 18 Oktober 2026." },
  ],
  pros: [
    "Futures untuk banyak altcoin yang tidak tersedia di exchange lain",
    "Biaya spot standar 0,1%, 0,09% dengan GT, dan 0,02% / 0,05% untuk kontrak perpetual USDT",
    "Bukti cadangan (proof of reserves) sejak 2020 dengan rasio cadangan 118%",
    "Rekam jejak panjang sejak 2013 dan daftar lisensi regional yang terus bertambah",
  ],
  cons: [
    "Situs global tertutup bagi banyak negara, termasuk AS, Inggris, Kanada, Jerman, Prancis, Spanyol, dan Belanda",
    "Tidak ada cara terdokumentasi untuk menambahkan kode referral setelah mendaftar",
    "Referral tidak terbawa antarsitus regional Gate",
    "Token kecil memiliki volatilitas dan risiko likuiditas yang tinggi",
  ],
  bestFor: ["Trader futures altcoin", "Pemburu listing awal", "Trader yang lebih mementingkan keluasan pilihan daripada kesederhanaan"],
  signupTip:
    "Selesaikan tugas pemula dalam 15 hari setelah mendaftar, karena setelah itu voucher pemula kedaluwarsa. Pertimbangkan juga membayar biaya spot dengan GT agar turun menjadi 0,09%.",
  safety:
    "Gate memublikasikan bukti cadangan (proof of reserves) dengan rasio cadangan di atas 100% – 118% pada laporan 18 Oktober 2026 – dan pusat bantuannya menjelaskan autentikasi dua faktor, kode anti-phishing, whitelist penarikan, serta kata sandi dana. Aktifkan semuanya sebelum melakukan deposit. Untuk altcoin berkapitalisasi kecil, selalu periksa likuiditas sebelum membuka posisi dengan leverage.",
  restricted:
    "Perjanjian Pengguna Gate (terakhir diperbarui 22 Juli 2026) mencantumkan lokasi yang dibatasi untuk situs global, antara lain Amerika Serikat, Tiongkok daratan, Singapura, Kanada, Prancis, Jerman, Hong Kong, Malaysia, Malta, Spanyol, Belanda, Inggris, Austria, India, Indonesia, Jepang, Argentina, UEA, Thailand, Korea Selatan, Filipina, Pakistan, Vietnam, Rusia, dan Belarus, ditambah wilayah yang terkena sanksi. Sebagian negara ini dilayani oleh entitas Gate terpisah dengan situs dan aturannya sendiri.",
  faqs: [
    {
      topic: "referral",
      q: "Apakah kode referral Gate VAAXAW9YVA masih berlaku?",
      a: "Ya. Pada 16 November 2026, tautan gate.com/signup/VAAXAW9YVA membuka halaman pendaftaran resmi Gate dengan kode yang sudah terpasang dan banner pengundang bertuliskan “Sign up and trade to receive 10% commission reward on trading fees!”.",
    },
    {
      topic: "referral",
      q: "Berapa lama rebate referral Gate berlaku?",
      a: "Satu tahun. Menurut aturan Super Commission Gate, rebate biaya dihitung dari biaya trading Anda selama 1 tahun dan tidak mencakup transaksi fiat.",
    },
    {
      topic: "referral",
      q: "Apakah Gate.io sama dengan Gate, dan apakah kodenya masih berlaku?",
      a: "Ya. Gate.io beralih ke domain internasional gate.com pada Mei 2025; keduanya adalah exchange yang sama, didirikan pada 2013. Kode VAAXAW9YVA dipakai di gate.com.",
    },
    {
      topic: "referral",
      q: "Apakah kode referral Gate berlaku di Uni Eropa?",
      a: "Tidak dengan cara yang sama. Penduduk Wilayah Ekonomi Eropa (EEA) dilayani oleh situs Gate terpisah (gate.com/en-eu, dioperasikan dari Malta) yang hanya memberikan komisi untuk trading spot, dan Gate menyatakan bahwa undangan lintas situs tidak didukung. Super Commission juga tidak tersedia bagi pengguna dari Belgia, Prancis, Jerman, Belanda, dan Austria.",
    },
    {
      topic: "referral",
      q: "Bisakah saya menggabungkan rebate referral Gate dengan voucher referral Gate?",
      a: "Jangan mengandalkannya. Aturan Super Commission Gate menyatakan bahwa akun yang diundang dengan cara ini tidak berhak atas hadiah dari event lain, termasuk kampanye voucher “Earn Voucher” dan “Token Crew”.",
    },
    {
      topic: "signup",
      q: "Mengapa formulir pendaftaran Gate menanyakan negara terlebih dahulu?",
      a: "Pendaftaran di Gate dimulai dengan negara atau wilayah tempat tinggal Anda, karena produk, hadiah, bahkan entitas Gate yang melayani Anda bergantung pada pilihan itu. Baru setelah itu Anda memasukkan alamat email atau nomor telepon.",
    },
    {
      topic: "signup",
      q: "Berapa lama kode verifikasi Gate berlaku?",
      a: "Menurut panduan pendaftaran di aplikasi Gate, kode verifikasi yang dikirim ke email atau ponsel Anda berlaku selama 15 menit.",
    },
    {
      topic: "signup",
      q: "Apakah Gate bisa dipakai tanpa KYC?",
      a: "Hanya secara terbatas. Menurut Gate, KYC wajib bagi semua pengguna untuk melakukan deposit dan penarikan aset kripto, trading mata uang fiat, dan ikut serta dalam subscription Startup.",
    },
    {
      topic: "bonus",
      q: "Apa bonus selamat datang Gate untuk pengguna baru?",
      a: "Rewards Hub Gate mencantumkan tugas pemula senilai 125 USDT dalam bentuk voucher: 50 untuk pendaftaran, 50 untuk verifikasi identitas, 10 untuk deposit pertama minimal 10 USDT, 5 untuk transaksi pertama minimal 10 USDT, dan 10 untuk unduhan aplikasi pertama. Tugas lanjutan bernilai hingga 10.000 USDT. Halaman pendaftaran sendiri mengiklankan hingga 135 USDT, jadi yang menentukan adalah jumlah yang tampil di akun Anda.",
    },
    {
      topic: "bonus",
      q: "Berapa lama waktu untuk menyelesaikan tugas pemula Gate?",
      a: "Tugas pemula harus diselesaikan dalam 15 hari setelah mendaftar. Transaksi stablecoin tidak dihitung untuk tugas trading, dan akun institusi, API, serta afiliasi tidak termasuk.",
    },
    {
      topic: "fees",
      q: "Berapa biaya spot Gate?",
      a: "Biaya spot standar (VIP 0) adalah 0,1% untuk maker dan taker, atau 0,09% jika Anda membayar biaya dengan GT. Jika Points Deduction diaktifkan sebagai gantinya, Gate menerapkan tarif tetap 0,2%.",
    },
    {
      topic: "fees",
      q: "Berapa biaya futures Gate?",
      a: "Futures perpetual USDT dikenakan maker 0,02% dan taker 0,05% di level standar. Futures delivery USDT tercantum dengan maker -0,015% (berupa rebate) dan taker 0,016%.",
    },
    {
      topic: "fees",
      q: "Berapa leverage maksimum di Gate?",
      a: "Hingga 200x untuk kontrak perpetual BTCUSDT di tingkat risiko terendah (margin silang, posisi hingga batas risiko pertama). Akun futures baru dibatasi 20x selama tiga hari pertama. Leverage setinggi ini bisa melikuidasi posisi hanya karena pergerakan harga yang sangat kecil.",
    },
    {
      topic: "safety",
      q: "Apakah Gate tersedia di Amerika Serikat?",
      a: "Tidak. Amerika Serikat termasuk dalam daftar lokasi yang dibatasi di Perjanjian Pengguna Gate.",
    },
    {
      topic: "safety",
      q: "Apakah Gate memublikasikan bukti cadangan (proof of reserves)?",
      a: "Ya, sejak Mei 2020. Laporan 18 Oktober 2026 menunjukkan total cadangan US$8,68 miliar untuk 496 aset dengan rasio cadangan 118%.",
    },
    {
      topic: "safety",
      q: "Di negara mana saja Gate memiliki lisensi?",
      a: "Gate mencantumkan lisensi atau pendaftaran di Hong Kong, Gibraltar, Malta (MFSA, berdasarkan MiCA), Australia (AUSTRAC), Dubai (VARA dan DMCC), Bahama, Jepang, dan Siprus.",
    },
  ],
};
