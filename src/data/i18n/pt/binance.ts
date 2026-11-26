import type { ExchangeText } from "../../types";

export const binance: ExchangeText = {
  referral: {
    codeName: "Referral ID",
    whereShort: "Campo “Referral ID (Optional)” na última etapa do cadastro",
    apply:
      "Digite-o no campo “Referral ID (Optional)” na última etapa do cadastro ou abra o link de cadastro desta página, que já preenche o código para você.",
    whereToEnter:
      "A Binance pede o código de indicação na última etapa do cadastro – depois que você confirma seu e-mail ou número de telefone e cria uma senha –, tanto no site quanto no app. Se você chegar por um link de indicação, a Binance preenche o código sozinha e mostra ao lado dele um ícone verde de confirmação com “Linked”. Caso contrário, digite REFCO888 no campo “Referral ID (Optional)”. A etapa é opcional e pode ser pulada.",
    afterSignupShort: "Sim – em até 30 dias, antes de qualquer depósito ou operação",
    afterSignup:
      "Sim, com condições. A Binance permite vincular depois um código de indicação que ficou faltando, pela página de vínculo de indicação (binance.com/en/activity/referral/bind-ref), se a sua conta tiver menos de 30 dias, não tiver nenhum depósito nem atividade de negociação, ainda não tiver indicação e for uma conta principal, se a sua verificação de identidade não tiver sido usada em outra conta nos últimos 180 dias e se a conta não estiver sinalizada por wash trading. Depois que a indicação é vinculada, a Binance afirma que ela não pode ser alterada nem removida.",
    inviteeReward:
      "REFCO888 é um código do Binance Referral Pro. No modo Pro, o usuário indicado recebe de volta parte das próprias taxas de negociação, em USDC, se quem indicou optou por compartilhar a comissão – a Binance mostra no cadastro a porcentagem aplicável. À parte do código, a Binance dá a todo novo usuário verificado tarefas para iniciantes que valem até 100 USD em vouchers de reembolso de taxas de negociação.",
    guide: [
      "A Binance trabalha com dois modos de indicação, e cada novo usuário só pode estar em um deles. Links no formato binance.com/register?ref=… – como o desta página – pertencem ao Referral Pro: quem indica ganha uma comissão sobre as suas taxas de negociação e pode devolver parte dela a você como reembolso em USDC. O outro modo, o Referral Lite, funciona com vouchers de reembolso de taxas de negociação para primeiras compras e operações de valor baixo; a Binance não emite esses vouchers com um código Pro.",
      "Uma única indicação Pro vale para Spot, Margem e Futuros. Quando você abre mais tarde uma conta de Futuros, a Binance mostra um segundo campo, opcional: “Futures Referral ID”. Ele só aceita um código do mesmo indicador que convidou a sua conta principal, então não dá para combinar dois indicadores diferentes.",
      "O país onde você mora importa. Desde 1º de julho de 2026, usuários cadastrados em países do EEE (Espaço Econômico Europeu) não podem mais participar de forma alguma do programa de indicação da Binance, e os termos de indicação também listam restrições para o Reino Unido, Singapura, o Japão, a Turquia, Hong Kong e Israel. Ainda dá para abrir uma conta nos países atendidos pela Binance, mas aí a indicação não tem efeito.",
    ],
  },
  signup: {
    methods: ["um endereço de e-mail", "um número de telefone", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Abra a página de cadastro da Binance",
        text: "Use o botão de cadastro desta página. Ele abre accounts.binance.com com a indicação já vinculada – a Binance exibe o código REFCO888 ao lado do formulário.",
      },
      {
        title: "Informe seu e-mail ou número de telefone",
        text: "Ou continue com Google, Apple ou Telegram. Aceite os Termos de Uso e o Aviso de Privacidade para avançar.",
      },
      {
        title: "Confirme o código de 6 dígitos",
        text: "A Binance envia um código de verificação de 6 dígitos para o seu e-mail ou telefone. Ele vale por 30 minutos.",
      },
      {
        title: "Crie uma senha",
        text: "No mínimo 8 caracteres, com pelo menos uma letra maiúscula e um número.",
      },
      {
        title: "Confira o código de indicação",
        text: "Na última etapa, o Referral ID já deve aparecer preenchido, com um ícone verde de confirmação e “Linked”. Se o campo estiver vazio, digite REFCO888 – ou pule a etapa se não quiser usar uma indicação.",
      },
      {
        title: "Verifique sua identidade",
        text: "Em seguida, a Binance leva você à verificação de identidade. Todo novo usuário precisa concluí-la antes de depositar ou negociar.",
      },
    ],
    kycShort: "Obrigatória para todos os produtos",
    kyc: "Sim. A Binance exige que todo novo usuário conclua a verificação de identidade (status “Verified”) antes de usar qualquer produto – inclusive depósitos e operações com cripto. Você escolhe um documento, faz o upload e passa por uma prova de vida; segundo a Binance, a análise costuma ficar pronta em até 48 horas. Contas antigas que nunca foram verificadas só podem fazer saques.",
    documents:
      "A maioria dos usuários pode se verificar com passaporte, carteira de identidade ou de motorista e, depois, uma prova de vida (facial).",
    minAge: "18 anos (Termos de Uso da Binance)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Pagar as taxas em BNB dá 25% de desconto no Spot (0,075% em vez de 0,10%) e 10% nos Futuros USDⓈ-M (0,018% maker / 0,045% taker em vez de 0,02% / 0,05%).",
  extraFeeMarkets: ["Futuros COIN-M"],
  sourceLabels: [
    "Binance: Como se cadastrar pelo site (etapa do código de indicação)",
    "Binance: Como se cadastrar pelo app",
    "Binance: Vincular um código de indicação depois do cadastro",
    "Binance: Modos Referral Pro e Referral Lite",
    "Binance: Termos do programa de indicação e restrições regionais",
    "Binance: Recompensas de boas-vindas para novos usuários (vouchers de reembolso de taxas)",
    "Binance: Taxas de negociação no Spot",
    "Binance: Taxas dos Futuros USDⓈ-M",
    "Binance: Taxas dos Futuros COIN-M",
    "Binance: Alavancagem e margem dos Futuros USDⓈ-M",
    "Binance: Limites de alavancagem para novas contas de Futuros",
    "Binance: Verificação de identidade",
    "Binance: Termos de Uso",
    "Binance: Lista de países proibidos",
    "Binance: Licenças e registros",
    "Binance: Prova de reservas",
    "Binance: Fundo SAFU",
    "Binance: Sobre a empresa",
  ],
  guides: {
    heading: "Guias no Binance Square",
    intro:
      "No Binance Square, a plataforma de conteúdo da própria Binance, há um guia mais completo com checklist para se cadastrar com um código de indicação Binance e um FAQ em vídeo curto sobre o mesmo tema. O Binance Square mostra os dois em português:",
    linkLabel: "Perguntas frequentes sobre o código de indicação da Binance",
    videoLinkLabel: "Código de indicação Binance: FAQ em vídeo",
  },
  feeDiscount: "",
  referralCovers: ["Spot", "Margem", "Futuros"],
  bonusHeadline: "Até 100 USD em vouchers de reembolso de taxas",
  benefits: [
    "Tarefas para iniciantes que valem até 100 USD em vouchers de reembolso de taxas assim que sua conta for verificada",
    "Uma indicação vale para Spot, Margem e Futuros – sem segundo código",
    "25% de desconto no Spot e 10% nos Futuros USDⓈ-M pagando as taxas em BNB",
    "O código ainda pode ser vinculado até 30 dias após o cadastro, se você não tiver feito depósitos nem operações",
  ],
  benefitNote:
    "Os vouchers de boas-vindas fazem parte da oferta geral da Binance para novos usuários e não são uma recompensa do código de indicação. Eles são liberados após a verificação de identidade, reembolsam taxas de negociação no Spot, não cobrem operações feitas via API e só podem ser usados no app da Binance. A Binance exclui dessa oferta uma longa lista de países, entre eles o Reino Unido, os Estados Unidos, o Canadá, a Holanda, a Noruega, a Sérvia, o Japão, Singapura e Hong Kong.",
  headquarters: "Opera por meio de entidades licenciadas pelo ADGM em Abu Dhabi",
  regulation:
    "Regulada pela FSRA do ADGM (Abu Dhabi); outras licenças e registros, incluindo Dubai (VARA), Bahrein, Cazaquistão, Austrália e Japão",
  users: "320M+ usuários cadastrados (segundo a Binance)",
  assets: "600+ criptomoedas",
  maxLeverage: "Até 150x (contratos perpétuos BTCUSDT e ETHUSDT)",
  feeNote: "Níveis VIP mais altos reduzem ainda mais as taxas.",
  products: ["Spot", "Margem", "Futuros USDⓈ-M e COIN-M", "Opções", "Copy trading", "Robôs de trading", "Earn e Launchpool"],
  tagline: "A maior liquidez em derivativos de cripto",
  quickAnswer:
    "O código de indicação da Binance é REFCO888. A Binance pede o código na última etapa do cadastro; pelo botão desta página, ele é preenchido automaticamente. Um único código vale para Spot, Margem e Futuros. Se você esqueceu de usá-lo, a Binance permite vincular um código em até 30 dias após o cadastro, desde que você não tenha feito depósitos nem operações. Novos usuários verificados também podem ganhar até 100 USD em vouchers de reembolso de taxas de negociação.",
  about: [
    "A Binance foi lançada em julho de 2017 e, segundo a própria empresa, tornou-se a maior exchange de criptomoedas do mundo em 180 dias. Hoje ela informa ter mais de 320 milhões de usuários cadastrados em mais de 180 países e lista mais de 600 criptomoedas. Em derivativos, é com folga a número um: na data dos nossos dados de mercado, tinha mais open interest (contratos em aberto) do que as três corretoras seguintes do ranking de derivativos da CoinMarketCap somadas. Para traders, isso faz diferença, porque livros de ofertas profundos significam spreads menores e menos slippage em ordens grandes.",
    "Com um único login, você acessa a negociação Spot (mercado à vista) e com margem, Futuros com margem em USDⓈ e com margem em moeda, opções, robôs de trading e copy trading, além de Earn e Launchpool. A alavancagem nos Futuros USDⓈ-M chega a 150x nos contratos perpétuos BTCUSDT e ETHUSDT para posições de até 300.000 USDT; os contratos com margem em moeda vão até 125x. Contas de Futuros novas não podem usar mais de 20x nos primeiros 30 dias.",
    "A Binance.com é regulada pela Financial Services Regulatory Authority do Abu Dhabi Global Market (ADGM) por meio de três entidades licenciadas. A Binance também informa licenças e registros em Dubai (VARA), Bahrein, Cazaquistão, Austrália (AUSTRAC), Índia, Indonésia, Japão, Nova Zelândia, Tailândia, México, El Salvador, Argentina, Brasil e África do Sul. Sua prova de reservas combina uma árvore de Merkle com zk-SNARKs para que cada usuário possa conferir se o próprio saldo está incluído, e seu fundo de emergência SAFU, criado em 2018, tinha cerca de US$ 1 bilhão em fevereiro de 2026.",
  ],
  highlights: [
    { title: "Nº 1 em liquidez", text: "O maior open interest e o maior volume de Futuros entre todas as corretoras." },
    { title: "Taxas baixas em Futuros", text: "0,02% maker / 0,05% taker no nível padrão, 10% a menos com BNB." },
    { title: "Tudo em um só app", text: "Futuros, opções, robôs, copy trading e Earn em uma única conta." },
  ],
  pros: [
    "Liquidez sem igual nos contratos perpétuos de BTC, ETH e das principais altcoins",
    "Taxas padrão competitivas, com desconto extra para quem paga em BNB",
    "Prova de reservas que você mesmo pode verificar e fundo SAFU de cerca de US$ 1 bilhão",
    "Um código de indicação que ficou faltando ainda pode ser vinculado em até 30 dias",
  ],
  cons: [
    "Indisponível nos Estados Unidos, no Canadá e na Holanda",
    "A verificação de identidade é obrigatória antes de depositar ou negociar",
    "Contas de Futuros novas ficam limitadas a 20x de alavancagem nos primeiros 30 dias",
    "Residentes do EEE estão excluídos do programa de indicação desde julho de 2026",
  ],
  bestFor: [
    "Traders ativos de Futuros que precisam de liquidez profunda",
    "Traders que querem uma única plataforma para tudo",
    "Usuários de alto volume que aproveitam os níveis VIP",
  ],
  signupTip:
    "Faça a verificação de identidade logo de início: a Binance não deixa contas novas depositarem nem negociarem sem ela, e as tarefas de boas-vindas só são liberadas depois que você estiver verificado.",
  safety:
    "A Binance publica uma prova de reservas que, segundo ela, mostra todos os saldos das contas lastreados 1:1 – a auditoria de 12 de novembro de 2026 apontou um índice de reservas de BTC de 100,05% – e permite verificar a sua própria conta em Wallet → Verification. A proteção da conta inclui autenticação de dois fatores, passkeys e uma whitelist de endereços de saque. O fundo SAFU serve para proteger os usuários em casos extremos. Nenhuma corretora centralizada é livre de riscos, então só deixe nela o dinheiro com que você negocia ativamente.",
  restricted:
    "A lista de países proibidos da Binance (atualizada em 5 de janeiro de 2026) inclui os Estados Unidos, o Canadá, a Holanda, Cuba, a Coreia do Norte, o Irã, a Crimeia e as chamadas Repúblicas Populares de Donetsk e Luhansk.",
  faqs: [
    {
      topic: "referral",
      q: "O código de indicação Binance REFCO888 funciona?",
      a: "Sim. Em 16 de novembro de 2026, o link binance.com/register?ref=REFCO888 abriu a página de cadastro oficial da Binance, que exibia o código REFCO888 ao lado do formulário de inscrição.",
    },
    {
      topic: "referral",
      q: "Qual a diferença entre Binance Referral Pro e Referral Lite?",
      a: "São dois modos separados, e cada novo usuário só pode estar em um deles. No Referral Pro, quem indica ganha comissão sobre as suas taxas de negociação e pode compartilhar parte dela com você como reembolso pago em USDC. No Referral Lite, os dois lados recebem vouchers de reembolso de taxas de negociação ao concluir pequenas tarefas de primeira compra e primeira operação. REFCO888 é um código do Referral Pro, então os vouchers do Lite não se aplicam.",
    },
    {
      topic: "referral",
      q: "Existe código de indicação separado para Binance Futures?",
      a: "A Binance mostra um campo opcional “Futures Referral ID” quando você abre uma conta de Futuros. Ele só aceita um código do mesmo indicador cujo código ou link do Referral Pro você usou no cadastro; na prática, portanto, uma única indicação vale para Spot, Margem e Futuros.",
    },
    {
      topic: "referral",
      q: "Posso trocar o código de indicação da Binance depois?",
      a: "Não. A Binance afirma que, depois que o vínculo de indicação é criado, ele não pode ser alterado nem removido. Só uma conta sem nenhuma indicação pode vincular um código, em até 30 dias após o cadastro e antes do primeiro depósito ou da primeira operação.",
    },
    {
      topic: "referral",
      q: "O código de indicação da Binance funciona na União Europeia?",
      a: "Não mais. Segundo os termos de indicação da Binance, usuários cadastrados em países do EEE não podem participar do Programa de Indicação da Binance desde 1º de julho de 2026. Os termos também listam restrições para o Reino Unido, Singapura, o Japão, a Turquia, Hong Kong e Israel.",
    },
    {
      topic: "signup",
      q: "Posso me cadastrar na Binance com Google, Apple ou Telegram?",
      a: "Sim. Além do e-mail ou do número de telefone, a página de cadastro da Binance oferece “Continue with Google”, “Continue with Apple” e “Continue with Telegram”.",
    },
    {
      topic: "signup",
      q: "Quais são os requisitos de senha da Binance?",
      a: "A senha da Binance precisa ter no mínimo 8 caracteres, com pelo menos uma letra maiúscula e um número.",
    },
    {
      topic: "signup",
      q: "Quanto tempo vale o código de verificação da Binance?",
      a: "O código de 6 dígitos que a Binance envia para o seu e-mail ou telefone durante o cadastro vale por 30 minutos.",
    },
    {
      topic: "signup",
      q: "Quanto tempo demora a verificação de identidade da Binance?",
      a: "Segundo a Binance, a análise costuma ficar pronta em até 48 horas depois que você envia o documento e passa pela prova de vida.",
    },
    {
      topic: "signup",
      q: "Dá para usar a Binance sem KYC?",
      a: "Não. Todo novo usuário precisa estar verificado para usar os produtos da Binance, inclusive depósitos e operações com cripto. Contas antigas não verificadas só podem sacar.",
    },
    {
      topic: "bonus",
      q: "Qual é o bônus de boas-vindas da Binance para novos usuários?",
      a: "A Binance dá aos novos usuários três tarefas para iniciantes que liberam até 100 USD em vouchers de reembolso de taxas de negociação. As tarefas só aparecem depois da verificação da conta, e cada voucher reembolsa uma porcentagem fixa das suas taxas de negociação no Spot.",
    },
    {
      topic: "bonus",
      q: "Posso sacar o bônus de boas-vindas da Binance?",
      a: "Não. A recompensa é um voucher de reembolso de taxas de negociação, não dinheiro: ele reembolsa taxas de negociação no Spot, não pode ser usado em operações feitas via API e só funciona no app da Binance.",
    },
    {
      topic: "bonus",
      q: "Quais países estão excluídos dos vouchers de boas-vindas da Binance?",
      a: "Os termos da Binance excluem, entre outros, o Reino Unido, os Estados Unidos, o Canadá, a Holanda, a Croácia, a Noruega, a Islândia, Liechtenstein, a Sérvia, a Albânia, a Rússia, o Japão, Singapura e Hong Kong. A lista completa está no artigo de ajuda da Binance sobre as recompensas de boas-vindas.",
    },
    {
      topic: "fees",
      q: "Qual é o desconto nas taxas da Binance pagando com BNB?",
      a: "Pagar as taxas em BNB dá 25% de desconto no Spot – 0,075% em vez de 0,10% para usuários comuns – e 10% nos Futuros USDⓈ-M, o que resulta em 0,018% maker e 0,045% taker.",
    },
    {
      topic: "fees",
      q: "Qual é a alavancagem máxima da Binance?",
      a: "Até 150x nos contratos perpétuos USDⓈ-M BTCUSDT e ETHUSDT para posições de até 300.000 USDT, e até 125x no perpétuo BTCUSD com margem em moeda. Contas de Futuros com menos de 30 dias não podem usar mais de 20x. Alavancagem alta aumenta drasticamente o risco de liquidação.",
    },
    {
      topic: "fees",
      q: "Quais são as taxas dos Futuros COIN-M da Binance?",
      a: "Usuários comuns pagam 0,02% maker e 0,05% taker nos Futuros COIN-M, as mesmas taxas dos contratos USDⓈ-M com margem em USDT.",
    },
    {
      topic: "safety",
      q: "A Binance está disponível nos EUA?",
      a: "Não. Os Estados Unidos estão na lista de países proibidos da Binance, junto com o Canadá e a Holanda.",
    },
    {
      topic: "safety",
      q: "O que é o fundo SAFU da Binance?",
      a: "O SAFU (Secure Asset Fund for Users) é um fundo de emergência que a Binance criou em 2018 para proteger os usuários em casos extremos. Segundo a Binance, em fevereiro de 2026 ele tinha cerca de US$ 1 bilhão em criptoativos e é reabastecido se cair abaixo de US$ 800 milhões.",
    },
    {
      topic: "safety",
      q: "Como conferir a prova de reservas da Binance?",
      a: "A Binance publica seus índices de reservas na página de prova de reservas e usa uma árvore de Merkle com zk-SNARKs. Usuários logados podem confirmar que o próprio saldo está incluído em Wallet → Verification.",
    },
  ],
};
