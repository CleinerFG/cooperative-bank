const installmentRepository = require('../repositories/loanInstallmentRepository');
const loanPaymentRepository = require('../repositories/loanPaymentRepository');

module.exports = {
  /**
   * @param {string} loanId
   */
  async getAllByLoanId(loanId) {
    return installmentRepository.findAllByLoanId(loanId);
  },
  /**
   * @param {string} installmentId
   */
  async getPaymentByInstallmentId(installmentId) {
    return loanPaymentRepository.findByInstallmentId(installmentId);
  },
};
