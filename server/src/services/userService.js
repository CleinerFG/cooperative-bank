const repository = require('../repositories/userRepository');
const { cpfValidator } = require('../lib/utils/validators');

module.exports = {
  /**
   * @param {string} cpf
   */
  async getByCpf(cpf) {
    cpfValidator(cpf);
    return repository.findByCpf(cpf.replace(/[.-]/g, ''));
  },
};
