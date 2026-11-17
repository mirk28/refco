import type { AlternativesText } from "../../../types";

export const okx: AlternativesText = {
  role: "낮은 수수료, 옵션, MiCA",
  pick: "OKX는 낮은 수수료에 옵션, 그리고 EEA(유럽경제지역)를 위한 MiCA 인가 플랫폼을 함께 제공합니다",
  pitch:
    "OKX의 수수료는 현물 메이커 0.08% / 테이커 0.10%, 선물·무기한 스왑 0.02% / 0.05%이며, 옵션은 0.03%에 거래할 수 있고 준비금 증명을 매월 공개합니다. EEA(유럽경제지역) 거주자는 MiCA 인가를 받은 플랫폼인 OKX Europe을 이용하게 되는데, 이곳에서는 무기한 스왑이 10배로 제한됩니다.",
  chooseIf: [
    "현물, 선물, 옵션의 기본 수수료가 낮은 거래소를 원하는 경우",
    "EEA(유럽경제지역)에 거주하며 MiCA 인가를 받은 거래소를 원하는 경우",
    "내 잔액과 직접 대조해 볼 수 있는 월간 준비금 증명을 중요하게 생각하는 경우",
  ],
  thinkTwiceIf: [
    "OKX Europe이 무기한 스왑(X-Perps)을 10배로 제한하는데 유럽에서 높은 레버리지를 원하는 경우",
    "OKX가 제한 지역으로 명시한 캐나다, 인도, 일본, 홍콩에 거주하는 경우",
    "OKX는 가입 후에 레퍼럴 코드를 추가해 주지 않는데 코드를 깜빡할 수 있는 경우",
  ],
  intro:
    "OKX(오케이엑스)는 현물과 파생상품 분야에서 손꼽히는 대형 거래소로, 기본 수수료가 낮고 준비금 증명을 매월 공개합니다. OKX 대안 거래소를 찾는 이유는 주로 거래할 수 있는 상품이 거주 지역에 따라 크게 달라지거나(OKX Europe에서는 무기한 스왑이 10배로 제한됩니다), 글로벌 사이트의 레버리지가 100배에서 멈추거나, 캐나다·인도·일본·홍콩에서는 OKX를 이용할 수 없기 때문입니다. 이 페이지에서는 OKX와 가장 가까운 대안 거래소 여섯 곳을 각 거래소 공식 사이트의 수치를 바탕으로 OKX와 비교합니다.",
  reasons: [
    {
      title: "레버리지 제한 – 특히 유럽에서",
      text: "글로벌 사이트의 최대 레버리지는 100배로, BTC-USDT, ETH-USDT 같은 무기한 스왑에 적용됩니다. OKX Europe에서는 무기한 상품을 X-Perps라고 부르며 10배로 제한되고, 포지션이 크면 한도가 더 낮아집니다.",
    },
    {
      title: "거주 지역에서 OKX 이용 제한",
      text: "OKX는 캐나다, 인도, 일본, 홍콩, 말레이시아와 미국 일부 관할 지역을 제한 지역으로 명시하고 있습니다(목록 업데이트: 2026년 11월 14일). 영국, 호주, 브라질, 한국에서는 파생상품이 제한됩니다.",
    },
    {
      title: "상대적으로 적은 상장 코인",
      text: "OKX Europe 페이지에는 코인이 270개 이상이라고 나와 있는데, 알트코인에 주력하는 거래소보다는 종류가 적습니다.",
    },
    {
      title: "웰컴 보너스 잠금",
      text: "OKX Europe에서는 암호화폐 보상이 최대 45일간 잠기며, 거래는 가능하지만 출금은 할 수 없습니다. 글로벌 사이트에서는 보상을 30일 이내에 열어야 하고, 완료하지 못한 미션은 가입 180일 후에 만료됩니다.",
    },
    {
      title: "놓친 레퍼럴 코드는 추가 불가",
      text: "OKX는 초대 코드가 가입 과정에서만 적용되며 나중에 소급해서 추가할 수 없다고 밝히고 있습니다. 계정을 삭제하고 다시 가입해도 소용이 없습니다.",
    },
    {
      title: "휴대폰 번호 필수",
      text: "OKX는 모든 계정에 이메일 주소와 휴대폰 번호를 모두 요구하며, 거래·입금·출금을 하려면 먼저 본인 인증(KYC)을 마쳐야 합니다.",
    },
  ],
  stayIf: [
    "현물 0.08% / 0.10%, 선물 0.02% / 0.05%라는 낮은 기본 수수료가 중요할 만큼 수수료에 민감한 경우",
    "무기한 스왑과 함께 옵션이나 만기 선물도 거래하는 경우",
    "EEA 거주자로서 MiCA 인가 플랫폼을 계속 이용하고 싶은 경우",
  ],
  faqs: [
    {
      q: "OKX Europe의 최대 레버리지는 몇 배인가요?",
      a: "10배입니다. OKX Europe에서는 무기한 상품을 X-Perps라고 부르며 10배로 제한되고, 포지션이 크면 한도가 더 낮아집니다. 글로벌 사이트에서는 BTC-USDT, ETH-USDT 같은 무기한 스왑에서 최대 100배까지 가능합니다.",
    },
    {
      q: "캐나다, 인도, 일본, 홍콩에서 OKX를 이용할 수 있나요?",
      a: "아니요. 네 곳 모두 OKX의 제한 지역 목록(마지막 업데이트: 2026년 11월 14일)에 올라 있으며, 말레이시아, 아프가니스탄, 네팔, 우즈베키스탄과 제재 대상 국가도 이 목록에 포함됩니다.",
    },
    {
      q: "영국에서 OKX를 이용할 수 있나요?",
      a: "일부만 가능합니다. OKX는 영국에서 파생상품 관련 서비스, CeFi 관련 서비스, P2P 서비스를 제한합니다. 영국 거주자는 글로벌 플랫폼의 영국용 페이지(okx.com/en-gb)를 이용하며, 전체 상품을 이용할 수는 없습니다.",
    },
  ],
  reserves: "BTC 108%, ETH 101%, USDT 106%, USDC 100% (월간 보고서, 2026년 11월 1일 검증)",
  fund: "마진·파생상품 거래 전용 보안 기금 – 청산 시 발생하는 부족분 보전",
  featureNotes: {
    copyTrading: "글로벌 사이트에서 현물·선물 카피 트레이딩 지원",
    tradingBots: "현물 그리드, 선물 그리드 및 기타 봇 전략",
    options: "글로벌 사이트에서 옵션 제공, 메이커 0.03% / 테이커 0.03%",
    demoTrading: "OKX 계정으로 이용하는 모의 거래 환경",
    margin: "글로벌 사이트에서 현물 마진 최대 10배",
    p2p: "글로벌 사이트에서 에스크로 방식의 P2P 마켓 운영",
    fiat: "지역별로 카드·은행 송금·PayPal·Apple Pay 지원, OKX Europe은 SEPA·Visa·Mastercard",
    earn: "Simple Earn, On-chain Earn, 듀얼 인베스트먼트",
    launchpad: "글로벌 사이트에서 Jumpstart 토큰 세일 진행",
    web3Wallet: "OKX Wallet, 셀프 커스터디, 130개 이상의 체인 지원",
    card: "OKX Card, 스테이블코인으로 결제하는 Mastercard",
  },
  countryNotes: {
    us: "OKX US, 승인된 미국 내 지역 한정",
    uk: "파생상품, CeFi 관련 서비스, P2P 서비스 제한",
    de: "OKX Europe",
    fr: "OKX Europe",
    nl: "OKX Europe",
    es: "OKX Europe",
    it: "OKX Europe",
    au: "OKX Australia",
    sg: "OKX Singapore",
    ae: "두바이의 OKX Middle East",
  },
  regional:
    "OKX는 여러 지역에서 별도의 플랫폼을 운영합니다. EEA(유럽경제지역) 거주자를 위한 몰타의 OKX Europe Limited(okx.com/en-eu, MiCA에 따라 MFSA 인가), 승인된 미국 내 지역을 위한 OKX US(OKX INC., FinCEN에 등록된 자금 서비스 사업자), OKX Australia, OKX Singapore(OKX SG Pte. Ltd.), VARA 라이선스를 받은 두바이의 OKX Middle East Fintech FZE, 그리고 OKX Brazil입니다. 그 밖의 사용자에게는 세이셸의 Aux Cayes FinTech Co. Ltd.가 서비스를 제공합니다. 지역 플랫폼은 상품 구성이 따로 정해져 있어, 예를 들어 OKX Europe은 무기한 스왑을 10배로 제한합니다.",
  mica: "OKX Europe Limited, 몰타, MFSA 인가",
  sourceLabels: [
    "OKX: 현물 카피 트레이딩",
    "OKX: 현물 그리드 트레이딩 봇",
    "OKX: 옵션 거래",
    "OKX API 문서: 모의 거래",
    "OKX: 현물 마진 거래",
    "OKX: P2P 거래",
    "OKX: 카드 또는 은행 송금으로 암호화폐 구매",
    "OKX: Simple Earn",
    "OKX: Jumpstart",
    "OKX Wallet",
    "OKX: OKX Card",
    "OKX Europe: 서비스 약관 (EEA)",
    "OKX US",
    "OKX Australia: 회사 소개",
    "OKX UK",
  ],
};
