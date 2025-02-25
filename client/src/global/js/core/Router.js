import '../types/routesType.js';

export class Router {
  /**@type {RouteMap[]} */
  #routes;
  /**
   * @param {{string:{RouteMap}}} routesMap
   */
  constructor(routesMap) {
    this.#routes = Router.#flatRoutes(routesMap);
  }

  /**
   * @returns {RouteMap[]}
   */
  static #flatRoutes(routes) {
    const result = [];
    const traverse = (node) => {
      Object.values(node).forEach((value) => {
        if (value.path && value.pageModule) {
          result.push({ path: value.path, pageModule: value.pageModule });
        } else if (typeof value === 'object') {
          traverse(value);
        }
      });
    };
    traverse(routes);
    return result;
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
    window.scrollTo(0, 0);
  }

  /**
   * @param {string} url
   */
  navigateTo(url) {
    history.pushState(null, null, url);
    this.#handleRouting();
  }

  init() {
    window.addEventListener('popstate', this.#handleRouting.bind(this));
    this.#handleRouting();
  }
}
