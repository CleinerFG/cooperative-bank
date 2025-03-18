require('dotenv').config();

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_DB_NAME_BY_ENV,
} = require('../constants');

module.exports = {
  dialect: 'mysql',
  host: MYSQL_HOST,
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB_NAME_BY_ENV,
  port: MYSQL_PORT,
  define: {
    timestamps: true,
    underscored: true,
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    underscored: true,
  },
};
