const { SPA_DIR } = require('../config/constants');
const path = require('path');

class SpaController {
  async sendHtml(req, res) {
    const filePath = path.join(SPA_DIR, 'index.html');
    return res.sendFile(filePath);
  }
}

const spaController = new SpaController();
module.exports = spaController;
