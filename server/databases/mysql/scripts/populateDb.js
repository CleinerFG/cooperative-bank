const { insertUsers } = require('./populate_data/insertUsers');
const { log } = require('../../utils/consoleLogger');
const { insertAccounts } = require('./populate_data/insertAccounts');

module.exports = async () => {
  log('section', 'Populating tables...');
  await insertUsers();
  await insertAccounts();
  log('content', 'The tables were populeted');
};
