const controllerResponseHandler = require('../lib/helpers/controllerResponseHandler');
const authService = require('../services/authService');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;
    const result = await authService.login({ email, password });

    if (result.error) {
      if (result.error === 'client') {
        return res.status(400).json(serviceResult);
      }
      return res.status(500).json(serviceResult);
    }

    const token = result.token;
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 3600000, // 1h
    });

    return res.json({ success: true });
  },
};
