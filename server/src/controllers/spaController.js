const { APP_DIR, PUBLIC_DIR } = require('../config/constants');
const path = require('path');

module.exports = {
  sendAppHtml: (req, res) => {
    const filePath = path.join(APP_DIR, 'index.html');
    console.log('Serving APP HTML:', filePath);

    res.sendFile(filePath, (e) => {
      if (e) {
        console.error(`Error sending APP file: ${filePath}`, e);
        res.status(500).send('Error loading file.');
      }
    });
  },

  sendPublicHtml: (req, res) => {
    const filePath = path.join(PUBLIC_DIR, 'index.html');
    console.log('Serving PUBLIC HTML:', filePath);

    res.sendFile(filePath, (e) => {
      if (e) {
        console.error(`Error sending PUBLIC file: ${filePath}`, e);
        res.status(500).send('Error loading file.');
      }
    });
  },
};
