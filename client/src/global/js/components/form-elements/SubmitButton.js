import '../../types/formElementsType.js';
import FormComponent from './FormComponent.js';

export class SubmitButton extends FormComponent {
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
      <button id="${this.id}" class="btn ${this.#cssClass}" type="submit">${this._labelText}</button>`;
  }
}
