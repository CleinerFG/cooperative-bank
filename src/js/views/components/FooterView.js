import pathManager from "../../utils/PathManager.js";

export class FooterView {
  constructor() {
    this._htmlStr = `  
    <footer id="footer" class="footer" aria-label="Footer">
    <a class="footer__icon-link">
      <img class="icon footer__icon" alt="Footer Icon">
    </a>
    <div class="footer__content">
      <a class="footer__brand-name">Coperative Bank</a>
      <p>By Cleiner Furlani</p>
    </div>
  </footer>
  `;
    this._parentNode = document.body;
  }

  get htmlStr() {
    return this._htmlStr;
  }

  set htmlStr(value) {
    this._htmlStr = value;
  }

  get parentNode() {
    return this._parentNode;
  }

  set parentNode(value) {
    this._parentNode = value;
  }

  _pathHandler() {
    pathManager.updatePath("asset", ".footer__icon", "icons", "icon-globe.svg");
    pathManager.updatePath("html", ".footer__brand-name", "home", "index.html");
    pathManager.updatePath("html", ".footer__icon-link", "home", "index.html");
  }

  render() {
    this.parentNode.insertAdjacentHTML("beforeend", this.htmlStr);
    this._pathHandler();
  }
}