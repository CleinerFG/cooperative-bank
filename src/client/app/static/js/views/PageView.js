import {
  AbstractGetterError,
  AbstractMethodError,
} from '../errors/AbstractErrors.js';
import { capitalize } from '../utils/stringUtils.js';

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
    throw new AbstractGetterError('_template');
  }

  /**
   * Returns the title for the page.
   *
   * @protected
   * @type {string}
   * @throws {AbstractGetterError}
   */
  get _pageTitle() {
    throw new AbstractGetterError('_pageTitle');
  }

  /**
   * Initialize specific page components.
   *
   * @async
   * @abstract
   * @protected
   * @throws {AbstractMethodError}
   */
  async _initComponents() {
    throw new AbstractMethodError('_initComponents');
  }

  /**
   * Sets the page title
   *
   * @private
   */
  #setTitle() {
    document.title = capitalize(this._pageTitle);
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
    this.#setTitle();
    this.#render();
    this._initComponents();
  }
}
