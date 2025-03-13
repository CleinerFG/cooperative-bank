/**
 * @type {'development'|"production"}
 */
const ENV = process.env.NODE_ENV ?? 'development';

const HOST = process.env.HOST ?? 'localhost';
const PORT = process.env.PORT ?? 8080;

module.exports = { HOST, PORT, ENV };
