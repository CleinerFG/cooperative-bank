import { FormView } from '../views/FormView.js';
import { ApiService } from '../service/ApiService.js';
import { AbstractGetterError } from '../errors/AbstractErrors.js';
import { InvalidDataError } from '../errors/InvalidDataError.js';

/**
 * Controller for handling form interactions and data submissions.
 * Manages validation, configuration, and API submission for the form.
 *
 * @class
 */
export class FormCtrl {
  /**
   * Instance of FormView
   *
   * @private
   *  */
  #view;

  /**
   * Sets up the form view and initializes event listeners.
   */
  constructor() {
    this.#view = new FormView(
      this._viewConfig,
      this._inputsConfig,
      this._submitConfig
    );
    this.#init();
  }

  /**
   * Returns the model class associated with the form.
   *
   * @abstract
   * @protected
   * @throws {AbstractGetterError}
   */
  get _modelClass() {
    new AbstractGetterError('_modelClass');
  }

  /**
   * Returns the FormView configuration.
   *
   * @abstract
   * @protected
   * @throws {AbstractGetterError}
   *
   */
  get _viewConfig() {
    new AbstractGetterError('_viewConfig');
  }

  /**
   * Returns the input configuration.
   *
   * @abstract
   * @protected
   * @type {Array<import('../components/form/Input.js').InputDefaultConfig | import('../components/form/SearchInput.js').InputSearchConfig>}
   * @throws {AbstractGetterError}
   */
  get _inputsConfig() {
    new AbstractGetterError('_inputsConfig');
  }

  /**
   * Returns the submit button configuration.
   *
   * @abstract
   * @protected
   * @type {import('../components/form/SubmitButton.js').SubmitButtonConfig}}
   * @throws {AbstractGetterError} When called directly.
   */
  get _submitConfig() {
    new AbstractGetterError('_submitConfig');
  }

  /**
   * Returns the API endpoint associated with the form.
   * @abstract
   * @protected
   * @type {string}
   * @throws {AbstractGetterError} When called directly.
   */
  get _endpoint() {
    new AbstractGetterError('_endpoint');
  }

  /**
   * Collects and returns the form data.
   * Uses the model class to format data for the API.
   *
   * @protected
   * @returns {object} The formatted data for API submission.
   */
  get _formData() {
    const params = {};
    this.#view.inputs.forEach((inp) => {
      params[inp.id] = inp.inputElement.value;
    });

    const model = new this._modelClass(params);
    return model.dataToApi;
  }

  /**
   * Validates each input in the form.
   * Throws an error if any input is invalid.
   *
   * @protected
   * @throws {InvalidDataError}
   */
  _checkDataValidInputs() {
    const isValid = this.#view.inputs.every(
      (inp) => inp.inputElement.dataset.valid === 'true'
    );

    if (!isValid) {
      throw new InvalidDataError();
    }
  }

  /**
   * Handles form submission, performs validation, and sends data to the server.
   *
   * @private
   */
  #submitHandler() {
    this.#view.formElement.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      try {
        this._checkDataValidInputs();
        const res = await ApiService.sendTo(this._endpoint, this._formData);
        console.log(`Server return: ${res}`);
      } catch (e) {
        console.log(e);
      }
    });
  }

  /**
   * Initializes the form controller by setting up the submit handler.
   *
   * @private
   */
  #init() {
    this.#submitHandler();
  }
}
