export class ThemeView {
  constructor(pathManager) {
    this._pathManager = pathManager;
    this._themeKey = "coperativeBankTheme";
    this._lightThemeClass = "icon__theme-light";
    this._body = document.body;
    // Bind ensures that the referenced this  is that of the attribute defined in the class
    this._toggleTheme = this._toggleTheme.bind(this);
  }

  get _bodyTheme() {
    return this._body.dataset.theme;
  }

  set _bodyTheme(value) {
    this._body.dataset.theme = value;
  }

  _updateThemeIcon(theme) {
    this._pathManager.updatePath(
      "asset",
      "#theme-icon",
      "theme",
      `${theme}-mode.svg`
    );
  }

  _toggleTheme(icons) {
    const currentTheme = this._bodyTheme;
    const updatedTheme = currentTheme === "dark" ? "light" : "dark";
    this._bodyTheme = updatedTheme;

    icons.forEach((icon) => icon.classList.toggle(this._lightThemeClass));
    this._updateThemeIcon(updatedTheme);
    localStorage.setItem(this._themeKey, updatedTheme);
  }

  _applyStoredTheme(icons) {
    const storedTheme = localStorage.getItem(this._themeKey);
    if (storedTheme && storedTheme !== this._bodyTheme) {
      this._updateThemeIcon(storedTheme);
      this._bodyTheme = storedTheme;
      icons.forEach((icon) => icon.classList.toggle(this._lightThemeClass));
    }
  }

  initializeTheme() {
    this._updateThemeIcon(this._bodyTheme);
    const icons = document.querySelectorAll(".icon");
    this._applyStoredTheme(icons);
    document
      .getElementById("switch-theme-button")
      .addEventListener("click", () => this._toggleTheme(icons));
  }
}
