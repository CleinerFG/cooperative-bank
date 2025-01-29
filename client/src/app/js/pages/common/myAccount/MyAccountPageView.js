import { PageView } from '../../../../../global/js/views/PageView.js';

export default class MyAccountPageView extends PageView {
  get _template() {
    return `
    <h1 class="section__h1">In development</h1>
    <p class="info-text">This page is under development...</p>
    `;
  }

  get _pageTitle() {
    return 'My Account';
  }

  _initComponents() {}
}
