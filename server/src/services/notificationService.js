const repository = require('../repositories/notificationRepository');

module.exports = {
  async getAll() {
    return repository.findAll();
  },
};
