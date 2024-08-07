import { initPathSettings } from "./pathSetter.js";
import { menuHandler } from "./menuHandler.js";
import { setTheme } from "./themeSwitch.js";

export function initHeader() {
  setTheme();
  menuHandler();
  initPathSettings();
}
