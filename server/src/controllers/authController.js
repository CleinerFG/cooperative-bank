const { tokenExpires } = require('../config/config');
const responseHandler = require('../lib/handlers/responseHandler');
const authService = require('../services/authService');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;
    const result = await authService.login({ email, password });

    return responseHandler(res, result, () => {
      const token = result.token;

      res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: tokenExpires,
      });
      return res.json();
    });
  },
};
