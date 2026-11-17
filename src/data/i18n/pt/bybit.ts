import type { ExchangeText } from "../../types";

export const bybit: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Campo “Referral Code (Optional)” no formulário de cadastro",
    apply:
      "Digite-o no campo “Referral Code (Optional)” do formulário de cadastro ou abra o link de cadastro desta página, que já preenche o campo para você.",
    whereToEnter:
      "O formulário de cadastro da Bybit tem um campo chamado “Referral Code (Optional)”. No site, ele aparece depois que você informa seu e-mail ou número de telefone; no app, uma etapa depois – nos dois casos, antes de tocar em “Sign Up Now”. O link desta página abre a página de convite da Bybit com o VN3KGLE já inserido nesse campo. Como o campo continua editável, confira se o código ainda está lá antes de enviar o cadastro.",
    afterSignupShort: "Não – apenas durante o cadastro",
    afterSignup:
      "Não. O guia de cadastro da Bybit informa que, depois de criar a conta, você não poderá adicionar, alterar nem excluir seu código de indicação ou de afiliado. A única exceção documentada pela Bybit vale para códigos de afiliado, que podem ser adicionados em até 14 dias numa conta principal que ainda não tenha código; a Bybit deixa claro que códigos do programa de indicação, como o VN3KGLE, não são aceitos nesse caso.",
    inviteeReward:
      "No programa de indicação da Bybit, quem é indicado pode ganhar até 250 USDT: 50 USDT pela primeira operação de pelo menos US$ 50 em até 14 dias após o cadastro, 100 USDT por um volume de negociação acumulado de pelo menos US$ 500 nos 30 dias seguintes a essa primeira operação e mais 100 USDT por pelo menos US$ 10.000 nesses mesmos 30 dias. A página de convite da Bybit também anuncia recompensas para o indicado pelo cadastro e pela verificação de identidade, e novos usuários recebem os 100 USDT em Welcome Gifts no Rewards Hub.",
    guide: [
      "O programa de indicação da Bybit paga os mesmos valores aos dois lados, e é por isso que a Bybit o anuncia como “up to 500 USDT combined” (até 500 USDT somados). Como indicado, você libera a sua parte em três etapas ligadas às suas próprias operações: uma primeira operação de pelo menos US$ 50 em até 14 dias após o cadastro e, depois, US$ 500 e US$ 10.000 de volume acumulado nos 30 dias seguintes. Conta o volume em Spot, derivativos e opções; operações em pares com taxa zero, não.",
      "Cada recompensa passa por uma análise de risco de 3 dias e depois precisa ser resgatada em até 10 dias; caso contrário, expira. A Bybit limita o programa a um fundo mensal de 500.000 USDT, distribuído por ordem de chegada. Essas regras valem para contas cadastradas no site global a partir de 10 de outubro de 2026.",
      "O país onde você mora decide se o código tem algum efeito. Os termos do programa de indicação da Bybit dizem que não há programa de indicação na Alemanha, no Reino Unido, na França, na Bélgica e em Hong Kong, e que o programa não está aberto a residentes do EEE (Espaço Econômico Europeu) indicados dentro do EEE. Quem mora no EEE usa a Bybit EU (bybit.eu), uma plataforma separada operada pela Bybit EU GmbH, em Viena, com uma oferta de indicação própria e menor.",
    ],
  },
  signup: {
    methods: ["um endereço de e-mail", "um número de telefone", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Abra a página de cadastro da Bybit",
        text: "Use o botão de cadastro desta página. Ele abre a página de convite da Bybit com o código de indicação VN3KGLE já preenchido.",
      },
      {
        title: "Selecione seu país de residência",
        text: "A Bybit pergunta isso primeiro porque os produtos e as recompensas dependem de onde você mora.",
      },
      {
        title: "Informe seu e-mail ou número de telefone",
        text: "Ou continue com Google, Apple ou Telegram.",
      },
      {
        title: "Confira o código de indicação",
        text: "O campo “Referral Code (Optional)” deve mostrar VN3KGLE. Esta é sua única chance – a Bybit não permite adicionar nem trocar o código depois.",
      },
      {
        title: "Digite o código de verificação e crie uma senha",
        text: "Confirme o código que a Bybit envia, escolha uma senha e toque em “Sign Up Now”. No app (versão 4.47.0 ou superior), você também pode configurar uma chave de acesso (passkey).",
      },
      {
        title: "Conclua a verificação de identidade",
        text: "A Bybit exige o nível de verificação Standard antes que você possa depositar ou negociar.",
      },
    ],
    kycShort: "Obrigatória para todos os produtos (nível Standard)",
    kyc: "Sim. A Bybit exige no mínimo a verificação de identidade Standard para todos os produtos. Sem ela, a conta não pode depositar nem negociar e só pode sacar – até 20.000 USDT por dia e 100.000 USDT por mês. A verificação Standard (documento de identidade mais uma avaliação de identidade) eleva o limite diário de saque para 1 milhão de USDT; a verificação Advanced, com comprovante de endereço, para 2 milhões de USDT.",
    documents:
      "A Bybit aceita passaporte, carteira de identidade, autorização de residência ou carteira de motorista. Só são aceitos documentos físicos, e o nível Advanced exige ainda um comprovante de endereço.",
    minAge: "18 anos",
  },
  welcomeTasks: [
    { task: "Indicação: primeira operação de pelo menos US$ 50 em até 14 dias após o cadastro", reward: "50 USDT" },
    {
      task: "Indicação: volume de negociação acumulado de pelo menos US$ 500 nos 30 dias seguintes à primeira operação",
      reward: "100 USDT",
    },
    { task: "Indicação: volume de negociação acumulado de pelo menos US$ 10.000 nos mesmos 30 dias", reward: "100 USDT" },
    { task: "Welcome Gifts: concluir a verificação de identidade", reward: "Fee Saver de 20 USDT (derivativos)" },
    { task: "Welcome Gifts: depositar pelo menos US$ 10", reward: "Position Airdrop de 30 USDT (derivativos)" },
    { task: "Welcome Gifts: negociar pelo menos US$ 10", reward: "Fee Saver de 50 USDT (derivativos)" },
  ],
  tokenDiscount:
    "Pagar as taxas em MNT dá 25% de desconto nas taxas de Spot (0,075% no VIP 0) e 10% nas de Futuros (0,018% maker / 0,0495% taker). O desconto não vale para contratos inversos, robôs de trading, seguidores no copy trading nem negociação via API.",
  extraFeeMarkets: ["Opções"],
  sourceLabels: [
    "Bybit: Como criar uma conta",
    "Bybit: Programa de indicação – perguntas frequentes gerais",
    "Bybit: Página e termos do programa de indicação",
    "Bybit: Como adicionar e consultar um código de afiliado registrado",
    "Bybit: Welcome Gifts no Rewards Hub",
    "Bybit: Perguntas frequentes sobre o Rewards Hub",
    "Bybit: Estrutura de taxas de negociação",
    "Bybit: Pagamento de taxas de negociação com MNT",
    "Bybit: Parâmetros de margem (faixas de alavancagem)",
    "Bybit: Perguntas frequentes sobre KYC de pessoa física",
    "Bybit: Vantagens de cada nível de KYC",
    "Bybit: Países com serviço restrito",
    "Bybit: Sobre nós",
    "Bybit: Prova de reservas",
    "Bybit: Cronologia do incidente de segurança (fevereiro de 2025)",
    "Bybit: Bybit Europe e MiCAR",
    "Bybit EU: Programa de indicação",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Derivativos", "Opções"],
  bonusHeadline: "Até 250 USDT em recompensas de indicação",
  benefits: [
    "Até 250 USDT para quem é indicado: 50 USDT após a primeira operação de US$ 50+ em até 14 dias, mais 100 USDT a cada marco de volume, de US$ 500 e de US$ 10.000",
    "100 USDT em Welcome Gifts no Rewards Hub por verificar a conta, depositar US$ 10 e negociar US$ 10",
    "Um único código de indicação para a conta inteira – vale o volume em Spot, derivativos e opções",
    "25% de desconto nas taxas de Spot e 10% nas de Futuros ao pagar as taxas em MNT",
  ],
  benefitNote:
    "As recompensas de indicação valem para contas cadastradas no site global da Bybit a partir de 10 de outubro de 2026, passam por uma análise de risco de 3 dias, precisam ser resgatadas em até 10 dias e saem de um fundo mensal de 500.000 USDT (por ordem de chegada). A Bybit não tem programa de indicação na Alemanha, no Reino Unido, na França, na Bélgica e em Hong Kong e não o abre a residentes do EEE indicados dentro do EEE. Os Welcome Gifts exigem a verificação de identidade Lv. 1, variam conforme o usuário e a região, expiram e não podem ser sacados.",
  headquarters: "Dubai, EAU",
  regulation: "Autorização MiCAR por meio da Bybit EU GmbH, Viena (supervisionada pela FMA da Áustria), para o EEE, exceto Malta",
  users: "Mais de 90 milhões de usuários (segundo a Bybit)",
  assets: "390 moedas, 509 pares Spot (API da Bybit)",
  maxLeverage: "Até 150x (perpétuo BTCUSDT)",
  feeNote:
    "As taxas caem conforme o nível VIP – o Supreme VIP paga 0% maker em derivativos – e podem variar por região; o que vale é a página “My Fee Rate” da sua conta.",
  products: [
    "Perpétuos em USDT e USDC",
    "Contratos inversos",
    "Opções",
    "Spot",
    "Copy trading",
    "Robôs de trading",
    "Conta de trading unificada",
  ],
  tagline: "Motor de negociação rápido, com foco em derivativos",
  quickAnswer:
    "O código de indicação da Bybit é VN3KGLE. Digite-o no campo “Referral Code (Optional)” ao criar sua conta – o botão desta página já preenche o código para você. Ele precisa estar lá no momento do cadastro: a Bybit não permite adicionar nem trocar o código de indicação depois. Quem é indicado pode ganhar até 250 USDT em três etapas de negociação, começando com 50 USDT pela primeira operação de US$ 50 em até 14 dias.",
  about: [
    "A Bybit surgiu em 2018 como corretora de derivativos e transferiu sua sede para Dubai em 2023. Hoje declara mais de 90 milhões de usuários em mais de 181 países e se apresenta como a segunda maior exchange do mundo em volume de negociação. A plataforma continua com cara de ferramenta para traders ativos: envio de ordens rápido, conta de trading unificada e um app para celular bem acabado.",
    "Além dos perpétuos em USDT e USDC, a Bybit oferece contratos inversos, opções, Spot (mercado à vista), copy trading e robôs de trading. Usuários padrão pagam 0,02% maker e 0,055% taker em contratos perpétuos e futuros e 0,1% no Spot. A alavancagem chega a 150x no perpétuo BTCUSDT na faixa de risco mais baixa e diminui à medida que a posição cresce. Os clientes europeus são atendidos pela Bybit EU GmbH, em Viena, supervisionada pela FMA da Áustria nos termos do MiCAR e com cobertura do EEE, exceto Malta.",
    "Em 21 de fevereiro de 2025, invasores levaram cerca de US$ 1,46 bilhão de uma das carteiras frias (cold wallets) de Ethereum da Bybit – o maior hack da história das criptomoedas. A Bybit manteve os saques abertos, repôs o ETH que faltava com empréstimos-ponte, grandes depósitos e compras OTC, e uma auditoria de prova de reservas feita pela Hacken em 24 de fevereiro mostrou o déficit coberto em até 72 horas. Segundo a Bybit, os ativos dos clientes continuaram lastreados 1:1 o tempo todo.",
  ],
  highlights: [
    { title: "DNA de derivativos", text: "Feita para traders de futuros desde o primeiro dia, com um motor de casamento de ordens rápido." },
    { title: "Até 250 USDT", text: "Recompensas de indicação em três etapas, ligadas ao seu próprio volume de negociação." },
    { title: "Déficit coberto em 72 horas", text: "Após o hack de 2025, a Bybit manteve os saques abertos e recompôs as reservas." },
  ],
  pros: [
    "Motor rápido e estável e app para celular de primeira linha",
    "Ampla oferta de contratos perpétuos, inversos e de opções",
    "Recompensas de indicação claras, de até 250 USDT para quem é indicado",
    "Prova de reservas com autoverificação por árvore de Merkle",
  ],
  cons: [
    "Grande incidente de segurança em fevereiro de 2025 (US$ 1,46 bilhão levado de uma carteira fria de Ethereum)",
    "O código de indicação não pode ser adicionado nem trocado depois do cadastro",
    "Sem programa de indicação para residentes do EEE e para a Alemanha, o Reino Unido, a França, a Bélgica e Hong Kong",
    "Indisponível nos EUA, no Canadá, em Singapura, em Hong Kong e na China continental",
  ],
  bestFor: [
    "Traders ativos de futuros perpétuos",
    "Traders que operam principalmente pelo celular",
    "Quem quer fazer copy trading com derivativos",
  ],
  signupTip:
    "Confira o campo “Referral Code (Optional)” antes de tocar em “Sign Up Now” – depois não dá para corrigir. Em seguida, faça sua primeira operação de pelo menos US$ 50 em até 14 dias para liberar os primeiros 50 USDT.",
  safety:
    "A Bybit guarda os ativos dos clientes em carteiras frias multiassinatura e publica uma prova de reservas que, segundo ela, mostra lastro de 1:1; na nossa verificação, o snapshot mais recente era de 27 de outubro de 2026, e você pode conferir o seu próprio saldo com uma checagem por árvore de Merkle e uma ferramenta de código aberto. Para proteger a conta, a Bybit oferece Google Authenticator e código antiphishing. O hack de fevereiro de 2025 mostra que até grandes corretoras podem ser invadidas – mantenha na plataforma apenas o capital que você usa para negociar.",
  restricted:
    "A Bybit lista como áreas com serviço restrito: os Estados Unidos, a China continental, Hong Kong, Singapura, o Canadá, a Coreia do Norte, Cuba, o Irã, o Uzbequistão, o Sudão, a Síria, além da Crimeia, de Sebastopol e das partes de Donetsk, Luhansk, Kherson e Zaporizhzhia fora do controle do governo. No Reino Unido, a Bybit não aceita novos cadastros e, desde 21 de outubro de 2026, as contas britânicas ficam limitadas a saques.",
  faqs: [
    {
      topic: "referral",
      q: "O código de indicação VN3KGLE da Bybit funciona?",
      a: "Sim. Em 16 de novembro de 2026, o link desta página abriu a página de convite da Bybit com o VN3KGLE já preenchido no campo “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Código de indicação e código de afiliado da Bybit são a mesma coisa?",
      a: "Não. Para a Bybit, são coisas diferentes: um código de afiliado pode ser adicionado em até 14 dias após o cadastro, numa conta principal ainda sem código; já os códigos do programa de indicação, como o VN3KGLE, nunca podem ser adicionados depois do cadastro.",
    },
    {
      topic: "referral",
      q: "O código de indicação da Bybit funciona na União Europeia?",
      a: "Não. Os termos do programa de indicação da Bybit dizem que o programa não está aberto a residentes do EEE indicados dentro do EEE e que não existe programa de indicação na Alemanha, na França e na Bélgica. Quem mora no EEE usa a Bybit EU (bybit.eu), que tem sua própria oferta de indicação.",
    },
    {
      topic: "referral",
      q: "Quais operações contam para as recompensas de indicação da Bybit?",
      a: "Conta o volume de negociação em Spot, derivativos e opções, e a Bybit também cita Alpha, Convert e alguns produtos mais novos. Operações em pares com taxa zero ficam de fora.",
    },
    {
      topic: "signup",
      q: "Posso criar conta na Bybit com Google, Apple ou Telegram?",
      a: "Sim. O cadastro da Bybit oferece Google, Apple e Telegram, além de e-mail ou número de telefone. No app (versão 4.47.0 ou superior), você também pode criar uma chave de acesso (passkey).",
    },
    {
      topic: "signup",
      q: "Dá para usar a Bybit sem KYC?",
      a: "Não para negociar. Sem a verificação de identidade, uma conta na Bybit não pode depositar nem negociar; só pode sacar, até 20.000 USDT por dia e 100.000 USDT por mês.",
    },
    {
      topic: "signup",
      q: "Quais são os níveis de KYC e os limites de saque da Bybit?",
      a: "A verificação Standard (documento de identidade mais avaliação de identidade) permite saques de até 1 milhão de USDT por dia. A verificação Advanced, que acrescenta um comprovante de endereço, eleva o limite para 2 milhões de USDT por dia. Para limites maiores, existe um nível Pro com due diligence reforçada.",
    },
    {
      topic: "bonus",
      q: "De quanto é o bônus de indicação da Bybit para novos usuários?",
      a: "Até 250 USDT para quem é indicado: 50 USDT pela primeira operação de pelo menos US$ 50 em até 14 dias após o cadastro, 100 USDT por US$ 500 de volume acumulado nos 30 dias seguintes a essa operação e 100 USDT por US$ 10.000 no mesmo período. Quem indica recebe os mesmos valores, e por isso a Bybit anuncia até 500 USDT somados.",
    },
    {
      topic: "bonus",
      q: "O que são os Welcome Gifts da Bybit?",
      a: "O Rewards Hub da Bybit lista 100 USDT em Welcome Gifts: um Fee Saver de 20 USDT por concluir a verificação de identidade, um Position Airdrop de 30 USDT por um depósito de pelo menos US$ 10 e um Fee Saver de 50 USDT por uma operação de pelo menos US$ 10 – todos para derivativos. As tarefas variam conforme o usuário e a região.",
    },
    {
      topic: "bonus",
      q: "Preciso resgatar as recompensas de indicação da Bybit?",
      a: "Sim. Cada recompensa passa primeiro por uma análise de risco de 3 dias e depois precisa ser resgatada em até 10 dias; caso contrário, expira. As recompensas saem de um fundo mensal de 500.000 USDT e são pagas por ordem de chegada.",
    },
    {
      topic: "bonus",
      q: "Posso sacar os Welcome Gifts da Bybit?",
      a: "Não. A Bybit informa que as recompensas do Rewards Hub expiram e não podem ser sacadas. Os Fee Savers abatem taxas de negociação, e os Position Airdrops são usados como margem na negociação de derivativos.",
    },
    {
      topic: "fees",
      q: "Quais são as taxas de futuros da Bybit?",
      a: "Usuários VIP 0 pagam 0,02% maker e 0,055% taker em contratos perpétuos e futuros, 0,1% no Spot e 0,02% maker / 0,03% taker em opções. Pagar em MNT reduz as taxas de futuros em 10%, para 0,018% / 0,0495%.",
    },
    {
      topic: "fees",
      q: "Qual é a alavancagem máxima da Bybit?",
      a: "Até 150x no perpétuo BTCUSDT na primeira faixa de risco (posições de até 300.000 USDT); o máximo cai para 100x na faixa seguinte e continua caindo à medida que a posição cresce. Alavancagem alta aumenta muito o risco de liquidação.",
    },
    {
      topic: "fees",
      q: "Qual é o desconto nas taxas da Bybit pagando com MNT?",
      a: "Pagar as taxas em MNT dá 25% de desconto nas taxas de Spot e 10% nas de Futuros. O desconto não vale para contratos inversos, robôs de trading, seguidores no copy trading nem negociação via API.",
    },
    {
      topic: "safety",
      q: "A Bybit foi hackeada?",
      a: "Sim. Em 21 de fevereiro de 2025, cerca de US$ 1,46 bilhão foi levado de uma carteira fria de Ethereum. A Bybit não suspendeu os saques, conseguiu ETH de reposição com empréstimos-ponte, grandes depósitos e compras OTC, e uma auditoria de prova de reservas da Hacken em 24 de fevereiro mostrou o déficit coberto em até 72 horas.",
    },
    {
      topic: "safety",
      q: "A Bybit funciona no Reino Unido?",
      a: "Não. A Bybit não aceita novos cadastros do Reino Unido e, desde 21 de outubro de 2026, contas com residência no Reino Unido ficam limitadas a saques.",
    },
    {
      topic: "safety",
      q: "A Bybit funciona na Europa?",
      a: "Os residentes do EEE são atendidos pela Bybit EU GmbH, em Viena, supervisionada pela Autoridade do Mercado Financeiro da Áustria nos termos do MiCAR e com cobertura do EEE, exceto Malta. É uma plataforma separada, com taxas e linha de produtos próprias.",
    },
  ],
};
