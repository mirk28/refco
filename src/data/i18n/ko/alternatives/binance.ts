import type { AlternativesText } from "../../../types";

export const binance: AlternativesText = {
  role: "가장 깊은 유동성",
  pick: "Binance는 파생상품 시장의 유동성이 가장 깊고, 빠뜨린 레퍼럴 코드도 30일 이내에 연결할 수 있습니다",
  pitch:
    "Binance는 CoinMarketCap 파생상품 순위에서 가장 큰 거래소이자 유동성의 기준입니다. BTC, ETH, 시가총액 상위 코인 무기한 선물의 스프레드가 좁고, 선물 수수료는 메이커 0.02% / 테이커 0.05%이며, BTCUSDT와 ETHUSDT에서는 최대 150배까지 쓸 수 있습니다. 현물, 마진, 선물, 옵션, 봇, 카피 트레이딩을 한 번의 로그인으로 이용할 수 있습니다.",
  chooseIf: [
    "큰 규모로 거래해 BTC, ETH, 시가총액 상위 코인 무기한 선물에서 가장 좁은 스프레드가 필요한 경우",
    "현물, 마진, 선물, 옵션, 봇, 카피 트레이딩을 한 번의 로그인으로 모두 이용하고 싶은 경우",
    "레퍼럴 코드 없이 가입했지만 입금이나 거래를 하지 않아, Binance에서 30일 이내에 코드를 연결할 수 있는 경우",
  ],
  thinkTwiceIf: [
    "세 나라 모두 Binance의 금지 국가 목록에 올라 있는 미국, 캐나다, 네덜란드에 거주하는 경우",
    "Binance가 2026년 7월 1일부터 EEA(유럽경제지역) 사용자를 레퍼럴 프로그램에서 제외했는데, EEA 거주자로서 레퍼럴 혜택을 원하는 경우",
    "신규 선물 계정은 첫 30일 동안 20배로 제한되는데, 첫날부터 높은 레버리지를 쓰고 싶은 경우",
  ],
  intro:
    "Binance(바이낸스)는 파생상품 미결제약정 기준으로 가장 큰 암호화폐 거래소이지만, 누구나 이용할 수 있는 것은 아니며 모든 면에서 가장 저렴하거나 가장 유연한 것도 아닙니다. Binance 대안 거래소를 찾는 주된 이유는 거주 국가에서 Binance를 이용할 수 없거나(미국, 캐나다, 네덜란드는 Binance의 금지 국가 목록에 올라 있습니다), 더 낮은 수수료나 더 높은 레버리지를 원하거나, 모든 자금을 한 거래소에만 두고 싶지 않기 때문입니다. 이 페이지에서는 Binance와 가장 가까운 대안 거래소 여섯 곳을 각 거래소 자체 사이트의 수치로 Binance와 비교합니다.",
  reasons: [
    {
      title: "거주 국가에서 Binance를 이용할 수 없을 때",
      text: "Binance의 금지 국가 목록(2026년 1월 5일 업데이트)에는 제재 대상 국가와 지역 외에 미국, 캐나다, 네덜란드가 올라 있습니다. 영국에서는 일부 서비스를 개인(리테일) 고객이 이용할 수 없습니다.",
    },
    {
      title: "더 낮은 수수료를 원할 때",
      text: "Binance의 기본 등급 수수료는 현물이 메이커와 테이커 모두 0.10%, USDⓈ-M 선물이 0.02% / 0.05%입니다. 수수료를 BNB로 내면 현물은 0.075%, 선물은 0.018% / 0.045%로 낮아집니다.",
    },
    {
      title: "더 높은 레버리지나 더 많은 코인을 원할 때",
      text: "레버리지는 BTCUSDT·ETHUSDT 무기한 선물에서 150배가 한도이며, 신규 선물 계정은 첫 30일 동안 20배를 넘게 쓸 수 없습니다. Binance에 상장된 암호화폐는 600종 이상입니다.",
    },
    {
      title: "EEA에서는 레퍼럴 혜택 없음",
      text: "2026년 7월 1일부터 EEA(유럽경제지역) 국가에 등록된 사용자는 Binance 레퍼럴 프로그램에 더 이상 참여할 수 없습니다. Binance 레퍼럴 약관에는 영국, 싱가포르, 일본, 튀르키예, 홍콩, 이스라엘에 대한 제한도 명시되어 있습니다.",
    },
    {
      title: "무엇보다 본인 인증이 먼저",
      text: "모든 신규 사용자는 입금이나 거래를 하기 전에 본인 인증(KYC)을 마쳐야 합니다. Binance에 따르면 심사는 보통 48시간 이내에 끝납니다.",
    },
    {
      title: "모든 것을 한 거래소에 두고 싶지 않을 때",
      text: "위험이 전혀 없는 중앙화 거래소는 없습니다. 거래 자금을 두 번째 거래소에도 두면 한 플랫폼에 대한 의존도가 낮아집니다.",
    },
  ],
  stayIf: [
    "미결제약정과 선물 거래량이 모든 거래소 가운데 가장 큰 Binance의 유동성이 무엇보다 중요한 경우",
    "수수료를 BNB로 내서 현물 수수료 25%, USDⓈ-M 선물 수수료 10% 할인을 받는 경우",
    "ADGM FSRA의 규제, 직접 검증할 수 있는 준비금 증명, 약 10억 달러 규모의 SAFU 기금을 중요하게 여기는 경우",
  ],
  faqs: [
    {
      q: "미국, 캐나다, 네덜란드에서 Binance를 이용할 수 있나요?",
      a: "아니요. Binance의 금지 국가 목록(2026년 1월 5일 업데이트)에는 미국, 캐나다, 네덜란드가 올라 있습니다. 미국의 경우 미국 시민과 미국 내에서 활동하는 모든 사람도 이 목록의 적용 대상입니다.",
    },
    {
      q: "Binance 레퍼럴 프로그램은 유럽에서도 이용할 수 있나요?",
      a: "EEA(유럽경제지역) 거주자는 이제 이용할 수 없습니다. Binance 레퍼럴 약관에 따르면 EEA 국가에 등록된 사용자는 2026년 7월 1일부터 Binance 레퍼럴 프로그램에 참여할 자격이 없으며, 약관에는 영국에 대한 제한도 명시되어 있습니다. Binance가 서비스를 제공하는 국가에서는 여전히 Binance 계정을 만들 수 있지만, 그곳에서는 레퍼럴이 효력이 없습니다.",
    },
    {
      q: "Binance는 신규 계정의 레버리지를 제한하나요?",
      a: "예. 개설한 지 30일이 지나지 않은 선물 계정은 20배를 넘게 쓸 수 없습니다. 그 이후에는 BTCUSDT·ETHUSDT 무기한 선물에서 포지션 규모 30만 USDT까지 최대 150배를 쓸 수 있습니다.",
    },
  ],
  reserves: "BTC 100.05% (2026년 11월 12일 감사), 머클 트리와 zk-SNARKs로 직접 검증 가능",
  fund: "약 10억 달러 규모의 SAFU 기금 (2026년 2월 기준)",
  featureNotes: {
    copyTrading: "선물·현물 카피 트레이딩",
    tradingBots: "현물·선물 그리드, DCA, 차익거래, 리밸런싱, TWAP 봇",
    options: "BTC, ETH, BNB, SOL, XRP, DOGE 옵션",
    demoTrading: "가상 자금으로 하는 현물·선물 모의 거래",
    margin: "격리 마진과 교차 마진",
    p2p: "현지 결제 수단을 지원하는 Binance P2P",
    fiat: "은행 송금, 신용카드 또는 직불카드 (지역에 따라 다름)",
    earn: "Simple Earn, Dual Investment, ETH 스테이킹",
    launchpad: "Launchpool 및 HODLer Airdrops",
    web3Wallet: "Binance Wallet, Binance 앱에 내장된 셀프 커스터디 지갑",
    card: "Binance Card, 브라질 거주자 전용",
  },
  countryNotes: {
    uk: "영국 개인(리테일) 고객은 일부 서비스 이용 불가",
    au: "Binance Australia",
    jp: "Binance Japan",
    sg: "금지 국가 목록에는 없지만 레퍼럴 프로그램 이용 제한",
    hk: "금지 국가 목록에는 없지만 레퍼럴 프로그램 이용 제한",
    ae: "두바이의 Binance UAE",
  },
  regional:
    "Binance.com은 아부다비의 ADGM Financial Services Regulatory Authority로부터 인가받은 세 법인이 운영합니다. 일본에는 Binance Japan Inc., 호주에는 AUSTRAC에 등록된 Binance Australia, 아랍에미리트(UAE)에는 두바이에서 VARA 인가를 받은 Binance FZE가 별도의 현지 플랫폼으로 있으며, Binance는 바레인, 카자흐스탄, 뉴질랜드, 태국, 인도네시아, 멕시코, 엘살바도르, 아르헨티나, 브라질, 남아프리카공화국에도 인가받은 법인이 있다고 밝히고 있습니다. Binance의 라이선스 페이지에는 EU나 EEA 법인이 기재되어 있지 않습니다.",
  mica: "",
  sourceLabels: [
    "Binance: 카피 트레이딩",
    "Binance: 트레이딩 봇",
    "Binance: 옵션",
    "Binance: 모의 거래",
    "Binance: 격리 마진",
    "Binance P2P",
    "Binance: 카드 또는 은행 송금으로 암호화폐 구매",
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
