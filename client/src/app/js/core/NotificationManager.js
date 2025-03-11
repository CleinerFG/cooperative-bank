import '../types/notificationType.js';
import { Notification } from '../components/common/Notification.js';
import NotificationService from '../services/NotificationService.js';
import { createState } from '../../../global/js/utils/hooks.js';

class NotificationManager {
  #service = NotificationService;
  #documentListener = this.#closeOnClickOutside.bind(this);

  /**
   * @type {[TransferNotification|LoanRequestNotification|LoanStatusNotification|PaymentNotification|InstallmentNotification]}
   */
  #data = [];
  #notificationsState = createState([]);
  #unreadNotifications = 0;
  #resolveCreateNotificationsPromise;
  #createNotificationsPromise = new Promise((resolve) => {
    this.#resolveCreateNotificationsPromise = resolve;
  });

  /**
   * @type {[Notification]}
   */
  get #notifications() {
    const [getState] = this.#notificationsState;
    return getState();
  }

  set #notifications(value) {
    const [, setState] = this.#notificationsState;
    setState(value);
  }

  get #btnElement() {
    return document.getElementById('notifications-btn');
  }

  get #unreadNotificationsElement() {
    return document.getElementById('notifications-unread');
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
    <div class="notifications-cards">
      <div class="loader"></div>
    </div>
    `;
  }

  async #fetchData() {
    try {
      this.#data = await this.#service.fetch();
    } catch (e) {
      console.log(e);
    }
  }

  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  #updateUnreadNotifications() {
    if (this.#unreadNotifications === 0) {
      this.#unreadNotificationsElement.style.display = 'none';
      return;
    }
    this.#unreadNotificationsElement.style.display = 'flex';
    this.#unreadNotificationsElement.textContent = this.#unreadNotifications;
  }

  #createNotifications() {
    this.#notifications = this.#data.map((params, index) => {
      this.#unreadNotifications += 1;
      return new Notification(index, params);
    });
  }

  #noNotificationsHandler() {
    this.#cardsContainerElement.innerHTML =
      '<p class="no-notification info-text">No notifications</p>';
  }

  #renderNotifications() {
    this.#cardsContainerElement.innerHTML = '';
    if (this.#notifications.length) {
      this.#notifications.forEach((notif) => notif.render());
      return;
    }
    this.#noNotificationsHandler();
  }

  #addDocumentListener() {
    document.addEventListener('click', this.#documentListener);
  }

  #removeDocumentListener() {
    document.removeEventListener('click', this.#documentListener);
  }

  /**
   * @param {boolean} activate
   */
  async #toggleActiveState(activate) {
    this.#btnElement.dataset.active = activate ? 'true' : 'false';
    this.#bodyOverflow = activate ? 'hidden' : '';
    this.#containerElement.classList.toggle('display-flex', activate);

    if (activate) {
      this.#addDocumentListener();
    } else {
      this.#removeDocumentListener();
    }

    await this.#createNotificationsPromise;
    this.#renderNotifications();
  }

  /**
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

  #handleBtnClick() {
    this.#toggleActiveState(this.#btnElement.dataset.active === 'false');
  }

  #handleNotificationRead() {
    this.#unreadNotifications -= 1;
    this.#updateUnreadNotifications();
  }

  /**
   * @param {Event} e
   */
  #handleNotificationRemove(e) {
    this.#notifications = this.#notifications.filter((notif) => {
      return notif.id !== e.detail.id;
    });
    if (!this.#notifications.length) {
      this.#noNotificationsHandler();
    }
  }

  #setListeners() {
    this.#btnElement.addEventListener('click', this.#handleBtnClick.bind(this));
    this.#cardsContainerElement.addEventListener(
      'notificationRemove',
      this.#handleNotificationRemove.bind(this)
    );
    this.#cardsContainerElement.addEventListener(
      'notificationRead',
      this.#handleNotificationRead.bind(this)
    );
  }

  async init() {
    this.#render();
    this.#setListeners();
    await this.#fetchData();
    this.#createNotifications();
    this.#updateUnreadNotifications();
    this.#resolveCreateNotificationsPromise(true);
  }
}

export default new NotificationManager();
