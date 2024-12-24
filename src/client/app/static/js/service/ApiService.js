/**
 * Provides methods for interacting with a remote API.
 * It abstracts common HTTP methods (GET, POST, PUT, DELETE) for interacting with a backend service.
 */
export class ApiService {
  static #BASE_URL = 'http://localhost:8080/app/';

  /**
   * @param {string} endpoint
   * @param {object} [options={}]
   */
  static async #fetchData(endpoint, options = {}) {
    const res = await fetch(`${ApiService.#BASE_URL}${endpoint}`, options);
    return await res.json();
  }

  /**
   * @param {string} endpoint
   */
  static async fetchFrom(endpoint) {
    return await ApiService.#fetchData(endpoint);
  }

  /**
   * @param {string} endpoint
   * @param {object} data
   */
  static async sendTo(endpoint, data) {
    return await ApiService.#fetchData(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  /**
   * @param {string} endpoint
   * @param {Object} data
   */
  static async updateTo(endpoint, data) {
    return await ApiService.#fetchData(endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  /**
   * @param {string} endpoint
   */
  static async deleteFrom(endpoint) {
    return await ApiService.#fetchData(endpoint, {
      method: 'DELETE',
    });
  }
}
