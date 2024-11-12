import { PageView } from '../views/PageView.js';
import { AbstractMethodError } from '../errors/AbstractMethodError.js';
import { LayoutCtrl } from './LayoutCtrl.js';

/**
 * Controller for initializing and managing page components and layout.
 * This base class is responsible for setting up the page view, initializing necessary controllers, and ensuring layout management.
 *
 * @class
 */
export class PageCtrl {
  /**  Holds a reference to the view class associated with the page.
   *
   * @private
   * @type {PageView}
   */
  #PageView;

  /**
   * Constructs the instance and initializes the page components.
   *
   * @param {Class} PageView - The view class to be used for rendering the page.
   */
  constructor(PageView) {
    this.#PageView = PageView;
    this.#init();
  }

  /**
   * Initialize specific page controllers.
   *
   * @abstract
   * @private
   * @throws {AbstractMethodError}
   */
  _initControllers() {
    throw new AbstractMethodError('_initControllers');
  }

  /**
   * Initializes the page by creating a new instance of the view,
   * setting up controllers, and initiating layout control.
   *
   * @private
   */
  #init() {
    new this.#PageView();
    this._initControllers();
    new LayoutCtrl();
  }
}
