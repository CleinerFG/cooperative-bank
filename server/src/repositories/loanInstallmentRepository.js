const { getDb } = require('../../config/db');

module.exports = {
  /**
   * @param {string} id
   */
  async getAllByLoanId(id) {
    const db = await getDb();
    // Base without use id for tests
    return db.loanInstallments;
  },
  /**
   * @param {string} id
   */
  async getPaymentById(id) {
    const db = await getDb();
    // Base without use id for tests
    return db.loanInstallmentPayments;
  },
};
