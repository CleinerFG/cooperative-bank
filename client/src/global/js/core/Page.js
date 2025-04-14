import router from './Router.js';
import { AbstractGetterError } from '../errors/AbstractErrors.js';
import { titleCase } from '../utils/stringUtils.js';

export default class Page {
  #queryParams;

  /**
   * @param {Object<string, string>} queryParams
   */
  constructor(queryParams) {
    this.#queryParams = queryParams;
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

  get #appElement() {
    return document.getElementById('app');
  }

  get _queryParams() {
    return this.#queryParams;
  }

  _handleRoutes(querySelector) {
    const elements = document.querySelectorAll(querySelector);
    elements.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        router.navigateTo(el.getAttribute('href'));
      });
    });
  }

  #setPageTitle() {
    document.title = titleCase(this._pageTitle);
  }

  #render() {
    this.#appElement.innerHTML = this._template;
  }

  async _init() {
    this.#setPageTitle();
    this.#render();
  }
}
