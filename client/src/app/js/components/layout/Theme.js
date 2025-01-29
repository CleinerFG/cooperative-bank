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
  /**
   * @type {'dark'|'ligth'}
   */
  #currentTheme;

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
   * @param {'dark'|'ligth'} value
   */
  set #bodyTheme(value) {
    this.#currentTheme = value;
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
    this.#bodyTheme = this.#updatedTheme;
  }

  #applyStoredTheme() {
    if (this.#storedTheme === 'dark') {
      this.#updateIcons();
    }
    this.#bodyTheme = this.#storedTheme;
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
