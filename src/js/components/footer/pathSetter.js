import { setSrc } from "../../utils/path-manangers/assetsPaths.js";
import { setHref } from "../../utils/path-manangers/htmlPagesPaths.js";

export function initPathSettings() {
  setSrc(".footer__icon", "icons", "icon-globe.svg");
  setHref(".footer__brand-name", "home", "index.html");
  setHref(".footer__icon-link", "home", "index.html");
}
