const userRepository = require('../repositories/userRepository');
const { comparePassword } = require('../lib/helpers/paswordHash');
const { clientErrorsHandler } = require('../lib/handlers/errorsHandler');
const { createToken, validateToken } = require('../lib/handlers/tokenHandler');

module.exports = {
  login: async ({ email, password }) => {
    const user = await userRepository.findByEmail(email);
    if (!user) return clientErrorsHandler({ email: 'notFound' });

    const passMatch = await comparePassword(password, user.passwordHash);
    if (!passMatch)
      return clientErrorsHandler({ password: 'incorrectPassword' });

    const token = createToken(user.opaqueId);
    return { token };
  },

  authenticateToken: (token) => {
    const [auth, result] = validateToken(token);

    if (!auth) {
      return clientErrorsHandler({ token: result });
    }
    return { auth: true, opaqueId: result };
  },
};
