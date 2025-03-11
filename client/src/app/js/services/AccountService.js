import '../types/accountType.js';
import { API_BASE_URL } from '../../../global/js/constants/config.js';

class AccountService {
  #BASE_ENDPOINT = `${API_BASE_URL}/account`;

  /**
   * @returns {Promise<UserInfo>}
   */
  async getDetails() {
    const res = await fetch(`${this.#BASE_ENDPOINT}/details`);
    return await res.json();
  }

  /**
   * @returns {Promise<Balance>}
   */
  async getBalance() {
    const res = await fetch(`${this.#BASE_ENDPOINT}/balance`);
    return await res.json();
  }

  /**
   * @returns {Promise<string>}
   */
  async getProfileImgUrl() {
    const res = await fetch(`${this.#BASE_ENDPOINT}/profile-img`);
    if (res.status === 200) {
      const blob = await res.blob();
      return URL.createObjectURL(blob);
    }
    return '';
  }
}

export default new AccountService();
