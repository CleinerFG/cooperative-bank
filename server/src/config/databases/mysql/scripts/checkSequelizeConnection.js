const { sequelize } = require('../index');
const { log, logRow } = require('../../../../lib/utils/consoleLogger');

module.exports = async () => {
  log('section', 'Checking sequelize connection...');
  await sequelize.authenticate();
  log('content', 'Connection has been established with success');
  logRow('section');
};
