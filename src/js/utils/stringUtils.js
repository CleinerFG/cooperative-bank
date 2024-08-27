export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function buildAssetPathStr(path, theme) {
  const basePath = "/src/assets/icons/";
  const iconPattern = /\/([^\/]+)\.svg$/;

  const iconMatch = path.match(iconPattern);
  const icon = iconMatch[0];

  return basePath + theme + icon;
}
