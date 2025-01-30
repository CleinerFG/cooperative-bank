import { Router } from '../../../global/js/core/Router.js';
import { PAGE_ROUTES } from '../constants/routes.js';

const routes = [
  {
    path: PAGE_ROUTES.home,
    viewModule: () => import('../pages/home/HomePageView.js'),
  },
  {
    path: PAGE_ROUTES.common.myAccount,
    viewModule: () => import('../pages/common/my-account/MyAccountPageView.js'),
  },
  {
    path: PAGE_ROUTES.common.settings,
    viewModule: () => import('../pages/common/settings/SettingsPageView.js'),
  },
  {
    path: PAGE_ROUTES.loan.requests,
    viewModule: () => import('../pages/loan/requests/LoanRequestsPageView.js'),
  },
  {
    path: PAGE_ROUTES.loan.overview,
    viewModule: () => import('../pages/loan/overview/OverviewPageView.js'),
  },
];

export const appRouter = new Router(routes);
