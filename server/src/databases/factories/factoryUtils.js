const { faker } = require('@faker-js/faker');
const UserModel = require('../../models/UserModel');
const {
  checkCpfExists,
  checkEmailExists,
} = require('../../lib/helpers/user/fieldsValidators');

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
  let field = { isValid: false };
  do {
    cpf = genCpf();
    field = await checkCpfExists(cpf);
  } while (!field.isValid);

  return cpf;
};

const genUniqueEmail = async (firstName, lastName) => {
  let email;
  let field = { isValid: false };

  do {
    email = faker.internet.email({
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
    });
    field = await checkEmailExists(email);
  } while (!field.isValid);

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

  return { fullName, cpf, birth, email, password };
};

module.exports = { genCpf, genUniqueCpf, genUniqueEmail, genPerson };
