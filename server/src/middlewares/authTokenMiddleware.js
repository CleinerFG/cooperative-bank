const authService = require('../services/authService');

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  const result = authService.authenticateToken(token);

  if (!result.auth) {
    if (result.error === 'client') {
      return res.status(401).json(result);
    }
    return res.status(500).json(result);
  }

  req.userOpaqueId = result.opaqueId;

  next();
};
