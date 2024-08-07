import { setSrc } from "../../utils/path-manangers/assetsPaths.js";
import { setHref } from "../../utils/path-manangers/htmlPagesPaths.js";

export function initPathSettings() {
  // Header
  setHref(".brand-name", "home", "index.html");

  // Header -> menu
  setSrc(".menu-icon", "icons", "icon-menu.svg");
  setHref(".menu-link", "menu", "profile.html");
}
