const { getDb } = require('../../config/db');

module.exports = {
  /**
   * @param {string} cpf
   */
  async findUserByCpf(cpf) {
    const db = await getDb();
    return db.users.find((user) => user.cpf === cpf);
  },
};
