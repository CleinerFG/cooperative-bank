import { API_BASE_URL } from '../../constants.js';

export class FormService {
  #endpoint;
  constructor(endpoint) {
    this.#endpoint = endpoint;
  }

  /**
   * @param {object} data
   */
  async fetch(data) {
    const res = await fetch(`${API_BASE_URL}${this.#endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(`Server return: ${res}`);
    return await res.json();
  }
}
