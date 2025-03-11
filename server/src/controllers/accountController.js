const service = require('../services/accountService');

module.exports = {
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
