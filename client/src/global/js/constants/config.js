const SERVER_IP = process.env.SERVER_IP ?? 'localhost';
const SERVER_PORT = process.env.SERVER_PORT ?? '8080';
export const API_BASE_URL = `http://${SERVER_IP}:${SERVER_PORT}/api`;
