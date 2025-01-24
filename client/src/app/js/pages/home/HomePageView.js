import('../../../css/pages/home.css');

import { AppPageView } from '../../views/AppPageView.js';
import { featureGroups } from './components/FeatureGroups.js';
import { appRouter } from '../../core/appRouter.js';

/**
 * Represents the view for the homepage, including sections for financial statement, features, and events.
 */
export default class HomePageView extends AppPageView {
  get _statementTemplate() {
    return `
    <section class="section statement">
      <h1 class="section__h1 statement__title">Financial Statement</h1>
      <div class="statement amount">
        <span>Account Amount</span>
        <div class="amount-container">
         <div class="statement__total"><span id="span-amount" class="span-amount">R$ * * * * * *</span></div>
          <button id="amount-visibility-btn" class="btn-unset visibility-btn" data-visibility="off">
          <img id="visibility-icon" class="icon visibility-icon" alt="Closed eye">
        </button>
        </div>
      </div>
    </section>
    `;
  }

  get _eventsTemplate() {
    return `
    <section class="section events">
      <h2 class="section__h2">Events</h2>
    </section>
    `;
  }

  get _featureGroupsTemplate() {
    return featureGroups.template;
  }

  get _pageTitle() {
    return 'home';
  }

  get _template() {
    return (
      this._statementTemplate +
      this._featureGroupsTemplate +
      this._eventsTemplate
    );
  }

  _handleFeatureCardsRoute() {
    featureGroups.groups.forEach(({ featureCards }) => {
      featureCards.forEach((card) => {
        document
          .getElementById(card.anchorId)
          .addEventListener('click', (e) => {
            e.preventDefault();
            appRouter.navigateTo(card.endpoint);
          });
      });
    });
  }

  async _initComponents() {
    const [AccountAmount, EventGroup] = await Promise.all([
      import('./components/AccountAmount.js'),
      import('./components/EventGroup.js'),
    ]);

    new AccountAmount.default();
    new EventGroup.default(false);
    this._handleFeatureCardsRoute();
  }
}
