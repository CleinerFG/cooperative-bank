import { FormView } from './FormView.js';
import { AbstractGetterError } from '../errors/AbstractErrors.js';

export class FormCtrl {
  #view;
  #responsePromise;
  #resolvePromise;
  #serverErrorCodes;

  constructor(serverErrorCodes) {
    this.#view = new FormView(
      this._viewParams,
      this._formComponentsParams,
      this._submitButtonParams
    );
    this.#serverErrorCodes = serverErrorCodes.reduce(
      (acc, obj) => ({ ...acc, ...obj }),
      {}
    );
    this.#init();
  }

  get _viewParams() {
    throw new AbstractGetterError('_viewParams');
  }

  get _formComponentsParams() {
    throw new AbstractGetterError('_formComponentsParams');
  }

  get _submitButtonParams() {
    throw new AbstractGetterError('_submitButtonParams');
  }

  get _serviceMethod() {
    throw new AbstractGetterError('_serviceMethod');
  }

  async #getFormData() {
    const formComponents = this.#view.formComponents;
    const data = {};
    for (let i = 0; i < formComponents.length; i++) {
      const component = formComponents[i];
      data[component.id] = await component.getParseValue();
    }
    return data;
  }

  #errorHandler(res) {
    Object.keys(res.fields).forEach((key) => {
      const field = this.#view.formComponents.find((el) => el.id === key);
      field.handleFailMessage('add', res.fields[key][0]);
    });
  }

  #createNewPromise() {
    this.#responsePromise = new Promise((resolve) => {
      this.#resolvePromise = resolve;
    });
  }

  #dataIsValidHandler() {
    let isValid = true;
    const errors = [];
    this.#view.formComponents.forEach((component) => {
      if (!component.dataValid) {
        isValid = false;
        component.handleFailMessage('add', INP_ERRORS.invalidData);
        errors.push({ id: component.id, cod: 'invalidData' });
      }
    });

    if (!isValid) this.#resolvePromise({ success: false, errors });

    return isValid;
  }

  async #trySubmitHandler() {
    this.#view.setSubmitBtnState(true);

    const data = await this.#getFormData();
    const res = await this._serviceMethod(data);
    this.#resolvePromise(res);
    if (res.error) this.#errorHandler(res);
  }

  #catchSubmitHandler(e) {
    this.#resolvePromise({ success: false, reason: 'serverError' });
    console.error(e);
  }

  #finallySubmitHandler() {
    this.#view.setSubmitBtnState(false);
  }

  async getResponse() {
    return this.#responsePromise;
  }

  async #submitHandler() {
    this.#view.formElement.addEventListener('submit', async (e) => {
      e.preventDefault();

      this.#createNewPromise();
      console.table(await this.#getFormData());

      const isValid = this.#dataIsValidHandler();
      if (!isValid) return;

      try {
        await this.#trySubmitHandler();
      } catch (e) {
        this.#catchSubmitHandler(e);
      } finally {
        this.#finallySubmitHandler();
      }
    });
  }

  #init() {
    this.#submitHandler();
  }
}
