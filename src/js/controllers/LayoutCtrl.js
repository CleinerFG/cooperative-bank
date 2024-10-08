import { Header } from "../components/layout/Header.js";
import { Footer } from "../components/layout/Footer.js";
import { Theme } from "../components/layout/Theme.js";

export class LayoutCtrl {
  constructor() {
    this.#init();
  }

  static buildIconPath(path, theme) {
    const basePath = "/src/assets/icons/";
    const iconPattern = /\/([^\/]+)\.svg$/;

    const iconMatch = path.match(iconPattern);
    const icon = iconMatch[0];

    return basePath + theme + icon;
  }

  #init() {
    new Header();
    new Footer();
    new Theme();
  }
}
