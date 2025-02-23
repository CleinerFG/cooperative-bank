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
      this._formElementsParams,
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
   * @type {[InputParams|SearchInputParams|SelectParams]}
   */
  get _formElementsParams() {
    throw new AbstractGetterError('_formElementsParams');
  }

  /**
   * @type {SubmitButtonParams}
   */
  get _submitButtonParams() {
    throw new AbstractGetterError('_submitButtonParams');
  }

  get _serviceMethod() {
    throw new AbstractGetterError('_serviceMethod');
  }

  get _formData() {
    return this.#view.formElements.reduce((data, formEl) => {
      data[formEl.id] = formEl?.parseValue ?? formEl?.value;
      return data;
    }, {});
  }

  /**
   * @param {InputError[]} inpErrors
   */
  _handleInputErrors(inpErrors) {
    inpErrors.forEach(({ id, cod }) => {
      const formEl = this.#view.formElements.find((el) => el.id === id);
      if (formEl) {
        formEl.handleFailMessage('add', INP_ERRORS[cod].message);
      }
    });
  }

  _handleInputsDataIsValid() {
    let isValid = true;
    const inpErrors = [];

    this.#view.formElements.forEach((formEl) => {
      if (!formEl.dataValid) {
        isValid = false;
        formEl.handleFailMessage('add', INP_ERRORS.VALID_005.message);
        inpErrors.push({ id: formEl.id, cod: 'VALID_005' });
      }
    });

    return { isValid, inpErrors };
  }

  #createNewPromise() {
    this.#responsePromise = new Promise((resolve) => {
      this.#resolvePromise = resolve;
    });
  }

  /**
   * @type {Promise<ServerFormResponse|ServerErrorFormResponse>|undefined}
   */
  async getResponse() {
    return this.#responsePromise;
  }

  async #handleSubmit() {
    this.#view.formElement.addEventListener('submit', async (e) => {
      e.preventDefault();

      this.#createNewPromise();

      const { isValid, inpErrors } = this._handleInputsDataIsValid();
      console.log(this._formData);

      if (!isValid) {
        return this.#resolvePromise({ success: false, inpErrors });
      }

      try {
        this.#view.setSubmitBtnState(true);
        /**
         * @type {ServerFormResponse}
         */
        await simulateWait();
        const res = await this._serviceMethod(this._formData);
        this.#resolvePromise(res);
        if (res.inpErrors) {
          this._handleInputErrors(res.inpErrors);
        }
      } catch (e) {
        this.#resolvePromise({ success: false, reason: 'serverError' });
        console.error(e);
      } finally {
        this.#view.setSubmitBtnState(false);
      }
    });
  }

  #init() {
    this.#handleSubmit();
  }
}
