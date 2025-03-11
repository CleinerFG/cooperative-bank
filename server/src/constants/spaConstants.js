const path = require('path');

const APP_DIR = path.resolve(__dirname, '../../../client/dist/app');
const PUBLIC_DIR = path.resolve(__dirname, '../../../client/dist/public');

const APP_STATIC_DIR = path.join(APP_DIR, 'static');
const PUBLIC_STATIC_DIR = path.join(PUBLIC_DIR, 'static');

module.exports = { APP_DIR, PUBLIC_DIR, APP_STATIC_DIR, PUBLIC_STATIC_DIR };
