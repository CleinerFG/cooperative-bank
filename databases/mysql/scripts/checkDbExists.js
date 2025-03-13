const { pool } = require('./config');
const log = require('../../utils/consoleLogger');

const sqlQuery = (schemaName) => `
SELECT SCHEMA_NAME
FROM INFORMATION_SCHEMA.SCHEMATA
WHERE SCHEMA_NAME = '${schemaName}';
`;

/**
 * @param {string} dbName
 */
module.exports = async (dbName) => {
  log.info('-> Checking existing DB...');
  const rows = await pool.query(sqlQuery(dbName));
  if (rows[0].length) {
    log.info(`- Existing DB: ${rows[0][0].SCHEMA_NAME}`)
    return true;
  }
  log.info(`- Existing DB: null`)
  return false;
};
