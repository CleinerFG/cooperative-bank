const path = require('path');

const ENV = process.env.NODE_ENV ?? 'development';

const mysqlDbMap = {
  production: 'production',
  development: 'cooperative_bank_dev',
  test: 'cooperative_bank_test',
};

const MYSQL_DB_NAME_BY_ENV = mysqlDbMap[ENV];

// Server
const UPLOADS_DIR = path.resolve(__dirname, '../../uploads');
const PROFILE_IMGS_DIR = path.join(UPLOADS_DIR, 'profile-images');

// SPA Client
const SPA_DIR = path.resolve(__dirname, '../../../client/dist');
const SPA_STATIC_DIR = path.join(SPA_DIR, 'static');

module.exports = {
  ENV,
  MYSQL_DB_NAME_BY_ENV,
  PROFILE_IMGS_DIR,
  SPA_DIR,
  SPA_STATIC_DIR,
};
