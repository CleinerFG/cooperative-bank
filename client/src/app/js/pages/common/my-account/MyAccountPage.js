import { Page } from '../../../../../global/js/core/Page.js';
import {
  formatCpf,
  formatDate,
} from '../../../../../global/js/utils/formatters.js';
import { simulateWait } from '../../../../../global/js/utils/tests.js';
import accountService from '../../../services/AccountService.js';

export default class MyAccountPage extends Page {
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
      <div class="info-container">
        <div class="info-item">
          <span class="info-label">Date of birth</span>
          <span id="birth" class="info-value skelon"></span>
        </div>
        <div class="info-item">
          <span class="info-label">CPF</span>
          <span id="cpf" class="info-value skelon"></span>
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

  #removeSkelons() {
    document
      .querySelectorAll('.skelon')
      .forEach((el) => el.classList.remove('skelon'));
  }

  _displayData() {
    if (!this._apiData) return;
    document.getElementById('name').textContent = this._apiData.name;
    document.getElementById('birth').textContent = formatDate(
      this._apiData.birth
    );
    document.getElementById('cpf').textContent = formatCpf(this._apiData.cpf);
    document.getElementById('email').textContent = this._apiData.email;
    document.getElementById('registration').textContent = formatDate(
      this._apiData.registration
    );
    this.#removeSkelons();
  }

  async _fetchData() {
    try {
      await simulateWait();
      this._apiData = await accountService.getUserInfo();
    } catch (e) {
      console.error(e);
    }
  }

  async _setup() {
    this._loadProfileImage();
    await this._fetchData();
    this._displayData();
  }
}
