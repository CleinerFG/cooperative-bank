const fs = require('fs/promises');
const path = require('path');
const createPool = require('./createPool');
const displayErrors = require('../../utils/displayErrors');

const readSchemaFile = async () => {
  let status;
  const schemaPath = path.resolve(__dirname, '../schema.sql');
  try {
    console.log('Trying to read: schema.sql');
    const sql = await fs.readFile(schemaPath, 'utf-8');
    status = 'Success';
    return sql.trim().replace(/\s+/g, ' ');
  } catch (e) {
    status = 'Fail';
    console.error('Error reading file "schema.sql":');
    displayErrors(e);
    return null;
  } finally {
    console.log(`Status: ${status}`);
  }
};

module.exports = async (dbName) => {
  let status;
  const pool = createPool(dbName);
  const sql = await readSchemaFile();

  if (sql) {
    try {
      console.log('Trying to create tables');
      await pool.query(sql);
      status = 'Success';
      return true;
    } catch (e) {
      status = 'Fail';
      console.error('Error creating tables:', e);
      displayErrors(e);
      return false;
    } finally {
      await pool.end();
      console.log(`Status: ${status}`);
      console.log('Pool connection end');
    }
  }
  return false;
};
