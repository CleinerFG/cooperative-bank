import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { InputView } from "../../views/forms/InputView.js";

export class InputCtrl {
  constructor(container, id, labelText, placeholder, type) {
    this._view = new InputView(container, id, labelText, placeholder, type);
  }

  _build() {
    throw new AbstractMethodError("build");
  }

  _defineValidations() {
    throw new AbstractMethodError("defineValidations");
  }

  init() {
    this._build();
    this._view.render();
    this._defineValidations();
  }
}
