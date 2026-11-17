import type { ExchangeText } from "../../types";

export const mexc: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Campo “Referral Code (Optional)” do cadastro (diferencia maiúsculas e minúsculas)",
    apply:
      "Digite-o no campo “Referral Code (Optional)” do formulário de cadastro – o código diferencia maiúsculas de minúsculas – ou abra o link de cadastro desta página, que preenche o campo e o bloqueia.",
    whereToEnter:
      "O formulário de cadastro da MEXC tem um campo chamado “Referral Code (Optional)” com a dica “Enter invitation code (case-sensitive)”, então digite 4E3xM exatamente como está escrito, com o E e o M maiúsculos. No site, marque “Enter Referral Code” para o campo aparecer; no app, toque na pequena seta para abri-lo. O link desta página abre a página de convite da MEXC com 4E3xM já preenchido e o campo bloqueado.",
    afterSignupShort: "Sim – em até 30 dias após o cadastro",
    afterSignup:
      "Sim. A MEXC oferece uma função de autoatendimento para vincular um indicador depois do cadastro: só podem usá-la contas criadas nos últimos 30 dias, ela vale para contas principais, e o vínculo é feito pelo código de indicação ou pelo UID de quem indica. O indicador precisa ter se cadastrado antes de você. Depois que um código de convite é vinculado, segundo a MEXC, ele não pode mais ser alterado nem removido.",
    inviteeReward:
      "A MEXC não dá aos usuários indicados um desconto permanente nas taxas. O que o código libera é o evento de indicação da MEXC: a página de convite mostra a quem se cadastra por indicação uma recompensa extra de até 140 USDT, além das recompensas para novos usuários de até 10.000 USDT. A recompensa de indicação é paga em bônus de Futuros quando você conclui uma tarefa de depósito líquido e uma tarefa de negociação em Futuros em até 7 dias após o cadastro.",
    guide: [
      "Na MEXC, o código de indicação tem duas funções. Ele registra quem convidou você – o indicador ganha comissão sobre as suas operações em Spot e Futuros – e torna você elegível para o evento de indicação que a MEXC promove para novos cadastros. O evento funciona por níveis: 50 USDT por um depósito líquido de pelo menos US$ 100 e US$ 1.000 de volume em Futuros, 90 USDT com US$ 10.000 de volume em Futuros e 140 USDT com US$ 20.000, tudo em até 7 dias após o cadastro e depois do KYC Primário.",
      "As recompensas são bônus de Futuros, vouchers de taxa e airdrops de posição, não dinheiro. A MEXC indica que o evento tem prazo limitado e é “only open to designated users” (aberto apenas a usuários designados), e o FAQ do evento diz que o bônus de indicação não pode ser combinado com o evento de 10.000 USDT nem com os bônus do Rewards Hub – embora a página de convite anuncie os dois juntos. Considere válidos os valores que aparecerem na sua própria conta depois do cadastro.",
      "Como o código diferencia maiúsculas de minúsculas, o link é a forma mais segura de aplicá-lo. Se você se cadastrou sem ele, ainda tem 30 dias para vinculá-lo por conta própria.",
    ],
  },
  signup: {
    methods: ["um endereço de e-mail", "um número de telefone", "Google", "Apple", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Abra a página de cadastro da MEXC",
        text: "Use o botão de cadastro desta página. A MEXC abre a página “Your Friend Invites You to Join MEXC” com o código de indicação 4E3xM já preenchido e bloqueado.",
      },
      {
        title: "Informe seu e-mail ou número de telefone e uma senha",
        text: "Ou continue com Google, Apple, Telegram ou MetaMask. A senha precisa ter pelo menos 10 caracteres, com letras maiúsculas e minúsculas, um número e um símbolo.",
      },
      {
        title: "Confira o código de indicação",
        text: "O campo “Referral Code (Optional)” deve mostrar 4E3xM. Se for digitar você mesmo, atenção às letras maiúsculas – o código diferencia maiúsculas de minúsculas.",
      },
      {
        title: "Resolva o quebra-cabeça deslizante",
        text: "A MEXC exibe um quebra-cabeça deslizante como verificação de segurança.",
      },
      {
        title: "Digite o código de 6 dígitos",
        text: "Digite o código de verificação de 6 dígitos enviado pela MEXC e selecione “Confirm”.",
      },
      {
        title: "Conclua o KYC",
        text: "Finalize o KYC Primário para liberar as recompensas e evitar restrições em depósitos, saques e negociação.",
      },
    ],
    kycShort: "Necessário para depósitos, saques e negociação",
    kyc: "Na prática, sim. A MEXC afirma que não concluir a verificação KYC pode afetar seu acesso a serviços como depósitos, saques e negociação, e as recompensas exigem pelo menos o KYC Primário. O KYC Primário permite saques de cripto de 80 BTC por dia; o KYC Avançado eleva esse limite para 200 BTC por dia e acrescenta limites em moeda fiduciária de 20.000 USD por dia. Spot, Futuros e eventos ficam liberados nos dois níveis.",
    documents: "A MEXC aceita documento de identidade, passaporte, carteira de motorista ou autorização de residência.",
    minAge: "Maioridade legal no seu país – o Contrato de Usuário da MEXC exige que você tenha idade legal para firmar um contrato vinculante e não cita um número",
  },
  welcomeTasks: [
    { task: "Fazer o cadastro", reward: "Voucher de 10 USDT" },
    { task: "Primeiro login no app", reward: "Voucher de 10 USDT" },
    { task: "Concluir o KYC Primário em até 7 dias", reward: "Airdrop de posição BTCUSDT de US$ 200" },
    { task: "Volume acumulado em Futuros (nível máximo: pelo menos 1.000.000 USDT)", reward: "Bônus de Futuros de até 7.620 USDT" },
    { task: "Evento de indicação: depósito líquido de pelo menos US$ 100 e US$ 1.000 de volume em Futuros em até 7 dias", reward: "50 USDT em bônus de Futuros" },
    { task: "Evento de indicação: volume em Futuros de pelo menos US$ 10.000 em até 7 dias", reward: "90 USDT em bônus de Futuros" },
    { task: "Evento de indicação: volume em Futuros de pelo menos US$ 20.000 em até 7 dias", reward: "140 USDT em bônus de Futuros" },
  ],
  tokenDiscount:
    "Pagar as taxas com MX dá 20% de desconto nas taxas de Spot e Futuros; em Futuros, o MX precisa estar na sua carteira de Futuros. O antigo desconto de 50% para quem mantinha 500 MX ou mais está suspenso desde 9 de fevereiro de 2026.",
  extraFeeMarkets: ["Futuros Coin-M (BTCUSD, ETHUSD)"],
  sourceLabels: [
    "MEXC: Processo de cadastro da conta (web)",
    "MEXC: Processo de cadastro da conta (app)",
    "MEXC: Guia de indicação",
    "MEXC: Guia para vincular um indicador por autoatendimento",
    "MEXC: Evento de indicação e regras",
    "MEXC: Rewards Hub (recompensas para novos usuários)",
    "MEXC: Anúncio das recompensas de boas-vindas (validade dos bônus)",
    "MEXC: Tabela de taxas",
    "MEXC: Como usar MX para ter desconto nas taxas de negociação",
    "MEXC: Lançamento da alavancagem de 500x em Futuros",
    "MEXC: Perguntas frequentes sobre KYC",
    "MEXC: Dúvidas comuns sobre a verificação KYC",
    "MEXC: Contrato de Usuário (jurisdições proibidas)",
    "MEXC Learn: Países restritos",
    "MEXC: Sobre a MEXC",
    "MEXC: Por que a MEXC (pares e contratos)",
    "MEXC: Prova de reservas",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futuros"],
  bonusHeadline: "Até 10.000 USDT em recompensas para novos usuários",
  benefits: [
    "Recompensas para novos usuários de até 10.000 USDT no Rewards Hub – vouchers, airdrops de posição e bônus de Futuros",
    "Quem se cadastra por indicação vê uma recompensa extra de até 140 USDT em bônus de Futuros",
    "Taxa maker de 0% no Spot e na maioria dos contratos futuros",
    "O código ainda pode ser vinculado em até 30 dias após o cadastro",
  ],
  benefitNote:
    "Todas as recompensas dependem de tarefas e exigem pelo menos o KYC Primário. Os bônus não podem ser sacados – só os lucros obtidos com eles – e transferir fundos para fora da conta de Futuros antes de usar o bônus por completo faz você perder o bônus inteiro. Os bônus de Futuros valem para contratos USDT-M e foram anunciados com validade de 15 dias. O evento de indicação tem prazo limitado e é aberto apenas a usuários designados, o FAQ do evento da MEXC diz que o bônus não pode ser combinado com o evento de 10.000 USDT, e as recompensas passam por uma análise de risco de até 7 dias. Regiões onde derivativos são proibidos podem não ser elegíveis.",
  headquarters: "MEXC (Comoros) Ltd, registrada na União das Comores",
  regulation: "Nenhuma licença citada nas páginas da própria MEXC; a MEXC afirma não ter licença de primeira linha nem autorização MiCA",
  users: "Mais de 40 milhões de usuários (segundo a MEXC)",
  assets: "1.384 pares Spot e 1.152 contratos futuros (segundo a MEXC)",
  maxLeverage: "Até 500x (Futuros BTCUSDT e ETHUSDT)",
  feeNote:
    "A taxa de Futuros exibida é a que a MEXC cobra em BTCUSDT e ETHUSDT; considerando todos os contratos, a página de taxas da MEXC indica uma faixa de 0% a 0,04% para makers e de 0% a 0,1% para takers, e alguns pares são negociados com taxa zero. A MEXC observa que as taxas maker podem variar conforme eventos da plataforma ou a sua região.",
  products: ["Futuros USDT-M e Coin-M", "Spot", "Copy trading", "Launchpad", "Earn"],
  tagline: "Taxa maker zero e alavancagem de até 500x",
  quickAnswer:
    "O código de indicação da MEXC é 4E3xM – e ele diferencia maiúsculas de minúsculas. Digite-o no campo “Referral Code (Optional)” ao se cadastrar ou use o botão desta página, que preenche e bloqueia o campo. Se você esqueceu, a MEXC permite vincular um indicador por conta própria em até 30 dias após o cadastro. Novos usuários podem liberar até 10.000 USDT em recompensas, e a página de convite da MEXC mostra a quem se cadastra por indicação um bônus extra de até 140 USDT.",
  about: [
    "A MEXC opera desde 2018 e diz atender mais de 40 milhões de usuários em mais de 170 países e regiões. Ela compete em preço e variedade: usuários comuns não pagam taxa maker no Spot (mercado à vista) nem na maioria dos contratos futuros, e a MEXC lista 1.384 pares Spot e 1.152 contratos futuros.",
    "A plataforma de Futuros oferece contratos com margem em USDT e com margem em moeda (coin-margined), com alavancagem de até 500x em BTCUSDT e ETHUSDT. Esse máximo não vale em todo lugar – a MEXC exclui dele a Austrália, a Áustria, a Bélgica, o Canadá, a França, Hong Kong, a Itália, a Rússia, o Reino Unido e o Iêmen – e o copy trading não aceita 250x nem 500x. Também há copy trading, um launchpad e produtos Earn.",
    "A entidade contratante é a MEXC (Comoros) Ltd, registrada na União das Comores. A MEXC não cita nenhuma licença nas próprias páginas e ela mesma afirma que não tem licença de primeira linha nem autorização MiCA; o próprio guia da corretora observa que ela consta no registro provisório de entidades não conformes da ESMA. A MEXC publica prova de reservas – o snapshot de 9 de novembro de 2026 mostrou 122,42% para USDT, 109,84% para USDC, 317,61% para BTC e 112,41% para ETH – e mantém um Guardian Fund de US$ 100 milhões e um fundo de seguro de Futuros.",
  ],
  highlights: [
    { title: "Taxa maker de 0%", text: "Taxa maker zero no Spot e na maioria dos contratos futuros." },
    { title: "Vínculo em até 30 dias", text: "Esqueceu o código? A MEXC deixa você vincular um indicador por 30 dias após o cadastro." },
    { title: "Reservas acima de 100%", text: "USDT 122%, BTC 318%, ETH 112% no snapshot de 9 de novembro de 2026." },
  ],
  pros: [
    "Entre as taxas de negociação mais baixas do setor: 0% maker e 0,02% taker nos Futuros BTCUSDT",
    "Dá para vincular um código de indicação até 30 dias após o cadastro",
    "1.384 pares Spot e 1.152 contratos futuros",
    "Prova de reservas acima de 100% e um Guardian Fund de US$ 100 milhões",
  ],
  cons: [
    "Sem licença de primeira linha e sem autorização MiCA, segundo a própria MEXC",
    "Indisponível nos EUA, no Reino Unido, no Canadá, na França, na Holanda, em Singapura e em Hong Kong",
    "Os bônus não podem ser sacados e são perdidos se você transferir fundos antes da hora",
    "Alavancagem de 500x é extremamente arriscada",
  ],
  bestFor: [
    "Traders de futuros de alta frequência atentos aos custos",
    "Traders à caça de novas listagens",
    "Usuários experientes que não se incomodam com plataformas offshore",
  ],
  signupTip:
    "Conclua o KYC Primário em até 7 dias após o cadastro – isso libera o airdrop de posição BTCUSDT de US$ 200 – e não transfira fundos para fora da sua conta de Futuros enquanto um bônus de Futuros ainda estiver em uso, senão você perde o bônus.",
  safety:
    "A MEXC publica prova de reservas – 122,42% para USDT, 109,84% para USDC, 317,61% para BTC e 112,41% para ETH no snapshot de 9 de novembro de 2026 – e mantém um Guardian Fund de US$ 100 milhões e um fundo de seguro de Futuros. A própria MEXC afirma não ter licença de primeira linha nem autorização MiCA; por isso, proteja bem a sua conta e não guarde ali economias de longo prazo. Com tokens muito novos, confira a liquidez e as especificações do contrato antes de negociá-los com alavancagem.",
  restricted:
    "O Contrato de Usuário da MEXC (última atualização: 13 de outubro de 2026) proíbe usuários da Coreia do Norte, de Cuba, do Sudão, do Irã, da China continental, de Singapura, da Malásia, dos Estados Unidos, do Reino Unido, de Hong Kong, do Cazaquistão, da Rússia, de regiões da Ucrânia controladas pela Rússia, da Bielorrússia, do Canadá, da França e da Holanda, além de países sob sanções e dos que estão na lista negra do GAFI (FATF).",
  faqs: [
    {
      topic: "referral",
      q: "O código de indicação MEXC 4E3xM funciona?",
      a: "Sim. Em 16 de novembro de 2026, o link desta página abriu a página de convite da MEXC com inviteCode=4E3xM no endereço e 4E3xM pré-preenchido e bloqueado no campo “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "O código de indicação da MEXC diferencia maiúsculas de minúsculas?",
      a: "Sim. O campo de cadastro da MEXC traz a dica “Enter invitation code (case-sensitive)”. O código é 4E3xM – o número 4, E maiúsculo, o número 3, x minúsculo e M maiúsculo.",
    },
    {
      topic: "referral",
      q: "Como vincular um indicador na MEXC depois do cadastro?",
      a: "Use a função de autoatendimento da MEXC para vincular um indicador em até 30 dias após o cadastro. Ela está disponível para contas principais, você informa o código de indicação ou o UID de quem indica, e o indicador precisa ter se cadastrado antes de você. Depois, o vínculo não pode ser alterado nem removido.",
    },
    {
      topic: "referral",
      q: "O código de indicação da MEXC dá desconto nas taxas?",
      a: "A MEXC não lista nenhum desconto permanente nas taxas para o usuário indicado. A vantagem é o evento de indicação, com recompensas de até 140 USDT em bônus de Futuros, além das recompensas gerais para novos usuários.",
    },
    {
      topic: "signup",
      q: "Quais são os requisitos de senha da MEXC?",
      a: "Pelo menos 10 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um símbolo.",
    },
    {
      topic: "signup",
      q: "Posso me cadastrar na MEXC com Google, Apple, Telegram ou MetaMask?",
      a: "Sim. A página de cadastro da MEXC oferece Google e Apple diretamente e Telegram e MetaMask em “More Options”, além de e-mail e telefone.",
    },
    {
      topic: "signup",
      q: "Quais são os níveis e limites de KYC da MEXC?",
      a: "O KYC Primário permite saques de cripto de 80 BTC por dia e negociação P2P. O KYC Avançado eleva o limite para 200 BTC por dia e permite transações em moeda fiduciária de até 20.000 USD por dia. Spot, Futuros e eventos ficam liberados nos dois níveis.",
    },
    {
      topic: "signup",
      q: "É possível usar a MEXC sem KYC?",
      a: "Só com restrições. A MEXC afirma que não concluir a verificação KYC pode afetar seu acesso a serviços como depósitos, saques e negociação, e as recompensas para novos usuários e de indicação exigem pelo menos o KYC Primário.",
    },
    {
      topic: "bonus",
      q: "Qual é o bônus de boas-vindas da MEXC?",
      a: "A MEXC anuncia até 10.000 USDT em recompensas para novos usuários. Exemplos do Rewards Hub: um voucher de 10 USDT pelo cadastro, um voucher de 10 USDT pelo primeiro login no app, um airdrop de posição BTCUSDT de US$ 200 por concluir o KYC Primário em até 7 dias e um bônus de Futuros de até 7.620 USDT por volume acumulado, com o nível máximo em 1.000.000 USDT de volume.",
    },
    {
      topic: "bonus",
      q: "Quanto é o bônus de indicação da MEXC?",
      a: "No evento de indicação da MEXC, o usuário indicado recebe 50 USDT por um depósito líquido de pelo menos US$ 100 mais US$ 1.000 de volume em Futuros, 90 USDT com US$ 10.000 de volume em Futuros e 140 USDT com US$ 20.000, tudo em até 7 dias após o cadastro. O pagamento vem em bônus de Futuros, voucher de taxa e airdrop de posição. O evento tem prazo limitado e é aberto apenas a usuários designados.",
    },
    {
      topic: "bonus",
      q: "Posso sacar o bônus da MEXC?",
      a: "Não. A MEXC afirma que os bônus não podem ser sacados, mas os lucros de operações feitas com o bônus podem. Transferir qualquer ativo para fora da conta de Futuros antes de usar o bônus por completo faz você perder o bônus inteiro.",
    },
    {
      topic: "bonus",
      q: "Qual é a validade do bônus de Futuros da MEXC?",
      a: "A MEXC anunciou validade de 15 dias para bônus de Futuros e para vouchers. Um bônus de Futuros só pode ser usado em contratos USDT-M.",
    },
    {
      topic: "fees",
      q: "Quais são as taxas de Futuros da MEXC?",
      a: "Em BTCUSDT e ETHUSDT, usuários comuns pagam 0% maker e 0,02% taker. Considerando todos os contratos, a página de taxas da MEXC indica uma faixa de 0% a 0,04% para makers e de 0% a 0,1% para takers, e alguns pares são isentos de taxa.",
    },
    {
      topic: "fees",
      q: "Quanto é o desconto nas taxas da MEXC pagando com MX?",
      a: "20% nas taxas de Spot e Futuros quando você paga com MX; em Futuros, o MX precisa estar na sua carteira de Futuros. O desconto anterior de 50% para quem mantinha pelo menos 500 MX está suspenso desde 9 de fevereiro de 2026.",
    },
    {
      topic: "fees",
      q: "A MEXC oferece mesmo alavancagem de 500x?",
      a: "Sim, nos Futuros BTCUSDT e ETHUSDT. Ela não é oferecida na Austrália, na Áustria, na Bélgica, no Canadá, na França, em Hong Kong, na Itália, na Rússia, no Reino Unido e no Iêmen, e o copy trading não a suporta. Com 500x, um movimento de 0,2% contra você pode zerar a posição.",
    },
    {
      topic: "safety",
      q: "A MEXC é regulamentada?",
      a: "A MEXC não cita nenhuma licença nas próprias páginas e afirma que não tem licença de primeira linha nem autorização MiCA. A entidade contratante é a MEXC (Comoros) Ltd, registrada na União das Comores.",
    },
    {
      topic: "safety",
      q: "A MEXC está disponível nos EUA ou no Reino Unido?",
      a: "Não. Tanto os Estados Unidos quanto o Reino Unido são jurisdições proibidas no Contrato de Usuário da MEXC, assim como o Canadá, a França, a Holanda, Singapura e Hong Kong.",
    },
    {
      topic: "safety",
      q: "A MEXC publica prova de reservas?",
      a: "Sim. O snapshot de 9 de novembro de 2026 mostrou índices de reserva de 122,42% para USDT, 109,84% para USDC, 317,61% para BTC e 112,41% para ETH. A MEXC também mantém um Guardian Fund de US$ 100 milhões.",
    },
  ],
};
