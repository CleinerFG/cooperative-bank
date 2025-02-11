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

  #renderNotifications() {
    this.#containerElement.innerHTML = '';
    this.#notifications.forEach((notif) => notif.render());
  }

  #handleClick() {
    const isDisplayed = this.#btnElement.dataset.display === 'true';
    console.log(isDisplayed);
    if (!isDisplayed) {
      this.#btnElement.dataset.display = 'true';
      this.#containerElement.style.display = 'fixed';
      this.#renderNotifications();
      return;
    }
    this.#containerElement.style.display = 'none';
  }

  #setListeners() {
    this.#btnElement.addEventListener('click', this.#handleClick.bind(this));
  }

  async #init() {
    await this.#fetchData();
    this.#createNotifications();
    this.#setListeners();
  }
}
