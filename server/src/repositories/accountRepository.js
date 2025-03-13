const { pool } = require('../../config/db/pool');

module.exports = {
  /**
   * @param {number} id
   */
  async findBalanceById(id) {
    const sqlQuery = `SELECT balance FROM accounts WHERE id = ?`;
    const result = await pool.query(sqlQuery, [id]);

    if (result[0].length) {
      return result[0][0].balance;
    }
    throw new Error('Invalid query');
  },
  /**
   * @param {number} id
   */
  async findDetailsById(id) {
    const sqlQuery = `
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
    const result = await pool.query(sqlQuery, [id]);

    if (result[0].length) {
      return result[0][0];
    }
    throw new Error('Invalid query');
  },
};
