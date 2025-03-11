require('dotenv').config();
const createDatabasesByEnvMode = require('./handlers/createDatabasesByEnvMode');

createDatabasesByEnvMode();
