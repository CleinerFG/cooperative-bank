import '../types/formDataType.js';
import { API_BASE_URL } from '../../../global/js/constants.js';

class AuthService {
  /**
   * @param {FormDataTransactionPassword} data
   */
  async transaction(data) {
    const res = await fetch(`${API_BASE_URL}/auth/transaction`, {
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
