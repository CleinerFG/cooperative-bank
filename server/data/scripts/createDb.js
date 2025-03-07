require('dotenv').config();
const mysql = require('mysql2');

const host = process.env.MYSQL_HOST;
const port = process.env.MYSQL_PORT;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;

const connection = mysql.createConnection({
  host,
  user,
  password,
  port,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to mysql', err);
    return;
  }
  const dbName = 'cooperative_bank';
  const createDbQuery = `CREATE DATABASE IF NOT EXISTS ${dbName}`;

  connection.query(createDbQuery, (err, result) => {
    if (err) {
      console.error('Error creating database:', err);
      return;
    }
    console.log(`DB: "${dbName}" success`);

    connection.end();
  });
});
