import { Router } from './Router.js';
import { AbstractGetterError } from '../errors/AbstractErrors.js';
import { capitalize } from '../utils/stringUtils.js';

/**
 * Represents a view/controller for a page.
 */
export class Page {
  static #appElement = document.getElementById('app');
  #queryParams;

  /**
   * @param {object} queryParams
   */
  constructor(queryParams) {
    this.#queryParams = queryParams;
  }

  get _queryParams() {
    return this.#queryParams;
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

  /**
   * @param {Router} router
   * @param {string} query
   */
  _handleRoutes(router, query) {
    const elements = document.querySelectorAll(query);
    elements.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        router.navigateTo(element.getAttribute('href'));
      });
    });
  }

  #setPageTitle() {
    document.title = capitalize(this._pageTitle);
  }

  #render() {
    Page.#appElement.innerHTML = this._template;
  }

  async _init() {
    this.#setPageTitle();
    this.#render();
  }
}
