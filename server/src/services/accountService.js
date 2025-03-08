const repository = require('../repositories/accountRepository');

module.exports = {
  async getBalance() {
    return repository.getBalance();
  },
  async getDetails() {
    return repository.getDetails();
  },
};
