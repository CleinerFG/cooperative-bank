import { initPathSettings } from "./pathSetter.js";
import { menuHandler } from "./menuHandler.js";
import { setTheme } from "./themeSwitch.js";
import { createHtml } from "./createHtml.js";

export function initHeader() {
  createHtml();
  setTheme();
  menuHandler();
  initPathSettings();
}
