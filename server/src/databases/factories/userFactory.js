const UserModel = require('../../models/UserModel');
const { genPerson } = require('./factoryUtils');
const { createPasswordHash } = require('../../lib/helpers/paswordHash');

const createUser = async () => {
  const person = await genPerson();
  const hashPass = await createPasswordHash(person.password);
  const model = await UserModel.create({
    ...person,
    password: hashPass,
  });
  return { model: model, person: { ...person, hashPass } };
};

module.exports = { genPerson, createUser };
