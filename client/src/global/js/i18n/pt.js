export default {
  // Form
  selectOption: 'Selecione uma opção',

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

  // Page Loan - New request
  newLoanRequest: 'Nova solicitação de empréstimo',
  takeOutLoan: 'Fazer um empréstimo',
  takeLoanInfo:
    'Para obter o empréstimo, o credor precisar acessar a conta dele e aceitar sua solicitação',
  request: 'Solicitar',
  searchCreditor: 'Procure um credor',
  deadline: 'Prazo',
  months: 'Meses',
  modality: 'Modalidade',
  personalCredit: 'Crédito pessoal',
  autoCredit: 'Crédito automotivo',
  mortgageCredit: 'Crédito imobiliário',
  interestRatePm: 'Taxa de juros a.m.',

  // Page Loan - Request
  requestsInfo:
    'Aqui você pode conferir todas as solicitações abertas e recebidas, juntamente de seus detalhes',
  activeRequests: 'Solicitações ativas',
  loanRequests: 'Solicitações de empréstimo',
  open: 'Abertas',
  received: 'Recebidas',

  // Loan
  pending: 'Pendente',
  rejected: 'Rejeitada',
  accepted: 'Aceita',
  auto: 'Automotivo',
  personal: 'Pessoal',
  mortgage: 'Imobiliário',
  startOn: 'Iniciado em',
  creditor: 'Credor',
  debtor: 'Devedor',
  creditValue: 'Valor do crédito',
};
