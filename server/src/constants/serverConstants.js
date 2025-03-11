const path = require('path');

const UPLOADS_DIR = path.resolve(__dirname, '../../uploads');
const PROFILE_IMGS_DIR = path.join(UPLOADS_DIR, 'profile-images');

module.exports = { UPLOADS_DIR, PROFILE_IMGS_DIR };
