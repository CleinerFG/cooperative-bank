const path = require('path');

const UPLOADS_DIR = path.resolve(__dirname, '../../uploads');
const PROFILE_IMGS_DIR = path.join(UPLOADS_DIR, 'profile-images');
const SIMULATE_RES_DELAY = 3000;

module.exports = { UPLOADS_DIR, PROFILE_IMGS_DIR, SIMULATE_RES_DELAY };
