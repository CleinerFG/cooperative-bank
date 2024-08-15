export class HeaderView {
  constructor(pathManager) {
    this._htmlStr = `  
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
            <img class="header__theme-icon" id="theme-icon" alt="Theme Mode Icon">
          </button>
        </li>
        <li class="header__menu-item"><a class="header__menu-link">Profile</a></li>
        <li class="header__menu-item">Logout</li>
      </ul>
    </nav>
  </header>`;
    this._parentNode = document.body;
    this._pathManager = pathManager;
  }

  get htmlStr() {
    return this._htmlStr;
  }

  get parentNode() {
    return this._parentNode;
  }

  get pathManager() {
    return this._pathManager;
  }

  _menuHandler() {
    const menuBtn = document.querySelector("#menu-button");
    menuBtn.addEventListener("click", (ev) => {
      menuBtn.classList.toggle("header__menu-button--active");
      const nav = document.querySelector(".header__menu");
      nav.classList.toggle("header__menu--block");
    });
  }

  _pathHandler() {
    this.pathManager.updatePath(
      "html",
      ".header__brand-name",
      "home",
      "index.html"
    );
    this.pathManager.updatePath(
      "asset",
      ".header__menu-icon",
      "icons",
      "icon-menu.svg"
    );
  }

  render() {
    this.parentNode.insertAdjacentHTML("afterbegin", this.htmlStr);
    this._menuHandler();
    this._pathHandler();
  }
}
