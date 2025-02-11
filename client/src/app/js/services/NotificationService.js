import { API_BASE_URL } from '../../../global/js/constants.js';

class NotificationService {
  /**
   * @returns {Promise<[TransferNotification|LoanStatusNotification|LoanRequestNotification|PaymentNotification|InstallmentNotification]>}
   */
  async fetch() {
    const res = await fetch(`${API_BASE_URL}/notifications`);
    return await res.json();
  }
}

export default new NotificationService();
