import { HeaderCtrl } from "../layout/HeaderCtrl.js";
import { FooterCtrl } from "../layout/FooterCtrl.js";

export function initLayoutController() {
  const headerCtrl = new HeaderCtrl();
  headerCtrl.initLayoutComponent();
  const footerCtrl = new FooterCtrl();
  footerCtrl.initLayoutComponent();
}
