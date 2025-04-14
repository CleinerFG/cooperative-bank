const userService = require('../../../services/userService');
const { seedUsersLogger } = require('../../../lib/utils/loggers');

const { genPerson } = require('./factoryUtils');

const createUser = async () => {
  const person = await genPerson();
  await userService.create(person);
  seedUsersLogger.info(JSON.stringify(person, null, 2));
};

module.exports = { createUser };
