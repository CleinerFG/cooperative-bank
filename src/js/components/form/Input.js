import { zeroValidator, emptyValidator } from "../../utils/validators.js";
import {
  currencyFormatter,
  percentFormatter,
  strictNumberFormatter,
} from "../../utils/inputFormatters.js";

/**
 * Input class for creating and managing input elements with validation,
 * formatting, and error handling.
 *
 *  Features:
 * - Custom validation with multiple validators
 * - Input formatting (currency, percentage, strict numbers)
 * - Error message handling and display
 * - Event handling for blur and input events
 * 
 * @class
 * @classdesc Creates an input element with customizable formatting,
 * strict number validation, and error messaging.
 */
export class Input {
  /**
   * The container element where the input element will be rendered.
   * @private
   * @type {HTMLElement}
   */
  #containerElement;

  /**
   * Flag indicating whether only strict numeric values are allowed.
   * @private
   * @type {boolean}
   */
  #strictToNumber;

  /**
   * Formatter type for the input ("currency" | "percent").
   * @private
   * @type {"currency" | "percent"}
   */
  #formatter;

  /**
   * Array of validators to apply to the input.
   * @private
   * @type {import("../../utils/validators.js").Validator[]}
   */
  #validators = [emptyValidator, zeroValidator];

  /**
   * Creates an instance of Input.
   *
   * @param {Object} params - The parameters for configuring the Input instance.
   * @param {HTMLElement} params.containerElement - The container where the input will be added.
   * @param {string} params.id - The unique identifier for the input element.
   * @param {string} [params.cssClass=""] - Optional CSS class for styling.
   * @param {"text" | "numeric"} [params.inputmode="text"] - Optional input mode for the input element.
   * @param {boolean} [params.strictToNumber=false] - Whether only numbers are allowed.
   * @param {"currency" | "percent"} params.formatter - Formatter type for the input ("currency" | "percent").
   * @param {string} [params.labelText=""] - Text for the input label.
   */
  constructor(params) {
    this.#containerElement = params.containerElement;
    this._id = params.id;
    this._cssClass = params.cssClass ?? "";
    this._inputmode = params.inputmode ?? "text";
    this.#strictToNumber = params.strictToNumber;
    this.#formatter = params.formatter;
    this._labelText = params.labelText ?? "";
  }

  /**
   * Gets the ID of the input element.
   * @public
   * @returns {string} The ID of the input.
   */
  get id() {
    return this._id;
  }

  /**
   * Gets the input element.
   * @public
   * @returns {HTMLElement} The input element.
   */
  get inputElement() {
    return document.getElementById(this._id);
  }

  /**
   * Sets the validation state of the input.
   * @protected
   * @param {boolean} bool - The validation state (true if valid, false otherwise).
   */
  set _dataValid(bool) {
    this.inputElement.dataset.valid = bool;
  }

  /**
   * Generates the HTML template for the input element.
   * This getter can be overridden by subclasses to provide their specific HTML structure.
   * @protected
   * @returns {string} The HTML template as a string.
   */
  get _template() {
    return `
    <div class="form-group__inp-group">
      <label for="${this._id}" class="label form-group__label">${this._labelText}</label>
      <input id="${this._id}" type="text" inputmode="${this._inputmode}" name="${this._id}" aria-label="${this._labelText}"
      class="inp form-group__inp ${this._cssClass}" data-valid="false">
      <span id="${this._id}-error" class="error-message"></span>
    </div>`;
  }

  /**
   * Displays or removes an error message on the input.
   * @protected
   * @param {"add" | "remove"} method - Method to manipulate error class.
   * @param {string} errorMessage - The error message to display.
   */
  _failMessageHandler(method, errorMessage) {
    const span = document.querySelector(`#${this._id}-error`);
    span.innerHTML = errorMessage;
    this.inputElement.classList[method]("inp-error");
  }

  /**
   * Executes each validator on the current input value stored in the input element.
   * If a validator throws an error, it catches the error and updates the validation state, displaying the error message if validation fails.
   * @private
   */
  #executeValidators() {
    const value = this.inputElement.value;
    try {
      this.#validators.forEach((validator) => validator(value));
      this._dataValid = true;
      this._failMessageHandler("remove", "");
    } catch (error) {
      this._dataValid = false;
      this._failMessageHandler("add", error.message);
    }
  }

  /**
   * Adds an event listener for strict number formatting on input if {@link #strictToNumber} is true.
   * @private
   */
  #setupStrictToNumber() {
    if (this.#strictToNumber) {
      this.inputElement.addEventListener("input", strictNumberFormatter);
    }
  }

  /**
   * Sets up a formatter event listener if a formatter is specified.
   * @private
   */
  #setupFormatter() {
    const formatters = {
      percent: percentFormatter,
      currency: currencyFormatter,
    };

    if (this.#formatter) {
      this.inputElement.addEventListener("input", formatters[this.#formatter]);
    }
  }

  /**
   * Sets up validation on blur event for the input element.
   * @private
   * @see #executeValidators
   *
   * - Uses #executeValidators method for validation
   *
   * Event binding:
   * - Event: 'blur'
   * - Handler: Bound version of #executeValidators with correct 'this' context
   */
  #setupValidationOnBlur() {
    this.inputElement.addEventListener(
      "blur",
      this.#executeValidators.bind(this)
    );
  }

  /**
   * Initializes event handlers for validation and formatting.
   * @param {boolean} [active=true] - Activates the event listeners if true.
   * @protected
   */
  _setupHandlers(active = true) {
    if (active) {
      this.#setupValidationOnBlur();
      this.#setupStrictToNumber();
      this.#setupFormatter();
    }
  }

  /**
   * Renders the input element template into the container.
   * @private
   */
  #render() {
    this.#containerElement.insertAdjacentHTML("beforeend", this._template);
  }

  /**
   * Initializes the input element by rendering it and setting up handlers.
   * @public
   */
  init() {
    this.#render();
    this._setupHandlers();
  }
}
