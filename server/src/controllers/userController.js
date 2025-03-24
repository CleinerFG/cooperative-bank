const service = require('../services/userService');
const responseHandler = require('../lib/handlers/responseHandler.js');

module.exports = {
  async create(req, res) {
    const data = req.body;
    const result = await service.create({ ...data });

    return responseHandler(res, result, () => res.status(201).json());
  },

  async getByCpf(req, res) {
    const cpf = req.params.cpf;
    const result = await service.getByCpf(cpf);
    return responseHandler(res, result);
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
