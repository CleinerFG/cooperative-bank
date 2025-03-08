const { getUserByCpf } = require('../repositories/userRepository');
const { cpfValidator } = require('../lib/utils/validators');

module.exports = {
  /**
   * @param {string} cpf
   */
  async getUserByCpf(cpf) {
    cpfValidator(cpf);
    return getUserByCpf(cpf.replace(/[.-]/g, ''));
  },
};
