const { getConnection } = require('../config');
const { v4: uuid } = require('uuid');

const users = [
  { cpf: '14481718064', fullName: 'Ashley Williams', birth: '1978-04-08' },
  { cpf: '69641640062', fullName: 'Cheryl Mason', birth: '1993-06-27' },
  { cpf: '22646086091', fullName: 'Ada Wong', birth: '1992-07-03' },
  { cpf: '79537234096', fullName: 'Claudette Morel', birth: '1975-09-12' },
  { cpf: '58243072020', fullName: 'Dwight Fairfield', birth: '1989-11-22' },
  { cpf: '99196216093', fullName: 'Meg Thomas', birth: '1990-05-15' },
  { cpf: '27803226086', fullName: 'Jake Park', birth: '1991-02-09' },
  { cpf: '48745826056', fullName: 'David King', birth: '1989-11-21' },
];

const insertUsers = async () => {
  const connection = await getConnection();

  const query = 'INSERT INTO users (opaque_id, cpf, full_name, birth) VALUES ';
  const queryValues = [];

  users.forEach(({ cpf, fullName, birth }) => {
    const value = `('${uuid()}', '${cpf}', '${fullName}', '${birth}')`;
    queryValues.push(value);
  });

  const sql = query + queryValues.join(',') + ';';
  await connection.query(sql);
};

module.exports = { insertUsers, users };
