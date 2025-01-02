export class Router {
  static #routes = [
    {
      path: '/app/',
      viewModule: () => import('../pages/home/HomePageView.js'),
    },
    {
      path: '/app/loan/requests',
      viewModule: () =>
        import('../pages/loan/requests/LoanRequestsPageView.js'),
    },
    {
      path: '/app/loan/overview',
      viewModule: () => import('../pages/loan/overview/OverviewPageView.js'),
    },
  ];

  constructor() {
    this.#init();
  }

  /**
   * @param {string} url
   */
  static navigateTo(url) {
    history.pushState(null, null, url);
    Router.handleRouting();
  }

  static async handleRouting() {
    let match = Router.#routes.find(
      (route) => route.path === location.pathname
    );

    if (!match) {
      match = Router.#routes[0];
    }

    const module = await match.viewModule();
    const ViewClass = module.default;
    new ViewClass();
  }

  #init() {
    window.addEventListener('popstate', () => Router.handleRouting());

    document.addEventListener('DOMContentLoaded', () => {
      Router.handleRouting();
    });
  }
}
