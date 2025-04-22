import {
  AbstractGetterError,
  AbstractMethodError,
} from '../../../../global/js/errors/AbstractErrors.js';
import { ASSETS_ROUTE } from '../../constants/routes.js';

export class Modal {
  #category;
  #tokenPromiseResolve;
  _token = null;

  constructor(category) {
    this.#category = category;
    this._tokenPromise = new Promise((resolve) => {
      this.#tokenPromiseResolve = resolve;
    });
  }

  /**
   * @type {string}
   */
  get _headerTemplate() {
    throw new AbstractGetterError('_headerTemplate');
  }

  /**
   * @type {string}
   */
  get _contentTemplate() {
    throw new AbstractGetterError('_contentTemplate');
  }

  /**
   * @type {string}
   */
  get _footerTemplate() {
    throw new AbstractGetterError('_footerTemplate');
  }

  /**
   * @param {"hidden" | ""} value
   */
  set #bodyOverflow(value) {
    document.body.style.overflow = value;
  }

  get #modalElement() {
    return document.getElementById('modal');
  }

  get _headerElement() {
    return this.#modalElement.querySelector('.modal-header');
  }

  get _contentElement() {
    return this.#modalElement.querySelector('.modal-content');
  }

  get _footerElement() {
    return this.#modalElement.querySelector('.modal-footer');
  }

  get #closeModalBtnElement() {
    return this.#modalElement.querySelector('.close-btn');
  }

  _setup() {
    throw new AbstractMethodError('_setup');
  }

  #build() {
    return `
    <div id="modal" class="modal">
    <article class="modal-body">
      <button class="btn-unset btn-icon close-btn" aria-label="Close window">
        <img class="icon" src="${ASSETS_ROUTE}/icons/icon-close.svg" alt="Close window"/>
      </button>
      <div class="modal-container">
        <header class="modal-header">${this._headerTemplate}</header>
        <main class="modal-content ${this.#category}">
          ${this._contentTemplate}
        </main>
        <footer class="modal-footer">${this._footerTemplate}</footer>
      </div>
    </article>
    </div>
    `;
  }

  #render() {
    document.body.insertAdjacentHTML('beforeend', this.#build());
  }

  _handleCloseModal() {
    this.#tokenPromiseResolve(this._token);
    this.#modalElement.remove();
    this.#bodyOverflow = '';
  }

  _setListeners() {
    this.#closeModalBtnElement.addEventListener(
      'click',
      this._handleCloseModal.bind(this)
    );
  }

  _init() {
    this.#bodyOverflow = 'hidden';
    this.#render();
    this._setup();
    this._setListeners();
  }
}
