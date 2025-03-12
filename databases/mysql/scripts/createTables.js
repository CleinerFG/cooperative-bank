const fs = require('fs/promises');
const path = require('path');
const createPool = require('./createPool');
const log = require('../../utils/consoleLogger');
const displayErrors = require('../../utils/displayErrors');

const readSchemaFile = async () => {
  let success;
  const schemaPath = path.resolve(__dirname, '../schema.sql');
  try {
    log.info('- Trying to read: schema.sql');
    const sql = await fs.readFile(schemaPath, 'utf-8');
    success = true;
    return sql.trim().replace(/\s+/g, ' ');
  } catch (e) {
    success = false;
    log.error('- Error reading file "schema.sql":');
    displayErrors(e);
    return null;
  } finally {
    const logType = success ? 'info' : 'error';
    log[logType](`- Success: ${success}`);
  }
};

module.exports = async (dbName) => {
  let success;
  const pool = createPool(dbName);
  const sql = await readSchemaFile();

  if (sql) {
    try {
      log.info('- Trying to create tables');
      await pool.query(sql);
      success = true;
      return true;
    } catch (e) {
      success = false;
      log.error('- Error creating tables:', e);
      displayErrors(e);
      return false;
    } finally {
      await pool.end();
      const logType = success ? 'info' : 'error';
      log[logType](`- Success: ${success}`);
      log.info('- Pool connection end');
    }
  }
  return false;
};
