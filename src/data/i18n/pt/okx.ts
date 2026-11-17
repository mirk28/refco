import type { ExchangeText } from "../../types";

export const okx: ExchangeText = {
  referral: {
    codeName: "código de indicação",
    whereShort: "Campo “Referral code (optional)” na etapa do e-mail do cadastro",
    apply:
      "Digite o código no campo “Referral code (optional)” na etapa do e-mail do cadastro – o campo vem recolhido e precisa ser expandido – ou abra o link de cadastro desta página, que já leva o código para você.",
    whereToEnter:
      "No site da OKX, o código vai no campo “Referral code (optional)”, na etapa em que você informa seu endereço de e-mail. Como o campo vem recolhido, expanda-o primeiro. Se você chegar por um link de indicação, o código já vem junto, e a OKX informa que um código preenchido automaticamente pelo link não pode ser editado. No celular, a orientação da OKX é informar primeiro o seu e-mail na página de convite, depois instalar o app por esse mesmo link e se cadastrar com o mesmo e-mail – se você instalar o app por conta própria e criar a conta por lá, o código pode não ser transferido.",
    afterSignupShort: "Não – só durante o cadastro",
    afterSignup:
      "Não. A OKX afirma que os códigos de convite só têm efeito durante o cadastro e não podem ser adicionados retroativamente; o FAQ do programa de indicação diz que, em geral, não é possível adicionar ou alterar um código depois. Excluir a conta e se cadastrar de novo não restabelece a elegibilidade e pode ser considerado uma violação. Um link no formato okx.com/join/… não pode ser vinculado a uma conta já existente.",
    inviteeReward:
      "Como usuário convidado, você recebe as recompensas de boas-vindas da OKX (Welcome Rewards), também chamadas de New User Bonus. Elas são independentes da recompensa de quem convidou você e dependem do seu país, da campanha e do link usado; a oferta fica definida no momento do cadastro. Na nossa verificação, a página de convite deste código mostrava uma recompensa de boas-vindas de até 400 € na OKX Europe, e a página de convite global da OKX prometia até 100 USDT para quem se cadastrasse e concluísse as tarefas.",
    guide: [
      "O código de indicação da OKX vincula sua nova conta à pessoa que convidou você. Na prática, o que ele garante é o acesso às recompensas de boas-vindas: um conjunto de tarefas de depósito e de negociação cujos valores a OKX define por país, campanha e grupo de usuários. A oferta que você recebe é definida no cadastro – por isso o código precisa estar lá nesse momento.",
      "Qual OKX você vai usar depende de onde você mora. Quem acessa do EEE (Espaço Econômico Europeu) – e de vários outros países europeus – é direcionado para a OKX Europe (okx.com/en-eu), operada pela OKX Europe Limited em Malta sob o MiCA. Lá, as recompensas são pagas em cripto, em vouchers de X-Perps ou em um VIP Pass; as recompensas em cripto ficam bloqueadas por até 45 dias (dá para negociar com elas, mas não sacar), e o volume em X-Perps não conta para as tarefas de negociação.",
      "No site global, as recompensas chegam em cripto ou como cartões de reembolso, que precisam ser abertos em até 30 dias; cada tarefa de negociação precisa ser cumprida com uma única operação, e as tarefas não concluídas desaparecem 180 dias após o cadastro.",
    ],
  },
  signup: {
    methods: ["um endereço de e-mail (o número de telefone é adicionado e confirmado durante o cadastro)"],
    steps: [
      {
        title: "Abra a página de convite da OKX",
        text: "Use o botão de cadastro desta página. A OKX abre a página de convite do código T7IRGAR3 e mostra a recompensa de boas-vindas válida no seu país.",
      },
      {
        title: "Escolha seu país ou região de residência",
        text: "Selecione onde você mora, confirme os Termos de Serviço e clique em “Next”.",
      },
      {
        title: "Informe seu e-mail e confira o código de indicação",
        text: "Expanda “Referral code (optional)” – o campo deve mostrar T7IRGAR3 – e clique em “Sign up”.",
      },
      {
        title: "Confirme o código de 6 dígitos enviado por e-mail",
        text: "A OKX envia um código de 6 dígitos para o seu endereço de e-mail. Ele vale por 10 minutos.",
      },
      {
        title: "Adicione seu número de telefone",
        text: "Digite seu número de telefone e o código de 6 dígitos enviado para ele. A OKX exige um e-mail e um número de telefone em todas as contas.",
      },
      {
        title: "Crie uma senha",
        text: "Escolha uma senha forte e exclusiva para a conta.",
      },
      {
        title: "Verifique sua identidade",
        text: "Conclua a verificação de identidade com um documento oficial e uma selfie ou verificação facial. Negociação, depósitos e saques só ficam disponíveis depois disso.",
      },
    ],
    kycShort: "Obrigatória antes de negociar, depositar e sacar",
    kyc: "Sim. A OKX exige verificação de identidade para usar uma conta individual – negociação, depósitos e saques só ficam disponíveis depois dela. Você informa país de residência, nacionalidade, nome, data de nascimento e dados do documento, envia um documento oficial e passa por uma selfie ou verificação facial; a OKX também pode pedir um comprovante de residência emitido nos últimos 6 meses. Segundo a OKX, a análise é concluída em até 24 horas, e cada documento de identidade só pode ser usado em uma única conta.",
    documents:
      "Um documento de identidade oficial válido: passaporte, carteira de identidade, carteira de habilitação ou autorização de residência – a lista exibida para o seu país durante a verificação é a que vale –, além de uma selfie ou verificação facial e, se solicitado, um comprovante de residência com no máximo 6 meses.",
    minAge: "18 anos",
  },
  welcomeTasks: [],
  tokenDiscount: "",
  extraFeeMarkets: ["Opções"],
  sourceLabels: [
    "OKX: Como cadastrar uma conta",
    "OKX: FAQ do programa de indicação",
    "OKX: FAQ de afiliados (códigos de convite e rebates)",
    "OKX: Termos e condições do New User Bonus (EEE)",
    "OKX: FAQ do New User Bonus (EEE)",
    "OKX: Termos e condições do New User Bonus (global)",
    "OKX: Tabela de taxas",
    "OKX: FAQ sobre as regras das taxas de negociação",
    "OKX: Alavancagem dos X-Perps no EEE",
    "API pública da OKX: instrumentos de contratos perpétuos (alavancagem máxima)",
    "OKX: Como verificar uma conta individual",
    "OKX: Verificação de identidade – elegibilidade, prazo de análise e documentos",
    "OKX: Divulgação de riscos e compliance (locais restritos)",
    "OKX: Termos de Serviço",
    "OKX Europe: Sobre",
    "OKX Middle East: Sobre (licença da VARA)",
    "OKX: Prova de reservas",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futuros e contratos perpétuos"],
  bonusHeadline: "Bônus de boas-vindas de até 400 € ou 100 USDT",
  benefits: [
    "Recompensas de boas-vindas da OKX para novos usuários: até 400 € na OKX Europe e até 100 USDT no site global, liberadas com tarefas de depósito e de negociação",
    "Taxas padrão baixas: 0,08% maker / 0,10% taker no Spot e 0,02% / 0,05% em Futuros e contratos perpétuos",
    "Com o link, não há como digitar o código errado – a OKX trava o código já preenchido",
    "Prova de reservas mensal, que você pode conferir com o seu próprio saldo",
  ],
  benefitNote:
    "As recompensas de boas-vindas exigem cadastro por um link designado e verificação de identidade concluída, seguidos de tarefas de depósito e de negociação. Na OKX Europe, transferências internas não contam como depósito, pares com taxa zero e volume em X-Perps não contam como negociação, as recompensas em cripto ficam bloqueadas por até 45 dias e o crédito pode levar até 48 horas. No site global, as recompensas precisam ser abertas em até 30 dias e as tarefas expiram 180 dias após o cadastro. Valores e tarefas variam conforme o país e a campanha.",
  headquarters: "Aux Cayes FinTech Co. Ltd. (Seicheles) para o site global; OKX Europe Limited (Malta); OKX Middle East Fintech FZE (Dubai)",
  regulation: "Autorização MiCA pela OKX Europe Limited (Malta, MFSA); licença da VARA em Dubai",
  users: "120M+ usuários (segundo a OKX Europe)",
  assets: "270+ moedas (segundo a OKX Europe)",
  maxLeverage: "Até 100x (site global; até 10x na OKX Europe)",
  feeNote:
    "Estas são as taxas do nível Regular; o nível seguinte começa em 100.000 em ativos ou em 1.000.000 de volume Spot em 30 dias (5.000.000 em Futuros), valores contados em EUR na OKX Europe e em USD no site global. Os futuros com vencimento têm uma taxa de settlement (liquidação no vencimento) de 0,01%.",
  products: ["Spot", "Contratos perpétuos", "Futuros com vencimento", "Opções", "Robôs de trading"],
  tagline: "Spot e derivativos com taxas baixas e prova de reservas mensal",
  quickAnswer:
    "O código de indicação da OKX é T7IRGAR3. No site, ele vai no campo “Referral code (optional)”, na etapa do e-mail do cadastro; o botão desta página já aplica o código para você. Ele só funciona durante o cadastro – a OKX não adiciona códigos de convite retroativamente. Novos usuários recebem as recompensas de boas-vindas da OKX: até 400 € na OKX Europe ou até 100 USDT no site global, depois da verificação de identidade e das tarefas de depósito e de negociação.",
  about: [
    "Fundada em 2017, a OKX é uma das maiores corretoras de criptomoedas tanto no mercado à vista (Spot) quanto em derivativos. As páginas da OKX Europe falam em mais de 120 milhões de usuários e listam mais de 270 moedas. Usuários do nível Regular pagam 0,08% maker e 0,10% taker no Spot, 0,02% / 0,05% em Futuros e contratos perpétuos e 0,03% em opções.",
    "A linha de produtos inclui Spot, contratos perpétuos, futuros com vencimento, opções e robôs de trading, mas o que você pode usar depende de onde mora. No site global, a alavancagem máxima é de 100x, disponível em perpétuos como BTC-USDT, ETH-USDT, SOL-USDT e XRP-USDT. Na OKX Europe, o produto perpétuo se chama X-Perps e é limitado a 10x – menos para posições maiores.",
    "A OKX publica uma prova de reservas todo mês. O 49º relatório cobriu US$ 33,87 bilhões em 21 ativos; a verificação de 1º de novembro de 2026 mostrou índices de reserva de 108% para BTC, 101% para ETH, 106% para USDT e 100% para USDC. A prova usa zk-STARK e uma árvore de Merkle, então qualquer usuário logado pode conferir se o próprio saldo está incluído. A OKX Europe Limited é autorizada pela Malta Financial Services Authority como prestadora de serviços de criptoativos sob o MiCA, e a OKX Middle East Fintech FZE tem licença da VARA, de Dubai.",
  ],
  highlights: [
    { title: "Taxas padrão baixas", text: "0,08% / 0,10% no Spot e 0,02% / 0,05% em Futuros e contratos perpétuos." },
    { title: "Prova de reservas mensal", text: "49 relatórios até agora, verificáveis com zk-STARK e árvore de Merkle." },
    { title: "Autorizada sob o MiCA no EEE", text: "A OKX Europe Limited é autorizada pelo regulador maltês MFSA." },
  ],
  pros: [
    "Taxas padrão baixas em Spot, Futuros e opções",
    "Prova de reservas mensal, verificável por você, com índices acima de 100%",
    "Entidade autorizada sob o MiCA para usuários do EEE e licença da VARA em Dubai",
    "Opções e futuros com vencimento, além de contratos perpétuos",
  ],
  cons: [
    "O código de indicação não pode ser adicionado depois do cadastro",
    "Os produtos dependem muito do seu país – na OKX Europe, os perpétuos ficam limitados a 10x",
    "Na OKX Europe, as recompensas de boas-vindas ficam bloqueadas por até 45 dias",
    "Indisponível no Canadá, na Índia, no Japão, em Hong Kong e em partes dos Estados Unidos",
  ],
  bestFor: ["Traders de Spot e Futuros atentos às taxas", "Traders de opções", "Usuários do EEE que querem uma plataforma autorizada sob o MiCA"],
  signupTip:
    "No celular, informe primeiro seu e-mail na página de convite e instale o app por esse link – se você baixar o app por conta própria e se cadastrar por lá, o código de indicação pode não ser transferido.",
  safety:
    "A OKX publica uma prova de reservas mensal – índices de 108% para BTC, 101% para ETH, 106% para USDT e 100% para USDC na verificação de 1º de novembro de 2026 – e permite que usuários logados confiram o próprio saldo em “View my report”, com ferramentas de código aberto e endereços de carteira publicados. Toda conta precisa ter um e-mail e um número de telefone vinculados. Como em qualquer corretora, deixe na plataforma apenas o capital que você usa para operar.",
  restricted:
    "A OKX lista como locais restritos: Afeganistão, Canadá, Cuba, Hong Kong, Irã, Índia, Japão, Malásia, Nepal, Coreia do Norte, Síria, Uzbequistão, as regiões da Crimeia, Donetsk e Luhansk e determinadas jurisdições dos EUA, incluindo todos os territórios norte-americanos. Há restrições parciais na Austrália, no Brasil, na Coreia do Sul e no Reino Unido (sem derivativos) e para pagamentos em moeda fiduciária na Rússia. A lista foi atualizada pela última vez em 14 de novembro de 2026.",
  faqs: [
    {
      topic: "referral",
      q: "O código de indicação OKX T7IRGAR3 funciona?",
      a: "Sim. Em 16 de novembro de 2026, o link okx.com/join/T7IRGAR3 abriu a página de convite oficial da OKX para esse código, com uma recompensa de boas-vindas e um link de cadastro que já leva o código.",
    },
    {
      topic: "referral",
      q: "Por que não aparece o campo de código de indicação na OKX?",
      a: "O campo “Referral code (optional)” vem recolhido no formulário de cadastro e precisa ser expandido. A OKX acrescenta que, se o campo não aparecer de jeito nenhum, você deve se cadastrar pelo link de indicação.",
    },
    {
      topic: "referral",
      q: "Como usar o código de indicação da OKX no app?",
      a: "Abra o link de convite no celular e informe seu e-mail ali; depois instale o app da OKX por esse link e cadastre-se com o mesmo e-mail. A OKX avisa que o código pode não ser transferido se você instalar o app por conta própria e criar a conta nele.",
    },
    {
      topic: "referral",
      q: "Dá para usar a indicação da OKX excluindo a conta e criando outra?",
      a: "Não. A OKX afirma que excluir uma conta e se cadastrar de novo não restabelece a elegibilidade e pode ser tratado como uma violação.",
    },
    {
      topic: "signup",
      q: "Preciso de número de telefone para me cadastrar na OKX?",
      a: "Sim. O cadastro da OKX pede primeiro um endereço de e-mail e depois um número de telefone, cada um confirmado com um código de 6 dígitos. Os dois precisam estar vinculados, e cada e-mail e cada número de telefone só podem ser usados em uma conta.",
    },
    {
      topic: "signup",
      q: "Quanto tempo vale o código de verificação por e-mail da OKX?",
      a: "O código de 6 dígitos que a OKX envia para o seu e-mail durante o cadastro vale por 10 minutos.",
    },
    {
      topic: "signup",
      q: "Quanto tempo demora a verificação de identidade da OKX?",
      a: "Segundo a OKX, a análise é concluída em até 24 horas depois que você envia o documento e faz a selfie ou a verificação facial.",
    },
    {
      topic: "signup",
      q: "Dá para usar a OKX sem KYC?",
      a: "Não. A verificação de identidade é obrigatória para usar uma conta individual; negociação, depósitos e saques só ficam disponíveis depois dela.",
    },
    {
      topic: "bonus",
      q: "Qual é o bônus de boas-vindas da OKX?",
      a: "Novos usuários que se cadastram por um link de indicação recebem as recompensas de boas-vindas da OKX (New User Bonus). Na nossa verificação, a página de convite mostrava até 400 € na OKX Europe, e a página de convite global mostrava até 100 USDT. As recompensas são liberadas com a conclusão da verificação de identidade, das tarefas de depósito e das tarefas de negociação, e variam conforme o país e a campanha.",
    },
    {
      topic: "bonus",
      q: "Posso sacar o bônus de boas-vindas da OKX na hora?",
      a: "Não. Na OKX Europe, as recompensas em cripto ficam bloqueadas por até 45 dias – você pode negociar com elas, mas não sacá-las. No site global, as recompensas já chegam bloqueadas e não podem ser negociadas nem sacadas durante o período de bloqueio.",
    },
    {
      topic: "bonus",
      q: "Quais depósitos e operações contam para as tarefas de boas-vindas da OKX?",
      a: "Na OKX Europe, contam depósitos em cripto ou em moeda fiduciária via SEPA, iDEAL ou Bancontact; transferências internas, não. Contam operações feitas por Buy, Sell, Convert ou pelo livro de ofertas do Spot; pares com taxa zero e volume em X-Perps, não. No site global, cada tarefa de negociação precisa ser cumprida com uma única operação.",
    },
    {
      topic: "fees",
      q: "Quais são as taxas de opções da OKX?",
      a: "Usuários do nível Regular pagam 0,03% maker e 0,03% taker em opções.",
    },
    {
      topic: "fees",
      q: "Qual é a alavancagem máxima na OKX?",
      a: "100x no site global, em contratos perpétuos como BTC-USDT, ETH-USDT, SOL-USDT e XRP-USDT, e menos para posições maiores. Na OKX Europe, os X-Perps são limitados a 10x. Alavancagem alta aumenta drasticamente o risco de liquidação.",
    },
    {
      topic: "fees",
      q: "Como pagar menos taxas na OKX?",
      a: "Os níveis de taxa da OKX dependem do seu saldo em ativos ou do seu volume de negociação em 30 dias. O nível Regular vai até 100.000 em ativos, ou até 1.000.000 de volume em 30 dias no Spot e 5.000.000 em Futuros; acima disso, valem as taxas VIP.",
    },
    {
      topic: "safety",
      q: "A OKX é regulamentada na Europa?",
      a: "Sim. A OKX Europe Limited é autorizada pela Malta Financial Services Authority como prestadora de serviços de criptoativos sob o MiCA e atende os clientes do EEE pelo okx.com/en-eu.",
    },
    {
      topic: "safety",
      q: "A OKX funciona nos Estados Unidos?",
      a: "Só de forma limitada: a OKX lista determinadas jurisdições dos EUA e todos os territórios norte-americanos como locais restritos. Canadá, Índia, Japão e Hong Kong estão totalmente restritos.",
    },
    {
      topic: "safety",
      q: "A OKX publica prova de reservas?",
      a: "Sim, todo mês. O 49º relatório cobriu US$ 33,87 bilhões em 21 ativos, e a verificação de 1º de novembro de 2026 mostrou 108% para BTC, 101% para ETH, 106% para USDT e 100% para USDC.",
    },
  ],
};
