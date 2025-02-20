import '../types/formElementsType.js';
import { FormView } from './FormView.js';
import { AbstractGetterError } from '../errors/AbstractErrors.js';

export class FormCtrl {
  #view;
  #responsePromise;
  #resolvePromise;

  constructor() {
    this.#view = new FormView(
      this._viewParams,
      this._formElementsParams,
      this._submitButtonParams
    );
    this.#createNewPromise();
    this.#init();
  }

  get _modelClass() {
    new AbstractGetterError('_modelClass');
  }

  get _viewParams() {
    new AbstractGetterError('_viewParams');
  }

  get _formElementsParams() {
    new AbstractGetterError('_formElementsParams');
  }

  get _submitButtonParams() {
    new AbstractGetterError('_submitButtonParams');
  }

  get _serviceMethod() {
    throw new AbstractGetterError('_serviceMethod');
  }

  get _formData() {
    const data = {};
    this.#view.formElements.forEach((formEl) => {
      data[formEl.id] = formEl?.parseValue ?? formEl?.value;
    });
    return data;
  }

  _handleInputsDataIsValid() {
    let isValid = true;
    this.#view.formElements.forEach((formEl) => {
      if (!formEl.dataValid) {
        isValid = false;
        formEl.handleFailMessage('add', 'Invalid data');
      }
    });
    return isValid;
  }

  #createNewPromise() {
    this.#responsePromise = new Promise((resolve) => {
      this.#resolvePromise = resolve;
    });
  }

  async getResponse() {
    return this.#responsePromise;
  }

  async #handleSubmit() {
    this.#view.formElement.addEventListener('submit', async (e) => {
      e.preventDefault();
      const isValid = this._handleInputsDataIsValid();
      console.log(this._formData);

      if (!isValid) return;

      this.#createNewPromise();

      try {
        const res = await this._serviceMethod(this._formData);
        this.#resolvePromise(res);
      } catch (e) {
        this.#resolvePromise(false);
        console.error(e);
      }
    });
  }

  #init() {
    this.#handleSubmit();
  }
}
