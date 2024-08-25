export class ThemeView {
  #themeKey;
  #body;
  #toggleTheme;
  constructor() {
    this.#themeKey = "coperativeBankTheme";
    this.#body = document.body;
    this.#toggleTheme = this._toggleTheme.bind(this);
  }

  get bodyTheme() {
    return this.#body.dataset.theme;
  }

  set bodyTheme(value) {
    this.#body.dataset.theme = value;
  }

  _toggleTheme(updateAssets) {
    const currentTheme = this.bodyTheme;
    const updatedTheme = currentTheme === "dark" ? "light" : "dark";
    this.bodyTheme = updatedTheme;
    localStorage.setItem(this.#themeKey, updatedTheme);
    updateAssets();
  }

  applyStoredTheme(updateAssets) {
    const storedTheme = localStorage.getItem(this.#themeKey);
    if (storedTheme && storedTheme !== this.bodyTheme) {
      this.bodyTheme = storedTheme;
      updateAssets();
    }
  }

  btnHandler(updateAssets) {
    document
      .getElementById("switch-theme-button")
      .addEventListener("click", () => this._toggleTheme(updateAssets));
  }
}
