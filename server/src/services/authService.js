const userRepository = require('../repositories/userRepository');
const { comparePassword } = require('../lib/helpers/paswordHash');
const {
  clientErrorsHandler,
  serverErrorHandler,
} = require('../lib/helpers/errorsHandler');
const { createToken, validateToken } = require('../lib/handlers/tokenHandler');

module.exports = {
  login: async ({ email, password }) => {
    try {
      const user = await userRepository.findByEmail(email);
      if (!user) return clientErrorsHandler({ email: 'notFound' });

      const passMatch = await comparePassword(password, user.passwordHash);
      if (!passMatch)
        return clientErrorsHandler({ password: 'incorrectPassword' });

      const token = createToken(user.opaqueId);
      return { token };
    } catch (e) {
      return serverErrorHandler(e);
    }
  },

  authenticateToken: (token) => {
    try {
      const [auth, result] = validateToken(token);

      if (!auth) {
        return clientErrorsHandler({ token: result });
      }

      return { auth: true, opaqueId: result };
    } catch (e) {
      return serverErrorHandler(e);
    }
  },
};
