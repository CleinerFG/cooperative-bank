import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { initLayout } from "../core/layoutCore.js";
import { themeCtrl } from "../layout/ThemeCtrl.js";

export class PageCtrl {
  #pageView;
  constructor(pageView) {
    this.#pageView = pageView;
    this._assetHandlers = [];
    this.#init();
  }

  _initControllers() {
    throw new AbstractMethodError("_initControllers");
  }

  #initPageView() {
    new this.#pageView();
  }

  #defineHandlers() {
    themeCtrl.layoutAssetHandlers = this._assetHandlers;
  }

  #init() {
    this.#initPageView();
    this._initControllers();
    this.#defineHandlers();
    initLayout();
  }
}
