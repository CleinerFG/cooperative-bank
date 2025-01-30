const BASE_URL = '/app';
export const PAGE_ROUTES = {
  home: `${BASE_URL}`,
  common: {
    myAccount: `${BASE_URL}/my-account`,
    settings: `${BASE_URL}/settings`,
  },
  wallet: {
    transfer: `${BASE_URL}/wallet/transfer`,
    extract: `${BASE_URL}/wallet/extract`,
  },
  loan: {
    requests: `${BASE_URL}/loan/requests`,
    payments: `${BASE_URL}/loan/payments`,
    overview: `${BASE_URL}/loan/overview`,
    timeline: `${BASE_URL}/loan/timeline`,
  },
  investments: {
    all: `${BASE_URL}/investments/all`,
    reports: `${BASE_URL}/investments/reports`,
  },
};

export const ASSETS_ROUTE = `${BASE_URL}/static/assets`;
