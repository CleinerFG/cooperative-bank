require('dotenv').config();

const { closePool } = require('./scripts/poolConnection');
const { closeConnection } = require('./index');

const createDb = require('./scripts/createDb');
const checkSequelizeConnection = require('./scripts/checkSequelizeConnection');
const syncModels = require('./scripts/syncModels');

const { log, logRow } = require('../../../lib/utils/consoleLogger');
const displayError = require('../../../lib/utils/displayError');
const populateDb = require('./scripts/seeds/populateDb');

const setup = async () => {
  try {
    log('title', 'DB Setup - Mysql Started');
    await createDb();
    await checkSequelizeConnection();
    await syncModels();
    await populateDb();
  } catch (e) {
    logRow('section');
    log('fatal', 'Error setting database!');
    displayError(e);
  } finally {
    await closePool();
    await closeConnection();
    log('title', 'DB Setup - Mysql Finished');
  }
};

if (require.main === module) {
  setup();
} else {
  module.exports = setup;
}
