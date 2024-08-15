import { setSrc } from "../../utils/path-manangers/assetsPaths.js";

export class ThemeView {
  constructor(themeKey, lightThemeClass) {
    this.themeKey = themeKey;
    this.lightThemeClass = lightThemeClass;
    this.body = document.body;
    // Bind ensures that the referenced this  is that of the attribute defined in the class
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  get bodyTheme() {
    return this.body.dataset.theme;
  }

  set bodyTheme(theme) {
    this.body.dataset.theme = theme;
  }

  updateThemeIcon(theme) {
    setSrc("#theme-mode", "theme", `${theme}-mode.svg`);
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
    const icons = document.querySelectorAll(".icon");
    this.applyStoredTheme(icons);
    document
      .getElementById("switch-theme-button")
      .addEventListener("click", () => this.toggleTheme(icons));
  }
}
