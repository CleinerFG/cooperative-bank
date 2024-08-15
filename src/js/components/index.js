import { setTheme } from "./../utils/dom/setTheme.js";
import { HeaderView } from "../views/components/HeaderView.js";
import { FooterView } from "../views/components/FooterView.js";

export function initHeaderFooter() {
  new HeaderView().render();
  new FooterView().render();
  setTheme();
}
