const repository = require('../repositories/loanRequestRepository');
const { requestCategoryIsValid } = require('../lib/helpers/loanValidators');

module.exports = {
  /**
   * @param {'open'|'received'} category
   */
  async getAllByCategory(category) {
    requestCategoryIsValid(category);
    return repository.findAllByCategory(category);
  },
  /**
   * @param {'open'|'received'} category
   * @param {string} id
   */
  async getDetailsByCategoryAndId(category, id) {
    requestCategoryIsValid(category);
    return repository.findDetailsByCategoryAndId(category, id);
  },
};
