module.exports = {
  /**
   * @param {number} transactionPassword
   */
  auth(transactionPassword) {
    const isAuth = transactionPassword === 123456;
    return isAuth;
  },
};
