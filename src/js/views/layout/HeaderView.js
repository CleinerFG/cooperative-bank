import { LayoutView } from "./LayoutView.js";
import { PathManager } from "../../utils/PathManager.js";

export class HeaderView extends LayoutView {
  get _htmlStr() {
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
            <button class="btn-unset  header__theme-button" id="switch-theme-button" aria-label="Switch Theme">
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

  _render() {
    this._body.insertAdjacentHTML("afterbegin", this._htmlStr);
  }

  _pathHandler() {
    PathManager.updateIcon(".header__menu-icon", "icon-menu.svg");
    PathManager.updateIcon("#theme-icon", "icon-theme.svg");
    PathManager.updateHtml(".header__brand-name", "home", "index.html");
  }

  _initListeners() {
    this._menuHandler();
  }
}
