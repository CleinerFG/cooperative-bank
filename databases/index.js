require('dotenv').config();

const setupMysqlDb = require('./handlers/setupMysqlDb');
const setupMongoDb = require('./handlers/setupMongoDb');

(async () => {
  await setupMysqlDb();
  await setupMongoDb();
})();
