import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class InputCtrl {
  #inputView;
  constructor(inputView) {
    this.#inputView = inputView;
  }

  _defaultValidators() {}

  _customValidators() {
    this.#inputView.validateNumber();
    this.#inputView.validateMonetary();
  }

  init() {
    this._defaultValidators();
    this._customValidators();
  }
}
