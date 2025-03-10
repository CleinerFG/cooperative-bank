const { getDb } = require('../../config/db');

module.exports = {
  /**
   * @param {'open'|'received'} category
   */
  async getAllByCategory(category) {
    const db = await getDb();
    return db.loanRequests[category];
  },
  /**
   * @param {'open'|'received'} category
   * @param {string} id
   */
  async getDetailsByCategoryAndId(category, id) {
    const db = await getDb();
    return db.loanRequests.details[category].find(
      (request) => (request.id = id)
    );
  },
};
