import type { AlternativesText } from "../../../types";

export const okx: AlternativesText = {
  role: "Biaya rendah, opsi, dan MiCA",
  pick: "OKX menggabungkan biaya rendah dengan opsi dan platform berizin MiCA untuk Wilayah Ekonomi Eropa (EEA)",
  pitch:
    "OKX mengenakan biaya maker 0,08% / taker 0,10% untuk spot dan 0,02% / 0,05% untuk futures dan kontrak perpetual, menawarkan opsi dengan biaya 0,03%, dan menerbitkan bukti cadangan (proof of reserves) setiap bulan. Penduduk Wilayah Ekonomi Eropa (EEA) mendapatkan platform berizin MiCA, yaitu OKX Europe – dengan kontrak perpetual yang di sana dibatasi hingga 10x.",
  chooseIf: [
    "Anda ingin biaya standar yang rendah untuk spot, futures, dan opsi",
    "Anda tinggal di Wilayah Ekonomi Eropa (EEA) dan menginginkan exchange yang berizin MiCA",
    "Anda mementingkan bukti cadangan (proof of reserves) bulanan yang bisa dicocokkan dengan saldo sendiri",
  ],
  thinkTwiceIf: [
    "Anda menginginkan leverage tinggi di Eropa – OKX Europe membatasi kontrak perpetualnya (X-Perps) hingga 10x",
    "Anda tinggal di Kanada, India, Jepang, atau Hong Kong – OKX memasukkannya ke daftar lokasi yang dibatasi",
    "Anda mungkin lupa memasukkan kode referral – OKX tidak menambahkannya setelah pendaftaran",
  ],
  intro:
    "OKX adalah salah satu exchange terbesar untuk spot dan derivatif, dengan biaya standar rendah dan bukti cadangan (proof of reserves) bulanan. Orang mencari alternatif OKX terutama karena produk yang tersedia sangat bergantung pada tempat tinggal (kontrak perpetual dibatasi hingga 10x di OKX Europe), karena leverage di situs global berhenti di 100x, atau karena OKX tidak tersedia di Kanada, India, Jepang, dan Hong Kong. Halaman ini membandingkan enam alternatif terdekat dengan OKX, memakai angka dari situs resmi tiap exchange.",
  reasons: [
    {
      title: "Leverage dibatasi – terutama di Eropa",
      text: "Di situs global, leverage tertinggi adalah 100x, untuk swap perpetual seperti BTC-USDT dan ETH-USDT. Di OKX Europe, produk perpetual bernama X-Perps dan dibatasi hingga 10x, lebih rendah untuk posisi yang lebih besar.",
    },
    {
      title: "OKX dibatasi di tempat tinggal Anda",
      text: "OKX mencantumkan Kanada, India, Jepang, Hong Kong, Malaysia, dan yurisdiksi tertentu di Amerika Serikat sebagai lokasi yang dibatasi (daftar diperbarui 14 November 2026). Di Inggris, Australia, Brasil, dan Korea Selatan, derivatif dibatasi.",
    },
    {
      title: "Daftar koin lebih sedikit",
      text: "Halaman OKX Europe menyebut lebih dari 270 koin – katalog yang lebih kecil dibanding exchange yang berfokus pada altcoin.",
    },
    {
      title: "Hadiah selamat datang terkunci",
      text: "Di OKX Europe, hadiah kripto terkunci hingga 45 hari – bisa dipakai trading, tetapi tidak bisa ditarik. Di situs global, hadiah harus dibuka dalam 30 hari dan tugas yang belum selesai kedaluwarsa 180 hari setelah pendaftaran.",
    },
    {
      title: "Kode referral yang terlewat tidak bisa ditambahkan",
      text: "OKX menyatakan bahwa kode undangan hanya berlaku saat pendaftaran dan tidak bisa ditambahkan secara retroaktif. Menghapus akun lalu mendaftar ulang juga tidak membantu.",
    },
    {
      title: "Nomor telepon wajib",
      text: "OKX mewajibkan alamat email sekaligus nomor telepon di setiap akun, serta verifikasi identitas sebelum trading, deposit, dan penarikan.",
    },
  ],
  stayIf: [
    "Anda memperhatikan biaya: 0,08% / 0,10% untuk spot dan 0,02% / 0,05% untuk futures termasuk tarif standar yang rendah",
    "Anda trading opsi atau futures dengan jatuh tempo selain swap perpetual",
    "Anda tinggal di Wilayah Ekonomi Eropa (EEA) dan ingin tetap memakai platform berizin MiCA",
  ],
  faqs: [
    {
      q: "Berapa leverage maksimum di OKX Europe?",
      a: "Maksimal 10x. Di OKX Europe, produk perpetual bernama X-Perps dan dibatasi hingga 10x, lebih rendah untuk posisi yang lebih besar. Di situs global, OKX menawarkan hingga 100x untuk swap perpetual seperti BTC-USDT dan ETH-USDT.",
    },
    {
      q: "Apakah OKX tersedia di Kanada, India, Jepang, atau Hong Kong?",
      a: "Tidak. Keempatnya ada dalam daftar lokasi yang dibatasi OKX (terakhir diperbarui 14 November 2026), bersama Malaysia, Afganistan, Nepal, Uzbekistan, dan negara yang terkena sanksi.",
    },
    {
      q: "Apakah OKX tersedia di Inggris?",
      a: "Hanya sebagian. OKX membatasi layanan yang terkait derivatif, CeFi, dan P2P di Inggris. Penduduk Inggris memakai halaman Inggris dari platform global (okx.com/en-gb), tanpa rangkaian produk yang lengkap.",
    },
  ],
  reserves: "BTC 108%, ETH 101%, USDT 106%, USDC 100% (laporan bulanan, verifikasi 1 November 2026)",
  fund: "Dana keamanan khusus untuk trading margin dan derivatif – menutup kekurangan akibat likuidasi",
  featureNotes: {
    copyTrading: "Copy trading spot dan futures di situs global",
    tradingBots: "Grid spot, grid futures, dan strategi bot lainnya",
    options: "Opsi dengan maker 0,03% / taker 0,03% di situs global",
    demoTrading: "Lingkungan trading demo, dipakai dengan akun OKX Anda",
    margin: "Margin spot hingga 10x di situs global",
    p2p: "Pasar P2P dengan escrow di situs global",
    fiat: "Kartu, transfer bank, PayPal, dan Apple Pay sesuai wilayah; SEPA, Visa, dan Mastercard di OKX Europe",
    earn: "Simple Earn, On-chain Earn, dan dual investment",
    launchpad: "Penjualan token Jumpstart di situs global",
    web3Wallet: "OKX Wallet, self-custody, lebih dari 130 blockchain",
    card: "OKX Card, kartu Mastercard yang membayar dari stablecoin",
  },
  countryNotes: {
    us: "OKX US, hanya di lokasi AS yang disetujui",
    uk: "layanan derivatif, layanan terkait CeFi, dan P2P dibatasi",
    de: "OKX Europe",
    fr: "OKX Europe",
    nl: "OKX Europe",
    es: "OKX Europe",
    it: "OKX Europe",
    au: "OKX Australia",
    sg: "OKX Singapore",
    ae: "OKX Middle East di Dubai",
  },
  regional:
    "OKX menjalankan platform terpisah untuk beberapa wilayah: OKX Europe Limited di Malta (okx.com/en-eu), yang mendapat izin dari MFSA berdasarkan MiCA, untuk penduduk Wilayah Ekonomi Eropa (EEA); OKX US (OKX INC., bisnis layanan keuangan atau money services business yang terdaftar di FinCEN) untuk lokasi yang disetujui di Amerika Serikat; OKX Australia; OKX Singapore (OKX SG Pte. Ltd.); OKX Middle East Fintech FZE di Dubai, yang berlisensi VARA; dan OKX Brazil. Pengguna lainnya dilayani Aux Cayes FinTech Co. Ltd. di Seychelles. Setiap platform regional memiliki rangkaian produknya sendiri – OKX Europe, misalnya, membatasi kontrak perpetual hingga 10x.",
  mica: "OKX Europe Limited, Malta, mendapat izin dari MFSA",
  sourceLabels: [
    "OKX: Copy trading spot",
    "OKX: Bot grid trading spot",
    "OKX: Trading opsi",
    "Dokumentasi API OKX: trading demo",
    "OKX: Trading margin spot",
    "OKX: Trading P2P",
    "OKX: Membeli kripto dengan kartu atau transfer bank",
    "OKX: Simple Earn",
    "OKX: Jumpstart",
    "OKX Wallet",
    "OKX: OKX Card",
    "OKX Europe: Ketentuan Layanan (EEA)",
    "OKX US",
    "OKX Australia: Tentang kami",
    "OKX UK",
  ],
};
