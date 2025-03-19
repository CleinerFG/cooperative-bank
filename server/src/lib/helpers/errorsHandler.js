module.exports = {
  serverErrorHandler: (error) => {
    console.error(error);
    return { error: { type: 'server' } };
  },

  clientErrorsHandler: (fields) => {
    return { error: { type: 'client', fields } };
  },
};
