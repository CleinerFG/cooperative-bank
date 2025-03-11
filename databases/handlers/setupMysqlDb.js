const {
  ENV,
  MYSQL_DB_NAME_DEV,
  MYSQL_DB_NAME_PROD,
} = require('../constants.js');

const displayErrors = require('../utils/displayErrors.js');
const createMysqlDb = require('../mysql/scripts/createDb.js');
const dbName = ENV === 'development' ? MYSQL_DB_NAME_DEV : MYSQL_DB_NAME_PROD;

module.exports = async () => {
  try {
    console.log('---> [DB Setup - Mysql]');
    await createMysqlDb(dbName);
  } catch (e) {
    console.error('Error creating Mysql Database:');
    displayErrors(e);
  } finally {
    console.log('---> [DB Setup - Mysql] Finished');
  }
};
