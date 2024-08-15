class PathManager {
  constructor(assetsPaths, htmlPaths) {
    this.assetsPaths = assetsPaths;
    this.htmlPaths = htmlPaths;
  }

  updatePath(fileType, selector, node, filename) {
    console.log({ fileType, selector, node, filename });
    const element = document.querySelector(selector);
    if (fileType === "asset") {
      element.setAttribute("src", this.assetsPaths[node] + filename);
      return;
    }
    element.setAttribute("href", this.htmlPaths[node] + filename);
  }
}

const assetsPaths = {
  icons: "/src/assets/icons/",
  images: "/src/assets/images/",
  theme: "/src/assets/theme/",
};

const htmlPaths = {
  home: "/src/pages/home/",
  menu: "/src/pages/menu/",
  loans: "/src/pages/loans/",
  investments: "/src/pages/investments/",
};

export default new PathManager(assetsPaths, htmlPaths);
