const HOST = process.env.HOST ?? 'localhost';
const PORT = process.env.PORT ?? 8080;
const ENV = process.env.NODE_ENV ?? 'development';

module.exports = { HOST, PORT, ENV };
