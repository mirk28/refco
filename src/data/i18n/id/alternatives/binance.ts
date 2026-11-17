import type { AlternativesText } from "../../../types";

export const binance: AlternativesText = {
  role: "Likuiditas terdalam",
  pick: "Binance memiliki pasar derivatif terdalam dan mengizinkan Anda menautkan kode referral yang terlupa dalam 30 hari",
  pitch:
    "Binance adalah exchange terbesar di peringkat derivatif CoinMarketCap sekaligus tolok ukur likuiditas: spread ketat untuk kontrak perpetual BTC, ETH, dan koin berkapitalisasi besar, maker 0,02% / taker 0,05% untuk futures, serta leverage hingga 150x pada BTCUSDT dan ETHUSDT. Spot, margin, futures, opsi, bot, dan copy trading tersedia dalam satu login.",
  chooseIf: [
    "Anda melakukan trading dengan nominal besar dan membutuhkan spread paling ketat untuk kontrak perpetual BTC, ETH, dan koin berkapitalisasi besar",
    "Anda ingin spot, margin, futures, opsi, bot, dan copy trading dalam satu login",
    "Anda sudah mendaftar tanpa kode referral – Binance mengizinkan Anda menautkan kode dalam 30 hari selama belum melakukan deposit atau trading",
  ],
  thinkTwiceIf: [
    "Anda tinggal di Amerika Serikat, Kanada, atau Belanda – ketiganya masuk daftar negara terlarang Binance",
    "Anda tinggal di Wilayah Ekonomi Eropa (EEA) dan mengincar keuntungan referral – sejak 1 Juli 2026 Binance mengecualikan pengguna EEA dari program referral",
    "Anda ingin leverage tinggi sejak hari pertama – akun futures baru dibatasi 20x selama 30 hari pertama",
  ],
  intro:
    "Binance adalah exchange kripto terbesar berdasarkan open interest derivatif, tetapi tidak terbuka untuk semua orang dan tidak selalu paling murah atau paling fleksibel di setiap aspek. Orang mencari alternatif Binance terutama karena Binance tertutup di negara mereka (Amerika Serikat, Kanada, dan Belanda masuk daftar negara terlarang Binance), karena menginginkan biaya lebih rendah atau leverage lebih tinggi, atau karena tidak mau menaruh seluruh dana di satu exchange saja. Halaman ini membandingkan enam alternatif terdekat dengan Binance, memakai angka dari situs resmi masing-masing exchange.",
  reasons: [
    {
      title: "Binance tidak tersedia di negara Anda",
      text: "Daftar negara terlarang Binance (diperbarui 5 Januari 2026) mencantumkan Amerika Serikat, Kanada, dan Belanda, selain negara dan wilayah yang terkena sanksi. Di Inggris, nasabah ritel tidak bisa mengakses layanan tertentu.",
    },
    {
      title: "Anda menginginkan biaya lebih rendah",
      text: "Di level standar, Binance mengenakan biaya maker dan taker 0,10% untuk spot serta 0,02% / 0,05% untuk futures USDⓈ-M. Jika biaya dibayar dengan BNB, tarifnya turun menjadi 0,075% untuk spot dan 0,018% / 0,045% untuk futures.",
    },
    {
      title: "Anda menginginkan leverage lebih tinggi atau lebih banyak koin",
      text: "Batas leverage adalah 150x pada kontrak perpetual BTCUSDT dan ETHUSDT, dan akun futures baru tidak bisa memakai lebih dari 20x selama 30 hari pertama. Binance menyediakan 600+ aset kripto.",
    },
    {
      title: "Tidak ada keuntungan referral di EEA",
      text: "Sejak 1 Juli 2026, pengguna yang terdaftar di negara Wilayah Ekonomi Eropa (EEA) tidak bisa lagi ikut program referral Binance. Ketentuan referral Binance juga mencantumkan pembatasan untuk Inggris, Singapura, Jepang, Turki, Hong Kong, dan Israel.",
    },
    {
      title: "Verifikasi wajib sebelum apa pun",
      text: "Setiap pengguna baru wajib menyelesaikan verifikasi identitas sebelum melakukan deposit atau trading. Menurut Binance, peninjauan biasanya selesai dalam 48 jam.",
    },
    {
      title: "Anda tidak ingin menaruh semuanya di satu exchange",
      text: "Tidak ada exchange terpusat yang bebas risiko. Menyimpan modal trading di exchange kedua mengurangi ketergantungan Anda pada satu platform.",
    },
  ],
  stayIf: [
    "Anda paling mementingkan likuiditas – Binance memiliki open interest dan volume futures terbesar dibanding exchange mana pun",
    "Anda membayar biaya dengan BNB: diskon 25% untuk biaya spot dan 10% untuk biaya futures USDⓈ-M",
    "Anda menghargai regulasi dari ADGM FSRA, bukti cadangan yang bisa diverifikasi sendiri, dan dana SAFU sekitar US$1 miliar",
  ],
  faqs: [
    {
      q: "Apakah Binance tersedia di Amerika Serikat, Kanada, atau Belanda?",
      a: "Tidak. Daftar negara terlarang Binance (diperbarui 5 Januari 2026) mencantumkan Amerika Serikat, Kanada, dan Belanda. Untuk Amerika Serikat, daftar ini juga mencakup warga negara AS dan siapa pun yang beroperasi di AS.",
    },
    {
      q: "Apakah program referral Binance berlaku di Eropa?",
      a: "Tidak lagi bagi penduduk Wilayah Ekonomi Eropa (EEA). Menurut ketentuan referral Binance, sejak 1 Juli 2026 pengguna yang terdaftar di negara EEA tidak lagi berhak mengikuti Binance Referral Program, dan ketentuan itu juga mencantumkan pembatasan untuk Inggris. Anda tetap bisa membuat akun Binance dari negara yang dilayani Binance, tetapi referral tidak berpengaruh apa-apa di sana.",
    },
    {
      q: "Apakah Binance membatasi leverage untuk akun baru?",
      a: "Ya. Akun futures yang berumur kurang dari 30 hari tidak bisa memakai lebih dari 20x. Setelah itu, Binance menyediakan leverage hingga 150x pada kontrak perpetual BTCUSDT dan ETHUSDT untuk posisi hingga 300.000 USDT.",
    },
  ],
  reserves: "BTC 100,05% (audit 12 November 2026), bisa diverifikasi sendiri dengan Merkle tree dan zk-SNARKs",
  fund: "Dana SAFU sekitar US$1 miliar (per Februari 2026)",
  featureNotes: {
    copyTrading: "Copy trading futures dan spot",
    tradingBots: "Bot grid, DCA, arbitrase, rebalancing, dan TWAP untuk spot dan futures",
    options: "Opsi untuk BTC, ETH, BNB, SOL, XRP, dan DOGE",
    demoTrading: "Trading demo dengan dana virtual untuk spot dan futures",
    margin: "Margin terisolasi dan margin silang",
    p2p: "Binance P2P dengan metode pembayaran lokal",
    fiat: "Transfer bank dan kartu kredit atau debit, tergantung wilayah",
    earn: "Simple Earn, dual investment, dan staking ETH",
    launchpad: "Launchpool dan HODLer Airdrops",
    web3Wallet: "Binance Wallet, dompet self-custody di dalam aplikasi Binance",
    card: "Binance Card, khusus untuk penduduk Brasil",
  },
  countryNotes: {
    uk: "layanan tertentu tidak bisa diakses nasabah ritel Inggris",
    au: "Binance Australia",
    jp: "Binance Japan",
    sg: "tidak masuk daftar negara terlarang, tetapi program referral dibatasi di sana",
    hk: "tidak masuk daftar negara terlarang, tetapi program referral dibatasi di sana",
    ae: "Binance UAE di Dubai",
  },
  regional:
    "Binance.com dioperasikan oleh tiga entitas yang mendapat izin dari ADGM Financial Services Regulatory Authority di Abu Dhabi. Platform lokal terpisah tersedia untuk Jepang (Binance Japan Inc.), Australia (Binance Australia, terdaftar di AUSTRAC), dan Uni Emirat Arab (Binance FZE, berlisensi VARA di Dubai), sementara Binance mencantumkan entitas berlisensi lain di Bahrain, Kazakhstan, Selandia Baru, Thailand, Indonesia, Meksiko, El Salvador, Argentina, Brasil, dan Afrika Selatan. Halaman lisensi Binance tidak menyebut satu pun entitas di Uni Eropa atau Wilayah Ekonomi Eropa (EEA).",
  mica: "",
  sourceLabels: [
    "Binance: Copy trading",
    "Binance: Bot trading",
    "Binance: Opsi",
    "Binance: Trading demo",
    "Binance: Margin terisolasi",
    "Binance P2P",
    "Binance: Membeli kripto dengan kartu atau transfer bank",
    "Binance: Earn",
    "Binance: Launchpool",
    "Binance: Binance Wallet",
    "Binance: Binance Card",
    "Binance UK",
    "Binance Australia",
    "Binance Japan",
    "Binance UAE",
  ],
};
