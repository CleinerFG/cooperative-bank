import { Router } from './Router.js';
import { AbstractGetterError } from '../errors/AbstractErrors.js';
import { capitalize } from '../utils/stringUtils.js';

/**
 * Represents a view/controller for a page.
 */
export class Page {
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

  async _initComponents() {}

  async _setup() {}

  /**
   * @param {Router} spaRouter
   * @param {string} query
   */
  _handleRoutes(spaRouter, query) {
    const elements = document.querySelectorAll(query);
    console.log(elements);
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
    Page.#appElement.innerHTML = this._template;
  }

  async _init() {
    this.#setPageTitle();
    this.#render();
    await this._initComponents();
    await this._setup();
  }
}
