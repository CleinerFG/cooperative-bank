export default {
  // Form
  selectOption: 'Select an option',
  login: 'Login',
  pass: 'Password',
  confirm: 'Confirm',
  email: 'Email',
  birthDate: 'Date of birth',

  // Errors message
  incorrectEmail: 'The email is incorrect',
  incorrectPassword: 'The password is incorrect',
  invalidPass: 'The password is invalid',
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
  enterNumOpPass: 'Enter the numeric operation password',
  authOperationSuccess: 'The operation was authorized',

  // Landing
  heroTitle: 'Cooperation that connects people',
  signUp: 'Sign Up',
  missionTitle:
    'The <strong class="title-emphasis">Cooperative Bank</strong> seeks to transform the way people connect financially',
  missionTxt:
    'Our mission is to create a collaborative banking system, where each customer is also a partner, joining forces to grow together and generate prosperity for all.',
  askFriendsLoans: 'Ask friends for loans',
  askFriendsLoansTxt1:
    'Use the Cooperative Bank to request loans from your friends and family.',
  askFriendsLoansTxt2: 'We provide an innovative way to borrow money.',
  askFriendsLoansTxt3:
    "You're in control! You decide from whom you want to borrow.",
  investMoney: 'Invest your money',
  investMoneyTxt1:
    'Investing in the Cooperative Bank is simple and accessible.',
  investMoneyTxt2: 'With just a few clicks, you can start growing your money.',
  investMoneyTxt3: 'All of this is free of administrative fees.',
  fastSecTransfer: 'Fast and secure transfers',
  fastSecTransferTxt1: 'Make your transactions quickly and easily.',
  fastSecTransferTxt2: 'All in just a few seconds and with complete security.',
  contactUs: 'Contact us',
  development: 'Development',
  devBy: 'By Cleiner Furlani',

  // Login
  accessAccount: 'Access your Cooperative Bank Account',
  iNotCustomer: 'I am not a customer',

  // Register
  register: 'Register',
  joinBank: 'Join the Cooperative Bank',
  iCustomer: 'I am a customer',
  name: 'Name',

  // Register - Pass errors
  must8CharsLong: 'The password must be at least 8 characters long',
  mustLowercaseChar: 'The password must contain at least one lowercase letter',
  mustUppercaseChar: 'The password must contain at least one uppercase letter',
  mustNumber: 'The password must contain at least one number',
  mustSpecialChar: 'The password must contain at least one special character',
  canNotBlankSpace: 'The password cannot have blank space',
  canNotSeqPattern: (value) =>
    `The password cannot have sequential pattern: ${value}`,
  canNotCharSeq: (value) =>
    `The password cannot have consecutive repetitions: ${value}`,
};
