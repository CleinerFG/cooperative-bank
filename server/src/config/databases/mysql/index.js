const { Sequelize } = require('sequelize');
const {
  MYSQL_DB_NAME_BY_ENV,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_PORT,
} = require('../../constants');
const { log, logRow } = require('../../../lib/utils/consoleLogger');

const sequelize = new Sequelize(
  MYSQL_DB_NAME_BY_ENV,
  MYSQL_USER,
  MYSQL_PASSWORD,
  {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      underscored: true,
    },
    timezone: '+00:00',
    sync: { force: false },
  }
);

const closeConnection = async () => {
  log('section', 'Closing sequelize connection...');
  sequelize.close();
  log('content', 'Connection was closed');
  logRow('section');
};

module.exports = { sequelize, closeConnection };
