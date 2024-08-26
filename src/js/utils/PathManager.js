class PathManager {
  constructor(assetsPaths, htmlPaths) {
    this._assetsPaths = assetsPaths;
    this._htmlPaths = htmlPaths;
  }

  get assetsPaths() {
    return this._assetsPaths;
  }

  get htmlPaths() {
    return this._htmlPaths;
  }

  _fileTypeIsValid(fileType) {
    return ["html", "asset"].includes(fileType);
  }

  updatePath(fileType, selector, pathKey, filename) {
    if (!this._fileTypeIsValid(fileType)) return;

    const element = document.querySelector(selector);
    if (fileType === "asset") {
      element.setAttribute("src", this.assetsPaths[pathKey] + filename);
      return;
    }
    element.setAttribute("href", this.htmlPaths[pathKey] + filename);
  }
}

const assetsPaths = {
  iconsdark: "/src/assets/icons/dark/",
  iconslight: "/src/assets/icons/light/",
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
