import NotificationService from '../services/NotificationService.js';
import { Notification } from '../components/common/Notification.js';
import '../types/notificationTypes.js';

class NotificationManager {
  #service = NotificationService;

  /**
   * @type {[TransferNotification|LoanRequestNotification|LoanStatusNotification|PaymentNotification|InstallmentNotification]}
   */
  #data = [];

  /**
   * @type {[Notification]}
   */
  #notifications = [];

  get #btnElement() {
    return document.getElementById('notifications-btn');
  }

  get #containerElement() {
    return document.querySelector('.app-container .notifications-container');
  }

  get #appElement() {
    return document.getElementById('app');
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

  /**
   * @param {boolean} activate
   */
  #toggleActiveState(activate) {
    this.#btnElement.dataset.active = activate ? 'true' : 'false';
    this.#bodyOverflow = activate ? 'hidden' : '';
    this.#containerElement.classList.toggle('display-flex', activate);
    this.#appElement.classList.toggle('blur', activate);

    if (activate) this.#renderNotifications();
  }

  /**
   *
   * @param {Event} e
   */
  #closeOnClickOutside(e) {
    if (
      !this.#btnElement.contains(e.target) &&
      !this.#containerElement.contains(e.target)
    ) {
      this.#toggleActiveState(false);
    }
  }

  #handleClick() {
    this.#toggleActiveState(this.#btnElement.dataset.active === 'false');
  }

  #setListeners() {
    this.#btnElement.addEventListener('click', this.#handleClick.bind(this));
    window.addEventListener('click', this.#closeOnClickOutside.bind(this));
  }

  async init() {
    await this.#fetchData();
    this.#createNotifications();
    this.#render();
    this.#setListeners();
  }
}

export default new NotificationManager();
