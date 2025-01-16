import { Router } from '../../../global/js/core/Router.js';

const routes = [
  {
    path: '/app/',
    viewModule: () => import('../pages/home/HomePageView.js'),
  },
  {
    path: '/app/loan/requests',
    viewModule: () => import('../pages/loan/requests/LoanRequestsPageView.js'),
  },
  {
    path: '/app/loan/overview',
    viewModule: () => import('../pages/loan/overview/OverviewPageView.js'),
  },
];

export const appRouter = new Router(routes);
