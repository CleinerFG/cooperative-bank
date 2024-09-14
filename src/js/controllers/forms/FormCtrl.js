import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class FormCtrl {
  #view;
  constructor(view, container, id, cssClass, action, method) {
    this.#view = new view(container, id, cssClass, action, method);
    this.#init();
  }

  #init() {
    this.#view.init();
  }
}
