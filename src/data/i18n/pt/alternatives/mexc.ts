import type { AlternativesText } from "../../../types";

export const mexc: AlternativesText = {
  role: "Taxas mais baixas, maior alavancagem",
  pick: "A MEXC tem as taxas mais baixas (0% maker) e a maior alavancagem (até 500x), mas nenhuma licença de primeira linha",
  pitch:
    "A MEXC compete no preço: taxa maker zero no Spot (mercado à vista) e na maioria dos contratos futuros, 0,02% taker nos Futuros BTCUSDT e até 500x em BTCUSDT e ETHUSDT. Ela lista 1.384 pares Spot e 1.152 contratos futuros – e ela mesma afirma que não tem licença de primeira linha nem autorização MiCA.",
  chooseIf: [
    "Você negocia com frequência e as taxas são o seu maior custo – makers pagam 0% no Spot e na maioria dos contratos futuros",
    "Você vive atrás de novas listagens: 1.384 pares Spot e 1.152 contratos futuros",
    "Você se cadastrou sem código de indicação – a MEXC permite vincular um indicador por conta própria em até 30 dias",
  ],
  thinkTwiceIf: [
    "A regulamentação importa para você – a MEXC afirma que não tem licença de primeira linha nem autorização MiCA",
    "Você mora nos Estados Unidos, no Reino Unido, no Canadá, na França, na Holanda, em Singapura ou em Hong Kong – todos são jurisdições proibidas no Contrato de Usuário da MEXC",
    "Você conta com os bônus – eles não podem ser sacados e são perdidos se você tirar fundos da conta de Futuros antes da hora",
  ],
  intro:
    "A MEXC atrai traders com taxa maker zero, alavancagem de até 500x e uma lista enorme de mercados. Quem procura uma alternativa à MEXC faz isso principalmente por motivos regulatórios – a MEXC afirma que não tem licença de primeira linha nem autorização MiCA –, porque ela está saindo da França e da Holanda e é fechada para os Estados Unidos, o Reino Unido e o Canadá, ou porque precisa de produtos que a MEXC não mostra no próprio site, como opções ou margem no Spot. Esta página compara as seis alternativas mais próximas com a MEXC, com números dos sites das próprias corretoras.",
  reasons: [
    {
      title: "Sem licença de primeira linha",
      text: "A entidade contratante é a MEXC (Comoros) Ltd, registrada na União das Comores. A MEXC não cita nenhuma licença nas próprias páginas, afirma que não tem licença de primeira linha nem autorização MiCA e observa, no seu próprio guia, que consta no registro provisório de entidades não conformes da ESMA.",
    },
    {
      title: "A MEXC está saindo da França e da Holanda",
      text: "O Contrato de Usuário (atualizado em 13 de outubro de 2026) lista a França e a Holanda como proibidas. A MEXC definiu 16 de novembro de 2026 como data final de encerramento das contas na Holanda e está encerrando as atividades na França em etapas até 5 de março de 2027.",
    },
    {
      title: "Fechada para os EUA, o Reino Unido e o Canadá",
      text: "Os Estados Unidos, o Reino Unido, o Canadá, Singapura, Hong Kong, a Malásia, a China continental, a Rússia, a Bielorrússia e o Cazaquistão também são jurisdições proibidas.",
    },
    {
      title: "Na prática, a verificação é necessária",
      text: "A MEXC afirma que não concluir o KYC pode afetar seu acesso a depósitos, saques e negociação, e as recompensas exigem pelo menos o KYC Primário.",
    },
    {
      title: "Bônus com condições",
      text: "Os bônus não podem ser sacados – só o lucro obtido com eles – e tirar fundos da conta de Futuros antes de esgotar um bônus faz você perder o bônus inteiro.",
    },
    {
      title: "Produtos que não encontramos",
      text: "Em 16 de novembro de 2026, não encontramos no site da própria MEXC negociação de opções, margem no Spot nem carteira de autocustódia.",
    },
  ],
  stayIf: [
    "As taxas são o que decide para você: 0% maker e 0,02% taker nos Futuros BTCUSDT, 0% / 0,05% no Spot",
    "Você negocia tokens novos e pequenos logo no início – 1.384 pares Spot e 1.152 contratos futuros",
    "Você aceita uma plataforma offshore e deixa lá apenas o capital de trading",
  ],
  faqs: [
    {
      q: "A MEXC está saindo da França e da Holanda?",
      a: "Sim. O Contrato de Usuário da MEXC (atualizado em 13 de outubro de 2026) lista os dois países como jurisdições proibidas. Para a Holanda, a MEXC definiu 16 de novembro de 2026 como data final de encerramento das contas; na França, está encerrando as atividades em etapas entre 28 de outubro de 2026 e 5 de março de 2027, e os cadastros já estão fechados.",
    },
    {
      q: "A MEXC atende a União Europeia?",
      a: "As próprias páginas da MEXC se contradizem. O Contrato de Usuário proíbe a França e a Holanda, e o artigo da MEXC sobre países restritos diz que os demais países da UE e do EEE (Espaço Econômico Europeu) não são proibidos – ao mesmo tempo em que afirma que a MEXC não tem autorização MiCA e consta no registro provisório de entidades não conformes da ESMA. Um artigo mais recente da MEXC diz que ela não atende a UE/EEE. Quem está no EEE e quer uma plataforma com autorização MiCA precisa olhar as alternativas.",
    },
    {
      q: "A MEXC tem opções ou negociação com margem no Spot?",
      a: "Em 16 de novembro de 2026, não encontramos nenhum dos dois no próprio site da MEXC: a central de ajuda não traz resultados para opções, e os tipos de conta descritos são Spot, Futuros, Fiat e Copy Trade. Os derivativos da MEXC são futuros com margem em USDT e em moeda (coin-margined).",
    },
  ],
  reserves: "USDT 122,42%, USDC 109,84%, BTC 317,61%, ETH 112,41% (snapshot de 9 de novembro de 2026)",
  fund: "Guardian Fund de US$ 100 milhões, mais um fundo de seguro de Futuros",
  featureNotes: {
    copyTrading: "Copy trading de Futuros com uma conta Copy Trade separada",
    tradingBots: "Robô de grid em Futuros, além de robôs de grid e DCA no Spot",
    options: "",
    demoTrading: "Conta demo de Futuros com dados de mercado em tempo real",
    margin: "",
    p2p: "P2P sem taxas para USDT, BTC, ETH e outras moedas",
    fiat: "Cartões Visa e Mastercard, transferência bancária e Apple Pay",
    earn: "Poupança flexível e com prazo fixo e On-Chain Earn",
    launchpad: "Subscrição de tokens no Launchpad",
    web3Wallet: "",
    card: "MEXC Card, um cartão cripto de pagamento",
  },
  countryNotes: {
    de: "fora da lista de proibidos, mas a MEXC não tem autorização MiCA e diz, em um artigo mais recente, que não atende a UE/EEE",
    fr: "encerramento gradual até 5 de março de 2027",
    nl: "encerramento definitivo das contas em 16 de novembro de 2026",
    es: "fora da lista de proibidos, mas a MEXC não tem autorização MiCA e diz, em um artigo mais recente, que não atende a UE/EEE",
    it: "fora da lista de proibidos, mas a MEXC não tem autorização MiCA e diz, em um artigo mais recente, que não atende a UE/EEE",
    au: "fora da lista de proibidos; sem alavancagem de 500x",
    jp: "sem proibição, mas a MEXC classifica o Japão como limitado – o app não está nas lojas de apps do Japão",
    in: "sem proibição, mas a MEXC classifica a Índia como limitada – o app não está listado no país",
  },
  regional: "",
  mica: "",
  sourceLabels: [
    "MEXC: Copy trading",
    "MEXC: Robô de grid em Futuros",
    "MEXC: Conta demo de Futuros",
    "MEXC: Tipos de conta explicados",
    "MEXC: Negociação P2P",
    "MEXC: Compra de cripto com cartão ou transferência bancária",
    "MEXC: Earn",
    "MEXC: Launchpad",
    "MEXC: Entenda o MEXC Card",
    "MEXC: Encerramento dos serviços na França",
    "MEXC Learn: Procurando alternativas à MEXC",
  ],
};
