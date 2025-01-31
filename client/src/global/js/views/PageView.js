import { Router } from '../core/Router.js';
import {
  AbstractGetterError,
  AbstractMethodError,
} from '../errors/AbstractErrors.js';
import { capitalize } from '../utils/stringUtils.js';

/**
 * Represents a view for a page that is responsible for rendering page content dynamically.
 */
export class PageView {
  static #appElement = document.getElementById('app');

  constructor() {
    this._init();
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

  /**
   * @param {Router} spaRouter
   * @param {string} query
   */
  _handleRoutes(spaRouter, query) {
    const elements = document.querySelectorAll(query);
    elements.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        spaRouter.navigateTo(element.getAttribute('href'));
      });
    });
  }

  #setPageTitle() {
    document.title = capitalize(this._pageTitle);
  }

  #render() {
    PageView.#appElement.innerHTML = this._template;
  }

  async _init() {
    this.#setPageTitle();
    this.#render();
    await this._initComponents();
  }
}
