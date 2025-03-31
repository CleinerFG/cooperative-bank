const userRepository = require('../../../repositories/userRepository');

const checkCpfExists = async (cpf) => {
  const field = {
    name: 'cpf',
    isValid: false,
    error: 'alreadyExists',
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
    error: 'alreadyExists',
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
