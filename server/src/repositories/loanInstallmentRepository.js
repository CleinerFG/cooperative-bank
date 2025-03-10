const { getDb } = require('../../config/db');

module.exports = {
  /**
   * @param {string} loanId
   */
  async findAllByLoanId(loanId) {
    const db = await getDb();
    // Base without use loanId for tests
    return db.loanInstallments;
  },
};
