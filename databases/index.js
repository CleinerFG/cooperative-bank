require('dotenv').config();

const setupMysqlDb = require('./handlers/setupMysqlDb');
const setupMongoDb = require('./handlers/setupMongoDb');
const { logRow } = require('./utils/consoleLogger');

(async () => {
  await setupMysqlDb();
  logRow('end')
  await setupMongoDb();
})();
