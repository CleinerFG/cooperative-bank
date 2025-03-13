const { ENV, MYSQL_DB_NAME_BY_ENV } = require('../../config/constants');

const { pool } = require('../mysql/scripts/pool');
const checkDbExists = require('../mysql/scripts/checkDbExists');
const createDb = require('../mysql/scripts/createDb');
const createTables = require('../mysql/scripts/createTables');
const setDefaultSeeds = require('../mysql/scripts/setDefaultSeeds');
const setTimeZone = require('../mysql/scripts/setTimeZone');

const { log, logRow } = require('../utils/consoleLogger');
const displayError = require('../utils/displayError');
const populateDb = require('../mysql/scripts/populateDb');

const dbName = MYSQL_DB_NAME_BY_ENV;
const dropExistingDb = ENV === 'development';

module.exports = async () => {
  try {
    log('title', 'DB Setup - Mysql Started');
    logRow('section');

    const dbExists = await checkDbExists(dbName);
    logRow('section');

    await createDb(dbName, dbExists, dropExistingDb);
    logRow('section');

    await setTimeZone(dbName);
    logRow('section');

    await createTables(dbName);
    logRow('section');

    if (ENV === 'development' || !dbExists) {
      await setDefaultSeeds(dbName);
      logRow('section');
    }

    if (ENV === 'development') {
      await populateDb(dbName);
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
