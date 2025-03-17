/**
 * @type {'development'|"production"}
 */
const ENV = process.env.NODE_ENV ?? 'development';

// Server
const SERVER_HOST = process.env.SERVER_HOST ?? 'localhost';
const SERVER_PORT = process.env.SERVER_PORT ?? 8080;

// Mysql
const getMySqlDbName = () => {
  switch (ENV) {
    case 'production':
      return 'cooperative_bank';
    case 'test':
      return 'cooperative_bank_dev';
    default:
      return 'cooperative_bank_test';
  }
};

const MYSQL_DB_NAME_BY_ENV = getMySqlDbName();
const MYSQL_HOST = process.env.MYSQL_HOST ?? 'localhost';
const MYSQL_PORT = process.env.MYSQL_PORT ?? 3306;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;

module.exports = {
  ENV,
  SERVER_HOST,
  SERVER_PORT,
  MYSQL_DB_NAME_BY_ENV,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
};
