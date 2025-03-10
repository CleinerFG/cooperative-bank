import '../types/formDataType.js';
import '../types/loanType.js';
import { API_BASE_URL } from '../../../global/js/constants/config.js';

class LoanService {
  static #BASE_ENDPOINT = `${API_BASE_URL}/loans`;

  /**
   * @param {'payable'|'receivable'} category
   * @returns {Promise<LoanOverviewData[]>}
   */
  async getLoansOverview(category) {
    const res = await fetch(`${LoanService.#BASE_ENDPOINT}/${category}`);
    return await res.json();
  }

  /**
   * @param {'payable'|'receivable'} id
   * @param {string} id
   * @returns {Promise<LoanDetailsData[]>}
   */
  async getLoanDetails(category, id) {
    const res = await fetch(
      `${LoanService.#BASE_ENDPOINT}/${category}/details/${id}`
    );
    return await res.json();
  }

  /**
   * @param {'open'|'received'} id
   * @param {string} id
   * @returns {Promise<RequestDetailsData[]>}
   */
  async getRequestDetails(category, id) {
    const res = await fetch(
      `${LoanService.#BASE_ENDPOINT}/requests/${category}/details/${id}`
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
   * @param {string} loanId
   * @returns {Promise<LoanInstallmentData[]>}
   */
  async getInstallments(loanId) {
    const res = await fetch(
      `${LoanService.#BASE_ENDPOINT}/installments/${loanId}`
    );
    return await res.json();
  }

  /**
   * @param {string} installmentId
   * @returns {Promise<LoanInstallmentPaymentData[]>}
   */
  async getInstallmentPayment(installmentId) {
    const res = await fetch(
      `${LoanService.#BASE_ENDPOINT}/installments/payment/${installmentId}`
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
