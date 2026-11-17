import type { ExchangeText } from "../../types";

export const bitget: ExchangeText = {
  referral: {
    codeName: "Referral code",
    whereShort: "Campo “Referral code” no formulário de cadastro (opcional)",
    apply:
      "Digite-o no campo “Referral code” do formulário de cadastro ou abra o link de cadastro desta página, que preenche o campo e o bloqueia.",
    whereToEnter:
      "O formulário de cadastro da Bitget tem um campo opcional chamado “Referral code”. No site, ele aparece logo depois do e-mail ou do número de celular, antes de você criar a senha; no app, vem depois da senha, antes de você tocar em “Create account”. O link desta página abre a página de cadastro por indicação da Bitget com o JZVEV1M3 já preenchido e o campo bloqueado.",
    afterSignupShort: "Não – só durante o cadastro (exceções apenas pelo suporte)",
    afterSignup:
      "Não por conta própria. A Central de Ajuda da Bitget informa que os códigos de indicação precisam ser inseridos durante o cadastro e não podem ser adicionados nem alterados depois que a conta é criada. Segundo a mesma resposta da Central de Ajuda, o único caminho é um ticket no suporte com o seu UID, o código e uma prova de que o convite foi enviado antes do seu cadastro – sem garantia de resultado. A Bitget não divulga nenhum prazo para isso.",
    inviteeReward:
      "O programa de indicação público da Bitget recompensa o usuário indicado com airdrops de BTC e Mystery Boxes: um airdrop de BTC no valor de US$ 9 mais uma Mystery Box de até 500 USDT por um depósito líquido de pelo menos 200 USDT em até 15 dias e uma primeira negociação elegível; depois, mais US$ 18 em BTC com uma Mystery Box de até 1.000 USDT quando o seu volume total de negociação passar de 100.000 USDT. Essas recompensas exigem que quem indica esteja inscrito na promoção e não são pagas se qualquer um dos lados tiver conta de afiliado, de market maker ou de broker; por isso, valem os valores exibidos na sua conta depois do cadastro. Independentemente do código, novos usuários recebem o pacote de boas-vindas da Bitget de até 6.200 USDT.",
    guide: [
      "Um código de indicação da Bitget vincula a sua nova conta a quem indicou você. A Bitget conta para o programa quase tudo o que você negocia: Spot (incluindo copy trading e margem), Futuros, stock perps, perpétuos de commodities, ações no Spot e CFDs.",
      "A primeira etapa de recompensas exige um depósito líquido de pelo menos 200 USDT nos 15 dias seguintes ao cadastro e, no dia da sua primeira negociação, pelo menos 1.000 USDT de volume no Spot, 4.000 USDT em Futuros ou 100.000 USDT em CFDs. Uma Mystery Box pode conter USDT, bônus de trading em Futuros, cupons de aumento de posição em Futuros, cupons de APR do Earn ou cupons de reembolso de taxas no Spot, e precisa ser resgatada em até 30 dias depois de creditada.",
      "A Bitget não prevê desconto nas taxas para usuários indicados. O que reduz os seus custos na Bitget é o token BGB: pagar as taxas de Spot ou de margem em BGB dá 20% de desconto.",
    ],
  },
  signup: {
    methods: ["um endereço de e-mail", "um número de celular", "Google", "Telegram", "uma carteira cripto"],
    steps: [
      {
        title: "Abra a página de cadastro da Bitget",
        text: "Use o botão de cadastro desta página. A Bitget abre a página de cadastro por indicação com o código JZVEV1M3 já preenchido e bloqueado.",
      },
      {
        title: "Informe o seu e-mail ou número de celular",
        text: "O guia de cadastro da Bitget também prevê cadastro com Google, Telegram ou uma carteira.",
      },
      {
        title: "Confira o código de indicação e aceite os termos",
        text: "O campo “Referral code” deve mostrar JZVEV1M3. Aceite os termos e clique em “Next”.",
      },
      {
        title: "Crie uma senha",
        text: "De 8 a 32 caracteres.",
      },
      {
        title: "Resolva o captcha e digite o código de 6 dígitos",
        text: "Passe pela verificação de segurança e digite o código de 6 dígitos enviado pela Bitget ao seu e-mail ou celular. O cadastro não exige documentos.",
      },
      {
        title: "Verifique a sua identidade",
        text: "Faça a verificação de Nível 1 com documento de identidade e reconhecimento facial – sem ela, não dá para depositar, negociar nem sacar.",
      },
    ],
    kycShort: "Obrigatória para todos os usuários",
    kyc: "Sim. A Bitget informa que todos os novos usuários precisam concluir a verificação de identidade logo após o cadastro; a regra vale desde 1º de setembro de 2023. Sem ela, você não consegue depositar, negociar nem sacar fundos, incluindo saques on-chain e transferências internas. O Nível 1 consiste em um documento de identidade e reconhecimento facial; o comprovante de endereço só é necessário se a Bitget pedir. Após a verificação, o limite padrão de saque é de 3 milhões de USDT a cada 24 horas.",
    documents: "Identidade oficial, passaporte, carteira de motorista ou autorização de residência, mais reconhecimento facial.",
    minAge: "18 anos",
  },
  welcomeTasks: [
    { task: "Pacote de boas-vindas: faça check-in por três dias", reward: "Cupom de aumento de posição de 200 USDT em Futuros BTC USDT-M" },
    { task: "Desafio: depósito líquido de pelo menos 1.000 USDT, 100 USDT de volume no Spot e 300.000 USDT de volume em Futuros", reward: "50 USDT" },
    { task: "Desafio: depósito líquido de pelo menos 20.000 USDT, 10.000 USDT de volume no Spot e 2.000.000 USDT de volume em Futuros", reward: "400 USDT" },
    { task: "Desafio: depósito líquido de pelo menos 100.000 USDT, 100.000 USDT de volume no Spot e 80.000.000 USDT de volume em Futuros", reward: "6.000 USDT" },
    { task: "Indicação: depósito líquido de pelo menos 200 USDT em até 15 dias e uma primeira negociação elegível", reward: "Airdrop de BTC no valor de US$ 9 e uma Mystery Box (até 500 USDT)" },
    { task: "Indicação: volume total de negociação acima de 100.000 USDT", reward: "US$ 18 em BTC e uma Mystery Box (até 1.000 USDT)" },
  ],
  tokenDiscount:
    "Pagar as taxas de Spot ou de margem em BGB dá 20% de desconto – 0,08% em vez de 0,1% para usuários padrão. A tabela de taxas da Bitget não mostra desconto em BGB para Futuros.",
  extraFeeMarkets: ["Futuros Coin-M", "Futuros USDC-M"],
  sourceLabels: [
    "Bitget: Como se cadastrar (site)",
    "Bitget: Como se cadastrar (app)",
    "Bitget: Programa de indicação e regras",
    "Central de Ajuda da Bitget: incluir código de indicação após o cadastro",
    "Bitget: Recompensas para novos usuários (pacote de boas-vindas)",
    "Bitget: Regras dos bônus de trading",
    "Bitget: Tabela de taxas",
    "Bitget: Como pagar taxas de negociação com BGB",
    "Bitget: Verificação de identidade (KYC)",
    "Bitget: Limites de saque",
    "Bitget: Termos de Uso (países proibidos)",
    "Bitget: Sobre nós",
    "Bitget: Licenças regulatórias",
    "Bitget: Prova de reservas",
    "Bitget: Fundo de Proteção (Protection Fund)",
    "Bitget: Copy trading para seguidores",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margem", "Futuros", "Copy trading", "Stock perps e CFDs"],
  bonusHeadline: "Pacote de boas-vindas de até 6.200 USDT",
  benefits: [
    "Recompensas de até 6.200 USDT para novos usuários, a começar por um cupom de aumento de posição de 200 USDT em Futuros por três dias de check-in",
    "Recompensas do programa de indicação para quem é indicado: airdrops de BTC e Mystery Boxes de até 500 e 1.000 USDT",
    "Uma única indicação vale para Spot, margem, Futuros, copy trading, stock perps e CFDs",
    "20% de desconto nas taxas de Spot e de margem pagas em BGB",
  ],
  benefitNote:
    "Os 6.200 USDT são um teto: 200 USDT vêm como cupom de aumento de posição em Futuros e o restante sai de um desafio de depósito e negociação em que só a faixa mais alta que você atingir é paga – a recompensa máxima exige um depósito líquido de 100.000 USDT e 80 milhões de USDT de volume em Futuros. Os requisitos precisam ser cumpridos em sete dias; nos Futuros só contam ordens taker, e operações de copy trading, via API e com robôs ficam de fora. As recompensas são resgatadas manualmente e os bônus de trading não podem ser sacados em dinheiro. As recompensas de indicação dependem de quem indica estar inscrito na promoção da Bitget e não são pagas a contas de afiliado nem por meio delas.",
  headquarters: "Não informada pela Bitget (operadora indicada nos Termos: BTG Technology Holdings Limited)",
  regulation:
    "Registros ou licenças na Austrália (AUSTRAC), em El Salvador (BSP, DASP), na Argentina (VASP), na África do Sul, no México, nas Ilhas Maurício e na Geórgia",
  users: "150 milhões de usuários cadastrados (segundo a Bitget)",
  assets: "600+ pares no Spot, 200+ pares de Futuros",
  maxLeverage: "Até 150x (Futuros de BTC e ETH)",
  feeNote: "Níveis VIP mais altos pagam menos.",
  products: ["Futuros USDT-M, Coin-M e USDC-M", "Spot", "Margem", "Copy trading", "Robôs de trading", "Ações tokenizadas e CFDs", "Earn", "Bitget Wallet"],
  tagline: "A casa do copy trading de cripto",
  quickAnswer:
    "O código de indicação da Bitget é JZVEV1M3. Digite-o no campo “Referral code” ao criar a sua conta – o botão desta página preenche e bloqueia o campo. Ele precisa ser inserido no cadastro: a Central de Ajuda da Bitget diz que os códigos não podem ser adicionados nem alterados depois, a não ser por um ticket no suporte. Novos usuários podem resgatar um pacote de boas-vindas de até 6.200 USDT, a começar por um cupom de 200 USDT em Futuros por três dias de check-in.",
  about: [
    "Fundada em 2018, a Bitget declara 150 milhões de usuários cadastrados e mais de 20 bilhões de USDT em volume diário de negociação. A corretora ficou conhecida pelo copy trading e se apresenta como a maior plataforma de copy trading de cripto: os seguidores escolhem um trader líder, definem um valor a partir de 50 USDT e a Bitget replica automaticamente as posições desse trader, que fica com uma parte dos lucros do seguidor.",
    "A plataforma lista mais de 600 pares no Spot e mais de 200 pares de Futuros, com alavancagem de até 150x em BTC e ETH e de até 10x na margem. Usuários padrão pagam 0,1% no Spot – 0,08% com BGB – e 0,02% maker / 0,06% taker nos Futuros USDT-M, Coin-M e USDC-M. Robôs de trading, produtos Earn, ações tokenizadas, CFDs e a Bitget Wallet, carteira de autocustódia, completam a oferta.",
    "Todo mês, a Bitget publica uma prova de reservas com árvore de Merkle; o snapshot de 12 de novembro de 2026 mostrou um índice de reservas total de 124%, com 127% em BTC, 114% em USDT e 103% em ETH. O Fundo de Proteção (Protection Fund) é avaliado em US$ 274 milhões e serve para cobrir perdas causadas por eventos que atingem toda a plataforma e não são culpa do usuário. A Bitget informa registros ou licenças na Austrália, em El Salvador, na Argentina, na África do Sul, no México, nas Ilhas Maurício e na Geórgia, e os seus Termos de Uso excluem uma longa lista de países, entre eles os Estados Unidos, o Canadá, a Alemanha, a França e a Áustria.",
  ],
  highlights: [
    { title: "Líder em copy trading", text: "Siga traders líderes a partir de 50 USDT e replique as posições deles automaticamente." },
    { title: "Fundo de Proteção de US$ 274 mi", text: "Um fundo próprio para perdas causadas por eventos que atingem toda a plataforma." },
    { title: "Reservas de 124%", text: "Prova de reservas mensal com árvore de Merkle; último snapshot em 12 de novembro de 2026." },
  ],
  pros: [
    "Copy trading de Futuros e Spot a partir de 50 USDT",
    "Prova de reservas mensal em 124% e um Fundo de Proteção de US$ 274 milhões",
    "Taxas padrão de Futuros de 0,02% maker / 0,06% taker e 20% de desconto nas taxas de Spot com BGB",
    "O link de indicação preenche e bloqueia o código, então não há como digitá-lo errado",
  ],
  cons: [
    "Não dá para adicionar um código de indicação depois do cadastro, a não ser por um ticket no suporte",
    "Indisponível nos Estados Unidos, no Canadá, na Alemanha, na França, na Áustria, no Japão e em Singapura",
    "A maior recompensa de boas-vindas exige depósito e volume de negociação muito altos",
    "O copy trading pode passar uma falsa sensação de segurança – resultados passados não garantem retornos futuros",
  ],
  bestFor: ["Traders que querem copiar traders experientes de Futuros", "Traders de Futuros de altcoins", "Quem também quer exposição a ações por meio de cripto"],
  signupTip:
    "Verifique a sua identidade logo após o cadastro – sem isso, a Bitget não permite depósitos, negociações nem saques – e faça check-in em três dias diferentes para garantir o cupom de aumento de posição de 200 USDT em Futuros.",
  safety:
    "A Bitget publica mensalmente uma prova de reservas com árvore de Merkle – 124% no total no snapshot de 12 de novembro de 2026 – e mantém um Fundo de Proteção avaliado em US$ 274 milhões; os pedidos de cobertura são analisados pela própria Bitget. Ative a autenticação de dois fatores ao se cadastrar. Os resultados do copy trading são desempenho passado e não garantem retornos futuros.",
  restricted:
    "Os Termos de Uso da Bitget (última atualização em 4 de novembro de 2026) listam como países proibidos, entre outros: Áustria, Bielorrússia, Canadá, Cuba, França, Alemanha, Hong Kong, Irã, Japão, Cazaquistão, Malásia, Coreia do Norte, Rússia, Singapura, Sudão, Tailândia, Emirados Árabes Unidos e Estados Unidos, incluindo os seus territórios. A página de verificação da Bitget cita ainda a Índia, a Itália e a Espanha. É proibido usar VPN para contornar a restrição.",
  faqs: [
    {
      topic: "referral",
      q: "O código de indicação JZVEV1M3 da Bitget funciona?",
      a: "Sim. Em 16 de novembro de 2026, o link desta página abriu a página de cadastro por indicação da Bitget com o JZVEV1M3 já preenchido e bloqueado no campo do código de indicação.",
    },
    {
      topic: "referral",
      q: "Por que o link de cadastro da Bitget abre em outro domínio ou idioma?",
      a: "Os links de compartilhamento da Bitget redirecionam por vários domínios da própria corretora – na nossa checagem, o mesmo link abriu uma vez em bitget.com e outra em bitget.site – e podem abrir no idioma em que o link foi criado. O código de indicação JZVEV1M3 veio preenchido todas as vezes.",
    },
    {
      topic: "referral",
      q: "Quais operações contam no programa de indicação da Bitget?",
      a: "Negociação no Spot (incluindo copy trading e margem), negociação de Futuros, stock perps, perpétuos de commodities, ações no Spot e CFDs.",
    },
    {
      topic: "referral",
      q: "O que é a Mystery Box da Bitget?",
      a: "Uma recompensa do programa de indicação da Bitget. Ela pode conter USDT, bônus de trading em Futuros, cupons de aumento de posição em Futuros, cupons de APR do Earn ou cupons de reembolso de taxas no Spot, e precisa ser resgatada em até 30 dias depois de creditada.",
    },
    {
      topic: "signup",
      q: "Preciso de documentos para me cadastrar na Bitget?",
      a: "Para criar a conta, não – o guia da Bitget diz que nenhum documento é necessário no cadastro. Já a verificação de identidade que vem em seguida pede um documento de identidade e reconhecimento facial, e sem ela você não consegue depositar, negociar nem sacar.",
    },
    {
      topic: "signup",
      q: "Quais são os requisitos de senha da Bitget?",
      a: "A senha da Bitget precisa ter entre 8 e 32 caracteres.",
    },
    {
      topic: "signup",
      q: "Posso me cadastrar na Bitget com Google ou Telegram?",
      a: "Sim. O guia de cadastro da Bitget diz que você também pode se cadastrar diretamente com Google, Telegram ou uma carteira, além de e-mail ou número de celular.",
    },
    {
      topic: "signup",
      q: "Dá para usar a Bitget sem KYC?",
      a: "Não. Desde 1º de setembro de 2023, todos os novos usuários precisam concluir a verificação de identidade logo após o cadastro; sem ela, a Bitget não permite depósitos, negociações nem saques.",
    },
    {
      topic: "bonus",
      q: "Qual é o bônus de boas-vindas da Bitget?",
      a: "A Bitget anuncia até 6.200 USDT em recompensas para novos usuários. O valor se divide em um cupom de aumento de posição de 200 USDT em Futuros BTC USDT-M por três dias de check-in e um desafio de depósito e negociação de 50, 400 ou 6.000 USDT, do qual só é paga a faixa mais alta que você atingir.",
    },
    {
      topic: "bonus",
      q: "O que preciso fazer para ganhar a recompensa de 6.000 USDT da Bitget?",
      a: "Em sete dias: depósito líquido de pelo menos 100.000 USDT, 100.000 USDT de volume no Spot e 80.000.000 USDT de volume em Futuros. A faixa de 50 USDT exige 1.000 USDT depositados, 100 USDT de volume no Spot e 300.000 USDT de volume em Futuros. Nos Futuros só contam ordens taker, e operações de copy trading, via API e com robôs ficam de fora.",
    },
    {
      topic: "bonus",
      q: "Posso sacar os bônus de trading da Bitget?",
      a: "Não. A Bitget afirma que os bônus de trading não podem ser sacados nem convertidos em dinheiro. Além disso, sacar fundos nos três dias seguintes ao período do desafio faz você perder a recompensa do desafio.",
    },
    {
      topic: "fees",
      q: "Quais são as taxas de Futuros da Bitget?",
      a: "Usuários padrão pagam 0,02% maker e 0,06% taker nos Futuros USDT-M, Coin-M e USDC-M.",
    },
    {
      topic: "fees",
      q: "Quanto é o desconto nas taxas com BGB na Bitget?",
      a: "20% nas taxas de Spot e de margem, o que reduz a taxa padrão do Spot de 0,1% para 0,08%. A tabela de taxas da Bitget não mostra desconto em BGB para Futuros.",
    },
    {
      topic: "fees",
      q: "Qual é a alavancagem máxima da Bitget?",
      a: "Até 150x nos Futuros de BTC e ETH; o máximo varia de moeda para moeda. Na margem, a alavancagem vai até 10x. Alavancagem alta aumenta muito o risco de liquidação.",
    },
    {
      topic: "fees",
      q: "Como funciona o copy trading da Bitget e quanto custa?",
      a: "Você escolhe um trader líder, define o seu valor – o mínimo é 50 USDT – e a Bitget replica as posições do trader na sua conta. O trader líder fica com uma parte dos seus lucros; as próprias páginas de ajuda da Bitget trazem faixas diferentes para essa parte, então confira o percentual exibido no perfil do trader antes de segui-lo.",
    },
    {
      topic: "safety",
      q: "O que é o Fundo de Proteção da Bitget?",
      a: "Um fundo da Bitget para cobrir perdas dos usuários em eventos que atingem toda a plataforma e não são causados pelo próprio usuário. A Bitget o avalia em US$ 274 milhões, mantidos em 4.204,71 BTC, e é ela quem analisa os pedidos.",
    },
    {
      topic: "safety",
      q: "A Bitget está disponível nos EUA ou na Alemanha?",
      a: "Não. Os Estados Unidos, a Alemanha, a França, a Áustria, o Canadá, o Japão e Singapura estão todos na lista de países proibidos dos Termos de Uso da Bitget.",
    },
    {
      topic: "safety",
      q: "A Bitget publica prova de reservas?",
      a: "Sim, todo mês, como prova com árvore de Merkle. O snapshot de 12 de novembro de 2026 mostrou um índice de reservas total de 124%: 127% em BTC, 114% em USDT e 103% em ETH.",
    },
  ],
};
