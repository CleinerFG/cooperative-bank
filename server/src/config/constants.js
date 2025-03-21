const path = require('path');

/**
 * @type {'development'|"production"}
 */
const ENV = process.env.NODE_ENV ?? 'development';

// Server
const SERVER_HOST = process.env.SERVER_HOST ?? 'localhost';
const SERVER_PORT = process.env.SERVER_PORT ?? 8080;
const COOKIE_SECRET = process.env.COOKIE_SECRET;
const UPLOADS_DIR = path.resolve(__dirname, '../../uploads');
const PROFILE_IMGS_DIR = path.join(UPLOADS_DIR, 'profile-images');

/** --- Dev test --- */
// Time in milliseconds
const SIMULATE_RES_DELAY = 0;

// SPA Client
const APP_DIR = path.resolve(__dirname, '../../../client/dist/app');
const PUBLIC_DIR = path.resolve(__dirname, '../../../client/dist/public');

const APP_STATIC_DIR = path.join(APP_DIR, 'static');
const PUBLIC_STATIC_DIR = path.join(PUBLIC_DIR, 'static');

// Mysql
const getMySqlDbName = () => {
  switch (ENV) {
    case 'production':
      return 'cooperative_bank';
    case 'development':
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
  COOKIE_SECRET,
  PROFILE_IMGS_DIR,
  SIMULATE_RES_DELAY,
  APP_STATIC_DIR,
  PUBLIC_STATIC_DIR,
  MYSQL_DB_NAME_BY_ENV,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
};
