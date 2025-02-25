import '../types/formElementsType.js';
import { SubmitButton } from './form-elements/SubmitButton.js';
import assetManager from '../core/AssetManager.js';

export class FormView {
  #containerElement;
  #id;
  #header;
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
    this.#header = params.header;
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

  get #submitBtnElement() {
    return this.formElement.querySelector(`#${this.#submitButton.id}`);
  }

  get #formGroupElement() {
    return document.getElementById(`form-group-${this.#id}`);
  }

  get #headerTemplate() {
    if (this.#header) {
      const icon = `${assetManager.iconsPath}/form/${this.#header.icon}`;
      return `
      <div class="form-header">
        <img class="form-icon" src="${icon}" alt="Icon ${this.#id}">
        <h3 class="form-title">${this.#header.title}</h3>
      </div>
      `;
    }
    return '';
  }

  get #template() {
    return `
    <form id="${this.#id}" class="form">
      ${this.#headerTemplate}
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
      default: () => import('./form-elements/Input.js'),
      search: () => import('./form-elements/SearchInput.js'),
      password: () => import('./form-elements/PasswordInput.js'),
      select: () => import('./form-elements/Select.js'),
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

  /**
   * @param {boolean} isLoading
   */
  setSubmitBtnState(isLoading) {
    this.#submitBtnElement.classList.toggle('glossy', isLoading);
    this.#submitBtnElement.disabled = isLoading;
  }

  async #init() {
    this.#render();
    await this.#buildFormElements();
    this.#buildSubmitBtn();
    this.#handleChangeFocus();
  }
}
