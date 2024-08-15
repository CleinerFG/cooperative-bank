import { LayoutController } from "../../../js/controllers/LayoutController.js";

export function initLayoutController() {
  const ctrl = new LayoutController();
  ctrl.initComponents();
  ctrl.initThemeSettings();
}
