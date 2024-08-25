import pathUtil from "../../utils/PathManager.js";

export class ThemeView {
  #pathManager;
  #themeKey;
  #lightThemeClass;
  #body;
  #toggleTheme;
  constructor(pathManager = pathUtil) {
    this.#pathManager = pathManager;
    this.#themeKey = "coperativeBankTheme";
    this.#lightThemeClass = "icon__theme-light";
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

  _toggleTheme(icons) {
    const currentTheme = this.bodyTheme;
    const updatedTheme = currentTheme === "dark" ? "light" : "dark";
    this.bodyTheme = updatedTheme;

    icons.forEach((icon) => icon.classList.toggle(this.#lightThemeClass));
    this._updateThemeIcon(updatedTheme);
    localStorage.setItem(this.#themeKey, updatedTheme);
  }

  applyStoredTheme(icons) {
    const storedTheme = localStorage.getItem(this.#themeKey);
    if (storedTheme && storedTheme !== this.bodyTheme) {
      this._updateThemeIcon(storedTheme);
      this.bodyTheme = storedTheme;
      icons.forEach((icon) => {
        icon.classList.toggle(this.#lightThemeClass);
      });
    }
  }

  btnHandler(icons) {
    document
      .getElementById("switch-theme-button")
      .addEventListener("click", () => this._toggleTheme(icons));
  }
}
