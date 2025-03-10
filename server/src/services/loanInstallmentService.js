const installmentRepository = require('../repositories/loanInstallmentRepository');
const loanPaymentRepository = require('../repositories/loanPaymentRepository');
const { isString } = require('../lib/utils/validators');

module.exports = {
  /**
   * @param {string} loanId
   */
  async getAllByLoanId(loanId) {
    isString(loanId);
    return installmentRepository.findAllByLoanId(loanId);
  },
  /**
   * @param {string} installmentId
   */
  async getPaymentByInstallmentId(installmentId) {
    isString(installmentId);
    return loanPaymentRepository.findByInstallmentId(installmentId);
  },
};
