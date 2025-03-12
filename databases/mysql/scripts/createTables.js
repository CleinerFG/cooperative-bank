const fs = require('fs/promises');
const path = require('path');
const createPool = require('./createPool');

const readSchemaFile = async () => {
  const schemaPath = path.resolve(__dirname, '../schema.sql');
  try {
    console.log('Trying to read: schema.sql');
    const sql = await fs.readFile(schemaPath, 'utf-8');
    console.log('Success');
    return sql;
  } catch (e) {
    console.error('Error reading file "schema.sql":', e);
    return null;
  }
};

module.exports = async (dbName) => {
  const pool = createPool(dbName);
  const sql = await readSchemaFile();
  if (sql) {
    try {
      console.log('Trying to create tables');
      pool.query(sql);
      console.log('Success');
      return true;
    } catch (e) {
      console.error('Error creating tables:', e);
      return null;
    } finally {
      pool.end();
    }
  }
};
