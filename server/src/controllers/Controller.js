class Controller {
  constructor(service) {
    this.service = service;
  }

  async create(req, res, next) {
    try {
      const data = req.body;
      const record = await this.service.create(data);
      return res.status(201).json(record);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
