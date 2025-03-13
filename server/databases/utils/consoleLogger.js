const pino = require('pino');

const logger = pino({
  level: 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

/**
 * @param {string} message
 * @param {'red'|'green'|'yellow'|'blue'|'white'|'reset'} color
 */
function colorizeMessage(message, color) {
  const colorCodes = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    white: '\x1b[37m',
    reset: '\x1b[0m',
  };
  return `${colorCodes[color] || ''}${message}${colorCodes.reset}`;
}

/**
 * @param {'title'|'section'|'content'|'error'|'fatal'} type
 * @param {string} txt
 */
const log = (type, txt) => {
  const typeMap = {
    title: () => {
      const coloredTxt = colorizeMessage(`[${txt}]`, 'green');
      logger.info(coloredTxt);
    },
    section: () => {
      const coloredTxt = colorizeMessage(`--> ${txt}`, 'blue');
      logger.info(coloredTxt);
    },
    content: () => {
      const coloredTxt = colorizeMessage(`- ${txt}`, 'blue');
      logger.info(coloredTxt);
    },
    error: () => {
      const coloredTxt = colorizeMessage(`- ${txt}`, 'red');
      logger.error(coloredTxt);
    },
    fatal: () => {
      const coloredTxt = colorizeMessage(`--> ${txt}`, 'red');
      logger.fatal(coloredTxt);
    },
  };

  if (typeMap[type]) {
    return typeMap[type]();
  } else logger.info(txt);
};

/**
 * @param {'section'|'end'} type
 */
const logRow = (type) => {
  const patternMap = {
    section: '- - -',
    end: '~ - ~',
  };

  const coloredMsg = colorizeMessage(patternMap[type].repeat(10), 'white');
  logger.info(coloredMsg);
};

module.exports = { log, logRow };
