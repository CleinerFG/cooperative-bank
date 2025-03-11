const service = require('../services/operationService');

module.exports = {
  auth: (req, res) => {
    const { operationPassword } = req.body;
    try {
      const isAuth = service.auth(operationPassword);
      if (isAuth) return res.json({ success: isAuth, token: 'token-123' });
      return res.status(401).json({
        success: isAuth,
        token: null,
        errors: [
          { componentId: 'operationPassword', error: 'incorrectPassword' },
        ],
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
};
