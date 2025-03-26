const createLogger = require('../lib/utils/createLogger');

module.exports = {
  seedUsersLogger: createLogger('seed-users'),
  seedDefaultLogger: createLogger('seed-default'),
};
