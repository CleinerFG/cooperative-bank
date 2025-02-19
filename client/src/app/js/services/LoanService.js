import '../types/formDataType.js';
import '../types/loanType.js';
import { API_BASE_URL } from '../../../global/js/constants.js';

class LoanService {
  _BASE_ENDPOINT = `${API_BASE_URL}/loan`;

  /**
   * @param {'payable'|'receivable'} category
   * @returns {Promise<LoanOverviewData[]>}
   */
  async getLoansOverview(category) {
    const res = await fetch(`${this._BASE_ENDPOINT}/overview/${category}`);
    return await res.json();
  }

  /**
   * @param {string} id
   * @returns {Promise<LoanDetailsData[]>}
   */
  async getLoanDetailsOverview(id) {
    const res = await fetch(`${this._BASE_ENDPOINT}/details/overview?id=${id}`);
    return await res.json();
  }

  /**
   * @param {string} id
   * @returns {Promise<LoanRequestDetailsData[]>}
   */
  async getLoanDetailsRequest(id) {
    const res = await fetch(`${this._BASE_ENDPOINT}/details/request?id=${id}`);
    return await res.json();
  }

  /**
   * @param {'received'|'opened'} category
   */
  async getRequests(category) {
    const res = await fetch(`${this._BASE_ENDPOINT}/requests/${category}`);
    return await res.json();
  }

  /**
   * @param {FormDataLoanRequest} data
   */
  async newRequest(data) {
    const res = await fetch(`${this._BASE_ENDPOINT}/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  }
}

export default new LoanService();
