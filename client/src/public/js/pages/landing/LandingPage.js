import '../../types/pageComponentsType.js';
import Page from '../../../../global/js/core/Page.js';
import { ASSETS_ROUTE } from '../../constants/routes.js';
import { translate } from '../../../../global/js/i18n/Translator.js';

export default class LandingPage extends Page {
  constructor() {
    super();
    this._init();
    this._setup();
  }

  get _featuresMap() {
    return [
      {
        title: translate('askFriendsLoans'),
        texts: [
          translate('askFriendsLoansTxt1'),
          translate('askFriendsLoansTxt2'),
          translate('askFriendsLoansTxt3'),
        ],
        imgFile: 'handshake.jpeg',
        imgAlt: 'handshake',
      },
      {
        title: translate('investMoney'),
        texts: [
          translate('investMoneyTxt1'),
          translate('investMoneyTxt2'),
          translate('investMoneyTxt3'),
        ],
        imgFile: 'easy-invest.jpeg',
        imgAlt: 'Smiling woman',
      },
      {
        title: translate('fastSecTransfer'),
        texts: [
          translate('fastSecTransferTxt1'),
          translate('fastSecTransferTxt2'),
        ],
        imgFile: 'money.jpeg',
        imgAlt: 'Money and gold coins',
      },
    ];
  }

  get _socialMediaMap() {
    return {
      contact: [
        {
          href: '#',
          iconFile: `icon-instagram.svg`,
          iconAlt: 'Instagram Logo',
        },
        {
          href: '#',
          iconFile: `icon-facebook.svg`,
          iconAlt: 'Facebook Logo',
        },
        {
          href: '#',
          iconFile: `icon-linkedin.svg`,
          iconAlt: 'Linkedin Logo',
        },
        {
          href: '#',
          iconFile: `icon-youtube.svg`,
          iconAlt: 'Youtube Logo',
        },
      ],
      developer: [
        {
          href: 'https://www.linkedin.com/in/cleiner-furlani-a99221286/',
          iconFile: 'icon-linkedin.svg',
          iconAlt: 'Linkedin Logo',
        },
        {
          href: 'https://github.com/cleinerfg',
          iconFile: 'icon-github.svg',
          iconAlt: 'Github Logo',
        },
      ],
    };
  }

  /**
   *
   * @param {LandingFeature} feature
   * @returns
   */
  _buildFeatureTemplate(feature) {
    const texts = feature.texts
      .map((t) => {
        return `<p class="text">${t}</p>`;
      })
      .join('');
    return `
    <section class="section feature-section">
        <div class="img-container">
          <img class="img" src="${ASSETS_ROUTE}/images/${feature.imgFile}" loading="lazy" alt="${feature.imgAlt}"/>
        </div>
        <div class="content-container">
          <h2>${feature.title}</h2>
          <div class="text-container">${texts}</div>
        </div>
      </section>
    `;
  }

  /**
   * @param {'contact'|'developer'} category
   */
  _buildSocialMediaTemplate(category) {
    return this._socialMediaMap[category]
      .map((sm) => {
        return `
        <a href="${sm.href}" target="_blank">
          <img class="icon" src="${ASSETS_ROUTE}/icons/${sm.iconFile}" loading="lazy" alt="${sm.iconAlt}" />
        </a>
      `;
      })
      .join('');
  }

  _buildContactTemplate() {
    return `
      <div class="footer-container footer__contact">
        <h2>${translate('contactUs')}</h2>
        <address class="address">
          <p>(650) 999-9999</p>
          <p>California St, Downtown Palo Alto, Palo Alto, CA 94301, United States</p>
          <p>sac@cooperativebank.com</p>
        </address>
        <div class="social-media">
          ${this._buildSocialMediaTemplate('contact')}
        </div>
      </div>
    `;
  }

  _buildDeveloperTemplate() {
    return `
      <div class="footer-container footer__developer">
        <h2>${translate('development')}</h2>
        <p>${translate('devBy')}</p>
        <div class="social-media">
          ${this._buildSocialMediaTemplate('developer')}
        </div>
      </div>
    `;
  }

  get _headerTemplate() {
    return `
    <header class="landing header">
        <div class="brand-container">
          <img class="brand-icon" src="${ASSETS_ROUTE}/icons/icon-brand.svg" alt="Cooperative Bank Icon"/>
          <span class="brand-name">Cooperative Bank</span>
        </div>
        <div class="login-link-container">
          <a href="/login" data-link>
            ${translate('login')}
            <img class="icon" src="${ASSETS_ROUTE}/icons/icon-login.svg" alt="Login"/>
          </a>
        </div>
      </header>
    `;
  }

  get _heroTemplate() {
    return `
    <section class="section hero-section">
      <div class="img-container">
        <img class="img" src="${ASSETS_ROUTE}/images/bank.jpeg" alt="Modern Bank" />
      </div>
      <div class="content-container">
        <h1>${translate('heroTitle')}</h1>
        <a class="btn glossy" href="/register" data-link>${translate('signUp')}</a>
      </div>
    </section>
    `;
  }

  get _missionTemplate() {
    return `
    <section class="section mission-section">
      <div class="content-container">
        <h2>${translate('missionTitle')}</h2>
        <p class="text">${translate('missionTxt')}</p>
      </div>
    </section>
    `;
  }

  get _featuresTemplate() {
    return this._featuresMap.map(this._buildFeatureTemplate).join('');
  }

  get _footerTemplate() {
    return `
      <footer class="footer">
        ${this._buildContactTemplate()}
        ${this._buildDeveloperTemplate()}
      </footer>
    `;
  }

  get _pageTitle() {
    return 'Cooperative Bank';
  }

  get _template() {
    return (
      this._headerTemplate +
      this._heroTemplate +
      this._missionTemplate +
      this._featuresTemplate +
      this._footerTemplate
    );
  }

  _setup() {
    this._handleRoutes('[data-link]');
  }
}
