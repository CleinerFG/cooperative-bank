const path = require("path");

module.exports = {
  path: path.resolve(__dirname, "../dist"),
  filename: "js/[name].bundle.min.js",
  clean: true,
};
