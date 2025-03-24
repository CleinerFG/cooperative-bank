module.exports = {
  serverErrorHandler: (error) => {
    console.error(error);
    return { error: 'server' };
  },

  clientErrorsHandler: (fields) => {
    return { error: 'client', fields };
  },
};
