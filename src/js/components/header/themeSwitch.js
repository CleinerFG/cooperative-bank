import { setSrc } from "../../utils/path-manangers/assetsPaths.js";

export function setTheme() {
  const THEME_KEY = "coperativeBankTheme";
  const LIGHT_THEME_CLASS = "icon__theme-light";
  const body = document.body;
  const icons = document.querySelectorAll(".icon");
  setSrc("#theme-mode", "theme", `${body.dataset.theme}-mode.svg`);
  const toggleTheme = () => {
    const isDarkTheme = body.dataset.theme === "dark";
    body.dataset.theme = isDarkTheme ? "light" : "dark";
    icons.forEach((icon) => icon.classList.toggle(LIGHT_THEME_CLASS));
    setSrc("#theme-mode", "theme", `${body.dataset.theme}-mode.svg`);
    localStorage.setItem(THEME_KEY, body.dataset.theme);
  };

  document
    .getElementById("switch-theme-button")
    .addEventListener("click", toggleTheme);

  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme && storedTheme !== body.dataset.theme) {
    setSrc("#theme-mode", "theme", `${storedTheme}-mode.svg`);
    body.dataset.theme = storedTheme;
    icons.forEach((icon) => icon.classList.toggle(LIGHT_THEME_CLASS));
  }
}
