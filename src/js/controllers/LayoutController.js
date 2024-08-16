import pathManager from "../utils/PathManager.js";
import { HeaderView } from "../views/components/HeaderView.js";
import { FooterView } from "../views/components/FooterView.js";
import { ThemeView } from "../views/ThemeView.js";

export class LayoutController {
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
