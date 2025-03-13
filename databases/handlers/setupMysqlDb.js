const {
  ENV,
  MYSQL_DB_NAME_DEV,
  MYSQL_DB_NAME_PROD,
} = require('../constants.js');

const { pool } = require('../mysql/scripts/config.js');
const createDb = require('../mysql/scripts/createDb.js');
const createTables = require('../mysql/scripts/createTables.js');
const setDefaultSeeds = require('../mysql/scripts/setDefaultSeeds.js');

const log = require('../utils/consoleLogger.js');
const displayError = require('../utils/displayError.js');

const dbName = ENV === 'development' ? MYSQL_DB_NAME_DEV : MYSQL_DB_NAME_PROD;
const dropExistingDb = ENV === 'development';

module.exports = async () => {
  try {
    log.info('[DB Setup - Mysql] Started');
    await createDb(dbName, dropExistingDb);
    await createTables(dbName);
    await setDefaultSeeds(dbName);
  } catch (e) {
    log.fatal('- Error setting database!');
    displayError(e);
  } finally {
    await pool.end();
    log.info('- Pool connection closed');
    log.info('[DB Setup - Mysql] Finished');
  }
};
