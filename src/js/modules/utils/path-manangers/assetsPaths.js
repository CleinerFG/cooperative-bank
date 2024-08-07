const paths = {
  icons: "/src/assets/icons/",
  images: "/src/assets/images/"
};

export function setSrc(query, assetType, filename) {
  document
    .querySelector(query)
    .setAttribute("src", paths[assetType] + filename);
}
