import { AbstractMethodError } from "../errors/AbstractMethodError.js"
import { LayoutCtrl } from "./LayoutCtrl.js";

export class PageCtrl {
  #PageView;
  constructor(PageView) {
    this.#PageView = PageView;
    this.#init();
  }

  _initControllers() {
    throw new AbstractMethodError("_initControllers");
  }

  #init() {
    new this.#PageView();
    this._initControllers();
    new LayoutCtrl();
  }
}
