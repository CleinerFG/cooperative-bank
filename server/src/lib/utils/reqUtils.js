const filterBody = (body, allowedFields) => {
  for (const field in body) {
    if (!allowedFields.includes(field)) {
      delete body[field];
    }
  }
  return body;
};

module.exports = { filterBody };
