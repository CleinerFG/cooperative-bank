import Page from '../../../../../global/js/core/Page.js';

export default class ReportsPage extends Page {
  constructor() {
    super();
    this._init();
  }

  get _template() {
    return `
    <h1 class="section-h1">In development</h1>
    <p class="info-text">This page is under development...</p>
    `;
  }

  get _pageTitle() {
    return 'investment reports';
  }
}