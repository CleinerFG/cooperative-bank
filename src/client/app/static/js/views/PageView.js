import {
  AbstractGetterError,
  AbstractMethodError,
} from '../errors/AbstractErrors.js';

/**
 * Represents a view for a page that is responsible for rendering page content dynamically.
 *
 * @class
 */
export class PageView {
  /**
   * HTML App element
   *
   * @static
   * @private
   */
  static #appElement = document.getElementById('app');

  /**
   * Initializes the view.
   */
  constructor() {
    this.#init();
  }

  /**
   * Returns the HTML template for the page.
   *
   * @protected
   * @type {string}
   * @throws {AbstractGetterError}
   */
  get _template() {
    throw new AbstractGetterError('template');
  }

  /**
   * Initialize specific page components.
   *
   * @abstract
   * @protected
   * @throws {AbstractMethodError}
   */
  _initComponents() {
    throw new AbstractMethodError('_initComponents');
  }

  /**
   * Renders the page by inserting the template into the app element.
   *
   * @private
   */
  #render() {
    PageView.#appElement.innerHTML = this._template;
  }

  /**
   * Initializes the page view by calling the render method to display the page content.
   *
   * @private
   */
  #init() {
    this.#render();
    this._initComponents();
  }
}
