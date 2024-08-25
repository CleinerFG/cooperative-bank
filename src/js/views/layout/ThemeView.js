import pathUtil from "../../utils/PathManager.js";

export class ThemeView {
  #pathManager;
  #themeKey;
  #body;
  #toggleTheme;
  constructor(pathManager = pathUtil) {
    this.#pathManager = pathManager;
    this.#themeKey = "coperativeBankTheme";
    this.#body = document.body;
    // Bind ensures that the referenced this  is that of the attribute defined in the class
    this.#toggleTheme = this._toggleTheme.bind(this);
  }

  get bodyTheme() {
    return this.#body.dataset.theme;
  }

  set bodyTheme(value) {
    this.#body.dataset.theme = value;
  }

  _updateThemeIcon(theme) {
    this.#pathManager.updatePath(
      "asset",
      "#theme-icon",
      "theme",
      `${theme}-mode.svg`
    );
  }

  _toggleTheme() {
    const currentTheme = this.bodyTheme;
    const updatedTheme = currentTheme === "dark" ? "light" : "dark";
    this.bodyTheme = updatedTheme;

    this._updateThemeIcon(updatedTheme);
    localStorage.setItem(this.#themeKey, updatedTheme);
  }

  applyStoredTheme() {
    const storedTheme = localStorage.getItem(this.#themeKey);
    if (storedTheme && storedTheme !== this.bodyTheme) {
      this._updateThemeIcon(storedTheme);
      this.bodyTheme = storedTheme;
    }
  }

  btnHandler() {
    document
      .getElementById("switch-theme-button")
      .addEventListener("click", () => this._toggleTheme());
  }
}
