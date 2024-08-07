const paths = {
  icons: "/src/assets/icons/",
  images: "/src/assets/images/",
  theme: "/src/assets/theme/",
};

export function setSrc(query, assetType, filename) {
  document
    .querySelector(query)
    .setAttribute("src", paths[assetType] + filename);
}
