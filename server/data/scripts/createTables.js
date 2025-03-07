const fs = require('fs');
const createConnection = require('../../config/database');
const path = require('path');
const connection = createConnection();
const tablesQuery = fs
  .readFileSync(path.resolve(__dirname, '../schema.sql'), 'utf8')
  .replace(/\r\n|\n/g, ' ');

connection.connect((err) => {
  if (err) {
    console.error('MySQL conextion fail:', err);
    return;
  }
  console.log('MySQL connected ID:', connection.threadId);

  connection.query(tablesQuery, (err, result) => {
    if (err) {
      console.error('Create tables error:', err);
      return;
    }
    console.log('- Tables created with success');
    connection.end();
  });
});
