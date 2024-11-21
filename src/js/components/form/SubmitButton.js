import { Input } from './Input.js';

/**
 * @typedef {object} SubmitButtonConfig - Configuration object for creating a submit button.
 * @property {HTMLElement} containerElement - The container where the button will be added.
 * @property {string} id - The unique identifier for the button element.
 * @property {string} labelText - Button text.
 * @property {string} cssClass - CSS class for styling.
 */

/**
 * Represents a submit button element within a form.
 *
 * @class
 * @extends Input
 *
 */
export class SubmitButton extends Input {
  /**
   * Creates an instance of Submit Button.
   *
   * @param {SubmitButtonConfig} config - Object with the submit button config.
   */
  constructor(config) {
    super(config);
  }
  /**
   * Provides the HTML template for rendering the submit button.
   * @protected
   * @type {string}
   * @override
   */
  get _template() {
    return `
      <button id="${this._id}" class="btn btn-action ${this._cssClass}" type="submit">${this._labelText}</button>`;
  }

  /**
   * Sets up event handlers specific to the submit button.
   * Overrides the `_setupHandlers` method from `Input` to disable default handlers,
   * ensuring only submit-specific functionality is applied.
   * @protected
   * @override
   */
  _setupHandlers() {
    super._setupHandlers(false);
  }
}
