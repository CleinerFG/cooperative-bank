import router from '../../../global/js/core/Router.js';
import theme from '../components/common/Theme.js';
import menu from '../components/common/Menu.js';

class Layout {
  #handleRoutes() {
    const anchors = document.querySelectorAll('[data-link]');
    anchors.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        router.navigateTo(element.getAttribute('href'));
      });
    });
  }

  init() {
    theme.init();
    menu.init();
    this.#handleRoutes();
  }
}

export default new Layout();
