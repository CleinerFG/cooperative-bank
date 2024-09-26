import { AbstractMethodError } from "../../errors/AbstractMethodError";

export class ModalCtrl {
  #view;
  constructor() {
    this.#view = new this._viewClass();
    this.#init();
  }

  get _viewClass() {
    new AbstractMethodError("_viewClass");
  }

  #init() {
    this.#view.init();
  }
}
