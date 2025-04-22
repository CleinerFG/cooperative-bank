import { translate } from '../../i18n/Translator.js';
import '../../types/formElementsType.js';
import FormComponent from './FormComponent.js';

export default class Select extends FormComponent {
  #options;

  /**
   * @param {SelectParams} params
   */
  constructor(params) {
    super(params);
    this.#options = params.options;
  }

  get #optionsTemplate() {
    return this.#options
      .map(({ value, text }) => `<option value="${value}">${text}</option>`)
      .join('');
  }

  get _template() {
    return `
      <div class="inp-group ">
        <label for="${this.id}" class="label">${this._labelText}</label>
        <div class="inp__wrapper">
          <select id="${this.id}" class="select" data-valid="false" required>
            <option value="" disabled selected>${translate('selectOption')}</option>
            ${this.#optionsTemplate}
          </select>
        </div>
        ${this._errorSpanTemplate}
      </div>
      `;
  }

  #handleValidationOnChange() {
    const value = this._formElement.value;
    if (!value) return;
    this._dataValid = true;
    this.handleFailMessage('remove');
  }

  init() {
    this._render();
    this._addCustomListener({
      eventType: 'change',
      listener: this.#handleValidationOnChange.bind(this),
    });
    this._setHandlers();
  }
}
