import { HeaderCtrl } from "../layout/HeaderCtrl.js";
import { FooterCtrl } from "../layout/FooterCtrl.js";
import { themeCtrl } from "../../controllers/layout/ThemeCtrl.js";

export function initLayout() {
  const headerCtrl = new HeaderCtrl();
  const footerCtrl = new FooterCtrl();

  headerCtrl.init();
  footerCtrl.init();
  themeCtrl.init();
}
