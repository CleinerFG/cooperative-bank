const fs = require('fs');
const path = require('path');

module.exports = {
  createLog: (name, desc, filePath) => {
    const existFile = fs.existsSync(filePath);
    const data = name + '\n' + desc + '\n';
    if (!existFile) {
      fs.appendFile(fullPath, data, (e) => {
        if (e) {
          console.error(`Error creating file: ${fullPath}`);
        }
      });
    }
  },

  updateLog: (data, filePath) => {
    const fullPath = path.resolve(__dirname, filePath);
    const breakRow = '\n---------------->';
    fs.appendFile(fullPath, data + breakRow, (e) => {
      if (e) {
        console.error(`Error updating file: ${fullPath}`);
      }
    });
  },
};
