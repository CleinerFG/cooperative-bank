import { HomePageView } from '../pages/home/HomePageView.js';
import { LoanRequestsPageView } from '../pages/loan/requests/LoanRequestsPageView.js';
import { OverviewPageView } from '../pages/loan/overview/OverviewPageView.js';

export class Router {
  static #routes = [
    { path: '/app/', view: HomePageView },
    { path: '/app/loan/requests', view: LoanRequestsPageView },
    { path: '/app/loan/overview', view: OverviewPageView },
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

    new match.view();
  }

  #init() {
    window.addEventListener('popstate', () => Router.handleRouting());

    document.addEventListener('DOMContentLoaded', () => {
      Router.handleRouting();
    });
  }
}
