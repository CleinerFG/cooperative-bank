import { LayoutCtrl } from "../../controllers/LayoutCtrl.js";

export class Theme {
  static THEME_KEY = "coperativeBankTheme";
  #bodyElement = document.body;

  constructor() {
    this.#init();
  }

  static get storedTheme() {
    return localStorage.getItem(Theme.THEME_KEY) ?? "dark";
  }

  set #storedTheme(value) {
    localStorage.setItem(Theme.THEME_KEY, value);
  }

  get #bodyTheme() {
    return this.#bodyElement.dataset.theme;
  }

  set #bodyTheme(value) {
    this.#bodyElement.dataset.theme = value;
  }

  #updateAssets(theme) {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
      const path = icon.src;
      const newPath = LayoutCtrl.buildIconPath(path, theme);
      icon.src = newPath;
    });
  }

  #toggleTheme() {
    const currentTheme = this.#bodyTheme;
    const updatedTheme = currentTheme === "dark" ? "light" : "dark";
    this.#bodyTheme = updatedTheme;
    this.#storedTheme = updatedTheme
    this.#updateAssets(updatedTheme);
  }

  #applyStoredTheme() {
    this.#bodyTheme = Theme.storedTheme;
  }

  #btnHandler() {
    document
      .getElementById("switch-theme-btn")
      .addEventListener("click", () => this.#toggleTheme());
  }

  #init() {
    this.#applyStoredTheme();
    this.#btnHandler();
  }
}
