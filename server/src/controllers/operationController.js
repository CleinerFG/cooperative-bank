const service = require('../services/operationService');

module.exports = {
  auth: (req, res) => {
    const { transactionPassword } = req.body;
    try {
      const isAuth = service.auth(transactionPassword);
      if (isAuth) return res.json({ success: isAuth, token: 'token-123' });
      return res.status(401).json({
        success: isAuth,
        token: null,
        errors: [
          { componentId: 'transactionPassword', error: 'incorrectPassword' },
        ],
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
};
