export class FooterView {
  constructor(pathManager) {
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
    this._pathManager = pathManager;
  }

  get htmlStr() {
    return this._htmlStr;
  }

  get parentNode() {
    return this._parentNode;
  }

  get pathManager() {
    return this._pathManager;
  }

  _pathHandler() {
    this.pathManager.updatePath(
      "asset",
      ".footer__icon",
      "icons",
      "icon-globe.svg"
    );
    this.pathManager.updatePath(
      "html",
      ".footer__brand-name",
      "home",
      "index.html"
    );
    this.pathManager.updatePath(
      "html",
      ".footer__icon-link",
      "home",
      "index.html"
    );
  }

  render() {
    this.parentNode.insertAdjacentHTML("beforeend", this.htmlStr);
    this._pathHandler();
  }
}
