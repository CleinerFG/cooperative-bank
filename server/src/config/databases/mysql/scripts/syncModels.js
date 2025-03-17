const { sequelize } = require('../index');
require('../../../../models/UserModel');
const { log, logRow } = require('../../../../lib/utils/consoleLogger');

module.exports = async () => {
  log('section', 'Syncing models...');
  await sequelize.sync({ force: true, match: /_(testmode|devmode)$/ });
  log('content', 'All models were synchronized successfully');
  logRow('section');
};
