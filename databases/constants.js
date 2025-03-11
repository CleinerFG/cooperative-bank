/**
 * @type {'development'|"production"}
 */
const ENV = process.env.ENV ?? 'development';

// Mysql config
const MYSQL_DB_NAME_DEV = 'cooperative_bank_devmode';
const MYSQL_DB_NAME_PROD = 'cooperative_bank';
const MYSQL_HOST = process.env.MYSQL_HOST ?? 'localhost';
const MYSQL_PORT = process.env.MYSQL_PORT ?? 3306;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;

module.exports = {
  ENV,
  MYSQL_DB_NAME_DEV,
  MYSQL_DB_NAME_PROD,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
};
