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
  wallet: {
    transfer: {
      path: `${BASE_URL}/wallet/transfer`,
      pageModule: () => import('../pages/wallet/transfer/TransferPage.js'),
    },
    extract: {
      path: `${BASE_URL}/wallet/extract`,
      pageModule: () => import('../pages/wallet/extract/ExtractPage.js'),
    },
  },
  loan: {
    newRequest: {
      path: `${BASE_URL}/loan/new-request`,
      pageModule: () => import('../pages/loan/new-request/NewRequestPage.js'),
    },
    requests: {
      path: `${BASE_URL}/loan/requests`,
      pageModule: () => import('../pages/loan/requests/RequestsPage.js'),
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
      pageModule: () => import('../pages/loan/timeline/TimelinePage.js'),
    },
  },
  investment: {
    search: {
      path: `${BASE_URL}/investment/search`,
      pageModule: () => import('../pages/investment/search/SearchPage.js'),
    },
    reports: {
      path: `${BASE_URL}/investment/reports`,
      pageModule: () => import('../pages/investment/reports/ReportsPage.js'),
    },
  },
};

export const ASSETS_ROUTE = `${BASE_URL}/static/assets`;
