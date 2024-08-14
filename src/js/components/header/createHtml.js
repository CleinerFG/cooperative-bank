const htmlStr = `
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
`;

export const createHtml = () => {
  const header = document.getElementById("header");
  header.innerHTML = htmlStr;
};
