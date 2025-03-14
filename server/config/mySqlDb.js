const mysql = require('mysql2/promise');
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DB_NAME_BY_ENV,
} = require('./constants');

const pool = mysql.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  port: MYSQL_PORT,
  database: MYSQL_DB_NAME_BY_ENV,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/**
 * @param  {...string} queries
 * @returns {Promise<[]>}
 */
const executeTransaction = async (...queries) => {
  const connection = await pool.getConnection();
  try {
    connection.beginTransaction();
    const results = [];
    for (const query of queries) {
      const [result] = await connection.execute(query);
      results.push(result);
    }
    await connection.commit();
    return results;
  } catch (e) {
    connection.rollback();
  } finally {
    connection.release();
  }
};

pool.on('connection', async (connection) => {
  await connection.promise().query("SET time_zone='+00:00'");
});

module.exports = { pool, executeTransaction };
