import {
  AbstractGetterError,
  AbstractMethodError,
} from '../../errors/AbstractErrors.js';

/**
 * Abstract base class for defining the layout.
 * Ensures that essential methods for rendering, path handling, and event setup
 * are implemented in subclasses.
 *
 * @class
 * @abstract
 */
export class Layout {
  /**
   * Initializes a new instance of the Layout class and triggers the initial setup.
   */
  constructor() {
    this.#init();
  }

  /**
   * Template getter for the HTML structure of the layout.
   * This method must be overridden by subclasses.
   *
   * @protected
   * @abstract
   * @throws {AbstractGetterError}
   * @type {string}
   */
  get _template() {
    throw new AbstractGetterError('_template');
  }

  /**
   * Renders the layout template at the specified position in the document body.
   *
   * @protected
   * @param {InsertPosition} position - The position to insert the layout HTML (`beforebegin`, `afterbegin`, `beforeend`, or `afterend`).
   */
  _render(position) {
    document.body.insertAdjacentHTML(position, this._template);
  }

  /**
   * Handles asset paths for the layout.
   * This method must be implemented in subclasses to define path-specific behavior.
   *
   * @protected
   * @abstract
   * @throws {AbstractMethodError}
   */
  _pathHandler() {
    throw new AbstractMethodError('_pathHandler');
  }

  /**
   * Sets up event listeners for the layout.
   * This method must be implemented in subclasses to add event listeners.
   *
   * @protected
   * @abstract
   * @throws {AbstractMethodError}
   */
  _setupListeners() {
    throw new AbstractMethodError('_setupListeners');
  }

  /**
   * Initialization method that calls the essential layout setup functions.
   * @private
   */
  #init() {
    this._render();
    this._pathHandler();
    this._setupListeners();
  }
}
