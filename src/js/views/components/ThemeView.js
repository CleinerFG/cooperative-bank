export class ThemeView {
  constructor(pathManager) {
    this.themeKey = "coperativeBankTheme";
    this.lightThemeClass = "icon__theme-light";
    this.body = document.body;
    // Bind ensures that the referenced this  is that of the attribute defined in the class
    this.toggleTheme = this.toggleTheme.bind(this);
    this.pathManager = pathManager;
  }

  get bodyTheme() {
    return this.body.dataset.theme;
  }

  set bodyTheme(theme) {
    this.body.dataset.theme = theme;
  }
  updateThemeIcon(theme) {
    this.pathManager.updatePath(
      "asset",
      "#theme-icon",
      "theme",
      `${theme}-mode.svg`
    );
  }

  toggleTheme(icons) {
    const currentTheme = this.bodyTheme;
    const updatedTheme = currentTheme === "dark" ? "light" : "dark";
    this.bodyTheme = updatedTheme;

    icons.forEach((icon) => icon.classList.toggle(this.lightThemeClass));
    this.updateThemeIcon(updatedTheme);
    localStorage.setItem(this.themeKey, updatedTheme);
  }

  applyStoredTheme(icons) {
    const storedTheme = localStorage.getItem(this.themeKey);
    if (storedTheme && storedTheme !== this.bodyTheme) {
      this.updateThemeIcon(storedTheme);
      this.bodyTheme = storedTheme;
      icons.forEach((icon) => icon.classList.toggle(this.lightThemeClass));
    }
  }

  initializeTheme() {
    this.updateThemeIcon(this.bodyTheme);
    const icons = document.querySelectorAll(".icon");
    this.applyStoredTheme(icons);
    document
      .getElementById("switch-theme-button")
      .addEventListener("click", () => this.toggleTheme(icons));
  }
}
