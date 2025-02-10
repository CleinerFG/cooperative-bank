import { API_BASE_URL } from '../../../global/js/constants.js';

class AccountService {
  #baseEndpoint = `${API_BASE_URL}/account`;

  async #fetch(endpoint) {
    const res = await fetch(`${this.#baseEndpoint}${endpoint}`);
    return await res.json();
  }

  /**
   * @returns {Promise<{ name: string, birth: string, cpf: string, email: string, registration: string }>}
   */
  async getUserInfo() {
    return this.#fetch('/user');
  }

  /**
   *
   * @returns {Promise<number>}
   */
  async getAmount() {
    return this.#fetch('/amount');
  }
}

export default new AccountService();
