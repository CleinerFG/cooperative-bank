import { appRouter } from '../../core/appRouter.js';
import { Theme } from './Theme.js';
import { NotificationManager } from './NotificationManager.js';

/**
 * Initializes the layout components (Header, Footer and Theme).
 * Instantiate this class in the main SPA script.
 */
export class Layout {
  constructor() {
    this.#init();
  }

  get #btnMenuElement() {
    return document.querySelector('.header .btn-menu');
  }

  get #navMenuElement() {
    return document.querySelector('.header .nav-menu');
  }

  #toggleMenu() {
    this.#btnMenuElement.classList.toggle('btn-active');
    this.#navMenuElement.classList.toggle('display-block');
  }

  #closeMenuOnClickOutside(e) {
    if (
      !this.#btnMenuElement.contains(e.target) &&
      !this.#navMenuElement.contains(e.target)
    ) {
      this.#btnMenuElement.classList.remove('btn-active');
      this.#navMenuElement.classList.remove('display-block');
    }
  }

  #setListeners() {
    this.#btnMenuElement.addEventListener('click', this.#toggleMenu.bind(this));
    window.addEventListener('click', this.#closeMenuOnClickOutside.bind(this));
  }

  #handleRoutes() {
    const anchors = document.querySelectorAll('[data-link]');
    anchors.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        appRouter.navigateTo(element.getAttribute('href'));
      });
    });
  }

  #init() {
    document.addEventListener('DOMContentLoaded', () => {
      new Theme();
      this.#setListeners();
      this.#handleRoutes();
      new NotificationManager();
    });
  }
}
