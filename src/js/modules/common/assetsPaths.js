const paths = {
  icons: "/src/assets/icons/",
};

export function setSrc(query, assetType, filename) {
  document
    .querySelector(query)
    .setAttribute("src", paths[assetType] + filename);
}
