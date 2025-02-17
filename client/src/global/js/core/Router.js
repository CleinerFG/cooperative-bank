import '../types/routesType.js';

export class Router {
  #routes;
  /**
   * @param {Route[]} routes
   */
  constructor(routes) {
    this.#routes = routes;
  }

  /**
   * @param {string} url
   */
  navigateTo(url) {
    history.pushState(null, null, url);
    this.#handleRouting();
  }

  /**
   * @param {string} search
   */
  #extractQueryParams(search) {
    const params = new URLSearchParams(search);
    return Object.fromEntries(params.entries());
  }

  async #handleRouting() {
    const url = new URL(location.href);
    const currentPath = url.pathname;
    const queryParams = this.#extractQueryParams(url.search);

    let match = this.#routes.find((route) => route.path === currentPath);

    if (!match) {
      match = this.#routes[0];
    }

    const module = await match.pageModule();
    const PageClass = module.default;
    new PageClass(queryParams);
  }

  init() {
    window.addEventListener('popstate', this.#handleRouting.bind(this));
    this.#handleRouting();
  }
}
