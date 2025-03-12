const {
  ENV,
  MYSQL_DB_NAME_DEV,
  MYSQL_DB_NAME_PROD,
} = require('../constants.js');

const { pool } = require('../mysql/scripts/config.js');
const createDb = require('../mysql/scripts/createDb.js');
const createTables = require('../mysql/scripts/createTables.js');

const log = require('../utils/consoleLogger.js');
const displayErrors = require('../utils/displayErrors.js');

const dbName = ENV === 'development' ? MYSQL_DB_NAME_DEV : MYSQL_DB_NAME_PROD;
const dropExistingDb = ENV === 'development';

module.exports = async () => {
  try {
    log.info('[DB Setup - Mysql] Started');
    await createDb(dbName, dropExistingDb);
    await createTables(dbName);
  } catch (e) {
    log.fatal('- Setting database error!');
    displayErrors(e);
  } finally {
    await pool.end();
    log.info('- Pool connection closed');
    log.info('[DB Setup - Mysql] Finished');
  }
};
