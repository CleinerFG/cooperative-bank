const repository = require('../repositories/loanRepository');
const { loanCategoryIsValid } = require('../lib/helpers/loanValidators');

module.exports = {
  /**
   * @param {'payable'|'receivable'} category
   */
  async getAllByCategory(category) {
    loanCategoryIsValid(category);
    return repository.findAllByCategory(category);
  },
  /**
   * @param {'payable'|'receivable'} category
   * @param {string} id
   */
  async getDetailsByCategoryAndId(category, id) {
    loanCategoryIsValid(category);
    return repository.findDetailsByCategoryAndId(category, id);
  },
};
