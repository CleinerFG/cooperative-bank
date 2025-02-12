import '../../types/formElementsType.js';
import Input from './Input.js';

export class SubmitButton extends Input {
  /**
   * @param {SubmitButtonParams} params
   */
  constructor(params) {
    super(params);
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
