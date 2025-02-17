import { Page } from '../../../../../global/js/core/Page.js';

export default class LoanDetailsPage extends Page {
  get _detailsTemplate() {
    return `
    <section class="section">
      <h1 class="section-h1">Loan Details</h1>
    </section>
    `;
  }

  get _pageTitle() {
    return 'Loan Details';
  }

  get _template() {
    return `
    ${this._detailsTemplate}
    `;
  }

  _setup() {
    console.log(this._queryParams);
  }
}
