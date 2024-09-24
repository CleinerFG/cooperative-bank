import { LayoutCtrl } from "../../controllers/LayoutCtrl.js";

export class ThemeView {
  static THEME_KEY = "coperativeBankTheme";

  #body = document.body;

  constructor() {
    this.init();
  }

  static getStoredTheme() {
    return localStorage.getItem(ThemeView.THEME_KEY) ?? "dark";
  }

  get #bodyTheme() {
    return this.#body.dataset.theme;
  }

  set #bodyTheme(value) {
    this.#body.dataset.theme = value;
  }

  #updateAssets(theme) {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
      const path = icon.src;
      const newPath = LayoutCtrl.buildAssetPathStr(path, theme);
      icon.src = newPath;
    });
  }

  #toggleTheme() {
    const currentTheme = this.#bodyTheme;
    const updatedTheme = currentTheme === "dark" ? "light" : "dark";
    this.#bodyTheme = updatedTheme;
    localStorage.setItem(ThemeView.THEME_KEY, updatedTheme);
    this.#updateAssets(updatedTheme);
  }

  #applyStoredTheme() {
    this.#bodyTheme = ThemeView.getStoredTheme();
  }

  #btnHandler() {
    document
      .getElementById("switch-theme-button")
      .addEventListener("click", () => this.#toggleTheme());
  }

  init() {
    this.#applyStoredTheme();
    this.#btnHandler();
  }
}
