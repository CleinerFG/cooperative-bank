import { LayoutCtrl } from "./LayoutCtrl.js";
import { FooterView } from "../../views/layout/FooterView.js";

export class FooterCtrl extends LayoutCtrl {
  constructor() {
    super(new FooterView());
  }

  #defineAssetPath() {
    this.pathManager.updateIcon(".footer__icon", "icon-globe.svg");
  }

  #defineHtmlPath() {
    this.pathManager.updateHtml(".footer__brand-name", "home", "index.html");
    this.pathManager.updateHtml(".footer__icon-link", "home", "index.html");
  }

  _pathHandler() {
    this.#defineHtmlPath();
    this.#defineAssetPath();
  }

  _listenersHandler() {
    return false;
  }
}
