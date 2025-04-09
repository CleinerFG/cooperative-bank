const { tokenExpires } = require('../config/config');
const authService = require('../services/authService');

class AuthController {
  constructor() {
    this.service = authService;
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    try {
      const token = await this.service.login(email, password);

      res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: tokenExpires,
      });
      return res.json({ success: true });
    } catch (err) {
      next(err);
    }
  }
}

const authController = new AuthController();
module.exports = authController;
