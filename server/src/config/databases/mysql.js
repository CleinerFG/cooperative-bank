const { MYSQL_DB_NAME_BY_ENV } = require('../constants');

require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.MYSQL_HOST ?? 'localhost',
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: MYSQL_DB_NAME_BY_ENV,
  port: process.env.MYSQL_PORT ?? 3306,
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
};
