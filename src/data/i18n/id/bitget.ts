import type { ExchangeText } from "../../types";

export const bitget: ExchangeText = {
  referral: {
    codeName: "Referral code",
    whereShort: "Kolom “Referral code” di formulir pendaftaran (opsional)",
    apply:
      "Masukkan kode ini di kolom “Referral code” pada formulir pendaftaran, atau buka tautan pendaftaran di halaman ini yang mengisi kolom tersebut secara otomatis dan menguncinya.",
    whereToEnter:
      "Formulir pendaftaran Bitget memiliki kolom opsional berlabel “Referral code”. Di situs, kolom ini muncul tepat setelah alamat email atau nomor ponsel, sebelum Anda membuat kata sandi; di aplikasi, kolom ini muncul setelah kata sandi, sebelum Anda mengetuk “Create account”. Tautan di halaman ini membuka halaman pendaftaran referral Bitget dengan JZVEV1M3 yang sudah terisi dan kolom yang terkunci.",
    afterSignupShort: "Tidak – hanya saat pendaftaran (pengecualian hanya lewat tim support)",
    afterSignup:
      "Tidak bisa Anda lakukan sendiri. Pusat Bantuan Bitget menyatakan bahwa kode referral harus dimasukkan saat pendaftaran dan tidak bisa ditambahkan atau diubah setelah akun dibuat. Menurut jawaban Pusat Bantuan yang sama, satu-satunya jalan adalah tiket support yang berisi UID Anda, kode tersebut, dan bukti bahwa undangan sudah dikirim sebelum Anda mendaftar – tanpa jaminan hasil. Bitget tidak memublikasikan batas waktu untuk hal ini.",
    inviteeReward:
      "Program referral publik Bitget memberi pengguna yang diundang hadiah berupa airdrop BTC dan Mystery Box: airdrop BTC senilai US$9 ditambah Mystery Box hingga 500 USDT untuk deposit bersih minimal 200 USDT dalam 15 hari dan transaksi pertama yang memenuhi syarat, lalu tambahan US$18 dalam bentuk BTC ditambah Mystery Box hingga 1.000 USDT setelah total volume trading Anda melewati 100.000 USDT. Hadiah ini mensyaratkan pengundang terdaftar dalam promosi tersebut dan tidak dibayarkan jika salah satu pihak memiliki akun afiliasi, market maker, atau broker, jadi yang berlaku adalah jumlah yang tampil di akun Anda setelah mendaftar. Terlepas dari kode, pengguna baru mendapatkan paket selamat datang Bitget hingga 6.200 USDT.",
    guide: [
      "Kode referral Bitget menautkan akun baru Anda dengan pengundang. Bitget menghitung hampir semua aktivitas trading Anda untuk program ini: trading spot termasuk copy trading dan margin, futures, kontrak perpetual saham, kontrak perpetual komoditas, saham spot, dan CFD.",
      "Tahap hadiah pertama mensyaratkan deposit bersih minimal 200 USDT dalam 15 hari sejak pendaftaran dan, pada hari transaksi pertama Anda, volume minimal 1.000 USDT di spot, 4.000 USDT di futures, atau 100.000 USDT di CFD. Mystery Box bisa berisi USDT, bonus trading futures, voucher position boost futures, voucher APR Earn, atau voucher rebate biaya spot, dan harus diklaim dalam 30 hari setelah dikreditkan.",
      "Bitget tidak mencantumkan diskon biaya untuk pengguna yang diundang. Yang menurunkan biaya Anda di Bitget adalah token BGB: membayar biaya spot atau margin dengan BGB memberi diskon 20%.",
    ],
  },
  signup: {
    methods: ["alamat email", "nomor ponsel", "Google", "Telegram", "dompet kripto"],
    steps: [
      {
        title: "Buka halaman pendaftaran Bitget",
        text: "Gunakan tombol pendaftaran di halaman ini. Bitget membuka halaman pendaftaran referral dengan kode JZVEV1M3 yang sudah terisi dan terkunci.",
      },
      {
        title: "Masukkan alamat email atau nomor ponsel",
        text: "Panduan pendaftaran Bitget juga mencantumkan pendaftaran dengan Google, Telegram, atau dompet.",
      },
      {
        title: "Periksa kode referral dan setujui ketentuan",
        text: "Kolom “Referral code” seharusnya menampilkan JZVEV1M3. Setujui ketentuan, lalu klik “Next”.",
      },
      {
        title: "Buat kata sandi",
        text: "Antara 8 dan 32 karakter.",
      },
      {
        title: "Selesaikan captcha dan masukkan kode 6 digit",
        text: "Tuntaskan pemeriksaan keamanan, lalu ketik kode 6 digit yang dikirim Bitget ke email atau ponsel Anda. Untuk mendaftar, Anda tidak memerlukan dokumen apa pun.",
      },
      {
        title: "Verifikasi identitas",
        text: "Selesaikan verifikasi Level 1 dengan dokumen identitas dan pemeriksaan wajah – tanpa itu, Anda tidak bisa melakukan deposit, trading, atau penarikan.",
      },
    ],
    kycShort: "Wajib untuk semua pengguna",
    kyc: "Ya. Bitget menyatakan bahwa semua pengguna baru wajib menyelesaikan verifikasi identitas segera setelah mendaftar; aturan ini berlaku sejak 1 September 2023. Tanpa verifikasi, Anda tidak bisa melakukan deposit, trading, maupun penarikan dana – termasuk penarikan on-chain dan transfer internal. Level 1 terdiri dari dokumen identitas dan verifikasi wajah; bukti alamat hanya diperlukan jika Bitget memintanya. Setelah verifikasi, batas penarikan standar menjadi 3 juta USDT per 24 jam.",
    documents: "Kartu identitas, paspor, surat izin mengemudi, atau izin tinggal yang diterbitkan pemerintah, ditambah verifikasi wajah.",
    minAge: "18 tahun",
  },
  welcomeTasks: [
    { task: "Paket selamat datang: check-in selama tiga hari", reward: "Voucher position boost futures BTC USDT-M senilai 200 USDT" },
    { task: "Tantangan: deposit bersih minimal 1.000 USDT, volume spot 100 USDT, dan volume futures 300.000 USDT", reward: "50 USDT" },
    { task: "Tantangan: deposit bersih minimal 20.000 USDT, volume spot 10.000 USDT, dan volume futures 2.000.000 USDT", reward: "400 USDT" },
    { task: "Tantangan: deposit bersih minimal 100.000 USDT, volume spot 100.000 USDT, dan volume futures 80.000.000 USDT", reward: "6.000 USDT" },
    { task: "Referral: deposit bersih minimal 200 USDT dalam 15 hari ditambah transaksi pertama yang memenuhi syarat", reward: "Airdrop BTC senilai US$9 dan Mystery Box (hingga 500 USDT)" },
    { task: "Referral: total volume trading di atas 100.000 USDT", reward: "US$18 dalam bentuk BTC dan Mystery Box (hingga 1.000 USDT)" },
  ],
  tokenDiscount:
    "Dengan membayar biaya spot atau margin memakai BGB, Anda mendapat diskon 20% – pengguna standar membayar 0,08%, bukan 0,1%. Tabel biaya Bitget tidak mencantumkan diskon BGB untuk futures.",
  extraFeeMarkets: ["Futures Coin-M", "Futures USDC-M"],
  sourceLabels: [
    "Bitget: Cara mendaftar (situs)",
    "Bitget: Cara mendaftar (aplikasi)",
    "Bitget: Program referral dan aturannya",
    "Pusat Bantuan Bitget: menambahkan kode referral setelah pendaftaran",
    "Bitget: Hadiah pengguna baru (paket selamat datang)",
    "Bitget: Aturan bonus trading",
    "Bitget: Tabel biaya",
    "Bitget: Membayar biaya trading dengan BGB",
    "Bitget: Verifikasi identitas (KYC)",
    "Bitget: Batas penarikan",
    "Bitget: Ketentuan Penggunaan (negara terlarang)",
    "Bitget: Tentang kami",
    "Bitget: Lisensi regulasi",
    "Bitget: Bukti cadangan (proof of reserves)",
    "Bitget: Dana perlindungan (Protection Fund)",
    "Bitget: Copy trading untuk follower",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures", "Copy trading", "Kontrak perpetual saham & CFD"],
  bonusHeadline: "Paket selamat datang hingga 6.200 USDT",
  benefits: [
    "Hadiah pengguna baru hingga 6.200 USDT, dimulai dengan voucher position boost futures senilai 200 USDT untuk check-in selama tiga hari",
    "Hadiah program referral untuk pengguna yang diundang: airdrop BTC dan Mystery Box hingga 500 dan 1.000 USDT",
    "Satu referral mencakup spot, margin, futures, copy trading, kontrak perpetual saham, dan CFD",
    "Diskon 20% untuk biaya spot dan margin jika Anda membayarnya dengan BGB",
  ],
  benefitNote:
    "Angka 6.200 USDT merupakan batas maksimum: 200 USDT berupa voucher position boost futures, sisanya berasal dari tantangan deposit dan trading yang hanya membayar tingkat tertinggi yang Anda capai, sehingga hadiah teratas mensyaratkan deposit bersih 100.000 USDT dan volume futures 80 juta USDT. Persyaratan harus dipenuhi dalam tujuh hari; untuk futures hanya order taker yang dihitung, sedangkan transaksi dari copy trading, API, dan bot tidak dihitung. Hadiah diklaim secara manual, dan bonus trading tidak bisa ditarik sebagai uang tunai. Hadiah referral bergantung pada keikutsertaan pengundang dalam promosi Bitget dan tidak dibayarkan kepada atau melalui akun afiliasi.",
  headquarters: "Tidak disebutkan oleh Bitget (operator yang disebut dalam Ketentuan Penggunaan: BTG Technology Holdings Limited)",
  regulation:
    "Terdaftar atau berlisensi di Australia (AUSTRAC), El Salvador (BSP, DASP), Argentina (VASP), Afrika Selatan, Meksiko, Mauritius, dan Georgia",
  users: "150 juta pengguna terdaftar (menurut Bitget)",
  assets: "600+ pasangan trading spot, 200+ pasangan futures",
  maxLeverage: "Hingga 150x (futures BTC dan ETH)",
  feeNote: "Biaya makin rendah di level VIP yang lebih tinggi.",
  products: ["Futures USDT-M, Coin-M & USDC-M", "Spot", "Margin", "Copy trading", "Bot trading", "Saham tokenisasi & CFD", "Earn", "Bitget Wallet"],
  tagline: "Pusatnya copy trading kripto",
  quickAnswer:
    "Kode referral Bitget adalah JZVEV1M3. Masukkan kode ini di kolom “Referral code” saat mendaftar – tombol di halaman ini mengisinya secara otomatis dan menguncinya. Kode harus dimasukkan saat pendaftaran: Pusat Bantuan Bitget menyatakan bahwa kode tidak bisa ditambahkan atau diubah sesudahnya, kecuali lewat tiket support. Pengguna baru bisa mengklaim paket selamat datang hingga 6.200 USDT, dimulai dengan voucher futures senilai 200 USDT untuk check-in selama tiga hari.",
  about: [
    "Bitget didirikan pada 2018 dan melaporkan 150 juta pengguna terdaftar serta volume trading harian lebih dari 20 miliar USDT. Exchange ini dikenal lewat copy trading dan menyebut dirinya platform copy trading kripto terbesar: follower memilih lead trader, menentukan jumlah mulai 50 USDT, lalu Bitget menyalin posisi trader tersebut secara otomatis, sementara lead trader menerima bagian dari keuntungan follower.",
    "Platform ini mencantumkan lebih dari 600 pasangan trading spot dan lebih dari 200 pasangan futures, dengan leverage hingga 150x untuk BTC dan ETH serta hingga 10x untuk margin. Pengguna standar membayar 0,1% untuk spot – 0,08% dengan BGB – dan maker 0,02% / taker 0,06% untuk futures USDT-M, Coin-M, dan USDC-M. Bot trading, produk Earn, saham tokenisasi, CFD, dan Bitget Wallet yang bersifat self-custody melengkapi penawarannya.",
    "Bitget memublikasikan bukti cadangan (proof of reserves) berbasis Merkle tree setiap bulan; snapshot 12 November 2026 menunjukkan rasio cadangan total 124%, dengan 127% untuk BTC, 114% untuk USDT, dan 103% untuk ETH. Dana perlindungan (Protection Fund) milik Bitget bernilai US$274 juta dan ditujukan untuk menutup kerugian akibat kejadian yang memengaruhi seluruh platform dan bukan kesalahan pengguna. Bitget menyebutkan bahwa exchange ini terdaftar atau berlisensi di Australia, El Salvador, Argentina, Afrika Selatan, Meksiko, Mauritius, dan Georgia, sementara Ketentuan Penggunaannya mengecualikan daftar panjang negara, termasuk Amerika Serikat, Kanada, Jerman, Prancis, dan Austria.",
  ],
  highlights: [
    { title: "Pemimpin copy trading", text: "Ikuti lead trader mulai 50 USDT dan salin posisinya secara otomatis." },
    { title: "Dana perlindungan US$274 juta", text: "Dana khusus untuk kerugian akibat kejadian yang memengaruhi seluruh platform." },
    { title: "Cadangan 124%", text: "Bukti cadangan (proof of reserves) bulanan berbasis Merkle tree, snapshot terakhir 12 November 2026." },
  ],
  pros: [
    "Copy trading untuk futures dan spot mulai 50 USDT",
    "Bukti cadangan bulanan sebesar 124% dan dana perlindungan senilai US$274 juta",
    "Biaya futures standar maker 0,02% / taker 0,06% dan diskon 20% untuk biaya spot dengan BGB",
    "Tautan referral mengisi kode dan menguncinya, jadi kode tidak mungkin salah ketik",
  ],
  cons: [
    "Kode referral tidak bisa ditambahkan setelah pendaftaran, kecuali lewat tiket support",
    "Tidak tersedia di Amerika Serikat, Kanada, Jerman, Prancis, Austria, Jepang, dan Singapura",
    "Hadiah selamat datang tertinggi menuntut deposit dan volume trading yang sangat besar",
    "Copy trading bisa menimbulkan rasa aman yang semu – hasil masa lalu tidak menjamin keuntungan di masa depan",
  ],
  bestFor: ["Trader yang ingin menyalin trader futures berpengalaman", "Trader futures altcoin", "Pengguna yang juga ingin eksposur ke saham lewat kripto"],
  signupTip:
    "Verifikasi identitas segera setelah mendaftar – tanpa itu, Bitget tidak mengizinkan deposit, transaksi, atau penarikan – dan lakukan check-in selama tiga hari untuk mendapatkan voucher position boost futures senilai 200 USDT.",
  safety:
    "Bitget memublikasikan bukti cadangan (proof of reserves) berbasis Merkle tree setiap bulan – total 124% pada snapshot 12 November 2026 – dan menyimpan dana perlindungan (Protection Fund) senilai US$274 juta; Bitget sendiri yang menilai klaim atas dana tersebut. Aktifkan autentikasi dua faktor saat mendaftar. Hasil copy trading adalah kinerja masa lalu dan tidak menjamin keuntungan di masa depan.",
  restricted:
    "Ketentuan Penggunaan Bitget (terakhir diperbarui 4 November 2026) mencantumkan negara terlarang, antara lain: Austria, Belarus, Kanada, Kuba, Prancis, Jerman, Hong Kong, Iran, Jepang, Kazakhstan, Malaysia, Korea Utara, Rusia, Singapura, Sudan, Thailand, Uni Emirat Arab, dan Amerika Serikat beserta wilayahnya. Halaman verifikasi Bitget juga menyebut India, Italia, dan Spanyol. Menggunakan VPN untuk menghindari pembatasan ini dilarang.",
  faqs: [
    {
      topic: "referral",
      q: "Apakah kode referral Bitget JZVEV1M3 masih berlaku?",
      a: "Ya. Pada 16 November 2026, tautan di halaman ini membuka halaman pendaftaran referral Bitget dengan JZVEV1M3 yang sudah terisi dan terkunci di kolom kode referral.",
    },
    {
      topic: "referral",
      q: "Mengapa tautan pendaftaran Bitget terbuka di domain atau bahasa yang berbeda?",
      a: "Tautan berbagi Bitget dialihkan lewat beberapa domain milik Bitget sendiri – saat kami periksa, tautan yang sama sekali terbuka di bitget.com dan sekali di bitget.site – dan bisa terbuka dalam bahasa yang dipakai saat tautan dibuat. Kode referral JZVEV1M3 selalu sudah terisi.",
    },
    {
      topic: "referral",
      q: "Transaksi apa saja yang dihitung dalam program referral Bitget?",
      a: "Trading spot termasuk copy trading dan margin, trading futures, kontrak perpetual saham, kontrak perpetual komoditas, trading saham spot, dan trading CFD.",
    },
    {
      topic: "referral",
      q: "Apa itu Mystery Box Bitget?",
      a: "Hadiah dari program referral Bitget. Isinya bisa berupa USDT, bonus trading futures, voucher position boost futures, voucher APR Earn, atau voucher rebate biaya spot, dan harus diklaim dalam 30 hari setelah dikreditkan.",
    },
    {
      topic: "signup",
      q: "Apakah saya perlu dokumen untuk mendaftar di Bitget?",
      a: "Tidak untuk membuat akun – panduan Bitget menyatakan bahwa pendaftaran tidak memerlukan dokumen. Namun, Anda memerlukan dokumen identitas dan pemeriksaan wajah untuk verifikasi identitas sesudahnya, dan tanpa verifikasi itu Anda tidak bisa melakukan deposit, trading, atau penarikan.",
    },
    {
      topic: "signup",
      q: "Apa syarat kata sandi Bitget?",
      a: "Panjang kata sandi Bitget harus antara 8 dan 32 karakter.",
    },
    {
      topic: "signup",
      q: "Bisakah saya mendaftar di Bitget dengan Google atau Telegram?",
      a: "Bisa. Panduan pendaftaran Bitget menyebutkan bahwa selain dengan alamat email atau nomor ponsel, Anda juga bisa langsung mendaftar dengan Google, Telegram, atau dompet.",
    },
    {
      topic: "signup",
      q: "Apakah Bitget bisa dipakai tanpa KYC?",
      a: "Tidak. Sejak 1 September 2023, semua pengguna baru wajib menyelesaikan verifikasi identitas segera setelah mendaftar; tanpa itu, Bitget tidak mengizinkan deposit, transaksi, atau penarikan.",
    },
    {
      topic: "bonus",
      q: "Berapa bonus selamat datang Bitget untuk pengguna baru?",
      a: "Bitget mengiklankan hadiah pengguna baru hingga 6.200 USDT. Hadiah ini terdiri dari voucher position boost futures BTC USDT-M senilai 200 USDT untuk check-in selama tiga hari serta tantangan deposit dan trading senilai 50, 400, atau 6.000 USDT, dan hanya tingkat tertinggi yang Anda capai yang dibayarkan.",
    },
    {
      topic: "bonus",
      q: "Apa yang harus saya lakukan untuk hadiah 6.000 USDT dari Bitget?",
      a: "Dalam tujuh hari: deposit bersih minimal 100.000 USDT, volume spot 100.000 USDT, dan volume futures 80.000.000 USDT. Tingkat 50 USDT mensyaratkan deposit 1.000 USDT, volume spot 100 USDT, dan volume futures 300.000 USDT. Untuk futures, hanya order taker yang dihitung, sedangkan transaksi dari copy trading, API, dan bot tidak dihitung.",
    },
    {
      topic: "bonus",
      q: "Bisakah saya menarik bonus trading Bitget?",
      a: "Tidak. Bitget menyatakan bahwa bonus trading tidak bisa ditarik dan tidak bisa dicairkan sebagai uang tunai. Menarik dana dalam tiga hari setelah periode tantangan juga membuat hadiah tantangan hangus.",
    },
    {
      topic: "fees",
      q: "Berapa biaya futures Bitget?",
      a: "Pengguna standar membayar maker 0,02% dan taker 0,06% untuk futures USDT-M, Coin-M, dan USDC-M.",
    },
    {
      topic: "fees",
      q: "Berapa diskon biaya dengan BGB di Bitget?",
      a: "Diskonnya 20% untuk biaya spot dan margin, sehingga tarif spot standar turun dari 0,1% menjadi 0,08%. Tabel biaya Bitget tidak mencantumkan diskon BGB untuk futures.",
    },
    {
      topic: "fees",
      q: "Berapa leverage maksimum di Bitget?",
      a: "Hingga 150x untuk futures BTC dan ETH; batas maksimumnya berbeda untuk tiap koin. Trading margin bisa mencapai 10x. Leverage tinggi meningkatkan risiko likuidasi secara tajam.",
    },
    {
      topic: "fees",
      q: "Bagaimana cara kerja copy trading Bitget dan berapa biayanya?",
      a: "Anda memilih lead trader, menentukan jumlah dana – minimal 50 USDT – lalu Bitget menyalin posisi trader tersebut ke akun Anda. Lead trader menerima bagian dari keuntungan Anda; halaman bantuan Bitget sendiri menyebutkan kisaran yang tidak sama untuk bagian ini, jadi periksa tarif yang tertera di profil trader sebelum Anda mengikutinya.",
    },
    {
      topic: "safety",
      q: "Apa itu Protection Fund Bitget?",
      a: "Dana perlindungan yang disimpan Bitget untuk menutup kerugian pengguna akibat kejadian yang memengaruhi seluruh platform dan bukan disebabkan oleh tindakan pengguna sendiri. Menurut Bitget, nilainya US$274 juta dan disimpan dalam bentuk 4.204,71 BTC; Bitget sendiri yang menilai setiap klaim.",
    },
    {
      topic: "safety",
      q: "Apakah Bitget tersedia di Amerika Serikat atau Jerman?",
      a: "Tidak. Amerika Serikat, Jerman, Prancis, Austria, Kanada, Jepang, dan Singapura semuanya tercantum dalam daftar negara terlarang di Ketentuan Penggunaan Bitget.",
    },
    {
      topic: "safety",
      q: "Apakah Bitget memublikasikan bukti cadangan (proof of reserves)?",
      a: "Ya, setiap bulan, dalam bentuk bukti berbasis Merkle tree. Snapshot 12 November 2026 menunjukkan rasio cadangan total 124%: 127% untuk BTC, 114% untuk USDT, dan 103% untuk ETH.",
    },
  ],
};
