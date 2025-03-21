const { removeCpfFormatting } = require('../../utils/dataNormalizer');
const { cpfValidator } = require('../../utils/validators');

module.exports = {
  findByCpfValidation: (cpf) => {
    if (typeof cpf !== 'string') {
      return [false, { cpf: 'mustBeString}' }];
    }

    try {
      cpfValidator(cpf);
      return [true, { cpf: removeCpfFormatting(cpf) }];
    } catch (e) {
      if (e.message === 'invalidCpf') {
        return [false, { cpf: e.message }];
      }
      throw e;
    }
  },
};
