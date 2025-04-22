import routes from '../constants/routes.js';
import authService from '../services/AuthService.js';

class Router {
  #routes;
  #isAuth = false;
  constructor(routesMap) {
    this.#routes = Router.#flatRoutes(routesMap);
  }

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

  #extractQueryParams(search) {
    const params = new URLSearchParams(search);
    return Object.fromEntries(params.entries());
  }

  async #handleProtectRoutes(url) {
    if (this.#isAuth) return false;

    const isProtect = url.pathname.startsWith('/app');
    if (!isProtect) return false;

    const res = await authService.check();
    this.#isAuth = res.ok;

    if (!this.#isAuth) {
      window.location.href = '/login';
      return true;
    }
    return false;
  }

  async #handleRouting() {
    const url = new URL(location.href);

    const redirect = await this.#handleProtectRoutes(url);
    if (redirect) return;

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

  navigateTo(url) {
    history.pushState(null, null, url);
    this.#handleRouting();
  }

  init() {
    window.addEventListener('popstate', this.#handleRouting.bind(this));
    this.#handleRouting();
  }
}

const router = new Router(routes);

export default router;
