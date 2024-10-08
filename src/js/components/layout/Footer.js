import { Layout } from "./Layout.js";
import { PathManager } from "../../utils/PathManager.js";

export class Footer extends Layout {
  get _template() {
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

  _render(){
    super._render("beforeend")
  }

  _pathHandler() {
    PathManager.updateIcon(".footer__icon", "icon-globe.svg");
    PathManager.updateHtml(".footer__brand-name", "home", "index.html");
    PathManager.updateHtml(".footer__icon-link", "home", "index.html");
  }

  _setupListeners() {
    return false;
  }
}
