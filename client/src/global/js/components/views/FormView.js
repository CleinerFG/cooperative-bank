import '../../types/formElementsType.js';
import { SubmitButton } from '../form-elements/SubmitButton.js';

export class FormView {
  #containerElement;
  #id;
  #cssClass;
  #title;
  #formElementsParams;
  #submitButtonParams;
  #formElements = [];
  #submitButton;

  /**
   *
   * @param {FormViewParams} params
   * @param {[InputParams|SearchInputParams|SelectParams]} formElementsParams
   * @param {SubmitButtonParams} submitButtonParams
   */
  constructor(params, formElementsParams, submitButtonParams) {
    this.#containerElement = params.containerElement;
    this.#id = params.id;
    this.#cssClass = params.cssClass ?? '';
    this.#title = params.title;
    this.#formElementsParams = formElementsParams;
    this.#submitButtonParams = submitButtonParams;
    this.#init();
  }

  get formElement() {
    return document.getElementById(this.#id);
  }

  /**
   * @type {Array<Input | SearchInput | PasswordInput>}
   */
  get formElements() {
    return this.#formElements;
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

  get #titleTemplate() {
    if (this.#title) {
      return `
      <h3 class="form-title">${this.#title}</h3>`;
    }
    return '';
  }

  get #template() {
    return `
    <form id="${this.#id}" class="form ${this.#cssClass}">
      ${this.#titleTemplate}
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
  async #getFormElementClassByCategory(category) {
    const formElemCatMap = {
      default: () => import('../form-elements/Input.js'),
      search: () => import('../form-elements/SearchInput.js'),
      password: () => import('../form-elements/PasswordInput.js'),
      select: () => import('../form-elements/Select.js'),
    };

    const module = await formElemCatMap[category]();
    return module.default;
  }

  async #buildFormElements() {
    for (const params of this.#formElementsParams) {
      const InpClass = await this.#getFormElementClassByCategory(
        params.category
      );
      params.containerElement = this.#formGroupElement;
      const inp = new InpClass(params);
      inp.init();
      this.#formElements.push(inp);
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
        const formElements = Array.from(
          this.formElement.querySelectorAll('input, select')
        );
        const index = formElements.indexOf(document.activeElement);

        const getNextInput = (currentIndex) => {
          for (let i = currentIndex + 1; i < formElements.length; i++) {
            if (!formElements[i].disabled) {
              return formElements[i];
            }
          }
          return formElements[0];
        };

        const nextInput = getNextInput(index);
        nextInput.focus();
      }
    });
  }

  async #init() {
    this.#render();
    await this.#buildFormElements();
    this.#buildSubmitBtn();
    this.#handleChangeFocus();
  }
}
