const repository = require('../repositories/loanRepository');
const { isString } = require('../lib/utils/validators');
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
    isString(id);
    return repository.findDetailsByCategoryAndId(category, id);
  },
};
