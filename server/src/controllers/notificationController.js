const service = require('../services/notificationService');

module.exports = {
  async getAll(req, res) {
    try {
      const notifications = await service.getAll();
      if (!notifications || notifications.length === 0) return res.status(204);
      res.json(notifications);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
};
