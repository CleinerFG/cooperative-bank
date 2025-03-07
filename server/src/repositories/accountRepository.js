const { getDb } = require('../../config/db');

module.exports = {
  async getBalance() {
    const db = await getDb();
    return db.account.balance;
  },
  async getDetails() {
    const db = await getDb();
    return db.account.details;
  },
};
