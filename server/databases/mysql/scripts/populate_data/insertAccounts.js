const { users } = require('./insertUsers');
const { v4: uuid } = require('uuid');
const {
  createPasswordHash,
} = require('../../../../src/lib/helpers/paswordHash');
const { getConnection } = require('../config');


const createEmail = (fullName) => {
  const [name, lastName] = fullName.split(' ');
  return `${name}.${lastName}@email.com`.toLowerCase();
};

const randomBalance = () => {
  const min = 1000;
  const max = 100000;
  const numRandom = Math.random() * (max - min) + min;
  return numRandom.toFixed(2);
};

const insertAccounts = async () => {
  const connection = await getConnection();

  const query =
    'INSERT INTO accounts (opaque_id, user_id, email, password, balance) VALUES ';
  const queryValues = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    const email = createEmail(user.fullName);
    const passHash = await createPasswordHash(`myPassword${i}`);
    const balance = randomBalance();

    const value = `('${uuid()}', ${
      i + 1
    },'${email}', '${passHash}', ${balance})`;

    queryValues.push(value);
  }

  const sql = query + queryValues.join(',') + ';';
  await connection.query(sql);
};

module.exports = { insertAccounts };
