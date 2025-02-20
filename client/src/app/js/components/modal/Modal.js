import {
  AbstractGetterError,
  AbstractMethodError,
} from '../../../../global/js/errors/AbstractErrors.js';
import { ASSETS_ROUTE } from '../../constants/routes.js';

/**
 *  A modal component with a customizable content section.
 * The modal is appended to the document body and includes built-in functionality to handle close events.
 */
export class Modal {
  #tokenPromiseResolve;
  _token = null;

  constructor() {
    this._tokenPromise = new Promise((resolve) => {
      this.#tokenPromiseResolve = resolve;
    });
  }

  /**
   * @type {string}
   */
  get _modalContent() {
    throw new AbstractGetterError('_modalContent');
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
      <button class="close-btn" aria-label="Close window">
        <img src="${ASSETS_ROUTE}/icons/icon-close.svg" alt="Close window"/>
      </button>
      <section class="modal-content">
        ${this._modalContent}
      </section>
    </article>
    </div>
    `;
  }

  #render() {
    document.body.insertAdjacentHTML('beforeend', this.#build());
  }

  #handleCloseModal() {
    this.#tokenPromiseResolve(this._token);
    this.#modalElement.remove();
    this.#bodyOverflow = '';
  }

  _setListeners() {
    this.#closeModalBtnElement.addEventListener(
      'click',
      this.#handleCloseModal.bind(this)
    );
  }

  _init() {
    this.#bodyOverflow = 'hidden';
    this.#render();
    this._setup();
    this._setListeners();
  }
}
