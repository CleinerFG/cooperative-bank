/**
 * Provides methods for interacting with a remote API.
 * It abstracts common HTTP methods (GET, POST, PUT, DELETE) for interacting with a backend service.
 */
export class ApiService {
  static #BASE_URL = 'http://localhost:8080/';

  /**
   * Helper function to perform the fetch operation for various HTTP methods.
   * @param {string} endpoint
   * @param {object} [options={}]
   * @returns {Promise<object>}
   */
  static async #fetchData(endpoint, options = {}) {
    const res = await fetch(`${ApiService.#BASE_URL}${endpoint}`, options);
    return await res.json();
  }

  /**
   * Fetches data from the specified endpoint using the GET method.
   * @param {string} endpoint
   * @returns {Promise<object>}
   */
  static async fetchFrom(endpoint) {
    return await ApiService.#fetchData(endpoint);
  }

  /**
   * Sends data using the POST method.
   * @param {string} endpoint
   * @param {object} data
   * @returns {Promise<object>}
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
   * Updates data using the PUT method.
   * @param {string} endpoint
   * @param {Object} data
   * @returns {Promise<object>}
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
   * Deletes data using the DELETE method.
   * @param {string} endpoint
   * @returns {Promise<object>}
   */
  static async deleteFrom(endpoint) {
    return await ApiService.#fetchData(endpoint, {
      method: 'DELETE',
    });
  }
}
