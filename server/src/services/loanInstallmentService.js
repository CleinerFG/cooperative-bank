const repository = require('../repositories/loanInstallmentRepository');
const { isString } = require('../lib/utils/validators');

module.exports = {
  /**
   * @param {string} id
   */
  async getAllByLoanId(id) {
    isString(id);
    return repository.getAllByLoanId(id);
  },
  /**
   * @param {string} id
   */
  async getPaymentById(id) {
    isString(id);
    return repository.getPaymentById(id);
  },
};
