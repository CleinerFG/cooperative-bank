const service = require('../services/loanRequestService');

module.exports = {
  async getByCategory(req, res) {
    const category = req.params.category;
    try {
      const requests = await service.getByCategory(category);
      return res.json(requests);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },
  async getDetailsByCategoryAndId(req, res) {
    const category = req.params.category;
    const id = req.params.id;
    try {
      const request = await service.getDetailsByCategoryAndId(category, id);
      return res.json(request);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },
};
