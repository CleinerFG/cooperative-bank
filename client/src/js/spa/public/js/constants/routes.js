export const PAGE_ROUTES = {
  landing: {
    path: `/`,
    pageModule: () => import('../pages/landing/LandingPage.js'),
  },
  login: {
    path: '/login',
    pageModule: () => import('../pages/login/LoginPage.js'),
  },
  register: {
    path: '/register',
    pageModule: () => import('../pages/register/RegisterPage.js'),
  },
};

export const ASSETS_ROUTE = `/public/static/assets`;
