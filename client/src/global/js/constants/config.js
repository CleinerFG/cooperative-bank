export const SERVER_IP = '192.168.0.5';
export const API_BASE_URL = `http://${SERVER_IP}:8080/api`;

/** --- Dev test --- */

// Time in seconds when making a request to the server API
// WARNING: The constant may be cached by Webpack in build-dev mode.
// If you need to modify it, you might have to rebuild manually.
export const SIMULATE_SERVER_WAIT = 0;
