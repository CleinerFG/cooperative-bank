import { Layout } from "./Layout.js";
import { PathManager } from "../../utils/PathManager.js";

/**
 * Represents the header layout component for the application.
 * Extends the Layout class and provides specific implementations for rendering,
 * managing paths, and setting up event listeners for the header.
 * @class
 * @extends Layout
 */
export class Header extends Layout {
  /**
   * Returns the HTML template for the header.
   *
   * @protected
   * @override
   * @returns {string}
   */
  get _template() {
    return `  
    <header id="header" class="header">
      <a class="header__brand-name" rel="home">Coperative Bank</a>
      <button id="menu-button" class="btn-unset header__menu-button" aria-label="Menu">
        <img class="icon header__menu-icon" alt="Menu Icon">
      </button>
      <nav class="header__menu" aria-label="Main navigation">
        <ul class="header__menu-list">
          <li class="header__menu-item"><a class="header__menu-link">My Account</a></li>
          <li class="header__menu-item">
            <button class="btn-unset  header__theme-button" id="switch-theme-btn" aria-label="Switch Theme">
              <span>Switch Theme</span>
              <img class="icon header__theme-icon" id="theme-icon" alt="Theme Mode Icon">
            </button>
          </li>
          <li class="header__menu-item"><a class="header__menu-link">Settings</a></li>
          <li class="header__menu-item">Logout</li>
        </ul>
      </nav>
    </header>`;
  }

  /**
   * Toggles the visibility of the navigation menu and adds event listeners to handle menu interactions.
   * When the menu button is clicked, it toggles the active state of the menu.
   * Additionally, clicking outside the menu closes it.
   *
   * @protected
   */
  _menuHandler() {
    const menuBtn = document.querySelector("#menu-button");
    const navMenu = document.querySelector(".header__menu");

    const toggleMenu = () => {
      menuBtn.classList.toggle("header__menu-button--active");
      navMenu.classList.toggle("header__menu--block");
    };

    const closeMenuOnClickOutside = (ev) => {
      if (!menuBtn.contains(ev.target) && !navMenu.contains(ev.target)) {
        menuBtn.classList.remove("header__menu-button--active");
        navMenu.classList.remove("header__menu--block");
      }
    };

    menuBtn.addEventListener("click", toggleMenu);

    window.addEventListener("click", closeMenuOnClickOutside);
  }

  /**
   * Renders the header at the specified position within the document body.
   *
   * @protected
   * @override
   */
  _render() {
    super._render("afterbegin");
  }

  /**
   * Updates asset paths for icons and HTML elements in the header.
   * Uses the PathManager utility to assign the correct paths for menu and theme icons, and for the brand link.
   *
   * @protected
   * @override
   */
  _pathHandler() {
    PathManager.updateIcon(".header__menu-icon", "icon-menu.svg");
    PathManager.updateIcon("#theme-icon", "icon-theme.svg");
    PathManager.updateHtml(".header__brand-name", "home", "index.html");
  }

  /**
   * Sets up event listeners specific to the header component.
   * Initializes the menu interaction by calling `_menuHandler`.
   *
   * @protected
   * @override
   */
  _setupListeners() {
    this._menuHandler();
  }
}
