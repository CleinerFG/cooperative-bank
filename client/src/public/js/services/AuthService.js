import '../types/formDataType.js';
import { API_BASE_URL } from '../../../global/js/constants.js';

class AuthService {
  /**
   * @param {FormDataLogin} data
   */
  async login(data) {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  }

  /**
   * @param {FormDataRegister} data
   */
  async register(data) {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  }
}

export default new AuthService();
