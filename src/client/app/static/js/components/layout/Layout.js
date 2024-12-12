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

  /**
   * Toggles the visibility of the navigation menu and adds event listeners to handle menu interactions.
   * When the menu button is clicked, it toggles the active state of the menu.
   * Additionally, clicking outside the menu closes it.
   *
   */
  #menuHandler() {
    const menuBtn = document.querySelector('#menu-button');
    const navMenu = document.querySelector('.header__menu');

    const toggleMenu = () => {
      menuBtn.classList.toggle('header__menu-button--active');
      navMenu.classList.toggle('header__menu--block');
    };

    const closeMenuOnClickOutside = (ev) => {
      if (!menuBtn.contains(ev.target) && !navMenu.contains(ev.target)) {
        menuBtn.classList.remove('header__menu-button--active');
        navMenu.classList.remove('header__menu--block');
      }
    };

    menuBtn.addEventListener('click', toggleMenu);

    window.addEventListener('click', closeMenuOnClickOutside);
  }

  /**
   * Updates asset paths for icons in the header and footer.
   *
   */
  #assetHandler() {
    AssetManager.updateIcon('.header__menu-icon', 'icon-menu.svg');
    AssetManager.updateIcon('#theme-icon', 'icon-theme.svg');
    AssetManager.updateIcon('.footer__icon', 'icon-globe.svg');
  }

  #init() {
    new Theme();
    this.#menuHandler();
    this.#assetHandler();
  }
}
