import {
  LOCAL_STORAGE_THEME_KEY,
  DEFAULT_THEME,
} from '../../constants/theme.js';

/**
 * Manages the app theme, including storing and applying
 * themes, updating assets based on the current theme, and handling
 * user interactions for theme switching.
 */
export class Theme {
  constructor() {
    this.#init();
  }

  /**
   * @type {'dark'|'ligth'}
   */
  get #storedTheme() {
    return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? DEFAULT_THEME;
  }

  /**
   * @param {'dark'|'ligth'} value
   */
  set #storedTheme(value) {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, value);
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
    if (this.#storedTheme === 'dark') {
      this.#updateIcons();
    }
    this.#currentTheme = this.#storedTheme;
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
