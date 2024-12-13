import { HomePageView } from "../pages/home/HomePageView.js";

export class Router {
  #routes = [
    { path: '/app', view: HomePageView },
    // { path: '/app/loans', controller: () => console.log('View Loans!') },
    // {
    //   path: '/app/investments',
    //   controller: () => console.log('View Investments!'),
    // },
  ];
  constructor() {
    this.#init();
  }

  #navigateTo(url) {
    history.pushState(null, null, url);
    this.handleRouting();
  }

  async handleRouting() {
    const potentialMatches = this.#routes.map((route) => {
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
        route: this.#routes[0],
      };
    }

    const view = new match.route.view();
    // document.querySelector('#app').innerHTML = await view.getHtml();
  }

  #init() {
    window.addEventListener('popstate', () => this.handleRouting());

    document.addEventListener('DOMContentLoaded', () => {
      // Handle links routes
      // document.body.addEventListener('click', (e) => {
      //   if (e.target.matches('[data-link]')) {
      //     e.preventDefault();
      //     this.#navigateTo(e.target.href);
      //   }
      // });

      this.handleRouting();
    });
  }
}
