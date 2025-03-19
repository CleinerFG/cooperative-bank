const { faker } = require('@faker-js/faker');
const UserModel = require('../../models/UserModel');
const genCpf = require('../../lib/utils/genCpf');
const { createPasswordHash } = require('../../lib/helpers/paswordHash');

const genUniqueCpf = async () => {
  let cpf;
  let cpfNotFound;

  do {
    cpf = genCpf();
    cpfNotFound = await UserModel.findOne({ where: { cpf } });
  } while (cpfNotFound);

  return cpf;
};

const genUniqueEmail = async (firstName, lastName) => {
  let email;
  let emailNotFound;

  do {
    email = faker.internet.email({
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
    });
    emailNotFound = await UserModel.findOne({ where: { email } });
  } while (emailNotFound);

  return email;
};

const genPerson = async () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const fullName = `${firstName} ${lastName}`;

  const cpf = await genUniqueCpf();
  const email = await genUniqueEmail(firstName, lastName);

  const birth = faker.date.birthdate().toISOString();
  const password = firstName + lastName;
  const balance = faker.number.float({ min: 1000, max: 1000000 });

  return { fullName, cpf, birth, email, password, balance };
};

const createUser = async () => {
  const person = await genPerson();
  const hashPass = await createPasswordHash(person.password);
  const model = await UserModel.create({
    ...person,
    password: hashPass,
  });
  return model;
};

module.exports = { createUser };