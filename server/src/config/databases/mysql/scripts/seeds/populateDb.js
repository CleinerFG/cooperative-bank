const insertUsers = require('./insertUsers');
const { log, logRow } = require('../../../../../lib/utils/consoleLogger');

module.exports = async () => {
  log('section', 'Populating tables...');
  const users = await insertUsers();
  log('content', 'The tables were populeted');
  logRow('section');
};
