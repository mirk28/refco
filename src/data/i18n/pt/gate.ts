import type { ExchangeText } from "../../types";

export const gate: ExchangeText = {
  referral: {
    codeName: "código de indicação",
    whereShort: "Vem no link de cadastro – a Gate mostra quem indicou no formulário de registro",
    apply:
      "Abra o link de cadastro desta página: a Gate vincula o código ao seu registro e exibe no formulário um banner com quem indicou e a recompensa.",
    whereToEnter:
      "Na Gate, o caminho mais seguro é o link de indicação. O link desta página abre gate.com/signup já com o código VAAXAW9YVA, e a Gate confirma isso com um banner acima do formulário (“Register now to receive a gift from your friend”). A primeira etapa do formulário web pede apenas o seu país de residência, então ali não existe um campo separado para digitar o código – se o banner de quem indicou não aparecer, abra o link de novo antes de criar a conta.",
    afterSignupShort: "Não documentado pela Gate – use o link ao se cadastrar",
    afterSignup:
      "A Gate não divulga nenhuma forma de adicionar um código de indicação a uma conta já existente na corretora. As regras do programa de indicação dizem que cada usuário só pode se cadastrar por um único método de indicação, e o próprio guia da Gate alerta que o vínculo de indicação pode não ser registrado se um novo usuário se cadastrar sem o link ou o código de convite. Use o link antes de criar a conta.",
    inviteeReward:
      "Ao se cadastrar por este link, você entra no programa Super Commission da Gate: a página de cadastro informa que você recebe uma recompensa de comissão de 10% sobre as suas taxas de negociação. Pelas regras do programa, o reembolso é calculado sobre as suas taxas de negociação durante 1 ano e não vale para transações em moeda fiduciária.",
    guide: [
      "A Gate mantém vários programas de indicação ao mesmo tempo. O código VAAXAW9YVA faz parte do Super Commission, em que quem indica divide parte da comissão com as pessoas que convida: na divisão mostrada pela Gate, 30% vão para o indicador e 10% para o amigo convidado, calculados sobre as taxas de negociação do amigo durante um ano. Transações em fiat ficam de fora.",
      "Um único cadastro vale para Spot, Margem, Futuros e Trenches (a seção que a Gate também chama de Gate Alpha). As outras campanhas de indicação da Gate funcionam com vouchers – “Earn Voucher” e “Token Crew” –, mas as regras do Super Commission determinam que contas convidadas dessa forma não podem receber recompensas de outros eventos, então não conte com a combinação das ofertas.",
      "A Gate não aceita convites entre sites diferentes. Se você mora no EEE, quem atende você é uma entidade separada da Gate em Malta (gate.com/en-eu), onde a comissão só é paga sobre negociações no Spot (mercado à vista), e uma indicação feita no site global não é levada para lá. O Super Commission também não está disponível para usuários da Bélgica, do Reino Unido, da França, da Alemanha, da Holanda, da Turquia, da Áustria e da Coreia do Sul.",
    ],
  },
  signup: {
    methods: ["um endereço de e-mail", "um número de telefone", "Google", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Abra a página de cadastro da Gate",
        text: "Use o botão de cadastro desta página. Acima do formulário, a Gate mostra um banner com quem indicou e a recompensa de 10% nas taxas – essa é a sua confirmação de que a indicação foi vinculada.",
      },
      {
        title: "Selecione seu país ou região de residência",
        text: "Escolha onde você mora, aceite o Contrato do Usuário e clique em “Create Account”.",
      },
      {
        title: "Informe seu e-mail ou número de telefone",
        text: "Escolha um dos dois; a Gate usa esse dado no login e nos códigos de segurança.",
      },
      {
        title: "Digite o código de verificação",
        text: "A Gate envia um código para o seu e-mail ou telefone. Segundo o guia do app da Gate, ele vale por 15 minutos.",
      },
      {
        title: "Crie sua senha",
        text: "Escolha uma senha forte e exclusiva para concluir a criação da conta.",
      },
      {
        title: "Verifique sua identidade",
        text: "Faça o KYC com passaporte, documento de identidade ou carteira de motorista. A Gate exige essa etapa antes de você depositar ou sacar cripto.",
      },
    ],
    kycShort: "Obrigatória para depositar e sacar",
    kyc: "Sim. A Gate informa que a verificação de identidade (KYC) é obrigatória para todos os usuários que queiram depositar e sacar criptomoedas, negociar moedas fiduciárias e participar das subscrições do Startup. A verificação de endereço é opcional e aumenta seus limites de saque. A tarefa de verificação de identidade também faz parte das recompensas para iniciantes da Gate.",
    documents:
      "Na verificação de identidade, a Gate aceita passaporte, documento de identidade ou carteira de motorista. Para limites maiores, você pode enviar também um comprovante de endereço.",
    minAge: "18 anos (Contrato do Usuário da Gate)",
  },
  welcomeTasks: [
    { task: "Cadastro", reward: "Voucher no valor de 50 USDT" },
    { task: "Concluir a verificação de identidade", reward: "Voucher no valor de 50 USDT" },
    { task: "Primeiro depósito de pelo menos 10 USDT", reward: "Voucher no valor de 10 USDT" },
    { task: "Primeira negociação de pelo menos 10 USDT", reward: "Voucher no valor de 5 USDT" },
    { task: "Primeiro download do app", reward: "Voucher no valor de 10 USDT" },
    {
      task: "Tarefa avançada, primeira etapa: depósito líquido de pelo menos 50 USDT e volume de negociação de 500 USDT",
      reward: "100 USDT (as tarefas avançadas chegam a 10.000 USDT)",
    },
  ],
  tokenDiscount: "Pagar as taxas de Spot em GT reduz a taxa padrão de 0,1% para 0,09%, tanto para makers quanto para takers.",
  extraFeeMarkets: ["Futuros de entrega em USDT"],
  sourceLabels: [
    "Gate: Programa de indicação Super Commission e regras",
    "Gate: Campanha de indicação Earn Voucher",
    "Gate: Campanha de indicação Token Crew",
    "Gate Learn: Guia do programa de indicação da Gate",
    "Gate: Rewards Hub (tarefas para iniciantes)",
    "Gate: Regras das tarefas para iniciantes",
    "Gate: Tabela de taxas",
    "Gate: Níveis de margem e alavancagem do perpétuo BTCUSDT",
    "Gate: Limite de alavancagem para novas contas de Futuros",
    "Gate: Como se cadastrar pelo site",
    "Gate: Como se cadastrar pelo app",
    "Gate: Exigência de KYC",
    "Gate: Como concluir a verificação de identidade",
    "Gate: Contrato do Usuário (locais restritos, idade mínima)",
    "Gate: Sobre nós",
    "Gate: Licenças",
    "Gate: Prova de reservas",
    "Gate: Mudança para o domínio gate.com (comunicado)",
  ],
  feeDiscount: "10% das suas taxas de negociação de volta por 1 ano",
  referralCovers: ["Spot", "Margem", "Futuros", "Trenches (Gate Alpha)"],
  bonusHeadline: "10% de reembolso nas taxas e 125 USDT em tarefas para iniciantes",
  benefits: [
    "O Rewards Hub da Gate lista 125 USDT em vouchers para tarefas de iniciante (cadastro, verificação, primeiro depósito, primeira operação, download do app)",
    "Uma única indicação vale para Spot, Margem, Futuros e Trenches durante um ano",
    "Taxas de Spot de 0,1%, ou 0,09% se você pagar em GT",
    "Negocie mais de 5.400 ativos digitais com uma só conta",
  ],
  benefitNote:
    "O reembolso de 10% é a recompensa que a Gate exibe na página de cadastro aberta por este link; ele não vale para transações em fiat e não está disponível para usuários da Bélgica, do Reino Unido, da França, da Alemanha, da Holanda, da Turquia, da Áustria e da Coreia do Sul. As tarefas para iniciantes precisam ser concluídas em até 15 dias após o cadastro, podem variar conforme a região e excluem contas institucionais, de API e de afiliados. Pelas regras da Gate, contas convidadas pelo compartilhamento de comissão não podem receber recompensas de outros eventos – o Rewards Hub da sua conta mostra o que você realmente pode resgatar.",
  headquarters: "Gate Group, com entidades licenciadas em várias regiões",
  regulation:
    "Licenças ou registros em Malta (MFSA, MiCA), Gibraltar, Bahamas, Hong Kong, Dubai (VARA, DMCC), Austrália (AUSTRAC), Japão e Chipre",
  users: "63M+ usuários (segundo a Gate)",
  assets: "5.400+ ativos digitais",
  maxLeverage: "Até 200x (perpétuo BTCUSDT)",
  feeNote:
    "Quanto maior o nível VIP, menores as taxas. Se você ativar o Points Deduction em vez do GT, a Gate aplica taxas fixas de 0,2% no Spot e uma taxa taker de 0,075% nos Futuros.",
  products: ["Futuros perpétuos", "Futuros de entrega", "Opções", "Spot", "Margem", "Copy trading", "Launchpad", "Earn"],
  tagline: "A maior variedade de altcoins, desde 2013",
  quickAnswer:
    "O código de indicação da Gate é VAAXAW9YVA. Abra o link de cadastro desta página e a Gate aplica o código automaticamente – o formulário de registro passa a mostrar um banner que promete uma recompensa de comissão de 10% sobre as suas taxas de negociação. O reembolso dura um ano e vale para Spot, Margem, Futuros e Trenches. A Gate não documenta nenhuma forma de adicionar o código depois, então use o link antes de criar a conta.",
  about: [
    "A Gate foi fundada em 2013 – começou como Bter.com, virou Gate.io e passou a usar o domínio internacional gate.com em maio de 2025. Sua marca registrada é a variedade: a Gate diz listar mais de 5.400 ativos digitais e atender mais de 63 milhões de usuários, e tokens novos costumam aparecer por lá muito antes de outras grandes exchanges os listarem.",
    "Em derivativos, a Gate tinha o segundo maior open interest (contratos em aberto) do ranking da CoinMarketCap na data dos nossos dados de mercado, oferecendo contratos perpétuos com margem em USDT para centenas de altcoins, além de futuros de entrega e opções. A alavancagem no perpétuo BTCUSDT chega a 200x no nível de risco mais baixo, enquanto contas novas de Futuros começam com limite de 20x nos três primeiros dias. Copy trading, um launchpad para novos tokens e os produtos Earn ficam ao lado das telas de negociação.",
    "A Gate publica prova de reservas desde maio de 2020. O relatório de 18 de outubro de 2026 mostrou reservas totais de US$ 8,68 bilhões em 496 ativos e um índice de reservas de 118%. O grupo informa licenças e registros em Malta (MFSA, sob o MiCA), em Gibraltar, nas Bahamas, em Hong Kong, em Dubai, na Austrália, no Japão e no Chipre. O site global gate.com é fechado para residentes dos Estados Unidos e de uma longa lista de outros países; quem mora no EEE é atendido pela entidade maltesa da Gate.",
  ],
  highlights: [
    { title: "5.400+ ativos", text: "Um dos maiores catálogos de altcoins entre todas as corretoras." },
    { title: "10% das taxas de volta", text: "Exibido pela Gate na página de cadastro aberta por este link." },
    { title: "Reservas em 118%", text: "Prova de reservas desde 2020, último relatório em 18 de outubro de 2026." },
  ],
  pros: [
    "Futuros de muitas altcoins que você não acha em outro lugar",
    "Taxa padrão de Spot de 0,1%, 0,09% com GT, e 0,02% / 0,05% nos perpétuos em USDT",
    "Prova de reservas desde 2020, com índice de reservas de 118%",
    "Longo histórico desde 2013 e uma lista crescente de licenças regionais",
  ],
  cons: [
    "O site global é fechado para muitos países, entre eles EUA, Reino Unido, Canadá, Alemanha, França, Espanha e Holanda",
    "Nenhuma forma documentada de adicionar o código após o cadastro",
    "As indicações não passam de um site regional da Gate para outro",
    "Tokens menores têm alta volatilidade e risco de liquidez",
  ],
  bestFor: ["Traders de futuros de altcoins", "Caçadores de listagens antecipadas", "Traders que preferem variedade a simplicidade"],
  signupTip:
    "Conclua as tarefas para iniciantes em até 15 dias após o cadastro – depois disso os vouchers de iniciante expiram – e considere pagar as taxas de Spot em GT para reduzi-las a 0,09%.",
  safety:
    "A Gate publica prova de reservas com índice acima de 100% – 118% no relatório de 18 de outubro de 2026 – e sua central de ajuda documenta autenticação de dois fatores, código antiphishing, whitelist de saques e senha de fundos. Ative tudo isso antes de depositar. Com altcoins de baixa capitalização, sempre confira a liquidez antes de abrir posições alavancadas.",
  restricted:
    "O Contrato do Usuário da Gate (atualizado pela última vez em 22 de julho de 2026) lista os locais restritos do site global, entre eles Estados Unidos, China continental, Singapura, Canadá, França, Alemanha, Hong Kong, Malásia, Malta, Espanha, Holanda, Reino Unido, Áustria, Índia, Indonésia, Japão, Argentina, Emirados Árabes Unidos, Tailândia, Coreia do Sul, Filipinas, Paquistão, Vietnã, Rússia e Belarus, além de regiões sob sanções. Alguns desses países são atendidos por entidades separadas da Gate, com sites e regras próprios.",
  faqs: [
    {
      topic: "referral",
      q: "O código de indicação VAAXAW9YVA da Gate funciona?",
      a: "Sim. Em 16 de novembro de 2026, o link gate.com/signup/VAAXAW9YVA abriu a página de registro oficial da Gate com o código já aplicado e um banner do indicador com o texto “Sign up and trade to receive 10% commission reward on trading fees!”.",
    },
    {
      topic: "referral",
      q: "Quanto tempo dura o reembolso de indicação da Gate?",
      a: "Um ano. Pelas regras do Super Commission da Gate, o reembolso se baseia nas suas taxas de negociação durante 1 ano e exclui transações em fiat.",
    },
    {
      topic: "referral",
      q: "Gate.io e Gate são a mesma corretora? O código ainda funciona?",
      a: "Sim. A Gate.io passou a usar o domínio internacional gate.com em maio de 2025; é a mesma corretora, fundada em 2013. O código VAAXAW9YVA é usado no gate.com.",
    },
    {
      topic: "referral",
      q: "O código de indicação da Gate funciona na UE?",
      a: "Não da mesma forma. Residentes do EEE são atendidos por um site separado da Gate (gate.com/en-eu, operado a partir de Malta), onde a comissão vale só para negociações no Spot, e a Gate informa que convites entre sites não são aceitos. O Super Commission também não está disponível para usuários da Bélgica, da França, da Alemanha, da Holanda e da Áustria.",
    },
    {
      topic: "referral",
      q: "Posso acumular o reembolso de indicação da Gate com os vouchers de indicação?",
      a: "Não conte com isso. As regras do Super Commission da Gate determinam que contas convidadas dessa forma não podem receber recompensas de outros eventos, o que inclui as campanhas de vouchers “Earn Voucher” e “Token Crew”.",
    },
    {
      topic: "signup",
      q: "Por que o cadastro da Gate pede o meu país primeiro?",
      a: "O registro na Gate começa pelo seu país ou região de residência porque os produtos, as recompensas e até a entidade da Gate que vai atender você dependem disso. Só depois você informa o e-mail ou o número de telefone.",
    },
    {
      topic: "signup",
      q: "Quanto tempo vale o código de verificação da Gate?",
      a: "Segundo o guia de cadastro pelo app da Gate, o código de verificação enviado para o seu e-mail ou telefone vale por 15 minutos.",
    },
    {
      topic: "signup",
      q: "Posso usar a Gate sem KYC?",
      a: "Só de forma limitada. A Gate informa que o KYC é obrigatório para todos os usuários que queiram depositar e sacar criptomoedas, negociar moedas fiduciárias e participar das subscrições do Startup.",
    },
    {
      topic: "bonus",
      q: "Qual é o bônus de boas-vindas da Gate para novos usuários?",
      a: "O Rewards Hub da Gate lista tarefas para iniciantes que somam 125 USDT em vouchers: 50 pelo cadastro, 50 pela verificação de identidade, 10 pelo primeiro depósito de pelo menos 10 USDT, 5 pela primeira negociação de pelo menos 10 USDT e 10 pelo primeiro download do app. As tarefas avançadas chegam a 10.000 USDT. A própria página de cadastro anuncia até 135 USDT, então o que vale são os valores exibidos na sua conta.",
    },
    {
      topic: "bonus",
      q: "Qual o prazo das tarefas para iniciantes da Gate?",
      a: "As tarefas para iniciantes precisam ser concluídas em até 15 dias após o cadastro. Negociações com stablecoins não contam para as tarefas de trading, e contas institucionais, de API e de afiliados ficam de fora.",
    },
    {
      topic: "fees",
      q: "Quais são as taxas de Spot da Gate?",
      a: "A taxa padrão de Spot (VIP 0) é de 0,1% para makers e takers, ou 0,09% se você pagar as taxas em GT. Se, em vez disso, você ativar o Points Deduction, a Gate aplica uma taxa fixa de 0,2%.",
    },
    {
      topic: "fees",
      q: "Quais são as taxas de Futuros da Gate?",
      a: "Os futuros perpétuos em USDT custam 0,02% maker e 0,05% taker no nível padrão. Os futuros de entrega em USDT aparecem com -0,015% maker (ou seja, um reembolso) e 0,016% taker.",
    },
    {
      topic: "fees",
      q: "Qual é a alavancagem máxima da Gate?",
      a: "Até 200x no perpétuo BTCUSDT, no nível de risco mais baixo (margem cruzada, posições até o primeiro limite de risco). Contas novas de Futuros ficam limitadas a 20x nos três primeiros dias. Uma alavancagem tão alta pode liquidar uma posição com uma variação de preço muito pequena.",
    },
    {
      topic: "safety",
      q: "A Gate está disponível nos EUA?",
      a: "Não. Os Estados Unidos estão na lista de locais restritos do Contrato do Usuário da Gate.",
    },
    {
      topic: "safety",
      q: "A Gate publica prova de reservas?",
      a: "Sim, desde maio de 2020. O relatório de 18 de outubro de 2026 mostrou reservas totais de US$ 8,68 bilhões em 496 ativos e um índice de reservas de 118%.",
    },
    {
      topic: "safety",
      q: "Onde a Gate tem licença?",
      a: "A Gate informa licenças ou registros em Hong Kong, em Gibraltar, em Malta (MFSA, sob o MiCA), na Austrália (AUSTRAC), em Dubai (VARA e DMCC), nas Bahamas, no Japão e no Chipre.",
    },
  ],
};
