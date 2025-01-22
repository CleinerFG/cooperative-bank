import('../../../css/pages/landing.css');

import { PublicPageView } from '../../views/PublicPageView.js';

export default class LandingPageView extends PublicPageView {
  get _featuresMap() {
    return [
      {
        title: 'Ask friends for loans',
        texts: [
          'Use the Cooperative Bank to request loans from your friends and family.',
          'We provide an innovative way to borrow money.',
          " You're in control! You decide from whom you want to borrow.",
        ],
        imgFile: 'handshake.jpeg',
        imgAlt: 'handshake',
      },
      {
        title: 'Invest your money',
        texts: [
          'Investing in the Cooperative Bank is simple and accessible.',
          'With just a few clicks, you can start growing your money.',
          'All of this is free of administrative fees.',
        ],
        imgFile: 'easy-invest.jpeg',
        imgAlt: 'Smiling woman',
      },
      {
        title: 'Fast and secure transfers',
        texts: [
          'Make your transactions quickly and easily.',
          'All in just a few seconds and with complete security.',
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
   * @param {Object} feature
   * @param {string} feature.title
   * @param {string[]} feature.texts
   * @param {string} feature.imgFile
   * @param {string} feature.imgAlt
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
          <img class="img" src="${PublicPageView._ASSETS_PATH}/images/${feature.imgFile}" loading="lazy" alt="${feature.imgAlt}"/>
        </div>
        <div class="content-container">
          <h2 class="h2">${feature.title}</h2>
          <div class="text-container">${texts}</div>
        </div>
      </section>
    `;
  }

  /**
   * @param {'contact'|'developer'} type
   */
  _buildSocialMediaTemplate(type) {
    return this._socialMediaMap[type]
      .map((sm) => {
        return `
        <a href="${sm.href}">
          <img class="social-media__icon" src="${PublicPageView._ASSETS_PATH}/icons/${sm.iconFile}" loading="lazy" alt="${sm.iconAlt}" />
        </a>
      `;
      })
      .join('');
  }

  _buildContactTemplate() {
    return `
      <div class="footer-container footer__contact">
        <h2 class="h2">Contact us</h2>
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
        <h2 class="h2">Development</h2>
        <p>By Cleiner Furlani</p>
        <div class="social-media">
          ${this._buildSocialMediaTemplate('developer')}
        </div>
      </div>
    `;
  }

  get _headerTemplate() {
    return `
    <header class="header">
        <div class="brand-container">
          <img class="brand-icon" src="${PublicPageView._ASSETS_PATH}/icons/icon-globe.svg" alt="Cooperative Bank Icon"/>
          <span class="brand-name">COOPERATIVE BANK</span>
        </div>
        <div class="login-link-container">
          <a href="/login">
            Login
            <img class="login-icon" src="${PublicPageView._ASSETS_PATH}/icons/icon-login.svg" alt="Login"/>
          </a>
        </div>
      </header>
    `;
  }

  get _heroTemplate() {
    return `
    <section class="section hero-section">
      <div class="img-container">
        <img class="img" src="${PublicPageView._ASSETS_PATH}/images/bank.jpeg" alt="Modern Bank" />
      </div>
      <div class="content-container">
        <h1 class="h1">Cooperation that connects people</h1>
        <button class="btn"><a href="/register">Sign Up</a></button>
      </div>
    </section>
    `;
  }

  get _missionTemplate() {
    return `
    <section class="section mission-section">
      <div class="content-container">
        <h2 class="h2">
          The <strong class="text-strong">Cooperative Bank</strong> seeks to
          transform the way people connect financially
        </h2>
        <p class="text">
          Our mission is to create a collaborative banking system, where each
          customer is also a partner, joining forces to grow together and
          generate prosperity for all.
        </p>
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

  _initComponents() {}
}
