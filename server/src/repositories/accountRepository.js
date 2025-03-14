const { pool: db } = require('../../config/mySqlDb');

module.exports = {
  /**
   * @param {number} id
   */
  async findBalanceById(id) {
    const query = `SELECT balance FROM accounts WHERE id = ?`;
    const [rows] = await db.execute(query, [id]);
    console.log(rows[0]);

    return rows[0].balance;
  },
  /**
   * @param {number} id
   */
  async findDetailsById(id) {
    const query = `
    SELECT 
      users.full_name AS name,
      users.birth,
      users.cpf,
      accounts.email,
      accounts.created_at AS registration
    FROM accounts
    INNER JOIN users on
      accounts.user_id = users.id
    WHERE accounts.id = 6
    `;
    const [rows] = await db.execute(query, [id]);
    return rows[0];
  },
};
