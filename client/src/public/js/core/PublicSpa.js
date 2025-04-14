import Spa from '../../../global/js/core/Spa.js';
import router from '../../../global/js/core/Router.js';

class PublicSpa extends Spa {
  _setup() {
    router.init();
  }
}

export default new PublicSpa();
