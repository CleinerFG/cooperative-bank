import { setSrc } from "../../utils/path-manangers/assetsPaths.js";
import { setHref } from "../../utils/path-manangers/htmlPagesPaths.js";

export function initPathSettings() {
  setSrc(".footer-icon", "icons", "icon-globe.svg");
  setHref("#footer-icon-link", "home", "");
  setHref("#footer-link", "home", "");
}
