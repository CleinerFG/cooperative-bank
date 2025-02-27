import '../types/formDataType.js';
import '../types/loanType.js';
import { API_BASE_URL } from '../../../global/js/constants/config.js';

class LoanService {
  static #BASE_ENDPOINT = `${API_BASE_URL}/loan`;

  /**
   * @param {'payable'|'receivable'} category
   * @returns {Promise<LoanOverviewData[]>}
   */
  async getLoansOverview(category) {
    const res = await fetch(
      `${LoanService.#BASE_ENDPOINT}/overview/${category}`
    );
    return await res.json();
  }

  /**
   * @param {string} id
   * @returns {Promise<LoanDetailsData[]>}
   */
  async getLoanDetails(id) {
    const res = await fetch(
      `${LoanService.#BASE_ENDPOINT}/overview/details?id=${id}`
    );
    return await res.json();
  }

  /**
   * @param {string} id
   * @returns {Promise<RequestDetailsData[]>}
   */
  async getRequestDetails(id) {
    const res = await fetch(
      `${LoanService.#BASE_ENDPOINT}/request/details?id=${id}`
    );
    return await res.json();
  }

  /**
   * @param {'received'|'open'} category
   */
  async getRequests(category) {
    const res = await fetch(
      `${LoanService.#BASE_ENDPOINT}/requests/${category}`
    );
    return await res.json();
  }

  /**
   * @param {string} id
   * @returns {Promise<LoanInstallmentData[]>}
   */
  async getInstallments(id) {
    const res = await fetch(
      `${LoanService.#BASE_ENDPOINT}/installments?id=${id}`
    );
    return await res.json();
  }

  /**
   * @param {string} id
   * @returns {Promise<LoanInstallmentPaymentData[]>}
   */
  async getInstallmentPayment(id) {
    const res = await fetch(
      `${LoanService.#BASE_ENDPOINT}/installments/payment?id=${id}`
    );
    return await res.json();
  }

  /**
   * @param {FormDataLoanRequest} data
   */
  async newRequest(data) {
    const res = await fetch(`${LoanService.#BASE_ENDPOINT}/requests`, {
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
