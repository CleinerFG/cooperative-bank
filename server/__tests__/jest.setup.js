require('dotenv').config();

const { ENV, MYSQL_DB_NAME_BY_ENV } = require('../src/config/constants');

if (ENV !== 'test') {
  throw new Error('NODE_ENV must be set to test');
}

if (MYSQL_DB_NAME_BY_ENV !== 'cooperative_bank_test') {
  throw new Error(
    'Database must be "cooperative_bank_test", set NODE_ENV=test!'
  );
}
