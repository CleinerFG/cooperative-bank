const SERVER_HOST = process.env.SERVER_HOST ?? 'localhost';
const SERVER_PORT = process.env.SERVER_PORT ?? '8080';
export const API_BASE_URL = `http://${SERVER_HOST}:${SERVER_PORT}/api`;
