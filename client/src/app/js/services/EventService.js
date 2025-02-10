import { API_BASE_URL } from '../../../global/js/constants.js';

class EventService {
  async getPayments() {
    const res = await fetch(`${API_BASE_URL}/events/payment`);
    return await res.json();
  }

  async getInvestments() {
    const res = await fetch(`${API_BASE_URL}/events/investment`);
    return await res.json();
  }
}

export default new EventService();
