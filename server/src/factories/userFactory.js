const UserModel = require('../models/UserModel');
const { createPasswordHash } = require('../lib/helpers/paswordHash');

const data = [
  {
    cpf: '14481718064',
    fullName: 'Ashley Williams',
    birth: '1978-04-08',
    password: 'ashley123',
    balance: 23400,
  },
  {
    cpf: '69641640062',
    fullName: 'Cheryl Mason',
    birth: '1993-06-27',
    password: 'cheryl123',
    balance: 13656,
  },
  {
    cpf: '22646086091',
    fullName: 'Ada Wong',
    birth: '1992-07-03',
    password: 'ada123',
    balance: 78426.56,
  },
  {
    cpf: '79537234096',
    fullName: 'Claudette Morel',
    birth: '1975-09-12',
    password: 'claudette123',
    balance: 98075.34,
  },
  {
    cpf: '58243072020',
    fullName: 'Dwight Fairfield',
    birth: '1989-11-22',
    password: 'dwigth123',
    balance: 12456,
  },
  {
    cpf: '99196216093',
    fullName: 'Meg Thomas',
    birth: '1990-05-15',
    password: 'meg123',
    balance: 90764.34,
  },
  {
    cpf: '27803226086',
    fullName: 'Jake Park',
    birth: '1991-02-09',
    password: 'jake123',
    balance: 10249,
  },
  {
    cpf: '48745826056',
    fullName: 'David King',
    birth: '1989-11-21',
    password: 'david123',
    balance: 78341.87,
  },
];

const createEmail = (fullName) => {
  const [name, lastName] = fullName.split(' ');
  return `${name}.${lastName}@email.com`.toLowerCase();
};

const createUser = async ({ fullName, cpf, birth, password, balance }) => {
  const email = createEmail(fullName);
  const hashPass = await createPasswordHash(password);

  const model = await UserModel.create({
    fullName,
    cpf,
    birth,
    email,
    password: hashPass,
    balance,
  });
  return model;
};

const createMultipleUsers = async () => {
  const models = [];
  for (let i = 0; i < data.length; i++) {
    const user = data[i];
    const model = await createUser(user);
    models.push(model);
  }
  return models;
};

module.exports = { createUser, createMultipleUsers };
