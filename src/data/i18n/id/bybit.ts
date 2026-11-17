import type { ExchangeText } from "../../types";

export const bybit: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Kolom “Referral Code (Optional)” di formulir pendaftaran",
    apply:
      "Masukkan kode ini di kolom “Referral Code (Optional)” pada formulir pendaftaran, atau buka tautan pendaftaran di halaman ini yang otomatis mengisi kolom tersebut untuk Anda.",
    whereToEnter:
      "Formulir pendaftaran Bybit memiliki kolom berlabel “Referral Code (Optional)”. Di situs, kolom ini muncul setelah Anda memasukkan alamat email atau nomor telepon; di aplikasi, satu langkah kemudian – dalam kedua kasus sebelum Anda mengetuk “Sign Up Now”. Tautan di halaman ini membuka halaman undangan Bybit dengan VN3KGLE yang sudah terisi di kolom itu. Kolom ini tetap bisa diubah, jadi pastikan kodenya masih ada sebelum Anda mengirim formulir.",
    afterSignupShort: "Tidak – hanya saat pendaftaran",
    afterSignup:
      "Tidak. Panduan pendaftaran Bybit menyatakan bahwa setelah mendaftar, Anda tidak bisa lagi menambahkan, mengubah, atau menghapus kode referral maupun kode afiliasi. Satu-satunya pengecualian yang didokumentasikan Bybit menyangkut kode afiliasi: kode ini bisa ditambahkan dalam 14 hari pada akun utama yang belum memiliki kode. Bybit menegaskan bahwa kode program referral seperti VN3KGLE tidak didukung di sana.",
    inviteeReward:
      "Dalam program referral Bybit, pengguna yang diundang bisa mendapatkan hingga 250 USDT: 50 USDT untuk transaksi pertama minimal US$50 dalam 14 hari setelah pendaftaran, 100 USDT untuk volume trading kumulatif minimal US$500 dalam 30 hari setelah transaksi pertama itu, dan 100 USDT lagi untuk minimal US$10.000 dalam 30 hari yang sama. Halaman undangan Bybit juga mengiklankan hadiah tambahan bagi pengguna yang diundang untuk pendaftaran dan penyelesaian verifikasi identitas, dan pengguna baru mendapatkan Welcome Gifts senilai 100 USDT di Rewards Hub.",
    guide: [
      "Program referral Bybit memberi kedua pihak hadiah dengan jumlah yang sama, karena itu Bybit mengiklankannya sebagai “up to 500 USDT combined” – jumlah gabungan untuk pengundang dan pengguna yang diundang. Sebagai pengguna yang diundang, Anda membuka bagian Anda dalam tiga tahap yang terikat pada trading Anda sendiri: transaksi pertama minimal US$50 dalam 14 hari setelah pendaftaran, lalu volume kumulatif US$500 dan US$10.000 dalam 30 hari berikutnya. Volume dari spot, derivatif, dan opsi dihitung; transaksi di pasangan trading tanpa biaya tidak.",
      "Setiap hadiah melewati peninjauan risiko 3 hari, lalu harus diklaim dalam 10 hari; jika tidak, hadiah itu hangus. Bybit membatasi program ini dengan dana hadiah bulanan sebesar 500.000 USDT yang dibagikan dengan prinsip siapa cepat dia dapat. Ketentuan ini berlaku untuk akun yang terdaftar di situs global pada atau setelah 10 Oktober 2026.",
      "Negara tempat tinggal Anda menentukan apakah kode ini berpengaruh. Ketentuan referral Bybit menyatakan bahwa tidak ada program referral di Jerman, Inggris, Prancis, Belgia, dan Hong Kong, dan bahwa program ini tidak terbuka bagi penduduk Wilayah Ekonomi Eropa (EEA) yang diundang dari dalam EEA. Penduduk EEA memakai Bybit EU (bybit.eu), platform terpisah yang dioperasikan Bybit EU GmbH di Wina dengan penawaran referral sendiri yang lebih kecil.",
    ],
  },
  signup: {
    methods: ["alamat email", "nomor telepon", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Buka halaman pendaftaran Bybit",
        text: "Gunakan tombol daftar di halaman ini. Tombol ini membuka halaman undangan Bybit dengan kode referral VN3KGLE yang sudah terisi.",
      },
      {
        title: "Pilih negara tempat tinggal Anda",
        text: "Bybit menanyakannya lebih dulu karena produk dan hadiah bergantung pada tempat tinggal Anda.",
      },
      {
        title: "Masukkan alamat email atau nomor telepon",
        text: "Atau lanjutkan dengan Google, Apple, atau Telegram.",
      },
      {
        title: "Periksa kode referral",
        text: "Kolom “Referral Code (Optional)” harus menampilkan VN3KGLE. Ini satu-satunya kesempatan Anda – Bybit tidak mengizinkan penambahan atau perubahan kode di kemudian hari.",
      },
      {
        title: "Masukkan kode verifikasi dan buat kata sandi",
        text: "Konfirmasi kode yang dikirim Bybit, pilih kata sandi, lalu ketuk “Sign Up Now”. Di aplikasi (versi 4.47.0 atau lebih baru), Anda juga bisa mengatur passkey.",
      },
      {
        title: "Selesaikan verifikasi identitas",
        text: "Bybit mewajibkan verifikasi level Standard sebelum Anda bisa melakukan deposit atau trading.",
      },
    ],
    kycShort: "Wajib untuk semua produk (level Standard)",
    kyc: "Ya. Bybit mewajibkan setidaknya verifikasi identitas level Standard untuk semua produk. Tanpa verifikasi, akun tidak bisa melakukan deposit atau trading dan hanya bisa menarik dana – hingga 20.000 USDT per hari dan 100.000 USDT per bulan. Verifikasi Standard (dokumen identitas ditambah penilaian identitas) menaikkan batas penarikan harian menjadi 1 juta USDT, sedangkan verifikasi Advanced dengan bukti alamat menaikkannya menjadi 2 juta USDT.",
    documents:
      "Bybit menerima paspor, kartu identitas, izin tinggal, atau surat izin mengemudi (SIM). Hanya dokumen fisik yang diterima, dan level Advanced juga memerlukan bukti alamat.",
    minAge: "18 tahun",
  },
  welcomeTasks: [
    { task: "Referral: transaksi pertama minimal US$50 dalam 14 hari setelah pendaftaran", reward: "50 USDT" },
    { task: "Referral: volume trading kumulatif minimal US$500 dalam 30 hari setelah transaksi pertama", reward: "100 USDT" },
    { task: "Referral: volume trading kumulatif minimal US$10.000 dalam 30 hari yang sama", reward: "100 USDT" },
    { task: "Welcome Gifts: selesaikan verifikasi identitas", reward: "Fee Saver 20 USDT (derivatif)" },
    { task: "Welcome Gifts: deposit minimal US$10", reward: "Position Airdrop 30 USDT (derivatif)" },
    { task: "Welcome Gifts: trading senilai minimal US$10", reward: "Fee Saver 50 USDT (derivatif)" },
  ],
  tokenDiscount:
    "Membayar biaya dengan MNT memberi diskon 25% untuk biaya spot (0,075% untuk VIP 0) dan diskon 10% untuk biaya futures (maker 0,018% / taker 0,0495%). Diskon ini tidak berlaku untuk kontrak inverse, bot trading, pengikut copy trading, atau trading lewat API.",
  extraFeeMarkets: ["Opsi"],
  sourceLabels: [
    "Bybit: Cara mendaftar akun",
    "Bybit: FAQ umum program referral",
    "Bybit: Halaman dan ketentuan program referral",
    "Bybit: Cara menambahkan dan memeriksa kode afiliasi terdaftar",
    "Bybit: Halaman Rewards Hub (Welcome Gifts)",
    "Bybit: FAQ Rewards Hub",
    "Bybit: Struktur biaya trading",
    "Bybit: Membayar biaya trading dengan MNT",
    "Bybit: Parameter margin (tingkatan leverage)",
    "Bybit: FAQ KYC individu",
    "Bybit: Manfaat tiap level KYC",
    "Bybit: Negara yang dibatasi",
    "Bybit: Tentang kami",
    "Bybit: Bukti cadangan (proof of reserves)",
    "Bybit: Kronologi insiden keamanan (Februari 2025)",
    "Bybit: Bybit Europe dan MiCAR",
    "Bybit EU: Program referral",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Derivatif", "Opsi"],
  bonusHeadline: "Hadiah referral hingga 250 USDT",
  benefits: [
    "Hingga 250 USDT untuk pengguna yang diundang: 50 USDT setelah transaksi pertama US$50+ dalam 14 hari, ditambah masing-masing 100 USDT pada volume US$500 dan US$10.000",
    "Welcome Gifts senilai 100 USDT di Rewards Hub untuk verifikasi, deposit US$10, dan trading US$10",
    "Satu kode referral untuk seluruh akun – volume spot, derivatif, dan opsi semuanya dihitung",
    "Diskon 25% untuk biaya spot dan 10% untuk biaya futures jika Anda membayar biaya dengan MNT",
  ],
  benefitNote:
    "Hadiah referral berlaku untuk akun yang terdaftar di situs global Bybit pada atau setelah 10 Oktober 2026, melewati peninjauan risiko 3 hari, harus diklaim dalam 10 hari, dan berasal dari dana hadiah bulanan 500.000 USDT (siapa cepat dia dapat). Bybit tidak menjalankan program referral di Jerman, Inggris, Prancis, Belgia, dan Hong Kong, dan tidak membukanya bagi penduduk Wilayah Ekonomi Eropa (EEA) yang diundang dari dalam EEA. Welcome Gifts mensyaratkan verifikasi identitas Lv. 1, berbeda menurut pengguna dan wilayah, bisa kedaluwarsa, dan tidak bisa ditarik.",
  headquarters: "Dubai, UEA",
  regulation: "Izin MiCAR lewat Bybit EU GmbH, Wina (diawasi oleh FMA Austria), untuk Wilayah Ekonomi Eropa (EEA) kecuali Malta",
  users: "90 juta+ pengguna (menurut Bybit)",
  assets: "390 koin, 509 pasangan spot (Bybit API)",
  maxLeverage: "Hingga 150x (kontrak perpetual BTCUSDT)",
  feeNote:
    "Tarif turun seiring naiknya level VIP – Supreme VIP membayar maker 0% untuk derivatif – dan bisa berbeda menurut wilayah; acuan yang berlaku adalah halaman “My Fee Rate” di akun Anda.",
  products: [
    "Kontrak perpetual USDT & USDC",
    "Kontrak inverse",
    "Opsi",
    "Spot",
    "Copy trading",
    "Bot trading",
    "Akun trading terpadu",
  ],
  tagline: "Mesin trading cepat yang mengutamakan derivatif",
  quickAnswer:
    "Kode referral Bybit adalah VN3KGLE. Masukkan kode ini di kolom “Referral Code (Optional)” saat mendaftar – tombol di halaman ini mengisinya otomatis untuk Anda. Kode harus sudah ada saat pendaftaran: Bybit tidak mengizinkan penambahan atau perubahan kode referral setelahnya. Pengguna yang diundang bisa mendapatkan hingga 250 USDT dalam tiga tahap trading, dimulai dengan 50 USDT untuk transaksi pertama senilai US$50 dalam 14 hari.",
  about: [
    "Bybit diluncurkan pada 2018 sebagai exchange derivatif dan memindahkan kantor pusatnya ke Dubai pada 2023. Kini Bybit melaporkan lebih dari 90 juta pengguna di lebih dari 181 negara dan menyebut dirinya exchange terbesar kedua di dunia berdasarkan volume trading. Platform ini tetap terasa dirancang untuk trader aktif: input order yang cepat, akun trading terpadu, dan aplikasi seluler yang matang.",
    "Selain kontrak perpetual USDT dan USDC, Bybit menawarkan kontrak inverse, opsi, spot, copy trading, dan bot trading. Pengguna standar membayar maker 0,02% dan taker 0,055% untuk kontrak perpetual dan futures, serta 0,1% untuk spot. Leverage tersedia hingga 150x pada kontrak perpetual BTCUSDT di tingkat risiko terendah dan turun seiring membesarnya posisi. Nasabah di Eropa dilayani Bybit EU GmbH di Wina, yang diawasi oleh FMA Austria berdasarkan MiCAR dan mencakup Wilayah Ekonomi Eropa (EEA) kecuali Malta.",
    "Pada 21 Februari 2025, penyerang mencuri sekitar US$1,46 miliar dari salah satu cold wallet Ethereum milik Bybit – peretasan terbesar dalam sejarah kripto. Bybit tetap membuka penarikan, mengganti ETH yang hilang lewat pinjaman talangan, deposit besar, dan pembelian OTC, dan audit bukti cadangan (proof of reserves) oleh Hacken pada 24 Februari menunjukkan bahwa kekurangan itu tertutup dalam 72 jam. Menurut Bybit, aset nasabah tetap didukung 1:1 sepanjang waktu.",
  ],
  highlights: [
    { title: "DNA derivatif", text: "Dirancang untuk trader futures sejak hari pertama, dengan matching engine yang cepat." },
    { title: "Hingga 250 USDT", text: "Hadiah referral dalam tiga tahap, terikat pada volume trading Anda sendiri." },
    { title: "Kekurangan tertutup dalam 72 jam", text: "Setelah peretasan 2025, Bybit tetap membuka penarikan dan memulihkan cadangannya." },
  ],
  pros: [
    "Mesin trading yang cepat dan stabil serta aplikasi seluler kelas atas",
    "Pilihan luas kontrak perpetual, inverse, dan opsi",
    "Hadiah referral yang jelas, hingga 250 USDT untuk pengguna yang diundang",
    "Bukti cadangan (proof of reserves) dengan pemeriksaan mandiri lewat Merkle tree",
  ],
  cons: [
    "Insiden keamanan besar pada Februari 2025 (US$1,46 miliar dicuri dari cold wallet Ethereum)",
    "Kode referral tidak bisa ditambahkan atau diubah setelah pendaftaran",
    "Tidak ada program referral untuk penduduk Wilayah Ekonomi Eropa (EEA) serta untuk Jerman, Inggris, Prancis, Belgia, dan Hong Kong",
    "Tidak tersedia di Amerika Serikat, Kanada, Singapura, Hong Kong, dan Tiongkok daratan",
  ],
  bestFor: [
    "Trader futures perpetual yang aktif",
    "Trader yang lebih banyak bertransaksi lewat ponsel",
    "Pengguna yang ingin copy trading untuk derivatif",
  ],
  signupTip:
    "Periksa kolom “Referral Code (Optional)” sebelum Anda mengetuk “Sign Up Now” – kode tidak bisa diperbaiki setelahnya. Lalu lakukan transaksi pertama minimal US$50 dalam 14 hari untuk membuka 50 USDT pertama.",
  safety:
    "Bybit menyimpan aset nasabah di cold wallet multi-signature dan memublikasikan bukti cadangan (proof of reserves) yang menurut Bybit menunjukkan dukungan 1:1; snapshot terbaru saat kami memeriksa bertanggal 27 Oktober 2026, dan Anda bisa memverifikasi saldo sendiri dengan pemeriksaan Merkle tree dan alat open source. Untuk akun Anda, Bybit menyediakan Google Authenticator dan kode anti-phishing. Peretasan Februari 2025 menunjukkan bahwa exchange besar pun bisa dibobol – simpan di platform ini hanya modal untuk trading.",
  restricted:
    "Bybit mencantumkan wilayah berikut sebagai wilayah dengan layanan terbatas: Amerika Serikat, Tiongkok daratan, Hong Kong, Singapura, Kanada, Korea Utara, Kuba, Iran, Uzbekistan, Sudan, Suriah, serta Krimea, Sevastopol, dan bagian Donetsk, Luhansk, Kherson, dan Zaporizhzhia yang tidak dikuasai pemerintah. Di Inggris, Bybit tidak menerima pendaftaran baru, dan sejak 21 Oktober 2026 akun Inggris hanya bisa menarik dana.",
  faqs: [
    {
      topic: "referral",
      q: "Apakah VN3KGLE kode referral Bybit yang masih berlaku?",
      a: "Ya. Pada 16 November 2026, tautan di halaman ini membuka halaman undangan Bybit dengan VN3KGLE yang sudah terisi di kolom “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Apakah kode referral Bybit sama dengan kode afiliasi?",
      a: "Tidak. Bybit memperlakukan keduanya secara berbeda: kode afiliasi bisa ditambahkan dalam 14 hari setelah pendaftaran pada akun utama yang belum memiliki kode, sedangkan kode program referral seperti VN3KGLE sama sekali tidak bisa ditambahkan setelah mendaftar.",
    },
    {
      topic: "referral",
      q: "Apakah kode referral Bybit berlaku di Uni Eropa?",
      a: "Tidak. Ketentuan referral Bybit menyatakan bahwa program ini tidak terbuka bagi penduduk Wilayah Ekonomi Eropa (EEA) yang diundang dari dalam EEA dan bahwa tidak ada program referral di Jerman, Prancis, dan Belgia. Penduduk EEA memakai Bybit EU (bybit.eu), yang menjalankan penawaran referral sendiri.",
    },
    {
      topic: "referral",
      q: "Transaksi apa saja yang dihitung untuk hadiah referral Bybit?",
      a: "Volume trading dari spot, derivatif, dan opsi dihitung, dan Bybit juga menyebut Alpha, Convert, serta beberapa produk yang lebih baru. Transaksi di pasangan trading tanpa biaya tidak dihitung.",
    },
    {
      topic: "signup",
      q: "Bisakah saya mendaftar di Bybit dengan Google, Apple, atau Telegram?",
      a: "Ya. Selain alamat email atau nomor telepon, pendaftaran Bybit menyediakan Google, Apple, dan Telegram. Di aplikasi (versi 4.47.0 atau lebih baru), Anda juga bisa membuat passkey.",
    },
    {
      topic: "signup",
      q: "Apakah Bybit bisa dipakai tanpa KYC?",
      a: "Tidak untuk trading. Tanpa verifikasi identitas, akun Bybit tidak bisa melakukan deposit atau trading; akun hanya bisa menarik dana, hingga 20.000 USDT per hari dan 100.000 USDT per bulan.",
    },
    {
      topic: "signup",
      q: "Apa saja level KYC Bybit dan batas penarikannya?",
      a: "Verifikasi Standard (dokumen identitas ditambah penilaian identitas) memungkinkan penarikan hingga 1 juta USDT per hari. Verifikasi Advanced, yang menambahkan bukti alamat, menaikkan batasnya menjadi 2 juta USDT per hari. Untuk batas yang lebih tinggi, tersedia level Pro dengan uji tuntas yang diperketat (enhanced due diligence).",
    },
    {
      topic: "bonus",
      q: "Berapa bonus referral Bybit untuk pengguna baru?",
      a: "Hingga 250 USDT untuk pengguna yang diundang: 50 USDT untuk transaksi pertama minimal US$50 dalam 14 hari setelah pendaftaran, 100 USDT untuk volume kumulatif US$500 dalam 30 hari setelah transaksi itu, dan 100 USDT untuk US$10.000 dalam periode yang sama. Pengundang menerima jumlah yang sama, karena itu Bybit mengiklankan total gabungan hingga 500 USDT.",
    },
    {
      topic: "bonus",
      q: "Apa itu Welcome Gifts Bybit?",
      a: "Rewards Hub Bybit mencantumkan Welcome Gifts senilai 100 USDT: Fee Saver 20 USDT untuk menyelesaikan verifikasi identitas, Position Airdrop 30 USDT untuk deposit minimal US$10, dan Fee Saver 50 USDT untuk transaksi minimal US$10 – semuanya untuk derivatif. Tugasnya berbeda menurut pengguna dan wilayah.",
    },
    {
      topic: "bonus",
      q: "Apakah saya harus mengklaim hadiah referral Bybit?",
      a: "Ya. Setiap hadiah lebih dulu melewati peninjauan risiko 3 hari, lalu harus diklaim dalam 10 hari; jika tidak, hadiah itu hangus. Hadiah berasal dari dana hadiah bulanan sebesar 500.000 USDT dan dibagikan dengan prinsip siapa cepat dia dapat.",
    },
    {
      topic: "bonus",
      q: "Bisakah saya menarik Welcome Gifts Bybit?",
      a: "Tidak. Bybit menyatakan bahwa hadiah Rewards Hub bisa kedaluwarsa dan tidak bisa ditarik. Fee Saver memotong biaya trading, sedangkan Position Airdrop dipakai sebagai margin dalam trading derivatif.",
    },
    {
      topic: "fees",
      q: "Berapa biaya futures Bybit?",
      a: "Pengguna VIP 0 membayar maker 0,02% dan taker 0,055% untuk kontrak perpetual dan futures, 0,1% untuk spot, serta maker 0,02% / taker 0,03% untuk opsi. Membayar dengan MNT menurunkan biaya futures sebesar 10% menjadi 0,018% / 0,0495%.",
    },
    {
      topic: "fees",
      q: "Berapa leverage maksimum di Bybit?",
      a: "Hingga 150x untuk kontrak perpetual BTCUSDT di tingkat risiko pertama (posisi hingga 300.000 USDT); batas maksimumnya turun menjadi 100x di tingkat berikutnya dan terus turun seiring membesarnya posisi. Leverage tinggi meningkatkan risiko likuidasi secara tajam.",
    },
    {
      topic: "fees",
      q: "Berapa diskon biaya MNT di Bybit?",
      a: "Membayar biaya dengan MNT memberi diskon 25% untuk biaya spot dan 10% untuk biaya futures. Diskon ini tidak berlaku untuk kontrak inverse, bot trading, pengikut copy trading, atau trading lewat API.",
    },
    {
      topic: "safety",
      q: "Apakah Bybit pernah diretas?",
      a: "Ya. Pada 21 Februari 2025, sekitar US$1,46 miliar dicuri dari satu cold wallet Ethereum. Bybit tidak menghentikan penarikan, mendapatkan ETH pengganti lewat pinjaman talangan, deposit besar, dan pembelian OTC, dan audit bukti cadangan (proof of reserves) oleh Hacken pada 24 Februari menunjukkan bahwa kekurangan itu tertutup dalam 72 jam.",
    },
    {
      topic: "safety",
      q: "Apakah Bybit tersedia di Inggris?",
      a: "Tidak. Bybit tidak menerima pendaftaran baru dari Inggris, dan sejak 21 Oktober 2026 akun dengan domisili Inggris hanya bisa menarik dana.",
    },
    {
      topic: "safety",
      q: "Apakah Bybit tersedia di Eropa?",
      a: "Penduduk Wilayah Ekonomi Eropa (EEA) dilayani Bybit EU GmbH di Wina, yang diawasi oleh Otoritas Pasar Keuangan Austria (FMA) berdasarkan MiCAR dan mencakup EEA kecuali Malta. Bybit EU merupakan platform terpisah dengan biaya dan rangkaian produknya sendiri.",
    },
  ],
};
