const notificationCategoryMap = {
  transfer: (sender, value) => ({
    title: 'Transfer received',
    desc: `You received a transfer of ${value} from ${sender}`,
  }),
  loanStatus: (value, status) => ({
    title: `Loan ${status}`,
    desc: `Your loan of ${value} has been ${status}`,
  }),
  loanRequest: (value) => ({
    title: `Loan request received`,
    desc: `You received a loan request of ${value}`,
  }),
  payment: (sender, value) => ({
    title: 'You received a payment',
    desc: `${sender} sent ${value}`,
  }),
  installment: (value, date) => ({
    title: 'Installment due soon',
    desc: `You have an installment due on ${date} in the amount of ${value}`,
  }),
};
