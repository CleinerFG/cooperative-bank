const { faker } = require('@faker-js/faker');
const UserModel = require('../../models/UserModel');

const genCpf = () => {
  const calculateCheckDigit = (cpf, weight) => {
    let sum = 0;
    for (let i = 0; i < cpf.length; i++) {
      sum += parseInt(cpf.charAt(i)) * weight--;
    }

    let resto = sum % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  let cpf = '';
  for (let i = 0; i < 9; i++) {
    cpf += Math.floor(Math.random() * 9);
  }

  let digit1 = calculateCheckDigit(cpf, 10);
  let digit2 = calculateCheckDigit(cpf + digit1, 11);

  return cpf + digit1 + digit2;
};

const genUniqueCpf = async () => {
  let cpf;
  let cpfNotFound;

  do {
    cpf = genCpf();
    cpfNotFound = await UserModel.findOne({
      where: { cpf },
      attributes: ['cpf'],
    });
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
    emailNotFound = await UserModel.findOne({
      where: { email },
      attributes: ['email'],
    });
  } while (emailNotFound);

  return email;
};

const genPerson = async () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const fullName = `${firstName} ${lastName}`;

  const cpf = await genUniqueCpf();
  const email = await genUniqueEmail(firstName, lastName);

  const birth = faker.date.birthdate().toISOString().split('T')[0];
  const password = firstName + lastName;
  const balance = faker.number.float({ min: 1000, max: 1000000 });

  return { fullName, cpf, birth, email, password, balance };
};

module.exports = { genCpf, genUniqueCpf, genUniqueEmail, genPerson };
