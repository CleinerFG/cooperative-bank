import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class InputCtrl {
  #inputView;
  constructor(inputView) {
    this.#inputView = inputView;
  }

  _defaultValidators() {}

  _customValidators() {
    console.log("custom validators")
    this.#inputView.validateNumber();
  }

  init() {
    this._defaultValidators();
    this._customValidators();
  }
}
