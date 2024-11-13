import { Input } from './Input.js';

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
   * @param {object} params - Object with the submit button config.
   * @param {HTMLElement} params.containerElement - The container where the button will be added.
   * @param {string} params.id - The unique identifier for the button element.
   * @param {string} params.textContent - Button text.
   * @param {string} [params.cssClass=""] - Optional CSS class for styling.
   */
  constructor(params) {
    super(params);
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
