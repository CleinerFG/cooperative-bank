const { pool } = require('./config');
const log = require('../../utils/consoleLogger');

/**
 * @param {string} dbName
 * @param {boolean} dropExistingDb
 */
module.exports = async (dbName, dropExistingDb) => {
  if (dropExistingDb) {
    log.info(`- Deleting existing database: ${dbName}`);
    await pool.query(`DROP DATABASE IF EXISTS ${dbName}`);
  }

  log.info(`- Creating database: ${dbName}`);
  await pool.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
};
