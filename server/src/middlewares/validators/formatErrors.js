module.exports = (errors) => {
  return errors.array().reduce(
    (acc, error) => {
      const field = acc.fields[error.path];
      if (field) {
        field.push(error.msg);
        acc.fields[error.path] = field;
      } else {
        acc.fields[error.path] = [error.msg];
      }
      return acc;
    },
    { error: 'client', fields: {} }
  );
};
