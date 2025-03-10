const { getDb } = require('../../config/db');

module.exports = {
  async findBalance() {
    const db = await getDb();
    return db.account.balance;
  },
  async findDetails() {
    const db = await getDb();
    return db.account.details;
  },
};
