import Page from '../../../../../global/js/core/Page.js';
import accountService from '../../../services/AccountService.js';
import { InfoDataDisplay } from '../../../components/common/InfoDataDisplay.js';
import { ApiDataNotDefinedError } from '../../../errors/ApiDataNotDefinedError.js';
import { translate } from '../../../../../global/js/i18n/Translator.js';

export default class MyAccountPage extends Page {
  /**
   * @type {UserInfo}
   */
  #apiData;
  /**
   * @type {InfoDataDisplay}
   */
  #infoDataDisplay;

  constructor() {
    super();
    this._init();
    this._setup();
  }

  get _pageTitle() {
    return translate('myAccount');
  }

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
      <div class="info-container account-details"></div>
    `;
  }

  /**
   * @type {Item[]}
   */
  get #infoDataItems() {
    const iconBasePath = '/account/';
    return [
      {
        label: translate('birthDate'),
        apiDataProp: 'birth',
        valueFormatter: 'date',
        iconPath: iconBasePath + 'icon-calendar.svg',
      },
      {
        label: 'CPF',
        apiDataProp: 'cpf',
        valueFormatter: 'cpf',
        iconPath: iconBasePath + 'icon-document.svg',
      },
      {
        label: translate('email'),
        apiDataProp: 'email',
        iconPath: iconBasePath + 'icon-email.svg',
      },
      {
        label: translate('registerDate'),
        apiDataProp: 'registration',
        valueFormatter: 'date',
        iconPath: iconBasePath + 'icon-register.svg',
      },
    ];
  }

  #infoDataDisplayHandler() {
    const container = document.querySelector('.info-container.account-details');
    const params = {
      containerElement: container,
      items: this.#infoDataItems,
    };
    this.#infoDataDisplay = new InfoDataDisplay(params);
  }

  async #loadProfileImage() {
    try {
      const url = await accountService.getProfileImgUrl();
      const imgElement = document.getElementById('profile-photo');
      imgElement.setAttribute('src', url);
      imgElement.onload = () => {
        document.getElementById('photo-loader').remove();
      };
    } catch (e) {
      console.error(e.message);
    }
  }

  #displayName() {
    if (!this.#apiData) throw new ApiDataNotDefinedError();
    const nameElement = document.getElementById('name');
    nameElement.textContent = this.#apiData.name;
    nameElement.classList.remove('skelon');
  }

  async #fetchData() {
    try {
      this.#apiData = await accountService.getDetails();
      this.#infoDataDisplay.apiData = this.#apiData;
    } catch (e) {
      console.error(e);
    }
  }

  async _setup() {
    this.#infoDataDisplayHandler();
    this.#loadProfileImage();
    await this.#fetchData();
    this.#displayName();
    this.#infoDataDisplay.display();
  }
}
