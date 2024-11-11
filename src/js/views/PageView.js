import { AbstractMethodError } from '../errors/AbstractMethodError.js';

/**
 * Represents a view for a page that is responsible for rendering page content dynamically.
 *
 * @class
 */
export class PageView {
  /**
   * HTML body element
   *
   * @private
   */
  #bodyElement = document.body;

  /**
   * Initializes the page view by rendering the content.
   */
  constructor() {
    this.#init();
  }

  /**
   * Returns the HTML template for the page.
   *
   * @private
   * @type {string}
   */
  get #template() {
    return `
      <main class="main">
      ${this._pageContent()}
      </main>
    `;
  }

  /**
   * Returns the content of the page, typically HTML.
   *
   * @abstract
   * @protected
   * @throws {AbstractMethodError}
   */
  _pageContent() {
    throw new AbstractMethodError('_pageContent');
  }

  /**
   * Renders the page by inserting the template into the body element.
   *
   * @private
   */
  #render() {
    this.#bodyElement.insertAdjacentHTML('beforeend', this.#template);
  }

  /**
   * Initializes the page view by calling the render method to display the page content.
   *
   * @private
   */
  #init() {
    this.#render();
  }
}
