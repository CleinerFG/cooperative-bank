import { initPathSettings } from "./pathSetter.js";
import { menuHandler } from "./menuHandler.js";

export function initHeader() {
  menuHandler();
  initPathSettings();
}
