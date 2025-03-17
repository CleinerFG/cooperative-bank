const sequelize = require('.');
require('../../../src/models/UserModel');

(async () => {
  await sequelize.sync({ force: true, match: /_(testmode|devmode)$/ });
  console.log('All models were synchronized successfully.');
})();
