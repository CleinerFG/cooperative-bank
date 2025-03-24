const winston = require('winston');
const path = require('path');

function createLogger(filename) {
  return winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      winston.format.errors({ stack: true }),
      winston.format.printf(({ timestamp, level, message, stack }) => {
        return `${timestamp} ${level}: ${message} ${stack ? '\n' + stack : ''}`;
      })
    ),
    transports: [
      new winston.transports.File({
        filename: path.resolve(__dirname, `../../logs/${filename}.log`),
      }),
    ],
  });
}

module.exports = createLogger;
