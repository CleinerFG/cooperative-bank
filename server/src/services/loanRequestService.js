const repository = require('../repositories/loanRequestRepository');
const InvalidLoanRequestCategoryError = require('../core/errors/loans/InvalidLoanRequestCategoryError');
const MustBeStringError = require('../core/errors/MustBeStringError');

const categoryIsValid = (category) => {
  if (!['open', 'received'].includes(category)) {
    throw new InvalidLoanRequestCategoryError();
  }
};

module.exports = {
  /**
   * @param {'open'|'received'} category
   */
  async getByCategory(category) {
    categoryIsValid(category);
    return repository.getByCategory(category);
  },
  /**
   * @param {'open'|'received'} category
   * @param {string} id
   */
  async getDetailsByCategoryAndId(category, id) {
    categoryIsValid(category);
    if (typeof id !== 'string') {
      throw new MustBeStringError('id');
    }
    return repository.getDetailsByCategoryAndId(category, id);
  },
};
