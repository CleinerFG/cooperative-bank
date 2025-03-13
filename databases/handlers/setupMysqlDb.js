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

const { log, logRow } = require('../utils/consoleLogger.js');
const displayError = require('../utils/displayError.js');

const dbName = ENV === 'development' ? MYSQL_DB_NAME_DEV : MYSQL_DB_NAME_PROD;
const dropExistingDb = ENV === 'development';

module.exports = async () => {
  try {
    log('title', 'DB Setup - Mysql Started');
    logRow('section');

    const dbExists = await checkDbExists(dbName);
    logRow('section');

    await createDb(dbName, dbExists, dropExistingDb);
    logRow('section');

    await createTables(dbName);
    logRow('section');

    if (ENV === 'development' || !dbExists) {
      await setDefaultSeeds(dbName);
      logRow('section');
    }
  } catch (e) {
    log('fatal', 'Error setting database!');
    displayError(e);
    logRow('section');
  } finally {
    log('section', 'Closing pool connection...');
    await pool.end();
    log('content', 'The pool connection was closed');
    log('title', 'DB Setup - Mysql Finished');
  }
};
