import pathManager from "../utils/PathManager.js";
import { HeaderView } from "../views/components/HeaderView.js";
import { FooterView } from "../views/components/FooterView.js";
import { ThemeView } from "../views/components/ThemeView.js";

export class LayoutController {
  constructor() {
    this.header = new HeaderView(pathManager);
    this.footer = new FooterView(pathManager);
    this.theme = new ThemeView("coperativeBankTheme", "icon__theme-light");
  }

  initComponents() {
    this.header.render();
    this.footer.render();
  }

  initThemeSettings() {
    this.theme.initializeTheme();
  }
}
