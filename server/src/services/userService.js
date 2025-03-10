const repository = require('../repositories/userRepository');
const { cpfValidator } = require('../lib/utils/validators');

module.exports = {
  /**
   * @param {string} cpf
   */
  async getUserByCpf(cpf) {
    cpfValidator(cpf);
    return repository.findUserByCpf(cpf.replace(/[.-]/g, ''));
  },
};
