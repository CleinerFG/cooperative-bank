import { Layout } from "./Layout.js";
import { PathManager } from "../../utils/PathManager.js";

/**
 * Represents the footer layout component for the application.
 * Extends the Layout class and provides specific implementations for rendering,
 * managing paths, and setting up event listeners for the footer.
 *
 * @class
 * @extends Layout
 */
export class Footer extends Layout {
  /**
   * Returns the HTML template for the footer.
   *
   * @protected
   * @override
   * @returns {string}
   */
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

  /**
   * Renders the footer at the specified position within the document body.
   *
   * @protected
   * @override
   */
  _render() {
    super._render("beforeend");
  }

  /**
   * Updates asset paths for the footer icons and HTML elements.
   * Uses the PathManager utility to assign the correct paths for the footer icon,
   * brand link, and icon link.
   *
   * @protected
   * @override
   */
  _pathHandler() {
    PathManager.updateIcon(".footer__icon", "icon-globe.svg");
    PathManager.updateHtml(".footer__brand-name", "home", "index.html");
    PathManager.updateHtml(".footer__icon-link", "home", "index.html");
  }

  /**
   * Sets up event listeners specific to the footer component.
   * Currently returns false as there are no specific listeners to set up.
   *
   * @protected
   * @override
   * @returns {boolean} Returns false as there are no listeners to establish.
   */
  _setupListeners() {
    return false;
  }
}
