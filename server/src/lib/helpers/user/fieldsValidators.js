const userRepository = require('../../../repositories/userRepository');

const checkCpfExists = async (cpf) => {
  const field = {
    name: 'cpf',
    isValid: false,
  };

  const cpfExists = await userRepository.findCpf(cpf);

  if (cpfExists) return field;
  field.isValid = true;
  return field;
};

const checkEmailExists = async (email) => {
  const field = {
    name: 'email',
    isValid: false,
  };

  const emailExists = await userRepository.findEmail(email);

  if (emailExists) return field;
  field.isValid = true;
  return field;
};

module.exports = {
  checkCpfExists,
  checkEmailExists,
};
