import { HeaderCtrl } from "../layout/HeaderCtrl.js";
import { FooterCtrl } from "../layout/FooterCtrl.js";

export function initLayoutController() {
  new HeaderCtrl();
  new FooterCtrl();
}
