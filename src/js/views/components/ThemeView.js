export class ThemeView {
  constructor(pathManager) {
    this._themeKey = "coperativeBankTheme";
    this._lightThemeClass = "icon__theme-light";
    this._body = document.body;
    // Bind ensures that the referenced this  is that of the attribute defined in the class
    this._toggleTheme = this._toggleTheme.bind(this);
    this.pathManager = pathManager;
  }

  get themeKey() {
    return this._themeKey;
  }

  get lightThemeClass() {
    return this._lightThemeClass;
  }

  get body() {
    return this._body;
  }

  get bodyTheme() {
    return this._body.dataset.theme;
  }

  set bodyTheme(theme) {
    this._body.dataset.theme = theme;
  }
  _updateThemeIcon(theme) {
    this.pathManager.updatePath(
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

    icons.forEach((icon) => icon.classList.toggle(this.lightThemeClass));
    this._updateThemeIcon(updatedTheme);
    localStorage.setItem(this.themeKey, updatedTheme);
  }

  _applyStoredTheme(icons) {
    const storedTheme = localStorage.getItem(this.themeKey);
    if (storedTheme && storedTheme !== this.bodyTheme) {
      this._updateThemeIcon(storedTheme);
      this.bodyTheme = storedTheme;
      icons.forEach((icon) => icon.classList.toggle(this.lightThemeClass));
    }
  }

  initializeTheme() {
    this._updateThemeIcon(this.bodyTheme);
    const icons = document.querySelectorAll(".icon");
    this._applyStoredTheme(icons);
    document
      .getElementById("switch-theme-button")
      .addEventListener("click", () => this._toggleTheme(icons));
  }
}
