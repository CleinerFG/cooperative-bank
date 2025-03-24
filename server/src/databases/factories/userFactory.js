const userService = require('../../services/userService');
const { genPerson } = require('./factoryUtils');

const createUser = async () => {
  const person = await genPerson();
  await userService.create({ ...person });
};

module.exports = { createUser };
