import '../../types/formElementsType.js';
import Input from './Input.js';

export class SubmitButton extends Input {
  #cssClass;
  /**
   * @param {SubmitButtonParams} params
   */
  constructor(params) {
    super(params);
    this.#cssClass = params.cssClass ?? '';
  }

  get _template() {
    return `
      <button id="${this._id}" class="btn ${this.#cssClass}" type="submit">${this._labelText}</button>`;
  }

  /**
   * Overrides the method from to disable default handlers,
   * ensuring only submit-specific functionality is applied.
   */
  _setDefaultHandlers() {
    super._setDefaultHandlers(false);
  }
}
