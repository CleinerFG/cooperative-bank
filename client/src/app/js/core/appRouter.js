import { Router } from '../../../global/js/core/Router.js';
import { PAGE_ROUTES } from '../constants/routes.js';

const routes = [
  {
    path: PAGE_ROUTES.home,
    pageModule: () => import('../pages/home/HomePage.js'),
  },
  {
    path: PAGE_ROUTES.common.myAccount,
    pageModule: () => import('../pages/common/my-account/MyAccountPage.js'),
  },
  {
    path: PAGE_ROUTES.common.settings,
    pageModule: () => import('../pages/common/settings/SettingsPage.js'),
  },
  {
    path: PAGE_ROUTES.loan.requests,
    pageModule: () => import('../pages/loan/requests/LoanRequestsPage.js'),
  },
  {
    path: PAGE_ROUTES.loan.overview,
    pageModule: () => import('../pages/loan/overview/OverviewPage.js'),
  },
];

export const appRouter = new Router(routes);
