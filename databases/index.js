require('dotenv').config();
const checkDotenvFileExists = require('./utils/checkDotenvFileExists.js');
checkDotenvFileExists();

const displayErrors = require('./utils/displayErrors.js');
const {
  ENV,
  MYSQL_DB_NAME_DEV,
  MYSQL_DB_NAME_PROD,
} = require('./constants.js');
const createMysqlDb = require('./mysql/scripts/createDb.js');

const createDatabasesByEnvMode = () => {
  const dbName = ENV === 'development' ? MYSQL_DB_NAME_DEV : MYSQL_DB_NAME_PROD;

  createMysqlDb(dbName);
};

try {
  createDatabasesByEnvMode();
} catch (e) {
  console.error('[DB Setup] Error creating databases:');
  displayErrors(e);
}
