import appRouter from './appRouter.js';
import theme from '../components/common/Theme.js';

/**
 * Initializes the layout components (Header, Footer and Theme).
 */
class Layout {
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

  init() {
    theme.init();
    this.#setListeners();
    this.#handleRoutes();
  }
}

export default new Layout();
