const { pool } = require('./pool');
const { log } = require('../../utils/consoleLogger');

/**
 * @param {string} dbName
 * @param {boolean} dbExists
 * @param {boolean} dropExistingDb
 */
module.exports = async (dbName, dbExists, dropExistingDb) => {
  if (dropExistingDb && dbExists) {
    log('section', `Deleting existing DB...`);
    await pool.query(`DROP DATABASE ${dbName}`);
    log('content', `DB deleted: : ${dbName}`);
  }

  log('section', `Creating DB...`);
  await pool.query(`CREATE DATABASE ${dbName}`);
  log('content', `DB created: ${dbName}`);
};
