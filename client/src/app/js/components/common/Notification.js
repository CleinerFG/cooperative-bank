import '../../types/notificationType.js';
import {
  formatDate,
  numberToCurrency,
} from '../../../../global/js/utils/formatters.js';

export class Notification {
  static #deviceVw = window.innerWidth;
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

  #index;
  #params;

  /**
   * @param {number} index
   * @param {TransferNotification|LoanRequestNotification|LoanStatusNotification|PaymentNotification|InstallmentNotification} params
   */
  constructor(index, params) {
    this.#index = index;
    this.#params = params;
  }

  get #element() {
    return document.getElementById(`notification-${this.#index}`);
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

  #dispatchEventRemove() {
    this.#containerElement.dispatchEvent(
      new CustomEvent('notificationRemove', {
        detail: { index: this.#index },
      })
    );
  }

  #handleClick() {
    this.#element.classList.add('read');
  }

  #handleDragging() {
    const MAX_DISTANCE = Notification.#deviceVw * 0.3; // 30%
    let startX = 0;
    let opacity = 1;

    const updateElementStyle = (distance) => {
      opacity = Math.max(0, 1 - Math.min(Math.abs(distance) / MAX_DISTANCE, 1));
      this.#element.style.opacity = opacity;
      this.#element.style.transform = `translateX(${distance}px)`;
    };

    const startDrag = (e) => {
      startX = e.touches ? e.touches[0].clientX : e.clientX;
      this.#element.style.transform = 'scale(105%)';
      console.log('Drag start:', startX);
      addMoveEventListeners();
    };

    const moveDrag = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const distance = clientX - startX;
      updateElementStyle(distance);
    };

    const stopDrag = () => {
      if (opacity === 0) {
        this.#element.remove();
        this.#dispatchEventRemove();
      } else {
        resetElementStyle();
        removeMoveEventListeners();
      }
    };

    const addMoveEventListeners = () => {
      this.#element.addEventListener('touchmove', moveDrag);
      this.#element.addEventListener('mousemove', moveDrag);
    };

    const removeMoveEventListeners = () => {
      this.#element.removeEventListener('touchmove', moveDrag);
      this.#element.removeEventListener('mousemove', moveDrag);
    };

    const resetElementStyle = () => {
      opacity = 1;
      this.#element.style.opacity = opacity;
      this.#element.style.transform = 'translateX(0px)';
    };

    this.#element.addEventListener('touchstart', startDrag);
    this.#element.addEventListener('mousedown', startDrag);
    this.#element.addEventListener('touchend', stopDrag);
    this.#element.addEventListener('mouseup', stopDrag);
  }

  #setListeners() {
    this.#element.addEventListener('click', this.#handleClick.bind(this));
    this.#handleDragging();
  }

  render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
    this.#setListeners();
  }
}
