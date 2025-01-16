import { Input } from './Input.js';

/**
 * @typedef {object} SubmitButtonConfig
 * @property {HTMLElement} containerElement
 * @property {string} id
 * @property {string} labelText
 * @property {string} cssClass
 */

/**
 * Represents a submit button element.
 */
export class SubmitButton extends Input {
  /**
   * @param {SubmitButtonConfig} config
   */
  constructor(config) {
    super(config);
  }

  get _template() {
    return `
      <button id="${this._id}" class="btn btn-action ${this._cssClass}" type="submit">${this._labelText}</button>`;
  }

  /**
   * Overrides the method from to disable default handlers,
   * ensuring only submit-specific functionality is applied.
   */
  _setDefaultHandlers() {
    super._setDefaultHandlers(false);
  }
}
