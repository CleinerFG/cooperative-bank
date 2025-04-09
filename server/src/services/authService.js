const jwt = require('jsonwebtoken');
const { tokenExpires, cookieSecret } = require('../config/config');
const userRepository = require('../repositories/userRepository');
const { comparePassword } = require('../lib/helpers/paswordHash');
const InvalidFieldsError = require('../errors/InvalidFieldsError');
const AuthTokenError = require('../errors/AuthTokenError');
class AuthService {
  constructor() {
    this.repository = userRepository;
  }

  #createToken(userOpaqueId) {
    const token = jwt.sign({ userOpaqueId }, cookieSecret, {
      expiresIn: tokenExpires,
    });
    return token;
  }

  async login(email, password) {
    const user = await this.repository.findByEmail(email);
    if (!user) throw new InvalidFieldsError({ email: ['userNotFound'] });

    const passMatch = await comparePassword(String(password), user.password);
    if (!passMatch)
      throw new InvalidFieldsError({ password: ['incorrectPassword'] });

    return this.#createToken(user.opaqueId);
  }

  authenticateToken(token) {
    try {
      const { userOpaqueId } = jwt.verify(token, cookieSecret);
      return { auth: true, userOpaqueId };
    } catch (err) {
      if (err instanceof jwt.JsonWebTokenError) {
        if (err.message === 'jwt must be provided')
          throw new AuthTokenError('notProvidedToken');

        if (err.name === 'TokenExpiredError')
          throw new AuthTokenError('tokenExpired');

        throw new AuthTokenError('invalidToken');
      }
      throw err;
    }
  }
}

const authService = new AuthService();
module.exports = authService;
