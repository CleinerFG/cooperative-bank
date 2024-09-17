import { AbstractMethodError } from "../errors/AbstractMethodError.js";
import { LayoutCore } from "./layout/LayoutCore.js";

export class PageCtrl {
  #pageView;
  constructor(pageView) {
    this.#pageView = pageView;
    this.#init();
  }

  _initControllers() {
    throw new AbstractMethodError("_initControllers");
  }

  #initPageView() {
    new this.#pageView();
  }

  #init() {
    this.#initPageView();
    this._initControllers();
    LayoutCore.init();
  }
}
