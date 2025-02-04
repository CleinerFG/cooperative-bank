import { API_BASE_URL } from '../../../../../global/js/constants.js';

export class AccountService {
  get #endpoint() {
    return '/account/info';
  }

  /**
   * @returns {Promise<{ name: string, birth: string, cpf: string, email: string, registration: string }>}
   */
  async fetch() {
    const res = await fetch(`${API_BASE_URL}${this.#endpoint}`);
    return await res.json();
  }
}
