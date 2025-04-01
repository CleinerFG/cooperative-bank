const userService = require('../services/userService');
const responseHandler = require('../lib/handlers/responseHandler.js');

module.exports = {
  async create(req, res) {
    const data = req.body;
    const result = await userService.create({ ...data });
    return responseHandler(res, result, () => res.status(201).json());
  },

  async getByCpf(req, res) {
    const cpf = req.params.cpf;
    const result = await userService.getByCpf(cpf);
    return responseHandler(res, result);
  },

  async getAccountBalance(req, res) {
    const opaqueId = req.userOpaqueId;
    const balance = await userService.getAccountBalance(opaqueId);
    return res.json(balance);
  },

  async getAccountDetails(req, res) {
    const opaqueId = req.userOpaqueId;
    const details = await userService.getAccountDetails(opaqueId);
    return res.json(details);
  },

  async getProfileImgPath(req, res) {
    const opaqueId = req.userOpaqueId;
    try {
      const photoPath = await userService.getProfileImgPathById(opaqueId);
      res.sendFile(photoPath);
    } catch (e) {
      res.status(204);
    }
  },
};
