import '../types/formDataType.js';
import { API_BASE_URL } from '../../../global/js/constants/config.js';

class AuthService {
  /**
   * @param {FormDataoperationPassword} data
   */
  async operation(data) {
    const res = await fetch(`${API_BASE_URL}/auth/operation`, {
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
