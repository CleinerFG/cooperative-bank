export function setTheme() {
  const THEME_KEY = "coperativeBankTheme";
  const LIGHT_THEME_CLASS = "theme-light-icon";
  const body = document.body;
  const icons = document.querySelectorAll(".icon");

  const toggleTheme = () => {
    const isDarkTheme = body.dataset.theme === "dark";
    body.dataset.theme = isDarkTheme ? "light" : "dark";
    icons.forEach((icon) => icon.classList.toggle(LIGHT_THEME_CLASS));
    localStorage.setItem(THEME_KEY, body.dataset.theme);
  };

  document
    .getElementById("switch-theme")
    .addEventListener("click", toggleTheme);

  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme && storedTheme !== body.dataset.theme) {
    body.dataset.theme = storedTheme;
    icons.forEach((icon) => icon.classList.toggle(LIGHT_THEME_CLASS));
  }
}
