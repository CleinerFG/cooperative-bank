import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class ModalCtrl {
  constructor() {
    this.#init();
  }

  get _viewClass() {
    new AbstractMethodError("_viewClass");
  }

  _initControllers() {
    // If exists components controller
  }

  #init() {
    new this._viewClass();
    this._initControllers();
  }
}
