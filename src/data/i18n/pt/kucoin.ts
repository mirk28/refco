import type { ExchangeText } from "../../types";

export const kucoin: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Campo “Referral Code (Optional)” na primeira etapa do cadastro",
    apply:
      "Digite-o no campo “Referral Code (Optional)” logo na primeira etapa do cadastro ou abra o link de cadastro desta página, que preenche o campo e o deixa bloqueado.",
    whereToEnter:
      "A KuCoin pede o código de indicação já na primeira etapa do cadastro, junto com o seu e-mail ou número de telefone – tanto no site quanto no aplicativo. O campo se chama “Referral Code (Optional)”. O link desta página abre o cadastro da KuCoin com o QBSS4BT7 já preenchido e o campo bloqueado, então não tem como errar. O guia de cadastro da KuCoin acrescenta que, se um link não preencher o código, você pode digitá-lo manualmente.",
    afterSignupShort: "Mediante solicitação – “Link Referrer” na Central de Ajuda (condições não publicadas)",
    afterSignup:
      "É possível. A Central de Ajuda da KuCoin oferece uma solicitação de autoatendimento chamada “Link Referrer” (“Submit a request to add a referrer manually”, ou seja, um pedido para vincular o indicador manualmente) e outra equivalente para desvincular um indicador. As duas exigem login, e a KuCoin não divulga as condições nem um prazo, por isso a aprovação não é garantida. Inserir o código no cadastro continua sendo o caminho seguro.",
    inviteeReward:
      "Segundo a página de indicação da KuCoin, os amigos convidados “stand to receive cashback and exclusive newcomer rewards” – ou seja, podem receber cashback e recompensas exclusivas para novatos. O cashback é uma parte das suas próprias taxas de negociação: quem indica pode definir uma taxa de cashback exclusiva para os convidados, limitada à taxa de comissão que ele tem no momento, por isso não existe um percentual fixo. O vínculo de indicação vale por 365 dias a partir do seu cadastro. Além disso, a KuCoin anuncia um bônus de até 10.650 USDT para novos usuários.",
    guide: [
      "O programa de indicação da KuCoin paga a quem indica uma comissão sobre as taxas de negociação dos convidados e permite que o indicador devolva parte dela ao usuário convidado em forma de cashback. A KuCoin não fixa um percentual de cashback – vale a taxa que o indicador configurou, limitada à taxa de comissão dele próprio.",
      "A indicação abrange as operações Spot (que, na KuCoin, incluem o mercado à vista, a margem e os robôs de trading), ETFs e operações de Futuros. Ordens enviadas pela API não contam. O vínculo dura 365 dias após o cadastro e termina antes se você atingir o VIP 3. As comissões são liquidadas diariamente na moeda em que a taxa foi paga.",
      "A KuCoin informa que o programa de indicação não está disponível para residentes da Bélgica, da França, da Holanda e de outros países ou regiões onde seus serviços são restritos.",
    ],
  },
  signup: {
    methods: ["um endereço de e-mail", "um número de telefone", "Telegram", "Google", "Apple"],
    steps: [
      {
        title: "Abra a página de cadastro da KuCoin",
        text: "Use o botão de cadastro desta página. A KuCoin abre a tela “Welcome to KuCoin” com o código de indicação QBSS4BT7 já preenchido no campo “Referral Code (Optional)”.",
      },
      {
        title: "Informe seu e-mail ou número de telefone",
        text: "Ou continue com Telegram, Google ou Apple. O código de indicação fica nesta mesma primeira etapa.",
      },
      {
        title: "Aceite os Termos de Uso",
        text: "Marque a caixa dos Termos de Uso e da Política de Privacidade e selecione “Create Account and Claim Reward”.",
      },
      {
        title: "Digite o código de verificação",
        text: "A KuCoin envia um código para o seu e-mail ou telefone para confirmar que ele é mesmo seu.",
      },
      {
        title: "Crie uma senha de login",
        text: "Escolha sua senha e selecione “Confirm” – pronto, a conta está criada.",
      },
      {
        title: "Verifique sua identidade",
        text: "Escolha seu país e o tipo de documento, envie fotos do documento e conclua a verificação facial. Novos usuários precisam dessa etapa para usar os produtos da KuCoin.",
      },
    ],
    kycShort: "Obrigatória para novos usuários",
    kyc: "Sim. Desde 31 de agosto de 2023, novos usuários precisam concluir a verificação de identidade para usar os produtos e serviços da KuCoin. A verificação consiste em escolher o país e o tipo de documento, enviar fotos do documento e passar pelo reconhecimento facial, e cada pessoa só pode verificar uma única conta na KuCoin. Contas antigas que nunca foram verificadas ainda podem vender cripto, fechar posições de Futuros e de margem, resgatar produtos Earn e sacar, mas não podem fazer depósitos.",
    documents:
      "A KuCoin aceita documento de identidade, carteira de motorista, passaporte ou autorização de residência, seguidos da verificação facial.",
    minAge: "18 anos (Termos de Uso da KuCoin)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Pagar as taxas em KCS dá 20% de desconto, que a KuCoin aplica às negociações Spot e com margem e credita como reembolso; a própria KuCoin avisa que o desconto efetivo pode sair um pouco menor. Níveis VIP mais altos reduzem as taxas em até 75%.",
  extraFeeMarkets: ["Spot – tokens Classe B", "Spot – tokens Classe C"],
  sourceLabels: [
    "KuCoin: Como se cadastrar (site e aplicativo)",
    "KuCoin: Programa de indicação e regras",
    "KuCoin: Autoatendimento da Central de Ajuda (Link Referrer)",
    "KuCoin: Rewards Hub (tarefas para novos usuários)",
    "KuCoin: Perguntas frequentes do Rewards Hub",
    "KuCoin: Tabela de taxas por nível VIP",
    "KuCoin: Pagamento de taxas com KCS",
    "KuCoin: Verificação de identidade e limites da conta",
    "KuCoin: Alavancagem de Futuros por tamanho de posição",
    "KuCoin: Taxas dos robôs de trading",
    "KuCoin: Termos de Uso (locais restritos, idade mínima)",
    "KuCoin: Sobre nós",
    "KuCoin: Prova de reservas",
    "KuCoin EU: Licença MiCAR da KuCoin EU Exchange GmbH",
    "KuCoin: Comunicado sobre o acordo com o Departamento de Justiça dos EUA",
    "KuCoin: Carta do CEO sobre o incidente de segurança de 2020",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margem", "Futuros", "Robôs de trading", "ETFs"],
  bonusHeadline: "Bônus de até 10.650 USDT para novos usuários",
  benefits: [
    "A página de cadastro da KuCoin anuncia um bônus de até 10.650 USDT para novos usuários, liberado por meio de tarefas no Rewards Hub",
    "Cashback sobre as suas taxas de negociação, se o indicador tiver definido uma taxa – o programa da KuCoin permite isso por 365 dias",
    "Uma única indicação abrange Spot, margem, Futuros, robôs de trading e ETFs",
    "Os robôs de trading são gratuitos; você paga só a taxa de negociação do robô",
  ],
  benefitNote:
    "Os 10.650 USDT são o número de destaque da própria KuCoin e um valor máximo: o Rewards Hub distribui esse total em pacotes de cupons, fundos de teste, vouchers de taxa e pequenas recompensas em dinheiro pelo cadastro, pela verificação de identidade, pelo primeiro depósito, pela primeira operação e por tarefas por tempo limitado. As tarefas por tempo limitado precisam ser concluídas em até 7 dias após o cadastro, e as recompensas valem por 30 dias. Pares de stablecoins e operações com taxa zero não contam, e market makers e usuários institucionais ficam de fora. O FAQ do Rewards Hub da KuCoin ainda menciona um teto antigo de 3.200 USDT.",
  headquarters: "Não informada pela KuCoin (Termos de Uso regidos pelas leis das Ilhas Turcas e Caicos)",
  regulation: "Licença MiCAR por meio da KuCoin EU Exchange GmbH, Viena (EEE, exceto Malta); registro na AUSTRAC na Austrália",
  users: "45M+ usuários (segundo a KuCoin)",
  assets: "1.000+ tokens listados, 1.300+ pares de negociação",
  maxLeverage: "Até 125x (na menor faixa de posição)",
  feeNote:
    "A KuCoin divide os tokens em classes: a taxa Spot acima vale para tokens Classe A, enquanto os tokens Classe B e Classe C custam mais. A classe depende da moeda base do par.",
  products: ["Futuros com margem em USDT e em cripto", "Spot", "Margem", "Robôs de trading", "Copy trading", "Earn", "KuCoin Web3 Wallet"],
  tagline: "Altcoins e robôs de trading para todo mundo",
  quickAnswer:
    "O código de indicação da KuCoin é QBSS4BT7. Ele vai no campo “Referral Code (Optional)”, na primeira etapa do cadastro; o botão desta página abre a KuCoin com o código já preenchido e bloqueado. A indicação vale para Spot, margem, Futuros e robôs de trading por 365 dias, e a KuCoin anuncia um bônus de até 10.650 USDT para novos usuários. Se você esquecer o código, a Central de Ajuda da KuCoin tem a solicitação “Link Referrer”, mas as condições dela não são públicas.",
  about: [
    "A KuCoin foi lançada no terceiro trimestre de 2017 e afirma atender hoje mais de 45 milhões de usuários em mais de 200 países e regiões, com mais de 1.000 tokens listados. A corretora conquistou seu público listando altcoins cedo e facilitando o trading automatizado: os robôs de trading não custam nada além das próprias taxas de negociação.",
    "Entre os derivativos da KuCoin estão Futuros com margem em USDT e em cripto, com alavancagem máxima de 125x na menor faixa de posição – o limite cai para 100x na faixa seguinte e continua caindo à medida que a posição cresce. A exchange também oferece negociação com margem, copy trading, produtos Earn e uma carteira Web3, e o token KCS garante 20% de desconto nas taxas de Spot e de margem.",
    "Em 27 de janeiro de 2025, a KuCoin anunciou um acordo com o Departamento de Justiça dos EUA; ela já havia encerrado as contas de usuários dos EUA a partir de 23 de janeiro de 2025. No EEE, o grupo atua por meio da KuCoin EU Exchange GmbH, em Viena, prestadora de serviços de criptoativos licenciada sob a MiCAR e supervisionada pela FMA da Áustria. Depois de um ataque hacker em 2020 que atingiu cerca de US$ 285 milhões, a KuCoin afirma que ela e seu fundo de seguro cobriram os cerca de US$ 45,55 milhões que não puderam ser recuperados e que nenhum usuário teve prejuízo.",
  ],
  highlights: [
    { title: "Robôs de trading gratuitos", text: "Os robôs em si não custam nada – só a taxa de negociação do robô." },
    { title: "Código travado", text: "O link de cadastro preenche o QBSS4BT7 e bloqueia o campo." },
    { title: "Reservas acima de 100%", text: "BTC 112%, ETH 115%, USDT 110% em 31 de outubro de 2026." },
  ],
  pros: [
    "Trading automatizado fácil para iniciantes, com robôs gratuitos",
    "Ampla seleção de altcoins, com mais de 1.000 tokens listados",
    "Taxas padrão baixas em Futuros: 0,02% maker / 0,06% taker",
    "Prova de reservas acima de 100% para BTC, ETH, USDT e USDC",
  ],
  cons: [
    "Indisponível nos EUA, na França, na Holanda, em Singapura e em partes do Canadá",
    "As taxas Spot sobem para 0,2% e 0,3% nos tokens Classe B e Classe C",
    "As condições para adicionar um indicador depois do cadastro não são publicadas",
    "Volume de Futuros menor que o das cinco maiores corretoras",
  ],
  bestFor: ["Traders que querem automatizar com robôs", "Entusiastas de altcoins", "Traders de Futuros de nível intermediário"],
  signupTip:
    "Conclua a verificação de identidade logo após o cadastro – sem ela, novos usuários não conseguem usar a KuCoin – e comece as tarefas por tempo limitado do Rewards Hub em até 7 dias após se cadastrar.",
  safety:
    "A KuCoin publica relatórios de prova de reservas com regularidade. Os dados de 31 de outubro de 2026 mostravam índices de reserva de 112% para BTC, 115% para ETH, 110% para USDT e 127% para USDC, com relatório de auditoria datado de 9 de novembro de 2026. Sobre o ataque hacker de 2020, a KuCoin afirma que nenhum usuário teve prejuízo. Robôs automatizam a execução, não a gestão de risco – defina sempre uma condição de parada e mantenha na corretora apenas o capital destinado ao trading.",
  restricted:
    "Os Termos de Uso da KuCoin (atualizados em 29 de outubro de 2026) listam como locais restritos: os Estados Unidos, incluindo seus territórios, Singapura, a China continental e Hong Kong, a Malásia, o Cazaquistão, o Uzbequistão, a Rússia, Belarus, as províncias canadenses de Ontário e Colúmbia Britânica, a França, a Holanda e as regiões da Crimeia, Donetsk, Luhansk, Zaporizhzhia e Kherson. É proibido usar VPN para contornar a restrição.",
  faqs: [
    {
      topic: "referral",
      q: "O código de indicação QBSS4BT7 da KuCoin funciona?",
      a: "Sim. Em 16 de novembro de 2026, o link desta página abriu o cadastro da KuCoin com o QBSS4BT7 preenchido e bloqueado no campo “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Quanto tempo dura a indicação na KuCoin?",
      a: "365 dias a partir do seu cadastro. Pelas regras da KuCoin, as comissões – e, com elas, qualquer cashback – também param se você atingir o nível VIP 3.",
    },
    {
      topic: "referral",
      q: "Quanto de cashback eu recebo com um código de indicação da KuCoin?",
      a: "A KuCoin não define uma taxa fixa. Quem indica pode definir uma taxa de cashback exclusiva para os convidados, até o limite da própria taxa de comissão, e o cashback é pago sobre operações Spot, de margem, com robôs de trading, de ETFs e de Futuros. Operações via API não contam.",
    },
    {
      topic: "referral",
      q: "O que significa “Link Referrer” na KuCoin?",
      a: "É uma solicitação de autoatendimento na Central de Ajuda da KuCoin, descrita como “Submit a request to add a referrer manually” (um pedido para adicionar o indicador manualmente). É o caminho para contas criadas sem código. Você precisa estar logado para usá-la, e a KuCoin não divulga as condições.",
    },
    {
      topic: "referral",
      q: "Em quais países o programa de indicação da KuCoin não está disponível?",
      a: "A KuCoin informa que o programa não está disponível para residentes da Bélgica, da França, da Holanda e de outros países ou regiões onde seus serviços são restritos.",
    },
    {
      topic: "signup",
      q: "Dá para se cadastrar na KuCoin com Google, Apple ou Telegram?",
      a: "Sim. A página de cadastro da KuCoin mostra a opção “Or continue with” (ou continuar com) Telegram, Google e Apple abaixo do campo de e-mail e telefone.",
    },
    {
      topic: "signup",
      q: "Dá para usar a KuCoin sem KYC?",
      a: "Não, se você for um novo usuário. Desde 31 de agosto de 2023, novos usuários precisam concluir a verificação de identidade para usar os produtos e serviços da KuCoin.",
    },
    {
      topic: "signup",
      q: "Posso ter duas contas na KuCoin?",
      a: "Duas contas verificadas, não. A KuCoin informa que cada pessoa só pode verificar uma única conta na KuCoin.",
    },
    {
      topic: "bonus",
      q: "Qual é o bônus de boas-vindas da KuCoin?",
      a: "A página inicial e a página de cadastro da KuCoin anunciam até 10.650 USDT para novos usuários. O valor é pago por meio das tarefas para novos usuários no Rewards Hub – cadastro, verificação de identidade, primeiro depósito, primeira operação e tarefas por tempo limitado – em pacotes de cupons, fundos de teste, vouchers de taxa e pequenas recompensas em dinheiro. A tarefa de cadastro aparece como 400 USDT Bonus Pack and Cash Reward, um pacote de bônus com recompensa em dinheiro.",
    },
    {
      topic: "bonus",
      q: "Quanto tempo tenho para resgatar as recompensas de novo usuário da KuCoin?",
      a: "As tarefas de desafio por tempo limitado precisam ser concluídas em até 7 dias após o cadastro, e a KuCoin informa que as recompensas valem por 30 dias antes de expirar.",
    },
    {
      topic: "bonus",
      q: "Quais operações não contam para as tarefas de novo usuário da KuCoin?",
      a: "Operações em pares de stablecoins e operações com taxa zero não contam. Market makers e usuários institucionais não podem participar de forma alguma.",
    },
    {
      topic: "fees",
      q: "Quais são as taxas de Futuros da KuCoin?",
      a: "Usuários VIP 0 pagam 0,02% maker e 0,06% taker em Futuros. O robô Futures Grid usa uma taxa de negociação fixa de 0,06%.",
    },
    {
      topic: "fees",
      q: "Qual é o desconto do KCS na KuCoin?",
      a: "20%. A KuCoin aplica o desconto às negociações Spot e com margem quando você paga as taxas em KCS e o credita como reembolso; o desconto efetivo pode ser um pouco menor.",
    },
    {
      topic: "fees",
      q: "Os robôs de trading da KuCoin são gratuitos?",
      a: "Sim, a KuCoin informa que os robôs em si são gratuitos. As operações seguem uma regra de taxas própria para robôs: os robôs Spot têm 20% de desconto sobre a taxa maker e taker do VIP 0, o robô Futures Grid paga 0,06% fixos, e deduções com KCS e níveis VIP não se aplicam.",
    },
    {
      topic: "fees",
      q: "Qual é a alavancagem máxima na KuCoin?",
      a: "125x para contas verificadas na menor faixa de posição. Na KuCoin, a alavancagem de Futuros é escalonada pelo tamanho da posição – a faixa seguinte é limitada a 100x.",
    },
    {
      topic: "safety",
      q: "A KuCoin está disponível nos Estados Unidos?",
      a: "Não. Os Estados Unidos são um local restrito nos Termos de Uso da KuCoin, e a KuCoin encerrou as contas de usuários dos EUA a partir de 23 de janeiro de 2025.",
    },
    {
      topic: "safety",
      q: "A KuCoin é regulamentada na Europa?",
      a: "A KuCoin EU Exchange GmbH, em Viena, é uma prestadora de serviços de criptoativos licenciada sob a MiCAR e supervisionada pela Autoridade dos Mercados Financeiros da Áustria. Ela atende o EEE, exceto Malta.",
    },
    {
      topic: "safety",
      q: "A KuCoin já foi hackeada?",
      a: "Sim, em 2020. Cerca de US$ 285 milhões foram afetados. A KuCoin afirma que ela e seu fundo de seguro cobriram os cerca de US$ 45,55 milhões (16%) que não puderam ser recuperados e que nenhum usuário teve prejuízo.",
    },
  ],
};
