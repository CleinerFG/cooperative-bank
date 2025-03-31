module.exports = {
  checkSameDebtorCreditor: (debtorUserId, creditorUserId) => {
    if (this.debtorUserId === this.creditorUserId) return false;
    return true;
  },
  requestCategoryValidator: (category) => {
    if (!['open', 'received'].includes(category)) {
      throw new Error('invalidLoanCategory');
    }
    return true;
  },

  loanCategoryValidator: (category) => {
    if (!['payable', 'receivable'].includes(category)) {
      throw new Error('invalidLoanRequestCategory');
    }
    return true;
  },
};
