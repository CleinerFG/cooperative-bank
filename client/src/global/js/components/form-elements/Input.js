import '../../types/formElementsType.js';
import FormComponent from './FormComponent.js';

export default class Input extends FormComponent {
  /**
   * @param {InputParams} params
   */
  constructor(params) {
    const inputmode = Input.#getInputmode(params);
    const placeholder =
      params.placeholder ?? Input.#getPlaceholderByFormatter(params);
    super({
      type: params.type ?? 'text',
      inputmode,
      placeholder,
      ...params,
    });
  }

  /**
   * @param {InputParams}
   */
  static #getInputmode({ formatter, type }) {
    if (formatter) {
      return ['cpf', 'percent', 'currency', 'strictNumber'].includes(formatter)
        ? 'numeric'
        : 'text';
    }
    if (type) {
      return ['email', 'date'].includes(type) ? type : 'text';
    }
    return 'text';
  }

  /**
   * @param {InputParams}
   */
  static #getPlaceholderByFormatter({ formatter }) {
    const placeholdersMap = {
      cpf: '000.000.000-00',
      percent: '0,00%',
      currency: 'R$ 0,00',
    };
    return placeholdersMap[formatter] ?? '';
  }

  get _template() {
    return `
    <div class="inp-group ">
      <label for="${this.id}" class="label">${this._labelText}</label>
      <div class="inp__wrapper">
        <input id="${this.id}" placeholder="${this._placeholder}" type="${this._type}" inputmode="${this._inputmode}" autocomplete="off" name="${this.id}" aria-label="${this._labelText}"
        class="inp" data-valid="false">
      </div>
      ${this._errorSpanTemplate}
    </div>`;
  }

  init() {
    super.init();
    super._setHandlers(['listeners', 'formatter']);
  }
}
