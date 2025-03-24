const jwt = require('jsonwebtoken');
const { cookieSecret } = require('../../config/config');

module.exports = {
  createToken: (opaqueId) => {
    const token = jwt.sign({ opaqueId }, cookieSecret, {
      expiresIn: 3600000, // 1h
    });
    return token;
  },

  validateToken: (token) => {
    try {
      const { opaqueId } = jwt.verify(token, cookieSecret);

      if (!opaqueId) throw new Error('opaqueIdNotDefined');

      return [true, opaqueId];
    } catch (e) {
      if (e.name === 'JsonWebTokenError') {
        if (['invalid token', 'jwt malformed'].includes(e.message)) {
          return [false, 'invalidToken'];
        }

        if (e.message === 'jwt must be provided') {
          return [false, 'notProvidedToken'];
        }
      }

      if (e.name === 'TokenExpiredError') {
        return [false, 'tokenExpired'];
      }
      throw e;
    }
  },
};
