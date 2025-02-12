import { API_BASE_URL } from '../../../global/js/constants.js';

class LoanService {
  #BASE_ENDPOINT = `${API_BASE_URL}/loan`;

  /**
   * @param {'payable'|'receivable'} category
   */
  async getActiveLoans(category) {
    const res = await fetch(`${this.#BASE_ENDPOINT}/overview/${category}`);
    return await res.json();
  }

  /**
   * @param {'received'|'opened'} category
   */
  async getLoanRequests(category) {
    const res = await fetch(`${this.#BASE_ENDPOINT}/requests/${category}`);
    return await res.json();
  }
}

export default new LoanService();
