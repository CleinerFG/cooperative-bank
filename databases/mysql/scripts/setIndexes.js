const fs = require('fs/promises');
const path = require('path');
const { pool } = require('./config');
const log = require('../../utils/consoleLogger');

const readSetIndexesFile = async () => {
  const schemaPath = path.resolve(__dirname, '../setIndexes.sql');

  log.info('- Reading: setIndexes.sql');
  const sql = await fs.readFile(schemaPath, 'utf-8');
  return sql.trim().replace(/\s{2,}/g, '');
};

module.exports = async (dbName) => {
  const sql = await readSetIndexesFile();
  log.info('- Setting indexes');

  const sqlIdxArr = sql.split(';');
  sqlIdxArr.pop(); // Last arr item is a empty string ''

  for (let i = 0; i < sqlIdxArr.length; i++) {
    const sql = sqlIdxArr[i];
    try {
      await pool.query(`USE ${dbName}; ${sql}`);
    } catch (e) {
      if (e.code !== 'ER_DUP_KEYNAME') {
        log.error(e.message);
        log.error(e.sql);
      }
      // When key is duplicated, do nothing
    }
  }
};
