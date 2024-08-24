import { LayoutCtrl } from "./LayoutCtrl.js";
import { HeaderView } from "../../views/layout/HeaderView.js";

export class HeaderCtrl extends LayoutCtrl {
  constructor() {
    super(new HeaderView());
  }

  _assetsHandler(theme) {
    this.pathManager.updatePath(
      "asset",
      ".header__menu-icon",
      "icons",
      "icon-menu.svg"
    );

    this.pathManager.updatePath(
      "asset",
      "#theme-icon",
      "theme",
      `${theme}-mode.svg`
    );
  }

  _pathHandler() {
    this.pathManager.updatePath(
      "html",
      ".header__brand-name",
      "home",
      "index.html"
    );
    this.pathManager.updatePath(
      "asset",
      ".header__menu-icon",
      "icons",
      "icon-menu.svg"
    );
  }

  _listenersHandler() {
    this.layoutView.menuHandler();
  }
}
