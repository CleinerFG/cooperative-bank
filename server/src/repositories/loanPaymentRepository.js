const { getDb } = require('../../config/db');

module.exports = {
  /**
   * @param {string} installmentId
   */
  async findByInstallmentId(installmentId) {
    const db = await getDb();
    return db.loanInstallmentPayments.find(
      (payment) => payment.installmentId === installmentId
    );
  },
};
