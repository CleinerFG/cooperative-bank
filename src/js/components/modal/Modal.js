import {
  AbstractGetterError,
  AbstractMethodError,
} from '../../errors/AbstractErrors';

/**
 *  A modal component with a customizable content section.
 * The modal is appended to the document body and includes built-in functionality to handle close events.
 *
 * @class
 */
export class Modal {
  /**
   * Initializes the modal.
   */
  constructor() {
    this._init();
  }

  /**
   * Returns the content as a HTML string.
   *
   * @abstract
   * @protected
   * @type {string}
   * @throws {AbstractGetterError}
   */
  get _modalContent() {
    throw new AbstractGetterError('_modalContent');
  }

  /**
   * Sets the `overflow` style of the `document.body`.
   *
   * @private
   * @param {"hidden" | ""} value
   */
  set #bodyOverflow(value) {
    document.body.style.overflow = value;
  }

  /**
   * A placeholder for initializing custom controllers.
   *
   * @abstract
   * @protected
   */
  _initControllers() {
    throw new AbstractMethodError('_initControllers');
  }

  /**
   * Builds the HTML structure as a string.
   *
   * @private
   * @type {string}
   */
  #build() {
    return `
    <div id="modal" class="modal">
    <article class="modal__body">
      <button class="modal__close-btn" aria-label="Close window">
        &times;
      </button>
      <section class="modal__content">
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
    const closeModalBtn = document.querySelector('.modal__close-btn');
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
    this._initControllers();
  }
}
