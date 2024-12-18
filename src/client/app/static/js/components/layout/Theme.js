/**
 * Manages the app theme, including storing and applying
 * themes, updating assets based on the current theme, and handling
 * user interactions for theme switching.
 */
export class Theme {
  static LOCAL_STORAGE_KEY = 'coperativeBankTheme';
  static DEFAULT_THEME = 'light';

  constructor() {
    this.#init();
  }

  /**
   * @type {'dark'|'ligth'}
   */
  static get storedTheme() {
    return localStorage.getItem(Theme.LOCAL_STORAGE_KEY) ?? Theme.DEFAULT_THEME;
  }

  /**
   * @param {'dark'|'ligth'} value
   */
  set #storedTheme(value) {
    localStorage.setItem(Theme.LOCAL_STORAGE_KEY, value);
  }

  /**
   * @type {'dark'|'ligth'}
   */
  get #currentTheme() {
    return document.body.dataset.theme;
  }

  /**
   * @param {'dark'|'ligth'} value
   */
  set #currentTheme(value) {
    document.body.dataset.theme = value;
  }

  /**
   * @type {'dark'|'ligth'}
   */
  get #updatedTheme() {
    return this.#currentTheme === 'dark' ? 'light' : 'dark';
  }

  /**
   * @param {string} originalPath
   * @param {'dark'|'ligth'} theme
   */
  #buildIconPath(originalPath, theme) {
    const basePath = '/app/static/assets/icons/';
    const iconPattern = /([^\/]+)\.svg$/;

    const iconMatch = originalPath.match(iconPattern);
    const icon = iconMatch[0];

    return basePath + theme + '/' + icon;
  }

  #updateIcons() {
    const icons = document.querySelectorAll('.icon');
    icons.forEach((icon) => {
      const path = icon.src;
      const newPath = this.#buildIconPath(path, this.#updatedTheme);
      icon.src = newPath;
    });
  }

  #toggleTheme() {
    this.#updateIcons();
    this.#storedTheme = this.#updatedTheme;
    this.#currentTheme = this.#updatedTheme;
  }

  #applyStoredTheme() {
    this.#currentTheme = Theme.storedTheme;
  }

  #setListeners() {
    document
      .getElementById('btn-switch-theme')
      .addEventListener('click', this.#toggleTheme.bind(this));
  }

  #init() {
    this.#applyStoredTheme();
    this.#setListeners();
  }
}
