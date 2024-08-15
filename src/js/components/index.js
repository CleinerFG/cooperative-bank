import { initFooter } from "./footer/index.js";
import { setTheme } from "./../utils/dom/setTheme.js";
import { HeaderView } from "../views/components/HeaderView.js";

export function initHeaderFooter() {
  new HeaderView().render()
  initFooter();
  setTheme();
}
