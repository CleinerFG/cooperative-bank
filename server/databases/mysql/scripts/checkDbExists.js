const { getConnection } = require('./config');
const { MYSQL_DB_NAME_BY_ENV } = require('../../../config/constants');
const { log } = require('../../utils/consoleLogger');

const query = `
SELECT SCHEMA_NAME
FROM INFORMATION_SCHEMA.SCHEMATA
WHERE SCHEMA_NAME = '${MYSQL_DB_NAME_BY_ENV}';
`;

module.exports = async () => {
  const connection = await getConnection();
  log('section', 'Checking existing DB...');
  const [rows] = await connection.query(query);
  if (rows.length) {
    log('content', `Existing DB: ${rows[0].SCHEMA_NAME}`);
    return true;
  }
  log('content', `Existing DB: null`);
  return false;
};
