const { APP_DIR, PUBLIC_DIR } = require('../config/constants');
const path = require('path');

class SpaController {
  async sendHtml(req, res, dir) {
    const filePath = path.join(dir, 'index.html');
    return res.sendFile(filePath);
  }

  async sendAppHtml(req, res) {
    return await this.sendHtml(req, res, APP_DIR);
  }

  async sendPublicHtml(req, res) {
    return await this.sendHtml(req, res, PUBLIC_DIR);
  }
}

const spaController = new SpaController();
module.exports = spaController;
