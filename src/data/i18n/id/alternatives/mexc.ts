import type { AlternativesText } from "../../../types";

export const mexc: AlternativesText = {
  role: "Biaya terendah, leverage tertinggi",
  pick: "MEXC memiliki biaya terendah (maker 0%) dan leverage tertinggi (hingga 500x), tetapi tidak memiliki lisensi kelas satu",
  pitch:
    "MEXC bersaing lewat harga: tanpa biaya maker untuk spot dan sebagian besar kontrak futures, taker 0,02% di futures BTCUSDT, dan leverage hingga 500x untuk BTCUSDT dan ETHUSDT. Exchange ini mencantumkan 1.384 pasangan spot dan 1.152 kontrak futures – dan menyatakan sendiri tidak memiliki lisensi kelas satu maupun izin MiCA.",
  chooseIf: [
    "Anda sering trading dan biaya menjadi pengeluaran terbesar – maker membayar 0% untuk spot dan sebagian besar kontrak futures",
    "Anda memburu listing baru: 1.384 pasangan spot dan 1.152 kontrak futures",
    "Anda sudah mendaftar tanpa kode referral – MEXC mengizinkan Anda menautkan pengundang sendiri dalam 30 hari",
  ],
  thinkTwiceIf: [
    "Anda mementingkan regulasi – MEXC menyatakan tidak memiliki lisensi kelas satu maupun izin MiCA",
    "Anda tinggal di Amerika Serikat, Inggris, Kanada, Prancis, Belanda, Singapura, atau Hong Kong – semuanya termasuk yurisdiksi terlarang dalam Perjanjian Pengguna MEXC",
    "Anda mengandalkan bonus – bonus tidak bisa ditarik dan hangus jika Anda memindahkan dana keluar dari akun Futures terlalu cepat",
  ],
  intro:
    "MEXC menarik trader dengan biaya maker nol, leverage hingga 500x, dan daftar pasar yang sangat panjang. Orang mencari alternatif MEXC terutama karena alasan regulasi (MEXC menyatakan tidak memiliki lisensi kelas satu maupun izin MiCA), karena MEXC sedang menghentikan layanan di Prancis dan Belanda serta tertutup bagi Amerika Serikat, Inggris, dan Kanada, atau karena mereka butuh produk yang tidak ditampilkan MEXC di situsnya, seperti opsi atau margin spot. Halaman ini membandingkan enam alternatif terdekat dengan MEXC, memakai angka dari situs resmi masing-masing exchange.",
  reasons: [
    {
      title: "Tanpa lisensi kelas satu",
      text: "Pihak yang berkontrak dengan pengguna adalah MEXC (Comoros) Ltd, terdaftar di Uni Komoro. MEXC tidak menyebut lisensi apa pun di situsnya sendiri, menyatakan tidak memiliki lisensi kelas satu maupun izin MiCA, dan dalam panduannya sendiri mencatat bahwa MEXC tercantum dalam daftar sementara ESMA untuk entitas yang tidak patuh.",
    },
    {
      title: "MEXC meninggalkan Prancis dan Belanda",
      text: "Perjanjian Pengguna (diperbarui 13 Oktober 2026) mencantumkan Prancis dan Belanda sebagai negara terlarang. MEXC menetapkan 16 November 2026 sebagai batas akhir penutupan akun di Belanda dan menghentikan layanan di Prancis secara bertahap hingga 5 Maret 2027.",
    },
    {
      title: "Tertutup bagi AS, Inggris, dan Kanada",
      text: "Amerika Serikat, Inggris, Kanada, Singapura, Hong Kong, Malaysia, Tiongkok daratan, Rusia, Belarus, dan Kazakhstan juga termasuk yurisdiksi terlarang.",
    },
    {
      title: "Dalam praktiknya, verifikasi diperlukan",
      text: "MEXC menyatakan bahwa KYC yang tidak diselesaikan bisa memengaruhi akses Anda ke deposit, penarikan, dan trading; hadiahnya pun mensyaratkan minimal Primary KYC.",
    },
    {
      title: "Bonus penuh syarat",
      text: "Bonus tidak bisa ditarik – hanya keuntungan dari bonus itu yang bisa – dan memindahkan dana keluar dari akun Futures sebelum bonus habis terpakai membuat seluruh bonus hangus.",
    },
    {
      title: "Produk yang tidak kami temukan",
      text: "Pada 16 November 2026, kami tidak menemukan trading opsi, margin spot, maupun dompet self-custody di situs MEXC sendiri.",
    },
  ],
  stayIf: [
    "Anda memilih berdasarkan biaya: maker 0% dan taker 0,02% di futures BTCUSDT, 0% / 0,05% di spot",
    "Anda trading token baru dan kecil sejak awal – 1.384 pasangan spot dan 1.152 kontrak futures",
    "Anda menerima exchange offshore dan hanya menyimpan modal trading di sana",
  ],
  faqs: [
    {
      q: "Apakah MEXC keluar dari Prancis dan Belanda?",
      a: "Ya. Perjanjian Pengguna MEXC (diperbarui 13 Oktober 2026) mencantumkan keduanya sebagai yurisdiksi terlarang. Untuk Belanda, MEXC menetapkan 16 November 2026 sebagai batas akhir penutupan akun; di Prancis, layanan dihentikan secara bertahap antara 28 Oktober 2026 dan 5 Maret 2027, dan pendaftaran baru sudah ditutup.",
    },
    {
      q: "Apakah MEXC melayani Uni Eropa?",
      a: "Situs MEXC sendiri saling bertentangan. Perjanjian Pengguna MEXC melarang Prancis dan Belanda, dan artikelnya tentang negara yang dibatasi menyebut negara Uni Eropa dan Wilayah Ekonomi Eropa (EEA) lainnya tidak terlarang – sekaligus menyatakan bahwa MEXC tidak memiliki izin MiCA dan tercantum dalam daftar sementara ESMA untuk entitas yang tidak patuh. Artikel MEXC yang lebih baru menyebut MEXC tidak melayani UE/EEA. Siapa pun di EEA yang menginginkan platform berizin MiCA perlu melihat alternatifnya.",
    },
    {
      q: "Apakah MEXC menyediakan trading opsi atau margin spot?",
      a: "Kami tidak menemukan keduanya di situs MEXC sendiri pada 16 November 2026: pusat bantuannya tidak memberi hasil untuk opsi, dan jenis akun yang dijelaskannya adalah Spot, Futures, Fiat, dan Copy Trade. Derivatif MEXC berupa futures bermargin USDT dan bermargin koin.",
    },
  ],
  reserves: "USDT 122,42%, USDC 109,84%, BTC 317,61%, ETH 112,41% (snapshot 9 November 2026)",
  fund: "Guardian Fund senilai US$100 juta, ditambah dana asuransi futures",
  featureNotes: {
    copyTrading: "Copy trading futures dengan akun Copy Trade terpisah",
    tradingBots: "Bot grid futures, ditambah bot grid dan DCA untuk spot",
    options: "",
    demoTrading: "Trading demo futures dengan data pasar real-time",
    margin: "",
    p2p: "P2P tanpa biaya untuk USDT, BTC, ETH, dan koin lainnya",
    fiat: "Kartu Visa dan Mastercard, transfer bank, dan Apple Pay",
    earn: "Tabungan fleksibel dan berjangka serta On-Chain Earn",
    launchpad: "Pemesanan token lewat Launchpad",
    web3Wallet: "",
    card: "MEXC Card, kartu pembayaran kripto",
  },
  countryNotes: {
    de: "tidak masuk daftar terlarang, tetapi MEXC tidak memiliki izin MiCA dan dalam artikel yang lebih baru menyatakan tidak melayani Uni Eropa/Wilayah Ekonomi Eropa (EEA)",
    fr: "layanan dihentikan bertahap hingga 5 Maret 2027",
    nl: "batas akhir penutupan akun pada 16 November 2026",
    es: "tidak masuk daftar terlarang, tetapi MEXC tidak memiliki izin MiCA dan dalam artikel yang lebih baru menyatakan tidak melayani Uni Eropa/Wilayah Ekonomi Eropa (EEA)",
    it: "tidak masuk daftar terlarang, tetapi MEXC tidak memiliki izin MiCA dan dalam artikel yang lebih baru menyatakan tidak melayani Uni Eropa/Wilayah Ekonomi Eropa (EEA)",
    au: "tidak masuk daftar terlarang; leverage 500x tidak tersedia",
    jp: "tidak terlarang, tetapi MEXC memasukkan Jepang ke kategori terbatas – aplikasinya tidak ada di toko aplikasi Jepang",
    in: "tidak terlarang, tetapi MEXC memasukkan India ke kategori terbatas – aplikasinya tidak tersedia di sana",
  },
  regional: "",
  mica: "",
  sourceLabels: [
    "MEXC: Copy trading",
    "MEXC: Bot grid futures",
    "MEXC: Trading demo futures",
    "MEXC: Penjelasan jenis akun",
    "MEXC: Trading P2P",
    "MEXC: Beli kripto dengan kartu atau transfer bank",
    "MEXC: Earn",
    "MEXC: Launchpad",
    "MEXC: Mengenal MEXC Card",
    "MEXC: Penghentian layanan di Prancis",
    "MEXC Learn: Mencari alternatif MEXC",
  ],
};
