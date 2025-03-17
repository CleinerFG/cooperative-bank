const UserModel = require('../../../../../models/UserModel');
const {
  createPasswordHash,
} = require('../../../../../lib/helpers/paswordHash');

const data = [
  { cpf: '14481718064', fullName: 'Ashley Williams', birth: '1978-04-08' },
  { cpf: '69641640062', fullName: 'Cheryl Mason', birth: '1993-06-27' },
  { cpf: '22646086091', fullName: 'Ada Wong', birth: '1992-07-03' },
  { cpf: '79537234096', fullName: 'Claudette Morel', birth: '1975-09-12' },
  { cpf: '58243072020', fullName: 'Dwight Fairfield', birth: '1989-11-22' },
  { cpf: '99196216093', fullName: 'Meg Thomas', birth: '1990-05-15' },
  { cpf: '27803226086', fullName: 'Jake Park', birth: '1991-02-09' },
  { cpf: '48745826056', fullName: 'David King', birth: '1989-11-21' },
];

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

module.exports = async () => {
  const models = [];
  for (let i = 0; i < data.length; i++) {
    const { fullName, cpf, birth } = data[i];

    const email = createEmail(fullName);
    const balance = randomBalance();
    const passHash = await createPasswordHash(`myPassword${i}`);

    const userModel = await UserModel.create({
      fullName,
      cpf,
      birth,
      email,
      password: passHash,
      balance,
    });

    models.push(userModel);
  }
  return models;
};
