const repository = require('../repositories/loanRequestRepository');
const {
  requestCategoryValidator,
} = require('../lib/helpers/loan/genericValidators');

module.exports = {
  /**
   * @param {'open'|'received'} category
   */
  async getAllByCategory(category) {
    requestCategoryValidator(category);
    return repository.findAllByCategory(category);
  },
  /**
   * @param {'open'|'received'} category
   * @param {string} id
   */
  async getDetailsByCategoryAndId(category, id) {
    requestCategoryValidator(category);
    return repository.findDetailsByCategoryAndId(category, id);
  },
};
