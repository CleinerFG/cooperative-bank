import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class ModalCtrl {
  constructor() {
    new this._viewClass();
  }

  get _viewClass() {
    new AbstractMethodError("_viewClass");
  }
}
