const service = require('../services/userService');

module.exports = {
  async getByCpf(req, res) {
    try {
      const cpf = req.params.cpf;
      const user = await service.getByCpf(cpf);
      if (!user) {
        return res.status(404).json({ error: 'notFoundUser' });
      }
      res.json({ name: user.name });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
};
