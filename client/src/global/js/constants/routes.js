export default {
  landing: {
    path: `/`,
    pageModule: () => import('../../../public/js/pages/landing/LandingPage.js'),
  },
  login: {
    path: '/login',
    pageModule: () => import('../../../public/js/pages/login/LoginPage.js'),
  },
  register: {
    path: '/register',
    pageModule: () =>
      import('../../../public/js/pages/register/RegisterPage.js'),
  },
  home: {
    path: `/app`,
    pageModule: () => import('../../../app/js/pages/home/HomePage.js'),
  },
  common: {
    myAccount: {
      path: `/app/my-account`,
      pageModule: () =>
        import('../../../app/js/pages/common/my-account/MyAccountPage.js'),
    },
    settings: {
      path: `/app/settings`,
      pageModule: () =>
        import('../../../app/js/pages/common/settings/SettingsPage.js'),
    },
  },
  wallet: {
    transfer: {
      path: `/app/wallet/transfer`,
      pageModule: () =>
        import('../../../app/js/pages/wallet/transfer/TransferPage.js'),
    },
    extract: {
      path: `/app/wallet/extract`,
      pageModule: () =>
        import('../../../app/js/pages/wallet/extract/ExtractPage.js'),
    },
  },
  loan: {
    newRequest: {
      path: `/app/loan/new-request`,
      pageModule: () =>
        import('../../../app/js/pages/loan/new-request/NewRequestPage.js'),
    },
    requests: {
      path: `/app/loan/requests`,
      pageModule: () =>
        import('../../../app/js/pages/loan/requests/RequestsPage.js'),
    },
    requestDetails: {
      path: `/app/loan/request/details`,
      pageModule: () =>
        import('../../../app/js/pages/loan/requests/RequestDetailsPage.js'),
    },
    overview: {
      path: `/app/loan/overview`,
      pageModule: () =>
        import('../../../app/js/pages/loan/overview/OverviewPage.js'),
    },
    overviewDetails: {
      path: `/app/loan/overview/details`,
      pageModule: () =>
        import('../../../app/js/pages/loan/overview/LoanDetailsPage.js'),
    },
    timeline: {
      path: `/app/loan/timeline`,
      pageModule: () =>
        import('../../../app/js/pages/loan/timeline/TimelinePage.js'),
    },
  },
  investment: {
    search: {
      path: `/app/investment/search`,
      pageModule: () =>
        import('../../../app/js/pages/investment/search/SearchPage.js'),
    },
    reports: {
      path: `/app/investment/reports`,
      pageModule: () =>
        import('../../../app/js/pages/investment/reports/ReportsPage.js'),
    },
  },
};
