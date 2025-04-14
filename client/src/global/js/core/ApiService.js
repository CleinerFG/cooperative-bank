import { API_BASE_URL } from '../constants/config.js';

export default class AuthService {
  async post(route, data) {
    const res = await fetch(`${API_BASE_URL}${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  }
}
