const repository = require('../repositories/loanRequestRepository');
const { isString } = require('../lib/utils/validators');
const { requestCategoryIsValid } = require('../lib/helpers/loanValidators');

module.exports = {
  /**
   * @param {'open'|'received'} category
   */
  async getAllByCategory(category) {
    requestCategoryIsValid(category);
    return repository.getAllByCategory(category);
  },
  /**
   * @param {'open'|'received'} category
   * @param {string} id
   */
  async getDetailsByCategoryAndId(category, id) {
    requestCategoryIsValid(category);
    isString(id);
    return repository.getDetailsByCategoryAndId(category, id);
  },
};
