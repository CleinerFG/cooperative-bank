import pathManager from "../../utils/PathManager.js";

export class FooterView {
  constructor() {
    this.htmlStr = `  
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
    this.parentNode = document.body;
  }

  pathHandler() {
    pathManager.updatePath("asset", ".footer__icon", "icons", "icon-globe.svg");
    pathManager.updatePath("html", ".footer__brand-name", "home", "index.html");
    pathManager.updatePath("html", ".footer__icon-link", "home", "index.html");
  }

  render() {
    this.parentNode.insertAdjacentHTML("beforeend", this.htmlStr);
    this.pathHandler();
  }
}
