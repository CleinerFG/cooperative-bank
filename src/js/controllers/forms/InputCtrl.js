import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class InputCtrl {
  #inputView;
  constructor(inputView) {
    this.#inputView = inputView;
  }

  _defineFormatters() {
    this.#inputView.formatMonetary();
  }

  _defaultValidators() {}

  _customValidators() {
    this.#inputView.validateNumber();
  }

  init() {
    this._defaultValidators();
    this._customValidators();
    this._defineFormatters();
  }
}
