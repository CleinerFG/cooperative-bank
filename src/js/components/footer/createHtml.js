import { innerHTML } from "../../utils/dom/innerHTML.JS";

const htmlStr = `
<footer class="footer" aria-label="Footer">
  <a class="footer__icon-link">
    <img class="icon footer__icon" alt="Footer Icon">
  </a>
  <div class="footer__content">
    <a class="footer__brand-name">Coperative Bank</a>
    <p>By Cleiner Furlani</p>
  </div>
</footer>
`;
export const createHtml = () => innerHTML("footer", htmlStr);
