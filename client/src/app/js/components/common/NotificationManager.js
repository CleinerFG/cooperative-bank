import NotificationService from '../../services/NotificationService.js';
import { Notification } from './Notification.js';
import '../../types/notificationTypes.js';

export class NotificationManager {
  #service = NotificationService;

  /**
   * @type {[TransferNotification|LoanRequestNotification|LoanStatusNotification|PaymentNotification|InstallmentNotification]}
   */
  #data = [];

  /**
   * @type {[Notification]}
   */
  #notifications = [];

  constructor() {
    this.#init();
  }

  get #btnElement() {
    return document.getElementById('notifications-btn');
  }

  get #containerElement() {
    return document.querySelector('.app-container .notifications-container');
  }

  get #cardsContainerElement() {
    return this.#containerElement.querySelector('.notifications-cards');
  }

  /**
   * @param {"hidden" | ""} value
   */
  set #bodyOverflow(value) {
    document.body.style.overflow = value;
  }

  get #template() {
    return `
    <h2>Notifications</h2>
    <div class="notifications-cards"></div>
    `;
  }

  async #fetchData() {
    try {
      this.#data = await this.#service.fetch();
    } catch (e) {
      console.log(e);
    }
  }

  #createNotifications() {
    this.#notifications = this.#data.map((params, index) => {
      return new Notification(index, params);
    });
  }

  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  #renderNotifications() {
    this.#cardsContainerElement.innerHTML = '';
    this.#notifications.forEach((notif) => notif.render());
  }

  #handleClick() {
    const isActive = this.#btnElement.dataset.active === 'true';

    if (!isActive) {
      this.#btnElement.dataset.active = 'true';
      this.#bodyOverflow = 'hidden';
      this.#renderNotifications();
    } else {
      this.#btnElement.dataset.active = 'false';
      this.#bodyOverflow = '';
    }
    this.#containerElement.classList.toggle('display-flex');
  }

  #setListeners() {
    this.#btnElement.addEventListener('click', this.#handleClick.bind(this));
  }

  async #init() {
    await this.#fetchData();
    this.#createNotifications();
    this.#render();
    this.#setListeners();
  }
}
