module.exports = {
  serverErrorHandler: (error) => {
    console.error(error);
    return { error: { type: 'server' } };
  },

  userErrorsHandler: (fields) => {
    return { error: { type: 'user', fields } };
  },
};
