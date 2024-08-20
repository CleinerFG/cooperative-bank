import { LayoutCtrl } from "./LayoutCtrl.js";
import { FooterView } from "../../views/layout/FooterView.js";

export class FooterCtrl extends LayoutCtrl {
  constructor() {
    super(new FooterView());
  }

  _pathHandler() {
    this.pathManager.updatePath(
      "asset",
      ".footer__icon",
      "icons",
      "icon-globe.svg"
    );
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
}
