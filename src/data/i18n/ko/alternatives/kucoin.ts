import type { AlternativesText } from "../../../types";

export const kucoin: AlternativesText = {
  role: "무료 트레이딩 봇",
  pick: "KuCoin은 무료 트레이딩 봇과 1,000개가 넘는 상장 토큰을 제공합니다",
  pitch:
    "KuCoin은 1,000개가 넘는 토큰을 상장하고 있으며 자동 매매를 쉽게 할 수 있습니다. 트레이딩 봇은 거래 수수료 외에는 비용이 들지 않습니다. 선물 수수료는 메이커 0.02% / 테이커 0.06%이고 레버리지는 최대 125배이며, 레퍼럴은 365일 동안 유지됩니다.",
  chooseIf: [
    "무료로 쓸 수 있는 봇으로 거래를 자동화하려는 경우",
    "1,000개가 넘는 상장 토큰과 1,300개 이상의 거래쌍에서 알트코인을 찾는 경우",
    "레퍼럴 코드를 빠뜨렸을 수 있어 KuCoin 고객센터의 “Link Referrer” 요청이 필요할 수 있는 경우",
  ],
  thinkTwiceIf: [
    "미국, 싱가포르, 홍콩, 프랑스, 네덜란드 또는 캐나다 온타리오주·브리티시컬럼비아주에 거주하는 경우",
    "Class B 토큰은 0.20%, Class C 토큰은 0.30%로 현물 수수료가 오르는 소형 토큰을 거래하는 경우",
    "KuCoin이 2026년 1월 15일에 종료한 옵션 거래를 원하는 경우",
  ],
  intro:
    "KuCoin(쿠코인)은 알트코인을 일찍 상장하고 트레이딩 봇을 무료로 제공하는 거래소로 알려져 있습니다. KuCoin 대안 거래소를 찾는 주된 이유는 2025년 1월에 미국 사용자 계정이 폐쇄되었거나, 프랑스·네덜란드·싱가포르와 캐나다 일부 지역이 제한 지역이거나, KuCoin보다 큰 선물 시장을 원하기 때문입니다. 이 페이지에서는 KuCoin과 가장 가까운 대안 거래소 여섯 곳을 각 거래소 공식 사이트의 수치로 비교합니다.",
  reasons: [
    {
      title: "KuCoin의 미국 철수",
      text: "KuCoin은 2025년 1월 27일 미국 법무부(US Department of Justice)와의 합의를 발표했으며, 미국 사용자의 계정은 그에 앞서 2025년 1월 23일부로 이미 폐쇄했습니다. 미국은 속령을 포함해 KuCoin 이용약관상 제한 지역입니다.",
    },
    {
      title: "그 밖의 제한 국가",
      text: "이용약관(2026년 10월 29일 업데이트)에는 싱가포르, 중국 본토와 홍콩, 말레이시아, 카자흐스탄, 우즈베키스탄, 러시아, 벨라루스, 프랑스, 네덜란드, 캐나다 온타리오주와 브리티시컬럼비아주도 제한 지역으로 올라 있습니다.",
    },
    {
      title: "더 작은 선물 시장",
      text: "CoinMarketCap 파생상품 순위에서 KuCoin의 선물 거래량은 상위 다섯 개 거래소보다 적습니다. 대체로 호가창 규모가 클수록 대량 주문의 스프레드가 좁아집니다.",
    },
    {
      title: "소형 토큰의 높은 수수료",
      text: "현물 기본 수수료율 0.10%는 Class A 토큰에만 적용됩니다. Class B 토큰은 0.20%, Class C 토큰은 0.30%이며, 선물 테이커 수수료는 0.06%입니다.",
    },
    {
      title: "옵션 거래 종료",
      text: "KuCoin은 2025년 12월 24일 옵션 거래 서비스를 종료한다고 공지했고, 웹과 앱의 진입 경로는 2026년 1월 15일에 닫혔습니다.",
    },
    {
      title: "2020년 해킹",
      text: "2020년 해킹으로 약 2억 8,500만 달러 규모의 피해가 발생했습니다. KuCoin은 회수하지 못한 약 4,555만 달러를 자사와 보험 기금이 보전했으며 손실을 본 사용자는 없다고 밝히고 있습니다.",
    },
  ],
  stayIf: [
    "KuCoin의 무료 트레이딩 봇을 쓰고 있고 필요한 기능이 충족되는 경우",
    "KCS를 보유하고 있어 수수료를 KCS로 내고 현물·마진 수수료를 20% 할인받는 경우",
    "EEA(유럽경제지역)에 거주하며 오스트리아에서 MiCAR 라이선스를 보유한 KuCoin EU에 만족하는 경우",
  ],
  faqs: [
    {
      q: "미국 사용자는 아직 KuCoin에서 거래할 수 있나요?",
      a: "아니요. 미국은 속령을 포함해 KuCoin 이용약관상 제한 지역이며, KuCoin은 2025년 1월 23일부로 미국 사용자의 계정을 폐쇄했습니다. 대안 거래소들이 미국을 어떻게 다루는지는 이 페이지의 국가별 표에서 확인할 수 있습니다.",
    },
    {
      q: "KuCoin에서 아직 옵션 거래를 할 수 있나요?",
      a: "아니요. KuCoin은 2025년 12월 24일 옵션 거래 서비스를 종료한다고 공지했고, 웹과 앱의 진입 경로는 2026년 1월 15일에 닫혔습니다.",
    },
    {
      q: "KuCoin EU는 KuCoin과 같은 곳인가요?",
      a: "아니요. 빈에 있는 KuCoin EU Exchange GmbH는 MiCAR 라이선스를 바탕으로 몰타를 제외한 EEA(유럽경제지역) 거주자에게 서비스를 제공하며, 오스트리아 금융시장감독청(FMA)의 감독을 받습니다. KuCoin EU 고객센터에는 현물, 컨버트, 마진, Simple Earn, KuCard, SEPA 입금 항목이 있지만 선물 항목은 없습니다.",
    },
  ],
  reserves: "BTC 112%, ETH 115%, USDT 110%, USDC 127% (2026년 10월 31일 기준 데이터)",
  fund: "",
  featureNotes: {
    copyTrading: "USDT 무기한 선물 카피 트레이딩",
    tradingBots: "현물 그리드, DCA 등 무료 봇",
    options: "옵션 거래는 2026년 1월 15일 종료",
    demoTrading: "",
    margin: "현물 마진, BTC/USDT 10배",
    p2p: "현지 통화로 USDT를 구매하는 P2P 마켓",
    fiat: "Visa·Mastercard 카드, Apple Pay, 은행 이체",
    earn: "KuCoin Earn, 자유 입출금식 저축과 듀얼 인베스트먼트 포함",
    launchpad: "Spotlight 토큰 세일, GemPool",
    web3Wallet: "KuCoin Web3 Wallet, 멀티체인·셀프 커스터디",
    card: "KuCard: 몰타를 제외한 EEA 거주자는 Visa, 호주는 Mastercard",
  },
  countryNotes: {
    ca: "온타리오주와 브리티시컬럼비아주 이용 제한",
    de: "KuCoin EU",
    fr: "글로벌 사이트 이용 제한, KuCoin EU는 몰타를 제외한 EEA를 대상으로 하나 프랑스는 명시하지 않음",
    nl: "글로벌 사이트 이용 제한, KuCoin EU는 몰타를 제외한 EEA를 대상으로 하나 네덜란드는 명시하지 않음",
    es: "KuCoin EU",
    it: "KuCoin EU",
    au: "KuCoin AU",
  },
  regional:
    "빈에 있는 KuCoin EU Exchange GmbH(kucoin.com/en-eu)는 오스트리아 FMA의 감독 아래 MiCAR 라이선스로 몰타를 제외한 EEA(유럽경제지역) 거주자에게 서비스를 제공합니다. 호주는 KuCoin AU(Axis One Markets Pty Ltd, AUSTRAC 등록)가 담당하고, KuCoin Thailand는 kucoin.th에서 운영되며, 브라질 거주자에게는 별도의 KuCoin Brasil 약관이 적용됩니다.",
  mica: "빈 소재 KuCoin EU Exchange GmbH, 오스트리아 FMA 감독",
  sourceLabels: [
    "KuCoin: 선물 카피 트레이딩",
    "KuCoin: 트레이딩 봇(전략 거래)",
    "KuCoin: 옵션 거래 종료 공지",
    "KuCoin: 마진 거래",
    "KuCoin: P2P 거래",
    "KuCoin: 카드 또는 은행 이체로 암호화폐 구매",
    "KuCoin: Earn",
    "KuCoin: Spotlight 런치패드",
    "KuCoin: Web3 Wallet",
    "KuCoin: KuCard",
    "KuCoin EU: 일반 약관(General Terms)",
    "KuCoin AU",
  ],
};
