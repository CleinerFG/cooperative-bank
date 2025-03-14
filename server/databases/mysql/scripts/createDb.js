const { getConnection } = require('./config');
const { MYSQL_DB_NAME_BY_ENV } = require('../../../config/constants');
const { log } = require('../../utils/consoleLogger');

/**
 * @param {boolean} dbExists
 * @param {boolean} dropExistingDb
 */
module.exports = async (dbExists, dropExistingDb) => {
  const connection = await getConnection();

  if (dropExistingDb && dbExists) {
    log('section', `Deleting existing DB...`);
    await connection.query(`DROP DATABASE ${MYSQL_DB_NAME_BY_ENV}`);
    log('content', `DB deleted: : ${MYSQL_DB_NAME_BY_ENV}`);
  }

  log('section', `Creating DB...`);
  await connection.query(`CREATE DATABASE ${MYSQL_DB_NAME_BY_ENV}`);
  log('content', `DB created: ${MYSQL_DB_NAME_BY_ENV}`);

  log('section', `Set DB in connection...`);
  await connection.query(`USE ${MYSQL_DB_NAME_BY_ENV}`);
  log('content', `DB in connection: ${MYSQL_DB_NAME_BY_ENV}`);
};
