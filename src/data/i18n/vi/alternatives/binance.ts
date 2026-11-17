import type { AlternativesText } from "../../../types";

export const binance: AlternativesText = {
  role: "Thanh khoản sâu nhất",
  pick: "Binance có thị trường phái sinh sâu nhất và cho phép liên kết mã giới thiệu đã quên trong vòng 30 ngày",
  pitch:
    "Binance là sàn lớn nhất trên bảng xếp hạng phái sinh của CoinMarketCap và là thước đo về thanh khoản: spread hẹp trên hợp đồng vĩnh cửu BTC, ETH và coin vốn hóa lớn, phí Futures maker 0,02% / taker 0,05% và đòn bẩy tối đa 150x với BTCUSDT và ETHUSDT. Spot, Margin, Futures, quyền chọn, bot và copy trading đều nằm trong một tài khoản.",
  chooseIf: [
    "Bạn giao dịch khối lượng lớn và cần spread hẹp nhất trên hợp đồng vĩnh cửu BTC, ETH và coin vốn hóa lớn",
    "Bạn muốn có Spot, Margin, Futures, quyền chọn, bot và copy trading trong một tài khoản",
    "Bạn đã đăng ký mà chưa nhập mã giới thiệu – Binance cho phép liên kết mã trong vòng 30 ngày nếu bạn chưa nạp tiền hoặc giao dịch",
  ],
  thinkTwiceIf: [
    "Bạn sống tại Mỹ, Canada hoặc Hà Lan – cả ba đều nằm trong danh sách quốc gia bị cấm của Binance",
    "Bạn cư trú tại EEA và muốn hưởng quyền lợi từ mã giới thiệu – từ ngày 1 tháng 7 năm 2026, Binance đã loại người dùng EEA khỏi chương trình giới thiệu",
    "Bạn muốn dùng đòn bẩy cao ngay từ ngày đầu tiên – tài khoản Futures mới chỉ được dùng tối đa 20x trong 30 ngày đầu",
  ],
  intro:
    "Binance là sàn giao dịch tiền mã hóa lớn nhất xét theo hợp đồng mở (Open Interest) phái sinh, nhưng sàn không mở cho tất cả mọi người, cũng không phải rẻ nhất hay linh hoạt nhất ở mọi mặt. Người dùng tìm sàn thay thế Binance chủ yếu vì Binance không phục vụ quốc gia của họ (Mỹ, Canada và Hà Lan nằm trong danh sách quốc gia bị cấm), vì muốn phí thấp hơn hoặc đòn bẩy cao hơn, hoặc vì không muốn để toàn bộ tiền trên một sàn duy nhất. Trang này so sánh sáu sàn thay thế gần nhất với Binance, dựa trên số liệu từ trang web của chính các sàn.",
  reasons: [
    {
      title: "Binance không phục vụ quốc gia của bạn",
      text: "Ngoài những quốc gia và vùng lãnh thổ bị trừng phạt, danh sách quốc gia bị cấm của Binance (cập nhật ngày 5 tháng 1 năm 2026) còn gồm Mỹ, Canada và Hà Lan. Tại Vương quốc Anh, khách hàng cá nhân không dùng được một số dịch vụ.",
    },
    {
      title: "Bạn muốn phí thấp hơn",
      text: "Ở mức phí tiêu chuẩn, Binance thu 0,10% cho cả maker và taker trên Spot, 0,02% / 0,05% trên Futures USDⓈ-M. Trả phí bằng BNB giúp hạ mức này xuống 0,075% trên Spot và 0,018% / 0,045% trên Futures.",
    },
    {
      title: "Bạn muốn đòn bẩy cao hơn hoặc nhiều coin hơn",
      text: "Đòn bẩy dừng ở mức 150x trên hợp đồng vĩnh cửu BTCUSDT và ETHUSDT, và tài khoản Futures mới không được dùng quá 20x trong 30 ngày đầu. Binance niêm yết hơn 600 loại tiền mã hóa.",
    },
    {
      title: "Không có quyền lợi từ mã giới thiệu tại EEA",
      text: "Từ ngày 1 tháng 7 năm 2026, người dùng đăng ký tại quốc gia thuộc Khu vực Kinh tế châu Âu (EEA) không còn được tham gia chương trình giới thiệu của Binance. Điều khoản chương trình giới thiệu của Binance cũng nêu hạn chế đối với Vương quốc Anh, Singapore, Nhật Bản, Thổ Nhĩ Kỳ, Hồng Kông và Israel.",
    },
    {
      title: "Xác minh danh tính trước mọi thứ",
      text: "Mọi người dùng mới phải hoàn tất xác minh danh tính trước khi nạp tiền hoặc giao dịch. Theo Binance, việc xét duyệt thường xong trong vòng 48 giờ.",
    },
    {
      title: "Bạn không muốn dồn hết vào một sàn",
      text: "Không sàn giao dịch tập trung nào hoàn toàn không có rủi ro. Giữ vốn giao dịch trên một sàn thứ hai giúp bạn bớt phụ thuộc vào một nền tảng duy nhất.",
    },
  ],
  stayIf: [
    "Bạn coi trọng thanh khoản hơn cả – Binance có hợp đồng mở và khối lượng Futures lớn nhất trong số các sàn",
    "Bạn trả phí bằng BNB: giảm 25% phí Spot và 10% phí Futures USDⓈ-M",
    "Bạn coi trọng việc sàn chịu sự quản lý của ADGM FSRA, bằng chứng dự trữ tự kiểm tra được và quỹ SAFU khoảng 1 tỷ USD",
  ],
  faqs: [
    {
      q: "Binance có dùng được ở Mỹ, Canada hoặc Hà Lan không?",
      a: "Không. Danh sách quốc gia bị cấm của Binance (cập nhật ngày 5 tháng 1 năm 2026) gồm Mỹ, Canada và Hà Lan. Riêng với Mỹ, danh sách còn áp dụng cho công dân Mỹ và bất kỳ ai hoạt động tại Mỹ.",
    },
    {
      q: "Chương trình giới thiệu của Binance có áp dụng ở châu Âu không?",
      a: "Không còn áp dụng với người cư trú tại Khu vực Kinh tế châu Âu (EEA). Theo điều khoản chương trình giới thiệu của Binance, từ ngày 1 tháng 7 năm 2026, người dùng đăng ký thuộc quốc gia EEA không còn đủ điều kiện tham gia Binance Referral Program, và điều khoản này cũng nêu hạn chế đối với Vương quốc Anh. Bạn vẫn có thể mở tài khoản Binance từ những quốc gia Binance phục vụ, nhưng mã giới thiệu không có tác dụng ở đó.",
    },
    {
      q: "Binance có giới hạn đòn bẩy với tài khoản mới không?",
      a: "Có. Tài khoản Futures mở chưa đủ 30 ngày không được dùng quá 20x. Sau đó, Binance cho phép đòn bẩy tối đa 150x trên hợp đồng vĩnh cửu BTCUSDT và ETHUSDT cho vị thế tối đa 300.000 USDT.",
    },
  ],
  reserves: "BTC 100,05% (kiểm toán ngày 12 tháng 11 năm 2026), tự kiểm tra được bằng cây Merkle và zk-SNARKs",
  fund: "Quỹ SAFU khoảng 1 tỷ USD (tính đến tháng 2 năm 2026)",
  featureNotes: {
    copyTrading: "Copy trading cho Futures và Spot",
    tradingBots: "Bot grid, DCA, arbitrage, tái cân bằng và TWAP cho Spot và Futures",
    options: "Quyền chọn trên BTC, ETH, BNB, SOL, XRP và DOGE",
    demoTrading: "Giao dịch demo bằng vốn ảo cho Spot và Futures",
    margin: "Ký quỹ cô lập và ký quỹ chéo",
    p2p: "Binance P2P với phương thức thanh toán địa phương",
    fiat: "Chuyển khoản ngân hàng và thẻ tín dụng hoặc thẻ ghi nợ, tùy khu vực",
    earn: "Simple Earn, đầu tư kép (Dual Investment) và staking ETH",
    launchpad: "Launchpool và HODLer Airdrops",
    web3Wallet: "Binance Wallet, ví tự lưu ký ngay trong ứng dụng Binance",
    card: "Binance Card, chỉ dành cho người cư trú tại Brazil",
  },
  countryNotes: {
    uk: "không mở một số dịch vụ cho khách hàng cá nhân tại Vương quốc Anh",
    au: "Binance Australia",
    jp: "Binance Japan",
    sg: "không nằm trong danh sách bị cấm, nhưng chương trình giới thiệu bị hạn chế",
    hk: "không nằm trong danh sách bị cấm, nhưng chương trình giới thiệu bị hạn chế",
    ae: "Binance UAE tại Dubai",
  },
  regional:
    "Binance.com do ba pháp nhân được ADGM Financial Services Regulatory Authority tại Abu Dhabi cấp phép vận hành. Binance có nền tảng địa phương riêng tại Nhật Bản (Binance Japan Inc.), Úc (Binance Australia, đăng ký với AUSTRAC) và Các Tiểu vương quốc Ả Rập Thống nhất (UAE), nơi Binance FZE hoạt động với giấy phép của VARA tại Dubai; ngoài ra Binance còn liệt kê pháp nhân được cấp phép tại Bahrain, Kazakhstan, New Zealand, Thái Lan, Indonesia, Mexico, El Salvador, Argentina, Brazil và Nam Phi. Trang giấy phép của Binance không nêu pháp nhân nào tại EU hay EEA.",
  mica: "",
  sourceLabels: [
    "Binance: Copy trading",
    "Binance: Bot giao dịch",
    "Binance: Quyền chọn",
    "Binance: Giao dịch demo",
    "Binance: Ký quỹ cô lập",
    "Binance P2P",
    "Binance: Mua tiền mã hóa bằng thẻ hoặc chuyển khoản ngân hàng",
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
