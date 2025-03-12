const {
  ENV,
  MYSQL_DB_NAME_DEV,
  MYSQL_DB_NAME_PROD,
} = require('../constants.js');

const dbName = ENV === 'development' ? MYSQL_DB_NAME_DEV : MYSQL_DB_NAME_PROD;
const createDb = require('../mysql/scripts/createDb.js');
const createTables = require('../mysql/scripts/createTables.js');
const log = require('../utils/consoleLogger.js');

module.exports = async () => {
  log.info('[DB Setup - Mysql] Started');
  const dbCreated = await createDb(dbName);
  if (dbCreated) {
    const tablesCreated = await createTables(dbName);
  }
  log.info('[DB Setup - Mysql] Finished');
};
