import { HomePageView } from '../pages/home/HomePageView.js';
import { LoanRequestsPageView } from '../pages/loans/requests/LoanRequestsPageView.js';

class Router {
  static #routes = [
    { path: '/app', view: HomePageView },
    { path: '/app/loan/requests', view: LoanRequestsPageView },
    // { path: '/app/loans/overview', view: LoanRequestsPageView },
  ];

  navigateTo(url) {
    history.pushState(null, null, url);
    this.handleRouting();
  }

  async handleRouting() {
    const potentialMatches = Router.#routes.map((route) => {
      return {
        route: route,
        isMatch: location.pathname === route.path,
      };
    });

    let match = potentialMatches.find(
      (potentialMatch) => potentialMatch.isMatch
    );
    if (!match) {
      match = {
        route: Router.#routes[0],
      };
    }

    new match.route.view();
  }

  init() {
    window.addEventListener('popstate', () => this.handleRouting());

    document.addEventListener('DOMContentLoaded', () => {
      this.handleRouting();
    });
  }
}

export const router = new Router();
