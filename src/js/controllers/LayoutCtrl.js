import { HeaderView } from "../views/layout/HeaderView.js";
import { FooterView } from "../views/layout/FooterView.js";
import { ThemeView } from "../views/layout/ThemeView.js";

export class LayoutCtrl {
  constructor() {
    this.#init();
  }

  static buildAssetPathStr(path, theme) {
    const basePath = "/src/assets/icons/";
    const iconPattern = /\/([^\/]+)\.svg$/;

    const iconMatch = path.match(iconPattern);
    const icon = iconMatch[0];

    return basePath + theme + icon;
  }

  #init() {
    new HeaderView();
    new FooterView();
    new ThemeView();
  }
}
