const { getDb } = require('../../config/db');

module.exports = {
  /**
   * @param {'open'|'received'} category
   */
  async getByCategory(category) {
    const db = await getDb();
    switch (category) {
      case 'open':
        return db.loanRequests.open;
      case 'received':
        return db.loanRequests.received;
      default:
        return null;
    }
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
