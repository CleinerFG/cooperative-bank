import { Router } from '../../../global/js/core/Router.js';
import { PAGE_ROUTES } from '../constants/routes.js';

const routes = [
  {
    path: PAGE_ROUTES.landing,
    viewModule: () => import('../pages/landing/LandingPageView.js'),
  },
  {
    path: PAGE_ROUTES.login,
    viewModule: () => import('../pages/login/LoginPageView.js'),
  },
  {
    path: PAGE_ROUTES.register,
    viewModule: () => import('../pages/register/RegisterPageView.js'),
  },
];

export const publicRouter = new Router(routes);
