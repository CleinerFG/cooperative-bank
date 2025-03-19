const calculateCheckDigit = (cpf, weight) => {
  let sum = 0;
  for (let i = 0; i < cpf.length; i++) {
    sum += parseInt(cpf.charAt(i)) * weight--;
  }

  let resto = sum % 11;
  return resto < 2 ? 0 : 11 - resto;
};

module.exports = () => {
  let cpf = '';
  for (let i = 0; i < 9; i++) {
    cpf += Math.floor(Math.random() * 9);
  }

  let digit1 = calculateCheckDigit(cpf, 10);
  let digit2 = calculateCheckDigit(cpf + digit1, 11);

  return cpf + digit1 + digit2;
};
