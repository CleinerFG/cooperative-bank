import { LayoutCtrl } from "./LayoutCtrl.js";
import { HeaderView } from "../../views/layout/HeaderView.js";

export class HeaderCtrl extends LayoutCtrl {
  constructor() {
    super(new HeaderView());
  }

  assetsHandler(pathManager, theme) {
    pathManager.updatePath(
      "asset",
      ".header__menu-icon",
      `icons${theme}`,
      "icon-menu.svg"
    );
  }

  _pathHandler() {
    this.pathManager.updatePath(
      "html",
      ".header__brand-name",
      "home",
      "index.html"
    );
  }

  _listenersHandler() {
    this.layoutView.menuHandler();
  }
}
