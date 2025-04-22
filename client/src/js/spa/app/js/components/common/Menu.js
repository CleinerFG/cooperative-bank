class Menu {
  #documentListener = this.#closeOnClickOutside.bind(this);

  get #btnElement() {
    return document.querySelector('.header .btn-menu');
  }

  get #navElement() {
    return document.querySelector('.header .nav-menu');
  }

  #addDocumentListener() {
    document.addEventListener('click', this.#documentListener);
  }

  #removeDocumentListener() {
    document.removeEventListener('click', this.#documentListener);
  }

  #toggleActiveState(activate) {
    this.#btnElement.dataset.active = activate ? 'true' : 'false';
    this.#btnElement.classList.toggle('btn-active', activate);
    this.#navElement.classList.toggle('display-block', activate);

    if (activate) {
      this.#addDocumentListener();
    } else {
      this.#removeDocumentListener();
    }
  }

  /**
   * @param {Event} e
   */
  #closeOnClickOutside(e) {
    if (
      !this.#btnElement.contains(e.target) &&
      !this.#navElement.contains(e.target)
    ) {
      this.#toggleActiveState(false);
    }
  }

  #handleBtnClick() {
    this.#toggleActiveState(this.#btnElement.dataset.active === 'false');
  }

  #setListeners() {
    this.#btnElement.addEventListener('click', this.#handleBtnClick.bind(this));
  }

  init() {
    this.#setListeners();
  }
}

export default new Menu();
