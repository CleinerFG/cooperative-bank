export default {
  // Form
  selectOption: 'Select an option',
  pass: 'Password',
  confirm: 'Confirm',

  // Errors message
  incorrectEmail: 'The email is incorrect',
  incorrectPassword: 'The password is incorrect',
  fieldIsRequired: 'This field is required',
  invalidCpf: 'The CPF is invalid',
  invalidData: 'The data is invalid',
  invalidEmail: 'The email must be a valid string',
  notFoundUser: 'The user was not found',
  invalidCreditValue: (value) =>
    `The credit value cannot be less than ${value}`,
  invalidRate: (value) =>
    `The interest rate cannot be greater than ${value} p.m.`,
  notFoundInstallmentPay: 'The installment has not been paid',

  // Generics
  seeDetails: 'See details',
  status: 'Status',
  date: 'Date',
  dueDate: 'Due date',
  value: 'Value',
  pay: 'Pay',
  success: 'Success',

  // Component - Notifications
  transferReceived: 'Transfer received',
  transferReceivedDesc: (value, sender) =>
    `You received a transfer of ${value} from ${sender}`,
  loanStatusUp: 'Loan status update',
  loanStatusUpDesc: (value, status) =>
    `Your loan of ${value} has been ${status}`,
  loanReqReceived: 'Loan request received',
  loanReqReceivedDesc: (value) => `You received a loan request of ${value}`,
  payReceived: 'Payment received',
  payReceivedDesc: (value, sender) => `${sender} sent ${value}`,
  installmentDue: 'Installment due soon',
  installmentDueDesc: (value, date) =>
    `You have an installment due on ${date} in the amount of ${value}`,

  // Component - Dashboard
  startDate: 'Start date',
  endDate: 'End date',

  // Home page
  balance: 'Balance',
  wallet: 'Wallet',
  loan: 'Loan',
  investment: 'Investment',
  transfer: 'Transfer',
  extract: 'Extract',
  newRequest: 'New request',
  requests: 'Requests',
  overview: 'Overview',
  timeline: 'Timeline',
  search: 'Search',
  reports: 'Reports',

  // My account page
  myAccount: 'My account',
  birthDate: 'Date of birth',
  cpf: 'CPF',
  email: 'email',
  registerDate: 'Regitration date',

  // Loan - New request
  newLoanRequest: 'New loan request',
  takeOutLoan: 'Take out a loan',
  takeLoanInfo:
    'To obtain the loan, the creditor needs to access their account and accept your request',
  request: 'Request',
  searchCreditor: 'Search for a creditor',
  deadline: 'Deadline',
  months: 'Months',
  personalCredit: 'Personal credit',
  autoCredit: 'Auto credit',
  mortgageCredit: 'Mortgage credit',

  // Loan - Request
  requestsInfo: 'Here you can check all open and received requests',
  activeRequests: 'Active requests',
  loanRequests: 'Loan requests',
  open: 'Open',
  received: 'Received',
  requestDetails: 'Request details',

  // Loan
  pending: 'Pending',
  rejected: 'Rejected',
  accepted: 'Accepted',
  paid: 'Paid',
  auto: 'Auto',
  personal: 'Personal',
  mortgage: 'Mortgage',
  startOn: 'Started on',
  creditor: 'Creditor',
  debtor: 'Debtor',
  creditValue: 'Credit value',
  installment: 'Installment',
  installments: 'Installments',
  modality: 'Modality',
  contractDate: 'Contract date',
  interestRatePm: 'Interest rate p.m.',
  totalAmount: 'Total amount',
  installmentValue: 'Installment value',
  outstandingBalance: 'Outstanding balance',
  payProgress: 'Payment progress',
  payable: 'Payable',
  receivable: 'Receivable',
  payDetails: 'Payment details',

  // Loan - Overview
  overviewInfo:
    'Here you will find all your active loans, both loans payable and receivable',
  loanDetails: 'Loan details',

  // Modal
  authOperation: 'Authorize operation',
  enterNumTransPass: 'Enter the numeric transaction password',
  authOperationSuccess: 'The operation was authorized',
};
