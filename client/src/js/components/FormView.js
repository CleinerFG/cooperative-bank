import '../types/formElementsType.js';
import { SubmitButton } from './form-elements/SubmitButton.js';
import assetManager from '../core/AssetManager.js';

export class FormView {
  #containerElement;
  #id;
  #header;
  #formComponentsParams;
  #submitButtonParams;
  #formComponents = [];
  #submitBtnFormComponent;

  /**
   *
   * @param {FormViewParams} params
   * @param {[FormComponentsOnFormView]} formComponentsParams
   * @param {SubmitButtonOnFormView} submitButtonParams
   */
  constructor(params, formComponentsParams, submitButtonParams) {
    this.#containerElement = params.containerElement;
    this.#id = params.id;
    this.#header = params.header;
    this.#formComponentsParams = formComponentsParams;
    this.#submitButtonParams = submitButtonParams;
    this.#init();
  }

  get formElement() {
    return this.#containerElement.querySelector(`#${this.#id}`);
  }

  /**
   * @type {Array<import('./form-elements/FormComponent.js'.default)>}
   */
  get formComponents() {
    return this.#formComponents;
  }

  get #submitBtnElement() {
    return this.formElement.querySelector(
      `#${this.#submitBtnFormComponent.id}`
    );
  }

  get #formGroupElement() {
    return this.#containerElement.querySelector(`#form-components-${this.#id}`);
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
      <div id="form-components-${this.#id}" class="form-components">       
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
  async #getFormComponentClassByCategory(category) {
    const formElemModMap = {
      default: () => import('./form-elements/Input.js'),
      search: () => import('./form-elements/SearchInput.js'),
      password: () => import('./form-elements/PasswordInput.js'),
      select: () => import('./form-elements/Select.js'),
    };

    const module = await formElemModMap[category]();
    return module.default;
  }

  async #initFormComponents() {
    for (const params of this.#formComponentsParams) {
      const InpClass = await this.#getFormComponentClassByCategory(
        params.category
      );
      params.containerElement = this.#formGroupElement;
      const inp = new InpClass(params);
      inp.init();
      this.#formComponents.push(inp);
    }
  }

  #initSubmitBtn() {
    const params = this.#submitButtonParams;
    params.containerElement = this.formElement;
    const btn = new SubmitButton(params);
    btn.init();
    this.#submitBtnFormComponent = btn;
  }

  #changeFocusHandler() {
    const formElements = Array.from(
      this.formElement.querySelectorAll('input, select')
    );
    const getNextInput = (currentIndex) => {
      for (let i = currentIndex + 1; i < formElements.length; i++) {
        if (!formElements[i].disabled) {
          return formElements[i];
        }
      }
      return formElements[0];
    };
    this.formElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
        const index = formElements.indexOf(document.activeElement);
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
    await this.#initFormComponents();
    this.#initSubmitBtn();
    this.#changeFocusHandler();
  }
}
