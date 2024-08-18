export class LayoutView {
  constructor(htmlStr, pathManager) {
    this._htmlStr = htmlStr;
    this._body = document.body;
    this._pathManager = pathManager;
  }

  get htmlStr() {
    return this._htmlStr;
  }

  get body() {
    return this._body;
  }

  get pathManager() {
    return this._pathManager;
  }
}
