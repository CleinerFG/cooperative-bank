import { Input } from '../components/form/Input.js';
import { PasswordInput } from '../components/form/PasswordInput.js';
import { SearchInput } from '../components/form/SearchInput.js';
import { SubmitButton } from '../components/form/SubmitButton.js';

export class FormView {
  #containerElement;
  #id;
  #cssClass;
  #inputsConfig;
  #submitConfig;
  #inputs;
  constructor(config, inputsConfig, submitConfig) {
    this.#containerElement = config.containerElement;
    this.#id = config.id;
    this.#cssClass = config.cssClass ?? '';
    this.#inputsConfig = inputsConfig;
    this.#submitConfig = submitConfig;
    this.#init();
  }

  get formElement() {
    return document.getElementById(this.#id);
  }

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

  #createInputSubmit() {
    const params = this.#submitConfig;
    params.containerElement = this.formElement;
    new SubmitButton(params).init();
  }

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

  #init() {
    this.#render();
    this.#buildInputs();
    this.#createInputSubmit();
    this.#changeElementsFocus();
  }
}
