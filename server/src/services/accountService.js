const repository = require('../repositories/accountRepository');

module.exports = {
  async getBalance() {
    return repository.findBalance();
  },
  async getDetails() {
    return repository.findDetails();
  },
};
