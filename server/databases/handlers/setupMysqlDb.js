const { ENV } = require('../../config/constants');
const { closePool } = require('../mysql/scripts/config');

const checkDbExists = require('../mysql/scripts/checkDbExists');
const createDb = require('../mysql/scripts/createDb');
const createTables = require('../mysql/scripts/createTables');
const setDefaultSeeds = require('../mysql/scripts/setDefaultSeeds');
const populateDb = require('../mysql/scripts/populateDb');

const { log, logRow } = require('../utils/consoleLogger');
const displayError = require('../utils/displayError');

const dropExistingDb = ENV === 'development';

module.exports = async () => {
  try {
    log('title', 'DB Setup - Mysql Started');
    logRow('section');

    const dbExists = await checkDbExists();
    logRow('section');

    await createDb(dbExists, dropExistingDb);
    logRow('section');

    await createTables();
    logRow('section');

    if (ENV === 'development' || !dbExists) {
      await setDefaultSeeds();
      logRow('section');
    }

    // if (ENV === 'development') {
    //   await populateDb();
    //   logRow('section');
    // }
  } catch (e) {
    log('fatal', 'Error setting database!');
    displayError(e);
    logRow('section');
  } finally {
    await closePool();
    log('title', 'DB Setup - Mysql Finished');
  }
};
