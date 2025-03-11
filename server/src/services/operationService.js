module.exports = {
  /**
   * @param {number} operationPassword
   */
  auth(operationPassword) {
    const isAuth = operationPassword === 123456;
    return isAuth;
  },
};
