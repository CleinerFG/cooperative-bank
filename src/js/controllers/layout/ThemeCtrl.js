import { ThemeView } from "../../views/layout/ThemeView.js";

export class ThemeCtrl {
  static buildAssetPathStr(path, theme) {
    const basePath = "/src/assets/icons/";
    const iconPattern = /\/([^\/]+)\.svg$/;

    const iconMatch = path.match(iconPattern);
    const icon = iconMatch[0];

    return basePath + theme + icon;
  }

  init() {
    new ThemeView().init();
  }
}
