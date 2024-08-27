import { LayoutCtrl } from "./LayoutCtrl.js";
import { FooterView } from "../../views/layout/FooterView.js";
import { getTheme } from "../../utils/domUtils.js";

export class FooterCtrl extends LayoutCtrl {
  constructor() {
    super(new FooterView());
  }

  #defineHtmlPath() {
    this.pathManager.updatePath(
      "html",
      ".footer__brand-name",
      "home",
      "index.html"
    );
    this.pathManager.updatePath(
      "html",
      ".footer__icon-link",
      "home",
      "index.html"
    );
  }

  _listenersHandler() {
    return false;
  }

  _pathHandler() {
    this.#defineHtmlPath();
    this.#defineAssetPath();
  }

  #defineAssetPath() {
    const theme = getTheme();
    this.pathManager.updatePath(
      "asset",
      ".footer__icon",
      `icons${theme}`,
      "icon-globe.svg"
    );
  }
}
