const authService = require('../services/authService');

module.exports = (req, res, next) => {
  try {
    const token = req.cookies.token;
    const { userOpaqueId } = authService.authenticateToken(token);
    req.userOpaqueId = userOpaqueId;
    next();
  } catch (err) {
    next(err);
  }
};
