import { SubmitButton } from '../components/form/SubmitButton.js';

/**
 * @typedef {object} FormViewConfig
 * @property {HTMLElement} containerElement
 * @property {string} id
 * @property {string | undefined} cssClass
 */

/**
 * Representing a form view with dynamic input rendering and functionality.
 */
export class FormView {
  /**
   * @type {HTMLElement}
   */
  #containerElement;

  /**
   * @type {string}
   */
  #id;

  /**
   * @type {string}
   */
  #cssClass;

  /**
   * @type {Array<import('../components/form/Input.js').InputDefaultConfig | import('../components/form/SearchInput.js').InputSearchConfig>}
   */
  #inputsConfig;

  /**
   * @type {import('../components/form/SubmitButton.js').SubmitButtonConfig}
   */
  #submitConfig;

  /**
   * @type {Array<Input | SearchInput | PasswordInput>}
   */
  #inputs;

  /**
   *
   * @param {FormViewConfig} config
   * @param {Array<import('../components/form/Input.js').InputDefaultConfig | import('../components/form/SearchInput.js').InputSearchConfig>} inputsConfig
   * @param {import('../components/form/SubmitButton.js').SubmitButtonConfig} submitConfig
   */
  constructor(config, inputsConfig, submitConfig) {
    this.#containerElement = config.containerElement;
    this.#id = config.id;
    this.#cssClass = config.cssClass ?? '';
    this.#inputsConfig = inputsConfig;
    this.#submitConfig = submitConfig;
    this.#init();
  }

  /**
   * @type {HTMLFormElement}
   */
  get formElement() {
    return document.getElementById(this.#id);
  }

  /**
   * @type {Array<Input | SearchInput | PasswordInput>}
   */
  get inputs() {
    return this.#inputs;
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
   * @param {'default' | 'search' | 'password'} category
   */
  async #getInputClassByCategory(category) {
    const catInpMap = {
      default: () => import('../components/form/Input.js'),
      search: () => import('../components/form/SearchInput.js'),
      password: () => import('../components/form/PasswordInput.js'),
    };

    const module = await catInpMap[category]();
    return module.default;
  }

  async #buildInputs() {
    this.#inputs = [];

    for (const params of this.#inputsConfig) {
      const InpClass = await this.#getInputClassByCategory(params.category);
      params.containerElement = this.#formGroupElement;
      const inp = new InpClass(params);
      inp.init();
      this.#inputs.push(inp);
    }
  }

  #buildSubmitBtn() {
    const params = this.#submitConfig;
    params.containerElement = this.formElement;
    new SubmitButton(params).init();
  }

  /**
   * Change focus between form inputs when pressing "Enter" or "Tab".
   */
  #changeElementsFocus() {
    this.formElement.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === 'Tab') {
        ev.preventDefault();
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
    this.#changeElementsFocus();
  }
}
