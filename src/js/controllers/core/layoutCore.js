import { HeaderCtrl } from "../layout/HeaderCtrl.js";
import { FooterCtrl } from "../layout/FooterCtrl.js";
import { ThemeView } from "../../views/layout/ThemeView.js";

export function initLayoutController() {
  const headerCtrl = new HeaderCtrl();
  headerCtrl.initLayoutComponent();

  const footerCtrl = new FooterCtrl();
  footerCtrl.initLayoutComponent();

  const themeView = new ThemeView();
  themeView.initializeTheme();
}
