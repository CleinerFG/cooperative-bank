const sequelize = require('.');
require('../../../src/models/UserModel');

(async () => {
  await sequelize.sync({ force: true, match: /_(test|dev)$/ });
  console.log('All models were synchronized successfully.');
})();
