export class ApiService {
  static #BASE_URL = "http://localhost:3000/";

  static async #fetchData(endpoint, options = {}) {
    const res = await fetch(`${ApiService.#BASE_URL}${endpoint}`, options);
    return await res.json();
  }

  static async fetchFrom(endpoint) {
    return await ApiService.#fetchData(endpoint);
  }

  static async sendTo(endpoint, data) {
    return await ApiService.#fetchData(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  static async updateTo(endpoint, data) {
    return await ApiService.#fetchData(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  static async deleteFrom(endpoint) {
    return await ApiService.#fetchData(endpoint, {
      method: "DELETE",
    });
  }
}
