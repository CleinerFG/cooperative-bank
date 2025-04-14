import Spa from '../../../global/js/core/Spa.js';
import layout from './Layout.js';
import router from '../../../global/js/core/Router.js';
import notificationManager from './NotificationManager.js';

class SpaApp extends Spa {
  _setup() {
    router.init();
    layout.init();
    notificationManager.init();
  }
}

export default new SpaApp();
