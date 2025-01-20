import { PageView } from '../../../../global/js/views/PageView.js';

export default class HomePageView extends PageView {
  get _headerTemplate() {
    return `
    <header class="header">
        <div class="brand-container">
          <img class="brand-icon" src="/public/static/assets/icons/icon-globe.svg" alt="Cooperative Bank Icon"/>
          <span class="brand-name">COOPERATIVE BANK</span>
        </div>
        <div class="login-container">
          <a href="/login">
            Login
            <img class="login-icon" src="/public/static/assets/icons/icon-login.svg" alt="Login"/>
          </a>
        </div>
      </header>
    `;
  }

  /**
   * @param {Object} socialMediaMap
   * @param {string} socialMediaMap.href
   * @param {string} socialMediaMap.src
   * @param {string} socialMediaMap.alt
   * @return {string}
   */
  _buildFooterSocialMedia(socialMediaMap) {
    return socialMediaMap
      .map((sm) => {
        return `
        <a href="${sm.href}">
          <img class="social-media__icon" src="${sm.src}" loading="lazy" alt="${sm.alt}" />
        </a>
      `;
      })
      .join('');
  }

  _buildFooterContact() {
    const socialMediaMap = [
      {
        href: '#',
        src: '/public/static/assets/icons/icon-instagram.svg',
        alt: 'Instagram Logo',
      },
      {
        href: '#',
        src: '/public/static/assets/icons/icon-facebook.svg',
        alt: 'Facebook Logo',
      },
      {
        href: '#',
        src: '/public/static/assets/icons/icon-linkedin.svg',
        alt: 'Linkedin Logo',
      },
      {
        href: '#',
        src: '/public/static/assets/icons/icon-youtube.svg',
        alt: 'Youtube Logo',
      },
    ];
    return `
      <div class="footer-container footer__contact">
        <h2 class="h2">Contact us</h2>
        <address class="address">
          <p>(650) 999-9999</p>
          <p>California St, Downtown Palo Alto, Palo Alto, CA 94301, United States</p>
          <p>sac@cooperativebank.com</p>
        </address>
        <div class="social-media">
          ${this._buildFooterSocialMedia(socialMediaMap)}
        </div>
      </div>
    `;
  }

  _buildFooterDeveloper() {
    const socialMediaMap = [
      {
        href: 'https://www.linkedin.com/in/cleiner-furlani-a99221286/',
        src: '/public/static/assets/icons/icon-linkedin.svg',
        alt: 'Linkedin Logo',
      },
      {
        href: 'https://github.com/cleinerfg',
        src: '/public/static/assets/icons/icon-github.svg',
        alt: 'Github Logo',
      },
    ];
    return `
      <div class="footer-container footer__developer">
        <h2 class="h2">Development</h2>
        <p>By Cleiner Furlani</p>
        <div class="social-media">
          ${this._buildFooterSocialMedia(socialMediaMap)}
        </div>
      </div>
    `;
  }

  get _footerTemplate() {
    return `
      <footer class="footer">
        ${this._buildFooterContact()}
        ${this._buildFooterDeveloper()}
      </footer>
    `;
  }

  get _pageTitle() {
    return 'Cooperative Bank';
  }

  get _template() {
    return this._headerTemplate + this._footerTemplate;
  }
}
