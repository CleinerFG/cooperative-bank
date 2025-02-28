export default {
  // Form
  selectOption: 'Selecione uma opção',
  pass: 'Senha',
  confirm: 'Confirmar',

  // Errors message
  incorrectEmail: 'O email é incorreto',
  incorrectPassword: 'A senha é incorreta',
  fieldIsRequired: 'Este campo é obrigatório',
  invalidCpf: 'O CPF é inválido',
  invalidData: 'O dado é inválido',
  invalidEmail: 'O email deve ser uma string válida',
  notFoundUser: 'O usuário não foi encontrado',
  invalidCreditValue: (value) =>
    `O valor de crédito não pode ser menor que ${value}`,
  invalidRate: (value) =>
    `A taxa de juros não pode ser maior que ${value} a.m.`,
  notFoundInstallmentPay: 'A parcela não foi paga',

  // Generics
  seeDetails: 'Ver detalhes',
  status: 'Status',
  date: 'Data',
  dueDate: 'Data de vencimento',
  value: 'Valor',
  pay: 'Pagar',
  success: 'Sucesso',

  // Component - Notifications
  transferReceived: 'Transferência recebida',
  transferReceivedDesc: (value, sender) =>
    `Você recebeu uma transferência de ${value} de ${sender}`,
  loanStatusUp: 'Atualização de empréstimo',
  loanStatusUpDesc: (value, status) =>
    `Seu empréstimo de ${value} foi ${status}`,
  loanReqReceived: 'Solicitação de empréstimo recebida',
  loanReqReceivedDesc: (value) =>
    `Você recebeu uma solicitação de empréstimo de ${value}`,
  payReceived: 'Pagamento recebido',
  payReceivedDesc: (value, sender) => `${sender} enviou ${value}`,
  installmentDue: 'Parcela vencendo',
  installmentDueDesc: (value, date) =>
    `Você tem uma parcela que vence em ${date} no valor de ${value}`,

  // Component - Dashboard
  startDate: 'Data de início',
  endDate: 'Data de término',

  // Home page
  balance: 'Saldo',
  wallet: 'Carteira',
  loan: 'Empréstimo',
  investment: 'Investimento',
  transfer: 'Transferência',
  extract: 'Extrato',
  newRequest: 'Nova solicitação',
  requests: 'Solicitações',
  overview: 'Visão Geral',
  timeline: 'Linha do Tempo',
  search: 'Pesquisar',
  reports: 'Relatórios',

  // My account page
  myAccount: 'Minha conta',
  birthDate: 'Data de nascimento',
  cpf: 'CPF',
  email: 'email',
  registerDate: 'Data de registro',

  // Loan - New request
  newLoanRequest: 'Nova solicitação de empréstimo',
  takeOutLoan: 'Fazer um empréstimo',
  takeLoanInfo:
    'Para obter o empréstimo, o credor precisar acessar a conta dele e aceitar sua solicitação',
  request: 'Solicitar',
  searchCreditor: 'Procure um credor',
  deadline: 'Prazo',
  months: 'Meses',
  personalCredit: 'Crédito pessoal',
  autoCredit: 'Crédito automotivo',
  mortgageCredit: 'Crédito imobiliário',

  // Loan - Request
  requestsInfo:
    'Aqui você pode conferir todas as solicitações abertas e recebidas',
  activeRequests: 'Solicitações ativas',
  loanRequests: 'Solicitações de empréstimo',
  open: 'Abertas',
  received: 'Recebidas',
  requestDetails: 'Detalhes da solicitação',

  // Loan
  pending: 'Pendente',
  rejected: 'Rejeitada',
  accepted: 'Aceita',
  paid: 'Pago',
  auto: 'Automotivo',
  personal: 'Pessoal',
  mortgage: 'Imobiliário',
  startOn: 'Iniciado em',
  creditor: 'Credor',
  debtor: 'Devedor',
  creditValue: 'Valor do crédito',
  installment: 'Parcela',
  installments: 'Parcelas',
  modality: 'Modalidade',
  contractDate: 'Data do contrato',
  interestRatePm: 'Taxa de juros a.m.',
  totalAmount: 'Montante total',
  installmentValue: 'Valor da parcela',
  outstandingBalance: 'Saldo devedor',
  payProgress: 'Progresso do pagamento',
  payable: 'A pagar',
  receivable: 'A receber',
  payDetails: 'Detalhes do pagamento',

  // Loan - Overview
  overviewInfo:
    'Aqui você encontra todos seus empréstimos ativos, tanto os empréstimos a pagar quanto a receber',
  loanDetails: 'Detalhes do empréstimo',

  // Modal
  authOperation: 'Autorize a operação',
  enterNumTransPass: 'Insira a senha de transação numérica',
  authOperationSuccess: 'A operação foi autorizada',
};
