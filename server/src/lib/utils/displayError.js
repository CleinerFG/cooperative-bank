const { log, logRow } = require('./consoleLogger');

const econnrefusedMessage = `Possible causes:
The target server or service is not running.
The server is configured to not accept connections from your machine or network.
A firewall or other security is blocking the connection.
The host or port is incorrect.
`;

const timeOutMessage = `Possible causes:
The host or port is incorrect.
Simultaneous connection limit.
Unstable connection.
`;

const accessDeniedMessage = `User or password is incorrect`;

const errorsMap = {
  ECONNREFUSED: {
    title: 'ECONNREFUSED - Connection to MySQL server failed',
    message: econnrefusedMessage,
  },
  ETIMEDOUT: {
    title: 'ETIMEDOUT - Connection to MySQL server timeout',
    message: timeOutMessage,
  },
  ER_ACCESS_DENIED_ERROR: {
    title: 'ER_ACCESS_DENIED_ERROR - Connection to MySQL server denied',
    message: accessDeniedMessage,
  },
};

module.exports = (error) => {
  if (errorsMap[error.code]) {
    log('error', errorsMap[error.code].title);
    log('error', errorsMap[error.code].message);
  } else {
    log('error', 'Unknown error:');
    log('error', error);
  }
  logRow('section');
};
