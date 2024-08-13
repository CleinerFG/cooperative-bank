import { initHeader } from "./header/index.js";
import { initFooter } from "./footer/index.js";
import { setTheme } from "./../utils/dom/setTheme.js";

export function initHeaderFooter() {
  initHeader();
  initFooter();
  setTheme();
}
