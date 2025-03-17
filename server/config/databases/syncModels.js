const sequelize = require('./mysqlConfig');
require('../../src/models/UserModel');

(async () => {
  await sequelize.sync({ force: true });
  console.log('All models were synchronized successfully.');
})();
