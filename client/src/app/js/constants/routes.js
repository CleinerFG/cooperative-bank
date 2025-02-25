const BASE_URL = '/app';
export const PAGE_ROUTES = {
  home: {
    path: `${BASE_URL}`,
    pageModule: () => import('../pages/home/HomePage.js'),
  },
  common: {
    myAccount: {
      path: `${BASE_URL}/my-account`,
      pageModule: () => import('../pages/common/my-account/MyAccountPage.js'),
    },
    settings: {
      path: `${BASE_URL}/settings`,
      pageModule: () => import('../pages/common/settings/SettingsPage.js'),
    },
  },
  loan: {
    newRequest: {
      path: `${BASE_URL}/loan/new-request`,
      pageModule: () => import('../pages/loan/new-request/NewRequestPage.js'),
    },
    requests: {
      path: `${BASE_URL}/loan/requests`,
      pageModule: () => import('../pages/loan/requests/LoanRequestsPage.js'),
    },
    requestDetails: {
      path: `${BASE_URL}/loan/request/details`,
      pageModule: () => import('../pages/loan/requests/RequestDetailsPage.js'),
    },
    overview: {
      path: `${BASE_URL}/loan/overview`,
      pageModule: () => import('../pages/loan/overview/OverviewPage.js'),
    },
    overviewDetails: {
      path: `${BASE_URL}/loan/overview/details`,
      pageModule: () => import('../pages/loan/overview/LoanDetailsPage.js'),
    },
    timeline: {
      path: `${BASE_URL}/loan/timeline`,
      pageModule: () => import('../pages/loan/timeline/LoanTimelinePage.js'),
    },
  },
};

export const ASSETS_ROUTE = `${BASE_URL}/static/assets`;
