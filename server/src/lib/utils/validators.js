const datetimeValidator = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) throw new Error('invalidDatetime');
  return true;
};

const emailValidator = (string) => {
  const localPart = /^[\w._%+-]+/;
  const domainName = /[\w.-]+/;
  const topLevelDomain = /\.[\w]{2,}$/;

  const regex = new RegExp(
    `^${localPart.source}@${domainName.source}${topLevelDomain.source}$`
  );
  if (!regex.test(string)) throw new Error('invalidEmail');
  return true;
};

const cpfValidator = (value) => {
  value = value.replace(/[.-]/g, '');

  if (!/^[0-9]{11}$/.test(value)) throw new Error('invalidCpf');

  if (/^(\d)\1{10}$/.test(value)) throw new Error('invalidCpf');

  let sum = 0,
    remainder;

  for (let i = 1; i <= 9; i++) sum += parseInt(value[i - 1]) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(value[9])) throw new Error('invalidCpf');

  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(value[i - 1]) * (12 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(value[10])) throw new Error('invalidCpf');

  return true;
};

module.exports = { datetimeValidator, cpfValidator, emailValidator };
