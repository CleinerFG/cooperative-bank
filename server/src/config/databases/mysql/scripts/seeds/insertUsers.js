const { createMultipleUsers } = require('../../../../../factories/userFactory');

module.exports = async () => {
  return await createMultipleUsers();
};
