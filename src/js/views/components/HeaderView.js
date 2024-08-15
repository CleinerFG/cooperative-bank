import { setHref } from "../../utils/path-manangers/htmlPagesPaths.js";
import { setSrc } from "../../utils/path-manangers/assetsPaths.js";

export class HeaderView {
  constructor() {
    this.htmlStr = `  
  <header id="header" class="header">
    <a class="header__brand-name" rel="home">Coperative Bank</a>
    <button id="menu-button" class="btn-unset header__menu-button" aria-label="Menu">
      <img class="icon header__menu-icon" alt="Menu Icon">
    </button>
    <nav class="header__menu" aria-label="Main navigation">
      <ul class="header__menu-list">
        <li class="header__menu-item">
          <button class="btn-unset  header__theme-button" id="switch-theme-button" aria-label="Switch Theme">
            <span>Switch Theme</span>
            <img class="header__theme-icon" id="theme-mode" alt="Theme Mode Icon">
          </button>
        </li>
        <li class="header__menu-item"><a class="header__menu-link">Profile</a></li>
        <li class="header__menu-item">Logout</li>
      </ul>
    </nav>
  </header>`;
    this.parentNode = document.body;
  }

  menuHandler() {
    const menuBtn = document.querySelector("#menu-button");
    menuBtn.addEventListener("click", (ev) => {
      menuBtn.classList.toggle("header__menu-button--active");
      const nav = document.querySelector(".header__menu");
      nav.classList.toggle("header__menu--block");
    });
  }

  pathHandler() {
    setHref(".header__brand-name", "home", "index.html");
    setSrc(".header__menu-icon", "icons", "icon-menu.svg");
    setSrc("#theme-mode", "theme", `${this.parentNode.dataset.theme}-mode.svg`);
  }

  render() {
    this.parentNode.insertAdjacentHTML("afterbegin", this.htmlStr);
    this.menuHandler();
    this.pathHandler();
  }
}
