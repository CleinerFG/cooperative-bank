import { API_BASE_URL } from '../../../global/js/constants/config.js';

class AccountService {
  #BASE_ENDPOINT = `${API_BASE_URL}/account`;

  /**
   * @returns {Promise<{ name: string, birth: string, cpf: string, email: string, registration: string }>}
   */
  async getUserInfo() {
    const res = await fetch(`${this.#BASE_ENDPOINT}/user`);
    return await res.json();
  }

  /**
   *
   * @returns {Promise<number>}
   */
  async getAmount() {
    const res = await fetch(`${this.#BASE_ENDPOINT}/amount`);
    return await res.json();
  }
}

export default new AccountService();
