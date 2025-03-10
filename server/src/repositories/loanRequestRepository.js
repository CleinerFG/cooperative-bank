const { getDb } = require('../../config/db');

module.exports = {
  /**
   * @param {'open'|'received'} category
   */
  async findAllByCategory(category) {
    const db = await getDb();
    return db.loanRequests[category];
  },
  /**
   * @param {'open'|'received'} category
   * @param {string} id
   */
  async findDetailsByCategoryAndId(category, id) {
    const db = await getDb();
    return db.loanRequests.details[category].find(
      (request) => (request.id === id)
    );
  },
};
