import '../types/formElementsType.js';
import '../types/serverResponseType.js';
import { FormView } from './FormView.js';
import { AbstractGetterError } from '../errors/AbstractErrors.js';
import { INP_ERRORS } from '../constants/errorCodes.js';
import { simulateWait } from '../utils/tests.js';

export class FormCtrl {
  #view;
  #responsePromise;
  #resolvePromise;

  constructor() {
    this.#view = new FormView(
      this._viewParams,
      this._formComponentsParams,
      this._submitButtonParams
    );
    this.#init();
  }

  /**
   * @type {FormViewParams}
   */
  get _viewParams() {
    throw new AbstractGetterError('_viewParams');
  }

  /**
   * @type {[InputOnFormView|SearchOnFormView|PasswordOnFormView|SelectOnFormView]}
   */
  get _formComponentsParams() {
    throw new AbstractGetterError('_formComponentsParams');
  }

  /**
   * @type {SubmitButtonOnFormView}
   */
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

  /**
   * @param {FormError[]} errors
   */
  #formComponentErrorsHandler(errors) {
    errors.forEach(({ componentId, error }) => {
      const component = this.#view.formComponents.find(
        (el) => el.id === componentId
      );
      if (component) {
        component.handleFailMessage('add', INP_ERRORS[error].message);
      }
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
        component.handleFailMessage('add', INP_ERRORS.VALID_005.message);
        errors.push({ id: component.id, cod: 'VALID_005' });
      }
    });

    if (!isValid) this.#resolvePromise({ success: false, errors });

    return isValid;
  }

  async #trySubmitHandler() {
    this.#view.setSubmitBtnState(true);

    await simulateWait();
    const data = await this.#getFormData();
    const res = await this._serviceMethod(data);
    this.#resolvePromise(res);

    if (res.errors) this.#formComponentErrorsHandler(res.errors);
  }

  #catchSubmitHandler(e) {
    this.#resolvePromise({ success: false, reason: 'serverError' });
    console.error(e);
  }

  #finallySubmitHandler() {
    this.#view.setSubmitBtnState(false);
  }

  /**
   * @type {Promise<ServerFormResponse|ServerErrorFormResponse>|undefined}
   */
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
