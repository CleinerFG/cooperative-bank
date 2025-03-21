const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
const {
  authUserLoginValidation,
} = require('../lib/helpers/user/serviceValidators');
const { comparePassword } = require('../lib/helpers/paswordHash');
const {
  clientErrorsHandler,
  serverErrorHandler,
} = require('../lib/helpers/errorsHandler');
const { COOKIE_SECRET } = require('../config/constants');

module.exports = {
  login: async ({ email, password }) => {
    try {
      const [isValid, fields] = await authUserLoginValidation({
        email,
        password,
      });

      if (!isValid) return clientErrorsHandler(fields);

      const user = await userRepository.findByEmail({
        email,
      });

      if (!user) return clientErrorsHandler({ email: 'notFound' });

      const passMatch = await comparePassword(password, user.passwordHash);
      if (!passMatch)
        return clientErrorsHandler({ password: 'incorrectPassword' });

      const token = jwt.sign({ opaqueId: user.opaqueId }, COOKIE_SECRET);
      return { token };
    } catch (e) {
      return serverErrorHandler(e);
    }
  },
};
