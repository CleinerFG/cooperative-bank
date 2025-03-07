const IP = process.env.IP ?? 'localhost';
const PORT = process.env.PORT ?? 8080;
const ENV = process.env.NODE_ENV ?? 'development';

module.exports = { IP, PORT, ENV };
