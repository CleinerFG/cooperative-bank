import { AbstractMethodError } from "../errors/AbstractMethodError.js";

export class FormCtrl {
  #view;
  constructor(view, container, id, cssClass, action, method) {
    this.#view = new view(container, id, cssClass, action, method);
    this.#init();
  }

  _initControllers() {
    throw new AbstractMethodError("_initControllers");
  }

  #init() {
    this.#view.render();
    this._initControllers();
  }
}
