const repository = require('../repositories/loanRepository');
const { loanCategoryValidator } = require('../lib/helpers/loanValidators');

module.exports = {
  /**
   * @param {'payable'|'receivable'} category
   */
  async getAllByCategory(category) {
    loanCategoryValidator(category);
    return repository.findAllByCategory(category);
  },
  /**
   * @param {'payable'|'receivable'} category
   * @param {string} id
   */
  async getDetailsByCategoryAndId(category, id) {
    loanCategoryValidator(category);
    return repository.findDetailsByCategoryAndId(category, id);
  },
};
