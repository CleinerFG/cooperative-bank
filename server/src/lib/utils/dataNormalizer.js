const removeBlankSpace = (string) => {
  return string.replace(/\s{2,}/g, ' ');
};

const removeCpfFormatting = (cpf) => {
  return cpf.replace(/[\.\-]/g, '');
};

const removeTimestamp = (dateString) => {
  return dateString.split('T')[0];
};

module.exports = { removeBlankSpace, removeCpfFormatting, removeTimestamp };
