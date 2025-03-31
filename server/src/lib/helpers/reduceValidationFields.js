module.exports = (validations) => {
  const validationsFlat = validations.flat();
  const isValid = validationsFlat.every((field) => field.isValid);

  const fields = validationsFlat.reduce((acc, field) => {
    if (!field.isValid) {
      acc[field.name] = [field.error];
    }
    return acc;
  }, {});

  return [isValid, fields];
};
