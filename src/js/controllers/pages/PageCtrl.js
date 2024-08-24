import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { HeaderCtrl } from "../layout/HeaderCtrl.js";
import { FooterCtrl } from "../layout/FooterCtrl.js";
import { ThemeView } from "../../views/layout/ThemeView.js";

export class PageCtrl {
  #pageView;
  constructor(pageView) {
    this.#pageView = pageView
  }

  _initControllers() {
    throw new AbstractMethodError("_initControllers")
  }

  assetsHandler(theme){
    throw new AbstractMethodError
  }

  _initPageView() {
    new this.#pageView()
  }

  #initLayout() {
    new HeaderCtrl();
    new FooterCtrl();
    new ThemeView();
  }

}