import { setSrc } from "../../utils/path-manangers/assetsPaths.js";
import { setHref } from "../../utils/path-manangers/htmlPagesPaths.js";

export function initPathSettings() {
  // Header
  setHref(".header__brand-name", "home", "index.html");

  // Header -> menu
  setSrc(".header__menu-icon", "icons", "icon-menu.svg");
  // setHref(".menu-link", "menu", "profile.html");
  setSrc("#theme-mode", "theme", `${document.body.dataset.theme}-mode.svg`);
}
