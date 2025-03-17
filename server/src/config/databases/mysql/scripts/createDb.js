const { getConnection } = require('./poolConnection');
const checkDbExists = require('./checkDbExists');
const { ENV, MYSQL_DB_NAME_BY_ENV } = require('../../../constants');
const { log, logRow } = require('../../../../lib/utils/consoleLogger');

module.exports = async () => {
  const connection = await getConnection();

  const dbExists = await checkDbExists();
  const dropExistingDb = ENV !== 'production';

  if (dbExists && dropExistingDb) {
    log('section', `Deleting existing DB...`);
    await connection.query(`DROP DATABASE ${MYSQL_DB_NAME_BY_ENV}`);
    log('content', `DB deleted: : ${MYSQL_DB_NAME_BY_ENV}`);
    logRow('section');
  }

  log('section', `Creating DB...`);
  await connection.query(`CREATE DATABASE ${MYSQL_DB_NAME_BY_ENV}`);
  log('content', `DB created: ${MYSQL_DB_NAME_BY_ENV}`);
  logRow('section');
};
