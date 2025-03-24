module.exports = {
  cookieSecret: process.env.COOKIE_SECRET,
  simulateResDelayMs: 0,
  host: process.env.SERVER_HOST ?? 'localhost',
  port: process.env.SERVER_PORT ?? 8080,
};
