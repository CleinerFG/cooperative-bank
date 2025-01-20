import { Router } from '../../../global/js/core/Router.js';

const routes = [
  {
    path: '/',
    viewModule: () => import('../pages/home/HomePageView.js'),
  },
  // {
  //   path: '/login',
  //   viewModule: () => import('../pages/LoginPageView.js'),
  // },
  // {
  //   path: '/register',
  //   viewModule: () => import('../pages/RegisterPageView.js'),
  // },
];

export const publicRouter = new Router(routes);
