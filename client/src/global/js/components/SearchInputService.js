import { API_BASE_URL } from '../constants/config.js';
import { NotFoundError } from '../errors/InputErrors.js';

export class SearchInputService {
  #endpoint;
  #query;
  constructor(endpoint, query) {
    this.#endpoint = endpoint;
    this.#query = query;
  }

  /**
   * @returns {Promise<{ cpf: string, name: string }>}
   */
  async fetch() {
    const res = await fetch(
      `${API_BASE_URL}${this.#endpoint}?cpf=${this.#query}`
    );
    const data = await res.json();

    if (!res.ok) throw new NotFoundError(data.message);
    return data;
  }
}
