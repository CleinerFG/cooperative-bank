import { LayoutCtrl } from "./LayoutCtrl.js";
import { HeaderView } from "../../views/layout/HeaderView.js";

export class HeaderCtrl extends LayoutCtrl {
  constructor() {
    super(new HeaderView());
  }

  #defineAssetpath() {
    this.pathManager.updateIcon(".header__menu-icon", "icon-menu.svg");
    this.pathManager.updateIcon("#theme-icon", "icon-theme.svg");
  }
  #defineHtmlPath() {
    this.pathManager.updateHtml(".header__brand-name", "home", "index.html");
  }

  _pathHandler() {
    this.#defineAssetpath();
    this.#defineHtmlPath();
  }

  _listenersHandler() {
    this.layoutView.menuHandler();
  }
}
