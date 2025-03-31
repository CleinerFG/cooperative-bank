const UserModel = require('../../models/UserModel');
const { seedUsersLogger } = require('../../lib/utils/loggers');

const { genPerson } = require('./factoryUtils');
const { createPasswordHash } = require('../../lib/helpers/paswordHash');

const createUser = async () => {
  const person = await genPerson();
  const passHash = await createPasswordHash(person.password);
  await UserModel.create({ ...person, password: passHash });
  seedUsersLogger.info(JSON.stringify(person, null, 2));
};

module.exports = { createUser };
