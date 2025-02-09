import { FormView } from '../views/FormView.js';
import { ApiService } from '../service/ApiService.js';
import { AbstractGetterError } from '../errors/AbstractErrors.js';
import { InvalidDataError } from '../errors/InvalidDataError.js';

/**
 * Controller for handling form interactions and data submissions.
 * Manages validation, configuration, and API submission for the form.
 */
export class FormCtrl {
  #view;

  constructor() {
    this.#view = new FormView(
      this._viewParams,
      this._formElementsParams,
      this._submitButtonParams
    );
    this.#init();
  }

  get _modelClass() {
    new AbstractGetterError('_modelClass');
  }

  /**
   * @type {import('../views/FormView.js').FormViewParams}
   */
  get _viewParams() {
    new AbstractGetterError('_viewParams');
  }

  /**
   * @type {Array<import('../components/form/Input.js').InputParams | import('../components/form/SearchInput.js').SearchInputParams>}
   */
  get _formElementsParams() {
    new AbstractGetterError('_formElementsParams');
  }

  /**
   * @type {import('../components/form/SubmitButton.js').SubmitButtonParams}}
   */
  get _submitButtonParams() {
    new AbstractGetterError('_submitButtonParams');
  }

  /**
   * @type {string}
   */
  get _endpoint() {
    new AbstractGetterError('_endpoint');
  }

  /**
   * Collects and returns the form data.
   * Uses the model class to format data for the API.
   *
   * @returns {object}
   */
  get #formData() {
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

  #handleSubmit() {
    this.#view.formElement.addEventListener('submit', async (e) => {
      e.preventDefault();
      const isValid = this._handleInputsDataIsValid();
      console.log(this.#formData);

      try {
        if (isValid) {
          const res = await ApiService.sendTo(this._endpoint, this.#formData);
          console.log(`Server return: ${res}`);
        }
      } catch (e) {
        console.error(e);
      }
    });
  }

  #init() {
    this.#handleSubmit();
  }
}
