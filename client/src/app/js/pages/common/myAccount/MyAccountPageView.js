import('../../../../css/pages/my-account.css');

import { PageView } from '../../../../../global/js/views/PageView.js';

export default class MyAccountPageView extends PageView {
  get _template() {
    return `
     <div class="cover-photo">
      <div class="profile-header">
        <img src="/app/static/assets/images/profile.webp" alt="Profile photo" class="profile-photo">
        <h1 class="profile-name">Meg Thomas</h1>
      </div>
      </div>
      <div class="profile-info">
        <div class="info-item">
          <span class="info-label">Date of birth</span>
          <span class="info-value">15/06/2002</span>
        </div>
        <div class="info-item">
          <span class="info-label">E-mail</span>
          <span class="info-value">meg.thomas@gmail.com</span>
        </div>
        <div class="info-item">
          <span class="info-label">Registration date</span>
          <span class="info-value">20/01/2025</span>
        </div>
      </div>
    `;
  }

  get _pageTitle() {
    return 'My Account';
  }

  _initComponents() {}
}
