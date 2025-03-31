const loanService = require('../services/loanService');
const responseHandler = require('../lib/handlers/responseHandler.js');

module.exports = {
  async create(req, res) {
    const data = req.body;
    const result = await loanService.create({ ...data });

    return responseHandler(res, result, () => res.status(201).json());
  },

  // async getAllByCategory(req, res) {
  //   try {
  //     const { category } = req.params;
  //     const loans = await service.getAllByCategory(category);
  //     if (!loans || loans.length === 0) return res.sendStatus(204);
  //     return res.json(loans);
  //   } catch (e) {
  //     return res.status(400).json({ error: e.message });
  //   }
  // },

  // async getDetailsByCategoryAndId(req, res) {
  //   try {
  //     const { category, id } = req.params;
  //     const loan = await service.getDetailsByCategoryAndId(category, id);
  //     if (!loan) return res.sendStatus(204);
  //     return res.json(loan);
  //   } catch (e) {
  //     return res.status(400).json({ error: e.message });
  //   }
  // },
};
