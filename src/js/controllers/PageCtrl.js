import { PageView } from '../views/PageView.js';
import { initLayout } from '../components/layout/initLayout.js';
import {
  AbstractGetterError,
  AbstractMethodError,
} from '../errors/AbstractErrors.js';

/**
 * Controller for initializing and managing page components and layout.
 * This base class is responsible for setting up the page view, initializing necessary controllers, and ensuring layout management.
 *
 * @class
 */
export class PageCtrl {
  constructor() {
    this.#init();
  }

  /**
   * Returns the PageView class
   *
   * @abstract
   * @type {PageView}
   * @throws {AbstractGetterError}
   */
  get _ViewClass() {
    throw AbstractGetterError('_ViewClass');
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
    new this._ViewClass();
    this._initControllers();
    initLayout();
  }
}
