const { getDb } = require('../../config/db');

module.exports = {
  async findAll() {
    const db = await getDb();
    return db.notifications;
  },
};
