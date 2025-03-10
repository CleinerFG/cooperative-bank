const service = require('../services/loanRequestService');

module.exports = {
  async getAllByCategory(req, res) {
    const { category } = req.params;
    try {
      const requests = await service.getAllByCategory(category);
      if (!requests || requests.length === 0) return res.status(204);
      return res.json(requests);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },
  async getDetailsByCategoryAndId(req, res) {
    const { category, id } = req.params;
    try {
      const request = await service.getDetailsByCategoryAndId(category, id);
      if (!request) return res.status(204);
      return res.json(request);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },
};
