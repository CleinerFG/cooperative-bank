import { LayoutView } from "./LayoutView.js";

const htmlStr = `  
<footer id="footer" class="footer" aria-label="Footer">
<a class="footer__icon-link">
  <img class="icon footer__icon" alt="Footer Icon">
</a>
<div class="footer__content">
  <a class="footer__brand-name">Coperative Bank</a>
  <p>By Cleiner Furlani</p>
</div>
</footer>`;

export class FooterView extends LayoutView {
  constructor(pathManager) {
    super(htmlStr, pathManager);
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
    this.body.insertAdjacentHTML("beforeend", this.htmlStr);
    this._pathHandler();
  }
}
