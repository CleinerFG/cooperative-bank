/**
 * A utility class that provides methods for interacting with
 * a remote API. It abstracts common HTTP methods (GET, POST, PUT, DELETE)
 * for interacting with a backend service.
 *
 * @class
 */
export class ApiService {
  /**
   * Base URL for API requests.
   *
   * @private
   * @type {string}
   * @constant
   */
  static #BASE_URL = 'http://localhost:5000/';

  /**
   * Helper function to perform the fetch operation for various HTTP methods.
   *
   * @async
   * @private
   * @param {string} endpoint - The API endpoint to interact with.
   * @param {object} [options={}] - The options to configure the fetch request.
   * @returns {Promise<object>} The parsed JSON response.
   */
  static async #fetchData(endpoint, options = {}) {
    const res = await fetch(`${ApiService.#BASE_URL}${endpoint}`, options);
    return await res.json();
  }

  /**
   * Fetches data from the specified endpoint using the GET method.
   *
   * @async
   * @public
   * @param {string} endpoint - The API endpoint to fetch data from.
   * @returns {Promise<object>} The parsed JSON response from the API.
   */
  static async fetchFrom(endpoint) {
    return await ApiService.#fetchData(endpoint);
  }

  /**
   * Sends data to the specified endpoint using the POST method.
   *
   * @async
   * @public
   * @param {string} endpoint - The API endpoint to send data to.
   * @param {object} data - The data to send to the API.
   * @returns {Promise<object>} The parsed JSON response from the API.
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
   * Updates data at the specified endpoint using the PUT method.
   *
   * @async
   * @public
   * @param {string} endpoint - The API endpoint to update data at.
   * @param {Object} data - The data to update at the API.
   * @returns {Promise<object>} The parsed JSON response from the API.
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
   * Deletes data from the specified endpoint using the DELETE method.
   *
   * @async
   * @public
   * @param {string} endpoint - The API endpoint to delete data from.
   * @returns {Promise<object>} The parsed JSON response from the API.
   */
  static async deleteFrom(endpoint) {
    return await ApiService.#fetchData(endpoint, {
      method: 'DELETE',
    });
  }
}
