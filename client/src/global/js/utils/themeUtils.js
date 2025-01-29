const LOCAL_STORAGE_KEY = 'coperativeBankAppTheme';
const DEFAULT_THEME = 'light';

/**
 * @return {'dark'|'ligth'}
 */
export function getStoredTheme() {
  return localStorage.getItem(LOCAL_STORAGE_KEY) ?? DEFAULT_THEME;
}

function bodyTheme() {
  return document.body.dataset.theme;
}

export function handleIconDark() {
  return bodyTheme() === 'dark' ? 'icon-invert' : '';
}
