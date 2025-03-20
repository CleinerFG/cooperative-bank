const removeBlankSpace = (str) => {
  return string.replace(/\s{2,}/g, ' ');
};

const removeCpfFormatting = (cpf) => {
  return cpf.replace(/[\.\-]/g, '');
};

const removeTimestamp = (dateString) => {
  return dateString.split('T')[0];
};

function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

module.exports = {
  removeBlankSpace,
  removeCpfFormatting,
  removeTimestamp,
  titleCase,
};
