import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { HeaderCtrl } from "../layout/HeaderCtrl.js";
import { FooterCtrl } from "../layout/FooterCtrl.js";
import { themeCtrl } from "../layout/ThemeCtrl.js";

export class PageCtrl {
  #pageView;
  #headerCtrl;
  #footerCtrl;
  #themeCtrl;
  constructor(pageView) {
    this.#headerCtrl = new HeaderCtrl();
    this.#footerCtrl = new FooterCtrl();
    this.#themeCtrl = themeCtrl;
    this.#pageView = pageView;
    this.#init();
  }

  _initControllers() {
    throw new AbstractMethodError("_initControllers");
  }

  defineAssetHandlers() {
    this.#themeCtrl.addPageAssetHandler(this.#headerCtrl.assetHandler);
    this.#themeCtrl.addPageAssetHandler(this.#footerCtrl.assetHandler);
  }

  _initPageView() {
    new this.#pageView();
  }

  initLayout() {
    this.#headerCtrl.init();
    this.#footerCtrl.init();
    this.defineAssetHandlers();
    this.#themeCtrl.init();
  }

  #init() {
    this._initPageView();
    this._initControllers();
    this.initLayout();
  }
}
