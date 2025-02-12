import appRouter from './appRouter.js';
import theme from '../components/common/Theme.js';

class Layout {
  #documentListener = this.#closeMenuOnClickOutside.bind(this);

  get #btnMenuElement() {
    return document.querySelector('.header .btn-menu');
  }

  get #navMenuElement() {
    return document.querySelector('.header .nav-menu');
  }

  /**
   * @param {Event} e
   */
  #closeMenuOnClickOutside(e) {
    if (
      !this.#btnMenuElement.contains(e.target) &&
      !this.#navMenuElement.contains(e.target)
    ) {
      this.#btnMenuElement.dataset.active = 'false';
      this.#btnMenuElement.classList.remove('btn-active');
      this.#navMenuElement.classList.remove('display-block');
      this.#removeDocumentListener();
    }
  }

  #addDocumentListener() {
    document.addEventListener('click', this.#documentListener);
  }

  #removeDocumentListener() {
    document.removeEventListener('click', this.#documentListener);
  }

  #toggleMenu() {
    const isActive = this.#btnMenuElement.dataset.active === 'true';
    this.#btnMenuElement.dataset.active = isActive ? 'false' : 'true';

    if (isActive) {
      this.#removeDocumentListener();
    } else {
      this.#addDocumentListener();
    }

    this.#btnMenuElement.classList.toggle('btn-active');
    this.#navMenuElement.classList.toggle('display-block');
  }

  #setListeners() {
    this.#btnMenuElement.addEventListener('click', this.#toggleMenu.bind(this));
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
