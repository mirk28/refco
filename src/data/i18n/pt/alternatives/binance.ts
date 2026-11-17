import type { AlternativesText } from "../../../types";

export const binance: AlternativesText = {
  role: "Maior liquidez",
  pick: "A Binance tem o mercado de derivativos mais profundo e permite vincular em até 30 dias um código de indicação esquecido",
  pitch:
    "A Binance é a maior corretora do ranking de derivativos da CoinMarketCap e a referência em liquidez: spreads apertados nos contratos perpétuos de BTC, ETH e moedas de grande capitalização, 0,02% maker / 0,05% taker em Futuros e até 150x em BTCUSDT e ETHUSDT. Spot, margem, Futuros, opções, robôs e copy trading funcionam com um único login.",
  chooseIf: [
    "Você opera grandes volumes e quer os menores spreads em perpétuos de BTC, ETH e large caps",
    "Você quer Spot, margem, Futuros, opções, robôs e copy trading com um único login",
    "Você se cadastrou sem código de indicação – a Binance permite vincular um em até 30 dias se você não tiver feito depósitos nem operações",
  ],
  thinkTwiceIf: [
    "Você mora nos Estados Unidos, no Canadá ou na Holanda – os três estão na lista de países proibidos da Binance",
    "Você reside no EEE e quer benefícios de indicação – a Binance exclui usuários do EEE do seu programa de indicação desde 1º de julho de 2026",
    "Você quer alavancagem alta desde o primeiro dia – contas de Futuros novas ficam limitadas a 20x nos primeiros 30 dias",
  ],
  intro:
    "A Binance é a maior corretora de criptomoedas em open interest (contratos em aberto) de derivativos, mas não está aberta a todos e não é a mais barata nem a mais flexível em todos os pontos. Quem procura uma alternativa à Binance costuma fazer isso porque a Binance não opera no seu país – os Estados Unidos, o Canadá e a Holanda estão na lista de países proibidos –, porque quer taxas mais baixas ou mais alavancagem, ou porque não quer deixar todo o dinheiro em uma única exchange. Esta página compara as seis alternativas mais próximas com a Binance, usando números dos sites das próprias corretoras.",
  reasons: [
    {
      title: "A Binance não está disponível no seu país",
      text: "A lista de países proibidos da Binance (atualizada em 5 de janeiro de 2026) inclui os Estados Unidos, o Canadá e a Holanda, além de países e regiões sob sanções. No Reino Unido, alguns serviços não estão acessíveis para clientes de varejo.",
    },
    {
      title: "Você quer taxas mais baixas",
      text: "No nível padrão, a Binance cobra 0,10% maker e taker no Spot (mercado à vista) e 0,02% / 0,05% nos Futuros USDⓈ-M. Pagando as taxas em BNB, isso cai para 0,075% no Spot e 0,018% / 0,045% nos Futuros.",
    },
    {
      title: "Você quer mais alavancagem ou mais moedas",
      text: "A alavancagem para em 150x nos contratos perpétuos BTCUSDT e ETHUSDT, e contas de Futuros novas não podem usar mais de 20x nos primeiros 30 dias. A Binance lista mais de 600 criptomoedas.",
    },
    {
      title: "Sem benefícios de indicação no EEE",
      text: "Desde 1º de julho de 2026, usuários cadastrados em países do EEE (Espaço Econômico Europeu) não podem mais participar do programa de indicação da Binance. Os termos de indicação também listam restrições para o Reino Unido, Singapura, o Japão, a Turquia, Hong Kong e Israel.",
    },
    {
      title: "A verificação vem antes de tudo",
      text: "Todo novo usuário precisa concluir a verificação de identidade antes de depositar ou negociar. Segundo a Binance, a análise costuma ficar pronta em até 48 horas.",
    },
    {
      title: "Você não quer tudo em uma única corretora",
      text: "Nenhuma corretora centralizada é livre de riscos. Manter capital de trading em uma segunda corretora reduz a sua dependência de uma única plataforma.",
    },
  ],
  stayIf: [
    "A liquidez é sua prioridade – a Binance tem o maior open interest e o maior volume de Futuros entre todas as corretoras",
    "Você paga as taxas em BNB: 25% de desconto no Spot e 10% nos Futuros USDⓈ-M",
    "Você valoriza a regulação da FSRA do ADGM, uma prova de reservas que você mesmo pode verificar e o fundo SAFU de cerca de US$ 1 bilhão",
  ],
  faqs: [
    {
      q: "A Binance funciona nos EUA, no Canadá ou na Holanda?",
      a: "Não. A lista de países proibidos da Binance (atualizada em 5 de janeiro de 2026) inclui os Estados Unidos, o Canadá e a Holanda. No caso dos Estados Unidos, a lista também abrange cidadãos americanos e qualquer pessoa que atue nos EUA.",
    },
    {
      q: "O programa de indicação da Binance funciona na Europa?",
      a: "Para residentes do EEE, não mais. Segundo os termos de indicação da Binance, usuários cadastrados em países do EEE não podem participar do Programa de Indicação da Binance desde 1º de julho de 2026, e os termos também listam restrições para o Reino Unido. Ainda é possível abrir uma conta na Binance a partir dos países atendidos pela corretora, mas lá a indicação não tem efeito.",
    },
    {
      q: "A Binance limita a alavancagem de contas novas?",
      a: "Sim. Contas de Futuros com menos de 30 dias não podem usar mais de 20x. Depois disso, a Binance oferece até 150x nos contratos perpétuos BTCUSDT e ETHUSDT para posições de até 300.000 USDT.",
    },
  ],
  reserves: "BTC 100,05% (auditoria de 12 de novembro de 2026), verificável pelo usuário com árvore de Merkle e zk-SNARKs",
  fund: "Fundo SAFU de cerca de US$ 1 bilhão (em fevereiro de 2026)",
  featureNotes: {
    copyTrading: "Copy trading de Futuros e de Spot",
    tradingBots: "Robôs de grid para Spot e Futuros, DCA, arbitragem, rebalanceamento e TWAP",
    options: "Opções de BTC, ETH, BNB, SOL, XRP e DOGE",
    demoTrading: "Conta demo com saldo virtual para Spot e Futuros",
    margin: "Margem isolada e cruzada",
    p2p: "Binance P2P com meios de pagamento locais",
    fiat: "Transferência bancária e cartão de crédito ou débito, conforme a região",
    earn: "Simple Earn, investimento dual e staking de ETH",
    launchpad: "Launchpool e HODLer Airdrops",
    web3Wallet: "Binance Wallet, uma carteira de autocustódia dentro do app da Binance",
    card: "Binance Card, só para residentes no Brasil",
  },
  countryNotes: {
    uk: "alguns serviços indisponíveis para clientes de varejo do Reino Unido",
    au: "Binance Australia",
    jp: "Binance Japan",
    sg: "fora da lista de países proibidos, mas com programa de indicação restrito no país",
    hk: "fora da lista de países proibidos, mas com programa de indicação restrito no país",
    ae: "Binance UAE, em Dubai",
  },
  regional:
    "A Binance.com é operada por três entidades licenciadas pela Financial Services Regulatory Authority do ADGM, em Abu Dhabi. Existem plataformas locais separadas para o Japão (Binance Japan Inc.), a Austrália (Binance Australia, registrada no AUSTRAC) e os Emirados Árabes Unidos (Binance FZE, licenciada pela VARA em Dubai), e a Binance lista outras entidades licenciadas no Bahrein, no Cazaquistão, na Nova Zelândia, na Tailândia, na Indonésia, no México, em El Salvador, na Argentina, no Brasil e na África do Sul. A página de licenças não cita nenhuma entidade na UE ou no EEE.",
  mica: "",
  sourceLabels: [
    "Binance: Copy trading",
    "Binance: Robôs de trading",
    "Binance: Opções",
    "Binance: Conta demo",
    "Binance: Margem isolada",
    "Binance P2P",
    "Binance: Comprar cripto com cartão ou transferência bancária",
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
