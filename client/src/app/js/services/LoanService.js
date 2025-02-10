import { API_BASE_URL } from '../../../global/js/constants.js';

class LoanService {
  /**
   * @param {'payable'|'receivable'} category
   */
  async getActiveLoans(category) {
    const res = await fetch(`${API_BASE_URL}/loan/overview/${category}`);
    return await res.json();
  }

  /**
   * @param {'received'|'opened'} category
   */
  async getLoanRequests(category) {
    const res = await fetch(`${API_BASE_URL}/loan/requests/${category}`);
    return await res.json();
  }
}

export default new LoanService();
