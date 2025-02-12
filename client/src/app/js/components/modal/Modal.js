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
  constructor() {
    this._init();
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

  /**
   * Renders the modal by appending it to the document body.
   *
   * @private
   */
  #render() {
    document.body.insertAdjacentHTML('beforeend', this.#build());
  }

  /**
   * Defines event listeners for the modal, including the close button functionality.
   *
   * @private
   */
  #defineListeners() {
    const modalElement = document.getElementById('modal');
    const closeModalBtn = document.querySelector('.modal .close-btn');
    closeModalBtn.addEventListener('click', () => {
      modalElement.remove();
      this.#bodyOverflow = '';
    });
  }

  /**
   * Initializes the modal by:
   * - Setting the body overflow to "hidden".
   * - Rendering the modal HTML.
   * - Defining event listeners.
   * - Initializing controllers (if overridden in a subclass).
   *
   * @private
   */
  _init() {
    this.#bodyOverflow = 'hidden';
    this.#render();
    this.#defineListeners();
    this._setup();
  }
}
