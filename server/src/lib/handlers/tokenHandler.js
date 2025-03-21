const jwt = require('jsonwebtoken');
const { COOKIE_SECRET } = require('../../config/constants');

module.exports = {
  createToken: (opaqueId) => {
    const token = jwt.sign({ opaqueId }, COOKIE_SECRET, {
      expiresIn: 3600000, // 1h
    });
    return token;
  },

  validateToken: (token) => {
    try {
      const { opaqueId } = jwt.verify(token, COOKIE_SECRET);

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
