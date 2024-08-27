import { buildAssetPathStr } from "../../utils/stringUtils.js";

export const themeKey = "coperativeBankTheme";
export class ThemeView {
  #themeKey;
  #body;
  constructor() {
    this.#themeKey = themeKey;
    this.#body = document.body;
  }

  get bodyTheme() {
    return this.#body.dataset.theme;
  }

  set bodyTheme(value) {
    this.#body.dataset.theme = value;
  }

  #updateAssets(theme) {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
      const path = icon.src;
      const newPath = buildAssetPathStr(path, theme);
      icon.src = newPath;
    });
  }

  #toggleTheme() {
    const currentTheme = this.bodyTheme;
    const updatedTheme = currentTheme === "dark" ? "light" : "dark";
    this.bodyTheme = updatedTheme;
    localStorage.setItem(this.#themeKey, updatedTheme);
    this.#updateAssets(updatedTheme);
  }

  #applyStoredTheme() {
    const storedTheme = localStorage.getItem(this.#themeKey);
    if (storedTheme) {
      this.bodyTheme = storedTheme;
      this.#updateAssets(storedTheme);
      return;
    }
    this.bodyTheme = "dark";
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
