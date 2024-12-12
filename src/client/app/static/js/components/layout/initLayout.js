import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Theme } from './Theme.js';

/**
 * Initializes the layout components (Header, Footer, and Theme).
 * Call this function once when setting up the page.
 */
export function initLayout() {
  new Header();
  new Footer();
  new Theme();
}
