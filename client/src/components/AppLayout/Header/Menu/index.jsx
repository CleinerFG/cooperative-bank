export default function Menu() {
  return (
    <>
      <button
        className="btn-unset btn-menu"
        type="button"
        data-active="false"
        aria-label="Menu"
      >
        <img
          className="icon"
          src="/app/static/assets/icons/icon-menu.svg"
          alt="Menu Icon"
        />
      </button>
      <nav className="nav-menu" aria-label="Main navigation">
        <ul className="menu-list">
          <li className="menu-item">
            <a className="menu-link" href="/app/my-account" data-link>
              My Account
            </a>
          </li>
          <li className="menu-item">
            <button
              className="btn-unset btn-theme"
              id="btn-switch-theme"
              aria-label="Switch Theme"
            >
              <span>Switch Theme</span>
              <img className="icon" id="icon-theme" alt="Theme Mode Icon" />
            </button>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="/app/settings" data-link>
              Settings
            </a>
          </li>
          <li className="menu-item">Logout</li>
        </ul>
      </nav>
    </>
  );
}
