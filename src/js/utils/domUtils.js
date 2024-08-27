import { themeKey } from "../views/layout/ThemeView.js";

export function getTheme() {
  const storedTheme = localStorage.getItem(themeKey);
  return storedTheme ?? "dark";
}
