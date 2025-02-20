import '../types/formElementsType.js';
import { FormView } from './FormView.js';
import { AbstractGetterError } from '../errors/AbstractErrors.js';
import errorCodes from '../../constants/errorCodes.js';

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

  get _modelClass() {
    throw new AbstractGetterError('_modelClass');
  }

  get _viewParams() {
    throw new AbstractGetterError('_viewParams');
  }

  get _formElementsParams() {
    throw new AbstractGetterError('_formElementsParams');
  }

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

  _handleInputErrors(errors) {
    Object.keys(errors).forEach((key) => {
      const formEl = this.#view.formElements.find((el) => el.id === key);
      if (formEl) {
        formEl.handleFailMessage('add', errorCodes[errors[key]].message);
      }
    });
  }

  _handleInputsDataIsValid() {
    let isValid = true;
    const errors = {};

    this.#view.formElements.forEach((formEl) => {
      if (!formEl.dataValid) {
        isValid = false;
        formEl.handleFailMessage('add', errorCodes.VALID_005.message);
        errors[formEl.id] = 'VALID_005';
      }
    });

    return { isValid, errors };
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

      this.#createNewPromise();

      const { isValid, errors } = this._handleInputsDataIsValid();
      console.log(this._formData);

      if (!isValid) {
        return this.#resolvePromise({ success: false, errors });
      }

      try {
        const res = await this._serviceMethod(this._formData);
        this.#resolvePromise(res);
        if (res.errors) {
          this._handleInputErrors(res.errors);
        }
      } catch (e) {
        this.#resolvePromise({ success: false, reason: 'serverError' });
        console.error(e);
      }
    });
  }

  #init() {
    this.#handleSubmit();
  }
}
