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

  async getBalance(req, res) {
    const balance = await service.getBalance();
    return res.json(balance);
  },
  async getDetails(req, res) {
    const details = await service.getDetails();
    return res.json(details);
  },
  async getProfileImg(req, res) {
    const id = '123'; // Initial test
    try {
      const photoPath = await service.getProfileImgPathById(id);
      res.sendFile(photoPath);
    } catch (e) {
      res.status(204);
    }
  },
};
