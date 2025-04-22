import NotAuthModal from '../components/modals/NotAuthModal.js';
import { API_BASE_URL } from '../constants/config.js';

export default class AuthService {
  async get(route) {
    const res = await fetch(`${API_BASE_URL}${route}`);

    if (res.status === 401) new NotAuthModal();
    return res;
  }

  async post(route, data) {
    const res = await fetch(`${API_BASE_URL}${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.status === 401) new NotAuthModal();
    return res;
  }
}
