export class ThemeView {
  #themeKey;
  #body;
  constructor() {
    this.#themeKey = "coperativeBankTheme";
    this.#body = document.body;
  }

  get bodyTheme() {
    return this.#body.dataset.theme;
  }

  set bodyTheme(value) {
    this.#body.dataset.theme = value;
  }

  #updateSrcAsset(path, theme) {
    const basePath = "/src/assets/icons/";
    const iconPattern = /\/([^\/]+)\.svg$/;

    const iconMatch = path.match(iconPattern);
    const icon = iconMatch[0];

    return basePath + theme + icon;
  }

  #updateAssets() {}

  #toggleTheme() {
    const currentTheme = this.bodyTheme;
    const updatedTheme = currentTheme === "dark" ? "light" : "dark";
    this.bodyTheme = updatedTheme;
    localStorage.setItem(this.#themeKey, updatedTheme);
    console.log("toggleTheme", this.bodyTheme);
    this.#updateAssets();
  }

  #applyStoredTheme() {
    const storedTheme = localStorage.getItem(this.#themeKey);
    if (storedTheme) {
      this.bodyTheme = storedTheme;
    } else {
      this.bodyTheme = "dark";
    }
    console.log("applyStored", this.bodyTheme);
    this.#updateAssets();
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
