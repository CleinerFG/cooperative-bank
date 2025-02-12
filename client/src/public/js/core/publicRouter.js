import { Router } from '../../../global/js/core/Router.js';
import { PAGE_ROUTES } from '../constants/routes.js';

const routes = [
  {
    path: PAGE_ROUTES.landing,
    pageModule: () => import('../pages/landing/LandingPage.js'),
  },
  {
    path: PAGE_ROUTES.login,
    pageModule: () => import('../pages/login/LoginPage.js'),
  },
  {
    path: PAGE_ROUTES.register,
    pageModule: () => import('../pages/register/RegisterPage.js'),
  },
];

export default new Router(routes);
