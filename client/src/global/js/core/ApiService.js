export default class AuthService {
  async get(route) {
    return await fetch(`${API_BASE_URL}${route}`);
  }

  async post(route, data) {
    return fetch(`${API_BASE_URL}${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}
