import { setSrc } from "../../utils/path-manangers/assetsPaths.js";

export class ThemeView {
  constructor(themeKey, lightThemeClass) {
    this.themeKey = themeKey;
    this.lightThemeClass = lightThemeClass;
    this.body = document.body;

    // Bind ensures that the referenced this  is that of the attribute defined in the class
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  setThemeIcon(theme) {
    setSrc("#theme-mode", "theme", `${theme}-mode.svg`);
  }

  toggleTheme(icons) {
    const currentTheme = this.body.dataset.theme;
    const updatedTheme = currentTheme === "dark" ? "light" : "dark";
    this.body.dataset.theme = updatedTheme;

    icons.forEach((icon) => icon.classList.toggle(this.lightThemeClass));
    this.setThemeIcon(this.body.dataset.theme);
    localStorage.setItem(this.themeKey, this.body.dataset.theme);
  }

  setStoredTheme(icons) {
    const storedTheme = localStorage.getItem(this.themeKey);
    if (storedTheme && storedTheme !== this.body.dataset.theme) {
      console.log(this.body.dataset.theme);
      this.setThemeIcon(storedTheme);
      this.body.dataset.theme = storedTheme;
      icons.forEach((icon) => icon.classList.toggle(this.lightThemeClass));
    }
  }

  setTheme() {
    const icons = document.querySelectorAll(".icon");
    this.setStoredTheme(icons);
    document
      .getElementById("switch-theme-button")
      .addEventListener("click", () => this.toggleTheme(icons));
  }
}
