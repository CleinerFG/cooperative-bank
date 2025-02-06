import { SubmitButton } from '../components/form/SubmitButton.js';

/**
 * @typedef {object} FormViewParams
 * @property {HTMLElement} containerElement
 * @property {string} id
 * @property {string | undefined} cssClass
 */

/**
 * Representing a form view with dynamic input rendering and functionality.
 */
export class FormView {
  #containerElement;
  #id;
  #cssClass;
  #inputsParams;
  #submitButtonParams;
  #inputs = [];
  #submitButton;

  /**
   *
   * @param {FormViewParams} params
   * @param {Array<import('../components/form/Input.js').InputParams | import('../components/form/SearchInput.js').SearchInputParams>} inputsParams
   * @param {import('../components/form/SubmitButton.js').SubmitButtonParams} submitButtonParams
   */
  constructor(params, inputsParams, submitButtonParams) {
    this.#containerElement = params.containerElement;
    this.#id = params.id;
    this.#cssClass = params.cssClass ?? '';
    this.#inputsParams = inputsParams;
    this.#submitButtonParams = submitButtonParams;
    this.#init();
  }

  get formElement() {
    return document.getElementById(this.#id);
  }

  /**
   * @type {Array<Input | SearchInput | PasswordInput>}
   */
  get inputs() {
    return this.#inputs;
  }

  /**
   * @type {SubmitButton}
   */
  get submitButton() {
    return this.#submitButton;
  }

  get #formGroupElement() {
    return document.getElementById(`form-group-${this.#id}`);
  }

  get #template() {
    return `
    <form id="${this.#id}" class="form ${this.#cssClass}">
      <div id="form-group-${this.#id}" class="form-group">       
      </div>
    </form>
    `;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  /**
   * @param {'default'|'search'|'password'|'select'} category
   */
  async #getInputClassByCategory(category) {
    const catInpMap = {
      default: () => import('../components/form/Input.js'),
      search: () => import('../components/form/SearchInput.js'),
      password: () => import('../components/form/PasswordInput.js'),
      select: () => import('../components/form/Select.js'),
    };

    const module = await catInpMap[category]();
    return module.default;
  }

  async #buildInputs() {
    for (const params of this.#inputsParams) {
      const InpClass = await this.#getInputClassByCategory(params.category);
      params.containerElement = this.#formGroupElement;
      const inp = new InpClass(params);
      inp.init();
      this.#inputs.push(inp);
    }
  }

  #buildSubmitBtn() {
    const params = this.#submitButtonParams;
    params.containerElement = this.formElement;
    const btn = new SubmitButton(params);
    btn.init();
    this.#submitButton = btn;
  }

  /**
   * Change focus between form inputs when pressing "Enter" or "Tab".
   */
  #handleChangeFocus() {
    this.formElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
        const inputs = Array.from(this.formElement.querySelectorAll('input'));
        const index = inputs.indexOf(document.activeElement);

        const getNextInput = (currentIndex) => {
          for (let i = currentIndex + 1; i < inputs.length; i++) {
            if (!inputs[i].disabled) {
              return inputs[i];
            }
          }
          return inputs[0];
        };

        const nextInput = getNextInput(index);
        nextInput.focus();
      }
    });
  }

  async #init() {
    this.#render();
    await this.#buildInputs();
    this.#buildSubmitBtn();
    this.#handleChangeFocus();
  }
}
