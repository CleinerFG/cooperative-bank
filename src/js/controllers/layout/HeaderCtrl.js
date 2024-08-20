import { LayoutCtrl } from "./LayoutCtrl.js";
import { HeaderView } from "../../views/layout/HeaderView.js";

export class HeaderCtrl extends LayoutCtrl {
  constructor() {
    super(new HeaderView());
  }

  #pathHandler() {
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

  initLayoutComponent() {
    this.layoutView.render();
    this.layoutView.menuHandler();
    this.#pathHandler();  
  }
}
