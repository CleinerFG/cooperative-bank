import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class InputCtrl {
  #inputElement;
  constructor(inputElement) {
    this.#inputElement = inputElement;
  }

  _defaultValidators() {}

  _customValidators() {}

  init() {
    this._defaultValidators();
    this._customValidators();
  }
}
