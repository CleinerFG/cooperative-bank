import { getStoredTheme } from '../../../../global/js/utils/themeUtils.js';

/**
 * Manages the app theme, including storing and applying
 * themes, updating assets based on the current theme, and handling
 * user interactions for theme switching.
 */
export class Theme {
  static LOCAL_STORAGE_KEY = 'coperativeBankAppTheme';
  constructor() {
    this.#init();
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

  #updateIcons() {
    const icons = document.querySelectorAll('.icon');
    icons.forEach((icon) => {
      icon.classList.toggle('icon-invert');
    });
  }

  #toggleTheme() {
    this.#updateIcons();
    this.#storedTheme = this.#updatedTheme;
    this.#currentTheme = this.#updatedTheme;
  }

  #applyStoredTheme() {
    if (getStoredTheme() === 'dark') {
      this.#updateIcons();
    }
    this.#currentTheme = getStoredTheme();
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
