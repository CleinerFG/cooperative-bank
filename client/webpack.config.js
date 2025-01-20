const generateWebpackConfig = require('./config/generateWebpackConfig');

const appConfig = generateWebpackConfig('app');
const publicConfig = generateWebpackConfig('public');

module.exports = [appConfig, publicConfig];
