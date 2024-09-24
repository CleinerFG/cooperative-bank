import { LayoutView } from "./LayoutView.js";
import { PathManager } from "../../utils/PathManager.js";

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
  get _htmlStr() {
    return `  
      <footer id="footer" class="footer" aria-label="Footer">
      <a class="footer__icon-link">
        <img class="icon footer__icon" alt="Footer Icon">
      </a>
      <div class="footer__content">
        <a class="footer__brand-name">Coperative Bank</a>
        <p>By Cleiner Furlani</p>
      </div>
      </footer>`;
  }

  _render() {
    this._body.insertAdjacentHTML("beforeend", this._htmlStr);
  }

  _pathHandler() {
    PathManager.updateIcon(".footer__icon", "icon-globe.svg");
    PathManager.updateHtml(".footer__brand-name", "home", "index.html");
    PathManager.updateHtml(".footer__icon-link", "home", "index.html");
  }

  _initListeners() {
    return false;
  }
}
