import { setSrc } from "../../utils/path-manangers/assetsPaths.js";
import { setHref } from "../../utils/path-manangers/assetsPaths.js";

export function initPathSettings() {
  setHref(".brand-name", "home", "");
  setSrc(".menu-icon", "icons", "icon-menu.svg");
  setHref(".menu-link", "menu", "profile.html");
}
