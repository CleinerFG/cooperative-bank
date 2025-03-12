require('dotenv').config();

const setupMysqlDb = require('./handlers/setupMysqlDb');
const setupMongoDb = require('./handlers/setupMongoDb');
const log = require('./utils/consoleLogger');

(async () => {
  await setupMysqlDb();
  log.info(
    '~ - ~ - ~ - ~ - ~ - ~ - ~ - ~ - ~ - ~ - ~ - ~ - ~ - ~ - ~ - ~ - ~'
  );
  await setupMongoDb();
})();
