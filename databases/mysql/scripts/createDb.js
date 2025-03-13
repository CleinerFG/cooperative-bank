const { pool } = require('./config');
const log = require('../../utils/consoleLogger');

/**
 * @param {string} dbName
 * @param {boolean} dbExists
 * @param {boolean} dropExistingDb
 */
module.exports = async (dbName, dbExists, dropExistingDb) => {
  if (dropExistingDb && dbExists) {
    log.info(`-> Deleting existing DB...`);
    await pool.query(`DROP DATABASE ${dbName}`);
    log.info(`- DB deleted: : ${dbName}`);
  }

  log.info(`-> Creating DB...`);
  await pool.query(`CREATE DATABASE ${dbName}`);
  log.info(`- DB created: ${dbName}`)
};
