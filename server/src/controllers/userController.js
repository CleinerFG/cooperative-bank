const service = require('../services/userService');

module.exports = {
  async getUserByCpf(req, res) {
    try {
      const cpf = req.params.cpf;
      const user = await service.getUserByCpf(cpf);
      if (!user) {
        return res.status(404).json({ error: 'USER_001' });
      }
      res.json({ name: user.name });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
};
