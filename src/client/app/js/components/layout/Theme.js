/**
 * @typedef {"dark" | "light"} ThemeType
 */

/**
 * Manages the application theme, including storing and applying
 * themes, updating assets based on the current theme, and handling
 * user interactions for theme switching.
 *
 * @class
 */
export class Theme {
  /**
   * The key used to store the theme preference in localStorage.
   * @public
   * @static
   * @constant {string}
   */
  static THEME_KEY = "coperativeBankTheme";

  /**
   * The body element of the document.
   * @private
   * @type {HTMLElement}
   */
  #bodyElement = document.body;

  /**
   * Initializes the Theme instance by applying the stored theme and setting up
   * the button handler for theme switching.
   */
  constructor() {
    this.#init();
  }

  /**
   * Retrieves the currently stored theme from localStorage.
   *
   * @public
   * @static
   * @returns {ThemeType} The currently stored theme. If no theme is
   * found, return "dark".
   */
  static get storedTheme() {
    return localStorage.getItem(Theme.THEME_KEY) ?? "dark";
  }

  /**
   * Sets the stored theme in localStorage.
   * @private
   * @param {ThemeType} value - The theme value to store.
   */
  set #storedTheme(value) {
    localStorage.setItem(Theme.THEME_KEY, value);
  }

  /**
   * Retrieves the current theme applied to the body element.
   * @private
   * @returns {ThemeType} The current theme applied to the body.
   */
  get #bodyTheme() {
    return this.#bodyElement.dataset.theme;
  }

  /**
   * Sets the theme applied to the body element.
   * @private
   * @param {ThemeType} value - The theme value to apply to the body.
   */
  set #bodyTheme(value) {
    this.#bodyElement.dataset.theme = value;
  }

  /**
 * Builds the icon path based on the provided theme.
 *
 * @private
 * @param {string} path - The original path of the icon.
 * @param {ThemeType} theme - The theme to apply.
 * @returns {string} The new path for the icon based on the theme.
 */
  #buildIconPath(path, theme) {
    const basePath = "/src/assets/icons/";
    const iconPattern = /([^\/]+)\.svg$/;

    const iconMatch = path.match(iconPattern);
    const icon = iconMatch[0];

    return basePath + theme + "/" + icon;
  }

  /**
   * Updates the paths for all icon elements based on the current theme.
   *
   * @private
   * @param {ThemeType} theme - The current theme to update assets for.
   */
  #updateIcons(theme) {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
      const path = icon.src;
      const newPath = this.#buildIconPath(path, theme);
      icon.src = newPath;
    });
  }

  /**
   * Toggles the theme between "dark" and "light", updates the body theme,
   * stores the new theme in localStorage, and updates the assets accordingly.
   *
   * @private
   */
  #toggleTheme() {
    const currentTheme = this.#bodyTheme;
    const updatedTheme = currentTheme === "dark" ? "light" : "dark";
    this.#bodyTheme = updatedTheme;
    this.#storedTheme = updatedTheme;
    this.#updateIcons(updatedTheme);
  }

  /**
   * Applies the stored theme from localStorage to the body element on initialization.
   *
   * @private
   */
  #applyStoredTheme() {
    this.#bodyTheme = Theme.storedTheme;
  }

  /**
   * Sets up the button event listener to toggle the theme when clicked.
   *
   * @private
   */
  #btnHandler() {
    document
      .getElementById("switch-theme-btn")
      .addEventListener("click", () => this.#toggleTheme());
  }

  /**
   * Initializes the Theme by applying the stored theme and setting up
   * the button handler.
   *
   * @private
   */
  #init() {
    this.#applyStoredTheme();
    this.#btnHandler();
  }
}
