export default {
  // Form
  selectOption: 'Select an option',

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

  // Page Loan - New request
  newLoanRequest: 'New loan request',
  takeOutLoan: 'Take out a loan',
  takeLoanInfo:
    'To obtain the loan, the creditor needs to access their account and accept your request',
  request: 'Request',
  searchCreditor: 'Search for a creditor',
  deadline: 'Deadline',
  months: 'Months',
  modality: 'Modality',
  personalCredit: 'Personal credit',
  autoCredit: 'Auto credit',
  mortgageCredit: 'Mortgage credit',
  interestRatePm: 'Interest rate p.m.',

  // Page Loan - Request
  requestsInfo:
    'Here you can check all open and received requests, along with their details',
  activeRequests: 'Active requests',
  loanRequests: 'Loan requests',
  open: 'Open',
  received: 'Received',

  // Loan
  pending: 'Pending',
  rejected: 'Rejected',
  accepted: 'Accepted',
  auto: 'Auto',
  personal: 'Personal',
  mortgage: 'Mortgage',
  startOn: 'Started on',
  creditor: 'Creditor',
  debtor: 'Debtor',
  creditValue: 'Credit value',
};
