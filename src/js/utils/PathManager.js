export class PathManager {
  constructor(assetsPaths, htmlPaths) {
    this.assetsPaths = assetsPaths;
    this.htmlPaths = htmlPaths;
  }

  updatePath(fileType, selector, node, filename) {
    const element = document.querySelector(selector);
    if (fileType === "asset") {
      element.setAttribute("src", this.assetsPaths[node] + filename);
      return;
    }
    element.setAttribute("href", this.htmlPaths[node] + filename);
  }
}
