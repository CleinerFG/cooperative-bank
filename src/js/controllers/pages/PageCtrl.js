import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { HeaderCtrl } from "../layout/HeaderCtrl.js";
import { FooterCtrl } from "../layout/FooterCtrl.js";

export class PageCtrl {
  #pageView;
  constructor(pageView) {
    this.#pageView = pageView
  }

  _initControllers() {
    throw new AbstractMethodError("_initControllers")
  }

  _initPageView() {
    new this.#pageView()
  }

  #initLayout() {
    new HeaderCtrl();
    new FooterCtrl();
  }

}