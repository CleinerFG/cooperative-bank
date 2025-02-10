import { API_BASE_URL } from '../constants.js';

/**
 * Generic service
 */
class ApiService {
  /**
   * @param {string} endpoint
   */
  async fetch(endpoint) {
    const res = await fetch(`${API_BASE_URL}${endpoint}`);
    return await res.json();
  }
}

export default new ApiService();
