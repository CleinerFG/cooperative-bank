const { APP_DIR, PUBLIC_DIR } = require('../config/constants');
const path = require('path');

module.exports = {
  sendAppHtml: (req, res) => {
    const filePath = path.join(APP_DIR, 'index.html');
    res.sendFile(filePath);
  },

  sendPublicHtml: (req, res) => {
    const filePath = path.join(PUBLIC_DIR, 'index.html');
    res.sendFile(filePath);
  },
};
