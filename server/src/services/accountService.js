const repository = require('../repositories/accountRepository');

module.exports = {
  async getBalance() {
    return await repository.getBalance();
  },
  async getDetails() {
    return await repository.getDetails();
  },
};
