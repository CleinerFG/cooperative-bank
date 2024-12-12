import { Input } from '../components/form/Input.js';
import { PasswordInput } from '../components/form/PasswordInput.js';
import { SearchInput } from '../components/form/SearchInput.js';
import { SubmitButton } from '../components/form/SubmitButton.js';

/**
 * Representing a form view with dynamic input rendering and functionality.
 *
 * @class
 */
export class FormView {
  /**
   * The container where the form will be rendered.
   *
   * @private
   * @type {HTMLElement}
   */
  #containerElement;

  /**
   * The CSS ID of the form element.
   *
   * @private
   * @type {string}
   */
  #id;

  /**
   * Additional CSS classes for the form.
   *
   * @private
   * @type {string}
   */
  #cssClass;

  /**
   * Configuration for the input elements.
   *
   * @private
   * @type {Array<import('../components/form/Input.js').InputDefaultConfig | import('../components/form/SearchInput.js').InputSearchConfig>}
   */
  #inputsConfig;

  /**
   * Configuration for the submit button.
   *
   * @private
   * @type {import('../components/form/SubmitButton.js').SubmitButtonConfig}
   */
  #submitConfig;

  /**
   * Array of input instances.
   *
   * @private
   * @type {Array<Input | SearchInput | PasswordInput>}
   */
  #inputs;
  constructor(config, inputsConfig, submitConfig) {
    this.#containerElement = config.containerElement;
    this.#id = config.id;
    this.#cssClass = config.cssClass ?? '';
    this.#inputsConfig = inputsConfig;
    this.#submitConfig = submitConfig;
    this.#init();
  }

  /**
   * Returns the form element.
   *
   * @public
   * @type {HTMLFormElement}
   */
  get formElement() {
    return document.getElementById(this.#id);
  }

  /**
   * Returns the array of input instances.
   *
   * @public
   * @type {Array<Input | SearchInput | PasswordInput>}
   */
  get inputs() {
    return this.#inputs;
  }

  /**
   * Returns the form group element.
   *
   * @private
   * @returns {HTMLElement} The form group container.
   */
  get #formGroupElement() {
    return document.getElementById(`form-group-${this.#id}`);
  }

  /**
   * Returns the HTML template for the form as string.
   *
   * @private
   * @type {string}
   */
  get #template() {
    return `
    <form id="${this.#id}" class="form ${this.#cssClass}">
      <div id="form-group-${this.#id}" class="form-group">       
      </div>
    </form>
    `;
  }

  /**
   * Render the form into the container.
   *
   * @private
   */
  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  /**
   * Builds and initializes input elements based on the provided configuration.
   *
   * Maps through `#inputsConfig` to create input instances based on the `category` property. Each input is initialized and stored in the `#inputs` array.
   *
   * Supported categories:
   * - `default`: `Input` class
   * - `search`: `SearchInput` class
   * - `password`: `PasswordInput` class
   *
   * @private
   */
  #buildInputs() {
    const setInp = (category) => {
      const categories = {
        default: Input,
        search: SearchInput,
        password: PasswordInput,
      };
      return categories[category];
    };

    this.#inputs = this.#inputsConfig.map((params) => {
      const InpClass = setInp(params.category);
      params.containerElement = this.#formGroupElement;
      const inp = new InpClass(params);
      inp.init();
      return inp;
    });
  }

  /**
   * Create and initialize the submit button.
   *
   * @private
   */
  #createSubmitBtn() {
    const params = this.#submitConfig;
    params.containerElement = this.formElement;
    new SubmitButton(params).init();
  }

  /**
   * Change focus between form inputs when pressing "Enter" or "Tab".
   *
   * @private
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

  /**
   * Initialize the form view by rendering the form, building inputs, creating the submit button, and adding focus handling.
   *
   * @private
   */
  #init() {
    this.#render();
    this.#buildInputs();
    this.#createSubmitBtn();
    this.#changeElementsFocus();
  }
}
