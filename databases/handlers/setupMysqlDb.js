const {
  ENV,
  MYSQL_DB_NAME_DEV,
  MYSQL_DB_NAME_PROD,
} = require('../constants.js');

const { pool } = require('../mysql/scripts/config.js');
const checkDbExists = require('../mysql/scripts/checkDbExists.js');
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
    log.info('- - - - - - - - - - - - - - - - - - - - - - -');

    const dbExists = await checkDbExists(dbName);
    log.info('- - - - - - - - - - - - - - - - - - - - - - -');

    await createDb(dbName, dbExists, dropExistingDb);
    log.info('- - - - - - - - - - - - - - - - - - - - - - -');

    await createTables(dbName);
    log.info('- - - - - - - - - - - - - - - - - - - - - - -');

    if (ENV === 'development' || !dbExists) {
      await setDefaultSeeds(dbName);
      log.info('- - - - - - - - - - - - - - - - - - - - - - -');
    }
  } catch (e) {
    log.fatal('-> Error setting database!');
    displayError(e);
    log.info('- - - - - - - - - - - - - - - - - - - - - - -');
  } finally {
    log.info(`-> Closing pool connection...`);
    await pool.end();
    log.info('- The pool connection was closed');
    log.info('- - - - - - - - - - - - - - - - - - - - - - -');
    log.info('[DB Setup - Mysql] Finished');
  }
};
