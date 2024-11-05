import { Input } from "./Input.js";

/**
 * Represents a submit button element within a form.
 *
 * @extends Input
 */
export class SubmitButton extends Input {
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
