import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { initLayout } from "../core/layoutCore.js";
// import { themeCtrl } from "../layout/ThemeCtrl.js";

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
    initLayout();
  }
}
