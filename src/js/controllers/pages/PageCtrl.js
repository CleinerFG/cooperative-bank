import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { initLayout } from "../core/layoutCore.js";

export class PageCtrl {
  #pageView;
  constructor(pageView) {
    this.#pageView = pageView;
    this.#init();
  }

  _initControllers() {
    throw new AbstractMethodError("_initControllers");
  }

  _initPageView() {
    new this.#pageView();
  }

  #init() {
    this._initPageView();
    this._initControllers();
    initLayout();
  }
}
