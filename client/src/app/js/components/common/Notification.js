import '../../types/notificationType.js';
import {
  formatDate,
  numberToCurrency,
} from '../../../../global/js/utils/formatters.js';

export class Notification {
  #index;
  #params;
  static #categoryMap = {
    transfer: ({ sender, value }) => ({
      title: 'Received Transfer',
      desc: `You received a transfer of ${numberToCurrency(value)} from ${sender}`,
    }),
    loanStatus: ({ value, status }) => ({
      title: `Loan ${status}`,
      desc: `Your loan of ${numberToCurrency(value)} has been ${status}`,
    }),
    loanRequest: ({ value }) => ({
      title: 'Loan Request Received',
      desc: `You received a loan request of ${numberToCurrency(value)}`,
    }),
    payment: ({ sender, value }) => ({
      title: 'Received Payment',
      desc: `${sender} sent ${numberToCurrency(value)}`,
    }),
    installment: ({ value, date }) => ({
      title: 'Installment Due Soon',
      desc: `You have an installment due on ${formatDate(date)} in the amount of ${numberToCurrency(value)}`,
    }),
  };

  /**
   * @param {number} index
   * @param {TransferNotification|LoanRequestNotification|LoanStatusNotification|PaymentNotification|InstallmentNotification} params
   */
  constructor(index, params) {
    this.#index = index;
    this.#params = params;
  }

  get #containerElement() {
    return document.querySelector(
      '.app-container .notifications-container .notifications-cards'
    );
  }

  get #dataByCategory() {
    const { category } = this.#params;
    return Notification.#categoryMap[category](this.#params);
  }

  get #template() {
    const { title, desc } = this.#dataByCategory;
    return `
      <div id="notification-${this.#index}" class="notification">
        <header class="notification-header">
          <span class="notification-title">${title}</span>
          <span class="notification-time">1 hour ago</span>
        </header>
        <main class="notification-content">
          <p>${desc}</p>
        </main>
      </div>
    `;
  }

  

  render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }
}
