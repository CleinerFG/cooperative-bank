import { LayoutCtrl } from "../LayoutCtrl.js";

export function initLayoutController() {
  const ctrl = new LayoutCtrl();
  ctrl.initComponents();
  ctrl.initThemeSettings();
}
