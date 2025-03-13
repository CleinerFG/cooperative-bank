const { pool } = require('./pool');
const { log } = require('../../utils/consoleLogger');

module.exports = async (dbName) => {
  const sql = `SET SESSION time_zone = '+00:00'`;

  log('section', 'Setting time zone...');
  await pool.query(`USE ${dbName}; ${sql}`);
  log('content', 'Time zone: +00:00');
};
