import pathManager from "../utils/PathManager.js";
import { HeaderView } from "../views/layout/HeaderView.js";
import { FooterView } from "../views/layout/FooterView.js";
import { ThemeView } from "../views/layout/ThemeView.js";

export class LayoutCtrl {
  constructor() {
    this._header = new HeaderView(pathManager);
    this._footer = new FooterView(pathManager);
    this._theme = new ThemeView(pathManager);
  }

  initComponents() {
    this._header.render();
    this._footer.render();
  }

  initThemeSettings() {
    this._theme.initializeTheme();
  }
}
