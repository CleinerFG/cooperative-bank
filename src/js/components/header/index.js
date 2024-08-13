import { initPathSettings } from "./pathSetter.js";
import { menuHandler } from "./menuHandler.js";
import { createHtml } from "./createHtml.js";

export function initHeader() {
  createHtml();
  menuHandler();
  initPathSettings();
}
