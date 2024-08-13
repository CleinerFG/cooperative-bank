import { sanitizeHtml } from "./sanitizeHtml.js";

export function insertHtml(parent, position, htmlStr) {
  parent.insertAdjacentHTML(position, sanitizeHtml(htmlStr));
}
