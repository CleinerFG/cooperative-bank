import { PageView } from '../../../../../global/js/views/PageView.js';
import { simulateWait } from '../../../../../global/js/utils/tests.js';
import { AccountService } from './AccountService.js';

export default class MyAccountPageView extends PageView {
  _apiData;

  get _template() {
    return `
     <div class="cover-photo">
      <div class="profile-header">
        <div class="photo-container">
          <div id="photo-loader" class="loader"></div>
          <img id="profile-photo" class="profile-photo" alt="Profile photo">
        </div>
        <h1 id="name" class="profile-name skelon"></h1>
      </div>
      </div>
      <div class="profile-info">
        <div class="info-item">
          <span class="info-label">Date of birth</span>
          <span id="birth" class="info-value skelon"></span>
        </div>
        <div class="info-item">
          <span class="info-label">E-mail</span>
          <span id="email" class="info-value skelon"></span>
        </div>
        <div class="info-item">
          <span class="info-label">Registration date</span>
          <span id="registration" class="info-value skelon"></span>
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
  async _loadProfileImage() {
    const imgSrc = '/app/profile-image/user_123.webp';
    await simulateWait();

    const imgElement = document.getElementById('profile-photo');
    imgElement.setAttribute('src', imgSrc);
    imgElement.onload = () => {
      document.getElementById('photo-loader').remove();
    };
  }

  _displayData() {
    document.getElementById('name').textContent = this._apiData.name;
    document.getElementById('birth').textContent = this._apiData.birth;
    document.getElementById('email').textContent = this._apiData.email;
    document.getElementById('registration').textContent =
      this._apiData.registration;
  }

  _removeSkelons() {
    document
      .querySelectorAll('.skelon')
      .forEach((el) => el.classList.remove('skelon'));
  }

  async _fetchData() {
    const service = new AccountService();
    try {
      await simulateWait();
      this._apiData = await service.fetch();
      this._displayData();
      this._removeSkelons();
    } catch (e) {
      console.error(e);
    }
  }

  _initComponents() {
    this._loadProfileImage();
    this._fetchData();
  }
}
