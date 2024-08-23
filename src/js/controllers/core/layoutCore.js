import { HeaderCtrl } from "../layout/HeaderCtrl.js";
import { FooterCtrl } from "../layout/FooterCtrl.js";
import { ThemeView } from "../../views/layout/ThemeView.js";

export function initLayoutController() {
  new HeaderCtrl();
  new FooterCtrl();
  new ThemeView().initializeTheme();
}
