import '../types/accountType.js';
import { API_BASE_URL } from '../../../global/js/constants/config.js';

class AccountService {
  #BASE_ENDPOINT = `${API_BASE_URL}/account`;

  /**
   * @returns {Promise<UserInfo>}
   */
  async getUserInfo() {
    const res = await fetch(`${this.#BASE_ENDPOINT}/user`);
    return await res.json();
  }

  /**
   *
   * @returns {Promise<Balance>}
   */
  async getBalance() {
    const res = await fetch(`${this.#BASE_ENDPOINT}/balance`);
    return await res.json();
  }
}

export default new AccountService();
