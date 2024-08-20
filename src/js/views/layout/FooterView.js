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
  constructor() {
    super(htmlStr, null);
  }

  render() {
    this.body.insertAdjacentHTML("beforeend", this.htmlStr);
  }
}
