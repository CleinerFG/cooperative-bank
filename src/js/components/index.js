// import { setTheme } from "./../utils/dom/setTheme.js";
import { HeaderView } from "../views/components/HeaderView.js";
import { FooterView } from "../views/components/FooterView.js";
import { ThemeView } from "../views/components/ThemeView.js";

export function initHeaderFooter() {
  new HeaderView().render();
  new FooterView().render();
  new ThemeView("coperativeBankTheme", "icon__theme-light").setTheme();
  // setTheme();
}
