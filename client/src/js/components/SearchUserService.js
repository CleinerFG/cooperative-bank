import '../types/userType.js';
import { API_BASE_URL } from '../constants/config.js';

class SearchUserService {
  /**
   * @returns {Promise<User>}
   */
  async getUserByCpf(cpf) {
    const res = await fetch(`${API_BASE_URL}/users/${cpf}`);
    return await res.json();
  }
}

export default new SearchUserService();
