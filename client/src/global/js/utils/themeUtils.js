function getBodyTheme() {
  return document.body.dataset.theme;
}

export function handleIconDark() {
  return getBodyTheme() === 'dark' ? 'icon-invert' : '';
}
