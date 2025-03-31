module.exports = {
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
