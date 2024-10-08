import { AbstractMethodError } from "../errors/AbstractMethodError.js";
import { LayoutCtrl } from "./LayoutCtrl.js";

export class PageCtrl {
  #PageView;
  constructor(PageView) {
    this.#PageView = PageView;
    this.#init();
  }

  _setupControllers() {
    throw new AbstractMethodError("_setupControllers");
  }

  #init() {
    new this.#PageView();
    this._setupControllers();
    new LayoutCtrl();
  }
}
