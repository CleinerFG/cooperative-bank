const createLogger = require('./createLogger');

module.exports = {
  seedUsersLogger: createLogger('seed-users'),
  seedDefaultLogger: createLogger('seed-default'),
  serverErrorsLogger: createLogger('server-errors'),
};
