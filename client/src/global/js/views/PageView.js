import {
  AbstractGetterError,
  AbstractMethodError,
} from '../../../global/js/errors/AbstractErrors.js';
import { capitalize } from '../utils/stringUtils.js';

/**
 * Represents a view for a page that is responsible for rendering page content dynamically.
 */
export class PageView {
  static #appElement = document.getElementById('app');

  constructor() {
    this.#init();
  }

  /**
   * @type {string}
   */
  get _template() {
    throw new AbstractGetterError('_template');
  }

  /**
   * @type {string}
   */
  get _pageTitle() {
    throw new AbstractGetterError('_pageTitle');
  }

  async _initComponents() {
    throw new AbstractMethodError('_initComponents');
  }

  #setPageTitle() {
    document.title = capitalize(this._pageTitle);
  }

  #render() {
    PageView.#appElement.innerHTML = this._template;
  }

  async #init() {
    this.#setPageTitle();
    this.#render();
    await this._initComponents();
  }
}
