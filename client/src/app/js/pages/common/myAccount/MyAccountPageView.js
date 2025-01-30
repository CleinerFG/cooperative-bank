import('../../../../css/pages/my-account.css');

import { PageView } from '../../../../../global/js/views/PageView.js';
import { simulateWait } from '../../../../../global/js/utils/tests.js';

export default class MyAccountPageView extends PageView {
  get _template() {
    return `
     <div class="cover-photo">
      <div class="profile-header">
        <div class="photo-container">
          <div id="photo-loader" class="loader"></div>
          <img id="profile-photo" class="profile-photo" alt="Profile photo">
        </div>
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

  /**
   * @note
   * This method is not necessary it is only for displaying the skeleton while loading the image
   */
  async _simulateImgWait() {
    const imgSrc = '/app/profile-image/user_123.webp';
    await simulateWait();

    const imgElement = document.getElementById('profile-photo');
    imgElement.setAttribute('src', imgSrc);
    imgElement.onload = () => {
      document.getElementById('photo-loader').remove();
    };
  }

  _initComponents() {
    this._simulateImgWait();
  }
}
