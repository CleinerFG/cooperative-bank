const { getDb } = require('../../config/db');

module.exports = {
  /**
   * @param {'payable'|'receivable'} category
   */
  async getAllByCategory(category) {
    const db = await getDb();
    return db.loan[category];
  },
  /**
   * @param {'payable'|'receivable'} category
   * @param {string} id
   */
  async getDetailsByCategoryAndId(category, id) {
    const db = await getDb();
    return db.loan.details[category].find((loan) => (loan.id = id));
  },
};
