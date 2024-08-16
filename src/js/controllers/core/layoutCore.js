import { LayoutController } from "../LayoutController.js";

export function initLayoutController() {
  const ctrl = new LayoutController();
  ctrl.initComponents();
  ctrl.initThemeSettings();
}
