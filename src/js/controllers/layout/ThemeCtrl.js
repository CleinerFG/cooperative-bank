import { ThemeView } from "../../views/layout/ThemeView.js";

export class ThemeCtrl {
  #themeView;
  constructor() {
    this.#themeView = new ThemeView();
  }

  static buildAssetPathStr(path, theme) {
    const basePath = "/src/assets/icons/";
    const iconPattern = /\/([^\/]+)\.svg$/;

    const iconMatch = path.match(iconPattern);
    const icon = iconMatch[0];

    return basePath + theme + icon;
  }

  init() {
    this.#themeView.init();
  }
}
