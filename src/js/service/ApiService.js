class ApiService {
  #BASE_URL = "http://localhost:3000/";

  async #fetchData(endpoint, options = {}) {
    const res = await fetch(`${this.#BASE_URL}${endpoint}`, options);
    return await res.json();
  }

  async fetchFrom(endpoint) {
    return await this.#fetchData(endpoint);
  }

  async postTo(endpoint, data) {
    return await this.#fetchData(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  async updateTo(endpoint, data) {
    return await this.#fetchData(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  async deleteFrom(endpoint) {
    return await this.#fetchData(endpoint, {
      method: "DELETE",
    });
  }
}

export const ApiService = new ApiService();
