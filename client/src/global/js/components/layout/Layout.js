import { AssetManager } from '../../core/AssetManager.js';
import { Theme } from './Theme.js';

/**
 * Initializes the layout components (Header, Footer and Theme).
 * Instantiate this class in the main SPA script.
 */
export class Layout {
  constructor() {
    this.#init();
  }

  get #btnMenuElement() {
    return document.querySelector('.header .btn-menu');
  }

  get #navMenuElement() {
    return document.querySelector('.header .nav-menu');
  }

  #toggleMenu() {
    this.#btnMenuElement.classList.toggle('btn-active');
    this.#navMenuElement.classList.toggle('display-block');
  }

  #closeMenuOnClickOutside(e) {
    if (
      !this.#btnMenuElement.contains(e.target) &&
      !this.#navMenuElement.contains(e.target)
    ) {
      this.#btnMenuElement.classList.remove('btn-active');
      this.#navMenuElement.classList.remove('display-block');
    }
  }

  #setListeners() {
    this.#btnMenuElement.addEventListener('click', this.#toggleMenu.bind(this));
    window.addEventListener('click', this.#closeMenuOnClickOutside.bind(this));
  }

  #handleAssets() {
    AssetManager.updateAsset('icon', '.header .menu-icon', 'icon-menu.svg');
    AssetManager.updateAsset('icon', '#icon-theme', 'icon-theme.svg');
    AssetManager.updateAsset('icon', '.footer .icon', 'icon-globe.svg');
  }

  #init() {
    new Theme();
    this.#setListeners();
    this.#handleAssets();
  }
}
